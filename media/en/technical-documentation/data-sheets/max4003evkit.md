<!-- lastmod 2022-08-03 -->
## General Description

The MAX4003 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX4003 RF detector in an 8-pin µMAX ® package. The MAX4003 EV kit includes an on-board shutdown control as well as quasi-measurement mode circuitry to provide an easy method to evaluate the MAX4000/ MAX4001/MAX4002. The RF input utilizes a 50 Ω SMA connector for convenient connection to test equipment. The MAX4003 EV kit can also be used to evaluate the MAX4000/MAX4001/MAX4002 RF-detecting controllers.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1, C3, C5    |     3 | 0.1µF ±20%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104M |
| C2            |     0 | Not installed (0402)                                             |
| C4            |     1 | 2200pF ±10%, 50V X7R ceramic capacitor (0402) TDK C1005X7R1H222K |
| C7, C8        |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H101J  |
| JU1, JU3      |     2 | 3-pin headers                                                    |
| JU2           |     1 | 2-pin header                                                     |
| R1            |     1 | 100 Ω ±1% resistor (0402)                                        |

<!-- image -->

## Features

- ♦ 2.7V to 5.5V Single-Supply Operation
- ♦ 50 Ω SMA Connector on RF Input
- ♦ On-Board Quasi-Measurement Mode Circuitry
- ♦ On-Board Shutdown Control
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART          | TYPE   | IC PACKAGE   |
|---------------|--------|--------------|
| MAX4003EVKIT+ | EV kit | 8 µMAX       |

Note: To evaluate the MAX4000, MAX4001, or MAX4002, request a MAX4000EUA, MAX4001EUA, or MAX4002EUA free sample with the MAX4003 EV kit.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                   |
|---------------|-------|-------------------------------|
| R2            |     1 | 52.3 Ω ±1% resistor (0402)    |
| R3, R9        |     2 | 0 Ω ±5% resistors (0402)      |
| R4            |     0 | Not installed (0402)          |
| R5, R6, R8    |     3 | 10.0k Ω ±1% resistors (0402)  |
| R7            |     1 | 14.0k Ω ±1% resistor (0402)   |
| RFIN          |     1 | SMA connector (PC edge-mount) |
| U1            |     1 | MAX4003EUA+ (8-pin µMAX)      |
| U2            |     1 | MAX4412EXK+ (5-pin SC70)      |
| -             |     3 | Shunts                        |
| -             |     1 | MAX4003 EV kit PC board       |

## Component Supplier

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Indicate that you are using the MAX4003 when contacting this component supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## MAX4003 Evaluation Kit

## Quick Start

## Recommended Equipment

- One variable DC power supply capable of supplying between 2.7V and 5.5V at 50mA
- One signal generator capable of delivering -45dBm to  0dBm at frequencies between 100MHz and 2.5GHz
- One voltmeter

## Procedure

The MAX4003 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Set the variable DC power supply to 3V.
- 2) Ensure that the variable DC power supply is turned off.
- 3) Connect the positive terminal of the variable DC power supply to the VCC pad. Connect the ground return of the variable DC power supply to the GND pad.
- 4) Set the signal generator to produce an output signal of 0dBm at a frequency of 100MHz.
- 5) Ensure that the signal generator is turned off.
- 6) Connect the signal generator to the PC edge-mount SMA connector marked RFIN.
- 7) Connect the positive terminal of the voltmeter to the OUT pad. Connect the ground return of the voltmeter to the GND pad.
- 8) Ensure that shunts are removed from jumper JU2.
- 9) Ensure that a shunt is placed across pins 1-2 of jumper JU3.
- 10) Ensure that a shunt is placed across pins 1-2 of jumper JU1.
- 11) Turn on the variable DC power supply.
- 12) Turn on/enable the output of the signal generator.
- 13) Verify  with  the  voltmeter  that  an  output  voltage  of 1.46V (±5%) is produced between both the OUT and GND pads.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

The MAX4003 EV kit is a fully assembled and tested surface-mount  circuit  board  that  evaluates  the MAX4003 RF detector. The MAX4003 EV kit can also be used to evaluate the MAX4000/MAX4001/MAX4002 RF-detecting controllers. The MAX4003 EV kit includes an on-board shutdown control as well as quasi-measurement mode circuitry to provide an easy method to evaluate the MAX4000/MAX4001/MAX4002. The RF input utilizes a 50 Ω SMA connector for convenient connection to test equipment.

## Evaluating the MAX4003

By default a MAX4003 is installed on the MAX4003 EV kit. To evaluate the MAX4003, remove the shunt on JU2 to  disconnect the quasi-measurement mode circuitry from the MAX4003. Place the shunt on pins 1-2 of JU1 to  connect pin 3 of the MAX4003 to ground. The voltage on the OUT pad reflects the power level of the RF input signal.

