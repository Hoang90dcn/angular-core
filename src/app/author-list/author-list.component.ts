import { Component, OnInit } from '@angular/core';
import { authors, Author } from '../authors.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  constructor() {}

  ngOnInit() {}

  onDeleteAuthor(deletedAuthor: Author) {
    this.authors = this.authors.filter((author) => {
      return author.id !== deletedAuthor.id;
    });
  }
}
