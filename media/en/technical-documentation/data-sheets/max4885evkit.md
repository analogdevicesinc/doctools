<!-- lastmod 2022-08-04 -->
## General Description

The MAX4885 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that  utilizes  the  MAX4885 IC to implement a complete video graphics array (VGA) 1:2 or 2:1 multiplexer.

VGA input/output connections are provided to easily interface the MAX4885 EV kit with VGA-compatible devices. The EV kit gives the option to use a single 5V DC power supply (V+) or a single 9V battery (VBATT) with 5V regulation for V+. In either power-supply input configuration, 3.3V on-board regulation is provided for VCL.

| DESIGNATION                                                                                                            |   QTY | DESCRIPTION                                                                                  |
|------------------------------------------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------------------------------|
| BATT                                                                                                                   |     1 | Vertical 9V PC snap-on connector                                                             |
| B_0, B_1, B_2, DDCA0, DDCA1, DDCA2, DDCB0, DDCB1, DDCB2, G_0, G_1, G_2, GND (3), H0, H1, H2, R_0, R_1, R_2, V0, V1, V2 |    24 | Test points                                                                                  |
| C1-C4                                                                                                                  |     4 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K TDK C1608X7R1C104K       |
| C5                                                                                                                     |     1 | 0.1µF ±10%, 50V X5R ceramic capacitor (0603) Murata GRM188R71H104K TDK C1608X7R1H104K        |
| C6                                                                                                                     |     1 | 2.2µF ±10%, 10V X5R ceramic capacitor (0603) Murata GRM188R61A225K Taiyo Yuden LMK107BJ225KA |
| D1-D4                                                                                                                  |     4 | Green surface-mount LEDs (0805)                                                              |

<!-- image -->

## Features

- ♦ Complete 1:2 or 2:1 VGA Multiplexer
- ♦ Single 5V Power Supply
- ♦ On-Board 3.3V Regulation for VCL
- ♦ Optional 9V Battery Input with 5V Regulation
- ♦ VGA Inputs/Outputs
- ♦ Enable Input
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4885EVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION      |   QTY | DESCRIPTION                                                                                                       |
|------------------|-------|-------------------------------------------------------------------------------------------------------------------|
| D5               |     1 | 3.3V shunt voltage reference (3 SC70) Maxim LM4040AEX3-3.3+ (Top Mark: ANY) Maxim LM4040DEX3-3.3+ (Top Mark: AOB) |
| JU1-JU5          |     5 | 3-pin headers                                                                                                     |
| R1-R4            |     4 | 1k Ω ±5% resistors (0603)                                                                                         |
| R5               |     1 | 470 Ω ±5% resistor (0603)                                                                                         |
| U1               |     1 | Complete 1:2 or 2:1 VGA multiplexer (32 TQFN-EP*) Maxim MAX4885ETJ+                                               |
| U2               |     1 | Linear regulator (6 TDFN-EP*) Maxim MAX15006BATT+ (Top Mark: APF)                                                 |
| U3               |     1 | SPDT analog switch (6 SOT23) Maxim MAX4624EZT+T (Top Mark: AAAE)                                                  |
| VGA0, VGA1, VGA2 |     3 | 15-pin HD sub-D female VGA ports                                                                                  |
| -                |     5 | Shunts                                                                                                            |
| -                |     1 | PCB: MAX4885 Evaluation Kit+                                                                                      |

## Component Suppliers

| SUPPLER                                | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX4885 when contacting these component suppliers.

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX4885 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- Single 9V battery or 7V to 13V power supply
- One or two VGA inputs
- VGA-compatible output (e.g., monitor)

## Procedure

The MAX4885 EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify the board operation:

- 1) Verify that all jumpers are configured as shown below:

JU1

JU2-JU5

1-2

2-3

- 2) Connect 7V to 13V power supply to VBATT and GND pads or connect a single 9V battery to the battery terminals.
- 3) Connect a VGA source to VGA0.
- 4) Connect VGA-compatible outputs to VGA1 and/or VGA2.
- 5) Enable the VGA source.
- 6) Verify outputs at VGA1 or VGA2.

## Detailed Description

The MAX4885 EV kit is a fully assembled and tested surface-mount printed-circuit board (PCB) that utilizes the MAX4885 IC to implement a complete VGA 1:2 or 2:1 multiplexer.

