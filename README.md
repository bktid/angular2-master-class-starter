# Angular 2 Master Class

This is the Angular 2 Master Class exercise repository. Here's where you'll build your Angular application throughout this training.

Please make sure to follow our [Preparation Guide](http://thoughtram.io/prepare-for-your-training.html) to set up your machine **before** you come to the class.

If not done already, clone this repository using:

```
$ git clone https://github.com/thoughtram/angular2-master-class-starter.git
```

Done? Great, now install the dependencies (this might take a little while):

```
$ cd angular2-master-class-starter
$ npm install
```

Start the rest api backend by executing:

```
$ npm run rest-api
```

Then run the application by executing:

```
$ ng serve
```

Then open up your browser at `http://localhost:4200`

Have fun and good luck!

Christoph & Pascal & Thomas

# Routing exercises

## Ex 1 child routes

* de link naar new werkte niet meer --> kwam omdat deze route nu lager staat dan /contact/:id, waardoor "new" als een id wordt gezien :-/
* de mannen van thoughtram geven in de contact-list.component nog een style aan het active contact via: routerLinkActive="active"

## Ex 2 childcan deactivate

* opaquetoken werkt niet met navigation guard, zie https://github.com/angular/angular/issues/13774
* ik vind het maar vies om state te moeten bijhouden, ik zou liever willen kunnen zien waar ik op geklikt heb...

## Ex 4 resolvers

* de detail component werkte niet meer met route.snapshot omdat de ngOnInit niet meer afging wegens reuse van de component.
* nu we een resolver gebruiken werkt snapshot wel terug, omdat we de code uit de ngOnInit gehaald hebben.
* de code in ngOnInit wordt nu ook simpeler: je moet niet meer flatmappen op de observable van this.route.params
* we moeten in de ngOnInit nog steeds subscriben op route.data, want we hebben nog steeds een ngOnInit die gereused wordt en niet telkens afgaat...