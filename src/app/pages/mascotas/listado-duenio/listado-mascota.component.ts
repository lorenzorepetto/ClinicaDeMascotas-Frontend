import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../../../interfaces/IUsuario';
import { AuthService } from '../../../services/auth/auth.service';
import { IMascota } from 'src/app/interfaces/IMascota';
import { MascotaService } from '../../../services/mascota/mascota.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements OnInit {

  usuario: IUsuario;
  mascotas: IMascota[];
  cargando:boolean = true;

  constructor( private _as: AuthService, 
                private _ms: MascotaService ) { 
                  this.usuario = this._as.userLogged;

    this._ms.notificacion.subscribe( ()=> {
      this.cargarMascotas();
    });

  }
                
  ngOnInit() {

    this.cargarMascotas();
    
  }

  cargarMascotas(){
    this._ms.getMascotasDuenio(this.usuario.id).subscribe(
      (resp) => {
        // si es null, significa que no tiene mascotas
        if (resp == null) {
          this.mascotas = null;
        }else{
          this.mascotas = resp['mascotas'];

        }
        this.cargando=false;
        
      }, 
      (err) => console.log(err.error)
      
      
    );
  }

}
