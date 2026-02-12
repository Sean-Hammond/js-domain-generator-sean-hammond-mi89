import "bootstrap";
import "./style.css";

// window.onload = function () {
//   const domainParts1 = ["Magic", "Fast", "Crazy, Random"];
//   const domainParts2 = ["Super", "Food", "School, Numbers"];
//   const domainParts3 = ["Man", "b.us", "Mar.io, Game"];
//   const domainExtensions = [".com", ".net", ".org", ".us", ".io"];

//   let thereAreDuplicatesToSkip = false;

//   function createElement(
//     domainParts1Index,
//     domainParts2Index,
//     domainParts3Index,
//     domainExtensionsIndex,
//   ) {
//     const domainList = document.querySelector("#domainList");
//     const liElement = document.createElement("li");
//     if (
//       domainParts3[domainParts3Index] === "b.us" ||
//       domainParts3[domainParts3Index] === "Mar.io"
//     ) {
//       liElement.textContent =
//         domainParts1[domainParts1Index] +
//         domainParts2[domainParts2Index] +
//         domainParts3[domainParts3Index];
//       thereAreDuplicatesToSkip = true;
//     } else {
//       liElement.textContent =
//         domainParts1[domainParts1Index] +
//         domainParts2[domainParts2Index] +
//         domainParts3[domainParts3Index] +
//         domainExtensions[domainExtensionsIndex];
//     }
//     domainList.appendChild(liElement);
//   }

//   for (let i = 0; i < domainParts1.length; i++) {
//     for (let j = 0; j < domainParts2.length; j++) {
//       for (let k = 0; k < domainParts3.length; k++) {
//         for (let x = 0; x < domainExtensions.length; x++) {
//           createElement(i, j, k, x);
//           if (thereAreDuplicatesToSkip) {
//             x = domainParts3.length;
//             thereAreDuplicatesToSkip = false;
//           }
//         }
//       }
//     }
//   }
// };

window.onload = function () {
  const domainParts1 = ["Magic", "Fast", "Crazy, Random"];
  const domainParts2 = ["Super", "Food", "School, Numbers"];
  const domainParts3 = ["Man", "Bus", "Mario", "Game"];
  const domainExtensions = [".com", ".net", ".org", ".us", ".io"];

  function createElement(
    domainParts1Index,
    domainParts2Index,
    domainParts3Index,
    domainExtensionsIndex,
  ) {
    const domainList = document.querySelector("#domainList");
    const liElement = document.createElement("li");
    liElement.textContent = domainParts1[domainParts1Index] + domainParts2[domainParts2Index] + domainParts3[domainParts3Index] + domainExtensions[domainExtensionsIndex];
    domainList.appendChild(liElement);
  }

  for (let i = 0; i < domainParts1.length; i++) {
    for (let j = 0; j < domainParts2.length; j++) {
      for (let k = 0; k < domainParts3.length; k++) {
        for (let x = 0; x < domainExtensions.length; x++) {
          createElement(i, j, k, x);
        }
      }
    }
  }
};
