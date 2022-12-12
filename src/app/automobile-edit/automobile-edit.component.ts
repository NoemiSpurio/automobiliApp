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
  automobile?: Automobile;
  @Output() notify = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
      this.automobile = this.automobileService.findById(this.idAutomobile);
  }

  modifica(): void {
    if (this.automobile)
      this.automobileService.edit(this.automobile);
    this.notify.emit(0);
    
  }

  constructor(private automobileService: AutomobileService) {
    
  }
}
