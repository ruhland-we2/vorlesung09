# vorlesung09 RESTful WebService mit NodeJS

## Initialisierung

```
$npm init -y
$npm i express
$npm i helmet
```

Das Paket $express$ ist das zentrale Paket für die http-Requests. Das Paket $helmet$ wird benötigt (fortgeschritten) für die Kontrolle der HTTP-Header (Security)

Ebenso wird eine Datei $.gitignore$ erstellt mit dem Inhalt

```
node_modules
```

Nach der Aktualisierung mit dem Repository muss
```
$npm update
```

aufgerufen werden.

## Base58 Encoding

Wegen des URL-Encodings in der Parameterübergabe wird das Base58 verwendet.
D.h. meine Parameter werden zuerst in einen JSON-String gepackt

```
'{
    "username": "klaus",
    "password": "test123"

}'
```

Dieser JSON-String wird mit Base58 kodiert 

```
knZmocde4thQX73CEfUucRfu4RC8Z46YjuwN5htCRYQ1jFazx9ToV7VVkixgsSzE73uRq4egUZi
```

und als Parameter übergeben.

Im Restserver wird der String dann wieder Base58 decodiert. 
Hierzu wird ein weiteres npm Paket genutzt: bs58. Aus mehreren Base58 Paketen wird dieses gewählt, da es am aktuellsten ist und die meisten Downloads besitzt

