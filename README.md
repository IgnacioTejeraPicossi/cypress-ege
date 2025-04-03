# Cypress EGE Test Suite

## Description
This project contains automated end-to-end tests for the EGE website using Cypress. The test suite covers various aspects of the website including menu navigation, content verification, and functionality testing.

## Features
- Menu and submenu navigation testing
- Homepage content verification
- Cookie widget functionality testing
- Image and figure caption testing
- Production environment testing
- HTML processing tests
- Logo presence verification
- Multi-site testing capabilities

## Prerequisites
- Node.js (Latest LTS version recommended)
- npm (Comes with Node.js)

## Installation
1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

## Configuration
The project can be configured to run tests against different environments:
- Local development: `http://localhost:8080`
- Test environment: `https://ege-xp7test.enonic.cloud/digernes`
- Production environment: Configure in `cypress.config.js`

To change the target environment, modify the `baseUrl` in `cypress.config.js`.

## Running Tests
To open Cypress Test Runner:
```bash
npx cypress open
```

## Test Structure
- `cypress/e2e/` - Contains all test files
  - `menu.cy.js` - Menu navigation tests
  - `submenu.cy.js` - Submenu functionality tests
  - `homepage.cy.js` - Homepage verification
  - `visores.cy.js` - Viewer functionality tests
  - `CookiebotWidget.cy.js` - Cookie consent tests
  - And more specialized test files...

## Reporting
The project uses Mochawesome for generating test reports. Reports can be found in:
- `cypress/reports/`

## Author
Ignacio Tejera

## License
ISC

## Dependencies
- Cypress v13.15.1
- Mochawesome v7.1.3

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request 
