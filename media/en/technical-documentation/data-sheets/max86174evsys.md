<!-- lastmod 2025-06-20 -->
<!-- image -->

Evaluates: MAX86174A

## General Description

The MAX86174 evaluation system (EV Sys) provides a platform to evaluate the functionality and features of the MAX86174A with photoplethysmogram (PPG) measurement capabilities. The EV Sys allows for flexible hardware and software configurations to help the user quickly learn how to configure and optimize the MAX86174A for their own applications.

The MAX86174A is an ultra-low power PPG analog frontend solution that has dual optical-readout channels and supports up to 4 LEDs and 2 photodiode inputs. For more information, refer to the MAX86174A data sheet.

The MAX86174 EV Sys consists of two boards. MAXSENSORBLE\_EVKIT\_B is the microcontroller (MCU) board  while  MAX86174A\_OSB\_EVKIT\_B  is  the  sensor board containing the MAX86174A. To enable PPG measurement capabilities, the sensor board contains 3 LEDs (red, green, and IR in a single package: OSRAM SFH7016), three  discrete  photodiodes  (Vishay  VEMD8080),  and an  accelerometer.  The  EV  Sys  is  powered  through  the included  LiPo  Battery.  The  EV  Sys  communicates  with MAX86174GUI  (should  be  installed  in  user's  system) using Bluetooth built into Windows (Win BLE). The EV Sys contains the latest firmware but comes with the program -ming circuit  board  MAXDAP-TYPE-C in case a firmware change is needed.

## Features

- Convenient Platform to Evaluate the MAX86174A
- Many Easy-to-Reach Test Points
- Real-Time Monitoring and Plotting
- Data Logging Capabilities
- Bluetooth LE
- Windows®-10-Compatible GUI software

## MAX86174 Evaluation System

## EV Sys Contents

- MAXSENSORBLE\_EVKIT\_B microcontroller board
- MAX86174A\_OSB\_EVKIT\_B sensor board
- 105 mAh Li-Po battery LP-401230
- USB-C to USB-A cable
- MAXDAP-TYPE-C programmer board
- Micro USB-B to USB-A cable

## MAX86174 EV Sys Files

| FILE                           | DESCRIPTION                              |
|--------------------------------|------------------------------------------|
| MAX86174GUISetupV1.0.0_Web.zip | Setup file to install the PC GUI program |
| MAXSENSORBLE_EVKIT_B.zip       | Schematic, BOM, layout                   |
| MAX86174A_OSB_EVKIT_B.zip      | Schematic, BOM, layout                   |

Ordering Information appears at end of data sheet.

Windows is a registered trademark of Microsoft Corporation.

## MAX86174 Evaluation System

## MAX86174 EV System Photo

<!-- image -->

│

Evaluates: MAX86174A

## MAX86174 Evaluation System

## Quick Start

## Required Equipment

- MAX86174 EV Sys
- USB-C to USB-A cable
- Windows System with a USB port and Bluetooth 4 with BLE supported on its Hardware (Win BLE)
- 105mAh Li-Po battery LP-401230
- Microsoft .NET framework 4.7.2 or above

## Procedure

The  EV  Sys  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation.

Note: In  the  following  sections,  text  in bold refers  to items and buttons in the MAX86174EVSYSGui.exe GUI program.

- 1) Enable Bluetooth on the user's Windows System/PC.
- 2) Visit www.maximintegrated.com/MAX86174 to download the most recent version of the EV Sys software, MAX86174GUISetupV1.0.0\_Web.zip. Save the EV Sys software to a temporary folder and unzip the zip file.

Evaluates: MAX86174A

- 3) Open MAX86174GUISetupV1.0.0.exe and follow the instructions from the pop-up windows. This will install the MAX86174EVSYSGUI.exe GUI program to the user's system successfully.
- 4) Press the power button to turn on/off the EV Sys. When powered on, the green status LED indicator flashes at 1Hz. Note: USB-C to USB-A cable is for charging the battery only. System performance during charging might decrease.
- 5) Launch the MAX86174EVSYSGUI.exe GUI program. A Connect to Device window should appear. Win BLE appears on the Port, if multiple connections appear then select Win BLE . The EV Sys device should appear under the Select a device below . Choose the device and click Connect . The GUI is then launched.
- 6) Configure GUI settings as needed. The default GUI settings are configured to record one PPG measurement.
- 7) Click the Start button on the bottom right to start data acquisition. When running, the plots on the GUI should stream with data. Figure 1 shows an example of a plot with PPG measurements enabled.

Figure 1. Plot of PPG

<!-- image -->

│

## MAX86174 Evaluation System

## Detailed Description of Software

The EV Sys allows PPG data to be sampled and transferred to the GUI for both dynamic viewing and logging for  later  analysis.  The  EV  Sys  MCU  board  performs SPI-to-Bluetooth  LE  (BLE)  communication,  transporting the data to the PC through BLE. Most functionality of the MAX86174A has been mapped to the EV Sys GUI, so that  the  user  can  explore  a  wide  variety  of  applications supported  by  the  MAX86174A.  The  following  sections describe these functionalities.

## Software Startup

To begin Bluetooth connection of the EV Sys to the PC, first  ensure that Bluetooth is enabled on the PC so that it  can  detect  the  EV  Sys  for  pairing.  Now  turn  on  the EV  Sys.  Start  up  the  MAX86174EVSYSGui.exe  GUI program, which prompts a Connect To Device window,

## Evaluates: MAX86174A

as shown in Figure 2 .  In  this  window, click on the COM port that corresponds with the Win BLE and the EV Sys device should appear under the Select a device below . Choose the EV Sys and click Connect .

When launched, the software first initializes the EV Sys to  communicate.  The  software  then  reads  the  EV  Sys registers  and  updates  all  the  associated  control  fields displayed on the GUI. The status strip at the bottom of the GUI displays the firmware version, GUI version, and the hardware's associated COM port.

