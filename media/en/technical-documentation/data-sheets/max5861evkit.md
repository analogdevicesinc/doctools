<!-- lastmod 2022-08-03 -->
## MAX5861 Evaluation Kit

## General Description

The MAX5861 evaluation kit (EV kit) contains a MAX5861 high-density  downstream  cable  SCQAM  and  OFDM modulator  that  integrates  a  digital  up-converter  (DUC) and  a  RF  Digital  to  Analog  Converter  (RF-DAC).  The MAX5861 DUC performs SCQAM and OFDM mapping, pulse shaping, and digital RF up-conversion with full agility  and then drives a 14-bit 5Gsps RF-DAC. The device digitally synthesizes RF signals with up to 160 DOCSIS ® compliant 6MHz QAM channels (or up to 120 8MHz QAM channels) on a single RF port at frequencies from 47MHz to  1218MHz.  The  MAX5861  device  provides  up  to  6 channels of OFDM IFFT processing. Each of the OFDM channels provide up to 192MHz of bandwidth, for a combined  potential  1152MHz  of  modulation  bandwidth.  The MAX5861 can support up to six blocks powered on at the same time, where a block is defined as an OFDM channel  or  a  32-channel  SCQAM  block.  The  MAX5861  EV kit  provides a complete system solution for high-density SCQAM and OFDM modulation targeting the DOCSIS 3.1 solution with very low power dissipation.

The MAX5861 EV kit connects to the FMC connector on the  Xilinx  VC707  evaluation  kit,  allowing  the  VC707  to communicate with the MAX5861's three input ports and various control signals.

The  EV  kit  includes  Windows  XP ® -,  Windows  Vista ® -, Windows ®  7/8-compatible software that provides a simple graphical user interface (GUI) for configuration of all of the MAX5861 registers, control of SPI interface, control of the VC707 FPGA and temperature monitoring.

DOCSIS is a registered trademark and registered service mark of Cable Television Laboratories, Inc.

Windows, Windows Vista, and Windows XP are registered trademarks and registered service marks of Microsoft Corporation.

Xilinx is a registered trademark of Xilinx, Inc.

Evaluates: MAX5861

## Benefits and Features

- Evaluates Up to 160 SCQAM Channels and/or 6 OFDM Channels
- Up to 6 Blocks Powered at Once, Where a Block is Defined as an OFDM Channel or a 32-Channel SCQAM Block
- Single 5.0V Input Voltage Supply
- Maximum 4.9152Gsps Update Rate
- Direct Interface with Xilinx ®  VC707 Data Source Board if Desired
- Windows XP-, Windows Vista-, and Windows 7/8-Compatible Software
- On-Board SPI Interface Control for the MAX5861
- On-Board SMBus Interface Control for the MAX6654 Temperature Sensor
- GUI Controls for VC707 Operation
- Pseudo Random Bit Sequence (PRBS) Test Pattern Files
- Proven 10-Layer PCB Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX5861

Figure 1. MAX5861 EV Kit System with MAX5861 EV Kit and Xilinx VC707 Evaluation Board

<!-- image -->

│

## MAX5861 EV Kit Files

| FILE                                                                                      | DECRIPTION                                                                                                                  |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| MAX5861EVKITSoftwareController.exe                                                        | Application program                                                                                                         |
| ConfigurationLoadFiles                                                                    | Directory with sample register configuration files to load into the MAX5861 for evaluation                                  |
| FPGAConfigurationFiles                                                                    | Directory with sample FPGAconfigurations files and memory patterns to load into the VC707                                   |
| Screenshots                                                                               | Directory with sample spectrum analyzer screenshots for reference of expected performance on set of configurations          |
| WindowsDriverFiles                                                                        | Directory with USB supporting files                                                                                         |
| MAX5861ConfigurationScripts                                                               | Perl scripts and supporting files to generate new configuration files to load into the MAX5861 - see Readme.txt for details |
| MAX5861RegMap.txt                                                                         | Register definition file used by the MAX5861EVKITSoftwareController for register definition display                         |
| Miscellaneous DLLs to include ftd2xx.dll, DTD2XX_NET.dll, libMPSSE.dll and MaximStyle.dll | Supporting DLL files for software operation                                                                                 |

## Quick Start

## Required Equipment

Before beginning, the following equipment is required:

- Windows XP, Windows Vista or Windows 7/8 PC with a spare HS USB port (3 USB ports if using VC707 with two of those being HS USB ports - if only 2 ports are available, the VC707 JTAG can be used first to program the BIT file into the FPGA and then it can be changed to the UART for communication)
- USB 2.0 cable for the MAX5861 EV kit, USB A male to USB Mini (supplied with kit)
- One 5.0V, minimum 3A DC power supply with banana jack cables to connect to 5V and GND to supply power to the MAX5861
- One signal generator with low-phase noise and low jitter for clock input signal to the RF-DAC at +19dBm (e.g., Rohde &amp; Schwarz SMF100A) with SMA cable to connect to J1
- Bandpass filters for the RF-DAC clock input signal (Optional)
- One high-performance spectrum analyzer (e.g., Agilent PXA, Agilent PSA, Rohde &amp; Schwarz FSU, or better) with SMA cable to connect to OUT
- One Xilinx Virtex 7 VC707 evaluation kit with separate USB micro and USB mini cables as well as a power cable to connect the VC707 to an outlet - for use as an external data source (Optional)

## Procedure

The MAX5861 EV kit is fully assembled and tested. Follow the  steps  below  to  verify  board  operation. Caution: Do not enable the outputs of the power supplies or signal sources until all connections are completed.

Note: In  the  following  section(s),  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and under -line refers to items from the Windows operating system.

- 1) Verify that the MAX5861 EV kit shunts are config -ured in their default state (the EV kit board indicates installation and position of jumper with a ● - see Table 1 for definitions of each of the jumpers).
- 2) Connect the USB cable from the PC HS-USB to the MAX5861 EV kit board USB23.
- i) Install the driver for the FTDI device if it is not automatically detected and installed by the PC.
4. ii)  The EVKIT USB ports can take a few minutes to fully enumerate. If the ports have not enumerated yet, the error window shown in Figure 5 will appear.
- 3) Set the DC power supply to 5.0V and disable the power-supply output.
- 4) Connect the 5.0V power-supply output to the MAX5861 EV kit 5V and GND banana jack

Evaluates: MAX5861

## MAX5861 Evaluation Kit

connectors.

- 5) Set the clock signal generator to the desired clock frequency (2457.6MHz) and power level at +19dBm and disable the output.
- 6) Connect the clock signal generator to the J1 SMA connector.
- 7) Connect the spectrum analyzer to the EV kit SMA connector labeled OUT.
- 8) &lt;&lt;If using optional VC707 board for SCQAM input data or OFDM data&gt;&gt;
- i) Connect the VC707 evaluation board per the User's Manual without turning the switch on.
6. ii)  Connect power supply.
7. iii)  Connect a USB cable between the PC and JTAG connection.
8. iv) Connect a USB cable between the PC HSUSB and the UART connection.
- b) Ensure Xilinx's Impact Tools are installed on the PC and note the location of impact.exe file if pro -gramming the FPGA through the MAX5861 EV kit software GUI.
- c)  Connect VC707 board to MAX5861 EV kit.
- 9) Install the EV kit software on your computer by running the setup.exe program. The recommended location for the installation software is C:\MaximIntegrated\MAX5861EVKIT to avoid file permission issues. The application files are copied and icons are created in the Windows Start | Programs menu.
- 10)  Enable the MAX5861 EV kit DC power supply.
- 11)  Enable the clock generator output.
- i) Approximate current draw on the 5V supply upon power-up should be 1.4A, depending on the CFG jumper settings.
- 12)  &lt;&lt;If using optional VC707 board for SCQAM input data or OFDM data&gt;&gt;
- i) Power on the VC707 board.
- 13)  Start the MAX5861 EV kit software by opening the icon in the Start | Programs menu under Maxim Integrated . The EV kit software window will display a splash screen, as shown in Figure 2, while the software is loading. When the software load is complete, the software GUI will display as shown in Figure 3.
- i) If the USB ports are not fully enumerated, you may receive a warning that it did not connect correctly. Cancel out of this startup and try again later. There are four ports on the USB interface of the MAX5861 EV kit - one for the SPI of the MAX5861 device, one for the I 2 C interface for the temperature sensor, one for bit toggling of the RST\_N and MODE2 pins, and one spare. The ports can also be monitored in the device manager of the PC to determine when all four ports are ready for use (depending on the operating system, they might show up under the Universal Serial Bus Controllers as USB Serial Converter A, USB Serial Converter B, USB Serial Converter C and USB Serial Converter D).
19. ii)  If the PC has USB 3.0 and it is not fully compliant (i.e. not backward compatible to USB 2.0) then the USB 3.0 mode may need to be disabled in the BIOS for proper communication.
- 14)  Verify proper communication with the board in the Log Window of the GUI. The software reads the register 0x000 at software initialization and should read a 0x27 in the ID code, as shown in Figure 3 below.
- 15)  &lt;&lt;If using optional VC707 board for SCQAM input data or OFDM data&gt;&gt;
- i) On the VC707 Tab of the GUI, click the checkbox for Xilinx Impact Tools Are Installed
23. ii)  Click on the Load FPGA Bit File button, browse to the location of the Impact program (if needed - first-time programming only), and then browse to the location of the BIT file (download\_lvds\_xxxxx.bit) under the FPGAConfigurationFiles directory.-
- 16)  Click on the Test tab of the GUI and select a Pseudo Random Bit Sequence (PRBS) file to load by clicking on the button labeled ' 1 Carrier, Annex B, 256QAM, Centered @ 1GHz '. This button will load the filename 001SB256\_5861\_PRBS\_4915p2M\_1000M. txt into the MAX5861. The SCQAM load files are in the ABC \_ D \_ E \_ F M\_ G M.txt format and the OFDM load files are in the ABC \_ D \_ E \_ F M\_ G BW\_ H k\_ J c K r\_ L .txt format, where the format is defined as follows.

## Evaluates: MAX5861

## MAX5861 Evaluation Kit

Evaluates: MAX5861

| SYMBOL                                                                             | SCQAM DEFINITION                                                                                                         | OFDM DEFINITION                    |
|------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| Number of SCQAM channel, 3 digits                                                  | Number of OFDM channel, 3 digits                                                                                         | A                                  |
| S for SCQAM                                                                        | O for OFDM                                                                                                               | B                                  |
| QAM mapping - A16, A32, A64, A160, A256, B64, B256, C64 or C256                    | QAM mapping to include 16, 32, 64, 128, 256, 512, 1024, 2048 and 4096 QPSK for PRBS mode or xxx for input interface data | C                                  |
| Target of the configuration - 5861 for MAX5861 or VC707                            | Target of the configuration - 5861 for MAX5861 or VC707                                                                  | D                                  |
| Source of the data - PRBS for internal PRBS generator or input for input interface | Source of the data - PRBS for internal PRBS generator or input for input interface                                       | E                                  |
| DAC frequency in MHz                                                               | DAC output data center frequency in MHz                                                                                  | F                                  |
| DAC output data center frequency in MHz                                            | OFDM Channel BW to include 24, 48, 96 and 192MHz                                                                         | G                                  |
| NA                                                                                 | 4 or 8 for 4k or 8k points IDFT                                                                                          | H                                  |
| NA                                                                                 | NCP                                                                                                                      | J                                  |
| NA                                                                                 | NRP                                                                                                                      | K                                  |
| L NA                                                                               | P for no pilot                                                                                                           | NP or insertion or pilot insertion |

1. Observe the output on the spectrum analyzer and adjust the signal generator and spectrum analyzer, if required.

Website:

www.maximintegrated.com

Support:

support.maximintegrated.com

Figure 2. MAX5861 EV Kit Software Controller Splash Screen

<!-- image -->

│

Evaluates: MAX5861

Figure 3. MAX5861 Evaluation System Controller Software GUI Window

<!-- image -->

Table 1. Jumper Configuration for MAX5861 EV Kit Operation

| JUMPER   | POSITION                                      | EVKIT FUNCTION                                                                                        |
|----------|-----------------------------------------------|-------------------------------------------------------------------------------------------------------|
| JU2      | 1-2 Installed● 2-3 Installed                  | 3.3V LDO drives AVDD33_IN External AVDD3ANALOG Supply drives AVDD33_IN                                |
| JU3      | 1-2 Installed● 2-3 Installed                  | 1.8V LDO drives AVCLK_IN External ANALOG18 Supply drives AVCLK_IN                                     |
| JU4      | Installed● Not Installed                      | Connects SE signal to the DUT SE signal not connected to the DUT                                      |
| JU5      | 1-2,4-5●,7-8●,10-11● 2-3●,5-6,8-9,11-12 13-14 | CFG1, CFG2, CFG3, CFG4 connected to GND CFG1, CFG2, CFG3, CFG4 connected to VDD18                     |
| JU6      | 1-2 Installed 2-3 Installed●                  | Connect REF to DUT Connect DAC REF to GND                                                             |
| JU7      | (1-2,4-5,7-8,10-11)● 2-3,5-6,8-9,11-12 13-14  | SCLK, SDI, SDO, CSApins connected to USB SCLK, SDI, SDO, CSApins connected to FPGA Unused connection  |
| JU8      | 1-2 Installed● 2-3 Installed Not Installed    | Selects LVDS Termination Selects SSTL 1.5V Selects SSTL 1.2V                                          |
| JU10     | 1-2 Installed● 2-3 Installed                  | 1.8V LDO drives AVDD18_IN External ANALOG18 Supply drives AVDD18_IN                                   |
| JU11     | 1-2 Installed 2-3 Installed●                  | RST_N_FPGA Drives RST_N Pushbutton RST drives RST_N                                                   |
| JU12     | Installed● Not Installed                      | U11 LDO Drives REFIO External REFIOA drives REFIO                                                     |
| JU22     | 1-2 Installed 2-3 Installed●                  | MODE_2_FPGA Drives MODE2 Pushbutton MODE_2_LV drives MODE2                                            |
| JU23     | (1-2,4-5,7-8,10-11) ● 2-3,5-6,8-9,11-12 13-14 | SA3, SA2, SA1, SA0 pins connected to GND SA3, SA2, SA1, SA0 pins connected to VDD18 Unused connection |
| JU24     | Installed Not Installed●                      | Normal Operation 0.9V_VDDSense Monitoring                                                             |
| JU25     | Installed Not Installed●                      | Normal Operation 0.9V_GND Sense Monitoring                                                            |
| JU26     | 1-2 Installed● 2-3 Installed                  | 1.8V LDO drives 1.8V_OUT External DIGITAL_18 drives 1.8V_OUT                                          |

Evaluates: MAX5861

│

## MAX5861 Evaluation Kit

## Detailed Description of Software

The MAX5861 EV kit Software Controller GUI is designed to control the MAX5861 EV kit and the VC707 board as shown  in  Figure  4.  The  MAX5861  Software  Controller includes USB controls that provide SPI and SMBus communication to the MAX5861 and the MAX6654 interfaces. The software also controls the VC707 through the Silicon Labs COM port on the VC707 board (UART connection on  the  board  panel).  The  software  gives  the  user  the capability of accessing the MAX5861 device's 1492 internal registers in each device, each 32 bits wide.

The MAX5861 EV kit software features six window tabs for operation of the MAX5861 Software Controller and are defined below:

## ● Register

- Single Access Read And Write Operations
- File Read/Write Loads And Downloads
- Reload Of Last Configuration Loaded
- Register Definition Display
- Rstn And Mode2 Toggle Control

## ● QAM Status

- Display Of SCQAM Channel Configuration Summary
- Display Of The SCQAM Channel Center Frequency

## ● OFDM Status

- Display Of OFDM Channel Configuration Summary

## ● Device Status

- Temperature Readings And Control Of The MAX6654 Temperature Sensor IC
- Display Of The FIFO Status, Parity Error Status And DLL Lock Status
- Display Of The Saturation Status With The Ability To Clear The Status

## ● DPD

- Manipulation Of The DPD Register Set Through Easy-To-Use Slide Bars Or Text Boxes

## ● Test

- Ability To Save Off Current Device Settings
- Quick And Easy Buttons For Device Configuration Or Generic DPD Settings For Static Linearity And f dac /2 - 2f out  Corrections
- Display Of Sample Spectrum Analyzer Screen Capture Available for Comparison Of Expected Wideband Output

Evaluates: MAX5861

Figure 4. MAX5861 Evaluation System Block Diagram

<!-- image -->

