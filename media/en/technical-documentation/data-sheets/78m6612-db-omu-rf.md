<!-- lastmod 2022-08-02 -->
<!-- image -->

Simplifying System Integration TM

## OMU1-S-RF Demo Unit User Manual

February 18, 2010 Rev. 1.2 UM\_6612\_016

© 2010 Teridian Semiconductor Corporation.  All rights reserved. Teridian Semiconductor Corporation is a registered trademark of Teridian Semiconductor Corporation. Simplifying System Integration is a trademark of Teridian Semiconductor Corporation. Microsoft, Windows, Vista, and Excel are registered trademarks of Microsoft Corporation. CA51 is a trademark of Keil, An ARM ® Company. Signum Systems is a trademark of Signum Systems Corp. LabVIEW, NI and NI-VISA are trademarks of National Instruments. All other trademarks are the property of their respective owners.

Teridian Semiconductor Corporation makes no warranty for the use of its products, other than expressly contained in the Company's warranty detailed in the Teridian Semiconductor Corporation standard Terms and Conditions.  The company assumes no responsibility for any errors which may appear in this document, reserves the right to change devices or specifications detailed herein at any time without notice and does not make any commitment to update the information contained herein.  Accordingly, the reader is cautioned to verify that this document is current by comparing it to the latest version on http://www.teridian.com or by checking with your sales representative.

Teridian Semiconductor Corp., 6440 Oak Canyon, Suite 100, Irvine, CA 92618 TEL (714) 508-8800, FAX (714) 508-8877, http://www.teridian.com

## Table of Contents

