<!-- lastmod 2022-08-05 -->
## General Description

The MAX5944 evaluation kit (EV kit) circuit demonstrates the multiple functions of the MAX5944 IC. The MAX5944 IC is a two-channel controller that performs hot-swapping, power-supply ORing, and current-limiting functions for FireWire TM applications. The MAX5944 controls n-channel MOSFETs to regulate load current from two input power supplies and performs low-voltage-drop power-supply ORing. The output current limit and input undervoltage-lockout thresholds are configurable.

The MAX5944 EV kit is intended for 7.5V to 37V FireWire power-supply applications. The current-limit threshold is configured to 1.6A per channel. Shutdown mode can be controlled with an on-board jumper. A fault output for each channel is provided for circuit monitoring.

Firewire is a trademark of Apple Computer, Inc.

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX5944EVKIT | 0 ° C to +70 ° C | 16 SO        |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------|
| C1, C3        |     0 | Not installed, electrolytic capacitors (16mm x 16.5mm)                                          |
| C2, C5        |     2 | 1µF ± 10%, 50V X7R ceramic capacitors (1206) TDK C3225X7R1H105K                                 |
| C4, C6        |     2 | 1µF ± 10%, 50V X7R ceramic capacitors (1210) TDK C3216X7R1H105K                                 |
| C7, C8        |     2 | 1000pF ± 10%, 100V X7R ceramic capacitors (0603) TDK C1608X7R1H102K or Taiyo Yuden UMK107B102KZ |
| C9-C12        |     0 | Not installed, ceramic capacitors (0603)                                                        |
| C13, C14      |     0 | Not installed, electrolytic capacitors (8mm x10.2mm)                                            |
| D1, D2        |     2 | Red LEDs (0603)                                                                                 |
| J1, J2        |     2 | IEEE 1394 FireWire vertical connectors                                                          |
| JU1, JU2, JU3 |     3 | 2-pin headers                                                                                   |
| N1, N2        |     2 | 40V, 7.2A, dual n-channel MOSFETs (8 SO PowerPAK) Vishay Si7958DP                               |

<!-- image -->

## Features

- ♦ Safely Hot-Swaps 7.5V to 37V FireWire Power Supplies
- ♦ Demonstrates Two-Channel Hot-Swap
- ♦ Current Limit Configured for 1.6A per Channel
- ♦ Low-Voltage-Drop Power ORing
- ♦ Demonstrates Active Current-Limit Feature
- ♦ Programmable Load Current Limit
- ♦ 2ms Regulated Current-Limit Timeout
- ♦ Autoretry Fault Management
- ♦ Configurable Undervoltage Lockout
- ♦ Overcurrent FAULTA and FAULTB Output Status Indicators
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Component List

| DESIGNATION                                    |   QTY | DESCRIPTION                                                      |
|------------------------------------------------|-------|------------------------------------------------------------------|
| R1, R2                                         |     2 | 0.03 Ω± 1%, 0.5W sense resistors (1206) IRC LRC-LR1206-01-R030-F |
| R3, R5                                         |     2 | 100k Ω ± 1% resistors (0603)                                     |
| R4, R6, R7, R8, R13, R14                       |     0 | Not installed, resistors (0805)                                  |
| R9-R12                                         |     4 | 4.7k Ω ± 5% resistors (1206)                                     |
| R15                                            |     1 | 10k Ω ± 5% resistor (0603)                                       |
| R16, R17                                       |     2 | 150k Ω ± 5% resistors (0603)                                     |
| TP1, TP2, TP4, TP5, FAULTA , FAULTB            |     6 | Miniature PC test points (red)                                   |
| TP3, TP6-TP10                                  |     6 | Multipurpose PC test points (red)                                |
| TP11-TP14                                      |     4 | Multipurpose PC test points (black)                              |
| VINA, OUTA, VINB, OUTB, PGND, PGND, PGND, PGND |     8 | Noninsulated banana-jack connectors                              |
| U1                                             |     1 | MAX5944ESE (16-pin SO)                                           |
| -                                              |     3 | Shunts (JU1, JU2, JU3)                                           |
| -                                              |     1 | MAX5944 EV kit PC board                                          |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX5944 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| IRC         | 361-992-7900 | www.irctt.com         |
| Taiyo Yuden | 800-348-2496 | www.t-yuden.com       |
| TDK         | 847-803-6100 | www.component.tdk.com |
| Vishay      | 203-268-6261 | www.vishay.com        |

