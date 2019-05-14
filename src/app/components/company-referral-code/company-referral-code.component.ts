import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReferralService } from 'src/app/services/referral.service';
import { CompanyReferralCodeResponse } from 'src/app/models/company-referral-code-response';
import { CompanyCodeModel } from 'src/app/models/company-code-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-referral-code',
  templateUrl: './company-referral-code.component.html',
  styleUrls: ['./company-referral-code.component.css']
})
export class CompanyReferralCodeComponent implements OnInit {
   
  private companyId: number;
  public loading: boolean;
  public companyReferral :CompanyReferralCodeResponse ;


  constructor(private activatedRoute: ActivatedRoute, private referralService: ReferralService) {
    this.loading = false;
    
   }

   
  ngOnInit() {
    let id: string = this.activatedRoute.snapshot.paramMap.get("id");
    //let extractedName: string = this.activatedRoute.snapshot.paramMap.get("name")
    this.companyId = +id;
     console.log(this.companyId);
     //console.log(extractedName);
     console.log(id);
    this.loading = true;

    let observable: Observable<CompanyReferralCodeResponse>;
    observable = this.referralService.getReferralCodes(this.companyId);
    
    observable.subscribe(
      response => {
        this.loading = false;
        this.companyReferral= response;
        console.log(response);
        console.log(this.companyReferral.Model.Name);

        
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    )
  }
    
}
