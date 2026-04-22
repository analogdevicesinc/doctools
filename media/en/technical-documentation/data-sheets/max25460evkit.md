<!-- lastmod 2023-06-30 -->
<!-- image -->

Evaluates: MAX25460

## General Description

This evaluation kit (EV kit) demonstrates the MAX25460 automotive  USB  Type-A  controller  with  1GHz  BW  USB 2.0  D+/D-  protection  switches. The  MAX25460  features a  high-current,  high-efficiency,  host-charger  with  portdetection circuitry adhering to the USB 2.0 and the USBIF BC1.2 battery charging specifications. The step-down DC-DC  converter  operates  from  up  to  28V  continuous and  protects  against  load  dump  transients  up  to  40V. The converter switches at 2.2MHz and can deliver 1.5A continuously and 2.4A for up to 1.1ms. The MAX25460 integrates high-side current sensing and circuitry to automatically adjust the USB voltage to compensate for voltage drops in long automotive cables..

The EV kit is populated with a MAX25460ATGA/V+ product  variant  for  2.2MHz  operation.  The  high-speed  data switches of the MAX25460 generally do not require farend eye tuning, so the EV kit is populated with 0Ω resis -tors in place of the LC turning circuits.

The EV kit allows evaluation of the following MAX25460 capabilities:

- Adjustable buck converter precision current limit for better system performance.
- Adjustable current limit debounce timer for overcurrent testing and system flexibility.
- Adjustable gain settings for cable compensation for low-cost captive cables up to 474mΩ.
- Electromagnetic interference (EMI) mitigation using spread spectrum switching.
- Detailed interrupt and fault status providing multilayer protection and recovery to improve system decisions during faults.

©

## MAX25460 Evaluation Kit

## Features

- Configurable Charge Detection Modes ·  USB-IF BC1.2 SDP, CDP
- Automatic USB Voltage Adjustment by Integrated DC-DC Converter
- Proven PCB Layout
- Fully Assembled and Tested

## MAX25460 Evaluation Kit Board

<!-- image -->

Ordering Information appears at end of data sheet.

owners.

## MAX25460 Evaluation Kit

## Quick Start

## Required Equipment

- MAX25460 EV kit
- Windows®-based PC
- Two-meter USB-A extension cable
- USB-A to Micro-B cable
- 3.5Ω 10W resistor or electronic load
- USB Type-A plug
- 14V/2A DC power supply or car battery (VBAT)
- Digital voltmeter
- USB Type-A flash drive

The following  procedure  demonstrates  the  MAX25460's high-speed data switches and voltage adjustment capability.

## Procedure

## Initial Setup

The EV kit is fully assembled and tested. Follow the steps to set up the board for evaluation.

- 1) Install the MAX25460 GUI. See the MAX25460 GUI section for additional information.
- 2) Verify that SW1 switch is set to HVEN=L, ENBUCK=L, SYNC=L, and DATA\_MODE=L.
- 3) Connect the EV kit to the PC with USB Micro-B and USB-A extension cables (see Figure 1).

Figure 1. EV Kit Setup

<!-- image -->

Evaluates: MAX25460

- 4) Verify that the EV kit is recognized in the Windows Device Manager as USB input device.
2. MicrosoftInputConfigurationDevice
3. SynapticsHID-CompliantTouchpadDevice

USBInputDevice

USBInputDevice

- USBInputDevice
- 5) Set the VBAT power supply to 14V output, 2A current limit. Turn the output off. Connect negative lead to the 'GND\_1' test loop on the EV kit. Connect positive lead to 'VBAT\_FLT' test loop on the EV kit.
- 6) Plug a USB flash drive into the EV kit USB connector (J3).
- 7) Turn on the VBAT power supply output.
- 8) Start the MAX25460 GUI. Look at the message bar on the left of the GUI to verify that the EV kit is detected (see Figure 2).

## High-Speed Data Switches

- 9) In the GUI, click ENBUCK PIN and Configuration Complete checkboxes.
- 10) Check that the USB flash drive is recognized on the host computer by opening the directory. This verifies the high-speed data switches are operating properly. See Figure 3.
- 11) Unplug the flash drive from the EV kit.

│

Evaluates: MAX25460

