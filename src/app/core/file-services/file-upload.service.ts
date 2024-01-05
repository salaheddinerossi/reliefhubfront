import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, of } from 'rxjs'; // Import 'of' from rxjs
import { Url } from '../../models/url';
import { environment } from "../../../environment";

@Injectable({
    providedIn: 'root'
})
export class FileUploadService {

    private spaceUrl = environment.storageFile; // Your Space URL

    constructor(private httpClient: HttpClient) { }

    getPresignedUrl(fileName: string): Observable<Url> {
        return this.httpClient.get<Url>(`http://localhost:8080/presigned-url`, { params: { fileName } });
    }

    uploadFileToSpaces(file: File): Observable<string> {
        return this.getPresignedUrl(file.name).pipe(
            switchMap(presignedUrl => {
                // Correctly set the headers
                const headers = new HttpHeaders({
                    'Content-Type': file.type, // Use the file's MIME type
                    'x-amz-acl': 'public-read' // Make the file public
                });

                // Make the PUT request to upload the file
                return this.httpClient.put(presignedUrl.url, file, { headers, responseType: 'text' }).pipe(
                    switchMap(() => {
                        // Construct and return the file URL as an Observable
                        const fileUrl = `${this.spaceUrl}/${encodeURIComponent(file.name)}`; // Use 'encodeURIComponent' to encode the file name
                        return of(fileUrl); // Wrap the fileUrl inside an Observable
                    })
                );
            })
        );
    }
}
