export const toRuble = (value: number): string => {
  const numeric = +value;
  if (Number.isNaN(+numeric)) {
    return "NaN";
  }

  const fractional = Math.round((numeric % 1) * 100);
  const thousandSeparatorRegex = /\B(?=(\d{3})+(?!\d))/g;
  let price = `${Math.trunc(numeric)}`.replace(thousandSeparatorRegex, " ");
  if (fractional !== 0) {
    price = [price, fractional].join(",");
  }

  return `${price} ₽`;
};
