<!-- lastmod 2022-08-03 -->
## General Description

The MAX9541 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that evaluates the MAX9541 quadruple-channel, 2:1 video mux amplifiers with input sync tip clamps and fixed gain of 2V/V (6dB). The MAX9541 has integrated lowpass filters that are optimized for standard-definition video signals such as composite and RGB. The EV kit features a shutdown mode to control the device operation. The EV kit features a channel-select input to select between two standard-definition video sources that can each have up to four  video  signals.  The  EV  kit  operates  from  a  singlesupply voltage of 2.7V to 3.6V.

The MAX9541 EV kit can also be used to evaluate the MAX9542, which is similar to the MAX9541 except that it  does not have integrated lowpass filters. To evaluate the MAX9542, request a free sample with the MAX9541 EV  kit  and  replace  U1  with  the  pin-compatible MAX9542 IC.

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1-C8, C10    |     9 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K Murata GRM188R71C104K    |
| C9            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M Taiyo Yuden JMK212BJ106MG |
| C11-C14       |     0 | Not installed, aluminum electrolytic capacitors (10mm x 7.7mm)                            |

<!-- image -->

## Features

- ♦ 2.7V to 3.6V Single-Supply Operation
- ♦ AC-Coupled Video Inputs
- ♦ Shutdown Mode
- ♦ Channel-Select Input
- ♦ Standard 75 Ω Input/Output Termination
- ♦ Surface-Mount Components
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX9541EVKIT+ | EV Kit |

## Component List

| DESIGNATION                                       |   QTY | DESCRIPTION                                              |
|---------------------------------------------------|-------|----------------------------------------------------------|
| INPUT0A-INPUT3A, INPUT0B-INPUT3B, OUTPUT0-OUTPUT3 |    12 | 75 Ω BNC PCB-mount connectors                            |
| JU1, JU2                                          |     2 | 3-pin headers                                            |
| R1-R12                                            |    12 | 75 Ω ±1% resistors (0603)                                |
| U1                                                |     1 | Quadruple 2:1 mux amplifiers (16 QSOP) Maxim MAX9541AEE+ |
| -                                                 |     2 | Shunts (JU1, JU2)                                        |
| -                                                 |     1 | PCB: MAX9541 Evaluation Kit+                             |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.co        |

Note:

Indicate that you are using the MAX9541 when contacting these component suppliers.

## MAX9541 Evaluation Kit

## Quick Start

## Recommended Equipment

- 2.7V to 3.6V DC power supply (VDD)
- Four composite video signal generators
- Video measurement equipment (e.g., Tektronix VM700T or equivalent)

## Procedure

The MAX9541 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on power supplies until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  pins  1-2  of jumper JU1 (EV kit enabled).
- 2) Verify  that  a  shunt  is  installed  across  pins  2-3  of jumper JU2 (Video Input A selected).
- 3) Connect the positive terminal of the DC power supply to the VDD pad on the EV kit. Connect the ground terminal of the DC power supply to the GND pad.
- 4) Connect the composite video test signals from the video signal generators to the INPUT0A-INPUT3A BNC connectors.
- 5) Connect the output signals from the OUTPUT0OUTPUT3 BNC connectors to the inputs of the video measurement equipment.
- 6) Turn on the power supply and turn on the signal generators.
- 7) Verify the output signals.
- 8) Reconfigure the composite video cable connections as required to test the Video Input B source. See Table 2 for the channel-select input.

## Detailed Description of Hardware

## Input

Each video input signal of the MAX9541 EV kit is configured for AC-coupling. The EV kit provides each input with an AC-coupling 0.1µF capacitor and a termination resistor.  A  sync-tip clamp at each input provides bias for  the  incoming  video  signal.  The  sync-tip  voltage  is internally set to 300mV.

## Output

The video output amplifiers can both source and sink load current, allowing output loads to be DC- or ACcoupled. The amplifier output stage needs approximately 300mV of headroom from either supply rail. The devices have an internal level-shift circuit that positions the sync tip at approximately 300mV at the output. If the supply voltage is greater than 3.135V (5% below a 3.3V supply), each amplifier can drive two DC-coupled video loads to ground. If the supply is less than 3.135V, each amplifier can drive only one DC-coupled or AC-coupled video load.

The MAX9541 EV kit comes with DC-coupled outputs, but can also be configured for AC-coupled outputs. To configure the EV kit for AC-coupled outputs, cut the short traces across C11-C14 and install 220µF or greater ACcoupling output capacitors. Refer to the Applications Information, AC-Coupling the Outputs section of the MAX9541/MAX9542 IC data sheet for more information.

## Jumper Selection

## Shutdown Mode ( SHDN )

The MAX9541 EV kit features an option to shut down all the video outputs on the EV kit. For normal operation, connect SHDN to VDD by placing a shunt across pins 1-2 of jumper JU1. For low-power shutdown mode, connect SHDN to GND by placing a shunt across pins 2-3 of jumper JU1. Table 1 lists the selectable jumper options.

## Channel-Select Input ( A /B)

The MAX9541 EV kit features 3-pin jumper JU2 to control  the  channel-select input A /B, which selects between two standard-definition video sources. To select Video Input A (INPUT0A-INPUT3A) as the video source, connect A /B to GND by placing a shunt across pins 2-3 of jumper JU2. To select Video Input B (INPUT0B-INPUT3B) as the video source, connect A /B to  VDD by placing a shunt across pins 1-2 of jumper JU2. Table 2 lists the selectable jumper options.

## Table 1. Jumper JU1 Functions ( SHDN )

| SHUNT POSITION   | SHDN PIN         | DEVICE MODE      |
|------------------|------------------|------------------|
| 1-2*             | Connected to VDD | Normal operation |
| 2-3              | Connected to GND | Shutdown mode    |

## Table 2. Jumper JU2 Functions ( A /B)

| SHUNT POSITION   | A /B PIN         | VIDEO SOURCE   |
|------------------|------------------|----------------|
| 1-2              | Connected to VDD | Video Input B  |
| 2-3*             | Connected to GND | Video Input A  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9541 Evaluation Kit

Figure 1. MAX9541 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9541 Evaluation Kit

Figure 2. MAX9541 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9541 Evaluation Kit

<!-- image -->

Figure 3. MAX9541 EV Kit Component PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9541 Evaluation Kit

Figure 4. MAX9541 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_