## ● VC707

- Status Of COM Port Connection and Ability to Connect
- File Read/Write Loads and Downloads
- Pattern File DDR3 Memory Loads for OFDM Data Transfer
- Start Of OFDM Memory Pattern
-  Enable SDCLK Output from FPGA
- Ability to Load A Bit File Into the FPGA Requires Xilinx Lab Tools for Impact Executable to Load Bit File

│

## MAX5861 EV Kit Software Controller

USB communication to the FTDI microcontroller's SPI is verified upon execution of the MAX5861 EV kit Software Controller.  If  the  USB  is  not  connected  or  communicating  to  the  interface  correctly,  a  pop-up  window  appears (Figure 5).

Evaluates: MAX5861

When the MAX5861 EV kit is not found, a debug setup window will appear as shown in Figure 6. If the Number of MPSSE/FTDI Ports is  clicked  without any devices, it would show ' No devices found ' in the window.

Figure 5. Error in Allocating USB Ports and Failed to Connect to MAX5861 EV Kit Windows

<!-- image -->

Figure 6. MAX5861 EV Kit Software Controller Setup Window

<!-- image -->

## MAX5861 Evaluation Kit

If desired, the Demonstration Mode button can be clicked to enter the SW GUI. Of course, there is not a board to connect to and therefore no configuration can take place. If  demonstration  Mode  is  used,  the  following  window Evaluates: MAX5861

is  displayed,  with  the  appropriate  ' DEMONSTRATION MODE ' titles and ' Not Connected ' and ' Adapter: None ' messages shown in Figure 7.

Figure 7. Demonstration Mode (Debug Mode Display)

<!-- image -->

│

## MAX5861 Evaluation Kit

When the MAX5861 EV kit is detected and the ports are connected,  the  screen  shown  in  Figure  8  is  displayed. The initialization of the SW will read the RevID from the ID register in the MAX5861 device at offset 0x000 to see if  the  communication  is  working  between  the  SW  and the MAX5861. The RevID should read '27'. If this is the case, then it assures that the communication is working between the SW and device. If the board is set up with

## Evaluates: MAX5861

a board address set to something other than '0000', then this communication will not work. However, this does not mean that it would not work once the board address was set  correctly  using  the Select  Device  Board  Address pulldown. The  SW  will  also  attempt  to  enable  the  DPD branches to allow for correction manipulation through the DPD page.

Figure 8. Initial Display with Proper Connections

<!-- image -->

│

## MAX5861 Evaluation Kit

When connecting  to  the  MAX5861  EV  kit  correctly,  the text in the Results Log will  show text similar to the following text:

If  Digilent  devices  show  up  in  the Results  Log text, then  the  VC707  board  has  the  JTAG  cable  connected. The  FT4232H  devices  are  the  MAX5861  EV  kit  board. There are four ports on the FTDI USB device where the MAX5861 EV kit uses port A for the SPI communication to the MAX5861, port B for the I 2 C communication to the temperature sensor, port C for GPIO expansion bus, and port D for bit-bang functions such as issuing a RST\_N or MODE2 pulse to the MAX5861 device.

The  status  bar  at  the  bottom  of  the  MAX5861  EV  Kit Software  Controller  shows  the  status  of  the  connection when the GUI was opened. It also displays the version of the software.

## Evaluates: MAX5861

Notes  about  the  MAX5861  EV  Kit  Software  Controller GUI:

Boxes that can have user entry are white in color, with the exception of the Results Log . Text boxes that are for displaying results of an action are grey. The Results Log will  show  grey  if  it  has  been  disabled.  Logging  can  be disabled, but this does not result in much of a savings on the processing timing and is therefore not recommended so that results feedback can be provided to the user. The entire content of the Results Log can be copied by clicking on the Copy button and then pasted into a text editor for viewing if desired. The Results Log can be cleared by clicking on the Clear button.

Figure 9. Sample Text Output When Connected

<!-- image -->

│

## MAX5861 Evaluation Kit

## MAX5861 Register Tab

Figure  10  displays  the Register tab  page.  The  board address  can  be  selected  from  the  pulldown  (range  of 0000  to  1111)  in  panel  1.  Panel  2  contains  the Select Command radio  buttons. The  radio  buttons  include  the Register Description, File Register Load, Reload Last Configuration, Single Register Read, Single Register Write and Set Control Bit .

Evaluates: MAX5861

To  see  the  register  description,  click  on  the Register Description radio  button,  enter  the  address  in  the Address text  box  located  in  panel  3  and  click  the Execute button in panel 4. The description of the register defined will display in the Results Log window.

Figure 10. Register Tab Register Description Results

<!-- image -->

│

## MAX5861 Evaluation Kit

To  load  a  MAX5861  configuration  file,  click  on  the File Register Load radio button and click on the Execute button in panel 4. This will bring up the file browse window for the configuration file selection.

There are a few selections in panel 1 that affect a file load. These are Check to Verify All Register Writes, Apply Generic DPD Correction with Load and Apply Reset Prior to Configuration Load .  The Check to Verify All Register Writes checkbox will read the register after the

## Evaluates: MAX5861

write to verify that the contents were received. The registers will have a mask so that it only verifies the appropriate  bits.  The Apply  Generic  DPD  Correction  with Load checkbox  will  apply  values  to  the  f DAC /2  -  2f OUT correction (using DPD gain 9 and gain 10 offsets - 0x03E written  with  0x004A00FA)  and  static  linearity  correction (using  DPD  gain  11  and  gain  12  -  0x03F  written  with 0x008007F0). The Apply Reset Prior to Configuration Load checkbox  will  initiate  a  toggle  of  the  RST\_N  pin before loading a configuration load file.

Figure 11. Register Tab File Register Load

<!-- image -->

│

Evaluates: MAX5861

Figure 12. Browse Window for Register File Load

<!-- image -->

To read an individual register within the MAX5861, click on  the Single  Register  Read radio  button,  enter  the address offset into the Address box in panel 3 and click on the Execute button in panel 4. The result will be displayed in both the Results window in panel 5 as well as the Results Log .

To  write  to  an  individual  register  within  the  MAX5861, click  on  the Single  Register  Write radio  button,  enter the address offset into the Address box and the data to be written into the Data box in panel 3 and click on the Execute in panel 4. The write will be performed, verified and displayed in both the Results window in panel 5 as well as the Results Log .

To  set  a  control  bit  to  the  MAX5861,  click  on  the Set Control  Bit radio  button,  select  the  bit(s)  to  toggle  in panel 3 and click on the Execute in panel 4. The RST\_N and/or  MODE2  bits  connected  to  the  device  will  be toggled.

│

Evaluates: MAX5861

Figure 13. Register Tab Single Register Read

<!-- image -->

Figure 14. Register Tab Single Register Write

<!-- image -->

Evaluates: MAX5861

Figure 15. Register Tab Set Control Bit

<!-- image -->

## MAX5861 SCQAM Status Tab

There  are  many  status  qualifiers  of  the  MAX5861.  The SCQAM Status page is designed to provide status about a  specific  SCQAM  channel's  configuration.  Enter  the channel into the text box and click on the Display SCQAM

Evaluates: MAX5861

Channel Status for Channel # button and the information about  that  channel  will  be  displayed.  To  determine  the programmed  center  frequency  of  a  channel,  enter  the channel number, enter the f DAC  frequency for the system and  click  the  Calculate  f OUT   button.  The  result  will  be displayed.

Figure 16. QAM Status Tab

<!-- image -->

│

## MAX5861 OFDM Status Tab

The OFDM  Status tab  is  designed  to  provide  status about a specific OFDM channel's configuration. Enter the Evaluates: MAX5861

channel into the text box and click on the Display OFDM Channel Status for Channel # button and the information about that channel will be displayed.

Figure 17. OFDM Status Tab

<!-- image -->

## MAX5861 Evaluation Kit

## MAX5861 Device Status Tab

The Device  Status tab  is  designed  to  provide  status about the overall health of the MAX5861. There are three status  panels  to  include  the Temperature,  FIFO,  LOCK, Parity  Status  and  Saturation  Status  panels.  The  temperature  of  the  MAX5861  can  be  read  from  the  remote temperature  sensor  by  clicking  the Read  Temperature button. The threshold that determines alerts (shown with the LED on the board) can be modified by setting a new temperature into the text box next to the Set Threshold button and then clicking on the button to set it. If the LED is  on  and  the  current  temperature  is  below  the  current threshold, then the Clear Temperature Alert button can be clicked to clear the LED.

Evaluates: MAX5861

The FIFO, DLL lock status and parity error status can be seen  by  clicking  the Get  FIFO  Status , Get  DLL  Lock Status ,  and Get Parity Error Status buttons under the FIFO , LOCK , Parity  Status panels.  Keep  in  mind  that FIFO and Parity errors can be seen on startup depending on programming order. Clear these errors by clicking on the Get FIFO Status and Get Parity Error Status buttons right after initial configuration. After the initialization errors have been cleared, click on the buttons to determine  the  system's  true  health  during  normal  operation. The saturation status of the stages throughout the device can be verified by clicking on the Get Saturation Status button. This reads many registers and will take a minute. The status will be displayed but can be cleared by clicking the Clear Saturation Status button.

Figure 18. Device Status Tab

<!-- image -->

│

## MAX5861 Evaluation Kit

## MAX5861 DPD Tab

The DPD tab  is  designed  to  provide  an  interactive  way for the user to set the DPD register values and see the results on the analyzer in real-time. When first accessing the DPD page, click the Set to Register Gain Values to synchronize the page up with the current register settings. After this point, either the text entry method or the slide bar  method  can  be  used.  New  values  can  be  entered

## Evaluates: MAX5861

into the text boxes followed by the Apply Text Box Gain Values button. This will load the values into the registers. Another option with the text boxes is to use the left and right arrow keys. Click on a box to place the cursor in the box and then use the left or right arrows to change the values by plus or minus 1. The results of these settings can be easily seen on the spectrum analyzer where the sweep time is set to less than a second. In addition to the

Figure 19. DPD Tab

<!-- image -->

│

## MAX5861 Evaluation Kit

text  boxes,  the  slide  bars  can  be  moved.  The  software will write a new value to the register if the value has been moved  from  its  previous  location.  This  allows  real-time monitoring  of  the  output  signal  while  changing  the  gain values with the slide bars. All of the writes to vary the DPD settings will be logged in the Results Log .

## MAX5861 Test Tab

The Test page  is  designed  to  allow  capturing  of  the device's  current  configuration  as  well  as  easy  initial configuration of the device. The Save Settings panel will capture the current register settings of the device. They

Evaluates: MAX5861

can be captured in their entirety in numerical order or capturing only the active SCQAM channels and their settings. The  Load  Sample  Configurations  Using  Internal  PRBS Data panel allows a user to click a single button and load a pre-set PRBS configuration into the device. Under this panel,  there  is  also  an Apply  Generic  DPD  Values  Static  Lin  &amp;  fDAC/2-2fOUT button.  This  writes  generic DPD gain values to the Static Linearity and f DAC /2 - 2f OUT branches of  the  DPD  processing.  See  the  device  datasheet for further details. When loading the configurations under  the  SCQAM  Configurations,  SCQAM  and  OFDM Configurations  and  OFDM  Configurations  sections,  the

Figure 20. Test Tab

<!-- image -->

│

Evaluates: MAX5861

Figure 21. Test Tab Option for Displaying the Sample Wideband Spectrum Analyzer Capture

<!-- image -->

expected  sample  screen  captures  can  be  displayed  by clicking on the checkmark and making it an active green checkmark.  This  will  open  up  another  window  to  show the screenshots. These files can also be viewed, if larger images are needed, by accessing the Screenshots directory of the installed software.

## MAX5861 VC707 Tab

The VC707 tab  is  designed  to  provide  control  of  the VC707  FPGA  through  the  MAX5861  EV  kit  GUI.  The page  allows  the  user  to  send  single  commands,  load configuration  files,  load  memory  files,  enable  SDCLK, start memory data flow and stop memory data flow. The user can send individual commands to the VC707 with the use of the Single Command to Send button. To load a configuration into the VC707 for SCQAM setup, click the File - Load Configuration button. These configurations set up the time slots, PRBS information for the channels, clocks, and align the RDY interface appropriately. As the signals  come  up,  it  will  go  through  a  training  sequence on  the  ready  signals  so  only  the  second  through  the eighth channels (in each 8-channel combiner) will show until the training is complete. These can take a couple of minutes to load. To run the OFDM from the FPGA, a pattern memory file must be loaded into the VC707 board. This  file  can  be  loaded  via  the File  -  Load  Memory Pattern button.  It  will  bring  up  a  file  browse  window  to search for the desired memory file. The memory files can take a little while to load into the VC707 memory (i.e. a 4k IFFT pattern with 128 symbols for demodulation can take  approximately  10  minutes  and  an  8k  IFFT  pattern with  128  symbols  can  take  approximately  20  minutes  shorter patterns of 14 symbols will only take a couple of minutes). There is a CRC verification on the data written into  the  memory  to  confirm  expected  data  values.  The SDCLK to the MAX5861 must also be transmitting. This

│

Evaluates: MAX5861

Figure 22. VC707 Tab

<!-- image -->

can  be  accomplished  with  the Enable  SDCLK  Output button. The final step for the OFDM pattern to drive the MAX5861  is  to  send  the  OFDM  memory  pattern  from the VC707 to the DUC. To send the data, click the Start OFDM Memory Flow button and to stop the flow of data, click the Stop OFDM Memory Flow button.

## MAX5861 Configuration Load Order

The  optimal  order  of  operation  for  the  system  with  the MAX5861 receiving data from the VC707 is the following:

- 1) Configure the MAX5861 for the SCQAM and/or OFDM channel
- 2) Program the FPGA to send data to the MAX5861 channel
- 3) With data flowing from the FPGA to the MAX5861, clear the status registers of the MAX5861 of the startup condition triggers (FIFO, parity, saturation, etc)
- 4) Monitor the MAX5861 for health as needed

For the initial configuration of the device, the optimal order of operation for the registers within the MAX5861 is the following:

- 1) Set the Gain5 and Gain6 to zero (GAIN56 register)
- 2) Power up the blocks (GBL\_CFG2)
- 3) Program channel(s) to include all NCO load pulses
- 4) Set Gain5 and Gain6 to desired values

To program another channel when the device is already configured, program in the order defined:

- 1) Make sure the channel is muted (CHAN\_x\_x for SCQAM and OFDM\_CFG\_x for OFDM)
- 2) Power up the additional block (GBL\_CFG2)
- 3) Set the Gain1/Gain2 (G1G2\_x) for SCQAM or Gain7/ Gain8 (GAIN\_x) for OFDM to zero
- 4) Unmute the additional channel(s)
- 5) Program the channel(s) to include all NCO load pulses (if using OFDM, this includes the GAIN\_x register for the NCO3 load, while keeping Gain7/ Gain 8 at zero)
- 6) Set Gain1/Gain2 or Gain7/Gain8 to the desired gain values

This procedure should ensure that the channels come up cleanly in the spectrum.

## Detailed Description of Hardware

The MAX5861 EV kit contains a MAX5861 high-density downstream  cable  SCQAM  and  OFDM  modulator  that integrates a DUC and RF-DAC. The MAX5861 DUC performs SCQAM and OFDM mapping, pulse shaping and digital RF up-conversion with full agility and then drives a 14-bit 4.6Gsps RF-DAC. The device digitally synthesizes RF signals with up to 160 DOCSIS-compliant 6MHz QAM channels (or up to 120 8MHz QAM channels) on a single RF  port  at  frequencies  from  47MHz  to  1218MHz.  The MAX5861  device  provides  up  to  6  channels  of  OFDM IFFT processing. Each of the OFDM channels provide up to 192MHz of bandwidth. The MAX5861 can support up to 6 blocks powered on at one time, where a block is defined as an OFDM channel or a 32-channel SCQAM block. The MAX5861 EV kit provides a complete system solution for high-density  QAM  modulation  with  very  low  power  dissipation. The EV kit operates from a single 5.0V/3A input power supply.

The MAX5861 EV kit provides a Samtec FMC connector J1 to drive the IC input ports.  The MAX5861 output is available for viewing at the OUT SMA connector (see Figure 4).

The EV kit incorporates a MAX6654 device for monitoring the die temperature. The LED D1 turns on when the MAX5861 die temperature rises above the programmed high temperature threshold within the MAX6654. See the MAX5861 Device Status Tab section for configuring the high temperature threshold. Also refer to the MAX6654 IC data sheet for additional register information.