| 1 Introduction....................................................................................................................................5   | 1 Introduction....................................................................................................................................5   | 1 Introduction....................................................................................................................................5   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
|                                                                                                                                                       | 1.1 Package                                                                                                                                           | Contents.................................................................................................................5                            |
|                                                                                                                                                       | 1.2                                                                                                                                                   | Requirements...........................................................................................................5                              |
|                                                                                                                                                       | System Safety and ESD Notes                                                                                                                           | ..........................................................................................................6                                           |
|                                                                                                                                                       | 1.3 1.4 Firmware Demo Code                                                                                                                            | Introduction........................................................................................6                                                 |
|                                                                                                                                                       | 1.5 Testing the Demo Unit Prior to                                                                                                                    | Shipping................................................................................6                                                             |
| 2                                                                                                                                                     | Installation .....................................................................................................................................7   |                                                                                                                                                       |
|                                                                                                                                                       | USB Driver Installation                                                                                                                               | ..........................................................................................................7                                           |
|                                                                                                                                                       | 2.1 2.2                                                                                                                                               | Setup........................................................................................................8                                        |
|                                                                                                                                                       | Basic Connection 2.2.1 Attaching the USB-OPTO Daughter Board to the OMU1-S-RF.....................................9                                   |                                                                                                                                                       |
|                                                                                                                                                       | 2.2.2 Attaching the UART-ISO Daughter Board                                                                                                           | to the OMU1-S-RF ....................................10                                                                                               |
|                                                                                                                                                       | 2.2.3 Attaching a Customer-Supplied COM Module to the OMU1-S-RF..............................11                                                       |                                                                                                                                                       |
|                                                                                                                                                       | 2.3 Confirm COM Port                                                                                                                                  | Mapping................................................................................................12                                             |
|                                                                                                                                                       | 2.4 Verify Serial Connection to the                                                                                                                   | PC......................................................................................13                                                            |
|                                                                                                                                                       | 2.5 NI™ RunTime Installation                                                                                                                          | ...................................................................................................15                                                 |
|                                                                                                                                                       | 2.6 Install LabWindows™ XP Pro Update                                                                                                                 | .................................................................................18                                                                   |
| 3                                                                                                                                                     | Operating the Dashboard GUI.....................................................................................................21                    |                                                                                                                                                       |
|                                                                                                                                                       | 3.1 Port Selection                                                                                                                                    | .....................................................................................................................21                               |
|                                                                                                                                                       | Creating a Measurement Data Log                                                                                                                       | File...............................................................................22                                                                 |
|                                                                                                                                                       | 3.2 3.3 Selecting the Power Display                                                                                                                   | Parameter...............................................................................22                                                            |
|                                                                                                                                                       | 3.4 Selecting the Display Scales                                                                                                                      | ...............................................................................................23                                                     |
|                                                                                                                                                       | 3.5 Resetting the Min and Max Indicators to Their                                                                                                     | Current Values.............................................23                                                                                         |
|                                                                                                                                                       | 3.6 Begin Tracking Minimum and Maximum                                                                                                                | Conditions.............................................................24                                                                             |
|                                                                                                                                                       | 3.7 Selecting Outlet1                                                                                                                                 | ................................................................................................................24                                    |
|                                                                                                                                                       | Selecting Wide Band or Narrow Band Measurement                                                                                                        | ...........................................................25                                                                                         |
|                                                                                                                                                       | 3.8 3.9 Sample                                                                                                                                        | Interval..............................................................................................25                                              |
|                                                                                                                                                       | Selecting the 3.10 Alarm                                                                                                                              | Status.......................................................................................................................25                       |
|                                                                                                                                                       | 3.11 Neutral Voltage                                                                                                                                  | Alarm.........................................................................................................26                                      |
| 3.12                                                                                                                                                  | Line                                                                                                                                                  | Frequency...................................................................................................................26                        |
|                                                                                                                                                       | Accumulated Energy Usage and Expense Tracking                                                                                                         | ............................................................27                                                                                        |
| 3.13                                                                                                                                                  | 3.14 Displaying Wideband Values                                                                                                                       | Simultaneously............................................27                                                                                          |
|                                                                                                                                                       | Narrowband and 3.15 Using the Parameter Graph                                                                                                         | ................................................................................................28                                                    |
|                                                                                                                                                       | 3.16 Setting Alarm Status Thresholds.........................................................................................28                       |                                                                                                                                                       |
|                                                                                                                                                       | 3.17 Relay Configuration                                                                                                                              | Controls...............................................................................................29                                             |
|                                                                                                                                                       | 3.18 Log File Import to Excel                                                                                                                         | ......................................................................................................30                                              |
| 4                                                                                                                                                     | Schematics, Bill of Materials and PCB Layouts.........................................................................33                              | Schematics, Bill of Materials and PCB Layouts.........................................................................33                              |
|                                                                                                                                                       | 4.1 OMU1-S-RF Demo Board Schematics                                                                                                                   | ................................................................................33                                                                    |
|                                                                                                                                                       | 4.2 OMU1-S-RF Demo Board Bill of                                                                                                                      | Materials...........................................................................35                                                                |
|                                                                                                                                                       | 4.3 OMU1-S-RF Board PCB Layouts                                                                                                                       | ........................................................................................37                                                            |
|                                                                                                                                                       | 4.4                                                                                                                                                   | Schematic.........................................................................................39                                                  |
|                                                                                                                                                       | USB Daughter Board 4.5 UART-ISO Daughter Board Schematic................................................................................40            |                                                                                                                                                       |
| 5                                                                                                                                                     | Ordering Information...................................................................................................................41             |                                                                                                                                                       |
| 6                                                                                                                                                     | Included Documentation.............................................................................................................41                 | Included Documentation.............................................................................................................41                 |
| 7 Contact Information.....................................................................................................................41          | 7 Contact Information.....................................................................................................................41          | 7 Contact Information.....................................................................................................................41          |

## Figures

| Figure 1: OMU1-S-RF Application Diagram..............................................................................................8   |
|------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 2: HyperTerminal Window with the Disconnect Button.................................................................14             |
| Figure 3: OMU1-S-RF Demo Board Electrical Schematic (1 of 2)...........................................................33                |
| Figure 4: OMU1-S-RF Demo Board Electrical Schematic (2 of 2)...........................................................34                |
| Figure 5: 78M6612 Evaluation Board PCB Top View..............................................................................37          |
| Figure 6: 78M6612 Evaluation Board PCB Bottom View.........................................................................37            |
| Figure 7: 78M6612 Evaluation Board Copper Top View .........................................................................38           |
| Figure 8: 78M6612 Evaluation Board Copper Bottom View ....................................................................38             |
| Figure 9: USB Daughter Board Electrical Schematic..............................................................................39        |
| Figure 10: UART-ISO Daughter Board Electrical Schematic...................................................................40             |
| Tables                                                                                                                                   |
| Table 1: COM Port Setup Parameters....................................................................................................13 |
| Table 2: OMU1-S-RF Demo Board Bill of Materials................................................................................35        |

