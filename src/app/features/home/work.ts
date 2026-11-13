import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WORK } from '../../../content/profile';
import { Diagram } from './diagram';

@Component({
  selector: 'app-work',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Diagram],
  template: `
    <section class="work" id="work" aria-labelledby="work-title">
      <div class="wrap">
        <header class="section-head">
          <h2 id="work-title">Selected work</h2>
          <p>2023 to now</p>
        </header>

        @for (item of work; track item.title) {
          <article class="case">
            <div class="case__body">
              <h3>{{ item.title }}</h3>
              <p>{{ item.summary }}</p>
              <p class="case__meta">
                <span>{{ item.company }}</span>
                <span>{{ item.domain }}</span>
                <span>{{ item.stack }}</span>
              </p>
            </div>
            <figure class="case__fig">
              <app-diagram [kind]="item.diagram" />
              <figcaption>{{ item.outcome }}</figcaption>
            </figure>
          </article>
        }
      </div>
    </section>
  `,
  styleUrl: './work.css',
})
export class Work {
  protected readonly work = WORK;
}
