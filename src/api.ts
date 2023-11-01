const api_KEY = process.env.REACT_APP_NEWS_KEY;
// const news_URL = `https://newsapi.org/v2/top-headlines?country=${}&pageSize=17&apiKey=${api_KEY}`;
const countryKr = "kr";
const countryUs = "Us";
const countryJp = "Jp";

function selecCountry(country: string) {
  return `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=17&apiKey=${api_KEY}`;
}

export function fetchKrNews() {
  return fetch(selecCountry(countryKr)).then((response) => response.json());
}

export function fetchUsNews() {
  return fetch(selecCountry(countryUs)).then((response) => response.json());
}

export function fetchJpNews() {
  return fetch(selecCountry(countryJp)).then((response) => response.json());
}
