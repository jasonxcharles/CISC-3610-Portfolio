const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Load background image
const background = new Image();
background.src = "images/background.jpg";
background.onload = function () {
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  // Load first foreground image
  const fg1 = new Image();
  fg1.src = "images/foreground1.png";
  fg1.onload = function () {
    ctx.drawImage(fg1, 100, 350, 200, 200); // adjust position/size

    // Load second foreground image
    const fg2 = new Image();
    fg2.src = "images/foreground2.png";
    fg2.onload = function () {
      ctx.drawImage(fg2, 500, 300, 150, 150); // adjust position/size

      // Add your name and scene title
      ctx.font = "30px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("Jason A. Charles", 20, 40);
      ctx.fillText("The Canvas Scene", 20, 80);
    };
  };
};
