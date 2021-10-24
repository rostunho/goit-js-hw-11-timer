class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value='days']`),
      hours: document.querySelector(`${this.selector} [data-value='hours']`),
      mins: document.querySelector(`${this.selector} [data-value='mins']`),
      secs: document.querySelector(`${this.selector} [data-value='secs']`),
    };
  }

  run() {
    setInterval(() => {
      const deltaTime = this.targetDate - Date.now();
      const liveTime = this.getTimeComponents(deltaTime);

      this.refs.days.textContent = liveTime.days;
      this.refs.hours.textContent = liveTime.hours;
      this.refs.mins.textContent = liveTime.mins;
      this.refs.secs.textContent = liveTime.secs;
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
}

export default CountdownTimer;
