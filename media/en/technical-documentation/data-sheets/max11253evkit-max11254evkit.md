<!-- lastmod 2022-08-05 -->
## MAX11253/MAX11254 Family Evaluation Kit

## General Description

The  MAX11253/MAX11254  evaluation  kit  (EV  kit)  provides  a  proven  design  to  evaluate  the  MAX11253/ MAX11254  family  of  16-bit/24-bit,  6-channel,  64ksps, integrated  PGA  delta-sigma ADCs.  The  EV  kit  includes a graphical user interface (GUI) that provides communication from the target device to the PC. The EV kit can operate in multiple modes:

- 1) Standalone Mode: in 'standalone' mode, the EV kit is connected to the PC via a USB cable and performs a subset of the complete EV kit functions with limitations for sample rate, sample size, and no support for coherent sampling.
- 2) FPGA Mode: in 'FPGA' mode, the EV kit is connected to an Avnet ZedBoard™ through a lowpin-count FMC connector. ZedBoard features a Xilinx ®  Zynq ®  -7000 SoC, which connects to the PC through an Ethernet port, allowing the GUI to perform different operations with full control over mezzanine card functions. The EV kit with FPGA platform performs the complete suite of evaluation tests for the target IC.
- 3) User-Supplied SPI Mode: In addition to the USB and FMC interfaces, the EV kit provides a 12-pin Pmod ™ -style header for user-supplied SPI interface to connect the signals for SCLK, DIN, DOUT, and CNVST.

The  EV  kit  includes  Windows  XP ® ,  Windows ®   7,  and Windows 8.1-compatible software for exercising the features  of  the  IC.  The  EV  kit  GUI  allows  different  sample sizes, adjustable sampling rates, internal or external reference options, and graphing software that includes the FFT and histogram of the sampled signals.

The ZedBoard accepts a +12V AC-DC wall adapter. The EV kit can be powered by a local +12V supply. The EV kit has on-board transformers and digital isolators to separate the IC from the ZedBoard/on-board processor.

The MAX11253/MAX11254 EV kit comes installed with a MAX11253ATJ+ or MAX11254ATJ+ in a 32-pin TQFN-EP package.

Evaluates: MAX11253/MAX11254

## Features

- High-Speed USB Connector, FMC Connector, and Pmod-Style Connector
- 8MHz SPI Clock Capability through FMC Connector
- 8MHz SPI Clock Capability in Standalone Mode
- Various Sample Sizes and Sample Rates
- Collects Up to 1 Million Samples (with FPGA Platform)
- Time Domain, Frequency Domain, and Histogram Plotting
- Sync In and Sync Out for Coherent Sampling (with FPGA Platform)
- On-Board Input Buffers: MAX9632 and MAX44205 (Fully Differential)
- On-Board Voltage References (MAX6126 and MAX6070)
- Proven PCB Layout
- Fully Assembled and Tested
- Windows XP-, Windows 7-, and Windows 8.1-Compatible Software

Ordering Information appears at end of data sheet.

Pmod is a trademark of Digilent Inc.

ZedBoard is a trademark of Avnet, Inc.

Xilinx and Zynq are registered trademarks and Xilinx is a registered service mark of Xilinx, Inc.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

## MAX11253/MAX11254 Family Evaluation Kit

## MAX11253/11254 EV Kit Photo

<!-- image -->

│

## MAX11253/MAX11254 Family Evaluation Kit

## System Block Diagram

<!-- image -->

## MAX11253/MAX11254 EV Kit Files

| FILE                          | DECRIPTION                               |
|-------------------------------|------------------------------------------|
| MAX11253_54EVKitSetupV1.0.exe | Application Program (GUI)                |
| Boot.bin                      | ZedBoard firmware (SD card to boot Zynq) |

## Quick Start

## Required Equipment

- MAX11253/MAX11254 EV kit
- +12V (500mA) power supply
- Micro-USB cable
- ZedBoard FPGA platform (optional NOT INCLUDED with EVKit)
- Function generator (optional)
- Windows XP, Windows 7, or Windows 8.1 PC with a spare USB port

Note: In  the  following  section(s),  software-related  items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit http://www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software,  MAX11253\_54EVKITSetupV1.0.zip.  Save  the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install  the  EV  kit  software  and  USB  driver  on  your computer by running the MAX11253\_54EVKitSetupV1.0.exe program  inside  the  temporary  folder.  The  program files are copied to your PC and icons are created in the Windows Start | Programs menu. At the end of the installation process the installer will launch the installer for the FTDIChip CDM drivers.

│

Evaluates: MAX11253/MAX11254

## MAX11253/MAX11254 Family Evaluation Kit

## For Standalone mode:

- 1) Verify that all jumpers are in their default positions for the EV kit board (Table 2).
- 2) Connect the PC to the EV kit using a micro-USB cable.
- 3) Connect the +12V adapter to the EV kit.
- 4) Start  the  EV  kit  software  by  opening  its  icon  in  the Start | Programs menu. The EV kit software appears as shown in Figure 1. From the Device menu select Standalone . Verify that the lower left status bar indicates the EV Kit hardware is Connected .

## For FPGA mode (when connected to a Zedboard):

- 1) Connect the Ethernet cable from the PC to the ZedBoard  and  configure  the  Internet  Protocol  Version 4  (TCP/Ipv4)  properties  in  the  local  area  connection  to  IP  address  192.168.1.2  and  subnet  Mask  to 255.255.255.0.
- 2) Verify that the ZedBoard SD card contains the Boot. bin file for the MAX11253/MAX11254 EV kit.
- 3) Connect the EV kit FMC connector to the ZedBoard FMC connector. Gently press them together.
- 4) Verify that all jumpers are in their default positions for the ZedBoard (Table 1) and EV kit board (Table 2).
- 5) Connect  the  12V  power  supply  to  the  ZedBoard. Leave the Zedboard powered off.
- 6) Enable the ZedBoard power supply by sliding SW8 to ON and connect the +12V adapter to the EV kit.

## Table 1. ZedBoard Jumper Settings

| JUMPER        | SHUNT POSITION   | DESCIPTION                                         |
|---------------|------------------|----------------------------------------------------|
| J18           | 1-2              | VDDIO set for 3.3V.                                |
| JP11 JP10 JP9 | 2-3 1-2 1-2      | Boot from SD Card                                  |
| SW8           | OFF              | ZedBoard power switch, OFF while connecting boards |
| JP7 J12       |                  |                                                    |
| JP8           | 2-3 2-3 NA       | SD Card installed Connected to 12V wall adapter    |
| J20           | NA               |                                                    |

│

## Evaluates: MAX11253/MAX11254

- 7) Start  the  EV  kit  software  by  opening  its  icon  in  the Start | Programs menu. The EV kit software appears as shown in Figure 1. From the Device menu select FPGA .  Verify that the lower left status bar indicates the EV Kit hardware is Connected .

## For Either Standalone or FPGA Mode:

- 1) Connect the positive terminal of the function generator to the AIN0D+ (TP1) test point on the EV kit. Connect the negative terminal of the function generator to the AIN0D- (TP2) test point on the EV kit.
- 2) Configure  the  signal  source  to  generate  a  100Hz, 1VP-P sinusoidal wave with +1V offset.
- 3) Turn on the function generator.
- 4) In the Device menu, choose either standalone or the FPGA option. In the configuration group, select Chan -nel 0 and click Convert in the serial interface menu.
- 5) Click on the Scope tab.
- 6) Check the Remove DC Offset checkbox to remove the DC component of the sampled data.
- 7) Click the Capture button to start the data analysis.
- 8) The EV kit software appears as shown in Figure 1.
- 9) Verify  that  the  frequency,  which  is  displayed  on  the right, is approximately 100Hz. The scope image has buttons in the upper right corner that allow zooming in to detail.

