import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Page';
  salut = "Hello, dear visitor!"
  definition = "I'm Serdar Selcuk, a developer at Chase. This page showcases my development skills, including Angular, Android, SpringBoot, Selenium, Appium, RestAssured, and more."
  ending = "Explore the links to learn more about my projects and experience."

}
