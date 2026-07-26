<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX11508 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains  a  MAX11508 IC. The MAX11508 is a 3-channel video filter and buffer. The 3-channel filter bandwidths are selectable to accept high-definition television (HDTV), progressive-scan (PS), standard-definition television (SDTV), or bypassed for 1080p or high bandwidth RGB signals. Each channel includes a transparent  input  clamp  and a +6dB output buffer capable of driving 2VP-P into a standard 150 Ω load.

The video input and output signals on the EV kit can be AC- or DC-coupled. The MAX11508 video input terminals are terminated at 75 Ω , and the output terminals are 75 Ω back terminated. The EV kit operates from a single 5V DC power supply. The EV kit can also evaluate the MAX11509. The MAX11508 EV kit is shipped with a MAX11508 IC installed. To evaluate the MAX11509, contact the factory to request free samples of the pincompatible MAX11509 IC.

| DESIGNATION                                          |   QTY | DESCRIPTION                                                         |
|------------------------------------------------------|-------|---------------------------------------------------------------------|
| C1                                                   |     1 | 1µF ±10%, 16V X7R, ceramic capacitor (0603) Murata GRM188R71C105K   |
| C2-C5                                                |     4 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C6, C7, C8                                           |     3 | 220µF ±20%, 6.3V OS-CON capacitors (8mm x 6.9mm) SANYO 6SVPA220MAA  |
| C9, C10                                              |     0 | Not installed, capacitors (0603)                                    |
| GND (x2)                                             |     2 | PC mini black test points                                           |
| JU1-JU11                                             |    11 | 2-pin headers                                                       |
| PB/B_IN, PB/B_OUT, PR/R_IN, PR/R_OUT Y/G_IN, Y/G_OUT |     6 | PC mini red test points                                             |

Features

- ♦ Single 5V Supply Operation
- ♦ Transparent Input Clamp
- ♦ Output Buffer Drives 150 Ω Standard Video Loads with a +6dB Gain
- ♦ Selectable Video Filter for High-Definition/ Progressive-Scan/Standard-Definition Television
- ♦ Bypass Feature for High Bandwidth Signals
- ♦ AC- or DC-Coupled Inputs and Outputs
- ♦ Standard 75 Ω Input/Output Terminations
- ♦ Surface-Mount Components
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11508EVKIT+ | EV Kit |

## Component List

| DESIGNATION                                     |   QTY | DESCRIPTION                                           |
|-------------------------------------------------|-------|-------------------------------------------------------|
| PB/BIN, PB/BOUT, PR/RIN, PR/ROUT, Y/GIN, Y/GOUT |     6 | 75 Ω BNC PCB-mount connectors                         |
| R1-R6                                           |     6 | 75 Ω ±1% resistors (0603)                             |
| R7                                              |     1 | 820k Ω ±5% resistor (0603)                            |
| R8                                              |     1 | 120k Ω ±5% resistor (0603)                            |
| R9-R12                                          |     4 | 100k Ω ±5% resistors (0603)                           |
| U1                                              |     1 | Video filter and buffer (14 TSSOP) Maxim MAX11508UUD+ |
| -                                               |    11 | Shunts                                                |
| -                                               |     1 | PCB: MAX11508 Evaluation Kit+                         |

1

## MAX11508 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |

Note:

Indicate that you are using the MAX11508 when contacting these component suppliers.

## Quick Start

## Required Equipment

- 5V, 150mA DC power supply (VCC)
- Video signal generator (e.g., Tektronix TG-2000 or similar)
- An appropriate video measurement equipment

## Procedure

The MAX11508 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed on the default position of all the jumpers listed in Table 1.
- 2) Connect the output of the video signal generator to the Y/GIN BNC connector on the MAX11508 EV kit.
- 3) Connect the Y/GOUT BNC connector on the EV kit to the input of the video measurement equipment.
- 4) Connect the power-supply ground to the GND pad on the EV kit.
- 5) Connect the 5V supply to the VCC pad on the EV kit.
- 6) Set the video signal generator for the desired video input signal. Since the input is AC-coupled and not biased, the signal should be a unipolar signal such as R, G, B, or Y.
- 7) Turn on the power supply and enable the video signal generator.
- 8) Analyze the video output signal.

