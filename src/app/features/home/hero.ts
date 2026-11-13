import { ChangeDetectionStrategy, Component } from '@angular/core';
import { METRICS, PROFILE } from '../../../content/profile';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <div class="wrap">
        <div class="hero__text">
          <h1>
            {{ profile.headlineLead }} <em>{{ profile.headlineAccent }}</em>
          </h1>
          <p class="hero__lede">{{ profile.lede }}</p>
          <p class="hero__role">{{ profile.roleLine }}</p>
        </div>
        <dl class="hero__metrics">
          @for (metric of metrics; track metric.label) {
            <div>
              <dt>{{ metric.label }}</dt>
              <dd>
                {{ metric.value }}<small>{{ metric.unit }}</small>
              </dd>
            </div>
          }
        </dl>
      </div>
    </section>
  `,
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly metrics = METRICS;
}
