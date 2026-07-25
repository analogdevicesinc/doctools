<!-- lastmod 2022-08-02 -->
## MAX17290 Evaluation Kit

## General Description

The MAX17290  evaluation kit (EV kit) is a fully assembled and tested PCB that contains a 16W DC-DC boost  converter  for  battery-operated,  harsh  environment, front-end  preboost  applications.  The  device  integrates a  low-side  FET  driver  and  current-mode,  control-loop circuitry  for  output-voltage  regulation,  making  it  ideal for  boost  or  SEPIC  converters.  The  device's  integrated driver  switches  at  400kHz.  The  MAX17290  can  be synchronized  with  an  external  clock  source  within  the 100kHz to 1MHz range.

The  EV  kit  operates  from  a  DC  supply  voltage  of  4.5V up to 7.3V. The EV kit can withstand a 16V line transient condition. The EV kit demonstrates the device features, such  as  dynamic  adjustable  output  voltage,  external clock synchronization, two-phase operation configurability, cycle-by-cycle  current  limit,  hiccup  mode,  and  thermal shutdown.  The  boost  converter  regulates  8V  and  can supply a current up to 2A. The EV kit also demonstrates a reference MAX17290 design for battery-operated, harsh environment applications.

## Features

- 4.5V Up to 7.3V Input Voltage Range
- 93% Peak Efficiency at 5V Input
- 8V Up to 2A Output
- Demonstrates External Clock Synchronization
- Spread Spectrum Optimizes EMI Performance
- Demonstrates SUP UVLO
- Demonstrates Cycle-by-Cycle Current Limit and Hiccup Mode
- Thermal-Shutdown Protection
- PGOOD Flag
- Demonstrates Dynamic Adjustable Output
- Demonstrates Single/Two-Phase Operation
- Proven 4-Layer 2oz. PCB Layout and Thermal Design
- Fully Assembled and Tested

Evaluates: MAX17290

## Quick Start

## Required Equipment

- MAX17290 EV kit
- 4.5V to 7.3V, 10A DC power supply
- Digital voltmeter (DVM)
- 2A load

## Output Testing

This EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify  that  a  shunt  is  installed  on  pins  1-2  of  jumper JU1 (internal 1V reference enabled).
- 2)  Connect  the  power  supply's  positive  terminal  to  the VSUP  PCB  banana  jack  and  the  power  supply's ground to the PGND PCB banana jack.
- 3)  Connect  the  load  across  the  VOUT  and  PGND banana jacks.
- 4)  Connect the DVM across V OUT  and PGND.
- 5)  Turn on the power supply and set it to 4.5V.
- 6)  Measure V OUT  and verify that it is 8V.

Ordering Information appears at end of data sheet.

<!-- image -->

## Detailed Description of Hardware

The  MAX17290  EV  kit  is  a  fully  assembled  and  tested 4-layer PCB that contains a 16W DC-DC boost converter for  battery-operated,  harsh  environment  applications, such  as  front-end,  preboost  power-suppy  applications. The EV kit demonstrates the device's features, such as the  integrated  low-side  FET  driver  and  current-mode control-loop  circuitry  for  output-voltage  regulation.  The device's  integrated  driver  switches  at  400kHz  and  can be synchronized with an external clock source within the 100kHz to 1MHz range.

The  EV  kit  operates  from  a  DC  supply  voltage  of  4.5V up to 7.2V. The EV kit can withstand a 16V line transient ,  that  is  limited  by  input  capacitor  C4  maximum  voltage or U1 specific pin 42V rating, which ever is less. The EV kit  demonstrates  the  device  features  such  as  dynamic adjustable output voltage, external clock synchronization, single/two-phase operation configurability, cycle-by-cycle current  limit,  hiccup  mode,  and  thermal  shutdown.  The boost  converter  regulates  8V  and  can  supply  a  current up to 2A.

## Enable

The EV kit features an enable input that can be used to enable/disable the device and place it in shutdown mode. The EV kit is enabled whenever power is applied to V SUP and PGND above 4.5V and EN is pulled high.

To  enable  the  EV  kit  from  an  external  enable  signal, remove resistor R10 and apply a logic signal on the EN input and GND pads of the EV kit. The enable (EN) input should not be left unconnected (see Table 1 below).

Refer to the EN pin description in the MAX17290 IC data sheet for additional information. See Table 1 for EN settings.

## Output-Voltage Adjustment

