<!-- lastmod 2022-08-02 -->
## General Description

The DS33Z11 demo kit is an easy-to-use evaluation board for the DS33Z11 Ethernet transport-over-serial link  device. The DS33Z11DK contains an integrated Ethernet  PHY  and  serial  link.  The  serial  link is complete with transceiver, transformers, and network connections. Maxim's ChipView software is provided with  the  demo  kit,  giving  point-and-click  access  to configuration and status registers from a Windows ® -based\_PC. On-board LEDs indicate receive loss-ofsignal,  queue  overflow,  Ethernet  link,  Tx/Rx,  and interrupt status.

Windows is a registered trademark of Microsoft Corp.

## Demo Kit Contents

DS33Z11DK Main Board 5.0V Wall Adapter BNC Adapter (2-pin coax) CD-ROM

ChipView Software and Manual DS33Z11DK Data Sheet Configuration Files

## Ordering Information

| PART      | TYPE             |
|-----------|------------------|
| DS33Z11DK | DS33Z11 demo kit |

<!-- image -->

Maxim Integrated Products

<!-- image -->

DS33Z11 Demo Kit

Features

- ♦ Demonstrates Key Functions of DS33Z11 Ethernet Transport Chipset
- ♦ On-Board DS2155 T1E1 SCT, DS3170 T3E3 SCT, Transformers, BNC Adapter, and RJ48 Network Connectors and Termination
- ♦ Provides Support for Hardware and Software Modes
- ♦ Device Driver Provides Automatic Configuration for T1, E1, T3, and E3 Modes
- ♦ On-Board MMC2107 Processor and ChipView Software Provide Point-and-Click Access to the DS33Z11, DS2155, and DS3170 Register Sets
- ♦ All DS33Z11 Interface Pins are Easily Accessible for External Data Source/Sink
- ♦ LEDs for Loss-of-Signal, Queue Overflow, Ethernet Link, Tx/Rx, and Interrupt Status
- ♦ Easy-to-Read Silkscreen Labels Identify the Signals Associated with All Connectors, Jumpers, and LEDs
- ♦ Integrated Power-Supply Interfaces with 5.0V Wall Adapter

1

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table of Contents

| 1.                                                                                                                                                                     | SYSTEM FLOORPLAN....................................................................................................................3                                  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2.                                                                                                                                                                     | PCB ERRATA..................................................................................................................................3                          |
| 3.                                                                                                                                                                     | BASIC OPERATION........................................................................................................................3                               |
| 3.1                                                                                                                                                                    | POWERING UP THE DEMO KIT..........................................................................................................3                                    |
| 3.2                                                                                                                                                                    | INSTALLING AND RUNNING THE SOFTWARE.......................................................................................4                                            |
| 3.3                                                                                                                                                                    | FILE LOCATIONS..............................................................................................................................4                          |
| 4.                                                                                                                                                                     | BASIC DS33Z11 INITIALIZATION (USED FOR ALL QUICK SETUPS).........................................5                                                                     |
| 4.1                                                                                                                                                                    | QUICK SETUP #1 (DEVICE DRIVER + T1 OR E1)...............................................................................5                                              |
| 4.2                                                                                                                                                                    | QUICK SETUP #2 (DEVICE DRIVER + T3 OR E3)...............................................................................5                                              |
| 4.3                                                                                                                                                                    | QUICK SETUP #3 (DS2155 T1E1)...................................................................................................6                                       |
| 4.4                                                                                                                                                                    | QUICK SETUP #4 (DS3170 T3E3)...................................................................................................6                                       |
| 5.                                                                                                                                                                     | MONITOR AND CAPTURE ETHERNET TRAFFIC.........................................................................6                                                         |
| 6.                                                                                                                                                                     | LEDS CONFIGURATION SWITCHES AND JUMPERS..................................................................7                                                             |
| 7.                                                                                                                                                                     | ADDRESS MAP.............................................................................................................................10                             |
| 8.                                                                                                                                                                     | DS33Z11 INFORMATION..............................................................................................................10                                    |
| 8.1                                                                                                                                                                    | DS33Z11DK I NFORMATION...........................................................................................................10                                    |
| 8.2                                                                                                                                                                    | TECHNICAL SUPPORT....................................................................................................................10                                |
| 10.                                                                                                                                                                    | SCHEMATICS................................................................................................................................14                           |
| 11.                                                                                                                                                                    | REVISION HISTORY......................................................................................................................15                               |
| Figure 1. Serial Jumper Configuration......................................................................................................................... 7       | Figure 1. Serial Jumper Configuration......................................................................................................................... 7       |
| Table 1. Main Board PCB Configuration .....................................................................................................................            | Table 1. Main Board PCB Configuration .....................................................................................................................            |
| 7                                                                                                                                                                      | 7                                                                                                                                                                      |
| Table 2. Overview of Daughter Card Address Map................................................................................................... 10                   | Table 2. Overview of Daughter Card Address Map................................................................................................... 10                   |
| Table 3. Component List............................................................................................................................................ 11 | Table 3. Component List............................................................................................................................................ 11 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 1.  System Floorplan

<!-- image -->

## 2.  PCB Errata

- The following errata apply to DS33Z11DK02A0:
- o DS33Z11 RSER and TSER wires were crossed. The schematic has been corrected, and PCBs have been reworked to match the schematic.
- o Header J04 pins 1, 3, 5, 7, 9 were not connected to VCC. The schematic has been corrected, and PCBs have been reworked to match the schematic.

## 3.  Basic Operation

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## 3.1 Powering Up the Demo Kit

- Connect PCB 5.0V wall adapter to the power jack. LED DS11 should light.
- Connect the Ethernet port to an ordinary PC, or network test equipment. Either a patch or crossover cable may be used. The link LED should turn on after connecting the cable.
- Connect RS232 serial cable, or USB cable between the host PC and demo kit.
- Set Jumpers for software mode as described in Table 1 (short description follows).
- A2, A1, A0 Jumpered to pins 2+3
- Top bank all GND (DCEDTE ….. SCANEN), with exception for MODEC0 which is at VCC
- Right Bank all to VCC (AFCS, FULLDS, H1OS)
- Upon power-up, the processor FPGA Status LEDs (DS07 green) will be lit. Interrupt LEDs (DS09 red) will not be lit. DS33Z11 Queue overflow LEDs (DS10 red) will not be lit. PHY LINK LED (DS02/DS01 green) should be lit if the Ethernet is connected.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 3.2 Installing and Running the Software

ChipView  is  a  general-purpose  program  that  supports  a  number  of  Maxim  demo  kits.  To  install  the  ChipView software, run SETUP.EXE from the disk included in the DS33Z11DK box or from the zip file downloadable on our website at www.maxim-ic.com/DS33Z11DK.

After installation, run the ChipView program with the DS33Z11DK board powered up and connected to the PC. If the  default  installation  options  were  used,  one  easy  way  to  run  ChipView  is  to  click  the Start button  on  the Windows toolbar and select Programs → ChipView → ChipView .  In  the  opening  screen,  click  the Register View button. Select the correct serial (or USB) port in the Port Selection dialog box, then click OK .

Next, the Definition File Assignment window appears. This window has subwindows to select definition files for up to four separate boards on other Maxim evaluation platforms. In the active subwindow, select the DS33Z11.DEF definition file from the list shown, or browse to find it in another directory. Press the Continue button.

After selecting the definition file, the main part of the ChipView window displays the DS33Z11 register map. Other definition files may be loaded, and navigated to using the menu marked 'Def File Selection'. To select a register, click on it in the register map. When a register is selected, the full name of the register and its bit map are displayed at the bottom of the ChipView window. Bits that are logic 0 are displayed in white, while bits that are logic 1 are displayed in green.

The ChipView software supports the following actions:

- Toggle a bit. Select the register in the register map and then click the bit in the bit map.
- Write all registers. Click the Write All button and enter the value to be written.
- Write a register. Select the register, click the Write button, and enter the value to be written.
- Read a register. Select the register in the register map and click the Read button.
- Navigate to def file. Select from the Def File Selection menu
- Read all registers. Click the Read All button.

## 3.3 File Locations

This demo kit relies upon several supporting files, which are provided on the CD and are available as a zip file from the Maxim website at www.maxim-ic.com/DS33Z11DK.

All locations are given relative to the top directory of the CD/zip file.

- DS33Z11 register definition files and configuration files:
- o .\cfg\_demo\_gui\DS33Z11\_cfg\_demo\_gui\DS33Z11.def
- o .\DS33Z11\_cfg\_demo\_gui\SU\_LI\_PORT1.def
- o .\DS33Z11\_cfg\_demo\_gui\basic\_config.mfg
- DS2155 register definition files and configuration files:
- o .\DS33Z11\_cfg\_demo\_gui\te1\_ds2155\DS2155.def
- o .\DS33Z11\_cfg\_demo\_gui\te1\_ds2155\e1\_gapclk\_crc4\_hdb3\_nocas.ini
- DS3170 register definition files and configuration files:
- o .\DS33Z11\_cfg\_demo\_gui\te3\_ds3170\ \_DS3170\_Global.def
- o .\DS33Z11\_cfg\_demo\_gui\te3\_ds3170\ DS3170\_Port\_LIU.def
- o ….. 6 other low level def files ….
- o .\DS33Z11\_cfg\_demo\_gui\te3\_ds3170\70\_t3\_sct\_needscoaxlb.mfg

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 4.  Basic DS33Z11 Initialization (Used for All Quick Setups)

This section covers four basic methods for configuring the DS33Z11. Any one of these initializations can be used with the following Quick Setup examples:

1. Device  driver  based.  If  pins  J04.1+J04.2  are  jumpered,  the  on-board  device  driver  provides  a  basic configuration for the DS33Z11. This enables traffic to pass from the Ethernet port to the serial port. Consult the  device  driver  documentation  for  further  details.  Sections  4.1  and  4.2  describe  specific  device  driver based configurations. To load the GUI interface for the device drivers go to the ChipView register mode Tools menu and select Tools → Plugins → DS33XW Device Driver Demo.
2. Register-Based  Configuration.  Launch  ChipView.exe  and  select Register  View. Sections  4.3  and  4.4 describe specific configurations.
3. Hardware Mode. Set switches as described in the section for powering up the demo kit, then change the following: HWMODE ← 3.3V, A0 ← 3.3VV, A1 ← 3.3V, A2 ← 0V. This sets the part for LSB first, scrambling off, HDLC encapsulated. At this point traffic will pass from the Ethernet port to the serial port. In this mode broadcast frames are not passed (i.e., ping).
4. EEPROM mode is available with the DK, but is beyond the scope of this manual.

## 4.1 Quick Setup #1 (Device Driver + T1 or E1)

- Install jumpers to place the serial interface in T1E1 mode as shown in Figure 1.
- Complete  the  hardware  configuration  and  one  of  the  basic  DS33Z11  configurations  as  described  in  the previous section. (Ensure jumpers for J04.1+J01.2 are installed to enable the device driver).
- Remove jumper between J04.9 and J04.10:
- Place a loopback connector at the DS2155 network side; RLOS LED DS13 should go out.
- Install jumper between J04.7 and J04.8 for E1 mode. Remove jumper between J04.7 and J04.8 for T1 mode.
- At this point any packets sent to the DS33Z11 are echoed back. Incoming packets (i.e., ping) should cause the ACT LED to blink.
- To interact with the device driver select from the drop down menu:
- Select Tools → Plugins → DS33Z44/11/41 Device Driver Demo
- Tools → Plugins → Load Plugins. When asked if DLLs have already registered select yes
- A new form called 'Zchip Configuration' pops up.
- Preload basic configuration for the GUI by selecting File → Load Settings (in the 'Zchip Configuration' form). Select the file named 'basic\_Config.eset'

## 4.2 Quick Setup #2 (Device Driver + T3 or E3)

- Install jumpers to place the serial interface in T3E3 mode as shown in Figure 1.
- Complete  the  hardware  configuration  and  one  of  the  basic  DS33Z11  configurations  as  described  in  the previous section. (Ensure jumpers for J04.1+J01.2 are installed to enable the device driver).
- Install jumper between J04.9 and J04.10:
- Place jumpers to loopback the DS3170 network side; RLOS LED DS12 should go out.
- Install jumper between J04.7 and J04.8 for E3 mode. Remove jumper between J04.7 and J04.8 for T3 mode.
- At this point any packets sent to the DS33Z11 are echoed back. Incoming packets (i.e., ping) should cause the ACT LED to blink.
- To interact with the device driver select from the drop down menu:
- Select Tools → Plugins → DS33Z44/11/41 Device Driver Demo
- Tools → Plugins → Load Plugins. When asked if DLLs have already registered select yes
- A new form called 'Zchip Configuration' pops up.
- Preload basic configuration for the GUI by selecting File → Load Settings (in the 'Zchip Configuration' form). Select the file named 'basic\_Config.eset'

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 4.3 Quick Setup #3 (DS2155 T1E1)

- Install jumpers to place the serial interface in T1E1 mode as shown in Figure 1.
- Launch ChipView.exe (or use existing session if its already open) and select Register View. When prompted for a definition file, pick the file named DS33Z11.def .  After  the  definition  file  loads,  go  to  the  File  menu and select File → Memory Config File → Load .MFG file. When prompted, select the file named basic\_config.mfg .
- Complete the hardware configuration and one of the basic DS33Z11 configurations as previously described.
- Load the definition file for the DS2155 by going to the file menu and selecting File → Definition Config File and select  the  definition  file  named DS2155.def .  After  the  definition  file  loads,  go  to  the  File  menu  and  select File → Reg Ini File → Load Ini File. When prompted, pick the file named e1\_gapclk\_crc4\_hdb3\_nocas.ini .
- At this point any packets sent to the DS33Z11 are echoed back. Incoming packets (i.e., ping) should cause the ACT LED to blink.
- Place a loopback connector at the DS2155 network side; RLOS LED DS35 should go out.

## 4.4 Quick Setup #4 (DS3170 T3E3)

- Install jumpers to place the serial interface in T3E3 mode as shown in Figure 1.
- Launch ChipView.exe (or use existing session if its already open) and select Register View. When prompted for a definition file, pick the file named DS33Z11.def .  After  the  definition  file  loads,  go  to  the  File  menu and select File → Memory Config File → Load .MFG file. When prompted, select the file named basic\_config.mfg .
- Complete the hardware configuration and one of the basic DS33Z11 configurations as previously described.
- Load the definition file for the DS3170 by going to the file menu and selecting File → Definition Config File and select  the  definition  file  named ds3170\_global.def .  After  the  definition  file  loads,  go  to  the  File  menu  and select File → Memory Config File → Load .MFG file. When prompted, select the file named 70\_t3\_sct\_needscoaxlb.mfg .
- Place a loopback connector at the DS3170 network side.
- At this point any packets sent to the DS33Z11 are echoed back. Incoming packets (i.e., ping) should cause the ACT LED to blink.

