import { Routes } from '@angular/router';
import { Pokemon } from './@pages/pokemon/pokemon';
import { Landing } from './@pages/landing/landing';

export const routes: Routes = [
    {path: "" , component: Landing},
    {path : 'pokemon', component: Pokemon}
];
