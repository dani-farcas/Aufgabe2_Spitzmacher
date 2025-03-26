function notenberechnung() {
    // Werte aus den Eingabefeldern holen
    const apt1 = parseFloat(document.getElementById('apt1').value);
    const wiso = parseFloat(document.getElementById('wiso').value);
    const teil1 = parseFloat(document.getElementById('teil1').value);
    const teil2 = parseFloat(document.getElementById('teil2').value);
    const dokumentation = parseFloat(document.getElementById('dokumentation').value);
    const praesentation = parseFloat(document.getElementById('praesentation').value);

    // Überprüfen, ob alle Werte gültig sind (keine NaN-Werte)
    if (isNaN(apt1) || isNaN(wiso) || isNaN(teil1) || isNaN(teil2) || isNaN(dokumentation) || isNaN(praesentation)) {
        alert("Bitte geben Sie für alle Felder gültige Werte ein!");
        return; // Funktion stoppen, wenn ein ungültiger Wert eingegeben wurde
    }

    // Berechnung der Endnote anhand der Gewichtung
    const endNote = (apt1 * 0.2) + (wiso * 0.1) + (teil1 * 0.1) + (teil2 * 0.1) + (dokumentation * 0.25) + (praesentation * 0.25);

    // Anzeige der Endnote
    document.getElementById('note').textContent = 'Endnote: ' + endNote.toFixed(2);

    // Überprüfen, ob der Prüfling die Prüfung bestanden hat
    let status = "Unzureichend"; // Anfangsstatus als "Unzureichend" festlegen
    if (endNote >= 5.0) {
        status = 'Bestanden'; // Wenn die Endnote >= 5.0 ist, wird der Status auf "Bestanden" gesetzt
    }

    // Anzeige des Status
    document.getElementById('status').textContent = 'Status: ' + status;
}
