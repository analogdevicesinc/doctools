<!-- lastmod 2023-03-20 -->
<!-- image -->

Evaluates: MAX96724/F /R

## General Description

The  MAX96724  DPHY  evaluation  kit  (EV  kit)  provides a  proven  design  and  reliable  platform  to  evaluate  the MAX96724, MAX96724F, and MAX96724R devices using standard  FAKRA  coaxial  cables  or  a  MATE-AX  cable. These deserializer devices support high-bandwidth, gigabit multimedia serial links (GMSL-1 or GMSL-2) and offer spread spectrum and full-duplex control channel features. The  EV  kit  includes  a  simple-to-use  Windows  10 ®   or higher compatible graphical user interface (GUI) to exercise device features. The EV kit comes with a MAX96724, MAX96724F, or MAX96724R IC installed on board.

For complete GMSL-2 evaluation using standard FAKRA coax cables, order the MAX96724 coax EV kit along with a  companion  serializer  board,  such  as  the  MAX96717 coax EV kit. For a detailed look at all GMSL-2 features, including  information  on  how  to  use  the  parts,  see  the newest  GMSL-2  User  Guide  found  in  Analog  Devices' GMSL  customer  portal  folder.  For  more  information  on how to design customized hardware with GMSL2 devices,  see  the  newest  GMSL2  Hardware  Design  Guide  in Analog Devices' GMSL customer portal folder.

Note that throughout this document:

- Deserializer refers to the MAX96724, MAX96724F, and MAX96724R.
- Serializer refers to any GMSL-1 or GMSL-2 serializer device, particularly the MAX96705 or MAX96717.
- Coax cables refer to both coax and MATE-AX applications. The MATE-AX connector is not installed by default, and the EV kit does not come with a MATE-AX cable. See the Bill of Materials for ordering information.
- GMSL1 links are required to use high-immunity mode. Links that do not use high-immunity mode are not recommended for new designs.

## MAX96724 DPHY Evaluation Kit

## Features

- The MAX96724 Deserializer Accepts GMSL Data from the Serializers and Converts it into MIPI CSI-2.
- Backward-Compatible to Accept GMSL-1 Serial Data
- Quad Inputs can Mix and Match GMSL-1 and GMSL-2
- Outputs are Compliant to MIPI D-PHY v1.2 and CSI-2 v1.3 Specifications
- Windows 10 ®  or Higher Compatible Software Support
- USB-Controlled Interface (Cable Included)
- Powerful, Simple-to-Use GUI for Comprehensive Device Feature Evaluation
- Board Powered by USB, 12V Wall Adapter, or External Power Supply
- Proven PCB Layout
- Fully Assembled and Tested

## MAX96724 DPHY EV Kit Files

| FILE                         | DECRIPTION                                                                                                                                      |
|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| MAXSerDesEV- GMSLInstall.exe | Installs the EV kit software (GUI) onto Windows 10 or higher computers. Includes GUI user's guide, microcontroller firmware, and documentation. |
| MAXSerDesEV- GMSL.exe        | GMSL graphical user interface (GUI) program.                                                                                                    |

Ordering Information appears at end of data sheet.

Windows 7® and Windows 10® are Microsoft Corporation registered trademarks and registered service marks.

319-100923; Rev 4 ; 1 /2 3

## Evaluates: MAX96724/F GLYPH&lt;c=18,font=/SWJEZY+ArialMT&gt;R

Figure 1.  MAX96724 DPHY EV Kit Block Diagram

<!-- image -->

Figure 2. MAX96724 DPHY EV Kit Key Components on Front of Board

<!-- image -->

│

## Evaluates: MAX96724/F GLYPH&lt;c=18,font=/SWJEZY+ArialMT&gt;R

Figure 3. MAX96724 DPHY EV Kit Key Components on Back of Board

<!-- image -->

Figure 4. MAX96724 DPHY EV Kit Default Jumper Positions

<!-- image -->

│

## MAX96724 DPHY Evaluation Kit

## Quick Start

This  procedure  applies  to  both  coax  and  MATE-AX EV  kits.  Figure  5  shows  a  typical  application  using  a MAX96724  family  deserializer  to  interface  with  four MAX96717 or MAX96705 camera modules.

## Required Equipment

The following equipment is required to successfully use the  MAX96724 DPHY EV kit in a serial link coax cable configuration:

- MAX96724 DPHY EV kit
- MAX96717 or MAX96705 serializer EV kits or camera modules
- FAKRA coax cable assembly
- PC with Windows 10® or higher and GMSL-2 software
- Power supply source (500 mA USB port, 5V/1A DC supply, or 12V barrel jack DC supply)
- Micro-USB cable

## Procedure

The  MAX96724  DPHY  EV  kit  is  shipped  with  the  fully assembled and tested PCB. Follow these steps to verify the board operation:

- 1) Connect the MAX96724 DPHY EV kit PCB through the board's Micro-USB port (J12) to a Windows 7 ® or Windows 10 ®  PC.
- 2) Download and install the latest GMSL-2 GUI software from the Analog Devices Sharefile site to the PC. If needed, contact the factory for additional information on accessing the software. Refer to the GMSL GUI User Guide for detailed software instruction.
- 3) Verify the MAX96724 DPHY EV kit PCB's red power switch (SW4) is OFF.
- 4) Verify all jumper positions on the PCB are properly set to meet the requirements of the application. Figure 4 shows the possible jumper positions for various configurations. The default jumper settings place the device under test (DUT) into the I 2 C mode, selects 3.3V as the VDDIO voltage and 1.2V as the VDD voltage, and selects the board to be powered by the 12V DC barrel jack.

## Evaluates: MAX96724/F GLYPH&lt;c=18,font=/SWJEZY+ArialMT&gt;R

- 5) Connect a power supply to the MAX96724 DPHY EV kit. The board provides three power supply options (selected through the jumper JMP1):
- A 12V DC supply connected through the barrel jack (J13) or terminal block (J14)
- A 5 V DC supply from the Micro-USB port (J12) connected to the PC
- An external 5V to 17V DC supply through EXT (J15) and GND (J16) test points
- 6) Define the application specific power-up configuration for the DUT, using the GMSL-2 GUI to set the device's CFG pins into the required modes. This requires power (see the following Configuration (CFG) Pin Settings section). The MAX96724 must be configured to have the same link data rate (3Gbps or 6Gbps) and mode (tunnel or pixel) as the companion serializer board. The DUT must be power cycled if any changes are made to the CFG pins (or use SW1, the RESET button on the board, to reset the DUT).
- 7) Power up the board by moving the red power switch (SW4) to the ON position. The green power LEDs for DS6, DS11, and DS12 light indicate the correct power settings. The Teensy LED (DS3) flashes to in -dicate the board firmware is functional. If the Teensy LED is not flashing, see the Troubleshooting section.
- 8) Verify the LOCK LEDs on both the serializer and deserializer EV boards light up, indicating the link is successfully established. If the LOCK\_LED is off, see the Troubleshooting section.
- 9) Start the GMSL2 EVKIT Software (GUI).
- 10) The GUI automatically searches for any active listener in both the I 2 C and UART modes, and identifies valid GMSL products. Once the serializer and deserializer are identified, they appear as tabs in the GUI.
- 11) Read register 0x00 in both the serializer and deserializer to ensure both devices are active. This can be verified by an I 2 C ACK.

After  completing  these  steps,  basic  board  initialization is  complete,  the  link  is  established,  and  the  system  is ready  for  use.  Use  the  GMSL-2  GUI  to  access  internal registers  locally  or  remotely.  Ensure  both  the  serializer and deserializer are identified correctly in the GUI. Refer to the GMSL GUI User Guide for GUI operation, and the GMSL2 User Guide to configure this device and its available features.

## MAX96724 DPHY Evaluation Kit

## Evaluates: MAX96724/F GLYPH&lt;c=18,font=/SWJEZY+ArialMT&gt;R

Figure 5. Typical Application Block Diagram using MAX96724 DPHY EV Kit

<!-- image -->

## Configuration (CFG) Pin Settings

