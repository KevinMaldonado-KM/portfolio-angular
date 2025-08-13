import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../../../core/services/education.service';
import { Certification } from '../../../core/models/education.model';

interface CertificationStats {
  total: number;
  providers: number;
  recentCount: number;
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent {
  
  // Injection du service
  private readonly educationService = inject(EducationService);

  // Signals pour l'état du composant
  readonly visibleItems = signal<number>(0);
  readonly animationComplete = signal<boolean>(false);
  readonly expandedSkills = signal<Record<string, boolean>>({});

  // Computed properties pour les certifications
  readonly certifications = computed(() => this.educationService.allCertifications());

  // Statistiques des certifications
  readonly stats = computed((): CertificationStats => {
    const certs = this.certifications();
    const providers = new Set(certs.map(cert => cert.provider));
    
    // Certifications récentes (dernière année)
    const currentYear = new Date().getFullYear();
    const recentCerts = certs.filter(cert => {
      const certYear = parseInt(cert.date.split('/')[1]) || 0;
      return certYear >= currentYear;
    });

    return {
      total: certs.length,
      providers: providers.size,
      recentCount: recentCerts.length
    };
  });

  // Constructor avec initialisation
  constructor() {
    setTimeout(() => {
      this.visibleItems.set(this.certifications().length);
      this.animationComplete.set(true);
    }, 500);
  }

  // Méthodes helper
  trackCertification(index: number, cert: Certification): string {
    return cert.name + cert.provider;
  }

  isVisible(index: number): boolean {
    return index < this.visibleItems();
  }

  getItemDelay(index: number): string {
    return `${index * 150 + 200}ms`;
  }

  // Méthodes pour l'expansion des skills
  toggleSkillsExpansion(certId: string): void {
    this.expandedSkills.update(current => ({
      ...current,
      [certId]: !current[certId]
    }));
  }

  isSkillsExpanded(certId: string): boolean {
    return this.expandedSkills()[certId] || false;
  }

  getCertificationId(cert: Certification): string {
    return cert.name + '_' + cert.provider;
  }
}
