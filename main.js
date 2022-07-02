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

function sumSubsetSalaries() {}

function capitalizeFirstLastName() {}

function getHighestSalary() {}

function getMatchingPersons() {}

function isValideNumber() {}

function isValideEmail() {}
