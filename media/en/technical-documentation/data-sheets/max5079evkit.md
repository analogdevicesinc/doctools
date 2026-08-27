<!-- lastmod 2022-08-04 -->
## General Description

The MAX5079 evaluation kit (EV kit) demonstrates the functionality of the MAX5079 ORing MOSFET controller in  a  parallel-connected  power-supply system. The EV kit  circuit  is  configured to connect two power supplies in  parallel  using  ORing  MOSFETs to simulate a fault condition, and to depict the isolation of the bus during the fault condition. The EV kit is configured for 3.0V to 12.6V input operation. The external undervoltage-lockout threshold is configured to 3.0V, and the overvoltage threshold is configured to 13.2V. Operation down to 1V is possible with circuit reconfiguration and an additional auxiliary power supply. The MAX5079 controller, along with an n-channel MOSFET, provides the functionality of a diode with an extremely low forward-voltage drop.

The MAX5079 controllers on the EV kit monitor the respective input voltages at VIN1 and VIN2 with respect to  the  power bus voltage VBUS. When the VIN\_ voltage rises above the VBUS voltage, the MOSFET is quickly turned on. If either VIN\_ power-supply voltage falls below VBUS, the MAX5079 discharges the MOSFET gate with 2A (typ) sink current and turns off the MOSFET within 200ns (typ), effectively isolating the bus.

| DESIGNATION     |   QTY | DESCRIPTION                                                                                   |
|-----------------|-------|-----------------------------------------------------------------------------------------------|
| C1, C7, C8      |     3 | 1000µF ± 20%, 16V electrolytic capacitors (12.5mm x 13.5mm) Sanyo 16CV1000FH                  |
| C2, C6, C9, C13 |     4 | 0.47µF ± 10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C474K                            |
| C3, C10         |     2 | 0.01µF ± 10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H103K or Taiyo Yuden UMK107B103K |
| C4, C11         |     2 | 0.047µF ± 10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E473K or Murata GRM188R71E473K  |

<!-- image -->

## Features

- ♦ N+1 Redundant System for a 3V to 13.2V Bus (1V Circuit Operation with Reconfiguration)
- ♦ Eliminates ORing Diode Power Dissipation
- ♦ Adjustable Reverse-Voltage-Detection Threshold
- ♦ Adjustable Undervoltage Threshold (Configured to 3.0V)
- ♦ Adjustable Overvoltage Threshold (Configured to 13.2V)
- ♦ OVP\_ and PGOOD\_ Status Indicators
- ♦ Supports Up to 20A of Load Current
- ♦ Simulates Catastrophic Fault Conditions at the Inputs
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | IC PACKAGE   |
|--------------|------------------|--------------|
| MAX5079EVKIT | 0 ° C to +70 ° C | 14 TSSOP     |

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                                 |
|-----------------|-------|-----------------------------------------------------------------------------|
| C5, C12         |     2 | 22µF ± 10%, 16V X5R ceramic capacitors (1210) TDK C3225X5R1C226K            |
| C14, C15        |     2 | 0.22µF ± 10%, 16V X7R ceramic capacitors (0805) Taiyo Yuden EMK212BJ224KG   |
| J1              |     1 | 5mm oscilloscope jack                                                       |
| JU1, JU2        |     2 | 3-pin headers                                                               |
| N1-N4           |     4 | 30V, 75A n-channel MOSFETs (D2PAK) Vishay SUB75N03-04 or Fairchild FDB7045L |
| R1, R2, R9, R10 |     4 | 10k Ω ± 5% resistors (0603)                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## MAX5079 Evaluation Kit

| DESIGNATION      |   QTY | DESCRIPTION                     |
|------------------|-------|---------------------------------|
| R3, R11          |     2 | 43.2k Ω ± 1% resistors (0603)   |
| R4, R6, R12, R14 |     4 | 12.1k Ω ± 1% resistors (0603)   |
| R5, R13          |     2 | 255k Ω ± 1% resistors (0603)    |
| R7, R15          |     0 | Not installed, resistors (0603) |
| R8, R16          |     2 | 3.92k Ω ± 1% resistors (0603)   |
| R17, R19         |     2 | 0 Ω ± 5% resistors (1206)       |
| R18, R20         |     2 | 330 Ω ± 5% resistors (1206)     |

## Component List (continued)

