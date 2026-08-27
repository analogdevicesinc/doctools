<!-- lastmod 2022-08-03 -->
<!-- image -->

## DS28EA00 Evaluation Kit

## General Description

The DS28EA00 evaluation system (EV system) consists of a single evaluation kit (EV kit) that includes an evaluation  board (EV board) made up of three subsections that can be broken/snapped off into three independently exercisable boards. See Figure 1 for a picture of the stand-alone EV board and Figure 2 for a picture of the EV board snapped and cabled together. Three DS28EA00 temperature chips with GPIO and sequence detect can be found on the EV board, one per subsection.  Also  included in the kit are connectivity items, such as serial cables, a 1-Wire ® USB adapter, and jumpers. Free evaluation software, the OneWireViewer, is  available  for  download  from  the  web  page  listed  in the Support Resources section.

Since one of the major features of the DS28EA00 is detection of physical sequence, a block of dipswitches are provided on each subsection of the EV board to reorder the physical connection between the chips. Optionally, the customer can break off the subsections of the eval board, connect them together with the provided cables, and re-order the physical sequence of the  DS28EA00s that way. The OneWireViewer evaluation software can then be used to exercise the functionality of the chips and provide a way for an evaluator to see the actual physical connection sequence of the chips. The algorithm to detect the connection order is called chain mode. More information on chain mode can be found in Application Note 4037.

## Support Resources

- 1) DS28EA00 EV Kit Data Sheet: www.maxim-ic.com/DS28EA00EVKIT
- 2) 1-Wire Drivers: www.maxim-ic.com/1-Wiredrivers
- 3) DS28EA00 EV Kit Software (OneWireViewer): www.maxim-ic.com/onewireviewer
- 4) OneWireViewer User's Guide: www.maxim-ic.com/AN3358
- 5) Application Note 4037: www.maxim-ic.com/AN4037
- 6) Web-Based Discussion Forum: http://discuss.maxim-ic.com
- 7) Technical Support: http://support.maxim-ic.com/1-Wire

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

Features

- ♦ Easy Setup
- ♦ Stand-Alone EV Board

Contains Three Separate, Breakable Subsections with a DS28EA00 Per Subsection

Dipswitch Block on Each EV Board Subsection Routes Physical Chain-Mode Connections Between Chips When Used as a Stand-Alone Board

EV Board's Subsections are Breakable Into Three Separate Boards, Each of Which Evaluates a Single DS28EA00 or, When Cabled Together, Evaluate Chain-Mode Searching LEDs Give Visual Indicators of PIO Activity 6-Pin Terminal Strip Allows PIO Testing Outside of Chain Mode

- ♦ PC Connectivity Included
- ♦ RoHS Compliant
- ♦ Free Downloadable Evaluation Software Available

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| DS28EA00EVKIT | EV Kit |

## EV Kit Contents

| DESIGNATION   |   QTY | DESCRIPTION                                                                                   |
|---------------|-------|-----------------------------------------------------------------------------------------------|
| H1            |     6 | 2-pin shunts (for jumpering) Tyco/Amp 881545-2                                                |
| H2            |     1 | Instruction sheet                                                                             |
| H3            |     3 | 7' RJ11 male to RJ11 male serial cable, 6-pin, 6-connection Interconnect/Digikey H2663R-07-ND |
| H4            |     1 | 1-Wire USB adapter without ID Dallas Semiconductor DS9490R-S                                  |
| H5            |     1 | Antistatic bag to hold items H1-H4                                                            |
| H6            |     1 | DS28EA00 EV board (see EV Board Component List )                                              |
| H7            |     1 | Cardboard box to hold EV kit contents (H1-H6)                                                 |

## DS28EA00 Evaluation Kit

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| RJ1-RJ6       |     6 | RJ11 6-pin, 6-connection, right angle AMP 520250-3             |
| R1-R6         |     6 | SMT 1206 1k resistor Panasonic-ECG ERJ-8ENF1001V               |
| R7-R12        |     6 | SMT 1206 10k resistor Panasonic-ECG ERJ-8ENF1002V              |
| D1-D3         |     3 | SMT 1206 green, surface-mount LED LiteOn LTST-C150GKT          |
| D4-D6         |     3 | SMT 1206 yellow, surface-mount LED LiteOn LTST-C150YKT         |
| Q1-Q7         |     7 | SMTSOT23 BSS84 transistor P-type FET OnSemiconductor BSS84LT1G |

