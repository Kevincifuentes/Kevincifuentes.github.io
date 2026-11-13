import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../../content/profile';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="about" id="about" aria-labelledby="about-title">
      <div class="wrap">
        <header class="section-head">
          <h2 id="about-title">About</h2>
          <p>Bilbao, CET</p>
        </header>
        <div class="about__grid">
          <div class="about__text">
            @for (paragraph of profile.about; track $index) {
              <p>{{ paragraph }}</p>
            }
          </div>
          <aside class="about__aside">
            <figure class="portrait">
              <picture>
                <source
                  type="image/avif"
                  srcset="images/portrait/kevin-400.avif 1x, images/portrait/kevin-800.avif 2x"
                />
                <source
                  type="image/webp"
                  srcset="images/portrait/kevin-400.webp 1x, images/portrait/kevin-800.webp 2x"
                />
                <img
                  src="images/portrait/kevin-400.jpg"
                  srcset="images/portrait/kevin-400.jpg 1x, images/portrait/kevin-800.jpg 2x"
                  width="400"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  alt="Portrait of Kevin Cifuentes Salas"
                />
              </picture>
              <figcaption>Bilbao</figcaption>
            </figure>
            <dl class="facts">
              @for (fact of profile.facts; track fact.term) {
                <div>
                  <dt>{{ fact.term }}</dt>
                  <dd>{{ fact.value }}</dd>
                </div>
              }
            </dl>
          </aside>
        </div>
      </div>
    </section>
  `,
  styleUrl: './about.css',
})
export class About {
  protected readonly profile = PROFILE;
}
