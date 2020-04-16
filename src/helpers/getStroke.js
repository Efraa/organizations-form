export const getStroke = (percentage, radio) =>
  ((100 - percentage) / 100) * (Math.PI * (radio * 2))
