<!-- lastmod 2025-04-07 -->
<!-- image -->

## Evaluates: MAX96716A,

MAX96716F, MAX96792A

## General Description

The MAX96716 and MAX96792 evaluation kits (EV kits) provide a reliable platform for evaluating Maxim's devices MAX96716A, MAX96716F, and MAX96792A through the use of standard FAKRA coaxial cables or HMTD cable. These deserializer devices support high-bandwidth, gigabit,  multimedia  (GMSL)  serial  links  and  offer  spread spectrum  and  full-duplex  control  channel  features.  The EV  kit  includes  a  simple-to-use  Windows  7 ® /Windows 10-compatible graphical user interface (GUI) for exercising device features.

In  the  following  sections,  the  term  deserializer  refers  to the MAX96716 and MAX96792A and any of the devices listed  above.  The  term  serializer  refers  to  any  GMSL2 serializer device, particularly the MAX96717. If using the MAX96792A in GMSL3 mode, the companion Serializer is MAX96793.

For  complete  GMSL2  or  GMSL3  evaluation  using  a standard  FAKRA  coax  cable  or  HMTD  cable,  order  the MAX96716/MAX96792  COAX/STP  EV  kit  along  with a  companion  serializer  board  (MAX96717/MAX96793 COAX/STP EV kit  is  referenced  in  this  document).  For a detailed look at all GMSL2 features, including information on how to use the parts, refer to the GMSL2/GMSL3 User's Guide (GMSL2/GMSL3\_Users\_Guide\_vXX, found in Maxim's GMSL customer portal folder).

Note: Although coax cable is referenced throughout this document,  the  information  applies  equally  to  both  coax and HMTD evaluation kits.

## MAX96716/MAX96792 EV Kit Files

| FILE                                 | DESCRIPTION                                                                                                                                 |
|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| MAXSerDesEV-GMSL_VX_X_XX_Install.exe | Installs the EV kit software (GUI) onto a Windows 7/Windows 10 computer. Includes GUI user's guide, microcontroller firmware, documentation |
| MAXSerDesEV-GMSL.exe                 | GMSL Graphical User Interface (GUI) program                                                                                                 |

Windows is a registered trademark and registered service mark of Microsoft Corporation.

©

Click here to ask an associate for production status of specific part numbers.

## MAX96716/MAX96792 DPHY Evaluation Kit

## Features

- Deserialzier Accepts GMSL2 or GMSL3 (depending on variant) Data Through Coaxial FAKRA or Differential HMTD Connectors and Converts to MIPI DPHY V1.2 Output.
- Windows 7/Windows 10-Compatible Software Support
- Powerful, Simple-to-Use GUI for Comprehensive Device Feature Evaluation
- USB-Controlled Interface (Cable Included)
- Board Powered by USB, 12V Wall Adapter, or External Power Supply
- Proven PCB Layout
- Fully Assembled and Tested

Note: EV kits are configured to use PoC and FAKRA connectors. For HMTD connector, contact factory for configuration.

Ordering Information appears at end of data sheet.

319-101045; Rev 1, 4/24

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 2024  Analog  Devices,  Inc.  All  rights  reserved. 2024 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX96716/MAX96792 DPHY Evaluation Kit

Evaluates: MAX96716A,

MAX96716F, MAX96792A

Figure 1. MAX96716/MAX96792 EV Kit Typical Block Diagram

<!-- image -->

│

## MAX96716/MAX96792 DPHY Evaluation Kit

Evaluates: MAX96716A,

MAX96716F, MAX96792A

Figure 2: MAX96716/MAX96792 Deserializer EV Kit Default Jumper Settings

<!-- image -->

## MAX96716/MAX96792 DPHY Evaluation Kit

## Quick Start

This procedure applies to COAX evaluation kits. Figure 3 shows  a  typical  application  using  the  CSI  serializer MAX96717/MAX96793 and CSI deserializer MAX96716/ MAX96792.

## Required Equipment

The following equipment is required to successfully use the MAX96716/MAX96792 EV kit in a serial link  coax  cable configuration.

- MAX96716/MAX96792 EV kit
- MAX96717/MAX96793 EV kit
- FAKRA coax cable assembly
- PC with Windows 7/Windows 10 and GMSL-2 software installed
- Power supply source (500mA USB port, 5V/1A DC supply, or 12V barrel jack DC supply)
- Micro USB cable

## Procedure

The  MAX96716/MAX96792  EV  kit  is  shipped  with  the PCB fully assembled and tested. Use the following steps to verify board operation:

- 1) Download and install the latest GMSL2/GMSL3 GUI software from the Maxim Integrated Sharefile onto a Windows 7/Windows 10 PC. Prior to using the GUI, the PC must be connected to the MAX96716/ MAX96792 EV kit PCB through the board's microUSB port (J6). Contact the factory for additional information on accessing the software. Refer to the GMSL GUI User's Guide for detailed instruction on using the software.
- 2) Check to assure that the MAX96716/MAX96792 EV kit PCB's red power switch (SW1) is in the OFF position.
- 3) Assure that all jumper positions on the PCB are properly set to meet the requirements of the user's application.  Figure 2 and Table 2 show the possible jumper positions for various configurations. The default jumper settings put the Device Under Test (DUT) into I2C mode, select 1.8V as the VDDIO voltage, select 1V as the VDD voltage, and cause the board to be powered by 12V DC barrel jack.
- 4) Connect a power supply to the MAX96716/MAX96792 EV kit PCB. The board provides three power supply options:

TEENSY is a registered trademark of PJRC.COM LLC.

## Evaluates: MAX96716A, MAX96716F, MAX96792A

- 12V DC barrel jack supply connected to connector J1
- 5V external power supply connected to the external power terminal block (J3)
- 5V supply drawn from the micro-USB port (J6) connected to the PC.
- 5) Power up the board by moving the red power switch (SW1) to the ON position. The power LEDs DS1 and DS2 light to indicate the appropriate power settings. The Teensy ® LED (DS6) flashes to indicate that the board firmware is functional. (If the Teensy LED is not flashing, see the Troubleshooting section.).
- 6) Define the application-specific power-up configura -tion for the DUT, using the GMSL2/GMSL3 GUI to set the device's CFG pins into the required modes. (See the Configuration (CFG) Pin Settings section below). The MAX96716/MAX96792 must be config -ured to have same link data rate (6Gbps/3Gbps for GMSL2 or 12Gbps for GMSL3) and output mode (coax or STP) as the companion serializer board. The DUT must be power cycled if any changes are made to the CFG pins (use the SW3  reset button on the board to power-cycle the DUT.)
- 7) Connect the serializer-deserializer EV kit system as shown in Figure 5. Connect the FAKRA cable from the OUTA or OUTB connectors on the serializer board to the FAKRA INA+ or INB+ connectors on the deserializer board.
- 8) Connect a power supply to the serializer PCB, using either the 12V DC barrel jack supply, a 5V external power supply, or the 5V micro-USB port supply.
- 9) Power on the serializer board by moving the red power switch to the ON position.
- 10)  When both boards have been connected properly and powered on, the LOCK LED on the MAX96716/ MAX96792 EV kit PCB illuminates, indicating that the link is locked, and communication is functional. If the LOCK LED does not illuminate, see the Troubleshooting section below.

