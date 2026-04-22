<!-- lastmod 2023-04-07 -->
## MAXPICO2PMB Adapter Board

## General Description

The MAXPICO2PMB adapter board is a fully assembled and tested PCB that provides an I 2 C interface to quickly interact  with  an  evaluation  kit  (EV  kit)  or  a  demo  board connected through the Pmod™ connector.

The  adapter  board  features  a  rapid  development  platform - the MAX32625PICO microcontroller, jumpers and a Pmod connector. The user can select on-board pullup resistors on the I 2 C lines by configuring jumpers. It also features an option to select the pullup voltage for the I 2 C lines through the power rail jumper. The Pmod connector provides one I 2 C port and two SPI ports for convenient evaluation.

The  MAXPICO2PMB  Register  Map  Tool  is  a  Windows application  that  interfaces  with  the  MAXPICO2PMB adapter  board.  The  user  can  import  *.regmap  files  that contain  the  unique  I 2 C  register  map  information  and register  field  descriptions  of  an  integrated  circuit.  The application  sends  commands  to  the  MAX32625PICO microcontroller  on  the  MAXPICO2PMB  adapter  board over a virtual serial port. The MAX32625PICO microcontroller sends I 2 C commands to communicate with the EV kit or demo board connected through the Pmod connector.

## MAXPICO2PMB Adapter Board Photo

<!-- image -->

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Pmod is a trademark of Digilent Inc.

Evaluates: MAXPICO2PMB#

## Features

- USB-Powered Operation
- USB to I 2 C and SPI Interface
- Pmod Compatible Form Factor
- Flexible Configuration
- MAX32625PICO Rapid Development Platform
- Drag-and-Drop Programming
- Small PCB Area
- Windows ®  8/10-Compatible GUI Software
- Fully Assembled and Tested

## Adapter Board Contents

- MAXPICO2PMB Adapter Board
- USB A to Micro-B Cable

## MAXPICO2PMB Adapter Board Files

| FILE                    | DESCRIPTION    |
|-------------------------|----------------|
| PicoRegMapToolSetup.exe | PC GUI Program |

Ordering Information appears at end of data sheet.

<!-- image -->

## MAXPICO2PMB Adapter Board

## Quick Start

## Required Equipment

Note: In the following sections, software-related items are identified by bold text. Text in bold refers to items directly from the install of adapter board software. Text which is bold and underlined refers to items from the Windows operating system.

- MAXPICO2PMB adapter board with the latest firmware
- USB A to Micro-B cable
- Windows 8/10 PC with USB ports
- EV kit or demo board under evaluation

## Procedure

The adapter board is fully assembled and tested. Use the following  steps  to  verify  board  operation. Caution:  Do not turn on the power supply until all connections are completed .

- 1) Visit https://www.maximintegrated.com to download the latest version of the adapter board software, PicoRegMapToolVxxx.ZIP located on the

Evaluates: MAXPICO2PMB#

MAXPICO2PMB adapter board web page. Download the adapter board software to a temporary folder and unzip the ZIP file.

- 2) Install the adapter board software on your computer by running the PicoRegMapToolSetupVxxx.EXE program inside the temporary folder.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) Connect the Pmod port of the MAXPICO2PMB board to the Pmod connector on the EV kit or demo board under evaluation.
- 5) Connect the USB A to Micro-B cable to the PC and to the MAXPICO2PMB adapter board's USB Micro-B port located at U1. LED D2 on the MAX32625PICO microcontroller flashes blue.
- 6) Run the previously installed GUI program.
- 7) If connection between the PC and the adapter board is successfully established, the status bar at the bottom displays I 2 C Slave Not Found (see Figure 1).
- 8) The adapter board is now ready for additional evaluations with a specific EV kit or demo board.

Figure 1. The Status of the GUI Shows I 2 C Slave Not Found Ready for Further Evaluations

<!-- image -->

│

## MAXPICO2PMB Adapter Board

## Detailed Description of Software

## Software Startup

Upon starting the program, the MAXPICO2PMB Register Map Tool automatically searches for the virtual serial port of  the  MAX32625PICO  microcontroller.  Ensure  that I 2 C Slave Not Found or Connected , with an EV kit or demo board connected at the Pmod connector, is shown in the status strip of the GUI. If any other message is displayed, check  all  connections,  and  verify  that  the  steps  in  the Quick Start section were followed in the correct order.

When the application is opened for the first time, a default register map is loaded with a default 7-bit slave address of  0b0101000 (shown as 0x50, the 8-bit write address). Follow the steps in the next section to open the register map for the EV kit or demo board under evaluation.

Evaluates: MAXPICO2PMB#

The Read All button reads all the registers visible on the current tab page. All statuses are polled continuously. The polling feature can be disabled in the Options section of the menu bar by selecting Disable Polling .

## Opening a Register Map

To open a register map file, simply drag and drop the .regmap file anywhere into the application, or manually open the file by following these steps:

