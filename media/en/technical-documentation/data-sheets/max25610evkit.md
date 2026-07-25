<!-- lastmod 2022-08-03 -->
## MAX25610 Evaluation Kit

## General Description

The MAX25610 evaluation kit (EV kit) provides a proven design to evaluate the MAX25610A automotive high-voltage, high-brightness LED (HB LED) controller. The EV kit is set up for buck-boost configurations and operates from a 5V to 18V DC supply voltage. The EV kit is configured to deliver up to 1.1A to one string of LEDs. The total voltage of the string can vary from 3V to 16V. The anode of the  LED string should go to the LED+ terminal and the cathode should go to the LEDEXT- terminal.

## Benefits and Features

- 5V to 18V Input Voltage Range
- Demonstrates Analog Dimming Control, Digital Dimming Control
- Demonstrates External and Internal Current Sensing
- Demonstrates LED Short and Open Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX25610A

## Quick Start

## Required Equipment

- MAX25610 EV kit
- 12V, 5A DC power supply
- A series-connected LED string rated for at least 1.5A
- Oscilloscope with a current probe

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Caution: Do not turn on power supply until all con -nections are made.

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the positive terminal of the 12V supply to the V IN\_ Board PCB pad and the negative terminal to the GND\_Board PCB pad.
- 3) Connect the LED string across the LED+ and LEDEXT- PCB pads on the EV kit. The anode of the LED string should go to the LED+ PCB pad and the cathode of the LED string should go to the LEDEXTPCB pad.
- 4) Clip the current probe on the wire connected to the LED string.
- 5) Turn on the DC power supply.
- 6) Verify that the LEDs illuminate.
- 7) Verify that the oscilloscope displays approximately 1A.

<!-- image -->

## MAX25610 Evaluation Kit

## Detailed Description

The MAX25610 evaluation kit (EV kit) provides a proven design to evaluate the MAX25610A automotive high-voltage, high-brightness LED (HB LED) controller. The EV kit is set up for buck-boost configurations and operates from a 5V to 18V DC supply voltage. The EV kit is configured to deliver up to 1.1A to one string of LEDs. The total voltage of the string can vary from 3V to 16V. The anode of the  LED string should go to the LED+ terminal and the cathode should go to the LEDEXT- terminal.

## Analog Dimming Control (REFI)

When  J1  is  closed,  the  LED  current  is  set  by  external current sensing. The equation to set the LED current is as follows:

<!-- formula-not-decoded -->

In the case of the EV kit, ILED is set to 1A.

When J1 is open, the LED current is set by internal current sensing. The equation to set the LED current is I LED = 13125/R REFI .

## PWM Dimming

The EV kit demonstrates the PWM dimming feature of the MAX25610A using either an external PWM signal or a DC voltage at the PWMDIM pin.

## Analog-to-PWM dimming:

Keep J2 open and J7 closed as described in Table 1 and remove the 0.1µF C8 capacitor. PWM dimming duty cycle is set by the voltage at PWMDIM between 0.2V (0% duty) and  3V  (100%  duty).  Alternatively,  drive  the  PWMDIM test point with an external DC source. PWMDIM voltages greater than 3V set the dimming duty cycle to 100%.

## External PWM dimming:

Keep J2 open and J7 open. Install the 0.1µF C8 capacitor (installed by default). Connect an external PWM signal to the PWMDIM test point. Vary the duty cycle to increase or  decrease  the  intensity  of  the  HB  LED  string.  The PWMDIM input of the device has a 2V (max) rising threshold and a 0.4V (min) falling threshold, and is compatible with 3.3V and 5V logic-level signals.