Figure 2. MAX25460 GUI Startup

<!-- image -->

Figure 3. USB Flash Drive Recognized

<!-- image -->

## MAX25460 Evaluation Kit

## USB BC1.2 CDP Charging

- 12) In the GUI, set Cable Comp Gain to 108mΩ and set Charge Detection to Auto\_CDP.
- 13)  Connect a USB cable and a BC1.2 CDP-compatible smartphone.
- 14)  Check that the smartphone is recognized on the host computer and that it is charging.
- 15)  V BUS  current can be checked by measuring the voltage drop across the current-sense resistor R1.
- 16)  Unplug the smartphone and 2m USB-A extension cable from the EV kit.

## Cable Compensation

- 17)  Connect the 2m USB-A extension cable to the EV kit downstream USB connector (J3).
- 18)  Connect the Type-A plug to the other end of the extension cable (see Figure 4).
- 19)  Measure the V BUS  voltage at the end of cable, it should be around 5.15V.
- Note: This is the voltage at the portable device.
- 20)  Connect the E-load or resistor bank to the USB plug's Ground and V BUS  pins.
- 21)  Adjust the Cable Comp Gain in the GUI until the voltage at the far-end reaches 5.15V.
- 22)  The voltage at the far-end of the 2m cable is regulated to approximately 5.15V regardless of the load current.

Figure 4. EV Kit Setup for Cable Compensation

<!-- image -->

## Evaluates: MAX25460

│

## MAX25460 Evaluation Kit

## Detailed Description

The  MAX25460  EV  kit  comes  fully  assembled,  tested, and installed with MAX25460ATGA/V+. The stand-alone variant can also be used on this EV kit by changing the IC and configuration resistors. See Table 1 for an example of stand-alone configuration. Refer to the MAX25460 data sheet for further details on configuration resistors.

When  R6  and  R7  are  changed  per  Table  1,  3.3V  is sourced  from  the  on-board  LDO  and  the  USB  Micro-B connection to the Pico board should not be used.

## Table 1. Stand-Alone Configuration Example

| PIN NAME   | RESISTOR   | VALUE   | DESCRIPTION                                                                          |
|------------|------------|---------|--------------------------------------------------------------------------------------|
| CONFIG1    | R2         | 0Ω      | Spread Spectrum: On; Sync as Input; Fsw = 2.2MHz                                     |
| CONFIG2    | R4         | 14.7kΩ  | GAIN[3:0] = 1100                                                                     |
| CONFIG3    | R3         | 2.26kΩ  | GAIN[4] = 1; ILIM = 1.62A (min) Note: Gain programmed with this configuration is 28. |
| SDA/SCL    | R15/R16    | DNP     | Remove SDA/SCL pull-ups.                                                             |
| 3V3        | R6         | DNP     | Jumper option, 3.3V from Pico interface board                                        |
| 3V3        | R7         | 0Ω      | Jumper option, 3.3V from MAX15006 LDO                                                |

## Table 2. External Header

|   J1 PIN | NAME          | DESCRIPTION                                                                                            |
|----------|---------------|--------------------------------------------------------------------------------------------------------|
|        1 | IN            | 3.3V supply for IN (input/output)                                                                      |
|        2 | SYNC          | Buck regulator synchronization pin (input/output)                                                      |
|        3 | DATA_MODE     | Charge detection configuration pin (input)                                                             |
|        4 | HVEN          | IC enable (active high, input)                                                                         |
|        5 | ENBUCK        | DC-DC enable (active high, input)                                                                      |
|        6 | FAULT         | Fault indicator (active low, open-drain, output)                                                       |
|        7 | INT (ATTACH)  | I 2 C interrupt output (active low, open-drain) Standalone: USB attach output (active low, open-drain) |
|        8 | BIAS          | 4.7V LDO output                                                                                        |
|        9 | SCL (CONFIG3) | I 2 C: clock (input) Standalone: CONFIG3 (input)                                                       |
|       10 | SDA (CONFIG2) | I 2 C: data (input/output) Standalone: CONFIG2 (input)                                                 |
|       11 | GND           | EV kit ground                                                                                          |
|       12 | GND           | EV kit ground                                                                                          |

