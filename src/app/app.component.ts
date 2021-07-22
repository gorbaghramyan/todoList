import { Component } from '@angular/core';
import {Card} from './card/card.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  note: string = '';
  due: Date = new Date(Date.now());

  cards: [Card] = [{id: 0, name: 'First Card', note: 'Initial', due: new Date()}];

  delete(card: Card) {
    this.cards.splice(this.cards.indexOf(card), 1);
  }

  add() {
    if(this.name && this.note) {
      const id = this.cards?.length ? this.cards[this.cards.length-1].id + 1 : 0 ;
      this.cards.push({id, name: this.name, note: this.note,due: this.due});
    } else alert('All values are required');
  }

  ngOnInit() {
    console.log(this.cards);
  }
}
