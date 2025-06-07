# Google Homepage Clone

A responsive clone of the Google homepage built with React. This project replicates the UI of Google's search page with responsive design for all device sizes.

## Features

- Responsive design for mobile, tablet, and desktop
- Interactive search box with animation
- Google apps menu dropdown
- Functional search that redirects to Google
- Header and footer navigation

## Project Structure

```
google-homepage-clone/
├── public/                 # Static files
├── src/
│   ├── assests/            # Images and assets
│   │   └── logo.png        # Google logo
│   ├── components/         # React components
│   │   ├── AppMenu.js      # Google apps menu
│   │   ├── Buttons.js      # Search buttons
│   │   ├── Footer.js       # Page footer
│   │   ├── Header.js       # Page header
│   │   ├── LanguageOptions.js # Language selector
│   │   └── SearchBox.js    # Search input box
│   ├── CSS/                # Component styles
│   │   ├── App.css
│   │   ├── AppMenu.css
│   │   ├── Buttons.css
│   │   ├── Footer.css
│   │   ├── Header.css
│   │   ├── LanguageOptions.css
│   │   └── SearchBox.css
│   ├── App.js              # Main app component
│   └── index.js            # Entry point
└── package.json            # Dependencies and scripts
```

## Installation

1. Clone the repository:
```
git clone <repository-url>
cd google-homepage-clone
```

2. Install dependencies:
```
npm install
```

## Running the Application

Start the development server:
```
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

Create a production build:
```
npm run build
```

This builds the app for production to the `build` folder, optimized for best performance.

## Technologies Used

- React 19
- CSS3 with responsive design
- React Icons

## Responsive Design

The application is fully responsive and works on:
- Mobile devices (< 480px)
- Tablets (< 768px)
- Desktop (> 768px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)