import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

// Only create client if credentials are provided
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Check if Supabase is configured
export const isSupabaseConfigured = () => Boolean(supabase);

// Database helper functions
export const fetchProfile = async () => {
  if (!supabase) return null;
  
  try {
    const { data, error } = await supabase
      .from('profile')
      .select('*')
      .single();
    
    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
    return data;
  } catch (err) {
    console.error('Supabase error:', err);
    return null;
  }
};

export const fetchProjects = async () => {
  if (!supabase) return [];
  
  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
    return data;
  } catch (err) {
    console.error('Supabase error:', err);
    return [];
  }
};

export const fetchResume = async () => {
  if (!supabase) return [];
  
  try {
    const { data, error } = await supabase
      .from('resume')
      .select('*')
      .order('order_index', { ascending: true });
    
    if (error) {
      console.error('Error fetching resume:', error);
      return [];
    }
    return data;
  } catch (err) {
    console.error('Supabase error:', err);
    return [];
  }
};

export const fetchLinks = async () => {
  if (!supabase) return [];
  
  try {
    const { data, error } = await supabase
      .from('links')
      .select('*')
      .order('order_index', { ascending: true });
    
    if (error) {
      console.error('Error fetching links:', error);
      return [];
    }
    return data;
  } catch (err) {
    console.error('Supabase error:', err);
    return [];
  }
};
