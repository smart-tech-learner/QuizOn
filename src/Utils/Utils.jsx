export const getStringInBetween = (startStr, endStr, str) => {
  const pos = str.indexOf(startStr) + startStr.length;
  return str.substring(pos, str.indexOf(endStr, pos));
};
