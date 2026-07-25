<!-- lastmod 2022-08-03 -->
## General Description

The MAX9508 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a MAX9508 IC. The MAX9508 is a triple video reconstruction filter and quadruple amplifier for standard-definition television (SDTV) applications. The filter's passband is 6.75MHz. The four amplifiers each have a +6dB gain and can drive a 2VP-P video signal into two DC-coupled 150 Ω loads to ground or one AC-coupled 150 Ω load.

The MAX9508 EV kit can be configured to select between two sets of input signals: internal or external. The EV kit provides a connector that supports bidirectional  video  signals.  A  sync  tip  clamped  input  is  also available for processing external signals.

The MAX9508 includes a SmartSleep™ feature that reduces the supply current when no video input signal is detected or when any output load is removed.

The video input signals on the EV kit are DC-coupled. The video output signals from the EV kit can be DC- or AC-coupled. The MAX9508 video input terminals have a 75 Ω termination resistor to ground, and the output terminals have a 75 Ω back termination resistor. The EV kit operates from a single 2.7V to 3.6V DC power supply. The MAX9508 EV kit can also evaluate the MAX9512.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                            |
|---------------|-------|--------------------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K                                       |
| C4, C5        |     0 | Not installed, 1µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K (recommended)            |
| C6-C9         |     0 | Not installed,220µF ±20%,6.3V aluminum electrolytic capacitors (6.3mmx6mm) Sanyo 6CE220BS(recommended) |
| C10           |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M                                        |
| JU1-JU4       |     4 | 3-pin headers                                                                                          |
| R1-R12        |    12 | 75 Ω ±1% resistors (0603)                                                                              |

SmartSleep is a trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ Triple Standard-Definition Video Reconstruction Filters
- ♦ Quadruple Output Amplifiers with a +6dB Gain
- ♦ Two DC-Coupled 150 Ω Loads to Ground or One AC-Coupled 150 Ω Load
- ♦ SmartSleep Feature Reduces Power Consumption
- ♦ 2.7V to 3.6V Single-Supply Operation
- ♦ Bidirectional Video Signal Support
- ♦ DC-Coupled Inputs
- ♦ DC- or AC-Coupled Outputs
- ♦ Standard 75 Ω Input/Output Terminations
- ♦ Surface-Mount Components
- ♦ Also Evaluates the MAX9512 (After IC Replacement)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE    | IC PACKAGE          |
|--------------|---------------|---------------------|
| MAX9508EVKIT | 0°C to +70°C* | 16 TQFN (3mm x 3mm) |

## Component List

| DESIGNATION                                                                                                                                      |   QTY | DESCRIPTION                             |
|--------------------------------------------------------------------------------------------------------------------------------------------------|-------|-----------------------------------------|
| U1                                                                                                                                               |     1 | MAX9508ATE+ (16-pin TQFN, 3mm x 3mm)    |
| CHROMA_IN, CHROMA_OUTA, CHROMA_OUTB, CVBS_OUT1A, CVBS_OUT1B, CVBS_OUT2A, CVBS_OUT2B, EXTERNAL_CVBS, INTERNAL_CVBS, LUMA_IN, LUMA_OUTA, LUMA_OUTB |    12 | 75 Ω BNC PC board-mount jack connectors |
| -                                                                                                                                                |     4 | Shunts                                  |
| -                                                                                                                                                |     1 | MAX9508/MAX9512 EV kit PC board         |

1

## MAX9508 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Sanyo Electronic Device | 619-661-6835 | www.sanyodevice.com   |
| TDK                     | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9508 when contacting these suppliers.

## Quick Start

## Recommended Equipment

- 2.7V to 3.6V, 500mA DC power supply (VDD)
- Video signal generator
- Video measurement equipment (e.g., Tektronix VM700T or equivalent)

## Procedures

The MAX9508 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU1 (EV kit on).
- 2) Verify that a shunt is installed across pins 2 and 3 of jumper JU2 (SmartSleep disabled).
- 3) Verify that a shunt is installed across pins 2 and 3 of jumper JU3 (internal video selected).
- 4) The setting of jumper JU4 is ignored when Internal Video is selected.
- 5) Connect the output of the video signal generator to the LUMA\_IN BNC connector on the MAX9508 EV kit. The video signal must be biased so that the sync tip is at ground . A luma or composite video signal can be applied to LUMA\_IN.
- 6) Connect the LUMA\_OUTA BNC connector on the EV kit to the input of the video measurement equipment.
- 7) Connect the power-supply ground to the GND pad on the EV kit.
- 8) Connect the 2.7V to 3.6V DC power supply to the VDD pad on the EV kit.
- 9) Set the video signal generator for the desired video input signal.
- 10) Turn on the power supply, and enable the video signal generator.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 11) Analyze the video output signal with the video measurement equipment.

## Detailed Description

