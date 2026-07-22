<!-- lastmod 2022-08-02 -->
## Evaluates: Munich (USB2PMB1#)

## General Description

This document explains how the Munich (USB2PMB1#) adapter board receives commands  from a laptop through  the  USB  to  create  an  SPI  interface.  Hardware design files as well as results on interfacing USB2PMB1# with MAX11300PMB1, Santa Fe (MAXREFDES5#) , Campbell (MAXREFDES4#) , Fresno (MAXREFDES11#) , and Corona (MAXREFDES12#) are provided.

Portability  has  become  another  word  for  convenience. These days, almost all of us carry laptops, and this advantage  can  be  used  to  showcase  parts  to  the  customers offering solutions that can cater to their needs. To have that convenience, we need to have a board that interfaces with  our  laptops  to  the  signal  chain  electronics  that  are present on many of the industrial, medical, and consumer applications.  This  adapter  board  serves  this  purpose  of being a bridge between your laptop and your SPI-enabled devices.

The Maxim USB2PMB1# board requires custom software and  can  be  ordered  together  as  an  evaluation  system (EV system). The Munich design integrates a low-power, 1.2A,  PWM  step-down  DC-DC  converter  (MAX1556);  a dual,  high-speed,  USB-to-multipurpose  UART/FIFO  IC (FT2232HL); and a 4K MICROWIRE ® -compatible serial EEPROM. This Munich adapter board is used to enable USB-to-SPI  interface  for  any  Pmod™-compatible  plugin  peripheral  modules  such  as  the  Maxim  Campbell, Santa Fe, Fresno, and Corona reference designs.

## USB2PMB1# Adapter Board

Ordering information for EV systems is included in the EV kits' corresponding data sheet. An EV system is an EV kit combined with an interface board such as a USB2PMB1# and custom software. Refer to the appropriate EV kit data sheet for quick start and detailed operating instructions. The  USB2PMB1#  has  been  tested  on  Windows ® 7, Windows 8, and Windows XP ® .

## Adapter Board Contents

- USB2PMB1# Board
- Mini-USB Cable

## Features

- USB-to-SPI   Interface
- Small PCB Area
- Pmod TM -Compatible Form Factor

## Applications

- Industrial Sensors
- Process Control
- Industrial Automation
- PLCs
- Medical

Ordering Information appears at end of data sheet.

Figure 1. Munich USB2PMB1# Board

<!-- image -->

MICROWIRE is a registered trademark of National Semiconductor Corp.

Pmod is a trademark of Digilent Inc.

Windows is a registered trademark and registered service mark and Windows XP is a registered trademark of Microsoft Corporation.

<!-- image -->

## Evaluates: Munich (USB2PMB1#)

Figure 2. Munich Subsystem Block Diagram

<!-- image -->

## Detailed Description of Hardware

This  Munich  board  uses  the  FT2232HL  (IC1),  a  USB 2.0 high-speed (480Mbps)-to-UART/FIFO IC, to process commands sent by a program running on the PC. Each particular  EV  kit  has  its  own  custom  software  specific to  that  kit.  The  operation  of  this  board  is  USB-to-dualchannel SPI engine.

The  V CCIO   (3.3V)  voltage  supply  is  generated  by  the 27µA  low  quiescent  current,  1.2A  efficient  PWM  stepdown DC-DC converter, MAX1556ETB (IC2). The 5V supply voltage input for this IC is provided by the Mini-USB supply terminal available from the laptop. The V CCIO  pin provides  power  to  the  FDTI  chip's  V REGIN   pin  and  its internal  oscillator  though  an  LC  filter,  4K  MICROWIRE EEPROM  (93LC66BT)  (IC3).  The  USB-to-SPI  engine is  powered by 3.3V (V CCIO ) at the V REGIN  pin and the core voltage of 1.8V for the IC is generated at V REGOUT . This V CORE  is used within the FTDI IC itself for its internal logic processes. There is an external 12MHz crystal across OSCI and OSCO pins of IC1.

## Pmod Supply Voltage

The Munich is  also  designed  to  supply  power  to  external  boards  (Santa  Fe,  Campbell,  Fresno,  and  Corona) through the connector X2. It is intended to provide power supply to the interface circuitry present in the connected driver boards.

## Pmod SPI Connector Output Pin and Connector Input in Santa Fe, Campbell, Fresno, Corona Driver Boards

Figure  3  shows  the  pin  configuration  for  the  SPIcompatible connector at the USB2PMB1# board. Figure 4 depicts the pin configuration of connector found

## USB2PMB1# Adapter Board

Figure 3. X2: Pmod SPI Connector Pin Configuration

<!-- image -->

Figure 4. SPI Connector Inputs Found in Santa Fe, Campbell, Fresno, and Corona

<!-- image -->

in Santa Fe, Campbell, Fresno, and Corona. The connector  type  is  female  on  the  USB2PMB1#  board  and  male type on the drivers.

## Quick Start

## Required Equipment

- PC with Windows OS (Windows XP, Windows Vista, Windows 7, or Windows8) with two USB ports
- Munich (USB2PMB1#) Board
- A-to-Mini-B USB cable
- USB2PMB1# custom software
- Any SPI interface device for communication like Santa Fe (MAXREFDES5#) board

│

## Evaluates: Munich (USB2PMB1#)

## Procedure

- 1)  Go to www.maximintegrated.com/evkitsoftware to  download  the  most  recent  version  of  the Munich  board  software, MUNICH  GUI .  Save  the software  to  a  temporary  folder  and  decompress  the Munich\_GUISetupV2.03.zip file.
- 2)  Connect  the  USB  cable  between  the  Munich  board and the PC; the USB driver is installed automatically.
- 3)  Ensure  that  the  companion  SPI  interface  device's jumper settings are correct. Refer to your companion device's documentation.
- 4)  Connect the Munich board's 2x6-pin right-angle connector to the companion device's 2x6-pin right-angle header.

