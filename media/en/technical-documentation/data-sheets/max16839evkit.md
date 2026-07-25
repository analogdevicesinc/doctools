<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX16839 Evaluation Kit

## General Description

## Features

The  MAX16839  evaluation  kit  (EV  kit)  demonstrates three separate high-voltage, single-channel, linear highbrightness LED (HB LED) drivers using the MAX16839 IC. This EV kit is configured to supply an HB LED current of  100mA per channel and operates from a 5V to 40V rated power supply providing up to 300mA. The EV kit can  withstand  a  45V  automotive  load-dump  condition. An  input  switch  is  included  to  evaluate  pulse-widthmodulation (PWM) driving with supply chopping.

The  EV  kit  eases  evaluation  of  the  MAX16839  PWM dimming-control  feature  by  providing  three  independent PWM inputs to all three channels. Each PWM input accepts a digital signal up to 10kHz. Additionally, multiple EV kits can be cascaded by using the MAX16839 FLTS  signals.  An  input  common-mode  choke  is  also provided to facilitate EMI immunity testing.

- S Three Independent Channels for Driving High-Brightness LEDs
- S 100mA LED Current per Channel
- S Three Independent PWM Inputs
- S PWM Dimming Control Up to 10kHz
- S Operates from a 5V to 40V Supply
- S Supply Input Chopper Circuit
- S Capability for Cascading Multiple Kits
- S Proven PCB and Thermal Design
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16839EVKIT+ | EV Kit |

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C1            |     1 | 1 F F Q 10%, 50V X7R ceramic capacitor (0805) Murata GRM21BR71H105K                |
| C2, C3, C4    |     3 | 0.022 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GRM216R71H223K           |
| C5, C6, C7    |     3 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0805) Murata GCM21BR71H104K             |
| D1            |     1 | 60V, 1A Schottky diode (SMA) Central Semi CMSH1-60M LEAD FREE (Top Mark: CS60M)    |
| D2            |     1 | 15V Q 5%, 250mW zener diode (SOD523) Central Semi CMOZ15V LEAD FREE (Top Mark: H0) |
| JU1, JU2, JU3 |     3 | 3-pin headers                                                                      |
| JU4-JU11      |     8 | 2-pin headers                                                                      |
| L1            |     1 | 80V, 500mA common-mode choke TDK ZJYS81R5-2P24-G01                                 |

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                   |
|---------------|-------|---------------------------------------------------------------------------------------------------------------|
| P1            |     1 | 60V 1.25A p-channel MOSFET (SOT23) Fairchild FDN5618P (Top Mark: 618)                                         |
| Q1            |     1 | 65V 100mA npn transistor (SOT23) Central Semi BC846A TR (Top Mark: 1A) or Fairchild BC846AMTF (Top Mark: 8AA) |
| R1, R3, R5    |     3 | 4.12 I Q 1% resistors (0603)                                                                                  |
| R2, R4, R6    |     3 | 2.05 I Q 1% resistors (0603)                                                                                  |
| R7, R9, R10   |     3 | 10k I Q 5% resistors (1206)                                                                                   |
| R8            |     1 | 2.2k I Q 5% resistor (2010)                                                                                   |
| U1, U2, U3    |     3 | Programmable LED current regulators (6 TDFN-EP*) Maxim MAX16839ATT+ (Pkg. Code: T633+2)                       |
| -             |    11 | Shunts (JU1-JU11)                                                                                             |
| -             |     1 | PCB: MAX16839 EVALUATION KIT+                                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16839 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.            | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note: Indicate that you are using the MAX16839 when contacting these component suppliers.

## Quick Start

## Required Equipment

- 5V to 40V, 500mA adjustable DC power supply
- Three  series-connected  HB  LED  strings  rated  no less  than  100mA  and  a  maximum  forward  voltage of 39V
- See  the LED  Load  Configuration section  for  more information

## Procedure

The  MAX16839  EV  kit  is  fully  assembled  and  tested. Follow  these  steps  to  verify  board  operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Verify that shunts are installed on pins 1-2 of jumpers JU1, JU2, and JU3 (100mA operation).
- 2)  Verify  that  shunts  are  not  installed  on  jumpers JU4-JU10 (independent operation).
- 3)  Verify  that  a  shunt  is  installed  on  jumper  JU11 (bypass chopper circuit).
- 4)  Set the power-supply output to 12V and disable the output.  If  the  total  forward  voltage  of  the  HB  LED string is &gt; 6.5V, ensure that the input supply rises in less than 14 F s, or connect the FLTS output to ground to disable the turn-off in case of fault feature. The IC can otherwise latch in fault condition at startup.
- 5)  Connect the power-supply ground to the PGND PCB pad.
- 6)  Connect the power-supply positive output to the VIN PCB pad.
- 7)  Connect each HB LED string as follows:

Channel 1: Connect an HB LED string anode to the LED1+ PCB pad and the cathode to the LED1PCB pad.

Channel 2: Connect an HB LED string anode to the LED2+ PCB pad and the cathode to the LED2PCB pad.

Channel 3: Connect an HB LED string anode to the LED3+ PCB pad and the cathode to the LED3PCB pad.

