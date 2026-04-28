<!-- lastmod 2023-03-23 -->
<!-- image -->

## Evaluates: MAX98388/MAX98389

Click here to ask an associate for production status of specific part numbers.

## General Description

The  MAX98388/MAX98389  evaluation  system  (EV  system) is a fully assembled and tested system that evaluates the MAX98388 or MAX98389 Class-D audio amplifier. The EV system consists of either the MAX98388 or MAX98389 development  board  (DEV  board), Analog  Devices Audio Interface Board III (AUDINT3), and a USB cable.

It is recommended that the DEV board be evaluated with the AUDINT3 board, as an EV system. Both devices support  standard  I 2 S,  left-justified,  and  TDM  digital  audio interfaces.

The AUDINT3  board  provides  a  USB-to-PCM  interface in addition to a 1.8V VDD supply needed to evaluate the DEV board. The DEV board requires one additional supply input, 2.3V to 10V (PVDD) when evaluating using the AUDINT3 board. Figure 1 details the DEV boards.

## Features

- 2.3V to 10V Single-Supply Operation
- USB Audio Streaming (EV System)
- I 2 S, Left-Justified, or TDM Input
- Single Cell (2.3V to 5.5V) or Two Cell Mode (5V to 10V)
- Fully Assembled and Tested

## EV System Contents

- MAX98388 or MAX98389 Development Board
- Audio Interface Board III
- Micro-USB Cable

Ordering Information appears at end of data sheet.

Figure 1. MAX98388 and MAX98389 Development Boards

<!-- image -->

## MAX98388/MAX98389 Evaluation System

## MAX98388/MAX98389 Evaluation System

## Quick Start

## Required Equipment

- MAX98388/MAX98389 EV system
- Development board (DEV board)
- Audio interface board III (AUDINT3 board)
- Micro-USB cable
- DC power supply (2.3V-10V, 4A)
- 4Ω to 8Ω speaker
- PC with Windows ®  7 or Windows 10 with available USB port
- USB audio source (e.g., Windows Media Player ®  or iTunes ® )

## Required Software

- MAX98388 or MAX98389 evaluation software
- (See Table 1) (Installer: MAX9838xEVSwSetupVxx.exe)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  evaluation  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Table 1. MAX9838x Evaluation Software Folder

| ITEM                     | DESCRIPTION                               |
|--------------------------|-------------------------------------------|
| MAX9838x.exe             | MAX98388 or MAX98389 evaluation software  |
| Uninstaller.exe          | Software uninstaller                      |
| USBDriver/FTDI           | USB driver installer and help file        |
| USBDriver/Device Manager | Shortcut to the computer's device manager |

## Reference Material

- MAX98388/MAX98389 IC data sheet

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

## Software Install:

- 1) Visit www.maximintegated.com/evkitsoftware to download the latest version of the evaluation software, MAX9838xEVSwSetupVxx.zip. Uncompress the downloaded folder to a temporary location.

iTunes is a registered trademark of Apple Inc.

Windows is a registered trademark and registered service mark of Microsoft Corporation. Windows Media is a registered trademark and registered service mark of Microsoft Corporation.

## Evaluates: MAX98388/MAX98389

- 2) Install the software and USB driver on your computer by running the MAX9838xEVSwSetupVxx.exe program. Program files are copied, and icons are created in the Windows Start | Programs | Maxim Integrated | MAX9838x | Evaluation Software menu. During software installation, Windows may display a message indicating that this software is from an unknown publisher. This is not an error con -dition, and it is safe to proceed with the installation.
- 3) The USB driver should be automatically installed at the same time as the evaluation software. If the driver needs to be manually installed, navigate to the FTDI folder located in the installation directory, Program Files (x86) | Maxim Integrated | MAX9838x | Evaluation Software | USBDriver | FTDI , and run the CDMxxxxx.exe application.

## AUDINT3 Board Setup:

- 1) Connect the DEV board (3 row J1 connector) to the AUDINT3 board (3 row J1 connector). To avoid damage, it is important to make sure the connectors of the two boards are properly aligned. The bottom row of both J1 connectors should be lined up so the standoffs on the corners of the AUDINT3 and DEV board are level.
- 2) With the audio source disabled, connect the MicroUSB cable from your computer to the USB port (J2) on the AUDINT3 board. The AUDINT3 board provides the BCLK and LRCLK signals as well as the power for VDD, sourcing 1.8V to the DEV board through the J1 connector.
- 3) The multi-color LED D1 initially flashes blue and then should change to slow flashing magenta when the computer successfully registers the AUDINT3 as a USB audio playback device.

