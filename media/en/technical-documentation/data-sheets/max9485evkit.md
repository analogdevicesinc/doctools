<!-- lastmod 2022-08-03 -->
## General Description

The MAX9485 evaluation kit (EV kit) evaluates the MAX9485, a programmable multiple-output clock generator.  The  EV  kit  provides  a  fixed  27MHz  reference clock output, CLK0, and two buffered clock outputs, CLK1 and CLK2. The output frequency is 256, 384, or 768 times the chosen sampling frequency selected through an I 2 C interface or hardwire pins. The sampling frequencies are 12kHz, 32kHz, 44.1kHz, 48kHz, 64kHz, 88.2kHz, and 96kHz. The EV kit operates from a single 3.3V power supply.

| DESIGNATION              |   QTY | DESCRIPTION                                                                                       |
|--------------------------|-------|---------------------------------------------------------------------------------------------------|
| C1, C2, C3               |     3 | 10µF ±20%, 6.3V X5R ceramic capacitors (0805) Taiyo Yuden JMK212BJ106MG TDK C2012X5R0J106M        |
| C4, C5, C6, C9, C10, C11 |     6 | 0.01µF ±10%, 16V X7R ceramic capacitors (0402) Taiyo Yuden EMK105BJ103K or Murata GRM36X7R103K016 |
| C7, C8, C17, C18, C19    |     0 | Not installed, ceramic capacitors (0402)                                                          |
| C12, C13, C14            |     3 | 0.001µF ±10%, 50V X7R ceramic capacitors (0402) TDK C1005X7R1H102K                                |
| C15, C16                 |     2 | 4.0pF ±0.25pF, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H4R0CT                              |

<!-- image -->

Features

- ♦ Low Single 3.3V Supply
- ♦ Controlled 50 Ω Coplanar Traces
- ♦ I 2 C Interface or On-Board Hardwire Options for Output Clock Selection
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX9485EVKIT | 0 o C to +70 o C | 20 TSSOP     |

## Component List

| DESIGNATION             |   QTY | DESCRIPTION                                                                           |
|-------------------------|-------|---------------------------------------------------------------------------------------|
| C20                     |     0 | Not installed, ceramic capacitor (0603)                                               |
| JU1-JU8                 |     8 | 3-pin headers                                                                         |
| JU9, JU10, JU11         |     3 | 2-pin headers                                                                         |
| R1                      |     0 | Not installed, resistor (0402)                                                        |
| U1                      |     1 | MAX9485EUP (20-pin TSSOP)                                                             |
| INPUT, CLK0, CLK1, CLK2 |     4 | SMA edge-mount connectors                                                             |
| Y1                      |     1 | Through-hole crystal resonator (with 14pF load capacitance) Ecliptek ECX-5527-27.000M |
| Y2                      |     0 | Not installed, SMD crystal resonator                                                  |
| -                       |     8 | Shunts                                                                                |
| -                       |     1 | MAX9485 PC board                                                                      |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Ecliptek    | 800-433-1280 | 714-433-1234 | www.ecliptek.com      |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Indicate that you are using the MAX9485 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX9485 Evaluation Kit

## Quick Start

The MAX9485 EV kit is fully assembled and tested. Do not turn on the power supplies until all connections are completed.

## Recommended Equipment

- 3.3V, 500mA power supply
- Optional 0.0V to 3.0V, 10mA power supply (for VCXO tuning)
- Frequency counter(s)/500MHz oscilloscope

## Procedure

- 1) Verify that there are no shunts across JU1 and JU2. Verify that a shunt is across on JU3 (pins 1 and 2). (Set CLK1 and CLK2 at 73.728MHz.)
- 2) Verify that there is no shunt across JU4, and there is a  shunt  across JU5 (pins 1 and 2). (CLK0, CLK1, and CLK2 are enabled.)
- 3) Verify that there are shunts on JU6 (pins 1 and 2) (hardwire mode), JU7 (pins 1 and 2) (internal power reset), and there is a shunt across JU8 (pins 1 and 2).
- 4) Verify that there is no shunt across JU9, JU10, and JU11.
- 5) Connect frequency counter(s) to the CLK0, CLK1, and/or CLK2 SMA connectors.
- 6) Connect the positive of the power supply to VDD, VDDP, and DVDD pads.
- 7) Connect the power ground to the GND pads.
- 8) Turn on the power supply, and enable frequency counter(s).
- 9) Verify output frequency CLK0 is around 27.000MHz, and CLK1 and CLK2 are around 73.728MHz.

