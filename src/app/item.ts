import {Category} from "./category";

export interface Item {
  id: number,
  created_at: string,
  name: string,
  done: boolean,
  category_id: number,
  category: Category
}
