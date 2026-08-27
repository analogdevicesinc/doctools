<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX1577Z evaluation kit (EV kit) is a fully assembled and tested circuit for evaluating the MAX1577Z white LED 1x/2x charge pump. The MAX1577Z EV kit strobes a white LED at up to 1.1A using an on-board pulse generator. In movie mode, it drives the LED at a constant 220mA. The current levels are adjusted by changing a resistor. The EV kit can also be used to evaluate the MAX1577Y.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                      |
|---------------|-------|------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 2.2µF ±10%, 6.3V X5R ceramic capacitor (0603) Panasonic ECJ1VB0J225K TDK C1608X5R0J225K                          |
| C2            |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Panasonic ECJ1VB0J475K TDK C1608X5R0J475K                          |
| C3            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ106MG Panasonic ECJ2FB0J106M TDK C2012X5R0J106M |
| C4            |     1 | 0.047µF ±10%, 10V X7R ceramic capacitor (0402) Taiyo Yuden LMK105BJ473KV TDK C1005X7R1C473K                      |
| C5            |     1 | 0.01µF ±10%, X7R ceramic capacitor (0402) TDK C1005X7R1E103K or equivalent                                       |

- ♦ Selectable Flash/Movie Modes
- ♦ Up to 92% Efficiency (PLED / PBATT)
- ♦ 3% LED Current Regulation
- ♦ Adaptive 1x/2x Mode Switchover
- ♦ 2.7V to 5.5V Supply Voltage Range
- ♦ 8-Pin TDFN 3mm x 3mm IC Package
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE         |
|---------------|--------------|--------------------|
| MAX1577ZEVKIT | 0°C to +70°C | 8 TDFN (3mm x 3mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| D1            |     1 | White LED flash emitter Lumileds LXCL-PWF1               |
| D2            |     1 | Diode (SOD-323) Central CMDD4448                         |
| JU1, JU3      |     2 | 2-pin headers                                            |
| JU2           |     1 | 3-pin header                                             |
| R1            |     1 | 0.27 Ω ±1%, 0.25W resistor (0805) Panasonic ERJ-6RQFR27V |
| R2, R4, R5    |     3 | 100k Ω ±5% resistors (0402)                              |
| R3            |     1 | 10k Ω ±5% resistor (0402)                                |
| SW1           |     1 | Momentary pushbutton switch Panasonic EVQ-PHP03T         |
| U1            |     1 | MAX1577ZETA (8-pin TDFN, 3mm x 3mm) Top mark: AMQ        |
| U2            |     1 | MAX6422XS23-T (4-pin SC70)                               |
| None          |     3 | Shunts, 2-position                                       |
| None          |     1 | MAX1577ZEVKIT PC board                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Features

## MAX1577Z Evaluation Kit

## Table 1. Jumper Descriptions

| JUMPER   | SHORT 1-2                                                                                | SHORT 2-3                                                                                | OPEN                                                                                                                                                |
|----------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | EN1 connects to the output of the on-board pulse generator.                              | N/A                                                                                      | EN1 is pulled low by a 100k Ω resistor. EN1 can be driven from an external pulse generator connected to the EN1 pad on the left side of the EV kit. |
| JU2      | EN2 connects to the output of the on-board pulse generator.                              | EN2 connects to IN for movie mode.                                                       | EN2 is pulled low by a 100k Ω resistor. EN2 can be driven from an external pulse generator connected to the EN2 pad on the left side of the EV kit. |
| JU3      | Connects power to the on- board pulse generator.                                         | N/A                                                                                      | Power to the on-board pulse generator is disconnected. Leave JU3 open when measuring the quiescent current of the MAX1577Z.                         |
| JU4      | JU4 is shorted on the PC board and connects the white LED to the output of the MAX1577Z. | JU4 is shorted on the PC board and connects the white LED to the output of the MAX1577Z. | Cut the trace shorting JU4 to use an external LED, or when operating in voltage regulation mode.                                                    |

## Quick Start

## Recommended Equipment

- 2.7V to 5.5V power supply or battery capable of delivering 2.5A

## Procedure

Follow the steps below to verify board operation:

- 1) Verify  that  shunts  are  connected  across  pins  1-2 of jumpers JU1, JU2, and JU3.
- 2) Preset the power supply to 4.2V.
- 3) Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 4) Connect the positive power-supply terminal to the pad on the EV kit labeled IN.
- 5) Connect the power-supply ground terminal to the pad on the EV kit labeled GND.
- 6) Turn on the power supply. The LED will flash once due to the on-board pulse generator circuit powering up.
- 7) Press the button to flash the LED at 1.1A. The pulse generator limits the flash duration to approximately 125ms.
- 8) Move jumper JU2 to short pins 2-3 (selects movie mode).
- 9) Verify that the LED is lit.

