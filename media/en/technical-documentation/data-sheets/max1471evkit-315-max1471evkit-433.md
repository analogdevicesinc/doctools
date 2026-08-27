<!-- lastmod 2022-08-04 -->
## MAX1471 Evaluation Kit

## General Description

The MAX1471 evaluation kit (EV kit) simplifies evaluation of the MAX1471, a low power, superheterodyne, sub-GHz RF dual-channel receiver designed to receive both amplitude shift keying (ASK) and frequency-shift keying (FSK) data  without  reconfiguring  the  device  in  the  300MHz  to 450MHz frequency range.

The MAX1471 evaluation kit operates in conjunction with an  external  microcontroller  (MCU)  and  graphical  user interface  (GUI)  software  running  on  a  computer.  The MAX1471 uses an SPI interface for internal register configurations and control.

The  MAX1471  EV  kit  is  available  in  two  versions: 315MHz (MAX1471EVKIT-315) and 433.92MHz (MAX1471EVKIT-433).  The  passive  components  are optimized  for  these  two  frequencies  but  can  easily  be changed to work at any RF frequency between 300MHz and 450MHz.

The  EV  kit  includes  Windows ® 10-compatible  software that  provides  a  simple  GUI  for  configuration  of  the MAX1471 registers through the SPI port. The GUI also controls  the  on-board  PMIC  and  provides  a  quick  start register configuration to evaluate the MAX1471 function -ality,  when the MAX32630FTHR applications platform is used.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

## Features

- Evaluates the MAX1471 Sub-1GHz ISM Receiver
- Single Input Voltage Supply from 2.4V to 5.5V or Powered from the USB Interface
- Direct Interface with a MAX32630FTHR Arm ® Microcontroller (MCU) Board
- Available in 315MHz- or 433.92MHz-Optimized Versions
- Available PMOD Hardware Interface
- Windows 10-Compatible Software
- On-Board SPI Interface Control
- GUI Controls for the MAX32630FTHR Board PMIC Operation from 2.4V to 3.3V
- Proven 2-Layer PCB Design
- Fully Assembled and Tested

Ordering Information appears at end of data sheet.

<!-- image -->

Evaluates: MAX1471

## MAX1471 Evaluation Kit

Evaluates: MAX1471

<!-- image -->

Figure 1. MAX1471 EV Kit Board

<!-- image -->

## MAX1471 Evaluation Kit

## Quick Start

## Required Equipment

- Included in the MAX1471 evaluation kit
- MAX1471 evaluation kit board
- MAX32630FTHR# kit
-  FTHR board
- -MAX32625PICO
- -2x micro/B USB cables
- Windows PC* (Windows-10), with one to two USB2.0 ports available
- Power supply † capable of 2.4V to 5.5V, 100mA
- RF signal generator capable of delivering from -120dBm to 0dBm of output power at operating fre -quency, in addition to AM or Pulse modulation and FM modulation capabilities
- Dual-trace oscilloscope
- SMA/SMA cable as needed for connection to the RF signal generator

## Software and Drivers

The MAX1471 EV kit can be used in conjunction with the Arm ®  Cortex ® -M4 processor with FPU MAX32630FTHR application platform or FTHR board to provide power and control  the  device  through  a  GUI  software  application. For this option, additional equipment is required.

When connected to the FTHR board, the MAX1471 EV kit uses the following drivers and software components.  See the Appendix I for  additional information on this installation process.

- MAX1471 Software Package

The software, firmware, and drivers are available from the www.maximintegrated.com website. Login to the MyMaxim account on the website, search for the MAX1471 part or EVKIT, click on the Design Resources tab, and click on the ISM RADIO GUI software link.  Finally, click the file link on the soft -ware landing page to download the ISMRADIOGUI package.

## Evaluates: MAX1471

- Mbed TM  MAX32630FTHR and DAPLINK Interface System

The DAPLINK system is not required unless a firm -ware update to the FTHR board has been released. The FTHR board included in the MAX1471 EV kit is preprogrammed for interfacing the GUI to the radio. The firmware programming process does not require additional software or drivers, it uses a simple USB drive, drag-and-drop file interface.

It is highly recommended that the target PC be connected to a local area network and have access to the Internet, allowing automatic download and updates of some drivers. This process can take 15 minutes or more to complete.

## Installation Procedure

The steps in this section are used when connecting the MAX1471 EV kit to a FTHR board and it needs only once, when configuring  the  hardware  and  the  PC  for  the  first time. If these steps have already been completed, jump directly to the FTHR Board Quick Start Procedure section.

## Install the MAX1471EVKIT GUI Software

This process takes less than 10 minutes after download -ing the software package. See the Appendix I for detailed information on this installation process.

- 1) Double-click the ISMRadiosGUISetup.msi setup file and follow the setup wizard prompts.
- a) Click Next in the ISM Radio GUI setup wizard window.
- b) It is recommended to use the default destination folder; click Next to continue.
- c) Install the software by clicking the Install button.
- d) Click Finish when the ISM radio GUI setup wizard installation process is complete.

## Table 1. MAX1471 EV Kit Installed Files and Folders

| FILE NAME             | DESCRIPTION                                |
|-----------------------|--------------------------------------------|
| ISM RADIO GUI.exe     | Application GUI                            |
| MaximStyle.dll        | Supporting DLL file for software operation |
| MAX1471_Registers.xml | Register definition file                   |

*required for operation of the MAX1471 EV kit with the GUI software.

†required when the FTHR board is not connected to the MAX1471EV kit.

Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

Arm and Cortex are registered trademarks of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

## MAX1471 Evaluation Kit

## Update the MAX32630FTHR Board Driver on the Host PC

No changes are needed for the FTHR board when first receiving  the  MAX1471EVKIT-the  FTHR  board  has been pre-loaded with the required firmware. Updates to the driver on the host PC may be necessary depending on the operating system and whether the PC has access to the internet when first connecting to the FTHR board. See  the Appendix  I for  detailed  information  on  how  to update the FTHR board firmware and the driver for the FTHR board/USB interface.

