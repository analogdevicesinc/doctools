<!-- lastmod 2022-08-03 -->
## MAX11410 EMC Evaluation Board

## General Description

Analog-to-digital  converters  (ADCs)  provide  accurate measurement and conversion of signals to digital format for sensing in many electronic applications such as industrial,  medical,  and  sensor  systems. The MAX11410 is a high-speed, 24-bit Delta-Sigma ADC.

The  MAX11410  EMC  evaluation  board  is  a  test  platform  for  rapid  prototyping  and  EMC  evaluation  of  the MAX11410  (a  24-bit,  1.9ksps,  Delta-Sigma  ADC).  The MAX11410 EMC EV kit includes an Arduino™-compatible microcontroller system, which performs stand-alone data logging. It also comes with schematics, design files, and firmware for immediate use and forking to future projects.

The board comes with firmware already loaded (source code is provided). The board's firmware can be customized and loaded using the standard Arduino tools.

The board comes with MAX11410ATI+ installed.

Ordering Information appears at end of data sheet.

Arduino is a trademark of Arduino AG.

Evaluates: MAX11410

## Quick Start

## Required Equipment

- MAX11410EMCEVKIT# EMC evaluation kit
- Computer with USB and web access
- A serial terminal emulator software such as teraterm, realterm, picocom, minicom, or equivalent

The procedures below describe the quick start process

## MAX11410\_EMC DataLogger Firmware

The 'DataLogger' program is an interactive, menu-driven test program that is controlled through a serial communications port, using a terminal emulator, supporting quick discovery,  and  evaluation  of  device  features  for  testing functionality.

The EMC evaluation board is fully assembled, tested, and is already loaded with the DataLogger Firmware.

The  firmware  uses  a  USB  serial  port  to  communicate. Typing '?' halts data logging and prints a menu of supported  device  commands.  The  data  logging  firmware automatically  configures  the  MAX11410  and  captures data, reporting in a format that can be saved directly to a CSV (comma-spaced-value) table format.

When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers.

<!-- image -->

## MAX11410 EMC Evaluation Board

Use the following steps to verify board operation:

- 1) Connect a USB micro B cable from computer to MAX11410EMCEVKIT USB port. (Windows may require some time to install its device driver.)
- 2) Locate the newly arrived USB serial device COM port, and use a serial terminal emulator (such as teraterm, realterm, picocom, minicom, or equivalent). Baud rate is 115200.
- 3) Connect input voltages to AIN inputs. Note if nothing is connected to the analog inputs, the value can float to an unspecified, arbitrary value.

Use the following steps to reload or upgrade the board's firmware:

- 1) Connect a USB micro B cable from computer to MAX11410EMCEVKIT USB port. (Windows may require some time to install its device driver.)
- 2) [In a web browser, navigate to https://create. arduino.cc/editor/whismanoid/7dc62181-0bb74578-995d-2fa7a8477763/preview and click Add to my Sketchbook .](https://create.arduino.cc/editor/whismanoid/7dc62181-0bb7-4578-995d-2fa7a8477763/preview)
- 3) If this is your first time using Arduino Create online, you may be prompted to install Arduino Create Agent to connect with the hardware. The MAX11410 EMC EV kit hardware is equivalent to an Arduino UNO microcontroller board driving a MAX11410 BOB analog breakout board, with advanced EMC considerations.
- 4) Compile the program with the Upload and Save button.
- 5) Connect input voltages to AIN inputs. Note if nothing is connected to the analog inputs, the value can float to an unspecified, arbitrary value.
- 6) Locate the newly arrived USB serial device COM port, and use a serial terminal emulator (such as teraterm, realterm, picocom, minicom, or equivalent). Baud rate is 115200.
- 7) The program behavior can be changed by modifying the DataLogger\_MAX11410.cpp source code and repeating the compile-build-upload cycle.

Windows is a registered trademark and registered service mark of Microsoft Corp.

## Evaluates: MAX11410

## Capturing Data with a Serial Console

A  serial  terminal  emulator  software  (such  as  teraterm, realterm,  putty,  picocom,  minicom,  or  equivalent)  must be installed to communicate with the example firmware. Various terminal programs connect in various ways and have different user interfaces, but they all share a common set of basic features:

- Connecting to a specific serial port device by name, such as COM4 or /dev/ttyACM0
- Settings such as baud rate 9600, 8 bits/No parity/1 Stop bit, no flow control
- Typing at the keyboard transmits to the firmware through the serial port
- Messages received from the firmware are dis -played on the screen
- A special keyboard command or menu item exits the terminal program

