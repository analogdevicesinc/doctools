<!-- lastmod 2022-08-04 -->
<!-- image -->

## General Description

The MAX8555A evaluation kit (EV kit) demonstrates the functionality of the MAX8555A ORing MOSFET controller, which provides redundancy and fault isolation to highly reliable power systems. The EV kit is configured for 1.5V operation, but can also be modified to operate in 0.5V to 3.3V power systems.

During startup, the EV kit monitors the voltage difference between the power supplies VIN1 or VIN2 and a system power bus VOUT. Once the voltage difference is less than 50mV (typ), the MAX8555A turns on the two associated ORing MOSFETs, connecting the power supply to the system power bus. Once the MOSFETs are fully on, the EV kit circuit monitors the supply current and voltages to protect against undervoltage (UVP), overvoltage (OVP), and reverse-current fault conditions. PC board pads for fault output signals are provided for circuit monitoring.

| DESIGNATION     |   QTY | DESCRIPTION                                                                                    |
|-----------------|-------|------------------------------------------------------------------------------------------------|
| C1, C6          |     0 | Not installed, ceramic capacitors (0603)                                                       |
| C2, C7          |     2 | 0.01µF ± 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H103K or Taiyo Yuden UMK107B103KZ |
| C3, C8          |     2 | 0.1µF ± 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K or Taiyo Yuden UMK107BJ104KA |
| C4, C5, C9, C10 |     4 | 1000pF ± 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H102K or Taiyo Yuden UMK107B102KZ |
| C11, C12, C13   |     3 | 1000µF ± 20%, 6.3V electrolytic capacitors (8 x 10.2) SANYO 6CV1000AX                          |
| C14, C15, C16   |     3 | 1µF ± 10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K                                |
| C17, C18        |     2 | 150pF ± 5%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H151J                               |

## MAXIM

## Features

- ♦ 1+1 Redundant System for a 1.5V Bus (0.5V to 3.3V with Modifications)
- ♦ Eliminates ORing Diode Power Dissipation
- ♦ Reverse-Current Detection
- ♦ Adjustable Undervoltage Threshold (Configured to 0.75V)
- ♦ Adjustable Overvoltage Threshold (Configured to 2V)
- ♦ FAULT Output Status Indicator
- ♦ Adjustable Soft-Start
- ♦ Supports Up to 20A of Load Current
- ♦ Surface-Mount Construction
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE       | IC PACKAGE   |
|---------------|------------------|--------------|
| MAX8555AEVKIT | 0 ° C to +70 ° C | 10 µMax      |

## Component List

| DESIGNATION                     |   QTY | DESCRIPTION                                                                    |
|---------------------------------|-------|--------------------------------------------------------------------------------|
| JU1, JU2                        |     2 | 2-pin headers                                                                  |
| N1-N4                           |     4 | 30V, 75A, N-channel MOSFETs (D 2 PAK) Vishay SUB75N03-04 or Fairchild FDB7045L |
| R1, R9                          |     2 | 2.2 Ω ± 5% resistors (0603)                                                    |
| R2, R10                         |     2 | 47.5k Ω ± 1% resistors (0603)                                                  |
| R3, R11                         |     2 | 4.99k Ω ± 1% resistors (0603)                                                  |
| R4, R12                         |     2 | 10k Ω ± 1% resistors (0603)                                                    |
| R5                              |     1 | 3.01k Ω ± 1% resistor (0603)                                                   |
| R6                              |     1 | 1k Ω ± 1% resistor (0603)                                                      |
| R7, R15                         |     2 | 24.9k Ω ± 1% resistors (0603)                                                  |
| R8, R16, R17, R18               |     0 | Not installed, resistors (0603)                                                |
| R13, R14                        |     2 | 6.04k Ω ± 1% resistors (0603)                                                  |
| TP1, TP2                        |     2 | PC test points (red)                                                           |
| U1, U2                          |     2 | MAX8555AEUB (10-pin µMAX)                                                      |
| VIN1, VIN2, VOUT, GND, GND, GND |     6 | Noninsulated banana jack connectors                                            |
| None                            |     2 | Shunts (JU1, JU2)                                                              |
| None                            |     1 | MAX8555A PC board                                                              |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX8555A Evaluation Kit

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Fairchild   | 888-522-5372 | -            | www.fairchildsemi.com |
| Sanyo       | 619-661-6835 | 619-661-1055 | www.sanyo.com         |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay      | 203-268-6261 | 203-452-5670 | www.vishay.com        |

