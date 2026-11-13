import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './about';
import { Arc } from './arc';
import { Hero } from './hero';
import { Plate } from './plate';
import { Work } from './work';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Hero, Plate, Work, Arc, About],
  template: `
    <app-hero />
    <app-plate />
    <app-work />
    <app-arc />
    <app-about />
  `,
  styles: `
    :host {
      display: block;
    }
  `,
})
export class Home {}
