/**
 * Author: Sara George
 * Date: 11/16/2024
 * File Name: taco-stand.spec.js
 * Description: 
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods

// serveCustomer method test
function testServeCustomer() {
  const tacoStand = new TacoStandEmitter();
  tacoStand.on ('serve',(customer) => {
    assert.strictEqual(customer, 'John Doe');
    console.log("testServeCustomer method test passed.")
  });
  try {
    tacoStand.serveCustomer('John Doe');
  } catch (err) {
    console.error ('Failed testServeCustomer: ${err}');
    return false;
  }
}

// prepareTaco method test
function testPrepareTaco() {
  const tacoStand = new TacoStandEmitter();
  tacoStand.on('prepare', (taco) => {
    assert.strictEqual(taco, 'Beef Taco');
    console.log("testPrepareTaco method test passed.");
  });
  try {
    tacoStand.serveCustomer('Beef Taco');
  } catch (err) {
    console.error ('Failed TestPrepareTaco: ${err}');
    return false;
  }
}

//handleRush method test
function testHandleRush() {
    const tacoStand = new TacoStandEmitter();
    tacoStand.on('rush', (rush) => {
      assert.strictEqual(rush, 'Lunch Rush');
      console.log("testHandleRush method test passed.");
    });
    try {
      tacoStand.handleRush('Lunch Rush');
    } catch (err) {
      console.error ('Failed testHandleRush: ${err}');
      return false;
    }
  }

  testServeCustomer();
  testPrepareTaco();
  testHandleRush();

  