<!-- lastmod 2022-08-03 -->
<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

## General Description

The data converter evaluation platform (DCEP) is a PCbased platform that provides a comprehensive tool for evaluating Maxim's high-speed analog-to-digital converters (ADCs). A field programmable gate array (FPGA) provides a flexible data interface that supports single-ended and differential signaling. When configured for differential signals, 64 signal pairs are arranged in  four  buses  of  16  bits  each  with  an  additional  eight pairs (two per bus) dedicated as clock inputs. When the data interface is configured for single-ended operation, 72 channels comprising four 18-bit buses are available for  data.  In  this  configuration,  eight  clock  inputs  are available. Data records of up to 4 mega-words (Mw) per channel can be captured by the FPGA and stored in onboard memory. Data transfer and board control are realized through a USB 2.0-compliant interface to a personal computer (PC) running Windows ® XP operating system (OS) with Service Pack 2 (SP2) or later.

An intuitive graphical user interface (GUI) is included to allow user control of the hardware and processing of the captured data. Fast Fourier transform (FFT) analysis provides both single- and multi-tone dynamic analysis. A histogram function allows the plotting of integral nonlinearity (INL) and differential nonlinearity (DNL). Control features include adjustable timing for optimal data capture, frequency calculation for coherent sampling, record-length selection, and standard FFT windowing functions.

The DCEP operates from a single external 5V/4A power supply, provided with the board.

Windows is a registered trademark of Microsoft Corp.

## Features

- ♦ FPGA Configuration Through PC and USB Port
- ♦ 64Mw x 16-Bit Data Capture Captures Entire Frames of Complex Real-World Signals
- ♦ Input Rate Up to 800Mwps
- ♦ Flexible Device Under Test (DUT) Digital Interface
- ♦ Supports Numerous I/O Standards 3.3V, 2.5V, and 1.8V LVCMOS LVDS LVPECL
- ♦ USB 2.0 Communications (480Mb/s)
- ♦ Single 5V Supply Operation (Power Supply Included)
- ♦ Intuitive GUI-Based Software (Jumperless Hardware Configuration)
- ♦ Data Processing Powered by MATLAB ®
- ♦ LEDs to Display Board and FPGA Status
- ♦ Command Line Program Available
- ♦ Supports Parallel- and Serial-Output ADCs
- ♦ High-Speed, High-Density DUT Connectors

## Ordering Information

| PART   | TEMP RANGE   | PIN-PACKAGE   |
|--------|--------------|---------------|
| DCEP   | 0°C to +35°C | Board         |

MATLAB is a registered trademark of The MathWorks, Inc.

Figure 1. DCEP Block Diagram

<!-- image -->

1

## Data Converter Evaluation Platform (DCEP) User's Guide

## ABSOLUTE MAXIMUM RATINGS

5VDC......................................................................................5.5V

Continuous Power Dissipation (TA = +25°C) ........................15W

Operating Temperature Range...............................0°C to +35°C

Storage Temperature Range.............................-60°C to +125°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(5VDC = 5V, TA = +25°C.)

| PARAMETER               | SYMBOL   | CONDITIONS                 |   MIN |   TYP | MAX   | UNITS   |
|-------------------------|----------|----------------------------|-------|-------|-------|---------|
| Minimum Clock Rate      |          |                            |       |     1 |       | MHz     |
| Maximum Clock Rate      |          |                            |       |   400 |       | MHz     |
| Maximum Input Word Rate |          |                            |       |   800 |       | Mwps    |
| Input Bus Width         |          | (Note 1)                   |     1 |       | 64    | Bits    |
| Data Record Length      |          | Per input channel (Note 1) |   256 |       | 4M    | Words   |
| Record Block Resolution |          | (Note 1)                   |   256 |       |       | Words   |
| Supply Voltage Range    | 5V DC    |                            |       |     5 |       | V       |
| Supply Current          |          | (Note 2)                   |       |   1.4 |       | A       |