## Detailed Description of Software

## Graphical User Interface (GUI)

- 1)  Once the Munich board is connected with the companion device, open the MUNICH GUI.exe (double-click) software.
- 2)  Start  the  Munich  board  software  and  select  the  tab sheet  that  corresponds  to  the  companion  device  as shown in Figure 5, the Munich GUI.
- 3)  Press  the Scan  Devices pushbutton  to  scan  the available  Munich boards connected to the computer. This allows the user to test multiple companion driver boards at the same time. Each Munich board has a unique ID that the software determines.

Figure 5. Munich GUI

<!-- image -->

│

## Evaluates: Munich (USB2PMB1#)

## Scan and Select

For instance, Figure 5 depicts the scanning and available Munich  devices  connected.  The  software  has  identified two devices:

- a)  PMOD872134A
- b)  PMOD961478A

Within the tab sheet, press the Connect button and verify that the button changes its text to Disconnect and the status bar at the bottom indicates that the companion board is connected. See Figure 6.

## Connecting Multiple Boards

When  connecting  multiple  boards  such  as  Campbell and Cupertino at the same time to two separate Munich boards, perform Steps 1 to 3 for each device one after the other.

## USB2PMB1# Adapter Board

Figure  7  depicts  Campbell  and  Cupertino  being  connected to two Munich adaptor boards at the same time.

## Campbell GUI Tab

This  environment  contains  the  internal  block  diagram of  the  Campbell  board  and  the  following  operations  to perform:

- Sample Once and Sample Continuously
- Choose Sample Rate and Sample Count
- View Plots
- Average
- Calibrate
- Plot Configuration Options

Figure 6. Campbell Connected to Munich GUI

<!-- image -->

│

## Evaluates: Munich (USB2PMB1#)

## Sampling (Figure 8):

- 1) Sample  Once: This  pushbutton  tab  allows  discrete sampling.
- 2) Sample  Continuously: This  feature  allows  continuous  sampling.  Once  the Sample Continuously button  is  clicked  the  button  changes  its  text  to Stop Sampling and the user would not be able to discon-

## USB2PMB1# Adapter Board

- nect the board from the software until the user clicks the Stop Sampling button.
- 3) Sample Rate: This  drop-down box option allows the user  to  choose  the  sample  rate  or  the  number  of samples per second.
- 4) Sample Count: This drop-down box option allows the user to choose the number of samples to be sampled.

Figure 7. Campbell and Cupertino Connected to Two Munich Adapter Boards

