fetch("http://api.openweathermap.org/data/2.5/weather?q=Kiev&units=metric&APPID=5d066958a60d315387d9492393935c19")
  .then(response => response.json())
  .then(data => {
    document.querySelector('.city__name').textContent = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg';
    document.querySelector('.pressure').textContent = data.main.pressure;
    document.querySelector('.humidity').textContent = data.main.humidity;
    document.querySelector('.speed').textContent = data.wind.speed;
    document.querySelector('.deg').textContent = data.wind.deg;
    document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/w/${data.weather[0]['icon']}.png">`;
  })
  .catch(error => console.log('error', error));

