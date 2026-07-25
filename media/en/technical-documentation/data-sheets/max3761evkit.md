<!-- lastmod 2022-08-02 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX3761 evaluation kit (EV kit) simplifies evaluation  of  the  MAX3761 limiting amplifier. It  allows  easy programming of the loss-of-signal (LOS) threshold. The board layout provides for multiple termination configurations.  The  circuit  includes  space  for  the  MAX3760 preamplifier and user-supplied photodiode. Adding these two components to the MAX3761 forms a complete fiber optic receiver.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- Fully Assembled and Tested
- Easy LOS Threshold Programming
- Multiple Output Terminations
- Circuit Includes MAX3760 Preamplifier*
- Socket for User-Supplied Photodiode Signal Source

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER              | PHONE          | FAX            |
|-----------------------|----------------|----------------|
| AVX                   | (803) 946-0690 | (803) 626-3123 |
| Central Semiconductor | (603) 224-1961 | (603) 224-1430 |
| Coilcraft             | (847) 639-6400 | (847) 639-1469 |
| Sprague               | (516) 435-1110 | (516) 435-1824 |
| Zetex USA             | (516) 543-7100 | (516) 864-7630 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE    | BOARD TYPE    |
|-----------------|----------------|---------------|
| MAX3761EVKIT-SO | -40°C to +85°C | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION                                |   QTY | DESCRIPTION                                          |
|--------------------------------------------|-------|------------------------------------------------------|
| C1                                         |     1 | 33µF, 35V, ±10% tantalum cap Sprague 595D336X9035R2  |
| C2                                         |     1 | 3.3µF, 25V, ±10% tantalum cap Sprague 595D335X9025B2 |
| C3, C5, C7, C9, C30                        |     5 | 0.027µF, 25V ceramic capacitors                      |
| C4, C6, C8, C10, C11                       |     5 | 100pF, 25V ceramic capacitors                        |
| C12, C13, C14, C15                         |     0 | Open                                                 |
| C16, C17                                   |     2 | 5600pF, 25V ceramic capacitors                       |
| C26, R24, R28                              |     3 | 0.1µF, 25V ceramic capacitors                        |
| C29                                        |     1 | 390pF, 25V ceramic capacitor                         |
| CAZ1                                       |     1 | 150pF, 16V ceramic capacitor                         |
| R2, R3, R15, R16, R19, R20, R23, R27       |     8 | 0 Ω resistors                                        |
| R4                                         |     1 | 100k Ω potentiometer                                 |
| R5, R40                                    |     2 | 2k Ω , 5% resistors                                  |
| R6                                         |     1 | 100k Ω , 5% resistor                                 |
| R7                                         |     1 | 5.1k Ω , 5% resistor                                 |
| R8, R10, R11, R14, R17, R18, R21, R22, R26 |     0 | Open                                                 |
| R9, R13, R41, R42, R44                     |     5 | 1k Ω , 5% resistors                                  |
| R12                                        |     1 | 100 Ω , 5% resistor                                  |
| R25, R29                                   |     2 | 330 Ω , 5% resistors                                 |
| R37                                        |     1 | 49.9 Ω , 1% resistor                                 |
| R38, R39                                   |     2 | 820 Ω , 5% resistors                                 |

*Contact factory for availability.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

| DESIGNATION                    | QTY   | DESCRIPTION                                                 |
|--------------------------------|-------|-------------------------------------------------------------|
| R43                            | 1     | 10k Ω potentiometer                                         |
| D3                             | 0     | User-supplied photodiode                                    |
| D4                             | 1     | High-speed switching diode Central Semiconductor CMPD4448BK |
| L1, L2, L3                     | 3     | 5.6µH inductors Coilcraft 1008LS-562                        |
| L4                             | 1     | 4.7µH inductor Coilcraft 1008CS-472                         |
| L5, L6                         | 0     | Open                                                        |
| L7                             | 1     | 15µH inductor Coilcraft 1812CS-15XKBC                       |
| U1                             | 1     | MAX3761EEP                                                  |
| U2                             | 1*    | MAX3760ESA                                                  |
| Q3, Q4                         | 2     | PNP small-signal transistors Zetex BCX71KCT                 |
| PREAMP, OUT+, OUT-, LOS+, LOS- | 5     | SMA connectors (edge mount) E. F. Johnson 142-0701-801      |
| VIN+, VIN-                     | 2     | SMA connectors (PC mount)                                   |
| JU4, JU6, JU7, INV             | 4     | 2-pin headers                                               |
| JU3, JU5                       | 2     | 3-pin headers                                               |
| VTH, RSSI                      | 2     | 1-pin headers                                               |
| None                           | 3     | Shunts for JU3, JU5, JU6                                    |
| None                           | 1     | MAX3761/MAX3762 circuit board                               |
| None                           | 1     | MAX3761 data sheet                                          |

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800

