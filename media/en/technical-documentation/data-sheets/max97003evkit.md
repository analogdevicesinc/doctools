<!-- lastmod 2022-08-03 -->
<!-- image -->

## General Description

The MAX97003 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  evaluates  the  MAX97003  audio subsystem. The device features a mono Class D speaker amplifier and a stereo Class H DirectDrive M headphone amplifier. The EV kit features an on-board microcontroller for  communicating with the I 2 C interface of the device. Pads are provided for accessing the analog inputs and amplifier outputs.

The  EV  kit  requires  a  2.7V  to  5.5V  power  supply.  The on-board LDO generates an additional 1.8V supply from the  USB 5V supply. The EV kit delivers 1W into an 8 I speaker, and 32mW/channel into a 32 I headphone.

Windows XP M -, Windows Vista M -, and Windows M 7-compatible  EV  kit  software  is  provided  to  facilitate  configuration. The  EV  kit  software  controls  the  on-board  microcontroller over USB, which generates I 2 C commands.

- S 2.7V to 5.5V Single-Supply Operation
- S Proven Audio PCB Layout
- S On-Board USB Interface Circuit Generates I 2 C-Compatible Signals
- S PCB Pads for User-Supplied I 2 C-Compatible Signals
- S Surface-Mount Components
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

Figure 1. MAX97003 Evaluation Kit Simplified Block Diagram

<!-- image -->

DirectDrive is a registered trademark of Maxim Integrated Products, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4 or visit Maxim's website at www.maxim-ic.com.

## MAX97003 Evaluation Kit

## Evaluates: MAX97003

## Features

| DESIGNATION                      |   QTY | DESCRIPTION                                                              |
|----------------------------------|-------|--------------------------------------------------------------------------|
| C1-C8, C114, C123                |    10 | 1 F F Q 10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J105K    |
| C9, C10, C101, C103-C110, C121   |    12 | 0.1 F F Q 10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J104K  |
| C11, C12, C102, C113, C115, C122 |     6 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J106M   |
| C13-C17                          |     5 | 0.22 F F Q 10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J224K |
| C18-C25, C117                    |     0 | Not installed, capacitors (0402)                                         |
| C111, C112                       |     2 | 10pF Q 5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H100J       |
| C116                             |     1 | 2.2 F F Q 20%, 6.3V X5R ceramic capacitor (0402) Murata GRM155R60J225M   |
| C118, C119                       |     2 | 22pF Q 5%, 50V C0G ceramic capacitors (0402) Murata GRM1555C1H220J       |
| C120                             |     1 | 3300pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H332K     |
| C125, C126                       |     2 | 0.01 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C103K  |
| D101                             |     1 | Green LED (0603)                                                         |
| FB101                            |     0 | Not installed, ferrite bead-short (PC trace) (0603)                      |
| HPGND, OUT-                      |     2 | Black multipurpose test points, 63 mil drill size                        |
| HPJK                             |     1 | 3.5mm, 3-position stereo SMT phone jack (non switch)                     |
| JINA1, JINB1                     |     2 | Right-angle, PC-mount, white RCA jacks                                   |
| JINA2, JINB2                     |     2 | Right-angle, PC-mount, red RCA jacks                                     |
| JU1, JU2, JU3                    |     3 | 2-pin headers                                                            |
| JU4                              |     1 | 3-pin header                                                             |
| L1, L2                           |     0 | Not installed, inductors                                                 |

<!-- image -->

## MAX97003 Evaluation Kit

## Evaluates: MAX97003

## Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                     |
|------------------|-------|-----------------------------------------------------------------|
| OUT+, TPHPR      |     2 | Red multipurpose test points, 63-mill drill size                |
| P101             |     1 | -20V, -2.4A p-channel MOSFET (3 SuperSOT) Fairchild FDN304PZ_NL |
| R1-R10, R101     |    11 | 0 I Q 5% resistors (0402)                                       |
| R11, R12         |     2 | 22 I Q 5% resistors (0402)                                      |
| R13, R14, R105   |     3 | 1.5k I Q 5% resistors (0402)                                    |
| R102             |     1 | 220 I Q 5% resistor (0402)                                      |
| R103, R104, R109 |     0 | Not installed, resistors (0402)                                 |
| R106, R107       |     2 | 27 I Q 5% resistors (0402)                                      |
| R108             |     1 | 1k I Q 5% resistor (0402)                                       |
| TPHPL            |     1 | White multipurpose test point, 63-mill drill size               |
| U1               |     1 | Audio subsystem with I 2 C (20 WLP) Maxim MAX97003EWP+          |
| U101             |     1 | 32-bit microcontroller (68 QFN-EP) Maxim MAXQ2000-RAX+          |
| U102             |     0 | Not installed, EEPROM (8 SO)                                    |
| U103             |     1 | UART-to-USB converter (32 TQFP)                                 |
| U104             |     1 | 3.3V, 120mA regulator (5 SC70) Maxim MAX8511EXK33+T             |
| U105             |     1 | 2.5V, 120mA regulator (5 SC70) Maxim MAX8510EXK25+T             |
| U106             |     1 | 1.8V, 300mA regulator (5 SOT23) Maxim MAX8887EZK18+T            |
| USB              |     1 | USB mini-B receptacle                                           |
| Y101             |     1 | 16MHz crystal Hong Kong X'tals SSM16000N1HK188F0-0              |
| Y102             |     1 | 6MHz crystal Hong Kong X'tals SSL60000N1HK188F0-0               |
| -                |     1 | USB high-speed A-to-mini-B cable                                |
| -                |     4 | Shunts                                                          |
| -                |     1 | PCB: MAX97003 EVALUATION KIT                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX97003 Evaluation Kit

