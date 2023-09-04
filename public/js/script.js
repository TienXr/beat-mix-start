// Drum Arrays
let kicks = Array.from({ length: 16 }, () => false);
let snares = Array.from({ length: 16 }, () => false);
let hiHats = Array.from({ length: 16 }, () => false);
let rideCymbals = Array.from({ length: 16 }, () => false);

const toggleDrum = (arrName, index) => {
    if (index >= 0 && index < 16) {
        if (arrName == "kicks") {
            kicks[index] = !kicks[index]
        } else if (arrName == "snares") {
            snares[index] = !snares[index]
        } else if (arrName == "hiHats") {
            hiHats[index] = !hiHats[index]
        } else if (arrName == "rideCymbals") {
            rideCymbals[index] = !rideCymbals[index]
        }
    }
}

const clear = (arrName) => {
    if (arrName == "kicks") {
        kicks = kicks.map(item => false)
    } else if (arrName == "snares") {
        snares = snares.map(() => false)
    } else if (arrName == "hiHats") {
        hiHats = hiHats.map(() => false)
    } else if (arrName == "rideCymbals") {
        rideCymbals = rideCymbals.map(() => false)
    }
}

const invert = (arrName) => {
    if (arrName == "kicks") {
        kicks = kicks.map((item) => !item)
    } else if (arrName == "snares") {
        snares = snares.map((item) => !item)
    } else if (arrName == "hiHats") {
        hiHats = hiHats.map((item) => !item)
    } else if (arrName == "rideCymbals") {
        rideCymbals = rideCymbals.map((item) => !item)
    }
}

const getNeighborPads = (x, y, size) => {
    const neighbors = [];

    if (x < 0 || y < 0 || y >= size || x >= size) {
        return neighbors
    }
    // Check and add the neighbor to the left
    if (x > 0) {
      neighbors.push([x - 1, y]);
    }
  
    // Check and add the neighbor to the right
    if (x < size - 1) {
      neighbors.push([x + 1, y]);
    }
  
    // Check and add the neighbor above
    if (y < size - 1) {
      neighbors.push([x, y + 1]);
    }
  
    // Check and add the neighbor below
    if (y > 0) {
      neighbors.push([x, y - 1]);
    }
  
    return neighbors;
}
