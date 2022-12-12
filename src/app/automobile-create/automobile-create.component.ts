import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Automobile } from '../automobile';
import { AutomobileService } from '../automobile.service';

@Component({
  selector: 'app-automobile-create',
  templateUrl: './automobile-create.component.html',
  styleUrls: ['./automobile-create.component.css']
})
export class AutomobileCreateComponent implements OnChanges {

  @Input() condition?: boolean;
  @Output() notify = new EventEmitter<boolean>();

  automobile: Automobile = {id: 0, marca: "", modello: "", cilindrata: 0};

  inserisciNuovo(): void {
    this.automobileService.insert(this.automobile);
    this.condition = false;
    this.automobile = {id: 0, marca: "", modello: "", cilindrata: 0};
    this.notify.emit(this.condition);
  }

  nascondi(): void {
    this.condition = false;
    this.notify.emit(this.condition);
  }

  constructor(private automobileService: AutomobileService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.condition = true;
  }
}
