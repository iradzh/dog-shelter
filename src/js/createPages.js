export const createPages = (array, amountPerPage) => {
  let newArray = [...array];
  let result = [];
  while (newArray.length > 0) {
    result.push(newArray.splice(0, amountPerPage));
  }

  return result;
};