Note 1: Defined or constrained by software and firmware.

Note 2: Based on typical ADC configuration.

## Table 1. DCEP Connector Definitions

| NAME    | DESCRIPTION                                                                                       |
|---------|---------------------------------------------------------------------------------------------------|
| J1      | USB 2.0 Port, Type B Connector                                                                    |
| J2, J12 | Do Not Connect (for future use)                                                                   |
| J3      | JTAG FPGA Programming Port                                                                        |
| J4      | External 5V Power-Supply Connection. Connect the supplied 5V/4A power supply to this connector.   |
| J5/J6   | High-Speed Input Bus Connectors. The pinout of this connector is EV kit/FPGA firmware-specific.   |
| J7      | DDR-II (PC2-3200) DRAM Connector                                                                  |
| J11     | Clock Input. Optional external capture clock input, AC-coupled with adjustable threshold.         |
| J10     | Trigger Input. Optional external trigger input, DC-coupled logic input with adjustable threshold. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Board Connections

## Data Converter Evaluation Platform (DCEP) User's Guide

Figure 2. Data Converter Evaluation Platform (PCB Photo)

<!-- image -->

## Quick Start

## Required Equipment

- User-supplied PC running Windows XP SP2 (or compatible) with a spare USB 2.0-compliant port
- (Optional) Internet-capable PC
- (Optional) CD-ROM drive

Note: In  the  following  sections, software-related items are identified by bolding. Text in bold refers to items directly from the DCEP software. Text in bold and underlined refers to items from the Windows operating system.

## Setup Procedure

- 1) Complete  the  software  installation.  See  the Software Installation section.
- 2) Connect the 5V/4A supply to J4.
- 3) Connect the USB cable to a USB 2.0-compliant PC port and J1 on the DCEP. Each time the DCEP board is connected to a different USB port on the PC, the OS requests the driver installation. See the Driver Installation section.
- 4) Connect the desired ADC EV kit to J5/J6, as indicated in the respective EV kit data sheet.
- 5) Apply power to the ADC EV kit.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 6) Start the DCEP application on the PC.

## Detailed Description of Hardware

The data converter evaluation platform (DCEP) is a data-capture device for use with high-speed analog-todigital  converters (ADCs). It interfaces with Maxim's high-speed data converter EV kits using a flexible data bus. The data bus is configurable to support either single-ended or differential logic standards to meet specified requirements of numerous converters.

The DCEP is controllable through a user-supplied PC running Windows XP SP2 (or compatible) OS, with a spare USB 2.0-compliant port and Maxim's proprietary software. The software is GUI based to provide user control for data capture, processing, and displaying results.  Data  processing is powered by MATLAB, an industry-recognized tool for math-based analysis.

A single 5V/4A power supply is required and is included with the DCEP. Software controls the DCEP onboard power supplies for the DRAM, FPGA, and DUT interfaces through USB.

Product-specific FPGA firmware is available for use with the DCEP. The firmware defines the interfaces for data capture and transfer to the PC.

## Data Converter Evaluation Platform (DCEP) User's Guide

## Converter Interface

The DCEP interfaces to Maxim ADCs through connectors J5 and J6. The configuration of these connectors is dependent on FPGA firmware. The I/O connector is arranged in a default configuration of two 16-bit LVDS buses with two clock inputs-one clock at each end of the bus. Device-specific modules map the I/O interface to meet the requirements of the specific EV kit.

J5 and J6 are Samtec QTH-060-01-L-D-A connectors; use Samtec part number QSH-060-01-L-D-A for mating applications. Mechanically securing the boards is recommended for reliable direct interfacing. Captive nuts, stand-offs, and cap screws are provided for this purpose. Optional cables are available from Samtec to provide physical separation of the boards. Order part number HQCD-060-xx.yy-STR-TBR-1 directly from Samtec (where xx.yy is the length of the cable in inches). Layout requirements for ADC EV kits are shown in Appendix A.

