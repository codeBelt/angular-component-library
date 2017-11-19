import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent,
    ]
})
export class HeaderModule {

    public static forRoot(): ModuleWithProviders {

        return {
            ngModule: HeaderModule,
            providers: []
        };
    }
}
