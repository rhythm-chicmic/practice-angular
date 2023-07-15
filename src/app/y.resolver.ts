import { ResolveFn } from '@angular/router';
export const yResolver: ResolveFn<boolean> = (route, state) => {
  console.log(route, state)
  return true;
};
