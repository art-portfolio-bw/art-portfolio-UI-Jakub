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
    imgElement.appendChild(imgCover);
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

    this.element.textContent = this.likes;

    this.element.addEventListener("click", () => this.addLike());
  }

  addLike() {
    if (!this.liked) {
      this.likes++;
    } else {
      this.likes--;
    }
    this.liked = !this.liked;
    this.element.textContent = this.likes;
  }
}

class CommentButton {
  constructor() {
    this.element = document.createElement("button");
    this.element.textContent = "Comment";
    this.element.classList.add("comment-button");
  }
}

class RecentPopularPhoto {
  constructor(props) {
    this.element = document.createElement("div");
    this.element.classList.add("collection");
    this.user = props.user;
    this.image = props.image;
    this.title = props.title;
    this.likes = props.likes;
  }
}

const topPhotoData = [
  {
    user: {
      name: "Sam Payton",
      image: "img/placeholder1.jpg"
    },
    image: "img/placeholder1.jpg",
    title: "Dessert Plain",
    likes: 100
  },
  {
    user: {
      name: "Amy Thomas",
      image: "img/placeholder1.jpg"
    },
    image: "img/placeholder2.jpg",
    title: "Ocean Hue",
    likes: 85
  },
  {
    user: {
      name: "Sophia Phung",
      image: "img/placeholder1.jpg"
    },
    image: "img/placeholder3.jpg",
    title: "Raspberry Spring",
    likes: 73
  }
];

topPhotoData.forEach(data =>
  document.querySelector(".top-photographs").append(new TopPhoto(data).element)
);
