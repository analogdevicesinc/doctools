<!-- lastmod 2022-08-03 -->
## General Description

The MAX4001 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX4001 RF-detecting controller in a 9-bump chipscale package (UCSP™). The MAX4001 EV kit includes on-board shutdown control as well as quasi-measurement mode circuitry to provide an easy method to evaluate the MAX4001. The RF input utilizes a 50 Ω SMA connector for convenient connection to test equipment. The MAX4001 EV kit can also be used to evaluate the MAX4000 and MAX4002 RF-detecting controllers.

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1, C3, C5    |     3 | 0.1µF ±20%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104M |
| C2            |     1 | Not installed (0402)                                             |
| C4            |     1 | 2200pF ±10%, 50V X7R ceramic capacitor (0402) TDK C1005X7R1H222K |
| C6            |     1 | 33pF ±5%, 50V C0G ceramic capacitor (0402) TDK C1005C0G1H330J    |
| C7, C8        |     2 | 100pF ±5%, 50V C0G ceramic capacitors (0402) TDK C1005C0G1H101J  |
| JU1, JU2      |     2 | 2-pin headers                                                    |
| JU3           |     1 | 3-pin header                                                     |
| R1            |     1 | 100 Ω ±1% resistor (0402)                                        |
| R2            |     1 | 52.3 Ω ±1% resistor (0402)                                       |

<!-- image -->

## Features

- ♦ 2.7V to 5.5V Single-Supply Operation
- ♦ 50 Ω SMA Connector on RF Input
- ♦ Low-Profile Design (0.65mm, max)
- ♦ On-Board Quasi-Measurement Mode Circuitry
- ♦ On-Board Shutdown Control
- ♦ Ultra-Compact Solution
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX4001EVKIT | 0°C to +70°C | 9 UCSP       |

Note: To evaluate the MAX4000 or MAX4002, request a MAX4000EBL  or  a  MAX4002EBL  free  sample  with  the MAX4001EVKIT.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                              |
|---------------|-------|------------------------------------------|
| R3            |     1 | 0 Ω ±5% resistor (0402)                  |
| R4            |     1 | Not installed (0402)                     |
| R5, R6, R8    |     3 | 10.0k Ω ±1% resistors (0402)             |
| R7            |     1 | 14.0k Ω ±1% resistor (0402)              |
| RFIN          |     1 | SMA connector (PC edge-mount)            |
| U1            |     1 | MAX4001EBL-T (9-bump UCSP) Top mark: ABE |
| U2            |     1 | MAX4412EXK-T (5-pin SC70) Top mark: ABH  |
| None          |     3 | Shunts                                   |
| None          |     1 | MAX4001 EV kit PC board                  |
| None          |     1 | MAX4000/MAX4001/MAX4002 data sheet       |
| None          |     1 | MAX4001 EV kit data sheet                |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX4001 when contacting this component supplier.

UCSP is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX4001 Evaluation Kit

## Quick Start

## Recommended Equipment

- One variable DC power supply capable of supplying between 2.7V and 5.5V at 50mA
- One signal generator capable of delivering -35dBm to  +10dBm at frequencies between 900MHz and 2.5GHz
- One voltmeter

## Procedure

The MAX4001 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Set the variable DC power supply to 3V.
- 2) Ensure that the variable DC power supply is turned off.
- 3) Connect the positive terminal of the variable DC power supply to the pad marked VCC. Connect the ground return of the variable DC power supply to the pad marked GND.
- 4) Set the signal generator to produce an output signal of 0dBm at a frequency of 2.5GHz.
- 5) Ensure that the signal generator is turned off.
- 6) Connect the signal generator to the edge-mount SMA connector marked RFIN.
- 7) Connect the positive terminal of the voltmeter to the pad marked SET. Connect the ground return of the voltmeter to the pad marked GND.
- 8) Ensure that shunts are installed across jumpers JU1 and JU2.
- 9) Ensure that a shunt is placed across pin 1 and pin 2 of jumper JU3.
- 10) Turn on the variable DC power supply.
- 11) Turn on/enable the output of the signal generator.
- 12) Verify  with  the  voltmeter  that  an  output  voltage  of 1.2V (±5%) is produced between the SET pad and the GND pad.

## Detailed Description

