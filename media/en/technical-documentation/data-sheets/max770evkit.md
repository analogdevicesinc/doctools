<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX770 evaluation kit (EV kit) provides a regulated 5V output voltage from a 3V input source. It drives loads up to 1A with greater than 80% conversion efficiency.

This EV kit is a fully assembled and tested surfacemount circuit board. Additional pads on the bottom of the board accommodate the external feedback resistors for setting different output voltages.

The MAX770 EV kit comes with a MAX770CSA IC, but i t   c an  also  evaluate  the  12V-output  MAX771  or 15V-output MAX772-simply order a free sample of the MAX771CSA or MAX772CSA to substitute for the MAX770CSA.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| C1            |     1 | 150µF, 10V low-ESR tantalum capacitor Sprague 595D157X0010D7 AVX TPSE227M010R0100 |
| C2            |     1 | 330µF, 10V low-ESR tantalum capacitor Sprague 595D337X001047 AVX TPSE337M006R0100 |
| C3, C4        |     2 | 0.1µF, 50V ceramic capacitors                                                     |
| D1            |     1 | Schottky diode 1N5820 or Nihon NSQ03A02 (BV = 20V, I MAX = 3A)                    |
| J1            |     1 | 3-pin header                                                                      |
| L1            |     1 | 22µH power inductor Sumida CDR125-220 (I SAT = 2.3A, R SERIES = 50m Ω )           |
| N1            |     1 | N-channel FET Motorola MTD20N03HDL (BV = 30V, R DS(ON) = 40m Ω @ V GS = 5V)       |
| R1            |     1 | 0.075 Ω resistor (low inductance) IRC LR2010-01-R075-F or Dale WSL-2512-01-R075-F |
| R2, R3        |     0 | Open                                                                              |
| U1            |     1 | MAX770CSA (8-pin SO)                                                              |
| None          |     1 | Shunt                                                                             |
| None          |     1 | PC board                                                                          |
| None          |     1 | MAX770 data sheet                                                                 |

<!-- image -->

## MAX770 Evaluation Kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 5V or Adjustable Output Voltage
- ' 2.7V to 5.5V Input Range
- ' Up to 1A Output Current
- ' 5 m A Max Shutdown Current
- ' 110 m A Max Supply Current
- ' 300kHz Switching Frequency
- ' 8-Pin SO, Surface-Mount Construction
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | PIN-PACKAGE   |
|----------------|---------------|---------------|
| MAX770EVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER    | PHONE                         | FAX            |
|-------------|-------------------------------|----------------|
| AVX         | (803) 946-0690 (800) 282-4975 | (803) 626-3123 |
| Coilcraft   | (847) 639-6400                | (847) 639-1469 |
| Coiltronics | (561) 241-7876                | (561) 241-9339 |
| Dale        | (605) 668-4131                | (605) 665-1627 |
| IRC         | (512) 992-7900                | (512) 992-3377 |
| Matsuo      | (714) 969-2491                | (714) 960-6492 |
| Motorola    | (602) 303-5454                | (602) 994-6430 |
| Nihon       | (805) 867-2555                | (805) 867-2698 |
| Siliconix   | (408) 988-8000 (800) 554-5565 | (408) 970-3950 |
| Sprague     | (603) 224-1961                | (603) 224-1430 |
| Sumida      | (847) 956-0666                | (847) 956-0702 |

1

## MAX770 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX770 EV kit is a fully assembled and tested surface-mount printed circuit board. Follow these steps to  verify  board  operation.  Do  not  turn  on  the  power supply until all connections are completed.

- 1) Connect a 2.7V to 5.5V supply to the pad marked V+ The ground connects to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Place the shunt on J1 across pins 1 and 2, for normal operation.
- 4) Turn on the power and verify that the output voltage is 5.0V.
- 5) Refer to the sections Evaluating the MAX771/772 and Other Output Voltages to modify the board for different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

Jumper Selection

The 3-pin header J1 selects shutdown mode. Table 1 lists the selectable jumper options.

Table 1.  Jumper J1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX770 OUTPUT                    |
|------------------|------------------|----------------------------------|
| 2 & 3            | Connected to V+  | Shutdown mode, V OUT = V+ - 0.4V |
| 1 & 2            | Connected to GND | MAX770 enabled, V OUT = 5.0V     |

## Inductor Selection

The 22µH Sumida CDR125-220 inductor that comes mounted on the EV kit board is a low-resistance, shielded, medium-current inductor. It provides excellent performance over the line and load ranges of the MAX770/MAX771/MAX772. Refer to the section Choosing an Inductor in the MAX770/MAX771/MAX772 data sheet for instructions on selecting the inductor value.

## Evaluating the MAX771/MAX772

The MAX770 can be replaced by a MAX771 to generate a 12V output voltage with up to 0.5A output current, or by a MAX772 to generate a 15V output voltage with up to 0.4A output current. Besides replacing the IC, the only other modification required is to use a low-ESR output capacitor with a voltage rating of 20V or greater.

## Other Output Voltages

The MAX770, MAX771 and MAX772 are preset for 5V, 12V, and 15V output voltages, respectively. However, their outputs may also be adjusted via an external voltage divider formed by R2 and R3 (located on the bottom of the board). The only other modification required is to cut the trace across R3. The Output Voltage Selection section of the MAX770/MAX771/ MAX772 data sheet gives instructions for calculating R2 and R3 values.

## For input or output voltages greater than 10V, replace the 10V, C1 and C2 with higher voltage rating capacitors.

Figure 1.  MAX770 EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2.  MAX770 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX770 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX770 Evaluation Kit

Figure 3.  MAX770 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX770 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX770 Evaluation Kit

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

© 1997 Maxim Integrated Products