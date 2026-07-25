<!-- lastmod 2022-08-02 -->
## General Description

The MAX8536 evaluation (EV) kit circuit demonstrates the functionality of the MAX8536 ORing MOSFET controller  that  provides  redundancy and fault isolation to highly reliable power systems. The EV kit board can operate in 5V and 3.3V systems. The EV kit is configured for 5V operation.

During startup, the EV kit monitors the voltage difference between a power supply and a power bus. Once the voltage difference is less than 0.4V (typ), the IC turns on two ORing MOSFETs, linking the power supply and power bus. Once the MOSFETs are on, the EV kit monitors the load current and voltages to protect against undervoltage (UVP), overvoltage (OVP), and reverse-current fault conditions.

The OVP and UVP thresholds are adjustable and can be disabled. The UVP threshold is set to 2.9V, and the OVP threshold is set to 5.75V. A FAULT signal output is provided for circuit monitoring.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                  |
|---------------|-------|----------------------------------------------------------------------------------------------|
| C1            |     1 | 0.01µF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H103K or Taiyo Yuden UMK107B103KZ |
| C2            |     1 | 0.1µF ±10%, 50V X7R ceramic capacitor (0603) Taiyo Yuden UMK107BJ104KA or TDK C1608X7R1H104K |
| C3            |     1 | 1µF ±10%, 10V X5R ceramic capacitor (0603) TDK C1608X5R1A105K                                |
| C4, C5        |     0 | Not installed, ceramic capacitors (0805)                                                     |
| JU1           |     1 | 3-pin header                                                                                 |
| N1, N2        |     2 | 30V, 80A, n-channel MOSFETs (D 2 -PAK) Fairchild FDB8030L                                    |

<!-- image -->

## Features

- ♦ Fault Power-Supply Isolation for 5V and 3.3V Bus
- ♦ Eliminates ORing Diode Power Dissipation
- ♦ Reverse-Current Detection
- ♦ Adjustable Undervoltage Threshold (Configured to 2.9V)
- ♦ Adjustable Overvoltage Threshold (Configured to 5.75V)
- ♦ FAULT Output Status Indicator
- ♦ Adjustable Soft-Start
- ♦ Up to 20A of Load Current
- ♦ Surface-Mount Construction
- ♦ Proven PCB Layout
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX8536EVKIT | EV Kit |

## Component List

| DESIGNATION                    |   QTY | DESCRIPTION                         |
|--------------------------------|-------|-------------------------------------|
| PS_OUT+, PS_OUT-, VBUS+, VBUS- |     4 | Noninsulated banana jack connectors |
| R1                             |     1 | 10 Ω ±5% resistor (0805)            |
| R2                             |     1 | 51k Ω ±5% resistor (0805)           |
| R3                             |     1 | 13.3k Ω ±1% resistor (0805)         |
| R4, R6                         |     2 | 10k Ω ±1% resistors (0805)          |
| R5                             |     1 | 35.7k Ω ±1% resistor (0805)         |
| R7                             |     1 | 24.9k Ω ±1% resistor (0805)         |
| TP1                            |     1 | PC test point, red                  |
| U1                             |     1 | MAX8536EUA (8-pin µMAX)             |
| -                              |     1 | Shunt (JU1)                         |
| -                              |     1 | PCB: MAX8536 EVALUATION KIT         |

1

## MAX8536 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Fairchild Semiconductor | 888-522-5372 | www.fairchild.com     |
| Taiyo Yuden             | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX8536 when contacting these component suppliers.

## Quick Start

The EV kit is a fully assembled and tested surfacemount board. Follow the steps below for simple board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is connected across pins 1-2 of jumper JU1 (TIMER function set to 250kHz).
- 2) Connect the positive terminal of a 5V power supply to the PS\_OUT+ banana jack. Connect the ground terminal of this power supply to the PS\_OUT-banana jack.
- 3) Connect a voltmeter across the VBUS+ and VBUSterminals.
- 4) Connect an oscilloscope to TP1 on the EV kit.
- 5) Connect a voltmeter or an oscilloscope to the FAULT pad to capture the fault signal.
- 6) Turn on the 5V power supply connected across the PS\_OUT+ and PS\_OUT- banana jacks.
- 7) Verify that the voltmeter at VBUS+ measures 5V and TP1 measures approximately 10.5V with respect to the GND PCB pad.
- 8) Verify that FAULT measures approximately 5V.
- 9) The EV kit is ready to interface with a system for further testing.

## Detailed Description

