import { useCallback, useEffect, useRef, useState } from 'react';

import Cat from '../../assets/img/cat.png';
import Balloons from '../../assets/img/balloons.png';
import Wishes from '../wishes/wishes';

import './screen.css';

const ScreenType = {
  INTRO: 'intro',
  FAIL: 'fail',
  SUCCESS: 'success',
};

const WISHES = ['счастия', 'здоровья богатырского', 'семейного благополучия', 'удачи', 'теплоты', 'денех', 'маленьких радостей', 'больших радостей', 'вдохновения', 'здоровья близким', 'миру мир', 'приятностей', 'исполнения желаний', 'профессионального удовольствия', 'вкусной еды', 'душевных вечеров'];

const getRandomRangeValue = (min, max) => Math.floor(Math.random() * (max - min));

function Screen() {
  const [screen, setScreen] = useState(ScreenType.INTRO);
  const [wish, setWish] = useState(WISHES[0]);
  const wishPosition = useRef({left: '120px', top: '120px'});

  const changeWish = useCallback(() => {
    setWish(null);
  }, []);

  useEffect(() => {
    if (wish === null) {
      const wishIdx = getRandomRangeValue(0, WISHES.length);
      
      wishPosition.current = {
        left: `${getRandomRangeValue(40, window.innerWidth - 40)}px`,
        top: `${getRandomRangeValue(40, window.innerHeight - 40)}px`
      };
      setWish(WISHES[wishIdx]);
    }
  }, [wish]);

  switch (screen) {
    case ScreenType.FAIL:
      return (
        <div className="screen">
          <h1 className="screen__title">Возвращайся завтра</h1>
          <div className='screen__animation'>
            <img className='screen__animation-img screen__animation-img_bg' src={Cat} alt='чеширский кот'/>
          </div>
        </div>
      );
    case ScreenType.SUCCESS:
      return (
        <>
          <div className="screen">
            <h1 className="screen__title">Поздравляю!!! :D</h1>
            <div className='screen__animation'>
              <img className='screen__animation-img' src={Balloons} alt='Шарики'/>
            </div>
          </div>
          {wish && <Wishes wish={wish} changeWish={changeWish} position={wishPosition?.current}/>}
        </>
      );
    default:
      return (
        <div className="screen">
          <h1 className="screen__title">Признавайся,<br /> у тебя сегодня др?</h1>
          <div className="screen__buttons">
            <button className="screen__button" onClick={() => setScreen(ScreenType.SUCCESS)}>
              <span className="screen__button-text">Да</span>
            </button>
            <button className="screen__button"  onClick={() => setScreen(ScreenType.FAIL)}>
              <span className="screen__button-text">Нет</span>
            </button>
          </div>
        </div>
      );
  }
}

export default Screen;