Basic  board  initialization  is  now  complete. At  this  point, the  link  is  established,  and  the  system  is  ready  to  be used.  Use  the  GMSL2/GMSL3  GUI  to  access  internal registers  locally  or  remotely.  Ensure  that  both  serializer and deserializer are identified correctly in the GUI. Refer to  the  below  sections  and  available  documentation  for additional information on using GMSL2/GMSL3 hardware and software.

## MAX96716/MAX96792 DPHY Evaluation Kit

Evaluates: MAX96716A,

MAX96716F, MAX96792A

Figure 3. Typical Application Block Diagram Using the MAX96716/MAX96792

<!-- image -->

│

## MAX96716/MAX96792 DPHY Evaluation Kit

## Configuration (CFG) Pin Settings

The deserializer CFG pins use the pin voltage latched at power-up to configure the device. On-board analog potentiometers and I2C-configurable digital potentiometers set the configuration (CFG) pin voltage levels. By default, the board is wired to use the digital potentiometers.

The  CFG  states  can  be  configured  using  the  GMSL-2 GUI. To do so, access the GUI tabs Tools → Set CFG Pin Levels .

To switch between using the analog or digital potentiometer to set CFG states, use 0 Ω resistors to connect the CFG0/1  nets.  By  default,  the  digital  potentiometers  are connected via R150 and R151. To use the analog potentiometers, depopulate R150/R151, and populate R84/R86. The analog potentiometers can be set with a small screwdriver and the voltage on the CFG pins can be monitored on the test points TP\_CFG0 and TP\_CFG1.

If  the serializer is not identified in the GUI, it is still possible to write to the CFG pins. For more information, see the Troubleshooting section.

The voltage levels  scale  with  IOVDD. Table  1  indicates the voltage levels necessary to configure the serializer for different modes of operation.

## Table 1. MAX96716A CFG Pin Settings

| LEVEL   | VOLTAGE        | CFG0   | CFG0           | CFG1   | CFG1             | CFG1               |
|---------|----------------|--------|----------------|--------|------------------|--------------------|
| #       | TYPICAL% VDDIO | I2CSEL | DEVICE ADDRESS | CTXP   | DATA RATE [GBPS] | TUNNEL/ PIXEL MODE |
| 0       | 0              | I 2 C  | 0x50           | STP    | 3                | Tunnel             |
| 1       | 20.2           | I 2 C  | 0x54           | STP    | 6                | Tunnel             |
| 2       | 32.1           | I 2 C  | 0x98           | STP    | 3                | Pixel              |
| 3       | 44.0           | I 2 C  | 0xD4           | STP    | 6                | Pixel              |
| 4       | 56.0           | UART   | 0xD4           | COAX   | 3                | Tunnel             |
| 5       | 67.9           | UART   | 0x98           | COAX   | 6                | Tunnel             |
| 6       | 79.8           | UART   | 0x54           | COAX   | 3                | Pixel              |
| 7       | 100            | UART   | 0x50           | COAX   | 6                | Pixel              |

## Evaluates: MAX96716A, MAX96716F, MAX96792A

Configuration-0  (CFG0)  pin  voltage  sets  the  device address  and  I 2 C  vs.  UART  mode.  For  example,  to  set device  address  0x54  with  I 2 C  communication,  apply 20.2% of VDDIO (CFG State 1) to pin CFG0.

Configuration-1 (CFG1) pin voltage sets coax vs. twisted pair mode (CXTP), data rate 3Gbps or 6Gbps and tunneling mode or pixel mode. For example, to set the DUT into Coax mode, 6Gbps and tunneling mode, apply 67.9% of VDDIO (CFG State 5) to pin CFG1.

After  changing  any  CFG  pin  settings,  power  cycle  the GMSL device to latch the new configuration settings.

By default, the EV kit is in CFG0 = 2, CFG1 = 7, mode for coax boards. For STP boards, the default modes are CFG0 = 2, CFG1 = 3.

## Deserializer Jumper/Connector/Switch/ Test Point Descriptions

Table 2 below contains detail of all connectors, jumpers, switches, and test point onboard the EV kit.

## MAX96716/MAX96792 EV kit Package Contents

The MAX96716/MAX96792 Evaluation Kit package contains the items listed in Table 3.

## MAX96716/MAX96792 DPHY Evaluation Kit

## CFG0 Input Map

| CFG0 INPUT VOLTAGE SPECIFICATION (Notes a, b) (% of V DDIO )   | CFG0 INPUT VOLTAGE SPECIFICATION (Notes a, b) (% of V DDIO )   | CFG0 INPUT VOLTAGE SPECIFICATION (Notes a, b) (% of V DDIO )   | SUGGESTED RESISTOR VALUES (1% TOLERANCE) (Note c)   | SUGGESTED RESISTOR VALUES (1% TOLERANCE) (Note c)   | MAPPED CONFIGURATION (Note d, e)   | MAPPED CONFIGURATION (Note d, e)   |
|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|------------------------------------|------------------------------------|
| MIN                                                            | TYP                                                            | MAX                                                            | R1 (Ω)                                              | R2 (Ω)                                              | I2CSEL                             | DEVICE ADDRESS                     |
| 0.0%                                                           | 0.0%                                                           | 11.7%                                                          | OPEN                                                | 10k                                                 | I 2 C                              | 0x50                               |
| 16.9%                                                          | 20.2%                                                          | 23.6%                                                          | 80.6k                                               | 20.5k                                               | I 2 C                              | 0x54                               |
| 28.8%                                                          | 31.2%                                                          | 35.5%                                                          | 68.1k                                               | 32.4k                                               | I 2 C                              | 0x98                               |
| 40.7%                                                          | 44.0%                                                          | 47.4%                                                          | 56.2k                                               | 44.2k                                               | I 2 C                              | 0xD4                               |
| 52.6%                                                          | 56.0%                                                          | 59.3%                                                          | 44.2k                                               | 56.2k                                               | UART                               | 0xD4                               |
| 64.5%                                                          | 67.9%                                                          | 71.2%                                                          | 32.4k                                               | 68.1k                                               | UART                               | 0x98                               |
| 76.4%                                                          | 79.8%                                                          | 83.1%                                                          | 20.5k                                               | 80.6k                                               | UART                               | 0x54                               |
| 88.3%                                                          | 100%                                                           | 100%                                                           | 10k                                                 | OPEN                                                | UART                               | 0x50                               |

