<!-- lastmod 2022-08-02 -->
## MAX38889A Evaluation Kit

## General Description

The  MAX38889A  evaluation  kit  (EV  kit)  evaluates  the MAX38889  supercapacitor  backup  regulator,  which  is designed to transfer power between a supercapacitor and a system supply rail. When the main battery is present and above  the  minimum  system  voltage  for  charging,  the MAX38889 charges the supercapacitor with an average current of 1.5A.

Once the supercapacitor is charged, the circuit draws only 4μA of current while it maintains the supercapacitor in its ready  state.  When  the  main  battery  is  removed,  the MAX38889  draws  power  from  the  supercapacitor  and regulates the system voltage to the set backup voltage with a programmed maximum peak inductor current of 3A. The MAX38889  is  externally  programmable  for  maximum supercapacitor  voltage,  system  backup  voltage,  peak charging, and peak backup inductor currents.

## Features and Benefits

- 2.5V to 5.5V System Output Voltage Range
- 0.5V to 5.5V Supercapacitor Voltage Range
- 3A Peak Charging and Backup Inductor Currents
- Resistor-Adjustable VSYS, VCAP Voltages
- Resistor-Adjustable Charging and Backup Currents
- Proven Two-Layer, 2oz Copper PCB Layout
- Demonstrates Compact Solution Size
- Fully Assembled and Tested

## MAX38889A EV Kit Files

| FILE                    | DESCRIPTION              |
|-------------------------|--------------------------|
| MAX38889A EV BOM        | EV Kit Bill of Materials |
| MAX38889A EV PCB Layout | EV Kit Layout            |
| MAX38889A EV Schematic  | EV Kit Schematic         |

Ordering Information appears at end of data sheet.

Evaluates: MAX38889

## Quick Start

## Required Equipment

- MAX38889A EV Kit
- 6V, 4A DC Power Supply
- Two Digital Multimeters (DMM)

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation.

Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  onto  pins  1  and  2, jumper ENC (charging enabled).
- 2) Verify  that  a  shunt  is  installed  onto  pins  1  and  2, jumper ENB (backup enabled).
- 3) Verify  that  jumper  LOAD  is  opened.  (No  load  is connected across VSYS and PGND.)
- 4) Set the power supply output to 3.4V and disable the power supply.
- 5) Connect  the  power  supply  between  the  VSYS  and PGND terminal posts.
- 6) Connect  the  DMM  between  the  VSYS  and  PGND terminal posts.
- 7) Connect  the  DMM  between  the  VCAP  and  PGND terminal posts.
- 8) Enable the power supply and verify that the supercapacitor  voltage  at  VCAP  is  ramping  up  and stops at about 2.7V.
- 9) Disable  and  disconnect  the  power  supply  from  the VSYS and PGND terminal posts.
- 10)  Verify that VSYS regulates to 3V and the supercapacitor starts to discharge.
- 11)  Install  jumper  JU2.  (This  connects  a  4.02Ω  load across VSYS and PGND.)
- 12)  Verify  that  VSYS  regulates  to  3V  while  VCAP  is ramping down to 1V.
- 13)  Verify that VSYS is 0V when VCAP drops below 1V.

<!-- image -->

## MAX38889A EV Kit Photo

<!-- image -->

## Detailed Description of Hardware

The MAX38889A EV kit provides a flexible circuit to evaluate the supercapacitor backup regulator. External components allow a wide range of system and supercapacitor voltages as well as charging and discharging currents.

## Charger Enable (ENC)

The MAX38889A EV kit provides a jumper (ENC) to enable or disable the supercapacitor charging by the MAX38889 when VSYS is above the charging threshold. See Table 1 for ENC jumper settings.

## Table 1. ENC

| SHUNT POSITION   | DESCRIPTION                  |
|------------------|------------------------------|
| 1-2*             | EN = VSYS. Charging Enabled  |
| 2-3              | EN = PGND. Charging Disabled |

## System Backup (ENB)

The MAX38889A EV kit provides a jumper (ENB) to enable or disable the MAX38889 system backup while VSYS drops below the backup threshold. See Table 2 for ENB jumper settings.

## Table 2. ENB

| SHUNT POSITION   | DESCRIPTION                |
|------------------|----------------------------|
| 1-2*             | EN = VSYS. Backup Enabled  |
| 2-3              | EN = PGND. Backup Disabled |

## VSYS Load (LOAD)

The MAX38889A EV kit provides a jumper (LOAD) to connect a 4.02Ω resistive load across VSYS and PGND to simulate a discharging scenario during test. See Table 3 for LOAD jumper settings.