- 1) Open the File menu in the top left corner of the application and select Open Register Map .
- 2) Click the Browse … button and open the targeted *.regmap file.
- 3) Click the OK button to load the register map.

Figure 2. Open Register File

<!-- image -->

Figure 3. Browse and Open the *.regmap File

<!-- image -->

│

## MAXPICO2PMB Adapter Board

## ToolStrip Menu Bar

The Toolstrip menu bar (Figure 4) is located at the top of  the  GUI  window.  This  bar  comprises File , Device , Options ,  and Help menus whose functions are detailed in the following sections.

## File Menu

The File menu contains the option to open a register map and exit out of the GUI program.

## Device Menu

The Device menu  provides  the  ability  to  connect  or disconnect the adapter board to the GUI. If the board is disconnected while the GUI is open, the GUI displays Not Connected in the lower right corner. If the adapter board is then plugged back in, the bottom right corner of the GUI displays I 2 C Slave Not Found or Connected .

Evaluates: MAXPICO2PMB#

## Options Menu

The Options menu provides additional setting to access more features offered by the GUI. The Disable polling option lets  the  user  read  the  registers  manually  instead of  getting  automatically  frequent  register  updates  from the IC.

## Help Menu

The Help menu  contains  the About option,  which  displays the GUI splash screen indicative of which GUI version is being used.

## Register Map

The Register  Map tab  (Figure  5)  displays  all  register fields and their corresponding descriptions and allows the user to read or write all I 2 C registers. The user can click Read All on the top right corner to perform a burst read of all registers.

Figure 4. The ToolStrip Menu Items

<!-- image -->

Figure 5. Register Map Tab

<!-- image -->

│

## MAXPICO2PMB Adapter Board

The left table shows the register to be read from or written to. The right table contains descriptions for each register field of the selected 8-bit register. All bits, along with their field names, are displayed at the bottom of the page.

To set a bit, click the bit label. Bold text represents logic 1 and regular text represents logic 0. To configure the changes to the device, click the Write button at the bottom right.

## Detailed Description of Hardware

The  MAXPICO2PMB  adapter  board  provides  a  convenient way to evaluate the EV kit or demo board connected at  the  Pmod connector. The adapter board features the MAX32625PICO microcontroller and various jumpers for flexible configurations. The user can select on-board pullup resistors on the I 2 C lines by configuring jumpers J1 and J2. It also features an option to select the pullup voltage for the I 2 C lines through the power rail jumper J3. The Pmod connector provides one I 2 C port and two SPI ports for  convenient  evaluation. The  MAXPICO2PMB adapter board operates from the USB +5V DC and therefore does not require an external power supply. Figure 6 shows the pin configuration for the I 2 C/SPI compatible connector at the MAXPICO2PMB2# board.

## Firmware Update

This section covers the procedure to update the MAXPICO2PMB adapter board with the latest  firmware by programming a firmware image file ( .bin ) onto the onboard MAX32625PICO microcontroller.

Figure 6. X2 Pmod I 2 C/SPI Connector Pin Configuration

<!-- image -->

## Evaluates: MAXPICO2PMB#

- 1) Put the board in maintenance mode by holding the button while the board is being connected to the computer. It can be easier to hold the button while inserting the USB cable at the computer end rather than the micro USB connector end (see Figure 7).
- 2) If the board enters bootloader mode successfully, the LED on the board turns red and the board appears to the computer as a USB drive named MAINTENANCE .
- 3) Drag and drop the firmware image file ( .bin ) into the MAINTENANCE drive and the board installs the new firmware.

Figure 7. Enter Maintenance Mode on the MAX32625PICO

<!-- image -->

│

## MAXPICO2PMB Adapter Board

## Using the Register Map Tool with MAX20342EVKIT

This section covers an example of opening the MAX20342 regmap  file  in  the  MAXPICO2PMB Register  Map tool  to interface with the MAX20342EVKIT (read and write register).

## Hardware setting

- 1) Follow the default jumper settings from Table 1 and the setup Procedure .

## Evaluates: MAXPICO2PMB#

- 2) Follow the default jumper settings on the MAX20342EVKIT.
- 3) Connect the MAXPICO2PMB adapter board to the MAX20342EVKIT through the Pmod connector (see Figure 8).
- 4) Connect a Micro-B cable to the USB1 port of the MAX20342EVKIT to power the EV kit. LED D4 of the MAX20342EVKIT lights up green.

Figure 8. Using the MAXPICO2PMB Adapter Board with MAX20342EVKIT

<!-- image -->

## Table 1. Jumper Table (J1-J3)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                             |
|----------|------------------|---------------------------------------------------------|
| J1       | 1-2*             | Connect 4.7kΩ pullup resistor to the SDAline            |
| J2       | 1-2*             | Connect 4.7kΩ pullup resistor to the SCL line           |
| J3       | 1-2              | Connect VIO to 3.3V of the MAX32625PICO microcontroller |
| J3       | 2-3*             | Connect VIO to 1.8V of the MAX32625PICO microcontroller |