The EV kit provides on-board SPI and SMBus interfaces and is connected to the computer through the USB connector,  USB23.  The  EV  kit  Windows  XP-  ,  Vista-  and Windows  7/8-  compatible  software  provides  a  GUI  for control of the MAX5861, MAX6654, and VC707 programmable  features.  Logic-level  translators  provide  proper interface translation from the MAX5861 digital signals to the USB and VC707 circuitry.

The EV kit includes a hardware kit that allows the board to be lifted off of a lab bench as well as mate to the VC707 board.  The  hardware  kit  includes  standoffs,  screws, metal  washers,  and  nylon  washers. The  order  from  the top of the board to the bottom should be as follows: pan screw,  metal  washer,  MAX5861  EV  kit  board  mounting through-hole, nylon washer, and standoff. The hardware kit components should be placed on the outer 3 corners of the EV kit as well as the mounting hole inside the FMC connector holes.

## Power Supplies

The  EV  kit  operates  from  a  single  5.0V/3A  power supply  applied  at  the  5.0V\_IN  and  GND  PCB  pads. The MAX15023 dual synchronous step-down controller, MAX1793 LDO regulator, and MAX8902A low-noise LDO regulator provide power to the EV kit's power rails. The MAX15023 devices are configured to 0.9V and are used for on-board regulation of the MAX5861 core supply input, VDD09. The MAX1793 LDO regulators are configured to 1.8V  and  3.3V  and  are  used  for  on-board  regulation  of the MAX5861 VDD18, AVCLK, and AVDD3 supply inputs. The  MAX8902A LDO regulators  are  configured  to  1.8V and are used for on-board regulation of the AVDD18 supply  inputs. The  EV  kit  also  provides  the  option  of  using external  power  supplies.  When  using  an  external  supply  for  the  VDD09  supply rail,  remove resistor R17 and apply a 0.9V/5A power supply at the DIGITAL09 relative to GND PCB pads. See Table 1 for proper shunt settings for all of the other EV kit power-supply inputs. A 1.8V/3A power  supply  will  then  be  applied  on  the  DIGITAL18, ANALOG18, ANALOGCLK, and ANALOG33 pads.

Test  points  are  available  at  VDD09,  AVDD18,  AVCLK, AVDD3, VDD18\_IN, and GND for monitoring the EV kit power-supply voltages.

Jumpers  JU24  and  JU25  are  provided  for  sensing  the MAX5861 VDD09 voltage. Remove the shunts at jumper JU1  and  JU8  and  connect  the  voltmeter  positive  and negative terminals at JU24 pin 1 and JU25 pin 2 respectively to monitor VDD09 voltage as monitored inside the MAX5861 IC.

## SPI and SMBus Interface Control

The EV kit communicates to the MAX5861 SPI interface using  the  on-board  USB  circuitry.  Place  shunts  across pins 1-2, 4-5, 7-8, 10-11 and 13-14 of jumper JU7 to control the SPI interface using the USB circuitry.

The  EV  kit  communicates  to  the  MAX6654  SMBus interface using the on-board USB circuitry. Place shunts across  pins  1-2  and  4-5  of  jumper  JU23  to  control  the SMBus interface using the USB circuitry.

## Global Reset

Momentary pushbutton switch RSTN is used as a global reset  to  clear  all  MAX5861  configuration  registers.  A global reset is required when uploading a new test con- figuration on the MAX5861 Register tab. Press the RSTN switch to clear the registers before uploading a new test configuration file.

Test configuration files are available for loading into the MAX5861, via the SPI interface. The MAX5861 output is available for viewing at the external OUT SMA connector.

## MODE2 Pushbutton Switch

Momentary  pushbutton  switch  MODE2  is  available  for providing  a  low-to-high  pulse  at  the  MAX5861  port MODE2 input when pressed.

The pushbutton switch is used to perform various functions within the MAX5861. Refer to the MAX5861 IC data sheet for additional information.

## Using the VC707 Virtex FPGA Board with the MAX5861 EV Kit

The  MAX5861  device  has  the  ability  to  produce  PRBS data for both the SCQAM and OFDM ports. This PRBS is inserted in place of the input interface data if programmed. The MAX5861 device can be fully evaluated without the need for the VC707. But if input data is desired, the FPGA platform (VC707) can be used as a data source for the MAX5861 EV kit. The VC707 drives the MAX5861 multiplexed input ports, control signals and monitors the ready logic outputs. The EV kit software provides the VC707 tab for controlling the VC707.

The  VC707  and  MAX5861  EV  kit  boards  can  be  connected using the available FMC interface connector. See Figure  4  for  details  in  connecting  the  boards  together. Alternatively,  the  VC707  and  MAX5861  EV  kit  can  be connected with coaxial ribbon cables (Part No.: Samtec HDR-169468-01). Note that it is necessary to use recommended hardware and/or cables to get a reliable electrical connection between the boards.

## Component List, Schematics, and PCB Layout Diagrams

Refer to the following files attached to this data sheet for component information, schematics, PCB layout diagrams:

- BOM\_MAX5861EVKIT\_REVA.xlsx
- Schematic\_MAX5861\_evkit\_reva.PDF
- PCB\_MAX5861\_evkit\_reva.PDF

## Component Suppliers

| SUPPLIER                               | PHONE         | WEBSITE                     |
|----------------------------------------|---------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372  | www.fairchildsemi.com       |
| Hong Kong X'tals Ltd.                  | 852-35112388  | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | 770-436-1300  | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112  | www.panasonic.com           |
| Taiyo Yuden                            | 800-348-24120 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100  | www.component.tdk.com       |

Note:

Indicate that you are using the MAX5861s when contacting these component suppliers.

## Ordering Information

| PART          | TYPE      | TYPE                                                                  |
|---------------|-----------|-----------------------------------------------------------------------|
| MAX5861EVKIT# | EV Kit    | 160-Channel SCQAM and 6-Channel OFDM Cable Modulator                  |
| EK-V7-VC707-G | FPGABoard | Xilinx Virtex 7 FPGABoard - Ordered through a qualified Xilinx Vendor |

│

Evaluates: MAX5861

## MAX5861 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX5861

## Configuration Load Sequence Output Example

The following is a Results Log capture of a configuration load sequence. To make the configuration easier to follow, repeated functions and/or writes (i.e. same or similar register values to channels 1 through 128, etc) will be  condensed  and  noted  as  such  with  ellipses  between  the  initial  write  and  the  final  write  within  the configuration load file. The sequence uses the Test tab and configures the device for a single-carrier SCQAM. It then checks the SCQAM Status tab for the current settings. This is followed by a reset and reconfiguration using the Register tab with a (128) SCQAM plus (2) 192MHz bandwidth OFDM configuration from the input interface. The FPGA is then configured for a (128) channel configuration, the memory is loaded with a pattern, the SDCLK is enabled and the memory is started. The next step was to check the OFDM Status tab for the current settings. The final step is to look at the Device Status tab. Especially given the order of operation, the FIFOs and parity might have startup errors. The reading of these registers clears these errors and subsequent reads will be valid for operating status.

## Test Tab - Load Single SCQAM:

//Test:  Display Sample Pictures for Configurations //  File Configuration Load, Board Address  0x0 Write Reg:  0x026    0x000A000A //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x008    0x000007BF //--Write Reg:  0x081    0x000FFFFE //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x080    0x0000105E //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x088    0x00000401 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x109    0x000001A0 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x10A    0x000002E9 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x10B    0x00023000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x10C    0x00FE028A //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x101    0x00078000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x061    0x0003C000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x041    0x00080F55 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x108    0x00D00616 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x100    0x00000001 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x060    0x00000001

```
//-->  USB/FTDI Write Good/Verified Write Reg:  0x040    0x00000000 //-->  USB/FTDI Write Good/Verified Write Reg:  0x0D8    0x80000000 //-->  USB/FTDI Write Write Reg:  0x042    0x010000FE //-->  USB/FTDI Write Good/Verified Write Reg:  0x047    0x00008000 //-->  USB/FTDI Write Good/Verified Write Reg:  0x040    0x00000003 //-->  USB/FTDI Write Good/Verified Write Reg:  0x001    0x87800000 //-->  USB/FTDI Write Good/Verified //Register:  Read Modify Write Reg:  0x0D8  data  0x00000000  mask  0x00000020 Read Reg:  0x0D8    0x80001010   //--> USB/FTDI Read Good Write Reg:  0x0D8    0x80001010 //-->  USB/FTDI Write // File Loaded: C:\Test\MAX5861EVKIT/ConfigurationLoadFiles/SCQAM/001SB256_5861_PRBS_4915p2M_1000M.txt Loaded file from ConfigurationLoadFiles : C:\Test\MAX5861EVKIT/ConfigurationLoadFiles/SCQAM/001SB256_5861_PRBS_4915p2M_1000M.txt
```

## QAM Status Tab:

```
//QAM Status:  Get QAM Channel Status for Channel Number 1 Read Reg:  0x088    0x00000001   //--> USB/FTDI Read Good Read Reg:  0x080    0x0000105E   //--> USB/FTDI Read Good //  32 chan mute bit 0 with result of 0 Read Reg:  0x081    0x000FFFFE   //--> USB/FTDI Read Good //  8 chan mute bit 0 with result of 0 Read Reg:  0x009    0x00000040   //--> USB/FTDI Read Good //  32 chan powerdown 6 with result of 1 //  SYM_INTF 0x00000040 Read Reg:  0x108    0x00100616   //--> USB/FTDI Read Good //  SYMIF 0x00100616 Read Reg:  0x10A    0x000002E9   //--> USB/FTDI Read Good //  LF 0x000002E9 Read Reg:  0x109    0x000001A0   //--> USB/FTDI Read Good //  KF 0x000001A0 Read Reg:  0x10C    0x00FE028A   //--> USB/FTDI Read Good //  G1G2 0x00FE028A Read Reg:  0x042    0x010000FE   //--> USB/FTDI Read Good //  G5G6 0x010000FE
```

Read Reg:  0x10B    0x00023000   //--&gt; USB/FTDI Read Good //  NCOA 0x00023000 Read Reg:  0x101    0x00078000   //--&gt; USB/FTDI Read Good //  NCO2 0x00078000 Read Reg:  0x061    0x0003C000   //--&gt; USB/FTDI Read Good //  NCO3 0x0003C000 Read Reg:  0x041    0x00080F55   //--&gt; USB/FTDI Read Good //  NCO4 0x00080F55

//QAM Status:  Get Channel fOUT for Channel Number 1 Read Reg:  0x10B    0x00023000   //--&gt; USB/FTDI Read Good //  NCOA 0x00023000 Read Reg:  0x101    0x00078000   //--&gt; USB/FTDI Read Good //  NCO2 0x00078000 Read Reg:  0x061    0x0003C000   //--&gt; USB/FTDI Read Good //  NCO3 0x0003C000 Read Reg:  0x041    0x00080F55   //--&gt; USB/FTDI Read Good //  NCO4 0x00080F55 //  Value Signed Mag (1) 143360.000  (2) 491520.000  (3) 245760.000  (4) 528213.000 //  NCO Freq Offset in Hz (1) 21000000.000  (2) 72000000.000  (3) 288000000.000  (4) 618999609.375 //  Calculated Channel Offset ==&gt;  999.999609375 MHz

## Register Tab - Toggle RSTN:

//Register:  Toggle Bit RSTN //  Reset also Resets The DAC DLL - Clear Lock Status //Register:  Read Modify Write Reg:  0x0D8  data  0x00000000  mask  0x00000020 Read Reg:  0x0D8    0x83FF10B4   //--&gt; USB/FTDI Read Good Write Reg:  0x0D8    0x83FF1094 //--&gt;  USB/FTDI Write

//Register:  Toggle Bit RSTN

## Register Tab:  Load File Configuration (128 SCQAM plus 2 OFDM):

//Register:  File IO Browse, Board Address  0x0 Write Reg:  0x026    0x000A000A //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x008    0x0000043C //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x081    0x000F0000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x080    0x00008050 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x0B1    0x04540453 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x74F    0x00000F00

//--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x0B2    0x04560455 //--&gt;  USB/FTDI Write Good/Verified … Write Reg:  0x093    0x04180417 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x7BC    0x00040008 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x7B0    0x00040008 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x0A2    0x04360435 //--&gt;  USB/FTDI Write Good/Verified … Write Reg:  0x0B5    0x045C045B //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x109    0x000001A0 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x10A    0x000002E9 //--&gt;  USB/FTDI Write Good/Verified … Write Reg:  0x5F1    0x000001A0 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x5F2    0x000002E9 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x10B    0x00063000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x113    0x00059000 //--&gt;  USB/FTDI Write Good/Verified … Write Reg:  0x5F3    0x00023000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x10C    0x000A028A //--&gt;  USB/FTDI Write Good/Verified … Write Reg:  0x4DC    0x000A028A //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x744    0x065C074E //--&gt;  USB/FTDI Write Good/Verified … Write Reg:  0x758    0x0000079C //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x101    0x00178000 //--&gt;  USB/FTDI Write Good/Verified

…

Write Reg:  0x381    0x00178000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x061    0x0013C000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x065    0x00114000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x069    0x00014000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x06D    0x0003C000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x7B1    0x00064000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x7BD    0x0008C000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x041    0x0005B400 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x108    0x00C00000 //--&gt;  USB/FTDI Write Good/Verified … Write Reg:  0x5F0    0x00C00000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x100    0x00000001 //--&gt;  USB/FTDI Write Good/Verified … Write Reg:  0x5B0    0x00000001 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x060    0x00000001 //--&gt;  USB/FTDI Write Good/Verified … Write Reg:  0x06C    0x00000001 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x7B2    0x00013823 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x7BE    0x00013823 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x040    0x00000000 //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x0D8    0x80000000 //--&gt;  USB/FTDI Write Write Reg:  0x042    0x010000FE //--&gt;  USB/FTDI Write Good/Verified Write Reg:  0x047    0x00008000

```
//-->  USB/FTDI Write Good/Verified Write Reg:  0x040    0x00000003 //-->  USB/FTDI Write Good/Verified Write Reg:  0x001    0x87800000 //-->  USB/FTDI Write Good/Verified //Register:  Read Modify Write Reg:  0x0D8  data  0x00000000  mask  0x00000020 Read Reg:  0x0D8    0x80001010   //--> USB/FTDI Read Good Write Reg:  0x0D8    0x80001010 //-->  USB/FTDI Write // File C:\Test\MAX5861EVKIT\ConfigurationLoadFiles\Mix\128SB256and002OB1024_5861_input_630M_192B W_50k_1024c256r_P.txt
```

```
Loaded: //VC707:  File I/O VC707 Tab - Load Configuration for 128 Channels: // Loading File Into FPGA : C:\Test\MAX5861EVKIT\FPGAConfigurationFiles\128Sxxx_VC707_SPinput_TS128_PRBS_PCLK633M.tx t //VC707:  Send Command  leds 00000000 //VC707:   Return  leds 00000000  ACK  # //VC707:  Send Command  si570 set 633.0 //VC707:   Return  si570 set 633.0  00 42 C4 F6 63 11    ACK  # //VC707:  Send Command  leds 0000000b //VC707:   Return  leds 0000000b  ACK  # //VC707:  Send Command  type set all prbs //VC707:   Return  type set all prbs  ACK  # //VC707:  Send Command  prbs set 1 0 1558 1 off 0 even //VC707:   Return  prbs set 1 0 1558 1 off 0 even  ACK  # … //VC707:  Send Command  prbs set 128 0 2356 1 off 0 even //VC707:   Return  prbs set 128 0 2356 1 off 0 even  ACK  # //VC707:  Send Command  leds 000000b1 //VC707:   Return  leds 000000b1  ACK  # //VC707:  Send Command  prbs reset all off //VC707:   Return  prbs reset all off  ACK  # //VC707:  Send Command  prbs enable all on //VC707:   Return  prbs enable all on  ACK  # //VC707:  Send Command  leds 00000111 //VC707:   Return  leds 00000111  ACK  # //VC707:  Send Command  pll reset qam on //VC707:   Return  pll reset qam on  ACK  # //VC707:  Send Command  pll clksel qam clkin1 //VC707:   Return  pll clksel qam clkin1  ACK  # //VC707:  Send Command  pll reset qam off //VC707:   Return  pll reset qam off  ACK  #
```

