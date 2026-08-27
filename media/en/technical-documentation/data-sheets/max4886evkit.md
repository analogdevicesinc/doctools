<!-- lastmod 2022-08-03 -->
## General Description

The MAX4886 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) that  contains two sub circuits, a typical 2:1 HDMI™ switch application (top half), and an eye diagram test circuit (bottom half).

The MAX4886 HDMI application circuit evaluates the MAX4886 high-speed HDMI/DVI™ 2:1 digital video switch, combined with the MAX4929E for lower frequency signals, to provide a full 2:1 HDMI application circuit. The EV kit operates from a 5V DC power supply and provides on-board 3.3V regulation. HDMI input/output connections are also provided to easily interface with HDMI-compatible devices. All signal traces in the HDMI application circuit are 100 Ω differential  controlled-impedance traces.

A separate test circuit is also provided at the bottom of the MAX4886 EV kit for eye diagram evaluation using SMA connections and 50 Ω controlled-impedance traces.

HDMI is a trademark of HDMI Licensing, LLC. DVI is a trademark of Digital Display Working Group (DDWG).

| DESIGNATION          |   QTY | DESCRIPTION                                                                                 |
|----------------------|-------|---------------------------------------------------------------------------------------------|
| 3.3V, HPIR_OUT       |     0 | Not installed, test points                                                                  |
| C1-C13, C15-C20, C23 |    20 | 0.1µF ±10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A104K TDK C1005X5R1A104KT     |
| C14                  |     1 | 10µF ±10%, 10V X5R ceramic capacitor (0805) Murata GRM21BR61A106K TDK C2010X5R1A106K        |
| C21, C22             |     2 | 1µF ±10%, 10V X5R ceramic capacitors (0402) Murata GRM155R61A105K Taiyo Yuden LMK105BJ105KV |
| D1, D5               |     2 | Dual 40V/20mA Schottky diodes (SOT23) Central CMPSH-3CELLEADFREE (DB2E)                     |
| D2                   |     1 | Red SMT LED (0603)                                                                          |
| D3                   |     1 | Orange SMT LED (0603)                                                                       |
| D4                   |     1 | Green SMT LED (0603)                                                                        |
| IN+, IN-, OUT+, OUT- |     4 | Edge-mount receptacle SMA connectors                                                        |

<!-- image -->

Features

- ♦ Self-Powered from HDMI Source
- ♦ Optional 5V Power Supply
- ♦ Complete 2:1 HDMI Switching Circuit
- ♦ Eye Diagram Test Circuit with SMA Input/Output
- ♦ HDMI Inputs/Outputs
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4886EVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION      |   QTY | DESCRIPTION                                                  |
|------------------|-------|--------------------------------------------------------------|
| J1, J2, J3       |     3 | HDMI type-A receptacle connectors                            |
| JU1, JU2, JU3    |     3 | 3-pin headers                                                |
| R1, R2, R3       |     3 | 680 Ω ±5% resistors (0603)                                   |
| R4               |     1 | 1k Ω ±5% resistor (0603)                                     |
| R5, R6, R7       |     3 | 2.2k Ω ±5% resistors (0603)                                  |
| R8-R11, R13, R14 |     0 | Not installed, resistors (0603)                              |
| R12              |     1 | 10k Ω ±5% resistor (0603)                                    |
| U1, U4           |     2 | 2:1 HDMI high-speed switches (42 TQFN-EP*) Maxim MAX4886ETO+ |
| U2               |     1 | Low-speed switch (20 TQFN-EP*) Maxim MAX4929EETP+            |
| U3               |     1 | 3.3V LDO (6 SOT23) Maxim MAX6329TPUT-T+                      |
| -                |     3 | Shunts                                                       |
| -                |     1 | PCB: MAX4886 Evaluation Kit+                                 |

1

## MAX4886 Evaluation Kit

## Procedure

The MAX4886 EV kit is a fully assembled and tested surface-mount PCB. Follow the steps below to verify the board operation:

- 1) Verify that a shunt is installed across pins 1-2 on jumpers JU1, JU2, and JU3.
- 2) Connect one or two HDMI sources to J2 and/or J3.
- 3) Connect an HDMI-compatible sink to J1.
- 4) Enable the HDMI source(s).

## Detailed Description

