<!-- lastmod 2023-03-20 -->
<!-- image -->

## General Description

The MAX32662 evaluation kit (EV kit) provides a platform for evaluating the capabilities of the MAX32662 microcontroller, which is a cost-effective, ultra-low power, highly integrated 32-bit microcontroller designed for battery-powered edge devices.

## EV Kit Contents

- MAX32662  EV  Kit  Containing  a  MAX32662  with  a Preprogrammed Demo
- MAX32625PICO2 Debugger with Cables
- One USB Standard-A to USB Micro-B Cable
- Extra Shunts

## MAX32662 Evaluation Kit

## Features and Benefits

- 3-Pin Terminal Block for CAN Bus 2.0B
- 128 x 128 (1.45in) Color TFT Display with SPI Interface
- Selectable On-Board High-Precision Voltage Reference
- USB 2.0 Micro-B to Serial UART
- All GPIOs Signals Accessed through 0.1in Headers
- Four Analog Inputs Accessed through 0.1in Header
- SWD 10-Pin Header
- Board Power Provided by USB Port
- On-Board LDO Regulators
- Individual Power Measurement on All IC Rails through Jumpers
- One General-Purpose LED
- One General-Purpose Pushbutton Switch

Ordering Information appears at end of data sheet.

## Evaluates: MAX32662

## Quick Start

## Required Equipment

- MAX32662  EV  Kit  Containing  a  MAX32662  with  a Preprogrammed Demo
- One USB Standard-A to USB Micro-B Cable

## Procedure

The EV kit is fully assembled and tested. Use the following steps to verify board operation:

1. While observing safe ESD practices, carefully remove the EV kit board out of its packaging. Inspect the board to ensure that no damage occurred during shipment. Shunts are preinstalled prior to testing and packaging.
2. The target microcontroller is preprogrammed with the demo code. To run the demo, power up the board by plugging in the provided USB cable to connector CN1. Connect the other end of the USB cable to a computer or power adapter. Verify that the 5V blue LED (D1), and the 3V3 (D2), 1V8 (D3), and 1V1 (D4) green LEDs are illuminated, indicating that each of these voltage rails are  powered  on.  If  necessary,  toggle  power  switch SW3.
3. Once  power  is applied to the  board,  the  demo automatically  starts  and  begins  flashing  LED0.  This indicates that the microcontroller is executing code and that this simple demo is running as expected.

Now that the preprogrammed demo has run successfully, the next step is to install the Maxim Micros SDK in order to compile/build and run some of the provided examples.

## Installing and Running the Maxim Micros SDK

Once  the  demo  runs  as  expected,  the  next  step  is  to download and run the Maxim Micros SDK installer for your desired operating system. The Maxim Micros  SDK contains everything needed to evaluate and develop code for the supported microcontrollers including: the toolchain, tools, utilities, drivers, documentation, microcontroller firmware,  and  example  code.  The  Maxim  Micros  SDK installer is located on the EV kit's product webpage. Once the installer runs, the user will be shown all the toolchain components and microcontroller firmware packages which will be installed, unless deselected by the user.

Note: When selecting the target microcontroller, be aware that only the first part number in the sequence is shown (see Figure 1 ).

F or example, 'MAX32665  Resources'  is the correct selection for either the MAX32665 or MAX32666. Likewise, 'MAX32650 Resources' is the correct selection for either the MAX32650, MAX32651, or MAX32652.

## MAX32662 Evaluation Kit

Figure 1. Select Components Window

<!-- image -->

Once the installation is complete, assuming that the default toolchain  components were installed, the user can build and  run the included examples  to exercise various peripherals. Documentation for the SDK can be found in the Documentation folder located  in the installation directory,  as  shown  in Figure  2 .  Find  and  double-click index.html to proceed.

Figure 2. Documentation Folder

<!-- image -->

As shown in Figure 3 , the Maxim Micros SDK documentation window then appears, which contains a list of  the  currently  supported  devices.  Click  on  one  of  the devices to see the documentation for that microcontroller.

## Evaluates: MAX32662

Figure 3. Maxim SDK Documentation Window

<!-- image -->

Each microcontroller selection contains toolchain documentation as well as documentation for each of the provided example programs as shown in Figure 4.

Figure 4. Examples Application Window

<!-- image -->

## MAX32662 Evaluation Kit

## Launching Eclipse