## 5.  Monitor and Capture Ethernet Traffic

- Although ping is mentioned, it is *not* recommended. The ping command goes through the computer's TCPIP stack, and sometimes will not be sent out the PC's network connector (i.e., if the PCs' ARP cache is out of date). Additionally ping requires two PCs, as a PC with only one adapter can not ping itself (a local ping gets sent to 'local host' instead of out the connector). With that said, ping is still a valuable test once the prototyping stage is complete.
- Generation and capture of arbitrary (raw) packets can be easily accomplished using CommView. A time-limited demo is available at the website www.tamos.com/products/commview.
- Wireshark is an excellent (and free) packet capture utility. Download is available at www.wireshark.org.
- Adding additional Ethernet ports to a PC is rather simple when a USB-to-Ethernet adapter is used. This allows for end-to-end testing using a single PC. When using two adapters the PC will have a different IP address for each adapter. Test equipment will allow selection of either adapter. Operating system based network traffic will be sent out the default adapter, usually this is the adapter that has recently had connection to a live network.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1. Serial Jumper Configuration

<!-- image -->

## 6.  LEDs Configuration Switches and Jumpers

The DS33Z11DK has several configuration switches, banana plugs, oscillators, and jumpers. Table 1 provides a description of these components, given in order of appearance on the PCB. Component listing is given from left to right, top to bottom, when the board is held with the Ethernet port at the top.

Table 1. Main Board PCB Configuration

| SILKSCREEN REFERENCE          | FUNCTION                                                       | BASIC SETTING   | BASIC SETTING   | DESCRIPTION                                                                                                                                                                            |
|-------------------------------|----------------------------------------------------------------|-----------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|                               |                                                                | SW MODE         | HW MODE         |                                                                                                                                                                                        |
| J01                           | System Power                                                   | Installed       | Installed       | Power jack +5.0V to center post                                                                                                                                                        |
| J02                           | Ethernet Connection                                            | Installed       | Installed       | Ethernet connection with MDIX, connect with ether a patch or crossover cable                                                                                                           |
| JP01 JP02 JP03                | DP83848 AN0 AN1 AN_EN                                          | Not installed * | Not installed*  | Configuration pins for DP83848 PHY. These pins have internal pullups. Leaving un-Jumpered or setting to VCC enables auto-negotiation and advertise as 100/10 full/half duplex capable. |
| DS02+DS01 DS04+DS03 DS06+DS05 | Link (on for link) Speed (on for 100) Activity (blink for act) | On On Blink     | On On Blink     | Status LEDs for DP83848 PHY. Each status function has 2 LEDs to accommodate the pin configuration methods used by the PHY                                                              |
| JP12                          | DP83848 MDIX                                                   | VCC             | VCC             | Set to VCC to enable MDIX (automatic crossing of RX/TX pair)                                                                                                                           |
| JP14                          | DP83848 RMII                                                   | GND             | GND             | Set to GND to enable MII mode, VCC to enable RMII mode. Note that the DS33Z11 RMII pin needs to be Jumpered to match this pin.                                                         |
| JP11                          | DS33Z11 mode pin; DTE/DCE selection                            | Low             | Low             | Low for DTE                                                                                                                                                                            |
| JP10                          | DS33Z11 mode pin RMII/MII selection                            | Low             | Low             | High for RMII, low for MII                                                                                                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| SILKSCREEN REFERENCE         | FUNCTION                          | BASIC SETTING      | BASIC SETTING         | DESCRIPTION                                                                                                                                                                                                                                 |
|------------------------------|-----------------------------------|--------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SILKSCREEN REFERENCE         | FUNCTION                          | SW MODE            | HW MODE               | DESCRIPTION                                                                                                                                                                                                                                 |
| JP09                         | DS33Z11 mode pin CKPHA selection  | Low                | Low                   | SPI EEPROM hardware mode configuration switch                                                                                                                                                                                               |
| JP08                         | DS33Z11 mode pin MODEC0 selection | High               | Low                   | Software mode selected                                                                                                                                                                                                                      |
| JP07                         | DS33Z11 mode pin MODEC1selection  | Low                | Low                   | Software mode selected                                                                                                                                                                                                                      |
| JP06                         | DS33Z11 mode pin HWMODE selection | Low                | Low                   | Hardware/software mode (software mode selected)                                                                                                                                                                                             |
| JP04                         | DS33Z11 mode pin SCANMO selection | Low                | Low                   | Set low for normal operation                                                                                                                                                                                                                |
| JP05                         | DS33Z11 mode pin SCANEN selection | Low                | Low                   | Set low for normal operation                                                                                                                                                                                                                |
| J03                          | USB                               | User decision      | User decision         | System USB connector. Used with ChipView host PC software (if RS232 is not used)                                                                                                                                                            |
| J10                          | RS232 Serial                      | User decision      | User decision         | System RS232 connector. Used with ChipView host PC software (if USB is not used). The RS232 connector may also be used with any terminal emulator, settings are 57.6K, 8N1, no flow control.                                                |
| DS07                         | Status LED                        | On                 | On                    | Displays kit status. This LED should remain lit                                                                                                                                                                                             |
| DS08                         | Status LED                        | -                  | -                     | Miscellaneous LED.                                                                                                                                                                                                                          |
| J04.1 + J04.2                | Enable device driver              | User decision      | -                     | When installed the device driver will configure the DS33Z11 and the transceiver during power-up.                                                                                                                                            |
| J04.3 + J04.4                | Enable callbacks                  | User decision      | -                     | When installed the driver will respond to interrupts.                                                                                                                                                                                       |
| J04.3 + J04.4                | Looptime / Sourcetime             | User decision      | -                     | When installed the driver will configure the serial link for Looptime (TCLK driven by RCLK). When not installed TCLK is driven by scaled MCLK. Driver must be enabled to make use of this setting.                                          |
| J04.7 + J04.8 J04.9 + J04.10 | T1E1, T3E3 selection              | Not installed      | -                     | When installed the driver will select a transceiver and mode of operation as shown below. 00 = DS2155 in T1 Mode 01 = DS3170 in T3 Mode 10 = DS2155 in E1 Mode 11 = DS3170 in E3 Mode Driver must be enabled to make use of these settings. |
| JP18 JP17 JP16               | Addr2 Addr1 Addr0                 | Installed Pins 2+3 | See DS33Z11 datasheet | Address pin/EEPROM config switch. Install on pins 2+3 to connect DS33Z11 address pins A2,A1,A0 to the processor. Leave disconnected to allow pullup to pull high. Connect pins 1+2 to pull low.                                             |
| J07                          | JTAG                              | -                  | -                     | JTAG testpoints for DS33Z11                                                                                                                                                                                                                 |
| J06, J05                     | Ethernet Testpoints               | -                  | -                     | Testpoints for Ethernet interface                                                                                                                                                                                                           |
| YB02 (Bottom side)           | Unused refclk OSC                 | -                  | -                     | Unused oscillator. Could be used to drive DS33Z11 refclk and PHY MCLK. Instead this oscillator is not used, and the clocks are provided by DS33Z11 RefClkO.                                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| SILKSCREEN          | FUNCTION                           | BASIC SETTING          | BASIC SETTING          | DESCRIPTION                                                                                                                                                                       |
|---------------------|------------------------------------|------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| REFERENCE           |                                    | SW MODE                | HW MODE                |                                                                                                                                                                                   |
| JP24                | RefClk / Phy Clock selection       | -                      | -                      | DS33Z11 RefClk output. Jumper pins 1+2 to drive with YB02. Jumper pins 2+3 to drive with DS33Z11 RefClk output.                                                                   |
| YB03 (Bottom side)  | System Clock                       | -                      | -                      | System Clock for DS33Z11. Must be set for 100Mhz If RefClkO is used to drive RefClkI and PhyClk.                                                                                  |
| Y01 (Not populated) | spi_cs, spi_ck, spi_miso, spi_mosi | -                      | -                      | SPI signals (for EEPROM memory)                                                                                                                                                   |
| JP13                | DS33Z11 mode pin AFCS selection    | HW mode only           | High                   | Set high to enable auto flow control.                                                                                                                                             |
| JP15                | DS33Z11 mode pin FULLDS selection  | HW mode only           | High                   | Set high to enable full duplex.                                                                                                                                                   |
| JP19                | DS33Z11 mode pin H10S selection    | HW mode only           | High                   | Set high to confg for 100Mb                                                                                                                                                       |
| U04                 | Processor testpoints               | --                     | --                     | Testpoint grid surrounding processor, all processor pins are brought out.                                                                                                         |
| J09 J08             | Address Databus                    | -                      | -                      | Address databus for DS33Z11, DS2155, DS3170. Unused chipselect CS_X4 are provided to allow the DK to control additional, external devices.                                        |
| J08.12+J08.14       | FPGA Tristate Jumper               | -                      | -                      | Setting the 'tristate' jumper will tristate the FPGA. This provides the user with a method for controlling the DK with an external processor.                                     |
| TP02                | RefClkIn Testpoint                 | -                      | -                      | DS33Z11 RefClk input. Also see JP24.                                                                                                                                              |
| SW01                | System Reset                       | -                      | -                      | Drives UB11 reset controller                                                                                                                                                      |
| DS11                | LED                                | -                      | -                      | Power OK LED                                                                                                                                                                      |
| J13                 | Debug                              | -                      | -                      | Connector for OnCe software debug                                                                                                                                                 |
| J12                 | JTAG                               | -                      | -                      | JTAG connector for Lattice FPGA                                                                                                                                                   |
| TP05 TP06           | TDEN RDEN                          | -                      | -                      | DS33Z11 TDEN RDEN testpoints. Unused.                                                                                                                                             |
| JP20 JP21 JP22 JP23 | TSER RSER TCLKI RCLKI              | Jumpered, See Figure 1 | Jumpered, See Figure 1 | Jumper selection for serial interface. Possible modes are: T1E1, T3E3, Loopback (or wired to external system). Note that loopback requires an external oscillator to be wired in. |
| JP25                | Testpoints T3E3_OSC                | -                      | -                      | Testpoints for T3E3 Oscillator. Can be used as TCLK/RCLK when in hardware loopback                                                                                                |
| YB04                | OSC                                | -                      | -                      | Oscillator for DS2155 MCLK                                                                                                                                                        |
| J14 J16             | 2-pin BNC Jumper                   | -                      | -                      | Jumper for connection to T1E1 BNC                                                                                                                                                 |
| J15                 | RJ45                               | -                      | -                      | T1E1 RJ45 connector                                                                                                                                                               |
| DS13                | LED                                | -                      | -                      | DS2155 RLOS LED                                                                                                                                                                   |
| DS12                | LED                                | -                      | -                      | DS3170 GPIO LED                                                                                                                                                                   |
| J18 J17             | TX RX                              | -                      | -                      | Jumper for connection to T3E3 BNC                                                                                                                                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 7.  Address Map

Motorola resource card address space begins at 0x81000000. All offsets given below are relative to 0x81000000.

Table 2. Overview of Daughter Card Address Map

| OFFSET           | DEVICE   | DESCRIPTION                                                    |
|------------------|----------|----------------------------------------------------------------|
| 0X0000 to 0X0087 | FPGA     | Processor board identification                                 |
| 0X1000 to 0X1FFF | DS33Z11  | DS33Z11. Uses CS_X1.                                           |
| 0X2000 to 0X2FFF | DS2155   | T1E1 transceiver. Uses CS_X2                                   |
| 0X3000 to 0X3FFF | DS3170   | T3E3 transceiver. Uses CS_X3.                                  |
| 0X4000 to 0X4FFF | Unused   | Unused chipselect for controlling external device. Uses CS_X4. |

Registers in the DS33Z11, DS2155, and DS3170 can be easily modified using the ChipView host-based userinterface software with the definition files previously mentioned.

## 8.  DS33Z11 Information

For more information about the DS33Z11, consult the DS33Z11 data sheet available on our website at www.maxim-ic.com/DS33Z11.

## 8.1 DS33Z11DK Information

For more information about the DS33Z11DK, including software downloads, consult the DS33Z11DK data sheet available on the our website at www.maxim-ic.com/DS33Z11DK.

## 8.2 Technical Support

For additional technical support, go to www.maxim-ic.com/support.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 9.  Component List

Table 3 shows the component list for the DS33Z11DK.

Table 3. Component List

| DESIGNATION                                                                                                                                                                                                                                                                                        | QTY                                                                                                                                                                                                                                                                                                | DESCRIPTION                                                                                                                                                                                                                                                                                        | SUPPLIER                                                                                                                                                                                                                                                                                           | PART                                                                                                                                                                                                                                                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| C01, C02, C03, C04, C05, C06, C07, CB22, CB28, CB73 , C14, C16, C20, CB44, CB56                                                                                                                                                                                                                    | 15                                                                                                                                                                                                                                                                                                 | 1206 CERAM 10uF 10V 20%                                                                                                                                                                                                                                                                            | Panasonic                                                                                                                                                                                                                                                                                          | ECJ-3YB1A106M                                                                                                                                                                                                                                                                                      |
| See next row (begins with C08)                                                                                                                                                                                                                                                                     | 34                                                                                                                                                                                                                                                                                                 | L_0603 CERAM .01uF 50V 10% X7R                                                                                                                                                                                                                                                                     | AVX                                                                                                                                                                                                                                                                                                | 06035C103KAT                                                                                                                                                                                                                                                                                       |
| C08, C17, C22, C27, C29, C36, C37, C40, C41, C42, CB05, CB11, CB17, CB18, CB19, CB27, CB35, CB40, CB46, CB47, CB54, CB57, CB59, CB65, CB69, CB78, CB80, CB82, CB84, CB90, CB91, CB94, CB97, CB99                                                                                                   | C08, C17, C22, C27, C29, C36, C37, C40, C41, C42, CB05, CB11, CB17, CB18, CB19, CB27, CB35, CB40, CB46, CB47, CB54, CB57, CB59, CB65, CB69, CB78, CB80, CB82, CB84, CB90, CB91, CB94, CB97, CB99                                                                                                   | C08, C17, C22, C27, C29, C36, C37, C40, C41, C42, CB05, CB11, CB17, CB18, CB19, CB27, CB35, CB40, CB46, CB47, CB54, CB57, CB59, CB65, CB69, CB78, CB80, CB82, CB84, CB90, CB91, CB94, CB97, CB99                                                                                                   | C08, C17, C22, C27, C29, C36, C37, C40, C41, C42, CB05, CB11, CB17, CB18, CB19, CB27, CB35, CB40, CB46, CB47, CB54, CB57, CB59, CB65, CB69, CB78, CB80, CB82, CB84, CB90, CB91, CB94, CB97, CB99                                                                                                   | C08, C17, C22, C27, C29, C36, C37, C40, C41, C42, CB05, CB11, CB17, CB18, CB19, CB27, CB35, CB40, CB46, CB47, CB54, CB57, CB59, CB65, CB69, CB78, CB80, CB82, CB84, CB90, CB91, CB94, CB97, CB99                                                                                                   |
|                                                                                                                                                                                                                                                                                                    | 31                                                                                                                                                                                                                                                                                                 | L_0603 CERAM .1uF 16V 20% X7R                                                                                                                                                                                                                                                                      | AVX                                                                                                                                                                                                                                                                                                | 0603YC104MAT                                                                                                                                                                                                                                                                                       |
| C09, C18, C24, C38, C39, C45, CB08, CB13, CB29, CB32, CB33, CB34, CB37, CB39, CB45, CB50, CB55, CB58, CB60, CB63, CB67, CB70, CB71, CB74, CB76, CB86, CB87, CB88, CB93, CB95, CB96                                                                                                                 | C09, C18, C24, C38, C39, C45, CB08, CB13, CB29, CB32, CB33, CB34, CB37, CB39, CB45, CB50, CB55, CB58, CB60, CB63, CB67, CB70, CB71, CB74, CB76, CB86, CB87, CB88, CB93, CB95, CB96                                                                                                                 | C09, C18, C24, C38, C39, C45, CB08, CB13, CB29, CB32, CB33, CB34, CB37, CB39, CB45, CB50, CB55, CB58, CB60, CB63, CB67, CB70, CB71, CB74, CB76, CB86, CB87, CB88, CB93, CB95, CB96                                                                                                                 | C09, C18, C24, C38, C39, C45, CB08, CB13, CB29, CB32, CB33, CB34, CB37, CB39, CB45, CB50, CB55, CB58, CB60, CB63, CB67, CB70, CB71, CB74, CB76, CB86, CB87, CB88, CB93, CB95, CB96                                                                                                                 | C09, C18, C24, C38, C39, C45, CB08, CB13, CB29, CB32, CB33, CB34, CB37, CB39, CB45, CB50, CB55, CB58, CB60, CB63, CB67, CB70, CB71, CB74, CB76, CB86, CB87, CB88, CB93, CB95, CB96                                                                                                                 |
| C10, C11                                                                                                                                                                                                                                                                                           | 2                                                                                                                                                                                                                                                                                                  | L_0603 CERAM 22pF 25V 5% NPO                                                                                                                                                                                                                                                                       | AVX                                                                                                                                                                                                                                                                                                | 06033A220JAT                                                                                                                                                                                                                                                                                       |
| C12, C13 , C44                                                                                                                                                                                                                                                                                     | 3                                                                                                                                                                                                                                                                                                  | L_1206 CERAM 1uF 16V 10%                                                                                                                                                                                                                                                                           | Panasonic                                                                                                                                                                                                                                                                                          | ECJ-3YB1C105K                                                                                                                                                                                                                                                                                      |
| See next row (begins with C15)                                                                                                                                                                                                                                                                     | 51                                                                                                                                                                                                                                                                                                 | 0603 CERAM 4.7uF 6.3V MULTILAYER                                                                                                                                                                                                                                                                   | UNK                                                                                                                                                                                                                                                                                                | ECJ-1VB0J475M                                                                                                                                                                                                                                                                                      |
| C15, C21, C23, C25, C26, C28, C30, C31, C32, C33, C34, C35, C43, C46, C47, CB09, CB10, CB15, CB20, CB21, CB24, CB25, CB26, CB30, CB31, CB36, CB38, CB41, CB42, CB43, CB48, CB49, CB51, CB52, CB53, CB61, CB62, CB64, CB66, CB68, CB72, CB75, CB77, CB79, CB81, CB83, CB85, CB89, CB92, CB98, CB100 | C15, C21, C23, C25, C26, C28, C30, C31, C32, C33, C34, C35, C43, C46, C47, CB09, CB10, CB15, CB20, CB21, CB24, CB25, CB26, CB30, CB31, CB36, CB38, CB41, CB42, CB43, CB48, CB49, CB51, CB52, CB53, CB61, CB62, CB64, CB66, CB68, CB72, CB75, CB77, CB79, CB81, CB83, CB85, CB89, CB92, CB98, CB100 | C15, C21, C23, C25, C26, C28, C30, C31, C32, C33, C34, C35, C43, C46, C47, CB09, CB10, CB15, CB20, CB21, CB24, CB25, CB26, CB30, CB31, CB36, CB38, CB41, CB42, CB43, CB48, CB49, CB51, CB52, CB53, CB61, CB62, CB64, CB66, CB68, CB72, CB75, CB77, CB79, CB81, CB83, CB85, CB89, CB92, CB98, CB100 | C15, C21, C23, C25, C26, C28, C30, C31, C32, C33, C34, C35, C43, C46, C47, CB09, CB10, CB15, CB20, CB21, CB24, CB25, CB26, CB30, CB31, CB36, CB38, CB41, CB42, CB43, CB48, CB49, CB51, CB52, CB53, CB61, CB62, CB64, CB66, CB68, CB72, CB75, CB77, CB79, CB81, CB83, CB85, CB89, CB92, CB98, CB100 | C15, C21, C23, C25, C26, C28, C30, C31, C32, C33, C34, C35, C43, C46, C47, CB09, CB10, CB15, CB20, CB21, CB24, CB25, CB26, CB30, CB31, CB36, CB38, CB41, CB42, CB43, CB48, CB49, CB51, CB52, CB53, CB61, CB62, CB64, CB66, CB68, CB72, CB75, CB77, CB79, CB81, CB83, CB85, CB89, CB92, CB98, CB100 |
| C19, CB04, CB06, CB07, CB14, CB16, CB23                                                                                                                                                                                                                                                            | 7                                                                                                                                                                                                                                                                                                  | 0603 CERAM 0.1uF 16V 10%                                                                                                                                                                                                                                                                           | Phycomp                                                                                                                                                                                                                                                                                            | 06032R104K7B20D                                                                                                                                                                                                                                                                                    |
| CB01, CB02, CB03, CB12                                                                                                                                                                                                                                                                             | 4                                                                                                                                                                                                                                                                                                  | L_D CASE TANT 68uF 16V 20%                                                                                                                                                                                                                                                                         | Panasonic                                                                                                                                                                                                                                                                                          | ECS-T1CD686R                                                                                                                                                                                                                                                                                       |
| DB01                                                                                                                                                                                                                                                                                               | 1                                                                                                                                                                                                                                                                                                  | SCHOTTKY DIODE, 1 AMP 40 VOLT                                                                                                                                                                                                                                                                      | International Rectifier                                                                                                                                                                                                                                                                            | 10BQ040                                                                                                                                                                                                                                                                                            |
| DS01, DS02, DS07 , DS11                                                                                                                                                                                                                                                                            | 4                                                                                                                                                                                                                                                                                                  | L_LED, GREEN, SMD                                                                                                                                                                                                                                                                                  | Panasonic                                                                                                                                                                                                                                                                                          | LN1351C                                                                                                                                                                                                                                                                                            |
| DS03, DS04                                                                                                                                                                                                                                                                                         | 2                                                                                                                                                                                                                                                                                                  | LED, AMBER, SMD                                                                                                                                                                                                                                                                                    | Panasonic                                                                                                                                                                                                                                                                                          | LN1451C                                                                                                                                                                                                                                                                                            |
| DS05, DS06, DS13 , DS08, DS09, DS10, DS12                                                                                                                                                                                                                                                          | 7                                                                                                                                                                                                                                                                                                  | LED, RED, SMD                                                                                                                                                                                                                                                                                      | Panasonic                                                                                                                                                                                                                                                                                          | LN1251C                                                                                                                                                                                                                                                                                            |
| GND_TP01, GND_TP02, GND_TP03, GND_TP04, GND_TP05, GND_TPB01                                                                                                                                                                                                                                        | 6                                                                                                                                                                                                                                                                                                  | STANDARD GROUND CLIP                                                                                                                                                                                                                                                                               | KEYSTONE                                                                                                                                                                                                                                                                                           | 4954                                                                                                                                                                                                                                                                                               |
| H01, H02, H03, H04, H05, H06                                                                                                                                                                                                                                                                       | 6                                                                                                                                                                                                                                                                                                  | KIT, 4-40 HARDWARE, .50 NYLON STANDOFF AND NYLON HEX-NUT                                                                                                                                                                                                                                           | NA                                                                                                                                                                                                                                                                                                 | 4-40KIT4                                                                                                                                                                                                                                                                                           |
| J01                                                                                                                                                                                                                                                                                                | 1                                                                                                                                                                                                                                                                                                  | CONN 2.1MM/5.5MM PWRJACK RT ANGLE PCB, closed frame, high current 24VDC@5A also requires 5V ACDC adapter INPUT 100-240VAC 50- 60HZ 0.6A OUTPUT DC 5V 2.6A. PN DMS050260-P5P-SZ. MODEL 3Z- 161WP05                                                                                                  | CUI, INC                                                                                                                                                                                                                                                                                           | PJ-002AH                                                                                                                                                                                                                                                                                           |
| J02                                                                                                                                                                                                                                                                                                | 1                                                                                                                                                                                                                                                                                                  | CONNECTOR, FASTJACK SINGLE, 8 PIN FOR NATIONAL PHY                                                                                                                                                                                                                                                 | Halo Electronics                                                                                                                                                                                                                                                                                   | HFJ11-2450E                                                                                                                                                                                                                                                                                        |
| J03                                                                                                                                                                                                                                                                                                | 1                                                                                                                                                                                                                                                                                                  | TYPE B SINGLE RT ANGLE, BLACK                                                                                                                                                                                                                                                                      | MOL                                                                                                                                                                                                                                                                                                | NA                                                                                                                                                                                                                                                                                                 |
| J04                                                                                                                                                                                                                                                                                                | 1                                                                                                                                                                                                                                                                                                  | TERMINAL STRIP, 10 PIN, DUAL ROW, VERT                                                                                                                                                                                                                                                             | NA                                                                                                                                                                                                                                                                                                 | NA                                                                                                                                                                                                                                                                                                 |
| J05, J06                                                                                                                                                                                                                                                                                           | 2                                                                                                                                                                                                                                                                                                  | L_TERMINAL STRIP, 10 PIN, DUAL ROW, VERT DO NOT POPULATE                                                                                                                                                                                                                                           | DNP                                                                                                                                                                                                                                                                                                | DNP                                                                                                                                                                                                                                                                                                |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION                                                                                                        | QTY                                                                                                                | DESCRIPTION                                                                                                        | SUPPLIER                                                                                                           | PART                                                                                                               |
|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------|
| J07, J12                                                                                                           | 2                                                                                                                  | L_TERMINAL STRIP, 10 PIN, DUAL ROW, VERT                                                                           | Samtec                                                                                                             | TSW-105-07-T-D                                                                                                     |
| J08, J09                                                                                                           | 2                                                                                                                  | NON POPULATED HEADER, 14 PIN, DUAL ROW, VERT                                                                       | Samtec                                                                                                             | NOPOP-HDR-TSW-107- 14-T-D                                                                                          |
| J10                                                                                                                | 1                                                                                                                  | L_CONN, DB9 RA, LONG CASE                                                                                          | AMP                                                                                                                | 747459-1                                                                                                           |
| J11                                                                                                                | 1                                                                                                                  | 100 MIL 2 POS JUMPER                                                                                               | NA                                                                                                                 | NA                                                                                                                 |
| J13                                                                                                                | 1                                                                                                                  | 100 MIL 2*7 POS JUMPER                                                                                             | NA                                                                                                                 | NA                                                                                                                 |
| J14, J16, J17, J18                                                                                                 | 4                                                                                                                  | L_2 PIN HEADER, .100 CENTERS, VERTICAL                                                                             | Samtec                                                                                                             | TSW-102-07-T-S                                                                                                     |
| J15                                                                                                                | 1                                                                                                                  | L_RJ48 8 PIN SINGLE PORT CONNECTOR                                                                                 | MOLEX                                                                                                              | 15-43-8588                                                                                                         |
| See next row (begins with JP01)                                                                                    | 23                                                                                                                 | 100 MIL 3 POS JUMPER                                                                                               | NA                                                                                                                 | NA                                                                                                                 |
| JP01, JP02, JP03, JP04, JP05, JP06, JP07, JP08, JP09, JP10, JP11, JP12, JP13, JP14, JP15, JP16, JP17, JP18, JP19,  | JP01, JP02, JP03, JP04, JP05, JP06, JP07, JP08, JP09, JP10, JP11, JP12, JP13, JP14, JP15, JP16, JP17, JP18, JP19,  | JP01, JP02, JP03, JP04, JP05, JP06, JP07, JP08, JP09, JP10, JP11, JP12, JP13, JP14, JP15, JP16, JP17, JP18, JP19,  | JP01, JP02, JP03, JP04, JP05, JP06, JP07, JP08, JP09, JP10, JP11, JP12, JP13, JP14, JP15, JP16, JP17, JP18, JP19,  | JP01, JP02, JP03, JP04, JP05, JP06, JP07, JP08, JP09, JP10, JP11, JP12, JP13, JP14, JP15, JP16, JP17, JP18, JP19,  |
| R01, R1, R2, R3, R4, R5, R6, R7, R8, R9, R05, R15, R16, R17, R18, RB06, RB16                                       | 17                                                                                                                 | RES 0603 2.2K Ohm 1/16W 5%                                                                                         | Panasonic                                                                                                          | ERJ-3GEYJ222V                                                                                                      |
| R02, RB25, RB26, RB29, RB43 , RB24                                                                                 | 6                                                                                                                  | L_RES 0603 330 Ohm 1/16W 5%                                                                                        | Panasonic                                                                                                          | ERJ-3GEYJ331V                                                                                                      |
| See next row (begins with R03)                                                                                     | 19                                                                                                                 | RES 0603 30 Ohm 1/16W                                                                                              | Panasonic                                                                                                          | ERJ-3GEYJ300V                                                                                                      |
| R03, R04, R06, R07, RB32, RB36, RB37, RB38, RB39, RB40 , R13, RB19, RB21, RB23, RB41, RB42, RB48, RB53, RB54       | R03, R04, R06, R07, RB32, RB36, RB37, RB38, RB39, RB40 , R13, RB19, RB21, RB23, RB41, RB42, RB48, RB53, RB54       | R03, R04, R06, R07, RB32, RB36, RB37, RB38, RB39, RB40 , R13, RB19, RB21, RB23, RB41, RB42, RB48, RB53, RB54       | R03, R04, R06, R07, RB32, RB36, RB37, RB38, RB39, RB40 , R13, RB19, RB21, RB23, RB41, RB42, RB48, RB53, RB54       | R03, R04, R06, R07, RB32, RB36, RB37, RB38, RB39, RB40 , R13, RB19, RB21, RB23, RB41, RB42, RB48, RB53, RB54       |
| R09                                                                                                                | 1                                                                                                                  | RES 0603 1.0M Ohm 1/16W 5%                                                                                         | Panasonic                                                                                                          | ERJ-3GEYJ105V                                                                                                      |
| R10, R11, R12, R14                                                                                                 | 4                                                                                                                  | L_RES 0805 0.0 Ohm 1/10W 5%                                                                                        | Panasonic                                                                                                          | ERJ-6GEY0R00V                                                                                                      |
| RB01, RB02, RB03, RB04, RB05, RB22, RB34                                                                           | 7                                                                                                                  | RES 0603 0.0 Ohm 1/16W 5%                                                                                          | Panasonic                                                                                                          | ERJ-3GEY0R00V                                                                                                      |
| RB07                                                                                                               | 1                                                                                                                  | RES 0603 4.87K Ohm 1/16W 1%                                                                                        | Panasonic                                                                                                          | ERJ-3EKF4871V                                                                                                      |
| RB18, RB20 , RB28, RB30, RB35, RB51                                                                                | 6                                                                                                                  | RES 0603 10K Ohm 1/16W 5%                                                                                          | Panasonic                                                                                                          | ERJ-3GEYJ103V                                                                                                      |
| RB33                                                                                                               | 1                                                                                                                  | RES 0805 10K Ohm 1/10W 1%                                                                                          | Panasonic                                                                                                          | ERJ-6ENF1002V                                                                                                      |
| RB44, RB46                                                                                                         | 2                                                                                                                  | RES 0805 61.9 Ohm 1/10W 1%                                                                                         | Panasonic                                                                                                          | ERJ-6ENF61R9V                                                                                                      |
| RB49, RB50                                                                                                         | 2                                                                                                                  | RES 0603 332 Ohm 1/16W 1%                                                                                          | Panasonic                                                                                                          | ERJ-3EKF3320V                                                                                                      |
| RB52                                                                                                               | 1                                                                                                                  | RES 0805 330 Ohm 1/10W 5%                                                                                          | Panasonic                                                                                                          | ERJ-6GEYJ331V                                                                                                      |
| RP01                                                                                                               | 1                                                                                                                  | 4 PACK RESISTOR 50 OHM 2 PCT                                                                                       | KOA                                                                                                                | CN1J4TTD500G OR CN1J4TTD49R9F                                                                                      |
| RP02, RPB01, RPB03, RPB04, RPB05                                                                                   | 5                                                                                                                  | 4 PACK RESISTOR 2.2K OHM 5% QUAD 0402                                                                              | PANASONI C                                                                                                         | EXB-N8V222JX                                                                                                       |
| RP03, RP04, RP05, RPB06                                                                                            | 4                                                                                                                  | 4 PACK RESISTOR 30 OHM 5% QUAD 0402                                                                                | PANASONI C                                                                                                         | EXB-N8V300JX                                                                                                       |
| See next row (begins with RP06)                                                                                    | 17                                                                                                                 | 4 PACK RESISTOR 10K OHM 5% QUAD 0402                                                                               | PANASONI C                                                                                                         | EXB-N8V103JX                                                                                                       |
| RP06, RP07, RP08, RPB08, RPB09, RPB10, RPB11, RPB12, RPB13, RPB14, RPB16, RPB17, RPB18, RPB19, RPB20, RPB21, RPB22 | RP06, RP07, RP08, RPB08, RPB09, RPB10, RPB11, RPB12, RPB13, RPB14, RPB16, RPB17, RPB18, RPB19, RPB20, RPB21, RPB22 | RP06, RP07, RP08, RPB08, RPB09, RPB10, RPB11, RPB12, RPB13, RPB14, RPB16, RPB17, RPB18, RPB19, RPB20, RPB21, RPB22 | RP06, RP07, RP08, RPB08, RPB09, RPB10, RPB11, RPB12, RPB13, RPB14, RPB16, RPB17, RPB18, RPB19, RPB20, RPB21, RPB22 | RP06, RP07, RP08, RPB08, RPB09, RPB10, RPB11, RPB12, RPB13, RPB14, RPB16, RPB17, RPB18, RPB19, RPB20, RPB21, RPB22 |
| RPB02, RPB07, RPB15                                                                                                | 3                                                                                                                  | 4 PACK RESISTOR 330 OHM 5% QUAD 0402                                                                               | PANASONI C                                                                                                         | EXB-N8V331JX                                                                                                       |
| SW01                                                                                                               | 1                                                                                                                  | L_SWITCH MOM 4PIN SINGLE POLE                                                                                      | Panasonic                                                                                                          | EVQPAE04M                                                                                                          |
| T01                                                                                                                | 1                                                                                                                  | XFMR 16P SMT                                                                                                       | Pulse                                                                                                              | TX1099                                                                                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION                                                    |   QTY | DESCRIPTION                                                          | SUPPLIER                | PART                |
|----------------------------------------------------------------|-------|----------------------------------------------------------------------|-------------------------|---------------------|
| T02                                                            |     1 | XFMR, OCTAL T3/E3, 1 TO 2, SMT 32 PIN                                | Pulse                   | T3049               |
| TP01, TP02, TP03, TP04, TP05, TP06, TPB01, TPB02, TPB03, TPB04 |    10 | TESTPOINT, 1 PLATED HOLE, DO NOT STUFF                               | NA                      | NA                  |
| U01                                                            |     1 | IC, DP83848C PHYTER 10/100 ETHERNET TRANSCEIVER, 48 PIN TQFP         | National Semiconduct or | DP83848C            |
| U02                                                            |     1 | USB UART (USB - 8 bit FIFO), 32 PIN LQFP                             | FTD                     | FT245BM             |
| U03                                                            |     1 | ELITE 10/100 ETHERNET TRANSPORT OVER SERIAL LINK 14X14 CSBGA 169 PIN | Maxim                   | DS33Z11             |
| U04                                                            |     1 | MMC2107 PROCESSOR                                                    | Motorola                | MMC2107             |
| U05                                                            |     1 | IC, FPGA, 1.2V, 20X20 TQFP, 144 PIN                                  | LAT                     | LFEC3E-3T144C       |
| U06, UB13                                                      |     2 | CYPRESS SRAM, LAB STOCK                                              | NA                      | NA                  |
| U07                                                            |     1 | DS3/E3 SCT, 11X11 CSBGA, 100 PIN                                     | Maxim                   | DS3170              |
| U08                                                            |     1 | T1/E1/J1 XCVR 100P QFP 0-70C                                         | Maxim                   | DS2156L             |
| UB01, UB02, UB03, UB04                                         |     4 | IC, LINEAR REG 1.5W, 3.3V or Adj, 1A, 16TSSOP-EP                     | Maxim                   | MAX1793EUE-33       |
| UB05                                                           |     1 | 8-Pin uMax SOIC 1.8V or Adj                                          | Maxim                   | MAX1792EUA18        |
| UB06                                                           |     1 | SPI SERIAL EEPROM 2M 8 PIN SOIC 2.7V to 3.6V                         | Atmel                   | AT25F2048N-10SU-2.7 |
| UB07, UB12 , UB14                                              |     3 | HIGH SPEED BUFFER                                                    | FAIRCHILD               | NC7SZ86             |
| UB08                                                           |     1 | Dual RS-232 transceivers with 3.3V/5V internal capacitors            | Maxim                   | NA                  |
| UB09                                                           |     1 | IC, LDO REGULATOR WITH RESET,1.20V OUTPUT 300 MA, 6 PIN SOT23        | Maxim                   | MAX1963EZT120-T     |
| UB10                                                           |     1 | SYNCHRONOUS DRAM, 1MEGX32X4 BANKS, TSOP 86 PIN                       | Micron                  | MT48LC4M32B2TG-7    |
| UB11                                                           |     1 | MICROPROCESSOR VOLTAGE MONITOR, 3.08V RESET, 4PIN SOT143             | Maxim                   | MAX811TEUS-T        |
| XB01                                                           |     1 | XTAL LOW PROFILE 8.0MHZ                                              | ECL                     | EC1-8.000M          |
| Y01                                                            |     1 | SPI SERIAL EEPROM 16K 8 PIN DIP 2.7V SOCKET ONLY                     | Atmel                   | AT25160A-10PI-2.7   |
| YB01                                                           |     1 | XTAL, LOW PROFILE, 6.00 MHZ                                          | Pletronics              | LP49-26-6.00M       |
| YB02                                                           |     1 | OSCILLATOR, CRYSTAL CLOCK, 3.3V socket                               | SaRonix                 | NA                  |
| YB03                                                           |     1 | OSCILLATOR, CRYSTAL CLOCK, 3.3V - 100.000 MHZ                        | SaRonix                 | NTH089A3-100.0000   |
| YB04                                                           |     1 | OSCILLATOR, CRYSTAL CLOCK, 3.3V - 2.048 MHZ                          | SaRonix                 | NTH039A3-2.0480     |
| YB05                                                           |     1 | OSCILLATOR, CRYSTAL CLOCK, 3.3V - 44.736 MHZ                         | SaRonix                 | NTH089AA3-44.736    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 10. Schematics

The  DS33Z11DK  schematics  are  featured  in  the  following  pages.  As  this  is  a  hierarchal  schematic  some explanation is in order. The main board is composed of three hierarchal blocks: the processor block, the DS33Z11 block, and an Ethernet block inside the DS33Z11 block, which is a nested hierarchy block. The serial card consists of two hierarchy blocks, one for each of the DS2155, and DS3170. These blocks are connected by jumpers to the DS33Z11.

All signals inside a hierarchy block are local, with exception for VCC and ground. In-port and out-port connectors are used to allow signals inside a hierarchy block to become accessible as pins on the hierarchy blocks symbol. From here blocks are wired together as if they were ordinary components. The system diagram is shown again below, with schematic page numbers given for each functional block.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 11. Revision History

|   REVISION DATE | DESCRIPTION                                                                                                                | PAGES CHANGED   |
|-----------------|----------------------------------------------------------------------------------------------------------------------------|-----------------|
|          031405 | Initial DS33Z11DK data sheet release.                                                                                      | -               |
|          042205 | Updated Basic DS33Z11 Initialization section; added step to Quick Setup #1 section; updated Table 2.                       | 9, 11, 12       |
|          110106 | Updated schematics.                                                                                                        | 15-39           |
|          080508 | Reformatted data sheet to conform to newer template style; updated various sections to include the DS33Z11DK01A0 revision. | All             |

15 of 34

1

2

3

4

5

6

7

8

D

## DS33Z11DK02A0 DS33Z11 DESIGN KIT

D

C

C

B

B

CONTENTS:

MICROPROCESSOR

DS3170,

DS2155,

FOR DS33Z11,

BLOCKS

HIERARCHY

PAGE 02:

PHY

AND ETHERNET

DS33Z11

03-07:

PAGE

PHY

FOR ETHERNET

BLOCK

HIERARCHY

6:

PAGE

PHY

ETHERNET

08-09:

PAGE

WAN

T1E1

10-11:

PAGE

WAN

T3E3

12:

PAGE

CONTROL AND POWER SUPPLY

RESET

MICROPROCESSOR,

PAGE 13-19:

A

NOTES:

A

ALL HIERARCHY BLOCK NAMES END IN \_DN. PINS ON HIERARCHY BLOCKS DO NOT HAVE PIN NUMBERS (BUT PINS ON SYMBOLS DO).

SIGNALS INSIDE A HIERARCHY BLOCK ARE LOCAL TO THAT BLOCK THE SIGNAL \_TEMP\_ IN BLOCK\_A\_DN IS DIFFERENT THAN \_TEMP\_ IN BLOCK\_B\_DN.

DATE:

DS33Z11DK02A0

TITLE:

PAGE NUMBERS (BOTTOM RIGHT) ARE LISTED BY BOTH THE PAGE NUMBER IN THE BLOCK, AND BY THE PAGE NUMBER WITHIN THE ENTIRE DESIGN

02/06/2007

1/2(BLOCK)

PAGE:

1/19(TOTAL)

SCULLY

STEVE

ENGINEER:

CROSS REFERENCE INDICATORS ARE REFERENCEING A GIVEN NET TO OTHER PAGES IN THE DESIGN (PAGE NUMBER GIVEN IS ACCORDING TO ENTIRE DESIGN, NOT THE CURRENT BLOCK)

1

2

3

4

5

6

7

8

2008

10:05:53

20

Jun

Fri

PRINTED

\_ztopdn\_.

NAME:

BLOCK

1

2

3

4

5

6

7

8

ADDR&lt;9..0&gt;

ADDR&lt;9..0&gt;

DAT&lt;7..0&gt;

DAT&lt;7..0&gt;

I61

MICROPROCESSOR

BLOCK

HIERARCHICAL

D

D

CS

CS\_Z11

13-19

PAGES

BLOCK

HIERARCHICAL

\_z11andlan\_dn

RD

RD

SPI\_MOSI

INT2

INT\_Z11

03-07

PAGES

WR

WR

SPI\_CS

INT3

WAN\_INT

RESET\_SYS

RESET\_SYS

SPI\_SCK

INT4

INT4

INT

INT\_Z11

SPI\_MISO

INT5

INT5

CS\_X1

CS\_Z11

CS\_X2

CS\_TE1

RDEN

TDEN

TSER

RSER

TCLKI

RCLKI

CS\_X3

CS\_X4

CS\_TE3

CS\_X4

V3\_3

RPB12

1

8

TP06

RB36

CS\_X5

CS\_X5

C

2

7

1

30

4

5

TP05

RB37

Z11\_RDEN

Z11\_TDEN

Z11\_TSER

Z11\_RSER

Z11\_TCLKI

Z11\_RCLKI

RD\_DUT

D\_DUT&lt;7..0&gt;

WR\_DUT

A\_DUT\_&lt;12..0&gt;

RD

WR

C

DAT&lt;7..0&gt;

ADDR&lt;12..0&gt;

3

10K

6

1

30

RESET\_SYS

RESET\_SYS

30

30

30

RB38

RB39

RB40

\_motprocrescard\_dn JP21

2

TE1\_RSER

1

3

TE3\_RSER

JP20

2

TE1\_TSER

1

3

TE3\_TSER

2

B

TE1\_TGAPCLK

1

3

TE3\_TGAPCLK

B

JP22

2

NC7SZ86\_U

BUFFER

TE1\_RGAPCLK

1

3

4

UB12

1

TE3\_RGAPCLK

JP23

RSER

TSER

TGAPCLK

RGAPCLK

JTCLK

JTMS

JTDI

TE3\_RGCLK

TE3\_TGCLK

TE3\_TSER

TE3\_RSER

JTCLK

JTMS

JTDO

JTRST

JTDO

JTDI

JTRST

ADDR&lt;7..0&gt;

ADDR&lt;7..0&gt;

DAT&lt;7..0&gt;

DAT&lt;7..0&gt;

ADDR&lt;8..0&gt;

DAT&lt;7..0&gt;

ADDR&lt;8..0&gt;

DAT&lt;7..0&gt;

A

BLOCK

HIERARCHICAL

RD

RD

RD

RD

A

\_TE1WAN\_DN

CS

CS\_TE1

BLOCK

HIERARCHICAL

10-11

PAGES

WR

RESET\_AH

4

INVERTER

NC7SZ86\_U

UB14

WR

RESET\_SYS

12-12

PAGES

\_TE3WAN\_DN

CS

CS\_TE3

WR

WR

RESET\_SYS

RESET\_SYS

T1\_INT

WAN\_INT

T3\_INT

WAN\_INT

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

2/2(BLOCK)

PAGE:

2/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

\_ztopdn\_.

NAME:

BLOCK

1

2

3

4

5

6

7

8

DS33Z11

D

IO

IN

OUT

IN

IN

IN

D

TDEN

RDEN

30

TSER

RB32

RSER

TCLKI

RCLKI

V3\_3

2.7V

Y01

RED

2

1

DS09

RB26

330

TP01

LED+TP

C7

F5

H2

F2

H1

F1

G2

E6

D4

E5

E4

F7

JTRST

JTCLK

JTDO

JTDI

JTMS

10K

RB28

10K

RB30

8

3

VCC

SI

5

ZMOSI

WP*

SO

2

7

HOLD*

SCK

6

ZMISO

ZSPISCK

4

GND

CS*

1

ZSPICS

ZADDR0

A1

A&lt;0&gt;

C

ZADDR1

B1

A&lt;1&gt;

AT25160A\_U

3

ZADDR2

A2

A&lt;2&gt;

QOVF

TDEN/TBSYNC

RDEN/RBSYNC

TSER

IO

RSER

TCLKI

RCLKI

JTRST

JTCLK

JTDO

JTDI

JTMS

REF\_CLK

D13

TP02

REF\_CLK

LINE

JTAG

REF\_CLKO

E13

REF\_CLKO

C

RX\_CRS/CRS\_DV

C8

RX\_CRS

B2

A&lt;3&gt;

RX\_ERR

B12

RX\_ERR

4

C2

A&lt;4&gt;

RX\_CLK

A10

RX\_CLK

5

A3

A&lt;5&gt;

6

B3

V3\_3

8

RPB03

1

7

C3

A&lt;6&gt;

A&lt;7&gt;

U03

PORTS

(INPUT)

RXD&lt;0&gt;

B11

RXD0

RXD&lt;1&gt;

RXD&lt;2&gt;

RXD&lt;3&gt;

C11

RXD1

D11

RXD2

7

2

6

2.2K

3

ADDR&lt;9..0&gt;

8

A4

A&lt;8&gt;

IN

9

8

1

B4

A&lt;9&gt;

DS33Z11\_U3

RXDV

A11

RXD3

D10

RXDV

IN

5

4

0

RPB07

7

2

ZMOSI

A5

B

JP16

2

ZADDR0

1

2

6

330

3

ZMISO

A6

5

4

ZSPISCK

A7

D&lt;0&gt;/MOSI

1

3

B5

D&lt;3&gt;

D&lt;2&gt;/SPICK

D&lt;1&gt;/MISO

MII/RMII

(OUTPUT)

TX\_CLK

A8

TX\_CLK

TXD&lt;0&gt;

TXD&lt;1&gt;

TXD&lt;2&gt;

TXD&lt;3&gt;

B9

8

RP05

1

TXD0

C9

7

2

TXD1

D9

6

30

3

TXD2

B

E9

5

4

TXD3

0

3

ADDR&lt;9..0&gt;

1

JP17

2

ZADDR1

5

B7

D&lt;5&gt;

COL\_DET

B13

COL\_DET

7

2

3

4

B6

D&lt;4&gt;

TX\_EN

E10

8

RPB06

1

TX\_EN

6

C5

D&lt;6&gt;

MASTER PORT

PORT/SPI

MICRO

MDC

C12

6

30

3

MDC

1

7

C6

D&lt;7&gt;

CKPHA

SCAN/MODE

SCAN/EN

AFCS

H10S

FULLDS

RMIIMIIS

DCEDTES

MODEC&lt;1&gt;

MODEC&lt;0&gt;

HWMODE

RST*

WR*/RW*

RD*/DS*

SPI\_CS*

CS*

INT*

MDIO

C13

5

4

MDIO

2

3

IO

J07

DAT&lt;7..0&gt;

JP18

2

ZADDR2

1

JTMS

2

TMS

1

1

JTRST

F6

E8

E7

C10

B10

A9

C4

A13

D7

D6

D5

D8

E2

E1

B8

C1

F3

A

JTDI

6

TDI

5

JTCLK

4

TCK

3

3

10

VCC

GND

9

5

V3\_3

JTDO

8

TDO

7

7

CKPHA

SCANMOD

SCANEN

AFCS

H10S

FULLDS

RMIIMIIS

DCEDTES

MODEC1

MODEC0

HWMODE

RESET\_SYS

WR

RD

ZSPICS

CS

INT

A

IN

IN

IN

OUT

BLOCK

HIERARCHY

DS33Z11

OF

CONN\_10P

BEGINNING

DS10

DATE:

DS33Z11DK02A0

TITLE:

NC7SZ86\_U

BUFFER

RED

02/06/2007

INT

1

UB07

4

2

1

RB29

V3\_3

1/5(BLOCK)

PAGE:

3/19(TOTAL)

SCULLY

STEVE

ENGINEER:

BUS MODE

IMPLEMENTS

MODULE TO PROC

FROM Z

OUTPUTS

ARE

AUTOMATICALY

HW MODE PINS

PROC (FPGA)

330

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_z11andlan\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

V3\_3

V1\_8ZCHIP

D

D

L12

M13

D12

E12

E11

F10

L3

K4

J4

F4

E3

D2

D3

H10

H9

H8

H7

H6

H5

G10

G9

G8

G7

G6

G5

0

M1

1

L2

SDATA&lt;0&gt;

SDATA&lt;1&gt;

12VDD1.8

11VDD1.8

10VDD1.8

9VDD1.8

8VDD1.8

7VDD1.8

6VDD1.8

5VDD1.8

4VDD1.8

3VDD1.8

2VDD1.8

1VDD1.8

0VDD1.8

11VDD3.3

10VDD3.3

9VDD3.3

8VDD3.3

7VDD3.3

6VDD3.3

5VDD3.3

4VDD3.3

3VDD3.3

2VDD3.3

1VDD3.3

0VDD3.3

SBA&lt;0&gt;

M6

SD\_BA0

2

N1

SDATA&lt;2&gt;

SBA&lt;1&gt;

N7

SD\_BA1

3

M2

SDATA&lt;3&gt;

4

N2

SDATA&lt;4&gt;

SDA&lt;0&gt;

N9

0

5

N4

SDATA&lt;5&gt;

SDA&lt;1&gt;

N10

1

6

N3

SDATA&lt;6&gt;

SDA&lt;2&gt;

L11

2

7

C

8

L4

SDATA&lt;7&gt;

SDA&lt;3&gt;

K11

3

J3

SDATA&lt;8&gt;

SDA&lt;4&gt;

L7

4

C

9

M3

SDATA&lt;9&gt;

I228

NA

SDA&lt;5&gt;

L8

5

SD\_A&lt;11..0&gt;

11

J1

10

H3

SDATA&lt;10&gt;

DS33Z11

SDA&lt;6&gt;

L9

6

SDATA&lt;11&gt;

U03

SDA&lt;7&gt;

L5

7

12

J2

SDATA&lt;12&gt;

13

K1

SDATA&lt;13&gt;

DS33Z11\_U3

SDA&lt;8&gt;

SDA&lt;9&gt;

M5

8

M7

9

14

K2

15

L1

SDATA&lt;14&gt;

16

M12

SDATA&lt;15&gt;

SDRAM CONTROLLER SYSTEM

SDATA&lt;16&gt;

PWR/GND

SDA&lt;11&gt;

N8

11

SDMASK&lt;0&gt;

N6

SD\_DQM0

SDA&lt;10&gt;

M8

10

17

H11

SDATA&lt;17&gt;

SDMASK&lt;1&gt;

G4

SD\_DQM1

18

M11

SDATA&lt;18&gt;

SDMASK&lt;2&gt;

M10

SD\_DQM2

B

19

N13

SDATA&lt;19&gt;

SDMASK&lt;3&gt;

M9

SD\_DQM3

B

20

N11

SDATA&lt;20&gt;

21

L13

SDATA&lt;21&gt;

SDCS*

L6

SD\_CS

22

N12

SDATA&lt;22&gt;

SDCLKO

N5

SD\_CLKO

23

K13

SDATA&lt;23&gt;

SYSCLKI

G13

SD\_CLKI

24

J13

SDATA&lt;24&gt;

SRAS*

K6

SD\_RAS

25

J12

SDATA&lt;25&gt;

SCAS*

H4

SD\_CAS

26

H13

SDATA&lt;26&gt;

SDATA&lt;27&gt;

SDATA&lt;28&gt;

SDATA&lt;29&gt;

SDATA&lt;30&gt;

SDATA&lt;31&gt;

VSS18

VSS17

VSS16

VSS15

VSS14

VSS13

VSS12

VSS11

VSS10

VSS9

VSS8

VSS7

VSS6

VSS5

VSS4

VSS3

VSS2

VSS1

VSS0

NC3

NC2

NC1

SWE*

M4

SD\_WE

NC\_PINF9

H12

G12

F11

G11

L10

A12

F13

F12

K12

J10

K9

J9

K8

J8

K7

J7

J11

J6

K5

J5

F8

K10

K3

D1

G3

G1

F9

TP04

A

SD\_DQ&lt;31..0&gt;

Z41RSYNC

Z41TSYNC

TPB02

TPB01

1

1

A

1

27

28

29

30

31

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

2/5(BLOCK)

PAGE:

4/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_z11andlan\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

D

D

V3\_3

SD\_DQ&lt;31..0&gt;

0

1

3

9

35

41

49

55

75

81

1

15

29

43

2

4

SYSCLKO

FROM Z11

V3\_3

SD\_CLKO

68

CLK

VDDQ1

VDDQ2

VDDQ3

VDDQ4

VDDQ5

VDDQ6

VDDQ7

VDDQ8

VDD1

VDD2

VDD3

VDD4

DQ&lt;0&gt;

DQ&lt;1&gt;

DQ&lt;2&gt;

5

2

DQ&lt;3&gt;

7

3

67

CKE

DQ&lt;4&gt;

8

4

SD\_CS

20

CS*

DQ&lt;5&gt;

10

5

SD\_WE

17

WE*

DQ&lt;6&gt;

11

6

C

SD\_CAS

18

CAS*

DQ&lt;7&gt;

13

7

C

SD\_RAS

19

RAS*

DQ&lt;8&gt;

74

8

SD\_DQM0

16

DQM&lt;0&gt;

DQ&lt;9&gt;

76

9

SD\_DQM1

71

DQM&lt;1&gt;

DQ&lt;10&gt;

77

10

SD\_DQM2

28

DQM&lt;2&gt;

DQ&lt;11&gt;

79

11

SD\_DQM3

59

DQM&lt;3&gt;

DQ&lt;12&gt;

80

12

SD\_BA0

22

BA&lt;0&gt;

UB10

DQ&lt;13&gt;

DQ&lt;14&gt;

82

13

83

14

SD\_BA1

23

BA&lt;1&gt;

MT48LC4M32B2\_TSOP\_U

DQ&lt;15&gt;

85

15

0

25

A&lt;0&gt;

SYNCHRONOUS DRAM

DQ&lt;16&gt;

DQ&lt;17&gt;

31

16

33

17

1

B

2

26

A&lt;1&gt;

BANKS

4

X

32

MEG X

1

-

MT48LC4M32B2

DQ&lt;18&gt;

34

18

27

A&lt;2&gt;

DQ&lt;19&gt;

36

19

B

3

60

A&lt;3&gt;

DQ&lt;20&gt;

37

20

4

61

A&lt;4&gt;

DQ&lt;21&gt;

39

21

5

62

A&lt;5&gt;

DQ&lt;22&gt;

40

22

6

63

A&lt;6&gt;

DQ&lt;23&gt;

42

23

7

64

A&lt;7&gt;

DQ&lt;24&gt;

45

24

8

65

A&lt;8&gt;

DQ&lt;25&gt;

47

25

9

66

A&lt;9&gt;

DQ&lt;26&gt;

48

26

SD\_A&lt;11..0&gt;

10

24

A&lt;10&gt;

DQ&lt;27&gt;

50

27

11

21

A&lt;11&gt;

DQ&lt;28&gt;

51

28

A

VSSQ1

VSSQ2

VSSQ3

VSSQ4

VSSQ5

VSSQ6

VSSQ7

VSSQ8

VSS1

VSS2

VSS3

VSS4

DQ&lt;31&gt;

DQ&lt;30&gt;

DQ&lt;29&gt;

53

29

A

6

12

32

38

46

52

78

84

44

58

72

86

56

54

31

30

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

3/5(BLOCK)

PAGE:

5/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_z11andlan\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

D

D

BLOCK

HIERARCHICAL

08-09

PAGES

RXD0

RXD\_0\_PHYAD1

TXD0

TXD0

RXD1

RXD\_1\_PHYAD2

TXD1

TXD1

RXD2

RXD\_2\_PHYAD3

TXD2

TXD2

RXD3

RXD\_3\_PHYAD4

TXD\_3\_SNI\_MODE

TXD3

\_DP83848\_WAN\_DN

RX\_CLK

RX\_CLK

TX\_CLK

TX\_CLK

C

RX\_CRS

RX\_ERR

CRS\_DV\_LED\_CFG

TX\_EN

TX\_EN

C

RX\_ER\_MDIX\_EN

RXDV

RX\_DV\_MII\_MODE

COL\_DET

COL\_PHYAD0

PHY\_CLK25M

MDC

MDIO

RESET\_SYS

B

MII\_CLK

MDC

MDIO

IN

100.000MHZ\_3.3V

RESET\_SYS

B

MHZ

YB02

SOCKET

25.0

V3\_3

OSC

YB03

1

1

VCC

8

30

R06

8

VCC

1

1

V3\_3

OSC

4

GND

OUT

5

R08

0.0

REF\_CLKO

SD\_CLKI

5

OUT

GND

4

30

R07

REF\_CLK

A

A

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

4/5(BLOCK)

PAGE:

6/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_z11andlan\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

V3\_3

V3\_3

3

3

JP08

2

R7

2.2K

MODEC0

HIGH

JP06

2

R1

HWMODE

2.2K

LOW

D

1

1

D

3

3

JP11

2

R8

2.2K

DCEDTES

LOW

JP07

2

R2

MODEC1

2.2K

LOW

1

1

3

3

JP15

2

R9

2.2K

FULLDS

HIGH

JP10

2

R3

RMIIMIIS

2.2K

LOW

1

1

C

C

3

3

JP13

2

R15

2.2K

AFCS

LOW

JP19

2

R4

H10S

2.2K

HIGH

1

1

3

3

JP04

2

R16

2.2K

SCANMOD

LOW

JP05

2

R5

SCANEN

2.2K

LOW

1

1

UB05

B

V1\_8ZCHIP

3

2

2

8

MAX1792

V3\_3

OUT

IN

1

B

JP09

2

R6

2.2K

CKPHA

LOW

.01UF

CB18

1UF

C12

4.7UF

CB15

10UF

C14

7

OUT

IN

2

6

SET

RST

3

1

5

GND

SHDN

4

1

1

1

10UF

C16

4.7UF

CB21

1UF

C13

.01UF

CB17

2

IN:

RESULTS

Z11

FOR

SWITCHES

BELOW SIGNAL)

