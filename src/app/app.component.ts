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
      allergies: '7',
    },
    {
      title: 'Varm bernaisesaus',
      allergies: '3, 7, 13',
    },
    {
      title: 'Kaldrørt bernaisesaus',
      allergies: '3',
    },
    {
      title: 'Rødvinsaus',
      allergies: '12',
    },
    {
      title: 'Soppsaus',
      allergies: '7',
    },
  ];
  steakSides: Array<BeefSide> = [
    {
      title: 'Pommes Bistro',
      allergies: '1',
    },
    {
      title: 'Friterte båtpoteter',
      allergies: '1',
    },
    {
      title: 'Fløtegratinerte poteter',
      allergies: '7',
    },
    {
      title: 'Saltbakte småpoteter med aioli',
      allergies: '1, 3, 10',
    },
    {
      title: 'Bakt potet med ost og kryddersmør',
      allergies: '7',
    },
  ];
  pizzaExtras: Array<MenuItem> = [
    {
      title: 'Rømmedressing',
      price: '25',
      allergies: '3, 7',
    },
    {
      title: 'Bernaisesaus',
      price: '25',
      allergies: '3',
    },
    {
      title: 'Hvitløksdressing',
      price: '25',
      allergies: '3, 7, 9',
    },
    {
      title: 'En ekstra ingrediens',
      price: '30',
    },
  ];
  burgerSideOrders: Array<MenuItem> = [
    {
      title: 'Ektra poteter',
      price: '50',
    },
        {
      title: 'Ekstra bacon',
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
      allergies: '10',
    },
    {
      title: 'Friterte løkringer',
      price: '30',
      allergies: '1',
    },
    {
      title: 'Mozarellasticks',
      price: '30',
      allergies: '1, 7',
    },
    {
      title: 'Grillede Champignons',
      price: '25',
    },
    {
      title: 'Smørdampet mais',
      price: '25',
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
    {
      title: 'Ekstra kjøtt (vanlig)',
      price: '70',
    },
        {
      title: 'Ekstra kjøtt (200gram)',
      price: '300',
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
  ];
  potatos: Array<MenuItem> = [
    {
      title: 'm/ost, skinke, mais, dressing, kryddersmør',
      allergies: '3, 7, 10',
      price: '175',
    },
    {
      title: 'm/ost, pepperoni, mais, dressing, kryddersmør',
      allergies: '3, 7, 10',
      price: '175',
    },
    {
      title: 'm/ost, spicy biff, mais, dressing, kryddersmør',
      allergies: '3, 7, 10',
      price: '185',
    },
  ];
  starters: Array<MenuItem> = [
    {
      title: 'Innbakte kjempereker tempura',
      subtitle: 'Serveres med salat, dressing, aioli og sweet chili.',
      allergies: '1, 2, 3, 10',
      price: '150',
    },
    {
      title: 'Snack basket, fin å dele, nok til 2',
      subtitle:
        'Crispy tender chicken, løkringer, mozzarellasticks, jalapeno cheese poppers, nachochips, salsa og hvitløksdressing.',
      allergies: '1, 3, 7, 9, 10 + bygg',
      price: '240',
    },
    {
      title: 'Nacho snack',
      subtitle: 'Varme nachochips gratinert med ost. Salsa og rømme.',
      allergies: '7',
      price: '120',
    },
  ];
  burgers = [
    {
      title: 'Classic cheese',
      subtitle: 'ost, ketchup, yellow mustard, løk, sylteagurk.',
      allergies: '1, 3, 7, 10',
      price: '195',
    },
    {
      title: 'Chipotle chilli mayo',
      subtitle:
        'ost, chipotle chili mayo, salat, jalapeno.',
      allergies: '1, 3, 7, 10',
      price: '195',
    },
    {
      title: 'Bacon cheeseburger',
      subtitle: 'ost, dressing, salat, løk, tomat, bacon.',
      allergies: '1, 3, 7, 10',
      price: '210',
    },
    {
      title: 'BBQ burger',
      subtitle: 'ost, hvitløksdressing, salat, løk, tomat, bbq bourbon og løkringer.',
      allergies: '1, 3, 7, 9, 10',
      price: '235',
    },
    {
      title: 'Veggieburger',
      subtitle:
        'Grønnsaksburger med ost, chipotle chili mayo, salat, løk, tomat.',
      allergies: '1,3,7 + havre',
      price: '185',
    },
  ];
  steaks: Array<MenuItem> = [
    { title: 'Indrefilet 200 gram', price: '415' },
    { title: 'Entrecôte', price: 'kr. 1.9kr pr g' },
  ];
  kokkensSpesial: Array<MenuItem> = [
    {
      title: 'Pepper-Jack',
      subtitle:
        'Marinert i hjemmelaget peppermarinade av whiskey. Serveres med grønnsaker, friterte båtpoteter og peppersaus',
      allergies: '1, 7',
      price: '435',
    },
    {
      title: 'Biff Jameson',
      subtitle:
        'Marinert i hjemmelaget peppermarinade av irsk whiskey. Serveres med grønnsaker, friterte båtpoteter og soppsaus.',
      allergies: '1, 7',
      price: '435',
    },
    {
      title: 'Folkets plankestek',
      subtitle:
        'Indrefilet av storfe, serveres på eik-planke med grønnsaker, grillet tomat, gratinert potetmos og valgfri saus.',
      allergies: '7, 12',
      price: '435',
      popular: true,
    },
    {
      title: 'Mexicana',
      subtitle:
        'Indrefilet av storfe, serveres med salat, pommes bistro, nachochips, grillet jalapeno, mais og mexikansk saus.',
      allergies: '1, 7, 10',
      price: '435',
    },
  ];
  otherGrillDishes: Array<MenuItem> = [
    {
      title: 'Spicy chicken',
      subtitle:
        'Bbq-krydret kyllingfilet servert med rømme, salat, dressing og valgfri potet.',
      allergies: '3, 7, 10',
      price: '290',
    },
    {
      title: 'Kylling crispy tender',
      subtitle:
        'Sprøfriterte prinsessefileter servert med bbq-saus, salat, dressing og valgfri potet.',
      allergies: '3, 9, 10',
      price: '290',
    },
    {
      title: 'Kyllingfilet cajun style',
      subtitle:
        'Grillet kyllingfilet og bacon, gratinert med ost. Serveres med salat, dressing bearnaisesaus og valgfri potet.',
      allergies: '3, 7, 10',
      price: '295',
    },
    {
      title: 'Kylling philadelphia',
      subtitle:
        'Kyllingfilet med salat, dressing, stekt bacon, philadelphiasaus og valgfri potet.',
      allergies: '3, 7, 10',
      price: '295',
    },
    {
      title: 'Kokkens spareribs',
      subtitle:
        'Marinerte, grillede backloinribs. Serveres med smørdampet mais, coleslaw, salat, dressing og barbequesaus. Serveres med saltbakte småpoteter.',
      allergies: '1, 3, 7, 10',
      price: '330',
      popular: true,
    },
    {
      title: 'Folkets biffsnadder',
      subtitle:
        'Strimlet indrefilet av storfe med salat, dressing stekte grønnsaker, valgfri saus og valgfri potet.',
      allergies: '3, 10',
      price: '315',
    },
  ];
  salads: Array<MenuItem> = [
    {
      title: 'Husets Cæsarsalat',
      subtitle:
        'Romanosalat, agurk, rødløk, orginal Cæsardressing, parmesan og krutonger. Toppet med bacon og kyllingfilet.',
      allergies: '1, 3, 4, 7, 10 + bygg',
      price: '220',
      popular: true,
    },
    {
      title: 'Folkets biffsalat',
      subtitle:
        'Frisk salat med biff, mais, agurk, tomat, løk, paprika og dressing',
      allergies: '1, 3, 7, 9, 10',
      price: '220',
    },
    {
      title: 'Ost & skinkesalat',
      subtitle:
        'Frisk salat med ost og skinke, mais, agurk, tomat, løk, paprika og dressing.',
      allergies: '1, 3, 7, 10',
      price: '210',
    },
  ];
  pastas: Array<MenuItem> = [
    {
      title: 'Spaghetti vegetar',
      subtitle: 'Med friske grønnsaker, pesto og fløtesaus',
      allergies: '1, 7, 8',
      price: '220',
    },
    {
      title: 'Penne beef',
      subtitle:
        'Penne, indrefilet av storfe, løk, paprika, pesto og fløtesaus',
      allergies: '1, 7, 8',
      price: '240',
    },
    {
      title: 'Spaghetti carbonara',
      subtitle: 'Spaghetti med bacon, fløte og eggeplomme',
      allergies: '1, 3, 7',
      price: '240',
    },
    {
      title: 'Penne spicy chicken',
      subtitle: 'Penne, godt krydret fløtesaus, kyllingfilet og parmesan',
      allergies: '1, 7',
      price: '230',
    },
  ];
  fishes: Array<MenuItem> = [
    {
      title: 'Laks brochette',
      subtitle:
        '2 grillspyd med laks. Serveres med salat, dressing, rømme, soya og valgfri potet.',
      allergies: '3, 4, 6, 7, 10',
      price: '255',
    },
    {
      title: 'Fish & chips',
      subtitle:
        'Servert på tradisjonelt vis med remulade, agurksalat og pommes bistro.',
      allergies: '1, 3, 4, 7',
      price: '255',
    },
    {
      title: 'Innbakte kjempereker temprua sweet & sour',
      subtitle:
        'Store sprøstekte scampi serveres med salat, dressing sweet chili, rømme og valgfri potet.',
      allergies: '1, 2, 3, 7, 10',
      price: '255',
    },
  ];
  pizzas: Array<MenuItem> = [
    {
      title: 'Margerita',
      subtitle: 'Ost',
      allergies: '1, 7',
      price: '155/265',
    },
    {
      title: 'Vesuvio',
      subtitle: 'Skinke',
      allergies: '1, 7',
      price: '160/270',
    },
    {
      title: 'American BBQ',
      subtitle: 'Bbq-marinert biff, ananas, paprika og løk.',
      allergies: '1, 7, 10',
      price: '170/280',
      popular: true,
    },
    {
      title: 'Spicy meat',
      subtitle: 'Pepperoni, skinke, bacon, kjøttdeig, løk STERK.',
      allergies: '1, 7',
      price: '170/280',
    },
    {
      title: 'Miss porky',
      subtitle: 'Skinke, fersk tomat, champignons, paprika.',
      allergies: '1, 7',
      price: '170/280',
    },
    {
      title: 'Pepperoni dream',
      subtitle: 'Pepperoni, ananas og løk.',
      allergies: '1, 7',
      price: '170/280',
    },
    {
      title: 'Folkets favoritt',
      subtitle: 'Biff, pepperoni, kjøttdeig, skinke, mais.',
      allergies: '1, 7, 10',
      price: '170/280',
    },
    {
      title: 'Terri',
      subtitle: 'Skinke, bacon, ferske champignons og løk.',
      allergies: '1, 7',
      price: '170/280',
    },
    {
      title: 'Solør',
      subtitle: 'Biff, pepperoni og skinke.',
      allergies: '1, 7, 10',
      price: '170/280',
    },
    {
      title: 'Veggie',
      subtitle: 'Ferske champignons, tomatskiver, paprika og rødløk.',
      allergies: '1, 7',
      price: '170/280',
    },
    {
      title: 'Bære kjøtt',
      subtitle: 'Biff, skinke, bacon og kylling.',
      allergies: '1, 7, 10',
      price: '170/280',
    },
    {
      title: 'Steak & chips',
      subtitle: 'Biff, løk, paprika, pommes bistro og bearnaisesaus.',
      allergies: '1, 3, 7, 10',
      price: '170/280',
    },
    {
      title: 'Kompis',
      subtitle:
        'Biff, kjøttdeig, løk, paprika, jalapenos, tacokrydder, tacosaus STERK.',
      allergies: '1, 7, 10',
      price: '170/280',
    },
    {
      title: 'Customers choice',
      subtitle: 'Velg garnityr selv, inntil 5 ingredienser.',
      allergies: '1, 7',
      price: '180(Liten)/300(Stor)',
    },
    {
      title: 'Glutenfri pizza',
      subtitle: 'Velg en pizza fra menyen / sammensett din egen.',
      allergies: '-',
      price: '200',
    },
  ];
  children: Array<MenuItem> = [
    {
      title: 'Plain hamburger med pommes bistro',
      subtitle: 'hamburger med pommes bistro',
      allergies: '1',
      price: '125',
    },
    {
      title: 'Pølse med pommes bistro',
      subtitle: 'Pølse med pommes bistro',
      allergies: '1',
      price: '120',
    },
    {
      title: 'Fish & chips',
      subtitle: 'med remulade og pommes frites bistro',
      allergies: '1, 3, 4',
      price: '150',
    },
    {
      title: 'Kylling',
      subtitle: 'Kyllingfilet med pommes bistro, salat, dressing og bearnaisesaus',
      allergies: '1, 3, 10',
      price: '150',
    },
    {
      title: 'Spareribs',
      subtitle: 'med pommes bistro, salat og dressing',
      allergies: '1, 3, 10',
      price: '150',
    },
  ];
  desserts: Array<MenuItem> = [
    {
      title: 'Creme brulee',
      subtitle: 'Klasisk karameldessert',
      allergies: '3, 7',
      price: '135',
    },
    {
      title: 'Oreo cheesecake',
      subtitle: 'Hjemmelaget ostekake, serveres med vaniljeis, krem, kjeks (1,3,7,13) og sjokoladesaus.',
      allergies: '1, 7',
      price: '145',
    },
      {
      title: 'Hjemmelaget peanutcake',
      subtitle: 'Serveres med vaniljeis, krem, kjeks (1,3,7,13) og karamellsaus.',
      allergies: '1, 3, 5, 7 + bygg',
      price: '145',
    },
    {
      title: 'Iskrem',
      subtitle: '3 kuler vaniljeis med krem, kjeks (1,3,7,13) og sjokoladesaus.',
      allergies: '1, 3, 7',
      price: '125',
    },
    {
      title: 'Banansplitt',
      subtitle: '3 kuler vaniljeis med banan, krem, kjeks (1,3,7,13), strøssel og sjokoladesaus.',
      allergies: '1, 3, 7',
      price: '145',
    },
    {
      title: 'Sjokoladefondant',
      subtitle: 'Sjokoladefondant med vaniljeis, kjeks (1,3,7,13) og melis.',
      allergies: '1, 3, 7',
      price: '135',
    },
    {
      title: 'Tinas Pavlova',
      subtitle: 'Hjemmelaget Pavlova med krem og bær.',
      allergies: '3, 7',
      price: '135',
    },
  ];
  drinks: Array<MenuItem> = [
    { title: 'Te', price: '35' },
    { title: 'Kaffe, koffeinfri kaffe', price: '35' },

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
