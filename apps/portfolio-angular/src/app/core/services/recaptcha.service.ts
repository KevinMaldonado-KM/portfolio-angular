import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

interface RecaptchaOptions {
  sitekey: string;
  theme: 'light' | 'dark';
  size: 'normal' | 'compact';
  callback?: (response: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
}

interface GrecaptchaInstance {
  render: (elementId: string, options: RecaptchaOptions) => number;
  getResponse: (widgetId?: number) => string;
  reset: (widgetId?: number) => void;
}

declare const grecaptcha: GrecaptchaInstance;

interface WindowWithRecaptcha extends Window {
  onRecaptchaLoad: () => void;
}

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {
  
  private recaptchaLoaded = false;

  constructor() {
    this.loadRecaptchaScript();
  }

  private loadRecaptchaScript(): void {
    if (this.recaptchaLoaded) return;

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`;
    script.async = true;
    script.defer = true;
    
    // Callback global pour l'initialisation
    (window as unknown as WindowWithRecaptcha).onRecaptchaLoad = () => {
      this.recaptchaLoaded = true;
    };

    document.head.appendChild(script);
  }

  async renderRecaptcha(elementId: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const checkRecaptcha = () => {
        if (typeof grecaptcha !== 'undefined' && this.recaptchaLoaded) {
          try {
            const widgetId = grecaptcha.render(elementId, {
              sitekey: environment.recaptcha.siteKey,
              theme: 'light',
              size: 'normal',
              callback: (response: string) => {
                console.log('reCAPTCHA validé:', response);
              },
              'expired-callback': () => {
                console.log('reCAPTCHA expiré');
              },
              'error-callback': () => {
                console.error('Erreur reCAPTCHA');
              }
            });
            resolve(widgetId);
          } catch (error) {
            reject(error);
          }
        } else {
          setTimeout(checkRecaptcha, 100);
        }
      };
      checkRecaptcha();
    });
  }

  getRecaptchaResponse(widgetId?: number): string | null {
    if (typeof grecaptcha !== 'undefined') {
      return grecaptcha.getResponse(widgetId);
    }
    return null;
  }

  resetRecaptcha(widgetId?: number): void {
    if (typeof grecaptcha !== 'undefined') {
      grecaptcha.reset(widgetId);
    }
  }

  isRecaptchaLoaded(): boolean {
    return this.recaptchaLoaded && typeof grecaptcha !== 'undefined';
  }
}
