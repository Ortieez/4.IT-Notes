---
title: Asymetrická šifra
---
- K šifrování i dešifrování používá různé klíče
![[asymetricka-sifra.png]]

- Výhodou je, že odesílatel s příjemcem nemusí sdílet společný klíč
- Nevýhodou je obvykle vyšší náročnost
- Matematický zápis:
	- ŠT: šifrování(OT, ŠK)
	- OT: dešifrování(ŠT, DK)
- Přiklady:
	- RSA (Rivest, Shamir, Adleman)

## Jednosměrné šifrování
- Používají se hashovací funkce h(), které mají optimálně tyto vlastnosti:
- Nelze získat z hashe zpět OT, pokud hash = h(OT)
- Je obtížné najít jiný OT2, kde by platilo h(OT) = h(OT2)
- Použití: U ověřování Identity, hashování hesel
- Příklad: MDS, SHA...
- Sůl: „Náhodný" přídavek, který zajistí, aby na stejný vstup byl jiný hash.
- Hashe bývají obvykle v šestnáctkové soustavě.

## Šifrovací Standardy
![[standardy]]


## Kódování 
- kódování znamená záznam informace pomocí pevně stanoveného kódu čili znakové sady, případně kódové tabulky

### Konstrukce kódu pro různé účely
- komprese dat a kryptografické kódování
- detekce a oprava chyb
- odstraňování chyb
- zrychlení přenosu dat

### Kódování
- blokové kódování (kóduje se po stejně velkých blocích)
- prefixové kódování (žádné kódové slovo není začátkem jiného)