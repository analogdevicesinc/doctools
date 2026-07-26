<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX19541/MAX19542 Evaluation Kits

## General Description

The MAX19541/MAX19542 evaluation kits (EV kits) are fully  assembled and tested printed-circuit boards (PCBs) that contain all the components necessary to evaluate the performance of the MAX19541 (125Msps) and MAX19541/MAX19542 (170Msps) 12-bit analog-todigital  converters (ADCs). The MAX19541/MAX19542 accept differential analog inputs; however, the EV kits generate this signal from a user-provided, single-ended signal source. The digital outputs produced by the ADC are CMOS compatible and can be easily captured with a user-provided, high-speed logic analyzer or dataacquisition system. The EV kits operate from 1.8V and 3.3V power supplies and include circuitry that generates a clock signal from a user-provided AC signal.

| DESIGNATION        |   QTY | DESCRIPTION                                                        |
|--------------------|-------|--------------------------------------------------------------------|
| C1, C2, C3, C5-C27 |    26 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K   |
| C4                 |     0 | Not installed, ceramic capacitor (0402)                            |
| C28, C29, C30      |     3 | 0.22µF ±10%, 6.3V X5R ceramic capacitors (0402) TDK C1005X5R0J224K |
| C31-C34            |     4 | 47µF ±10%, 10V tantalum capacitors (C case) AVX TAJC476K010        |
| C35-C38            |     4 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J106M   |
| C39-C42            |     4 | 1.0µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K   |
| C43                |     1 | 0.01µF ±20%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E103M   |
| C44, C45           |     0 | Not installed, shorted by PC trace (0603)                          |

## Component List

| INP, CLK, RESET                 |   3 | SMA PC board vertical-mount connectors                                         |
|---------------------------------|-----|--------------------------------------------------------------------------------|
| INN                             |   0 | Not installed, vertical-mount SMA connector                                    |
| J1, J2                          |   2 | Dual-row 40-pin headers                                                        |
| JU1-JU6, JU8                    |   7 | 3-pin headers                                                                  |
| JU7                             |   1 | Dual-row 8-pin header                                                          |
| R1, R2, R11, R12, R14, R15, R22 |   0 | Not installed, resistors (0603)                                                |
| R3-R7                           |   5 | 49.9 Ω ±1% resistors (0603)                                                    |
| R8, R9                          |   2 | 510 Ω ±5% resistors (0603)                                                     |
| R10, R13                        |   2 | 0 Ω resistors (0603)                                                           |
| R16, R17                        |   2 | 24.9 Ω ±0.1% resistors (0603) IRC PFC-W0603RLF-02-24R9-B Panasonic ERA3HB24R9V |
| R18, R19                        |   2 | 24.9 Ω ±1% resistors (0603)                                                    |
| R20                             |   1 | 100k Ω , 12-turn, 1/4in potentiometer                                          |
| R21                             |   1 | 13k Ω ±1% resistor (0603)                                                      |
| R23-R26                         |   0 | Not installed, shorted by PC trace (0603)                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## Features

- ♦ Up to 170Msps Sampling Rate Using the MAX19542
- ♦ Up to 125Msps Sampling Rate Using the MAX19541
- ♦ Low-Voltage and Low-Power Operation
- ♦ Fully Differential Input Signal Configuration
- ♦ On-Board Output Buffers
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TEMP RANGE    | IC PACKAGE   |
|-----------------|---------------|--------------|
| MAX19541EVKIT + | 0°C to +70°C* | 68 QFN-EP**  |
| MAX19542EVKIT + | 0°C to +70°C* | 68 QFN-EP**  |

## MAX19541/MAX19542 Evaluation Kits

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| U3, U4        |     2 | Low-voltage, 16-bit flip-flops (48-pin TSSOP) Pericom PI74ALVTC16374AE |
| U5            |     1 | Dual two-input exclusive-OR gate (8-pin VSSOP) TI SN74AUC2G86DCURE4    |
| -             |     1 | PCB: MAX19541/MAX19542 Evaluation Kit+                                 |

## EV Kit-Specific Component list

| EV KIT PART NUMBER   | REFERENCE DESIGNATOR   | DESCRIPTION                                       |
|----------------------|------------------------|---------------------------------------------------|
| MAX19541EVKIT+       | U1                     | MAX19541EGK+ (68-pin QFNwith EP, 10mmx10mmx0.9mm) |
| MAX19542EVKIT+       | U1                     | MAX19542EGK+ (68-pin QFNwith EP, 10mmx10mmx0.9mm) |

