<!-- lastmod 2022-08-02 -->
## MAXM17537 15V Output Evaluation Kit

## General Description

The Himalaya series of voltage regulator ICs and power modules  enable  cooler,  smaller,  and  simpler  powersupply  solutions.  The  MAXM17537EVKIT#  15V-output evaluation  kit (EV  kit) is  a  demonstration  circuit  of the  MAXM17537  60V,  3A  high-efficiency,  current-mode, synchronous step-down DC-DC switching power module. The  EV  kit  operates  over  a  wide  input-voltage of 19V to 60V and provides up to 3A load current with a 15V-output voltage. The EV kit is programmed to switch at a frequency of 700kHz. The module is simple to use and easily  configurable  with  minimal  external  components. It  features  cycle-by-cycle  peak  current-limit  protection, undervoltage lockout (EN/UVLO), and thermal shutdown.

The EV kit includes the compact, 29-pin, 15mm x 9mm x 4.32mm SiP package MAXM17537 module installed and is rated to operate over the full industrial -40°C to 125°C temperature range.

The MAXM17537 module data sheet provides a complete description of the part that should be read in conjunction with this data sheet prior to operating the EV kit. For full module  features,  benefits  and  parameters,  refer  to  the MAXM17537 data sheet.

Evaluates: MAXM17537 15V Output

## Benefits and Features

- Wide 19V to 60V Input Range
- Highly Integrated Solution with Built-In Shielded Inductor
- Programmed 15V Output, Up to 3A Output Current
- 700kHz Switching Frequency
- MAXM17537 Offers High 95.6% Efficiency (V IN  = 24V, V OUT  = 15V, I OUT  = 2A)
- All Ceramic Capacitors and Ultra-Compact Solution
- Selectable PWM, DCM, and PFM Modes
- Programmable 4ms Soft-Start Time and Prebias Startup
- Open-Drain RESET Output Pulled Up to 5V V CC
- Programmable EN/UVLO Threshold
- Provision for External Frequency Synchronization
- Hiccup Over Current Protection (OCP)
- Overtemperature Protection (OTP)
- -40°C to +125°C Industrial Temperature Range
- Complies with CISPR22(EN55022) Class B Conducted and Radiated Emissions

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXM17537 15V Output Evaluation Kit

## Quick Start

## Recommended Equipment

- MAXM17537EVKIT# evaluation kit
- 19V to 60V DC, 3A power supply
- Dummy load capable of sinking 3A
- Digital voltmeter (DVM)
- 100MHz dual-trace oscilloscope

## Equipment Setup and Procedure

The MAXM17537EVKIT# is fully assembled and tested. Follow the steps below to verify board operation.

## Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1)  Set the power supply at a voltage between 19V and 60V. Disable the power supply.
- 2) Connect  the  positive  and  negative  terminals  of  the power supply to VIN and PGND PCB pads, respectively.
- 3)  Connect the positive and negative terminals of the 3A load to OUT and PGND PCB pads, respectively, and then set the load to 0A.
- 4)  Connect the DVM across the OUT PCB pad and the PGND PCB pad.
- 5) Verify  that  shunts  are  not  installed  on  jumper  J1. See Table 1 for details.
- 6)  Select the shunt position on jumper J2 according to the intended mode of operation. See Table 2 for details.
- 7)  Enable the input power supply.
- 8)  Verify the DVM display 15V.
- 9)  Increase the load up to 3A to verify the output voltage is 15V using DVM.

## Detailed Description

The  MAXM17537EVKIT#  is  a  proven  circuit  to  demonstrate the high-voltage, high-efficiency, and compact-size solution  of  the  MAXM17537  synchronous  step-down DC-DC  power  module.  The  output  voltage  is  preset  to 15V to operate from 19V to 60V input and provides up to 3A load current. The optimal frequency is set at 700kHz to maximize efficiency and minimize component size. The EV  kit  includes  five  test  points:  TP1  for  monitoring  the VCC, TP2 for monitoring the RESET , TP3 for measuring the  LX  voltage, TP4  for  monitoring  the  DL  voltage,  and TP5 for measuring the BST voltage.

## Evaluates: MAXM17537 15V Output

## Soft-Start Input (SS)