VGA input/output connections are provided to easily interface the MAX4885 EV kit with VGA-compatible devices. The EV kit gives the option to use a single 5V DC power supply (V+) or a single 9V battery (VBATT) with 5V regulation for V+ or 7V to 13V power supply to VBATT. In either power-supply input configuration, 3.3V on-board regulation is provided for VCL.

The EV kit provides jumpers to control the various features of the MAX4885 IC, such as the charge pump, enable input, mode select, and logic select. Test points are also provided to monitor the signals at each input/output.

## Input Power Supply

The MAX4885 EV kit gives the flexibility of accepting a single 5V input power supply (V+) or 9V battery/power supply (VBATT) input. The input supply option is set by configuration of jumper JU1, as shown in Table 1. When VBATT is selected, the voltage is stepped down to 5V through the MAX15006 linear regulator. Regardless of setting, only one supply is necessary to power the EV kit as voltage VCL is provided through on-board regulation.

## Table 1. Jumper JU1 Functions

| SHUNT POSITION   | EV KIT INPUT SUPPLY             |
|------------------|---------------------------------|
| 1-2*             | VBATT (9V battery/power supply) |
| 2-3              | V+ (5V supply)                  |

## Charge-Pump Enable ( QP )

Jumper JU2 controls an internal charge pump used to enhance RGB switch performance. By configuring JU2 to the desired setting, as shown in Table 2, the internal charge pump can be enabled or disabled. The internal charge pump is enabled by default.

## Table 2. Jumper JU2 Functions

| SHUNT POSITION   | QP PIN           | INTERNAL CHARGE PUMP   |
|------------------|------------------|------------------------|
| 1-2              | Connected to V+  | Disabled               |
| 2-3*             | Connected to GND | Enabled                |

## Enable Input ( EN )

The MAX4885 is enabled or disabled through the EN pin. Jumper JU3 controls the EN pin settings, as shown in Table 3. The MAX4885 is enabled by default.

## Table 3. Jumper JU3 Functions

| SHUNT POSITION   | EN PIN           | FUNCTION                       |
|------------------|------------------|--------------------------------|
| 1-2              | Connected to V+  | High-impedance mode (disabled) |
| 2-3*             | Connected to GND | Normal mode (enabled)          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Mode Select (M)

The MAX4885 can be configured as a 1:2 or 2:1 VGA multiplexer by setting JU4 according to Table 4. When JU4 is set high, the MAX4885 acts in 2:1 mode and the HSYNC and VSYNC inputs are buffered to provide level-shifting and drive capability to meet VESA specifications. When JU4 is set low, the MAX4885 is in 1:2 mode and the HSYNC/VSYNC output buffers are disabled  and  switches  pass  signals  directly.  The MAX4885 is set to 1:2 mode by default.

Table 4. Jumper JU4 Functions

| SHUNT POSITION   | M PIN            | FUNCTION   |
|------------------|------------------|------------|
| 1-2              | Connected to V+  | 2:1 mode   |
| 2-3*             | Connected to GND | 1:2 mode   |

<!-- image -->

## MAX4885 Evaluation Kit

## Select Input (SEL)

By setting JU5 according to Table 5, the MAX4885 routes the standard VGA signal path. By setting JU5 low, VGA signals can be sent from VGA0 to VGA1, or vice versa. By setting JU5 high, VGA signals can be sent from VGA0 to VGA2, or vice versa. JU5 is set low by default.

Table 5. Jumper JU5 Functions

| SHUNT POSITION   | SEL PIN          | SIGNAL PATH   |
|------------------|------------------|---------------|
| 1-2              | Connected to V+  | VGA0 to VGA2  |
| 2-3*             | Connected to GND | VGA0 to VGA1  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885 Evaluation Kit

Figure 1. MAX4885 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885 Evaluation Kit

<!-- image -->

Figure 2. MAX4885 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885 Evaluation Kit

Figure 3. MAX4885 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885 Evaluation Kit

<!-- image -->

Figure 4. MAX4885 EV Kit PCB Layout-GND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885 Evaluation Kit

Figure 5. MAX4885 EV Kit PCB Layout-VCC Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885 Evaluation Kit

<!-- image -->

Figure 6. MAX4885 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4885 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                               | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------|-----------------|
|                 0 | 1/08            | Initial release                           | -               |
|                 1 | 5/08            | EV kit revised from Rev A board to Rev B. | 1, 4-9          |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600