## DEV Board Setup:

- 1) Set the Enable jumper, J6, to VDD position, indicated by the bracket symbol.
- 2) Load the default configuration file through the device evaluation software. This defaults into single cell mode for MAX98388, and two cell mode for MAX98389.
- 3) Connect the speaker. Connect the speaker leads across the FOUTP and FOUTN binding posts.
- 4) Connect PVDD. With the DC supply not powered, connect the power supply across the PVDD and GND binding posts.

│

## MAX98388/MAX98389 Evaluation System

## USB Audio Playback Test:

- 1) Enable the PVDD supply at 5V if evaluating MAX98388 and 7.4V for MAX98389.
- 2) Open the Windows' Sound dialog and select the Playback tab. A Speakers item such as Figure 2 should be listed as an available playback device.
- 3) Verify that the Speakers item is set as the default device. Once this is done, the AUDINT3 board outputs PCM data to the DIN pin on the DEV Board.
- 4) Adjust the audio source volume to a low level.
- 5) In the evaluation software, click the Device Enable On button.
- 6) Enable the audio source and verify that audio is heard through the connected speaker. Adjust the audio source volume as needed.
- 7) Quick Start for USB Audio Playback is now complete.
- 8) For details on how to connect in a standalone mode to audio test equipment, such as Audio Precision, see Detailed Description of Hardware section.

Figure 2. Playback Device

<!-- image -->

Figure 3. MAX98388/MAX98389 Evaluation Software-Main Window

<!-- image -->

## Evaluates: MAX98388/MAX98389

## Detailed Description of Software

The  device  evaluation  software  provides  an  intuitive graphical user interface (GUI) for programming the device and also includes a handful of features that are intended to aid evaluation.

The evaluation software main window (Figure 3) is composed of four main sections: a menu bar, communication toolbar,  tabbed  pages,  and  a  status  bar. The  menu  bar provides additional features to aid evaluation, the toolbar provides  basic  functionality  for  communicating  with  the device,  and  the  status  bar  provides  information  about hardware  connectivity  and  communication  status.  The tabbed pages make up the bulk of the GUI and provide the controls for programming the device registers.

The Block Diagram tab provides access to all device registers through the use of dialog windows, which contain GUI controls for configuring the device. The dialog windows are opened by clicking on the blocks in the blockdiagram. The Control Registers tab provides access to the valid registers in the range from 0x2000 thru 0x210F as well as to the revision ID register, 0x21FF.

The  evaluation  software  is  compatible  with  Windows  7 and  Windows  10  and  can  be  downloaded  from www. maximintegrated.com/evkitsoftware .  Refer  to  the  IC data sheet for device register information.

│

## MAX98388/MAX98389 Evaluation System

## Communication Toolbar

The toolbar consists of six buttons and a drop-down combo box. These controls are always accessible, regardless of the  active  tabbed  page.  The  toolbar  shown  in  Figure  4 and Table 2 provides details about each control.

## Connect Sequence

When the evaluation software starts for the first time, the program attempts to automatically connect to the EV system. It first attempts to connect to the USB Control (USB1) interface on the AUDINT3 board. Once that connection is established it searches for all the I 2 C addresses associated  with  the  device  and  populates  all  detected  device addresses  in  the Active  Device drop-down  list.  During this sequence, the text on the Connect button automatically changes from USB to Device to Disconnect and the status bar also is updated to reflect the current state of the hardware connection.

Once the EV system is fully  connected,  the  button  displays Disconnect ,  and when pushed, it disconnects the software  from  the  hardware.  The  software  can  also  be disconnected from the hardware by selecting Options | Disconnect from the menu bar.

## Table 2. Toolbar Controls

Figure 4. Communication Toolbar

