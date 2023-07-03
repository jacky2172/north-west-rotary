import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from './news-page/news-page.component';
import { LinksPageComponent } from './links-page/links-page.component';

const routes: Routes = [
    { path: "", component: LinksPageComponent },
    { path: "links", component: LinksPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
