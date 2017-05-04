import { Component, Input,OnInit } from '@angular/core';

import {Actor} from '../actor';
@Component({
  selector: 'rb-actor-item',
  templateUrl: './actor-item.component.html',
  styles: []
})
export class ActorItemComponent implements OnInit {

  @Input()  actor:Actor ;

  constructor() { }

  ngOnInit() {
  }

}
