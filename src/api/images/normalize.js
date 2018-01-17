/**
 * normalize images data received
 * @module api/images/normalize
 * */

const normalizeData = (response) => {
  const colors = [];
  const items = response.map((item, i) => {
    if (item.prominentColor && !colors.includes(item.prominentColor)) {
      colors.push(item.prominentColor);
    }
    return { ...item, key: i };
  });
  return { colors, items };
};

export default normalizeData;
