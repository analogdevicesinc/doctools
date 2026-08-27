<!-- lastmod 2022-08-03 -->
## General Description

The MAX7452 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains the MAX7452. The MAX7452 is a low-cost, high-performance, complete front-end video-signal conditioner with  automatic  gain  control  (AGC)  and  a  useradjustable back-porch clamp. The device includes an out-of-band noise filter, back-porch clamp, loss-of-sync (LOS) detector, ±6dB of AGC, and an output buffer capable of driving either a 150 Ω video load or a highimpedance load. These features optimize the video signal quality for further video processing through a crosspoint device or video decoder. The EV kit operates from a single +5V power supply.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1            |     1 | 1µF ± 10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K    |
| C2, C3        |     2 | 0.1µF ± 10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K |
| IN, OUT       |     2 | 75 Ω PC board mount BNC connectors                                |
| JU1, JU2      |     2 | 2-pin headers                                                     |
| JU3, JU4      |     2 | 3-pin headers                                                     |
| R1, R2        |     2 | 75 Ω ± 1% resistors (0805)                                        |
| U1            |     1 | MAX7452ESA (8-pin SO-EP)                                          |
| -             |     4 | Shunts                                                            |
| -             |     1 | MAX7452 PC board                                                  |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE                |
|------------|--------------|--------------|------------------------|
| TDK        | 847-803-6100 | 847-390-4405 | www.component .tdk.com |

Note: Indicate that you are using the MAX7452 EV kit when contacting this supplier.

<!-- image -->

Features

- ♦ Single +5V Supply Operation
- ♦ Adjustable Back-Porch Clamp
- ♦ Output Buffer Drives Standard Video Load
- ♦ Jumper-Selectable Output Buffer Gain of 0dB or +6dB
- ♦ Input Fault Detection with LOS Output
- ♦ AGC (±6dB Range)
- ♦ Jumper-Selectable AGC Enable/Disable
- ♦ Standard 75 Ω Input/Output Termination
- ♦ Jumper-Selectable Input/Output Termination
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX7452EVKIT | 0 ° C to +70 ° C | 8 SO-EP*     |

## Quick Start

## Recommended Equipment

- +5VDC power supply
- Adjustable reference voltage (1V to 3V) or power supply
- Video-signal generator (e.g., Tektronix TG-2000)
- Video measurement equipment (e.g., Tektronix VM700A)

## Procedure

The MAX7452 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify  that  a  shunt  is  installed  across  jumper  JU1 (75 Ω input termination).
- 2) Verify  that  a  shunt  is  not  installed  across  jumper JU2 (75 Ω output series termination).
- 3) Verify that a shunt is installed across pins 1 and 2 of jumper JU3 (gain = 2).
- 4) Verify that a shunt is installed across pins 2 and 3 of jumper JU4 (AGC enabled).
- 5) Connect the output of the video-signal generator to the IN BNC connector on the MAX7452 EV kit.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX7452 Evaluation Kit

- 6) Connect the OUT BNC connector on the EV kit to the input of the video measurement equipment.
- 7) Connect the power-supply ground to the GND pad.
- 8) Connect the +5V supply to the VCC pad on the EV kit.
- 9) Connect the negative terminal of the adjustable reference voltage to the GND pad.
- 10) Connect the positive terminal of the adjustable reference voltage to the BPLVL pad.
- 11) Set the adjustable reference voltage to 1.8V.
- 12) Set the video-signal generator for the desired video input signal, such as multiburst sweep. This signal must contain sync information (i.e., CVBS or Y).
- 13) Turn on the power supply and the adjustable reference voltage and enable the video-signal generator.
- 14) Analyze the video output signal with the VM-700A video measurement equipment.

## Detailed Description

The MAX7452 EV kit is a fully assembled and tested surface-mount circuit board that contains a MAX7452. The MAX7452 provides complete front-end video-signal conditioning and is designed to improve the quality of standard-definition video signals. The MAX7452 also provides out-of-band noise filtering, LOS detection, user-adjustable back-porch clamp, AGC, and an output buffer with selectable gains of 0dB or +6dB.

The MAX7452 EV kit features an option to disable the AGC by setting the logic level at the AGCD pin of the MAX7452. The AGC adjusts the overall amplitude of the output signal until the sync amplitude equals the standard level. When the AGC is enabled (AGCD = logic low), the video input signal is set to 1VP-P and then fed into the output buffer. When the AGC is disabled (AGCD = logic high), the video input signal is fed into the output buffer without any adjustment of the gain. The output buffer amplifies the video signal with a gain of 1V/V or 2V/V, according to the logic level at the GSET pin of the MAX7452.

The MAX7452 EV kit has a feature to adjust the backporch level at the output. A BPLVL PC board pad is provided to apply a DC voltage that is used to set the back-porch level. The back-porch clamp output level is defined by the following equations:

<!-- formula-not-decoded -->

VBACKPORCHLEVEL = VBPLVL / 1.5

An LOS test point is also provided on the EV kit. The LOS output is logic high when the sync signal is not present, indicating a loss of signal on the input for approximately 15 horizontal lines.

The video input channel on the MAX7452 EV kit is ACcoupled, while the video output channel is DC-coupled. Both the input termination and output series termination can be configured with jumpers. The MAX7452 EV kit operates from a single +5V power supply.

## Jumper Selection

## Input Termination

The MAX7452 EV kit features an option to terminate the video input channel to 75 Ω or  unterminated. Jumper JU1 selects the input termination on the MAX7452 EV kit. Table 1 lists the selectable jumper options.

## Table 1. JU1 Jumper Selection

| SHUNT POSITION      | VIDEO INPUT SIGNAL TERMINATION   |
|---------------------|----------------------------------|
| Installed (default) | 75 Ω                             |
| Not installed       | Unterminated                     |

## Output Termination

The MAX7452 EV kit features an option to series terminate the video output channel to 75 Ω or unterminated. Jumper JU2 selects the output termination on the MAX7452 EV kit. Table 2 lists the selectable jumper options.

## Table 2. JU2 Jumper Selection

| SHUNT POSITION          | VIDEO OUTPUT SIGNAL TERMINATION   |
|-------------------------|-----------------------------------|
| Installed               | Unterminated                      |
| Not installed (default) | 75 Ω                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## AGC and Output Buffer Gain Selection

The MAX7452 EV kit features an option to select the AGC and output buffer gain. Jumper JU4 (AGCD) controls  the  AGC enable and disable, while jumper JU3 (GSET) sets the output buffer gain. Table 3 lists the selectable jumper options.

## MAX7452 Evaluation Kit

## Table 3. JU3 and JU4 Jumper Selection

| SHUNT POSITION   | SHUNT POSITION   | V OUT                  |
|------------------|------------------|------------------------|
| JU3 (GSET)       | JU4 (AGCD)       | V OUT                  |
| 2 and 3 (low)    | 2 and 3 (low)    | 1V P-P fixed           |
| 1 and 2 (high)   | 2 and 3 (low)    | 2V P-P fixed (default) |
| 2 and 3 (low)    | 1 and 2 (high)   | V OUT = V IN           |
| 1 and 2 (high)   | 1 and 2 (high)   | V OUT = 2V IN          |

<!-- image -->

Figure 1. MAX7452 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7452 Evaluation Kit

<!-- image -->

Figure 2. MAX7452 EV Kit Component Placement GuideComponent Side

Figure 3. MAX7452 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX7452 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600