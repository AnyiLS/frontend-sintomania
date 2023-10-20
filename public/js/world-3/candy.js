let Candy3 = function(color, id) {
    Object.defineProperty(this, 'color', {value: color, writable: false});
    Object.defineProperty(this, 'id', {value: id, writable: false});

    this.row = null;
    this.col = null;

    this.toString = function() {
        return this.color;
    }
}

Candy3.colors1 = [
    'cat',
    'flower',
    'nube',
    'sun',
    'apple',
    'bacterium',
]

Candy3.colors2 = [
    'cat',
    'sun',
    'apple',
    'flower',
    'nube',
    'bacterium',
]

Candy3.colors3 = [
    'cat',
    'flower',
    'nube',
    'sun',
    'apple',
    'bacterium',
]

Candy3.colors4 = [
    'flower',
    'cat',
    'sun',
    'nube',
    'bacterium',
    'apple'
]