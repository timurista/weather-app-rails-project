
const kelvinToF = (kelvinValue) => (( kelvinValue - 273.15) * 9/5) + 32;
// const daysFromNow = (int) => 

window.addEventListener('load', () => {
  console.log('loaded');
  var root = document.getElementById('root');
  const APIKEY = 'e1e8745a9feec7cd789b6d2c05503d79';
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Phoenix,US&APPID=${APIKEY}`)
    .then( res => res.json())
    .then(res => {
      console.log(res.list)
      res.list.slice(0,5).forEach((item, index) => {
        let temp = item.main.temp && kelvinToF(item.main.temp)
        console.log('temp', temp, item.main)
        var card = document.createElement('div')
        card.textContent = `TEMP: ${Number(temp).toFixed(1)} degrees`
        root.appendChild(card);
      })
    })
})
