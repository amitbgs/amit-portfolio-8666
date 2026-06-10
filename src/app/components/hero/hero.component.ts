import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = signal('');
  cursorVisible = signal(true);
  private titles = [
    'Senior Software Engineer',
    'Full Stack .NET Developer',
    'React.js Developer',
    'Healthcare App Architect',
  ];
  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeTimer: any;
  private cursorTimer: any;

  stats = [
    { value: '3.6+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '25%', label: 'DB Perf Boost' },
    { value: '99.9%', label: 'Uptime Achieved' },
  ];

  ngOnInit() {
    this.startTyping();
    this.cursorTimer = setInterval(() => {
      this.cursorVisible.update(v => !v);
    }, 530);
  }

  ngOnDestroy() {
    clearTimeout(this.typeTimer);
    clearInterval(this.cursorTimer);
  }

  private startTyping() {
    const current = this.titles[this.titleIndex];
    if (!this.isDeleting) {
      this.displayText.set(current.substring(0, ++this.charIndex));
      if (this.charIndex === current.length) {
        this.typeTimer = setTimeout(() => { this.isDeleting = true; this.startTyping(); }, 2000);
        return;
      }
    } else {
      this.displayText.set(current.substring(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      }
    }
    this.typeTimer = setTimeout(() => this.startTyping(), this.isDeleting ? 50 : 90);
  }
}
