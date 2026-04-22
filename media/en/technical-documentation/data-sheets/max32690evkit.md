<!-- lastmod 2023-03-31 -->
<!-- image -->

Evaluates: MAX32690

## General Description

The  MAX32690  evaluation  kit  (EV  kit)  provides  a  platform  for  evaluating  the  capabilities  of  the  MAX32690 microcontroller,  which  is  an  advanced  system-on-chip (SoC). It features an Arm ®  Cortex ® -M4F CPU for efficient computation  of  complex  functions  and  algorithms,  and the latest generation Bluetooth ®  5 Low Energy (Bluetooth LE)  radio  designed  for  wearable  and  hearable  fitness devices, portable and wearable wireless medical devices, industrial  sensors/networks, internet of things (IoT), and asset tracking.

## MAX32690 EV Kit Contents

- MAX32690 EV Kit Containing a MAX32690 with a Preprogrammed Demo
- Bluetooth Hinged Whip Antenna
- MAX32625PICO Debugger with Cables
- Two USB Standard-A to Micro-B Cables
- Extra Shunts

Ordering Information appears at end of data sheet.

©

Click here to ask an associate for production status of specific part numbers.

## MAX32690 Evaluation Kit

## Benefits and Features

- Bluetooth SMA Connector with a Hinged 2.4GHz Whip Antenna
- 3-Pin Terminal Block for CAN Bus 2.0
- Selectable On-Board High-Precision Voltage Reference
- On-Board HyperRAM
- Stereo Audio Codec with Line-In and Line-Out 3.5mm Jacks
- 128 x 128 (1.45in) Color TFT Display
- USB 2.0 Micro-B Interface to the MAX32690
- USB 2.0 Micro-B to Serial UART
- Board Power Provided by either USB Port
- Jumpers to Enable Optional Pull-Up Resistors on I 2 C port
- All GPIOs Signals Accessed through 0.1in Headers
- Three Analog Inputs Accessed through 0.1in Headers with Optional Filtering
- SWD 10-Pin Header
- On-Board 3.3V, 1.8V, and 1.1V LDO Regulators
- Individual Power Measurement on All IC Rails through Jumpers
- Two General-Purpose LEDs and One GeneralPurpose Push Button Switch

Arm and Cortex are registered trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

The Bluetooth word mark and logos are registered trademarks owned by Bluetooth SIG, Inc., and any use of such marks by Analog Devices is under license.

One  Analog  Way,  Wilmington, MA  0187 U.SA. | Tel:  781.329.4700      |      © 2022  Analog  Devices,  Inc.  All  rights  reserved. 2022 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX32690 EV Kit Board

Figure 1. MAX32690 EV Kit-Top-No Shield Cap

<!-- image -->

Figure 2. MAX32690 EV Kit-Bottom

<!-- image -->

+

│

## MAX32690 Evaluation Kit

## Quick Start

## Required Equipment

- MAX32690 EV Kit Containing a MAX32690 with a Preprogrammed Demo
- One USB Standard-A to Micro-B Cable

## Running the Preprogrammed Demo

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) While observing safe ESD practices, carefully remove the MAX32690 EV kit board out of its packaging. Inspect the board to ensure that no damage occurred during shipment. Shunts are preinstalled prior to testing and packaging.
- 2) The MAX32690 is preprogrammed with demo code. To run the demo, power up the board by plugging in the provided USB cable to connector CN2. Connect the other end of the USB cable to a computer or power adapter. Verify that the 4V5 blue LED (D5) and the green LEDs 3V3 (DS1), 1V8 (DS3), 1V1 (DS4), and BLE LDO (DS5) LEDs are illuminated, indicating that each of these voltage rails are powered on.
- 3) Once power is applied to the board, the demo automatically starts and begins flashing LED D1. This indicates that the microcontroller is executing code and the simple demo is running as expected.

Now  that  you  have  successfully  executed  the  preprogrammed  demo,  the  next  step  is  to  install  the Maxim Micros SDK to  compile/build  and  run  some  of  the  provided examples.

## Installing and Running the Maxim Micros SDK

Once  the  demo  runs  as  expected,  the  next  step  is  to download and run the Maxim Micros SDK installer  for your  preferred  operating  system.  The Maxim  Micros SDK contains everything needed to evaluate and develop

Evaluates: MAX32690

code  for  the  supported  microcontrollers,  including:  the toolchain,  tools,  utilities,  drivers,  documentation,  microcontroller  firmware,  and  example  code.  The Maxim Micros SDK installer  is  located  on  the  EV  kit's  product webpage. Once the installer runs, the user sees all the toolchain components and microcontroller firmware packages which are installed, unless deselected by the user.

Note: When  selecting  your  target  microcontroller,  be aware that only the first part number in the sequence is shown (see Figure 3).

For example, MAX32665 Resources is the correct selection for either the MAX32665 or the MAX32666. Similarly, MAX32650 Resources is the correct selection for either the MAX32650, MAX32651, or the MAX32652.

Figure 3. Select Components Window

<!-- image -->

│

## MAX32690 Evaluation Kit

