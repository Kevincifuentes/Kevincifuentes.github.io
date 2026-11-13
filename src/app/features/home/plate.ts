import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-plate',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="plate">
      <picture>
        <source
          type="image/avif"
          srcset="
            images/banner/cern-2017-1200.avif 1200w,
            images/banner/cern-2017-1800.avif 1800w,
            images/banner/cern-2017-2400.avif 2400w
          "
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcset="
            images/banner/cern-2017-1200.webp 1200w,
            images/banner/cern-2017-1800.webp 1800w,
            images/banner/cern-2017-2400.webp 2400w
          "
          sizes="100vw"
        />
        <img
          src="images/banner/cern-2017-1800.jpg"
          srcset="
            images/banner/cern-2017-1200.jpg 1200w,
            images/banner/cern-2017-1800.jpg 1800w,
            images/banner/cern-2017-2400.jpg 2400w
          "
          sizes="100vw"
          width="2400"
          height="1029"
          alt="Kevin Cifuentes at CERN, standing beside the LHC beam pipe"
        />
      </picture>
      <figcaption>CERN, 2017. Writing C++ for the ALICE detector data.</figcaption>
    </figure>
  `,
  styleUrl: './plate.css',
})
export class Plate {}
