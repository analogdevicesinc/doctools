<!-- lastmod 2022-08-02 -->
## MAX38886 Evaluation Kit

## General Description

The  MAX38886  evaluation  kit  (EV  kit)  evaluates  the MAX38886  IC.  The  MAX38886  is  a  super  cap  backup regulator  designed  to  transfer  power  between  a  super cap and a system supply rail. When the main battery is present and above the minimum system supply voltage, the  regulator  charges  the  super  cap  at  up  to  a  500mA rate. Once the super cap is charged, the circuit draws only 3μA of current while it maintains the super cap in its ready state.  When  the  main  battery  is  removed,  the  regulator prevents  the  system  from  dropping  below  the  minimum operating voltage, discharging the super cap at up to a 2.5A peak inductor current. Multiple MAX38886 ICs can be  connected  in  parallel  for  higher  current  applications. The  MAX38886  is  externally  programmable  for  minimum and maximum super cap voltage, minimum system voltage,  and  maximum  charge  and  discharge  currents. The internal DC-DC converter requires only a 1μH induc -tor and a 22μF capacitor.

## Features

- 2.99V to 3.36V System Output Voltage Range
- 0.5V to 2.71V Super Cap Voltage Range
- 2.5A Peak Discharge Current
- Resistor-Adjustable Voltage and Current Thresholds
- Proven 2-Layer, 2oz Copper PCB Layout
- Compact Solution Size
- Fully Assembled and Tested

## MAX38886 EV Kit Files

| FILE                   | DESCRIPTION             |
|------------------------|-------------------------|
| MAX38886 EV BOM        | EV Kit Bill of Material |
| MAX38886 EV PCB Layout | EV Kit Layout           |
| MAX38886 EV Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

Evaluates: MAX38886

## Quick Start

## Required Equipment

- MAX38886 EV kit
- 5V, 3A DC power supply
- One digital multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

Caution: Do not turn on power supply until all connections are completed.

- 1) Verify that a shunt is installed onto pins 1 and 2 and jumper JU1 (EV kit enabled).
- 2) Verify that jumper JU2 is opened (No load is connected across VSYS and PGND).
- 3) Set the power supply output to 3.4V, and disable the power supply.
- 4) Connect  the  power  supply  between  the  VSYS  and PGND terminal posts.
- 5) Connect  the  DMM  between  the  VSC  and  PGND terminal posts.
- 6) Enable the power supply and verify that the super cap voltage at VSC is ramping up and stops at about 2.7V.
- 7) Disable  and  disconnect  the  power  supply  from  the VSYS and PGND terminal posts.
- 8) Verify that VSYS drops to about 3V and VSC drops to about 2.5V.
- 9) Install jumper JU2. This connects a 51Ω load across VSYS and PGND.
- 10)  Verify that VSYS remains at 3V while VSC is ramping down toward 0.5V.
- 11)  Verify that VSYS is 0V when VSC drops below 0.5V.

<!-- image -->

## MAX38886 Evaluation Kit

## Detailed Description of Hardware

The MAX38886 EV kit provides a flexible circuit to evaluate the super cap backup regulator. External components allow a wide range of system and super cap voltages as well as charging and discharging currents.

## EN

The MAX38886 EV kit provides a jumper (JU1) to enable or  disable  the  MAX38886.  See  Table  1  for  JU1  jumper settings.

## VSYS Load

The MAX38886 EV kit provides a jumper (JU2) to connect a 51Ω resistive load across VSYS and PGND to simulate a discharging scenario during test. See Table 2 for JU2 jumper settings.

## Charge Mode

When the main battery is present and is above the minimum system  supply  voltage,  the  regulator  charges  the super cap at up to a 500mA rate. The MAX38886 EV kit minimum system supply voltage is set to 3.36V by resistors R5 and R6 with V FBS = 0.56V.

## Table 1. EN (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION                              |
|----------------------|------------------------------------------|
| 1-2*                 | Enabled. EN = VSYS                       |
| 2-3                  | Disabled. EN = PGND                      |
| Not Installed        | Enabled. EN = VSYS (through resistor R9) |

## Table 2. VSYS Load (JU2)

| JU2 SHUNT POSITION   | DESCRIPTION                                                        |
|----------------------|--------------------------------------------------------------------|
| Installed            | Test Mode: A 51Ω resistive load is connected across VSYS and PGND. |
| Not Installed*       | Normal operating mode                                              |

## Ready Mode

Once the super cap is charged to its maximum voltage of 2.7V, the circuit draws only 3μA of current while it main -tains the super cap in its ready state. The MAX38886 EV kit maximum super cap voltage is set to 2.7V by resistors R1 and R2 with V FBCH = 0.5V.

## Discharge Mode

When  the  main  battery is removed,  the regulator discharges the super cap at up to a 2.5A peak inductor current  to  prevent  the  system  from  dropping  below  the minimum operating voltage. The MAX38886 EV kit minimum operating voltage is set to 2.99V by resistors R5 and R6 with V FBS = 0.5V.

## Charge/Discharge Current Configuration

The MAX38886 EV kit provides a resistor (R4) to configure the charge/discharge current rate for the super cap.

The  peak  discharge  current  is  set  by  connecting  R4 between the ISET and GND pins.

I DISCHARGE = 2.5A x (20kΩ/R4)

The super cap charging current is internally set to 1/5 of the discharge current.

I CHARGE = 0.5A x (20kΩ/R4)

Choose a value of R4 between 20kΩ to 100kΩ to ensure accurate current compliance.

## Component Suppliers

| SUPPLIER          | WEBSITE           |
|-------------------|-------------------|
| AVX               | www.avx.com       |
| Kemet             | www.kemet.com     |
| Murata/TOKO       | www.murata.com    |
| Wurth Electronics | www.we-online.com |

