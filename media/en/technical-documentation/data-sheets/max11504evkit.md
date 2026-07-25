<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX11504 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that contains a MAX11504 IC. The MAX11504 is a 4-channel video reconstruction filter and buffer for standard-definition television (SDTV) applications. The filter's  passband is  typically  8.6MHz. The MAX11504 includes a +6dB output buffer capable of driving 2VP-P into two standard 150 Ω loads.

The video input and output signals on the EV kit can be AC- or DC-coupled. The MAX11504 video input terminals are terminated at 75 Ω and the output terminals are 75 Ω back terminated. The EV kit operates from a single 5V DC power supply. The MAX11504 EV kit can also evaluate the MAX11505 IC. Request a free MAX11505 IC  sample  from  the  factory  when  ordering  the MAX11504 EV kit.

| DESIGNATION                                  |   QTY | DESCRIPTION                                                                             |
|----------------------------------------------|-------|-----------------------------------------------------------------------------------------|
| C1                                           |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J105K TDK C1608X5R0J105K    |
| C2-C6, C12-C15                               |     9 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K TDK C1608X7R1C104KT |
| C7-C11                                       |     5 | 220µF ±20%, 6.3V aluminum electrolytic capacitors (6.3 x 6.0) SANYO 6CE220AX            |
| IN_1-IN_4, OUT_1A, OUT_1B, OUT_2, OUT_3,OUT4 |     9 | 75 Ω BNC PCB-mount connectors                                                           |

## Features

- ♦ Single 5V Supply Operation
- ♦ Output Buffer Drives Two 150 Ω Standard Video Loads with a +6dB Gain
- ♦ Four Standard-Definition Television Video Filters
- ♦ AC- or DC-Coupled Inputs and Outputs
- ♦ Standard 75 Ω Input/Output Terminations
- ♦ Also Evaluates the MAX11505 (After IC Replacement)
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11504EVKIT+ | EV Kit |

+Denotes lead-free and RoHS-compliant.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                                                        |
|--------------------|-------|------------------------------------------------------------------------------------|
| IN1-IN4, OUT1-OUT4 |     8 | Test points                                                                        |
| JU1-JU16           |    16 | 2-pin headers                                                                      |
| R1-R9              |     9 | 75 Ω ±1% resistors (0603)                                                          |
| R10, R11, R12      |     3 | 150 Ω ±1% resistors (0603)                                                         |
| R13-R16            |     4 | 820k Ω ±5% resistors (0603)                                                        |
| R17-R20            |     4 | 120k Ω ±5% resistors (0603)                                                        |
| U1                 |     1 | Four-channel, standard-definition video filter (10-pin µMAX ® ) Maxim MAX11504CUB+ |
| -                  |    16 | Shunts                                                                             |
| -                  |     1 | PCB: MAX11504 Evaluation Kit+                                                      |

## Component Suppliers

| SUPPLER                   | PHONE        | WEBSITE               |
|---------------------------|--------------|-----------------------|
| Murata Mfg. Co., Ltd.     | 770-436-1300 | www.murata.com        |
| SANYO North America Corp. | 619-661-6835 | www.sanyodevice.com   |
| TDK Corp.                 | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX11504 or MAX11505 when contacting these component suppliers.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## MAX11504 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 5V, 150mA DC power supply (VCC)
- Video signal generator (e.g., Tektronix TG-2000 or similar)
- Video measurement equipment (e.g., Tektronix VM700T or similar)

## Procedure

The MAX11504 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  no  shunts  are  installed  across  jumpers JU1-JU4 (AC-coupled inputs).
- 2) Verify  that  no  shunts  are  installed  across  jumpers JU5-JU8 (no DC bias input).
- 3) Verify  that  no  shunts  are  installed  across  jumpers JU9, JU10, JU11 (one video load).
- 4) Verify  that  no  shunts  are  installed  across  jumpers JU12-JU16 (AC-coupled outputs).
- 5) Connect the output of the video signal generator to the IN\_1 BNC connector on the MAX11504 EV kit.
- 6) Connect the OUT\_1A BNC connector on the EV kit to the input of the video measurement equipment.
- 7) Connect the power-supply ground to the GND pad on the EV kit.
- 8) Connect the 5V supply to the VCC pad on the EV kit.
- 9) Set the video signal generator for the desired video input signal. Since the input is AC-coupled and not biased, the signal should be a unipolar signal such as R, G, B, or Y.
- 10) Turn on the power supply, and enable the video signal generator.
- 11) Analyze the video output signal.

