import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://dxukzjeoeoapqsnuczxs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR4dWt6amVvZW9hcHFzbnVjenhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5MTczNjIsImV4cCI6MjA2NTQ5MzM2Mn0.45hPgE4InKVrW5LZIgmKoTyJ9w8nkb5Z4tOeJC_0vhw'
);
