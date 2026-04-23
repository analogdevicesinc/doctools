<!-- lastmod 2023-09-25 -->
## MAX20429 Evaluation Kit

## General Description

The MAX20429 evaluation kit (EV kit) is a fully assembled and tested application circuit for the MAX20429: a highefficiency  independent  phase  dual  6A  low-voltage  buck converter.  The  EV  kit  is  created  with  automotive  grade components  and  can  test  each  of  the  outputs  to  full load.  Various  test  points  and  jumpers  are  included  for evaluation. The standard EV kit comes with the MAX20429CAFNA/VY+ installed, which is factory config -ured for a resistor adjustable output voltage. The default EV kit resistor divider is bypassed with an output voltage of 0.6V on both V OUT1 and V OUT2 .

## Features

- Single Supply Operation with 3.0V to 5.5V Input Supply Range
- Individual Factory Programmable Output Voltages Available from 0.5V to 3.8V
- Resistor Adjustable Output Voltage
- Individual Output Current Up to 6A
- ±1% Output Voltage Accuracy
- Frequency-Synchronization Input
- Individual Enable Inputs
- Individual RESET Outputs
- Jumpers and Test Points on Key Nodes for Simplified Evaluation
- -40°C to 125 °C Automotive Temperature Range
- Automotive Grade External Components
- Proven PCB Layout
- Fully Assembled and Tested

## Table 1. Default Jumper Settings

| JUMPER   | SHUNT POSITION   | FUNCTION                                                                |
|----------|------------------|-------------------------------------------------------------------------|
| J1       | 1-2              | Enable buck controller 1 (EN1)                                          |
| J2       | 1-2              | Enable buck controller 2 (EN2)                                          |
| J3       | Installed        | Pull-up to V SUP for RESET1                                             |
| J4       | Installed        | Pull-up to V SUP for RESET2                                             |
| J5       | 1-2              | SYNC pulled to V SUP enabling forced pulse-width modulation (FPWM) mode |

<!-- image -->

Evaluates: MAX20429

## Quick Start

## Required Equipment

- MAX20429 EV kit
- 5V, 5A DC power supply (PS1)
- 2x Digital Multimeters (DMM)
- Electronic load, 30W capable (EL1)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the PS1 positive terminal to V SUP  and PS1 negative terminal to PGND1 on the EV kit.
- 3) Set DMM1 to measure Volts, DC and connect probes to V OUT1 and PGND on the EV kit.
- 4) Set DMM2 to measure Amps, DC and connect in se -ries between V OUT1 and EL1.
- 5) Set PS1 to 5V and enable supply output.
- 6) Verify that the DMM1 measures approximately 0.6V.
- 7) Set EL1 to 6A and enable load.
- 8) Verify that the DMM1 measures approximately 0.6V while DMM2 measures approximately 6A.
- 9) Repeat steps 3 through 8 on V OUT2 , verifying DMM1 measures approximately 0.6V at 0A load and 6A load.
- 10) EV kit operation verification is complete.

Ordering Information appears at end of data sheet.

## Detailed Description

## Synchronization (SYNC)

A  logic-high  on  SYNC  enables  fixed-frequency,  forced PWM mode. In FPWM mode the converter switches at a  constant  frequency  with  variable  on-time.  Apply  an external  clock  on  the  SYNC  input  to  synchronize  the internal oscillator  to  an  external  clock.  The  SYNC input accepts signal frequencies in the range of 1.9MHz  &lt;  f SYNC &lt;  2.3MHz  when  f SW =  2.1MHz,  and 2.9MHz &lt; f SYNC &lt;  3.6MHz when f SW  = 3.2MHz. When the  pin  is  open-circuited  or  logic-low,  the  SYNC  input enables the device to enter a low-power skip mode under light-load  conditions  if  the  IC  is  configured  to  allow  that behavior.

## Enable Input (EN1, EN2)

The enable  control  input  EN1/EN2  activates  the  device channel  from  its  low-power  shutdown  state.  EN1/EN2 have an input high threshold of 1.5V (typ), an input-low threshold of 0.5V, and a hysteresis of 50mV (typ). When an enable input goes high the output voltage ramps up according  to  the  factory  programmed  soft-start  time. When  an  enable  input  goes  low  the  output  voltage ramps down with the soft-start time or enters a Hi-Z state depending on the device option selected.

## RESET Output

The  device  features  open-drain RESET outputs  that assert low when the corresponding output voltage is out -side of the OV/UV window. The OV/UV comparators run from  a  separate  reference  to  provide  drift  detection  on the outputs. RESET remains asserted for a fixed timeout

Evaluates: MAX20429

