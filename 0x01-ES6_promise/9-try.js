function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
function mathFunction() {
  return 1000;
}

const queue = guardrail(mathFunction);
console.log(queue); // Output: [1000, "Guardrail was processed"]
function mathFunction() {
  throw new Error('Something went wrong');
}

const queue = guardrail(mathFunction);
console.log(queue); // Output: ["Something went wrong", "Guardrail was processed"]

