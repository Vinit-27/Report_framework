
let data= fetch('https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c').then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data=>{
        return eval(data.slice(data.indexOf('[')));
      });

console.log(data)
