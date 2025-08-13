import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  
  currentYear = new Date().getFullYear();
  
  // Informations de contact professionnelles
  contactInfo = {
    email: 'kevin.maldonado0909@gmail.com',
    location: 'Marseille, France',
    university: 'Aix-Marseille Université'
  };

  // Liens sociaux (simplifiés)
  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/KevinMaldonado-KM',
      icon: 'fab fa-github'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/kevin-maldonado-km',
      icon: 'fab fa-linkedin'
    },
    {
      name: 'Email',
      url: 'mailto:kevin.maldonado0909@gmail.com',
      icon: 'fas fa-envelope'
    }
  ];

  /**
   * Ouvre un lien externe
   */
  openExternalLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * Retourne la date de dernière mise à jour
   */
  getLastUpdateDate(): string {
    // Pour un portfolio en développement, on peut utiliser la date actuelle
    // ou une date fixe de la dernière version majeure
    return new Date().toLocaleDateString('fr-FR', { 
      month: 'short', 
      year: 'numeric' 
    });
  }
}
