<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1200/MAX1201/MAX1205 Evaluation Kits

## General Description

The MAX1200/MAX1201/MAX1205 evaluation kits (EV kits)  are  assembled and tested PC boards that include the basic components necessary to drive either the 16-bit MAX1200 or 14-bit MAX1201/MAX1205 analog-to-digital converters (ADCs). Connectors for power supplies, analog inputs, and digital outputs simplify connections to the device. The PC board layouts are optimized for best dynamic performance. Each EV kit is fully assembled and tested, and includes a MAX1200, MAX1201, or MAX1205 (as requested) that is soldered and ready to test.

| DESIGNATION                                                                                                                               |   QTY | DESCRIPTION                                   |
|-------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------------------------------------------|
| C1, C3, C5, C7, C11                                                                                                                       |     5 | 22µF, 16V tantalum capacitors AVX TAJD226K016 |
| C2, C4, C6, C8, C9, C10, C12, C14-C17, C20, C21, C22, C25, C26, C30, C31, C35, C36, C37, C40, C41, C42, C44, C45, C48, C49, C50, C57, C58 |    31 | 0.1µF, 25V ceramic capacitors                 |
| C13, C18                                                                                                                                  |     2 | 10µF, 16V tantalum capacitors AVX TAJB106K006 |
| C19, C24                                                                                                                                  |     2 | 0.47µF, 25V ceramic capacitors                |
| C38, C39                                                                                                                                  |     2 | 100pF, 25V ceramic capacitors                 |
| C51                                                                                                                                       |     1 | 390pF, 25V ceramic capacitor                  |
| FB1-FB5                                                                                                                                   |     7 | Ferrite beads Panasonic ECE-CL3216U           |
| FB6, FB7                                                                                                                                  |     2 | Panasonic AEM-MLB-805 G601 P                  |
| R1                                                                                                                                        |     1 | 10k Ω potentiometer                           |
| R2, R3, R16                                                                                                                               |     3 | 5k Ω , 5% resistors                           |
| R4                                                                                                                                        |     1 | 100 Ω , 5% resistor                           |
| R5, R6, R43                                                                                                                               |     3 | 10 Ω , 5% resistors                           |
| R7, R30, R35, R42                                                                                                                         |     4 | 33 Ω , 5% resistors                           |

## Features

- ' Accepts Single-Ended or Differential Inputs
- ' Accepts Sine or Square Clock Input
- ' Proven PC Board Layout
- ' Convenient Test Points Provided On-Board
- ' Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART               | TEMP. RANGE   | IC PACKAGE   |
|--------------------|---------------|--------------|
| MAX1200 EVKIT-MQFP | 0°C to +70°C  | 44 MQFP      |
| MAX1201 EVKIT-MQFP | 0°C to +70°C  | 44 MQFP      |
| MAX1205 EVKIT-MQFP | 0°C to +70°C  | 44 MQFP      |

## Component List

| DESIGNATION                                            |   QTY | DESCRIPTION                 |
|--------------------------------------------------------|-------|-----------------------------|
| R17, R19, R21                                          |     3 | 10k Ω , 5% resistors        |
| R14, R15, R23-R26                                      |     6 | 1k Ω , 5% resistors         |
| R27                                                    |     1 | 1.21k Ω , 1% resistor       |
| R28, R29, R31- R34, R36, R37                           |     8 | 976 Ω , 1% resistors        |
| R39                                                    |     1 | 200 Ω , 1% resistor         |
| R38                                                    |     1 | 54.9 Ω , 1% resistor        |
| CLK_SINE, CLK_SQ, IN, IN+AP, IN-AP, IN_XFR, REF+, REF- |     8 | SMA connectors              |
| JU1, JU2                                               |     2 | 3-pin headers               |
| J1, J2, J5, J7, J10, JU3, JU4                          |     7 | 2-pin headers               |
| J3                                                     |     1 | 2 x 20 header               |
| None                                                   |     7 | Shunts                      |
| +5V_A, +5V_D, +5V_DR, +7V, -3V, AGND, DGND             |     7 | Test points                 |
| SW1                                                    |     1 | Momentary pushbutton switch |
| U1, U2, U3                                             |     3 | 74HC541 three-state buffers |

