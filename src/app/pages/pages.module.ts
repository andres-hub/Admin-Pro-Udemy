import { NgModule } from "@angular/core";
import {FormsModule} from '@angular/forms';

// ng2- charts
import { ChartsModule } from 'ng2-charts';

import { PAGES_RUTES } from './pages.routes';
import { SharedModule } from '../shared/shared.modules';
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

// temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports:[
        SharedModule,
        PAGES_RUTES,
        FormsModule,
        ChartsModule
    ]
})

export class PagesModule {}