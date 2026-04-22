<!-- lastmod 2024-04-04 -->
<!-- image -->

Evaluates: MAX9295D

## General Description

The MAX9295D  Coax/HSD  evaluation  kit (EV kit) provides  a  reliable  platform  for  evaluating  Maxim's MAX9295D GMSL2/GMSL1 CSI serializer using a standard  FAKRA  coax  cable  or  HSD-STQ  cable.  The  serializer  device  supports  high-bandwidth,  gigabit  multimedia  serial  links  (GMSL2/GMSL1)  and  offers  spread spectrum  and  full-duplex  control  channel  features.  The EV  kit  includes  a  simple-to-use  Windows  10-compatible  graphical  user  interface  (GUI)  for  exercising  device features.

For complete GMSL evaluation using a standard FAKRA coax  cable  or  HSD-STQ  cable,  order  the  MAX9295D Coax/HSD EV kit along with a deserializer board.

For  a  detailed  look  at  all  GMSL2  features,  including information on how to use the parts, refer to the GMSL2 User's Guide.

Note: Throughout  this  document,  the  term  serializer refers  to  the  MAX9295D.  The  term  deserializer  refers to  any  compatible  GMSL  deserializer  device.  Although coax cable is referenced throughout this document, the information  applies  equally  to  both  coax  and  HSD-STQ evaluation kits.

## MAX9295D EV Kit Files

| FILE                                 | DESCRIPTION                                                                                                                                 |
|--------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| MAXSerDesEV-GMSL_VX_X_XX_Install.exe | Installs the EV kit software (GUI) onto a Windows 7/Windows 10 computer. Includes GUI user's guide, microcontroller firmware, documentation |
| MAXSerDesEV-GMSL.exe                 | GMSL Graphical User Interface (GUI) program                                                                                                 |

Windows is a registered trademark and service mark of Microsoft Corporation.

©

Click here to ask an associate for production status of specific part numbers.

## MAX9295D Coax/HSD Evaluation Kit

## Features

- GMSL  Serializer  Accepts  MIPI  CSI  v1.3  DPHY v1.2 Input
- Converts to GMSL1/GMSL2 Serial Data Through Coaxial FAKRA or Differential Twisted Quad HSD Connectors
- Accepts CSI Input Data (Dual Port, Up to Four Lanes Per Port)
- Windows 10-Compatible Software Support
- Powerful,  Simple-to-Use  GUI  for  Comprehensive Device Feature Evaluation
- USB-Control Interface (Cable Included)
- Board Powered by USB, 12V Wall Adapter, External Power Supply, or Power-over-Coax (PoC) Cable
- Proven PCB Layout
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

319-100675; Rev 1; 2/24

One  Analog  Way,  Wilmington,  MA  0187  U.S.A.    |      Tel:  781.329.4700      |      © 2024  Analog  Devices,  Inc.  All  rights  reserved. 2024 Analog Devices, Inc. All rights reserved. Trademarks and registered trademarks are the property of their respective owners.

## MAX9295D Coax/HSD Evaluation Kit

Evaluates: MAX9295D

Figure 1. MAX9295D EV Kit Typical Block Diagram

<!-- image -->

## MAX9295D Coax/HSD Evaluation Kit

Evaluates: MAX9295D

Figure 2. MAX9295D Coax/HSD EV Kit Key Components and Jumper Installation on Front of Board

<!-- image -->

Figure 3. MAX9295D Coax/HSD EV Kit Key Components on Back of Board

<!-- image -->

## MAX9295D Coax/HSD Evaluation Kit

## Quick Start

This procedure applies to both the coax and HSD evaluation kits. Figure 4 shows a typical application using the MAX9295D CSI serializer.

## Required Equipment

- MAX9295D Coax/HSD EV kit
- GMSL2 deserializer EV kit
- FAKRA coax cable assembly
- PC with Windows 7/Windows 10 and GMSL evaluation software installed
- Power supply source (500mA USB port, 5V/1A DC supply, or 12V barrel jack DC supply)
- Micro-USB cable
- CSI video source (optional)
- CSI Video Capture/Analysis system (optional)

## Procedure

The  MAX9295D  Coax/HSD  EV  kit  is  shipped  with  the PCB fully assembled and tested. Use the following steps to verify board operation:

- 1) Download and install the latest GMSL GUI software from the Maxim Integrated Sharefile onto a Windows 7/Windows 10 PC. The PC must be connected to the MAX9295D EV kit PCB through the  board's  microUSB port (J3). Contact the factory for additional information on accessing the software. Refer to the GMSL GUI User's Guide for detailed instruction on using the software.
- 2) Ensure that the MAX9295D EV kit PCB's red power switch (SW1) is in the OFF position.
- 3) Ensure that all jumper positions on the PCB are properly set to meet the requirements of the user's application. Figure 2 and Table 2 show the possible jumper  positions  for  various  configurations.  The  default jumper settings put the device under test (DUT) into I 2 C  mode, select 3.3V as the V DDIO  voltage, select