## Hardware Use Procedure

## FTHR Board Quick Start Procedure-SPI Interface

## Setup the MAX1471 EV Kit and FTHR Board Hardware MCU/GUI Operation

- 1) Verify the jumper on the MAX1471 EV kit board is in the default position, see Table 2.
- 2) Connect the MAX1471 EV kit to the FTHR board, be sure the USB connector is oriented on the opposite side of the SMA connector as show in Figure 3.

## Table 2. MAX1471 EV Kit Jumper Settings

| JUMPERS   | POSITION   | EV KIT FUNCTION                               |
|-----------|------------|-----------------------------------------------|
| J4        | 1-2*       | Power from L3OUT (FTHR board)                 |
| J4        | 2-3        | Power from PMOD interface (VDD, pin 6 of JU4) |

*Default position.

Figure 2. MAX1471 EV Kit Jumpers

<!-- image -->

Evaluates: MAX1471

- 3) Connect the FTHR board to the PC using a micro USB cable and observe a  heartbeat on the FTHR board's red LED.
- 4) Connect the RF\_IN to a signal generator using a low-loss SMA cable.
- a) Set the frequency to the desired frequency of interest: for the MAX1471EVKIT-315 variant program the set frequency to 315MHz and for the MAX1471EVKIT-433 variant program the set frequency to 433.92MHz.
- b) Set the power level out of the generator to -100dBm.
- c) Set up and enable the ASK or FSK modulation. Use a 4kHz square wave (50% duty cycle) mod -ulating signal for the ASK (use pulse modulation rather than AM if it is an available option on the signal generator). Use a 4kHz square wave (50% duty cycle) and 50kHz frequency deviation modulating signal for the FSK.
- 5) Connect the ADATA (ASK) or FDATA (FSK) test point output to the oscilloscope.

## Table 3. MAX1471 EV Kit Test Points

Figure 3. MAX1471 EV Kit Orientation to FTHR Board

| NAME   | COLOR   | EVKIT FUNCTION                |
|--------|---------|-------------------------------|
| VDD    | Red     | 2.4V to 5.5V power supply pin |
| GND    | Black   | Ground                        |
| FDATA  | Yellow  | FSK Demodulated data output   |
| ADATA  | Green   | ASK Demodulated data output   |

<!-- image -->

│

## MAX1471 Evaluation Kit

- 6) Start the ISM Radios GUI control software.
- a. An ISM Radios GUI splash screen as shown in Figure 4 will be displayed.
- i. To disable future displays of the splash screen, click on the Disable Splash check box.
- ii. To continue to the GUI software when the select device message prompted as shown in Figure 5, click on the OK button.
- iii. Select the MAX1471-Rx from the Device drop-down menu as shown in Figure 6.

Evaluates: MAX1471

<!-- image -->

Figure 4. ISM Radios GUI Splash Screen

Figure 5. ISM Radios GUI Device Select Screen

<!-- image -->

Figure 6. ISM Radios GUI Device Select Screen

<!-- image -->

│

## MAX1471 Evaluation Kit

Evaluates: MAX1471

Figure 7. ISM Radio GUI Software

<!-- image -->

## MAX1471 Evaluation Kit

- b. The expected Comport displays if the EV kit was connected prior to starting the GUI. Select the appropriate Comport from the drop-down list and click on the Connect button. The Connect button changes to the Disconnect button.
- c. Confirm the firmware status bar has changed from ISM Radios x.x.x to ISM Radios 3.0.0 or similar, the software LED is lit green, and the port status is noted as Connected .
- d. Enter a supply level into the Voltage text box and click the Set button; for example, enter 3.3 for a 3.3V supply.
- e. Select the Quick Start setting under Register Configuration.
- f. Select the Receive mode to be Continuous .
- g. Select a desired form of modulation in the Modulation drop-down box (to match signal generator setup) and click the Set button.
- h. Enter a desired Crystal Oscillator frequency (for example, 9.509375MHz for 315MHz and 13.2256MHz for 433.92MHz) and click the Set button.
- 7) Observe the output on the oscilloscope.

Evaluates: MAX1471

<!-- image -->

Figure 8. COM Port

<!-- image -->

Figure 9. Connected Indicators

<!-- image -->

Figure 10. Supply Voltage

<!-- image -->

Figure 11. Register Configuration

<!-- image -->

Figure 12. Receive Mode

Figure 13. Modulation Selection

<!-- image -->

Figure 14. Crystal Oscillator Setting

<!-- image -->

│

## MAX1471 Evaluation Kit

## Detailed Description

## Detailed Description of Hardware

## MAX1471 EV Kit Printed Circuit Board

The MAX1471 evaluation kit PCB is manufactured on a 2-layer,  1oz  copper,  FR4  dielectric  stack-up  PCB.    The board was designed to evaluate the MAX1471 ASK/FSK superheterodyne receiver. Layer 1 is primarily designed to keep the RF signals on one side of the board with short traces,  small  matching  components,  and  low  parasitics. Layer  2  was  targeted  to  be  a  continuous  ground  plane wherever  possible.  The  MAX1471  EV  kit    is  available in  two  versions:  315MHz  (MAX1471EVKIT-315)  and 433.92MHz (MAX1471EVKIT-433). The passive compo -nents  are  optimized  for  these  two  frequencies,  but  can easily be changed to work at RF frequencies anywhere from 300MHz to 450MHz.

## Control Interface

The  MAX1471  device  requires  a  3-  or  4-wire  SPI  con -nection  and  the  MAX1471  EV  kit  was  designed  to  use

Evaluates: MAX1471

the  provided  FTHR  board  interface  through  the  H1/H2 headers.  Other MCU connections can be made through the H3 PMOD header (see the PMOD Interface section).

## Power

