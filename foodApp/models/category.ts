export interface Category {
  id?: string;
  title?: string;
  color?: string;
}

export class CategoryClass {
  title: string | undefined;
  id: string | undefined;
  color: string | undefined;
  
  constructor(public props: Category) {
    this.title = props.title
    this.id = props.id
    this.color = props.color
  }
}