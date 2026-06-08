const getElement = (id) => {
    const el = document.getElementById(id);
    if (!el)
        throw new Error(`Element not found: ${id}`);
    return el;
};
let shapeTypeSelect;
let propertyGroups;
let propertyInputs;
export {};
