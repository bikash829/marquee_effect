const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    // console.log(scrollerContent);

    scrollerContent.forEach((content) => {
      const duplicatedItem = content.cloneNode(true);
      //   scrollerInner.appendChild(clone);
      duplicatedItem.setAttribute("area-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
      console.log(duplicatedItem);
    });
  });
}