- 1) Like other GMSL2 devices, configuration pins are used to set desired working modes during power-up for the MAX96724.
- 2) There are two analog and two digital (I 2 C configu -rable) potentiometers on board to set the CFG pin levels. The digital potentiometers are connected by default. Alternatively, rework the 0 Ω resistors to con -nect the analog potentiometers and tune the voltage manually. Voltages on CFG pins can be monitored through CFG0 and CFG1 test points (loop type terminals). Use the default connection and configure the power-on reset (POR) mode through the GUI using the Config Options page under Options . For more details, refer to the GUI User Guide.
- 3) Table 1 and Table 2 indicate the voltages for the CFG pins for different modes of operations. The CFG pin voltages latch at power-up and are not volatile after power-off due to the digital potentiometers' EEPROM. Any of the settings can be changed by the software through register writes after power-up. The CFG0 pin sets the device address for I 2 C. For example, a default 0x4E I 2 C address (8-bit write) is CFG0 state 0 (0% of VDDIO, i.e., pulldown). The CFG1 pin sets CXTP (coax or twisted-pair mode), GMSL-2 versus GMSL-1 mode, the default forward rate (3Gbps or 6Gbps) when in GMSL-2 mode, and the high-immunity mode (HIM) (enabled or disabled) when in GMSL-1 mode. For example, a default value for GMSL-1 coax HIM enabled is CFG1 state 7 (100% of VDDIO).

Table 1. MAX96724 CFG Pin Settings

| CGP INPUT (% VDDIO)   | CGP INPUT (% VDDIO)   | CFG0              | CFG1   | CFG1               | CFG1            |
|-----------------------|-----------------------|-------------------|--------|--------------------|-----------------|
| CFG STATE             | MIN/TYP/MAX%OF VDDIO  | DEVICE I 2 C ADDR | CXTP   | GMSL-1/GMSL-2 MODE | HIM/GMSL-2 RATE |
| 0                     | 0.00 / 0.00 / 11.7    | 0x4E              | COAX   | GMSL-2             | 6Gbps           |
| 1                     | 16.9 / 20.2 / 23.6    | 0x5C              | COAX   | GMSL-2             | 3Gbps           |
| 2                     | 28.8 / 32.1 / 35.5    | 0x9C              | COAX   | GMSL-1             | HIM Disabled*   |
| 3                     | 40.7 / 44.0 / 47.4    | 0x9E              | STP    | GMSL-2             | 6Gbps           |
| 4                     | 52.6 / 56.0 / 59.3    | RSVD              | STP    | GMSL-2             | 3Gbps           |
| 5                     | 64.5 / 67.9 / 71.2    | RSVD              | STP    | GMSL-1             | HIM Enabled     |
| 6                     | 76.4 / 79.8 / 83.1    | RSVD              | STP    | GMSL-1             | HIM Disabled*   |
| 7                     | 88.3 / 100 / 100      | RSVD              | COAX   | GMSL-1             | HIM Enabled     |

* Note: High-immunity mode (HIM) is required for new designs.

Table 2. MAX96724F and MAX96724R CFG Pin Settings

| CGP INPUT (% V DDIO )   | CGP INPUT (% V DDIO )   | CFG0              | CFG1   | CFG1               | CFG1            |
|-------------------------|-------------------------|-------------------|--------|--------------------|-----------------|
| CFG STATE               | MIN/TYP/MAX%OF V DDIO   | DEVICE I 2 C ADDR | CXTP   | GMSL-1/GMSL-2 MODE | HIM/GMSL-2 RATE |
| 0                       | 0.00 / 0.00 / 11.7      | 0x4E              | COAX   | GMSL-2             | 3 Gbps          |
| 1                       | 16.9 / 20.2 / 23.6      | 0x5C              | COAX   | GMSL-2             | 3 Gbps          |
| 2                       | 28.8 / 32.1 / 35.5      | 0x9C              | COAX   | GMSL-1             | HIM Disabled*   |
| 3                       | 40.7 / 44.0 / 47.4      | 0x9E              | STP    | GMSL-2             | 3 Gbps          |
| 4                       | 52.6 / 56.0 / 59.3      | RSVD              | STP    | GMSL-2             | 3 Gbps          |
| 5                       | 64.5 / 67.9 / 71.2      | RSVD              | STP    | GMSL-1             | HIM Enabled     |
| 6                       | 76.4 / 79.8 / 83.1      | RSVD              | STP    | GMSL-1             | HIM Disabled*   |
| 7                       | 88.3 / 100 / 100        | RSVD              | COAX   | GMSL-1             | HIM Enabled     |

* Note: High-immunity mode (HIM) is required for new designs.

│

## MAX96724 DPHY Evaluation Kit

## Deserializer Jumper/Connector/Switch/Test Point Descriptions

The following table contains details of all the connectors, jumpers, switches, and test points of the EV kit.

Evaluates: MAX96724/F GLYPH&lt;c=18,font=/SWJEZY+ArialMT&gt;R

The  power  configuration  of  the  EV  kit  hardware  can  be reconfigured to allow external supply connections. Figure 6 shows the power connection options.

Table 3. Deserializer Jumper/Connector/Switch/Test Point Descriptions

| VALUE   | NAME    | DEFAULT POSITION   | FUNCTION                                                                  |
|---------|---------|--------------------|---------------------------------------------------------------------------|
| JMP1    | VSUP    | *12V               | Board powered from 12V Barrel Jack or 12V Power-over-Coax (POC)           |
| JMP1    | VSUP    | USB_5V             | Board powered from USB 5V sourced from Micro-USB connector.               |
| JMP1    | VSUP    | EXT                | Board powered from external loop connector (EXT) ranged from 5V up to 17V |
| J1      | VDD     | *1V                | VDD connect to 1V                                                         |
| J1      | VDD     | 1V2                | VDD connect to 1.2V                                                       |
| J2      | LOCK    | *LOCK              | LOCK LED indicates lock status of GMSL link                               |
| J2      | LOCK    | ERRB/LOCK          | LOCK LED indicates ERRB/LOCK status                                       |
| JMP2    | VDDIO   | 1V8                | VDDIO connect to 1.8V                                                     |
| JMP2    | VDDIO   | *3V3               | VDDIO connect to 3.3V                                                     |
| JMP2    | VDDIO   | 2V5                | This should not be used and is unsupported                                |
| J21     | VDD_REF | Open               | Reference voltage for level shifter from external supply                  |
| J21     | VDD_REF | *Short             | Reference voltage for level shifter from on-board 3.3V                    |
| J18     | TX_SCL  | *TNZ_SCL           | U1 SCL/Tx pin connected to Teensy uC SCL pin                              |
| J18     | TX_SCL  | TNZ_RX             | U1 SCL/Tx pin connected to Teensy uC Rx pin                               |
| J19     | RX_SDA  | *TNZ_SDA           | U1 SDA/Rx pin connected to Teensy uC SDApin                               |
| J19     | RX_SDA  | TNZ_RX             | U1 SDA/Rx pin connected to Teensy uC Tx pin                               |
| J23     | EXP     | SDA_RX             | U1 SDA/RX pin for testing and probing                                     |
| J23     | EXP     | SCL_TX             | U1 SCL/TX pin for testing and probing                                     |
| J3      | POCA+   | *VPOC_1            | PoC voltage from MAX20087 output1                                         |
| J3      | POCA+   | Open               | PoC disabled                                                              |
| J4      | POCB+   | *VPOC_2            | PoC voltage from MAX20087 output2                                         |
| J4      | POCB+   | Open               | PoC disabled                                                              |
| J5      | POCC+   | *VPOC_3            | PoC voltage from MAX20087 output3                                         |
| J5      | POCC+   | Open               | PoC disabled                                                              |
| J6      | POCD+   | *VPOC_4            | PoC voltage from MAX20087 output4                                         |
| J6      | POCD+   | Open               | PoC disabled                                                              |
| J12     | USB     | --                 | On-board USB connector                                                    |
| J13     | +12V    | --                 | 12V Input barrel jack connector                                           |
| J14     | +12V    | --                 | 12V Input terminal block connector.                                       |
| J15     | EXT     | --                 | Loop connector to apply external voltage (3.7V to 17V)                    |
| J16     | GND     | --                 | GND loop connector                                                        |
| J17     | EXT_I2C | --                 | Header connections for external I 2 C.                                    |

│

