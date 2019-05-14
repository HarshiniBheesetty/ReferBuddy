import { Component, OnInit } from '@angular/core';
import { CompaniesResponseModel } from 'src/app/models/companies-response-model';
import { ReferralService } from 'src/app/services/referral.service';
import { Observable } from 'rxjs';
import { CompanyModel } from 'src/app/models/company-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public loading: boolean;
  public companies: CompanyModel[];
  public searchKey: string;
  public filteredCompanies: CompanyModel[];


  constructor(private referralService: ReferralService) {

    this.loading = false;
    this.searchKey = "";
    this.filteredCompanies=[]


  }

  public ngOnInit(): void {
    this.loading = true;
    
    let observable: Observable<CompaniesResponseModel>;
    observable = this.referralService.getCompanies();

    observable.subscribe(
      response => {
        this.loading = false;
        console.log(response);
        this.companies = response.Model;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    )
  }


  public onSearch(): void {

    console.log(this.searchKey);
    this.filteredCompanies = [];
    if (this.searchKey !== "") {

      for (var i = 0; i < this.companies.length; i++) {
        if (this.companies[i].Name.includes(this.searchKey)) {
          this.filteredCompanies.push(this.companies[i]);
        }
      }
      
    }
    console.log(this.filteredCompanies);
    
  }
  
}
