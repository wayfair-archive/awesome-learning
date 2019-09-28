const numberLookup = {
  0: "0 is the atomic number of the theoretical element tetraneutron.",
  1: "1 is the number of moons orbiting Earth.",
  2: "2 is the price in cents per acre the USA bought Alaska from Russia.",
  3: "3 is the number of spatial dimensions we perceive our universe to have.",
  4: "4 is the number of human blood groups (A, B, O, AB).",
  5: "5 is the number of permanent members with veto power on the United Nations Security Council.",
  6: "6 is the number of orders of the Mishnah.",
  7: "7 is the number of estimated objects that can be simultaneously held in human working memory.",
  8: "8 is the number of legs that arachnids have.",
  9: "9 is the number of innings in a regulation, non-tied game of baseball.",
  10: "10 is the number of years in a decade.",
}

export function getNumberTrivia(number) {
  return new Promise((resolve) => {
    const timeout = Math.random() * 3000;
    setTimeout(() => {
      resolve({
        number,
        trivia: numberLookup[number]
      });
    }, timeout);
  });
}
