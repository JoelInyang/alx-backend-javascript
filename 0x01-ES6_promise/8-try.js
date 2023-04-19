export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Cannot divide by 0.");
  }
  return numerator / denominator;
}
console.log(divideFunction(10, 5)); // 2
console.log(divideFunction(10, 0)); // Throws an error: Cannot divide by 0.