When launching Eclipse, it is important to avoid browsing the installation folder and running the Eclipse executable directly.  Instead,  use  eclipse.bat  (Microsoft  Windows), eclipse.sh  (Linux),  or  run\_eclipse.sh  (MacOS)  to  launch Eclipse. These scripts properly configure the environment prior  to  launching  Eclipse.  For  the  Microsoft  Windows version, use the 'Eclipse MaximSDK' shortcut found in the Maxim Integrated SDK folder on the Windows Start menu.

## MAX32625PICO2 Debugger

A MAX32625PICO2 debugger is provided for programming  and  debugging  the  target  microcontroller through the SWD interface. Furthermore, the MAX32625PICO2 also serves as a UART bridge, providing serial terminal functionality without the need of an additional USB cable. See the UART Interfaces section for board configuration details.

This  EV  kit  includes  a  USB  cable  for  connecting  the MAX32625PICO2 debugger to a PC (with Eclipse and the SDK  installed)  and  a  ribbon  cable  for  connecting  the MAX32625PICO2 debugger to J3 of the EV kit.

For more detailed information about the MAX32625PICO2,  refer  to  the  MAX32625PICO2  data sheet.

## Evaluates: MAX32662

## MAX32662 EV Kit Board

Figure 5. MAX32662 EV Kit Board -Top

<!-- image -->

Figure 6. MAX32662 EV Kit Board -Bottom

<!-- image -->

## Evaluates: MAX32662

## Detailed Description of Hardware

## Power Supply

The EV kit is powered by +5V through VBUS on the USB Micro-USB connector (CN1), which sources the on-board lowdropout (LDO) regulators. When the board is powered from the USB cable through CN1, blue LED 5V (D1), and green LEDs 3V3 (D2), 1V8 (D3), and 1V1 (D4) will illuminate. Power may be applied to the board with the switch (SW3) in either position.

## Current Monitoring

Two pin jumpers are provided on all IC power rails for individual current measurements. The jumpers are VCORE EN (JP10), VDDIO EN (JP12), and VDDA EN (JP13).

## Low-Power Current Measurements

To accurately achieve the low-power current values, the EV kit will need to be configured such that no outside influence (e.g., pull-ups, pull-downs, external clocks, debugger connector) causes a current source or sink on any GPIO.

For these measurements, the board needs to be configured as follows:

1. Remove the shunts at JP1, JP2, JP4, JP5, JP6, JP7, JP8, and JP9.
2. Set slide switch SW4 to the DIS (disable) position.
3. Unplug the debugger from the SWD connector.

Once the board is configured, look for the SDK low-power example (LP) to cycle through the low-power modes.

## CAN Bus 2.0B

The three-screw lug terminal block (JH3) allows for connection to a CAN communications bus through the LTC2875HS8 transceiver (U11).

## Color TFT LCD Display

The EV kit provides a color, 1.4in, 128 x 128-pixel TFT with an integrated TFT controller and an SPI interface. Current builds of the EV kit include the Crystalfontz ®  CFAF128128B1-0145T display (U3) connected through connector J4. Due to availability issues, future EV kit builds may include a different display model or vendor.

## Clocking

The crystals provide a time base for the two internal oscillators. A 24.576MHz crystal (Y1) is the clock source for digital logic and peripherals, and a 32.768kHz crystal (Y2) is for RTC operations.

## External Voltage Reference (VREF)

The microcontroller's ADC selects the internal reference by default. For critical applications, an external precision voltage reference can be connected to the VREF pin. To demonstrate this functionality, this EV kit includes a low-noise, highprecision, MAX6071 voltage reference (U2). Its output voltage connects to VREF through jumper JP1. When attempting to use this external reference, make sure JP1 has a shunt installed. Furthermore, user software must properly set the ADC External Reference Select bit. For additional information, refer to the ADC chapter in the device user guide.

Crystalfontz is a registered trademark of Crystalfontz America, Inc.

## Evaluates: MAX32662

## Serial Wire Debug (SWD)

An Arm ®  debug access port (DAP) provides an external interface for debugging during application development. The DAP is a standard Arm CoreSight ®  serial wire debug port, uses a two-pin serial interface (SWDCLK and SWDIO), and is accessed through 10-pin header (J3). Logic levels are set to V\_AUX (1V8 or 3V3), which is determined by the shunt placement on JP11. In addition, the UART1A port can also be accessed through J3.