period  after  the  corresponding  output  returns  to  its regulated voltage. The fixed timeout period is selectable between 0.5ms, 3.7ms, 7.4ms, or 14.9ms. Refer to the MAX20429  IC  data  sheet  for  specific  part  details.  To obtain a logic signal, place a resistor pull-up between the RESET pins to the system I/O voltage.

## Resistor Adjustable Output Option

MAX20429  features  an  adjustable  output  option  where output voltage can be set by external resistors in addition to the factory programmed V OUT options. Desired output voltage can be calculated using the following method:

$$Output 1: VOUT = ( R 8 + R 9 )/ R 9 x 0.6V$$

Output 2: VOUT = ( R 10  + R 11 )/ R 11 x 0.6V

See Figure 1 and Figure 2 of the MAX20429 EV kit schematics for location of the available resistor footprints.

## Evaluating Other Variants

The MAX20429EVKIT# comes installed with the MAX20429CAFNA/VY+ variant.

Maxim  Integrated  offers  factory  programming  of  preset output  voltages  from  0.5V  to  3.8V,  and  an  adjustable output  option.  If  selecting  a  different  device  variant,  the output  inductor  and  capacitor  components  may  need to  be  modified  for  optimal  performance.  Refer  to  the MAX20429 IC data sheet for specific part details regard -ing  component  selection  and  contact  factory  to  request any additional variants.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20429EVKIT# | EV Kit |

# Denotes RoHS compliance.

## MAX20429 EV Kit Bill of Materials

