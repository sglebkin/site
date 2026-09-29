'use strict';

const copyButton = document.getElementById('copy-bibtex');
const bibtex = document.getElementById('bibtex');
const copyStatus = document.getElementById('copy-status');

if (copyButton && bibtex && copyStatus) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async function () {
        try {
            await navigator.clipboard.writeText(bibtex.textContent.trim() + '\n');
            copyStatus.textContent = 'BibTeX copied.';
        } catch (error) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(bibtex);
            selection.removeAllRanges();
            selection.addRange(range);
            copyStatus.textContent = 'BibTeX selected. Use your browser’s Copy command.';
        }
    });
}
