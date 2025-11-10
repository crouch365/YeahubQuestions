export function cleanParams<T extends object>(obj: T): Partial<T> {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const isEmptyArray = Array.isArray(value) && value.length === 0;
    const isEmptyString = value === "";
    if (
      value !== undefined &&
      value !== null &&
      !isEmptyArray &&
      !isEmptyString
    ) {
      acc[key as keyof T] = value;
    }
    return acc;
  }, {} as Partial<T>);
}