## MAX11253/MAX11254 Family Evaluation Kit

Evaluates: MAX11253/MAX11254

Table 2. MAX11253/MAX11254 Board Jumper Settings

| HEADER   | JUMPER POSITION   | DESCRIPTION                                                           |
|----------|-------------------|-----------------------------------------------------------------------|
| JMP1     | 1-2*              | Use MAX6126 3.0V as VREF signal                                       |
| JMP1     | 1-3               | Use MAX6070 3.0V as VREF signal                                       |
| JMP1     | 1-4               | Use MAX6070 1.8V as VREF signal                                       |
| J8       | Open*             | Generate +3.3V for DVDD                                               |
| J8       | 1-2               | Generate +2.0V for DVDD                                               |
| J10      | 1-2*              | Select +3.3V or +2.0V as DVDD                                         |
| J10      | 2-3               | Select +1.8V as DVDD                                                  |
| J11      | Open*             | U1 uses internal clock                                                |
| J11      | 1-2               | External clock from FPGA                                              |
| J11      | 2-3               | External clock from U10                                               |
| J12      | 1-2*              | Select +3.3V asAVDD                                                   |
| J12      | 2-3               | Select +1.8V asAVDD                                                   |
| J13      | 1-2*              | Select AVSS as REFN                                                   |
| J13      | 2-3               | Select REFN_S from J1 as REFN for external sense point                |
| J14      | Open*             | Use internal 1.8V subregulator if DVDD ≥ 2.0V                         |
| J14      | 1-2               | Use DVDD for internal logic if DVDD ≤ 2.0V                            |
| J15      | Open*             | Use TP23 as GPIO1                                                     |
| J15      | 1-2               | Use external SYNC signal                                              |
| J16      | 1-2*              | Select REFP_F signal as REFP input                                    |
| J16      | 2-3               | Select REFP_S signal from J1 as REFP input                            |
| J17      | 1-2*              | UseAGND as AVSS. Use this setting ifAVDD is +3.3V                     |
| J17      | 2-3               | Use -1.8V as AVSS. Use this setting ifAVDD is +1.8V                   |
| J24 J31  | 1-2*              | Use VREF as REFP_F                                                    |
| J24 J31  | 2-3               | UseAVDD as REFP_F Short AIN2.1- (J27, TP38) to                        |
|          | 1-2*              | AGND and for U11 noninverting configuration                           |
|          | 3-4*              | Short AIN2.1+ (J28, TP39) to AGND and for U11 inverting configuration |

| HEADER   | JUMPER POSITION   | DESCRIPTION                                                              |
|----------|-------------------|--------------------------------------------------------------------------|
| J32      | 1-2*              | Short AIN2.3- (J29, TP42) to AGND and for U12 noninverting configuration |
| J32      | 3-4*              | Short AIN2.3+ (J30, TP43) to AGND and for U12 inverting configuration    |
| J33      | 1-2*              | Short AIN2.2- (TP40) toAGND and for U13 noninverting configuration       |
| J33      | 3-4*              | Short AIN2.2+ (TP41) to AGND and for U13 inverting configuration         |
| J34      | 1-2*              | Short AIN2.4- (TP44) toAGND and for U14 noninverting configuration       |
| J34      | 3-4*              | Short AIN2.4+ (TP45) to AGND and for U14 inverting configuration         |
| J35      | 1-2*              | Connect output of U11 to inverting input of U13                          |
| J35      | 3-4               | Connect AIN2.2- (TP40) to inverting input of U13                         |
| J35      | 5-6               | Connect output of U11 to noninverting input of U13                       |
| J35      | 7-8*              | Connect AIN2.2+ (TP41) to noninverting input of U13                      |
| J36      | 1-2*              | Connect output of U12 to inverting input of U14                          |
| J36      | 3-4               | Connect AIN2.4- (TP44) to inverting input of U14                         |
| J36      | 5-6               | Connect output of U12 to noninverting input of U14                       |
| J36      | 7-8*              | Connect AIN2.4+ (TP45) to noninverting input of U14                      |
| J37      | Open*             | No offset to U13 noninverting input                                      |
| J37      | 1-2               | Offset U13 output by VREF/2                                              |
| J38      | Open*             | No offset to U14 noninverting input                                      |
| J38      | 1-2               | Offset U14 output by VREF/2                                              |

│

## MAX11253/MAX11254 Family Evaluation Kit

Evaluates: MAX11253/MAX11254

Table 2. MAX11253/MAX11254 Board Jumper Settings (continued)

| HEADER   | JUMPER POSITION   | DESCRIPTION                                                        |
|----------|-------------------|--------------------------------------------------------------------|
| J39      | 1-2*              | Short AIN3.1- (TP56) toAGND and for U15 noninverting configuration |
| J39      | 3-4*              | Short AIN3.1+ (TP57) to AGND and for U15 inverting configuration   |
| J40      | 1-2*              | Short AIN3.3- (TP60) toAGND and for U16 noninverting configuration |
| J40      | 3-4*              | Short AIN3.3+ (TP61) to AGND and for U16 inverting configuration   |
| J41      | 1-2*              | Short AIN3.2- (TP58) toAGND and for U17 noninverting configuration |
| J41      | 3-4*              | Short AIN3.2+ (TP59) to AGND and for U17 inverting configuration   |
| J42      | 1-2*              | Short AIN3.4- (TP62) toAGND and for U18 noninverting configuration |
| J42      | 3-4*              | Short AIN3.4+ (TP63) to AGND and for U18 inverting configuration   |
| J43      | 1-2*              | Connect output of U15 to inverting input of U17                    |
| J43      | 3-4               | Connect AIN3.2- (TP58) to inverting input of U17                   |
| J43      | 5-6               | Connect output of U15 to noninverting input of U17                 |
| J43      | 7-8*              | Connect AIN3.2+ (TP59) to noninverting input of U17                |
| J44      | 1-2*              | Connect output of U16 to inverting input of U18                    |
| J44      | 3-4               | Connect AIN3.4- (TP62) to inverting input of U18                   |
| J44      | 5-6               | Connect output of U16 to noninverting input of U18                 |
| J44      | 7-8*              | Connect AIN3.4+ (TP63) to noninverting input of U18                |
| J45      | Open*             | No offset to U17 noninverting input                                |
| J45      | 1-2               | Offset U17 output by VREF/2                                        |

| HEADER   | JUMPER POSITION   | DESCRIPTION                                                                  |
|----------|-------------------|------------------------------------------------------------------------------|
| J46      | Open*             | No offset to U18 noninverting input                                          |
| J46      | 1-2               | Offset U18 output by VREF/2                                                  |
| J49      | 1-2*              | Short AIN4+ (J47, TP72) to AGND                                              |
| J49      | 3-4*              | Short AIN4- (J48, TP73) to AGND                                              |
| J50      | 1-2*              | Short AIN5+ (TP74) toAGND                                                    |
| J50      | 3-4*              | Short AIN5- (TP75) toAGND                                                    |
| J63      | Open*             | Use external +12V source                                                     |
| J63      | 1-2               | Use +12V from ZedBoard                                                       |
| J64      | Open              | If connected to ZedBoard FPGA                                                |
| J64      | 1-2*              | If connected to PC through USB interface                                     |
| J65      | 1-2*              | Enable U28 H-bridge transformer driver to use onboard ±15V supply generation |
| J65      | 2-3               | Disable U28 and use and external ±15V supply to TP83, TP86, and TP87         |
| J66      | 1-2               | Use an external -15V power supply, connected to TP86                         |
| J66      | 3-4*              | Use U28 driver to generate isolated -15V                                     |
| J67      | 1-2               | Use an external +15V power supply, connected to TP83                         |
| J67      | 3-4*              | Use U28 driver to generate isolated +15V                                     |
| J68      | 1-2               | Use an external +12V power supply to TP91 as VCC                             |
| J68      | 3-4*              | Use onboard +12V from U32 LDO as VCC                                         |
| J69      | 1-2               | AGND as VEE                                                                  |
| J69      | 3-4               | Use an external -12V power supply to TP90 as VEE                             |
| J69      | 5-6*              | Use onboard -12V from U33 LDO as VEE                                         |

