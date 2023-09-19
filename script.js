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

// document.addEventListener("cookieyes_consent_update", function (eventData) {
//   const data = eventData.detail;
//   if (data.accepted.includes("analytics")) {
//     console.log("Include analytics");
//   }
//   if (data.rejected.includes("analytics")) {
//     console.log("rejected analytics");
//   }
// });

// !(function () {
//   var e = [".cky-btn-accept", ".cky-btn-reject", ".cky-btn-preferences"];
//   function t(e, n) {
//     var r = document.querySelector(e);
//     if (r) {
//       var o = (function (e) {
//         return e.currentStyle
//           ? e.currentStyle.display
//           : window.getComputedStyle
//           ? window.getComputedStyle(e, null).getPropertyValue("display")
//           : "";
//       })(r);
//       if ("none" !== o && "" !== o) return n(r);
//     }
//     setTimeout(function () {
//       t(e, n);
//     }, 200);
//   }
//   function n(t) {
//     var n = document.createElement("div");
//     n.setAttribute(
//       "style",
//       "position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5);z-index:9999;"
//     ),
//       t.parentNode.insertBefore(n, t.nextSibling);
//     for (var o = 0; o < e.length; o++) {
//       var c = document.querySelector(e[o]);
//       c && c.addEventListener("click", r(n));
//     }
//   }
//   function r(e) {
//     return function () {
//       e &&
//         e.parentNode &&
//         (e.parentNode.removeChild(e), t(".cky-consent-container", n));
//     };
//   }
//   window.addEventListener("load", function () {
//     t(".cky-consent-container", n);
//   });
// })();

// const currentDomain = window.location.hostname;

// const scriptSources = {
//   "boatagent.com":
//     "https://cdn-cookieyes.com/client_data/1e34230167bcc72750eaaddc/script.js",
//   "baadagent.dk":
//     "https://cdn-cookieyes.com/client_data/91282cd33324ede294817873/script.js",
//   "batagent.fi":
//     "https://cdn-cookieyes.com/client_data/01882ad411f3f38a60c9edcf/script.js",
//   "batagent.se":
//     "https://cdn-cookieyes.com/client_data/a71b25f8dd6a9a4ab12755dd/script.js",
// };

// const scriptSrc = scriptSources[currentDomain];

// if (scriptSrc) {
//   const scriptElement = document.createElement("script");
//   scriptElement.src = scriptSrc;
//   const headElement = document.head;

//   headElement.insertAdjacentElement("afterbegin", scriptElement);
// }
let cookies = document.cookie
  .split(";")
  .reduce(
    (ac, cv, i) => Object.assign(ac, { [cv.split("=")[0]]: cv.split("=")[1] }),
    {}
  );
const cookieYesConsent = cookies["cookieyes-consent"];
let adsConsent = false;
if (cookieYesConsent) {
  const cookiePairs = cookieYesConsent.split(",").map((pair) => pair.trim());
  const cookieObj = {};
  cookiePairs.forEach((pair) => {
    const [key, value] = pair.split(":");
    cookieObj[key] = value;
  });
  if (cookieObj.advertisement === "yes") {
    adsConsent = true;
  }
}
if (adsConsent) {
  document.addEventListener("DOMContentLoaded", function () {
    addPlaceholder();
  });
} else {
  document.addEventListener("cookieyes_consent_update", function (eventData) {
    const data = eventData.detail;
    if (!data.accepted.includes("advertisement")) {
      document.addEventListener("DOMContentLoaded", function () {
        addPlaceholder();
      });
    } else {
      document.querySelector(".tab-content").removeChild(divElement);
    }
  });
}
function addPlaceholder() {
  const divElement = document.createElement("div");
  divElement.setAttribute("class", "video-placeholder-youtube");
  divElement.setAttribute("data-cky-tag", "video-placeholder");
  //add the corresponding height and background-image for the video they want to place the placeholder
  divElement.setAttribute(
    "style",
    "height: 488px; background-image: linear-gradient(rgba(76, 72, 72, 0.7), rgba(76, 72, 72, 0.7)), url(https://img.youtube.com/vi/vBpQ1SlfVtU/maxresdefault.jpg);"
  );
  var paragraph = document.createElement("p");
  paragraph.setAttribute("class", "video-placeholder-text-youtube");
  paragraph.setAttribute("data-cky-tag", "placeholder-title");
  paragraph.setAttribute(
    "style",
    "display: block; border-color: rgb(0, 0, 0); background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);"
  );
  paragraph.textContent = "Please accept cookies to access this content";
  divElement.appendChild(paragraph);
  document.querySelector(".YTvideosa").appendChild(divElement);
}
