import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../content/profile';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="site-foot">
      <div class="wrap">
        <p class="site-foot__where">Bilbao, CET. Remote across the EU.</p>
        <nav aria-label="Contact">
          <a [href]="'mailto:' + profile.email">Email</a>
          <a [href]="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
          <a [href]="profile.github" target="_blank" rel="noopener">GitHub</a>
          <button type="button" (click)="printPage()">Print or save as PDF</button>
        </nav>
      </div>
    </footer>
  `,
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly profile = PROFILE;

  protected printPage(): void {
    window.print();
  }
}
