const countBMRmen = (age, weight, height) => {
  const BMRmen = 66.47 + 13.75 * weight + 5 * height - 6.75 * age;
  return Math.round(BMRmen);
};

const countBMRwomen = (age, weight, height) => {
  const BMRwomen = 665.09 + 9.56 * weight + 1.85 * height - 4.67 * age;
  return Math.round(BMRwomen);
};

export const calculate = (basicData) => {
  const { age, weight, height, gender, activity } = basicData;
  let bmr = 0;

  if (gender === "female") {
    bmr = countBMRwomen(age, weight, height);
  }

  if (gender === "male") {
    bmr = countBMRmen(age, weight, height);
  }

  if (!activity || Number.isNaN(bmr)) {
    return "----";
  }

  return Math.round(bmr * activity);
};