//VC707:  Send Command  pll qam info //VC707:   Return  pll qam info  inclk - ok | fbclk - ok | outclk - locked  ACK  # //VC707:  Send Command  oserdes reset adat on //VC707:   Return  oserdes reset adat on  ACK  # //VC707:  Send Command  oserdes reset adat off //VC707:   Return  oserdes reset adat off  ACK  # //VC707:  Send Command  leds 00001111 //VC707:   Return  leds 00001111  ACK  # //VC707:  Send Command  bank set adat 16 //VC707:   Return  bank set adat 16  ACK  # //VC707:  Send Command  ready reset on //VC707:   Return  ready reset on  ACK  # //VC707:  Send Command  ready channel 1 //VC707:   Return  ready channel 1  ACK  # //VC707:  Send Command  delay reset pulse //VC707:   Return  delay reset pulse  ACK  # //VC707:  Send Command  oserdes enable pclk on //VC707:   Return  oserdes enable pclk on  ACK  # //VC707:  Send Command  delay set pclk 7 //VC707:   Return  delay set pclk 7  ACK  # //VC707:  Send Command  oserdes enable psync on //VC707:   Return  oserdes enable psync on  ACK  # //VC707:  Send Command  leds 00011111 //VC707:   Return  leds 00011111  ACK  # //VC707:  Send Command  ready bypass on //VC707:   Return  ready bypass on  ACK  # //VC707:  Send Command  ready bypass set 0 FEFEFEFE //VC707:   Return  ready bypass set 0 FEFEFEFE  ACK  # //VC707:  Send Command  ready bypass set 1 FEFEFEFE //VC707:   Return  ready bypass set 1 FEFEFEFE  ACK  # //VC707:  Send Command  ready bypass set 2 FEFEFEFE //VC707:   Return  ready bypass set 2 FEFEFEFE  ACK  # //VC707:  Send Command  ready bypass set 3 FEFEFEFE //VC707:   Return  ready bypass set 3 FEFEFEFE  ACK  # //VC707:  Send Command  ready bypass set 4 FEFEFEFE //VC707:   Return  ready bypass set 4 FEFEFEFE  ACK  # //VC707:  Send Command  ready bypass set 5 00000000 //VC707:   Return  ready bypass set 5 00000000  ACK  # //VC707:  Send Command  leds 00011111 //VC707:   Return  leds 00011111  ACK  # … //VC707:  Send Command  leds 00111111 //VC707:   Return  leds 00111111  ACK  #

```
//VC707:  Send Command  bank enable adat on //VC707:   Return  bank enable adat on  ACK  # //VC707:  Send Command  oserdes enable adat on //VC707:   Return  oserdes enable adat on  ACK  # //VC707:  Send Command  leds 00011111 //VC707:   Return  leds 00011111  ACK  # … //VC707:  Send Command  leds 00111111 //VC707:   Return  leds 00111111  ACK  # //VC707:  Send Command  ready reset off //VC707:   Return  ready reset off  ACK  # //VC707:  Send Command  leds 00111111 //VC707:   Return  leds 00111111  ACK  # … //VC707:  Send Command  leds 01111111 //VC707:   Return  leds 01111111  ACK  # //VC707:  Send Command  ready bypass off //VC707:   Return  ready bypass off  ACK  # //VC707:  Send Command  ready bypass set 0 FFFFFFFF //VC707:   Return  ready bypass set 0 FFFFFFFF  ACK  # //VC707:  Send Command  ready bypass set 1 FFFFFFFF //VC707:   Return  ready bypass set 1 FFFFFFFF  ACK  # //VC707:  Send Command  ready bypass set 2 FFFFFFFF //VC707:   Return  ready bypass set 2 FFFFFFFF  ACK  # //VC707:  Send Command  ready bypass set 3 FFFFFFFF //VC707:   Return  ready bypass set 3 FFFFFFFF  ACK  # //VC707:  Send Command  ready bypass set 4 00000000 //VC707:   Return  ready bypass set 4 00000000  ACK  # //VC707:  Send Command  ready bypass set 5 00000000 //VC707:   Return  ready bypass set 5 00000000  ACK  # //VC707:  Send Command  leds 11111111 //VC707:   Return  leds 11111111  ACK  # //VC707: Loaded
```

FPGA Configuration File C:\Test\MAX5861EVKIT\FPGAConfigurationFiles\128Sxxx\_VC707\_SPinput\_TS128\_PRBS\_PCLK633M.tx t into the FPGA Successfully VC707 Tab - Load Memory File for OFDM: //VC707:  Load Memory File Into VC707 //VC707:  Send Command  delay set sdclk 5 //VC707:   Return  delay set sdclk 5  ACK  # //  DDR3 Memory File Load Update: Lines Written is --&gt;2048 //  DDR3 Memory File Load Update: Lines Written is --&gt;4096 … //  DDR3 Memory File Load Update: Lines Written is --&gt;71680

//VC707:  Send Command to Read Memory  ddr3 read 0 1 //VC707:   Read 1 Blocks of DDR3 Memory //VC707:   Reading Block #0 of 1 //VC707:   Reading Complete - Now Formatting Data //VC707:   Bytes From Block 2 : Read 1 Blocks of DDR3 Memory //VC707: 11111100 11111100 11111100 11111100 11111100 11111100 11111100 11111100 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000 //VC707:   Read From DDR3 Memory:   Read 1 Blocks of DDR3 Memory //VC707:   DDR3 Read Results Written to File 'VC707DDR3ReadMemoryResults.txt' //  CRC Verfied Good and All FPGA Communications Returned ACKs //VC707: Loaded DDR3 Memory File C:\Test\MAX5861EVKIT\FPGAConfigurationFiles\VC707Memfile\_Fill\_50kSpace4kIFFT\_BW192M\_1024Q AM\_CP1024RP256\_14symb.txt into Memory Successfully //VC707:  Send Command  ofdm memory 1 0 17920 //VC707:   Return  ofdm memory 1 0 17920  ACK  #

## VC707 Tab - Enable SDCLK:

//VC707:  Send Command  leds tt0000tt //VC707:   Return  leds tt0000tt  ACK  # //VC707:  Enable the SDCLK Output //VC707:  Send Command  leds 00111111 //VC707:   Return  leds 00111111  ACK  # //VC707:  Send Command  delay reset pulse //VC707:   Return  delay reset pulse  ACK  # //VC707:  Send Command  oserdes enable pclk on //VC707:   Return  oserdes enable pclk on  ACK  # //VC707:  Send Command  leds 01111111 //VC707:   Return  leds 01111111  ACK  # //VC707:  Send Command  pll reset ofdm on //VC707:   Return  pll reset ofdm on  ACK  # //VC707:  Send Command  pll clksel ofdm clkin1 //VC707:   Return  pll clksel ofdm clkin1  ACK  # //VC707:  Send Command  pll reset ofdm off //VC707:   Return  pll reset ofdm off  ACK  # //VC707:  Send Command  pll ofdm info //VC707:   Return  pll ofdm info  inclk - ok | fbclk - ok | outclk - locked  ACK  # //VC707:  Send Command  oserdes reset sdclk on //VC707:   Return  oserdes reset sdclk on  ACK  # //VC707:  Send Command  oserdes reset sdclk off //VC707:   Return  oserdes reset sdclk off  ACK  #

//VC707:  Send Command  oserdes enable sdclk on //VC707:   Return  oserdes enable sdclk on  ACK  # //VC707:  Send Command  leds 00000111 //VC707:   Return  leds 00000111  ACK  # //VC707:  Send Command  leds 00000001 //VC707:   Return  leds 00000001  ACK  # //VC707:  Send Command  oserdes enable bcsync on //VC707:   Return  oserdes enable bcsync on  ACK  # //VC707:  Send Command  oserdes enable bdat on //VC707:   Return  oserdes enable bdat on  ACK  # //VC707:  Send Command  oserdes enable cdat on //VC707:   Return  oserdes enable cdat on  ACK  # //VC707:  Send Command  leds tt1111tt //VC707:   Return  leds tt1111tt  ACK  #

## VC707 Tab - Start Memory Flow for OFDM:

//VC707:  Start OFDM Data Flow from Memory //VC707:  Start Memory from Stream 1 //VC707:  Send Command  ofdm disable //VC707:   Return  ofdm disable   ACK  # //VC707:  Send Command  ofdm enable 1 on //VC707:   Return  ofdm enable 1 on  enable stream: 1  length: 17920  mempos: 0  ACK  # //VC707:  Send Command  leds tbhqqhbt //VC707:   Return  leds tbhqqhbt  ACK  #

## OFDM Status Tab:

//OFDM Status:  Get OFDM Channel Status for Channel Number 1 Read Reg:  0x741    0x0000FF00   //--&gt; USB/FTDI Read Good Read Reg:  0x009    0x000003C3   //--&gt; USB/FTDI Read Good //  OFDM chan powerdown 0 with result of 1 //  OFDM\_CFG 0x000003C3 Read Reg:  0x74B    0x00000006   //--&gt; USB/FTDI Read Good Read Reg:  0x74C    0x01EFE080   //--&gt; USB/FTDI Read Good Read Reg:  0x740    0x00029FFE   //--&gt; USB/FTDI Read Good Read Reg:  0x7B0    0x00040008   //--&gt; USB/FTDI Read Good Read Reg:  0x7B1    0x00064000   //--&gt; USB/FTDI Read Good Read Reg:  0x041    0x0005B400   //--&gt; USB/FTDI Read Good //  Value Signed Mag (3) 409600.000  (4) 373760.000 //  NCO Freq Offset in Hz (3) 480000000.000  (4) 438000000.000 Read Reg:  0x7B5    0x1100006F   //--&gt; USB/FTDI Read Good //Register:  Read Modify Write Reg:  0x741  data  0x00004000  mask  0x00004000 Read Reg:  0x741    0x0000FF00   //--&gt; USB/FTDI Read Good Write Reg:  0x741    0x0000FF00 //--&gt;  USB/FTDI Write Good/Verified Read Reg:  0x7B2    0x00003823   //--&gt; USB/FTDI Read Good

```
Read Reg:  0x744    0x065C074E   //--> USB/FTDI Read Good Read Reg:  0x745    0x0550034E   //--> USB/FTDI Read Good Read Reg:  0x746    0x044E0472   //--> USB/FTDI Read Good Read Reg:  0x747    0x00800370   //--> USB/FTDI Read Good Read Reg:  0x748    0x024E0270   //--> USB/FTDI Read Good Read Reg:  0x749    0x014E0170   //--> USB/FTDI Read Good Read Reg:  0x74A    0x0000079C   //--> USB/FTDI Read Good Device Status Tab: //Device Status:  I2C Temperature Read Write I2C Address:  78  Command  9  Data  32   //--> USB/FTDI Write Good Write I2C Address:  78  Command  1  Read I2C Data:  93   //--> USB/FTDI Read Good //Device Status:  FIFO Status Read Reg:  0x0D9    0x00086F0F   //--> USB/FTDI Read Good //Register:  Read Modify Write Reg:  0x0DA  data  0x00000000  mask  0xFFFFFFFF Read Reg:  0x0DA    0xFFFFFFFF   //--> USB/FTDI Read Good Write Reg:  0x0DA    0x00000000 //-->  USB/FTDI Write Good/Verified … //Register:  Read Modify Write Reg:  0x0E3  data  0x00000000  mask  0xFFFFFFFF Read Reg:  0x0E3    0x00000000   //--> USB/FTDI Read Good Write Reg:  0x0E3    0x00000000 //-->  USB/FTDI Write Good/Verified Read Reg:  0x741    0x0000FF00   //--> USB/FTDI Read Good Read Reg:  0x74F    0x0000FF00   //--> USB/FTDI Read Good Read Reg:  0x75D    0x00020F01   //--> USB/FTDI Read Good Read Reg:  0x76C    0x00020F01   //--> USB/FTDI Read Good Read Reg:  0x77A    0x00020F01   //--> USB/FTDI Read Good Read Reg:  0x788    0x00020F01   //--> USB/FTDI Read Good //Register:  Read Modify Write Reg:  0x741  data  0x00000000  mask  0x00003000 Read Reg:  0x741    0x0000FF00   //--> USB/FTDI Read Good Write Reg:  0x741    0x0000CF00 //-->  USB/FTDI Write Good/Verified … //-->  USB/FTDI Write Good/Verified //Register:  Read Modify Write Reg:  0x788  data  0x00000000  mask  0x00003000 Read Reg:  0x788    0x00020F01   //--> USB/FTDI Read Good Write Reg:  0x788    0x00020F01 //-->  USB/FTDI Write Good/Verified //Device Status:  Parity Status Read Reg:  0x0D8    0x80001098   //--> USB/FTDI Read Good //Register:  Read Modify Write Reg:  0x0D8  data  0x00000000  mask  0x00000058 Read Reg:  0x0D8    0x80001098   //--> USB/FTDI Read Good Write Reg:  0x0D8    0x80001080
```

```
//-->  USB/FTDI Write //Device Status:  Lock Status Read Reg:  0x0D8    0x80001080   //--> USB/FTDI Read Good //Register:  Read Modify Write Reg:  0x0D8  data  0x00000000  mask  0x00000020 Read Reg:  0x0D8    0x80001080   //--> USB/FTDI Read Good Write Reg:  0x0D8    0x80001080 //-->  USB/FTDI Write //Device Status:  FIFO Status Read Reg:  0x0D9    0x00086000   //--> USB/FTDI Read Good //Register:  Read Modify Write Reg:  0x0DA  data  0x00000000  mask  0xFFFFFFFF Read Reg:  0x0DA    0x00000000   //--> USB/FTDI Read Good Write Reg:  0x0DA    0x00000000 //-->  USB/FTDI Write Good/Verified … //-->  USB/FTDI Write Good/Verified //Register:  Read Modify Write Reg:  0x0E3  data  0x00000000  mask  0xFFFFFFFF Read Reg:  0x0E3    0x00000000   //--> USB/FTDI Read Good Write Reg:  0x0E3    0x00000000 //-->  USB/FTDI Write Good/Verified Read Reg:  0x741    0x0000CF00   //--> USB/FTDI Read Good Read Reg:  0x74F    0x0000CF00   //--> USB/FTDI Read Good Read Reg:  0x75D    0x00020F01   //--> USB/FTDI Read Good Read Reg:  0x76C    0x00020F01   //--> USB/FTDI Read Good Read Reg:  0x77A    0x00020F01   //--> USB/FTDI Read Good Read Reg:  0x788    0x00020F01   //--> USB/FTDI Read Good //Register:  Read Modify Write Reg:  0x741  data  0x00000000  mask  0x00003000 Read Reg:  0x741    0x0000CF00   //--> USB/FTDI Read Good Write Reg:  0x741    0x0000CF00 //-->  USB/FTDI Write Good/Verified … //Register:  Read Modify Write Reg:  0x788  data  0x00000000  mask  0x00003000 Read Reg:  0x788    0x00020F01   //--> USB/FTDI Read Good Write Reg:  0x788    0x00020F01 //-->  USB/FTDI Write Good/Verified //Device Status:  Parity Status Read Reg:  0x0D8    0x80001080   //--> USB/FTDI Read Good //Register:  Read Modify Write Reg:  0x0D8  data  0x00000000  mask  0x00000058 Read Reg:  0x0D8    0x80001080   //--> USB/FTDI Read Good Write Reg:  0x0D8    0x80001080 //-->  USB/FTDI Write
```

D

C

B

A

CSA

DTON

DTOP

INTR\_N

MODE2

RST\_N

AN0

AP0

AN1

AP1

AN2

AP2

AN3

AP3

AN4

AP4

AN5

AP5

AN6

AP6

AN7

AP7

AN8

AP8

AN9

AP9

BN0

BP0

BN1

BP1

BN2

BP2

BN3

BP3

BN4

BP4

BN5

BP5

BN6

BP6

BN7

BP7

BN8

BP8

CN0

CP0

CN1

CP1

CN2

CP2

CN3

CP3

CN4

CP4

CN5

CP5

CN6

CP6

CN7

CP7

CN8

CP8

SYNC1N

SYNC1P

SYNC2N

SYNC2P

SYNC3N

SYNC3P

SYNC4N

SYNC4P

SYNC5N

SYNC5P

SYNC6N

SYNC6P

VALIDAN

VALIDAP

PSYNCN

PSYNCP

PCLKN

PCLKP

RDYAN

RDYAP

RDYSYNCN

RDYSYNCP

RDYCLKN

RDYCLKP

6

0.9V\_VDDSENSE

P8

D9

SS\_N

C9

D8

B9

C8

F4

E4

D3

C3

D4

C4

D5

C5

D6

C6

B3

A3

B4

A4

B5

