# 🏮 React Lamp Toggle

Beautiful animated lamp component for theme switching in React applications.

![Lamp Toggle Demo](./demo.gif)

## ✨ Features

- 🎨 Smooth animations with Framer Motion
- 🌓 Perfect for light/dark theme switching
- 📱 Responsive design
- ⚡ TypeScript support
- 🎛️ Customizable size and position
- 🎯 Zero dependencies (except peer deps)

## 📦 Installation

```bash
npm install react-lamp-toggle
# or
yarn add react-lamp-toggle
# or
pnpm add react-lamp-toggle
```

### Peer Dependencies
```bash
npm install react framer-motion
```

## 🚀 Quick Start

```tsx
import React, { useState } from 'react';
import { LampToggle } from 'react-lamp-toggle';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <LampToggle 
        isDark={isDark}
        onToggle={() => setIsDark(!isDark)}
      />
      
      <h1>My App</h1>
      <p>Click the lamp to toggle theme!</p>
    </div>
  );
}
```

## 🎛️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isDark` | `boolean` | - | Current theme state (true = dark, false = light) |
| `onToggle` | `() => void` | - | Callback when lamp is clicked |
| `className` | `string` | `""` | Additional CSS classes |
| `position` | `object` | `{ top: '4px', left: '50%' }` | Custom positioning |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Size variant |
| `animationDuration` | `number` | `0.3` | Animation duration in seconds |

## 🎨 Examples

### Different Sizes
```tsx
<LampToggle size="small" isDark={isDark} onToggle={toggleTheme} />
<LampToggle size="medium" isDark={isDark} onToggle={toggleTheme} />
<LampToggle size="large" isDark={isDark} onToggle={toggleTheme} />
```

### Custom Position
```tsx
<LampToggle 
  position={{ top: '20px', right: '20px' }}
  isDark={isDark} 
  onToggle={toggleTheme} 
/>
```

### With Custom Animation
```tsx
<LampToggle 
  animationDuration={0.8}
  isDark={isDark} 
  onToggle={toggleTheme} 
/>
```

## 🎯 Integration with Theme Libraries

### With Next.js + next-themes
```tsx
import { useTheme } from 'next-themes';
import { LampToggle } from 'react-lamp-toggle';

export function ThemeLamp() {
  const { theme, setTheme } = useTheme();
  
  return (
    <LampToggle
      isDark={theme === 'dark'}
      onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    />
  );
}
```

### With React Context
```tsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { LampToggle } from 'react-lamp-toggle';

export function ThemeLamp() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  
  return (
    <LampToggle
      isDark={isDark}
      onToggle={toggleTheme}
    />
  );
}
```

## 📚 CSS Requirements

Make sure you have Tailwind CSS configured in your project for the styling to work properly.

If you're not using Tailwind, you can create custom CSS classes that match the component's styling needs.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT © [Ozhan Gebesoglu](https://github.com/ozhangebesoglu)

## 🌟 Show Your Support

Give a ⭐️ if this project helped you!
