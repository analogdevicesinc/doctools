<!-- lastmod 2022-08-03 -->
## General Description

The MAX7456 evaluation kit (EV kit) is a fully assembled and tested printed-circuit board (PCB) that evaluates the MAX7456 single-channel monochrome on-screen display (OSD) with integrated video driver. The EV kit includes a stand-alone NTSC/PAL demo mode (no PC required) that demonstrates the OSD capabilities of the MAX7456. The Windows ® -based MAX7456 EV kit software can be used to create display memory files and character memory files, and uploads their contents into the MAX7456's memory. The EV kit software also allows easy manipulation of all the MAX7456's functions.

| DESIGNATION     |   QTY | DESCRIPTION                                              |
|-----------------|-------|----------------------------------------------------------|
| C1              |     1 | 100µF ±20%, 6.3V X5R capacitor (1210) TDK C3225X5R0J107M |
| C2              |     1 | 22µF ±10%, 6.3V X5R capacitor (0805) TDK C2012X5R0J226K  |
| C3, C4, C5      |     3 | 10µF ±20%, 10V X5R capacitors (1206) TDK C3216X5R1A106M  |
| C6              |     1 | 4.7µF ±10%, 6.3V X5R capacitor (0603) TDK C1608X5R0J475K |
| C7-C18          |    12 | 0.1µF ±10%, 10V X5R capacitors (0402) TDK C1005X5R1A104K |
| C19, C20        |     2 | 10pF ±5%, 50V C0G capacitors (0402) TDK C1005C0G1H100J   |
| D1              |     1 | Green LED                                                |
| J1              |     0 | Not installed (2 x 5-pin header)                         |
| J2              |     0 | Not installed (2 x 4-pin header)                         |
| JU1, JU2        |     2 | 3-pin headers                                            |
| JU3             |     1 | 4-pin header                                             |
| CVBSIN, CVBSOUT |     2 | Female R/A BNCs A/D Electronics 591-071-00               |
| P1              |     1 | Female DB9                                               |

Windows is a registered trademark of Microsoft Corp. µMAX is a registered trademark of Maxim Integrated Products, Inc.

- ♦ Proven PCB Layout
- ♦ Windows 98/2000/XP-Compatible Evaluation Software with Character Editor
- ♦ Supports NTSC and PAL
- ♦ Stand-Alone Demonstration (Demo) Mode (No PC Required)
- ♦ BNC Connectors for CVBSIN and CVBSOUT

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX7456EVKIT  | EV Kit |
| MAX7456EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| R1, R2        |     2 | 75 Ω ±1% resistors (0603)                                                |
| R3, R4, R5    |     3 | 1k Ω ±5% resistors (0402)                                                |
| R6            |     1 | 100k Ω ±5% resistor (0402)                                               |
| R7            |     1 | 470 Ω ±5% resistor (0603)                                                |
| S1            |     1 | SPST switch E-Switch EG1218                                              |
| S2            |     1 | Momentary switch Omron B3F-1000                                          |
| TP1           |     1 | Not installed (test point)                                               |
| U1            |     1 | Single-channel OSD MAX7456EUI+ (28-pin TSSOP EP)                         |
| U2            |     1 | Low-power microcontroller (µC) MAXQ2000-RAX+ (68-pin QFN-EP 10mm x 10mm) |
| U3            |     1 | Level translator MAX3002EUP+ (20-pin TSSOP)                              |
| U4            |     1 | 2.5V LDO linear regulator MAX8881EUT25+ (6-pin SOT23)                    |
| U5            |     1 | RS-232 transceiver MAX3311EUB+ (10-pin µMAX ® )                          |
| Y1            |     1 | 27MHz crystal Citizen HC49US27.000MABJU                                  |
| Y2            |     1 | 20MHz crystal Citizen HC49US20.000MABJU                                  |
| -             |     1 | DB9 I/O extension cable                                                  |
| -             |     2 | Shunts                                                                   |
| -             |     4 | Bumps                                                                    |
| -             |     1 | PCB: MAX7456 Evaluation Kit+                                             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

<!-- image -->

## Features

## MAX7456 Evaluation Kit

## Component Suppliers

