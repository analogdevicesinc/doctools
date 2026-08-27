<!-- lastmod 2022-08-03 -->
## MAX25610B Evaluation Kit

## General Description

The MAX25610B evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX25610B  automotive  highvoltage,  high-brightness  LED  (HB  LED)  controller.  The EV kit is set up for buck configuration and operates from a 5V to 18V DC supply voltage. The EV kit is configured to deliver up to 3A to one string of LEDs. The total voltage of  the  string  can  vary  from  3V  to  6V.  The  anode  of  the LED string should go to LEDBK+ terminal and the cathode to the LEDEXTBK- terminal for external sensing and LEDBK- for internal sensing.

## Benefits and Features

- 5V to 18V Input Voltage Range
- Demonstrates Analog Dimming Control, Digital Dimming Control
- Demonstrates External and Internal Current Sensing
- Demonstrates LED Short and Open Protection
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX25610B

## Quick Start

## Required Equipment

- MAX25610B EV kit
- 12V, 5A DC power supply
- One LED rated at least 3A
- Oscilloscope with a current probe

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Caution:  Do  not  turn  on  power  supply  until  all connections are made.

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the positive terminal of the 12V supply to the VIN\_BK PCB pad and the negative terminal to the GND\_BK PCB pad.
- 3) Connect the LED string across the LEDBK+ and LEDEXTBK- PCB pads for external sensing. For internal sensing connect the LED string between LEDBK+ and LEDBK- PCB pads. The Anode of the LED string should go to the LEDBK+ PCB pad and Cathode of the LED string to LEDEXTBK- PCB pad for external sensing and LEDBK- PCB pad for internal sensing.
- 4) Clip the current probe on the wire connected to the LED string.
- 5) Turn on the DC power supply.
- 6) Verify that the LEDs turn on.
- 7) Verify that the oscilloscope displays approximately 3A.

<!-- image -->

## Detailed Description

The MAX25610B evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX25610B  automotive  highvoltage,  high-brightness  LED  (HB  LED)  controller.  The EV kit is set up for buck configuration and operates from a 5V to 18V DC supply voltage. The EV kit is configured to deliver up to 3A to one string of LEDs. The total voltage of  the  string  can  vary  from  3V  to  6V.  The  anode  of  the LED string should go to LEDBK+ terminal and the cathode to the LEDEXTBK- terminal for external sensing and LEDBK- for internal sensing.

## Analog Dimming Control (REFI)

When J3 is closed, the LED current is set by external current sensing. The equation to set the LED current is

<!-- formula-not-decoded -->

In the case of the EV kit, I LED  is set to 3A.

## PWM Dimming

The EV kit demonstrates the PWM dimming feature of the MAX25610 using either an external PWM signal, or a DC voltage at the PWMDIM pin.

## Analog-to-PWM dimming:

Keep J5 open and J8 closed as described in Table 1 and remove  the  0.1µF  C28  capacitor.  PWM  dimming  duty cycle  is  set  by  the  voltage  at  PWMDIM  between  0.2V (0%  duty)  and  3V  (100%  duty).  Alternatively,  drive  the PWMDIM test point with an external DC source. PWMDIM voltages above 3V set the dimming duty cycle to 100%.

## External PWM dimming:

Keep J5 open and J8 open. Install the 0.1µF C28 capacitor (installed by default). Connect an external PWM signal to the PWMDIM test point. Vary the duty cycle to increase or  decrease  the  intensity  of  the  HB  LED  string.  The PWMDIM input of the device has a 2V (max) rising threshold and a 0.4V (min) falling threshold, and is compatible with 3.3V and 5V logic-level signals.

When J3 is open, the LED current is set by internal current sensing. The equation to set the LED current is I LED = 13125/R REFI .