The  V OUT   output  voltage  can  be  dynamically  adjusted by feeding an analog voltage to the REFIN pin and GND pads. The external voltage applied to REFIN is used as the  FB  reference.  Remove  the  shunt  on  jumper  JU1  to apply an external voltage in the range of 0.750V to 2.000V to REFIN. With the shunt installed on jumper JU1,  REFIN is shorted to PVL and an internal 1V FB reference is used for loop regulation. The output voltage can be adjusted in the range of 6.00V to 15.96V. The available output current decreases  down  to  1A  at  15.96V  dynamically  adjusted output voltage. See Table 2 for jumper JU1 settings.

## External Clock Synchronization

The MAX17290 IC can be synchronized using an external clock applied to the FSET/SYNC pin  and  GND  pads.  A  falling  clock  edge  on  FSET/ SYNC  turns on the external MOSFET  by  driving DRV  high  after  a  short  delay.  The  MAX17290  can  be synchronized  with  an  external  clock  source  within  the 100kHz to 1MHz range, and a logic-high voltage range of 2.5V to 5V.

## Two-Phase Configuration

To configure the EV kit for two-phase operation, use two EV kits and follow the instructions below:

## Master EV kit:

- 1)  Install	a	0603	surface-mount	1kΩ	resistor	on	the	R8	pads.

## Slave EV kit:

- 1)  Remove resistors R2 and R1.
- 2)  Remove capacitors C2, C3, and resistor R5.
- 3)  Install	a	0603	surface-mount	0Ω	resistor	on	R11	pads.

## Make the following connections:

- 1)  Connect the PGND banana jack on the master to the PGND banana jack on the slave.
- 2)  Connect the GND banana jack on the master to the GND banana jack on the slave.
- 3)  Connect the V SUP  banana jack on the master to the VSUP banana jack on the slave.
- 4)  Connect the V OUT  banana jack on the master to the VOUT banana jack on the slave.
- 5)  Connect  the  COMP  PCB  pin  on  the  master  to  the COMP pin on the slave through a BNC cable.
- 6)  Connect the SYNCO pad on the master to the FSET/ SYNC pad on the slave.

In  two-phase  operation,  the  combined  master/slave  8V output is up to 4A (32W).

## Table 1. Enable

Evaluates: MAX17290

| V SUP Pullup R10 POSITION   | EN PIN                              | EV KIT OPERATION            |
|-----------------------------|-------------------------------------|-----------------------------|
| Installed*                  | Connected to V SUP through R10      | Enabled                     |
| Installed                   | Connected to GND                    | Disabled                    |
| Removed                     | Connected to an external controller | External controller enabled |

## Table 2. Output-Voltage Adjustment (JU1)

| SHUNT POSITION   | REFIN PIN        | EV KIT OPERATION           |
|------------------|------------------|----------------------------|
| Installed*       | Connected to PVL | Internal 1V reference      |
| Not Installed    | Open             | External voltage reference |

## Component Suppliers

| SUPPLIER                | WEBSITE                |
|-------------------------|------------------------|
| Coilcraft               | www.coilcraft.com      |
| Fairchild Semiconductor | www.fairchildsemi.com  |
| Murata Americas         | www.murataamericas.com |
| ON Semiconductor        | www.onsemi.com         |
| Panasonic Corp.         | www.panasonic.com      |
| Vishay                  | www.vishay.com         |

Note: Indicate that you are using the MAX17290 when contacting these component suppliers.

## Component Information, PCB Layout, and Schematics

See the following links for component information, PCB layout diagrams, and schematics.

