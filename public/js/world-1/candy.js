let Candy = function(color, id) {
    Object.defineProperty(this, 'color', {value: color, writable: false});
    Object.defineProperty(this, 'id', {value: id, writable: false});

    this.row = null;
    this.col = null;

    this.toString = function() {
        return this.color;
    }
}

Candy.colors1 = [
    'cat',
    'sun',
    'bacterium',
    'apple'
]

Candy.colors2 = [
    'sun',
    'bacterium',
    'apple',
    'cat',
]

Candy.colors3 = [
    'bacterium',
    'sun',
    'apple',
    'cat',
]

Candy.colors4 = [
    'apple',
    'cat',
    'sun',
    'bacterium',
]