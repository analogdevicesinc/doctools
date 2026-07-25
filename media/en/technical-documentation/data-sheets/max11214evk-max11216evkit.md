<!-- lastmod 2022-08-05 -->
## MAX1121X Family Evaluation Kit

## General Description

The evaluation kit (EV kit) demonstrates the MAX1121X family of 24-bit, 64ksps delta-sigma ADCs with integrated PGA. The EV kit includes a graphical user interface (GUI) that provides communication from the target device to the PC. The EV kit can operate in multiple modes:

- 1) Standalone  Mode: In  'Standalone'  mode,  the  EV kit is connected to the PC through a USB cable and performs a subset of the complete EV kit functions with limitation for sample rate and size.
- 2) FPGA  Mode: In  'FPGA'  mode,  the  EV  kit  is  connected  to  an Avnet  ZedBoard™  through  a  low-pincount  FMC  connector.  ZedBoard  features  a  Xilinx ® Zynq ® -7000 SoC that connects to the PC through an Ethernet port, which allows the GUI to perform different operations with full control over mezzanine card functions.  The  EV  kit  with  FPGA  platform  performs the complete suite of evaluation tests for the target IC
- 3) User-Supplied  SPI  Mode: In  addition  to  the  USB and FMC interfaces, the EV kit provides two 12-pin PMOD-style headers for user-supplied SPI interface, to connect the signals for RDYB, SCLK, DIN, DOUT, and CSB.

The  EV  kit  includes  Windows  XP ® -,  Windows ®   7  and Windows 8.1-compatible software to exercise the features of the IC. The EV kit GUI allows different sample sizes, adjustable sampling rates, on-board or external reference options, and graphing software that includes the FFT and histogram of the sampled signals with the ability to save plots in .jpg or .csv formats.

The ZedBoard board accepts a +12V AC-DC wall adapter. The EV kit can be powered by the ZedBoard or by a local 12V  supply.  The  EV  kit  has  on-board  transformers  and digital  isolators  to  separate  the  IC  from  the  ZedBoard/ on-board processor.

The MAX11214 EV kit comes installed with a MAX11214EUG+  in  a  24-pin  TSSOP  package  and  the MAX11216 EV kit comes installed with a MAX11216EUG+ in a 24-pin TSSOP package.

Evaluates: MAX11214/MAX11216

## Features and Benefits

- High-Speed USB, FMC Connector, and PMOD Connector
- 5MHz SPI Interface
- Various Sample Sizes and Sample Rates
- Collects Up to 1 Million Samples (with FPGA Platform)
- Time Domain, Frequency Domain, and Histogram Plotting
- Save Plots as jpg, bmp or csv
- Sync In and Sync Out for Coherent Sampling (with FPGA Platform)
- On-Board DAC (MAX542) for DC Signal-Level Generation
- On-Board Voltage Reference (MAX6126)
- Proven PCB Layout
- Fully Assembled and Tested
- Windows XP-, Windows 7-, and Windows 8.1-Compatible Software
- Savable ADC Configurations

Ordering Information appears at end of data sheet.

ZedBoard is a trademark of Avnet, Inc.

Xilinx and Zynq are registered trademarks and Xilinx is a registered service mark of Xilinx, Inc.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

## MAX1121X EV Kit Photo

<!-- image -->

## System Block Diagram

<!-- image -->

│

## MAX1121X Family Evaluation Kit

## MAX1121X EV Kit Files

| FILE                          | DECRIPTION                               |
|-------------------------------|------------------------------------------|
| MAX11214_16EVKitSetupV1.1.exe | Application Program (GUI)                |
| Boot.bin                      | ZedBoard Firmware (SD Card to boot Zynq) |

## Quick Start

## Required Equipment

- MAX1121X EV kit
- +12V (500mA) power supply
- Micro-USB cable
- ZedBoard development board (optional Not Included with EV kit)
- Function generator (optional)
- Windows XP, Windows 7, or Windows 8.1 PC with a spare USB port

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX11214\_16EVK.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install    the  EV  kit  software  and  USB  driver  on  your  computer by running the MAX11214\_16EVKitSetupV1.1.exe program  inside  the  temporary  folder.  The  program files are copied to your PC and icons are created in the Windows Start | Programs menu. At the end of the  installation  process,  the  installer  will  launch  the installer for the FTDIChip CDM drivers.

## For Standalone mode:

- 3) Verify that all jumpers are in their default positions for the EV kit (Table 2).
- 4) Connect  the  PC  to  the  EV  kit  using  a  micro-USB cable.
- 5) Connect the +12V adapter to the EV kit.
- 6) Start  the  EV  kit  software  by  opening  its  icon  in  the Start | Programs menu. The EV kit software appears as shown in Figure 1. Verify that the lower left status bar indicates the EV kit hardware is Connected .
- 7) From the Device menu, select Standalone and click Search  for  USB  Device .  Then  select Standalone again and select a device in the list.  Verify  that  the lower left status bar indicates the EV kit hardware is Connected .

## Evaluates: MAX11214/MAX11216

## For FPGA mode (when connected to a ZedBoard):

- 8) Connect  the  Ethernet  cable  from  the  PC  to  the ZedBoard and configure the Internet Protocol Version 4  (TCP/Ipv4)  properties  in  the  local  area  connection  to  IP  address  192.168.1.2  and  subnet  Mask  to 255.255.255.0.
- 9) Verify  that  the  ZedBoard  SD  card  contains  the boot.bin file for the MAX1121X EV kit.
- 10) Connect the EV kit FMC connector to the ZedBoard FMC connector. Gently press them together.
- 11) Verify that all jumpers are in their default positions for the ZedBoard (Table 1) and EV kit (Table 2).
- 12) Connect  the  12V  wall  adapter  power  supply  to  the ZedBoard. Leave the ZedBoard powered off. Connect the PC to the ZedBoard with an Ethernet cable.
- 13) Enable the power supply by sliding SW8 to ON.
- 14) Start  the  EV  kit  software  by  opening  its  icon  in  the Start | Programs menu. The EV kit software appears as shown in Figure 1. From the Device menu, select FPGA .  Verify  that  the  lower  left  status  bar  indicates the EV kit hardware is Connected .

## For either Standalone or FPGA mode:

- 15) Connect the positive terminal of the function generator to the IN+ test point on the EV kit. Connect the negative  terminal of the function generator to the IN- test point on the EV kit. Disable the function generator.
- 16) Enable  the  function  generator.  Configure  the  signal source  to  generate  a  1kHz,  1V P-P   sinusoidal  wave with +500mV offset.
- 17) In the Calibration group, select Self Offset/Gain in the drop-down list and then click Calibrate .
- 18) Click on the Scope tab.
- 19) Check the Remove DC checkbox to remove the DC component of the sampled data.
- 20) Click the Capture button to read sampled data from the ADC.
- 21) The EV kit software appears as shown in Figure 4.
- 22) Verify the frequency is approximately 1kHz displayed on  the  right.  The  scope  graph  has  buttons  in  the upper-right corner that allow zooming in to detail.

│

## MAX1121X Family Evaluation Kit

Table 1. ZedBoard Jumper Settings (Optional)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                        |
|----------|------------------|----------------------------------------------------|
| J18      | 1-2              | VDDIO set for 3.3V                                 |
| JP11     | 2-3              | Boot from SD card                                  |
| JP10     | 1-2              | Boot from SD card                                  |
| JP9      | 1-2              | Boot from SD card                                  |
| JP8      | 2-3              | Boot from SD card                                  |
| JP7      | 2-3              | Boot from SD card                                  |
| JP10     | -                | Boot from SD card                                  |
| J12      | -                | SD card installed                                  |
| J20      | -                | Connected to 12V wall adapter                      |
| SW8      | Off              | ZedBoard power switch, off while connecting boards |

## Table 2. MAX1121X EV Kit User Configuration Jumper Settings*

| JUMPER      | SHUNT POSITION   | DESCRIPTION                                                                               |
|-------------|------------------|-------------------------------------------------------------------------------------------|
| J2 (Red)    | 1-2              | Connects the +10V rail to test point +10VEXT for external power (op amp + supply)         |
| J2 (Red)    | 2-3*             | Connects the +10V rail to LDO U2 (op amp + supply)                                        |
| J3 (Red)    | 1-2              | Connects the +15V rail to test point +15EXT for external power (powers U2)                |
| J3 (Red)    | 2-3*             | Connects the +15V rail to isolation transformer (powers U2)                               |
| J4 (Red)    | 1-2              | SetADC DVDD to +3.3V                                                                      |
| J4 (Red)    | 2-3*             | SetADC DVDD to +2.0V                                                                      |
| J5 (Red)    | 1-2*             | ConnectADCAVSS to GND (unipolar mode - also set J8 for unipolar)                          |
| J5 (Red)    | 2-3              | ConnectADCAVSS to -1.8V (bipolar mode - also set J8 for bipolar)                          |
| J6 (Black)  | 1-2              | Apply an offset of ADC_REFP (2.5V default) to amplifier U24                               |
| J6 (Black)  | 2-3              | Apply an offset of 2.5V to amplifier U24                                                  |
| J6 (Black)  | Open*            | No offset for amplifier U24                                                               |
| J7 (Black)  | 1-2              | Apply an offset of ADC_REFP (2.5V default) to amplifier U27                               |
| J7 (Black)  | 2-3              | Apply an offset of 2.5V to amplifier U27                                                  |
| J7 (Black)  | Open*            | No offset for amplifier U27                                                               |
| J8 (Red)    | 1-2              | ConnectADCAVDD to +1.8V (bipolar mode)                                                    |
| J8 (Red)    | 2-3*             | ConnectADCAVDD to 3.6V (unipolar mode)                                                    |
| J15 (Red)   | 1-2*             | Connects ZedBoard +12V to main power supply (U3). Diode D2 protects supplies.             |
| J15 (Red)   | Open             | Disconnects ZedBoard +12V from main power supply                                          |
| J17 (Red)   | 1-2              | Connects U5 input to GND                                                                  |
| J17 (Red)   | 3-4              | Connects U5 input to test point -15VEXT for external power                                |
| J17 (Red)   | 5-6*             | Connects U5 input to isolation transformer                                                |
| J18 (Red)   | 1-2              | Do not connect                                                                            |
| J18 (Red)   | 3-4              | Do not connect                                                                            |
| J18 (Red)   | 5-6              | Connects U5 output to GND, which sets the reference for the -10V supply (op amp - supply) |
| J20 (Red)   | 1-2*             | Connects on-board FTDI chip to 3.3V, necessary for standalone mode                        |
| J20 (Red)   | Open             | Disconnects on-board FTDI chip power. This jumper does not interfere with the ZedBoard.   |
| J21 (Black) | 1-2*             | DriveADC REFP pin with on-board voltage reference                                         |
| J21 (Black) | 2-3              | DriveADC REFP pin with external voltage reference                                         |

│

Evaluates: MAX11214/MAX11216

## MAX1121X Family Evaluation Kit

Evaluates: MAX11214/MAX11216

Table 2. MAX1121X EV Kit User Configuration Jumper Settings* (continued)

| JUMPER           | SHUNT POSITION   | DESCRIPTION                                                                                                                                                 |
|------------------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J22 (Black)      | 1-2              | Ground test point CH_D-                                                                                                                                     |
| J22 (Black)      | 3-4              | Ground test point CH_D+                                                                                                                                     |
| J23 (Black)      | 1-2*             | DriveADC REFN pin with on-board voltage reference                                                                                                           |
| J23 (Black)      | 2-3              | DriveADC REFN pin with external voltage reference                                                                                                           |
| J24 (Black)      | 1-2              | Ground test point CH_C-                                                                                                                                     |
| J24 (Black)      | 3-4              | Ground test point CH_C+                                                                                                                                     |
| J25 (Black)      | 1-2*             | Connect output of U23 (CH_C) to U24 inverting input                                                                                                         |
| J25 (Black)      | 3-4              | Connect CH_D- to U24 inverting input                                                                                                                        |
| J25 (Black)      | 5-6              | Connect output of U23 (CH_C) to U24 noninverting input                                                                                                      |
| J25 (Black)      | 7-8              | Connect CH_D+ to U24 noninverting input                                                                                                                     |
| J26, J27 (Black) | 1-2*             | Set both jumpers to align with silkscreen text 'EXT' to drive ADC_INP and ADC_INN with test points IN+ and IN- (also external connector J10 is on same net) |
| J26, J27 (Black) | 3-4              | Set both jumpers to align with silkscreen text 'AMP' to drive ADC_INP and ADC_INN with U27 and U24 amplifiers                                               |
| J26, J27 (Black) | 5-6              | Set both jumpers to align with silkscreen text 'DAC' to drive ADC_INP and ADC_INN with DAC_ OUT+ and DAC_OUT-                                               |
| J26, J27 (Black) | 7-8              | Set both jumpers to align with silkscreen text 'REF' to drive ADC_INP and ADC_INN with ADC_ REFP and ADC_REFN voltage reference                             |
| J26, J27 (Black) | 9-10             | ADC_INP to ADC_REF/2, ADC_INN to GND                                                                                                                        |
| J28 (Black)      | 1-2              | Ground test point CH_A-                                                                                                                                     |
| J28 (Black)      | 3-4              | Ground test point CH_A+                                                                                                                                     |
| J29 (Black)      | 1-2*             | Connect output of U26 (CH_A) to U27 inverting input                                                                                                         |
| J29 (Black)      | 3-4              | Connect CH_B- to U27 inverting input                                                                                                                        |
| J29 (Black)      | 5-6              | Connect output of U26 (CH_A) to U27 noninverting input                                                                                                      |
| J29 (Black)      | 7-8              | Connect CH_B+ to U27 noninverting input                                                                                                                     |
| J30 (Black)      | 1-2              | Ground test point CH_B-                                                                                                                                     |
| J30 (Black)      | 3-4              | Ground test point CH_B+                                                                                                                                     |
| J36 (Black)      | 1-2              | DriveADC CLK pin with signal from SMAconnector J34                                                                                                          |
| J36 (Black)      | 2-3*             | DriveADC CLK pin with signal from on-board oscillator U20                                                                                                   |
| J37 (Red)        | 1-2*             | ConnectADC to the DVDD voltage selection jumper J4                                                                                                          |
| J37 (Red)        | open             | Attach amp meter between pins 1-2 to measure current consumed byADC DVDD                                                                                    |
| J40 (Black)      | 1-2*             | ConnectADC RST to DVDD (normal operation)                                                                                                                   |
| J40 (Black)      | 2-3              | ConnectADC RST to GND (reset state)                                                                                                                         |
| J44 (Black)      | 1-2*             | Sets U18 noninverting input to 0V. Gain = -1 with offset = 0. Drives DAC_OUT-.                                                                              |
| J44 (Black)      | 2-3              | Sets U18 noninverting input to 2.5V. Gain = -1 with offset = 2.5V. Drives DAC_OUT-.                                                                         |
| J45 (Black)      | 1-2*             | Sets U17 noninverting input to 0V. Gain = -1 with offset = 0. Drives DAC_OUT+.                                                                              |
| J45 (Black)      | 2-3              | Sets U17 noninverting input to 2.5V. Gain = -1 with offset = 2.5V. Drives DAC_OUT+.                                                                         |
| J46 (Red)        | 1-2*             | Enables main power supply (U3)                                                                                                                              |
| J46 (Red)        | Open             | Disables main power supply (U3)                                                                                                                             |
| J46 (Red)        |                  |                                                                                                                                                             |

White test points are used for all signal points, black jumpers for signal settings.

│

## MAX1121X Family Evaluation Kit

Table 3. MAX1121X EV Kit User Off-Board Connectors

| CONNECTOR REFERENCE DESIGNATOR   | DESCRIPTION                                                                                                                                                                |
|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| J1                               | USB connector for standalone mode                                                                                                                                          |
| J9                               | External reference input for EXT_REFP and EXT_REFN                                                                                                                         |
| J10                              | External input forADC IN+ and IN-                                                                                                                                          |
| J12, J16                         | External power connections, 12V. Both wall adapter and screw terminals are provided. When ZedBoard is used, these connectors are not necessary if jumper J15 is installed. |
| J13                              | External connections for AVDD and AVSS                                                                                                                                     |
| J14                              | External enable, driven by GPIO1 via FET                                                                                                                                   |
| J19                              | Serial EEPROM signal                                                                                                                                                       |
| J31                              | Sync clock input, SMA                                                                                                                                                      |
| J32                              | PMODA, connects to ADC, 12-pin connector                                                                                                                                   |
| J33                              | PMOD B, connects to DAC, 12-pin connector                                                                                                                                  |
| J34                              | External clock input, SMA                                                                                                                                                  |
| J35                              | DAC SPI port signal                                                                                                                                                        |
| J38, J41                         | Sync clock out, SMA                                                                                                                                                        |
| J39                              | ADC SPI port signal                                                                                                                                                        |
| J42                              | Split sync clock in, SMA                                                                                                                                                   |
| J43                              | FMC connector for use with ZedBoard                                                                                                                                        |

## General Description of Software

The  main  window  of  the  EV  kit  software  contains  several tabs: ADC Config, DAC Config, Function Generator, Scope, DMM, Histogram, FFT, and ADC Registers. The ADC Config tab and ADC Registers tab provide control to communicate with the MAX1121X registers. The DAC Config tab and Function Generator tab provide control to communicate with the MAX542. The other four tabs are used for evaluating the sample data read from the ADC.

## ADC Config Tab

The ADC Config tab  provides an interface for configuring the IC from a functional perspective. The main block provides  for  calibration,  GPIO  control,  input  path  selection,  data  format,  filtering,  power,  and  clocking.  To  read all the configuration settings, click the Read All button in the Serial  Interface block.  When  a  setting  is  changed, the  register  associated  with  that  setting  is  automatically written. The Status Log at the bottom of the GUI shows the value and register that was changed.

The primary mode for calibration is using the drop-down list  to  select a calibration mode, followed by clicking the Calibrate button.  The  checkboxes  for Self  Offset , Self Gain , System  Offset ,  and System  Gain allow  for  the user to enable or disable the calibration values. The calibration values can also be changed manually by entering a hex value in the SPI numeric box.

The Power block  allows  the  user  to  put  the  part  in  a power-down or standby state by selecting one of these options  in  the  drop-down  list.  The  configuration  settings can be reset back to default by clicking the Reset

│

## MAX1121X Family Evaluation Kit

Registers button. For the Clock source selection, the IC internal clock is always a valid option. If the external clock is selected, a clock must be applied at the IC CLK pin by setting jumper J36 to either SMA or OSC. Once the above configurations are completed, start conversion by clicking Convert in  the Serial Interface block. To read the data and status, click Read Data and Status on the lower right of the GUI.

## Evaluates: MAX11214/MAX11216

To save a configuration, select Save ADC Config As… in the File menu. This saves all the ADC register values to an XML file. To load a configuration, select Load ADC Config in the File menu. When the XML file is loaded, all the register values in the file are written to the ADC.

Figure 1. MAX1121X EV Kit Software (ADC Config Tab)

<!-- image -->

## MAX1121X Family Evaluation Kit

## DAC Config Tab

In  standalone  mode,  the  ADC  and  DAC  cannot  operate  concurrently.  It  is  recommended  to  use  FPGA mode  when  using  the  DAC  for  function  generation. The DAC  Config tab  sheet  provides  an  interface  for configuring  the  MAX542  to  drive  the  DAC\_OUT+  and DAC\_OUT- pins. Set J45 Offset and J44 Offset to match the jumper positions on the EV Kit. These jumper positions  apply  DC  offset  to  DAC\_OUT+  and  DAC\_OUT-, see the DAC amplifier section for more details. To write a value to the DAC, select the output of interest in the dropdown list, enter a value in the numeric box and then click DAC Single Shot .  The  outputs  on  the  right  display  the voltage outputs and the decimal code written to the DAC.

## Evaluates: MAX11214/MAX11216

The  voltage  outputs  are  calculated  based  on  the  DAC code and jumper offsets.

The Calibration section of the DAC Config tab  can  be used to calibrate the calculated voltages to be closer to the measured voltages. Select which output to calibrate with the radio buttons. Enter the maximum and minimum voltage for this output in the Ideal (V) numeric boxes. Find the  measured  voltages  of  the  output  for  the  maximum and minimum values using the DAC Single Shot to  set the DAC output to the ideal voltages. Enter the measured voltages  in  the  Measured  (V)  numeric  boxes  and  click Calculate to  find  the  new  offset  and  gain.  Check  the Enable Calibration to use these values to calculate the voltage outputs.

Figure 2. MAX1121X EV Kit Software (DAC Config Tab)

<!-- image -->

│

## MAX1121X Family Evaluation Kit

## Function Generator

When using  the  FPGA  mode,  the Function  Generator tab  allows  the  user  to  generate  a  signal  with  the  DAC. Select the Number of Samples, DAC Update Rate, and Signal  Frequency . Click Calculate to  get  the  Adjust Frequency for the DAC signal needed for coherent sampling. Then select the Signal Type, Amplitude, Phase, and Offset to set up the waveform desired for the DAC. Click

## Evaluates: MAX11214/MAX11216

Generate to  find  the  DAC  codes  for  the  waveform  and generate the waveform on the DAC. The waveform codes sent to the DAC is displayed on the graph. The Average, RMS, Maximum, Minimum, and Peak to Peak are also calculated and displayed on the right. To save the DAC code waveform, go to Options &gt; Save Graph &gt; Function Generator .  This  saves  the  settings  on  the  left  and  the data in the graph to a csv file.

Figure 3. MAX1121X EV Kit Software (Function Generator Tab)

<!-- image -->

│

## MAX1121X Family Evaluation Kit

## Scope Tab

The Scope tab  sheet  is  used  to  capture  data  and  display  it  in  the  time  domain. Sample  Rate and Number of Samples can also be set in this tab if they were not appropriately  adjusted  in  other  tabs.  The Display  Unit drop-down  list  allows  counts  and  voltages.  Once  the desired configuration is set, click on the Capture button. The right side of the tab sheet displays details of the wave-

## Evaluates: MAX11214/MAX11216

form,  such  as  Average,  Standard  Deviation,  Maximum, Minimum, and Fundamental Frequency. Figure 4 displays the ADC data when a sinusoidal signal is applied at the inputs on the EV kit.

To save the captured data to a file, go to Options &gt; Save Graph &gt; Scope . This saves the setting on the left and the data captured to a csv file.

Figure 4. MAX1121X EV Kit Software (Scope Tab)

<!-- image -->

│

## MAX1121X Family Evaluation Kit

## DMM Tab

The DMM tab  sheet provides captured data as a digital multimeter. Once the desired configuration is set, click on the Capture button. Figure 5 displays the results shown

## Evaluates: MAX11214/MAX11216

by the DMM tab when ADC\_INP and ADC\_INN (J26 and J27 set as 7-8) are set to REF, see Table 2 for jumper positions.

Figure 5. MAX1121X EV Kit Software (DMM Tab)

<!-- image -->

│

## MAX1121X Family Evaluation Kit

## Histogram Tab

The Histogram tab sheet is used to display a histogram of the captured data. Sampling rate and number of samples can also be set in this tab if they were not appropriately adjusted in other tabs. Once the desired configuration is set, click on the Capture button. The right side of the tab sheet displays details of the histogram such as Average, Standard  Deviation,  Maximum,  Minimum,  Peak-to-Peak

## Evaluates: MAX11214/MAX11216

Noise,  Effective  Resolution,  and  Noise-Free  Resolution. To use this histogram feature, apply a DC voltage at the input. Figure 5 displays the results shown by the DMM tab when ADC\_INP and ADC\_INN are set to REF, see Table 2 for jumper positions.

To save the histogram data to a file, go to Options &gt; Save Graph &gt; Histogram .  This  saves  the  setting  on  the  left and the histogram data captured to a csv file.

Figure 6. MAX1121X EV Kit Software (Histogram Tab)

<!-- image -->

│

## MAX1121X Family Evaluation Kit

## FFT Tab

The FFT tab sheet is used to display the frequency domain FFT  of  the  captured  data.  Sample  Rate  and  Number  of Samples can also be set in this tab if they were not appropriately adjusted in other tabs. Once the desired configuration is set, click on the Capture button. The right side of

## Evaluates: MAX11214/MAX11216

the tab displays the performance based on the FFT, such as  Fundamental  Frequency,  THD,  SNR,  SINAD,  SFDR, ENOB, and Noise Floor.

To  save  the  FFT  data  to  a  file,  go  to Options  &gt;  Save Graph &gt; FFT . This saves the setting on the left and the FFT data captured to a csv file.

Figure 7. MAX1121X EV Kit Software (FFT Tab)

<!-- image -->

│

## MAX1121X Family Evaluation Kit

## ADC Registers Tab

The ADC Registers tab sheet shows the ADC registers on  the  left.  The  middle  section  shows  the  bits  and  bit descriptions  of  the  selected  register.  Click Read All to read all registers and refresh the window with the register settings. To write a register first, select the hex value in the Value (Hex) column, type the desired hex value and press Enter .

## Evaluates: MAX11214/MAX11216

The Command Byte is on the right side of the tab sheet. This byte precedes all SPI transactions and is described in the ADC data sheet. To send a command byte, enter a hex value in the Numeric box and click the Send button. The  command  byte  has  two  different  formats  including Conversion Mode and Register Access Mode. Select the radio button for the desired mode to see the bit description in the table.

Figure 8. MAX1121X EV Kit Software (ADC Registers Tab)

<!-- image -->

│

## MAX1121X Family Evaluation Kit

## Detailed Description of Hardware

This EV kit provides a proven layout to demonstrate the performance of the MAX1121X 24-bit delta-sigma ADC. Included  in  the  EV  kit  are  digital  isolators  (MAX14934), ultra-low-noise  LDOs  (MAX8842)  to  all  supply  pins  of the  IC,  an  on-board  reference  (MAX6126),  a  precision amplifier  (MAX44241) for the analog inputs, 16-bit DAC (MAX542) with precision amplifiers (MAX9632), and syncin and sync-out signals for coherent sampling.

An on-board controller is provided to allow for evaluation in  standalone mode, which has limitations on maximum sample  size  and  it  cannot  perform  coherent  sampling. The EV kit can be used with FPGA mode to achieve larger sample depth and coherent sampling.

The ADC has several input options which are selected by J26 and J27. The external option allows for wires attached to the screw terminals at J10. The amplifier option allows for signals at testpoints CH\_A to CH\_D. The DAC option allows for inputs to be driven from an on-board DAC. The REF options connect the inputs to the voltage reference of the ADC.

## User-Supplied SPI

To evaluate the ADC on this EV kit with a user-supplied SPI  bus,  disconnect  from  the  FMC  bus  and  remove jumper J20. Apply the user-supplied SPI signals to SCLK, CSB,  DIN,  and  DOUT  at  the  PMOD\_A  header  (J32). Make  sure  the  return  ground  is  connected  to  PMOD ground.  To  communicate  to  the  on-board  DAC  connect the  user-supplied  SPI  signals  to  CSB,  SCLK,  DIN,  and LDAC at the PMOD\_B header (J33). Make sure the return ground is connected to PMOD ground.

The on-board FTDI chip used for standalone mode does not conflict with the user-supplied SPI if it is powered off by removing jumper J20.

Caution: Do not plug this header into a standard PMOD interface  found  on  other  FPGA  or  microcontroller  products. The signal definition is unique to this EV kit.

