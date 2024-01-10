function hasMaximum2DecPlaces(value) {
  const numArr = value.toString().split(".");
  if (numArr.length < 2) {
    return true; // Whole number
  }

  return numArr[1]?.length <= 2;
}

function roundUpTo2DecPlaces(value) {
  return parseFloat(Number(value).toFixed(2));
}

export { hasMaximum2DecPlaces, roundUpTo2DecPlaces };
