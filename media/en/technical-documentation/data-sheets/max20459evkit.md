<!-- lastmod 2022-08-02 -->
## MAX20459 Evaluation Kit

## General Description

The MAX20459 evaluation kit (EV kit) demonstrates the MAX20459 automotive high-current, high-efficiency, stepdown DC-DC converter with integrated USB Type-C DFP controller  and  host-charger-adapter  emulation,  which provides ESD and short-to-battery protection.

The  MAX20459  features  integrated  host-charger  portdetection circuitry adhering to the USB Type-C specifica -tion,  the  USB-IF  BC1.2  battery  charging  specification, Apple  iPod/iPhone/iPad ®   and  Samsung ®   charge-detection termination resistors, and Chinese Telecommunication Industry Standard YD/T 1591-2009.

The  MAX20459  step-down,  synchronous,  DC-DC  con -verter  operates  from  a  voltage  of  up  to  28V  continuous and protects against load-dump transients up to 40V.  The converter is programmable for frequencies from 275kHz to 2.2MHz and can deliver 3A continuously.

The MAX20459 integrates thermal management in a twostage approach to limit maximum die temperature. In the first  stage,  the  standalone  variant  reduces  the  Type-C handshake  and  DC  current  limit  by  one  step  when  die temperature exceeds 130°C (typ). The second stage trig -gers  DC-DC shutdown if the die  temperature  continues rising and exceeds 165°C (typ).

The  EV  kit  is  populated  with  a  standalone  enabled MAX20459ATJC/V+ that is configured by pull-down resis -tors. The I 2 C variant (MAX20459ATJA/V+) allows for flex -ible configuration, detailed fault diagnostics, and access to  the  on-chip ADC that reports die temperature, output voltage, and output current. The I 2 C features are easily accessed by using the Maxim MINIQUSB module along with the provided example GUI.

## Features and Benefits

- Configurable Charge-Detection Modes
- USB-C 3.0A, 1.5A, 0.5A
- USB-IF BC1.2 DCP
- Apple 2.4A, 1.0A
- Samsung 2.0A
- China YD/T 1591-2009 Charging Specification
- Automatic USB Voltage Adjustment by Integrated DC-DC Converter (275kHz - 2.2MHz)
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX20459

## Quick Start ( S tandAl one V ariant)

The following  procedure  demonstrates  the  MAX20459's auto-DCP function in standalone mode.

## Required Equipment

- MAX20459 EV kit
- USB Type-C to Type-C cable
- 14V/2A DC Power Supply or car battery (VBAT)
- USB-C amperage meter (Plugable USBC-VAMETER recommended)
- USB-C device (smartphone recommended)
- Two jumpers: V BAT , GND

## Initial Setup

The EV kit is fully assembled and tested. Follow the steps below to set up the board for evaluation.

- 1) Verify SW1 switch is set to HVEN = 1, ENBUCK = 1, SYNC = 0, DCP\_MODE = 0.
- 2) Set the V BAT power supply to 14V output, 2A current limit. Turn the output off. Connect the nega -tive lead to the GND test loop on EVKIT. Connect positive lead to the VBAT\_FLT test loop on EVKIT.
- 3) Turn the V BAT power supply output on.
- 4) Plug the USB-C amperage meter into the EVKIT.
- 5) Plug the USB-C to USB-C cable into the USB-C amperage meter.
- 6) Plug the USB-C cable into a USB Type-C device that can charge (i.e. smartphone).
- 7) The no-load USB output voltage should be approxi -mately 5.15V, and the USB device should begin charging.

Ordering Information appears at end of data sheet.

Apple, iPod, iPhone, and iPad are registered trademarks of Apple Inc.

Samsung is a registered trademark of Samsung Electronics Co., Ltd.

<!-- image -->

Figure 1. Standalone EV Kit Interface

<!-- image -->

## USB Type-C &amp; Legacy Apple/Samsung/USB DCP Charging

