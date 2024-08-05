
let data= fetch('https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data=>{
        return eval(data.slice(data.indexOf('[')));
      });

let table = document.getElementById("Employee");
let row;
data.then(value =>{
    for (let i=0;i<value.length;i++){
        row= table.insertRow(i+1);
        row.insertCell(0).innerHTML=value[i]['id'];
        row.insertCell(1).innerHTML=value[i]['name'];
        row.insertCell(2).innerHTML=value[i]['age'];
        row.insertCell(3).innerHTML=value[i]['role'];
        row.insertCell(4).innerHTML=value[i]['hireDate'];
        row.insertCell(5).innerHTML=value[i]['isActive'];
        row.insertCell(6).innerHTML=value[i]['salary'];
        row.insertCell(7).innerHTML=value[i]['department'];
        row.insertCell(8).innerHTML=value[i]['projectCompleted'];
        row.insertCell(9).innerHTML=value[i]['accessLevel'];
    }
})
