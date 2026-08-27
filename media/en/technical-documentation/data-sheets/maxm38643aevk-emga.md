<!-- lastmod 2022-08-02 -->
## MAXM38643A EMGA Evaluation Kit

## General Description

The MAXM38643A EMGA evaluation kit (EV kit) evaluates the MAXM38643A  IC in an EMGA  package. The MAXM38643A is an ultra-low quiescent current step-down DC-DC converter. The EV kit operates over an input range of 1.8V to 5.5V and provides resistor-configurable output voltages  from  0.7V  to  3.3V.  The  EV  kit  delivers  up  to 600mA of current. The EV kit comes with the MAXM38643AEMB+ installed.

## Features and Benefits

- Evaluates the MAXM38643A IC in a (2.1mm x 2.6mm) 10-pin EMGA Package
- 1.8V to 5.5V Input Range
- 0.7V to 3.3V Resistor-Configurable Output Voltages
- Up to 600mA Output Current
- Proven 2-Layer 1oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAXM38643A EV Kit Files

| FILE                   | DESCRIPTION              |
|------------------------|--------------------------|
| MAXM38643A             | EV Kit Bill of Materials |
| EMGA EV BOM MAXM38643A | EV Kit PCB Layout        |
| EMGA EV PCB MAXM38643A | EV Kit Schematic         |

Layout

EMGA

EV

Schematic Ordering Information appears at end of data sheet.

## EV Kit Photo

Evaluates: MAXM38643

## Quick Start

## Required Equipment

- MAXM38643A EMGA EV kit
- 5.5V, 3A DC power supply
- Electronic load capable of 600mA
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution: Do not turn on power supply until all connections are completed.

1. Verify that jumpers JU1 and JU2 are in their default positions, as shown in Tables 1 and 2.
2. Connect the 5.5V power supply between the IN and nearest GND terminal posts.
3. Connect the 600mA electronic load between the OUT and nearest GND terminal posts.
4. Connect the DVM between the OUT and nearest GND terminal posts.
5. Turn on the power supply.
6. Enable the electronic load.
7. Verify  that  the  voltage  at  the  OUT  terminal  post  is approximately 1.0V.

<!-- image -->

<!-- image -->

## MAXM38643A EMGA Evaluation Kit

## Detailed Description of Hardware

The MAXM38643A EMGA EV kit evaluates the MAXM38643A IC in an EMGA package. The MAXM38643A IC is an ultralow quiescent current step-down DC-DC converter. The EV kit operates over an input range of 1.8V to 5.5V and provides resistor-configurable output voltages from 0.7V to 3.3V. The EV kit delivers up to 600mA of current. The EV kit comes with the MAXM38643AEMB+ installed.

## Table 1. EN (JU1)

| SHUNT POSITION   | DESCRIPTION                                                    |
|------------------|----------------------------------------------------------------|
| 1-2*             | EV Kit Enabled                                                 |
| 1-3              | EV Kit Controlled by External (TTL) Source Connected to EXT_EN |
| 1-4              | EV Kit Disabled                                                |

## Table 2. RSEL (JU2)

| SHUNT POSITION   | DESCRIPTION   |
|------------------|---------------|
| 1-2*             | OUT = 1.0V    |
| 1-3              | OUT = 1.5V    |
| 1-4              | OUT = 1.8V    |
| 1-5              | OUT = 3.3V    |
| OPEN             | OUT = 2.5V    |

## EN

The MAXM38643A EMGA EV kit provides a jumper JU1 to enable or disable the MAXM38643A. See Table 1 for jumper JU1 settings.

## RSEL

The MAXM38643A EMGA EV kit provides a jumper JU2 to configure the RSEL pin of the MAXM38643A. See Table 2 for jumper JU2 settings.

## Ordering Information

| PART               | TYPE   |
|--------------------|--------|
| MAXM38643AEVK#EMGA | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAXM38643

## MAXM38643A EMGA Evaluation Kit

## MAXM38643A EMGA EV Kit Bill of Materials

