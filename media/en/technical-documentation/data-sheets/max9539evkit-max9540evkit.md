<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX9539/40 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that  contains  one  MAX9539 and one MAX9540 multisignal sync system. The MAX9539 is a video graphic sync adder and the MAX9540 is a video graphic sync extractor. The MAX9539/MAX9540 work together as a chipset to provide a 3-wire (RGB) interface for 5-wire (RGBHV) video.

The MAX9539/40 EV kit can be separated into two individual  PC  boards,  MAX9539 EV kit and MAX9540 EV kit.  Each EV kit operates from a dual ±5V DC power supply.

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| ATC        | 631-622-4700 | www.atceramics.com    |
| Samtec     | 812-944-6733 | www.samtec.com        |
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX9539/MAX9540 when contacting these component suppliers.

| DESIGNATION   |   QTY | DESCRIPTION                                                                         |
|---------------|-------|-------------------------------------------------------------------------------------|
| C1-C4         |     4 | 0.001µF ±10%, 25V X5R ceramic capacitors (0402) TDK C1005X5R1E102K                  |
| C5-C8         |     4 | 0.01µF 10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A103K                    |
| C9-C12        |     4 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) TDK C1005X5R1A104K                    |
| C13-C16       |     4 | 10µF ±20%, 10V X5R ceramic capacitors (0805) TDK C2012X5R1A106M                     |
| C17-C22       |     6 | 1000pF ±20%, 50V NP0 porcelain and ceramic capacitors (A-case) ATC ATC700A102MT50XC |
| J1, J2        |     2 | 2 x 6-pin headers                                                                   |
| JU1-JU5       |     5 | 3-pin headers                                                                       |

Features

- ♦ Breakable into Two EV Kits
- ♦ MAX9539 Sync Adder-Converts 5-Wire (RGBHV) to 3-Wire (RGB)
- ♦ MAX9540 Sync Extractor-Converts 3-Wire (RGB) to 5-Wire (RGBHV)
- ♦ Dual ±5V DC Power-Supply Operation
- ♦ DC-Coupled Inputs/Outputs
- ♦ Standard 75 Ω Input/Output Terminations
- ♦ Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART             | TEMP RANGE    | IC PACKAGE                            |
|------------------|---------------|---------------------------------------|
| MAX9539/40EVKIT+ | 0°C to +70°C* | 28 TSSOP (MAX9539) 28 TSSOP (MAX9540) |
| MAX9539/40EVKIT+ |               |                                       |

## Component List

| DESIGNATION                                                  |   QTY | DESCRIPTION                                                                                   |
|--------------------------------------------------------------|-------|-----------------------------------------------------------------------------------------------|
| JU6-JU12                                                     |     7 | 2-pin headers                                                                                 |
| R1-R12                                                       |    12 | 75 Ω ±1% resistors (0603)                                                                     |
| U1                                                           |     1 | MAX9539EUI+ (28-pin TSSOP)                                                                    |
| U2                                                           |     1 | MAX9540EUI+ (28-pin TSSOP)                                                                    |
| VGA_IN                                                       |     1 | HD sub-D 15-pin male connector                                                                |
| VGA_OUT                                                      |     1 | HD sub-D 15-pin female connector                                                              |
| COMP_SYNC, IN_BLU, IN_GRN, IN_RED, OUT_BLU, OUT_GRN, OUT_RED |     7 | 75 Ω BNC PCB mount connectors Recommended BNC cables RG-59A/U or RG-59B/U                     |
| -                                                            |    24 | Shunts                                                                                        |
| -                                                            |     1 | MAX9539/40 EV kit PCB                                                                         |
| -                                                            |     1 | Crossover ribbon cable: IDC cable, single-row, 6 sockets, double end 20in Samtec IDSS-06-D-20 |

## MAX9539/40 Evaluation Kit

## Quick Start

## Recommended Equipment

- Two 5V, 500mA DC power supplies (VCC and VEE)
- Desktop PC (or notebook computer) with a VGA output
- Computer Monitor with a VGA input
- VGA male-to-female sub-D extension cable

The MAX9539/40 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed in each of the jumper positions in the table below:
- 2) Connect the output of the video graphic controller on the desktop PC to the VGA\_IN connector on the MAX9539/40 EV kit with the VGA extension cable.
- 3) Connect  the  VGA\_OUT  connector  on  the MAX9539/40 EV kit to the VGA input of the monitor.
- 4) Set both power supplies to 5V. Turn off both power supplies.
- 5) Connect the negative terminal of the first power supply to the GND pads on the EV kit and the positive terminal to the +5V pads on the EV kit.
- 6) Connect the negative terminal of the second power supply to the -5V pads on the EV kit and the positive terminal to the GND pads on the EV kit.
- 7) Turn on the desktop PC and computer monitor.
- 8) Turn on both power supplies.