- 8) The amperage meter should display USB current as the device charges.
- a. Note that for most devices, maximum charging rate occurs between approximately 20-80% bat -tery level.
- 9) For native USB Type-C devices, maximum charging current will follow the Type-C mode setting:
- a. 0.5A/1.5A/3.0A (see CONFIG2 and CONFIG3 Pin Table (Standalone Variant) in the MAX20459 data sheet)
- 10) For non-native USB Type-C devices (Apple 30-pin/ lightning and USB mini/micro-b):
- a. Apple devices will consume up to 1A or 2.4A, depending on the DCP\_MODE pin (see Table 3).
- b. BC 1.2-compatible or Samsung devices will con -sume up to 1.5A or 2A, respectively, regardless of DCP\_MODE pin state.
- 11) Note that some USB devices are compatible with multiple handshakes and may prefer one over the other, depending on many factors. The USB charg -ing behavior can also depend on the version of software installed on the user's device, which may change over time.

## Quick Start (I 2 C variant)

The following  procedure  demonstrates  the  MAX20459's auto-DCP mode and I 2 C interface.

## Required Equipment

- MAX20459 EV kit
- USB Type-C to Type-C cable
- 14V/2A DC power supply or car battery (V BAT )
- MINIQUSB and MAX20459 GUI
- USB-C device (smartphone recommended)
- Two jumpers: V BAT , GND
- 3 DuPont jumper wires female-female: GND, SDA, SCL

Evaluates: MAX20459

Figure 2. I 2 C EV Kit Interface

<!-- image -->

Figure 3. I 2 C EV Kit Setup

<!-- image -->

## MAX20459 Evaluation Kit

## Initial Setup

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

The EV kit is fully assembled and tested. Follow the steps below to set up the board for evaluation.

- 1) MAX20459 GUI is installed on a PC.
- 2) Verify the EV kit has ATJA variant of MAX20459 for I 2 C, and R3/R4 are removed per Table 1.
- 3) Verify SW1 switch is set to HVEN = ON, ENBUCK = ON, SYNC = OFF, DCP\_MODE = OFF.
- 4) Using the jumper wires, connect the MINIQUSB to the EV kit as follows:
- SCL to SCL
- SDA to SDA
- GND to GND

Evaluates: MAX20459

- 5) Connect the MINIQUSB to the computer and install driver if necessary.
- 6) Verify the MINIQUSB is recognized in the Windows Device Manager as USB Serial Converter .
3. UniversalSerialBuscontrollers
4. GenericUSB Hub
5. Intel(R)7Series/C216ChipsetFamilyUSBEnhancedHostController-1E2D
6. Intel(R)USB3.0eXtensibleHostController-1.0(Microsoft)
7. USB Composite Device
8. USBRootHub
9. USBRoot Hub(USB3.0)
10. USBSerialConverter
- 7) Set the V BAT power supply to 14V output, 2A current limit. Turn the output off. Connect the negative lead to the GND test loop on the EV kit. Connect the posi -tive lead to VBAT\_FLT test loop on the EV kit.
- 8) Turn the V BAT power supply output on.
- 9) Plug the USB-C to USB-C cable into the EV kit.
- 10) Plug the USB-C cable into a USB type-C device that can charge (i.e. smartphone).

Figure 4. MAX20459 GUI Startup

<!-- image -->

## MAX20459 Evaluation Kit

- 11) Start the MAX20459 GUI. Look at the message bar at the bottom of the GUI to verify that both the MINIQUSB and the EV kit are detected. The GUI should look like Figure 4 upon start-up.

Click Auto  Read , click Thermal  Foldback  Enable , change Frequency to 488kHz, set Gain to 6, set Source Pull-up to 3A, then click Configuration Complete .

## Evaluates: MAX20459

Note: Every  time  the  MAX20459  is  polled  by  the  GUI (either by the refresh button or by selecting Auto Read ) the SENSN output voltage, USB output current, and die temperature will continuously update in the corresponding windows of the GUI. See the ADC Timing Diagram in the MAX20459 IC datasheet for the ADC polling procedure.

- 12) The USB output voltage should display approximate -ly 5.15V and the USB device should begin charging.

Figure 5. MAX20459 GUI Configured

<!-- image -->

