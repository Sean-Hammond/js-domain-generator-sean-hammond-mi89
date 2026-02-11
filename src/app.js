import "bootstrap";
import "./style.css";

import "./assets/img/dotJS-logo.jpg";

window.onload = function () {
  const domainPt1 = ["Magic", "Fast", "Crazy"];
  const domainPt2 = ["Super", "Food", "School"];
  const domainPt3 = ["Man", "b.us", "Mar.io"];
  const domainExtensions = ["com", "net", "org"];

  let thereAreDuplicatesToSkip = false;

  function createElement(i, j, k, x) {
    const domainList = document.querySelector("#domainList");
    const liElement = document.createElement("li");
    if (domainPt3[k] === "b.us" || domainPt3[k] === "Mar.io") {
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
            x = domainPt3.length;
            thereAreDuplicatesToSkip = false;
          }
        }
      }
    }
  }
};
