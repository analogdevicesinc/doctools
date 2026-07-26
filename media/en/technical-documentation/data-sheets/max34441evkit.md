<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

## General Description

The MAX34441 evaluation kit (EV kit) simplifies evaluation  of  the  MAX34441 and MAX34440 PMBus™ powersupply  managers.  The  MAX34440  controls  six  power supplies,  whereas  the  MAX34441  controls  five  power supplies plus a fan. The MAX34441 EV kit ships with the MAX34441 installed and a fan. The fully assembled and tested  EV  kit  includes  five  power  supplies  that  can  be sequenced, monitored, and margined by the MAX34441 or MAX34440 and also includes a fan for closed-loop fan control using the MAX34441.

Ordering Information appears at end of data sheet.

## Features

- S Easy Evaluation of the MAX34441 or MAX34440
- S Fully Assembled and Tested
- S USB-Controlled GUI
- S 5 Channels of Power Supply
- S One Fan Control Channel

## EV Kit Contents

- S MAX34441 EV Kit Board Including Fan
- S DS3900 USB to I 2 C Board
- S CD with Required Documentation and Software

Figure 1. MAX34441 EV Kit Board

<!-- image -->

PMBus is a trademark of SMIF, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

## MAX34441 EV Kit Files

The following files are required to set up and evaluate the MAX34441 or the MAX34440 using the MAX34441 EV kit. These files are included on the CD that is provided with the MAX34441 EV kit. For the latest version of these files, go to www.maxim-ic.com/evkitsoftware .

| FILE                   | DESCRIPTION         |
|------------------------|---------------------|
| MAX3444x EVKit GUI.EXE | Application program |
| ds3900c.INF            | USB driver file     |

## Equipment Needed

The following equipment is required to use the MAX34441 EV kit:

- 3.3V (1A) DC power supply
- 12V  (500mA)  DC  power  supply  (not  required  if  fan operation is not needed)
- PC  (Windows ®   2000,  Windows  XP ®   or  Windows  7 operating system) with an available USB port

## Quick Start

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## DS3900 USB to I 2 C Setup Procedure (Required Procedure)

Note: The DS3900 is the small daughter card located on top of the EV kit. It converts USB to I 2 C and allows the GUI to communicate to the MAX34441. It  is  important when  using  the  MAX34441  EV  kit  for  the  very  first time to install the device driver prior to connecting.

<!-- image -->

Installing the DS3900 USB device driver is simple.

- 1)  Locate the ds3900c.INF file.  It  can  be  found  on  the CD that was included with the EV Kit.
- 2)  Copy the ds3900c.INF file  to  a  known location on the PC.
- 3)  Connect the DS3900 to the PC using a USB cable.
4. a.)   The  DS3900  does  not  need  to  be  removed  from the MAX34441 EV kit.
5. b.)   Power  does  not  need  to  be  supplied  to  the MAX34441 EV kit at this time. The PC's USB port will power the DS3900.
- 4)  Once  the  DS3900  is  connected  to  the  PC,  the Windows operating system should recognize that new hardware has been attached and begin a new hardware wizard.
- 5)  Follow  the  wizard's  instructions  and  point  it  to  the ds3900c.INF that  was  copied  to  the  PC.  The  driver installation  process varies slightly depending on the operating system.

## MAX34441 EV Kit Startup

- 1)  Attach the GND (black connecter) first ,  followed  by the  +3.3V  (red  connector)  and  +12V  (yellow  connector)  power  supplies.  Then  turn  the  power  on. Either supply can be turned on first (no sequencing is  required).  The  +12V  supply  is  not  required  if  fan operation is not needed.
- 2)  After  both  supplies  are  on,  the  MAX34441  EV  kit automatically sequences on the five on-board power supplies and turns the fan on.
- 3)  If not already attached, attach a USB cable from the DS3900  to  the  PC.  Then  install  the  DS3900  on  the MAX34441 EV kit.
- 4)  Launch the MAX34441 EV kit GUI. When the GUI is loaded, it initially sets CONTROL low, sequencing off the power supplies.
- 5)  The GUI can now be used to evaluate the MAX34441.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

## MAX34441 EV Kit GUI

## General Tab

The General tab,  the  main  window  of  the  evaluation software (Figure 2), includes a real-time monitor for the MAX34441 and an interface to read or write PMBus commands. To read all the data displayed in the GUI, click the Read Once button,  or  click Start  Monitor for  realtime monitoring. The data can be displayed as either the raw  hexadecimal  value  received  or  can  be  converted to  DIRECT  format  by  the  GUI.  The  data  format  display option is selected using the radio buttons in the Select display group box at the top left of the GUI.