Table 1. MAX25610B EV Kit Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                                                                                                      |
|----------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J3       | Closed*          | For external current sense. The voltage on REFI pin is adjusted from 0.2v to 1.2v to set the LED current as per the equation below: ILED = (VREFI-0.2)/6.67 x RLED                                                                                                                                               |
| J3       | Open             | For internal current sense. The potentiometer R24 is adjusted for setting the LED current as per the equation below: ILED = 13125/RREFI                                                                                                                                                                          |
| J5       | 1-2              | Connects PWMDIM pin to GND and no switching.                                                                                                                                                                                                                                                                     |
| J5       | 2-3*             | Connects PWMDIM pin to VCC (Internal 5V) for 100% duty.                                                                                                                                                                                                                                                          |
| J5       | Open             | Connect an external clock source to do PWM dimming with J5 Open. With J8 Closed, the potentiometer R36 is adjusted to set the dc voltage on PWMDIM pin to do analog PWM dimming. The capacitor C28 needs to be removed to do analog PWM Dimming. Check the IC datasheet to see how the PWM frequency can be set. |
| J6       | 1-2*             | External Sense                                                                                                                                                                                                                                                                                                   |
| J6       | 2-3              | Internal Sense                                                                                                                                                                                                                                                                                                   |
| J8       | Open*            | For external PWM dimming                                                                                                                                                                                                                                                                                         |
| J8       | Closed           | For analog PWM dimming                                                                                                                                                                                                                                                                                           |

│

Evaluates: MAX25610B

## Current Sensing

## External current sensing:

Keep J3 closed and J6 closed in 1-2 position as described in  Table  1  and  adjust  the  potentiometer  R24  to  set  the LED current. Connect the LED string between LEDBK+ and  LEDEXTBK-.  The  anode  of  LEDS  should  go  to LEDBK+ and cathode to LEDEXTBK-.

## Internal current sensing:

Keep J3 open and J6 closed in 2-3 position as described in  Table  1  and  adjust  the  potentiometer  R24  to  set  the LED current. Connect the LED string between LEDBK+

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX25610BEVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX25610B

and LEDBK-.  The anode of LEDS should go to LEDBK+ and cathode to LEDBK-.

## Faults

## Open and Short LEDs:

The fault  pin  is  pulled  low  if  the  IC  detects  an  open  or short fault condition in the LEDs, or if  there is an overtemperature condition. The fault pin is an open-drain output and is active low.

## MAX25610B EV Kit Bill of Materials

