<!-- lastmod 2022-08-05 -->
## MAX11192/MAX11195/MAX11198 Evaluation Kits

## General Description

The MAX11192/MAX11195/MAX11198 evaluation kits (EV kits) provide a proven design to evaluate the MAX11192/ MAX11195/MAX11198  16-/14-/12-bit,  2-channel,  2Msps, fully differential simultaneously sampling SAR ADCs with an internal reference. The EV kits include an evaluation board and a graphical user interface (GUI) that provides communication from the target device to the PC through a ZedBoard™ with a Xilinx Zynq ® -7000 SoC. The EV kits are  connected  to  a  ZedBoard  through  a  low-pin-count FMC  connector  and  a  ZedBoard  connected  to  the  PC through an Ethernet port.

The  EV  kits  include  Windows  XP ® ,  Windows ®   7  and Windows 8 compatible software for exercising the features of  the  IC.  The  EV  kit  GUI  allows  different  sample  sizes, adjustable  sampling  rates,  and  graphing  software  that includes the FFT and histogram of the sampled signals.

The  EV  kits  can  be  powered  by  +12V  supply  from  a ZedBoard or by an external power supply. The EV kits have two DC-DC converters and a 5V LDO, which provide all necessary supplies for operation with a ZedBoard.

The MAX11192 EV kit comes installed with a MAX11192ATE+, the MAX11195 EV kit with a MAX11195ATE+,  and  the  MAX11198  EV  kit  with  a MAX11198ATE+. They each are packaged in a 16-pin, 2mm x 3mm TQFN-EP.

The EV kits aim to be used with an external resolver or encoder to monitor and measure degrees of rotation or absolute position of the rotor at any given moment.

Windows and Windows XP are registered trademarks of Microsoft Corporation.

ZedBoard is a trademark of Avnet Corp.

Zynq is a registered trademark of Xilinx, Inc.

## Features

- 50MHz SPI Clock Capability through FMC Connector
- Various Sample Sizes and Sample Rates
- Collects Up to 1 Million Samples
- Time Domain, Frequency Domain, and Histogram Plotting
- Sync In and Sync Out for Coherent Sampling
- On-Board Input Buffers: MAX44242 and MAX4432 (Unipolar to Differential)
- On-Board External Voltage Reference: MAX6126
- Proven PCB Layout
- Evaluates:
- 12-bit MAX11192
- 14-bit MAX11195
- 16-bit MAX11198
- Fully Assembled and Tested
- Windows XP, Windows 7, Windows 8, and Windows 10 Compatible Software

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## EV Kit Photo

<!-- image -->

│

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## System Block Diagram

<!-- image -->

## MAX11192/MAX11195/MAX11198 EV Kit Files

| FILE                       | DESCRIPTION                              |
|----------------------------|------------------------------------------|
| MAX11198EVKitSetupV1.0.exe | Application program (GUI)                |
| BOOT.bin                   | ZedBoard firmware (SD card to boot Zynq) |

│

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## Quick Start

## Required Equipment

- MAX11192, MAX11195, or MAX11198 EV kit (includes SD card with firmware)
- ZedBoard FPGA platform (optional NOT INCLUDED with EV kit)
- Function generator or an external resolver (optional)
- Windows XP, Windows 7, or Windows 8 PC with an Ethernet port

Note: In  the  following  section(s),  software-related  items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1) Visit MAX11192\_95\_98 ADCs EV Kit Software to download the latest version of the EV kit software, MAX11198EVkitSetupV1.00.zip. The same software (MAX11198) supports all members of the MAX11192/ MAX11195/MAX11198 family. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the MAX11198\_EVKitSetupV1.0.exe program inside the temporary folder. The program files are copied to your PC and icons are created in the Windows Start | Programs menu.
- 3) Connect the Ethernet cable from the PC to the ZedBoard and configure the Internet Protocol Version 4 (TCP/Ipv4) properties in the local area Connection to IP address 192.168.1.2 and subnet Mask to 255.255.255.0.
- 4) Verify that the ZedBoard SD card contains the BOOT .bin file for the MAX11192/MAX11195/MAX11198 EV

## Table 1. ZedBoard Jumper Settings

| JUMPER                     | SHUNT POSITION      | DESCIPTION                                         |
|----------------------------|---------------------|----------------------------------------------------|
| J18                        | 1-2                 | Select 3.3V for VADJ (OVDD)                        |
| J18                        | 3-4                 | Select 2.5V for VADJ (OVDD)                        |
| J18                        | 5-6                 | Select 1.8V for VADJ (OVDD)                        |
| JP11 JP10 JP9 JP8 JP7 JP10 | 2-3 1-2 1-2 2-3 2-3 | Boot from SD card                                  |
| J12                        | NA                  | SD card installed                                  |
| J20                        | NA                  | Connected to 12V wall adapter                      |
| SW8                        | OFF                 | ZedBoard power switch, OFF while connecting boards |

│

Evaluates: MAX11192/

MAX11195/MAX11198

kits. In case the ZedBoard's SD card needs to be replaced, extract BOOT.bin from the included zip file (which can be found in the Program Files - Maxim Integrated - MAX11198EVKit - ZedBoard folder). Use

an imagewriter utility to copy BOOT .bin into the SD card.