The MAX8536 EV kit circuit demonstrates the functionality  of  the  MAX8536 ORing MOSFET controller that provides redundancy and fault isolation to highly reliable power systems. The EV kit can handle up to 20A of throughput current and can operate in 5V and 3.3V power systems. The EV kit is configured for 5V operation.

During startup, the EV kit monitors the voltage difference between a power supply connected at PS\_OUT+ and the power-bus VBUS+. Once the voltage drop is less than the internal threshold of 0.4V (typ) and the PS\_OUT+ voltage is greater than the undervoltage threshold, the IC controller turns on N1 and N2. Turning on the MOSFETs allows current to flow from PS\_OUT+

to  VBUS+ and vice versa. Once both MOSFETs are turned on, the EV kit continuously monitors the load to protect against undervoltage, overvoltage, and reversecurrent fault conditions. The IC controller uses the RDS(ON) resistance of both MOSFETs to monitor forward- and reverse-current conditions. During undervoltage, overvoltage, or reverse-current fault conditions, a logic  low  is  asserted  on  the FAULT output, and both MOSFETs are turned off to isolate PS\_OUT+ from VBUS+.

The overvoltage protection (OVP) and the undervoltage protection (UVP) thresholds are adjustable and can be disabled. The UVP threshold is set to 2.9V and the OVP threshold is set to 5.75V. A FAULT signal output is provided for circuit monitoring. N1 can be shorted if OVP is disabled.

## Input Voltage

The EV kit requires an input voltage of 4.5V to 5.5V connected across PS\_OUT+ and PS\_OUT- for normal operation. The IC controller starts to function when the input voltage exceeds the internal undervoltage lockout (UVLO) threshold of 2.7V (typ), but it continues to hold the GATE pin low to isolate the power supply from the live  power bus until the programmed undervoltage threshold of 2.9V is exceeded. Once the input voltage exceeds the UVP threshold and the voltage difference between PS\_OUT+ and VBUS+ is less than 0.4V (typ), the controller turns on the ORing MOSFETs N1 and N2 to  connect the power supply to the power bus without disturbing the power bus.

## GATE Drive

The GATE pin on the IC controller is the output of the internal charge pump that provides the necessary gate drive for both N1 and N2 on the EV kit. The GATE voltage can be monitored with an oscilloscope connected to TP1 on the EV kit board and should read 5.5V (typ) above the PS\_OUT+ voltage. During startup, the GATE voltage ramp-up time is determined by the charge-pump frequency that is programmed by the TIMER pin. The input impedance of the measuring instrument can decrease the voltage reading at TP1 (typically 220mV for

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

a 10M Ω device). To increase turn-off speed under fault conditions, decrease or remove C1.

## TIMER

The IC controller features a dual-purpose TIMER input that sets the charge-pump frequency or functions as a logic enabler. The EV kit circuit provides a 3-pin jumper (JU1) to configure the TIMER pin. Place a shunt across pins 2-3 of JU1 to shut down the IC. Place a shunt across pins 1-2 of JU1 to connect the TIMER pin to ground through R7 to set the charge-pump frequency to  250kHz. Removing the shunt from JU1 leaves the TIMER pin unconnected and sets the charge-pump frequency to 500kHz. An open-drain/open-collector transistor can also be connected to the TIMER PCB pad to control the IC controller. Assert a logic-low signal (below 0.5V) to the TIMER PCB pad to shut down the controller.  Verify  that  the  shunt  is  removed  from  JU1 when using an external device to control the IC (see Table 1 for JU1 configurations).

The charge-pump frequency can be reconfigured between 100kHz and 500kHz by replacing R7. Use the following equation to select a new resistor value for R7:

<!-- formula-not-decoded -->

where Frequency is the desired charge-pump frequency.

## UVP Threshold

The EV kit UVP threshold is programmed to 2.9V with external resistors R3 and R4. If the voltage at PS\_OUT+ drops below this threshold, the IC controller turns off N1 and N2 by discharging the GATE pin and asserting a logic low on the FAULT output. The controller returns to normal operation and pulls FAULT to VBUS+ if the input voltage exceeds the UVP threshold. The UVP threshold can be reconfigured by replacing R3 and R4. Use the following formula to select new resistor values:

<!-- formula-not-decoded -->

## Table 1. Jumper JU1

| SHUNT POSITION   | TIMER PIN                                  | EV KIT FUNCTION                                               |
|------------------|--------------------------------------------|---------------------------------------------------------------|
| 1-2              | Connected to ground through R7             | Normal operation. Charge-pump frequency programmed to 250kHz. |
| 2-3              | Connected to ground                        | Shutdown mode                                                 |
| Not Installed    | Floating (connected to the TIMER PCB pad*) | Normal operation. Charge-pump frequency defaults to 500kHz.   |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8536 Evaluation Kit

