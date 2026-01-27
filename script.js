function scrollToLove() {
    document.querySelector('.love').scrollIntoView({ behavior: 'smooth' });
  }
  
  function yesClick() {
    document.getElementById("response").innerHTML =
      "YAY!!! I love you so much 💕💍";
  }
  
  const noBtn = document.getElementById("noBtn");
  
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
  });
  