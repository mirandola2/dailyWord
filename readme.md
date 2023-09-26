# Daily Word

## Letture del giorno tratte da Liturgie Silvestrini

Middleware per estrarre la Parola del Giorno usando il feed XML della [Liturgia Silvestrini](https://liturgia.silvestrini.org/).

Example JSON output:

```json
{
    "Letture": "Esd 6, 7-8.12.14-20; Sal.121; Lc 8, 19-21.",
    "CantoVangelo": "Beati coloro che ascoltano la parola di Dio e la osservano.",
    "Link": "https://liturgia.silvestrini.org/letture/2023-09-26.html"
}
```

Attualmente il tool si appoggia ad un Cloudflare Worker ed è [liberamente accessibile](https://daily.mirandola2.workers.dev/). In caso di eventuali carichi di richieste fuori dalle capacità del Worker potrebbero essere applicate limitazioni.