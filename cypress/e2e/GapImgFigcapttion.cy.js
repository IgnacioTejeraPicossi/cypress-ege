describe('Gap between img and figcaption', () => {
    it('should be 16px', () => {
      cy.visit('/'); // Reemplaza con la URL de tu página
  
      cy.get('img').then(($img) => {
        cy.get('figcaption').then(($figcaption) => {
          const imgBottom = $img[0].getBoundingClientRect().bottom;
          const figcaptionTop = $figcaption[0].getBoundingClientRect().top;
  
          const gap = figcaptionTop - imgBottom;
  
          // Verifica si el espacio entre img y figcaption es de 16px
          expect(gap).to.eq(16);
   
        

        });
      });
    });
  });
  
  describe('Gap between img and figcaption', () => {
    it('should be 16px', () => {
      cy.visit('/'); // Reemplaza con tu URL
  
      cy.get('img').then(($img) => {
        cy.get('figcaption').then(($figcaption) => {
          const imgRect = $img[0].getBoundingClientRect();
          const figcaptionRect = $figcaption[0].getBoundingClientRect();
  
          const imgBottom = imgRect.bottom;
          const figcaptionTop = figcaptionRect.top;
  
          const gap = figcaptionTop - imgBottom;
  
          // Imprimir valores en la consola para depuración
          cy.log(`imgBottom: ${imgBottom}`);
          cy.log(`figcaptionTop: ${figcaptionTop}`);
          cy.log(`Calculated gap: ${gap}`);
  
          // Validar que el gap esté cerca de 16px con un margen de tolerancia
          expect(gap).to.be.closeTo(16, 1); // Permite una tolerancia de ±1px
        });
      });
    });
  });
  