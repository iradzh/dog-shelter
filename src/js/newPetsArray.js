export const createNewArr = (pets) => {
  let randomArr = [];

  for (let index = 0; index < 6; index++) {
    let shuffled = shuffleArray(pets);
    // console.log(shuffled);
    randomArr.push(...shuffled);
  }

  return randomArr;
};

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
