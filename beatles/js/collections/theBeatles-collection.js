var theBeatles = new Backbone.Collection();

var beatle = new Beatle({id: 1, firstName: 'john',   lastName: 'Lennon'});
theBeatles.add(beatle);

beatle = new Beatle({id: 2, firstName: 'paul',   lastName: 'McCartney'});
theBeatles.add(beatle);

beatle = new Beatle({id: 3, firstName: 'george', lastName: 'Harrison'});
theBeatles.add(beatle);

beatle = new Beatle({id: 4, firstName: 'ringo',  lastName: 'Starr'});
theBeatles.add(beatle);