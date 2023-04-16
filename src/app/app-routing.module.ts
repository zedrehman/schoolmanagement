import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicYearComponent } from './admin/academic-year/academic-year.component';
import { ClassComponent } from './admin/class/class.component';
import { DepartmentComponent } from './admin/department/department.component';
import { DesignationComponent } from './admin/designation/designation.component';
import { RolerightsComponent } from './admin/rolerights/rolerights.component';
import { SectionComponent } from './admin/section/section.component';
import { StreamComponent } from './admin/stream/stream.component';
import { BonafideCertificateComponent } from './Certificate/bonafide-certificate/bonafide-certificate.component';
import { CharacterCertificateComponent } from './Certificate/character-certificate/character-certificate.component';
import { CourseCompletionCertificateComponent } from './Certificate/course-completion-certificate/course-completion-certificate.component';
import { MigrationCertificateComponent } from './Certificate/migration-certificate/migration-certificate.component';
import { ParticipationCertificateComponent } from './Certificate/participation-certificate/participation-certificate.component';
import { TransferCertificateComponent } from './Certificate/transfer-certificate/transfer-certificate.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { ConcessionComponent } from './Fees/concession/concession.component';
import { FeeCollectComponent } from './Fees/fee-collect/fee-collect.component';
import { FeeSetupComponent } from './Fees/fee-setup/fee-setup.component';
import { HeadCostComponent } from './Fees/head-cost/head-cost.component';
import { BooksComponent } from './Library/books/books.component';
import { FinesComponent } from './Library/fines/fines.component';
import { IssueBooksComponent } from './Library/issue-books/issue-books.component';
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
  { path: 'vehicleroutes', component: VehicleRoutesComponent },
  { path: 'fees/headcost', component: HeadCostComponent },
  { path: 'fees/feesetup', component: FeeSetupComponent },
  { path: 'fees/concession', component: ConcessionComponent },
  { path: 'fees/collect', component: FeeCollectComponent },
  { path: 'certificate/bonafide', component: BonafideCertificateComponent },
  { path: 'certificate/course', component: CourseCompletionCertificateComponent },
  { path: 'certificate/transfer', component: TransferCertificateComponent },
  { path: 'certificate/participation', component: ParticipationCertificateComponent },
  { path: 'certificate/migration', component: MigrationCertificateComponent },
  { path: 'certificate/character', component: CharacterCertificateComponent },
  { path: 'library/books', component: BooksComponent },
  { path: 'library/issue-book', component: IssueBooksComponent },
  { path: 'library/fines', component: FinesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
