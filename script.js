const giftCircle = document.getElementById('giftCircle');
let isSpinning = false;
let rotation = 0;

function spinCircle() {
  if (!isSpinning) {
    isSpinning = true;
    const spin = () => {
      rotation += 2; // Скорость вращения
      giftCircle.style.transform = `rotate(${rotation}deg)`;
      requestAnimationFrame(spin);
    };
    spin();
  }
}

giftCircle.addEventListener('click', spinCircle);