- 5) Connect the EV Kit FMC connector to the ZedBoard FMC connector. Gently press them together.
- 6) Verify that all jumpers are in their default positions for the ZedBoard (Table 1) and EV kit board (Table 2).
- 7) Connect the 12V power supply to the ZedBoard. Leave the ZedBoard powered off.
- 8) Enable the ZedBoard power supply by sliding SW8 to ON and connect the +12V adapter to the EV kit.
- 9) Start the EV kit software by opening its icon in the Start | Programs menu. The EV kit software appears as shown in Figure 1. From the Device menu select FPGA . Verify that the lower left status bar indicates the EV kit hardware is Connected . The following configuration is used to verify functionality of simultaneous sampling of the same signal from signal generator applied to both channels.
- 10)  Connect the positive terminal of the function generator to the AIN0D+ (TP1) test point on the EV kit. Connect the negative terminal of the function generator to the AIN0D- (TP2) test point on the EV kit.
- 11) Configure the signal source to generate a 100Hz, 1VP-P sinusoidal wave with +1V offset.
- 12)  Turn on the function generator.
- 13)  Click on the Scope tab.
- 14)  Check the Remove DC Offset checkbox to remove the DC component of the sampled data.
- 15)  Click the Capture button to start the data analysis.
- 16)  The EV kit software appears as shown in Figure 1.
- 17)  Verify the frequency is approximately 100Hz is displayed on the right. The scope image has buttons in the upper-right corner that allow zooming in to detail.

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## Table 2. MAX11198 Board Jumper Settings

| HEADER   | JUMPER POSITION   | DESCRIPTION                                                                                                                    |
|----------|-------------------|--------------------------------------------------------------------------------------------------------------------------------|
| J2       | Open*             | Use differential input to Channel 1                                                                                            |
| J2       | 1-2               | Use single-ended input to Channel 1 referenced to GND                                                                          |
| J3       | Open*             | Use differential input to Channel 2                                                                                            |
| J3       | 1-2               | Use single-ended input to Channel 2 referenced to GND                                                                          |
| J4       | Open*             | TP2 is disconnected to Channel 1 input                                                                                         |
| J4       | 1-2               | TP2 is connected to Channel 1 input                                                                                            |
| J5       | Open*             | TP2 is disconnected to Channel 2 input                                                                                         |
| J5       | 1-2               | TP2 is connected to Channel 2 input                                                                                            |
| J6       | 1-2               | Use U1.A as input buffer to Channel 1 negative input                                                                           |
| J6       | 2-3*              | Bypass U1.A                                                                                                                    |
| J7       | 1-2               | Use U1.B as input buffer to Channel 1 positive input                                                                           |
| J7       | 2-3*              | Bypass U1.B                                                                                                                    |
| J8       | 1-2               | Use U2.A as input buffer to Channel 2 negative input                                                                           |
| J8       | 2-3*              | Bypass U2.A                                                                                                                    |
| J9       | 1-2               | Use U2.B as input buffer to Channel 2 positive input                                                                           |
| J9       | 2-3*              | Bypass U2.B                                                                                                                    |
| J10      | Open*             | For independent Channel 1 and Channel 2 measurements                                                                           |
| J10      | 1-2               | Short IN1+ to IN2+ for single input to both channels                                                                           |
| J11      | Open*             | For independent Channel 1 and Channel 2 measurements                                                                           |
| J11      | 1-2               | Short IN1- to IN2- for single input to both channels                                                                           |
| J12      | Open              | Use J12.2 to supply an external voltage to AVDD                                                                                |
| J12      | 1-2*              | Use onboard +5V to AVDD                                                                                                        |
| J13      | Open*             | Use an external reference                                                                                                      |
| J13      | 1-2*              | Generates REFIN/2 for differential buffers (U3, U4)                                                                            |
| J14      | Open*             | Disconnect U14 output from J13 and U15. U15 uses U5 internal reference to generate REFIN/2 for U3 and U4 differential buffers. |
| J14      | 1-2*              | Connect U14 to J13 and U15. U15 generates REFIN/2 = 2.048V for U3 and U4 differential buffers.                                 |
| J15      | 1-2               | Use external OVDD                                                                                                              |
| J15      | 2-3*              | Use OVDD voltage from ZedBoard. See J18 selection in Table 1.                                                                  |
| J22      | 1-2*              | Enable U12 and U13 DC-DC converters to generate ±6.5V                                                                          |
| J22      | 2-3               | Disable U12 and U13; it is also recommended to open J24 and J25                                                                |
| J23      | 1-2*              | Use +12V from ZedBoard to power EV kit                                                                                         |
| J23      | Open              | Use an external +12V supply to J20 or J21                                                                                      |
| J24      | 1-2*              | Use -6.5V from U13                                                                                                             |
| J24      | Open              | Use an external -6.5V to TP21                                                                                                  |
| J25      | 1-2*              | Use +6.5V from U12                                                                                                             |
| J25      | Open              | Use an external +6.5V to TP22                                                                                                  |
| J26      | Open*             | Disconnect U7 output from TP2                                                                                                  |
| J26      |                   |                                                                                                                                |

*Default position.

Evaluates: MAX11192/

MAX11195/MAX11198

│

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## Table 2. MAX11198 Board Jumper Settings

