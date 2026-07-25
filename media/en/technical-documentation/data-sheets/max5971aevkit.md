<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX5971A evaluation kit (EV kit) is a fully assembled and  tested  surface-mount  circuit  board  featuring  an Ethernet  single-port  power-sourcing  equipment  (PSE) circuit for -54V supply rail systems. The IEEE M 802.3af/ at-compliant  MAX5971A  PSE  controller  IC,  in  a  28-pin TQFN  package,  features  an  internal  n-channel  power MOSFET forming the main PSE circuit on the EV kit. The IC  is  used  in  power-over-Ethernet  (PoE)  applications requiring DC power over a single Ethernet network port.

The EV kit requires a -32V to -60V power supply (-54V supply rail) capable of supplying 1A or more to the EV kit  for  powering  the  powered  device  (PD)  through  the 10/100/1000BASE-TX  Ethernet  network  port.  The  EV kit  demonstrates  PD  discovery,  classification,  currentlimit  control,  and  other  functions  of  an  IEEE  802.3af/atcompliant PSE.

The  IC  controls  the  -54V  DC  power  to  the  Ethernet network  port  by  sensing  current  through  the  port  and controlling the IC's internal power MOSFET. The current is fed to a 1 x 1 gigabit MagJack M module at the EV kit's Ethernet output port.

The  EV  kit  demonstrates  the  full  functionality  of  the  IC's operational  modes,  such  as  configurable  high-power modes  (programmable  up  to  40W),  PD  detection,  PD classification, overcurrent protection, current foldback, undervoltage/overvoltage protection, and AC-/ DC-disconnect monitoring. All these features are configurable  on  the  EV  kit,  with  additional  test  points  for  voltage probing  and  current  measurements  provided.  The  EV  kit can also be configured for midspan or end-point network operation.

IEEE is a registered service mark of the Institute of Electrical and Electronics Engineers, Inc.

MagJack is a registered trademark of Bel Fuse Inc.

<!-- image -->

## MAX5971A Evaluation Kit

## Evaluates:  MAX5971A

## Features

- S IEEE 802.3af/at-Compliant PSE Circuit
- S High-Power Class 5 Mode Configurable Up to 40W
- S -32V to -60V Input Voltage Providing 1A
- S Ethernet Network Ports RJ45 10/100/1000BASE-TX Ethernet Network Data Input Port RJ45 10/100/1000BASE-TX Ethernet Network PSE Output Port
- S Demonstrates IC's Internal Power Switch and Current Sensing
- S Demonstrates Standard and Legacy PD Detection and Classification
- S Configurable for Midspan or End-Point Mode
- S Configurable AC/DC Load-Removal Detection and Disconnect Monitoring
- S Convenient Voltage and Current Test Points
- S Demonstrates the EV Kit Circuit's Output Port LED-Status Indicator
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                        |
|---------------|-------|------------------------------------------------------------------------------------|
| C1            |     1 | 47 F F Q 20%, 100V electrolytic capacitor (12.5mm x 13.5mm) Panasonic EEEFK2A470AQ |
| C2, C3, C5    |     3 | 0.1 F F Q 10%, 100V X7R ceramic capacitors (0603) Murata GRM188R72A104KA35B        |
| C4            |     1 | 0.47 F F Q 10%, 100V X7R ceramic capacitor (0805) Murata GRM21BR72A474KA73B        |
| C6            |     1 | 0.1 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C104K              |
| C12           |     1 | 1000pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

## MAX5971A Evaluation Kit

