<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX5943A evaluation kit (EV kit) circuit demonstrates the hot-swap, current-limiting, and power-ORing functions of the MAX5943A. The MAX5943A EV kit is intended for 7.5V to 37V IEEE 1394/FireWire® applications. The MAX5943A controls two n-channel MOSFETs to regulate load current from an input power supply and perform low-voltage-drop power-supply ORing. The MAX5943A EV kit can also be used to evaluate the MAX5943B/C/D/E versions (refer to the MAX5943 IC data sheet).

The MAX5943A EV kit features several jumpers to evaluate different configurations of the MAX5943A. The output current limit, current-limit timeout period, ORing threshold, and fault-management features are programmable. The undervoltage lockout threshold is configurable by installing external components. Shutdown mode can be controlled with an on-board switch or with an external logic signal. A FAULT output signal is provided for fault condition monitoring.

| DESIGNATION       |   QTY | DESCRIPTION                                                                                   |
|-------------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C3            |     2 | 1µF ±10%, 50V X7R ceramic capacitors (1206) TDK C3216X7R1H105K                                |
| C2                |     1 | 470µF ± 20%, 63V electrolytic capacitor (16mm x 16.5mm) Sanyo 63CVFS470FS                     |
| C4, C5            |     0 | Not installed, ceramic capacitors (0805)                                                      |
| C6                |     1 | 0.1µF ± 10%, 50V X7R ceramic capacitor (0805) TDK C2012X7R1H104K or Taiyo Yuden UMK212BJ104KG |
| D1                |     0 | Not installed, Schottky diode (SMA)                                                           |
| IN, GND, OUT, GND |     4 | Noninsulated banana jack connectors                                                           |
| JU1, JU2, JU3     |     3 | 2-pin headers                                                                                 |

FireWire is a registered trademark of Apple Computer, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Features

- ♦ Safely Hot Swaps 7.5V to 37V Power Supplies
- ♦ Low-Voltage-Drop Power ORing
- ♦ Evaluates MAX5943A/B/C/D/E Controllers
- ♦ Demonstrates Active-Current-Limit Feature
- ♦ Programmable Output-Load Current Limit
- ♦ Programmable Current-Limit Timer
- ♦ Fast Current-Limit Response Time
- ♦ Latch or Autoretry Fault Management
- ♦ Programmable Undervoltage Lockout
- ♦ Overcurrent FAULT Status Indicator
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX5943AEVKIT | 0°C to +70°C | 16 QSOP      |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| JU4, JU5      |     2 | 3-pin headers                                                    |
| N1            |     1 | 40V, 7.2A, dual n-channel MOSFET (8-SO PowerPAK) Vishay Si7958DP |
| R1            |     1 | 30m Ω ± 1%, 1/2W sense resistor (1206) IRC LRC-LR1206-01-R030-F  |
| R2            |     1 | 51k Ω ± 5% resistor (0805)                                       |
| R3, R7, R8    |     3 | 100k Ω ± 1% resistors (0805)                                     |
| R4, R10-R13   |     0 | Not installed, resistors (0805)                                  |
| R5, R6        |     2 | 8.06k Ω ± 1% resistors (0805)                                    |
| R9            |     1 | 10k Ω ± 5% resistor (1206)                                       |
| SW1           |     1 | Momentary contact switch                                         |
| TP1, TP2      |     2 | Test points, red                                                 |
| TP3           |     1 | Test loop, red                                                   |
| U1            |     1 | MAX5943AEEE (16-pin QSOP)                                        |
| None          |     5 | Shunts                                                           |
| None          |     1 | MAX5943A PC board                                                |

1

## MAX5943A Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| IRC         | 361-992-7900 | 361-992-3377 | www.irctt.com         |
| Sanyo       | 619-661-6835 | 619-661-1055 | www.sanyodevice.com   |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay      | -            | -            | www.vishay.com        |

Note: Indicate that you are using the MAX5943A when contacting these component suppliers.

## Quick Start

