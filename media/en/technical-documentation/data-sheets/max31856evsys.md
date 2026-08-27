<!-- lastmod 2022-08-03 -->
## MAX31856 Evaluation System

## General Description

The  MAX31856  evaluation  system  (EV  system)  provides the  hardware  and  software  necessary  to  evaluate  the MAX31856 thermocouple-to-digital converter.

The EV system includes the MAX31856PMB1 peripheral module with a Pmod TM -compatible connector for SPI communication.  The  system  also  includes  the  USB2PMB1 adapter board for communication with the software and a K-type thermocouple for temperature sensing. Other thermocouple types (J, N, R, S, T, E, and B) can be evaluated with a user-supplied thermocouple.

## EV System Contents

- MAX31856PMB1 including the MAX31856
- USB2PMB1 Adapter Board
- Mini-USB Cable
- K-Type Thermocouple

## MAX31856 EV System Photo

<!-- image -->

Pmod is a trademark of Digilent Inc.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Easy Evaluation of the MAX31856
- Includes K-Type Thermocouple
- USB Power and Interface with USB2PMB1 Board
- Windows XP ® , Windows ®  7, Windows 8.1-Compatible Software
- 12-Pin Pmod-Compatible Connector (SPI)
- Fully Assembled and Tested
- Proven PCB Layout
- RoHS Compliant

## MAX31856 EV Kit Files

| FILE                      | DESCRIPTION         |
|---------------------------|---------------------|
| MAX31856EVSystemSetup.EXE | Application Program |

Note:

The EXE is downloaded as a .ZIP file.

Evaluates: MAX31856

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX31856 Evaluation System

## Quick Start

## Required Equipment

- MAX31856PMB1 peripheral module
- USB2PMB1 adapter board
- Mini-USB cable
- K-Type thermocouple
- Screw driver
- Windows XP, Windows 7, or Windows 8.1 PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

Follow the steps below to get started measuring temperature with a K-type thermocouple:

- 1) Visit www.maximintegrated.com/evkitsoftware to download the  latest  version  of  the  EV  system  software, MAX31856EVSystemSetup.ZIP.
- 2) Save the EV system software to a temporary folder. Unzip the .ZIP file and double-click the .EXE file to run the installer. A message box asking Do you want  to allow the following program to make changes to this computer? may appear. If so, click Yes .
- 3) The installer includes the drivers for the hardware and software. Follow the instructions on the installer and once complete, click Finish .  The  default  location  of the software is in the program files directory.
- 4) Connect  the K-type thermocouple  to J1 of the MAX31856PMB1  with  the  yellow  wire  on  the  plus side.
- 5) Connect the MAX31856PMB1 Pmod connector H1 to the connector on USB2PMB1.
- 6) Connect the USB2PMB1 to the PC with the Mini-USB cable.  Windows  should  automatically  recognize  the device and display a message near the System Icon menu indicating that the hardware is ready to use.
- 7) Once the hardware is ready to use, launch the software.  The  status  bar  in  the  GUI  should  display USB2PMB1  Hardware  Connected in  the  bottom right-hand  corner.  Go  to  the Configuration tab  to select the desired configuration and then check the Auto Convert checkbox.
- 8) Go back to the Status tab  and click Read Once or Auto Polling to read the temperatures.

Evaluates: MAX31856

## Detailed Description of Software

## Software Startup

When the software starts, it searches for a USB2PMB1 and  connects  to  the  first  one  found,  then  displays USB2PMB1 Hardware Connected in  the  bottom  righthand  corner.    If  hardware  is  not  found,  the  software displays USB2PMB1 not Detected and  starts  in  offline mode.

## Offline Mode

Offline mode is entered when the software is started without hardware connected. In this mode, the Configuration tab allows the user to read/write to registers in a virtual device. These register values can be saved in a configuration file that can be loaded at a later time. See the Save/ Load Configuration section for more details. To exit offline mode, connect the hardware to the PC and then search and connect to the hardware using the Device menu. See the Connect To Hardware section for details.

## Save/Load Configuration

In  the File menu,  there  are  options  to  save  or  load  a configuration  file. Save  Config  As.. and Save  Config read  the  registers  from  the  connected  MAX31856  and saves these values to an XML file. If the software is in offline mode, then  the current register values displayed on the Configuration tab are saved to the XML file. Load Config gets register values from an XML file and writes them to the MAX31856 if connected. In offline mode, the register values in the XML are saved to the virtual device and displayed in the software.

## Connect To Hardware

