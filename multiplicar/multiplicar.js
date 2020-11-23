
const fs = require('fs');

let listarTabla = (base,limite=10)=>{
    let data='';
    for(let i=1;i<=limite;i++){
        data += (`${base} * ${i} = ${base*i}\n`);
    }
    console.log(data);
}

let  crearArchivo = (base)=>{
    return new Promise((resolve,reject)=>{
        let data='';
            if(!Number(base)){
                reject(`El valor introducido ${base} no es un numero`) 
                return;          
             }
        for(let i=1;i<=10;i++){
            data += (`${base} * ${i} = ${base*i}\n`);
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`,data,(err)=>{
            if(err) throw reject(err)
            else
                resolve(`el archivo tabla${base}.txt ha sido creado`)
            
        });
    
    });
}


module.exports = {
    crearArchivo,
    listarTabla
}; 




