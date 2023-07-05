import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from './news-page/news-page.component';
import { LinksPageComponent } from './links-page/links-page.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { IntroducePageComponent } from './introduce-page/introduce-page.component';

const routes: Routes = [
    { path: "", component: HomePageComponent },
    { path: "introduce", component: IntroducePageComponent },
    { path: "links", component: LinksPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
