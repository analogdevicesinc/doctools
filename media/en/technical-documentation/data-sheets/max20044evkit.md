<!-- lastmod 2022-08-02 -->
## MAX20044F Evaluation Kit

## General Description

The  MAX20044F  evaluation  kit  (EV  kit)  circuit  demonstrates the MAX20044F automotive USB protector switch IC,  featuring  overvoltage  protection  (OVP),  electrostatic discharge  (ESD)  protection,  and  undervoltage  lockout (UVLO)/overcurrent  protection (OCP)  for automotive USB applications.

The IC protects the USB BUS, D+, and D- data lines from overvoltage  conditions,  such  as  a  short-to-battery  and ESD events. UVLO protects the BUS against low-voltage conditions such as a short-to-ground. The BUS OCP uses a blanking period allowing momentary BUS shorts to be ignored.  All  faults  can  be  monitored  using  the FAULT output signal.

The IC can pass high-speed USB differential (D+ and D-) signals  up  to  480Mbps  and  has  a  low  90mΩ  R ON(MAX) for  the  BUS  and  a  4Ω  R ON(TYP) )  for  the  D+  and  Dlines.  The  EV  kit  is  powered  by  the  USB  BUS.  An  onboard MAX15007A automotive regulator provides the IN reference voltage. The MAX20044F EV kit can also evaluate  the  MAX20042F  and  MAX20043F  after  IC  replacement of U1.

## Features

- Protects USB BUS, D+, and D- Signals from Overvoltages Up to 18V and ESD Events
- USB BUS Undervoltage Lockout
- 1.3A (typ) USB BUS Overcurrent-Protection Threshold
- 1ms Overcurrent Blanking Time
- Passes 480Mbps USB Data Signals
- Low On-Resistance
- BUS: 0.14mΩ (max)
- D+ and D-: 4Ω (typ)
- FAULT Output Signal
- USB Powered
- Fully Assembled and Tested
- Evaluates the MAX20042F, MAX20043F, and MAX20044F ICs in a 16-Pin QSOP Package

Evaluates: MAX20042F/

MAX20043F/MAX20044F

## Quick Start

## Required Equipment

- MAX20044F EV kit
- 5V, 2A DC power supply (supply A)
- 18V, 2A DC power supply (supply B)
- Logic function generator
- Oscilloscope

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn on the power supplies until all connections are completed .

- 1) Verify that shunts are installed as follows:
- JU1: Pins 1-2 (MAX20044F switches disabled)
- JU2:  Pins  1-2  (IN  connected  to  on-board  3.3V reference)
- 2) Set the supply A output to 5V, the supply B output to 18V, and disable both outputs.
- 3) Set  the  logic  function  generator  as  follows:  3V P-P , 1.5V DC offset square wave, 500kHz, and disable the output.
- 4) Connect the supply A positive output to the red BUS test point on the EV kit and connect the supply ground to the nearby black GND test point.
- 5) Connect the supply B ground to the GND test point close to the HVBUS test point on the EV kit. Connect a voltage probe test lead to the supply B positive output for later use.
- 6) Connect  the  logic  function  generator  output  to  the white  D+  test  point  and  the  ground  to  the  black SHIELD test point.
- 7) Enable both power-supply outputs.
- 8) Enable the function generator output.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX20044F Evaluation Kit

- 9) Install a shunt on jumper JU1, pins 2-3 (MAX20044F switches enabled).
- 10) Use the oscilloscope to probe the HVBUS and HVD+ test points.
- 11) Verify  that  HVBUS  is  5V  and  that  the  waveform  on HVD+ is a 500kHz square wave and is approximately 3VP-P .
- 12) Momentarily touch the HVBUS test point on the EV kit with the voltage probe from the supply B positive output.  The FAULT signal  asserts  a  logic-low  while the fault is present.

## Detailed Description of Hardware

