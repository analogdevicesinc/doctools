<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX3681 evaluation kit (EV kit) simplifies evaluation of the MAX3681 622Mbps, SDH/SONET 1:4 deserializer.  The  EV  kit  requires  only  a  single  +3.3V  supply and includes all the external components necessary to interface with 3.3V PECL and LVDS logic. The board can be connected directly to the output of a clock-anddata-recovery circuit (such as the MAX3675) and to the input of an LVDS device (such as an overhead termination circuit). A signal generator or stimulus system can be  used  with  an  oscilloscope,  to  evaluate  the MAX3681's basic functionality.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX3681EVKIT-SO | -40°C to +85°C | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION    |   QTY | DESCRIPTION                                          |
|----------------|-------|------------------------------------------------------|
| C1-C4, C7      |     5 | 0.1µF ceramic capacitors                             |
| C5             |     1 | 33µF, 6.3V tantalum capacitor Sprague 293D336X06R3C2 |
| C6             |     1 | 2.2µF ceramic capacitor                              |
| C8-C11         |     4 | 100pF ceramic capacitors                             |
| J1-J16         |    16 | SMA connectors (PC edge mount)                       |
| L1             |     1 | 56nH inductor Coilcraft 0805CS-560                   |
| R1, R3, R5, R7 |     4 | 130 Ω , 5% resistors                                 |
| R2, R4, R6, R8 |     4 | 82 Ω , 5% resistors                                  |
| R9-R13         |     5 | 100 Ω , 5%resistors                                  |
| U1             |     1 | MAX3681EAG                                           |
| +3.3V, GND     |     2 | 2-pin headers                                        |
| None           |     1 | MAX3681 data sheet                                   |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| Coilcraft  | (847) 639-6400 | (847) 639-1469 |
| Sprague    | (603) 224-1961 | (603) 224-1430 |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Single +3.3V Supply
- ' Inputs and Outputs Terminated for Interfacing with 3.3V PECL and LVDS Logic
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX3681 EV kit simplifies evaluation of the MAX3681. The EV kit operates from a single +3.3V supply  and includes all the external components necessary to interface with 3.3V PECL and LVDS logic.

Each PECL input (SCLK+, SCLK-, SD+, SD-) is terminated on the EV board with the Thevenin equivalent of 50 Ω to (VCC - 2V). These inputs can be driven directly by the output of any 3.3V PECL device, such as a clock-and-data-recovery circuit (e.g., the MAX3675).

All LVDS outputs (PCLK+, PCLK-, PD\_+, PD\_-) are differentially terminated with 100 Ω resistors between complementary outputs. Each output can directly drive an LVDS input or a high-impedance input oscilloscope (see the section Connecting LVDS Outputs to 50 Ω Input Oscilloscopes). When driving an LVDS input that already includes 100 Ω differential  termination,  remove the termination resistor corresponding to the appropriate LVDS output.

The synchronization inputs (SYNC+, SYNC-) are internally  terminated LVDS inputs with 100 Ω differential input resistance. Ensure that LVDS devices driving these inputs are not redundantly terminated.

All  signal  inputs  and  outputs  use  coupled  50 Ω transmission lines. All input signal lines are of equal length to  minimize propagation-delay skew. Likewise, all output signal lines are of equal length.

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Connecting LVDS Outputs to 50 Ω Input Oscilloscopes

To monitor an LVDS signal on a 50 Ω input oscilloscope, remove the differential load resistor between the complementary outputs and AC couple each output to an oscilloscope input. For example, to observe the PD0 signal on a 50 Ω input instrument, remove resistor R12 from the EV board and place a capacitor or DC block in series with each output (PD0+ or PD0-) and the instrument input. Do not connect MAX3681 outputs directly to 50 Ω inputs or terminations to ground. Choose a coupling capacitor large enough in value to prevent pattern-dependent distortion of the output signal.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800

<!-- image -->

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2.  MAX3681 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX3681 Evaluation Kit

Figure 3.  MAX3681 EV Kit PC Board Layout-Component Side

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 4.  MAX3681 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3681 Evaluation Kit

Figure 5.  MAX3681 EV Kit PC Board Layout-Power Plane

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3681 Evaluation Kit

Figure 6.  MAX3681 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3681 Evaluation Kit

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600