|   ITEM | REF_DES             |   QTY | MFG PART#                                                     | MANUFACTURER                          | DESCRIPTION                                                                                                                                                                 |
|--------|---------------------|-------|---------------------------------------------------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | C1-C3               |     3 | CL10A226KQ8NRN                                                | SAMSUNG                               | CAP; SMT (0603); 22µF; 10%; 6.3V; X5R; CERAMIC                                                                                                                              |
|      2 | C5                  |     1 | 25SVPF100M                                                    | PANASONIC                             | CAP; SMT (CASE_E7); 100µF; 20%; 25V; ALUMINUM-ORGANIC                                                                                                                       |
|      3 | EXT_EN              |     1 | 5007                                                          | KEYSTONE                              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                      |
|      4 | GND_1, GND_2, GND_4 |     3 | 5006                                                          | KEYSTONE                              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                      |
|      5 | GND_3, IN, OUT      |     3 | 108-0740-001                                                  | EMERSON NETWORK POWER                 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                    |
|      6 | JU1                 |     1 | PEC04SAAN                                                     | SULLINS ELECTRONICS CORP.             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                   |
|      7 | JU2                 |     1 | PBC05SAAN                                                     | SULLINS ELECTRONICS CORP.             | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 5PINS; -65 DEGC TO +125 DEGC                                                                                            |
|      8 | LX                  |     1 | 131-4353-00                                                   | TEKTRONICS                            | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                                                             |
|      9 | R2                  |     1 | CRCW0603191KFK                                                | VISHAY DALE                           | RES; SMT (0603); 191kΩ; 1%; +/-100PPM/DEGK; 0.1000W                                                                                                                         |
|     10 | R3                  |     1 | ERJ-3EKF6343                                                  | PANASONIC                             | RES; SMT (0603); 634kΩ; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                         |
|     11 | R4                  |     1 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603FX2002ELF; CRCW060320K0FK | ROHM; PANASONIC; BOURNS; VISHAY DALE  | RES; SMT (0603); 20kΩ; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                          |
|     12 | R5                  |     1 | CRCW060356K2FK; ERJ-3EKF5622                                  | VISHAY; PANASONIC                     | RES; SMT (0603); 56.2kΩ; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                        |
|     13 | R6                  |     1 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH | RES; SMT (0603); 0Ω; 5%; JUMPER; 0.1000W                                                                                                                                    |
|     14 | R7                  |     1 | ERJ-2GE0R00                                                   | PANASONIC                             | RES; SMT (0402); 0Ω; JUMPER; 0.1000W                                                                                                                                        |
|     15 | SU1, SU2            |     2 | S1100-B; SX1100-B; STC02SYAN                                  | KYCON; SULLINS ELECTRONICS CORP.      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                    |
|     16 | U1                  |     1 | MAXM38643AEMB+                                                | MAXIM                                 | EVKIT PART - IC; TINY 1.8V - 5.5V INPUT; 300NANO-AMP NANOPOWER IQ; 600 MILLI-AMP NANOPOWER BUCK MODULE; PACKAGE OUTLINE: 21-100245; PACKAGE LAND PATTERN: 90-100084; EMGA10 |
|     17 | PCB                 |     1 | MAXM38643AEMGA                                                | MAXIM                                 | PCB: MAXM38643AEMGA                                                                                                                                                         |

Evaluates: MAXM38643

Evaluates: MAXM38643

| 18    | R1   |   0 | N/A   | N/A   | PACKAGE OUTLINE 0603 RESISTOR            |
|-------|------|-----|-------|-------|------------------------------------------|
| 19    | C4   |   0 | N/A   | N/A   | PACKAGE OUTLINE 0603 NON-POLAR CAPACITOR |
| Total |      |  24 |       |       |                                          |

## Component Suppliers

| SUPPLIER            | WEBSITE                              |
|---------------------|--------------------------------------|
| Samsung Electronics | www.samsung.com                      |
| Panasonic           | https://na.industrial.panasonic.com/ |

Note : Indicate that you are using the MAXM38643A when contacting these component suppliers.

## MAXM38643A EMGA EV Kit Schematic

<!-- image -->

## MAXM38643A EMGA EV Kit PCB Layout

MAXM38643A EMGA EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAXM38643A EMGA EV Kit PCB Layout-Bottom

<!-- image -->

MAXM38643A EMGA EV Kit PCB Layout-Top

<!-- image -->

MAXM38643A EMGA EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

## MAXM38643A EMGA Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 05/21           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAXM38643