## EV Kit Interface

Header J1 includes input and output test points for controlling the IC and evaluating its functionality. Table 2 lists the individual pins and their functions.

Switch  SW1  allows  the  user  to  set  the  voltage  on  the HVEN,  ENBUCK,  SYNC,  and  DATA\_MODE  pins  (see Table 3). Setting a switch to the ON position ties the connected pin high. Setting a switch to the OFF position ties the pin to ground through a pull-down resistor. To externally control these pins through the header J1 or the PC GUI, set all switches to the OFF position.

Evaluates: MAX25460

## Table 3. External Switch

| SW1 PIN   | POSITION                                | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HVEN      | 0                                       | Device disabled                                                                                                                                                                                                                                                                                                                                                                                                                           |
| HVEN      | 1                                       | Device enabled                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ENBUCK    | 0                                       | Buck output disabled                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ENBUCK    | 1                                       | Buck output enabled                                                                                                                                                                                                                                                                                                                                                                                                                       |
| SYNC      | 0                                       | SYNC configured as an input: DC-DC operates in FPWM. Refer to the MAX25460 data sheet for more information. SYNC configured as an output: DC-DC operates in FPWM. SYNC pin generates clock output for synchronization of other devices. If enabled, spread spectrum is also present on SYNC output to reduce EMI of the device synchronized to MAX25460. SYNC output is 180° out of phase with internal clock to further help reduce EMI. |
| SYNC      | 0 with clock applied to SYNC through J1 | SYNC configured as an input: DC-DC operates in FPWM. The MAX25460 can be synchronized to an external clock - for example, another MAX25460. Spread spectrum is not applied to external clock from SYNC pin.                                                                                                                                                                                                                               |
| SYNC      | 1                                       | SYNC configured as an input: DC-DC operates in skip mode with light/no-load, FPWM otherwise.                                                                                                                                                                                                                                                                                                                                              |
| DATA_MODE | 0                                       | High-speed pass-through mode (SDP)                                                                                                                                                                                                                                                                                                                                                                                                        |
| DATA_MODE | 1                                       | Auto-CDP mode                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Basic Functionality

Connect  a  9V  to  16V  power  source  (battery  supply) between VBAT\_FLT and GND test loops and USB Micro-B to a host PC. Connecting the Micro-B to a PC pulls the HVEN pin to 3.3V and enables the device. The ENBUCK pin is driven by the GUI and SW1 and must be high for the DC-DC converter to turn on. The charge mode can be configured through I 2 C or using the DATA\_MODE switch or pin. If the DATA\_MODE pin is high, it overrides the current I 2 C register setting.

## Fault Diagnostics

The FAULT pin  is  software  compatible  with ADI  Type-A Automotive  USB  solutions.  More  advanced  diagnostics can be performed using the I 2 C bus and the INT pin. The IRQ bits  have  an  associated  IRQ\_MASK  bit.  When  the IRQ\_MASK bit is set to 1, the  INT  pin  asserts  and  deasserts following the IRQ bit. All IRQ bits clear on read. IRQ bit de-assertion is controlled by the IRQ\_AUTOCLR

bit. When IRQ\_AUTOCLR = 0 (default), the error bit stays asserted until the register is read even if the fault condition is no longer present. When IRQ\_AUTOCLR = 1, the IRQ  bit  de-asserts  without  a  read  as  soon  as  the  fault criteria are no longer met. The EV kit GUI uses a polling mechanism to read all MAX25460 registers. A read is initiated when the Read All Registers button is clicked, or periodically if auto read is enabled. Due to the auto read polling  mechanism, when IRQ\_AUTOCLR = 1 it is possible  that  the  GUI  can  miss IRQ bit assertions because the signal de-asserts too quickly after a fault.

## PCB Layout Guidelines

A  good  PCB  layout  is  critical  to  proper  system  performance. The loop area of the DC/DC conversion circuitry must be minimized as much as possible. Place the input capacitor, power inductor, and output capacitor very close to the IC. Shorter traces should be prioritized over wider traces.

Evaluates: MAX25460

## MAX25460 Evaluation Kit