## Table 3.  LOAD

| SHUNT POSITION   | DESCRIPTION                                                         |
|------------------|---------------------------------------------------------------------|
| 1-2              | Test mode: A 4.02Ω resistive load is connected across VSYS and PGND |
| Any 1 pin only*  | Normal operating mode                                               |

## Charge Mode

When the main battery is present and above the minimum system voltage for charging, the MAX38889 charges the supercapacitor with an average current of 1.5A. The MAX38889A EV kit backup voltage is set to 3V by resistors R5 and R6 with V FBS  = 1.2V.

## Ready Mode

The MAX38889A EV kit maximum supercapacitor voltage is set to 2.7V by resistors R1, R2, and R3 with V FBCH  = 0.5V. Once the supercapacitor is charged to the set maximum charge voltage of 2.7V, the MAX38889 consumes only 4μA current. The MAX38889A EV kit provides a RDY test point to monitor the supercapacitor charge status. The RDY test point will be high when the voltage of the FBCR pin crosses the FBCR threshold (V TH\_FBCR  = 0.5V) set by R1, R2, and R3. In this EV kit, the VCAP at which RDY goes high is 1.5V. Similarly, when the supercapacitor is providing backup, the RDY flag goes low when the supercapacitor discharges below 1.5V.

## Discharge (Backup) Mode

When the main battery is removed and V FBS  drops to 1.2V, the MAX38889 draws power from the supercapacitor and regulates the VSYS to the set backup voltage. The backup voltage is set to 3V by resistors R5 and R6 with V FBS  = 1.2V.

The MAX38889A EV kit provides a BKB test point to monitor the system backup status. BKB is pulled low when the system is backing up (the supercapacitor is discharging) and pulled high when the system is charging or in idle state.

## Charge/Backup Current Configuration

The MAX38889A EV kit provides a resistor R4 to configure the charge/backup peak inductor current.

The peak inductor current is set by resistor R4 connecting between the ISET and GND pins.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Set R4 to 33kΩ to ensure accurate current compliance.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX38889AEVKIT# | EV Kit |

#Denotes RoHS-compliant.

## Component Suppliers

| SUPPLIER          | WEBSITE           |
|-------------------|-------------------|
| AVX               | www.avx.com       |
| Kemet             | www.kemet.com     |
| Murata/TOKO       | www.murata.com    |
| Wurth Electronics | www.we-online.com |

Note: Indicate that you are using the MAX38889A when contacting these component suppliers.

<!-- formula-not-decoded -->

## MAX38889A EV Kit Bill of Materials

|   ITEM | REF_DES        |   QTY | VALUE        | DESCRIPTION                                                                                                        | MFG PART #                                                                                | MANUFACTURER                              |
|--------|----------------|-------|--------------|--------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------|
|      1 | BKB, RDY       |     2 | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;              | 5002                                                                                      | KEYSTONE                                  |
|      2 | C1, C6, C7     |     3 | 22µF         | CAP; SMT (1206); 22µF; 10%; 10V; X7R; CERAMIC                                                                      | GCM31CR71A226KE02                                                                         | MURATA                                    |
|      3 | C2             |     1 | 11F          | CAP; THROUGH HOLE- RADIAL LEAD; 11F; +30%/- 10%; 2.7V; ALUMINUM- ELECTROLYTIC;                                     | SCCS30B116SRBA1                                                                           | AVX                                       |
|      4 | C3             |     1 | 0.47µF       | CAP; SMT (0603); 0.47µF; 10%; 16V; X7R; CERAMIC                                                                    | C0603C474K4RAC; GRM188R71C474K; EMK107B7474KA; C1608X7R1C474K080AC                        | KEMET; MURATA; TAIYO YUDEN; TDK           |
|      5 | C4, C5         |     2 | 47µF         | CAP; SMT (1210); 47uF; 10%; 10V; X7R; CERAMIC                                                                      | GRM32ER71A476KE15                                                                         | MURATA                                    |
|      6 | C8             |     1 | 1µF          | CAP; SMT (0603); 1µF; 10%; 16V; X7R; CERAMIC                                                                       | C0603C105K4RAC; C1608X7R1C105K080AC; EMK107B7105KA; CGA3E1X7R1C105K080AC ; 0603YC105KAT2A | KEMET; MURATA; TDK; TAIYO YUDEN; TDK; AVX |
|      7 | C11            |     1 | 2200pF       | CAP; SMT (0603); 2200pF; 10%; 100V; X7R; CERAMIC                                                                   | C0603C222K1RAC                                                                            | KEMET                                     |
|      8 | ENB, ENC       |     2 | PEC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                          | PEC03SAAN                                                                                 | SULLINS                                   |
|      9 | GND            |     1 | N/A          | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; | 5001                                                                                      | KEYSTONE                                  |
|     10 | L1             |     1 | 0.47µH       | INDUCTOR; SMT (1008); METAL; 0.47µH; 20%; 4.9A                                                                     | DFE252012F-R47M                                                                           | MURATA                                    |
|     11 | LOAD           |     1 | PEC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                          | PEC02SAAN                                                                                 | SULLINS                                   |
|     12 | LX, VCAP, VSYS |     3 | 131-4353-00  | CONNECTOR; WIREMOUNT; CIRCUIT BOARD TEST POINT MINIATURE PROBE; STRAIGHT; 4PINS                                    | 131-4353-00                                                                               | TEKTRONICS                                |
|     13 | PGND, TP1-TP3  |     4 | 108-0740-001 | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                           | 108-0740-001                                                                              | EMERSON NETWORK POWER                     |
|     14 | R1             |     1 | 499kΩ        | RES; SMT (0603); 499kΩ; 1%; +/-100PPM/DEGC; 0.1000W                                                                | CRCW0603499KFK; ERJ- 3EKF4993; RC0603FR- 07499KL                                          | VISHAY DALE; PANASONIC;                   |
|     15 | R2             |     1 | 402kΩ        | RES; SMT (0603); 402kΩ; 1%; +/-100PPM/DEGC; 0.1000W                                                                | CRCW06034023FK; ERJ- 3EKF4023                                                             | YAGEO VISHAY; PANASONIC                   |

