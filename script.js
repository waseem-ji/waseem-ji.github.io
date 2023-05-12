document.addEventListener("cookieyes_consent_update", function (eventData) {
  const data = eventData.detail;
  if (data.rejected.includes("analytics")) {
    location.href("waseem-ji.github.io/cookiePolicy.html");
  }
  console.log(data);
});