- 8)  Enable the power-supply output.
- 9)  Verify that the attached LEDs are illuminated.

## Detailed Description of Hardware

The MAX16839 EV kit demonstrates three separate highvoltage, single-channel, linear HB LED drivers. Each linear current driver circuit uses a MAX16839 IC in a 6-pin TDFN  surface-mount  package  with  an  exposed  pad for  enhanced  thermal  dissipation.  On  the  EV  kit,  each driver  circuit  is  configured  to  supply  an  HB  LED  current of 100mA per channel at 5% current accuracy. The MAX16839 ICs control the HB LED current by maintaining a 203mV (typ) drop across each channel's external sense  resistors  (R1  or  R2  for  channel  1,  R3  or  R4  for channel  2,  and  R5  or  R6  for  channel  3).  Additionally, each channel can be reconfigured to provide down to 50mA of current.

The EV kit operates from a 5V to 40V rated power supply  providing  up  to  300mA  and  the  EV  kit  can  withstand  a  45V  load-dump  condition.  The  input  supply  is filtered  by  common-mode choke L1 and capacitor C1, while  battery-reverse  protection  is  provided  by  diode D1.  The  input  supply  chopper  circuit  is  comprised  of p-channel  MOSFET  P1,  biasing  resistor/diode  pair  R7/ D2, and switching transistor Q1. See the Chopper-Circuit Operation section  for  more  information  on  using  the chopper circuit.

The  MAX16839  PWM  dimming-control  feature  can  be evaluated  with  an  independent  PWM  input  on  each  of the  three  channels.  Each  PWM  input  accepts  a  digital signal  up  to  10kHz  at  the  DIM1,  DIM2,  or  DIM3  and GND PCB pads. Additionally, each PWM input functions as  an  active-high  enable  for  the  corresponding  channel. Multiple EV kits can be cascaded using the FLTS1, FLTS2, FLTS3, and GND PCB pads and configuring the proper jumpers. Jumpers JU8, JU9, and JU10 disable the MAX16839 fault-detection features.

Each MAX16839 IC features an exposed pad that uses the top-layer and bottom-layer PCB copper as a heat-sink. For a single-layer design, the top-layer copper would only be required  from  a  thermal-design  perspective.  The  EV kit PCB uses 2oz copper for optimum thermal dissipation.

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16839 Evaluation Kit

## LED Load Configuration

The EV kit can drive three separate HB LED loads. Each load  can  consist  of  multiple  HB  LEDs  in  series  with  a total  forward voltage up to 39V. If the HB LED forward voltage is &gt; 6.5V, the input voltage must rise within 14 F s to avoid a fault, or the fault feature must be disabled by connecting the FLTS output to ground. The EV kit circuit drives HB LEDs rated for a minimum of 100mA and can be reconfigured to drive up to 50mA. Proper heat-sinking of the LEDs is important for optimum LED performance and durability.

## HB LED Current Settings

The EV  kit features jumpers to reconfigure  each MAX16839 linear  current-sink  circuit  on  each  channel. When inserted on pins 1-2, jumpers JU1, JU2, and JU3 configure the current sink's limit to 100mA, respectively. Installing the jumpers on pins 2-3 configures the current sink's limit to 50mA. See Table 1 for channel 1, Table 2 for channel 2, and Table 3 for channel 3 jumper settings.

To  reconfigure  the  circuit  for another  current  limit, replace resistor R2, R4, or R6 for channels 1, 2, and 3, respectively, and use the following equation to calculate a new value for the desired current:

<!-- formula-not-decoded -->

