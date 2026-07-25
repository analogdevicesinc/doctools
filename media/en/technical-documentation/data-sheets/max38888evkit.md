<!-- lastmod 2022-08-02 -->
## MAX38888 Evaluation Kit

## General Description

The  MAX38888  evaluation  kit  (EV  kit)  evaluates  the MAX38888  IC.  The  MAX38888  is  a  super  cap  backup regulator designed to transfer power between a super cap and a system supply rail. When the main battery is present and  above  the  minimum  system  supply  voltage,  the regulator charges the super cap at up to a 500mA rate. Once  the  super  cap  is  charged,  the  circuit  draws  only 2.5µA  of  current  while  it  maintains  the  super  cap  in  its ready  state.  When  the  main  battery  is  removed,  the regulator  prevents  the  system  from  dropping  below the  minimum  operating  voltage,  discharging  the  super cap  at  up  to  a  2.5A  rate.  The  MAX38888  is  externally programmable  for  minimum  and  maximum  super  cap voltage, minimum system voltage, and maximum charge and  discharge  currents.  The  internal  DC/DC  converter requires only a 1µH inductor.

## Features

- 2.99V to 3.36V System Output Voltage Range
- 1.42V to 2.71V Super Cap Voltage Range
- 2.5A Peak Discharge Current
- Resistor Adjustable Voltage and Current Thresholds
- Proven 2-Layer 2oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assemble and Tested

## MAX38888 EV Kit Files

| FILE                   | DECRIPTION              |
|------------------------|-------------------------|
| MAX38888 EV BOM        | EV Kit Bill of Material |
| MAX38888 EV PCB Layout | EV Kit Layout           |
| MAX38888 EV Schematic  | EV Kit Schematic        |

Ordering Information appears at end of data sheet.

Evaluates: MAX38888

## Quick Start

## Required Equipment

- MAX38888 EV kit
- 5V, 3A DC power supply
- One digital multimeter (DMM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation. Caution:  Do  not  turn on power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  onto  pins  1  and  2 jumper JU1 (EV kit enabled).
- 2) Verify that jumper JU2 is opened (No load is connected across VSYS and PGND).
- 3) Set the power supply output to 3.4V and disable the power supply.
- 4) Connect the power supply between the VSYS and PGND terminal posts.
- 5) Connect  the  DMM  between  the  VSC  and  PGND terminal posts.
- 6) Enable the power supply and verify that super cap voltage at VSC is ramping up and stops at about 2.7V.
- 7) Disable  and  disconnect  the  power  supply  from  the VSYS and PGND terminal posts.
- 8) Verify that VSYS drops to about 3V, and VSC drops to about 2.5V.
- 9) Install jumper JU2 (This connects a 51Ω load across VSYS and PGND).
- 10)  Verify that VSYS remains at 3V while VSC is ramping down toward 1.5V.
- 11)  Verify that VSYS is 0V when VSC drops below 1.5V.

<!-- image -->

## MAX38888 Evaluation Kit

## Detailed Description of Hardware

The  MAX38888  EV  kit  provides  a  flexible  circuit  to evaluate the super cap  backup  regulator. External components allow a wide range of system and super cap voltages as well as charging and discharging currents.

## EN

The MAX38888 EV kit provides a jumper (JU1) to enable or disable the MAX38888. Refer to Table 1 for JU1 jumper settings.

## VSYS Load

The MAX38888 EV kit provides a jumper (JU2) to connect a 51Ω resistive load across VSYS and PGND to simulate a  discharging  scenario  during  test.  Refer  to  Table  2  for JU2 jumper settings.

## Charge Mode

When  the  main  battery  is  present  and  is  above  the minimum  system  supply  voltage,  the  regulator  charges the super cap at up to a 500mA rate. The MAX38888 EV Kit  minimum  system  supply  voltage  is  set  to  3.36V,  by resistors R5 and R6 with V FBS  = 0.56V.

## Table 1. EN (JU1)

| JU1 SHUNT POSITION   | DESCRIPTION                              |
|----------------------|------------------------------------------|
| 1-2*                 | Enabled. EN = VSYS                       |
| 2-3                  | Disabled. EN = PGND                      |
| Not Installed        | Enabled. EN = VSYS (through resistor R9) |

*Default position.

## Table 2. VSYS Load (JU2)