<!-- image -->

Figure 8. Sampling Options

<!-- image -->

│

## Evaluates: Munich (USB2PMB1#)

- 5) Real Time Scope: The scope on the bottom left side of the GUI represents the measured data with number of  samples in X-axis and Y-axis is selected from the available plot configurations options. Figure 9 depicts the options that determine the Y-axis in the scope.
- a) Scope  Options: On  the  top  right  corner  of  the scope,  plot  settings  options  are  available  for  the user to play/pause, zoom in/out, pan, print, save, and waveform settings.
- b) Plot Configuration Options (Figure 9a):
- i) ADC Count: This  option  plots  the ADC  count itself on the Y-axis with the number of samples on the X-axis.
5. ii) Voltage: This  option  plots  the  converted  voltage value.
6. iii) Current: Plots  the  current  measured  across the 200Ω shunt resistor present in Campbell.
7. iv) 4-20ma to Temp: Plots the temperature measured  from  IFM  TA3231  Temp-Sensor.  This sensor  sinks/  sources  current  proportional  to the  temperature measured. The shunt current

## USB2PMB1# Adapter Board

and the temperature measured would be indicated the bottom of the GUI too.

- v) FFT: This option plots the FFT measurement on the Y-axis vs. frequency on the X-axis.
2. vi) Histogram: This option allows user to view the resultant  output  in  Histogram  (Figure  10).  The X-axis is ADC code and the Y-axis is the number occurrence.
- c) History: This option allows the user to view the history data by choosing the history length for viewing the data.
- d) Average: Drop-down box menu to choose to average of  the  discrete  values  sampled.  For  instance, if 16 is selected, it takes the first 16 samples of the sample-shot  the  user  takes,  then  averages  them and shows the number in the text box below. If history  is  selected  as  well,  it  adds  this  number  as  a datapoint to the history. If all is selected, it uses all the samples taken, as selected in Sample Count to build the average.

Figure 9. Real Time Scope GUI

<!-- image -->

│

Figure 9a. Plot Configuration Options

<!-- image -->

Figure 10. 'Histogram' Display on Munich/Campbell GUI

<!-- image -->

## Evaluates: Munich (USB2PMB1#)

- e) Calibrate: If the user wishes to calibrate, this option enables a real-time calibration as shown in Figure 11.
- i) Shunt Resistor value: This option allows entering the exact value of shunt resistance in Campbell board. This also allows the user to change the resistance and scale the current measured.
3. ii) Offset: The offset calibration is done by forcing a 0V input voltage or 0mA current to obtain the plot counts. This plot counts value if other than 0, should be fed in the offset digit tab.

## USB2PMB1# Adapter Board

- iii) Volt  per  LSB: This  option  calibrates  for  gain error.  The  volt  per  code  calibration  is  done by forcing approximately 80% of the specified input range (4.096V) at the input to obtain the code.

<!-- formula-not-decoded -->

If there is no gain error:

<!-- formula-not-decoded -->

Figure 11. 'Calibration' Display on Munich/Campbell GUI

<!-- image -->

## Evaluates: Munich (USB2PMB1#)

## Santa Fe GUI Tab

This environment is similar to the Campbell tab described. It  consists of the internal block diagram of the Santa Fe board and the following operations to perform:

- Selecting Channel/Range
- Sample Once and Sample Continuously
- Average
- Choose Sampling Rate and Sample Count
- View Plots
- Calibrate
- Plot Configurations Options
- 1) Selecting  Channel/Range: Refers  to  the  block diagram present at the right side of the GUI, which describes  four  different  channel  input  options. Checking the right input and right input range at the GUI translates the input channel and its data range at the board. Each channel input has seven different input range options for selection. See Figure 12.

## USB2PMB1# Adapter Board

## 2) Sampling

- a) Sample Once: This pushbutton tab allows discrete sampling.
- b) Sample  Continuously: This  feature  allows continuous sampling. Once the Sample Continuously button is clicked the button changes  its  text  to Stop  Sampling and  the user would not be able to disconnect the board from the software until the user clicks the Stop Sampling button.
- c) Sample  Rate: This  drop-down  box  option allows  the  user  to  choose  the  sample  rate  or the number of samples per second.
- d) Sample  Count: This  drop-down  box  option allows the user to choose the number of samples to be sampled.
- 3) Real Time Scope: The scope present on the left side of the GUI represents the measured data with number of  samples in X-axis and Y-axis is selected from the available plot view options from the bottom of the GUI environment.

