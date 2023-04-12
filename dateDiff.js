function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
}

function getInterval(start, end) {
  // Setting correct days
  start.setDate(start.getDate() + 1);
  end.setDate(end.getDate() + 1);

  const startString = start.toISOString().split('T')[0];
  const endString = end.toISOString().split('T')[0];

  console.log(start, end)

  if(startString === endString) {
    return {
      years: 0,
      months: 0,
      days: 0,
    }
  }

  let yearDifference = end.getFullYear() - start.getFullYear();
  let monthDifference = end.getMonth() - start.getMonth();
  let dayDifference = end.getDate() - start.getDate();

  if(dayDifference < 0) {
    const daysInLastFullMonth = daysInMonth(end.getMonth() + 1, end.getFullYear());

    if(daysInLastFullMonth < start.getDate()) {
      dayDifference = daysInLastFullMonth + dayDifference + (start.getDate() - daysInLastFullMonth);
    } else {
      dayDifference += daysInLastFullMonth;
    }

    monthDifference--;
  }

  if(monthDifference < 0) {
    monthDifference += 12;
    yearDifference--;
  }

  return {
    years: yearDifference,
    months: monthDifference,
    days: dayDifference,
  };
}

console.log(getInterval(new Date(2023, 12, 1), new Date(2024, 3, 2)));