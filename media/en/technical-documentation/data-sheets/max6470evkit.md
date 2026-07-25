<!-- lastmod 2022-08-03 -->
## General Description

The MAX6470 evaluation kit (EV kit) circuit features the MAX6470 low-dropout linear regulator with an integrated microprocessor reset output signal. The circuit provides a preset 3.3V output from a 3.6V to 5.5V input range and delivers 300mA of load current. The MAX6470 EV kit is a fully assembled and tested surface-mount circuit board that accommodates the MAX6470 IC in both the 6-pin SOT23 and 8-pin QFN packages. The EV kit board can also be used to evaluate  the  MAX6469-MAX6476 linear regulators. For output voltages less than 3.3V, the input voltage range can go down to 2.5V.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                                                    |
|----------------|-------|------------------------------------------------------------------------------------------------|
| C1             |     1 | 1µF ± 10%, 6.3V X5R ceramic capacitor (0603) Taiyo Yuden JMK107BJ105KA or TDK C1608X5R1A105K   |
| C2             |     1 | 3.3µF ± 10%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ335KG or TDK C2012X5R1A335K |
| C3             |     0 | Not installed, capacitor (0603)                                                                |
| C4             |     0 | Not installed, capacitor (0805)                                                                |
| R1, R2, R4, R5 |     0 | Not installed, resistors (0603)                                                                |
| R3             |     1 | 100k Ω ± 5% resistor (0603)                                                                    |
| U1             |     1 | MAX6470UT33BD3 (6-pin SOT23), top mark ABFG                                                    |
| U2             |     0 | Not installed (8-pin QFN)                                                                      |
| JU1, JU2       |     2 | 3-pin headers                                                                                  |
| None           |     2 | Shunts (JU1, JU2)                                                                              |
| None           |     1 | MAX6470 PC board                                                                               |
| None           |     1 | MAX6470 data sheet                                                                             |
| None           |     1 | MAX6470 EV kit data sheet                                                                      |

<!-- image -->

## Features

- ♦ Preset 3.3V Output
- ♦ Adjustable Output Voltage (1.2V to 5V)
- ♦ 300mA Output Current
- ♦ 57mV (typ) Dropout Voltage at 150mA Output Current
- ♦ Microprocessor RESET Output Signal with Timeout Period
- ♦ Supports 6-Pin SOT23 and 8-Pin QFN Packages
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX6470EVKIT | 0°C to +70°C | 6 SOT23      |

## Quick Start

The MAX6470 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed across pins 1 and 2 of jumpers JU1 ( SHDN ) and JU2 ( RESET ).
- 2) Connect voltmeters to the VOUT and RESET PC board pads.
- 3) Connect a 3.6V to 5.5V DC power supply to the VIN pad. Connect the supply ground to the GND pad.
- 4) Turn on the power supply.
- 5) Verify that VOUT and RESET each measure 3.3V.
- 6) Decrease the power supply to 2.8V.
- 7) Verify that RESET measures approximately 0V.

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Please indicate that you are using the MAX6470 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6470 Evaluation Kit

## Detailed Description

The MAX6470 EV kit is a fully assembled surface-mount circuit  board  that  contains  the  MAX6470 low-dropout linear voltage regulator. The circuit operates with a 3.6V to 5.5V supply range and is preset for an output voltage of 3.3V. The EV kit can supply up to 300mA of load current. At an output of 3.3V and 300mA load current, the maximum dropout voltage is 114mV. The preset output voltage can be adjusted by reconfiguring the feedback circuitry on the board.

The  MAX6470  EV  kit  board  can  evaluate  the MAX6469-MAX6476 low-dropout linear regulators in SOT23 or QFN packages with the preset output voltages ranging from 1.5V to 3.3V in 100mV increments. These devices consume only 82µA (typ) of supply current while providing up to 300mA of output current.

## Adjusting the Output Voltage

VOUT can be adjusted by cutting open the trace across resistor R2 and installing feedback resistors R1 and R2. The equation to adjust the output voltage is the following:

<!-- formula-not-decoded -->

where VSET = 1.23V

Resistor R2 must be 50k Ω or less to maintain stability, accuracy, and high-frequency power-supply rejection. VOUT can be adjusted from 1.23V (VSET) to 5V.

## Shutdown Input

The EV kit features a logic SHDN input that allows the regulator to shut down, thus reducing the total input current consumption of the device. In shutdown mode, the pass transistor, control circuit, reference, and all biases are turned off, reducing the supply current to below 1µA. Jumper JU1 can be used to shutdown or enable the linear regulator. See Table 1 for jumper JU1 configurations.

## Table 1. Jumper JU1

| SHUNT LOCATION   | SHDN PIN                         | EV KIT OPERATION              |
|------------------|----------------------------------|-------------------------------|
| 1 and 2          | Connected to VIN                 | U1 enabled                    |
| 2 and 3          | Connected to GND                 | Shutdown mode                 |
| None             | Connected to external controller | External controller sets mode |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Reset Output

The microprocessor supervisory reset circuitry is fully integrated into the MAX6470UT\_ \_BD3 ICs. The opendrain RESET output asserts a logic low when VOUT is 12.5% below the nominal voltage output. The circuit also asserts the RESET output during power-up, powerdown, and brownout conditions. Jumper JU2 is provided to pull the RESET signal up to VOUT or to an external voltage connected to the VREF pad. See Table 2 for jumper JU2 configuration.

## Table 2. Jumper JU2

| SHUNT LOCATION   | EV KIT OPERATION                  |
|------------------|-----------------------------------|
| 1 and 2          | RESET logic high = V OUT          |
| 2 and 3          | RESET logic high = external V REF |

## PC Board Dual Circuitry

The  MAX6470  PC  board  accommodates  the MAX6469-MAX6476 ICs in both a 6-pin SOT23 package and an 8-pin QFN package. The MAX6470 board layout features the dual circuitry in parallel. The SOT23 circuit is populated and fully functional. The QFN circuit is  left  unpopulated of all components. The two PC board circuits share all the input and output connections except for the resistor feedback networks.

To evaluate the IC in the QFN package, remove the linear regulator U1 and install the QFN package on the U2 PC board pad. The preset output can now be evaluated. If the output voltage needs to be adjusted, cut the trace on R5 and install resistors R4 and R5 to configure the desired output voltage at VOUT. It is recommended that capacitors C1 and C2 be removed and capacitors C3 and C4 be installed to reduce trace impedance from the input and output connections. Output capacitors C3 and C4 must be low-ESR components. It is also recommended for capacitor C4 to be a minimum of 3.3µF.

## Additional Features

The MAX6469-MAX6476 ICs are similar but do differ in their pinout configurations. For specific pinout information, refer to the MAX6469-MAX6476 data sheet.

<!-- image -->

## MAX6470 Evaluation Kit

<!-- image -->

Figure 1. MAX6470 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6470 Evaluation Kit

<!-- image -->

Figure 2. MAX6470 EV Kit Component Placement GuideComponent Side

Figure 3. MAX6470 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX6470 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4