| DESIGNATION                     |   QTY | DESCRIPTION                         |
|---------------------------------|-------|-------------------------------------|
| SW1, SW2                        |     2 | Momentary contact switches          |
| U1, U2                          |     2 | MAX5079EUD (14-pin TSSOP)           |
| VIN1, VIN2, VBUS, GND, GND, GND |     6 | Noninsulated banana-jack connectors |
| None                            |     2 | Shunts (JU1, JU2)                   |
| None                            |     1 | MAX5079 EV kit PC board             |

## Component Suppliers

| SUPPLIER                | PHONE        | FAX          | WEBSITE               |
|-------------------------|--------------|--------------|-----------------------|
| Fairchild               | 888-522-5372 | -            | www.fairchildsemi.com |
| Murata                  | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Sanyo Electronic Device | 619-661-6322 | 619-661-1055 | www.sanyodevice.com   |
| Taiyo Yuden             | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK                     | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Vishay                  | -            | -            | www.vishay.com        |

Note: Indicate that you are using the MAX5079 when contacting these component suppliers.

## Quick Start

## Required Equipment

- Two 15V, 20A adjustable power supplies (PS1, PS2)
- One 5V, 1A power supply (PS3)
- Five voltmeters
- One four-channel oscilloscope
- One 10A load

The MAX5079 EV kit is a fully assembled and tested board. Follow the steps below for simple board operation. Do not turn on the power supplies until all connections are completed:

- 1) Verify that shunts are installed across pins 2 and 3 of  jumpers JU1 and JU2 (undervoltage comparators monitor VIN1 and VIN2 input sources).
- 2) Connect the positive terminal of the PS1 power supply  to  the  VIN1  banana  jack.  Connect  the  ground terminal of this power supply to the GND banana jack. Set the power supply to 3.3V.
- 3) Connect the positive terminal of the PS2 power supply  to  the  VIN2  banana  jack.  Connect  the  ground terminal of this power supply to the GND banana jack. Set the power supply to 3.3V.
- 4) Connect the 10A load across the VBUS and GND banana jacks. Verify that the load is disabled.
- 5) Connect the positive terminal of the PS3 power supply to the VS pad. Connect the ground terminal of this power supply to the GND pad.
- 6) Connect a voltmeter across the VBUS and GND terminals.
- 7) Connect an oscilloscope to the VIN1 pad, VIN2 pad, and VBUS oscilloscope jack (J1).
- 8) Connect voltmeters across OVP1, OVP2, PGOOD1, and PGOOD2 pads.
- 9) Turn on the PS1 and PS2 power supplies.
- 10) Verify that the voltmeter at VBUS measures 3.3V.
- 11) Verify  that  status  signals  PGOOD1 and PGOOD2 measure approximately 3.3V.
- 12) Verify that the status signals OVP1 and OVP2 measure approximately 3.3V.
- 13) Turn on the PS3 power supply.
- 14) Enable the 10A load.
- 15) Momentarily press switch SW1 or SW2 to cause a reverse-voltage fault condition.
- 16) The EV kit is ready to interface to a system for further testing.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description

The MAX5079 EV kit implements two identical parallel circuits that demonstrate the functionality of the MAX5079 ORing MOSFET controller, providing redundancy and fault isolation in highly reliable power systems. The EV kit is configured to operate in 3.0V to 12.6V bus systems. The EV kit can also operate in 1V power systems by reconfiguring the circuit and connecting another voltage source higher than 2.75V at the AUXIN\_ EV kit input. The undervoltage and overvoltage thresholds are adjustable. The undervoltage threshold is  set  to  3.0V,  and  the  overvoltage  threshold  is  set  to 13.2V. The EV kit PC board can handle up to 20A of throughput current.

During startup, the EV kit circuit monitors the voltage difference between the input power supplies connected to  VIN1  or  VIN2  and  the  power  bus  VBUS. Once the input power-supply voltage at VIN\_ is greater than the undervoltage-lockout threshold, and the voltage difference is greater than 12.5mV (typ), the respective MAX5079 controller turns on the associated MOSFET in the circuit. Turning on the MOSFET connects the VIN\_ power supply to the system bus without disturbing the system voltage. The EV kit then continuously monitors the input and output voltages to protect against undervoltage, overvoltage, and reverse-voltage fault conditions.  When a reverse-voltage fault is detected, the MOSFET is quickly turned off to isolate the input at VIN\_ from VBUS.

