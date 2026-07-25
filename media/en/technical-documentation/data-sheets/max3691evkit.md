<!-- lastmod 2022-08-02 -->
## General Description

The MAX3691 evaluation kit (EV kit) simplifies evaluation of  the  MAX3691 622Mbps, SDH/SONET 4:1 serializer. This EV kit requires a single +3.3V supply and includes the external components necessary to observe the PECL serial-data output on a 50 W input oscilloscope.

The serial-data output termination can be modified easily to  suit  other  logic  interfaces,  such  as  3.3V  PECL,  high impedance, or ECL inputs. To evaluate the MAX3691's basic functioning, connect the board directly to the outputs of an LVDS device (such as an overheadgeneration circuit) or to a signal generator.

## Component List

| DESIGNATION                                                                                              |   QTY | DESCRIPTION                                                           |
|----------------------------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------------|
| C1                                                                                                       |     1 | 33µF, 16V tantalum capacitor AVX TAJC336M016 or Sprague 293D336X0016D |
| C2                                                                                                       |     1 | 1µF ceramic capacitor                                                 |
| C3, C5, C7, C10, C12, C15, C18, C19, C20                                                                 |     9 | 0.1µF ceramic capacitors                                              |
| C4, C6, C8, C9, C11, C13, C14, C16                                                                       |     8 | 100pF ceramic capacitors                                              |
| JP1                                                                                                      |     1 | 2-pin header (0.1" centers)                                           |
| L1, L3, C17                                                                                              |     3 | 0 W resistors                                                         |
| L2, L4, L5                                                                                               |     3 | 56nH inductors Coilcraft 0805HS-560TKBC                               |
| R1                                                                                                       |     1 | 1.5 W , 1% resistor                                                   |
| R2, R6                                                                                                   |     2 | 24 W , 5% resistors                                                   |
| R3, R7                                                                                                   |     2 | 27 W , 5% resistors                                                   |
| R4, R8                                                                                                   |     2 | 130 W , 5% resistors                                                  |
| R5, R9                                                                                                   |     2 | 220 W , 5% resistors                                                  |
| R10                                                                                                      |     1 | 24.9k W , 1% resistor                                                 |
| RCLK+, RCLK-, PCLKI+, PCLKI-, PD0+, PD0-, PD1+, PD1-, PD2+, PD2-, PD3+, PD3-, SDO+, SDO-, PCLKO+, PCLKO- |    16 | SMA PC edge-mount connectors                                          |
| U1                                                                                                       |     1 | MAX3691ECJ 32-pin TQFP                                                |
| None                                                                                                     |     1 | MAX3691 data sheet                                                    |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Single +3.3V Supply
- ' Output Terminated for Interfacing with a 50 W Oscilloscope Input
- ' Fully Tested and Assembled

## Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX3691EVKIT-SO | -40°C to +85°C | Surface Mount |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 803-946-0690 | 803-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Sprague    | 603-224-1961 | 603-224-1430 |

Note: Please indicate that you are using the MAX3691 when contacting these component suppliers.

1

## MAX3691 Evaluation Kit

## Detailed Description

The MAX3691 evaluation kit (EV kit) operates from a single +3.3V supply and includes the external components necessary to observe the PECL serial-data output on a 50 W input oscilloscope.

Each MAX3691 LVDS input (PCLKI+, PCLKI-, RCLK+, RCLK-, PD\_+, and PD\_-) is internally terminated with a 100 W differential  input  resistance.  Ensure that LVDS devices driving these inputs are not redundantly terminated.

LVDS parallel-clock outputs (PCLKO+, PCLKO-) must be differentially terminated with 100 W . When terminating these outputs into 50 Ω loads, use AC coupling (see the section Connecting Parallel-Clock LVDS Outputs to 50 W Input Oscilloscopes).

The EV kit serial-data output (SDO+, SDO-) termination network allows the outputs to be connected directly to a high-speed oscilloscope's 50 W input. This termination provides the serial data outputs with a Thevenin equivalent of  50 W to  VCC -  2V  when connected to a 50 W load. This provides a 2-times output signal attenuation. If only one of  the  serial  data  outputs is connected to an oscilloscope, ensure that the other is still properly terminated. Keep in mind that the resistor networks at each output provide proper termination only when they are terminated through 50 W to ground. See the Alternative PECL Output Termination section for other logic interfaces.

Table 1.  Jumpers and Test Points

| NAME    | TYPE   | DESCRIPTION                                     | NORMAL POSITION   |
|---------|--------|-------------------------------------------------|-------------------|
| JP1     | 2 pin  | Disables the loop filter                        | Open              |
| JP3-JP7 | 2 pin  | Jumper locations (can be cut open if necessary) | Shorted           |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Applications Information

Alternative PECL Output Termination Alternative PECL output termination methods can be used for different logic interfaces as long as they provide a DC Thevenin equivalent of 50 W to  VCC -  2V. For example, to interface SDO+ with a PECL or highimpedance input, short resistors R2 and R3, and replace R5 with an 82 W resistor. To interface SDO+ with ECL input test equipment, which is internally terminated with 50 W to -2V, take the following steps:

- 1) Remove R4 and R5.
- 2) Short R2 and R3.
- 3) Place a bias-T in series between the MAX3691 and the test  equipment. Connect the bias-T's RF and DC terminals to the SDO+ output and the RF terminal  to  the  test  equipment's  ECL  input.  Then  connect the DC terminal to a VCC - 2V termination voltage through a 50 W resistor.

## Connecting Parallel-Clock LVDS Outputs to 50 W Input Oscilloscopes

To monitor the parallel-clock LVDS signals (PCLK0+, PCLK0-) on a 50 W input oscilloscope, place a capacitor or DC block in series with each output and the instrument input. Do not connect MAX3691 outputs directly to 50 W inputs or terminations to ground. Choose a coupling capacitor (0.1µF recommended) large enough in  value  to  prevent pattern-dependent distortion of the output signal.

Figure 1.  MAX3691 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3691 Evaluation Kit

Figure 2.  MAX3691 EV Kit Component Placement GuideTop Silk Screen

<!-- image -->

Figure 3.  MAX3691 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 4.  MAX3691 EV Kit PC Board Layout-Solder Side

<!-- image -->

<!-- image -->

Figure 5.  MAX3691 EV Kit PC Board Layout-GND Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3691 Evaluation Kit

Figure 6.  MAX3691 EV Kit PC Board Layout-Power Plane

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600