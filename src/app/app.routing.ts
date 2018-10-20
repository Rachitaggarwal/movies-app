import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { MovieListComponent } from "./movie-list/movie-list.component"
import { MovieDetailsComponent } from "./movie-details/movie-details.component"


export const routes: Routes = [
    { path: 'movies', component: MovieListComponent },
    { path: 'movies/:id',  component:MovieDetailsComponent },
    { path: '', redirectTo: 'movies', pathMatch: 'full' }
];
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);
