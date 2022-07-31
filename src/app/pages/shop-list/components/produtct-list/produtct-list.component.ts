import { Component, OnInit } from '@angular/core';
import { BookService } from '../../shop-list.component.service';

@Component({
  selector: 'app-produtct-list',
  templateUrl: './produtct-list.component.html',
  styleUrls: ['./produtct-list.component.css'],
})
export class ProdutctListComponent implements OnInit {
  books: any;
  bookService: BookService;

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  ngOnInit(): void {

      this.books = this.bookService.getBook().subscribe((data) => {
        this.books = data;
        console.log(this.books);
      });


  }
}