## USB Type-C &amp; Legacy Apple/Samsung/USB DCP Charging

- 13) The GUI should display USB current as the device charges.
- a. Note that for most devices, maximum charging rate occurs between approx. 20-80% battery level.
- 14) For native USB type-C devices, maximum charging current will follow the Source Pull-up setting:
- a. 0.5A/1.5A/3.0A, see Figure 3.
- 15) For non-native USB Type-C devices (Apple 30-pin/ lightning and USB mini/micro-b):
- a. Apple devices will consume up to 1A or 2.4A, depending on the DCP\_MODE pin (see Table 3).
- b. BC 1.2-compatible or Samsung devices will con -sume up to 1.5A or 2A, respectively, regardless of DCP\_MODE pin state.

## Table 1. I 2 C Configuration Example

| PIN NAME   | RESISTOR   | VALUE   | DESCRIPTION                                                                                           |
|------------|------------|---------|-------------------------------------------------------------------------------------------------------|
| CONFIG3    | R3         | Open    | I 2 C SCL Note: R15 can be installed if SCL pullup is needed. R15 not required for use with MINIQUSB. |
| CONFIG2    | R4         | Open    | I 2C SDA Note: R16 can be installed if SDA pullup is needed. R16 not required for use with MINIQUSB.  |

## Table 2. External Header

|   J1 PIN | NAME           | DESCRIPTION                                                                                                  |
|----------|----------------|--------------------------------------------------------------------------------------------------------------|
|        1 | IN             | 3.3V supply for IN (input/output)                                                                            |
|        2 | SYNC           | Buck regulator synchronization pin (input/output)                                                            |
|        3 | DCP_MODE       | Charge detection configuration pin (input)                                                                   |
|        4 | HVEN           | IC enable (active-high, input)                                                                               |
|        5 | ENBUCK         | DC-DC enable (active-high, input)                                                                            |
|        6 | FAULT          | FAULT indicator (active low, open-drain, output)                                                             |
|        7 | INT ( ATTACH ) | I 2 C: interrupt (active-low, open-drain, output) Standalone: Attach output (active-low, open-drain, output) |
|        8 | GND            | EV kit ground                                                                                                |
|        9 | SCL (CONFIG3)  | I 2 C: clock (input) Standalone: CONFIG3 (input)                                                             |
|       10 | SDA (CONFIG2)  | I 2 C: data (input/output) Standalone: CONFIG2 (input)                                                       |
|       11 | GND            | EV kit ground                                                                                                |
|       12 | GND            | EV kit ground                                                                                                |

Evaluates: MAX20459

- 16) Note that some USB devices are compatible with multiple handshakes and may prefer one over the other, depending on many factors. The USB charg -ing behavior can also depend on the version of software installed on the user's device, which may change over time.

## Detailed Description

The  MAX20459  EV  kit  comes  fully  assembled,  tested, and  installed  with  MAX20459ATJC/V+  for  standalone operation. The I 2 C variant can also be used on this EV kit  by  changing  the  IC  and  configuration  resistors  (R3, R4). See table below for an example of I 2 C configuration. Refer  to  MAX20459  for  further  details  on  configuration resistors.

## EV Kit Interface

The header J1 includes input and output test points for controlling the IC and evaluating its functionality. Table 2 lists the individual pins and their functions.

## MAX20459 Evaluation Kit

The switch SW1 allows the user to set the voltage on the HVEN, ENBUCK, SYNC, and DCP\_MODE pins. Setting a switch to the ON position ties the connected pin high, and setting a switch to the OFF position ties the pin to ground through a 100kΩ pulldown resistor. To externally control these pins through the header J1, set all switches to the OFF position. This leaves the pin connected to the header with a pulldown resistor. Table 2 describes the header and its pinout.

## Table 3. External Switch

