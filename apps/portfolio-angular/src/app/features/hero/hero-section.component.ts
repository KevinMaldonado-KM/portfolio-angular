import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  
  highlightedSkills = [
    'LOREM', 'LOREM', 'LOREM', 'LOREM', 'LOREM', 'LOREM', 'LOREM'
  ];

  downloadCV(): void {
    // Chemin vers le fichier CV dans le dossier public
    const cvUrl = '/file/CV_Kevin_Maldonado_2025.pdf';
    
    // Créer un lien temporaire pour télécharger le fichier
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_Kevin_Maldonado_2025.pdf';
    link.target = '_blank';
    
    // Ajouter le lien au DOM, le cliquer, puis le supprimer
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
