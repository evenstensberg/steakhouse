import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navigateToSection(name: string) {
    document?.getElementById(name)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  title = 'steakhouse';
  allergies = [
    { name: 'Gluten' },
    { name: 'Skalldyr' },
    { name: 'Egg' },
    { name: 'Fisk' },
    { name: 'Peanøtt' },
    { name: 'Soya' },
    { name: 'Melk' },
    { name: 'Nøtter' },
    { name: 'Selleri' },
    { name: 'Sennep' },
    { name: 'Sesam' },
    { name: 'Sulfitt' },
    { name: 'Lupin' },
    { name: 'Bløtdyr' },
  ];
  starters = [
    {
      title: 'Innbakte kjempereker tempura',
      subtitle: 'Serveres med frisk salat, aioli og sweet chili',
      allergies: '1, 2, 3, 10',
      price: '85',
    },
    {
      title: 'Snack basket, fin å dele, nok til 2',
      subtitle:
        'Crispy tender chicken, løkringer, mozarellasticks, jalapeno cheese poppers, nachochips, salsa og hvitløksdip',
      allergies: '1, 3, 7, 10',
      price: '155',
    },
    {
      title: 'Nacho snack',
      subtitle: 'Varme nachodips gratinert med ost. Salsa og rømme',
      allergies: '2, 7',
      price: '75',
    },
  ];
  burgers = [
    {
      title: 'Classic american burger',
      subtitle: 'Med dressing, frisk salat og pommes bistro',
      allergies: '1, 3, 9, 10',
      price: '130',
    },
    {
      title: 'Cajuan burger',
      subtitle:
        'Cajunkrydret burger med dressing, frisk salat og pommes bistro',
      allergies: '1, 3, 9, 10',
      price: '130',
    },
    {
      title: 'Bacon cheeseburger',
      subtitle: 'Med cheddarost, bacon, dressing, frisk salat og rommes bistro',
      allergies: '1, 3, 7, 9, 10',
      price: '150',
    },
  ];
  steaks = [
    { name: 'Indrefilet 150 gram', price: '195' },
    { name: 'Indrefilet 200 gram', price: '235' },
    { name: 'Indrefilet 250 gram', price: '275' },
  ];
  kokkensSpesial = [
    {
      title: 'Pepper-Jack',
      subtitle:
        'Marinert i hjemmelaget peppermarinade av whiskey. Serveres med grønnsaker, friterte båtpoteter og peppersaus',
      allergies: '7, 9',
      price: '255',
    },
    {
      title: 'Biff Jameson',
      subtitle:
        'Marinert i hjemmelaget peppermarinade av irsk whiskey. Serveres med grønnsaker, friterte båtpoteter og soppsaus',
      allergies: '7, 9',
      price: '255',
    },
    {
      title: 'Folkets plankestek',
      subtitle:
        'Indrefilet av okse, serveres på eik-planke med grønnsaker, grillet tomat, gratinert potetmos og valgfri saus',
      allergies: '7, 9',
      price: '255',
      popular: true,
    },
    {
      title: 'Fileto monza',
      subtitle:
        'Indrefilet av okse, serveres med smørdamet mais, grillet tomat, grønnsaker, friterte båtpoteter og gorgonzolasaus',
      allergies: '7',
      price: '255',
    },
  ];
  otherGrillDishes = [
    {
      title: 'Spicy chicken',
      subtitle:
        'Bbq-krydret kyllingfilet servert med rømme, frisk salat og valgfri potet.',
      allergies: '7, 9, 10',
      price: '175',
    },
    {
      title: 'Kylling crispy tender',
      subtitle:
        'Sprøfriterte prinsessefileter servert med bbq-dipp, frisk salat og valgfri potet.',
      allergies: '1',
      price: '190',
    },
    {
      title: 'Kyllingfilet cajun style',
      subtitle:
        'Grillet kyllingfilet og bacon, gratinert med ost. Serveres med frisk salat, jalapeno, barnaisesaus og valgfri potet.',
      allergies: '1, 3, 7, 9',
      price: '175',
    },
    {
      title: 'Kylling philadelphia',
      subtitle:
        'Kyllingfilet med frisk salat, stekt bacon Philadelphiasaus og valgfri potet.',
      allergies: '7',
      price: '175',
    },
    {
      title: 'Kokkens spareribs',
      subtitle:
        'Marinerte, grillede backloinribs. Serveres med smørdampet mais, coleslaw, frisk salat og barbequesaus. Serveres med saltbakte Amandinepoteter',
      allergies: '3, 7, 9, 10',
      price: '235',
      popular: true,
    },
    {
      title: 'Løvbiff',
      subtitle: 'Serveres med frisk salat, valgfri ssaus og valgfri potet',
      allergies: 'Ingen',
      price: '135',
    },
    {
      title: 'Folkets biffsnadder',
      subtitle:
        'Strimlet indrefilet av okse med frisk salat. Stekte grønnsaker, bernaise eller pepersaus med valgfri potet.',
      allergies: '1, 3, 7',
      price: '150',
    },
    {
      title: 'Folkets kyllingsnadder',
      subtitle:
        'Kylling, frisk salat, peppersaus. Velg mellom bulgur, ris eller valgfri potet',
      allergies: '1, 3, 9',
      price: '150',
    },
  ];
  salads = [
    {
      title: 'Husets Cæsarsalat',
      subtitle:
        'Romanosalat, agurk, rødløk, orginal Cæsar dressing. Parmasan, krutonger. Toppet med bacon og kyllingfilet.',
      allergies: '1, 4, 7, 9, 10',
      price: '135',
      popular: true,
    },
    {
      title: 'Folkets biffsalat',
      subtitle:
        'Frisk salat med biff, mais, agurk, tomt, løk, paprika og dressing',
      allergies: '3, 7, 9, 10',
      price: '135',
    },
    {
      title: 'Ost & skinkesalat',
      subtitle:
        'Frisk salat med ost og skinke, mais, agurk, tomat, løk, paprika og dressing.',
      allergies: '3, 7, 9, 10',
      price: '135',
    },
  ];
  pastas = [
    {
      title: 'Spaghetti vegetar',
      subtitle: 'Med friske grønnsaker, pesto og fløtesaus',
      allergies: '7, 8',
      price: '140',
    },
    {
      title: 'Penne beef',
      subtitle:
        'Penne, indrefilet av okse, løk, paprika, gulrot, pesto og fløtesaus',
      allergies: '7, 8',
      price: '140',
    },
    {
      title: 'Spaghetti carbonara',
      subtitle: 'Spaghetti med bacon, fløte og eggeplomme',
      allergies: '3, 7',
      price: '140',
    },
    {
      title: 'Penne spicy chicken',
      subtitle: 'Penne, godt krydret fløtesaus, kyllingfilet og parmesan',
      allergies: '3, 9',
      price: '140',
    },
  ];
  fishes = [
    {
      title: 'Laks brochette',
      subtitle:
        '2 grillspyd med laks, krydret med lima & soya. Serveres med fisk, salat og rømme sammen med valgfri potet.',
      allergies: '1, 4, 6, 7',
      price: '175',
    },
    {
      title: 'Fish & chips',
      subtitle:
        'Servert på tradisjonelt vis med remulade, agurksalat og pommes frites bistro',
      allergies: '1, 3, 4, 10',
      price: '190',
    },
    {
      title: 'Innbakte kjemereker temprua sweet & sour',
      subtitle:
        'Store sprøstekte scampi serveres med frisk salat, sweet chili dip, rømmedip og valgfri potet.',
      allergies: '1, 2, 7',
      price: '190',
    },
  ];
  pizzas = [
    {
      title: 'Margerita',
      subtitle: 'Ost',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'Vesuvio',
      subtitle: 'Skinke',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'American BBQ',
      subtitle: 'Bbq-marinert biff, ananas, paprika og løk',
      allergies: '1, 7',
      price: '120/200',
      popular: true,
    },
    {
      title: 'Spicy meat',
      subtitle: 'Pepperoni, skinke, bacon, kjøttdeig, løk STERK',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'Miss porky',
      subtitle: 'Skinke, fersk tomat, champignons, paprika',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'Pepperoni dream',
      subtitle: 'Speket pepperoni, ananas og løk',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'Folkets favoritt',
      subtitle: 'Biff, speket pepperoni, kjøttdeig, skinke, mais',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'Terri',
      subtitle: 'Skinke, bacon, ferske champignons og løk',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'Solør',
      subtitle: 'Biff, pepperoni og skinke',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'Veggie',
      subtitle: 'Ferske champignons, tomatskiver, paprika og rødløk',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'Bære kjøtt',
      subtitle: 'Biff, skinke, bacon og kylling',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'Stek & chips',
      subtitle: 'Biff, løk, paprika, pommes bistro og bernaisesaus',
      allergies: '1, 7',
      price: '120/200',
    },
    {
      title: 'Taco heaven',
      subtitle:
        'Tacokjøtt, rødløk, jalapenos, tomat, nachochips og rømme STERK',
      allergies: '1, 6, 7',
      price: '120/200',
    },
    {
      title: 'Kompis',
      subtitle:
        'Biff, kjøttdeig, løk, paprika, jalapenos, tacokrydder, tacosaus STERK',
      allergies: '1, 6, 7',
      price: '120/200',
    },
    {
      title: 'Customers choice',
      subtitle: 'Velg garnityr selv, inntil 5 ingredienser',
      allergies: '1, 7',
      price: '140(Liten)/240(Stor)',
    },
    {
      title: 'Glutenfri pizza',
      subtitle: 'Velg en pizza fra menyen / samensett din egen',
      allergies: '',
      price: '200',
    },
  ];
  children = [
    {
      title: 'Hamburger og pommes bistro',
      subtitle: '100gr hamburger med pommes bistro',
      allergies: '1',
      price: '80',
    },
    {
      title: 'Pølse med pommes bistro',
      subtitle: 'Pølse med pommes bistro',
      allergies: '1',
      price: '80',
    },
  ];
  desserts = [
    {
      title: 'Creme brulee',
      subtitle: 'Klasisk karameldessert',
      allergies: '3, 7',
      price: '80',
    },
    {
      title: 'Oreo cheesecake',
      subtitle: 'Hjemmelaget ostekake, serveres med vaniljeis og oreokjeks',
      allergies: '7',
      price: '80',
    },
    {
      title: 'Panna cotta',
      subtitle:
        'Klassisk italiensk fløtedessert, serveres med frisk coulis og bær.',
      allergies: '3, 7',
      price: '80',
    },
    {
      title: 'Marinerte bjørnebær',
      subtitle: 'Med sitrussorbet og eggelikør',
      allergies: '3, 7',
      price: '80',
    },
    {
      title: 'Hjemmelaget peanutcake',
      subtitle: 'Med krem og sjokoladesaus',
      allergies: '1, 3, 5, 7',
      price: '80',
    },
    {
      title: 'Iskrem',
      subtitle: '3 kuler vaniljeis, med krem og saus',
      allergies: '3, 7',
      price: '60',
    },
  ];
  drinks = [
    { name: 'Coca Cola', price: '35' },
    { name: 'Coca Cola Zero', price: '35' },
    { name: 'Pepsi', price: '35' },
    { name: 'Pepsi Max', price: '35' },
    { name: '7 UP', price: '35' },
    { name: 'Solo', price: '35' },
    { name: 'Eplemost', price: '35' },
    { name: 'Appelsinjuice', price: '35' },
    { name: 'Farris', price: '35' },
    { name: 'Farris Lime', price: '35' },
    { name: 'Farris Bris', price: '35' },
    { name: 'Alkoholholdig drikke (Spør betjeningen)', price: '35' },
  ];
}
