<!-- lastmod 2022-08-03 -->
## General Description

The MAX4029 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that contains the MAX4029, which is a four-channel, 2:1, voltage-feedback multiplexer-amplifier with input clamps and a fixed gain of +2V/V (6dB). Channel 1 inputs are clamped to the video sync tip of their input signals, while the remaining inputs can be clamped to either the video sync tip of their respective input signals or the keyclamp voltage. The latter is referred to as key clamp. The EV kit operates from a single +5V power supply.

## Component List

| DESIGNATION                                                                             |   QTY | DESCRIPTION                                                         |
|-----------------------------------------------------------------------------------------|-------|---------------------------------------------------------------------|
| C1                                                                                      |     1 | 0.01µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H103K    |
| C2, C4-C11*                                                                             |     9 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K    |
| C3                                                                                      |     1 | 4.7µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J475K |
| R1-R12                                                                                  |    12 | 75.0 Ω ±1% resistors (1206) Panasonic ERJ-8ENF75R0V                 |
| R13                                                                                     |     1 | 2.2k Ω ±5% resistor (0603)                                          |
| R14                                                                                     |     1 | 10k Ω potentiometer 19 turn, 3/8in                                  |
| INPUT1A, INPUT1B, INPUT2A, INPUT2B, INPUT3A, INPUT3B, INPUT4A, INPUT4B, OUTPUT1-OUTPUT4 |    12 | 75 Ω BNC PC board-mount jack connectors                             |
| JU1-JU5                                                                                 |     5 | 3-pin headers                                                       |
| None                                                                                    |     5 | Shunts                                                              |
| None                                                                                    |     1 | MAX4029 PC board                                                    |
| U1                                                                                      |     1 | MAX4029EUP (20-pin TSSOP)                                           |

<!-- image -->

## Features

- ♦ Single +5V Operation
- ♦ Composite, S-Video, Component, or RGB Primaries
- ♦ Independently Selectable Sync-Tip or Key-Clamp Inputs
- ♦ Adjustable Key-Clamp Voltage
- ♦ Standard 75 Ω Input/Output Termination
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX4029EVKIT | 0 ° C to +70 ° C | 20 TSSOP     |

## Quick Start

## Recommended Equipment

- +5VDC power supply
- Color camera (e.g., Hitachi KPC551) or DVD player
- Oscilloscope

## Procedure

The MAX4029 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU1 (EV kit on).
- 2) Verify that a shunt is installed across pins 1 and 2 of jumper JU2 (channel A selected).
- 3) Verify that a shunt is installed across pins 2 and 3 of jumper JU3 (input 2A is key clamped).
- 4) Connect the color camera's Y/C OUT to the EV kit as follows:
- The yellow cable (LUMA) to the INPUT1A BNC connector on the EV kit.
- The white cable (CHROMA) to the INPUT2A BNC connector on the EV kit.
- 5) Set the lens switch of the color camera to video mode and connect the power cord to an appropriate AC power source.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## MAX4029 Evaluation Kit

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| Murata     | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Panasonic  | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Indicate that you are using the MAX4029 when contacting these component suppliers.

- 6) Connect the positive terminal of the DC power supply to the VCC pad on the EV kit. Connect the ground terminal of the DC power supply to the GND pad.
- 7) Turn on the DC power supply, and turn on the color camera's power switch.
- 8) Verify that OUTPUT1 of the EV kit has a luma signal with a sync tip using the oscilloscope.
- 9) Verify that OUTPUT2 of the EV kit has a chroma signal with a color burst using the oscilloscope.

## Detailed Description

The MAX4029 EV kit is a fully assembled and tested surface-mount PCB that contains the MAX4029, which is  a  four-channel,  2:1,  voltage-feedback multiplexeramplifier  with  input  clamps  and  a  fixed  gain  of  +2V/V (6dB). Channel 1 inputs (1A and 1B) are clamped to the video sync tip of their respective input signals. The remaining inputs can be clamped to either the video sync tip of their respective input signals (INPUT\_A or INPUT\_B) or the key-clamp voltage as described below. The latter clamp method is referred to as a key clamp.

