<!-- lastmod 2022-08-03 -->
## MAX2561 1 Evaluation Kit

## General Description

The  MAX25611  evaluation  kit  (EV  kit)  provides  a  proven  design  to  evaluate  the  MAX25611A/MAX25611B/ MAX25611C/MAX25611D automotive high-voltage, highbrightness LED (HB LED) controller. The EV kit is set up for  boost  and  buck-boost  configurations  and  operates from a 6V to 18V DC supply voltage. The EV kit is configured to deliver up to 0.88A to one string of LEDs. The total  voltage of the string can vary from 3V to 36V. The anode of the LED string should be connected to the LED+ terminal. The cathode of the LED string can be connected either  to  GND  (boost  mode)  or  IN  (buck-boost  mode). In the case of boost mode, the input voltage should not exceed the LED string voltage.

## Benefits and Features

- Configured for Boost and Buck-Boost Application
- Analog Dimming Control
- Proven PCB Layout
- Fully Assembled and Tested Feature

Ordering Information appears at end of data sheet.

Evaluates:

MAX2561 1A/MAX2561 1B/

MAX2561 1C/MAX2561 1D

## Quick Start

## Required Equipment

- MAX25611 EV kit
- 12V, 5A DC power supply
- A series-connected LED string rated at least 1A
- Oscilloscope with a current probe

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supply until all connections are made.

- 1) Verify  that  all  jumpers  (J1,  J2,  and  J7)  are  in  their default positions, as shown in Table 1.
- 2) Connect the positive terminal of the 12V supply to the VIN PCB pad and the negative terminal to the nearest GND PCB pad.
- 3) Connect the LED string across the LED+ and LEDPCB  pads  on  the  EV  kit  for  buck-boost  configura -tion. For boost configuration, connect the LED string across the LED+ and GND PCB pads on the EV kit. The  LED  string  voltage  should  be  higher  than  the input voltage in this configuration.
- 4) Clip the current probe on the wire connected to the LED string.
- 5) Turn on the DC power supply.
- 6) Verify that the LEDs turn on.
- 7) Verify  that  the  oscilloscope  displays  approximately 0.88A.

<!-- image -->

## MAX25611 Evaluation Kit

## Detailed Description

The  MAX25611  EV  kit  provides  a  proven  design  to evaluate the MAX25611A/MAX25611B/MAX25611C/ MAX25611D high-voltage HB LED driver with integrated high-side  current  sense.  The  EV  kit  is  set  up  for  boost and buck-boost configurations and operates from a 6V to 18V  DC  supply  voltage.  The  string-forward  voltage  can vary from 3V to 36V. The EV kit is optimized for 0.8A and a series of 8 LEDs in a string. Other configurations may require changes to component values.

## Analog Dimming Control (REFI)

When J2 is installed across pins 1-2, the LED current is set at the maximum current. The REFI pin is connected to VCC and in this case, the LED current is given by the following equation:

<!-- formula-not-decoded -->

In the case of the EV kit, I LED is set to 0.88A.

When J2 is installed across pins 2-3, the REFI pin is connected to the voltage-divider of R1 and R2, which sets the REFI voltage. If V REFI  &lt; 1.2V, then V REFI  sets the LED current level.

<!-- formula-not-decoded -->

## Evaluates: MAX25611A/MAX25611B/ MAX25611C/MAX25611D

Alternatively,  the  analog  dimming  can  be  controlled  by removing the shunt on J2 and applying a voltage between 0  and  5.5V  on  the  REFI  test  point  on  the  EV  kit.  REFI voltages above 1.3V are limited to an equivalent of 1.3V inside the IC.

## Pulse-Dimming Input (PWMDIM)

The EV kit demonstrates the PWM dimming feature of the buck controller using either an external PWM signal, or a DC voltage at the DIM pin.

Analog-to-PWM  dimming: Install  a  shunt  across  J1 (1-2). Adjust the potentiometer R18 to set a DC voltage on the PWMDIM pin. The PWM dimming duty cycle is set by the voltage at PWMDIM between 0.2V (0% duty) and 3V (100%  duty). Alternatively,  drive  the  PWMDIM  testpoint with an external DC source. PWMDIM voltages above 3V set the dimming duty cycle to 100%.