Component List continued on next page.

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX1200/MAX1201/MAX1205 Evaluation Kits

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| U6            |     1 | Maxim MAX961EUA comparator                                              |
| U7, U8, U9    |     3 | Maxim MAX410CSA op amps                                                 |
| U10, U11      |     2 | Maxim MAX4108ESA op amps                                                |
| U12           |     1 | Maxim MAX1200CMH, MAX1201CMH, or MAX1205CMH                             |
| None          |     1 | PC board                                                                |
| T1            |     0 | Balun transformer Coiltronics CTX03-13675-X330FL97 Rev A (not supplied) |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

## Recommended Equipment

You will need the following equipment before you begin:

- A triple-output power supply (-3V, +5V, and +7V)
- A signal source, such as an HP8662A RF signal generator
- Two stable precision voltage references
- A  low-phase-noise  clock  source,  such  as  an HP8662A pulse generator, filtered by a 10MHz lowpass filter (Mini Circuits SLP-10.7).
- A logic analyzer, such as an HP16500B, to collect the data

The EV kit is shipped fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect the power supplies to the -3V, +7V, +5V, AGND, and DGND pads. For best results, use separate  analog and digital leads, connecting AGND to DGND close to the power supply's common terminal.
- 2) Connect a signal source to the IN or IN+AP/IN-AP inputs. If  using  differential  inputs,  common-mode voltage should be halfway between REF+ and REF-.
- 3) Connect the voltage references to the REF+ and REF- inputs.
- 4) Connect a sine-wave clock source to the CLK\_SINE input. If using a square wave instead of a sine wave, connect it to the CLK\_SQ input instead.
- 5) Turn on the logic analyzer and connect it to header J3. Configure it to receive data on the rising edge of the DAV strobe signal.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 6) Turn on the EV kit's power supplies.
- 7) Press momentary switch SW1 to trigger self-calibration.
- 8) Turn on the input signal source.
- 9) Collect data using the logic analyzer.

## Hardware Description

The MAX120x EV kit accepts a differential input signal between IN+AP and IN-AP, or it can accept a singleended (i.e., ground-referenced) input signal at IN. The PC board can also accommodate a Balun transformer at  T1;  however, transformer-coupling the input may degrade signal performance.

U12, the MAX1200, is a 16-bit, 1Msps ADC with parallel two's complement data outputs. The MAX1201/ MAX1205 are 14-bit versions of the MAX1200.

Data output signals are buffered by U1, U2, and U3 and provided at header J3 for evaluation.

## Reference Input

The MAX410 op amps designated as U8 and U9 on the EV board buffer the REF+ and REF- inputs.

The MAX410 op amp designated as U7 on the EV board buffers resistor-dividers R2/R1/R3, providing a commonmode voltage level halfway between REF+ and REF-. Trim pot R1 adjusts the common-mode voltage.

The op amps have a maximum total supply-voltage rating of 10V. The supply rails have been set to VSS = -3V and VCC = +7V to keep the signals well within the common-mode range of these op amps.

## MAX1200/MAX1201/MAX1205 Evaluation Kits

## Table 1.  Jumper Functions

