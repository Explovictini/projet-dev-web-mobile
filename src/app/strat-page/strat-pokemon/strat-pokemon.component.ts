import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-strat-pokemon',
  templateUrl: './strat-pokemon.component.html',
  styleUrls: ['./strat-pokemon.component.css']
})

export class StratPokemonComponent implements OnInit {

  @Input() dexNumber!: string;
  @Input() name!: string;
  @Input() nb_type!: number;
  @Input() type1!: string;
  @Input() type2!: string;
  @Input() weaknesses_resistances!: string[];
  @Input() description!: string;

  sprite!: string;

  weaknesses_res_order: string[] = ["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon"];
  weaknesses: string[] = [];
  resistances: string[] = [];
  strong_weaknesses: string[] = [];
  strong_resistances: string[] = [];
  immunities: string[] = [];

  // Map de description stratégique de certains Pokémons
  pokExplanation  = new Map<string, string>([
    ["Tauros", "Tauros est assurément le meilleur Pokémon de sa génération en terme de stratégie (excepté Mew et Mewtwo). Avec près de 70% des équipes possédant un Tauros, celui-ci se distingue par sa puissance de frappe inégalable, avec une attaque Ultralaser stabée surpuissante et physique, contrairement à aujourd'hui où il s'agit d'une attaque spéciale.\n" +
    "Le tour de rechargement après l'utilisation de cette attaque n'étant pas toujours envisageable, on la couple donc avec Plaquage pour des dégâts toujours robustes.\n" +
    "De nos jours, Ultralaser est une attaque qualifiée de mauvaise, auparavant, cela n'était pas le cas car si la cible était mise K.O., le tour de rechargement était évité !\n" +
    "Seuls quelques Pokémons pouvaient donc faire face à Tauros tels que Crustabri, Ronflex ou Flagadoss, mais ceux-ci devaient obligatoirement ce soigner pour ne pas tomber K.O.\n" +
    "L'attaque Blizzard est jouable sur Tauros pour lui permettre de menacer Grolem et Rhinoféros.\n" +
    "Séisme est également une bonne attaque, car elle permet de toucher Ectoplasma de manière très efficace. Mais on préferera souvent jouer Déflagration à la place pour les 30% de chances dee brûlure (qui sont aujourd'hui de 10%).\n"],
    ["Leveinard", "Toujours très puissant aujourd'hui, Leveinard est le 2ème meilleur Pokémon de sa catégorie après Tauros.\n" +
    "Utilisé dans presque 63% des équipes, ce Pokémon était un monstre défensif. Ce qui le rendait plus fort qu'aujourd'hui était que son \"spécial\" de 105 faisait de lui un tank à la fois défensif et offensif. Lors de la séparation du spécial en attaque spéciale et défense spéciale, il a cruellement perdu de sa force.\n" +
    "Il était néanmoins le contre ultime aux Pokémons de type Psy, que rien n'arrêtait.\n" +
    "Avec Reflet, il s'assurait de combler sa faible défense physique qui est un de ces défauts.\n" +
    "Frappe Atlas peut être joué pour des dégâts constants mais Laser Glace est également viable car à l'époque, un Pokémon gêlé ne pouvait plus se dégeler.\n" +
    "E-Coque est une évidence pour ce Pokémon défensif.\n" +
    "Cage-Eclair est une excellente attaque permettant de contrer les menaces offensives de l'adversaire tels que Tauros notamment.\n"],
    ["Ronflex", "Ce Pokémon est le 3ème de sa catégorie, après Leveinard et Tauros. Sa puissance tenait d'une seule attaque: Destruction. Cette attaque ne possédait à l'époque que 130 de puissance, mais avait pour effet de diviser la défense de l'adversaire par 2 avant de le toucher, ce qui revient à une puissance virtuelle de 260! Avec le STAB, on atteint une puissance de 440, ce qui, couplé à une bonne attaque, permet d'assurer le K.O. sur n'importe quel Pokémon.\n" +
    "Son énorme bulk lui permet par ailleurs de toujours placer une Destruction.\n" +
    "Il est également joué avec Plaquage pour faire de bons dégâts et obtenir une chance de paralyser sans subir le contrecoup de Destruction, qui cause son propre K.O.\n" +
    "Il est joué avec Reflet et Repos pour temporiser et se soigner.\n" +
    "A la place de la très puissante Destruction, on peut jouer Ultralaser (qui évite le décès lié à Destruction sans pour autant manquer de dégâts), Seisme ou encore Laser Glace (qui est la meilleure option), car ce sont des attaques permettant de toucher Grolem et Rhinoféros et de potentiellement gêler (avec Laser Glace). Elles permettent également de toucher Ectoplasma qui n'est touchée par aucune attaque normale et permettent, bien que plus faibles, de battre Leveinard, celui-ci n'étant pas mis K.O en un coup par l'attaque Ultralaser de Ronflex (et obligeant donc un tour de rechargement, là où le tour de rechargement est évité si le Pokémon adverse est mis K.O.)\n"],
    ["Noadkoko", "4ème Pokémon le plus puissant de la 4ème génération et étant présent dans quasi 50% des équipes, ce Pokémon se paye le luxe d'avoir un double type extrêmement puissant. En effet, le type Psy est un des meilleurs (si ce n'est le meilleur) de l'époque. Le type Plante, malgré ses nombreuses faiblesses, lui permet d'être immunisé à Poudre Dodo, beaucoup plus fort que de nos jours. En effet, un Pokémon endormi ne pouvait attaquer le tour où il se réveillait.\n" +
    "Noadkoko possède justement Poudre Dodo ce qui lui permettait de temporiser tout en récupérant des PV avec l'attaque Méga-Sangsue. Néanmoins, sa récupération de PV et sa puissance de frappe ne sont pas assez importante avec Méga-Sangsue et ce Pokémon n'est pas utile dans une équipe possédant un Pokémon dôté d'une attaque de sommeil.\n" +
    "Il est également joué avec Psyko, simplement une excellente attaque sur laquelle aucun Pokémon ne peut rentrer.\n" +
    "Explosion possède 170 de puissance de base et a tout comme Destruction le malheur de diviser la Défense de l'adversaire par 2 le tour où cette attaque est lancée. En revanche, elle cause l'évanouissement de Noadkoko. Cette attaque surpuissante ne peut être mise de côté.\n" +
    "La 4ème attaque peut être Damoclès ou Ultralaser car elle permettent de faire de gros dégâts à Alakazam, Leveinard et Lippoutou, de Pokémon possédant une faible Défense et ayant donc tendance à venir sur Noadkoko pour tanker sa redoutable attaque Psyko. Attention néanmoins à Ultralaser qui peut avoir de conséquences catastrophiques si l'adversaire réussit à prédire cette attaque: le temps de rechargement vous immobilisera un tour.\n" +
    "Méga-Sangsue peut être joué mais pêche par sa puissance de 40.\n" +
    "Para-Spore est également viable car elle permet d'infliger une paralysie lorsque l'un des Pokémon de l'équipe de votre adversaire est endormi de Poudre Dodo (règle uniquement valable sur Smogon, cela ne s'applique donc pas sur cartouche).\n"],
    ["Alakazam", "Alakazam est le 5ème meilleur Pokémon de sa catégorie et est un des meilleurs leads que vous puissiez avoir. En effet, sa capacité à frapper vite et fort vous permettra d'infliger de gros dégâts grâce à son attaque Psyko dès le début de la partie ou à paralyser un Pokémon avec Cage-Eclair.\n" +
    "Son type Psy était inarrêtable ce qui faisait de lui un Pokémon présent dans 48% des équipes.\n" +
    "Soin était une attaque beaucoup plus viable que maintenant dû au bon bulk spécial d'Alakazam. La séparation du \"spécial\" en Attaque Spéciale et Défense Spéciale a enlevé l'utilité de Soin, le bulk global d'Alakazam étan devenu équivalent à celui d'une feuille de papier.\n" +
    "Reflet était également utile, car elle permettait de combler le manque de Défense d'Alakazam mais ne l'est plus aujourd'hui puisque sa Défense Spéciale est devenue mauvaise. Frappe Atlas peut être envisagé pour contrer les Pokémon contrant Psyko tels que les Pokémon Psy (Noadkoko, Alakazam ou Flagadoss pour les plus courants) eux-mêmes ou Leveinard.\n"],
  ]);

