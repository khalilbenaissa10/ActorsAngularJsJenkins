import { Component, OnInit ,EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';



import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styles: [`.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
}
.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}`]
})


export class MovieAddComponent {

   years = ['2017', '2016', '2015', '2014','2013','2012','2011','2010','2009','2008','2007','2006','2005'];

  public options = {
     timeOut: 3000,
      position: ["top", "right"],
       showProgressBar: true,
       pauseOnHover: false,
      clickToClose: false,
      maxLength: 100
}

  constructor(private movieService:MovieService,
               private router:Router,
               private _notificationsService: NotificationsService ){}

   model = new Movie( 5,
                     'Manchester by the sea',
                     'http://t3.gstatic.com/images?q=tbn:ANd9GcS5-FlTo1iYdLeCeTN09lbE6seUjxO1jksMN8y5dpz3vJdRgFig',
                     '2017',
                      []);

  submitted = false;


  onSubmit() {        
    


                 this._notificationsService.success(
                    'Film ajouté avec succés',
                    this.model.title ,
                     this.options);   
                  
                  this.submitted = true;
                  this.movieService.addMovie(this.model).then(model =>{  
                   setTimeout(() => {
                      this.router.navigate(['/movies']);
                    }, 3000) ;   
                      }); 
          
  }
 

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
