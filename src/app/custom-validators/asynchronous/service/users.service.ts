import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private readonly _httpClient: HttpClient) {}

  getUsers(): Observable<{ name: string }[]> { // Tipando apenas o vai ser utilizando para o meio de aprendizagem para fins de didáticos.
    return this._httpClient.get<{ name: string }[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
