<!-- lastmod 2022-08-02 -->
## General Description

The MAX8535 evaluation (EV) kit circuit demonstrates the functionality of the MAX8535 ORing MOSFET controller  that  provides  redundancy and fault isolation to highly reliable power systems. The MAX8535 EV kit board operates in 12V systems.

During startup, the EV kit monitors the voltage difference between a power supply and a power bus. Once the  voltage  difference  is  less  than  0.4V,  the  MAX8535 turns on two ORing MOSFETs, linking the power supply and power bus. Once the MOSFETs are on, the EV kit monitors the load current and voltages to protect against undervoltage (UVP), overvoltage (OVP), and reverse-current fault conditions.

The OVP and UVP thresholds are adjustable and can be disabled. The UVP threshold is set to 8V and the OVP threshold is set to 13.75V. A FAULT signal output is provided for circuit monitoring.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| C1            |     1 | 0.01µF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H103K or Taiyo Yuden UMK107B103KZ |
| C2            |     1 | 0.1µF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H104K or Taiyo Yuden UMK107BJ104KA |
| C3            |     1 | 1µF ± 10%, 16V X7R ceramic capacitor (0805) TDK C2012X7R1C105K or Taiyo Yuden EMK212BJ105KG   |
| C4, C5        |     0 | Not installed, ceramic capacitors (1206)                                                      |
| JU1           |     1 | 3-pin header                                                                                  |
| N1, N2        |     2 | 30V, 75A, N-channel MOSFETs (D2-PAK) Fairchild FDB7045L                                       |

<!-- image -->

## Features

- ♦ Fault Power-Supply Isolation for 12V Bus
- ♦ Eliminates ORing Diode Power Dissipation
- ♦ Reverse-Current Detection
- ♦ Adjustable Undervoltage Threshold (Configured to 8V)
- ♦ Adjustable Overvoltage Threshold (Configured to 13.7V)
- ♦ FAULT Output Status Indicator
- ♦ Adjustable Soft-Start
- ♦ Up to 20A of Load Current
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX8535EVKIT | 0 ° C to +70 ° C | 8 µMAX       |

## Component List

| DESIGNATION                    |   QTY | DESCRIPTION                         |
|--------------------------------|-------|-------------------------------------|
| PS_OUT+, PS_OUT-, VBUS+, VBUS- |     4 | Noninsulated banana jack connectors |
| R1                             |     1 | 10 Ω ± 5% resistor (0805)           |
| R2                             |     1 | 51k Ω ± 5% resistor (0805)          |
| R3                             |     1 | 53.6k Ω ± 1% resistor (0805)        |
| R4, R6                         |     2 | 10k Ω ± 1% resistors (0805)         |
| R5                             |     1 | 100k Ω ± 1% resistor (0805)         |
| R7                             |     1 | 24.9k Ω ± 1% resistor (0805)        |
| TP1                            |     1 | PC test point, red                  |
| U1                             |     1 | MAX8535EUA (8-pin µMAX)             |
| None                           |     1 | Shunt (JU1)                         |
| None                           |     1 | MAX8535 PC board                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX8535 Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Fairchild   | 888-522-5372 | N/A          | www.fairchildsemi.com |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay      | 203-268-6261 | 203-452-5670 | www.vishay.com        |

Note: Please indicate that you are using the MAX8535 when contacting these component suppliers.

## Quick Start

The MAX8535 EV kit is a fully assembled and tested surface-mount board. Follow the steps below for simple board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is connected across pins 1 and 2 of JU1 (TIMER function set to 250kHz).
- 2) Connect the positive terminal of a 12V power supply to the PS\_OUT+ banana jack. Connect the ground terminal of this power supply to the PS\_OUT- banana jack.
- 3) Connect a voltmeter across the VBUS+ and VBUSterminals.
- 4) Connect an oscilloscope to TP1 on the EV kit.
- 5) Connect a voltmeter or an oscilloscope to the FAULT pad to capture fault signals.
- 6) Turn on the 12V power supply connected across the PS\_OUT+ and PS\_OUT- banana jacks.
- 7) Verify  that  the  voltmeter  at  VBUS+ measures 12V and TP1 measures approximately 22.8V with respect to the GND pad.
- 8) Verify that FAULT measures approximately 12V.
- 9) The EV kit is ready to interface with a system for further testing.

## Detailed Description

The MAX8535 EV kit circuit demonstrates the functionality  of  the  MAX8535 ORing MOSFET controller that provides redundancy and fault isolation to highly reliable power systems. The EV kit can handle up to 20A of throughput current and operates 12V power systems.

