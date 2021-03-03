//Write a function that labels the domains as "commersial", "organization",
// "network" or'information' for ".com", ".org", ".net" and ".info"
// respectively. For the given list of domains return the list of
// their labels.

function domainType(domains) {
  //  write code here.

  let labels = ["commercial", "organization", "network", "information"];

  let result = [];
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i];
    let splited = domain.split(".");
    //console.log(splited);

    splited.forEach((item) => {
      for (let j = 0; j < labels.length; j++) {
        //console.log(item);
        //console.log(labels[j]);
        if (labels[j].includes(item)) {
          //console.log(labels[j]);
          //console.log("To jest to!!!");
          return result.push(labels[j]);
        } else {
          //console.log("not this");
        }
      }
    });
  }
  console.log(result);
  return result;
}

// Krótsza wersja:

function domainType(domains) {
  //  write code here.

  let labels = ["commercial", "organization", "network", "information"];

  let result = [];
  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i];
    let splited = domain.split(".");
    let last = splited[splited.length - 1];
    //console.log(last);

    for (let j = 0; j < labels.length; j++) {
      //console.log(item);
      //console.log(labels[j]);
      if (labels[j].includes(last)) {
        console.log(labels[j]);
        //console.log("To jest to!!!");

        result.push(labels[j]);
      }
    }
  }
  //console.log(result);
  return result;
}

// arrange
const domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"];

// act
const result = domainType(domains);

// log
console.log("result: ", result);
