import "bootstrap";
import "./style.css";

import "./assets/img/dotJS-logo.jpg";

const domainNamePart1Options = ["my", "fast", "crazy"];
const domainNamePart2Options = ["travel", "food", "ticket"];
const domainNamePart3Options = ["deals", "bus", "trio"];

function displayNewDomainName(
  domainNamePart1,
  domainNamePart2,
  domainNamePart3,
) {
  const domainNameList = dosument.querySelector("#domainNameList");
  const newListItem = document.createElement("li");
  newListItem.textContent =
    domainNamePart1[i] + domainNamePart2[j] + domainNamePart3[k];
  domainNameList.appendChild(newListItem);
}

window.onload = function () {
  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      for (k = 0; k < 5; k++) {
        displayNewDomainName(i, j, k);
      }
    }
  }
};