## MAX3761 Evaluation Kit

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

- 1) Connect a +5V power supply to the +5V pad, then connect the power-supply ground to the GND pad.
- 2) Ensure that the JU3 shunt is across pins 1 and 2.
- 3) Ensure that JU5 and JU4 are open.
- 4) Ensure that JU7 is shorted.
- 5) Apply a 100mV signal at VIN+ and VIN-, with a 622Mbps data rate.
- 6) Connect OUT+ and OUT- to a 50 Ω terminated oscilloscope.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Data Inputs

## Differential Drive from a Signal Generator

The MAX3761 EV kit is factory configured with a 100 Ω differential load AC coupled to the MAX3761 inputs.

## Single-Ended Drive from a Signal Generator

Remove R12, install R10 and R11 = 49.9 Ω ,  and  connect the signal generator to VIN+. This provides a 50 Ω termination to ground for the signal generator.

## Differential Input from the Preamplifier

The MAX3761 EV kit incorporates the MAX3760 transimpedance amplifier. If the MAX3760 preamplifier is used, connect the +5V supply to the terminal labeled 5V OFFSET. Install shorts in L5 and L6 to connect the preamplifier to the limiting amplifier. Verify that R12 = 100 Ω .  Connect a signal generator to the preamplifier, or use a photodiode and light source connected at D3.

If  a  photodiode  is  used,  remove  R41.  Figure  1  shows the proper installation of a user-supplied photodiode.

Figure 1.  Photodiode Connection

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Output Terminations

## Oscilloscope Connection

The MAX3761 EV kit is shipped configured to connect to  a  50 Ω terminated oscilloscope. Each output is AC coupled and has a 330 Ω resistor to ground, which provides bias current.

## PECL Outputs

To drive a circuit that requires a PECL input, remove the 330 Ω resistors  (R25  and R29) and short the coupling capacitors (R24 and R28), then terminate with 50 Ω to VCC - 2V.

## LOS Outputs

The MAX3761's LOS outputs are TTL compatible, with internal  pull-up  resistors.  Connect  the  test  point  LOS+ to a voltmeter or high-impedance probe.

## Adjustments and Controls

## LOS Voltage Threshold Adjustment

Potentiometer R4 adjusts the VTH voltage, which programs the LOS threshold. Refer to the MAX3761 data sheet for details.

## Preamplifier Offset Current

Potentiometer R43 adjusts the amount of offset current at the preamplifier input (for use with the MAX3760 transimpedance amplifier). Refer to the MAX3760 data sheet for details.

## Jumper JU7

JU7 implements the squelch function. When JU7 is shorted, the LOS+ terminal is connected to the DISABLE pin. When LOS+ is asserted high, the data outputs are disabled. If shorting JU7, remove JU5.

## Jumper JU3

## Jumper JU5

JU5 sets the voltage at the disable pin. To hold the MAX3761's outputs enabled, short pins 2 and 3. To hold the MAX3761's outputs disabled, short pins 1 and 2. Remove JU5 if JU7 is used.

## Jumper JU6

JU6 connects a current mirror to the MAX3760 transimpedance amplifier input, allowing DC offset current to be added to the input signal. This is a convenient place to measure the added DC offset current.

## Jumper JU4

When shorted, JU4 disables the MAX3761's offset correction. This allows DC parameter testing.

<!-- image -->

For normal operation, short pins 1 and 2.

<!-- image -->

Figure 2.  MAX3761 EV Kit Schematic

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

Evaluates:  MAX3761

Figure 2.  MAX3761 EV Kit Schematic (continued)

<!-- image -->

## Layout Considerations

Note that the EV kit board contains four layers. The layers beneath the MAX3760 inputs were relieved to reduce capacitance at the transimpedance amplifier input. Controlled impedance lines were used for output signal paths.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3.  MAX3761 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5.  MAX3761 EV Kit PC Board Layout-Power Plane

<!-- image -->

## MAX3761 Evaluation Kit

Figure 4.  MAX3761 EV Kit PC Board Layout-Ground Plane

<!-- image -->

Figure 6.  MAX3761 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX3761 Evaluation Kit

Figure 7.  MAX3761 EV Kit Component Placement Guide

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600