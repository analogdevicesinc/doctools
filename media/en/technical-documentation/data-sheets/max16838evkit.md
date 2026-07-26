<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX16838 Evaluation Kit

## General Description

## Features

The MAX16838 evaluation kit (EV kit) demonstrates the MAX16838 high-brightness  LED  (HB  LED)  driver,  integrating  a  step-up  DC-DC preregulator followed by two channels of linear current sinks. The step-up preregulator switches at 500kHz and operates as a current-modecontrolled regulator capable of providing up to 300mA for the linear circuits. Each channel is capable of operating up to 33V and provides up to 150mA. The channels are configurable for 100mA or 150mA HB LED output current. The MAX16838 IC is available in a 20-pin TQFN package with an exposed pad for enhanced thermal power dissipation.

The MAX16838 EV kit operates from a DC supply voltage of 7V up to the HB LED string-forward voltage. The EV  kit  can  withstand  a  40V  load-dump  condition.  The EV kit also demonstrates the MAX16838 features, such as  adaptive  voltage  optimization,  undervoltage  lockout (UVLO),  overvoltage  protection  (OVP),  cycle-by-cycle current  limit,  thermal  shutdown,  and  digital  PWM  dimming operation using a digital PWM input signal to control the brightness of the HB LEDs.

- S Input Voltage from 7V Up to HB LED Forward Voltage
- S Demonstrates Overvoltage Protection (35.6V)
- S HB LED String Output Currents Configurable for 100mA or 150mA
- S Demonstrates UVLO (6.4V)
- S Demonstrates Cycle-by-Cycle Current Limit and Thermal Shutdown Features
- S Demonstrates Adaptive Output-Voltage Optimization
- S Configurable LED Current Foldback (VIN &lt; 6.5V)
- S Proven PCB and Thermal Design
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16838EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                     |
|---------------|-------|---------------------------------------------------------------------------------|
| C1            |     1 | 10 F F, 50V electrolytic capacitor (6.3mm x 6.0mm case) SANYO 50CE10KX          |
| C2            |     1 | 47 F F, 50V electrolytic capacitor (6.3mm x 7.7mm case) SANYO 50CE47KX          |
| C3, C6        |     2 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H104K          |
| C4, C5, C9    |     3 | 1 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K            |
| C7            |     1 | 47 F F, 50V electrolytic capacitor (6.3mm x 7.7mm case) Panasonic EEE-FK1H470XP |
| C8            |     1 | 33 F F, 50V electrolytic capacitor (6.3mm x 7.7mm case) SANYO 50CE33KX          |
| C10           |     1 | 1000pF Q 10%, 25V X7R ceramic capacitor (0805) Murata GRM216R71E102K            |

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| C11           |     1 | 0.22 F F Q 10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H224K     |
| C12, C13      |     0 | Not installed, ceramic capacitors (0603)                                   |
| C14           |     1 | 4700pF Q 5%, 50V C0G ceramic capacitor (0805) Murata GRM2165C2A472JA       |
| C15, C16      |     2 | 2200pF Q 5%, 50V C0G ceramic capacitors (0805) Murata GRM2165C2A222JA      |
| D1            |     1 | 40V, 3A Schottky diode (SMA) Diodes Inc. B340LA                            |
| D2            |     1 | 75V, 250mA high-speed diode (SOT23) Central Semi CMPD914E (Top Mark: C5DE) |
| JU1           |     1 | 3-pin header                                                               |
| JU2, JU3      |     2 | 2-pin headers                                                              |
| L1            |     1 | 10 F H Q 20%, 3.5A inductor Coilcraft MSS734-103ML                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16838 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| L2            |     1 | 33 F H Q 20%, 2.9A inductor Coilcraft MSS1246-333ML              |
| R1            |     1 | 169k I Q 1% resistor (0805) Use lead-free only                   |
| R2, R4        |     2 | 40.2k I Q 1% resistors (0805) Use lead-free only                 |
| R3            |     1 | 172k I Q 1% resistor (0805) Use lead-free only                   |
| R5, R6        |     2 | 2.2 I Q 5% resistors (0805) Use lead-free only                   |
| R7            |     1 | 0.12 I Q 1%, 1W sense resistor (2010) IRC LRC-LR2010LF-01-R120-F |
| R8            |     1 | 22.1k I Q 1% resistor (0805)                                     |
| R9            |     1 | 619k I Q 1% resistor (0805)                                      |

| DESIGNATION   |   QTY | DESCRIPTION                                              |
|---------------|-------|----------------------------------------------------------|
| R10           |     1 | 10k I Q 5% resistor (0805)                               |
| R11           |     1 | 11k I Q 5% resistor (0805)                               |
| R12           |     1 | 1.6k I Q 5% resistor (0805)                              |
| R13           |     1 | 15k I Q 1% resistor (0805)                               |
| R14           |     1 | 21k I Q 1% resistor (0805)                               |
| R15           |     1 | 30.1k I Q 1% resistor (0805)                             |
| SGND          |     1 | Black miniature PC test point                            |
| U1            |     1 | Dual-channel LED driver (20 TQFN-EP*) Maxim MAX16838ATP+ |
| VCC           |     1 | Red miniature PC test point                              |
| -             |     3 | Shunts (JU1, JU2, JU3)                                   |
| -             |     1 | PCB: MAX16838 EVALUATION KIT+                            |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |

Note: Indicate that you are using the MAX16838 when contacting these component suppliers.

## Quick Start

## Required Equipment

- MAX16838 EV kit
- 7V to 40V, 2A DC power supply
- Digital voltmeter
- Two series-connected HB LED strings rated no less than 150mA
- Current probe to measure the HB LED current

## Procedure

The  MAX16838  EV  kit  is  fully  assembled  and  tested.  Follow  the  steps  below  to  verify  board  operation. Caution: Do  not  turn  on  the  power  supply  until  all connections are completed.

- 1) Verify that a shunt is installed on pins 2-3 of jumper JU1 (enabled).
- 2) Verify that a shunt is installed on jumper JU2 (LED current = 150mA).
- 3) Verify  that  a  shunt  is  not  installed  on  jumper  JU3 (independent channel operation).
- 4) Connect the power supply to the VIN PCB pad and the power supply's ground to the PGND PCB pad.
- 5) Connect the digital voltmeter across the OUT1 and PGND PCB pads.
- 6) Connect an HB LED string anode to the CH1 PCB pad and the cathode to the OUT1 PCB pad.
- 7) Connect an HB LED string anode to the CH2 PCB pad and the cathode to the OUT2 PCB pad.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16838 Evaluation Kit

- 8) Clip the current probe across the channel 1 or channel 2 HB LED+ wire to measure the HB LED current.

tions for connecting each HB LED string's cathode to the respective linear channel's current sink.

- 9) Turn on the power supply and set it to 10V.
- 10)  Measure the voltage from the OUT1 and OUT2 PCB pads to PGND and verify that the lowest voltage is approximately 1V.
- 11)  Measure  the  HB  LED  current  using  the  current probe and verify both channels' operation.

## Detailed Description of Hardware

The MAX16838 EV kit demonstrates the MAX16838 HB LED driver with an integrated power MOSFET and stepup  DC-DC  preregulator  followed  by  two  channels  of linear current sinks. The preregulator switches at 500kHz and  operates  as  a  current-mode-controlled  regulator, providing up to 300mA for the linear circuit while providing OVP. Cycle-by-cycle peak current limit is set to 2.5A by  resistor  R7.  Resistors  R8  and  R9  set  the  OVP  voltage to 35.6V. The preregulator power section consists of  inductor  L2,  switching  diode  D1,  and  current-sense resistor R7.

The MAX16838 EV kit circuit operates from a DC supply voltage of 7V up to the HB LED string-forward voltage, providing  at  least  2A.  The  circuit  handles  load-dump conditions  up  to  40V.  Optional  bulk  capacitor  C1  and inductor L1 provide EMI filtering on the VIN power line. The VIN power UVLO is set to 6.4V by resistors R1 and R2. The LED current foldback threshold is set by resistors R3 and R4 and linearly drops the LED string current when  VIN  drops  below  6.5V.  The  MAX16838  IC,  in  a 20-pin  TQFN  package  with  an  exposed  pad,  provides enhanced  thermal  power  dissipation  on  a  proven  1oz copper PCB design.

Output  channels  OUT1  and  OUT2  are  capable  of operating  up  to  33V  and  sink  up  to  150mA  per  channel.  The  output  channels'  linear  current  sinks  are configurable for 150mA or 100mA. The EV kit is capable of  driving  higher  rated  LEDs  by  shorting  OUT1  and OUT2 (using jumper JU3), thus providing up to 300mA to  the  connected  LED  string.  Resistors  R13  and  R15 and jumper JU2 configure the linear current setting for the MAX16838 ISET pin, which sets the HB LED string current.

The  MAX16838  EV  kit  features  PCB  pads  to  facilitate connecting  HB  LED  strings  for  evaluation.  The  CH1 and CH2 PCB pads provide connections for connecting each HB LED string's anode to the DC-DC preregulator output. The OUT1 and OUT2 PCB pads provide connec- A DIM PCB pad is provided for using a digital PWM signal to control the brightness of the HB LEDs. Test points are  also  provided  for  easy  access  to  MAX16838  IC's VCC and SGND.

<!-- image -->

## Enable and UVLO

The  MAX16838  EV  kit  features  jumper  JU1,  which enables/disables U1 and configures the UVLO. Install a shunt across pins 1-2 to allow an external controller to enable the circuit. Connect the external controller to EN and SGND PCB pads. Install a shunt across pins 2-3 to enable the ULVO function. Refer to the Enable (EN) and Undervoltage Lockout sections in the MAX16838 IC data sheet for additional information. See Table 1 for jumper JU1 settings.

## HB LED Current

The MAX16838 EV kit features a jumper to reconfigure the  MAX16838  current  sinks  on  both  channels.  When inserted,  jumper  JU2  configures  the  current  sink  to 150mA; removing the jumper configures the current sink to 100mA. See Table 2 for jumper JU2 settings.

