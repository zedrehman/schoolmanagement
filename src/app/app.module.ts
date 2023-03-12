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
import { StudentDetailsComponent } from './student/student-details/student-details.component';


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
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