## Toolstrip Menu Bar

The Toolstrip Menu bar is located at the top of the GUI window.  This  bar  comprises  of File , Device , Options , Logging , and Help menus, whose functions are detailed in the following sections.

Figure 2. Connect to Device Window

<!-- image -->

Figure 3. Toolstrip Menu Bar

<!-- image -->

│

## MAX86174 Evaluation System

## File Menu

The File menu contains the option to exit out of the GUI program.

## Device Menu

The Device menu provides the ability to connect or disconnect the EV Sys to or from the GUI. If the EV Sys is disconnected  while  the  GUI  is  open,  the  GUI  displays Disconnected in the lower-right corner. To connect, turn on the EV Sys, navigate to the Device menu, and select Connect .  This  opens  the Connect  To  Device window, allowing the user to connect. Once connection is successful, the bottom-right corner of the GUI reads Connected and displays the COM port to which the EV Sys is connected.

## Options Menu

The Options menu provides several settings  to  access more  features  offered  by  the  GUI. Register  Export/ Import allows the user to quickly set up the GUI based on previously saved register settings. Export saves the current  register  settings  and Import loads  in  register settings from a file. Plot Time Scale allows  the  user  to select  the  number  of  seconds  of  data  they  want  to  see on the plot at once. Register Access under Advanced provides access to more register and system settings in the Registers tab for the user to customize.

## Logging Menu

The Logging menu provides a way to export exact data measured by the EV Sys. There are two options available: File to save data to a '.csv' file, or Flash to save data in

Evaluates: MAX86174A

the flash memory of the EV Sys. When the MAX86174 EV Sys is plugged in to the PC through the USB-C to USB-A cable,  the  option Parse  Bin  File parses  the  binary  file saved in the flash memory into a '.csv' file. See the Data Logging section of this data sheet for more details.

## Help Menu

The Help menu contains GUI information and links that can help with GUI issues.

## Data Acquisition Bar

The Data Acquisition bar is located at the bottom of the GUI window. This bar is comprised of EV Sys and GUI statuses, a Start/Stop button, and a Reset button.

## EV Sys and GUI Statuses

The  statuses  on  the  left  of  the Data  Acquisition bar indicate  the  status  of  the  EV  Sys,  EV  Sys  information, and whether flash and file logging are enabled. The bottom right of the bar indicates whether the EV Sys is connected. The  bottom  middle  of  the  bar  displays  the  GUI version.

## Start/Stop Button

Pressing Start begins data acquisition and visualizes the data in the Plots tab.  During data acquisition, the Start button turns into a Stop button. Press this Stop button to stop data acquisition and data visualization.

## Reset Button

Pressing Reset resets  all  registers  and  GUI  settings  to predefined default values.

Figure 4. Data Acquisition Bar

<!-- image -->

│

## Settings Tab

## Frame Rate

A frame is a collection of measurements that has a minimum of 1 measurement and a maximum of 6 measure -ments. The frame rate defines how frequently a frame is repeated. The frame rate can take on any value from 1fps to 2.9kfps. The Valid Framerate indicator at the bottom of the GUI displays green if the frame rate is valid, yellow if the frame rate might cause unexpected behavior, and red if the frame rate does not work.

## PPG Filter Configuration

The  MAX86174A  contains  a  second  order  decimation filter  that  can  be  used  instead  of  the  default  third  order COI3 decimation filter. This second order decimation filter has narrower bandwidth and can improve PPG SNR by  about  1dB  to  2dB.  This  filter  can  be  enabled  in  the Second Order Filter of  the  EV  Sys GUI. Note that this second order decimation filter can only be enabled when the SINC3 Filter option is disabled and Integration Time is set to 117.1μs or 118.2μs for all enabled measurements in the Measurement Settings tab.

The  MAX86174A  contains  a  digital  low-pass  filter  that significantly improves SNR. This digital low-pass filter can be enabled in the Digital LPF Enable of the EV Sys GUI and selected between an on-chip IIR filter with selectable corner frequencies as defined in IIR  Cut  Off  Frequency of  the  GUI  or  sample  averaging,  aka  decimation averag -ing, with selectable number of samples to be averaged as defined in Averaging of the GUI. Note that, when using the IIR filter, the PPG frame rates supported are 50Hz, 100Hz, and 200Hz. Note that, when using sample averaging, aver -aging a larger number of samples reduces the data rate. Refer to the MAX86174A data sheet On-Chip Filtering and On-Chip Averaging sections for details.

## System Control

The  MAX86174A  contains  three  modes  of  frame  rate control.  Selecting Internal  Frame in  the  EV  Sys  GUI

allows the MAX86174A to use the internal 32768Hz oscil -lator  and  internal  frequency  divider  to  control  the  frame rate. Selecting External Frame enables the MAX86174A to  use  the  TRIG  input  pin  to  trigger  a  frame  to  start. Selecting External Clock enables the MAX86174A to use the TRIG input pin to be an external frame clock input. Refer  to  the MAX86174A  data  sheet  Synchronization Modes section for details.

The MAX86174A contains the option to power down one of the PPG readout channels or to use dual PPG channels  simultaneously,  which  can  be  configured  by PPG1 Power  Down and PPG2  Power  Down in  the  EV  Sys GUI. Powering down a channel disables the channel from outputting data for all measurements.

## Photodiode Bias

The  MAX86174A  provides  multiple  photodiode  biasing options to allow the MAX86174A to operate with a large range  of  photodiode  capacitances.  The PD1 and PD2 bias  settings  in  the  EV  Sys  GUI  adjust  the  photodiode bias point impedance on the dual optical readout channels of the MAX86174A chip to ensure that the photodiode settles rapidly enough to support the sample timing. Configure PD1 and PD2 biasing  settings  depending  on the  capacitance  of  the  photodiode  used.  It  is  recommended to set the PD1 and PD2 biasing settings to 0pF to 125pF if using the provided photodiodes in the EV Sys. Note that, when PD1 and PD2 go to the same PPG channel, the greater of the two PD bias settings is used.

