import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  private api = "http://localhost:8080/api/itens";

  constructor(private http: HttpClient) {}

  listar(): Observable<Item[]> {
    return this.http.get<Item[]>(this.api);
  }

  salvar(item:Item ): Observable<Item> {
    return this.http.post<Item>(this.api, item);
  }
}