Once the installation completes, assuming that the default toolchain  components  are  installed,  the  user  can  build and run the included examples to exercise various peripherals.  The  documentation  for  the  SDK  is  found  in  the Documentation folder located in the installation directory as shown in Figure 4. Find and double-click index.htm l to proceed.

As shown in Figure 5, a Maxim SDK Documentation window then appears, which contains a list of the currently

Figure 4. Documentation Folder

<!-- image -->

Evaluates: MAX32690

supported  devices.  Click  one  of  the  devices  to  see  the documentation for that microcontroller.

Each  microcontroller  selection  contains  toolchain  documentation as well as documentation for each of the provided example programs as shown in Figure 6.

Figure 5. Maxim SDK Documentation Window

<!-- image -->

Figure 6. Example Applications Window

<!-- image -->

│

## Launching Eclipse

When launching Eclipse, it is important to avoid browsing the installation folder and running the Eclipse executable directly.  Instead,  use eclipse.bat (Microsoft  Windows), eclipse.sh (Linux), or run\_eclipse.sh (MacOS) to launch Eclipse. These scripts properly configure the environment prior to launching Eclipse. For the Microsoft Windows version,  use  the Eclipse MaximSDK shortcut  found  in  the Maxim Integrated SDK folder in the Windows Start menu.

## MAX32625PICO Debugger

A  MAX32625PICO  debugger  is  provided  for  programming  and  debugging  the  target  microcontroller  through the  SWD  interface.  Furthermore,  the  MAX32625PICO also serves as a UART bridge, which provides serial terminal functionality without the need of an additional USB cable. For the board configuration details, see the UART Interfaces section.

This kit includes a USB  cable  for  connecting  the MAX32625PICO  debugger  to  a  PC  (with  Eclipse  and the SDK installed) and a ribbon cable for connecting the MAX32625PICO debugger to J3 of the MAX32690 EV kit.

For more detailed information about the MAX32625PICO, refer to the MAX32625PICO data sheet.

## Detailed Description of Hardware

## Power Supply

The EV kit is powered by +5V through VBUS on either of the USB Micro-B connectors, CN1 or CN2, which source the  on-board  low  dropout  (LDO)  regulators.  When  the board is powered from the USB cable through CN2, blue LED 4V5 (D5), and green LEDs 3V3 (DS1), 1V8 (DS3), 1V1 (DS4), and BLE LDO (DS5) illuminate. When powered through CN1, all the LEDs mentioned in addition to green LED VDDB (DS2) illuminate. Power may be applied to the board with the switch (SW3) in either position.

## Current Monitoring

Two pin jumpers are provided on all IC power rails for individual  current  measurements.  The  jumpers  are  VDD3A EN (JP12), VDDIOH EN (JP13), VDDB EN (JP14), VDDA EN (JP15), VDDIO EN (JP16), VCORE EN (JP17), and BLE LDO EN (JP18).

## Low-Power Current Measurements

To accurately achieve the low-power current values, the EV kit needs to be configured such that no outside influence (that is, pull-ups, external clock, debugger connector, etc.) causes a current source or sink on any GPIO.

For these measurements, the board needs to be configured as follows:

- 1) Remove shunts at JP1 and JP3 through JP10.
- 2) Remove resistor R77.
- 3) Unplug the debugger from the SWD connector.

## Bluetooth 5.2 Interface

A SMA connector (J1) is provided to attach the included Bluetooth 2.4GHz hinged whip antenna.

## Bluetooth RF Shielding

A  metal  enclosure  (HS1)  is  provided  on  the  kit  for  the mitigation of spurious RF emissions from the MAX32690. An enclosure may be necessary for EMC compliance in certain jurisdictions.

## CAN Bus 2.0

The 3-screw lug terminal block (JH8) allows for connection to a CAN communications bus through a transceiver LTC2875HS8 (U6).

## Color TFT LCD Display

The EV kit provides a color 1.4in 128 x 128 pixel TFT with an integrated TFT controller. Current builds of the EV kit include the Crystalfontz ®  CFAF128128B1-0145T display. However, due to availability  issues,  future  EV  kit  builds may include a different display model or vendor.

The  selected  TFT  supports  a  SPI  interface  for  operating  the  display.  Since  the  EV  kit  design  assigns  the MAX32690's available SPI pins to the Audio Codec, the TFT's SPI pins have been connected to general-purpose IO  pins  instead.  Firmware  needs  to  mimic  the  required SPI  signals  on  these  IO  pins  by  setting,  clearing,  and reading  the  IO  pins  directly  (that  is,  bit-banging).  The Maxim  Micros  SDK provides  example  code  that  exercises the TFT display.

## Audio Interface

The  MAX9867  audio  codec  interfaces  to  the  microcontroller  through  its  I 2 C  and  I 2 S  (PCM)  ports.  Line-in  and line-out  3.5mm  jacks  are  provided  for  audio  access.  To enable the I2C2C port for the audio codec, jumpers JP9 and JP10 need to be configured in the 2-3 position.

## Clocking

The crystals provide a time base for the two internal oscillators. A  32.768kHz  crystal  (Y1)  is  the  clock  source  for real-time  clock  (RTC)  operations  and  a  32MHz  crystal (Y2) is the clock source for digital logic and peripherals.

## External Voltage Reference (VREF)