MODE (SHOWN

CONFIG

CONTROL

AUTO-FLOW

MBIT,

100

DUPLEX,

FULL

MII,

MOTOROLA NON-MUX,

A

A

V1\_8ZCHIP

BLOCK

HIERARCHY

DS33Z11

END OF

.01UF

C29

.01UF

C27

.01UF

CB46

.01UF

CB40

.1UF

CB60

.1UF

CB39

.1UF

CB63

4.7UF

C23

4.7UF

CB64

4.7UF

CB52

4.7UF

C31

4.7UF

CB36

4.7UF

C30

4.7UF

CB49

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

5/5(BLOCK)

PAGE:

7/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_z11andlan\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

D

IN

IO

U01

RESET\_SYS

MDIO

IN

MDC

LED\_ACT\_COL\_AN\_EN

LED\_SPEED\_AN1

LED\_LINK\_AN0

IN

PHY\_CLK25M

V3\_3

AN\_V3\_3

D

29

30

31

26

27

28

25

33

34

48

32

22

PIN

TO

CLOSE

PLACED

BE

MUST

RESISTOR

PIN

NEAR

CAP

0.1UF

REQUIRES

PIN

PFBIN

RBIAS

EACH

RESET\_N

MDIO

MDC

LED\_ACT/COL/AN\_EN

LED\_SPEED/AN1

LED\_LINK/AN0

25MHz\_OUT

X2

X1

IOVDD33

IOVDD33

AVDD33

PFBOUT

RX\_CLK

38

R04

RX\_CLK

C

CB14

1

0.1UF

CB23

1

0.1UF

23

18

PFBOUT

37

PFBIN1

PFBIN2

RX\_DV/MII\_MODE

39

8

RP04

30

1

RX\_DV\_MII\_MODE

C

2

2

RB07

RBIAS

24

RBIAS

4.87K

RB06

21

AN\_V3\_3

2.2K

RB16

20

RESERVED

RX\_ER/MDIX\_EN

41

6

30

3

RX\_ER\_MDIX\_EN

RESERVED

COL/PHYAD0

42

5

4

COL\_PHYAD0

CRS/CRS\_DV/LED\_CFG

40

7

2

CRS\_DV\_LED\_CFG

2.2K

RXD\_0/PHYAD1

43

8

RP03

1

RXD\_0\_PHYAD1

TD\_P

17

+

TD

DP83848

RXD\_1/PHYAD2

44

7

2

RXD\_1\_PHYAD2

V3\_3

TD\_N

16

-

TD

RXD\_2/PHYAD3

45

6

30

3

RXD\_2\_PHYAD3

CB33

8

RP01

1

RXD\_3/PHYAD4

46

5

4

RXD\_3\_PHYAD4

PWR\_DWN

R01

V3\_3

.1UF

7

2

PWR\_DOWN/INT

7

CB32

6

50

3

TX\_CLK

1

R03

2.2K

TX\_CLK

.1UF

5

4

TX\_EN

2

30

TX\_EN

B

RD\_P

14

+

RD

TXD\_0

3

TXD0

B

RD\_N

13

-

RD

TXD\_1

4

TXD1

TXD\_2

5

TXD2

TXD\_3/SNI\_MODE

6

TXD\_3\_SNI\_MODE

FOR TD+-/RD+- PHY

TO

CLOSE

PLACED

RESISTORS

BE

SHOULD

TDO

TDI

TRST#

TMS

TCK

AGND

AGND

DGND

IOGND

IOGND

9

12

5

11

6

10

7

8

8

15

36

19

35

47

AN\_V3\_3

RB05

V3\_3

2.2K

RP02

1

0.0

4

3

2

1

A

0.1UF

CB16

2

.01UF

CB11

4.7UF

CB09

4.7UF

CB20

4.7UF

CB10

4.7UF

CB26

.01UF

CB05

.01UF

C17

0.1UF

1

CB07

0.1UF

1

0.1UF

1

C19

CB04

0.1UF

1

CB06

A

2

2

2

2

BLOCK

HIERARCHY

PHY

OF

BEGINNING

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

1/2(BLOCK)

PAGE:

8/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

2008

10:04:01

20

Jun

Fri

PRINTED

\_z11andlan\_dn\

BLOCK:

PARENT

\_dp83848\_wan\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

J05

J06

IN

2

TXD\_3\_SNI\_MODE

2

1

1

TX\_CLK

OUT

OUT

RX\_DV\_MII\_MODE

2

2

1

1

RXD\_0\_PHYAD1

OUT

CRS\_DV\_LED\_CFG

4

4

3

3

RXD\_1\_PHYAD2

OUT

D

OUT

V3\_3

D

V3\_3

IN

TXD2

4

4

3

3

6

6

5

5

OUT

COL\_PHYAD0

6

6

5

5

IN

TXD1

8

8

7

7

OUT

RX\_ER\_MDIX\_EN

8

8

7

7

RXD\_2\_PHYAD3

OUT

IN

TXD0

10

10

9

9

TX\_EN

IN

OUT

RX\_CLK

10

10

9

9

RXD\_3\_PHYAD4

OUT

CONN\_10P

ALLOW

TO

PORT

SHOULD

PLACEMENT

SAME FOR EACH

THE

PLACED

DESIRED.

CARD IF

PHY

MUST BE

ABOVE)

