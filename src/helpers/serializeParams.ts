export const serializeParams = (
  limit:number,
  filterName: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filter:any
): string => {
  const validFilterEntries = Object.entries(filter)
  .filter(
    ([k, v]) =>
      typeof k === "string" &&
      ["string", "number", "boolean"].includes(typeof v) &&
      v !== ""
  )
  .map(([k, v]) => {
    const capitalizedKey = k.charAt(0).toUpperCase() + k.slice(1);
    return `${capitalizedKey}=${v}`;
  })
  .join("&");

  if (validFilterEntries.length === 0) {
    return `${filterName}?Limit=${limit}`
  }

  return `${filterName}?Limit=${limit}&${validFilterEntries}`;
};
