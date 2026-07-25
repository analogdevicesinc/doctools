<!-- lastmod 2022-08-03 -->
## General Description

The MAX5963 evaluation kit (EV kit) circuit demonstrates the dual hot-swap, current-limit/circuit-breaker, and ORing functions of the MAX5963 controller. The MAX5963 EV kit operates from a 7.5V to 40V DC source. The MAX5963 controls three separate dual n-channel MOSFETs to regulate load current from an input power supply providing up to 2A, and performs low-voltagedrop power-supply ORing for two independent outputs.

The MAX5963 EV kit features several jumpers to evaluate different configurations of the MAX5963. The output current-limit threshold, current-limit timeout period, circuitbreaker threshold and timeout period, ORing threshold, and fault-management features are programmable. Shutdown mode is controlled with on-board jumpers or user-supplied external logic signals. FAULT output signals are also provided for fault-condition monitoring. The EV kit circuit is configurable for evaluating the MAX5963 latchoff or autoretry function and late Vg protection feature.

| DESIGNATION              |   QTY | DESCRIPTION                                                        |
|--------------------------|-------|--------------------------------------------------------------------|
| C1, C12, C13             |     0 | Not installed, ceramic capacitors (2220)                           |
| C2                       |     1 | 1µF ±10%, 50V X7R ceramic capacitor (1206) Murata GRM31MR71H105KA  |
| C3                       |     1 | 220pF ±5%, 50V C0G ceramic capacitor (0805) Murata GRM2165C1H221J  |
| C4, C5, C7, C9, C10, C11 |     0 | Not installed, ceramic capacitors (0805)                           |
| C6                       |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H104K |
| C8                       |     1 | 1µF ±10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H105K   |
| C14, C15, C16            |     0 | Not installed, ceramic capacitors (0603)                           |
| D1, D2                   |     2 | Yellow surface-mount LEDs (1206)                                   |
| GND (x4)                 |     4 | PC test points, black                                              |

<!-- image -->

## Features

- ♦ Safely Hot Swaps 7.5V to 40V Power Supplies
- ♦ Low-Voltage-Drop Power-Supply ORing
- ♦ Demonstrates Active-Current-Limit and CircuitBreaker Features
- ♦ Programmable Current-Limit and Circuit-Breaker Timers
- ♦ Programmable Output-Load Current Limit
- ♦ Demonstrates Fast Current-Limit Response Time
- ♦ Evaluates Late Vg Protection Feature
- ♦ Demonstrates Latchoff and Autoretry Fault Management
- ♦ Overcurrent FAULT Output Status LED Indicators
- ♦ Surface-Mount Construction
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX5963EVKIT+ | EV Kit |

## Component List

| DESIGNATION               |   QTY | DESCRIPTION                                                            |
|---------------------------|-------|------------------------------------------------------------------------|
| GND (x3), PWR, OUTA, OUTB |     6 | Uninsulated banana jacks                                               |
| J1                        |     1 | 11-pin header                                                          |
| JU1-JU4, JU7, JU8         |     6 | 3-pin headers                                                          |
| JU5, JU6, JU9             |     3 | 2-pin headers                                                          |
| N1-N3                     |     3 | 40V, 10.3A dual n-channel MOSFETs (PowerPAK SO8) Vishay Si7958DP-T1-E3 |
| R1                        |     1 | 13.7k Ω ±1% resistor (0805)                                            |
| R2                        |     1 | 10k Ω ±1% resistor (0805)                                              |
| R3, R5                    |     2 | 100k Ω ±1% resistors (0805)                                            |
| R4                        |     1 | 18.2k Ω ±1% resistor (0805)                                            |
| R6                        |     1 | 18.2k Ω ±1% resistor (0805)                                            |
| R7                        |     1 | 130k Ω ±1% resistor (0805)                                             |
| R8                        |     1 | 16.5k Ω ±1% resistor (0805)                                            |
| R9-R12                    |     4 | 4.7k Ω ±5% resistors (1812) Panasonic ERJ12YJ472U                      |

1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX5963 Evaluation Kit

