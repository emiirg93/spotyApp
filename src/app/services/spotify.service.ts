import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        "Bearer BQAk2g42Nj5TSH4NwxgYLOxRiIiTHJe1_uWT-p0EYk70ZftHHFUZrVj-gKy0g3sAH-3p_n1DlYoB3kiGIuc"
    });
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {
      headers
    });
  }
}