Note: Indicate that you are using the MAX38886 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX38886EVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX38886

│

## MAX38886 EV Kit Bill of Materials

| ITEM   |   QTY | REF DES       | MAXINV             | MFG PART #                                                                     | MANUFACTURER                                          | VALUE        | DESCRIPTION                                                                                                                                                                                                 |
|--------|-------|---------------|--------------------|--------------------------------------------------------------------------------|-------------------------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      |     1 | C1            | 20-0022U-CA10      | GRM31CR71A226ME15                                                              | MURATA                                                | 22UF         | CAPACITOR; SMT (1206); CERAMIC CHIP; 22UF; 10V; TOL=20%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                   |
| 2      |     1 | C2            | 20-00011-DA38      | SCCS30B116SRBA1                                                                | AVX                                                   | 11F          | CAP; THROUGH HOLE-RADIAL LEAD; 11F; +30%/-10%; 2.7V; ALUMINUM-ELECTROLYTIC; NOTE:PURCHASE DIRECT FROM THE MANUFACTURER                                                                                      |
| 3      |     1 | C3            | 20-0022U-K7        | C0805C226M9PAC; GRM21BR60J226ME39; JMK212BJ226MG; CL21A226MQCLQN; 885012107005 | KEMET;MURATA;TAIYO YUDEN; SAMSUNG EL;WURTH ELECTRONIK | 22UF         | CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                                                   |
| 4      |     1 | GND           | 02-TPMINI5001-00   | 5001                                                                           | KEYSTONE                                              | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                               |
| 5      |     1 | JU1           | 01-PEC03SAAN3P-21  | PEC03SAAN                                                                      | SULLINS                                               | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                                   |
| 6      |     1 | JU2           | 01-PEC02SAAN2P-21  | PEC02SAAN                                                                      | SULLINS                                               | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                                                   |
| 7      |     1 | L1            | 50-0001U-0VF       | 74437324010                                                                    | WURTH ELECTRONICS INC                                 | 1UH          | INDUCTOR; SMT; SHIELDED; 1UH; 20%; 5.00A                                                                                                                                                                    |
| 8      |     3 | LX, VSC, VSYS | 01-131435300-10    | 131-4353-00                                                                    | TEKTRONICS                                            | 131-4353-00  | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                                                                                                             |
| 9      |     4 | PGND, TP1-TP3 | 01-10807400011P-80 | 108-0740-001                                                                   | CINCH CONNECTIVITY SOLUTIONS JOHNSON                  | 108-0740-001 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                                                                                    |
| 10     |     2 | R1, R5        | 80-0499K-24        | CRCW0603499KFK; ERJ-3EKF4993; RC0603FR-07499KL                                 | VISHAY DALE;PANASONIC; YAGEO                          | 499K         | RESISTOR; 0603; 499K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                     |
| 11     |     1 | R2            | 80-002M2-24        | CRCW06032M20FK                                                                 | VISHAY DALE                                           | 2.2M         | RESISTOR, 0603, 2.2M OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                                                     |
| 12     |     1 | R4            | 80-0020K-24        | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF; CRCW060320K0FK                | ROHM;PANASONIC;BOURNS; VISHAY DALE                    | 20K          | RESISTOR; 0603; 20K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                      |
| 13     |     1 | R6            | 80-02M49-24C       | RMCF0603FT2M49                                                                 | STACKPOLE ELECTRONICS INC.                            | 2.49M        | RES; SMT (0603); 2.49M; 1%; +/-200PPM/DEGC; 0.10W                                                                                                                                                           |
| 14     |     1 | R9            | 80-0001M-24        | CRCW06031M00FK; MCR03EZPFX1004                                                 | VISHAY DALE;ROHM                                      | 1M           | RESISTOR, 0603, 1M OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                                                                                                       |
| 15     |     3 | R10-R12       | 80-0000R-AA6       | CRCW06030000Z0                                                                 | VISHAY DALE                                           | 0            | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                                                                                                                         |
| 16     |     1 | R13           | 80-049R9-I8        | ERJ-14NF49R9                                                                   | PANASONIC                                             | 49.9         | RESISTOR; 1210; 49.9 OHM; 1%; 100PPM; 0.5W; THICK FILM                                                                                                                                                      |
| 17     |     2 | SU1, SU2      | 02-JMPFS1100B-00   | S1100-B;SX1100-B; STC02SYAN                                                    | KYCON;KYCON; SULLINS ELECTRONICS CORP.                | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                                     |
| 18     |     1 | U1            | 00-SAMPLE-01       | MAX38886ATD+                                                                   | MAXIM                                                 | MAX38886ATD+ | EVKIT PART - IC; REG; 2.5V-5.0V; 0.5A/2.5A REVERSIBLE BUCK/BOOST REGULATOR FOR BACKUP POWER APPLICATIONS; TDFN14-EP; PACKAGE OUTLINE DRAWING: 21-0137; LAND PATTERN NUMBER: 90-0063; PACKAGE CODE: T1433+2C |
| TOTAL  |       |               |                    |                                                                                |                                                       |              | 27                                                                                                                                                                                                          |

Evaluates: MAX38886

## MAX38886 EV Kit Schematic Diagram

<!-- image -->

│

## MAX38886 EV Kit PCB Layout Diagrams

MAX38886 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX38886 EV Kit PCB Layout-Top Assembly

<!-- image -->

│

## MAX38886 EV Kit PCB Layout Diagrams (continued)

MAX38886 EV Kit PCB Layout-Bottom View

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserves the riJht to chanJe the circuitry and speci¿cations without notice at any time.

│

Evaluates: MAX38886