Direct  PWM  dimming: Leave  J1  open  and  connect  a PWM signal to the PWMDIM testpoint. Vary the duty cycle to increase or decrease the intensity of the HB LED string. The PWMDIM input of the device has a 2V (max) rising threshold and a 0.8V (min) falling threshold and is com -patible with 3.3V and 5V logic-level signals. Uninstall C2 to achieve fast PWMDIM rise and fall edges at the IC pin.

Table 1. MAX25611 EV Kit Jumper Descriptions

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                                                                                                                                                                                |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1       | 1-2*             | Connects the PWMDIM pin of the device to VCC through a voltage divider formed by R13 and R18. The dimming duty cycle is adjusted from 0% to 100% for PWMDIM level between 0.2V and 3V. The dimming frequency is internally set at 200Hz.                                                                                   |
| J1       | 2-3              | Connects the PWMDIM pin to ground to disable the analog dimming function and keep the IC off.                                                                                                                                                                                                                              |
| J1       | Open             | Connect an external function generator to drive the PWMDIM pin with a signal from 0 to 3.3V or higher. PWMDIM pulse width should be at least above one switching period. Recommended PWMDIM frequency range is from 200Hz to 2kHz for visible LEDs. IR LEDs can operate at lower frequencies where flicker is not visible. |
| J2       | 1-2*             | Connects VCC to the REFI pin. LED current is at the maximum value of 0.88A in this configuration.                                                                                                                                                                                                                          |
| J2       | 2-3              | Connects the REFI pin of the device to VCC through a voltage divider formed by R1 and R2. Adjusting R2 allows programming the LED current from 0 to 0.88A for REFI levels from 0.2V to 1.3V. For REFI voltages above 1.3V, the LED current is limited at 0.88A.                                                            |
| J2       | Open             | Connect an external voltage source to set the LED current from 0 to 0.88A for REFI levels from 0.2V to 1.3V. For REFI voltages above 1.3V, the LED current is limited at 0.88A.                                                                                                                                            |
| J7       | 1-2*             | Connects the IN pin to the same input supply as the boost power stage through a 10Ω filter resistor.                                                                                                                                                                                                                       |
| J7       | Open             | Connect an external supply voltage greater than 4.7V to J7 pin 2 to bias the IC IN pin.                                                                                                                                                                                                                                    |

* Default position.

│

## 2.2MHz Operation

The EV kit can be used to evaluate 2.2MHz operation. To test the 2.2MHz application:

- Change the IC to MAX25611B (provided).
- Change L2 to 2.2µH.
- Change C9 to 0.22µF. R6 remains at 50Ω.
- Output capacitance can be reduced to 1x 4.7µF. Note that short pulse widths at low frequencies benefit from having higher total output capacitance to counter leakage currents that discharge the output voltage before the next pulse.
- Change other components as required (e.g., MOSFET, FET current sense R9, LED current sense R14).

## High-Beam/Low-Beam Application

The EV kit can be used to evaluate high-beam/low-beam switching applications. Connect the low-beam LED string across  LED+  and  HB\_LED+,  and  the  high-beam  LED string across HB\_LED+ and GND. Use a function generator or a DC source to drive the HIGHBEAM\_OFF pad to 5V or GND to disabled or enable the high-beam LEDs. Slew rate control of  the  driving  signal,  or  adjustment  of R19 and C17 values can be used to control the transition  of  the  Q3  shunting  FET to minimize surge currents through the low-beam LEDs.

## Latch Circuit

The latch circuit proves HB+LED+ short-to-battery protection  by  disabling  the  shunt  FET  gate. This  prevents  the shunt FET from shorting out the battery. The latch is reset by removing power to recycle VCC.

## Evaluates: MAX25611A/MAX25611B/ MAX25611C/MAX25611D

## Voltage Regulator Configuration

