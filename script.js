
let data= fetch('https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data=>{
        return eval(data.slice(data.indexOf('[')));
      });

var dataset = [];
data.then(value =>{
    for (let i=0;i<value.length;i++){
        dataset.push([value[i]['id'],value[i]['name'],value[i]['age'],value[i]['role'],value[i]['hireDate'],value[i]['isActive'],value[i]['salary'],value[i]['department'],value[i]['projectCompleted'],value[i]['accessLevel']]);
    }
})
var table = document.querySelector('#Employee')
table.innerHTML = '<tr><td>' + dataset + '</td></tr>'
