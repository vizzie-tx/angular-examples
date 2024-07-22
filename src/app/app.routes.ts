import { Routes } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { ColorChildComponent } from './components/color-child/color-child.component';
import { MineGameComponent } from './components/mine-game/mine-game.component';
import { ProjectionDemoComponent } from './components/projection-demo/projection-demo.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent, },
    { path: 'color', component: ColorChildComponent, },
    { path: 'mines', component: MineGameComponent, },
    { path: 'projection', component: ProjectionDemoComponent, },
];
