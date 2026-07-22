<!-- lastmod 2022-08-02 -->
## MAX5862 Evaluation Kit

## General Description

The  MAX5862  evaluation  kit  (EV  kit)  contains  two MAX5862 high-density downstream cable QAM modulators that each integrate a digital upconverter (DUC) and an RF digital-to-analog converter (RF-DAC). The device's DUC performs QAM mapping, pulse shaping, and digital RF  upconversion  of  FEC-encoded  data  with  full  agility and then drives a 14-bit, 4.6Gsps RF-DAC. Each device digitally synthesizes RF signals with up to 32 DOCSIS ® compliant 6MHz or 8MHz QAM channels on a single RF port at frequencies from 47MHz to 1006MHz.

The EV kit provides a complete two-port system solution for  high-density  QAM  modulation  with  very  low  power dissipation.

The EV kit includes Windows XP ® -, Windows Vista ® -, and Windows  7-compatible  software  that  provides  a  simple graphical user interface (GUI) for configuration of all of the MAX5862 registers, control of the SPI interface, temperature  monitoring,  and  for  control  of  the  high-speed  data converter evaluation platform (HSDCEP) board. Software to control the MAX5862 registers and SPI is also Windows 7 compatible.

The EV kit provides two QSH Samtec connectors to interface to the HSDCEP for driving the IC's single input port and various control signals.

## Block Diagram

<!-- image -->

DOCSIS is a registered trademark of Cable Television Laboratories, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- Evaluates the Two MAX5862s Up to 32 QAM Channels Each
- Single 5.5V Input Voltage Supply
- Maximum 4.6Gsps Update Rate
- Direct Interface with Maxim HSDCEP Data Source Board Using QSH Connectors (Order HSDCEP)
- Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- On-Board SPI Interface Control for Both Ports of the MAX5862
- On-Board SMBus Interface Control for Both Ports of the MAX6642 Temperature Sensor
- GUI Controls for HSDCEP Operation
- Pseudorandom Bit Sequence (PRBS) Test Pattern Files
- Proven 14-Layer PCB Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Evaluates: MAX5862

<!-- image -->

## MAX5862 Evaluation Kit

## MAX5862 EV Kit Files

The installation file setup.exe installs the following files for use with the EV kit.

| FILES     | DESCRIPTION                                |
|-----------|--------------------------------------------|
| setup.exe | Installs the EV kit files on your computer |

| FILES/FOLDERS                    | DESCRIPTION                                                                                                                                               |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| MAX5862SystemController.exe      | Application program                                                                                                                                       |
| ConfigurationLoadFiles           | Directory with sample PRBS patterns to load into the MAX5862 for evaluation, as well as HSDCEP targeted configuration files                               |
| USBDriver                        | Directory with USB supporting files                                                                                                                       |
| CDM20600.exe                     | Installs the USB device driver, located under the USB directory and launches if the 'Launch this program' on the installation completion page is selected |
| USB_Driver_Help_200.pdf          | USB driver installation help file under the USB driver directory                                                                                          |
| FTD2XX*.*                        | Multiple driver files for Windows XP OS                                                                                                                   |
| MAX5862ConfigurationScripts      | Perl scripts and supporting files to generate configuration files to load into the MAX5862-see Readme.txt for details                                     |
| max5862_regmap_complete.txt      | Register definition file used by the MAX5862 System Controller software for register definition display                                                   |
| HSDCEP_090505.exe and hsdcep.bat | HSDCEP files used to control the board through the MAX5862 System Controller GUI                                                                          |
| HSDCEPtoMAX5862UserGuide_rx.pdf  | Information regarding interfacing the MAX5862 to the HSDCEP                                                                                               |

## Quick Start

## Required Equipment

- Windows	XP,	Windows	Vista,	or	Windows	7	PC	with	a spare USB port
- USB	2.0	cable,	USB	A	male	to	B	male
- 5.5V,	4A	DC	power	supply
- Signal	 generator	 with	 low	 phase	 noise	 and	 low	 jitter for  clock  input  signal  to  the  RF-DAC  (e.g.,  Rohde  &amp; Schwarz SMF100A)
- Bandpass	 filters	 for	 the	 RF-DAC	 clock	 input	 signal (optional)
- High-performance	 spectrum	 analyzer	 (e.g.,	 Agilent PXA, Agilent PSA, or Rohde &amp; Schwarz FSU)
- Maxim	HSDCEP	data	source	board	with	USB	cable (optional)

## Procedure

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV system software. Text in bold and underline refers to items from the Windows operating system. The EV  kit  is  fully  assembled  and  tested.  Follow  the  steps below to verify board operation. Caution: Do not enable

