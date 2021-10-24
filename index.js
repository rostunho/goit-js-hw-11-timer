import CountdownTimer from './js/timer.js';

const timerToNewYear = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2022'),
});

timerToNewYear.run();
// timerToNewYear.stop();

const timerToWorldCup = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Nov 21, 2022, 19:45'),
});

timerToWorldCup.run();
// timerToDeadline.stop();