## Component Suppliers

| SUPPLIER        | PHONE        | FAX          | WEBSITE               |
|-----------------|--------------|--------------|-----------------------|
| AVX Corp.       | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| IRC, Inc.       | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Panasonic Corp. | 714-373-7183 | 714-373-7939 | www.panasonic.com     |
| TDK Corp.       | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX19541/MAX19542 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- DC power supplies:
- Signal generator with low phase noise for clock input signal (e.g., HP 8662A, HP 8644B)
- Signal generator for analog input signal (e.g., HP 8662A, HP 8644B)
- Logic analyzer or data-acquisition system (e.g., HP 16500C with high-speed state card such as the HP 16517A
- Digital voltmeter

| Analog   | (AVCC)   | 1.8V, 1A    |
|----------|----------|-------------|
| Clock    | (CVCC)   | 3.3V, 500mA |
| Buffers  | (BVCC)   | 1.8V, 500mA |
| Digital  | (OVCC)   | 1.8V, 1A    |

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| RA1-RA4       |     4 | 100 Ω ±5% resistor arrays (1206) Panasonic EXB-2HV-101J                  |
| RA5-RA8       |     4 | 22 Ω ±5% resistor arrays (1206) Panasonic EXB-2HV-220J                   |
| T1, T2        |     2 | 1:1 800MHz RF transformers Mini-Circuits ADT1-1WT+                       |
| TP1, TP2, TP3 |     3 | Test points (black)                                                      |
| U1            |     1 | See the EV Kit-Specific Component List                                   |
| U2            |     1 | 3.3V ECL differential receiver (8-pin SO) ON Semiconductor MC100LVEL16DG |

## Procedure

The MAX19541/MAX19542 EV kits are fully assembled and tested surface-mount boards. Follow the steps below for  board operation. Caution: Do not turn on power supplies or enable signal generators until all connections are completed:

- 1) Verify that shunts are installed in the following locations:
- a) JU1 (1-2)-Divide-by-two disabled
- b) JU2 (2-3)-Parallel mode selected

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19541/MAX19542 Evaluation Kits

- c) JU3 (2-3)-Demux parallel mode selected if JU2 is pulled high
- d) JU4 (2-3)-Two's-complement output selected
- e) JU5 (1-2)-Noninverted DCLKP selected
- f) JU6 (2-3)-Noninverted DCLKN selected
- g) JU7 (3-4)-Internal reference enabled
- 2) Connect the clock signal generator to the SMA connector labeled CLK.
- 3) Connect the analog input signal generator to the SMA connector labeled INP.
- 4) Connect the logic analyzer's high-speed state card probe connectors to header J1 (CMOS-compatible signals); see Table 5 for header connections.
- 5) Connect a 1.8V, 1A power supply to AVCC. Connect the ground terminal of this supply to the GND pad closest to the AVCC pad.
- 6) Connect a 3.3V, 500mA power supply to CVCC. Connect the ground terminal of this supply to the GND pad closest to the CVCC pad.
- 7) Connect a 1.8V, 500mA power supply to BVCC. Connect the ground terminal of this supply to the GND pad closest to the BVCC pad.
- 8) Connect a 1.8V, 1A power supply to OVCC. Connect the ground terminal of this supply to the GND pad closest to the OVCC pad.
- 9) Turn on all the power supplies.
- 10) Enable the signal generators. Set the clock signal generator to output a 170MHz signal, with a 2.4VP-P amplitude. Set the analog input signal generato to output the desired frequency with an amplitude ≤ 2VP-P. For coherent sampling, the signal generators should be synchronized.
- 11) Enable the logic analyzer.
- 12) Collect data using the logic analyzer.

## Detailed Description

The MAX19541/MAX19542 EV kits are fully assembled and tested PCBs that contain all the components necessary to evaluate the performance of the MAX19541/MAX19542. The MAX19541/MAX19542 can be evaluated with a maximum clock frequency (fCLK) of 170MHz.

The MAX19541/MAX19542 accept differential inputs. Applications that only have a single-ended signal source available can use the on-board transformer (T2) to convert a single-ended signal to a differential signal.

Output buffers (U3 and U4) buffer the digital output signals of the MAX19541/MAX19542 to higher capacitive load signals that can be captured by a wide variety of logic analyzers. The buffered CMOS outputs can be accessed at headers J1 and J2.

