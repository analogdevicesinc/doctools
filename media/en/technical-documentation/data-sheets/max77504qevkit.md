<!-- lastmod 2022-08-02 -->
## MAX77504 FC2QFN Evaluation Kit

## General Description

The MAX77504 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX77504,  a  3A  high-efficiency buck converter. The IC is capable of 2.6V to 14V input and is  output  voltage  configurable  between  0.6V  to  6V. The factory default output voltage of this EV kit is set at 3.3V. Output voltage can be configured by changing the feedback resistor values (R3 and R4). Two GPIO pins are available to support Force PWM/SYNC and EN function.

Ordering Information appears at end of data sheet.

Evaluates: MAX77504

(MAX77504AAFC+)

## Features and Default Settings

- Sense Points for High-Accuracy Measurements
- Accessible Test Points for EN, POK, FPWM, and OUTS
- Switching Frequency Configurable Between 500kHz to 1.5MHz Through SEL
- Externally Synchronized FPWM Mode Capability
- FPWM and Skip Mode Configurable (Skip Mode Default)
- UVLO Rising = 2.6V, UVLO Falling = 2.4V

| SPECIFICATION          | TEST CONDITIONS                 |   MIN |   TYP |   MAX | UNIT   |
|------------------------|---------------------------------|-------|-------|-------|--------|
| Input Voltage          |                                 |   2.6 |       |    14 | V      |
| Output Voltage         |                                 |   0.6 |       |     6 | V      |
| Default Output Voltage | R3 = 49.9kΩ, R4 = 11.1kΩ        |       |   3.3 |       | V      |
| Output Current         |                                 |     0 |       |     3 | A      |
| Peak Efficiency        | 3.7V IN , 3.3V OUT , 300mA load |       |       |  97.6 | %      |

## MAX77504 Evaluation Board

<!-- image -->

<!-- image -->

## MAX77504 FC2QFN Evaluation Kit

## Quick Start

## Required Equipment

- MAX77504 EV kit
- Adjustable DC power supply with 14V and 3A capability
- Digital Multimeters

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation.  Use  twisted  wires  of appropriate gauge (20AWG) that are as short as possible to connect the load and power sources.

- 1) Ensure that the EV kit has the correct jumper settings, as shown in Table 1.
- 2) Connect a DVM to the SUPS and GNDS sense pins to measure input voltage.
- 3) Connect a DVM to the OUTS and GNDS sense pins to measure output voltage.
- 4) Apply a power supply set to 0V (100mA current limit) across the VIN and PGND terminals of the EV kit. Turn the supply on and increase the voltage to 12V.

## Evaluates: MAX77504

(MAX77504AAFC+)

## Description of Hardware

The MAX77504 EV kit demonstrates the MAX77504 buck converter.  It  regulates  output  from  input  voltage  ranges from 2.6V to 14V. Configurable output range is from 0.6V to  6.0V  with  feedback  resistors  R3  and  R4.  The  EV  kit is suited with a general DC input. T able 1 lists jumpers and associated functions that are available on the EV kit.

## Design Procedure (Choosing RSEL)

The  MAX77504  includes  an  RSEL  pin  to  configure  the switching frequency, mid-band gain, and active discharge on  startup.  The  configuration  selection  resistor  (RSEL) sets five bits of configuration options decoded in Table 2. Choose  RSEL[4:0]  carefully  by  following  the  procedure outlined in the Design Procedure section  of  the  IC  data sheet; or refer to the Typical Application Circuits section of the IC data sheet for a list of known good RSEL choices for  common  applications.  Resistors  with  tolerance  1% (or better) should be chosen for R7, with nominal values specified in Table 3. Ensure proper resistor configuration by measuring the resistance across SEL and GND sense points.

- 5) Confirm the DVM connected to OUTS and GNDS reads the default output voltage of the EV kit (3.3V).

## Table 1. Default Shunt Positions and Jumper Descriptions

