import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Item } from '../item';
import {environment} from "../../environment/environment";
import {Category} from "../category";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private apiKey = environment.apiKey
  private baseUrl = environment.baseUrl
  constructor(private http: HttpClient) {
  }

  getItems()  {
  const options = {
      'headers': {
        "apikey": this.apiKey
      },
      'params': {'select': '*,category:categories(*)'}
    }
    return this.http.get<Item[]>(`${this.baseUrl}/items`, options)
  }

  getCategories()  {
    const options = {
      'headers': {
        "apikey": this.apiKey
      },
      'params': {'select': '*,items(*)'}
    }
    return this.http.get<Category[]>(`${this.baseUrl}/categories`, options)
  }

  updateItem(item: Item) {
    const options = {
      'headers': {
        "apikey": this.apiKey,
        'Content-Type': 'application/json',
      },
      'params': {'id':`eq.${item.id}`}
    }
    return this.http.patch<Item>(`${this.baseUrl}/items`, item, options)
  }
}
