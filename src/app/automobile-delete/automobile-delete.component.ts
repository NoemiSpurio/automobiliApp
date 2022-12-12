import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Automobile } from '../automobile';
import { AutomobileService } from '../automobile.service';

@Component({
  selector: 'app-automobile-delete',
  templateUrl: './automobile-delete.component.html',
  styleUrls: ['./automobile-delete.component.css']
})
export class AutomobileDeleteComponent implements OnChanges{

  @Input() idAutomobile?: number;
  automobile?: Automobile;
  @Output() notify = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    this.automobile = this.automobileService.findById(this.idAutomobile);
  }

  delete(): void {
    this.automobileService.delete(this.idAutomobile);
    this.notify.emit(0);
  }

  constructor(private automobileService: AutomobileService) {
    
  }

}
