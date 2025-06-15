import { Component } from '@angular/core';
import { FeatureWidget } from './components/feature-widget/feature-widget';
import { TopbarWidget } from './components/topbar-widget';
import { HeroWidget } from './components/hero-widget';
import { PricingWidget } from './components/pricing-widget';
import { HighlightsWidget } from './components/highlights-widget';
import { FooterWidget } from './components/footer-widget';

@Component({
  selector: 'app-landing',
  imports: [TopbarWidget, HeroWidget ,FeatureWidget , PricingWidget , HighlightsWidget , FooterWidget],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {

}
