import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-experiencia-formacion',
  templateUrl: './experiencia-formacion.component.html',
  styleUrls: ['./experiencia-formacion.component.scss'],
})
export class ExperienciaFormacionComponent implements OnInit {
  educacionList: any = [];
  nameField = new FormControl('');
  descriptionField = new FormControl('');

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.educacionList = data.educacion;
    });
  }

  onDropped(event:CdkDragDrop<any>){
    console.log(event);
    const anterior = event.previousIndex;
    const actual = event.currentIndex;
    moveItemInArray(this.educacionList, anterior, actual);
  }
}
