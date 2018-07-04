import {Observable} from 'rxjs';
import {LoginResponse} from '../models/login.response';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Video} from '../models/video';
import {map} from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.get<LoginResponse>(
      'https://api.invidz.com/api/authenticate',
      {
        params: {
          email,
          password
        }
      }
    );
  }

  getVideos(): Observable<Video[]> {

    const token = localStorage.getItem('TOKEN');

    return this.http.get<{ data: Video[] }>(
      'https://api.invidz.com/api/videos',
      {
        headers: {
          Authorization: 'bearer ' + token
        }
      }
    ).pipe(map(res => res.data));

  }


}
