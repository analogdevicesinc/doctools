<!-- lastmod 2022-11-22 -->
<!-- image -->

Evaluates: MAX25254, MAX25255

## General Description

The  MAX25255  dual  phase  evaluation  kit  (EV  kit)  provides  a  proven  design  to  evaluate  the  MAX25254/ MAX25255  automotive  2MHz  synchronous  buck  converter  dual  phase  operation.  The  EV  kit  comes  with  a MAX25255DAFDA/VY+ (3.3V/2MHz) installed, as well as various test points and jumpers for evaluation.

The EV kit is designed to deliver up to 12A with input voltage 3V to 36V. The output voltage quality can be monitored by observing the PGOOD1 signal. The EV kit can also  be  used  to  evaluate  other  MAX25254/MAX25255 variants with minimal component changes.

## Features

- Input Supply Range from 3V to 36V
- Buck Provides 3.3V Fixed Output and Adjustable from 0.8V to 14V
- Delivers up to 12A/16A Output Current
- Selectable BIAS LDO Input Source
- Frequency-Synchronization Input
- Independent Enable Inputs
- Spread-Spectrum Available
- Voltage Monitoring PGOOD Output Available
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

©

Click here to ask an associate for production status of specific part numbers.

## MAX25255 Dual Phase Evaluation Kit

## Quick Start

## Required Equipment

- MAX25255 dual phase EV kit
- 36V, 16A DC power supply (PS)
- Appropriate resistive loads, or electronic loads that can sink 16A (EL)
- Digital multimeter (DMM)

## Procedure

The EV kit  comes  fully  assembled  and  tested.  Use  the following steps to verify board operation:

Caution:  Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the positive and negative terminals of the power supply to the VSUPF and GND test pads, respectively.
- 3) Set the power supply voltage to 14V.
- 4) Connect the positive terminal of electronic load EL to the VOUT PCB pad; connect the negative lead to the GND1 pad.
- 5) Set the electronic load to the desired current at or below 12A or use an equivalent resistive load with an appropriate power rating.
- 6) Adjust current limit on the power supply as necessary.
- 7) Turn on the power supply.
- 8) Verify the voltage across the VOUTS and GND2 is 3.3V ±2%.
- 9) Turn on the electronic load.
- 10)  Verify the voltage across the VOUTS and GND2 is 3.3V ±2%.
- 11)  Turn off the electronic load.
- 12)  Turn off the power supply.

owners.

## MAX25255 Dual Phase Evaluation Kit

## Detailed Description of Hardware

The  MAX25255  dual  phase  EV  kit  provides  a  proven layout for the MAX25255 synchronous buck regulator IC. The IC accepts input voltages as high as 36V and delivers up to 12A. The EV kit can handle an input supply transient up to 42V. Various test points are included for evaluation.

## External Synchronization

The IC can operate in two modes: forced-PWM (FPWM) or  skip  mode.  Skip  mode  has  better  efficiency  for  lightload conditions. When SYNC is pulled low, the IC operates in skip mode for light loads and PWM mode for larger loads. When SYNC is pulled high, the IC is forced to operate in PWM mode across all load conditions.

SYNC can be used to synchronize with an external clock signal. The IC is forced to operate in FPWM mode when SYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD\_)

The  EV  kit  provides  two  power-good  output  test  points (PGOOD1  and  PGOOD2)  to  monitor  the  status  of  the buck  output  voltage  VOUT  and  master  status.  The PGOODs are pulled to high impedance when the output voltage is in regulation. PGOODs pulled to ground when the output voltage drops below 95% (typ) of its nominal regulated voltage.

## Programming Buck Output Voltage

The EV kit comes installed with MAX25255DAFDA/VY+, which  provides  fixed  3.3V  voltage  regulation  on  VOUT. To  externally  adjust  the  voltage  at  VOUT  from  0.8V  to 14V, remove U1 MAX25255DAFDA/VY+ and replace with adjustable version IC, remove R5 and install a 0Ω resistor on R7, place appropriate resistors in the positions R8 and R9 according to the following equation:

## Table 1. Default Jumper Settings