The  MAXM17537  module  implements  adjustable  softstart operation to reduce inrush current. A capacitor connected from the SS pin to SGND programs the soft-start time.  The  selected  output  capacitance  (C SEL )  and  the output  voltage  (V OUT )  determine  the  minimum  required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The soft-start time (t SS )  is  related  to  the  capacitor  connected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

where  t SS   is  in  ms  and  C SS is  in  nF.  For  example,  to program a 4ms soft-start time, a 22nF capacitor should be connected from the SS pin to SGND.

## Regulator Enable/UndervoltageLockout Level (EN/UVLO)

The EV kit offers an adjustable input undervoltage-lockout level by resistor-dividers connecting between the IN, EN/ UVLO,  and  SGND  pins.  For  normal  operation,  a  shunt should not be installed across pins 1-2 on J1 to enable the output through an internal pullup 3.32MΩ resistor from the EN/UVLO pin to the IN pin. To disable the output, install the shunt across pins 1-2 on J1 to pull the EN/UVLO pin to SGND. See Table 1 for J1 setting details. The EV kit also provides an R3 resistor to program a UVLO threshold  voltage  at  which  an  input-voltage  level  device  turns on.  The  R3  resistor  can  be  calculated  by  the  following equation:

<!-- formula-not-decoded -->

where  V INU   is  the  input  voltage  at  which  the  device  is required to turn on, and R3 is in kΩ.

## Table 1. EN/UVLO Enable/Disable Configuration (J1)

| SHUNT POSITION   | EN/UVLO PIN                                                  | MAXM17537 OUTPUT                                            |
|------------------|--------------------------------------------------------------|-------------------------------------------------------------|
| 1-2              | Connected to SGND                                            | Disabled                                                    |
| Not installed*   | Connect to the center node of resistor-divider 3.32MΩ and R3 | Enabled, UVLO level set through the 3.32MΩ and R3 resistors |

## MAXM17537 15V Output Evaluation Kit

## MODE/SYNC Selection (MODE/SYNC)

The module's MODE pin can be used to select among the PWM, PFM, or DCM modes of operation. The logic state of  the  MODE/SYNC  pin  is  latched  when  the  V CC   and EN/UVLO  voltages  exceed  the  respective  UVLO  ris -ing  thresholds  and  all  internal  voltages  are  ready  to allow LX switching. State changes on the MODE/SYNC pin  are  ignored  during  normal  operation.  Refer  to  the MAXM17537 module data sheet for more information on the PWM, PFM and DCM modes of operation.

Table  2  lists  the  J2  jumper  settings  that  can  be  used  to configure the desired mode of operation. The internal oscillator  of  the  module  can  be  synchronized  to  an  external clock signal on the MODE/SYNC pin. The external synchro -nization  clock  frequency  must  be  between  1.1  x  f SW and 1.4 x f SW, where f SW  is the frequency of operation set by R4. The minimum external clock high pulse width should be greater than 50ns.

## EXTVCC Linear Regulator

Powering  V CC   of  the  module  from  EXTVCC  increases the efficiency of the power converter at higher input voltages. If the applied EXTVCC voltage is greater than 4.7V (typ), V CC  is powered from EXTVCC. If EXTVCC is lower than 4.7V (typ), V CC  is powered from V IN . Refer to the MAXM17537 module data sheet for further  information. To connect EXTVCC to V OUT  place the shunt across pins 2-3 of jumper J3. See Table 3 for summary of EXTVCC jumper configurations.

## Electro-Magnetic Interference (EMI)

## Table 2. MODE/SYNC Description (J2)

| SHUNT POSITION   | MODE/SYNC PIN     | MAXM17537 MODE        |
|------------------|-------------------|-----------------------|
| Not installed    | Unconnected       | PFM mode of operation |
| 1-2              | Connected to V CC | DCM mode of operation |
| 2-3*             | Connected to SGND | PWM mode of operation |

* Default position.

## Evaluates: MAXM17537 15V Output

Compliance  to  conducted  emissions  (CE)  standards requires  an  EMI  filter  at  the  input  of  a  switching  power converter. The  EMI  filter attenuates high-frequency currents  drawn  by  the  switching  power  converter,  and limits the noise injected back into the input power source.

