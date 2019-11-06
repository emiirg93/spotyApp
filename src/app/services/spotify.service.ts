import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  getQuery(query: String) {
    const url = `https://api.spotify.com/v1/${query}`

    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQBI-ilWt3x0Aj8sGTgFjO-ALCusBZv1g2ZFlwx8j7d9vxm1YhkXXBAFBdUzAXqqXANfXXiwIMQM8T8z_7Y"
    });

    return this.http.get(url, { headers });

  }


  getNewReleases() {

    return this.getQuery(`browse/new-releases?limit=20`)
      .pipe(map(data => data["albums"].items));
  }

  getArtista(termino: String) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map(data => data["artists"].items));
  }
}
