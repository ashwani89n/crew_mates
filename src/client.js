import { createClient } from '@supabase/supabase-js'

const URL = 'https://pdkkmjqbbuagjjkodozc.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBka2ttanFiYnVhZ2pqa29kb3pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNDMwNzQsImV4cCI6MjAxNDYxOTA3NH0._5lazoNtiTRrzcQKnx76c8yypHtrXsvCN-Rgwf14b2U';

export const supabase = createClient(URL, API_KEY);