To reconfigure the circuit for another current-sink threshold, replace resistor R13 and use the following equation to calculate a new value for the desired current:

<!-- formula-not-decoded -->

Table 1. Enable and UVLO (JU1)

| SHUNT POSITION   | EN PIN                              | EV KIT OPERATION                               |
|------------------|-------------------------------------|------------------------------------------------|
| 1-2              | Connected to EN PCB pad             | External controller enabled (no on-board UVLO) |
| 2-3              | Connected to UVLO R1 and R2 divider | Enabled (UVLO operating)                       |

## Table 2. HB LED Current (JU2)

| SHUNT POSITION   | ISET PIN                 |   HB LED CURRENT SINK (mA) |
|------------------|--------------------------|----------------------------|
| Not installed    | Connected to R13         |                        100 |
| Installed        | Connected to R13 and R15 |                        150 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX16838 Evaluation Kit

where ILED is the desired HB LED current in amps and R13 is the new resistor value for obtaining the desired HB LED current. Remove jumper JU2 when configuring for another current-sink threshold.

## Evaluating Higher Rated LEDs

The MAX16838 EV kit is capable of driving higher rated LEDs  by  shorting  OUT1  and  OUT2  together  (using jumper  JU3),  thus  providing  200mA  to  300mA  to  the connected LED string. To operate the EV kit using higher rated LEDs:

- Connect the anode of the LED string to the CH1 or CH2 PCB pad and the cathode of the LED string to the OUT1 or OUT2 PCB pad
- Install a shunt at jumper JU3 to double the configured current sink

Remove the shunt at jumper JU3 to operate the channel's OUT1 and OUT2 sink capability independently. See Table 3 for jumper JU3 settings.

## Additional Configurations and Features

The MAX16838 EV kit includes several other features to facilitate evaluation of the MAX16838 IC. HB LED digital dimming control, fault management through a FLT signal, and reconfiguring the OVP are detailed in the following sections.

## HB LED Digital Dimming Control

The MAX16838 EV kit features a DIM PCB input pad for connecting an external digital PWM signal. The DIM PCB pad is pulled up to VCC by resistor R10. Apply a digital PWM signal with a 0.8V logic-low (or less) and a 2.1V logic-high (or greater) level and frequencies from 200Hz to 20kHz. To adjust the HB LED brightness, vary the signal duty cycle from 0 to 100% and maintain a minimum pulse width of 1 F s. Apply the digital PWM signal to the DIM and SGND PCB pads. Refer to the LED Dimming Control section in the MAX16838 IC data sheet for additional information on the MAX16838 dimming feature.

## FLT Signal and RT (External Clock Synchronizing) Signals

The MAX16838 EV kit features a FLT signal that is pulled up to VCC by resistor R11. The FLT signal is pulled low when there are open or shorted HB LED(s) on an OUT\_ channel or a MAX16838 IC thermal shutdown condition has  occurred.  Refer  to  the Fault  Protections section  in the  MAX16838 IC data sheet for further information on the FLT signal.

Table 3. Configuration for Higher Rated LEDs Current (JU3)

| SHUNT POSITION   | CHANNEL OPERATION                   |
|------------------|-------------------------------------|
| Not installed    | LED maximum current = 150mA/channel |
| Installed        | LED string maximum current = 300mA  |

Note: The series-connected HB LED string must be rated no less than 200mA.

The RT PCB pad is used for connecting an external clock for  synchronizing  the  MAX16838  switching  frequency through  its  RT  pin.  Refer  to  the Oscillator  Frequency/ External  Synchronization section  in  the  MAX16838  IC data sheet for additional information on the MAX16838 synchronizing feature.

## Overvoltage Protection (OVP) Configuration

The  MAX16838  OVP  resistors  (R8  and  R9)  are  configured  for  an  OVP  of  35.6V.  This  sets  the  maximum channel voltage at 35.6V. To reconfigure the circuit for a different OVP voltage, replace resistor R9 with a different value using the following equation:

<!-- formula-not-decoded -->

where  R8  is  22.1k I ,  OVP  is  the  desired  overvoltage protection voltage and R9 is the new resistor value for obtaining  the  desired  overvoltage  protection.  Refer  to the Open-LED Management and Overvoltage Protection section  in  the  MAX16838  IC  data  sheet  for  additional information on the overvoltage feature.

## LED Current-Foldback Threshold

Resistors R3 and R4 set the MAX16838 IC LED current foldback when VIN falls below 6.5V (the MAX16838 CFB pin  falls  below  its  1.23V  threshold).  As  VIN  falls  below 6.5V,  the  LED  current  decreases  proportionally  to  the voltage at the MAX16838 CFB pin. Refer to the Current Foldback section  in  the  MAX16838  IC  data  sheet  for additional information.

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16838 Evaluation Kit

Figure 1. MAX16838 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX16838 Evaluation Kit

<!-- image -->

Figure 2. MAX16838 EV Kit Component Placement GuideComponent Side

Figure 3. MAX16838 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX16838 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

6

<!-- image -->