Table 1. MAX25610 EV Kit Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                                                                                                    |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | Closed*          | For external current sense. The voltage on the REFI pin is adjusted from 0.2V to 1.2V to set the LED current as follows: I LED = (V REFI -0.2)/6.67 x R LED                                                                                                                                                    |
| J1       | Open             | For internal current sense. The potentiometer R23 is adjusted for setting the LED current as follows: I LED = 13125/R REFI                                                                                                                                                                                     |
| J2       | 1-2              | Connects PWMDIM pin to GND and no switching                                                                                                                                                                                                                                                                    |
| J2       | 2-3*             | Connects PWMDIM pin to V EE (Internal 5V) for 100% duty                                                                                                                                                                                                                                                        |
| J4       | Open             | Connect an external clock source to perform PWM dimming with J7 open. With J7 closed, the potentiometer R34 is adjusted to set the DC voltage on the PWMDIM pin to perform analog PWM dimming. The capacitor C8 must be removed to perform analog PWM dimming. See the IC datasheet for PWM frequency setting. |
| J4       | 1-2*             | External current sense                                                                                                                                                                                                                                                                                         |
| J4       | 2-3              | Internal current sense                                                                                                                                                                                                                                                                                         |
| J7       | Open*            | For external PWM dimming                                                                                                                                                                                                                                                                                       |
| J7       | Closed           | For analog PWM dimming                                                                                                                                                                                                                                                                                         |

│

## Evaluates: MAX25610A

## MAX25610 Evaluation Kit

## Current Sensing

## External current sensing:

Keep  J1  closed  and  J4  closed  in  the  1-2  position,  as described in Table 1, and adjust the potentiometer R23 to set the LED current.

## Internal current sensing:

Keep  J1  open  and  J4  closed  in  the  2-3  position,  as described in Table 1, and adjust the potentiometer R23 to set the LED current.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25610EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX25610A

## Faults

## Open and Short LEDs:

When the IC  detects  the  open  or  short  fault  conditions of the LEDs, the fault pin is pulled low. The fault pin also goes low when there is an overtemperature condition. The fault pin is an active-low, open-drain output.

## Short to Battery:

The EV kit has a latch circuit with a switch for protection when  there  is  a  short  on  the  LEDEXT-  wire  to  battery positive voltage.

│

## MAX25610 EV Kit Bill of Materials