│

## MAXPICO2PMB Adapter Board

## MAXPICO2PMB Register Map Tool GUI

Follow these steps to use the MAX20342 regmap file:

- 1) Follow the Procedure and the status of the GUI shows I 2 C Slave Not Found .
- 2) Under File , choose Open Register File , Browse for the MAX20342 regmap file, then click OK . The status shows Connected . The Slave Address column reflects the 8-bit I 2 C slave address of the MAX20342

Evaluates: MAXPICO2PMB#

0x6A. All MAX20342 specific details are filled in the Register Map tab, and default register values are loaded (see Figure 9).

- 3) Go to Register Address 0x16 COMM\_CTRL2 and locate bit 3 (Enable Force DB Output). Click on the DBFrc bit so it becomes bold and click Write to set this bit. Locate bit 4 (DB Output) and set this bit. LED D6 of the MAX20342EVKIT turns red (see Figure 10).

Figure 9. Open the MAX20342 Regmap File in MAXPICO2PMB Register Map Tool

<!-- image -->

│

Figure 10. An Example of Setting Bits with the MAX20342 Regmap

<!-- image -->

## Ordering Information

#Denotes RoHS compliance.

<!-- image -->

| PART         | TYPE          |
|--------------|---------------|
| MAXPICO2PMB# | Adapter Board |

## MAXPICO2PMB Adapter Board Bill of Materials

| ITEM   | REF_DES   |   QTY | MFG PART #                                                                                                                                               | MANUFACTURER                                            | VALUE          | DESCRIPTION                                                                                                             |
|--------|-----------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------|
| 1      | C1        |     1 | CL21A106KOQNNN; GRM21BR61C106KE15; EMK212ABJ106KD                                                                                                        | SAMSUNG ELECTRONICS;MURATA; TAIYO YUDEN                 | 10UF           | CAP; SMT (0805); 10UF; 10%; 16V; X5R; CERAMIC                                                                           |
| 2      | C2        |     1 | C0603C104K5RAC;C1608X7R1H104K; ECJ-1VB1H104K;GRM188R71H104KA93; CGJ3E2X7R1H104K080AA; C1608X7R1H104K080AA; CL10B104KB8NNN;CL10B104KB8NFN; 06035C104KAT2A | KEMET;TDK;PANASONIC;MURATA; TDK;TDK;SAMSUNG;SAMSUNG;AVX | 0.1UF          | CAP; SMT (0603); 0.1UF; 10%; 50V; X7R; CERAMIC;                                                                         |
| 3      | GND       |     1 | 5011                                                                                                                                                     | KEYSTONE                                                | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 4      | J1, J2    |     2 | PBC02SAAN                                                                                                                                                | SULLINS ELECTRONICS CORP.                               | PBC02SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 2PINS                                                               |
| 5      | J3        |     1 | PCC03SAAN                                                                                                                                                | SULLINS                                                 | PCC03SAAN      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                |
| 6      | R1, R2    |     2 | CRCW04024K70FK; MCR01MZPF4701                                                                                                                            | VISHAY DALE; ROHM SEMICONDUCTOR                         | 4.7K           | RES; SMT (0402); 4.7K; 1%; +/-100PPM/DEGC; 0.0630W                                                                      |
| 7      | U1        |     1 | MAX32625PICO                                                                                                                                             | MAXIM                                                   | MAX32625PICO   | MODULE; BOARD; MAX32625PICO BOARD DESIGN FOR MAX32625 ARM CORTEX-M4F; BOARD; LAMINATED PLASTIC WITH COPPER CLAD;        |
| 8      | X2        |     1 | PPPC062LJBN-RC                                                                                                                                           | SULLINS ELECTRONICS CORP.                               | PPPC062LJBN-RC | CONNECTOR; FEMALE; THROUGH HOLE; 0.1IN CC; HEADER; 2 ROW; RIGHT ANGLE; 12PINS                                           |
| 9      | PCB       |     1 | MAXPICO2PMB_APPS_A                                                                                                                                       | MAXIM                                                   | PCB            | PCB:MAXPICO2PMB_APPS_A                                                                                                  |
| TOTAL  |           |    11 |                                                                                                                                                          |                                                         |                |                                                                                                                         |

Evaluates: MAXPICO2PMB#

## MAXPICO2PMB Adapter Board Schematic

<!-- image -->

## MAXPICO2PMB Adapter Board PCB Layouts

<!-- image -->

MAXPICO2PMB Adapter Board PCB Layout-Top Silkscreen

<!-- image -->

MAXPICO2PMB Adapter Board PCB Layout-Bottom

MAXPICO2PMB Adapter Board PCB Layout-Top

<!-- image -->

MAXPICO2PMB Adapter Board PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAXPICO2PMB Adapter Board

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserYes the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAXPICO2PMB#