The  microcontroller's  analog-to-digital  converter  (ADC) selects  the  internal  reference  by  default.  For  critical applications, an external precision voltage reference can be connected to the VREF pin. To demonstrate this functionality,  this  EV  kit  includes  a  low-noise,  high-precision MAX6071 voltage reference (U2). Its output voltage connects to VREF through the jumper JP1. When attempting to use this external reference, make sure JP1 has a shunt installed.  Furthermore,  user  software  needs  to  properly set the ADC External Reference Select bit. For more details, refer to the ADC chapter in the device user guide.

## Serial Wire Debug (SWD)

An Arm debug access port  (DAP)  provides  an  external interface  for  debugging  during  application  development. The DAP is a standard Arm CoreSight™ serial wire debug port  and  uses  a  2-pin  serial  interface  (SWDCLK  and SWDIO).  Logic  levels  are  set  to  VDDIO  (1V8). Access is through a 10-pin header (J3). In addition, LPUART0B port can be accessed through J3 by installing the proper shunts on JH6. For more details, see the UART Interfaces section.

## UART Interfaces

A  FTDI  USB-to-UART  bridge  IC,  FT231X,  allows  for access to the IC's UART2A port through the USB Micro-B connector,  CN2. The  USB-to-UART  bridge  can  be  connected  to  the  IC's  UART2A  with  the  jumpers  JP7  (Rx), JP8 (Tx), JP9 (CTS) and JP10 (RTS). Virtual COM port drivers  and  guides  for  installing  Windows ®   drivers  are available at the FTDI website.

## Evaluates: MAX32690

LPUART0B  port  can  be  accessed  through  the  SWD 10-pin header (J3) when shunts are installed on JH6 in the 1-2 and 3-4 position. This allows SWD/JTAG debuggers to use one USB cable to provide both SWD/JTAG interfaces as well as serial data interface to a host.

## GPIO and Alternate Function Headers

The GPIO and alternate function signals from the microcontroller  can  be  accessed through the headers JH1 to JH6.  The  IC  provides  support  for  both  1.8V  and  3.3V peripherals through power rails VDDIO and VDDIOH. The GPIO voltages can be programmed on a pin-by-pin basis. For more details, refer to the microcontroller's user guide.

## Analog Header

The  three  analog  inputs  can  be  accessed  through  the header  JH6.  It  is  important  to  note  that  this  header  is unique  to  support  the  alternate  functionality  of  these pins.  Specifically,  pins  AIN0  and  AIN1  also  function  as LPUART0B\_RX  and  LPUART0B\_TX,  respectively.  For this reason, header JH6 is also listed in the jumper table. To  check  how  to  properly  configure  JH6  when  using LPUART0B instead of the analog inputs, see Table 1.

## I 2 C Access/Pull-Ups

The I2C0A port is accessed through the header JH4. The pull-up  resistors  are  enabled  through  the  jumpers  JP3 and JP4. The pull-up voltages of VDDIO or VDDIOH are selected by the jumper JP2.

The I2C2C port is accessed through the header JH2. This I 2 C  bus is also connected to the on-board audio codec. To remove the audio codec from the I2C2C bus, remove the shunts from the 2-3 position of JP9 and JP10. If these shunts are removed, external pull-ups for the I2C2C bus are required.

## Reset Push Button

The  push  button  SW1  momentarily  pulls  the  RSTN  pin low. The RSTN is internally pulled up to VDDIO. For more details, refer to the EC table for resistance value (R PU1  or RPU2) of the IC data sheet.

## Indicator LEDs

The  general-purpose  indicators  LED  D1  (red)  is  connected to GPIO P0.14 and LED D2 (green) is connected to  GPIO  P2.12. These  can  be  completely  disconnected from the microcontroller by removing the shunts from JP5 and JP6.

## GPIO Push Button Switch

The general-purpose push button (SW2) is connected to GPIO P4.0. If the push button is pressed, the attached port  pin  is  pulled  low.  It  is  important  to  note  that  P4.0 is  also  the  secure  bootloader  default  stimulus  pin.  For more details,  see  the Secure  Communications  Protocol Bootloader (SCPBL) section.

## Secure Communications Protocol Bootloader (SCPBL)

The EV kit contains a version of the MAX32690 without the secure bootloader, meaning no SCPBL.

The  secure  bootloader  provides  a  secure  channel  for device  configuration  and  program  loading.  The  EV  kit hardware can be used to evaluate the secure bootloader enabled versions of the MAX32690 (68-Pin TQFN); how-

## Evaluates: MAX32690

ever,  these  devices  must  be  procured  separately.  For exact  part  numbers,  refer  to  the  Ordering  Information table in the device data sheet. To use this kit to evaluate the secure bootloader enabled devices, replace the original MAX32690 with the new devices.

If using secure bootloader enabled devices, the SCPBL is activated by asserting the default stimulus pin (P4.0) by holding down SW2 and momentarily pressing the RSTN button (SW1). The secure bootloader then monitors the USB  interface  (CN1)  for  a  connection  request.  If  not detected, the LPUART0B interface is then monitored.

Note: To activate the bootloader, the stimulus pin (P4.0), the RSTN pin, and the communication interface pins signals are required.

