<!-- lastmod 2022-08-02 -->
## General Description

The MAX2753 evaluation kit (EV kit) simplifies evaluation of the MAX2753 VCO. This kit enables testing of the device's RF performance and requires no additional support circuitry. The signal outputs use two SMA connectors to facilitate the connection to RF test equipment.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| C2, C3, C4    |     3 | 220pF ±5% ceramic capacitors (0603) Murata GRM39COH0G221J50   |
| C1, C5        |     2 | 0.1µF ±5% ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA |
| R1, R2        |     2 | 1k Ω ±5% resistors (0603)                                     |
| OUTP, OUTN    |     2 | SMA connector (PC edge-mount) EFJohnson 142-0701-801          |
| JU1           |     4 | 3-pin headers                                                 |
| U1            |     1 | MAX2753EUA                                                    |

## Component Suppliers

| SUPPLIER           | PHONE        | FAX          |
|--------------------|--------------|--------------|
| Murata Electronics | 800-831-9172 | 814-238-0490 |
| Taiyo Yuden        | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX2753 when contacting these component suppliers.

## Quick Start

The MAX2753 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Test Equipment Required

This section lists  the  recommended test equipment to verify  operation of the MAX2753. It is intended as a guide only, and some substitutions are possible.

- A two-channel power supply at +2.7V to +5.5V
- An ammeter (optional)
- An RF spectrum analyzer (HP 8561E, for example) that  covers the operating frequency range of the MAX2753, as well as a few harmonics

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ Easy Evaluation of MAX2753
- ♦ +2.7V to +5.5V Single-Supply Operation
- ♦ RF Outputs Matched to 50 Ω
- ♦ All Critical Peripheral Components Included

## Ordering Information

| PART          | TEMP. RANGE        | PIN-PACKAGE   |
|---------------|--------------------|---------------|
| MAX2753 EVKIT | -40 ° C to +85 ° C | 8 µ MAX       |

- A 50 Ω SMA cable
- A 50 Ω SMA termination
- A 50 Ω balun (optional)

## Connections and Setup

This section provides a step-by-step guide to the functions and operation of these EV kits.

- 1) Connect 50 Ω SMA termination to OUTN.
- 2) Connect a DC supply set to +3V (through an ammeter, if desired) to the VCC and GND terminals on the EV kit.
- 3) Apply +3V to the SHDN control input.
- 4) Turn on the DC supply. The supply current should read about 9mA.
- 5) Connect the VCO output, OUTP, to a spectrum analyzer with a 50 Ω coaxial cable (minimize length). To measure differential output power, a 50 Ω balun is required.
- 6) Apply a variable DC voltage to the TUNE input (+0.4V to +2.4V).
- 7) Check fMIN and fMAX on the spectrum analyzer by varying the tuning voltage.
- 8) Check the output power level (-11dBm typ singleended, -8dBm differential).
- 9) Connect the 50 Ω termination to OUTP
- 10) Repeat steps 5 through 8.

Maxim Integrated Products

1

## MAX2753 Evaluation Kit

<!-- image -->

Figure 1. MAX2753 EV Kit Schematic

<!-- image -->

Figure 2. MAX2753 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX2753 EV Kit PC Board Layout-Ground Plane

Figure 3. MAX2753 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX2753 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600