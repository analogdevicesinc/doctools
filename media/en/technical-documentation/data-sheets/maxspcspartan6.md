<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAXSPCSPARTAN6+ Evaluation Kit

## General Description

The  MAXSPCSPARTAN6+  evaluation  kit  (EV  kit)  is designed to facilitate the use of Maxim ADCs and DACs with  any  evaluation  board  made  for  Xilinx M Spartan M 6 series FPGAs. The EV kit contains the MAX11612 and MAX11040 ADCs and two cascaded MAX5135 DACs. The MAX11612 is a very-low-power, 4-channel, 2-wire, 12-bit,  SAR ADC. This ADC operates with a 5V supply and has an internal reference of 4.096V.

The  MAX11040  is  an  SPI K -compatible,  4-channel, simultaneous-sampling, cascadable, 24-bit, sigma-delta ADC.  The  MAX5135  is  the  industry's  smallest,  12-bit, voltage-output DAC.

## Features

- S 12-Bit, 2-/4-Channel, SAR ADC Support (MAX11612)
- S 24-Bit, 4-Channel, Programmable Data Rate, Sigma-Delta ADC Support (MAX11040)
- S 12-Bit, 4-Channel DAC Support (MAX5135)
- S Connects with any Spartan 6 Evaluation Boards Through a Standard FMC VITA-57.1 LPC Connector

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAXSPCSPARTAN6+ | EV Kit |

## Component List

| DESIGNATION                       |   QTY | DESCRIPTION                                  |
|-----------------------------------|-------|----------------------------------------------|
| C1                                |     1 | 10 F F Q 20%, 25V ceramic capacitor (1206)   |
| C2, C3, C11-C14, C21-C26, C29-C32 |    16 | 0.1 F F Q 10%, 50V ceramic capacitors (0603) |
| C4, C15-C20, C27, C28             |     9 | 1 F F Q 10%, 25V ceramic capacitors (0603)   |
| C5, C6                            |     2 | 18pF Q 5%, 50V C0G ceramic capacitors (0603) |
| C7-C10                            |     4 | 0.01 F F Q 5%, 25V ceramic capacitors (0603) |
| C33, C34                          |     2 | 47pF, 50V ceramic capacitors (0603)          |
| C35, C36                          |     2 | 4.7 F F Q 10%, 10V ceramic capacitors (0603) |
| D1, D2                            |     2 | Orange SMT LEDs (0603)                       |
| D3, D4, D5                        |     3 | Green SMT LEDs (0603)                        |
| J1                                |     1 | FMC LPC connector (VITA-57.1)                |
| J2                                |     1 | 8 x 2-pin R/A header (2.54mm)                |
| J3, J4                            |     2 | 8 x 2-pin headers (2.54mm)                   |
| J5                                |     1 | 8-pin inline receptacle, 0.1in centers       |
| J6, J7                            |     2 | 3-pin headers (2.54mm)                       |

Xilinx and Spartan are registered trademarks of Xilinx. SPI is a trademark of Motorola, Inc. µMAX is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

* EP = Exposed pad.

| DESIGNATION      |   QTY | DESCRIPTION                                                     |
|------------------|-------|-----------------------------------------------------------------|
| L1               |     1 | 10 F H Q 5% inductor (0603, 0)                                  |
| R1, R2, R16, R17 |     4 | 2.2k I Q 5% resistors (0603)                                    |
| R3-R10           |     8 | 49.9 I Q 0.1% resistors (0603)                                  |
| R11-R14          |     4 | 100 I Q 1% resistors (0603)                                     |
| R15, R21-R24     |     5 | 4.7k I Q 0.1% resistors (0603)                                  |
| R18, R19, R20    |     3 | 0 I Q 1% resistors (0603)                                       |
| U1               |     1 | Step-down converter (6 SOT23) Maxim MAX1837EUT50#G16            |
| U2               |     1 | Low-power ADC (8 F MAX M ) Maxim MAX11612EUA+                   |
| U3               |     1 | Sigma-delta ADC (38 TSSOP) Maxim MAX11040GUU+                   |
| U4               |     1 | Bidirectional level translator (12 TQFN-EP*) Maxim MAX3395EETC+ |
| U5               |     1 | 8-channel level translator (20 TSSOP) Maxim MAX3002EUP          |
| U6, U7           |     2 | Quad 12-bit DACs (24 TQFN-EP*) Maxim MAX5135GTG+                |
| Y1               |     1 | 24.576MHz, 18pF crystal                                         |
| -                |     1 | PCB: MAXSPCSPARTAN6+                                            |

