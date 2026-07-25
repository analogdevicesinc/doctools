<!-- lastmod 2022-08-03 -->
## General Description

The MAX1818 linear regulator evaluation kit (EV kit) provides a regulated +1.8V output voltage from a +2.5V to +5.5V input source. It delivers up to 500mA output current.

The EV kit is a fully assembled and tested surfacemount PC board. It can also evaluate other preset voltages and other output voltages in the +1.25V to +5.0V range by using external resistors.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                    |
|---------------|-------|------------------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ± 10%, 10V X7R ceramic capacitor (0805) Taiyo Yuden LMK212BJ105KG                          |
| C2            |     1 | 4.7µF ± 20%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ475MG or TDK C2012X5R0J475M |
| R1            |     0 | Not installed (0603)                                                                           |
| R2            |     0 | Not installed, pads shorted with PC trace (0603)                                               |
| R3            |     1 | 100k Ω ± 5% resistor (0603)                                                                    |
| U1            |     1 | MAX1818EUT18 (6-pin SOT23)                                                                     |
| JU1           |     1 | 3-pin header                                                                                   |
| None          |     1 | Shunt                                                                                          |
| None          |     1 | MAX1818 PC board                                                                               |
| None          |     1 | MAX1818 EV kit data sheet                                                                      |
| None          |     1 | MAX1818 data sheet                                                                             |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |
| TDK         | 847-390-4373 | 847-390-4428 |

Note: Please indicate that you are using the MAX1818 when contacting these component suppliers.

- ♦ +2.5V to +5.5V Input Voltage Range
- ♦ Up to 500mA Output Current
- ♦

+1.8V Fixed Output Voltage (MAX1818EUT18) +1.25 to +5.0V Adjustable Output Voltage

- Output Voltage (External Divider)
- ♦ Power-OK Output
- ♦ 6-Pin SOT23 Package
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | IC-PACKAGE   |
|--------------|------------------|--------------|
| MAX1818EVKIT | 0 ° C to +70 ° C | 6 SOT23      |

Note: To evaluate the MAX1818EUT15, /20, /25, /33, or /50, request a MAX1818EUT15, /20, /25, /33, or /50 free sample with the MAX1818 EV kit. Refer to soldering information in Absolute Maximum Rating section of MAX1818 data sheet for mass production solder reflow advice.

## Quick Start

The MAX1818 EV Kit is fully assembled and tested. Follow these steps to verify board operation.

Do not turn on the power supply until all connections are completed.

- 1) Verify that the shunt is across pins 1 and 2 of jumper JU1 ( SHDN ) (Table 1).
- 2) Connect a voltmeter to the VOUT pad. Connect the ground to the GND pad closest to VOUT.
- 3) Connect a +2.5V to +5.5V supply to the VIN pad. Connect the supply ground to the GND pad closest to VIN.
- 4) Turn on the power supply, and verify that the output is the preset voltage: +1.8V.

To evaluate other voltages, refer to Evaluating Other Output Voltages .

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

## Features

## MAX1818 Evaluation Kit

## Detailed Description

The MAX1818 EV kit contains a low-dropout, linear regulator  circuit,  which  provides  a  +1.8V  output  from  a +2.5V to +5.5V input voltage. The EV kit provides up to 500mA output current. Power-OK will provide a logical low output when the output voltage falls below 93% of its nominal voltage.

The MAX1818 EV kit features a shutdown mode that reduces quiescent current to 0.1µA (typ) to preserve the battery life.

## Evaluating Other Output Voltages

The output voltage of the MAX1818 EV kit is preset to +1.8V. To generate an output voltage other than the preset output voltage, cut open the PC trace shorting R2, and install feedback resistors R1 and R2. Select R2 in the 25k Ω to 100k Ω range.

<!-- formula-not-decoded -->

where VSET = 1.25V.

The MAX1818 EV kit can also be used to evaluate the MAX1818EUT15, /20,  /25,  /33,  or  /50.  Replace MAX1818EUT18 with a MAX1818EUT15, /20, /25, /33, or /50. Hand soldering for single unit evaluation on the EV kit is  acceptable. Table 2 lists the corresponding output voltage.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN                              | MAX1818 OUTPUT                                 |
|------------------|---------------------------------------|------------------------------------------------|
| 1 and 2          | Connected to VIN                      | MAX1818 enabled, V OUT = +1.8V                 |
| 2 and 3          | Connected to GND                      | Shutdown mode, V OUT = 0V                      |
| None             | Connected external source to SHDN pad | MAX1818 output depends on external SHDN signal |

## Table 2. MAX1818 EV Kit Corresponding Output Voltage

| MAX1818 PART AND SUFFIX   | MAX1818 EV KIT FIXED OUTPUT VOLTAGE   |
|---------------------------|---------------------------------------|
| MAX1818EUT15              | +1.5V                                 |
| MAX1818EUT18              | +1.8V                                 |
| MAX1818EUT20              | +2.0V                                 |
| MAX1818EUT25              | +2.5V                                 |
| MAX1818EUT33              | +3.3V                                 |
| MAX1818EUT50              | +5.0V                                 |

Figure 1. MAX1818 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1818 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1818 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX1818 Evaluation Kit

Figure 3. MAX1818 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1818 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

3