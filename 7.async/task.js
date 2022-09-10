class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null
  }; 

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('error text');
    }; 
    if (this.alarmCollection.some(call => call.id === id)) {
      console.error('Идентификатор уже существует');
    } else {
        this.alarmCollection.push({ id, time, callback });
    };
};

removeClock(id) {
  this.alarmCollection = this.alarmCollection.filter(arr => arr.id !== id);
};

getCurrentFormattedTime() {
  return new Date().toTimeString().slice(0, 5);
};

start() {
  let checkClock = (alarm) => {
    if (call.time == this.getCurrentFormattedTime()) {
      call.callback();
    };
    };
    if (!this.timerId) {
      let result = setInterval(() => this.alarmCollection.forEach(item => checkClock(item)), 1000);
      this.timerId = result;
    };
};

stop() {
  if (this.timerId) {
    clearInterval(this.timerId);
    this.timerId = null;
    };
};

printAlarms() {
  console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length)
  this.alarmCollection.forEach(function(item) {
    console.log('Будильник №' + item.id + ' заведен на ' + item.time)
    })
};

clearAlarms() {
  this.stop();
  this.alarmCollection.splice(0, this.alarmCollection.length);
};
};

function testCase() {
  let signal = new AlarmClock();
  signal.addClock("17:14", () => console.log('Пора вставать'), 1);
  signal.addClock("17:15", () => {
    console.log('Пора вставать!');
    signal.removeClock(2)
}, 2);
  signal.addClock("17:16", () => console.log('Давай, вставай уже'), 3);
  signal.printAlarms();
  signal.start();
};

