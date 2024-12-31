const giftCircle = document.getElementById('giftCircle');
let rotation = 0;

// Бесконечное вращение круга
function spinCircle() {
  rotation += 2; // Скорость вращения
  giftCircle.style.transform = `rotate(${rotation}deg)`;
  requestAnimationFrame(spinCircle);
}

// Запуск вращения
spinCircle();
