<!-- lastmod 2022-08-02 -->
## MAX15108A Evaluation Kit

## General Description

The MAX15108A evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX15108A  high-efficiency,  8A, step-down regulator with integrated switches in a 20-bump wafer-level package (WLP). The EV kit is preset for 1.5V output  at  load  currents  up  to  8A  from  a  2.7V  to  5.5V input supply. The device features a 1MHz fixed switching frequency,  which  allows  the  EV  kit  to  achieve  an  allceramic capacitor design and fast transient responses.

## Features

- Operates from a 2.7V to 5.5V Input Supply
- All-Ceramic Capacitor Design
- 1MHz Switching Frequency
- Output Voltage Range
- 0.6V Up to 0.94 x V IN  (Forced PWM)
- Enable Input/Power-Good Output
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX15108A

## Quick Start

## Recommended Equipment

- MAX15108A EV kit
- 5V, 5A DC power supply
- Load capable of sinking 8A
- Digital voltmeter

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify the board operation. Caution: Do not turn on power supply until all connections are completed.

- 1)  Connect the positive terminal of the 5V supply to the IN PCB pad and the negative terminal to the nearest PGND PCB pad.
- 2)  Connect  the  positive  terminal  of  the  8A  load  to  the OUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3)  Connect the digital voltmeter across the OUT PCB pad and the nearest PGND PCB pad.
- 4)  Verify that a shunt is installed on jumper JU1.
- 5)  Turn on the DC power supply.
- 6)  Enable the load.
- 7)  Verify that the voltmeter displays 1.5V.

<!-- image -->

## Detailed Description of Hardware

The  MAX15108A  EV  kit  provides  a  proven  design  to evaluate the MAX15108A high-efficiency, 8A, step-down regulator  with  integrated  switches.  The  applications include distributed power systems, portable devices, and preregulators. The EV kit is preset for 1.5V output at load currents up to 8A from a 2.7V to 5.5V input supply. The device features a 1MHz fixed switching frequency, which allows  the  EV  kit  to  achieve  an  all-ceramic  capacitor design and fast transient responses. A placeholder for an input  aluminum  electrolytic  capacitor  (C22)  is  provided to  damp  the  input  if  long  wires  are  used;  they  are  not required in a tight system design.

## Soft-Start (SS)

The  device  utilizes  an  adjustable  soft-start  function  to limit  inrush  current  during  startup.  The  soft-start  time  is adjusted by the value of C16, the external capacitor from SS to GND. By default, C16 is currently 0.033µF, which gives a soft-start time of approximately 2ms. To adjust the soft-start time, determine C16 using the following formula:

<!-- formula-not-decoded -->

where t SS is the required soft-start time in seconds and C16 is in farads.

An  external  tracking  reference  with  steady-state  value between 0 and V IN  - 1.5V can be applied to SS. Refer to the Programmable Soft-Start (SS) section in the MAX15108A IC data sheet for a more detailed description.

## Setting the Output Voltage

The EV kit can be adjusted from 0.6V up to 0.94 x V IN (forced PWM) by changing the values of resistors R1 and R2.  To  determine  the  value  of  the  resistor-divider,  first select R2 between 1k Ω and 20kΩ. Then use the following equation to calculate R1:

<!-- formula-not-decoded -->

where V FB is the feedback threshold voltage (V FB = 0.6V) and V OUT  is the desired output.

When  R1  is  changed,  compensation  components  C14, R3,  and  C15  must  be  changed  to  ensure  loop  stability. Refer to the Compensation Design Guidelines section in the MAX15108A IC data sheet.

## Regulator Enable (EN)

The device features a regulator enable input. For normal operation,  a  shunt  should  be  installed  on  jumper  JU1. To disable the output, remove the shunt on JU1 and the EN pin will be pulled to PGND through resistor R4. See Table 1 for JU1 settings.

## Table 1. Regulator Enable (EN) Jumper JU1 Description

| SHUNT POSITION   | EN PIN                    | DEVICE OUTPUT   |
|------------------|---------------------------|-----------------|
| Installed*       | Connected to IN           | Enabled         |
| Not installed    | Pulled to PGND through R4 | Disabled        |

*Default position.

## MAX15108A EV Kit Bill of Materials

MAX15108AEVKIT# REV A BOM

