<!-- lastmod 2022-08-02 -->
<!-- image -->

Simplifying System Integration TM

## OMU1-S-WW Demo Unit User Manual

November 6, 2009 Rev. 1.0 UM\_6612\_012

© 2009 Teridian Semiconductor Corporation.  All rights reserved. Teridian Semiconductor Corporation is a registered trademark of Teridian Semiconductor Corporation. Simplifying System Integration is a trademark of Teridian Semiconductor Corporation. Microsoft, Windows, Vista, and Excel are registered trademarks of Microsoft Corporation. CA51 is a trademark of Keil, An ARM ® Company. Signum Systems is a trademark of Signum Systems Corp. LabVIEW, NI and NI-VISA are trademarks of National Instruments.

All other trademarks are the property of their respective owners.

Teridian Semiconductor Corporation makes no warranty for the use of its products, other than expressly contained in the Company's warranty detailed in the Teridian Semiconductor Corporation standard Terms and Conditions.  The company assumes no responsibility for any errors which may appear in this document, reserves the right to change devices or specifications detailed herein at any time without notice and does not make any commitment to update the information contained herein.  Accordingly, the reader is cautioned to verify that this document is current by comparing it to the latest version on http://www.teridian.com or by checking with your sales representative.

Teridian Semiconductor Corp., 6440 Oak Canyon, Suite 100, Irvine, CA 92618 TEL (714) 508-8800, FAX (714) 508-8877, http://www.teridian.com

## Table of Contents