Table 3. Deserializer Jumper/Connector/Switch/Test Point Descriptions (continued)

| VALUE                    | NAME                     | DEFAULT POSITION         | FUNCTION                                                            |
|--------------------------|--------------------------|--------------------------|---------------------------------------------------------------------|
| SW1                      | SW1                      | --                       | Push button switch for U1 power-down/reset                          |
| SW2                      | SW2                      | ON/OFF                   | Slide switches to external pullups for MFP7/MPF8 when used as I 2 C |
| SW3                      | SW3                      | --                       | Push button switch to program Teensy uC                             |
| SW4                      | SW4                      | ON/OFF                   | Slide switch for board power-up                                     |
| SW5                      | SW5                      | ON/OFF                   | Enable/Disable I 2 C to high-speed connector                        |
| TP1                      | CAPVDD                   | --                       | CAPVDD test point                                                   |
| TP2                      | CFG1                     | --                       | CFG1 test point                                                     |
| TP3                      | CFG0                     | --                       | CFG0 test point                                                     |
| TP4                      | USB5V                    | --                       | USB 5 V power test point                                            |
| TP5                      | 12V                      | --                       | 12V rail test point for input barrel jack connector                 |
| TP6                      | 3V3                      | --                       | 3V3 rail test point                                                 |
| TP7                      | 1V8                      | --                       | 1V8 rail test point                                                 |
| TP8                      | 1V2                      | --                       | 1V2 rail test point                                                 |
| TP9                      | 1V0                      | --                       | 1V0 rail test point                                                 |
| TP10                     | VDD18                    | --                       | VDD18 test point                                                    |
| TP11                     | VDD                      | --                       | VDD test point                                                      |
| TP12                     | VDDIO                    | --                       | VDDIO test point                                                    |
| TP13                     | VTERM                    | --                       | VTERM test point                                                    |
| TP14                     | ALTSCL                   | --                       | Teensy uC alternate SCL pin test point. (Debug only)                |
| TP15                     | ALTSDA                   | --                       | Teensy uC alternate SDApin test point. (Debug only)                 |
| IMPORTANT LED INDICATORS | IMPORTANT LED INDICATORS | IMPORTANT LED INDICATORS | IMPORTANT LED INDICATORS                                            |
| VALUE                    | NAME                     | DEFAULT POSITION         | FUNCTION                                                            |
| DS1                      | LOCK                     | --                       | LOCK LED (green)                                                    |
| DS2                      | ERRB                     | --                       | ERRB LED (red)                                                      |
| DS3                      | DS3                      | --                       | TEENSY LED (red)                                                    |
| DS4                      | 3.3V ERROR               | --                       | 3.3V ERROR (red)                                                    |
| DS6                      | 3.3V                     | --                       | 3.3V (green)                                                        |
| DS7                      | 1.0V ERROR               | --                       | 1.0V error (red)                                                    |
| DS8                      | 1.2V ERROR               | --                       | 1.2V error (red)                                                    |
| DS9                      | 1.8V ERROR               | --                       | 1.8V error (red)                                                    |
| DS10                     | 2.5V ERROR               | --                       | 2.5V error (red)                                                    |
| DS11                     | USB 5V                   | --                       | USB 5V (green)                                                      |
| DS12                     | 12V                      | --                       | 12V (green)                                                         |

* Default Position

## MAX96724 DPHY Evaluation Kit

## Evaluates: MAX96724/F GLYPH&lt;c=18,font=/SWJEZY+ArialMT&gt;R

Figure 6. Deserializer Evaluation Board Power Connection Diagram

<!-- image -->

## Troubleshooting

If the MAX96724 DPHY EV kit fails to power-up or does not function properly, try the following appropriate remedial actions:

- 1) Verify the board's red power switch (SW4) is set to ON.
- 2) Verify each of the green power LEDs (12V, 3.3V, and 1.8V) on the MAX96724 DPHY EV kit lights up. The 5V LED lights up only when the Micro-USB is connected. The 1.0V, 1.2V, 1.8V, 2.5V, 3.3V LEDs (red) light up if the voltages are not present.
- 3) Verify all jumpers are correctly set. Refer to the default jumper settings table in the serializer and deserializer EV kit data sheets for details. Ensure all jumpers are firmly attached and replace the loose or damaged ones.
- 4) Verify the USB cable is properly connected.
- 5) Verify the coax cable connection between the serializer and deserializer is stable. Occasionally, the issue can be that the coax cable is not properly connected between the OUT+ of the serializer to the IN+ of the deserializer.
- 6) Validate the DUT is not inadvertently put into the Teensy reset mode. The board's TEENSY\_RST button should only be pressed when the firmware is flashed to the DUT. If the button is pressed during
7. normal operation, the device goes into the Teensy reset mode. Power cycle the board to resume normal operation with the current firmware.
- 7) Validate the correct CFG pin voltages correspond to the expected device mode. Check the method of biasing the CFG voltage at power-up. Measure the voltages at the pins. For further details, see the Configuration (CFG) Pin Settings section.
- 8) The LOCK LED does not light up when connected to the GMSL1 serializers without proper control link configurations.
- 9) The LOCK LED only lights up when all enabled links (configured through register 0x0006) are locked in the GMSL2 mode.
- 10) Validate the microcontroller firmware is active by observing the blinking red Teensy LED (DS3) at power-up. It should remain constantly on afterwards. If the LED is not blinking, or not constantly on after power-up, refer to the available software documentation to reprogram the microcontroller.
- 11) Verify the PC is detecting the COM port when the Micro-USB cable is connected. Use the Windows Device Manager to check the COM port status.
- 12) Power-cycle the board and reopen the GUI.
- 13) Use a new or different serializer or deserializer board.

│

## MAX96724 DPHY EV Kit Package Contents

| ITEM DESCRIPTION     |   QTY |
|----------------------|-------|
| MAX96724 DPHY EV Kit |     1 |
| Micro-USB Cable      |     1 |
| 12V DC Wall Supply   |     1 |
| Coax Cables          |     1 |

## Major Component Suppliers

| SUPPLIER                               | PHONE             | WEBSITE                                    |
|----------------------------------------|-------------------|--------------------------------------------|
| ECS, Inc.                              | 913-782-7787      | www.ecsxtal.com                            |
| KYOCERA                                | N/A               | https://global.kyocera.com/                |
| Murata Electronics North America, Inc. | 770-436-1300      | www.murata-northamerica.com                |
| Rosenberger Hochfrequenztechnik GmbH   | 011-49-86 84-18-0 | www.rosenberger.de                         |
| TDK Corp.                              | 847-803-6100      | product.tdk.com/info/en/catalog/index.html |
| Diodes Inc.                            | 972-987-3900      | www.diodes.com                             |
| Vishay                                 | 1-402-563-6866    | www.vishay.com                             |
| Sullins Electronics Corp               | 760-744-0125      | www.sullinscorp.com                        |
| Panasonic North America                | N/A               | na.panasonic.com/us/                       |
| Coilcraft                              | 847-639-6400      | www.coilcraft.com                          |

## Ordering Information

| PART               | TYPE                                |
|--------------------|-------------------------------------|
| MAX96724-BAK-EVK#  | D-PHY Deserializer 3G/6G COAX EVKIT |
| MAX96724F-BAK-EVK# | D-PHY Deserializer 3G COAX EVKIT    |
| MAX96724R-BAK-EVK# | D-PHY Deserializer 3G COAX EVKIT    |

# RoHs Compliant

## MAX96724 DPHY Evaluation Kit

## MAX96724 EV Kit Bill of Materials

