# Osservatorio su Parlamento e Corti

Sito web dell'Osservatorio su Parlamento e Corti dell'Università di Catania.

## Requisiti

- Docker
- Docker Compose

## Sviluppo Locale

1. Clona il repository:
   ```bash
   git clone <repository-url>
   cd osservatorio-cursor
   ```

2. Avvia il server di sviluppo:
   ```bash
   docker-compose up
   ```

3. Apri il browser e visita:
   - http://localhost:1313 per il server di sviluppo Hugo
   - http://localhost:8080 per il server Caddy
   - http://localhost:1313/admin/ per l'interfaccia di Decap CMS

## Struttura del Progetto

```
.
├── content/               # Contenuti del sito
│   ├── primo-piano/      # Articoli in primo piano
│   ├── parlamento/       # Articoli sul parlamento
│   ├── corti/           # Articoli sulle corti
│   ├── news/            # Notizie ed eventi
│   └── ...
├── layouts/              # Template Hugo
├── static/               # File statici
│   ├── admin/           # Configurazione Decap CMS
│   ├── css/             # Fogli di stile
│   └── images/          # Immagini
└── themes/              # Temi Hugo
```

## Deployment

Il sito è configurato per il deployment su Netlify. Per deployare:

1. Crea un nuovo sito su Netlify
2. Collega il repository GitHub
3. Configura le variabili d'ambiente necessarie
4. Abilita Netlify Identity per Decap CMS

## Gestione dei Contenuti

I contenuti possono essere gestiti attraverso Decap CMS, accessibile all'indirizzo `/admin/` del sito. Per accedere:

1. Configura Netlify Identity
2. Invita gli utenti amministratori
3. Accedi utilizzando le credenziali fornite

## Licenza

Copyright © Università di Catania. Tutti i diritti riservati.