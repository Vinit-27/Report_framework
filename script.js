data=fetch('https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c',get)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log('Data received:', data);
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});