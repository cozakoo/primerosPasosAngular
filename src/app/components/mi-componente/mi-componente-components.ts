import { Component } from "@angular/core";

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente-components.html'
})

export class MiComponente {

    public titulo: string;

    constructor() {
        this.titulo = " asdasd";
        console.log("mi componente cargado");
    }
}