## CFG1 Input Map

| SPECIFICATION (Notes a, b) (% of V DDIO )   | SPECIFICATION (Notes a, b) (% of V DDIO )   | SPECIFICATION (Notes a, b) (% of V DDIO )   | SUGGESTED RESISTOR VALUES (1% TOLERANCE) (Note c)   | SUGGESTED RESISTOR VALUES (1% TOLERANCE) (Note c)   | MAPPED CONFIGURATION   | MAPPED CONFIGURATION   | MAPPED CONFIGURATION       | MAPPED CONFIGURATION   |
|---------------------------------------------|---------------------------------------------|---------------------------------------------|-----------------------------------------------------|-----------------------------------------------------|------------------------|------------------------|----------------------------|------------------------|
| MIN                                         | TYP                                         | MAX                                         | R1 (Ω )                                             | R2 (Ω)                                              | COAX OR TWISTED PAIR   | DATA RATE [Gbps]       | FORWARD CHANNEL MODULATION | TUNNEL/PIXEL MODE      |
| 0.0%                                        | 0.0%                                        | 11.7%                                       | OPEN                                                | 10k                                                 | STP                    | 6                      | NRZ                        | Tunnel                 |
| 16.9%                                       | 20.2%                                       | 23.6%                                       | 80.6k                                               | 20.5k                                               | STP                    | 12                     | PAM4                       | Tunnel                 |
| 28.8%                                       | 32.1%                                       | 35.5%                                       | 68.1k                                               | 32.4k                                               | STP                    | 3                      | NRZ                        | Pixel                  |
| 40.7%                                       | 44.0%                                       | 47.4%                                       | 56.2k                                               | 44.2k                                               | STP                    | 6                      | NRZ                        | Pixel                  |
| 52.6%                                       | 56.0%                                       | 59.3%                                       | 44.2k                                               | 56.2k                                               | COAX                   | 6                      | NRZ                        | Tunnel                 |
| 64.5%                                       | 67.95%                                      | 71.2%                                       | 32.4k                                               | 68.1k                                               | COAX                   | 12                     | PAM4                       | Tunnel                 |
| 76.4%                                       | 79.8%                                       | 83.1%                                       | 20.5k                                               | 80.6k                                               | COAX                   | 3                      | NRZ                        | Pixel                  |
| 88.3%                                       | 100%                                        | 100%                                        | 10k                                                 | OPEN                                                | COAX                   | 6                      | NRZ                        | Pixel                  |

│

Evaluates: MAX96716A,

MAX96716F, MAX96792A

## MAX96716/MAX96792 DPHY Evaluation Kit

Evaluates: MAX96716A,

MAX96716F, MAX96792A

## Table 2. Deserializer Jumper/Connector/Switch/Test Point Description

| JUMPER   | SIGNAL                 | DEFAULT POSITION   | FUNCTION                                                        |
|----------|------------------------|--------------------|-----------------------------------------------------------------|
| POWER    | +12V, EXT PWR, 5V USB  | +12V               | Power to supply voltage VSUP                                    |
| J3       | External supply input  | Open               | Pin header for GND connection and optional external voltage     |
| J4       | SAMTEC connector       | Open               | Connector for MIPI signals and MFP (SPI, I 2 C, GPIOs) signals  |
| J5       | MFP signals            | Open               | Connection for MFP signals                                      |
| J6       | USB Connection         | Open               | Connection from PC to TEENSY and +5V USB connection             |
| J7, J8   | HMTD SIOA/B (±)        | Open               | HMTD connector for SIOA and SIOB GMSL signals                   |
| J10, J11 | VSUP, VPOC, SIOA/B(±)  | Open               | Connection between VSUP/VPOC and coax (FAKRA) connectors        |
| J14      | VSUP                   | Open               | Connection between VSUP and MAX20089                            |
| VDDIO    | VDDIO, 1.8V, 3.3V      | 1.8V               | Connection between VDDIO, 1.8V and 3.3V                         |
| VDD      | VDD, 1V, 1.2V          | 1V                 | Connection between VDD, 1V and 1.2V                             |
| VDD_REF  | VDD_REF                | 3.3V               | Connection between VDD_REF and 3.3V for I 2 C/UART lines        |
| RX_SDA   | UART TX, I2C SDA       | TNZ_SDA            | Selection of I 2C or UART connection to TEENSY                  |
| TX_SCL   | UART RX, I2C SCL       | TNZ_SCL            | Selection of I 2C or UART connection to TEENSY                  |
| EXP      | SDA_RX, SCL_TX         | Open               | External I 2C or UART connections                               |
| EXT_UC   | SDA, SCL, GND, VDD_REF | Open               | External I 2C or UART connections through the levels translator |
| JAP      | COAX SIOA+             | Open               | GMSL and PoC connection for COAX                                |
| SW1      | V SUP /POWER           | OFF                | ON/OFF switch for board power                                   |
| SW3      | PWDNB                  | OFF                | Push button for DUT power off by pulling PWDNB = LOW            |
| SW4      | (Flash µC)             | OFF                | Push button to program the Teensy microcontroller               |
| TP_12V   | +12V                   | N/A                | Test point for 12V input                                        |
| TP_3V3   | 3V3                    | N/A                | Test point for 3.3V rail                                        |
| TP_2V5   | 2V5                    | N/A                | Test point for 2.5V rail                                        |
| TP_1V8   | 1V8                    | N/A                | Test point for 1.8V rail                                        |
| TP_1V2   | 1V2                    | N/A                | Test point for 1.2V rail                                        |
| TP_1V    | 1V0                    | N/A                | Test point for 1.0V rail                                        |
| EXT      | EXT                    | N/A                | Wire loop for external power supply                             |

## Table 3. Items Included in the Evaluation Kit Package

