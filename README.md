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
* wat is nog het verschil tussen de switchmap oplossing en mijn oplossing?