| SUPPLIER                    | PHONE        | WEBSITE                |
|-----------------------------|--------------|------------------------|
| Citizen America Corporation | 949-428-3700 | www.citizencrystal.com |
| TDK                         | 847-803-6100 | www.component.tdk.com  |

Note: Indicate you are using the MAX7456 when contacting these component suppliers

## Quick Start (Stand-Alone Demo)

This section provides instructions for running the MAX7456 EV kit in demo mode (no PC required).

## Recommended Equipment

- MAX7456 EV kit
- 5V power supply at 250mA for DVDD (DVDD supplies AVDD and PVDD)
- NTSC or PAL signal source
- NTSC or PAL video monitor
- Video cables (not included)

## Procedure

## Do not enable the power supply until all connections are made.

- 1) Place a shunt on JU1 to 2-3 (selects DVDD as PVDD source).
- 2) Place a shunt on JU2 to 2-3 (selects DVDD as AVDD source).
- 3) Set S1 to the OFF position (disable demo mode).
- 4) Connect the NTSC or PAL signal source to the CVBSIN BNC connector.
- 5) Connect the NTSC or PAL video monitor to the CVBSOUT BNC connector.
- 6) Connect the 5V power supply between the DVDD and DGND pads.
- 7) Enable the 5V power supply (LED D1 lights up).
- 8) Set S1 to the ON position (enable demo mode).
- 9) Press S2 to view the next demo mode screen.

## Quick Start (Software)

## Recommended Equipment

Before beginning, the following equipment is needed:

- MAX7456 EV kit (includes DB9 I/O extension cable)
- Windows 98SE/2000/XP-compatible PC with a spare RS-232 COM port
- 5V power supply at 250mA for DVDD (DVDD supplies AVDD and PVDD)
- NTSC or PAL signal source
- NTSC or PAL video monitor
- Video cables (not included)

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV Kit software. Text in bold and underlined refers  to  items  from  the  Windows 98SE/2000/XP operating system.

## Procedure

## Do not turn on the power until all connections are made.

- 1) Visit  www.maxim-ic.com/evkitsoftware to download the  latest  version  of  the  EV  kit  software, 7456Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install  the  EV  kit  software  on  your  computer by launching the INSTALL.EXE program inside the ZIP file. The program files are copied and icons are created in the Windows Start | Programs menu.
- 3) Connect the DB9 I/O extension cable from the computer's serial port to the MAX7456 EV kit.
- 4) Place a shunt on jumper JU1 to 2-3 (selects DVDD as PVDD source).
- 5) Place a shunt on jumper JU2 to 2-3 (selects DVDD as AVDD source).
- 6) Set S1 to the OFF position (disable demo mode).
- 7) Connect the NTSC or PAL signal source to the CVBSIN BNC connector.
- 8) Connect the NTSC or PAL video monitor to the CVBSOUT BNC connector.
- 9) Connect the 5V power supply between the DVDD and DGND pads.
- 10) Enable the 5V power supply (LED D1 lights up).
- 11) Start  the  EV  kit  software  by  clicking  its  icon  in  the Windows Start menu.
- 12) The  software  automatically  searches  for  the MAX7456. Check the Enable OSD Display checkbox in the Global Video Options group box (Figure 6) to make the on-screen display video visible. Type the filename SHOW\_ALL\_CHARACTERS.MDM into the Upload Display Memory to the MAX7456 edit box, then click the Upload button.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Detailed Description of Hardware

The MAX7456 evaluation kit (EV kit) is a fully assembled and tested PCB that evaluates the MAX7456 singlechannel OSD generator with integrated video driver. When DVDD is applied to the system, LED D1 lights up. Factory-default settings power AVDD and PVDD from DVDD. In order to use separate power supplies, see Tables 3 and 4.

The MAX7456 communicates using an SPI™ interface. On the EV kit, the MAXQ2000 (U2) µC is used as the SPI master. Because the MAX7456 and the MAXQ2000 have different supply voltages, the MAX3002 (U3) is used as a level translator for the SPI interface.

