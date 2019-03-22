export class Quote {
    public showDesc:boolean;
    constructor(public id:number, public quote:string,public author:string, public publisher:string,public newDate:Date){
        this.showDesc=false
    }
    
}
