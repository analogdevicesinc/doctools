<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX11501 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that contains a MAX11501 IC. The MAX11501 is a triple video filter and buffer for standard-definition television (SDTV) applications. The filter's passband is typically 8.6MHz. The MAX11501 includes a +6dB output buffer capable of driving 2VP-P into two standard 150 Ω loads.

The video input and output signals on the EV kit can be AC- or DC-coupled. The MAX11501 video input terminals are terminated at 75 Ω and the output terminals are 75 Ω back-terminated. The EV kit operates from a single 5V DC power supply. The MAX11501 EV kit can also evaluate the MAX11502 IC. Request a free sample from the factory when ordering the MAX11501 EV kit.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C105K    |
| C2-C5         |     4 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C6-C9         |     4 | 220µF ±20%, 6.3V OS-CON capacitors (8mm x 6.9mm) SANYO 6SVPA220MAA  |
| JU1-JU12      |    12 | 2-pin headers                                                       |
| R1-R7         |     7 | 75 Ω ±1% resistors (0603)                                           |
| R8, R9        |     2 | 150 Ω ±1% resistors (0603)                                          |
| R10, R11, R12 |     3 | 820k Ω ±5% resistors (0603)                                         |
| R13, R14, R15 |     3 | 120k Ω ±5% resistors (0603)                                         |

<!-- image -->

## Features

- ♦ Single 5V Supply Operation
- ♦ Output Buffer Drives Two 150 Ω Standard Video Loads with a +6dB Gain
- ♦ Standard-Definition Television Video Filter
- ♦ AC- or DC-Coupled Inputs and Outputs
- ♦ Standard 75 Ω Input/Output Terminations
- ♦ Also Evaluates the MAX11502 (after IC replacement)
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11501EVKIT+ | EV Kit |

## Component List

| DESIGNATION                                      |   QTY | DESCRIPTION                                                                         |
|--------------------------------------------------|-------|-------------------------------------------------------------------------------------|
| U1                                               |     1 | Maxim low-cost, 3-channel, standard-definition video filter MAX11501USA+ (8-pin SO) |
| CIN, COUT, CVBSIN, CVBSOUT1, CVBSOUT2, YIN, YOUT |     7 | 75 Ω BNC PCB mount connectors                                                       |
| GND                                              |     2 | Black PC mini test points                                                           |
| IN1, IN2, IN3, OUT1, OUT2, OUT3                  |     6 | Red PC mini test points                                                             |
| -                                                |    12 | Shunts                                                                              |
| -                                                |     1 | PCB: MAX11501 Evaluation Kit+                                                       |

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE             |
|-----------------------|--------------|---------------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com      |
| SANYO NA Corp.        | 619-661-6835 | www.sanyodevice.com |

Note: Indicate that you are using the MAX11501 when contacting these component suppliers.

## MAX11501 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 5V, 150mA DC power supply (VCC)
- Video signal generator (e.g., Tektronix TG-2000 or similar)
- The appropriate video measurement equipment

## Procedure

The MAX11501 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  no  shunts  are  installed  across  jumpers JU1, JU2, and JU3 (AC-coupled inputs).
- 2) Verify  that  no  shunts  are  installed  across  jumpers JU4-JU7 (AC-coupled outputs).
- 3) Verify  that  no  shunts  are  installed  across  jumpers JU8 and JU9 (normal operating mode).
- 4) Verify  that  no  shunts  are  installed  across  jumpers JU10, JU11, and JU12 (no DC bias input).
- 5) Connect the output of the video signal generator to the CVBSIN BNC connector on the MAX11501 EV kit.
- 6) Connect the CVBSOUT1 BNC connector on the EV kit to the input of the video measurement equipment.
- 7) Connect the power-supply ground to the GND pad on the EV kit.
- 8) Connect the 5V supply to the VCC pad on the EV kit.
- 9) Set the video signal generator for the desired video input signal. Since the input is AC-coupled and not biased, the signal should be a unipolar signal such as R, G, B, or Y.
- 10) Turn on the power supply and enable the video signal generator.
- 11) Analyze the video output signal.

## Detailed Description

The MAX11501 EV kit is a fully assembled and tested surface-mount PCB that contains a MAX11501 IC. The MAX11501 is a triple video filter and buffer for SDTV applications. The MAX11501 filter typically has 3dB attenuation at 8.6MHz and 50dB attenuation at 27MHz. The device includes a +6dB output buffer capable of driving a 2VP-P video signal into two standard 150 Ω loads.