The stimulus pin is pulled high internally by a weak pull up. If any additional connections are made to the stimulus pin, a stronger external pull up may be required to keep the device out of bootloader mode when powering up or coming out of reset.

For  more  details,  refer  to  the  Secure  Communications Protocol Bootloader section of the device user's guide.

Crystalfontz is a registered trademark of Crystalfontz America, Inc. Arm and CoreSight are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere. Windows is a registered trademark of Microsoft Corporation.

## MAX32690 Evaluation Kit

## Design Considerations

## PCB Layout Considerations

- 1) Place the 3rd harmonic filter components as close to the RF input of the device for best performance.
- 2) Keep the antenna as close to the device and shield as possible.
- 3) The RF input trace must be designed for a coplanar 50ohm characteristic impedance with adjacent layer (layer 2) reference GND plane.

Evaluates: MAX32690

- 4) A metal enclosure (Shield) to mitigate spurious RF emissions from the microcontroller may be necessary for EMC compliance in certain jurisdictions.
- 5) Place the two crystals as close to the device as possible.
- 6) Place decoupling capacitors as close as possible to the device.
- 7) HyperRAM is a point-to-point routed device. For detailed layout rules, refer to the memory device manufacturer.

MAX32690 RF PCB LayoutꟷTop Layer

<!-- image -->

│

Evaluates: MAX32690

MAX32690 RF PCB LayoutꟷLayer 2 GND

<!-- image -->

│

Evaluates: MAX32690

MAX32690 RF PCB LayoutꟷLayer 3 Power Plane

<!-- image -->

│

Evaluates: MAX32690

MAX32690 RF PCB LayoutꟷLayer 4 Bottom

<!-- image -->

## Table 1. MAX36290 EV Kit Jumper Settings

| JUMPER   | NAME        | SETIINGS   | DESCRIPTION                                                                                                                                        |
|----------|-------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| JP1      | VREF        | 1-2*       | Connects external voltage reference to VREF pin, must be enabled in software. For more details, see the External Voltage Reference (VREF) section. |
| JP1      | VREF        | Open       | Disconnects external voltage reference.                                                                                                            |
| JP2      | I2C0 PU     | 2-1        | Connects VDDIO (1V8) to I2C0 pull-up resistors.                                                                                                    |
| JP2      | I2C0 PU     | 2-3        | Connects VDDIOH (3V3) to I2C0 pull-up resistors.                                                                                                   |
| JP2      | I2C0 PU     | Open*      | Disconnects power from I2C0 pull-up resistors.                                                                                                     |
| JP3      | I2C0_SDA_PU | 1-2        | Connects pull-up to I2C0A_SDA (P2.7) sourced by I2C0 PU (JP2).                                                                                     |
| JP3      | I2C0_SDA_PU | Open*      | Disconnects pull-up from I2C0A_SDA (P2.7) sourced by I2C0 PU (JP2) .                                                                               |
| JP4      | I2C0_SCL_PU | 1-2        | Connects pull-up to I2C0A_SCL (P2.8) sourced by I2C0 PU (JP2).                                                                                     |
| JP4      | I2C0_SCL_PU | Open*      | Disconnects pull-up from I2C0A_SCL (P2.8) sourced by I2C0 PU (JP2).                                                                                |
| JP5      | LED0 EN     | 1-2*       | Connects red LED D1 to P0.14.                                                                                                                      |
| JP5      | LED0 EN     | Open       | Disconnects red LED D1 from P0.14.                                                                                                                 |

│

## Table 1. MAX36290 EV Kit Jumper Settings (continued)

