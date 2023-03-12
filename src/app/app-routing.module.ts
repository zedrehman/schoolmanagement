import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicYearComponent } from './admin/academic-year/academic-year.component';
import { ClassComponent } from './admin/class/class.component';
import { DepartmentComponent } from './admin/department/department.component';
import { DesignationComponent } from './admin/designation/designation.component';
import { RolerightsComponent } from './admin/rolerights/rolerights.component';
import { SectionComponent } from './admin/section/section.component';
import { StreamComponent } from './admin/stream/stream.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DriverComponent } from './transport/driver/driver.component';
import { PickupPointComponent } from './transport/pickup-point/pickup-point.component';
import { VehicleRoutesComponent } from './transport/vehicle-routes/vehicle-routes.component';
import { VehicleComponent } from './transport/vehicle/vehicle.component';

const routes: Routes = [
  { path: '', component: DashboarComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'rolesetup', component: RolerightsComponent },
  { path: 'class', component: ClassComponent },
  { path: 'section', component: SectionComponent },
  { path: 'stream', component: StreamComponent},
  { path: 'academic', component: AcademicYearComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'designation', component: DesignationComponent },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'driver', component: DriverComponent },
  { path: 'pickuppoints', component: PickupPointComponent },
  { path: 'vehicleroutes', component: VehicleRoutesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
