document.addEventListener("DOMContentLoaded", function () {
  const tocLinks = document.querySelectorAll(".toc-link");
  const margin = 100; // Adjust this value to set the early switch distance in pixels

  function escapeSelector(id) {
    // Escape special characters for CSS selectors
    return id.replace(/(:|\.|\[|\])/g, '\\$1');
  }

  function getParentLi(link) {
    return link.closest("li");
  }

  function onScroll() {
    let fromTop = window.scrollY + margin; // Add margin to the scroll position

    let highlighted = false;

    tocLinks.forEach((link, index) => {
      let section = document.querySelector('#' + escapeSelector(link.hash.substring(1)));
      let nextSection = tocLinks[index + 1] ? document.querySelector('#' + escapeSelector(tocLinks[index + 1].hash.substring(1))) : null;
      let parentLi = getParentLi(link);

      if (section) {
        let sectionTop = section.offsetTop;
        let sectionBottom = sectionTop + section.offsetHeight;

        // Check if the current section should be highlighted
        if (fromTop >= sectionTop && (nextSection ? fromTop < nextSection.offsetTop : true)) {
          if (!highlighted) {
            parentLi.classList.add("border-r-2");
            link.classList.add("font-bold", "dark:text-white", "text-black");
            link.classList.remove("text-gray-700", "dark:text-gray-400");
            highlighted = true;
          }
        } else {
          parentLi.classList.remove("border-r-2");
          link.classList.remove("font-bold", "dark:text-white", "text-black");
          link.classList.add("text-gray-700", "dark:text-gray-400");
        }
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  // Trigger scroll event to handle initial state
  onScroll();
});