*Default configuration

│

## MAX11253/MAX11254 Family Evaluation Kit

## General Description of Software

The main window of the EV kit software contains seven tabs: Configuration, Scope, DMM, Histogram, FFT, Scan Mode,  and  Registers.  The  Configuration  tab  provides control for the ADC configuration including calibration and data capture. The other six tabs are used for evaluating the data captured by the ADC.

## Configuration Tab

The Configuration tab provides an interface for selecting and  configuring  the  ADC  from  a  functional  perspective. Select the desired Device for  either  Standalone or FPGA in  the  dropdown  menu  and  the  corresponding  properties of  the  device  are  displayed  including Channel number, Sample Rate , Number of Samples , Reference Voltage , Sequencing  Mode , Calibration , GPO/GPIO selection , Input  Path  (Direct  or  internal  PGA) , Delta-Sigma Modulator type  selection  for  different Data  Format and Conversion  Mode , Serial  Interface function  ( Convert , and Read All ), Power setting  ( NOP , Power  Down ,  and

Evaluates: MAX11253/MAX11254

Standby ), Reset  Registers ,  and RSTB  Reset , Clock/ SYNC ( Internal or External Clock , and Disable or Enable SYNC Mode ),  and Other for Disable or Enable Current Sink/Source and CAPREG LDO .

The sample settings are available on the left of the configuration menu, which allow the user to select the Channel , Sample Rate , Number of Samples and Clock Source if FPGA device is used.

The Read Data and Status information  is  displayed  on the right, which shows the data in both voltage and Hex, the sample rate, and power state for the selected channel. In addition, if there are any errors, the indicator lights will turn red.

## Channel Selection

To  select  the  desired  channel  among  the  six  available channels, click Channel # dropdown menu at the top left and select the desired channel from 0 to 5. The default selection is Channel 0 .

Figure 1. EV Kit Software (Configuration Tab)

<!-- image -->

│

## MAX11253/MAX11254 Family Evaluation Kit

## Sample Rate (SPS)

To select the desired data rate for single-cycle mode from 50sps  to  12800sps  and  for  continuous  mode  data  rate from 1.9sps to 64000sps, choose the Sample Rate (SPS) from the dropdown menu below the Channel # selection.

## Reference Voltage

There  are  three  different  reference  voltages  available on  board:  MAX6070AUT18+  (1.8V),  MAX6070AUT30+ (3.0V),  and  MAX6126AASA30+  (3.0V).  To  select  1.8V, place JMP1 from position 1 to 4. To select 3.0V MAX6070 with ±0.04% accuracy, place JMP1 from position 1 to 3. To select 3.0V MAX6126 with ±0.02% accuracy, place JMP1 from position 1 to 2.

## Sequencer Mode

To  change  the  sequencer  mode,  click  the Sequence Mode selection below the Sequencing menu and select Mode 1, 2, or 3 as desired. Check the GPO Sequencer Mode box  to  enable  GPO/GPIO  function  in  mode  3.  In addition, check the Enable box to enable the MUX and GPO Delay .  Choose the desired delay in microseconds by clicking on the + or - buttons.

## ADC Calibration

Two types of software calibration for offset and gain are available: Self calibration and system calibration.

The primary mode for calibration is using the dropdown list  to  select a calibration mode, followed by clicking the Calibrate button.  The  checkboxes  for Self  Offset , Self Gain , System  Offset ,  and System  Gain allow  for  the user to enable or disable the calibration values. The calibration values can also be changed manually by entering a hex value in the numeric box.

## GPO/GPIO

To select GPO or GPIO ports, choose the option under the GPO/GPIO dropdown menu and check the Enable box.

## Input Path

Select Direct under  the Input  Path dropdown  menu  to bypass the internal amplifiers and apply the analog input signals directly to the MAX11253/MAX11254 inputs or to use the external amplifiers.

Select PGA under the Input Path dropdown menu to use the internal programmable gain amplifiers.

## Delta-Sigma Modulator

To select the desired data format, click the Data Format dropdown  menu  under  the Delta-Sigma  Modulator section and choose either Bipolar or Unipolar with two's complement or offset binary options.

## Evaluates: MAX11253/MAX11254

Three  conversion  modes  are  provided: Continuous , Single  Cycle , and Single  Continuous . Click the Conversion  Modes dropdown  menu  under  the DeltaSigma Modulator section  to  select  the  desired  conversion mode.

## Serial Interface

To  starting  converting,  click  the Convert button  under the Serial interface section. To read all registers, click the Read All button.

## Power

The MAX11253/MAX11254 EV kit features three powerdown  states: Normal  Operating  Power  (NOP) , Power down , and Standby .  Select the desired power state by clicking the drop-down menu under the Power section.

To reset the configuration settings back to default values, press the Reset Registers button.

To exercise the power-on reset feature, click the RSTB button.

## Clock/SYNC

The  internal  clock  mode  is  set  at  default  condition.  To use the external clock provided on-board, select External under  the Clock/SYNC section  and  install  jumper  J11 from 2-3. To user-supplied external clock, select External under  the Clock/SYNC section  and  install  jumper  J11 from  1-2.  In  addition,  the  Sync  mode  can  be  enabled or  disabled  by  clicking  the  drop-down  menu  under  this Clock/SYNC section  and  install  jumper  J15.  The  Sync signal should be provided externally.

## Other

To enable (J14 open) or disable (J14 installed and V DDVD ≤ 2.0V) the internal CAPREG LDO for digital and I/O supply,  select  this  option  from  the  drop-down  menu  under the Other section. Additionally, Current Sink/Source can also be disabled or enabled under this section.

## Read Data and Status

The Read Data and Status on the far right hand side of this Configuration menu depicts the received data and status of the device such as the selected channel, data rate, sample rate, and power state. Click the Read Data and Status button to view the updated status.

To save a configuration, select Save ADC Config As… in the File menu. This saves all the ADC register values to a XML file. To load a configuration, select Load ADC Config in the File menu. When the XML file is loaded, all the register values in the file are written to the ADC.

## MAX11253/MAX11254 Family Evaluation Kit

## Scope Tab

The Scope tab sheet is used to capture data and display it in the time domain. The desired Channel # , Sample Rate , Number of Samples , Display Unit , Average Samples , and Resolution Selection can also be set in this tab if they  were  not  appropriately  adjusted  in  other  tabs.  The Display  Unit drop-down  list  allows  counts  in  LSB  and voltages in V, mV, or µV. Once the desired configuration is

## Evaluates: MAX11253/MAX11254

set, click on the Capture button. The right side of the tab sheet displays details of the waveform, such as average, standard deviation, maximum, minimum, and fundamental frequency as shown in Figure 2.

To save the captured data to a file, select Options &gt; Save Graph &gt; Scope . This saves the setting on the left and the data captured to a CSV file.

Figure 2. EV Kit Software (ScopeTab)

<!-- image -->

│

## MAX11253/MAX11254 Family Evaluation Kit

## DMM Tab

The DMM tab sheet provides the typical information as a digital multimeter. Once the desired configuration is set,

## Evaluates: MAX11253/MAX11254

click on the Capture button. Figure 3 displays the results shown by the DMM tab when a 1.5V signal is applied to AIN0+ and 1.0V to AIN0-.

Figure 3. EV Kit Software (DMM Tab)

<!-- image -->

│

## MAX11253/MAX11254 Family Evaluation Kit

## Histogram Tab

The Histogram tab sheet is used to show the histogram of the data. Sample rate and number of samples can also be set in this tab if they were not appropriately adjusted in other tabs. Once the desired configuration is set, click on  the Capture button.  The  right  side  of  the  tab  sheet displays details of the histogram such as average, standard deviation, maximum, minimum, peak-to-peak noise, effective  resolution,  and  noise-free  resolution  as  shown

in Figure 4.

Figure 4. EV Kit Software (Histogram Tab)

<!-- image -->

## Evaluates: MAX11253/MAX11254

The histogram tab is  enabled  at  default.  Using  the  histogram will  slow  down  the  GUI  response. To  disable  it, check the Disable Histogram box.

To save the histogram data to a file, go to Options &gt; Save Graph &gt; Histogram .  This  saves  the  setting  on  the  left and the histogram data captured to a CSV file.

│

## MAX11253/MAX11254 Family Evaluation Kit

## FFT Tab

The FFT tab sheet is used to display the FFT of the data. The Sample Rate , Number of Samples , Resolution and Window Function type can be set as desired. To calculate the Adjusted Input Signal frequency for Coherent Sampling , enter the Input Signal frequency in Hertz and push the Calculate button. Once the preferred configuration is set, click on the Capture button. The right side of the tab displays the performance based on the FFT, such as  fundamental  frequency,  SNR,  SINAD,  THD,  SFDR, ENOB, and Noise Floor as shown in Figure 5.

## Evaluates: MAX11253/MAX11254

To  save  the  FFT  data  to  a  file,  go  to Options  &gt;  Save Graph &gt; FFT . This saves the setting on the left and the FFT data captured to a CSV file.

When coherent sampling is needed, this tab allows the user  to  calculate  the  external  clock  frequency  applied to  the  board.  Adjust  the  input  frequency  of  the  lowjitter  clock  to  the  value  as  shown  in  the Adjusted Master  Clock  (Hz) and  apply  it  to  the  EV  KIT  EXT\_ CLK  connector.  See  the Sync  Input  and  Sync  Output section before using this feature.

Figure 5. EV Kit Software (FFT Tab)

<!-- image -->

│

## MAX11253/MAX11254 Family Evaluation Kit

Figure 6 shows the setup Maxim Integrated uses to capture data for coherent sampling.

For  coherent  FFT  evaluation,  use  the  jumper  settings from Table 2 for proper configurations. The low-jitter clock is synchronized with the signal generator at 10MHz from the ZedBoard. To achieve coherent sampling, click on the

## Evaluates: MAX11253/MAX11254

Calculate button and enter the Adjusted Master Clock (Hz) frequency of approximately 8.192MHz into our lowjitter clock. Timing for all SPI timing and sampling rate are based off the system clock.

Figure 6. EV Kit Coherent Sampling Setup

<!-- image -->

│

## MAX11253/MAX11254 Family Evaluation Kit

## Scan Mode Tab

The Scan  Mode tab  is  used  to  perform  selected  data conversions and read the converted data.

In the Sequence Setting section at the bottom, set the desired  sequencer  mode  (1  to  3)  from  the Sequence Mode drop-down  menu  and  select  whether  to  assert the  RDYB  pin after  one  channel or after  scan  completes options  under the RDYB menu. Check the GPO Sequencer Mode and Enable boxes  as  desired.  Then set the conversion time delay in µs for MUX and GPO by clicking on the + or -buttons under the MUX Delay and GPO Delay menu,  allowing  for  high  impedance  source networks  to  stabilize  after  the  channels  are  selected. Finally  press  the Read All button to  view  the  selected settings.

## Evaluates: MAX11253/MAX11254

In the Read Data section on top, select the desired unit in either LSB or voltage (V, mV, or µV) under the Display Unit drop-down menu. Then choose the desired sample rate  by  clicking  on  the Sample  Rate drop-down  menu under.  Finally,  click  the  Scan  button  to  start  converting  and  press  the Read  Data button  to  view  the  converted data displayed on the right hand side as shown in Figure 7.

Figure 7. EV Kit Software (Scan Mode Tab)

<!-- image -->

│

## MAX11253/MAX11254 Family Evaluation Kit

## ADC Registers Tab

The Registers tab  sheet shows the device registers on the left. The middle section shows the descriptions of the selected register. Click Read All to read all registers and refresh the window with the register settings. To write a register  first  select  the  hex  value  in  the Value column, type the desired hex value and press Enter .

The command byte is on the right side of the tab sheet. This byte precedes all SPI transactions and is described in  the  IC  datasheet.  To  send  a  command  byte  enter  a hex value in the numeric box and click the Send button. The  command  byte  has  two  different  formats  including Conversion  Command and Register  Read/Write . Select the radio button for the desired mode to see the bit description in the table. See Figure 8.

## Evaluates: MAX11253/MAX11254

## Detailed Description of Hardware

The MAX11253/MAX11254 EV kit provides a proven signal path and board layout to demonstrate the performance of the  MAX11253/MAX11254  16-/24-bit,  delta-sigma  ADCs. Included in the EV kit are digital isolators, isolated DC-DC converters, ultra-low-noise LDOs to all supply pins of the IC,  on-board  reference  (MAX6126  and  MAX6070),  precision  amplifiers  (MAX9632  and  MAX44205)  for  analog inputs,  and  sync-in  and  sync-out  signals  for  coherent sampling.

An  on-board  FTDI  controller  is  provided  to  allow  for evaluation in standalone mode, which has limitations on maximum sample speed and on sample depth. The EV kit can be used with FPGA to achieve full speed and a larger sample depth.

The  EV  kit  supports  a  number  of  different  devices  as listed in Table 3.

Figure 8. EV Kit Software (ADC Registers Tab)

<!-- image -->

## Table 3. Products Supported with MAX11253/MAX11254 EV Kit

| PART NO.   | RESOLUTION   | MAX. SAMPLE RATE   |
|------------|--------------|--------------------|
| MAX11253   | 16-bits      | 64ksps             |
| MAX11254   | 24-bits      | 64ksps             |

│

## MAX11253/MAX11254 Family Evaluation Kit

## User-Supplied SPI

To  evaluate  the  EV  kit  with  a  user-supplied  SPI  bus, disconnect  from  the  FMC  bus  and  remove  jumper  J64. Apply the user-supplied SPI signals to SCLK, CSB, DIN, and DOUT at the PMOD\_A header (J60). Make sure the return ground is connected to PMOD ground.

The on-board FTDI chip used for standalone mode does not conflict with the user-supplied SPI if it is powered off by removing jumper J64.

## CAUTION:  DO  NOT  PLUG  THIS  HEADER  INTO  A STANDARD  PMOD  INTERFACE  FOUND  ON  OTHER FPGA  OR  MICROCONTROLLER  PRODUCTS.  THE SIGNAL DEFINITION IS UNIQUE TO THIS EV KIT.

## FMC Interface:

The users should confirm compatibility of pin-usage between their  own  FMC  implementation  and  that  of  the  Maxim Integrated EV kit before connecting the Maxim Integrated EV kit to a different system with FMC connectors.

## Voltage References

