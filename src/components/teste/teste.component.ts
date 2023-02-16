import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent {

  name = 'Grêmio'
  count = 0

  updateCount(){
    this.count +=1;
  }

  cleanCount(){
    this.count = 0;
  }




  disabled = false

  imgSourcee = 'https://www.soccerbible.com/media/19572/umbro-x-gremio-20-3.jpg'

}