| JUMPER   | STATE   | FUNCTION                                                                                                                     |
|----------|---------|------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2     | Apply a single-ended input at the 'IN' SMA connector.                                                                        |
| JU1      | 2-3*    | Apply a differential input between the 'IN+AP' and 'IN-AP' SMA connectors.                                                   |
| JU2      | 1-2     | Apply a single-ended input at the 'IN' SMA connector.                                                                        |
| JU2      | 2-3*    | Apply a differential input between the 'IN+AP' and 'IN-AP' SMA connectors.                                                   |
| JU3      | Open*   | Normal operation with no balun transformer.                                                                                  |
| JU3      | Closed  | Install balun transformer T1 and apply an input signal at the 'IN_XFR' connector. Not supported as shipped from the factory. |
| JU4      | Open*   | Normal operation with no balun transformer.                                                                                  |
| JU4      | Closed  | Install balun transformer T1 and apply an input signal at the 'IN_XFR' connector. Not supported as shipped from the factory. |
| J1       | Open    | 14-bit MAX1201/MAX1205                                                                                                       |
| J1       | Closed  | 16-bit MAX1200                                                                                                               |
| J2       | Open    | 14-bit MAX1201/MAX1205                                                                                                       |
| J2       | Closed  | 16-bit MAX1200                                                                                                               |
| J5       | Open    | Enable remote REF+ force/sense.                                                                                              |
| J5       | Closed  | Disable REF+ force/sense.                                                                                                    |
| J7       | Open    | Enable remote REF- force/sense.                                                                                              |
| J7       | Closed  | Disable REF- force/sense.                                                                                                    |
| J10      | Open    | Apply a square-wave clock at the 'CLK_SQ' SMA connector.                                                                     |
| J10      | Closed* | Apply a sinusoidal clock at the 'CLK_SINE' SMA connector.                                                                    |

## Table 2.  I/O Connectors

| LABEL    | TYPE          | DIRECTION   | DESCRIPTION                                                                                      |
|----------|---------------|-------------|--------------------------------------------------------------------------------------------------|
| REF+     | SMA           | Input       | Reference voltage input, positive connection                                                     |
| REF-     | SMA           | Input       | Reference voltage input, negative connection                                                     |
| IN+AP    | SMA           | Input       | Differential signal input, positive connection                                                   |
| IN-AP    | SMA           | Input       | Differential signal input, negative connection                                                   |
| IN       | SMA           | Input       | Single-ended signal input                                                                        |
| IN_XFR   | SMA           | Input       | Signal input to optional balun transformer T1. Not supported as shipped from the factory.        |
| CLK_SINE | SMA           | Input       | Clock input, sine wave                                                                           |
| CLK_SQ   | SMA           | Input       | Clock input, square wave                                                                         |
| J3       | 2 x 20 Header | Output      | Two's complement data outputs: MAX1200: D0-D15, D15 = MSB; MAX1201/MAX1205: D0-D13, D13 = MSB.   |
| -3V      | Solder Pad    | Power Input | Negative power-supply rail for op amps                                                           |
| +7V      | Solder Pad    | Power Input | Positive power-supply rail for op amps                                                           |
| +5V_A    | Solder Pad    | Power Input | Positive power supply for analog circuitry                                                       |
| AGND     | Solder Pad    | Power Input | Analog ground return                                                                             |
| DGND     | Solder Pad    | Power Input | Digital ground return                                                                            |
| +5V_DR   | Solder Pad    | Power Input | Positive power supply for digital outputs DOR, D0-D15. The +5V_DR voltage must not exceed +5V_D. |
| +5V_D    | Solder Pad    | Power Input | Positive power supply for digital circuitry                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX1200/MAX1201/MAX1205 EV Kits Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX1200/MAX1201/MAX1205 EV Kits Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1200/MAX1201/MAX1205 Evaluation Kits

Figure 1.  MAX1200/MAX1201/MAX1205 EV Kits Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1200/MAX1201/MAX1205 Evaluation Kits

Figure 1.  MAX1200/MAX1201/MAX1205 EV Kits Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1200/MAX1201/MAX1205 Evaluation Kits

Figure 2.  MAX1200/MAX1201/MAX1205 EV Kits Component Placement Guide-Component Side

<!-- image -->

Figure 3.  MAX1200/MAX1201/MAX1205 EV Kits Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4.  MAX1200/MAX1201/MAX1205 EV Kits PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX1200/MAX1201/MAX1205 EV Kits PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1200/MAX1201/MAX1205 Evaluation Kits

Figure 6.  MAX1200/MAX1201/MAX1205 EV Kits PC Board Layout-Power Layer

<!-- image -->

Figure 7.  MAX1200/MAX1201/MAX1205 EV Kits PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1200/MAX1201/MAX1205 Evaluation Kits

## NOTES

11

## MAX1200/MAX1201/MAX1205 Evaluation Kits

NOTES

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

12

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1998 Maxim Integrated Products

© 1998 Maxim Integrated Products