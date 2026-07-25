<!-- lastmod 2022-08-03 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX117 evaluation kit (EV kit) is a fully assembled evaluation board for the 8-bit, 8-channel, +3V MAX117 analog-to-digital converter. Channel selection can be controlled by switches located on the board or by userprovided logic-level signals. An on-board oscillator provides continuous conversions, and the conversion results appear on the LED output display.

The MAX117 EV kit also evaluates the +5V MAX118. To evaluate the MAX118, order a MAX118 free sample, replace the MAX117 with the MAX118, and install the appropriate R9 resistor (see Component List).

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                    |
|--------------------|-------|----------------------------------------------------------------|
| C1, C4             |     2 | 22µF, 10V electrolytic capacitors                              |
| C2, C5-C8          |     5 | 0.1µF, 50V ceramic capacitors                                  |
| C3                 |     1 | 1000pF, 50V ceramic capacitor                                  |
| J1                 |     1 | 20-pin ribbon-cable connector                                  |
| JU1, JU4           |     2 | 3-pin jumper headers                                           |
| JU2, JU3, JU5-JU8  |     6 | 2-pin jumper headers                                           |
| LED1-LED8          |     8 | Red LEDs                                                       |
| N1                 |     1 | Low-R DS(ON) , N-channel FET International Rectifier IRML2402* |
| R1, R2, R3, R5, R6 |     5 | 100k Ω resistors                                               |
| R4, R7, R8         |     3 | 10k Ω resistors                                                |
| R9                 |     1 | 330 Ω , 10-pin SIP resistor (installed, used with MAX117)      |
| R9                 |     1 | 560 Ω , 10-pin SIP resistor (not installed, used with MAX118)  |
| R10                |     1 | 5.1k Ω resistor                                                |
| SW1                |     1 | 4-position DIP switch                                          |
| U1                 |     1 | MAX117CPI                                                      |
| U2                 |     1 | 74HC564 inverting 8-bit latch                                  |
| U3                 |     1 | 74HC04 hex inverter                                            |
| None               |     8 | Shunts                                                         |
| None               |     1 | Printed circuit board                                          |
| None               |     4 | Rubber feet                                                    |

*International Rectifier: (310) 322-3331

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' +3V (MAX117) or +5V (MAX118) Operation
- ' Fully Assembled and Tested
- ' On-Board Oscillator Generates Timing Signals
- ' LED Display of Conversion Results
- ' Low-Power Shutdown Mode

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE   |
|-----------------|---------------|--------------|
| MAX117EVKIT-DIP | 0°C to +70°C  | Through Hole |

Note:  To evaluate the MAX118, request a MAX118CPI free sample.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

Verify  operation of the MAX117 evaluation board by configuring for continuous conversions using the onboard oscillator. Take the following steps:

- 1) Verify that the jumpers are configured as shown in Table 1.
- 2) Connect a +3V, 100mA supply to the VDD pad. A 20mA supply is sufficient if the LED output display is  disabled.  To  evaluate  the  MAX118, use a +5V supply and replace the 330 Ω ,  10-pin  SIP  resistor (R9) with the 560 Ω SIP resistor included in the kit.
- 3) Connect an input signal to the AIN1 input pad.
- 4) On switch SW1, set A0, A1, and A2 to the on position and set PD to the off position (Table 3).
- 5) Observe the conversion results on the LED display as the input voltage is varied between ground and the supply voltage.

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800

## MAX117 Evaluation Kit

## Table 1. Jumper Configuration for Continuous-Conversion Operation

| JUMPER   | CONNECTION   | FUNCTION                                                         |
|----------|--------------|------------------------------------------------------------------|
| JU1      | 1 & 2        | Connects REF- to the drain of N1 (see the Shutdown section).     |
| JU2      | Open         | Sets the MAX117 for READ mode operation (MODE = low).            |
| JU3      | Shorted      | Enables the LED display.                                         |
| JU4      | 2 & 3        | Connects the CS pin to the on-board oscillator.                  |
| JU5      | Shorted      | Connects the MAX117's V DD pin to the on-board EV kit's VDD pad. |
| JU6      | Shorted      | Connects the RD pin to the on-board oscillator.                  |
| JU7      | Shorted      | Connects the MAX117's REF+ pin to VDD.                           |
| JU8      | Shorted      | Connects a pull-up resistor to the WR /RDY pin.                  |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## MAX117 Reference Voltage

The MAX117 reference can be connected to any voltage between VDD and ground (VREF+ ‡ VREF-). To use the  power-supply rails as the reference voltage, short jumper JU7 and install a shunt on JU1 (in either position).  When using an external reference, remove the shunts from JU1 and JU7, and apply your external reference source to the VREF+ and VREF- pads.

## Continuous Conversions

A 74HC04, configured as a free-running oscillator, provides the continuous-conversion signals ( CS and RD ) on the evaluation board. The oscillator output also clocks the MAX117 conversion results into a 74HC564 octal latch for display by eight LEDs.

