import Counter from "./java/examples/singleton/js/singleton.js";

const redButton = document.querySelector('.red-button');
const blueButton = document.querySelector('.blue-button');
const singletonCounter = Counter.getInstance();

const counterInstance1 = new Counter();
const counterInstance2 = new Counter();

console.log(counterInstance2 === counterInstance1);

redButton.addEventListener('click', () => {
  singletonCounter.decrement();
  console.log(singletonCounter.getCount());
})

blueButton.addEventListener('click', () => {
  singletonCounter.increment();
  console.log(singletonCounter.getCount());
})