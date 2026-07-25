<!-- lastmod 2022-08-03 -->
## General Description

The MAX4810 evaluation kit (EV kit) provides a proven design to evaluate the MAX4810 high-voltage digital pulser.

The MAX4810 EV kit PCB comes with a MAX4810CTN+ installed.  Contact the factory for free samples of the pin-compatible MAX4811CTN+ or MAX4812CTN+ devices.

Warning: Use caution when using this EV kit due to the high voltage involved.

| DESIGNATION   |   QTY | DESCRIPTION                                                                  |
|---------------|-------|------------------------------------------------------------------------------|
| C1-C4         |     4 | 4700pF ±10%, 250V X7R ceramic capacitors (0805) Murata GRM21AR72E472K        |
| C5, C6        |     2 | 4700pF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71H472K         |
| C7-C11, C18   |     6 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K          |
| C12-C15       |     4 | 0.1µF ±10%, 250V X7R ceramic capacitors (1206) Murata GRM31CR72E104K         |
| C16, C17      |     2 | 10µF ±10%, 16V X7R ceramic capacitors (1206) Murata GRM31CR71C106K           |
| C19-C22       |     4 | 10µF ±20%, 160V aluminum electrolytic capacitors (G13) Panasonic EEVEB2C100Q |

<!-- image -->

## MAX4810 Evaluation Kit

Features

- ♦ On-Board Charge-Pump Voltage Inverter
- ♦ Lead-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4810EVKIT+ | EV Kit |

## Component List

*EP = Exposed pad.

| DESIGNATION                         |   QTY | DESCRIPTION                                                              |
|-------------------------------------|-------|--------------------------------------------------------------------------|
| C23, C24                            |     2 | 220pF ±10%, 250V X7R ceramic capacitors (0603) Murata GRM188R72E221KW07D |
| J1-J4                               |     4 | 2-pin headers                                                            |
| JU2, JU4, JU5, JU6, JU8, JU10, JU11 |     7 | 3-pin headers                                                            |
| JU12-JU16                           |     5 | 2-pin headers                                                            |
| R1, R2                              |     2 | 1k ±5%, 1W chip resistors (2512) Panasonic ERJ1TYJ102U                   |
| U1                                  |     1 | High-voltage digital pulser (56 TQFN-EP*) Maxim MAX4810CTN+              |
| U2                                  |     1 | Charge-pump voltage inverter (8 SO) Maxim ICL7662CBA+                    |
| -                                   |    12 | Shunts                                                                   |
| -                                   |     1 | PCB: MAX4810 Evaluation Kit+                                             |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |

Note: Indicate that you are using the MAX4810, MAX4811, or MAX4812 when contacting these component suppliers.

1

## MAX4810 Evaluation Kit

## Quick Start

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX4810 EV kit
- One +100V, 200mA power supply
- One -100V, 200mA power supply
- One +12V, 200mA power supply
- One +3.3V, 200mA power supply
- One data generator
- One electronic load
- One 4-channel oscilloscope

## Procedure

The MAX4810 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply or the electronic load until all connections are completed.

- 1) Verify that the jumpers are in their default positions, as described in Table 1.
- 2) Connect the +100V power supply to the EV kit VPP1 pad and connect the ground of the +100V power supply to the EV kit left GND pad.
- 3) Connect the -100V power supply to the EV kit VNN1 pad and connect the ground of the -100V power supply to the EV kit left GND pad.
- 4) Connect the +12V power supply to the EV kit VCC pad and connect the ground of the +12V power supply to the EV kit top GND pad.

Figure 1. Data Generator Outputs

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 5) Connect the +3.3V power supply to the EV kit VDD pad and connect the ground of the +3.3V power supply to the EV kit top GND pad.
- 6) Set the electronic load in constant resistance mode at 100 Ω . Connect the electronic load positive terminal to the EV kit OUT1 pad. Connect the electronic load negative terminal to the EV kit left GND pad.
- 7) Connect the oscilloscope channel 1 to capture the INP1 signal (on the EV kit J1 connector).
- 8) Connect the oscilloscope channel 2 to capture the INN1 signal (on the EV kit J2 connector).
- 9) Connect the oscilloscope channel 3 to capture the OUT1 signal (on the EV kit OUT1 pad).
- 10) Set the data generator to generate two outputs. Each output has three pulses in every pulse repeating period, as shown in Figure 1. Set the pulse amplitude to +3.3V. Disable the outputs.
- 11) Connect the data generator output 1 to the INP1 logic  input  (on  the  EV  kit  J1  connector).  Connect the data generator output 2 to the INN1 logic input (on the EV kit J2 connector). Connect the ground of the data generator to the EV kit top GND pad.
- 12) Turn on the power supplies.
- 13) Enable the data generator outputs.
- 14) Verify that the signal on the OUT1 pad is similar to the waveform shown in Figure 2.

