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
        "Bearer BQC2o4bvnur3bKsYnRFylTG7pL76phWx9viykS4O0xJlyqeyXua6hea-T6c6-WdY_GxpLTa-oW39ptAfGpk"
    });

    return this.http.get(url, { headers });

  }


  getNewReleases() {

    return this.getQuery(`browse/new-releases?limit=20`)
    .pipe(map(data => data["albums"].items));
  }

  getArtista(termino: String) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map(data => data["artists"].items));
  }
}
