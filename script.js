function berechneMaschen() {
    // Eingabewerte abrufen und in Ganzzahlen umwandeln
    const fussumfang = parseInt(document.getElementById("fussumfang").value, 10);
    const maschenzahl = parseInt(document.getElementById("maschenzahl").value, 10);
    const rundenzahl = parseInt(document.getElementById("rundenzahl").value, 10);
    
    // Validierung des Fußumfangs
    if (isNaN(fussumfang) || fussumfang < 100 || fussumfang > 350) {
        alert("Bitte geben Sie einen gültigen Fußumfang zwischen 100 und 350 mm ein.");
        return; // Beende die Funktion, wenn die Eingabe ungültig ist
    }
    
    // Validierung der Maschenzahl
    if (isNaN(maschenzahl) || maschenzahl < 24 || maschenzahl > 40) {
        alert("Bitte geben Sie eine gültige Maschenzahl zwischen 24 und 40 ein.");
        return;
    }
    
    // Validierung der Rundenzahl
    if (isNaN(rundenzahl) || rundenzahl < 24 || rundenzahl > 54) {
        alert("Bitte geben Sie eine gültige Rundenzahl zwischen 24 und 54 ein.");
        return;
    }

    // Berechnung der Maschenzahl
    const maschenzahlResultat = (fussumfang / 100) * maschenzahl * 0.85;
    
    // Ergebnis anzeigen
    document.getElementById("maschenOutput").textContent = Math.round(maschenzahlResultat);
}
