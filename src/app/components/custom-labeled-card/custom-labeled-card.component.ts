import {Component, Input, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {NgForOf, NgIf} from "@angular/common";
import { Link } from 'src/models/link.model';

@Component({
  selector: 'app-custom-labeled-card',
  templateUrl: './custom-labeled-card.component.html',
  styleUrls: ['./custom-labeled-card.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgIf,
    NgForOf
  ]
})
export class CustomLabeledCardComponent  implements OnInit {
@Input() label? = '';
@Input() text? = '';
@Input() links?: Link[] = [];
  constructor() { }

  ngOnInit() {}

}
