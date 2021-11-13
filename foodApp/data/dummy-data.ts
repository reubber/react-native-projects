export interface Category {
  id?: number;
  title?: string;
  color?: string;
}

class CategoryClass {
  title: string | undefined;
  id: number | undefined;
  color: string | undefined;
  
  constructor(public props: Category) {
    this.title = props.title
    this.id = props.id
    this.color = props.color
  }
}

export const CATEGORIES = [
  new CategoryClass({ id: 1, title: 'Italian', color: '#f5428d' }),
  new CategoryClass({ id: 2, title: 'Rapido & facil', color: '#f54242' }),
  new CategoryClass({ id: 3, title: 'Hamburgers', color: '#f5a442' }),
  new CategoryClass({ id: 4, title: 'Alemã', color: '#f5d142' }),
  new CategoryClass({ id: 5, title: 'Leve & Adoravel', color: '#368dff' }),
  new CategoryClass({ id: 6, title: 'Exotico', color: '#41d95d' }),
  new CategoryClass({ id: 7, title: 'Cafe da manha', color: '#9eecff' }),
  new CategoryClass({ id: 8, title: 'Asiatica', color: '#b9ffb0' }),
  new CategoryClass({ id: 9, title: 'Francesa', color: '#ffc7ff' }),
  new CategoryClass({ id: 10, title: 'Summer', color: '#47fcef' }),
];