"use strict";

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

module.exports = calculateDistance;