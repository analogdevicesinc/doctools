<!-- lastmod 2022-08-04 -->
## General Description

The MAX1947 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board demonstrating the low-voltage, skip-mode boost converter. The EV kit provides a 1.8V output voltage capable of sourcing 270mA (typ) load current from a 0.7V to 3.6V input source. The MAX1947 features skip mode to optimize efficiency and battery life. It also contains internal MOSFETs for lower cost and size. The 1.2MHz (max) switching frequency allows the use of small external components. The MAX1947 EV kit is fully assembled and tested. The MAX1947 EV kit can be used to evaluate the MAX1947ETA25, MAX1947ETA30, and MAX1947ETA33 with no PC board modification.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| C1            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ106ME |
| C2            |     1 | 22µF ±20%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ226MG |
| C3            |     0 | Not installed, capacitor (0402)                                        |
| C4            |     1 | 100µF, 6.3V SP polymer Panasonic EEFUD0J101XR                          |
| JU1           |     1 | 3-pin header                                                           |
| L1            |     1 | 2.2µH, 1.2A, 55m Ω inductor Sumida CDRH3D16-2R2                        |
| U1            |     1 | MAX1947ETA18 (8-pin TDFN)                                              |
| None          |     1 | Shunt                                                                  |

True Shutdown is a trademark of Maxim Integrated Products, Inc.

<!-- image -->

## Features

- ♦ 0.7V to 3.6V Input Voltage Range
- ♦ 1.8V Output Voltage
- ♦ Up to 270mA Output Current
- ♦ No Current-Sense Resistor Needed
- ♦ 90% Efficiency
- ♦ Track Mode when VIN &gt; VOUT
- ♦ Internal MOSFET Switch and Synchronous Rectifier
- ♦ True Shutdown™
- ♦ 1.2MHz (max) Switching Frequency
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE         |
|--------------|--------------|--------------------|
| MAX1947EVKIT | 0°C to +70°C | 8 TDFN (3mm x 3mm) |

Note: To evaluate the MAX1947ETA25, MAX1947ETA30, or MAX1947ETA33, request a free sample with the MAX1947EVKIT.

## Quick Start

## Recommended Equipment

- 6V, 1A variable power supply
- Digital multimeter (DMM)
- Dummy load capable of sinking 200mA

## Procedure

The MAX1947 EV kit is fully assembled and tested. Follow these steps to verify board operation:

- 1) Preset the 6V power supply to 1.2V and turn off the power supply. Do not turn on the power supply until all connections are made.
- 2) Verify  that  there  is  a  shunt  across  pins  1  and  2  of JU1 on the MAX1947 EV kit for normal operation.

## Component Suppliers

| SUPPLIER    | COMPONENT   | PHONE           | WEBSITE                      |
|-------------|-------------|-----------------|------------------------------|
| Panasonic   | Capacitors  | 714-373-7366    | www.panasonic.co.jp/maco/en/ |
| Sumida      | Inductors   | 81-03-3667-3381 | www.sumida.com               |
| Taiyo Yuden | Capacitors  | 408-573-4150    | www.t-yuden.com              |
| TDK         | Capacitors  | 888-835-6646    | www.component.tdk.com        |

Note:

Indicate that you are using the MAX1947 when contacting these suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX1947 Evaluation Kit

- 3) Connect the positive lead of the power supply to the VBATT pad on the EV kit and the negative lead of the power supply to the GND pad on the EV kit.
- 4) Connect the positive lead of the DMM to the VOUT pad on the EV kit and the negative lead of the DMM to the GND pad on the EV kit to measure the output voltage.
- 5) Turn on the power supply and sweep the input voltage from 0.7V to 1.8V.
- 6) Verify that the output voltage is approximately 1.8V over the entire input range.
- 7) Set the power supply to 1V.
- 8) Connect the 200mA load between the VOUT and GND pads on the EV kit.
- 9) Verify that the output voltage is approximately 1.8V.

## Detailed Description

## RESET

The MAX1947 utilizes a push-pull RESET output to signal when the output voltage has reached its regulation point. RESET goes high 120ms after the output voltage reaches 90% of its regulation voltage. RESET pulls low immediately after the output falls below 90% of the regulation voltage.

## Shutdown

The MAX1947 features a True Shutdown mode to minimize quiescent current. During shutdown mode, the output is disconnected from the input and pulls to GND through an internal 500 Ω (typ)  resistor.  Place  a  shunt between positions 2 and 3 of JU1 to shut down the MAX1947. Place a shunt between positions 1 and 2 of JU1 for normal operation.

## Input Source

When using long input leads during bench evaluation, some oscillation can occur on the supply and translates to instability in the MAX1947 circuit. To counteract this, a bulk capacitor (C4) is added at the input to the circuit.  This  capacitor  is  not  needed  with  most  battery applications.

## Jumper Settings

## Table 1. Jumper JU1 Functions ( SHDN Control)

Figure 1. MAX1947 EV Kit Schematic

| SHUNT LOCATION   | SHDN PIN           | OPERATION        |
|------------------|--------------------|------------------|
| 1 and 2          | Connected to VBATT | Normal operation |
| 2 and 3          | Connected to GND   | Shutdown mode    |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1947 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX1947 Evaluation Kit

Figure 3. MAX1947 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1947 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

3