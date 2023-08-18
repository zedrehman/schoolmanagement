import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AcademicYearComponent } from './admin/academic-year/academic-year.component';
import { ClassComponent } from './admin/class/class.component';
import { DepartmentComponent } from './admin/department/department.component';
import { DesignationComponent } from './admin/designation/designation.component';
import { RolerightsComponent } from './admin/rolerights/rolerights.component';
import { SectionComponent } from './admin/section/section.component';
import { StreamComponent } from './admin/stream/stream.component';
import { VehicleComponent } from './transport/vehicle/vehicle.component';
import { DriverComponent } from './transport/driver/driver.component';
import { PickupPointComponent } from './transport/pickup-point/pickup-point.component';
import { VehicleRoutesComponent } from './transport/vehicle-routes/vehicle-routes.component';
import { HeadCostComponent } from './Fees/head-cost/head-cost.component';
import { ConcessionComponent } from './Fees/concession/concession.component';
import { FeeSetupComponent } from './Fees/fee-setup/fee-setup.component';
import { FeeCollectComponent } from './Fees/fee-collect/fee-collect.component';
import { BonafideCertificateComponent } from './Certificate/bonafide-certificate/bonafide-certificate.component';
import { CourseCompletionCertificateComponent } from './Certificate/course-completion-certificate/course-completion-certificate.component';
import { TransferCertificateComponent } from './Certificate/transfer-certificate/transfer-certificate.component';
import { ParticipationCertificateComponent } from './Certificate/participation-certificate/participation-certificate.component';
import { MigrationCertificateComponent } from './Certificate/migration-certificate/migration-certificate.component';
import { CharacterCertificateComponent } from './Certificate/character-certificate/character-certificate.component';
import { BooksComponent } from './Library/books/books.component';
import { IssueBooksComponent } from './Library/issue-books/issue-books.component';
import { FinesComponent } from './Library/fines/fines.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    TopMenuComponent,
    FooterComponent,
    DashboarComponent,
    StudentComponent,
    TeacherComponent,
    AcademicYearComponent,
    ClassComponent,
    DepartmentComponent,
    DesignationComponent,
    RolerightsComponent,
    SectionComponent,
    StreamComponent,
    VehicleComponent,
    DriverComponent,
    PickupPointComponent,
    VehicleRoutesComponent,
    HeadCostComponent,
    ConcessionComponent,
    FeeSetupComponent,
    FeeCollectComponent,
    BonafideCertificateComponent,
    CourseCompletionCertificateComponent,
    TransferCertificateComponent,
    ParticipationCertificateComponent,
    MigrationCertificateComponent,
    CharacterCertificateComponent,
    BooksComponent,
    IssueBooksComponent,
    FinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
