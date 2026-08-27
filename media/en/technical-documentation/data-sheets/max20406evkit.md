<!-- lastmod 2022-08-02 -->
## MAX20406 Evaluation Kit

## General Description

The MAX20406 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX20406  automotive  2.1MHz synchronous buck converter with 10µA quiescent current. The standard EV kit PCB comes with a MAX20406AFOB/ VY+  (2.1MHz,  3.3V)  installed,  as  well  as  various  test points and jumpers for evaluation. The EV kit output voltage is fixed and easily configured with minimum compo -nent changes. The default EV kit is designed to deliver up  to  6A  with  input  voltage  3V  to  36V.  Output  voltage quality can be monitored by observing the PGOOD signal. The MAX20406 EV kit can also be used to evaluate the MAX20404 and MAX20405.

## Benefits and Features

- Input Supply Range from 3V to 36V
- Output Voltage: 3.3V/5V Fixed and Adjustable from 0.8 to 10V
- Delivers up to 6A
- Frequency - Synchronization Input
- Enable Input
- Spread Spectrum Available
- Voltage Monitoring PGOOD Output Available
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Evaluates: MAX20404/MAX20405/ MAX20406

## Quick Start

## Required Equipment

- MAX20406 EV Kit
- 36V, 6A Power Supply (PS)
- Appropriate Resistive Load, or an Electronic Load that can Sink 6A
- Digital Multimeter (DMM)
- Oscilloscope

## Procedure

The EV kit comes fully assembled and tested. Follow the steps below to verify board operation:

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Connect the positive and negative terminals of  the  power supply to the VSUP\_FILTER and GND test pads, respectively.
- 3) Set the power-supply voltage to 14V and current limit to 6A.
- 4) Turn on the power supply.
- 5) Using  the  DMM,  verify  the  VOUT  is  approximately 3.3V.
- 6) Verify that the switching frequency is 2.1MHz (approx.) by monitoring the inductor switching voltage with the oscilloscope.

## Additional Evaluation

- 7) Connect  the  positive  and  negative  terminals  of  the electronic load to VOUT and GND3, respectively.
- 8) Set  the  electronic  load  to  the  desired  current  at  or below 6A or use an equivalent resistive load with an appropriate power rating.
- 9) Adjust current limit on the power supply as necessary.
- 10)  Turn on the power supply and electronic load.
- 11)  Verify that voltage across the VOUT and GND3 is 3.3V.

<!-- image -->

## MAX20406 Evaluation Kit

## Detailed Description of Hardware

The  MAX20406  EV  kit  provides  a  proven  layout  for the  MAX20406  synchronous  buck  regulator  IC.  The  IC accepts input voltages as high as 36V and delivers up to 6A. The EV kit can handle an input supply transient up to 42V. Various test points are included for evaluation.

## External Synchronization

The IC can operate in two modes: forced-PWM (FPWM) or  skip  mode.  Skip  mode  has  better  efficiency  for  lightload  conditions.  When  SYNC  is  pulled  low,  the  IC operates in skip mode for light loads and PWM mode for larger loads. When SYNC is pulled high, the IC is forced to  operate  in  PWM  mode  across  all  load  conditions. SYNC can be used to synchronize with other supplies if a clock source is present. The IC is forced to operate in FPWM mode when SYNC is connected to a clock source.

## Buck Output Monitoring (PGOOD)

The  EV  kit  provides  a  power-good  output  test  point (PGOOD) to monitor the status of the buck output (OUT). PGOOD is high impedance when the output is in regulation. PGOOD is low impedance when the output voltage drops below 7% (typ) of its nominal regulated voltage.

## Programming Buck Output Voltage

The  EV  kit  comes  installed  with  MAX20406AFOB/ VY+,  which  can  provide  a  fixed  3.3V  output  voltage or  an  adjustable  0.8V-to-10V  output  voltage.  To  program  V OUT voltage, place appropriate resistors in the  positions  R7  and  R8  according  to  the  following equation:

<!-- formula-not-decoded -->

Where typically V FB  = 0.8V and R8 = 10k~100k.

## Evaluates: MAX20404/MAX20405/ MAX20406

## Evaluating Other Variants

