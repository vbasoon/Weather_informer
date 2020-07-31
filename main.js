let now = new Date();
document.querySelector('.time-box').textContent = now;
//let timemark = Date();
//document.querySelector('.time-mark').textContent = timemark;

fetch('http://api.openweathermap.org/data/2.5/weather?id=704885&appid=&lang=ua')
   .then(resp => resp.json())
   .then(data => {
      console.log(data);
      document.querySelector('.city-name').textContent = data.name
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
      document.querySelector('.description').textContent = data.weather[0]['description'];
      const detail = document.querySelector('.detail').innerHTML = `<img
   src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
      // const feels = detail.querySelector('.feels').innerHTML = Math.round(data.main.feels_like - 273) + '&deg;';
      // console.log(feels)
   })

fetch('http://api.openweathermap.org/data/2.5/weather?id=756135&appid=&lang=ua')
   .then(resp => resp.json())
   .then(data2 => {
      console.log(data2);
      document.querySelector('.city-name2').textContent = data2.name;
      document.querySelector('.temp2').innerHTML = Math.round(data2.main.temp - 273) + '&deg;';
      document.querySelector('.description2').textContent = data2.weather[0]['description'];
      const detail = document.querySelector('.detail2').innerHTML = `<img
   src="https://openweathermap.org/img/wn/${data2.weather[0]['icon']
         }@2x.png">`;
   })

fetch('http://api.openweathermap.org/data/2.5/weather?id=625144&appid=&lang=ua')
   .then(resp => resp.json())
   .then(data3 => {
      console.log(data3);
      document.querySelector('.city-name3').textContent = data3.name;
      document.querySelector('.temp3').innerHTML = Math.round(data3.main.temp - 273) + '&deg;';
      document.querySelector('.description3').textContent = data3.weather[0]['description'];
      const detail = document.querySelector('.detail3').innerHTML = `<img
src="https://openweathermap.org/img/wn/${data3.weather[0]['icon']
         }@2x.png">`;
   })

fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
   .then(resp => resp.json()
      .then(data4 => {
         let usd = data4[0].sale;
         let eur = data4[1].sale;
         let rur = data4[2].sale;
         document.querySelector('.usd').textContent = `USD: ${usd}, `;
         document.querySelector('.eur').textContent = `EUR: ${eur}, `;
         document.querySelector('.rur').textContent = `RUR: ${rur}`;
      }))

// function currency() {

// }

setTimeout(function () {
   location.reload();
}, 31555);

// currency();