| JU2 SHUNT POSITION   | DESCRIPTION                                                       |
|----------------------|-------------------------------------------------------------------|
| Installed            | Test Mode: A 51Ω resistive load is connected across VSYS and PGND |
| Not Installed*       | Normal Operating Mode                                             |

*Default position.

## Ready Mode

Once the super cap is charged to its maximum voltage, 2.7V, the circuit draws only 2.5µA of current while it maintains the super cap in its ready state. The MAX38888 EV Kit maximum super cap voltage is set to 2.7V, by resistors R1, R2, and R3 with V FBCH  = 0.5V,

## Discharge Mode

When  the  main  battery is removed,  the regulator discharges the super cap at up to a 2.5A rate to prevent the  system  from  dropping  below  the  minimum  operating  voltage.  The  MAX38888  EV  kit  minimum  operating voltage  is  set  to  2.99V,  by  resistors  R5  and  R6  with VFBS = 0.5V.

## Preserve Mode

As  the  super  cap  is  discharged  toward  its  minimum voltage,  1.42V,  the  MAX38888  disconnects  all  circuitry from  the  super  cap  and  draws  only  2.5µA  of  current  to preserve  the  remaining  capacity  for  keeping  alive  the real-time clock, memory, or other low-level function. The MAX38888 EV Kit minimum super cap voltage is set to 1.42V, by resistors R1, R2, and R3 with V FBCL  = 0.475V.

## Charge/Discharge Current Configuration

The MAX38888 EV Kit provides a resistor R4 to configure the charge/discharge current rate for the super cap.

The peak discharge current is set by resistor R4 connecting between the ISET and GND pins.

IDISCHARGE = 2.5A x (20kΩ/R4)

The super cap charging current is internally set to 1/5 of the discharge current.

ICHARGE = 0.5A x (20kΩ/R4)

Choose a value of R4 between 20kΩ to 100kΩ to ensure accurate current compliance.

│

Evaluates: MAX38888

## MAX38888 EV Kit Bill of Materials

