import {Component, input, output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Item} from "../../item";

@Component({
  selector: 'app-item',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  item = input.required<Item>()
  onToggleDone = output<boolean>()
  onEdited = output<Item>()
  editMode = signal(false)

  toggleDone() {
    this.onToggleDone.emit(!this.item().done)
  }

  toggleEditMode() {
    if(this.editMode()) {
      this.onEdited.emit(this.item())
    }
    this.editMode.set(!this.editMode())
  }
}
