function calculateNetSalary() {
  let grossSalary = document.getElementById("gross-salary").value;
  let netSalary = (45 / 100) * grossSalary;

  if (grossSalary) {
    document.getElementById("display-gross").innerHTML =
      "Gross Salary: " + grossSalary;
  }

  if (netSalary) {
    document.getElementById("display-net").innerHTML =
      "Net Salary: " + netSalary.toFixed();
  }
}

function sumSalaries() {
  let firstSalary = parseInt(document.getElementById("salary-1").value);
  let secondSalary = parseInt(document.getElementById("salary-2").value);
  let thirdSalary = parseInt(document.getElementById("salary-3").value);
  let fourthSalary = parseInt(document.getElementById("salary-4").value);
  let fifthSalary = parseInt(document.getElementById("salary-5").value);

  let additionSalaries =
    firstSalary + secondSalary + thirdSalary + fourthSalary + fifthSalary;

  if (additionSalaries) {
    document.getElementById("display-salary-sum").innerHTML =
      "Sum of salaries is: " + additionSalaries;
  }
}

function sumSubsetSalaries() {
  const employeesSalaries = [
    6868, 6868, 6868, 6868, 6868, 6868, 6868, 6868, 6868, 6868, 6868,
  ];

  let startPoint = document.getElementById("starting-point").value;
  let endPoint = document.getElementById("end-point").value;

  let start = startPoint;
  let end = endPoint;
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += employeesSalaries[i];
  }

  document.getElementById("sum-subset-salaries").innerHTML =
    "Sum of all salaries from the selected range: " + sum;
}

function capitalizeFirstLastName() {
  let firstName = document.getElementById("capitalize-first-name").value;
  let lastName = document.getElementById("capitalize-last-name").value;

  let capitalizeFirstName =
    firstName.toString().charAt(0).toUpperCase() +
    firstName.toString().slice(1);

  document.getElementById("display-capitalize-first-name").innerHTML =
    "First name: " + capitalizeFirstName;

  let capitalizeLastName =
    lastName.toString().charAt(0).toUpperCase() + lastName.toString().slice(1);

  document.getElementById("display-capitalize-last-name").innerHTML =
    "Last name: " + capitalizeLastName;

  let concatenation = firstName + " " + lastName;
  document.getElementById("display-concatenated-first-last-name").innerHTML =
    "First and Last name: " + concatenation;
}

function getHighestSalary() {
  let firstSalary = parseInt(document.getElementById("salary-6").value);
  let secondSalary = parseInt(document.getElementById("salary-7").value);
  let thirdSalary = parseInt(document.getElementById("salary-8").value);
  let fourthSalary = parseInt(document.getElementById("salary-9").value);
  let fifthSalary = parseInt(document.getElementById("salary-10").value);

  let salaryArray = Math.max(
    firstSalary,
    secondSalary,
    thirdSalary,
    fourthSalary,
    fifthSalary
  );

  document.getElementById("display-highest-salary").innerHTML =
    "Biggest salary is: " + salaryArray;
}

function getMatchingPersons() {
  let employees = [
    "Jhon Smith",
    "Jhon Carther",
    "Bonnie Johnson",
    "Andrew Johnson",
    "Bob Newtown",
  ];

  let key = document.getElementById("matching-person-finder").value;
  let results = [];

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].indexOf(key) == 0) {
      results.push(employees[i]);
    }
  }

  document.getElementById("display-matching-person").innerHTML =
    "Matching persons are: " + results;
}

function isValideNumber() {}

function isValideEmail() {}