<!-- image -->

Each EV kit is designed as a four-layer PCB to optimize the performance of the MAX19541/MAX19542. Separate analog, digital, clock, and buffer power planes minimize noise coupling between analog and digital signals; 50 Ω coplanar transmission lines are used for analog and clock inputs. The trace lengths of the 50 Ω CMOS lines are matched to within a few thousandths of an inch to minimize layout-dependent delays.

## Power Supplies

The MAX19541/MAX19542 EV kits require separate analog, digital, clock, and buffer power supplies for best performance. Two separated 1.8V power supplies are used to power the analog and digital portions of the MAX19541/MAX19542. The on-board clock circuitry is powered by another 3.3V power supply, and a 1.8V power supply is used to power the output buffers (U3 and U4) on the EV kits.

## Clock

The MAX19541/MAX19542 require a differential clock signal. However, if only a single-ended clock signal source is available, the EV kit's on-board level translator  helps to convert a single-ended clock to the required differential signal. An on-board clock-shaping circuit generates a differential clock signal from an ACcoupled sine-wave signal applied to the clock input SMA connector CLK. The input signal amplitude should not exceed 2.6VP-P. The frequency of the clock signal should not exceed 170MHz. The frequency of the sinusoidal input clock signal determines the sampling frequency (fCLK) of the ADC. A differential line receiver (U2) processes the input signal to generate the required clock signal.

## Clock Divider

The MAX19541/MAX19542 feature an internal divideby-two clock divider. Use jumper JU1 to enable/disable this feature. See Table 1 for shunt positions.

## Table 1. Clock-Divider Shunt Settings (JU1)

| SHUNT POSITION   | MAX19541/MAX19542 CLKDIV PIN   | DESCRIPTION               |
|------------------|--------------------------------|---------------------------|
| 1-2*             | Connected to AVCC              | Clock signal divided by 1 |
| 2-3              | Connected to GND               | Clock signal divided by 2 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19541/MAX19542 Evaluation Kits

## Input Signal

The MAX19541/MAX19542 accept differential analog input  signals.  However, the EV kits only require a single-ended analog input signal with an amplitude of less than 2VP-P provided by the user. An on-board transformer then takes the single-ended analog input and generates a differential analog signal, which is applied to the ADC's differential input pins.

## Optional Input Transformer

The MAX19541/MAX19542 EV kits use a second transformer to enhance THD and SFDR performance at high input frequencies (&gt;100MHz). This transformer helps to reduce the increase of even-order harmonics at high frequencies. To use only the primary transformer, follow the directions below:

- 1) Remove R10 and R13.
- 2) Install a 0.1µF capacitor on C4.
- 3) Install a 0 Ω resistor at R22.
- 4) Install an SMA connector on INN.
- 5) Connect the analog signal source to INN instead of INP.

## Table 2. Reference Shunt Settings (JU7)

| SHUNT POSITION   | DESCRIPTION                                                                        |
|------------------|------------------------------------------------------------------------------------|
| 1-2              | Internal Reference Disabled. Apply an external reference voltage to the REFIO pad. |
| 3-4*             | Internal Reference Enabled. REFIO is the output of the internal reference.         |
| 5-6              | Increases FSR through trim potentiometer R20.                                      |
| 7-8              | Decreases FSR through trim potentiometer R20.                                      |

* Default position.

Table 3. Output-Mode Shunt Settings (JU2 and JU3)

| JU2 SHUNT POSITION   | DEMUX PIN          | JU3 SHUNT POSITION   | ITL PIN            | OUTPUT MODE            | OUTPUT PORT   |
|----------------------|--------------------|----------------------|--------------------|------------------------|---------------|
| 2-3                  | Connected to GND   | -                    | -                  | Parallel mode          | Port A        |
| 1-2                  | Connected to AV CC | 2-3                  | Connected to GND   | Demux parallel mode    | Ports A and B |
| 1-2                  | Connected to AV CC | 1-2                  | Connected to AV CC | Demux interleaved mode | Ports A and B |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Reference Voltage

There are two methods to set the full-scale range of the MAX19541/MAX19542. Both EV kits can be configured to use the MAX19541/MAX19542's internal reference, or a stable, low-noise, external reference can be applied to the REFIO pad. Jumper JU7 controls which reference source is used. See Table 2 for shunt settings.

## Output Mode

