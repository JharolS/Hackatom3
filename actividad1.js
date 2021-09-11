let seaCreatures = ['whale', 'octopus', 'squid', 'octopus', 'starfish', 'shark', 'fish', 'cuttlefish'];

const isCephalopod = (creature) => {
    return ['cuttlefish', 'octopus'].includes(creature);
}

// seaCreatures.find(isCephalopod);

console.log(seaCreatures.find(isCephalopod));

// findIndex()

console.log(seaCreatures.findIndex(isCephalopod));