EXTERNAL

NOTE:

AN

OF

(SHOWN

TESTPOINTS

PLACEMENT

ALLOW USE

BETWEEN CONNECTORS.

0.2

CONN\_10P

SYM\_1

V3\_3

J02

9

SH1

C

P1

1

RD\_P

C

J1

P4

4

P2

2

RD\_N

V3\_3

J2

3

P3

3

TD\_P

JP03

2

AN\_EN

8

RPB01

1

J3

P5

5

2.2K

P6

6

TD\_N

1

DS06

2

DS05

1

1

J4,5

.1UF

CB13

.1UF

CB08

1

RED

RED

V3\_3

2

J6

3

FOR RMII

HIGH

LOW FOR MII,

J7,8

P8

8

B

10

SH2

1

JP14

2

8

RPB05

1

RX\_DV\_MII\_MODE

B

V3\_3

1

7

2

TXD\_3\_SNI\_MODE

6

2.2K

3

CONN\_HFJ11\_2450\_U

3

TO XFRM

CLOSE

TAP

PLACED

BE

FOR XFRM CENTER

CAPS

SHOULD

JP02

2

AN1

7

RPB01

8

RPB02

1

LED\_ACT\_COL\_AN\_EN

5

4

RX\_ER\_MDIX\_EN

2

7

2

LED\_SPEED\_AN1

V3\_3

1

2.2K

6

330

3

LED\_LINK\_AN0

3

1

DS03

DS04

2

1

1

AMBER

5

4

JP12

2

2

1

V3\_3

AMBER

I99

A0402\_5PCT

EXB-N8V222JX

3

A

JP01

2

AN0

6

RPB01

1

8

RPB04

1

RXD\_0\_PHYAD1

3

7

2

RXD\_1\_PHYAD2

A

2.2K

1

1

DS02

6

2.2K

3

RXD\_2\_PHYAD3

5

4

RXD\_3\_PHYAD4

2

1

1

GREEN

GREEN

2

V3\_3

5

RPB01

4

COL\_PHYAD0

2.2K

BLOCK

HIERARCHY

PHY

END OF

DATE:

DS33Z11DK02A0

TITLE:

1

DS01

(0X01)

ADDRESS

MDIO

PHY

02/06/2007

2/2(BLOCK)

PAGE:

9/19(TOTAL)

SCULLY

STEVE

ENGINEER:

2.2K)

