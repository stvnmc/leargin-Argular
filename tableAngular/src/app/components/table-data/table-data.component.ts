import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Accion } from 'src/app/models/tabla-columna';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css'],
})
export class TableDataComponent {
  title = '';
  columnas: string[] = [];
  dataSource: any = [];
  
  @Input() set titulo(title: any) {
    this.title = title;
  }

  @Input() set columns(columns: string[]) {
    this.columnas = columns;
  }

  @Input() set data(data: any) {
    this.dataSource = data;
  }

  @Output() action: EventEmitter<Accion> = new EventEmitter();

  onAction(accion: string, row?: any) {
    this.action.emit({ accion, fila: row });
  }
}
