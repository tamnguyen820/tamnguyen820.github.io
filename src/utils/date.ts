export function formatDate(date: Date, excludeYear: boolean = false): string {
  const month = date.toLocaleString("default", { month: "short" });
  if (excludeYear) return month;
  const year = date.getFullYear();
  return `${month} ${year}`;
}
