const resultCardElement = document.getElementById('result-card');
const resultTextElement = document.getElementById('result-text');
const circleGroupElement = document.getElementById('circle-props');
const radiusInputElement = document.getElementById('radius');
resultTextElement.textContent = 'Enter a radius to see the area';
circleGroupElement.classList.remove('hidden');
resultCardElement.classList.add('visible');
radiusInputElement.addEventListener('input', () => {
    const radius = Number(radiusInputElement.value) || 0;
    const area = Math.PI * radius ** 2;
    resultTextElement.textContent = `Area of Circle: ${area.toFixed(2)}`;
});
export {};
