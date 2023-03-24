
function deriveAkanName () {
  let yearOfBirth = document.getElementById("year-entry").value;
  let monthOfBirth = Number(document.getElementById("month-entry").value);
  let dayOfBirth = Number(document.getElementById("day-entry").value);
  let genders = document.getElementsByName("gender");

  // Month, day validation functions
  function monthFunction () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayFunction () {
    if (monthOfBirth === 2 && Number(yearOfBirth)%4 === 0) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth > 29) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfBirth < 1 || dayOfBirth > 31){
      return false;
    } else {
      return true;
    }
  }
  let validMonth = monthFunction();
  let validDay = dayFunction();

  // function to generate the gender
  function deriveGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }
  let myGenderValue = deriveGender();


  //formula for calculating day of birth (Sunday = 1, Monday = 2)etc..
  let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
          ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

  //Arrays of Akan names for males & females and days of the week in and ordered manner. Dont change the order
  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];
  let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

   //this is to make correction in the calculation of dayofweeknumber and position value to select items on arrays
  let position;
  if (dayOfWeekNumber == 0){
    position = 6;
  } else {
    position = dayOfWeekNumber - 1;
  }

  if (myGenderValue == "Female" && validMonth && validDay) {
    document.getElementById('output').textContent = "Your mother delivered you on " + daysOfWeek[position] + " , and gave you an Akan name, " + femaleAkanNames[position];
    document.getElementById('output').style.fontSize = "30px";
    document.getElementById('output').style.color="blue";
    document.querySelector('h1').textContent = "Congratulations" + " " + femaleAkanNames[position]+" ,You now know why you are called: "+ femaleAkanNames[position];
    return false;
  } else if (myGenderValue == "Male" && validMonth && validDay) {
    document.getElementById('output').textContent = "Your mother delivered you on " + daysOfWeek[position] + " , and gave you an Akan name, " + maleAkanNames[position];
    document.getElementById('output').style.fontSize = "30px";
    document.getElementById('output').style.color="blue";
    document.querySelector('h1').textContent = "Congratulations" + " " + maleAkanNames[position]+" ,You now know why you are called: "+ maleAkanNames[position];
    return false;
  } else {
    alert("You entered an invalid day or month, please try again");
  }
 
}
function myFunction() {
  document.getElementsByClassName("myForm").reset();
}
