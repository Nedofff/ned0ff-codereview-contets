export const getLocalDate = (date: number | string | null | undefined) => {
  if (!date) return "Неизвестно";
  return new Date(date).toLocaleDateString("ru-RU");
};