## User-Supplied Reference

For user-supplied reference voltage, set jumpers at J21 and J23 to positions 2-3 and apply external reference to either J9 or to the EXT\_REFN and EXT\_REFP testpoints.

## User-Supplied AVSS

The AVSS supply is set to GND or -1.8V by Jumper J5. For user-supplied AVSS, remove the jumper from J5 and apply AVSS to the screw-terminals/testpoint at J13. Make sure that this external supply has the correct relation to system ground.

## Evaluates: MAX11214/MAX11216

## User-Supplied AVDD

The AVDD supply is set to 3.6V or 1.8V by jumper J8. For user-supplied AVDD, remove the jumper from J8 and apply AVDD to the screw-terminals/testpoint at J13. Make sure that this external supply has the correct relation to system ground.

## Bipolar Powered vs. Unipolar Powered

The ADC supports both unipolar and bipolar ranges. For unipolar mode, jumper J8 pins 2-3 to power AVDD with 3.6V and jumper J5 pins 1-2 to set AVSS to GND. For bipolar  mode,  jumper  J8  pins  1-2  to  power  AVDD  with 1.8V and jumper J5 pins 2-3 to set AVSS to -1.8V.

## External Clock

When  the ADC  is  configured  to  use  an  external  clock, Jumper J36 pins 2-3 to select the on-board oscillator as the clock source. Jumper J36 pins 1-2 to select the SMA connector (and user-provided clock) as the clock source.

## GPIO

Testpoints are provided for the three GPIO signals from the ADC, GPIO1, GPIO2, and GPIO3. The ADC Config tab can configure these as input/output and read/drive the GPIO pins. GPIO1 connects to a FET which allows J14.1 and TP2 to be connected to ground by driving GPIO1 high (note that DVDD should be to 3.3V to drive the FET).

## ADC Input Amplifiers

The  input  amplifiers  allow  for  significant  flexibility.  The amplifier input stage begins with testpoints labeled CH\_A to  CH\_D.  Each  set  of  testpoints  has  options  to  ground either  the  inverting  or  noninverting  inputs.  The  jumper block J29 and J25 allow for bypassing the first stage of amplifiers,  or  connecting  the  first  stage  to  the  second stage.  Jumper  J7  can  provide  an  offset  of  2.5V  to  the CH\_A/CH\_B  signals  -  leave  unpopulated  to  have  an offset of 0V. Similarly, jumper J6 can provide an offset of 2.5V to the CH\_C/CH\_D signals - leave unpopulated to have an offset of 0V.

## DAC and DAC Amplifiers

In  Figure  2,  the  GUI  shows  a  functional  diagram  of  the DAC and DAC amplifiers. Here jumper J45 can be connected  to  2.5V  to  add  a  2.5V  offset  to  the  DAC\_OUT+ signal, and J44 can be connected to 2.5V to add 2.5V to the DAC\_OUT- signal.

The value at DAC\_OUT+ and DAC\_OUT-are available to drive to the ADC by use of jumpers J26 and J27.

Also,  please  note  that  the  DAC\_OUT+  and  DAC\_OUT-values shown by the GUI are only valid if the settings at J44 and J45 are the same on both the PCB and the GUI.

│

## MAX1121X Family Evaluation Kit

## Evaluates: MAX11214/MAX11216

Figure 9. Analog Front-End

<!-- image -->

## Table 4. Analog Input Configurations (Ch A - D)

| CONFIGURATION   | CONFIGURATION   | SIGNAL-PATH INPUT                                      | INPUT CONNECTORS   | JUMPER POSITIONS                                                                                                                                                                                                          |
|-----------------|-----------------|--------------------------------------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| No.             | DESCRIPTION     | CONFIGURATION                                          |                    |                                                                                                                                                                                                                           |
| 1               | Channel A and C | Noninverting, differential, second-order LPF (default) | CH_A- and CH_C-    | J28: 3-4 J30: 3-4 J24: 3-4 J22: 3-4 J29: 1-2 and 7-8 J25: 1-2 and 7-8 J26: 3-4 J27: 3-4 J7: 1-2 (for bipolar signal) or Open for unipolar signal J8: 1-2 (for bipolar signal) or Open for unipolar signal                 |
| 2               | Channel A and C | Inverting, differential, second-order LPF              | CH_A+ and CH_C+    | J28: 1-2 J30: 3-4 J24: 1-2 J22: 3-4 J29: 1-2 and 7-8 J25: 1-2 and 7-8 J26: 3-4 J27: 3-4 J7: 1-2 (for bipolar signal) or Open for unipolar signal J8: 1-2 (for bipolar signal) or                                          |
| 3               | Channel B and D | Noninverting, differential, first-order LPF            | CH_B+ and CH_D+    | J28: 1-2 and 3-4 J30: 1-2 J24: 1-2 and 3-4 J22: 1-2 J29: 3-4 and 7-8 J25: 3-4 and 7-8 J26: 3-4 J27: 3-4 J7: 1-2 (for bipolar signal) or Open for unipolar signal J8: 1-2 (for bipolar signal) or Open for unipolar signal |
| 4               | Channel B and D | Inverting, differential, first- order LPF              | CH_B- and CH_D-    | J28: 1-2 and 3-4 J30: 3-4 J24: 1-2 and 3-4 J22: 3-4 J29: 3-4 and 7-8 J25: 3-4 and 7-8 J26: 3-4 J27: 3-4 J7: 1-2 (for bipolar signal) or Open for unipolar signal J8: 1-2 (for bipolar signal) or Open for unipolar signal |