## Evaluates:  MAX5971A

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION        |   QTY | DESCRIPTION                                                                                                    |
|--------------------|-------|----------------------------------------------------------------------------------------------------------------|
| D1, D3             |     2 | 100V, 150mA small-signal diodes (SOD323) Fairchild 1N4148WS                                                    |
| D2                 |     1 | 58V, 600W transient-voltage suppressor (SMB) Vishay SMBJ58A                                                    |
| D4                 |     1 | 100V, 1A general-purpose diode (SMA) Diodes Inc. S1B                                                           |
| GND (x2), RTN, VEE |     4 | Uninsulated panel-mount banana jacks                                                                           |
| J1                 |     1 | RJ45 connector module jack (8-8)                                                                               |
| J2                 |     1 | RJ45 1 x 1Gb MagJack, 1000 Base-T, 1 x 1 port, voice-over-IP magnetics (700mA DC) Bel Fuse Inc. 0826-1X1T-GH-F |
| JU1-JU6            |     6 | 2-pin headers                                                                                                  |
| L1                 |     1 | 10mH, 17mA inductor Coilcraft DS1608C-106                                                                      |
| R1                 |     1 | 9.09k I Q 1%, 1/2W resistor (2010) Panasonic ERJ-12SF9091U                                                     |

| DESIGNATION             |   QTY | DESCRIPTION                                                 |
|-------------------------|-------|-------------------------------------------------------------|
| R3, R10-R13, R15, R16   |     7 | 1k I Q 5% resistors (0402)                                  |
| R4                      |     1 | 2.2M I Q 5% resistor (0805)                                 |
| R5, R6                  |     0 | Not installed, resistors (1206)                             |
| R7, R8                  |     2 | 0 I Q 5% resistors (1206)                                   |
| R9                      |     0 | Not installed, resistor (0402)                              |
| R29                     |     1 | 5.1k I Q 5% resistor (0603)                                 |
| SW1                     |     1 | Microminiature pushbutton switch                            |
| TP1, TP3-TP6, TP9, TP10 |     7 | Miniature PC test points, yellow                            |
| TP2                     |     1 | Miniature PC test point, red                                |
| TP11, TP13              |     2 | Miniature PC test points, black                             |
| U1                      |     1 | Single-port PSE controller (28 TQFN-EP*) Maxim MAX5971AETI+ |
| -                       |     4 | Rubber bumpers                                              |
| -                       |     6 | Shunts (JU1-JU6)                                            |
| -                       |     1 | PCB: MAX5971A EVALUATION KIT+                               |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Bel Fuse Inc.                          | 201-432-0463 | www.belfuse.com             |
| Coilcraft, Inc.                        | 847-639-6400 | www.coilcraft.com           |
| Diodes Incorporated                    | 805-446-4800 | www.diodes.com              |
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112 | www.panasonic.com           |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX5971A when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX5971A EV kit
- -32V to -60V, 1A capable DC power supply
- Voltmeter for confirming output voltage

Warning: The  GND  banana  jack  is  more  positive  than the  VEE  banana  jack.  Use  an  isolated  oscilloscope  for probing with respect to VEE.

## Hardware Connections

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify  that  a  shunt  is  not  installed  on  jumpers  JU1 (ILIM1, Class 0-Class 4), JU2 (ILIM2, Class 0-Class 4),  JU3 (PWM enabled), JU4 (midspan mode), and JU6 (AC disconnect).
- 2) Verify that a shunt is installed on jumper JU5 (legacy mode disabled).
- 3) Connect  the  -32V  to  -60V  DC  power  supply  to  the metal VEE banana jack and the supply ground to the metal GND banana jack. Do not turn on the power supply until all connections are completed.
- 4) Connect  a  PD  to  the  Ethernet  output  port  J2  RJ45 connector  on  the  EV  kit's  MagJack  module  J2 RJ45  connector.  This  step  is  optional  if  network connectivity and/or a PD are not required.
- 5) Connect  the  EV  kit's  network  input  LAN  RJ45  port (J1) to the corresponding PD LAN connection. This step is optional if network connectivity is not required.
- 6) Turn on the power supply and set it to -54V.
- 7) Test  points  TP11,  TP13  (VEE),  and  TP2  (GND)  are provided throughout the PCB to observe the desired signals with an oscilloscope or voltage meter. Use an isolated oscilloscope for probing with respect to VEE or RTN.
- 8) Pressing pushbutton switch SW1 shuts down the PSE output DC power and resets U1.

<!-- image -->

## MAX5971A Evaluation Kit

## Evaluates:  MAX5971A

## Detailed Description of Hardware

