import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TetServicesService {



  constructor(private httpClient: HttpClient) { }
  GETALL(): Observable<Event[]> {
    // envoyer une requete htpp en mode GET vers JSON SERVER  
    return this.httpClient.get<Event[]>
      ('localhost:3000/event');
  }


}
