# Interactive Card Details Form

A modern, responsive interactive card details form built with Vue 3, TypeScript, and Tailwind CSS. Features real-time card preview updates, comprehensive form validation, and a sleek user interface.

---

![SS](/public/image.png)

## Features

- **Real-time Card Updates** - Card details update instantly as you type
- **Form Validation** - Comprehensive validation with user-friendly error messages
- **Responsive Design** - Optimized for both desktop and mobile devices  
- **Interactive States** - Hover, focus, and active states for all interactive elements
- **Success State** - Clean completion screen with form reset functionality
- **TypeScript** - Full type safety throughout the application
- **Modern UI** - Clean, accessible interface following modern design principles

## Built With

- **Vue 3** - Progressive JavaScript framework with Composition API
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/card-details-form.git
cd card-details-form
```

2. Install dependencies
```bash
npm install
```

3. Add required assets to `src/assets/`:
   - `bg-card-front.png` - Card front background image
   - `bg-card-back.png` - Card back background image  
   - `card-logo.svg` - Card logo

4. Start the development server
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── components/
│   ├── CardFront.vue        # Front card with text overlays
│   ├── CardBack.vue         # Back card with CVC display
│   ├── CardsDisplay.vue     # Container for both cards
│   ├── FormInput.vue        # Reusable form input component
│   ├── CardForm.vue         # Main form component
│   ├── SuccessState.vue     # Success/completion screen
│   └── MainContainer.vue    # Main layout container
├── composables/
│   └── useCardForm.ts       # Form state and logic
├── types/
│   └── index.ts             # TypeScript type definitions
├── assets/                  # Static assets (images, icons)
├── App.vue                  # Root component
├── main.js                  # Application entry point
└── style.css                # Global styles and Tailwind imports
```

## User Interactions

Users can:

- Fill in the form and see card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number is not 16 digits or contains non-numeric characters
  - The expiry date is invalid (month not 01-12)
  - The CVC is not exactly 3 digits
- View optimal layout on any screen size
- Experience smooth hover, active, and focus states
- Complete the form to see a success state
- Reset the form by clicking "Continue" on the success screen

## Validation Rules

- **Cardholder Name**: Required, cannot be empty
- **Card Number**: Must be exactly 16 digits, numbers only, auto-formatted with spaces
- **Expiry Month**: Required, must be 01-12
- **Expiry Year**: Required, 2-digit year format
- **CVC**: Required, must be exactly 3 digits

### Typography

Uses **Space Grotesk** font family for a modern, clean appearance.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Author

Chris Ebube Roland - [@chrisroland](https://github.com/chrisroland)

## Acknowledgments

- Design inspiration from Frontend Mentor challenges