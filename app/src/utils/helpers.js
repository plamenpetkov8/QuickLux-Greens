function convertTo2DecPoints(number) {
  return Math.round((number + Number.EPSILON) * 100) / 100;
}

function capitalizeFirstLetterOnly(text) {
  const lowercasedText = text.toLowerCase();
  return lowercasedText.charAt(0).toUpperCase() + lowercasedText.slice(1);
}

export { convertTo2DecPoints, capitalizeFirstLetterOnly };