Note: Indicate that you are using the MAX5944 when contacting these component suppliers.

## Quick Start

## Required Equipment

- Two 35V, 2A adjustable power supplies
- Two voltmeters or one dual-channel oscilloscope

The MAX5944 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for simple board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify  that  shunts  are  not  installed  across  jumpers JU1 (channel A enabled), JU2 (channel B enabled), and JU3 (ORing function enabled).
- 2) Connect a voltmeter across the OUTA and PGND EV kit PC-board pads.
- 3) Connect a voltmeter across the OUTB and PGND EV kit PC-board pads.
- 4) Connect the positive terminal of one power supply to the VINA banana jack. Connect the ground terminal of this power supply to the PGND banana jack.
- 5) Connect the positive terminal of the second power supply to the VINB banana jack. Connect the ground terminal of this power supply to the PGND banana jack.
- 6) Set both power supplies to 18V.
- 7) Turn on the power supplies.
- 8) Verify  that  the  voltmeters  connected  to  OUTA  and OUTB outputs measure approximately 17.5V.
- 9) Verify  that  LEDs  D1  and D2 are off (there are no fault conditions).
- 10) The EV kit is ready for further testing.

## Detailed Description

The MAX5944 EV kit demonstrates the ORing and hotswap current-limiting functions of the MAX5944 twochannel controller. The MAX5944 controls a dual n-channel MOSFET (in a single SO8 package) in each channel to implement current regulation between the input power sources and the loads. The MAX5944 implements a low-drop ORing function that is required for power-supply redundancy and fault isolation in highreliability  power systems. The MAX5944 EV kit board is designed to operate in 7.5V to 37V FireWire systems.

During a startup cycle, the two n-channel MOSFETs on each channel are off until the input voltage exceeds the internal 6.5V (typ) UVLO and the configurable ON\_ thresholds. Once the input voltage exceeds these two thresholds, the MAX5944 controller keeps the ORing MOSFET (N1-A or N2-B) off to prevent back charge from the output, and then slowly enhances the gate of the current-limiting MOSFET, N1-B or N2-A, to ramp the output current. When the voltage across the sense resistor exceeds the internal ORing voltage VOR threshold,  the  MAX5944 turns on the ORing MOSFET. After the ORing and current-limiting MOSFETs have been turned on, the controller continues to monitor the output current by measuring the voltage across the sense resistor.  If  the  output  current  exceeds  the  configured current-limit  (ILIM)  threshold,  the  controller  lowers  the gate voltage of the current-limiting MOSFET to regulate the output current at the limit. If the output current is not lowered to the programmed threshold within the timeout period of 2ms (typ), the controller turns off both MOSFETs and asserts a logic-low on the FAULT\_ output PC board pad to signal an overcurrent fault condition.  The  controller  automatically  restarts  a  new  cycle after 259ms (typ).

The MAX5944 EV kit features jumpers to control the shutdown and ORing modes. The undervoltage-lockout threshold can be configured by installing resistors R4 and R6 on the EV kit board. LEDs D1 or D2 are turned on during a current-limit fault occurrence in channel A or channel B, respectively.

## Input Source

The MAX5944 EV kit can operate from a single 7.5V to 37V, 3.2A input source connected to both input channels VINA and VINB or two 1.6A power sources connected individually to each channel. Connect a power supply across VINA and PGND banana jacks to evaluate channel A. Connect a power supply across VINB and PGND banana jacks to evaluate channel B.