Evaluates: MAX38889

| 16    | R3, R6   |   2 | 1.82MΩ         | RES; SMT (0603); 1.82MΩ; 1%; +/-100PPM/DEGK; 0.1000W                                                     | CRCW06031M82FK                                                    | VISHAY                                  |
|-------|----------|-----|----------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|-----------------------------------------|
| 17    | R4       |   1 | 33kΩ           | RES; SMT (0603); 33kΩ; 1%; +/-100PPM/DEGC; 0.1000W                                                       | CRCW060333K0FK                                                    | VISHAY DALE                             |
| 18    | R5       |   1 | 1.21MΩ         | RES; SMT (0603); 1.21MΩ; 1%; +/-100PPM/DEGK; 0.1000W                                                     | CRCW06031M21FK                                                    | VISHAY                                  |
| 19    | R7, R8   |   2 | 1MΩ            | RES; SMT (0603); 1MΩ; 5%; +/-200PPM/DEGC; 0.1000W                                                        | CRCW06031M00JN                                                    | VISHAY DALE                             |
| 20    | R9       |   1 | 0Ω             | RES; SMT (0603); 0Ω; JUMPER; JUMPER; 0.1000W                                                             | CRCW06030000Z0                                                    | VISHAY DALE                             |
| 21    | R10      |   1 | 4.02Ω          | RES; SMT (2512); 4.02Ω; 1%; +/-200PPM/DEGK; 1W                                                           | CRCW25124R02FN                                                    | VISHAY DALE                             |
| 22    | R11      |   1 | 20kΩ           | RES; SMT (0603); 20kΩ; 1%; +/-100PPM/DEGC; 0.1000W                                                       | MCR03EZPFX2002; ERJ- 3EKF2002; CR0603-FX- 2002ELF; CRCW060320K0FK | ROHM; PANASONIC; BOURNS; VISHAY DALE    |
| 23    | SU1-SU3  |   3 | SX1100-B       | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED | S1100-B; SX1100-B; STC02SYAN                                      | KYCON; KYCON; SULLINS ELECTRONICS CORP. |
| 24    | U1       |   1 | MAX38889AA TE+ | IC; REG; REVERSIBLE BUCK/BOOST REGULATOR; TQFN16-EP                                                      | MAX38889AATE+                                                     | MAXIM                                   |
| 25    | PCB      |   1 | PCB            | PCB:MAX38889A                                                                                            | MAX38889A                                                         | MAXIM                                   |
| 26    | J2-J5    |   0 | MAXIMPAD       | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                 | 9020 BUSS                                                         | WEICO WIRE                              |
| TOTAL |          |  39 |                |                                                                                                          |                                                                   |                                         |

## MAX38889A EV Kit Schematic

<!-- image -->

## MAX38889A EV Kit PCB Layout

MAX38889A EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX38889A EV Kit PCB Layout-Bottom

<!-- image -->

MAX38889A EV Kit PCB Layout-Top

<!-- image -->

MAX38889A EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## MAX38889A Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

Evaluates: MAX38889