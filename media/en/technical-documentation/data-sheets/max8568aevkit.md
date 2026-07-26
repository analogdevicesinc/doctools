<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX8568A evaluation kit (EV kit) is a fully assembled and tested circuit board that evaluates the MAX8568A and MAX8568B complete backup-management ICs for lithium and NiMH batteries. The MAX8568A EV kit can charge both NiMH and rechargeable lithium battery types; the EV kit default setting is for NiMH charging. Two on-board p-channel MOSFETs allow the evaluation of backup switchover from the primary source. Low-voltage backup cells can be stepped up by the on-chip synchronous-rectified step-up DC-DC converter, which has a default setting of 3.3V on the EV kit and is capable of 50mA output current. A secondary output provided by an on-chip LDO has a 2.5V output voltage for the MAX8568A and is capable of providing 10mA output current. When the main battery is connected, these two voltages are typically provided by a MAX1586/MAX1587 multi-output complete system power supply. The MAX8568A EV kit can also evaluate the MAX8568B. To evaluate the MAX8568B, order a free sample along with this EV kit.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1, C4        |     2 | 4.7µF ±10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J475K |
| C2, C3        |     2 | 10µF ±10%, 6.3V X5R ceramic capacitors (0805) Murata GRM219R60J106K  |
| C5            |     1 | 0.22µF ±10%, 6.3V X5R ceramic capacitor (0402) Murata GRM155R60J224K |
| JU1           |     1 | 3-pin header                                                         |
| L1            |     1 | 10µH inductor Murata LQH32CN100K53                                   |
| Q1, Q2        |     2 | -12V, 50m Ω (max), SOT23 Fairchild Semiconductor FDN306P             |

## Features

- ♦ Charges Both NiMH and Rechargeable Lithium Backup Batteries
- ♦ Internal Switch Step-Up DC-DC Converter for 1-Cell NiMH Battery Input
- ♦ Two Backup Output Voltages 3.3V, 50mA Step-Up DC-DC Converter 2.5V, 10mA LDO
- ♦ Programmable Charge Current
- ♦ Programmable Charge Voltage Limit
- ♦ On Board p-Channel MOSFETs for Backup Switchover
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE            |
|---------------|--------------|-----------------------|
| MAX8568AEVKIT | 0°C to +70°C | 16 Thin QFN 3mm x 3mm |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                 |
|---------------|-------|-----------------------------|
| R1            |     0 | Open, resistor (0402)       |
| R2, R7        |     2 | 0 Ω resistors (0402)        |
| R3, R4        |     2 | 100k Ω ±1% resistors (0402) |
| R5            |     1 | 169k Ω ±1% resistor (0402)  |
| R6            |     1 | 49.9k Ω ±1% resistor (0402) |
| R8            |     1 | 1.2M Ω ±5% resistor (0402)  |
| R9            |     1 | 357k Ω ±1% resistor (0402)  |
| R10           |     1 | 1M Ω ±1% resistor (0402)    |
| U1            |     1 | MAX8568A                    |
| None          |     1 | Shunts                      |
| None          |     1 | MAX8568A PC board           |

## Component Suppliers

| SUPPLIER                | COMPONENT           | PHONE        | WEBSITE               |
|-------------------------|---------------------|--------------|-----------------------|
| Fairchild Semiconductor | MOSFET              | 972-910-8000 | www.fairchildsemi.com |
| Kamaya                  | Resistors           | 260-489-1533 | www.kamaya.com        |
| Murata                  | Capacitor, Inductor | 814-237-1431 | www.murata.com        |

Note:

Indicate that you are using the MAX8568A when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## MAX8568A Evaluation Kit

## Quick Start

## Recommended Equipment

- 12) Turn on PS2, and then turn on PS1.
- 13) Verify that the voltage at BK is approximately 1.3V. Verify that charging current from BK is approximately 10mA.
- 14) Increase the voltage at BK to 1.5V. Verify that charging current from BK is approximately 1mA.
- 15) Decrease the voltage at BK to 1.15V. Verify that charging current from BK is approximately 10mA.
- 16) Increase the voltage at BK to 1.85V. Verify that charging current from BK is approximately 0mA.

## Procedure (Backup Switchover)

Follow the steps below to verify board operation:

- 1) Repeat  steps  1  through  8  above  (from  the Procedure (Charging) section).
- 2) Connect the positive lead of PS2 to the BK pad and the negative lead of PS2 to the GND pad on the MAX8568A EV kit.
- 3) Connect the positive lead of one DMM to the I/O OUT pad on the MAX8568A EV kit and connect the negative lead of that DMM to the GND pad on the MAX8568A EV kit.
- 4) Connect the positive lead of the second DMM to the MEM OUT pad on the MAX8568A EV kit and connect the negative lead of that DMM to the GND pad on the MAX8568A EV kit.
- 5) Connect the 20mA load from I/O OUT to GND.
- 6) Connect the 5mA load from MEM OUT to GND.
- 7) Verify that the shunt on JU1 is in the NI position.

Figure 1. Quick-Start Wiring Diagram

<!-- image -->

