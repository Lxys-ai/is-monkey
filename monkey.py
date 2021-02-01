import requests

test = requests.post("http://localhost:3000/monkey", data={"val": "monkey"})
print(test.text)