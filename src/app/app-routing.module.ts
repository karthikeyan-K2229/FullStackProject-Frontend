import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { BookingComponent } from './booking/booking.component';
import { DisplayUserComponent } from './display-user/display-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { RegistrationsuccessComponent } from './registrationsuccess/registrationsuccess.component';

import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EditThemeComponent } from './edit-theme/edit-theme.component';
import { AddthemeComponent } from './Addtheme/Addtheme.component';
import { AdminAddonComponent } from './admin-add-on/admin-add-on.component';
import { AdminfoodComponent } from './adminfood/adminfood.component';
import { UpdatefoodComponent } from './updatefood/updatefood.component';
import { UpdatethemeComponent } from './updatetheme/updatetheme.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'login', component: LoginComponent },
  {path: 'registration', component: RegisterpageComponent },
  {path: 'registrationsuccess', component: RegistrationsuccessComponent },
  {path: 'userhomepage', component: HomepageComponent , canActivate:[AuthguardGuard]},
  {path: 'viewbooking', component: ViewbookingComponent , canActivate:[AuthguardGuard]},
  {path: 'displayuer',component:DisplayUserComponent,canActivate:[AuthguardGuard]},
  {path:'bookevent/:themeid',component:BookingComponent,canActivate:[AuthguardGuard]},
  {path: 'editEvent/:eventId', component: EditThemeComponent, canActivate:[AuthguardGuard] },
  {path:'addtheme',component:AddthemeComponent,canActivate:[AuthguardGuard]},
  {path:'addonrouter',component:AdminAddonComponent},
  {path:'adminfood',component:AdminfoodComponent},
  {path:'updatefood/:id',component:UpdatefoodComponent},
  {path:'updatetheme/:themeid',component:UpdatethemeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
