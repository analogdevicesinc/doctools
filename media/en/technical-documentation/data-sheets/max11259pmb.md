<!-- lastmod 2022-08-03 -->
## MAX11259PMB Peripheral Module

## General Description

The MAX11259PMB peripheral module (Pmod™) provides the necessary hardware to interface to the MAX11259, a 24-bit,  6-channel,  64ksps,  integrated  PGA  delta-sigma ADC to any system that utilizes Pmod-compatible expansion  ports  configurable  for  I 2 C  communication.  The peripheral  module  includes  a  graphical  user  interface (GUI) that provides communication from the target device to the PC through the USB2PMB2#. The peripheral module can operate in multiple modes:

- 1) Using USB2PMB2# Adapter: In 'standalone' mode, the peripheral module is connected to the PC via a USB2PMB2# adapter board and performs a subset of the complete peripheral module functions with limitations for sample rate, sample size, and no support for coherent sampling.
- 2) User-Supplied I 2 C Mode: The peripheral module provides a 12-pin Pmod-style header for user-supplied I 2 C interface to connect the signals for SCL, SDA, RSTB, and RDYB.

The peripheral module includes Windows XP ® , Windows ® 7,  and  Windows  8.1-compatible  software  for  exercising the features of the IC. The peripheral module GUI allows different sample sizes, adjustable sampling rates, internal or external reference options, and graphing software that includes the FFT and histogram of the sampled signals.

The peripheral module can be powered by a local +3.3V supply and comes installed with a MAX11259AWX+ in a 36-bump WLP package.

## Features

- Various Sample Sizes and Sample Rates
- Time Domain, Frequency Domain, and Histogram Plotting
- On-Board Voltage Reference (MAX6072)
- Proven PCB Layout
- Fully Assembled and Tested
- Windows XP-, Windows 7-, and Windows 8.1-Compatible Software

Ordering Information appears at end of data sheet.

Pmod is a trademark of Digilent Inc.

Windows and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

<!-- image -->

Evaluates: MAX11259

## MAX11259PMB Peripheral Module

## MAX11259PMB Photo

<!-- image -->

│

Evaluates: MAX11259

## MAX11259PMB Peripheral Module

## System Block Diagram

<!-- image -->

## MAX11259PMB Peripheral Module Files

| FILE                              | DECRIPTION                |
|-----------------------------------|---------------------------|
| MAX11253_54_59EvkitSetupV1.12.exe | Application Program (GUI) |

## Quick Start

## Required Equipment

- MAX11259PMB
- +3.3V (50mA) for the MAX11259PMB
- Micro-USB cable
- USB2PMB2# adapter
- Function generator (optional)
- Windows XP, Windows 7, or Windows 8.1 PC with a spare USB port

Note: In  the  following  section(s),  software-related  items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

The  peripheral  module  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  peripheral  module  software, MAX11253\_54\_59EVkitSetupV1.12.zip. Save the peripheral module software to a temporary folder and uncompress the ZIP file.
- 2) Install the peripheral module software and USB driver on your computer by running the MAX11253\_54\_59EVkitSetupV1.12.exe  program  inside the temporary folder. The program files are cop -ied to your PC and icons are created in the Windows Start | Programs menu. At the end of the installation process the installer  will  launch  the  installer  for  the FTDIChip CDM drivers.
- 3) Verify that all jumpers are in their default positions for the peripheral module board (Table 1).

│

Evaluates: MAX11259

## MAX11259PMB Peripheral Module

- 4) Connect  the  PC  to  the  peripheral  module  via  the USB2PMB2 adapter board using a micro-USB cable.
- 5) Start  the  peripheral  module software by opening its icon in  the Start |  Programs menu. The peripheral module software appears as shown in Figure 1. From the Device menu select Standalone . Verify that the lower left status bar indicates the EV kit hardware is Connected .
- 6) Connect the positive terminal of the function generator  to  the  CH0+  (J11-1)  test  point  on  the  peripheral module. Connect the negative terminal of the function generator to the CH0- (J11-2) test point on the peripheral module.
- 7) Configure  the  signal  source  to  generate  a  100Hz, 1VP-P  sinusoidal wave with +1V offset.
- 8) Turn on the function generator.
- 9) In the configuration group of the Device menu, select Channel 0 and click Convert in  the  serial  interface menu.
- 10)  Click on the Scope tab.
- 11)  Check the Remove DC Offset checkbox to remove the DC component of the sampled data.
- 12)  Click the Capture button to start the data analysis.
- 13)  The peripheral module software appears as shown in Figure 1.
- 14)  Verify  that  the  frequency,  which  is  displayed  on  the right, is approximately 100Hz. The scope image has buttons in the upper right corner that allow zooming in to detail.

