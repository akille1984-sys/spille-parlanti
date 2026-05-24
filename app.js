const PINS = {
  "ITdmD3Ar9": {
    "title": "38 anni? I ciechi ti danno 38 anni!",
    "phrase": "38 anni? I ciechi ti danno 38 anni!",
    "audio": "audio/eqns21ho.mp3"
  },
  "kq33c4k4Q": {
    "title": "Fa schiuma ma non un sapone. La borra?",
    "phrase": "Fa schiuma ma non un sapone. La borra?",
    "audio": "audio/rd2dnl8w.mp3"
  },
  "mAdps0aoA": {
    "title": "Auguri! È un oggetto fine, per gente di classe.",
    "phrase": "Auguri! È un oggetto fine, per gente di classe.",
    "audio": "audio/uj4fcn4f.mp3"
  },
  "A0OEi9Btb": {
    "title": "You're a winner baby!",
    "phrase": "You're a winner baby!",
    "audio": "audio/2a8hojfk.mp3"
  },
  "RjZjHRLW1": {
    "title": "Io non ti ho fatto nessuna domanda Mariagrazia.",
    "phrase": "Io non ti ho fatto nessuna domanda Mariagrazia.",
    "audio": "audio/59hysuqq.mp3"
  },
  "QIn89rKgI": {
    "title": "Non so se arrivo a Natale",
    "phrase": "Non so se arrivo a Natale",
    "audio": "audio/bulxqsp0.mp3"
  },
  "FSujBblGD": {
    "title": "E' una bevanda poco alcolica",
    "phrase": "E' una bevanda poco alcolica",
    "audio": "audio/thfpwkwl.mp3"
  },
  "rNiMjqkGC": {
    "title": "Now sashay away.",
    "phrase": "Now sashay away.",
    "audio": "audio/mkarudjv.mp3"
  },
  "RoKlFyxQ1": {
    "title": "Tu non vieni qui a sfottere lo sponsor!",
    "phrase": "Tu non vieni qui a sfottere lo sponsor!",
    "audio": "audio/6k1kyw9p.mp3"
  },
  "OlqWyNXob": {
    "title": "Ma si può essere più stronze?",
    "phrase": "Ma si può essere più stronze?",
    "audio": "audio/48auim6p.mp3"
  },
  "sdncidqCU": {
    "title": "Sgualdrina di Beverly Hills",
    "phrase": "Sgualdrina di Beverly Hills",
    "audio": "audio/7asxj3sg.mp3"
  },
  "MTasEcHhN": {
    "title": "Sei falsa Simona!",
    "phrase": "Sei falsa Simona!",
    "audio": "audio/6m2vl4sv.mp3"
  }
};

const DONATION_URL = "#"; // Inserisci qui il link Satispay, quando vuoi mostrarlo.

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const title = document.getElementById("pin-title");
const phrase = document.getElementById("pin-phrase");
const playerWrap = document.getElementById("player-wrap");
const player = document.getElementById("audio-player");
const status = document.getElementById("status");
const donationLink = document.getElementById("donation-link");

if (DONATION_URL && DONATION_URL !== "#") {
  donationLink.href = DONATION_URL;
}

if (!id) {
  status.textContent = "Scansiona una spilla NFC per ascoltare il suo audio.";
} else if (!PINS[id]) {
  title.textContent = "Spilla non riconosciuta";
  phrase.textContent = "Il link non contiene un ID valido, oppure questa spilla non è ancora stata caricata.";
  status.textContent = "Controlla il tag NFC o la tabella degli ID.";
} else {
  const pin = PINS[id];
  title.textContent = pin.title;
  phrase.textContent = pin.phrase;
  player.src = pin.audio;
  playerWrap.classList.remove("hidden");
  status.textContent = "Premi play e lascia che il dramma faccia il suo ingresso.";
}
