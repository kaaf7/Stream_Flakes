export const serializeParams = (
    filterName: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filter: any
  ) => {
    const validFilterEntries = Object.entries(filter)
      .filter(([k, v]) => ["string", "number", "boolean"].includes(typeof v) && v !== "")
      .map(([k, v]) => `${k}=${v}`).join("&")
  
    return validFilterEntries.length > 0 && `${filterName}?${validFilterEntries}`
  }