| HEADER   | JUMPER POSITION   | DESCRIPTION                                                 |
|----------|-------------------|-------------------------------------------------------------|
| J301     | 1-2               | U3A direct input from AIN1+                                 |
| J301     | Open*             | U3A input resistor R301                                     |
| J302     | 1-2               | U3A unity gain follower                                     |
| J302     | Open*             | U3A feedback through R302 and C302                          |
| J303     | 1-2               | U3A circuit is not used; AIN1+ directly drives BUFOUT1-     |
| J303     | 2-3*              | U3A (MAX4432) buffers AIN1+ to BUFOUT1-                     |
| J303     | Open              | U3A circuit is not used; BUFOUT1- must be driven externally |
| J311     | 1-2               | U3B direct input from AIN1-                                 |
| J311     | Open*             | U3B input resistor R311                                     |
| J312     | 1-2               | U3B unity gain follower                                     |
| J312     | Open*             | U3B feedback through R312 and C312                          |
| J313     | 1-2               | U3B circuit is not used; AIN1- directly drives BUFOUT1+     |
| J313     | 2-3*              | U3B (MAX4432) buffers AIN1- to BUFOUT1+                     |
| J313     | Open              | U3B circuit is not used; BUFOUT1+ must be driven externally |
| J401     | 1-2               | U4A direct input from AIN2+                                 |
| J401     | Open*             | U4A input resistor R401                                     |
| J402     | 1-2               | U4A unity gain follower                                     |
| J402     | Open*             | U4A feedback through R402 and C402                          |
| J403     | 1-2               | U4A circuit is not used; AIN2+ directly drives BUFOUT2-     |
| J403     | 2-3*              | U4A (MAX4432) buffers AIN2+ to BUFOUT2-                     |
| J403     | Open              | U4A circuit is not used; BUFOUT2- must be driven externally |
| J411     | 1-2               | U4B direct input from AIN2-                                 |
| J411     | Open*             | U4B input resistor R411                                     |
| J412     | 1-2               | U4B unity gain follower                                     |
| J412     | Open*             | U4B feedback through R412 and C412                          |
| J413     | 1-2               | U4B circuit is not used; AIN2- directly drives BUFOUT2+     |
| J413     | 2-3*              | U4B (MAX4432) buffers AIN2- to BUFOUT2+                     |
| J413     | Open              | U4B circuit is not used; BUFOUT2+ must be driven externally |

*Default position.

Evaluates: MAX11192/

MAX11195/MAX11198

│

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## General Description of Software

The  main  window  of  the  EV  kit  software  contains  five tabs: System , Scope , DMM , Histogram ,  and FFT .  The System tab  provides  control  for  the  ADC  configuration including  calibration  and  single  data  capture.  The  other four  tabs  are  used  for  evaluating  the  data  captured  by the ADC.

## System Tab

The System tab allows to select Sample Rate , Number of  Samples , Clock  Source for  coherent  sampling  and for SPI interface, as well as EV kit Device resolution from

Evaluates: MAX11192/

MAX11195/MAX11198

corresponding pulldown menu. There is a block diagram of the EV kit and Calibration section for convenience.

The Read Data information is displayed on the right, which shows the data in both voltage and LSB, see Figure 1.

## Sample Rate (SPS)

To select the desired data rate choose the Sample Rate (SPS) pulldown menu. The sampling rate is available from 1000sps to 2000000sps.

## Number of Samples

The Number of Samples pulldown menu allows choosing from 1 up to 1048576 samples to be captured.

Figure 1. EV Kit Software (Configuration Tab)

<!-- image -->

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## Reference Voltage

The  Reference  Voltage  selection  should  match  with  the jumper settings refer to Table 2. A user can select either internal or external reference voltage. The internal reference is fixed to 2.5V. The external reference can be from 2.5V to 4.75V. Use '+' or '-″ buttons to adjust the actual voltage reference, or simply type in a new value.

## ADC Calibration

The ADC Calibration section allows each channel to be calibrated independently.

## Scope Tab

The Scope tab  sheet  is  used  to  capture  data  and  display it in the time domain. The desired Sampling Rate ,

Evaluates: MAX11192/

## MAX11195/MAX11198

Number of Samples , Display Unit , Average Samples , and Resolution  Selection can  be  set  in  this  tab  if they  were  not  appropriately  adjusted  in  other  tabs.  The Display  Unit pull-down  list  allows  counts  in  LSB  and voltages in V, mV, or µV. Once the desired configuration is set, click on the Capture button. The right side of the tab  sheet  displays  details  of  the  waveform,  such  as  the Average,  Standard  Deviation,  Maximum,  Minimum,  and Fundamental  Frequency  for  each  channel  as  shown  in Figure 2.

To save the captured data to a file, select Options &gt; Save Graph &gt; Scope . This saves the setting on the left and the data captured to a CSV file.

Figure 2. EV Kit Software (Scope Tab)

<!-- image -->

│

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## DMM Tab

The DMM tab sheet provides the typical information as a digital multimeter. Once the desired configuration is set, click  the Capture button.  Figure  3  displays  the  results shown by the DMM tab when no signal is applied to both channels.

## Histogram Tab

The Histogram tab sheet is used to show the histogram of  the  data.  Sampling  rate  and  number  of  samples  can also be set in this tab if they were not appropriately adjusted  in  other  tabs.  Once  the  desired  configuration  is  set, click the Capture button. The right side of the tab sheet displays  details  of  the  histogram  such  as  the  Average, Standard  Deviation,  Maximum,  Minimum,  Peak-to-Peak Noise,  Effective  Resolution,  and  Noise-Free  Resolution as shown in Figure 4.

The Histogram tab is enabled at default. Using the histogram  will  slow  down  the  GUI  response.  To  disable  it, check the Disable Histogram box.

Evaluates: MAX11192/

MAX11195/MAX11198

To save the histogram data to a file, go to Options &gt; Save Graph &gt; Histogram .  This  saves  the  setting  on  the  left and the histogram data captured to a CSV file.

## FFT Tab

The FFT tab sheet is used to display the FFT of the data. The Sample  Rate , Number  of  Samples , Resolution Selection ,  and  type Window  Function can  be  set  as desired.  To  calculate  the Adjusted  Input  Signal frequency for Coherent Sampling , type in the Input Signal frequency in Hertz and GUI automatically calculates the master clock needs to be applied for coherent sampling and vice versa. Once the preferred configuration is set, click  on  the Capture button.  The  right  side  of  the  tab displays  the  performance  based  on  the  FFT,  such  as Fundamental  Frequency,  SNR,  SINAD,  THD,  SFDR, ENOB, and Noise Floor as shown in Figure 5.

