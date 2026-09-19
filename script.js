const decorPatterns = [
    { name: "نمط المدمر ✨", func: (text) => `✨[ ${text} ]✨` },
    { name: "نمط اللهب 🔥", func: (text) => `🔥『${text}』🔥` },
    { name: "نمط المربعات 🔳", func: (text) => `[ ${text} ]` },
    { name: "نمط النقاط •", func: (text) => `• • • ${text} • • •` },
    { name: "الزخرفة العربية 1", func: (text) => text.split('').join('ـ') },
    { name: "نمط الحروف المتباعدة", func: (text) => text.split('').join(' ') },
    { name: "الزخرفة الملكية 👑", func: (text) => `♛ ${text} ♛` },
    { name: "نمط النجوم ★", func: (text) => `★彡 ${text} 彡★` },
    { name: "زخرفة عشوائية ⚡", func: (text) => text.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('') }
];

function generateDecorations() {
    const inputText = document.getElementById('inputText').value;
    const resultsArea = document.getElementById('resultsArea');
    
    resultsArea.innerHTML = '';

    if (inputText.trim() === '') return;

    decorPatterns.forEach(pattern => {
        const decoratedText = pattern.func(inputText);
        
        const card = document.createElement('div');
        card.className = 'result-card';
        card.onclick = () => copyToClipboard(decoratedText);

        card.innerHTML = `
            <span class="pattern-name">${pattern.name}</span>
            <div class="decorated-text">${decoratedText}</div>
        `;

        resultsArea.appendChild(card);
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('تم نسخ الزخرفة بنجاح: ' + text);
    }).catch(err => {
        alert('حدث خطأ أثناء النسخ!');
    });
}