To  turn  on  the  power  supplies,  the  default  setup  of  the MAX34441 EV kit requires that the CONTROL pin be set high. The right side of the GUI has radio buttons to set the CONTROL pin high or low. Once CONTROL is set high, the power supplies begin sequencing on.

At the bottom of the GUI is a section that allows for reading or writing to a single PMBus command. To use this section, the correct page must first be selected from the Select a Page drop-down list. When a page is selected, the  commands  shown  in  the  command  drop-down  list are  filtered  to  only  reflect  PMBus  commands  available for  the  selected  page.  When  a Read is  performed,  the PMBus command data is displayed in the Data box. This data  is  only  displayed  as  a  hexadecimal  value,  not  in DIRECT format. Clicking the Write button writes the data in  the Data box to the PMBus command. Note that the GUI does not error check the data being written to the PMBus commands.

<!-- image -->

Figure 2. MAX34441 EV Kit GUI General Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

## PMBus Tab

The PMBus tab (Figure 3) provides a generic interface for  a  user  to  read  or  write  PMBus  commands  to  the MAX34441  or  any  other  PMBus  device  that  is  on  the bus.  At  the  top  of  the  page  in  the Find  PMBus Slave Addresses group box is a Find button that can be used to detect the address of all slave addresses on the bus. The  desired  slave  address  to  communicate  with  then needs to be entered into the Software Slave Address box,  followed  by  clicking  the Change button.  A  page to write to can then be selected. The command section allows  writing  to  any  command  (00h-FFh)  by  entering the  command  number.  The  number  of  bytes  or  words can also be selected to be between 1 and 16. Data can then be read or written by clicking on the Read or Write button.

## File Tab

The File tab  provides  a  tool  to  read  or  write  all  the MAX34441 configuration settings to a text file. By selecting Dump ,  all  the  current  PMBus  configuration  commands  are  dumped  to  a  text  file.  The  configuration settings in the file can then be edited using a text editor or Microsoft Excel ® . Clicking Fill Device then writes this new  configuration  file  to  the  MAX34441.  The Machine Code Dump button produces an Intel hex file. This file can be easily parsed by a PC for loading the MAX34441 configurations in a production environment.

<!-- image -->

Figure 3. MAX34441 EV Kit GUI PMBus Tab

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

<!-- image -->

Figure 4. MAX34441 EV Kit Schematics (Sheet 1 of 1)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

<!-- image -->

