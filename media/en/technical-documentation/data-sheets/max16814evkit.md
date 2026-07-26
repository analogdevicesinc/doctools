<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX16814 Evaluation Kit

## General Description

## Features

The  MAX16814  evaluation  kit  (EV  kit)  demonstrates the  MAX16814  high-brightness  LED  (HB  LED)  driver, integrating a step-up DC-DC preregulator followed by 4 channels of linear current sinks. The step-up preregulator switches at 350kHz and operates as a current-modecontrolled regulator capable of providing up to 600mA for the linear circuits. Each of the 4 linear channels can operate up to 40V and provide up to 150mA per channel. The 4 channels are configurable  for  100mA  or  150mA HB LED output current. The IC is a 20-pin TSSOP package with an exposed pad for enhanced thermal power dissipation.

The EV kit  operates  from  a  DC  supply  voltage  of  6.5V up to the HB LED string forward voltage. The EV kit can withstand  a  40V  load-dump  condition.  The  EV  kit  also demonstrates the IC features such as adaptive voltage optimization, undervoltage lockout (UVLO), overvoltage protection  (OVP),  cycle-by-cycle  current  limit,  thermal shutdown, and digital PWM dimming operation using a digital PWM input signal to control the brightness of the HB LEDs. The EV kit also demonstrates a reference IC design for automotive applications.

- S Input Voltage from 6.5V Up to HB LED Forward Voltage
- S Demonstrates OVP (33V)
- S HB LED String Output Currents Configurable for 100mA or 150mA
- S Demonstrates UVLO (5V)
- S Demonstrates Open and Short LED Fault Protection and Detection
- S Demonstrates Cycle-by-Cycle Current Limit and Thermal-Shutdown Features
- S Demonstrates Adaptive Voltage Optimization
- S Proven PCB and Thermal Design
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16814EVKIT+ | EV Kit |

## Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                            |
|-----------------|-------|------------------------------------------------------------------------|
| C1              |     1 | 10 F F, 50V electrolytic capacitor (6.3mm x 6mm case) SANYO 50CE10KX   |
| C2              |     1 | 47 F F, 50V electrolytic capacitor (6.3mm x 7.7mm case) SANYO 50CE47KX |
| C3, C4, C7, C12 |     4 | 1 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GRM21BR71H105K   |
| C5              |     1 | 33 F F, 50V electrolytic capacitor (6.3mm x 7.7mm case) SANYO 50CE33KX |
| C6              |     0 | Not installed, electrolytic capaci- tor (6.3mm x 7.7mm case)           |
| C8, C13-C16     |     0 | Not installed, ceramic capacitors (0603)                               |
| C9              |     1 | 1000pF Q 5%, 25V C0G ceramic capacitor (0603) Murata GRM1885C1E102J    |

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| C10           |     1 | 0.022 F F Q 5%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H223K     |
| C11           |     1 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H104K      |
| C17           |     1 | 47pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H470J          |
| C18-C21       |     4 | 2200pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H222J       |
| D1            |     1 | 60V, 1A Schottky diode (SMB) Diodes, Inc. B160B-13-F                       |
| D2            |     1 | 75V, 250mA high-speed diode (SOT23) Central Semi CMPD914E (Top Mark: C5DE) |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16814 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| JU1, JU3-JU11 |    10 | 2-pin headers                                                   |
| JU2           |     1 | 3-pin header                                                    |
| L1            |     1 | 10 F H Q 20%, 3A inductor Coilcraft MSS1048-103ML               |
| L2            |     1 | 22 F H Q 20%, 5A inductor Coilcraft MSS1260-223Ml               |
| N1            |     1 | 40V, 9A n-channel MOSFET (8 SO) International Rectifier IRF7469 |
| R1            |     1 | 33.2k I Q 1% resistor (0805)                                    |
| R2, R7        |     2 | 10k I Q 1% resistors (0805)                                     |
| R3            |     1 | 22 I Q 5% resistor (0805)                                       |
| R4            |     1 | 0.100 I Q 1%, 0.5W resistor (2010) IRC LRC-LRF2010LF-01-R100-F  |
| R5            |     1 | 2.4k I Q 1% resistor (0805)                                     |
| R6            |     1 | 261k I Q 1% resistor (0805)                                     |

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| R8, R9        |     2 | 10k I Q 5% resistors (0805)                                          |
| R10, R16      |     2 | 30.1k I Q 1% resistors (0805)                                        |
| R11           |     1 | 20k I Q 1% resistor (0805)                                           |
| R12           |     1 | 200 I Q 1% resistor (0603)                                           |
| R13           |     1 | 21k I Q 1% resistor (0603)                                           |
| R14           |     1 | 4.7 I Q 5% resistor (0805)                                           |
| R15           |     1 | 15k I Q 1% resistor (0805)                                           |
| R17           |     0 | Not installed, resistor (0603)                                       |
| SGND          |     1 | PC miniature test point, black                                       |
| U1            |     1 | 4-channel HB LED driver controller (20 TSSOP-EP*) Maxim MAX16814AUP+ |
| VCC           |     1 | PC miniature test point, red                                         |
| -             |     7 | Shunts (JU1-JU7)                                                     |
| -             |     1 | PCB: MAX16814 EVALUATION KIT+                                        |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Diodes, Inc.                           | 805-446-4800 | www.diodes.com              |
| International Rectifier                | 310-322-3331 | www.irf.com                 |
| IRC, Inc.                              | 361-992-7900 | www.irctt.com               |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |

Note:

Indicate that you are using the MAX16814 EV kit when contacting these component suppliers.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16814 Evaluation Kit

## Quick Start

## Detailed Description of Hardware

## Required Equipment

- MAX16814 EV kit
- 6.5V to 40V, 4A DC power supply
- One digital voltmeter
- Four series-connected HB LED strings rated no less than 150mA
- A current probe to measure the HB LED current

## Output Testing

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Verify that a shunt is installed on jumper JU1 and on pins 1-2 of jumper JU2 (enabled).
- 2) Verify  that  a  shunt  is  installed  on  jumper  JU3 (150mA).
- 3) Verify  that  shunts  are  not  installed  on  jumpers JU4-JU7 (all channels powered).
- 4) Connect the power supply to the VIN pad and the power supply's ground to the PGND PCB pad.
- 5) Connect the digital voltmeter across the OUT1 and PGND PCB pads.
- 6) Connect each HB LED string as follows:

Channel 1: Connect an HB LED string anode to the VOUT PCB pad and the cathode to the OUT1 PCB pad.

Channel 2: Connect an HB LED string anode to the VOUT PCB pad and the cathode to the OUT2 PCB pad.

Channel 3: Connect an HB LED string anode to the VOUT PCB pad and the cathode to the OUT3 PCB pad.

Channel 4: Connect an HB LED string anode to the VOUT PCB pad and the cathode to the OUT4 PCB pad.

- 7) Clip the current probe across the channel 1 HB LED wire to measure the HB LED current.
- 8) Turn on the power supply and set it to 10V.
- 9) Measure  the  voltage  from  the  OUT1-OUT4  PCB pads to PGND and verify that the lowest voltage is approximately 1V.
- 10)  Measure  the  HB  LED  current  using  the  current probe and verify all channels.

<!-- image -->

The MAX16814 EV kit demonstrates the MAX16814 HB LED driver with an integrated step-up DC-DC preregulator  followed  by  4  channels  of  linear  current  sinks.  The preregulator  switches  at  350kHz  and  operates  as  a current-mode-controlled regulator providing up to 600mA for the linear circuit while providing OVP. Cycle-by-cycle current limit  is  set  by  resistor  R4  and  resistors  R6  and R7 set the OVP voltage to 33V. The preregulator power section  consists  of  inductor  L2,  MOSFET  N1,  powersense resistor R4, and switching diode D1.

The  EV  kit  circuit  operates  from  a  DC  supply  voltage of  6.5V  up  to  the  HB  LED  forward  string  voltage.  The circuit  handles  load-dump  conditions  up  to  40V.  Bulk capacitors C1, C2 and inductor L1 provide EMI filtering on the VIN power line. The IN power UVLO is set to 5.5V by resistors R1 and R2. The IC, in a 20-pin TSSOP package with an exposed pad, provides enhanced thermal power dissipation on a proven 1oz copper PCB design.

Each of the 4 linear channels (OUT1-OUT4) can operate up to 40V and sink up to 150mA per channel. Each of  the  4  channel's linear current sinks are configurable for  150mA  or  100mA,  or  can  be  disabled  independently.  Jumpers  JU4-JU7  provide  the  disable  feature when  the  HB  LED  string  is  not  connected.  See  the Channel  1-Channel  4  Current-Sink  Disabling section. Resistors R15, R16 and jumper JU3 configure the linear current setting for the IC SETI pin, which sets the HB LED string current.