| CONTROL            | FUNCTION                                                                                                                                                                              |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| On                 | Press to set the Global Enable bit (EN). This enables the device.                                                                                                                     |
| Off                | Press to clear the Global Enable bit (EN). This disables the device. Note: The software is able to communicate with a disabled device, being that its I 2 C interface remains active. |
| Active Device      | Provides a list of detected I 2 C addresses. The displayed address is the active device.                                                                                              |
| Connect/Disconnect | See the Connect Sequence section for additional details.                                                                                                                              |
| USB                | Press to connect to the USB control (USB1) interface on the AUDINT1 board.                                                                                                            |
| Connect            | Detected addresses are shown in the Active Device drop-down list.                                                                                                                     |
| Disconnect         | Press to disconnect from the USB control (USB1) interface.                                                                                                                            |
| Read All           | Press to initiate a read of all device registers. The Control Registers and Block Diagram tabs are updated to reflect the read data.                                                  |
| Write All          | Press to initiate a write to all device registers using the settings shown on the Control Registers tab.                                                                              |
| Reset              | Press to reset device registers to their Power-On-Reset (POR) state.                                                                                                                  |

<!-- image -->

## Evaluates: MAX98388/MAX98389

There are two methods to re-establish a connection with the  hardware.  The  first  is  by  selecting Options  |  Auto Connect from the menu bar. This instructs the program to  automatically  connect  to  the  EV  system,  just  as  was done when the software first started. The second method is to manually push the Connect to button until it displays Disconnect ,  which  signifies  that  the  EV  system  is  fully connected.

## Status Bar

The Status bar is divided into three sections. From left to right, the device part number and revision ID, AUDINT3's firmware version, and the EV system status.

## Status Panel

The Status panel  (not  to  be  confused  with  the Status bar)  displays  the STATUS values  of  the  device's  status registers. This data is read from the Live Status registers (0x2001 thru 0x2005).

A  text  string  is  displayed  in  the  Interrupt  Name  column an image is displayed in the RAW and STATE column to indicate the setting of the associated Raw and State bits. When the image is visible, it indicates that the associated state bit has been set.

## MAX98388/MAX98389 Evaluation System

## Block Diagram Tab

The  evaluation  software  uses  an  interactive  block  dia -gram  to  facilitate  the  programming  of  the  device.  The block diagram also provides a visual representation of the device's functions and current configuration.

There  are  two  types  of  blocks  in  the  block  diagram, and they are identified by the cursor image. The cursor changes to a hand when over a block that has an associ -ated dialog window. If the cursor does not change (i.e.,

## Evaluates: MAX98388/MAX98389

remains an arrow) then that block does not have an asso -ciated dialog window. Clicking on a dialog block opens a dialog window, containing the controls for that functional block.

The color of a diagram block changes depending on the enabled  state  of  the  device  function(s)  associated  with that block. A disabled block is grey and an enabled block is teal. Figure 5 shows the block diagram with the device configured for DAI (USB audio) input and speaker output.

Figure 5. MAX98388/MAX98389 Block Diagram-USB Audio Input to Speaker Output

<!-- image -->

│

## MAX98388/MAX98389 Evaluation System

## Dialog Windows

Dialog windows are associated with specific blocks in the block diagram, and they contain the controls for configur -ing  the  registers  associated  with  that  functional  block.

## Evaluates: MAX98388/MAX98389

A dialog window is opened by clicking on a dialog block. Figure 6 shows the typical GUI controls that are found on a dialog window.

Figure 6. Typical GUI Controls

<!-- image -->

## MAX98388/MAX98389

## Evaluation System

## Control Registers Tab

The Control  Registers tab  provides  two  methods  for configuring  the  device. As  an  example,  Figure  7  shows the elements of the DAI registers.

The  first  configuration  method  involves  clicking  on  the register's bit  labels. A  greyed-out bit label indicates that the bit is currently set low. A bold bit label indicates that the bit is currently set high. Clicking on a bit toggles its state  and  results  in  a  write  to  that  register.  This  action also updates the value displayed in the register's edit box, located to the right of the bit labels.

The  second  configuration  method  involves  entering  a hexadecimal value in the register's edit box and then pressing the Enter key. The software automatically configures

Evaluates: MAX98388/MAX98389

the  device  register  once  the Enter key  is  pressed.  The state of the bit labels also is updated to reflect the value shown in the edit box.

Note: Trying to write to a read-only bit, by clicking/toggling its label or entering a hex value in its edit box, updates the GUI, but it does not affect the bit's value in the device. All read-only bits are updated, to reflect their current value in the device, by performing a read-all operation.