|   QTY | Reference Designators   | Description                                                         | Manufacturer Part Number   |
|-------|-------------------------|---------------------------------------------------------------------|----------------------------|
|     3 | C1, C2, C19             | CAP, 10UF, 6.3V, 10%,X5R,CER,0603                                   | Murata GRM188R60J106K      |
|     0 | C3, C4, C21             | 0603, not installed                                                 |                            |
|     4 | C5,C7, C8, C9           | CAP, CAP, 47UF, 6.3V, 20%, X5R,CER,1206                             | Murata GRM31CR60J476M      |
|     1 | C6                      | CAP, 2200PF, 50V, 10%, X7R, CER, 0603                               | TDK C1608X7R1H222K         |
|     1 | C10                     | CAP, 0.1UF, 50V, 10%, X7R, CER, 0603                                | Murata GRM188R70J104KA01   |
|     1 | C14                     | CAP, 100PF, 50V,5%, C0G, CER, 0603                                  | Murata GRM1885C1H101J      |
|     1 | C15                     | CAP, 4700PF, 50V,10%, X7R, CER, 0603                                | Murata GRM1885C1H101J      |
|     1 | C16                     | CAP, 0.033UF, 16V,10%, X7R, CER, 0603                               | Murata GRM188R71C333K      |
|     1 | C20                     | CAP, 1UF, 6.3V, 10%, X7R, CER, 0603                                 | Murata GRM188R70J105K      |
|     0 | C22                     | CAP, 220μF, 10V, 20%,aluminum electrolytic capacitor(6.3mm x 7.7mm) | Panasonic EEE1AA221XP      |
|     1 | C23                     | CAP, 2.2UF, 10V, 10%, X7R, CER, 0603                                | Murata GRM188R71A225K      |
|     1 | JU1                     | HEADER 36-40 PINS (CUT TO FIT)                                      | SULLINS PEC36SAAN          |
|     1 | L1                      | INDUCTOR, 0.33UH,20%,18A                                            | Vishay IHLP2525BDERR33M01  |
|     1 | R1                      | RES, 8.06KOHM 1% 0603                                               | any                        |
|     1 | R2                      | RES, 5.36KOHMS, 1%,0603                                             | any                        |
|     1 | R3                      | RES, 2.43K OHMS 1% 0603                                             | any                        |
|     2 | R4, R5                  | RES, 100K OHMS,5% 0603                                              | any                        |
|     1 | R6                      | RES, 10 OHMS, 5% 0603                                               | any                        |
|     1 | R8                      | RES, 1OHM, 1% 0805                                                  | IRC LVC-LVC0805LF-1R00-F   |
|     1 | R9                      | RES, 1KOHM, 5% 0603                                                 | any                        |
|     1 | U1                      | WLP HC, W202D2Z+1                                                   | Maxim MAX15108AEWP+        |
|     2 |                         | SHUNT SHORTING JUMPER                                               | SULLINS STC02SYAN          |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE               |
|-----------------|--------------|-----------------------|
| Murata Americas | 770-436-1300 | www.muratamericas.com |
| Taiyo Yuden     | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.       | 847-803-6100 | www.component.tdk.com |
| Vishay          | 402-563-6866 | www.vishay.com        |

Note: Indicate that you are using the MAX15108A when contacting these component suppliers.

## MAX15108A EV Kit Schematic

<!-- image -->

* VIA "*V1" ONLY  AT U1 MUST ONLY CONNECT TO U1 SIDE GND, (NOT L2,L3,BOTTOM LAYER)

REQUEST THICKEST COPPER POSSIBLE ON THE TOP LAYER

│

## MAX15108A EV Kit PCB Layout Diagrams

MAX15108A EV Kit-Top Silkscreen

<!-- image -->

MAX15108A EV Kit-Layer 2 PGND

<!-- image -->

MAX15108A EV Kit-Component Side

<!-- image -->

MAX15108A EV Kit-Layer 3 PGND/Signal

<!-- image -->

│

## MAX15108A EV Kit PCB Layout Diagrams

MAX15108A EV Kit-Solder Side

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX15108EVKIT# | EV Kit |

#Denotes RoHS compliant.

MAX15108A EV Kit-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION               | PAGES CHANGED   |
|-------------------|-----------------|---------------------------|-----------------|
|                 0 | 7/16            | Initial release           | -               |
|                 1 | 8/18            | Updated Bill of Materials | 3               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses aUe iPSlied. 0a[iP ,ntegUated UeseUYes the Uight to Fhange the FiUFuitU\ and sSeFi¿Fations without notiFe at an\ tiPe.

<!-- image -->

│

Evaluates: MAX15108A