The EV kit comes installed with the 3.3V/2.1MHz, 6A variant  (MAX20406AFOB/VY+).  The  other  variants  can  be installed with minimal component changes.

## Table 1. Default Jumper Settings

| JUMPER   | DEFAULT SHUNT POSITION   | FUNCTIONS                  |
|----------|--------------------------|----------------------------|
| ENABLE   | 1-2                      | Buck enabled               |
| J1       | 1-2                      | Forced-PWM mode            |
| J2       | Installed                | PGOOD TP pulled up to bias |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20406EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX20406 EV Kit Bill of Materials

| PARTS COMMONTOALL VARIANTS                                      | PARTS COMMONTOALL VARIANTS   | PARTS COMMONTOALL VARIANTS   | PARTS COMMONTOALL VARIANTS   | PARTS COMMONTOALL VARIANTS                                                                                              |
|-----------------------------------------------------------------|------------------------------|------------------------------|------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| REF_DES                                                         | MFG PART #                   | MANUFACTURER                 | VALUE                        | DESCRIPTION                                                                                                             |
| BIAS, FBR, GND2, GNDS, GNDS1- GNDS3, PGOOD, SYNCOUT, VEA, VSUPS | 5012                         | KEYSTONE                     | N/A                          | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; WHITE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| C0                                                              | CGA6P3X7S1H106K250AB         | TDK                          | 10UF                         | CAP; SMT (1210); 10UF; 10%; 50V; X7S; CERAMIC                                                                           |
| C1, C2                                                          | CGA3E2X7R1H222K080AD         | TDK                          | 2200PF                       | CAP; SMT (0603); 2200PF; 10%; 50V; X7R; CERAMIC;                                                                        |
| C3                                                              | EEH-ZA1H101P                 | PANASONIC                    | 100UF                        | CAP; SMT (CASE_G); 100UF; 20%; 50V; ALUMINUM-ELECTROLYTIC                                                               |
| C4, C5                                                          | CGA5L3X7R1H475K160AB         | TDK                          | 4.7UF                        | CAP; SMT (1206); 4.7UF; 10%; 50V; X7R; CERAMIC                                                                          |
| C6, C9                                                          | UMK107BJ105KA                | TAIYO YUDEN                  | 1UF                          | CAP; SMT (0603); 1UF; 10%; 50V; X5R; CERAMIC                                                                            |
| C7, C8, C10, C17                                                | CGA3E2X7R1H104K080AE         | TDK                          | 0.1UF                        | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC                                                                          |
| C11                                                             | GRM188Z71C225KE43            | MURATA                       | 2.2UF                        | CAP; SMT (0603); 2.2UF; 10%; 16V; X7R; CERAMIC                                                                          |
| ENABLE, J1                                                      | PEC03SAAN                    | SULLINS                      | PEC03SAAN                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                               |
| GND, GND3, VOUT, VSUP_FILTER                                    | 575-4                        | KEYSTONE                     | 575-4                        | RECEPTACLE; JACK; BANANA; 0.203IN [5.2MM] DIA X 0.218IN [5.5MM] L; 0.203D/0.218L; NICKEL PLATED BRASS                   |
| J2                                                              | PEC02SAAN                    | SULLINS                      | PEC02SAAN                    | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |
| L0                                                              | BLM41PG600SH1                | MURATA                       | 60                           | INDUCTOR; SMT (1806); FERRITE-BEAD; 60 IMPEDANCE AT 100MHz; 6A                                                          |
| R2                                                              | ERA-2AEB103                  | PANASONIC                    | 10K                          | RES; SMT (0402); 10K; 0.10%; +/-25PPM/DEGK; 0.0630W                                                                     |
| R4, R5                                                          | RC0402JR-070RL               | YAGEO PHYCOMP                | 0                            | RES; SMT (0402); 0; 5%; JUMPER; 0.0630W                                                                                 |
| C16                                                             |                              |                              |                              | Do not install                                                                                                          |
| R6                                                              |                              |                              |                              | Do not install                                                                                                          |
| R7, R8                                                          |                              |                              |                              | Do not install                                                                                                          |