The  EV  kit  features  PCB  pads  to  facilitate  connecting  HB  LED  strings  for  evaluation.  The  VOUT  PCB pads  provide  connections  for  connecting  each  HB LED  string's  anode  to  the  DC-DC  preregulator  output. The  OUT1-OUT4  PCB  pads  provide  connections  for connecting  each  HB  LED  string's  cathode  to  the respective  linear  channel's  current  sink.  Additionally, 2-pin  headers  JU8-JU11  provide  convenient  access to  the  VOUT  and  respective  OUT\_  connections  when using a twisted-pair wiring-connection scheme. On each header, pin 1 provides access to the respective OUT\_ connection  and  pin  2  provides  access  to  the  VOUT connection.  Capacitors  C18-C21  are  included  on  the design to prevent oscillations and provide stability when using long, untwisted HB LED connecting cables during lab evaluation. These capacitors are not required on a typical HB LED design.

A  DIM  PCB  pad  is  provided  for  using  a  digital  PWM signal to control the brightness of the HB LEDs. The EV kit can also demonstrate the IC's synchronizing feature

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX16814 Evaluation Kit

using  the  SYNC  PCB  pad  and  an  external  AC  clock signal. Test points are provided for easy access to IC's VCC and SGND.

## Enable and UVLO

The  EV  kit  features  two  jumpers  to  enable/disable  U1 and configure the UVLO. Jumper JU1 enables the EV kit when a shunt is installed and a shunt is also installed on pins 1-2 of jumper JU2. Removing jumper JU1 disables the  EV  kit.  Configuring  jumper  JU2  to  pins  2-3  allows an external controller to enable the circuit and also disables UVLO resistors R1 and R2. Connect the external controller to the ENABLE and SGND PCB pads. Refer to the Enable section  in  the  MAX16814  IC  data  sheet  for additional information. See Table 1 for jumper JU1 and JU2 settings.

## HB LED Current

The EV kit features a jumper to reconfigure the IC current sinks on all 4 channels. When inserted, jumper JU3 configures  the  current-sink  limits  to  150mA,  and  removing the jumper configures the current-sink limits to 100mA. See Table 2 for jumper JU3 settings.

Table 1. Enable and UVLO (JU1, JU2)

| SHUNT POSITION   | SHUNT POSITION   | EN PIN                              | EV KIT OPERATION                                |
|------------------|------------------|-------------------------------------|-------------------------------------------------|
| JU1              | JU2              | EN PIN                              | EV KIT OPERATION                                |
| Installed        | 1-2              | Connected to UVLO R1 and R2 divider | Enabled (UVLO operating)                        |
| Not installed    | 1-2              | Connected to UVLO R1 and R2 divider | Disabled                                        |
| Not installed    | 2-3              | Connected to ENABLE PCB pad         | External controller enabled (no on- board UVLO) |

Table 2. HB LED Current (JU3)

| SHUNT POSITION   | SETI PIN                 |   HB LED CURRENT-SINK LIMITS (mA) |
|------------------|--------------------------|-----------------------------------|
| Not installed    | Connected to R15         |                               100 |
| Installed        | Connected to R15 and R16 |                               150 |

To reconfigure the circuit for another current-sink threshold,  replace  resistor  R15  and  use  the  following equation to calculate a new value for the desired current:

<!-- formula-not-decoded -->

where ILED is the desired HB LED current in amps and R15 is the new resistor value for obtaining the desired HB LED current. Remove jumper JU3 when configuring for another current-sink level.

Channel 1-Channel 4 Current-Sink Disabling The EV kit  features  jumpers  to  disable  each  channel's OUT\_  current  sink.  When  disabling  a  channel,  install a  jumper  in  the  channel's  respective  OUT\_  jumper. Remove the shunt to use a channel's OUT\_ sink capability. See Table 3 for jumper JU4-JU7 settings.

## Table 3. Disabling Channel 1-Channel 4 (JU4-JU7)