The MAX1471 EV kit board can be powered directly from the  FTHR  board  PMIC  through  the  H1  header,  directly from the supply test points, or through the user installed PMOD header.  A single +2.4V to +5.5V, 100mA power supply can be connected to the board using the two wire loops  (marked VDD and GND).  Jumper J4 selects the source of power when not using the direct connection test points: from the L3OUT of the FTHR board or the PVIO of the PMOD connector.

## Data Interface

The  MAX1471  EV  kit  comes  pre-configured  to  directly connect the FTHR board through the H1/H2 headers to the SPI interface. The GUI controls the SPI bus commu -nication of FTHR board and the MAX1471.

Figure 15. MAX1471EV Kit Interface

<!-- image -->

│

## MAX1471 Evaluation Kit

## ADATA

The digital baseband ASK demodulator data output signal can be monitored with the Green ADATA test point.

## FDATA

The digital baseband FSK demodulator data output signal can be monitored with the Yellow FDATA test point.

## PMOD Interface

The MAX1471 EV kit provides a PMOD-compatible head -er  footprint  to  interface  with  the  receiver.  The  H3  con -nector can be populated with a 6-pin, 100mil, right-angle header  allowing  direct  connections  to  the  CSB,  DIO, SCLK, Ground, and VDD lines making it capable with SPI

Evaluates: MAX1471

PMOD interfacing.  Populating this header allows control from the MAX32600MBED kit and the MAXREFDES72# Arduino ® Uno R3 to PMOD shield adaptor.  When using the PMOD interface to supply the MAX1471 EV kit with power,  make  sure  to  connect  the  J4  jumper  between pins 2-3.  See the Appendix II for detailed information on evaluation kit hardware modifications.

## Detailed Description of Software

The MAX1471 EV kit controller GUI software is designed to  control  the  MAX1471  evaluation  kit  board  and  the MAX32630FTHR board as shown in Figure 3. The soft -ware includes USB controls which provide SPI communication to the MAX1471 through the FTHR board interface.

Figure 16. MAX1471 EV Kit GUI Configuration

<!-- image -->

Arduino is a registered trademark of Arduino, LLC.

│

## MAX1471 Evaluation Kit

## Comport

The Comport section  provides  a  drop-down  selection of  serial  communication  ports  available  for  connection to  the  MAX1471  evaluation  kit  through  a  FTHR  board. When the GUI is run after connecting the evaluation kit hardware,  the  drop-down  box  is  default  to  the  proper Comport. If  the  hardware  is  connected  to  the  computer after  the  GUI  is  started,  click  on  the Refresh button  to scan for compatible ports. Once the appropriate Comport is  selected  in  the  drop-down  box,  click  on  the Connect button (See Figure 8 ).

After  connecting  to  the Comport with  the  FTHR  board, the  GUI  displays  the  revision  of  FTHR  board  firmware detected, display a Green LED, and display Connected in the status bar along the bottom of the GUI window (See Figure 9).

## Voltage (2.4V-3.3V)

The Voltage section  provides  a  user-adjustable  power supply  from  the  FTHR  board  MAX14690N  power  man -agement IC (PMIC) to the MAX1471 EV kit and can be used as the primary VDD supply. The PMIC, L3OUT can be set to voltages between 2.4V and 3.3V and it applies to the level of the logic interface lines as well as the device supply (See Figure 10).

To program the supply voltage, enter a valid level in the Voltage text box and click on the Set button.  The default value of the L3OUT voltage is 3.3V.

When  using  the  FTHR  board  interface  to  supply  the MAX1471 EV kit with power, make sure to connect the J4 jumper between pins 1-2.

## Register Configuration

The MAX1471 GUI provides the three register configuration settings.

Quick Start: The Quick Start option configures the power configuration register. The quick start setting enables the LNA, AGC, mixer, baseband, and peak detector bits.

Save  Config: The  GUI  configuration  can  be  saved  by clicking the Save Config button. The saved register con -figuration  can  be  retrieved  by  clicking  the Load Config button.

Load Config: A register configuration file can be loaded to the GUI by clicking the Load Config button.

## Receive Mode

The MAX1471 operates in two modes: Continuous and Discontinuous receive modes.

Continuous  Receive  Mode: All  analog  modules  are powered directly through the power configuration register.

Discontinuous  Receive  Mode: Power  signals  for  the analog modules toggle between OFF and ON, according to the internal timers t OFF , t CPU , and t RF  (See the DRX Timers ). This mode is used for the low power operation.

## Modulation

The Modulation section allows the user to quickly set the form of modulation for the MAX1471 device. To select the modulation, choose ASK or FSK in the Modulation dropdown box and click on the Set button. (See Figure 13).

## Crystal Oscillator (9.0406-13.7281MHz)

The Crystal Frequency section allows the user to indicate the frequency of the crystal installed on the MAX1471 EV kit (f XTAL ). This  value  can  be  adjusted  between the 9.040606MHz and 13.7281MHz. Once appropriate crystal frequency  is  entered,  the  calculated  receiver  frequency value shows on the adjacent text box.

The  XTAL  oscillator  frequency  sets  the  received  signal frequency as below:

<!-- formula-not-decoded -->

The MAX1471EVKIT-315 evaluation kits come pre-pop -ulated with a 9.509375MHz crystal and the setting in the GUI is  9.509375MHz. The MAX1471EVKIT-433 evalua -tion kits come pre-populated with a 13.225625MHz crystal and the setting in the GUI is 13.225625MHz.

The  MAX1471  has  an  internal  frequency  divider  that divides  down  the  crystal  frequency  to  100kHz.  The hexadecimal  value  written  to  the  oscillator  frequency register is the nearest integer result of f XTAL /100kHz. For example, if data is being received at 315MHz, the crystal frequency is 9.509375MHz. Dividing the crystal frequency by 100kHz and rounding to the nearest integer gives 95, or  0x5F  hex.  For  315MHz,  0x5F  writes  to  the  oscillator frequency register.

Figure 17. Register Configuration

<!-- image -->

│

## MAX1471 Evaluation Kit

To  configure  the  reference  oscillator,  enter  a  valid  frequency (in MHz) in the crystal frequency text box and click on the Set button (See Figure 14 ).