| JUMPER   | NAME         | SETIINGS   | DESCRIPTION                                                                   |
|----------|--------------|------------|-------------------------------------------------------------------------------|
| JP6      | LED1 EN      | 1-2*       | Connects green LED D2 to P2.12.                                               |
| JP6      | LED1 EN      | Open       | Disconnects green LED D2 from P2.12.                                          |
| JP7      | RX EN        | 1-2*       | Connects the USB - serial bridge to UART2A_RX (P1.9).                         |
| JP7      | RX EN        | Open       | Disconnects the USB - serial bridge from UART2A_RX (P1.9).                    |
| JP8      | TX EN        | 1-2*       | Connects the USB - serial bridge to UART2A_TX (P1.10).                        |
| JP8      | TX EN        | Open       | Disconnects the USB - serial bridge from UART2A_TX (P1.10).                   |
| JP9      | P1_7 SEL     | 2-1*       | Connects the USB - serial bridge to UART2A_CTS (P1.7).                        |
| JP9      | P1_7 SEL     | 2-3        | Connects I2C2C_SDA (P1.7) to the codec.                                       |
| JP10     | P1_8 SEL     | 2-1*       | Connects the USB - serial bridge to UART2A_RTS (P1.8).                        |
| JP10     | P1_8 SEL     | 2-3        | Connects I2C2C_SCL (P1.8) to the codec.                                       |
| JP11     | V_AUX SEL    | 2-1*       | Connects V_AUX to 1V8.                                                        |
| JP11     | V_AUX SEL    | 2-3        | Connects V_AUX to 3V3.                                                        |
| JP12     | VDD3AEN      | 1-2*       | Connects 3V3 to VDD3A.                                                        |
| JP12     | VDD3AEN      | Open       | Disconnects 3V3 from VDD3A.                                                   |
| JP13     | VDDIOH EN    | 1-2*       | Connects 3V3 to VDDIOH.                                                       |
| JP13     | VDDIOH EN    | Open       | Disconnects 3V3 from VDDIOH.                                                  |
| JP14     | VDDB EN      | 1-2*       | Connects a 3V3 LDO sourced by USB_VBUS (CN1) to VDDB.                         |
| JP14     | VDDB EN      | Open       | Disconnects a 3V3 LDO sourced by USB_VBUS (CN1) from VDDB.                    |
| JP15     | VDDAEN       | 1-2*       | Connects 1V8 to VDDA.                                                         |
| JP15     | VDDAEN       | Open       | Disconnects 1V8 from VDDA.                                                    |
| JP16     | VDDIO EN     | 1-2*       | Connects 1V8 to VDDIO.                                                        |
| JP16     | VDDIO EN     | Open       | Disconnects 1V8 from VDDIO.                                                   |
| JP17     | VCORE EN     | 1-2*       | Connects 1V1 to VCORE.                                                        |
| JP17     | VCORE EN     | Open       | Disconnects 1V1 from VCORE.                                                   |
| JP18     | BLE LDO EN   | 1-2*       | Connects 1V4 to BLE_LDO.                                                      |
| JP18     | BLE LDO EN   | Open       | Disconnects 1V4 from BLE_LDO.                                                 |
| JH6      | ANALOG PORT3 | 1-2        | Connects LPUART0B_RX (P3.0) to the SWD connector.                             |
| JH6      | ANALOG PORT3 | 3-4        | Connects LPUART0B_TX (P3.1) to the SWD connector.                             |
| JH6      | ANALOG PORT3 | Open*      | Disconnects LPUART0B_RX (P3.0) and LPUART0B_TX (P3.1) from the SWD connector. |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32690EVKIT# | EV Kit |

# Denotes RoHS compliant.

│

## MAX32690 EV Kit Bill of Materials