| 1 Introduction ...................................................................................................................................5                                                                                                                                             | 1 Introduction ...................................................................................................................................5                                                                                                                                             | 1 Introduction ...................................................................................................................................5   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Package                                                                                                                                                                                                                                                                                         | 1.1 Contents                                                                                                                                                                                                                                                                                    | ................................................................................................................5                                     |
| System                                                                                                                                                                                                                                                                                          | 1.2                                                                                                                                                                                                                                                                                             | Requirements...........................................................................................................5                              |
| Safety                                                                                                                                                                                                                                                                                          | 1.3 and ESD                                                                                                                                                                                                                                                                                     | Notes..........................................................................................................5                                      |
| 1.4                                                                                                                                                                                                                                                                                             | Firmware Demo Code                                                                                                                                                                                                                                                                              | Introduction........................................................................................6                                                 |
|                                                                                                                                                                                                                                                                                                 | 1.5 Testing the Demo Unit Prior to                                                                                                                                                                                                                                                              | Shipping................................................................................6                                                             |
| 2 Installation .....................................................................................................................................7                                                                                                                                           | 2 Installation .....................................................................................................................................7                                                                                                                                           | 2 Installation .....................................................................................................................................7 |
| 2.1                                                                                                                                                                                                                                                                                             | USB Driver Installation..........................................................................................................7                                                                                                                                                              |                                                                                                                                                       |
|                                                                                                                                                                                                                                                                                                 | 2.2 Confirm Port                                                                                                                                                                                                                                                                                | Mapping..................................................................................................8                                            |
| 2.3                                                                                                                                                                                                                                                                                             | COM Basic Connection                                                                                                                                                                                                                                                                            | Setup........................................................................................................9                                        |
| Verify                                                                                                                                                                                                                                                                                          | 2.4 Serial Connection to the                                                                                                                                                                                                                                                                    | PC......................................................................................10                                                            |
| NI™                                                                                                                                                                                                                                                                                             | 2.5 RunTime Installation                                                                                                                                                                                                                                                                        | ...................................................................................................12                                                 |
| 2.6                                                                                                                                                                                                                                                                                             | Install LabWindows™ XP Pro Update .................................................................................15                                                                                                                                                                           |                                                                                                                                                       |
| 3                                                                                                                                                                                                                                                                                               | Operating the Dashboard GUI.....................................................................................................18                                                                                                                                                              | Operating the Dashboard GUI.....................................................................................................18                    |
|                                                                                                                                                                                                                                                                                                 | 3.1 Port Selection                                                                                                                                                                                                                                                                              | .....................................................................................................................18                               |
| Creating                                                                                                                                                                                                                                                                                        | 3.2 a Measurement Data Log                                                                                                                                                                                                                                                                      | File...............................................................................19                                                                 |
| Selecting                                                                                                                                                                                                                                                                                       | 3.3 the Power Display Parameter                                                                                                                                                                                                                                                                 | ..............................................................................19                                                                      |
| Selecting                                                                                                                                                                                                                                                                                       | 3.4 the Display                                                                                                                                                                                                                                                                                 | Scales...............................................................................................20                                               |
| Resetting                                                                                                                                                                                                                                                                                       | 3.5 the Min and Max Indicators to Their                                                                                                                                                                                                                                                         | Current Values.............................................20                                                                                         |
| Begin                                                                                                                                                                                                                                                                                           | 3.6 Tracking Minimum and Maximum Conditions                                                                                                                                                                                                                                                     | ............................................................21                                                                                        |
| Selecting                                                                                                                                                                                                                                                                                       | 3.7 Outlet1                                                                                                                                                                                                                                                                                     | ................................................................................................................21                                    |
| Selecting                                                                                                                                                                                                                                                                                       | 3.8 Wide Band or Narrow Band                                                                                                                                                                                                                                                                    | Measurement...........................................................22                                                                              |
|                                                                                                                                                                                                                                                                                                 | 3.9 Selecting the Sample                                                                                                                                                                                                                                                                        | Interval..............................................................................................22                                              |
|                                                                                                                                                                                                                                                                                                 | 3.10 Alarm                                                                                                                                                                                                                                                                                      | Status.......................................................................................................................22                       |
| Neutral                                                                                                                                                                                                                                                                                         | 3.11 Voltage                                                                                                                                                                                                                                                                                    | Alarm.........................................................................................................23                                      |
| Line                                                                                                                                                                                                                                                                                            | 3.12                                                                                                                                                                                                                                                                                            | Frequency...................................................................................................................23                        |
|                                                                                                                                                                                                                                                                                                 | 3.13 Accumulated Energy Usage and Expense Tracking                                                                                                                                                                                                                                              | ............................................................24                                                                                        |
| Displaying                                                                                                                                                                                                                                                                                      | 3.14 Narrowband and Wideband Values                                                                                                                                                                                                                                                             | Simultaneously ...........................................24                                                                                          |
| Using                                                                                                                                                                                                                                                                                           | 3.15 the Parameter Graph                                                                                                                                                                                                                                                                        | ................................................................................................25                                                    |
| Setting                                                                                                                                                                                                                                                                                         | 3.16 Alarm Status                                                                                                                                                                                                                                                                               | Thresholds.........................................................................................25                                                 |
|                                                                                                                                                                                                                                                                                                 | 3.17                                                                                                                                                                                                                                                                                            |                                                                                                                                                       |
| 3.18                                                                                                                                                                                                                                                                                            | Relay Configuration Controls ..............................................................................................26 Log File Import to Excel ......................................................................................................27                                 |                                                                                                                                                       |
| 4                                                                                                                                                                                                                                                                                               | Ordering Information...................................................................................................................30                                                                                                                                                       |                                                                                                                                                       |
| 5 Included                                                                                                                                                                                                                                                                                      | Documentation.............................................................................................................30                                                                                                                                                                    |                                                                                                                                                       |
| Contact Information.....................................................................................................................30 Revision History..................................................................................................................................30 | Contact Information.....................................................................................................................30 Revision History..................................................................................................................................30 |                                                                                                                                                       |

## Figures

| Figure 1: Example OMU1 Connections....................................................................................................9   |
|-------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 2: HyperTerminal Window with the Disconnect Button.................................................................11              |
| Tables                                                                                                                                    |
| Table 1: COM Port Setup Parameters....................................................................................................10  |

## 1 Introduction

