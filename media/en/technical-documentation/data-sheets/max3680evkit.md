<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX3680 evaluation kit (EV kit) simplifies evaluation of the MAX3680 622Mbps, SDH/SONET 1:8 deserializer.  The  EV  kit  requires  only  a  +3.3V  supply,  and includes all the external components necessary to interface with 3.3V PECL/TTL logic. The board can be connected directly to the output of a clock-and-data-recovery circuit (such as the MAX3675) and to the TTL input of an overhead termination circuit. It can also be used with a signal generator and an oscilloscope to evaluate the MAX3680's basic functionality.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION         |   QTY | DESCRIPTION                                                            |
|---------------------|-------|------------------------------------------------------------------------|
| C1-C4               |     4 | 0.1µF ceramic capacitors                                               |
| C5                  |     1 | 33µF, 10V tantalum capacitor AVX TAJC336K010 or Sprague 293D336X0010C2 |
| C6                  |     1 | 2.2µF tantalum capacitor AVX TAJA225K010 or Sprague 293D225X0010A2     |
| C7-C12              |     6 | 100pF ceramic capacitors                                               |
| J3-J16              |    14 | SMA connectors (PC edge mount)                                         |
| L1                  |     1 | 56nH inductor Coilcraft 0805CS-560-XKBC                                |
| R1, R3, R5, R7      |     4 | 82 Ω , 5% resistors                                                    |
| R2, R4, R6, R8      |     4 | 130 Ω , 5% resistors                                                   |
| R9-R17              |     9 | 2.4k Ω , 5% resistors                                                  |
| +3.3V, GND JR9-JR17 |    11 | 2-pin headers                                                          |
| U1                  |     1 | MAX3680EAI                                                             |
| None                |     1 | MAX3680 data sheet                                                     |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| AVX        | (803) 946-0690 | (803) 626-3123 |
| Coilcraft  | (847) 639-6400 | (847) 639-1469 |
| Sprague    | (603) 224-1961 | (603) 224-1430 |

Please indicate that you are using the MAX3680 when contacting the above component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Single +3.3V Supply
- ' Inputs Terminated for Interfacing with 3.3V PECL
- ' Outputs Configured for 50 Ω or High-Impedance Interface
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX3680EVKIT-SO | -40°C to +85°C | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX3680 EV kit simplifies evaluation of the MAX3680 622Mbps, SDH/SONET 1:8 deserializer.  The EV kit operates from a single +3.3V supply and includes all the external components necessary to interface with 3.3V PECL/TTL logic.

Each PECL input (SCLK+, SCLK-, SD+, SD-) is terminated on the EV board with the Thevenin equivalent of 50 Ω to (VCC - 2V).  These inputs can be driven directly by any 3.3V PECL device's output, such as a clockand-data-recovery circuit (e.g., the MAX3675). The synchronization input (SYNC) is a TTL input.

The TTL outputs (PCLK, PD\_) can interface to either 50 Ω or  high-impedance inputs. To interface to 50 Ω inputs, connect the inputs directly to the SMA connectors  labeled PCLK and PD0-PD7. This configuration forms a 50-to-1 voltage divider that maintains a highimpedance load to each TTL output while interfacing to 50 Ω .  To  interface  to  high-impedance inputs, connect the inputs to the 2-pin headers at R9-R17, which provide direct connections to the TTL outputs.

## \_\_\_\_\_\_\_\_\_\_\_\_\_Layout Considerations

To minimize propagation-delay skew, all PECL input signal lines are 50 Ω transmission lines of equal length. To allow accurate characterization of the parallel-clock to data-output delay, the output data lines (prior to the series 2.4k Ω termination resistors) are matched and kept as short as possible. Excluding the series termination  resistor,  each  output  data  line  measures  approximately 3pF at the 2-pin header (JR9-JR17).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

Figure 1.  MAX3680 EV Kit Schematic

<!-- image -->

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2.  MAX3680 EV Kit Component Placement Guide

<!-- image -->

Figure 4.  MAX3680 EV Kit PC Board Layout-Bottom Silkscreen*

<!-- image -->

*Not to scale

<!-- image -->

Figure 3.  MAX3680 EV Kit PC Board Layout-Component Side*

<!-- image -->

Figure 5.  MAX3680 EV Kit PC Board Layout-Solder Side*

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3680 Evaluation Kit

Figure 6.  MAX3680 EV Kit PC Board Layout-GND Plane*

<!-- image -->

*Not to scale

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Figure 7.  MAX3680 EV Kit PC Board Layout- Power Plane*

<!-- image -->