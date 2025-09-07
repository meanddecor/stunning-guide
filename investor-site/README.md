# VentureOps Investor Site

A professional investor presentation website for Hotel Consulting and Export Company ventures.

## Features

- 13-page comprehensive investor deck
- Fully responsive design
- Interactive navigation
- Professional styling
- Data visualizations (placeholders for charts)
- Contact forms
- Mobile-friendly

## Structure

```
investor-site/
├── index.html          # Homepage with executive summary
├── css/
│   └── styles.css      # All styling
├── js/
│   └── main.js         # Interactive functionality
├── pages/
│   ├── problem.html    # Problem & Opportunity
│   ├── solutions.html  # Solutions & Service Architecture
│   ├── market.html     # Market & Competitors
│   ├── business-model.html  # Business Model & Unit Economics
│   ├── go-to-market.html    # Go-to-Market Strategy
│   ├── operations.html      # Operations & Organization
│   ├── roadmap.html         # Execution Roadmap
│   ├── risk.html            # Risk & Compliance
│   ├── financials.html      # Financial Overview
│   ├── impact.html          # Impact & Ethics
│   ├── faqs.html            # FAQs
│   └── closing.html         # Closing & Next Steps
└── images/             # (empty - for future assets)
```

## Running Locally

1. Navigate to the project directory:
   ```bash
   cd /workspace/investor-site
   ```

2. Start a simple HTTP server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if http-server is installed)
   npx http-server
   ```

3. Open your browser to `http://localhost:8000`

## Deployment Options

### GitHub Pages
1. Push to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Site will be available at `https://[username].github.io/[repository-name]`

### Netlify
1. Drag and drop the folder to Netlify
2. Get instant deployment with HTTPS

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Traditional Hosting
- Upload all files to any web hosting service
- No server-side requirements (static site)

## Customization

### Company Names
Replace placeholder names "[HotelCo]" and "[ExportCo]" throughout the site with actual company names.

### Contact Information
Update contact details in:
- All footer sections
- `pages/closing.html` contact section

### Financial Data
Replace illustrative numbers with actual projections in:
- `pages/financials.html`
- `pages/business-model.html`
- Homepage statistics

### Branding
- Update colors in `css/styles.css` (CSS variables at the top)
- Replace "VentureOps" with your company name
- Add logo image to replace text logo

## Features to Add

1. **Real Charts**: Replace chart placeholders with Chart.js or D3.js visualizations
2. **Form Backend**: Connect contact forms to a service like Formspree or Netlify Forms
3. **Analytics**: Add Google Analytics or similar tracking
4. **SEO**: Add meta descriptions and Open Graph tags
5. **PDF Export**: Add print styles or PDF generation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Proprietary and confidential. Do not distribute without permission.