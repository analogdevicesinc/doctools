<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX608 evaluation kit (EV kit) provides a regulated 5V or adjustable output voltage from an input source as low as 1.8V. It drives loads up to 0.5A with greater than 80% conversion efficiency.

This EV kit is a fully assembled and tested surfacemount circuit board. Additional pads on the bottom of the board accommodate the external feedback resistors for setting different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1            |     1 | 68µF, 20V tantalum capacitor Sprague 593D686X0020E2W AVX TPSE686M020R0150   |
| C2, C3        |     2 | 100µF, 16V tantalum capacitors Sprague 593D107X0016E2W AVX TPSE107M016R0100 |
| C4, C5        |     2 | 0.1µF ceramic capacitors Vitramon VT1206Y104KXA                             |
| D1            |     1 | 3A, 40V Schottky diode Nihon NSQ03A04 Motorola MBRU340T3                    |
| L1            |     1 | 22µH inductor Sumida CDRH125-220                                            |
| N1            |     1 | N-channel MOSFET (SOT-223) Motorola MMFT3055EL                              |
| R1            |     1 | 0.050 Ω , 1% resistor (SMT) Dale WSL-2010-R050-F IRC LR2010-01-R050-F       |
| U1            |     1 | Maxim MAX608ESA (SO-8)                                                      |
| JU1           |     1 | 3-pin header                                                                |
| None          |     1 | Shunt                                                                       |
| None          |     1 | Printed circuit board                                                       |
| None          |     1 | MAX608 data sheet                                                           |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 5V or Adjustable Output Voltage
- ' 1.8V to VOUT + 0.4V Input Range
- ' Up to 0.5A Output Current
- ' 5µA Max Shutdown Current
- ' 110µA Max Supply Current (MAX608 I.C. only)
- ' Up to 300kHz Switching Frequency
- ' 8-Pin SO, Surface-Mount Construction
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX608EVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER        | PHONE          | FAX            |
|-----------------|----------------|----------------|
| AVX             | (803) 946-0690 | (803) 626-3123 |
| Dale            | (402) 564-3131 | (402) 563-6418 |
| IRC             | (512) 992-7900 | (512) 992-3377 |
| Motorola        | (602) 303-5454 | (602) 994-6430 |
| Nihon           | (805) 867-2555 | (805) 867-2698 |
| Sprague         | (603) 224-1961 | (603) 224-1430 |
| Sumida          | (708) 956-0666 | (708) 956-0702 |
| Vishay/Vitramon | (203) 268-6261 | (203) 452-5670 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX608 EV kit is a fully assembled and tested surface-mount printed circuit board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect a 3V supply to the pad marked VIN. The ground connects to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Place the shunt on JU1 across pins 1 and 2 for normal operation.
- 4) Turn on the power and verify that the output voltage is 5V.
- 5) Refer to the section Evaluating Other Output Voltages to modify the board for different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Jumper Selection

The 3-pin header JU1 selects shutdown mode. Table 1 lists the selectable jumper options.

## Table 1.  Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX608 OUTPUT                      |
|------------------|------------------|------------------------------------|
| 2 & 3            | Connected to VIN | Shutdown mode, V OUT = V IN - 0.4V |
| 1 & 2            | Connected to GND | MAX608 enabled, V OUT = 5.0V       |

## Inductor Selection

The 22µH Sumida CDRH125-220 inductor mounted on the EV kit board is a low-resistance, shielded, mediumcurrent inductor. It provides excellent performance over the line and load ranges. Refer to the section  Determining the Inductor in the MAX608 data sheet for instructions on selecting the inductor value.

## Evaluating Other Output Voltages

The MAX608 is preset for a 5V output voltage. However, its  output  may also be adjusted via an external voltage divider formed by R2 and R3 (located on the bottom side of the board). The only other modification required is to cut the trace across R3. The section Setting the Output Voltage in the MAX608 data sheet gives instructions for calculating R2 and R3 values.

For output voltages greater than 15V, use the MAX1771.

Figure 1.  MAX608 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2.  MAX608 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX608 EV Kit PC Board LayoutComponent Side

<!-- image -->

## MAX608 Evaluation Kit

Figure 3.  MAX608 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX608 EV Kit PC Board LayoutSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX608 Evaluation Kit

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600