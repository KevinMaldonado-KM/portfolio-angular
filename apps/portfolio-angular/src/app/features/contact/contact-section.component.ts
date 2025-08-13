import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-section',
  imports: [FormsModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  
  isSubmitting = signal(false);
  isSubmitted = signal(false);

  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit(): void {
    if (this.isSubmitting() || this.isSubmitted()) return;

    this.isSubmitting.set(true);

    // Simulation d'envoi (remplacer par vraie logique)
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      
      // Reset form after success
      setTimeout(() => {
        this.isSubmitted.set(false);
        this.resetForm();
      }, 3000);
    }, 2000);
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
