"use strict";

var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require("events").EventEmitter;
var _ = require("lodash");
var assign = require("object-assign");
var CHANGE_EVENT = "change";

var _authors = []; //private

var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function(){
        return _authors;
    },

    getAuthorById: function(id){
        return _.find(_authors, {id: id});
    }
});

Dispatcher.register(function(action){
    switch(action.actionType) {
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors
            AuthorStore.emitChange();
            break;
        default:
            //no operator
    }
});

module.exports = AuthorStore;