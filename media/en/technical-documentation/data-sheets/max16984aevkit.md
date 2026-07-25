<!-- lastmod 2022-08-02 -->
## MAX16984A Evaluation Kit

## General Description

The  MAX16984A  evaluation  kit  (EV  kit)  demonstrates the MAX16984A automotive high-current, high-efficiency, step-down DC-DC converter with integrated USB Type-A controller.  In  addition,  the  device  also  includes  1GHz bandwidth USB 2.0 D+/D- protection switches which provide ESD and short-to-battery protection for low-voltage transceivers.

The  MAX16984A  features  integrated  host-charger  portdetection circuitry adhering to the USB 2.0 specification, the  USB-IF  BC1.2  battery  charging  specification, Apple iPod/iPhone/iPad®  and  Samsung®  charge-detection termination  resistors,  and  Chinese  Telecommunication Industry Standard YD/T 1591-2009.

The MAX16984A integrates high-side current sensing and voltage  adjustment  circuitry  to  provide  automatic  USB voltage  adjustment  to  compensate  for  voltage  drops  in captive cables associated with automotive applications.

The MAX16984A step-down, synchronous, DC-DC con -verter  operates  from  a  voltage  of  up  to  28V  continuous and protects against load dump transients up to 40V.  The converter is programmable for frequencies from 310kHz to 2.2MHz and can deliver 3A continuously.

The EV kit is populated with a MAX16984AATJB/V+ configured  for  2.2MHz  operation.  The  data  switches  of  the MAX16984A generally do not require far-eye tuning; the EV kit is populated with shorts.

## Features

- Configurable Charge Detection Modes
-  USB-IF BC1.2 CDP, DCP
- Apple 2.4A
-  Samsung 2.0A
- China YD/T 1591-2009 Charging Specification
- Automatic USB Voltage Adjustment by Integrated DC-DC Converter (310kHz - 2.2MHz)
- Proven PCB Layout
- Fully Assembled and Tested

## Quick Start

The  following  procedure  demonstrates  the  MAX16984A EV kit's high-speed data switches and voltage adjustment capability.

## Required Equipment

- MAX16984A EV kit
- 2m USB-A extension cable (included in EV kit)
- 1.6Ω 20W resistor (included in EV kit) or electronic load
- USB Type-A plug (included in EV kit)
- 14V/2A DC power supply or car battery (VBAT)
- Digital voltmeter (DVM)
- USB Type-A flash drive

Ordering Information appears at end of data sheet.

Apple, iPod, iPhone, and iPad are registered trademarks of Apple Inc. Samsung is a registered trademark of Samsung Electronics Co., Ltd.

Evaluates: MAX16984A

<!-- image -->

## MAX16984A Evaluation Kit

## Initial Setup

The MAX16984A EV kit is fully assembled and tested. To setup the MAX16984A board for evaluation, follow these steps:

- 1) Verify SW1 switch is set to HVEN=1, ENBUCK=1, SYNC=0, DATA\_MODE=0.
- 2) Set the VBAT power supply to 14V output, 2A current limit. Turn the output off. Connect negative lead to the GND test loop on EV kit. Connect positive lead to VBAT\_FLT test loop on EV kit.
- 3) Turn the VBAT power supply output on.
- 4) Plug a USB flash drive into the EV kit USB connector (J3).

Figure 1: Initial EV Kit Setup

<!-- image -->

Figure 2: USB Flash Drive Recognized

<!-- image -->

## Evaluates: MAX16984A

## High-Speed Data Switches

- 5) Connect the EV kit upstream port (J2) to the computer USB port using the supplied USB-A extension cable.
- 6) Check that the USB flash drive is recognized on your computer and that you can open it. This verifies that the high-speed data switches are operating properly.

Unplug  the  flash  drive  and  2m  USB-A  extension  cable from the EV kit.

│

## MAX16984A Evaluation Kit

## Cable Compensation

- 7) Connect the 2m USB-A extension cable to the MAX16984A EV kit downstream USB connector (J3).
- 8) Connect the Type-A plug to the other end of the extension cable.

Note: this is the voltage a portable device will see.

- 9) Measure the VBUS voltage at the end of the cable.(It should be around 5.15V.)
- 10)  Connect the E-load or resistor bank to the USB plug's Ground and VBUS pins.
- 11) The voltage at the far-end of the 2m cable is now ≈5.15V regardless of the load current.