## Evaluating the MAX4000/MAX4001/MAX4002

## Evaluating the MAX4000

The MAX4003 can be replaced with the MAX4000 to allow an input range of -45dBm to 0dBm into 50 Ω . The modifications required are as follows:

- 1) Replace U1 with a MAX4000EUA.

## Evaluating the MAX4001 or MAX4002

The MAX4003 can be replaced with the MAX4001 to allow an input range of -35dBm to +10dBm in 50 Ω , or with the MAX4002 to allow an input range of -30dBm to +15dBm in 50 Ω . The modifications required are as follows:

- 1) Replace U1 with a MAX4001EUA or MAX4002EUA.
- 2) Replace R9 with a 33pF (0402) capacitor.

<!-- image -->

## MAX4000/MAX4001/MAX4002 Controller Mode

For operation in controller mode, both JU1 and JU2 should be removed. Use a DAC or external precision voltage supply to apply the set-point voltage to the SET pad. RFIN is connected to the RF source-power amplifier (PA) output through a directional couplerand the OUT pad is connected to the gain-control pin of  the  PA.  When  used in  controller  mode,  a  capacitor must be installed in C4 for loop stability (see the Filter Capacitor Selection section).

## MAX4000/MAX4001/MAX4002 Automatic Gain Control

To simulate an automatic gain-control (AGC) loop, a quasi-measurement mode can be implemented where the MAX4000/MAX4001/MAX4002 deliver an output voltage that is proportional to the log of the input signal (see the Quasi-Measurement Mode section). To establish  the  transfer  function  of  the  log  amp,  the  RF  input power level should be swept while the voltage at the SET pad is measured. This is the simplest method to validate operation of the evaluation board.

## Filter Capacitor Selection

When functioning as a PA controller, the MAX4000/ MAX4001/MAX4002 require some capacitance to maintain loop stability. Global system for mobile (GSM) applications require a control-loop bandwidth of at least 150kHz. Install a 2200pF capacitor at the location designated by C4 (located on the board's component side) to obtain this control-loop bandwidth. Refer to Figure 3 of the MAX4000/MAX4001/MAX4002 data sheet for alternative capacitor values.

## Quasi-Measurement Mode

In  the  quasi-measurement mode, the MAX4003 EV kit works as a log detector. This mode allows for easy measurement of RFIN versus the SET voltage and these measurements can then be used to find the intercept and slope required for the given application.

Place a shunt on pins 2-3 of JU1 and install a shunt across JU2 to enable the quasi-measurement mode, which connects the OUT voltage through an inverting op amp to the SET pin. The quasi-measurement mode yields a nominal relationship between RFIN and SET. See Table 1 for quasi-measurement mode shunt positions.

## Shutdown Control

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4003 Evaluation Kit

Table 1. Quasi-Measurement Mode Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| JU1      | Not installed    | Quasi-measurement mode disabled |
| JU1      | Pins 2-3         | Quasi-measurement mode enabled  |
| JU2      | Not installed    | Quasi-measurement mode disabled |
| JU2      | Installed        | Quasi-measurement mode enabled  |

Note: Shunts must be installed on both JU1 and JU2 to enable the quasi-measurement mode.

Jumper JU3 controls the CMOS-compatible shutdown pin ( SHDN )  of  the  MAX4003, which disables the MAX4003. Removing the shunt from JU3 allows the SHDN pin  to  be  driven  with  an  external  signal  source connected to the SHDN pad. See Table 2 for shutdown shunt positions.

## Layout Considerations

Table 2. Shutdown Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU3      | 1-2              | MAX4003 enabled                              |
| JU3      | 2-3              | MAX4003 disabled                             |
| JU3      | Not installed    | SHDN pin driven by an external signal source |

A good PC board is an essential part of RF circuit design. The MAX4003 EV kit PC board can serve as a guide for board layout using the MAX4000-MAX4003. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss due to the PC board. Each VCC node on the PC board should have its  own  decoupling capacitor. This minimizes supply coupling from one section of the PC board to another. Using a star topology for the supply layout, in which each VCC node in the circuit has a separate connection to the central VCC node, can further minimize coupling between sections of the PC board.

## MAX4003 Evaluation Kit

Figure 1. MAX4003 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX4003 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4a. MAX4003 EV Kit PC Board Layout-Ground Plane Layer 2

<!-- image -->

## MAX4003 Evaluation Kit

Figure 3. MAX4003 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4b. MAX4003 EV Kit PC Board Layout-Ground Plane Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4003 Evaluation Kit

Figure 5. MAX4003 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

Boblet