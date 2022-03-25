import { useRef } from 'react';

import './wishes.css';

function Wishes({wish, changeWish, position}) {
  const wishRef = useRef(null);

  const handleAnimationEnd = () => {
    const wishOpacity = window.getComputedStyle(wishRef?.current).opacity;

    if (wishOpacity === '0') {
      changeWish();
    }
  }

  return (
    <span className='wishes' ref={wishRef} onAnimationEnd={handleAnimationEnd} style={position}>{wish}</span>
  )
}

export default Wishes;
