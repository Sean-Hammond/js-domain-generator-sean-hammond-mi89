import "bootstrap";
import "./style.css";

import "./assets/img/dotJS-logo.jpg";

window.onload = function () {
  const domainPt1 = ["magic", "fast", "crazy"];
  const domainPt2 = ["super", "food", "school"];
  const domainPt3 = ["man", "b.us", "mar.io"];
  const domainExtensions = ["com", "net", "org"];

  let thereAreDuplicatesToSkip = false;

  function createElement(i, j, k, x) {
    const domainList = document.querySelector("#domainList");
    const liElement = document.createElement("li");
    if ((domainPt3[k] === "b.us") || (domainPt3[k] === "mar.io")) {
      liElement.textContent = domainPt1[i] + domainPt2[j] + domainPt3[k];
      thereAreDuplicatesToSkip = true;
    } else {
      liElement.textContent =
        domainPt1[i] + domainPt2[j] + domainPt3[k] + "." + domainExtensions[x];
    }
    domainList.appendChild(liElement);
  }

  for (let i = 0; i < domainPt1.length; i++) {
    for (let j = 0; j < domainPt2.length; j++) {
      for (let k = 0; k < domainPt3.length; k++) {
        for (let x = 0; x < domainPt3.length; x++) {
          createElement(i, j, k, x);
          if (thereAreDuplicatesToSkip) {
            x = 0;
            k++;
            thereAreDuplicatesToSkip = false;
          }
        }
      }
    }
  }

  // const domainNamePart1Options = ["my", "fast", "crazy"];
  // const domainNamePart2Options = ["travel", "food", "ticket"];
  // const domainNamePart3Options = ["deals", "bus", "trio"];
  // function displayNewDomainName(i, j, k) {
  //   const domainNameList = document.querySelector("#domainNameList");
  //   const newListItem = document.createElement("li");
  //   newListItem.textContent =
  //     domainNamePart1Options[i] +
  //     domainNamePart2Options[j] +
  //     domainNamePart3Options[k];
  //   domainNameList.appendChild(newListItem);
  //   console.log(newListItem)
  // }
  // for (i = 0; i < domainNamePart1Options.length; i++) {
  //   for (j = 0; j < domainNamePart2Options.length; j++) {
  //     for (k = 0; k < domainNamePart3Options.length; k++) {
  //       displayNewDomainName(i, j, k);
  //     }
  //   }
  // }
};
