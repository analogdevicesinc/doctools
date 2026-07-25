<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX11506 evaluation kit (EV kit) is a fully assembled and tested surface-mount PCB that evaluates the MAX11506 IC. The MAX11506 is a six-channel video reconstruction filter and buffer for a combination of standard-definition television (SDTV) and high-definition television (HDTV) applications. The filter's passband is typically 9MHz for SDTV and selectable between 9MHz/33MHz for SDTV/HDTV. The MAX11506 includes a +6dB output buffer capable of driving 2VP-P into a standard 150 Ω video load.

The video input and output signals on the EV kit can be AC- or DC-coupled. The MAX11506 video input terminals are terminated at 75 Ω and the output terminals are 75 Ω back-terminated. The EV kit operates from a single 5V DC power supply.

The MAX11506 EV kit can also evaluate the MAX11507 after IC replacement (U1). The EV kit is shipped with a MAX11506 IC installed.

| DESIGNATION                  |   QTY | DESCRIPTION                                                                               |
|------------------------------|-------|-------------------------------------------------------------------------------------------|
| C1                           |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M Taiyo Yuden JMK212BJ106MG |
| C2-C8, C15-C20               |    13 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K TDK C1608X7R1C104K    |
| C9-C14                       |     6 | 220µF ±20%, 6.3V aluminum electrolytic capacitors (6.3mm x 6mm) SANYO 6CE220BS            |
| JU1-JU19                     |    19 | 2-pin headers                                                                             |
| R1-R12                       |    12 | 75 Ω ±1% resistors (0603)                                                                 |
| R13, R14, R15, R19, R20, R21 |     6 | 820k Ω ±5% resistors (0603)                                                               |
| R16, R17, R18, R22, R23, R24 |     6 | 120k Ω ±5% resistors (0603)                                                               |
| R25                          |     1 | 100k Ω ±5% resistors (0603)                                                               |

## Features

- ♦ 5V Single-Supply Operation
- ♦ Output Buffer Drives One 150 Ω Standard Video Load with a +6dB Gain
- ♦ Three Fixed 5th-Order 9MHz SD Filters
- ♦ Three Selectable 6th-Order 9MHz/33MHz SD/HD Filters
- ♦ AC- or DC-Coupled Inputs and Outputs
- ♦ Standard 75 Ω Input and Output Terminations
- ♦ Transparent Input Clamps
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11506EVKIT+ | EV Kit |

## Component List

| DESIGNATION                                                                                                            |   QTY | DESCRIPTION                                                     |
|------------------------------------------------------------------------------------------------------------------------|-------|-----------------------------------------------------------------|
| SD_IN1, SD_IN2, SD_IN3, SD/HD_IN1, SD/HD_IN2, SD/HD_IN3, SD_OUT1, SD_OUT2, SD_OUT3, SD/HD_OUT1, SD/HD_OUT2, SD/HD_OUT3 |    12 | 75 Ω BNC PCB vertical-mount connectors                          |
| TP1-TP12                                                                                                               |    12 | Test points                                                     |
| U1                                                                                                                     |     1 | Six-channel SDTV/HDTV video filter (16 QSOP) Maxim MAX11506CEE+ |
| -                                                                                                                      |    19 | Shunts                                                          |
| -                                                                                                                      |     1 | PCB: MAX11506 Evaluation Kit+                                   |

1

## MAX11506 Evaluation Kit

## Component Suppliers

| SUPPLER                                | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX11506 or MAX11507 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX11506 EV kit
- 5V, 150mA DC power supply (VCC)
- Video signal generator (e.g., Tektronix TG2000 or similar)
- Video measurement equipment (e.g., Tektronix VM6000 or similar)

## Procedure

The MAX11506 EV kit is a fully assembled and tested surface-mount board. Follow the steps below to verify the board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  installed  across  jumper  JU1 (HD filter).
- 2) Verify that no shunts are installed across jumpers JU2-JU7 (AC-coupled inputs).
- 3) Verify that no shunts are installed across jumpers JU8-JU13 (AC-coupled outputs).
- 4) Verify that no shunts are installed across jumpers JU14-JU19 (no DC bias input).
- 5) Connect the output of the video signal generator to the SD\_IN1 BNC connector on the MAX11506 EV kit.
- 6) Connect the SD\_OUT1 BNC connector on the EV kit to the input of the video measurement equipment.
- 7) Connect the power-supply ground to the GND pad on the EV kit.
- 8) Connect the 5V supply to the VCC pad on the EV kit.
- 9) Set the video signal generator for the desired video input signal. Since the input is AC-coupled and not biased, the signal should be a unipolar signal, such as R, G, B, or Y.
- 10) Turn on power supply and enable the video signal generator.
- 11) Analyze the video output signal.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