## the outputs of the power supplies or signal sources until all connections are completed.

- 1) Verify	that	the	EV	kit	jumpers	are	configured	in	their default state (see Table 1).
- 2) Set  the  DC  power  supply  to  5.5V  and  disable  the power-supply output.
- 3) Connect the 5.5V power-supply output to the EV kit 5.5V\_IN	and	GND	banana	jack	connectors.
- 4) Set  the  clock  signal  generator  to  the  desired  clock frequency and power level at 10dBm and disable the output.
- 5) Connect  the  clock  generator  to  the  CLK\_IN  SMA connector.
- 6) Connect  the  spectrum  analyzer  to  the  EV  kit  SMA connector labeled OUTA or OUTB.
- 7) Install  the  EV  kit  software  on  your  computer  by running  the  setup.exe  program.  For  proper  communication  with  the  HSDCEP  system  calls,  install  the software into a directory path without spaces, such as C:\MaximIntegrated\MAX5862EVKIT.  The  program files are copied to the installation directory and icons are created in the Windows Start | Programs menu. On  the Installation  Complete window  during  the

│

Evaluates: MAX5862

## MAX5862 EV Kit Board

<!-- image -->

- installation, if the Launch this program checkbox is checked, the USB driver is installed.
- 8) Connect the USB cable from the PC to the MAX5862 EV  kit  board  USB1.  When  installing  the  USB  driver  for  the  first  time,  a Building  Driver  Database window  pops  up  in  addition  to  a New  Hardware Found message. If  the  system  does  not  detect  the USB  connection,  remove  the  USB  cable  from  the board and reconnect it.
-  	 If	 the New Hardware  Found message  appears, follow  the  directions  of  the Add  New  Hardware Wizard to  install  the  USB  device  driver.  Choose the Search for the best driver for your device option.  Specify  the  location  of  the  device  driver to  be  the  installation  directory  using  the Browse button. During device driver installation, Windows may  show  a  warning  message  indicating  that the  device  driver  Maxim  uses  does  not  contain a  digital  signature.  This  is  not  an  error  condition and it is safe to proceed with installation. Refer to the USB\_Driver\_Help\_200.pdf document included with the software for additional information.
- 9) Start the EV kit software by opening the icon in the Start  |  Programs menu  under Maxim  Integrated .

Figure 1. MAX5862 Evaluation System Controller Popup Window

<!-- image -->

The  EV  kit  software  window  appears,  as  shown  in Figure 1.

- 10) Enable the EV kit DC power supply.
- 11) Enable the clock generator output.
- 12) Press  the  momentary  switch  buttons  RSTN\_A  and RSTN\_B on the EV kit board.
- 13) Press the momentary switch button DLLOFF on the EV kit board to reset the DAC DLL.

│

Evaluates: MAX5862

## MAX5862 Evaluation Kit

- 14) Press the Run  MAX5862  Evaluation System Controller  Application button  and  verify  that  the EV kit main window appears, similar to that shown in Figure 2.
- 15) Select  the MAX5862  Register  Control tab  to  verify  communication  to  the  EV  kit  by  typing  0  in  the Address edit box and pressing the Read Data button. Verify that 3 appears in the edit box.
-  	 If	 the	 value	 read	is	0x3333,	there	is	probably	not communication to the USB microcontroller:

This occurs when the USB cable has been disconnected and reconnected, but the GUI is not closed down-close the tabbed GUI and click the Run MAX5862 Evaluation System Controller Application button to reconnect.

-  	 If	 the	 value	 read	 is	 0xFFFF,	 there	 is	 possibly	 not communication to the MAX5862:

This occurs when there is not power or clock to the MAX5862 device.

- 16) Select the MAX5862 port to evaluate by checking the A or B checkbox  under  the Signal  Path  Selection label at the top of the MAX5862 Register Control tab sheet.
- 17) Click  the Select  File  to  Load button  and  select  a pseudo-random  bit  sequence  (PRBS)  file  to  load from  the  ConfigurationLoadFiles  folder,  such  as

## Evaluates: MAX5862

001SB256\_5862\_PRBS\_4608M\_600M.txt.  The  load files  are  in  the ABC\_D\_E\_FM\_GM.txt format, where the format is defined as follows:

| SYMBOL   | DEFINITION                                                                                                          |
|----------|---------------------------------------------------------------------------------------------------------------------|
| A        | Number of QAM channel, 3 digits                                                                                     |
| B        | Data rate-D for DDR and S for SDR                                                                                   |
| C        | QAM mapping-A16, A32, A64, A128, A256, B64, B256, C64, or C256                                                      |
| D        | Target of the configuration-5862 for MAX5862 or HSDCEP                                                              |
| E        | Source of the data-PRBS for internal PRBS generator data or input for input interface data, such as from the HSDCEP |
| F        | DAC frequency in MHz                                                                                                |
| G        | DAC output data center frequency in MHz                                                                             |

