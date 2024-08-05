import requests
import json

response = requests.get('https://run.mocky.io/v3/69f60a58-3a36-48c5-a9cf-b100b015950c')
data = response.content.decode('utf8')
data = data[data.index('['):len(data)-2]
new_data=eval(data)
print(new_data)