## Detailed Description

The MAX9485 EV kit contains the MAX9485, a programmable multiple-output clock generator. Output CLK0 provides a fixed 27MHz-reference output, and CLK1 and CLK2 provide two buffered clock outputs of 256, 384, or 768 times the chosen sampling frequency selected through an I 2 C interface or on-board hardwire option. Jumpers JU6, JU7, and JU8 are incorporated to control MODE, RST ,  and  TUN pins of the MAX9485 device, respectively. See Table 1 for JU6 function, Table 2 for JU7 function, and Table 3 for JU8 function.

## Hardwire Mode

The EV kit provides on-board hardwire selection. Jumpers JU1-JU5 control pins SCL/FS0, SDA/FS1, FS2, SAO2, and SAO1, respectively. To set the EV kit at hardwire mode, make sure a shunt is across pins 1 and 2 of jumper JU6 (MODE = high). Jumper JU1 controls the sampling frequency, jumper JU2 controls the frequency-scaling factors, and jumper JU3 sets the sampling rate. See Table 4 for JU1, JU2, and JU3 functions.

Jumpers JU4 and JU5 control the SAO2 and SAO1 pins of  the  MAX9485 device, respectively. See Table 5 for JU5 function, and Table 6 for JU4 function.

## Software Mode

To use the I 2 C-compatible 2-wire interface, make sure a shunt is across pins 2 and 3 of jumper JU6 (MODE = low).  Leave jumpers JU1, JU2, and JU3 uninstalled. Connect the external I 2 C clock to SCL pad and I 2 C data to SDA pad. At software mode, jumpers JU4 and JU5 set an 8-bit register for the device address; see Table 7 for setting the device address. Refer to the Software Mode Programming section on the MAX9485 IC data sheet for control register bit mapping.

## Using External Clock as Reference Input

To use an external clock as reference input, remove the crystal on the board (Y1 or Y2), and install a 0 Ω resistor on R1 pads, then connect the external clock to the INPUT connector. In this case, the function of tuning output frequency is invalid.

## Table 1. JU6 Function (MODE)

| SHUNT LOCATION         | MODE PIN          | OPERATING MODE   |
|------------------------|-------------------|------------------|
| Pins 1 and 2 (default) | Connected to DVDD | Hardwire mode    |
| Pins 2 and 3           | Connected to GND  | Software mode    |

## Table 2. JU7 Function ( RST )

| SHUNT LOCATION         | RST PIN           | CHIP RESET FUNCTION             |
|------------------------|-------------------|---------------------------------|
| Pins 1 and 2 (default) | Connected to DVDD | On-chip internal power-on reset |
| Pins 2 and 3           | Connected to GND  | External reset                  |

## Table 3. JU8 Function (TUN)

| SHUNT LOCATION         | TUN PIN                                                              |
|------------------------|----------------------------------------------------------------------|
| Pins 1 and 2 (default) | TUN = DVDD.                                                          |
| Pins 2 and 3           | TUN = 0.0V.                                                          |
| Not installed          | To tune VCO frequency, apply a 0.0V to 3.0V power supply to TUN pad. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Table 4. JU1, JU2, and JU3 Functions

