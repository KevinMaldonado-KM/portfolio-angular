import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  private meta = inject(Meta);
  private titleService = inject(Title);

  updateSeoTags(seoData: SeoData): void {
    // Title
    this.titleService.setTitle(seoData.title);

    // Description
    this.meta.updateTag({ name: 'description', content: seoData.description });

    // Keywords
    if (seoData.keywords) {
      this.meta.updateTag({ name: 'keywords', content: seoData.keywords });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: seoData.title });
    this.meta.updateTag({ property: 'og:description', content: seoData.description });
    
    if (seoData.url) {
      this.meta.updateTag({ property: 'og:url', content: seoData.url });
    }
    
    if (seoData.image) {
      this.meta.updateTag({ property: 'og:image', content: seoData.image });
    }
    
    if (seoData.type) {
      this.meta.updateTag({ property: 'og:type', content: seoData.type });
    }

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:title', content: seoData.title });
    this.meta.updateTag({ name: 'twitter:description', content: seoData.description });
    
    if (seoData.image) {
      this.meta.updateTag({ name: 'twitter:image', content: seoData.image });
    }
  }

  // Méthodes spécifiques pour chaque section
  setHomeSeo(): void {
    this.updateSeoTags({
      title: 'Kevin Maldonado - Portfolio Développeur Full Stack | Angular, React, Node.js',
      description: 'Portfolio de Kevin Maldonado, développeur full stack expérimenté. Découvrez mes projets en Angular, React, Node.js, TypeScript et plus encore.',
      keywords: 'Kevin Maldonado, portfolio, développeur full stack, Angular, React, Node.js, TypeScript, JavaScript, développeur web',
      url: 'https://kevinmaldonado.dev',
      type: 'website'
    });
  }

  setAboutSeo(): void {
    this.updateSeoTags({
      title: 'À propos - Kevin Maldonado | Développeur Full Stack Passionné',
      description: 'Découvrez le parcours de Kevin Maldonado, développeur full stack passionné par les technologies modernes. Formation, expérience et vision.',
      keywords: 'Kevin Maldonado, à propos, parcours développeur, formation, expérience, compétences, vision',
      url: 'https://kevinmaldonado.dev#about'
    });
  }

  setExperienceSeo(): void {
    this.updateSeoTags({
      title: 'Expérience Professionnelle - Kevin Maldonado | Projets et Réalisations',
      description: 'Explorez l\'expérience professionnelle de Kevin Maldonado : projets réalisés, technologies utilisées, et compétences développées.',
      keywords: 'Kevin Maldonado, expérience, projets, réalisations, développement web, applications',
      url: 'https://kevinmaldonado.dev#experience'
    });
  }

  setSkillsSeo(): void {
    this.updateSeoTags({
      title: 'Compétences Techniques - Kevin Maldonado | Stack Technologique',
      description: 'Découvrez les compétences techniques de Kevin Maldonado : Angular, React, Node.js, TypeScript, PHP, Python, bases de données et plus.',
      keywords: 'Kevin Maldonado, compétences, technologies, Angular, React, Node.js, TypeScript, JavaScript, PHP, Python, MySQL, MongoDB',
      url: 'https://kevinmaldonado.dev#skills'
    });
  }

  setProjectsSeo(): void {
    this.updateSeoTags({
      title: 'Projets Portfolio - Kevin Maldonado | Applications Web Modernes',
      description: 'Explorez les projets de Kevin Maldonado : applications web modernes, sites responsives, solutions full stack innovantes.',
      keywords: 'Kevin Maldonado, projets, portfolio, applications web, sites internet, développement, réalisations',
      url: 'https://kevinmaldonado.dev#projects'
    });
  }

  setContactSeo(): void {
    this.updateSeoTags({
      title: 'Contact - Kevin Maldonado | Collaboration et Opportunités',
      description: 'Contactez Kevin Maldonado pour vos projets de développement web. Disponible pour des missions freelance et opportunités professionnelles.',
      keywords: 'Kevin Maldonado, contact, collaboration, freelance, mission, développeur disponible, recrutement',
      url: 'https://kevinmaldonado.dev#contact'
    });
  }

  // Ajouter des balises structurées pour une section
  addStructuredData(data: Record<string, unknown>): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }
}
