import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './modal/employee';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
addEmpURL = 'https://crudcrud.com/api/80e86e32718d415db18e1786359e65c8/students';
  getEmpURL = 'https://crudcrud.com/api/80e86e32718d415db18e1786359e65c8/students';
updateEmpUrl = 'https://crudcrud.com/api/80e86e32718d415db18e1786359e65c8/students';
deleteEmpUrl = 'https://crudcrud.com/api/80e86e32718d415db18e1786359e65c8/students';

  constructor(private http : HttpClient) {

   

   }

   addEmployee(emp : Employee): Observable<Employee> {
     return this.http.post<Employee>(this.addEmpURL,emp);
   }

   getAllEmployee(): Observable<Employee[]>{
     return this.http.get<Employee[]>(this.getEmpURL);
   }

   updateEmployee(_id:string,emp :Employee) : Observable<Employee>{
     return this.http.put<Employee>(this.updateEmpUrl,_id);
   }

   deleteEmployee(_id:string,emp : Employee) : Observable<Employee> {
     return this.http.delete<Employee>(this.deleteEmpUrl+'/'+_id);
   }
  
}