To  save  the  FFT  data  to  a  file,  go  to Options  &gt;  Save Graph &gt; FFT . This saves the setting on the left and the FFT data captured to a CSV file.

Figure 3. EV Kit Software (DMM Tab)

<!-- image -->

│

Figure 4. EV Kit Software (Histogram Tab)

<!-- image -->

Figure 5. EV Kit Software (FFT Tab)

<!-- image -->

## MAX11192/MAX11195/MAX11198 Evaluation Kits

When  coherent  sampling  is  needed,  this  tab  allows the  user  to  calculate  the  input  signal  applied  to  the board.  Adjust the input frequency of the low-jitter clock  to  the  value  as  shown  in  the Adjusted  Input Signal  (Hz) and  apply  it  to  the  EV  KIT  SYNC\_CLK\_ IN  connector.  See  the Sync  Input  and  Sync  Output (for coherent sampling) section before using this feature.

Figure 6 shows the setup Maxim Integrated uses to capture data for coherent sampling.

Figure  7  shows  the  coherent  FFT  signal.  Use  the jumper  settings  from  Table  2  for  proper  configurations. The low-jitter clock is synchronized with the signal generator at 10MHz from the ZedBoard. To achieve coherent sampling,  click  on  the Calculate button  and  enter  the Adjusted Input Signal (Hz) into  low-jitter  clock.  Timing for  all  SPI  timing  and  sampling  rate  are  based  off  the system clock.

## User-Supplied SPI

To  evaluate  the  EV  kit  with  a  user-supplied  SPI  bus, disconnect the board from the ZedBoard. Apply the usersupplied  SPI  signals  to  SCLK,  CNVST,  DOUT1,  and DOUT2 to J17. Make sure the return ground from J17.15 is  connected  to  master  ground.  Connect  J15  pin  3  (or R104) to OVDD logic supply, so that DOUT1\_ADV\_BUFF and DOUT2\_ADV\_BUFF outputs are driven. Otherwise, the board will not work.

## FMC Interface

The  users  should  confirm  compatibility  of  pin-usage between their own FMC implementation and that of the Maxim EV kit before connecting  the  Maxim  EV  kit  to  a different system with FMC connectors.

Figure 6. EV Kit Coherent Sampling Setup

<!-- image -->

Evaluates: MAX11192/

MAX11195/MAX11198

│

## MAX11192/MAX11195/MAX11198 Evaluation Kits

Evaluates: MAX11192/

MAX11195/MAX11198

Figure 7. MAX11198 EV Kit (16-Bit) Coherent Sampling (FFT Tab)

<!-- image -->

## External OVDD Power Supply

An external OVDD voltage can supply to TP12 in range from 1.8V to 3.6V. The J15 shunt should be set in the 1-2 position.

## User-Supplied Power Supply

The EV kit receives power from ZedBoard or from a single DC  source  of  12V,  200mA  through  a  J26  power  jack. The  two  MAX17552  DC-DC  converters  generate  +6.5V and -5V, and the +6.5V power is then regulated down to +5V by MAX15006B. These +5V/-5V supplies power the buffers,  U1  and  U2,  and  single-ended  to  differential amplifiers,  U3  and  U4.  See  the  EV  kit  schematic  for details. User can supply an external +6.5V to TP22 and -5V to TP21 to reduce the influence of DC-DC converter switching frequency. In this case, the J23, J24, and J25 shunts must be removed.

## ADC Input Amplifiers

The  analog  front-end  conditioner  for  each  channel includes the input low-pass filter (1kΩ resistor and 1000pF capacitor), the MAX44242 input buffer and the MAX4432 op  amp.  Note  that  the  MAX44242  and  MAX4432  offer different performance characteristics for evaluation.

│

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## Sync Input and Sync Output (for coherent sampling)

Sync  Input  and  Sync  Output  is  applicable  to  the  FPGA (ZedBoard)  and  is  not  used  in  Standalone  mode.  The SYNC\_IN SMA accepts an approximate 100MHz waveform signal to generate the system clock of the ZedBoard. For  maximum  performance,  use  a  low-jitter  clock  that syncs to the user's analog function generator. The SYNC\_ OUT SMA outputs a 10MHz square waveform that syncs to the user's analog function generator. Both options are used for coherent sampling of the IC. Use only one option at a time. The relationship between f IN , f S , N CYCLES , and MSAMPLES is given as follows:

<!-- formula-not-decoded -->

where:

f IN  = Input frequency

f S = Sampling frequency

NCYCLES = Prime number of cycles in the sampled set

MSAMPLES = Total number of samples

## Evaluating the MAX11192

The  MAX11192  is  the  12-bit  version  of  the  MAX11198. When  configured  to  evaluate  the  MAX11192,  U5  is replaced  with  MAX11192ATE+  (top  mark  +AAB  NAB instead  of  +AAF  NAB).  When  using  the  software  GUI, the  System  tab  Device  drop-down  box  must  be  set  to MAX11192.

## Evaluating the MAX11195

The  MAX11195  is  the  14-bit  version  of  the  MAX11198. When  configured  to  evaluate  the  MAX11195,  U5  is replaced  with  MAX11195ATE+  (top  mark  +AAD  NAB instead  of  +AAF  NAB).  When  using  the  software  GUI, the  System  tab  Device  drop-down  box  must  be  set  to MAX11195.

Evaluates: MAX11192/

MAX11195/MAX11198

│

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## MAX11198 EV Kit Bill of Materials

