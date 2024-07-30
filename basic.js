const temp = document.getElementById('data5');
const p1 = document.createElement('p');
p1.innerHTML = "----";
temp.appendChild(p1);
const temp2 = document.getElementById('data6');
const p2 = document.createElement('p');
p2.innerHTML = "----";
temp2.appendChild(p2);
const temp3 = document.getElementById('data7');
const p3 = document.createElement('p');
p3.innerHTML = "----";
temp3.appendChild(p3);
const temp4 = document.getElementById('data8');
const p4 = document.createElement('p');
p4.innerHTML = "----";
temp4.appendChild(p4);
const temp5 = document.getElementById('data9');
const p5 = document.createElement('p');
p5.innerHTML = "----";
temp5.appendChild(p5);
const apikey = "";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchb = document.querySelector("#searchbar input");
const searchbtn = document.querySelector("#searchbar button");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    const a=data.main.temp;
    const b=data.main.feels_like;
    var c=data.weather[0].description;
    const d=data.wind.speed;
    p1.innerHTML = Math.floor(a-273)+"°C";
    p2.innerHTML = Math.floor(b-273)+"°C";
    p3.innerHTML = c.toUpperCase();
    p4.innerHTML = Math.floor(d*3.6)+" km/hr";
    p5.innerHTML = data.main.humidity+"%";
}

searchbtn.addEventListener("click", () => {
    checkweather(searchb.value);
})
// checkweather('ranchi');