A  low-impedance  ground  connection  between  the  input and  output  capacitors  is  required  for  reliable  operation. Make  this  connection  through  the  ground  pour  on  the exposed pad. Place multiple vias in the pad to connect to  all  other  ground  layers  to  reduce  thermal  resistance. Inadequate  thermal  performance  may  cause  the  IC  to cycle in and out of thermal shutdown. Use a single common ground with GND vias directly adjacent to all components that connect down to an adjacent ground plane. This arrangement enables high frequency return currents to flow directly under their respective source traces.

The USB traces must be routed as a 90Ω differential pair with  an  appropriate  keep-out  area.  Avoid  routing  USB traces  near  high  frequency  switching  nodes  or  other sources of noise such as clocks. The length of the routing should be minimized and avoid 90° turns, excessive vias, and RF stubs. The MAX25460 has high-bandwidth data switches. See the IC data sheet for details on tuning recommendations.

See the Layout Considerations section in the MAX25460 data sheet for additional information.

<!-- image -->

│

## MAX25460 GUI

The latest GUI can be downloaded from the MAX25460 EV  kit  webpage: https://www.analog.com/en/designcenter/evaluation-hardware-and-software/evaluationboards-kits/max25460evkit.html

The GUI is divided into sections to allow the user easy access to all settings and direct register read/write.

- 1) Direct read/write access to all registers
- 2) Basic setup parameters for the buck converter, cable compensation, and USB data switch mode
- 3) Interrupt mask and interrupt flag indicators
- 4) Control for MAX25460 hardware I/O pins

All GUI setting changes immediately affect the MAX25460.

Auto-polling of MAX25460 registers by the GUI can also be enabled in the GUI Configuration section.

Evaluates: MAX25460

## MAX25460 Evaluation Kit

## Pico Board Firmware Update

The Pico Board comes preprogrammed, however it may be necessary to update the firmware as new versions are published on the EV kit webpage.

- 1) Perform the Initial Setup steps to start the GUI.
- 2) Check the Pico Board firmware version.

<!-- image -->

The Pico Board firmware version follows  a Year/Month/ Day format from when it is released.

- 3) If the firmware image from the EV kit webpage has a later date, follow the Programming Procedure to update the Pico Board's firmware to the latest version. This update requires the MAX25460 EV kit, a USB Micro-B cable, and a PC with USB Write access.

## Programming Procedure

- 1) Download the latest Pico Board firmware on the EV kit webpage (.bin file).
- 2) Connect the USB Micro-B cable to the Pico Board.
- 3) While holding the button down on the Pico Board, plug the USB Micro-B cable into the PC. The button is small, it may be helpful to use a pencil eraser, stylus, or any other non-metallic tool to press the button.

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX25460EVKIT# | EV Kit |

# Denotes RoHS compliance.

Evaluates: MAX25460

<!-- image -->

- 4) Continue holding the button down for at least 3 seconds after making the connection.
- 5) A new drive called MAINTENANCE appears on the PC if Step 4 is successful.
- If the MAINTENANCE drive does not appear, disconnect the USB cable and repeat steps 3 to 5.
- 6) Drag and drop the .bin file onto the MAINTENANCE drive. The Pico Board LED blinks during programming.
- 7) Wait for the blinking to stop, which takes about 5 seconds.
- 8) When all is finished, launch the GUI and make sure that the Pico Board is detected with the expected firmware version.

<!-- image -->

│

## MAX25460 EV Kit Bill of Materials

