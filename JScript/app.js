
function deriveAkanName () {
  let yearOfBirth = document.getElementById("year-entry").value;
  let monthOfBirth = Number(document.getElementById("month-entry").value);
  let dayOfBirth = Number(document.getElementById("day-entry").value);
  let genders = document.getElementsByName("gender");

  // function to get gender
  function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }

  let myGenderValue = getGender();
  console.log(myGenderValue);

  // validation functions
  function monthValidator () {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayValidator () {
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

  let monthValid = monthValidator();
  let dayValid = dayValidator();

  //formula for calculating day of birth (Sunday = 1, Monday = 2)etc..
  let dayOfWeekNumber = Math.floor((((Number(yearOfBirth.slice(0,2))/4)-2*Number(yearOfBirth.slice(0,2))-1)+
          ((5*Number(yearOfBirth.slice(2,4))/4))+((26*(monthOfBirth+1)/10))+dayOfBirth)%7);

  //creating arrays of Akan names for males & females and days of the week
  let femaleAkanNames = [
    "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"
  ];
  let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  let maleAkanNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"
  ];

   //generating and index value to select items on arrays
  let index;
  if (dayOfWeekNumber == 0){
    index = 6;
  } else {
    index = dayOfWeekNumber - 1;
  }

  if (myGenderValue == "Male" && monthValid && dayValid) {
    document.getElementById('output').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + maleAkanNames[index];
    document.getElementById('output').style.fontSize = "40px";
    document.querySelector('h1').textContent = "Congratulations" + " " + maleAkanNames[index]+" ,You now know why you are called: "+ maleAkanNames[index];
    return false;
  } else if (myGenderValue == "Female" && monthValid && dayValid) {
    document.getElementById('output').textContent = "You were born on a " + daysOfWeek[index] + " , your Akan name is " + femaleAkanNames[index];
    document.getElementById('output').style.fontSize = "40px";
    document.querySelector('h1').textContent = "Congratulations" + " " + femaleAkanNames[index]+" ,YYou now know why you are called: "+ femaleAkanNames[index];
    return false;
  } else {
    alert("You entered an invalid day or month, please try again");
  }
}
