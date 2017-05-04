import { Component, OnInit } from '@angular/core';
import {Actor} from '../actor';
import {ActorService} from '../actor.service';  

@Component({
  selector: 'rb-actor-list',
  templateUrl: './actor-list.component.html',
  styles: []
})
export class ActorListComponent implements OnInit {

actors:Actor[];
  constructor(private actorService:ActorService) { }

  ngOnInit() {
    this.actors = [];
        this.actorService.getActors()
         .subscribe(
            data => this.actors = data 
         );
  }

}
