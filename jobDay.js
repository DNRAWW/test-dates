const holidays = [
  "2022-01-03",
  "2022-01-04",
  "2022-01-05",
  "2022-01-06",
  "2022-01-07",
  "2022-02-22",
  "2022-02-23",
  "2022-03-07",
  "2022-03-08",
  "2022-05-02",
  "2022-05-09",
  "2022-06-13",
  "2022-11-03",
  "2022-11-04",
  "2023-01-02",
  "2023-01-03",
  "2023-01-04",
  "2023-01-05",
  "2023-01-06",
  "2023-02-23",
  "2023-02-24",
  "2023-03-07",
  "2023-03-08",
  "2023-05-01",
  "2023-05-08",
  "2023-05-09",
  "2023-06-12",
  "2023-11-03",
  "2023-11-06"
]


function findNextJobDay(date) {
  const formattedDate = date.toISOString().split('T')[0]; 
  const currentDayNumber = date.getDay();

  if(currentDayNumber === 1 || currentDayNumber === 0 || holidays.find(element => element == formattedDate)) {
    date.setDate(date.getDate()+1)
    return findNextJobDay(date);
  }

  return date;
}

function getNextJobDay(date) {
  // Setting correct month and day
  date.setMonth(date.getMonth() - 1);
  date.setDate(date.getDate() + 1);

  return findNextJobDay(date);
}

console.log(getNextJobDay(new Date(2023, 2, 23)));