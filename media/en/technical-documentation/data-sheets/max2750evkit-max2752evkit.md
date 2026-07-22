<!-- lastmod 2022-08-04 -->
<!-- image -->

## MAX2750/MAX2751/MAX2752 Evaluation Kits

## General Description

The MAX2750/MAX2751/MAX2752 evaluation kits (EV kits) simplify evaluation of the MAX2750/MAX2751/ MAX2752 VCOs. These kits enable testing of the devices' RF performance and require no additional support circuitry. The signal output uses an SMA connector to facilitate the connection to RF test equipment.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                   |
|----------------|-------|---------------------------------------------------------------|
| C2, C3, C4, C5 |     4 | 220pF ±5% ceramic capacitors (0603) Murata GRM39COH0G221J50   |
| C1, C6         |     2 | 0.1µF ±5% ceramic capacitors (0603) Taiyo Yuden EMK107BJ104KA |
| R1, R2         |     2 | 1k Ω ±5% resistors (0603)                                     |
| OUT            |     1 | SMA connector (PC edge mount) EFJohnson 142-0701-801          |
| JU1            |     4 | 3-pin headers                                                 |
| U1             |     1 | MAX2750EUA, MAX2751EUA, or MAX2752EUA                         |

## Component Suppliers

| SUPPLIER           | PHONE        | FAX          |
|--------------------|--------------|--------------|
| Murata Electronics | 800-831-9172 | 814-238-0490 |
| Taiyo Yuden        | 408-573-4150 | 408-573-4159 |

NOTE: Please indicate that you are using the MAX2750, MAX2751, or MAX2752 when contacting these component suppliers.

## Quick Start

The MAX2750/MAX2751/MAX2752 EV kits are fully assembled and factory tested. Follow the instructions in the Connections and Setup section for proper device evaluation.

## Features

- ♦ Easy Evaluation of MAX2750/MAX2751/MAX2752
- ♦ +2.7V to +5.5V Single-Supply Operation
- ♦ RF Output Matched to 50 Ω
- ♦ All Critical Peripheral Components Included

## Ordering Information

| PART          | TEMP. RANGE    | IC-PACKAGE   |
|---------------|----------------|--------------|
| MAX2750 EVKIT | -40°C to +85°C | 8 µMAX       |
| MAX2751 EVKIT | -40°C to +85°C | 8 µMAX       |
| MAX2752 EVKIT | -40°C to +85°C | 8 µMAX       |

## Test Equipment Required

This section lists  the  recommended test equipment to verify operation of the MAX2750/MAX2751/MAX2752. It is intended as a guide only, and some substitutions are possible.

- A two-channel power supply at +2.7V to +5.5V
- An ammeter (optional)
- An RF spectrum analyzer (HP 8561E, for example) that  covers the operating frequency range of the MAX2750/MAX2751/MAX2752, as well as a few harmonics
- A 50 Ω SMA cable

## Connections and Setup

This section provides a step-by-step guide to the functions and operation of these EV kits.

- 1) Connect a DC supply set to +3V (through an ammeter, if desired) to the VCC and GND terminals on the EV kit.
- 2) Apply +3V to the SHDN control input.
- 3) Turn on the DC supply. The supply current should read about 10mA.
- 4) Connect the VCO output to a spectrum analyzer with a 50 Ω coaxial cable (minimize length).
- 5) Apply a variable DC voltage to the TUNE input (+0.4V to +2.4V).
- 6) Check fMIN and fMAX on the spectrum analyzer by varying the tuning voltage.
- 7) Check the output power level (-3dBm typ).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX2750/MAX2751/MAX2752 Evaluation Kits

<!-- image -->

Figure 1. MAX2750/MAX2751/MAX2752 EV Kits Schematic

<!-- image -->

Figure 2. MAX2750/MAX2751/MAX2752 EV Kits Component Placement Guide-Component Side

Figure 3. MAX2750/MAX2751/MAX2752 EV Kits PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX2750/MAX2751/MAX2752 EV Kits PC Board Layout-Ground Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

2

<!-- image -->