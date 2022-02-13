

// Get root element:
let root = window.getComputedStyle(document.documentElement);
console.log('root.textDecoration:',root.textDecoration);
let rootCustomVariable = root.getPropertyValue('--general-div');
console.log('rootCustomVariable:',rootCustomVariable);

// Get & set other elements:
document.getElementById('dark').addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme', 'rgb(48, 47, 47)');
})
document.getElementById('light').addEventListener('click', () => {
  document.documentElement.style.setProperty('--theme', 'white');
})