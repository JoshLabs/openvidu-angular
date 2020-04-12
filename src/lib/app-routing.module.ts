import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoRoomComponent } from './video-room/video-room.component';

const routes: Routes = [
  { path: ':roomName', component: VideoRoomComponent }
];

@NgModule({
  exports: [RouterModule],
})
export class AppRoutingModule {}
