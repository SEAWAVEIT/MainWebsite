import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Button = ({ text }) => {
  const btnRef = useRef(null);

  useEffect(() => {
    const btn = btnRef.current;

    const scaleIn = () => {
      gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
    };

    const scaleOut = () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
    };

    btn.addEventListener('mouseenter', scaleIn);
    btn.addEventListener('mouseleave', scaleOut);

    return () => {
      btn.removeEventListener('mouseenter', scaleIn);
      btn.removeEventListener('mouseleave', scaleOut);
    };
  }, []);

  return (
    <button ref={btnRef} className="btn m-8 p-6">
      {text}
    </button>
  );
};

export default Button;
