var currentTime = null,
        date = null,
        alarmTime = null;

var update = function() {
  date = moment().format('HH:mm:ss');
  currentTime.html(moment().format('HH:mm:ss'));
}

var alarm = function(newAlarmTime){
  if(currentTimeHours === newAlarmTime.hour() && currentTimeMinutes === newAlarmTime.minute()){
    $('#timeToWakeUP').text("Wake Up!");
  }
}

$(document).ready(function(){
  currentTime = $('#currentTime');

  $('#alarm-set').submit(function(event) {
    event.preventDefault();
    alarmTime = $("#alarmTime").val();
    var newAlarmTime = moment(alarmTime, "HH:mm");
    console.log(newAlarmTime.hour() + ":" + newAlarmTime.minute());
    $("#wakeupTime").text(alarmTime);
    setInterval(function(){
      currentTimeSeconds = (moment().seconds());
      currentTimeMinutes = (moment().minutes());
      currentTimeHours = (moment().hours());
      console.log(currentTimeHours + ":" + currentTimeMinutes + ":" + currentTimeSeconds);
      update();
      alarm(newAlarmTime);
    }, 1000);
  });
});
