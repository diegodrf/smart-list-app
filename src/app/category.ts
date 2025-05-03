import {Item} from "./item";

export interface Category {
  id: number,
  created_at: string,
  name: string,
  items: Item[]
}