## Evaluates: MAX11259

Table 1. MAX11259PMB Board Jumper Settings

| HEADER    | JUMPER POSITION   | DESCRIPTION                                                    |
|-----------|-------------------|----------------------------------------------------------------|
| JMP1/JMP2 | 1-2*/1-2*         | Select address 0x30                                            |
| JMP1/JMP2 | 1-2/1-3           | Select address 0x31                                            |
| JMP1/JMP2 | 1-2/1-4           | Select address 0x33                                            |
| JMP1/JMP2 | 1-3/1-2           | Select address 0x34                                            |
| JMP1/JMP2 | 1-3/1-3           | Select address 0x35                                            |
| JMP1/JMP2 | 1-3/1-4           | Select address 0x37                                            |
| JMP1/JMP2 | 1-4/1-2           | Select address 0x3C                                            |
| JMP1/JMP2 | 1-4/1-3           | Select address 0x3D                                            |
| JMP1/JMP2 | 1-4/1-4           | Select address 0x3F                                            |
| J2        | 1-2               | Use MAX6072 VREF /2 as VCOM                                    |
| J2        | 2-3*              | Use GND as VCOM                                                |
| J4        | 1-2*              | Select +3.3V for DVDD                                          |
| J4        | Open              | Select user-provided supply for DVDD at J4-1                   |
| J5        | 1-2*              | Select +3.0V forAVDD                                           |
| J5        | Open              | Select user-provided supply for DVDD at J5-1                   |
| J6        | 1-2*              | Select GND for AVSS                                            |
| J6        | Open              | Select user-provided supply for AVSS at J6-1                   |
| J7        | Open*             | Use internal 1.8V subregulator if DVDD ≥ 2.0V                  |
| J7        | 1-2               | Use DVDD for internal logic if DVDD ≤ 2.0V                     |
| J8        | 1-2*              | Select VREF from the on-board MAX6072 as the voltage reference |
| J8        | 2-3               | SelectAVDD as the voltage reference                            |

*Default configuration

Evaluates: MAX11259

│

## MAX11259PMB Peripheral Module

## General Description of Software

The main window of the peripheral module software contains seven tabs: Configuration, Scope, DMM, Histogram, FFT,  Scan  Mode,  and  Registers.  The  Configuration  tab provides control for the ADC configuration including calibration and data capture. The other six tabs are used for evaluating the data captured by the ADC.

## Configuration Tab

The Configuration tab provides an interface for selecting and  configuring  the  ADC  from  a  functional  perspective. Select the desired Device in the drop-down menu and the corresponding properties of the device are displayed including Channel number, Sample Rate , Number of Samples , Reference  Voltage , Sequencing  Mode , Calibration , GPO/GPIO  selection , Input  Path  (Direct  or  internal PGA) , Delta-Sigma Modulator type selection for different Data  Format and Conversion  Mode , Serial  Interface function  ( Convert ,  and Read  All ), Power setting  ( NOP , Power Down , and Standby ), Reset Registers , and RSTB

Evaluates: MAX11259

Reset , Clock/SYNC ( Internal or External  Clock ,  and Disable or Enable SYNC Mode ), and Other for Disable or Enable Current Sink/Source and CAPREG LDO .

The sample settings are available on the left of the configuration menu, which allow the user to select the Channel , Sample Rate , and Number of Samples .

The Read Data and Status information  is  displayed  on the right, which shows the data in both voltage and Hex, the sample rate, and power state for the selected channel. In addition, if there are any errors, the indicator lights will turn red.

## Channel Selection

To  select  the  desired  channel  among  the  six  available channels, click Channel # drop-down menu at the top left and select the desired channel from 0 to 5. The default selection is Channel 0 .