| JUMPER    | SHUNT POSITION   | FUNCTIONS                                              |
|-----------|------------------|--------------------------------------------------------|
| JU_EN1    | 1-2              | BUCK1 ENABLED                                          |
| JU_EN2    | 1-2              | BUCK2 ENABLED                                          |
| JU_SYNC   | 1-2              | SYNC is pulled to BIAS to enable FPWM mode             |
| JU_EXTVCC | Installed        | EXTVCC is connected to VOUT                            |
| JU_PGOOD1 | Installed        | PGOOD1 is pulled up to BIAS when VOUT is in regulation |
| JU_PGOOD2 | Installed        | PGOOD2 is pulled up to BIAS when VOUT is in regulation |

## Ordering Information

| PART               | TYPE                        |
|--------------------|-----------------------------|
| MAX25255DUALEVKIT# | 3.3V/2MHz Dual Phase EV Kit |

#Denotes RoHS compliance.

<!-- formula-not-decoded -->

Where typically VFB = 0.8V(typ) and R9 = 10kΩ.

## Selecting EXTVCC

The MAX25255 IC provides an internal 1.8V BIAS LDO that  supplies  the  IC  internal  circuitry.  To  reduce  the  IC internal power dissipation, the input of the internal BIAS LDO can be switched from VSUPF to an external supply  or  one  of  the  buck  converter  outputs  by  applying the  voltage  to  EXTVCC.  The  EV  kit  provides  jumper JU\_EXTVCC,  which  allows  shunts  to  be  installed  connecting EXTVCC to VOUT. If the buck converter output is connected to EXTVCC, light-load efficiency is improved as the supply current to BIAS LDO is scaled down proportionally to the duty cycle of the buck converter.

If the EXTVCC voltage drops below 2.40V (typ), the input supply of the BIAS LDO is automatically switched back to VSUPF.

## Evaluating Other Variants

The EV kit comes installed with the 3.3V/2MHz/12A variant (MAX25255DAFDA/VY+). The other variants can be installed with minimal component changes.

Analog  Devices  offers  additional  variations,  including the  ICs  that  operate  at  the  lower  switching  frequency of  400kHz  for  increased  efficiency.  See  the MAX25255 Dual Phase EV Kit Bill of Materials to select components for evaluating 400kHz variants. Refer to the MAX25254/ MAX25255  IC  data  sheet  for  part  variant  details  and contact the factory for additional variants of MAX25254/ MAX25255.

## MAX25255 Dual Phase Evaluation Kit

## MAX25255 Dual Phase EV Kit Bill of Materials

## MAX25255 Dual Phase EV Kit BOM-400kHz

