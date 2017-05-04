import {Routes} from '@angular/router';

import {MovieListComponent} from './movie-list/movie-list.component';
import {MovieAddComponent} from './movie-add/movie-add.component';
import {MovieUpdateComponent} from './movie-update/movie-update.component';



export const MOVIE_ROUTES :Routes =[
    {path: '',component:MovieListComponent},
    {path: 'add-movie',component:MovieAddComponent},
    {path: ':id',component:MovieUpdateComponent}
];