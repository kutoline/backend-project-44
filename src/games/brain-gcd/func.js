export const getAllDivisorsNumber = (num) => {
  const divisors = [];

  for (let i = 0; i <= num; i += 1) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  return divisors;
};

export const getCommonDivisors = (collFirst, collTwo) => {
  const divisors = [];

  for (let i = 0; i < collFirst.length; i += 1) {
    if (collTwo.includes(collFirst[i])) {
      divisors.push(collFirst[i]);
    }
  }

  return divisors;
};

export const getHighestDivisor = (coll) => {
  let result = 0;

  for (let i = 0; i < coll.length; i += 1) {
    if (result < coll[i]) {
      result = coll[i];
    }
  }

  return result;
};