|   ITEM | REF_DES                                                                                                              | DNI/ DNP QTY   | MFG PART #                                                                                                                                    | MFG                                          | VALUE   | DESCRIPTION                                                                                                 | COMMENTS   |
|--------|----------------------------------------------------------------------------------------------------------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|---------|-------------------------------------------------------------------------------------------------------------|------------|
|      1 | C1, C100, C101                                                                                                       | -              | 3 TPSC226K025R0275                                                                                                                            | AVX                                          | 22UF    | CAPACITOR; SMT; 6032; TANTALUM; 22uF; 25V; 10%; TPS; -55degC to +125degC                                    |            |
|      2 | C2-C5, C8-C11, C302, C312, C402, C412                                                                                | -              | 12 GRM1885C1H102JA01; C1608C0G1H102J080AA; GCM1885C1H102JA16                                                                                  | MURATA;TD K;MURATA                           | 1000PF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC                          |            |
|      3 | C6, C7, C14, C15, C31, C35, C57, C67, C116                                                                           | -              | 9 GRM21BR61E106K;C2012X5R1E 106K085AC125AB;C2012X5R1E1 06K085AC                                                                               | MURATA;TD K;TDK                              | 10UF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X5R           |            |
|      4 | C12, C13, C16, C17, C32, C33, C36, C37, C39, C40, C55, C56, C61, C65, C70, C73, C78, C81, C82, C84, C115, C304, C404 | -              | 23 CC0603KRX7R0BB104;GRM188 R72A104KA35;GCJ188R72A104 KA01;HMK107B7104KA;06031C1 04KAT2A                                                      | YAGEO; MURATA; MURATA; TAIYO YUDEN; AVX      | 0.1UF   | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                 |            |
|      5 | C30, C34                                                                                                             | -              | 2 TMK212BBJ106KG-T; CL21A106KAFN3N                                                                                                            | TAIYO YUDEN; SAMSUNG ELECTRO- MECHANI        | 10UF    | CAPACITOR; SMT (0805); CERAMIC CHIP; 10UF; 25V; TOL=10%; MODEL=; TG=-55 DEGC TO +85 DEGC; TC=X5R            |            |
|      6 | C38, C54, C74-C77, C85, C114                                                                                         | -              | 8 UMK107AB7105KA;CC0603KRX7 R9BB105                                                                                                           | TAIYO YUDEN; YAGEO                           | 1UF     | CAPACITOR; SMT (0603); CERAMIC CHIP; 1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                    |            |
|      7 | C41, C42                                                                                                             | -              | 2 C0402H102J5GAC                                                                                                                              | KEMET                                        | 1000PF  | CAPACITOR; SMT (0402); CERAMIC CHIP; 1000PF; 50V; TOL=5%; MODEL=HT SERIES; TG=-55 DEGC TO +200 DEGC; TC=C0G |            |
|      8 | C43, C46, C48, C51, C52                                                                                              | -              | 5 C1608X5R1E106M080AC;CL10A 106MA8NRNC;GRM188R61E106 MA73;ZRB18AR61E106ME01;GR T188R61E106ME13                                                | TDK; SAMSUNG ELECTRONI CS; MURATA; MURATA    | 10UF    | CAPACITOR; SMT (0603); CERAMIC CHIP; 10UF; 25V; TOL=20%; TG=-55 DEGC TO +85 DEGC; TC=X5R                    |            |
|      9 | C44, C47, C49, C50, C53                                                                                              | -              | 5 CGA2B3X7R1H104K050BB;C100 5X7R1H104K050BB;GRM155R71 H104KE14;GCM155R71H104KE0 2;C1005X7R1H104K050BE;UMK1 05B7104KV- FR;CGA2B3X7R1H104K050BE | TDK;TDK;M URATA;MUR ATA;TDK;TA IYO YUDEN;TDK | 0.1UF   | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                  |            |
|     10 | C45, C58, C59, C71, C72                                                                                              | -              | 5 GMK212B7105KG;GRM219R7YA 105KA12                                                                                                            | TAIYO YUDEN;MUR ATA                          | 1.0UF   | CAPACITOR; SMT (0805); CERAMIC; 1UF; 35V; TOL=10%; MODEL=GMK SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R       |            |
|     11 | C62-C64, C68                                                                                                         | -              | 4 C0603X7R500103JNP;C0603C10 3J5RAC                                                                                                           | VENKEL LTD;KEMET                             | 0.01UF  | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.01UF; 50V; TOL=5%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/        |            |

