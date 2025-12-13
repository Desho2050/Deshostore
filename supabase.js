// Import the createClient function directly from Supabase JS library

import * as supabase from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';
// Define Supabase credentials
const SUPABASE_URL = 'https://hrsrtvrrpnwxqhadxhfg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhyc3J0dnJycG53eHFoYWR4aGZnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NTAzOTc5MSwiZXhwIjoyMDgwNjE1NzkxfQ.GGWp25rsNdtBoUgwpbuFBU49NMioKXoEcmBnLBzecJ0';

// Validate that credentials exist
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('Supabase URL or anon key is missing');
}

// Create and export the Supabase client
// Use createClient (imported function) NOT supabase.createClient
export const supabaseClient = supabase.createClient(SUPABASE_URL.trim(), SUPABASE_ANON_KEY.trim());

// Export utility functions
export const escapeHTML = (str) =>
  typeof str === 'string'
    ? str.replace(/[&<>"']/g, (m) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }[m]))
    : str;

export const formatCurrency = (n) => '$' + parseFloat(n || 0).toFixed(2);
