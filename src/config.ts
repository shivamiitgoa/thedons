export const mintStartDate = new Date("2022-02-15T21:00:00.000Z");
export const mintEndDate = new Date("2022-02-16T21:00:00.000Z");

export const dateTimeFormatter = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  day: "numeric",
  month: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
