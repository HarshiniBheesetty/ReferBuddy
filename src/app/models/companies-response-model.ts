import { CompanyModel } from "./company-model";

export class CompaniesResponseModel {
  public  isValid : boolean;
   public Status : number;
   public Errors : string[];
   public Model  : CompanyModel[];
}
