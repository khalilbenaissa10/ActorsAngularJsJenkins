import {Movie} from '../movie/movie';
    
    export class Actor {
    constructor(public id:number, public name:string, public imagePath:string,public birth_year:string,public movies : Movie[]){}
}