| ITEM   | REF_DES                                                                       | DNI/DNP   |   QTY | MFG PART #                                                       | MANUFACTURER                           | VALUE                   | DESCRIPTION                                                                                                                                    |
|--------|-------------------------------------------------------------------------------|-----------|-------|------------------------------------------------------------------|----------------------------------------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | C1, C2                                                                        | -         |     2 | CGA5L1X7R1V106K160AC; CGA5L1X7R1V106K160AC160AC; GMJ316BB7106KLH | TDK;TDK; TAIYO YUDEN                   | 10µF                    | CAPACITOR; SMT (1206); CERAMIC CHIP; 10µF; 35V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R AUTO                                                 |
| 2      | C3                                                                            | -         |     1 | CGA3E3X7S1A225K080AE                                             | TDK                                    | 2.2µF                   | CAP; SMT (0603); 2.2µF; 10%; 10V; X7S; CERAMIC CHIP                                                                                            |
| 3      | C6                                                                            | -         |     1 | T530X477M006ATE004; 6THB470M                                     | KEMET; PANASONIC                       | 470µF                   | CAPACITOR; SMT (7343-43); POLYMER; 470µF; 6.3V; TOL = 20%; TG = -55°C TO +125°C                                                                |
| 4      | C7, C8                                                                        | -         |     2 | GRM32ER71A476KE15                                                | MURATA                                 | 47µF                    | CAPACITOR; SMT (1210); CERAMIC; 47µF; 10V; TOL = 10%; MODEL = GRMSERIES; TG = -55°C TO +125°C; TC = X7R                                        |
| 5      | C11-C18                                                                       | -         |     8 | GRM31CR71A226KE15; GCM31CR71A226KE01                             | MURATA; MURATA                         | 22µF                    | CAPACITOR; SMT (1206); CERAMIC CHIP; 22µF; 10V; TOL = 10%; MODEL=CHIP MONOLITHIC CERAMIC CAPACITOR FOR GENERAL; TG = -55°C TO +125°C; TC = X7R |
| 6      | EN1, EN2, FSYNC, GND, PGND, PGND1-PGND4, RESET1B, RESET2B, VOUT1, VOUT2, VSUP | -         |    14 | 9020 BUSS                                                        | WEICO WIRE                             | MAXIMPAD                | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                       |
| 7      | J1, J2, J5                                                                    | -         |     3 | TSW-103-23-G-S                                                   | SAMTEC                                 | TSW-103-23-G-S          | CONNECTOR; THROUGH HOLE; SINGLE ROW; STRAIGHT; 3PINS; -55°C TO +125°C                                                                          |
| 8      | J3, J4                                                                        | -         |     2 | TSW-101-07-L-D                                                   | SAMTEC                                 | TSW-101-07-L-D          | CONNECTOR; MALE; THROUGH HOLE; TSW SERIES; DOUBLE ROW; STRAIGHT; 2PINS                                                                         |
| 9      | L1, L2                                                                        | -         |     2 | TFM322512ALMAR22MTAA                                             | TDK                                    | 0.22UH                  | INDUCTOR; SMT (1210); THIN FILM; 0.22µH; 20%; 9.5A ;                                                                                           |
| 10     | MH1-MH4                                                                       | -         |     4 | 9032                                                             | KEYSTONE                               | 9032                    | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                      |
| 11     | OUT1_BD, OUT1_BD_A, OUT2_BD_A, OUT_B2_BD                                      | -         |     4 | 2501-2-00-80-00-00-07-0                                          | MILL-MAX                               | 2501-2-00-80-00-00-07-0 | TERMINAL; TURRET; PIN DIA=0.090IN; TOTAL LENGTH = 0.328IN; BOARD HOLE = 0.094IN; TIN OVER NICKEL MATTE FINISH;                                 |
| 12     | R1-R4                                                                         | -         |     4 | CRCW060310K0FK; ERJ-3EKF1002                                     | VISHAY DALE; PANASONIC                 | 10K                     | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                             |
| 13     | R5, R6                                                                        | -         |     2 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                     | VISHAY DALE;ROHM                       | 10                      | RESISTOR; 0603; 10 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                           |
| 14     | R7                                                                            | -         |     1 | CRCW06032R00FN                                                   | VISHAY DALE                            | 2                       | RESISTOR, 0603, 2Ω, 1%, 100PPM, 0.10W, THICK FILM                                                                                              |
| 15     | R8, R10                                                                       | -         |     2 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                   | SAMSUNG ELECTRONICS; BOURNS;YAGEO PH   | 0                       | RESISTOR; 0603; 0Ω; 5%; JUMPER; 0.10W; THICK FILM                                                                                              |
| 16     | SU1-SU5                                                                       | -         |     5 | S1100-B;SX1100-B; STC02SYAN                                      | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B                | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION=PBT; PHOSPHOR BRONZE CONTACT=GOLD PLATED                                     |
| 17     | TP1                                                                           | -         |     1 | 7006                                                             | KEYSTONE                               | 7006                    | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                                               |
| 18     | TP2                                                                           | -         |     1 | 7007                                                             | KEYSTONE                               | 7007                    | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK                                                                             |
| 19     | TP5-TP8                                                                       | -         |     4 | 108-0740-001                                                     | EMERSON NETWORK POWER                  | 108-0740-001            | CONNECTOR; MALE; PANELMOUNT; BANANA JACK; STRAIGHT; 1PIN                                                                                       |
| 20     | U1                                                                            | -         |     1 | MAX20429                                                         | MAXIM                                  | MAX20429                | EVKIT PART-IC; MAX20429; PACKAGE OUTLINE DRAWING: 21-100428; PACKAGE LAND PATTERN: 90-100155                                                   |
| 21     | PCB                                                                           | -         |     1 | MAX20429                                                         | MAXIM                                  | PCB                     | PCB:MAX20429                                                                                                                                   |
| 22     | C4, C19                                                                       | DNP       |     0 | GRM39C0G220J50V; GRM1885C1H220J; C1608C0G1H220J080AA             | MURATA; MURATA;TDK                     | 22PF                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 22PF; 50V; TOL = 5%; MODEL =; TG =-55°C TO +125°C; TC = C0G                                               |
| 23     | R9, R11                                                                       | DNP       |     0 | RC1608J000CS; CR0603-J/-000ELF; RC0603JR-070RL                   | SAMSUNG ELECTRONICS; BOURNS; YAGEO PH  | 0                       | RESISTOR; 0603; 0 Ω ; 5%; JUMPER; 0.10W; THICK FILM                                                                                            |
| TOTAL  | TOTAL                                                                         |           |    65 |                                                                  |                                        |                         |                                                                                                                                                |

Evaluates: MAX20429

## MAX20429 EV Kit Schematics

Figure 1. MAX20429 EV Kit Schematic 1-2

<!-- image -->

## MAX20429 EV Kit Schematics (continued)

Figure 2. MAX20429 EV Kit Schematic 2-2

<!-- image -->

## MAX20429 EV Kit PCB Layout Diagrams

MAX20429 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

## MAX20429 EV Kit PCB Layout Diagrams (continued)

MAX20429 EV Kit Component Placement-Top View

<!-- image -->

## MAX20429 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20429 EV Kit PCB Layout-Internal Layer 2

## MAX20429 EV Kit PCB Layout Diagrams (continued)

MAX20429 EV Kit PCB Layout-Internal Layer 3

<!-- image -->

## MAX20429 EV Kit PCB Layouts (continued)

MAX20429 EV Kit Component Placement-Bottom View

<!-- image -->

## MAX20429 EV Kit PCB Layouts (continued)

MAX20429 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX20429 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/20           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://w.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX20429