- 18) A dialog box appears, as shown in Figure 5, indicating that  the  read  register  values  were  written  to  the  file MAX5862FileLdRegisterRead.txt.  Click OK .  When loading  a  large  channel-count  configuration,  this could  take  a  minute  to  appear  while  the  numerous registers are written.
- 19) Observe  the  output  of  the  selected  port  on  the spectrum	 analyzer	 and	 adjust	 the	 signal	 generator and spectrum analyzer, if required.

│

Figure 2. MAX5862 Evaluation System Controller Software GUI Window

<!-- image -->

The	MAX5862	EV	kit	board	is	initially	configured	with	jumpers	installed	in	the	positions	shown	in Table 1.

## Table 1. Jumper Configurations

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                                              |
|----------|------------------|--------------------------------------------------------------|
| JU1      | Installed*       | Normal operation                                             |
| JU1      | Not installed    | VDD10A sense voltage monitoring                              |
| JU2      | Installed*       | 1.8V LDO powers the MAX5862 VDD18_INA input                  |
| JU2      | Not installed    | External supply applied at the VDD18_INA and GND test points |
| JU3      | Installed*       | 1.8V LDO powers the MAX5862 VDDDLLA input                    |
| JU3      | Not installed    | External supply applied at the VDDDLLA and GND test points   |
| JU4      | Installed*       | VCCAof the level translator connected to VDD18A              |
| JU4      | Not installed    | External supply applied at the JU4-2 pin for VCCAreference   |
| JU5      | 1-2              | MAX4644 NC pin for DLLOFF levels to AVDD18A                  |
| JU5      | 1-3              | MAX4644 NC pin for DLLOFF levels to resistor and GND         |
| JU5      | 1-4*             | MAX4644 NC pin for DLLOFF levels to GND                      |

Table 1. Jumper Configurations (continued)

| JUMPER   | SHUNT POSITION               | EV KIT FUNCTION                                              |
|----------|------------------------------|--------------------------------------------------------------|
| JU6      | Installed*                   | VCCAof level translator connected to VDD18A                  |
| JU6      | Not installed                | External supply applied at the JU6-2 pin for VCCAreference   |
| JU7      | 1-2, 4-5, 7-8, 10-11, 13-14* | SPI signals controlled from MAXQ2000 microcontroller         |
| JU7      | 2-3, 5-6, 8-9, 11-12, 14-15  | SPI signals controlled from FPGAconnectors J1 and J2         |
| JU8      | Installed*                   | Normal operation                                             |
| JU8      | Not installed                | GNDAsense voltage monitoring                                 |
| JU9      | 1-2                          | MAX6161 GND reference from DACREFA                           |
| JU9      | 1-3                          | MAX6161 GND reference from DACREFB                           |
| JU9      | 1-4*                         | MAX6161 GND reference from the board GND                     |
| JU10     | Installed*                   | AVDD3.3V powers the MAX5862 AVDD3B input                     |
| JU10     | Not installed                | External supply applied at the AVDD3B and GND test points    |
| JU12     | Installed*                   | MAX6161 OUT pin to REFIOA                                    |
| JU12     | Not installed                | MAX6161 OUT not directly connected to REFIOA                 |
| JU13     | 1-2*                         | DELAYA to AVDD18A                                            |
| JU13     | 1-3                          | DELAYA to resistor to GND                                    |
| JU13     | 1-4                          | DELAYA to GND                                                |
| JU14     | 1-2*                         | MAX6161 IN pin to AVDD3A                                     |
| JU14     | 2-3                          | MAX6161 IN pin to AVDD3B                                     |
| JU15     | Installed*                   | AVDD3.3V powers the MAX5862 AVDD3A input                     |
| JU15     | Not installed                | External supply applied at the AVDD3A and GND test points    |
| JU16     | Installed*                   | AVDD1.8V powers the MAX5862 AVDD18A input                    |
| JU16     | Not installed                | External supply applied at the AVDD18A and GND test points   |
| JU17     | Installed*                   | AVCLK powers the MAX5862 AVCLKA input                        |
| JU17     | Not installed                | External supply applied at the AVCLKA and GND test points    |
| JU18     | Installed*                   | AVDD1.8V powers the MAX5862 AVDD18B input                    |
| JU18     | Not installed                | External supply applied at the AVDD18B and GND test points   |
| JU19     | Installed*                   | AVCLK powers the MAX5862 AVCLKB input                        |
| JU19     | Not installed                | External supply applied at the AVCLKB and GND test points    |
| JU20     | 1-2, 4-5*                    | SMBus signals controlled from the MAXQ2000 microcontroller   |
| JU20     | 2-3, 5-6                     | SMBus signals controlled from FPGAconnectors J1 and J2       |
| JU301    | Installed*                   | Normal operation                                             |
| JU301    | Not installed                | VDD10B sense voltage monitoring                              |
| JU302    | Installed*                   | 1.8V LDO powers the MAX5862 VDD18_INB input                  |
| JU302    | Not installed                | External supply applied at the VDD18_INB and GND test points |
| JU303    | Installed*                   | 1.8V LDO powers the MAX5862 VDDDLLB input                    |
| JU303    | Not installed                | External supply applied at the VDDDLLB and GND test points   |
| JU306    |                              |                                                              |
| JU306    | Installed*                   | VCCAof level translator connected to VDD18B                  |
|          | Not installed                | External supply applied at the JU306-2 pin for VCCAreference |

Evaluates: MAX5862

## Table 1. Jumper Configurations (continued)

| JUMPER   | SHUNT POSITION   | EV KIT FUNCTION                              |
|----------|------------------|----------------------------------------------|
| JU308    | Installed*       | Normal operation                             |
| JU308    | Not installed    | GNDB sense voltage monitoring                |
| JU312    | Installed*       | MAX6161 OUT pin to REFIOB                    |
| JU312    | Not installed    | MAX6161 OUT not directly connected to REFIOB |
| JU313    | 1-2*             | DELAYB to AVDD18A                            |
| JU313    | 1-3              | DELAYB to resistor to GND                    |
| JU313    | 1-4              | DELAYB to GND                                |

## Detailed Description of Software

The MAX5862 system controller software is designed to control the EV kit and the HSDCEP board. The MAX5862 system  controller  software  includes  USB  circuitry  that provides SPI and SMBus communication to control both ports  of  the  MAX5862  and  the  MAX6642  interfaces, respectively.  The  software  also  controls  the  HSDCEP through  system  calls  to  the  root  HSDCEP  controller software.  The  software  gives  the  user  the  capability  of accessing the IC's 1818 internal registers in each device.

The  two  IC  ports  are  differentiated  by  a Signal  Path Selection checkbox as A or B shown in Figure 2. With the appropriate checkbox selected, the registers in a port are written to and/or read from.

The EV kit software features five window tabs for operation of the MAX5862 system controller software and are defined below:

- MAX5862 Register Control

Single access read and write operations

File read/write loads and downloads Register definition display

- MAX5862 Status Page #1

Reading channel registers to a file Display of channel configuration summary Display of the general chip configuration summary

- MAX5862 Status Page #2

Reading of the FIFO status, power monitor registers, and digital predistortion (DPD) configuration registers Display the interrupt enables and status registers Control of the MAX6642 temperature sensor IC

- HSDCEP Transmit Register Control

Reads or writes to the HSDCEP registers File read/write loads and downloads Upload a data file into the memory and start or stop a memory pattern Load a bit file into the FPGA Power the HSDCEP up or down Read the FIFO status within the FPGA

- DPD Register Control

Manipulation of the DPD register set through easy-touse slide bars

## MAX5862 System Controller Software

The  USB  communication  to  the  MAXQ2000  microcontroller's  SPI  is  verified  when  the  button  labeled RunMAX5862SystemControllerApplication is clicked (Figure 1). If the USB is not connected or communicating to  the  interface  correctly,  a  popup  window  appears,  as shown in Figure 3.

If  the  USB  has  been  disconnected,  the  communication link is lost and must be reinitialized by closing the main GUI  window  (Figure  2)  and  clicking  on Run  MAX5862 System  Controller  Application (Figure  1)  to  connect properly with the microcontroller.

Figure 3. Failed to Connect Popup Window

<!-- image -->

│

Evaluates: MAX5862

Figure 4. MAX5862 Register Control Tab

<!-- image -->

Figure 5. Transfer Complete Popup Window

<!-- image -->

## MAX5862 Register Control Tab

Figure  4  displays  the MAX5862 Register  Control tab sheet. The IC register address and data are placed in the  corresponding  edit  box.  Reads  and  writes  to  the registers  are  updated  when  pressing  the Write  Data and Read  Data buttons.  The  default  data  format  for the Address , Write  Data ,  and Read  Data fields  is hexadecimal. A checkbox is available to display the register  content  in  decimal  format.  The Display  Register Definition displays  the  register  definition  but  does  not decode  the  current  state  (i.e.,  current  bit  state).  Refer to the MAX5862 IC data sheet for register descriptions.

The File  Register Access section  allows  text  files  with multiple entries to be written and/or read. The writes and reads occur one line at a time and the read results are written to an output file for viewing after the transfers are complete. A popup window (see Figure 5) appears when the  transfers  are  complete.  The  write  file  format  should be hexadecimal representation of 12 bits of address, followed by a space, followed by 16 bits of hexadecimal data (e.g., 0x500 0x2040). The format for the file reads should be 12 bits of hexadecimal address, followed by a space, followed  by  the  letters  'rd'  (e.g.,  0x500  rd).  Comments should be preceded with a '#' symbol and can be on a separate line or following read or write commands. Reads and writes can be mixed in a file. On the reads, the read data outputs to a file.

│

## MAX5862 Evaluation Kit

The output file format of the file register access is consistent  with  the  input  data  format  to  allow  for  future configurations.  The  load  file  can  have  the  appropriate register reads to determine the current configuration. The resulting  MAX5862FileLdRegisterRead.txt  file  can  then be modified and used for future chip configuration. There are registers that command a load pulse or configuration order  (i.e.,  hs-cfg,  symif\_x,  or  comb8\_x  registers)  that must  be  addressed  by  the  user  as  those  bits  are  selfclearing.

## MAX5862 Status Page #1 Tab

There are many status qualifiers of the IC. The evaluation system controller software attempts to display the feasible status in the MAX5862 Status Page #1 tab (Figure 6) and

Evaluates: MAX5862

MAX5862 Status Page #2 tabs. All registers associated with a single channel can be read to a file with the Read Channel Registers To File field. In the Display Channel Summary field, the registers associated with the channel entered in the Channel edit box are read and the current configuration is displayed in the window. This includes the single-channel register as well as the 8-channel combiner registers  associated  with  the  channel  defined.  For  the information associated with the 32-channel or 128-channel  combiner settings, press the Display button  next  to the Display  General  Summary field.  The  display  field displays the G4 and G5 gain settings, the NCO settings, the  SDR  (single  data  rate)  or  DDR  (double  data  rate) mode, and the number of slots per port currently set.

Figure 6. MAX5862 Status Page #1 Tab

<!-- image -->

│

## MAX5862 Evaluation Kit

## MAX5862 Status Page #2 Tab

The MAX5862  Status  Page  #2 tab  (Figure  7)  allows access to the FIFO status, G1 through G3 power monitor registers,  interrupt  enables  and  status,  DPD  registers, and  the  temperature  sensor  status  and  settings.  The FIFO status displays a pass or fail state. In either case, the  register  reads  are  dumped  to  a  file  for  examination upon  failure.  The  power  monitor  registers  can  be  read to a file for user evaluation by pressing the Read button under the Read Power Data label. Interrupt enables and status can be displayed in the output window for the user. The DPD registers can be read and written to an output file  by  pressing  the Read button  under  the Read  DPD Registers label.

The  MAX6642  IC  monitors  the  temperature  of  the MAX5862. The MAX6642 registers are read from/written to using the EV kit USB circuitry. Check the appropriate

Evaluates: MAX5862

port checkbox under the Signal Path Selection to  set the  MAX6642  to  communicate.  The  high  temperature threshold that asserts the IC ALERT logic output is set using  the Write  High  Limit edit  field  and  affects  the assertion of the status LED D1 for signal path A and D2 for signal path B. The MAX5862 IC current temperature is  read  by  clicking  the Read  Temperature button.  An additional Read Cmd Reg button is available for reading  the  remaining  MAX6642  registers.  Reading  from address 2 clears the ALERT and therefore turns off D1 for signal path A or D2 for signal path B if the threshold is not currently passed. The Read Temperature and Write High  Limit buttons  are  the  only  registers  required  for most applications. However, the Read Cmd Reg button is available for reading the MAX6642 registers by entering  the  register  address,  in  decimal  format,  in  the  edit box. Refer to the MAX6642 IC data sheet for additional registers information.

Figure 7. MAX5862 Status Page #2 Tab

<!-- image -->

│

## MAX5862 Evaluation Kit

## HSDCEP FPGA Register Control Tab

The  HSDCEP  can  be  controlled  using  the HSDCEP FPGA Register Control tab, (see Figure 8). Single register  reads  or  writes  are  performed  using  the Address , Write Data , and Read Data edit boxes, using hex format. A checkbox is available for entering data in decimal format. Various buttons are available for control such as file reads and writes, memory file loads, starting and stopping

Evaluates: MAX5862

the memory transfer, board power up and down, FPGA bit file load, and FIFO status for the transmit specific build.

Note: When operating the EV kit GUI using the HSDCEP FPGA  Register  Control tab  functions,  the  load  files and MAX5862 system controller executable file must be located in the same directory as the HSDCEP executable file for proper operation.

Figure 8. HSDCEP FPGA Register Control Tab

<!-- image -->

│

## Evaluates: MAX5862

Figure 9. DPD Register Control Tab

<!-- image -->

## DPD Register Control Tab

The DPD Register Control Tab (Figure 9) allows easy track bar control of the DPD gain registers. The Initialize button initiates connection between the track bar locations to the register values. Moving the track bars triggers register control of the selected gain. Results in the spectrum can be seen instantly using the slide bars. To control the values of the gain registers with the values entered into the checkboxes, press the Apply Manual Entry button.

## Detailed Description of Hardware

The MAX5862 EV kit contains two MAX5862 high-density downstream  cable  QAM  modulators  that  each  drive  an RF port. It is a fully assembled and tested PCB that contains  all  the  components  necessary  for  evaluating  two MAX5862 devices configured for  32  DOCSIS-compliant 6MHz  or  8MHz  QAM  channels.  The  EV  kit  provides  a complete system solution for high-density QAM modulation with very low power dissipation. The EV kit operates from a 5.5V/4A input power supply.

The IC performs QAM mapping, pulse shaping, and digital RF upconversion of FEC encoded data with full agility. The IC accepts data on one time-multiplexed input port of up to 32 digital streams per port, providing a very flexible DSP front-end.

The EV kit provides Samtec QTH connectors J1 and J2 to drive the IC input ports. The IC output is available for viewing  at  the  OUTA  and  OUTB  SMA  connectors  (see Figure 3).

│

## MAX5862 Evaluation Kit

The EV kit incorporates two MAX6642 devices for monitoring the two MAX5862 die temperatures. LEDs D1 and D2  turn  on  when  the  MAX5862  die  temperature  rises above the programmed high temperature threshold within the  corresponding  MAX6642.  See  the MAX5862 Status Page #2 Tab section for reconfiguring the high temperature threshold. Also refer to the MAX6642 IC data sheet for additional register information.

The EV kit provides on-board SPI and SMBus interfaces and is connected to the computer through USB connector USB1. The EV kit Windows XP-, Vista-, and Windows 7-compatible software provides a GUI for control of the MAX5862 and MAX6642 programmable features. Logiclevel translators provide proper interface translation from the  MAX5862  digital  signals  to  the  USB  and  HSDCEP circuitry.

## Power Supplies

The  EV  kit  operates  from  a  single  5.5V/4A  power supply  applied  at  the  5.5V\_IN  and  GND  PCB  pads. The MAX15023 dual synchronous step-down controller, MAX1793 LDO regulator, and MAX8902A low-noise LDO regulator provide power to the EV kit's power rails. The MAX15023 devices are configured to 1.1V and are used for on-board regulation of the MAX5862 core supply input, VDD10.  The  MAX1793  LDO  regulators  are  configured to  1.8V  and  3.3V  and  are  used  for  on-board  regulation of  the  MAX5862  VDDDLL,  VDD18,  VDD18L,  AVCLK, and AVDD3 supply inputs. The MAX8902A LDO regulators  are  configured  to  1.8V  and  are  used  for  on-board regulation of the AVDD18 supply inputs. The EV kit also provides  the  option  of  using  external  power  supplies. When using an external supply for the VDD10 supply rail, remove resistors R3 and R303 and apply a 1V/5A power supply at each of the VDD10\_INA and VDD10\_INB relative to GND PCB pads. See Table 1 for proper shunt settings for all the other EV kit power-supply inputs.

Test  points  are  available  at  VDD10\_INA,  VDD10\_INB, VDDDLL\_INA, VDDDLL\_INB, VDD18\_INA, VDD18\_INB, AVCLK\_U1,  AVCLK\_U21,  AVDD3\_U1,  AVDD3\_U21, AVDD18\_U1, AVDD18\_U21, and GND for monitoring the EV kit power-supply voltages.

Jumpers  JU1  and  JU8  are  provided  for  sensing  the MAX5862  (signal  path A)  VDD10  voltage.  Remove  the shunts	at	jumper	JU1	and	JU8	and	connect	the	voltmeter positive and negative terminals at JU1 pin 1 and JU8 pin 2,  respectively,  to  monitor  VDD10  voltage  as  monitored inside the MAX5862 (signal path A).

Jumpers JU301 and JU308 are provided for sensing the MAX5862 (signal  path  B)  VDD10  voltage.  Remove  the shunts	at	jumper	JU301	and	JU308	and	connect	the	volt -meter positive and negative terminals at JU301 pin 1 and JU308 pin 2, respectively, to monitor VDD10 voltage as monitored inside the MAX5862 (signal path B).

