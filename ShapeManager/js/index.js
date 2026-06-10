const getElement = (id) => {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`Element not found: ${id}`);
    return el;
};
let shapeTypeSelect;
let propertyGroups;
let propertyInputs;
let resultText;
let resultCard;
const chooseShape = (shapeType) => {
    Object.entries(propertyGroups).forEach(([name, group]) => {
        if (name === shapeType) {
            group.classList.remove('hidden');
        }
        else {
            group.classList.add('hidden');
        }
    });
};
const toggleResultCard = (show) => {
    if (show) {
        resultCard.classList.add('visible');
    }
    else {
        resultCard.classList.remove('visible');
    }
};
const calculateArea = (shape) => {
    switch (shape.type) {
        case 'circle':
            return `Area of Circle: ${(Math.PI * shape.radius ** 2).toFixed(2)}`;
        case 'rectangle':
            return `${shape.width * shape.height}`;
        case 'triangle':
            return `${0.5 * shape.base * shape.height}`;
        default:
            const _nonExistent = shape;
            return _nonExistent;
    }
};
export {};
