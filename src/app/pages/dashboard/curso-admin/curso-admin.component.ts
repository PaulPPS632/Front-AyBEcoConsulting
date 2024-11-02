import { Component, inject, Input, OnInit } from '@angular/core';
import { ModalDefaultComponent } from '../../../components/modal-default/modal-default.component';
import { CartVideoCreateComponent } from '../../../components/cart-video-create/cart-video-create.component';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { InputComponent } from '../../../components/input/input.component';
import { FormsModule } from '@angular/forms';
import { VideosService } from '../../../services/videos.service';
import { Video } from '../../../interfaces/Videos';
import Swal from 'sweetalert2';
import { CrearExamenComponent } from '../../../components/crear-examen/crear-examen.component';
@Component({
  selector: 'app-curso-admin',
  standalone: true,
  imports: [
    ModalDefaultComponent,
    CartVideoCreateComponent,
    CdkDrag,
    CdkDropList,
    InputComponent,
    FormsModule,
    CrearExamenComponent,
  ],
  templateUrl: './curso-admin.component.html',
  styleUrl: './curso-admin.component.css',
})
export class CursoAdminComponent implements OnInit {
  videosService = inject(VideosService);
  @Input('id') CursoId: string = '';
  modalVideo = false;
  modalExamen = false;
  SelectedVideo: number = 0;
  Videos: Video[] = [];
  FileVideo: File | null = null;
  FileMiniatura: File | null = null;
  ngOnInit(): void {
    console.log(this.SelectedVideo);
    this.videosService.getVideosByCurso(this.CursoId).subscribe((res) => {
      console.log('res: ', res);
      this.Videos = res;
    });
  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.Videos, event.previousIndex, event.currentIndex);
  }
  toggleModalVideo() {
    this.modalVideo = !this.modalVideo;
  }
  toggleModalExamen() {
    this.modalExamen = !this.modalExamen;
  }
  removetopic(index: number) {
    this.Videos[this.SelectedVideo].topics.splice(index, 1);
  }
  CloseModalVideo() {
    if (
      this.Videos[this.Videos.length - 1].titulo == '' ||
      this.Videos[this.Videos.length - 1].descripcion == ''
    ) {
      this.Videos.pop();
      this.SelectedVideo = this.Videos.length - 1;
    }
    this.toggleModalVideo();
  }
  OpenModalCreateVideo() {
    console.log('Videos Previamente: ', this.Videos);
    this.Videos.push({
      id: '',
      titulo: '',
      descripcion: '',
      topics: [''],
      CursoId: this.CursoId,
      antecesor: '',
      sucesor: '',
      createdAt: '',
      updatedAt: '',
      urlminiatura: '',
      url: '',
      order: null,
    });
    console.log(this.Videos.length - 1);

    this.SelectedVideo = this.Videos.length - 1;
    this.toggleModalVideo();
  }
  openEdit(index: number) {
    this.SelectedVideo = index;
    this.toggleModalVideo();
  }
  editVideo() {
    //this.cursosService.editVideo(this.Videos[this.SelectedVideo]);
    this.toggleModalVideo();
  }
  createVideo() {
    if (this.ValidarDatos()) {
      console.log(this.SelectedVideo);
      //this.Videos.splice(this.SelectedVideo, 1);
      const formData = new FormData();
      formData.append('data', JSON.stringify(this.Videos[this.SelectedVideo]));
      if (this.FileVideo) {
        formData.append('video', this.FileVideo);
        //formData.append('miniatura', this.FileVideoMiniatura);
      }
      if (this.FileMiniatura) {
        formData.append('miniatura', this.FileMiniatura);
      }
      this.videosService.create(formData).subscribe((res) => {
        console.log('res: ', res);
        //this.toggleModalVideo();
      });
    }
  }

  onFileChangeVideo(event: any) {
    if (event.target.files.length > 0) {
      this.FileVideo = event.target.files[0];
    }
  }
  onFileChangeMiniatura(event: any) {
    if (event.target.files.length > 0) {
      this.FileMiniatura = event.target.files[0];
    }
  }
  ValidarDatos(): boolean {
    if (
      this.Videos[this.SelectedVideo].titulo == '' ||
      this.Videos[this.SelectedVideo].descripcion == '' ||
      this.FileVideo == null ||
      this.FileMiniatura == null
    ) {
      Swal.fire({
        title: 'Error',
        text: 'Todos los campos son obligatorios',
        icon: 'error',
      });
      return false;
    }
    return true;
  }
  cambiosOrden() {
    this.videosService
      .guardarCambiosOrdenVideos(
        this.Videos.map((video) => {
          video.id, video.order;
        })
      )
      .subscribe((res) => {});
  }
}
