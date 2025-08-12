import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  
quickStats = [
  { value: '1+', label: 'Années d\'expérience' },
  { value: '10+', label: 'Projets scolaires/professionnels' },
  { value: '15+', label: 'Technologies maîtrisées' },
  { value: '1', label: 'Certifications obtenues' }
];

coreValues = [
  {
    icon: 'fas fa-cogs',
    label: 'Rigueur',
    description: 'Qualité et robustesse du code'
  },
  {
    icon: 'fas fa-rocket',
    label: 'Adaptabilité',
    description: 'Montée en compétences rapide'
  },
  {
    icon: 'fas fa-handshake',
    label: 'Communication',
    description: 'Travail d\'équipe efficace'
  },
  {
    icon: 'fas fa-book',
    label: 'Curiosité',
    description: 'Veille technologique continue'
  }
];
}
