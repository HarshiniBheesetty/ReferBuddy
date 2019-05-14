import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicehelper } from '../helpers/servicehelper';
import { HttpClient } from '@angular/common/http';
import { CompaniesResponseModel } from '../models/companies-response-model';
import { CompanyReferralCodeResponse } from '../models/company-referral-code-response';

@Injectable({
  providedIn: 'root'
})
export class ReferralService {

  constructor(private http: HttpClient) { }

  //defining get companies http call

  public getCompanies() : Observable<CompaniesResponseModel> {
    let url: string = Servicehelper.getHostUrl() + 'api/Company/GetAllCompany';

    console.log(url);

    let header = Servicehelper.getGenericHeader();

    return this.http.get<CompaniesResponseModel>(url, { headers: header});
  }
  //defining one company http call
  public getReferralCodes(id: number) : Observable<CompanyReferralCodeResponse> {
    let url: string = Servicehelper.getHostUrl() + 'api/ReferCode/GetCodeOfCompany?id=' + id;
    console.log(url);

    let header = Servicehelper.getGenericHeader();

    return this.http.get<CompanyReferralCodeResponse>(url, { headers: header});
  }

}