## Detailed Description

## Adjusting the 100% Brightness Level

The LED current is adjusted by changing the resistor R1. Calculate the value of R1 with the following equation, where IOUT is the output current in amps for 100% brightness:

<!-- formula-not-decoded -->

For more information on setting the brightness, refer to the MAX1577Y/MAX1577Z data sheet.

## Control Inputs

The MAX1577Z has two inputs for selecting 100%, 33%, and 20% output current, or shutdown. Using JU1 and JU2 (see Table 1), these inputs can be connected to  the  output  of  the  on-board  pulse  generator for a strobed output, while EN2 can be connected to IN for movie mode, pulled low, or driven from an external pulse generator. With the default 100% current setting (R1 = 0.27 Ω ),  the  selectable output currents are described in Table 2.

## Table 2. Default Output Currents

| JU1   | JU2   | FUNCTION                      |
|-------|-------|-------------------------------|
| 1-2   | 1-2   | 1100mA Flash                  |
| 1-2   | 2-3   | 220mA Movie Mode/1100mA Flash |
| 1-2   | OPEN  | 367mA Flash                   |
| OPEN  | 1-2   | 220mA Flash                   |
| OPEN  | 2-3   | 220mA Movie Mode              |
| OPEN  | OPEN  | Shutdown                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1577Z Evaluation Kit

When using the on-board pulse generator, the LED flashes when power is first applied to the EV kit. This is due to the pulse generator circuit and not the MAX1577Z.

To use external pulse generators, remove the shunts from both JU1 and JU2, and connect the pulse generators  to  the  pads  labeled  EN1  and  EN2.  For  a  simple flash at 100% brightness, connect EN1 to EN2 and drive with a single pulse generator.

## Shutdown

To place the MAX1577Z in low-power shutdown mode, remove the shunt from both jumpers JU1 and JU2. For measuring quiescent current while in shutdown mode, also remove the shunt from JU3 to disconnect the onboard pulse generator from the supply.

## Connecting External LED(s)

To connect external LED(s) to the MAX1577Z EV kit, cut the trace shorting JU4. Connect the anode(s) of the external LED(s) to the pad labeled LED+. Connect the cathode(s) to the pad labeled GND.

## Evaluating the MAX1577Y

To evaluate the MAX1577Y, carefully remove the MAX1577Z from the EV kit and replace  with  the MAX1577Y. Free samples of the MAX1577Y are available from Maxim.

To evaluate the voltage regulation settings of the MAX1577Y, follow the procedure in the Voltage Regulation section.

## Voltage Regulation

The MAX1577Y/MAX1577Z can provide a constant voltage output. In voltage-regulation mode, the MAX1577Z has a fixed 5.1V output. The output voltage of the MAX1577Y is selected using JU1 and JU2. Refer to the MAX1577Y/MAX1577Z data sheet for more information.

To configure the MAX1577Z EV kit for voltage regulation, cut the trace shorting JU4. Connect the load from the pad labeled OUT to the pad labeled GND.

## Component Suppliers

| SUPPLIER              | PHONE        | WEB                   | COMPONENTS                      |
|-----------------------|--------------|-----------------------|---------------------------------|
| Central Semiconductor | 631-435-1110 | www.centralsemi.com   | Diodes                          |
| Kamaya                | 260-489-1533 | www.kamaya.com        | Resistors                       |
| Lumileds              | 408-435-6044 | www.lumileds.com      | LEDs                            |
| Panasonic             | 714-373-7939 | www.panasonic.com     | Capacitors, resistors, switches |
| Taiyo Yuden           | 408-573-4150 | www.t-yuden.com       | Capacitors                      |
| TDK                   | 847-803-6100 | www.component.tdk.com | Capacitors                      |
| Vishay                | 402-563-6866 | www.vishay.com        | Resistors                       |

Note:

Indicate that you are using the MAX1577Y/MAX1577Z when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1577Z Evaluation Kit

Figure 1. MAX1577Z EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1577Z Evaluation Kit

<!-- image -->

Figure 2. MAX1577Z EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1577Z Evaluation Kit

Figure 3. MAX1577Z EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1577Z Evaluation Kit

Figure 4. MAX1577Z EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7