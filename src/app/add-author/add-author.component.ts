import { Component, OnInit } from '@angular/core';
import { HttpClientService, Author } from "../service/http-client.service";

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newAuthor: Author = new Author("", "", "", Number(""), Number(""));

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
  }

  createAuthor(): void {
    this.httpClientService.createAuthor(this.newAuthor)
      .subscribe(data => {
        alert("Author added successfully!")
      });
  }

}