Figure 1. Peripheral Module Software (Configuration Tab)

<!-- image -->

│

## MAX11259PMB Peripheral Module

## Sample Rate (SPS)

To select the desired data rate for single-cycle mode from 50sps  to  12800sps  and  for  continuous  mode  data  rate from 1.9sps to 64000sps, choose the Sample Rate (SPS) from the drop-down menu below the Channel # selection.

## Reference Voltage

There  are  two  different  reference  voltages  available  on board: MAX6072AUT18+ (2.5V), and AVDD (+3.0V). To select 2.5V, connnect J8-1 to J8-2. To select 3.0V, connect J8-2 to J8-3.

## Sequencer Mode

To  change  the  sequencer  mode,  click  the Sequence Mode selection below the Sequencing menu and select Mode 1, 2, or 3 as desired. Check the GPO Sequencer Mode box  to  enable  GPO/GPIO  function  in  mode  3.  In addition, check the Enable box to enable the MUX and GPO Delay .  Choose the desired delay in microseconds by clicking on the + or - buttons.

## ADC Calibration

Two types of software calibration for offset and gain are available: Self calibration and system calibration.

The primary mode for calibration is using the drop-down list  to  select a calibration mode, followed by clicking the Calibrate button.  The  checkboxes  for Self  Offset , Self Gain , System  Offset ,  and System  Gain allow  for  the user to enable or disable the calibration values. The calibration values can also be changed manually by entering a hex value in the numeric box.

## GPO/GPIO

To select GPO or GPIO ports, choose the option under the GPO/GPIO drop-down menu and check the Enable box.

## Input Path

Select Direct under the Input Path drop-down menu to bypass the internal amplifiers and apply the analog input signals directly to the MAX11259PMB inputs at J11.

Select PGA under the Input Path drop-down menu to use the internal programmable gain amplifiers.

## Delta-Sigma Modulator

To select the desired data format, click the Data Format drop-down  menu  under  the Delta-Sigma  Modulator section and choose either Bipolar or Unipolar with two's complement or offset binary options.

Three  conversion  modes  are  provided: Continuous , Single  Cycle , and Single  Continuous . Click the Conversion  Modes drop-down  menu  under  the Delta-

## Evaluates: MAX11259

Sigma Modulator section  to  select  the  desired  conversion mode.

## Serial Interface

To  starting  converting,  click  the Convert button  under the Serial interface section. To read all registers, click the Read All button.

## Power

The  MAX11259PMB  peripheral  module  features  three power-down  states: Normal  Operating  Power  (NOP) , Power  down , and  Standby .  Select  the  desired  power state  by  clicking  the  drop-down  menu  under  the Power section.

To reset the configuration settings back to default values, press the Reset Registers button.

To exercise the power-on reset feature, click the RSTB button.

## Clock/SYNC

The  internal  clock  mode  is  set  at  default  condition.  To use  user-supplied  external  clock,  select  External  under the Clock/SYNC section and connect the external clock signal  to  J9-1,  GPIO0/CLK  pin.  In  addition,  the  Sync mode can be enabled or disabled by clicking  the  dropdown menu under this Clock/SYNC section and connect the external sync signal to J9-2, GPIO1/SYNC. The Sync signal should be provided externally.

## Other

To enable (J7 open) or disable (J7 installed and V DDVD ≤ 2.0V) the internal CAPREG LDO for digital and I/O supply,  select  this  option  from  the  drop-down  menu  under the Other section. Additionally, Current Sink/Source can also be disabled or enabled under this section.

## Read Data and Status

The Read Data and Status on the far right hand side of this Configuration menu depicts the received data and status of the device such as the selected channel, data rate, sample rate, and power state. Click the Read Data and Status button to view the updated status.

To save a configuration, select Save ADC Config As… in the File menu. This saves all the ADC register values to a XML file. To load a configuration, select Load ADC Config in the File menu. When the XML file is loaded, all the register values in the file are written to the ADC.

│

## MAX11259PMB Peripheral Module

## Scope Tab

