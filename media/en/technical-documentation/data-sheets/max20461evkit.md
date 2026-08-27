<!-- lastmod 2022-08-02 -->
## MAX20461 Evaluation Kit

## General Description

The  MAX20461  evaluation  kit  (EV  kit)  demonstrates the  MAX20461  automotive  high-current,  high-efficiency, step-down DC-DC converter with integrated USB Type-C DFP  controller  and  1GHz  bandwidth  USB  2.0  D+/Dprotection  switches,  which  provide  ESD  and  short-tobattery protection for low-voltage transceivers.

The  MAX20461  features  integrated  host-charger  portdetection circuitry that adheres to the USB Type-C speci -fication, the USB-IF BC1.2 battery-charging specification, Apple  iPod/iPhone/iPad ®   and  Samsung ®   charge-detection termination resistors, and Chinese Telecommunication Industry Standard YD/T 1591-2009.

The MAX20461 integrates high-side current sensing and voltage  adjustment  circuitry,  which  provides  automatic USB voltage adjustment to compensate for voltage drops in captive cables associated with automotive applications.

The  MAX20461  step-down,  synchronous,  DC-DC  con -verter  operates  from  a  voltage  of  up  to  28V  continuous and protects against load-dump transients up to 40V.  The converter is programmable for frequencies from 275kHz to 2.2MHz and can deliver 3A continuously.

The EV kit contains an I 2 C-enabled MAX20461. The I 2 C interface  allows  for  flexible  configuration,  detailed  fault diagnostics, and access to the on-chip ADC that reports die  temperature,  output  voltage,  and  output  current. The  I 2 C  features  are  easily  accessed  using  the  Maxim MINIQUSB module and the provided example GUI.

The EV kit is configured for 2.2MHz operation. The data switches  of  the  MAX20461  generally  do  not  require far-eye tuning; the EVKIT is populated with shorts.

Apple, iPod, iPhone, and iPad are registered trademarks of Apple Inc. Samsung is a registered trademark of Samsung Electronics Co., Ltd.

Evaluates: MAX20461

## Features and Benefits

- Configurable Charge-Detection Modes
- USB-C 3.0A, 1.5A, 0.5A
- USB-IF BC1.2 CDP, DCP
- Apple 2.4A, 1.0A
- China YD/T1591-2009 Charging Specification
- Automatic USB Voltage Adjustment by Integrated DC-DC Converter (275kHz to 2.2MHz)
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX20461 Evaluation Kit

## Quick Start

The following  procedure  demonstrates  the  MAX20461's high-speed data switches, voltage adjustment capability, and I 2 C interface.

## Required Equipment

- MAX20461 EV Kit
- USB Type-C to Type-A Adapter
- 2m USB-A Extension Cable

## Evaluates: MAX20461

- 3A Electronic Load (Preferred) or Two 3.5Ω 10W Resistors in Parallel (Included), Connected to a USB Type-A Plug (Included)
- 14V/2A DC Power Supply or Car Battery (V BAT )
- Digital Voltmeter (DVM) or Oscilloscope
- MINIQUSB and MAX20461 GUI
- Two Jumpers
- Four DuPont Jumper Wires, Female-Female: GND, SDA, SCL, 3V3

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

Figure 1. EV Kit Interface

<!-- image -->

## MAX20461 Evaluation Kit

## Initial Setup

The EV kit is fully assembled and tested. Follow the steps below to set up the board for evaluation.

- 1) MAX20461 GUI is installed.
- 2) Verify SW1 switch is set to HVEN = 1, ENBUCK = 1, SYNC = 0, CDP/DCP = 0.
- 3) Using the jumper wires, connect the MINIQUSB to the EVKIT as follows:
- VDD to 3V3
- SCL to SCL
- SDA to SDA
- GND to GND
- 4) Connect the MINIQUSB+ to the computer.

## Evaluates: MAX20461

