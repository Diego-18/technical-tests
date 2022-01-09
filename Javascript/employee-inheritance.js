/**
 * The goal of this problem is to use prototypal inheritance in Javascript.
 * Implement inheritance as described below-
 * Create a function Employee that takes a single parameter and assigns it to member variable 'title'.
 * Add the following functions to the Employee prototype -
 * setTitle - This function take a single parameter and assigns it to the title member variable.
 * getTitle - This function returns the member variable title.
 * Create a function Engineer that - inherits from parent Employee.
 * takes 2 parameters - title (String) and isManager (boolean) and assigns it to parent's member variable title and self's member variable isManager. 
 * Add these functions to Engineer's existing prototype - setIsManager - This function take a single parameter and assigns it to the member variable isManager.
 * getIsManager - This function returns the member variable isManager.
 * NOTE - The stub code takes care of testing the implementation. Make sure to inherit the parent. This is being tested too.
 *  
 */

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding("ascii");
let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (chunk) {
    inputString += chunk;
});
process.stdin.on("end", function () {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
  return inputString[currentLine++];
}

function Employee(title) {
    this.title = title;

    this.setTitle = function(title) {
        this.title = title;
    }

    this.getTitle = function() {
        return this.title;
    }

    this.toString = function() {
        return this.title;
    }

    this.getClassName = function() {
        return "Employee";
    } 
}

function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;

    this.setIsManager = function(isManager) {
        this.isManager = isManager;
    }
    
    this.getIsManager = function() {
        return this.isManager;
    }

    this.setTitle = function(title) {
        this.title = title;
    }

    this.getTitle = function() {
        return this.title;
    }

    this.toString = function() {
        return this.title + " " + this.isManager;
    }

    this.getClassName = function() {
        return "Engineer";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    var inputs = readLine().split(' ');
    var engineerObject = new Engineer(inputs[0], inputs[1].toLowerCase() === 'true');

    ws.write(`Initial Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)
    
    engineerObject.setTitle(readLine());
    engineerObject.setIsManager(readLine().toLowerCase() === 'true');
    
    ws.write(`Final Employee Profile - Title is ${engineerObject.getTitle()}. ${engineerObject.getIsManager() ? 'Is' : 'Is not'} a Manager\n`)
    
    ws.write(`Engineer.prototype has property setTitle: ${Engineer.prototype.hasOwnProperty('setTitle')}\n`);
    ws.write(`Engineer.prototype has property getTitle: ${Engineer.prototype.hasOwnProperty('getTitle')}\n`);
    ws.write(`Engineer.prototype has property setIsManager: ${Engineer.prototype.hasOwnProperty('setIsManager')}\n`);
    ws.write(`Engineer.prototype has property getIsManager: ${Engineer.prototype.hasOwnProperty('getIsManager')}\n`);
}