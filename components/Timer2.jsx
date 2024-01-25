import { useState, useEffect } from 'react';

const Timer2 = () => {
  const [sessionIndex, setSessionIndex] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRest, setIsRest] = useState(false);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    let interval = null;
    if (!isPaused) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else {
          if (minutes === 0) {
            if (isRest) {
              setSessionIndex(sessionIndex + 1);
            }
            setIsRest(!isRest);
            setMinutes(isRest ? 25 : 5);
            setSeconds(0);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused, minutes, seconds, isRest, sessionIndex]);

  const startTimer = () => {
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(true);
  };

  const resetTimer = () => {
    setIsPaused(true);
    setSessionIndex(0);
    setMinutes(25);
    setSeconds(0);
    setIsRest(false);
  };

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  const playAlarm = () => {
    // Add logic to play alarm sound
  };

  return (
    <div className='h-screen w-full bg-cyan-900 flex flex-col items-center justify-center px-3'>
      <div className='mb-8'>
        <h1 className='text-3xl text-white font-bold'>Pomodoro - Timer</h1>
      </div>
      <div className='border-2 w-full md:w-2/4 py-16 md:py-28 shadow-2xl flex flex-col justify-center items-center'>
        <p className='border-2 py-14 w-2/4 shadow-2xl text-white flex justify-center text-4xl md:text-6xl font-bold select-none'>
          {formatTime(minutes)}:{formatTime(seconds)}
        </p>
        <p className='py-7 text-2xl text-white'>Session: {sessionIndex + 1}</p>
        <div>
          {isPaused ? (
            <button
              onClick={startTimer}
              className='px-6 py-1 bg-green-500 rounded-md hover:bg-green-600 text-white text-xl'>
              Start
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              className='px-6 py-1 bg-red-500 rounded-md hover:bg-red-600 text-white text-xl'>
              Pause
            </button>
          )}
          <button
            onClick={resetTimer}
            className='px-6 py-1 bg-green-500 rounded-md hover:bg-green-600 text-white text-xl'>
            Reset
          </button>
        </div>
      </div>
      <style jsx>{`
        button {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default Timer2;
