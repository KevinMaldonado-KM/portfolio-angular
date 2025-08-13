import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  mobileMenuOpen = signal(false);
  darkMode = signal(false);
  
  navigationItems = [
    { label: 'À Propos', href: '#about' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Formation', href: '#education' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  constructor() {
    // Initialiser en mode light par défaut
    this.initializeDarkMode();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }

  toggleDarkMode(): void {
    this.darkMode.update(value => !value);
    this.applyDarkMode();
  }

  private initializeDarkMode(): void {
    // Par défaut en mode light, mais vérifier localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      this.darkMode.set(true);
    } else {
      // Forcer le mode light par défaut
      this.darkMode.set(false);
    }
    
    this.applyDarkMode();
  }

  private applyDarkMode(): void {
    const html = document.documentElement;
    
    // Ultra-optimized theme switching
    // 1. Disable all transitions instantly
    html.classList.add('theme-changing');
    
    // 2. Apply theme change immediately (no transitions)
    if (this.darkMode()) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    
    // 3. Re-enable transitions after a minimal delay
    setTimeout(() => {
      html.classList.remove('theme-changing');
    }, 50); // Minimal delay just to let the DOM update
  }

  scrollToSection(event: Event, href: string): void {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