Note that the MAX7456 EV kit software does not communicate directly with the MAX7456. The EV kit software transfers data to the MAXQ2000 µC on the EV kit board using the PC's serial port. The MAXQ2000 then transfers the corresponding data to the MAX7456 using the SPI interface, as described in the MAX7456 IC data sheet.

Header JU3 allows access to the LOS, VSYNC ,  and HSYNC pins on the MAX7456. The connector J1 is the JTAG interface for the MAXQ2000 on the EV kit board. When shipped, firmware has already been loaded into the µC; therefore, J1 is typically not needed.

When the EV kits are assembled, the character memory in  the  MAX7456 is loaded with the contents of the demo.mcm file included with the EV kit software (see Figure 4). Note that this character memory is different than the character memory shipped with the MAX7456. The factory-default character set is contained in the defaultcm.mcm file and can be uploaded if desired. Refer to the MAX7456 IC data sheet for factory-set character memory.

## Changing the Master SPI Interface

On the EV kit, the MAXQ2000 µC supplies the master SPI interface to the MAX7456. To use a different master SPI interface, cut the traces connecting adjacent pins on J2 and apply the new master SPI interface as detailed in Table 1.

## Table 1. Master SPI Interface Lines

| INTERFACE   | PIN   |
|-------------|-------|
| MISO        | J2-2  |
| SCLK        | J2-4  |
| MOSI        | J2-6  |
| CS          | J2-8  |

SPI is a trademark of Motorola, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7456 Evaluation Kit

<!-- image -->

Figure 1. CVBSOUT with the First OSD Display in Demo Mode (NTSC)

Figure 2. CVBSOUT with the Second OSD Display in Demo Mode (NTSC)

<!-- image -->

Figure 3. CVBSOUT in Demo Mode During LOS (NTSC)

<!-- image -->

## MAX7456 Evaluation Kit

## Changing the Slave SPI Interface

To use the EV kit board as the master SPI interface for a  different  MAX7456 than the one supplied on the EV kit,  cut the traces connecting adjacent pins on J2 and connect the slave SPI interface of the new MAX7456, as detailed in Table 2.

## Table 2. Slave SPI Interface Lines

| INTERFACE   | PIN   |
|-------------|-------|
| SDOUT       | J2-1  |
| SCLK        | J2-3  |
| SDIN        | J2-5  |
| CS          | J2-7  |

## Demo Mode

Demo mode can be used to evaluate the MAX7456 EV kit without a PC. To enable demo mode, set S1 to the ON position. When the EV kit enters demo mode, the MAXQ2000 µC reads the MAX7456's status register to determine if the EV kit is receiving a video signal (NTSC or PAL). The output is automatically set to work in the format detected. If no video signal is present, demo mode automatically begins in NTSC mode. To force PAL mode when no signal is present, hold the S2 button while setting the S1 switch to the ON position.

If  the  MAX7456 detects NTSC or PAL on its input (CVBSIN) when entering demo mode, the first OSD display,  shown in Figure 1, appears on the video output (CVBSOUT). A second OSD display, shown in Figure 2, appears after pressing the S2 momentary switch.

When LOS is detected, the MAX7456 enters internal sync mode and displays the OSD shown in Figure 3 on CVBSOUT.

When shipped, the character memory on the EV kit's MAX7456 has been loaded with the characters shown in  Figure  4.  These  characters are stored in the file demo.mcm (included with the MAX7456 EV kit software). Use the Character Memory File Builder tab in the MAX7456 EV kit software to access these characters. If  the  character memory in the MAX7456 is changed, demo mode may not appear as expected (see Figures 1, 2, and 3). Upload demo.mcm to the MAX7456 using the EV kit software to view the original demo mode.

## Detailed Description of Software

Make sure the demo switch S1 is in the OFF position. To start the MAX7456 EV kit software, double-click the MAX7456 EV kit icon created during installation.

## Connecting to the MAX7456 EV Kit

When the MAX7456 EV kit software begins, the window shown in Figure 5 appears. If the MAX7456 EV kit is present and connected to one of the PC's serial ports, select Connect to EVKit on port and click OK .  The COM port should be autodetected, but the user may have to enter the name of the port manually (i.e., COM10) if it cannot be found.