The Scope tab sheet is used to capture data and display it in the time domain. The desired Channel # , Sample Rate , Number of Samples , Display Unit , Average Samples , and Resolution Selection can also be set in this tab if they  were  not  appropriately  adjusted  in  other  tabs.  The Display  Unit drop-down  list  allows  counts  in  LSB  and voltages in V, mV, or µV. Once the desired configuration is

Evaluates: MAX11259

set, click on the Capture button. The right side of the tab sheet displays details of the waveform, such as average, standard deviation, maximum, minimum, and fundamental frequency as shown in Figure 2.

To save the captured data to a file, select Options &gt; Save Graph &gt; Scope . This saves the setting on the left and the data captured to a CSV file.

Figure 2. Peripheral Module Software (Scope Tab)

<!-- image -->

│

## MAX11259PMB Peripheral Module

## DMM Tab

The DMM tab sheet provides the typical information as a digital multimeter. Once the desired configuration is set,

click on the Capture button. Figure 3 displays the results shown by the DMM tab when a 1.5V signal is applied to AIN0+ and 1.0V to AIN0-.

Figure 3. Peripheral Module Software (DMM Tab)

<!-- image -->

## MAX11259PMB Peripheral Module

## Histogram Tab

The Histogram tab sheet is used to show the histogram of the data. Sample rate and number of samples can also be set in this tab if they were not appropriately adjusted in other tabs. Once the desired configuration is set, click on  the Capture button.  The  right  side  of  the  tab  sheet displays details of the histogram such as average, standard deviation, maximum, minimum, peak-to-peak noise, effective  resolution,  and  noise-free  resolution  as  shown

in Figure 4.

Figure 4. Peripheral Module Software (Histogram Tab)

<!-- image -->

Evaluates: MAX11259

The  histogram  tab  is  enabled  at  default.  Using  the histogram will slow down the GUI response. To disable it, check the Disable Histogram box.

To save the histogram data to a file, go to Options &gt; Save Graph &gt; Histogram .  This  saves  the  setting  on  the  left and the histogram data captured to a CSV file.

│

## MAX11259PMB Peripheral Module

## FFT Tab

The FFT tab sheet is used to display the FFT of the data. The Sample Rate , Number of Samples , Resolution and Window Function type can be set as desired. To calculate the Adjusted Input Signal frequency for Coherent Sampling , enter the Input Signal frequency in Hertz and push the Calculate button. Once the preferred configuration is set, click on the Capture button. The right side of the tab displays the performance based on the FFT, such as  fundamental  frequency,  SNR,  SINAD,  THD,  SFDR, ENOB, and Noise Floor as shown in Figure 5.

Evaluates: MAX11259

To  save  the  FFT  data  to  a  file,  go  to Options  &gt;  Save Graph &gt; FFT . This saves the setting on the left and the FFT data captured to a CSV file.

When  coherent  sampling  is  needed,  this  tab  allows the user to calculate the external clock frequency  applied  to  the  board.  Adjust  the  input  frequency of  the  low-jitter  clock  to  the  value  as  shown  in  the Adjusted Master Clock (Hz) and apply it to the EV KIT EXT\_CLK connector. See the Sync Input and Sync Output section before using this feature.

Figure 5. Peripheral Module Software (FFT Tab)

<!-- image -->

│

## MAX11259PMB Peripheral Module

Figure  6  shows  the  setup  Maxim  Integrated  uses  to capture data for coherent sampling.

For  coherent  FFT  evaluation,  use  the  jumper  settings from  Table  1  for  proper  configurations.  The  low-jitter clock is synchronized with the signal generator at 10MHz from  the  external  clock  generator.  To  achieve  coherent

Evaluates: MAX11259

sampling,  click  on  the Calculate button  and  enter  the Adjusted Master Clock (Hz) frequency of approximately 8.192MHz into our low-jitter clock. Timing for all I 2 C timing and sampling rate are based off the system clock.

Figure 6. Peripheral Module Coherent Sampling Setup

<!-- image -->

│

## MAX11259PMB Peripheral Module

## Scan Mode Tab

The Scan  Mode tab  is  used  to  perform  selected  data conversions and read the converted data.

