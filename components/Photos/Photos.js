class TopPhoto {
  constructor(props) {
    this.element = document.createElement("div");
    this.element.classList.add("collection");
    this.user = props.user;
    this.image = props.image;
    this.title = props.title;
    this.likes = props.likes;

    const signatureElement = new UserSignature(this.user).element;
    const imgElement = this.createImage();
    const imgCover = this.createCover();
    const likeButton = new LikeButton(this.likes).element;
    const commentButton = new CommentButton().element;
    const titleElement = this.createTitle();

    this.element.append(signatureElement);
    this.element.append(imgElement);
    imgCover.append(likeButton);
    imgCover.append(commentButton);
    imgElement.append(imgCover);
    this.element.append(titleElement);

    imgElement.addEventListener("mouseover", () => {
      imgCover.classList.add("visible");
    });

    imgElement.addEventListener("mouseleave", () => {
      imgCover.classList.remove("visible");
    });
  }

  createImage() {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("top-photo-div");
    const img = document.createElement("img");
    img.src = this.image;
    img.alt = this.title;
    imgDiv.append(img);
    return imgDiv;
  }

  createTitle() {
    const title = document.createElement("h3");
    title.textContent = this.title;
    return title;
  }

  createCover() {
    const cover = document.createElement("div");
    cover.classList.add("img-cover");
    return cover;
  }
}

class UserSignature {
  constructor({ name, image }) {
    this.name = name;
    this.image = image;

    this.element = document.createElement("div");
    this.element.classList.add("user-signature");

    this.element.append(this.createImage());
    this.element.append(this.createSpan());
  }

  createImage() {
    const img = document.createElement("img");
    img.src = this.image;
    img.alt = this.name;
    return img;
  }

  createSpan() {
    const span = document.createElement("span");
    span.textContent = this.name;
    return span;
  }
}

class LikeButton {
  constructor(likes) {
    this.element = document.createElement("button");
    this.element.classList.add("like-button");
    this.likes = likes;
    this.liked = false;

    this.element.append(this.createHeart());
    const likesNode = document.createTextNode(` ${this.likes}`);
    this.element.append(likesNode);

    this.element.addEventListener("click", () => this.addLike());
  }

  addLike() {
    if (!this.liked) {
      this.likes++;
    } else {
      this.likes--;
    }
    const heart = this.element.querySelector(".fa-heart");
    heart.classList.toggle("far");
    heart.classList.toggle("fas");

    let textNode = this.element.childNodes[1];

    this.element.classList.toggle("liked");
    this.liked = !this.liked;
    textNode.nodeValue = ` ${this.likes}`;
  }

  createHeart() {
    const heart = document.createElement("i");
    heart.classList.add("far");
    heart.classList.add("fa-heart");
    return heart;
  }
}

class CommentButton {
  constructor() {
    this.element = document.createElement("button");
    const speechBubble = document.createElement("i");
    speechBubble.classList.add("fas");
    speechBubble.classList.add("fa-comment-dots");
    speechBubble.classList.add("fa-2x");
    this.element.append(speechBubble);
    this.element.classList.add("comment-button");
  }
}

const topPhotoData = [
  {
    user: {
      name: "Sam Payton",
      image: "img/man.jpg"
    },
    image: "img/placeholder1.jpg",
    title: "Dessert Plain",
    likes: 100
  },
  {
    user: {
      name: "Amy Thomas",
      image: "img/woman1.jpg"
    },
    image: "img/placeholder2.jpg",
    title: "Ocean Hue",
    likes: 85
  },
  {
    user: {
      name: "Sophia Phung",
      image: "img/woman2.jpg"
    },
    image: "img/placeholder3.jpg",
    title: "Raspberry Spring",
    likes: 73
  }
];

const photos = topPhotoData.map(data =>
  document
    .querySelector(".top-photographs")
    .appendChild(new TopPhoto(data).element)
);

function getPosition(el) {
  let xPos = 0;
  let yPos = 0;

  while (el) {
    xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
    yPos += el.offsetTop - el.scrollTop + el.clientTop;

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

(() => {
let scrolled = false;

window.addEventListener("scroll", () => {
  const position = document.documentElement.clientHeight + window.scrollY;
  const elementPosition = getPosition(
    document.querySelector(".top-photographs")
  );
  if (position > elementPosition.y && !scrolled) {
    scrolled = true;
    let tl = new TimelineMax();

    tl = tl.to(photos[0], 0.4, {});

    for (const photo of photos) {
      tl = tl.fromTo(
        photo,
        0.4,
        { top: -20, opacity: 0 },
        { top: 0, opacity: 1 }
      );
    }
  }
});
})();