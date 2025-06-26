git clone https://github.com/EliteArtists/tenant-advocate-api.git
cd tenant-advocate-api

# Set your Supabase URL & anon key in .env.local
cp .env.example .env.local

# Install & run locally
npm install
vercel dev
