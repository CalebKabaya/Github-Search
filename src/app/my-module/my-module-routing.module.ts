import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUserComponent } from '../search-user/search-user.component';
import { UserReposComponent } from '../user-repos/user-repos.component';

const routes: Routes = [
  { path: 'userprofile', component: SearchUserComponent},
  { path: 'userrepos', component: UserReposComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }
