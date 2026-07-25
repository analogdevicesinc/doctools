<!-- lastmod 2022-08-03 -->
## MAX11284 Evaluation Kit

## General Description

The evaluation kit (EV kit) demonstrates the MAX11284 dual  24-bit,  dual-channel,  16ksps  Delta-Sigma  ADCs with integrated PGA. The EV kit includes a graphical user interface  (GUI)  that  provides  communication  from  the target  device  to  the  PC.  The  EV  kit  can  operate  in multiple modes:

- 1) Standalone Mode: In 'standalone' mode, the EV kit is connected to the PC through a USB cable and performs a subset of the complete EV kit functions. Sample rate and sample size are limited.
- 2) FPGA Mode: In FPGA mode, the EV kit is connected to  an  Avnet  ZedBoard™  through  a  low-pin-count FMC  connector.  The  ZedBoard  features  a  Xilinx® Zynq®-7000 SOC that connects to the PC through an Ethernet  port,  which  allows  the  GUI  to  perform different operations with full control over mezzanine card functions. The EV kit with FPGA platform performs the complete suite of evaluation tests for the target IC.
- 3) User-Supplied SPI Mode: In addition to the USB and FMC interfaces, the EV kit provides two 12-pin Pmod -style headers for user-supplied SPI interface, to connect the signals for SYNC, RDYB , SCLK, DIN, DOUT, and CS .

The  EV  kit  includes  Windows  XP®,  Windows®  7,  and Windows  8-compatible  software  to  utilize  the  features of the IC. The EV kit GUI allows different sample sizes, adjustable sampling rates, on-board or external reference options, and graphing software that includes the FFT and histogram of the sampled signals with the ability to save plots in .jpg or .csv formats.

The ZedBoard accepts a +12V AC-DC wall adapter. The EV kit can be powered by either the ZedBoard or a local 12V  supply.  The  EV  kit  has  on-board  transformers  and digital  isolators  to  separate  the  IC  from  the  ZedBoard/ on-board processor.

The MAX11284 EV kit comes with a MAX11284ETL+ in a 40-pin TQFN package installed.

ZedBoard is a trademark of Avnet, Inc.

Xilinx and Zynq are registered trademarks and Xilinx is a registered service mark of Xilinx, Inc.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- High-Speed USB, FMC Connector, and Pmod connectors
- 5MHz SPI Interface
- Various Sample Sizes and Sample Rates
- Collects Up to 1 Million Samples (with FPGA platform)
- Time Domain, Frequency Domain, and Histogram Plotting
- Sync In and Sync Out for Coherent Sampling for Higher Input Frequency (with FPGA platform)
- On-Board 2.5V Voltage References (MAX6126)
- Proven PCB Layout
- Fully Assembled and Tested
- Windows XP, Windows 7 and Windows 8-Compatible Software

Ordering Information appears at end of data sheet.

## MAX11284 EV Kit Photo

<!-- image -->

<!-- image -->

Evaluates: MAX11284

## MAX11284 Evaluation Kit

## System Block Diagram

<!-- image -->

## MAX11284 EV Kit Files

| FILE                       | DECRIPTION                               |
|----------------------------|------------------------------------------|
| MAX11284EVKitSetupVx.x.exe | Application Program (GUI)                |
| Boot.bin                   | ZedBoard Firmware (SD Card to boot Zynq) |

│

Evaluates: MAX11284

## MAX11284 Evaluation Kit

## Quick Start

## Required Equipment

- MAX111284 EV kit
- +12V (500mA) power supply
- Micro-USB cable
- ZedBoard development board with Vivado Design Suite 14.3 or higher (optional Not Included with EV kit)
- Function generator (Audio Precision 2700 series, additional channels required for unipolar mode)
- Windows XP, Windows 7 or Windows 8 PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, MAX11284EVKit.ZIP. Save the EV kit software to a temporary folder and uncompressed the ZIP file.
- 2) Install the EV kit software and USB driver on your computer by running the MAX11284EVKitSetupVx.x.exe program inside the temporary folder. The program files are copied to your PC and icons are created in the Windows Start | Programs menu. At the end of the installation process the installer will launch the installer for the FTDI Chip CDM drivers.

## For Standalone mode:

- 3) Verify that all jumpers are in their default positions for the EV kit (Table 1)
- 4) Connect the micro-USB cable from the PC to the J8 connector of the EV kit.
- 5) Connect the +12V adapter to the J13 connector of the EV kit.
- 6) Start the EV kit software by opening its icon in the Start | Programs menu. The EV kit software appears as shown in Figure 1. Verify that the lower-right status bar indicates the EV Kit hardware is Connected .
- 7) From the Device menu select Standalone and click Search for USB Device . Then select Standalone again and select a device in the list. Verify that the lower left status bar indicates the EV Kit hardware is Connected .

## For FPGA mode (when connected to a ZedBoard):

- 8) Connect the Ethernet cable from the PC to the J11 connector of the ZedBoard and configure the Internet Protocol Version 4 (TCP/Ipv4) properties in the local

Evaluates: MAX11284

area Connection to IP address 192.168.1.2 and subnet Mask to 255.255.255.0 .

Note: If an ethernet port is not available on the PC, then please use the option of ethernet to USB port adapter.

- 9) Verify that the J12 slot of the ZedBoard SD card contains the boot.bin file for the MAX11284 EV Kit.
- 10)  Connect the EV Kit FMC connector (J2) to the ZedBoard FMC connector (J1). Gently press them together.
- 11)  Verify that all jumpers are in their default positions for the ZedBoard (Table 2) and EV kit (Table 1).
- 12)  Connect the +12V wall adapter power supply to the J20 connector of the ZedBoard. Leave the ZedBoard powered off. Connect the PC to the ZedBoard with an Ethernet cable.
- 13)  Enable the power supply of the ZedBoard by sliding SW8 to on.
- 14)  Start the EV kit software by opening its icon in the Start | Programs menu. The EV kit software appears as shown in Figure 1. From the Device menu select FPGA . Verify that the lower-right status bar indicates the EV Kit hardware is Connected .

## For either Standalone or FPGA Mode:

- 15)  Within the Delta-Sigma Modulator group box, select Unipolar , Offset Binary , and 24-Bit within the Format dropdown list, and and Continuous within the Conversion Mode dropdown list.
- 16) Connect the positive terminal of the first signal source to the IN+A test point on the EV kit. Connect the negative terminal of the second signal source to the IN-A test point on the EV kit. The ground of the signal sources must be connect to the ground of the EV kit board.
- 17) Configure the first signal source to generate a 32.7148Hz, 1.25VP-P sinusoidal wave with +1.875V offset.
- 18) Configure the second signal source to generate a 32.7148Hz, 1.25V P-P  sinusoidal wave with +0.625V offset.
- 19)  Enable both signal sources simultaneously on the function generator.
- 20)  In the Calibration group box, select Self Offset/ Gain in the drop down list and then click Calibrate .
- 21)  Click on the Scope tab.
- 22)  Check the Remove DC checkbox to remove the DC component of the sampled data.
- 23)  Click the Capture button to read sampled data from the ADC.
- 24)  The EV kit software appears as shown in Figure 1 for standalone mode or Figure 2 for FPGA mode.
- 25)  Verify the Frequency is approximately 32.7148Hz displayed on the right. The scope graph has buttons in the upperright corner that allow zooming in to detail.

│

## MAX11284 Evaluation Kit

Table 1. MAX11284 EV Kit User Configuration Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                        |
|----------|------------------|------------------------------------------------------------------------------------|
| J1_A     | 1-2*             | Drive IC REFP_A pin with onboard voltage reference.                                |
| J1_A     | 2-3              | Drive IC REFP_A pin with external voltage reference.                               |
| J1_B     | 1-2*             | Drive IC REFP_B pin with onboard voltage reference.                                |
| J1_B     | 2-3              | Drive IC REFP_B pin with external voltage reference.                               |
| J2       | 1-2*             | Power oscillator (U21) with +3.3V supply.                                          |
| J2       | Open             | Disable U21 by removing power.                                                     |
| J2_A     | 1-2*             | Connect IC AVSS_A to GND (unipolar mode - also set J23_A for unipolar).            |
| J2_A     | 2-3              | Connect IC AVSS_A to -1.8V (bipolar mode - also set J23_A for bipolar).            |
| J2_B     | 1-2*             | Connect IC AVSS_B to GND (unipolar mode - also set J23_B for unipolar).            |
| J2_B     | 2-3              | Connect IC AVSS_B to -1.8V (bipolar mode - also set J23_B for bipolar).            |
| J3_A     | 1-2*             | Drive IC REFN_A pin with onboard voltage reference.                                |
| J3_A     | 2-3              | Drive IC REFN_A pin with external voltage reference.                               |
| J3_B     | 1-2*             | Drive IC REFN_B pin with onboard voltage reference.                                |
| J3_B     | 2-3              | Drive IC REFN_B pin with external voltage reference.                               |
| J4_A     | 1-2*             | Connect IC to the DVDD_Avoltage selection jumper J32.                              |
| J4_A     | open             | Attach amp meter between pins 1-2 to measure current consumed by IC DVDD.          |
|          | 1-2*             | Connect IC to the DVDD voltage selection jumper J32.                               |
| J4_B     | open             | Attach amp meter between pins 1-2 to measure current consumed by IC DVDD.          |
| J5_A     | 1-2              | Apply external analog signal to IN-_A.                                             |
| J5_A     | 3-4              | Connect IN-_A to REFN_A.                                                           |
| J5_A     | 5-6              | Connect IN-_A to GND.                                                              |
| J5_B     | 1-2              | Apply external analog signal to IN-_B.                                             |
| J5_B     | 3-4              | Connect IN-_B to REFN_B.                                                           |
| J5_B     | 5-6              | Connect IN-_B to GND.                                                              |
| J6_A     | 1-2              | Apply analog signal to IN+_A.                                                      |
| J6_A     | 3-4              | Connect IN+_A to REFP_A.                                                           |
| J6_A     | 5-6              | Connect IN+_A to REF/2_A.                                                          |
| J6_B     | 1-2              | Apply analog signal to IN+_B.                                                      |
| J6_B     | 3-4              | Connect IN+_B to REFP_B.                                                           |
| J6_B     | 5-6              | Connect IN+_B to REF/2_B.                                                          |
| J9       | 1-2              | Connects the +10V rail to test point +10VEXT for external power                    |
| J9       | 2-3*             | Connects the +10V rail to LDO U4                                                   |
| J11      | 1-2*             | Enables main power supply (U5)                                                     |
| J11      | Open             | Disables main power supply (U5)                                                    |
| J12      | 1-2              | Connects the +15V rail to test point +15EXT for external power (powers U4)         |
| J12      | 2-3*             | Connects the +15V rail to isolation transformer (powers U4)                        |
| J14      | 1-2              | Connects U7 input to GND                                                           |
| J14      | 3-4              | Connects U7 input to test point -15VEXT for external power                         |
| J14      | 5-6*             | Connects U7 input to isolation transformer                                         |
| J15      | 5-6*             | Connects U7 output to GND, which sets the reference for the -10V supply            |
| J17      | 1-2*             | Connects on-board FTDI chip to 3.3V, necessary for standalone mode                 |
| J17      | Open             | Disconnects on-board FTDI chip power. This jumper does not interfere with ZedBoard |

│

Evaluates: MAX11284

Evaluates: MAX11284

## Table 1. MAX11284 EV Kit User Configuration Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                      |
|----------|------------------|------------------------------------------------------------------------------------------------------------------|
| J23_A    | 1-2*             | Connect IC AVDD_A to 3.6V (unipolar mode)                                                                        |
| J23_A    | 2-3              | Connect IC AVDD_A to +1.8V (bipolar mode)                                                                        |
| J23_B    | 1-2*             | Connect IC AVDD_B to 3.6V (unipolar mode)                                                                        |
| J23_B    | 2-3              | Connect IC AVDD_B to +1.8V (bipolar mode)                                                                        |
| J32      | 1-2              | Set IC DVDD_Aand DVDD_B to +3.3V                                                                                 |
| J32      | 2-3*             | Set IC DVDD_Aand DVDD_B to +2.0V                                                                                 |
| J37_A    | 1-2, 3-4*        | Connect IN+_A and IN+_B, and IN-_A and IN-_B together. Used when both channel A and B needs same signal source.  |
| J37_A    | open             | Disconnects IN+_A from IN+_B, and IN-_A from IN-_B. User must apply different signal sources to channel A and B. |
| J40      | 1-2              | Drive IC CLK pin with signal from SMAconnector J35                                                               |
| J40      | 2-3*             | Drive IC CLK pin with signal from onboard oscillator U21                                                         |
| RST_A    | 1-2*             | Connect IC RSTB_A to DVDD (normal operation)                                                                     |
| RST_A    | 2-3              | Connect IC RSTB_A to GND (reset state)                                                                           |
| RST_B    | 1-2*             | Connect IC RSTB_B to DVDD (normal operation)                                                                     |
| RST_B    | 2-3              | Connect IC RSTB_B to GND (reset state)                                                                           |

## Table 2. ZedBoard Jumper Settings (optional)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                        |
|----------|------------------|----------------------------------------------------|
| J18      | 1-2              | VDDIO set for 3.3V                                 |
| JP11     | 2-3              | Boot from SD card                                  |
| JP10     | 1-2              | Boot from SD card                                  |
| JP9      | 1-2              | Boot from SD card                                  |
| JP8      | 2-3              | Boot from SD card                                  |
| JP7      | 2-3              | Boot from SD card                                  |
| JP10     | -                | Boot from SD card                                  |
| J12      | n/a              | SD card installed                                  |
| J20      | n/a              | Connected to 12V wall adapter                      |
| SW8      | Off              | ZedBoard power switch, off while connecting boards |

│

## Table 3. MAX11284 EV Kit Connectors

| JUMPER   | DESCRIPTION                                                                                                                                                               |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J8       | USB connector for standalone mode                                                                                                                                         |
| J1       | External reference input                                                                                                                                                  |
| J7_A     | External input forADC channel A's IN+ and IN-                                                                                                                             |
| J7_B     | External input forADC channel B's IN+ and IN-                                                                                                                             |
| J10, J13 | External power connections, 12V. Both wall adapter and screw terminals are provided. When ZedBoard is used these connectors are not necessary if jumper J18 is installed. |
| J20, J24 | Sync clock out                                                                                                                                                            |
| J26      | Pmod A, connects toADCA                                                                                                                                                   |
| J27      | Pmod B, connects toADC B                                                                                                                                                  |
| J28      | Sync clock input, SMA                                                                                                                                                     |
| J29      | Split Sync clock in, SMA                                                                                                                                                  |
| J30      | FMC connector for use with ZedBoard                                                                                                                                       |
| J35      | External clock input, SMA                                                                                                                                                 |

## General Description of Software

The main window of the EV kit software contains several tabs: ADC Config , Scope , DMM , Histogram , FFT and ADC Registers .  The ADC  Config tab  and ADC  Registers tab provide control to communicate with the MAX11284 registers. The other four tabs are used for evaluating the sample data read from the ADC.

## ADC Config Tab

The ADC Config tab provides an interface for configuring the  IC  from  a  functional  perspective.  See  Figure  1  for standalone mode and Figure 2 for FPGA mode. The main block provides for channel selection(s), calibration, GPIO control, Input path selection, data format, filtering, power, clocking, and sync out clock (FPGA mode only).  To begin, select the IC populated on the EV Kit with the drop-down list. To read all the configuration settings, click the Read All button in the Serial Interface block. When a setting is  changed,  the  register  associated  with  that  setting  is automatically  written.  The Status  Log at  the  bottom  of the GUI shows the value and register that was changed.

The primary mode for calibration is using the drop down list  to  select a calibration mode, followed by clicking the Calibrate button.  The  checkboxes  for Self  Offset , Self Gain , System Offset and System Gain allow for the user to enable or disable the calibration values. The calibration values can also be changed manually by entering a hex value  in  the  SPI  numeric  box.  Please  see  the System Offset  and  Gain section  of  the  data  sheet  for  detailed system calibration.

The Power block allows the user to put the part in a sleep or standby state by selecting one of these options in the drop  down  list.  The  configuration  settings  can  be  reset back to default by clicking  the Reset Registers button. For  the Clock Source  selection,  the  IC  internal  clock (default)  is  always  a  valid  option;  make  sure  a  shunt  is not on jumper J2 that disables the on-board oscillator. If the external clock is selected, a clock must be applied at the IC CLK pin. For jumper J40, if a shunt is placed on the 1-2 position, it selects the user-supplied clock signal that is applied at the SMA (J35) connector. Please make sure that a shunt is removed from jumper J2 to disable the onboard oscillator. The EV kit has another external option of  using  the  on-board  oscillator  (U21).  Place  a  shunt  to the 2-3 position of jumper J40 and make sure jumper J2 is installed to power on-board oscillator. Once the above configurations are completed, start conversion by clicking the Convert button in the Serial Interface block. To read the data and status, click the Read Data and Status button on the lower-right of the GUI.

To save a configuration, select Save ADC Config As… in the File menu. This saves all the ADC register values to a XML file. To load a configuration, select Load ADC Config in the File menu. When the XML file is loaded, all the register values in the file are written to the ADC.

│

Figure 1. MAX11284 EV Kit Software (Standalone, ADC Config Tab)

<!-- image -->

Figure 2. MAX11284 EV Kit Software (FPGA, ADC Config Tab)

<!-- image -->

## MAX11284 Evaluation Kit

## Scope Tab

The Scope tab sheet is used to capture data and display it in the time domain. Sampling rate and number of samples can also be set in this tab if they were not appropriately adjusted in other tabs. The Display Unit drop-down list allows counts and voltages. Once the desired configuration is set, click on the Capture button. The right side of the tab sheet displays details of the waveform, such as average,

standard deviation, maximum, minimum, and fundamental frequency. Figure 3 displays the ADC data when a sinusoidal signal is applied at the inputs on the EV kit.

To save the captured data to a file, go to Options &gt; Save Graph &gt; Scope . This saves the setting on the left and the data captured to a CSV file.

Figure 3. MAX11284 EV Kit Software (Scope Tab)

<!-- image -->

## DMM Tab

The DMM tab sheet displays conversion data in a format similar  to  that  of  a  digital  multimeter.  Once  the  desired configuration  is  set  and  input  is  applied,  click  on  the Capture button.  Figure  4  displays  the  results  shown by  the DMM tab  when  IN+A  and  IN-A  are  set  to ADC\_ REF/2\_A,  see  Table  1  for  jumper  positions.  The  same principle applies for channel B of the device.

Figure 4. MAX11284 EV Kit Software (DMM Tab)

<!-- image -->

## MAX11284 Evaluation Kit

## Histogram Tab

The Histogram tab sheet is used to display a histogram of the captured data. Sampling rate and number of samples can also be set in this tab if they were not appropriately adjusted in other tabs. Once the desired configuration is set, click on the Capture button. The right side of the tab sheet displays details of the histogram such as average, standard  deviation,  maximum,  minimum,  peak-to-peak noise,  effective  resolution,  and  noise-free  resolution. To use this histogram feature, apply a DC voltage at the input. Figure 5 displays the results of input referred noise when ADC\_INP\_A and ADC\_INN\_A test points are connected

to ground.  The same principle applies for channel B of the ADC.

To save the histogram data to a file, go to Options &gt; Save Graph &gt; Histogram .  This  saves  the  setting  on  the  left and the histogram data captured to a CSV file.

Figure 5. MAX11284 EV Kit Software (Histogram Tab)

<!-- image -->

## MAX11284 Evaluation Kit

## FFT Tab

The FFT tab sheet (Figure 6) is used to display the FFT of the data. Sampling rate and number of samples can also be set in this tab if they were not appropriately adjusted in other tabs. Once the desired configuration is set, click on the Capture button. The right side of the tab displays

Evaluates: MAX11284

the performance based on the FFT, such as fundamental frequency, THD, SNR, SINAD, SFDR, ENOB, and noise floor. The same principle applies for channel B of the ADC.

To  save  the  FFT  data  to  a  file,  go  to Options  &gt;  Save Graph &gt; FFT . This saves the setting on the left and the FFT data captured to a CSV file.

Figure 6. MAX11284 EV Kit Software (FFT Tab)

<!-- image -->

│

## MAX11284 Evaluation Kit

## ADC Registers Tab

The ADC  Registers tab  sheet  shows  the  IC  registers on the left. The middle section shows the bits and bit descriptions  of  the  selected  register.  Click Read All to  read  all registers and refresh the window with the register settings. To write a register first select the hex value in the Value column, type the desired hex value and press Enter on the keyboard.

The command byte is on the right side of the tab sheet. This byte precedes all SPI transactions and is described in  the  IC  datasheet.  To  send  a  command  byte  enter  a hex value in the numeric box and click the Send button. The  command  byte  has  two  different  formats  including Conversion Mode and Register Access Mode. Select the radio button for the desired mode to see the bit description in the table.

Figure 7. MAX11284 EV Kit Software (ADC Registers Tab)

<!-- image -->

│

## System Offset and Gain

Control 5 (CTRL5) register is used to calibrate the system offset  and  gain.  NOSYSO  bit  and  NOSYSG  bit  are  '1' only if no system offset and gain calibrations are needed. Change these bit to '0' allows for system offset and gain calibrations. The system offset and gain calibrations are required for each specific gain setting.

Before proceeding with the register writes to CTRL5, set the gain (PGA = xx) to required value.

For System Offset Calculation:

- System offset requires connecting zero volt differentially across the ADC inputs. Once connected, Write 0x48 to CTRL5 register to perform the system offset calibration. For System Gain Calculation:
- System gain requires connecting an external ADC input pins  (at  measurement  point)  to  full-scale  reference voltage. Make sure to scale down V REF  by the gain factor. For gain of 2, the input applied is V REF /2, and gain of 4, input applied is V REF /4, etc. Once connected, write 0x84 to CTRL5 register to perform a system fullscale calibration.

After calibration, an analog signal may be applied at the ADC inputs and start conversion.

## Detailed Description of Hardware

This EV kit provides a proven layout to demonstrate the performance of the MAX11284 24-bit dual-channel DeltaSigma ADC.  Included  in  the  EV  kit  are  digital  isolators (MAX14934), ultra-low-noise LDOs (MAX8842) to all supply pins of the IC, and on-board references (MAX6126).

An onboard controller is provided to allow for evaluation in  standalone mode, which has limitations on maximum sample  size  and  it  can  perform  coherent  sampling  at lower  frequencies  with  a  precision  analog  generator. The EV Kit can be used with ZedBoard to achieve larger sample depth and coherent sampling.

The ADC has several input options which are selectable through  J5\_A  and  J6\_A  for  channel  A,  and  J5\_B  and J6\_B for channel B. The external option allows for wires attached to the screw terminals at J7\_A and J7\_B.

## User-Supplied SPI and IO

To  evaluate  the  EV  kit  with  a  user-supplied  SPI  bus, disconnect  from  the  FMC  bus  and  remove  jumper  J17. Apply the user-supplied SPI and IO signals to SCLK, CS, DIN, DOUT, RDYB, and SYNC at the PMOD\_A (J26) and PMOD\_B (J27) headers. Make sure the return ground is connected to the system ground. When using PMOD\_A and  PMOD\_B  headers,  ensure  that  DIN,  DOUT,  and SCLK are only driven by one port. The onboard FTDI chip used for standalone mode does not conflict with the usersupplied SPI if it is powered off by removing jumper J17.

Caution: Do not plug this header into a standard peripheral module interface found on other FPGA or microcontroller products. The signal definition is unique to this EV kit.

## User-Supplied Reference

For user-supplied reference voltage, place the shunts to the 2-3 position at J1\_A and J3\_A for channel A, and J1\_B and J3\_B for channel B, and apply external reference to the terminal connector (J1).

## User-Supplied AVSS

The AVSS supply is set to GND or -1.8V by jumper J2\_A for channel A and J2\_B for channel B. For user-supplied AVSS,  remove  shunts  from  J2\_A  and  J2\_B  and  apply AVSS  to  pin  2  of  those  jumpers.  Make  sure  that  this external supply has the correct relation to system ground.

## User-Supplied AVDD

The AVDD supply is set to 3.6V or 1.8V by jumper J23\_A for channel A and jumper J23\_B for channel B. For usersupplied  AVDD,  remove  the  shunts  from  J23\_A  and J23\_B and apply AVDD to pin 2 of those jumpers. Make sure that this external supply has the correct relation to system ground.

## Bipolar Powered vs Unipolar Powered

The  IC  supports  both  unipolar  and  bipolar  ranges.  For unipolar  mode  jumper  J23\_A  pins  1-2  to  power  AVDD with 3.6V and jumper J2\_A pins 1-2 to set AVSS to GND. For bipolar mode jumper J23\_A pins 2-3 to power AVDD with 1.8V and jumper J2\_A pins 2-3 to set AVSS to -1.8V. Same principle applies to channel using jumpers J23\_B and J2\_B.

## MAX11284 Evaluation Kit

## External Clock

When the IC is configured to use an external clock, jumper J40  provides  the  option  to  select  the  source.  Pins  2-3 selects  the  onboard  oscillator  as  the  clock  source  and jumper J2 must be installed to power the oscillator. The on-board oscillator is designed for a 3.3V  digital DUT supply. If  a 2.0V digital DUT supply is used, use an external 2V clock.  Jumper  J40  pins  1-2  selects  the  SMA  connector (and user-provided clock) as the clock source and jumper J2 must be removed to disable the on-board oscillator.

## GPIO1\_A and GPIO1\_B

Test points are provided for GPIO1\_A and GPIO1\_B. The ADC Config tab can configure these as input/output and read/drive the GPIO pins.

## ADC Inputs

Table 4 provides input options to both ADC channels.

## Sync Input and Sync Output

Sync Input and Sync Output is applicable to the ZedBoard and is not used in standalone mode.

## Table 4. Analog Input Configurations

| CONFIGURATION   | CONFIGURATION         | SIGNAL PATH INPUT                                                                                                                |                                                    |                                         |
|-----------------|-----------------------|----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|-----------------------------------------|
| No.             | DESCRIPTION           | CONFIGURATION                                                                                                                    | INPUT CONNECTORS                                   | JUMPER POSITIONS                        |
| 1               | External Inputs       | User-supplied signals                                                                                                            | IN+ and IN- (both channels and A and B)            | J5_A: 1-2 J6_A: 1-2 J5_B: 1-2 J6_B: 1-2 |
| 2               | ADC Voltage Reference | Voltage Reference Input toADC from MAX6126 or external source (see J1_A and J3_A for channel A, and J1_B and J3_B for channel B) | ADC_REFP and ADC_ REFN (both channels and A and B) | J5_A: 3-4 J6_A: 3-4 J5_B: 3-4 J6_B: 3-4 |

│

Evaluates: MAX11284

The SYNC\_CLK\_IN  SMA  accepts  an  approximate 100MHz waveform signal to generate the system clock of the ZedBoard. For maximum performance, use a low-jitter clock that syncs to the user's analog function generator. See Figure 8.

The  SYNC\_OUT  SMA  outputs  a  10MHz  square  wave can be used as reference for signal source. See Figure 9. Both options are used for coherent sampling of the IC. Only one option should be used at a time. The relationship between f IN ,  f S ,  N CYCLES ,  and  M SAMPLES   is  given  as follows:

<!-- formula-not-decoded -->

where:

f IN  = Input frequency

f S = Sampling frequency

NCYCLES = Prime number of cycles in the sampled set

MSAMPLES = Total number of samples

## Evaluates: MAX11284

Figure 8. MAX11284 EV Kit Coherent Sampling Setup Using SYNC IN

<!-- image -->

Figure 9. MAX11284 EV kit Coherent Sampling Setup Using SYNC OUT

<!-- image -->

│

## MAX11284 Evaluation Kit

## Component List, PCB Layout, and Schematics

See the following links for component information, PCB layout diagrams, and schematics.

- MAX11284 EV BOM
- MAX11284 EV PCB Layout
- MAX11284 EV Schematics

Evaluates: MAX11284

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11284EVKIT# | EVKIT  |

# Denotes RoHS compliant.

│

## MAX11284 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/16            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX11284

TITLE:

Bill of Materials

DATE:

09/11/2015

## DESIGN:

max11284\_evkit\_b

|   ITEM | REF_DES                                                                                                                                              | DNI/ DNP   |   QTY | MFG PART #                                                       | MNFCTR                         | VALUE   | DESCRIPTION                                                                                                            |
|--------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|-------|------------------------------------------------------------------|--------------------------------|---------|------------------------------------------------------------------------------------------------------------------------|
|      1 | +5V, +10V, +12V, +1.8V, +2.0V, +3.3V, - 1.8V, A3.6V, D3.6V, +10VEXT, +15VEXT, -                                                                      | -          |    12 | 5005                                                             | KEYSTONE                       | N/A     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|      2 | G1, G3, - 10V, G4_A, IN+_A, IN+_B, IN - _A, IN - _B, - 10VEXT, GPIO1_A, GPIO1_B, ADC_INN_A, ADC_INN_B, ADC_INP_A, ADC_INP_B, ADC_CAPR_A, ADC_CAPR_B, | -          |    21 | 5006                                                             | KEYSTONE                       | N/A     | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      3 | C2_A, C2_B, C3_A, C3_B, C5_A, C5_B                                                                                                                   | -          |     6 | GRM188R71C103KA01; ECJ - 1VB1C10; CL10B103KO8NNN                 | MURATA; PANASONIC; SAMSUNG     | 0.01UF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 16V; TOL=10%; TG= - 55 DEGC TO +125 DEG; TC=X7R                           |
|      4 | C28, C32, C34, C38, C41 - C47, C51, C52, C56, C66, C67, C79, C84, C88, C93, C94, C106, C107, C110, C117, C118, C120, C170, C4_A, C4_B, C6_A,         | -          |    38 | C0603C104K3RAC; GRM188R71E104KA01; C1608X7R1E104K                | KEMET/MURA TA/TDK              | 0.1UF   | CAPACITOR; SMT; 0603; CERAMIC; 0.1uF; 25V; 10%; X7R; - 55degC to + 125degC; +/ - 15% from - 55degC to +125degC;        |
|      5 | C11_A, C11_B, C12_A, C12_B                                                                                                                           | -          |     4 | GRM1885C1H102FA01                                                | MURATA                         | 1000PF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=1%; MODEL=GRM SERIES; TG= - 55 DEGC TO +125 DEGC; TC=C0G         |
|      6 | C60, C69, C78, C90, C91, C103, C104, C115, C116, C13_A, C13_B                                                                                        | -          |    11 | C0603C105K4RAC; GRM188R71C105KA12; C1608X7R1C105K; EMK107B7105KA | KEMET/MURA TA/TDK/TAIY O YUDEN | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 16V; TOL=10%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=X7R                     |
|      7 | C14_A, C14_B, C15_A, C15_B                                                                                                                           | -          |     4 | C1608C0G1E103J                                                   | TDK                            | 0.01UF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 25V; TOL=5%; MODEL=; TG= - 55 DEGC TO +125 DEGC;                          |
|      8 | C29, C39                                                                                                                                             | -          |     2 | C0603C181K5GAC                                                   | KEMET                          | 180PF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 180PF; 50V; TOL=10%; MODEL=C0G; TG= - 55 DEGC TO +125 DEGC; TC=+/                 |

|   9 | C33                                                                  | -   |   1 | GRM188R71E474KA12                                                    | MURATA                          | 0.47UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.47UF; 25V; TOL=10%; MODEL=GRM SERIES; TG= - 55 DEGC TO +125 DEGC; TC=X7R                              |
|-----|----------------------------------------------------------------------|-----|-----|----------------------------------------------------------------------|---------------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
|  10 | C86_A, C86_B, C109_A, C109_B                                         | -   |   4 | C0603C102J5GAC; 06035A102JAT2A                                       | KEMET/AVX/ MURATA               | 1000PF               | CAPACITOR; SMT; 0603; CERAMIC; 1000pF; 50V; 5%; C0G; - 55degC to +125degC, USE 20 - 1000p - E4 FOR NEW DESIGN                                |
|  11 | C111, C121                                                           | -   |   2 | C0603C102K5RAC; GRM188R71H102KA01; C0603X7R500 - 102KNE              | KEMET/MURA TA/VENKEL            | 1000PF               | CAPACITOR; SMT; 0603; CERAMIC; 1000pF; 50V; 10%; X7R; - 55degC to + 125degC; +/ - 15% from - 55degC to +125degC, USE 20 - 1000p - E4 FOR NEW |
|  12 | C126, C127                                                           | -   |   2 | C0603C0G500 - 180JNE; C1608C0G1H180J; GRM1885C1H180J                 | VENKEL LTD./TDK/MU RATA         | 18PF                 | CAPACITOR; SMT (0603); CERAMIC CHIP; 18PF; 50V; TOL=5%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=C0G                                           |
|  13 | CE1, CE2, CE4, CE5, CE10 - CE12, CE14 - CE17, CE19, CE20, CE22, CE24 | -   |  15 | C0805X7R250 - 105KNE; TMK212BJ10;TMK212B7 105KG - T;GRM21BR71E105KA9 | VENKEL LTD./TAIYO YUDEN/MUR ATA | 1UF                  | CAPACITOR; SMT (0805); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=X7R -                                         |
|  14 | CE3, CE6, CE13, CE18, CE21, CE26                                     | -   |   6 | TMK212BBJ106KG - T; CL21A106KAFN3N                                   | TAIYO YUDEN                     | 10UF                 | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG= - 55 DEGC TO +85 DEGC;                                                  |
|  15 | CE7 - CE9                                                            | -   |   3 | GRM21BR61E475KA                                                      | MURATA                          | 4.7UF                | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=X5R; TG= - 55 DEGC TO +125 DEGC; TC=+/                                       |
|  16 | CE23B, CE23_A                                                        | -   |   2 | C2012X7R1E475K125AB                                                  | TDK                             | 4.7UF                | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; MODEL=; TG= - 55 DEGC TO +125 DEGC; TC=X7R                                         |
|  17 | D1_A, D1_B, D2_A, D2_B                                               | -   |   4 | BAT54S                                                               | FAIRCHILD SEMICONDUC TOR        | BAT54S               | DIODE; SCH; SCHOTTKY DIODE; SMT (SOT - 23); PIV=30V; IF=0.2A                                                                                 |
|  18 | D3, D4, DB1                                                          | -   |   3 | MBR0520L                                                             | FAIRCHILD SEMICONDUC TOR        | MBR05 20L            | DIODE, SCHOTTKY, SOD - 123, PIV=20V, Vf=0.385V@If=0.5A, If(ave)=0.5A                                                                         |
|  19 | DS1, DSB1                                                            | -   |   2 | LG L29K - G2J1 - 24                                                  | OSRAM                           | LG L29K - G2J1 - 24  | DIODE; LED; SMT (0603); Vf=1.7V; If(test)=0.002A; - 40 DEGC TO +100 DEGC                                                                     |
|  20 | DS2                                                                  | -   |   1 | LS L29K - G1J2 - 1 - Z                                               | OSRAM                           | LS L29K - G1J2 - 1 - | DIODE; LED; SMART; RED; SMT (0603); PIV=1.8V; IF=0.02A; - 40 DEGC TO +100 DEGC                                                               |

|   21 | G2                                                             | -   |   1 | 5001                        | KEYSTONE                   | N/A                         | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|------|----------------------------------------------------------------|-----|-----|-----------------------------|----------------------------|-----------------------------|----------------------------------------------------------------------------------------------------------------------|
|   22 | J1, J10, J7_A, J7_B                                            | -   |   4 | OSTTA020161                 | ON - SHORE TECHNOLOGY INC. | OSTTA0 20161                | CONNECTOR; FEMALE; THROUGH HOLE;5MM TERMINAL BLOCK CONNECTOR; STRAIGHT; 2PINS                                        |
|   23 | J32, J40, J1_A - J3_A, J1_B - J3_B, J23_A, J23_B, RST_A, RST_B | -   |  12 | PBC03SAAN                   | SULLINS                    | PBC03S AAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS; - 65 DEGC TO +125 DEGC                                    |
|   24 | J2, J11, J17, J18, J4_A, J4_B                                  | -   |   6 | PCC02SAAN                   | SULLINS                    | PCC02S AAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; - 65 DEGC TO +125                                 |
|   25 | J14, J15, J5_A, J5_B, J6_A, J6_B                               | -   |   6 | PBC03DAAN                   | SULLINS ELECTRONICS CORP.  | PBC03D AAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; - 65 DEGC TO +125 DEGC                                    |
|   26 | J8                                                             | -   |   1 | 10118192 - 0001LF           | FCI CONNECT                | 101181 92 -                 | CONNECTOR; FEMALE; SMT; MICRO USB B TYPE RECEPTACLE; RIGHT ANGLE; 5PINS                                              |
|   27 | J9, J12                                                        | -   |   2 | PBC03SABN                   | SULLINS                    | PBC03S ABN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                            |
|   28 | J13                                                            | -   |   1 | KLDX - 0202 - B             | KYCON                      | KLDX - 0202 - B             | CONNECTOR; FEMALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                   |
|   29 | J16                                                            | -   |   1 | PBC06SAAN                   | SULLINS ELECTRONICS CORP.  | PBC06S AAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; - 65 DEGC TO +125 DEGC                                    |
|   30 | J19, J21                                                       | -   |   2 | PBC10SAAN                   | SULLINS ELECTRONICS CORP.  | PBC10S AAN                  | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 10PINS; - 65 DEGC TO +125 DEGC                                   |
|   31 | J20, J24, J28, J29, J35                                        | -   |   5 | 73391 - 0060                | MOLEX                      | 73391 - 0060                | CONNECTOR; FEMALE; THROUGH HOLE; SMA JACK CONNECTOR; STRAIGHT; 5PINS                                                 |
|   32 | J26, J27                                                       | -   |   2 | TSW - 106 - 08 - S - D - RA | SAMTEC                     | TSW - 106 - 08 - S - D - RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS;                                                            |
|   33 | J30                                                            | -   |   1 | ASP - 134604 - 01           | SAMTEC                     | ASP - 134604 - 01           | CONNECTOR; MALE; SMT; HIGH SPEED/HIGH DENSITY OPEN PIN FIELD TERMINAL ARRAY; STRAIGHT; 160PINS                       |

|   34 | J37_A                                                                                                                                                                                   | -   |   1 | PEC02DAAN                                      | SULLINS ELECTRONIC CORP.             | PEC02D AAN   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 4PINS                           |
|------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----|-----|------------------------------------------------|--------------------------------------|--------------|-------------------------------------------------------------------------------------|
|   35 | L1 - L5                                                                                                                                                                                 | -   |   5 | MPZ1608S601A                                   | TDK                                  | 600          | INDUCTOR; SMT (0603); FERRITE - BEAD; 600; TOL=+/ - 25%; 1A; - 55 DEGC TO +125 DEGC |
|   36 | MECH1 - MECH4                                                                                                                                                                           | -   |   4 | 24427                                          | GENERIC PART                         | 24427        | STANDOFF; FEMALE - THREADED; HEX; M2.5; 20MM; ALUMINUM                              |
|   37 | R16_A, R16_B, R17_A, R17_B                                                                                                                                                              | -   |   4 | CR0603 - 16W - 000T; CR0603 - 16W - 000RJT     | VENKEL LTD.                          | 0            | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                               |
|   38 | R18_A, R18_B, R19_A, R19_B                                                                                                                                                              | -   |   4 | CRCW060310R0FK; MCR03EZPFX10R0                 | VISHAY DALE/ROHM                     | 10           | RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                               |
|   39 | R20_A, R20_B                                                                                                                                                                            | -   |   2 | CRCW0603100RFK; ERJ - 3EKF1000                 | VISHAY DALE/PANAS ONIC               | 100          | RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                              |
|   40 | R30, R35, R61, R82, R21_A, R21_B                                                                                                                                                        | -   |   6 | CRCW06031003FK; ERJ - 3EKF1003                 | VISHAY DALE/PANAS ONIC               | 100K         | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                 |
|   41 | R130, R131, R133, R136, R138, R140, R145, R146, R148, R22_A, R22_B, R23_A, R23_B                                                                                                        | -   |  13 | CRCW060310K0FK; 9C06031A1002FK; ERJ - 3EKF1002 | VISHAY DALE/YAGEO PHICOMP/PA NASONIC | 10K          | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                  |
|   42 | R24_A, R24_B, R25_A, R25_B                                                                                                                                                              | -   |   4 | CRCW06034R99FK                                 | VISHAY DALE                          | 4.99         | RESISTOR; 0603; 4.99 OHM; 1%; 100PPM; 0.1W; THICK FILM                              |
|   43 | R26, R27, R62, R64, R65, R68, R70, R71, R73, R76, R80, R81, R87, R89, R92, R95 - R98, R100 - R102, R105, R108, R132, R134, R137, R139, R141, R143, R144, R147, R149, R150, R152 - R154, | -   |  45 | ERJ - 3EKF28R0V                                | PANASONIC                            | 28           | RESISTOR; 0603; 28 OHM; 1%; 100PPM; 0.10W; THICK FILM                               |
|   44 | R31, R40                                                                                                                                                                                | -   |   2 | CRCW0603715KFK                                 | VISHAY DALE                          | 715K         | RESISTOR; 0603; 715K OHM; 1%; 100PPM; 0.10W; METAL FILM                             |
|   45 | R36, R37, R124, R125                                                                                                                                                                    | -   |   4 | CRCW06031001FK; ERJ - 3EKF1001V                | VISHAY DALE; PANASONIC               | 1K           | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                   |

|   46 | R48, R77, R151                                      | -   |   3 | CRCW06030000ZS; MCR03EZPJ000; ERJ - 3GEY0R00   | VISHAY DALE/ROHM/ PANASONIC   | 0     | RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                                            |
|------|-----------------------------------------------------|-----|-----|------------------------------------------------|-------------------------------|-------|---------------------------------------------------------------------------------------------------------------------------------|
|   47 | R49, R50                                            | -   |   2 | CRCW06036K04FK                                 | VISHAY DALE                   | 6.04K | RESISTOR; 0603; 6.04K; 1%; 100PPM; 0.10W; THICK FILM                                                                            |
|   48 | R53                                                 | -   |   1 | CRCW0603150KFK                                 | VISHAY DALE                   | 150K  | RESISTOR, 0603, 150K OHM,1%, 100PPM, 0.10W, THICK FILM                                                                          |
|   49 | R54, R55                                            | -   |   2 | ERJ - 3EKF4533V                                | PANASONIC                     | 453K  | RESISTOR; 0603; 453K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                         |
|   50 | R57 - R59, R72                                      | -   |   4 | CRCW0603237KFK; ERJ3EKF2373V                   | VISHAY DALE/PANAS ONIC        | 237K  | RESISTOR; 0603; 237K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                         |
|   51 | R63                                                 | -   |   1 | ERJ - 3EKF1693V                                | PANASONIC                     | 169K  | RESISTOR; 0603; 169K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                         |
|   52 | R74                                                 | -   |   1 | CRCW0603105KFK                                 | VISHAY DALE                   | 105K  | RESISTOR; 0603; 105K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                         |
|   53 | R83                                                 | -   |   1 | CRCW0603100RJN                                 | VISHAY DALE                   | 100   | RESISTOR; 0603; 100 OHM; 5%; 200PPM; 0.10W; THICK FILM                                                                          |
|   54 | R85                                                 | -   |   1 | CRCW060339K0FK                                 | VISHAY DALE                   | 39K   | RESISTOR, 0603, 39K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                          |
|   55 | R112 - R114, R119, R122, R123, R166, R161_A, R167_A | -   |   9 | CRCW060349R9FK                                 | VISHAY DALE                   | 49.9  | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                         |
|   56 | R128                                                | -   |   1 | CRCW060312K0FK                                 | VISHAY DALE                   | 12K   | RESISTOR, 0603, 12K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                          |
|   57 | R129                                                | -   |   1 | CRCW060315K0FK                                 | VISHAY DALE                   | 15K   | RESISTOR, 0603, 15K OHM,1%, 100PPM, 0.10W, THICK FILM                                                                           |
|   58 | R135                                                | -   |   1 | CRCW06032K20FK                                 | VISHAY DALE                   | 2.2K  | RESISTOR, 0603, 2.2K OHM, 1%, 100PPM, 0.10W, THICK FILM                                                                         |
|   59 | R142                                                | -   |   1 | CRCW06034K70FK                                 | VISHAY DALE                   | 4.7K  | RESISTOR; 0603; 4.7K; 1%; 100PPM; 0.10W; THICK                                                                                  |
|   60 | SCREW1 - SCREW4                                     | -   |   4 | 29301                                          | KEYSTONE                      | 29301 | MACHINE SCREW; SLOTTED; PAN; M2.5; 6MM; STEEL; ZINC PLATE                                                                       |
|   61 | SU1 - SU27                                          | -   |  27 | STC02SYAN                                      | SULLINS ELECTRONICS CORP.     | AN    | STC02SY TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL |

|   62 | SYNC_CLK_IN, SYNC_CLK_OUT   | -   |   2 | 5123            | KEYSTONE              | N/A              | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.35IN; BOARD HOLE=0.063IN; GRAY; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                           |
|------|-----------------------------|-----|-----|-----------------|-----------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
|   63 | T1                          | -   |   1 | TGM - H240V8LF  | HALO ELECTRONICS, INC | TGM - H240V8 LF  | TRANSFORMER; SMT; 1:1:1.3:1.3; DC/DC CONVERTER                                                                                                  |
|   64 | U1                          | -   |   1 | MAX11284EUG+    | MAXIM                 | MAX11 284EUG     | EVKIT PART; IC; PACKAGE CODE T4066 - 5; TQFN40 - EP                                                                                             |
|   65 | U2_A,U2_B                   | -   |   2 | MAX6126AASA25+  | MAXIM                 | MAX61 26AASA 25  | IC; SERIES VOLTAGE REFERENCE; ULTRA HIGH PRECISION; ULTRA LOW NOISE VOLTAGE REFERENCE; SOIC8 150MIL; Vout=2.5V, 3ppm/degC max TEMPCO            |
|   66 | U3, U6                      | -   |   2 | BAS4002A - RPP  | INFINEON              | BAS400 2A - RPP  | DIODE; SCH; LOW VF SCHOTTKY DIODE ARRAY; SMT (SOT - 143); PIV=40V; IF=0.2A                                                                      |
|   67 | U4,U7,U23                   | -   |   3 | MAX15006CATT+   | MAXIM                 | MAX15 006CAT     | IC; VREG; ULTRA - LOW QUIESCENT - CURRENT LINEAR REGULATOR; TDFN6 - EP 3X3                                                                      |
|   68 | U5                          | -   |   1 | MAX13256ATB+    | MAXIM                 | MAX13 256ATB     | IC; DRV; 36V H - BRIDGE TRANSFORMER DRIVER FOR ISOLATED SUPPLIES; TDFN10 - EP 3X3                                                               |
|   69 | U8                          | -   |   1 | MAX15006BATT+   | MAXIM                 | MAX15 006BAT     | IC; VREG; ULTRA - LOW QUIESCENT - CURRENT LINEAR REGULATOR; TDFN6 - EP 3X3                                                                      |
|   70 | U9 - U11,U13                | -   |   4 | MAX8842ELT+     | MAXIM INTEGRATED      | MAX88 42ELT+     | IC; VREG; ULTRA - LOW - NOISE; HIGH PSRR; LOW - DROPOUT; LINEAR REGULATOR; UDFN6 1.5MM X 1.0MM                                                  |
|   71 | U12, UB1                    | -   |   2 | 93LC66BT - I/OT | MICROCHIP             | 93LC66 BT - I/OT | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23 - 6                                                                                                |
|   72 | U14                         | -   |   1 | MAX15006AATT+   | MAXIM                 | MAX15 006AAT     | IC; VREG; ULTRA - LOW QUIESCENT - CURRENT LINEAR REGULATOR; TDFN6 - EP 3X3                                                                      |
|   73 | U15                         | -   |   1 | MAX664ESA       | MAXIM                 | MAX66 4ESA       | IC, NEGATIVE VOLTAGE REGULATOR, DUAL MODE, 5V/PROGRAMMABLE, 2V TO 16.5V INPUT VOLTAGE RANGE,VS(MAX)= - 18V, SOIC8 - 150MIL, - 40degC TO +85degC |
|   74 | U16,U17,U19                 | -   |   3 | MAX14934FAWE+   | MAXIM                 | MAX14 934FA      | IC; DISO; 4/0 CHANNEL; 150MBPS; DEFAULT LOW; 5KVRMS DIGITAL ISOLATOR; WSOIC16 300MIL                                                            |
|   75 | U18, U20                    | -   |   2 | 74LVC2G125DP    | NXP                   | 74LVC2 G125DP    | IC; DRV; DUAL BUS BUFFER/LINE DRIVER; 3 - STATE; TSSOP8                                                                                         |

|   76 | U21                        | -   |   1 | FXO - HC730 - 2.048                        | FOX                                 | FXO - HC730 - 2.048                                    | OSCILLATOR; SMT 7X5; 15PF; 2.048MHZ; +/ - 100PPM                |
|------|----------------------------|-----|-----|--------------------------------------------|-------------------------------------|--------------------------------------------------------|-----------------------------------------------------------------|
|   77 | UB2                        | -   |   1 | FT2232HL                                   | FUTURE TECHNOLOGY DEVICES INTL LTD. | FT2232 HL                                              | IC; MMRY; DUAL HIGH SPEED USB TO MULTIPURPOSE UART/FIFO; LQFP64 |
|   78 | YB1                        | -   |   1 | ABM7 - 12.000MHZ - D2Y - T                 | ABRACON                             | 12MHZ                                                  | CRYSTAL; SMT ; 18PF; 12MHZ; +/ - 20PPM; +/ - 30PPM              |
|   79 | C8_A - C10_A, C8_B - C10_B | DNP |   6 | N/A                                        | N/A                                 | ?                                                      | CAPACITOR; 0603 PACKAGE; GENERIC                                |
|   80 | R186 - R188                | DNP |   3 | CR0603 - 16W - 000T; CR0603 - 16W - 000RJT | VENKEL LTD.                         | 0                                                      | RESISTOR; 0603; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM           |
|   81 | -                          | -   |   1 | AK67421 - 1 - R                            | ASSMANN                             | CONNE CTOR; MALE; USB; USB2.0 MICRO CONNE CTION CABLE; |                                                                 |
|   82 | -                          | -   |   1 | B00ET4KHJ2                                 | CABLE MATTERS                       | USB 2.0 TO 10/100                                      |                                                                 |
|   83 | -                          | -   |   1 | SDC4/4GB                                   | KINGSTON TECHNOLOGY Y               | ACCESS ORY; MEMOR CARD;                                |                                                                 |

TOTA

382

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

F

E

D

C

B

A

8

8

ROUTE CSB AND B PINS

11214\_16\_evkit\_p1\_adc\_module

SYNC\_ADC\_B

CS\_ADC\_B

RDYB\_ADC\_B

SYNC\_ADC\_A

DOUT\_ADC

DIN\_ADC

SCLK\_ADC

CS\_ADC\_A

RDYB\_ADC\_A

DVDD\_ADC

+1.8V

-1.8V

+2.0V

A3.6V

+3.3V

AGND

7

7

SYNC\_ADC\_B

CS\_ADC\_B

RDYB\_ADC\_B

6

6

5

5

4

4

SYNC\_ADC\_B

CS\_ADC\_B

RDYB\_ADC\_B

3

11214\_16\_evkit\_p1\_power

+3.3V

+2.0V

+1.8V

-1.8V

A3.6V

D3.6V

AGND

USB+5V

5V\_FPGA

+3V3\_USB

VDDIO

+12V\_FPGA

GND

INTERFACE

11214\_16\_evkit\_p1\_interface\_module

SYNC\_ADC\_A

DOUT\_ADC

DIN\_ADC

SCLK\_ADC

CS\_ADC\_A

RDYB\_ADC\_A

SYNC\_ADC\_B

CS\_ADC\_B

RDYB\_ADC\_B

GND

5V\_FPGA

VDDIO

+3.3V

AGND

+12V\_FPGA

D3.6V

DVDD\_ADC

CS\_ADC\_A\_FPGA

SYNC\_ADC\_A\_FPGA

SCLK\_ADC\_FPGA

DIN\_ADC\_FPGA

DOUT\_ADC\_FPGA

SCLK\_ADC\_OUT\_FPGA

RDYB\_ADC\_A\_FPGA

SYNC\_ADC\_B\_FPGA

RDYB\_ADC\_B\_FPGA

CS\_ADC\_B\_FPGA

USB\_FTDI\_CHIP

CS\_ADC\_B\_FPGA

RDYB\_ADC\_B\_FPGA

SYNC\_ADC\_B\_FPGA

RDYB\_ADC\_A\_FPGA

DOUT\_ADC\_FPGA

DIN\_ADC\_FPGA

SCLK\_ADC\_FPGA

SYNC\_ADC\_A\_FPGA

CS\_ADC\_A\_FPGA

USB+5V

+3.3V\_USB

GND

3

2

PROJECT TITLE:

DRAWING TITLE:

SIZE:

C C

C C

ENGINEER:

\_

2

HARDWARE NUMBER:

.

DRAWN BY:

\_

TEMPLATE REV.:

1.4

MAX11284 EVKIT

1

1

DATE:

REV.:

B

SHEET 1 OF 6

SEPT 2015

F

E

D

C

B

A

F

E

D

C

B

A

8

8

ADC\_INN\_A

ADC\_INP\_A

G4\_A

DVDD\_ADC

RST\_A

3

ADC\_INN\_A

ADC\_INP\_A

R18\_A

10

R19\_A

10

1

7

2

7

IN

IN

IN

IN

IN

IN

A3.6V

1

+1.8V

+3.3V

A3.6V

+1.8V

-1.8V

+2.0V

AGND

3

AVDD\_A

2

D1\_A

BAT54S

1

3

3

DIN\_ADC

DOUT\_ADC

SYNC\_ADC\_A

IN

OUT

IN

J23\_A

2

2

1

AVDD\_A

C11\_A

1000PF

C12\_A

1000PF

BAT54S

D2\_A

AVSS\_A

6

R167\_A

GPIO1\_A

AVSS\_A

C2\_A

0.01UF

C8\_A

OPEN

6

49.9

C5\_A

0.01UF

C15\_A

0.01UF

37

38

28

1

3

5

7

9

11

13

5

U1

MAX11284EUG+

DIN

SCLK

DOUT/MB0

DGND\_A

SYNC\_A

RSTB\_A

GPIO1/MB1\_A

AVDD\_A

AVSS\_A

AINN\_A

AINP\_A

41

EP

AVSS\_A

CSB\_A

DVDD\_A

CAPREG\_A

DGND\_A

CLK

RDYB\_A

AVSS\_A

CAPP\_A

CAPN\_A

REFP\_A

REFN\_A

5

36

34

32

30

39

27

25

23

21

19

17

15

IN

SCLK\_ADC

IN

CS\_ADC\_A

J4\_A

PCC02SAAN

1

2

C3\_A

0.01UF

C109\_A

1000PF

C14\_A

0.01UF

4

4

AVSS\_A

OUT

DVDD\_ADC

2

C7\_A

0.1UF

C13\_A

1UF

C6\_A

0.1UF

C9\_A

OPEN

C156\_A

0.1UF

C10\_A

OPEN

2

1

3

ADC\_CAPR\_A

49.9

R161\_A

28

R155\_A

1

J2\_A

3

ADC\_REFP\_A

J32

ADC\_REFN\_A

J1

OSTTA020161

3

3

IN+\_A

J7\_A

OSTTA020161

IN-\_A

+3.3V

+2.0V

CLK

OUT

-1.8V

R22\_A

10K

ADC\_REF/2\_A

R23\_A

10K

RDYB\_ADC\_A

R16\_A

C86\_A

1000PF

2

EXT\_REFP

1

EXT\_REFN

2

1

R17\_A

R24\_A

4.99

R25\_A

4.99

0

0

2

ADC\_REFP\_A

ADC\_REF/2\_A

ADC\_REFN\_A

ADC\_INP\_A

ADC\_INN\_A

GPIO1\_A

R20\_A

J35

73391-0060

SMA CONNECTOR

1

EXTERNAL CLOCK

R166

2

49.9

5

3

4

ADC\_REFP\_A

2

CE23\_A

4.7UF

ADC\_REFN\_A

2

DNI

3

1

1

3

EXT\_REFN

PROJECT TITLE:

DRAWING TITLE:

ADC MODULE

SIZE:

C C

C C

ENGINEER:

\_

2

HARDWARE NUMBER:

.

DRAWN BY:

\_

TEMPLATE REV.:

1.4

1

3

1

3

5

6

4

PBC03DAAN

J6\_A

1

2

3

4

5

6

J5\_A

PBC03DAAN

6

5

2

4

2

J37\_A

PEC02DAAN

1

2

3

100

2

4

1

3

3

U21

FXO-HC730-2.048

+3.3V

2

1

4

VDD

OUTPUT

GND

2

THE ON BOARD OSCILLATOR IS DESIGNED

FOR 3.3V DIGITAL DUT SUPPLY.

IF +2.0V DIGITAL DUT SUPPLY IS USED,

USE EXTERNAL 2V CLOCK.

EXT\_REFP

J1\_A

U2\_A

MAX6126AASA25

6

IN

OUTS

7

OUTF

I.C.

I.C.

8

5

NR

GNDS

GND

4

3

J3\_A

+3.3V

2

1

C4\_A

0.1UF

C75\_A

0.1UF

2

4

J40

3

1

2

4

6

5

3

1

ADC\_INP\_B

ADC\_INN\_B

GPIO1\_A

R21\_A

100K

J2

MAX11284 EVKIT

1

ADC\_INP\_A

ADC\_INN\_A

C170

0.1UF

E/D

1

AVSS\_A

1

DATE:

REV.:

B

SHEET 2 OF 6

SEPT 2015

F

E

D

C

B

A

F

E

D

C

B

A

8

8

DVDD\_ADC

1

RST\_B

7

2

3

ADC\_INN\_B

R18\_B

10

R19\_B

10

