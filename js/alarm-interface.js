var currentTime = null,
        date = null,
        alarmTime = null;

var update = function() {
  date = moment().format('ss');
  currentTime.html(moment().format('ss'));
}

var alarm = function(alarmTime){
  if(currentTimeSeconds === alarmTime){
    console.log('Wake up!');
  }
}

$(document).ready(function(){
  currentTime = $('#currentTime');

  $('#alarm-set').submit(function(event) {
    event.preventDefault();
    // alarmTime = $("#alarmTime").val();
    alarmTime = 35;
    $("#wakeupTime").text(alarmTime);
    setInterval(function(){
      currentTimeSeconds = (moment().seconds());
      console.log(currentTimeSeconds);
      update();
      alarm(alarmTime);
    }, 1000);
  });
});
