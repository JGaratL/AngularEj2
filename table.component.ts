import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {
  names = [
    {name: 'Jose María', first_name: 'Martinez', second_name: 'Carrasco', age: 35, dni: '24782031w', place_of_birth: "Huesca", civil_status: "Casado", children: "Sí"},
    {name: 'Carlos', first_name: 'Gonzalez', second_name: 'Sanchez', age: 33, dni: '14999031x', place_of_birth: "Lugo",  civil_status: "Soltero",  children: "No"},
    {name: 'Inmaculada', first_name: 'Cabrera', second_name: 'Estudillo', age: 23, dni: '54112999e', place_of_birth: "Gran Canaria", civil_status: "Soltera", children: "No"},
    {name: 'Julio Jose', first_name: 'Del Pino', second_name: 'Fresno', age: 67, dni: '31555383e', place_of_birth: "Ciudad Real", civil_status: "Casado", children: "Sí"},
    {name: 'Pedro', first_name: 'García', second_name: 'Blanco', age: 64, dni: '26878221t', place_of_birth: "Toledo", civil_status: "Casado", children: "Sí"},
    {name: 'Juan Carlos', first_name: 'Del Alamo', second_name: 'Chopo', age: 36, dni: '22342188r', place_of_birth: "Almería", civil_status: "Soltero", children: "No"},
    {name: 'Gregorio', first_name: 'Gefrén', second_name: 'De la Sierra', age: 45, dni: '15622771m', place_of_birth: "Barcelona", civil_status: "Casado", children: "No"},
    {name: 'Marta', first_name: 'Duque', second_name: 'Jiménez', age: 44, dni: '24999053i', place_of_birth: "Madrid", civil_status: "Casada", children: "Sí"},
    {name: 'María', first_name: 'Martoneli', second_name: 'Díaz', age: 37, dni: '12999335m', place_of_birth: "Barcelona", civil_status: "Casada", children: "Sí"},
    {name: 'Carlota', first_name: 'Pérez', second_name: 'Pradera', age: 19, dni: '55293277z', place_of_birth: "Granada", civil_status: "Soltera",  children: "No"},
    {name: 'Belén', first_name: 'Romillo', second_name: 'Pinto', age: 35, dni: '15000976b', place_of_birth: "Santander", civil_status: "Casada", children: "No"},
    {name: 'Carlos', first_name: 'Tejedor', second_name: 'Schweiner', age: 78, dni: '14732433r', place_of_birth: "Gijón", civil_status: "Casado", children: "Sí"},
    {name: 'Antonio', first_name: 'Posadillo', second_name: 'Young', age: 48, dni: '32734550y', place_of_birth: "Tenerife", civil_status: "Casado", children: "Sí"},
    {name: 'María Jesús', first_name: 'Prego', second_name: 'Bertoluci', age: 39, dni: '55899076w', place_of_birth: "Madrid", civil_status: "Casada", children: "Sí"},
    {name: 'Cristina', first_name: 'Carnero', second_name: 'Mirinda', age: 30, dni: '52999031a', place_of_birth: "Granada", civil_status: "Soltera", children: "No"}

  ];

  activate = false;


  ngOnInit() {
    console.log("Se ha creado el componente Table");    
  }
  ngOnDestroy() {
    console.log("Se ha destruido el componente Table");    
    
  }
