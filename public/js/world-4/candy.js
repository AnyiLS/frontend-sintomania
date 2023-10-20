let Candy4 = function(color, id) {
    Object.defineProperty(this, 'color', {value: color, writable: false});
    Object.defineProperty(this, 'id', {value: id, writable: false});

    this.row = null;
    this.col = null;

    this.toString = function() {
        return this.color;
    }
}

Candy4.colors1 = [
    'cat',
    'sun',
    'flower',
    'bacterium',
    'apple',
    'nube'
]

Candy4.colors2 = [
    'sun',
    'cat',
    'bacterium',
    'flower',
    'nube',
    'apple',
]

Candy4.colors3 = [
    'flower',
    'sun',
    'cat',
    'bacterium',
    'nube',
    'apple',
]

Candy4.colors4 = [
    'cat',
    'flower',
    'sun',
    'apple',
    'nube',
    'bacterium',
]