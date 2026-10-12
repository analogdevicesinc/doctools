<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX3885 evaluation kit (EV kit) simplifies evaluation  of  the  MAX3885 2.488Gbps, SDH/SONET 1:16 deserializer. The EV kit requires only a single +3.3V supply and includes all the external components necessary to interface with 3.3V PECL and LVDS logic. The board can be connected directly to the output of a clock-and-data-recovery circuit (such as the MAX3875) and to the input of an LVDS device (such as an overhead termination circuit). A signal generator or stimulus system can be used with an oscilloscope to evaluate the MAX3885's basic functionality.

## Component Suppliers

| SUPPLIER       | PHONE        | WEBSITE           |
|----------------|--------------|-------------------|
| Coilcraft      | 847-639-6400 | www.coilcraft.com |
| Vishay Sprague | 603-224-1961 | www.vishay.com    |

Note: Please indicate that you are using the MAX3885 when contacting these component suppliers.

| DESIGNATION                                                                         |   QTY | DESCRIPTION                                              |
|-------------------------------------------------------------------------------------|-------|----------------------------------------------------------|
| C1, C3, C5, C7, C12-C21                                                             |    14 | 0.1μF, 25V min, 10% ceramic caps (0603)                  |
| C2, C4, C6, C8                                                                      |     0 | Not installed (shorted by PC board trace)                |
| C9                                                                                  |     1 | 33μF, 10V min, ±10% tantalum cap Sprague 293D336X0010C2  |
| C10                                                                                 |     1 | 2.2μF, 10V min, ±10% tantalum cap Sprague 293D225X0010A2 |
| C11                                                                                 |     0 | Not installed (open)                                     |
| R1, R3, R5, R7                                                                      |     4 | 133 , 1% resistors (0603)                                |
| R2, R4, R6, R8                                                                      |     4 | 86.6 , 1% resistors (0603)                               |
| R12, R15, R18, R21, R24, R27, R30, R33, R36, R39, R42, R45, R48, R53, R56, R59, R62 |    17 | 100 , 1% resistors (0603)                                |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ Single +3.3V Supply
- ♦ Inputs and Outputs Terminated for Interfacing with 3.3V PECL and LVDS Logic
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP RANGE         | IC PACKAGE   |
|--------------|--------------------|--------------|
| MAX3885EVKIT | -40 ° C to +85 ° C | 64 TQFP      |

## Component List

| DESIGNATION                                                                                                                                                   |   QTY | DESCRIPTION                            |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------------------------------|
| R13, R14, R16, R17, R19, R20, R22, R23, R25, R26, R28, R29, R31, R32, R34, R35, R37, R38, R40, R41, R43, R44, R46, R47, R49-R52, R54, R55, R57, R58, R60, R61 |     0 | Not installed                          |
| J1-J6                                                                                                                                                         |     6 | SMA connectors (PC mount)              |
| J7-J40                                                                                                                                                        |    34 | SMB connectors (PC mount)              |
| L1                                                                                                                                                            |     1 | 56nH inductor Coilcraft 0805CS-560XKBC |
| IN1, IN2                                                                                                                                                      |     2 | Test points                            |
| U1                                                                                                                                                            |     1 | MAX3885ECB                             |
| None                                                                                                                                                          |     1 | MAX3885 EV kit PC board                |
| None                                                                                                                                                          |     1 | MAX3885 data sheet                     |

1

## MAX3885 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX3885 EV kit simplifies evaluation of the MAX3885 deserializer. The EV kit operates from a single +3.3V supply and includes all the external components necessary to interface with 3.3V PECL and LVDS logic.

Each PECL input (SCLK+, SCLK-, SD+, SD-) is terminated on the EV board with the Thevenin equivalent of 53 Ω to (VCC - 2V). These inputs can be driven directly by the output of any 3.3V PECL device, such as a clock-and-data-recovery circuit (e.g., the MAX3875). For inputs other than directly coupled 3.3V PECL, provision is made on the board to AC couple the input. Remove the trace between C2, C4, C6, and C8 and i nstall  0.1µF  0603  ceramic  capacitors  (see  the MAX3885 data sheet).

All LVDS outputs (PCLK+, PCLK-, PD\_+, PD\_-) are differentially terminated with 100 Ω resistors between complementary outputs. Each output can directly drive an LVDS input or a high-impedance input oscilloscope (see Connecting LVDS Outputs to 50 Ω Oscilloscope Inputs). When driving an LVDS input that already includes 100 Ω differential  termination,  remove  the  termination resistor corresponding to the appropriate LVDS output.

The synchronization inputs (SYNC+, SYNC-) are internally  terminated LVDS inputs with 100 Ω differential input resistance. Ensure that LVDS devices driving these inputs are not redundantly terminated.

All  signal  inputs  and  outputs  use  coupled  50 Ω transmission lines. All input signal lines are of equal length to minimize propagation-delay skew. Likewise, all output signal lines are of equal length.

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Connecting LVDS Outputs to 50 Ω Oscilloscope Inputs

To monitor an LVDS signal on a 50 Ω input oscilloscope, remove the differential load resistor between the complementary outputs and AC couple each output to an oscilloscope input. For example, to observe the PD0 signal on a 50 Ω input instrument, remove resistor R15 from the EV board and place a capacitor or DC block in series with each output (PD0+ or PD0-) and the instrument input. Do not connect MAX3885 outputs directly to 50 Ω inputs or terminations to ground. Choose a coupling capacitor large enough in value to prevent pattern-dependent distortion of the output signal.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3885 Evaluation Kit

Figure 1.  MAX3885 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3885 Evaluation Kit

Figure 1.  MAX3885 EV Kit Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3885 Evaluation Kit

Figure 1.  MAX3885 EV Kit Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3885 Evaluation Kit

Figure 2.  MAX3885 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3885 Evaluation Kit

<!-- image -->

Figure 3.  MAX3885 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3885 Evaluation Kit

Figure 4.  MAX3885 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3885 Evaluation Kit

<!-- image -->

Figure 5.  MAX3885 EV Kit PC Board Layout-Solder Side

<!-- image -->

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3885 Evaluation Kit

Figure 6.  MAX3885 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3885 Evaluation Kit

<!-- image -->

Figure 7.  MAX3885 EV Kit PC Board Layout-Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3885 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                   |   PAGES CHANGED |
|-------------------|-----------------|---------------------------------------------------------------|-----------------|
|                 3 | 12/07           | Replaced Doc ID#, added Component Supplier website addresses. |               1 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600