| REFERENCE                                               |   QTY | PART DESCRIPTION                                                     | MANUFACTURER/PART NUMBER             |
|---------------------------------------------------------|-------|----------------------------------------------------------------------|--------------------------------------|
| U1                                                      |     1 | Analog Devices Dual Buck Converters, F2CQFN23                        | Analog Devices , MAX25255DAFD A /VY+ |
| C0-C2, C29, C32                                         |     5 | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                       | TDK, CGA2B3X7R1H104K050BE            |
| C3                                                      |     1 | CAP; SMT (CASE_D); 47UF; 20%; 50V; ALUMINUM-ELECTROLYTIC             | PANASONIC, EEE-FT1H470AP             |
| C5, C8                                                  |     2 | CAP; SMT (0805); 4.7UF; 10%; 50V; X7R; CERAMIC                       | TDK, CGA4J1X7R1H475K125AE            |
| C6, C7, C10, C15, C16, C21                              |     6 | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                       | TDK, CGA3E2X7R1H104K080AA            |
| C11, C13, C14, C17-C19                                  |     6 | CAP; SMT (1210); 47UF; 10%; 10V; X7R; CERAMIC                        | AVX, 1210ZC476KAT2A                  |
| C12                                                     |     1 | CAP; SMT (0603); 1UF; 20%; 50V; X7R; CERAMIC                         | TAIYO YUDEN, UMK107AB7105MA          |
| C24                                                     |     1 | CAP; SMT (0603); 4.7UF; 10%; 6.3V; X7R; CERAMIC                      | TAIYO YUDEN, JMK107BB7475KA          |
| C25                                                     |     1 | CAP; SMT (0603); 2.2UF; 20%; 6.3V; X7R; CERAMIC                      | TDK, CGA3E1X7R0J225M080AC            |
| C26, C27                                                |     2 | CAP; SMT (0402); 0.1UF; 20%; 50V; X7R; CERAMIC                       | TDK, CGA2B3X7R1H104M050BB            |
| C34, C35                                                |     2 | CAP; SMT (1210); 10UF; 10%; 50V; X7S; CERAMIC                        | TDK, CGA6P3X7S1H106K250AB            |
| C4, C9                                                  |     0 | CAP; SMT (0805); 4.7UF; 10%; 50V; X7R; CERAMIC ; DNI                 | TDK, CGA4J1X7R1H475K125AE            |
| C23                                                     |     0 | CAP; SMT (0603); 4.7UF; 10%; 16V; X7R; CERAMIC,DNI                   | MURATA, GRM188Z71C475KE21            |
| L0                                                      |     1 | INDUCTOR; SMT (1812); FERRITE-BEAD; 100; TOL=+/-25%; 8A              | WURTH ELECTRONICS INC, 74279226101   |
| L1                                                      |     1 | INDUCTOR; SMT; SHIELDED; 0.22UH; 30%; 9.5A                           | WURTH ELECTRONICS INC, 744373000000  |
| L2, L3                                                  |     2 | INDUCTOR; SMT; COMPOSITE; 2.2UH; 20%; 18.1A                          | COILCRAFT, XEL6060-222ME             |
| R2, R3                                                  |     2 | RES; SMT (0402); 10K; 0.10%; +/-25PPM/DEGK; 0.0630W                  | VISHAY DALE, TNPW040210K0BE          |
| R4, R5                                                  |     2 | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                          | VISHAY DALE, CRCW06030000Z0          |
| R13                                                     |     1 | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                   | VISHAY, CRCW0402100KFK               |
| R7                                                      |     0 | RES; SMT (0603)                                                      |                                      |
| R8, R9                                                  |     0 | RES; SMT (0603)                                                      |                                      |
| SU1                                                     |     1 | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH=6.10MM; BLACK        | SAMTEC, SNT-100-BK-G                 |
| JU_EN1, JU_EN2, JU_SYNC,JU_EXTVCC                       |     4 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS            | SULLINS, PEC03SAAN                   |
| JU_PGOOD1, JU_PGOOD2                                    |     2 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS            | SULLINS, PEC02SAAN                   |
| GND, GND1, VOUT, VSUP, VSUPF                            |     5 | JACK; BANANA; 0.203IN [5.2MM] DIA X 0.218IN [5.5MM] L; 0.203D/0.218L | KEYSTONE, 575-4                      |
| BIAS, EN1, EN2, GND2- GND5, PGOOD1, PGOOD2, SYNC, VOUTS |    11 | TEST POINT; PIN DIA=0.125IN                                          | KEYSTONE, 5125                       |

Evaluates: MAX25254, MAX25255

## MAX25255 Dual Phase Evaluation Kit

Evaluates: MAX25254, MAX25255

## MAX25255 Dual Phase EV Kit Bill of Materials (continued)

## MAX25255 Dual Phase EV Kit BOM-2MHz

