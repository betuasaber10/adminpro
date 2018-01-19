import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SharedService, SiderbarService } from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SiderbarService
  ],
  declarations: []
})
export class ServiceModule { }
