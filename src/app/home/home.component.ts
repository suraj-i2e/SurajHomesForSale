import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by City" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)" >Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let x of filteredLocationList" [housingLocation]="x"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
 housingLocationList: HousingLocation[]=[];
 housingService:HousingService= inject(HousingService);
 filteredLocationList:HousingLocation[]=[];

 // if using external api
//  constructor(){
//   this.housingService.getAllHousingLocations().then((housingLocationList:HousingLocation[])=>{
//     this.housingLocationList= housingLocationList;
//     this.filteredLocationList=housingLocationList;
//   })
//  }

constructor(){
  this.housingLocationList=this.housingService.getAllHousingLocations();
  this.filteredLocationList=this.housingService.getAllHousingLocations();
}

 filterResults(text:string){
    if(!text) this.filteredLocationList= this.housingLocationList;

    this.filteredLocationList= this.housingLocationList.filter(
      housingLocation=>housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
 }

}
