import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "saved-card",
    pathMatch: "full",
  },
  {
    path: 'save-card',
    loadChildren: () =>
      import('./save-card/save-card.module').then((m) => m.SaveCardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