## Input Voltage Sources

The MAX5079 EV kit is configured to operate with an input source with the range of 3.0V (external undervoltage threshold) and 13.2V (overvoltage threshold) connected to the VIN\_ banana jacks if the MAX5079 controller  is  powered.  The  MAX5079 controller powers up when a 2.75V to 13.2V voltage source is present at the MAX5079 IN or AUXIN pins, which can be achieved by applying the voltage source to the VIN\_ or AUXIN\_ pads, respectively.

Use the VIN1, VIN2, and VBUS banana jacks to connect the power supplies and load. The 3.0V (UVLO) and the 13.2V (OVP) fault thresholds can be reconfigured by replacing resistors on the EV kit board.

## External Undervoltage Threshold

The MAX5079 controller integrates an internal undervoltage-lockout threshold and a programmable external undervoltage-lockout threshold. The internal undervolt-

<!-- image -->

## MAX5079 Evaluation Kit

age threshold is fixed at 2.25V (typ). At lower voltages, the MAX5079 controller shuts down and keeps the associated MOSFET gate voltage low. Note that 2.75V minimum input voltage must be present at the IN or AUXIN controller pins for the controller to power up and monitor the VIN\_ and VBUS nodes for undervoltage, overvoltage, and reverse-voltage fault conditions.

The MAX5079 EV kit external undervoltage-lockout threshold for both circuits is programmed to 3.0V by external resistors and can be configured to monitor the voltage at the VIN\_ or AUXIN\_ inputs using jumpers JU1 or JU2. If, during normal operation, the external undervoltage level drops below the 3.0V threshold, the MAX5079 controller turns off the MOSFET to isolate the input power-supply VIN\_ from the active VBUS output, and asserts a logic-low on the PGOOD\_ output signal. The controller turns on the MOSFET and pulls the PGOOD\_ output signal to VBUS if the external undervoltage level exceeds the threshold again.

Resistors R3 and R4 configure the external undervoltage threshold for circuit 1, and resistors R11 and R12 configure the external undervoltage threshold for circuit 2. Use the following equations to select new resistor values when reconfiguring the external undervoltage-lockout threshold:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where, UVLO1 and UVLO2 are the new undervoltagelockout thresholds for circuit 1 and circuit 2, respectively.  Resistors  R4  and R12 are typically set between 10k Ω and 50k Ω .  The  MAX5079 IC's rising external undervoltage lockout threshold is 0.66V.

When monitoring AUXIN\_, it is recommended to reconfigure the external undervoltage-lockout threshold voltage to be higher than 2.75V. See Table 1 and Table 2 for jumpers JU1 and JU2 configuration.

Table 1. Jumper JU1 Configuration

| SHUNT POSITION   | EV KIT FUNCTION                             |
|------------------|---------------------------------------------|
| 1-2              | External UVLO monitors AUXIN1 input voltage |
| 2-3 (Default)    | External UVLO monitors VIN1 input voltage   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5079 Evaluation Kit

## Table 2. Jumper JU2 Configuration

| SHUNT POSITION   | EV KIT FUNCTION                             |
|------------------|---------------------------------------------|
| 1-2              | External UVLO monitors AUXIN2 input voltage |
| 2-3 (Default)    | External UVLO monitors VIN2 input voltage   |

## Overvoltage Threshold

The MAX5079 EV kit overvoltage-protection threshold (OVP) for both circuits is programmed to 13.2V (typ) by resistors R5/R6 (circuit 1) and resistors R13/R14 (circuit 2). An overvoltage fault condition is detected when the voltage at VBUS exceeds the 13.2V (typ) threshold, and the voltage at VIN\_ is greater than the voltage at VBUS. The MAX5079 controller turns off the MOSFET of the respective circuit and asserts a logic-low signal on the PGOOD\_ and OVP\_ outputs when an overvoltage fault condition is detected. During an overvoltage fault condition, the OVP\_ output is latched low. If the VBUS voltage drops below the overvoltage threshold after an overvoltage fault condition, the ORing MOSFET is turned back on, the PGOOD\_ output is pulled to VBUS, but the OVP\_ remains low. Cycling the input power at VIN\_ and AUXIN\_ unlatches the OVP\_ output.

Note: During an overvoltage fault condition, the MOSFET continues to conduct through the body diode.