## Evaluates: MAX16984A

## Detailed Description

The MAX16984A EV kit comes fully assembled, tested, and  installed  with  MAX16984AATJB/V+.  The  behavior of  the  EV  kit  can  be  adapted  by  changing  the  Config Resistors (R2, R3, R4). See Table 1 for  the  EV kit con -figuration. Refer to the MAX16984A data sheet for further details on Config Resistors.

## EV Kit Interface

The header J1 includes input and output test points for controlling the IC and evaluating its functionality. Table 2 lists the individual pins and their functions.

Figure 3: EV Kit Setup for Cable Compensation

<!-- image -->

## Table 1. Configuration Example

| PIN NAME   | RESISTOR   | VALUE   | DESCRIPTION                                                                                                                     |
|------------|------------|---------|---------------------------------------------------------------------------------------------------------------------------------|
| CONFIG1    | R2         | 0Ω      | Spread Spectrum: ON; Sync as Input; fSW = 2.2MHz Note: If Sync is an Input, tie SYNC to IN or GND if no external clock is used. |
| CONFIG2    | R4         | 15.4kΩ  | GAIN[3:0] = 1100                                                                                                                |
| CONFIG3    | R3         | 3.92kΩ  | GAIN[4] = 1; ILIM = 3.04A (min) Note: Gain programmed with this configuration is 28.                                            |

│

## MAX16984A Evaluation Kit

The switch SW1 allows the user to set the voltage on the HVEN, ENBUCK, SYNC, and DATA\_MODE pins. Setting a switch to the ON position ties the connected pin high and setting a switch to the OFF position ties the pin to

## Table 2. External Header

|   J1 PIN | NAME      | DESCRIPTION                                       |
|----------|-----------|---------------------------------------------------|
|        1 | IN        | 3.3V supply for IN (input/output)                 |
|        2 | SYNC      | Buck regulator synchronization pin (input/output) |
|        3 | DATA_MODE | Charge detection configuration pin (input)        |
|        4 | HVEN      | IC enable (active-high input)                     |
|        5 | ENBUCK    | DC-DC enable (active-high input)                  |
|        6 | FAULTB    | Fault indicator (active-low open-drain output)    |
|        7 | ATTACHB   | Attach output (active-low open-drain output)      |
|        8 | GND       | EV kit ground                                     |
|        9 | CONFIG3   | Config 3 (input)                                  |
|       10 | CONFIG2   | Config 2 (input)                                  |
|       11 | GND       | EV kit ground                                     |
|       12 | GND       | EV kit ground                                     |

## Table 3. External Switch

| SW1 PIN   | POSITION                            | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|-----------|-------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HVEN      | 0                                   | Device disabled                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| HVEN      | 1                                   | Device enabled                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ENBUCK    | 0                                   | Buck output disabled                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ENBUCK    | 1                                   | Buck output enabled                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| SYNC      | 0                                   | SYNC configured as an input: DC-DC operates in forced pulse-width modulation (FPWM). SYNC configured as an output: DC-DC operates in FPWM. SYNC pin generates clock output for synchronization of other devices. If enabled, spread spectrum is also present on SYNC output to reduce electromagnetic inter - ference (EMI) of the device synchronized to MAX16984A. SYNC output is 180 ° out of phase with internal clock to further help reduce EMI. |
| SYNC      | 0 with clock applied to SYNC via J1 | SYNC configured as an input: DC-DC operates in FPWM. MAX16984A can be synchronized to an external clock - for example, another MAX16984A. Spread spectrum is not applied to external clock from SYNC pin.                                                                                                                                                                                                                                              |
| SYNC      | 1                                   | SYNC configured as an input: DC-DC operates in skip mode with light/no-load, FPWM otherwise. Refer to MAX16984A data sheet for more information.                                                                                                                                                                                                                                                                                                       |
| DATA_MODE | 0                                   | High-Speed pass-through mode (SDP)                                                                                                                                                                                                                                                                                                                                                                                                                     |
| DATA_MODE | 1                                   | Auto-CDP mode                                                                                                                                                                                                                                                                                                                                                                                                                                          |

│

