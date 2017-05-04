import { Component } from '@angular/core';
import {MovieService} from '../app/movie/movie.service';
import {ActorService} from '../app/actor/actor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MovieService,ActorService]
})
export class AppComponent {
  title = 'app works!';
}
