import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        pathMatch : 'full', 
        loadComponent : () =>
        {
            return import('./evaluare-statica/evaluare-statica.component').then((modul) =>
                modul.EvaluareStaticaComponent)
        }
    },

    {
        path : 'exercitiu-live',
        loadComponent : () =>
        {
            return import('./exercitiu-live/exercitiu-live.component').then((modul) =>
                modul.ExercitiuLiveComponent)
        }
    }
];