| SW1 PIN   | POSITION                            | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HVEN      | 0                                   | Device disabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| HVEN      | 1                                   | Device enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ENBUCK    | 0                                   | Buck output disabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ENBUCK    | 1                                   | Buck output enabled                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| SYNC      | 0                                   | SYNC configured as an input: In Type-C mode (CC_ENB = 0): with no CC attach, DC-DC is OFF. With CC attach, DC-DC is ON (FPWM). In Type-A mode (CC_ENB = 1): DC-DC is always ON, skip mode in light/no-load is allowed, FPWM otherwise (V BUS always on). See the MAX20459 data sheet for more information. SYNC configured as an output: In Type-C mode (CC_ENB = 0): with no CC attach, DC-DC is OFF. With CC attach, DC-DC is ON (FPWM). In Type-A mode (CC_ENB = 1): DC-DC is always ON (FPWM). SYNC pin generates clock output for synchronization of other devices. If enabled, spread spectrum is also present on SYNC output to reduce EMI of the device synchronized to MAX20459. |
| SYNC      | 0 with clock applied to SYNC via J1 | SYNC configured as an input: In Type-C mode (CC_ENB = 0): With no CC attach, DC-DC is OFF. With CC attach, DC-DC is ON (FPWM). In Type-A mode (CC_ENB = 1): DC-DC is always ON (FPWM). MAX20459 can be synchronized to an external clock-for example, another MAX20459. Spread spectrum is not applied to external clock from SYNC pin.                                                                                                                                                                                                                                                                                                                                                   |
| SYNC      | 1                                   | SYNC configured as an input: In Type-C mode (CC_ENB = 0): with no CC attach, DC-DC is OFF. With CC attach, DC-DC is ON (FPWM). In Type-A mode (CC_ENB = 1): DC-DC is always ON (FPWM). See the MAX20459 data sheet for more information.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| DCP_MODE  | 0                                   | Preload CD[1:0] = b10 (Auto-DCP/Apple 2.4A mode)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| DCP_MODE  | 1                                   | Override CD[1:0] = b11 (Auto-DC P/Apple 1A mode)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Basic Functionality

Connect a battery voltage supply between VBAT\_FLT and GND test loops. Setting the HVEN switch to ON pulls the HVEN pin to V BAT and enables the device. The ENBUCK pin must also be high for the DC-DC converter to turn on. The charge mode can be configured through I 2 C or using the DCP\_MODE switch or pin. If the DCP\_MODE pin is high, it will override the current I 2 C register setting.

Evaluates: MAX20459

## Type-C Functionality

The headers J5 and J6 provide CC1 and CC2 pulldown resistors  (Ra  and  Rd)  used  for  Type-C  device/charger detection.  These  resistors  are  included  for  validation purposes;  they  would  typically  come  from  a  connected Type-C device or Type-C to Type-A legacy adapter. With Type-C enabled (default), the buck converter will not turn on until Rd is detected on either CC1 or CC2.

## Fault Diagnostics

The FAULT pin  is  designed  to  be  software  compatible with  Maxim  Type-A  Automotive  USB  solutions.  More advanced diagnostics can be done using the I 2 C bus and the INT pin. The IRQ bits have an associated IRQ\_MASK bit. When the IRQ\_MASK bit is set to 1, the INT pin will assert and de-assert following the IRQ bit. All IRQ bits will clear  on  read.  IRQ  bit  de-assertion  is  controlled  by  the

Table 4. J5 Jumper Positions

| JUMPER POSITION   | DESCRIPTION                                        |
|-------------------|----------------------------------------------------|
| 1-2               | CC1 pulled to ground through a 5.1kΩ resistor (Rd) |
| 2-3               | CC1 pulled to ground through a 1.2kΩ resistor (Ra) |

Table 5. J6 Jumper Positions

| JUMPER POSITION   | DESCRIPTION                                        |
|-------------------|----------------------------------------------------|
| 1-2               | CC2 pulled to ground through a 5.1kΩ resistor (Rd) |
| 2-3               | CC2 pulled to ground through a 1.2kΩ resistor (Ra) |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX20459EVKIT# | EV Kit |

# Denotes RoHS-compliant.

Evaluates: MAX20459

IRQ\_AUTOCLR bit. When IRQ\_AUTOCLR = 0 (default), the  error  bit  will  stay  asserted  until  the  register  is  read, even  if  the  fault  condition  is  no  longer  present.  When IRQ\_AUTOCLR = 1, the IRQ bit will de-assert without a read as soon as the fault criteria are no longer met.

