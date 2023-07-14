import { ResolveFn } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
export const yResolver: ResolveFn<boolean> = (route, state) => {
  console.log(route, state)
  return true;
};
