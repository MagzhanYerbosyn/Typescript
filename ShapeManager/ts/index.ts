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

type Shapes = Circle | Triangle | Rectangle;

const getElement = (id: string): HTMLElement => {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element not found: ${id}`);
  return el;
};

let shapeTypeSelect: HTMLSelectElement;

let propertyGroups: {
  circle: HTMLElement;
  rectangle: HTMLElement;
  triangle: HTMLElement;
};

let propertyInputs: {
  radius: HTMLInputElement;
  width: HTMLInputElement;
  height: HTMLInputElement;
  base: HTMLInputElement;
  triangleHeight: HTMLInputElement;
};