The Crystal Oscillator frequency can also be set manually through the Direct Register Access Section by clicking on the 0x03 OSC\_FREQ (0x03) register, clicking on the FREQ [7:0] field, and typing in a hex value between 0x00 and 0xFF.

## AGC Dwell Time

When AGC is enabled, it monitors the RSSI output. When the RSSI output reaches 1.28V, which corresponds to an RF input level of approximately -64dBm, the AGC switch -es on the LNA gain reduction attenuator. The attenuator reduces  the  LNA  gain  by  35dB,  thereby  reducing  the RSSI  output  by  about  0.55V.  The  LNA  resumes  highgain mode when the RSSI output levels drop back below 0.68V (approximately -67dBm at RF input) for a program -mable interval called AGC Dwell Time .

The AGC Dwell Timer holds the AGC in low gain for a set amount of time after the power level drops below the AGC switching threshold. After that set amount of time, if the power level is still below the AGC threshold, the LNA switches into the high-gain state.

The AGC Dwell  Time is  dependent  on  the  crystal  frequency and the bit settings of the AGC Dwell Time register.  The  GUI  calculates  the  register  values  using  the following equation:

<!-- formula-not-decoded -->

## Evaluates: MAX1471

For  Manchester  code  (50%  duty  cycle),  set  the  dwell time  to  at  least  twice  the  bit  period.  For  NRZ  data,  set the dwell to greater than the period of the longest sting of zeroes or ones. For example, using the Manchester code at 315MHz (f XTAL  = 9.509375) with a data rate of 4kbps (bit  period = 125µs), the dwell time needs to be greater than 250µs:

Reg 0 x A ≥ 3.3 x log 10  (250µs x 9.509375MHz)

The calculated value would be ~11.14. The value should be rounded up to the nearest integer value. Therefore, the value of 12 or 0x0C should be chosen and set for the AGC dwell time register (0x0A).

To select the AGC Dwell Time , enter the timer value into the dwell time text box and click on the Set button.

The AGC Dwell Time can also be set manually through the Direct Register Access Section by clicking on the 0A AGCD\_TMR (0x0A)  register,  clicking  on  the  TMR  [7:0] field, and typing in a hex value between 0x00 and 0xFF.

The default value of AGC dwell timer on power-up or reset is 0x0D.

## Commands

The Commands section provides three command settings.

Reset: The Reset command sends the reset signal to all the internal registers of the MAX1471 just like a power-off and power-on sequence.

Sleep: The Sleep command  puts  the  MAX1471  into deep-sleep mode when set.

Nop: The Nop command sends the No operation com -mand bits to the MAX1471 internal register.

Figure 18. Commands

<!-- image -->

│

## MAX1471 Evaluation Kit

## DRX Timers

The DRX Timers section  allows  the  internal  timers  settings for the Discontinuous receive mode. On power up, timer registers are set to zero and must be written before using the DRX mode.

## OFF-Timer:

The OFF-Timer is a 16-bit timer that is configured using: register 0x4 for the upper byte, register 0x5 for the lower byte,  and  bits  PRESCALE1  and  PRESCALE0  in  the

## Evaluates: MAX1471

configuration register (register 0x1). Table 4 summarizes the  configuration  of  the  t OFF  timer.  The  PRESCALE1 and  PRESCALE0 bits  set  the  size  of  the  shortest  time possible (t OFF time base). The data written to the t OFF registers (0x4 and 0x5) is multiplied by the time base to give the total t OFF time.

To configure the off-timer register, click on the OFF-Timer text box, set the appropriate timer value, and click the Set button.

Figure 19. DRX Timers

<!-- image -->

## Table 4. OFF-Timer Configuration

Figure 20. OFF Timer Configuration

|   PRESCALE1 |   PRESCALE0 | t OFF TIME BASE (1 LSB)   | MIN t OFF REG 0x4 = 0x00 REG 0x5 = 0x01   | MAX t OFF REG 0x4 = 0xFF REG 0x5 = 0xFF   |
|-------------|-------------|---------------------------|-------------------------------------------|-------------------------------------------|
|           0 |           0 | 120µs                     | 120µs                                     | 7.86s                                     |
|           0 |           1 | 480µs                     | 480µs                                     | 31.46s                                    |
|           1 |           0 | 1920µs                    | 1.92ms                                    | 2 min 6s                                  |
|           1 |           1 | 7680µs                    | 7.68ms                                    | 8 min 23s                                 |

<!-- image -->

│

## MAX1471 Evaluation Kit

## RF Settle Timer

The RF Settle Timer is used to allow the RF sections of the  MAX1471 to  power  up  and  stabilize  before ASK  or FSK data is received. t RF begins counting once t CPU  has expired. t RF is a 16-bit timer, configured through registers 0x7 (upper byte) and 0x8 (lower byte). Table 5 summarize the configuration of t RF timer. The data written to the t RF register (0x7 and 0x8) is multiplied by 120µs to give the total t RF time.

To configure the RF timer register, click on the RF Settle Timer text box, set the appropriate timer value, and click the Set button.

## CPU Recovery Timer

The CPU Recovery Timer is used to delay the power-up of  the  MAX1471,  thereby  providing  extra  power  saving and giving a CPU the time required to complete its own power-on  sequence.  t CPU  is  an  8-bit  timer,  configured through register 0x6. Table 6 summarize the configuration of  the  t CPU timer.  The  data  written  to  the  t CPU register (0x6) is multiplied by 120µs to give the total t CPU time.

Figure 21. RF Settle Timer Configuration

<!-- image -->

Evaluates: MAX1471

To  configure  the  CPU  timer  register,  click  on  the CPU Recovery Timer text box, set the appropriate timer value, and click the Set button.

## Tool History Section

This  portion  of  the  GUI  contains  a  Log  File  text  block, which is used to record activity within the GUI.

## Table 5. RF-Timer Configuration

