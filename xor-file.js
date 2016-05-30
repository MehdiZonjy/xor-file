var fs = require('fs');

function encrypt(input, output, seed) {
    console.log('reading from '+input);
    fs.readFile(input, function(error, buffer) {
        if (error) throw error;
        console.log('encrypting file using '+seed);
        for (var i = 0, l = buffer.length; i < l; i++) {
            buffer[i] = buffer[i] ^ seed;

        }
        console.log('writing to'+output)
        fs.writeFile(output, buffer,function (error) {
            if (error) throw err;
            console.log('saved..');
        });
    });


}
module.exports=encrypt;