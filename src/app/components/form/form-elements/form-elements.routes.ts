import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'form',
    children: [
      {
        path: 'inputs',
        title: 'Valex - Inputs',
        loadComponent: () => import('./inputs/inputs.component').then(m => m.InputsComponent),
      },
      {
        path: 'checks-radio',
        title: 'Valex - Checks Radio',
        loadComponent: () => import('./checks-radio/checks-radio.component').then(m => m.ChecksRadioComponent),
      },
      {
        path: 'input-group',
        title: 'Valex - Input Group',
        loadComponent: () => import('./input-group/input-group.component').then(m => m.InputGroupComponent),
      },
      {
        path: 'form-select',
        title: 'Valex - Form Select',
        loadComponent: () => import('./form-select/form-select.component').then(m => m.FormSelectComponent),
      },
      {
        path: 'range-slider',
        title: 'Valex - Range Slider',
        loadComponent: () => import('./range-slider/range-slider.component').then(m => m.RangeSliderComponent),
      },
      {
        path: 'input-masks',
        title: 'Valex - Input Masks',
        loadComponent: () => import('./input-masks/input-masks.component').then(m => m.InputMasksComponent),
      },
      {
        path: 'file-uploads',
        title: 'Valex - File Uploads',
        loadComponent: () => import('./file-uploads/file-uploads.component').then(m => m.FileUploadsComponent),
      },
      {
        path: 'datetimepicker',
        title: 'Valex - Date Time Picker',
        loadComponent: () => import('./date-time-picker/date-time-picker.component').then(m => m.DateTimePickerComponent),
      },
      {
        path: 'colorpicker',
        title: 'Valex - Color Pickers',
        loadComponent: () => import('./color-picker/color-picker.component').then(m => m.ColorPickerComponent),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule { 
  static routes=routes
}
