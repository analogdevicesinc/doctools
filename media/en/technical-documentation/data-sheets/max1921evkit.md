<!-- lastmod 2022-08-02 -->
## General Description

The MAX1921 evaluation kit (EV kit) provides a fixed 1.8V output voltage from a 2V to 5.5V input source and delivers up to 400mA output current. The MAX1921 is a stepdown switching regulator with an internal power switch and synchronous rectifier in a tiny SOT23 package.

The MAX1921 EV kit is a fully assembled and tested surface-mount circuit board. The MAX1921 EV kit can also be used to evaluate other fixed-output voltage versions of the MAX1921 or the MAX1920, which is a stepdown switching regulator with an adjustable output voltage. Additional pads on the board are provided for external feedback resistors to set different output voltages, 1.25V to VIN.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1            |     1 | 2.2µF ±20%, 10V X5R ceramic capacitor (0805) Taiyo Yuden LMK212BJ225MG or TDK C2012X5R1A225M  |
| C2            |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ475MG or TDK C2012X5R0J475K |
| C3            |     1 | 5.6nF ±20%, 50V X7R ceramic capacitor (0603) Murata GRM39X7R562M050AD or equivalent           |
| JU1           |     1 | 3-pin header                                                                                  |
| L1            |     1 | 4.7µH ±20% 1A inductor Toko A914BYW-4R7M or Sumida CDRH3D16-4R7                               |
| R1            |     1 | 4.75k Ω ±1% resistor (0603)                                                                   |
| R2            |     0 | Not installed, resistor (0603)                                                                |
| U1            |     1 | MAX1921EUT18-T (6-pin SOT23), top mark ABCM                                                   |
| None          |     1 | Shunt                                                                                         |
| None          |     1 | MAX1921 PC board                                                                              |
| None          |     1 | MAX1921 EV kit data sheet                                                                     |
| None          |     1 | MAX1920/MAX1921 data sheet                                                                    |

- ♦ 2V to 5.5V Input Voltage Range
- ♦ Output Voltage

1.8V Fixed Output Voltage (MAX1921EUT18-T) Adjustable Output Voltage (MAX1920EUT-T) Other Fixed-Output Voltages (MAX1921EUT\_ \_-T)

- ♦ Output Current

Guaranteed 400mA at ≥ 2.5V Input Voltage

- ♦ IC Shutdown Current 0.1µA (typ)
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX1921EVKIT | 0 o C to +70 o C | 6 SOT23-6    |

Note: To evaluate other versions of the MAX1921 or the MAX1920, request a free sample with the MAX1921EVKIT. See Table 2.

## Quick Start

The MAX1921 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify  that  there  is  a  shunt  across  pins  1  and  2  of JU1 ( SHDN ).
- 2) Connect a voltmeter and load (if any) to the VOUT pad. Connect the ground to the GND closest to VOUT.
- 3) Connect a 2V to 5.5V power supply to the VIN pad. Connect power supply ground to the GND pad closest to VIN.
- 4) Turn on the power supply and verify that the output voltage is 1.8V.

To evaluate other voltages, see the Evaluating Other Output Voltages section.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

Features

## MAX1921 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE         |
|-------------|--------------|--------------|-----------------|
| Sumida      | 847-545-6700 | 847-545-6720 | www.sumida.com  |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com |
| TDK         | 847-803-6100 | 847-390-4405 | www.tdk.com     |
| Toko        | 847-297-0070 | 847-699-1194 | www.tokoam.com  |

Note:

Please indicate that you are using the MAX1920/MAX1921 when contacting these component suppliers.

## Detailed Description

## Shutdown Mode

The MAX1921 EV kit features a shutdown mode that reduces the MAX1921 quiescent current to 0.1µA, preserving battery life.  The  setting  of  jumper  JU1  selects the circuit  operating  modes. Table 1 shows the functions of JU1.

Table 1. JU1 Functions

| SHUNT LOCATION   | SHDN PIN              | MAX1921 OUTPUT                                         |
|------------------|-----------------------|--------------------------------------------------------|
| 1 and 2          | Connected to VIN      | MAX1921 enabled, VOUT = 1.8V                           |
| 2 and 3          | Connected to GND      | MAX1921 disabled, VOUT = 0V                            |
| Open             | Connected to SHDN pad | External signal enables or disables the MAX1921 output |

## Evaluating Other Output Voltages

The MAX1921 EV kit can be used to evaluate the MAX1921EUT15-T/25-T/30-T/33-Tand the MAX1920EUT-T. Replace MAX1921EUT18-T with a MAX1921EUT15-T/25T/30-T/33-T or MAX1920EUT-T. Table 2 lists the corresponding output voltages. To evaluate different output voltages, select L1, C2, C3, R1, and R2 for optimum performance according to the Design Procedure section of the MAX1920/MAX1921 data sheet.

Table 2. MAX1921 EV Kit Corresponding Output Voltage

| PART NUMBER    | MAX1921 EV KIT OUTPUT VOLTAGE (V)   |
|----------------|-------------------------------------|
| MAX1920EUT-T   | Adjustable                          |
| MAX1921EUT15-T | 1.5                                 |
| MAX1921EUT18-T | 1.8                                 |
| MAX1921EUT25-T | 2.5                                 |
| MAX1921EUT30-T | 3.0                                 |
| MAX1921EUT33-T | 3.3                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1921 Evaluation Kit

<!-- image -->

Figure 1. MAX1921 EV Kit Schematic

Figure 2. MAX1921 EV Kit Component Placement GuideComponent Side

<!-- image -->

<!-- image -->

Figure 3. MAX1921 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1921 Evaluation Kit

Figure 4. MAX1921 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600