| TIME BASE (1 LSB)   | MIN t RF REG 0x7 = 0x00 REG 0x8 = 0x01   | MAX t RF REG 0x7 = 0xFF REG 0x8 = 0xFF   |
|---------------------|------------------------------------------|------------------------------------------|
| 120µs               | 120µs                                    | 7.86s                                    |

## Table 6. CPU-Timer Configuration

Figure 22. RF Settle Timer Configuration

| TIME BASE (1 LSB)   | MIN t CPU REG 0x6 = 0X01   | MAX t CPU REG 0x6 = 0XFF   |
|---------------------|----------------------------|----------------------------|
| 120µs               | 120µs                      | 30.72ms                    |

<!-- image -->

Figure 23. Tool History

<!-- image -->

│

## MAX1471 Evaluation Kit

## Log File

For every set, connection effort, or register programming action,  the  GUI  activity  is  logged  in  this  text  block.  The user can add notes and make edits to the content of the Log File text block.

Clicking on the Clear Log button deletes the contents in the text block.

Evaluates: MAX1471

Clicking on the Save Log button opens a save as explorer window and the user prompts to save a .txt file.

## Direct Register Access Section

The GUI software allows for direct access to all the available  register  when  interfacing  with  the  MAX1471  SPI mode.

Figure 24. Register Interface

<!-- image -->

│

## MAX1471 Evaluation Kit

## Register List

On  the  left-hand  side  of  the  register  interface  section is  a  list  of  the  device's  internal  registers.    Each  register address/name (e.g. 00 PWR\_CFG) acts as an active con -trol, and by clicking on an individual register, the contents are presented in the Register Value section.

## Register Value

The  right-hand  side  of  the  register  interface  section displays  the  content  of  the  selected  device  register.  At the top of the block, a header displays the name of the selected register (e.g. PWR\_CFG), the Index or address of  the  register  in  both  decimal  (0d)  and  hexadecimal (0000h) form.

The body of this section shows a table with the names of the individual bits for the selected 8b register along with the current value programmed into each bit or bit group.

The remaining portion of the body shows a table with the bit indexes, the type of register (write/read), the name of the bit or bit group, the reset value, and a description of the bit or bit group.

## Read and Write Registers

Most of the registers in the MAX1471 are both readable and  writable.  The  read-only  register  is  STATUS  (0x09). Writing values to a register can be accomplished by selecting the register of interest, typing a Hex or Dec value into the Value text box, and clicking on the Write Register X button (where X is the decimal address of the register).

## Ordering Information

| PART             | TYPE                         |
|------------------|------------------------------|
| MAX1471EVKIT-315 | MAX1471EVKIT tuned to 315MHz |
| MAX1471EVKIT-433 | MAX1471EVKIT tuned to 433MHz |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE               |
|----------------------------------------|--------------|-----------------------|
| YXC Crystal                            | -            | www.yxcxtal.com       |
| Johnson Components/Cinch               | -            | www.belfuse.com/cinch |
| Keystone                               | 800-221-5510 | www.keyelco.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata.com        |
| Panasonic                              | -            | -                     |
| Sullins                                | 760-744-0125 | www.sullinscorp.com   |
| Vishay Dale                            | 800-433-5700 | www.vishay.com        |

Note: Indicate that you are using the MAX1471 when contacting these component suppliers.

Reading the register content is similar: select the register of interest and click on the Read Register X button.

## Register Bit Field

Individual bits can be programmed without having to enter the full value of the register.  To program a bit,  first select the register of interest (CFG, 0x01 for example), next click on  the  bit  to  be  changed  (CFG[3]  as  an  example),  the new value automatically reflects in the Value text box and writes to the device.

## Miscellaneous Software Information

The tool bar along the top of the GUI window provides a couple of options to the user.

## File and Help Menu

Selecting File  →  Exit from  the  tool  bar  closes  the  GUI program.  This has the same effect as clicking the X button in the upper-right corner of the GUI software.

Selecting Help → ICs  shows  the  list  of  MAXIM's  ISM products supported by the GUI. Click the particular part number for the detailed product information.

Selecting Help → About  from  the  tool  bar  displays  the splash screen. This window shows the name of the soft -ware,  the  revision  number,  a  copyright  notice,  a  link  to the Maxim website, a link to the support website, and a checkbox to enable or disable the splash screen during startup. Click the OK button to close the About window.

## .xml File

The register descriptions for the MAX1471 GUI is available in an .xml file which is stored with the executable in the  application  directory.  The  default  file  loaded  during initialization of the GUI is MAX1471\_Registers.XML.  This file can be edited as needed to adjust the names of fields, provide simple indicators to the GUI user, or allow for flexible updates to the GUI interface in the future.

│

## Appendix I-Detailed Software, Firmware, and Driver Installation Procedures

## Download the MAX1471EVKIT Software Package

This software and firmware are available from the www.maximintegrated.com website.

- 1) Login to the MyMaxim account on the website.
- 2) Click on the magnifying glass and search for the MAX1471 or similar part.

<!-- image -->

<!-- image -->

│

## MAX1471 Evaluation Kit

- 3) Click on the Design Resources link for the device or the EV kit or click on the Design Resources tab on the product web page.
- 4) Click on the appropriate software link.

<!-- image -->

<!-- image -->

│

Evaluates: MAX1471

- 5) Click the file link on the software landing page to download the MAX1471 EV kit package.
- 6) Review the Maxim software license agreement (SLA) and accept the terms by clicking on the Accept button.
- 7) Save the EV kit distribution package to the desktop or other accessible location for later install.

<!-- image -->

<!-- image -->

│

## Install the MAX1471EVKIT GUI Software

This  software  and  firmware  are  available  from  the www.maximintegrated.com website.  See  the Download  the MAX1471EVKIT Software Package section above for information on obtaining the latest firmware from Maxim.

This process takes less than 10 minutes after downloading the software, firmware, and driver package.

- 1) Download the ISMRadioGUISetup.msi to the PC.
- 2) Double-click the ISMRadioGUISetup.msi setup file and follow setup wizard prompts.
- a) Click Next

