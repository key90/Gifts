body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background: #f9f9f9;
  font-family: Arial, sans-serif;
}

.container {
  position: relative;
  width: 320px;
  height: 320px;
}

/* Фиксированная стрелка */
.arrow {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 30px solid red;
  z-index: 2;
  pointer-events: none;
}

/* Круг с секциями */
.circle {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  transform-origin: center;
  transition: transform 0.5s ease-in-out;
}

.section {
  position: absolute;
  width: 50%;
  height: 50%;
  transform-origin: 100% 100%;
  transform: rotate(var(--rotate)) translateX(-50%);
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  box-sizing: border-box;
  writing-mode: vertical-rl; /* Вертикальный текст для удобного чтения */
}