│

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## MAX11198 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                      | DNI/ DNP QTY   | MFG PART #                                                                                         | MFG                                   | VALUE             | DESCRIPTION                                                                                                        | COMMENTS   |
|--------|--------------------------------------------------------------|----------------|----------------------------------------------------------------------------------------------------|---------------------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------|------------|
|     12 | C66                                                          | -              | 1 C0603C101J5GAC;ECJ- 1VC1H101J;C1608C0G1H101J08 0AA;GRM1885C1H101JA01;CL10 C101JB81PN             | KEMET;PAN ASONIC;TD K;MURATA; SAMSUNG | 100PF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 100PF; 50V; TOL=5%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=COG               |            |
|     13 | C69, C79, C80, C104-C106, C108                               | -              | 7 C0603C102K1GAC;C1608C0G2A 102K080AA                                                              | KEMET;TDK                             | 1000PF            | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=               |            |
|     14 | C102, C103                                                   | -              | 2 C1206C105K3RAC;ECJ- 3YB1E105K                                                                    | KEMET;PAN ASONIC                      | 1UF               | CAPACITOR; SMT (1206); CERAMIC CHIP; 1UF; 25V; TOL=10%; MODEL=X7R; TG=-55 DEGC TO +125 DEGC; TC=+/-                |            |
|     15 | C107, C109                                                   | -              | 2 GRM31CR71E106KA12; CL31B106KAHNNN                                                                | MURATA;SA MSUNG ELECTRONI CS          | 10UF              | CAPACITOR; SMT (1206); CERAMIC CHIP; 10UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                          |            |
|     16 | C110-C113                                                    | -              | 4 TMK212AB7475K;CGJ4J1X7R1E 475K125AC;C2012X7R1E475K12 5AB;CGA4J1X7R1E475K125AC; GRM21BZ71E475KE15 | TAIYO YUDEN; TDK; TDK; TDK; MURATA    | 4.7UF             | CAPACITOR; SMT (0805); CERAMIC CHIP; 4.7UF; 25V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                         |            |
|     17 | CON1                                                         | -              | 1 ASP-134604-01                                                                                    | SAMTEC                                | ASP- 134604-01    | CONNECTOR; MALE; SMT; HIGH SPEED/HIGH DENSITY OPEN PIN FIELD TERMINAL ARRAY; STRAIGHT; 160PINS                     |            |
|     18 | D1                                                           | -              | 1 MMSZ5226BS-7-F                                                                                   | DIODES INCORPOR ATED                  | 3.3V              | DIODE; ZNR; SMT (SOD-323); Vz=3.3V; Izm=0.01A                                                                      |            |
|     19 | D2                                                           | -              | 1 B0530WS-7-F                                                                                      | DIODES INCORPOR ATED                  | B0530WS- 7-F      | DIODE; SCH; SMT (SOD-323); PIV=30V; IF=0.5A                                                                        |            |
|     20 | D3                                                           | -              | 1 MBR0520L                                                                                         | FAIRCHILD SEMICOND UCTOR              | MBR0520 L         | DIODE, SCHOTTKY, SOD-123, PIV=20V, Vf=0.385V@If=0.5A, If(ave)=0.5A                                                 |            |
|     21 | DS1, DS2                                                     | -              | 2 LGL29K-G2J1-24-Z                                                                                 | OSRAM                                 | LGL29K- G2J1-24-Z | DIODE; LED; SMARTLED; GREEN; SMT; PIV=1.7V; IF=0.02A                                                               |            |
|     22 | GND, TP1, TP3, TP4, TP11, TP13, TP16, TP18- TP20, TP23, TP25 | -              | 12 5001                                                                                            | KEYSTONE                              | N/A               | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |            |
|     23 | J1                                                           | -              | 1 OSTVN08A150                                                                                      | ON-SHORE TECHNOLO GY INC.             | OSTVN08 A150      | CONNECTOR; FEMALE; THROUGH HOLE; SCREW TYPE; GREEN TERMINAL BLOCK; RIGHT ANGLE; 8PINS                              |            |

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## MAX11198 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                                                 | DNI/ DNP QTY   | MFG PART #                                      | MFG                               | VALUE        | DESCRIPTION                                                                                                                      | COMMENTS   |
|--------|-------------------------------------------------------------------------|----------------|-------------------------------------------------|-----------------------------------|--------------|----------------------------------------------------------------------------------------------------------------------------------|------------|
|     24 | J2-J5, J10-J14, J23-J26, J301, J302, J311, J312, J401, J402, J411, J412 | -              | 21 PCC02SAAN                                    | SULLINS                           | PCC02SA AN   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                                         |            |
|     25 | J6-J9, J15, J22, J303, J313, J403, J413                                 | -              | 10 PCC03SAAN                                    | SULLINS                           | PCC03SA AN   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 3PINS; -65 DEGC TO +125 DEGC                                         |            |
|     26 | J16, J19                                                                | -              | 2 5-1814832-1                                   | TYCO                              | 5-1814832- 1 | CONNECTOR; FEMALE; THROUGH HOLE; CONN SOCKET SMA STR DIE CAST PCB; STRAIGHT; 5PINS                                               |            |
|     27 | J17                                                                     | -              | 1 PBC15SAAN                                     | SULLINS ELECTRONI CS CORP.        | PBC15SA AN   | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 15PINS; -65 DEGC TO +125 DEGC                                                |            |
|     28 | J20                                                                     | -              | 1 KLDX-0202-B                                   | KYCON                             | KLDX- 0202-B | CONNECTOR; FEMALE; THROUGH HOLE; DC POWER JACK; RIGHT ANGLE; 3PINS                                                               |            |
|     29 | J21                                                                     | -              | 1 282834-2                                      | TE CONNECTIV ITY                  | 282834-2     | CONNECTOR; FEMALE; THROUGH HOLE; 2.54MM PITCH; SIDE WIRE ENTRY STACKING TERMINAL BLOCK ; STRAIGHT; 2PINS; -40 DEGC TO + 105 DEGC |            |
|     30 | L1, L2                                                                  | -              | 2 LPS5030-224ML                                 | COILCRAFT                         | 220UH        | INDUCTOR; MAGNETICALLY SHIELDED FERRITE BOBBIN CORE; SMT; 220UH; TOL=+/-20%; 0.5A; -40 DEGC TO +85 DEGC                          |            |
|     31 | L3-L6                                                                   | -              | 4 XPL2010-333ML                                 | COILCRAFT                         | 33UH         | INDUCTOR; SMT; MAGNETICALLY SHIELDED FERRITE BOBBIN CORE; 33UH; TOL=+/-20%; 0.38A                                                |            |
|     32 | R1-R4                                                                   | -              | 4 CRCW06031M00JN                                | VISHAY DALE                       | 1M           | RESISTOR; 0603; 1M OHM; 5%; 200PPM; 0.10W; METAL FILM                                                                            |            |
|     33 | R5-R8                                                                   | -              | 4 CRCW06031K00FK;ERJ- 3EKF1001                  | VISHAY DALE;PANA SONIC            | 1K           | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                |            |
|     34 | R9-R12                                                                  | -              | 4 CRCW0603100RFK;ERJ- 3EKF1000;RC0603FR-07100RL | VISHAY DALE;PANA SONIC            |              | 100 RESISTOR; 0603; 100 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                       |            |
|     35 | R21-R24                                                                 | -              | 4 RN73C1J10RBTG; 1614350-2                      | TE CONNECTIV ITY;TE CONNECTIV ITY |              | 10 RESISTOR; 0603; 10 OHM; 0.1%; 10PPM; 0.063W; THICK FILM                                                                       | 0.10%      |
|     36 | R25-R27                                                                 | -              | 3 SEE NOTES                                     | VISHAY DALE                       |              | 20 RESISTOR; 0603; 20 OHM; 1%; 100PPM; 0.10W; THICK FILM;                                                                        |            |
|     37 | R28                                                                     | -              | 1 ERJ-3EKF1822                                  | PANASONIC                         | 18.2K        | RESISTOR; 0603; 18.2K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                         |            |

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## MAX11198 EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                        | DNI/ DNP QTY   | MFG PART #                                                                          | MFG                                     | VALUE    | DESCRIPTION                                                                                             | COMMENTS        |
|--------|------------------------------------------------|----------------|-------------------------------------------------------------------------------------|-----------------------------------------|----------|---------------------------------------------------------------------------------------------------------|-----------------|
|     38 | R30-R34, R102, R103                            | -              | 7 CRCW060310K0FK;ERJ- 3EKF1002                                                      | VISHAY DALE;PANA SONIC                  | 10K      | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                      |                 |
|     39 | R35                                            | -              | 1 CRCW06032K10FK                                                                    | VISHAY DALE                             | 2.1K     | RESISTOR; 0603; 2.1K; 1%; 100PPM; 0.10W; THICK FILM                                                     |                 |
|     40 | R36, R66, R69                                  | -              | 3 CRCW060349R9FK                                                                    | VISHAY DALE                             | 49.9     | RESISTOR; 0603; 49.9 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                 |                 |
|     41 | R29, R37, R38, R39                             | -              | 4 TNPW060310K0BE; RN731JTTD1002B                                                    | VISHAY DALE;KOA SPEER ELECTRONI CS      | 10K      | RESISTOR; 0603; 10K OHM; 0.1%; 25PPM; 0.1W; THICK FILM                                                  | (R38,R39:0.1% ) |
|     42 | R40-R65                                        | -              | 26 ERJ-3EKF28R0                                                                     | PANASONIC                               | 28       | RESISTOR; 0603; 28 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                   |                 |
|     43 | R67, R68, R104                                 | -              | 3 CRCW06030000ZS;MCR03EZPJ 000;ERJ-3GEY0R00                                         | VISHAY DALE;ROHM ;PANASONI C            |          | 0 RESISTOR; 0603; 0 OHM; 0%; JUMPER; 0.10W; THICK FILM                                                  |                 |
|     44 | R94, R95                                       | -              | 2 CRCW0603191KFK                                                                    | VISHAY DALE                             | 191K     | RESISTOR; 0603; 191K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                 |                 |
|     45 | R96                                            | -              | 1 ERJ-3EKF3573                                                                      | PANASONIC                               | 357K     | RESISTOR; 0603; 357K OHM; 1%; 100PPM; 0.1W; THICK FILM                                                  |                 |
|     46 | R97, R99                                       | -              | 2 CRCW060349K9FK;ERJ- 3EKF4992                                                      | VISHAY DALE;PANA SONIC                  | 49.9K    | RESISTOR; 0603; 49.9K OHM; 1%; 100PPM; 0.10W; THICK FILM                                                |                 |
|     47 | R98                                            | -              | 1 CRCW0603261KFK                                                                    | VISHAY DALE                             | 261K     | RESISTOR; 0603; 261K OHM; 1%; 100PPM; 0.10W; METAL FILM                                                 |                 |
|     48 | R100, R101                                     | -              | 2 CRCW0603100KFK;RC0603FR- 07100KL;RC0603FR- 13100KL;ERJ- 3EKF1003;AC0603FR-07100KL | VISHAY DALE;YAGE O;YAGEO;P ANASONIC     | 100K     | RESISTOR; 0603; 100K; 1%; 100PPM; 0.10W; THICK FILM                                                     |                 |
|     49 | R301, R302, R311, R312, R401, R402, R411, R412 | -              | 8 CRCW0603499RFK;RK73H1J499 0FT;ERJ- 3EKF4990;RC1608F4990                           | KOA;VISHA Y;PANASON IC;SAMSUN G         | 499      | RESISTOR; 0603; 499 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                  |                 |
|     50 | SU6-SU9, SU12-SU15, SU22-SU29                  | -              | 16 S1100-B;SX1100-B;STC02SYAN                                                       | KYCON;KYC ON;SULLINS ELECTRONI CS CORP. | SX1100-B | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED |                 |

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## MAX11198 EV Kit Bill of Materials (continued)