where UVP is the desired undervoltage protection threshold and R4 is between 10k Ω and 50k Ω .  The undervoltage threshold must be programmed to be greater than the internal UVLO threshold of 2.7V (typ).

Removing R3 and R4 and leaving the PC board pads open disables the UVP function.

## OVP Threshold

The EV kit OVP threshold is programmed to 5.75V with external resistors R5 and R6. The IC controller turns off the MOSFETs, asserts a logic low on the FAULT output, and latches off when an overvoltage fault condition is detected. An overvoltage fault condition is detected only if the voltage at VBUS+ exceeds this threshold and the forward-current condition is established. The forward-current condition is defined when both MOSFETs are on and the voltage drop from PS\_OUT+ to VBUS+ is greater than 0.01V (typ). A voltage drop greater than 0.01V is achieved when a minimum current of 1.6A (typ) (1.6A x 7m Ω of  RDS(ON) &gt; 0.01V) flows from PS\_OUT+ to VBUS+. Cycling the TIMER or PS\_OUT+ inputs low resets the EV kit.

The OVP threshold can be reconfigured by replacing R5 and R6. Use the following formula to select new resistor values:

<!-- formula-not-decoded -->

where OVP is the desired overvoltage protection threshold and R4 is between 10k Ω and 50k Ω .  Removing R5 and shorting R6 disables the OVP function.

When the selective OVP feature is not required, remove N1 and short its source and drain pads.

## MAX8536 Evaluation Kit

## Reverse Current

The IC controller detects reverse current during normal operation by monitoring the voltage difference between PS\_OUT+  and  VBUS+  using  the  on-resistance (RDS(ON)) of both N-channel MOSFETs, N1 and N2. N1 and N2 have a combined on-resistance of 7m Ω (typ). The IC controller detects a reverse-current fault condition  when VBUS+ voltage minus PS\_OUT+ voltage is greater than 0.03V (typ), after a 500ms blanking period when the gate drive first turns on. The EV kit detects a reverse-current fault condition if 4.3A (typ) (4.3A x 7m Ω &gt; 0.03V) are sourced from VBUS+ to PS\_OUT+. During a reverse-current condition, the IC controller turns off the MOSFETs, asserts a logic low on the FAULT output, and latches off.

Table 2. MAX8356 Fault States

| FAULT STATE                | CONDITIONS                                            | MOSFETs   | FAULT OUTPUT   | LATCHING   |
|----------------------------|-------------------------------------------------------|-----------|----------------|------------|
| Undervoltage Lockout       | PS_OUT+ < 2.7V (typ)                                  | Off       | VBUS+          | No         |
| Undervoltage Protection    | PS_OUT+ < 2.9V                                        | Off       | Low            | No         |
| Overvoltage Protection     | VBUS+ > 5.75V and PS_OUT+ > (VBUS+) + 0.01V           | Off       | Low            | Yes        |
| Reverse-Current Protection | PS_OUT+ < (VBUS+) - 0.03V and MOSFETs ON for t > 0.5s | Off       | Low            | Yes        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## FAULT Conditions

The FAULT PCB pad is connected to the IC's FAULT pin.  The FAULT pin is pulled to VBUS+ by R2 during normal operation. During an overvoltage, undervoltage, or reverse-current fault condition, the IC enters the faultcondition state where the FAULT pin is pulled low and the GATE pin is discharged to ground. This turns off both MOSFETs. The fault condition does not latch during an undervoltage condition. The IC latches off during a reverse-current or overvoltage fault condition. Cycle the input power supply or enter shutdown mode using JU1 to clear the latch (see Table 2 for the fault states' descriptions).

## Capacitors C4 and C5

Install  ceramic capacitors on C4 and C5 to filter input and output bus noise. Select a ceramic capacitor with a value between 1µF and 4.7µF in a 0805 case size with a voltage rating of 6.3V (min).

## MAX8536 Evaluation Kit

<!-- image -->

Figure 1. MAX8536 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8536 Evaluation Kit

<!-- image -->

Figure 2. MAX8536 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX8536 EV Kit PCB Layout-Component Side

Figure 4. MAX8536 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 5. MAX8536 EV Kit Component Placement GuideSolder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8536 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                         | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------|-----------------|
|                 0 | 3/03            | Initial release                                     | -               |
|                 1 | 2/12            | Changed N1/N2 part number from FDB7045L to FDB8030L | 1               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7