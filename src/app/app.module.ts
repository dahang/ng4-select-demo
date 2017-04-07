import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { TabsModule, ButtonsModule } from 'ngx-bootstrap';

import { SelectModule } from './ng2-select/ng2-select';
import { AppComponent } from './app.component';
import { SelectSectionComponent } from './components/select-section';
import { ChildrenDemoComponent } from './components/select/children-demo';
import { MultipleDemoComponent } from './components/select/multiple-demo';
import { RichDemoComponent } from './components/select/rich-demo';
import { SingleDemoComponent } from './components/select/single-demo';
import { SampleSectionComponent } from './components/sample-section.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleSectionComponent,
    SelectSectionComponent,
    ChildrenDemoComponent,
    MultipleDemoComponent,
    RichDemoComponent,
    SingleDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    SelectModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
