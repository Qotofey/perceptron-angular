import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ISet } from './sets.model';

@Injectable({
  providedIn: 'root'
})
export class SetsService {

  constructor() { }

  public getSets(): Observable<ISet[]> {
    const getSetsFromApi = new Promise<ISet[]>(resolve => {
      resolve([{
        name: 'Текст вопроса?',
        description: 'Secondary line text Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
      }, {
        name: 'Three-line item',
        description: 'Secondary line text Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
      }, {
        name: 'Three-line item',
        description: 'Secondary line text Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit'
      }]);
    });

    return from(getSetsFromApi);
  }

}