| JUMPER   | NODE OR FUNCTION   | SHUNT POSITION   | FUNCTION                                                                                                                      |
|----------|--------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------|
| J1       | EN                 | 1-2*             | Connects EN to V IN (MAX77504 is enabled by default).                                                                         |
| J1       | EN                 | 2-3              | Connects EN to GND.                                                                                                           |
| J2       | FPWM/SYNC          | 1-2              | Enables FPWM function.                                                                                                        |
| J2       | FPWM/SYNC          | 2-3*             | Enables SKIP mode function.                                                                                                   |
| J3       | RSEL               | 1-2              | Potentiometer (R6) value configuration to set switching frequency, mid-band gain, and active discharge (Default RSEL = OPEN). |
| J4       | RSEL               | 1-2              | Resistor (R7) value configuration to set switching frequency, mid-band gain, and active discharge (Default RSEL = OPEN).      |
| J5       | RSEL               | 1-2              | Resistor (R8) value configuration to set switching frequency, mid-band gain, and active discharge (Default RSEL = OPEN).      |
| J7       | POK                | 1-2*             | Enables Power-OK indicator function.                                                                                          |

│

## MAX77504 FC2QFN Evaluation Kit

For  example,  choose  a  30.9kΩ  (1%  TOL)  resistor  to program  RSEL[4:0]  to  0x16.  0x16  (0b10110)  decodes with the following configuration:

- FSW[1:0] = 0b10 (1MHz switching frequency)
- GAIN[1:0] = 0b11 (200kΩ R COMP)
- ADEN = 0b0 (active discharge disabled)

## Table 2. MAX77504 RSEL Configuration Bits

| RSEL[4:0]   | RSEL[4:0]   | NAME      | DESCRIPTION                              | DECODE                               |
|-------------|-------------|-----------|------------------------------------------|--------------------------------------|
| MSB         | Bit 4       | FSW[1:0]  | Switching Frequency Control. Sets F SW . | 00 = 0.5MHz 01 = 0.75MHz 10 = 1.0MHz |
| MSB         | Bit 3       | FSW[1:0]  | Switching Frequency Control. Sets F SW . | 11 = 1.5MHz                          |
| MSB         | Bit 2       | GAIN[1:0] | Mid-band gain control. Sets R COMP .     | 00 = 75kΩ 01 = 100kΩ 10 = 150kΩ      |
| MSB         | Bit 1       | GAIN[1:0] | Mid-band gain control. Sets R COMP .     | 11 = 200kΩ                           |
| LSB         | Bit 0       | ADEN      | Active discharge resistor enable.        | 0 = disabled 1 = enabled             |

Program these bits by choosing a configuration selection resistor (R SEL ) with a tolerance of 1% or better using lookup Table 3.

## Table 3. Configuration Selection Resistor (RSEL) Lookup Table

| R SEL (Ω) →RSEL[4:0]   | R SEL (Ω) →RSEL[4:0]   | R SEL (Ω) →RSEL[4:0]   |
|------------------------|------------------------|------------------------|
| 95.3Ω or SHORT → 0x00  | 1620Ω → 0x0B           | 30900Ω → 0x16          |
| 200Ω → 0x01            | 1870Ω → 0x0C           | 36500Ω → 0x17          |
| 309Ω → 0x02            | 2150Ω → 0x0D           | 42200Ω → 0x18          |
| 422Ω → 0x03            | 2490Ω → 0x0E           | 48700Ω → 0x19          |
| 536Ω → 0x04            | 2870Ω → 0x0F           | 56200Ω → 0x1A          |
| 649Ω → 0x05            | 3740Ω → 0x10           | 64900Ω → 0x1B          |
| 768Ω → 0x06            | 8060Ω → 0x11           | 75000Ω → 0x1C          |
| 909Ω → 0x07            | 12400Ω → 0x12          | 86600Ω → 0x1D          |
| 1050Ω → 0x08           | 16900Ω → 0x13          | 100000Ω → 0x1E         |
| 1210Ω → 0x09           | 21500Ω → 0x14          | 115000Ω or OPEN → 0x1F |
| 1400Ω → 0x0A           | 26100Ω → 0x15          |                        |

│

## Evaluates: MAX77504 (MAX77504AAFC+)

