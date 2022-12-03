const allMonths = [
  'Січеня',
  'Лютий',
  'Березеня',
  'Квітеня',
  'Травеня',
  'Червеня',
  'Липеня',
  'Серпеня',
  'Вересеня',
  'Жовтеня',
  'Листопад',
  'Груденя',
];

/* Получаем 05 серпня 11:00 */
export const getDate = date => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const hour = newDate.getHours();
  const minutes = newDate.getMinutes();

  const dayString = String(day).padStart(2, 0);
  const hourString = String(hour).padStart(2, 0);
  const minutesString = String(minutes).padStart(2, 0);
  const yearString = String(year);

  return `${dayString} ${allMonths[month]}, ${yearString} | ${hourString}:${minutesString}`;
};