| ITEM DESCRIPTION                        |   QTY |
|-----------------------------------------|-------|
| MAX96792/MAX96716 variant of the EV kit |     1 |
| Micro-USB cable                         |     1 |
| +12V wall supply                        |     1 |
| COAX cable                              |     1 |

│

## MAX96716/MAX96792 DPHY Evaluation Kit

## Troubleshooting

If the MAX96716/MAX96792 EV kit PCB fails to power-up or does not function properly, try the appropriate remedial actions below.

- 1) Make sure the board's red power switch (SW1) is set to the ON position.
- 2) Verify that the device is powered properly. Check to assure that the voltages at all device pins are within their operating ranges. The power rail LEDs (DS1, DS2) are a good indication that the critical rails (1.8V, 3.3V) are working.
- 3) Check that all jumpers are correctly set. Refer to the default jumper settings table in the serializer and deserializer EV kit data sheets. Also assure that all jumpers are firmly attached. Replace loose or dam -aged jumpers if necessary.
- 4) Check that the USB cable is properly seated in the USB port.
- 5) Check that the coax/STP cable connection between serializer and deserializer is good.
- 6) Check to see if the DUT has been inadvertently put into Teensy reset mode. The board's TEENSY\_RST SW4 button should only be pressed when firmware is being flashed to the DUT. If the button is pressed during normal operation, the device goes into Teensy reset mode. Power cycle the board to resume normal operation with the current firmware.
- 7) Validate that the correct CFG pin voltages are being used to configure the serializer and deserializer. Check the method of biasing the CFG voltage at powerup. Measure the voltages at the pins. For details, see the Configuration (CFG) Pin Settings section.
- 8) If the CFG pin settings are incorrect, but the device is not identified in the GUI, proceed to the CFG pin page and set the desired CFG state values anyway. Reset the part and see if the GUI automatically identifies the device or if the device can be located using

## Evaluates: MAX96716A, MAX96716F, MAX96792A

the Identify Devices drop-down from the Options tab. The low-level commands tab can be monitored to see if I 2 C writes to the CFG pots are successful.

- 9) Check that the I2C/UART jumpers match the DUT communication mode (SCL/SDA for I 2 C, TX/RX for UART).
- 10)  Check that the AC coupling capacitors are populated correctly and routing the serial link to the correct connector for COAX or STP mode. For coax boards, capacitors C64 and C49 (PHY B) and capacitors C63 and C47 (PHY A) should be populated. For STP boards, capacitors C58 and C59 (PHY B) and capacitors C56 and C57 (PHY A) should be populated. (MAX96716/MAX96792 EV kit boards are shipped with the correct capacitors installed.)
- 11)  Check if the LOCK LED is ON in the absence of a connection to the serializer. If so, one of the following conditions apply:
- The DUT is not powered correctly
- The DUT is damaged
- The DUT is in incorrect mode
- 12) Check that the microcontroller firmware is active by observing the blinking red Teensy LED (DS6) at power-up. If the LED is not blinking, refer to the available software documentation to reprogram the microcontroller.
- 13)  Check that the PC is detecting the COM port when the micro-USB cable is connected. Use the Windows Device Manager to check COM port status.
- 14)  Power-cycle the board and reopen the GUI.
- 15) Try a new or different serializer or deserializer board.

## Detailed Description of Hardware

The power configuration of the EV kit hardware may be reconfigured to allow external supply connections. Figure 4 shows the power connection options.

## MAX96716/MAX96792 DPHY Evaluation Kit

Evaluates: MAX96716A, MAX96716F, MAX96792A

Figure 4. MAX96716/MAX96792 Deserializer Evaluation Board Power Connection Diagram

<!-- image -->

## MAX96716/MAX96792 DPHY Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE             | WEBSITE                                    |
|----------------------------------------|-------------------|--------------------------------------------|
| ECS, Inc.                              | 913-782-7787      | www.ecsxtal.com                            |
| KYOCERA                                | N/A               | https://global.kyocera.com/                |
| Murata Electronics North America, Inc. | 770-436-1300      | www.murata-northamerica.com                |
| Rosenberger Hochfrequenztechnik GmbH   | 011-49-86 84-18-0 | www.rosenberger.de                         |
| TDK Corp.                              | 847-803-6100      | product.tdk.com/info/en/catalog/index.html |
| Diodes Incorporated                    | 972-987-3900      | www.diodes.com                             |
| ROHM                                   | N/A               | www.rohm.com                               |
| Sullins Electronics Corp               | 760-744-0125      | www.sullinscorp.com                        |
| Panasonic North America                | N/A               | na.panasonic.com/us/                       |
| Coilcraft                              | 847-639-6400      | www.coilcraft.com                          |

## Ordering Information

| PART               | TYPE                                                      |
|--------------------|-----------------------------------------------------------|
| MAX96716A-BCK-EVK# | Dual GMSL2 to CSI-2 Deserializer, 3/6Gbps, DPHY w/HMTD    |
| MAX96716A-BAK-EVK# | Dual GMSL2 to CSI-2 Deserializer, 3/6Gbps, DPHY w/COAX    |
| MAX96716F-BCK-EVK# | Dual GMSL2 to CSI-2 Deserializer, 3Gbps, DPHY w/HMTD      |
| MAX96716F-BAK-EVK# | Dual GMSL2 to CSI-2 Deserializer, 3Gbps, DPHY w/COAX      |
| MAX96792A-BCK-EVK# | Dual GMSL3 to CSI-2 Deserializer, 3/6/12Gbps, DPHY w/HMTD |
| MAX96792A-BAK-EVK# | Dual GMSL3 to CSI-2 Deserializer, 3/6/12Gbps, DPHY w/Coax |

Note:

The MAX96716 EV kits are normally ordered with a companion serializer board.

· MAX96717 EV kit.

Evaluates: MAX96716A,

MAX96716F, MAX96792A

│

## MAX96716/MAX96792 DPHY Evaluation Kit

## MAX96716/MAX96792 EV Kit Bill of Materials (Coax)

