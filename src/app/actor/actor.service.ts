import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ActorService {

  endpoint_url:string = "https://blooming-reef-37299.herokuapp.com/actors";
    private headers = new Headers({'Content-Type': 'application/json'});

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  constructor(private http:Http) { }


    getActors(){
       return this.http.get(this.endpoint_url).map(res => res.json());
    }

  
}
