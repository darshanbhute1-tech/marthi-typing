// Mapping for Normal and Shift keys based on Krutidev/Devlys layouts
const normalMap = {
    'q': 'ु', 'w': 'ू', 'e': 'म', 'r': 'त', 't': 'ज', 'y': 'ल', 'u': 'न', 'i': 'प', 'o': 'व', 'p': 'च',
    'a': 'ं', 's': 'े', 'd': 'क', 'f': 'ि', 'g': 'ह', 'h': 'ी', 'j': 'र', 'k': 'ा', 'l': 'स', ';': 'य',
    'z': '़', 'x': 'ग', 'c': 'ब', 'v': 'अ', 'b': 'इ', 'n': 'द', 'm': 'उ', ',': 'ा', '.': '।', '/': 'य'
};

const shiftMap = {
    'Q': 'फ', 'W': 'ॅ', 'E': 'म्', 'R': 'त्', 'T': 'ज्', 'Y': 'ल्', 'U': 'न्', 'I': 'प्', 'O': 'व्', 'P': 'च्',
    'A': 'ाँ', 'S': 'ै', 'D': 'क्', 'F': 'थ', 'G': 'ळ', 'H': 'भ', 'J': 'श्र', 'K': 'ज्ञ', 'L': 'ष्', ':': 'रू',
    'Z': '!', 'X': 'ग्', 'C': 'ब्', 'V': 'अ', 'B': 'ई', 'N': 'ध्', 'M': 'ऊ', '<': 'ख', '>': 'ध', '?': 'घ'
};

document.addEventListener('keydown', (e) => {
    const active = document.activeElement;
    if (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || active.isContentEditable) {
        
        // Determine which map to use based on Shift key
        const map = e.shiftKey ? shiftMap : normalMap;
        const marathiChar = map[e.key];

        if (marathiChar) {
            e.preventDefault();
            
            // Standard way to insert text into web forms
            const start = active.selectionStart;
            const end = active.selectionEnd;
            const text = active.value || active.innerText;
            const newText = text.substring(0, start) + marathiChar + text.substring(end);

            if (active.value !== undefined) {
                active.value = newText;
                active.setSelectionRange(start + marathiChar.length, start + marathiChar.length);
            } else {
                active.innerText = newText;
            }
        }
    }
}, true);