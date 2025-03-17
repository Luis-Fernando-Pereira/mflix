const mysql = require('mysql2/promise');

async function conectar()
{
    const conexao = await mysql.createConnection({
        host     : 'localhost',
        port     :  3306,
        user     : 'root',
        password : 'root',
        database : 'mflix' 
    });

    console.log('conecato ao bd mflix');
    return conexao;
}

conectar();