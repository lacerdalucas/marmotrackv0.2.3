const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8').split('\n').reduce((acc, line) => {
  const [key, ...val] = line.split('=');
  if (key && val.length) acc[key.trim()] = val.join('=').trim().replace(/^['"](.*)['"]$/, '$1');
  return acc;
}, {});

const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  console.log("Checking DB for '3124'...");
  const { data, error } = await supabase
    .from('pedidos_v2')
    .select('id, numero_orcamento, status_comercial')
    .ilike('numero_orcamento', '%3124%');
    
  if (error) console.error("Error:", error);
  else console.table(data);
}

check();