## UART Interfaces

An FTDI USB-to-UART bridge IC, the FT231x, allows for access to the IC's UART0A port through the USB Micro-B connector (CN1). The USB-to-UART bridge can be connected to the IC's UART0A with jumpers JP7 (RX0A EN), JP8 (TX0A EN), JP6 (CTS0A EN), and JP9 (RTS0A EN). Virtual COM port drivers and guides for installing Windows® drivers are available at the FTDI website.

The UART1A port can be accessed through the SWD 10-pin header (J3). This allows SWD/JTAG debuggers to use one USB cable to provide both a SWD/JTAG interface as well as a serial data interface to a host.

## GPIO and Alternate Function Headers

GPIO and alternate function signals from the microcontroller can be accessed through headers JH1, JH2, and JH4. Analog inputs are accessible through header JH2. If accessing AIN0, the shunt on JP1 must be removed to prevent contention with the external reference voltage source. The IC provides support for both 1.8V and 3.3V peripherals through the power rail VDDIO.

## I 2 C Access/Pull-ups

The I2C1A port is accessed through headers JH1 and JH4. Pull-up resistors are enabled through jumpers JP2 and JP4. Pull-up voltage levels are set to V\_AUX (1V8 or 3V3), which is determined by the shunt placement on JP11.

The I2C0A port is accessed through header JH2. External pull-ups for the I2C0A bus are required, and the shunt on JP1 must be removed to prevent contention with the external reference voltage source.

## Reset Pushbutton

Pushbutton SW1 momentarily pulls the RSTN pin low. RSTN is internally pulled up to VDDIO. Refer to the Electrical Characteristics table in the device data sheet for resistance value (R PU\_VDDIO ).

## Indicator LED

General-purpose indicator LED0 is driven by a buffer, which is connected to GPIO P0.14 and can be disabled by removing shunt JP5.

## GPIO Pushbutton Switch

General-purpose pushbutton SW2 is connected to GPIO P0.6. If the pushbutton is pressed, the attached port pin is pulled low. It should be noted that P0.6 is also the secure bootloader default stimulus pin on secure bootloader-enabled devices. Set slide switch SW4 to the DIS (disable) position before attempting to operate SW2.

Arm and CoreSight are registered trademarks of Arm Limited. Windows is a registered trademark of Microsoft Corporation.

## MAX32662 Evaluation Kit

## Evaluates: MAX32662

## Secure Communications Protocol Bootloader (SCPBL)

The EV kit contains a version of the MAX32662 without the secure bootloader, meaning no SCPBL.

The secure bootloader provides a secure channel for device configuration and program loading. The EV kit hardware can be used to evaluate the secure bootloader-enabled versions of the MAX32662; however, these devices must be procured separately. Refer to the Ordering Information table in the MAX32662 data sheet for exact part numbers. To use this EV kit to evaluate the secure bootloader-enabled devices, replace the original MAX32662 with the new devices.

If using secure bootloader-enabled devices, the SCPBL is activated by asserting the default stimulus pin (P0.6) by setting the bootloader slide switch (SW4) to the EN (enable) position and momentarily pressing the RSTN pushbutton (SW1). The secure bootloader then monitors the UART0A for a connection request.

Note: To activate the bootloader, the following signals are required: the stimulus pin (P6.0), RSTN pin, and UART0A pins.

The stimulus pin is pulled high internally by a weak pull-up. If any additional connections are made to the stimulus pin, a stronger external pull-up may be required to keep the device out of bootloader mode when powering up or coming out of reset.

Note: The pull-up resistor enabled by installing the shunt on JP2 serves a dual-purpose -as a pull-up for I2C1A\_SCL and to provide a strong pull-up to the P0.6 default stimulus pin.

Table 1. Jumper Connection Guide