The Outlet Measurement Unit Model OMU1-S-WW (OMU1) is a low-cost power monitor employing the Teridian 78M6612 SOC, a single-phase power and energy measurement IC supporting up to two outlets. The 78M6612 IC monitors the AC line voltages and load current.  The embedded demo firmware calculates the RMS line voltage and RMS load current, Watts, VA, VAR and power factor for a single outlet.  Access to real-time data in the 78M6612 is available via a serial interface to a PC using a Command Line Interface (CLI).  A USB interface on the OMU1-S-WW provides the serial connection and DC power to the 78M6612.

Included with the OMU1-S-WW is a Windows  based Graphical User Interface (GUI) for simplified access to the following measurement data and controls:

- Power, current, voltage and power factor indicator dials
- Adjustable display scales
- Minimum and peak parameter tracking
- Selectable strip chart display format
- Narrow-band versus wide-band measurement
- Selectable sample size averaging
- Accumulated energy usage and expense tracking
- Line frequency
- Alarm indicators
- Programmable alarm thresholds
- Data log to file

Alternatively, the user can directly query the device with the command set using HyperTerminal and the provided 6612\_OMU\_S2\_URT\_V1\_13 Firmware Description Document .

## 1.1 Package Contents

The OMU1 Demo Kit includes:

- OMU1-S-WW module
- USB Cable Assembly USB A-B 28/24 1.8M (Tyco/Amp 1487588-3)
- CD with OMU Software and Documentation

## 1.2 System Requirements

The OMU1 GUI requires use of a PC with the following capabilities:

- PC (1 GHz, 1 GB) with Microsoft ® Windows XP or Win2000, equipped with USB port.
- Minimum 1024 x 768 video display resolution.

## 1.3 Safety and ESD Notes

<!-- image -->

<!-- image -->

## EXERCISE CAUTION WHEN LIVE AC VOLTAGES ARE PRESENT!

Standard ESD precautions must be taken when handling electronic equipment.  The OMU1 contains ESD protected interfaces.

<!-- image -->

## 1.4 Firmware Demo Code Introduction

The Firmware Demo Code provides the following features:

- Basic energy measurement data such as Watts, Volts, current, VAR, VA, phase angle, power factor, accumulated energy, frequency, date/time, and various alarm statuses.
- Control of alarm thresholds, calibration coefficients, temperature compensation, etc.

There are two means to facilitate performance evaluation between the user at the PC host and the firmware code in the OMU1 Demo Unit:

- The Graphical User Interface (GUI).  This document describes the installation and use of the Windows based GUI.
- The Command Line Interface (CLI) via HyperTerminal or comparable terminal emulator on a different operating system. For information about the CLI, see the 6612\_OMU\_S2\_URT\_V1\_13 Firmware Description Document .