- 5) Verify that the MINIQUSB+ is recognized in the Windows Device Manager as USB Serial Converter.
2. UniversalSerialBuscontrollers
3. GenericUSB Hub Intel(R)7Series/C216ChipsetFamilyUSBEnhancedHost Controller-1E2D Intel(R)USB3.0eXtensibleHostController-1.0(Microsoft) USB CompositeDevice USBRootHub USB Root Hub (USB3.0) USBSerialConverter
- 6) Set the V BAT power supply to 14V output, 2A current limit. Turn the output off. Connect the negative lead to the GND test loop on the EVKIT. Connect the positive lead to the V BAT test loop on the EVKIT.
- 7) Turn the V BAT power supply output on.
- 8) Plug the USB-C to USB-A adapter to the EVKIT.
- 9) Plug a USB flash drive to the USB-C adapter.

Figure 2. EV Kit Setup

<!-- image -->

## MAX20461 Evaluation Kit

- 10) Start  the  MAX20461  GUI.  Look  at  the  message bar at the bottom of the GUI to verify that both the MINIQUSB and the EV kit are detected. See Figure 3 for GUI startup configuration.
- 11) Click Auto  Read .  Click Configuration  Complete . Note: Every time the MAX20461 is polled by the GUI

Evaluates: MAX20461

(either by clicking the Refresh button or by selecting Auto Read ) the SENSN output voltage, USB output current, and die temperature will continuously update in  the  corresponding  windows  of  the  GUI.  See  the ADC Timing Diagram in the MAX20461 IC datasheet for the ADC polling procedure.

Figure 3. MAX20461 GUI Startup

<!-- image -->

## MAX20461 Evaluation Kit

- 12) The USB output voltage should display approximately 5.15V, as seen in Figure 4.

## High-Speed Data Switches

- 1) Connect the EVKIT to the computer USB port using a USB-A extension cable.

Evaluates: MAX20461

- 2) Check that the USB flash drive is recognized on the computer and that it can be opened. This verifies that the high-speed data switches are operating correctly.
- 3) Unplug the flash drive from the USB-C adapter.

Figure 4. MAX20461 GUI Configured

<!-- image -->

Figure 5. USB Flash Drive Recognized

<!-- image -->

## Cable Compensation

See Figure 6 for illustration of the setup

- 1) Connect the 2m USB-A Extension Cable to the USBC adapter as shown in Figure 6.
- 2) Connect the Type-A Plug to the other end of the cable. Note: this  is  the  voltage  that  a  portable  device  will see.
- 3) Check that the V BUS  voltage at the end of cable is approximately 5.15V.
- 4) Connect the E-load to the plug's ground and V BUS pins. Enable the 3A load. Use a voltmeter to find VBUS and GND on the plug's leads.
- 5) With  the  voltage  adjustment  disabled  (GAIN  =  0; default setting) the V BUS voltage on the GUI should still be near 5.15V. Since this is the output of the DC/ DC converter, there will be a slight drop due to load regulation and the current through the SENSE resis -tor, output filter, and PCB trace.
- 6) The voltage at the far end of the USB cable, however, will be significantly below 5V and will depend on the load current and cable resistance.
- 7) Set the voltage adjustment to step 28 by typing it di -rectly into the Gain box of the example GUI.
- 8) The buck output voltage will increase and the voltage at the far end of the USB adapter and 2m cable will now be approximately 5.15V, regardless of the load current.

## Evaluates: MAX20461

## Optional - Powering E-Marked Cables

For ports that support USB SuperSpeed Signals, the USB Type-C Specification requires V CONN to power E-Marked Cables.  By  default,  the  MAX20461  V CONN switch  can be quickly evaluated using the low-power V DD rail from MINIQUSB+ or a dedicated 3V3/0.3A supply. In order to provide higher power (up to 1.5W), a separate 5V supply for V CONN must be used, as follows:

- 1) Remove R23 (located at the back of the PCB) to disconnect the 3V3 rail from V CONN .
- 2) Follow  the  same  procedure  as  before  to  bring  the board up and configure the GUI.
- 3) Connect a 5V/0.3A DC power supply to the V CONN test point.
- 4) Verify that the GUI displays the green VCONN Ready status indicator.
- 5) Place a jumper on the EVKIT on pins 1-2 of J6 (Ra) and a jumper on pins 2-3 of J5 (Rd).
- 6) Verify that the GUI displays the green VBUS Status indicator.
- 7) Remove  J6  jumper  to  expose  the V CONN output. Note: To save power, an E-marked cable can remove Ra once V CONN has been supplied.
- 8) Connect  the  E-load  to  pin  2  of  J6.  Set  the  load  to 300mA and turn the E-load on.
- 9) Observe the current being supplied from the 5V sup -ply. Measure the voltage at pin 2 of J6 and verify that it is within the required V CONN range of 3.0V to 5.5V.

Figure 6. Cable Compensation Setup

<!-- image -->

## MAX20461 Evaluation Kit

## Detailed Description

The  MAX20461  EV  kit  comes  fully  assembled,  tested, and  installed  with  MAX20461ATJA/V+. The  stand-alone variant can also be used on this EV kit by changing the IC and configuration resistors (R2, R3, R4). See Table 1 for an example of stand-alone configuration. Refer to the MAX20461 data sheet for further details on configuration resistors.

## EV Kit Interface

The header J1 includes input and output test points for controlling the IC and evaluating its functionality. Table 2 lists the individual pins and their functions.

Switch  SW1  allows  the  user  to  set  the  voltage  on  the HVEN, ENBUCK, SYNC, and CDP/DCP pins. Setting the switch to the ON/1 position ties the connected pin to the

## Table 1. Stand-Alone Configuration Example

| PIN NAME   | RESISTOR   | VALUE   | DESCRIPTION                                                                                                              |
|------------|------------|---------|--------------------------------------------------------------------------------------------------------------------------|
| CONFIG1    | R2         | 0Ω      | Spread Spectrum: ON; SYNC as Input; fSW = 2.2MHz Note: If Sync is an Input, tie SYNC to GND if no external clock is used |
| CONFIG2    | R3         | 15kΩ    | GAIN[3:0] = 1100                                                                                                         |
| CONFIG3    | R4         | 3.9kΩ   | GAIN[4] = 1; ILIM = 3.04A (min); CC Pullup Mode = 3.0A Note: Gain programmed with this configuration is 28               |

## Table 2. External Header

|   J1 PIN | NAME           | DESCRIPTION                                                                                   |
|----------|----------------|-----------------------------------------------------------------------------------------------|
|        1 | 3V3            | 3.3V Supply (Input)                                                                           |
|        2 | SYNC           | Buck Regulator Synchronization Pin (Input/Output)                                             |
|        3 | CDP/DCP        | Charge Detection Configuration Pin (Input)                                                    |
|        4 | HVEN           | IC Enable (Active High, Input)                                                                |
|        5 | ENBUCK         | DC-DC Enable (Active High, Input)                                                             |
|        6 | FAULT          | FAULT indicator (Active Low, Open Drain, Output)                                              |
|        7 | INT ( ATTACH ) | I 2C interrupt (Active Low, Open Drain, Output)                                               |
|        8 | CC_POL(SHIELD) | CC Polarity Output Pin (Open Drain, Output) Logic-low for Rd on CC2, logic-high for Rd on CC1 |
|        9 | SCL            | I 2C Clock                                                                                    |
|       10 | SDA            | I 2C Data                                                                                     |
|       11 | GND            | EV Kit Ground                                                                                 |
|       12 | GND            | EV Kit Ground                                                                                 |

Evaluates: MAX20461

3.3V supply, and setting the switch to the OFF/0 position ties the pin to ground through a 100kΩ pulldown resistor. To  externally  control  these  pins  through  the  header  J1, set the switch to the OFF/0 position. This leaves the pin connected to the header with a pulldown resistor. Table 3 describes the switch and its functionality.

## Basic Functionality

