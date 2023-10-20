let Candy2 = function(color, id) {
    Object.defineProperty(this, 'color', {value: color, writable: false});
    Object.defineProperty(this, 'id', {value: id, writable: false});

    this.row = null;
    this.col = null;

    this.toString = function() {
        return this.color;
    }
}

Candy2.colors1 = [
    'cat',
    'sun',
    'flower',
    'bacterium',
    'nube',
    'apple',
]

Candy2.colors2 = [
    'cat',
    'sun',
    'flower',
    'apple',
    'nube',
    'bacterium',
]
Candy2.colors3 = [
    'flower',
    'sun',
    'apple',
    'bacterium',
    'cat',
    'nube',
]
Candy2.colors4= [
    'sun',
    'cat',
    'bacterium',
    'flower',
    'apple',
    'nube',
]
