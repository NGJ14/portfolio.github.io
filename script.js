document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});

window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  if (scroll >= aboutACTIVE) {
    document.getElementById("aboutTab").classList.add("ACTIVE");
    document.getElementById("galTab").classList.remove("ACTIVE");
    document.getElementById("homeTab").classList.remove("ACTIVE");
  }
  if (scroll >= galACTIVE && scroll < aboutACTIVE) {
    document.getElementById("galTab").classList.add("ACTIVE");
    document.getElementById("aboutTab").classList.remove("ACTIVE");
    document.getElementById("homeTab").classList.remove("ACTIVE");
  }
  if (scroll >= 0 && scroll <= galACTIVE) {
    document.getElementById("galTab").classList.remove("ACTIVE");
    document.getElementById("aboutTab").classList.remove("ACTIVE");
    document.getElementById("homeTab").classList.add("ACTIVE");
  }
  
});

let height = screen.height;


var galleryHeight = document
  .getElementById("galleryLink")
  .getBoundingClientRect().top;
let galACTIVE = galleryHeight + window.scrollY;


var aboutHeight = document
  .getElementById("aboutLink")
  .getBoundingClientRect().top;
let aboutACTIVE = aboutHeight + window.scrollY;


console.log(this.scrollY);
console.log(aboutACTIVE);
