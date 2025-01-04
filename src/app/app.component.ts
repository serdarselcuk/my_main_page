import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTooltipModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'My Page';
  salut = "Hello, dear visitor!"
  definition = "I'm Serdar Selcuk, a developer at Chase. This page showcases my development skills, including Angular, Android, SpringBoot, Selenium, Appium, RestAssured, and more."
  ending = "Explore the links to learn more about my projects and experience."
  resume_link_text='my CV'
  resume_link='https://drive.google.com/file/d/1--FCp0Ac_j8OOwlpz8GUCzB8GgbA0Osc/view?usp=sharing'
  resume_details='click to see my resume'
  thesis_link_text= "Thesis"
  thesis_link= 'https://drive.google.com/file/d/11NL9CuHI-ckhimugcYjOqbl37yo5MwwN/view?usp=sharing'
  thesis_details='click to see my thesis'
  article_link_text='Article'
  article_link='https://drive.google.com/file/d/12cE0uCqdazwNtkzo966yZMYRIODoOxlu/view?usp=sharing'
  article_descirption='click to see the article'
  md_thessis_link_text='MD thesis'
  md_thessis_link= 'https://drive.google.com/file/d/1TUXckqIa2vQePE7l4MQ-4dGn_GBOSJJN/view?usp=sharing'
  md_thessis_descirption='click to see the thessis'
  md_publishment_link_text='MD publishment'
  md_publishment_link='https://drive.google.com/file/d/1D3JVf1PIE5-13KJLi7mOAOsnPOCvyVWd/view?usp=sharing'
  md_publishment_descirption='click to see publishment'
  android_title='Android app - Math mind'
  android_link= 'https://github.com/serdarselcuk/mathMind_android'
  android_description="Click to see my Android application"
  springBoot_title='SpringBoot - MathMind services'
  springBoot_link= 'https://github.com/serdarselcuk/mathMind_service'
  springBoot_description="Click to see my SpringBoot application"
  selenium_title='Selenium/RestAssured Project'
  selenium_link= 'https://github.com/serdarselcuk/MyProjecOfUI/tree/master'
  selenium_description="Click to see my Selenium application"
  appium_title='Appium Project - Etsy test'
  appium_link= 'https://github.com/serdarselcuk/EtsyTest_Apium'
  appium_description="Click to see my Appium application"
  jsPro_title='JS Project - Ball game'
  jsPro_link= 'https://serdarselcuk.github.io/ballGame/'
  jsPro_description="Click to see my JS application"
  javaPro_title='Java Project - Excel manuplator'
  javaPro_link= 'https://github.com/serdarselcuk/excelManuplator'
  javaPro_description="Click to see my Java application"
}
  