window.addEventListener("load", () => {
  const tl = new TimelineMax();

  tl.fromTo(".showcase", 1, { opacity: 0 }, { opacity: 1 })
    .fromTo(".design", 1, { opacity: 0 }, { opacity: 1 })
    .fromTo(
      ".showcase2",
      1,
      { marginLeft: 200, opacity: 0 },
      { marginLeft: 0, opacity: 1 }
    )
    .fromTo(
      ".design2",
      1,
      { marginLeft: 200, opacity: 0 },
      { marginLeft: 0, opacity: 1 }
    );
});
