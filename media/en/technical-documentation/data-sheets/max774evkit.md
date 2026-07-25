<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX774 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit board that provides a regulated -5.0V output voltage from a +5.0V input source.  It drives loads up to 1A with conversion efficiency greater than 80%.

Additional pads are provided on the board's solder side to accommodate external feedback resistors for setting different output voltages.

The MAX774 EV kit can also be used to evaluate the MAX775 (-12V output) or MAX776 (-15V output).

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| C1            |     1 | 150µF, 10V low-ESR tantalum capacitor Sprague 595D157X0010D7                 |
| C3            |     1 | 330µF, 10V low-ESR tantalum capacitor Sprague 595D337X0010R7                 |
| C2, C4        |     2 | 0.1µF, 50V ceramic capacitors                                                |
| R1            |     1 | 0.075 Ω resistor (low inductance) IRC LR2010-01-R075-F                       |
| R2, R3        |     0 | Open                                                                         |
| L1            |     1 | 22µH, 2.3A power inductor Sumida CDR125-220                                  |
| D1            |     1 | 3A Schottky diode 1N5820 or Nihon NSQ03A03                                   |
| Q1            |     1 | P-channel FET (BV DS = 30V, r DS(ON) = 130m Ω at 4.5V GS) , Siliconix Si9435 |
| U1            |     1 | MAX774CSA (8-pin SO)                                                         |
| JU1           |     1 | 3-pin header                                                                 |
| None          |     1 | Shunt                                                                        |
| None          |     1 | PC board                                                                     |
| None          |     1 | MAX774 data sheet                                                            |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER                                                                            | PHONE                                                                                                                                                                | FAX                                                                                                                                                                  |
|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AVX Coilcraft Coiltronics Harris IRC Matsuo Motorola Nihon Siliconix Sprague Sumida | (800) 282-4975 (708) 639-6400 (407) 241-7876 (407) 724-3739 (704) 264-8861 (714) 969-2491 (800) 521-6274 (805) 867-2555 (408) 988-8000 (603) 224-1961 (708) 956-0666 | (207) 283-1941 (708) 639-1469 (407) 241-9339 (407) 724-3937 (704) 264-8866 (714) 960-6492 (602) 244-4015 (805) 867-2556 (408) 970-3950 (603) 224-1430 (708) 956-0702 |

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ -5.0V or Adjustable Output Voltage
- ♦ Up to 1A Output Current
- ♦ 5 µ A Max Shutdown Current
- ♦ 100 µ A Max Supply Current
- ♦ 300kHz Switching Frequency
- ♦ 8-Pin DIP and SO Packages
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX774EVKIT-SO | 0°C to +70°C  | Surface Mount |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV Kit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX774 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Reference

The MAX774 EV kit is a fully assembled and tested surface-mount board.  Follow the steps below to verify board operation.

## Do not turn on the power supply until all connections are completed.

1. Connect a +5.0V supply to the pad marked VIN. Ground connects to the GND pad.
2. Connect a voltmeter and load (if any) to the VOUT pad.
3. Place the shunt on JU1 across pins 1 and 2 for normal operation.
4. Turn on the power and verify the output voltage is -5.0V.
5. Refer to the sections Evaluating the MAX775 and MAX776 and Other Output Voltages to modify the board for different output voltages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Jumper Selections

The 3-pin header JU1 selects shutdown mode.  Table 1 lists the selectable jumper options.

## Inductor Selection

The 22µH Sumida CDR125-220 inductor mounted on the EV kit is a low-resistance, shielded, medium-current inductor.  It  provides excellent performance over the line and load ranges of the MAX774/MAX775/MAX776. See  the Choosing  an  Inductor section  of  the MAX774/MAX775/MAX776 data sheet for more inductor selection information.

## Table 1.  Jumper JU1 Functions

Figure 1.  MAX774 EV Kit Schematic Diagram

| SHUNT LOCATION   | SHDN PIN         | MAX774 OUTPUT                |
|------------------|------------------|------------------------------|
| 2 & 3            | Connected to VIN | Shutdown mode, VOUT = 0V     |
| 1 & 2            | Connected to GND | MAX774 enabled, VOUT = -5.0V |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2.  Component Placement Guide (Component Side)

<!-- image -->

Figure 4.  PC Layout (Solder Side)

<!-- image -->

## Evaluating the MAX775 and MAX776

The MAX775 can replace the MAX774 to generate a -12.0V output voltage with output currents up to 0.5A. The only other modification required is to use a lowESR output capacitor with a voltage rating of 20V or higher.

The MAX776 can also replace the MAX774 to generate a -15.0V output voltage with output currents up to 0.4A. The only other modification required is to use a lowESR output capacitor with a voltage rating of 25V or greater.  Refer to the Capacitors section of the MAX774/MAX775/MAX776 data sheet for more capacitor selection information.

## MAX774 Evaluation Kit

Figure 3.  PC Layout (Component Side)

<!-- image -->

Figure 5.  Component Placement Guide (Solder Side)

<!-- image -->

## Other Output Voltages

The MAX774/MAX775/MAX776 are preset for -5V, -12V, and -15V output voltages, respectively.  However, they may be adjusted to other values through an external voltage divider formed by R2 and R3 (located on the board's solder side). For input or output voltages greater than 10V, capacitors C1 and C3 must be replaced by capacitors with a higher working voltage. The only other modification required is to cut the trace across R3.  The Output Voltage Selection section of  the  MAX774/MAX775/MAX776 data sheet gives instructions for calculating R2 and R3 values.

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 3