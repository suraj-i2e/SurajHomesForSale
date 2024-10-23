import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes=[
    {
        path:'',
        component:HomeComponent,
        title:"Home Page- Suraj"
    },
    {
        path:'details/:id',
        component:DetailsComponent,
        title:"Details Page- Suraj"
    },
];

export default routeConfig;