import React,{useState,useEffect} from 'react'
import './Timer.css'

function Timer({isActive}) {


const [second, setSecond] = useState('00');
const [minute, setMinute] = useState('00');

const [counter, setCounter] = useState(0);

useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => counter + 1);
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter])
    return (
        <div className="time">
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
    )
}

export default Timer
