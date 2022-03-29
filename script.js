console.log("Loaded script.js");
var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
const dailyindia = document.querySelector("#dailyindia");
const totalindia = document.querySelector("#totalindia");
const dailyglobal = document.querySelector("#dailyglobal");
const totalglobal = document.querySelector("#totalglobal");



fetch("https://api.covid19api.com/summary", requestOptions)
    .then(response => response.text())
    .then((result)=>{
        let obj = JSON.parse(result);
        let globalnew = obj['Global'].NewConfirmed;
        let globaltotal = obj['Global'].TotalConfirmed;
        let indianew,indiatotal;
        for(let i = 0; i < obj['Countries'].length; i++){
            if (obj['Countries'][i].Country == "India"){
                indianew = obj['Countries'][i].NewConfirmed;
                indiatotal = obj['Countries'][i].TotalConfirmed;
                break;
            }
        }
        dailyglobal.innerHTML = globalnew;
        totalglobal.innerHTML = globaltotal;
        dailyindia.innerHTML = indianew;
        totalindia.innerHTML = indiatotal;
        console.log(obj);
    })
    .catch(error => console.log('error', error));


  let label = [];

  let monthcases = [];    
  fetch("https://api.covid19api.com/country/india/status/confirmed", requestOptions)
  .then(response => response.text())
  .then((result) => {
    result = JSON.parse(result);
    for(let i = 1; i <= 30; i++ ){
      let daycases = result[result.length - i].Cases - result[result.length - i-1].Cases;
      let date = result[result.length - i].Date.slice(0,10);
      label.push(date);
      monthcases.push(daycases);
    }
    label.reverse();
    monthcases.reverse();
      const data = {
        labels: label,
        datasets: [{
          label: 'Covid Cases (Day)',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: monthcases,
        }]
      };

    
    const config = {
        type: 'line',
        data: data,
        options: {}
      };


    const myChart = new Chart(
        document.getElementById('myChart'),
        config
      );



  })
  .catch(error => console.log('error', error));



