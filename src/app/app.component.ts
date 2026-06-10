import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, SkillsComponent,
    ProjectsComponent, ExperienceComponent, ContactComponent, FooterComponent
  ],
  template: `
    <div class="grid-bg"></div>
    <div class="orb orb--cyan"></div>
    <div class="orb orb--purple"></div>
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