A5

B6

A6

B7

A7

M3

L3

M4

L4

M5

L5

M6

L6

M7

L7

K6

J6

H4

G4

K4

J4

K5

J5

B2

A2

D1

C1

D2

C2

F2

E2

H1

G1

H2

G2

K2

J2

M1

L1

M2

L2

P2

N2

P6

N6

H5

G5

H6

G6

K1

J1

P1

N1

F5

E5

F3

E3

H3

G3

P5

N5

P4

N4

P3

N3

DTON

K12

VDD09S

DTOP

INTR\_N

MODE2

RST\_N

AN0

AP0

AN1

AP1

AN2

AP2

AN3

AP3

AN4

AP4

AN5

AP5

AN6

AP6

AN7

AP7

AN8

AP8

AN9

AP9

BN0

BP0

BN1

BP1

BN2

BP2

BN3

BP3

BN4

BP4

BN5

BP5

BN6

BP6

BN7

BP7

BN8

BP8

CN0

CP0

CN1

CP1

CN2

CP2

CN3

CP3

CN4

CP4

CN5

CP5

CN6

CP6

CN7

CP7

CN8

CP8

SYNC1N

SYNC1P

SYNC2N

SYNC2P

SYNC3N

SYNC3P

SYNC4N

SYNC4P

SYNC5N

SYNC5P

SYNC6N

SYNC6P

VALIDAN

VALIDAP

PSYNCN

PSYNCP

PCLKN

PCLKP

RDYAN

RDYAP

RDYSYNCN

RDYSYNCP

RDYCLKN

RDYCLKP

A13

JU24

A14

VDD09

GND

A10

B13

B14

VDD09

GND

A11

VDD09

GND

A12

C13

VDD09

GND

A15

C14

VDD09

GND

A16

D11

VDD09

GND

A21

D12

VDD09

GND

A22

D13

VDD09

GND

B10

D14

VDD09

GND

B11

E8

VDD09

GND

B12

E9

VDD09

GND

B15

E10

VDD09

GND

B16

E11

VDD09

GND

B21

E12

VDD09

GND

B22

E13

VDD09

GND

C10

E14

VDD09

GND

C11

F14

VDD09

GND

C12

G14

VDD09

GND

C15

G15

VDD09

GND

C16

H14

VDD09

GND

C17

J8

VDD09

GND

C18

J9

VDD09

GND

C19

J10

VDD09

GND

C20

J11

VDD09

GND

C21

J12

VDD09

GND

C22

J13

VDD09

GND

D10

5

J14

VDD09

GND

D15

K8

VDD09

GND

D16

K9

VDD09

GND

D17

VDD09

K10

VDD09

GND

D18

L14

K14

M14

VDD09

GND

E15

VDD09

GND

E16

VDD09

GND

E17

VDD09

GND

E18

GND

E19

VDD18

F7

G7

H7

VDD18

GND

E20

VDD18

GND

E21

VDD18

GND

GND

F13

G13

VDD18O

GND

E22

F10

F9

H13

VDD18O

GND

F11

FSADJ

VDD18O

GND

F12

GND

F15

G12

G8

VDD18BO

GND

F16

VDD18BI

GND

F17

GND

F18

F8

H8

VDD18I

GND

VDD18I

GND

GND

F19

G10

G9

J7

J15

GND

GND

G11

R213

2.0k

1%

DACREF

J16

GND

GND

G16

J17

GND

GND

G17

J18

GND

GND

G18

J19

GND

GND

G19

K13

GND

GND

H9

K15

GND

GND

K16

GND

GND

K17

GND

GND

H10

H12

H11

K18

GND

GND

H15

REFIO

CREF

4

K19

GND

GND

K20

GND

GND

K21

GND

GND

K22

GND

GND

H16

H18

H17

H19

L8

GND

L9

GND

AVCLK

A17

AVCLK

C107

1uF

L10

GND

AVCLK

A20

L11

GND

AVCLK

L12

GND

AVCLK

L13

GND

AVCLK

L15

GND

AVCLK

B17

B20

B19

B18

AVDD18

C108

1uF

L16

GND

M8

GND

AVDD18

D19

M9

GND

AVDD18

M10

GND

AVDD18

D20

M11

GND

AVDD18

D22

D21

C109

OPEN

M12

GND

AVDD18

L17

M13

GND

AVDD18

L18

M15

GND

AVDD18

M16

GND

AVDD18

M17

GND

AVDD18

L19

L21

L20

M21

GND

AVDD18

L22

AVDD3

C110

OPEN

M22

GND

N12

GND

AVDD3

F20

N13

GND

AVDD3

F21

N16

GND

AVDD3

F22

N21

GND

AVDD3

G20

P13

GND

AVDD3

H20

2

P18

GND

AVDD3

P21

GND

AVDD3

AVDD3

AVDD3

J20

J22

J21

P22

U11-6

JU12

C111

OPEN

1

C112

0.1uF

P16

GND

GND

N11

GNDS

SA3

SA2

SA1

SA0

ON

ON

OP

OP

CLKP

CLKN

DATACLKP

DATACLKN

PARAN

PARAP

PARBN

PARBP

PERR

RSETIO

RSETII

TESTCLKN

TESTCLKP

REFCLKP

REFCLKN

SDCLKP

SDCLKN

PERRI

LOCK

REFIO

CREF

DACREF

FSADJ

REFRES

SE

TEST

SCLK

SDI

SDO

TDA

TDC

OTP

MODE

TEST\_N

CFG1

CFG2

CFG3

CFG4

3

JU25

U23

MAX5861

N7

N9

P10

P9

G21

G22

H21

H22

A18

A19

P15

P14

F6

E6

F1

E1

M19

P11

K11

N14

N15

A1

B1

J3

K3

D7

N17

N19

P20

P19

N20

N22

M18

N18

P7

N10

N8

B8

A9

A8

C7

E7

K7

P12

P17

M20

REFIOA

GND

8

6

7

5

N.C.

OUT

N.C.

N.C.

0.9V\_GNDSENSE

SA3

SA2

SA1

SA0

DATACLKP

DATACLKN

CREF

DACREF

FSADJ

1

SCLK

SDI

SDO

TDA

VDD18

U11

MAX6161

CFG1

CFG2

CFG3

CFG4

N.C.

IN

N.C.

GND

REFIO

2

JU4

1

2

3

4

PARAN

PARAP

PARBN

PARBP

PERR

REFCLKP

REFCLKN

SDCLKP

SDCLKN

PERRI

LOCK

R214

499

1%

AVDD3

C113

0.1uF

AVDD3

SE

DACREF

1

2

3

AVDD3

L9

390nH

AVDD3

L10

390nH

CLKP\_I

CLKN\_I

JU6

2

C105

1uF

AVDD3

C106

1uF

1

6

L17

1.3nH

VDD09

VDD18

AVCLK

AVDD18

AVDD3

TITLE:

T5

3

4

C466

6.8pF

VDD09

VDD18

AVCLK

AVDD18

AVDD3

LTR

C103

0.1uF

AVDD3

C104

0.1uF

DATACLKP

DATACLKN

MAX5861 EVKIT

DUT CONNECTIONS

REVISED BY:

PCB PART NUMBER:

&lt;REVISED BY:&gt;

DRAWN:

&lt;Drawn By&gt;

4

DATED:

03/09/2015

6

1

3

T6

1

REVISION RECORD

ECO NO:

APPROVED:

OUT

2

1

DATE:

REV:

A

SHEET:       OF 10

1

D

C

B

A

D

C

B

A

0.9V\_OUT

C84

0.1uF

6

+

C88

10uF

L6

4.7uH

C87

470uF

6.3V

VIN

C14

10uF

C86

OPEN

R165

OPEN

R5

10

8

7

8

7

N2

0.9V\_GNDSENSE

R21

0

R166

10

6 5

N1

4

1

3

2

65

3

2

1

4

VCC

R10

16.9k

1%

R167

10

U8\_PG2

U8\_PG1

R1

0

C85

0.22uF

5

R9

8.45k

1%

2

15

3

4

9

8

0.9V\_VDDSENSE

R22

0

R8

143

1%

C71

2200pF

C72

33pF

FB1

EN1

PGOOD2

EN2

PGOOD1

DH1

BST1

1

LX1

7

24

COMP1

R4

10

C73

2200pF

R154

10k

1%

DL1

5

0.9V\_OUT

LIM1

U8

MAX15023

PGND1

PGND2

6

13

23

R155

33.2k

1%

VIN

21

IN

C74

1uF

DL2

14

20

SGND

LX2

12

4

22

LIM2

RT

COMP2

FB2

VCC

EP

DH2

BST2

19

18

17

16

10

11

R156

8.06k

1%

R157

33.2k

1%

VCC

C75

3300pF

R161

10k

1%

C78

4.7uF

R2

0

C80

0.22uF

2

4

R158

143

1%

C76

2200pF

C77

33pF

5 6

N3-B

3

7 8

N3-A

1

2.5V\_OUT

R159

9.53k

1%

R160

3.01k

1%

C79

10uF

L5

10uH

C81

OPEN

R162

OPEN

VIN

+

3

C83

470uF

6.3V

2.5V\_OUT

C82

0.1uF

2.5V\_OUT

C91

4.7uF

2

3

4

5

7

10

5.0V\_IN

GND

IN

IN

IN

IN

SHDN

GND

EP

2

U9

MAX1793

N.C.

N.C.

N.C.

1

8

FB7

0.001

9

N.C.

16

VIN

+

OUT

OUT

OUT

OUT

RST

SET

15

14

13

12

6

11

C24

150uF

10V

TITLE:

R163

OPEN

R164

0

MAX5861 EVKIT

POWER CIRCUIT

REVISED BY:

&lt;REVISED BY:&gt;

DRAWN:

&lt;Drawn By&gt;

PCB PART NUMBER:

DATED:

03/09/2015

LTR

1.8V\_OUT

1

2

3

JU26

C90

6.8uF

1

REVISION RECORD

ECO NO:

DIGITAL\_18

DIGITAL18

GND

APPROVED:

DATE:

REV:

A

SHEET:       OF 10

2

D

C

B

A

D

C

B

A

C166

4.7uF

6

C162

10uF

VIN

VIN

R215

OPEN

2

3

4

5

7

10

1

3

4

IN

IN

IN

IN

SHDN

GND

EP

IN

EN

SELA

EP

U15

MAX8902A

GND

2

AVCLK 1.85V

U14

MAX1793

N.C.

N.C.

N.C.

1

8

9

OUT

BYP

OUTS

SELB

8

7

6

5

N.C.

16

R11

0

R216

OPEN

R217

4.7k

1%

R220

10k

1%

<!-- image -->

OUT

OUT

OUT

OUT

RST

SET

C163

0.01uF

R212

0

15

14

13

12

6

11

5

AVDD18\_IN

1

3

2

JU10

AVCLK\_IN

1

2

3

JU3

C168

6.8uF

C164

10uF

ANALOG18

ANALOGCLK

4

AVDD33\_IN

AVDD18

AVDD18\_IN

AVCLK\_IN

GND

L11

C160

0.1uF

L12

L13

AVDD3

+

C159

0.1uF

AVDD18

+

+

AVCLK

C114

47uF

16V

C158

0.1uF

C115

47uF

16V

C116

47uF

16V

3

FOR EACH SUPPLY:

Place a 0201 cap between each power and ground via under U23

The remaining decoupling caps in this section should be placed near U23

C117

10uF

C145

0.1uF

C119

10uF

C122

10uF

C124

1uF

C130

1uF

C125

1uF

C126

1uF

C135

0.1uF

C136

0.1uF

C141

0.1uF

C146

0.1uF

C132

0.1uF

C137

0.1uF

C142

0.1uF

C140

0.1uF

C133

0.1uF

C138

0.1uF

C143

0.1uF

C139

0.1uF

C134

0.1uF

C128

1uF

C144

0.1uF

C147

0.1uF

C155

0.1uF

C121

10uF

C129

1uF

C154

0.1uF

C156

0.1uF

C120

10uF

C153

0.1uF

TITLE:

C157

0.1uF

C131

C178

0.1uF

C123

1uF

10uF

MAX5861 EVKIT

DAC POWER CIRCUIT

REVISED BY:

PCB PART NUMBER:

&lt;REVISED BY:&gt;

DRAWN:

&lt;Drawn By&gt;

C179

0.1uF

C118

10uF

2

LTR

DATED:

03/09/2015

1

REVISION RECORD

ECO NO:

APPROVED:

DATE:

REV:

A

SHEET:       OF 10

3

D

C

B

A

<!-- image -->

<!-- image -->

D

C

B

A

+3.3V

VIN

C97

4.7uF

R205

USB\_SCLK

USB\_SDO

R206

USB\_CSC

USB\_SDA

R207

R208

USB\_MODE2

USB\_SE

GPIO6

GPIO4

GPIO3

GPIO1

VIN

0

OPEN

0

OPEN

6

C214

1uF

VIN

2

3

4

5

7

10

TP5V

IN

IN

IN

IN

SHDN

GND

EP

J2-1

J2-3

J2-5

J2-7

J2-9

J2-11

J2-13

J2-15

J2-17

J2-19

J2-21

J2-23

J2-25

J3

OPEN

J3-1

J3-3

J3-5

J3-7

J3-9

J3-11

J3-13

J3-15

J3-17

J3-19

J3-21

J3-23

J3-25

1

4

3

N.C.

U205

IN

N.C.

SHDN

GND

2

MAX8511EXK25-T

U204

MAX1793

N.C.

N.C.

1

J2

OPEN

8

9

J2-2

J2-4

J2-6

J2-8

J2-10

J2-12

J2-14

J2-16

J2-18

J2-20

J2-22

J2-24

J2-26

J3-2

J3-4

J3-6

J3-8

J3-10

J3-12

J3-14

J3-16

J3-18

J3-20

J3-22

J3-24

J3-26

OUT

5

N.C.

16

+2.5V

OUT

15

OUT

OUT

OUT

RST

SET

14

13

12

6

11

TP25V

C213

10uF

+3.3V

USB\_SDI

USB\_CSA

USB\_CSB

USB\_CSD

USB\_SCL

USB\_SDA

USB\_RSTN

GPIO7

GPIO5

GPIO2

GPIO0

TP33V

R62

133k

1%

R63

80.6k

1%

5

USB5V

C201

1uF

C98

6.8uF

1

4

3

5

U206

IN

N.C.

SHDN

2

GND

MAX8511EXK33+

6

ORG

DU

7

GND

OUT

5

USB3V

9

8

7

TPUSB3V

C202

10uF

USB23

SHIELD

SHIELD

SHIELD

6

SHIELD

USB3V

8

VCC

Q

4

R23

2.2k VBUS

D-

D+

GND

GND

U27

IC93LC56BT-E\_OT

CS

1

SCL

D

2

3

1

2

3

4

5

4

R200

R201

R47

Y1

12MHz R49

0

10k

10k

10k

2

GND

OUT

3

USB3V

USB3V

USB5V

USB3V

USB3V

USB3V

C9

8pF

C10

8pF

L16

L3

1

DN

VCC

4

USB1V8

OPEN

C95

4.7uF

C203

4.7uF

R3

12k

R12

1k

R48

OPEN

C89

100nF

C204

100nF

USB3V

USB1V8

C11

3.3uF

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

3

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

4

VPHY

9

VPLL

AGND

10

EP

USB1V8

12

37

VCORE

GND

1

VCORE

64

VCORE

U7

FT4232H

GND

GND

5

11

GND

15

GND

25

USB3V

20

VCCIO

GND

35

31

VCCIO

GND

47

42

VCCIO

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

BDBUS0

BDBUS1

BDBUS2

BDBUS3

BDBUS4

BDBUS5

BDBUS6

BDBUS7

CDBUS0

CDBUS1

CDBUS2

CDBUS3

CDBUS4

CDBUS5

CDBUS6

CDBUS7

DDBUS0

DDBUS1

DDBUS2

DDBUS3

DDBUS4

DDBUS5

DDBUS6

DDBUS7

PWREN#

SUSPENDED#

GND

51

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

2

R15

R16

R18

R19

R20

R29

R30

R31

R32

R33

R34

R35

R36

R37

R38

R39

R40

R202

R203

R204

0

0

0

0

0

0

0

0

0

0

0

0

0

0

0

0

0

0

0

0

TITLE:

LTR

USB\_SCLK

USB\_SDI

USB\_SDO

USB\_CSA

USB\_CSB

USB\_CSC

USB\_CSD

USB\_SCL

USB\_SDA

