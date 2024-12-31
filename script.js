const giftCircle = document.getElementById('giftCircle');
let isSpinning = false;
let rotation = 0;

// Функция для бесконечного вращения
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

// Запуск вращения при клике на круг
giftCircle.addEventListener('click', spinCircle);