## Accelerometer Configuration

The  MAX86174  EV  Sys  comes  with  an  accelerometer. The Free-Run in  the  EV  Sys GUI is enabled by default and runs the accelerometer asynchronously at the sample rate defined in Output Data Rate . This data rate should be set higher than the optical PPG frame rate. The default full-scale range of the accelerometer is ±8g. If the accelerometer is enabled, the accelerometer data is plotted in the Accelerometer Plot tab.

## MAX86174 Evaluation System

Figure 5. Settings Tab

<!-- image -->

## Measurement Settings Tab

## Measurements

The MAX86174A supports up to six measurements per frame. Any measurement can be enabled, and the measurements do not need to be contiguous. If a measurement is disabled, then data acquisition is skipped for that measurement. If ambient light needs to be measured, it should  always  be  the  last  enabled  measurement  in  the frame.  Select Enable in Meas  Enable of  the  EV  Sys GUI  to  enable  the  corresponding  measurements.  The sequence  of  enabled  measurements  repeats  for  each frame and is plotted in the corresponding Meas 1 to Meas 6 tabs.

Click Apply to All Meas to apply the corresponding setting  of  the  first  enabled  measurement  to  the  rest  of  the enabled measurements.

## Integration Time

The  MAX86174A  supports  exposure  integration  times of 14.6μs, 29.2μs, 58.6μs, and 117.1μs or 118.2μs (with COI2 filter integration time is 118.2μs), which is selected in Integration  Time of  the  EV  Sys  GUI.  Longer  expo -sures allow more photons to be captured and integrated, but  also  increase  system  power  and  reduce  ambient rejection capability.

## Average

The MAX86174A supports burst averaging of 1 sample to 128 samples, which is selected in Average of the EV Sys GUI. This feature is useful if more optical energy is needed  to  make  a  low  perfusion  measurement  but  the data rate across the interface or the processing power in a host microcontroller might not be desirable.

│

## MAX86174 Evaluation System

## PPG Range

The MAX86174A optical receive channel has 4 ADC fullscale range settings, which is selected in PPG1 Range and PPG2 Range of the EV Sys GUI. These ranges are 4μA, 8μA, 16μA, and 32μA. Larger ADC range prevents saturation thereby allowing a larger exposure range to be captured.

## PPG PD Select

The MAX86174A contains four custom configurations to route PD1 and PD2 inputs to the two optical ADC readout channels PPG1 and PPG2. These configurations are truncated in the GUI and are decoded as follows:

- 'PD1+PD2/-' means that PPG1 is connected to both PD1 and PD2 inputs.
- 'PD2/PD1' means that PPG1 is connected to PD2 input, and PPG2 is connected to PD1 input.
- 'PD1/PD2' means that PPG1 is connected to PD1 input, and PPG2 is connected to PD2 input.
- '-/PD1+PD2' means that PPG2 is connected to both PD1 and PD2 inputs.

## PD Settling Time

The MAX86174A requires a photodiode settling time inbetween samples to allow the photodiode to settle before integrating the next sample's exposure photocurrent. This setting is defined in the PD Settling of  the EV Sys GUI and ranges from 8.1μs to 80.1μs. The PD Settling time must be more than the LED Settling time.

## LED Driver Configurations

In  each  measurement,  there  are  two  LED  drivers  that have a DAC output current range defined by LED Range . There are 4 full-scale range settings 32mA, 64mA, 96mA, and 128mA.

## Evaluates: MAX86174A

Each measurement can drive none, both, or one of these LED drivers.  This  configuration  of  LED  driver  and  LED mux is  highly  flexible,  allowing  for  any  of  the  four  LED driver pins to sink current from one or both LED drivers. The Driver  x  PA box  defines  the  LED  pulse  amplitude and allows for a desired current value to be entered. The nearest available DAC current is then selected and used to drive the corresponding LED selected in LED Driver x .

## LED Settling Time

The  MAX86174A  requires  an  LED  settling  time  for  each sample to allow brightness to settle after the LED turns on before integrating the sample's exposure photocurrent. This setting is defined in the LED Settling time of the EV Sys GUI and contains four settings, 8μs, 12μs, 16μs, and 24μs.

## Ambient Only

Enabling Ambient  Only for  a  measurement  results  in only ambient light to be acquired and plotted in that mea -surement.

## SINC3 Filter

The MAX86174A contains a SINC3 decimation filter that offers  better  high-frequency  ambient-light  cancellation than the default COI3 decimation filter. Selecting Enable in SINC3 Filter of  the  EV  Sys  GUI  enables  the  SINC3 Filter.  The  SINC3  filter  is  only  available  when  using  an Integration Time of 117.1μs.

## Ambient Light Cancellation Method

The  MAX86174A  contains  a  digital  ambient  light  cancellation  scheme,  which  can  be  configured  as  either central-difference  method  or  forward-difference  method. These methods cancel photodiode current generated by ambient light, allowing the sensor to work in high ambient light conditions. The ambient-light cancellation method is selected in the ALC Method of the EV Sys GUI. Refer to the MAX86174A  data  sheet  Ambient-Light  Cancellation section for details.

## MAX86174 Evaluation System

## PPG Offset

Each of the dual optical readout channels of the MAX86174A incorporates a 3-bit offset DAC for extending the optical dynamic range. The offset values can be set in the PPG Offset setting of the EV Sys GUI and ranges from 0μA to 28μA. This setting allows for a larger convertible exposure range by sourcing some of the exposure current from the offset DAC.

