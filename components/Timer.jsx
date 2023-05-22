import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let clock = setInterval(() => {
      clearInterval(clock);
      setSeconds(seconds - 1);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = 4;
          let seconds = 59;
          setMinutes(minutes);
          setSeconds(seconds);
        }
      }
    }, 1000);

    return () => clearInterval(clock);
  });

  return (
    <div className='h-screen w-full bg-cyan-900 flex flex-col items-center justify-center px-3'>
      <div className='mb-8'>
        <h1 className='text-3xl text-white font-bold'>Pomodoro - Timer</h1>
      </div>
      <div className='border-2 w-full md:w-2/4 py-16 md:py-28 shadow-2xl flex flex-col justify-center items-center'>
        <div className='border-2 py-14 w-2/4 shadow-2xl text-white flex justify-center text-4xl md:text-6xl font-bold select-none'>
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </div>
        <div className='mt-4'>Hellos</div>
      </div>
    </div>
  );
};

export default Timer;
