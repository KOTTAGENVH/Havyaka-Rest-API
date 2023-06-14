
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
On port  ```localhost:8000/```


    
## Environment Variables

To run this project, you will need to add the `MONGODB_URI ` environment variables to your .env file




## Authentication/Authorization
No authentication or authorization is required to access this API.


## End Points & Query
![mantraAPI](https://github.com/gaonkarBhai/Havyaka-Rest-API/assets/118743210/4a95eacd-08a7-4d35-ac06-a7dff81bdad8)

| Query Parameter | Description |
| --------------- | ----------- |
| limit           | Limits the number of results returned. Default: 5 |
| sort            | Specifies the sorting order of the results. Comma-separated list of fields. Default: sorted by "number" field |
| fields          | Specifies the fields to include in the returned results. Comma-separated list of fields |
| range           | Filters results by the "range" field |
| name            | Performs a case-insensitive search for the provided string value in the "name" field |


## Demo
### Request 
`https://havyaka-rest-api-gaonkarbhai.vercel.app/api/v1/mantras?limit=1`

### Responce
```json
    {
  "mantras": [
    {
      "_id": "64897f6fd17f7175cd6a57c8",
      "number": 1,
      "name": "Gayatri Mantra",
      "shloka": "Om Bhur Bhuva Swaha, Tat Savitur Varenyam Bhargo Devasya Dheemahi, Dhiyo Yo Nah Prachodayat",
      "range": "long",
      "godName": "The Sun God (Savitur)",
      "purpose": "The Gayatri Mantra is a sacred Vedic chant that is dedicated to the Sun God and is believed to bestow wisdom, enlightenment, and divine grace.",
      "duration": "Repetition 108 times",
      "origin": "Rigveda",
      "chantingInstructions": "Sit in a calm and quiet place, focus your attention on the divine qualities of the Sun God, and chant the mantra with sincerity and devotion. Repeat it 108 times using a mala (prayer beads) if possible.",
      "benefits": "Enhances spiritual growth, promotes intellectual sharpness, brings clarity of thought, and bestows divine blessings.",
      "culturalSignificance": "The Gayatri Mantra holds immense cultural and spiritual significance in Hinduism and is considered one of the most important and powerful mantras.",
      "references": [
        {
          "title": "Rigveda",
          "link": "https://www.sacred-texts.com/hin/rigveda/",
          "_id": "64897f6fd17f7175cd6a57c9"
        },
        {
          "title": "Yajurveda",
          "link": "https://www.sacred-texts.com/hin/yv/",
          "_id": "64897f6fd17f7175cd6a57ca"
        }
      ],
      "__v": 0
    }
  ],
  "docNum": 1,
  "success": true

}
```


## Author - About Me
`github`
- [X]  [@gaonkarBhai](https://github.com/gaonkarBhai)

`Linkedin`
- [X]  [@Naveen](https://www.linkedin.com/in/naveen-gaonkar-2b0810258/)

- If you find any odd or mismatch please contact Me