## Procedure (Charging)

Follow the steps below to verify board operation:

- 1) Preset the variable-DC power supply, PS1, to 4.2V. Turn off the power supply. Do not turn on the power supply until all connections are complete:
- 2) Preset the variable-DC power supply, PS2, to 1.3V. Turn off the power supply. Do not turn on the power supply until all connections are complete:
- 3) Connect the 75 Ω resistor from the positive lead of PS2 to the negative lead of PS2. This allows PS2 to sink  current  to  simulate  a  rechargeable  backup battery.
- 4) Connect the positive lead of PS1 to the VIN pad on the MAX1586A EV kit and connect the negative lead of PS1 to the GND pad on the MAX1586A EV kit.
- 5) Connect the VIN pad of the MAX1586A EV kit, as shown  in  Figure  1,  to  the  MAIN  pad  of  the MAX8568A EV kit.
- 6) Connect the VCC\_I/O pad of the MAX1586A EV kit to the I/O IN pad of the MAX8568A EV kit.
- 7) Connect the VCC\_MEM pad of the MAX1586A EV kit to the MEM IN pad of the MAX8568A EV kit.
- 8) Connect the GND pad of the MAX1586A EV kit to the GND pad of the MAX8568A EV kit.
- 9) Connect the positive lead of the ammeter (50mA setting/capability) to the BK pad on the MAX8568A EV kit. Connect the negative lead of the ammeter to the positive lead of PS2. Connect the negative lead of PS2 to the GND pad on the MAX8568A EV kit.
- 10) Connect the positive lead of a DMM to the BK pad on the MAX8568A EV kit and connect the negative l ead  of  that  DMM  to  the  GND  pad  on  the MAX8568A EV kit.
- 11) Verify that the shunt on JU1 is in the NI position.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX1586A EV kit
- One variable-DC power supply (further referred to as PS1) capable of supplying up to 5.5V at 1A
- One variable-DC power supply (further referred to as PS2) capable of supplying up to 5V at 150mA
- Two digital multimeters (DMM)
- One 75 Ω , 1/10W resistor
- 20mA load
- 5mA load
- Ammeter

<!-- image -->

## MAX8568A Evaluation Kit

- 8) Turn on PS2, and then turn on PS1.

BK voltage where trickle-charge begins:

- 9) Verify that the voltage at I/O OUT is approximately 3.3V. Verify that the voltage at MEM OUT is approximately 2.5V.
- 10) Turn off PS1.
- 11) Verify that the voltage at I/O OUT is approximately 3.3V. Verify that the voltage at MEM OUT is approximately 2.5V.

## Detailed Description

## Evaluating the MAX8568A EV Kit Without the MAX1586A

To evaluate the MAX8568A without the MAX1586A, four power supplies are required. These supply MAIN (4.2V), BK (1.3V), I/O IN (3.3V), and MEM IN (2.5V). Note that the backup-battery boost converter will not operate unless I/O IN has been activated at least one time. The typical  power removal sequence for testing is 1) main battery goes low, then 2) MEM IN and I/O IN go low.

## Setting the Charge Current

Charge current is set by a resistor connected from CHGI to GND, R5 in Figure 2. The acceptable resistor range is from 50k Ω to 1800k Ω . Charge current is calculated by the following:

<!-- formula-not-decoded -->

where VBK is the nominal voltage of the charged backup battery. This is the fast-charge current for both NiMH and lithium batteries. For NiMH batteries, the trickle-charge is 10% of the fast-charge current.

## Setting the Fast-Charge-to-Trickle-Charge Transition Points

One 3-resistor-divider can be used to set the BK voltage where fast-charge begins (VBK(NILO)) and the BK voltage where trickle-charge begins (VBK(NIHI)) independently. VBK(NILO), VBK(NIHI), and the BK voltage where all charging stops (VBK(NIMAX)) are defined as follows:

BK voltage where fast-charge begins:

VBK(NILO) = VSTRTV

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- formula-not-decoded -->

BK voltage where all charging stops:

<!-- formula-not-decoded -->

Figure 2 shows the connection of R6, R7, and R8. Select R8 in the 100k Ω to  2M Ω range. The equations for the two upper divider-resistors are:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where VREF is 1.25V. The MAX8568A/MAX8568B data sheet discusses using a NiMH backup battery in more detail.

## Evaluating Rechargeable Lithium Backup Batteries

The MAX8568A EV kit can charge a lithium-type backup battery from the main battery connected at MAIN. Connect a shunt on jumper JU1 to the pins labeled LI for lithium backup-battery charging.

The lithium charger acts like a current-limited voltage source.

The MAX8568A/MAX8568B data sheet discusses using a lithium backup battery in more detail.

## Evaluating the MAX8568B

For evaluating the MAX8568B, carefully remove the MAX8568A and install the MAX8568B. All other components can remain the same.

## MAX8568A Evaluation Kit

Figure 2. MAX8568A EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8568A Evaluation Kit

<!-- image -->

Figure 3. MAX8568A EV Kit Component Placement GuideComponent Side

Figure 4. MAX8568A EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX8568A EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.