The MAX11506 EV kit is a fully assembled and tested surface-mount PCB that contains a MAX11506 IC. The MAX11506 is a six-channel video reconstruction filter and buffer for SDTV/HDTV applications. The MAX11506 filter  typically  has  3dB  attenuation  at  9MHz  for  SDTV applications and 33MHz for HDTV applications. The device includes a +6dB output buffer capable of driving a 2VP-P video signal into a standard 150 Ω load.

The MAX11506 EV kit has six input channels to accept a full  set  of  component  video  input  signals.  All  input and output signals on the MAX11506 EV kit can be configured for AC- or DC-coupling. The EV kit's input terminals are 75 Ω terminated and the video output terminals are each back-terminated with 75 Ω .

## Jumper Selection

## SD/HD Filter Select (FSEL)

The MAX11506 EV kit provides three fixed 5th-order 9MHz and three selectable 6th-order 9MHz/33MHz filters. Jumper JU1 controls the FSEL pin and, in turn, the bandwidth of the three selectable filters (SD/HD\_IN1, SD/HD\_IN2, SD/HD\_IN3), as shown in Table 1. By default, the selectable filter bandwidth is 33MHz for an HD video output.

## Table 1. JU1 Jumper Selection (FSEL)

| SHUNT POSITION   | FSEL PIN         | OUTPUT FILTER BANDWIDTH (MHz)   |
|------------------|------------------|---------------------------------|
| Installed*       | Connected to VCC | 33 (HD output)                  |
| Not installed    | Connected to GND | 9 (SD output)                   |

## Input Coupling

The MAX11506 IC features a transparent clamp at the video inputs that allows either AC- or DC-coupling. If the input signal remains above ground, the transparent clamp is  inactive,  offering  true  DC input coupling. If the signal

<!-- image -->

## MAX11506 Evaluation Kit

drops below ground, the inputs must be AC-coupled. The transparent clamp sets the sync tip close to ground.

The MAX11506 EV kit provides an option to configure the MAX11506 inputs to AC- or DC-coupling. Jumpers JU2-JU7  configure  the  input  coupling  for  the MAX11506 EV kit. See Table 2 for shunt positions.

Table 2. Jumpers JU2-JU7 Settings

| SHUNT POSITION   | MAX11506 INPUT   |
|------------------|------------------|
| Installed        | DC-coupled       |
| Not installed*   | AC-coupled       |

## DC Bias for YPbPr Signals

When configuring the EV kit video inputs for AC-coupled operation, the correct DC bias point has to be chosen, depending on the input signal. Unipolar signals, such as R,  G,  B,  and  Y,  are  biased  correctly  using  the MAX11506 internal transparent clamp. For bipolar signals, such as Pb and Pr, a constant DC bias voltage has to  be  applied after the AC-coupling capacitor to make sure that the clamp never operates. A 590mVDC bias voltage can be applied by installing shunts across jumpers JU14-JU19. To configure the inputs to a different DC bias voltage, replace resistors R16, R17, R18 and R22, R23, R24. See Table 4 for input clamp configuration. Refer to the MAX11506/MAX11507 IC data sheet for more information regarding DC bias calculations.

## Table 4. Input Clamp Operation (JU14-JU19)

| SHUNT POSITION   | EV KIT FUNCTION                              |
|------------------|----------------------------------------------|
| Installed        | DC bias enabled: Use for Pb, Pr signals      |
| Not installed*   | DC bias disabled: Use for R, G, B, Y signals |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Output Coupling

The MAX11506 EV kit provides an option to configure the MAX11506 outputs to AC- or DC-coupling. Jumpers JU8-JU13 configure the output coupling for the MAX11506 EV kit. See Table 3 for shunt positions.

Table 3. Jumpers JU8-JU13 Settings

| SHUNT POSITION   | MAX11506 OUTPUT   |
|------------------|-------------------|
| Installed        | DC-coupled        |
| Not installed*   | AC-coupled        |

<!-- image -->

## MAX11506 Evaluation Kit

Figure 1. MAX11506 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11506 Evaluation Kit

<!-- image -->

Figure 2. MAX11506 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11506 Evaluation Kit

Figure 3. MAX11506 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11506 Evaluation Kit

Figure 4. MAX11506 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7