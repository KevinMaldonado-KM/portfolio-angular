import { ChangeDetectionStrategy, Component, inject, computed } from '@angular/core';
import { AboutService } from '../../core/services/about.service';

@Component({
  selector: 'app-about-section',
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  
  // Injection du service avec la nouvelle syntaxe inject()
  private readonly aboutService = inject(AboutService);

  // Exposition des signaux computed pour le template
  readonly profile = this.aboutService.profile;
  readonly personalInfo = this.aboutService.personalInfo;
  readonly story = this.aboutService.story;
  readonly quickStats = this.aboutService.quickStats;
  readonly coreValues = this.aboutService.coreValues;
  readonly callToAction = this.aboutService.callToAction;
  readonly fullName = this.aboutService.fullName;

  // Computed pour des données spécifiques au composant si nécessaire
  readonly avatarInitials = computed(() => this.personalInfo().avatar.initials);
  readonly hasAvatar = computed(() => !!this.personalInfo().avatar.imageUrl);
  readonly statisticsTotal = this.aboutService.statisticsTotal;

  /**
   * Action du call to action
   */
  onCallToAction(): void {
    this.aboutService.handleCallToAction();
  }
}