| 2.1MHz VARIANT              | 2.1MHz VARIANT       | 2.1MHz VARIANT   | 2.1MHz VARIANT   | 2.1MHz VARIANT                                |
|-----------------------------|----------------------|------------------|------------------|-----------------------------------------------|
| REF_DES                     | MFG PART #           | MANUFACTURER     | VALUE            | DESCRIPTION                                   |
| L1                          | XEL5030-102          | COILCRAFT        | 1UH              | INDUCTOR; SMT; 1UH                            |
| L2 (For                     | XEL5030-102          | COILCRAFT        | 1UH              | INDUCTOR; SMT; 1UH                            |
| MAX20404/MAX20405/MAX20406) |                      |                  |                  |                                               |
| C12, C15                    | CGA6P1X7R1C226M250AC | TDK              | 22UF             | CAP; SMT (1210); 22UF; 10%; 16V; X7R; CERAMIC |
| C13, C14                    |                      |                  |                  | Do not install                                |

| 3MHz VARIANT               | 3MHz VARIANT         | 3MHz VARIANT   | 3MHz VARIANT   | 3MHz VARIANT                                  |
|----------------------------|----------------------|----------------|----------------|-----------------------------------------------|
| REF_DES                    | MFG PART #           | MANUFACTURER   | VALUE          | DESCRIPTION                                   |
| L1                         | XEL5030-102          | COILCRAFT      | 1UH            | INDUCTOR; SMT; 1UH                            |
| L2 (For MAX20406)          | XEL5020-681          | COILCRAFT      | 0.68UH         | INDUCTOR; SMT; 0.68UH                         |
| L2 (For MAX20404/MAX20405) | XEL4030-901          | COILCRAFT      | 0.9UH          | INDUCTOR; SMT; 0.9UH                          |
| C12                        | CGA6P1X7R1C226M250AC | TDK            | 22UF           | CAP; SMT (1210); 22UF; 10%; 16V; X7R; CERAMIC |
| C15                        | CGA6P1X7R1E106K250AC | TDK            | 10UF           | CAP; SMT (1210); 10UF; 10%; 25V; X7R; CERAMIC |
| C13, C14                   |                      |                |                | Do not install                                |

| 400kHz VARIANT             | 400kHz VARIANT    | 400kHz VARIANT   | 400kHz VARIANT   | 400kHz VARIANT                                |
|----------------------------|-------------------|------------------|------------------|-----------------------------------------------|
| REF_DES                    | MFG PART #        | MANUFACTURER     | VALUE            | DESCRIPTION                                   |
| L1                         | XEL5030-222       | COILCRAFT        | 2.2UH            | INDUCTOR; SMT; 2.2UH                          |
| L2 (For MAX20406)          | XEL6060-472       | COILCRAFT        | 4.7UH            | INDUCTOR; SMT; 4.7UH                          |
| L2 (For MAX20404/MAX20405) | XEL6060-682       | COILCRAFT        | 6.8UH            | INDUCTOR; SMT; 6.8UH                          |
| C12, C13, C15              | GRT32EC81C476KE13 | MURATA           | 47UF             | CAP; SMT (1210); 47UF; 10%; 16V; X6S; CERAMIC |
| C14                        |                   |                  |                  | Do not install                                |

## MAX20406 EV Kit Schematic Diagram

Figure 1. MAX20406 EV Kit Schematic

<!-- image -->

## MAX20406 EV Kit PCB Layout Diagrams

MAX20406 EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX20406 EV Kit PCB Layout-Top Layer

<!-- image -->

MAX20406 EV Kit PCB Layout-Internal Layer 2

<!-- image -->

## MAX20406 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20406 EV Kit PCB Layout-Internal Layer 3

MAX20406 EV Kit PCB Layout-Bottom Layer

<!-- image -->

MAX20406 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

## MAX20406 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/19            | Initial release                                                                                                             | -               |
|                 1 | 1/20            | Updated title to MAX20404/MAX20405/MAX20406; updated BOM                                                                    | 1-7             |
|                 2 | 3/21            | Updated General Description, Quick Start, Detailed Description, BOM, and Layout Diagrams                                    | 1-6             |
|                 3 | 7/21            | Updated Procedure, Additional Evaluation, Detailed Description of Hardware, BOM, Schematic Diagram, and PCB Layout Diagrams | 1-6             |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX20404/MAX20405/

MAX20406