## SPI and SMBus Interface Control

The EV kit communicates to the MAX5862 SPI interface using the on-board USB circuitry.

Place shunts across pins 1-2, 4-5, 7-8, 10-11, and 13-14 of	jumper	JU7	to	control	the	SPI	interface	using	the	USB circuitry.

The  EV  kit  communicates  to  the  MAX6642  SMBus interface using the on-board USB circuitry. Place shunts across	 pins	 1-2	 and	 4-5	 of	 jumper	 JU20	 to	 control	 the SMBus interface using the USB circuitry.

## Global Reset

Momentary  pushbutton  switch  RSTN\_A  is  used  as  a global reset to clear all signal path A MAX5862 configuration registers. A global reset is required when uploading a  new  test  configuration  using  the Select  File  to  Load pushbutton on the MAX5862 Register Control tab. Press the RSTN\_A switch to clear the registers before uploading a new test configuration file.

Momentary  pushbutton  switch  RSTN\_B  is  used  as  a global reset to clear all signal path B MAX5862 configuration registers. A global reset is required when uploading a new test configuration using the Select File to Load push button on the MAX5862 Register Control tab. Press the RSTN\_B switch to clear the registers before uploading a new test configuration file.

Test configuration files are available for loading into the MAX5862,  through  the  SPI  interface.  The  MAX5862 output is available for viewing at the external OUTA and OUTB SMA connector.

## MODE2 Pushbutton Switch

Momentary  pushbutton  switch  MODE2  is  available  for providing  a  low-to-high  pulse  at  the  MAX5862  MODE2 input when pressed.

The pushbutton switch is used to perform various functions within the MAX5862. Refer to the MAX5862 IC data sheet for additional information.

## MAX5862 Evaluation Kit

## Resetting the MAX5882 DLL Frequency

Pushbutton switch DLLOFF is available for resetting the DAC DLL. To reset the frequency range, press and hold the  DLLOFF  button,  reconfigure  DELAY  and  DLLOFF jumpers,	and	then	release	the	button.

The MAX5862 uses four level control inputs for controlling the delay and speed settings for the on-chip DLL. Each jumper	has	four	possible	positions	as	detailed	in Table 2.

## Using the HSDCEP Data Source Board with the MAX5862 EV Kit

High-speed QSH connectors (J1 and J2) are available to interface the EV kit to Maxim's HSDCEP data source board.  The  high-speed  data  converter  evaluation  platform (HSDCEP) can be used as a data source for the EV kit. The HSDCEP drives the MAX5862 one multiplexed input  ports,  control  signals,  and  monitors  of  the  ready

## Table 2. DLL Jumper Positions

| DLLOFF JU5 SHUNT POSITION   | DELAY JU13 or JU313 SHUNT POSITION   | MAX5862 fCLK DLL LOCK RANGE (MHz)   | OPERATION                   |
|-----------------------------|--------------------------------------|-------------------------------------|-----------------------------|
| 1-2                         | 1-2                                  | -                                   | DLL is Off One 1/fCLK Delay |
| 1-2                         | 1-4                                  | -                                   | DLL is Off No 1/fCLK Delay  |
| 1-4                         | 1-2                                  | 2150 to 2304                        | DLL is On                   |
| 1-4                         | Open                                 | 1900 to 2150                        | DLL is On                   |
| Open                        | 1-4                                  | 1650 to 1900                        | DLL is On                   |
| Open                        | 1-2                                  | 1400 to 1650                        | DLL is On                   |
| Open                        | Open                                 | 1250 to 1400                        | DLL is On                   |
| 1-3                         | 1-4                                  | 1100 to 1250                        | DLL is On                   |
| 1-3                         | 1-2                                  | 950 to 1100                         | DLL is On                   |
| 1-3                         | Open                                 | 800 to 950                          | DLL is On                   |

│

## Evaluates: MAX5862

logic outputs. The EV kit software provides the HSDCEP FPGA Register Control tab for controlling the HSDCEP.

The HSDCEP and EV kit boards can be connected using the provided hardware. See the Block Diagram for details in  connecting the boards together. Alternatively, the two boards  can  be  connected  with  coaxial  ribbon  cables (Samtec  HQCD-060-06.00-STR-TBR-1).  Note  that  it  is necessary to use either the supplied hardware or cables to  get  a  reliable  electrical  connection  between  the  two boards.

The firmware previously developed for the MAX5880 can be  used  with  the  EV  kit  when  using  the  ribbon  cables. Only the J5 connector on the HSDCEP should be connected. This can be connected to either J1 or J2 on the EV  kit  connectors  to  drive  either  the  MAX5862  (signal path A) or MAX5862 (signal path B), respectively.

