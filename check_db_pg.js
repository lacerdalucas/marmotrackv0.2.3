const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:postgres@127.0.0.1:54322/postgres'
});

async function run() {
  await client.connect();
  const res = await client.query("SELECT id, numero_orcamento, status_comercial FROM pedidos_v2 WHERE numero_orcamento LIKE $1", ['%3124%']);
  console.table(res.rows);
  await client.end();
}

run().catch(console.error);