| ITEM   | QTY   | REF DES                                                                                          | VAR STATUS   | MAXINV                | MFG PART #                                                                            | MANUFACTURER                                     | VALUE            | DESCRIPTION                                                                                                                                                                   |
|--------|-------|--------------------------------------------------------------------------------------------------|--------------|-----------------------|---------------------------------------------------------------------------------------|--------------------------------------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | 30    | C1, C3, C6, C9, C10, C16, C17, C20, C22-C28, C55-C57, C59-C63, C66, C70, C76, C91, C94, C96, C97 | Pref         | 20-000U1-B68          | GRM155R71E104KE14; C1005X7R1E104K050BB; TMK105B7104KVH; CGJ2B3X7R1E104K050BB          | MURATA;TDK;TAIYO YUDEN;TDK                       | 0.1UF            | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                                |
| 2      | 10    | C2, C12, C13, C18, C19, C21, C29-C32                                                             | Pref         | 20-00U01-B60          | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN; UMK105B7103KV | KEMET;MURATA;TDK;S AMSUNG ELECTRONIC;TAIYO YUDEN | 0.01UF           | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                                                                               |
| 3      | 1     | C4                                                                                               | Pref         | 20-0001U-B8           | C0402C105K8PAC; CC0402KRX5R6BB105                                                     | KEMET;YAGEO                                      | 1UF              | CAP; SMT (0402); 1UF; 10%; 10V; X5R; CERAMIC                                                                                                                                  |
| 4      | 16    | C5, C8, C15, C53, C64, C68, C84-C89, C95, C98, C100, C101                                        | Pref         | 20-0010U-BA92         | GRT188R61C106KE13                                                                     | MURATA                                           | 10UF             | CAP; SMT (0603); 10UF; 10%; 16V; X5R; CERAMIC                                                                                                                                 |
| 5      | 1     | C11                                                                                              | Pref         | 20-0027P-27           | C0402C0G500270JNP; GRM1555C1H270JA01                                                  | VENKEL LTD.;MURATA                               | 27PF             | CAP; SMT (0402); 27PF; 5%; 50V; C0G; CERAMIC                                                                                                                                  |
| 6      | 1     | C14                                                                                              | Pref         | 20-0022P-27J          | C1005C0G1H220G050                                                                     | TDK                                              | 22PF             | CAP; SMT (0402); 22PF; 2%; 50V; C0G; CERAMIC                                                                                                                                  |
| 7      | 8     | C33-C36, C45, C46, C51, C52                                                                      | Pref         | 20-00U22-DA26         | CGA2B1X7R1V224K050BE                                                                  | TDK                                              | 0.22UF           | CAP; SMT (0402); 0.22UF; 10%; 35V; X7R; CERAMIC                                                                                                                               |
| 8      | 6     | C54, C58, C65, C69, C77, C79                                                                     | Pref         | 20-002U2-11D          | GRM188Z71C225KE43                                                                     | MURATA                                           | 2.2UF            | CAP; SMT (0603); 2.2UF; 10%; 16V; X7R; CERAMIC                                                                                                                                |
| 9      | 1     | C67                                                                                              | Pref         | 20-0047U-EA34         | 293D476X9025E                                                                         | VISHAY SPRAGUE                                   | 47UF             | CAP; SMT (7343-43); 47UF; 10%; 25V; TANTALUM                                                                                                                                  |
| 10     | 1     | C71                                                                                              | Pref         | 20-0047U-Y7           | C3216X5R1C476M160AB;                                                                  | TDK;MURATA                                       | 47UF             | CAP; SMT (1206); 47UF; 20%; 16V; X5R; CERAMIC                                                                                                                                 |
| 11     | 1     | C73                                                                                              | Pref         | 20-0001U-BA46         | GRM31CR61C476ME44 C1608X7R1V105K080AC                                                 | TDK                                              | 1UF              | CAP; SMT (0603); 1UF; 10%; 35V; X7R; CERAMIC                                                                                                                                  |
| 12     | 1     | C74                                                                                              | Pref         | 20-0075P-B69          | C0603C750F2GAC                                                                        | KEMET                                            | 75PF             | CAP; SMT (0603); 75PF; 1%; 200V; C0G; CERAMIC                                                                                                                                 |
| 13     | 4     | C75, C78, C82, C83                                                                               | Pref         | 20-0022U-CA10         | GRM31CR71A226ME15                                                                     | MURATA                                           | 22UF             | CAP; SMT (1206); 22UF; 20%; 10V; X7R; CERAMIC                                                                                                                                 |
| 14     | 1     | C80                                                                                              | Pref         | 20-0015P-E4           | C0603C150K1GAC                                                                        | KEMET                                            | 15PF             | CAP; SMT (0603); 15PF; 10%; 100V; C0G; CERAMIC                                                                                                                                |
| 15     | 1     | C81                                                                                              | Pref         | 20-0020P-21           | C0603HQN101-200JNP                                                                    | VENKEL LTD.                                      | 20PF             | CAP; SMT (0603); 20PF; 5%; 100V; C0G; CERAMIC                                                                                                                                 |
| 16     | 2     | C90, C92                                                                                         | Pref         | 20-004U7-X3           | C1608X5R0J475M080AB; GRM188R60J475ME19;                                               | TDK;MURATA;TAIYO YUDEN                           | 4.7UF            | CAP; SMT (0603); 4.7UF; 20%; 6.3V; X5R; CERAMIC                                                                                                                               |
| 17     | 1     | C93                                                                                              | Pref         | 20-0100U-CA04         | JMK107BJ475MA T491X107K025A                                                           | KEMET                                            | 100UF            | CAP; SMT (7343-43); 100UF; 10%; 25V; TANTALUM                                                                                                                                 |
| 18     | 1     | D1                                                                                               | Pref         | 30-RCLAMP3321PTNT-00  | RCLAMP3321P.TNT                                                                       | SEMTECH                                          | 3.3V             | DIODE; TVS; SMT (0402); VRM=3.3V; IPP=3A                                                                                                                                      |
| 19     | 1     | D2                                                                                               | Pref         | 30-ES1D-00            | ES1D                                                                                  | FAIRCHILD SEMICONDUCTOR                          | ES1D             | DIODE; RECT; SMA (DO-214AC); PIV=200V; IF=1A                                                                                                                                  |
| 20     | 1     | D3                                                                                               | Pref         | 30-B360B13F-00        | B360B-13-F                                                                            | DIODES INCORPORATED                              | B360B-13-F       | DIODE; SCH; SCHOTTKY BARRIER DIODE; SMB; PIV=60V; Io=3A; -55 DEGC TO +125 DEGC                                                                                                |
| 21     | 4     | DS1, DS6, DS11, DS12                                                                             | Pref         | ED111000007297        | SML-P11MTT86R                                                                         | ROHM SEMICONDUCTOR                               | SML-P11MTT86R    | DIODE; LED; YELLOW GREEN; SMT; VF=1.9V; IF=0.02A                                                                                                                              |
| 22     | 7     | DS2-DS4, DS7-DS10                                                                                | Pref         | ED111000007305        | SML-P11UTT86R                                                                         | ROHM SEMICONDUCTOR                               | SML-P11UTT86R    | DIODE; LED; RED CLEAR; PICOLED; SMT; VF=1.8V; IF=0.001A                                                                                                                       |
| 23     | 8     | J1-J6, J18, J19                                                                                  | Pref         | 01-PBC03SAAN3P-21     | PBC03SAAN                                                                             | SULLINS                                          | PBC03SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; -65 DEGC TO +125 DEGC                                                                                              |
| 24     | 4     | J7-J10                                                                                           | Pref         | 01-59S2AQ40MT5Z15P-01 | 59S2AQ-40MT5-Z_1                                                                      | ROSENBERGER                                      | 59S2AQ-40MT5-Z_1 | CONNECTOR; MALE; THROUGH HOLE; FAKRA-HF RIGHT ANGLE PLUG PCB WITH HOUSING; RIGHT ANGLE; 5PINS                                                                                 |
| 25     | 1     | J12                                                                                              | Pref         | 01-198156815P-26      | 1981568-1                                                                             | TE CONNECTIVITY                                  | 1981568-1        | CONNECTOR; FEMALE; SMT; MICRO USB STANDARD TYPE B ASSY; RIGHT ANGLE; 5PINS                                                                                                    |
| 26     | 1     | J13                                                                                              | Pref         | 01-PJ002AH3P-27       | PJ-002AH                                                                              | CUI INC.                                         | PJ-002AH         | CONNECTOR; MALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                                                                              |
| 27     | 1     | J14                                                                                              | Pref         | 01-3935700022P-25     | 393570002                                                                             | MOLEX                                            | 393570002        | CONNECTOR; FEMALE; THROUGH HOLE; 0.3MM PITCH BEAU EUROSTYLE FIXED MOUNT PCB TERMINAL BLOCK; RIGHT ANGLE; 2PINS                                                                |
| 28     | 2     | J15, J16                                                                                         | Pref         | 01-9020BUSS20AWG-00   | 9020 BUSS                                                                             | WEICO WIRE                                       | MAXIMPAD         | EVK KIT PARTS; MAXIM PAD; WIRE; NATURAL; SOLID; WEICO WIRE; SOFT DRAWN BUS TYPE-S; 20AWG                                                                                      |
| 29     | 1     | J17                                                                                              | Pref         | 01-PBC04SAAN4P-21     | PBC04SAAN                                                                             | SULLINS ELECTRONICS CORP.                        | PBC04SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS; -65 DEGC TO +125 DEGC                                                                                              |
| 30     | 1     | J20                                                                                              | Pref         | 01-QSH-03001LDA60P-19 | QSH-030-01-L-D-A                                                                      | SAMTEC                                           | QSH-030-01-L-D-A | EVKIT PART - CONNECTOR; MALE; SMT; HI-SPEED GROUND PLANE SOCKETS; STRAIGHT THROUGH; 60PINS; -55 DEGC TO +125DEGC; NOTE: CUSTOMIZED FOOTPRINT WITH 4-40 PEMNUT MOUNTING OPTION |
| 31     | 2     | J21, J23                                                                                         | Pref         | 01-PBC02SAAN2P-21     | PBC02SAAN                                                                             | SULLINS ELECTRONICS CORP.                        | PBC02SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                                                                                     |
| 32     | 1     | J22                                                                                              | Pref         | 01-PEC12SAAN12P-21    | PEC12SAAN                                                                             | SULLINS ELECTRONICS CORP.                        | PEC12SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 12PINS; -65 DEGC TO +125 DEGC                                                                                             |
| 33     | 2     | JMP1, JMP2                                                                                       | Pref         | 01-PEC04SAAN4P-21     | PEC04SAAN                                                                             | SULLINS ELECTRONICS                              | PEC04SAAN        | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY;                                                                                                                                     |
| 34     | 4     | L1-L4                                                                                            | Pref         | EL111000001784        | MSS7341T-104ML                                                                        | CORP. COILCRAFT                                  | 100UH            | STRAIGHT; 4PINS INDUCTOR; SMT; FERRITE; 100UH; 20%; 1.15A                                                                                                                     |
| 35     | 4     | L5-L8                                                                                            | Pref         | 00-SAMPLE-03          | 1210POC-223MR                                                                         | COILCRAFT                                        | 22UH             | EVKIT PART-INDUCTOR; SMT; FERRITE; CHOKE; TOL=+/- 20%; 0.4A                                                                                                                   |
| 36     | 4     | L9-L12                                                                                           | Pref         | EL111000001785        | PFL1005-561MR                                                                         | COILCRAFT                                        | 560NH            | INDUCTOR; SMT (0402); SHIELDED; 560NH; 20%; 0.53A                                                                                                                             |
| 37     | 5     | L25, L27-L30                                                                                     | Pref         | 51-00600-0AU          | BLM18KG601SN1                                                                         | MURATA                                           | 600              | INDUCTOR; SMT (0603); FERRITE-BEAD; 600; TOL=+/-25%; 1.3A                                                                                                                     |
| 38     | 1     | L26                                                                                              | Pref         | 50-RFCMF1220100M3-00  | RFCMF1220100M3                                                                        | WALSIN TECHNOLOGY                                | RFCMF1220100M3   | INDUCTOR; SMT; CERAMIC CHIP; CHOKE;                                                                                                                                           |
| 39     |       | L31, L33-L35                                                                                     | Pref         | EL1997                | TFM252012ALMA1R5MTAA                                                                  | CORPORATION                                      |                  | 0.3A                                                                                                                                                                          |
| 40     | 4 1   | L32                                                                                              | Pref         | 50-004U7-0FE          | DFE252012P-4R7M=P2                                                                    | TDK MURATA                                       | 1.5UH 4.7UH      | INDUCTOR; SMT; THIN FILM; 1.5UH; 20%; 3.1A INDUCTOR; SMT (2520); FERRITE CORE; 4.7UH; TOL=+/- 20%; 1.7A                                                                       |
| 41     | 1     | L36                                                                                              | Pref         | 50-00120-SM3A         | BLM18SG121TN1                                                                         | MURATA                                           | 120              | INDUCTOR; SMT (0603); FERRITE-BEAD; 120; TOL=+/-25%;                                                                                                                          |
|        |       |                                                                                                  |              |                       |                                                                                       | INTERNATIONAL                                    |                  | 3A                                                                                                                                                                            |

