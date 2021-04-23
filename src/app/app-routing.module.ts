import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TipsCssA00001Component } from './examples/tips-css-a00001/tips-css-a00001.component'

import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'

const routes: Routes = [
    { path: 'TipsCssA00001', component: TipsCssA00001Component },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
