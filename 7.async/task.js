//Задача №1. Будильник-колыбельная
class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.timerId = null;
    }
  
    addClock(time, callback, id) {
      if (id === undefined) {
        throw new Error("Параментр ID не найден!");
      };
  
      if (this.alarmCollection.find(element => element.id === id)) {
        console.error("Звонок с таким ID существует!")
        return;
      } 
      
      this.alarmCollection.push({time, callback, id})
    }
    
  
    removeClock(id) {
      let initialLength = this.alarmCollection.length;
      let indexOfTheId = this.alarmCollection.findIndex(element => element.id === id);
  
      if (indexOfTheId > -1) {
        this.alarmCollection.splice(indexOfTheId, 1);
      }
      
      let currentlength = this.alarmCollection.length;
      return currentlength < initialLength;
    }
  
    getCurrentFormattedTime() { 

        let endTime = (number) => {

            if (number < 10) {
                return '0' + number;
            }
            return number;
        }

        let thisTime = new Date();
        return endTime(thisTime.getHours()) + ':' + endTime(thisTime.getMinutes());
    }
  
    start() {
      let checkClock = (element) => {
        if (this.getCurrentFormattedTime() === element.time) {
          element.callback();
        }
      }
  
      if (this.timerId === null) {
        this.timerId = setInterval(() => {
          this.alarmCollection.forEach(obj => checkClock(obj)) 
        })
      }
    }
      
    stop() {
      if (this.timerId !== null) {
        clearInterval(this.timerId);
        this.timerId = null;
      }
    }
  
    printAlarms() {
      this.alarmCollection.forEach(obj => console.log(obj.id, obj.time))
    }  
  
    clearAlarms() {
      this.stop();
      this.alarmCollection.splice(0);
    }
  }

let alarm = new AlarmClock;

  alarm.addClock(alarm.getCurrentFormattedTime(), () => console.log("БУДИЛЬНИК +1"), 1);
  alarm.addClock(alarm.getCurrentFormattedTime(1), function() {console.log("БУДИЛЬНИК +2"); alarm.removeClock(2)}, 2);
  alarm.addClock(alarm.getCurrentFormattedTime(2), function() {console.log("БУДИЛЬНИК +3"); alarm.printAlarms(); alarm.clearAlarms()}, 3);
  alarm.start();
  alarm.printAlarms();