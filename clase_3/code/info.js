



// un 'remote method'
Perro.saluden = function(cb) {
    cb(null, 'Guau! ' + msg);
};

Perro.remoteMethod('saluden', {
    accepts: {
        arg: 'msg',
        type: 'string'
    },
    returns: {
        arg: 'greeting',
        type: 'string'
    }
});



// un 'remote method' no estatico
Perro.prototype.ladraTuNombre = function(cb) {
    var data = 'Guau! soy ' + this.nombre;
    cb(null, data);
};
Perro.remoteMethod('ladraTuNombre', {
    isStatic: false,
    accepts: [],
    returns: {
        arg: 'ladrido',
        type: 'string'
    },
    http: {
        verb: 'get',
        path: '/ladraTuNombre'
    }
});


// un 'remote method' POST
Perro.prototype.ladraLoSiguiente = function(msg, cb) {
    var data =
        'Soy ' + this.nombre +
        '!! y ladro así -> ' + msg;
    cb(null, data);
};
Perro.remoteMethod('ladraLoSiguiente', {
    isStatic: false,
    accepts: [{
        arg: 'msg',
        type: 'string'
    }],
    returns: {
        arg: 'ladrido',
        type: 'string'
    },
    http: {
        verb: 'post',
        path: '/ladraLoSiguiente'
    }
});





// un 'remote method' POST
Perro.prototype.ladraEstasDosCosas = function(msg, msg2, cb) {
    var data =
        'Soy ' + this.nombre +
        '!! y ladro así -> ' + msg +
        'o tambien así -> ' + msg2;
    cb(null, data);
};
Perro.remoteMethod('ladraEstasDosCosas', {
    isStatic: false,
    accepts: [{
        arg: 'msg',
        type: 'string'
    }, {
        arg: 'msg2',
        type: 'string'
    }],
    returns: {
        arg: 'ladrido',
        type: 'string'
    },
    http: {
        verb: 'post',
        path: '/ladraEstasDosCosas'
    }
});






var app = require('../../server/server');
var Noders = app.models.Noders;
