function berechneMaschen() {
  // Werte aus den Eingabefeldern abrufen
  const fussumfang = parseFloat(document.getElementById("fussumfang").value);
  const maschenzahl = parseFloat(document.getElementById("maschenzahl").value);

  // Berechnung durchführen: intFußumfang / 100 * intMaschenzahl * 0,85
  const maschen = (fussumfang / 100) * maschenzahl * 0.85;

  // Ergebnis anzeigen
  document.getElementById("maschenOutput").textContent = Math.round(maschen);
}
