const TOTAL_QUESTIONS = 8;

const questions = [
  {
    title: `На какую сумму Роспотребнадзор оштрафовал продуктовую сеть «Вкусвилл»?`,
    options: [
      {
        text: `6,3 млн рублей`,
        answer: `<strong>Верно.</strong> Проверка <a class="question__link" href="#">обнаружила</a> просроченные продукты, но представители
        сети утверждают, что большая часть замечаний не коснулась их качества.`,
        isCorrect: true,
      }, {
        text: `1 млн рублей`,
        answer: `<strong>Нет, немного больше: 6,3 млн рублей.</strong> Проверка <a class="question__link" href="#">обнаружила</a> просроченные
        продукты, но представители сети утверждают, что большая часть замечаний не коснулась их качества.`,
        isCorrect: false,
      }, {
        text: `50 млн рублей`,
        answer: `<strong>Нет, гораздо меньше: 6,3 млн рублей.</strong> Проверка <a class="question__link" href="#">обнаружила</a> просроченные продукты,
        но представители сети утверждают, что большая часть замечаний не коснулась их качества.`,
        isCorrect: false,
      }, {
        text: `Не оштрафовал, а объявил выговор`,
        answer: `<strong>Нет, всё же оштрафовал на 6,3 млн рублей.</strong>
        Проверка <a class="question__link" href="#">обнаружила</a> просроченные продукты, но представители сети утверждают,
        что большая часть замечаний не коснулась их качества.`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Почему бутылку воды «Святой источник» в форме футбольного мяча сняли с продажи?`,
    options: [
      {
        text: `Она оказалась огнеопасной`,
        answer: `<strong>Да</strong>, бутылка благодаря своей форме призмы фокусировала свет так, что он <a class="question__link" href="#">воспламенял</a> окружающие предметы.`,
        isCorrect: true,
      }, {
        text: `Дети играли ею в футбол и разбивали окна`,
        answer: `<strong>Нет</strong>, дело в её форме призмы — она фокусировала свет так, что он <a class="question__link" href="#">воспламенял</a> окружающие предметы.`,
        isCorrect: false,
      }, {
        text: `Она постоянно скатывалась с полок`,
        answer: `<strong>Бутылка была довольно устойчивая</strong>, но благодаря своей форме призмы фокусировала свет так,
        что он <a class="question__link" href="#">воспламенял</a> окружающие предметы.`,
        isCorrect: false,
      }, {
        text: `Её никто не покупал`,
        answer: `<strong>Её покупали</strong>, но бутылка благодаря своей форме призмы фокусировала свет так, что он <a class="question__link" href="#">воспламенял</a> окружающие предметы.`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Сколько денег потеряли основатели WhatsApp после ухода из  Facebook?`,
    options: [
      {
        text: `Они лишились акций на $1,3 млрд`,
        answer: `<strong>Ян Кум и Брайан Эктон действительно могли получить акции на эту сумму,
        если бы проработали в Facebook до ноября 2018 года.</strong> Они ушли досрочно из-за <a class="question__link" href="#">конфликта</a> с руководством.`,
        isCorrect: true,
      }, {
        text: `Они не только лишились акций на $1,3 млрд и выплатили штрафы на $100 млн`,
        answer: `<strong>Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года.</strong>
        Они ушли досрочно из-за <a class="question__link" href="#">конфликта</a> с руководством, но штрафы никто не выплачивал.`,
        isCorrect: false,
      }, {
        text: `Ничего не лишились, к моменту ухода они уже получили всё вознаграждение`,
        answer: `<strong>Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года.</strong>
        Они ушли досрочно из-за <a class="question__link" href="#">конфликта</a> с руководством.`,
        isCorrect: false,
      }, {
        text: `Ничего не лишились, но получили иски за нарушение коммерческой тайны`,
        answer: `<strong>Ян Кум и Брайан Эктон могли получить акции на $1,3 млрд, если бы проработали в Facebook до ноября 2018 года.</strong>
        Они ушли досрочно из-за <a class="question__link" href="#">конфликта</a> с руководством — но коммерческую тайну пока никто не нарушил.`,
        isCorrect: false,
      }
    ],
  }, {
    title: `В какой скандал угодила компания «Газелькин» в июне 2018 года?`,
    options: [
      {
        text: `Предложила клиентам вызвать «водителей-славян» за дополнительную плату`,
        answer: `Компания дала клиентам <a class="question__link" href="#">возможность</a> выбрать водителя славянской внешности
        и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».`,
        isCorrect: true,
      }, {
        text: `Её «Газели» постоянно застревали под мостом с надписью «Газель не проедет»`,
        answer: `Было пару раз, <a class="question__link" href="#">но не в июне</a>. На самом деле компания дала клиентам <a class="question__link" href="#">возможность</a> выбрать водителя
        славянской внешности и российского гражданства. После она переименовала услугу в «идеальный русский язык».`,
        isCorrect: false,
      }, {
        text: `Грузчики разбили антикварный шкаф стоимостью 163 млн рублей`,
        answer: `О таком случае не сообщалось, но зато компания дала клиентам <a class="question__link" href="#">возможность</a> выбрать водителя славянской
        внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».`,
        isCorrect: false,
      }, {
        text: `Выложила персональные данные клиентов — телефоны, адреса, почты — в открытый доступ`,
        answer: `О таком случае не сообщалось, но зато компания дала клиентам <a class="question__link" href="#">возможность</a> выбрать водителя
        славянской внешности и российского гражданства. После скандала она переименовала услугу в «идеальный русский язык».`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Простой вопрос для передышки. До какого порога правительство собирается повысить НДС?`,
    options: [
      {
        text: `20%`,
        answer: `<strong>Да</strong>, НДС <a class="question__link" href="#">собираются</a> повысить с 18% до 20%. Кстати, <a class="question__link" href="#">вот чем</a> это грозит`,
        isCorrect: true,
      }, {
        text: `19%`,
        answer: `<strong>Нет</strong>, всё же именно НДС v повысить с 18% до 20%. Кстати, <a class="question__link" href="#">вот чем</a> это грозит`,
        isCorrect: false,
      }, {
        text: `21%`,
        answer: `<strong>Нет</strong>, НДС v повысить с 18% до 20%. Кстати, <a class="question__link" href="#">вот чем</a> это грозит`,
        isCorrect: false,
      }, {
        text: `Никто не собирается повышать НДС, зато повысят НДФЛ`,
        answer: `<strong>Нет</strong>, всё же именно НДС v повысить с 18% до 20%. Кстати, <a class="question__link" href="#">вот чем</a> это грозит`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Чем займётся Герман Клименко после ухода с поста советника президента по интернету?`,
    options: [
      {
        text: `Проектами в сфере цифровой медицины`,
        answer: `<strong><a href="#">Верно</a></strong>`,
        isCorrect: true,
      }, {
        text: `Станет разрабатывать собственный мессенджер`,
        answer: `<strong>Это вполне возможно, но</strong> сперва он <a class="question__link" href="#">планирует</a> заниматься проектами в сфере цифровой медицины.`,
        isCorrect: false,
      }, {
        text: `Будет советником по медицине`,
        answer: `<strong>Нет</strong>, он <a class="question__link" href="#">планирует</a> заниматься собственными проектами в сфере цифровой медицины.`,
        isCorrect: false,
      }, {
        text: `Отправится в кругосветное путешествие`,
        answer: `Он <a class="question__link" href="#">планирует</a> заниматься собственными проектами в сфере цифровой медицины.`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Какую услугу запустила «Студия Артемия Лебедева» на волне успеха «Экспресс-дизайна»?`,
    options: [
      {
        text: `Экспресс-дизайн не логотипов, а предметов — за 300 тысяч рублей`,
        answer: `<strong>Да</strong>, и заказчик точно так же <a class="question__link" href="#">обязан</a> принять первый предложенный вариант.`,
        isCorrect: true,
      }, {
        text: `Сервис экспресс-маркетинга: за 500 тысяч рублей Артемий Лебедев лично весь месяц будет вести ваш блог`,
        answer: `<strong>Речь об экспресс-дизайне предметов</strong>, и заказчик точно так же <a class="question__link" href="#">обязан</a> принять первый предложенный вариант.`,
        isCorrect: false,
      }, {
        text: `Экспресс-доставку обедов в офис`,
        answer: `<strong>Речь об экспресс-дизайне предметов</strong>, и заказчик точно так же <a class="question__link" href="#">обязан</a> принять первый предложенный вариант.`,
        isCorrect: false,
      }, {
        text: `Создание визиток за 50 тысяч рублей`,
        answer: `<strong>Речь об экспресс-дизайне предметов</strong>, и заказчик точно так же <a class="question__link" href="#">обязан</a> принять первый предложенный вариант.`,
        isCorrect: false,
      }
    ],
  }, {
    title: `Что сказал Олег Тиньков в интервью Владимиру Познеру в рамках ПМЭФ-2018?`,
    options: [
      {
        text: `Это стыдно — нанимать людей, которыми нужно управлять`,
        answer: `<strong>Вопрос был с подвохом</strong>: все эти фразы прозвучали в <a class="question__link" href="#">интервью</a>`,
        isCorrect: true,
      }, {
        text: `Я бы хотел, чтобы на моей гробовой доске было написано слово «Предприниматель»`,
        answer: `<strong>Вопрос был с подвохом</strong>: все эти фразы прозвучали в <a class="question__link" href="#">интервью</a>`,
        isCorrect: true,
      }, {
        text: `Чтобы быть предпринимателем, не нужно никакого образования`,
        answer: `<strong>Вопрос был с подвохом</strong>: все эти фразы прозвучали в <a class="question__link" href="#">интервью</a>`,
        isCorrect: true,
      }, {
        text: `Предприниматели должны быть звёздами и элитой общества`,
        answer: `<strong>Вопрос был с подвохом</strong>: все эти фразы прозвучали в <a class="question__link" href="#">интервью</a>`,
        isCorrect: true,
      }
    ],
  },
];

const results = [
  {
    maxScore: 0,
    comment: `Мне больше интересен футбол`,
    image: `imgAnswer1`,
  }, {
    maxScore: 3,
    comment: `Читаю vc.ru с экрана попутчика в метро`,
    image: `imgAnswer2`,
  }, {
    maxScore: 5,
    comment: `Бизнес это интересно, но где взять столько времени?`,
    image: `imgAnswer3`,
  }, {
    maxScore: 7,
    comment: `Читаю vc.ru каждый день, но работать тоже нужно`,
    image: `imgAnswer4`,
  }, {
    maxScore: 8,
    comment: `Я работаю в редакции vc.ru`,
    image: `imgAnswer5`,
  }
];

let currentQuestion = 1;
let correctAnswers = 0;

const quizBlock = document.querySelector(`.quiz`);
const startWindow = document.querySelector(`#start`).content.querySelector(`.start-window`);
const startButton = startWindow.querySelector(`button`);

const generateQuestionOption = (option, index) => {
  return (
    `<div class="question__option">
      <input class="visually-hidden" type="radio" name="option" id="${index}">
      <label for="${index}">${option.text}</label>
  </div>`
  );
};

const generateQuestion = (question) => {
  return (
    `<section class="quiz__question  question">
      <p class="question__number">${currentQuestion}/${TOTAL_QUESTIONS}</p>
      <p class="question__title">${question.title}</p>
      <form class="question__form"></form>
    </section>`
  );
};

const generateAnswer = (answer) => {
  return (
    `<section class="quiz__answer  answer">
      <p class="answer__number">${currentQuestion}/8</p>
      <p class="answer__title">${questions[currentQuestion - 1].title}</p>
      <p class="answer__text ${answer.isCorrect ? `answer__text--correct` : ``}">${answer.text}</p>
      <p class="answer__answer">${answer.answer}</p>
      <button class="answer__button" type="button">Продолжить</button>
    </section>`
  );
};

const generateResult = () => {
  let result = 0;
  results.forEach((it, index) => {
    if (it.maxScore <= correctAnswers) {
      result = index;
    }
  });

  return (
    `<section class="quiz__result  result">
      <img class="result__img" src="./img/${results[result].image}.png" alt="">
      <div class="result__content">
        <p class="result__number">${correctAnswers} из ${TOTAL_QUESTIONS} правильных ответов</p>
        <p class="result__title">${results[result].comment}</p>
        <div class="result__social  social">
          <a class="social__item  social__item--fb" aria-label="Поделиться результатом в Фейсбук">Поделиться</a>
          <a class="social__item  social__item--vk" aria-label="Поделиться результатом во Вконтакте"></a>
          <a class="social__item  social__item--twitter" aria-label="Поделиться результатом в Твиттер"></a>
        </div>
        <button class="result__button" type="button">Пройти еще раз</button>
      </div>
    </section>`
  );
};

const onAnswerButtonClick = () => {
  if (currentQuestion >= TOTAL_QUESTIONS) {
    quizBlock.innerHTML = generateResult();
    document.querySelector(`.result__button`).addEventListener(`click`, () => {
      currentQuestion = 1;
      correctAnswers = 0;
      openQuestionWindow();
    });
  } else {
    currentQuestion += 1;
    openQuestionWindow();
  }
};

const onQuestionControlClick = (evt) => {
  const choosedOption = questions[currentQuestion - 1].options[evt.target.id];
  if (choosedOption.isCorrect) {
    correctAnswers += 1;
  }
  quizBlock.innerHTML = generateAnswer(choosedOption);
  document.querySelector(`.answer__button`).addEventListener(`click`, onAnswerButtonClick);
};

const openQuestionWindow = () => {
  const question = questions[currentQuestion - 1];
  quizBlock.innerHTML = generateQuestion(question);
  const form = document.querySelector(`.question__form`);
  question.options.forEach((option, index) => {
    form.insertAdjacentHTML(`beforeend`, generateQuestionOption(option, index));
  });
  form.addEventListener(`change`, onQuestionControlClick);
};

const startTest = () => {
  quizBlock.appendChild(startWindow);
  startButton.addEventListener(`click`, () => {
    openQuestionWindow();
  });
};

startTest();