The MAX20044F  EV  kit circuit demonstrates the MAX20044F    automotive  USB  protector  switch  IC, featuring  OVP,  ESD  protection,  UVLO  protection,  and OCP for automotive USB applications.

The IC protects the USB BUS, D+, and D- data lines from overvoltage conditions,  such  as  a  short-to-battery  up  to 18V and ESD events up to 15kV (air) and 8kV (contact). The  OVP  feature  protects  the  D+  and  D-  lines  against high-voltage  conditions  such  as  a  short-to-BUS.  The UVLO feature protects the BUS line against low-voltage conditions  such  as  a  short-to-ground.  The  BUS  OCP threshold  is  fixed  at  1.3A  (typ).  A  1ms  blanking  period allows  momentary  BUS  shorts  to  be  ignored,  such  as those created by hot-swapping a capacitive load. All faults can be monitored using the FAULT PCB pad, pulled up to IN through resistor R1.

The IC can pass high-speed USB differential (D+ and D-) signals up to 480Mbps, and has a low 90mΩ R ON(MAX) for  BUS  and  a  4Ω  R ON(TYP)   for  the  D+  and  D-  data lines. The EV kit is powered by the USB BUS. The 3.3V automotive regulator (U2, MAX15007A) provides an onboard IN reference voltage. A user can provide a 3V to 3.6V IN reference voltage across the VIN and GND PCB pads.  The  MAX20044F  (U1)  IC's  automotive  operating temperature range is from -40°C to 105°C.

## Table 1. MAX20044F Enable (JU1)

| SHUNT POSITION   | EN PIN                  | MAX20044F SWITCHES       |
|------------------|-------------------------|--------------------------|
| 1-2              | Connected to IN         | Disabled                 |
| 2-3              | Connected to GND        | Enabled                  |
| Not installed    | Connected to EN PCB pad | EN externally controlled |

## Evaluates: MAX20042F/ MAX20043F/MAX20044F

Long  USB  wire  lengths  contribute  to  increased  wiring inductance,  resulting  in  slow  di/dt  and  dV/dt  during  a 'short to 18V' event. The IC includes internal circuitry that switches  off  the  switch  between  the  HVBUS  and  BUS during an overvoltage on the HVBUS for these long USB wire  conditions.  Energy  stored  in  the  wiring  inductance can  cause  the  HVBUS  node  to  quickly  increase.  Zener diode  D1  clamps  this  flyback  voltage,  absorbing  the energy in wiring inductance.

## Jumper Settings

## Bus and Data Switch Enable (JU1)

Jumper  JU1  on  the  EV  kit  enables  the  IC's  BUS  and data switches. PCB pads EN and  GND are provided to control  U1's  enable  signal  with  an  external  controller. Refer  to  the Electrical  Characteristics EN Input section in the MAX20042F-MAX20044F IC data sheet for proper EN logic  levels  when  using  an  external  controller.  See Table 1 for proper JU1 jumper settings.

## IN Reference Voltage Selection (JU2)

Jumper JU2 on the EV kit selects the reference voltage for the IC's IN pin. IN can either be supplied by the USB BUS through the on-board automotive 3.3V regulator (U2, MAX15007A),  or  by  a  user-supplied  reference  voltage. PCB pads VIN and GND are provided to supply the IC with an external 3V to 3.6V reference voltage. See Table 2 for proper JU2 jumper settings.

## Evaluating the MAX20042F and MAX20043F

The MAX20044F EV kit can also evaluate the MAX20042F and  MAX20043F.  Remove  the  MAX20044F  (U1)  and replace it with the desired device. The MAX20042F and MAX20043F  are  pin  compatible  with  the  MAX20044F. Refer to the MAX20042F-MAX20044F IC data sheet for additional information.

## Optional Common-Mode Choke

PCB  pads  are  provided  on  the  EV  kit  for  an  optional common-mode choke (L1). Cut the traces shorting L1's PCB pads before installing a choke.

## Table 2. MAX20044F IN Reference Voltage Selection (JU2)

