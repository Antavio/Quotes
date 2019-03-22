export class Quote {
    public showDesc:boolean;
    constructor(public id:number, public quote:string,public author:string, public publisher:string){
        this.showDesc=false
    }
    
}