| DESIGNATION       |   QTY | DESCRIPTION                                                         |
|-------------------|-------|---------------------------------------------------------------------|
| R13-R16, R22, R23 |     0 | Not installed, resistors (0805)                                     |
| R17, R21          |     2 | 0.02 Ω ±1%, 0.5W sense resistors (1206) IRC LRC-LRF1206LF-01-R020-F |
| R18               |     1 | 221 Ω ±1% resistor (0805)                                           |
| R19               |     1 | 1k Ω ±1% resistor (0805)                                            |
| R20               |     1 | 100 Ω ±1% resistor (0805)                                           |
| TP1-TP9           |     9 | PC mini test points, red                                            |

## Procedure

The MAX5963 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  shunts  are  installed  across  pins  1-2  of jumpers JU1, JU2, JU3 (MAX5963 enabled), and JU4 (PWR for ON\_).
- 2) Verify that shunts are installed on jumpers JU5 and JU6 (ONA and ONB UVLO enabled).
- 3) Verify  that  a  shunt  is  not  installed  on  jumper  JU9 (latchoff mode).
- 4) Verify  that  shunts  are  installed  across  pins  2-3  of jumpers JU7 (26ms circuit-breaker timeout) and JU8 (3.3ms current-limit timeout).
- 5) Connect a voltmeter across the OUTA and GND banana jacks.

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note: Indicate that you are using the MAX5963 when contacting these component suppliers.

## Quick Start

## Required Equipment

- One 8V to 40V DC power supply capable of supplying up to 3A
- Two voltmeters
- 6) Set the power supply to 18V and then disable the output.
- 7) Connect the positive terminal of the power supply to the PWR banana jack. Connect the ground terminal of this power supply to the GND banana jack.
- 8) Connect a voltmeter or an oscilloscope to the header J1-9 FAULTA pin to capture fault signals and the ground lead to the J1-11 GND pin.
- 9) Turn on the power supply and enable the output.
- 10) Verify  that  the  voltmeter  connected to the OUTA output measures 18V.
- 11) Verify that FAULTA measures approximately 17.3V.
- 12) The EV kit is ready for further testing.

## Detailed Description of Hardware

The MAX5963 evaluation kit (EV kit) circuit demonstrates the ORing and independent dual hot-swap, current-limit/circuit-breaker functions of the MAX5963 controller in a 40-pin TQFN package with an exposed pad. The MAX5963 controls three separate dual n-channel MOSFETs to implement hot-swapping, ORing and current regulation between the input power source and two independent output loads on channels A and B. The MAX5963 implements the low-drop ORing function

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Component List (continued)

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| U1            |     1 | Dual hot-swap and diode ORing controller (40 TQFN-EP*) Maxim MAX5963UTL+ |
| -             |     4 | Rubber bumpers 3M SJ-5003                                                |
| -             |     9 | Shunts (JU1-JU9)                                                         |
| -             |     1 | PCB: MAX5963 Evaluation Kit+                                             |

used for power-supply redundancy and fault isolation in highly reliable  power systems. The MAX5963 EV kit is designed to operate in 7.5V to 40V systems and up to 1A per channel.

During a startup cycle, the two dual n-channel MOSFETs (N2, N3) are off until the PS voltage exceeds the internal 6.5V (typ) and the programmed 1.24V (typ) ON\_ undervoltage lockout thresholds. There are two ways for the MAX5963 channels to turn on, one is if PWR is higher than the UVLO and ON\_ is higher than 1.25V. When the system power (GATEPS) MOSFET N1-A is on, the body diode of GATEOR (MOSFET N1-B) conducts and brings up PS. GATEPS turns on when PWR is &gt; 6.5V (typ) and the combination logic of the ENX, EXY, and ENZ pin signals are positive. The other way for the channels to turn on is if power is applied to the channel itself (either A or B).  Then PS will power up through the body diodes of N2A/N2B or N3A/N3B. Once PS exceeds the PS UVLO, and ON\_ is higher than 1.25V, both channels will turn on. In  this  power mode, current flows from one channel to the other channel. Once the total current in channel A and channel B exceed a threshold, GATEOR is turned on to short out its body diode and minimize its power dissipation. Channel A's current is sensed by resistor R17 and channel B by resistor R21.