## Evaluates: MAX97003

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Hong Kong X'tals Ltd.                  | 852-35112388 | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX97003 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- MAX97003	EV	kit	(USB	cable	included)
- 5V,	1A	DC	power	supply	(PVDD)
- Speaker
- Headphones
- User-supplied Windows	 XP,	 Windows	 Vista,	 or Windows 7 PC with an available USB port

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Visit http://www.maxim-ic.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, 97003Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.  The  program  files  are  copied  and  icons  are created  in  the  Windows Start  |  Programs|  Maxim EVKIT Software menu.
- 3) Verify that all jumpers are in their default positions, as shown in Table 1.
- 4) Connect the power supply between the PVDD and PGND PCB pads.
- 5) Set the power supply to 4.2V and turn it on.
- 6) Apply  a  stereo  single-ended  audio  signal  to  INA1 and INA2.
- 7) Connect a speaker between the OUT+ and OUT- test points.
- 8) Connect a headphone to HPJK.
- 9) Connect a USB cable between the PC and the MiniUSB  port  on  the  EV  kit.  A New  Hardware  Found window pops up when installing the USB driver for

<!-- image -->

the first time. If a window is not seen that is similar to the one described above after 30s, remove the USB cable from the board and reconnect it. Administrator privileges  are  required  to  install  the  USB  device driver on Windows.

- 10) Follow  the  directions  in  the Found New Hardware window to install the USB device driver. Refer to the USB\_Driver\_Help\_200.PDF document included with the software for additional information.
- 11) Start  the  EV  kit  software  by  opening  its  icon  in  the Start  |  Programs  |  Maxim  EVKITSoftware menu. The EV kit software main window appears, as shown in Figure 2.
- 12) Wait while the software connects to the EV kit. Once the connection is established, the status bar at the bottom displays Hardware: Connected and Device Found.
- 13) Once  the  EV  kit  software  has  initialized,  select  the Control Panel tab.
- 14) Click on the Input A drop-down menu in the Input PreAmp Gain group box and select 0dB .
- 15) Check the INA1 checkbox in the HPL Mixer group box and the INA2 checkbox in the HPR Mixer group box.
- 16) Check  the HPL  Enable and HPR  Enable checkboxes.
- 17) Check the Lock L&amp;R HP Vol checkbox to force the left and right output volume to match.
- 18) Drag  either  horizontal  slider  in the Headphone Amplifiers group box to Max .
- 19) Check the INA1 and INA2 checkboxes in the SPK Mixer group box.
- 20) Check the SPK Enable checkbox.
- 21) Drag the horizontal slider in the Speaker Amplifier group box to Max .
- 22) Check  the Enabled checkbox  in  the MAX97003 Master Controls group box. Audio is output to both the headphone and speaker.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Software

## Graphical User Interface (GUI)

The MAX97003 EV kit software GUI provides a convenient way to test the features of the MAX97003. Figure 2 displays  the  EV  kit  software's  Control  Panel  tab  sheet, while Figure 3 displays the Control Registers tab sheet. Actions  on  either  of  these  two  tabs  generate  I 2 C  commands to update the device's internal memory registers.

## MAX97003 Evaluation Kit

## Evaluates: MAX97003

The EV kit software Control Panel tab sheet divides the EV kit functions into logical blocks. The EV kit software Control Registers tab sheet displays each register's individual bit logic-level status. A data bit in bold indicates a logic-high, while a data bit that is not bold indicates a logic-low. Clicking on the individual data bit toggles the bit and performs a write command. The new command is  shown in the edit box at the right. Alternatively, write commands can be written  to  the  registers  by  typing  a hex value in the edit box and pressing the Enter key on the keyboard.

<!-- image -->

