export class Quote{
  public showQuote:boolean;
  constructor(public id:number, public publisher:string, public quote:string){
    this.showQuote=false
  }
}