The MAX4001 EV kit is a fully assembled and tested surface-mount  circuit  board  that  evaluates  the MAX4001 RF-detecting controller. The MAX4001 EV kit includes on-board shutdown control as well as quasimeasurement mode circuitry to provide an easy method to evaluate the MAX4001. The RF input utilizes a 50 Ω SMA connector for convenient connection to test equipment. The MAX4001 EV kit can also be used to evaluate the MAX4000 and MAX4002 RF-detecting controllers.

For operation in controller mode, both JU1 and JU2 should be removed. Use a DAC or external precision voltage supply to apply the set-point voltage to the SET pad. Connect the RF source (the Power Amplifier (PA) output through a directional coupler) to the RFIN SMA connector. Connect the gain control pin of the PA to the OUT pad. When used in controller mode, a capacitor (C4) must be present for loop stability (see the Filter Capacitor Selection section).

To simulate an Automatic Gain-Control (AGC) loop, a quasi-measurement mode can be implemented where the MAX4001 delivers an output voltage that is proportional  to  the  log  of  the  input  signal  (see  the QuasiMeasurement Mod e  section).  To  establish  the  transfer function of the log amp, the RF input power level should be swept while the voltage at the SET pad is measured. This is the simplest method to validate operation of the evaluation board.

## Shutdown Control

Jumper JU3 controls the CMOS-compatible shutdown pin ( SHDN )  of  the  MAX4001, which disables the MAX4001. Removing the shunt from JU3 allows the SHDN pin  to  be  driven  with  an  external  signal  source connected to the SHDN pad (see Table 1 for shutdown shunt positions).

## Table 1. Shutdown Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU3      | 1-2              | MAX4001 enabled                              |
| JU3      | 2-3              | MAX4001 disabled                             |
| JU3      | Not Installed    | SHDN pin driven by an external signal source |

## Quasi-Measurement Mode

Enabling the quasi-measurement mode changes the MAX4001 EV kit function from a PA controller to a log detector. This mode allows for easy measurement of RFIN versus the SET voltage and these measurements can then be used to find the intercept and slope required for the given application.

Placing shunts across JU1 and JU2 enables the quasimeasurement mode (which connects the OUT voltage through an inverting op amp to the SET pin). The quasimeasurement mode yields a nominal relationship between RFIN and SET (see Table 2 for quasi-measurement mode shunt positions).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 2. Quasi-Measurement Mode Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| JU1, JU2 | Installed        | Quasi-measurement mode enabled  |
| JU1, JU2 | Not Installed    | Quasi-measurement mode disabled |

## Filter Capacitor Selection

When functioning as a PA controller, the MAX4001 requires some capacitance to maintain loop stability. Global System for Mobile (GSM) applications require a control-loop bandwidth of at least 150kHz. A 2200pF capacitor, C4, is installed to obtain this control-loop bandwidth. Refer to the Gain and Phase vs. Frequency graph in the Applications Information section of the MAX4000/MAX4001/MAX4002 data sheet for alternative capacitor values.

## Evaluating the MAX4000/MAX4002

## Evaluating the MAX4000

The MAX4001 can be replaced with the MAX4000 to allow an input range of -45dBm to 0dBm into 50 Ω . The modifications required are as follows:

- 1) Replace U1 with a MAX4000EBL.
- 2) Replace C6 with a 0 Ω (0402) resistor.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4001 Evaluation Kit

## Evaluating the MAX4002

The MAX4001 can be replaced with the MAX4002 to allow an input range of -30dBm to +15dBm in 50 Ω . The modifications required are as follows:

- 1) Replace U1 with a MAX4002EBL.

## Layout Considerations

A good PC board is an essential part of RF circuit design. The MAX4001 EV kit PC board can serve as a guide for laying out a board using the MAX4000/ MAX4001/MAX4002. Keep traces carrying RF signals as short as possible to minimize radiation and insertion loss due to the PC board. Each VCC node on the PC board should have its own decoupling capacitor. This minimizes supply coupling from one section of the PC board to another. Using a star topology for the supply layout, in  which each VCC node in the circuit has a separate connection to the central VCC node, can further minimize coupling between sections of the PC board.

## MAX4001 Evaluation Kit

Figure 1. MAX4001 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX4001 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX4001 EV Kit PC Board Layout-Ground Plane on Layers 2 and 3

<!-- image -->

## MAX4001 Evaluation Kit

Figure 3. MAX4001 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX4001 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5