| JUMPER   | SHUNT POSITION                                                | EV KIT FUNCTION                                                          |
|----------|---------------------------------------------------------------|--------------------------------------------------------------------------|
| JU1-JU5  | Pins 1-2                                                      | Positive sync polarity                                                   |
| JU6-JU12 | Installed                                                     | MAX9539 EV kit outputs are connected to MAX9540 EV kit inputs on the PCB |
| HEADER   | SHUNT POSITION                                                | EV KIT FUNCTION                                                          |
| J1, J2   | Pins 1-2, pins 3-4, pins 5-6, pins 7-8, pins 9-10, pins 11-12 | MAX9539 EV kit outputs are connected to MAX9540 EV kit inputs on the PCB |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description

The MAX9539/40 EV kit is a fully assembled and tested surface-mount  circuit  board  that  contains  one MAX9539 and one MAX9540 in 28-pin TSSOP packages. The MAX9539 is a video graphic sync adder and the MAX9540 is a video graphic sync extractor.

The MAX9539/40 EV kit consists of two individual EV kits, the MAX9539 EV kit and the MAX9540 EV kit. The two EV kits are configured on a single PCB that is breakable along the center cutout slots. After separation, the two EV kits can be reconnected using cables up to 20 inches long. Connect the RGB signals between the two EV kits using equal length RG-59A/U or the RG-59B/U BNC cables. Connect header J1 odd pins from the MAX9539 EV kit to J2 even pins on the MAX9540 EV kit using a Samtec IDSS-06-D-20 ribbon cable. See Table 6 for jumper locations and signal names.

The MAX9539 EV kit accepts RGBHV signals from a 5-wire interface, adds the horizontal and vertical syncs to the RGB signals, and provides the RGB outputs with sync to a 3-wire interface. The MAX9539 EV kit operates from a dual ±5V DC power supply. All the input  and  output  signals  on  the  MAX9539 EV kit are DC-coupled. The MAX9539 video input terminals have 75 Ω termination resistors to ground, and the output terminals have 75 Ω back termination (source) resistors.

The MAX9540 EV kit accepts RGB signals with sync from a 3-wire interface, extracts the horizontal and vertical  syncs  from  the  RGB  signals,  and  provides  the RGBHV outputs to a 5-wire interface. The MAX9540 EV kit operates from a dual ±5V DC power supply. All the input  and  output  signals  on  the  MAX9540 EV kit are DC-coupled. The MAX9540 video input terminals have 75 Ω termination resistors to ground, and the output terminals have 75 Ω back termination (source) resistors.

The MAX9539/40 EV kit can operate as a single unit in applications where both the graphic sync adder and extractor can be placed on the same PCB. When the MAX9539/40 EV kit is operated as a single unit, the outputs of the MAX9539 must be connected to the inputs of the MAX9540 using jumpers JU6-JU12, and headers J1 and J2. See Table 6 for configuration.

<!-- image -->

## MAX9539/40 Evaluation Kit

## Jumper Selection

## MAX9540 Vertical Sync Polarity (SP\_V)

## MAX9539 Horizontal Sync Polarity (SP\_H)

The MAX9539/40 EV kit provides an option to select the horizontal sync polarity for the MAX9539 IC. Jumper JU1 selects the horizontal sync polarity (SP\_H) of the MAX9539 IC. See Table 1 for shunt positions.

Table 1. JU1 Jumper Selection (SP\_H)

| SHUNT POSITION   | MAX9539 SP_H PIN CONNECTED TO   | MAX9539 HORIZONTAL SYNC POLARITY   |
|------------------|---------------------------------|------------------------------------|
| 1-2 (default)    | VDD                             | Positive sync                      |
| 2-3              | GND                             | Negative sync                      |

## MAX9539 Vertical Sync Polarity (SP \_ V)

The MAX9539/40 EV kit provides an option to select the vertical sync polarity for the MAX9539 IC. Jumper JU2 selects  the  vertical  sync  polarity  (SP\_V)  of  the MAX9539 IC. See Table 2 for shunt positions.

Table 2. JU2 Jumper Selection (SP\_V)

| SHUNT POSITION   | MAX9539 SP_V PIN CONNECTED TO   | MAX9539 VERTICAL SYNC POLARITY   |
|------------------|---------------------------------|----------------------------------|
| 1-2 (default)    | VDD                             | Positive sync                    |
| 2-3              | GND                             | Negative sync                    |

## MAX9540 Horizontal Sync Polarity (SP\_H)

The MAX9539/40 EV kit provides an option to select the horizontal sync polarity for the MAX9540 IC. Jumper JU3 selects the SP\_H of the MAX9540 IC. See Table 3 for shunt positions.

Table 3. JU3 Jumper Selection (SP\_H)

