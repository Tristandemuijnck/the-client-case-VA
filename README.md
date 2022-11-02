# Toolgankelijkheid Vervoerregio Amsterdam

## Titel
Toolgankelijkheid - Een overzicht van toegankelijkheidsverbeteringen voor het verbeteren van toegankelijkheid op een website of app.

## :pencil2: Beschrijving
Dit is de repository van mijn uitvoering van the client case - Vervoerregio Amsterdam.

De tool is gemaakt voor de user story: 
> "Als organisatie wil ik een overzicht van toegankelijkheidsverbeteringen kunnen bekijken, zodat ik een gevoel kan krijgen wat er moet gebeuren om mijn website/app toegankelijker te maken op het terrein van waarneembaarheid, robuustheid, begrijpelijkheid en bedienbaarheid"

### Preview
![home](https://user-images.githubusercontent.com/43402897/195668597-52511514-9cc2-4a91-a856-d0be7d19a44c.png)

## :mag: Kenmerken

### :page_facing_up: HTML

Voor de layout maak ik gebruik van: 

  `<main>`
  `<section>`
  `<article>`
  `<nav>`
  
### :art: CSS

Een belangrijk css onderdeel zijn de media queries voor een goede responsiveness op verschillende device groottes:

```
@media (min-width: 1024px) {} - Desktop
@media (min-width: 768px) and (max-width: 1023px) {} - Tablet
@media (min-width: 320px) and (max-width: 767px) {} - Mobile
```

### :loop: JavaScript

Een belangrijk stukje JavaScript is de code voor het openen en sluiten van de cards. Dit gebeurt middels een `style.setProperty`.

```
function switchDisplay(id, buttonId){
    let elementId = document.getElementById(id);
    let button = document.getElementById(buttonId);
    
    if(elementId.style.display == 'none'){
        elementId.style.setProperty('display', 'flex');
        button.innerHTML = "Minder info";
    }
    else if(elementId.style.display == 'flex'){
        elementId.style.setProperty('display', 'none');
        button.innerHTML = "Meer info";
    }
}
```

### Live versie
Voor een live versie van het project: http://tristanva2.student.fdnd.nl/

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