## MAXSPCSPARTAN6+ Evaluation Kit

## Quick Start

The MAXSPCSPARTAN6+ board can be plugged in to any Spartan 6 series FPGA evaluation board. A two-step configuration is needed to use this card with the FPGA evaluation board:

- 1) Place a shunt on pins 2-3 of header J7 (i.e., +3V3FMC to +3V3).
- 2) Place a shunt on pins 2-3 of header J6 (i.e., +5VREG to +5V).

Now  connect  the  MAXSPCSPARTAN6+  board  to  the FPGA EV kit. On power-up, LEDs D3, D4, and D5 should glow, indicating a power-up state.

## Detailed Description of Hardware

The MAXSPCSPARTAN6+ board is loaded with Maxim's ADCs and DACs and makes it very easy to integrate the FPGA with any analog interface.

## Communication with the MAX11612

The MAX11612 is a 12-bit, 2-/4-channel, I 2 C-compatible ADC. The FPGA  can drive commands  for data acquisition from the MAX11612 on the I 2 C slave address 0110100.  The  MAX11612  can  work  with  the  internal reference of 4.096V or the external reference connected at  the  AD3  port  of  J2.  If  internal  reference  is  used;  all 4  channels  can  be  sampled  from  AD0-AD3.  For  more information, refer to the MAX11612 IC data sheet.

## Communication with the MAX11040

The  MAX11040  is  a  24-bit,  4-channel,  SPI-compatible, sigma-delta  ADC  with  programmable  output  data  rate. It  has  an  internal  reference  of  2.5V  with Q 2.2V  input range. Input ports are marked as AD0-/AD0+ to AD3-/ AD3+ on J3. External reference can also be applied. The MAX11040 does simultaneous sampling and data for all 4 channels and can be acquired in one read.

This ADC  has  four  standard  connections  for SPI communication. It also has an extra signal (DRDYOUT) that  interrupts  the  FPGA  at  every  end-of-conversion to  sample  the  data.  For  more  information,  refer  to  the MAX11040 IC data sheet.

## Communication with the MAX5135

The  MAX5135  is  a  12-bit,  4-channel,  voltage  output, SPI-compatible  DAC.  The  MAXSPCSPARTAN6+  board contains  two  MAX5135  ICs  in  a  cascaded  configuration. The DAC channels are marked as DA0-DA3 on J2 and DA4-DA7 on J3. For more information, refer to the MAX5135 IC data sheet.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 1. MAXSPCSPARTAN6+ Connector J2 Description

|   J2 PIN NO. | LABEL   | FUNCTION                                               |
|--------------|---------|--------------------------------------------------------|
|            1 | +5V     | +5V, 250mA supply for external circuit                 |
|            2 | N.C.    | Not connected                                          |
|            3 | GND     | Ground                                                 |
|            4 | DA0     | DAC output from channel 0 of U6 (MAX5135)              |
|            5 | GND     | Ground                                                 |
|            6 | DA1     | DAC output from channel 1 of U6 (MAX5135)              |
|            7 | GND     | Ground                                                 |
|            8 | DA2     | DAC output from channel 2 of U6 (MAX5135)              |
|            9 | GND     | Ground                                                 |
|           10 | DA3     | DAC output from channel 3 of U6 (MAX5135)              |
|           11 | AD1     | ADC input to channel 1 of U2 (MAX11612)                |
|           12 | AD0     | ADC input to channel 0 of U2 (MAX11612)                |
|           13 | GND     | Ground                                                 |
|           14 | I/O     | Digital input/output connected to FMC connector at C18 |
|           15 | AD3     | ADC input to channel 3 of U2 (MAX11612)                |
|           16 | AD2     | ADC input to channel 2 of U2 (MAX11612)                |

<!-- image -->

## MAXSPCSPARTAN6+ Evaluation Kit

Table 2. MAXSPCSPARTAN6+ Connector J3 Description

