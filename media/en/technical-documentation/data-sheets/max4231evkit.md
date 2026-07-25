<!-- lastmod 2022-08-03 -->
## General Description

The MAX4231 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  evaluates  the  MAX4231  single, high-output-drive CMOS operational amplifier (op amp) in a 6-bump chip-scale package (UCSP K ).

<!-- image -->

## MAX4231 Evaluation Kit

## Features

- S Flexible Input and Output Configurations
- S Single 2.7V to 5.5V Power Supply
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4231EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C1, C2        |     2 | 33 F F Q 20%, 10V bipolar electrolytic aluminum capacitors (D size) Panasonic EEE-1AA330NP |
| C3            |     0 | Not installed, ceramic capacitor (2220)                                                    |
| C4            |     0 | Not installed, ceramic capacitor (1210)                                                    |
| C5            |     1 | 10 F F Q 10%, 10V tantalum capacitor (A size) AVX TAJA106K010R                             |
| C6, C7        |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K                     |
| C8            |     0 | Not installed, ceramic capacitor (0603)                                                    |

| DESIGNATION             |   QTY | DESCRIPTION                            |
|-------------------------|-------|----------------------------------------|
| D1                      |     1 | 2V, 5mA zener diode (0603)             |
| JU1, JU2, JU6           |     3 | 2-pin headers                          |
| JU3, JU4, JU5, JU7, JU8 |     5 | 3-pin headers                          |
| OUT, VIN1, VIN2         |     3 | White multipurpose test points         |
| R1-R4                   |     4 | 1k I Q 5% resistors (0603)             |
| R5                      |     1 | 0 I Q 5% resistor (0603)               |
| R6                      |     0 | Not installed, resistor (1210)         |
| R7                      |     1 | 150 I Q 5% resistor (0603)             |
| U1                      |     1 | CMOS op amp (6 UCSP) Maxim MAX4231ART+ |
| VDD                     |     1 | Red multipurpose test point            |
| VSS1-VSS4               |     4 | Black multipurpose test points         |
| -                       |     8 | Shunts                                 |
| -                       |     1 | PCB: MAX4231 EVALUATION KIT+           |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| AVX Corporation                        | 843-946-0238 | www.avxcorp.com             |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX4231 when contacting these component suppliers.

UCSP is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4231 Evaluation Kit

## Quick Start

## Required Equipment

## Procedure

The  MAX4231  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation. VSS1VSS4  connectors  are  connected  to  the  ground  on  the EV board.

- 1) Verify that all jumpers are in their default positions, as shown in Table 1.
- 2) Set the power-supply output to 5V. Disable the output.
- 3) Set  the  waveform-generator  output  to  1kHz  sine wave, VP-P = 4V, offset = 2V. Disable the output.
- 4) Connect  the  power-supply  output  to  the  VDD connector.
- 5) Connect  the  power-supply  ground  to  the  VSS4 connector.
- 6) Connect the waveform-generator output to the VIN1 connector.
- 7) Connect  the  waveform-generator  ground  to  the VSS1 connector.
- 8) Connect  the  positive  input  of  the  oscilloscope (channel 1) to the VIN1 connector.
- 9) Connect  the  negative  input  of  the  oscilloscope (channel 1) to the VSS1 connector.
- 10) Connect  the  positive  input  of  the  oscilloscope (channel 2) to the VOUT connector.
- 11) Connect  the  negative  input  of  the  oscilloscope (channel 2) to the VSS3 connector.
- 12) Enable the power-supply output.
- 13) Enable the waveform-generator output.
- 14) Verify that channel 1 and channel 2 have the identical waveform, both amplitude and phase.

## Detailed Description of Hardware

The  MAX4231  EV  kit  provides  a  proven  layout  for  the MAX4231 single, high-output-drive CMOS op amp. The MAX4231 features 200mA of peak output current, rail-torail input and output capability from a single 2.7V to 5.5V supply.  The  amplifier  exhibits  a  high  slew  rate  of  10V/ F s  and  a  gain-bandwidth  product  (GBWP)  of  10MHz. The MAX4231 also offers a SHDN feature that drives the output low.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- MAX4231 EV kit
- 5V, 1A power supply
- Waveform generator
- Oscilloscope

## MAX4231 Evaluation Kit

Table 1. MAX4231 EV Kit Jumper Descriptions (JU1-JU8)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                          |
|----------|------------------|------------------------------------------------------|
| JU1      | 1-2*             | DC-blocking capacitor C1 bypassed                    |
| JU1      | Open             | DC-blocking capacitor C1 applied                     |
| JU2      | 1-2*             | DC-blocking capacitor C2 bypassed                    |
| JU2      | Open             | DC-blocking capacitor C2 applied                     |
| JU3      | 1-2*             | VIN1 applied to IN+ through R1                       |
| JU3      | 2-3              | GND applied to IN+ through R1                        |
| JU3      | Open             | No signal applied to IN+ through R1                  |
| JU4      | 1-2*             | VIN2 applied to IN- through R3                       |
| JU4      | 2-3              | GND applied to IN- through R3                        |
| JU4      | Open             | No signal applied to IN- through R3                  |
| JU5      | 1-2              | Zener voltage (2V nominal) applied to IN+ through R2 |
| JU5      | 2-3*             | GND applied to IN+ through R2                        |
| JU5      | Open             | No signal applied to IN+ through R2                  |
| JU6      | 1-2*             | DC-blocking capacitor C3 bypassed                    |
| JU6      | Open             | DC-blocking capacitor C3 applied                     |
| JU7      | 1-2*             | MAX4231 in normal operation mode                     |
| JU7      | 2-3              | MAX4231 in shutdown mode                             |
| JU8      | 1-2*             | VDD applied to the output through R6                 |
| JU8      | 2-3              | GND applied to the output through R6                 |

* Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX4231 Evaluation Kit

Figure 1. MAX4231 EV Kit Schematic

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX4231 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX4231 Evaluation Kit

Figure 3. MAX4231 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX4231 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

5