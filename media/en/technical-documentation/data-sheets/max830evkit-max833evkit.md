<!-- lastmod 2022-08-05 -->
## Not Recommended for New Designs

This product was manufactured for Maxim by an outside wafer foundry using a process that is no longer available.  It is not recommended for new designs. The data sheet remains available for existing users.

A Maxim replacement or an industry second-source may be available. Please see the QuickView data sheet for this part or contact technical support for assistance.

[For further information, contact Maxim's Applications Tech Support.](http://www.maxim-ic.com/support/request/new.mvp)

## MAX831 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX831 evaluation kit (EV kit) provides a regulated 5.0V output voltage while operating on input voltages from 8.0V to 30V. It drives loads up to 1A with conversion efficiency greater than 80%.

The MAX831 EV kit is a fully assembled and tested surface-mount printed circuit board.  This kit comes with a 5V-output MAX831 IC, but it can also be used to evaluate  the  MAX833 (3.0V output), MAX832 (3.3V output), or  MAX830 (adjustable output).  Additional pads are provided on the board's solder side to accommodate the external feedback resistors used with the MAX830.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIG- NATION   |   QTY | DESCRIPTION                                                                            |
|-----------------|-------|----------------------------------------------------------------------------------------|
| C1, C2          |     2 | 33µF, 35V, low-ESR tantalum capacitor Sprague 595D336X0035R2B                          |
| C3, C4          |     2 | 220µF, 10V, low-ESR tantalum capacitor Sprague 595D227X0010R2B or AVX TPSE227M010R0100 |
| C5              |     1 | 0.047µF ceramic capacitor                                                              |
| R1, R2, R3      |     0 | Open                                                                                   |
| R4              |     1 | 10k Ω , 5% resistor                                                                    |
| D1              |     1 | 3A, 40V 1N5822 (SMT) Schottky diode Nihon NSQ03A04 Motorola MBRS340T3                  |
| L1              |     1 | 100µH, 1.3A inductor Coilcraft D03316-104                                              |
| U1              |     1 | Maxim MAX831CWE                                                                        |
| J1              |     1 | 2-pin header                                                                           |
| None            |     1 | Shunt                                                                                  |
| None            |     1 | MAX831 PC board                                                                        |
| None            |     1 | MAX831 data sheet                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' 8V to 30V Input Voltage Range
- ' 5V Output Voltage
- ' Up to 1A Continuous Output Current
- ' 140µA Shutdown Supply Current
- ' 8mA Quiescent Current
- ' Internal Power Switch
- ' Adjustable Current Limit
- ' Surface-Mount Construction
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | PIN-PACKAGE   |
|----------------|---------------|---------------|
| MAX831EVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER    | PHONE          | FAX            |
|-------------|----------------|----------------|
| AVX         | (207) 282-5111 | (207) 283-1941 |
| Coilcraft   | (708) 639-6400 | (708) 639-1469 |
| IRC         | (704) 264-8861 | (704) 264-1972 |
| Motorola    | (602) 244-3576 | (602) 244-4015 |
| Murata-Erie | (814) 237-1431 | (814) 238-0480 |
| Nihon       | (805) 867-2555 | (805) 867-2556 |
| Sprague     | (603) 224-1961 | (603) 224-1430 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Call toll free 1-800-998-8800 for free samples or literature.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Reference

The MAX831 EV kit is a fully assembled and tested surface-mount board.  Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Connect an 8V to 30V supply to the pad marked VIN.  The ground connects to the GND pad.
- 2) Connect a voltmeter and load (if any) to the VOUT pad.
- 3) Remove the shunt on J1 for normal operation.
- 4) Turn on the power and verify that the output voltage is 5.0V.

Instructions for modifying the board for different output voltages appear in the sections Evaluating the MAX832 and MAX833 and Other Output Voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Jumper Selection

The two-pin header J1 selects the shutdown mode. Table 1 lists the jumper selectable options.

Table 1.  Jumper J1 Functions

| SHUNT LOCATION   | - S - H - D - N PIN   | MAX831 OUTPUT                |
|------------------|-----------------------|------------------------------|
| OFF              | Floating              | MAX831 Enabled, V OUT = 5.0V |
| ON               | Connected to GND      | Shutdown Mode, V OUT = 0V    |

## Notes about Inductor Selection

The 100µH Coilcraft D03316-104 inductor that comes mounted with the EV kit has low resistance and a medium current rating (1.3A). It provides excellent performance  over  the  line  and  load  ranges  of  the MAX830/MAX831/MAX832/MAX833.

For additional information on inductor selection, refer to the MAX830-MAX833 data sheet.

## Evaluating the MAX832 and MAX833

The MAX831 can be replaced by a MAX833 to generate a 3.0V output voltage with output current up to 1A, or by a MAX832 to generate a 3.3V output voltage with output current up to 1A.  The only modification required is to replace the IC.

Figure 1.  MAX831 EV Kit Schematic Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX831 Evaluation Kit

## Other Output Voltages

The MAX831 can be replaced with a MAX830 to generate output voltages in the 2.5V to 25V range using external resistors.    Besides  replacing  the  IC,  the  only other modifications required are to cut the trace shorting resistor R1, add the output-voltage-divider resistors R1 and R2  (located on the board's solder side), and use low-ESR output capacitors with the proper voltage rating .    The Pin  Description section of the MAX830-MAX833 data sheet gives instructions for calculating the values of external feedback resistors R1 and R2.

Figure 2.  MAX831 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4.  PC Board Layout-Component Side

<!-- image -->

## Reducing Current Limit

To reduce the output current to below 1A, or to reduce the peak current limit to below 1.3A, install the currentlimiting resistor, R3, onto the board's solder side.  See Note 7 in the MAX830-MAX833 data sheet for instructions on selecting the resistor value.

Figure 3.  MAX831 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 5.  PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

3

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

- © 1995 Maxim Integrated Products

is a registered trademark of Maxim Integrated Products.