Note: Please indicate that you are using the MAX8555A when contacting these component suppliers.

## Quick Start

The MAX8555A EV kit is a fully assembled and tested surface-mount board. Follow the steps below for simple board operation. Do not turn on the power supplies until all connections are completed:

- 1) Verify that a shunt is connected across jumpers JU1 and JU2 (TIMER function set to 250kHz).
- 2) Connect the positive terminal of a 10V power supply to the VDD1 and VDD2 pads. Connect the ground terminal of this power supply to the GND pads.
- 3) Connect the positive terminal of a 1.5V power supply  to  the  VIN1  banana  jack.  Connect  the  ground terminal of this power supply to the GND banana jack.
- 4) Connect the positive terminal of another 1.5V power supply to the VIN2 banana jack. Connect the ground terminal of this power supply to the GND banana jack.
- 5) Connect a voltmeter across the VOUT and GND terminals.
- 6) Connect an oscilloscope to test points TP1 and TP2 on the EV kit.
- 7) Connect a voltmeter or an oscilloscope to the FAULT1 and FAULT2 pads to capture the fault signals. Use oscilloscope probes with 10M Ω impedance.
- 8) Turn on the 10V power supply.
- 9) Turn on both 1.5V power supplies.
- 10) Verify  that  the  voltmeter  at  VOUT  measures 1.5V and test points TP1 and TP2 measure approximately 6.5V with respect to ground.
- 11) Verify that the fault-out signals FAULT1 and FAULT2 measure approximately 1.5V.
- 12) The EV kit is ready to interface to a system for further testing.

## Detailed Description

The MAX8555A EV kit implements two identical, parallel circuits that demonstrate the functionality of the MAX8555A ORing MOSFET controller, which provides redundancy and fault isolation in highly reliable power systems. The EV kit is configured to operate in 1.5V bus systems; however, the EV kit can be modified to operate in 0.5V to 3.3V power systems. The EV kit can handle up to 20A of throughput current.

During startup, both EV kit circuits monitor the voltage difference between the input power supplies connected to  VIN1  or  VIN2  and  the  power  bus  VOUT. Once the voltage difference is less than the internal threshold of 0.05V (typ), and the input power-supply voltage at VIN1 or VIN2 is greater than the undervoltage threshold, the respective MAX8555A controller turns on the associated MOSFETs in the circuit. Turning on these MOSFETs, connects the input power supplies to the system bus without disturbing the system voltage. The EV kit then continuously monitors the supply current and voltages to  protect against undervoltage, overvoltage, and reverse-current fault conditions. The MAX8555A controller uses the MOSFETs RDS(ON) resistance to monitor forward and reverse-current conditions. At undervoltage, overvoltage, or reverse-current fault conditions, a l ogic-low signal is asserted on the fault outputs ( FAULT1 or FAULT2 ).  The  MOSFETs are turned off to isolate the inputs (VIN1 or VIN2) from VOUT.

The OVP and the UVP thresholds are adjustable and can be disabled. The UVP threshold is set to 0.75V and the OVP threshold is set to 2V.

## Input Voltage Sources

The MAX8555A EV kit requires one voltage source capable of providing 8V to 13.25V to the VDD1 and VDD2 pads to power the two MAX8555A MOSFET controllers  (U1  and  U2,  respectively).  The  input  voltage requirement at VDD1 and VDD2 can be lowered to 3V to 5.5V by installing 0 Ω resistors at R8 and R16. The EV

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX8555A Evaluation Kit

kit also requires two 1.5V power supplies connected at VIN1 and VIN2 for normal operation.

Note: Each circuit (top or bottom) can be evaluated independently by not applying power to the other circuit.