|   ITEM | REF_DES       | DNI/DNP   |   QTY | MFGPART#                                                         | MANUFACTURER                                         | VALUE        | DESCRIPTION                                                                                                                  |
|--------|---------------|-----------|-------|------------------------------------------------------------------|------------------------------------------------------|--------------|------------------------------------------------------------------------------------------------------------------------------|
|      1 | BKUPB, RDY    | -         |     2 | 5002                                                             | KEYSTONE                                             | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;                  |
|      2 | C1            | -         |     1 | GRM31CR71A226ME15                                                | MURATA                                               | 22UF         | CAPACITOR; SMT (1206); CERAMIC CHIP; 22UF; 10V; TOL = 20%; TG = -55°C TO +125°C; TC = X7R                                    |
|      3 | C2            | -         |     1 | SCCS30B116SRBA1                                                  | AVX                                                  | 11F          | CAP; THROUGH HOLE-RADIAL LEAD; 11F; +30%/-10%; 2.7V; ALUMINUM-ELECTROLYTIC ;                                                 |
|      4 | C3            | -         |     1 | C0805C226M9PAC; GRM21BR60J226ME39; JMK212BJ226MG; CL21A226MQCLQN | KEMET;MURATA; TAIYO YUDEN; SAMSUNG ELECTRO-MECHANICS | 22UF         | CAPACITOR; SMT (0805); CERAMIC CHIP; 22UF; 6.3V; TOL = 20%; TG = -55°C TO +125°C; TC = X5R                                   |
|      5 | GND           | -         |     1 | 5001                                                             | KEYSTONE                                             | N/A          | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;     |
|      6 | JU1           | -         |     1 | PEC03SAAN                                                        | SULLINS                                              | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                    |
|      7 | JU2           | -         |     1 | PEC02SAAN                                                        | SULLINS                                              | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                    |
|      8 | L1            | -         |     1 | 74437324010                                                      | WURTH ELECTRONICS INC                                | 1UH          | INDUCTOR; SMT; SHIELDED; 1UH; 20%; 5.00A                                                                                     |
|      9 | LX, VSC, VSYS | -         |     3 | 131-4353-00                                                      | TEKTRONICS                                           | 131-4353-00  | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                              |
|     10 | PGND, TP1-TP3 | -         |     4 | 108-0740-001                                                     | EMERSON NETWORK POWER                                | 108-0740-001 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                     |
|     11 | R1, R5        | -         |     2 | CRCW0603499KFK                                                   | VISHAY DALE                                          | 499K         | RESISTOR; 0603; 499K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                        |
|     12 | R2            | -         |     1 | CRCW06034023FK                                                   | VISHAY DALE                                          | 402K         | RESISTOR; 0603; 402K; 1%; 100PPM; 0.10W; THICK FILM                                                                          |
|     13 | R3            | -         |     1 | CRCW06031M80FK                                                   | VISHAY DALE                                          | 1.8M         | RESISTOR, 0603, 1.8M Ω , 1%, 100PPM, 0.10W, THICK FILM                                                                       |
|     14 | R4            | -         |     1 | MCR03EZPFX2002; ERJ-3EKF2002; CR0603-FX-2002ELF                  | ROHM;PANASONIC;BOURNS                                | 20K          | RESISTOR; 0603; 20K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                        |
|     15 | R6            | -         |     1 | RMCF0603FT2M49                                                   | STACKPOLE ELECTRONICS INC.                           | 2.49M        | RES; SMT (0603); 2.49M; 1%; ± 200PPM/DEGC; 0.10W                                                                             |
|     16 | R7, R8        | -         |     2 | CHPHT0603K1002FGT                                                | VISHAY SFERNICE                                      | 10K          | RESISTOR; 0603; 10K Ω ; 1%; 100PPM; 0.0125W; THICK FILM                                                                      |
|     17 | R9            | -         |     1 | CRCW06031M00FK; MCR03EZPFX1004                                   | VISHAY DALE;ROHM                                     | 1M           | RESISTOR, 0603, 1M Ω , 1%, 100PPM, 0.10W, THICK FILM                                                                         |
|     18 | R10-R12       | -         |     3 | CRCW06030000Z0                                                   | VISHAY DALE                                          | 0            | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.1W; THICK FILM                                                                           |
|     19 | R13           | -         |     1 | ERJ-14NF49R9U                                                    | PANASONIC                                            | 49.9         | RESISTOR; 1210; 49.9 Ω ; 1%; 100PPM; 0.5W; THICK FILM                                                                        |
|     20 | SU1, SU2      | -         |     2 | S1100-B;SX1100-B                                                 | KYCON;KYCON                                          | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT;PHOSPHOR BRONZE CONTACT = GOLD PLATED                |
|     21 | U1            | -         |     1 | MAX38888ATD+                                                     | MAXIM                                                | MAX38888ATD+ | EVKIT PART - IC; REG; SUPER CAP REGULATOR; PACKAGE OUTLINE: 21-0137; PACKAGE CODE: T1433+1; LAND PATTERN: 90-0062; TDFN14-EP |
|     22 | PCB           | -         |     1 | MAX38888                                                         | MAXIM                                                | PCB          | PCB:MAX38888                                                                                                                 |
|     23 | J2-J5         | DNP       |     0 | MAXIMPAD                                                         | N/A                                                  | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; NO WIRE TO BE SOLDERED ON THE MAXIMPAD                                                             |
|     24 | C4            | DNP       |     0 | N/A                                                              | N/A                                                  | OPEN         | CAPACITOR; SMT (1210); OPEN; IPC MAXIMUM LAND PATTERN                                                                        |

33

TOTAL

## Component Suppliers

| SUPPLIER          | WEBSITE           |
|-------------------|-------------------|
| AVX               | www.avx.com       |
| Kemet             | www.kemet.com     |
| Murata/TOKO       | www.murata.com    |
| Wurth Electronics | www.we-online.com |

Note: Indicate that you are using the MAX38888 when contacting these component suppliers.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX38888EVKIT# | EVKIT  |

#Denotes RoHS

Evaluates: MAX38888

## MAX38888 EV Kit Schematic

<!-- image -->

│

## MAX38888 EV Kit PCB Layout Diagrams

MAX38888 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

MAX38888 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX38888 EV Kit PCB Layout-Bottom Layer

<!-- image -->

│

## MAX38888 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 8/18            | Initial release          | -               |
|                 1 | 7/19            | Deleted placeholder text | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim InteJrated reserves the riJht to chanJe the circuitr\ and speci¿cations without notice at an\ time.

│

Evaluates: MAX38888