Figure 6. Measurement Settings tab

<!-- image -->

## MAX86174 Evaluation System

## Measurement Tabs

The Meas 1 to Meas 6 tabs display the plot for the corresponding PPG measurements, if enabled. In each tab, the PSNR, PSNR Average, and perfusion index are calculated and displayed to the right of the plots. Select Plot Time Scale under Options in the Toolstrip Menu Bar to change the time scale.

Figure 7. Meas 1 Tab

<!-- image -->

## MAX86174 Evaluation System

## Accelerometer Plot Tab

The Accelerometer Plot tab plots the accelerometer data if the accelerometer is enabled. Select Plot Time Scale under Options in the Toolstrip Menu Bar to change the time scale. Select Range to change the y-axis scale.

Figure 8. Accelerometer Plot Tab

<!-- image -->

## MAX86174 Evaluation System

## Registers Tab

The Registers tab allows you to read and write registers. Click a register to set or clear bit and W to commit to the EV Sys. Click R to read register or Read All at the top right to read all registers. Bold text is logic 1 and regular text is logic 0.

Note that  the  GUI  interface,  besides  the Register tab,  reflects  commonly  used  register  values  and  does  not  reflect all possible register values. Take caution when customizing register values in the Registers tab, as they might not be reflected or supported in the GUI interface.

Figure 9. Registers Tab

<!-- image -->

│

## MAX86174 Evaluation System

## Data Logging

This  section  explains  how  to  save  data.  Data  can  be saved directly to the PC in a '.csv' file or in the MAX86174 EV Sys flash memory.

## Setup

To directly save data to the PC, select File data logging in  the Logging  Menu .  The  GUI  then  asks  for  a  folder location  where  the  '.csv'  file  is  saved.  Logging  begins when Start is  pressed and ends when Stop is  pressed. This creates a '.csv' file in the defined folder location and saves data to the file.

To save data in the flash memory, select Flash logging in the Logging Menu . The EV Sys first clears existing flash memory and then logs raw sensor data to the integrated 32MB flash memory chip in a binary file format. The EV Sys can be disconnected and powered by the Li-Po battery  during  flash  logging,  allowing  for  remote  operation.

## Evaluates: MAX86174A

Note that clearing  the  existing  flash  memory  can  be  as long  as  1  minute  after Flash is  selected  depending  on how full the flash memory is. A flashing yellow status LED indicates  that  flash  logging  has  begun.  If  flash  memory fills or battery power drops too low, flash logging is automatically stopped and the file closes.

The file must be downloaded since it is erased from flash memory on the next log request. If a log has completed, a binary file will be found on the EV Sys. To download the binary file, connect the EV Sys to the PC using the USB-C to USB-A cable, and copy the binary file from the EV Sys onto the PC. Select Parse Bin File in the Logging Menu to  open  the Parser  Configuration  Window and  parse the  binary  file  into  a  '.csv'  file,  as  in Figure  10 .  Once completed,  the Parser Completed Messaged Window appears, as in Figure 11.

Note that the max duration for flash logging is dependent on frame rate and number of optical channels.

Figure 10. Parser Configuration Window

<!-- image -->

│

## MAX86174 Evaluation System

## Evaluates: MAX86174A

Figure 11. Parser Completed Message Window

<!-- image -->

## Output File Format

PPG data is saved in a '.csv' file. The following describes the format of this file. Rows 1-10 contain register values. Row 11 contains the start time in milliseconds. Row 12 contains expected tag values. Row 13 is a column header denoting the timestamp in milliseconds, sample number, tags  for  LED,  PPG  channels  for  each  measurement, accelerator  x,  y,  z  data,  temperature,  total  RTC  ticks, regAddr, val, and I2Caddr. The rows below contain rows of data corresponding to the column headers. Finally, the rows  below  the  rows  of  data  show  stop  time,  elapsed capture  time,  missed  packet  count,  incorrect  tag  count, and parser data.

Refer to Figure 12 for an example where one PPG mea -surement  is  enabled  with  only  LED  driver A  running  at 5.0mA and with both PPG channel 1 and PPG channel 2 enabled, and all else set to their default settings. The column  header  for  PPG  measurements  are  denoted  in the  format  'LEDCn\_PDm,'  where  n  corresponds  to  the nth  enabled  measurement  and  m  corresponds  to  the PPG channel 1 or 2. In this example, 'LEDC1\_PD2' rep -resents the 1st enabled measurement and PPG channel 2 of that measurement. Note that this header format does not  describe  which  LED,  LED  driver,  or  photodiode  is used. When multiple measurements are enabled, the corresponding columns are added in the '.csv' file following this header format.

│

## MAX86174 Evaluation System

## Evaluates: MAX86174A

Figure 12. Output CSV File Example for PPG Measurements (First Few Rows)

<!-- image -->

## Detailed Description of Hardware

## Status LED Indicators

The following onboard tri-color LEDs are used as status indicators.

## LED Green

Toggling (1Hz 50% duty cycle) = BLE is advertising Toggling (1Hz 10% duty cycle) = BLE is connected

## LED Red

USB-C cable is connected to the charger.

On = Charging

Off = Charge complete

## Flash Logging

On = Busy preparing the flash memory or flash mem -ory is full

Toggling (synchronously with the green LED) = Logging Off = Not logging

Note that flash logging indication takes precedence over the charging indication (i.e., if the EV Sys is plugged into a charger, the red LED indicates charge status). If flash logging is enabled while plugged into the charger, the red LED indicates flash log status.

## Powering the EV Sys

Press the power switch (SW) to turn on/off the EV Sys. When powered on, the green status indicator LED toggles as described in the Status LED Indicators section of this data sheet. When powered off, the green status indicator  LED  goes  out.  The  red  status  indicator  LED  might light  temporarily,  indicating  that  the  flash  log  is  closing. Plugging in the USB-C to USB-A cable also powers up the EV Sys.

