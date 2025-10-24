import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'formularios',
        loadChildren:() => import('./formularios/formularios.routes').then(m=>m.default),
    },

];