|   ITEM | REF_DES                                                                                                            | DNI/DNP   | QTY    | MFG PART #                                                                                                                                                                 | MANUFACTURER                                                                                                                       | VALUE            | DESCRIPTION                                                                                                    | COMMENTS   |
|--------|--------------------------------------------------------------------------------------------------------------------|-----------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|------------------|----------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C4, C5, C10, C11, C17, C18, C26, C29-C32, C34-C37, C39, C40, C46, C50-C53, C71, C74, C75, C80, C81, C119, C120 | -         | 30     | C1005X7R1C104K050BC; ATC530L104KT16; 0402YC104KAT2A; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; CL05B104KO5 | TDK; AMERICAN TECHNICAL CERAMICS; AVK; VENKEL LTD.; SAMSUNG ELECTRONICS; MURATA;TDK;YAGEO PHICOMP; TAIYO YUDEN;SAMSUNG ELECTRONICS | 0.1UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |            |
|      2 | C2                                                                                                                 | -         | 1      | C1005C0G1H220G050                                                                                                                                                          | TDK                                                                                                                                | 22PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 22PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                       |            |
|      3 | C3                                                                                                                 | -         | 1      | C0402C0G500270JNP; GRM1555C1H270JA01                                                                                                                                       | VENKEL LTD.;MURATA                                                                                                                 | 27PF             | CAPACITOR; SMT; 0402; CERAMIC; 27pF; 50V; 5%; C0G; -55degC to + 125degC; 0 +/-30PPM/degC                       |            |
|      4 | C6, C7                                                                                                             | -         | 2      | TAJC476K020RNJ                                                                                                                                                             | AVX                                                                                                                                | 47UF             | CAPACITOR; SMT (6032); TANTALUM CHIP; 47UF; 20V; TOL=10%; MODEL=TAJ SERIES; TG=-55 DEGC TO +125 DEGC           |            |
|      5 | C8, C9, C12-C14, C19-C25, C38, C43-C45, C48, C77                                                                   | -         | 18     | GRT188R61C106KE13                                                                                                                                                          | MURATA                                                                                                                             | 10UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R; AUTO                 |            |
|      6 | C15                                                                                                                | -         | 1      | C1608X7R1V105K080AC; CGA3E1X7R1V105K080AC                                                                                                                                  | TDK;TDK                                                                                                                            | 1UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |            |
|      7 | C16, C28, C33                                                                                                      | -         | 3      | GRM188Z71C225KE43                                                                                                                                                          | MURATA                                                                                                                             | 2.2UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |            |
|      8 | C27                                                                                                                | -         | 1      | T491X107K025A                                                                                                                                                              | KEMET                                                                                                                              | 100UF            | CAPACITOR; SMT (7343-43); TANTALUM CHIP; 100UF; 25V; TOL=10%                                                   |            |
|      9 | C41, C42                                                                                                           | -         | 2      | C1608X5R0J475M080AB; GRM188R60J475ME19; JMK107BJ475MA                                                                                                                      | TDK;MURATA;TAIYO YUDEN                                                                                                             | 4.7UF            | CAPACITOR; SMT (0603); CERAMIC; 4.7UF; 6.3V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R          |            |
|     10 | C47, C49, C63, C64                                                                                                 | -         | 4      | UMK105BJ224KV                                                                                                                                                              | TAIYO YUDEN                                                                                                                        | 0.22UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                     |            |
|     11 | C54, C55                                                                                                           | -         | 2      | GRM155R71H103JA88                                                                                                                                                          | MURATA                                                                                                                             | 0.01UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |            |
|     12 | C72, C73, C76, C78, C79                                                                                            | -         | 5      | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV                                                                                      | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC; TAIYO YUDEN                                                                                  | 0.01UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |            |
|     13 | D1, D2                                                                                                             | -         | 2 ES1D | 2 ES1D                                                                                                                                                                     | FAIRCHILD SEMICONDUCTOR                                                                                                            | ES1D             | DIODE; RECT; SMA (DO-214AC); PIV=200V; IF=1A                                                                   |            |
|     14 | D3                                                                                                                 | -         | 1      | DFLS140L                                                                                                                                                                   | DIODES INCORPORATED                                                                                                                | DFLS140L         | DIODE; SCH; SMT (POWERDI-123); PIV=40V; IF=1A                                                                  |            |
|     15 | D4                                                                                                                 | -         | 1      | B360B-13-F                                                                                                                                                                 | DIODES INCORPORATED                                                                                                                | B360B-13-F       | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMB; PIV=60V; Io=3A; -55 DEGC TO +125 DEGC                                 |            |
|     16 | DS1, DS2, DS5, DS7                                                                                                 | -         | 4      | SML-P11MTT86                                                                                                                                                               | ROHM                                                                                                                               | SML-P11MTT86     | DIODE; LED; SMT; PIV=5V; IF=0.02A                                                                              |            |
|     17 | DS4, DS6                                                                                                           | -         | 2      | SML-P11UTT86                                                                                                                                                               | ROHM                                                                                                                               | SML-P11UTT86     | DIODE; LED; SMT; PIV=1.8V; IF=0.02A                                                                            |            |
|     18 | EXP, J14, VDD_REF                                                                                                  | -         | 3      | PBC02SAAN                                                                                                                                                                  | SULLINS ELECTRONICS CORP.                                                                                                          | PBC02SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                      |            |
|     19 | EXT, GND                                                                                                           | -         | 2      | 9020 BUSS                                                                                                                                                                  | WEICO WIRE                                                                                                                         | MAXIMPAD         | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                       |            |
|     20 | EXT_UC                                                                                                             | -         | 1      | PBC04SAAN                                                                                                                                                                  | SULLINS ELECTRONICS CORP.                                                                                                          | PBC04SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC                               |            |
|     21 | J1                                                                                                                 | -         | 1      | PJ-002AH                                                                                                                                                                   | CUI INC.                                                                                                                           | PJ-002AH         | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                               |            |
|     22 | J3                                                                                                                 | -         | 1      | 393570002                                                                                                                                                                  | MOLEX                                                                                                                              | 393570002        | CONNECTOR; FEMALE; THROUGH HOLE; 0.3MM PITCH BEAU EUROSTYLE FIXED MOUNT PCB TERMINAL BLOCK; RIGHT ANGLE; 2PINS |            |
|     23 | J4                                                                                                                 | -         | 1      | QSH-030-01-L-D-A                                                                                                                                                           | SAMTEC                                                                                                                             | QSH-030-01-L-D-A | CONNECTOR; MALE; SMT; HI-SPEED GROUND PLANE SOCKETS; STRAIGHT THROUGH; 60PINS; -55 DEGC TO +125DEGC            |            |
|     24 | J5                                                                                                                 | -         | 1      | PBC12SAAN                                                                                                                                                                  | SULLINS ELECTRONICS CORP.                                                                                                          | PBC12SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 12PINS; -65 DEGC TO +125 DEGC                              |            |
|     25 | J6                                                                                                                 | -         | 1      | 1981568-1                                                                                                                                                                  | TE CONNECTIVITY                                                                                                                    | 1981568-1        | CONNECTOR; FEMALE; SMT; MICRO USB STANDARD TYPE B ASSY; RIGHT ANGLE; 5PINS                                     |            |
|     26 | J10, J11, RX_SDA, TX_SCL, VDD, VDDIO                                                                               | -         | 6      | PBC03SAAN                                                                                                                                                                  | SULLINS                                                                                                                            | PBC03SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                               |            |
|     27 | JAB, JAP                                                                                                           | -         | 2      | 59S2AQ-40MT5-Z_1                                                                                                                                                           | ROSENBERGER                                                                                                                        | 59S2AQ-40MT5-Z_1 | CONNECTOR; MALE; THROUGH HOLE; FAKRA-HF RIGHT ANGLE PLUG PCB WITH HOUSING; RIGHT ANGLE; 5PINS                  |            |
|     28 | L1, L3, L6, L19                                                                                                    | -         | 4      | PFL1609-471ME                                                                                                                                                              | COILCRAFT                                                                                                                          | 0.47UH           | INDUCTOR; SMT; SHIELDED; 0.47UH; 20%; 1.3A                                                                     |            |
|     29 | L2, L4                                                                                                             | -         | 2      | MSS6132T-223ML                                                                                                                                                             | COILCRAFT                                                                                                                          | 22UH             | INDUCTOR; SMT; SHIELDED; 22UH; 20%; 1.9A                                                                       |            |
|     30 | L5, L18                                                                                                            | -         | 2      | 1210POC-682MR                                                                                                                                                              | COILCRAFT                                                                                                                          | 6.8UH            | EVKIT PART-INDUCTOR; SMT; FERRITE; CHOKE; TOL=+/-20%; 1A                                                       |            |