TEENSY is a registered trademark of PJRC.COM LLC.

## Evaluates: MAX9295D

1V as the V DD voltage, and configure the board to be powered by the 12V DC barrel jack.

- 4) Connect  a  power  supply  to  the  MAX9295D  EV  kit PCB. The board provides several power supply options:
- A 12V DC barrel jack supply connected to connector J5 (default jumper position)
- A 5V external power supply connected to the external power terminal block (J6)
- A 5V supply drawn from the micro-USB port (J3) connected to the PC
- Power-over-Coax (PoC) from the connected deserializer platform.  To use PoC, install a jumper at connector J10 and disconnect other power supply sources.  Power must be applied to the deserializer board, and the deserializer board's PoC must be connected.
- 5) Power up the board by moving the red power switch (SW1) to the ON position. The power LEDs DS4 and DS5 illuminate to indicate that power is enabled. The TEENSY® LED  (DS3)  flashes  to  indicate  that  the board firmware is functional. (If the TEENSY LED is not flashing, see the Troubleshooting section.)
- 6) Define the application-specific power-up configuration for the DUT, and use the GMSL GUI to set the device's CFG pins at  the  required  levels.  (See  the Configu -ration  (CFG)  Pin  Settings section.)  The  MAX9295D must be configured with the same link configuration (GMSL1/GMSL2,  link  speed/link  configuration,  and coax/STP) as the companion deserializer board. Refer to the EV kit data sheet of the deserializer platform for details on how to configure the deserializer. The DUT must be power cycled if any changes are made to  the  CFG  pins.  (Use  the  DUT\_RST button (SW3) on the board to power-cycle the DUT.)  Power cycle if any changes are made prior to moving to the next step.
- 7) Connect the serializer-deserializer EV kit system as shown in Figure 4. Connect the FAKRA cable from

## MAX9295D Coax/HSD Evaluation Kit

the COAX OUTA+ (JAP) connector on the serializer board to the INA+ (JAP) connector on the deserializer board.

- 8) Connect a power supply to the deserializer PCB, using either a 12V supply, a 5V external power supply, or the 5V USB port supply. If using PoC, do not use 5V for the primary power supply. Refer to the deserializer EV kit data sheet for further details of the deserializer power supply options.
- 9) Enable power to the deserializer board.
- 10)  When both boards are connected properly and powered  on,  the  LOCK  LED  on  the  deserializer  EV  kit PCB illuminates (the MAX9295D LOCK output indicator function is not enabled by default), indicating that the link is locked and communication is functional. If

## Evaluates: MAX9295D

the LOCK LED does not illuminate, see the Troubleshooting section.  To observe the LOCK indicator of the MAX9295D EV kit, the LOCK indicator LED can be enabled using the GMSL GUI.

Basic  board  initialization  is  now  complete. At  this  point, the link is established and the system is ready to be used. Use  the  GMSL  GUI  to  access  internal  registers  locally or  remotely.  Ensure that both serializer and deserializer devices  are  identified  correctly  in  the  GUI.  See  the  following sections and the available documentation for additional information on using GMSL hardware and software.

Figure 4. Typical Application Block Diagram Using MAX9295D Coax/HSD EV Kit

<!-- image -->

│

## MAX9295D Coax/HSD Evaluation Kit

## Detailed Description

## Configuration (CFG) Pin Settings

The  serializer's  CFG  pins  use  the  pin  voltage  latched at  power-up  to  configure  the  device.  On-board  analog potentiometers  and  I 2 C-configurable  digital  potentiometers  set  the  (CFG)  pin  voltage  levels.  By  default,  the board is wired to use the digital potentiometers.

The CFG states can be configured using the GMSL GUI. To  do  so,  access  the  GUI  menu Tools → Set  CFG  Pin Levels.

To switch between using the analog or digital potentiometer to set CFG states, use 0Ω resistors to connect the CFG0/CFG1 nets. By default, the digital potentiometers are connected through R150 and R151. To use the analog potentiometers, depopulate R150/R151 and populate R20/R22. (See Figure 3 for the location of the analog and digital  potentiometer  resistors.)  The  analog  potentiometers can be set with a small screwdriver (see Figure 3 for the location of the analog CFG potentiometers), and the voltage of the CFG pins can be monitored on the 2x8 GPIO header (J1).

## Evaluates: MAX9295D

If  the serializer is not identified in the GUI, it is still possible to specify the CFG pin configuration. For more information, see the Troubleshooting section.

The voltage levels scale with V DDIO , shown in Table 1, summarizes the CFG pin functionality and indicates the nominal voltage levels as a percentage of V DDIO  that are necessary to configure the serializer for different modes of operation.

The configuration-0  (CFG0)  pin  voltage  sets  the  device address  and  I 2 C  vs.  UART  control  channel  mode.  For example, to set device address 0x84 with I 2 C communication, apply 20.2% of V DDIO  (CFG State 1) to pin CFG0.