The MAX5943A EV kit is a fully assembled and tested surface-mount board. Follow the steps below for simple board operation. Do not turn on the power supply until all connections are completed.

- 1) Verify that shunts are not installed across jumpers JU1 (overcurrent timeout period = 2ms), JU2 (autoretry mode), and JU3 (ORing function enabled).
- 2) Verify that shunts are installed across pins 2 and 3 of  jumpers JU4 (ORing voltage threshold VOR = 5mV) and JU5 (output current limit = 1.6A).
- 3) Connect a voltmeter across the OUT and GND banana jacks.
- 4) Connect the positive terminal of a 7.5V to 37V power supply to the IN banana jack. Connect the ground terminal of this power supply to the GND banana jack.
- 5) Set the power supply to 18V.
- 6) Connect a voltmeter or an oscilloscope to the FAULT pad to capture fault signals.
- 7) Turn on the power supply.
- 8) Verify that the voltmeter connected to the OUT output terminals measures approximately 17.5V.
- 9) Verify that FAULT measures approximately 18V.
- 10) The EV kit is ready for further testing.

## Detailed Description

The MAX5943A EV kit circuit demonstrates the ORing and  hot-swap  current-limiting  functions  of  the MAX5943A controller. The MAX5943A controls two n-channel MOSFETs (in a single SO-8 package) to implement current regulation between the input power source and the load. The MAX5943A implements the low-drop ORing function that is commonly used for power-supply redundancy and fault isolation in highly reliable power systems. The MAX5943A EV kit board is designed to operate in 7.5V to 37V IEEE 1394/FireWire systems.

During a startup cycle, the two n-channel MOSFETs on the EV kit are off until the input voltage exceeds the internal 6.5V (typ) and the programmed 1.24V (typ) ON undervoltage lockout thresholds. Once the input voltage exceeds the two input thresholds, the MAX5943A controller  keeps  MOSFET N1-A off to prevent back charge from the output and slowly enhances the gate of MOSFET N1-B to ramp the output current. When the voltage across sense resistor R1 exceeds the programmed ORing voltage, VOR threshold, the MAX5943A turns on MOSFET N1-A. After MOSFETs N1-A and N1-B have been turned on, the controller continues to monitor the output current. If the output current exceeds the programmed current-limit threshold, the controller lowers the gate voltage of MOSFET N1-B to regulate the output current at the limit. If the output current is not lowered to the programmed threshold within the timeout period, the controller turns off MOSFETs N1-A and N1-B and asserts a logic low on the FAULT output PC board pad to signal an overcurrent fault condition.

The MAX5943A EV kit features several jumpers to program the output current limit, current-limit timeout period, and ORing voltage thresholds. The fault-management function can also be programmed to autoretry or latch  mode by configuring on-board jumpers. The ON undervoltage lockout threshold can be configured by installing resistors on the EV kit board. Shutdown mode can be controlled by an on-board switch or with an external logic signal.

## Input Source

The MAX5943A EV kit operates from a 7.5V to 37V input source connected across IN and GND terminals. The input source must be able to deliver 2.5A of current to the EV kit. The MAX5943A EV kit controller starts to function when the input voltage exceeds the IN default undervoltage lockout voltage threshold of 6.5V (typ) and the ON undervoltage lockout threshold.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5943A Evaluation Kit

## Undervoltage Lockout Thresholds/Disable

The MAX5943A requires that the IN and ON undervoltage lockout thresholds are exceeded for normal operation.  If  the  voltage  at  the  IN  input  drops  below  either one of these thresholds, the MAX5943A controller turns off  MOSFETs N1-A and N1-B to disconnect the input power supply from the output. The controller returns to normal operation if the input voltage exceeds both undervoltage thresholds. The IN undervoltage default threshold is 6.5V (typ). The ON pin undervoltage lockout threshold is 1.24V and the turn-on voltage is programmable with resistors R3 and R4. The turn-on voltage can be reconfigured to a value greater than 7.5V by installing resistor R4. Use the following equation to select the new value for resistor R4:

<!-- formula-not-decoded -->

where VTURN-ON is the desired turn-on voltage and R3 is typically 100k Ω .

The MAX5943A EV kit can be momentarily disabled by pressing switch SW1, which connects the ON pin to ground, or by applying a logic-low signal ( ≤ 0.4V) to the ON PC board pad.

## Current Limiting

The MAX5943A EV kit limits the load current by monitoring the voltage across current-sense resistor R1 and regulating the GATE2 pin voltage so the load current to the  output  does not exceed the programmed currentlimit threshold (ILIM). When the load current is less than I LIM,  MOSFET N1-B is fully enhanced. When the load current exceeds ILIM, MOSFET N1-B gate voltage is reduced to regulate the current through N1-B, causing it  to  act  like  a  current  source.  If  the  load  current demand exceeds ILIM for longer than the current-limit timeout period (tILIM), MOSFETs N1-A and N1-B are turned off to disconnect the load. The FAULT PC board output pad is also asserted low.

The output current limit ILIM is determined by the value of sense resistor R1 and the programmed current-limit

## Table 1. ILIM Configuration

| JUMPER JU5 SHUNT POSITION   | ILIM PIN CONNECTION   |   CURRENT-LIMIT THRESHOLD VOLTAGE (V TH , mV) |   EV KIT OUTPUT CURRENT (I LIM , A) |
|-----------------------------|-----------------------|-----------------------------------------------|-------------------------------------|
| Not installed               | Floating              |                                            40 |                                 1.3 |
| 2-3                         | Connected to GND      |                                            50 |                                 1.6 |
| 1-2                         | Connected to IN       |                                            60 |                                   2 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

threshold voltage (VTH) across the sense resistor. The current-limit  threshold  voltage  can  be  programmed to 40mV, 50mV, or 60mV with jumper JU5. The output current  limit  can  be  programmed to 1.3A, 1.6A, and 2A with the sense resistor R1 value of 30m Ω . See Table 1 to  configure  jumper JU5 and program the output current limit ILIM.

The output current limit can be reconfigured by replacing current-sense resistor R1. Use the following equation to select a new resistor value:

<!-- formula-not-decoded -->

where VTH is the current-limit threshold voltage and I LIM is  the  new  output  current  limit.  Choose  a  sense resistor that is rated for the new power dissipation levels.  Verify  that  the  power  ratings  for  MOSFETs  N1-A and N1-B meet the new operating conditions.

## Current-Limit Timer

The MAX5943A controller features a programmable current-limit timeout function. If the current-limit fault exceeds  the  programmed  timeout  period,  the MAX5943A disconnects the input power supply from the load by turning off MOSFETs N1-A and N1-B. The timeout period is programmed by the resistor connected from the TIM pin to ground. The MAX5943A EV kit timeout period can be programmed to 1.1ms or 2ms by configuring jumper JU1. See Table 2 to reconfigure jumper JU1 and program the current-limit timeout period.

The current-limit timeout period can be configured for a different  timeout  interval  by  replacing  resistor  R6  and removing the shunt on jumper JU1. Use the following equation to select a new resistor value for R6.

<!-- formula-not-decoded -->

where tILIM is the new timeout, in milliseconds. Refer to the Current-Limit/Circuit-Breaker Timeout Period section in the MAX5943 IC data sheet for more information. The timeout can be programmed to the 2ms default timeout by removing resistor R6, the shunt on jumper JU1, and installing a 0 Ω resistor  on  R10.  The  timeout can be programmed to the maximum timeout period of

## MAX5943A Evaluation Kit

## Table 2. Current-Limit Timer Configuration

| JUMPER JU1 SHUNT POSITION   | TIM PIN CONNECTION                                     |   OVERCURRENT TIMEOUT PERIOD LIMIT (ms) |
|-----------------------------|--------------------------------------------------------|-----------------------------------------|
| Installed                   | Connected to GND through a 4.03k Ω equivalent resistor |                                     1.1 |
| Not installed               | Connected to GND through a 8.06k Ω resistor            |                                       2 |

