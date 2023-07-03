// // // Place this code in a script tag or a JavaScript file that is loaded on your website

// window.addEventListener("DOMContentLoaded", () => {
//   const cookieName = "cookieyes-analytics";
//   const cookieValue = document.cookie
//     .split(";")
//     .map((cookie) => cookie.trim())
//     .find((cookie) => cookie.startsWith(`${cookieName}=`))
//     .substring(`${cookieName}=`.length);

//   console.log(`The value of ${cookieName} is ${cookieValue}`);
// });

// document.addEventListener("cookieyes_consent_update", function (eventData) {
//   const data = eventData.detail;
//   if (data.accepted.includes("analytics")) {
//     // perform desired action.
//     console.log(`The analytics cookie is accepted`);
//   } else if (data.rejected.includes("analytics")) {
//     console.log(`The analytics cookie is rejected`);
//   }
// });

// // window.addEventListener("load", () => {
// //   const cookieValue = document.cookie
// //     .split(";")
// //     .map((cookie) => cookie.trim())
// //     .find((cookie) => cookie.startsWith("cookieyes-other"));

// //   if (cookieValue) {
// //     const cookiePairs = cookieValue
// //       .substring("cookieyes-consent=".length)
// //       .split(",")
// //       .map((pair) => pair.trim());
// //     const cookieObj = {};

// //     cookiePairs.forEach((pair) => {
// //       const [key, value] = pair.split(":");
// //       cookieObj[key] = value;
// //     });
// //     console.log(cookieObj);

// //     if (
// //       [
// //         "functional",
// //         "analytics",
// //         "performance",
// //         "advertisement",
// //         "other",
// //       ].every(
// //         (key) => cookieObj[key] === "no" || !cookieObj.hasOwnProperty(key)
// //       )
// //     ) {
// //       console.log(
// //         "The user has opted out of cookies, set strictly necessary cookies only"
// //       );
// //     } else {
// //       if (cookieObj["functional"] === "yes") {
// //         console.log("The user has accepted functional cookies");
// //       } else {
// //         console.log("The user has NOT accepted functional cookies");
// //       }

// //       if (cookieObj["analytics"] === "yes") {
// //         console.log("The user has accepted analytics cookies");
// //       } else {
// //         console.log("The user has NOT accepted analytics cookies");
// //       }

// //       if (cookieObj["performance"] === "yes") {
// //         console.log("The user has accepted performance cookies");
// //       } else {
// //         console.log("The user has NOT accepted performance cookies");
// //       }

// //       if (cookieObj["advertisement"] === "yes") {
// //         console.log("The user has accepted advertisement cookies");
// //       } else {
// //         console.log("The user has NOT accepted advertisement cookies");
// //       }

// //       if ("other" in cookieObj) {
// //         if (cookieObj["other"] === "yes") {
// //           console.log("The user has accepted other cookies");
// //         } else {
// //           console.log("The user has NOT accepted other cookies");
// //         }
// //       }
// //     }
// //   }
// // });

var checktimeout = 0;
window.addEventListener("load", function () {
  waitForElement(".cky-consent-container", function () {
    var cky_a = document.createElement("a");
    cky_a.href = "#";
    cky_a.setAttribute("onclick", "revisitCkyConsent()");
    cky_a.textContent = "Do Not Sell or Share My Personal Information";
    cky_footer = document.querySelector(".doNotSell");
    cky_footer.appendChild(cky_a);
  });
});
function waitForElement(selector, callback) {
  const element = document.querySelector(selector);
  if (element) return callback();
  checktimeout++;
  if (checktimeout < 120) {
    setTimeout(function () {
      waitForElement(selector, callback);
    }, 500);
  }
}

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/", (req, res) => {
  const cookieValue = req.cookies["cookieyes-consent"];

  if (cookieValue) {
    const cookiePairs = cookieValue.split(",").map((pair) => pair.trim());
    const cookieObj = {};

    cookiePairs.forEach((pair) => {
      const [key, value] = pair.split(":");
      cookieObj[key] = value;
    });
    console.log(cookieObj);

    if (
      [
        "functional",
        "analytics",
        "performance",
        "advertisement",
        "other",
      ].every(
        (key) => cookieObj[key] === "no" || !cookieObj.hasOwnProperty(key)
      )
    ) {
      console.log(
        "The user has opted out of cookies, set strictly necessary cookies only"
      );
    } else {
      if (cookieObj["functional"] === "yes") {
        console.log("The user has accepted functional cookies");
      } else {
        console.log("The user has NOT accepted functional cookies");
      }

      if (cookieObj["analytics"] === "yes") {
        console.log("The user has accepted analytics cookies");
        __sgConfig = {
          c: "001-3223888f-39c6-4931-bb3a-4e6be509865b",
          siteid: "072-f3627518-a86e-422b-b06b-6b932e1aad79",
        };
        // Set the __sgConfig value as a cookie
        document.cookie =
          "__sgConfig=" +
          encodeURIComponent(
            JSON.stringify({
              c: "001-3223888f-39c6-4931-bb3a-4e6be509865b",
              siteid: "072-f3627518-a86e-422b-b06b-6b932e1aad79",
            })
          );

        // Retrieve the value of __sgConfig from the cookie
        const cookieValue = decodeURIComponent(
          document.cookie.replace(
            /(?:(?:^|.*;\s*)__sgConfig\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
          )
        );

        console.log(cookieValue);
      } else {
        console.log("The user has NOT accepted analytics cookies");
      }

      if (cookieObj["performance"] === "yes") {
        console.log("The user has accepted performance cookies");
      } else {
        console.log("The user has NOT accepted performance cookies");
      }

      if (cookieObj["advertisement"] === "yes") {
        console.log("The user has accepted advertisement cookies");
      } else {
        console.log("The user has NOT accepted advertisement cookies");
      }

      if ("other" in cookieObj) {
        if (cookieObj["other"] === "yes") {
          console.log("The user has accepted other cookies");
        } else {
          console.log("The user has NOT accepted other cookies");
        }
      }
    }
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