OF

INSTEAD

RESISTOR

STRAP

2.2K+330

A

HAVE

PINS

(SOME

DATASHEET

DP83484

DO NOT FOLLOW THE

HERE

OPTIONS

STRAP

1

2

3

4

5

6

7

8

\_z11andlan\_dn\

BLOCK:

PARENT

\_dp83848\_wan\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

D

WAN BLOCK

SINGLE

TE1

D

J14

S

1

G

2

C

C

C44

R10

8

T01

1:0.8

9

1

2

2

1

TRING55

J15

H

8

7

6

10

1UF

0.0

7

G

R11

F

6

5

1:1

11

2

1

TTIP55

5

E

0.0

D

4

3

C

B

B

2

R14

B

1

A

1

1:1

16

2

1

RTIP55

CONN\_RJ48

2

3

15

0.0

4

1:0.8

14

2

R12

1

RRING55

T01

0.0

RB44

61.9

RB46

61.9

1

1

2

2

J16

A

S

1

1

A

G

2

.1UF

CB95

2

BLOCK

HIERARCHY

T1E1

OF

BEGINNING

DATE:

DS33Z11DK02A0

TITLE:

30

R13

02/06/2007

1/2(BLOCK)

PAGE:

10/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

/

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_te1wan\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

V3\_3

8

1

TSSYNC55

7

I94

2

TLINK55

6

10K

3

TSIG55

D

5

4

LIUC55

IO

TGAPCLK

TSIG55

TSSYNC55

TDATA55

TSYSCLK55

TGAPCLK

TSYNC55

TLINK55

TCLKI

RSYSCLK55

RGAPCLK

RSYNC55

30

TCLKI

RB48

V3\_3

D

RPB19

8

1

BTS55

IN

RGAPCLK

49

48

52

50

34

51

53

37

35

46

97

85

79

100

92

98

78

82

83

81

61

44

31

18

U08

7

I95

2

RCLKI55

6

10K

3

RSYNC55

33

TCHBLK

TESO

TSIG

TSSYNC

TDATA

TLCLK

TSYSCLK

TCHCLK

TSYNC

TLINK

TCLK

RFSYNC

RDATA

RLCLK

RSYSCLK

RCHCLK

RSYNC

RLINK

RCLK

DVDD4

DVDD3

DVDD2

DVDD1

TVDD

RVDD

5

4

TSYNC55

RED

RB52

RCHBLK

RPB21

RTIP

16

RTIP55

RLOS\_LOTC55

99

RLOS/LOTC

RRING

17

RRING55

DS13

330

OUT

T1\_INT

25

INT*

RPOSI

86

RPOSI55

IN

CS

75

CS*

DS2156

RNEGI

RCLKI

87

RNEGI55

88

RCLKI55

8

1

ESIBRD55

IO

DAT&lt;7..0&gt;

7

65

C

7

I96

2

RPOSI55

6

64

D/AD&lt;7&gt;

D/AD&lt;6&gt;

TQFP

RPOSO

91

RNEGO

90

C

6

10K

3

RNEGI55

5

63

D/AD&lt;5&gt;

RCLKO

89

5

4

TPOSI55

4

62

D/AD&lt;4&gt;

RPB20

3

59

D/AD&lt;3&gt;

8XCLK

13

8

1

TNEGI55

2

58

D/AD&lt;2&gt;

RCL

6

7

I97

2

TCLKI55

1

57

D/AD&lt;1&gt;

LIUC

12

LIUC55

6

10K

3

TSYSCLK55

0

56

D/AD&lt;0&gt;

5

4

MUX55

ADDR&lt;7..0&gt;

TTIP

29

TTIP55

IN

7

73

ALE/AS/A&lt;7&gt;

TRING

32

TRING55

8

RPB18

1

6

7

I98

2

RSYSCLK55

5

72

A&lt;6&gt;

TPOSI

38

TPOSI55

71

A&lt;5&gt;

TNEGI

39

TNEGI55

B

6

10K

3

4

70

A&lt;4&gt;

TCLKI

40

TCLKI55

B

5

4

3

RPB22

2

69

A&lt;3&gt;

TPOSO

43

68

A&lt;2&gt;

TNEGO

42

1

67

A&lt;1&gt;

TCLKO

41

V3\_3

8

1

JTRST

0

66

A&lt;0&gt;

7

I93

2

6

10K

3

JTCLK

JTDO

5

4

JTMS

BTS55

MUX55

11

BTS

JTRST

5

JTRST

IO

55

MUX

JTDI

7

JTDI

IN

JTDI

IN

RD

74

RD/DS*

JTCLK

4

JTCLK

IN

JTMS

JTMS

IN

RP08

IN

WR

77

WR/RW*

JTDO

10

JTDO

IO

28

NC3

A

NC2

NC1

TSER

ESIBRD

XTALD

RSIGF

TSTRST

BPCLK

RSIG

RMSYNC

MCLK

RSER

UOP3

UOP2

UOP1

UOP0

ESIBS&lt;1&gt;

ESIBS&lt;0&gt;

DVSS4

DVSS3

DVSS2

DVSS1

RVSS3

RVSS2

RVSS1

TVSS

A

27

26

47

TSER

ESIBRD55

76

22

93

14

3

94

96

21

95

23

15

9

8

54

36

84

80

60

45

24

20

19

30

BLOCK

HIERARCHY

T1E1

END OF

MCLK55

RSER

RB51

10K

YB04

V3\_3

OSC

DATE:

DS33Z11DK02A0

TITLE:

IN

OUT

8

2.048MHZ\_3.3V

VCC

1

02/06/2007

5

OUT

GND

4

2/2(BLOCK)

PAGE:

11/19(TOTAL)

SCULLY

STEVE

ENGINEER:

IN

RESET\_AH

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_te1wan\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

WAN BLOCK

TE3

DS33Z11

V3\_3

AND CONNECTORS)

