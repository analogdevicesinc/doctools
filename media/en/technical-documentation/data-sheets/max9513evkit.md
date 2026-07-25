<!-- lastmod 2022-08-03 -->
## General Description

The MAX9513 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed circuit board (PCB) that contains a MAX9513 IC. The MAX9513 is a video filter  amplifier  with  SmartSleep  and  bidirectional  video support for standard-definition television (SDTV) applications. The filter's passband is 6.75MHz. The two amplifiers each have +6dB gain and can drive a 2VP-P video signal into two DC-coupled 150 Ω loads to ground or one AC-coupled 150 Ω load.

The MAX9513 EV kit can be configured to select between two sets of input signals: internal or external.

The EV kit provides a connector that supports bidirectional  video  signals.  A  sync-tip  clamped  input  is  also available for processing external signals.

The MAX9513 includes a SmartSleep feature that reduces the supply current when no video input signal is detected or when an output load is removed.

The EV kit has two video input signals, one DC-coupled and one AC-coupled. The video output signals from the EV kit can be DC- or AC-coupled. The MAX9513 video input terminals have a 75 Ω termination resistor to ground and the output terminals have a 75 Ω back termination resistor. The EV kit operates from a single 2.7V to 3.6VDC power supply.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                 |
|---------------|-------|-------------------------------------------------------------------------------------------------------------|
| C1, C2, C3    |     3 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K or equivalent                              |
| C4            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M or equivalent                               |
| C5, C6        |     0 | Not installed, 220µF ±20%, 6.3V aluminum electrolytic capacitors (6.3mm x 6mm) SANYO 6CE220BS (recommended) |

<!-- image -->

## Features

- ♦ Standard-Definition Video Reconstruction Filters
- ♦ Dual Output Amplifier with a +6dB Gain
- ♦ Drives Two DC-Coupled 150 Ω Loads to Ground or One AC-Coupled 150 Ω Load
- ♦ SmartSleep Feature Reduces Power Consumption
- ♦ 2.7V to 3.6V Single-Supply Operation
- ♦ Bidirectional Video Signal Support
- ♦ Both AC- and DC-Coupled Inputs
- ♦ DC- or AC-Coupled Outputs
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE               |
|---------------|---------------|--------------------------|
| MAX9513EVKIT+ | 0°C to +70°C* | 16 TQFN-EP** (3mm x 3mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                               |
|---------------|-------|---------------------------------------------------------------------------|
| J1-J6         |     6 | 75 Ω BNC PCB-mount jack connectors                                        |
| JU1-JU4       |     4 | 3-pin headers                                                             |
| R1-R6         |     6 | 75 Ω ±1% resistors (0603)                                                 |
| U1            |     1 | Maxim CVBS video filter amplifier MAX9513ATE+ (16-pin TQFN-EP, 3mm x 3mm) |
| -             |     4 | Shunts                                                                    |
| -             |     1 | PCB: MAX9513 Evaluation Kit+                                              |

## Component Suppliers

| SUPPLIER                  | PHONE        | WEBSITE               |
|---------------------------|--------------|-----------------------|
| SANYO North America Corp. | 619-661-6835 | www.sanyodevice.com   |
| TDK Corp.                 | 847-803-6100 | www.component.tdk.com |

Note:

Indicate that you are using the MAX9513 when contacting these component suppliers.

## MAX9513 Evaluation Kit

## Quick Start

## Recommended Equipment

- 2.7V to 3.6V, 500mA DC power supply (VDD)
- Video signal generator
- Video measurement equipment (e.g., Tektronix VM700T or equivalent)

## Procedure

The MAX9513 EV kit is fully assembled and tested. Follow the steps below to verify board operation.

## Caution: Do not turn on the power supply until all connections are completed:

- 1) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU1 (EV kit on).
- 2) Verify  that  a  shunt  is  installed  across  pins  2-3  of jumper JU2 (SmartSleep disabled).
- 3) Verify  that  a  shunt  is  installed  across  pins  2-3  of jumper JU3 (internal video selected).
- 4) The setting of jumper JU4 is ignored when internal video is selected.
- 5) Connect the output of the video signal generator to the INTERNAL\_CVBS BNC connector on the MAX9513 EV kit. The video signal must be biased so that the sync tip is at ground. A luma or composite video signal can be applied to the INTERNAL\_CVBS BNC.
- 6) Connect the CVBS\_OUT1A BNC connector on the EV kit to the input of the video measurement equipment.
- 7) Connect the power-supply ground to the GND pad on the EV kit.
- 8) Connect the 2.7V to 3.6VDC power supply to the VDD pad on the EV kit.
- 9) Set the video signal generator for the desired video input signal and verify that the sync tip is at ground.
- 10) Turn on the power supply and enable the video signal generator.
- 11) Analyze the video output signal with the video measurement equipment.

