export async function fetchGistAirports() {
  const url =
    "https://gist.githubusercontent.com/eriobe/9e86b6e1cf69b52c6cad59963fdc2624/raw/3e25475edd3084bd93233ee80710a87a1dddb582/airports.json";
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("fel");
    }

    const airports = await res.json();
    return airports;
  } catch (error) {
    console.error("Kunde inte hämta flygplatserna");
  }
}
