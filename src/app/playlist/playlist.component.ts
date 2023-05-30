import { Component, OnInit } from '@angular/core';
import { Track } from '../track';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
})
export class PlaylistComponent implements OnInit {
  playlistForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.playlistForm = this.formBuilder.group({
      title: [null],
      author: [null],
      time: [null],
    });
  }
  onSubmitForm() {
    console.log(this.playlistForm);
  }
}