## Detailed Description

The MAX9513 EV kit is a fully assembled and tested surface-mount PCB that contains a MAX9513 IC. The MAX9513 IC has a video reconstruction filter, a 2:1 mux, and two video amplifiers for SDTV applications. These filters and amplifiers process composite video signals with blanking and sync (CVBS).

The MAX9513 EV kit can be configured to select between two sets of input signals: internal or external. When the internal video signal is selected, the MAX9513 filters and amplifies the input video signal at INTERNAL\_CVBS. The EV kit outputs the video signal at  the  CVBS\_OUT1A, CVBS\_OUT1B, CVBS\_OUT2A, and CVBS\_OUT2B BNC connectors.

When the external video signal is selected, the MAX9513 clamps and amplifies the input video signal at EXTERNAL\_CVBS (JU4 set to 1-2) or CVBS\_OUT1B (bidirectional through capacitor C5, if present, and JU4 set to 2-3). The EV kit outputs the video signal at the CVBS\_OUT2A and CVBS\_OUT2B BNC connectors. CVBS\_OUT1 is internally connected to ground through a low-impedance switch when the external video mode is selected, thereby converting the 75 Ω back termination resistor into an input termination resistor.

The MAX9513 includes a SmartSleep feature that reduces the supply current when no video input signal is  detected, or when an output load is removed. SmartSleep only works in the internal mode and with DC-coupled loads.

The MAX9513 filter's passband is 6.75MHz. The MAX9513's internal amplifiers each have +6dB gain and can drive a 2VP-P video signal into two DC-coupled 150 Ω loads to ground, or one AC-coupled 150 Ω load.

The INTERNAL\_CVBS input signal line is DC-coupled and the EXTERNAL\_CVBS input signal line is AC-coupled. The output signals from the EV kit can be either DC- or AC-coupled. To AC-couple the outputs, remove the shorts across C5 and C6 and install 220µF capacitors at C5 and C6. Note that AC-coupling will introduce line-time and field-time distortion to the video output signal. The MAX9513 video input terminals have a 75 Ω termination resistor to ground and the output terminals have a 75 Ω back termination resistor.

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX9513 IC. See Table 1 for shunt positions.

## Table 1. JU1 Jumper Selection ( SHDN )

| SHUNT POSITION   | SHDN PIN CONNECTED TO   | EV KIT FUNCTION   |
|------------------|-------------------------|-------------------|
| 1-2*             | VDD                     | Enabled           |
| 2-3              | GND                     | Shutdown mode     |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## SmartSleep Mode (SMARTSLEEP)

Jumper JU2 provides an option to set the MAX9513 IC into SmartSleep mode. See Table 2 for shunt positions.

## Table 2. JU2 Jumper Selection (SMARTSLEEP)

| SHUNT POSITION   | SMARTSLEEP PIN CONNECTED TO   | EV KIT FUNCTION   |
|------------------|-------------------------------|-------------------|
| 1-2              | VDD                           | SmartSleep mode   |
| 2-3*             | GND                           | Normal mode       |

## Internal/External Video Input Signal ( INT /EXT)

Jumper JU3 provides an option that allows the MAX9513 to select between internal or external video input signals. See Table 3 for shunt positions.

## Table 3. JU3 Jumper Selection ( INT /EXT)

| SHUNT POSITION   | INT /EXT PIN CONNECTED TO   | VIDEO INPUT SIGNAL SOURCE   |
|------------------|-----------------------------|-----------------------------|
| 1-2              | VDD                         | External                    |
| 2-3*             | GND                         | Internal                    |

<!-- image -->

## MAX9513 Evaluation Kit

## External Video Signals (EXTCVBSIN)

Jumper JU4 provides an option to select the external video signal to be processed. Two external video signals can be connected to the MAX9513 EV kit: one at the EXTERNAL\_CVBS BNC and the other at the CVBS\_OUT1B BNC connector. See Table 4 for shunt positions.

## Table 4. JU4 Jumper Selection (EXTCVBSIN)

| SHUNT POSITION   | EXTCVBSIN PIN CONNECTED TO     | EXTERNAL VIDEO SIGNAL SOURCE   |
|------------------|--------------------------------|--------------------------------|
| 1-2*             | EXTERNAL_CVBS (through C2)     | External                       |
| 2-3              | CVBS_OUT1B (through C5 and C2) | Bidirectional                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9513 Evaluation Kit

Figure 1. MAX9513 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9513 Evaluation Kit

<!-- image -->

Figure 2. MAX9513 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9513 Evaluation Kit

Figure 3. MAX9513 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9513 Evaluation Kit

Figure 4. MAX9513 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7