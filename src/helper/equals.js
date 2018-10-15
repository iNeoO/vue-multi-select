export default {
  compareArrayObject(value1, value2, key) {
    if (value1.length !== value2.length) return false;
    for (let i = 0; i < value1.length; i += 1) {
      if (value1[i][key] !== value2[i][key]) {
        return false;
      }
    }
    return true;
  },
  compareSimpleArray(value1, value2) {
    if (value1.length !== value2.length) return false;
    for (let i = 0; i < value1.length; i += 1) {
      if (value1[i] !== value2[i]) {
        return false;
      }
    }
    return true;
  },
};
