import { CanActivateFn } from '@angular/router';

export const panelGuard: CanActivateFn = (route, state) => {
  return true;
};