Use the USB-C to USB-A cable to charge the integrated single-cell LiPo battery. The integrated PMIC initiates and stops charging automatically. Charge status is indicated through the red status indicator LED and GUI.

│

## MAX86174 Evaluation System

## Upgrading Firmware

In  case the MAXSENSORBLE board firmware needs to be upgraded, follow the procedure below to properly flash the firmware:

- 1) Connect the MAXSENSORBLE board to the MAXDAP-TYPE-C programmer board as shown in Figure 13. Whether the MAXSENSORBLE board is connected to the sensor board or not does not matter. The orientation of Type-C connection between the MAXDAP-TYPE-C programming board to the MAXSENSORBLE board does matter during flashing, which can be checked by making the Maxim logo on the programmer board stay on the same side with the Power Button of MAXSENSORBLE. Connect the USB Micro to USB-A cable to your PC and then the MAXSENSORBLE board has red and yellow status indicator LEDs on.
- 2) Unzip the MAX86174\_mcu\_flashtools.7z. In the unzipped folder, double click the file 'erase+flash\_ nrf52.bat.' Note: Do not simply copy the .bat file to any other folder, as the .bat file requires support from the files in this folder.

## Evaluates: MAX86174A

- 3) A command prompt should pop up when the '.bat' file is opened. Follow instructions provided in the command prompt to finish flashing the firmware. If the command prompt shows 'Verified Okay,' the firmware has been successfully flashed on the MAX -SENSORBLE board, as shown in Figure 15 . If you get any error, check all USB orientations and redo step 2 and step 3.
- 4) Once finished, unplug the MAXDAP-TYPE-C from the MAXSENSORBLE board.
- 5) Power off the MAXSENSORBLE board by holding down the Power Button for 12+ seconds and all the LEDs will be off. If sensor board is not connected to the MAXSENSORBLE, connect those two boards as shown in Figure 16.
- 6) Now the MAXSENSORBLE is ready. Power on the system by holding the Power Button for less than 1 second. Note: Holding longer for 1 second brings MAXSENSORBLE into bootloader mode.

Figure 13. Connections to Flash Firmware on MAXSENSORBLE\_EVKIT\_B Board

<!-- image -->

Figure 14. Flash nRF by Double-Clicking 'erase+flash\_nrf52.bat'

<!-- image -->

Figure 15. Command Prompt Display when Firmware Has Successfully Been Flashed

<!-- image -->

│

## MAX86174 Evaluation System

## Evaluates: MAX86174A

Figure 16. Connect Sensor Board to MAXSENSORBLE

<!-- image -->

## Component List

## MAX86174 EV System

| PART                  |   QTY | DESCRIPTION                            |
|-----------------------|-------|----------------------------------------|
| MAXSENSORBLE_EVKIT_B  |     1 | MAX86174 EV Sys Data Acquisition Board |
| MAX86174A_OSB_EVKIT_B |     1 | MAX86174 EV Sys Sensor Board           |
| 101181XX-000XXX       |     1 | USB-C to USB-A Cable, 3 Ft.            |
| LP-401320             |     1 | 105mAh Li-Po battery                   |
| MAXDAP-Type-C         |     1 | Programmer board                       |
| AK67421-1-r 2 USB 2.0 |     1 | USB-A to micro-USB cable               |

## Ordering Information

| PART           | TYPE      |
|----------------|-----------|
| MAX86174EVSYS# | EV System |

# Denotes RoHS compliant.

│

## MAX86174 EV System Bill of Materials

## MAXSENSORBLE\_EVKIT\_B

