---
layout: post
title:  "The Journey"
date:   2024-05-28 15:11:27 +0200
categories: vanlife
language: sv
---
# Berättelsen
Under Corona blev jag och alla mina arbetskamrater hemskickade för att på heltid jobba hemifrån. Det tog bara några veckor innan jag började känna mig instängd på mitt lilla kontor och började leta efter en mer stimulerande arbetsmiljö.

Tillslut blev jag att packa lite campingutrustning och tog bilen till en grillplats vid en sjö. Där satt jag på en ranglig campingstol med laptopen i knäet. Utekontor V1 var fött.
2-3 dagar i veckan i ur och skur satt jag så här. Ibland hade jag sällskap av en likasinnad kollega. Vi gjorde kolbullar och kokkaffe, badade på lunchen och hade allmänt gött. Det gick så långt att tidningen fick nys om det hela och ville göra ett reportage.

Efter ca 6 månader av detta började ryggen säga ifrån, vintern närmade sig och kylan blev ett problem trots både fårskinn och handskar. Något behöver göras.

Länge har jag följt diverse van-builds och varit sugen på att bygga något själv. Nu fick jag chansen och jakten på fordon började. Detta var som sagt under Corona och priserna på husbilar och vans hade skjutit i höjden till den grad att man fick betala premium för en rostig Sprinter från 2005.	    

Men jag var inte på jakt efter dessa "vanliga" plåtskåps vans. Nä, jag ville ha en lätt lastbil med lastbilsskåp. Anledningarna var många:  

- Större volym
- Högre i tak
- Effektiv isolering från start
- Dubbla fuktspärrar iom. sandwish konstruktion
- Skåpet kan flyttas över till ny bil om så önskas/behövs
- Priset (inte lika upphypat som plåtisar)
- Hela momsen kan dras av iom. luftspalt mellan förarhytt och skåp
- ... och framförallt... RÄTA VINKLAR. Vi har renoverat vårt gamla hus tillräckligt länge för att aldrig frivilligt ge sig i kast med kurvade väggar så som det är i ett plåtskåp

Efter en del letande hittade jag tillslut den perfekta bilen på KVD. En Volkswagen Crafter 2015 med bakgavellyft, som dessutom hade dieselvärmare i skåpet, samt en inverter på 3000W! Det blev budgivning, men tyvärr nådde jag min smärtgränns och tvingades se bilen gå till någon annan. Slagen och nedstämd fortsatte jag mitt letande.

Efter ett par veckor dök en liknande bil upp hos en bilhandlare. Det visade sig ganska snart att det var samma bil... Enda skilnaden var att den nu var 20k dyrare än vinnande bud hos KVD... Självklart slog jag till 😅

Nu började byggandet av utekontor V2!

# Bygget

## Vision
Målet med bygget har varit att utsidan ska se ut som vilken lastbil som helst, medans insidan ska kännas som ett litet hus (inga klassiska husbilsinredningar eller husbils-knappar och reglage).

## Bodelen
- Tak, väggar och golv är samtliga isolerade från fabrik i form av 40mm sandwichpaneler
- Generellt har jag undvikit att använda träbaserade material i utsatta områden. Detta för att minska risken för mögel
- Underliggande golv är en oljehärdad plywoodskiva. Ovanpå denna ligger 3mm XPS skivor, aluminiumfolie för att reflektera värme, 24v golvvärme och slutligen vinylgolv
- Väggarna har en luftspalt och är klädda med MDF panel
- Taket är klätt med XPS skivor i träimitation
- För att minimera antal hål i det inre tätskicktet så är det mesta limmat med Tec7. Vilket är både starkt, väderbeständigt och tätt.
- Köksdelen är byggd med Ikeas Metod system. Samtliga lådor är utrustade med soft-close. Bänkskivan är en laminatskiva.
- En portabel induktionshäll används för matlagning och förvaras lättåtkomligt i en låda.
- Kylskåpet är ett 39l kompressorkylskåp från Mobicool
- Vattensystemet består av en 25l vattentank, 25l avloppstank, tryckpump, ackumulator (för jämnt vattenflöde) och varmvattenberedare (220v)
- Båda tankarna är monterad under lastbilsskåpet
- Hela vattensystemet är koncentrerat till ett hörn av skåpet och har en dränerad spillbricka. Tanken är att evl. läckage ska rinna ut på marken under lastbilen
- Elsystemet är kraftfullt
  - 2 st 200Ah 12v lithiumbatterier (LifePo4), dvs. ca 5kWh
  - 3 st 180W parallellkopplade solpaneler, 540W totalt (det finns plats på taket för att dubbla detta om man så önskar)
  - Victron SmartSolar MPPT 100/30 laddregulator
  - Victron blue smart 20A AC laddare (vid landström)
  - Renogy 40A DC-DC laddare (vid körning)
  - 2st Victron SmartShunts för att mäta ström in och ut
  - Sinergex PureSine 3000W inverter
  - Offgridtec omkopplingsstation 16A, kopplar automatiskt om mellan landström och inverter
  - Ett antal DC-DC omvandlare för att driva 5, 12 och 24v utrustning
  - Zyxel NR5101 5G router, inkl extern antenn
  - Odroid C4 med Home Assistant och Zigbee (ConBee II)
  - Zigbee 4 kanals relä för att styra 12v utrustning (t.ex. inverter)
  - Termostat för golvvärme
- Soffan är en bäddsoffa från Ikea som kan dras ut till en 160cm bred säng
- På väggen hänger en 43" Samsung Smart Monitor M7. Väggfästet är placerat så att skärmen kan vinklas åt alla håll. Även vikas ut utanför lastbilen (om man skulle vilja sitta ute och kolla på något)
- Hela bakre väggen kan öppnas. I öppet läge används ett tredelat skjutdörrsparti som väderskydd
- Bakgavellyften är isolerad med 50mm XPS som är klätt med konstgräs. Detta ger en liten altan när bakgaveln är nedfälld
- Övrigt
  - Samsung sound-bar med subwoofer
  - Eberspächer 4kW dieselvärmare är monterad under lastbilsskåpet, men detta är ett pågående projekt. Kan startas och fungerar fin fint

## Bilen
  - Volkswagen Crafter 2015
  - 2.0 TDI 136hk
  - Ca 27 000 mil
  - Android baserad bilstereo i förarhytt. Stödjer CarPlay och Android Auto, samt 12" baslåda med tillhörande förstärkare
  - Farthållare
  - 3 st säten
  - Fungerande AC
  - Motorvärmare och kupévärmare
  - Förstärkt fjädring bak 2023
  - Bromsrör bytt 2023
  - Värmepaket bytt 2022
  - Kaross i gott skick relativt ålder. Mindre mängd ytlig rost finns under dörrarna
  - Bilen är inte momssmittad, dvs. ett företag kan köpa den och dra av hela momsen (då det är en lastbil med luftspalt)

## Bilder
![alt text](/assets/IMG_4445.png) ![alt text](./assets/IMG_4449.png) ![alt text](assets/IMG_4453.png) ![alt text](../assets/IMG_4457.png) ![alt text](../assets/IMG_4458.png) ![alt text](../assets/IMG_4459.png) ![alt text](../assets/IMG_4461.png) ![alt text](../assets/IMG_4477.png) ![alt text](../assets/IMG_9498.png) ![alt text](../assets/IMG_9503.png) ![alt text](../assets/IMG_9510.png) ![alt text](../assets/IMG_9514.png) ![alt text](../assets/IMG_9533.png) ![alt text](../assets/IMG_9540.png) ![alt text](../assets/IMG_9549.png) ![alt text](../assets/IMG_9554.png)