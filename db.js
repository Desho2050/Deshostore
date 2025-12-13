// db.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.0/+esm';

const supabaseUrl = 'https://hrsrtvrrpnwxqhadxhfg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhyc3J0dnJycG53eHFoYWR4aGZnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTAzOTc5MSwiZXhwIjoyMDgwNjE1NzkxfQ.GGWp25rsNdtBoUgwpbuFBU49NMioKXoEcmBnLBzecJ0';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Optional: sanity check
console.log('Supabase client initialized:', !!supabase?.from);

export { supabase };