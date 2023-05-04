export const getIntervals = (startTime: string, endTime: string) => {
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);
  const hourIntervals = [];

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 20) {
      const interval = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      hourIntervals.push(interval);
    }
  }

  for (let minute = 0; minute < endMinute; minute += 20) {
    const interval = `${endHour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
    hourIntervals.push(interval);
  }

  return hourIntervals;
};
