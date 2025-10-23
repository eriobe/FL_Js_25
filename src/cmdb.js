import { request } from "./apiclient.js";

async function getUsers() {
  const endpoint = "/Users";
  const result = await request("get", endpoint);
  console.log(result);
}

//await getUsers();
async function reviewMedia(review) {
  const endpoint = "/contributions/review";
  try {
    const result = await request("post", endpoint, review);
    console.log(result);
  } catch (error) {
    if (error.status === 409) {
      console.warn("Du har redan betygsatt den här filmen");
    } else {
      console.warn("nåt fel");
    }

    console.error(error);
  }
}

const review = {
  imdb_id: "tt0086190",
  cmdb_score: 4,
  title: "Magisk",
  content: "Vilken tur att man kan få jeddaj fårce",
};

async function getToplist() {
  const endpoint = "/Toplists/top-rated-movies";
  const params = {
    pageNumber: 1,
    pageSize: 2,
    offset: 0,
    minVotesForRanking: 2,
  };
  const qs = new URLSearchParams(params).toString();
  try {
    const result = await request("get", `${endpoint}?${qs}`);
    console.log(result);
  } catch (error) {
    console.log("fel");
  }
}
await getToplist();
//await reviewMedia(review);
