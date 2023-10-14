//Node.js child_process module creates and manages child processes,
//which are separate instances of the Node.js process that can run 
//concurrently. It helps in executing external commands, running scripts,
//and interacting with other processes within the Node.js application.
//This module is especially useful for handling tasks that require separate processes,
//such as running external binaries, parallel processing, and managing long-running tasks.


const cp = require('child_process')  // Here we dont use ./ because child_prcoess is a built-in module

       

//execSync is a method provided by the child_process module in Node.js.
//executes shell commands synchronously, blocking the program until the
//command completes and returns the result. It's a convenient way to 
//execute commands and get their output directly within your code. 
//However, it can cause your program to hang if the command takes a long time to complete

 cp.execSync('Calc') //opening app


 cp.execSync('start chrome http://w3schools.com') //opening website



console.log('output'+ cp.execSync('node demo.js')) // Opening another modules 