| JUMPER   | SIGNAL                 | SETTINGS   | DESCRIPTION                                                                                                                                                             |
|----------|------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JP1      | VREF EN                | 1-2*       | Connects the external voltage reference to the VREF pin; must be enabled in the software. See the External Voltage Reference (VREF) section for additional information. |
| JP1      | VREF EN                | Open       | Disconnects the external voltage reference.                                                                                                                             |
| JP2      | I2C1_SCL_PU            | 1-2        | Connects the pull-up to I2C1A_SCL (P0.6); sourced by V_AUX.                                                                                                             |
| JP2      | I2C1_SCL_PU            | Open*      | Disconnects the pull-up from I2C1A_SCL (P0.6); sourced by V_AUX.                                                                                                        |
| JP3      | N/A                    | N/A        | Does not exist.                                                                                                                                                         |
| JP4      | I2C1_SDA_PU            | 1-2        | Connects the pull-up to I2C1A_SDA (P0.9); sourced by V_AUX.                                                                                                             |
| JP4      | I2C1_SDA_PU            | Open*      | Disconnects the pull-up from I2C1A_SDA (P0.9); sourced by V_AUX.                                                                                                        |
| JP5      | LED0 EN                | 1-2*       | Enables LED0.                                                                                                                                                           |
| JP5      | LED0 EN                | Open       | Disables LED0.                                                                                                                                                          |
| JP6      | CTS0A EN               | 1-2*       | Connects the USB-to-serial bridge to UART0A_CTS (P0.20).                                                                                                                |
| JP6      | CTS0A EN               | Open       | Disconnects the USB-to-serial bridge from UART0A_CTS (P0.20).                                                                                                           |
| JP7      | RX0A EN                | 1-2*       | Connects the USB-to-serial bridge to UART0A_RX (P0.11).                                                                                                                 |
| JP7      | RX0A EN                | Open       | Disconnects the USB-to-serial bridge from UART0A_RX (P0.11).                                                                                                            |
| JP8      | TX0A EN                | 1-2*       | Connects the USB-to-serial bridge to UART0A_TX (P0.10).                                                                                                                 |
| JP8      | TX0A EN                | Open       | Disconnects the USB-to-serial bridge from UART0A_TX (P0.10).                                                                                                            |
| JP9      | RTS0A EN               | 1-2*       | Connects the USB-to-serial bridge to UART0A_RTS (P0.19).                                                                                                                |
| JP9      | RTS0A EN               | Open       | Disconnects the USB-to-serial bridge from UART0A_RTS (P0.19).                                                                                                           |
| JP10     | VCORE EN               | 1-2*       | Connects 1V1 to VCORE.                                                                                                                                                  |
| JP10     | VCORE EN               | Open       | Disconnects 1V1 from VCORE.                                                                                                                                             |
| JP11     | VDDIO/VDDA SEL (V_AUX) | 2-1*       | Connects 1V8 to V_AUX, VDDIO EN (JP12), and VDDA EN (JP13) jumpers.                                                                                                     |
| JP11     | VDDIO/VDDA SEL (V_AUX) | 2-3        | Connects 3V3 to V_AUX, VDDIO EN (JP12), and VDDA EN (JP13) jumpers.                                                                                                     |
| JP12     | VDDIO EN               | 1-2*       | Connects the JP11 selected voltage to VDDIO.                                                                                                                            |
| JP12     | VDDIO EN               | Open       | Disconnects the voltage from VDDIO.                                                                                                                                     |

## MAX32662 Evaluation Kit

## Evaluates: MAX32662

## MAX32662 Evaluation Kit

| JP13   | VDDA EN    | 1-2*       | Connects the JP11 selected voltage to VDDA.                                                                            |
|--------|------------|------------|------------------------------------------------------------------------------------------------------------------------|
|        |            | Open       | Disconnects the voltage from VDDA.                                                                                     |
| SW4    | BOOTLOADER | 2-1* (DIS) | Breaks the connection to P0.6.                                                                                         |
|        |            | 2-3 (EN)   | Connects P0.6 to ground. See the Secure Communications Protocol Bootloader (SCPBL) section for additional information. |

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX32662EVKIT# | EV Kit |

Evaluates: MAX32662

## MAX32662 EV Kit Bill of Materials