- MAX17290 EV BOM
- MAX17290 EV PCB Layout
- MAX17290 EV Schematic
- MAX17290 EV Minimal Component Schematic

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17290 EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX17290 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	0a[im	InteJrated	reserYes	the	riJht	to	chanJe	the	circuitr\	and	speci¿cations	Zithout	notice	at	an\	time.

│

Evaluates: MAX17290

| TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                                                  | TITLE: Bill of Materials                                | TITLE: Bill of Materials                                                                                                                            |
|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|---------------------------------------------------------|-------------------------------------------------------------------------------------------|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| DATE: 03/23/2016                                        | DATE: 03/23/2016                                        | DATE: 03/23/2016                                        | DATE: 03/23/2016                                        | DATE: 03/23/2016                                                                          | DATE: 03/23/2016                                        | DATE: 03/23/2016                                                                                                                                    |
| DESIGN: max17290_evkit_a                                | DESIGN: max17290_evkit_a                                | DESIGN: max17290_evkit_a                                | DESIGN: max17290_evkit_a                                | DESIGN: max17290_evkit_a                                                                  | DESIGN: max17290_evkit_a                                | DESIGN: max17290_evkit_a                                                                                                                            |
| NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE                                   | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE | NOTE: DNI -- > DO NOT INSTALL ; DNP -- > DO NOT PROCURE                                                                                             |
| ITEM                                                    | REF_DES                                                 | DNI/D NP                                                | QTY                                                     | MFG PART #                                                                                | MANU FACTURER VALUE                                     | DESCRIPTION                                                                                                                                         |
| 1 C1,                                                   | C7                                                      | -                                                       |                                                         | 2 GRM32ER61C476KE15                                                                       | MURATA 47UF                                             | CAPACITOR; SMT (1210); CERAMIC CHIP; 47UF; 16V; TOL=10%; MODEL=GRM SERIES; TG= - 55 DEGC TO +85 DEGC; TC=X5R                                        |
|                                                         | 2 C2                                                    | -                                                       |                                                         | 1 GRM188R71C683KA01                                                                       | MURATA 0.068UF                                          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.068UF; 16V; TOL=10%; TG= - 55 DEGC TO +125 DEGC; TC=X7R                                                      |
| 3 C3                                                    |                                                         | -                                                       |                                                         | 1 GRM39C0G151J50V; GRM1885C1H151JA01                                                      | MURATA 150PF                                            | CAPACITOR; SMT (0603); CERAMIC CHIP; 150PF; 50V; TOL=5%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=C0G                                                 |
|                                                         | 4 C4                                                    | -                                                       |                                                         | 1 EEE - 1HA470XP                                                                          | PANASONIC 47UF                                          | CAPACITOR; SMT (CASE_D8); ALUMINUM - ELECTROLYTIC; 47UF; 50V; TOL=20%; MODEL=S SERIES; TG= - 40 DEGC TO +85 DEGC                                    |
|                                                         | 5 C5, C11                                               | -                                                       |                                                         | 2 GRM21BR71H105KA12; CL21B105KBFNNNE                                                      | MURATA; SAMSUNG ELECTRONICS 1UF                         | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG= - 55 DEGC TO +125 DEGC; TC=X7R                                                          |
|                                                         | 6 C6                                                    | -                                                       |                                                         | 1 GRM21BR71E225KA73L                                                                      | MURATA 2.2UF                                            | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; TG= - 55 DEGC TO +125 DEGC; TC=X7R;                                                       |
| 7 C8                                                    |                                                         | -                                                       |                                                         | 1 C0603C102K5RAC; GRM188R71H102KA01; C0603X7R500 - 102KNE                                 | KEMET/MURATA/VE NKEL 1000PF                             | CAPACITOR; SMT; 0603; CERAMIC; 1000pF; 50V; 10%; X7R; - 55degC to + 125degC; +/ - 15% from - 55degC to +125degC, USE 20 - 1000p - E4 FOR NEW DESIGN |
| 8 C12                                                   |                                                         | -                                                       |                                                         | 1 C0603C104K4RAC; GCM188R71C104KA37; C1608X7R1C104K; GRM188R71C104K; C0603X7R160 - 104KNE | KEMET/MURATA/TDK /VENKEL LTD. 0.1UF                     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG= - 55 DEGC TO +125 DEGC; TC=X7R;                                                       |
|                                                         | 9 COMP                                                  | -                                                       |                                                         | 1 142 - 0701 - 201                                                                        | JOHNSON COMPONENTS 142 - 0701                           | 201 CONNECTOR; FEMALE THREADED; THROUGH HOLE; SMA; STRAIGHT THROUGH; 5PINS                                                                          |
|                                                         | 10 D1                                                   | -                                                       |                                                         | 1 PMEG045V150EPD                                                                          | NXP PMEG045V15 0EPD                                     | DIODE; SCH; SMT (SOT - 1289); PIV=45V; IF=15A                                                                                                       |
| 11 JU1                                                  |                                                         | -                                                       |                                                         | 1 PEC02SAAN                                                                               | SULLINS PEC02SAAN                                       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                           |
| 12 L1                                                   |                                                         | -                                                       |                                                         | 1 XAL7070 - 472ME                                                                         | COILCRAFT 4.7UH                                         | INDUCTOR; SMT; SHIELDED; 4.7UH; TOL=+/ - 20%; 13.6A                                                                                                 |

| 13 N1                                                                         | -   |                                                | 1 FDS5670                   | FAIRCHILD SEMICONDUCTOR FDS5670                    | TRAN; 60V N - CHANNEL POWERTRENCH MOSFET; NCH; NSOIC8; PD - (2.5W); I - (10A); V - (60V)                           |
|-------------------------------------------------------------------------------|-----|------------------------------------------------|-----------------------------|----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| 14 R1                                                                         | -   | 1 ERJ - 3EKF9092                               | PANASONIC                   | 90.9K                                              | RESISTOR; 0603; 90.9K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                            |
| 15 R2                                                                         | -   | 1 CRCW060313K0FK; ERJ - 3EKF1302V              | VISHAY DALE/PANASONIC       | 13K                                                | RESISTOR, 0603, 13KOHMS, 1%, 100PPM, 0.1W, THICK FILM                                                              |
| 16 R3                                                                         | -   | 1 ERJ - L12KF22M                               | PANASONIC                   | 0.022 RESISTOR; 1812; 0.022 OHM; 1%; 300PPM; 0.5W; | THICK FILM                                                                                                         |
| 17 R4                                                                         | -   | 1 CRCW06031001FK; ERJ - 3EKF1001V              | VISHAY DALE; PANASONIC      | 1K                                                 | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                  |
| 18 R5                                                                         | -   | 1 RT0603FRE076K81L                             | YAGEO PHICOMP               | 6.81K                                              | RESISTOR; 0603; 6.81K OHM; 1%; 50PPM; 0.1W ; THIN FILM                                                             |
| 19 R6, R10                                                                    | -   | 2 CRCW06031003FK; ERJ - 3EKF1003               | VISHAY DALE/PANASONIC       | 100K                                               | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                                |
| 20 R7                                                                         | -   | 1 RC1608F6812                                  | SAMSUNG ELECTRONICS         | 68.1K                                              | RESISTOR; 0603; 68.1K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                            |
| 21 R9                                                                         | -   | 1 CRCW06030000ZS; MCR03EZPJ000; ERJ - 3GEY0R00 | VISHAY DALE/ROHM/PANAS ONIC | 0                                                  | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                               |
| 22 TP_PGND, TP_VOUT, TP_VSUP, TP2_PGND                                        | -   | 4 108 - 0740 - 001                             | EMERSON NETWORK POWER       | 108 - 0740 - 001                                   | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                           |
| 23 TP_GND                                                                     | -   | 1                                              | 5001 KEYSTONE               | N/A                                                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 24 U1                                                                         | -   | 1 MAX17290ETCF                                 | MAXIM                       | MAX17290ETC F                                      | EVKIT PART - IC; MAX17290; PACKAGE OUTLINE: 21 - 0136; PACKAGE CODE: T1233 - 4; TQFN12 - EP                        |
| 25 C9, C10                                                                    | DNP | 0 N/A                                          | N/A                         | OPEN                                               | PACKAGE OUTLINE 0603 NON - POLAR CAPACITOR                                                                         |
| 26 C13                                                                        | DNP | 0 N/A                                          | N/A                         | OPEN                                               | PACKAGE OUTLINE 1210 NON - POLAR CAPACITOR                                                                         |
| 27 EN, GND, PVL, PGND, VOUT, VSUP, PGOOD, SYNCO, PAD_GND, PAD_PGND, FSET/SYNC | DNP | 0 MAXIMPAD                                     | N/A                         | MAXIMPAD                                           | EVK KIT PARTS; MAXIM PAD; NO WIRE TO BE SOLDERED ON THE MAXIMPAD                                                   |
| 28 R8, R11 - R13                                                              | DNP | 0 N/A                                          | N/A                         | OPEN                                               | PACKAGE OUTLINE 0603 RESISTOR                                                                                      |
| 29 PCB                                                                        | -   | 1 MAX17290                                     | MAXIM                       | PCB                                                | PCB Board:MAX17290 EVALUATION KIT                                                                                  |
| TOTAL                                                                         |     | 31                                             |                             |                                                    |                                                                                                                    |

Top Silkscreen

<!-- image -->

<!-- image -->

TOP

<!-- image -->

<!-- image -->

Internal 2

<!-- image -->

<!-- image -->

Internal 3

<!-- image -->

<!-- image -->

Bottom

<!-- image -->

<!-- image -->

Schematic

<!-- image -->

Minimal Component Schematic

<!-- image -->