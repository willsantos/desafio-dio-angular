import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BookService {
  private url =
    'https://gist.githubusercontent.com/willsantos/8f725416623455563360e57a23e8f0d9/raw/f1b5e621e1b3647e2e057147cb622a5c82239ed9/api-angular-bootcamp.json';

  constructor(private http: HttpClient) {}

  getBook() {
    return this.http.get(this.url);
  }
}