## Detailed Description of Hardware

The MAX11504 EV kit is a fully assembled and tested surface-mount PCB that contains a MAX11504 IC. The MAX11504 is a four-channel video reconstruction filter and buffer for SDTV applications. The MAX11504 filter typically has 3dB attenuation at 8.6MHz and 50dB attenuation at 27MHz. The device includes a +6dB output buffer capable of driving a 2VP-P video signal into two standard 150 Ω loads.

The MAX11504 EV kit has four input channels to accept composite and component video input signals. Each output from the MAX11504 EV kit is capable of driving a 75 Ω load to ground. This is equivalent to driving two sets of 150 Ω loads in parallel to ground.

All the input and output signals on the MAX11504 EV kit can be configured for AC- or DC-coupling. The EV kit's input terminals are 75 Ω terminated and the video output terminals are each back terminated with 75 Ω .

## MAX11505 Evaluation

The MAX11504 EV kit can also evaluate the MAX11505 IC. To evaluate the MAX11505, replace the IC (U1) with the MAX11505 IC. Refer to the MAX11505 IC data sheet for additional information.

## Jumper Selection

## Input Coupling

The MAX11504 IC features a transparent clamp at the video inputs that allows either AC- or DC-coupling. If the input signal remains above ground, the transparent clamp is  inactive,  offering  true  DC input coupling. If the signal drops below ground, the inputs must be AC-coupled. The transparent clamp will set the sync tip just below ground.

The MAX11504 EV kit provides an option to configure the MAX11504 inputs to AC- or DC-coupling. Jumpers JU1-JU4  configure  the  input  coupling  for  the MAX11504 EV kit. See Table 1 for shunt positions.

## Table 1. JU1-JU4 Jumper Selection

| SHUNT POSITION   | COUPLING CONFIGURATION   |
|------------------|--------------------------|
| Installed        | DC-coupling              |
| Not installed*   | AC-coupling              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11504 Evaluation Kit

## Output Coupling

The MAX11504 EV kit provides an option to configure the MAX11504 outputs to AC- or DC-coupling. Jumpers JU12-JU16 configure the output coupling for the MAX11504 EV kit. See Table 2 for shunt positions.

Table 2. JU12-JU16 Jumper Selection

| SHUNT POSITION   | COUPLING CONFIGURATION   |
|------------------|--------------------------|
| Installed        | DC-coupling              |
| Not installed*   | AC-coupling              |

## Output Channel 2, 3, and 4 Load (OUT\_2, OUT\_3, OUT\_4)

The MAX11504 EV kit provides an option to fully load the output channels (2, 3, and 4) of the MAX11504. Jumpers JU9, JU10, and JU11 configure channel 2, channel 3, and channel 4 output loads, respectively, on the MAX11504 EV kit. See Table 3 for shunt positions.

Table 3. JU9, JU10, JU11 Jumper Selection (OUT\_2, OUT\_3, OUT\_4)

| SHUNT POSITION   |   OUTPUT LOAD ( Ω ) |
|------------------|---------------------|
| Installed        |                  75 |
| Not installed*   |                 150 |

<!-- image -->

## DC Bias for YPbPr Signals

When configuring the EV kit video inputs for ACcoupled operation, the correct DC bias point has to be chosen, depending on the input signal. Unipolar signals, such as R, G, B, and Y, are biased correctly using the  MAX11504 internal transparent clamp. For bipolar signals, such as PB and PR, a constant DC bias voltage has to be applied after the AC-coupling capacitor to make sure that the clamp never operates. A 590mV DC bias voltage can be applied by installing shunts across jumpers JU5-JU8. To configure the inputs to a different DC bias voltage, replace resistors R17-R20. See Table 4 for input clamp configuration.

## Table 4. Input Clamp Operation (JU5-JU8)

| SHUNT POSITION   | EV KIT FUNCTION                              |
|------------------|----------------------------------------------|
| Installed        | DC bias enabled: Use for Pb, Pr signals      |
| Not installed*   | DC bias disabled: Use for R, G, B, Y signals |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11504 Evaluation Kit

Figure 1. MAX11504 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11504 Evaluation Kit

<!-- image -->

Figure 2. MAX11504 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11504 Evaluation Kit

Figure 3. MAX11504 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11504 Evaluation Kit

Figure 4. MAX11504 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7