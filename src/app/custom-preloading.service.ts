
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, flatMap, of, timer } from 'rxjs';


export class CustomPreloadingService implements PreloadingStrategy{
   preload(route: Route, load:Function): Observable<any> {
    const loadRoute = (delay:any) => delay
    ? timer(1000000000000).pipe(flatMap(_ => load()))
    : load();
    const makeRoute= setTimeout(()=>'heelo',9999999999)
    return route.data && route.data['preload'] ? loadRoute(route.data['delay']): makeRoute
    //  of(null);
   }
}