|   QTY | VALUE            | PART REFERENCE                                                                               | BOM_DESCRIPTION                         | MANUFACTURER_PN     | MANUFACTURER           |
|-------|------------------|----------------------------------------------------------------------------------------------|-----------------------------------------|---------------------|------------------------|
|    25 | 1uF C1           | C2 C4 C5 C10 C11 C12 C13 C14 C15 C17 C18 C22 C55 C58 C59 C60 C61 C62 C64 C66 C67 C68 C69 C70 | CAP CER 1UF 16V 10% X5R 0402            | GRT155R61C105KE01D  | Murata Electronics     |
|     2 | 10uF             | C3 C53                                                                                       | CAP CER 10UF 6.3V 20% X5R 0402          | GRJ155R60J106ME11D  | Murata Electronics     |
|     6 | 100nF            | C7 C8 C19 C20 C47 C48                                                                        | CAP CER 0.1UF 16V 10% X7R 0402          | GRM155R71C104KA88D  | Murata Electronics     |
|     8 | DNI              | C16 C21 C26 C27 C28 C29 C63 C78                                                              | DNI                                     |                     |                        |
|     2 | 12pF             | C23 C24                                                                                      | CAP CER 12PF 50V 5% NP0 0402            | CL05C120JB5NNNC     | Samsung Electro-Mech   |
|     1 | 4.7nF            | C25                                                                                          | CAP CER 4700PF 50V 5% X7R 0402          | GRM155R71H472JA01D  | Murata Electronics     |
|     1 | 100nF            | C30                                                                                          | CAP CER 0.1UF 25V 10% X8R 0603          | C1608X8R1E104K080AA | TDK Corporation        |
|     2 | 1uF              | C31 C76                                                                                      | CAP CER 1UF 35V 10% X5R 0603            | GMK107BJ105KA-T     | Taiyo Yuden            |
|     2 | 10nF             | C32 C38                                                                                      | CAP CER 10000PF 25V 10% X7R 0603        | CL10B103KA8NNNC     | Samsung Electro-Mech   |
|    10 | 100nF            | C33 C36 C41 C42 C44 C45 C54 C71 C72 C75                                                      | CAP CER 0.1UF 10V 10% X5R 0402          | GRM155R61A104KA01D  | Murata                 |
|     2 | 47pF             | C34 C35                                                                                      | CAP CER 47PF 50V 1% NP0 0402            | C1005C0G1H470F050BA | TDK Corporation        |
|     1 | 4.7uF            | C37                                                                                          | CAP CER 4.7uF 10V 10% X5R 0603          | C0603C475K8PACTU    | Kemet                  |
|     1 | 100nF            | C39                                                                                          | CAP CER 0.1uF 16V 10% X7R 0603          | C0603C104K4RACTU    | Kemet                  |
|     2 | 2.2uF            | C40 C65                                                                                      | CAP CER 2.2UF 25V 10% X5R 0402          | ZRB157R61E225KE11D  | Murata Electronics     |
|     5 | 1uF              | C43 C46 C49 C51 C56                                                                          | CAP CER 1uF 16V 10% X7R 0603            | GCM188R71C105KA64D  | Murata Electronics     |
|     2 | 10uF             | C50 C52                                                                                      | CAP CER 10UF 6.3V 20% X5R 0603          | CL10A106MQ8NNNC     | Samsung Electro-Mech   |
|     1 | 10uF             | C57                                                                                          | CAP CER 10UF 10V 10% X7R 0805           | CL21B106KPQNNNE     | Samsung Electro-Mech   |
|     2 | 18pF             | C73 C74                                                                                      | CAP CER 18PF 50V 5% NP0 0402            | GRM1555C1H180JA01D  | Murata Electronics     |
|     1 | 0.3pF            | C77                                                                                          | CAP CER 0.3PF 50V +/-0.1pF C0G/NP0 0402 | GJM1555C1HR30BB01D  | Murata Electronics     |
|     2 | MICRO USB B R/A  | CN1 CN2                                                                                      | CONN RCPT 5POS MICRO USB B R/A          | 47346-0001          | Molex                  |
|     1 | SMS-255C         | CV1                                                                                          | RF SHIELD 0.774" X 0.774" SMD           | SMS-255C            | Leader Tech Inc.       |
|     1 | RED              | D1                                                                                           | LED 660NM RED WTR CLR 1206 SMD          | SML-LX1206SRC-TR    | Lumex Opto             |
|     6 | GRN              | D2 DS1 DS2 DS3 DS4 DS5                                                                       | LED 565NM WTR CLR GREEN 1206 SMD        | SML-LX1206GC-TR     | Lumex Opto             |
|     2 | STPS120M         | D3 D4                                                                                        | DIODE SCHOTTKY 20V 1A STMITE            | STPS120M            | STMicroelectronics     |
|     1 | BLUE             | D5                                                                                           | LED 469NM BLUE DIFF 1206 SMD            | HSMR-C150           | Avago Technologies US  |
|     6 | DNI              | H1 H2 H3 H4 H5 H6                                                                            | DNI MTG 125DRL 300PAD                   |                     |                        |
|     1 | SMS-255F         | HS1                                                                                          | RF SHIELD 0.75" X 0.75" SMD             | SMS-255F            | Leader Tech Inc.       |
|     2 | SMA              | J1 J2                                                                                        | CONN SMA JACK STR 50 OHM PCB            | 901-10112           | Amphenol RF            |
|     1 | 10P CORTEX DEBUG | J3                                                                                           | IDC BOX HEADER 0.050 10 POS SMD         | 3220-10-0300-00     | CNC Tech               |
|     1 | 503480-1000      | J4                                                                                           | CONN FFC FPC 10POS 0.50MM R/A           | 503480-1000         | Molex, LLC             |
|     2 | SJ-3523-SMT-TR   | J5 J6                                                                                        | CONN JACK STEREO 3.5MM SMD R/A          | SJ-3523-SMT-TR      | CUI Inc                |
|     3 | 10P 1x10         | JH1 JH2 JH4                                                                                  | CONN HEADER .100 SINGL STR 10POS        | PEC10SAAN           | Sullins                |
|     1 | 8P 1x8           | JH3                                                                                          | CONN HEADER .100 SINGL STR 8POS         | PEC08SAAN           | Sullins                |
|     1 | 7P 1x7           | JH5                                                                                          | CONN HEADER .100 SINGL STR 7POS         | PEC07SAAN           | Sullins                |
|     1 | 6P 2x3           | JH6                                                                                          | CONN HEADER .100 DUAL STR 6POS          | PEC03DAAN           | Sullins                |
|     5 | 3P 3x1           | JH7 JP2 JP9 JP10 JP11                                                                        | CONN HEADER .100 SINGL STR 3POS         | PEC03SAAN           | Sullins                |
|     1 | 3P 3.5mm         | JH8                                                                                          | TERM BLK 3POS SIDE ENT 3.5MM PCB        | 1984620             | Phoenix Contact        |
|    14 | JUMPER           | JP1 JP3 JP4 JP5 JP6 JP7 JP8 JP12 JP13 JP14 JP15 JP16 JP17 JP18                               | CONN HEADER .100 SINGL STR 2POS (2x1)   | PEC02SAAN           | Sullins                |
|     2 | HZ1206C202R-10   | L1 L2                                                                                        | FERRITE CHIP SIGNAL 2000 OHM SMD        | HZ1206C202R-10      | Laird-Signal Integrity |
|     1 | BLM21PG221SN1D   | L3                                                                                           | FERRITE CHIP 220 OHM 0805               | BLM21PG221SN1D      | Murata Electronics     |
|     1 | 5.1nH            | L4                                                                                           | FIXED IND 5.1NH 800MA 120MOHM SM 0402   | LQG15WZ5N1B02D      | Murata Electronics     |
|     1 | 5.6nH            | L5                                                                                           | FIXED IND 5.6NH 800MA 130MOHM SM 0402   | LQG15WZ5N6B02D      | Murata Electronics     |
|     1 | PCB              | PCB1                                                                                         |                                         |                     |                        |
|     2 | VP2110K1-G       | Q1 Q2                                                                                        | MOSFET P-CH 100V 0.12A SOT23-3          | VP2110K1-G          | Microchip Technology   |
|     3 | BSS806N          | Q3 Q4 Q5                                                                                     | MOSFET N-CH 20V 2.3A SOT23              | BSS806N H6327       | Infineon Technologies  |
|     1 | DNI              | R2                                                                                           | DNI 0402                                |                     |                        |
|     2 | 2.21K            | R3 R4                                                                                        | RES SMD 2.21K OHM 1% 1/10W 0402         | ERJ-2RKF2211X       | Panasonic Electronics  |
|    22 | 0 R5             | R7 R9 R41 R42 R43 R44 R45 R46 R47 R48 R49 R50 R51 R54 R56 R59 R70 R71 R72 R73 R77            | RES 0.0 OHM 1/10W JUMP 0402 SMD         | ERJ-2GE0R00X        | Panasonic Electronics  |
|     2 | 49.9             | R6 R10                                                                                       | RES SMD 49.9 OHM 1% 1/10W 0402          | ERJ-2RKF49R9X       | Panasonic Electronics  |

