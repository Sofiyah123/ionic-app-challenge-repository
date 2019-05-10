import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(private http: HttpClient) { }
  getLocalData() {
    return this.http.get("/assets/data/dailyquotes.json");
  }
  getRemoteData(){
    return this.http.get("http://www.reddit.com/r/gifs/.json?limit");
  }
}