  // Set stratégique de certains Pokémons
  pokAttacks = new Map<string, string[]>([
    ["Tauros", ["Plaquage", "Ultralaser", "Blizzard", "Séisme/Déflagration"]],
    ["Leveinard", ["Reflet", "Frappe Atlas/Laser Glace", "E-Coque", "Cage Eclair"]],
    ["Ronflex", ["Plaquage", "Reflet", "Repos", "Laser Glace/Destruction/Ultralaser/Séisme"]],
    ["Noadkoko", ["Poudre Dodo", "Psyko", "Explosion", "Damoclès/Para-Spore/Méga-Sangsue/Ultralaser"]],
    ["Alakazam", ["Psyko", "Frappe Atlas/Reflet", "Cage-Eclair", "Soin"]]
  ]);


  constructor() {}

  ngOnInit(): void {

    this.actualiserSprite();

    // Préparer le tableau de faiblesses/résistances
    let i: number = 0;
    for(let ele of this.weaknesses_resistances){
      switch (ele) {
        case "0": {
          this.immunities.push(this.weaknesses_res_order[i]);

          break;
        }
        case "0.25": {
          this.strong_resistances.push(this.weaknesses_res_order[i]);
          break;
        }
        case "0.5": {
          this.resistances.push(this.weaknesses_res_order[i]);
          break;
        }
        case "2": {
          this.weaknesses.push(this.weaknesses_res_order[i]);
          break
        }
        case "4": {
          this.strong_weaknesses.push(this.weaknesses_res_order[i]);
          break;
        }
      }
      i += 1;
    }

  }


  actualiserSprite(): void {
    this.sprite="/assets/sprites/Sprite_"+ this.dexNumber + "_J.png";
  }

}