There  are  three  different  reference  voltages  available on  board:  MAX6070AUT18+  (1.8V),  MAX6070AUT30+ (3.0V),  and  MAX6126AASA30+  (3.0V).  To  select  1.8V, place JMP1 from position 1 to 4. To select 3.0V MAX6070 with  ±0.04%  accuracy,  place  JUMP1  from  position  1  to 3. To select 3.0V MAX6126 with ±0.02% accuracy, place JMP1 from position 1 to 2.

For  user-supplied  external  references,  remove  jumper J24 and connect a reference voltage to J24-2. Measure and enter the value of the external reference voltage into the Reference Voltage edit box on the Configuration tab of the GUI. Table 3 depicts the reference source options.

## External DVDD Power Supply

The internal 1.8V regulator can be replaced by an external supply in the range of 1.7V to 2.0V. To use external DVDD, disable the  internal  regulator  by  selecting  the Disable  in  the CAPREG  LDO drop-down  menu  in  the Other section and install J14.

## User-Supplied Power Supply

The  EV  kit  receives  power  from  a  single  DC  source  of 12V, 500mA through a J61 power jack. The MAX13256, H-bridge  driver  and  transformer  create  an  additional negative rail for +15V and -15V. The power is then rectified and regulated down to a +12V and -12V supplies for the MAX9632 op amps, as well as +5V and -5V supplies for the MAX44205 op amps. Additional supplies are generated for +1.8V/-1.8V and +2V/+3.3V for the ADCs and VREFs. See the EV kit schematic pdf for details. Specific

## Evaluates: MAX11253/MAX11254

voltages can be connected to the board for each rail, see Table 4 for corresponding jumper positions.

## ADC Input Amplifiers

The input amplifiers allow for significant flexibility, supporting bipolar or unipolar input paths, as well as the option for gain control. Selected input amplifiers can be configured  as  inverting,  noninverting,  differential  bipolar,  and differential  unipolar.  See  Table  5  for  these  analog  input configurations for channels 0 to 5.

The analog front-end consists of six channels, 0 to 5, and there  are  four  user-selectable  input  pairs  (for  example AINx+ and AINx- where x is 2, 3, 4 or 5) allowing selection between one of two op amp solutions, the MAX9632 a  36V,  precision,  low-noise,  wide-band  amplifier  or  the MAX44205,  a  180MHz,  low-noise,  low-distortion,  fully differential  op  amp. The  op  amps can be configured as inverting  or  noninverting  amplifiers  by  jumper  selectors. Both op amps work as anti-aliasing lowpass filters (LPF) and can be daisy-chained to create a second-order LPF.

The range of possible configurations are listed in Table 5.

## Table 4. Reference Source Options

| REF SOURCE     | JUMPER               | CONNECTION                                     | FUNCTION                        |
|----------------|----------------------|------------------------------------------------|---------------------------------|
| MAX6070        | JMP1                 | 1-4                                            |                                 |
| (1.8V)         | J13                  | 1-2                                            | Select U7                       |
| MAX6070 (3.0V) | J16 J24 JMP1 J13 J16 | 1-2 1-2 1-3 1-2 1-2                            | MAX6070 Select U8 MAX6070       |
| MAX6126 (3.0V) | J13 J16 J24 J13 J16  | 1-2 1-2 1-2                                    | Select U9 MAX6126               |
| AVDD           | J24                  | 1-2 1-2                                        | SelectAVDD                      |
|                |                      | 1-2 1-2 2-3                                    |                                 |
| User- Supplied | J13                  |                                                |                                 |
|                | J16                  | Open. Connect user-supplied reference to J24-2 | Select User- Supplied Reference |
|                | J24                  |                                                |                                 |

## MAX11253/MAX11254 Family Evaluation Kit

Table 5. Power Supply to the Board

| POWER                                           | INPUT CONNECTORS        | JUMPERS                                                                                                    |
|-------------------------------------------------|-------------------------|------------------------------------------------------------------------------------------------------------|
| Single +12V input from a wall adapter (default) | J61                     | J67: 3-4 J66: 3-4 J68: 3-4 J69: 5-6 J65: 1-2 J64: 1-2 (select onboard FTDI) J63: 1-2 (select FPGAZedBoard) |
| An external ±12V                                | TP91 (+12V) TP90 (-12V) | J68: 1-2 J69: 3-4 J65: 1-2                                                                                 |
| An external ±15V                                | TP86 (+15V) TP83 (-15V) | J66: 1-2 J68: 3-4 J69: 5-6 J65: 1-2 J64: 1-2 (select onboard FTDI) J63: 1-2 (select FPGAZedBoard)          |

## Table 6. Analog Input Configurations (CH0-CH5)

| CONFIGURATION   | CONFIGURATION      | ADC INPUT                                    | INPUT CONNECTORS                                                                | JUMPER POSITIONS                                                                                                                                                                                          |
|-----------------|--------------------|----------------------------------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NO.             | DESCRIPTION        | CONFIGURATION                                |                                                                                 |                                                                                                                                                                                                           |
| 1               | Channel 0          | User-supplied signals, differential          | AIN0D+, AIN0D-                                                                  | N/A                                                                                                                                                                                                       |
| 2               | Channel 1          | User-supplied signals, differential          | AIN1D+, AIN1D-                                                                  | N/A                                                                                                                                                                                                       |
| 3               | MAX9632, Channel 2 | Noninverting, differential, second-order LPF | J28: AIN2.1+ (or TP39): AIN2.1+ andAGND J30: AIN2.3+ (or TP43): AIN2.3+ andAGND | J31: 1-2 J35: 5-6 and 3-4 J33: 1-2 J32: 1-2 J36: 5-6 and 3-4 J34: 1-2 J4: 3-4 and 5-6 J37: 1-2 (for bipolar signal or open for unipolar signal) J38: 1-2 (for bipolar signal or open for unipolar signal) |

│

Evaluates: MAX11253/MAX11254

## MAX11253/MAX11254 Family Evaluation Kit

Evaluates: MAX11253/MAX11254

## Table 6. Analog Input Configurations (CH0-CH5) (continued)

| CONFIGURATION   | CONFIGURATION      | ADC INPUT                                    |                                                                                 | JUMPER POSITIONS                                                                                                                                                                                          |
|-----------------|--------------------|----------------------------------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NO.             | DESCRIPTION        | CONFIGURATION                                | INPUT CONNECTORS                                                                |                                                                                                                                                                                                           |
| 4               | MAX9632, Channel 2 | Inverting, differential, second-order LPF    | J27: AIN2.1- (or TP38): AIN2.1- andAGND J29: AIN2.3- (or TP42): AIN2.3- andAGND | J31: 3-4 J35: 1-2 and 7-8 J33: 3-4 J32: 3-4 J36: 1-2 and 7-8 J34: 3-4 J4: 3-4 and 5-6 J37: 1-2 (for bipolar signal or open for unipolar signal) J38: 1-2 (for bipolar signal or open for unipolar signal) |
| 5               | MAX9632, Channel 2 | Noninverting, differential, first-order LPF  | AIN2.2+ (or TP41): AIN2.2+ andAGND AIN2.4+ (or TP45): AIN2.4+ andAGND           | J35: 7-8 and 3-4 J33: 1-2 J34: 1-2 J36: 7-8 and 3-4 J4: 3-4 and 5-6 J37: 1-2 (for bipolar signal or open for unipolar signal) J38: 1-2 (for bipolar signal or open for unipolar signal)                   |
| 6               | MAX9632, Channel 2 | Inverting, differential, first-order LPF     | AIN2.2- (or TP40): AIN2.2- andAGND AIN2.4- (or TP44): AIN2.4- andAGND           | J33: 3-4 J34: 3-4 J36: 7-8 and 3-4 J4: 3-4 and 5-6 J37: 1-2 (for bipolar signal or open for unipolar signal) J38: 1-2 (for bipolar signal or open for unipolar signal)                                    |
| 7               | MAX9632, Channel 3 | Noninverting, differential, second order LPF | AIN3.1+ (or TP57): AIN3.1+ andAGND AIN3.3+ (or TP61): AIN3.3+ andAGND           | J39: 1-2 J43: 5-6 and 3-4 J41: 1-2 J40: 1-2 J44: 5-6 and 3-4 J42: 1-2 J5: 3-4 and 5-6 J45: 1-2 (for bipolar signal or open for unipolar signal) J46: 1-2 (for bipolar signal or open for unipolar signal) |