Use  of  EMI  filter  components  as  shown  in  the  EV  kit schematic  results  in  lower  conducted  emissions  below CISPR22 Class B limits.  The  MAXM17537EVKIT# PCB layout  is  also  designed  to  limit  radiated  emissions from  switching  nodes  of  the  power  converter  resulting in  radiated  emissions  below  CISPR22  Class  B  limits. Further,  capacitors  150pF/100V  and  0.1µF/100V  placed near  the  input  of  the  board  helps  in  attenuating  highfrequency noise.

## Hot-Plug-In and Long Input Cables

The  MAXM17537EVKIT#  PCB  provides  an  electrolytic capacitor (C24, 47µF/80V) to dampen input voltage peaks and oscillations  that  can  arise  during  hot-plug-in  and/or due to  long  input  cables.  This  capacitor  limits  the  peak voltage  at  the  input  of  the  MAXM17537  power  module, when the EV kit  is  powered  directly  from  a  precharged capacitive source or an industrial backplane PCB. Long input  cables,  between  input  power  source  and  the  EV kit circuit can cause input-voltage oscillations due to the inductance of the cables. The equivalent series resistance (ESR)  of  the  electrolytic  capacitor  helps  damp  out  the oscillations caused by long input cables.

## Table 3. EXTVCC Configuration (J3)

| SHUNT POSITION   | EXTVCC PIN         | MAXM17537 EXTVCC      |
|------------------|--------------------|-----------------------|
| Not installed    | Unconnected        | V CC powered by V IN  |
| 1-2              | Connected to SGND  | V CC powered by V IN  |
| 2-3*             | Connected to V OUT | V CC powered by V OUT |

* Default position.

## MAXM17537EVKIT# Performance Report

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17537EVKIT# Performance Report (continued)

<!-- image -->

<!-- image -->

<!-- image -->

CONDITION:VIN=24V,VoUT=15V,loUT=3A

FROMMAXM17537EVKIT#

<!-- image -->

<!-- image -->

<!-- image -->

## MAXM17537 15V Output Evaluation Kit

## Component Suppliers

| SUPPLIER        | WEBSITE           |
|-----------------|-------------------|
| TDK Corp.       | www.tdk.com       |
| Murata Americas | www.murata.com    |
| Panasonic Corp. | www.panasonic.com |
| Vishay          | www.vishay.com    |
| Coilcraft       | www.coilcraft.com |

Note: Indicate that you are using the MAXM17537 when contacting these component suppliers.

## MAXM17537EVKIT# Bill of Materials