The  MAX5971A EV kit  features  a  10/100/1000BASE-TX Ethernet single-port PSE controller circuit for -54V supply rail systems. The EV kit's PSE circuit uses the IEEE 802.3af/at-compliant MAX5971A PSE controller featuring an  integrated  n-channel  power  MOSFET  and  an  onboard  single  1  x  1Gb  MagJack  module  (integrated  in J2)  to  form  the  basic  portion  of  a  PSE  circuit.  The  EV kit  has  been designed as an IEEE 802.3af/at-compliant PSE and demonstrates all the required functions,  such as  PD  discovery,  classification,  current-limit  control of  a  connected  PD  at  the  Ethernet  output  port,  and AC-/DC-disconnect detection.

The  EV  kit's  PSE  circuit  requires  a  -32V  to  -60V  power supply (-54V supply rail) capable of supplying 1A to the EV kit's GND and VEE steel banana jacks or PCB pads.

The  IC  controls  the  -54V  DC  power  to  the  output  port by  regulating  the  port's  current.  The  current  is  fed to  the  10/100/1000BASE-TX  magnetic  output  module connected  to  the  J2  Ethernet  output  port  RJ45  jack. An  IEEE  802.3af/at-compliant  PD  connects  to  Ethernet output  port  J2  on  the  EV  kit.  The  PD  can  be  located within  350ft  from  the  EV  kit  when  connected  with  a twisted 4-pair Ethernet cable. The 10/100/1000BASE-TX magnetic  module  (J2)  is  decoupled  to  the  EV  kit's chassis ground internally.  The  EV  kit's  isolated  chassis ground (CHASSIS\_GND) PCB pad connects to the network system ground.

The  EV  kit  starts  up  in  automatic  operation  mode and demonstrates PD detection, PD classification, overcurrent protection, current foldback, undervoltage/overvoltage  protection  (+28.5V,  +62.5V  (typ),  respectively (GND - VEE)), AC-/DC-disconnect monitoring, and highpower Class 5 mode operation. The Class 5 overcurrent and current-limit protection can be reconfigured through jumpers.  PD-blocking  diode  D4  can  be  bypassed to reduce power dissipation when AC-disconnect monitoring  is  not  required.  The  port's  AC-detection circuit resistor-capacitor network  (R3,  C4)  can  be reconfigured as well. The output port also features a 600W unidirectional  overvoltage-transient  suppressor  diode (D2) and decoupling capacitor (C5) for transient protection at the output port.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quick Start

## Required Equipment

The  IC  features  an  internal  triangular-wave  oscillator for  AC-disconnect  detection  and  can  be  bypassed to  operate  in  DC-disconnect  detection  mode.  The internal oscillator can be shut down using jumper JU6 if AC-disconnect detection is not required.

Test points and jumpers have been provided for voltage probing and current measurements of the power circuit. Additionally, since the GND is more positive than VEE or  RTN,  use  an  isolated  oscilloscope  when  probing signals with respect to VEE or RTN. Yellow and green LEDs  on  output  module  J2  indicate  when  the  port's power is turned on and the PoE status, respectively.

The EV kit can also be reconfigured for interfacing without  connecting  to  an  Ethernet  system.  Banana  jacks are included for the PSE, GND, and RTN output power sources  for  this  method  of  evaluation. Since  the  GND is  more  positive  than  VEE  or  RTN,  use  an  isolated oscilloscope  when  probing  signals  with  respect  to VEE or RTN.

## Jumper Selection

The EV kit features several jumpers to reconfigure the EV kit for various PSE configurations, operating modes, and PD requirements.

## High-Power Class 5 and ILIM1/ILIM2 Selection

The EV kit features two jumpers to configure the IC's PSE PD  classification  mode  and  Class  0-Class  4  or  high-

## MAX5971A Evaluation Kit

## Evaluates:  MAX5971A

power  Class  5  mode.  Jumper  JU1  sets  the  IC's  ILIM1 configuration and jumper JU2 sets the ILIM2 configuration. Table 1 lists the jumper options for the modes used to detect a valid PD connected to the PSE Ethernet output port. Refer to the MAX5971A IC data sheet for more information on all available classification modes.

