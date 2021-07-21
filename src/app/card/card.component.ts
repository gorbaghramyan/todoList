import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Card} from './card.model'

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   @Input() card!:Card;
   @Output() deleteEmitter: EventEmitter<Card> = new EventEmitter<Card>();

   delete() {
    this.deleteEmitter.emit(this.card);    
  }
}