The  configuration-1  (CFG1)  pin  voltage  sets  coax  vs. twisted  pair  mode  (CXTP),  GMSL1  vs.  GMSL2,  link speed, and high-immunity mode (HIM). For example, to set  the  DUT  into  GMSL1  twisted  pair  output  with  highimmunity enabled, apply 67.9% of V DDIO  (CFG State 5) to pin CFG1.

After  changing  any  CFG  pin  settings,  power  cycle  the GMSL device to latch the new configuration settings.

By default, the EV kit is in CFG0 = 0, CFG1 = 0 mode for coax boards. For STP boards, the default configuration is CFG0 = 0, CFG1 = 3.

## Table 1. MAX9295D Coax/HSD CFG Pin Settings

| LEVEL   | VOLTAGE   | CFG0   | CFG0    | CFG1   | CFG1           | CFG2        |
|---------|-----------|--------|---------|--------|----------------|-------------|
| #       | %VDDIO    | I2CSEL | ADDRESS | CXTP   | HIM/GMSL2 RATE | GMSL1/GMSL2 |
| 0       | 0         | I2C    | 0x80    | COAX   | 6Gbps          | GMSL2       |
| 1       | 20.2      | I2C    | 0x84    | COAX   | HIM Enabled    | GMSL1       |
| 2       | 32.1      | I2C    | 0xC0    | COAX   | HIM Disabled   | GMSL1       |
| 3       | 44        | I2C    | 0xC4    | STP    | 6Gbps          | GMSL2       |
| 4       | 56        | UART   | 0xC4    | STP    | 6Gbps          | GMSL2       |
| 5       | 67.9      | UART   | 0xC0    | STP    | HIM Enabled    | GMSL1       |
| 6       | 79.8      | UART   | 0x84    | STP    | HIM Disabled   | GMSL1       |
| 7       | 100       | UART   | 0x80    | COAX   | 3Gbps          | GMSL2       |

## MAX9295D Coax/HSD Evaluation Kit

## Serializer Jumper/Connector/Switch/Test Point Descriptions

Table 2 contains details of all connectors, jumpers, and switches on the EV kit board.

Evaluates: MAX9295D

## MAX9295D Coax/HSD EV Kit Package Contents

Table 3 lists the items contained in the MAX9295D Coax/ HSD evaluation kit package.

## Table 2. MAX9295D Jumper/Connector/Switch Descriptions

| JUMPER              | SIGNAL                      | DEFAULT POSITION   | FUNCTION                                                                                |
|---------------------|-----------------------------|--------------------|-----------------------------------------------------------------------------------------|
| POWER               | VSUP                        | 12V                | Select between 12V, external 5V-14V, or USB board power                                 |
| VDDIO               | VDDIO                       | 3V3                | Select between 1.8V and 3.3V VDDIO supply                                               |
| VDD                 | VDD                         | 1V                 | Select between 1.0V and 1.2V supply for DUT core voltage                                |
| RX_SDA              | TNZ_SDA_TX                  | SDA                | Select between I2C or UART communication to serializer                                  |
| TX_SCL              | TNZ_SCL_RX                  | SCL                | Select between I2C or UART communication to serializer                                  |
| VDD_REF             | 3V3                         | Jumper Short       | Reference voltage for I2C/UART level translator                                         |
| EXT_UC              | TNZ_SDA_TX, TNZ_SCL_RX, GND | Do not use Jumper  | External microcontroller input through I2C/UART level translator                        |
| J4                  | 2x4 MIPI, MFP's             | N/A                | Samtec Connector, MIPI 2x4 input to DUT, connect EV Kit to other boards or video source |
| J1                  | 2x8 MFP Header              | Do not use Jumper  | Test Point header access to MFP0 to MFP14                                               |
| J5                  | +12V                        | N/A                | +12V DC barrel jack input                                                               |
| J6                  | EXT                         | N/A                | Terminal block for external voltage for board supply                                    |
| J3                  | Micro-USB                   | N/A                | Micro-USB cable input for interfacing µC to PC for GUI usage                            |
| J2                  | STP/HSD: SIOP/SION          | N/A                | HSD connector for STP drive of GMSL                                                     |
| J10                 | VSUP                        | Jumper Open        | Connect board power to PoC (remote or local)                                            |
| JAP                 | Fakra: SIOP                 | N/A                | FAKRA connector for Coax drive of GMSL                                                  |
| C12/C59/C58         | SIOP                        | C12(FAKRA/COAX)    | Route GMSL SIOP to FAKRA or HSD connector                                               |
| C60/C57/C13         | SION                        | C60(50Ω Term/COAX) | Route GMSL SION toAC termination or HSD connector                                       |
| SW1                 | VSUP/POWER                  | OFF                | ON/OFF switch for board power                                                           |
| SW3                 | PWDNB                       | OFF                | Push-button for DUT power-off by pulling PWDNB = LOW                                    |
| DUT_RST SW4 TNZ_RST | (Flash uC)                  | OFF                | Push-button to program the Teensy microcontroller                                       |

## Table 3. Items Included in the Evaluation Kit Package

