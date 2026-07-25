<!-- lastmod 2022-08-04 -->
## General Description

The MAX1563 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that evaluates the MAX1563 (4mm x 4mm thin QFN) programmable 4A USB switch. The EV kit includes on-board shutdown control that can be set for active-high or active-low logic. The EV kit PC board also includes a separate layout to evaluate the MAX1562 3A 8-pin SO.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                       |
|---------------|-------|-------------------------------------------------------------------|
| C1            |     1 | 1µF ± 20%, 10V X7R ceramic capacitor (0805) TDK C2012X7R1A105M    |
| C2            |     1 | 4.7µF ± 20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J475M |
| C3, C4        |     2 | Not installed (0805)                                              |
| C5            |     1 | 47µF ± 20%,16V tantalum capacitor (D case) AVX TAJD476M016        |
| C6            |     1 | Not installed (D case)                                            |
| R1            |     1 | 100k Ω ± 5% resistor (0603)                                       |
| R2            |     1 | 5.76k Ω ± 1% resistor (0603)                                      |
| R3, R4        |     2 | Not installed (0805)                                              |
| JU1, JU2      |     2 | Jumpers, SIP-3, 3-pin headers                                     |
| JU3           |     1 | Not installed (SIP-3)                                             |
| U1            |     1 | Programmable 4A USB switch 12-pin thin QFN Maxim MAX1563ETC       |
| U2            |     1 | Not installed, 8-pin SO                                           |
| None          |     2 | Shunts                                                            |
| None          |     1 | MAX1563 PC board                                                  |

<!-- image -->

## Features

- ♦ 4V to 5.5V Single-Supply Operation
- ♦ On-Board Shutdown Control
- ♦ Evaluates Both MAX1563 (Thin QFN) and MAX1562 (SO)
- ♦ Fully Assembled and Tested Surface-Mount Board

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1563EVKIT | 0°C to +70°C | 12 QFN       |

Note: To evaluate the MAX1562, request a MAX1562ESA or a MAX1562HESA free sample with the MAX1563EVKIT.

## Quick Start

## Recommended Equipment

The following is required before beginning:

- One variable DC power supply capable of supplying between 4V and 5.5V at 4A
- One electronic load capable of sinking up to 4A
- Two voltmeters

## Procedure

The MAX1563 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Set the variable DC power supply to 5V.
- 2) Ensure that the variable DC power supply is turned off.
- 3) Connect the positive terminal of the variable DC power supply to the pad marked IN. Connect the ground return of the variable DC power supply to the corresponding ground (GND) pad.

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| AVX        | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX1563 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX1563 Evaluation Kit

- 4) Set the electronic load to draw 2A.
- 5) Ensure that the electronic load is turned off.
- 6) Connect the positive terminal of the electronic load to the pad marked OUT. Connect the ground return of the electronic load to the corresponding ground (GND) pad.
- 7) Connect the positive terminal of the first voltmeter to the pad marked FAULT . Connect the ground return of the voltmeter to the pad marked GND (located by the IN pad).
- 8) Connect the positive terminal of the second voltmeter to the pad marked OUT. Connect the ground return of the voltmeter to the corresponding ground (GND) pad.
- 9) Ensure that shunts are installed across pins 1 and 2 of jumpers JU1 (enable switch) and JU2 (set activehigh logic).
- 10) Turn on the variable DC power supply.
- 11) Turn on/enable the electronic load.
- 12) Verify with the first voltmeter that an output voltage of  approximately 5V is produced between the FAULT pad and the GND pad (fault condition not present).
- 13) Verify with the second voltmeter that an output voltage of 5V is produced between the OUT pad and the GND pad.
- 14) Increase the electronic load current draw to 4A.
- 15) Verify with the first voltmeter that an output voltage of 0V is produced between the FAULT pad and the GND pad (fault condition present).
- 16) Verify with the second voltmeter that an output voltage of 0V is produced between the OUT pad and the GND pad (output has turned off in response to overload condition)
- 17) Disconnect the electronic load and verify that the output voltage returns to 5V.

## Detailed Description

The MAX1563 EV kit is a fully assembled and tested surface-mount  circuit  board  that  evaluates  the MAX1563 (4mm x 4mm thin QFN) programmable 4A USB switch. The EV kit includes on-board shutdown control that can be set for active-high or active-low logic. The EV kit can also be used to evaluate the MAX1562 (8-pin SO) programmable 3A USB switch.

The MAX1563 EV kit is laid out as a dual board with separate ground planes for the MAX1563 12-pin QFN and the MAX1562 8-pin SO.