All changes made on this tab are reflected on the Block Diagram tab and any open dialog windows.

## Menu Bar

All  menu  bar  items  are  described  in Table  3. Additional information  for  some  menu  items  is  provided  in  the  following sections.

Figure 7. Control Registers Tab

<!-- image -->

## Table 3. Menu Bar Items

| MENU ITEM                      | DESCRIPTION                                                                                                                                 |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| File                           |                                                                                                                                             |
| Load Register Settings         | Loads a configuration file (as saved by the Save Settings option).                                                                          |
| Save Control Register Settings | Saves a configuration file containing the current device settings.                                                                          |
| Exit                           | Closes the evaluation software.                                                                                                             |
| Device                         |                                                                                                                                             |
| Connect                        | Select to have the software automatically connect to the evaluation system.                                                                 |
| Disconnect                     | Disconnects the PC from the evaluation system.                                                                                              |
| Reset                          | Resets registers 0x2000 through 0x210F to their Power-On-Reset states.                                                                      |
| Read All                       | Performs a read from all registers and updates the GUI.                                                                                     |
| Write All                      | Performs a write to all writeable registers using the values show on the Control Registers tab and then updates the GUI.                    |
| Read REV ID                    | Reads the device's revision ID register and updates the status bar.                                                                         |
| Options                        |                                                                                                                                             |
| Interface Selection            | Selects the I 2 C hardware interface.                                                                                                       |
| Configuration Mode F4          | Opens a dialog that allows multiple devices to be selected for configuration through the software. Note: This feature is not yet supported. |
| Demo Mode                      | Puts the software in demo mode.                                                                                                             |
| Help                           |                                                                                                                                             |
| View Help F1                   | Provides details on where to find help.                                                                                                     |
| About                          | Provides information about the evaluation software.                                                                                         |

│

## MAX98388/MAX98389 Evaluation System

## File I/O

The software's save and load features are accessed from the File menu. The Save feature saves the data currently displayed on the Control Registers tab.

A configuration file's main purpose is to capture the current  state  of  the  device's  registers,  as  displayed  on  the Register tab.  This  feature  makes  it  easy  to  program  a device to a saved/known state and allows for the sharing of  configuration files between users. To facilitate usage, use descriptive file names when saving configuration file.

The save and load features are functional even when the hardware is not connected. This allows configuration files to be created and opened when hardware is not available. Since the configuration file is automatically generated by the software it is not meant to be manually formatted and doing so can cause file loading issues. To open a configuration file for viewing purposes, use a plain text editor.

Select File | Save Settings Ctrl + S to create a configuration file. The register address and its data are saved as tab-delimited values and the file is saved with a .98388 or .98389 extension.

## Detailed Description of Hardware

The EV system is designed to allow for a thorough evaluation of the device's digital input Class-D audio amplifier IC. The EV system includes the Development Board (DEV Board), the Audio Interface Board III (AUDINT3), and a Micro-USB cable.

To  simplify  evaluation,  the  DEV  board  can  be  used together with the AUDINT3 and only one external power supply for PVDD. The AUDINT3 supplies 1.8V for VDD and  a  plug-and-play  USB-to-I 2 S  interface,  allowing  any computer to become a 48kHz digital audio source. The AUDINT3 board provides a fast and easy-to-use method for exercising the main capabilities of the device with no additional audio equipment.

The AUDINT3 board automatically senses the DEV  board  and configures its LDO  regulators to power  the  DEV  Board's  VDD  pin  through  connector

## Evaluates: MAX98388/MAX98389

J1.  The  USB-to-PCM  converter  accepts  a  USB  audio stream from a USB-connected computer and converts it to I 2 S stream, allowing for USB audio playback through the  device.  The AUDINT3  board  should  not  be  used  to deliver audio input when directly driving the DEV board's PCM interface  with  external  audio  test  equipment.  The Digital Audio Interface (DAI) pins on the DEV board and AUDINT3 digital audio outputs are connected through the J1 header, creating a signal conflict. Disable all DAI signals using the AUDINT3 software if using external audio stimuli. However, the AUDINT3 can still provide VDD if an external power supply is not available.

