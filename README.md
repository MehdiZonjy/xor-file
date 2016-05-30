#XOR-File
a simple nodejs cli that reads a file as an input and encrypts it using **XOR** operator.

for help use


```
>xor-file --help

 Usage: xor-file [options] <file>

  Options:

    -h, --help             output usage information
    -s,--seed <seed>       the seed to xor the file aganist. Default 50
    -o, --output <output>  output file. Default '<file>.enc'
```



#Example:


##to encrypt: 
```
xor-file my-image.jpg --seed 40 --output my-image.enc
```
##to decrypt:
```
xor-file my-image.enc --seed 40 --output my-image2.jpg
```
 *you need to pass the same seed you used to encrypt the file*