| ITEM                | REF_DES                                           | DNI/ DNP QTY   | MFG PART #                         | MFG                        | VALUE          | DESCRIPTION                                                                                                                   | COMMENTS   |
|---------------------|---------------------------------------------------|----------------|------------------------------------|----------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------|------------|
| 51                  | TP2, TP5-TP10, TP12, TP14, TP15, TP17, TP22, TP24 | -              | 13 5000                            | KEYSTONE                   | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;              |            |
| 52                  | TP21                                              | -              | 1 5004                             | KEYSTONE                   | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;           |            |
| 53                  | U1, U2, U7                                        | -              | 3 MAX44242AUA+                     | MAXIM                      | MAX4424 2AUA+  | IC; OPAMP; DUAL OPERATIONAL AMPLIFIER; UMAX8                                                                                  |            |
| 54                  | U3, U4                                            | -              | 2 MAX4432EUA+                      | MAXIM                      | MAX4432 EUA    | IC; OPAMP; DUAL SUPPLY ULTRA-LOW DISTORTION OP AMP; UMAX8                                                                     |            |
| 55                  | U5                                                | -              | 1 MAX11198ATE+                     | MAXIM                      | MAX1119 8ATE+  | EVKIT PART-IC; ADC; 16-BIT; 2MSPS; DUAL SIMULTANEOUS SAMPLING SAR ADCS WITH INTERNAL REFERENCE; 16L TQFN 2X3 LEAD PITCH 0.5MM |            |
| 56                  | U6                                                | -              | 1 MAX5316GTG+                      | MAXIM                      | MAX5316 GTG+   | IC; DAC; 16-BIT, +/-1 LSB ACCURACY VOLTAGE OUTPUT DAC WITH SPI INTERFACE; TQFN24-EP                                           |            |
| 57                  | U8                                                | -              | 1 74LVC125APW                      | NXP                        | 74LVC125 APW   | IC; BUF; QUAD BUFFER/LINE DRIVER WITH 5V TOLERANT INPUT/OUTPUT; 3-STATE; TSSOP14                                              |            |
| 58                  | U12, U13                                          | -              | 2 MAX17552ATB+                     | MAXIM                      | MAX1755 2ATB+  | IC; CONV; ULTRA-SMALL; HIGH-EFFICIENCY; SYNCHROMOUS STEP-DOWN DC-DC CONVERTER; TDFN10-EP                                      |            |
| 59                  | U14                                               | -              | 1 MAX6126A41+                      | MAXIM                      | MAX6126 A41    | IC; VREF; ULTRA-HIGH PRECISION; ULTRA-LOW NOISE; SERIES VOLTAGE REFERENCE; UMAX8                                              |            |
| 60                  | U15                                               | -              | 1 MAX44244AUK+                     | MAXIM                      | MAX4424 4AUK+  | IC; OPAMP; 36V; PRECISION; LOW-POWER; 90UA; SINGLE OP AMP; SOT23-5                                                            |            |
| 61                  | U16, U17                                          | -              | 2 74LVC2G125DP                     | NXP                        | 74LVC2G 125DP  | IC; DRV; DUAL BUS BUFFER/LINE DRIVER; 3- STATE; TSSOP8                                                                        |            |
| 62                  | U18                                               | -              | 1 93LC66BT-I/OT                    | MICROCHIP                  | 93LC66BT- I/OT | IC; EPROM; 4K MICROWIRE SERIAL EEPROM; SOT23-6                                                                                |            |
| 63                  | U20                                               | -              | 1 MAX15006BATT+                    | MAXIM                      | MAX1500 6BATT+ | IC; VREG; ULTRA-LOW QUIESCENT-CURRENT LINEAR REGULATOR; TDFN6-EP 3X3                                                          |            |
| 64                  | PCB                                               | -              | 1 MAX11198                         | MAXIM                      | PCB            | PCB:MAX11198                                                                                                                  | -          |
| 65                  | C60                                               | DNP            | 0 GMK212B7105KG;GRM219R7YA 105KA12 | TAIYO YUDEN;MUR ATA        | 1.0UF          | CAPACITOR; SMT (0805); CERAMIC; 1UF; 35V; TOL=10%; MODEL=GMK SERIES; TG=-55 DEGC TO +125 DEGC; TC=X7R                         |            |
| 66                  | J18                                               | DNP            | 0 PBC06SAAN                        | SULLINS ELECTRONI CS CORP. | PBC06SA AN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS; -65 DEGC TO +125 DEGC                                              |            |
| TOTAL               |                                                   |                | 282                                |                            |                |                                                                                                                               |            |
| NOTE: DNI--> DO NOT | INSTALL(PACKOUT) ;                                |                | DNP--> DO NOT PROCURE              |                            |                |                                                                                                                               |            |

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11198 EV Kit Schematics