The controller continually monitors the output current of both channels. If the output current is not lowered to below the programmed threshold, the controller lowers the respective channel's gate-drive voltage of MOSFET N2 or N3 to regulate the output current at the limit. If the output current is not lowered below the programmed threshold within the timeout period, the controller turns off MOSFETs N2 and N3 and asserts a logic-low on the respective FAULT\_ header J1-9 or J1-10 pin to signal an overcurrent fault condition. Both channels operate independent and identical.

The MAX5963 current-limit timeout period is programmed by resistor R8, and the circuit-breaker timeout period is programmed by resistor R7. Output currentlimit,  circuit-breaker,  and  ORing voltage thresholds are programmed by resistor/capacitor networks R19/C15, R18/C14, and R20/C16, respectively, for both channels. The fault-management function can also be programmed to autoretry or latchoff mode by configuring jumper JU9. The ONA and ONB undervoltage lockout thresholds are reconfigured by jumpers or changing resistors on the EV kit. Shutdown mode is controlled by on-board jumpers or with an external logic signal connected to header J1, ENX, ENY, and ENZ, and GND pins. Various other signals are also available at header J1.

<!-- image -->

## MAX5963 Evaluation Kit

## Input Source

The MAX5963 EV kit operates from a 7.5V to 40V input source connected across the PWR and GND terminals. The input source must deliver up to 2A of current to the EV kit. The MAX5963 EV kit controller starts to function when the PWR voltage exceeds the MAX5963 UVLO voltage threshold of 6.5V (typ), ON\_ UVLO threshold, and all the positive combinations of the ENX, ENY, and ENZ pin signals are positive logic (Table 1).

## Current-Limit and Threshold Configuration

The MAX5963 limits load current by monitoring voltage across channel A's current-sense resistor R17 and R21 for  channel B. The respective channel's MAX5963 GATE\_A or GATE\_B pin voltage is controlled so the respective output load current does not exceed the programmed current-limit threshold (ILIM). The currentlimit threshold is programmed by resistor/capacitor network R19/C15 for both channels. When the load current is &lt; ILIM, the respective dual MOSFET N2 or N3 is fully enhanced. When the load current exceeds ILIM, the respective MOSFET's gate voltage is reduced to regulate the current, causing the MOSFET to act as a current  source.  If  the  load  current  demand  exceeds  ILIM for  longer  than  the  current-limit  timeout  period,  the respective dual MOSFET (N2 or N3) is turned off to disconnect the load. The channel's FAULT\_ signal is also asserted low at the header J1-9 pin for channel A or J110 pin for channel B.

The output current limit is determined by the value of sense resistor R17 or R21 and the programmed current-limit  voltage  threshold  across  the  sense  resistor. The output current limit can be reconfigured by replacing current-sense resistors R17 or R21. Choose sense resistors  that  are  rated  for  the  new  power  dissipation levels  and verify  that  the  power  ratings  for  MOSFETs N1, N2, and N3 meet the new operating conditions.

The current-limit threshold is programmed by resistor/ capacitor network R19/C15 for both channels. To reconfigure the EV kit for a different current-limit threshold,  refer  to  the Current-Limit  Threshold  section  in  the MAX5963 IC data sheet for more information on selecting a new value for the R19/C15 network.

## Circuit-Breaker Configuration

The MAX5963 circuit breaker monitors current across current-sense resistors R17 (channel A) and R21 (channel B). Once the output exceeds the circuit-breaker limit, the circuit-breaker timer begins. When the circuitbreaker timers time out, the respective channel's GATE\_A or GATE\_B pin voltage is pulled low, turning

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5963 Evaluation Kit

off the respective dual MOSFET (N2 or N3). The circuitbreaker limit is determined by the value of sense resistor  R17 or R21 and the programmed circuit-breaker voltage threshold across the sense resistor. The circuitbreaker  voltage  threshold  is  programmed  by resistor/capacitor network R18/C14 for both channels. The circuit-breaker limit can be reconfigured by replacing  current-sense resistors R17 or R21, however, note that this will also change the current limit. Choose current-sense resistors that are rated for the new powerdissipation levels. Additionally, verify that the power ratings for MOSFETs N1, N2, and N3 meet the new operating conditions.

To reconfigure the EV kit for a different circuit-breaker threshold, refer to the Circuit-Breaker Threshold section in the MAX5963 IC data sheet for more information on selecting a new value for the R18/C14 resistor/capacitor network.