175ms by removing resistor R6, the shunt on jumper JU1, and leaving resistor R10 pads open, which lets the TIM pin float. Note: Long timeout periods may produce excessive heating and electrical stresses in R1, N1-A, N1-B, and other components in the power path. Verify that the components on the board can handle the electrical and thermal stresses with the new timeout period.

## Power-Supply ORing

The MAX5943A EV kit circuit ORing function can be enabled or disabled by configuring jumper JU3. See Table 3 for jumper JU3 configuration.

When the ORing function is disabled, the MAX5943A controller will fully enhance MOSFET N1-A, during normal operation, regardless of the load-current condition. In  this  mode, current can flow from the output OUT to the input IN if the voltage present at the OUT terminal is higher than the voltage at the IN terminal, without current limiting.

When the ORing function is enabled, the MAX5943A controller turns MOSFET N1-A on or off depending on the load-current conditions. Initially during startup, MOSFET N1-A is turned off and the load current conducts through the body diode of MOSFET N1-A. The MAX5943A controller turns on MOSFET N1-A when the voltage across current-sense resistor R1 exceeds the programmed threshold VOR. The controller continues to monitor the voltage across resistor R1 and turns off MOSFET N1-A when that voltage drops below the VOR threshold. When MOSFET N1-A is turned off, current cannot back drive the input source IN if the voltage at OUT is higher than the IN voltage. The VOR threshold can be programmed to 5mV, 7.5mV, or 10mV by configuring jumper JU4. See Table 4 to reconfigure jumper JU4 and program the VOR threshold.

## Table 3. ONQ1 Configuration

| JUMPER JU3 SHUNT POSITION   | ONQ1 PIN CONNECTION                  | EV KIT ORing FUNCTION   |
|-----------------------------|--------------------------------------|-------------------------|
| Not installed               | Connected to GND through resistor R7 | Enabled                 |
| Installed                   | Connected to IN                      | Disabled                |

## Table 4. ORing Threshold Voltage Configuration*

| JUMPER JU4 SHUNT POSITION   | OR_ADJ PIN CONNECTION   |   ORing THRESHOLD VOLTAGE (V OR , mV) |
|-----------------------------|-------------------------|---------------------------------------|
| 2-3                         | Connected to GND        |                                     5 |
| Not installed               | Floating                |                                   7.5 |
| 1-2                         | Connected to IN         |                                    10 |

## FAULT

The MAX5943A EV kit FAULT output is a high-voltage output signal that is asserted low to GND when a current-limit  fault  condition  has  occurred.  The FAULT output is pulled up to IN by resistor R2 during normal operating conditions. During a fault occurrence, the MAX5943A turns off MOSFETs N1-A and N1-B and asserts a logic-low signal on the FAULT output.

The fault mode can be programmed for latched or autoretry mode. In latched fault mode, the MAX5943A turns off MOSFET N1-A and N1-B indefinitely. The MAX5943A EV kit circuit can be reset to normal operation by removing the fault condition and cycling the ON pin low and then high. Cycling the ON pin can be achieved by momentarily pressing pushbutton switch SW1 or by applying a high-low-high transition at the ON PC board pad with a microcontroller. The MAX5943A will not enter a startup cycle until timer tOFF (t OFF = 128 x t ILIM) has expired. The latched fault can also be reset by turning the input power supply off and on. This method allows the circuit to restart without a wait period of tOFF.

In  autoretry  mode, after a fault condition has occurred, the MAX5943A controller automatically attempts to restart after the tOFF period. The FAULT output deasserts on every restart cycle.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX5943A Evaluation Kit

## Table 5. LATCH Configuration

