class Carousel {
  constructor(element) {
    this.element = element;
    this.images = this.element.querySelectorAll(".carousel-element");
    this.currentIndex = 0;
    this.timeout = null;

    this.element.querySelector(".left-button").addEventListener("click", () => {
      clearTimeout(this.timeout);
      this.changeImage(false);
    });

    this.element
      .querySelector(".right-button")
      .addEventListener("click", () => {
        this.changeImage(true);
      });

    this.element.addEventListener("mouseover", () => {
      clearTimeout(this.timeout);
      this.timeout = null;
    });
    this.element.addEventListener("mouseout", () => this.autoScroll());

    this.setCurrentImage();
    this.autoScroll();
  }

  setCurrentImage() {
    for (let image of this.images) {
      image.classList.remove("visible");
    }
    this.images[this.currentIndex].classList.add("visible");
  }

  changeImage(goRight) {
    this.currentIndex += goRight ? 1 : -1;

    if (this.currentIndex < 0) this.currentIndex = this.images.length - 1;
    else if (this.currentIndex >= this.images.length) this.currentIndex = 0;

    this.setCurrentImage();
  }

  autoScroll() {
    if (!this.timeout) {
      this.timeout = setTimeout(() => {
        this.timeout = null;
        this.changeImage(true);
        this.autoScroll();
      }, 2000);
    }
  }
}

const carousel = document.querySelector(".carousel");
new Carousel(carousel);