import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';

describe('Hero', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [Hero] }).compileComponents();
  });

  it('puts the headline and the lead metric in the first render', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(text).toContain('Payments at');
    expect(text).toContain('2,000 TPS.');
    expect(text).toContain('p99 write latency');
  });

  it('renders one term per metric', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();
    const terms = fixture.nativeElement.querySelectorAll('dt');

    expect(terms).toHaveLength(4);
  });
});