| ITEM DESCRIPTION                    |   QTY |
|-------------------------------------|-------|
| MAX9295D Coax/HSD Serializer EV Kit |     1 |
| Micro-USB Cable                     |     1 |
| +12V DC Wall Supply                 |     1 |

│

## MAX9295D Coax/HSD Evaluation Kit

## Troubleshooting

If the MAX9295D Coax/HSD EV kit PCB fails to power-up or does not function properly, try the following appropriate remedial actions.

- 1) Make sure the board's red power switch (SW1) is set to the ON position.
- 2) Verify that the device is powered properly. Check that the voltages at all device pins are within their expected operating ranges. The power rail LEDs (DS4 and DS5) are a good indication that the power supply is operational.
- 3) Check that all jumpers are correctly set. See the default jumper settings in the serializer and deserializer EV kit data sheets.  Adjust jumper settings as needed to  accommodate desired operating mode. Also, ensure  that  all  jumpers  are  firmly  attached.  Replace loose  or  damaged  jumpers  if  necessary.    In  some cases, removing and reinstalling the jumpers can fix an intermittent connection.
- 4) Check that the USB cable is properly seated in the USB port.
- 5) Check that there is a good coax/STP cable connection between the serializer and deserializer.
- 6) Check to see if the on-board TEENSY µC has been inadvertently put into programming mode. The board's TNZ\_RST button should only be pressed when firm -ware is being flashed. If the button is pressed during normal operation, the device suspends operation and waits for programming. Power-cycle the board to resume normal operation with the current firmware.
- 7) Validate  that  the  correct  CFG  pin  voltages  are  being used to configure the serializer and deserializer. Check  the  method  of  biasing  the  CFG  voltage  at

## Evaluates: MAX9295D

powerup. Measure the voltages at the CFG pins. For details, see the Configuration (CFG) Pin Settings section.

- 8) If  the CFG pin settings are incorrect and the device is not identified in the GUI, proceed to the CFG pin page in the GUI and set the desired CFG state values. Power-cycle the EV kit and check if the GUI automatically identifies the device or if the device can be located using the Identify Devices dropdown from the Options tab. The low-level commands tab can be monitored to confirm that I 2 C writes to the CFG pots are successful.
- 9) Check  that  the  I 2 C/UART  jumpers  match  the  DUT communication  mode  (SCL/SDA  for  I 2 C,  TX/RX  for UART).
- 10)  Check that the AC coupling capacitors are populated correctly,  routing  the  serial  link  to  the  correct  connector for COAX or STP mode. For coax boards, capacitors C12 and C60 should be populated. For STP boards,  capacitors  C59  and  C57  or  C58  and  C13 should be populated.  (All boards are shipped with the appropriate capacitors installed.)
- 11) Check that the microcontroller firmware is active by observing  the  blinking  red  TEENSY  LED  (DS3)  at power-up. If the LED is not blinking, refer to the available software documentation to reprogram the microcontroller.
- 12)  Check that the PC is detecting the COM port when the micro-USB cable is connected. Use the Windows Device Manager to check COM port status.
- 13)  Power-cycle the board and reopen the GUI.
- 14) Try a new or different serializer or deserializer board.

## MAX9295D Coax/HSD Evaluation Kit

## Detailed Description of Hardware

Figure 5. MAX9295D Coax/HSD EV Kit Power Options

<!-- image -->

## Ordering Information

| PART               | TYPE        |
|--------------------|-------------|
| MAX9295DCOAXEVKIT# | COAX EV KIT |
| MAX9295DHSDEVKIT#  | STP EV KIT  |

# Denotes RoHS compliance.

Note: The MAX9295D EV kit is typically ordered with a companion CSI deserializer EV kit:

Evaluates: MAX9295D

│

## MAX9295D Coax/HSD Evaluation Kit

## MAX9295D Coax/HSD EV Kit Bill of Materials (Coax)