Evaluates: MAX16984A

ground through a 100kΩ pull-down resistor. To externally control these pins through the header J1, set all switches to the OFF position. This leaves the pin connected to the header with a pull-down resistor.

## Basic Functionality

Connect  a  battery  voltage  supply  between  VBAT\_FLT and  GND  test  loops.  The  3.3V  IN  pin  is  self-powered on  the  MAX16984A  EV  kit  by  a  3.3V  linear  regulator (MAX15006A). Setting the HVEN switch to ON pulls the HVEN pin to VBAT and enables the device. The ENBUCK pin  is  connected  to  the  upstream  USB  host  VBUS  and SW and must be high for the  DC-DC  converter  to  turn on.  The  charge  mode  can  be  configured  by  using  the DATA\_MODE switch or pin.

## Fault Diagnostics

The FAULT pin  is  designed  to  be  software  compatible with  Maxim  Type-A Automotive  USB  solutions.  See  the MAX16984A data sheet for all conditions that can trigger a FAULT event.

## IC Efficiency Measurement

The MAX16984A EV kit provides the ability to measure the  efficiency  of  the  MAX16984A  buck-converter  itself. This  method  decouples  the  losses  resulting  from  the output inductor, output capacitor and PCB traces and is accomplished  by  utilizing  two  test-points:  VBAT\_S  and LX\_FLT.  By  measuring  the  DC  voltages  at  these  test points, the input current and output (load) current, IC effi -ciency can be calculated:

<!-- formula-not-decoded -->

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX16984AEVKIT# | EV Kit |

#Denotes RoHS compliance.

## PCB Layout Guidelines

A good PCB layout is critical to proper system performance. The loop area of the DC/DC conversion circuitry must be minimized as much as possible. Place the input capacitor, power inductor, and output capacitor very close to the IC. Shorter traces should be prioritized over wider traces.

A  low-impedance  ground  connection  between  the  input and  output  capacitors  is  necessary  (route  through  the ground pour on the exposed pad). Connect the exposed pad to ground. Place multiple vias in the pad to connect to all other ground layers for proper heat dissipation. (Failure to do this can result in the IC repeatedly reaching thermal shutdown.) Use a single common ground with GND vias directly  adjacent  to  all  components  that  via  down  to  an adjacent  ground  plane.  High-frequency  return  currents flow directly under their corresponding traces.

USB traces must be routed as a 90Ω differential pair with an appropriate keep-out area. Avoid routing USB traces near  high-frequency  switching  nodes  or  other  sources of noise such as clocks. The length of the routing should be minimized and avoid 90 degree turns, excessive vias, and  RF  stubs.  MAX16984A  EV  kit  has  high-bandwidth data switches, see the IC data sheet for details on tuning recommendations.

## MAX16984A EV Kit Bill of Materials

