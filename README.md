
# Havyaka The Rest API
This REST API provides information about Hindu Mantras and Suktam. It includes endpoints to retrieve mantras by name or range.


## Installation and Run locally

### clone

```bash
git clone https://github.com/gaonkarBhai/Havyaka-Rest-API.git

cd Havyaka-Rest-API
```

### run with npm
```bash
  npm i

  npm start
```
On port  ```localhost:3000/api/product```


    
## Environment Variables

To run this project, you will need to add the `MONGODB_URI ` environment variables to your .env file




## Authentication/Authorization
No authentication or authorization is required to access this API.


## End Points
`/api/product?range=short` :  Retrieve a mantra by its range [long/short] .

`/api/product?name=Shri Suktam` : Retrieve a mantra by its name

`/api/product?godName=Lakshmi` : Retrieve a mantra by god name.


## Demo

`http://localhost:3000/api/product?range=short`

### Responce
```
    {
         "data": [
    {
      "_id": "642042d88fd965db537ac008",
      "name": "Mangalam Vishnu",
      "shloka": "Mangalam Vishnu Mangalam Garudadhvaja Mangalam Pundarikaksha Mangalay Tano Harih",
      "range": "short",
      "godName": "Sri Hari Vishnu",
      "purpose": "The shloka invokes the blessings of Lord Vishnu and is chanted to seek his protection, grace, and blessings for a happy and peaceful life.",
      "__v": 0
    },
    ....
  ],
  "docNum": 3
}
```


## Author - About Me
`github`
- [X]  [@gaonkarBhai](https://github.com/gaonkarBhai)
`Linkedin`
- [X]  [@Naveen](https://www.linkedin.com/in/naveen-gaonkar-2b0810258/)

- If you find any odd or mismatch please contact Me

