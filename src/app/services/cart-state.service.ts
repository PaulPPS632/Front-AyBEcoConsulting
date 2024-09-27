import { inject, Injectable, Signal } from '@angular/core';
import { StorageService } from './storage.service';
import { map, Observable, Subject } from 'rxjs';
import { CartState } from '../models/cart-state.model';
import { Curso } from '../models/curso.model';
import { signalSlice } from 'ngxtension/signal-slice';
import { CursosItemCart } from '../models/cursos-item-cart.model';
@Injectable({
  providedIn: 'root',
})
export class CartStateService {
  private _storageService = inject(StorageService);

  private initialState: CartState = {
    cursos: [],
    quantity: 0,
    loaded: false,
  };

  loadCursos$ = this._storageService
    .loadCursos()
    .pipe(map((Cursos) => ({ Cursos, loaded: true })));

  state = signalSlice({
    initialState: this.initialState,
    sources: [this.loadCursos$],
    selectors: (state) => ({
      count: () => state().quantity,
      price: () => {
        return state().cursos.reduce((acc, Curso) => acc + Curso.precio, 0);
      },
    }),
    actionSources: {
      add: (state, action$: Observable<Curso>) =>
        action$.pipe(map((Curso) => this.add(state, Curso))),
      remove: (state, action$: Observable<string>) =>
        action$.pipe(map((id) => this.remove(state, id))),
    },
    effects: (state) => ({
      load: () => {
        if (state().loaded) {
          this._storageService.saveCursos(state().cursos);
        }
      },
    }),
  });

  private add(state: Signal<CartState>, NewCurso: Curso) {
    const currentState = state();

    if (!currentState.cursos.some((curso) => curso.id === NewCurso.id)) {
      // Comparación por un identificador único
      return {
        ...currentState, // Mantenemos el resto del estado
        cursos: [...currentState.cursos, { ...NewCurso }],
        quantity: currentState.quantity + 1, // Actualizamos la cantidad aquí
      };
    }
    return currentState;
  }

  private remove(state: Signal<CartState>, id: string) {
    return {
      cursos: state().cursos.filter((cursos) => cursos.id !== id),
    };
  }
}