VDD1 inputs low resets the latched fault on the upper circuit.  Cycling the TIMER2 or VDD2 inputs low resets the latched fault on the bottom circuit.

## Undervoltage Threshold

The UVP threshold for both circuits on the MAX8555A EV kit is programmed to 0.75V by external resistors R3 and R4 for the top circuit, and resistors R11 and R12 for the bottom circuit. The MAX8555A controller in each circuit  holds the GATE pin low to isolate the input power supplies VIN1 and VIN2 from the active VOUT power bus, if the voltage is below the programmed UVP threshold. If the voltage at VIN1 or VIN2 drops below this threshold, the respective MAX8555A controller turns off the MOSFETs by discharging the GATE pin and asserts a logic-low signal on the corresponding fault output ( FAULT1 or FAULT2 ). The controller returns to normal operation and clears the fault if the input voltage exceeds the undervoltage threshold. The undervoltage threshold can be reconfigured by replacing the appropriate feedback resistors (R3/R4 or R11/R12). Use the following equations to select new resistor values:

<!-- formula-not-decoded -->

where UVP is the desired undervoltage threshold and resistors  R4  and  R12 are typically set between 10k Ω and 50k Ω .

The UVP feature can be disabled by connecting the UVP pin to the VL pin. This can be achieved by removing the feedback resistors R3/R4 or R11/R12 and installing a 0 Ω resistor at R17 or R18.

## Overvoltage Threshold

The OVP signal threshold for both circuits on the MAX8555A EV kit is programmed to 2V by external resistors R5 and R6. The MAX8555A controller turns off the MOSFETs of the respective circuit, asserts a logiclow signal on the corresponding output fault, and latches the output off when an overvoltage fault condition is detected. An overvoltage fault condition is detected only if the voltage at VOUT exceeds this threshold and the forward-current condition is established. The forward-current condition is defined when both MOSFETs are on and the voltage drop between the input and the system bus is greater than 0.01V (typ). A voltage drop greater than 0.01V is achieved when 2.5A (typ) of current is sourced from inputs VIN1 or VIN2 to VOUT (2.5A x  8m Ω of  RDS(ON) &gt; 0.01V). Cycling the TIMER1 or The overvoltage threshold can be changed by replacing feedback resistors R5, R13, and R14. Use the following equation to select new resistor values:

<!-- image -->

<!-- formula-not-decoded -->

where OVP is the desired overvoltage threshold and R6 is  set  to  1k Ω .  Refer  to  the Setting the OVP Fault Threshold section in the MAX8555A data sheet to select new components values.

Remove resistor R5 and short resistor R6 to disable the overvoltage-protection function.

## Reverse Current

The MAX8555A controller detects reverse current during normal operation by monitoring the voltage difference between VIN1 (or VIN2) and VOUT, using the total on-resistance (RDS(ON)) of both N-channel MOSFETs in their  respective circuits.  The two MOSFETs used on each circuit have a combined on-resistance of 8m Ω (typ).  The MAX8555A controllers detect a reverse-current fault condition when VOUT -VIN1 (or VIN2) &gt; 0.02V (typ) after a 4.1ms blanking period, when the gate drive first  turns  on.  Each  circuit  detects  a  reverse-current fault  condition  if  2.5A  (typ)  (2.5A  x  8m Ω &gt; 0.02V) is sourced from VOUT to VIN1 (or VIN2). During a reverse-current condition, the MAX8555A controller turns off the MOSFETs, asserts a logic-low signal on the fault output ( FAULT1 or FAULT2 ),  and latches the output off.

## FAULT Conditions

The MAX8555A EV kit provides two output fault signals, FAULT1 and FAULT2 , to monitor fault events at the two circuits  on  the  EV  kit  board.  During  an  overvoltage, undervoltage, or reverse-current fault condition, the corresponding MAX8555A FAULT pin is pulled low and the GATE pin is discharged to ground, turning off both MOSFETs. The fault state does not latch during an undervoltage condition. The MAX8555A latches off during a reverse current or an overvoltage fault condition. Cycling the TIMER1 or VDD1 inputs low resets the latched fault on the top circuit. Cycling the TIMER2 or VDD2 inputs low resets the latched fault on the bottom circuit. See Table 1 for fault-mode descriptions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8555A Evaluation Kit