The MAX1563 EV kit incorporates a 20ms fault-blanking feature that allows momentary faults (such as those caused when hot swapping into capacitive loads) to be ignored, thus preventing false alarms to the host system. The fault output of the MAX1563 can be monitored at the FAULT pad.

If  an  output  fault  is  detected  for  more than the blanking time (20ms, typ), then that output is latched off and a 25mA (typ) current is forced at that output. If the voltage on that output is continuously above 0.5V (typ) for 20ms (typ), then  the  fault  is  reset  and  the  output  is  turned back on. The voltage on the output is monitored so that a short-circuit condition can be detected. Active loads are not expected to have measurable currents when the supply is below 0.5V.

The MAX1562/MAX1652H/MAX1563 family can also be reset from fault manually by toggling the ON signal.

## Input Bulk Capacitor (C5/C6)

The EV kit is supplied with a 47µF bulk input capacitor to  stabilize  input  power  sources  that  may  have  poor output impedance, high inductance, and/or long output leads. When driving inductive loads or operating from i nductive  sources,  which  may  occur  when  the MAX1563 is powered by long leads, the increased capacitance is required to prevent voltage spikes from exceeding the MAX1563's absolute maximum ratings during short-circuit events. This capacitor is normally not required in the final application, where the input power source is not remotely located.

## ON Selection

Jumper JU1 controls the active-high/active-low selection  pin  (SEL)  of  the  MAX1563,  which  alters  the  functionality  of  the  ON  pin.  Removing  the  shunt  from  JU1 allows the SEL pin to be driven with an external signal source connected to the SEL pad. See Table 1 for shunt positions.

## Table 1. SEL Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                 |
|----------|------------------|---------------------------------------------|
| JU1      | 1-2              | ON = Active high                            |
| JU1      | 2-3              | ON = Active low                             |
| JU1      | Not installed    | SEL pin driven by an external signal source |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1563 ON Pin

Jumper JU2 controls the enable pin (ON) of the MAX1563, which enables/disables the output (OUT). Removing the shunt from JU2 allows the ON pin to be driven with an external signal source connected to the ON pad. Device functionality relating to the ON pin is dependent on the voltage at the SEL pin and thus JU1. See Table 2 for enable shunt positions.

## Table 2. Shutdown Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU1      | 1-2              | ON = Active high |
| JU2      | 1-2              | output enabled   |
| JU1      | 1-2              | ON = Active high |
| JU2      | 2-3              | output disabled  |
| JU1      | 2-3              | ON = Active low  |
| JU2      | 1-2              | output disabled  |
| JU1      | 2-3              | ON = Active low  |
| JU2      | 2-3              | output enabled   |

## Adjusting the USB Current Limit

Resistor R2 sets the current limit of the MAX1563. To alter the current limit from the default value of 3A, replace resistor R2 with a value calculated by the following equation:

<!-- formula-not-decoded -->

where:

I LIMIT = desired current limit

K = 17120

## Evaluating the MAX1562

## Populating the MAX1562 Layout

The MAX1563 EV kit includes a second layout for evaluating the MAX1562. To evaluate the MAX1562, perform the following steps:

- 1) Install  a  MAX1562ESA or a MAX1562HESA into position U2.
- 2) Install a current-limit set resistor (see the Adjusting the USB Current Limit section) into position R4.
- 3) Install a 1µF capacitor into position C3.
- 4) Install a 4.7µF capacitor into position C4.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1563 Evaluation Kit

- 5) Install a 100k Ω resistor into position R3.
- 6) Install a 47µF capacitor into position C6.
- 7) Install a 3-pin jumper into position JU3.
- 8) Install a shunt on jumper JU3 (see MAX1562 ON pin for shunt positions).

## MAX1562 ON pin

Unlike the MAX1563, which has a selectable activehigh/low ON pin, the MAX1562's ON pin is active low while the MAX1562H's ON pin is active high. Access the ON pin through JU3 or the pad labeled ON2. See Tables 3 and 4 for ON shunt positions.

## Table 3. ON Selection (MAX1562)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                |
|----------|------------------|--------------------------------------------|
| JU3      | 1-2              | Output disabled                            |
| JU3      | 2-3              | Output enabled                             |
| JU3      | Not installed    | ON pin driven by an external signal source |

## Table 4. ON Selection (MAX1562H)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                |
|----------|------------------|--------------------------------------------|
| JU3      | 1-2              | Output enabled                             |
| JU3      | 2-3              | Output disabled                            |
| JU3      | Not installed    | ON pin driven by an external signal source |

## MAX1563 Evaluation Kit

Figure 1. MAX1563 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX1563 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1563 Evaluation Kit

Figure 3. MAX1563 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1563 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 5