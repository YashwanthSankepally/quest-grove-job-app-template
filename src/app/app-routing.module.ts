import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ResumeComponent } from './resume/resume.component';
import { FaqsComponent } from './faqs/faqs.component';
import { QgEduplayComponent } from './qg-eduplay/qg-eduplay.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'job-detail', component: JobDetailComponent },
  { path: 'applied-jobs', component: AppliedJobsComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'qg-eduplay', component: QgEduplayComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