ADC\_INP\_B

7

ADC\_INN\_B

ADC\_INP\_B

A3.6V

+1.8V

AVDD\_B

2

D1\_B

BAT54S

1

1

3

3

SYNC\_ADC\_B

IN

J23\_B

AVDD\_B

C11\_B

1000PF

C12\_B

1000PF

D2\_B

AVSS\_B

2

2

3

1

BAT54S

6

GPIO1\_B

AVSS\_B

C2\_B

0.01UF

C8\_B

OPEN

6

C5\_B

0.01UF

C15\_B

0.01UF

29

2

4

6

8

10

12

14

5

U1

MAX11284EUG+

CSB\_B

DGND\_B

SYNC\_B

RSTB\_B

GPIO1/MB1\_B

AVDD\_B

AVSS\_B

AINN\_B

AINP\_B

DVDD\_B

CAPREG\_B

DGND\_B

RDYB\_B

AVSS\_B

CAPP\_B

CAPN\_B

REFP\_B

REFN\_B

5

35

33

31

40

26

24

22

20

18

16

IN

CS\_ADC\_B

J4\_B

PCC02SAAN

1

C3\_B

0.01UF

C109\_B

1000PF

2

4

C14\_B

0.01UF

4

AVSS\_B

C7\_B

0.1UF

ADC\_CAPR\_B

C13\_B

1UF

C6\_B

0.1UF

C9\_B

OPEN

C156\_B

0.1UF

28

R155\_B

1

J2\_B

3

ADC\_REFP\_B

ADC\_REF/2\_B

ADC\_REFN\_B

3

C10\_B

OPEN

OUT

2

DVDD\_ADC

3

IN+\_B

J7\_B

OSTTA020161

IN-\_B

GPIO1\_B

RDYB\_ADC\_B

R22\_B

10K

C86\_B

1000PF

R23\_B

10K

OUT

-1.8V

2

1

R24\_B

4.99

R25\_B

4.99

R20\_B

R16\_B

0

R17\_B

0

100

R21\_B

100K

ADC\_REFP\_B

ADC\_REFN\_B

2

CE23B

4.7UF

2

3

PROJECT TITLE:

DRAWING TITLE:

ADC MODULE

SIZE:

C C

C C

ENGINEER:

\_

2

HARDWARE NUMBER:

.

DRAWN BY:

\_

TEMPLATE REV.:

1.4

2

ADC\_REFP\_B

ADC\_REF/2\_B

ADC\_REFN\_B

1

3

5

6

4

J6\_B

PBC03DAAN

1

2

2

3

5

4

6

4

6

J5\_B

PBC03DAAN

6

5

2

5

4

2

3

1

GPIO1\_B

EXT\_REFP

3

1

1

3

1

J1\_B

U2\_B

MAX6126AASA25

6

IN

OUTS

7

OUTF

I.C.

I.C.

5

8

GNDS

NR

GND

4

3

J3\_B

EXT\_REFN

MAX11284 EVKIT

ADC\_INP\_B

ADC\_INN\_B

+3.3V

C4\_B

0.1UF

C75\_B

0.1UF

2

1

1

AVSS\_B

DATE:

REV.:

B

SHEET 3 OF 6

1

SEPT 2015

F

E

D

C

B

A

D

C

B

A

8

USB+5V

L3

600

USB

J8

10118192-0001LF

SHIELD

11

10

9

7

8

8

6

1

2

3

4

5

1

2

3

4

5

R27

R26

7

28

28

7

USB+5V

R129

15K

R130

10K

10K

+1.8V

+3.3V\_USB

CE8

4.7UF

0.1UF

+3.3V\_USB

+1.8V

+3.3V\_USB

R140

R135

2.2K

6

VCC

VSS

2

C43

1

6

6

DO

C41

0.1UF

+3.3V\_USB

CE7

4.7UF

CE9

4.7UF

R128

UB1

93LC66BT-I/OT

CS

5

CLK

DI

4

3

12K

C127

18PF

YB1

12MHZ

C126

18PF

5

C44

0.1UF

C42

0.1UF

5

C52

0.1UF

4

VPHY

50

49

7

8

6

14

63

62

61

2

3

13

VREGIN

VREGOUT

DM

DP

REF

RESET#

EECS

EECLK

EEDATA

OSCI

OSCO

TEST

AGND

10

9

VPLL

GND

1

12

VCORE

GND

5

37

64

20

31

VCORE

VCORE

VCCIO

UB2

42

VCCIO

FT2232HL

GND

GND

GND

GND

11

15

25

35

VCCIO

GND

47

56

VCCIO

ADBUS0

ADBUS1

ADBUS2

ADBUS3

ADBUS4

ADBUS5

ADBUS6

ADBUS7

ACBUS0

ACBUS1

ACBUS2

ACBUS3

ACBUS4

ACBUS5

ACBUS6

ACBUS7

BDBUS0

BDBUS1

BDBUS2

BDBUS3

BDBUS4

BDBUS5

BDBUS6

BDBUS7

BCBUS0

BCBUS1

BCBUS2

BCBUS3

BCBUS4

BCBUS5

BCBUS6

BCBUS7

PWREN#

SUSPEND#

GND

51

4

C45

0.1UF

4

16

17

18

19

21

22

23

24

26

27

28

29

30

32

33

34

38

39

40

41

43

44

45

46

48

52

53

54

55

57

58

59

60

36

C47

0.1UF

10K

10K

R131

R133

OPEN

0

R186

C51

0.1UF

10K

10K

R136

OPEN

0

R187

R138

10K

R148

OPEN

0

R188

R142

C46

0.1UF

10K

R145

10K

R146

4.7K

3

+3.3V\_USB

+3.3V\_USB

R132

R134

R137

28

28

28

R149

R162

R163

R150

R144

R147

DSB1

3

R139

R141

R143

28

28

28

IN

OUT

IN

28

28

28

28

28

28

2

CS\_ADC\_A\_FPGA

RDYB\_ADC\_A\_FPGA

SYNC\_ADC\_A\_FPGA

OUT

CS\_ADC\_B\_FPGA

OUT

IN

RDYB\_ADC\_B\_FPGA

SYNC\_ADC\_B\_FPGA

PROJECT TITLE:

MAX11284 EVKIT

DRAWING TITLE:

USB AND FTDI CHIP

SIZE

.

B B

ENGINEER:

\_

2

HARDWARE NUMBER:

DRAWN BY:

\_

TEMPLATE REV:

1.4

IN

IN

IN

OUT

IN

1

USB+5V

+3.3V\_USB

OUT

GND

SCLK\_ADC\_FPGA

DIN\_ADC\_FPGA

DOUT\_ADC\_FPGA

DATE:

SEPT 2015

REV:

B

SHEET 4 OF 6

1

D

C

B

A

F

E

D

C

B

A

CS\_ADC\_A

SCLK\_ADC

DIN\_ADC

SYNC\_ADC\_A

DOUT\_ADC

RDYB\_ADC\_A

RDYB\_ADC\_B

CS\_ADC\_B

SYNC\_ADC\_B

8

OUT

OUT

OUT

OUT

IN

IN

8

R157

R160

R158

R159

R76

R102

J19

PBC10SAAN

1

3

2

4

6

5

7

9

8

10

28

28

28

28

28

28

RDYB\_ADC\_B

CS\_ADC\_B

SYNC\_ADC\_B

IN

OUT

OUT

TEST

SYNC\_ADC\_A

RDYB\_ADC\_A

CS\_ADC\_A

SCLK\_ADC

DIN\_ADC

DOUT\_ADC

7

DVDD\_ADC

R153

DVDD\_ADC

R152

R154

7

C104

1UF

28

C91

1UF

28

28

J21

PBC10SAAN

1

3

2

4

6

5

7

9

8

10

C107

0.1UF

C94

0.1UF

16

15

14

13

12

11

10

VDDB

GNDB

OUTB1

OUTB2

OUTB3

OUTB4

ENB

9

GNDB

DVDD\_ADC

C116

1UF

1

2

3

4

5

6

7

8

16

15

14

13

12

11

10

9

0.1UF

C118

VDDA

GNDA

INA1

INA2

INA3

INA4

I.C.

GNDA

VDDB

GNDB

OUTB1

OUTB2

OUTB3

OUTB4

ENB

GNDB

6

6

U17

MAX14934FAWE+

VDDA

1

GNDA

INA1

INA2

INA3

INA4

I.C.

2

3

4

5

6

7

GNDA

8

U19

MAX14934FAWE+

VDDB

16

GNDB

OUTB1

OUTB2

OUTB3

OUTB4

ENB

15

14

13

12

11

10

GNDB

9

U16

MAX14934FAWE+

VDDA

1

GNDA

INA1

INA2

INA3

INA4

I.C.

GNDA

2

3

4

5

6

7

8

CS\_ADC\_B\_FPGA

DIN\_ADC\_FPGA

DOUT\_ADC\_FPGA

SCLK\_ADC\_FPGA

CS\_ADC\_A\_FPGA

DIN\_ADC\_FPGA

DOUT\_ADC\_FPGA

SCLK\_ADC\_FPGA

C106

0.1UF

C117

0.1UF

C93

0.1UF

1

2

3

4

5

6

1

2

3

4

5

6

5

VDDIO

C103

1UF

CS\_ADC\_A\_FPGA

SCLK\_ADC\_FPGA

DIN\_ADC\_FPGA

SYNC\_ADC\_A\_FPGA

VDDIO

C115

1UF

DOUT\_ADC\_FPGA

RDYB\_ADC\_A\_FPGA

SCLK\_ADC\_OUT\_FPGA

RDYB\_ADC\_B\_FPGA

VDDIO

C90

1UF

CS\_ADC\_B\_FPGA

SYNC\_ADC\_B\_FPGA

PMOD PORT B

J27

TSW-106-08-S-D-RA

J1-1

J1-7

J1-2

J1-3

J1-4

J1-5

7

