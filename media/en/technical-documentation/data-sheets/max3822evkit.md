<!-- lastmod 2022-08-02 -->
## General Description

The MAX3822 evaluation kit (EV kit) is a fully assembled demonstration board that simplifies evaluation of the MAX3822 quad limiting amplifier. The EV kit is shipped from the factory with all components needed to interface with standard 50 Ω test equipment. The kit features on-board power-supply filtering and consumes approximately 240mA with a +3.3V supply. To facilitate evaluation of the MAX3822 at speed, the EV kit is laid out with 50 Ω controlled impedance on all signal lines.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                        |
|--------------------|-------|----------------------------------------------------|
| C1-C16, 21, 25, 28 |    19 | 0.1µF ± 10% 10V ceramic capacitors                 |
| C17-C20            |     4 | 0.033µF ± 10% 10V ceramic capacitors               |
| C26                |     1 | 33µF tantalum capacitor                            |
| C27                |     1 | 2.2µF ± 10% 10V ceramic capacitor                  |
| J1-J8, J10-J17     |    16 | SMA connectors (edge mount) EFJohnson 142-0701-801 |
| J9, J18-J22        |     6 | 3-pin headers (0.1in centers)                      |
| J23, J24           |     2 | Shunts                                             |
| J23, J24           |     2 | 2-pin headers (0.1in centers)                      |
| L1, L2             |     2 | 56nH SMD inductors                                 |
| LED1-LED5          |     5 | Red T1 packages                                    |
| R1-R5              |     5 | 150 Ω ± 1% resistors                               |
| R6                 |     1 | 100 Ω ± 1% resistor                                |
| R7                 |     1 | 1k Ω potentiometer                                 |
| R8                 |     1 | 200 Ω potentiometer                                |
| U1                 |     1 | MAX3822ECM 48-pin TQFP                             |
| VCC, GND           |     2 | Test points                                        |
| None               |     1 | MAX3822 evaluation circuit board, Rev C            |
| None               |     1 | MAX3822 data sheet                                 |
| None               |     1 | MAX3822 EV kit data sheet                          |

<!-- image -->

Features

- ♦ Fully Assembled and Tested
- ♦ Easy Loss-of-Power (LOP) Threshold Programming
- ♦ LOP Indicators
- ♦ Channel-Select Configuration Pins

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX3822EVKIT | 0°C to +85°C  | 48 TQFP      |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          |
|------------|--------------|--------------|
| Coilcraft  | 847-639-6400 | 847-639-1469 |
| Sprague    | 207-324-4140 | 603-224-1430 |

Note: Please indicate that you are using the MAX3822 EV kit when contacting these component suppliers.

## Quick Start

- 1) Set the channel-select (CS) pin to enable channel 1 by removing the shunt from J9.
- 2) Set the threshold level to mid-range by adjusting threshold control potentiometers R7 and R8 for 650 Ω measured between VTH and ground.
- 3) Enable the LOP and LOP1 indicators by placing shunts across the LED side of J22 and J18.
- 4) Ensure shunts on J23 and J24 are in place.
- 5) Connect ground and a +3.3V supply to the proper terminals on the EV kit.
- 6) Connect the inputs of channel 1 to a 50 Ω source using 50 Ω SMA cables. Set the source to produce a differential 50mVp-p 2.5Gbps signal.
- 7) Connect the outputs of channel 1 to a 50 Ω oscilloscope with 50 Ω SMA cables.
- 8) Power up the EV kit.
- 9) Check that the amplified and limited input pattern is present on the output.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX3822 Evaluation Kit

## Detailed Description

The MAX3822 EV kit contains all components necessary to evaluate the MAX3822 quad-limiting amplifier. The completely assembled and factory-tested EV kit features on-board power-supply filtering and operates from a single +3.3V supply. In quad-channel operation, the MAX3822 EV kit consumes approximately 240mA (current consumption drops to approximately 70mA for single-channel operation). The MAX3822 EV kit is shipped from the factory configured for interfacing with standard 50 Ω test equipment.

Side-mount  SMA  connectors  are  used  for  the MAX3822's signal I/O ports. To simplify interfacing to 50 Ω test  equipment, the EV kit provides AC-coupling for the MAX3822's CML inputs and outputs. All differential  input  and  output  data  paths  are  50 Ω controlledimpedance transmission lines.

The MAX3822 EV kit facilitates programming of the input signal level threshold with two potentiometers. Use R7 for coarse tuning and R8 for fine tuning. Test points and LEDs are provided for monitoring the MAX3822's LOP output. The LOP outputs are connected to the two pins on the OUT side of J18-J22.

