import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ClubService {
  baseUrl: string = "http://localhost:3000/club/detail/"
  constructor(private http: Http) { }

  getClubDetails(id){
     // console.log(this.baseUrl+id);
    return this.http.get(this.baseUrl + id);    
  } 

  addAnnouncements(data){
 
    console.log(data);
       return this.http.post('http://localhost:3000/club/detail/announcement', data); 
  }

  addEvent(data){
    console.log('add event service ma jane data');
      console.log(this.baseUrl);
      console.log(data);
      return this.http.post('http://localhost:3000/club/detail/event', data);    
  } 

  getMemberDetails(id){
     // console.log(this.baseUrl+id);
     
    return this.http.get('http://localhost:3000/club/detail/member/' + id);    
  }

  getLocationByUserId(id){
    console.log("i am here!!!!!!!!!" + id);
    return this.http.get('http://localhost:3000/club/detail/location/' + id);
  }

  

}
