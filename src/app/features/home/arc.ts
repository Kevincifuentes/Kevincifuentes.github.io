import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ARC } from '../../../content/profile';

@Component({
  selector: 'app-arc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="arc" id="arc" aria-labelledby="arc-title">
      <div class="wrap">
        <header class="section-head">
          <h2 id="arc-title">The arc</h2>
          <p>2017 to now</p>
        </header>
        <ol class="arc__list">
          @for (entry of arc; track entry.year + entry.title) {
            <li class="arc__item">
              <span class="arc__year">{{ entry.year }}</span>
              <span class="arc__title">{{ entry.title }}</span>
              <span class="arc__org">{{ entry.org }}</span>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styleUrl: './arc.css',
})
export class Arc {
  protected readonly arc = ARC;
}
