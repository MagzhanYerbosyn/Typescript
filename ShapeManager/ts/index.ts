const resultCardElement = document.getElementById('result-card')!;
const resultTextElement = document.getElementById('result-text')!;
const circleGroupElement = document.getElementById('circle-props') as HTMLElement;
const radiusInputElement = document.getElementById('radius') as HTMLInputElement;

resultTextElement.textContent = 'Enter a radius to see the area';

circleGroupElement.classList.remove('hidden');
resultCardElement.classList.add('visible');

radiusInputElement.addEventListener('input', () => {
  const radius = Number(radiusInputElement.value) || 0;
  const area = Math.PI * radius ** 2;
  resultTextElement.textContent = `Area of Circle: ${area.toFixed(2)}`;
});

interface Shape {
  type: string;
}

interface Circle extends Shape {
  type: 'circle';
  radius: number;
}

interface Rectangle extends Shape {
  type: 'rectangle';
  width: number;
  height: number;
}

interface Triangle extends Shape {
  type: 'triangle';
  base: number;
  height: number;
}
