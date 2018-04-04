export class Card {
  constructor(
    public name: string,
    public date: string,
    public title: string,
    public description: string,
    public id?: number
  ) {}
}

export interface Cards {
  cards: Card[];
}
