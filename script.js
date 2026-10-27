const response = await fetch("https://editor.p5js.org/editor/ersheff/projects/57qJh0loC");
const sketch = await response.json();
console.log(sketch);
