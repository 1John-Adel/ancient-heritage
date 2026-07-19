async function download() {
    const element = document.body; 
    const viewWidth = window.innerWidth;
    const viewHeight = element.scrollHeight;
    
    const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,      
        logging: false,
        backgroundColor: '#1a1a17', 
        width: viewWidth,
        height: viewHeight,
        windowWidth: viewWidth,
        windowHeight: viewHeight,
        scrollX: 0,
        scrollY: 0,
        ignoreElements: (el) => {
            return el.classList.contains('ignore-pdf');
        }
    });
    
    const imgData = canvas.toDataURL('image/png');
    
    const { jsPDF } = window.jspdf;
    
    const pdfWidth = viewWidth * 0.75;
    const pdfHeight = viewHeight * 0.75;
    
    const pdf = new jsPDF({
        orientation: pdfWidth > pdfHeight ? 'l' : 'p',
        unit: 'pt',
        format: [pdfWidth, pdfHeight]
    });
    
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');
    
    pdf.save('Ancient_Heritage.pdf');
}