|   ITEM |   QTY | REF DES                                                                   | MFG PART #                                                                                              | MANUFACTURER                         | VALUE        | DESCRIPTION                                                                                                                                                                               |
|--------|-------|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|--------------------------------------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     5 | C2, C12, C14, C20, C21                                                    | GRM32ER71H106KA12; CL32B106KBJNNN; UMJ325KB7106KMH; 12105C106K4Z2A                                      | MURATA;SAMSUNG ELECTRONICS;TAIYO YU  | 10µF         | CAPACITOR; SMT (1210); CERAMIC CHIP; 10µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                                                 |
|      2 |     3 | C3, C5, C37                                                               | GRM188C71E225KE11                                                                                       | MURATA                               | 2.2µF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S                                                                                                |
|      3 |     1 | C4                                                                        | 885012206071;CGJ3E2X7R1E104K080AA; C1608X7R1E104K080AA;C0603C104K3RAC; GRM188R71E104KA01;C1608X7R1E104K | WURTH ELECTRONICS INC; TDK;TDK;KEMET | 0.1µF        | CAPACITOR; SMT; 0603; CERAMIC; 0.1µF; 25V; 10%; X7R; -55°C to + 125°C; ±15% from -55°C to +125°C; NOT RECOMMENDED FOR NEW DESIGN USE - 20- 000u1-01                                       |
|      4 |     1 | C6                                                                        | C1608C0G2A102J080AA                                                                                     | TDK                                  | 1000PF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL = 5%; TG = -55°C TO +125°C; TC = C0G                                                                                               |
|      5 |     1 | C7                                                                        | C0603C102M3GAC                                                                                          | KEMET                                | 0.001µF      | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.001µF; 25V; TOL = 20%; MODEL = C SERIES; TG = -55°C TO +125°C                                                                                      |
|      6 |     2 | C8, C36                                                                   | C1608X8R1E104K080AA                                                                                     | TDK                                  | 0.1µF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 25V; TOL = 10%; TG = -55°C TO +150°C; TC = X8R                                                                                                |
|      7 |     1 | C9                                                                        | ECH-U1C221JX5                                                                                           | PANASONIC                            | 220PF        | CAPACITOR; SMT (0603); CERAMIC CHIP; 220PF; 50V; TOL = 5%; MODEL = PPS; TG = - 55°C TO +85°C; TC = ±                                                                                      |
|      8 |     1 | C10                                                                       | C0603C224K3RAC;GMC10X7R224K25; GRM188R71E224KA88;C1608X7R1E224K080AC                                    | KEMET;MURATA;MURATA;TDK              | 0.22µF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                                               |
|      9 |     1 | C11                                                                       | C1608X7R1H224K080; GRM188R71H224KAC4                                                                    | TDK;MURATA                           | 0.22µF       | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.22µF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                                                                                               |
|     10 |     2 | C13, C19                                                                  | GRM32ER72A225KA35; CGA6N3X7R2A225K230AB; CC1210KKX7R0BB225;HMK325B7225KM                                | MURATA;TDK;YAGEO; TAIYO YUDEN        | 2.2µF        | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2µF; 100V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C to +125°C; TC = X7R                                                                           |
|     11 |     1 | C17                                                                       | YFF31AH2A105M                                                                                           | TDK                                  | 1µF          | EVKIT PART-CAPACITOR; SMT (1206); CERAMIC CHIP; 1µF; 100V; AUTO                                                                                                                           |
|     12 |     1 | C30                                                                       | EEH-ZA1H101P                                                                                            | PANASONIC                            | 100µF        | CAPACITOR; SMT (CASE_G); ALUMINUM- ELECTROLYTIC; 100µF; 50V; TOL = 20%                                                                                                                    |
|     13 |     1 | FB1                                                                       | HF70ACB322513                                                                                           | TDK                                  | 52           | INDUCTOR; SMT (1210); FERRITE-BEAD; 52; TOL = ±25%; 0.4A; -40°C TO +125°C                                                                                                                 |
|     14 |     7 | FLTB, OUTOVP, PWMDIM, PWMFRQ, REFI, VCC, VEE                              | 5007                                                                                                    | KEYSTONE                             | N/A          | TEST POINT; PIN DIA = 0.125IN; TOTAL LENGTH = 0.35IN; BOARD HOLE = 0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS = 0.062IN; NOT FOR COLD TEST |
|     15 |     8 | GND_BB, GND_BOARD, IC_GND, IC_GND_2, LED+, LEDEXT-, VIN_BOARD, VIN_NO_EMI | 9020 BUSS                                                                                               | WEICO WIRE                           | MAXIMPAD     | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                                  |
|     16 |     2 | J1, J7                                                                    | PCC02SAAN                                                                                               | SULLINS                              | PCC02SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65°C TO +125°C                                                                                                       |
|     17 |     2 | J2, J4                                                                    | PCC03SAAN                                                                                               | SULLINS                              | PCC03SAAN    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; - 65°C TO +125°C                                                                                                       |
|     18 |     1 | L1                                                                        | MSS1278T-333ML                                                                                          | COILCRAFT                            | 33µH         | INDUCTOR; SMT; FERRITE BOBBIN CORE; 33µH; TOL = ±20%; 3.1A; -40°C TO +125°C                                                                                                               |
|     19 |     1 | L2                                                                        | MSS1278T-472ML                                                                                          | COILCRAFT                            | 4.7µH        | INDUCTOR; SMT; FERRITE BOBBIN CORE; 4.7µH; TOL = ±0.2; 6.2A; -40°C TO +125°C                                                                                                              |
|     20 |     4 | MH1-MH4                                                                   | 9032                                                                                                    | KEYSTONE                             | 9032         | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                                                                                                 |
|     21 |     1 | Q1                                                                        | DMN6075S                                                                                                | DIODES INCORPORATED                  | DMN6075S     | TRAN; N-CHANNEL ENHANCEMENT MODE MOSFET; NCH; SOT-23; PD-(0.8W); I-(2A); V- (60V)                                                                                                         |
|     22 |     1 | Q4                                                                        | MMBT2907A                                                                                               | FAIRCHILD SEMICONDUCTOR              | MMBT2907A    | TRAN; SMALL SIGNAL TRANSISTOR; PNP; SOT-23; PD-(0.35W); IC-(-0.6A); VCEO-(-60V)                                                                                                           |
|     23 |     1 | Q5                                                                        | MMBT2222LT1G                                                                                            | ON SEMICONDUCTOR                     | MMBT2222LT1G | TRAN; NPN; SOT-23; PD-(0.225W); I-(0.6A); V-(30V)                                                                                                                                         |
|     24 |     1 | R2                                                                        | CSR1206FTR130                                                                                           | STACKPOLE ELECTRONICS INC            | 0.13         | RESISTOR; 1206; 0.13 Ω; 1%; 100PPM; 0.5W; THICK FILM                                                                                                                                      |