<!-- image -->

│

Evaluates: MAX1471

- b) Use the default Destination Folder and click Next .
- c) Install the software by clicking the Install button.

<!-- image -->

<!-- image -->

- d) Click Finish when the setup process is complete.

<!-- image -->

## Program the MAX32630FTHR Board with the MAX1471 Firmware

This  software  and  firmware  are  available  from  the www.maximintegrated.com website.  See  the Download  the MAX1471EVKIT Software Package section above for information on obtaining the latest firmware from Maxim.

- 1) Connect the MAX32630FTHR to the MAX32625PICO.
- a) Use the fine pitch 10pin ribbon cable to connect the boards from the SWD (J3) header on the MAX32625PICO to J4 on the MAX32630FTHR.

MAX32625PICO DAPLINK

<!-- image -->

Evaluates: MAX1471

│

## MAX1471 Evaluation Kit

- 2) Connect the MAX32630FTHR to a power source.
- a) Use a micro-B USB cable to connect the MAX32630FTHR board to a suitable power source (no USB connectivity is required).  [The black USB cable in the photos.]  Alternatively, power the board from a charged battery and turn it on by pressing the power/reset button next to the battery connector. The board turns on auto -matically when powered from the USB supply.
- b) The status LED on the FTHR board is lit a steady red.
- 3) Connect the MAX32625PICO to a PC.
- a) Use a micro-B USB cable to connect the MAX32625PICO to a PC, through the USB connec -tor. [The white USB cable in the photos.]
- b) The status LED on the DAPLINK board blinks red when connecting.
- c) After a few seconds of activity, the PC recognizes the DAPLINK as a standard USB drive.
- 4) Drag and drop or save the ISM\_Radio\_fw.bin pro -gram binary to the Mbed or DAPLINK USB Drive.
- a)  The FTHR board LED shuts off and the LED on the MAX32625PICO slowly flashes red as the FTHR board is being programmed.
- b) Once the programming is complete, the MAX -32625PICO USB drive disconnects from the PC and reconnects as a USB drive again.
- c) If the programming was successful, the contents of the MAX32625PICO USB drive includes a DETAILS.TXT file.  If an ERROR.TXT file exists on the drive, check that the FTHR board had power during the programming process and repeat steps 3 and 4.
- 5) To ready the FTHR board for use, disconnect the MAX32625PICO board (ribbon cable) and press the Reset button on the FTHR board or disconnect the FTHR board from the USB power supply.
- a) When the Reset Button is pressed, the microcontroller restarts and the newly programmed application begins to run, or disconnects and reconnects the USB cable if using a PC for power.

Windows 7/10 Example

<!-- image -->

<!-- image -->

## Evaluates: MAX1471

The latest information and these firmware update instructions  can  be  found  on  the  MAX32630FTHR  board Mbed web site: https://os.mbed.com/platforms/ MAX32630FTHR/ or  by  visiting  the  Mbed  home  page ( https://www.mbed.com/ ) and searching for the MAX32630FTHR.

If you do not have a Mbed account, choose Signup, and create the Mbed account. Otherwise, log in with your nor -mal username and password. This gives an access to the website, tools, libraries, and documentation.

From: https://os.mbed.com/teams/MaximIntegrated/ wiki/MAX32625PICO-Firmware-Updates note  that  the MAX32625PICO hardware supports multiple Mbed plat -forms, and the firmware needs to match the platform you that are using to enable all the features. The virtual serial port  and  CMSIS-DAP  debug  adapter  is  universal,  but the  drag-and-drop  programming  must  match  the  target platform being programmed. To update the firmware, you need  to  put  the  board  in  maintenance  mode  and  copy the  new firmware image to the board. To put the board in maintenance mode, you need to hold the button while the board is being connected to the computer at the HDK connector.  This  activates  maintenance  mode,  and  the board appears to the computer as a thumb drive named MAINTENANCE. Drag and drop the new image onto the MAINTENANCE  drive,  and  the  board  installs  the  new firmware. When the update is complete, the disk discon -nects and reappear as a thumb drive named DAPLINK. There are links to the firmware images below.

│

## MAX1471 Evaluation Kit

Note: The board can be sensitive to excess loading on the crystal, which could prevent it from entering maintenance mode. Hold the board by the edges when entering main -tenance mode. It can be easier to hold the button while inserting the USB cable at the computer end, rather than trying to insert the cable into the micro USB connector.

Load the matching HDK image for the platform that pro -grams  for  drag-and-drop  programming  to  work.  For  the MAX32630FTHR DAPLINK image:

[https://os.mbed.com/media/uploads/switches/ max32620\_daplink\_max32630fthr.bin](https://os.mbed.com/media/uploads/switches/max32620_daplink_max32630fthr.bin)

## Update the MAX32630FTHR Board Driver

The required driver is available from the www.maximintegrated.com website. See the Download the MAX1471EVKIT Software Package section above for information on obtaining the latest driver from Maxim.

- 1) Connect the MAX32630FTHR to the PCs USB port.
- 2) In Device Manager , right click Other devices → CDC Device or mbed Composite Device .
- 3) Click the Update Driver Software then select Browse my computer for driver software .
- 4) Select the Let me pick from a list of available drivers on my computer .

<!-- image -->

Evaluates: MAX1471

<!-- image -->

<!-- image -->

│

## MAX1471 Evaluation Kit

- 5) On a Windows 10 operating system, click the Have Disk… button.
- 6) Browse the path of the driver folder and for Windows 10, click the OK button.
- 7) Click the Next button.
- 8) Ignore the warnings and click Install …

Windows 10: Have Disk… button

<!-- image -->

Windows 10: browse to the path and click OK

<!-- image -->

<!-- image -->

Windows 10 unverified publisher warning

<!-- image -->

│

## Evaluates: MAX1471

## Appendix II-Hardware Modifications

## PMOD Header Interface

