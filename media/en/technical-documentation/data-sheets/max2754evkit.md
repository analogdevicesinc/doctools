<!-- lastmod 2022-08-02 -->
## General Description

The MAX2754 evaluation kit (EV kit) simplifies evaluation of the MAX2754 VCO. This kit enables testing of the device's RF performance and requires no additional support circuitry. The signal output uses an SMA connector to facilitate the connection to RF test equipment.

## Component List

| DESIGNATION           |   QTY | DESCRIPTION                                                        |
|-----------------------|-------|--------------------------------------------------------------------|
| C1                    |     1 | 0.33µF ±10% ceramic capacitor (0603) Murata GRM36 334K016          |
| C2, C4                |     2 | 1000pF ±10% ceramic capacitors (0402) Murata GRM36X7R102K050       |
| C3, C5                |     0 | Not installed                                                      |
| C6                    |     1 | 330pF ±10% ceramic capacitor (0402) Murata GRM36X7R331K050         |
| C7                    |     1 | 0.1µF ±10% ceramic capacitor (0603) Murata GRM39X7R104K016         |
| R1, R2                |     2 | 1k Ω ±5% resistors (0402)                                          |
| R4                    |     1 | 0 Ω ±5% resistor (0402)                                            |
| MOD, OUT              |     2 | SMA connectors ( ge-mount) EFJohnson 142-0701-801 Digi-Key J502-ND |
| GND, SHDN, TUNE, V CC |     4 | Test points, 1-pin header Mouser 151-203 or equivalent             |
| JU1                   |     1 | Jumper, SIP3, 3-pin header Digi-Key S9000-ND or equivalent         |

## Component Suppliers

| SUPPLIER           | PHONE        | FAX          |
|--------------------|--------------|--------------|
| Murata Electronics | 800-831-9172 | 814-238-0490 |
| Taiyo Yuden        | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX2754 when contacting these component suppliers.

Quick Start

The MAX2754 EV kit is fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

<!-- image -->

Features

- ♦ Easy Evaluation of MAX2754
- ♦ +2.7V to +5.5V Single-Supply Operation
- ♦ RF Output Matched to 50 Ω
- ♦ All Critical Peripheral Components Included

## Ordering Information

| PART          | TEMP. RANGE        | IC PACKAGE   |
|---------------|--------------------|--------------|
| MAX2754 EVKIT | -40 ° C to +85 ° C | 8 µMAX       |

## Test Equipment Required

This section lists  the  recommended test equipment to verify  operation of the MAX2754. It is intended as a guide only, and some substitutions are possible.

- Three power supplies at +2.7V to +5.5V
- An ammeter (optional)
- An RF spectrum analyzer (HP 8561E, for example) that  covers the operating frequency range of the MAX2754, as well as a few harmonics
- A 50 Ω SMA cable

## Connections and Setup

This section provides a step-by-step guide to the functions and operation of these EV kits.

- 1) Connect a DC supply set to +3V (through an ammeter, if desired) to the VCC and GND terminals on the EV kit.
- 2) Apply +3V to the SHDN control input.
- 3) Turn on the DC supply. The supply current should read about 13.5mA.
- 4) Connect the VCO output to a spectrum analyzer with a 50 Ω coaxial cable (minimize length).
- 5) Apply a variable DC voltage to the TUNE input (+0.4V to +2.4V).
- 6) Check fMIN and fMAX on the spectrum analyzer by varying the tuning voltage.
- 7)  Apply a variable DC voltage to the MOD input (+0.4V to +2.4V).
- 8) Check modulation peak frequency deviation on the spectrum analyzer by varying the modulation voltage.
- 9) Check the output power level (-5dBm typ).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX2754 Evaluation Kit

<!-- image -->

Figure 1. MAX2754 EV Kit Schematic

<!-- image -->

Figure 2. MAX2754 EV Kit Component Placement Guide-Top Silkscreen

Figure 3. MAX2754 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX2754 EV Kit PC Board Layout-Ground Plane 2

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

2