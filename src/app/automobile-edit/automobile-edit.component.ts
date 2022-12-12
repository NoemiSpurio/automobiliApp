import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Automobile } from '../automobile';
import { AutomobileService } from '../automobile.service';

@Component({
  selector: 'app-automobile-edit',
  templateUrl: './automobile-edit.component.html',
  styleUrls: ['./automobile-edit.component.css']
})
export class AutomobileEditComponent implements OnChanges{

  @Input() idAutomobile?: number;
  automobile: Automobile = {id:0, marca:"", modello:"", cilindrata: 0};
  automobileBind?: Automobile;
  @Output() notify = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
      this.automobileBind = this.automobileService.findById(this.idAutomobile);
      if(this.automobileBind){
        this.automobile.id = this.automobileBind.id;
        this.automobile.marca = this.automobileBind.marca;
        this.automobile.modello = this.automobileBind.modello;
        this.automobile.cilindrata = this.automobileBind.cilindrata;
      }

  }

  modifica(): void {
    if (this.automobile)
      this.automobileService.edit(this.automobile);
    this.notify.emit(0);
    
  }

  constructor(private automobileService: AutomobileService) {
    
  }
}
