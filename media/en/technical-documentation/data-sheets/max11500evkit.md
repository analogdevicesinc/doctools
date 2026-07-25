<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX11500 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that contains a MAX11500 IC. The MAX11500 is a 3-channel HD video filter for reconstruction and antialiasing applications. The filter's -3dB frequency is 33MHz. The MAX11500 includes a +6dB output buffer capable of driving a 2VP-P video signal into a standard 150 Ω load.

The MAX11500 EV kit can be configured for both ACand DC-coupled inputs and outputs. The MAX11500 video inputs have 75 Ω termination to ground and the outputs are 75 Ω back terminated. The EV kit operates from a single 5V power supply.

| DESIGNATION    |   QTY | DESCRIPTION                                                                         |
|----------------|-------|-------------------------------------------------------------------------------------|
| C1, C2, C3, C5 |     4 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E104K                 |
| C4             |     1 | 1µF ±10%, 25V X7R ceramic capacitor (0805) Murata GRM21BR71E105K                    |
| C6, C7, C8     |     3 | 220µF ±20%, 6.3V aluminum electrolytic capacitors (8.3mm x 8.3mm) SANYO 6SVPA220MAA |
| JU1-JU9        |     9 | 2-pin headers                                                                       |
| R1, R4, R7     |     3 | 820k Ω ±5% resistors (0603)                                                         |
| R2, R5, R8     |     3 | 120k Ω ±5% resistors (0603)                                                         |
| R3, R6, R9-R12 |     6 | 75 Ω ±1% resistors (0603)                                                           |

## Features

- ♦ Single 5V Supply Operation
- ♦ Output Buffer Drives a 150 Ω Standard Video Load with a +6dB Gain
- ♦ High-Definition Video Filter
- ♦ AC- or DC-Coupled Inputs/Outputs
- ♦ Standard 75 Ω Input/Output Terminations
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE    | IC PACKAGE   |
|----------------|---------------|--------------|
| MAX11500EVKIT+ | 0°C to +70°C* | 8 SO         |

## Component List

| DESIGNATION                                       |   QTY | DESCRIPTION                        |
|---------------------------------------------------|-------|------------------------------------|
| U1                                                |     1 | MAX11500USA+ (8-pin SO)            |
| GND, GND                                          |     2 | PC mini-black test points          |
| IN1, IN2, IN3, OUT1, OUT2, OUT3                   |     6 | PC mini-red test points            |
| VIDIN1, VIDIN2, VIDIN3, VIDOUT1, VIDOUT2, VIDOUT3 |     6 | 75 Ω BNC PCB-mount jack connectors |
| -                                                 |     9 | Shunts (JU1-JU9)                   |
| -                                                 |     1 | PCB: MAX11500 Evaluation Kit+      |

## Component Suppliers

| SUPPLIER                  | PHONE        | WEBSITE             |
|---------------------------|--------------|---------------------|
| Murata Mfg. Co., Ltd.     | 770-436-1300 | www.murata.com      |
| SANYO North America Corp. | 619-661-6835 | www.sanyodevice.com |

Note: Indicate that you are using the MAX11500 when contacting these component suppliers.

1

## MAX11500 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- 5V, 200mA DC power supply (VCC)
- Video signal generator (e.g., Tektronix TG-2000 or TG-700)
- Video measurement equipment (e.g., Tektronix VM-6000 or equivalent)

## Procedure

The MAX11500 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect the video signal generator output to the VIDIN\_ BNC connectors on the MAX11500 EV kit.
- 2) Connect the VIDOUT\_ BNC connectors on the EV kit to the input of the video measurement equipment.
- 3) Connect the power-supply ground to the GND pad on the EV kit.
- 4) Connect the 5V supply to the VCC pad on the EV kit.
- 5) Verify that no shunts are installed across jumpers JU1, JU3, JU5, JU7, JU8, and JU9 (AC-coupled inputs and outputs), and JU2 (no DC bias at VIDIN1).
- 6) Install  shunts  across jumpers JU4 and JU6 (DC bias for VIDIN2 and VIDIN3).
- 7) Set the video signal generator for the desired video input signal using a YPBPR signal format.
- 8) Connect the Y signal to the VIDIN1 BNC connector, and PB and PR to VIDIN2 and VIDIN3, respectively.
- 9) Turn on the power supply and enable the video signal generator output.
- 10) Analyze the video output signal with the video measurement equipment.

