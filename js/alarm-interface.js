var Time = require('./../js/alarm.js').timeModule;

var currentTime;
var date;
var alarmTime;
var currentTimeHours;
var currentTimeMinutes;
var currentTimeSeconds;

var update = function() {
  currentTimeSeconds = (moment().seconds());
  currentTimeMinutes = (moment().minutes());
  currentTimeHours = (moment().hours());
  date = moment().format('HH:mm:ss');
  currentTime.html(moment().format('HH:mm:ss'));
};

$(document).ready(function(){
  currentTime = $('#currentTime');
  $('#alarm-set').submit(function(event) {
    event.preventDefault();
    alarmTime = $("#alarmTime").val();
    var newAlarmTime = moment(alarmTime, "HH:mm");
    var finalAlarmTime = new Time(newAlarmTime);
    $("#wakeupTime").text(alarmTime);
    setInterval(function(){
      update();
      var wakeUp = finalAlarmTime.compareTimes(currentTimeHours, currentTimeMinutes, newAlarmTime);
      if (wakeUp === true) {
        $('#timeToWakeUP').show();
      }
    }, 1000);

  });
});
