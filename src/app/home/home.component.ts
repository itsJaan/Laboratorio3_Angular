import { Component, OnInit } from '@angular/core';
import { CommentService } from '../core/comments.service'
import { UsuarioService } from '../core/usuario.service'
import { PostService } from '../core/post.service'
import { Usuario } from '../shared/usuario'
import { Comment } from '../shared/comment'
import { Post } from '../shared/post'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[];
  usuarioSeleccionado: Usuario[];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios()
    .subscribe(
      (usuarios : Usuario[]) => this.usuarios = usuarios
    )
  }
  mostrarDatos(usuario, $event){
    this.usuarioSeleccionado = usuario;
  }
}
