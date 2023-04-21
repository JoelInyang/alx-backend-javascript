//Write a function,  divideFunction that will accept two argument
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw Error('cannot divide by 0');
  return numerator / denominator;
}