|   QTY | PART REFERENCE              | VALUE            | DNI   | BOM DESCRIPTION                  | MANUFACTURER PN     | MANUFACTURER          |
|-------|-----------------------------|------------------|-------|----------------------------------|---------------------|-----------------------|
|     4 | C2 C3 C19 C20               | 100nF            |       | CAP CER 0.1UF 16V 10% X7R 0402   | GRM155R71C104KA88D  | Murata Electronics    |
|     2 | C4 C9                       | 1uF              |       | CAP CER 1uF 16V 10% X7R 0603     | GCM188R71C105KA64D  | Murata Electronics    |
|     1 | C5                          | 10uF             |       | CAP CER 10UF 6.3V 20% X5R 0603   | CL10A106MQ8NNNC     | Samsung Electro- Mech |
|     1 | C6                          | 10uF             |       | CAP CER 10UF 6.3V 20% X5R 0402   | GRJ155R60J106ME11D  | Murata Electronics    |
|     3 | C7 C33 C36                  | 100nF            |       | CAP CER 0.1UF 10V 10% X5R 0402   | GRM155R61A104KA01D  | Murata Electronics    |
|     4 | C8 C16 C17 C18              | 1uF              |       | CAP CER 1UF 16V 10% X5R 0402     | GRT155R61C105KE01D  | Murata Electronics    |
|     1 | C10                         | 10uF             |       | CAP CER 10UF 10V 10% X7R 0805    | CL21B106KPQNNNE     | Samsung Electro- Mech |
|     7 | C11 C14 C15 C23 C27 C28 C29 | DNI              |       | DNI                              | -                   | -                     |
|     2 | C12 C13                     | 12pF             |       | CAP CER 12PF 50V 5% NP0 0402     | CL05C120JB5NNNC     | Samsung Electro- Mech |
|     1 | C21                         | 2.2uF            |       | CAP CER 2.2UF 25V 10% X5R 0402   | ZRB157R61E225KE11D  | Murata Electronics    |
|     1 | C22                         | 1uF              | DNI   | CAP CER 1UF 16V 10% X5R 0402     | GRT155R61C105KE01D  | Murata Electronics    |
|     1 | C26                         | 1uF              |       | CAP CER 1UF 35V 10% X5R 0603     | GMK107BJ105KA-T     | Taiyo Yuden           |
|     2 | C34 C35                     | 47pF             |       | CAP CER 47PF 50V 1% NP0 0402     | C1005C0G1H470F050BA | TDK Corporation       |
|     1 | C37                         | 4.7uF            |       | CAP CER 4.7uF 10V 10% X5R 0603   | C0603C475K8PACTU    | Kemet                 |
|     1 | C38                         | 10nF             |       | CAP CER 10000PF 25V 10% X7R 0603 | CL10B103KA8NNNC     | Samsung Electro- Mech |
|     1 | C39                         | 100nF            |       | CAP CER 0.1uF 16V 10% X7R 0603   | C0603C104K4RACTU    | Kemet                 |
|     1 | CN1                         | MICRO USB B R/A  |       | CONN RCPT 5POS MICRO USB B R/A   | 47346-0001          | Molex                 |
|     1 | D1                          | BLUE             |       | LED 469NM BLUE DIFF 1206 SMD     | HSMR-C150           | Avago Technologies    |
|     4 | D2 D3 D4 D5                 | GRN              |       | LED 565NM WTR CLR GREEN 1206     | SML-LX1206GC-TR     | Lumex Opto            |
|     4 | H1 H2 H3 H4                 | DNI              |       | DNI MTG 125DRL 300PAD            | -                   | -                     |
|     1 | J2                          | SMA              |       | CONN SMA JACK STR 50 OHM PCB     | 901-10112           | Amphenol RF           |
|     1 | J3                          | 10P CORTEX DEBUG |       | IDC BOX HEADER 0.050 10 POS SMD  | 3220-10-0300-00     | CNC Tech              |
|     1 | J4                          | 503480-1000      |       | CONN FFC FPC 10POS 0.50MM R/A    | 503480-1000         | Molex, LLC            |
|     1 | J6                          | SMA              | DNI   | CONN SMA JACK STR 50 OHM PCB     | 901-10112           | Amphenol RF           |

www.analog.com

## Evaluates: MAX32662 MAX32662 Evaluation Kit

