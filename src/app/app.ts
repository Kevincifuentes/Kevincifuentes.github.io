import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SeoService } from './core/seo/seo.service';
import { Footer } from './layout/footer';
import { PROFILE } from '../content/profile';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RouterLink, Footer],
  template: `
    <a class="skip" href="#main">Skip to content</a>

    <div class="print-head">
      <p class="print-head__name">{{ profile.name }}</p>
      <p class="print-head__contact">
        Bilbao, Spain · {{ profile.email }} · linkedin.com/in/kevin-cifuentes-salas ·
        github.com/Kevincifuentes
      </p>
    </div>

    <header class="site-head">
      <div class="wrap">
        <a class="brand" routerLink="/">{{ profile.name }}</a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#arc">Arc</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </header>

    <main id="main">
      <router-outlet />
    </main>

    <app-footer />
  `,
  styleUrl: './app.css',
})
export class App {
  protected readonly profile = PROFILE;
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.apply();
  }
}