|   ITEM | REF_DES                             | DNI/DNP   |   QTY | MFG PART #                                                                | MANUFACTURER              | VALUE              | DESCRIPTION                                                                                                                                 |
|--------|-------------------------------------|-----------|-------|---------------------------------------------------------------------------|---------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | A1                                  | -         |     1 | 2450AT18A100                                                              | JOHANSON TECHNOLOGY       | 2450AT18A100       | ANTENNA; 2450AT SERIES; BOARDMOUNT; MINI 2.45 GHZ ANTENNA; 2450MHZ                                                                          |
|      2 | BAT                                 | -         |     1 | B2B-PH-K-S(LF)(SN)                                                        | JST MANUFACTURING         | B2B-PH-K-S(LF)(SN) | CONNECTOR; MALE; THROUGH HOLE; PH CONNECTOR; 2MM PITCH; SHROUDED HEADER; STRAIGHT; 2PINS                                                    |
|      3 | C1, C22, C26, C30-C37               | -         |    11 | GRM033R61A104KE15; LMK063BJ104KP                                          | MURATA;TAIYO YUDEN        | 0.1UF              | CAPACITOR; SMT (0201); CERAMIC CHIP; 0.1UF; 10V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R                                          |
|      4 | C2, C15, C25, C38-C43               | -         |     9 | GRM033R61A105ME15                                                         | MURATA                    | 1UF                | CAPACITOR; SMT (0201); CERAMIC CHIP; 1UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                     |
|      5 | C3, C4, C8, C9, C12, C16, C27       | -         |     7 | ZRB15XR61A475ME01; CL05A475MP5NRN; GRM155R61A475MEAA; C1005X5R1A475M050BC | MURATA;SAMSUNG;MURATA;TDK | 4.7UF              | CAPACITOR; SMT (0402); CERAMIC CHIP; 4.7UF; 10V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                                                   |
|      6 | C5-C7, C10, C13, C14, C47           | -         |     7 | GRM155R60J226ME11                                                         | MURATA                    | 22UF               | CAPACITOR; SMT (0402); CERAMIC CHIP; 22UF; 6.3V; TOL=20%; TC=X5R ;                                                                          |
|      7 | C19                                 | -         |     1 | GJM0335C1E1R0WB01                                                         | MURATA                    | 1PF                | CAPACITOR; SMT (0201); CERAMIC CHIP; 1PF; 25V; TOL=0.05PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                 |
|      8 | C20, C21, C28, C29, C45, C46, Z44   | -         |     7 | GRM0335C1H120GA01                                                         | MURATA                    | 12PF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 12PF; 50V; TOL=2%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                    |
|      9 | C23, C24                            | -         |     2 | GRM0335C1H101JA01                                                         | MURATA                    | 100PF              | CAPACITOR; SMT (0201); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                   |
|     10 | CN1                                 | -         |     1 | DX07S024JJ3R1300                                                          | JAE ELECTRONIC INDUSTRY   | DX07S024JJ3        | CONNECTOR; FEMALE; SMT; USB TYPE-C CONNECTOR; DX07 SERIES RECEPTACLE; RIGHT ANGLE; 24PINS                                                   |
|     11 | DS1, DS2                            | -         |     2 | SML-P11UTT86                                                              | ROHM                      | SML-P11UTT86       | DIODE; LED; SMT; PIV=1.8V; IF=0.02A                                                                                                         |
|     12 | J3                                  | -         |     1 | 5035662500                                                                | MOLEX                     | 5035662500         | CONNECTOR; FEMALE; SMT; EASY-ON TYPE HOUSING ASSEMBLY; RIGHT ANGLE; 25PINS                                                                  |
|     13 | L1, L2                              | -         |     2 | DFE18SBN2R2MELL                                                           | MURATA                    | 2.2UH              | EVKIT PART - INDUCTOR; SMT (0603); SHIELDED; 2.2UH; 20%; 1.2A                                                                               |
|     14 | L3                                  | -         |     1 | DFE201610E-4R7M=P2                                                        | MURATA                    | 4.7UH              | INDUCTOR; SMT (2016); METAL ALLOY CHIP; 4.7UH; TOL=+/-20%; 1.3A                                                                             |
|     15 | L4                                  | -         |     1 | LQP03HQ3N3B02                                                             | MURATA                    | 3.3NH              | INDUCTOR; SMT (0201); FILM TYPE; 3.3NH; TOL=+/-0.1nH; 0.5A                                                                                  |
|     16 | LED                                 | -         |     1 | SML-LX0404SIUPGUSB                                                        | LUMEX OPTOCOMPONENTS INC  | SML-LX0404SIUPGUSB | DIODE; LED; SML; FULL COLOR; WATER CLEAR LENS; RED-GREEN-BLUE; SMT; VF=2.95V; IF=0.1A                                                       |
|     17 | R2, R3, R11, R15, R24, R27-R31, R34 | -         |    11 | ERJ-2GE0R00                                                               | PANASONIC                 | 0                  | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                        |
|     18 | R5, R9                              | -         |     2 | ERJ-1GEF1002                                                              | PANASONIC                 | 10K                | RESISTOR; 0201; 10K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                      |
|     19 | R6, R7, R16, R17, R23, R25, R26     | -         |     7 | ERJ-1GEF4701C                                                             | PANASONIC                 | 4.7K               | RESISTOR; 0201; 4.7K OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                   |
|     20 | R8                                  | -         |     1 | ERJ-1GEF3902                                                              | PANASONIC                 | 39K                | RESISTOR; 0201; 39K OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                    |
|     21 | R10                                 | -         |     1 | NCP15XH103F03                                                             | MURATA                    | 10K                | THERMISTOR; SMT (0402); THICK FILM (NICKEL PLATED); 10K; TOL=+/-1%                                                                          |
|     22 | R13                                 | -         |     1 | ERJ-1GEF2613C                                                             | PANASONIC                 | 261K               | RESISTOR; 0201; 261K OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                     |
|     23 | R14                                 | -         |     1 | CRCW0201100KFK                                                            | VISHAY DALE               | 100K               | RESISTOR; 0201; 100K OHM; 1%; 100PPM; 0.05W; THICK FILM                                                                                     |
|     24 | R18, R19                            | -         |     2 | ERJ-1GEF2000C                                                             | PANASONIC                 | 200                | RESISTOR; 0201; 200 OHM; 1%; 200PPM; 0.05W; THICK FILM                                                                                      |
|     25 | RA1-RA4                             | -         |     4 | ERJ-1GEF33R0C                                                             | PANASONIC                 | 33                 | RESISTOR; 0201; 33 OHM; 1%; 100PPM; 0.05W; THICK FILM 3-LAYER ELECTRODE                                                                     |
|     26 | SW                                  | -         |     1 | EVP-AWCD2A                                                                | PANASONIC                 | EVP-AWCD2A         | SWITCH; SPST; SMT; STRAIGHT; 15V; 0.02A; EVP-AW SERIES                                                                                      |
|     27 | U1                                  | -         |     1 | MAX20303KEWN+                                                             | MAXIM                     | MAX20303KEWN+      | EVKIT PART- IC; WEARABLE POWER NAMAGEMENT SOLUTION; PACKAGE OUTLINE; WLP 56 PINS; 0.5MM PITCH; PKG. CODE: W563A4+1; PKG. OUTLINE: 21-100104 |
|     28 | U2                                  | -         |     1 | NRF52832-CIAA                                                             | NORDIC SEMICONDUCTOR      | NRF52832-CIAA      | IC; SOC; MULTIPROTOCOL BLUETOOTH LOW ENERGY; ANT; 2.4GHZ RF SOC; WLCSP50                                                                    |

Evaluates: MAX86174A

## MAX86174 EV System Bill of Materials (continued)

## MAXSENSORBLE\_EVKIT\_B (continued)