|   ITEM | REF_DES                                                     | DNI/DNP   |   QTY | MFG PART #                                                                             | MANUFACTURER                           | VALUE     | DESCRIPTION                                                                                                            | COMMENTS   |
|--------|-------------------------------------------------------------|-----------|-------|----------------------------------------------------------------------------------------|----------------------------------------|-----------|------------------------------------------------------------------------------------------------------------------------|------------|
|      1 | AGND_BK, GND1_BK, GND_BK, LEDBK+, LEDBK-, LEDEXTBK-, VIN_BK | -         |     7 | 9020 BUSS                                                                              | WEICO WIRE                             | MAXIMPAD  | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL;SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                |            |
|      2 | C1, C19                                                     | -         |     2 | GRM32ER72A225KA35; CGA6N3X7R2A225K230AB; CC1210KKX7R0BB225; HMK325B7225KM              | MURATA;TDK; YAGEO; TAIYO YUDEN         | 2.2UF     | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF;100V; TOL=10%; MODEL=GRM SERIES; TG=-55 DEGC to +125 DEGC; TC=X7R           |            |
|      3 | C2, C24                                                     | -         |     2 | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01; HMK107B7104KA; 06031C104KAT2A | YAGEO;MURATA; MURATA; TAIYO YUDEN; AVX | 0.1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                            |            |
|      4 | C20, C21                                                    | -         |     2 | C1210X335K5RACAUTO                                                                     | KEMET                                  | 3.3UF     | CAPACITOR; SMT (1210); CERAMIC; 3.3UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                            |            |
|      5 | C23, C25, C39                                               | -         |     3 | C1608X5R1E225K; TMK107ABJ225KA; TMK107BJ225KA; GRM188R61E225KA12                       | TDK;TAIYO YUDEN; TAIYO YUDEN; MURATA   | 2.2UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R                      |            |
|      6 | C26                                                         | -         |     1 | GRM1885C1E102JA01                                                                      | MURATA                                 | 0.001UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.001UF; 25V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G                    |            |
|      7 | C27                                                         | -         |     1 | C0603C682K5RAC; CL10B682KB8SFN                                                         | KEMET;SAMSUNG                          | 6800PF    | CAPACITOR; SMT; 0603; CERAMIC;6800pF; 50V; 10%; X7R; -55degC to + 125degC; +/-15% from -55degC to +125degC             |            |
|      8 | C28, C38                                                    | -         |     2 | C1608X8R1E104K080AA                                                                    | TDK                                    | 0.1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 25V; TOL=10%; TG=-55 DEGC TO +150 DEGC; TC=X8R                             |            |
|      9 | C29                                                         | -         |     1 | ECH-U1C221JX5                                                                          | PANASONIC                              | 220PF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 220PF; 50V; TOL=5%; MODEL=PPS;                                                    |            |
|     10 | C31                                                         | -         |     1 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA                                | MURATA;MURATA; TDK                     | 0.1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R; AUTO                       |            |
|     11 | C33                                                         | -         |     1 | C2012X7R1H225K125AC; CGA4J3X7R1H225K125AB; CGA4J3X7R1H225K125AE                        | TDK;TDK;TDK                            | 2.2UF     | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                             |            |
|     12 | C34                                                         | -         |     1 | C0603C223K5RAC; GRM188R71H223K; C1608X7R1H223K080AA; GCJ188R71H223KA01                 | KEMET;MURATA; TDK;MURATA               | 0.022UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.022UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                           |            |
|     13 | C35                                                         | -         |     1 | EEE-TG2A220UP                                                                          | PANASONIC                              | 22UF      | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 22UF; 100V; TOL=20%; MODEL=TG SERIES; TG=-40 DEGC TO +125 DEGC         |            |
|     14 | D4                                                          | -         |     1 | B180-13-F                                                                              | DIODES INCORPORATED                    | B180-13-F | DIODE; SCH; SCHOTTKY BARRIER RECTIFIER; SMA; PIV=80V; IF=1A                                                            |            |
|     15 | FB1                                                         | -         |     1 | HF70ACB322513                                                                          | TDK                                    | 52        | INDUCTOR; SMT (1210); FERRITE-BEAD;52; TOL=+/-25%; 0.4A; -40 DEGC TO +125 DEGC                                         | PC SHORT   |
|     16 | FLTB_BK, PWMDIMBK, PWMFRQBK, REFIBK, VCCBK, VEEBK           | -         |     6 | 5007                                                                                   | KEYSTONE                               | N/A       | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     17 | J3, J8                                                      | -         |     2 | PCC02SAAN                                                                              | SULLINS                                | PCC02SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                               |            |
|     18 | J5, J6                                                      | -         |     2 | PCC03SAAN                                                                              | SULLINS                                | PCC03SAAN | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                               |            |
|     19 | L1                                                          | -         |     1 | XAL4020-222ME                                                                          | COILCRAFT                              | 2.2UH     | INDUCTOR; SMT; COMPOSITE CORE; 2.2UH; TOL=+/-20%; 4A                                                                   |            |
|     20 | L2                                                          | -         |     1 | MSS1278T-472ML                                                                         | COILCRAFT                              | 4.7UH     | INDUCTOR; SMT; FERRITE BOBBIN CORE; 4.7UH; TOL=+/-0.2; 6.2A; -40 DEGC TO +125 DEGC                                     |            |

Evaluates: MAX25610B

## MAX25610B EV Kit Bill of Materials (continued)

