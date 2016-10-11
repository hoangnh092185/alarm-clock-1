function Time(time) {
  this.time = time;
}

Time.prototype.compareTimes = function(currentTimeHours, currentTimeMinutes, alarmTime) {
  if(currentTimeHours === alarmTime.hour() && currentTimeMinutes === alarmTime.minute()){
    return true;
  } else {
    return false;
  }
}

exports.timeModule = Time;
