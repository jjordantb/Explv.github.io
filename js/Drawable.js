'use strict';

export class Drawable {

    constructor(map) {
        this.map = map;
    }

    toLeaflet() {
        throw "toLeaflet is not implemented";
    }

    getName() {
        throw "getName is not implemented";
    }

    toJavaCode() {
        throw "toJavaCode is not implemented";
    }
}