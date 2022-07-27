//////////////////////////////////////////////////////////
// Get the current year
var yearEL = document.querySelector(".year");
var currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

//////////////////////////////////////////////////////////
// Make mobile Navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////////
// Smoth scroling
const links = document.querySelectorAll("a:link");
for (const link of links) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else if (href.startsWith("#"))
      document
        .getElementById(href.slice(1))
        .scrollIntoView({ behavior: "smooth" });
    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.remove("nav-open");
  });
}

//////////////////////////////////////////////////////////
// Sticky navigation
// window.addEventListener("scroll", function () {
//   const heroSection = document.querySelector(".section-hero");

//   var top_of_element = heroSection.offsetTop;
//   var bottom_of_element =
//     heroSection.offsetTop +
//     heroSection.offsetHeight +
//     heroSection.style.marginTop;
//   var bottom_of_screen = window.scrollY + window.innerHeight;
//   var top_of_screen = window.scrollY;

//   if (bottom_of_screen > top_of_element && top_of_screen < bottom_of_element) {
//     headerEl.classList.remove("sticky");
//   } else {
//     headerEl.classList.add("sticky");
//   }
// });

//////////////////////////////////////////////////////////
// Sticky navigation
const heroSection = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(heroSection);
//////////////////////////////////////////////////////////
// Close mobile navigation
// const navLink = document.querySelectorAll(".main-nav a:link");
// const header = document.querySelector(".header");
// navLink.forEach(function (link) {
//   link.addEventListener("click", function () {
//     header.classList.remove("nav-open");
//   });
// });

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