TRANSFORMERS

SCT,

(DS3170

IN

OUT

IN

IN

IN

44.736MHZ\_3.3V

V3\_3

D

T3MCLK

JTRST

JTDO

JTDI

JTMS

JTCLK

IN

WR

IN

IN

RD

CS

V3\_3

OSC

YB05

D

D6

G2

H1

G3

E3

F4

C5

A7

D10

K10

K4

D1

B1

E5

D5

C4

B3

A5

C2

B2

A1

G4

8

VCC

1

1

SMT0603\_5PCT

NC

CLKO

REFCLK

AVDDC

AVDDJ

AVDDT

AVDDR

VDD6

VDD5

VDD4

VDD3

VDD2

VDD1

JTRST*

JTDO

JTDI

JTMS

JTCLK

WR*/RW

RD*/DS*

CS*

ALE

T3MCLK

5

OUT

GND

4

OHM 2P

75

ERJ-3GEYJ300V

TE3\_TCLKI

RB41

B7

TLCLK

J17

S

1

7

T02

26

TE3\_TXP

D9

TNEG

A&lt;1&gt;

J2

1

30

E9

TPOS/TDAT

A&lt;0&gt;/BSWAP

K5

0

G

TREF1

332

RB49

E1

E2

TXP1

A&lt;2&gt;

K2

2

TXP2

A&lt;3&gt;

H3

3

2

8

25

TE3\_TXN

F1

TXN1

A&lt;4&gt;

J3

4

C

30

RB54

2:1

ERJ-3GEYJ300V

SMT0603\_5PCT

F2

TXN2

A&lt;5&gt;

K3

TE3\_TCLKI

RB42

A8

RLCLK

A&lt;6&gt;

H4

5

6

ADDR&lt;8..0&gt;

C

IN

OHM 2P

75

30

F10

RPOS/RDAT

A&lt;7&gt;

J4

7

J18

S

1

5

T02

28

TE3\_RXP

A4

RXP

F9

RNEG/RLCV

A&lt;8&gt;

H5

8

G

RREF1

332

RB50

A3

RXN

U07

D&lt;0&gt;/SPI\_MISO

J5

0

DAT&lt;7..0&gt;

6

27

TE3\_RXN

C7

E10

TOH

DS3170\_BGA\_U

D&lt;1&gt;/SPI\_MOSI

D&lt;2&gt;/SPI\_SCLK

K9

1

IO

J6

2

TOHEN

D7

TOHCLK

D&lt;3&gt;

H6

3

G9

TOHSOF

D&lt;4&gt;

K7

4

B6

ROH

D&lt;5&gt;/SPI\_SWAP

J7

5

B

C9

ROHCLK

D&lt;6&gt;/SPI\_CPHA

H7

6

F8

ROHSOF

HIZ,TEST,ALE

D&lt;7&gt;/SPI\_CPOL

K8

7

B

D&lt;8&gt;

J8

8

RPB17

1

2

30

RB53

2:1

C10

TCLKI

NO TPDENO?

D&lt;9&gt;

G6

7

2

A9

TSOFI

D&lt;10&gt;

J9

6

10K

3

IN

TE3\_TSER

B10

TSER

D&lt;11&gt;

J10

5

4

IN

TE3\_TGCLK

B9

TCLKO/TGCLK

D&lt;12&gt;

H8

8

1

TPB03

TE3\_TSOFO\_TDEN

C8

TSOFO/TDEN

D&lt;13&gt;

H9

7

2

1

OUT

TE3\_RSER

C6

RSER

D&lt;14&gt;

H10

6

10K

3

TPB04

IN

TE3\_RGCLK

TE3\_RSOFO\_RDEN

A6

RCLKO/RGCLK

D&lt;15&gt;

G8

5

4

B8

RSOFO/RDEN

RPB16

1

A

RST*

HIZ*

TEST*

GPIO&lt;8&gt;

GPIO&lt;7&gt;

GPIO&lt;6&gt;

GPIO&lt;5&gt;

GPIO&lt;4&gt;

GPIO&lt;3&gt;

GPIO&lt;2&gt;

GPIO&lt;1&gt;

AVSSC

AVSSJ

AVSST

AVSSR

VSS6

VSS5

VSS4

VSS3

VSS2

VSS1

SPI

WIDTH

MODE

INT*

RDY*

A

E6

B4

F5

D4

D3

G5

F6

G7

F7

E7

E8

G1

D2

E4

B5

DS12

A2

A10

G10

K6

K1

C1

C3

H2

F3

D8

J1

RED

2

WIDTH

MODE

T3\_INT

V3\_3

8

1

JTRST

RB43

1

BLOCK

HIERARCHY

T3E3

OF

BEGINNING/END

DATE:

DS33Z11DK02A0

TITLE:

RESET\_SYS

V3\_3

330

R18

2.2K

OUT

7

6

I85

2

JTCLK

10K

3

JTMS

V3\_3

R17

JTDO

5

4

JTDI

02/06/2007

IN

1/1(BLOCK)

PAGE:

12/19(TOTAL)

SCULLY

STEVE

ENGINEER:

2.2K

RP07

TESTPOINTS

JTAG

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_te3wan\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

VDDSYN

D

.1UF

1

CB70

0.0

RB34

FLASH\_VPP

VRH

TEA

TA

RCON

OE

RW

D

V3\_3

9

19

33

45

65

77

129

141

123

103

74

115

87

112

113

92

102

99

97

95

59

VDD1

VDD2

VDD3

VDD4

VDD5

VDD6

VDD7

VDD8

VDDSYN

VDDH

VDDF

VDDA

VPP

VRL

VRH

VSTBY

TEA*

TA*

SHS*

OE*

RW

U04

2107\_TDO

ONCE\_TDI

PQA0

PQA1

PQA3

PQA4

PQB0

PQB1

PQB2

PQB3

EB0

EB1

EB2

EB3

TIM\_16H\_8L

U04

22

116

A22

135

133

111

110

109

108

107

106

105

104

101

100

98

96

88

21

117

A21

D31

144

31

20

119

A20

D30

1

30

TDO

TDI

PQA0

PQA1

PQA3

PQA4

PQB0

PQB1

PQB2

PQB3

EB0*

EB1*

EB2*

EB3*

INT6*

C

19

121

18

122

A19

A18

MMC2107

D29

D28

2

29

CSE1

60

CSE1

3

28

CSE0

62

CSE0

ICOC23

52

ICOC23

C

ICOC22

53

ICOC22

17

131

16

132

A17

A16

PORT

D27

4

27

TC2

67

D26

5

26

TC1

78

TC2

TC1

MMC2107

ICOC21

54

ICOC21

15

134

A15

D25

7

25

CS3

81

14

136

A14

D24

10

24

CS2

83

CS3*

CS2*

CONTROL

ICOC20

ICOC13

55

ICOC20

56

ICOC13

13

137

A13

D23

12

23

CS1

85

CS1*

ICOC12

57

ICOC12

12

139

A12

D22

15

22

CS0

86

CS0*

ICOC11

58

ICOC11

11

6

A11

D21

16

21

RESET\_SYS

118

RESET*

ICOC10

61

ICOC10

10

11

A10

D20

17

20

CPUCLK\_OUT

128

CLKOUT

TEST

63

TEST

GND

9

13

A9

D19

20

19

PROC\_RESET\_OUT

120

RSTOUT*

TXD2

66

SCI2\_OUT

B

8

14

A8

D18

21

18

OUT

SPI\_SCK

93

SCK

RXD2

68

SCI2\_IN

7

23

A7

D17

22

17

ONCE\_DE\_B

143

DE*

TXD1

69

SCI1\_OUT

B

6

24

A6

D16

25

16

OUT

SPI\_CS

94

SS*

RXD1

70

SCI1\_IN

5

26

A5

D15

27

4

28

A4

D14

30

15

14

TMS

TRST*

TCLK

EXTAL

XTAL

MISO

MOSI

YC0

INT0*

INT1*

INT2*

INT3*

INT4

INT5*

INT7*

3

29

A3

D13

31

2

47

A2

D12

34

13

12

138

142

130

125

124

91

90

80

71

72

75

79

82

84

89

PA&lt;22..0&gt;

1

0

49

A1

D11

35

11

50

A0

VSS1

VSS2

VSS3

VSS4

VSS5

VSS6

VSS7

VSS8

VSSSYN

VSSF

VSSA

D0

D1

D2

D3

D4

D5

D6

D7

D8

D9

8

18

32

44

64

76

127

140

126

73

114

51

48

46

43

42

41

40

39

38

37

D10

36

A

ONCE\_TMS

ONCE\_TRST\_B

ONCE\_TCLK

OSC\_MCU

XTAL

SPI\_MISO

SPI\_MOSI

YCO

INT2

KIT\_STATUS

RUN\_KIT\_USR

INT4

INT3

USER\_LED2

USER\_LED1

A

PD&lt;31..0&gt;

0

1

2

3

4

5

6

7

8

9

10

IN

OUT

BLOCK

PROCESSOR HIERARCHY

OF

BEGINNING

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

1/7(BLOCK)

PAGE:

13/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

2008

10:02:20

20

Jun

Fri

PRINTED

\_ztopdn\_\

BLOCK:

PARENT

\_motprocrescard\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

CONFIGURATION

RESET

INT5

INT4

IN

D

INT3

INT2

IN

V3\_3

8

RPB10

1

PD&lt;26&gt;

D

IN

IN

7

2

PD&lt;17&gt;

6

10K

3

PD&lt;16&gt;

MODE

MASTER

OUT

RESET\_SYS

5

4

PD&lt;21&gt;

8

RPB13

1

PD&lt;23&gt;

DRIVE

FULL

7

2

PD&lt;22&gt;

6

10K

3

PD&lt;28&gt;

5

4

PLL

W/

XTAL

OUT

OUT

CS\_X4

OUT

CS\_X5

CS\_X1

INTERNAL

OUT

OUT

CS\_X3

CS\_X2

ENABLE

FLASH

C

OUT

OUT

WR\_DUT

C

OUT

RD\_DUT

A\_DUT\_&lt;12..0&gt;

8

RPB08

1

RCON

IO

D\_DUT&lt;7..0&gt;

7

2

6

10K

3

PD&lt;19&gt;

BOOT

TO GND

LOAD

FOR

WHEN SET

BOOT INTERNAL

5

4

PD&lt;18&gt;

INTERN/EXTERN

10K

A

HAS

D18

V3\_3

V3\_3

B

CS0

OE

EB1

CY62128V

CS0

OE

EB0

CY62128V

B

16

22

30

24

29

1

32

U06

16

22

30

24

29

1

32

UB13

23

21

IO7

GND

CE1*

CE2

OE*

WE*

N\_C

VCC

A16

2

17

A15

31

16

31

21

IO7

GND

CE1*

CE2

OE*

WE*

N\_C

VCC

A16

2

1

21

19

22

20

IO6

20

18

IO5

CY62128V

A14

3

15

30

20

19

17

IO4

A13

28

14

29

19

IO6

18

15

IO3

A12

4

13

28

18

IO5

CY62128V

A14

3

3

17

14

IO2

A11

25

12

27

17

IO4

A13

28

4

16

13

IO1

A10

23

11

26

15

IO3

A12

4

5

IO0

A9

26

10

25

14

IO2

A11

25

6

A8

27

9

24

13

IO1

A10

23

7

IO0

A9

26

8

A8

27

9

A

A15

31

2

A

A0

A1

A2

A3

A4

A5

A6

A7

A0

A1

A2

A3

A4

A5

A6

A7

PD&lt;23..16&gt;

12

11

10

9

8

7

6

5

PD&lt;31..24&gt;

12

11

10

9

8

7

6

5

1

2

3

4

5

6

7

8

PA&lt;17..1&gt;

17

16

15

14

13

12

11

10

PA&lt;17..1&gt;

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

2/7(BLOCK)

PAGE:

14/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_motprocrescard\_dn.

NAME:

BLOCK

CON14P

1

2

3

4

5

6

7

8

CON14P

2

1

ONCE\_TDI

OSC\_MCU

4

3

2107\_TDO

1

1

6

5

ONCE\_TCLK

2

XB01

8.0MHZ

D

D

KEY

ALIGN

8

7

CAP

FOR

POPULATE

PADS

DO NOT

BUT

PLACE

1.0M

V3\_3

ONCE\_TMS

10

9

RESET\_SYS

V3\_3

2

R09

8

RPB14

1

ONCE\_DE\_B

12

11

7

2

ONCE\_TRST\_B

14

13

1

6

10K

3

FLASH\_VPP

1

V5\_0

5

4

J11

2

XTAL

DS07

1

RB24

GREEN

1

2

2

1

KIT\_STATUS

330

C

V5\_0

330

1

R02

C

V3\_3

2

.1UF

13

26

3

30

1

C09

1

2

USB

1

0

25

D0

VCCIO

VCC2

VCC1

AVCC

3V3OUT

.01UF

6

1

C08

1

1

30

RB23

2

1

J03

UB08

V3\_3

2

3

1

24

D1

2

23

D2

USBDM

8

30

RB21

4

VDD

GND

DAT-

DAT+

USB

20

MAX3233E

R2IN

R2OUT

1

19

T2OUT

INVALID*

2

1

2

2

18

GND

T2IN

3

3

22

D3

USBDP

7

2.2K

R05

10K

RB18

1

5

17

V-

T1IN

4

SCI1\_OUT

4

21

D4

B

5

20

D\_DUT&lt;7..0&gt;

6

19

D5

D6

U02

RSTOUT#

5

1

1

30

RB19

2

V3\_3

16

C2-

FORCEON

5

7

18

D7

FT245BM\_U

XTIN

27

2

2

YB01

22PF

C11

6.00MHZ

1

14

C1-

T1OUT

7

PRT1\_OUT

13

C1+

R1IN

8

PRT1\_IN

12

V+2

VCC

9

11

V+1

FORCEOFF*

10

15

C2+

R1OUT

6

SCI1\_IN

B

C10

RD\_USB

16

RD#

WRUSB

15

WR

XTOUT

28

1

2

1

TXE\_USB

14

TXE#

RESET#

4

22PF

RXF\_USB

12

RXF#

EECS

32

SI\_WUUSB

11

SI\_WU

EESK

1

PWREN\_USB

10

PWREN#

EEDATA

2

A

GND2

GND1

AGND

TEST

31

V5\_0

V3\_3

8

RPB11

1

J10

A

17

9

29

7

2

6

10K

3

6

F

A

1

10UF

CB28

10UF

CB22

5

4

7

G

B

2

PRT1\_OUT

8

H

C

3

PRT1\_IN

DATE:

DS33Z11DK02A0

TITLE:

9

J

D

4

E

5

02/06/2007

3/7(BLOCK)

PAGE:

15/19(TOTAL)

SCULLY

STEVE

ENGINEER:

CONN\_DB9P

1

2

3

4

5

6

7

8

1

2

3

4

5

6

7

8

D\_DUT&lt;7..0&gt;

J09

NOPOP

0

2

2

1

1

1

D

CS\_X4

4

4

3

3

2

EB1

EB0

CS2

CS1

CS0

RW

OE

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

PD&lt;31..16&gt;

D

CS\_X3

6

6

5

5

3

CS\_X2

8

8

7

7

4

111

112

113

114

115

116

118

119

120

121

122

123

124

127

129

130

131

132

133

134

135

137

138

139

140

141

142

CS\_X1

10

10

9

9

5

RD\_DUT

12

12

11

11

6

PT25B

PT25A

PT23A

PT22B

PT22A/TDQS22

PT21B

PT21A

PT20B

PT20A

PT19B/VREF2\_1

PT19A/VREF1\_1

PT18B

PT18A

PT17B/PCLKC0\_0

PT17A/PCLKT0\_0

PT16B/VREF1\_0

PT16A/VREF2\_0

PT15B

PT15A

PT14B

PT14A/TDQS14

PT13B

PT13A

PT12B

PT12A

PT10B

PT10A

WR\_DUT

14

14

13

13

7

INT2

107

PR2A/VREF2\_2

CONN\_14P

V3\_3

RB25

DS08

106

PR2B/VREF1\_2

PL2A/VREF2\_7

2

A\_DUT\_&lt;12..0&gt;

J08

NOPOP

330

1

2

MISC\_LED

JMP04P8

105

PR7A

104

PR7B

2

1

BANK

WR\_DUT

103

2

2

2

1

1

12

RD\_DUT

102

PR8A

PR8B

BANK

PLL

INPUT

0

BANK

7

PL2B/VREF1\_7

3

BANK

PL7A

4

CPUCLK\_OUT

PL7B

PL8B

PL8A

5

0

6

1

7

2

C

C

1

4

4

3

3

8

JMP04P10

101

PR9A/PCLKT2\_0

PLL

0

6

6

5

5

7

SI\_WUUSB

100

PR9B/PCLKC2\_0

INPUT

PLL

PL9A/PCLKT7\_0

8

INT3

8

8

7

7

6

PWREN\_USB

86

PR12A/DOUT/CSO*

97\_IO

INPUT

PL9B/PCLKC7\_0

9

ENABLE\_DRIVER\_H

INT2

10

10

9

9

5

MEM\_SO

88

V3\_3

TRISTATE\_AD\_BUS

12

12

11

11

4

2

1

14

14

13

13

3

TRISTATE\_AD\_BUS

MEM\_SI

87

PR11A/D7/SPID0

PR11B/BUSY/SISPI

U05

PL11A/LLM0\_PLLT\_IN\_A

20

3

RB35

10K

MEM\_CS

85

PR12B/DI/CSSPI*

LFEC\_T144\_U

PLL

INPUT

PL11B/LLM0\_PLLC\_IN\_A

21

4

PL12A/LLM0\_PLLT\_FB\_A

22

5

CONN\_14P

RD\_USB

83

PR13A/RLM0\_PLLT\_IN\_A

PORT

I/O

PL12B/LLM0\_PLLC\_FB\_A

23

6

FPGA.

THE

TO

TRISTATE

OF

TO

12+14

PROCESSOR

USER

THE

DATABUSS

PINS

ADDRESS

ALLOWS

DIFFERENT

CONNECT A

JUMPER

THE

THIS

WRUSB

82

PR13B/RLM0\_PLLC\_IN\_A

PL13A

25

7

PA&lt;16..0&gt;

TXE\_USB

81

PR14A/RLM0\_PLLT\_FB\_A

PLL

INPUT

PL13B

26

8

RXF\_USB

79

PR14B/RLM0\_PLLC\_FB\_A

6

PL14A

27

9

B

ENABLE\_CALLBACKS\_H

78

PR15A/RDQS15

FOR TQFP144

PIN77

AT

MEM\_SCK MUST BE

MEM\_SCK

RB22

0.0

77

LOOP\_SOURCETIME

76

75

PR15B

PR16A

PR16B

3

BANK

BANK

PL14B

PL15A/LDQS15

PL15B

29

10

B

30

11

31

12

PL16A

32

13

INT5

74

PR18A/VREF1\_3

4

BANK

INPUT

PLL

5

BANK

PL16B

33

14

PL18A/VREF1\_6

34

15

I147

J04

PL18B/VREF2\_6

35

16

ENABLE\_DRIVER\_H

2

2

1

1

ENABLE\_CALLBACKS\_H

4

4

3

3

LOOP\_SOURCETIME

6

6

5

5

V3\_3

PB25B/D6/SPID1

PB24B/D5/SPID2

PB23B/D4/SPID3

PB23A

PB22B/D3/SPID4

PB22A/BDQS22

PB21B/D1/SPID6

PB21A/D2/SPID5

PB20B/D0/SPID7

PB20A/VREF2\_4

PB19B/CS*

PB19A/VREF1\_4

PB18B/CS1*

PB18A/WRITE*

PB17B/PCLKC5\_0

PB17A/PCLKT5\_0

PB16B/VREF1\_5

PB16A/VREF2\_5

PB15B

PB15A

PB14B

PB14A/BDQS14

PB13B

PB11B

PB11A

PB10B

PB10A

JMP04P8

8

8

7

7

70

69

68

67

66

65

64

62

61

60

59

58

57

56

53

51

50

49

48

47

46

45

43

42

41

40

39

A

A

JMP04P10

10

10

9

FPGA

LOOPTIME

/

CALLBACKS

PULLDOWNS INSIDE

CONN\_10P

9

HAVE

/

SIGNALS

DRIVER

CS\_X3

CS\_X4

CS\_X5

12

11

10

9

8

7

6

5

4

3

2

1

0

CS\_X2

CS\_X1

A\_DUT\_&lt;12..0&gt;

UNCONNECTED

WERE LEFT

REWORK WIRE

VCC BY

1,3,5,7,9

PINS

NOW CONNECTED TO

J04

ARE

NOTE:

THEY

V3\_3

8

RPB09

1

INT5

0

1

2

3

4

5

6

7

DATE:

DS33Z11DK02A0

TITLE:

7

2

INT4

02/06/2007

6

10K

3

INT3

D\_DUT&lt;7..0&gt;

4/7(BLOCK)

PAGE:

16/19(TOTAL)

SCULLY

STEVE

ENGINEER:

5

4

INT2

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_motprocrescard\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

J12

D

V3\_3

L\_TMS

L\_TCK

2

4

TMS

1

1

TCK

3

3

D

L\_TDI

V3\_3

L\_TDO

6

8

TDI

5

5

TDO

7

7

1

36

24

44

38

71

55

84

73

108

125

110

143

136

10

VCC

GND

9

VCCIO7

VCCIO6B

VCCIO6A

VCCIO5B

VCCIO5A

VCCIO4B

VCCIO4A

VCCIO3B

VCCIO3A

VCCIO2

VCCIO1B

VCCIO1A

VCCIO0B

VCCIO0A

4

3

2

1

10K

RP06

CONN\_10P

5

6

7

8

V1\_2

13

VCC1

92

VCC2

TCK

14

L\_TCK

99

VCC3

97\_IO

TDI

16

L\_TDI

C

V3\_3

19

VCCJ

U05

TDO

TMS

18

L\_TDO

17

L\_TMS

2.7V

C

54

VCCAUX1

LFEC\_T144\_U

UB06

126

VCCAUX2

CONTROL

CFG2

CFG1

89

V3\_3

90

8

VCC

SI

5

MEM\_SI

10K

RB33

10

XRES

RESISTOR

TO PIN

10K,1%

NEEDS

LOW FOR

CLOSE

PLACE

MODE

ALL

SPI3

CFG0

91

3

WP*

SO

2

MEM\_SO

MEM\_SCK

94

CCLK

7

HOLD*

SCK

6

MEM\_SCK

95

INIT*

PROGRAM*

93

RESET\_SYS

4

GND

CS*

1

MEM\_CS

97

DONE

AT25160A\_U

B

10K

RB20

NC2

NC1

GND10

GND9

GND8

GND7/GND0

GND6B/GND5

GND6A

GND5

GND4

GND3B

GND3A/GND4

GND2/GND1

GND1

GND0

B

12

11

98

96

15

144

37

28

52

63

80

72

109

117

128

UB09

MAX1963

V3\_3

V1\_2

6

OUT

IN

1

10UF

CB56

10UF

CB44

10UF

C20

.1UF

CB67

.1UF

CB45

.1UF

C18

5

IC

SHDN*

3

4

RST*

GND

2

A

A

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

5/7(BLOCK)

PAGE:

17/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_motprocrescard\_dn.

NAME:

BLOCK

1

2

3

4

5

6

3.3V

7

8

UB01

J01

MAX1793\_U

V5\_0

2.1MM/5.5MM

REGULATOR1\_OUTPUT

12

OUT1

IN1

2

REGULATOR\_INPUT

DB01

1

2

13

OUT2

IN2

3

0.0

RB01

10UF

C07

CB02

68UF

D

1

14

15

OUT3

IN3

4

1

D

OUT4

IN4

5

2

11

SET

RST

6

V3\_3

SUPPLY\_OUTPUT

2

10

17

GND

SHDN

7

GND

AND

DC POWER SUPPLY

5V

PROTECTION

BIAS

REVERSE

0.0

RB02

3.3V

UB04

MAX1793\_U

REGULATOR2\_OUTPUT

12

OUT1

IN1

2

REGULATOR\_INPUT

C

13

OUT2

IN2

3

C

14

OUT3

IN3

4

10UF

C04

15

11

OUT4

IN4

5

SET

RST

6

10

GND

SHDN

7

17

GND

V3\_3

3.08V

3.3V

1% REGULATOR

3.3V

UB11

2

DS11

1

8

RPB15

1

MAX811\_U

SW01

UB02

MAX1793\_U

7

2

4

VCC

MR*

3

4

1

REGULATOR3\_OUTPUT

GREEN

B

RESET\_SYS

6

330

3

2

RESET*

GND

1

3

2

12

OUT1

IN1

2

REGULATOR\_INPUT

B

5

4

13

OUT2

IN2

3

1

0.0

RB03

10UF

C06

CB03

68UF

14

15

OUT3

IN3

4

OUT4

IN4

5

11

SET

RST

6

REGULATOR\_INPUT

V3\_3

SUPPLY\_OUTPUT

2

10

GND

SHDN

7

17

GND

10UF

CB73

10UF

C01

10UF

C03

10UF

C02

68UF

1

CB12

1

CB01

68UF

0.0

RB04

3.3V

2

2

UB03

MAX1793\_U

A

GND\_TP02

GND\_TP04

REGULATOR4\_OUTPUT

12

GND\_TPB01

GND\_TP03

13

OUT1

IN1

2

REGULATOR\_INPUT

A

OUT2

IN2

3

1

1

1

1

1

1

H04

1

4

H03

1

4

H02

1

4

H01

1

4

H05

.50STANDOFF\_\_NUT

1

4

H06

14

OUT3

IN3

4

1

4

SHOULD

AND V3.3

RESISTANCE

COPPER

OZ

1

WIDE,

MIL

10

1% REGULATORS

3.3V

LONG,

INCH

1

IS:

BETWEEN THE

OHM OF

0.06

OUTPUT

BUILD

SHARING

LOAD

ENSURE

LONG ENOUGH TO

GEOMETRY FOR THIS

BETWEEN REGULATOR

TRACES

BE

10UF

C05

15

OUT4

IN4

5

11

10

SET

RST

6

TO

TRACE

17

GND

SHDN

7

GND

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

6/7(BLOCK)

PAGE:

18/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1% REGULATOR

3.3V

1

2

3

4

5

6

7

8

\_ztopdn\_\

BLOCK:

PARENT

\_motprocrescard\_dn.

NAME:

BLOCK

1

2

3

4

5

6

7

8

V3\_3

I67

V3\_3

GND

I68

D

V3\_3

D

.01UF

CB78

.01UF

CB80

.01UF

CB54

.01UF

C36

.1UF

CB93

.1UF

CB96

.1UF

CB37

4.7UF

CB42

4.7UF

CB43

4.7UF

CB100

4.7UF

C25

4.7UF

C28

4.7UF

C21

.01UF

C37

.01UF

C22

.01UF

C40

.01UF

CB27

.1UF

CB34

.1UF

C38

.1UF

C39

4.7UF

CB98

4.7UF

CB30

4.7UF

CB72

4.7UF

C34

4.7UF

C35

4.7UF

C26

.01UF

CB59

.01UF

CB69

.01UF

CB65

.01UF

CB57

.1UF

CB55

.1UF

C24

.1UF

CB76

4.7UF

CB41

4.7UF

CB81

4.7UF

CB77

4.7UF

CB79

4.7UF

CB53

4.7UF

C32

4.7UF

C33

V3\_3

C

C

.01UF

CB19

.01UF

CB35

.01UF

CB90

.01UF

CB82

.1UF

CB86

.1UF

CB88

.1UF

C45

4.7UF

CB48

4.7UF

CB62

4.7UF

CB25

4.7UF

C15

4.7UF

CB75

4.7UF

CB24

.01UF

C42

.01UF

CB94

.01UF

CB91

.01UF

CB84

.1UF

CB87

.1UF

CB74

.1UF

CB50

4.7UF

CB83

4.7UF

CB61

4.7UF

C46

4.7UF

CB85

4.7UF

C43

4.7UF

C47

.01UF

C41

.01UF

CB99

.01UF

CB97

.01UF

CB47

.1UF

CB58

.1UF

CB71

.1UF

CB29

4.7UF

CB51

4.7UF

CB66

4.7UF

CB68

4.7UF

CB31

4.7UF

CB38

4.7UF

CB89

4.7UF

CB92

B

B

A

A

BLOCK

PROCESSOR HIERARCHY

END OF

DATE:

DS33Z11DK02A0

TITLE:

02/06/2007

PAGE:

19/19(TOTAL)

SCULLY

STEVE

ENGINEER:

1

2

3

4

5

6

7

8

7/7(BLOCK)

\_ztopdn\_\

BLOCK:

PARENT

\_motprocrescard\_dn.

NAME:

BLOCK