## MAX96716/MAX96792 EV Kit Bill of Materials (Coax) (continued)

|   ITEM | REF_DES                                                        | DNI/DNP   |   QTY | MFG PART #                                                             | MANUFACTURER                  | VALUE              | DESCRIPTION                                                                                                                                                                                                                                 | COMMENTS   |
|--------|----------------------------------------------------------------|-----------|-------|------------------------------------------------------------------------|-------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
|     31 | L7-L11                                                         | -         |     5 | BLM18KG601SN1                                                          | MURATA                        | 600                | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-25%; 1.3A                                                                                                                                                                                   |            |
|     32 | L12, L15                                                       | -         |     2 | DFE252012P-4R7M=P2                                                     | MURATA                        | 4.7UH              | INDUCTOR; SMT (2520); FERRITE CORE; 4.7UH; TOL=+/-20%; 1.7A                                                                                                                                                                                 |            |
|     33 | L13, L14                                                       | -         |     2 | TFM201610ALMA2R2MTAA                                                   | TDK                           | 2.2UH              | INDUCTOR; SMT (2016); THIN FILM; 2.2UH; TOL=+/-20%; 2.1A                                                                                                                                                                                    |            |
|     34 | L16                                                            | -         |     1 | BLM18SG121TN1                                                          | MURATA                        | 120                | INDUCTOR; SMT (0603); FERRITE-BEAD; 120; TOL=+/-25%; 3A                                                                                                                                                                                     |            |
|     35 | L17                                                            | -         |     1 | RFCMF1220100M3                                                         | WALSIN TECHNOLOGY CORPORATION | RFCMF1220100M3     | INDUCTOR; SMT; CERAMIC CHIP; CHOKE; 0.3A                                                                                                                                                                                                    |            |
|     36 | POWER                                                          | -         |     1 | PEC04SAAN                                                              | SULLINS ELECTRONICS CORP.     | PEC04SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                                                                                   |            |
|     37 | R1-R3, R13, R20, R21, R23, R24, R26, R34,R40, R41, R47         | -         |    13 | ERJ-2GEJ103                                                            | PANASONIC                     | 10K                | RESISTOR; 0402; 10K OHM; 5%;200PPM; 0.10W; THICK FILM                                                                                                                                                                                       |            |
|     38 | R4, R5                                                         | -         |     2 | ERJ-2GEJ203                                                            | PANASONIC                     | 20K                | RESISTOR; 0402; 20K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                                                                                      |            |
|     39 | R6-R9, R11                                                     | -         |     5 | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00                             | VISHAY DALE;ROHM; PANASONIC   | 0                  | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                                                                        |            |
|     40 | R12, R31-R33                                                   | -         |     4 | ERJ-2RKF1001                                                           | PANASONIC                     | 1K                 | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                       |            |
|     41 | R14, R22, R37-R39, R43-R46, R53, R54, R72-R74, R80, R150, R151 | -         |    17 | ERJ-2GE0R00                                                            | PANASONIC                     | 0                  | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                                                                        |            |
|     42 | R15, R27                                                       | -         |     2 | CRCW040233R0FK                                                         | VISHAY DALE                   | 33                 | RESISTOR, 0402, 33 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                                                     |            |
|     43 | R16, R48, R203, R204                                           | -         |     4 | ERJ-3EKF5101                                                           | PANASONIC                     | 5.1K               | RESISTOR; 0603; 5.1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                     |            |
|     44 | R19, R83                                                       | -         |     2 | 3214W-1-204                                                            | BOURNS                        | 200K               | RESISTOR; SMT-J LEAD; 3214 SERIES; 200K OHM; 10%; 100PPM; 0.25W                                                                                                                                                                             |            |
|     45 | R28                                                            | -         |     1 | ERJ-2RKF4700                                                           | PANASONIC                     | 470                | RESISTOR; 0402; 470 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                                                                       |            |
|     46 | R29, R30                                                       | -         |     2 | CRCW060349R9FK                                                         | VISHAY DALE                   | 49.9               | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                     |            |
|     47 | R35                                                            | -         |     1 | CRCW0603402RFK                                                         | VISHAY DALE                   | 402                | RESISTOR; 0603; 402 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                      |            |
|     48 | R49                                                            | -         |     1 | ERJ-2GEJ104                                                            | PANASONIC                     | 100K               | RESISTOR; 0402; 100K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                                                                                     |            |
|     49 | R55                                                            | -         |     1 | CRCW04022K20FK; RC0402FR-072K2L                                        | VISHAY DALE; YAGEO PHICOMP    | 2.2K               | RESISTOR, 0402, 2.2K OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                                                                   |            |
|     50 | R81, R82, R85, R87, R121, R128-R130                            | -         |     8 | ERJ-2RKF4991                                                           | PANASONIC                     | 4.99K              | RESISTOR; 0402; 4.99K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                                    |            |
|     51 | SW1                                                            | -         |     1 | 1101-M2-S3-A-Q-E-2                                                     | C&K COMPONENTS                | 1101-M2-S3-A-Q-E-2 | SWITCH; SPDT; THROUGH HOLE; RIGHT ANGLE; 120V; 6A; 1000 SERIES; RCOIL=0.1 OHM; RINSULATION=100GOHM                                                                                                                                          |            |
|     52 | SW3, SW4                                                       | -         |     2 | KMR421G LFS                                                            | C&K COMPONENTS                | KMR421G LFS        | SWITCH; SPST; SMT; STRAIGHT; 32V; 0.05A; MICROMINIATURE SMT TOP ACTUATED; RCOIL=0.1 OHM OHM; RINSULATION=1GOHM OHM                                                                                                                          |            |
|     53 | TP_CFG0, TP_CFG1                                               | -         |     2 |                                                                        | 5000 KEYSTONE                 | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                                                            |            |
|     54 | U1                                                             | -         |     1 | MAX96716AGTM/VY+; MAX96716FGTM/VY+; MAX96716KGTM/VY+; MAX96792AGTM/VY+ | MAXIM                         | MAX96716AGTM/VY+   | EVKIT PART - IC; MAX96792AGTM/VY+; MAX96716AGTM/VY+; MAX96716FGTM/VY+; MAX96716KGTM/VY+; MAX96718AGTM/VY+; MAX96718FGTM/VY+; DUAL GMSL2 TO CSI-2 DESERIALIZER; PACKAGE OUTLINE: 21-100045; LAND PATTERN: 90-100016; PACKAGE CODE: T4877Y+11 |            |
|     55 | U2                                                             | -         |     1 | MAX20019ATBI/V+                                                        | MAXIM                         | MAX20019ATBI/V+    | EVKIT PART-IC; VCON; 3.2MHZ; 500MILLIAMPERE DUAL STEP-DOWN CONVERTER FOR AUTOMOTIVE CAMERA; PACKAGE OUTLINE: 21- 100125; LAND PATTERN DRAWING NO.: 90-100079;                                                                               |            |
|     56 | U3                                                             | -         |     1 | MK20DX256VLH7                                                          | FREESCALE                     | MK20DX256VLH7      | PACKAGE CODE: T1032+2C; TDFN10-EP IC; UCON; KINETIS K2X MCUFAMILY; LQFP64                                                                                                                                                                   |            |
|     57 | U4                                                             | -         |     1 | IC_MKL02Z32_QFN16                                                      | PJRC                          | IC_MKL02Z32_QFN16  | IC; UCON; KINETIS KL02 32 KB FLASH; 48 MHZ CORTEX-M0+ BASED MICROCONTROLLER; MKL02 CHIP WITH PRE-PROGRAMMED TEENSY LC AND 3.2 BOOTLOADER; QFN16-EP                                                                                          |            |
|     58 | U5, U6                                                         | -         |     2 | MAX3373EEKA+                                                           | MAXIM                         | MAX3373EEKA+       | IC; TRANS; +/-15KV ESD-PROTECTED; 16MPBS; DUAL LOW-VOLTAGE LEVEL TRANSLATOR; SOT23-8                                                                                                                                                        |            |
|     59 | U7, U8                                                         | -         |     2 | 74LVC1G86GV                                                            | NXP                           | 74LVC1G86GV        | IC; XOR; 2-INPUT EXCLUSIVE-OR GATE; SOT753                                                                                                                                                                                                  |            |

