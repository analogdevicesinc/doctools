<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1771 evaluation kit (EV kit) provides a regulated 12V, or adjustable output voltage from an input source as low as 3V. It drives loads up to 0.5A with greater than 80% conversion efficiency.

This EV kit is a fully assembled and tested surfacemount circuit board. Additional pads on the bottom of the board accommodate the external feedback resistors for setting different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                             |
|---------------|-------|-------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 68µF, 20V tantalum capacitors AVX TPSE686M020R0150                      |
| C4, C5        |     2 | 0.1µF ceramic capacitors                                                |
| D1            |     1 | 3A, 30V Schottky diode Nihon NSQ03A03 or Motorola MBRU340T3             |
| L1            |     1 | 22µH, 2.8A inductor Sumida CDRH125-220                                  |
| N1            |     1 | N-channel MOSFET (SO-8) Siliconix Si9410DY or Motorola MMSF5N03HD       |
| R1            |     1 | 0.04 Ω , 1% resistor (SMT) Dale WSL-2010-R040-F or IRC LR2010-01-R040-F |
| R2, R3        |     0 | Open                                                                    |
| C6            |     0 | Open                                                                    |
| U1            |     1 | Maxim MAX1771CSA (SO-8)                                                 |
| JU1, JU2      |     2 | 3-pin headers                                                           |
| None          |     2 | Shunt                                                                   |
| None          |     1 | Printed circuit board                                                   |
| None          |     1 | MAX1771 data sheet                                                      |

<!-- image -->

## MAX1771 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ 12V or Adjustable Output Voltage
- ♦ 3V to VOUT + 0.5V Input Range
- ♦ Up to 0.5A Output Current
- ♦ 5 µ A Max Shutdown Current
- ♦ 110 µ A Max Supply Current
- ♦ 300kHz Switching Frequency
- ♦ 8-Pin SO, Surface-Mount Construction
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | PIN-PACKAGE   |
|-----------------|---------------|---------------|
| MAX1771EVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER   | PHONE          | FAX            |
|------------|----------------|----------------|
| AVX        | (800) 282-4975 | (207) 283-1941 |
| Coilcraft  | (708) 639-6400 | (708) 639-1469 |
| Dale       | (402) 564-3131 | (402) 563-6418 |
| IRC        | (512) 992-7900 | (512) 992-3377 |
| Motorola   | (602) 244-3576 | (602) 244-4015 |
| Nihon      | (805) 867-2555 | (805) 867-2556 |
| Siliconix  | (408) 988-8000 | (408) 970-3950 |
| Sprague    | (603) 224-1961 | (603) 224-1430 |
| Sumida     | (708) 956-0666 | (708) 956-0702 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1771 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX1771 EV kit is a fully assembled and tested surface-mount printed circuit board. Follow these steps to  verify  board  operation.  Do  not  turn  on  the  power supply until all connections are completed.

- 1) Connect a 5V supply to the pad marked VIN. The ground connects to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) For normal operation, place one shunt across JU1 pins 1 and 2, and the other shunt across JU2 pins 2 and 3.
- 4) Turn on the power and verify that the output voltage is 12.0V.
- 5) Refer to the section Evaluating Other Output Voltages to modify the board for different output voltages.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX1771 OUTPUT                     |
|------------------|------------------|------------------------------------|
| 2 & 3            | Connected to V+  | Shutdown mode, V OUT = V IN - 0.4V |
| 1 & 2            | Connected to GND | MAX1771 enabled, V OUT = 12.0V     |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Jumper Selection

The 3-pin header JU1 selects shutdown mode. Table 1 lists the selectable jumper options.

The 3-pin header JU2 selects bootstrapped mode. Table 2 lists the selectable jumper options. Refer to the MAX1771 data sheet for more information.

## Inductor Selection

The 22µH Sumida CDRH125-220 inductor that comes mounted on the EV kit board is a low-resistance, shielded, medium-current inductor. It provides excellent performance over the line and load ranges. Refer to the Determining the Inductor section in the corresponding data sheet for instructions on selecting the inductor value.

## Table 2.  Jumper JU2 Functions

| SHUNT LOCATION   | V+ PIN            | MAX1771 MODE          |
|------------------|-------------------|-----------------------|
| 2 & 3            | Connected to VOUT | Bootstrapped mode     |
| 1 & 2            | Connected to VIN  | Non-bootstrapped mode |

Figure 1.  MAX1771 EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Other Output Voltages

The MAX1771 is preset for a 12V output voltage. However, its output may also be adjusted via an external voltage divider formed by R2 and R3 (located on the bottom of the board). The only other modification required is to cut the trace across R3. The Setting the

Figure 2.  MAX1771 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX1771 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX1771 Evaluation Kit

Output Voltage section of the MAX1771 data sheet gives instructions for calculating R2 and R3 (as shown in Figure 1).

For output voltages greater than 15V, replace the 20V, C2 and C3 with higher voltage rating capacitors.

Figure 3.  MAX1771 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX1771 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3