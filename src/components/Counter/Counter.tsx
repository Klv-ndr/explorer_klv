import { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import './Counter.scss';

const CounterAnimation = () => {
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);

  const handleVisibilityChange = (isVisible: any) => {
    if (isVisible) {
      startCounters();
    }
  };

  const startCounters = () => {
    const targetNumber1 = 1982;
    const targetNumber2 = 284;
    const targetNumber3 = 2190;
    const animationDuration = 5000;
    const steps = 100;
    const stepDuration = animationDuration / steps;

    let currentStep1 = 0;
    let currentStep2 = 0;
    let currentStep3 = 0;

    const interval = setInterval(() => {
      setCounter1((prevCounter1) => {
        currentStep1++;
        if (currentStep1 === steps || prevCounter1 === targetNumber1) {
          clearInterval(interval);
          return prevCounter1;
        } else {
          return Math.floor((targetNumber1 / steps) * currentStep1);
        }
      });

      setCounter2((prevCounter2) => {
        currentStep2++;
        if (currentStep2 === steps || prevCounter2 === targetNumber2) {
          clearInterval(interval);
          return prevCounter2;
        } else {
          return Math.floor((targetNumber2 / steps) * currentStep2);
        }
      });

      setCounter3((prevCounter3) => {
        currentStep3++;
        if (currentStep3 === steps || prevCounter3 === targetNumber3) {
          clearInterval(interval);
          return prevCounter3;
        } else {
          return Math.floor((targetNumber3 / steps) * currentStep3);
        }
      });
    }, stepDuration);
  };

  return (
    <div className="counter">
      <VisibilitySensor onChange={handleVisibilityChange}>
        <div className="counter-animation">
          <h1 className="number-size">{counter1}</h1>
          <h2 className="description-size">Nullam neque</h2>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={handleVisibilityChange}>
        <div className="counter-animation">
          <h1 className="number-size">{counter2}</h1>
          <h2 className="description-size">Sed gravida</h2>
        </div>
      </VisibilitySensor>
      <VisibilitySensor onChange={handleVisibilityChange}>
        <div className="counter-animation">
          <h1 className="number-size">{counter3}</h1>
          <h2 className="description-size">Quisque muis</h2>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default CounterAnimation;