## USB Interface Connector

The DCEP communicates through the PC USB 2.0 port for high-speed data transport. Connector J1 (USB typeB connector) is the designator for the USB port on the DCEP. The DCEP draws less than 100mA of current from the PC to power the USB interface circuitry.

## Table 2. Indicator LED Definitions

| LED LABEL   | FUNCTION                                                                                                              | TYPICAL OPERATING STATE   |
|-------------|-----------------------------------------------------------------------------------------------------------------------|---------------------------|
| VINTCTL1    | Combined with VINTCTL2; indicates programmed level of the FPGA internal supply (see Table 3 for adjustment settings)  | On                        |
| VINTCTL2    | Combined with VINTCTL1; indicates programmed level of the FPGA internal supply (see Table 3 for adjustment settings)  | On                        |
| SHDN_I2C    | Indicates I 2 C bus has been disabled                                                                                 | Off                       |
| SPI_FS      | Indicates SPI bus voltage is forced from on-board supply                                                              | Off                       |
| VU3.3V      | Indicates USB-powered 3.3V bus is active                                                                              | On                        |
| VF3.3V      | Indicates main 3.3V power bus is active                                                                               | On                        |
| VAUXCTL1    | Combined with VAUXCTL2; indicates programmed level of the FPGA auxiliary supply (see Table 3 for adjustment settings) | On                        |
| VAUXCTL2    | Combined with VAUXCTL1; indicates programmed level of the FPGA auxiliary supply (see Table 3 for adjustment settings) | On                        |
| VIOCTL1     | Combined with VIOCTL2; indicates programmed level of the FPGA I/O supply (see Table 3 for adjustment settings)        | On                        |
| VIOCTL2     | Combined with VIOCTL1; indicates programmed level of the FPGA I/O supply (see Table 3 for adjustment settings)        | On                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Power Connector

The primary power supply for the DCEP is 5V, applied through power connector J4. The nominal current requirement for this supply is 1.4A when the FPGA is configured for a typical ADC interface. Additionally, pads are provided to allow a standard bench-type power supply to be used in place of the provided power cube.

## Status LEDs

The DCEP contains five sets of LEDs to indicate the status of the FPGA and on-board power supplies. The first set  of  indicators  is  located  between  power  connector J4 and USB connector J1. These four LEDs provide visual  indicators  for  the  5V  external  source  (V5RAW), the SDRAM (VDDQ and VTT), and the USB 5V (VUSB) supplies.

The second LED bank is also the largest, consisting of eight indicators. These indicate the programmed state of the on-board power supplies for the FPGA, the I 2 C, and SPI™ bus supplies. See Table 2 for specific information on these indicators.

The next two banks are located between the TRIG and CLOCK SMA connectors. The function of these indicators is dependent on the FPGA configuration in use. Refer to the specific module documentation for more information.

SPI is a trademark of Motorola Inc.

## Data Converter Evaluation Platform (DCEP) User's Guide

## Table 3. Supply Margin Adjustments

|   CTL2 |   CTL1 | SUPPLY OUTPUT   |
|--------|--------|-----------------|
|      0 |      0 | Off             |
|      0 |      1 | Nominal - 4%    |
|      1 |      0 | Nominal + 4%    |
|      1 |      1 | Nominal         |

Note: Software default is nominal for all supplies. The user can alter this setting if required.

The final two LEDs are located between the FPGA and the INPUT connectors (J5 and J6). These two LEDs provide the status of the FPGA I/O supply and are listed in Table 2.

## Detailed Description of Software

## Software Installation

The DCEP installation is performed by an InstallShield ® application, which is located on the CD-ROM that is included with the EV kit. Insert the CD-ROM in the PC CD drive. Open the folder for this drive and doubleclick on the DCEP Installation DDMMMYY.exe file. Note that DDMMMYY indicates the day, month, and year of the available software build. Check www.maximic.com/tools/evkits for  updates. The installation requires some input from the user to complete this process. Figures 3-11 display the progression through the various windows of the software installation.

