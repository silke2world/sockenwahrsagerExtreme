<script>
function berechneMaschen() {
    const fussumfang = parseInt(document.getElementById("fussumfang").value, 10);
    const maschenzahl = parseInt(document.getElementById("maschenzahl").value, 10);
    const rundenzahl = parseInt(document.getElementById("rundenzahl").value, 10);
    const grammprobe = parseInt(document.getElementById("grammprobe").value, 10);
    const anschlag = parseInt(document.getElementById("anschlag").value, 10);
    const bund = parseInt(document.getElementById("bund").value, 10);
    const schaft = parseInt(document.getElementById("schaft").value, 10);

    // Validierungen
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

    // Maschenberechnung auf Basis Fußumfang
    const maschenzahlResultat = (fussumfang / 100) * maschenzahl * 0.85;
    document.getElementById("maschenOutput").textContent = Math.round(maschenzahlResultat);

    // Neue Berechnungen
    const bumerang1 = Math.floor(anschlag / 3);
    const bumerang2 = anschlag - 2 * bumerang1;
    const bumerang3 = (anschlag / 2 + bumerang2) * bumerang1;

    const anschlagMaschen = anschlag * 2;
    const anschlagGramm = anschlagMaschen / grammprobe;

    const bundMaschen = bund * anschlag;
    const bundGramm = bundMaschen / grammprobe;

    const schaftMaschen = schaft * anschlag;
    const schaftGramm = schaftMaschen / grammprobe;
    const schaftMm = schaft / rundenzahl * 100; // in mm

    // Ergebnisse anzeigen
    document.getElementById("bumerang1").textContent = bumerang1;
    document.getElementById("bumerang2").textContent = bumerang2;
    document.getElementById("bumerang3").textContent = Math.round(bumerang3);
    document.getElementById("anschlagMaschen").textContent = anschlagMaschen;
    document.getElementById("anschlagGramm").textContent = anschlagGramm.toFixed(2);
    document.getElementById("bundMaschen").textContent = bundMaschen;
    document.getElementById("bundGramm").textContent = bundGramm.toFixed(2);
    document.getElementById("schaftMaschen").textContent = schaftMaschen;
    document.getElementById("schaftGramm").textContent = schaftGramm.toFixed(2);
    document.getElementById("schaftMm").textContent = schaftMm.toFixed(0);
}
</script>