| JU1                     | SAMPLING FREQUENCY   | JU3                    | SAMPLING RATE   | CLK1 AND CLK2 FREQUENCY (MHz)   | CLK1 AND CLK2 FREQUENCY (MHz)   | CLK1 AND CLK2 FREQUENCY (MHz)   | CLK1 AND CLK2 FREQUENCY (MHz)   | CLK1 AND CLK2 FREQUENCY (MHz)   | CLK1 AND CLK2 FREQUENCY (MHz)   |
|-------------------------|----------------------|------------------------|-----------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|---------------------------------|
| JU1                     | f s (kHz)            |                        |                 | JU2                             | 256 x f s                       | JU2                             | 384 x f s                       | JU2                             | 768 x f s                       |
| Any Setting             | 12                   | Not installed          | Standard        | Pins 2 and 3                    | 3.072                           | Pins 1 and 2                    | 4.608                           | Not installed                   | 9.126                           |
| Pins 2 and 3            | 32                   | Pins 2 and 3           | Standard        | Pins 2 and 3                    | 8.1920                          | Pins 1 and 2                    | 12.2880                         | Not installed                   | 24.5760                         |
| Pins 1 and 2            | 44.1                 | Pins 2 and 3           | Standard        | Pins 2 and 3                    | 11.2896                         | Pins 1 and 2                    | 16.9344                         | Not installed                   | 33.8688                         |
| Not installed           | 48                   | Pins 2 and 3           | Standard        | Pins 2 and 3                    | 12.2880                         | Pins 1 and 2                    | 18.4320                         | Not installed                   | 36.8640                         |
| Pins 2 and 3            | 64                   | Pins 1 and 2           | Double          | Pins 2 and 3                    | 16.3840                         | Pins 1 and 2                    | 24.5760                         | Not installed                   | 49.1520                         |
| Pins 1 and 2            | 88.2                 | Pins 1 and 2           | Double          | Pins 2 and 3                    | 22.5792                         | Pins 1 and 2                    | 33.8688                         | Not installed                   | 67.7376                         |
| Not installed (default) | 96                   | Pins 1 and 2 (default) | Double          | Pins 2 and 3                    | 24.5760                         | Pins 1 and 2                    | 36.8640                         | Not installed (default)         | 73.7280                         |

## Table 5. JU5 Function (SAO1)

| SHUNT LOCATION         | SAO1 PIN          | CLK0     |
|------------------------|-------------------|----------|
| Pins 1 and 2 (default) | Connected to DVDD | Enabled  |
| Pins 2 and 3           | Connected to GND  | Disabled |
| Not installed          | Open              | Reserved |

## Table 7. Setting Device Address

| JU5           | SAO1 PIN          | JU4           | SAO2 PIN          | DEVICE ADDRESS   |
|---------------|-------------------|---------------|-------------------|------------------|
| Not installed | Open              | Not installed | Open              | 110 0000         |
| Pins 2 and 3  | Connected to GND  | Not installed | Open              | 110 0011         |
| Pins 1 and 2  | Connected to DVDD | Not installed | Open              | 110 0010         |
| Not installed | Open              | Pins 2 and 3  | Connected to GND  | 110 0100         |
| Pins 2 and 3  | Connected to GND  | Pins 2 and 3  | Connected to GND  | 110 1000         |
| Pins 1 and 2  | Connected to DVDD | Pins 2 and 3  | Connected to GND  | 111 0000         |
| Not installed | Open              | Pins 1 and 2  | Connected to DVDD | 111 0001         |
| Pins 2 and 3  | Connected to GND  | Pins 1 and 2  | Connected to DVDD | 111 0010         |
| Pins 1 and 2  | Connected to DVDD | Pins 1 and 2  | Connected to DVDD | 111 0100         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 6. JU4 Function (SAO2)

| SHUNT LOCATION   | SAO2 PIN          | CLK1     | CLK2     |
|------------------|-------------------|----------|----------|
| Pins 1 and 2     | Connected to DVDD | Disabled | Enabled  |
| Pins 2 and 3     | Connected to GND  | Enabled  | Disabled |
| Not installed    | Floating          | Enabled  | Enabled  |

## MAX9485 Evaluation Kit

## MAX9485 Evaluation Kit

Figure 1. MAX9485 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 2. MAX9485 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX9485 Evaluation Kit

Figure 3. MAX9485 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9485 Evaluation Kit

Figure 4. MAX9485 EV Kit PC Board Layout-Inner Layer 2 (GND Layer)

<!-- image -->

6

Figure 5. MAX9485 EV Kit PC Board Layout-Inner Layer 3 (DVDD Layer)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9485 Evaluation Kit

Figure 6. MAX9485 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7