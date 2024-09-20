function Menu(e) {
    let list = document.querySelector("ul");
    e.name === "menu"
      ? ((e.name = "close"),
        list.classList.add("top-[80px]"),
        list.classList.add("opacity-100"))
      : ((e.name = "menu"),
        list.classList.remove("top-[80px]"),
        list.classList.remove("opacity-100"));
  }

// javascript function to make scroll to top functionality and animation hover remove and add functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");
const icon = scrollTopBtn.querySelector("i");

// Disable animation on hover
scrollTopBtn.addEventListener("mouseover", () => {
  icon.classList.remove("fa-bounce");
});

// Re-enable animation after hover
scrollTopBtn.addEventListener("mouseout", () => {
  icon.classList.add("fa-bounce");
});

// Show the button when the user scrolls down 400px from the top of the page
window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