The  EV  kit  can  be  reconfigured  as  a  voltage  regulator using  R27  and  R28  as  the  voltage  feedback  resistor divider, after removing R14.

<!-- formula-not-decoded -->

Setting V REFI  = 1.2V selects a large feedback signal for better accuracy and noise immunity. For simplicity, select R27 to match the programmed regulation voltage across ISENSEP and ISENSEN. For example, with V REFI  = 1.2V, V(ISENSEP - ISENSEN) = 200mV, and R27 should be 200Ω. This  makes  1mV  per  Ω  or  1mA  down  the  resis -tor string, minimizing the error due to ISENSEN leakage current.  The  calculation  for  R28  is  then  simplified  to (VOUT - 0.2) x 1000.

The following components should also be changed:

- Power stage components (Q1, L2, D1, R9 and output capacitance) as required for the application (voltage, current rating, etc).
- COMP components (R6, C9, C16) to match the application requirements.
- Remove C14, R17, and Q2.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25611EVKIT# | EV Kit |

# Denotes RoHS compliance.

## MAX25611 Evaluation Kit

## MAX25611 EV Kit Bill of Materials

|   ITEM | REF_DES                                                 | DNI/DNP   |   QTY | MFG PART #                                               | MANUFACTURER            | VALUE           | DESCRIPTION                                                                                                      |
|--------|---------------------------------------------------------|-----------|-------|----------------------------------------------------------|-------------------------|-----------------|------------------------------------------------------------------------------------------------------------------|
|      1 | C1, C19                                                 | -         |     2 | GRM32ER72A225KA35; CGA6N3X7R2A225K230; CC1210KKX7R0BB225 | MURATA;TDK; YAGEO       | 2.2UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 2.2UF; 100V; TOL = 10%; MODEL = GRM SERIES; TG = -55°C to +125°C; TC = X7R  |
|      2 | C2, C16                                                 | -         |     2 | CGA3EANP02A103J080AC                                     | TDK                     | 0.01UF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 100V; TOL = 5%; MODEL = MULTILAYER CERAMIC CHIP CAPACITOR; TC = NPO |
|      3 | C3                                                      | -         |     1 | EEE-TG2A220UP                                            | PANASONIC               | 22UF            | CAPACITOR; SMT (CASE_F); ALUMINUM-ELECTROLYTIC; 22UF; 100V; TOL = 20%; MODEL = TG SERIES; TG = -40°C TO +125°C   |
|      4 | C4, C5, C11-C13, C15                                    | -         |     6 | CGA6M3X7S2A475K200AE; CGA6M3X7S2A475K200AB               | TDK;TDK                 | 4.7UF           | CAPACITOR; SMT (1210); CERAMIC CHIP; 4.7UF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S; AUTO                |
|      5 | C6                                                      | -         |     1 | C1608X6S1A475K                                           | TDK                     | 4.7UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 4.7UF; 10V; TOL = 10%; TG = -55°C TO +105°C; TC = X6S                       |
|      6 | C7, C8                                                  | -         |     2 | GCJ188R71H104KA12; GCM188R71H104K; CGA3E2X7R1H104K080AA  | MURATA; MURATA;TDK      | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                 |
|      7 | C9                                                      | -         |     1 | GCM188R71C105KA64; CGA3E1X7R1C105K080AC                  | MURATA;TDK              | 1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R; AUTO                   |
|      8 | C10                                                     | -         |     1 | GRM1885C1H102JA01; C1608C0G1H102J080                     | MURATA;TDK              | 1000PF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL = 5%; TG = -55°C TO +125°C                                 |
|      9 | C14                                                     | -         |     1 | C0603C101K1GAC                                           | KEMET                   | 100PF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 100V; TOL = 10%; MODEL = C0G; TG = -55°C TO +125°C; TC = +           |
|     10 | C17                                                     | -         |     1 | C0603X472J1GAC                                           | KEMET                   | 4700PF          | CAPACITOR; SMT (0603); CERAMIC CHIP; 4700PF; 100V; TOL = 5%; MODEL = FT-CAP; TG = -55°C TO +125°C; TC = C0G      |
|     11 | C20                                                     | -         |     1 | C0805C104J1RAC                                           | KEMET                   | 0.1UF           | CAP; SMT (0805); 0.1UF; 5%; 100V; X7R; CERAMIC CHIP                                                              |
|     12 | C21                                                     | -         |     1 | CGA3E3X7S2A104K080AB                                     | TDK                     | 0.1UF           | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7S                      |
|     13 | D1                                                      | -         |     1 | DFLS2100                                                 | DIODES INCORPORATED     | DFLS2100        | DIODE; SCH; SMT (POWERDI-123); PIV = 100V; IF = 2A                                                               |
|     14 | D2                                                      | -         |     1 | 1N4148WS-7-F                                             | DIODES INCORPORATED     | 1N4148WS-7-F    | DIODE; SWT; SMT (SOD-323); PIV = 75V; IF = 0.3A                                                                  |
|     15 | D5                                                      | -         |     1 | 1N4148W-7-F                                              | DIODES INCORPORATED     | 1N4148W-7-F     | DIODE; SWT; SMT (SOD-123); PIV = 100V; IF = 0.3A; -65°C TO +150°C                                                |
|     16 | FB1                                                     | -         |     1 | HF70ACB322513                                            | TDK                     | 52              | INDUCTOR; SMT (1210); FERRITE-BEAD; 52; TOL = ± 25%; 0.4A; -40°C TO +125°C                                       |
|     17 | GND, HB_LED+, HIGHBEAM_OFF, J3-J6, LED+, LED-, VCC, VIN | -         |    11 | 9020 BUSS                                                | WEICO WIRE              | MAXIMPAD        | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                         |
|     18 | J1, J2                                                  | -         |     2 | PCC03SAAN                                                | SULLINS                 | PCC03SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65°C TO +125°C                               |
|     19 | J7                                                      | -         |     1 | PCC02SAAN                                                | SULLINS                 | PCC02SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65°C TO +125°C                               |
|     20 | L1                                                      | -         |     1 | MSS1278T-472ML                                           | COILCRAFT               | 4.7UH           | INDUCTOR; SMT; FERRITE BOBBIN CORE; 4.7UH; TOL = ± 0.2; 6.2A; -40°C TO +125°C                                    |
|     21 | L2                                                      | -         |     1 | MSS1278T-153ML                                           | COILCRAFT               | 15UH            | INDUCTOR; SMT; FERRITE; 15UH; 20%; 4.9A                                                                          |
|     22 | MH1-MH4                                                 | -         |     4 | 9032                                                     | KEYSTONE                | 9032            | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NO THREAD; M3.5; 5/8IN; NYLON                                        |
|     23 | Q1                                                      | -         |     1 | SQJA86EP-T1_GE3                                          | VISHAY SILICONIX        | SQJA86EP-T1_GE3 | TRAN; NCH; SO-8L; PD-(48W); I-(30A); V-(80V)                                                                     |
|     24 | Q2                                                      | -         |     1 | FDC3535                                                  | FAIRCHILD SEMICONDUCTOR | FDC3535         | TRAN; P-CHANNEL POWER TRENCH MOSFET; PCH; SSOT-6; PD-(1.6W); I-(-2.1A); V-(-80V)                                 |