## EV Board Component List

QTY

DESCRIPTION

3

3

3

3

SMT 1206 1500pF capacitor

KMET C1206C152K5RACTU

100-mil, centers square-post terminal

strip (6-pin jumper posts)

MOLEX 22-28-4062

DS28EA00 1-Wire digital thermometer

with sequence detect and PIO

(8-pin µSOP)

Maxim DS28EA00

Jumper block dipswitch with 7 built-

in switches (14 DIP)

Grayhill Incorporated 76SB07ST

Figure 1. Stand-Alone EV Board

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

DESIGNATION

C1-C3

J1-J3

U1

JB1-JB3

<!-- image -->

## DS28EA00 Evaluation Kit

Figure 2. EV Board Snapped and Cabled

<!-- image -->

## Quick Start

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows ® operating system.

- 1) Make sure all kit components are present and accounted for (see EV Board Component List).
- 2) The software mentioned in this document requires a PC with a spare USB port running a Windows 98SE, 2000, or XP operating system. It is required to have system administrator privileges for installing the drivers, as well as an active internet connection.

Windows is a registered trademark of Microsoft Corp. Java is a trademark of Sun Microsystems.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 3) Download and install the 1-Wire Drivers package (see Support Resources for links to the download). The install process is straightforward. Respond correctly to the prompts (including when to plug-in the DS9490R-S 1-Wire adapter).
- 4) If  trouble  occurs  during  the  1-Wire  drivers  installation, refer to Application Note 1740: White Paper 6: 1-Wire Drivers Installation Guide for Windows. Specifically look at Appendix A: 1-Wire USB Adapter (DS9490) Installation Help.
- 5) Install Java™ version 1.4 or above on the PC if not already done (www.java.com).

## DS28EA00 Evaluation Kit

- 6) Install the OneWireViewer evaluation software. Click the Launch the OneWireViewer button found on the page.
- 7) Prepare the stand-alone EV board to be connected to the computer for the first time.
- a) Open (set to nonconducting) all the switches in the three dipswitch blocks. The open side of the dipswitch blocks is the left-hand side.
- b) Close (set to conducting) the switches 1, 2, and 7 on each dipswitch block. They are labeled LED A, LED B, and VCC, respectively, and give power to the PIO LEDs and to the DS28EA00 chips.
- c) Physically connect the DS28EA00s PIOs together  so  that  their  order  is  top  board  subsection first, middle subsection second, and the bottom subsection last, giving a physical sequence of 1, 2, 3, from top to bottom:
- i) Set the top board's DS28EA00 to be the beginning of the chain in chain mode by grounding its PIO B (closing switch 7 which is labeled B GND).
7. ii) Route the connections through switches 3 and 4 on each dipswitch block (see Figure 9). The switch pair represents the two possible subsections that could be previously connected to the current subsection. At most only one switch should be closed for any subsection. Each switch is labeled as A1, A2, or A3. Here, A1 indicates the top subsection (and its  DS28EA00), A2 the middle, and A3 the bottom. The switch pair of the first subsection in the chain should be kept open (nonconducting). See Table 2 for all possible connection sequences. Select the sequence A1, A2, A3 (top to bottom).
- 8) Connect the hardware to the computer.
- a) The DS9490R-S 1-Wire adapter should already be connected to a spare USB port on the computer.
- b) Connect the EV board to the DS9490R-S with one of the RJ11 serial cables. Plug in the standalone board to the PC through one of the RJ11 sockets located on the left-hand side of the EV board (it does not matter which one).
- 9) Run the OneWireViewer by either clicking the button on the OneWireViewer web page or by running Java WebStart's application launcher. This can nor-

