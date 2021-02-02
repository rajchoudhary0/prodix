import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FeatureServiceService {

  constructor(private http:HttpClient) { }

  sendFeedBack(email,name,msg,sub){
    let headers = new HttpHeaders({
      'Content-Type':''
    });
    return this.http.post(`${environment.sendFeedback}`,{email:email,name:name,msg:msg,sub:sub});
  }
  getRandomRcd(){
    return this.http.get(`${environment.randomRecord}`);

  }
  getNxtWord(id){
    return this.http.get(`${environment.nextWord}?id=${id}`);

  }
  getPrvcWord(id){
    return this.http.get(`${environment.prvcWord}?id=${id}`);

  }
  getSearchWord(search){
    return this.http.get(`${environment.searchWord}?word=${search}`);

  }
  getAllWord(){
    return this.http.get(`${environment.selectAll}`);

  }
 
}
