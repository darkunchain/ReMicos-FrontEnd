import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cliente } from '../interfaces/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  /* headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTBjMDY2NDcwMTc2N2U3M2JjMDRlZTgiLCJpYXQiOjE2MzQ5NTI4ODMsImV4cCI6MTYzNDk5NjA4M30.YP7lyWk94ale27o4ygD9Mr37f6XvIFhE3_8hGJqaWvo',
   'My-Custom-Header': 'foobar' };
 */
  constructor(private http: HttpClient) { }

  postClient(cliente:Cliente){
    return this.http.post<any>(
      '/api/add',
      cliente
      )
  }

  getRegistros():Observable<Cliente[]> {
    return this.http.get<Cliente[]>('/api/registros')

  }

  getRegistrosDays(days?: number): Observable<Cliente[]> {
    const opts = days != null
      ? { params: new HttpParams().set('days', String(days)) }
      : undefined;
    return this.http.get<Cliente[]>('/api/registros', opts);
  }


  getIngresos():Observable<Cliente[]> {
    return this.http.get<Cliente[]>('/api/ingresos')

  }



}