mally be found in the following default install directory of the Java Runtime Environment's bin directory:  C:\Program Files\Java\jre1.6.0\_01\bin. Open a command-line from this directory and type in 'javaws-viewer'. A GUI window appears and you can right-click on the OneWireViewer icon to either launch it online (if the PC is connected to the internet) or launch it offline (if the PC is disconnected). You can also save a OneWireViewer shortcut to the desktop if so desired.

## Detailed Description of Software

See the OneWireViewer's main window in Figure 3. Note that it is made up of three sections:

- 1) Device List. The device list shows the 1-Wire network addresses of all 1-Wire parts connected on the specified 1-Wire network, along with the part number.  For  this  EV  board,  it  lists  all  three DS28EA00s. Figure 3 shows three DS28EA00s on the network.
- 2) Search Mode. Three search modes, along with Pause All Searching ,  are  listed  in  the  lower  lefthand corner of Figure 3. The Show Normal Devices mode is actually a binary tree search, so the device order in the device list does not indicate physical connection sequence. Show Alarming Devices is  a  search mode that finds alarming devices, such as a DS28EA00 whose temperature is  above the high-temperature alarm trip point or below the low-temperature alarm trip point. Finally, Show Chain Mode Devices is a search mode that orders the device list of the OneWireViewer in order of  physical connection sequence. If a nonchainmode device is connected to the network, it does not participate in the search and does not show up in  the  device  list.  See  an  example  of  chain-mode searching in Figure 4.
- 3) Function Tabs. Several tabs exist in the main window of the OneWireViewer. Each tab represents a related function set that is exercisable for the specific  device  chosen  in  the  device  list.  The DS28EA00 contains Description , Temperature , Switch , and Memory tabs as the part has that functionality. Clicking on a specfic tab switches to a GUI panel that can exercise the functionality indicated by the tab of the selected DS28EA00. These function  tabs  (along  with  the  search  modes)  represent the  core  of  the  DS28EA00. See the Function Tabs section for more detail.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS28EA00 Evaluation Kit

Figure 3. OneWireViewer Main Window

<!-- image -->

## Switching Between Chain Mode and Normal Search Modes

See Figure 4 for two screenshots of the OneWireViewer's device list. Keep in mind that chain-mode searching arranges the device list of the OneWireViewer in order of physical connection sequence, and normal-mode searching arranges the device list in the order of the 1-Wire search algorithm. The first screenshot shows normal-mode searching and the second shows chain-mode searching. Notice how the device list rearranges when selecting the different 1-Wire search modes.

## Function Tabs

The OneWireViewer function tabs, as mentioned earlier, allow a user to exercise a related set of functions of the selected DS28EA00. The DS28EA00 shows four tabs on the OneWireViewer: the Description , Temperature , Switch , and Memory tabs.

The Description tab is shown in Figure 3. It is present for any selected 1-Wire device and just gives a textual overview  of  the  part's  features  and  specs.  The Temperature , Switch , and Memory tabs are described in the following sections and shown visually in Figures 5,  6,  and  7,  respectively.  For  detailed  documentation on the DS28EA00's temperature, memory, and PIO (switch) operation, refer to the DS28EA00 data sheet: www.maxim-ic.com/DS28EA00 .

Function Tabs: Temperature As seen in Figure 5, the OneWireViewer's Temperature function tab is made up of three sections: Info , Graph , and Thermometer .  The info section displays the most recently sampled temperature, gives the user a choice to  display  the  temperature in degrees Fahrenheit or Celsius, and allows for setting the temperature conversion resolution of the selected DS28EA00. The Graph section graphs temperature vs. time. Right-clicking the Graph gives the ability to export temperatures to the computer's clipboard where they can be pasted into another application, and gives the ability to resize the graph. Finally, the Thermometer section shows the latest sampled temperature in a thermometer-style graph.

<!-- image -->

Figure 4. Normal- vs. Chain-Mode Searching in the OneWireViewer

<!-- image -->

Figure 5. OneWireViewer Function Tabs: Temperature

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS28EA00 Evaluation Kit

Figure 6. OneWireViewer Function Tabs: Switch

<!-- image -->

Figure 7. OneWireViewer Function Tabs: Memory

<!-- image -->

## Function Tabs: Switch

