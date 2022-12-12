import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Automobile } from '../automobile';
import { Output, EventEmitter } from '@angular/core';
import { AutomobileService } from '../automobile.service';

@Component({
  selector: 'app-automobile-detail',
  templateUrl: './automobile-detail.component.html',
  styleUrls: ['./automobile-detail.component.css']
})

export class AutomobileDetailComponent implements OnChanges {

  @Input() idAutomobile?: number;
  automobile?: Automobile;
  @Output() notify = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    this.automobile = this.automobileService.findById(this.idAutomobile);
  }

  deselectAutomobile(): void {
    this.notify.emit(this.idAutomobile);
  }

  constructor(private automobileService: AutomobileService){

  }
}