|   ITEM |   QTY | REF DES               | VAR STATUS   | MAXINV              | MFG PART #                                                                             | MANUFACTURER                            | VALUE     | DESCRIPTION                                                                                                                                                                         |
|--------|-------|-----------------------|--------------|---------------------|----------------------------------------------------------------------------------------|-----------------------------------------|-----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     4 | BST, DL, LX, TP1      | Pref         | 02-TPMINI5000-00    | 5000                                                                                   | KEYSTONE                                | N/A       | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|      2 |     2 | C2, C3                | Pref         | EC111000001494      | C1608C0G2A221J080AA                                                                    | TDK                                     | 220PF     | CAP; SMT (0603); 220PF; 5%; 100V; C0G; CERAMIC CHIP                                                                                                                                 |
|      3 |     4 | C4, C7, C18, C19      | Pref         | 20-004U7-08C        | GRM31CZ72A475KE11                                                                      | MURATA                                  | 4.7µF     | CAP; SMT (1206); 4.7UF; 10%; 100V; X7R; CERAMIC CHIP ; NOTE:PURCHASE DIRECT FROM THE MANUFACTURER                                                                                   |
|      4 |     4 | C8, C9, C15, C17      | Pref         | 20-000U1-01         | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01; HMK107B7104KA; 06031C104KAT2A | YAGEO; MURATA; MURATA; TAIYO YUDEN; AVX | 0.1µF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                                         |
|      5 |     1 | C10                   | Pref         | 20-002P2-N6         | 06035J2R2BBT; GRM39C0G2R2B50V                                                          | AVX;MURATA                              | 2.2PF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2PF; 50V; TOL = ± 0.1PF; MODEL = ACCU-P; TG = -55°C TO +125°C                                                                                |
|      6 |     1 | C11                   | Pref         | 20-0U022-91         | C0603C223K5RAC; GRM188R71H223K; C1608X7R1H223K080AA; GCJ188R71H223KA01                 | KEMET; MURATA; TDK; MURATA              | 0.022µF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.022UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                                        |
|      7 |     2 | C13, C14              | Pref         | 20-0010U-B40        | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                     | MURATA; SAMSUNG ELECTRONICS; TAIYO YU   | 10µF      | CAPACITOR; SMT (1210); CERAMIC CHIP; 10µF; 50V; TOL = 10%; TG = -55°C TO +125 DEGC; TC = X7R                                                                                        |
|      8 |     1 | C16                   | Pref         | EC111000001357      | C1005C0G2A151J050BA                                                                    | TDK                                     | 150PF     | CAP; SMT (0402); 150PF; 5%; 100V; C0G; CERAMIC CHIP                                                                                                                                 |
|      9 |     1 | C24                   | Pref         | 20-0047U-A17        | EEE-FK1K470P                                                                           | PANASONIC                               | 47UF      | CAPACITOR; SMT (CASE_G); ALUMINUM-ELECTROLYTIC; 47µF; 80V; TOL = 20%                                                                                                                |
|     10 |     1 | J1                    | Pref         | 01-PBC02SABN2P-21   | PBC02SABN                                                                              | SULLINS                                 | PBC02SABN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                           |
|     11 |     2 | J2, J3                | Pref         | 01-PBC03SABN3P-21   | PBC03SABN                                                                              | SULLINS                                 | PBC03SABN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                           |
|     12 |     4 | J4, J6, J7, TP5       | Pref         | 02-57541P-01        | 575-4                                                                                  | KEYSTONE                                | 575-4     | RECEPTACLE; JACK; BANANA; 0.203IN [5.2MM] DIA X 0.218IN [5.5MM] L; 0.203D/0.218L; NICKEL PLATED BRASS                                                                               |
|     13 |     4 | MH1-MH4               | Pref         | 02-MS440038P-02     | 91772A108; PHILLIPS-PAN_4-40X3/8IN; PMSSS4400038PH; 9901                               | GENERIC PART                            | N/A       | MACHINE SCREW; PHILLIPS; PAN; 4-40; 3/8IN; 18-8 STAINLESS STEEL                                                                                                                     |
|     14 |     4 | MH1-MH4               | Pref         | 02-SO440012H-01     | MCH_SO_F_HEX_4-40X1/2                                                                  | GENERIC PART                            | N/A       | STANDOFF; FEMALE-THREADED; HEX; 4-40; 1/2IN; ALUMINUM                                                                                                                               |
|     15 |     4 | OUT, PGND, PGND1, VIN | Pref         | 01-9020BUSS20AWG-00 | 9020 BUSS                                                                              | WEICO WIRE                              | MAXIMPAD  | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                            |

Evaluates: MAXM17537 15V Output

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXM17537EVKIT# | EV Kit |

# Denotes RoHS compliance.

## MAXM17537 15V Output Evaluation Kit

Evaluates: MAXM17537 15V Output

## MAXM17537EVKIT# Bill of Materials (continued)

|   ITEM |   QTY | REF DES   | VAR STATUS   | MAXINV           | MFG PART #                                 | MANUFACTURER                            | VALUE     | DESCRIPTION                                                                                                                                                          |
|--------|-------|-----------|--------------|------------------|--------------------------------------------|-----------------------------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|     16 |     1 | R1        | Pref         | 80-0806K-19      | ERJ-3EKF8063                               | PANASONIC                               | 806K      | RES; SMT (0603); 806K; 1%; ± 100PPM/°C; 0.1W                                                                                                                         |
|     17 |     1 | R2        | Pref         | 80-051K1-24      | CRCW060351K1FK; ERJ-3EKF5112               | VISHAY DALE; PANASONIC                  | 51.1K     | RESISTOR; 0603; 51.1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                 |
|     18 |     1 | R3        | Pref         | 80-0232K-24      | CRCW0603232KFK                             | VISHAY DALE                             | 232K      | RESISTOR, 0603, 232K Ω , 1%, 100PPM, 0.1W, THICK FILM                                                                                                                |
|     19 |     1 | R4        | Pref         | 80-025K5-24      | CRCW060325K5FK                             | VISHAY DALE                             | 25.5K     | RESISTOR; 0603; 25.5KΩ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                |
|     20 |     1 | R5        | Pref         | 80-0010K-24      | CRCW060310K0FK; ERJ-3EKF1002               | VISHAY DALE; PANASONIC                  | 10K       | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                   |
|     21 |     1 | R6        | Pref         | 80-0000R-27      | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00 | VISHAY DALE; ROHM; PANASONIC            | 0         | RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                    |
|     22 |     3 | SU1-SU3   | Pref         | 02-JMPFS1100B-00 | S1100-B;SX1100-B; STC02SYAN                | KYCON; KYCON; SULLINS ELECTRONICS CORP. | SX1100-B  | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT; PHOSPHOR BRONZE CONTACT = GOLD PLATED                                                       |
|     23 |     1 | U1        | Pref         | 00-SAMPLE-01     | MAXM17537                                  | MAXIM                                   | MAXM17537 | EVKIT PART - IC; MAXM17537; LGA29-3EP; PACKAGE OUTLINE NUMBER: 21-100177; PACKAGE LAND PATTERN: 90-100055                                                            |
|     24 |     1 | VCC       | Pref         | 02-TPCOMP5005-00 | 5005                                       | KEYSTONE                                | N/A       | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN |
|     25 |     1 | PCB       | -            | EPCBM17537       | MAXM17537                                  | MAXIM                                   | PCB       | PCB:MAXM17537                                                                                                                                                        |

