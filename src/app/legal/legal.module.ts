import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalRoutingModule } from './legal-routing.module';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ImprintComponent, PrivacyPolicyComponent],
  imports: [CommonModule, LegalRoutingModule, SharedModule],
})
export class LegalModule {}