Evaluates: MAX96724/F GLYPH&lt;c=18,font=/SWJEZY+ArialMT&gt;R

## MAX96724 EV Kit Bill of Materials (continued)

| ITEM   | QTY   | REF DES                                                                        | VAR STATUS   | MAXINV                      | MFG PART #                       | MANUFACTURER              | VALUE              | DESCRIPTION                                                                                                                                                                                                                 |
|--------|-------|--------------------------------------------------------------------------------|--------------|-----------------------------|----------------------------------|---------------------------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 43     | 5     | R26, R62, R78                                                                  | Pref         | 80-0001K-18                 | ERJ-2RKF1001                     | PANASONIC                 | 1K                 | RES; SMT (0402); 1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                            |
| 44     | 15    | R2, R25, R4, R5, R8, R11, R21, R63, R65, R66, R86,                             | Pref         | 80-0010K-Q6                 | ERJ-2GEJ103                      | PANASONIC                 | 10K                | RES; SMT (0402); 10K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                                                                                                           |
| 45     | 1     | R95, R97, R99, R100, R103, R111 R6                                             | Pref         | 80-0402R-24                 | CRCW0603402RFK                   | VISHAY DALE               | 402                | RES; SMT (0603); 402; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                           |
| 46     | 19    | R7, R9, R12, R13, R15-R19, R33, R35, R58, R64, R93, R94, R98, R101, R102, R112 | Pref         | 80-0000R-26A                | ERJ-2GE0R00                      | PANASONIC                 | 0                  | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                                                                 |
| 47     | 1     | R20                                                                            | Pref         | 80-0470K-23                 | ERJ-2RKF4703                     | PANASONIC                 | 470K               | RES; SMT (0402); 470K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                          |
| 48     | 4     | R24, R27-R29                                                                   | Pref         | 80-04K99-18                 | ERJ-2RKF4991                     | PANASONIC                 | 4.99K              | RES; SMT (0402); 4.99K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                         |
| 49     | 4     | R38-R41                                                                        | Pref         | 80-005K1-24                 | ERJ-3EKF5101                     | PANASONIC                 | 5.1K               | RES; SMT (0603); 5.1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                          |
| 50     | 4     | R46-R49                                                                        | Pref         | 80-028K7-AA18               | CRCW040228K7FK                   | VISHAY DALE               | 28.7K              | RES; SMT (0402); 28.7K; 1%; +/-100PPM/DEGK; 0.0630W                                                                                                                                                                         |
| 51     | 4     | R54-R57                                                                        | Pref         | 80-049R9-24                 | CRCW060349R9FK                   | VISHAY DALE               | 49.9               | RES; SMT (0603); 49.9; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                          |
| 52     | 2     | R59, R60                                                                       | Pref         | 80-0033R-23                 | CRCW040233R0FK                   | VISHAY DALE               | 33                 | RES; SMT (0402); 33; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                            |
| 53     | 1     | R61 R67, R73,                                                                  | Pref         | 80-0470R-AA23 80-0010K-CA17 | ERJ-2RKF4700 CRCW060310K0FKEAHP  | PANASONIC VISHAY DRALORIC | 470 10K            | RES; SMT (0402); 470; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                           |
| 54 55  | 3 1   | R76 R68                                                                        | Pref Pref    | 80-0002K-Q3                 | CRCW06032K00FKEAHP               | VISHAY DALE               | 2K                 | RES; SMT (0603); 10K; 1%; 100PPM; 0.2500W RES; SMT (0603); 2K; 1%; +/-100PPM/DEGK; 0.2500W                                                                                                                                  |
| 56     | 8     | R69, R71, R72, R79, R80, R104-R106                                             | Pref         | 80-0000R-U22                | RC3216J000CS                     | SAMSUNG                   | 0                  | RES; SMT (1206); 0; 5%; JUMPER; 0.2500W                                                                                                                                                                                     |
| 57     | 6     | R70, R81-R85                                                                   | Pref         | 80-002K2-23                 | RC0402FR-072K2L                  | YAGEO                     | 2.2K               | RES; SMT (0402); 2.2K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                          |
| 58     | 1     | R74                                                                            | Pref         | 80-0015K-24                 | CRCW060315K0FK                   | VISHAY DALE               | 15K                | RES; SMT (0603); 15K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                                                                           |
| 59     | 1     | R75                                                                            | Pref         | 80-0008K-EA24               | RT0603BRE078KL                   | YAGEO                     | 8K                 | RES; SMT (0603); 8K; 0.10%; +/-50PPM/DEGC; 0.1000W                                                                                                                                                                          |
| 60     | 1     | R87                                                                            | Pref         | 80-0100K-23                 | CRCW0402100KFK;RC0402FR- 07100KL | VISHAY;YAGEO              | 100K               | RES; SMT (0402); 100K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                                                                          |
| 61     | 2     | SW1, SW3                                                                       | Pref         | 11-KMR421GLFS-00            | KMR421G LFS                      | C&K COMPONENTS            | KMR421G LFS        | SWITCH; SPST; SMT; STRAIGHT; 32V; 0.05A; MICROMINIATURE SMT TOP ACTUATED; RCOIL=0.1 OHM OHM; RINSULATION=1G OHMOHM                                                                                                          |
| 62     | 2     | SW2, SW5                                                                       | Pref         | 11-97C02-00                 | 97C02                            | GRAYHILL                  | 97C02              | SWITCH; SPST; SMT; 24V; 0.025A; UNSEALED HALF-PITCH DIP SWITCH; RCOIL= 0.1 OHM; RINSULATION=100M OHM; GRAYHILL; -40 DEGC TO +85 DEGC                                                                                        |
| 63     | 1     | SW4                                                                            | Pref         | 11-1101M2S3AQE2-00          | 1101-M2-S3-A-Q-E-2               | C&K COMPONENTS            | 1101-M2-S3-A-Q-E-2 | SWITCH; SPDT; THROUGH HOLE; RIGHT ANGLE; 120V; 6A; 1000 SERIES; RCOIL=0.1 OHM; RINSULATION=100G OHM                                                                                                                         |
| 64     | 9     | TP1-TP3, TP10-TP15                                                             | Pref         | 02-TPMINI5000-00            |                                  | 5000 KEYSTONE             | N/A                | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST EVKIT PART-IC; QUAD GMSL2 TO CSI-2 DESERIALIZER |
| 65     | 1     | U1                                                                             | Pref         | 00-SAMPLE-04                | MAX96724GTN/VY+                  | MAXIM                     | MAX96724GTN/VY+    | WITH GMSL1 COMPATIBILITY; PACKAGE OUTLINE DRAWING: 21-100046; PACKAGE CODE: T5688Y+6; PACKAGE LAND PATTERN: 90-100048                                                                                                       |
| 66     | 2     | U2, U3                                                                         | Pref         | 10-74LVC1G86GV-U            | 74LVC1G86GV                      | NXP                       | 74LVC1G86GV        | IC; XOR; 2-INPUT EXCLUSIVE-OR GATE; SOT753                                                                                                                                                                                  |
| 67     | 1     | U4                                                                             | Pref         | 10-MAX5419META-T            | MAX5419META+                     | MAXIM                     | MAX5419META+       | IC; DPOT; 200K OHM; 256-TAP NONVOLATILE I2C- INTERFACE DIGITAL POTENTIOMETER; TDFN8-EP                                                                                                                                      |
| 68     | 1     | U5                                                                             | Pref         | 10-MAX5419LETA-T            | MAX5419LETA+                     | MAXIM                     | MAX5419LETA+       | IC; DPOT; 200K OHM; 256-TAP NONVOLATILE I2C- INTERFACE DIGITAL POTENTIOMETER; TDFN8-EP                                                                                                                                      |
| 69     | 1     | U6                                                                             | Pref         | 10-MK20DX256VLH7-C          | MK20DX256VLH7                    | FREESCALE                 | MK20DX256VLH7      | IC; UCON; KINETIS K2XMCU FAMILY; LQFP64                                                                                                                                                                                     |
| 70     | 1     | U7                                                                             | Pref         | 10-ICMKL02Z32QFN16-G        | IC_MKL02Z32_QFN16                | PJRC                      | IC_MKL02Z32_QFN16  | IC; UCON; KINETIS KL02 32 KB FLASH; 48 MHZ CORTEX- M0+ BASED MICROCONTROLLER; MKL02 CHIP WITH PRE- PROGRAMMED TEENSY LC AND 3.2 BOOTLOADER; QFN16-EP                                                                        |
| 71     | 2     | U8, U12                                                                        | Pref         | 10-MAX3373EEKA-K            | MAX3373EEKA+                     | MAXIM                     | MAX3373EEKA+       | IC; TRANS; +/-15KV ESD-PROTECTED; 16MPBS; DUAL LOW-VOLTAGE LEVEL TRANSLATOR; SOT23-8                                                                                                                                        |
| 72     | 1     | U9                                                                             | Pref         | 10-MAX20029ATIAV-T          | MAX20029ATIA/V+                  | MAXIM                     | MAX20029ATIA/V+    | IC; VCON; AUTOMOTIVE QUAD LOW-VOLTAGE STEP- DOWN DC-DC CONVERTERS; TQFP28-EP                                                                                                                                                |
| 73     | 1     | U10                                                                            | Pref         | 00-SAMPLE-05                | MAX20076ATCB/V+                  | MAXIM                     | MAX20076ATCB/V+    | EVKIT PART - IC; MAX20076; 36V; 1.2AMPERE MINI BUCK CONVERTER WITH 5MICRO-AMPERE IQ; PACKAGE OUTLINE DRAWING: 21-0664; LAND PATTERN DRAWING: 90-0397; PACKAGE CODE: TD1233+2C; TDFN12                                       |
| 74     | 1     | U11                                                                            | Pref         | 00-SAMPLE-06                | MAX20087ATPA/VY+                 | MAXIM                     | MAX20087ATPA/VY+   | EVKIT PART - IC; MAX20087; QUAD CAMERA POWER PROTECTOR; TQFN20-EP; PACKAGE OUTLINE DRAWING: 21-0139; LAND PATTERN DRAWING: 90-0409; PACKAGE CODE: T2044+4C                                                                  |
| 75     | 1     | Y2                                                                             | Pref         | 60-0025M-0CB                | ECS-250-18-33Q-DS                | ECS INC                   | 25MHZ              | CRYSTAL; SMT; 25MHZ; 18PF; TOL = +/-30PPM; STABILITY = +/-100PPM                                                                                                                                                            |
| 76     | 1     | Y3                                                                             | Pref         | 60-0016M-0CN                | CX2016DB16000D0WZRC1             | KYOCERA                   | 16MHZ              | CRYSTAL; SMT; 16MHZ; 8PF; TOL = +/-50PPM; STABILITY =                                                                                                                                                                       |
| 77     | 1     | PCB                                                                            | -            | EPCB96724DPHY               | MAX96724DPHY                     | MAXIM                     | PCB                | +/-200PPM PCB:MAX96724DPHY                                                                                                                                                                                                  |
| 78     | 11    | EV_KIT_BOX4, EV_KIT_BOX6                                                       | Pref         | 01-NPC02SXON2P-24           | NPC02SXON-RC                     | SULLINS ELECTRONICS       |                    | CONNECTOR; FEMALE; MINI SHUNT; 0.100IN CC; OPEN                                                                                                                                                                             |
| 79     | 1     | EV_KIT_BOX3                                                                    | Pref         | EH111000002600              | GKFYACRYL-001                    | CORP. GEEKIFY             | N/A                | TOP; JUMPER; STRAIGHT; 2PINS EVKIT PART-ACCESSORY; PLASTIC COVER; TOP                                                                                                                                                       |
| 80     | 1     | EV_KIT_BOX3                                                                    | Pref         | EH111000003630              | GKFYACRYL-002                    | GEEKIFY                   | N/A                | PLASTIC COVER WITH MAXIM LOGO EVKIT PART-ACCESSORY; PLASTIC COVER; BOTTOM PLASTIC COVER WITHOUT MAXIM LOGO                                                                                                                  |
| 81     | 4     | EV_KIT_BOX3                                                                    | Pref         | EH111000002553              | BS34CL06X25AP                    | BUMPER SPECIALTIES INC.   | N/A                | BUMPER; CLEAR-CYLINDRICAL SHAPE; 0.375D/0.125H; POLYURETHANE                                                                                                                                                                |
| 82     | 4     | EV_KIT_BOX3                                                                    | Pref         | EH1197                      |                                  | 4802 KEYSTONE             | N/A                | STANDOFF; MALE_FEMALE-THREADED; HEX; 4-40IN; 0.50IN; NYLON                                                                                                                                                                  |
| 83     | 4     | EV_KIT_BOX3                                                                    | Pref         | EH111000002612              | 1902D                            | KEYSTONE                  | N/A                | STANDOFF; FEMALE-THREADED; HEX; 4-40IN; 3/4IN;                                                                                                                                                                              |
| 84     | 8     | EV_KIT_BOX3                                                                    | Pref         | EH111000002614              | NY PMS 440 0025 PH               | B&F FASTENER SUPPLY       | N/A                | NYLON MACHINE SCREW; PHILLIPS; PAN; 4-40; 1/4IN; NYLON                                                                                                                                                                      |
| 85     | 2     | EV_KIT_BOX5                                                                    | Pref         | EH111000004160              |                                  | 24480 KEYSTONE            | N/A                | STANDOFF; FEMALE-THREADED; HEX; M3; 5MM; STEEL                                                                                                                                                                              |
| 86     |       |                                                                                |              |                             |                                  |                           |                    | MACHINE SCREW; PHILLIPS; PAN; M3; 4MM; STAINLESS STEEL                                                                                                                                                                      |
| TOTAL  | 4 298 | EV_KIT_BOX5                                                                    | Pref         | 02-MSM30004P-02             | RM3X4MM 2701                     | APM HEXSEAL               | N/A                |                                                                                                                                                                                                                             |