where  ILED\_  is  the  desired  HB  LED  current  in  amps ((ILED1,  ILED2,  and  ILED3)  and  RSENSE  is  the  new  R2, R4, or R6 resistor value in ohms for obtaining the desired HB LED current. Install the respective jumper (JU1, JU2, or  JU3)  on  pins  1-2  when  configuring  the  channel  for another current.

## Table 1. Channel 1 HB LED Current (JU1)

| SHUNT POSITION   | CS PIN          |   HB LED CURRENT (mA) |
|------------------|-----------------|-----------------------|
| 1-2*             | Connected to R2 |                   100 |
| 2-3              | Connected to R1 |                    50 |

* Default position.

## Table 2. Channel 2 HB LED Current (JU2)

| SHUNT POSITION   | CS PIN          |   HB LED CURRENT (mA) |
|------------------|-----------------|-----------------------|
| 1-2*             | Connected to R4 |                   100 |
| 2-3              | Connected to R3 |                    50 |

<!-- image -->

If  designing  for  a  higher  LED  current,  verify  that  the desired current setting does not exceed the power rating of the corresponding resistor (R1-R6) or the LED load. Do not set the LED current above 100mA.

## Faults (FLTS1, FLTS2, FLTS3) and Open HB LED Detection

The EV kit features PCB pads for accessing the fault signal (FLTS\_) at each IC (U1, U2, and U3). Storage capacitors C5, C6, and C7 are provided at each IC's FLTS pin, respectively,  for  fault  retention/memorization.  When  the voltage  across  the  capacitor  exceeds  1.65V  during  a fault event, the respective HB LED driver turns off, unless this  feature  is  disabled  by  connecting  the  FLTS  output of  the  respective  IC  to  ground.  Jumpers  JU6  and  JU7 are provided to connect all FLTS signals together, which shuts down all channels if a fault is detected at one of them.  See  Table  4  for  configuring  the  FLTS  jumpers. Refer to the Open-LED Detection and Fault Event Status Memory section in the MAX16839 IC data sheet for further information on the FLTS signal.

The MAX16839 integrated open HB LED detection feature is enabled when VIN &gt; 7.38V (typ) and the voltage at  the  DIM  pin  is  high  and  the  IC  thermal  shutdown  is low. When any of these conditions are violated, the faultdetection function is disabled.

## Dimming Operation

The  EV  kit  features  three  independent  PWM  PCB  pads and  jumpers  for  accessing/configuring  the  current-dimming  input  (DIM)  signal  at  each  IC  (U1,  U2,  and  U3). Jumpers JU4 and JU5 are provided to connect all the DIM signals together or to operate independently. Each channel can have a different dimming-signal pattern.

## Table 3. Channel 3 HB LED Current (JU3)

| SHUNT POSITION   | CS PIN          |   HB LED CURRENT (mA) |
|------------------|-----------------|-----------------------|
| 1-2*             | Connected to R6 |                   100 |
| 2-3              | Connected to R5 |                    50 |

* Default position.

## Table 4. Fault FLTS1, FLTS2, FLTS3 (JU6, JU7)

| SHUNT POSITION   | U1, U2, AND U3 FLTS PINS   | FAULT OPERATION   |
|------------------|----------------------------|-------------------|
| Installed        | Connected together         | Simultaneous      |
| Not installed*   | Independent                | Independent       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

## MAX16839 Evaluation Kit

Use  a  digital  PWM  signal  with  a  5V  logic  level  and a  switching  frequency  between  100Hz  and  10kHz. Frequencies lower than 100Hz can introduce flickering in  the  light  output.  Vary  the  duty  cycle  of  the  signal  to adjust the LED brightness. LED brightness increases as the duty cycle increases and vice versa. When the PWM signal's duty cycle is 100%, the LEDs are continuously on. At 0% duty cycle, the outputs are disabled.

See Table 5 for configuring the DIM\_ jumpers. Refer to the PWM  Dimming section  in  the  MAX16839  IC  data sheet for further information on the DIM signal.

## Additional Configurations and Features

The  EV  kit  includes  several  other  features  to  facilitate evaluating the MAX16839 IC. A power-supply choppercircuit feature, and the ability to cascade multiple kits for operation, are detailed in the following sections.

## Chopper-Circuit Operation

The EV kit features a power-supply chopper    circuit for the  VIN  input  supply.  The  input  supply  chopper  circuit is comprised of p-channel MOSFET P1, biasing resistor/ diode  pair  R7/D2,  and  switching  transistor  Q1.  When installed, jumper JU11 is provided to bypass the chopper circuit.

Table 5. DIM1, DIM2, DIM3 (JU4, JU5)

| SHUNT POSITION   | U1, U2, AND U3 DIM PINS   | DIM OPERATION   |
|------------------|---------------------------|-----------------|
| Installed        | Connected together        | Synchronous     |
| Not installed*   | Independent               | Independent     |

To use the chopper circuit, connect a function generator with a digital signal to the CHOP and GND PCB pads. Use  a  3V  to  5V  low-frequency  pulse-width-modulated (PWM) signal to switch the chopper circuit on/off.

## Cascading Multiple Kits

The EV kit features PCB pads and jumpers for cascading multiple kits. To cascade another EV kit, use the following guidelines:

- 1)  Install all DIM\_ shunts on jumpers JU4 and JU5.
- 2)  Install all FLTS\_ shunts on jumpers JU6 and JU7.
- 3)  Connect the DIM3 PCB pad on kit #1 to the DIM1 PCB pad on kit #2.
- 4)  Connect the FLTS3 pad on kit #1 to the FLTS1 pad on kit #2.
- 5)  Connect the GND PCB pad nearest DIM3 on kit #1 to the GND PCB pad nearest the DIM3 pad on kit #2.
- 6)  Connect  a  common  power  supply  to  both  kits'  VIN and PGND PCB pads.

## Table 6. Chopper-Circuit Operation (JU11)

| SHUNT POSITION   | MOSFET P1/ BIASING RESISTOR R8   | CHOPPER- CIRCUIT OPERATION   |
|------------------|----------------------------------|------------------------------|
| Installed        | Connected to ground              | Bypassed                     |
| Not installed*   | Connected to Q1                  | Running                      |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16839 Evaluation Kit

Figure 1. MAX16839 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX16839 Evaluation Kit

Figure 2. MAX16839 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX16839 EV Kit PCB Layout-Component Side

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16839 Evaluation Kit

Figure 4. MAX16839 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX16839 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                        | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------|-----------------|
|                 0 | 9/09            | Initial release                                    | -               |
|                 1 | 5/10            | Updated data sheet based on new revision of the IC | 2, 3            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

8

<!-- image -->