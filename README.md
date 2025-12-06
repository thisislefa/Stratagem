# Stratagem — Dynamic Grid Statistics Component

## Project Overview
Stratagem is an advanced statistics visualization component featuring an intelligent CSS Grid layout with intersection-based animated counters. Designed as a modular web component, it combines sophisticated design with performant animations for showcasing metrics and strategic partnerships.

## Live Preview
[View Live Demo](https://thisislefa.github.io/Stratagem) | [GitHub Repository](https://github.com/thisislefa/stratagem)

## Technical Architecture

### Core Technology Stack
- **HTML5**: Semantic markup with Web Components readiness
- **CSS3**: Advanced Grid layout with CSS Custom Properties
- **Vanilla JavaScript**: Intersection Observer API with smooth animations
- **Web Components**: Custom element architecture for framework-agnostic use

### Key Features
- **Responsive CSS Grid**: Complex multi-column layouts with intelligent breakpoints
- **Performance-Optimized Animations**: RequestAnimationFrame with easing functions
- **Intersection Observer**: Counters trigger only when visible
- **Glassmorphism Effects**: Modern visual design with backdrop-filter
- **Accessibility First**: WCAG 2.1 compliant with ARIA support

## Installation & Usage

### As a Web Component
```html
<!-- Include the component -->
<script type="module" src="https://cdn.jsdelivr.net/gh/thisislefa/stratagem@latest/dist/stratagem.js"></script>

<!-- Use the custom element -->
<stratagem-component>
  <!-- Optional: Pass data via attributes or slots -->
</stratagem-component>
```

### NPM Package
```bash
npm install @thisislefa/stratagem
```

```javascript
// ES6 Import
import { StratagemComponent } from '@thisislefa/stratagem';
import '@thisislefa/stratagem/dist/stratagem.css';

// Register the component
customElements.define('stratagem-component', StratagemComponent);
```

### Framework Integration

#### React
```jsx
import React from 'react';
import Stratagem from '@thisislefa/stratagem/react';

function App() {
  const stats = [
    { value: 50, suffix: '+', label: 'Happy clients', index: '[01]' },
    { value: 200, suffix: '+', label: 'Projects delivered', index: '[02]' }
  ];

  return (
    <Stratagem
      headline="More than a service. A strategic design partner."
      stats={stats}
      imageUrl="https://example.com/team.jpg"
    />
  );
}
```

#### Vue 3
```vue
<template>
  <StratagemComponent
    :headline="headline"
    :stats="stats"
    :image-url="imageUrl"
  />
</template>

<script setup>
import { StratagemComponent } from '@thisislefa/stratagem/vue';

const headline = 'More than a service. A strategic design partner.';
const stats = [
  { value: 50, suffix: '+', label: 'Happy clients', index: '[01]' },
  { value: 200, suffix: '+', label: 'Projects delivered', index: '[02]' }
];
</script>
```

#### Angular
```typescript
import { Component } from '@angular/core';
import { StratagemModule } from '@thisislefa/stratagem/angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StratagemModule],
  template: `
    <stratagem-component
      [headline]="headline"
      [stats]="stats"
      [imageUrl]="imageUrl"
    ></stratagem-component>
  `
})
export class DashboardComponent {
  headline = 'More than a service. A strategic design partner.';
  stats = [
    { value: 50, suffix: '+', label: 'Happy clients', index: '[01]' },
    { value: 200, suffix: '+', label: 'Projects delivered', index: '[02]' }
  ];
}
```

## Configuration Options

### Component Attributes
```html
<stratagem-component
  headline="Your custom headline"
  link-label="Learn more about our story"
  image-url="https://example.com/image.jpg"
  theme="dark"
  animation-duration="2000"
  animation-threshold="0.3"
></stratagem-component>
```

### Data Structure
```javascript
const config = {
  // Required
  stats: [
    {
      value: 50,
      suffix: '+', // Can be '+', '%', or custom symbol
      label: 'Happy clients across various industries',
      index: '[01]' // Optional index label
    }
  ],
  
  // Optional
  headline: 'More than a service. A strategic design partner.',
  linkLabel: 'Learn more about our story',
  linkUrl: '/about',
  imageUrl: 'https://example.com/team.jpg',
  imageAlt: 'Team collaboration session',
  
  // Theme configuration
  theme: {
    primaryColor: '#ff4d15',
    backgroundColor: '#ffffff',
    cardBackground: '#f6f8fc',
    textColor: '#111111',
    mutedColor: '#555555'
  },
  
  // Animation settings
  animation: {
    duration: 2000,
    easing: 'easeOutQuad',
    threshold: 0.3,
    staggerDelay: 100
  }
};
```

## Advanced Usage

### Dynamic Content Loading
```javascript
// Fetch data from API and update component
async function loadStratagemData() {
  const response = await fetch('/api/statistics');
  const data = await response.json();
  
  const component = document.querySelector('stratagem-component');
  component.stats = data.stats;
  component.headline = data.headline;
}

// Event listeners
document.querySelector('stratagem-component').addEventListener('animationComplete', (event) => {
  console.log('All counters have animated:', event.detail);
});

document.querySelector('stratagem-component').addEventListener('statClick', (event) => {
  console.log('Stat card clicked:', event.detail);
});
```

### Custom Styling
```css
/* Override CSS Custom Properties */
stratagem-component {
  --color-primary: #0070ff;
  --color-bg: #f8f9fa;
  --border-radius: 20px;
  --font-family: 'Inter', 'Helvetica Neue', sans-serif;
}

/* Target internal parts with ::part */
stratagem-component::part(stat-card) {
  border: 2px solid var(--color-primary);
}

stratagem-component::part(stat-value) {
  font-size: 4rem;
  font-weight: 700;
}

stratagem-component::part(header) {
  font-size: 3.5rem;
  line-height: 1.1;
}
```

## Performance Optimization

### Bundle Optimization
```javascript
// Tree-shaking with ES modules
import { StatAnimation, GridLayout } from '@thisislefa/stratagem/core';

// Lazy loading
const StratagemComponent = () => import('@thisislefa/stratagem');

// Dynamic imports for specific features
if ('IntersectionObserver' in window) {
  import('@thisislefa/stratagem/animations');
}
```

### Image Optimization
```html
<stratagem-component>
  <picture slot="image">
    <source srcset="team.webp" type="image/webp">
    <source srcset="team.jpg" type="image/jpeg">
    <img src="team.jpg" alt="Team collaboration" loading="lazy" decoding="async">
  </picture>
</stratagem-component>
```

## Accessibility Features

### Built-in Accessibility
- **Keyboard Navigation**: Full tab and arrow key support
- **Screen Reader Optimized**: ARIA labels and live regions
- **Reduced Motion Support**: Respects `prefers-reduced-motion`
- **Focus Management**: Visible focus indicators
- **Color Contrast**: WCAG 2.1 AA compliant

### Custom ARIA Labels
```html
<stratagem-component
  aria-label="Company statistics dashboard"
  stat-aria-label="statistic"
  stat-role="figure"
></stratagem-component>
```

## Development Setup

### Local Development
```bash
# Clone the repository
git clone https://github.com/thisislefa/stratagem.git
cd stratagem

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Run linting
npm run lint
```

### Project Structure
```
stratagem/
├── src/
│   ├── components/     # Web Component source
│   ├── styles/        # CSS and design tokens
│   ├── animations/    # Animation utilities
│   ├── utils/         # Helper functions
│   └── index.js       # Main entry point
├── dist/              # Built files
├── examples/          # Usage examples
├── tests/             # Test suites
├── docs/              # Documentation
└── package.json
```

## Contributing

### How to Contribute
We welcome contributions from the community! Here's how you can help:

1. **Report Issues**: Found a bug? Create an issue with detailed steps to reproduce
2. **Request Features**: Have an idea? Submit a feature request with use cases
3. **Improve Documentation**: Help make our docs better for everyone
4. **Submit Code**: Fix bugs or add features via pull requests

### Contribution Guidelines
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Ensure linting passes: `npm run lint`
6. Commit changes: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Development Workflow
```bash
# Setup development environment
npm install

# Run development server with hot reload
npm run dev

# Run tests
npm test
npm run test:watch  # Watch mode

# Build for production
npm run build

# Preview production build
npm run preview
```

### Code Standards
- Follow existing code style and patterns
- Write meaningful commit messages
- Include tests for new features
- Update documentation as needed
- Ensure accessibility compliance
- Optimize for performance

### Testing Your Changes
```bash
# Run all tests
npm test

# Run specific test suites
npm run test:unit      # Unit tests
npm run test:integration # Integration tests
npm run test:e2e       # End-to-end tests

# Generate coverage report
npm run test:coverage
```

## Community & Support

### Get Help
- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For questions and community support
- **Documentation**: For API reference and guides
- **Examples**: For implementation patterns

### Stay Updated
- **GitHub Releases**: Follow releases for updates
- **Changelog**: Review breaking changes and new features
- **Twitter**: Follow [@thisislefa](https://twitter.com/thisislefa) for announcements

## License
Stratagem is released under the MIT LIcense. You are free to use, modify, and distribute this component in personal and commercial projects.

## Acknowledgments
- Built by [Lefa](https://github.com/thisislefa)
- Inspired by modern dashboard design patterns
- Thanks to all contributors and the open source community