The MAX5944 EV kit controller turns on the respective MOSFETs  when  the  input  voltage  exceeds  the 6.5V(typ) VIN\_ default undervoltage lockout and the configurable ON\_ thresholds.

Undervoltage Lockout Thresholds/Disable The MAX5944 EV kit requires that the voltages at VIN\_ exceed the MAX5944 internal undervoltage threshold and the ON\_ pin voltage, VON\_REF, 1.24V (typ) threshold for normal operation. If these conditions are not met, the MAX5944 controller turns off either MOSFET

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

N1 or N2 to disconnect the VIN\_ input power supply from the output OUT\_. The controller returns to normal operation when these conditions are again met. The VIN\_ internal default undervoltage threshold is 6.5V (typ).  The  undervoltage threshold for channel A input VINA, or channel B input VINB, can be reconfigured by installing resistor R4 or R6, respectively. Use the following equations to select thenew value for resistor R4 or R6:

<!-- formula-not-decoded -->

where UVA is the new undervoltage-lockout threshold for channel A, and UVB is the new undervoltage-lockout threshold for channel B. Resistors R3 and R5 are 100k Ω .

The MAX5944 EV kit channel A or channel B can be disabled by installing a shunt on jumper JU1 or JU2, respectively, which connect the ON\_ pins to ground. The MAX5944 controller turns off the respective MOSFETs when the channel is disabled. See Table 1 and Table 2 for jumper JU1 and JU2 configurations.

## Table 1. Jumper JU1 Configuration

| SHUNT POSITION   | ONA PIN CONNECTION                    | EV KIT FUNCTION    |
|------------------|---------------------------------------|--------------------|
| Not installed    | Connected to VINA through resistor R3 | Channel A enabled  |
| Installed        | Connected to GND                      | Channel A disabled |

Table 2. Jumper JU2 Configuration

| SHUNT POSITION   | ONB PIN CONNECTION                    | EV KIT FUNCTION    |
|------------------|---------------------------------------|--------------------|
| Not installed    | Connected to VINB through resistor R5 | Channel B enabled  |
| Installed        | Connected to GND                      | Channel B disabled |

<!-- image -->

## MAX5944 Evaluation Kit

## Power-Supply ORing

The MAX5944 EV kit ORing function can be enabled or disabled by configuring jumper JU3. See Table 3 for jumper JU3 configuration.

Table 3. Jumper JU3 Configuration

| SHUNT POSITION   | ONQ1 PIN CONNECTION                  | EV KIT FUNCTION   |
|------------------|--------------------------------------|-------------------|
| Not installed    | Connected to GND through resistor R5 | ORing enabled     |
| Installed        | Connected to VINA                    | ORing disabled    |

When the ORing function is disabled, the MAX5944 controller fully  enhances the ORing MOSFETs N1-A and N2-B during normal operation, regardless of the load-current condition. In this mode, current can flow from the output OUT\_ to the input VIN\_ if the voltage present at the OUT\_ terminal is higher than the voltage at the VIN\_ terminal. There is no active reverse current limiting in this mode.

When the ORing function is enabled, the MAX5944 controller turns the respective ORing MOSFET on or off, depending on the load current conditions. Initially, during startup, the ORing MOSFET is turned off and the load current conducts through the MOSFET's body diode. The MAX5944 controller turns on the ORing MOSFET when the voltage across the respective current-sense resistor exceeds the 5mV(typ) VOR threshold.  The controller continues to monitor the voltage across the sense resistor and turns off the MOSFET when that voltage drops below the VOR threshold. When the ORing MOSFET is turned off, current cannot back-drive the input source VIN\_ if the voltage at OUT\_ is higher than the VIN\_ voltage.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5944 Evaluation Kit