|   QTY | REFERENCE                            | DESCRIPTION                                  | PART NUMBER        | MANUFACTURER        |
|-------|--------------------------------------|----------------------------------------------|--------------------|---------------------|
|     1 | C1                                   | CERAMIC CAPACITOR (0402) 2200PF 10% 50V X7R  | GRM155R71H222KA01  | MURATA              |
|     1 | C2                                   | ALUMINUM-ELECTROLYTIC CAPACITOR 22UF 20% 50V | EEE-FT1H220AR      | PANASONIC           |
|     6 | C3, C4, C12, C16, C18, C20           | CERAMIC CAPACITOR (0402) 0.1UF 10% 50V X7R   | GRM155R71H104KE14  | MURATA              |
|     1 | C5                                   | CERAMIC CAPACITOR (1210) 4.7UF 10% 50V X7R   | GRM32ER71H475KA88  | MURATA              |
|     1 | C7                                   | CERAMIC CAPACITOR (1210) 22UF 10% 25V X7R    | GRM32ER71E226KE15  | MURATA              |
|     2 | C8, C17                              | CERAMIC CAPACITOR (0603) 2.2UF 10% 16V X7R   | GRM188Z71C225KE43  | MURATA              |
|     1 | C15                                  | CERAMIC CAPACITOR (0603) 1UF 10% 16V X7R     | C0603C105K4RAC     | KEMET               |
|     2 | D1, D3                               | SCHOTTKY BARRIER DIODE (SMB) 60V 3A          | B360B-13-F         | DIODES INCORPORATED |
|     1 | D2                                   | SCHOTTKY BARRIER DIODE (SOD-323) 30V 0.5A    | B0530WS-7-F        | DIODES INCORPORATED |
|     1 | DS1                                  | GREEN WATER CLEAR LED                        | APT1608LZGCK       | KINGBRIGHT          |
|     2 | FB1, FB2                             | FERRITE-BEAD (0805) 60R 25% 3.5A             | BLM21PG600SN1      | MURATA              |
|     5 | GND_1, GND_2, USB_5V, VBAT, VBAT_FLT | TEST POINT                                   |                    | 5020 KEYSTONE       |
|     1 | HOST_VBUS                            | TEST POINT                                   | 5003               | KEYSTONE            |
|     1 | J1                                   | HEADER 12-PINS                               | TSW-112-07-G-S     | SAMTEC              |
|     1 | J2                                   | USB TYPE-A PLUG                              | 1734028-1          | TE CONNECTIVITY     |
|     1 | J3                                   | USB TYPE-A RECEPTACLE                        | AU-Y1006-R         | ASSMANN             |
|     1 | L5                                   | INDUCTOR 1.5UH 20% 2.7A                      | DFE252012F-1R5M    | MURATA              |
|     1 | MOD1                                 | MAX32625PICO MODULE                          | MAX32625PICO       | MAXIM               |
|     1 | R1                                   | RESISTOR (0805) 0.033R 1% +/-50PPM/C 0.5W    | KRL1220E-M-R033-F  | SUSUMU CO LTD.      |
|     6 | L1, L2, L4, L6, R2, R6               | RESISTOR (0402) 0R 0.2W                      | CRCW04020000Z0EDHP | VISHAY DALE         |
|     4 | R8-R11                               | RESISTOR (0402) 2K 5% 0.063W                 | CRCW04022K00JN     | VISHAY DALE         |
|     4 | R12, R17, R18, R21                   | RESISTOR (0402) 1K 5% 0.063W                 | CRCW04021K00JK     | VISHAY DALE         |
|     2 | R13, R14                             | RESISTOR (0402) 100K 5% 0.063W               | CRCW0402100KJN     | VISHAY DALE         |
|     2 | R15, R16                             | RESISTOR (0402) 2.2K 5% 0.063W               | CRCW04022K20JN     | VISHAY DALE         |
|     1 | R20                                  | RESISTOR (0402) 51K 5% 0.063W                | CRCW040251K0JN     | VISHAY              |
|     1 | SW1                                  | QUAD SPST HALF-PITCH DIP SWITCH              | TDA04H0SB1         | C&K COMPONENTS      |
|     1 | U1                                   | MAX25460ATGA/V+                              | MAX25460ATGA/V+    | ANALOG DEVICES      |
|     1 | U2                                   | ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR | MAX15006AATT+      | ANALOG DEVICES      |
|     1 | PCB                                  | MAX25460 REVC                                | MAX25460 REVC      | ANALOG DEVICES      |

Evaluates: MAX25460

## MAX25460 Evaluation Kit

## MAX25460 EV Kit Schematic

<!-- image -->

## MAX25460 Evaluation Kit

## MAX25460 EV Kit Layout

MAX25460 EV Kit PCB Layout-Top View

<!-- image -->

MAX25460 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX25460 EV Kit PCB Layout-Layer 3

<!-- image -->

MAX25460 EV Kit PCB Layout-Bottom View

<!-- image -->

│

## MAX25460 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/23            | Initial release | -               |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX25460