import { Observable } from 'rxjs';

export interface Widget {
    getTitle(): string;
    update(): Observable<string>;
}