Connect a battery voltage supply between V BAT and GND test loops, and connect a 3.3V supply to the 3V3 pin on J1. Setting the HVEN switch to 1 pulls the HVEN pin to 3V3 and enables the device. The ENBUCK pin must also be high for the DC-DC converter to turn on. The charge mode can be configured through I 2 C or using the CDP/ DCP switch or pin. If the CDP/DCP pin is high, it will over -ride the current I 2 C register setting.

## Table 3. External Switch

| SW1 PIN   |   POSITION | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|-----------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HVEN      |          0 | Device Disabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| HVEN      |          1 | Device Enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ENBUCK    |          0 | Buck Output Disabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ENBUCK    |          1 | Buck Output Enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| SYNC      |          0 | SYNC Pin Functions: 1) The primary function is synchronization with another DC/DC converter. In this case, leave SYNC in the 0 position (100kΩ to GND) and connect the SYNC signal to another DC/DC converter synchronization signal, if needed. For instance, another MAX20461 EVKIT can be used. 2) The second function on the SYNC pin is to configure MAX20461 when operating as a Type-A source only (Type-A mode only is achieved by setting CC_ENB = 1 through I 2 C, which disables Type-C detection). This option is rarely used because MAX20461 targets Type-C ports; however, it can be used for debugging. Leave in this position when SYNC is an output (default). When SYNC is an input and set to logic-low with CC_ENB = 1, SKIP mode operation of the DC/DC converter in light-load/no-load conditions is enabled. |
| SYNC      |          1 | When SYNC is an input and is in this position with CC_ENB = 1, forced-PWM operation is enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CDP/DCP   |          0 | Preload CD[1:0] = b00 (SDP mode) on startup                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| CDP/DCP   |          1 | Override CD[1:0] to auto-CDP mod e                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## Type-C Functionality

The headers J5 and J6 provide CC1 and CC2 with pull -down resistors (Ra and Rd) used for Type-C device/char -ger detection. These resistors are included for validation purposes;  they  would  typically  come  from  a  connected Type-C device or Type-C to Type-A legacy adapter. With Type-C enabled (default), the buck converter will not turn on until Rd is detected on either CC1 or CC2. For V CONN power, connect Ra to the CC pin that will provide V CONN power, then connect Rd to the other CC pin.

V CONN  can  be  used  to  supply  electronically  marked cables  and  other  V CONN-powered  devices.  By  default, the  V CONN pin  of  the  IC  is  tied  to  the  3.3V  supply  on the EV Kit. The application may require a higher V CONN supply voltage to ensure ohmic losses do not droop the V CONN voltage  below  the  required  3V.  V CONN can  be reconfigured to connect to an external supply by remov -ing R23 and connecting a supply to the white V CONN test point.

The CC\_POL pin is an open-drain output that asserts high when Rd is detected on CC1. This output can be used to control a MUX in a USB 3.x application.

## Table 4. J5 Jumper Positions

| JUMPER POSITION   | DESCRIPTION                                        |
|-------------------|----------------------------------------------------|
| 1-2               | CC2 pulled to ground through a 1.2kΩ resistor (Ra) |
| 2-3               | CC2 pulled to ground through a 5.1kΩ resistor (Rd) |

## Table 5. J6 Jumper Positions

| JUMPER POSITION   | DESCRIPTION                                        |
|-------------------|----------------------------------------------------|
| 1-2               | CC1 pulled to ground through a 1.2kΩ resistor (Ra) |
| 2-3               | CC1 pulled to ground through a 5.1kΩ resistor (Rd) |

Evaluates: MAX20461

## Fault Diagnostics

The FAULT pin  is  designed  to  be  software-compatible with  Maxim  Type-A  automotive  USB  solutions.  More advanced diagnostics are available using the I 2 C bus and the INT pin. The IRQ bits have an associated IRQ\_MASK bit.  When  the  IRQ\_MASK  bit  is  set  to  1,  the INT pin asserts and de-asserts following the IRQ bit. All IRQ bits clear  on  read.  IRQ  bit  de-assertion  is  controlled  by  the IRQ\_AUTOCLR bit. When IRQ\_AUTOCLR = 0 (default), the  error  bit  remains  asserted  until  the  register  is  read, even  if  the  fault  condition  is  no  longer  present.  When IRQ\_AUTOCLR = 1, the IRQ bit de-asserts without a read as soon as the fault criteria are no longer met.