## GATE Drive

The GATE pin on the MAX8555A controller provides the necessary gate drive for both MOSFETs in each circuit on the EV kit. The GATE voltage can be monitored with an oscilloscope (10M Ω impedance) connected to test point TP1 or TP2 on the EV kit board, and should read 5V (typ) above the CS+ voltage. During startup, the GATE voltage ramp-up time is determined by the charge-pump frequency that is programmed by the TIMER pin.

## TIMER

The MAX8555A controller features a dual-purpose TIMER input that sets the charge-pump frequency or functions as a logic enabler. The MAX8555A EV kit circuits provide two 2-pin jumpers, JU1 and JU2, to configure the TIMER pin. Place a shunt across jumper JU1 or  JU2 to connect the TIMER pin to ground through resistor R7 or R15 to set the charge-pump frequency to 250kHz. Removing the shunts from jumper JU1 or JU2 leaves the TIMER pin floating on the associated circuits

Table 1. MAX8555A FAULT MODES

| FAULT MODE                 | EV KIT CONDITIONS                                                                                                         | MOSFETs   | FAULT1 AND FAULT2 OUTPUT   | LATCHING   |
|----------------------------|---------------------------------------------------------------------------------------------------------------------------|-----------|----------------------------|------------|
| V DD OVP                   | V DD > 14.4V (typ)                                                                                                        | Off       | Low                        | No         |
| Undervoltage Protection    | V IN 1 or V IN 2 < 0.75V                                                                                                  | Off       | Low                        | No         |
| Overvoltage Protection     | V OUT > 2V and V IN 1 or V IN 2 > V OUT + 0.01V                                                                           | Off       | Low                        | Yes        |
| Reverse-Current Protection | V IN 1 or V IN 2 < V OUT - 0.02V and MOSFETs are ON for t > 4.1ms (when shunts are connected across JU1 or JU2 t > 8.2ms) | Off       | Low                        | Yes        |

Table 2. Jumpers JU1 and JU2

| SHUNT LOCATION   | TIMER PIN                                   | EV KIT FUNCTION                                                                  |
|------------------|---------------------------------------------|----------------------------------------------------------------------------------|
| Installed        | Connected to ground through resistor R7/R15 | Normal operation, charge-pump frequency programmed to 250kHz, blank time = 8.2ms |
| Not installed    | Floating (connected to the TIMER PC pad*)   | Normal operation, charge-pump frequency defaults to 500kHz, blank time = 4.1ms   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

and sets the charge-pump frequency to 500kHz. An open-drain/open-collector transistor can also be connected to the TIMER PC pad to control the MAX8555A controller. Assert a logic-low signal (below 0.5V) to the TIMER pad to shut down the controller. Verify that the shunts are removed from jumpers JU1 and JU2 when using an external device to control the MAX8555A. See Table 2 for jumpers JU1 and JU2 configuration.

The charge-pump frequency can be adjusted between 100kHz and 500kHz by replacing resistor R7 or R15. Use the following equation to select a new 1% tolerance resistor value for R7 or R15.

<!-- formula-not-decoded -->

where f is the desired charge-pump frequency in kHz and RTIMER is the value of resistor R7 or R15.

<!-- image -->

## MAX8555A Evaluation Kit

Figure 1. MAX8555A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8555A Evaluation Kit

Figure 2. MAX8555A EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8555A Evaluation Kit

<!-- image -->

Figure 3. MAX8555A EV Kit PC Layout-Component Side (Layer 1)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8555A Evaluation Kit

Figure 4. MAX8555A EV Kit PC Layout-Ground Layer (Layer 2)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8555A Evaluation Kit

<!-- image -->

Figure 5. MAX8555A EV Kit PC Layout (Layer 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8555A Evaluation Kit

Figure 6. MAX8555A EV Kit PC Layout-Ground Layer (Layer 4)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10