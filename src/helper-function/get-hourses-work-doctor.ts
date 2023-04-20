export const getHourIntervals = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const hourIntervals = [];
  let workHours = 0;

  for (let i = hours; i < 24; i++) {
    if (workHours >= 9) break; //

    const hour = i.toString().padStart(2, "0");
    const interval = `${hour}:${minutes.toString().padStart(2, "0")}`;
    hourIntervals.push(interval);
    workHours++;
  }

  return hourIntervals;
};
