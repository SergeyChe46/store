import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepository } from './irepository.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductRepositoryService<IProduct, IproductAddViewModel>
  implements IRepository<IProduct, IproductAddViewModel>
{
  private URL: string = 'https://fakestoreapi.com/products';
  constructor(private httpService: HttpClient) {}

  getAll(): Observable<IProduct[]> {
    return this.httpService.get<IProduct[]>(this.URL);
  }

  getById(id: number): Observable<IProduct> {
    return this.httpService.get<IProduct>(`{this.URL}/{id}`);
  }

  create(entity: IproductAddViewModel): Observable<IProduct> {
    return this.httpService.post<IProduct>(this.URL, entity);
  }

  update(entity: IProduct): Observable<IProduct> {
    return this.httpService.put<IProduct>(`{this.URL}/{id}`, entity);
  }

  delete(id: number): Observable<IProduct> {
    return this.httpService.delete<IProduct>(`{this.URL}/{id}`);
  }
}