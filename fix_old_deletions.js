const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:postgres@127.0.0.1:54322/postgres'
});

async function run() {
  await client.connect();
  
  // Find all Cancelado that don't have -EXC-
  const res = await client.query(`
    SELECT id, numero_orcamento 
    FROM pedidos_v2 
    WHERE status_comercial = 'Cancelado' 
      AND numero_orcamento NOT LIKE '%-EXC-%'
  `);
  
  console.log(`Found ${res.rows.length} legacy cancelled orders to clean up.`);
  
  for (const row of res.rows) {
    const timestamp = new Date().getTime();
    const novoNumero = `${row.numero_orcamento}-EXC-${timestamp}`;
    
    await client.query(`
      UPDATE pedidos_v2 
      SET numero_orcamento = $1 
      WHERE id = $2
    `, [novoNumero, row.id]);
    
    console.log(`Updated ${row.numero_orcamento} to ${novoNumero}`);
  }
  
  await client.end();
}

run().catch(console.error);