## Detailed Description

The MAX11500 EV kit is a fully assembled and tested surface-mount PCB that contains a MAX11500 IC. The MAX11500 is a 3-channel video filter for reconstruction and anti-aliasing applications. All 3 channels have identical characteristics.

The MAX11500 filter's -3dB frequency is 33MHz. The device includes a +6dB output buffer capable of driving a 2VP-P video signal into a standard 150 Ω load. In the default configuration, the MAX11500 EV kit video inputs and outputs are set for AC-coupled operation.

The video inputs and outputs can also be configured for DC-coupled operation. The MAX11500 EV kit video inputs have a 75 Ω termination to ground and the outputs are 75 Ω back terminated.

## Jumper Selection

## AC-/DC-Coupled Input Operation

The MAX11500 features a transparent clamp at the video inputs that allows for either AC- or DC-coupling. If the input signal remains above ground, the transparent clamp is inactive, offering true DC-input coupling. If the signal goes below ground, it must be AC-coupled. The transparent clamp will set the sync tip just below ground.

Jumpers JU1, JU3, and JU5 set the MAX11500 EV kit video inputs for AC- or DC-coupled operation. For ACcoupled operation, remove shunts from jumpers JU1, JU3, and JU5. For DC-coupled operation, install shunts across jumpers JU1, JU3, or JU5. Use DC-coupling only for input signals whose lowest voltage is above ground. See Table 1 for proper jumper settings. When interfacing DC-coupled signals to the MAX11500 EV kit VIDIN\_ inputs, verify that shunts are not installed across jumpers JU2, JU4, or JU6.

## Table 1. AC-/DC-Coupled Input Operation (JU1, JU3, and JU5)

| SHUNT POSITION   | EV KIT INPUTS        |
|------------------|----------------------|
| Not installed    | AC-coupled operation |
| Installed        | DC-coupled operation |

## DC Bias for YPBPR Signals

When configuring the EV kit video inputs for ACcoupled operation, the correct DC bias point has to be chosen, depending on the input signal. Unipolar signals, such as R, G, B, and Y, are biased correctly using the MAX11500 internal transparent clamp. For bipolar signals, such as PB and PR signals, a constant DC bias voltage has to be applied after the AC-coupling capacitor to make sure that the clamp never operates. A 590mV DC bias voltage can be applied by installing shunts across jumpers JU2, JU4, or JU6. To configure the inputs to a different DC bias voltage, replace resistors R2, R5, or R8. See Table 2 for input clamp configuration.

## Table 2. Input Clamp Operation (JU2, JU4, and JU6)

| SHUNT POSITION   | EV KIT FUNCTION                              |
|------------------|----------------------------------------------|
| Installed        | DC bias enabled: Use for P B , P R signals   |
| Not installed    | DC bias disabled: Use for R, G, B, Y signals |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11500 Evaluation Kit

## AC-/DC-Coupled Output Operation

Jumpers JU7, JU8, and JU9 configure the MAX11500 EV kit video outputs for AC- or DC-coupled operation. To configure the outputs for AC-coupled operation, remove shunts from jumpers JU7, JU8, and JU9. To configure the outputs for DC-coupled operation, install shunts across jumpers JU7, JU8, and JU9. See Table 3 for the EV kit output configuration.

| SHUNT POSITION   | EV KIT OUTPUTS       |
|------------------|----------------------|
| Not installed    | AC-coupled operation |
| Installed        | DC-coupled operation |

Table 3. AC-/DC-Coupled Output Operation (JU7, JU8, and JU9)

<!-- image -->

Figure 1. MAX11500 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11500 Evaluation Kit

Figure 2. MAX11500 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11500 Evaluation Kit

<!-- image -->

Figure 3. MAX11500 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11500 Evaluation Kit

Figure 4. MAX11500 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

CARDENAS