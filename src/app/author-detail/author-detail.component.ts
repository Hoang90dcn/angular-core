import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../authors.model';
@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css'],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author;
  @Output() selectAuthor = new EventEmitter<Author>();
  constructor() {}

  ngOnInit() {}

  deleteAuthor() {
    console.log('okkkk');
    this.selectAuthor.emit(this.author);
  }
}