The MAX4886 EV kit is a fully assembled and tested surface-mount PCB. The MAX4886 EV kit comprises two circuits, a typical HDMI 2:1 switch, and an eye diagram test circuit.

The HDMI application circuit evaluates the MAX4886 high-speed HDMI/DVI 2:1 digital video switch, combined with the MAX4929E, to perform a full 2:1 HDMI switching function. On the EV kit, the typical 2:1 HDMI switching circuit (top half) can be self-powered from the HDMI source or from an external regulated 5V source and provides on-board 3.3V regulation to power the switching circuit.  All  signal  traces  in  the  HDMI  application  circuit are 100 Ω differential controlled-impedance traces.

A separate test circuit is also provided at the bottom of the MAX4886 EV kit for eye diagram evaluation using SMA connections and 50 Ω controlled-impedance traces.

## Logic Inputs (SEL)

The MAX4886 SEL pin controls the signal paths between source 1 and source 2. By setting jumper JU1 (see Table 1), SEL can be configured to set the signal path either from J3 to J1 or from J2 to J1.

## Component Suppliers

| SUPPLER                                | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor                  | 516-435-1110 | www.centralsemi.com         |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX4886 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- One or two HDMI sources
- HDMI-compatible sink (e.g., monitor)

## Table 1. Jumper JU1 Functions

| SHUNT POSITION   | MAX4886 SEL PIN   | SIGNAL PATH   |
|------------------|-------------------|---------------|
| 1-2*             | Connected to VDD  | J3 to J1      |
| 2-3              | Connected to GND  | J2 to J1      |

*Default position.

## Input Supply and On-Board Regulation

Jumper JU2 selects between the MAX4886 EV kit's power-up options, either through the HDMI source applied at J2/J3 or an external 5V DC power supply. To configure these options, set JU2 as desired (see Table 2). The MAX6329 then converts the voltage from 5V (V+) to 3.3V (VDD) to power the MAX4886 and MAX4929E (top half). Note that when powering from a regulated external  5V  supply,  make sure to apply power before the HDMI signal is applied.

## Table 2. Jumper JU2 Functions

| SHUNT POSITION   | EV KIT INPUT SUPPLY            |
|------------------|--------------------------------|
| 1-2*             | Supplied from HDMI source      |
| 2-3              | Externally supplied to +5V pad |

*Default position.

## MAX4929E Enable Input (HIZ2)

The MAX4929E is enabled through configuration of the HIZ1  and  HIZ2  pins.  Jumper  JU3  controls  the MAX4929E's enable input on the EV kit by controlling the HIZ2 pin. By configuring JU3 to the desired setting (see Table 3), the MAX4929E can be set for normal operation or placed in a high-impedance state. Note that the MAX4929E's HIZ1 pin is set to GND by default.

## Table 3. Jumper JU3 Functions

| SHUNT POSITION   | MAX4929E HIZ2 PIN   | FUNCTION                       |
|------------------|---------------------|--------------------------------|
| 1-2*             | Connected to VDD    | Normal operation (enabled)     |
| 2-3              | Connected to GND    | High-impedance mode (disabled) |

*Default position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## CEC Channel

The consumer electronics control (CEC) channel is optional for implementation on the MAX4886 EV kit. In order to use this channel, populate R13 and R14 as necessary with a 0 Ω resistor.

<!-- image -->

## MAX4886 Evaluation Kit

## Eye Diagram Test Circuit

A separate test circuit is provided in the bottom section of the MAX4886 EV kit for eye diagram evaluation of the MAX4886 IC. This circuit provides differential SMA inputs and outputs with 50 Ω controlled-impedance traces. R8-R11 can be populated to terminate as necessary. A regulated 3.3V power supply is required between VIN and GND2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4886 Evaluation Kit

Figure 1a. MAX4886 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4886 Evaluation Kit

Figure 1b. MAX4886 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4886 Evaluation Kit

Figure 2. MAX4886 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

Figure 3. MAX4886 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

<!-- image -->

Figure 4. MAX4886 EV Kit PCB Layout-GND Layer 2

<!-- image -->

## MAX4886 Evaluation Kit

Figure 5. MAX4886 EV Kit PCB Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  MAX4886

## MAX4886 Evaluation Kit

Figure 6. MAX4886 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX4886 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_