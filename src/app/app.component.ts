import { Component } from '@angular/core';
import { MenuItem, BeefSide } from '../environments/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'steakhouse';
  images = [];
  steakSauce: Array<BeefSide> = [
    {
      title: 'Husets peppersaus',
      allergies: '7, 9',
    },
    {
      title: 'Varm bernaisesaus',
      allergies: '3, 6, 7, 9',
    },
    {
      title: 'Kaldrørt bernaisesaus',
      allergies: '3, 6, 9',
    },
    {
      title: 'Rødvinsaus',
      allergies: '9',
    },
    {
      title: 'Soppsaus',
      allergies: '7',
    },
    {
      title: 'Gorgonzolasaus',
      allergies: '7',
    },
  ];
  steakSides: Array<BeefSide> = [
    {
      title: 'Pommes Bistro',
      allergies: 'Ingen',
    },
    {
      title: 'Friterte båtpoteter',
      allergies: 'Ingen',
    },
    {
      title: 'Ris',
      allergies: 'Ingen'
    },
    {
      title: 'Fløtegratinerte poteter',
      allergies: '7, 9',
    },
    {
      title: 'Saltbakte amandinepoteter med aioli',
      allergies: '3, 10',
    },
    {
      title: 'Bakt potet med ost og kryddersmør',
      allergies: '7, 9',
    },
  ];
  pizzaExtras: Array<MenuItem> = [
    {
      title: 'Rømmedressing',
      price: '20',
      allergies: '3, 7, 9',
    },
    {
      title: 'Hvitløksdressing',
      price: '20',
      allergies: '3, 7, 9',
    },
    {
      title: 'Bernaisesaus',
      price: '20',
      allergies: '3, 7',
    },
    {
      title: 'En ekstra ingrediens',
      price: '20',
    },
  ];
  burgerSideOrders: Array<MenuItem> = [
    {
      title: 'Ektra poteter',
      price: '50',
    },
    {
      title: 'Friterte løkringer',
      price: '30',
      allergies: '1 + bygg',
    },
    {
      title: 'Grillede Champignons',
      price: '25',
    },
    {
      title: 'Grillet bacon',
      price: '25',
    },
    {
      title: 'Ekstra ost',
      price: '20',
      allergies: '7',
    },
    {
      title: 'Barbequesaus',
      price: '20',
      allergies: '9, 10',
    },
    {
      title: 'Smørdampet mais',
      price: '25',
    },
    {
      title: 'Mozarellasticks',
      price: '30',
      allergies: '1, 7',
    },
    {
      title: 'Ektra saus',
      price: '25',
    },
    {
      title: 'Kryddersmør',
      price: '25',
      allergies: '7, 9',
    },
    {
      title: 'Jalapeno cheese poppers',
      price: '30',
      allergies: '1, 7',
    },
    {
      title: 'Coleslaw',
      price: '30',
      allergies: '3, 7',
    },
  ];
  potatos: Array<MenuItem> = [
    {
      title: 'm/ost, skinke, mais, dressing, kryddersmør',
      allergies: '1, 2, 3, 10',
      price: '155',
    },
    {
      title: 'm/ost, pepperoni, mais, dressing, kryddersmør',
      allergies: '1, 2, 3, 10',
      price: '155',
    },
    {
      title: 'm/ost, spicy biff, mais, dressing, kryddersmør',
      allergies: '1, 2, 3, 10',
      price: '155',
    },
  ];
  starters: Array<MenuItem> = [
    {
      title: 'Innbakte kjempereker tempura',
      subtitle: 'Serveres med frisk salat, dressing, aioli og sweet chili.',
      allergies: '1, 2, 3, 6, 10',
      price: '135',
    },
    {
      title: 'Snack basket, fin å dele, nok til 2',
      subtitle:
        'Crispy tender chicken, løkringer, mozzarellasticks, jalapeno cheese poppers, nachochips, salsa og hvitløksdressing.',
      allergies: '1, 3, 7, 9, 10 + bygg',
      price: '220',
    },
    {
      title: 'Nacho snack',
      subtitle: 'Varme nachochips gratinert med ost. Salsa og rømme.',
      allergies: '7',
      price: '110',
    },
  ];
  burgers = [
    {
      title: 'Classic american burger',
      subtitle: 'Med dressing, frisk salat og pommes bistro.',
      allergies: '1, 3, 10',
      price: '175',
    },
    {
      title: 'Cajuan burger',
      subtitle:
        'Cajunkrydret burger med dressing, frisk salat og pommes bistro.',
      allergies: '1, 3, 9, 10',
      price: '175',
    },
    {
      title: 'Bacon cheeseburger',
      subtitle: 'Med cheddarost, bacon, dressing, frisk salat og rommes bistro',
      allergies: '1, 3, 7, 10',
      price: '195',
    },
    {
      title: 'Veggieburger',
      subtitle:
        'Grønnsaksburger med cheddarost, chilimayo, salat og pommes bistro',
      allergies: '1,3,7,9,10 + havre',
      price: '165',
    },
  ];
  steaks: Array<MenuItem> = [
    { title: 'Indrefilet 150 gram', price: '255' },
    { title: 'Indrefilet 200 gram', price: '340' },
    { title: 'Indrefilet 250 gram', price: '415' },
    { title: 'Indrefilet 300 gram', price: '490' },
  ];
  kokkensSpesial: Array<MenuItem> = [
    {
      title: 'Pepper-Jack',
      subtitle:
        'Marinert i hjemmelaget peppermarinade av whiskey. Serveres med grønnsaker, friterte båtpoteter og peppersaus',
      allergies: '7, 9',
      price: '360',
    },
    {
      title: 'Biff Jameson',
      subtitle:
        'Marinert i hjemmelaget peppermarinade av irsk whiskey. Serveres med grønnsaker, friterte båtpoteter og soppsaus',
      allergies: '7, 9',
      price: '360',
    },
    {
      title: 'Folkets plankestek',
      subtitle:
        'Indrefilet av okse, serveres på eik-planke med grønnsaker, grillet tomat, gratinert potetmos og valgfri saus',
      allergies: '7, 9',
      price: '360',
      popular: true,
    },
    {
      title: 'Mexicana',
      subtitle:
        'Indrefilet av okse, serveres med salat, pommes bistro, nachochips, grillet jalapeno og mais og mexikansk saus',
      allergies: '7',
      price: '360',
    },
  ];
  otherGrillDishes: Array<MenuItem> = [
    {
      title: 'Spicy chicken',
      subtitle:
        'Bbq-krydret kyllingfilet servert med rømme, frisk salat og valgfri potet.',
      allergies: '3, 7, 9, 10',
      price: '250',
    },
    {
      title: 'Kylling crispy tender',
      subtitle:
        'Sprøfriterte prinsessefileter servert med bbq-dipp, frisk salat og valgfri potet.',
      allergies: '1, 3, 9, 10',
      price: '250',
    },
    {
      title: 'Kyllingfilet cajun style',
      subtitle:
        'Grillet kyllingfilet og bacon, gratinert med ost. Serveres med frisk salat, jalapeno, barnaisesaus og valgfri potet.',
      allergies: '1, 3, 7, 9, 10',
      price: '250',
    },
    {
      title: 'Kylling philadelphia',
      subtitle:
        'Kyllingfilet med frisk salat, stekt bacon Philadelphiasaus og valgfri potet.',
      allergies: '3, 7, 10',
      price: '250',
    },
    {
      title: 'Kokkens spareribs',
      subtitle:
        'Marinerte, grillede backloinribs. Serveres med smørdampet mais, coleslaw, frisk salat og barbequesaus. Serveres med saltbakte Amandinepoteter',
      allergies: '3, 7, 9, 10',
      price: '295',
      popular: true,
    },
    {
      title: 'Løvbiff',
      subtitle: 'Serveres med frisk salat, valgfri ssaus og valgfri potet',
      allergies: 'Ingen',
      price: '255',
    },
    {
      title: 'Folkets biffsnadder',
      subtitle:
        'Strimlet indrefilet av okse med frisk salat. Stekte grønnsaker, bernaise eller pepersaus med valgfri potet.',
      allergies: '1, 3, 7, 10',
      price: '255',
    },
    {
      title: 'Vegetarfajitas',
      subtitle: 'Grillede grønnsaker, serveres med frisk salat, revet ost, tortillalefser, rømme, guacamole, salsa, nachochips og ris.',
      allergies: '1, 3, 7, 10',
      price: '255'
    }
  ];
  salads: Array<MenuItem> = [
    {
      title: 'Husets Cæsarsalat',
      subtitle:
        'Romanosalat, agurk, rødløk, orginal Cæsar dressing. Parmasan, krutonger. Toppet med bacon og kyllingfilet.',
      allergies: '1, 3, 4, 7, 10 + bygg',
      price: '185',
      popular: true,
    },
    {
      title: 'Folkets biffsalat',
      subtitle:
        'Frisk salat med biff, mais, agurk, tomat, løk, paprika og dressing',
      allergies: '3, 7, 9, 10',
      price: '185',
    },
    {
      title: 'Ost & skinkesalat',
      subtitle:
        'Frisk salat med ost og skinke, mais, agurk, tomat, løk, paprika og dressing.',
      allergies: '1, 3, 7, 9, 10',
      price: '185',
    },
  ];
  pastas: Array<MenuItem> = [
    {
      title: 'Spaghetti vegetar',
      subtitle: 'Med friske grønnsaker, pesto og fløtesaus',
      allergies: '1, 7, 8',
      price: '200',
    },
    {
      title: 'Penne beef',
      subtitle:
        'Penne, indrefilet av okse, løk, paprika, gulrot, pesto og fløtesaus',
      allergies: '1, 7, 8',
      price: '200',
    },
    {
      title: 'Spaghetti carbonara',
      subtitle: 'Spaghetti med bacon, fløte og eggeplomme',
      allergies: '1, 3, 7',
      price: '200',
    },
    {
      title: 'Penne spicy chicken',
      subtitle: 'Penne, godt krydret fløtesaus, kyllingfilet og parmesan',
      allergies: '1, 3, 7, 9',
      price: '200',
    },
  ];
  fishes: Array<MenuItem> = [
    {
      title: 'Laks brochette',
      subtitle:
        '2 grillspyd med laks, krydret med lima & soya. Serveres med frisk salat og rømme sammen med valgfri potet.',
      allergies: '1, 4, 6, 7',
      price: '225',
    },
    {
      title: 'Fish & chips',
      subtitle:
        'Servert på tradisjonelt vis med remulade, agurksalat og pommes frites bistro',
      allergies: '1, 3, 4, 10',
      price: '225',
    },
    {
      title: 'Innbakte kjemereker temprua sweet & sour',
      subtitle:
        'Store sprøstekte scampi serveres med frisk salat, sweet chili dip, rømmedip og valgfri potet.',
      allergies: '1, 2, 3, 7, 10',
      price: '225',
    },
  ];
  pizzas: Array<MenuItem> = [
    {
      title: 'Margerita',
      subtitle: 'Ost',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'Vesuvio',
      subtitle: 'Skinke',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'American BBQ',
      subtitle: 'Bbq-marinert biff, ananas, paprika og løk',
      allergies: '1, 7',
      price: '145/245',
      popular: true,
    },
    {
      title: 'Spicy meat',
      subtitle: 'Pepperoni, skinke, bacon, kjøttdeig, løk STERK',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'Miss porky',
      subtitle: 'Skinke, fersk tomat, champignons, paprika',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'Pepperoni dream',
      subtitle: 'Speket pepperoni, ananas og løk',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'Folkets favoritt',
      subtitle: 'Biff, speket pepperoni, kjøttdeig, skinke, mais',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'Terri',
      subtitle: 'Skinke, bacon, ferske champignons og løk',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'Solør',
      subtitle: 'Biff, pepperoni og skinke',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'Veggie',
      subtitle: 'Ferske champignons, tomatskiver, paprika og rødløk',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'Bære kjøtt',
      subtitle: 'Biff, skinke, bacon og kylling',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'Steak & chips',
      subtitle: 'Biff, løk, paprika, pommes bistro og bernaisesaus',
      allergies: '1, 7',
      price: '145/245',
    },
    {
      title: 'Taco heaven',
      subtitle:
        'Tacokjøtt, rødløk, jalapenos, tomat, nachochips og rømme STERK',
      allergies: '1, 6, 7',
      price: '145/245',
    },
    {
      title: 'Kompis',
      subtitle:
        'Biff, kjøttdeig, løk, paprika, jalapenos, tacokrydder, tacosaus STERK',
      allergies: '1, 6, 7',
      price: '145/245',
    },
    {
      title: 'Customers choice',
      subtitle: 'Velg garnityr selv, inntil 5 ingredienser',
      allergies: '1, 7',
      price: '165(Liten)/260(Stor)',
    },
    {
      title: 'Glutenfri pizza',
      subtitle: 'Velg en pizza fra menyen / samensett din egen',
      allergies: '',
      price: '200',
    },
  ];
  children: Array<MenuItem> = [
    {
      title: 'Hamburger og pommes bistro',
      subtitle: '100gr hamburger med pommes bistro',
      allergies: '1',
      price: '115',
    },
    {
      title: 'Pølse med pommes bistro',
      subtitle: 'Pølse med pommes bistro',
      allergies: '1',
      price: '105',
    },
    {
      title: 'Fish & chips',
      subtitle: 'med remulade, agurksalat og pommes frites bistro',
      allergies: '1, 3, 4, 7, 10',
      price: '135',
    },
    {
      title: 'Kylling',
      subtitle: 'med pommes bistro, salat, dressing og bearnaisesaus',
      allergies: '3, 6, 7, 10',
      price: '140',
    },
    {
      title: 'Spareribs',
      subtitle: 'med pommes bistro, frisk salat og dressing',
      allergies: '3, 9, 10',
      price: '140',
    },
  ];
  desserts: Array<MenuItem> = [
    {
      title: 'Creme brulee',
      subtitle: 'Klasisk karameldessert',
      allergies: '3, 7',
      price: '120',
    },
    {
      title: 'Oreo cheesecake',
      subtitle: 'Hjemmelaget ostekake, serveres med vaniljeis og oreokjeks',
      allergies: '7',
      price: '125',
    },
    {
      title: 'Panna cotta',
      subtitle:
        'Klassisk italiensk fløtedessert, serveres med frisk coulis og bær.',
      allergies: '3, 7',
      price: '125',
    },
    {
      title: 'Marinerte bjørnebær',
      subtitle: 'Med sitrussorbet og eggelikør',
      allergies: '3, 7',
      price: '120',
    },
    {
      title: 'Hjemmelaget peanutcake',
      subtitle: 'Med krem og sjokoladesaus',
      allergies: '1, 3, 5, 7',
      price: '125',
    },
    {
      title: 'Iskrem',
      subtitle: '3 kuler vaniljeis, med krem og saus',
      allergies: '3, 7',
      price: '105',
    },
    {
      title: 'Banansplitt',
      subtitle: '3 kuler vaniljeis med banan, krem, sjokoladesaus og strøssel',
      allergies: '1, 3, 7',
      price: '125',
    },
    {
      title: 'Sjokoladefondant',
      subtitle: 'Sjokoladefondant med vaniljeis og melis',
      allergies: '1, 3, 7',
      price: '115',
    },
    {
      title: 'Tinas Pavlova',
      subtitle: 'Hjemmelaget Pavlova med krem og bær',
      allergies: '3, 7',
      price: '115',
    },
  ];
  drinks: Array<MenuItem> = [
    { title: 'Coca Cola', price: '45' },
    { title: 'Coca Cola uten sukker', price: '45' },
    { title: 'Pepsi', price: '45' },
    { title: 'Pepsi Max', price: '45' },
    { title: '7 Up Free', price: '45' },
    { title: 'Solo', price: '45' },
    { title: 'Eplemost', price: '45' },
    { title: 'Farris', price: '45' },
    { title: 'Farris Lime', price: '45' },
    { title: 'Jarritos', price: '45', popular: true },
  ];
}
