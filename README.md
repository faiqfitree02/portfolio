# Faiq's Portfolio

A beautiful, modern portfolio website built with React JS and Supabase.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800)

## Features

- 🎨 **Modern Design** - Dark theme with vibrant coral accents
- ⚡ **Fast & Responsive** - Optimized for all devices
- 🗄️ **Supabase Integration** - Dynamic content management
- 🎬 **Smooth Animations** - Powered by Framer Motion
- 📱 **Mobile First** - Fully responsive design

## Sections

1. **Hero** - Introduction with avatar and quick stats
2. **Resume** - Experience and education timeline with skills
3. **Projects** - Showcase of work with filtering
4. **Links** - Social media and contact buttons
5. **Footer** - Navigation and quick links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier works great)

### Installation

1. **Clone or navigate to the project**
   ```bash
   cd portfolio-faiq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_SUPABASE_URL=your_supabase_project_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Supabase Setup

Create these tables in your Supabase database:

### `profile` table
```sql
CREATE TABLE profile (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT,
  bio TEXT,
  avatar_url TEXT,
  email TEXT,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### `projects` table
```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  tech_stack TEXT[],
  live_url TEXT,
  github_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### `resume` table
```sql
CREATE TABLE resume (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL, -- 'experience' or 'education'
  title TEXT NOT NULL,
  organization TEXT,
  location TEXT,
  start_date DATE,
  end_date DATE,
  description TEXT,
  skills TEXT[],
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### `links` table
```sql
CREATE TABLE links (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  icon TEXT, -- github, linkedin, twitter, globe, etc.
  color TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Demo Mode

The portfolio includes fallback demo data, so it works even without Supabase connected. A banner will show when running in demo mode.

## Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --accent: #ff6b4a;        /* Main accent color */
  --bg-primary: #0a0a0f;    /* Background color */
  --text-primary: #f5f5f7;  /* Text color */
}
```

### Fonts
The portfolio uses:
- **Syne** - For headings and body text
- **JetBrains Mono** - For code and technical elements

## Tech Stack

- React 18
- Framer Motion (animations)
- Supabase (database)
- React Icons
- CSS3 (custom properties, grid, flexbox)

## Deployment

Build for production:
```bash
npm run build
```

Deploy the `build` folder to your hosting service (Vercel, Netlify, etc.)

## License

MIT License - feel free to use this for your own portfolio!

---

Made with ❤️ by Faiq