During startup, the EV kit monitors the voltage difference between a power supply connected at PS\_OUT+ and the power bus VBUS+. Once the voltage drop is less than the internal threshold of 0.4V and the PS\_OUT+ voltage is greater than the undervoltage threshold, the MAX8535 controller turns on N1 and N2. Turning on the MOSFETs allows current to flow from PS\_OUT+ to VBUS+ and vice versa. Once both MOSFETs are turned on, the EV kit continuously monitors the load to protect against undervoltage, overvoltage, and reverse-current fault  conditions. The MAX8535 controller uses the RDS(ON) resistance of both MOSFETs to monitor forward- and reverse-current conditions. During undervoltage, overvoltage, or reverse-current fault conditions, a logic low is asserted on the FAULT output and both MOSFETs are turned off to isolate PS\_OUT+ from VBUS+.The overvoltage protection (OVP) and the undervoltage protection (UVP) thresholds are adjustable and can be disabled. The UVP threshold is set to 8V and the OVP threshold is set to 13.75V. A FAULT signal output is provided for circuit monitoring. N1 can be shorted if OVP is disabled.

## Input Voltage

The MAX8535 EV kit requires an input voltage of 9V to 13V connected across PS\_OUT+ and PS\_OUT- for normal operation. The MAX8535 controller starts to function when the input voltage exceeds the internal undervoltage lockout (UVLO) threshold of 6.5V (typ), but continues to hold the GATE pin low to isolate the power supply from the live power bus until the programmed UVP threshold of 8V is exceeded. Once the input voltage exceeds the UVP threshold and the voltage difference between PS\_OUT+ and VBUS+ is less than 0.4V (typ),  the  controller  turns  on  the  ORing  MOSFETs  N1 and N2 to connect the power supply to the power bus without disturbing the power bus.

## GATE Drive

The GATE pin on the MAX8535 controller is the output of the internal charge pump that provides the necessary gate drive for both N1 and N2 on the EV kit. The GATE voltage can be monitored with an oscilloscope connected to TP1 on the EV kit board and should read 10.8V (typ) above the PS\_OUT+ voltage. During startup, the GATE voltage ramp-up time is determined by the charge-pump frequency programmed by the TIMER pin. The input impedance of the measuring instrument can decrease the voltage reading at TP1 (430mV typ for a 10M Ω device). To increase turn-off speed under fault conditions, decrease or remove C1.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Jumper JU1

| SHUNT LOCATION   | TIMER PIN                                 | EV KIT FUNCTION                                               |
|------------------|-------------------------------------------|---------------------------------------------------------------|
| 1 and 2          | Connected to ground through R7            | Normal Operation. Charge-pump frequency programmed to 250kHz. |
| 2 and 3          | Connected to ground                       | Shutdown Mode                                                 |
| Not Installed    | Floating (connected to the TIMER PC pad*) | Normal Operation. Charge-pump frequency defaults to 500kHz.   |

* User can connect to the TIMER PC pad and supply a logic signal.

## TIMER

The MAX8535 controller features a dual-purpose TIMER input that sets the charge-pump frequency or functions as a logic enabler. The MAX8535 EV kit circuit provides a 3-pin jumper (JU1) to configure the TIMER pin. Place a shunt across pins 2 and 3 of JU1 to shutdown the MAX8535. Place a shunt across pins 1 and 2 of JU1 to connect the TIMER pin to ground through R7 to set the charge-pump frequency to 250kHz. Removing the shunt from JU1 leaves the TIMER pin floating and sets the charge-pump frequency to 500kHz. An open-drain/opencollector transistor can also be connected to the TIMER PC pad to control the MAX8535 controller. Assert a logiclow signal (below 0.5V) to the TIMER pad to shutdown the controller. Verify that the shunt is removed from JU1 when using an external device to control the MAX8535 (see Table 1 for JU1 configurations). The charge-pump frequency can be reconfigured between 100kHz and 500kHz by replacing R7. Use the following equation to select a new resistor value for R7:

<!-- formula-not-decoded -->

where Frequency is the desired charge-pump frequency.

## UVP Threshold

The MAX8535 EV kit UVP threshold is programmed to 8V with external resistors R3 and R4. If the voltage at PS\_OUT+ drops below this threshold, the MAX8535 controller turns off N1 and N2 by discharging the GATE pin and asserts a logic low on the FAULT output. The controller returns to normal operation and pulls FAULT to VBUS+ if the input voltage exceeds the UVP threshold. The UVP threshold can be reconfigured by replac-

<!-- image -->

## MAX8535 Evaluation Kit

ing R3 and R4. Use the following formula to select new resistor values:

<!-- formula-not-decoded -->

where UVP is the desired undervoltage protection threshold and R4 is between 10k Ω and 50k Ω . The UVP threshold must be programmed to be greater than the internal UVLO threshold of 6.5V (typ).

Removing R3 and R4 and leaving the PC board pads open disables the UVP function.

## OVP Threshold

The MAX8535 EV kit OVP threshold is programmed to 13.75V with external resistors R5 and R6. The MAX8535 controller turns off the MOSFETs, asserts a logic low on the FAULT output, and latches off when an overvoltage fault  condition  is  detected.  An  overvoltage  fault  condition  is  detected  only  if  the  voltage  at  VBUS+ exceeds this  threshold and the forward-current condition is established. The forward-current condition is defined when both MOSFETs are on and the voltage drop from PS\_OUT+ to VBUS+ is greater than 0.01V (typ). A voltage drop greater than 0.01V is achieved when a minimum current of 1.6A (1.6A x 7m Ω of RDS(ON) &gt; 0.01V) flows from PS\_OUT+ to VBUS+. Cycling the TIMER or PS\_OUT+ inputs low resets the EV kit.

The OVP threshold can be reconfigured by replacing R5 and R6. Use the following formula to select new resistor values:

<!-- formula-not-decoded -->

where OVP is the desired OVP threshold and R4 is between 10k Ω and 50k Ω .  The  overvoltage threshold must be programmed to be less than the internal OVLO threshold of 14.5V (typ).

Removing R5 and shorting R6 disables the OVP function.  When selective OVP is not required, remove N1 and short its source and drain pads.

## Reverse Current

The MAX8535 controller detects reverse current during normal operation by monitoring the voltage difference between PS\_OUT+ and VBUS+ using the on-resistance (RDS(ON)) of both N-channel MOSFETs, N1 and N2. N1 and N2 have a combined on-resistance of 7m Ω (typ). The MAX8535 controller detects a reverse-current fault condition when VBUS+ voltage minus PS\_OUT+ voltage

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8535 Evaluation Kit

is greater than 0.03V (typ), after a 500ms blanking period when the gate drive first turns on. The EV kit detects a reverse-current fault condition if 4.3A (4.3A x 7m Ω &gt; 0.03V) are sourced from VBUS+ to PS\_OUT+. During a reverse-current condition, the MAX8535 controller turns off the MOSFETs, asserts a logic low on the FAULT output, and latches off.

## FAULT Conditions

The FAULT PC pad is connected to the MAX8535 FAULT pin.  The FAULT pin is  pulled  to  VBUS+ by R2 during normal operation. During an overvoltage, undervoltage,  or  reverse-current  fault  condition,  the MAX8535 enters the fault-condition state where the

## Table 2. MAX8535 Fault States

Figure 1. MAX8535 EV Kit Schematic

| FAULT STATE                | CONDITIONS                                             | MOSFETs   | FAULT OUTPUT   | LATCHING   |
|----------------------------|--------------------------------------------------------|-----------|----------------|------------|
| Undervoltage Lockout       | PS_OUT+ < 6.5V (typ)                                   | Off       | VBUS+          | No         |
| Undervoltage Protection    | PS_OUT+ < 8V                                           | Off       | Low            | No         |
| Overvoltage Protection     | PS_OUT+ > (VBUS+) + 0.01V and VBUS+ > 13.75V           | Off       | Low            | Yes        |
| Reverse-Current Protection | PS_OUT+ < (VBUS + ) -0.03V and MOSFETs ON for t > 0.5s | Off       | Low            | Yes        |
| Overvoltage Lockout        | PS_OUT+ > 14.5V (typ)                                  | Off       | Low            | No         |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

FAULT pin is pulled low and the GATE pin is discharged to ground, turning off both MOSFETs. The fault condition does not latch during an undervoltage condition. The MAX8535 latches off during a reverse-current or  overvoltage fault condition. Cycle the input power supply or enter shutdown mode using JU1 to clear the latch (see Table 2 for the fault states' descriptions).

## Capacitors C4 and C5

Install  ceramic capacitors on C4 and C5 to filter input and output bus noise. Select a ceramic capacitor with a value between 1µF and 4.7µF in a 1206 case size with a voltage rating of 16V (min).

<!-- image -->

Figure 2. MAX8535 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX8535 EV Kit PC Layout-Solder Side

<!-- image -->

## MAX8535 Evaluation Kit

Figure 3. MAX8535 EV Kit PC Layout-Component Side

<!-- image -->

Figure 5. MAX8535 EV Kit Component Placement GuideSolder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

5

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600