The MAX1471 EV kit provides a PMOD-compatible header footprint providing yet another built-in interface to the receiver. The H3 connector can be populated with a 6-pin, 100mil, right-angle header such as a SAMTEC TSW-106-25-T-S-RA, allowing direct connections to the CSB, DIO, SCLK, Ground, and VDD lines.

The PMOD interface can be used in combination with the Maxim MAX32600MBED kit and the MAXREFDES72# Arduino Uno R3 to PMOD shield adaptor.  When using the PMOD interface to supply the MAX1471 EV kit with power, make sure to connect the J4 jumper between pins 2-3.

Figure A2-1. MAX1471EV Kit PMOD Interface

<!-- image -->

## Appendix III-Pinout Sheets MAX1471 EV Kit

<!-- image -->

│

Evaluates: MAX1471

## MAX32630FTHR

Arm Cortex-M4 processor with FPU rapid development platform.

<!-- image -->

│

Evaluates: MAX1471

## MAX1471 EV Kit Bill of Materials

|   ITEM | REF_DES                                  | DNI/DNP   |   QTY | MFG PART #                                                                                                      | MANUFACTURER                                               | VALUE          | DESCRIPTION                                                                                                                                                    |
|--------|------------------------------------------|-----------|-------|-----------------------------------------------------------------------------------------------------------------|------------------------------------------------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1 | ADATA                                    | -         |     1 | 5116 KEYSTONE                                                                                                   | 5116 KEYSTONE                                              | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; GREEN; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                             |
|      2 | C1, C2, C14, C15, C19, C20, C23, C29-C33 | -         |    12 | C0402C103K5RAC; GRM155R71H103KA88; C1005X7R1H103K050BE; CL05B103KB5NNN                                          | KEMET;MURATA;TDK; SAMSUNG ELECTRONIC                       | 0.01UF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.01UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                    |
|      3 | C3                                       | -         |     1 | C0402C0G500-151JNP; GCM1555C1H151JA16                                                                           | VENKEL LTD.;MURATA                                         | 150PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 150PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                      |
|      4 | C4                                       | -         |     1 | C0402C331J5GAC; GRM1555C1H331JA01                                                                               | KEMET;MURATA                                               | 330PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 330PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                      |
|      5 | C5, C27                                  | -         |     2 | GRM155R71C473KA01                                                                                               | MURATA                                                     | 0.047UF        | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.047UF; 16V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                   |
|      6 | C6, C26                                  | -         |     2 | CGA2B3X7R1H104K050BB; C1005X7R1H104K050BB; GRM155R71H104KE14; GCM155R71H104KE02; C1005X7R1H104K050BE            | TDK;TDK;MURATA; MURATA;TDK                                 | 0.1UF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 0.1UF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                     |
|      7 | C7, C8, C11                              | -         |     3 | C0402C101J5GAC; NMC0402NPO101J; CC0402JRNPO9BN101; GRM1555C1H101JA01; C1005C0G1H101J050BA; CGA2B2C0G1H101J050BA | KEMET; NIC COMPONENTS CORP.; YAGEO PHICOMP; MURATA;TDK;TDK | 100PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 100PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                      |
|      8 | C9                                       | -         |     1 | GJM1555C1H1R0BB01                                                                                               | MURATA                                                     | 1PF            | CAP; SMT (0402); 1PF; +/-0.1PF; 50V; C0G; CERAMIC CHIP                                                                                                         |
|      9 | C10                                      | -         |     1 | GRM1555C1H221FA01                                                                                               | MURATA                                                     | 220PF          | CAP; SMT (0402); 220PF; 1%; 50V; C0G; CERAMIC CHIP                                                                                                             |
|     10 | C12                                      | -         |     1 | C0402C152K5RAC; GRM155R71H152KA01                                                                               | KEMET;MURATA                                               | 1500PF         | CAPACITOR; SMT (0402); CERAMIC CHIP; 1500PF; 50V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                                                    |
|     11 | C21                                      | -         |     1 | C0402C0G500-560JNE; CC0402JRNPO9BN560; GCM1555C1H560JA16                                                        | VENKEL LTD; YAGEO PHICOMP; MURATA                          | 56PF           | CAPACITOR; SMT (0402); CERAMIC CHIP; 56PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                       |
|     12 | C22                                      | -         |     1 | C0402C121J5GAC; GCM1555C1H121JA16                                                                               | KEMET;MURATA                                               | 120PF          | CAPACITOR; SMT (0402); CERAMIC CHIP; 120PF; 50V; TOL=5%; TG=-55 DEGC TO +125 DEGC; TC=C0G                                                                      |
|     13 | FDATA                                    | -         |     1 | 5004                                                                                                            | KEYSTONE                                                   | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; YELLOW; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                            |
|     14 | GND                                      | -         |     1 | 5011                                                                                                            | KEYSTONE                                                   | N/A            | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                                        |
|     15 | GND1                                     | -         |     1 | 5001                                                                                                            | KEYSTONE                                                   | N/A            | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; CONNECTOR; MALE; THROUGH HOLE; PRPC SERIES; |
|     16 | H1                                       | -         |     1 | PRPC016SFAN-RC                                                                                                  | SULLINS ELECTRONICS CORP                                   | PRPC016SFAN-RC | STRAIGHT; 16PINS                                                                                                                                               |
|     17 | H2                                       | -         |     1 | PRPC012SFAN-RC                                                                                                  | SULLINS ELECTRONICS CORP                                   | PRPC012SFAN-RC | CONNECTOR; MALE; THROUGH HOLE; PRPC SERIES; STRAIGHT; 12PINS                                                                                                   |
|     19 | L1                                       | -         |     1 | LQW18AN56NJ00                                                                                                   | MURATA                                                     | 56NH           | INDUCTOR; SMT (0603); WIREWOUND; 56NH; 5%; 0.36A                                                                                                               |
|     20 | L2                                       | -         |     1 | LQW15AN16NG00                                                                                                   | MURATA                                                     | 16NH           | INDUCTOR; SMT (0402); WIREWOUND CHIP; 16NH; TOL=+/-2%; 0.37A                                                                                                   |
|        | R1, R2, R6, R7                           | -         |     4 | CRCW0402100KFK;                                                                                                 | VISHAY;YAGEO                                               | 100K           | RESISTOR; 0402; 100K; 1%; 100PPM; 0.0625W; THICK FILM                                                                                                          |
|     21 |                                          |           |       | RC0402FR-07100KL                                                                                                |                                                            |                |                                                                                                                                                                |
|     22 | R3, R8                                   | -         |     2 | PNM0402E2502BS                                                                                                  | VISHAY DALE                                                | 25K            | RESISTOR; 0402; 25K OHM; 0.1%; 25PPM; 0.05W; THIN FILM                                                                                                         |
|     23 | R4, R9, R11, R12, R14, R16, R17, R19     | -         |     8 | RC0402JR-070RL; CR0402-16W-000RJT                                                                               | YAGEO PHYCOMP; VENKEL LTD.                                 |                | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                                                                                        |
|     24 | RF_IN                                    | -         |     1 | 142-0701-851                                                                                                    | JOHNSON COMPONENTS                                         | 142-0701-851   | CONNECTOR; END LAUNCH JACK RECEPTACLE; BOARDMOUNT; STRAIGHT THROUGH; 2PINS;                                                                                    |
|     25 | SU1                                      | -         |     1 | STC02SYAN                                                                                                       | SULLINS ELECTRONICS CORP                                   | STC02SYAN      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.256IN; BLACK; INSULATION=PBT CONTACT=PHOSPHOR BRONZE; COPPER PLATED TIN OVERALL                                        |

