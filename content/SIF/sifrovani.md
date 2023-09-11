---
title: Šifrování
---
# Základní Pojmy

## Kryptografie
- nauka o metodách utajování smyslu zpráv převodem podoby, která je čitelná jen se speciální znalostí

## Steganografie 
- podobor kryptografie, neviditelné inkousty, vodotisk, skrytí textu do obrázku nebo do hudby

## Kryptoanalýza
- získávání obsahu z šifrovaného obsahu bez znalosti klíče, frekvenční analýza <- statistické znalosti o přirozeném jazyce


### Alan Mathison Turing
- významný matematik, kryptoanalasyst
- Turingův Stroj, Turingův Test

# Historie
## Klasická kryptografie
- jednoduché substituční (atbash, [[caesarova-sifra|caesarova šifra]], polybiův čtverec)
- transpoziční (scytale) šifry

## Středověk
- nástup polyalfabetických šifer (Vigenérová šifra)
- vzestup kryptoanalýzy

## 1. Světová Válka
- vernamova šifra
- první šifrovací stroje

## 2. Světová Válka
- Enigma (němci, 1920)
- SIGABA (ECM MARK II., USA)

## Moderní Kryptografie
- šifrovací standardy
- asymetrické šifrování (dva klíče)
- jednosměrné šifry (hash) (md5, SHA-1)

# Šifrování jako proces
- šifrování je proces, kdyz převádíme **prostý text (OT)** na **šifrovaný text (ŠT)**

![[sifrovani_3_boxes.excalidraw]]
## Co prakticky šifrujeme
- Data na médiu
	- pevný disk, flash - AxCrypt (AES 128), BitLocker (AES 128, AES 256), Truecrypt
- Komunikace
	- Email - TLS, SSL
	- Web - HTTPS
	- VPN - Posílání šifrovaných dat zvláštním kanálem