// // Place this code in a script tag or a JavaScript file that is loaded on your website

window.addEventListener("load", () => {
  const cookieName = "cookieyes-analytics";
  const cookieValue = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${cookieName}=`));

  if (cookieValue) {
    const value = cookieValue.substring(`${cookieName}=`.length);
    console.log(`The value of ${cookieName} is ${value}`);
  }
});
// window.addEventListener("load", () => {
//   const cookieValue = document.cookie
//     .split(";")
//     .map((cookie) => cookie.trim())
//     .find((cookie) => cookie.startsWith("cookieyes-other"));

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
//       } else {
//         console.log("The user has NOT accepted functional cookies");
//       }

//       if (cookieObj["analytics"] === "yes") {
//         console.log("The user has accepted analytics cookies");
//       } else {
//         console.log("The user has NOT accepted analytics cookies");
//       }

//       if (cookieObj["performance"] === "yes") {
//         console.log("The user has accepted performance cookies");
//       } else {
//         console.log("The user has NOT accepted performance cookies");
//       }

//       if (cookieObj["advertisement"] === "yes") {
//         console.log("The user has accepted advertisement cookies");
//       } else {
//         console.log("The user has NOT accepted advertisement cookies");
//       }

//       if ("other" in cookieObj) {
//         if (cookieObj["other"] === "yes") {
//           console.log("The user has accepted other cookies");
//         } else {
//           console.log("The user has NOT accepted other cookies");
//         }
//       }
//     }
//   }
// });
