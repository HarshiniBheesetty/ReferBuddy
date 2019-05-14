import { HttpHeaders } from "@angular/common/http";

export class Servicehelper {
    public static getHostUrl() : string {
        return "http://13.127.207.248:86/";
    }

    public static getGenericHeader() : HttpHeaders {
        return new HttpHeaders({
            "Content-Type": "application/json"
          });
    }

    public static getAuthemticHeader() : HttpHeaders {
        return new HttpHeaders({
            "Content-Type": "application/json"
           
          });
    }
}