GPIO0

GPIO1

GPIO2

GPIO3

GPIO4

GPIO5

GPIO6

GPIO7

USB\_SE

USB\_RSTN

USB\_MODE2

MAX5861 EVKIT

USB INTERFACE CIRCUIT

REVISED BY:

PCB PART NUMBER:

&lt;REVISED BY:&gt;

DRAWN:

&lt;Drawn By&gt;

DATE:

C208

0.1uF

REV:

A

SHEET:         OF 10

6

DATED:

03/09/2015

USB3V

1

REVISION RECORD

ECO NO:

C205

0.1uF

USB1V8

C209

0.1uF

C206

0.1uF

C210

0.1uF

APPROVED:

C207

0.1uF

C211

0.1uF

D

C

B

A

D

C

B

A

6

J1-A

J1-A1

J1-A2

J1-A3

J1-A4

J1-A5

J1-A6

J1-A7

J1-A8

J1-A9

J1-A10

J1-A11

J1-A12

J1-A13

J1-A14

J1-A15

J1-A16

J1-A17

J1-A18

J1-A19

J1-A20

J1-A21

J1-A22

J1-A23

J1-A24

J1-A25

J1-A26

J1-A27

J1-A28

J1-A29

J1-A30

J1-A31

J1-A32

J1-A33

J1-A34

J1-A35

J1-A36

J1-A37

J1-A38

J1-A39

J1-A40

J1-B

J1-B1

J1-B2

J1-B3

J1-B4

J1-B5

J1-B6

J1-B7

J1-B8

J1-B9

J1-B10

J1-B11

J1-B12

J1-B13

J1-B14

J1-B15

J1-B16

J1-B17

J1-B18

J1-B19

J1-B20

J1-B21

J1-B22

J1-B23

J1-B24

J1-B25

J1-B26

J1-B27

J1-B28

J1-B29

J1-B30

J1-B31

J1-B32

J1-B33

J1-B34

J1-B35

J1-B36

J1-B37

J1-B38

J1-B39

J1-B40

5

SCLK\_FPGA\_FMC

CSA\_FPGA\_FMC

SDO\_FPGA\_FMC

SDI\_FPGA\_FMC

INTR\_N\_FMC

AP3

AN3

J1-C

J1-C1

J1-C2

J1-C3

J1-C4

J1-C5

J1-C6

J1-C7

J1-C8

J1-C9

J1-C10

J1-C11

J1-C12

J1-C13

J1-C14

J1-C15

J1-C16

J1-C17

J1-C18

J1-C19

J1-C20

J1-C21

J1-C22

J1-C23

J1-C24

J1-C25

J1-C26

J1-C27

J1-C28

J1-C29

J1-C30

J1-C31

J1-C32

J1-C33

J1-C34

J1-C35

J1-C36

J1-C37

J1-C38

J1-C39

J1-C40

DTOP

DTON

RST\_N\_FPGA\_FMC

MODE2\_FPGA\_FMC

PERR\_FPGA\_FMC

PERRI\_FPGA\_FMC

LOCK\_FPGA\_FMC

AP2

AN2

AP6

AN6

4

J1-D

J1-D1

J1-D2

J1-D3

J1-D4

J1-D5

J1-D6

J1-D7

J1-D8

J1-D9

J1-D10

J1-D11

J1-D12

J1-D13

J1-D14

J1-D15

J1-D16

J1-D17

J1-D18

J1-D19

J1-D20

J1-D21

J1-D22

J1-D23

J1-D24

J1-D25

J1-D26

J1-D27

J1-D28

J1-D29

J1-D30

J1-D31

J1-D32

J1-D33

J1-D34

J1-D35

J1-D36

J1-D37

J1-D38

J1-D39

J1-D40

VADJ\_FORCE\_SENSE

BP4

BN4

BP1

BN1

BP6

BN6

SYNC3P

SYNC3N

SYNC6P

SYNC6N

CP7

CN7

CP6

CN6

CP8

CN8

CP3

CN3

J1-E

J1-E1

J1-E2

J1-E3

J1-E4

J1-E5

J1-E6

J1-E7

J1-E8

J1-E9

J1-E10

J1-E11

J1-E12

J1-E13

J1-E14

J1-E15

J1-E16

J1-E17

J1-E18

J1-E19

J1-E20

J1-E21

J1-E22

J1-E23

J1-E24

J1-E25

J1-E26

J1-E27

J1-E28

J1-E29

J1-E30

J1-E31

J1-E32

J1-E33

J1-E34

J1-E35

J1-E36

J1-E37

J1-E38

J1-E39

J1-E40

3

CLKP\_FPGA

CLKN\_FPGA

BP2

BN2

BP7

BN7

CP5

CN5

SYNC5P

SYNC5N

SYNC4P

SYNC4N

J1-F

J1-F1

J1-F2

J1-F3

J1-F4

J1-F5

J1-F6

J1-F7

J1-F8

J1-F9

J1-F10

J1-F11

J1-F12

J1-F13

J1-F14

J1-F15

J1-F16

J1-F17

J1-F18

J1-F19

J1-F20

J1-F21

J1-F22

J1-F23

J1-F24

J1-F25

J1-F26

J1-F27

J1-F28

J1-F29

J1-F30

J1-F31

J1-F32

J1-F33

J1-F34

J1-F35

J1-F36

J1-F37

J1-F38

J1-F39

J1-F40

2

TITLE:

1

REVISION RECORD

LTR

ECO NO:

MAX5861 EVKIT

FMC

REVISED BY:

&lt;REVISED BY:&gt;

DRAWN:

&lt;Drawn By&gt;

PCB PART NUMBER:

DATED:

03/09/2015

APPROVED:

DATE:

REV:

A

SHEET:       OF 10

7

D

C

B

A

D

C

B

A

6

VADJ\_FORCE\_SENSE

AP0

AN0

AP4

AN4

AP7

AN7

PCLKP

PCLKN

AP5

AN5

J1-G

J1-G1

J1-G2

J1-G3

J1-G4

J1-G5

J1-G6

J1-G7

J1-G8

J1-G9

J1-G10

J1-G11

J1-G12

J1-G13

J1-G14

J1-G15

J1-G16

J1-G17

J1-G18

J1-G19

J1-G20

J1-G21

J1-G22

J1-G23

J1-G24

J1-G25

J1-G26

J1-G27

J1-G28

J1-G29

J1-G30

J1-G31

J1-G32

J1-G33

J1-G34

J1-G35

J1-G36

J1-G37

J1-G38

J1-G39

J1-G40

5

RDYCLKP\_BUFF

RDYCLKN\_BUFF

RDYSYNCP\_BUFF

RDYSYNCN\_BUFF

RDYAP\_BUFF

RDYAN\_BUFF

VALIDAP

VALIDAN

PARAP

PARAN

PSYNCP

PSYNCN

AP8

AN8

AP1

AN1

AP9

AN9

J1-H

J1-H1

J1-H2

J1-H3

J1-H4

J1-H5

J1-H6

J1-H7

J1-H8

J1-H9

J1-H10

J1-H11

J1-H12

J1-H13

J1-H14

J1-H15

J1-H16

J1-H17

J1-H18

J1-H19

J1-H20

J1-H21

J1-H22

J1-H23

J1-H24

J1-H25

J1-H26

J1-H27

J1-H28

J1-H29

J1-H30

J1-H31

J1-H32

J1-H33

J1-H34

J1-H35

J1-H36

J1-H37

J1-H38

J1-H39

J1-H40

4

BP3

BN3

BP8

BN8

BP0

BN0

SYNC1P

SYNC1N

SDCLKP

SDCLKN

PARBP

PARBN

CP0

CN0

CP4

CN4

CP1

CN1

CP2

CN2

J1-J

J1-J1

J1-J2

J1-J3

J1-J4

J1-J5

J1-J6

J1-J7

J1-J8

J1-J9

J1-J10

J1-J11

J1-J12

J1-J13

J1-J14

J1-J15

J1-J16

J1-J17

J1-J18

J1-J19

J1-J20

J1-J21

J1-J22

J1-J23

J1-J24

J1-J25

J1-J26

J1-J27

J1-J28

J1-J29

J1-J30

J1-J31

J1-J32

J1-J33

J1-J34

J1-J35

J1-J36

J1-J37

J1-J38

J1-J39

J1-J40

3

SYNC2P

SYNC2N

BP5

BN5

REFCLKP

REFCLKN

J1-K

J1-K1

J1-K2

J1-K3

J1-K4

J1-K5

J1-K6

J1-K7

J1-K8

J1-K9

J1-K10

J1-K11

J1-K12

J1-K13

J1-K14

J1-K15

J1-K16

J1-K17

J1-K18

J1-K19

J1-K20

J1-K21

J1-K22

J1-K23

J1-K24

J1-K25

J1-K26

J1-K27

J1-K28

J1-K29

J1-K30

J1-K31

J1-K32

J1-K33

J1-K34

J1-K35

J1-K36

J1-K37

J1-K38

J1-K39

J1-K40

2

TITLE:

1

REVISION RECORD

LTR

ECO NO:

MAX5861 EVKIT

FMC

REVISED BY:

&lt;REVISED BY:&gt;

DRAWN:

&lt;Drawn By&gt;

PCB PART NUMBER:

DATED:

03/09/2015

APPROVED:

DATE:

REV:

A

SHEET:       OF 10

8

D

C

B

A

D

C

B

A

6

5

4

<!-- image -->

ALL BYPASS RESISTORS ARE LOCATED UNDER THE BUFFER FOOTPRINT

AND SHARE COMMON PINS FROM INPUT TO OUTPUT

<!-- image -->

ALL BYPASS RESISTORS ARE LOCATED UNDER THE BUFFER FOOTPRINT

AND SHARE COMMON PINS FROM INPUT TO OUTPUT

<!-- image -->

ALL BYPASS RESISTORS ARE LOCATED UNDER THE BUFFER FOOTPRINT

AND SHARE COMMON PINS FROM INPUT TO OUTPUT

CLKP\_FPGA

CLKN\_FPGA

3

+2.5V

R66

5.23k

3

R64

10k

R65

10k

CLKN\_REF

CLKP\_REF

A

B

1

2

+2.5V

R67

866

1%

1

3

JU8

6

4

T4

OPEN

C99

0.1uF

+2.5V

R68

1.87k

1%

R69

590

1%

REF\_CLKOUT

OPEN

2

LTR

Jumper position

open --- &gt; SSTL1.2V  600mV

A --- &gt; SSTL1.5V  750mV

B --- &gt; LVDS  1.25V

<!-- image -->

TITLE:

1

REVISION RECORD

ECO NO:

MAX5861 EVKIT

FMC

REVISED BY:

&lt;REVISED BY:&gt;

DRAWN:

&lt;Drawn By&gt;

PCB PART NUMBER:

DATED:

03/09/2015

APPROVED:

DATE:

REV:

A

SHEET:       OF 10

9

D

C

B

A

D

C

B

A

CLKN\_I

CLKP\_I

6

CLKP\_FPGA

CLKN\_FPGA

C8

100pF

C94

100pF

CLKN\_REF

CLKP\_REF

C127

0.1uF

C100

0.1uF

CLKN

CLKP

CLKP\_MOD

CLKN\_MOD

CLKN\_REF

CLKP\_REF

CLKN3

CLKP3

5

GPIO0

GPIO1

GPIO2

GPIO3

GPIO4

GPIO5

GPIO6

GPIO7

P1.7

P1.6

P1.5

P1.4

P1.3

P1.2

P1.1

P1.0

GND

GND

GND

GND

GND

GND

GND

GND

GND

GND

GPIO0

GPIO1

GPIO2

GPIO3

GPIO4

GPIO5

GPIO6

GPIO7

P1.7

P1.6

P1.5

P1.4

P1.3

P1.2

P1.1

P1.0

GND

GND

GND

GND

GND

GND

GND

4

CLK MODULE INTERCONNECT

VIN

V+

+3.3V

USB\_CSC

USB\_CSD

USB\_SDI

USB\_SCLK

USB\_SDO

USB\_SDA

USB\_SCL

GND

GND

GND

USB\_CSC

USB\_CSD

USB\_SDI

USB\_SCLK

USB\_SDO

USB\_SDA

USB\_SCL

+3.3V

3

USB\_CSC

USB\_CSD

USB\_SDI

USB\_SCLK

USB\_SDO

USB\_SDA

USB\_SCL

VIN

+3.3V

1

2

1

2

V+

+3.3V

+3.3V

+3.3V

USB\_CSC

USB\_CSD

USB\_SDI

USB\_SCLK

USB\_SDO

USB\_SDA

USB\_SCL

X67

MTH\_32K243-40ML5

X68

MTH\_32K243-40ML5

2

TITLE:

REVISED BY:

&lt;REVISED BY:&gt;

DRAWN:

&lt;Drawn By&gt;

1

REVISION RECORD

LTR

ECO NO:

MAX5861 EVKIT

CLOCK MODULE

PCB PART NUMBER:

DATED:

03/09/2015

APPROVED:

DATE:

REV:

A

SHEET:       OF 10

10

D

C

B

A

<!-- image -->

<!-- image -->

<!-- image -->

1.0"

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

MAX5861 EVKIT

P/N:

<!-- image -->

LAYER

DATE:

LAYER 6 GND

ALL UNITS ARE IN 0.001"

<!-- image -->

<!-- image -->

REV A

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

MAX5861 EVKIT

P/N:

<!-- image -->

LAYER 8 GND

ALL UNITS ARE IN 0.001"

LAYER

DATE:

<!-- image -->

<!-- image -->

REV A

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

MAX5861 EVKIT

P/N:

<!-- image -->

LAYER

DATE:

SOLDER SIDE

ALL UNITS ARE IN 0.001"

<!-- image -->

<!-- image -->

REV

A

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Bill of Materials (BOM)