InstallShield is a registered trademark of Acresso Software Inc./InstallShield Co., Inc.

<!-- image -->

Figure 3. InstallShield Wizard-Software Installation (click Next to continue)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Converter Evaluation Platform (DCEP) User's Guide

Figure 4. Customer Information-User Input (click Next to continue)

<!-- image -->

Figure 5. Destination Folder-Use the Default or Define a Specific Installation Location (click Next to continue)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

Figure 6. Ready to Install the Program-Verify Installation Options (click Install to continue)

<!-- image -->

Figure 7. Installing DCEP-Installation in Progress (when completed, a Finished button appears to exit installation process)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Converter Evaluation Platform (DCEP) User's Guide

## Driver Installation

Windows automatically detects the presence of the DCEP when it is connected. The first time this occurs on any given USB port, Windows requests the installa- tion of the hardware driver. The installer initially requests to connect to Windows Update. Select the No, not this time radio button and click the Next button to proceed.

Figure 8. Found New Hardware Wizard-Start Hardware Driver Installation (select No, not this time , and click Next to continue)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Converter Evaluation Platform (DCEP) User's Guide

Figure 9. Install Software Automatically (click Next to continue)

<!-- image -->

Note: The driver is not registered with Microsoft; therefore, a warning message appears next.

Figure 10. Driver Warning Message (click Continue Anyway to complete the installation)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

9

## Data Converter Evaluation Platform (DCEP) User's Guide

Figure 11. Completed Installation Notification (click Finish to exit)

<!-- image -->

Note: The driver installation may execute more than one time. Follow this procedure each time it appears.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

## Running the Application

The installation process adds the program to the listing available from the system's Start menu (Figure 12). Figure 13 depicts the main application window.

<!-- image -->

Figure 12. Link to Start the Application

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Converter Evaluation Platform (DCEP) User's Guide

## Menu Structure and Function

There are several menu options available under the main application window's menu bar: File , View , Hardware , Window , and Help (Figure 13).

Figure 13. Main Application Window at Startup

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

Figure 14. File Menu Options

<!-- image -->

Figure 15. View Menu Options

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

File  Menu Options: The options available under the File menu item are New , Open , Close , Save , Save As , a list  of  the  four  most  recent  databases, and Exit (Figure 14). New starts  a  new  database and requires the definition of a device-specific module and database name. See the Opening a New Database section to find more details on this option. Open allows the user to select a previously saved database. Close , Save ,  and Save As are only available if a database is currently open. Exit saves and closes the current database and ends the application.

View Menu Options: The View menu item (Figure 15) provides several options for configuring the workspace. Options are available to activate the various toolbars, workspace windows, database options, and Excel export options. The Database Preferences and EXCEL Exports options will be of primary interest to the user.

## Data Converter Evaluation Platform (DCEP) User's Guide

Selecting Database Preferences opens a new window (Figure 16) with the ability to modify various parameters stored in the database. The first category is Data Entry and handles the default suffixes for entering signal frequencies and amplitudes, along with the supply suffix.

The second category is Math Options . Coherent Calculation Mode selects the use of either a Prime or an Odd number of input cycles for frequency calculations. Signal Search Span determines how many FFT bins to include in the peak search for the fundamental and harmonic frequencies.

Maxim has several application notes available that cover the evaluation of ADCs:

- Application Note AN1040: Coherent Sampling vs. Window Sampling ( www.maxim-ic.com/appnotes. cfm/an\_pk/1040 )
- Application Note AN728: Defining and Testing Dynamic Parameters in High-Speed ADCs, Part 1 ( www.maxim-ic.com/appnotes.cfm/an\_pk/728 )
- Application Note AN729: Dynamic Testing of HighSpeed ADCs, Part 2  ( http://www.maxim-ic.com/ appnotes.cfm/an\_pk/729 )

The final category in this window is Graph Options . The user can choose to label the FFT plot with any number of harmonics. A value of 1 in the Number of Harmonics To Label box labels only the fundamental. Since low-level harmonics are not usually of interest, the user can adjust the Harmonic Level Threshold for labeling. The value entered here is in dBFS (dB relative to the full-scale range of the ADC). Any harmonic below this  level  is  not  labeled.  Finally,  when  using  coherent sampling, the data can be viewed as a single cycle. The Unscramble Raw Code option, when True ,  causes the time stream data to be resequenced into a phase-ordered dataset. The unscrambled (phaseordered) view is useful for showing timing glitches in the  data-capture interface. Examples of unscrambling are shown in Figures 17 and 18.

Figure 16. Database Preferences Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

## Evaluates:  High-Speed Data Converters (ADCs)

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 18. Data Unscrambled

## Data Converter Evaluation Platform (DCEP) User's Guide

Hardware Menu Options: The options available under the Hardware menu item are shown in Figure 19. The option of primary interest to the user is Device Modules .  Device-specific modules provide softwareand FPGA-configuration information required to interface with a specific Maxim EV kit. Device Modules pro- vides two selections, Add and Manage .  These allow the user to add new device-specific modules (Figure 20) to the existing list of modules, or to manage (add/delete) the existing list (Figure 21).

The latest device-specific modules can be downloaded from www.maxim-ic.com/tools/evkits .

<!-- image -->

Figure 19. Hardware Menu Options

<!-- image -->

Figure 20. Add Module Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Converter Evaluation Platform (DCEP) User's Guide

Figure 21. Module Manager Window

<!-- image -->

Figure 22. Window Menu Options

<!-- image -->

Window Menu Options: The Window menu item (Figure 22) provides options that control the display of the  channel data windows. The data windows can be tiled  horizontally (Figures 17 and 18) or vertically (Figure 23). The active data channel can be selected here or by selecting the desired channel data window.

Help Menu Options: The Help menu item provides an About option, which provides the current build release and access to the PC system information.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

Figure 24. Module Selection Window for a New Database

<!-- image -->

## Opening a New Database

The software requires that a database and device-specific module be opened to define the ADC that will be evaluated. Select File -&gt; New to select a module and open a new database (Figure 14). After saving the initial  database, the device-specific module does not have to be redefined.

When opening a new database, the device module selection window pops up, allowing the user to select from the current list of installed device-specific modules. Select the appropriate module and click on New to proceed (Figure 24).

After selecting the device-specific module, another window opens allowing the user to specify the location and name of the new database. These files are typically stored in the Database folder that is  created during software installation (Figure 25).

The program builds the new database, programs the FPGA, and populates the screen (Figure 26) with the default windows to control the specified ADC EV kit.

Figure 25. Select the Database Folder and Enter the New Database Name

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

## Preparing to Capture Data

There  are  several  parameters  in  the ADC Test Parameters pane (located along the left edge of the workspace, as shown in Figure 26), which must be set to properly capture and analyze data from the ADC.

The first set of parameters has to do with the size of the record and FFT windowing functions. Windowing is typically  not  applied  when  coherent  sampling is utilized. Figure 27 highlights the Number of Points field  that determines the size of the record to acquire. The record size applies to each channel captured; therefore, setting the record size to 65,536 for a dual-chan- nel  device  captures and transfers to the PC a total of 131,072 samples and results in a 32,768-point FFT plot per channel. The record size is forced to be a power of 2.  Limitations  in  the  analysis  routines  inhibit  the Raw Data , Normalized Data ,  and FFT plots  when records greater than 4Mw are used. The maximum record length is also dependent on the type of device being tested. For example, an 8-channel device would be limited to 2Mw due to pretrigger samples.

Figure 27. Number of Points Field Highlighted

<!-- image -->

The software provides several standard window functions for use on the FFT, as shown in Figure 28.

Figure 28. FFT Windowing Options

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

Figure 29. Coherent Frequency Calculator Options

<!-- image -->

The next parameter of interest is the ADC sampling clock frequency. Select the value box and type in the desired frequency. The value is entered in terms of the units  supplied. For example, to enter a frequency of 150MHz the user would type 150MHz into the window; 150E6 would not be recognized. However, 150,000,000Hz would be formatted to 150MHz. The amplitude value is useful for recording the test settings. The Link To is for future use in GPIB applications.

Following the clock are the input settings. Enter the desired input frequency for channel 1. The frequency input box behaves the same as the clock input box. After setting the input frequency for all channels of interest, the coherent frequency must be calculated by clicking on the calculator icon, located at the top of the ADC Test Parameters pane. This icon provides several  options  for  the  desired  calculation.  A  single  click directly  on  the  icon  calculates  the  coherent  frequency for all inputs based on the number of samples, the use of prime or odd, and clock frequency. The drop-down list  located  on  the  right  of  the  icon  also  provides  the option to calculate the clock frequency to match one of the available input signals (Figure 29).

Some ADC devices provide several options for output data formatting. These can include one or more of the following: offset binary, two's complement, or Gray code. Change the default type to match the ADC's data format.

Following the Input information is a section that controls the Calculation Options used to analyze the ADC performance. Figure 30 shows the list of options. Note that the Calculate Histogram , Calculate INL ,  and Calculate DNL options are set to False by default.

<!-- image -->

Figure 30. Calculation Options

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Converter Evaluation Platform (DCEP) User's Guide

Finally, the Control Options provide the user access to features available on the DCEP hardware. The first option is the Capture Clock Source .  The  default  is DUT Clock 1 from the ADC EV kit. Multichannel devices may have separate data clocks in each channel's  data  bus;  if  available,  additional  clocks  can  be listed here. The SMA connector labeled CLOCK on the PCB may also be used as the data clock source when clock signals other than those provided by the ADC EV kit are desired. The Decimate Clock option should be selected in these cases. The DRAM Clock is used for DCEP board debug purposes.

The Capture Clock Edge and DUT Clock Delay are used to optimize the data-capture timing. Normally, these values are set to the default that is supplied in the device-specific module. However, with temperature and/or voltage variations it may be necessary to adjust these parameters to acquire error-free data.

Figure 31. DCEP Control Options

<!-- image -->

The DUT Clock Mode (Figure 31) allows the option to use the DUT-supplied clock directly. At very low frequencies (less than 18MHz), the digital clock manager (DCM) in the FPGA will not properly lock to the input signal and the Direct clock mode must be used. Note that the DUT Clock Delay has no effect when using the Direct clock mode.

The Clock Threshold applies to the Decimate Clock input only. It has no impact on the clock supplied directly from the ADC EV kit.

The Trigger Mode defaults to Auto and is generated internally by the FPGA. When precise triggering is needed, use the SMA connector labeled TRIG on the PCB to provide the user-supplied trigger signal. Apply a single-ended logic signal to this port and adjust the Trigger Polarity and Trigger Threshold to  match the trigger signal's characteristics.

Many Maxim ADCs support a wide range of digital output supplies. The default I/O voltage, to match the ADC EV kit, is  set  by  the  device-specific module. In the event the user requires a different voltage, change the value in the IO Voltage field to the desired I/O supply. Set the I/O supply on the EV kit to match the value programmed on the DCEP.

The final option in this section is the DRAM Delay . The value for this parameter is set in the device-specific module and should not be altered. Contact the factory for support in using the DRAM Delay option.

## Capturing Data and Viewing Results

Once all converter test parameters have been entered, the application is ready to capture and process data according to the selected options. There are several options for data record control (Figure 32).

Since the evaluation of an ADC typically requires the collection of performance results for a variety of conditions, the application allows numerous data records to be captured, processed, and stored. The currently displayed record and number of records is shown in the first field. Use the arrow keys on either side of the box to scroll through the available records.

The GUI's Add Record and Delete Record buttons follow the record selection. Use these buttons to add a new record or delete an existing one. The active channel determines which channel the Refresh Single and

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

Figure 32. Process Control Buttons

<!-- image -->

Continuous Refresh Single buttons act on. The Refresh buttons cause the DCEP to capture a new set of data and transfer it into the database. All active calculations are updated with the new data.

The Export Data and Import Data buttons save the raw data, in single-column integer format, to disk. This can be useful for processing any captured data in other applications.

The Export Excel button allows the user to export the data views to an Excel workbook. The pages that are exported are selected in the View -&gt; EXCEL Exports menu item. Each data view is exported to a separate worksheet within the user-defined workbook.

There are seven tabs per ADC channel that provide views of the test results, which are labeled Raw Data , Normalized Data , FFT , Info , Histogram , INL , and DNL .

The Raw Data tab (Figure 33) is a plot of the captured data. The y-axis is set to the code range for the ADC; integer values from 0 to 2 N where N is the ADC resolution in bits. Depending on record size, it can be difficult to discern details in the captured data record. Two features are available to allow the discovery of subtle details. One way is to use the Unscramble Raw Code option that was previously mentioned. The second method, which can be combined with the Unscramble Raw Code feature,  is  to  zoom  in  on  specific  areas  of the plot.  The  zoom functions are accessed using the typically  seen magnifying glass icons in the tool bar located just below the menu bar.

The Normalized Data tab (Figure 34) shows the results of converting the captured values into real values cen- tered at zero with a magnitude of ±1.0. The data shown here is used for the FFT, providing accuracy in calculation  of  DC  offset.  The Unscramble Raw Code and magnifying options apply to this plot as they did in the Raw Data tab.

<!-- image -->

The FFT results are displayed in the FFT tab (Figure 35). Labels on the spurs may be present depending on the options selected from the View -&gt; Graph Options menu item. The magnifying functions can be useful here as well.

A summary of the results on the current dataset can be seen on the Info tab (Figure 36). ADC input amplitude, SNR, SINAD, THD, SFDR, INL, and DNL results are all displayed if enabled in the ADC Test Parameters pane. Harmonic levels are also shown based on the value in the Last Harmonic Frequency Calculated field, also located in the ADC Test Parameters pane.

A histogram of the raw data is shown on the Histogram tab (Figure 37). The magnifying function can be used here to look for missing codes. Large record sizes &gt; 256k samples are recommended for linearity measurements as they increase the accuracy of the results. The ADC input signal must not exceed the full-scale range (FSR) of the ADC in order for the INL and DNL calculations to be accurate.

The final two tabs, INL (Figure 38) and DNL (Figure 39) graphically display the ADC linearity performance. Linearity is  calculated using a code density method and the histogram data. Application Note AN2085: Histogram Testing Determines DNL and INL Errors ( www.maxim-ic.com/appnotes.cfm/an\_pk/2085 )  provides a discussion of this technique.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates:  High-Speed Data Converters (ADCs)

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

Figure 33. Raw Data View

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

## Evaluates:  High-Speed Data Converters (ADCs)

## Evaluates:  High-Speed Data Converters (ADCs)

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 35. FFT View (Harmonic Labels Enabled)

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

## Evaluates:  High-Speed Data Converters (ADCs)

## Evaluates:  High-Speed Data Converters (ADCs)

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

Figure 37. Histogram View

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

## Evaluates:  High-Speed Data Converters (ADCs)

## Data Converter Evaluation Platform (DCEP) User's Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Data Converter Evaluation Platform (DCEP) User's Guide

Appendix A: Physical Requirements for EV Kit Connection to DCEP

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.