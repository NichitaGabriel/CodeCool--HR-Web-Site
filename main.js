function calculateNetSalary() {
    let grossSalary = document.getElementById("gross-salary").value;
    let netSalary = (45 / 100) * grossSalary;
  
    if (grossSalary != null) {
      document.getElementById("display-gross").innerHTML =
        "Gross Salary: " + grossSalary;
    }
  
    if (netSalary != null) {
      document.getElementById("display-net").innerHTML =
        "Net Salary: " + netSalary;
    }
  }

function sumSalaries() {}

function sumSubsetSalaries() {}

function capitalizeFirstLastName() {}

function getHighestSalary() {}

function getMatchingPersons() {}

function isValideNumber() {}

function isValideEmail() {}