To use the MAX7456 EV kit software without the EV kit board, select Standalone Mode and click OK .  Standalone mode is useful for using the Display Memory File Builder and the Character Memory File Builder , which do not require the EV kit board.

## Controls Tab

The Controls tab shown in Figure 6 allows access to most of the registers on the MAX7456. Refer to the MAX7456 IC data sheet for a description of the controls.

## MAX7456 Status

If  the Options|Poll Status Register menu item is checked, the MAX7456 status register is queried every second. The values in the register are shown in the MAX7456 Status group box.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Jumper Selection Tables

## Table 3. PVDD Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                   |
|----------|------------------|-------------------------------|
| JU1      | 1-2              | Supply PVDD from the PVDD pad |
| JU1      | 2-3*             | Supply PVDD from the DVDD pad |

## Table 4. AVDD Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                   |
|----------|------------------|-------------------------------|
| JU2      | 1-2              | Supply AVDD from the AVDD pad |
| JU2      | 2-3*             | Supply AVDD from the DVDD pad |

* Default configuration

## MAX7456 Evaluation Kit

Figure 4. Character Memory Stored in the MAX7456 on the EV Kit

<!-- image -->

Uploading Display Memory to the MAX7456 The Upload Display Memory to the MAX7456 group box contains all the controls necessary to write to the MAX7456's display memory on the EV kit. The ellipses ( … ) button selects the display memory file (.mdm) and the Upload button sends the display memory to the MAX7456.

Uploading Character Memory to the MAX7456 The Upload Character Memory to the MAX7456 group box contains all the controls necessary to write to the MAX7456's character memory on the EV kit. The ellipses  ( … )  button  selects  the  character  memory file (.mcm) and the Upload button sends the character memory to the MAX7456. In order for the video monitor display to match the EV kit software display, the associated character memory file (*.mcm) must have been uploaded prior to uploading the display memory file (*.mdm).

<!-- image -->

Display Memory File Builder Tab The Display Memory File Builder tab (Figure 7) creates display memory files (.mdm) that can be uploaded to the MAX7456 using the EV kit software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7456 Evaluation Kit

Figure 5. Select EV Kit Software Mode Window

<!-- image -->

To help visualize the display memory, a character memory file can be selected at the bottom of the tab. When the user clicks on a character in the Display Memory group box, the address and attributes for the selected character are posted in the corresponding group boxes to  the  right.  When the user double-clicks, a character selection window appears and a character can be selected to replace the previous character.

## Display Memory File Builder Tools

The Display\_Memory\_Tools menu contains global commands for the Display Memory File Builder .  The user should also select the video format (NTSC or PAL) for the display memory file in this menu.

Character Memory File Builder Tab The Character Memory File Builder tab (Figure 8) creates character memory files (.mcm) that can be uploaded to the MAX7456 using the EV kit software.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

To edit a character, click its location in the Character List group box. A zoomed-in version of the character appears in the Edit Character group box where clicking the individual pixels changes the color of that pixel (transparent, black, or white).

Character Memory File Builder Tools The Character\_Memory\_Tools menu contains commands to help the user edit individual characters. Note that  the Copy Character and Paste Character menu items can be used to copy characters to a different location in a Character Memory File Builder or even to a different character memory file.

## MAX7456 Evaluation Kit

Figure 6. MAX7456 EV Kit Software-Controls Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7456 Evaluation Kit

Figure 7. MAX7456 EV Kit Software-Display Memory File Builder Tab

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7456 Evaluation Kit

Figure 8. MAX7456 EV Kit Software-Character Memory File Builder Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7456 Evaluation Kit

Figure 9a. MAX7456 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7456 Evaluation Kit

<!-- image -->

Figure 9b. MAX7456 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7456 Evaluation Kit

Figure 10. MAX7456 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 11. MAX7456 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX7456 Evaluation Kit

<!-- image -->

Figure 12. MAX7456 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX7456 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | REVISION DESCRIPTION                                                                  | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/07            | Initial release                                                                       | -               |
|                 1 | 11/07           | Added MAX7456EVKIT to ordering info and changed component U3 from MAX3007 to MAX3002. | 1, 3, 10        |

14

Boblet Boblet Boblet