| ITEM   | REF_DES                                                            | QTY   | MFG PART #                                                                                                                                                                                              | MANUFACTURER                                                                                                                            | VALUE            | DESCRIPTION                                                                                                    |
|--------|--------------------------------------------------------------------|-------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|------------------|----------------------------------------------------------------------------------------------------------------|
| 1      | C1, C2                                                             | 2     | C0402C0G500-150JNP; GRM1555C1H150JA01; GCM1555C1H150JA16                                                                                                                                                | VENKEL LTD.;MURATA;MURATA                                                                                                               | 15PF             | CAPACITOR; SMT (0402); CERAMIC CHIP; 15PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                       |
| 2      | C3, C4, C32, C33, C39, C40, C55                                    | 7     | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE; UMK105B7104KV-FR; CGA2B3X7R1H104K050BE                                                            | TDK;TDK;MURATA;MURATA;TDK; TAIYO YUDEN;TDK                                                                                              | 0.1UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |
| 3      | C5, C34-C37, C53, C54, C56                                         | 8     | C1608X5R1E106M080AC; CL10A106MA8NRNC; GRM188R61E106MA73; ZRB18AR61E106ME01; GRT188R61E106ME13                                                                                                           | TDK;SAMSUNG ELECTRONICS;MURATA;;MURATA                                                                                                  | 10UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                       |
| 4      | C6, C9, C14, C17                                                   | 4     | GRM155R71H103JA88                                                                                                                                                                                       | MURATA                                                                                                                                  | 0.01UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |
| 5      | C7                                                                 | 1     | C3216X5R1E476M160AC                                                                                                                                                                                     | TDK                                                                                                                                     | 47UF             | CAPACITOR; SMT (1206); CERAMIC CHIP; 47UF; 25V; TOL=20%; MODEL=C SERIES; TG=-55 DEGC TO +85 DEGC; TC=X5R ;     |
| 6      | C8, C11, C16, C18, C21-C24, C26-C31, C45, C46, C64-C66, C119, C120 | 21    | C1005X7R1C104K050BC; ATC530L104KT16; 0402YC104KAT2A; CGA2B1X7R1C104K050BC; GCM155R71C104KA55; C0402X7R160-104KNE; CL05B104KO5NNNC; GRM155R71C104KA88; C1005X7R1C104K; CC0402KRX7R7BB104; EMK105B7104KV; | TDK;AMERICAN TECHNICAL CERAMICS;AVK;TDK;MURATA;VENKEL LTD.;SAMSUNG ELECTRONICS;MURATA;TDK;YAGEO PHICOMP;TAIYO YUDEN;SAMSUNG ELECTRONICS | 0.1UF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |
| 7      | C10, C19, C38, C41-C43, C47-C52, C61-C63                           | 15    | GRT188R61C106KE13                                                                                                                                                                                       | MURATA                                                                                                                                  | 10UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 16V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R; AUTO                 |
| 8      | C12, C60                                                           | 2     | UMK105BJ224KV                                                                                                                                                                                           | TAIYO YUDEN                                                                                                                             | 0.22UF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                     |
| 9      | C15                                                                | 1     | C1608X7R1V105K080AC; CGA3E1X7R1V105K080AC                                                                                                                                                               | TDK;TDK                                                                                                                                 | 1UF              | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                       |
| 10     | C20, C25, C44                                                      | 3     | GRM188Z71C225KE43                                                                                                                                                                                       | MURATA                                                                                                                                  | 2.2UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 2.2UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                     |
| 11     | D1, D2                                                             | 2     | SS12                                                                                                                                                                                                    | FAIRCHILD SEMICONDUCTOR                                                                                                                 | SS12             | DIODE; SCH; SMT (DO-214AC); V=20V; I=1.0A                                                                      |
| 12     | D3                                                                 | 1     | DFLS140L                                                                                                                                                                                                | DIODES INCORPORATED                                                                                                                     | DFLS140L         | DIODE; SCH; SMT (POWERDI-123); PIV=40V; IF=1A                                                                  |
| 13     | D4, D5                                                             | 2     | B360B-13-F                                                                                                                                                                                              | DIODES INCORPORATED                                                                                                                     | B360B-13-F       | DIODE; SCH; SCHOTTKYBARRIER DIODE; SMB; PIV=60V; Io=3A; - 55 DEGC TO +125 DEGC                                 |
| 14     | DS1, DS3                                                           | 2     | SML-P11UTT86                                                                                                                                                                                            | ROHM                                                                                                                                    | SML-P11UTT86     | DIODE; LED; SMT; PIV=1.8V; IF=0.02A                                                                            |
| 15     | DS2, DS4, DS5                                                      | 3     | SML-P11MTT86                                                                                                                                                                                            | ROHM                                                                                                                                    | SML-P11MTT86     | DIODE; LED; SMT; PIV=5V; IF=0.02A                                                                              |
| 16     | EXT, GND                                                           | 2     | 9020 BUSS                                                                                                                                                                                               | WEICO WIRE                                                                                                                              | MAXIMPAD         | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                       |
| 17     | EXT_UC                                                             | 1     | PCC03SAAN                                                                                                                                                                                               | SULLINS                                                                                                                                 | PCC03SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                       |
| 18     | J1                                                                 | 1     | PEC08DAAN                                                                                                                                                                                               | SULLINS ELECTRONICS CORP.                                                                                                               | PEC08DAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 16PINS; -65 DEGC TO +125 DEGC                              |
| 19     | J3                                                                 | 1     | 1981568-1                                                                                                                                                                                               | TE CONNECTIVITY                                                                                                                         | 1981568-1        | CONNECTOR; FEMALE; SMT; MICRO USB STANDARD TYPE B ASSY; RIGHT ANGLE; 5PINS                                     |
| 20     | J4                                                                 | 1     | QTH-030-01-L-D-A                                                                                                                                                                                        | SAMTEC                                                                                                                                  | QTH-030-01-L-D-A | CONNECTOR; FEMALE; SMT; HIGH SPEED GROUND PLANE HEADER; STRAIGHT THROUGH; 60PINS                               |
| 21     | J5                                                                 | 1     | PJ-002AH                                                                                                                                                                                                | CUI INC.                                                                                                                                | PJ-002AH         | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                               |
| 22     | J6                                                                 | 1     | 393570002                                                                                                                                                                                               | MOLEX                                                                                                                                   | 393570002        | CONNECTOR; FEMALE; THROUGH HOLE; 0.3MM PITCH BEAU EUROSTYLE FIXED MOUNT PCB TERMINAL BLOCK; RIGHT ANGLE; 2PINS |
| 23     | J10, VDD_REF                                                       | 2     | PBC02SAAN                                                                                                                                                                                               | SULLINS ELECTRONICS CORP.                                                                                                               | PBC02SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                      |
| 24     | JAP                                                                | 1     | 59S2AQ-40MT5-Z_1                                                                                                                                                                                        | ROSENBERGER                                                                                                                             | 59S2AQ-40MT5-Z_1 | CONNECTOR; MALE; THROUGH HOLE; FAKRA-HF RIGHT ANGLE PLUG PCB WITH HOUSING; RIGHT ANGLE; 5PINS                  |
| 25     | L1, L5                                                             | 2     | DFE252012P-4R7M=P2                                                                                                                                                                                      | MURATA                                                                                                                                  | 4.7UH            | INDUCTOR; SMT (2520); FERRITE CORE; 4.7UH; TOL=+/-20%; 1.7A                                                    |
|        | L2, L8, L9, L13, L17                                               | 5     | BLM18KG601SN1                                                                                                                                                                                           | MURATA                                                                                                                                  | 600              | INDUCTOR; SMT (0603); FERRITE-BEAD;                                                                            |
| 26     |                                                                    |       |                                                                                                                                                                                                         |                                                                                                                                         | 2.2UH            | 600; TOL=+/-25%; 1.3A                                                                                          |
| 27 28  | L3, L15 L4                                                         | 2 1   | TFM201610ALMA2R2MTAA RFCMF1220100M3                                                                                                                                                                     | TDK WALSIN TECHNOLOGYCORPORATION                                                                                                        | RFCMF1220100M3   | INDUCTOR; SMT (2016); THIN FILM; 2.2UH; TOL=+/-20%; 2.1A INDUCTOR; SMT; CERAMIC CHIP; CHOKE; 0.3A              |
| 29     | L6                                                                 | 1     | 1210POC-223MR                                                                                                                                                                                           | COILCRAFT                                                                                                                               | 22UH             | EVKIT PART-INDUCTOR; SMT; FERRITE; CHOKE; TOL=+/-20%; 0.4A                                                     |
| 30     | L12                                                                | 1     | PFL1005-561MR                                                                                                                                                                                           | COILCRAFT                                                                                                                               | 560NH            | INDUCTOR; SMT (0402); SHIELDED; 560NH; 20%; 0.53A                                                              |