## Table 1. Jumper Function (JU1-JU11)

| JUMPER         | SHUNT POSITION   | EV KIT FUNCTION                |
|----------------|------------------|--------------------------------|
| JU1            | Not installed    | Device enabled                 |
| JU2            | Not installed    | HD filter selected             |
| JU3            | Installed        | HD filter selected             |
| JU4            | Installed        | PB/BIN and PR/RIN bias enabled |
| JU5, JU6, JU7  | Not installed    | AC-coupled inputs              |
| JU8, JU9, JU10 | Not installed    | AC-coupled outputs             |
| JU11           | Not installed    | Y/GIN is not DC biased         |

## Detailed Description of Hardware

The MAX11508 EV kit is a fully assembled and tested surface-mount circuit board that contains a MAX11508 IC. The MAX11508 is a 3-channel video filter and buffer. The MAX11508 EV kit has three input channels to accept a full set of component video input signals.

The MAX11508 filter bandwidths are selectable to accept four different operational modes: SD, PS, HD, or bypassed for 1080p or high bandwidth RGB signals. Each channel includes a transparent input clamp and a +6dB output buffer capable of driving 2VP-P into a standard 150 Ω load.

All the input and output signals on the MAX11508 EV kit can be configured for AC- or DC-coupling. The EV kit's input terminals are 75 Ω terminated, and the video output terminals are each back terminated with 75 Ω .

## MAX11509 Evaluation

The MAX11508 EV kit can also evaluate the MAX11509 IC. To evaluate the MAX11509, replace MAX11508 IC U1 with the MAX11509. Refer to the MAX11508/MAX11509 IC data sheet for additional information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11508 Evaluation Kit

## Jumper Selection Power-Down (SHDN)

## Table 4. JU11 Jumper Selection (Y/GIN)

The MAX11508 EV kit provides an option to shut down the MAX11508 IC. Jumper JU1 selects the shutdown or the normal operation mode for the MAX11508 EV kit. See Table 2 for shunt positions.

Table 2. JU1 Jumper Selection (SHDN)

| SHUNT POSITION   | MAX11508 SHDN PIN CONNECTED TO   | EV KIT OPERATION   |
|------------------|----------------------------------|--------------------|
| Installed        | GND                              | Shutdown           |
| Not installed*   | VCC through resistor R9          | Normal operation   |

## Video Filter Bandwidth and Modes (HD/PS/SD/BP)

The MAX11508 EV kit provides an option to select the video filter bandwidths for the MAX11508. Jumpers JU2 and JU3 select the video filter bandwidths on the MAX11508 EV kit. See Table 3 for shunt positions.

## Table 3. JU2, JU3 Jumper Selection (HD/PS/SD/BP)

| SHUNT POSITION   | SHUNT POSITION   | FILTER BANDWIDTH (MHz)   | MAX11508 EV KIT OPERATION MODE   |
|------------------|------------------|--------------------------|----------------------------------|
| JU2 (FSEL1)      | JU3 (FSEL0)      | FILTER BANDWIDTH (MHz)   | MAX11508 EV KIT OPERATION MODE   |
| Installed        | Installed        | 9                        | SD                               |
| Installed        | Not installed    | 16                       | PS                               |
| Not installed*   | Installed*       | 33                       | HD                               |
| Not installed    | Not installed    | 60                       | BP                               |

## Biasing the Channel 1 (Y/GIN) Input

When configuring the channel 1 input for AC-coupled operation, the correct DC bias point has to be chosen, depending on the input signals.

The MAX11508 features an internal transparent clamp to provide the correct bias level for unipolar signals such as R, G, B, and Y on channel 1 (Y/GIN). The MAX11508 channel 1 (Y/G\_IN) internal transparent clamp is enabled when no external bias is connected to the Y/G\_IN pin (see Table 4). If the unipolar signals exceed the voltage defined in the MAX11508/MAX11509 IC data sheet, AC-coupling is recommended.

