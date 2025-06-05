<script>
function berechneDaten() {
    // Eingabewerte holen
    
    const fussumfang = Number(document.getElementById("fussumfang").value);
    const fusslang = Number(document.getElementById("fusslang").value);
    const maschenzahl = Number(document.getElementById("maschenzahl").value);
    const rundenzahl = Number(document.getElementById("rundenzahl").value);
    const grammprobe = Number(document.getElementById("grammprobe").value);
    const anschlag = Number(document.getElementById("anschlag").value);
    const bund = Number(document.getElementById("bund").value);
    const schaft = Number(document.getElementById("schaft").value);

    // Validierung
    if ([fussumfang, fusslang, maschenzahl, rundenzahl, grammprobe, anschlag, bund, schaft].some(isNaN)) {
        alert("Bitte fülle alle Felder korrekt aus.");
        return;
    }

    // Helper: Daten in Ergebnisfelder schreiben
    function schreibeErgebnis(prefix, maschen, gramm, mm) {
        document.getElementById(`${prefix}Maschen`).textContent = Math.round(maschen);
        document.getElementById(`${prefix}Gramm`).textContent = gramm.toFixed(2);
        document.getElementById(`${prefix}Mm`).textContent = mm.toFixed(0);
    }

    // Maschenzahl Fußumfang
    const maschenFussumfang = (fussumfang / 100) * maschenzahl * 0.85;
    document.getElementById("maschenOutput").textContent = Math.round(maschenFussumfang);

    // Bumerang (Ferse oder Spitze)
    const bumerang1 = Math.floor(anschlag / 3);
    const bumerang2 = anschlag - 2 * bumerang1;
    const bumerang3 = (anschlag / 2 + bumerang2) * bumerang1;
    const bumerangGramm = bumerang3 / grammprobe;
    const bumerangMm = (bumerang1 * 2 / rundenzahl) * 100;
    const einteilung = `${bumerang1}-${bumerang2}-${bumerang1}`;

    document.getElementById("bumerangEinteilung").textContent = einteilung;
    document.getElementById("bumerang2").textContent = bumerang2;
    document.getElementById("bumerang3").textContent = Math.round(bumerang3);
    document.getElementById("bumerangGramm").textContent = bumerangGramm.toFixed(2);
    document.getElementById("bumerangMm").textContent = bumerangMm.toFixed(0);

    // Anschlag (mehr Garnverbrauch durch Anschlagtechnik)
    const anschlagMaschen = anschlag * 2;
    const anschlagGramm = anschlagMaschen / grammprobe;
    document.getElementById("anschlagMaschen").textContent = anschlagMaschen;
    document.getElementById("anschlagGramm").textContent = anschlagGramm.toFixed(2);

    // Bund & Schaft
    const berechneTeil = (prefix, runden) => {
        const maschen = runden * anschlag;
        const gramm = maschen / grammprobe;
        const mm = (runden / rundenzahl) * 100;
        schreibeErgebnis(prefix, maschen, gramm, mm);
        return { maschen, gramm };
    };

    const bundErgebnis = berechneTeil("bund", bund);
    const schaftErgebnis = berechneTeil("schaft", schaft);

    // Fuß
    const fussMm = fusslang - bumerangMm;
    const fussRunden = (fussMm / 100) * rundenzahl;
    const fussMaschen = fussRunden * anschlag;
    const fussGramm = fussMaschen / grammprobe;
    document.getElementById("fussMm").textContent = fussMm.toFixed(0);
    document.getElementById("fussRunden").textContent = Math.round(fussRunden);
    document.getElementById("fussMaschen").textContent = Math.round(fussMaschen);
    document.getElementById("fussGramm").textContent = fussGramm.toFixed(2);

    // Gesamtmaschen & Garnverbrauch für ein Sockenpaar
    const paarMaschen =
        (anschlagMaschen + bundErgebnis.maschen + schaftErgebnis.maschen + fussMaschen + bumerang3 * 2) * 2;
    const paarGramm =
        (anschlagGramm + bundErgebnis.gramm + schaftErgebnis.gramm + fussGramm + bumerangGramm * 2) * 2;

    document.getElementById("paarMaschen").textContent = Math.round(paarMaschen);
    document.getElementById("paarGramm").textContent = paarGramm.toFixed(2);
}
</script>