The MAX19541/MAX19541/MAX19542 feature three modes of operation: parallel mode, demux parallel mode, and demux interleaved mode. In each mode of operation, the digital data is output in a different format and is controlled by the ADC's DEMUX and ITL pins. The EV kits incorporate jumpers JU2 and JU3 to control the DEMUX and ITL pins, respectively. See Table 3 for shunt settings.

## MAX19541/MAX19542 Evaluation Kits

## Output Format

The digital output coding can be chosen to be either in two's complement or straight offset-binary format by configuring jumper JU4. See Table 4 for shunt settings.

## Table 4. Output-Format Shunt Settings (JU4)

| SHUNT POSITION   | T /B PIN           | DESCRIPTION                                          |
|------------------|--------------------|------------------------------------------------------|
| 1-2              | Connected to AV CC | Digital data appears in straight offset-binary code. |
| 2-3*             | Connected to GND   | Digital data appears in two's-complement code.       |

## Table 5. Output Bit Locations (J1 and J2)

| PORT A BIT   | BUFFERED OUTPUT   | LABEL NAME   | PORT B BIT   | BUFFERED OUTPUT   | LABEL NAME   | DESCRIPTION         |
|--------------|-------------------|--------------|--------------|-------------------|--------------|---------------------|
| ORA          | J1-35             | BORA         | ORB          | J2-35             | BORB         | Overrange bit       |
| DA11         | J1-31             | BDA11        | DB11         | J2-31             | BDB11        | Bit 11 (MSB)        |
| DA10         | J1-29             | BDA10        | DB10         | J2-29             | BDB10        | Bits 10-1           |
| DA9          | J1-27             | BDA9         | DB9          | J2-27             | BDB9         | Bits 10-1           |
| DA8          | J1-25             | BDA8         | DB9          | J2-25             | BDB8         | Bits 10-1           |
| DA7          | J1-23             | BDA7         | DB7          | J2-23             | BDB7         | Bits 10-1           |
| DA6          | J1-21             | BDA6         | DB6          | J2-21             | BDB6         | Bits 10-1           |
| DA5          | J1-19             | BDA5         | DB5          | J2-19             | BDB5         | Bits 10-1           |
| DA4          | J1-17             | BDA4         | DB4          | J2-17             | BDB4         | Bits 10-1           |
| DA3          | J1-15             | BDA3         | DB3          | J2-15             | BDB3         | Bits 10-1           |
| DA2          | J1-13             | BDA2         | DB2          | J2-13             | BDB2         | Bits 10-1           |
| DA1          | J1-11             | BDA1         | DB1          | J2-11             | BDB1         | Bits 10-1           |
| DA0          | J1-9              | BDA0         | DB0          | J2-9              | BDB0         | Bit 0 (LSB)         |
| DCLKP        | J1-3              | CLKA         | DCLKN        | J2-3              | CLKB         | Clock output signal |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Output Bit Locations

The buffered digital outputs of the ADC are connected to  two  40-pin  headers (J1 and J2). PCB trace lengths are matched to minimize output skew and improve performance of the device. The buffers are able to drive large capacitive loads, which may be present at the logic analyzer connection. See Table 5 for headers J1 and J2 bit locations.

## MAX19541/MAX19542 Evaluation Kits

Figure 1a. MAX19541/MAX19542 EV Kits Schematic (Sheet 1 of 3)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19541/MAX19542 Evaluation Kits

<!-- image -->

Figure 1b. MAX19541/MAX19542 EV Kits Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19541/MAX19542 Evaluation Kits

Figure 1c. MAX19541/MAX19542 EV Kits Schematic (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19541/MAX19542 Evaluation Kits

<!-- image -->

Figure 2. MAX19541/MAX19542 EV Kits Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19541/MAX19542 Evaluation Kits

Figure 3. MAX19541/MAX19542 EV Kits PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19541/MAX19542 Evaluation Kits

Figure 4. MAX19541/MAX19542 EV Kits PCB Layout-Ground Plane (Inner Layer 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19541/MAX19542 Evaluation Kits

Figure 5. MAX19541/MAX19542 EV Kits PCB Layout-Power Planes (Inner Layer 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX19541/MAX19542 Evaluation Kits

<!-- image -->

Figure 6. MAX19541/MAX19542 EV Kits PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX19541/MAX19542 Evaluation Kits

Figure 7. MAX19541/MAX19542 EV Kits Component Placement Guide-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: Title Change-all pages, 1-13

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600