│

## MAX11253/MAX11254 Family Evaluation Kit

Evaluates: MAX11253/MAX11254

## Table 6. Analog Input Configurations (CH0-CH5) (continued)

| CONFIGURATION   | CONFIGURATION       | ADC INPUT                                   |                                                                         |                                                                                                                                                                                                           |
|-----------------|---------------------|---------------------------------------------|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| NO.             | DESCRIPTION         | CONFIGURATION                               | INPUT CONNECTORS                                                        | JUMPER POSITIONS                                                                                                                                                                                          |
| 8               | MAX9632, Channel 3  | Inverting, differential, second-order LPF   | AIN3.1- (or TP56): AIN3.1- andAGND AIN3.3- (or TP60): AIN3.3- andAGND   | J39: 3-4 J43: 1-2 and 7-8 J41: 3-4 J40: 3-4 J44: 1-2 and 7-8 J42: 3-4 J5: 3-4 and 5-6 J45: 1-2 (for bipolar signal or open for unipolar signal) J46: 1-2 (for bipolar signal or open for unipolar signal) |
| 9               | MAX9632, Channel 3  | Noninverting, differential, first-order LPF | AIN3.2+ (or TP59): AIN3.2+ andAGND AIN3.4+ (or TP63): AIN3.4+ andAGND   | J43: 7-8 and 3-4 J41: 1-2 J44: 7-8 and 3-4 J42: 1-2 J5: 3-4 and 5-6 J45: 1-2 (for bipolar signal or open for unipolar signal) J46: 1-2 (for bipolar signal or open for unipolar signal)                   |
| 10              | MAX9632, Channel 3  | Inverting, differential, first-order LPF    | AIN3.2- (or TP58): AIN3.2- andAGND AIN3.4- (or TP62): AIN3.4- andAGND   | J44: 7-8 and 3-4 J42: 3-4 J5: 3-4 and 5-6 J45: 1-2 (for bipolar signal or open for unipolar signal)                                                                                                       |
| 11              | MAX44205, Channel 4 | Differential, first-order LPF               | J48: AIN4- (or TP73): AIN4- andAGND J47: AIN4+ (or TP72): AIN4+ andAGND | J6: 3-4 and 5-6 J49: open                                                                                                                                                                                 |
| 12              | MAX44205, Channel 5 | Differential, first-order LPF               | AIN5+ (or TP74): AIN5+ andAGND AIN5- (or TP75): AIN5- andAGND           | J7: 3-4 and 5-6 J50: open                                                                                                                                                                                 |

│

## MAX11253/MAX11254 Family Evaluation Kit

## Sync Input and Sync Output (For Coherent Sampling)

Sync Input  and  Sync  Output  is  applicable  to  the  FPGA (ZedBoard)  and  is  not  used  in  Standalone  mode.  The SYNC\_IN SMA accepts an approximate 100MHz waveform signal to generate the system clock of the ZedBoard. For  maximum  performance,  use  a  low-jitter  clock  that syncs  to  the  user's  analog  function  generator.  The SYNC\_OUT  SMA  outputs  a  10MHz  square  waveform that syncs to the user's analog function generator. Both options  are  used  for  coherent  sampling  of  the  IC.  Use only one option at a time. The relationship between f IN , f S , NCYCLES, and M SAMPLES  is given as follows:

<!-- formula-not-decoded -->

where:

f IN  = Input frequency

f S = Sampling frequency

NCYCLES = Prime number of cycles in the sampled set

MSAMPLES = Total number of samples

## Evaluates: MAX11253/MAX11254

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11253EVKIT# | EVKIT  |
| MAX11254EVKIT# | EVKIT  |

#Denotes RoHS compliant.

Contact Avnet to purchase a ZedBoard to communicate with the MAX11253/MAX11254 EV kit.

This EV kit comes with two assembly options:

The MAX11253EVKIT# comes with a MAX11253ATJ+ in a 32-pin TQFN package.

The MAX11254EVKIT# comes with a MAX11254ATJ+ in a 32-pin TQFN package..

Both EV kit variations use the same PCB and bill of materials, and the only variation is the IC assembled at U1.

│

## MAX11253/MAX11254 Family Evaluation Kit

Evaluates: MAX11253/MAX11254

## MAX1153/MAX11254 Family EV Kit Bill of Materials

