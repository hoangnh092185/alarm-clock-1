var Time = require('./../js/alarm.js').timeModule;

var currentTime;
var date;
var alarmTime;

var update = function() {
  date = moment().format('HH:mm:ss');
  currentTime.html(moment().format('HH:mm:ss'));
}

$(document).ready(function(){
  currentTime = $('#currentTime');

  $('#alarm-set').submit(function(event) {
    event.preventDefault();
    alarmTime = $("#alarmTime").val();
    var newAlarmTime = moment(alarmTime, "HH:mm");
    var finalAlarmTime = new Time(newAlarmTime);
    console.log(newAlarmTime.hour() + ":" + newAlarmTime.minute());
    $("#wakeupTime").text(alarmTime);
    setInterval(function(){
      currentTimeSeconds = (moment().seconds());
      currentTimeMinutes = (moment().minutes());
      currentTimeHours = (moment().hours());
      console.log(currentTimeHours + ":" + currentTimeMinutes + ":" + currentTimeSeconds);
      update();
      var wakeUp = finalAlarmTime.compareTimes(currentTimeHours, currentTimeMinutes, newAlarmTime);
      if (wakeUp === true) {
        $('#timeToWakeUP').text("WAKE UP!");
      }
    }, 1000);
  });
});
