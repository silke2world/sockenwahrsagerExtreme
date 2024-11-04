function berechneMaschen() {
    // Eingabewerte abrufen
    const fussumfang = parseInt(document.getElementById("fussumfang").value);
    const maschenzahl = parseInt(document.getElementById("maschenzahl").value);
    const rundenzahl = parseInt(document.getElementById("rundenzahl").value);
    
    // Validierung
    if (isNaN(fussumfang) || fussumfang < 100 || fussumfang > 350) {
        alert("Bitte geben Sie einen gültigen Fußumfang zwischen 100 und 350 mm ein.");
        return;
    }
    
    if (isNaN(maschenzahl) || maschenzahl < 24 || maschenzahl > 40) {
        alert("Bitte geben Sie eine gültige Maschenzahl zwischen 24 und 40 ein.");
        return;
    }
    
    if (isNaN(rundenzahl) || rundenzahl < 24 || rundenzahl > 54) {
        alert("Bitte geben Sie eine gültige Rundenzahl zwischen 24 und 54 ein.");
        return;
    }

    // Berechnung
    const maschenzahlResultat = (fussumfang / 100) * maschenzahl * 0.85;
    
    // Ergebnis anzeigen
    document.getElementById("maschenOutput").textContent = Math.round(maschenzahlResultat);
}
