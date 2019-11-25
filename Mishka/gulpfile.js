"use strict";

var gulp = require("gulp");
var del = require("del");
var webp = require("gulp-webp");
var imagemin = require("gulp-imagemin");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var cheerio = require("gulp-cheerio");
var replace = require("gulp-replace");
var less = require("gulp-less");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var csso = require("gulp-csso");
var htmlmin = require("gulp-htmlmin");
var jsmin = require("gulp-uglify");

gulp.task("clean", function () {
  return del("build");
})

gulp.task("copy", function () {
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.html",
  ], {
    base: "source"
  })
    .pipe(gulp.dest("build"));
})

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
})

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
  ]))
    .pipe(gulp.dest("source/img"));
})

gulp.task("sprite", function () {
  return gulp.src("source/img/{logo,icon}-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(cheerio({
      run: function ($) {
        $("[fill]").removeAttr("fill");
      },
      parserOptions: {xmlMode: true}
    }))
    .pipe(replace("&gt;", ">"))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
})

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("minify-html", function () {
  return gulp.src("source/*.html")
    .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true
  }))
    .pipe(gulp.dest("build"));
});

gulp.task("minify-js", function() {
  return gulp.src("source/js/**/*.js")
    .pipe(jsmin())
    .pipe(gulp.dest("build/js"))
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/*.svg", gulp.series("sprite", "refresh"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
})

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "minify-html",
  "minify-js",
  "sprite"
));

gulp.task("start", gulp.series("build", "server"));