For  maximum  flexibility,  the  DEV  board  can  also  be evaluated as a standalone board, with two external power supplies (PVDD and VDD), and the digital audio signal is driven directly by specialized audio test equipment (Audio Precision, etc.).

## Power Supplies

When evaluated as a standalone board, the DEV board requires two external power supplies: PVDD, which is the supply  voltage  for  the  main  Class-D  power  stage,  and VDD, which supplies low-level system power to the IC.

The voltage applied to VDD determines the logic level of the EN pin when J6 is in the ENABLE position. The power supplies and their ranges are listed in Table 4. The external  supply  voltages  can  be  connected at the respective supply test points and/or binding posts.

The  AUDINT3  board,  when  properly  connected  to  the DEV board, senses, and automatically provides 1.8V to VDD of the DEV board through jumper J1, when active USB power is supplied. Note that with the AUDINT3 board connected, VDD is automatically provided, but an external PVDD is still required.

## Table 4. Power Supplies

| POWER SUPPLY   | RANGE (V)      |
|----------------|----------------|
| VDD            | 1.71V to 1.89V |
| PVDD           | 2.3V to 10V    |

## MAX98388/MAX98389

## Evaluation System

## Jumper Selection Shutdown Mode

The DEV board includes header J6 for device enable. The device features a hardware shutdown mode that is activated by setting J6 shunt in the DISABLE position. This is the lowest power state, where all device registers are returned to their PoR values and the I 2 C control interface is disabled. To exit the hardware shutdown mode, place the  J6  shunt  to  the  ENABLE  position,  and  initialize  the device. See Table 5 for reference.

## DAI Headers

The DAI headers provide access to the device's I 2 S bus: BCLK,  LRCLK,  and  DATA.  This  DAI  header  facilitates evaluation with audio equipment I/O. See Table 6 for the pin-out  of  the  DAI  headers.  Figure  8  shows  a  close-up image of the device's DAI interface header (J3) to be used if connecting external DAI inputs, such as those provided by Audio Precision or other audio test equipment.

## Speaker Output

The  device's  audio  output  is  routed  to  the  OUTP  and OUTN connections on the DEV board. The DEV board is,  by  default,  assembled  to  allow  the  device  output  to connect  directly  to  a  speaker  load  without  the  need  for filtering.

## Table 5. Jumper Configuration

| HEADER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| J6       | EN to VDD        | Normal operation |
| J6       | EN to GND        | Shutdown         |

## Table 6. DAI Headers (J3)

| SIGNAL   |   PIN |   PIN | SIGNAL   |
|----------|-------|-------|----------|
| GND      |     1 |     2 | DOUT     |
| GND      |     3 |     4 | DIN      |
| GND      |     5 |     6 | LRCLK    |
| GND      |     7 |     8 | BCLK     |

## Evaluates: MAX98388/MAX98389

## EMI Filter

When long speaker cables are used with the device out -put (exceeding ≈12in (30 cm)), a ferrite bead plus capaci -tor filter can be installed to prevent excessive EMI radiation. Although it is best to choose filter components based on EMI test results, the combination of 100pF capacitors (C7,  C9)  and  ferrite  beads  (FB1,  FB2)  generally  work well. Before adding the filters to the design, first, remove the small PCB traces shorting the pads of FB1 and FB2 (see  the MAX98388/MAX98389  EV  Kit  Development Board Schematic and the MAX98388/MAX98389 EV Kit Development Board PCB Layout Diagrams ).

Figure 8. DAI Interface Headers

<!-- image -->

│

## MAX98388/MAX98389 Evaluation System

## Audio Interface Board III

Analog  Devices  Audio  Interface  board  III  (AUDINT3 board)  facilitates  the  evaluation  of  the  DEV  board  by providing a set of features that can be used to exercise the  capabilities  of  the  DEV  board  without  the  need  for additional audio equipment. The main components of the AUDINT3 board are its LDO supply voltages and its USBto-PCM  interface.  The  supply  voltages  allow  the  DEV

## Table 7. AUDINT3 Connector (J1)

