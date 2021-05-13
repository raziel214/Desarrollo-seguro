import { Component } from '@angular/core';

@Component({
selector: 'app-footer',
templateUrl: './footer.component.html',
styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public autor1: any = {nombre:'John Fredy', apellido: 'Quimbaya Orozco'};
  public autor2: any = {nombre:'Julian', apellido: 'Coronado Grisales'};
}