|   1 | JH1                                            | 10P 1x10       |     | CONN HEADER .100 SINGL STR 10POS   | PEC10SAAN        | Sullins                |
|-----|------------------------------------------------|----------------|-----|------------------------------------|------------------|------------------------|
|   1 | JH2                                            | 8P 2x4         |     | CONN HEADER .100 DUAL STR 8POS     | PEC04DAAN        | Sullins                |
|   1 | JH3                                            | 3P 3.5mm       |     | TERM BLK 3POS SIDE ENT 3.5MM PCB   | 1984620          | Phoenix Contact        |
|   1 | JH4                                            | 12P 1x12       |     | CONN HEADER .100 SINGL STR 12POS   | PEC12SAAN        | Sullins                |
|  11 | JP1 JP2 JP4 JP5 JP6 JP7 JP8 JP9 JP10 JP12 JP13 | JUMPER         |     | CONN HEADER .100 SINGL STR 2POS    | PEC02SAAN        | Sullins                |
|   1 | JP11                                           | 3P 3x1         |     | CONN HEADER .100 SINGL STR 3POS    | PEC03SAAN        | Sullins                |
|   1 | L2                                             | HZ1206C202R-10 |     | FERRITE CHIP SIGNAL 2000 OHM SMD   | HZ1206C202R-10   | Laird-Signal Integrity |
|   1 | L3                                             | BLM21PG221SN1D |     | FERRITE CHIP 220 OHM 0805          | BLM21PG221SN1D   | Murata Electronics     |
|   1 | PCB1                                           | PCB            |     | -                                  | -                | -                      |
|   1 | Q1                                             | VP2110K1-G     |     | MOSFET P-CH 100V 0.12A SOT23-3     | VP2110K1-G       | Microchip Technology   |
|   2 | Q2 Q3                                          | BSS806N        |     | MOSFET N-CH 20V 2.3A SOT23         | BSS806N H6327    | Infineon Technologies  |
|   6 | R1 R5 R17 R18 R20 R21                          | 10K            |     | RES SMD 10K OHM 1% 1/16W 0402      | RC0402FR-0710KL  | Yageo                  |
|   1 | R2                                             | DNI            |     | DNI 0402                           | -                | -                      |
|   2 | R3 R30                                         | 2.21K          |     | RES SMD 2.21K OHM 1% 1/10W 0402    | ERJ-2RKF2211X    | Panasonic Electronics  |
|   5 | R4 R6 R7 R9 R28                                | 0              |     | RES 0.0 OHM 1/10W JUMP 0402 SMD    | ERJ-2GE0R00X     | Panasonic Electronics  |
|   1 | R8                                             | 75             | DNI | RES 75 OHM 1% 1/10W 0402 SMD       | RK73H1ERTTP75R0F | KOA Speer Electronics  |
|   3 | R10 R26 R39                                    | 49.9           | DNI | RES SMD 49.9 OHM 1% 1/10W 0402     | ERJ-2RKF49R9X    | Panasonic Electronics  |
|   1 | R11                                            | 1K             |     | RES 1K OHM 1/10W 1% 0603 SMD       | ERJ-3EKF1001V    | Panasonic Electronics  |
|   2 | R13 R43                                        | 100            |     | RES SMD 100 OHM 1% 1/10W 0603      | RC0603FR-07100RL | Yageo                  |
|   1 | R14                                            | 150K           |     | RES 150K OHM 1/10W 1% 0603 SMD     | ERJ-3EKF1503V    | Panasonic Electronics  |
|   4 | R15 R33 R35 R38                                | 332            |     | RES 332 OHM 1/10W 1% 0603 SMD      | ERJ-3EKF3320V    | Panasonic Electronics  |
|   6 | R16 R31 R44 R45 R46 R47                        | 0              |     | RES SMD 0 OHM JUMPER 1/10W 0603    | RC0603JR-070RL   | Yageo                  |
|   2 | R19 R22                                        | 27             |     | RES SMD 27 OHM 1% 1/10W 0402       | ERJ-2RKF27R0X    | Panasonic Electronics  |
|   1 | R23                                            | 1M             |     | RES SMD 1M OHM 5% 1/8W 0805        | ERJ-6GEYJ105V    | Panasonic Electronics  |
|   1 | R27                                            | 10             |     | RES 10 OHM 1/10W 1% 0603 SMD       | ERJ-3EKF10R0V    | Panasonic Electronics  |
|   1 | R34                                            | 3.32K          |     | RES 3.32K OHM 1/10W 1% 0603 SMD    | ERJ-3EKF3321V    | Panasonic Electronics  |
|   1 | R36                                            | 18.7K          |     | RES SMD 18.7K OHM 1% 1/10W 0402    | ERJ-2RKF1872X    | Panasonic Electronics  |

## Evaluates: MAX32662

## MAX32662 Evaluation Kit

