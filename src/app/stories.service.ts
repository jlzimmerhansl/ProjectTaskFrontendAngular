import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Story } from './stories/story';

@Injectable({
  providedIn: 'root',
})
export class StoriesService {
  constructor(private http: HttpClient) {}
}
