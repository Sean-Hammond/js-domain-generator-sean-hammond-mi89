import "bootstrap";
import "./style.css";

import "./assets/img/dotJS-logo.jpg";

window.onload = function () {
  const domainNamePart1Options = ["my", "fast", "crazy"];
  const domainNamePart2Options = ["travel", "food", "ticket"];
  const domainNamePart3Options = ["deals", "bus", "trio"];

  function displayNewDomainName(
    domainNamePart1,
    domainNamePart2,
    domainNamePart3,
  ) {
    const domainNameList = document.querySelector("#domainNameList");
    const newListItem = document.createElement("li");
    newListItem.textContent =
      domainNamePart1[i] + domainNamePart2[j] + domainNamePart3[k];
    domainNameList.appendChild(newListItem);
  }

  for (i = 0; i < domainNamePart1Options.length; i++) {
    for (j = 0; j < domainNamePart2Options.length; j++) {
      for (k = 0; k < domainNamePart3Options.length; k++) {
        displayNewDomainName(i, j, k);
      }
    }
  }
};
