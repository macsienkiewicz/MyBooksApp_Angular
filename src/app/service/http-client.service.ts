import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Author {
  constructor(
    public name: string,
    public surname: string,
    public nationality: string,
    public yearOfBirth: number,
    public yearOfDeath: number,
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAuthors() {
    console.log("test call");
    return this.httpClient.get<Author[]>('http://localhost:8080/authors');
  }

  public createAuthor(author: Author) {
    return this.httpClient.post<Author>('http://localhost:8080/authors', author);
  }
}
