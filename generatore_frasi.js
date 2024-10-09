
function generaFrase() {
    // Frammenti di frasi brevi per combinazioni
    const soggetti = [
        "La conoscenza", 
        "Il pensiero", 
        "Il cambiamento", 
        "La tecnica", 
        "La rivoluzione tecnologica", 
        "Il futuro"
    ];

    const verbi = [
        "plasma", 
        "influenzia", 
        "trasforma", 
        "modifica", 
        "accelera", 
        "rivoluziona"
    ];

    const complementiDiretti = [
        "il mondo", 
        "i processi cognitivi", 
        "le nostre menti", 
        "la nostra epoca", 
        "il nostro agire", 
        "la realtà"
    ];

    const frasiFinali = [
        "con implicazioni radicali.", 
        "in maniera vorticosa.", 
        "in modo imprevedibile.", 
        "con conseguenze profonde.", 
        "in modo continuo.", 
        "verso un futuro incerto."
    ];

    // Genera una frase combinando casualmente i frammenti
    const frase = soggetti[Math.floor(Math.random() * soggetti.length)] + " " +
                  verbi[Math.floor(Math.random() * verbi.length)] + " " +
                  complementiDiretti[Math.floor(Math.random() * complementiDiretti.length)] + " " +
                  frasiFinali[Math.floor(Math.random() * frasiFinali.length)];

    return frase;
}

// Esempio di utilizzo
const ale = generaFrase(), ale2 = generaFrase(), ale3 = generaFrase(), ale4 = generaFrase(), ale5 = generaFrase(), ale6 = generaFrase(), ale7 = generaFrase(), ale8 = generaFrase();
jQuery("h1#console").text(ale + ale2 + ale3 + ale4 + ale5 + ale6 + ale7 + ale8)
