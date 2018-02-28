import { Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

export const routes: Routes = [
    { path: 'userlist', component: UserListComponent },
    { path: 'newuser', component: NewUserComponent },
    { path: '**', redirectTo: 'userlist' }
];
