import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  submitted = signal(false);

  contactInfo = [
    { icon: '✉', label: 'Email', value: 'amitbgs678@gmail.com', href: 'mailto:amitbgs678@gmail.com' },
    { icon: '📍', label: 'Location', value: 'Noida, Uttar Pradesh, India', href: '#' },
    { icon: '📞', label: 'Phone', value: '+91-6299236405', href: 'tel:+916299236405' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/amit-a-297050199', href: 'https://linkedin.com/in/amit-a-297050199' },
  ];

  onSubmit() {
    const { name, email, message } = this.form;
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:amitbgs678@gmail.com?subject=${subject}&body=${body}`, '_blank');
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 4000);
  }
}