The MAX9508 EV kit is a fully assembled and tested surface-mount  circuit  board  that  contains  the MAX9508. The MAX9508 has three video reconstruction  filters  and  four  video  amplifiers  for  SDTV  applications. These filters and amplifiers process the chroma, luma, and composite video with blanking and sync (CVBS) video signals.

The MAX9508 EV kit can be configured to select between two sets of input signals: internal or external. When the internal video signals are selected, the MAX9508 filters and amplifies the input video signals at CHROMA\_IN, LUMA\_IN, and INTERNAL\_CVBS. The EV kit  provides the output video signals at the CHROMA\_OUTA, CHROMA\_OUTB, LUMA\_OUTA, LUMA\_OUTB, CVBS\_OUT1A, CVBS\_OUT1B, CVBS\_OUT2A, and CVBS\_OUT2B BNC connectors.

When the external video signal is selected, the MAX9508 filters and amplifies the input video signal at the EXTERNAL\_CVBS (JU4 set to 1-2) or CVBS\_OUT1B (bidirectional through capacitor C8, if present, and JU4 set to 2-3). The EV kit provides the output signal at the CVBS\_OUT2A and CVBS\_OUT2B BNC connectors. COUT and YOUT present 27k Ω to  ground when the external video mode is selected.

The MAX9508 includes a SmartSleep feature that reduces the supply current when no video input signal is detected, or when any output load is removed.

The MAX9508 filter's passband is 6.75MHz. The MAX9508's four internal amplifiers each have +6dB gain and can drive a 2VP-P video signal into two DCcoupled 150 Ω loads to ground or one AC-coupled 150 Ω load.

All the video input signal lines are DC-coupled, and the output signals from the EV kit can be DC- or AC-coupled. To AC-couple the outputs, remove the shorts across C6-C9 and install capacitors C6-C9. Note that AC-coupling will introduce line-time and field-time distortion to the video output signal. The MAX9508 video input terminals have a 75 Ω termination resistor to ground, and the output terminals have a 75 Ω back-termination resistor.

<!-- image -->

## MAX9512 Evaluation

The EV kit can also evaluate the MAX9512. To evaluate the MAX9512, replace IC U1 with the MAX9512 and refer to the MAX9512 IC data sheet for additional information. Note that both luma and composite video signals can be applied to the LUMA\_IN input on the EV kit.

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9508 IC. See Table 1 for shunt positions.

## Table 1. JU1 Jumper Selection ( SHDN )

| SHUNT POSITION   | SHDN PIN CONNECTED TO   | EV KIT FUNCTION   |
|------------------|-------------------------|-------------------|
| 1-2 (default)    | VDD                     | Enabled           |
| 2-3              | GND                     | Shutdown mode     |

## SmartSleep Mode (SMARTSLEEP)

Jumper JU2 provides an option to set the MAX9508 IC into the SmartSleep mode. See Table 2 for shunt positions.

## Table 2. JU2 Jumper Selection (SMARTSLEEP)

| SHUNT POSITION   | SMARTSLEEP PIN CONNECTED TO   | EV KIT FUNCTION   |
|------------------|-------------------------------|-------------------|
| 1-2              | VDD                           | SmartSleep mode   |
| 2-3 (default)    | GND                           | Normal mode       |

<!-- image -->

## MAX9508 Evaluation Kit

## Internal/External Video Input Signal ( INT /EXT)

Jumper JU3 provides an option that allows the MAX9508 to select between internal or external video input signals. See Table 3 for shunt positions.

## Table 3. JU3 Jumper Selection ( INT /EXT)

| SHUNT POSITION   | INT /EXT PIN CONNECTED TO   | VIDEO INPUT SIGNAL SOURCE   |
|------------------|-----------------------------|-----------------------------|
| 1-2              | VDD                         | External                    |
| 2-3 (default)    | GND                         | Internal                    |

## External Video Signals (EXTCVBSIN)

Jumper JU4 provides an option to select the external video signal to be processed. Two external video signals can be connected to the MAX9508 EV kit, one at the EXTERNAL\_CVBS BNC connector and the other at the CVBS\_OUT1B BNC connector. See Table 4 for shunt positions.

## Table 4. JU4 Jumper Selection (EXTCVBSIN)

| SHUNT POSITION   | EXTCVBSIN PIN CONNECTED TO     | EXTERNAL VIDEO SIGNAL SOURCE   |
|------------------|--------------------------------|--------------------------------|
| 1-2 (default)    | EXTERNAL_CVBS (through C3)     | External                       |
| 2-3              | CVBS_OUT1B (through C8 and C3) | Bidirectional                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9508 Evaluation Kit

Figure 1. MAX9508 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9508 Evaluation Kit

<!-- image -->

Figure 2. MAX9508 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9508 Evaluation Kit

Figure 3. MAX9508 EV Kit PC Board Layout-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9508 Evaluation Kit

Figure 4. MAX9508 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7