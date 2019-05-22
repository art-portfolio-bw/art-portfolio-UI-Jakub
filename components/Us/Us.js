class AboutPerson {
  constructor(props) {
    this.element = document.createElement("div");
    this.element.classList.add("us-person");
    this.name = `${props.firstName} ${props.lastName}`;
    this.title = props.title;
    this.img = props.img;
    this.links = props.links;

    this.createNameElement();
    this.createTitleElement();
    this.createImgElement();
    this.createLinkElements();
  }

  createNameElement() {
    const name = document.createElement("h2");
    name.textContent = this.name;
    this.element.append(name);
  }

  createTitleElement() {
    const title = document.createElement("h3");
    title.textContent = this.title;
    this.element.append(title);
  }

  createImgElement() {
    const img = document.createElement("img");
    img.src = this.img;
    img.alt = this.name;
    this.element.append(img);
  }

  createLinkElements() {
    for (const link of this.links) {
      const linkElement = document.createElement("a");
      linkElement.href = link.href;
      linkElement.textContent = link.name;
      this.element.append(linkElement);
    }
  }
}

const usData = [
  {
    firstName: "Jakub",
    lastName: "Maleta",
    title: "UI Developer",
    img: "img/about/Jakub Maleta.jpg",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/jakub-maleta-633a92180/"
      },
      { name: "GitHub", href: "https://github.com/nanoblit/" }
    ]
  },
  {
    firstName: "Heymi",
    lastName: "Vanegas",
    title: "UX Designer",
    img: "img/about/Heymi Vanegas.jpg",
    links: []
  },
  {
    firstName: "Amanda",
    lastName: "Lane",
    title: "Front End Developer",
    img: "https://avatars3.githubusercontent.com/u/47289060?s=400&v=4",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/amanda-lane-dev/"
      },
      { name: "GitHub", href: "https://github.com/amlane" }
    ]
  },
  {
    firstName: "Bhumi",
    lastName: "Patel",
    title: "Team Leader",
    img: "https://avatars3.githubusercontent.com/u/44785921?s=400&v=4",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/bhumi-patel-28000a184/"
      },
      { name: "GitHub", href: "https://github.com/bhumip214" }
    ]
  },
  {
    firstName: "Divya",
    lastName: "Nair",
    title: "Backend Developer",
    img: "https://avatars0.githubusercontent.com/u/4283962?s=400&v=4",
    links: [
      {
        name: "LinkedIn",
        href: "www.linkedin.com/in/dsnair/"
      },
      { name: "GitHub", href: "https://github.com/dsnair" }
    ]
  },
  {
    firstName: "Wes",
    lastName: "Jonke",
    title: "UI Developer",
    img: "https://avatars3.githubusercontent.com/u/48270435?s=400&v=4",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/wes-jonke-05409861/"
      },
      { name: "GitHub", href: "https://github.com/Wjonke" }
    ]
  },
  {
    firstName: "Shannon",
    lastName: "Yoshikawa",
    title: "UI Developer",
    img: "img/about/Shannon Yoshikawa.jpg",
    links: [{ name: "GitHub", href: "https://github.com/shannonyoshi" }]
  },
  {
    firstName: "Jacob",
    lastName: "Tonna",
    title: "Front End Developer",
    img: "https://avatars1.githubusercontent.com/u/34466548?s=400&v=4",
    links: [
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/jtonna/"
      },
      { name: "GitHub", href: "https://github.com/Jtonna" }
    ]
  }
].sort((a, b) => (a.lastName < b.lastName ? -1 : 1));

for (const data of usData) {
  document.querySelector(".us-info").append(new AboutPerson(data).element);
}
