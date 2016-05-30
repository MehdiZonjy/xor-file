#!/usr/bin/env node

var program = require('commander');
var xor_file = require('./xor-file');

program.arguments('<file>')
    .option('-s,--seed <seed>', 'the seed to xor the file aganist. Default 50')
    .option('-o, --output <output>', 'output file. Default \'<file>.enc\'')
    .action((file) => {
        var output = program.output || (file+'.enc');
        var seed  = program.seed || 50;
        xor_file(file,output,seed);
    }).parse(process.argv);

