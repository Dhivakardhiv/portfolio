import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { WorkComponent } from './work/work.component';
import { SkillComponent } from './skill/skill.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AgeComponent } from './age/age.component';
import { TemlateComponent } from './temlate/temlate.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [

{path:'about',component:AboutComponent},
{path:'',component:HomeComponent},
{path:'nav',component:NavComponent},
{path:'work',component:WorkComponent},
{path:'skill',component:SkillComponent},
{path:'contact',component:ContactComponent},
{path:'education',component:EducationComponent},
{path:'cal',component:CalculatorComponent},
{path:'age',component:AgeComponent},
{path:'temlate',component:TemlateComponent},
{path:'reg',component:RegComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
