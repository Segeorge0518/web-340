"use strict";
const assert = require("assert");
const plantModule = require("../src/plant-list");

function testGetPlants(){
    const plants = plantModule.getPlants();
    assert.strictEqual(plants.length, 3, "Initial plants array should have three elements");
    assert.strictEqual(plants[0].name, "Rose", "First plant should be Rose");
}

function testAddPlant() {
    plantModule.addPlant("Lavender", "Herb");
    const plants = plantModule.getPlants();
    assert.strictEqual(plants.length, 4, "Plants array should have 4 elements after adding Lavender");
    assert.strictEqual(plants[3].name, "Lavender", "Last plant should be Lavender")
}

testGetPlants();
testAddPlant();

console.log("All tests passed!")