| ITEM   | REF_DES            | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                       | VALUE       | DESCRIPTION                                                                                          | COMMENTS   |
|--------|--------------------|-----------|-------|------------------------------------------------------------------------------------|------------------------------------|-------------|------------------------------------------------------------------------------------------------------|------------|
| 21     | R13, R22, R31, R32 | -         |     4 | CRCW06030000Z0                                                                     | VISHAY DALE                        | 0           | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.1W; THICK FILM                                                  |            |
| 22     | R14, R19, R20      | -         |     3 | TNPW060310K0BE; RN731JTTD1002B                                                     | VISHAY DALE; KOA SPEER ELECTRONICS | 10K         | RESISTOR; 0603; 10K OHM; 0.1%; 25PPM; 0.1W; THICK FILM                                               |            |
| 23     | R15, R16           | -         |     2 | ERJ-8BWFR100                                                                       | PANASONIC                          | 0.1         | RESISTOR; 1206; 0.1 OHM; 1%; 100PPM; 1W; THICK FILM                                                  |            |
| 24     | R17                | -         |     1 | CRCW06032K55FK; ERJ-3EKF2551                                                       | VISHAY DALE; PANASONIC             | 2.55K       | RESISTOR; 0603; 2.55K OHM; 1%; 100PPM; 0.1W; THICK FILM                                              |            |
| 25     | R18, R35           | -         |     2 | CRCW060351K1FK; ERJ-3EKF5112                                                       | VISHAY DALE; PANASONIC             | 51.1K       | RESISTOR; 0603; 51.1K; 1%; 100PPM; 0.10W; THICK FILM                                                 |            |
| 26     | R21                | -         |     1 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC | 100K        | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                  |            |
| 27     | R24, R36           | -         |     2 | 3296W-1-104LF                                                                      | BOURNS                             | 100K        | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 100K OHM; 10%; 100PPM; 0.5W; MOLDER CERAMIC OVER METAL FILM      |            |
| 28     | R28                | -         |     1 | CRCW060375R0FK                                                                     | VISHAY DALE                        | 75          | RESISTOR; 0603; 75 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                |            |
| 29     | R29                | -         |     1 | CRCW06033012FK                                                                     | VISHAY DALE                        | 30.1K       | RESISTOR; 0603; 30.1K; 1%; 100PPM; 0.10W; THICK FILM                                                 |            |
| 30     | U2                 | -         |     1 | MAX25610                                                                           | MAXIM                              | MAX25610    | EVKIT PART - IC; CONV; SYNCHRONOUS BUCK AND BUCK BOOST LED DRIVER/DC-DC CONVERTER; TQFN16-EP         |            |
| 31     | PCB                | -         |     1 | MAX25610B                                                                          | MAXIM                              | PCB         | PCB:MAX25610B                                                                                        | -          |
| 32     | C22                | DNP       |     0 | C1206C102K5RAC                                                                     | KEMET                              | 1000PF      | CAPACITOR; SMT (1206); CERAMIC CHIP; 1000PF; 50V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+ |            |
| 33     | C32                | DNP       |     0 | C2012X7R1H225K125AC; CGA4J3X7R1H225K125AB; CGA4J3X7R1H225K125AE                    | TDK;TDK;TDK                        | 2.2UF       | CAPACITOR; SMT (0805); CERAMIC CHIP; 2.2UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R           |            |
| 34     | D1                 | DNP       |     0 | B380-13-F                                                                          | DIODES INCORPORATED                | B380-13-F   | DIODE; SCH; SMC; PIV=80V; IF=3A                                                                      | OPEN       |
| 35     | D5                 | DNP       |     0 | BAT46WJ                                                                            | NXP                                | BAT46WJ,115 | DIODE; SCH; SMT (SOD-323F); PIV=100V; IF=0.25A                                                       |            |
| 36     | R27                | DNP       |     0 | CRCW12062R00FK                                                                     | VISHAY DALE                        | 2           | RESISTOR, 1206, 2OHMS, 1%, 100PPM, 0.25W, THICK FILM                                                 |            |
| TOTAL  |                    |           |    58 |                                                                                    |                                    |             |                                                                                                      |            |

Evaluates: MAX25610B

## MAX25610B EV Kit Schematics

<!-- image -->

## MAX25610B EV Kit PCB Layout Diagrams

MAX25610B EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX25610B EV Kit PCB Layout-Internal2

<!-- image -->

MAX25610B EV Kit PCB Layout-Top View

<!-- image -->

MAX25610B EV Kit PCB Layout-Internal3

<!-- image -->

│

## MAX25610B EV Kit PCB Layout Diagrams (continued)

MAX25610B EV Kit PCB Layout-Bottom View

<!-- image -->

MAX25610B EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                         | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------|-----------------|
|                 1 | 9/19            | Initial release, revised Manuscript | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0axim Integrated reserves the right to change the circuitry and specifications Zithout notice at any time.

<!-- image -->

│

Evaluates: MAX25610B