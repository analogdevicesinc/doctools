<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX14504 evaluation kit (EV kit) provides a proven design to evaluate the MAX14504 dual single-pole/double-throw (SPDT) audio switch. The MAX14504 features negative signal capability and passes signals from -VCC to  +VCC without distortion. The MAX14504 EV kit operates from a 5.5V to 16V input voltage range and provides easy reconfiguration for setting the MAX14504 VCC input voltage.

| DESIGNATION   |   QTY | DESCRIPTION                                                                               |
|---------------|-------|-------------------------------------------------------------------------------------------|
| C1            |     0 | Not installed, ceramic capacitor (0805)                                                   |
| C2, C4        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K or TDK C1608X7R1C104K |
| C3            |     1 | 10µF ±20%, 6.3V X5R ceramic capacitor (0805) Murata GRM21BR60J106M or TDK C2012X5R0J106M  |
| C5            |     1 | 3300pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H332K or TDK C1608X7R1H332K |
| GND           |     1 | Miniature black test point                                                                |
| JU1           |     1 | 5-pin header                                                                              |
| JU2           |     1 | 2-pin header                                                                              |
| JU3, JU4      |     2 | 3-pin headers                                                                             |
| OUT           |     1 | 3.5mm stereo headphone jack                                                               |

## Features

- ♦ Configurable MAX14504 VCC Input Voltage
- ♦ Demonstrates the MAX14504 Distortion-Free Negative Signal Throughput from -VCC to +VCC
- ♦ Enable Control
- ♦ Proven PCB Layout
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX14504EVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| R1            |     1 | 100k Ω ±1% resistor (0603)                                                 |
| R2            |     1 | 115k Ω ±1% resistor (0603)                                                 |
| R3            |     1 | 78.7k Ω ±1% resistor (0603)                                                |
| R4            |     1 | 52.3k Ω ±1% resistor (0603)                                                |
| R5            |     1 | 41.2k Ω ±1% resistor (0603)                                                |
| R6            |     1 | 32.4k Ω ±1% resistor (0603)                                                |
| R7            |     1 | 0 Ω ±5% resistor (0805)                                                    |
| R8-R11        |     4 | 0 Ω ±5% resistors (1206)                                                   |
| U1            |     1 | Dual SPDT audio switch (12 WLP) Maxim MAX14504EWC+ (Top Mark: AAH)         |
| U2            |     1 | Adjustable LDO regulator (8 TDFN-EP*) Maxim MAX6771TALD2+ (Top Mark: +BEG) |
| VCC           |     1 | Miniature red test point                                                   |
| -             |     3 | Shunts (JU1, JU3, JU4)                                                     |
| -             |     1 | PCB: MAX14504 Evaluation Kit+                                              |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX14504 when contacting these component suppliers.

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX14504 Evaluation Kit

## Quick Start

## Required Equipment

- 5.5V to 12V DC power supply
- Audio signals or signal generator

## Detailed Description of Hardware

The MAX14504 EV kit provides a proven design to evaluate the MAX14504 SPDT audio switch. The MAX14504 EV kit passes audio signals from -VCC to +VCC without distortion and frequencies &lt; 20Hz to &gt; 20kHz. The audio signal can be obtained at the OUT headphone jack or the COM1, COM2, and GND PCB pads.

The MAX14504 EV kit operates from 5.5V to 16V applied at the VPOWER and GND PCB pads. A MAX6771 (U2) LDO regulator and jumpers JU1 or JU2 set the MAX14504 VCC input voltage to 2.3V, 2.8V, 3.6V, 4.2V, or 5V. An independent voltage source can also be used to power the MAX14504 VCC input by removing resistor R7 and applying the voltage source at  the  VCC and GND test points. The VCC voltage range is limited between 2.3V and 5.5V.

Note that when configuring the MAX14504 VCC voltage, a shunt must not be installed at jumpers JU1 and JU2 simultaneously. See Table 1 for proper jumper configuration for setting the MAX14504 VCC input voltage.

## Table 1. MAX14504 VCC Voltage Configuration (JU1, JU2)

| SHUNT POSITION   | SHUNT POSITION   | MAX14504                                                                        |
|------------------|------------------|---------------------------------------------------------------------------------|
| JU1              | JU2              | V CC Voltage (V)                                                                |
| 1-2              | Not installed    | 2.3                                                                             |
| 1-3              | Not installed    | 2.8                                                                             |
| 1-4              | Not installed    | 3.6                                                                             |
| 1-5              | Not installed    | 4.2                                                                             |
| Not installed    | Installed        | 5                                                                               |
| Not installed    | Not installed    | Resistor R7 removed and external power source applied at VCC and GNDtest points |

## Procedure

The MAX14504 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are installed across pins 1-4 of jumper JU1 (VCC = 3.6V), pins 1-2 of jumpers JU3 (MAX14504 disabled), and JU4 (NO\_ routed to COM\_).
- 2) Verify that a shunt is not installed on jumper JU2.
- 3) Connect the power-supply ground to the GND PCB pad on the EV kit.
- 4) Connect the power-supply positive terminal to the VPOWER PCB pad on the EV kit.
- 5) Turn on the power supply and set it to 12V.
- 6) Connect the audio signal generator positive terminals to the NO1 and NO2 PCB pads.
- 7) Connect the audio signal ground connections to the GND PCB pad.
- 8) Enable the audio signals.
- 9) Analyze the audio signals at the COM1 and COM2 PCB pads.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX14504 Evaluation Kit

## Enable Input ( EN )

Jumper JU3 controls the MAX14504 enable function. Install  a  shunt  across  pins  1-2  to  disable  the MAX14504. When disabled, the signals applied at NC\_ and NO\_ are not passed through to the respective COM\_ outputs. Install a shunt across pins 2-3 to enable the  MAX14504. The enable function can also be controlled by removing the shunt on jumper JU3 and connecting an external controller to the EN and GND PCB pads. See Table 2 for jumper JU2 configuration.

Table 2. Enable Function (JU3)

| SHUNT POSITION   | EN PIN                          | MAX14504 FUNCTION                |
|------------------|---------------------------------|----------------------------------|
| 1-2              | Connected to VCC                | MAX14504 disabled                |
| 2-3              | Connected to GND                | MAX14504 enabled                 |
| Not installed    | Connected to an external signal | EN driven by external controller |

<!-- image -->

## Control Bit (CB)

Jumper JU4 sets the logic at the MAX14504 CB input, which controls the signal path between the audio signals applied at the NO\_ and NC\_ inputs to the COM\_ outputs. Install a shunt across pins 1-2 to pass the signals applied at the NO1 and NO2 PCB pads. Install a shunt across pins 2-3 to pass the signals applied at the NC1 and NC2 PCB pads. See Table 3 for jumper JU4 configuration.

Table 3. Control Bit Function (JU4)

| SHUNT POSITION   | CB PIN                          | AUDIO SIGNAL PATH                     |
|------------------|---------------------------------|---------------------------------------|
| 1-2              | Connected to VCC                | NO1 to COM1, NO2 to COM2              |
| 2-3              | Connected to GND                | NC1 to COM1, NC2 to COM2              |
| Not installed    | Connected to an external signal | Determined by external control signal |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14504 Evaluation Kit

Figure 1. MAX14504 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX14504 Evaluation Kit

<!-- image -->

Figure 2. MAX14504 EV Kit Component Placement GuideComponent Side

Figure 3. MAX14504 EV Kit PCB Layout-Component Guide

<!-- image -->

Figure 4. MAX14504 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5