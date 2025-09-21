# Data Analyzer

A web-based tool that analyzes social media content and extracts various patterns using regular expressions. This tool helps identify and display different elements commonly found in social media posts.

## Features

- Extracts and displays:
  - Hashtags (#example)
  - Email addresses
  - URLs/Links
  - Phone numbers
  - Credit card numbers
  - Time formats
  - HTML tags
  - Currency amounts
- Provides content statistics:
  - Total elements found
  - Word count
  - Character count
- Real-time analysis
- Duplicate removal
- Mobile-responsive design

## Usage

1. Open `index.html` in your web browser
2. Paste your social media content into the text area
3. Click the "Analyze Content" button
4. View the detailed analysis results below

### Example Input
```
Check out my new project! @john #coding #webdev https://myproject.com
```

## Technical Details

The project uses:
- HTML5 for structure
- CSS3 for styling
- Vanilla JavaScript for functionality
- Regular Expressions (RegEx) for pattern matching

### Regular Expression Patterns

- Hashtags: `/#\w+/g`
- Emails: `/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g`
- URLs: `/\bhttps?:\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\/[^\s]*)?\b/g`
- Phone Numbers: `/\b(\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}\b/g`
- Credit Cards: `/\b(?:\d{4}[- ]?){3}\d{4}\b/g`
- Time Formats: `/\b((1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM))\b|\b((2[0-3]|[01]?[0-9]):[0-5][0-9])\b/gi`
- HTML Tags: `/<\/?[a-zA-Z][^>]*>/g`
- Currency: `/\$\d{1,3}(,\d{3})*(\.\d{2})?/g`

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/data-analyzer.git
```

2. Open `index.html` in your preferred web browser

## File Structure

```
├── index.html      # Main HTML file
├── style.css       # CSS styles
├── index.js        # JavaScript functionality
└── README.md       # Project documentation
```

## Browser Support

- Chrome
- Firefox
- Safari
- Edge
- Opera

## License

MIT License

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request