import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, catchError, Observable } from 'rxjs';
import { IProduct } from 'src/models/product.model';

import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCTS, GET_PRODUCTS_LISTING, GET_PRODUCT_DETAILS, IMAGE_UPLOAD, UPDATE_PRODUCT } from '../endpoints';

@Injectable({ providedIn: 'root' })

export class ProductService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getTopProducts = (category:any, type:any, numberOfRecords:any) => {
    const res = this.http.get<IProduct[]>(`${GET_PRODUCTS_LISTING}?category=${category}&type=${type}&numberOfRecords=${numberOfRecords}`)
      .pipe(catchError(this.handleError))
    return res;
  }

  productImageUpload = (data) => {
    const res = this.http.post(IMAGE_UPLOAD, data);
    return res;
  }

  addProduct = (data) => {
    const response = this.http.post<IProduct>(ADD_PRODUCT, data).pipe(catchError(this.handleError))
    return response;
  }

  getAllProducts = () => {
    const res = this.http.get<IProduct[]>(GET_PRODUCTS).pipe(catchError(this.handleError))
    return res;
  }

  getProductsListing = (category, type, numberOfRecords) => {
    const res = this.http.get<IProduct[]>(`${GET_PRODUCTS_LISTING}?category=${category}&type=${type}&numberOfRecords=${numberOfRecords}`).pipe(catchError(this.handleError))
    return res;
  }

  getProductDetails = (article_no) => {
    const res = this.http.get<IProduct[]>(`${GET_PRODUCT_DETAILS}/${article_no}`).pipe(catchError(this.handleError));
    return res;
  }

  deleteProduct = (id) => {
    const res = this.http.delete<IProduct>(DELETE_PRODUCT+'/'+id).pipe(catchError(this.handleError));
    return res;
  }

  updateProduct = (data) => {
    const res = this.http.put<IProduct>(UPDATE_PRODUCT+'/'+data.id, data).pipe(catchError(this.handleError));
    return res;
  }
}