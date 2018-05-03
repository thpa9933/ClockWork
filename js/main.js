var date = new Date();

var hours = date.getHours();
var minutes = date.getMinutes();
console.log(hours, minutes);


if(minutes >= 1 && minutes <= 14){
  $('.justAfter').css("color", "#D74659");
  $('.justAfter').css("opacity", "1");
}

if(minutes == 15){
    $('.quarter').css("color", "#D74659");
    $('.quarter').css("opacity", "1");
    $('.past').css("color", "#D74659");
    $('.past').css("opacity", "1");
}

if(minutes >= 16 && minutes <= 20){
  $('.justAfter').css("color", "#D74659");
  $('.justAfter').css("opacity", "1");
  $('.quarter').css("color", "#D74659");
  $('.quarter').css("opacity", "1");
  $('.past').css("color", "#D74659");
  $('.past').css("opacity", "1");
}

if(minutes >= 21 && minutes <= 29){
  $('.almost').css("color", "#D74659");
  $('.almost').css("opacity", "1");
  $('.half').css("color", "white");
  $('.half').css("opacity", "1");
  $('.past').css("color", "white");
  $('.past').css("opacity", "1");
}

if(minutes == 30){
  $('.half').css("color", "#D74659");
  $('.half').css("opacity", "1");
  $('.past').css("color", "#D74659");
  $('.past').css("opacity", "1");
}

if(minutes >= 31 && minutes <= 40){
  $('.justAfter').css("color", "#D74659");
  $('.justAfter').css("opacity", "1");
  $('.half').css("color", "#D74659");
  $('.half').css("opacity", "1");
  $('.past').css("color", "#D74659");
  $('.past').css("opacity", "1");
}


//next four conditions need to be for hour + 1
if(minutes >= 41 && minutes <= 45){
  $('.almost').css("color", "#D74659");
  $('.almost').css("opacity", "1");
  $('.quarter').css("color", "#D74659");
  $('.quarter').css("opacity", "1");
  $('.past').css("color", "#D74659");
  $('.past').css("opacity", "1");
}

if(minutes == 45){
  $('.quarter').css("color", "#D74659");
  $('.quarter').css("opacity", "1");
  $('.past').css("color", "#D74659");
  $('.past').css("opacity", "1");
}

if(minutes >= 46 && minutes <= 50){
  $('.justAfter').css("color", "#D74659");
  $('.justAfter').css("opacity", "1");
  $('.quarter').css("color", "#D74659");
  $('.quarter').css("opacity", "1");
  $('.past').css("color", "#D74659");
  $('.past').css("opacity", "1");
}

if(minutes > 50 && minutes < 59){
  $('.almost').css("color", "#D74659");
  $('.almost').css("opacity", "1");
  hours =  hours + 1;
}

//"just after" -> 1 - 14
//"comming up on " -> 50 - 49 & 20 - 29

  if(hours == 1 || hours == 13){
    $('.one').css("color", "white");
    $('.one').css("opacity", "1");
  }
  else if(hours == 2 || hours == 14){
    $('.two').css("color", "white");
    $('.two').css("opacity", "1");
  }
  else if(hours == 3 || hours == 15){
    $('.three').css("color", "white");
    $('.three').css("opacity", "1");
  }
  else if(hours == 4 || hours == 16){
    $('.four').css("color", "white");
    $('.four').css("opacity", "1");
  }
  else if(hours == 5 || hours == 17){
    $('.five').css("color", "white");
    $('.five').css("opacity", "1");
  }
  else if(hours == 6 || hours == 18){
    $('.six').css("color", "white");
    $('.six').css("opacity", "1");
  }
  else if(hours == 7 || hours == 19){
    $('.seven').css("color", "white");
    $('.seven').css("opacity", "1");
  }
  else if(hours == 8 || hours == 20){
    $('.eight').css("color", "white");
    $('.eight').css("opacity", "1");
  }
  else if(hours == 9 || hours == 21){
    $('.nine').css("color", "white");
    $('.nine').css("opacity", "1");
  }
  else if(hours == 10 || hours == 22){
    $('.ten').css("color", "white");
    $('.ten').css("opacity", "1");
  }
  else if(hours == 11 || hours == 23){
    $('.eleven').css("color", "white");
    $('.eleven').css("opacity", "1");
  }
  if(hours == 12 || hours == 24){
    $('.twelve').css("color", "white");
    $('.twelve').css("opacity", "1");
  }


//var currentState = 0;
