import {Component,Input,OnInit} from "@angular/core";
import { ActivatedRoute, Params ,Router}   from '@angular/router';
import { Location }   from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

import {Movie} from '../movie';
import {Actor} from '../../actor/actor';
import {MovieService}  from '../movie.service';
import {ActorService}  from '../../actor/actor.service';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.component.html',
  styles: [`.khalil li {
              display:inline ;margin-right:5px ;
  }`]
})
export class MovieUpdateComponent implements OnInit {

@Input()
  private movie :Movie;

  private allActors:Actor[];
  private firstIf : Boolean = false ;
  private secondIf : Boolean = false ;
   private  j =-1;

     years = ['2017', '2016', '2015', '2014','2013','2012','2011','2010','2009','2008','2007','2006','2005'];

  public options = {
     timeOut: 3000,
      position: ["top", "right"],
       showProgressBar: true,
       pauseOnHover: false,
      clickToClose: false,
      maxLength: 100
}

  constructor(private movieService : MovieService,
      private activatedRoute : ActivatedRoute,
      private router : Router,
      private location:Location,
      private _notificationsService: NotificationsService,
      private actorService:ActorService) { }

  ngOnInit() {
    this.movie = new Movie( 5,
                     'aaaa',
                     'bbbb',
                     '2017',
                      []);
     this.activatedRoute.params.switchMap((params:Params) => this.movieService.getMovie(+params['id']))
      .subscribe(movie => {this.movie = movie;
                          if (this.movie.actors.length !=0)
                           { this.firstIf =true ;}
    });
      
         this.allActors = [];
        this.actorService.getActors()
         .subscribe(data =>{
             this.allActors = data ;
            
            
         });

        
      
  }


  onSubmit() {        

               this._notificationsService.success(
                    'Film modifié avec succés',
                    this.movie.title ,
                     this.options);
               this.movieService.update(this.movie).then(movie =>{       
                  setTimeout(() => { 
               this.router.navigate(['/movies']);
                }, 3000) ;   
                          });              
  }


  deleteActor(actor:Actor){
console.log(actor);
this.movieService.deleteActorFromMovie(actor.id,this.movie.id).then(()=> {
            
             location.reload();
             
            }) ;
  }

  addActor(actor){
   
    for (var i = 0; i < this.movie.actors.length; i++) {
           if((this.movie.actors[i].name).toString() == (actor.name).toString() ){
               console.log("hello") ; 
               this.j = i;
               
               
           }
           if(this.j != -1){
              console.log(this.j);
           }
          
    } 
    //this.movieService.addActorToMovie(this.movie.id,actor).then(()=> {
    
          //   location.reload();
             
         //   }) ;
  }

}