In the Sequence Setting section at the bottom, set the desired  sequencer  mode  (2  or  3)  from  the Sequence Mode drop-down  menu  and  select  whether  to  assert the  RDYB  pin after  one  channel or after  scan  completes options  under the RDYB menu. Check the GPO Sequencer Mode and Enable boxes  as  desired.  Then set the conversion time delay in µs for MUX and GPO by clicking on the + or -buttons under the MUX Delay and GPO Delay menu,  allowing  for  high  impedance  source networks  to  stabilize  after  the  channels  are  selected.

Evaluates: MAX11259

Finally  press  the Read All button to  view  the  selected settings.

In the Read Data section on top, select the desired unit in either LSB or voltage (V, mV, or µV) under the Display Unit drop-down menu. Then choose the desired sample rate  by  clicking  on  the Sample  Rate drop-down  menu under.  Finally,  click  the  Scan  button  to  start  converting  and  press  the Read  Data button  to  view  the  converted data displayed on the right hand side as shown in Figure 7.

Figure 7. Peripheral Module Software (Scan Mode Tab)

<!-- image -->

│

## MAX11259PMB Peripheral Module

## ADC Registers Tab

The Registers tab  sheet shows the device registers on the left. The middle section shows the descriptions of the selected register. Click Read All to read all registers and refresh the window with the register settings. To write a register  first  select  the  hex  value  in  the Value column, type the desired hex value and press Enter .

The command byte is on the right side of the tab sheet. This byte precedes all I 2 C transactions and is described in  the  IC  data  sheet.  To  send  a  command  byte  enter  a hex value in the numeric box and click the Send button. The  command  byte  has  two  different  formats  including Conversion  Command and Register  Read/Write . Select the radio button for the desired mode to see the bit description in the table. See Figure 8.

## Detailed Description of Hardware

The MAX11259PMB peripheral module provides a proven signal  path  and  board  layout  to  demonstrate  the  performance  of  the  MAX11259AWX  24-bit,  delta-sigma  ADC. Included  in  the  peripheral  module  are  digital  isolators, ultra-low-noise LDOs to all supply pins of the IC, on-board reference (MAX6072), and sync-in and sync-out signals for coherent sampling.

The USB2PMB2 FTDI controller is provided to allow for evaluation  in  standalone  mode,  which  has  limitations on  maximum sample speed and on sample depth. The peripheral module can be used with FPGA to achieve full speed and a larger sample depth.

The  peripheral  module  supports  a  number  of  different devices as listed in Table 2.

Figure 8. Peripheral Module Software (ADC Registers Tab)

<!-- image -->

│

## MAX11259PMB Peripheral Module

## User-Supplied I 2 C

To  evaluate  the  peripheral  module  with  a  user-supplied I 2 C bus, apply the user-supplied I 2 C signals to J1. Make sure  the  return  ground  is  connected  to  MAX11259PMB ground.

## Voltage References

There  are  two  different  reference  voltages  available  on board:  MAX6072  (2.5V),  AVDD  (3.0V).  To  select  2.5V, connect J8-1 to J8-2. To select 3.0V, connect J8-2 to J8-3.

For user-supplied external references, remove jumper J8 and  connect  a  reference  voltage  to  J8-2.  Measure  and enter the value of the external reference voltage into the Reference Voltage edit box on the Configuration tab of the GUI. Table 2 depicts the reference source options.

## External DVDD Power Supply

The internal 1.8V regulator can be replaced by an external supply in the range of 1.7V to 2.0V. To use external DVDD, disable the  internal  regulator  by  selecting  the Disable  in  the CAPREG  LDO drop-down  menu  in  the Other section and install J7.

## User-Supplied Power Supply

The peripheral module receives power from a single DC source  of    +3.3V  (50mA)  through  the  standard  Pmod connector, J1, to provide supply to DVDD. The power is then regulated to +3.0V supply for AVDD and MAX6072 voltage reference. See the peripheral module schematic pdf for details. Specific voltages can be connected to the board, see Table 2 for corresponding jumper positions.

## Table 2. Reference Source Options