To reconfigure the overvoltage threshold, replace feedback resistors R5 and R6 for circuit 1, or resistors R13 and R14 for circuit 2. Use the following equations to select new resistor values:

<!-- formula-not-decoded -->

where, OVP1 and OVP2 are the new overvoltage-protection thresholds for circuit 1 and circuit 2, respectively.  Resistors  R6  and R14 are normally set between 10k Ω and 50k Ω .

## Reverse-Voltage Thresholds

The MAX5079 controller integrates a fast comparator and a slow comparator to detect two different types of reverse-voltage fault conditions during operation. The fast  comparator provides noise immunity during high and fast transients, while the slow comparator provides glitch  immunity during the hot insertion or removal of paralleled power supplies. A reverse-voltage fault condition is detected when the voltage difference between the VIN\_ input and VBUS (VIN\_ - VBUS) exceeds the programmed reverse-voltage threshold of the fast- or slowcomparator reverse-voltage threshold for longer than the blanking time.

The MAX5079 EV kit circuit fast-comparator reversevoltage threshold is programmed to -50mV (typ), with resistor  R8  (VIN1)  and  R16  (VIN2).  The  blanking  time for the fast comparator is fixed at 50ns (typ). The EV kit slow-comparator reverse-voltage threshold is programmed to -12mV (typ) by default. The blanking time for  the  slow  comparator is programmed to 5ms (typ) with capacitor C4 (VIN1) and C11 (VIN2). The slow comparator's reverse-voltage threshold can be reconfigured by installing resistors R7 (VIN1) or R15 (VIN2).

During a reverse-voltage condition, the MAX5079 controller  turns  off  the  associated  MOSFET. Once the reverse-voltage condition is cleared, the MOSFET is turned back on. Refer to the Fast Comparator (FTH) and Slow Comparator (STH) sections in the MAX5079 IC data sheet for further details and equations to select new component values when reconfiguring the reversevoltage thresholds and blanking time of the circuit.

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Fault Conditions

The MAX5079 EV kit provides output PGOOD\_ and OVP\_ fault signals to indicate fault events at the two circuits  on  the  EV  kit  board.  During  undervoltage,  overvoltage, or reverse-voltage fault conditions, the output signals are pulled low and the GATE pin is discharged to ground, turning off both MOSFETs. The OVP\_ signal latches logic-low when OVP is detected. Cycling the power at VIN\_ and AUXIN\_ resets the latched OVP\_ fault output. See Table 3 for fault-mode descriptions.

Table 3. MAX5079 EV Kit Fault Modes

| FAULT MODE                                                            | EV KIT CONDITIONS (TYPICAL VALUES)                                                          | MOSFET   | PGOOD_ OUPUT   | OVP_ OUTPUT   | OVP_ LATCHING   |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------|----------|----------------|---------------|-----------------|
| Undervoltage                                                          | V IN_ ≤ 3.0V and AUXIN_ ≤ 2.75V                                                             | Off      | Low            | V BUS         | No              |
| Overvoltage                                                           | V BUS ≥ 13.2V and V IN_ > V BUS                                                             | Off      | Low            | Low           | Yes             |
| Normal Operation After and Overvoltage Condition (No Power Recycling) | V IN_ > 3.0V or AUXIN_>2.75V and V BUS ≤ 12V                                                | On       | V BUS          | Low           | Yes             |
| Reverse Voltage                                                       | V IN_ - V BUS < -50mV (blanking time >50ns) or V IN_ - V BUS < -12.5mV (blanking time >5ms) | Off      | V BUS          | V BUS         | No              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5079 Evaluation Kit

## Creating Fault Conditions

The MAX5079 EV kit provides a fast and efficient method for creating an undervoltage or reverse-voltage fault condition. After powering up the EV kit, momentarily  press  the  SW\_  switch  to  connect  the  VIN\_  input  to ground through respective n-channel MOSFETs (N3 or N4). Switch SW1 creates a fault condition on circuit 1. Switch SW2 creates a fault condition on circuit 2.

## MAX5079 Evaluation Kit

Figure 1. MAX5079 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5079 Evaluation Kit

Figure 1. MAX5079 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5079 Evaluation Kit

Figure 2. MAX5079 EV Kit Component Placement Guide-Component Side

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5079 Evaluation Kit

<!-- image -->

Figure 3. MAX5079 EV Kit PC Board Layout -Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5079 Evaluation Kit

Figure 4. MAX5079 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

10

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600