| COMMENTS    |                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                    |                                                                                                                                                  |                                                                   |                                                                              |                                            |                                         |                                           |                                      |                                        |                                     |                     |                                                                          |                                 |                                                                  |    |    |    |                          | MICRO-USB       |             |           |       |      |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|------------------------------------------------------------------------------|--------------------------------------------|-----------------------------------------|-------------------------------------------|--------------------------------------|----------------------------------------|-------------------------------------|---------------------|--------------------------------------------------------------------------|---------------------------------|------------------------------------------------------------------|----|----|----|--------------------------|-----------------|-------------|-----------|-------|------|
| VALUE       | N/A                                                                                                                                                                                                                                                                                                                                                | 0.1UF                                                                                                                                              | 1UF                                                                                                                                              | 3300PF 4.7UF                                                      | 1000PF                                                                       | 0.01UF                                     | 4700PF                                  | 18PF                                      | 10UF 0.47UF                          | MBR0520L BAS4002A-RPP LGL29K-G2J1-24-Z | LS L29K-G1J2-1-Z 1282834-0 282834-4 | PEC04DAAN PCC02SAAN |                                                                          | PCC03SAAN 5-1814832-1           | PBC02DAAN PEC02DAAN PBC10SAAN ASP-134604-01                      |    |    |    | PBC04DAAN                | 10118192-0001LF | KLDX-0202-B |           | 4.7UF |      |
| MFG         | 5001 TDK                                                                                                                                                                                                                                                                                                                                           | TDK                                                                                                                                                | TAIYO YUDEN                                                                                                                                      | TDK TDK                                                           | KEMET                                                                        | TDK                                        | TDK TDK                                 | KEMET/VENKEL TDK                          | MURATA                               | SEMICONDUCTOR INFINEON OSRAM           | OSRAM TYCO ELECTRONICS              | TYCO ELECTRONICS    | SULLINS ELECTRONICS CORP. SULLINS                                        | SULLINS TYCO SULLINS ELECTRONIC | CORP. SULLINS ELECTRONICS CORP. SULLINS ELECTRONICS CORP. SAMTEC |    |    |    | CORP. SULLINS ELECTRONIC | FCI CONNECT     | KYCON       | FAIRCHILD |       |      |
| MFG PART #  |                                                                                                                                                                                                                                                                                                                                                    | C1608X7R1H104K080AA                                                                                                                                | UMK107AB7105KA                                                                                                                                   | C1608C0G2A332J080AA C2012X7R1E475K125AB                           | C0603C102K1GAC                                                               | C1608C0G1H103J080AA                        | C1608C0G1H472J080AA C1608X5R1E475K080AC | C2012X5R1V106K085                         | C0603HQN101-180FNP GRM188R71E474KA12 | MBR0520L BAS4002A-RPP                  | LS L29K-G1J2-1-Z 1282834-0          | PEC04DAAN PCC02SAAN | LGL29K-G2J1-24-Z PCC03SAAN 5-1814832-1                                   | 282834-4 PBC04DAAN PEC02DAAN    | PBC02DAAN PBC10SAAN ASP-134604-01                                |    |    |    |                          | 10118192-0001LF | KLDX-0202-B |           |       |      |
| QTY REF DES | 32 TP13, TP15-TP18, TP20, TP22, TP27, TP29, TP31, TP33, TP35- TP37, TP46, TP52-TP54, TP64, TP65, TP70, TP71, TP76, TP80, TP82, TP85,TP87,TP89,TP93-TP95, GND_FPGA C1-C3, C7-C9, C19, C21-C23, C27, C28, C31, C33, C40, C41, C44, C45, C52, C53, C56, C57, C64, C65, C68, C69, C76, C77, C80-C84, C95, C96, C99, C100, C116-C118, C121, C122, C125, | 63 C128, C129, C132, C135, C137-C143, C146, C147, C155, C166- C168, C176, C184, C187 C4-C6, C20, C26, C29, C30, C38, C39, C42, C43, C50, C51, C54, | 41 C55, C62, C63, C66, C67, C74, C75, C78, C79, C93, C94, C97, C98, C113, C114, C119, C120, C123, C124, C144, C145, C152- C154, C173, C174, C186 | C10-C15 11 C16-C18, C32, C150, C157, C158, C163, C164, C169, C170 | 3 C24, C126, C127 C25, C34-C37, C46-C49, C58-C61, C70-C73, C156, C159, C162, | 28 C165, C171, C172, C175, C177-C179, C185 | 8 C85-C92 C115, C130, C131, C136        | 9 C148, C149, C160, C161, C180-C183, C188 | C134 1 C151                          | D2, D3 2 DS1, DS2 DS3                  | 2 J2, J3 J4-J7                      | 3 J1, J25, J26      | J8 9 J10-J13, J16, J17, J24, J52, J65 10 J27-J30, J47, J48, J54, J56-J58 | 4 J35, J36, J43, J44            | J39-J42, J66-J68 J50 1 J51 1 J53                                 |    |    |    |                          |                 |             |           |       |      |
|             |                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                    |                                                                                                                                                  |                                                                   |                                                                              |                                            |                                         |                                           |                                      | 2                                      | 1                                   |                     |                                                                          |                                 | 1 1                                                              |    |    |    |                          |                 |             |           |       |      |
| ITEM        |                                                                                                                                                                                                                                                                                                                                                    | 2                                                                                                                                                  |                                                                                                                                                  | 5                                                                 | 6                                                                            | 7                                          | 8                                       |                                           | 12                                   | 14 15                                  | 17                                  | 18                  | 19                                                                       | 23                              | 25                                                               | 26 | 27 | 28 |                          |                 |             |           |       |      |
|             |                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                    |                                                                                                                                                  |                                                                   |                                                                              |                                            |                                         | 10                                        |                                      | 13                                     | 16                                  |                     |                                                                          | 24                              |                                                                  |    |    |    |                          |                 |             |           |       |      |
|             | 1                                                                                                                                                                                                                                                                                                                                                  |                                                                                                                                                    |                                                                                                                                                  |                                                                   |                                                                              |                                            |                                         |                                           | 11                                   |                                        |                                     |                     | 20                                                                       |                                 |                                                                  |    |    |    |                          |                 |             |           |       |      |
|             |                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                    | 3                                                                                                                                                |                                                                   |                                                                              |                                            |                                         |                                           |                                      |                                        |                                     |                     |                                                                          |                                 | 29                                                               |    |    |    |                          |                 |             |           |       |      |
|             |                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                    |                                                                                                                                                  |                                                                   |                                                                              |                                            |                                         |                                           |                                      |                                        |                                     |                     |                                                                          | 21 22                           |                                                                  |    |    |    |                          |                 |             |           |       |      |
|             |                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                    |                                                                                                                                                  |                                                                   |                                                                              |                                            |                                         |                                           |                                      |                                        |                                     |                     |                                                                          |                                 | 11                                                               |    |    |    |                          |                 |             |           |       |      |
|             |                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                    |                                                                                                                                                  |                                                                   |                                                                              |                                            |                                         |                                           |                                      |                                        |                                     |                     |                                                                          |                                 |                                                                  |    |    |  2 |                          |                 |             |           |       |      |
|             |                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                    |                                                                                                                                                  |                                                                   |                                                                              |                                            |                                         |                                           |                                      |                                        |                                     | 1                   | 4                                                                        |                                 |                                                                  |    |    |    |                          |                 |             |           |       |      |
|             |                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                    |                                                                                                                                                  |                                                                   |                                                                              |                                            |                                         |                                           |                                      |                                        | 1                                   |                     |                                                                          |                                 |                                                                  |    |    |    |                          |                 |             |           |       |      |
|             |                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                    |                                                                                                                                                  | 4                                                                 |                                                                              |                                            |                                         |                                           | 6 C133,                              | D1                                     | 9 2                                 |                     |                                                                          |                                 | J31-J34,                                                         |    |    |    |                          | J59             | J61         |           | 4     | J49, |

## MAX11253/MAX11254 Family Evaluation Kit

Evaluates: MAX11253/MAX11254

## MAX1153/MAX11254 Family EV Kit Bill of Materials (continued)

