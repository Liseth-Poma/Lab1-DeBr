import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { FormsModule } from '@angular/forms';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { Count2Component } from './components/decrease-bar/count2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressBarComponent, CountdownComponent, FormsModule, Componente1Component, 
    Componente2Component, Count2Component ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'componentes';
  counterProgress: number = 0;
  totalCountdown: number = 15;

  updateProgress($event: number) {
    this.counterProgress = ((this.totalCountdown - $event) / this.totalCountdown) * 100;
  }

  countdownFinished(){
    console.log("El conteo ha finalizado");
  }
}