GLYPH&lt;c=18,font=/SWJEZY+ArialMT&gt;R

Evaluates: MAX96724/F

## MAX96724 EV Kit Bill of Materials (continued)

| ITEM                                                                        | QTY                                                                         | REF DES                                                                     | VAR STATUS                                                                  | MAXINV                                                                      | MFG PART #                                                                                              | MANUFACTURER                                                                | VALUE                                                                       | DESCRIPTION                                                                                                                                                                 |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| DO NOT PURCHASE(DNP)                                                        | DO NOT PURCHASE(DNP)                                                        | DO NOT PURCHASE(DNP)                                                        | DO NOT PURCHASE(DNP)                                                        | DO NOT PURCHASE(DNP)                                                        | DO NOT PURCHASE(DNP)                                                                                    | DO NOT PURCHASE(DNP)                                                        | DO NOT PURCHASE(DNP)                                                        | DO NOT PURCHASE(DNP)                                                                                                                                                        |
| ITEM                                                                        | QTY                                                                         | REF DES                                                                     | VAR STATUS                                                                  | MAXINV                                                                      | MFG PART #                                                                                              | MANUFACTURER                                                                | VALUE                                                                       | DESCRIPTION                                                                                                                                                                 |
| 1                                                                           | 4                                                                           | C37-C40                                                                     | DNP                                                                         | 20-000U1-B68                                                                | GRM155R71E104KE14;C1005X 7R1E104K050BB;TMK105B7104 KVH;CGJ2B3X7R1E104K050BB                             | MURATA;TDK;TAIYO YUDEN;TDK                                                  | 0.1UF                                                                       | CAP; SMT (0402); 0.1UF; 10%; 25V; X7R; CERAMIC                                                                                                                              |
| 2                                                                           | 4                                                                           | C41-C44                                                                     | DNP                                                                         | 20-00U01-B60                                                                | C0402C103K5RAC;GRM155R71 H103KA88;C1005X7R1H103K05 0BE;CL05B103KB5NNN;UMK10 5B7103KV KEMET;MURATA;TDK;S | AMSUNG ELECTRONIC;TAIYO YUDEN                                               | 0.01UF                                                                      | CAP; SMT (0402); 0.01UF; 10%; 50V; X7R; CERAMIC                                                                                                                             |
| 3                                                                           | 4                                                                           | C47-C50                                                                     | DNP                                                                         | 20-00U22-DA26                                                               | CGA2B1X7R1V224K050BE                                                                                    | TDK                                                                         | 0.22UF                                                                      | CAP; SMT (0402); 0.22UF; 10%; 35V; X7R; CERAMIC                                                                                                                             |
| 4 5                                                                         | 1                                                                           | C72                                                                         | DNP                                                                         | 20-0010U-BA92                                                               | GRT188R61C106KE13                                                                                       | MURATA                                                                      | 10UF                                                                        | CAP; SMT (0603); 10UF; 10%; 16V; X5R; CERAMIC                                                                                                                               |
| 6                                                                           | 1                                                                           | J11                                                                         | DNP                                                                         | EH111000004688                                                              | 2304168-9                                                                                               | TE CONNECTIVITY                                                             | 2304168-9                                                                   | CONNECTOR; FEMALE; THROUGH HOLE; MATE-AX HEADER ASSEMBLY; DATA CONNECTIVITY HEADERS; CODE A; WIRE-TO-BOARD; RIGHT ANGLE; 4PINS                                              |
| 7                                                                           | 4                                                                           | L13-L16                                                                     | DNP                                                                         | EL111000001784                                                              | MSS7341T-104ML                                                                                          | COILCRAFT                                                                   | 100UH                                                                       | INDUCTOR; SMT; FERRITE; 100UH; 20%; 1.15A                                                                                                                                   |
|                                                                             | 4                                                                           | L17-L20                                                                     | DNP                                                                         | N/A                                                                         | 1210POC-223MR                                                                                           | COILCRAFT                                                                   | 22UH                                                                        | EVKIT PART-INDUCTOR; SMT; FERRITE; CHOKE; TOL=+/- 20%; 0.4A                                                                                                                 |
| 8                                                                           | 4                                                                           | L21-L24                                                                     | DNP                                                                         | EL111000001785                                                              | PFL1005-561MR                                                                                           | COILCRAFT                                                                   | 560NH                                                                       | INDUCTOR; SMT (0402); SHIELDED; 560NH; 20%; 0.53A                                                                                                                           |
| 9                                                                           | 4                                                                           | R3, R32, R34, R91                                                           | DNP                                                                         | 80-0000R-26A                                                                | ERJ-2GE0R00                                                                                             | PANASONIC                                                                   | 0                                                                           | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                 |
| 10                                                                          | 2                                                                           | R10, R14                                                                    | DNP                                                                         | 80-0010K-Q6                                                                 | ERJ-2GEJ103                                                                                             | PANASONIC                                                                   | 10K                                                                         | RES; SMT (0402); 10K; 5%; +/-200PPM/DEGC; 0.1000W                                                                                                                           |
| 11                                                                          | 4                                                                           | R22, R23, R36, R37                                                          | DNP                                                                         | 80-04K99-18                                                                 | ERJ-2RKF4991                                                                                            | PANASONIC                                                                   | 4.99K                                                                       | RES; SMT (0402); 4.99K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                         |
| 12                                                                          | 4                                                                           | R42-R45                                                                     | DNP                                                                         | 80-0020K-23                                                                 | CRCW040220K0FK                                                                                          | VISHAY DALE                                                                 | 20K                                                                         | RES; SMT (0402); 20K; 1%; +/-100PPM/DEGC; 0.0630W                                                                                                                           |
| 13                                                                          | 4                                                                           | R50-R53                                                                     | DNP                                                                         | 80-005K1-24                                                                 | ERJ-3EKF5101                                                                                            | PANASONIC                                                                   | 5.1K                                                                        | RES; SMT (0603); 5.1K; 1%; +/-100PPM/DEGC; 0.1000W                                                                                                                          |
| 14                                                                          | 5                                                                           | R88-R90, R92, R96                                                           | DNP                                                                         | 80-0000R-26A                                                                | ERJ-2GE0R00                                                                                             | PANASONIC                                                                   | 0                                                                           | RES; SMT (0402); 0; JUMPER; JUMPER; 0.1000W                                                                                                                                 |
| 15                                                                          | 8                                                                           | R107-R110, R113-R116                                                        | DNP                                                                         | 80-0000R-28A                                                                | RC0805JR-070RL                                                                                          | YAGEO PHYCOMP                                                               | 0                                                                           | RES; SMT (0805); 0; 5%; JUMPER; 0.1250W                                                                                                                                     |
| 16                                                                          | 1                                                                           | TP16                                                                        | DNP                                                                         | 02-TPMINI5000-00                                                            | 5000 KEYSTONE                                                                                           | 5000 KEYSTONE                                                               | N/A                                                                         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST |
| 17                                                                          | 1                                                                           | Y1                                                                          | DNP                                                                         | EX111000006159                                                              | SIT8924BAF71-18N-25.000000                                                                              | SITIME CORPORATION                                                          | SIT8924BAF71-18N- 25.000000                                                 | OSCILLATOR; SMT 2X1.6; 15PF; 25MHZ; +/-20PPM ;NOTE:PURCHASE DIRECT FROM THE MANUFACTURER                                                                                    |
| TOTAL                                                                       | 59                                                                          |                                                                             |                                                                             |                                                                             |                                                                                                         |                                                                             |                                                                             |                                                                                                                                                                             |
| PACKOUT (PURCHASED PARTS BUT NOT ASSEMBLED ON PCB AND ARE SHIPPED WITH PCB) | PACKOUT (PURCHASED PARTS BUT NOT ASSEMBLED ON PCB AND ARE SHIPPED WITH PCB) | PACKOUT (PURCHASED PARTS BUT NOT ASSEMBLED ON PCB AND ARE SHIPPED WITH PCB) | PACKOUT (PURCHASED PARTS BUT NOT ASSEMBLED ON PCB AND ARE SHIPPED WITH PCB) | PACKOUT (PURCHASED PARTS BUT NOT ASSEMBLED ON PCB AND ARE SHIPPED WITH PCB) | PACKOUT (PURCHASED PARTS BUT NOT ASSEMBLED ON PCB AND ARE SHIPPED WITH PCB)                             | PACKOUT (PURCHASED PARTS BUT NOT ASSEMBLED ON PCB AND ARE SHIPPED WITH PCB) | PACKOUT (PURCHASED PARTS BUT NOT ASSEMBLED ON PCB AND ARE SHIPPED WITH PCB) | PACKOUT (PURCHASED PARTS BUT NOT ASSEMBLED ON PCB AND ARE SHIPPED WITH PCB)                                                                                                 |
| ITEM                                                                        | QTY                                                                         | REF DES                                                                     | VAR STATUS                                                                  | MAXINV                                                                      | MFG PART #                                                                                              | MANUFACTURER                                                                | VALUE                                                                       | DESCRIPTION                                                                                                                                                                 |
| 1                                                                           | 1                                                                           | EV_KIT_BOX1                                                                 | Pref                                                                        | 88-00713-LRG                                                                | 88-00713-LRG                                                                                            | N/A                                                                         |                                                                             | BOX;+;LARGE BROWN 15 1/8' X 8 3/4 X 3'                                                                                                                                      |
| 2                                                                           | 1                                                                           | EV_KIT_BOX1                                                                 | Pref                                                                        | 87-02163-000                                                                | 87-02163-000                                                                                            | N/A                                                                         |                                                                             | ESD BAG;+;BAG; STATIC SHIELD ZIP 8'X10'; W/ ESD LOGO                                                                                                                        |
| 3                                                                           | 1                                                                           | EV_KIT_BOX1                                                                 | Pref                                                                        | 85-MAXKIT-PNK                                                               | 85-MAXKIT-PNK                                                                                           | N/A                                                                         |                                                                             | PINK FOAM;FOAM;ANTI-STATIC PE 12inX12inX5MM - PACKOUT                                                                                                                       |
| 4                                                                           | 1                                                                           | EV_KIT_BOX1                                                                 | Pref                                                                        | EVINSERT                                                                    | EVINSERT                                                                                                | N/A                                                                         |                                                                             | WEB INSTRUCTIONS FOR MAXIM DATA SHEET                                                                                                                                       |
| 5                                                                           | 1                                                                           | EV_KIT_BOX1                                                                 | Pref                                                                        | 85-84003-006                                                                | 85-84003-006                                                                                            | N/A                                                                         |                                                                             |                                                                                                                                                                             |
|                                                                             |                                                                             |                                                                             | Pref                                                                        | EH111000002613                                                              | AK67421-0.5                                                                                             |                                                                             |                                                                             | LABEL(EV KIT BOX) - PACKOUT CONNECTOR; USB CABLE; MALE-MALE; USB_2.0; 5PINS-                                                                                                |
| 6 7                                                                         | 1 1                                                                         | EV_KIT_BOX1 EV_KIT_BOX1                                                     | Pref                                                                        | EH111000001907                                                              | WSU120-2000                                                                                             | ASSMANN TRIAD MAGNETICS                                                     |                                                                             | 4PINS; 500MM ACCESSORY; WALL ADAPTER; VI-(90-264VAC); VO- (12VDC); 6FT                                                                                                      |
| 8                                                                           | 4                                                                           | EV_KIT_BOX1                                                                 | Pref                                                                        | EH111000002347                                                              | SK-5115                                                                                                 | AMPHENOL ADRONICS                                                           |                                                                             | CONNECTOR; COAX CABLE; MALE-FEMALE; WIREMOUNT; 2000MM;NOTE:SPECIAL ORDER ONLY                                                                                               |
| TOTAL                                                                       | 11                                                                          |                                                                             |                                                                             |                                                                             |                                                                                                         |                                                                             |                                                                             |                                                                                                                                                                             |

