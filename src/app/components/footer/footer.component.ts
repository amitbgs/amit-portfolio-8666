import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container">
        <div class="footer-inner">
          <span class="logo">
            <span class="lb">&lt;</span>AKA<span class="lb">/&gt;</span>
          </span>
          <p class="footer-copy">
            Amit Kumar Akela &nbsp;·&nbsp; Senior Software Engineer &nbsp;·&nbsp; Noida, India
          </p>
          <p class="footer-built">
            Built with <span class="heart">♥</span> using Angular
          </p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      padding: 32px 0;
      border-top: 1px solid var(--navy-line);
      background: var(--navy-mid);
    }
    .container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 0 32px;
    }
    .footer-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      text-align: center;
    }
    .logo {
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 700;
      color: var(--white);
      .lb { color: var(--cyan); }
    }
    .footer-copy {
      font-size: 13px;
      color: var(--slate);
      font-family: var(--font-mono);
    }
    .footer-built {
      font-size: 12px;
      color: var(--slate-dim);
    }
    .heart { color: #F87171; }
  `]
})
export class FooterComponent {}