The EV kit GUI does not connect to the FAULT or INT pins. It uses a polling mechanism to read all MAX20459 registers. A  read  is  initiated  when  the  refresh  button  is clicked, or periodically if auto read is enabled. Because of the polling mechanism, when IRQ\_AUTOCLR = 1, it is possible that IRQ bit assertions will not be detected by the GUI because of quick de-assertions after a fault.

## IC Efficiency Measurement

The MAX20459 EV kit provides the ability to measure the efficiency  of  the  MAX20459  buck  converter  itself.  This method  decouples  the  losses  resulting  from  the  output inductor, output capacitor, and PCB traces, and is accom -plished by utilizing two test points: VBAT\_S and LX\_FLT. By measuring the DC voltages at these test points, the input current and output (load) current, IC efficiency can be calculated as follows:

<!-- formula-not-decoded -->

## PCB Layout Guidelines

A  good  PCB  layout  is  critical  to  proper  system  perfor -mance. The loop area of the DC/DC conversion circuitry must be minimized as much as possible. Place the input capacitor, power inductor, and output capacitor very close to the IC. Shorter traces should be prioritized over wider traces.

A  low-impedance  ground  connection  between  the  input and  output  capacitors  is  necessary  (route  through  the ground pour on the exposed pad). Connect the exposed pad to ground. Place multiple vias in the pad to connect to all other ground layers for proper heat dissipation. (Failure to do this may result in the IC repeatedly reaching thermal shutdown.) Use a single common ground with GND vias directly  adjacent  to  all  components  that  via  down  to  an adjacent  ground  plane.  High-frequency  return  currents will flow directly under their corresponding traces.

## MAX20459 EV Kit Bill of Materials

