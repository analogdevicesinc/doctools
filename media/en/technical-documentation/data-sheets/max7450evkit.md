<!-- lastmod 2022-08-03 -->
## General Description

The MAX7450 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a MAX7450. The MAX7450 is a low-cost, high-performance, complete front-end video-signal conditioner with automatic gain control (AGC) and a back-porch clamp to GND. The device includes an out-of-band noise filter,  blank-level clamp, loss-of-sync (LOS) detector, ±6dB of AGC, and an output buffer capable of  driving  either  a  150 Ω video load or a high-impedance load. These features optimize the video-signal quality  for  further  video  processing  through  a  crosspoint device or video decoder.

The MAX7450 EV kit can also evaluate the MAX7451. The EV kit operates from a dual ±5V power supply for the MAX7450 or ±3V power supply for the MAX7451.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| C1, C4        |     2 | 1µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K   |
| C2, C3, C5    |     3 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K |
| R1, R2        |     2 | 75.0 Ω ±1% resistors (0805)                                      |
| U1            |     1 | MAX7450ESA (8-pin SO with exposed paddle)                        |
| IN, OUT       |     2 | 75 Ω BNC PC-board mount jack connectors                          |
| JU1, JU2      |     2 | 2-pin headers                                                    |
| JU3, JU4      |     2 | 3-pin headers                                                    |
| None          |     4 | Shunts                                                           |
| None          |     1 | MAX7450 PC board                                                 |

<!-- image -->

Features

- ♦ Dual-Supply Operation MAX7450 (±5V) MAX7451 (±3V)
- ♦ Output Buffer Drives Standard Video Load or High-Impedance Load with 0dB or +6dB Gain
- ♦ Input Fault Detection with LOS Output
- ♦ AGC (±6dB Range)
- ♦ Standard 75 Ω Input/Output Termination
- ♦ Evaluates the MAX7451 (±3V VCC)
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX7450EVKIT | 0 ° C to +70 ° C | 8 SO-EP*     |

## Quick Start

## Recommended Equipment

- ±5V dual DC power supply
- Video-signal generator (e.g., Tektronix TG-2000)
- Video measurement equipment (e.g., Tektronix VM700A)

## Procedure

The MAX7450 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify  that  a  shunt  is  installed  across  jumper  JU1 (75 Ω input termination).

## Component Supplier

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX7450 EV kit when contacting this supplier.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX7450 Evaluation Kit

- 2) Verify  that  a  shunt  is  not  installed  across  jumper JU2 (75 Ω output termination).
- 3) Verify that a shunt is installed across pins 1 and 2 of jumper JU3 (gain = 2).
- 4) Verify that a shunt is installed across pins 2 and 3 of jumper JU4 (AGC enabled).
- 5) Connect the output of the video-signal generator to the IN BNC connector on the MAX7450 EV kit.
- 6) Connect the OUT BNC connector on the EV kit to the input of the video measurement equipment.
- 7) Connect both power-supply grounds to the GND pad.
- 8) Connect the +5V supply to the VCC pad on the EV kit.  Connect the -5V supply to the VSS pad on the EV kit.
- 9) Set the video signal generator for the desired video input signal, such as multiburst sweep. This signal must contain sync information (i.e., CVBS or Y).
- 10) Turn on the power supply and enable the video signal generator.
- 11) Analyze the video output signal with the VM-700A video measurement equipment.

## Detailed Description

The MAX7450 EV kit is a fully assembled and tested surface-mount circuit board that contains a MAX7450, which provides complete front-end video-signal conditioning. The MAX7450 is designed to improve the quality  of  standard-definition  video  signals.  The  MAX7450 also provides out-of-band noise filtering, LOS detection, back-porch clamping to ground, AGC that normalizes the sync amplitude to a standard video level, and an output buffer with selectable gains (0dB or +6dB).

The MAX7450 EV kit features an option to disable the AGC by setting the logic level at the AGCD pin of the MAX7450. When the AGC is enabled (AGCD = logic low), the video input signal is set to 1VP-P and then fed into the output buffer. When the AGC is disabled (AGCD = logic high), the video signal is fed straight into  the  output  buffer.  The  output  buffer  amplifies  the video signal with a gain of 1V/V or 2V/V according to the logic level at the GSET pin of the MAX7450.

An LOS test point is also provided on the EV kit. The LOS output is logic high when the sync signal is not present on the input for approximately 15 horizontal lines.

The video input channel on the MAX7450 EV kit is ACcoupled, while the video output channel is DC-coupled. Both the input and output channels can be terminated at  75 Ω with jumpers. The MAX7450 EV kit operates from a dual ±5V power supply.

The MAX7450 EV kit can also evaluate the MAX7451 after replacing IC U1. See the Evaluating the MAX7451 section for further details.

## Jumper Selection

## Input Termination

The MAX7450 EV kit features an option to terminate the video input channel to 75 Ω or open. Jumper JU1 selects the input termination on the MAX7450 EV kit. Table 1 lists the selectable jumper options.

## Table 1. JU1 Jumper Selection

| SHUNT POSITION   | VIDEO INPUT SIGNAL TERMINATION   |
|------------------|----------------------------------|
| Installed        | 75 Ω                             |
| Not installed    | High impedance                   |

## Output Termination

The MAX7450 EV kit features an option to terminate the video output channel to 75 Ω or 0 Ω . Jumper JU2 selects the output termination on the MAX7450 EV kit. Table 2 lists the selectable jumper options.

## Table 2. JU2 Jumper Selection

| SHUNT POSITION   |   BACK-MATCH RESISTOR VALUE ( Ω ) |
|------------------|-----------------------------------|
| Installed        |                                 0 |
| Not installed    |                                75 |

## Gain Selection

The MAX7450 EV kit features an option to select the video gain. Jumper JU4 (AGCD) controls the AGC enable and disable, while JU3 (GSET) sets the output buffer  gain  for  the  MAX7450  EV  kit.    Table  3  lists  the selectable jumper options.

## Table 3. JU3 and JU4 Gain-Control Settings

| SHUNT POSITION   | SHUNT POSITION   | V OUT         |
|------------------|------------------|---------------|
| JU3 (GSET)       | JU4 (AGCD)       | V OUT         |
| 2-3 (low)        | 2-3 (low)        | 1V P-P fixed  |
| 1-2 (high)       | 2-3 (low)        | 2V P-P fixed  |
| 2-3 (low)        | 1-2 (high)       | V OUT = V IN  |
| 1-2 (high)       | 1-2 (high)       | V OUT = 2V IN |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Evaluating the MAX7451

The MAX7450 EV kit can also evaluate the MAX7451.

## MAX7450 Evaluation Kit

To evaluate the MAX7451, replace U1 with a MAX7451 and power the EV kit with a ±3V power supply.

<!-- image -->

Figure 1. MAX7450 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7450 Evaluation Kit

<!-- image -->

Figure 2. MAX7450 EV Kit Component Placement GuideComponent Side

Figure 3. MAX7450 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX7450 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600