Evaluates: MAX25610A

ITEM

QTY

REF DES

MFG PART #

MANUFACTURER

## MAX25610 EV Kit Bill of Materials (continued) 25 5 R3, R12, R26, R30, R37 CRCW06030000Z0 VISHAY DALE

Evaluates: MAX25610A

VALUE

DESCRIPTION

0

RESISTOR; 0603; 0 Ω; 0%; JUMPER;

0.1W; THICK FILM

| 26    |   2 | R4, R8   | CHPHT0603K1002FGT                                                                | VISHAY SFERNICE                    | 10K      | RESISTOR; 0603; 10K Ω; 1%; 100PPM; 0.0125W; THICK FILM                                        |
|-------|-----|----------|----------------------------------------------------------------------------------|------------------------------------|----------|-----------------------------------------------------------------------------------------------|
| 27    |   2 | R5, R33  | CRCW060351K1FK;ERJ-3EKF5112                                                      | VISHAY DALE;PANASONIC              | 51.1K    | RESISTOR; 0603; 51.1K; 1%; 100PPM; 0.10W; THICK FILM                                          |
| 28    |   1 | R6       | ERJ-3EKF1782                                                                     | PANASONIC                          | 17.8K    | RESISTOR; 0603; 17.8K Ω; 1%; 100PPM; 0.1W; THICK FILM                                         |
| 29    |   1 | R7       | CRCW060360R4FK                                                                   | VISHAY DALE                        |          | 60.4 RESISTOR; 0603; 60.4 Ω; 1%; 100PPM; 0.10W; THICK FILM                                    |
| 30    |   1 | R9       | CRCW0603100KFK;RC0603FR-07100KL; RC0603FR-13100KL;ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC | 100K     | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                           |
| 31    |   1 | R10      | CRCW060361K9FK                                                                   | VISHAY DALE                        | 61.9K    | RESISTOR; 0603; 61.9K Ω; 1%; 100PPM; 0.10W; THICK FILM                                        |
| 32    |   1 | R11      | TNPW060310K0BE; RN731JTTD1002B                                                   | VISHAY DALE;KOA SPEER ELECTRONICS  | 10K      | RESISTOR; 0603; 10K Ω; 0.1%; 25PPM; 0.1W; THICK FILM                                          |
| 33    |   2 | R13, R14 | ERJ-3GEYJ102                                                                     | PANASONIC                          | 1K       | RESISTOR; 0603; 1K Ω; 5%; 200PPM; 0.10W; THICK FILM                                           |
| 34    |   1 | R15      | ERJ-3GEYJ472                                                                     | PANASONIC                          | 4.7K     | RESISTOR; 0603; 4.7K Ω; 5%; 200PPM; 0.10W; THICK FILM                                         |
| 35    |   2 | R23, R34 | 3296W-1-104LF                                                                    | BOURNS                             | 100K     | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 100kΩ; 10%; 100PPM; 0.5W; MOLDER CERAMIC OVER METAL FILM  |
| 36    |   1 | R24      | 301-10K-RC                                                                       | XICON                              | 10K      | RESISTOR, 0603, 10K Ω, 5%, 200PPM, 1/16W, THICK FILM                                          |
| 37    |   1 | U1       | MAX25610                                                                         | MAXIM                              | MAX25610 | EVKIT PART - IC; CONV; SYNCHRONOUS BUCK AND BUCK BOOST LED DRIVER/DC-DC CONVERTER; TSSOP16-EP |
| 38    |   1 | PCB      | MAX25610                                                                         | MAXIM                              | PCB      | PCB:MAX25610                                                                                  |
| TOTAL |  72 |          |                                                                                  |                                    |          |                                                                                               |

| DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   | DO NOT PURCHASE(DNP)   |                   |                           |                                                                                                        |
|------------------------|------------------------|------------------------|-------------------|---------------------------|--------------------------------------------------------------------------------------------------------|
| ITEM                   | QTY                    | REF DES                | MFG PART #        | MANUFACTURER              | DESCRIPTION                                                                                            |
| 1                      | 1                      | C1                     | GRM188C71E225KE11 | MURATA                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2µF; 25V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S             |
| 2                      | 1                      | C18                    | C1206C102K5RAC    | KEMET                     | CAPACITOR; SMT (1206); CERAMIC CHIP; 1000PF; 50V; TOL = 10%; MODEL = X7R; TG = -55°C TO +125°C; TC = + |
| 3                      | 1                      | D1                     | DFLS2100          | DIODES INCORPORATED       | DIODE; SCH; SMT (POWERDI-123); PIV = 100V; IF = 2A                                                     |
| 4                      | 1                      | D3                     | B380-13-F         | DIODES INCORPORATED       | DIODE; SCH; SMC; PIV = 80V; IF = 3A                                                                    |
| 5                      | 1                      | R1                     | CSR1206FTR130     | STACKPOLE ELECTRONICS INC | 0.13 RESISTOR; 1206; 0.13Ω; 1%; 100PPM; 0.5W; THICK FILM                                               |
| 6                      | 1                      | R25                    | CRCW12062R00FK    | VISHAY DALE               | 2 RESISTOR, 1206, 2Ω, 1%, 100PPM, 0.25W, THICK FILM                                                    |
| 7                      | 1                      | R38                    | CRCW06030000Z0    | VISHAY DALE               | 0 RESISTOR; 0603; 0Ω; 0%; JUMPER; 0.1W; THICK FILM                                                     |
| TOTAL                  | 7                      |                        |                   |                           |                                                                                                        |

| PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   | PACKOUT (These are purchased parts but not assembled on PCB and will be shipped with PCB)   |              |       |             |
|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|--------------|-------|-------------|
| ITEM                                                                                        | QTY                                                                                         | REF DES                                                                                     | MFG PART #                                                                                  | MANUFACTURER | VALUE | DESCRIPTION |
| TOTAL                                                                                       | 0                                                                                           |                                                                                             |                                                                                             |              |       |             |

## MAX25610 EV Kit Schematics

<!-- image -->

## MAX25610 EV Kit PCB Layout Diagrams

MAX25610 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25610 EV Kit PCB Layout-Top View

<!-- image -->

│

## MAX25610 EV Kit PCB Layout Diagrams (continued)

MAX25610 EV Kit PCB Layout-Internal 2

<!-- image -->

MAX25610 EV Kit PCB Layout-Internal 3

<!-- image -->

│

## MAX25610 EV Kit PCB Layout Diagrams (continued)

MAX25610 EV Kit PCB Layout-Bottom View

<!-- image -->

MAX25610 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim ,ntegrated reserves the right to change the circuitry and specifications Zithout notice at any time.

│

Evaluates: MAX25610A