function deriveName () {
  var year=document.getElementById("year-entry").value;
  var month=document.getElementById("month-entry").value;
  var day=document.getElementById("day-entry").value;
  var genders=document.getElementById("gender");
  function getGender(){
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let genderValue=getGender();
  //console.log(gendervalue);
  function monthvalid () {
    if (month<1 || month>12){
      return false;
    } else {
      return true;
    }
  }
  function dayvalid () {
    if (month===2 && Number(year)%4===0){
      if (day>28 || day<1){
        return false;
      } else if (month===2 && day>29){
        return false;
      } else if (month===2 && day<1) {
        return false;
        } else {
          return true;
        }
      } else if (day<1 || day>31){
        return false;
        } else {
          return true;
        }
    }
let monthValidator=monthvalid();
let dayValidator=dayvalid();
//Day of the week(d)=(((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1/10))+DD)mod 7
//CC-is the century digits, YY-is the year digits(e.g in 1970 YY=70, CC=19)

function dayOfWeek(d,m,y){
  let t=[0,3,2,5,0,3,5,1,4,6,2,4];
  y-=(m<3) ? 1:0;
  return (y+y/4-y/100+y/400+t[m-1]+d)%7;
}
let dayOfTheWeekNumber=Math.floor(dayOfWeek(day,month,year));
//console.log(dayOfTheWeekNumber);
let index=dayOfTheWeekNumber;

let daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let maleAkanNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
let femaleAkanNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
if (genderValue=="male" &&monthValidator&&dayValidator){
  document.getElementById('output').textContent="You were born on" +daysOfWeek[index]+"and your name is "+maleAkanNames[index];
  document.getElementById('display-name').textContent="Here is your Akan name:";
  document.getElementById('output').style.fontSize="25px";
  document.querySelector('h1').textContent="Congratulation"+" "+maleAkanNames[index];
return false;
} else if(gendervalue="female"&&monthValidator&&dayValidator) {
  document.getElementById('output').textContent="You were born on" +daysOfWeek[index]+"and your name is "+femaleAkanNames[index];
  document.getElementById('display-name').textContent="Here is your Akan name:";
  document.getElementById('output').style.fontSize="25px";
  document.querySelector('h1').textContent="Congratulation"+" "+femaleAkanNames[index];
return false;
} else{
  alert("You have entered the wrong date on month,please try again");
}
}