Figure 12. Munich/Santa Fe GUI

<!-- image -->

│

## Evaluates: Munich (USB2PMB1#)

- a) Scope Options: On top right corner of the scope or the Histogram plot, plot settings options are available for the user to play/pause, zoom in/out, pan, print, save, and waveform settings.

## b) Plot Configuration Options

- i) ADC Counts: This option plots the ADC code itself on the Y-axis with the number of samples on the X-axis.
2. ii) Voltage: This  option  plots  the  converted  voltage value.
3. iii) Current: Plots  the  current  measured  across the 250Ω shunt resistor present in Campbell.
4. iv) 4-20mA to Temp: Plots the temperature measured  from  IFM  TA3231  temp  sensor.  This sensor  sinks/  sources  current  proportional  to the  temperature measured. The shunt current and the temperature measured would also be indicated the bottom of the GUI.
- v) FFT: This option plots the FFT measurement on the Y-axis vs. frequency on the X-axis.
6. vi) Histogram: This pushbutton option allows user to view the resultant output in Histogram. The X-axis is ADC code and the Y-axis is the number occurrence.
7. vii) History Length: This option allows the user to view  the  history  data  by  choosing  the  history length for viewing the data.
- c) Average: Drop-down box menu to choose to average of the discrete values sampled. For instance, if 16 is selected, it takes the first 16 samples of the

## USB2PMB1# Adapter Board

sample-shot  the  user  takes,  then  averages  them and  shows  the  number  in  the  text  box  below.  If history is selected as well, it adds this number as a datapoint to the history. If all is selected, it uses all the samples taken, as selected in No of Samples to build the average.

- d) Calibrate: If the user wishes to calibrate, this option enables  a  real-time  calibration  for  each  channel and  each  signal  input  range;  hence,  providing  a robust  calibration/measurements  at  each  single physical channel and each input signal range. See Figure 13.
- i) Shunt  Resistor  value: This  option  allows entering the exact value of shunt resistance in Cupertino  board. This  also  allows  the  user  to change  the  resistance  and  scale  the  current measured
3. ii) Offset: The offset calibration  is  done  by  forcing  the  minimum  voltage  at  input  (based  on the selection of input range) to obtain the plot counts. This plot counts value, if other than 0, should be fed in the offset digit tab.
4. iii) Volt  per  LSB: This  option  calibrates  for  gain error. The volt per code calibration is done by forcing approximately 80% of specified voltage at the input to obtain the code. Here there are seven  different  input  ranges.  Use  appropriate range selection for calibration.

<!-- formula-not-decoded -->

## Evaluates: Munich (USB2PMB1#)

Figure 13. 'Calibration' Display on Munich/Cupertino GUI

<!-- image -->

## Evaluates: Munich (USB2PMB1#)

## Fresno GUI Tab

This environment consists of the internal block diagram of the Fresno board and the following operations to perform (Figure 14):

- Sample Once/Sample Continuously
- Average
- Sample Rate and Sample Count
- View Plots
- Calibrate
- Plot Configuration Options
- 1)  Sampling
- a) Sample Once: This pushbutton tab allows discrete sampling.
- b) Sample  Continuously: This  feature  allows continuous sampling. Once the Sample Continuously button  is  clicked  the  button changes  its  text  to Stop  Sampling and  the user would not be able to disconnect the board from the software until the user clicks the Stop Sampling button.

## USB2PMB1# Adapter Board

- c) Sample  Rate: This  drop-down  box  option allows  the  user  to  choose  the  sample  rate  or the number of samples per second.
- d) Sample  Count: This  drop-down  box  option allows the user to choose the number of samples to be sampled.
- e) Average: Drop-down  box  menu  to  choose  to average  of  the  discrete  values  sampled.  For instance, if 16 is  selected, it takes the first 16 samples  of  the  sample-shot  the  user  takes, then  averages  them  and  shows  the  number in  the  text  box  below.  If  history  is  selected  as well, it adds this number as a datapoint to the history. If all is selected, it uses all the samples taken, as selected in No. of Samples , to build the average.
- 2) Real Time Scope: The scope present on the left side of the GUI represents the measured data with number of samples in X-axis and Y-axis is selected from the available plot view options from the bottom of the GUI environment.

