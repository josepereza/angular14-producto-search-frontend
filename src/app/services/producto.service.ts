import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
nombre=new Subject()
  constructor(private http:HttpClient) { }
getProduct(id:number):Observable<Producto>{
  return this.http.get<Producto>(`http://localhost:3001/api/productos/${id}`)
}
getProducts():Observable<Producto[]>{
  return this.http.get<Producto[]>('http://localhost:3001/api/productos')

}
saveProduct(product:Producto):Observable<void>{
  return this.http.post<void>('http://localhost:3001/api/productos',product)

}
updateProduct(id:number,product:Producto):Observable<void>{
  return this.http.put<void>(`http://localhost:3001/api/productos/${id}`,product)
}
deleteProduct(id:number):Observable<void>{
  return this.http.delete<void>(`http://localhost:3001/api/productos/${id}`)
}
}
