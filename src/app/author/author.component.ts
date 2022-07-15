import { Component, OnInit } from '@angular/core';
import {Author, HttpClientService} from "../service/http-client.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors!: Author[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit(): void {
    this.httpClientService.getAuthors().subscribe(
      response => this.handleSuccessFullResponse(response)
    );
  }

  handleSuccessFullResponse(response: Author[]): void {
    this.authors = response;
  }

}