| REFERENCE                                              |   QTY | PART DESCRIPTION                                                     | MANUFACTURER/PART NUMBER             |
|--------------------------------------------------------|-------|----------------------------------------------------------------------|--------------------------------------|
| U1                                                     |     1 | Analog Devices Dual Buck Converters, F2CQFN23                        | Analog Devices , MAX25255DAFD A /VY+ |
| C0-C2, C29, C32                                        |     5 | CAP; SMT (0402); 0.1UF; 10%; 50V; X7R; CERAMIC                       | TDK, CGA2B3X7R1H104K050BE            |
| C3                                                     |     1 | CAP; SMT (CASE_D); 47UF; 20%; 50V; ALUMINUM-ELECTROLYTIC             | PANASONIC, EEE-FT1H470AP             |
| C5, C8                                                 |     2 | CAP; SMT (0805); 4.7UF; 10%; 50V; X7R; CERAMIC                       | TDK, CGA4J1X7R1H475K125AE            |
| C6, C7, C10, C15, C16, C21                             |     6 | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                       | TDK, CGA3E2X7R1H104K080AA            |
| C11, C13, C14, C17-C19                                 |     6 | CAP; SMT (1210); 22UF; 20%; 16V; X7R; CERAMIC                        | TDK, CGA6P1X7R1C226M250AC            |
| C12                                                    |     1 | CAP; SMT (0603); 1UF; 20%; 50V; X7R; CERAMIC                         | TAIYO YUDEN, UMK107AB7105MA          |
| C24                                                    |     1 | CAP; SMT (0603); 4.7UF; 10%; 6.3V; X7R; CERAMIC                      | TAIYO YUDEN, JMK107BB7475KA          |
| C25                                                    |     1 | CAP; SMT (0603); 2.2UF; 20%; 6.3V; X7R; CERAMIC                      | TDK, CGA3E1X7R0J225M080AC            |
| C26, C27                                               |     2 | CAP; SMT (0402); 0.1UF; 20%; 50V; X7R; CERAMIC                       | TDK, CGA2B3X7R1H104M050BB            |
| C34, C35                                               |     2 | CAP; SMT (1210); 10UF; 10%; 50V; X7S; CERAMIC                        | TDK, CGA6P3X7S1H106K250AB            |
| C4, C9                                                 |     0 | CAP; SMT (0805); 4.7UF; 10%; 50V; X7R; CERAMIC ; DNI                 | TDK, CGA4J1X7R1H475K125AE            |
| C23                                                    |     0 | CAP; SMT (0603); 4.7UF; 10%; 16V; X7R; CERAMIC,DNI                   | MURATA, GRM188Z71C475KE21            |
| L0                                                     |     1 | INDUCTOR; SMT (1812); FERRITE-BEAD; 100; TOL=+/-25%; 8A              | WURTH ELECTRONICS INC, 74279226101   |
| L1                                                     |     1 | INDUCTOR; SMT; SHIELDED; 0.22UH; 30%; 9.5A                           | WURTH ELECTRONICS INC, 744373000000  |
| L2, L3                                                 |     2 | INDUCTOR; SMT; COMPOSITE;0.47UH; 20%; 22.3A                          | COILCRAFT, XEL6030-4171ME            |
| R2, R3                                                 |     2 | RES; SMT (0402); 10K; 0.10%; +/-25PPM/DEGK; 0.0630W                  | VISHAY DALE, TNPW040210K0BE          |
| R4, R5                                                 |     2 | RES; SMT (0603); 0; JUMPER; JUMPER; 0.1000W                          | VISHAY DALE, CRCW06030000Z0          |
| R13                                                    |     1 | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                   | VISHAY, CRCW0402100KFK               |
| R7                                                     |     0 | RES; SMT (0603)                                                      |                                      |
| R8, R9                                                 |     0 | RES; SMT (0603)                                                      |                                      |
| SU1                                                    |     1 | TEST POINT; SHUNT AND JUMPER; STR; TOTAL LENGTH=6.10MM; BLACK        | SAMTEC, SNT-100-BK-G                 |
| JU_EN1, JU_EN2, JU_SYNC,JU_EXTVCC                      |     4 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS            | SULLINS, PEC03SAAN                   |
| JU_PGOOD1, JU_PGOOD2                                   |     2 | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS            | SULLINS, PEC02SAAN                   |
| GND, GND1, VOUT, VSUP, VSUPF                           |     5 | JACK; BANANA; 0.203IN [5.2MM] DIA X 0.218IN [5.5MM] L; 0.203D/0.218L | KEYSTONE, 575-4                      |
| BIAS, EN1, EN2, GND2-GND5, PGOOD1, PGOOD2, SYNC, VOUTS |    11 | TEST POINT; PIN DIA=0.125IN                                          | KEYSTONE, 5125                       |

## MAX25255 Dual Phase Evaluation Kit

## MAX25255 Dual Phase EV Kit Schematic

<!-- image -->

## MAX25255 Dual Phase Evaluation Kit

## MAX25255 Dual Phase EV Kit PCB Layouts

MAX25255 Dual Phase EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX25255 Dual Phase EV Kit PCB Layout-Top Layer

<!-- image -->

Evaluates: MAX25254, MAX25255

│

## MAX25255 Dual Phase Evaluation Kit

Evaluates: MAX25254, MAX25255

## MAX25255 Dual Phase EV Kit PCB Layouts (continued)

MAX25255 Dual Phase EV Kit PCB Layout-Inner Layer 2

<!-- image -->

MAX25255 Dual Phase EV Kit PCB Layout-Inner Layer 3

<!-- image -->

│

## MAX25255 Dual Phase Evaluation Kit

Evaluates: MAX25254, MAX25255

## MAX25255 Dual Phase EV Kit PCB Layouts (continued)

MAX25255 Dual Phase EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX25255 Dual Phase EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX25255 Dual Phase Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                    | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/21            | Initial release                                                                                | -               |
|                 1 | 8/22            | Updated header, General Description , Detailed Description of Hardware , and Bill of Materials | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX25254, MAX25255