The oscillator must be disconnected when the MAX117 is  controlled  by  external  circuitry.  Remove  the  shunts from jumpers JU4, JU6, and JU8 to disconnect the on-board oscillator. For additional flexibility,  the  digital signals and data outputs are available at the 20-pin connector, J1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Shutdown

When switch PD is set to the on position, the MAX117 enters shutdown mode. In shutdown mode, the supply current drops below 1µA (excluding the reference current). The internal resistance from REF+ to REF- is typically 2k Ω , and current will flow through it even when the MAX117 is shut down. The evaluation kit uses a lowRDS(ON), N-channel MOSFET (N1) to disconnect REFfrom ground when the MAX117's PWRDN pin is driven low. This MOSFET has less than 1 Ω of on-resistance at 2.7V VGS to prevent an excessive offset error from appearing at REF-. Jumper JU1 allows the user to remove N1 from the circuit to evaluate user-specific circuit configurations.

## Current Measurement

The current supplied to the board includes the current drawn by the MAX117, the on-board oscillator, the output latch, and the LED display. Jumper JU5 is in series with the MAX117 VDD pin to facilitate MAX117 supplycurrent measurements. Measure the MAX117 supply current or shutdown current by removing the shunt that normally shorts JU5, and connecting an ammeter across the two jumper pins. Refer to Table 2 for the appropriate jumper/switch settings.

Table 2. Jumper/Switch Settings for MAX117 Current Measurements

| CURRENT                                                    | JUMPERS        | JUMPERS   | SWITCH   |
|------------------------------------------------------------|----------------|-----------|----------|
| MEASUREMENT                                                | JU1            | JU7       |          |
| Supply Current, V REF = V DD (including reference current) | 2 & 3 or 1 & 2 | Shorted   | Off      |
| Supply Current (excluding reference current                | Open           | Open      | Off      |
| Power-Down Current                                         | 1 & 2          | N/A       | On       |

Table 3. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                                                                      |
|----------|------------|-------------------------------------------------------------------------------|
| JU1      | 1 & 2      | Connects REF- pin to the drain of MOSFET N1 (see the Shutdown section).       |
| JU1      | 2 & 3      | Connects REF- pin to ground.                                                  |
| JU2      | Open       | The MODE pin is pulled low internally or can be driven by external circuitry. |
| JU2      | Shorted    | Connects the MODE pin to V DD .                                               |
| JU3      | Open       | Disables the LED display.                                                     |
| JU3      | Shorted    | Enables the LED display.                                                      |
| JU4      | 1 & 2      | Connects the CS pin to ground.                                                |
| JU4      | 2 & 3      | Connects the CS pin to the on-board oscillator.                               |
| JU4      | Open       | The CS pin must be controlled by external logic.                              |
| JU5      | Open       | Connects an ammeter across the pins to measure the supply current.            |
| JU5      | Shorted    | Connects the MAX117's V DD pin to the VDD pad.                                |
| JU6      | Open       | The RD pin must be controlled by external logic.                              |
| JU6      | Shorted    | Connects the RD pin to the on-board oscillator.                               |
| JU7      | Open       | An external source must be connected to the REF+ pad.                         |
| JU7      | Shorted    | REF+ pin connected to V DD .                                                  |
| JU8      | Open       | No pull-up connected to the WR /RDY pin.                                      |
| JU8      | Shorted    | Connects a 5.1k Ω pull-up resis- tor to the WR /RDY pin.                      |

## MAX117 Evaluation Kit

## Jumper Selections

Jumpers JU1-JU8 allow the user various configuration options for the EV kit. Table 3 lists the various jumper functions.

## Switch Selections

The four-position DIP switch (SW1) is used to select an input channel and to enable/disable power-down mode. The address pins (A0-A2) and the power-down pin ( PWRDN )  are  pulled  up  to  VDD through a 100k Ω resistor. These pins are connected to ground when the associated switch (A0, A1, A2, or PD ) is in the on position. The switches must be in the off position for external  logic  to  control  input-channel  selection  or  powerdown mode.

Table 4. SW1 DIP Switch Selections

| A0   | A1   | A2   |     | INPUT CHANNEL                                                                                 |
|------|------|------|-----|-----------------------------------------------------------------------------------------------|
| On   | On   | On   | Off | IN1                                                                                           |
| Off  | On   | On   | Off | IN2                                                                                           |
| On   | Off  | On   | Off | IN3                                                                                           |
| Off  | Off  | On   | Off | IN4                                                                                           |
| On   | On   | Off  | Off | IN5                                                                                           |
| Off  | On   | Off  | Off | IN6                                                                                           |
| On   | Off  | Off  | Off | IN7                                                                                           |
| Off  | Off  | Off  | Off | IN8, analog input internally connected to REF+; or chan- nel selection controlled externally. |
| X    | X    | X    | On  | The MAX117 is in shutdown ( PWRDN grounded).                                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX117 Evaluation Kit

Figure 1.  MAX117 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX117 Evaluation Kit

Figure 2.  MAX117 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX117 Evaluation Kit

Figure 3.  MAX117 EV Kit PC Board Layout-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX117 Evaluation Kit

Figure 4.  MAX117 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX117 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600