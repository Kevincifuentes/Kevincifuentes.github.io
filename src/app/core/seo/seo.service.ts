import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PROFILE } from '../../../content/profile';

const SITE = {
  url: 'https://kevincifuentes.github.io/',
  image: 'https://kevincifuentes.github.io/images/og-card.jpg',
  title: 'Kevin Cifuentes Salas, payments and distributed systems',
  description:
    'Senior software engineer in Bilbao. Gateway fallback and partitioned payment cores at dLocal, previously Inditex, Eventbrite, Lookiero and CERN.',
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  apply(): void {
    this.title.setTitle(SITE.title);

    this.meta.updateTag({ name: 'description', content: SITE.description });
    this.meta.updateTag({ name: 'author', content: PROFILE.name });
    this.meta.updateTag({ name: 'theme-color', content: '#f3efe6' });

    this.meta.updateTag({ property: 'og:type', content: 'profile' });
    this.meta.updateTag({ property: 'og:title', content: SITE.title });
    this.meta.updateTag({ property: 'og:description', content: SITE.description });
    this.meta.updateTag({ property: 'og:url', content: SITE.url });
    this.meta.updateTag({ property: 'og:image', content: SITE.image });
    this.meta.updateTag({ property: 'og:image:width', content: '1200' });
    this.meta.updateTag({ property: 'og:image:height', content: '630' });
    this.meta.updateTag({ property: 'og:image:alt', content: 'Kevin Cifuentes at CERN' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_GB' });
    this.meta.updateTag({ property: 'profile:first_name', content: 'Kevin' });
    this.meta.updateTag({ property: 'profile:last_name', content: 'Cifuentes Salas' });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: SITE.title });
    this.meta.updateTag({ name: 'twitter:description', content: SITE.description });
    this.meta.updateTag({ name: 'twitter:image', content: SITE.image });

    this.setCanonical();
    this.setStructuredData();
  }

  private setCanonical(): void {
    const head = this.document.head;
    let link = head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      head.appendChild(link);
    }
    link.setAttribute('href', SITE.url);
  }

  private setStructuredData(): void {
    const head = this.document.head;
    const existing = head.querySelector('script[data-seo="person"]');
    if (existing) {
      return;
    }

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo', 'person');
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: PROFILE.name,
      jobTitle: 'Senior Software Engineer',
      worksFor: { '@type': 'Organization', name: 'dLocal' },
      url: SITE.url,
      image: SITE.image,
      address: { '@type': 'PostalAddress', addressLocality: 'Bilbao', addressCountry: 'ES' },
      email: `mailto:${PROFILE.email}`,
      sameAs: [PROFILE.linkedin, PROFILE.github],
      knowsAbout: [
        'Payments',
        'Distributed systems',
        'Software architecture',
        'Java',
        'Kotlin',
        'Observability',
      ],
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Universidad de Deusto' },
        { '@type': 'CollegeOrUniversity', name: 'Universitat Oberta de Catalunya' },
      ],
    });
    head.appendChild(script);
  }
}