Figure 14. Munich/Fresno GUI

<!-- image -->

│

## Evaluates: Munich (USB2PMB1#)

- a) Scope  Options: On  the  top  right  corner  of the  scope  or  the  Histogram  plot,  plot  settings options are available for the user to play/pause, zoom  in/out,  pan,  print,  save,  and  waveform settings.
- b) Plot Configuration Options
- i) ADC  Count: This  option  plots  the  ADC code itself on the Y-axis with the number of samples on the X-axis.
4. ii) Voltage: This  option  plots  the  converted voltage value.
5. iii) 0  to  10V  to  Temp: Plots  the  temperature measured from IFM TA3231 Temp-Sensor. This  sensor  sinks/sources  current  proportional  to  the  temperature  measured.  The shunt  current  and  the  temperature  measured would also be indicated at the bottom of the GUI.
6. iv) FFT: This  option  plots  the  FFT  measurement  on  the  Y-axis  vs.  frequency  on  the X-axis.
- v) Histogram: This pushbutton option allows the  user  to  view  the  resultant  output  in Histogram. The X-axis is ADC code and the Y-axis is the number occurrence.

## vi) History

- i) History  Length: This  option  allows  the user to view the history data by choosing the history length for viewing the data.
2. ii) Show History of Average: Checking this option allows the user to view entire data in history up to the history length chosen.
3. vii) Calibrate: If  the user wishes to calibrate, this option enables a real-time calibration.
- i) Offset: The offset calibration is done by forcing a 0V input voltage to obtain the plot counts. This plot counts value if  other  than  0,  should  be  fed  in  the offset digit tab.
5. ii) Volt  per  LSB: This  option  calibrates for gain error. The volt per code cali-

## USB2PMB1# Adapter Board

bration  is  done  by  forcing  approximately  80%  of  the  specified  input range  (+10V)  at  input  to  obtain  the code.

<!-- formula-not-decoded -->

## Corona GUI Tab

This environment consists of the internal block diagram of the Corona board and the remainder of the operations (Figure 15) to perform:

- Reading Section
- Display Section
- 1) Reading Section
- a) Read  Once: This  pushbutton  tab  allows  discrete sampling.
- b) Read continuously: This  feature  allows  continuous  sampling.  Once  the Read  continuously button is clicked the button changes its text to Stop Reading and the user would not be able to disconnect the board from the software until the user clicks the Stop Sampling button.

## 2) Display Section

- a) Result: This  displays  the  HEX  value  of  the generated serial Data (B0:B15)
- b) B0 to B15: This  displays  the  individual  Bit  of serially generated Data
- i) B0: RES: Reserved.
4. ii) B1: OT: Display status of internal temperature monitor.
5. iii)  B2: UV: Display status of field supply voltage.
6. iv)  B3  to  B7:  CRC:  Internally  calculated  and generated cyclic redundancy check code.
- v) B8 to B15: Serially generated data bits.
- c) IN1 to IN8: Displays the input data applied.

│

## Evaluates: Munich (USB2PMB1#)

Figure 15. Munich/Corona GUI

<!-- image -->

## Ordering Information

# Denotes RoHS compliant.

<!-- image -->

[For further details, refer to the MAX11300PMB1 Peripheral Module and Munich (USB2PMB1) Adapter Board Quick Start Guide at www.maximintegrated.com .](http://www.maximintegrated.com/en/pst/run.mvp?q=munich-gui+quick+start+guide)

## Evaluates: Munich (USB2PMB1#)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                     | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/13           | Initial release                                                                                 | -               |
|                 1 | 6/15            | Removed Cupertino references, updated text and Figures 5-15; removed Figures 8b, 11, 17, and 18 | 1-16            |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implieG. 0a[im ,nteJrateG reserYes the riJht to FhanJe the FirFuitr\ anG speFi¿Fations Zithout notiFe at an\ time.

│