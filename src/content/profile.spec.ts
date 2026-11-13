import { ARC, METRICS, PROFILE, WORK } from './profile';

describe('profile content', () => {
  it('keeps the four headline metrics', () => {
    expect(METRICS).toHaveLength(4);
    expect(METRICS.map((metric) => metric.label)).toContain('p99 write latency');
  });

  it('ships three case studies, each with an outcome and a diagram', () => {
    expect(WORK).toHaveLength(3);
    for (const item of WORK) {
      expect(item.outcome.length).toBeGreaterThan(0);
      expect(['fallback', 'monolith', 'teams']).toContain(item.diagram);
      expect(item.summary.length).toBeGreaterThan(40);
    }
  });

  it('orders the arc by year', () => {
    const years = ARC.map((entry) => entry.year);
    expect(years).toEqual([...years].sort((a, b) => a - b));
  });

  it('states where the next role is and what it is', () => {
    const looking = PROFILE.facts.find((fact) => fact.term === 'Looking for');
    expect(looking?.value).toContain('Staff software engineer');
  });
});