## Current Limiting

The MAX5944 EV kit limits the output current to the configured current-limit (ILIM) threshold, by monitoring the voltage across the current-sense resistor and regulating  the  GATE2\_ voltage and causing the current-limiting MOSFET (N1-B or N2-A) to act like a current source. The MAX5944 EV kit ILIM thresholds are configured to 1.6A with 30m Ω current-sense resistors, R1 and R2, for channel A and channel B, respectively. When the load current is less than ILIM, the current-limiting MOSFET is fully enhanced. When the load current attempts to exceed ILIM, the MOSFET gate voltage is reduced to regulate the output current. If the load current demand exceeds ILIM for longer than the currentlimit timeout period of 2ms, MOSFET N1 or N2 is turned off to disconnect the load. The FAULT\_ PC board output pad is also asserted low and the corresponding fault LED is turned on.

The output ILIM is determined by the value of sense resistors  and  the  current-limit  voltage  threshold  (VTH) across the sense resistor. The MAX5944 VTH threshold is 50mV (typ).

Change current-sense resistors R1 or R2 for channel A or  channel B respectively, to reconfigure the output current limits. Use the following equations to select new resistor values:

<!-- formula-not-decoded -->

where VTH is 50mV and ILIM1 and ILIM2 are the new output current limits. Choose a sense resistor that is rated for the new power-dissipation levels. Verify that the power ratings for MOSFETs N1 and N2 meet the new operating conditions.

## FAULT \_ and Autoretry

The MAX5944 EV kit FAULTA and FAULTB output signals are high-voltage outputs that are asserted low when a current-limit fault condition has occurred. The FAULTA output is pulled up to VINA during normal operating conditions on channel A. The FAULTB output is pulled up to VINB during normal operating conditions on channel B. During a current-limit fault event, the MAX5944 turns off the affected channel's MOSFET and asserts a logic-low signal on the FAULT\_ output. Red LED D1 or D2 is turned on during a current-limit fault condition at channel A or channel B, respectively.

The MAX5944 automatically attempts to restart 259ms (typ)  after  a  current-limit  fault  condition  has  occurred. The FAULT\_ outputs are cleared every restart cycle.

## EV Kit Reconfiguration

The MAX5944 EV kit can be configured to simulate a FireWire power bus system with two input power supplies or a single power-supply powering two FireWire ports.

To simulate a FireWire power bus with two input power supplies, connect independent power supplies to the VINA and to the VINB banana-jack input connectors, and then connect the OUTA and OUTB banana jacks with one 4A-rated cable.

To simulate a single power-supply powering two FireWire ports, connect a 4A power supply to the VINA and PGND banana-jacks. Then connect the VINA banana jack to the VINB banana jack. Connect two independent loads to the OUTA and to the OUTB banana jacks. FireWire port connectors are also available on the EV kit for power and ground-pin-connection evaluation. FireWire port connector J1 is used for channel A and FireWire port connector J2 is used for channel B. The FireWire ports J1 and J2 do not have connections to the signal pins.

Multiple MAX5944 EV kits can be connected together to simulate the implementation of power-supply ORing and hot-swapping in FireWire power systems. Connect the OUT\_ outputs of two or more EV kits, as well as their  respective  ground (PGND) connections, to simulate  a  FireWire  system with multiple power sources. Connect independent power supplies to the VIN\_ input of  each EV kit. Start up each power supply independently and observe the undervoltage lockout, ORing, and current-limit feature in each EV kit. Once all the power supplies are turned on, induce fault conditions on the power bus. Note : Each EV kit can be configured for different limits and thresholds for a better evaluation of the MAX5944 functions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX5944 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5944 Evaluation Kit

Figure 2. MAX5944 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX5944 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 4. MAX5944 EV Kit PC Board Layout-Solder Side

<!-- image -->

## MAX5944 Evaluation Kit

Figure 5. MAX5944 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7