| REF SOURCE     | JUMPER   | CONNECTION                                    | FUNCTION                        |
|----------------|----------|-----------------------------------------------|---------------------------------|
| MAX6072 (2.5V) | J8       | 1-2                                           | Select U3 MAX6072               |
| AVDD           | J8       | 2-3                                           | SelectAVDD                      |
| User- Supplied | J8       | Open. Connect user-supplied reference to J8-2 | Select User- Supplied Reference |

## Table 3. Power Supply to the Board

| POWER             | JUMPERS   |
|-------------------|-----------|
| An external +3.3V | J1-6      |

│

## MAX11259PMB Peripheral Module

## External Clock For Coherent Sampling

Set the external low jitter clock generator with the value calculated by the GUI in the FFT tab. Connect the output of  the  clock  generator  to  GPIO0/CLK  pin  (J9-1).  The relationship  between  f IN ,  f S ,  N CYCLES ,  and  M SAMPLES is given as follows:

<!-- formula-not-decoded -->

where:

f IN  = Input frequency

f S = Sampling frequency

NCYCLES = Prime number of cycles in the sampled set

MSAMPLES = Total number of samples

Evaluates: MAX11259

## Component List, Schematics, and PCB Layout Diagrams

See the following links for component information, schematic diagrams, and PCB layout diagrams:

- MAX11259PMB BOM
- MAX11259PMB Schematics
- MAX11259PMB PCB Layout

## Ordering Information

| PART          | TYPE                                       |
|---------------|--------------------------------------------|
| MAX11259PMB#  | Peripheral Module                          |
| USB2PMB2#     | Munich Adapter Board                       |
| MAX11259SYS1# | Peripheral Module and Munich Adapter Board |

#Denotes RoHS compliant.

The MAX11259PMB# comes with a MAX11259AWX+ in a 36-bump WLP package.

│

## MAX11259PMB Peripheral Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. 0a[im Integrated reserves the right to change the circuitry and specifications Zithout notice at any time.

│

Evaluates: MAX11259

TITLE: Bill of Materials

DATE: 06/15/2015

DESIGN: MAX11259PMB rev A

