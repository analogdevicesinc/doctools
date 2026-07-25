<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX764 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit board that provides a regulated -5.0V output voltage from a 3V to 16V input voltage source. It drives loads up to 250mA with conversion efficiency greater than 82%.

The MAX764 EV kit can also be used to evaluate the MAX765CSA (-12V output) or MAX766 (-15V output). Additional pads are provided on the board's solder side to accommodate external feedback resistors for setting different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1            |     1 | 120µF, 20V, low-ESR tantalum capaci- tor Sprague 595D127X0020R7      |
| C2            |     1 | 330µF, 10V, low-ESR tantalum capacitor Sprague 595D337X0010R7 *      |
| C3, C4        |     2 | 0.1µF, 50V ceramic capacitors                                        |
| R1, R2        |     0 | Open                                                                 |
| L1            |     1 | 47µH, 0.72A power inductor Sumida CD54-470 or Coilcraft D03316-473   |
| D1            |     1 | 1A, 30V Schottky diode (1N5818) Nihon EC10QS03 or Motorola MBRS130T3 |
| U1            |     1 | MAX764CSA (8-pin SO)                                                 |
| J1            |     1 | 3-pin header                                                         |
| None          |     1 | Shunt                                                                |
| None          |     1 | PC board                                                             |
| None          |     1 | MAX764 data sheet                                                    |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER    | PHONE          | FAX            |
|-------------|----------------|----------------|
| IRC         | (704) 264-8861 | (704) 264-8866 |
| Coilcraft   | (708) 639-6400 | (708) 639-1469 |
| Coiltronics | (407) 241-7876 | (407) 241-9339 |
| Motorola    | (800) 521-6274 | (602) 244-4015 |
| Nihon       | (805) 867-2555 | (805) 867-2556 |
| Sprague     | (603) 224-1961 | (603) 224-1430 |
| Sumida      | (708) 956-0666 | (708) 956-0702 |

<!-- image -->

## MAX764 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ -5V or Adjustable Output Voltage
- ♦ Up to 250mA Output Current
- ♦ 120 µ A Max Supply Current
- ♦ 5 µ A Max Shutdown Current
- ♦ 300kHz Switching Frequency
- ♦ Internal Power MOSFET
- ♦ 8-Pin SO Package
- ♦ Surface-Mount Construction
- ♦ Fully-Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX764EVKIT-SO | 0°C to +70°C  | Surface Mount |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX764 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX764 EV kit is a fully assembled and tested surface-mount board. Do not turn on the power supply until all connections are completed.

- 1) Connect a 5.0V supply to the pad marked VIN. Ground connects to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Place the shunt on J1 across pins 1 and 2 for normal operation.
- 4) Turn on the power and verify that the output voltage is -5.0V.
- 5) Refer to the sections Evaluating the MAX765/ MAX766 and Other Output Voltages to  modify the board for different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Jumper Selection

The 3-pin header J1 selects shutdown mode. Table 1 lists the selectable jumper options.

## Table 1. Jumper J1 Functions

| SHUNT LOCATION   | SHDN PIN         | MAX764 OUTPUT                 |
|------------------|------------------|-------------------------------|
| 1 & 2            | Connected to GND | MAX764 enabled, V OUT = -5.0V |
| 2 & 3            | Connected to VIN | Shutdown mode, V OUT = 0V     |

## Inductor Selection Notes

The 47µH Sumida CD54-470 inductor that comes mounted on the EV kit is a low-resistance, mediumcurrent inductor. It provides excellent performance over the line and load ranges of the MAX764/MAX765/ MAX766. See the Inductor Selection section in the MAX764/MAX765/MAX766  data  sheet  for  more information.

## Evaluating the MAX765/MAX766

The MAX764 can be replaced by either the MAX765 to generate a -12V output with load currents up to 125mA, or by the MAX766 to generate a -15V output with load currents up to 100mA. Note that the input voltage range is reduced due to the maximum V IN -V OUT differential of 21V. The only other modification required is to use a low-ESR output capacitor (C2) with a voltage rating of 20V or greater. Refer to the Capacitor Selection section in  the  MAX764/MAX765/MAX766 data sheet for more information.

## Other Output Voltages

The MAX764/MAX765/MAX766 are preset for -5V, -12V, and -15V output voltages, respectively. However, they may be adjusted to other values through an external voltage divider formed by R1 and R2 (located on the board's solder side). For output voltages greater than 10V, capacitor C2 must be replaced by a capacitor wih a higher working voltage. The only other modification required is to cut the trace accross R1. The Setting the Output Voltage section in the MAX764/MAX765/ MAX766 data sheet gives instructions for calulating R1 and R2 values.

Figure 1. MAX764 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  MAX764 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  MAX764 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX764 Evaluation Kit

Figure 3.  MAX764 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  MAX764 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3