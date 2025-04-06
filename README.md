# Exemple de tchat WebSocket en JavaScript
Voici un tout petit exemple du salon world du projet tchat tcp MAIS codé en JS avec le protocole websocket (une surcouche du HTTP)


## Lancer un client pour discuter.
Le serveur tourne djà sur mon VPS vous pouvez tchater avec cette commande.

```bash
docker run -it chaouchi/tchat-ws-client
```

ou bien 

```bash
npm ci
node client/client.mjs
```

## Lancer le serveur
Si vous voulez lancer le serveur sur votre VPS ou votre machine local avec docker  n'oubliez d'ouvrir le port 8080 du container

```bash
docker run -p 8080:8080 -d chaouchi/tchat-ws-server
```


> -d c'est pour lancer le programme en tache de fond (demon)
