import { Component, OnInit } from '@angular/core';
import { Automobile } from '../automobile';
import { AutomobileService } from '../automobile.service';

@Component({
  selector: 'app-automobile-list',
  templateUrl: './automobile-list.component.html',
  styleUrls: ['./automobile-list.component.css']
})
export class AutomobileListComponent implements OnInit {

  listaAutomobili: Automobile[] = [];
  selectedAutomobile?: number; // il ? serve perche' puo' essere undefined
  insertNewCondition: boolean = false;
  idAutomobileToDelete: number = 0;
  idAutomobileToEdit: number = 0;
  componentToShow: number = 0;

  constructor(private automobileService: AutomobileService) {
    // non serve nulla nel corpo perche' angulare automaticamente sul run vede che sto passando qualcosa di injectable e lo fa lui
  }

  ngOnInit(): void {
    this.listaAutomobili = this.automobileService.getAllAutomobili();
  }

  selectAutomobile(idAutomobileItem: number): void {
    if (!this.selectedAutomobile || this.selectedAutomobile != idAutomobileItem){
      this.selectedAutomobile = idAutomobileItem;
      this.selectComponent(1);
    }
    else{
      this.selectedAutomobile = undefined;
      this.selectComponent(0);
    }
  }

  selectAutomobileToDelete(idAutomobileItem: number): void {
    this.idAutomobileToDelete = idAutomobileItem;
    this.selectComponent(3);
  }

  selectAutomobileEdit(idAutomobileItem: number): void {
    this.idAutomobileToEdit = idAutomobileItem;
    this.selectComponent(4);
  }

  insertNew(condition: boolean){
    this.insertNewCondition = condition;
    this.selectComponent(2);
  }

  selectComponent(input: number): void {
    this.componentToShow = input;
  }

}
