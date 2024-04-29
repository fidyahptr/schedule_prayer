export const fetcher = async <T>(url: string) => {
  const response = await fetch(url);

  const result = await response.json();
  return result as T;
};