Evaluates: MAX96716A, MAX96716F, MAX96792A

## MAX96716/MAX96792 EV Kit Bill of Materials (Coax) (continued)

|   ITEM | REF_DES                           | DNI/DNP   | QTY   | MFG PART #                                 | MANUFACTURER                       | VALUE            | DESCRIPTION                                                                                                                                   | COMMENTS   |
|--------|-----------------------------------|-----------|-------|--------------------------------------------|------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|------------|
|     60 | U9                                | -         | 1     | MAX16922ATPH/V+                            | MAXIM                              | MAX16922ATPH/V+  | IC; CONV; 2.2MHZ; DUAL; STEP-DOWN DC-DC CONVERTER; DUAL LDOS AND RESET; TQFN20-EP                                                             |            |
|     61 | U10                               | -         | 1     | MAX20089ATPA/VY+                           | MAXIM                              | MAX20089ATPA/VY+ | IC; PROT; DUAL CAMERA POWER PROTECTORS; TQFN20- EP; PACKAGE OUTLINE DRAWING: 21-100172; PACKAGE CODE: T2044+4C; PACKAGE LAND PATTERN: 90-0409 |            |
|     62 | U11                               | -         | 1     | MAX5419LETA+                               | MAXIM                              | MAX5419LETA+     | IC; DPOT; 200K OHM; 256-TAP NONVOLATILE I2C-INTERFACE DIGITAL POTENTIOMETER; TDFN8-EP                                                         |            |
|     63 | U12                               | -         | 1     | MAX5419META+                               | MAXIM                              | MAX5419META+     | IC; DPOT; 200K OHM; 256-TAP NONVOLATILE I2C-INTERFACE DIGITAL POTENTIOMETER; TDFN8-EP                                                         |            |
|     64 | Y1                                | -         | 1     | ECS-250-18-33Q-DS                          | ECS INC                            | 25MHZ            | CRYSTAL; SMT 3.2X2.5; 18PF; 25MHZ; +/-30PPM; +/-100PPM                                                                                        |            |
|     65 | Y2                                | -         | 1     | CX2016DB16000D0WZRC1                       | KYOCERA                            | 16MHZ            | CRYSTAL; SMT 2.0 MMX1.6 MM; 8PF; 16MHZ; +/-25PPM; +/-40PPM                                                                                    |            |
|     66 | PCB                               | -         | 1     | MAX96716DPHY                               | MAXIM                              | PCB              | PCB:MAX96716DPHY                                                                                                                              | -          |
|     67 | EV_KIT_BOX3                       | -         | 1     | GKFYACRYL-001                              | GEEKIFY                            | N/A              | EVKIT PART-ACCESSORY; PLASTIC COVER; TOP PLASTIC COVER WITH MAXIM LOGO                                                                        |            |
|     68 | EV_KIT_BOX3                       | -         | 1     | GKFYACRYL-002                              | GEEKIFY                            | N/A              | EVKIT PART-ACCESSORY; PLASTIC COVER; BOTTOM PLASTIC COVER WITHOUT MAXIM LOGO                                                                  |            |
|     69 | EV_KIT_BOX3                       | -         | 4     | BS34CL06X25AP                              | BUMPER SPECIALTIES INC.            | N/A              | BUMPER; CLEAR-CYLINDRICAL SHAPE; 0.375D/0.125H; POLYURETHANE                                                                                  |            |
|     70 | EV_KIT_BOX3                       | -         | 4     |                                            | 4802 KEYSTONE                      | N/A              | STANDOFF; MALE_FEMALE-THREADED; HEX; 4-40IN; 0.50IN; NYLON                                                                                    |            |
|     71 | EV_KIT_BOX3                       | -         | 4     | 1902D                                      | KEYSTONE                           | N/A              | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/4IN; NYLON                                                                                          |            |
|     72 | EV_KIT_BOX3                       | -         | 8     | NY PMS 440 0025 PH                         | B&F FASTENER SUPPLY                | N/A              | MACHINE SCREW; PHILLIPS; PAN; 4-40; 1/4IN; NYLON                                                                                              |            |
|     73 | EV_KIT_BOX4                       | -         | 2     | 24480                                      | KEYSTONE                           | N/A              | STANDOFF; FEMALE-THREADED; HEX; M3; 5MM; STEEL                                                                                                |            |
|     74 | EV_KIT_BOX4                       | -         | 4     | RM3X4MM 2701                               | APM HEXSEAL                        | N/A              | MACHINE SCREW; PHILLIPS; PAN; M3; 4MM; STAINLESS STEEL                                                                                        |            |
|     75 | EV_KIT_BOX5                       | -         | 9     | NPC02SXON-RC                               | SULLINS ELECTRONICS CORP.          | N/A              | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN TOP; JUMPER; STRAIGHT; 2PINS                                                                  |            |
|     76 | PACKOUT_BOX                       | DNI       | 1     | AK67421-0.5                                | ASSMANN                            | N/A              | CONNECTOR; USB CABLE; MALE-MALE; USB_2.0; 5PINS-4PINS; 500MM                                                                                  |            |
|     77 | PACKOUT_BOX                       | DNI       | 1     | WSU120-2000                                | TRIAD MAGNETICS                    | N/A              | ACCESSORY; WALL ADAPTER; VI-(90-264VAC); VO-(12VDC); 6FT                                                                                      |            |
|     78 | PACKOUT_BOX                       | DNI       | 1     | SK-5115                                    | AMPHENOL ADRONICS                  | N/A              | CONNECTOR; COAX CABLE; MALE-FEMALE; WIREMOUNT; 2000MM;                                                                                        |            |
|     79 | C56-C59                           | DNP       | 0     | UMK105BJ224KV                              | TAIYO YUDEN                        | 0.22UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                    |            |
|     80 | J7, J8                            | DNP       | 0     | E6S201-40MT5-Z                             | ROSENBERGER                        | E6S201-40MT5-Z   | EVKIT PART - CONNECTOR; MALE;THROUGH HOLE; PLUG PCB; RIGHT ANGLE; 2PINS;                                                                      |            |
|     81 | R10                               | DNP       | 0     | CRCW06030000ZS; MCR03EZPJ000; ERJ-3GEY0R00 | VISHAY DALE;ROHM; PANASONIC        | 0                | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                          |            |
|     82 | R17, R25                          | DNP       | 0     | ERJ-2RKF4872                               | PANASONIC                          | 48.7K            | RESISTOR; 0402; 48.7K OHM; 1%;100PPM; 0.1W; THICK FILM                                                                                        |            |
|     83 | R18                               | DNP       | 0     | CRCW0402200KFK; RF73H1ELTP2003             | VISHAY DALE; KOA SPEER ELECTRONICS | 200K             | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                         |            |
|     84 | R36, R42, R84, R86, R88, R89      | DNP       | 0     | ERJ-2GE0R00                                | PANASONIC                          | 0                | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                          |            |
|     85 | R75-R79, R90, R91, R93, R94 TOTAL | DNP       | 0 242 | ERJ-2GE0R00                                | PANASONIC                          | 0                | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                          | DNI        |

