import {Component, OnInit, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RepositoryService} from "./services/repository.service";
import { Item } from './item';
import {Category} from "./category";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [RepositoryService]
})
export class AppComponent implements OnInit  {
  categories = signal<Category[]>([])
  constructor(private repositoryService: RepositoryService) {
  }

  ngOnInit(): void {
        this.getCategories()
    }

  getCategories() {
    this.repositoryService.getCategories().subscribe({
      next: (data) => {
        this.categories.set(data)
      },
      error: (err) => {
        console.error('Error fetching items:', err);
      }
    });
  }

  toggleDone(item: Item) {
    item.done = !item.done
    this.repositoryService.updateItem(item).subscribe({
      next: (data) => {
        this.getCategories()
      },
      error: (err) => {
        console.error('Error fetching items:', err);
      }
    });
  }
}
