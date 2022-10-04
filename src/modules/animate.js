const animate = () => {
  const vote = document.getElementById("vote");
  const philosophy = document.getElementById("philosophy");
  const merch = document.getElementById("merch");
  const contact = document.getElementById("contact");

  vote.animate(
    [
      { transform: "rotate(0) translateY(0)" },
      { transform: "rotate(1deg) translateY(1px)" },
      { transform: "rotate(2deg) translateY(3px)" },
      { transform: "rotate(1deg) translateY(2px)" },
      { transform: "rotate(0deg) translateY(0px)" },

      { transform: "rotate(-1deg) translateY(-1px)" },
      { transform: "rotate(-2deg) translateY(-2px)" },
      { transform: "rotate(0deg) translateY(0px)" },
    ],
    {
      duration: 6000,
      easing: "ease-in-out",
      iterations: Infinity,
      fill: "forwards",
    }
  );

  philosophy.animate(
    [
      { transform: "rotate(0) translateY(0)" },
      { transform: "rotate(-1deg) translateY(-1px)" },
      { transform: "rotate(-2deg) translateY(-2px)" },
      { transform: "rotate(0deg) translateY(0px)" },

      { transform: "rotate(1deg) translateY(1px)" },
      { transform: "rotate(2deg) translateY(3px)" },
      { transform: "rotate(0deg) translateY(0px)" },
    ],
    {
      duration: 6000,
      easing: "ease-in-out",
      iterations: Infinity,
      fill: "forwards",
    }
  );

  merch.animate(
    [
      { transform: "rotate(0) translateY(0)" },
      { transform: "rotate(1deg) translateY(1px)" },
      { transform: "rotate(2deg) translateY(3px)" },
      { transform: "rotate(1deg) translateY(2px)" },
      { transform: "rotate(0deg) translateY(0px)" },

      { transform: "rotate(-1deg) translateY(-1px)" },
      { transform: "rotate(-2deg) translateY(-2px)" },
      { transform: "rotate(0deg) translateY(0px)" },
    ],
    {
      duration: 6000,
      easing: "ease-in-out",
      iterations: Infinity,
      fill: "forwards",
    }
  );

  contact.animate(
    [
      { transform: "rotate(0) translateY(0)" },
      { transform: "rotate(-1deg) translateY(-1px)" },
      { transform: "rotate(-2deg) translateY(-2px)" },
      { transform: "rotate(0deg) translateY(0px)" },

      { transform: "rotate(1deg) translateY(1px)" },
      { transform: "rotate(2deg) translateY(3px)" },
      { transform: "rotate(0deg) translateY(0px)" },
    ],
    {
      duration: 6000,
      easing: "ease-in-out",
      iterations: Infinity,
      fill: "forwards",
    }
  );
};

export default animate;