The Device menu has options to search and connect to the hardware. Use the Search for USB2PMB1 option to search for the USB2PMB1 modules connected to the PC. If modules are found, the serial numbers of the modules are listed in the USB2PMB1s menu item. Select the serial number in the USB2PMB1s list  to  connect the software to communicate with that module. The software can only communicate to one module at a time. Selecting another serial number in the list disconnects the current module and then connects the newly selected module.

│

## MAX31856 Evaluation System

## Status Tab

The Status tab (Figure 1) displays the current temperature  conversion  and  the  fault  status.  The Read  Once button  reads  the  cold  junction  temperature,  linearized thermocouple temperature, and the fault status. The data from the read is shown in the Temperatures and Fault Status group  boxes.  If  the  user  does  not  want  to  read all  three  values,  the  data  that  is  read  can  be  selected with  the Cold  Junction , Linearized  Thermocouple , and Fault  Status checkboxes. For example, if only the linearized thermocouple temperature is of interest to read, then check the Linearized Thermocouple checkbox and deselect the other two checkboxes. The next time Read Once is  clicked,  only  the  linearized  thermocouple  temperature  is  read.  To  read  continuously,  select  the Auto Polling checkbox. This reads at a rate selected from the Polling Rate list in the Options menu. Auto Polling displays the temperature data in the graph. See the Graph section for more details. To stop auto polling, deselect the Auto Polling checkbox.

The  status  of  all  the  faults  are  displayed  in  the Fault Status group  box.  If  a  fault  occurs,  the  color  indicator turns red and the status bar at the bottom of the window displays FAULT . To clear the fault in interrupt mode, click the Clear Faults button. When the fault is removed, the color  indicator  turns  green  and  the  status  bar  displays GOOD . If the fault still exists, the color indicator turns red again and displays FAULT in the status bar.

## Graph

To  collect  data  in  the  graph,  select  the Auto  Polling checkbox.  To  show/hide  the  data  in  the  graph,  check/ uncheck  the Display  TC  Temp or Display  CJ  Temp checkboxes  below  the  graph.  To  save  the  data  in  the graph, go to the Options menu and select Save Graph to save the data to a .CSV file. The Options menu also has the Clear Graph option to remove all the data in the graph.  Data  in  the  graph  is  automatically  cleared  when auto polling is restarted.

## Configuration Tab

The Configuration tab  (Figure  2)  allows  the  user  to select  different  options  for  the  device.  All  registers  are read when the tab is selected. To read the registers again, click the Read All button on the right-hand side. The controls on the left side provide an easy way to view and set the  registers.  When  an  option  is  changed  on  a  control, the corresponding register is written and the Status Log displays  the  written  raw  hex  value.  Registers  can  also be  read/written  in  raw  hex  values  using  the Registers table , on the right. To write a hex value double-click on the Value cell of the register to change and enter a hex value. The value is written by pressing Enter on the keyboard or selecting another cell or control in the GUI. The Bit Description section shows the format of the register selected in the Registers table. Refer to the MAX31856 IC datasheet for more details of the configuration settings.

## Conversions

To start continuous conversions, check the Auto Convert checkbox. The results of the conversions can be read by clicking the Read Once button or checking Auto Polling on the Status tab. For a single conversion, uncheck Auto Convert and click the One Shot button.

## Cold-Junction Temperature

The  internal  cold-junction  temperature  sensor  can  be disabled by selecting the Disable Cold Junction Sense checkbox. When the internal cold-junction sensor is disabled,  a  cold-junction  temperature  value  can  be  written to  the  register  by  entering  the  new  value  into  the Cold Junction  Temp numeric  box. All  new  linearization  and cold-junction  compensation  calculations  will  be  done using this value.

## Status Log

The status log group box below the tabs displays all the actions the GUI performs. When an action is requested, the log confirms the action or shows an error message. The log can be cleared by pressing the Clear Log button.

Figure 1. MAX31856PMB1 Software (Status Tab)

<!-- image -->

Figure 2. MAX31856PMB1 Software (Configuration Tab)

<!-- image -->

## MAX31856 Evaluation System

## Detailed Description of Hardware

The  MAX31856  EV  System  hardware  provides  everything  needed  to  evaluate  a  K-type  thermocouple.  Other thermocouple types can also be evaluated with a usersupplied thermocouple. The MAX31856PMB includes the MAX31856 with a screw terminal for the thermocouple. The USB2PMB1 module provides the USB-to-SPI interface for communication with the software and it also provides USB power to the Pmod.