Evaluates: MAX96724/F GLYPH&lt;c=18,font=/SWJEZY+ArialMT&gt;R

## MAX96724 DPHY Evaluation Kit

## MAX96724 EV Kit Schematics

<!-- image -->

## MAX96724 EV Kit Schematics (continued)

<!-- image -->

## MAX96724 EV Kit Schematics (continued)

<!-- image -->

## MAX96724 EV Kit Schematics (continued)

<!-- image -->

## MAX96724 EV Kit Schematics (continued)

<!-- image -->

│

GLYPH&lt;c=18,font=/SWJEZY+ArialMT&gt;R

Evaluates: MAX96724/F

## MAX96724 DPHY Evaluation Kit

## MAX96724 EV Kit PCB Layouts

MAX96724 EV Kit-Silk Top

<!-- image -->

MAX96724 EV Kit-Layer2

<!-- image -->

MAX96724 EV Kit-Top

<!-- image -->

MAX96724 EV Kit-Layer3

<!-- image -->

│

## MAX96724 DPHY Evaluation Kit

## MAX96724 EV Kit PCB Layouts (continued)

MAX96724 EV Kit-Layer4

<!-- image -->

MAX96724 EV Kit-Layer6

<!-- image -->

MAX96724 EV Kit-Layer5

<!-- image -->

MAX96724 EV Kit-Layer7

<!-- image -->

│

## MAX96724 DPHY Evaluation Kit

## MAX96724 EV Kit PCB Layouts (continued)

MAX96724 EV Kit-Bottom

<!-- image -->

MAX96724 EV Kit-Silk Bottom

<!-- image -->

│

## MAX96724 DPHY Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/22            | Initial Release                                                                                                                    | -               |
|                 1 | 8/22            | Updated Ordering Information table                                                                                                 | 10              |
|                 2 | 9/22            | Updated part numbers in header, Updated MAX9295A to MAX96717 in General Description , Quick Start , and Figure 5                   | All pages       |
|                 3 | 9/22            | Added MAX96724 to part numbers in header. Removed asterisks from MAX96724 in Ordering Information table.                           | All pages       |
|                 4 | 1 /2 3          | Added R version to part numbers in header. Removed asterisks from MAX96724R and future product note in Ordering Information table. | All pages       |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│