## Power-Supply Control and ORing Configuration

The MAX5963 provides a low-voltage-drop ORing function fault isolation and the EV kit is designed to operate in  7.5V  to  40V  systems  while  providing  up  to  1A  per channel. During a startup cycle, the two dual n-channel MOSFETs (N2, N3) are off until the PS voltage exceeds the internal 6.5V (typ) and the programmed 1.24V (typ) ON\_ undervoltage lockout thresholds. There are two ways for the MAX5963 channels to turn on, one is if PWR is higher than the UVLO and ON\_ is higher than 1.25V. When the system power (GATEPS) MOSFET N1-A is on, the body diode of GATEOR (MOSFET N1-B) conducts and brings up PS. GATEPS turns on when PWR is &gt; 6.5V (typ) and the combination logic of the ENX, ENY, and ENZ pin signals are positive.

The other way for the channels to turn on is if power is applied to the channel itself (either A or B). Then PS will power up through the body diodes of N2A/N2B or N3A/N3B. Once PS exceeds the PS UVLO and ON\_ is higher than 1.25V, both channels will turn on. In this power mode, current flows from one channel to the other. Once the total current in channel A and channel B exceeds a threshold, GATEOR is turned on to short out its body diode and minimize its power dissipation. Channel A's current is sensed by resistor R17 and channel B's current is sensed by resistor R21.

The controller continues to monitor the average voltage across sense resistors R17 and R21 and turns off GATEOR when that voltage drops below the VOR threshold. When GATEOR is turned off, current cannot backdrive the input source PWR if the voltage at OUT is higher than the PWR voltage.

The VOR threshold is programmed by resistor R20 and capacitor C16. The VOR threshold is reprogrammed by replacing resistor R20 with a new value. Refer to the Power-Supply ORing (GATEPS and GATEOR) section in the MAX5963 IC data sheet.

## Jumper Selection

The MAX5963 EV kit features several jumpers to reconfigure the enable/disable, UVLO, current-limit timer, and other fault-management functions.

## Shutdown, Standby, and Enabled Modes

The MAX5963 EV kit features three jumpers to reconfigure the enable/disable MAX5963 inputs and the poweron/power-off control. The MAX5963 can be configured for  three  modes of operation, shutdown, standby, and enabled. The ENZ provides the power-on/power-off control. The MAX5963 logically combines the ENX, ENY, ENZ signals (e.g., [(ENX or ENY) and ENZ]) to control GATEPS, the system power MOSFET, N1A. Onboard jumpers JU1, JU2, and JU3 control the EV kit's mode of operation; an external controller can also be used. See Table 1 to reconfigure jumpers JU1, JU2, and JU3 for the desired mode of operation.

Alternatively, the EV kit can be controlled by an external logic signal connected to header J1 using the ENX, ENY, and ENZ, and GND header pins. Remove the shunts from jumpers JU1, JU2, and JU3 and use an external controller with a logic signal that provides a logic-low ( ≤ 0.7V) or logic-high ( ≥ 1.8V) signal to set the mode of operation for the EV kit. Refer to the PowerSupply Enables (ENX, ENY, and ENZ) section in the MAX5963 IC data sheet for more information on using the MAX5963 ENX, ENY, and ENZ functions.

## ONA and ONB Undervoltage Lockout Thresholds and Disable

The MAX5963 EV kit features three jumpers to configure the UVLO for channels A and B. The UVLO threshold (6.5V default) must be exceeded for normal operation. If the voltage at the ON\_ input drops below the 1.24V threshold, the MAX5963 controller turns off the respective MOSFET's N2 or N3 to disconnect the input power supply from the respective output. The controller returns to  normal operation if the input voltage exceeds the default UVLO threshold. The ONA and ONB signals are available at header J1 using the ONA, ONB, and GND header pins. See Table 2 for reconfiguring the channel A and B UVLO using jumpers JU4, JU5, and JU6.

The MAX5963 EV kit ONA and ONB UVLO threshold is 1.24V and the turn-on voltage is programmable with resistors. The turn-on voltage can be reconfigured to a value &gt; 7.5V by changing resistor R4 (ONA) for channel

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5963 Evaluation Kit