| ITEM   | REF_DES                        | DNI/DNP   |   QTY | MFG PART #        | MANUFACTURER          | VALUE             | DESCRIPTION                                                                                                                            |
|--------|--------------------------------|-----------|-------|-------------------|-----------------------|-------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| 29     | U3-U6, U9                      | -         |     5 | MAX14689EWL+      | MAXIM                 | MAX14689EWL+      | IC; ASW; 0.125A; FREQUENCY-SELECTSBLE; SWITCHED-CAPACITOR VOLTAGE CONVERTER; WLP9 1.2X1.2                                              |
| 30     | U7                             | -         |     1 | IP4221CZ6-S       | NXP                   | IP4221CZ6-S       | IC; PROT; ESD PROTECTION FOR HIGH-SPEED INTERFACE; XSON6                                                                               |
| 31     | U8                             | -         |     1 | S25FS256SAGNFI001 | SPANSION              | S25FS256SAGNFI001 | IC; MMRY; MIRRORBIT FLASH; NON-VOLATILE MEMORY; 1.8V SINGLE SUPPLY WITH CMOS I/O; SERIAL PERIPHERAL INTERFACE WITH MULTI-I/O; WSON8-EP |
| 32     | U10, U11                       | -         |     2 | MAX9062EBS+G45    | MAXIM                 | MAX9062EBS+G45    | IC; COMP; ULTRA-SMALL; LOW-POWER SINGLE COMPARATOR; UCSP4                                                                              |
| 33     | U12                            | -         |     1 | MAX32620IWG+      | MAXIM                 | MAX32620IWG+      | IC; UCON; HIGH-PERFORMANCE; ULTRA-LOW POWER CORTEX-M4F MICROCONTROLLER FOR RECHARGEABLE DEVICES; WLP81                                 |
| 34     | U13                            | -         |     1 | 74AUP1G97GF       | NXP                   | 74AUP1G97GF       | IC; LOGC; LOW-POWER CONFIGURABLE MULTIPLE FUNCTION GATE; XSON6                                                                         |
| 35     | U29                            | -         |     1 | MAX1819EBL33+     | MAXIM                 | MAX1819EBL33+     | IC; VREG; 500MA LOW-DROPOUT LINEAR REGULATOR IN UCSP; UCSP6                                                                            |
| 36     | X2, Y2                         | -         |     2 | ECS-.327-6-12     | ECS INC               | 32.768KHZ         | CRYSTAL; SMT 2.0 MMX1.2 MM; 6PF; 32.768KHZ; +/-20PPM; -0.03PPM/DEGC2                                                                   |
| 37     | Y1                             | -         |     1 | US3200005Z        | PERICOM SEMICONDUCTOR | 32MHZ             | CRYSTAL; SMT 1.6 MMX1.2MM; 8PF; 32MHZ; +/-10PPM; +/-10PPM                                                                              |
| 38     | PCB                            | -         |     1 | MAXSENSORBLE      | MAXIM                 | PCB               | PCB:MAXSENSORBLE                                                                                                                       |
| 39     | MISC1                          | DNI       |     1 | 101181XX-000XXX   | N/A                   | 101181XX-000XXX   | CONNECTOR; MALE; PALETTE SERIES 3.0 USB-C TO USB-A; 3FT BLACK                                                                          |
| 40     | R1, R4, R12, R20-R22, R32, R33 | DNP       |     0 | ERJ-2GE0R00       | PANASONIC             | 0                 | RESISTOR; 0402; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                                   |
| 41     | Z17                            | DNP       |     0 | GJM0335C1E1R0WB01 | MURATA                | 1PF               | CAPACITOR; SMT (0201); CERAMIC CHIP; 1PF; 25V; TOL=0.05PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                            |
| 42     | Z18                            | DNP       |     0 | 250R05L1R8AV4     | JOHANSON TECHNOLOGY   | 1.8PF             | CAPACITOR; SMT (0201); MICROWAVE; 1.8PF; 25V; TOL=0.05PF; TG=-55 DEGC TO +125 DEGC; TC=C0G                                             |
| 43     | 1-36                           | DNP       |     0 | N/A               | N/A                   | N/A               | TEST POINT; PAD DIA=0.762MM; BOARD HOLE=0.381MM                                                                                        |
| TOTAL  |                                |           |   105 |                   |                       |                   |                                                                                                                                        |

## MAX86174A\_OSB\_EVKIT\_B

