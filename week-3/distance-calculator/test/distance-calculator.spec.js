"use strict";

const assert = require('assert');
const calculateDistanceAU = require('../src/distance-calculator');

function calculateDistance(planet1, planet2) {
  const astronomicalUnits = {
      Mercury: 0.39,
      Venus: 0.72,
      Earth: 1,
      Mars: 1.52,
      Jupiter: 5.2,
      Saturn: 9.58,
      Uranus: 19.22,
      Neptune: 30.05
  };

  const distance = Math.abs(astronomicalUnits[planet1] - astronomicalUnits[planet2]);
  return distance;
}

//testEarthToMars should pass
function testEarthToMars() {
  try {
    assert.strictEqual(calculateDistance('Earth', 'Mars'), 0.52);
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

//testUranusToMercury should fail
function testUranusToMercury() {
  try {
    assert.strictEqual(calculateDistance('Uranus', 'Mercury'), 0.52);
    return true;
  } catch (error) {
    console.error(`Failed testUranusToMercury: ${error.message}`);
    return false;
  }
}

//testNeptuneToJupiter
function testNeptuneToJupiter() {
  try {
    assert.strictEqual(calculateDistance('Neptune', 'Jupiter'), 24.85);
    return true;
  } catch (error) {
    console.error(`Failed testNeptuneToJupiter: ${error.message}`);
    return false;
  }
}

// Call your test functions here


testEarthToMars();

testNeptuneToJupiter();

testUranusToMercury();