|   ITEM |   QTY | REF DES                   | MFG PART #                                   | MANUFACTURER          | VALUE             | DESCRIPTION                                                                                                                                                                                                                  |
|--------|-------|---------------------------|----------------------------------------------|-----------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 |     7 | C1, C8, C12, C19-C21, C27 | C1608X7R1V105K080AC                          | TDK                   | 1UF               | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 35V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                                     |
|      2 |     7 | C2-C7, C25                | GRM1555C1H102JA01; C1005C0G1H102J050         | MURATA; TDK           | 1000PF            | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                                                                                                                                           |
|      3 |     6 | C9, C11, C15-C17, C26     | C0603C104K5RAC; C1608X7R1H104K               | KEMET; TDK            | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R;NOTE: NOT RECOMMENDED FOR NEW DESIGN USE 20-000u1-01                                                                              |
|      4 |     2 | C10, C18                  | C1608C0G1E103J                               | TDK                   | 0.01UF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 25V; TOL=5%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=C0G CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF;                                                                               |
|      5 |     5 | C13, C14, C22-C24         | C2012X7R1E475K125AB                          | TDK                   | 4.7UF             | 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                                                                                                                       |
|      6 |     1 | J1                        | TSW-106-08-S-D-RA                            | SAMTEC                | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS; THIS PART IS DEDICATED FOR PMOD PERIPHERAL BOARD                                                                                                                   |
|      7 |     2 | J2, J8                    | PCC03SAAN                                    | SULLINS               | PCC03SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                                                                                                                     |
|      8 |     1 | J3                        | PBC12SAAN                                    | SULLINS ELECTRONICS   | COPBC12SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 12PINS; -65 DEGC TO +125 DEGC                                                                                                                                            |
|      9 |     4 | J4-J7                     | PCC02SAAN                                    | SULLINS               | PCC02SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                                                                                                                     |
|     10 |     1 | J9                        | PBC07SAAN                                    | SULLINS ELECTRONICS   | COPBC07SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 7PINS; -65 DEGC TO +125 DEGC                                                                                                                                             |
|     11 |     1 | J10                       | PBC06SAAN                                    | SULLINS ELECTRONICS   | COPBC06SAAN       | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                                                                                                                             |
|     12 |     1 | J11                       | OSTVN12A150                                  | ON-SHORE TECHNOLOGY   | OSTVN12A150       | CONNECTOR; FEMALE; THROUGH HOLE; SCREW TYPE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 12PINS                                                                                                                                       |
|     13 |     2 | JMP1, JMP2                | 22-28-4043                                   | MOLEX                 | 22-28-4043        | CONNECTOR; MALE; THROUGH HOLE; FLAT VERTICAL BREAKAWAY; STRAIGHT; 4PINS                                                                                                                                                      |
|     14 |     6 | R1-R6                     | ERJ-3EKF28R0V                                | PANASONIC             |                   | 28 RESISTOR; 0603; 28 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                                                                                                                     |
|     15 |    12 | R7-R18                    | CRCW04021M00FK                               | VISHAY DALE           | 1M                | RESISTOR; 0402; 1M; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                                                          |
|     16 |    12 | R19-R30                   | CRCW040210R0FK; 9C04021A10R0FL               | VISHAY DALE           |                   | 10 RESISTOR; 0402; 10 OHM; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                                                                                   |
|     17 |     3 | R31, R34, R35             | CRCW060310K0FK; 9C06031A1002FK; ERJ-3EKF1002 | VISHAY DALE/YAGEO PHI | 10K               | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM TEST POINT; JUMPER; STR; TOTAL                                                                                                                                            |
|     18 |     7 | SU1-SU7                   | SX1100-B                                     | KYCON                 | SX1100-B          | LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED                                                                                                                                                     |
|     19 |     3 | TP1, TP3, TP7             | 5000                                         | KEYSTONE              | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                  |
|     20 |     3 | TP2, TP5, TP6             | 5001                                         | KEYSTONE              | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; |
|     21 |     1 | TP4                       |                                              | 5004 KEYSTONE         | N/A               | BRONZE WIRE SILVER PLATE FINISH; RECOMMENDED FOR BOARD THICKNESS=0.062IN; NOT FOR COLD TEST                                                                                                                                  |
|     22 |     1 | U1                        | MAX11259EWX+                                 | MAXIM                 | MAX11259EWX+      | EVKIT PART - IC; MAX11259; WLP36; OUTLINE DWG21-0898; PKG CODE W362C2+1                                                                                                                                                      |
|     23 |     1 | U2                        | MAX8510EXK29+                                | MAXIM                 | MAX8510EXK29+     | IC; VREG; ULTRA-LOW-NOISE; HIGH PSRR; LOW- DROPOUT; 0.12A LINEAR REGULATOR; SC70-5                                                                                                                                           |
|     24 |     1 | U3                        | MAX6072AAUB25+                               | MAXIM                 | MAX6072AAUB25+    | IC; VREF; HIG-PRECISION; DUAL-OUTPUT SERIES VOLTAGE REFERENCE; UMAX10                                                                                                                                                        |

TOTAL

90

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

SCL

SDA

CH0+

CH1+

CH0-

CH1-

CH2-

CH2+

CH3+

CH3-

CH4+

CH5+

CH4-

CH5-

OUT

OUT

+3.3V

8

J11

R2

R1

IN

1

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

28

28

7

8

9

10

11

12

J1-7

J1-8

J1-9

J1-10

J1-11

J1-12

J1

J1-1

J1-2

J1-3

J1-4

J1-5

J1-6

7

1

2

3

4

5

6

7

R3

R4

R5

R6

VCOM

R7

R8

R9

R10

R11

R12

R13

R14

R15

R16

R17

R18

28

28

28

28

IN

OUT

1M

1M

1M

1M

1M

1M

1M

1M

1M

1M

1M

1M

OUT

OUT

OUT

1

2

3

C1

1UF

RDYB

RSTB

SCL

OUT

SDA

+3.3V

J2

R19

R20

R21

R22

R23

R24

R25

R26

R27

R28

R29

R30

6

+3.3V

6

10

10

10

10

10

10

10

10

10

10

10

10

IN

C2

C3

C4

C5

C6

C7

C8

1UF

OUT

1000PF

OUT

OUT

1000PF

OUT

OUT

1000PF

OUT

OUT

1000PF

OUT

OUT

1000PF

OUT

OUT

