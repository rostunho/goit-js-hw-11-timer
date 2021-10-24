import CountdownTimer from './js/timer.js';

const timerToNewYear = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
});

timerToNewYear.run();
// timerToNewYear.stop();

const timerToDeadline = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Oct 25, 2021'),
});

timerToDeadline.run();
// timerToDeadline.stop();
