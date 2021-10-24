class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector(`${this.selector} [data-value='days']`),
      hours: document.querySelector(`${this.selector} [data-value='hours']`),
      mins: document.querySelector(`${this.selector} [data-value='mins']`),
      secs: document.querySelector(`${this.selector} [data-value='secs']`),

      daysDesc: document.querySelector(
        `${this.selector} [data-value='days'] + .label`
      ),
      hoursDesc: document.querySelector(
        `${this.selector} [data-value='hours'] + .label`
      ),
      minsDesc: document.querySelector(
        `${this.selector} [data-value='mins'] + .label`
      ),
      secsDesc: document.querySelector(
        `${this.selector} [data-value='secs'] + .label`
      ),
    };
    this.intervalId = null;
  }

  run() {
    this.intervalId = setInterval(() => {
      if (Date.now() > this.targetDate) {
        alert(`${this.selector}: DAYS GONE`);
        this.stop();
        return;
      }
      const deltaTime = this.targetDate - Date.now();
      const liveTime = this.getTimeComponents(deltaTime);

      this.refs.days.textContent = liveTime.days;
      this.refs.hours.textContent = liveTime.hours;
      this.refs.mins.textContent = liveTime.mins;
      this.refs.secs.textContent = liveTime.secs;

      this.refs.daysDesc.textContent = liveTime.days === '01' ? 'day' : 'days';
      this.refs.hoursDesc.textContent =
        liveTime.hours === '01' ? 'hour' : 'hours';
      this.refs.minsDesc.textContent =
        liveTime.mins === '01' ? 'minute' : 'minutes';
      this.refs.secsDesc.textContent =
        liveTime.secs === '01' ? 'second' : 'seconds';
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    liveTime = this.getTimeComponents(0);
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