|   QTY | REFERENCE                            | DESCRIPTION                                               | MANUFACTURER              | PART NUMBER          |
|-------|--------------------------------------|-----------------------------------------------------------|---------------------------|----------------------|
|     1 | C1                                   | DNP                                                       |                           |                      |
|     1 | C2                                   | ALUMINUM-ELECTROLYTIC CAPACITOR 47UF 50V 20% -55C TO 105C | PANASONIC                 | EEE-FK1H470P         |
|     1 | C3                                   | CERAMIC CAPACITOR (0402) 0.1uF 25V 10% X7R                | TDK                       | CGJ2B3X7R1E104K050BB |
|     1 | C4                                   | DNP                                                       |                           |                      |
|     2 | C12, C20                             | CERAMIC CAPACITOR (0402) 0.1uF 50V 10% X7R                | TDK                       | CGA2B3X7R1H104K050BE |
|     1 | C5                                   | CERAMIC CAPACITOR (1206) 10UF 50V 10% X7R                 | TDK                       | CGA5L1X7R1H106K160AC |
|     1 | C6                                   | ALUMINUM-ELECTROLYTIC CAPACITOR 68UF 25V 20% -55C TO 105C | PANASONIC                 | EEE-FP1E680AP        |
|     1 | C7                                   | CERAMIC CAPACITOR (1210) 22UF 25V 10% X7R                 | MURATA                    | GRM32ER71E226KE15    |
|     1 | C8                                   | CERAMIC CAPACITOR (0603) 2.2uF 16V 10% X7R                | MURATA                    | GRM188Z71C225KE43    |
|     1 | C9                                   | CERAMIC CAPACITOR (1206) 2.2UF 50V 10% X7R                | TAIYO YUDEN               | UMK316B7225K         |
|     1 | C15                                  | CERAMIC CAPACITOR (0603) 1uF 16V 10% X7R                  | TDK                       | CGA3E1X7R1C105K080AC |
|     1 | D1                                   | SCHOTTKY BARRIER DIODE (SMB) 60V 3A -55C TO 125C          | DIODES INCORPORATED       | B360B-13-F           |
|     1 | FB1                                  | FERRITE-BEAD (1206) 600R 25% 2.9A                         | MURATA                    | BLM31KN601SH1        |
|     5 | GND_1, GND_2, USB_5V, VBAT, VBAT_FLT | TEST POINT                                                | KEYSTONE                  | 5020                 |
|     1 | J1                                   | HEADER 12-PINS                                            | SAMTEC                    | TSW-112-07-G-S       |
|     1 | J2                                   | USB TYPE-C RECEPTACLE                                     | MOLEX                     | 2012670005           |
|     2 | J5, J6                               | HEADER 3-PINS                                             | TE CONNECTIVITY           | 5-146280-3           |
|     1 | L3                                   | INDUCTOR 8.2UH 20% 9.4A                                   | COILCRAFT                 | XEL6060-822ME        |
|     1 | L5                                   | DNP                                                       |                           |                      |
|     2 | LX_FLT, VBAT_S                       | WHITE TEST POINT                                          | KEYSTONE                  | 5002                 |
|     1 | R1                                   | RESISTOR (0805) 0.033R 1% +/-50PPM/C 0.5W                 | SUSUMU CO LTD.            | KRL1220E-M-R033-F    |
|     1 | R2                                   | RESISTOR (0402) 620R 1% 0.063W                            | VISHAY DALE               | CRCW0402620RFK       |
|     1 | R3                                   | RESISTOR (0402) 1.37K 1% 0.063W                           | VISHAY DALE               | CRCW04021K37FK       |
|     1 | R4                                   | RESISTOR (0402) 3.09K 1% 0.063W                           | PANASONIC                 | ERJ-2RKF309          |
|     1 | R5                                   | RESISTOR (0402) 2.7M 1% 0.063W                            | VISHAY DALE               | CRCW04022M70FK       |
|     1 | R6                                   | RESISTOR (0402) 2K 1% 0.063W                              | PANASONIC                 | ERA-2AEB202          |
|     1 | R7                                   | RESISTOR (0402) 1K 1% 0.063W                              | VISHAY DALE               | CRCW04021K00FK       |
|     6 | R9-R14                               | RESISTOR (0402) 100K 5% 0.063W                            | VISHAY DALE               | CRCW0402100KJN       |
|     3 | R15-R17                              | DNP                                                       |                           |                      |
|     2 | R18, R20                             | RESISTOR (0402) 5.1K 1% 0.063W                            | VISHAY DALE               | CRCW04025K10FK       |
|     2 | R19, R21                             | RESISTOR (0402) 1.2K 1% 0.063W                            | VISHAY DALE               | CRCW04021K20FK       |
|     2 | SHUNT_J5, SHUNT_J6                   | JUMPER 0.100" 2PINS                                       | SULLINS ELECTRONICS CORP. | QPC02SXGN-RC         |
|     1 | SW1                                  | QUAD SPST HALF-PITCH DIP SWITCH                           | C&K COMPONENTS            | TDA04H0SB1           |
|     1 | U1                                   | MAX20459ATJC/V+                                           | MAXIM                     | MAX20459ATJC/V+      |
|     1 | PCB                                  | MAX20459 revA                                             | MAXIM                     | MAX20459             |
|     1 | PACK-OUT                             | USB to I2C Interface                                      | MAXIM                     | MINIQUSB+            |
|     1 | PACK-OUT                             | Jumper Wires F-F 15cm 10PK                                | MikroElektronika          | MIKROE-511           |

Evaluates: MAX20459

## MAX20459 EV Kit Schematic

<!-- image -->

Evaluates: MAX20459

## MAX20459 EV Kit Layout

MAX20459 EV Kit PCB Layout - Top View

<!-- image -->

MAX20459 EV Kit PCB Layout - Layer 2

<!-- image -->

MAX20459 EV Kit PCB Layout - Layer 3

<!-- image -->

MAX20459 EV Kit PCB Layout - Bottom View

<!-- image -->

## MAX20459 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/19           | Initial release                                                                                                 | -               |
|                 1 | 3/20            | Updated Figure 1, Figure 2, Figure 3, Ordering Information table, and the MAX20459 EV Kit PCB Layout - Top View | 2-3, 8, 11      |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX20459