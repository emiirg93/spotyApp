import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  loading: boolean;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  Buscar(termino: String) {
    this.loading = true;
    
      this._spotifyService.getArtista(termino)
        .subscribe((data: any) => {
          //console.log(data.artists.items);
          this.artistas = data;
          this.loading = false;
        })

  }
}
