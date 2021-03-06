import { IEvento } from './IEvento';
import { IUsuario } from './IUsuario';

export interface IMascotaNueva {
    // si no llega una foto de la mascota, ponemos una por defecto (pero llega 1 si o si)
    id: number;
    nombre: string;
    especie: string;
    raza: string;
    fecha_nacimiento: string;
    sexo: string;
    color: string;
    foto: string;
    senias: string;
    veterinario: number;
    duenio: number;
}

export interface IMascota {
    // si no llega una foto de la mascota, ponemos una por defecto (pero llega 1 si o si)
    id: number;
    nombre: string;
    especie: string;
    raza: string;
    fecha_nacimiento: string;
    sexo: string;
    color: string;
    foto: string;
    senias: string;
    veterinario: number;
    duenio: number;
    ficha_publica: number;
}


export interface IMascotaShow {
    id: number,
	nombre: string,
	fecha_nacimiento:string,
	especie:string,
	raza:string,
	sexo:string,
	color:string,
	senias:string,
	foto:string,
	duenio: IUsuario,
	veterinario: IUsuario,
	eventos: IEvento[]
}