Table 1. Shutdown, Standby and Enabled Configuration (JU1, JU2, JU3)

| SHUNT POSITION   | SHUNT POSITION   | SHUNT POSITION   | OUTA AND/OR   | GATEPS MOSFET                                    | MAX5963 MODE OF OPERATION                        |
|------------------|------------------|------------------|---------------|--------------------------------------------------|--------------------------------------------------|
| JU1 (ENX)        | JU2 (ENY)        | JU3 (ENZ)        | OUTB          | N1-A                                             |                                                  |
| 1-2              | 1-2 or 2-3       | 1-2              | Load          | Enabled                                          | Power flows from PWR to channels                 |
| 1-2 or 2-3       | 1-2              | 1-2              | Load          | Enabled                                          | Power flows from PWR to channels                 |
| 2-3              | 2-3              | 1-2 or 2-3       | Load          | Disabled                                         | Shutdown                                         |
| 1-2 or 2-3       | 1-2 or 2-3       | 2-3              | Load          | Disabled                                         | Shutdown                                         |
| 1-2              | 1-2 or 2-3       | 1-2              | Powered       | Enabled                                          | PS receives power from ports                     |
| 1-2 or 2-3       | 1-2              | 1-2              | Powered       | Enabled                                          | PS receives power from ports                     |
| 2-3              | 2-3              | 1-2 or 2-3       | Powered       | Disabled                                         | Standby (PS receives power from ports)           |
| 1-2 or 2-3       | 1-2 or 2-3       | 2-3              | Powered       | Disabled                                         | Standby (PS receives power from ports)           |
| Not installed    | Not installed    | Not installed    | -             | Operation controlled by connections at header J1 | Operation controlled by connections at header J1 |

Table 2. UVLO Configuration (JU4, JU5, JU6)

| SHUNT POSITION        | SHUNT POSITION   | SHUNT POSITION   | EV KIT                        |
|-----------------------|------------------|------------------|-------------------------------|
| JU4 (SOURCE)          | JU5 (ONA)        | JU6 (ONB)        |                               |
| 1-2 (PWR) or 2-3 (PS) | Installed        | Installed        | Channels A and B UVLO enabled |
| 1-2 (PWR) or 2-3 (PS) | Installed        | Not installed    | Only channel A UVLO enabled   |
| 1-2 (PWR) or 2-3 (PS) | Not installed    | Installed        | Only channel B UVLO enabled   |
| 1-2 (PWR) or 2-3 (PS) | Not installed    | Not installed    | Both channels disabled        |
| Not installed         | Not installed    | Not installed    | Disabled                      |

A, or resistor R6 (ONB) for channel B. Use the following equation to select the new value:

<!-- formula-not-decoded -->

where VTURN-ON is the desired turn-on voltage, Rtop is resistor R3 or R5 and is typically 100k Ω .

Refer to the Undervoltage Lockout section in the MAX5963 IC data sheet for more information on using the MAX5963 ONA and ONB pins.

## Circuit-Breaker Timer

The MAX5963 controller features a programmable circuit-breaker timeout function. If either channel's output current exceeds the circuit-breaker limit, the circuitbreaker timer begins timing. If the timer exceeds the programmed timeout period, the MAX5963 disconnects the input power supply from the load by turning off the respective channel's MOSFET, N2 for channel A or N3 for  channel B. The timeout period is programmed by resistor R7 and jumper JU7. The MAX5963 EV kit timeout period can be programmed by configuring jumper JU7. See Table 3 to reconfigure jumper JU7.

<!-- image -->

Table 3. Circuit-Breaker Timer Configuration (JU7)

| SHUNT POSITION   | TCB PIN CONNECTION   |   CIRCUIT-BREAKER TIMEOUT PERIOD (ms) |
|------------------|----------------------|---------------------------------------|
| 2-3              | Connected to R7      |                                    26 |
| 1-2              | Connected to BP      |                                     3 |

The circuit-breaker timeout period can also be configured for a different timeout interval by replacing resistor R7. Refer to Figure 3 in the MAX5963 IC data sheet to select a new resistance value for R7.