Figure 2. MAX97003 EV Kit Software Main Window (Control Panel Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX97003 Evaluation Kit

## Evaluates: MAX97003

<!-- image -->

Figure 3. MAX97003 EV Kit Software Main Window (Control Registers Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Software Startup

Upon starting the program, the EV kit software automatically searches for the USB interface circuit and then for the IC device address. The EV kit enters the normal operating  mode  when the USB connection is detected and has found the device address. The Enabled checkbox in the Control Panel tab sheet enables the device operation. If the USB connection is not detected, the software prompts the user to retry or enter the demo mode.

## Demo Mode

The EV kit software enters the demo mode when the USB connection is not detected, or by selecting the Options |  Demo Mode menu item in the main window. When in demo  mode,  all  software  communication  to  the  EV  kit circuit is disabled; however, most of the software GUI is functional.  Demo  mode  allows  the  user  to  evaluate  the software without hardware connectivity. If the USB cable is  connected to the EV kit, but power is not applied to PVDD, the  EV  kit  GUI  acts  like  it  is  in  demo  mode.  In such a case, the EV kit is connected to the PC through the USB, and I 2 C commands can be sent to the device. However, without power, the device does not acknowledge the I 2 C commands. When power is applied, press the Reset button to detect the presence of the device.

## Write All/Read All/Reset

The Write All button writes the current settings to all the registers on the GUI. The EV kit software GUI performs I 2 C write commands as changes occur on the GUI. The Read All button changes the GUI settings to match the device  register  settings.  To  change  settings  one  time, enter  demo  mode  by  selecting  the Options  |  Demo Mode menu item, change the GUI to the required settings,  exit  demo  mode  by  selecting Options  |  Demo Mode,  and  then  press  the Write  All button.  To  obtain the device settings, press the Read All button and the GUI  is  updated  to  reflect  the  current  register  states  of the device. In addition, the EV kit software can be set to automatically read back the device registers every 1s by selecting the Options | Auto I2C Read menu item. The Reset button clears the EV kit software GUI and reprograms the device to the default values.

## I 2 C Interface

The  EV  kit  software Interface group  box  displays  the device's I2C  Device  Address , Register Address ,  and the last Data Sent . The MAX97003's I 2 C device address is internally set to 0x9A.

## MAX97003 Master Controls

The EV kit software MAX97003 Master Controls group box provides checkboxes to control the device's Enabled , Enhanced Volume Smoothing , Volume Slewing ,  and Zero Crossing Detection .

<!-- image -->

## MAX97003 Evaluation Kit Evaluates: MAX97003

## Input Configuration/Input PreAmp Gain

The Input  Configuration group  box  configures  the device's  input  channels A and B for Stereo (singleended) or Mono (differential).  The Input PreAmp Gain group box selects the gain values for the input channels. The  input  preamp  gains  range  from  -3dB  to  +12dB  in 1.5dB steps.

## Headphone Amplifiers

The Headphone  Amplifiers group  box  configures  the device's  headphone  power  supply,  headphone  output gain,  input  channel  selection,  enables,  mutes,  volume controls,  and  expander  settings.  The Fixed  Voltage Charge Pump Mode checkbox selects between Class H and fixed supply mode to power the headphones. When the Fixed  Voltage  Charge  Pump  Mode checkbox  is checked, the Charge Pump Output Select radio group box  is  enabled,  allowing  HPVDD/HPVSS  to  be  set  to either Q 1.8V or Q 0.9V. The HP Output Gain ranges from 0dB to 6dB in 2dB steps. The HPL Mixer and HPR Mixer group boxes select the input channels to the headphone amplifiers.  There  are  four  input  channels  ( INA1 , INA2 , INB1 , and INB2 ) that can be connected into each headphone amplifier. The HP Expander group box configures the HP Expansion Ratio , HP Expander Attack  Time , and HP Expander Threshold .  The Lock  L&amp;R  HP  Vol checkbox locks the Right Headphone Volume track bar/ edit  box to the Left Headphone Volume track  bar/edit box when it is checked.

## Speaker Amplifier

The Speaker  Amplifier group  box  configures  the device's  speaker  output  modulation,  output  gain,  input channel selection, enable, mute, volume control, expander, dynamic range compressor, distortion limiter settings, and  the  speaker  low-power  mode.  The Fixed  Class  D Freq  Enable checkbox  selects  between  spread-spectrum and fixed-frequency modulation for the speaker output. The SPK Output Gain ranges from +12dB to +24dB in 4dB steps. The SPK Mixer group box selects the input channels to the speaker amplifier.  There  are  four  input channels ( INA1 , INA2 , INB1 , and INB2 ) that can be connected  into  the  speaker  amplifier.  The SPK Expander group box configures the SPK Expansion Ratio , SPK Expander Attack Time , and SPK Expander Threshold . The Dynamic  Range  Compressor (DRC)  group  box configures  the DRC  Enable  and  Compression  Ratio , DRC Attack Time Constant , DRC Release Time ,  and DRC  Compression  Threshold  Level .  The Distortion Limiter group box is enabled when the Zero Crossing Detection checkbox is unchecked. The Speaker LowPower Mode group box sets the SPK Low-Power Mode Volume  Threshold and  selects  the  Class  D  output mode. The Class D Output is selectable between Active continuously or Active if the speaker volume setting is above SLPTH (speaker low-power threshold).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Simple I 2 C Commands

There are three methods for communicating with the EV kit,  through  the Control  Panel tab  sheet,  the Control Registers tab sheet, or by using low-level SMBus commands available  in  the Advanced User Interface win-

## MAX97003 Evaluation Kit Evaluates: MAX97003

dow (Figure 4).  Select Options |  Interface  (Advanced Users) to display the Advanced User Interface window, which allows  I 2 C  operations  such  as SMBusReadByte and SMBusWriteByte .

<!-- image -->

Figure 4. MAX97003 EV Kit Software (Advanced User Interface)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Detailed Description of Hardware

The  MAX97003  EV  kit  evaluates  the  MAX97003  Class D audio amplifier and stereo DirectDrive Class H headphone  amplifier,  which  communicates  over  I 2 C.  The EV  kit  demonstrates  the  device  features  such  as  userdefined  input  configuration,  input  gain,  input  source, output enable, and volume control. The EV kit uses the device in a 20-bump (2.4mm x 2mm) wafer-level package (WLP) on a proven six-layer PCB design. The EV kit operates from a 2.7V to 5.5V and 1.8V DC power supply. The EV kit delivers 1W into an 8 I speaker and 32mW/ channel into a 32 I headphone.

Table 1. Default Shunt Positions (Ju1-Ju4)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                 |
|----------|------------------|---------------------------------------------------------------------------------------------|
| JU1      | Closed*          | On-board I 2 C. Connects the on-board SCL signal to the SCL PCB pad.                        |
| JU1      | Open             | User-supplied I 2 C. Open the jumper and apply the SCL signal to the SCL PCB pad.           |
| JU2      | Closed*          | On-board I 2 C. Connects the on-board SDA signal to the SDA PCB pad.                        |
| JU2      | Open             | User-supplied I 2 C. Open the jumper and apply the SDA signal to the SDA PCB pad.           |
| JU3      | Closed*          | On-board VDD supply. Connects an on-board LDO, outputting 1.8V to the VDD PCB pad.          |
| JU3      | Open             | External VDD supply. Externally supply VDD with 1.8V.                                       |
| JU4      | 1-2*             | On-board I 2 C. Connects the on-board I 2 C pullup resistors to 3.3V.                       |
| JU4      | 2-3              | User-supplied I 2 C. Connect the external I 2 C master's logic voltage to the VI2C PCB pad. |

<!-- image -->

## MAX97003 Evaluation Kit Evaluates: MAX97003

## Filterless Output

The  EV  kit's  filterless  outputs  (OUT+,  OUT-)  can  be connected directly to a speaker load without any filtering. Use the OUT+ and OUT- test points to connect the speaker directly  to  the  device  outputs  using  a  twistedpair cable. Do not install inductors L1 and L2 for maximum efficiency.

## Filtered Output

Audio  analyzers  typically  cannot  accept  pulse-width modulated (PWM) signals at their inputs. Therefore, the EV kit includes a pair of lowpass filters at the output to ease evaluation. To use the filtering output pads (FOUT+, FOUT-), install inductors L1 and L2 (provided with the EV kit),  connect the load between FOUT+ and FOUT-, and connect  the  filtered  output  to  the  audio  analyzer.  The lowpass filters at the speaker outputs are optimized for an 8 I speaker.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX97003 Evaluation Kit

## Evaluates: MAX97003

<!-- image -->

Figure 5a. MAX97003 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX97003 Evaluation Kit

## Evaluates: MAX97003

<!-- image -->

Figure 5b. MAX97003 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 6. MAX97003 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 7. MAX97003 EV Kit PC Board Layout-Component Side

<!-- image -->

## Evalutes: MAX97003

Figure 8. MAX97003 EV Kit PCB Layout-GND Layer 2

<!-- image -->

Figure 9. MAX97003 EV Kit PCB Layout-GND Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX97003 Evalution Kit

Figure 10. MAX97003 EV Kit PCB Layout-PWR Layer 4

<!-- image -->

## Evalutes: MAX97003

Figure 11. MAX97003 EV Kit PCB Layout-GND Layer 5

<!-- image -->

Figure 12. MAX97003 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX97003 Evalution Kit

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX97003EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX97003 Evaluation Kit Evaluates: MAX97003

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.