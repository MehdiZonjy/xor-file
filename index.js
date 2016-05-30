#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');


program.arguments('<file>')
    .option('-s,--seed <seed>', 'the seed to xor the file aganist. Default 50')
    .option('-o, --output <output>', 'output file. Default \'<file>.enc\'')
    .action((file) => {
        var output = program.output || (file+'.enc');
        var seed  = program.seed || 50;
        encrypt(file,output,seed);
    }).parse(process.argv);


function encrypt(input, output, seed) {
    console.log('reading from '+input);
    fs.readFile(input, (error, buffer) => {
        if (error) throw error;
        console.log('encrypting file using '+seed);
        for (var i = 0, l = buffer.length; i < l; i++) {
            buffer[i] = buffer[i] ^ seed;

        }
        console.log('writing to'+output)
        fs.writeFile(output, buffer, (error) => {
            if (error) throw err;
            console.log('saved..');
        })
    });


}
exports=encrypt;