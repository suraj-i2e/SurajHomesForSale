// import { Injectable } from '@angular/core';
// import { HousingLocation } from './housing-location';

// @Injectable({
//   providedIn: 'root'
// })
// export class HousingService {
//   url='http://localhost:3000/locations'

//   constructor() { }

//   async getAllHousingLocations():Promise<HousingLocation[]>{
//     const data= await fetch(this.url);
//     return await data.json() ?? [];
//   }

//   async getHousingLocationById(id:Number):Promise<HousingLocation | undefined>{
//     const data= await fetch(`${this.url}/${id}`);
//     return await data.json()??{};
//   }

//   submitApplication(firstName:string, lastName:string, email:string){
//     alert("Hi "+firstName+" "+lastName+", We will contact you soon!");
//   }

// }





import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList:HousingLocation[]=[
    {
      "id": 0,
      "name": "Acme Fresh Start Housing",
      "city": "Chicago",
      "state": "IL",
      "photo": "https://suraj-i2e.github.io/SurajHomesForSale/assets/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
      "availableUnits": 4,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 1,
      "name": "A113 Transitional Housing",
      "city": "Santa Monica",
      "state": "CA",
      "photo": "https://suraj-i2e.github.io/SurajHomesForSale/assets/brandon-griggs-wR11KBaB86U-unsplash.jpg",
      "availableUnits": 0,
      "wifi": false,
      "laundry": true
    },
    {
      "id": 2,
      "name": "Warm Beds Housing Support",
      "city": "Juneau",
      "state": "AK",
      "photo": "https://suraj-i2e.github.io/SurajHomesForSale/assets/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
      "availableUnits": 1,
      "wifi": false,
      "laundry": false
    },
    {
      "id": 3,
      "name": "Homesteady Housing",
      "city": "Chicago",
      "state": "IL",
      "photo": "https://suraj-i2e.github.io/SurajHomesForSale/assets/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
      "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 4,
      "name": "Happy Homes Group",
      "city": "Gary",
      "state": "IN",
      "photo": "https://suraj-i2e.github.io/SurajHomesForSale/assets/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
      "availableUnits": 1,
      "wifi": true,
      "laundry": false
    },
    {
      "id": 5,
      "name": "Hopeful Apartment Group",
      "city": "Oakland",
      "state": "CA",
      "photo": "https://suraj-i2e.github.io/SurajHomesForSale/assets/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 6,
      "name": "Seriously Safe Towns",
      "city": "Oakland",
      "state": "CA",
      "photo": "https://suraj-i2e.github.io/SurajHomesForSale/assets/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
      "availableUnits": 5,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 7,
      "name": "Hopeful Housing Solutions",
      "city": "Oakland",
      "state": "CA",
      "photo": "https://suraj-i2e.github.io/SurajHomesForSale/assets/r-architecture-GGupkreKwxA-unsplash.jpg",
      "availableUnits": 2,
      "wifi": true,
      "laundry": true
    },
    {
      "id": 8,
      "name": "Seriously Safe Towns",
      "city": "Oakland",
      "state": "CA",
      "photo": "https://suraj-i2e.github.io/SurajHomesForSale/assets/saru-robert-9rP3mxf8qWI-unsplash.jpg",
      "availableUnits": 10,
      "wifi": false,
      "laundry": false
    },
    {
      "id": 9,
      "name": "Capital Safe Towns",
      "city": "Portland",
      "state": "OR",
      "photo": "https://suraj-i2e.github.io/SurajHomesForSale/assets/webaliser-_TPTXZd9mOo-unsplash.jpg",
      "availableUnits": 6,
      "wifi": true,
      "laundry": true
    }
  ];

  constructor() { }

  getAllHousingLocations():HousingLocation[]{
    return this.housingLocationList;
  }

  getHousingLocationById(id:Number):HousingLocation | undefined{
    return this.housingLocationList.find(housingLocation=>housingLocation.id===id);
  }

  submitApplication(firstName:string, lastName:string, email:string){
    alert("Hi "+firstName+" "+lastName+", We will contact you soon!");
  }

}