Table 4. Analog Input Configurations (Ch A - D) (continued)

| CONFIGURATION   | CONFIGURATION         | SIGNAL-PATH INPUT                                                               | INPUT CONNECTORS       | JUMPER POSITIONS                                                                                                                          |
|-----------------|-----------------------|---------------------------------------------------------------------------------|------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| No.             | DESCRIPTION           | CONFIGURATION                                                                   |                        |                                                                                                                                           |
| 5               | External Inputs       | User-supplied signals                                                           | IN+ and IN-            | J28: 1-2 and 3-4 J30: 1-2 and 3-4 J24: 1-2 and 3-4 J22: 1-2 and 3-4 J29: 3-4 and 7-8 J25: 3-4 and 7-8 J26: 1-2 J27: 1-2 J7: Open J8: Open |
| 6               | DAC Output            | DAC output buffered with MAX9632                                                | DAC_OUT+ and DAC_ OUT- | J28: 1-2 and 3-4 J30: 1-2 and 3-4 J24: 1-2 and 3-4 J22: 1-2 and 3-4 J29: 3-4 and 7-8 J25: 3-4 and 7-8 J26: 5-6 J27: 5-6 J7: Open J8: Open |
| 7               | ADC Voltage Reference | Voltage reference input toADC from MAX6126 or external source (see J21 and J23) | ADC_REFP and ADC_ REFN | J28: 1-2 and 3-4 J30: 1-2 and 3-4 J24: 1-2 and 3-4 J22: 1-2 and 3-4 J29: 3-4 and 7-8 J25: 3-4 and 7-8 J26: 7-8 J27: 7-8 J7: Open J8: Open |

Figure 10a. MAX1121X EV Kit Schematic (Sheet 1 of 6)

<!-- image -->

Figure 10b. MAX1121X EV Kit Schematic (Sheet 2 of 6)

<!-- image -->

Figure 10c. MAX1121X EV Kit Schematic (Sheet 3 of 6)

<!-- image -->

Figure 10d. MAX1121X EV Kit Schematic (Sheet 4 of 6)

<!-- image -->

Figure 10e. MAX1121X EV Kit Schematic (Sheet 5 of 6)

<!-- image -->

Figure 10f. MAX1121X EV Kit Schematic (Sheet 6 of 6)

<!-- image -->

Figure 11. MAX1121X EV Kit Component Placement Guide-Top Side

<!-- image -->

Figure 12. MAX1121X EV Kit PCB Layout-Layer 1

<!-- image -->

## Evaluates: MAX11214/MAX11216

Figure 13. MAX1121X EV Kit PCB Layout-Layer 2

<!-- image -->

│

## Evaluates: MAX11214/MAX11216

Figure 14. MAX1121X EV Kit PCB Layout-Layer 3

<!-- image -->

## Evaluates: MAX11214/MAX11216

Figure 15. MAX1121X EV Kit PCB Layout-Layer 4

<!-- image -->

│

Figure 16. MAX1121X EV Kit PCB Layout-Layer 5

<!-- image -->

## Evaluates: MAX11214/MAX11216

Figure 17. MAX1121X EV Kit PCB Layout-Layer 6

<!-- image -->

│

## Evaluates: MAX11214/MAX11216

Figure 18. MAX1121X EV Kit Component Placement Guide-Bottom Side

<!-- image -->

│

## MAX1121X Family Evaluation Kit

## Component List

Refer to file 'evkit\_bom\_max1121X\_evkit\_a.csv' attached to this data sheet for component information.

## Evaluates: MAX11214/MAX11216

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11214EVKIT# | EVKIT  |
| MAX11216EVKIT# | EVKIT  |

#Denotes RoHS compliant.

│

## MAX1121X Family Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 4/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves tKe rigKt to FKange tKe FirFuitry and speFifiFations ZitKout notiFe at any time.

│

Evaluates: MAX11214/MAX11216