The MAX11501 EV kit has three input channels to accept a full set of component video input signals. Each output from the MAX11501 EV kit is capable of driving a 75 Ω load. This is equivalent to driving two sets of 150 Ω loads in parallel.

All the input and output signals on the MAX11501 EV kit can be configured for AC- or DC-coupling. The EV kit's input terminals are 75 Ω terminated and the video output terminals are each back-terminated with 75 Ω .

## Jumper Selection

## Input Coupling (CVBSIN, YIN, and CIN)

The MAX11501 IC features a transparent clamp at the video inputs that allows either AC- or DC-coupling. If the input signal remains above ground, the transparent clamp is  inactive,  offering  true  DC input coupling. If the signal drops below ground, the inputs must be AC-coupled. The transparent clamp sets the sync tip just below ground.

The MAX11501 EV kit provides an option to configure the MAX11501 inputs to AC- or DC-coupling. Jumpers JU1, JU2, and JU3 configure the input coupling for the MAX11501 EV kit. See Table 1 for shunt positions.

## Table 1. JU1, JU2, and JU3 Jumper Selection (CVBSIN, YIN, and CIN)

| SHUNT POSITION   | COUPLING CONFIGURATION   |
|------------------|--------------------------|
| Installed        | DC-coupling              |
| Not installed*   | AC-coupling              |

*Default position.

## Output Coupling (CVBSOUT1, CVBSOUT2, YOUT, and COUT)

The MAX11501 EV kit provides an option to configure the MAX11501 outputs to AC- or DC-coupling. Jumpers JU4-JU7 configure  the  output  coupling  for  the MAX11501 EV kit. See Table 2 for shunt positions.

## Table 2. JU4-JU7 Jumper Selection (CVBSOUT1, CVBSOUT2, YOUT, and COUT)

| SHUNT POSITION   | COUPLING CONFIGURATION   |
|------------------|--------------------------|
| Installed        | DC-coupling              |
| Not installed*   | AC-coupling              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11501 Evaluation Kit

## Output Channel 2 and Channel 3 Load (OUT2 and OUT3)

The MAX11501 EV kit provides an option to demonstrate  the  dual-load  capability  on  output  channels 2 and 3 of the MAX11501. Jumpers JU8 and JU9 configure channels 2 and 3 output loads, respectively, on the MAX11501 EV kit. See Table 3 for shunt positions.

has to be applied after the AC-coupling capacitor to ensure that the clamp never operates. A 590mV DC bias voltage can be applied to the MAX11501 IC inputs by installing shunts across jumpers JU10, JU11, or JU12. To configure the inputs to a different DC bias voltage, replace resistors R13, R14, or R15. Refer to the MAX11501 IC data sheet for the DC bias voltage calculation. See Table 4 for input clamp configuration.

Table 3. JU8 and JU9 Jumper Selection (OUT2 and OUT3)

| SHUNT POSITION   | OUTPUT LOAD   |
|------------------|---------------|
| Installed        | 75 Ω *        |
| Not installed**  | 150 Ω         |

## Table 4. JU10, JU11, and JU12 Jumper Selection (IN1, IN2, and IN3)

| SHUNT POSITION   | DC BIAS LEVEL                               |
|------------------|---------------------------------------------|
| Installed        | DC bias enabled (use for bipolar signals)   |
| Not installed*   | DC bias disabled (use for unipolar signals) |

## MAX11502 Evaluation

The MAX11501 EV kit can also evaluate the MAX11502 IC. To evaluate the MAX11502, replace the IC (U1) with the MAX11502 IC. Refer to the MAX11501/MAX11502 IC data sheet for additional information.

## DC Bias for YPbPr Signals

When configuring the EV kit video inputs for AC-coupled operation, the correct DC bias point has to be chosen, depending on the input signal. Unipolar signals, such as R, G, B, and Y, are biased correctly using the MAX11501 internal transparent clamp. If the unipolar signals exceed the voltage defined in the IC data sheet, AC-coupling is recommended. For bipolar signals,  such  as  Pb  and  Pr,  a  constant  DC  bias  voltage

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11501 Evaluation Kit

Figure 1. MAX11501 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11501 Evaluation Kit

<!-- image -->

Figure 2. MAX11501 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11501 Evaluation Kit

Figure 3. MAX11501 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11501 Evaluation Kit

Figure 4. MAX11501 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7