## LED Driver PWM Enable and Port PoE Status

The  EV  kit  features  a  2-pin  jumper  (JU3)  to  enable  or disable  the  IC's  internal  PWM  driver  for  the  LED  pin. The IC's LED pin also serves as a port-status indicator using the LED driver. The RJ45 connector (J2), providing data and power at the output port, features 2 LEDs: a  yellow  LED  indicating  that  the  EV  kit  is  powered  by -54V and a green port-status LED. Table 2 lists the LED driver  jumper  options  and  Table  3  provides  the  port status.  Refer  to  the  MAX5971A  IC  data  sheet  for  more information on the multifunction LED features.

## Midspan/End-Point PoE Selection and Configuration

The EV kit features a 2-pin jumper (JU4) to set the IC for midspan  or  end-point  operation.  The  PSE  circuit  must also be reconfigured for operating in a midspan or endpoint configuration. Table 4 lists the jumper options and Table 5 lists the PSE circuit resistor changes for the two configurations of operation. In Table 5, installed resistors are  0 I 1206  surface-mount  components.  Refer  to  the MAX5971A  IC  data  sheet  for  more  information  on  the configurations.

Table 1. Jumpers JU1, JU2 Functions (ILIM1, ILIM2)

| IC CLASSIFICATION   | ILIM1 PIN (JU1)   | ILIM2 PIN (JU2)   | OVERCURRENT THRESHOLD (mA)   | CURRENT LIMIT (mA)   |
|---------------------|-------------------|-------------------|------------------------------|----------------------|
| Class 0-Class 4*    | Not installed     | Not installed     | Class 5 disabled             | Class 5 disabled     |
| Class 5             | Installed         | Not installed     | 748                          | 850                  |
| Class 5             | Not installed     | Installed         | 792                          | 900                  |
| Class 5             | Installed         | Installed         | 836                          | 950                  |

* Default position.

Refer to the MAX5971A IC data sheet for more information on Class 0-Class 4 overcurrent and current-limit information.

Note:

Table 2. Jumper JU3 Functions (PWMEN)

| SHUNT POSITION   | PWMEN PIN                             | LED PWM OPERATION   |
|------------------|---------------------------------------|---------------------|
| Not installed*   | Internally pulled high                | Enabled             |
| Installed        | Connected to VEE through resistor R12 | Shutdown            |

* Default position.

<!-- image -->

## Table 3. Green LED Status

| GREEN LED          | J2 PORT STATUS                                           |
|--------------------|----------------------------------------------------------|
| Off                | Not powered or disconnected                              |
| On                 | Powered, valid PD                                        |
| Blinking 2 flashes | Overcurrent fault during power-on                        |
| Blinking 5 flashes | Detected invalid low/high discovery signature resistance |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 4. Jumper JU4 Functions (MIDSPAN)

| SHUNT POSITION   | MIDSPAN PIN                           | PoE CONFIGURATION   |
|------------------|---------------------------------------|---------------------|
| Not installed*   | Internally pulled high                | Midspan             |
| Installed        | Connected to VEE through resistor R13 | Endpoint            |

## Table 5. PSE Circuit Resistor Changes for Midspan/End-Point Configuration

|               | RESISTOR      | RESISTOR      | RESISTOR      | RESISTOR      |
|---------------|---------------|---------------|---------------|---------------|
| CONFIGURATION | R5            | R6            | R7            | R8            |
| Midspan*      | Not installed | Not installed | Installed     | Installed     |
| End point     | Installed     | Installed     | Not installed | Not installed |

## Table 6. Jumper JU5 Legacy Modes

| SHUNT POSITION   | LEGACY PIN                            | LEGACY MODE                      |
|------------------|---------------------------------------|----------------------------------|
| Not installed    | Internally pulled high                | Enabled, detect high capacitance |
| Installed*       | Connected to VEE through resistor R15 | Disabled                         |

## Legacy High-Capacitance-Detection Operation

