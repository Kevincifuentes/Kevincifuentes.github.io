export interface Metric {
  readonly label: string;
  readonly value: string;
  readonly unit: string;
}

export interface CaseStudy {
  readonly title: string;
  readonly summary: string;
  readonly company: string;
  readonly domain: string;
  readonly stack: string;
  readonly outcome: string;
  readonly diagram: Diagram;
}

export type Diagram = 'fallback' | 'monolith' | 'teams';

export interface ArcEntry {
  readonly year: number;
  readonly title: string;
  readonly org: string;
}

export interface Fact {
  readonly term: string;
  readonly value: string;
}

export interface Profile {
  readonly name: string;
  readonly headlineLead: string;
  readonly headlineAccent: string;
  readonly lede: string;
  readonly roleLine: string;
  readonly about: readonly string[];
  readonly facts: readonly Fact[];
  readonly email: string;
  readonly linkedin: string;
  readonly github: string;
}

export const PROFILE: Profile = {
  name: 'Kevin Cifuentes Salas',
  headlineLead: 'Payments at',
  headlineAccent: '2,000 TPS.',
  lede: 'I build the parts of payment platforms that quietly have to work: gateway fallback, partitioned cores, and the deployment tooling the team actually uses.',
  roleLine: 'Senior software engineer at dLocal, in Bilbao.',
  about: [
    "I took my father's computer apart at six and have been trying to understand how things work since. Nine years later that turned into payment systems, warehouse software, and a lot of architecture documents.",
    'My best work crosses team lines: a design doc people follow, two squads agreeing on one API, a release a developer can start and walk away from. I still write code every week, and I teach concurrency and AI-assisted programming at Arangoya in Bilbao.',
  ],
  facts: [
    { term: 'Now', value: 'Senior software engineer, Payins core, dLocal' },
    {
      term: 'Before',
      value:
        'Solutions architect at Inditex, senior engineer at Eventbrite, tech lead at Lookiero, technical student at CERN',
    },
    { term: 'Languages', value: 'Spanish, Basque, English, a little French' },
    { term: 'Looking for', value: 'Staff software engineer, remote from Spain' },
  ],
  email: 'cifuentessalaskevin@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kevin-cifuentes-salas',
  github: 'https://github.com/Kevincifuentes',
};

export const METRICS: readonly Metric[] = [
  { label: 'p99 write latency', value: '4.0', unit: 'ms, was 8.6' },
  { label: 'Payment conversion', value: '+2%', unit: 'a month' },
  { label: 'Failed-payment infrastructure', value: '$50k', unit: 'a month' },
  { label: 'Monolith retirement', value: '$10k', unit: 'a month' },
];

export const WORK: readonly CaseStudy[] = [
  {
    title: 'Gateway fallback',
    summary:
      "Chooses which gateway to retry a failed payment on, from the transaction context and live gateway state pushed over async messages, with rules that keep retries inside each merchant's SLI.",
    company: 'dLocal',
    domain: 'Payments',
    stack: 'Java, Spring Boot, SQS',
    outcome: '+2% conversion',
    diagram: 'fallback',
  },
  {
    title: 'Retiring monoliths with no migration window',
    summary:
      'An internal feature flag service and incremental, targeted rollouts moved traffic off several monoliths with no user-visible change, cutting infrastructure spend and improving the core service.',
    company: 'dLocal',
    domain: 'Platform',
    stack: 'Java, AWS, feature flags',
    outcome: '$10k a month less',
    diagram: 'monolith',
  },
  {
    title: 'One architecture, seven teams',
    summary:
      'Greenfield platform at Inditex: design decisions, code and design review, and mentoring engineers across three countries so the conventions held after launch.',
    company: 'Inditex',
    domain: 'Retail',
    stack: 'Java 21, Kafka, DDD',
    outcome: '1,000 concurrent users',
    diagram: 'teams',
  },
];

export const ARC: readonly ArcEntry[] = [
  { year: 2017, title: 'C++ for the ALICE detector data', org: 'CERN' },
  { year: 2018, title: 'Warehouse operations systems', org: 'Lookiero' },
  { year: 2021, title: 'Tech lead for five to seven engineers', org: 'Lookiero' },
  { year: 2022, title: 'Checkout at 300 requests per second', org: 'Eventbrite' },
  { year: 2023, title: 'Architecture across seven teams', org: 'Inditex' },
  { year: 2025, title: 'Payins core and gateway fallback', org: 'dLocal' },
];
