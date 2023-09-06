// // // // Place this code in a script tag or a JavaScript file that is loaded on your website

// // window.addEventListener("DOMContentLoaded", () => {
// //   const cookieName = "cookieyes-analytics";
// //   const cookieValue = document.cookie
// //     .split(";")
// //     .map((cookie) => cookie.trim())
// //     .find((cookie) => cookie.startsWith(`${cookieName}=`))
// //     .substring(`${cookieName}=`.length);

// //   console.log(`The value of ${cookieName} is ${cookieValue}`);
// // });

// // document.addEventListener("cookieyes_consent_update", function (eventData) {
// //   const data = eventData.detail;
// //   if (data.accepted.includes("analytics")) {
// //     // perform desired action.
// //     console.log(`The analytics cookie is accepted`);
// //   } else if (data.rejected.includes("analytics")) {
// //     console.log(`The analytics cookie is rejected`);
// //   }
// // });
// // Set the cookie with a name, value, and expiration date
// function setCookie(cookieName, cookieValue, expirationDays) {
//   const date = new Date();
//   date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
//   const expires = "expires=" + date.toUTCString();
//   document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
// }

// // Usage:
// setCookie("AlwaysCookie", "example value", 7); // Set a cookie named "myCookie" with the value "example value" that expires in 7 days

// window.addEventListener("load", () => {
//   const cookieValue = document.cookie
//     .split(";")
//     .map((cookie) => cookie.trim())
//     .find((cookie) => cookie.startsWith("cookieyes-consent"));

//   if (cookieValue) {
//     const cookiePairs = cookieValue
//       .substring("cookieyes-consent=".length)
//       .split(",")
//       .map((pair) => pair.trim());
//     const cookieObj = {};

//     cookiePairs.forEach((pair) => {
//       const [key, value] = pair.split(":");
//       cookieObj[key] = value;
//     });
//     console.log(cookieObj);

//     if (
//       [
//         "functional",
//         "analytics",
//         "performance",
//         "advertisement",
//         "other",
//       ].every(
//         (key) => cookieObj[key] === "no" || !cookieObj.hasOwnProperty(key)
//       )
//     ) {
//       console.log(
//         "The user has opted out of cookies, set strictly necessary cookies only"
//       );
//     } else {
//       if (cookieObj["functional"] === "yes") {
//         console.log("The user has accepted functional cookies");
//       }

//       if (cookieObj["analytics"] === "yes") {
//         //Place script here if cookie category is in analytical
//         setCookie("myCookie", "example value", 7); // Set a cookie named "myCookie" with the value "example value" that expires in 7 days
//       }

//       if (cookieObj["performance"] === "yes") {
//         console.log("The user has accepted performance cookies");
//       }

//       if (cookieObj["advertisement"] === "yes") {
//         console.log("The user has accepted advertisement cookies");
//       }

//       if ("other" in cookieObj) {
//         if (cookieObj["other"] === "yes") {
//           console.log("The user has accepted other cookies");
//         }
//       }
//     }
//   }
// });

// // var checktimeout = 0;
// // window.addEventListener("load", function () {
// //   waitForElement(".cky-consent-container", function () {
// //     var cky_a = document.createElement("a");
// //     cky_a.href = "#";
// //     cky_a.setAttribute("onclick", "revisitCkyConsent()");
// //     cky_a.textContent = "Do Not Sell or Share My Personal Information";
// //     cky_footer = document.querySelector(".doNotSell");
// //     cky_footer.appendChild(cky_a);
// //   });
// // });
// // function waitForElement(selector, callback) {
// //   const element = document.querySelector(selector);
// //   if (element) return callback();
// //   checktimeout++;
// //   if (checktimeout < 120) {
// //     setTimeout(function () {
// //       waitForElement(selector, callback);
// //     }, 500);
// //   }
// // }

document.addEventListener("cookieyes_consent_update", function (eventData) {
  const data = eventData.detail;
  if (data.accepted.includes("analytics")) {
    console.log("Include analytics");
  }
});
