setDate(Date());
document.getElementById("fileContent").hidden = true;

var input = document.getElementById("dateInput");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});
var date = new Date();

function readnumber() {
  var input = document.getElementById("fileinput").value;
  readTextFile(input);
  var enteredDate = new Date("1996-08-21");
  enteredDate.setDate(enteredDate.getDate() + Number(input));
  setDate(enteredDate);
  document.getElementById("header").innerHTML = "Day " + input;
}x

  
  function readTextFile(file) {
    let text1 = file;
    fetch("..\\files\\" + file + ".txt")
      .then(function(response) {
        if (response.ok) {
          return response.text();
        } else {
          return 0;
        }
      })
      .then(function(data) {
        if (data == 0 || data[0] == '<') {
          document.getElementById("fileName").innerHTML = text1 + " not found"
          document.getElementById("fileContent").hidden = true;
          document.getElementById("fileContent").innerHTML = null;
          return
        }
        document.getElementById("fileContent").hidden = false;
        document.getElementById("fileContent").innerHTML = data;
      });
  }

function setDate(d1) {
  var date = new Date(d1);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  var today = year + "-" + month + "-" + day;
  document.getElementById("dateInput").value = today;
}

function calculateDay() {
  var inputDate = document.getElementById("dateInput").value;
  var targetDate = new Date("1996-08-21");
  var enteredDate = new Date(inputDate || Date());
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var daysDifference = Math.floor(
    (enteredDate - targetDate) / (1000 * 60 * 60 * 24)
  );
  document.getElementById("fileinput").value = daysDifference;
  document.getElementById("header").innerHTML = "Day " + daysDifference;
  readTextFile(daysDifference);
}