The key-clamp voltage is adjustable between 0.9V to 1.6V by varying RKEYREF from 12.2k Ω to 2.2k Ω , respectively. RKEYREF is the total resistance (R13 and R14) from pin 6 to GND.

All the video input and output channels on the MAX4029 EV kit are terminated at 75 Ω impedance. All the video input channels are AC-coupled. AC-coupling the video input signal allows the EV kit to operate from a single +5V power supply without compromising the video quality.

## Applications Information

## Sync Tip and Key Clamps

The MAX4029 has AC-coupled inputs, with either a sync tip or key clamps, to provide bias for the video signal. Channel 1 of the MAX4029 always has a synctip clamp at the input, while the remaining channels are selectable as either sync tip or key clamps to accommodate  the  various  video  waveforms  (see  the Clamp/Key-Clamp Settings for Video Formats section).

The value of the sync-tip clamp voltage is set internally for the lowest value consistent with linear operation and cannot be adjusted. The key-clamp voltage is adjustable to compensate for variations in the voltage between component video inputs such as linear RGB, YPbPr, and Y-C, by varying RKEYREF. The key-clamp voltage can be calculated from Figure 1 or the following equation:

<!-- formula-not-decoded -->

In order for these clamps (sync tip or key) to work properly,  the  input  must  be  coupled with a 0.1µF capacitor (typ) having low leakage (2µA max). Without proper coupling,  the  clamp  voltage  will  change  during  the Horizontal line time causing the black level to vary, changing the image brightness from left to right on the display. In addition to the capacitor, a low resistance (&lt;75 Ω )  is  required on the source side to return the capacitor to ground. The clamps used here are active devices with the coupling capacitor serving two functions:  first,  as  a  charge  reservoir  to  maintain  the  clamp voltage, and second, as the compensation capacitor for the clamp itself. If an input is not used, it must be terminated to avoid causing oscillations that could couple to another input.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

## MAX4029 Evaluation Kit