<!-- image -->

## MAX11198 EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11198 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11198 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX11192/

MAX11195/MAX11198

## MAX11198 EV Kit Schematics (continued)

<!-- image -->

│

Evaluates: MAX11192/

## MAX11198 EV Kit PCB Layout Diagrams

MAX11198 EV Kit-Top Silkscreen

<!-- image -->

MAX11198 EV Kit-L2 GND

<!-- image -->

Evaluates: MAX11192/

MAX11195/MAX11198

MAX11198 EV Kit-Top

<!-- image -->

MAX11198 EV Kit-L3 PWR

<!-- image -->

│

## MAX11198 EV Kit PCB Layout Diagrams (continued)

<!-- image -->

MAX11198 EV Kit-L4 PWR Signal

<!-- image -->

MAX11198 EV Kit-Bottom

MAX11198 EV Kit-L5 GND

<!-- image -->

MAX11198 EV Kit-Bottom Silkscreen

<!-- image -->

Evaluates: MAX11192/

│

## MAX11192/MAX11195/MAX11198 Evaluation Kits

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX11192EVKIT# | EVKIT  |
| MAX11195EVKIT# | EVKIT  |
| MAX11198EVKIT# | EVKIT  |

Contact Avnet to purchase a ZedBoard (AES-Z7EV-7Z020-G) to communicate with the MAX11192/MAX11195/MAX11198 EV kits.

Evaluates: MAX11192/

MAX11195/MAX11198

│

## MAX11198 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                                                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 10/17           | Initial release                                                                                                                                                                  | -               |
|                 1 | 1/20            | Updated Features , EV kit photo, block diagram, Quick Start section, Table 2, Figure 1, General Description of Software , bill of materials, schematics and Ordering Information | 1-6, 10-25      |
|                 2 | 1/20            | Updated parts evaluated in General Description , Features , EV Kit Files table, Quick Start section, Figure 7 caption, and Ordering Information                                  | 1, 3, 4, 12, 26 |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX11198