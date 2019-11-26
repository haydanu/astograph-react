export function percentageDifference(openNumber, closeNumber) {
  let result =
    (closeNumber - openNumber / (closeNumber + openNumber) / 2) * 100;
  return Number.parseFloat(result).toFixed(1);
}