| OUT_   | JUMPER   | SHUNT POSITION   | CHANNEL OPERATION                                                 |
|--------|----------|------------------|-------------------------------------------------------------------|
| OUT1   | JU4      | Not installed    | Channel 1 operational, connect an HB LED string* to VOUT and OUT1 |
| OUT1   | JU4      | Installed        | Channel 1 OUT1 not used                                           |
| OUT2   | JU5      | Not installed    | Channel 2 operational, connect an HB LED string* to VOUT and OUT2 |
| OUT2   | JU5      | Installed        | Channel 2 OUT2 not used                                           |
| OUT3   | JU6      | Not installed    | Channel 3 operational, connect an HB LED string* to VOUT and OUT3 |
| OUT3   | JU6      | Installed        | Channel 3 OUT3 not used                                           |
| OUT4   | JU7      | Not installed    | Channel 4 operational, connect an HB LED string* to VOUT and OUT4 |
| OUT4   | JU7      | Installed        | Channel 4 OUT4 not used                                           |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16814 Evaluation Kit

## Additional Configurations and Features

The  EV  kit  includes  several  other  features  to  facilitate evaluation  of  the  IC.  HB  LED  digital  dimming  control, fault management through a FLT signal, synchronizing to an external clock using the RT signal, and reconfiguring the OVP for other voltages are detailed in the following sections.

## HB LED Digital-Dimming Control

The EV kit features a DIM PCB input pad for connecting  an  external  digital  PWM  signal.  The  DIM  PCB  pad is pulled up to VCC by resistor R8. Apply a digital PWM signal with a 0.8V logic-low (or less) and a 2.1V logichigh  (or  greater)  level,  and  frequencies  from  100Hz  to 20kHz. To adjust the HB LED brightness, vary the signal duty cycle from 0 to 100% and maintain a minimum pulse width  of  1 F s.  Apply  the  digital  PWM  signal  to  the  DIM and SGND PCB pads. Refer to the LED Dimming Control section  in  the  MAX16814  IC  data  sheet  for  additional information on the MAX16814 dimming feature.

## FLT and RT (External Clock Synchronizing) Signals

The  EV  kit  features  the  IC's FLT and  AC-coupled  RT signals. The FLT signal is pulled up to VCC by resistor R9.  The FLT signal  is  pulled  low  when  there  are  open or shorted HB LED(s) on an OUT\_ channel or a thermal shutdown  condition  has  occurred.  Refer  to  the Fault Protections section  in  the  MAX16814 IC data sheet for further information on the FLT signal.

<!-- image -->

The SYNC  PCB  pad  is  used for connecting an external  clock  for  synchronizing  the  IC  switching  frequency  through  its  RT  pin.  The  signal  must  also  have a  4VP-P  amplitude  and  frequencies  from  390kHz  to 410kHz.  Apply  the  external  clock  signal  to  the  SYNC and SGND PCB pads. Refer to the Oscillator Frequency/ External  Synchronization section  in  the  MAX16814  IC data sheet for additional information on the MAX16814 synchronizing feature.

## OVP Configuration

The IC OVP resistors (R6 and R7) are configured for an OVP  of  33V.  This  sets  the  maximum  channel  (VOUT) voltage at 33V. Capacitor C9 provides noise filtering to the OVP signal. To reconfigure the circuit for a different OVP voltage, replace resistor R6 with a different value using the following equation:

<!-- formula-not-decoded -->

where  R7  is  10k I ,  OVP  is  the  overvoltage  protection voltage  desired,  and  R6  is  the  new  resistor  value  for obtaining  the  desired  overvoltage  protection.  Refer  to the Open-LED Management and Overvoltage Protection section  in  the  MAX16814  IC  data  sheet  for  additional information on the OVP feature.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX16814 Evaluation Kit

Figure 1. MAX16814 EV Kit Schematic

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16814 Evaluation Kit

<!-- image -->

Figure 2. MAX16814 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX16814 Evaluation Kit

Figure 3. MAX16814 EV Kit PCB Layout-Component Side

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16814 Evaluation Kit

Figure 4. MAX16814 EV Kit PCB Layout-SGND Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX16814 Evaluation Kit

Figure 5. MAX16814 EV Kit PCB Layout-PGND Layer 3

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16814 Evaluation Kit

<!-- image -->

Figure 6. MAX16814 EV Kit PCB Layout-VCC and PGND Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX16814 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------|-----------------|
|                 0 | 9/09            | Initial release                            | -               |
|                 1 | 5/10            | Updated R12 in Component List and Figure 1 | 2, 6            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600