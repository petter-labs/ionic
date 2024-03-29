import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ItemSlidingPage } from './item-sliding.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ItemSlidingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    HttpClientModule
  ],
  declarations: [ItemSlidingPage]
})
export class ItemSlidingPageModule {}
