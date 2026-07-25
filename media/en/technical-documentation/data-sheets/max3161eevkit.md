<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX3161E evaluation kit (EV kit) circuit demonstrates  the  RS-232/RS-485/RS-422 multiprotocol transceivers using the MAX3161E IC. The circuit can be configured to operate as a dual transceiver in RS-232 mode or as a single transceiver in RS-485/RS-422 mode. The MAX3161E RS-232 data rates can reach 1Mbps, while RS-485/RS-422 data rates can reach 10Mbps. The configurable slew-rate limiting feature reduces data rates for either protocol to achieve reduced EMI.

In  RS-485/RS-422 mode, the EV kit demonstrates fullduplex or half-duplex communication. The MAX3161E drivers feature short-circuit and thermal protection as well  as  fail-safe  circuitry  for  open,  shorted,  or  unconnected RS-485/RS-422 receiver inputs. The MAX3161E EV kit operates from a single 3V to 5.5VDC supply capable of providing 100mA.

## Component List

| DESIGNATION        |   QTY | PART DESCRIPTION                                                     |
|--------------------|-------|----------------------------------------------------------------------|
| C1, C2, C3, C5     |     4 | 0.47µF ±10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A474K |
| C4                 |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0402) Murata GRM155R61A104K   |
| C6                 |     1 | 10µF ±10%, 10V X5R ceramic capacitor (0805) Murata GRM21BR61A106K    |
| J1                 |     1 | DB9 male right-angle connector                                       |
| J2                 |     1 | 5-position terminal block (5mm)                                      |
| JU1-JU4, JU9, JU10 |     6 | 2-pin headers                                                        |
| JU5-JU8            |     4 | 3-pin headers                                                        |
| R1-R4              |     4 | 100k Ω ±5% resistors (0603)                                          |
| R5, R6             |     2 | 120 Ω ±1% resistors (1206)                                           |
| U1                 |     1 | MAX3161EEAG+ (24-pin SSOP)                                           |
| -                  |    10 | Shunts (JU1-JU10)                                                    |
| -                  |     1 | PCB: MAX3161E Evaluation Kit+                                        |

Features

- ♦ 3V to 5.5V Single-Supply Operation
- ♦ Configurable Multiprotocol Operation: 2Tx/2Rx RS-232 Transceivers Single RS-485/RS-422 Transceiver
- ♦ 10Mbps RS-485/RS-422 Data Rates and 1Mbps RS-232 Data Rates
- ♦ Configurable RS-232/RS-485 Transmitter Slew Rates
- ♦ Configurable Full-Duplex/Half-Duplex RS-485/ RS-422 Operation
- ♦ Fully Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE    | IC PACKAGE   |
|----------------|---------------|--------------|
| MAX3161EEVKIT+ | 0°C to +70°C* | 24 SSOP      |

## Component Supplier

| SUPPLIER              | PHONE        | WEBSITE        |
|-----------------------|--------------|----------------|
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com |

Note: Indicate that you are using the MAX3161E when contacting this component supplier.

## MAX3161E Evaluation Kit

## Quick Start

## Recommended Equipment

- 3.3V, 0.5A DC power supply
- Logic function generator
- Oscilloscope

receiver operate in full-duplex or half-duplex mode and communicate at  data  rates  up  to  10Mbps.  The MAX3161E receiver represents a 1/8 unit load on the RS-485/RS-422 bus. Resistors R5 and R6 provide a configurable termination for the RS-485/RS-422 bus.

Terminal block J2 eases connection to the RS-485/RS422 bus. The DB9 connector J1 is available for interfacing with an RS-232 serial line. See Table 5 and Figures 1, 2, and 3 for the respective signal pins or pads.

## Jumper Selection

The MAX3161E EV kit utilizes several jumpers to reconfigure circuit features and functionality: IC enable, slew-rate selection, communication-protocol selection, full-duplex/ half-duplex communication, DTE/DCE connections, and RS-485/RS-422 differential I/O termination.

## Enable

The MAX3161E EV kit features jumper JU1 to enable the MAX3161E or place the IC in shutdown mode, thus reducing quiescent current. A SHDN PCB pad is also provided for the shutdown signal to interface with an external controller. See Table 1 for configuring jumper JU1.

## Table 1. MAX3161E Enable (Jumper JU1)

| SHUNT POSITION   | SHDN PIN                             | EV KIT FUNCTION   |
|------------------|--------------------------------------|-------------------|
| Installed        | Connected to GND                     | MAX3161E shutdown |
| Not installed    | Connected to VCC through resistor R1 | MAX3161E enabled  |

## Slew-Rate Selection

Jumper JU2 on the EV kit configures the MAX3161E communication slew-rate mode. Slew-rate limited-mode operation minimizes EMI radiation, while fast-mode operation optimizes maximum data rates for either protocol. See Table 2 for configuring jumper JU2 and refer to the MAX3161E IC data sheet for more information on slew-rate configuration.

## Table 2. Slew Rate (Jumper JU2)

| SHUNT POSITION   | FAST PIN                             | EV KIT FUNCTION                                                                   |
|------------------|--------------------------------------|-----------------------------------------------------------------------------------|
| Installed        | Connected to GND                     | Slew-rate limited mode. RS-232/RS-485/RS-422 250kbps maximum data rate            |
| Not installed    | Connected to VCC through resistor R2 | Fast mode. RS-232 1Mbps maximum data rate; RS-485/RS-422 10Mbps maximum data rate |

## Procedure

The MAX3161E EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed .

- 1) Verify  that  shunts  are  installed  across  pins  1-2  of jumpers JU5-JU8 (data communications equipment (DCE) mode).
- 2) Verify that a shunt is installed on jumpers JU3 (RS-232 mode) and JU4 (full-duplex mode).
- 3) Verify that shunts are not installed on jumpers JU1 (MAX3161E enabled), JU2 (fast mode), and JU9 and JU10 (RS-485/RS-422 differential I/O not terminated).
- 4) Set the DC power-supply output to 3.3V and disable the output.
- 5) Set the logic function generator to a 3.3VP-P, 500kHz, 1.65VDC offset square wave and disable the output. Terminate the function generator as needed.
- 6) Connect the DC power-supply positive output to the VCC pad on the EV kit.
- 7) Connect the supply ground to the GND pad next to VCC on the EV kit.
- 8) Connect the logic function generator output to the DI/T1IN PCB pad and connect ground to the GND PCB pad.
- 9) Enable the power-supply output and then the function generator output.
- 10) Use the oscilloscope to measure the transmitter output T1OUT at pin 3 of jumper JU5. Verify that the waveform is a 500kHz square wave and is approximately ±5VP-P.

## Detailed Description

The MAX3161E EV kit demonstrates the MAX3161E RS-232/RS-485/RS-422 multiprotocol transceiver IC. The EV kit operates from a 3V to 5.5VDC source capable of supplying 100mA.

The EV kit features jumpers to configure the communication protocol to RS-232 operation or RS-485/RS-422 operation. In RS-232 mode operation, the MAX3161E communicates at data rates up to 1Mbps. In RS-485/ RS-422 mode operation, the differential driver and

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3161E Evaluation Kit

## RS-232/RS-485/RS-422 Protocol Selection

EV kit jumper JU3 sets the communication protocol to either RS-232 or RS-485/RS-422. See Table 3 for configuring jumper JU3. For additional protocol-configuration information, refer to the Functional Diagrams section of the MAX3161E IC data sheet.

## RS-485/RS-422 Communication Mode

EV kit jumper JU4 configures the MAX3161E IC's RS-485/ RS-422 communication mode to full duplex or half duplex. To receive RS-485 data, disable the RS-485 outputs by driving the DE485/T2IN PCB pad low. See Table 4 to configure jumper JU4 for the desired mode of communication.

Header J2 is labeled for full-duplex RS-485/RS-422 communication; however, the driver outputs (Y and Z) are multiplexed with the receiver inputs (A and B) during half-duplex communication. Refer to the HalfDuplex RS-485/RS-422 Operation  and MAX3161E Functional Diagram sections of the MAX3161E IC data sheet for further details.

## Table 3. RS-232/RS-485/RS-422 Protocol (Jumper JU3)

| SHUNT POSITION   | RS-485/RS-232 PIN                    | EV KIT FUNCTION    |
|------------------|--------------------------------------|--------------------|
| Installed        | Connected to GND                     | RS-232 mode        |
| Not installed    | Connected to VCC through resistor R3 | RS-485/RS-422 mode |

## Table 5. DTE/DCE Modes (Jumpers JU5-JU8)

| SHUNT    | JU5                   | JU6                   | JU7 J1 PIN 7   | JU8 J1 PIN 8   | J1 CONNECTION MODE   |
|----------|-----------------------|-----------------------|----------------|----------------|----------------------|
| POSITION | J1 PIN 2 CONNECTED TO | J1 PIN 3 CONNECTED TO | CONNECTED TO   | CONNECTED TO   |                      |
| 1-2      | R1IN                  | T1OUT                 | T2OUT          | R2IN           | DCE                  |
| 2-3      | T1OUT                 | R1IN                  | R2IN           | T2OUT          | DTE                  |

## Table 6. RS-485/RS-422 Termination (Jumpers JU9 and JU10)

| SHUNT POSITION   | JU9 RS-485 INPUT                     | JU10 RS-485 OUTPUT                   | TERMINATION VALUE   |
|------------------|--------------------------------------|--------------------------------------|---------------------|
| Installed        | A connected to B through resistor R6 | Y connected to Z through resistor R5 | 120 Ω termination   |
| Not installed    | Not connected                        | Not connected                        | -                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DTE/DCE Connections

The EV kit features jumpers JU5, JU6, JU7, and JU8 to configure the RS-232 connector J1 as a data terminal equipment (DTE) or as a data communications equipment (DCE) connector. See Table 5 for configuring the respective jumpers for DTE or DCE connection mode.

## RS-485/RS-422 Termination

EV kit jumpers JU9 and JU10 configure the RS-485/RS422 termination. JU9 sets the input termination with resistor R6. JU10 sets the output termination with resistor R5. See Table 6 for the RS-485/RS-422 termination options.

## EV Kit I/O Connections

The MAX3161E EV kit features PCB pads for interfacing with logic signals and DB9 connector J1 to interface with an RS-232 serial line. Terminal block J2 eases connection to an RS-485/RS-422 bus. See Figures 1 or 2 for RS-232 or RS-485/RS-422 transceiver functional modes.

The RS-232/RS-485/RS-422 input range is ±25V and the output range is ±5V.

## Table 4. Communication Mode (Jumper JU4)

| SHUNT POSITION   | HDPLX PIN                            | RS-485/RS-422 MODE   |
|------------------|--------------------------------------|----------------------|
| Installed        | Connected to GND                     | Full-duplex mode     |
| Not installed    | Connected to VCC through resistor R4 | Half-duplex mode     |

## MAX3161E Evaluation Kit

Figure 1. MAX3161E EV Kit I/O Function in RS-232 Mode

<!-- image -->

Figure  2. MAX3161E EV Kit I/O Function in RS-485/RS-422 Mode (Full Duplex)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX3161E Evaluation Kit

<!-- image -->

Figure 3. MAX3161E EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3161E Evaluation Kit

Figure 4. MAX3161E EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX3161E EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX3161E Evaluation Kit

Figure 6. MAX3161E EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

CARDENAS

7