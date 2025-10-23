const key = "5wJNaYjX6EmecPVwrSKg6A";
const baseUrl = "https://api.dsvkurs.miun.se/api";
export async function request(method, url, body) {
  const fullUrl = new URL(baseUrl + url);
  const result = await fetch(fullUrl, {
    method,
    headers: {
      "content-type": "application/json",
      "x-api-key": key,
    },
    body: body == null ? undefined : JSON.stringify(body),
  });
  const data = await result.json();

  if (!result.ok) {
    const error = new Error("kunde inte hämta data");
    error.status = result.status;
    error.data = data;
    throw error;
  }
  return data;
}