| ITEM   | REF_DES                          | DNI/DNP   |   QTY | MFG PART #                  | MANUFACTURER          | VALUE      | DESCRIPTION                                                                                                                                                                      | COMMENTS   |
|--------|----------------------------------|-----------|-------|-----------------------------|-----------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1-C3, C5, C6, C10               | -         |     6 | GRM155R60J226ME11           | MURATA                | 22UF       | CAP; SMT (0402); 22UF; 20%; 6.3V; X5R; CERAMIC;                                                                                                                                  |            |
| 2      | C4, C7, C9                       | -         |     3 | GRM033R61A105ME15           | MURATA                | 1UF        | CAP; SMT (0201); 1UF; 20%; 10V; X5R; CERAMIC                                                                                                                                     |            |
| 3      | D1                               | -         |     1 | SFH 7016                    | OSRAM                 | SFH 7016   | DIODE; LED; RED-GREEN-IR; SMT; VF=RED=2.1V; GREEN=2.5V; IR=1.3V; IF=RED=0.04A; GREEN=0.03A; IR=0.06A ;                                                                           |            |
| 4      | J1                               | -         |     1 | 5016162575                  | MOLEX                 | 5016162575 | CONNECTOR; FEMALE; SMT; EASY-ON TYPE FPC CONNECTOR; RIGHT ANGLE; 25PINS ;                                                                                                        |            |
| 5      | PD1-PD3                          | -         |     3 | VEMD8080                    | VISHAY                | VEMD8080   | DIODE; PIN; SMT; VRM=20V; IF=0.05A ;                                                                                                                                             |            |
| 6      | R1-R3, R4A-R7A, R8, R9A, R10-R13 | -         |    13 | CRCW02010000ZS; ERJ-1GN0R00 | VISHAY DALE;PANASONIC | 0          | RES; SMT (0201); 0; 1%; JUMPER; 0.0500W                                                                                                                                          |            |
| 7      | U1                               | -         |     1 | MAX86174A                   | MAXIM                 | MAX86174A  | EVKIT PART - IC; MAX86174A; BEST-IN-CLASS OPTICAL PULSE OXIMETER AND HEARTRATE SENSOR AFE FOR WEARABLE HEALTH; PACKAGE OUTLINE DRAWING: 21-100454; PACKAGE CODE: N161B1+1; WLP16 |            |
| 8      | U2                               | -         |     1 | KX122-1037                  | KIONIX                | KX122-1037 | IC; SNSR; +/-2G/4G/8G TRI-AXIS DIGITAL ACCELEROMETER; LGA12                                                                                                                      |            |
| 9      | PCB                              | -         |     1 | MAX86174AOSB                | MAXIM                 | PCB        | PCB:MAX86174AOSB                                                                                                                                                                 | -          |
| 10     | R4B-R7B, R9B, R15                | DNP       |     0 | CRCW02010000ZS; ERJ-1GN0R00 | VISHAY DALE;PANASONIC | 0          | RES; SMT (0201); 0; 1%; JUMPER; 0.0500W                                                                                                                                          |            |
| 11     | R16, R18                         | DNP       |     0 | N/A                         | N/A                   | SHORT      | PACKAGE OUTLINE 0201 RESISTOR                                                                                                                                                    |            |
| 12     | R17                              | DNP       |     0 | N/A                         | N/A                   | OPEN       | PACKAGE OUTLINE 0201 RESISTOR                                                                                                                                                    |            |
| TOTAL  |                                  |           |    30 |                             |                       |            |                                                                                                                                                                                  |            |

## MAX86174 Evaluation System

MAX86174 EV System Schematics

MAXSENSORBLE\_EVKIT\_B

<!-- image -->

Evaluates: MAX86174A

## MAX86174 EV System Schematics (continued)

MAXSENSORBLE\_EVKIT\_B (continued)

<!-- image -->

Evaluates: MAX86174A

## MAX86174 EV System Schematics (continued)

MAXSENSORBLE\_EVKIT\_B (continued)

<!-- image -->

Evaluates: MAX86174A

MAX86174 EV System Schematics (continued)

MAXSENSORBLE\_EVKIT\_B (continued)

<!-- image -->

Evaluates: MAX86174A

## MAX86174 EV System Schematics (continued)

MAX86174A\_OSB\_EVKIT\_B

<!-- image -->

## MAX86174 Evaluation System

## MAX86174 EV System PCB Layout Diagrams

## MAXSENSORBLE\_EVKIT\_B

<!-- image -->

MAXSENSORBLE\_EVKIT\_B-Silkscreen Top

<!-- image -->

MAXSENSORBLE\_EVKIT\_B-Layer 2

MAXSENSORBLE\_EVKIT\_B-Layer 4

<!-- image -->

MAXSENSORBLE\_EVKIT\_B-Layer 6

<!-- image -->

<!-- image -->

MAXSENSORBLE\_EVKIT\_B-Top Layer

<!-- image -->

MAXSENSORBLE\_EVKIT\_B-Layer 3

MAXSENSORBLE\_EVKIT\_B-Layer 5

<!-- image -->

MAXSENSORBLE\_EVKIT\_B-Layer 7

<!-- image -->

│

## MAX86174 Evaluation System

## MAX86174 EV System PCB Layout Diagrams (continued)

## MAXSENSORBLE\_EVKIT\_B

<!-- image -->

MAXSENSORBLE\_EVKIT\_B-Layer 8

MAXSENSORBLE\_EVKIT\_B-Layer 10

<!-- image -->

MAXSENSORBLE\_EVKIT\_B-Bottom Layer

<!-- image -->

<!-- image -->

MAXSENSORBLE\_EVKIT\_B-Layer 9

MAXSENSORBLE\_EVKIT\_B-Layer 11

<!-- image -->

MAXSENSORBLE\_EVKIT\_B-Silkscreen Bottom

<!-- image -->

│

## MAX86174 Evaluation System

## MAX86174 EV System PCB Layout Diagrams (continued)

## MAX86174A\_OSB\_EVKIT\_B

MAX86174A\_OSB\_EVKIT\_B -Silkscreen Top

<!-- image -->

MAX86174A\_OSB\_EVKIT\_B -Layer 2

<!-- image -->

MAX86174A\_OSB\_EVKIT\_B -Top Layer

<!-- image -->

MAX86174A\_OSB\_EVKIT\_B -Layer 3

<!-- image -->

│

## MAX86174 Evaluation System

## MAX86174 EV System PCB Layout Diagrams (continued)

## MAX86174A\_OSB\_EVKIT\_B (continued)

MAX86174A\_OSB\_EVKIT\_B -Layer 4

<!-- image -->

MAX86174A\_OSB\_EVKIT\_B -Bottom Layer

<!-- image -->

MAX86174A\_OSB\_EVKIT\_B -Layer 5

<!-- image -->

MAX86174A\_OSB\_EVKIT\_B -Silkscreen Bottom

<!-- image -->

│

## MAX86174 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                        | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 4/21            | Initial Release                                                                                                                                                                    | -               |
|                 1 | 3/22            | Removing Cypress Dongle references in the EV kit. Updated General Description , EV Sys Contents , Quick Start , Detailed Description of Software , Figure 2 , and Component List . | 1, 3, 4, and 18 |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subMect to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

Evaluates: MAX86174A