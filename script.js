<script>
function berechneDaten() {
    const fussumfang = parseInt(document.getElementById("fussumfang").value, 10);
    const maschenzahl = parseInt(document.getElementById("maschenzahl").value, 10);
    const rundenzahl = parseInt(document.getElementById("rundenzahl").value, 10);
    const grammprobe = parseInt(document.getElementById("grammprobe").value, 10);
    const anschlag = parseInt(document.getElementById("anschlag").value, 10);
    const bund = parseInt(document.getElementById("bund").value, 10);
    const schaft = parseInt(document.getElementById("schaft").value, 10);
    const fuss = parseInt(document.getElementById("fusslang").value, 10);

    if ([fussumfang, maschenzahl, rundenzahl, grammprobe, anschlag, bund, schaft, fuss].some(isNaN)) {
        alert("Bitte fülle alle Felder korrekt aus.");
        return;
    }

    // Maschenberechnung
    const maschenzahlResultat = (fussumfang / 100) * maschenzahl * 0.85;
    document.getElementById("maschenOutput").textContent = Math.round(maschenzahlResultat);

    // Bumerang
    const bumerang1 = Math.floor(anschlag / 3);
    const bumerang2 = anschlag - 2 * bumerang1;
    const bumerang3 = (anschlag / 2 + bumerang2) * bumerang1;
    const bumerangGramm = bumerang3 / grammprobe;
    const bumerangMm = bumerang1 * 2 / rundenzahl * 100;
    const einteilung = `${bumerang1}-${bumerang2}-${bumerang1}`;

    document.getElementById("bumerangEinteilung").textContent = einteilung;
    document.getElementById("bumerang1").textContent = bumerang1;
    document.getElementById("bumerang2").textContent = bumerang2;
    document.getElementById("bumerang3").textContent = Math.round(bumerang3);
    document.getElementById("bumerangGramm").textContent = bumerangGramm.toFixed(2);
    document.getElementById("bumerangMm").textContent = bumerangMm.toFixed(0);

    // Anschlag
    const anschlagMaschen = anschlag * 2;
    const anschlagGramm = anschlagMaschen / grammprobe;
    document.getElementById("anschlagMaschen").textContent = anschlagMaschen;
    document.getElementById("anschlagGramm").textContent = anschlagGramm.toFixed(2);

    // Bund
    const bundMaschen = bund * anschlag;
    const bundGramm = bundMaschen / grammprobe;
    const bundMm = bund / rundenzahl * 100;
    document.getElementById("bundMaschen").textContent = bundMaschen;
    document.getElementById("bundGramm").textContent = bundGramm.toFixed(2);
    document.getElementById("bundMm").textContent = bundMm.toFixed(0);

    // Schaft
    const schaftMaschen = schaft * anschlag;
    const schaftGramm = schaftMaschen / grammprobe;
    const schaftMm = schaft / rundenzahl * 100;
    document.getElementById("schaftMaschen").textContent = schaftMaschen;
    document.getElementById("schaftGramm").textContent = schaftGramm.toFixed(2);
    document.getElementById("schaftMm").textContent = schaftMm.toFixed(0);

    // Fuß
    const fussMm = fuss - bumerang1 * 2 / rundenzahl * 100;
    const fussRunden = fussMm / 100 * rundenzahl;
    const fussMaschen = fussRunden * anschlag;
    const fussGramm = fussMaschen / grammprobe;
    document.getElementById("fussMm").textContent = fussMm.toFixed(0);
    document.getElementById("fussRunden").textContent = Math.round(fussRunden);
    document.getElementById("fussMaschen").textContent = Math.round(fussMaschen);
    document.getElementById("fussGramm").textContent = fussGramm.toFixed(2);
}
</script>