Table 3 indicates that a 30.9kΩ selection resistor selects code  0b10110  (0x16).  The  device  evaluates  R SEL whenever SUP is valid and EN transitions from logic 0 to 1. The decoded value of R SEL  is latched until the next EN rising edge.

## MAX77504 FC2QFN Evaluation Kit

## External Clock Synchronization (SYNC)

To  enable  the  externally  synchronized  forced-PWM (FPWM) mode, provide an external clock signal to FPWM/ SYNC with a frequency inside the valid range (f SYNC-VALID ), as shown in Figure 1 (Pin 2 of J2 or FPWM sense pin). The valid lockable range shifts depending on the chosen

## Evaluates: MAX77504 (MAX77504AAFC+)

internal  switching  frequency  (FSW[1:0]  programmed  by RSEL). Refer to the FPWM/SYNC section of the Electrical Characteristics table in the IC data sheet for the guaranteed valid lock ranges versus the FSW[1:0] choice. Refer to the External Clock Synchronization (SYNC) section of the IC data sheet for more information.

Figure 1. FPWM/SYNC Pin

<!-- image -->

## Ordering Information

| PART            | U1 IC         | DEFAULT OUTPUT VOLTAGE   | UVLO FALLING   | UVLO RISING   |
|-----------------|---------------|--------------------------|----------------|---------------|
| MAX77504QEVKIT# | MAX77504AAFC+ | 3.3V                     | 2.4V           | 2.6V          |

│

## MAX77504 FC2QFN Evaluation Kit

## MAX77504 EV Kit Bill of Materials

