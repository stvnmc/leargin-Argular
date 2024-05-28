import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyboardListComponent } from './pages/keyboard-list/keyboard-list.component';
import { MouseListComponent } from './pages/mouse-list/mouse-list.component';

const routes: Routes = [
  { path: '', component: KeyboardListComponent },
  { path: 'perfil', component: MouseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
