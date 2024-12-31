const giftWheel = document.getElementById('giftWheel');

let spinning = false;
let angle = 0;

giftWheel.addEventListener('click', () => {
  if (!spinning) {
    spinning = true;
    spinWheel();
  }
});

function spinWheel() {
  // Каждое вращение на 45 градусов (поскольку круг разделен на 8 частей)
  angle += 45;
  giftWheel.style.transition = "transform 3s cubic-bezier(0.25, 0.8, 0.25, 1)";
  giftWheel.style.transform = `rotate(${angle}deg)`;
  
  // После завершения вращения запускаем заново
  giftWheel.addEventListener('transitionend', () => {
    spinWheel();
  }, { once: true });
}