| Item                | (Rev 0, 6/15) Component Description                                                                                                                                                    | QTY Per     | Reference Designators                                                                                                                                                               | Manufacturer Part Number                                                                                 | Manufacturer Part Number                                                                                 | Manufacturer Part Number                                                                                 | Manufacturer Part Number                                                                                 | Manufacturer Part Number                                                                                 |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
| 1                   | Uninsulated Banana Jacks PC Test point, red                                                                                                                                            | 2 11 RST_N, | 5.0V_IN, GND TP25V, TP33V, LOCK, PERR, PERRI, INTR_N, USB1V8, TPUSB3V, TP5V,                                                                                                        | JOHNSON108-0740-001 TDA                                                                                  | JOHNSON108-0740-001 TDA                                                                                  | JOHNSON108-0740-001 TDA                                                                                  | JOHNSON108-0740-001 TDA                                                                                  | JOHNSON108-0740-001 TDA                                                                                  |
| 2 3                 | 0.1uF ±10% 16V X7R ceramic capacitors (0603)                                                                                                                                           | 14          | C1, C2, C3, C4, C5, C6, C66, C82, C84, C96, C99, C148, C149, C150                                                                                                                   | Keystone Electronics 5000 TDK C1608X7R1C104K                                                             | Keystone Electronics 5000 TDK C1608X7R1C104K                                                             | Keystone Electronics 5000 TDK C1608X7R1C104K                                                             | Keystone Electronics 5000 TDK C1608X7R1C104K                                                             | Keystone Electronics 5000 TDK C1608X7R1C104K                                                             |
| 4 5                 | 10uF ±20% 10V X5R ceramic capacitors (1210) 47uF ±20% 16V tantalum capacitors (C-Case) 150uF ±20% 10V celectrolytic capacitor (6.6mmx 6.6mm)                                           | 3 7         | C14, C79, C88 C19, C20, C21, C22, C114, C115, C116                                                                                                                                  | TDK C3225X5R1A106M AVX TPSC476M016R0350 Panasonic EEEFK1A151AP                                           | TDK C3225X5R1A106M AVX TPSC476M016R0350 Panasonic EEEFK1A151AP                                           | TDK C3225X5R1A106M AVX TPSC476M016R0350 Panasonic EEEFK1A151AP                                           | TDK C3225X5R1A106M AVX TPSC476M016R0350 Panasonic EEEFK1A151AP                                           | TDK C3225X5R1A106M AVX TPSC476M016R0350 Panasonic EEEFK1A151AP                                           |
| 6                   |                                                                                                                                                                                        | 1           | C24 C25, C26, C28, C29, C30, C31, C32, C117, C118, C119, C120, C121, C122, C123,                                                                                                    |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
| 7 8                 | 10uF ±20% 6.3V X5R ceramic capacitors (0805) 100pF ±5% 50V C0G ceramic capacitors (0402)                                                                                               | 18 2        | C162, C164, C202, C213 C8, C94                                                                                                                                                      | TDK C2012X5R0J106M TDK C1005C0G1H101J                                                                    | TDK C2012X5R0J106M TDK C1005C0G1H101J                                                                    | TDK C2012X5R0J106M TDK C1005C0G1H101J                                                                    | TDK C2012X5R0J106M TDK C1005C0G1H101J                                                                    | TDK C2012X5R0J106M TDK C1005C0G1H101J                                                                    |
| 9                   | 1.0uF ±20% 6.3V X5R ceramic capacitors (0402)                                                                                                                                          | 18          | C35, C36, C39, C40, C41, C42, C43, C105, C106, C107, C108, C124, C125, C126, C128, C129, C130, C131 C46, C47, C48, C49, C50, C51, C100, C102, C127, C132, C133, C134, C135, C136,   | TDK C1005X5R0J105M                                                                                       | TDK C1005X5R0J105M                                                                                       | TDK C1005X5R0J105M                                                                                       | TDK C1005X5R0J105M                                                                                       | TDK C1005X5R0J105M                                                                                       |
|                     |                                                                                                                                                                                        |             | C137, C138, C139, C140, C141, C142, C143, C144, C145, C146, C147, C153, C154, C155, C156, C157, C158, C159, C160, C175, C176, C177, C178, C179, C205, C206, C207, C208, C209, C210, |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
| 10                  | 0.1uF ±20% 6.3V X5R ceramic capacitors (0201)                                                                                                                                          | 45          | C211 C7, C12, C13, C15, C16, C17, C18, C23, C27, C33, C34, C37, C38, C44, C45, C52,                                                                                                 | TDK C0603X5R0J104M                                                                                       | TDK C0603X5R0J104M                                                                                       | TDK C0603X5R0J104M                                                                                       | TDK C0603X5R0J104M                                                                                       | TDK C0603X5R0J104M                                                                                       |
| 11 12               | 0.22uF ±20% 6.3V X5R ceramic capacitors (0201) 2200pF ±10% 50V C0G ceramic capacitor (0603)                                                                                            | 33 4        | C53, C54, C55, C56, C57, C58, C59, C60, C61, C62, C63, C64, C65, C68, C69, C70, C101 C67, C71, C73, C76                                                                             | Taiyo Yuden JMK063BJ224MP-F TDK C1608C0G1H222                                                            | Taiyo Yuden JMK063BJ224MP-F TDK C1608C0G1H222                                                            | Taiyo Yuden JMK063BJ224MP-F TDK C1608C0G1H222                                                            | Taiyo Yuden JMK063BJ224MP-F TDK C1608C0G1H222                                                            | Taiyo Yuden JMK063BJ224MP-F TDK C1608C0G1H222                                                            |
| 13 14 15            | 33pF ±5% 50V C0G ceramic capacitors (0603) 1uF ±10% 10V X5R ceramic capacitor (0603)                                                                                                   | 2 3         | C72, C77 C74, C201, C214                                                                                                                                                            | TDK C1608C0G1H330J TDK C1608X5R1A105K                                                                    | TDK C1608C0G1H330J TDK C1608X5R1A105K                                                                    | TDK C1608C0G1H330J TDK C1608X5R1A105K                                                                    | TDK C1608C0G1H330J TDK C1608X5R1A105K                                                                    | TDK C1608C0G1H330J TDK C1608X5R1A105K                                                                    |
| 16 17               | 3300pF ±10% 50V C0G ceramic capacitors (0603) 4.7uF ±20% 10V X5R ceramic capacitor (0603) 0.22uF ±10% 10V X5R ceramic capacitor (0603)                                                 | 1 7 2       | C75 C78, C91, C95, C97, C165, C166, C203 C80, C85                                                                                                                                   | TDK C1608C0G1H332K TDK C1608X5R1A475M TDK C1608X5R1A224K                                                 | TDK C1608C0G1H332K TDK C1608X5R1A475M TDK C1608X5R1A224K                                                 | TDK C1608C0G1H332K TDK C1608X5R1A475M TDK C1608X5R1A224K                                                 | TDK C1608C0G1H332K TDK C1608X5R1A475M TDK C1608X5R1A224K                                                 | TDK C1608C0G1H332K TDK C1608X5R1A475M TDK C1608X5R1A224K                                                 |
| 18 19               | 470uF ±20% 6.3V Electroltyic capacitor (10.3mmx 10.3mm) 6.8uF ±10% 10V X5R ceramic capacitor (1206)                                                                                    | 2 4 2       | C83, C87 C90, C98, C167, C168                                                                                                                                                       | SANYO 6SVP470MX TDK C3216X5R1C685M                                                                       | SANYO 6SVP470MX TDK C3216X5R1C685M                                                                       | SANYO 6SVP470MX TDK C3216X5R1C685M                                                                       | SANYO 6SVP470MX TDK C3216X5R1C685M                                                                       | SANYO 6SVP470MX TDK C3216X5R1C685M                                                                       |
| 20 21               | 0.47uF ±20% 4V X7S ceramic capacitors (0204) 0.01uF ±10% 25V X5R ceramic capacitors (0402) 0.1uF ±10% 10V X5R ceramic capacitors (0402)                                                | 1 4         | C92, C93 C163 C104, C112, C113                                                                                                                                                      | Murata LLL153C70G474ME17E TDK C1005X5R1E103K TDK C1005X5R1A104k                                          | Murata LLL153C70G474ME17E TDK C1005X5R1E103K TDK C1005X5R1A104k                                          | Murata LLL153C70G474ME17E TDK C1005X5R1E103K TDK C1005X5R1A104k                                          | Murata LLL153C70G474ME17E TDK C1005X5R1E103K TDK C1005X5R1A104k                                          | Murata LLL153C70G474ME17E TDK C1005X5R1E103K TDK C1005X5R1A104k                                          |
| 22 23 24            |                                                                                                                                                                                        |             | C103,                                                                                                                                                                               |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
| 25                  | 0.1pF ±10% 100V ceramic capacitors (0603) 3.3uF ±10% 10V ceramic capacitor (0603)                                                                                                      | 2 1         | C89, C204 C11                                                                                                                                                                       | GRM188R72A104K TDK C1608X5R1A335K                                                                        | GRM188R72A104K TDK C1608X5R1A335K                                                                        | GRM188R72A104K TDK C1608X5R1A335K                                                                        | GRM188R72A104K TDK C1608X5R1A335K                                                                        | GRM188R72A104K TDK C1608X5R1A335K                                                                        |
| 26 27 28            | 8.0pF 50V NP0/C0G 0603 6.8pF ±0.25pF 50V C0G ceramic capacitor (0402) 0.92' SMA connectors (PC edge mount)                                                                             | 2 1 1       | C9, C10 C466 OUT                                                                                                                                                                    | TDK C1608C0G1H080C Murata GRM1555C1H6R8C Rosenberger 32K243-40ML5                                        | TDK C1608C0G1H080C Murata GRM1555C1H6R8C Rosenberger 32K243-40ML5                                        | TDK C1608C0G1H080C Murata GRM1555C1H6R8C Rosenberger 32K243-40ML5                                        | TDK C1608C0G1H080C Murata GRM1555C1H6R8C Rosenberger 32K243-40ML5                                        | TDK C1608C0G1H080C Murata GRM1555C1H6R8C Rosenberger 32K243-40ML5                                        |
| 29 30 31            | LED Green (0603) Momentary Pushbutton Switches Black Test Points                                                                                                                       | 1 3         | D1 MODE2, SE, RSTN                                                                                                                                                                  | Panasonic LNJ314G8TRA Omron B3S-1000                                                                     | Panasonic LNJ314G8TRA Omron B3S-1000                                                                     | Panasonic LNJ314G8TRA Omron B3S-1000                                                                     | Panasonic LNJ314G8TRA Omron B3S-1000                                                                     | Panasonic LNJ314G8TRA Omron B3S-1000                                                                     |
| 32                  | Smal Power filter ferrite bead                                                                                                                                                         | 9 1         | GND (x8), TDC FB7                                                                                                                                                                   | Keystone Electronics 5001 Steward/Laird Signal Integ Prod 28F0121-1SR-10                                 | Keystone Electronics 5001 Steward/Laird Signal Integ Prod 28F0121-1SR-10                                 | Keystone Electronics 5001 Steward/Laird Signal Integ Prod 28F0121-1SR-10                                 | Keystone Electronics 5001 Steward/Laird Signal Integ Prod 28F0121-1SR-10                                 | Keystone Electronics 5001 Steward/Laird Signal Integ Prod 28F0121-1SR-10                                 |
| 33 34               | FMC Connector 2 Pin Header(OK to substitute with manufactured cut to fit) 3x5 Header(OK to substitute with manufactured                                                                | 1 4         | J1 JU4, JU12, JU24, JU25                                                                                                                                                            | Samtech ASP-134488-01 Sul ins Electronics Corp. S1012EC-02-ND TSW-105-15-T-T-ND                          | Samtech ASP-134488-01 Sul ins Electronics Corp. S1012EC-02-ND TSW-105-15-T-T-ND                          | Samtech ASP-134488-01 Sul ins Electronics Corp. S1012EC-02-ND TSW-105-15-T-T-ND                          | Samtech ASP-134488-01 Sul ins Electronics Corp. S1012EC-02-ND TSW-105-15-T-T-ND                          | Samtech ASP-134488-01 Sul ins Electronics Corp. S1012EC-02-ND TSW-105-15-T-T-ND                          |
| 35 36               | header, do not header, do not fit) 3 pin headers                                                                                                                                       | 3 8         | JU5, JU7, JU23 JU2, JU3, JU6, JU8, JU10, JU11,                                                                                                                                      | JU26 TSW-103-07-T-S Panasonic EXC-ML16A270U                                                              | JU26 TSW-103-07-T-S Panasonic EXC-ML16A270U                                                              | JU26 TSW-103-07-T-S Panasonic EXC-ML16A270U                                                              | JU26 TSW-103-07-T-S Panasonic EXC-ML16A270U                                                              | JU26 TSW-103-07-T-S Panasonic EXC-ML16A270U                                                              |
| 37 38               | cut to Chip bead cores (0603)                                                                                                                                                          | 2 L2, L11,  | JU22, L1, L8                                                                                                                                                                        | L12, L13 Panasonic EXC-CL4532U1                                                                          | L12, L13 Panasonic EXC-CL4532U1                                                                          | L12, L13 Panasonic EXC-CL4532U1                                                                          | L12, L13 Panasonic EXC-CL4532U1                                                                          | L12, L13 Panasonic EXC-CL4532U1                                                                          |
| 39 40               | 10uH 3A Inductor 4.7uH 5.5A Inductor                                                                                                                                                   | 1 1         | L5 L6                                                                                                                                                                               | Sumida CDRH104RNP-100N Vishay IHLP2020CZER4R7M11                                                         | Sumida CDRH104RNP-100N Vishay IHLP2020CZER4R7M11                                                         | Sumida CDRH104RNP-100N Vishay IHLP2020CZER4R7M11                                                         | Sumida CDRH104RNP-100N Vishay IHLP2020CZER4R7M11                                                         | Sumida CDRH104RNP-100N Vishay IHLP2020CZER4R7M11                                                         |
| 41                  | 390nH wire-wound chip inductors (2520) 1.3nH 1.2A Inductor (0402)                                                                                                                      | 2 1         | L9, L10 L17                                                                                                                                                                         | Coilcraft 1008CS-391XJLB Murata LQW15AN1N3C10D                                                           | Coilcraft 1008CS-391XJLB Murata LQW15AN1N3C10D                                                           | Coilcraft 1008CS-391XJLB Murata LQW15AN1N3C10D                                                           | Coilcraft 1008CS-391XJLB Murata LQW15AN1N3C10D                                                           | Coilcraft 1008CS-391XJLB Murata LQW15AN1N3C10D                                                           |
| 42 43 44            | FERRITE BEAD 28 OHM4.0A 0603 3OV 9A n-channel MOSFET ( 8 SO)                                                                                                                           | 2 2         | L16, L3 N1, N2 N3                                                                                                                                                                   | Wurth 742792603 Fairchild FDS6692A Fairchild Semiconductor                                               | Wurth 742792603 Fairchild FDS6692A Fairchild Semiconductor                                               | Wurth 742792603 Fairchild FDS6692A Fairchild Semiconductor                                               | Wurth 742792603 Fairchild FDS6692A Fairchild Semiconductor                                               | Wurth 742792603 Fairchild FDS6692A Fairchild Semiconductor                                               |
| 45                  | Dual n-channel 30V MOSFET (8 SO) -                                                                                                                                                     | 1           | R1, R2, R11, R15, R16, R18, R19,                                                                                                                                                    | FDS6982AS                                                                                                | FDS6982AS                                                                                                | FDS6982AS                                                                                                | FDS6982AS                                                                                                | FDS6982AS                                                                                                |
|                     |                                                                                                                                                                                        | 30          | R20, R21, R22, R29, R30, R31, R32, R33, R34, R35, R36, R37, R38, R39, R40, R49, R164, R202, R203, R204, R205, R207                                                                  | Venkel 0603-000T                                                                                         | Venkel 0603-000T                                                                                         | Venkel 0603-000T                                                                                         | Venkel 0603-000T                                                                                         | Venkel 0603-000T                                                                                         |
| 46 47               | 0 Ohm 5% resistors (0603) 0 Ohm 5% resistors (0603) - Dual_Opt 0 Ohm 5% resistors (2010)                                                                                               | 1 1         | R212, R209 R17 R50, R51, R52, R53, R54, R55, R56, R57,                                                                                                                              | Venkel 0603-000T Venkel 2010-000T Venkel 0603-1001T                                                      | Venkel 0603-000T Venkel 2010-000T Venkel 0603-1001T                                                      | Venkel 0603-000T Venkel 2010-000T Venkel 0603-1001T                                                      | Venkel 0603-000T Venkel 2010-000T Venkel 0603-1001T                                                      | Venkel 0603-000T Venkel 2010-000T Venkel 0603-1001T                                                      |
| 48 49 50 51         | 0 Ohm 1% resistors (0201) 1k Ohm 1% resistor (0603) 143 Ohm 1% resistor (0603)                                                                                                         | 12 4 2      | R58, R59, R60, R61 R6, R12, R41, R42 R8, R158 R9                                                                                                                                    | PanasonicERJ-1GE0R00C Venkel 0603-1430T                                                                  | PanasonicERJ-1GE0R00C Venkel 0603-1430T                                                                  | PanasonicERJ-1GE0R00C Venkel 0603-1430T                                                                  | PanasonicERJ-1GE0R00C Venkel 0603-1430T                                                                  | PanasonicERJ-1GE0R00C Venkel 0603-1430T                                                                  |
| 52 53 54            | 8.45k Ohm 1% resistor (0603) 16.9k Ohm 1% resistor (0603) 10k Ohm 1% resistor (0603) 499 Ohm 1% resistor (0402)                                                                        | 1 1 9       | R10 R47, R64, R65, R75, R76, R77, R154, R161, R220                                                                                                                                  | Venkel 0603-8451T Venkel 0603-1692T Venkel 0603-1002T                                                    | Venkel 0603-8451T Venkel 0603-1692T Venkel 0603-1002T                                                    | Venkel 0603-8451T Venkel 0603-1692T Venkel 0603-1002T                                                    | Venkel 0603-8451T Venkel 0603-1692T Venkel 0603-1002T                                                    | Venkel 0603-8451T Venkel 0603-1692T Venkel 0603-1002T                                                    |
| 55 56               | 47 Ohm 1% resistor (0603)                                                                                                                                                              | 2 1         | R24, R214 R7                                                                                                                                                                        | Venkel 0402-4990T                                                                                        | Venkel 0402-4990T                                                                                        | Venkel 0402-4990T                                                                                        | Venkel 0402-4990T                                                                                        | Venkel 0402-4990T                                                                                        |
| 57 58               | 590 Ohm 1% resistor (0603) 866 Ohm 1% resistor (0603) 1.87k Ohm 1% resistor (0603)                                                                                                     | 1 1 1       | R69 R67 R68 R217                                                                                                                                                                    | Venkel 0603-103T                                                                                         | Venkel 0603-103T                                                                                         | Venkel 0603-103T                                                                                         | Venkel 0603-103T                                                                                         | Venkel 0603-103T                                                                                         |
| 59                  | 4.7k Ohm 1% resistor (0603)                                                                                                                                                            | 1           |                                                                                                                                                                                     | Venkel 0603-2372T                                                                                        | Venkel 0603-2372T                                                                                        | Venkel 0603-2372T                                                                                        | Venkel 0603-2372T                                                                                        | Venkel 0603-2372T                                                                                        |
| 60 61               | 5.23k Ohm 1% resistor (0603)                                                                                                                                                           | 1           | R66                                                                                                                                                                                 | Venkel 0603-8061T                                                                                        | Venkel 0603-8061T                                                                                        | Venkel 0603-8061T                                                                                        | Venkel 0603-8061T                                                                                        | Venkel 0603-8061T                                                                                        |
| 62 63 64 65         | 8.06k Ohm 1% resistor (0603) 33.2k Ohm 1% resistor (0603) 9.53k Ohm 1% resistor (0603) 3.01k Ohm 1% resistor (0603)                                                                    | 1 2 1 1     | R156 R155, R157 R159 R160                                                                                                                                                           | Venkel 0603-3322T Venkel 0603-9531T Venkel 0603-3011T                                                    | Venkel 0603-3322T Venkel 0603-9531T Venkel 0603-3011T                                                    | Venkel 0603-3322T Venkel 0603-9531T Venkel 0603-3011T                                                    | Venkel 0603-3322T Venkel 0603-9531T Venkel 0603-3011T                                                    | Venkel 0603-3322T Venkel 0603-9531T Venkel 0603-3011T                                                    |
| 66 67 68            | 10 Ohm 5% resistor (0603) 2.2k Ohm 5% resistor (0603) 2.0k Ohm ±1% resistors (0603)                                                                                                    | 4 1         | R4, R5, R166, R167 R23                                                                                                                                                              | Venkel 0603-100T Venkel 0603-222T                                                                        | Venkel 0603-100T Venkel 0603-222T                                                                        | Venkel 0603-100T Venkel 0603-222T                                                                        | Venkel 0603-100T Venkel 0603-222T                                                                        | Venkel 0603-100T Venkel 0603-222T                                                                        |
| 69                  | 10.0k Ohm 5% resistor (0402)                                                                                                                                                           | 1 19 1      | R213 R13, R14, R25, R26, R27, R28, R43, R44, R45, R46, R141, R142, R143, R144, R145, R146, R147, R200, R201 R3                                                                      | Venkel 0603-2001T                                                                                        | Venkel 0603-2001T                                                                                        | Venkel 0603-2001T                                                                                        | Venkel 0603-2001T                                                                                        | Venkel 0603-2001T                                                                                        |
| 70                  | 12.0 kOhm 1% resistor (0603) 133k Ohm ±1% resistors (0603)                                                                                                                             | 2           | R62, R218                                                                                                                                                                           | Venkel 0603-1333T                                                                                        | Venkel 0603-1333T                                                                                        | Venkel 0603-1333T                                                                                        | Venkel 0603-1333T                                                                                        | Venkel 0603-1333T                                                                                        |
| 71 72               | 80.6k Ohm ±1% resistors (0603) 1:1 3000MHz RF transformers Digital Up-converter and RF DAC (280                                                                                        | 2           | R63, R219 T5, T6 U23                                                                                                                                                                | Venkel 0603-8062T Mini-Circuits TC1-1-13M-34+                                                            | Venkel 0603-8062T Mini-Circuits TC1-1-13M-34+                                                            | Venkel 0603-8062T Mini-Circuits TC1-1-13M-34+                                                            | Venkel 0603-8062T Mini-Circuits TC1-1-13M-34+                                                            | Venkel 0603-8062T Mini-Circuits TC1-1-13M-34+                                                            |
| 73 74 75 76         | LFBGA) Quad Level Translator (16-TSSOP) Temperature sensor (16-QSOP)                                                                                                                   | 2 1 5 1     | U2, U3, U12, U17, U21 U4                                                                                                                                                            | Maxim MAX5861Uxx+ Texas Instrument SN74AVC4T774PW Maxim MAX6654MEE+T Maxim MAX811TEUS+ Maxim MAX812TEUS+ | Maxim MAX5861Uxx+ Texas Instrument SN74AVC4T774PW Maxim MAX6654MEE+T Maxim MAX811TEUS+ Maxim MAX812TEUS+ | Maxim MAX5861Uxx+ Texas Instrument SN74AVC4T774PW Maxim MAX6654MEE+T Maxim MAX811TEUS+ Maxim MAX812TEUS+ | Maxim MAX5861Uxx+ Texas Instrument SN74AVC4T774PW Maxim MAX6654MEE+T Maxim MAX811TEUS+ Maxim MAX812TEUS+ | Maxim MAX5861Uxx+ Texas Instrument SN74AVC4T774PW Maxim MAX6654MEE+T Maxim MAX811TEUS+ Maxim MAX812TEUS+ |
| 77 78               | 3.3V Supervisory Circuit (SOT-143) 3.3V Supervisory Circuit (SOT-143) Dual DC-DC Control er (24 TQFN-EP)                                                                               | 1 2 1       | U5 U6, U16 U8 U14,U9                                                                                                                                                                | Maxim MAX15023ETG+ Maxim MAX1793EUE18+                                                                   | Maxim MAX15023ETG+ Maxim MAX1793EUE18+                                                                   | Maxim MAX15023ETG+ Maxim MAX1793EUE18+                                                                   | Maxim MAX15023ETG+ Maxim MAX1793EUE18+                                                                   | Maxim MAX15023ETG+ Maxim MAX1793EUE18+                                                                   |
| 79 80 81 82 83      | 1.8V LDO Regulator (16 TSSOP-EP) 1.25V precision voltage reference (8 SO)                                                                                                              | 2 1         | U11                                                                                                                                                                                 | Maxim MAX6161AESA+ Microchip 93LC56B-E/MS                                                                | Maxim MAX6161AESA+ Microchip 93LC56B-E/MS                                                                | Maxim MAX6161AESA+ Microchip 93LC56B-E/MS                                                                | Maxim MAX6161AESA+ Microchip 93LC56B-E/MS                                                                | Maxim MAX6161AESA+ Microchip 93LC56B-E/MS                                                                |
|                     | EEPROM128X16                                                                                                                                                                           | 1           | U27 U13, U204                                                                                                                                                                       | Maxim MAX1793EUE33+                                                                                      | Maxim MAX1793EUE33+                                                                                      | Maxim MAX1793EUE33+                                                                                      | Maxim MAX1793EUE33+                                                                                      | Maxim MAX1793EUE33+                                                                                      |
| 84 85               | 3.3VLDO Regulator (16 TSSOP-EP) LDO Regulator (8 TDFN-EP)                                                                                                                              | 2 1         | U15 U7                                                                                                                                                                              | Maxim MAX8902AATA+ FTDI: FT4232HQ-QFN Maxim MAX8511EXK25+                                                | Maxim MAX8902AATA+ FTDI: FT4232HQ-QFN Maxim MAX8511EXK25+                                                | Maxim MAX8902AATA+ FTDI: FT4232HQ-QFN Maxim MAX8511EXK25+                                                | Maxim MAX8902AATA+ FTDI: FT4232HQ-QFN Maxim MAX8511EXK25+                                                | Maxim MAX8902AATA+ FTDI: FT4232HQ-QFN Maxim MAX8511EXK25+                                                |
| 86 87 88            | UART to USB Converter(TQFP-32L                                                                                                                                                         | 1 1         | U205                                                                                                                                                                                |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
| 89                  | 7mmx7mm) 2.5V LDO Regulator (5 SC70) 3.3V LDO Regulator (5 SC70)                                                                                                                       | 1           | U206                                                                                                                                                                                | Top Mark Maxim MAX8511EXK33+ Top 575-89743005                                                            | Top Mark Maxim MAX8511EXK33+ Top 575-89743005                                                            | Top Mark Maxim MAX8511EXK33+ Top 575-89743005                                                            | Top Mark Maxim MAX8511EXK33+ Top 575-89743005                                                            | Top Mark Maxim MAX8511EXK33+ Top 575-89743005                                                            |
| 90 91 92 93 94 95   | Mini USB Receptacle 12MHz crystal Shunts PCB: MAX5861 EVALUATION KIT PCB: MAX5861 EVALUATION KIT                                                                                       | 1 1 22 1 1  | USB23 Y1 1 Oz Impedance Control ed 1 Oz Impedance Control ed 1 Oz Impedance Control ed                                                                                              | Mark ECS-120-18-28A CSM-4AX Sul ins Electronics Corp. STC02SYAN Network PCB Cirrex MEI                   | Mark ECS-120-18-28A CSM-4AX Sul ins Electronics Corp. STC02SYAN Network PCB Cirrex MEI                   | Mark ECS-120-18-28A CSM-4AX Sul ins Electronics Corp. STC02SYAN Network PCB Cirrex MEI                   | Mark ECS-120-18-28A CSM-4AX Sul ins Electronics Corp. STC02SYAN Network PCB Cirrex MEI                   | Mark ECS-120-18-28A CSM-4AX Sul ins Electronics Corp. STC02SYAN Network PCB Cirrex MEI                   |
| 96                  | PCB: MAX5861 EVALUATION KIT                                                                                                                                                            | 1           |                                                                                                                                                                                     |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
| 97 98               | Not instal ed capacitors (0805)                                                                                                                                                        | 2           | C81, C86 C109, C110, C111                                                                                                                                                           |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
| 99                  | Not instal ed, capacitor (0603)                                                                                                                                                        | 3 5         | R162, R163, R165, R206, R208 R215, R216, R48                                                                                                                                        |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
| 100 101             | Not instal ed resistor (0603) Not instal ed resistor (0603)                                                                                                                            | 3 2         | U8_PG1, U8_PG2 U1, U10, U28                                                                                                                                                         | Keystone 5000                                                                                            | Keystone 5000                                                                                            | Keystone 5000                                                                                            | Keystone 5000                                                                                            | Keystone 5000                                                                                            |
| 102 103             | Not instal ed, testpoints Not instal ed, IC's Not instal ed, 2x13 header socket                                                                                                        | 3 2 1       | J2, J3 REF_CLKOUT                                                                                                                                                                   | Sul ins Connector Solutions Rosenberger 32K243-40ML5                                                     | Sul ins Connector Solutions Rosenberger 32K243-40ML5                                                     | Sul ins Connector Solutions Rosenberger 32K243-40ML5                                                     | Sul ins Connector Solutions Rosenberger 32K243-40ML5                                                     | Sul ins Connector Solutions Rosenberger 32K243-40ML5                                                     |
| 104 105             | Not instal ed, 0.92' SMA connectors                                                                                                                                                    |             | T4                                                                                                                                                                                  | Mini-Circuits TC1-1-13M+                                                                                 | Mini-Circuits TC1-1-13M+                                                                                 | Mini-Circuits TC1-1-13M+                                                                                 | Mini-Circuits TC1-1-13M+                                                                                 | Mini-Circuits TC1-1-13M+                                                                                 |
| 106 107             | 0.1" okay to substitute (2.54mm pitch, >3.9mm ht) (PC edge mount) Not instal ed, 1:1 3000MHz RF transformers Not instal ed version of device, 1.25V precision (MAX6161AESA+ instal ed) | 1 0         | U11                                                                                                                                                                                 | Maxim MAX6161BESA+                                                                                       | Maxim MAX6161BESA+                                                                                       | Maxim MAX6161BESA+                                                                                       | Maxim MAX6161BESA+                                                                                       | Maxim MAX6161BESA+                                                                                       |
| 108 109             | voltage reference (8 SO) LARGE BROWN9 3/8' x 71 /4' x 2 1/2"' Label WEB instructions for Maxim Data Sheet                                                                              |             | Pack-out Pack-out Pack-out                                                                                                                                                          | SFH11-PBPC-D13-ST-BK                                                                                     | SFH11-PBPC-D13-ST-BK                                                                                     | SFH11-PBPC-D13-ST-BK                                                                                     | SFH11-PBPC-D13-ST-BK                                                                                     | SFH11-PBPC-D13-ST-BK                                                                                     |
| 110 111 112         | BAG, STATIC SHIELD ZIP 8'x10', W/ ESD LOGO                                                                                                                                             |             |                                                                                                                                                                                     |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
| 113                 | FOAM, ANTI-STATIC PE 12'x12'X5MM                                                                                                                                                       |             |                                                                                                                                                                                     |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
|                     |                                                                                                                                                                                        |             | Pack-out Pack-out                                                                                                                                                                   |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
|                     |                                                                                                                                                                                        | 1           |                                                                                                                                                                                     | Grainger 1ZB43 (part of Hardware Kit) Grainger 2WA22 (part of Hardware Kit)                              | Grainger 1ZB43 (part of Hardware Kit) Grainger 2WA22 (part of Hardware Kit)                              | Grainger 1ZB43 (part of Hardware Kit) Grainger 2WA22 (part of Hardware Kit)                              | Grainger 1ZB43 (part of Hardware Kit) Grainger 2WA22 (part of Hardware Kit)                              | Grainger 1ZB43 (part of Hardware Kit) Grainger 2WA22 (part of Hardware Kit)                              |
| 114                 |                                                                                                                                                                                        | 4           | Item A Item B Item C                                                                                                                                                                | Kyestone 2205 Keystone Electronics 3213                                                                  | Kyestone 2205 Keystone Electronics 3213                                                                  | Kyestone 2205 Keystone Electronics 3213                                                                  | Kyestone 2205 Keystone Electronics 3213                                                                  | Kyestone 2205 Keystone Electronics 3213                                                                  |
| 115 116 117 118 119 | CABLE, USB-A male to USB-mini 6ft 4-40 x 0.75' machine screws, pan flat washer (ID - 0.125', OD- 0.312') 4-40 x 1 ' aluminum hex standoff Nylon flat washers (ID - 0.140', OD-0.375')  | 6 4 4       | Item D Contains Items A-D Hardware Kit-Contains Items Items A-D                                                                                                                     |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
| 120 121 122 123     | Hardware Kit (containing Items A, B, C, D, E and F) BAG, STATIC SHIELD 5"X8",W/ESD LOGO BAG, STATIC SHIELD ZIP 4'x6', W/ ESD LOGO XFMR_CLK_Module (Instal ed)                          | 1           | A-D Instal on board                                                                                                                                                                 |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
|                     |                                                                                                                                                                                        |             | JUMPER TABLE                                                                                                                                                                        |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
|                     |                                                                                                                                                                                        |             |                                                                                                                                                                                     | SHUNT POSITION                                                                                           | SHUNT POSITION                                                                                           | SHUNT POSITION                                                                                           | SHUNT POSITION                                                                                           | SHUNT POSITION                                                                                           |
|                     |                                                                                                                                                                                        |             | JUMPER                                                                                                                                                                              | Instal ed 1-2                                                                                            | Instal ed 1-2                                                                                            | Instal ed 1-2                                                                                            | Instal ed 1-2                                                                                            | Instal ed 1-2                                                                                            |
| 124                 |                                                                                                                                                                                        |             | JU4 JU12                                                                                                                                                                            | 1-2, 4-5, 7-8, 10-11                                                                                     | 1-2, 4-5, 7-8, 10-11                                                                                     | 1-2, 4-5, 7-8, 10-11                                                                                     | 1-2, 4-5, 7-8, 10-11                                                                                     | 1-2, 4-5, 7-8, 10-11                                                                                     |
|                     |                                                                                                                                                                                        |             | JU7 JU23                                                                                                                                                                            | 2-3, 4-5, 7-8, 10-11                                                                                     | 2-3, 4-5, 7-8, 10-11                                                                                     | 2-3, 4-5, 7-8, 10-11                                                                                     | 2-3, 4-5, 7-8, 10-11                                                                                     | 2-3, 4-5, 7-8, 10-11                                                                                     |
|                     |                                                                                                                                                                                        |             | JU5 JU2 JU3 JU8 JU10 JU26                                                                                                                                                           |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
|                     |                                                                                                                                                                                        |             | JU6 JU11 JU22                                                                                                                                                                       | 1-2 2-3                                                                                                  | 1-2 2-3                                                                                                  | 1-2 2-3                                                                                                  | 1-2 2-3                                                                                                  | 1-2 2-3                                                                                                  |
|                     |                                                                                                                                                                                        |             | R209                                                                                                                                                                                |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |                                                                                                          |
|                     |                                                                                                                                                                                        |             |                                                                                                                                                                                     | 2-3                                                                                                      | 2-3                                                                                                      | 2-3                                                                                                      | 2-3                                                                                                      | 2-3                                                                                                      |