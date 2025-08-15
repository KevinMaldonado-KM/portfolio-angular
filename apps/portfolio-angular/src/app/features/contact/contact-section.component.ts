import { ChangeDetectionStrategy, Component, signal, OnInit, ElementRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmailService, ContactFormData } from '../../core/services/email.service';
import { RecaptchaService } from '../../core/services/recaptcha.service';

@Component({
  selector: 'app-contact-section',
  imports: [FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent implements OnInit {
  
  private emailService = inject(EmailService);
  private recaptchaService = inject(RecaptchaService);
  
  @ViewChild('recaptchaElement', { static: false }) recaptchaElement!: ElementRef;
  
  isSubmitting = signal(false);
  isSubmitted = signal(false);
  errorMessage = signal('');
  recaptchaWidgetId: number | null = null;

  formData: ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit(): void {
    // Le reCAPTCHA sera initialisé après le rendu du composant
    setTimeout(() => this.initializeRecaptcha(), 1000);
  }

  private async initializeRecaptcha(): Promise<void> {
    try {
      if (this.recaptchaElement?.nativeElement) {
        this.recaptchaWidgetId = await this.recaptchaService.renderRecaptcha(
          this.recaptchaElement.nativeElement.id
        );
      }
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du reCAPTCHA:', error);
      this.errorMessage.set('Erreur lors du chargement du captcha. Veuillez rafraîchir la page.');
    }
  }

  async onSubmit(): Promise<void> {
    if (this.isSubmitting() || this.isSubmitted()) return;

    // Reset des messages d'erreur
    this.errorMessage.set('');

    // Validation des champs
    if (!this.validateForm()) {
      this.errorMessage.set('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Validation du reCAPTCHA
    const recaptchaResponse = this.recaptchaService.getRecaptchaResponse(this.recaptchaWidgetId || undefined);
    if (!recaptchaResponse) {
      this.errorMessage.set('Veuillez valider le captcha.');
      return;
    }

    this.isSubmitting.set(true);

    try {
      // Nettoyage des données
      const cleanFormData: ContactFormData = {
        name: this.emailService.sanitizeInput(this.formData.name),
        email: this.emailService.sanitizeInput(this.formData.email),
        subject: this.emailService.sanitizeInput(this.formData.subject),
        message: this.emailService.sanitizeInput(this.formData.message),
        'g-recaptcha-response': recaptchaResponse
      };

      // Envoi de l'email
      const success = await this.emailService.sendEmail(cleanFormData);

      if (success) {
        this.isSubmitted.set(true);
        this.resetForm();
        
        // Reset automatique après 5 secondes
        setTimeout(() => {
          this.isSubmitted.set(false);
        }, 5000);
      } else {
        this.errorMessage.set('Erreur lors de l\'envoi du message. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      this.errorMessage.set('Une erreur inattendue s\'est produite. Veuillez réessayer.');
    } finally {
      this.isSubmitting.set(false);
      // Reset du reCAPTCHA
      this.recaptchaService.resetRecaptcha(this.recaptchaWidgetId || undefined);
    }
  }

  private validateForm(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.emailService.isValidEmail(this.formData.email) &&
      this.formData.subject.trim() &&
      this.formData.message.trim()
    );
  }

  getSubmitButtonClasses(): string {
    const baseClasses = 'px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg';
    
    if (this.isSubmitted()) {
      return baseClasses + ' bg-green-600 hover:bg-green-700 text-white';
    }
    
    if (this.isSubmitting()) {
      return baseClasses + ' bg-gray-400 text-white cursor-not-allowed';
    }
    
    return baseClasses + ' bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:shadow-xl hover:scale-105';
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
