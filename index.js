var Resource = require('deployd/lib/resource'),
    Collection = require('deployd/lib/resources/collection')
    util = require('util') ;

function FakeCollection(name, options) {
    Collection.apply(this, arguments);

    if(this.config && this.config.name){
        if (options) {
            this.store = options.db && options.db.createStore(this.config.name);
        }

        this.properties = require("../../resources/" + this.config.name + "/config.json").properties;

    }
}
module.exports = FakeCollection;
util.inherits(FakeCollection, Collection);
FakeCollection.events  = ['Get', 'Validate', 'Post', 'Put', 'Delete'];
/*
FakeCollection.dashboard = {
    pages: ["Index", "Events"]
}*/
FakeCollection.basicDashboard = {
    settings: [{
        name: 'name',
        type: 'text',
        description: "the name of the collection to fake"
    }]
};

FakeCollection.label = "Fake Collection";