1000PF

OUT

C9

0.1UF

1

3

DVDD

RSTB

AIN0P

AIN0N

AIN1P

AIN1N

AIN2P

AIN2N

AIN3P

AIN3N

AIN4P

AIN4N

AIN5P

AIN5N

U2

MAX8510EXK30+

IN

OUT

SHDN

GND

2

BP

OUT

OUT

R31

10K

5

4

C10

0.01UF

5

C11

0.1UF

5

TP1

C14

4.7UF

J3

PBC12SAAN

1

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

IN

C12

1UF

1

C16

0.1UF

+3.0V

J4

TP2

REFP

2

OUT

IN

C13

4.7UF

AGND

4

+3.3V

AVSS

RSTB

GPIO2

GPIO1/SYNC

GPIO0/CLK

SDA

SCL

C15

0.1UF

AIN5N

AIN5P

AIN4N

AIN4P

AIN3N

AIN3P

AIN2N

AIN2P

AIN1N

AIN1P

AIN0N

AIN0P

+3.0V

IN

4

AVDD

AVSS

IN

IN

IN

IN

IN

IN

IN

ADR1

ADR0

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

IN

OUT

OUT

C18

IN

IN

AVDD

AVSS

C17

0.1UF

C19

1UF

TP3

C22

4.7UF

TP4

0.01UF

IN

IN

D3

F6

E4

E6

E2

E1

C3

C2

F1

F2

A6

B6

A5

B5

B4

A4

B3

A3

B2

A2

B1

A1

C26

0.1UF

9

10

4

5

1

1

C1

AVSS

RSTB

GPIO2

GPIO1/SYNC

GPIO0/CLK

SDA

SCL

U1

MAX11259EWX+

REFN

REFP

ADR1

ADR0

AIN5N

AIN5P

AIN4N

AIN4P

AIN3N

AIN3P

AIN2N

AIN2P

AIN1N

AIN1P

AIN0N

AIN0P

CAPREG

CAPP

CAPN

1

DVDD

DVDD

E3

F4

C21

1UF

AVDD

D1

C20

1UF

U3

MAX6072AAUB25+

EN1

OUT1F

IN1

EN2

IN2

GND

3

OUT1S

OUT2F

OUT2S

GND

8

2

6

7

C6

AVSS

3

J5

J6

TP5

F3

D6

DGND

GPOGND

3

2

2

RDYB

GPO2

GPO1

GPO0

IN

+3.0V

IN

AVSS

D2

D5

D4

E5

F5

C5

C4

1

C27

J7

1UF

C25

1000PF

IN

DVDD

C23

4.7UF

C24

4.7UF

2

REFP

GPIO0/CLK

2

OUT

IN

GPIO1/SYNC

GPIO2

GPO0

GPO1

GPO2

AVSS

IN

IN

IN

IN

RDYB

GPO2

GPO1

GPO0

IN

DVDD

OUT

VREF

OUT

VCOM

PROJECT TITLE:

DRAWING TITLE:

SIZE:

HARDWARE NUMBER:

&lt;HARDWARE\_NUMBER&gt;

C C

C C

ENGINEER:

&lt;ENGINEER&gt;

2

DRAWN BY:

&lt;DRAWN\_BY&gt;

TEMPLATE REV.:

&lt;TEMPLATE\_REVISION&gt;

1

IN

IN

IN

IN

IN

IN

TP7

TP6

R34

10K

VREF

AVDD

ADR1

ADR0

DVDD

SCL

SDA

RDYB

1

3

J9

R32

2.2K

DNI

OUT

OUT

IN

RSTB

OUT

MAX11259PMB

IN

IN

1

2

3

4

5

6

7

IN

IN

IN

2

J8

R35

10K

GPIO0/CLK

GPIO2

GPIO1/SYNC

GPO0

GPO1

GPO2

GPOGND

2

1

JMP1

1

JMP2

4

2

4

R33

2.2K

DNI

1

3

3

1

2

3

4

5

6

IN

IN

IN

IN

AGND

DVDD

SDA

AGND

DVDD

SDA

J10

DATE:

REV.:

A

SHEET 1 OF

1

5/08/2015

F

E

D

C

B

A