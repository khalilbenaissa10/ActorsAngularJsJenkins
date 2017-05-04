import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {MoviesComponent} from './movie/movies.component';
import {MOVIE_ROUTES} from './movie/movies.routes';


const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies',  component: MoviesComponent,children:MOVIE_ROUTES }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}