In  general, a sync-tip clamp is used for composite video (Cvbs), gamma-corrected primaries (R'G'B'), and the luma signal (Y) in S-Video. A key clamp is preferred for component color difference signals (Pb &amp; Pr), linear primaries (RGB in PCs), and chroma (C) in S-Video. The rule is to sync-tip clamp a signal if sync is present and key clamp all others. Several examples are given in  the Clamp/Key-Clamp Settings for Video Formats section.

## Clamp/Key-Clamp Settings for Video Formats

Table 1 provides the clamp settings for the MAX4029 to interface with various video formats.

Figure 1. Key-Clamp Voltage vs. RKEYREF

## Table 1. MAX4029 Clamp Settings for Video Formats

|   INPUT | FORMAT   | CLAMP/KEY   |
|---------|----------|-------------|
|       1 | Cvbs1    | Clamp       |
|       2 | Cvbs2    | Clamp       |
|       3 | Cvbs3    | Clamp       |
|       4 | Cvbs4    | Clamp       |

|   INPUT | FORMAT   | CLAMP/KEY   |
|---------|----------|-------------|
|       1 | Gs       | Clamp       |
|       2 | R        | Key         |
|       3 | B        | Key         |
|       4 | Cvbs     | Clamp       |

Gs, B, R has sync only on green.

|   INPUT | FORMAT   | CLAMP/KEY   |
|---------|----------|-------------|
|       1 | Y        | Clamp       |
|       2 | Pr       | Key         |
|       3 | Pb       | Key         |
|       4 | Cvbs     | Clamp       |

|   INPUT | FORMAT   | CLAMP/KEY   |
|---------|----------|-------------|
|       1 | Cvbs     | Clamp       |
|       2 | G'       | Clamp       |
|       3 | B'       | Clamp       |
|       4 | R'       | Clamp       |

R', G', B' has sync on all.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

|   INPUT | FORMAT   | CLAMP/KEY   |
|---------|----------|-------------|
|       1 | H-Sync   | Clamp       |
|       2 | G        | Key         |
|       3 | B        | Key         |
|       4 | R        | Key         |

R, G, B has sync on none.

|   INPUT | FORMAT   | CLAMP/KEY   |
|---------|----------|-------------|
|       1 | Y        | Clamp       |
|       2 | C        | Key         |
|       3 | Cvbs     | Clamp       |
|       4 | Cvbs     | Clamp       |

<!-- image -->

## MAX4029 Evaluation Kit

## Jumper Selection

## Disable Mode ( DISABLE )

The MAX4029 EV kit features an option to disable all the video outputs on the EV kit. Jumper JU1 selects the disable mode for the MAX4029. Table 2 lists the selectable jumper options.

## Table 2. JU1 Jumper Selection

| SHUNT POSITION   | DISABLE PIN                 | EV KIT FUNCTION                                         |
|------------------|-----------------------------|---------------------------------------------------------|
| 1-2              | High                        | Enabled                                                 |
| 2-3              | Low                         | Disabled                                                |
| None             | Connected to external logic | DISABLE driven by external logic; disable is active low |

## Channel Select Input (A/ B )

The MAX4029 EV kit features an option to select between channels A or B inputs. Jumper JU2 selects the desired input channels for the MAX4029. Table 3 lists the selectable jumper options.

## Table 3. JU2 Jumper Selection

| SHUNT POSITION   | A/ B PIN                    | CHANNEL SELECTED              |
|------------------|-----------------------------|-------------------------------|
| 1-2              | High                        | A                             |
| 2-3              | Low                         | B                             |
| None             | Connected to external logic | A/ B driven by external logic |

## Clamp/Key-Clamp Selection for Channel 2 (CLAMP/ KEY \_2)

The MAX4029 EV kit features an option to select between clamp or key clamp for channel 2. Jumper JU3 selects between clamp/key-clamp settings. Table 4 lists the selectable jumper options.

Table 4. JU3 Jumper Selection

| SHUNT POSITION   | CLAMP/ KEY _2               | CHANNEL 2 CLAMP FUNCTION               |
|------------------|-----------------------------|----------------------------------------|
| 1-2              | High                        | Clamp                                  |
| 2-3              | Low                         | Key clamp                              |
| None             | Connected to external logic | CLAMP/ KEY _2 driven by external logic |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Clamp/Key-Clamp Selection for Channel 3 (CLAMP/ KEY \_3)

The MAX4029 EV kit features an option to select between clamp or key clamp for channel 3. Jumper JU4 selects between clamp/key-clamp settings. Table 5 lists the selectable jumper options.

## Table 5. JU4 Jumper Selection

| SHUNT POSITION   | CLAMP/ KEY _3               | CHANNEL 3 CLAMP FUNCTION               |
|------------------|-----------------------------|----------------------------------------|
| 1-2              | High                        | Clamp                                  |
| 2-3              | Low                         | Key clamp                              |
| None             | Connected to external logic | CLAMP/ KEY _3 driven by external logic |

## Clamp/Key-Clamp Selection for Channel 4 (CLAMP/ KEY \_4)

The MAX4029 EV kit features an option to select between clamp or key clamp for channel 4. Jumper JU5 selects between clamp/key-clamp settings. Table 6 lists the selectable jumper options.

## Table 6. JU5 Jumper Selection

| SHUNT POSITION   | CLAMP/ KEY _4               | CHANNEL 4 CLAMP FUNCTION               |
|------------------|-----------------------------|----------------------------------------|
| 1-2              | High                        | Clamp                                  |
| 2-3              | Low                         | Key clamp                              |
| None             | Connected to external logic | CLAMP/ KEY _4 driven by external logic |

<!-- image -->

## MAX4029 Evaluation Kit

<!-- image -->

Figure 2. MAX4029 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4029 Evaluation Kit

Figure 3. MAX4029 EV Kit Component Placement Guide-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4029 Evaluation Kit

<!-- image -->

Figure 4. MAX4029 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4029 Evaluation Kit

Figure 5. MAX4029 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-5, 8

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600