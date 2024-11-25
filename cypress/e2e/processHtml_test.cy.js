// cypress/e2e/processContentTest.cy.js
describe('processContent function', () => {
    beforeEach(() => {
      // Simuler siden som rendrer innhold med tabeller
      cy.visit('/'); // Bytt med din testside eller mock-side
    });
  
    it('should wrap tables in a div with class "table-wrapper"', () => {
      // Mock HTML-innhold
      const mockHtml = `
        <div>
          <h1>Test Header</h1>
          <table>
            <tr><td>Data 1</td><td>Data 2</td></tr>
          </table>
        </div>
      `;
  
      // Send mock HTML til API-endepunkt som bruker processContent
      cy.request({
        method: 'POST',
        url: 'processContent', // Endre til ditt API-endepunkt
        body: { html: mockHtml },
      }).then((response) => {
        // Validerer at response inneholder riktig struktur
        expect(response.status).to.eq(200);
        const processedHtml = response.body.processedHtml;
        cy.wrap(processedHtml).then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
  
          // Sjekk at tabellen er wrappet korrekt
          const tableWrapper = doc.querySelector('.table-wrapper');
          expect(tableWrapper).to.exist;
          const table = tableWrapper.querySelector('table');
          expect(table).to.exist;
        });
      });
    });
  
    it('should not alter non-table elements', () => {
      const mockHtml = `
        <div>
          <h1>Header</h1>
          <p>Paragraph content</p>
        </div>
      `;
  
      cy.request({
        method: 'POST',
        url: '/api/processContent',
        body: { html: mockHtml },
      }).then((response) => {
        const processedHtml = response.body.processedHtml;
        cy.wrap(processedHtml).then((html) => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
  
          // Sjekk at ikke-tabell-elementer forblir uendret
          expect(doc.querySelector('h1').textContent).to.eq('Header');
          expect(doc.querySelector('p').textContent).to.eq('Paragraph content');
        });
      });
    });
  });
  