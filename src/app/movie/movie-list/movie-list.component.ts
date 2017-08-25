import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

import {Movie} from '../movie';
import {MovieService} from '../movie.service';  

@Component({
  selector: 'rb-movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {

model = {id:1,title:"premier film",imagePath:"aaa" ,year:"2015",actors:[]};

arrayOfStrings = ['this', 'is', 'list', 'of', 'string', 'element'];

  valueChanged(newVal) {
   console.log(this.movies);
  }

movies:Movie[];

  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movies = [];
        this.movieService.getMovies()
         .subscribe(
            data => {this.movies = data ;
                  }
         );
        

         
        
  }
    ngAfterViewInit() {
    this.movies = [];
        this.movieService.getMovies()
         .subscribe(
            data => {this.movies = data ;
                  }
         );
        

         
        
  }





  public doSomething() {
        location.reload();
    }

}