Program the MAX3822's operational mode with J9. Single-,  dual-,  and  quad-channel operation is accom-

Table 1. Jumpers, Test Points, and Indicators

| NAME   | TYPE         | FUNCTION                                                                                                                                                                            |
|--------|--------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J9     | 3-pin header | Channel-Select Input. Leave all pins open to enable channel 1. Short pins 1 and 2 to activate channels 1 and 2. Short pins 2 and 3 to enable all four channels.                     |
| J18    | 3-pin header | Connects LOP LED Indicator to the LOP Output of Channel 1. Shunting pins on the LED side causes the LOP output to be connected to the LED and removing the shunt opens the LOP LED. |
| J19    | 3-pin header | Connects LOP LED Indicator to the LOP Output of Channel 2. Shunting pins on the LED side causes the LOP output to be connected to the LED and removing the shunt opens the LOP LED. |
| J20    | 3-pin header | Connects LOP LED Indicator to the LOP Output of Channel 3. Shunting pins on the LED side causes the LOP output to be connected to the LED and removing the shunt opens the LOP LED. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

plished by shunting (or removing the shunt from) the appropriate pins of J9. For single-channel operation, remove the shunt from J9 to enable channel 1. For dual-channel operation, shunt pins 1 and 2 on J9 to enable channels 1 and 2. For quad-channel operation, shunt pins 2 and 3 on J9 to enable all four channels. When in single- or dual-channel operation, the unused amplifiers are shut down and overall current consumption is reduced. If desired, current consumption can be further reduced by disabling the LOP diodes' drive current. Current is delivered to the LEDs through J18-J22. For example, to conserve current while in dual-channel operation, disable LEDs for channels 1 and 2 by removing the shunts from J18 and J19.

## Connections, Adjustments, and Controls

## Layout Considerations

The MAX3822 quad limiting amplifier is a high-gain, high-frequency device whose performance can be affected by poor board layout. The MAX3822 EV kit is fabricated on a four-layer board with controlled impedance transmission lines and separate power and ground planes. Supply noise filtering is done with inductive filtering  and decoupling capacitors placed close to the IC's VCC pins.

## MAX3822 Evaluation Kit

Table 1. Jumpers, Test Points, and Indicators (continued)

| NAME     | TYPE          | FUNCTION                                                                                                                                                                                                         |
|----------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J21      | 3-pin header  | Connects LOP LED Indicator to the LOP Output of Channel 4. Shunting pins on the LED side causes the LOP output to be connected to the LED and removing the shunt opens the LOP LED.                              |
| J22      | 3-pin header  | Connects the General LOP LED Indicator to the General LOP Output of Quad Limiting Amplifier. Shunting on the LED side causes the LOP output to be connected to the LED and removing the shunt opens the LOP LED. |
| J23      | 2-pin header  | Jumper from Power Supply to the Device V CC                                                                                                                                                                      |
| J24      | 2-pin header  | Jumper from Power Supply to the LEDs                                                                                                                                                                             |
| LED1     | LED           | LOP Indicator for Channel 1. Lights when limiting amplifier 1 is in the LOP state.                                                                                                                               |
| LED2     | LED           | LOP Indicator for Channel 2. Lights when limiting amplifier 2 is in the LOP state.                                                                                                                               |
| LED3     | LED           | LOP Indicator for Channel 3. Lights when limiting amplifier 3 is in the LOP state.                                                                                                                               |
| LED4     | LED           | LOP Indicator for Channel 4. Lights when limiting amplifier 4 is in the LOP state.                                                                                                                               |
| LOP LED5 | LED           | General LOP Indicator. Lights when any of the four limiting amplifiers is in the LOP state.                                                                                                                      |
| VCC      | Test point    | Power-Supply Connection                                                                                                                                                                                          |
| GND      | Test point    | Ground Connection                                                                                                                                                                                                |
| R7       | Potentiometer | Coarse Power-Detection Threshold Adjustment                                                                                                                                                                      |
| R8       | Potentiometer | Fine Power-Detection Threshold Adjustment                                                                                                                                                                        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3822 Evaluation Kit

Figure1. MAX3822 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX3822 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX3822 EV Kit PC Board Layout-Ground Plane

<!-- image -->

## MAX3822 Evaluation Kit

Figure 3. MAX3822 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX3822 EV Kit PC Board Layout-Power Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX3822

## MAX3822 Evaluation Kit

Figure 6. MAX3822 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6