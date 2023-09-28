import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { CompanyComponent } from './modules/company/company.component';
import { SharepointConsultingComponent } from './modules/services/sharepoint-consulting/sharepoint-consulting.component';
import { WebDevelopmentComponent } from './modules/services/web-development/web-development.component';
import { BlogComponent } from './modules/blog/blog.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { MobileDevelopmentComponent } from './modules/services/mobile-development/mobile-development.component';
import { BpoServicesComponent } from './modules/services/bpo-services/bpo-services.component';
import { BookKeepingComponent } from './modules/services/book-keeping/book-keeping.component';
import { ResourceConsultingComponent } from './modules/services/resource-consulting/resource-consulting.component';
import { NicheSkillsTrainingComponent } from './modules/services/niche-skills-training/niche-skills-training.component';
import { SentimentalAnalyticsComponent } from './modules/data-analytics/sentimental-analytics/sentimental-analytics.component';
import { BIAnalyticsComponent } from './modules/data-analytics/bi-analytics/bi-analytics.component';
import { ASZProductsComponent } from './modules/products/asz-products/asz-products.component';
import { OpenSourceProductsComponent } from './modules/products/open-source-products/open-source-products.component';
import { CareerComponent } from './modules/career/career.component';
import { SolutionsComponent } from './modules/solutions/solutions.component';
import { CareerDetailsComponent } from './modules/career-details/career-details.component';
import { BlogDetailsComponent } from './modules/blog-details/blog-details.component';
import { PrivacyPolicyComponent } from './modules/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './modules/terms-conditions/terms-conditions.component';
import { CareerFormComponent } from './modules/career-form/career-form.component';
import { ScrollTopComponent } from './core/scroll-top/scroll-top.component';
// import { I18nModule } from './shared/i18n/i18n.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CompanyComponent,
    SharepointConsultingComponent,
    WebDevelopmentComponent,
    BlogComponent,
    ContactUsComponent,
    MobileDevelopmentComponent,
    BpoServicesComponent,
    BookKeepingComponent,
    ResourceConsultingComponent,
    NicheSkillsTrainingComponent,
    SentimentalAnalyticsComponent,
    BIAnalyticsComponent,
    ASZProductsComponent,
    OpenSourceProductsComponent,
    CareerComponent,
    SolutionsComponent,
    CareerDetailsComponent,
    BlogDetailsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    CareerFormComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // I18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
