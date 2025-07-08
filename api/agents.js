// api/agents.js
import { supabase } from '../src/lib/supabaseClient.js';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // ■ CREATE A NEW AGENT
  if (req.method === 'POST') {
    const { name, location, full_address, slug } = req.body;
    const { data, error } = await supabase
      .from('agents')
      .insert({ name, location, full_address, slug })
      .single();
    if (error) {
      return res.status(400).json({ error: error.message });
    }
    return res.status(201).json(data);
  }

  // ■ FETCH ALL AGENTS
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('agents')
      .select('id, name, location, full_address, slug, image_url, google_rating, google_review_count, trustpilot_rating, website_url, latitude, longitude')
      .order('id', { ascending: true });
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(data);
  }

  // anything else is not allowed
  res.setHeader('Allow', 'GET, POST, OPTIONS');
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