## 1 Introduction

The Teridian Outlet Measurement Unit, Model OMU1-S-RF, is a low-cost power monitor utilizing the Teridian 78M6612 SOC.  The Teridian 78M6612 monitors the AC line voltages and load current, and controls switching of an internal load relay.  The embedded firmware calculates the RMS line voltage and RMS load current, watts, VA, VAR and power factor.  The real time data is transmitted to a PC for display in a Windows  based Graphical User Interface (GUI).  The 78M6612's UART interface is used as the communications link to a customer supplied RF module for the OMU1-S-RF.

The OMU1-S-RF evaluation kit is intended to be used for development and integration of a separate communications interface.  Included with the OMU1-S-RF is a pair of isolated daughter boards and a Windows  based Graphical User Interface (GUI) for simplified access to the following measurement data and controls:

- Power, current, voltage and power factor indicator dials
- Adjustable display scales
- Minimum and peak parameter tracking
- Selectable strip chart display format
- Narrow-band versus Wide-band measurement
- Selectable sample size averaging
- Accumulated energy usage and expense tracking
- Line frequency
- Alarm indicators
- Programmable Alarm thresholds
- Internal load relay (16A) control
- Data log to file

Alternatively, the user can directly query the device with the command set using HyperTerminal and the provided 6612\_OMU\_S2\_URT\_V1\_13 Firmware Description Document .

## 1.1 Package Contents

The OMU1-S-RF Demo Kit includes:

- OMU1-S-RF module
- USB A/B cable
- USB-OPTO Daughter Board
- UART-ISO Daughter Board
- CD with Software and Documentation

## 1.2 System Requirements

The OMU1-S-RF GUI requires use of a PC with the following features:

- PC (1 GHz, 1 GB) with Microsoft ® Windows XP or Win2000, equipped with USB port.
- Minimum 1024 x 768 video display resolution.

## 1.3 Safety and ESD Notes

<!-- image -->

## EXERCISE CAUTION WHEN LIVE AC VOLTAGES ARE PRESENT!

<!-- image -->

Standard ESD precautions must be taken when handling electronic equipment.  The OMU1-S-RF contains ESD protected interfaces.

Do not connect test equipment, ICE emulators or external development boards directly to the OMU-RF hardware.  Damage to the OMU1-S-RF and external equipment will occur due to the 78M6612's 'high side' reference topology.  The 78M6612's V3P3 (i.e. 'high side') is connected directly to Neutral (Earth Ground) creating a ground reference disparity with any properly grounded external equipment.

Always use the provided UART-ISO daughter board for connecting external development boards. Contact Teridian for instructions on connecting other types of test equipment.

## 1.4 Firmware Demo Code Introduction

The Firmware Demo Code provides the following features:

- Basic energy measurement data such as Watts, Volts, current, VAR, VA, phase angle, power factor, accumulated energy, frequency, date/time, and various alarm statuses.
- Control of alarm thresholds, calibration coefficients, temperature compensation, etc.

There are two means to facilitate performance evaluation between the user at the PC host and the firmware code in the OMU1-S-RF Demo Unit:

- The Graphical User Interface (GUI).  This document describes the installation and use of the Windows based GUI.
- The Command Line Interface (CLI) via HyperTerminal or comparable terminal emulator on a different operating system. For information about the CLI, see the 6612\_OMU\_S2\_URT\_V1\_13 Firmware Description Document .

