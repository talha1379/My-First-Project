const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "2d96574936mshe47bfa6db921b9dp1527dejsn41d8950d02f0",
    "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
    "Content-Type": "application/json",
  },
};

try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