## MAX4810 Evaluation Kit

Figure 2. MAX4810 OUT1 Waveform

<!-- image -->

## Detailed Description of Hardware

The MAX4810 IC generates high-voltage/high-frequency unipolar or bipolar pulses from low-voltage logic inputs.  These dual pulsers feature independent logic inputs, independent high-voltage pulser outputs with active clamps, and independent high-voltage supply inputs.

The MAX4810 has three logic inputs per channel to control the positive and negative pulses and active clamp. Also included are two independent enable inputs. Disabling EN ensures that the output MOSFETs are not accidentally turned on during fast power-supply ramping. This allows for faster ramp times and smaller delays between pulsing modes. A low-power shutdown mode reduces power consumption. All digital inputs are CMOS compatible.

The MAX4810 EV kit has a total of nine logic input signals. SHDN controls power-up and down of the device. There are two sets of INP\_, INN\_, INC\_, and EN\_ signals with one for each channel. INP\_ controls the on and off states of the high-side FET, INN\_ controls the on and off states of the low-side FET, INC\_ controls the active clamp, and EN\_ controls the gate-to-source short. These signals give complete control of the output stage of each driver. See Table 1 for the EV kit jumper descriptions.

<!-- image -->

## Power Supplies

The MAX4810 high-side positive power supply is connected to the VPP1 pad or the VPP2 pad. The negative power supply is connected to the VNN1 pad or the VNN2 pad. Close JU12 to share VPP1 and VPP2. Close JU13 to share VNN1 and VNN2.

The MAX4810 gate drive positive power supply is connected to the VCC pad and the negative power supply is  connected to the VEE pad. Set the shunt on JU11 across pins 2-3 to provide the negative power supply through the on-board charge-pump voltage inverter, U2 (Maxim ICL7662). When the VCC input voltage is in the 4.5V to 10V range, place a shunt across JU16 pins 1-2. When VCC is above 10V, leave JU16 open.

The MAX4810 logic power supply is connected to the VDD pad.

The same power-supply connections can be made when evaluating the MAX4811 or MAX4812.

## INP\_ and INN\_ Logic Inputs

Refer to the MAX4810/MAX4811/MAX4812 IC data sheet for the logic input requirements. INP1 is connected to header J1, INN1 is connected to header J2, INP2 is  connected to header J3, and INN2 is connected to header J4.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4810 Evaluation Kit

## Table 1. MAX4810 EV Kit Jumper Descriptions

| JUMPER       | SHUNT POSITION   | DESCRIPTION                                    |
|--------------|------------------|------------------------------------------------|
| JU2 (INC1)   | 1-2*             | Channel 1 clamp turned on                      |
| JU2 (INC1)   | 2-3              | Channel 1 clamp turned off                     |
| JU4 (EN1)    | 1-2*             | Channel 1 output enabled                       |
| JU4 (EN1)    | 2-3              | Channel 1 output disabled                      |
| JU5 ( SHDN ) | 1-2*             | MAX4810 power-up                               |
| JU5 ( SHDN ) | 2-3              | MAX4810 power-down                             |
| JU6 (EN2)    | 1-2*             | Channel 2 output enabled                       |
| JU6 (EN2)    | 2-3              | Channel 2 output disabled                      |
| JU8 (INC2)   | 1-2*             | Channel 2 clamp turned on                      |
| JU8 (INC2)   | 2-3              | Channel 2 clamp turned off                     |
| JU10         | 1-2*             | Substrate voltage VSS connected to VNN1        |
| JU10         | 2-3              | Substrate voltage VSS connected to VNN2        |
| JU11         | 1-2              | VEE connected to the external power supply     |
| JU11         | 2-3*             | VEE generated by the on-board voltage inverter |
| JU12         | 1-2*             | VPP2 connected to VPP1                         |
| JU12         | Open             | VPP2 independent of VPP1                       |
| JU13         | 1-2*             | VNN2 connected to VNN1                         |
| JU13         | Open             | VNN2 independent of VNN1                       |
| JU14         | 1-2*             | OUT1 connected to the on-board weak load       |
| JU14         | Open             | OUT1 open                                      |
| JU15         | 1-2*             | OUT2 connected to the on-board weak load       |
| JU15         | Open             | OUT2 open                                      |
| JU16         | 1-2              | On-board voltage inverter input is below 10V   |
| JU16         | Open*            | On-board voltage inverter input is above 10V   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4810 Evaluation Kit

Figure 3. MAX4810 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX4810 Evaluation Kit

<!-- image -->

Figure 4. MAX4810 EV Kit Component Placement GuideComponent Side

Figure 5. MAX4810 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 6. MAX4810 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_