Refer to https://os.mbed.com/handbook/Terminals for more details.

More resources:

- [https://learn.sparkfun.com/tutorials/terminalbasics/tera-term-windows](https://learn.sparkfun.com/tutorials/terminal-basics/tera-term-windows)
- [https://learn.sparkfun.com/tutorials/terminalbasics/real-term-windows](https://learn.sparkfun.com/tutorials/terminal-basics/real-term-windows)
- [https://learn.sparkfun.com/tutorials/terminalbasics/yat---yet-another-terminal-windows](https://learn.sparkfun.com/tutorials/terminal-basics/yat---yet-another-terminal-windows)
- [https://learn.sparkfun.com/tutorials/terminalbasics/coolterm-windows-mac-linux](https://learn.sparkfun.com/tutorials/terminal-basics/coolterm-windows-mac-linux)
- [https://learn.adafruit.com/windows-tools-forthe-electrical-engineer/serial-terminal](https://learn.adafruit.com/windows-tools-for-the-electrical-engineer/serial-terminal)
- [https://www.putty.org/](https://www.putty.org/)

In  Windows™, install  a  terminal  emulator  such  as  teraterm,  realterm,  or  putty.  Find  the  serial  port  name  and COM  port  number  in  Control  Panel  View  devices  and printers. The Mbed board appears as USB Serial Device or  mbed  Serial  Port.  Refer  to https://os.mbed.com/ handbook/Windows-serial-configuration and https:// os.mbed.com/docs/mbed-os/v5.11/tutorials/windowsserial-driver.html for  troubleshooting. Start the terminal emulator and use the menu to connect to the serial port that belongs to the board. Pressing ENTER displays the firmware's banner message (see example session).

## MAX11410 EMC Evaluation Board

Evaluates: MAX11410

In linux, install a terminal emulator such as minicom or picocom. For example, under Debian or Ubuntu linux, use &lt;PRE&gt; sudo apt-get install picocom &lt;/PRE&gt; In linux (Debian), find the serial port name as follows: &lt;PRE&gt; # with the board not connected, get list of tty device names ls -1 /dev/tty* &gt;dev\_tty\_baseline # now connect the device to USB and find the new tty device name (such as /dev/ ttyACM0) ls -1 /dev/tty* | diff dev\_tty\_baseline -&lt;/PRE&gt; The picocom terminal emulator runs from the tty console. The tty device name must be given on the command line when starting picocom. See man picocom for more details. &lt;PRE&gt; picocom /dev/ttyACM0 --baud 9600 &lt;/PRE&gt; Pressing ENTER displays the firmware's banner message (see example session). Pressing CTRL+A and then CTRL+X

exits picocom.

## Example Serial Console Session

The firmware uses a USB serial port to communicate. Typing '?' prints a menu of supported device commands. The data logging firmware automatically configures the MAX11410 and captures data, reporting in a format that can be saved directly to a CSV (comma-spaced-value) table format.

&lt;PRE&gt;

```
MAX11410_EMC MAX11410 Init failed; retry at SPI SCLK frequency 2000000 Hz *SOURCE=0xA *MUX_CTRL1=0xF0 v_filter = 0x34 v_pga = 0x0 v_ctrl = 0x42 'Configuration:','AIN0','Datalog disabled; enable with LS0V or with LS0L' 'Configuration:','AIN1','v_filter = 0x34','v_ctrl = 0x42','v_pga = 0x0' 'Configuration:','AIN2-3_BIP','v_filter = 0x34','v_ctrl = 0x2','v_pga = 0x0' 'Configuration:','AIN3','v_filter = 0x34','v_ctrl = 0x42','v_pga = 0x0' 'Configuration:','AIN4','v_filter = 0x34','v_ctrl = 0x42','v_pga = 0x0'
```

│

```
'Configuration:','AIN5','v_filter = 0x34','v_ctrl = 0x42','v_pga = 0x0' 'Configuration:','AIN6','v_filter = 0x34','v_ctrl = 0x42','v_pga = 0x0' 'Configuration:','AIN7','v_filter = 0x34','v_ctrl = 0x42','v_pga = 0x0' 'Configuration:','AIN8-9_BIP','v_filter = 0x34','v_ctrl = 0x2','v_pga = 0x0' 'Configuration:','AIN9','Datalog disabled; enable with LS9V or with LS9L' 'AIN1_LSB','AIN2-3_BIP_LSB','AIN3_LSB','AIN4_LSB','AIN5_LSB','AIN6_LSB','AIN7_ LSB','AIN8-9_BIP_LSB','PART_ID' 3112223,1010247,2086751,9090510,7215996,1370162,11063736,1731085,'OK' 3507015,1010246,2086725,8002958,6276872,1008816,10862625,1725624,'OK' 3845514,1010238,2086779,7590851,5920568,1020920,10834730,1726029,'OK' 4142733,1010235,2086724,7439439,5784519,1033754,10812599,1728546,'OK' 4405185,1010246,2086764,7385394,5729801,1046211,10793988,1732002,'OK' 4636832,1010244,2086748,7366544,5706573,1056357,10778432,1735561,'OK' 4841783,1010247,2086737,7361883,5694989,1064934,10764894,1739209,'OK' 5023635,1010234,2086721,7361697,5688261,1072067,10753835,1742601,'OK' 5185260,1010236,2086745,7363851,5683377,1077323,10743785,1745910,'OK' 5328768,1010240,2086752,7366025,5677292,1083485,10735863,1749192,'OK' 5456405,1010227,2086734,7368071,5673086,1087691,10728894,1752194,'OK' 5570018,1010239,2086731,7370231,5669784,1091109,10722633,1755070,'OK' 5671544,1010229,2086689,7373237,5665673,1095122,10717952,1757964,'OK' 5761820,1010229,2086722,7375391,5662391,1097343,10713261,1760572,'OK' 5842661,1010220,2086725,7377362,5658708,1099442,10709418,1763248,'OK' 5914518,1010217,2086725,7379517,5657009,1102002,10706664,1765793,'OK' 5979033,1010208,2086740,7382133,5654298,1103514,10703720,1768107,'OK' 6036447,1010208,2086691,7384461,5652048,1104929,10701122,1770278,'OK' 6087645,1010218,2086688,7385687,5649540,1106904,10699815,1772379,'OK' 6133581,1010221,2086718,7387448,5646929,1108034,10697999,1774533,'OK' </PRE>
```

│

## Detailed Description of Hardware

The MAX11410 is a 24-bit, 1.9ksps,  Delta-Sigma ADC. Connect  analog  inputs  to  the  AIN0-AIN9  header  pins. The MAX6126 provides the 2.5V analog reference voltage. The MAX8511 provides a low-dropout 3.3V supply. The  MAX14935  digital  isolator  translates  the  external logic signals in the range of 1.71V to 5.5V for use with the MAX11410's 3.3V supply.  For more information on these products, please visit:

| •   | https://www.maximintegrated.com/max11410   |
|-----|--------------------------------------------|
| •   | https://www.maximintegrated.com/max14935   |
| •   | https://www.maximintegrated.com/max1659    |
| •   | https://www.maximintegrated.com/max256     |
| •   | https://www.maximintegrated.com/max6126    |
| •   | https://www.maximintegrated.com/max8511    |

## Ground Return Paths and EMI Reduction

To minimize both received and emitted EMI, the PCB layout minimizes the loop area of signal and ground returns. To  provide  isolation  between  the  digital  and  sensitive analog circuitry, the microcontroller is on the back of the board while the analog-to-digital converter is on the front of the board.

There are three ground domains: analog ground, digital ground, and USB shield. The analog and digital grounds are  connected  through  R14(4.3MΩ)  and  C10(4700pF), and  the  digital  ground  and  USB  shield  are  connected through R51(4.3MΩ) and C47(4700pF). The 4.3MΩ resis -tor provides a defined single path for DC leakage currents since it is large but still less than typical insulation resistance. Without this R14/R51 resistor, the leakage current would flow through any surface contaminations (such as fingerprints  on  the  board  surface)  despite  the  very  high resistance.  Similarly,  the  C10/C47  capacitors  provide  a safe path for ESD/EMI transient return currents.

## Transorbs for ESD Protection

Transorbs  (bidirectional  Zener  diodes)  such  as  D9  and D10 protect against ESD entering at the connectors, with low-inductance return paths to the ground plane nearest the connector.

## 3V Zener Protection

Inputs are further protected against overvoltage by Zener diode  clamps  such  as  D19/D20  and  associated  510Ω series  resistors  R19,  R20,  R62,  R31. The  input  voltage above 3V but too low to trigger the transorbs is clamped by the Zener diode.

## Overvoltage/Undervoltage Schottky Clamp

Finally,  Schottky  diodes  such  as  D42  and  D43  (dual series-connected  pair  of  Schottky  diodes  in  SOT-23 package)  protect  against  input  voltages  exceeding  the MAX11410's  analog  supply  rails  AVDD  (3V3ISO)  and AGND (analog ground).

The reference inputs REF1P/REF1N and REF2P/REF2N are connected to the 2V5REF reference through 0Ω jump -ers R38/R39 and R40/R41. Optionally, analog input pair A0/A1 can be used as a reference input by connecting 0Ω jumpers at R28 and R29 and using the appropriate register configuration.

## Battery Powered Operation

The  board  supports  battery-powered  operation  to  support  radiated  emissions  testing.  Configure  the  board  for battery-powered operation by removing the 0Ω jumpers from R53, R55, R56, and R57, and then installing a 0Ω jumper at R54. Apply external battery connection at BATT connector  (battery  voltage  must  be  between  5.5V  and 16.5V). Connect isolated 5V serial communications cable at header J2. Note that pin 2 TX output from the datalogger  should  drive  the  remote  board's  RX  receiver  input. These are CMOS/TTL level signals, not RS232 voltage levels.

## USB Powered Operation

As  shipped  from  the  factory,  the  board  supports  USBpowered  operation,  with  data  logging  to  a  standard FTDIchip.com USB comms port with settings of 115200 baud, 8 bits, no parity.

If  the  board  was  previously  modified  to  select  batterypowered  operation,  USB  powered  operation  can  be subsequently restored by disconnecting any battery and external comms, removing the 0Ω jumper from R54, and then replacing the 0Ω jumpers at R53, R55, R56, and R57.

Evaluates: MAX11410

Table 1. Connectors, Jumper Functions, and Configuration Options

| JUMPER   | STATE                | FUNCTION                                                                        |
|----------|----------------------|---------------------------------------------------------------------------------|
| J1       | -                    | USB connector                                                                   |
| J2       | -                    | Header for serial communications (+5V logic level)                              |
| J3       | -                    | Header for firmware loading ATmega328 using external programmer                 |
| J4       | -                    | Header for access to ATmega328 AREF analog reference (optional)                 |
| J5       | 1-2*                 | Enable on-board 5VISO isolated +5V power supply                                 |
| J6       | Open*                | Header for optional MAX11410 digital GPIO1                                      |
| J7       | Open*                | Header for optional MAX11410 digital GPIO0                                      |
| J8       | Open*                | Terminal blocks for MAX11410 analog inputs A0 and A1                            |
| J9       | Open*                | Terminal blocks for MAX11410 analog inputs A2 and A3                            |
| J10      | Open*                | Terminal blocks for MAX11410 analog inputs A4 and A5                            |
| J11      | Open*                | Terminal blocks for MAX11410 analog inputs A6 and A7                            |
| J12      | Open*                | Terminal blocks for MAX11410 analog inputs A8 and A9                            |
| J13      | Open*                | Terminal blocks for MAX11410 analog reference inputs REF1P and REF1N            |
| J14      | Open*                | Terminal blocks for MAX11410 analog reference inputs REF2P and REF2N            |
| BATT     | Open*                | Terminal blocks for optional battery power input (5.5V < = BATT < = 16.5V)      |
| R53      | Open (not installed) | Board is powered by optional external battery power BATT (R54 must be open)     |
| R54      | 0Ω installed         | Board is powered from USB (R53 must be open)                                    |
| R28      | Open (not installed) | Analog reference input A0/REF0P is driven by on-board +2.5V reference (MAX6126) |
| R29      | Open (not installed) | Analog reference input A1/REF0N ground reference                                |
| R38      | 0Ω installed         | Analog reference input REF1P is driven by on-board +2.5V reference (MAX6126)    |
| R39      | 0Ω installed         | Analog reference input REF1N ground reference                                   |
| R40      | 0Ω installed         | Analog reference input REF2P is driven by on-board +2.5V reference (MAX6126)    |
| R41      | 0Ω installed         | Analog reference input REF2N ground reference                                   |
| R27      | 0Ω installed         | VDDREG supply is provided by on-board +3.3V regulator (MAX8511)                 |
| R30      | 0Ω installed         | AVDD supply is provided by on-board +3.3V regulator (MAX8511)                   |
| R26      | 0Ω installed         | VDDIO supply is provided by on-board +3.3V regulator (MAX8511)                  |
| R48      | 0Ω installed         | 2.5V reference force/sense connection point                                     |

*Default position

## Ordering Information

| PART              | TYPE               |
|-------------------|--------------------|
| MAX11410EMCEVKIT# | EMC Evaluation Kit |

#Denotes RoHS compliance.

## MAX11410 EMC EV Kit Bill of Materials

|   ITEM | REF_DES                                         | DNI/DNP   |   QTY | MFG PART #                                                                                               | MANUFACTURER                                       | VALUE                                                                          | DESCRIPTION                                                                                   |
|--------|-------------------------------------------------|-----------|-------|----------------------------------------------------------------------------------------------------------|----------------------------------------------------|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
|      1 | BATT, J8-J14                                    | -         |     8 | 1935161 PHOENIX CONTACT                                                                                  | 1935161 PHOENIX CONTACT                            | 1935161 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 2PINS | 1935161 CONNECTOR; FEMALE; THROUGH HOLE; GREEN TERMINAL BLOCK; STRAIGHT; 2PINS                |
|      2 | BUMP1-BUMP4                                     | -         |     4 | SJ-5003(BLACK)                                                                                           | 3MELECTRONIC SOLUTIONS DIVISION                    | SJ-5003(BLACK)                                                                 | BUMPER; BLACK-HEMISPHERICAL SHAPE EVKIT EH0231; 0.44D/0.2BH; RESILIENT ELASTOMER POLYURETHANE |
|      3 | C1, C3, C4, C7, C11, C12, C40-C46, C52, C54-C59 | -         |    20 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A;                                     | YAGEO;MURATA; TAIYO YUDEN;AVX; MURATA              | 0.1UF                                                                          | CAP; SMT (0603); 0.1UF; 10%; 100V; X7R; CERAMIC                                               |
|      4 | C2, C5                                          | -         |     2 | GRM188R72A104K GRM1555C1H120FA01                                                                         | MURATA                                             | 12PF                                                                           | CAP; SMT (0402); 12PF; 1%; 50V; C0G; CERAMIC                                                  |
|      5 | C6                                              | -         |     1 | C0603C475K8PAC; LMK107BJ475KA; CGB3B1X5R1A475K; C1608X5R1A475K080AC; CL10A475KP8NNN; C1608X5R1A475K080AE | KEMET;TAIYO YUDEN; TDK;TDK;SAMSUNG ELECTRONICS;TDK | 4.7UF                                                                          | CAP; SMT (0603); 4.7UF; 10%; 10V; X5R; CERAMIC                                                |
|      6 | C8, C9, C13, C14, C36-C38                       | -         |     7 | C0603C105K4RAC; C1608X7R1C105K080AC; EMK107B7105KA; CGA3E1X7R1C105K080AC; 0603YC105KAT2A                 | KEMET;MURATA;TDK; TAIYO YUDEN;TDK;AVX              | 1UF                                                                            | CAP; SMT (0603); 1UF; 10%; 16V; X7R; CERAMIC                                                  |
|      7 | C10, C47                                        | -         |     2 | CC1812KKX7RDBB472                                                                                        | YAGEO                                              | 4700PF                                                                         | CAP; SMT (1812); 4700PF; 10%; 2000V; X7R; CERAMIC                                             |
|      8 | C15-C24, C30-C33                                | -         |    14 | C0603C103K2RAC                                                                                           | KEMET                                              | 0.01UF                                                                         | CAP; SMT (0603); 0.01UF; 10%; 200V; X7R; CERAMIC                                              |
|      9 | C25-C29, C34, C35                               | -         |     7 | GRM32DR72E104KW01                                                                                        | MURATA                                             | 0.1UF                                                                          | CAP; SMT (1210); 0.1UF; 10%; 250V; X7R; CERAMIC                                               |
|     10 | C39                                             | -         |     1 | GRM21B5C1H203JA01                                                                                        | MURATA                                             | 0.02UF                                                                         | CAP; SMT (0805); 0.02UF; 5%; 50V; C0G; CERAMIC                                                |
|     11 | C48-C51                                         | -         |     4 | GRM188R72A102KA01; C1608X7R2A102K080AA                                                                   | MURATA;TDK                                         | 0.001UF                                                                        | CAP; SMT (0603); 0.001UF; 10%; 100V; X7R; CERAMIC                                             |
|     12 | C53                                             | -         |     1 | GRM21BR61E106K; C2012X5R1E106K085AC125AB; C2012X5R1E106K085AC; TMK212BBJ106KG; CL21A106KAFN3N            | MURATA;TDK;TDK; TAIYO YUDEN;SAMSUNG                | 10UF                                                                           | CAP; SMT (0805); 10UF; 10%; 25V; X5R; CERAMIC                                                 |
|     13 | D1                                              | -         |     1 | BAS4002A-RPP                                                                                             | INFINEON                                           | BAS4002A-RPP                                                                   | DIODE; SCH; SMT (SOT-143); PIV=40V; IF=0.2A                                                   |
|     14 | D2                                              | -         |     1 | MMSZ5232B-7-F                                                                                            | DIODES INCORPORATED                                | 5.6V                                                                           | DIODE; ZNR; SMT (SOD-123); Vz=5.6V; Izm=0.02A; 0 DEGC TO +150 DEGC                            |
|     15 | D3-D12, D23-D26                                 | -         |    14 | SMAJ33CA                                                                                                 | VISHAY GENERAL                                     | 33V                                                                            | DIODE; TVS; SMA (DO-214AC); VRM=33V; IPP=7.5A                                                 |
|     16 | D13-D22, D27-D30                                | -         |    14 | BZX84C3V0W-7-F                                                                                           | SEMICONDUCTOR DIODES INCORPORATED                  | 3V                                                                             | DIODE; ZNR; SMT (SOT-323); VZ=3V; IZ=0.005A                                                   |
|     17 | D31                                             | -         |     1 | S2MR5                                                                                                    | TAIWAN SEMICONDUCTOR                               | S2MR5                                                                          | DIODE; RECT; SMB (DO-214AA); PIV=1000V; IF=2A                                                 |
|     18 | D32, D33                                        | -         |     2 | SMBJ26CA                                                                                                 | ST MICROELECTRONICS                                | 26V                                                                            | DIODE; TVS; SMB (DO-214AA); VRM=26V; IPP=75A                                                  |
|     19 | D34-D47                                         | -         |    14 | CMPSH-3S                                                                                                 | CENTRAL SEMICONDUCTOR                              | CMPSH-3S                                                                       | DIODE; SCH; SMT (SOT-23); PIV=30V; IF=0.1A                                                    |
|     20 | J1                                              | -         |     1 | 10103592-0001LF                                                                                          | FCI CONNECT                                        | 10103592-0001LF                                                                | CONNECTOR; FEMALE; SMT; MICRO USB B-TYPE REVERSE; RIGHT ANGLE; 5PINS                          |
|     21 | J2                                              | -         |     1 | PEC06SAAN                                                                                                | SULLINS ELECTRONICS CORP.                          | PEC06SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 6PINS                                     |
|     22 | J3                                              | -         |     1 | PEC03DAAN                                                                                                | SULLINS ELECTRONICS CORP.                          | PEC03DAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 6PINS; -65 DEGC TO +125 DEGC      |
|     23 | J4, J5                                          | -         |     2 | PCC02SAAN                                                                                                | SULLINS                                            | PCC02SAAN                                                                      | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC      |
|     24 | L1                                              | -         |     1 | 0805USB-502ML                                                                                            | COILCRAFT                                          | 0805USB-502ML                                                                  | INDUCTOR; 0805; USB 2.0 COMMONMODECHOKE; 1.42 KOHMS AT 1.1GHZ; 273NH; 0.5A                    |
|     25 | L2                                              | -         |     1 | DLW5BSM191SQ2                                                                                            | MURATA                                             | DLW5BSM191SQ2                                                                  | INDUCTOR; 2020; CHIP COMMONMODECHOKECOIL; 190 OHMAT100MHZ; 5A                                 |
|     26 | L3                                              | -         |     1 | LI1206H151R-10                                                                                           | LAIRD TECHNOLOGIES                                 | 150                                                                            | INDUCTOR; SMT (1206); FERRITE-BEAD; 150; TOL=25%; 0.8A                                        |
|     27 | MH1-MH4                                         | -         |     4 |                                                                                                          | 9032 KEYSTONE                                      | 9032                                                                           | MACHINE FABRICATED; ROUND-THRU HOLE SPACER; NOTHREAD; M3.5; 5/8IN; NYLON                      |
|     28 | R1, R3-R8, R43-R46, R55-R57                     | -         |    14 | ERJ-3EKF28R0                                                                                             | PANASONIC                                          | 28                                                                             | RES; SMT (0603); 28; 1%; +/-100PPM/DEGC; 0.1000W                                              |

Evaluates: MAX11410

## MAX11410 EMC EV Kit Bill of Materials (continued)

|   ITEM | REF_DES                                         | DNI/DNP   |   QTY | MFG PART #                                                                         | MANUFACTURER                           | VALUE         | DESCRIPTION                                                                                                       |
|--------|-------------------------------------------------|-----------|-------|------------------------------------------------------------------------------------|----------------------------------------|---------------|-------------------------------------------------------------------------------------------------------------------|
|     29 | R2                                              | -         |     1 | CRCW060310K0FK; ERJ-3EKF1002; AC0603FR-0710KL; RMCF0603FT10K0                      | VISHAY DALE; PANASONIC;YAGEO           | 10K           | RES; SMT (0603); 10K; 1%; +/-100PPM/DEGC; 0.1000W                                                                 |
|     30 | R9, R47, R50                                    | -         |     3 | CRCW0603100KFK; RC0603FR-07100KL; RC0603FR-13100KL; ERJ-3EKF1003; AC0603FR-07100KL | VISHAY DALE;YAGEO; YAGEO;PANASONIC     | 100K          | RES; SMT (0603); 100K; 1%; +/-100PPM/DEGC; 0.1000W                                                                |
|     31 | R10, R12, R13, R26, R27, R30, R38-R41, R48, R54 | -         |    12 | CRCW06030000Z0EAHP                                                                 | VISHAY DRALORIC                        | 0             | RES; SMT (0603); 0; JUMPER; JUMPER; 0.2500W                                                                       |
|     32 | R11                                             | -         |     1 | CRCW060347K0FKEAHP                                                                 | VISHAY DRALORIC                        | 47K           | RES; SMT (0603); 47K; 1%; +/-100PPM/DEGC; 0.2500W                                                                 |
|     33 | R14, R51                                        | -         |     2 | HV733ATTE4304F                                                                     | KOA SPEER ELECTRONICS INC              | 4.3M          | RES; SMT (2512); 4.3M; 1%; +/-100PPM/DEGC;1W                                                                      |
|     34 | R15                                             | -         |     1 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                       | VISHAY DALE;ROHM                       |               | 10 RES; SMT (0603); 10; 1%; +/-100PPM/DEGC; 0.1000W                                                               |
|     35 | R16-R25, R31-R35, R58-R70                       | -         |    28 | CRCW0603510RFK                                                                     | VISHAY DALE                            |               | 510 RES; SMT (0603); 510; 1%; +/-100PPM/DEGC; 0.1000W                                                             |
|     36 | R42, R49                                        | -         |     2 | CRCW0603100RFK; ERJ-3EKF1000; RC0603FR-07100RL                                     | VISHAY DALE;PANASONIC                  |               | 100 RES; SMT (0603); 100; 1%; +/-100PPM/DEGC; 0.1000W                                                             |
|     37 | SU1                                             | -         |     1 | S1100-B;SX1100-B; STC02SYAN                                                        | KYCON;KYCON; SULLINS ELECTRONICS CORP. | SX1100-B      | TEST POINT; JUMPER; STR; TOTAL LENGTH=0.24IN; BLACK; INSULATION=PBT;PHOSPHOR BRONZE CONTACT=GOLD PLATED           |
|     38 | SW1                                             | -         |     1 | B3S-1000                                                                           | OMRON                                  | B3S-1000P     | SWITCH; SPST; SMT; 24V; 0.05A; NORMALLY OPEN-SURFACE MOUNT TACTILE SWITCH; RCOIL=OHM                              |
|     39 | T1                                              | -         |     1 | TGM-H281NF                                                                         | HALO ELECTRONICS, INC                  | TGM-H281NF    | TRANSFORMER; SMT; 1:1:2.6:2.6; DC/DC CONVERTER ISOLATION MODULE                                                   |
|     40 | TP1, TP3                                        | -         |     2 | 5000                                                                               | KEYSTONE                               | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; RED; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     41 | TP2, TP4                                        | -         |     2 | 5117                                                                               | KEYSTONE                               | N/A           | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLUE; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|     42 | U1                                              | -         |     1 | ATMEGA328-AU                                                                       | ATMEL                                  | ATMEGA328-AU  | IC; UCON; 8-BIT MICROCONTROLLER WITH 32KBYTES IN-SYSTEM PROGRAMMABLE FLASH; TQFP32                                |
|     43 | U2                                              | -         |     1 | MAX8511EXK33+                                                                      | MAXIM                                  | MAX8511EXK33+ | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5                                       |
|     44 | U3                                              | -         |     1 | MAX11410ATI+                                                                       | MAXIM                                  | MAX11410ATI+  | IC; ADC; 24-BIT MULTI-CHANNEL LOW-POWER 1.9KSPS DELTA-SIGMA ADC WITH PGA; TQFN28-EP                               |
|     45 | U4                                              | -         |     1 | ESDA6V1SC6                                                                         | ST MICROELECTRONICS                    | ESDA6V1SC6    | DIODE; TVS; SMT (SOT23-6); PIV=6.1V; IPP=18A                                                                      |
|     46 | U5                                              | -         |     1 | MAX14935BAWE+                                                                      | MAXIM                                  | MAX14935BAWE+ | IC; DISO; FOUR-CHANNEL; 25MBPS; 5KV DIGITAL ISOLATOR; WSOIC16 300MIL                                              |
|     47 | U6                                              | -         |     1 | MAX256ASA+                                                                         | MAXIM                                  | MAX256ASA+    | IC; DRV; 3WPRIMARY-SIDE TRANSFORMER H-BRIDGE DRIVER FOR ISOLATED SUPPLY; NSOIC8-EP 150MIL                         |
|     48 | U7                                              | -         |     1 | FT232RL                                                                            | FUTURE TECHNOLOGY DEVICES INTL LTD.    | FT232RL       | IC; INFC; USB UART INTERFACE; SSOP28                                                                              |
|     49 | U8                                              | -         |     1 | MAX6126A25+                                                                        | MAXIM                                  | MAX6126A25+   | IC; VREF; ULTRA-HIGH PRECISION; ULTRA-LOW NOISE; SERIES VOLTAGE REFERENCE; UMAX8                                  |
|     50 | U9                                              | -         |     1 | MAX1659ESA+                                                                        | MAXIM                                  | MAX1659ESA+   | IC; VREG; LOW-DROPOUT LINEAR REGULATOR; NSOIC8                                                                    |
|     51 | Y1                                              | -         |     1 | ATS16ASM-1                                                                         | CTS                                    | 16MHZ         | CRYSTAL; SMT; 16MHZ; 20PF; TOL = +/-30PPM; STABILITY = +/-50PPM                                                   |
|     52 | PCB                                             | -         |     1 | MAX11410EMC                                                                        | MAXIM                                  | PCB           | PCB:MAX11410EMC                                                                                                   |
|     53 | J6, J7                                          | DNP       |     0 | PCC02SAAN                                                                          | SULLINS                                | PCC02SAAN     | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT THROUGH; 2PINS; -65 DEGC TO +125 DEGC                          |
|     54 | R28, R29, R36, R37, R52, R53                    | DNP       |     0 | CRCW06030000Z0EAHP                                                                 | VISHAY DRALORIC                        |               | 0 RES; SMT (0603); 0; JUMPER; JUMPER; 0.2500W                                                                     |

## MAX11410 EMC EV Kit Schematics

<!-- image -->

## MAX11410 EMC EV Kit Schematics (continued)

<!-- image -->

Evaluates: MAX11410

## MAX11410 EMC EV Kit Schematics (continued)

<!-- image -->

│

## MAX11410 EMC EV Kit Layouts

MAX11410 EMC EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

│

## MAX11410 EMC EV Kit Layouts (continued)

MAX11410 EMC EV Kit PCB Layout-Top

<!-- image -->

│

## MAX11410 EMC EV Kit Layouts (continued)

MAX11410 EMC EV Kit PCB Layout-Layer2

<!-- image -->

│

## MAX11410 EMC EV Kit Layouts (continued)

MAX11410 EMC EV Kit PCB Layout-Layer3

<!-- image -->

│

## MAX11410 EMC EV Kit Layouts (continued)

MAX11410 EMC EV Kit PCB Layout-Bottom

<!-- image -->

│

## MAX11410 EMC EV Kit Layouts (continued)

MAX11410 EMC EV Kit PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX11410 EMC Evaluation Board

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/21            | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX11410