The OMU1-S-RF Demo Unit is shipped with Demo Code Revision 1.13 or later loaded in the 78M6612 chip and included on the CD. The code revision can be verified by entering the command &gt;i via the command line interface.  Firmware for the Demo Unit can be updated using either the Teridian TFP1 or an in-circuit emulator such as the Signum Systems™ ADM-51 (http://www.signum.com/Signum.htm).

The board components and firmware settings are designed to operate with the following nominal AC electrical ranges:

| Voltage     | Current     | Line Frequency   |
|-------------|-------------|------------------|
| 110-240 VAC | 10 mA - 20A | 46-64 Hz         |

## 1.5 Testing the Demo Unit Prior to Shipping

Before every OMU1-S-RF Demo Unit is shipped, the following procedures have been performed at the factory:

- Full Calibration - Precise energy source equipment is used to calibrate the current and voltage.  The temperature is also calibrated at the same time.
- Accuracy Test - This 'bench' level test ensures the energy measurement accuracy is within +/-0.5%.

## 2 Installation

## 2.1 USB Driver Installation

This evaluation kit includes an optically isolated USB adaptor board for serial communications with a PC. The FTDI USB controller IC FT232RL performs the USB functions.  The FTDI Windows driver presents a virtual COM port for enabling serial communications.  Control of the OMU1-S-RF module can be managed using either a terminal emulation program or using the supplied Windows Dashboard GUI.  The FTDI Windows driver is a certified driver for Windows 2000 and XP.

1. Upon attaching the OMU1-S-RF module to the PC, the Found New Hardware Wizard automatically launches and installs the appropriate driver files.  If your PC does not find the FTDI driver files on its local hard disk drive, locate and reference the FTDI USB Driver and Utilities subdirectory on the CD. The FT232RL controller is powered from the USB cable and is active even when no AC power is applied to the OMU1-S-RF.

<!-- image -->

Notes: If an older FTDI driver has been previously installed, it is recommended to remove the older version before installing this newer FTDI driver.  Execute the ftdiClean.exe utility from the FTDI USB Driver and Utilities subdirectory.

For FTDI driver support on other operating systems, please check FTDI's website at (http://www.ftdichip.com/FTDrivers.htm).

## 2.2 Basic Connection Setup

Figure 1 shows the basic connections of the OMU1-S-RF with the external equipment.  The OMU1-S-RF is powered by an internal switch-mode power supply (SMPS) module and is not powered through the USB cable.  The USB connection only provides the communications link between the host PC and the OMU1-S-RF.

The OMU1-S-RF has two NEMA connectors, one male and one female.  The male connector is for inlet and the female connector is for outlet.  The male connector is connected to a wall outlet or a power strip. The female connector connects to the load to be measured.

Figure 1: OMU1-S-RF Application Diagram

<!-- image -->

## 2.2.1 Attaching the USB-OPTO Daughter Board to the OMU1-S-RF

Attach the USB-OPTO daughter board to the OMU1-S-RF for use with the supplied GUI.  This hardware interface provides an easy way to explore the 78M6612 firmware features.  The USB daughter board incorporates signal isolators to protect the connected PC.

<!-- image -->

Attach the USB-OPTO daughter board to the OMU1-S-RF's UART cable as shown.  Take note of the cable's Red wire (+V) with regards to the daughter board's connector pin assignments.

<!-- image -->

Do not attach external equipment to the OMU1-S-RF when using the USB-OPTO.

If it is necessary to attach test equipment, contact Teridian for instructions.

## 2.2.2 Attaching the UART-ISO Daughter Board to the OMU1-S-RF

Attach the UART-ISO daughter board to the OMU1-S-RF for use with external development boards. External development boards are customer-supplied hardware incorporating their communications module and debug interfaces.  Their debug interfaces are typically RS-232 or USB cables with direct connections to a PC.  The daughter board incorporates signal isolators to protect the external development board hardware and its attached PC.

<!-- image -->

Attach the UART-ISO daughter board to the OMU1-S-RF's UART cable as shown.  Take note of the cable's Red wire (+V) with regards to the daughter board's connector pin assignments.

The UART-ISO daughter board does not supply power to the attached external development board.  The female connector J2 is provided for attaching the external development board.  The J2 pin assignments are as follows:

Pin 1

+3.3V or +5V (input, required to power signal isolator)

Pin 2

TX (78M6612 output, Vout dependent on voltage at pin 1)

Pin 3

RX (78M6612 input, Vin threshold dependent on voltage at pin 1)

Pin 4

GND

The UART-ISO daughter board does not support 1.8V signal levels.

<!-- image -->

Do not attach external equipment to the OMU1-S-RF when using the UART-ISO.

If it is necessary to attach test equipment, contact Teridian for instructions.

## 2.2.3 Attaching a Customer-Supplied COM Module to the OMU1-S-RF

A fully isolated external communications board (i.e. Wireless or PLC module) may be attached to the OMU1-S-RF's UART cable without using the UART-ISO daughter board.  The OMU1-S-RF UART cable supplies 100 ma max at +3.3 V.

<!-- image -->

The OMU1-S-RF UART cable pin assignments are as follows:

| Pin 1   | Red    | +3.3V (output, 100ma max)           |
|---------|--------|-------------------------------------|
| Pin 2   | Blue   | TX (78M6612 output, Vout: +3.3V/0V) |
| Pin 3   | Yellow | RX (78M6612 input, Vin: +3.3V/0V)   |
| Pin 4   | Black  | GND                                 |

The OMU1-S-RF UART cable does not support 1.8V signal levels.

<!-- image -->

Do not attach external equipment to the OMU1-S-RF when using the UART cable.

If it is necessary to attach test equipment, contact Teridian for instructions.

## 2.3 Confirm COM Port Mapping

1. Launch the Control Panel and click on the System icon.
2. The System Properties screen appears.  Click on the Hardware tab.  Click on Device Manager . Under Ports (COM &amp; LPT) , look for the USB Serial Port assignment.
3. Take note of the COM port assignment for the USB Serial Port.

<!-- image -->

<!-- image -->

<!-- image -->

## 2.4 Verify Serial Connection to the PC

After connecting the USB cable from the OMU1-S-RF to the host PC, start the HyperTerminal application (or another suitable communication program) and create a session using the communication parameters show in Table 1.

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

Disconnect

Figure 2: HyperTerminal Window with the Disconnect Button

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

NI-VISA 4.4.1Runtime

License Agreement

区

You must accept the license[s) displayed below to proceed.

INSTRUMENTS"

NATIONAL

NATIONALINSTRUMENTSSOFTWARELICENSEAGREEMENT

INSTALLATION NOTICE: THIS IS A CONTRACT. BEFORE YOU DOWNLOAD THE SOFTWARE

AND/OR COMPLETE THE INSTALLATION PROCESS, CAREFULLY READ THIS AGREEMENT. BY

COMPLETE THE INSTALLATION PROCESS, YOU CONSENT TO THE TERMS OF THIS

BECOME A PARTY TO THIS AGREEMENT AND BE BOUND BY ALL OF ITS TERMS AND

CONDITIONS, CLICK THE APPROPRIATE BUTTON TO CANCEL THE INSTALLATION PROCESS,

DO NOT INSTALL OR USE THE SOFTWARE, AND RETURN THE SOFTWARE WWITHIN THIRTY

(30) DAYS OF RECEIPT OF THE SOFTWWARE (INCLUDING ALL ACCOMPANYING WWRITTEN

RETURNS SHALL BE SUBJECT TO NI'S THEN CURRENT RETURN POLICY.

Definitions. As used in this Agreement, the following terms have the following meanings:

I accept the License Agreement(s).

OI do not accept the License Agreement(s).

&lt;&lt;Back Next &gt;&gt;

Cancel

<!-- image -->

<!-- image -->

6. The following screen appears.  Click Next .
7. Click Finish .
8. Copy the OMU GUI V3p0.exe application file from the CD to your PC.
9. Restart your computer.

<!-- image -->

<!-- image -->

## 3 Operating the Dashboard GUI

Start the Dashboard Program using launching Teridian OMU GUI V3p0.exe .

## 3.1 Port Selection

The COM port must be selected before data can be received from the OMU1.  Select the appropriate COM port assignment previously defined on the Device Manager screen in Section 2.2.

<!-- image -->

The Run and Stop buttons are located above the Teridian logo.

<!-- image -->

If the OMU1 is disconnected from the USB cable, close and restart the GUI to re-establish the USB COM port connection.

## 3.2 Creating a Measurement Data Log File

Upon clicking the Run button, a File Write dialog box appears.  The GUI stores retrieved measurement data to a file for post processing.  Enter the desired subdirectory and file name.  Click OK to launch the main GUI display.

<!-- image -->

The measurement data is stored as text characters delimited by commas.  Click the Stop button to close the text file and end the data logging function.  New data log files are created wherever the Run button is clicked.  The data log capture automatically stops after 12 hours.  12 hours of data results in a 12 MB file. To import the data log file into Excel, see Section 4.19.

## 3.3 Selecting the Power Display Parameter

Using the Watts Selection menu under OMU Control Modes , select Watt , VA or VAR as the power display parameter.

<!-- image -->

Real power is the time average of the instantaneous product of voltage and current (

Apparent power is the product of rms (root mean square) volts and rms amps (

Reactive power is the time average of the instantaneous product of the voltage and current, with current phase shifted 90 degrees ( , voltamps reactive).

Watt ). VA , volt-amps). VAR

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

The GUI has provisions to display two loads: Outlet1 and Outlet2 .  However, the OMU1-S-RF module contains only one load socket.  Select Outlet1 for use with the OMU1-S-RF module.  All Outlet2 power and current measurement displays show '0.00' due to the missing load circuit.  Similarly, all Totals measurement displays mirror the Outlet1 results.

<!-- image -->

## 3.8 Selecting Wide Band or Narrow Band Measurement

The GUI provides for two measurement algorithm options.  The Wide Band measurement method is optimal for measuring power from equipment with switching power supplies.  The Narrow Band method works well with conventional loads.  All measurement displays, dials and graph are updated with the appropriate data based on the Wide Band / Narrow Band selection.

<!-- image -->

## 3.9 Selecting the Sample Interval

Sample Interval provides a menu of sample sizes for display averaging.  The 1 Second setting updates the display with every sample once a second.  The 5 Seconds setting averages 5 samples and updates the display every 5 seconds, etc. Interval Cnt provides an index for the next display update.  For example, if Sample Interval is set to 5 Seconds, Interval Cnt will count from 1 to 5.

<!-- image -->

## 3.10 Alarm Status

The Alarm Status indicator turns red if any Alarm Status Threshold is exceeded.  See Section 4.16 for more information.

## 3.11 Neutral Voltage Alarm

The Neutral Voltage Alarm turns red when the Line and Neutral wires are reversed and Earth GND is connected.  Earth GND must be connected for this function to operate properly.

<!-- image -->

## 3.12 Line Frequency

The Line Frequency indicator displays the existing line frequency.  Frequency is displayed with 0.1 Hz resolution.  '???' is displayed when no voltage is present.

<!-- image -->

## 3.13 Accumulated Energy Usage and Expense Tracking

If a Cost per KWh value is entered, the OMU1-S-RF will calculate and display the accumulated energy cost.

- Slide the vertical scroll bar down to display the Present Cost/KWh , which shows the currently stored value in the OMU1-S-RF module.
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
- Enter a new value and click on the respective Write button to save the new value to the OMU1-S-RF.
- Do not press the keyboard's Enter key after typing in a new numeric value.

<!-- image -->

## 3.17 Relay Configuration Controls

The internal load relay defaults to the off condition (load not powered) upon power-on or restart of the GUI.  The relay control button is located in the lower right hand corner of the main GUI control panel.  A relay status indicator is located to the left of the control button.  The relay status indicator and all other GUI indicators experience a 1-2 second update delay after clicking the relay control button.

<!-- image -->

Advanced relay controls can be found by scrolling down to the bottom of the GUI.  These are reserved for future use.  Do not use with the OMU1-S-RF.

<!-- image -->

## 3.18  Log File Import to Excel

The OMU1-S-RF measurement data can be graphed and post processed by importing its text data into various analysis programs.  The column data is separated by commas.  The first dozen lines contain OMU1-S-RF informational data.  The measurement data follows with each 1-second sample stored as a separate line item.

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

## 4 Schematics, Bill of Materials and PCB Layouts

This section includes the schematics, bill of materials and PCB layouts for the OMU1-S-RF Demo Board, and the schematics for the USB Daughter Board and the UART-ISO Daughter Board.

## 4.1 OMU1-S-RF Demo Board Schematics

Figure 3: OMU1-S-RF Demo Board Electrical Schematic (1 of 2)

<!-- image -->

Figure 4: OMU1-S-RF Demo Board Electrical Schematic (2 of 2)

<!-- image -->

## 4.2 OMU1-S-RF Demo Board Bill of Materials

## Table 2: OMU1-S-RF Demo Board Bill of Materials

|   Item |   Qty | Reference                   | Part             | PCB Footprint   | Digi-Key/Mouser Part Number   | Supplier Part Number   | Manufacturer          |
|--------|-------|-----------------------------|------------------|-----------------|-------------------------------|------------------------|-----------------------|
|      1 |     5 | C1,C5,C8,C14,C19            | 1000pF           | 0603            | MS 581-06035C102J             | 06035C102JAT2A         | AVX                   |
|      2 |     7 | C2,C11,C18,C21, C22,C23,C24 | 0.1µF            | 0603            | MS 80-C0603C104K5RAL          | C0603C104K5RALTU       | KEMET                 |
|      3 |     1 | C3                          | 10µF, 25V        | 1812            | 478-1762-1-ND                 | TPSC106K025R0500       | AVX                   |
|      4 |     1 | C4                          | 100pF            | 0603            | MS 581-06035A101J             | 06035A101JAT2A         | AVX                   |
|      5 |     2 | C7,C9                       | 27pF             | 0603            | MS 581-06035A270J             | 06035A270JAT2A         | AVX                   |
|      6 |     1 | C12                         | 10µF 450V        | XRL450B         | MS 140-XRL450V10-RC           | 140-XRL450V10-RC       | Xicon                 |
|      7 |     1 | C13                         | 0.1µF 500V       | C330            | MS 80-C330C104KCR             | C330C104KCR5TA         | KEMET                 |
|      8 |     1 | C15                         | 220µF 25V lo imp | UUDB            | MS 647-UUD1E221MNL            | UUD1E221MNL1GS         | Nichicon              |
|      9 |     1 | C16                         | 0.015µF          | 0603            | MS 80-C0603C153K3R            | C0603C153K3RACTU       | KEMET                 |
|     10 |     2 | C17,C20                     | 4.7µF 25V        | 1206P           | 511-1503-1-ND                 | TCTAL1E475M8R          | ROHM Semiconductor    |
|     11 |     1 | D1                          | 1A 400V          | SMB             | MS 621-S1GB-F                 | S1GB-13-F              | Diodes Inc.           |
|     12 |     1 | JP1                         | Weco Tst         | SIP100P2,M      | MS 571-1032392                | 103239-2               | Tyco/AMP              |
|     13 |     1 | JP2                         | Weco Tst         | SIP100P3,M      | MS 571-1032393                | 103239-3               | Tyco/AMP              |
|     14 |     1 | J6                          | ICE              | SIP100P6,M,R/A  | MS 538-22-12-2061             | 22-12-2061             | Molex                 |
|     15 |     1 | LED1                        | RED              | LED100          | MS 606-4300H1LC               | 4300H1LC               | Chicago Miniature     |
|     16 |     1 | LED2                        | YELLOW           | LED100          | MS 606-4300H7LC               | 4300H7LC               | Chicago Miniature     |
|     17 |     1 | LED3                        | GREEN            | LED100          | MS 606-4300H5LC               | 4300H5LC               | Chicago Miniature     |
|     18 |     1 | L1                          | 1000uH 0.5A      | 18R105C         | MS 580-18R105C                | 18R105C                | Murata                |
|     19 |     1 | Q1                          | PNP 500ma 30V    | SOT23T          | MS 610-CMPTA63                | CMPTA63                | Central Semiconductor |
|     20 |     1 | RL1                         | 16A 12V SPDT     | ALZ             | 255-1446-ND                   | ALZ12F12               | Panasonic             |
|     21 |     1 | R1                          | 0.004 1% 2.5W    | 2512P           | MS 66-ULR25R004FLFTR          | ULR25R004FLFTR         | IRC                   |
|     22 |     4 | R3,R8,R11,R25               | 750 0.1%         | 0603            | P750YCT-ND                    | ERA-3YEB751V           | Panasonic             |
|     23 |     2 | R4,R21                      | 16.9K 1%         | 0603            | MS 302-16.9K-RC               | 302-16.9K-RC           | Xicon                 |
|     24 |     1 | R5                          | 20.0K, 1%        | 0603            | MS 302-20K-RC                 | 302-20K-RC             | Xicon                 |
|     25 |     4 | R6,R7,R9,R10                | 1M 0.1%          | 1206W           | MS 660- RN732BTTD1004B25      | RN732BTTD1004B25       | KOA Speer             |
|     26 |     1 | R13                         | 0                | 0603            | MS 301-0-RC                   | 301-0-RC               | Xicon                 |

|   Item |   Qty | Reference   | Part          | PCB Footprint   | Digi-Key/Mouser Part Number   | Supplier Part Number   | Manufacturer           |
|--------|-------|-------------|---------------|-----------------|-------------------------------|------------------------|------------------------|
|     27 |     3 | R14,R15,R16 | 470           | 0603            | MS 301-470-RC                 | 301-470-RC             | Xicon                  |
|     28 |     1 | R17         | 330           | 0603            | MS 301-330-RC                 | 301-330-RC             | Xicon                  |
|     29 |     2 | R18,R23     | 10K           | 0603            | MS 301-10K-RC                 | 301-10K-RC             | Xicon                  |
|     30 |     1 | R19         | 100           | 0603            | MS 301-100-RC                 | 301-100-RC             | Xicon                  |
|     31 |     1 | R20         | 10 1/2W       | 1210W           | MS 660- RK73H2ETTD10R0        | RK73H2ETTD10R0F        | KOA Speer              |
|     32 |     1 | R22         | 10.0K 1%      | 0603            | MS 302-10K-RC                 | 302-10K-RC             | Xicon                  |
|     33 |     1 | R24         | 1K            | 0603            | MS 301-1.0K-RC                | 301-1.0K-RC            | Xicon                  |
|     34 |     1 | TP1         | Wh            | SIP100P2, M     | MS 538-22-12-2021             | 22-12-2021             | MOLEX                  |
|     35 |     1 | U1          | 78M6612-68QFN | QFN 68          |                               | 78M6612-IM             | Teridian Semiconductor |
|     36 |     1 | VR1         | BP5045A       | SIP10BP         | MS 755-BP 5045A               | BP5045A                | ROHM Semiconductor     |
|     37 |     1 | VR2         | UCC284        | SOIC8           | MS 595-UCC284DP-ADJ           | UCC284DP-ADJ           | Texas Instruments      |
|     38 |     1 | Y1          | 32.768kHz     | AB525           | 535-9166-1-ND                 | ABS25-32.768KHZ-T      | Abracon                |

## 4.3 OMU1-S-RF Board PCB Layouts

Figure 5: 78M6612 Evaluation Board PCB Top View

<!-- image -->

Figure 6: 78M6612 Evaluation Board PCB Bottom View

<!-- image -->

Figure 7: 78M6612 Evaluation Board Copper Top View

<!-- image -->

Figure 8: 78M6612 Evaluation Board Copper Bottom View

<!-- image -->

## 4.4 USB Daughter Board Schematic

Figure 9: USB Daughter Board Electrical Schematic

<!-- image -->

## 4.5 UART-ISO Daughter Board Schematic

Figure 10: UART-ISO Daughter Board Electrical Schematic

<!-- image -->

## 5 Ordering Information

| Part Description                                  | Order Number      |
|---------------------------------------------------|-------------------|
| 78M6612 Wireless/PLC Outlet Measurement Demo Unit | 78M6612-DB/OMU-RF |

## 6 Included Documentation

The following 78M6612 documents are included on the CD:

78M6612 Data Sheet

6612\_OMU\_S2\_URT\_V1\_13 Firmware Description Document

## 7 Contact Information

For more information about Teridian Semiconductor products or to check the availability of the 78M6612, contact us at:  http://www.teridian.com/contact-us/

6440 Oak Canyon Road Suite 100 Irvine, CA 92618-5201

Telephone: (714) 508-8800

FAX: (714) 508-8878

## Revision History

|   Revision | Date      | Description                                                                                |
|------------|-----------|--------------------------------------------------------------------------------------------|
|        1.0 | 11/6/2009 | First publication.                                                                         |
|        1.1 | 2/1/2010  | Updated the schematics in Figure 3 and Figure 4. Updated the bill of materials in Table 2. |
|        1.2 | 2/18/2010 | In Table 2, added Supplier Part Number and Manufacturer columns to the Bill of Materials.  |