Figure 5. MAX34441 EV Kit Schematics (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

Figure 6. MAX34441 EV Kit Schematics (Sheet 3 of 3)

<!-- image -->

## Table 1. Jumper Descriptions

| NAME   | FUNCTION                                                                                                                                                                                                           |
|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1     | Allows users to connect their remote diode.                                                                                                                                                                        |
| Jn01   | Connects the channel n MAX15029 output to MAX34441 ADC when soldered.                                                                                                                                              |
| Jn02   | Connects the filtered PWMn signal to the channel n MAX15029 FB node when soldered.                                                                                                                                 |
| Jn03   | Connects the PSENn signal to the channel n MAX15029 EN signal when soldered.                                                                                                                                       |
| Jn04   | Connects the 10 W load to the respective power supply.                                                                                                                                                             |
| Jn05   | Provides access to each channel's ADC, PWM, and PSEN signals to connect to a user's power supply if the MAX15029 is not used. If using a different power supply, then Jn01, Jn02, and Jn03 should be disconnected. |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit Evaluates: MAX34441 and MAX34440

## Component List

| DESIGNATOR                                                                   | QTY   | DESCRIPTION                                                          |
|------------------------------------------------------------------------------|-------|----------------------------------------------------------------------|
| R3, R4, R005, R5, R15, R16, R33, R105, R205, R305, R405                      | 11    | 100k I resistors                                                     |
| R004, R6, R7, R8, R9, R10, R11, R12, R25, R28, R29, R104,R204,R304,R401,R404 | 16    | 0 I resistors                                                        |
| R006, R009, R106, R109, R206, R209, R306, R309, R402, R406, R409             | 11    | 10k I resistors                                                      |
| R008, R108, R208, R308, R408                                                 | 5     | 33k I resistors                                                      |
| R010, R110, R210, R310, R410                                                 | 5     | 10 I , 3W resistors                                                  |
| R011, R27, R111, R211, R311, R411                                            | 6     | 10 I resistors                                                       |
| R013, R30, R31, R113, R213, R313, R413                                       | 7     | 1.2k I resistors                                                     |
| R17                                                                          | 1     | 100 I resistor                                                       |
| R26                                                                          | 1     | 1k I resistor                                                        |
| R34                                                                          | 1     | 453k I resistor                                                      |
| R101                                                                         | 1     | 8.06k I resistor                                                     |
| R102                                                                         | 1     | 26.1k I resistor                                                     |
| R201                                                                         | 1     | 4.99k I resistor                                                     |
| R202                                                                         | 1     | 20k I resistor                                                       |
| R301                                                                         | 1     | 2k I resistor                                                        |
| R302                                                                         | 1     | 14k I resistor                                                       |
| S1                                                                           | 1     | Switch                                                               |
| TESTPOINTS                                                                   | 52    | Testpoints                                                           |
| U001, U101, U201, U301, U401                                                 | 5     | Current-sense amp (5 SOT23) Maxim MAX9938FEUK+                       |
| U1                                                                           | 1     | Power-supply manager and fan controller (40 TQFN) Maxim MAX34441ETL+ |
| U002, U102, U202, U302, U402                                                 | 5     | SPDT analog switch (6 SC70) Maxim MAX4599EXT+                        |
| U3                                                                           | 1     | Serial communications module for EV kits Maxim DS3900K#              |
| U003, U103, U203, U303, U403                                                 | 5     | Low dropout regulator (10 TDFN-EP) Maxim MAX15029ATB+                |
| U4                                                                           | 1     | Digital thermometer and thermostat (8 SO) Maxim DS75LVS+             |
| -                                                                            | -     | PCB: MAX3441 EV KIT, REV A                                           |

| DESIGNATION                                                                                                                                        |   QTY | DESCRIPTION          |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------------|
| C1, C002, C3, C005, C007, C008, C12, C13, C17, C20, C102, C105, C107, C108, C202, C205, C207, C208, C302, C305, C307, C308, C402, C405, C407, C408 |    26 | 0.1µF capacitors     |
| C001, C004, C009, C9, C101, C104, C109, C201, C204, C209, C301, C304, C309, C401, C404, C409, R13, R24, R32                                        |    19 | Do not populate      |
| C003, C5, C006, C7, C22, C23, C103, C106, C203, C206, C303, C306, C403, C406                                                                       |    14 | 1.0µF capacitors     |
| C6, C8, C11, C16, C18, C21, C24                                                                                                                    |     7 | 0.01µF capacitors    |
| C10                                                                                                                                                |     1 | 2.2nF capacitor      |
| C14, C15, C19                                                                                                                                      |     3 | 10µF capacitors      |
| C25                                                                                                                                                |     1 | 47µF capacitor       |
| C26, C27, C28, C29                                                                                                                                 |     4 | Do not populate      |
| D1                                                                                                                                                 |     1 | FAULT                |
| D001, D3, D101, D201, D301, D401                                                                                                                   |     6 | LEDs                 |
| D2                                                                                                                                                 |     1 | ALERT                |
| J1, J5                                                                                                                                             |     2 | CON2                 |
| J001, J002, J003, J101, J102, J103, J201, J202, J203, J301, J302, J303, J401, J402, J403                                                           |    15 | SOLDER_BRIDGE2       |
| J2                                                                                                                                                 |     1 | +12V                 |
| J3                                                                                                                                                 |     1 | +3.3V                |
| J004, J104, J204, J304, J404                                                                                                                       |     5 | 1X2_JMPR             |
| J4                                                                                                                                                 |     1 | GND                  |
| J005, J105, J205, J305, J405                                                                                                                       |     5 | CON3                 |
| M1                                                                                                                                                 |     1 | 4WIRE_FAN            |
| Q1                                                                                                                                                 |     1 | MMBT3904             |
| R1, R2, R007, R012, R14, R19, R20, R21, R22, R23, R107, R112, R207, R212, R307, R312, R407, R412                                                   |    18 | 4.7k I resistors     |
| R001                                                                                                                                               |     1 | 15k I resistor       |
| R002                                                                                                                                               |     1 | 40.2k I resistors    |
| R003, R103, R203, R303, R403                                                                                                                       |     5 | 20m I ± 1% resistors |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

<!-- image -->

Figure 7. MAX34441 EV Kit Top Assembly Drawing

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

<!-- image -->

Figure 8. MAX34441 EV Kit Top Electrical Layout

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

<!-- image -->

Figure 9. MAX34441 EV Kit Bottom Assembly Drawing

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

<!-- image -->

Figure 10. MAX34441 EV Kit Bottom Electrical Layout

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX34441EVKIT# | EV Kit |

# Denotes a RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

## MAX34441 Evaluation Kit

## Evaluates: MAX34441 and MAX34440

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 11/11           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.