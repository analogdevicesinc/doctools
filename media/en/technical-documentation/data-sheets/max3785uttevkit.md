<!-- lastmod 2022-08-02 -->
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## \_\_\_\_\_\_\_ General Description

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The  MAX3785UTT  evaluation  board  and  kit  (EV  kit) simplifies  evaluation  of  the  MAX3785UTT  6.25  Gbps equalizer.    The  EV  kit  enables  testing  of  all  the  device functions. SMA connectors with 50 Ω controlled impedance to the MAX3785UTT are provided for all input and  output  ports  to  facilitate  connection  to  high-speed test equipment.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| C2,C3         |     2 | 0.1 µ F, 10V minimum, 10% Ceramic Capacitor (0402)         |
| C1            |     1 | 33 µ F Tantalum Capacitor +/-10% B CASE AVX TAJB336M010R   |
| L1            |     1 | 4.7 µ H Coilcraft 1008CT-040XJBC                           |
| J3-8          |     6 | SMA Connector EDGE MOUNT (TAB CONTACT)JOHNSON 142-0701-851 |
| J1-J2         |     2 | Test Point Digi-Key 5000K-ND                               |
| U1            |     1 | MAX3785UTT                                                 |
|               |     1 | MAX3785UTT REV A Evaluation Circuit Board                  |
|               |     1 | MAX3785UTT DATA SHEET                                      |

Features

- ♦ Fully Assembled and Tested
- ♦ Connectors for All High-Speed Inputs and Outputs
- ♦ Calibration test strip.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_ Ordering Information

| PART TEMP. RANGE IC PACKAGE                |
|--------------------------------------------|
| MAX3785UTTEVKIT -40 ° C to +85 ° C 16 TDFN |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| AVX        | 843-444-2863 | 843-626-3123 |
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Murata     | 415-964-6321 | 415-964-8165 |

Note:  Please  indicate  that  you  are  using  the  MAX3785 when ordering from these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX3785UTT Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start .

1. Connect a +1.8V power supply to J1 (VCC). Connect the power supply ground to J2.
2. Connect DC blocks or bias T's to the inputs IN+ and IN-. Then connect a differential signal between 400 and 1600 mVp-p to the inputs using 50 Ohm cables. If DC blocks are not used, then the high level for each input signal must be VCC.
3. Connect DC blocks or bias T's to the outputs OUT+ and OUT-. Then connect signals from the DC blocks to an oscilloscope with 50 Ohm input terminations.
4. At the signal source, start with a short and simple pattern such as a 2 7 -1 PRBS. The data rate can be from 1.0 Gbps to 6.4Gbps.
5. Evaluation: After the EVKit has been initially checked  out, evaluation can begin with a FR4 pc board. It is advisable to start with a board length of 20 inches and then progress to longer lengths. For data rates of 3.125Gbps and below, the part will equalize board lengths up to 40 inches. For data rates 6.4 Gbps and below the part will equalize board lengths up to 30 inches. When connecting the equalizer with the board, keep the cables from the board to the equalizer as short as possible.

WARNING!    The  SMA  connectors  are directly  connected  to  the  chip's  inputs and outputs. To avoid damage to laboratory equipment or device, always use DC blocks or Bias T's.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3785UTT Evaluation Kit

Figure 1. MAX3785UTT EV Kit Schematic.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3785UTT Evaluation Kit

<!-- image -->

Figure 2. MAX3785UTTA EV Kit Component Placement Guide - Component Side (2X)

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3785UTT Evaluation Kit

Figure 3.  MAX3785UTTA EV Kit PC Board Layout - Component Side (2X), layer 1.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3785UTT Evaluation Kit

<!-- image -->

## MAX3785UTT Evaluation Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7

## MAX3785UTT Evaluation Kit

Figure 6.  MAX3785UTTA EV Kit PC Board Layout - Bottom Side (2X), layer 4.

<!-- image -->

Maxim makes no warranty, representation or guarantee regarding the suitability of its products for any particular purpose, nor does Maxim assume any liability arising out of the application or use of any product or circuit and specifically disclaims any and all liability, including without limitation consequential or incidental damages. 'Typical' parameters can and do vary in different applications.  All operation parameters, including 'typicals' must be validated for each customer application by customer's technical experts.  Maxim products are not designed, intended or authorized for use as components in systems intended for surgical implant into the body, or other applications intended to support or sustain life, or for any other application in which the failure of the Maxim product could create a situation where personal injury or death may occur.

8 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_