Figure 6 shows the OneWireViewer's Switch function tab. It is made up of two sections: Features and Channels .  The Features section gives general Switch i nformation  such  as  type  and  abilities,  and  the Channels section allows the user to toggle the switches of the DS28EA00 and to read their input states.

## Function Tabs: Memory

The OneWireViewer's Memory function tab consists of three sections: Banks , Info , and Contents . The Banks section displays the three DS28EA00 memory banks available. The Info section shows the features, type, size, and starting address of the memory bank selected. Finally, the Contents section allows the user to refresh (read), or commit changes to (update) the selected memory bank's contents (in hexadecimal format only).

Notice in the TH/TL alarm trip points memory bank, two bytes represent temp-high and temp-low alarms, respectively. To update the alarm trip points, first convert the alarm in degrees Celsius to hexadecimal value and click the Commit Changes button. Keep in mind that the alarm trip points are not used until a temperature actually is taken by the chip.

## Detailed Description of Hardware

Figure 8 gives a visual overview of the hardware sections of the DS28EA00EVKIT's EV board. The first component listed in Figure 8 is the RJ11 IN from the PC. Any of the three RJ11s listed on the left-hand side of the  EV  board can be considered the RJ11 IN (1-Wire data) from the PC (if the EV board is configured to be stand-alone, i.e., not broken into separate boards).

The PIO-A and B LEDs are indicators of PIO activity. They can be optionally turned off for testing the parts in parasite-powered mode. The dipswitch blocks shown in  Figure 8 give the user the ability to power and ground certain component pins and to route the PIO chain-mode connections between the DS28EA00s. The PIOs can also be independently exercised outside of chain mode through the pin-input jumpers (jumper to VCC or GND for each I/O pin).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS28EA00 Evaluation Kit

Figure 8. EV Board Component Map

<!-- image -->

Also on the EV board are RJ11 OUT sockets. They are to be used whenever the stand-alone EV board is broken into separate boards and cabled together. The RJ11 OUT socket should be cabled to the next board's RJ11 IN socket.

<!-- image -->

Finally,  three  blank  white  ID  labels  are  located  on  the EV board, one in the lower right-hand corner of each board subsection. They are to be used as writing areas on which to write the CRC of the DS28EA00s' 1-Wire network  addresses  (for  keeping  track  of  which DS28EA00 belongs to which board subsection).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS28EA00 Evaluation Kit

The dipswitch block in Figure 9 routes chain-mode PIO connections between DS28EA00s. It also provides switches for powering the DS28EA00s and their PIO LEDs, enabling the RJ11 OUT sockets for cabling the snapped-apart boards together, and grounding PIO-B pins for chain-mode operation.