Evaluates: MAX32690

## MAX32690 EV Kit Bill of Materials (continued)

|   QTY | VALUE              | PART REFERENCE                          | BOM_DESCRIPTION                  | MANUFACTURER_PN        | MANUFACTURER            |
|-------|--------------------|-----------------------------------------|----------------------------------|------------------------|-------------------------|
|     1 | 75                 | R8                                      | RES 75 OHM 1% 1/10W 0402 SMD     | RK73H1ERTTP75R0F       | KOA Speer Electronics   |
|     2 | 1K                 | R11 R12                                 | RES 1K OHM 1/10W 1% 0603 SMD     | ERJ-3EKF1001V          | Panasonic               |
|     1 | 100                | R13                                     | RES SMD 100 OHM 1% 1/10W 0603    | RC0603FR-07100RL       | Yageo                   |
|     2 | 150K               | R14 R16                                 | RES 150K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF1503V          | Panasonic Electronics   |
|     1 | 470                | R15                                     | RES 470 OHM 1/10W 1% 0603 SMD    | ERJ-3EKF4700V          | Panasonic Electronics   |
|     6 | 332                | R17 R55 R60 R61 R64 R66                 | RES 332 OHM 1/10W 1% 0603 SMD    | ERJ-3EKF3320V          | Panasonic Electronics   |
|     4 | 10K                | R18 R21 R22 R24                         | RES 10K OHM 1/10W 1% 0603 SMD    | ERJ-3EKF1002V          | Panasonic Electronics   |
|     2 | 27                 | R19 R20                                 | RES 27 OHM 1/10W 1% 0603 SMD     | ERJ-3EKF27R0V          | Panasonic Electronics   |
|     1 | 1M                 | R23                                     | RES SMD 1M OHM 5% 1/8W 0805      | ERJ-6GEYJ105V          | Panasonic Electronics   |
|     2 | 0                  | R25 R27                                 | RES SMD 0 OHM JUMPER 1/10W 0603  | RC0603JR-070RL         | Yageo                   |
|     4 | 0                  | R26 R29 R52 R53                         | RES SMD 0 OHM JUMPER 1/10W 0603  | RC0603JR-070RL         | Yageo                   |
|     1 | 120                | R28                                     | RES SMD 120 OHM 1% 1/10W 0402    | ERJ-2RKF1200X          | Panasonic Electronics   |
|    11 | 0                  | R31 R32 R33 R34 R35 R36 R37 R38 R39 R40 | RES 0.0 OHM 1/10W JUMP 0402 SMD  | ERJ-2GE0R00X           | Panasonic Electronics   |
|     1 | 10                 | R57                                     | RES 10 OHM 1/10W 1% 0603 SMD     | ERJ-3EKF10R0V          | Panasonic Electronics   |
|     1 | 3.32K              | R58                                     | RES 3.32K OHM 1/10W 1% 0603 SMD  | ERJ-3EKF3321V          | Panasonic Electronics   |
|     1 | 18.7K              | R62                                     | RES SMD 18.7K OHM 1% 1/10W 0402  | ERJ-2RKF1872X          | Panasonic Electronics   |
|     1 | 49.9K              | R63                                     | RES 49.9K OHM 1/10W 1% 0603 SMD  | ERJ-3EKF4992V          | Panasonic Electronics   |
|     1 | 19.6K              | R65                                     | RES SMD 19.6K OHM 1% 1/10W 0603  | ERJ-3EKF1962V          | Panasonic Electronics   |
|     1 | 26.1K              | R67                                     | RES SMD 26.1K OHM 1% 1/10W 0402  | ERJ-2RKF2612X          | Panasonic Electronics   |
|     3 | 10K                | R68 R69 R82                             | RES SMD 10K OHM 1% 1/16W 0402    | RC0402FR-0710KL        | Yageo                   |
|     2 | 33.2               | R74 R76                                 | RES SMD 33.2 OHM 1% 1/10W 0402   | ERJ-2RKF33R2X          | Panasonic Electronics   |
|     1 | 150                | R75                                     | RES SMD 150 OHM 1% 1/10W 0402    | ERJ-2RKF1500X          | Panasonic Electronics   |
|     1 | 1M                 | R78                                     | RES SMD 1M OHM 1% 1/10W 0402     | ERJ-2RKF1004X          | Panasonic Electronics   |
|     5 | DNI                | SH1 SH2 SH3 SH4 SH5                     | DNI 2 NET SHORT                  |                        |                         |
|     1 | B3S-1002 BY OMZ    | SW1                                     | SWITCH TACTILE SPST-NO 0.05A 24V | B3S-1002 BY OMZ        | Omron Electronics       |
|     1 | B3S-1000P          | SW2                                     | SWITCH TACTILE SPST-NO 0.05A 24V | B3S-1000P              | Omron Electronics       |
|     1 | SPDT 3A            | SW3                                     | SWITCH TOGGLE SPDT 3A 120V       | ET01MD1AGE             | C&K Components          |
|     1 | YLW                | TP1                                     | TEST POINT PC MULTI PURPOSE YEL  | 5014                   | Keystone Electronics    |
|     1 | 1P                 | TP3                                     | CONN HEADER .100 SINGL STR 1POS  | PEC01SAAN              | Sullins                 |
|     2 | BLK                | TP4 TP8                                 | TEST POINT PC MULTI PURPOSE BLK  | 5011                   | Keystone Electronics    |
|     2 | BLUE               | TP5 TP6                                 | TEST POINT PC MULTI PURPOSE BLUE | 5127                   | Keystone Electronics    |
|     1 | DNI                | TP7                                     | DNI 28 DRILL 50 PAD              |                        |                         |
|     1 | MAX32690GTK+       | U1                                      | MAX32690GTK+ 68P QFN             | MAX32690GTK+           | Analog Devices Inc.     |
|     1 | MAX6071AAUT21+T    | U2                                      | IC VREF SERIES 0.04% SOT23-6     | MAX6071AAUT21+T        | Maxim Integrated        |
|     2 | MAX3207EAUT+T      | U3 U5                                   | ESD PROT DIFF SOT23-6            | MAX3207EAUT+T          | Maxim Integrated        |
|     1 | FT231XS-R          | U4                                      | IC USB SERIAL FULL UART 20SSOP   | FT231XS-R              | FTDI                    |
|     1 | LTC2875HS8#PBF     | U6                                      | IC TRANSCEIVER - CANbus 1/1 8SO  | LTC2875HS8#PBF         | Analog Devices Inc.     |
|     1 | S27KS0641DPBHV020  | U7                                      | IC HYPERRAM 64Mb 24BGA 166MHz    |                        | Cypress Semiconductor   |
|     1 | CFAF128128B1-0145T | U8                                      | LCD TFT Full Color 1.45" 128x128 | CFAF128128B1-0145T     | Crystalfontz            |
|     1 | DS1233AZ-10+T&R    | U9                                      | IC SUPERVISOR 1 CHANNEL SOT223-3 | DS1233AZ-10+T&R        | Maxim Integrate         |
|     2 | MAX1806EUA33+      | U10 U11                                 | IC REG LDO 3.3V/ADJ 0.5A 8UMAX   | MAX1806EUA33+          | Maxim Integrated        |
|     2 | MAX1806EUA18+      | U12 U13                                 | Low Dropout Linear Regulator     | MAX1806EUA18+          | Maxim Integrated        |
|     1 | MAX8869EUE33       | U14                                     | REG LDO 3.3V/ADJ 16TSSOP-EP      | MAX8869EUE33+          | Maxim Integrated        |
|     1 | MAX9867EWV+T       | U15                                     | IC STEREO AUD CODEC LP 30WLP     | MAX9867EWV+T           | Analog Devices Inc.     |
|     1 | SN74LVC1GU04DCKT   | U16                                     | IC SINGLE INVERTER GATE SC70-5   | SN74LVC1GU04DCKT       | Texas Instruments       |
|     1 | NC7WZ17P6X         | U17                                     | IC BUFF DL SCHMT TRIG UHS SC706  | NC7WZ17P6X             | Fairchild Semiconductor |
|     1 | 32.7680 KHZ        | Y1                                      | CRYSTAL 32.7680KHZ 6PF SMD       | ECS-.327-6-16R-TR      | ECS Inc.                |
|     1 | 32 MHZ             | Y2                                      | CRYSTAL 32.00 MHZ 12PF SMD       | FA-20H 32.0000MF12Y-W3 | EPSON                   |
|     1 | 12.288Mhz          | Y3                                      | CRYSTAL 12.2880MHZ 18PF SMD      | ABM3-12.288MHZ-B4Y-T   | Abracon Corporation     |

Evaluates: MAX32690

## MAX32690 EV Kit Schematic Diagrams

<!-- image -->

Evaluates: MAX32690

## MAX32690 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX32690 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX32690 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

Evaluates: MAX32690

## MAX32690 EV Kit Schematic Diagrams (continued)

<!-- image -->

Evaluates: MAX32690

## MAX32690 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

Evaluates: MAX32690

## MAX32690 EV Kit Schematic Diagrams (continued)

<!-- image -->

│

## MAX32690 EV Kit Schematic Diagrams (continued)

<!-- image -->

Evaluates: MAX32690

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/22           | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX32690