|   QTY | REFERENCE                            | DESCRIPTION                                               | MANUFACTURER        | PART NUMBER          |
|-------|--------------------------------------|-----------------------------------------------------------|---------------------|----------------------|
|     1 | C1                                   | CERAMIC CAPACITOR (0402) 2200pF 50V 10% X7R               | TDK                 | C1005X7R1H222K050BA  |
|     1 | C2                                   | ALUMINUM-ELECTROLYTIC CAPACITOR 47UF 50V 20% -55C TO 105C | PANASONIC           | EEE-FK1H470P         |
|     6 | C3, C4, C12, C16, C18, C20           | CERAMIC CAPACITOR (0402) 0.1uF 50V 10% X7R                | TDK                 | CGA2B3X7R1H104K050BE |
|     1 | C5                                   | CERAMIC CAPACITOR (1206) 10UF 50V 10% X7R                 | TDK                 | CGA5L1X7R1H106K160AC |
|     1 | C6                                   | DNP                                                       |                     |                      |
|     1 | C7                                   | CERAMIC CAPACITOR (1210) 22UF 25V 10% X7R                 | MURATA              | GRM32ER71E226KE15    |
|     2 | C8, C17                              | CERAMIC CAPACITOR (0603) 2.2uF 16V 10% X7R                | MURATA              | GRM188Z71C225KE43    |
|     5 | C9-C11, C13, C14                     | DNP                                                       |                     |                      |
|     1 | C15                                  | CERAMIC CAPACITOR (0603) 1uF 16V 10% X7R                  | TDK                 | CGA3E1X7R1C105K080AC |
|     1 | D1                                   | SCHOTTKY BARRIER DIODE (SMB) 60V 3A -55C TO 125C          | DIODES INCORPORATED | B360B-13-F           |
|     1 | D2                                   | SCHOTTKY BARRIER DIODE (SOD-323) 30V 0.5A                 | DIODES INCORPORATED | B0530WS-7-F          |
|     1 | FB1                                  | FERRITE-BEAD (1206) 600R 25% 2.9A                         | MURATA              | BLM31KN601SH1        |
|     5 | GND_1, GND_2, USB_5V, VBAT, VBAT_FLT | TEST POINT                                                | KEYSTONE            | 5020                 |
|     1 | HOST_VBUS                            | ORANGE TEST POINT                                         | KEYSTONE            | 5003                 |
|     1 | J1                                   | HEADER 12-PINS                                            | SAMTEC              | TSW-112-07-G-S       |
|     1 | J2                                   | USB TYPE-A PLUG                                           | TE CONNECTIVITY     | 1734028-1            |
|     1 | J3                                   | USB TYPE-A RECEPTACLE                                     | ASSMANN             | AU-Y1006-R           |
|     6 | L1, L2, L4, L6, R2, R7               | RESISTOR (0402) 0R 0.2W                                   | VISHAY DALE         | CRCW04020000Z0EDHP   |
|     1 | L3                                   | DNP                                                       |                     |                      |
|     1 | L5                                   | INDUCTOR 1.5UH 20% 8.1A                                   | COILCRAFT           | XEL4030-152ME        |
|     1 | LX_FLT                               | WHITE TEST POINT                                          | KEYSTONE            | 5002                 |
|     1 | R1                                   | RESISTOR (0805) 0.033R 1% +/-50PPM/C 0.5W                 | SUSUMU CO LTD.      | KRL1220E-M-R033-F    |
|     1 | R3                                   | RESISTOR (0402) 3.92K 1% 0.063W                           | VISHAY DALE         | CRCW04023K92FK       |
|     1 | R4                                   | RESISTOR (0402) 15.4K 1% 0.1W                             | PANASONIC           | ERJ-2RKF1542         |
|     2 | R8, R17                              | RESISTOR (0402) 10K 1% 0.063W                             | VISHAY DALE         | CRCW040210K0FK       |
|     6 | R9-R14                               | RESISTOR (0402) 100K 5% 0.063W                            | VISHAY DALE         | CRCW0402100KJN       |
|     2 | R15, R16                             | DNP                                                       |                     |                      |
|     1 | SW1                                  | QUAD SPST HALF-PITCH DIP SWITCH                           | C&K COMPONENTS      | TDA04H0SB1           |
|     1 | U1                                   | MAX16984AATJB/V+                                          | MAXIM               | MAX16984AATJB/V+     |
|     1 | U2                                   | ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR              | MAXIM               | MAX15006AATT+        |
|     1 | VBAT_S                               | YELLOW TEST POINT                                         | KEYSTONE            | 5004                 |
|     1 | PCB                                  | MAX16984A revA                                            | MAXIM               | MAX16984A            |
|     1 | PACK-OUT                             | 2m USB-A Extension Cable                                  | Qualtek             | 3021057-02M          |
|     1 | PACK-OUT                             | USB-A Plug                                                | Kycon               | KUSBX-SMT2AP5S-B     |
|     2 | PACK-OUT                             | 3.5R 10W 1% Resistor                                      | Vishay Dale         | RS0103R500FE12       |

Evaluates: MAX16984A

## MAX16984A EV Kit Schematic

<!-- image -->

## MAX16984A EV Kit PCB Layout Diagrams

MAX16984A EV Kit PCB Layout-Top View

<!-- image -->

MAX16984A EV Kit PCB Layout-Layer 2

<!-- image -->

MAX16984A EV Kit PCB Layout-Layer 3

<!-- image -->

MAX16984A EV Kit PCB Layout-Bottom View

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------|-----------------|
|                 0 | 4/20            | Initial release                  | -               |
|                 1 | 12/20           | Update for SYNC pin logic change | 4               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

Evaluates: MAX16984A

│