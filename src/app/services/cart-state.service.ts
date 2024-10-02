import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { BehaviorSubject, map } from 'rxjs';
import { CartState } from '../models/cart-state.model';
import { Curso } from '../models/curso.model';

@Injectable({
  providedIn: 'root',
})
export class CartStateService {
  private _storageService = inject(StorageService);

  // BehaviorSubject para mantener el estado del carrito
  private cartState$ = new BehaviorSubject<CartState>({
    cursos: [],
    quantity: 0,
    loaded: false,
  });

  // Observable que expone el estado para su suscripción
  state$ = this.cartState$.asObservable();
  cursos$ = this.state$.pipe(map((state) => state.cursos));
  quantity$ = this.state$.pipe(map((state) => state.quantity));
  constructor() {
    // Cargar cursos desde el localStorage al inicializar el servicio
    this.loadCursos();
  }

  // Método para agregar un curso al carrito
  addCurso(newCurso: Curso): boolean {
    const currentState = this.cartState$.getValue();

    // Comprobar si el curso ya existe
    if (!currentState.cursos.some((curso) => curso.id === newCurso.id)) {
      const updatedCursos = [...currentState.cursos, newCurso];

      // Actualizar el estado del carrito
      const updatedState: CartState = {
        ...currentState,
        cursos: updatedCursos,
        quantity: currentState.quantity + 1,
      };

      // Emitir el nuevo estado
      this.cartState$.next(updatedState);

      // Guardar en localStorage
      this._storageService.saveCursos(updatedCursos);

      return true; // Se agregó correctamente
    }

    return false; // Ya existía en el carrito
  }

  // Método para eliminar un curso del carrito
  removeCurso(id: string) {
    const currentState = this.cartState$.getValue();
    const updatedCursos = currentState.cursos.filter(
      (curso) => curso.id !== id
    );

    const updatedState: CartState = {
      ...currentState,
      cursos: updatedCursos,
      quantity: currentState.quantity - 1,
    };

    this.cartState$.next(updatedState);
    this._storageService.saveCursos(updatedCursos);
  }

  // Cargar los cursos guardados en localStorage
  private loadCursos() {
    this._storageService.loadCursos().subscribe((cursos: Curso[]) => {
      const currentState = this.cartState$.getValue();

      // Emitir el estado actualizado con los cursos cargados
      this.cartState$.next({
        ...currentState,
        cursos,
        quantity: cursos.length,
        loaded: true,
      });
    });
  }
}
