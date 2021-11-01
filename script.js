let weather = {
    apiKey: "21f5590ffcd985fe35789584ce65b50c",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city + "&units=metric" + "&appid=" 
            + this.apiKey
        )
        .then ((response) => {
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        const { pressure } = data.main;
        const { all } = data.clouds;

        document.querySelector(".city").innerText = name;
        document.querySelector(".icon").src= "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".main").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector('.wind').innerText = speed + "km/h";
        document.querySelector(".pressure").innerText = pressure + "Hg";
        document.querySelector('.cloudy').innerText = all + "%";
    },
    search: function() {
        this.fetchWeather(document.querySelector('.search').value);
    }
};

function clearInput () {
    const input = document.querySelector('.search');
    input.value = "";
}
document.querySelector('.search-btn').addEventListener('click', function(){
    weather.search();
    clearInput();
});



document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
      clearInput();
    }
  });

weather.fetchWeather("Kraków");

//time
const monthName = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
const dayName = ["Monday", "Tuesday", "Wensday", "Thursday", "Friday", "Saturday", "Sunday"]

const time = new Date();
const date = time.getHours() + ":" + time.getMinutes() + " " +  dayName[time.getDay()] + " " + time.getDay() + " " + monthName[time.getMonth()] + " " + time.getFullYear();
const day = monthName[time.getMonth()];
const month = 

document.querySelector('.time').innerText = date;

console.log(day)