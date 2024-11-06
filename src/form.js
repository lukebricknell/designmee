$(document).ready(function () {
  const invalidDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
  ];

  const submitBtn = $("#submit");

  const errorMsg = document.querySelector("#error-msg");

  submitBtn.click((event) => {
    const email = $("#mce-EMAIL");
    const emailVal = email.val();

    // Check if email has a domain part
    if (emailVal.includes("@")) {
      const domainPart = emailVal.split("@")[1];

      if (invalidDomains.includes(domainPart)) {
        event.preventDefault(); // Prevent form submission
        email.val("");
        // email.attr("placeholder", "Please enter a business email");
        errorMsg.classList.remove("hidden");
      }

      document.getElementById("submit").innerHTML =
        '<i class="fa fa-circle-o-notch fa-spin mr-2"></i>LOADING';
    }
  });
});
