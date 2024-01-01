function createCounter(init) {
  let currentValue = init;

  return {
    increment: function() {
      currentValue++;
      return currentValue;
    },
    decrement: function() {
      currentValue--;
      return currentValue;
    },
    reset: function() {
      currentValue = init;
      return currentValue;
    }
  };
}

// Example usage:
const counter = createCounter(5);
const calls = ["increment", "reset", "decrement"];
const result = [];

calls.forEach(call => {
  if (call === "increment") {
    result.push(counter.increment());
  } else if (call === "decrement") {
    result.push(counter.decrement());
  } else if (call === "reset") {
    result.push(counter.reset());
  }
});

console.log(result); 
