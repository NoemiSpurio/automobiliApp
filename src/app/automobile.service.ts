import { Injectable } from '@angular/core';
import { Automobile } from './automobile';

@Injectable({
  providedIn: 'root'    // e' una specie di scope
})
export class AutomobileService {

  private LISTA_AUTOMOBILI: Automobile[] = [{ id: 1, marca: "toyota", modello: "aygo", cilindrata: 1000 },
  { id: 2, marca: "toyota", modello: "yaris", cilindrata: 1200 },
  { id: 3, marca: "toyota", modello: "prius", cilindrata: 1400 }];

  getAllAutomobili(): Automobile[] {
    return this.LISTA_AUTOMOBILI;
  }

  findById(id?: number): Automobile | undefined {
    let result = this.LISTA_AUTOMOBILI.find(a => a.id == id);
    return result;

  }

  insert(newAutomobile: Automobile): void {
    newAutomobile.id = this.cercaIdMax() + 1;
    this.LISTA_AUTOMOBILI.push(newAutomobile);
  }

  cercaIdMax(): number {
    let ids = this.LISTA_AUTOMOBILI.map(a => a.id);
    return Math.max.apply(null, ids);
  }

  delete(id?: number): void {
    let index = this.LISTA_AUTOMOBILI.findIndex(a => a.id == id);
    this.LISTA_AUTOMOBILI.splice(index, 1);
  }

  edit(automobile: Automobile): void {
    this.LISTA_AUTOMOBILI.filter(a => a.id == automobile.id).map(a => { a.marca = automobile.marca; a.modello = automobile.modello; a.cilindrata = automobile.cilindrata; });
  }

  constructor() { }
}