Refer to the Circuit-Breaker Timeout section in the MAX5963 IC data sheet for more information. Note: When reconfiguring the circuit-breaker timer or operating in autoretry mode, may produce excessive heating and electrical stresses in resistors R17, R21,

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5963 Evaluation Kit

MOSFETs N1, N2, N3, and other components in the power path. Verify that the components on the board can handle the electrical and thermal stresses with the new timeout period.

## Current-Limit Timer

The MAX5963 controller features a programmable current-limit timeout function. If the current-limit fault exceeds the programmed timeout period, the MAX5963 disconnects the input power supply from the load by turning off the respective channel's MOSFET, N2 for channel A or N3 for channel B. The timeout period is programmed by resistor R8 and jumper JU8. The MAX5963 EV kit timeout period can be programmed by configuring jumper JU8. See Table 4 to reconfigure jumper JU8 and program the current-limit timeout period.

Table 4. Current-Limit Timer Configuration (JU8)

| SHUNT POSITION   | TCL PIN CONNECTION   |   CURRENT-LIMIT TIMEOUT PERIOD (ms) |
|------------------|----------------------|-------------------------------------|
| 2-3              | Connected to R8      |                                 3.3 |
| 1-2              | Connected to BP      |                                   1 |

The current-limit timeout period can be configured for a different timeout interval by replacing resistor R8. Refer to  Figure  3  in  the  MAX5963  IC  data  sheet  to  select  a new resistance value for R8.

Refer to the Current-Limit Timeout  section in the MAX5963 IC data sheet for more information. Note: When operating in autoretry mode, may produce excessive heating and electrical stresses in resistors R17, R21, MOSFETs N1, N2, N3, and other components in the power path. Verify that the components on the board can handle the electrical and thermal stresses with the new timeout period.

## FAULTA , FAULTB , and Autoretry/ Latchoff Modes

The MAX5963 EV kit FAULTA and FAULTB outputs are asserted low to GND when a current-limit fault condition has occurred. The respective channel's FAULT\_ output is pulled up to PS by LED biasing resistor pairs, R9/R10 or R11/R12 during normal operating conditions. During a fault, the MAX5963 turns off the respective MOSFET (N2 or N3) and asserts a logic-low signal on the respective FAULT\_ output header pin, J1-9 pin for FAULTA and J1-10 for FAULTB.

The MAX5963 fault mode can be programmed for latchoff  or  autoretry  mode.  In  latchoff  fault  mode,  the MAX5963 turns off dual MOSFET N2 or N3 where the fault occurred. The MAX5963 EV kit circuit can be reset to normal operation by removing the fault condition and cycling the respective channel's ON\_ pin low and then high. Cycling the ON\_ pin can be achieved by applying a low-to-high transition at the ON\_ header pin with a microcontroller. The MAX5963 will not enter a startup cycle until its  timer  tOFF (tOFF = 128 x tTCL) or (128 x t TCL)  has  expired.  The  latchoff  fault  can  also  be  reset by turning the input power supply off and on. This method allows the circuit to restart without a timer wait period of tOFF.

In autoretry mode, after a fault condition has occurred, the MAX5963 controller automatically attempts to restart  after  the  tOFF period of (128 x tTCB) or (128 x t TCL). All FAULT\_ outputs deassert every restart cycle. The autoretry and latchoff modes are set by configuring jumper JU9. See Table 5 to reconfigure jumper JU9 for the desired mode of operation.

Table 5. Autoretry/Latchoff Configuration (JU9)

| SHUNT POSITION   | RETRY PIN CONNECTION   | EV KIT FAULT MODE   |
|------------------|------------------------|---------------------|
| Installed        | Connected to BP        | Autoretry           |
| Not Installed    | Not Connected          | Latchoff            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5963 Evaluation Kit

<!-- image -->

Figure 1. MAX5963 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5963 Evaluation Kit

Figure 2. MAX5963 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5963 Evaluation Kit

<!-- image -->

Figure 3. MAX5963 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5963 Evaluation Kit

Figure 4. MAX5963 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5963 Evaluation Kit

<!-- image -->

Figure 5. MAX5963 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5963 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                      | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------|-----------------|
|                 0 | 11/08           | Initial release                                                  | -               |
|                 1 | 3/09            | Changed maximum current specification from 5A per channel to 1A. | 1-4             |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

SPRINGER