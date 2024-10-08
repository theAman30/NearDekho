// function to toggle the menu-bar in small screens
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

// javascript function to make scroll to top functionality and hover remove-add functionality
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
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
};

scrollTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

//  use to clear the form when form is submitted
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      // Reset the form after submission
      this.reset();
    });
});

// function to add blogs dynamically and when user clicks on button it will loads more cards
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");
  const showMoreBtn = document.getElementById("showMoreBtn");

  // Array of blog posts to be loaded on "Show More"
  const moreBlogs = [
    {
      title: "5 Reasons Why Users Love NearDekho",
      excerpt: "Hey there, neighbor! Ever feel like you're missing ...",
      image: "./images/blogsImages/blog4/secondImage.jpeg",
      link: "./blogs/blog4.html",
    },
    {
      title: "Who Wins with NearDekho? Everyone!",
      excerpt: "Hey there! Let's talk about how NearDekho is making life ...",
      image: "./images/blogsImages/blog5/fifthImage.jpeg",
      link: "./blogs/blog5.html",
    },
    {
      title: "Users Who Can't Get Enough of NearDekho",
      excerpt: "Hey, young folks! Want to know where the coolest hangouts...",
      image: "./images/blogsImages/blog6/fifthImage.jpeg",
      link: "./blogs/blog6.html",
    },
  ];

  // Function to generate blog card HTML
  function createBlogCard(blog) {
    return `
        <div class="blog-card bg-white rounded shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="200">
          <img src="${blog.image}" alt="${blog.title}" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-3">${blog.title}</h3>
            <p class="text-gray-600 mb-4">${blog.excerpt}</p>
            <a href="${blog.link}" class="inline-block text-[#d5991d] font-medium hover:underline">Read more</a>
          </div>
        </div>
      `;
  }

  // Event listener for Show More button
  showMoreBtn.addEventListener("click", () => {
    moreBlogs.forEach((blog) => {
      blogContainer.innerHTML += createBlogCard(blog);
    });

    // Optionally hide the button after showing more blogs
    showMoreBtn.style.display = "none";
  });
});