Evaluates: MAX9295D

## MAX9295D Coax/HSD Evaluation Kit

## Evaluates: MAX9295D

## MAX9295D Coax/HSD EV Kit Bill of Materials (Coax) (continued)

| ITEM   | REF_DES                                                                          | QTY   | MFG PART #                                | MANUFACTURER               | VALUE              | DESCRIPTION                                                                                                                                                                                     |
|--------|----------------------------------------------------------------------------------|-------|-------------------------------------------|----------------------------|--------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 31     | L14                                                                              | 1     | MSS7341T-104ML                            | COILCRAFT                  | 100UH              | INDUCTOR; SMT; FERRITE; 100UH; 20%; 1.15A                                                                                                                                                       |
| 32     | L16                                                                              | 1     | BLM18SG121TN1                             | MURATA                     | 120                | INDUCTOR; SMT (0603); FERRITE-BEAD; 120; TOL=+/-25%; 3A                                                                                                                                         |
| 33     | POWER                                                                            | 1     | PEC04SAAN                                 | SULLINS ELECTRONICS CORP.  | PEC04SAAN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                                                                                                                                       |
| 34     | PWDNB                                                                            | 1     | 5000                                      | KEYSTONE                   | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                                                                |
| 35     | Q1                                                                               | 1     | BSN20                                     | NXP                        | BSN20              | TRAN; N-CHANNEL ENHANCEMENT MODE FIELD-EFFECT TRANSISTOR; NCH; SOT-23; PD-(0.83W); I-(0.173A); V-(50V)                                                                                          |
| 36     | R2, R3, R27, R40-R42, R49, R50, R60, R62, R65                                    | 11    | ERJ-2GEJ103                               | PANASONIC                  | 10K                | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                                          |
| 37     | R4, R5                                                                           | 2     | ERJ-2GEJ203                               | PANASONIC                  | 20K                | RESISTOR; 0402; 20K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                                          |
| 38     | R6, R7, R9-R11, R13, R14, R28, R30, R38, R51, R61, R63, R64, R82-R84, R150, R151 | 19    | ERJ-2GE0R00                               | PANASONIC                  | 0                  | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                            |
| 39     | R12, R33, R34, R39, R47, R48, R54, R72                                           | 8     | ERJ-2RKF1001                              | PANASONIC                  | 1K                 | RESISTOR; 0402; 1K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                           |
| 40     | R15, R16, R21, R23, R53, R121, R128-R130                                         | 9     | ERJ-2RKF4991                              | PANASONIC                  | 4.99K              | RESISTOR; 0402; 4.99K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                        |
| 41     | R18, R45, R46                                                                    | 3     | CRCW040249K9FK; 9C04021A4992FLHF3         | VISHAY DALE;YAGEO          | 49.9K              | RESISTOR; 0402; 49.9K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                          |
| 42     | R19, R79                                                                         | 2     | 3214W-1-204                               | BOURNS                     | 200K               | RESISTOR; SMT-J LEAD; 3214 SERIES; 200K OHM; 10%; 100PPM; 0.25W                                                                                                                                 |
| 43     | R26                                                                              | 1     | CRCW0603402RFK                            | VISHAY DALE                | 402                | RESISTOR; 0603; 402 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                          |
| 44     | R29                                                                              | 1     | CRCW0402100KFK; RC0402FR-07100KL          | VISHAY;YAGEO               | 100K               | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                           |
| 45     | R35, R36                                                                         | 2     | CRCW040233R0FK                            | VISHAY DALE                | 33                 | RESISTOR, 0402, 33 OHM, 1%, 100PPM, 0.0625W, THICK FILM                                                                                                                                         |
| 46     | R37                                                                              | 1     | ERJ-2RKF4700                              | PANASONIC                  | 470                | RESISTOR; 0402; 470 OHM; 1%; 100PPM; 0.1W; THICK FILM                                                                                                                                           |
| 47     | R71, R73-R75, R77                                                                | 5     | CRCW06030000ZS; MCR03EZPJ000;ERJ-3GEY0R00 | VISHAY DALE;ROHM;PANASONIC | 0                  | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                            |
| 48     | R93                                                                              | 1     | CRCW060349R9FK                            | VISHAY DALE                | 49.9               | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                         |
| 49     | RX_SDA, TX_SCL, VDD, VDDIO                                                       | 4     | PBC03SABN                                 | SULLINS                    | PBC03SABN          | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                                                                                       |
| 50     | SW1                                                                              | 1     | 1101-M2-S3-A-Q-E-2                        | C&K COMPONENTS             | 1101-M2-S3-A-Q-E-2 | SWITCH; SPDT; THROUGH HOLE; RIGHT ANGLE; 120V; 6A; 1000 SERIES; RCOIL=0.1 OHM; RINSULATION=100G OHM                                                                                             |
| 51     | SW3, SW4                                                                         | 2     | KMR421G LFS                               | C&K COMPONENTS             | KMR421G LFS        | SWITCH; SPST; SMT; STRAIGHT; 32V; 0.05A; MICROMINIATURE SMT TOP ACTUATED; RCOIL=0.1 OHM OHM; RINSULATION=1G OHM OHM                                                                             |
| 52     | U1                                                                               | 1     | MAX9295DGTM/V+                            | MAXIM                      | MAX9295DGTM/V+     | EVKIT PART-IC; MAX9295DGTM/V+; HS78; TQFN44-EP; PACKAGE OUTLINE: 21-0144; PACKAGE CODE: T4877+4; PACKAGE LAND PATTERN: 90-0130 IC; XOR; 2-INPUT EXCLUSIVE-OR GATE; SOT753                       |
| 53     | U2, U3                                                                           | 2     | 74LVC1G86GV                               | NXP                        | 74LVC1G86GV        |                                                                                                                                                                                                 |
| 54     | U4, U5                                                                           | 2     | MAX5419PETA+                              | MAXIM                      | MAX5419PETA+       | IC; DPOT; 200K OHM; 256-TAP NONVOLATILE I2C-INTERFACE DIGITAL POTENTIOMETER; TDFN8-EP                                                                                                           |
| 55     | U6                                                                               | 1     | MK20DX256VLH7                             | FREESCALE                  | MK20DX256VLH7      | IC; UCON; KINETIS K2X MCU FAMILY; LQFP64                                                                                                                                                        |
| 56     | U7                                                                               | 1     | MKL02Z32VFG4                              | FREESCALE                  | MKL02Z32VFG4       | IC; UCON; KINETIS KL02 32 KB FLASH; 48 MHZ CORTEX-M0+ BASED MICROCONTROLLER; QFN16-EP                                                                                                           |
| 57     | U8, U9                                                                           | 2     | MAX3373EEKA+                              | MAXIM                      | MAX3373EEKA+       | IC; TRANS; +/-15KV ESD-PROTECTED; 16MPBS; DUAL LOW- VOLTAGE LEVEL TRANSLATOR; SOT23-8                                                                                                           |
| 58     | U10                                                                              | 1     | MAX16922ATPH/V+                           | MAXIM                      | MAX16922ATPH/V+    | IC; CONV; 2.2MHZ; DUAL; STEP-DOWN DC-DC CONVERTER; DUAL LDOS AND RESET; TQFN20-EP                                                                                                               |
| 59     | U11                                                                              | 1     | MAX20019ATBI/V+                           | MAXIM                      | MAX20019ATBI/V+    | EVKIT PART-IC; VCON; 3.2MHZ; 500MILLIAMPERE DUAL STEP- DOWN CONVERTER FOR AUTOMOTIVE CAMERA; PACKAGE OUTLINE: 21-100125; LAND PATTERN DRAWING NO.: 90-100079; PACKAGE CODE: T1032+2C; TDFN10-EP |
| 60     | U12                                                                              | 1     | SN74LVC2T45DCT                            | TEXAS INSTRUMENTS          | SN74LVC2T45DCT     | IC, DUAL-BIT DUAL-SUPPLYBUS TRANSCEIVER W/ CONFIGURABLE VOLTAGE TRANSLATION AND 3-STATE OUTPUTS                                                                                                 |
| 61     | Y1                                                                               | 1     | ECS-250-18-33Q-DS                         | ECS INC                    | 25MHZ              | CRYSTAL; SMT 3.2X2.5; 18PF; 25MHZ; +/-30PPM; +/-100PPM                                                                                                                                          |
| 62     | Y2                                                                               | 1     | CX2016DB16000D0PSWC1                      | KYOCERA                    | 16MHZ              | CRYSTAL; SMT 2MMX1.6MM; 8PF; 16MHZ; +/-50PPM; +/-200PPM                                                                                                                                         |
| 63     | PCB C13, C57-C59                                                                 | 1     | MAX9295DCSI                               | MAXIM TAIYO YUDEN          | PCB 0.22UF         | PCB:MAX9295DCSI CAPACITOR; SMT (0402); CERAMIC CHIP; 0.22UF; 50V; TOL=10%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                                                      |
| 64 65  | J2                                                                               | 0 0   | UMK105BJ224KV D4S20L-40MA5-Z              | ROSENBERGER                | D4S20L-40MA5-Z     | EVKIT -CONNECTOR; MALE; THROUGH HOLE; D4S20L-40MA5 SERIES; RIGHT ANGLE; 4PINS;                                                                                                                  |
| 66     | R1, R8, R20, R22, R24, R25, R31, R32, R43, R44, R52, R66-R70, R80, R81           | 0     | ERJ-2GE0R00                               | PANASONIC                  | 0                  | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                            |
| 67     | R17                                                                              | 0     | ERJ-2GEJ103                               | PANASONIC                  | 10K                | RESISTOR; 0402; 10K OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                                                                                          |
| 68     | R76                                                                              | 0     | CRCW06030000ZS; MCR03EZPJ000;ERJ-3GEY0R00 | VISHAY DALE;ROHM;PANASONIC |                    | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                                                                            |
|        |                                                                                  |       |                                           |                            | 0                  |                                                                                                                                                                                                 |