The EV kit GUI does not connect to the FAULT or INT pins. It uses a polling mechanism to read all of the MAX20461 registers. A read is initiated when the Refresh button is clicked, or periodically if auto read is enabled. Because of the polling mechanism, when IRQ\_AUTOCLR = 1, it is possible that IRQ bit assertions will not be detected by the GUI because of quick de-assertions after a fault.

## PCB Layout Guidelines

A good PCB layout is critical to proper system performance. The loop area of the DC/DC conversion circuitry must be minimized as much as possible. Place the input capacitor, power inductor, and output capacitor very close to the IC. Shorter traces should be prioritized over wider traces.

A  low-impedance  ground  connection  between  the  input and  output  capacitors  is  necessary  (route  through  the ground pour on the exposed pad). Connect the exposed pad to ground. Place multiple vias in the pad to connect to all other ground layers for proper heat dissipation. (Failure to do this may result in the IC repeatedly reaching thermal shutdown.) Use a single common ground with GND vias directly  adjacent  to  all  components  that  via  down  to  an adjacent  ground  plane.  High-frequency  return  currents will flow directly under their corresponding traces.

USB traces must be routed as a 90Ω differential pair with an appropriate keep-out area. Avoid routing USB traces near high-frequency switching nodes or other sources of noise, such as clocks. The length of the routing should be minimized and avoid 90-degree turns, excessive vias, and RF stubs. MAX20461 has high-bandwidth data switches. See the IC datasheet for details on tuning recommendations.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20461EVKIT# | EVKIT  |

# denotes RoHS-compliant.

## MAX20461 EV Kit Bill of Materials

