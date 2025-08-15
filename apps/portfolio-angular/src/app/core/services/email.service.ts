import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  'g-recaptcha-response'?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  constructor() {
    // Initialisation d'EmailJS avec la clé depuis l'environnement
    emailjs.init(environment.emailjs.publicKey);
  }

  async sendEmail(formData: ContactFormData): Promise<boolean> {
    try {
      // Préparation des données pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'kevin.maldonado0909@gmail.com',
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
        // Ajout d'informations supplémentaires
        timestamp: new Date().toLocaleString('fr-FR'),
        user_agent: navigator.userAgent
      };

      const response = await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams
      );

      console.log('Email envoyé avec succès:', response);
      return response.status === 200;
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'email:', error);
      return false;
    }
  }

  // Méthode pour valider le format email
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Méthode pour nettoyer les données
  sanitizeInput(input: string): string {
    return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  }
}