| SIGNAL   |   PIN | SIGNAL   |   PIN | SIGNAL   |   PIN |
|----------|-------|----------|-------|----------|-------|
| -        |     1 | MCLK     |     2 | GND      |     3 |
| BCLK2    |     4 | BCLK1    |     5 | GPIO1    |     6 |
| LRCLK2   |     7 | LRCLK1   |     8 | GPIO2    |     9 |
| DAC2     |    10 | DAC1     |    11 | GPIO3    |    12 |
| ADC2     |    13 | ADC1     |    14 | GPIO4    |    15 |
| -        |    16 | ID       |    17 | 3.3V     |    18 |
| AVDD     |    19 | DVDD     |    20 | GND      |    21 |
| HPVD     |    22 | VDDUI    |    23 | GND      |    24 |
| GND      |    25 | SDA      |    26 | 5V       |    27 |
| -        |    28 | SCL      |    29 | 5V       |    30 |
| GND      |    31 | IRQ      |    32 | RST      |    33 |
| -        |    34 | -        |    35 | -        |    36 |
| GND      |    37 | -        |    38 | -        |    39 |

## Evaluates: MAX98388/MAX98389

board to be evaluated with a minimal number of external supplies.  The  USB-to-PCM  converter  allows  any  computer to be used as an audio source for the DEV board's digital audio PCM interface.

The DEV board connects to the AUDINT3 board through connector J1. The physical connections made between the DEV board and the AUDINT3 board are listed in Table 7.

## MAX98388/MAX98389 Evaluation System

## USB Audio Input

To  use  the  USB  streaming  feature  of  the  AUDINT3 board,  ensure  that  the  AUDINT3  board  is  connected  to  the  DEV  board,  then  connect  the  USB  cable from  your  computer  to  the  USB  connector  J2  on  the AUDINT3  board.  Configure the desired audio signal  inputs  using  the Audio  Controls panel  of  the

Evaluates: MAX98388/MAX98389

AUDINT3  interface  software  as  shown  in  (Figure  9). As described earlier, a computer can be used to supply audio inputs over a USB interface in several selectable formats,  found  under  the DAI  Mode drop-down  menu. The AUDINT3 board can also generate test signal tones of various types, frequencies, and amplitudes as shown in Figure 10.

Figure 9. AUDINT3 Configured for Computer Audio Input Over USB

<!-- image -->

│

## MAX98388/MAX98389 Evaluation System

Evaluates: MAX98388/MAX98389

Figure 10. AUDINT3 Configured for a -12dBFS 1kHz Sine Input using an Internal Signal Generator

<!-- image -->

## Ordering Information

| PART           | TYPE              |
|----------------|-------------------|
| MAX98388EVSYS# | Evaluation System |
| MAX98389EVSYS# | Evaluation System |

# Denotes an RoHS-compliant device.

│

## MAX98388/MAX98389 Evaluation System

## MAX98388/MAX98389 EV Kit Development Board Bill of Materials

