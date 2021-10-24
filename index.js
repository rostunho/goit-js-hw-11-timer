import CountdownTimer from './js/timer.js';

const timerTo2022 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
});

timerTo2022.run();
