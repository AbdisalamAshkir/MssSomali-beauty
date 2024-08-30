
import Countdown from 'react-countdown';
import styles from './time.module.scss';
import Time from './Time';





const Timer = () => {
    // Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <Time days={days} hours={hours}  minutes={minutes} seconds={seconds}/>
  }
};




  return (
    <div className={styles.counter}>
<Countdown date={Date.now() + 6566400000} renderer={renderer}/>,
        

    </div>
  )
}

export default Timer;