Figure 9 shows one of the dipswitch blocks and its silkscreen labels. The dipswitch block has many functions.  See  Table  1  for  a  listing  of  each  switch  with  a brief description of what each switch does. Switches 1 and 2 provide for optionally powering PIO LEDs (it's suggested that users power LEDs for visual indication of  PIO  activity),  and  for  optionally  giving  power  to  the DS28EA00's VCC, switch 7. But, its primary purpose is to  route  PIO  chain-mode connections with switches 3, 4, 5, and 6. Switches 3 and 4, labeled A2 and A3 are used to actually re-route the physical connections between each DS28EA00 I/O pins. Since there are three boards and only two switches, the labels on these two switches could be A1, A2, or A3, with A1 referring to  the  top  board,  A2  the  middle,  and  A3  the  bottom board. However, after snapping and separating the three boards, these switches cease to function as routing switches so switch 5, labeled B EXT becomes

## Table 1. Dipswitch Settings

|   SWITCH | SILKSCREEN LABEL          | DESCRIPTION                                                                                    |
|----------|---------------------------|------------------------------------------------------------------------------------------------|
|        1 | LED A                     | Powers PIO A LED when closed.                                                                  |
|        2 | LED B                     | Powers PIO B LED when closed.                                                                  |
|        3 | Ax (x could be 1, 2 or 3) | Chain-mode connection routing switch.                                                          |
|        4 | Ax (x could be 1, 2 or 3) | Chain-mode connection routing switch.                                                          |
|        5 | B EXT                     | When closed, the switch enables RJ11 OUT for cabling together snapped-apart board subsections. |
|        6 | B GND                     | Grounds PIO B when closed.                                                                     |
|        7 | V CC                      | Powers DS28EA00 when closed.                                                                   |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 9. EV Board Dipswitch

<!-- image -->

important. It enables the EV board's RJ11 OUT sockets, allowing the snapped-apart boards to be cabled together. Finally,  switch  6,  labeled  B  GND  is  used  to ground the PIO-B pin of the associated DS28EA00. This effectively marks the DS28EA00 as the first sensor in the chain-mode sequence.

## DS28EA00 Evaluation Kit

## EV Board Chain-Mode Routing

As mentioned earlier there are two ways to route chainmode connections. The first is done through the dipswitch blocks of the stand-alone, unbroken EV board. See Table 2 for a complete list of possible DS28EA00 sequences and switch positions. Three switches are involved in re-routing the chain-mode sequence. Switch 3 and 4 route the actual PIO connections, and switch 6 optionally grounds PIO-B to indicate the first DS28EA00 in  the  chain.  Every possible chain-mode sequence for the  EV  board is  listed  in  Table  2.  However,  there  is  a method to closing the switches without having to reference the table. The routing switches on each board subsection represent the other two possible subsections  that  could  be  connected.  However, it  represents the  subsection connected previous to the current one in the chain. At most only one switch should be closed for any subsection. For the first subsection in the chain, the two routing switches should remain open.

The second way to route chain-mode connections is to simply break the EV board into its three individual subsections. To route chain-mode connections, then simply requires a re-configuration of the three boards in the desired order. When cabling the three boards, take care that switch 5, B EXT, is closed. Closing switch 5 enables the RJ11 OUT on the board. Do this for each board.

Table 2. Chain-Mode Connection Dipswitch Routing

| SEQUENCE   | SWITCH   | SUBSECTION A1   | SUBSECTION A2   | SUBSECTION A3   |
|------------|----------|-----------------|-----------------|-----------------|
| A1 A2 A3   | SWITCH 3 |                 | CLOSED          |                 |
| A1 A2 A3   | SWITCH 4 |                 |                 | CLOSED          |
| A1 A2 A3   | SWITCH 6 | CLOSED          |                 |                 |
| A1 A3 A2   | SWITCH 3 |                 |                 | CLOSED          |
| A1 A3 A2   | SWITCH 4 |                 | CLOSED          |                 |
| A1 A3 A2   | SWITCH 6 | CLOSED          |                 |                 |
| A2 A1 A3   | SWITCH 3 | CLOSED          |                 | CLOSED          |
| A2 A1 A3   | SWITCH 4 |                 |                 |                 |
| A2 A1 A3   | SWITCH 6 |                 | CLOSED          |                 |
| A2 A3 A1   | SWITCH 3 |                 |                 |                 |
| A2 A3 A1   | SWITCH 4 | CLOSED          |                 | CLOSED          |
| A2 A3 A1   | SWITCH 6 |                 | CLOSED          |                 |
| A3 A1 A2   | SWITCH 3 |                 | CLOSED          |                 |
| A3 A1 A2   | SWITCH 4 | CLOSED          |                 |                 |
| A3 A1 A2   | SWITCH 6 |                 |                 | CLOSED          |
| A3 A2 A1   | SWITCH 3 | CLOSED          |                 |                 |
| A3 A2 A1   | SWITCH 4 |                 | CLOSED          |                 |
| A3 A2 A1   | SWITCH 6 |                 |                 | CLOSED          |

Note: The open or 'nonconducting' side of the dipswitches is to the left. Closed or 'conducting' is to the right. 'Open' is indicated by blank fields.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS28EA00 Evaluation Kit

Figure 10. EV Board Schematics

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS28EA00 Evaluation Kit

<!-- image -->

Figure 11. EV Board Layout Top

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## DS28EA00 Evaluation Kit

Figure 12. EV Board Layout Bottom

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## DS28EA00 Evaluation Kit

Figure 13. EV Board Layout Composite

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.