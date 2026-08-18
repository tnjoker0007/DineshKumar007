import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function generatePDF() {
  console.log('Launching Puppeteer to generate Resume PDF...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const htmlPath = path.join(__dirname, 'public', 'Dinesh_Kumar_E_Resume.html');
  const pdfPath = path.join(__dirname, 'public', 'Dinesh_Kumar_E_Resume.pdf');

  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '15mm',
      bottom: '15mm',
      left: '15mm',
      right: '15mm'
    }
  });

  await browser.close();
  console.log('✅ PDF generated successfully at:', pdfPath);
}

generatePDF().catch(err => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