|   1 | R37                 | 49.9K               |     | RES 49.9K OHM 1/10W 1% 0603 SMD   | ERJ-3EKF4992V               | Panasonic Electronics   |
|-----|---------------------|---------------------|-----|-----------------------------------|-----------------------------|-------------------------|
|   1 | R41                 | 120                 |     | RES SMD 120 OHM 1% 1/10W 0402     | ERJ-2RKF1200X               | Panasonic Electronics   |
|   1 | R42                 | 0                   | DNI | RES SMD 0 OHM JUMPER 1/10W 0603   | RC0603JR-070RL              | Yageo                   |
|   5 | SH1 SH2 SH3 SH4 SH5 | DNI                 |     | DNI 2 NET SHORT                   | -                           | -                       |
|   1 | SW1                 | B3S-1002 BY OMZ     |     | SWITCH TACTILE SPST- NO 0.05A 24V | B3S-1002 BY OMZ             | Omron Electronics       |
|   1 | SW2                 | B3S-1000P           |     | SWITCH TACTILE SPST- NO 0.05A 24V | B3S-1000P                   | Omron Electronics       |
|   1 | SW3                 | SPDT 3A             |     | SWITCH TOGGLE SPDT 3A 120V        | ET01MD1AGE                  | C&K Components          |
|   1 | SW4                 | CL-SB-12A-01T       |     | SWITCH SLIDE SPDT 200MA 12V       | CL-SB-12A-01T               | Nidec Copal Electronics |
|   1 | TP1                 | YLW                 |     | TEST POINT PC MULTI PURPOSE YEL   | 5014                        | Keystone Electronics    |
|   2 | TP2 TP7             | BLUE                |     | TEST POINT PC MULTI PURPOSE BLUE  | 5127                        | Keystone Electronics    |
|   1 | TP3                 | 1P                  |     | CONN HEADER .100 SINGL STR 1POS   | PEC01SAAN                   | Sullins                 |
|   2 | TP4 TP8             | BLK                 |     | TEST POINT PC MULTI PURPOSE BLK   | 5011                        | Keystone Electronics    |
|   1 | U1                  | MAX32662GTJ+ SKT    |     | MAX32662GTJ+ 32P QFN              | MAX32662GTJ+                | Analog Devices          |
|   1 | U2                  | MAX6071AAUT21+T     |     | IC VREF SERIES 0.04% SOT23-6      | MAX6071AAUT21+T             | Analog Devices          |
|   1 | U3                  | CFAF128128B1- 0145T |     | LCD TFT Full Color 1.45" 128x128  | CFAF128128B1-0145T          | Crystalfontz            |
|   1 | U4                  | FT231XS-R           |     | IC USB SERIAL FULL UART 20SSOP    | FT231XS-R                   | FTDI                    |
|   1 | U5                  | MAX3207EAUT+T       |     | ESD PROT DIFF SOT23-6             | MAX3207EAUT+T               | Analog Devices          |
|   1 | U7                  | DS1233AZ-10+T&R     |     | IC SUPERVISOR 1 CHANNEL SOT223-3  | DS1233AZ-10+T&R             | Analog Devices          |
|   1 | U8                  | MAX1806EUA33+       |     | IC REG LDO 3.3V/ADJ 0.5A 8UMAX    | MAX1806EUA33+               | Analog Devices          |
|   2 | U9 U10              | MAX1806EUA18+       |     | Low Dropout Linear Regulator      | MAX1806EUA18+               | Analog Devices          |
|   1 | U11                 | LTC2875HS8#PBF      |     | IC TRANSCEIVER - CANbus 1/1 8SO   | LTC2875HS8#PBF              | Analog Devices          |
|   1 | Y1                  | 24.5760MHZ          |     | CRYSTAL 24.5760MHZ 12PF SMD       | ABM8AIG-24.576MHZ- 12-2Z-T3 | Abracon                 |
|   1 | Y2                  | 32.7680 KHZ         |     | CRYSTAL 32.7680KHZ 6PF SMD        | ECS-.327-6-16R-TR           | ECS                     |

## Evaluates: MAX32662

## MAX32662 EV Kit Schematics

<!-- image -->

## MAX32662 Evaluation Kit

## Evaluates: MAX32662

## MAX32662 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX32662

## MAX32662 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX32662

## MAX32662 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX32662

## MAX32662 EV Kit Schematics (continued)

#

<!-- image -->

## Evaluates: MAX32662

## MAX32662 EV Kit Schematics (continued)

<!-- image -->

## Evaluates: MAX32662

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/23            | Initial release | -               |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## MAX32662 Evaluation Kit