The OMU1 Demo Unit is shipped with Demo Code Revision 1.13 or later loaded in the 78M6612 chip and included on the CD. The code revision can be verified by entering the command &gt;i via the command line interface.  Firmware for the Demo Unit can be updated using either the Teridian TFP1 or an in-circuit emulator such as the Signum Systems™ ADM-51 (http://www.signum.com/Signum.htm).

The board components and firmware settings are designed to operate with the following nominal AC electrical ranges:

| Voltage     | Current     | Line Frequency   |
|-------------|-------------|------------------|
| 110-240 VAC | 10 mA - 20A | 46-64 Hz         |

## 1.5 Testing the Demo Unit Prior to Shipping

Before every OMU1 Demo Unit is shipped, the following procedures have been performed at the factory:

- Full Calibration - Precise energy source equipment is used to calibrate the current and voltage.  The temperature is also calibrated at the same time.
- Accuracy Test - This 'bench' level test ensures the energy measurement accuracy is within +/-0.5%.

## 2 Installation

## 2.1 USB Driver Installation

The OMU1-S-WW module contains an optically isolated USB interface for serial communications with a PC.  The FTDI USB controller IC FT232RL performs the USB functions.  The FTDI Windows driver presents a virtual COM port for enabling serial communications.  Control of the OMU1-S-WW module can be managed using either a terminal emulation program or using the supplied Windows Dashboard GUI. The FTDI Windows driver is a certified driver for Windows 2000 and XP.

1. Upon attaching the OMU1-S-WW module to the PC, the Found New Hardware Wizard automatically launches and installs the appropriate driver files.  If your PC does not find the FTDI driver files on its local hard disk drive, locate and reference the FTDI USB Driver and Utilities subdirectory on the CD. The FT232RL controller is powered from the USB cable and is active even when no AC power is applied to the OMU1-S-WW.

<!-- image -->

Notes: If an older FTDI driver has been previously installed, it is recommended to remove the older version before installing this newer FTDI driver.  Execute the ftdiClean.exe utility from the FTDI USB Driver and Utilities subdirectory.

For FTDI driver support on other operating systems, please check FTDI's website at (http://www.ftdichip.com/FTDrivers.htm).

## 2.2 Confirm COM Port Mapping

1. Launch the Control Panel and click on the System icon.
2. The System Properties screen appears.  Click on the Hardware tab.  Click on Device Manager . Under Ports (COM &amp; LPT) , look for the USB Serial Port assignment.
3. Take note of the COM port assignment for the USB Serial Port.

<!-- image -->

<!-- image -->

<!-- image -->

## 2.3 Basic Connection Setup

Figure 1 shows the basic connections of the OMU1-S-WW with the external equipment.  The OMU1-S-WW is powered through the USB cable that is connected to the host PC.  This same USB cable provides the communications link between the host PC and the OMU1-S-WW.

The OMU1-S-WW has two NEMA connectors, one male and one female.  The male connector is for inlet and the female connector is for outlet.  The male connector is connected to a wall outlet or a power strip. The female connector connects to the load to be measured.

Figure 1: Example OMU1-S-WW Connections

<!-- image -->

Figure 2: OMU1-S-WW Application Diagram

<!-- image -->

## 2.4 Verify Serial Connection to the PC

After connecting the USB cable from the OMU1-S-WW to the host PC, start the HyperTerminal application (or another suitable communication program) and create a session using the communication parameters show in Table 1.

Table 1: COM Port Setup Parameters

| Setup Parameter   | 78M6612   |
|-------------------|-----------|
| Port speed (baud) | 38400     |
| Data bits         | 8         |
| Parity            | None      |
| Stop bits         | 1         |
| Flow control      | Xon/Xoff  |

HyperTerminal can be found in Windows by selecting Start  All Programs  Accessories  Communications  HyperTerminal .  The connection parameters are configured by selecting File  Properties .  The New Connection Properties menu appears.

<!-- image -->

Select the appropriate COM port and click Configure .  The COMn Properties menu appears.

<!-- image -->

Note that port parameters can only be adjusted when the connection is not active.  It may be necessary to click the Disconnect Button (shown in Figure 2) to disconnect the port.

Figure 2: HyperTerminal Window with the Disconnect Button

<!-- image -->

<!-- image -->

## 2.5 NI™ RunTime Installation

The GUI Dashboard program is created using National Instruments LabVIEW™.  The NI RunTime Engine must be installed first before launching the Dashboard GUI.

1. Open the LabWindows XP Installer directory on the CD.
2. Execute the setup.exe file.

<!-- image -->

<!-- image -->

3. Select the destination directory.
4. Accept the License Agreement.

<!-- image -->

<!-- image -->

5. Start the installation.
6. When the installation is complete, restart your computer.

<!-- image -->

<!-- image -->

## 2.6 Install LabWindows™ XP Pro Update

Do not install LabWindows XP Pro Update on Win2k.

1. Launch the LabWindows XP Pro VISA Update .exe installation file on the CD.
2. Un-zip the file to the proper folder.

<!-- image -->

<!-- image -->

3. Start the installation.
4. Select the proper destination directories.
5. Accept the License Agreements.

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

6. The following screen appears.  Click Next .
7. Click Finish .
8. Copy the OMU GUI V2p1.exe application file from the CD to your PC.
9. Restart your computer.

<!-- image -->

<!-- image -->

## 3 Operating the Dashboard GUI

Start the Dashboard Program using Teridian OMU GUI V2p1.exe .

## 3.1 Port Selection

The COM port must be selected before data can be received from the OMU1-S-WW.  Select the appropriate COM port assignment previously defined on the Device Manager screen in Section 2.2.

<!-- image -->

The Run and Stop buttons are located above the Teridian logo.

If the OMU1-S-WW is disconnected from the USB cable, close and restart the GUI to re-establish the USB COM port connection.

<!-- image -->

## 3.2 Creating a Measurement Data Log File

Upon clicking the Run button, a File Write dialog box appears.  The GUI stores retrieved measurement data to a file for post processing.  Enter the desired subdirectory and file name.  Click OK to launch the main GUI display.

<!-- image -->

The measurement data is stored as text characters delimited by commas.  Click the Stop button to close the text file and end the data logging function.  New data log files are created wherever the Run button is clicked.  The data log capture automatically stops after 12 hours.  12 hours of data results in a 12 MB file. To import the data log file into Excel, see Section 3.19.

## 3.3 Selecting the Power Display Parameter

Using the Watts Selection menu under OMU Control Modes , select Watt , VA or VAR as the power display parameter.

<!-- image -->

Real power is the time average of the instantaneous product of voltage and current ( Watt ). Apparent power is the product of rms (root mean square) volts and rms amps ( VA , volt-amps). Reactive power is the time average of the instantaneous product of the voltage and current, with current phase shifted 90 degrees ( VAR , voltamps reactive).

## 3.4 Selecting the Display Scales

The range of values displayed in the Watts dial, the Current (rms) dial, and the Voltage (rms) dial can be changed.  Use the Voltage Range , Watts Range and Current Range menus under OMU Control Modes to select the display scales for Watts, Current, and Voltage.

<!-- image -->

## 3.5 Resetting the Min and Max Indicators to Their Current Values

The Reset Min/Max button sets the Minimum and Maximum display values to the current conditions. Press the Reset Min/Max button to store the measured values in the first row of the display into the second row (the Min values) and the third row (the Max values).

<!-- image -->

## 3.6 Begin Tracking Minimum and Maximum Conditions

To begin tracking minimum and maximum conditions as they occur, click the Start Min/Max button. Minimum values will display in the second row and maximum values will display in the third row.

<!-- image -->

## 3.7 Selecting Outlet1

The GUI has provisions to display two loads: Outlet1 and Outlet2 .  However, the OMU1-S-WW module contains only one load socket.  Select Outlet1 for use with the OMU1-S-WW module.  All Outlet2 power and current measurement displays show '0.00' due to the missing load circuit.  Similarly, all Totals measurement displays mirror the Outlet1 results.  The OMU GUI also provides configuration for two load relays.  The OMU1-S-WW does not contain relays.

<!-- image -->

## 3.8 Selecting Wide Band or Narrow Band Measurement

The GUI provides for two measurement algorithm options.  The Wide Band measurement method is optimal for measuring power from equipment with switching power supplies.  The Narrow Band method works well with conventional loads.  All measurement displays, dials and graph are updated with the appropriate data based on the Wide Band / Narrow Band selection.

<!-- image -->

## 3.9 Selecting the Sample Interval

Sample Interval provides a menu of sample sizes for display averaging.  The 1 Second setting updates the display with every sample once a second.  The 5 Seconds setting averages 5 samples and updates the display every 5 seconds, etc. Interval Cnt provides an index for the next display update.  For example, if Sample Interval is set to 5 Seconds, Interval Cnt will count from 1 to 5.

<!-- image -->

## 3.10 Alarm Status

The Alarm Status indicator turns red if any Alarm Status Threshold is exceeded.  See Section 3.16 for more information.

## 3.11 Neutral Voltage Alarm

The Neutral Voltage Alarm turns red when the Line and Neutral wires are reversed and Earth GND is connected.  Earth GND must be connected for this function to operate properly.

<!-- image -->

## 3.12 Line Frequency

The Line Frequency indicator displays the existing line frequency.  Frequency is displayed with 0.1 Hz resolution.  '???' is displayed when no voltage is present.

<!-- image -->

## 3.13 Accumulated Energy Usage and Expense Tracking

If a Cost per KWh value is entered, the OMU1-S-WW will calculate and display the accumulated energy cost.

- Slide the vertical scroll bar down to display the Present Cost/KWh , which shows the currently stored value in the OMU1-S-WW module.
- Enter a new value, such as 10, in the box below and click the Write KWh Cost button to save this updated cost information.  Do not hit the keyboard's Enter key after typing in the new numeric value.
- The Total Energy and Total Cost windows (under Duplex Totals ) update automatically with the new information.
- The accumulated Total Energy and Total Cost windows are reset by clicking the Reset Min/Max button.

<!-- image -->

## 3.14 Displaying Narrowband and Wideband Values Simultaneously

Slide the horizontal scroll bar to the right to view both sets of data.

<!-- image -->

## 3.15 Using the Parameter Graph

Use the Parameter Graph to display sample size averages for a specified parameter and time scale.

- Select the parameter to chart using the Select Parameter menu.
- Select the time scale using the Select Time Scale menu.

<!-- image -->

## 3.16 Setting Alarm Status Thresholds

The OMU1 can trip an alarm whenever a specified minimum or maximum temperature, frequency, voltage, maximum current narrowband, maximum current wideband, power factor narrowband and power factor wideband.  When the specified value is exceeded, the corresponding Alarm Status Indicator turns red. Also, the Alarm Status on the Dashboard turns red.

- To the left of the main control panel are the Alarm Status Indicators .  Use the horizontal scroll bar to bring the indicators into view.

<!-- image -->

- Below the Alarm Status Indicators are the current threshold values and data entry boxes to change the OMU1 event counter threshold values.
- Enter a new value and click on the respective Write button to save the new value to the OMU1-S-WW.
- Do not press the keyboard's Enter key after typing in a new numeric value.

<!-- image -->

## 3.17 Relay Configuration Controls

The OMU1-S-WW model does not contain relays. Do not use the Relay Configuration controls with the OMU1-S-WW.

<!-- image -->

## 3.18  Log File Import to Excel

The OMU1-S-WW measurement data can be graphed and post processed by importing its text data into various analysis programs.  The column data is separated by commas.  The first dozen lines contain OMU1-S-WW informational data.  The measurement data follows with each 1-second sample stored as a separate line item.

To import the log data into Excel, begin by clicking on the Excel File/Open option from the main menu.

<!-- image -->

Change the Files of type to all Files(*.*) .  Then find your sub-directory and select your data log file.

<!-- image -->

No changes required on the next dialog box, click Next .

<!-- image -->

Uncheck Tab and then check Comma .  Click Next to proceed.

<!-- image -->

Select Text for Column data format.  Click Finish to complete importing log file data.

The log file text data can now be parsed using standard Excel formulas.

<!-- image -->

## 4 Ordering Information

| Part Description                                        | Order Number       |
|---------------------------------------------------------|--------------------|
| 78M6612 Outlet Measurement Demo Unit with USB Interface | 78M6612-DB/OMU-USB |

## 5 Included Documentation

The following 78M6612 documents are included on the CD:

78M6612 Data Sheet

6612\_OMU\_S2\_URT\_V1\_13 Firmware Description Document

## 6 Contact Information

For more information about Teridian Semiconductor products or to check the availability of the 78M6612 OMU1 Demo Unit, contact us at:  http://www.teridian.com/contact-us/

6440 Oak Canyon Road Suite 100 Irvine, CA 92618-5201

Telephone: (714) 508-8800

FAX: (714) 508-8878

## Revision History

|   Revision | Date      | Description        |
|------------|-----------|--------------------|
|        1.0 | 11/6/2009 | First publication. |