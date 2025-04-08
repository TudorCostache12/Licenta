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
    }, 

    {
        path : 'creare-cont',
        loadComponent : () =>
        {
            return import('./creare-cont/creare-cont.component').then((modul) =>
                modul.CreareContComponent)
        }
    }, 

    {
        path : 'logare-cont',
        loadComponent : () =>
        {
            return import('./logare-cont/logare-cont.component').then((modul) =>
                modul.LogareContComponent)
        }
    },

    {
        path : 'rezultate-evaluare-statica',
        loadComponent : () =>
        {
            return import('./rezultate-evaluare-statica/rezultate-evaluare-statica.component').then((modul) =>
                modul.RezultateEvaluareStaticaComponent)
        }
    },

    {
        path : 'rezultate-evaluare-genuflexiuni',
        loadComponent : () =>
        {
            return import('./rezultate-genuflexiuni/rezultate-genuflexiuni.component').then((modul) =>
                modul.RezultateGenuflexiuniComponent)
        }
    },

    {
        path : 'lista-teste',
        loadComponent : () =>
        {
            return import('./lista-teste/lista-teste.component').then((modul) =>
                modul.ListaTesteComponent)
        }
    }
];