|   # |   QUANTITY | DESIGNATOR              | DESCRIPTION                                                                   | VALUE   | VOLTAGE   | TOLERANCE   | POWER   | DIELECTRIC   | PACKAGE   | MANUFACTURER         | MANUFACTURER PN              | MOUSER               | DigiKey             |
|-----|------------|-------------------------|-------------------------------------------------------------------------------|---------|-----------|-------------|---------|--------------|-----------|----------------------|------------------------------|----------------------|---------------------|
|   1 |          1 | C1                      | Capacitor / Electrolytic / 100µF / 25V / 20% / 6.3mm x 6.1mm                  | 100µF   | 25V       | 20%         |         | Electrolytic | 6.3 x 6.1 | United Chemi-Con     | EMZR250ARA101MF61G           | 661-EMZR250ARA101MF6 | 565-5142-1-ND       |
|   2 |          1 | C2                      | Capacitor / Ceramic / 100nF / 25V / 10% / X5R / 0201                          | 100nF   | 25V       | 10%         |         | X5R          | 0201      | Murata               | GRM033R61E104KE14J           | 81-GRM033R61E104KE4J | 490-14571-1-ND      |
|   3 |          1 | C3                      | Cap / 10µF / 25V / 20% / X5R / 0603                                           | 10µF    | 25V       | 20%         |         | X5R          | 0603      | Murata               | GRM188R61E106MA73D           | 81-GRM188R61E106MA3D | 490-7202-1-ND       |
|   4 |          1 | C5                      | Capacitor / Ceramic / 1µF / 6.3V / 20% / X5R / 0201                           | 1µF     | 6.3V      | 20%         |         | X5R          | 0201      | Murata               | GRM033R60J105MEA2D           | 81-GRM033R60J105ME2D | 490-7229-1-ND       |
|   5 |          1 | C10                     | Cap / 10µF / 10V / 20% / X5R / 0402                                           | 10µF    | 10V       | 20%         |         | X5R          | 0402      | AVX                  | 0402ZD106MAT2A               | 581-0402ZD106MAT2A   | 478-10052-1-ND      |
|   6 |          1 | C11                     | Cap / 1µF / 25V / 10% / X5R / 0402                                            | 1µF     | 25V       | 10%         |         | X5R          | 0402      | Murata               | GRM155R61E105KA12D           | 81-GRM155R61E105KA2D | 490-10017-1-ND      |
|   7 |          1 | C12                     | Cap / 2.2µF / 6.3V / 10% / X5R / 0402                                         | 2.2µF   | 6.3V      | 10%         |         | X5R          | 0402      | Murata               | GRM155R60J225KE95D           | 81-GRM155R60J225KE5D | 490-12532-1-ND      |
|   8 |          1 | J1                      | Updated EVkit Daughter Card Header                                            |         |           |             |         |              |           | Samtec               | TSW-113-08-G-T-RA            |                      |                     |
|   9 |          1 | J2                      | Header / 0.1" Pitch / Unshrouded / 5-pin / Breakaway / Cross Pattern          |         |           |             |         |              |           | Molex                | 22-28-4055                   | 538-22-28-4055       | WM24204-ND          |
|  10 |          1 | J3                      | Header, 4x2 Position, 0.1" Pitch                                              |         |           |             |         |              |           | Samtec               | TSW-104-07-G-D               | 200-TSW10407GD       | SAM1028-04-ND       |
|  11 |          1 | J4                      | Header, 2x2 Position, 0.1" Pitch                                              |         |           |             |         |              |           | Samtec               | TSW-102-07-G-D               | 200-TSW10207GD       | SAM1028-02-ND       |
|  12 |          1 | J5                      | Header, 2x1 Position, 0.1" Pitch                                              |         |           |             |         |              |           | Samtec               | TSW-102-07-G-S               | 200-TSW10207GS       | SAM1029-02-ND       |
|  13 |          1 | J6                      | Header, 3x1 Position, 0.1" Pitch                                              |         |           |             |         |              |           | Samtec               | TSW-103-07-G-S               | 200-TSW10307GS       | SAM1029-03-ND       |
|  14 |          4 | J7, J9, J12, J15        | Binding Post                                                                  |         |           |             |         |              |           | Johnson              | 111-2223-001                 |                      | J587-ND             |
|  15 |          5 | J8, J10, J11, J13, J14  | Wire Loop / 20AWG / Tinned Copper / 25mm Length                               |         |           |             |         |              |           |                      | 20TCW                        |                      | 2328-20TCW-ND       |
|  16 |          1 | R1                      | Resistor / 33kΩ / 1% / 1/16W / 0402                                           | 33k     |           | 1%          | 1/16W   |              | 0402      | Yageo                | RC0402FR-0733KL              | 603-RC0402FR-0733KL  | 311-33.0KLRCT-ND    |
|  17 |          4 | R2, R5, R7, R8          | Resistor / 51Ω / 1% / 1/16W / 0402                                            | 51      |           | 1%          | 1/16W   |              | 0402      | Yageo                | RC0402FR-0751RL              | 603-RC0402FR-0751RL  | 311-51.0LRCT-ND     |
|  18 |          2 | R3, R10                 | Resistor / 0Ω / 1% / 1/16W / 0402                                             | 0       |           | 1%          | 1/16W   |              | 0402      | Yageo                | RC0402FR-070RL               | 603-RC0402FR-070RL   | 311-0.0LRCT-ND      |
|  19 |          1 | R11                     | Resistor / 100kΩ / 1% / 1/16W / 0402                                          | 100k    |           | 1%          | 1/16W   |              | 0402      | Yageo                | RC0402FR-07100KL             | 603-RC0402FR-07100KL | 311-100KLRCT-ND     |
|  20 |          4 | SC1, SC2, SC3, SC4      | Screw / 4-40 x 1/4" / Phillips / Pan Head                                     |         |           |             |         |              |           | McMaster-Carr        | 91772A106                    |                      |                     |
|  21 |          4 | ST1, ST2, ST3, ST4      | Standoff / 4-40 x 1/2" / Female-Female / 1/4" Hex                             |         |           |             |         |              |           | McMaster-Carr        | 91780A164                    |                      |                     |
|  22 |          5 | TP1, TP2, TP4, TP5, TP7 | Test Point / Compact / Orange                                                 |         |           |             |         |              |           | Keystone Electronics | 5008                         | 534-5008             | 5008K-ND            |
|  23 |          2 | TP3, TP6                | Test Point / Compact / White                                                  |         |           |             |         |              |           | Keystone Electronics | 5007                         | 534-5007             | 5007K-ND            |
|  24 |          4 | TP8, TP9, TP10, TP11    | Test Point / Multi-Purpose / Black                                            |         |           |             |         |              |           | Keystone Electronics | 5011                         | 534-5011             | 5011K-ND            |
|  25 |          2 | TP12, TP13              | Test Point / Compact / Yellow                                                 |         |           |             |         |              |           | Keystone Electronics | 5009                         | 534-5009             | 5009K-ND            |
|  26 |          1 | TP15                    | Test Point / Multi-Purpose / Red                                              |         |           |             |         |              |           | Keystone Electronics | 5010                         | 534-5010             | 5010K-ND            |
|  27 |          2 | TP16, TP17              | Test Point / Miniature / White                                                |         |           |             |         |              |           | Keystone Electronics | 5002                         | 534-5002             | 5002K-ND            |
|  28 |          1 | U1                      | Digital Input Class-D Amplifier With IV Feedback for Wearables                |         |           |             |         |              | WLP16     | Analog Devices, Inc. | MAX98388AEWC+/ MAX98389AEWC+ |                      |                     |
|  29 |          1 | U2                      | 12V Input, 1.8V Output, Ultra-Low-IQ, Low- Dropout Linear Regulators with POK |         | 1.8V      |             |         |              | SOT23-6   | Maxim                | MAX8881EUT18+                | 700-MAX8881EUT18T    | MAX8881EUT18+TCT-ND |

