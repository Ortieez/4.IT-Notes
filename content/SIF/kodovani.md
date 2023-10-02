---
title: Kódování
---
- kódování = záznam informace pomocí pevně stanoveného kódu
## Kódovat můžeme dle
- kódové tabulky (znakové sady, ASCII, Unicode ...)
- určeného algoritmu (např. Huffmanovo kódování)
- např:
	- Morse Code
	- Čárový kód
		- EAN, Codabar, Code 39/128, QR, Data Matrix


### Samodetekující kódy
- detekují chyby v datech:
	- kontrolní součet
	- parita
	- modulo (zbytek po dělení)
	- Cyklický redundantní součet (CRC)
	- Message digest algorithm (MD5)
	- Secure Hash Algorithm (SHA)

### Př. Paritní Bit
| 7bitová data | sudá parita  | lichá parita |
| ------------ | ------------ | ------------ |
| 1011010      | **0**1011010 | **1**1011010 |
| 1111111      | **1**1111111 | **0**1111111 |
| 0000000      | ?            | ?            |

- sudá parita = 1, pokud je počet jedničkových bitů včetně paritního **sudý**
- lichá parita = 1, pokud je počet jedničkových bitů včetně paritního **lichý**

### Př. Jedenáctkový samodetekující kód (modulo)
- od roku 86 jsou **rodná čísla dělitelná 11.**
| 9   | 3   | 0   | 9   | 1   | 1   | /   | 0   | 8   | 5   | 5   |

- další příklad:
- ISBN, ISSN Kódy
- čísla bank. účtů, karet
- některé čárové kódy (EAN-13)

## CRC
- hashovací funkce používána k detekci chyb během přenosu či ukládání dat
```
CRC (DATA) -> DATA + CHECKSUM
CRC (DATA) == CHECKSUM ? OK : ERROR
```

## MD5
- kryptograficky jednosměrný hashovací algoritmus
- generuje 128bit otisk pro autentizaci nebo zaručení integrity dat
```
MD5("The quick brown fox jumps over the lazy dog") = 
9e107d9d372bb6826bd81d3542a419d6
```

## Samoopravné kódy
- umí do jisté míry opravit chyby v datech
- Hammingův kód
- BCH kód
- Reedovy-Solomony kódy

## Přímý kód
| kód      | unsigned | signed (+/-) |
| -------- | -------- | ------------ |
| 00000000 | 0        | 0            |
| 10000000 | 128      | 0            |
| 00010111 | 23       | 23           |
| 10010111 | 151      | -23          |
| 11111111 | 255      | -127         |

## Inverzní Kód
| kód      | signed (-x=255-\|x\|) |
| -------- | --------------------- |
| 00000000 | 0                     |
| 10000000 | -127                  |
| 00010111 | 23                    |
| 10010111 | -104                  |
| 11111111 | 0                     |

## Dvojkový Doplňkový kód
| kód      | signed (-x=256-\|x\|) |
| -------- | --------------------- |
| 00000000 | 0                     |
| 10000000 | -128                  |
| 00010111 | 23                    |
| 10010111 | -105                  |
| 11111111 | -1                    |

## Aditivní kód s posunutou nulou
- Základem je lineární posun nuly. Nula je uprostřed rozsahu 2<sup>n-1</sup>-1.
- Např. u 8bit čísla: 2<sup>8-1</sup> - 1 = 127 = (01111111)<sub>B</sub>
- **Kód kladného čísla** X: (01111111)<sub>B</sub> + X<sub>B</sub>
- **Kód záporného čísla** X: -X :X - (10000000)<sub>B</sub>
- X<sub>B</sub> je binární reprezentace čísla

| kód      | signed |
| -------- | ------ |
| 01111111 | 0      |
| 00000000 | -1     |
| 10000000 | 1      |
| 00010111 | -24    |
| 10010111 | 24     |
| 11111111 | 128    | 

## Kódování reálných čísel
- IEEE 754 - standard pro dvojkovou aritmetiku v pohyblivé řádové čárce
- Přesnost čísel
- základní 4b
- dvojítá - 8b

hodnota cisla x je rovna soucinu znamenka z zakladu soustavy 2 umocneneho exponentem e a mantisy m

X = (-1)Z * 2e * m
z znamenko (0eq+, 1eq -)
x cislo
m mantisa (zaklad)
e - exponent

## Standard IEEE 754
| Reprezentace        | z              | e                   | m     |
| ------------------- | -------------- | ------------------- | ----- |
| jednoduchá přesnost | 1b             | 8b (-126 až 127)    | 23b   |
| dvojitá přesnost    | 1b             | 11b (-1022 až 1023) | 52b   |
| kód                 | 0 eq +; 1 eq - | aditivní            | přímý | 

- K mantise se vždy připočítává hodnota 1.
