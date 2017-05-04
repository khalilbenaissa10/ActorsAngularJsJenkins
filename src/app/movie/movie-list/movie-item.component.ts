import { Component, Input,OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Movie} from '../movie';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';

@Component({
  selector: 'rb-movie-item',
  templateUrl: './movie-item.component.html',
  styles: [`imagess src `]
})
export class MovieItemComponent implements OnInit {

    @Input()  movie:Movie ;

    selectedMovie : Movie ;   

    @Input() detail:MovieDetailComponent;
     

  constructor(private route : Router) { }

  ngOnInit() {
  }



  cliquer(movie : Movie){
    this.selectedMovie = movie;
    this.detail.ClickButton(this.selectedMovie);
    
  }

   editer(movie : Movie){
      this.route.navigate(['/movies',movie.id]);
    
  }

  
}