## MAX1471 EV Kit Bill of Materials (continued)

| ITEM   | REF_DES           | DNI/DNP   |   QTY | MFG PART #                        | MANUFACTURER                       | VALUE             | DESCRIPTION                                                                                           |
|--------|-------------------|-----------|-------|-----------------------------------|------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------|
| 26     | U1                | -         |     1 | MAX1471ATJ+                       | MAXIM                              | MAX1471ATJ+       | IC; RECV; 315MHZ/434MHZ LOW-POWER, 3V/5V ASK/FSK SUPERHETERODYNE RECEIVER; QFN32-EP 5X5               |
| 27     | VDD               | -         |     1 | 5010                              | KEYSTONE                           | N/A               | TEST POINT; PIN DIA=0.125IN; TOTAL LENGTH=0.445IN; BOARD HOLE=0.063IN; RED; PHOSPHOR BRONZE WIRE SIL; |
| 28     | Y1                | -         |     1 | X503213225625MED4SI               | YXC                                | 13.225625MHZ      | EVKIT PART -CRYSTAL; SMT; 3PF; 13.225625MHZ; +/-20PPM;                                                |
| 29     | Y2                | -         |     1 | SFECF10M7EA00                     | MURATA                             | SFECF10M7EA00     | FILTER; BNDPS; SMT; 10.7MHZ; 3DB BANDWIDTH=330KHZ                                                     |
| 30     | PCB               | -         |     1 | MAX1471433MHZ                     | MAXIM                              | PCB               | PCB:MAX1471433MHZ                                                                                     |
| 31     | J1                | DNI       |     1 | PPPC161LFBN-RC                    | SULLINS ELECTRONICS CORP           | PPPC161LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; LFB SERIES; 2.54MM CONTACT CENTER; STRAIGHT; 16PINS                  |
| 32     | J2                | DNI       |     1 | PPPC121LFBN-RC                    | SULLINS ELECTRONICS CORP           | PPPC121LFBN-RC    | CONNECTOR; FEMALE; THROUGH HOLE; HEADER FEMALE; STRAIGHT; 12PINS                                      |
| 33     | U2                | DNI       |     1 | MAX32630FTHR#                     | MAXIM                              | MAX32620FTHR#     | EVKIT PART - MODULE; BOARD ASSEMBLY; THROUGH HOLE; RAPID DEVELOPMENT PLATFORM;                        |
| 34     | H3                | DNP       |     0 | TSW-106-25-T-S-RA                 | SAMTEC                             | TSW-106-25-T-S-RA | CONNECTOR; MALE; THROUGH HOLE; 0.025IN SQ POST HEADER; RIGHT ANGLE; 6PINS                             |
| 35     | R5, R10, R15, R18 | DNP       |     0 | RC0402JR-070RL; CR0402-16W-000RJT | YAGEO PHYCOMP; VENKEL LTD.         |                   | 0 RESISTOR; 0402; 0 OHM; 5%; JUMPER; 0.063W; THICK FILM                                               |
| 36     | R13               | DNP       |     0 | CRCW0402200KFK; RF73H1ELTP2003    | VISHAY DALE; KOA SPEER ELECTRONICS | 200K              | RESISTOR; 0402; 200K; 1%; 100PPM; 0.0625W; THICK FILM                                                 |
| 37     | C16, C17          | DNP       |     0 | N/A                               | N/A                                | OPEN              | PACKAGE OUTLINE 0402 NON-POLAR CAPACITOR                                                              |
| TOTAL  |                   |           |    59 |                                   |                                    |                   |                                                                                                       |

## MAX1471 EV Kit Schematics

<!-- image -->

## MAX1471 EV Kit Schematics (continued)

<!-- image -->

## MAX1471 EV Kit PCB Layouts

MAX1471 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

MAX1471 EV Kit PCB Layout-Top

<!-- image -->

MAX1471 EV Kit PCB Layout-Bottom

<!-- image -->

MAX1471 EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX1471 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                             | PAGES CHANGED   |
|-------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 9/16            | Initial release                                                                                                                         | -               |
|                 1 | 1/19            | Adjusted text to correlate with component corrections, Corrected schematic component value to match the BOM table: C3, C4, C21, and C22 | 3, 11           |
|                 2 | 10/20           | Updated EV kit with a new hardware description                                                                                          | 1-33            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https:/www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

Evaluates: MAX1471