| SHUNT POSITION   | IN PIN                                   | EV KIT FUNCTION                   |
|------------------|------------------------------------------|-----------------------------------|
| 1-2              | Connected to the on-board 3.3V regulator | On-board reference provided by U2 |
| 2-3              | Connected to the VIN PCB pad             | External 3V to 3.6V reference     |

## MAX20044F Evaluation Kit

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                 |
|---------------|-------|-----------------------------------------------------------------------------|
| C1            |     1 | 0.1μF ±10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E104K          |
| C2            |     0 | Not installed, ceramic capacitor                                            |
| C3, C4        |     2 | 3.3μF ±10%, 16V X7R ceramic capacitors (0805) Murata GRM21BR71C335K         |
| C5, C7        |     2 | 0.1μF ±10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K         |
| C6            |     1 | 10μF ±20%, 25V X7R ceramic capacitor (0805) Murata GRM219R61E106KA12D       |
| C8            |     1 | 100μF ±20%, 6.3V X7S ceramic capacitor (1210) Murata GRM32EC80J107M         |
| C9            |     1 | 10μF ±20%, 25V X7R ceramic capacitor (1210) TDK C3225X7R1E106M              |
| C14, C15      |     2 | 6pF ±0.1pF, 50V C0G NP0 ceramic capacitors (0402) Murata GRM1555C1H6R0BZ01D |
| C16, C17      |     2 | 2pF ±0.1pF, 50V C0G NP0 ceramic capacitors (0402) Murata GRM1555C1H2R0BZ01D |

Evaluates: MAX20042F/

MAX20043F/MAX20044F

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| D1            |     1 | 20V, 500mW zener diode (SOD123) Fairchild MMSZ5250B        |
| GND1, GND2    |     2 | Black multipurpose test points Keystone 5011               |
| HVBUS, BUS    |     2 | Red multipurpose test points Keystone 5010                 |
| J1, J2        |     2 | USB type-A receptacles Assmann AU-Y1006-R                  |
| JU1, JU2      |     2 | 3-pin headers, 2.54mm Sullins PEC36SAAN                    |
| L1            |     1 | Optional common-mode choke                                 |
| L4, L5        |     2 | 12nH inductors Murata LQW15AN12NJ00D                       |
| L6, L7        |     2 | 4.7nH inductors Murata LQW15AN4N7D00D                      |
| R1, R2        |     2 | 100kΩ ±5% resistors (0603)                                 |
| U1            |     1 | USB automotive protector (16 QSOP) Maxim MAX20044FEGEEA/V+ |
| U2            |     1 | 3.3V automotive regulator (8 SO-EP*) Maxim MAX15007AASA+   |
| -             |     2 | Shunts Kycon SX1100-B                                      |
| -             |     1 | PCB: MAX20044 EVALUATION KIT#                              |

/V denotes an automotive qualified part.

+Denotes a lead(Pb)-free/RoHS-compliant package.

*EP = Exposed pad.

Figure 1. MAX20044F EV Kit Schematic

<!-- image -->

<!-- image -->

Figure 2. MAX20044F EV Kit-Component Side

Figure 3. MAX20044F EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX20044F EV Kit PCB Layout-Layer 2

<!-- image -->

Figure 5. MAX20044F EV Kit PCB Layout-Layer 3

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

| PART           | TYPE   |
|----------------|--------|
| MAX20044EVKIT# | EV Kit |

Evaluates: MAX20042F/

Figure 6. MAX20044F EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX20044F Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                       | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 7/15            | Initial release                                                                                   | -               |
|                 1 | 12/16           | Changed part numbers from MAX20042, MAX20043, and MAX20044 to MAX20042F, MAX20043F, and MAX20044F | 1-7             |
|                 2 | 2/17            | Changed ordering part number in Ordering Information from MAX20044FEVKIT# to MAX20044EVKIT#       | 6               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX20042F/

MAX20043F/MAX20044F