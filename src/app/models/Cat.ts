export class Cat {
    private _id: number;
    private _nom: string;
    private _age: number;
    private _race: string;
    private _vivant: boolean;

    constructor (id: number, nom: string, age: number, race: string, vivant: boolean){

        this._id = id;
        this._nom = nom;
        this._age = age;
        this._race = race;
        this._vivant = vivant;
    }

    public get nom():string{
        return this.nom;
    }

    public set nom(nom:string){
         this.nom = nom;
    }

    public get age():number{
        return this.age;
    }

    public set age(age:number){
        this.age = age;
    }

    public get race():string{
        return this.race;
   }

    public set race(race:string){
        this.race = race;
   }

    public get vivant():boolean{
        return this.vivant;
   }

    public set vivant(vivant:boolean){
        this.vivant = vivant;
    }

}