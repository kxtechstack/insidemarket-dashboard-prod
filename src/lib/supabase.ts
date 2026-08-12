import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://db-prod.152-228-233-227.sslip.io';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_KEY || 'eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJyb2xlIjogImFub24iLCAiaXNzIjogInN1cGFiYXNlIiwgImlhdCI6IDE3ODYzNjcxODcsICJleHAiOiAyMTAxNzI3MTg3fQ.8Q3XNudzsJoXuo8o-DSEhlJJmamHUKRIU8fTVOoz7Qk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