The EV kit features a 2-pin jumper (JU5) to set the IC's initial startup legacy operational mode. In legacy mode, PD signature capacitances up to 47 F F (typ) are accepted. Table 6 lists the jumper options. Refer to the MAX5971A IC data sheet for more information.

## AC-Disconnect Monitoring Oscillator and AC-/DC-Disconnect Operation

The EV kit features a 2-pin jumper (JU6) to disable the IC's  internal  triangular-wave  oscillator  at  the  OSC  pin. The  oscillator  is  used  for  AC-disconnect  monitoring  of the PD and is disabled for DC-disconnect operation. For AC-disconnect operation, the  internal  oscillator  is  used along with RCD components R3, C4, D3, and blockingdiode D4. Perform a power-on or reset the IC using pushbutton switch SW1 to affect the changes.

For  DC-disconnect  operation,  shut  down  the  internal oscillator  by  installing  a  shunt  on  jumper  JU6.  Then remove  resistor  R3  and  install  a  0 I 0402  surfacemount  resistor  on  R9  to  bypass  blocking-diode  D4. Diode D3 remains installed. Refer to the AC Disconnect Monitoring and DC  Disconnect  Monitoring sections  in the MAX5971A IC data sheet for additional information. Table 7 lists the jumper options for the oscillator and AC/ DC configurations. Refer to the MAX5971A IC data sheet for more information.

<!-- image -->

## Reset and Automatic Operation

The EV kit features pushbutton switch SW1 to reset the IC or set the IC's initial startup operational mode. Table 8 lists the switch options.

## Operation Without an Ethernet Connection

For operation greater than 35W, the RJ45 jack (J2) cannot be used. The EV kit features PCB pads and banana jacks to  interface  directly  with  the  output  port  power.  Use  the GND and RTN PCB pads or jacks to access the output port's power without an Ethernet connection.

## IC Pins Signal Measurements

The EV kit features test points to facilitate voltage measuring at each port's respective LED, ILIM1, ILIM2, PWMEN, MIDSPAN, LEGACY, and EN pins on the IC. For the VEE connection, test points TP11 and TP13 can be used.

The output port current can be measured by replacing any output port single resistor-R5 or R6 when operating in  midspan and R7 or R8 when operating in end point. Replace  the  respective  resistor  with  a  1 I Q 1%  1206 surface-mount resistor.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5971A Evaluation Kit

## Evaluates:  MAX5971A

## MAX5971A Evaluation Kit

## Evaluates:  MAX5971A

## Table 7. Jumper JU6 OSC and AC-/DC-Disconnect Detection Functions

|                |                                       | RESISTOR      | RESISTOR      | DISCONNECT-DETECTION MODE                                   |
|----------------|---------------------------------------|---------------|---------------|-------------------------------------------------------------|
| SHUNT POSITION | OSC PIN                               | R3            | R9            |                                                             |
| Installed      | Connected to VEE                      | Not installed | Installed     | DC-disconnect detection                                     |
| Not installed* | Connected to VEE through capacitor C6 | Installed     | Not installed | AC-disconnect detection (uses the IC's internal oscillator) |

## Table 8. Switch SW1 Operational Modes (EN)

| SWITCH POSITION   | EN PIN                                | EV Kit OPERATION MODE   |
|-------------------|---------------------------------------|-------------------------|
| Not pressed       | Internally pulled high                | Automatic               |
| Pressed           | Connected to VEE through resistor R16 | Shutdown or reset       |

* Default position.

## MAX5971A Evaluation Kit

## Evaluates:  MAX5971A

<!-- image -->

Figure 1. MAX5971A EV Kit Schematic-Controller Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2. MAX5971A EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX5971A Evaluation Kit

## Evaluates:  MAX5971A

Figure 3. MAX5971A EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX5971A EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5971AEVKIT+ | EV Kit |

+ Denotes lead(Pb)-free and RoHS compliant.

## MAX5971A Evaluation Kit

## Evaluates:  MAX5971A

## MAX5971A Evaluation Kit

## Evaluates:  MAX5971A

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/11            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.