## Evaluates: MAX25611A/MAX25611B/ MAX25611C/MAX25611D

## MAX25611 EV Kit Bill of Materials (continued)

| ITEM     | REF_DES           | DNI/DNP   | QTY   | MFG PART #                                     | MANUFACTURER                | VALUE        | DESCRIPTION                                                                                                                                         |
|----------|-------------------|-----------|-------|------------------------------------------------|-----------------------------|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| 25       | Q3                | -         | 1     | FDC3512                                        | ON SEMICONDUCTOR            | FDC3512      | TRAN; N-CHANNEL POWERTRENCH MOSFET; NCH; SUPERSOT-6; PD-(1.6W); I-(3A); V-(80V)                                                                     |
| 26       | Q4                | -         | 1     | MMBT2907A                                      | FAIRCHILD SEMICONDUCTOR     | MMBT2907A    | TRAN; SMALL SIGNAL TRANSISTOR; PNP; SOT-23; PD-(0.35W); IC-(-0.6A); VCEO-(-60V)                                                                     |
| 27       | Q5                | -         | 1     | MMBT2222LT1G                                   | ON SEMICONDUCTOR            | MMBT2222LT1G | TRAN; NPN; SOT-23; PD-(0.225W); I-(0.6A); V-(30V)                                                                                                   |
| 28       | R1                | -         | 1     | CRCW060324K9FK                                 | VISHAY DALE                 | 24.9K        | RESISTOR; 0603; 24.9K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                             |
| 29       | R2, R18           | -         | 2     | 3296W-1-103LF                                  | BOURNS                      | 10K          | RESISTOR; THROUGH-HOLE-RADIAL LEAD; 3296 SERIES; 10K Ω ; 10%; 100PPM; 0.5W; SQUARE TRIMMING POTENTIOMETER; 25 TURNS; MOLDER CERAMIC OVER METAL FILM |
| 30       | R3, R4            | -         | 2     | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL | VISHAY DALE; PANASONIC      | 100          | RESISTOR; 0603; 100 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                               |
| 31       | R6                | -         | 1     | CRCW060349R9FK                                 | VISHAY DALE                 | 49.9         | RESISTOR; 0603; 49.9 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                              |
| 32       | R7                | -         | 1     | CRCW06033K32FK                                 | VISHAY DALE                 | 3.32K        | RESISTOR; 0603; 3.32K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                |
| 33       | R8, R12, R16, R17 | -         | 4     | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00     | VISHAY DALE;ROHM; PANASONIC | 0            | RESISTOR; 0603; 0 Ω ; 0%; JUMPER; 0.10W; THICK FILM                                                                                                 |
| 34       | R9                | -         | 1     | ERJ-8CWFR043                                   | PANASONIC                   | 0.043        | RESISTOR; 1206; 0.043 Ω ; 1%; 75PPM; 1W; THICK FILM                                                                                                 |
| 35       | R10               | -         | 1     | CRCW0603475KFK                                 | VISHAY DALE                 | 475K         | RESISTOR; 0603; 475K Ω ; 0.1%; 100PPM; 0.1W; THICK FILM                                                                                             |
| 36       | R11               | -         | 1     | CRCW060310K0FK; ERJ-3EKF1002                   | VISHAY DALE; PANASONIC      | 10K          | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                                                  |
| 37       | R13               | -         | 1     | CRCW06033K00FK                                 | VISHAY DALE                 | 3K           | RESISTOR; 0603; 3K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                                |
| 38       | R14               | -         | 1     | LRC-LR2512LF-01-R250F                          | TT ELECTRONICS              | 0.25         | RESISTOR; 2512; 0.25 Ω ; 1%; 100PPM; 2W; THICK FILM                                                                                                 |
| 39       | R15               | -         | 1     | CRCW06031M00JN                                 | VISHAY DALE                 | 1M           | RESISTOR; 0603; 1M Ω ; 5%; 200PPM; 0.10W; METAL FILM                                                                                                |
| 40       | R19               | -         | 1     | CRCW060320K0JN                                 | VISHAY DALE                 | 20K          | RESISTOR; 0603; 20K Ω ; 5%; 200PPM; 0.10W; METAL FILM                                                                                               |
| 41       | R21               | -         | 1     | ERA-V15J100V                                   | PANASONIC                   | 10           | RESISTOR; 0603; 10 Ω ; 5%; 1500PPM; 0.063W; METAL FILM                                                                                              |
| 42       | R22               | -         | 1     | LRC-LR1206LF-01-R100-F                         | TT ELECTRONICS              | 0.1          | RESISTOR; 1206; 0.1 Ω ; 1%; 100PPM; 0.5W; THICK FILM                                                                                                |
| 43       | R23, R25          | -         | 2     | ERJ-3GEYJ102V                                  | PANASONIC                   | 1K           | RESISTOR; 0603; 1K Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                                                                |
| 44       | R24               | -         | 1     | 301-10K-RC                                     | XICON                       | 10K          | RESISTOR, 0603, 10K Ω , 5%, 200PPM, 1/16W, THICK FILM                                                                                               |
| 45       | R26               | -         | 1     | ERJ-3GEYJ472V                                  | PANASONIC                   | 4.7K         | RESISTOR; 0603; 4.7K Ω ; 5%; 200PPM; 0.10W; THICK FILM                                                                                              |
| 46       | SU1-SU3           | -         | 3     | S1100-B;SX1100-B                               | KYCON;KYCON                 | SX1100-B     | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT;PHOSPHOR BRONZE CONTACT = GOLD PLATED                                       |
| 47       | TP1               | -         | 1     | 7006                                           | KEYSTONE                    | 7006         | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; RED                                                                                    |
| 48       | TP2               | -         | 1     | 7007                                           | KEYSTONE                    | 7007         | CONNECTOR; PANELMOUNT; BINDING POST; STRAIGHT THROUGH; 1PIN; BLACK                                                                                  |
| 49       | U1                | -         | 1     | MAX25611ATC                                    | MAXIM                       | MAX25611ATC  | EVKIT PART - IC; MAX25611ATC; PACKAGE OUTLINE DRAWING: 21-0139; LAND PATTERN DRAWING: 90-0068; TQFN16-EP                                            |
| 50       | PCB               | -         | 1     | MAX25611                                       | MAXIM                       | PCB          | PCB:MAX25611                                                                                                                                        |
| 51       | C18               | DNP       | 0     | C0805C104J1RAC                                 | KEMET                       | 0.1UF        | CAP; SMT (0805); 0.1UF; 5%; 100V; X7R; CERAMIC CHIP                                                                                                 |
| 52       | D3                | DNP       | 0     | 1N4148W-7-F                                    | DIODES INCORPORATED         | 1N4148W-7-F  | DIODE; SWT; SMT (SOD-123); PIV = 100V; IF = 0.3A; -65°C TO +150°C                                                                                   |
| 53       | R5                | DNP       | 0     | ERJ-8CWFR043                                   | PANASONIC                   | 0.043        | RESISTOR; 1206; 0.043 Ω ; 1%; 75PPM; 1W; THICK FILM                                                                                                 |
| 54       | R20               | DNP       | 0     | CRCW0603499KFK                                 | VISHAY DALE                 | 499K         | RESISTOR; 0603; 499K Ω ; 1%; 100PPM; 0.1W; THICK FILM                                                                                               |
| 55       | R27               | DNP       | 0     | CRCW0603220RFK                                 | VISHAY DALE                 | 220          | RESISTOR; 0603; 220 Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                                               |
| 56 TOTAL | R28               | DNP       | 0 80  | CRCW060360K4FK                                 | VISHAY DALE                 | 60.4K        | RESISTOR, 0603, 60.4K Ω , 1%, 100PPM, 0.1W, THICK FILM                                                                                              |

## MAX25611 EV Kit Schematics

<!-- image -->

## MAX25611 EV Kit PCB Layout Diagrams

MAX25611 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX25611 EV Kit PCB Layout Diagrams (continued)

MAX25611 EV Kit PCB Layout-Top View

<!-- image -->

│

## MAX25611 EV Kit PCB Layout Diagrams (continued)

MAX25611 EV Kit PCB Layout-Bottom View

<!-- image -->

Evaluates: MAX25611A/MAX25611B/

## MAX25611 EV Kit PCB Layout Diagrams (continued)

MAX25611 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

## MAX25611 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                        | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------|-----------------|
|                 0 | 3/19            | Initial release                                                    | -               |
|                 1 | 3/19            | Updated parts evaluated to MAX25611A/MAX25611B                     | 1-11            |
|                 2 | 9/19            | Updated parts evaluated to MAX25611A/MAX25611B/MAX25611C/MAX25611D | 1-11            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX25611A/MAX25611B/

MAX25611C/MAX25611D