|   J3 PIN NO. | LABEL   | FUNCTION                                         |
|--------------|---------|--------------------------------------------------|
|            1 | +5V     | +5V, 250mA supply for external circuit           |
|            2 | N.C.    | Not connected                                    |
|            3 | AD3-    | ADC negative input to channel 3 of U3 (MAX11040) |
|            4 | AD3+    | ADC positive input to channel 3 of U3 (MAX11040) |
|            5 | AD2-    | ADC negative input to channel 2 of U3 (MAX11040) |
|            6 | AD2+    | ADC positive input to channel 2 of U3 (MAX11040) |
|            7 | AD1-    | ADC negative input to channel 1 of U3 (MAX11040) |
|            8 | AD1+    | ADC positive input to channel 1 of U3 (MAX11040) |
|            9 | AD0-    | ADC negative input to channel 0 of U3 (MAX11040) |
|           10 | AD0+    | ADC positive input to channel 0 of U3 (MAX11040) |
|           11 | DA5     | DAC output from channel 1 of U7 (MAX5135)        |
|           12 | DA4     | DAC output from channel 0 of U7 (MAX5135)        |
|           13 | GND     | Ground                                           |
|           14 | N.C.    | Not connected                                    |
|           15 | DA7     | DAC output from channel 2 of U7 (MAX5135)        |
|           16 | DA6     | DAC output from channel 2 of U7 (MAX5135)        |

Table 3. MAXSPCSPARTAN6+ Connector J4 Description

|   J4 PIN NO. | LABEL   | FUNCTION                                                                                          |
|--------------|---------|---------------------------------------------------------------------------------------------------|
|            1 | GND     | Ground                                                                                            |
|            2 | N.C.    | Not connected                                                                                     |
|            3 | DRDY    | DRDYOUT of MAX11040 going to the FMC connector at C26*                                            |
|            4 | N.C.    | Not connected                                                                                     |
|            5 | GPIO    | Digital I/O going to the FMC connector at C18 from J2*                                            |
|            6 | N.C.    | Not connected                                                                                     |
|            7 | MOSI    | SPI: MOSI connected to the FMC connector at C14 from the DAC (MAX5135) and ADC (MAX11040)*        |
|            8 | N.C.    | Not connected                                                                                     |
|            9 | CS_AD   | ADC (MAX11040) CS connected to the FMC connector at C11*                                          |
|           10 | CS_DAC  | DAC (MAX5135) CS connected to the FMC connector at C22*                                           |
|           11 | SCLK    | SPI: SCLK connected to the FMC connector at C10 and going to the DAC (MAX5135) and ADC (MAX1100)* |
|           12 | N.C.    | Not connected                                                                                     |
|           13 | MISO    | SPI: MISO connected to the FMC connector at C15 and going to the DAC (MAX5135) and ADC (MAX1100)* |
|           14 | SCL     | I 2 C: SCL connected to the FMC connector at C30 and going to the ADC (MAX11612)*                 |
|           15 | +3V3USB | Not connected                                                                                     |
|           16 | SDA     | I 2 C: SDA connected to the FMC connector at C31 and going to the ADC (MAX11612)*                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAXSPCSPARTAN6+ Evaluation Kit

Figure 1a. MAXSPCSPARTAN6+ EV Kit Schematic (Sheet 1 of 4)

<!-- image -->

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAXSPCSPARTAN6+ Evaluation Kit

Figure 1b. MAXSPCSPARTAN6+ EV Kit Schematic (Sheet 2 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAXSPCSPARTAN6+ Evaluation Kit

Figure 1c. MAXSPCSPARTAN6+ EV Kit Schematic (Sheet 3 of 4)

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAXSPCSPARTAN6+ Evaluation Kit

Figure 1d. MAXSPCSPARTAN6+ EV Kit Schematic (Sheet 4 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAXSPCSPARTAN6+ Evaluation Kit

<!-- image -->

Figure 2. MAXSPCSPARTAN6+ Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAXSPCSPARTAN6+ Component Placement Guide-Solder Side

Figure 4. MAXSPCSPARTAN6+ PCB Layout-Component Side

<!-- image -->

Figure 5. MAXSPCSPARTAN6+ PCB Layout-Solder Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAXSPCSPARTAN6+ Evaluation Kit

Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

9