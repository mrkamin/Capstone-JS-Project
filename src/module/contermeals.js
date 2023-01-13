export const counters = () => {
  const counterMeals = document.querySelectorAll('.meal__conter');
  const mealsTotal = document.querySelector('.total__meals');

  if (counterMeals.length < 1) {
    mealsTotal.innerHTML = ` (${0})`;
    return 0;
  }
  mealsTotal.innerHTML = ` (${counterMeals.length})`;
  return (counterMeals.length);
};

export default counters;