| REFERENCE              |   QTY | DESCRIPTION                                  | MANUFACTURER NUMBER   | MANUFACTURER         |
|------------------------|-------|----------------------------------------------|-----------------------|----------------------|
| C1                     |     1 | Ceramic Capacitor (0402) 2200PF 50V X7R 0402 | Murata                | GCM155R71H222KA37D   |
| C2                     |     1 | Electrolytic Capacitor (SMD) 47uF 25V 20%    | Panasonic             | EEE-HC1E470XP        |
| C3                     |     1 | Ceramic Capacitor (0402) 0.22uF 35V 10% X7R  | TDK                   | CGA2B1X7R1V224KC     |
| C4, C15                |     2 | Ceramic Capacitor (0603) 1uF 16V 10% X7R     | TDK                   | CGA3E1X7R1C105K080AC |
| C5                     |     1 | Ceramic Capacitor (1206)10uF 50V 10% X7R     | TDK                   | CGA5L1X7R1H106K      |
| C6                     |     1 | DNI                                          | DNI                   | DNI                  |
| C7                     |     1 | Ceramic Capacitor (1210) 22uF 25V 10% X7R    | Murata                | GRM32ER71E226KE5L    |
| C8                     |     1 | Ceramic Capacitor (0603) 2.2uF 16V 10% X7S   | TDK                   | CGA3E1X7S1C225K080AC |
| C10-11                 |     2 | DNI                                          | DNI                   | DNI                  |
| C12, C20               |     2 | Ceramic Capacitor (0402) 0.1uF 50V 10% X7R   | TDK                   | CGA2B3X7R1H104K050BB |
| C13-14                 |     2 | DNI                                          | DNI                   | DNI                  |
| C17                    |     4 | DNI                                          | DNI                   | DNI                  |
| C19                    |     1 | Ceramic Capacitor (0805) 1uF 25V 10% X7R     | Murata                | GCM21BR71E105KA56L   |
| D1                     |     1 | Schottky Diode (SMB) 3A 60V                  | Diodes Inc            | B360B-13-F           |
| USB_5V, GND, VBAT, GND |     4 | Loop Testpoints                              | Keystone              | 5024                 |
| VCONN                  |     1 | Mini Test Point                              | Keystone              | 5002                 |
| J1                     |     1 | 1 row, 12 pos, .100" Gold Header             | TE Connectivity       | 5-146858-1           |
| J2                     |     1 | USB Type C Receptical                        | Wurth                 | 632723x00011         |
| J3                     |     1 | USB-A Plug                                   | Kycon                 | KUSBX-SMT2AP5S-B     |
| J5, J6                 |     2 | 1 row, 3 pos, .100" Gold Header              | TE Connectivity       | 5-146858-1           |
| L1                     |     1 | Ferrite Bead (1206) 3A                       | Wurth                 | 742792121            |
| L2                     |     1 | Ferrite Bead (1806) 6A                       | Murata                | BLM41P600S           |
| L3-4, L6-L7            |     4 | Resistor (0402) SHORT                        | Panasonic             | ERJ-2GE0R00X         |
| L5                     |     1 | Inductor, 1.5uH, 8.5A Isat                   | Coilcraft             | XEL4030-152MEB       |
| R1                     |     1 | Resistor (1206) .033 Ω 1%, 0.75W, 50ppm      | Susumu                | KRL1632E-M-R033-F-T5 |
| R2, R8-14              |     8 | Resistor (0402) 100k Ohm 5%                  | Vishay Dale           | CRCW0402100KJNED     |
| R3-4, R15-16           |     5 | DNI                                          | DNI                   | DNI                  |
| R18, R20               |     2 | Resistor (0402) 5.1k Ohm 1% 1/16W            | Vishay Dale           | CRCW04025K10FKED     |
| R19, R21               |     2 | Resistor (0402) 1.2k Ohm 1% 1/16W            | Vishay Dale           | CRCW04021K20FKED     |
| R22                    |     1 | DNI                                          | DNI                   | DNI                  |
| R23                    |     1 | Resistor (1206) SHORT 1/4W                   | Vishay Dale           | CRCW12060000Z0EC     |
| SW1                    |     1 | 1.27mm Pitch DIP Switch                      | C&K Components        | TDA04H0SB1R          |
| Q1                     |     1 | 30V, 3.5A NMOS                               | ON Semi               | NTGS4141NT1G         |
| U1                     |     1 | USB Type-C DFP Controller and Buck Converter | Maxim Integrated      | MAX20461ATJA/V+      |
| PACK-OUT               |     1 | USB Type-C to Type-A adapter                 | Tripp Lite            | U428-000-F           |
| PACK-OUT               |     1 | 2m USB-A Extension Cable                     | Qualtek               | 3021057-02M          |
| PACK-OUT               |     1 | USB-A Plug                                   | Kycon                 | KUSBX-SMT2AP5S-B     |
| PACK-OUT               |     2 | 3.5Ω 10W 1% Resistor                         | Vishay Dale           | RS0103R500FE12       |
| PACK-OUT               |     1 | USB to I2C Interface                         | Maxim Integrated      | MINIQUSB+            |
| PACK-OUT               |     2 | Shunt Jumper 0.1"                            | 3M                    | 969102-0000-DA       |
| PACK-OUT               |     1 | Jumper Wires F-F 15cm 10PK                   | MikroElektronika      | MIKROE-511           |

Evaluates: MAX20461

## MAX20461 EV Kit Schematics

<!-- image -->

## MAX20461 EV Kit PCB Layout Diagrams

MAX20461 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX20461 EV Kit PCB Layout Diagrams (continued)

MAX20461 EV Kit PCB Layout-Top View

<!-- image -->

## MAX20461 EV Kit PCB Layout Diagrams (continued)

MAX20461 EV Kit PCB Layout-Layer 2

<!-- image -->

## MAX20461 EV Kit PCB Layout Diagrams (continued)

MAX20461 EV Kit PCB Layout-Layer 3

<!-- image -->

## MAX20461 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20461 EV Kit PCB Layout-Bottom View

## MAX20461 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX20461 EV Kit Component Placement Guide-Bottom Silkscreen

## MAX20461 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 3/19            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX20461