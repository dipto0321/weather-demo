async function getWoeid(location) {
  try {
    const url = `https://yacdn.org/proxy/https://www.metaweather.com/api/location/search/?query=${location}`;
    const result = await fetch(url);
    const data = await result.json();
    return data[0].woeid;
  } catch (error) {
    alert("No location found");
  }
}

async function getWeatherThroughId(woeid) {
  try {
    const result = await fetch(`https://yacdn.org/proxy/https://www.metaweather.com/api/location/${woeid}/`);
    const data = await result.json();
    return data;
  } catch (error) {

  }
}

async function getWeather(location) {
  try {
    const woeid = await getWoeid(location);
    const data = await getWeatherThroughId(woeid);
    const today = data.consolidated_weather[0];
    document.getElementById("WeatherResult").innerHTML += `<li class="content is-medium">Today's temperature in ${data.title} will stay between ${today.min_temp} to ${today.max_temp}</li>`;
  } catch (error) {

  }
}

function findWeather() {
  const location = document.getElementById("location").value;
  return location;
}

function exit() {
  const quit = prompt("Want to quit enter 'q', if know then enter any charecter except 'q': ");
  if (quit.toLowerCase() === 'q') {
    return false;
  } else {
    return true;
  }
}

{
  getWeather('dhaka');
  getWeather('manila');
  getWeather('london');
  getWeather('seoul');
  getWeather('new');
  getWeather('moscow');
  getWeather('cape');
  getWeather('rio');

  document.getElementById("findWeather").addEventListener('submit', e => {
    e.stopPropagation();
    e.preventDefault();
    const location = findWeather();
    getWeather(location);
    e.target.reset();
  });
}