TOTAL

51

| DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)                                                                   | DO NOT PURCHASE(DNP)                          | DO NOT PURCHASE(DNP)                                                                            |
|------------------------|------------------------|------------------------|------------------------|------------------------|----------------------------------------------------------------------------------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------|
| ITEM                   | QTY                    | REF DES                | VAR STATUS             | MAXINV                 | MFG PART #                                                                             | MANUFACTURER VALUE                            | DESCRIPTION                                                                                     |
| 1                      | 1                      | C1                     | DNP                    | EC111000001494         | C1608C0G2A221J080AA                                                                    | TDK 220PF                                     | CAP; SMT (0603); 220PF; 5%; 100V; C0G; CERAMIC CHIP                                             |
| 2                      | 5                      | C5, C6, C20-C22        | DNP                    | 20-004U7-08C           | GRM31CZ72A475KE11                                                                      | MURATA 4.7UF                                  | CAP; SMT (1206); 4.7UF; 10%; 100V; X7R; CERAMIC CHIP NOTE:PURCHASE DIRECT FROM THE MANUFACTURER |
| 3                      | 1                      | C12                    | DNP                    | 20-0010U-B40           | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                     | MURATA; SAMSUNG ELECTRONICS; TAIYO YU 10UF    | CAPACITOR; SMT (1210); CERAMIC CHIP; 10µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R       |
| 4                      | 1                      | C23                    | DNP                    | 20-000U1-01            | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01; HMK107B7104KA; 06031C104KAT2A | YAGEO; MURATA; MURATA; TAIYO YUDEN; AVX 0.1UF | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R     |
| 5                      | 1                      | L1                     | DNP                    | 50-008U2-0FF           | XAL5050-822ME                                                                          | COILCRAFT 8.2UH                               | INDUCTOR; SMT; SHIELDED; 8.2UH; TOL = ± 20%; 4.5A                                               |

TOTAL

9

| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| ITEM                                                                                        | QTY                                                                                         | REF DES                                                                                     | Var Status                                                                                  | MAXINV                                                                                      | MFG PART #                                                                                  | VALUE                                                                                       | DESCRIPTION                                                                                 |
| TOTAL                                                                                       | 0                                                                                           |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |                                                                                             |

## MAXM17537 15V Output Evaluation Kit

## MAXM17537EVKIT# Schematic Diagram

<!-- image -->

## MAXM17537 15V Output Evaluation Kit

## MAXM17537EVKIT# PCB Layout Diagrams

MAXM17537 EV Kit-Top Silkscreen

<!-- image -->

MAXM17537 EV Kit-Top Layer

<!-- image -->

MAXM17537 EV Kit-Layer 2

<!-- image -->

## MAXM17537EVKIT# PCB Layout Diagrams (continued)

<!-- image -->

MAXM17537 EV Kit-Layer 3

MAXM17537 EV Kit-Bottom Layer

<!-- image -->

MAXM17537 EV Kit-Bottom Silkscreen

<!-- image -->

## MAXM17537 15V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAXM17537 15V Output