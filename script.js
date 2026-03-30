const pieces = document.querySelectorAll(".piece");

pieces.forEach((piece) => {
  piece.addEventListener("mousemove", (event) => {
    const rect = piece.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const moveX = ((x / rect.width) - 0.5) * 20;
    const moveY = ((y / rect.height) - 0.5) * 20;

    piece.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  piece.addEventListener("mouseleave", () => {
    piece.style.transform = `translate(0px, 0px)`;
  });
});
