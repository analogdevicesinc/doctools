<!-- lastmod 2022-08-02 -->
<!-- image -->

## Evaluates: MAX13487E/MAX13488E

## General Description

The MAX13487E evaluation kit (EV kit) is a fully assembled and tested PCB that contains a half-duplex RS-485 AutoDirection-controlled  transceiver  with  ESD  protection.  The  EV  kit  circuit  features  a  differential  driver  and receiver.  The  circuit's  receiver  is  a  1/4-unit  load  for  the RS-485 bus and can communicate up to 500kbps. The MAX13487E AutoDirection and reduced-driver slew-rate features are demonstrated on the EV kit circuit. The EV kit can also be used to evaluate the MAX13488E IC, which can communicate up to 16Mbps.

Power for the transceiver circuit is provided by a MAX256 H-bridge  DC/DC  converter,  which  powers  the  isolated section  of  the  MAX13487E  RS-485  circuit.  Input-ripple current  and  radiated  noise  are  minimized  by  using  an H-bridge design. The isolated H-bridge DC-DC converter operates at 420kHz. Input power to the EV kit circuit can be supplied by a +5V DC source.

The DC-DC converter circuit uses a surface-mount transformer to provide galvanic isolation and a full-wave rectifier, and provides a regulated +5V to the MAX13487E. A MAX1659 linear low dropout (LDO) regulator provides the regulated output and up to 300mA of current. The output current  limit  and  thermal  shutdown  provide  for  a  robust isolated RS-485 transceiver circuit and power supply. The transceiver and power circuits and PCB are designed for 2500VRMS isolation.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                          |
|----------------|-------|----------------------------------------------------------------------|
| C1             |     1 | 10µF ±10%, 10V X7R ceramic capacitor (1206) Murata GRM31CR71A106K    |
| C2             |     1 | 0.47µF ±10%, 16V X7R ceramic capacitor (0805) Murata GRM219R71C474K  |
| C3, C5, C6, C7 |     4 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K  |
| C4             |     1 | 1µF ±10%, 16V X7R ceramic capacitor (0805) Murata GRM21BR71C105K     |
| D1, D2         |     2 | 30V, 1A Schottky diodes (SOD123) Diodes Inc. B130LAW                 |
| D3             |     1 | 15V, 350mW ±5% zener diode (SOT-23) Central Semiconductor CMPZ5245B+ |

## MAX13487E Evaluation Kit

## Features

- Demonstrates MAX13487E AutoDirection Feature
- Designed for 2500V RMS  Isolation
- 1/4 RS-485 Unit Loading
- 500kbps Half-Duplex RS-485 Communication
- +5V DC Input Range
- Isolated +5V Output
- Center-Tapped Full-Wave Rectifier Output
- 420kHz Switching Frequency
- Output Current Limit and Thermal Shutdown
- Low-Cost Integrated-FET H-Bridge Design
- Also Evaluates MAX13488E (After IC Replacement)
- Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX13487EEVKIT# | EV Kit |

#Denotes RoHS compliant.

| DESIGNATION             |   QTY | DESCRIPTION                                                                               |
|-------------------------|-------|-------------------------------------------------------------------------------------------|
| JU1, JU3, JU4, JU5, JU6 |     5 | 2-pin headers                                                                             |
| JU2                     |     1 | 3-pin header                                                                              |
| R1                      |     1 | 39.2k W ±1% resistor (0603)                                                               |
| R2, R9                  |     2 | 100k W ±5% resistors (0603)                                                               |
| R4, R5                  |     2 | 270 W ±5% resistors (0805)                                                                |
| R6, R8                  |     2 | 220 W ±5% resistors (0805)                                                                |
| R7                      |     1 | 120 W ±5% resistor (0805)                                                                 |
| T1                      |     1 | 1:2.66-turn 3kV RMS isolation transformer (6-pin Gull Wing) HALO Electronics TGMR-380V6LF |
| U1                      |     1 | Half-duplex, high-speed transceiver (8 SO) ADI MAX13487EESA+                              |

19-3204; Rev 2; 8/25

One  Analog  Way,  Wilmington,  MA  01887  U.S.A.    |      Tel:  781.329.4700      |      ©  2025  Analog  Devices,  Inc.  All  rights  reserved. ©  2025 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX13487E Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                      |
|---------------|-------|----------------------------------------------------------------------------------|
| U2            |     1 | Integrated primary-side controller and H-bridge driver (8 SO-EP*) ADI MAX256ASA+ |
| U3            |     1 | Linear regulator (8 SO) ADI MAX1659ESA+                                          |

*EP = Exposed pad.

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- One +5V 550mA power supply with a built-in current meter
- One voltmeter
- One logic signal generator
- One oscilloscope

## Procedure

The  MAX13487E  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed .

- 1) Connect a voltmeter to the VOUT and GND PC pads.
- 2) Verify that a shunt is not installed across the pins of jumper JU1 (U2 enabled).
- 3) Verify that a shunt is installed across pins 1-2 of jumper JU2 (U1 enabled).
- 4) Verify that a shunt is installed across the pins of jumpers JU3 (AutoDirection enabled), JU4 (pulldown), JU6 (pullup), and JU5 (bus terminated).
- 5) Connect the +5V power supply to the VIN pad. Connect the power supply's ground to the PGND pad.
- 6) Turn on the power supply and verify that the voltmeter at VOUT reads +5V.
- 7) Using the logic signal generator, apply a +5V logic signal to the TXD PCB pad and PGND.
- 8) Verify the isolated output signals at A and B pads with the osciloscope.

| DESIGNATION   |   QTY | DESCRIPTION                                       |
|---------------|-------|---------------------------------------------------|
| U4, U5        |     2 | 15Mbps CMOS photocouplers (5 SO) CEL/NEC PS9151-A |
| -             |     6 | Shunts (JU1-JU6)                                  |
| -             |     4 | Rubber bumpers                                    |
| -             |     1 | PCB: MAX13487E Evaluation Kit#                    |

Note: The total output load current at the isolated output VOUT should be limited to less than 300mA.

## Detailed Description of Hardware

The  EV  kit  features  a  MAX13487E  IC  in  an  8-pin  SO surface-mount  package  and  demonstrates  the  ESDprotected MAX13487E RS-485 AutoDirection transceiver. The differential driver and receiver are configured for halfduplex operation and communicate up to 500kbps. The transceiver circuit is a 1/4-unit load on the receiver's bus.

The  EV  kit  features  PCB  pads  to  ease  interfacing  with the driver/receiver logic signals on the non-isolated side using the TXD, RXD, and PGND pads, respectively. The MAX13487E IC is powered from the isolated VOUT supply. Photocoupler U4 provides isolation for the receiver's RO signal (RXD pad) and U5 provides isolation for the data-in DI signal (TXD pad).

The EV kit demonstrates the MAX13487E slew-rate limited driver, which minimizes EMI radiation. Photocouplers U4 and U5 are rated for up to 15Mbps.

The MAX13487E receiver signal is provided at the RO pin. The RO pin will give a logic-high if A-B &gt; +200mV. A logiclow  is  given  if A-B  &lt;  -200mV.  Refer  to  the Transmitting and  Receiving sections  in  the Function  Tables in  the MAX13487E/MAX13488E  IC  data  sheet  for  additional information on the AutoDirection circuitry operation. Also see the AutoDirection and Receiver Enable Selection section in this document for configuring the AutoDirection and receiver operation.

## MAX13487E Evaluation Kit

The  EV  kit  input  power  is  typically  a  +5V  DC  source that  provides  at  least  450mA  of  current  to  the  MAX256 integrated  primary-side  controller  and  H-bridge  driver circuit.  The  MAX256  contains  an  on-board  oscillator, protection circuitry, and internal H-bridge FETs to provide power to the primary of the transformer T1. The MAX256 prevents cross conduction of the H-bridge MOSFETs by implementing break-before-make switching. The MAX256 programmable  oscillator  is  programmed  to  420kHz  by resistor R1. The switching-frequency duty cycle is fixed at 50% to control energy transfer to transformer T1 isolated output.

The MAX256 IC includes UVLO for controlled startup and provides  controlled  turn-on  during  power-up  and  during brownouts.  If  the  input  voltage  at  VIN  falls  below  1.9V (typ), the MAX256 IC will shut down.

Surface-mount transformer T1 provides galvanic isolation and  the  VOUT  output  is  powered  from  a  center-tapped full-wave  rectifier  circuit  (D1  or  D2)  to  reduce  outputvoltage  ripple.  It  feeds  a  MAX1659  LDO  regulator  configured for +5V output. The LDO output is current limited and  features  thermal  shutdown  to  provide  for  a  robust isolated supply at VOUT, which can provide up to 300mA of current.

## Evaluates: MAX13487E/MAX13488E

MAX256  thermally  enhanced  SO  package.  Test  points TP1 (PGND) and TP2 (GND) are provided on the PCB for probing the respective ground plane or to connect the PGND to GND planes for nonisolated evaluation of the circuit.

## Jumper Selection

The  MAX13487E  EV  kit  features  several  jumpers  to reconfigure the receiver/driver enable circuits, and shutdown for the MAX256 and MAX13487E ICs. Additionally, PCB pads are provided for connecting an external load to the isolated +5V output at VOUT and GND.

## Shutdown Control

The MAX13487E EV kit features two jumpers that configure the shutdown mode of the circuit. Jumper JU1 configures the MAX256 DC-DC converter and JU2 configures the MAX13487E IC for shutdown mode. See Table 1 for placing  the  EV  kit  circuit  or  the  desired  IC  in  shutdown mode.

## AutoDirection and Receiver Enable Selection