## MAX5862 Evaluation Kit

## Component List

Refer to file 'MAX5862\_evkit\_a\_XY.xls' attached to this PDF for component information.

## Component Suppliers

| SUPPLIER                 | PHONE        | WEBSITE                 |
|--------------------------|--------------|-------------------------|
| AVX Corporation          | 8430946-0238 | www.avx.corp            |
| Fairchild Semiconductor  | 888-522-5372 | www.fairchildsemi.com   |
| Hong Kong X'tals Ltd.    | 852-35112388 | www.hongkongcrystal.com |
| Murata Americas          | 770-436-1300 | www.murataamericas.com  |
| Panasonic Corp.          | 800-344-2112 | www.panasonic.com       |
| SANYO Electric Co., Ltd. | 619-661-6835 | www.sanyo.com           |
| Taiyo Yuden              | 800-348-2496 | www.t-yuden.com         |
| TDK Corp.                | 847-803-6100 | www.component.tdk.com   |
| Vishay                   | 402-543-6866 | www.vishay.com          |

│

Evaluates: MAX5862

Figure 10a. MAX5862 EV Kit Schematic (Sheet 1 of 11)

<!-- image -->

Evaluates: MAX5862

Figure 10b. MAX5862 EV Kit Schematic (Sheet 2 of 11)

<!-- image -->

Figure 10c. MAX5862 EV Kit Schematic (Sheet 3 of 11)

<!-- image -->

Evaluates: MAX5862

Figure 10d. MAX5862 EV Kit Schematic (Sheet 4 of 11)

<!-- image -->

Figure 10e. MAX5862 EV Kit Schematic (Sheet 5 of 11)

<!-- image -->

Evaluates: MAX5862

Figure 10f. MAX5862 EV Kit Schematic (Sheet 6 of 11)

<!-- image -->

Evaluates: MAX5862

Figure 10g. MAX5862 EV Kit Schematic (Sheet 7 of 11)

<!-- image -->

Figure 10h. MAX5862 EV Kit Schematic (Sheet 8 of 11)

<!-- image -->

Figure 10i. MAX5862 EV Kit Schematic (Sheet 9 of 11)

<!-- image -->

Figure 10j. MAX5862 EV Kit Schematic (Sheet 10 of 11)

<!-- image -->

Figure 10k. MAX5862 EV Kit Schematic (Sheet 11 of 11)

<!-- image -->

Figure 11. MAX5862 EV Kit PCB Layout-Top Side

<!-- image -->

│

Figure 12. MAX5862 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 13. MAX5862 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 14. MAX5862 EV Kit PCB Layout-Inner Layer 4

<!-- image -->

Figure 15. MAX5862 EV Kit PCB Layout-Inner Layer 5

<!-- image -->

Figure 16. MAX5862 EV Kit PCB Layout-Inner Layer 6

<!-- image -->

│

## Evaluates: MAX5862

Figure 17. MAX5862 EV Kit PCB Layout-Inner Layer 7

<!-- image -->

## Evaluates: MAX5862

Figure 18. MAX5862 EV Kit PCB Layout-Inner Layer 8

<!-- image -->

Figure 19. MAX5862 EV Kit PCB Layout-Inner Layer 9

<!-- image -->

Figure 20. MAX5862 EV Kit PCB Layout-Inner Layer 10

<!-- image -->

## Evaluates: MAX5862

Figure 21. MAX5862 EV Kit PCB Layout-Inner Layer 11

<!-- image -->

│

Figure 22. MAX5862 EV Kit PCB Layout-Inner Layer 12

<!-- image -->

Figure 23. MAX5862 EV Kit PCB Layout-Inner Layer 13

<!-- image -->

Figure 24. MAX5862 EV Kit PCB Layout-Bottom Side

<!-- image -->

│

## Evaluates: MAX5862

Figure 25. MAX5862 EV Kit Component Placement Guide-Silkscreen Top

<!-- image -->

│

## Evaluates: MAX5862

Figure 26. MAX5862 EV Kit Component Placement Guide-Silkscreen Bottom

<!-- image -->

## Ordering Information

| PART          | TYPE                                          | DESCRIPTION                              |
|---------------|-----------------------------------------------|------------------------------------------|
| MAX5862EVKIT# | EV Kit                                        | Dual-Port 32-Channel Cable QAM Modulator |
| HSDCEP*       | High-Speed Data Converter Evaluation Platform | FPGAData Source Board                    |

# Denotes RoHS compliant.

* Not compatible with Windows 7.

## MAX5862 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

│

Evaluates: MAX5862