| COMMENTS                                |                                                 |                           | 10                                                                        |                                                               | 49.9                                                      |                                                                                   | 28                                                                                                   | 0                                                                                        | 10                                                                               |                                                                                                                                                 |
|-----------------------------------------|-------------------------------------------------|---------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| VALUE 282834-2                          | PEC03DAAN 22-28-4043 600 33UH                   | 49.9                      | 237K                                                                      | 73.2K 10K                                                     | 1K                                                        | 1M 1K                                                                             | 1.5K 10K                                                                                             | 15K 2.2K 12K 4.7K                                                                        | 681K 124K SX1100-B                                                               | TGM-H240V8LF N/A                                                                                                                                |
| MFG TE CONNECTIVITY SULLINS ELECTRONICS | CORP. MOLEX TDK COILCRAFT                       | TE CONNECTIVITY           | TE CONNECTIVITY VISHAY DALE/PANASONIC PANASONIC                           | VISHAY DALE/PANASONIC VISHAY DALE                             | VISHAY DALE/PANASONIC                                     | VISHAY DALE/ROHM SUSUMU CO LTD.                                                   | PANASONIC PANASONIC VISHAY DALE/KOA SPEER ELECTRONICS                                                | VISHAY DALE VISHAY DALE VISHAY DALE VISHAY DALE VISHAY DALE                              | PANASONIC VISHAY DALE/ROHM VISHAY DALE KYCON HALO ELECTRONICS, INC               | ?                                                                                                                                               |
| MFG PART # 282834-2                     | PEC03DAAN 22-28-4043 MMZ1608B601C XPL2010-333ML | RN73C1J49R9B; 9-1614353-1 | RN73C1J10RBTG; 1614350-2 CRCW0603237KFK; ERJ3EKF2373V ERJ3EKF7322V        | CRCW060310K0FK; 9C06031A1002FK; ERJ- 3EKF1002V CRCW060349R9FK | CRCW06031001FK; CRCW06031K00FK; ERJ- 3EKF1001V            | CRCW06031M00FK; MCR03EZPFX1004 R97- RG1608N-102-B-T1                              | TNPW06031K50BE; ERA- 3YEB152V R187-R190 ERJ-3EKF28R0V TNPW060310K0BE; RN731JTTD1002B CRCW06030000ZS; | MCR03EZPJ000; ERJ- 3GEY0R00V CRCW060315K0FK CRCW06032K20FK CRCW060312K0FK CRCW06034K70FK | ERJ3EKF6813V CRCW060310R0FK; MCR03EZPFX10R0 CRCW0603124KFK SX1100-B TGM-H240V8LF | 5000                                                                                                                                            |
| ITEM QTY REF DES 30 1 J62               | 31 1 J69 32 1 JMP1 33 1 L1 34                   | 4 L2-L5 4 R1-R4           | 12 R5, R8-R14, R52, R53, R93, R94 1 R6 6 R7, R197, R199, R201, R203, R205 | 14 R15, R171, R172, R175-R179, R181-R186                      | 40 6 R16, R17, R162, R164, R166, R167 41 3 R18, R19, R195 | 16 R20-R27, R54-R61 40 R28-R35, R40-R43, R46-R49, R62-R69, R81-R84, R87-R90, R104 | 4 R44, R45, R85, R86 44 R73-R79, R105, R111-R117, R139-R161, R168, R169, 2 R95, R96                  | 48 2 R163, R165 49 1 R170 50 1 R173 51 1 R174 52 1 R180                                  | 57 2 R198, R200 58 1 R202 59 1 R204 60 49 SU1-SU49                               | 61 1 T1 58 TP1-TP12,TP14,TP19,TP21,TP23-TP26,TP30,TP38-TP45,TP48- TP51,TP56-TP63,TP66-TP69,TP72-TP75,TP77- TP79,TP81,TP84,TP86,TP91,TP92,5V_TTL |
|                                         |                                                 | 35                        | 36 37 38                                                                  | 39                                                            |                                                           | 42 43                                                                             | 45 46 47                                                                                             |                                                                                          |                                                                                  | 62                                                                                                                                              |

## MAX11253/MAX11254 Family Evaluation Kit

Evaluates: MAX11253/MAX11254

## MAX1153/MAX11254 Family EV Kit Bill of Materials (continued)

| COMMENTS    |                                    | MAX14931CASE +                              |                                              |                                                                  |                                           |                        |                            | MAX8840ELT18+   |                   |                            |                                |
|-------------|------------------------------------|---------------------------------------------|----------------------------------------------|------------------------------------------------------------------|-------------------------------------------|------------------------|----------------------------|-----------------|-------------------|----------------------------|--------------------------------|
| VALUE       | MAX11254ATJ+ MAX14935CAWE+ N/A     | MAX14935CAWE+ MAX6070AAUT18+ MAX6070AAUT30+ | MAX6126AASA30                                | LTC6930HDCB-8.19 MAX9632AUA+ MAX44205 74LVC2G125DP 93LC66BT-I/OT | FT2232HL MAX15006BATT+                    | MAX16910CATA9+         | MAX13256ATB+ MAX15006CATT+ | MAX8840ELT18+   | TPS7A3001DGN      | TPS7A4901DGN MAX15006AATT+ | 12MHZ PCB                      |
| MFG         | MAXIM MAXIM ?                      | MAXIM MAXIM                                 | MAXIM MAXIM                                  | LINEAR TECHNOLOGY MAXIM MAXIM ? MICROCHIP                        | FUTURE TECHNOLOGY DEVICES INTL LTD. MAXIM | MAXIM                  | MAXIM MAXIM                | MAXIM           | TEXAS INSTRUMENTS | TEXAS INSTRUMENTS MAXIM    | ABRACON MAXIM                  |
| MFG PART #  | MAX11254ATJ+ 5004                  | MAX14935CAWE+ MAX14935CAWE+                 | MAX6070AAUT18+ MAX6070AAUT30+ MAX6126AASA30+ | LTC6930HDCB-8.19 MAX9632AUA+ MAX44205 74LVC2G125DP 93LC66BT-I/OT | FT2232HL MAX15006BATT+                    | MAX16910CATA9+         | MAX13256ATB+ MAX15006CATT+ | MAX8840ELT18+   | TPS7A3001DGN      | TPS7A4901DGN MAX15006AATT+ | ABM7-12.000MHZ-D2Y-T EPCB11254 |
| QTY REF DES | 1 U1 65 5 TP28,TP83,TP88,TP90,TP96 | 1 U5 1 U6                                   | 1 U7 1 U8 1 U9                               | 1 U10 71 8 U11-U18 72 2 U19, U20 73 2 U21, U22 74 2 U23, U24     | 75 1 U25                                  | 76 2 U26, U35 77 1 U27 | 1 U28 1 U29                | 1 U30           | 3 U31, U33, U34   | 1 U32 1 U36                | 1 Y1 1 PCB                     |
| ITEM        | 64 63                              | 66                                          | 67 68 69                                     | 70                                                               |                                           |                        | 78                         | 79              | 80 81             | 82 83                      | 84 85                          |

│

## MAX11253/MAX11254 Family Evaluation Kit

## MAX1153/MAX11254 Family EV Kit PCB Layout Diagrams

<!-- image -->

MAX1153/MAX11254 Family EV Kit-Top Silkscreen

<!-- image -->

MAX1153/MAX11254 Family EV Kit-Top Paste

MAX1153/MAX11254 Family EV Kit-Bottom Silkscreen

<!-- image -->

MAX1153/MAX11254 Family EV Kit-Bottom Paste

<!-- image -->

│

## MAX1153/MAX11254 Family EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX1153/MAX11254 Family EV Kit-Internal 2

<!-- image -->

MAX1153/MAX11254 Family EV Kit-Internal 4

MAX1153/MAX11254 Family EV Kit -Internal 3

<!-- image -->

MAX1153/MAX11254 Family EV Kit-Internal 5

<!-- image -->

│

## MAX1153/MAX11254 Family EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX1153/MAX11254 Family EV Kit-Top

<!-- image -->

MAX1153/MAX11254 Family EV Kit-Top Mask

MAX1153/MAX11254 Family EV Kit -Bottom

<!-- image -->

MAX1153/MAX11254 Family EV Kit-Bottom Mask

<!-- image -->

│

## MAX1153/MAX11254 Family EV Kit Schematic

<!-- image -->

│

## MAX1153/MAX11254 Family EV Kit Schematic (continued)

<!-- image -->

│

## MAX1153/MAX11254 Family EV Kit Schematic (continued)

<!-- image -->

│

## MAX1153/MAX11254 Family EV Kit Schematic (continued)

<!-- image -->

## MAX1153/MAX11254 Family EV Kit Schematic (continued)

<!-- image -->

│

## MAX1153/MAX11254 Family EV Kit Schematic (continued)

<!-- image -->

│

## MAX1153/MAX11254 Family EV Kit Schematic (continued)

<!-- image -->

│

Evaluates: MAX11253/MAX11254

## MAX1153/MAX11254 Family EV Kit Schematic (continued)

<!-- image -->

│

## MAX1153/MAX11254 Family EV Kit Schematic (continued)

<!-- image -->

│

## MAX11253/MAX11254 Family Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                   | PAGES CHANGED   |
|-------------------|-----------------|---------------------------------------------------------------|-----------------|
|                 0 | 4/15            | Initial release                                               | -               |
|                 1 | 5/15            | Added the MAX11253 EV kit to data sheet                       | 1-22            |
|                 2 | 4/18            | Updated PCB layout diagrams, schematic, and bill of materials | 21-35           |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX11253/MAX11254