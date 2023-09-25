---
title: Substituční Šifry
---
- Dochází zde k záměně znaků v OT oproti ŠT
- [[caesarova-sifra|Caesarova šifra]]
- [[polybiuv-ctverec|Polybiův Čtverec]]
- [[vigenerova-sifra|Vigenèrova šifra]]

- Substituční šifry lze snadno prolomit pomocí frekvenční analýzy (součást kryptoanalýzy)

## Dělení
- monoalfabetické šifry
	- záměna jednoho znaku za jeden
	- [[caesarova-sifra|Caesarova šifra]]
- homofonní šifry
	- jeden znak má více podob. Abecedea je však jedna.
	- napr: mam text ukulele

| letter | amount |
| ------ | ------ |
| u      | 2      |
| l      | 2      |
| k      | 1      |
| e      | 2      |

| letter | codes |
| ------ | ----- |
| u      | 07 13 |
| l      | 15 09 |
| k      | 21    |
| e      | 14 28 |

ŠT: 07 21 13 15 28 09 14

- polyalfabetické šifry
	- jeden znak může být šifrován do více podob díky využití více abeced
	- Albertiho šifra, [[vigenerova-sifra|Vigenèrova šifra]]