function analyzePost() {
    const text = document.getElementById('inputText').value;
    
    if (!text) {
        document.getElementById('results').innerHTML = '<p class="no-text">Please enter some content to analyze.</p>';
        return;
    }

    const patterns = {
        hashtags: /#\w+/g,
        emails: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
        urls: /\bhttps?:\/\/[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\/[^\s]*)?\b/g,
        phones: /\b(\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}\b/g,
        creditCards: /\b(?:\d{4}[- ]?){3}\d{4}\b/g,
        time: /\b((1[0-2]|0?[1-9]):[0-5][0-9]\s?(AM|PM))\b|\b((2[0-3]|[01]?[0-9]):[0-5][0-9])\b/gi,
        htmlTags: /<\/?[a-zA-Z][^>]*>/g,
        currency: /\$\d{1,3}(,\d{3})*(\.\d{2})?/g
    };

    let found = {};
    let total = 0;

    for (let type in patterns) {
        const matches = text.match(patterns[type]) || [];
        if (matches.length > 0) {
            found[type] = [...new Set(matches)]; // remove duplicates
            total += matches.length;
        }
    }

    // Count words and characters
    const wordCount = text.trim().split(/\s+/).length;
    const charCount = text.length;

    showResults(found, total, wordCount, charCount);
}

function showResults(items, total, words, chars) {
    const results = document.getElementById('results');
    
    if (total === 0) {
        results.innerHTML = '<div class="no-content"><h3>No patterns found</h3><p>Try adding some of the patterns we look for!</p></div>';
        return;
    }

    let html = `
        <div class="summary">
            <h3>Content Analysis Results</h3>
            <div class="stats">
                <span><strong>${total}</strong> elements found</span>
                <span><strong>${words}</strong> words</span>
                <span><strong>${chars}</strong> characters</span>
            </div>
        </div>`;
    
    for (let type in items) {
        const typeName = getTypeName(type);
        const typeColor = getTypeColor(type);
        
        html += `
            <div class="result-section" style="border-left-color: ${typeColor}">
                <h4>${typeName} (${items[type].length})</h4>
                <div class="items">`;
        
        items[type].forEach(item => {
            html += `<span class="item" style="border-color: ${typeColor}; color: ${typeColor}">${item}</span>`;
        });
        
        html += `</div></div>`;
    }
    
    results.innerHTML = html;
}

function getTypeName(type) {
    const names = {
        hashtags: 'Hashtags',
        emails: 'Email Addresses',
        urls: 'URLs',
        phones: 'Phone Numbers',
        creditCards: 'Credit Card Numbers',
        time: 'Time Formats',
        htmlTags: 'HTML Tags',
        currency: 'Currency Amounts'
    };
    return names[type] || type;
}

function getTypeColor(type) {
    const colors = {
        hashtags: '#1da1f2',
        emails: '#6f42c1',
        urls: '#17bf63',
        phones: '#dc3545',
        creditCards: '#fd7e14',
        time: '#20c997',
        htmlTags: '#6610f2',
        currency: '#198754'
    };
    return colors[type] || '#666';
}