8

9

10

11

J1-8

J1-9

J1-10

J1-11

J1-6

12

J1-12

VDDIO

+12V\_FPGA

RDYB\_ADC\_A\_FPGA

SYNC\_ADC\_A\_FPGA

WHEN USING PMOD A AND PMOD B

ENSURE THAT DIN DOUT SCLK ARE ONLY DRIVEN BY ONE OF THE PORTS

VDDIO

PMOD PORT A

J26

TSW-106-08-S-D-RA

J1-1

J1-7

J1-2

J1-3

J1-4

J1-5

J1-6

5

J1-8

J1-9

J1-10

J1-11

J1-12

7

8

9

10

11

12

R105

VADJ

RDYB\_ADC\_B\_FPGA

SYNC\_ADC\_B\_FPGA

4

28

IN

4

FMC CONNECTOR

J30

ASP-134604-01

ASP-134604-01

J30

G1

1

G2

G3

G4

G5

G6

G7

G8

G9

G10

G11

G12

G13

G14

G15

G16

G17

G18

G19

G20

G21

G22

G23

G24

G25

G26

G27

G28

G29

G30

G31

G32

G33

G34

G35

G36

G37

G38

G39

G40

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

1

H1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

H2

H3

H4

H5

H6

H7

H8

H9

H10

H11

H12

H13

H14

H15

H16

H17

H18

H19

H20

H21

H22

H23

H24

H25

H26

H27

H28

H29

H30

H31

H32

H33

H34

H35

H36

H37

H38

H39

H40

J30

ASP-134604-01

C1

1

C2

C3

C4

C5

C6

C7

C8

C9

C10

C11

C12

C13

C14

C15

C16

C17

C18

C19

C20

C21

C22

C23

C24

C25

C26

C27

C28

C29

C30

C31

C32

C33

C34

C35

C36

C37

C38

C39

C40

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

R108

R101

R100

R98

R97

R96

R95

R73

R87

R92

R89

R81

R80

R71

R70

R68

R65

R64

R62

C60

1UF

J30

ASP-134604-01

1

D1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

37

38

39

40

D2

D3

D4

D5

D6

D7

D8

D9

D10

D11

D12

D13

D14

D15

D16

D17

D18

D19

D20

D21

D22

D23

D24

D25

D26

D27

D28

D29

D30

D31

D32

D33

D34

D35

D36

D37

D38

D39

D40

3

28

28

28

28

28

28

28

28

28

28

28

28

28

28

28

28

28

28

28

3

VADJ

SYNC\_CLK\_IN

SYNC\_CLK\_OUT

OUT

SCLK\_ADC\_FPGA

OUT

IN

IN

IN

OUT

OUT

OUT

OUT

DIN\_ADC\_FPGA

DOUT\_ADC\_FPGA

SCLK\_ADC\_OUT\_FPGA

RDYB\_ADC\_A\_FPGA

RDYB\_ADC\_B\_FPGA

SYNC\_ADC\_B\_FPGA

CS\_ADC\_B\_FPGA

CS\_ADC\_A\_FPGA

OUT

SYNC\_ADC\_A\_FPGA

SO\_EEPROM\_FPGA

SI\_EEPROM\_FPGA

SCK\_EEPROM\_FPGA

CS\_EEPROM\_FPGA

SYNC CLK IN

J28

73391-0060

1

R122

49.9

2

4

3

5

SYNC CLK OUT

SYNC\_CLK\_OUT

SYNC\_CLK\_OUT

3V3\_FPGA

R114

49.9

1

2

7

5

1

2

7

5

PROJECT TITLE:

DRAWING TITLE:

FMC AND ISOLATION

SIZE:

C C

C C

ENGINEER:

\_

2

HARDWARE NUMBER:

.

DRAWN BY:

\_

TEMPLATE REV.:

1.4

2

ISOLATED

5

4

3

1OE

1A

2OE

2A

1OE

1A

2OE

2A

CS

CLK

DI

SO\_EEPROM\_FPGA

SI\_EEPROM\_FPGA

SCK\_EEPROM\_FPGA

CS\_EEPROM\_FPGA

FPGA INI

VDDIO

C69

1UF

C67

DO

0.1UF

1

SO\_EEPROM\_FPGA

U12

93LC66BT-I/OT

1000PF

6

VCC

VSS

2

VDDIO

C121

GND

C120

8

0.1UF

U20

VCC

GND

4

74LVC2G125DP

6

SYNC CLK IN

R119

1Y

2Y

3

VDDIO

C111

1000PF

C110

8

0.1UF

GND

U18

VCC

GND

4

MAX11284 EVKIT

74LVC2G125DP

1Y

6

2Y

3

SYNC\_CLK\_IN

SYNC\_CLK\_IN

49.9

SYNC CLK IN SPLIT

J29

R123

49.9

2

4

3

5

SYNC CLK OUT

J20

R112

49.9

R113

49.9

73391-0060

1

5

2

4

3

J24

73391-0060

1

2

3

4

DATE:

REV.:

B

SHEET 5 OF 6

5

1

73391-0060

1

IN

IN

IN

IN

IN

IN

IN

1

D3.6V

DVDD\_ADC

+3.3V

5V\_FPGA

VDDIO

GND

AGND

1

3

2

4

6

5

PBC06SAAN

J16

SEPT 2015

F

E

D

C

B

A

F

E

D

C

B

A

8

TERMINAL BLOCK

J10

OSTTA020161

G1

8

1

J13

KLDX-0202-B

+12V\_FPGA

2

1

3

2

1

3

2

D4

1

IN

MBR0520L

USB+5V

IN

+12V

DB1

MBR0520L

J18

2

PCC02SAAN

D3

MBR0520L

+5V

+5V

+12V

C78

1UF

CE14

1UF

CE16

1UF

7

CE26

10UF

7

C33

0.47UF

VDDIO

J11

1

USB POWER

U14

MAX15006AATT+

1

5

OUT

IN

2

C79

0.1UF

1

3

1

3

IN

OUT

GND EP

NC

4

3

7

U9

MAX8842ELT+

IN

OUT

SHDN

GND

FB

NC

2

5

U11

MAX8842ELT+

IN

OUT

SHDN

GND

2

FB

NC

5

6

6

4

6

4

2

R36

1K

1

CE21

10UF

R55

453K

R59

237K

R54

453K

R58

237K

R124

1K

4

3

5

EN

CLK

ITH

J17

2

PCC02SAAN

G2

TP

R50

6.04K

R49

6.04K

1

VDD1

GND1

7

6

2

VDD2

GND2

9

6

EP

11

R37

1K

U5

MAX13256ATB+

FAULT

6

ST1

ST2

OUT

OUT

D3.6V

CE10

1UF

A3.6V

CE12

1UF

10

8

VDDIO

+3V3\_USB

OUT

D3.6V

OUT

A3.6V

ISOLATED

DS2

TGM-H240V8LF

T1

1

1

3

2

4

3

2

4

5

8

6

7

5

5

8

6

7

5

+15V

-10V

C88

0.1UF

+5V

+5V

BAS4002A-RPP

U3

3

~

D2

~

2

U6

BAS4002A-RPP

3

~

D2

~

+

D4

-

+

D4

-

1

4

D3

D1

2

1

U8

MAX15006BATT+

IN

OUT

IN

OUT

NC

GND EP

4

7

3

U15

MAX664ESA

VIN- VOUT1

SHDN1

SHDN2

SENSE

GND

8

U13

MAX8842ELT+

IN

OUT

SHDN

GND

FB

NC

2

5

U10

MAX8842ELT+

IN

OUT

SHDN

GND

2

FB

NC

5

VOUT2

VSET

CE17

1UF

CE20

1UF

CE15

1UF

C56

0.1UF

4

5

3

2

1

3

1

3

1

2

D3

D1

4

7

1

6

6

4

6

4

5

6

4

4

CE1

1UF

CE4

L4

600

+5V

1UF

CE13

10UF

R85

39K

R82

100K

R74

105K

R72

237K

R53

150K

R57

237K

+5V

CE24

1UF

R77

0

R48

0

1

5

3

1

3

5

-1.8V

C84

0.1UF

+1.8V

CE22

1UF

+2.0V

CE11

1UF

+15VEXT

J12

PBC03SABN

L2

1

600

L1

600

-15VEXT

L5

600

3

J14

2

4

6

2

4

2

6

R151

3

CE2

1UF

CE5

1UF

+15V

0

R83

100

OUT

OUT

+1.8V

+2.0V

+15V

C28

0.1UF

C38

0.1UF

CE19

1UF

OUT

-1.8V

3

C29

180PF

C39

180PF

C66

0.1UF

1

2

1

2

1

2

U4

MAX15006CATT+

IN

OUT

IN

FB

GND EP

NC

4

7

3

-10VEXT

U7

MAX15006CATT+

IN

OUT

IN

FB

GND EP

NC

4

3

7

U23

MAX15006CATT+

IN

OUT

IN

FB

GND EP

NC

4

7

3

6

5

2

+10VEXT

J9

PBC03SABN

1

6

5

R31

C32

R30

1

3

5

R40

C34

R35

+3.3V

R63

2

3

715K

0.1UF

100K

2

2

4

4

6

6

715K

0.1UF

100K

169K

R61

100K

PROJECT TITLE:

DRAWING TITLE:

POWER MODULE

SIZE:

C C

C C

ENGINEER:

\_

2

HARDWARE NUMBER:

.

DRAWN BY:

\_

TEMPLATE REV.:

1.4

6

5

1

5

3

J15

+10V

CE3

10UF

CE6

10UF

-10V

-10V

OUT

CE18

10UF

G3

TP

MAX11284 EVKIT

R125

1K

DS1

+3.3V

1

+10V

OUT

OUT

GND

AGND

OUT

5V\_FPGA

DATE:

SEPT 2015

1

REV.:

B

SHEET 6 OF 6

F

E

D

C

B

A