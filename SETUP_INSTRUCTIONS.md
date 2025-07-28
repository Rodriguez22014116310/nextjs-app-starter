# Vite React + Tailwind + Supabase Admin Dashboard

This is a complete admin dashboard application built with Vite, React, TypeScript, Tailwind CSS, and Supabase backend integration.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. **Extract the project files**
   ```bash
   unzip vite-react-supabase-project.zip
   cd vite-react-supabase
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - The `.env` file is already configured with your Supabase credentials
   - If you need to change them, update the values in `.env`:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📁 Project Structure

```
src/
├── components/
│   ├── Auth.tsx              # Authentication component
│   ├── AdminDashboard.tsx    # Main dashboard layout
│   ├── Sidebar.tsx           # Navigation sidebar
│   └── UserRegistration.tsx  # User management interface
├── lib/
│   └── supabase.ts          # Supabase client configuration
├── App.tsx                  # Main app component
└── index.css               # Tailwind CSS imports
```

## 🎨 Features

- **Authentication**: Complete login/signup system with Supabase
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Admin Dashboard**: Professional admin interface
- **User Management**: User registration approval system
- **TypeScript**: Full type safety
- **Modern Stack**: Vite + React + Tailwind + Supabase

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Customization

### Adding New Components
1. Create new component files in `src/components/`
2. Import and use in `AdminDashboard.tsx`

### Styling
- All styles use Tailwind CSS classes
- Global styles in `src/index.css`
- Tailwind config in `tailwind.config.js`

### Database Integration
- Supabase client is configured in `src/lib/supabase.ts`
- Replace mock data in `UserRegistration.tsx` with real Supabase queries
- Example query:
```typescript
const { data, error } = await supabase
  .from('users')
  .select('*')
  .eq('status', 'pending')
```

## 📱 Screenshots

The application includes:
- Clean authentication interface
- Professional admin dashboard
- User registration management
- Responsive sidebar navigation

## 🤝 Support

If you need help with setup or customization, the code is well-documented and follows React best practices.

## 📄 License

This project is ready for commercial use and further development.