## MAX98388/MAX98389 EV Kit Development Board Schematic

<!-- image -->

## MAX98388/MAX98389 Evaluation System

## MAX98388/MAX98389 EV Kit Development Board PCM Layout Diagrams

<!-- image -->

MAX98388/MAX98389 EV Kit Component Placement GuideTop Overlay

<!-- image -->

MAX98388/MAX98389 EV Kit PCB Layout-Top Layer

MAX98388/MAX98389 EV Kit PCB Layout-Layer 2

<!-- image -->

MAX98388/MAX98389 EV Kit PCB Layout-Layer 3

<!-- image -->

│

## MAX98388/MAX98389 Evaluation System

## MAX98388/MAX98389 EV Kit Development Board PCM Layout Diagrams (continued)

<!-- image -->

MAX98388/MAX98389 EV Kit PCB Layout-Bottom Layer

MAX98388/MAX98389 EV Kit PCB Layout-Bottom Overlay

<!-- image -->

MAX98388/MAX98389 EV Kit PCB Layout-Dimensions

<!-- image -->

│

## MAX98388/MAX98389 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                                                                        | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/22           | Initial release                                                                                                                                                                                                                                                                                                                                                                                                    | -               |
|                 1 | 1/23            | Updated General Description , Figure 1, DEV Board Setup , USB Audio Playback Test , MAX98388 EV Kit Development Board Bill of Materials , MAX98388 EV Kit Development Board Schematic , and MAX98388 EV Kit Development Board PCM Layout Diagrams                                                                                                                                                                  | 1-3, 13-16      |
|                 2 | 2/23            | Updated title, added MAX98389, updated General Description, EV System Contents , Figure 1, Quick Start, Detailed Description of Software, Figure 3, Figure 5, Detailed Description of Hardware, Audio Interface Board III, Ordering Information, MAX98388 EV Kit Development Board Bill of Materials, MAX98388 EV Kit Development Board Schematic title, and MAX98388 EV Kit Development Board PCM Layout Diagrams | All             |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

│

Evaluates: MAX98388/MAX98389