| PART                                                                                                         | QTY                                                                                                          | MFG PART #                                                                                                   | MANUFACTURER                                                                                                 | DESCRIPTION                                                                                                      |
|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|
| C1                                                                                                           | 1                                                                                                            | C1608X5R1E106M080AC                                                                                          | TDK                                                                                                          | 10 μF ±10%, 10V X5R CERAMIC CAPACITOR (0603)                                                                     |
| C3                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 2.2 μF ±10%, 6.3V X5R CERAMIC CAPACITOR (0402)                                                                   |
| C4                                                                                                           | 1                                                                                                            | GRM1555C1H2R2BA01                                                                                            | MURATA                                                                                                       | 2.2pF ±5%, 50V C0G CERAMIC CAPACITOR (0402)                                                                      |
| C5, C6, C7                                                                                                   | 3                                                                                                            | C1608X5R1A226M080AC                                                                                          | TDK                                                                                                          | 22μF ±20%, 10V X5R CERAMIC CAPACITOR (0603)                                                                      |
| C13                                                                                                          | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 0.2 2μF ±10%, 16V X7R CERAMIC CAPACITOR (0402)                                                                   |
| J1, J2                                                                                                       | 2                                                                                                            | TSW-103-07-T-S                                                                                               | SAMTEC                                                                                                       | STRAIGHT CONNECTOR, 3 PINS                                                                                       |
| J7                                                                                                           | 1                                                                                                            | TSW-102-07-T-S                                                                                               | SAMTEC                                                                                                       | STRAIGHT CONNECTOR, 2 PINS                                                                                       |
| L1                                                                                                           | 1                                                                                                            | FDSD0412-H-1R5M                                                                                              | MURATA                                                                                                       | 1.5 μ H ±20%, ISAT=5.5A, DCR=53m Ω                                                                               |
| R2, R5                                                                                                       | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 0 Ω , RESISTOR (0402)                                                                                            |
| R3                                                                                                           | 1                                                                                                            | ERJ-2RKF4992                                                                                                 | PANASONIC                                                                                                    | 49.9k Ω , RESISTOR (0402)                                                                                        |
| R4                                                                                                           | 1                                                                                                            | TNPW040211K1BE                                                                                               | VISHAY                                                                                                       | 11.1k Ω , RESISTOR (0402)                                                                                        |
| U1                                                                                                           | 1                                                                                                            | MAX77504AA FC +                                                                                              | MAXIM                                                                                                        | BUCK (1 2 FC2QFN ), MAX77504AA FC +                                                                              |
| Components below this line are outside of the immediate MAX77504 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77504 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77504 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77504 evaluation circuit and solution silkscreen. | Components below this line are outside of the immediate MAX77504 evaluation circuit and solution silkscreen.     |
| C9                                                                                                           | 1                                                                                                            | ANY                                                                                                          | ANY                                                                                                          | 0.1μF ±10%, 10V X5R CERAMIC CAPACITOR (0402)                                                                     |
| C11                                                                                                          | 1                                                                                                            | TPSC107K016R0200                                                                                             | AVX                                                                                                          | 100μF ±10%, 16V TANTALUM CAPACITOR (6032)                                                                        |
| EN, FPWM, POK, POT, SEL                                                                                      | 5                                                                                                            | 5002                                                                                                         | KEYSTONE                                                                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; WHITE; PHOSPHOR BRONZE WIRE SILVER;            |
| GND, GND2- GND5, OUT, SUP                                                                                    | 4                                                                                                            | 9020 BUSS                                                                                                    | WEICO WIRE                                                                                                   | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                         |
| J3, J4, J5                                                                                                   | 3                                                                                                            | TSW-102-07-T-S                                                                                               | SAMTEC                                                                                                       | STRAIGHT CONNECTOR, 2 PINS                                                                                       |
| LX, OUT1                                                                                                     | 2                                                                                                            | SS-102-TT-2                                                                                                  | SAMTEC                                                                                                       | IC-SOCKET; SIP; STRAIGHT; PRECISION MACHINED SOCKET STRIP; OPEN FRAME; 2PINS; 100MIL                             |
| OUTS, SUPS, VL                                                                                               | 3                                                                                                            | 5000                                                                                                         | KEYSTONE                                                                                                     | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| R1                                                                                                           | 1                                                                                                            | CRCW0402100KFK                                                                                               | VISHAY                                                                                                       | 100k Ω ±1%, RESISTOR (0402)                                                                                      |
| R6                                                                                                           | 1                                                                                                            | 3296Y-1-204LF                                                                                                | BOURNS                                                                                                       | RESISTOR; THROUGH HOLE-RADIAL LEAD; 3296 SERIES; 200K OHM; 10%; 100PPM; 0.5W                                     |
| PCB                                                                                                          | 1                                                                                                            | MAX77504 FC2QFN                                                                                              | MAXIM                                                                                                        | PCB:MAX77504 FC2QFN                                                                                              |
| C2, C8, C10                                                                                                  | 0                                                                                                            | N/A                                                                                                          | N/A                                                                                                          | CAPACITOR; SMT (0603); OPEN; FORMFACTOR                                                                          |
| C12                                                                                                          | 0                                                                                                            | N/A                                                                                                          | N/A                                                                                                          | CAPACITOR; SMT (0402); OPEN; FORMFACTOR                                                                          |
| R7, R8, R12                                                                                                  | 0                                                                                                            | N/A                                                                                                          | N/A                                                                                                          | RESISTOR; 0402; OPEN; FORMFACTOR                                                                                 |

│

Evaluates: MAX77504

(MAX77504AAFC+)

## MAX77504 EV Kit Schematic

<!-- image -->

## MAX77504 FC2QFN Evaluation Kit

## MAX77504 EV Kit PCB Layout Diagrams

MAX77504 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX77504 EV Kit PCB Layout-Top

<!-- image -->

Evaluates: MAX77504

(MAX77504AAFC+)

MAX77504 EV Kit PCB Layout-Internal 2

<!-- image -->

MAX77504 EV Kit PCB Layout-Internal 3

<!-- image -->

│

## MAX77504 FC2QFN Evaluation Kit

## MAX77504 EV Kit PCB Layout Diagrams (continued)

MAX77504 EV Kit PCB Layout-Bottom

<!-- image -->

MAX77504 EV Kit Component Placement Guide-Bottom Silkscreen

<!-- image -->

│

Evaluates: MAX77504

(MAX77504AAFC+)

## MAX77504 FC2QFN Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/20            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77504

(MAX77504AAFC+)