The two-layer PCB is designed for 2500V RMS  isolation, with  300  mils  spacing  between  the  PGND  and  GND planes.  The  bottom  PCB  PGND  plane  under  U2  is  utilized as a thermal heat sink for power dissipation of the The  MAX13487E  EV  kit  features  a  2-pin  jumper  (JU3) to  set  the  MAX13487E  receiver  mode  of  operation, AutoDirection,  or  receiver  output  enabled.  Refer  to the AutoDirection  Circuitry section  in  the  MAX13487E/ MAX13488E IC data sheet for more information on the MAX13487E RE pin modes of operation. See Table 2 for configuring the receiver mode of operation using jumper JU3.

## Table 1. JU1 and JU2 Shutdown Mode Control

| JU1 SHUNT POSITION   | MAX256 MODE PIN             | JU2 SHUNT POSITION   | MAX13487E SHDN PIN   | EV KIT OPERATION MODE                         |
|----------------------|-----------------------------|----------------------|----------------------|-----------------------------------------------|
| Not installed        | Connected to VIN through R2 | 1-2                  | Connected to VOUT    | All ICs operational                           |
| Installed            | Connected to PGND           | 2-3                  | Connected to GND     | Shutdown                                      |
| Not installed        | Connected to VIN through R2 | 2-3                  | Connected to GND     | MAX13487E shutdown, all other ICs operational |

## Table 2. Driver and Receiver JU3 Functions

| SHUNT POSITION   | RE PIN                      | MAX13487E AUTODIRECTION OR RECEIVER MODE   |
|------------------|-----------------------------|--------------------------------------------|
| Installed        | Connected to VOUT           | AutoDirection enabled*                     |
| Not installed    | Connected to GND through R9 | Receiver RO output enabled                 |

## MAX13487E Evaluation Kit

## RS-485 Bus Pullup/Pulldown and Termination Resistors Configuration

Jumpers  JU6  and  JU4  are  provided  for  connecting  the mandatory pullup and pulldown resistors onto the RS-485 bus A  and  B  lines,  respectively.  Pullup  resistor  R8  and pulldown resistor R6 define the voltage on the A and B lines in conjunction with R7 when the driver input (DI) is high. See Table 3 for configuring the pullup and pulldown resistors. R6 and R8 can be higher valued if the differential terminal resistor (R7) is not used.

## Evaluates: MAX13487E/MAX13488E

Jumper JU5 is provided for terminating the A and B bus lines when the MAX13487E EV kit is connected at the end of an RS-485 bus. Resistor R7 provides 120Ω of termina -tion when jumper JU5 is used. See Table 4 for configuring the termination mode.

## Table 3. JU6, JU4 Functions, Pullup, Pulldown Resistors

| SHUNT POSITION   | AAND B LINE SIGNAL                                                |
|------------------|-------------------------------------------------------------------|
| None             | Not pulled up or down                                             |
| Installed        | A signal pulled up, connected to VOUT B signal pulled down to GND |

## Table 4. JU5 Functions, Bus Termination

| SHUNT POSITION   | A-B PINS AND RS-485 BUS TERMINATION   | EV KIT BUS CONNECTION   |
|------------------|---------------------------------------|-------------------------|
| None             | Not terminated                        | Mid point               |
| Installed        | Terminated                            | End of bus line         |

## Evaluating the MAX13488E IC and Other Transformer Configurations/Designs

## MAX13488E Evaluation

The MAX13487E EV kit can also evaluate the MAX13488E IC. To evaluate the MAX13488E, replace IC U1 with the MAX13488E. Note that the MAX13488E driver slew rate is  not  limited  and  allows  transmission  speeds  of  up  to 16Mbps. Refer to the MAX13487E/MAX13488E IC data sheet for additional information.

## Smaller Transformer and 2000V RMS Isolation Design

The  EV  kit's  two-layer  PCB  is  designed  for  2500V RMS isolation, with 300 mils spacing between the PGND and GND  planes.  Additionally,  transformer  T1  is  rated  for 3000VRMS and is an integral part of the dielectric withstand voltage of the EV kit circuit. Photocouplers U4 and U5  are  guaranteed  to  withstand  3750V RMS .  However, the circuit uses the isolated transformer to transfer power from the primary side to the secondary side and the withstand voltage of the transformer, as well as photocouplers U4 and U5, so the PCB must be considered when designing  and  testing  the  EV  kit  circuit.    For  example,  if  less than 2500V RMS  isolation is needed, a smaller 2000V RMS transformer may be used to save board area, but then the entire circuit will have only 2000V RMS  of isolation.

│

## MAX13487E Evaluation Kit

## MAX13487E EV Kit Schematic

Figure 1. MAX13487E EV Kit Schematic

<!-- image -->

## Evaluates: MAX13487E/MAX13488E

## MAX13487E EV Kit PCB Layouts

Figure 2. MAX13487E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX13487E EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX13487E EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX13487E Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                 | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 1/08            | Initial release                                                                                             | -               |
|                 1 | 11/08           | Revised data sheet in several places with changes to resistors R6 and R8.                                   | 1, 2, 4, 5      |
|                 2 | 8/25            | Revised data sheet with new transformer part number and removed reference of RS-422 and Component Suppliers | 1, 2            |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX13487E/MAX13488E