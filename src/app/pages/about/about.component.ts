import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  team: TeamMember[] = [
    {
      name: 'Hailee Rossi',
      role: 'Head Pastry Chef',
      image: 'assets/team/hailee.avif'
    },
    {
      name: 'Tom Dubois',
      role: 'Cake Artist',
      image: 'assets/team/Tom.jpg'
    },
    {
      name: 'Chloe Tanaka',
      role: 'Specialty Sweets',
      image: 'assets/team/Chloe.jpg'
    }
  ];
}
