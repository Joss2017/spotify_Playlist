import { Component, OnInit } from '@angular/core';
import { Track } from '../Track';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  playlistForm!: Track[];

  ngOnInit(): void { }
  
  
  onSubmitForm() {
    console.log(this.playlistForm);
  }

  
}