## MAX96716/MAX96792 DPHY Evaluation Kit

## MAX96716/MAX96792 EV Kit Schematics

<!-- image -->

│

Evaluates: MAX96716A, MAX96716F, MAX96792A

## MAX96716/MAX96792 EV Kit Schematics (continued)

<!-- image -->

## MAX96716/MAX96792 EV Kit Schematics (continued)

<!-- image -->

│

## MAX96716/MAX96792 EV Kit Schematics (continued)

<!-- image -->

## MAX96716/MAX96792 EV Kit Schematics (continued)

<!-- image -->

## MAX96716/MAX96792 EV Kit Schematics (continued)

<!-- image -->

## MAX96716/MAX96792 DPHY Evaluation Kit

## MAX96716/MAX96792 EV Kit PCB Layout Diagrams

<!-- image -->

MAX96716/MAX96792 EV Kit Component Placement GuideTop Silkscreen

<!-- image -->

MAX96716/MAX96792 EV Kit Component Placement Guide-L2\_GND

MAX96716/MAX96792 EV Kit Component Placement GuideTop

<!-- image -->

MAX96716/MAX96792 EV Kit Component Placement Guide-L3\_SIG

<!-- image -->

│

Evaluates: MAX96716A,

MAX96716F, MAX96792A

Evaluates: MAX96716A,

MAX96716F, MAX96792A

## MAX96716/MAX96792 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX96716/MAX96792 EV Kit Component Placement Guide-L4\_GND

<!-- image -->

MAX96716/MAX96792 EV Kit Component Placement Guide-L6\_SIG

MAX96716/MAX96792 EV Kit Component Placement Guide-L5\_PWR

<!-- image -->

MAX96716/MAX96792 EV Kit Component Placement Guide-L7\_GND

<!-- image -->

│

## MAX96716/MAX96792 DPHY Evaluation Kit

Evaluates: MAX96716A,

MAX96716F, MAX96792A

## MAX96716/MAX96792 EV Kit PCB Layout Diagrams (continued)

MAX96716/MAX96792 EV Kit Component Placement GuideBottom

<!-- image -->

MAX96716/MAX96792 EV Kit Component Placement GuideBottom Silkscreen

<!-- image -->

│

## MAX96716/MAX96792 DPHY Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------|-----------------|
|                 0 | 2/24            | Initial release              | -               |
|                 1 | 4/24            | Added MAX96792A to document. | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX96716A,

MAX96716F, MAX96792A