For bipolar signals such as Pb and Pr on channel 1 (Y/GIN), AC-coupling is recommended, and an external biasing circuit is provided on the EV kit (see Table 4).

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| SHUNT POSITION   | Y/G_IN PIN INPUT BIAS   | Y/GIN CHANNEL DC BIAS LEVEL                                                               |
|------------------|-------------------------|-------------------------------------------------------------------------------------------|
| Installed        | External bias           | DC bias enabled for channel 1 to accept bipolar signals such as Pb and Pr                 |
| Not installed*   | No external bias        | Transparent clamp enabled for channel 1 to accept unipolar signals such as R, G, B, and Y |

## Biasing the Channel 2 (PB/BIN) and Channel 3 (PR/RIN) Inputs

The MAX11508 features transparent clamps on the PB/B\_IN and PR/R\_IN pins to provide the correct bias level for unipolar signals such as R, G, B, and Y. When bipolar signals such as Pb and Pr are used, an internal bias generator is used to set the correct bias level. The bias generator is enabled by pulling the BIAS pin low using jumper JU4. See Table 5 for the jumper positions.

## Table 5. JU4 Jumper Selection (BIAS)

| SHUNT POSITION   | MAX11508 BIAS PIN CONNECTED TO   | PB/B_IN AND PR/R_IN PINS INPUT BIAS   | PB/BIN AND PR/RIN CHANNELS DC BIAS LEVEL                                                |
|------------------|----------------------------------|---------------------------------------|-----------------------------------------------------------------------------------------|
| Installed*       | GND                              | Bias enabled, clamp disabled          | DC bias enabled for channels 2 and 3 to accept bipolar signals such as Pb and Pr        |
| Not installed    | VCC through resistor R12         | Bias disabled, clamp enabled          | DC bias disabled for channels 2 and 3 to accept unipolar signals such as R, G, B, and Y |

## MAX11508 Evaluation Kit

## Input Coupling (Y/GIN, PB/BIN, PR/RIN)

The MAX11508 IC features a transparent clamp at the video inputs that allows either AC- or DC-coupling. If the input signal remains above ground, the transparent clamp is inactive, offering true DC input coupling. If the signal drops below ground, the inputs must be ACcoupled. The transparent clamp sets the video sync tip just below ground.

The MAX11508 EV kit provides an option to configure the MAX11508 inputs to AC- or DC-coupling. Jumpers JU5, JU6, and JU7 configure the input coupling for the MAX11508 EV kit. See Table 6 for shunt positions.

## Table 6. JU5, JU6, JU7 Jumper Selection (Y/GIN, PB/BIN, PR/RIN)

| SHUNT POSITION   | Y/GIN, PB/BIN, PR/RIN COUPLING CONFIGURATION   |
|------------------|------------------------------------------------|
| Installed        | DC-coupling                                    |
| Not installed*   | AC-coupling                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Output Coupling (Y/GOUT, PB/BOUT, PR/ROUT)

The MAX11508 EV kit provides an option to configure the MAX11508 outputs to AC- or DC-coupling. Jumpers JU8, JU9, and JU10 configure the output coupling for the MAX11508 EV kit. See Table 7 for shunt positions.

## Table 7. JU8, JU9, JU10 Jumper Selection (Y/GOUT, PB/BOUT, PR/ROUT)

| SHUNT POSITION   | Y/GOUT, PB/BOUT, PR/ROUT COUPLING CONFIGURATION   |
|------------------|---------------------------------------------------|
| Installed        | DC-coupling                                       |
| Not installed*   | AC-coupling                                       |

<!-- image -->

## MAX11508 Evaluation Kit

Figure 1. MAX11508 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11508 Evaluation Kit

Figure 2. MAX11508 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11508 Evaluation Kit

<!-- image -->

Figure 3. MAX11508 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11508 Evaluation Kit

Figure 4. MAX11508 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600