export class Pokemon {
    public dexNumber: string;
    public name: string;
    public name_english: string;
    public name_deutsch: string;
    public name_japan: string;
    public nb_type: number;
    public type1: string;
    public type2: string;
    public height: number;
    public weight: number;

    public hp: number;
    public force: number;
    public defense: number;
    public special: number;
    public speed: number;

    public weaknesses_resistances: string[];

    constructor(dexNumber: string, name: string, name_english: string, name_deutsch: string, name_japan: string, nb_type: number, type1: string, type2: string, height: number, weight: number, hp: number, force: number, defense: number, special: number, speed: number, weaknesses_resistances: string[]){
        this.dexNumber = dexNumber;
        this.name = name;
        this.name_english = name_english;
        this.name_deutsch = name_deutsch;
        this.name_japan = name_japan;
        this.nb_type = nb_type;
        this.type1 = type1;
        this.type2 = type2;
        this.height = height;
        this.weight = weight;
        this.hp = hp;
        this.force = force;
        this.defense = defense;
        this.special = special;
        this.speed = speed;
        this.weaknesses_resistances = weaknesses_resistances;
    }
}