## Pmod Connector

The  MAX31856PMB1  Pmod  can  plug  directly  into  a SPI-configured,  Pmod-compatible  port  through  H1. This connector  supports  the  MAX31856  4-wire  SPI  interface and also provides power to the device through the 3.3V pin. For more information on the SPI protocol, refer to the MAX31856 IC data  sheet.  The DRDY and FAULT pins can also be monitored through H1. See Figure 3 for the H1 pinout.

## Thermocouple

A thermocouple is connected to the MAX31856 through the  screw  terminal  J1  on  the  MAX31856PMB1  Pmod. The MAX31856 supports the following thermocouples: K, J, N, R, S, T, E, and B. To connect a thermocouple, insert the thermocouple wires into the screw terminal, ensuring

## Table 1. Troubleshooting

| SYMPTOM                                           | CHECK                   | SOLUTION                                                                                                                                                                                       |
|---------------------------------------------------|-------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GUI says USB2PMB1 not Detected!                   | USB on USB2PMB1         | Exit the GUI and check the USB connection on the USB2PMB1 board. Connect to another USB port on the PC and launch the GUI. If the GUI still does not find the hardware, try another USB cable. |
| Temperature changes in the wrong direction        | J1 on MAX31856PMB1      | The thermocouple may be connected backwards to J1. Disconnect the thermocouple from J1 and reconnect with the wires switched.                                                                  |
| Data is read back as all FFs                      | H1 on MAX31856PMB1      | Check that the pins on H1 are properly connected to the female header on USB2PMB1.                                                                                                             |
| FAULT LED does not light up when there is a fault | FAULT Pin Mask settings | On the Configuration tab in the FAULT Pin Mask group box, uncheck the fault occurring to see the FAULT LED turn on.                                                                            |

│

## Evaluates: MAX31856

the correct polarity, and then tighten the screws. For the K-type thermocouple provided, the yellow wire is the positive side and connects to pin 2 of J1.

In the software, the thermocouple type must be selected using  the Thermocouple  Type drop-down  list  on  the Configuration tab.  If  the  thermocouple  connected  cannot be found in the list, select Volts (Gain = 8) or Volts (Gain = 32) to  obtain  the  voltage  conversions.  Refer  to the MAX31856 IC data sheet for more details on unsupported thermocouples.

## Fault LED

The FAULT LED  reflects  the  status  of  the  MAX31856 FAULT pin. When the LED is on, the FAULT pin is active indicating there is a fault occurring. Read the Fault Status register on the Status tab to see which fault is occurring. On power-up, the FAULT pin is masked and does not indicate faults. To unmask the FAULT pin  and see the LED turn on during a fault, uncheck the fault in the FAULT Pin Mask group box on the Configuration tab.

## Troubleshooting

All efforts were made to ensure that each kit works on the first try, right out the box. If a problem is suspected, see Table 1 to help troubleshoot the issue.

Figure 3. MAX31856PMB1 Schematic

<!-- image -->

Figure 4. MAX31856PMB1 PCB Layout-Top

<!-- image -->

Figure 5. MAX31856PMB1 PCB Layout-Bottom

<!-- image -->

## MAX31856 Evaluation System

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| C1, C2        |     2 | 0.1µF ceramic capacitors (0603)                            |
| C3, C4, C5    |     3 | 0.01µF ceramic capacitors (0603)                           |
| D1            |     1 | Red LED (0805)                                             |
| H1            |     1 | 12-pin (2x6) right-angle header, 2.54mm pitch              |
| J1            |     1 | 2-pin screw terminal, 2.54mm pitch Phoenix Contact 1725656 |
| R1            |     1 | 20kΩ ±1% resistor (0603)                                   |

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX31856EVSYS# | EV System |

#Denotes RoHS compliant.

Evaluates: MAX31856

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| R2, R3        |     2 | 0Ω ±1% resistors (0603)                                         |
| R4            |     1 | 330Ω ±1% resistor (0603)                                        |
| R5-R10        |     6 | 150Ω ±1% resistors (0603)                                       |
| U1            |     1 | Thermocouple-to-digital converter (14 TSSOP) Maxim MAX31856MUD+ |
| -             |     1 | PCB: MAX31856PMB1#                                              |
| -             |     1 | PCB: USB2PMB1#                                                  |
| -             |     1 | K-type thermocouple Omega 5TC-GG-K-24-36                        |
| -             |     1 | Mini-USB cable                                                  |

│

## MAX31856 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX31856