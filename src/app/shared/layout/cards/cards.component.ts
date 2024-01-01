import {Component, Input} from '@angular/core';

interface Card {
  title: string;
  text: string;
  link: string;
}

interface CardsContent {
  header: string;
  paragraph: string;
  card: Card[];
}

interface ComponentContent {
  header: string;
  paragraph: string;
  cardsContent: CardsContent;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})




export class CardsComponent {



  @Input() cardsContent: ComponentContent = {
    header: '',
    paragraph: '',
    cardsContent: {
      header: '',
      paragraph: '',
      card: []
    }
  };

}
