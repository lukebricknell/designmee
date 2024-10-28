$(document).ready(function () {
  const invalidDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
  ];
  const submitBtn = $(".submit");

  submitBtn.click(() => {
    const email = $(".mce-EMAIL");
    const domainPart = email.val().split("@")[1];

    if (invalidDomains.indexOf(domainPart) !== -1) {
      email.val("");
      email.attr("placeholder", "Please enter a business email");
      return false;
    } else {
      return true;
    }
  });
});