## MAX9295D Coax/HSD EV Kit Schematics (Coax)

<!-- image -->

Evaluates: MAX9295D

## MAX9295D Coax/HSD EV Kit Schematics (Coax) (continued)

<!-- image -->

Evaluates: MAX9295D

## MAX9295D Coax/HSD EV Kit Schematics (Coax) (continued)

<!-- image -->

│

## MAX9295D Coax/HSD EV Kit Schematics (Coax) (continued)

<!-- image -->

Evaluates: MAX9295D

## MAX9295D Coax/HSD Evaluation Kit

## MAX9295D Coax/HSD EV Kit PCB Layout Diagrams

<!-- image -->

MAX9295D Coax/HSD EV Kit PCB Layout-Top Silkscreen

<!-- image -->

MAX9295D Coax/HSD EV Kit PCB Layout-Top View

MAX9295D Coax/HSD EV Kit PCB Layout-L2 Ground

<!-- image -->

MAX9295D Coax/HSD EV Kit PCB Layout-L3 Signals

<!-- image -->

│

## MAX9295D Coax/HSD

## Evaluation Kit

## MAX9295D Coax/HSD EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX9295D Coax/HSD EV Kit PCB Layout-L4 Power

<!-- image -->

MAX9295D Coax/HSD EV Kit PCB Layout-L5 Power

MAX9295D Coax/HSD EV Kit PCB Layout-L6 Signals

<!-- image -->

MAX9295D Coax/HSD EV Kit PCB Layout-L7 Ground

<!-- image -->

│

## MAX9295D Coax/HSD Evaluation Kit

## MAX9295D Coax/HSD EV Kit PCB Layout Diagrams (continued)

MAX9295D Coax/HSD EV Kit PCB Layout-Bottom View

<!-- image -->

MAX9295D Coax/HSD EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX9295D Coax/HSD Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                  | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------|-----------------|
|                 0 | 1/21            | Initial release                                                              | -               |
|                 1 | 2/24            | ADI template update. Removed deserializer part number and Windows 7 support. | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX9295D