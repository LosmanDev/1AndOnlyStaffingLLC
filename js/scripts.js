window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// EMAIL CONTACT
(function () {
  emailjs.init("user_iT8PeoOmd8g43E2I3f2Wb");
})();

function sendMail(params) {
  let tempParams = {
    from_name: document.getElementById("fromName").value,
    to_name: document.getElementById("toName").value,
    message: document.getElementById("msg").value,
  };

  emailjs
    .send("service_rrxaxth", "template_qwebf4n", tempParams)
    .then(function (res) {
      console.log("Success", res.status);
      event.preventDefault();
    });
}

const year1 = new Date().getFullYear();
const year = document.getElementById("year");

year.innerHTML = year1;

AOS.init();