| JUMPER JU2 SHUNT POSITION   | LATCH PIN CONNECTION                 | EV KIT FAULT MODE   |
|-----------------------------|--------------------------------------|---------------------|
| Not installed               | Connected to GND through resistor R8 | Autoretry           |
| Installed                   | Connected to IN                      | Latched             |

## Evaluating the MAX5943B/C/D/E

The MAX5943A EV kit can also be used to evaluate versions B, C, D, or E of the MAX5943 controller. Refer to the MAX5943 data sheet to review the functional and electrical  differences between these versions. Verify that the EV kit circuit components will function properly when evaluating the other MAX5943 controllers. The MAX5943A must be removed and replaced with the desired IC (see the Selector Guide ).

## Multiple Kits

Multiple MAX5943A EV kits can be connected together to simulate the implementation of power-supply ORing in FireWire power systems. Connect the OUT outputs of two or more EV kits as well as their respective ground (GND) connections to simulate a FireWire system with multiple power sources. Connect different power supplies to the IN input of each EV kit. Start up each power supply independently and observe the undervoltage lockout, ORing, and current-limit feature in each EV kit. Once all the power supplies are turned on, induce fault conditions on the power bus. Note: Each EV kit can be configured for different limits and thresholds for a better evaluation of the MAX5943A functions.

## GATE2 Turn-On Time

The MAX5943A EV kit provides an unpopulated series RC circuit (R13 and C5) at the GATE2 pin that can be used to increase the turn-on time of MOSFET N1-B. This reduces the output voltage ramp rate and load capacitor charging current.

Installing resistor R13 and capacitor C5 will be necessary when the combination of current-limit setting, current-limit  timeout,  load capacitance value, and operating voltage could cause the IC to time out before a connected load capacitance is fully charged. The RC circuit may be needed when:

- Current limit &lt; 2A,
- Current-limit timer setting &lt; 2ms,
- Load capacitance &gt; 20µF, and
- VIN &gt; 20V

The time required to charge the load capacitance can be determined by using the following equation:

<!-- formula-not-decoded -->

Example: If VIN = 32V, current limit is set at 1.6A, and the current-limit timer is set at 2ms, then add probable or known tolerances to obtain:

I LIM = 1.6A ±6% trip-threshold tolerance plus 1% sense resistor tolerance = 1.488A to 1.712A,

t LIM = 2.02ms ±12% = 1.78ms to 2.26ms (from MAX5943 data sheet),

<!-- formula-not-decoded -->

VIN = 32V ±5% = 32.4V to 33.6V.

<!-- formula-not-decoded -->

Allowing ±12% tolerance on the timer setting, the timer should be set for 3.03ms typ. See the Current-Limit Timer section to reconfigure the timeout period. Refer to the Startup Consideration section in the MAX5943 IC data sheet to select C5.

R13 should be 3k Ω to minimize the effect of C5 slowing the gate discharge rate at current trip.

## Selector Guide

| PART     |   DEFAULT TIMEOUT, TIM = IN (ms) | PROGRAMMABLE TIMEOUT RANGE (4k Ω < R6 < 50k Ω )   |   MAXIMUM TIMEOUT, TIM = FLOATING (ms) | ACTIVE CURRENT- LIMIT FUNCTION   |
|----------|----------------------------------|---------------------------------------------------|----------------------------------------|----------------------------------|
| MAX5943A |                                2 | 1.04ms to 11.05ms                                 |                                    175 | Yes                              |
| MAX5943B |                              0.5 | 32.5µs to 345µs                                   |                                    5.5 | No                               |
| MAX5943C |                                1 | 65µs to 690µs                                     |                                   10.9 | No                               |
| MAX5943D |                                2 | 130µs to 1.38ms                                   |                                   21.9 | No                               |
| MAX5943E |                                4 | 260µs to 2.76ms                                   |                                     44 | No                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5943A Evaluation Kit

Figure 1.  MAX5943A EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5943A Evaluation Kit

<!-- image -->

Figure 2. MAX5943A EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX5943A EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7

Figure 3. MAX5943A EV Kit PC Board Layout-Component Side