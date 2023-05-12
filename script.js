document.addEventListener("cookieyes_consent_update", function (eventData) {
  const data = eventData.detail;
  if (data.rejected.includes(["analytics","functional"])) {
    console.log("rejected");
    location.href = "https://waseem-ji.github.io/cookiePolicy.html";
  }
  console.log(data);
});