| SHUNT POSITION   | MAX9540 SP_H PIN CONNECTED TO   | MAX9540 HORIZONTAL SYNC POLARITY   |
|------------------|---------------------------------|------------------------------------|
| 1-2 (default)    | VDD                             | Positive sync                      |
| 2-3              | GND                             | Negative sync                      |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The MAX9539/40 EV kit provides an option to select the vertical sync polarity for the MAX9540 IC. Jumper JU4 selects the SP\_V of the MAX9540 IC. See Table 4 for shunt positions.

Table 4. JU4 Jumper Selection (SP\_V)

| SHUNT POSITION   | MAX9540 SP_V PIN CONNECTED TO   | MAX9540 VERTICAL SYNC POLARITY   |
|------------------|---------------------------------|----------------------------------|
| 1-2 (default)    | VDD                             | Positive sync                    |
| 2-3              | GND                             | Negative sync                    |

## MAX9540 Composite Sync Polarity (SP\_C)

The MAX9539/40 EV kit provides an option to select the composite sync polarity for the MAX9540 IC. Jumper JU5 selects the composite sync polarity (SP\_C) of the MAX9540 IC. See Table 5 for shunt positions.

Table 5. JU5 Jumper Selection (SP\_C)

| SHUNT POSITION   | MAX9540 SP_C PIN CONNECTED TO   | MAX9540 COMPOSITE SYNC POLARITY   |
|------------------|---------------------------------|-----------------------------------|
| 1-2 (default)    | VDD                             | Positive sync                     |
| 2-3              | GND                             | Negative sync                     |

## MAX9539/40 Evaluation Kit

## MAX9539/MAX9540 Connecting Jumpers (JU6-JU12) and Headers (J1 and J2)

The MAX9539/40 EV kit provides an option to connect the outputs of the MAX9539 to the inputs of the MAX9540. Jumpers JU6-JU12 and headers J1 and J2 connect  or  disconnect  the  MAX9539  from  the MAX9540. See Table 6 for shunt positions.

## Table 6. JU6-JU12 Jumper Selection and J1, J2 Header Configuration

| SHUNT POSITION   | SIGNAL NAMES           | INSTALL SHUNTS                                       | REMOVE SHUNTS                                            | RIBBON CABLE J1 ODD PINS   | RIBBON CABLE J2 EVEN PINS   |
|------------------|------------------------|------------------------------------------------------|----------------------------------------------------------|----------------------------|-----------------------------|
| JU6 pins 1-2*    | +5VGA_IN (VGA_IN)      | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | -                           |
| JU7 pins 1*-2    | OUT_RED (MAX9539)      | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | -                           |
| JU8 pins 1*-2    | OUT_GRN (MAX9539)      | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | -                           |
| JU9 pins 1*-2    | OUT_BLU (MAX9539)      | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | -                           |
| JU10 pins 1*-2   | IN_RED (MAX9540)       | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | -                           |
| JU11 pins 1*-2   | IN_GRN (MAX9540)       | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | -                           |
| JU12 pins 1*-2   | IN_BLU (MAX9540)       | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | -                           |
| J1 pins 1*-2     | PIN11_IN (VGA_IN)      | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | 1                          | -                           |
| J1 pins 3*-4     | DDC_DATA_IN (VGA_IN)   | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | 3                          | -                           |
| J1 pins 5*-6     | PIN4_IN (VGA_IN)       | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | 5                          | -                           |
| J1 pins 7*-8     | DDC_CLK_IN (VGA_IN)    | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | 7                          | -                           |
| J1 pins 9*-10    | +5VGA_IN (VGA_IN)      | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | 9                          | -                           |
| J1 pins 11*-12   | GND (VGA_IN)           | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | 11                         | -                           |
| J2 pins 1-2*     | PIN11_OUT (VGA_OUT)    | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | 2                           |
| J2 pins 3-4*     | DDC_DATA_OUT (VGA_OUT) | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | 4                           |
| J2 pins 5-6*     | PIN4_OUT (VGA_OUT)     | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | 6                           |
| J2 pins 7-8*     | DDC_CLK_OUT (VGA_OUT)  | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | 8                           |
| J2 pins 9-10*    | +5VGA_OUT (VGA_OUT)    | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | 10                          |
| J2 pins 11-12*   | GND (VGA_OUT)          | Install shunts to connect the MAX9539 to the MAX9540 | Remove shunts to disconnect the MAX9539 from the MAX9540 | -                          | 12                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9539/40 Evaluation Kit

Figure 1. MAX9539/40 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9539/40 Evaluation Kit

Figure 2. MAX9539/40 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX9539/40 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX9539/40 Evaluation Kit

Figure 5. MAX9539/40 EV Kit PCB Layout-PWR Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX9539/40 Evaluation Kit

Figure 6. MAX9539/40 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8