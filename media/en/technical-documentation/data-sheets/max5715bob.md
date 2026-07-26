<!-- lastmod 2022-08-03 -->
## MAX5715 Breakout Board (BOB)

## General Description

Digital-to-analog  converters  (DACs)  provide  accurate output voltages for actuation and  control  in  many electronic  applications  such  as  industrial,  medical  and RF  systems.    The  MAX5715  is  a  highly  accurate,  four channel,  12-bit  voltage  output  DAC.  Development  with DACs  involves  expertise  in  analog  systems,  power supplies, digital interfaces and firmware. Now, enter the MAX5715BOB to accelerate the development process.

The MAX5715BOB (Break Out Board) provides for rapid prototyping and development with the MAX5715 (a 12-bit, 4-channel, voltage-output DAC). MAX5715BOB interfaces to  any  Arduino™-compatible  or  mbed.org™  compatible platform system with expansion ports configurable for SPI communication.  Additionally,  the  MAX5715BOB  works with systems that have a Pmod™ connection, a 2 x 6 rightangle header at board edge (compatible with Digilentinc. com Pmod™ interface spec) Interface type 2A (expanded SPI) on 2x6 header at board edge. MAX5715BOB also comes  with  schematics,  design  files  and  firmware  for immediate use and forking to future projects.

## MAX5715 Breakout Board Photo

PMOD is a trademark of Digilent Inc Arduino is a trademark of Arduino AG Arm and Mbed are trademarks of Arm Limited (or its subsidiaries) Windows is a trademark of Microsoft

<!-- image -->

## 12-Bit, 4-Channel SPI VOUT DAC

The board directly interfaces to SPI with logic levels in the range between 2.7V to 5.5V.

The board comes installed with MAX5715AAUD+ installed. Example firmware is provided for Arduino™ and mbed.org™ system boards.

## Tested with:

- Arduino Pro Mini 3.3V/8MHz ( Link )
- Arduino UNO ( Link )
- MAX32625MBED# ( Link )
- MAX32600MBED# ( Link )
- STM32F446 Nucleo-64x ( Link )

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX5715 Breakout Board (BOB)

## MAX5715 Breakout Board Pinout

<!-- image -->

## Quick Start

## Required Equipment

- MAX5715BOB# Breakout Board
- Appropriate mbed.org or Arduino board
- The procedures below describe the Quick Start process with the MAX32625MBED# and the Arduino UNO.
- Computer with USB and web access
- A serial terminal emulator software such as teraterm, realterm, picocom, minicom, or equivalent

The  procedures  below  describe  the  Quick  Start  process  with  the  MAX32625MBED#  and  the Arduino.  The MAX5715BOB has been tested on the platform  boards listed above.

There are two example programs for each platform:

- The 'Simplified Hello World' program is a small example program which can be changed by modifying the Hello\_MAX5715.cpp source code and repeating the compile-build-upload cycle, providing straightforward code for easy adoption.
- The 'Serial Tester' program is an interactive, menudriven test program which is controlled through a serial communications port, using a terminal emulator, supporting quick discovery and evaluation of device features for testing functionality.

## Procedure for Mbed: Simplified Hello World

The  'Simplified  Hello  World'  program  is  a  small  example program  which  can  be  changed  by  modifying  the Hello\_MAX5715.cpp  source code and repeating the compile-build-upload cycle, providing straightforward code for easy adoption.

The breakout board is fully assembled and tested.

The first time the board is used, the MAX5715BOB firmware must be loaded into the MAX32625MBED or equivalent platform board. This firmware is stored on the MAX32625MBED board and remains after the board is powered off.

The  firmware  uses  a  USB  serial  port  to  communicate. (Either the HDK or DEV USB connector can be used for communication, but the DEV USB connector is required to power the board.)

## MAX5715 Breakout Board (BOB)

When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers.

Follow the steps below to verify board operation:

- 1) Connect the MAX5715BOB to the MAX32625MBED or equivalent mbed platform board using the standard pinout.
- 2) Connect a  USB  cable  from  computer  to  MAX32625MBED board 'HDK' USB port. (Windows may require some time to install its device driver.) Expect the system to automatically mount the board as a new USB drive named MBED or DAPLINK or something similar. This is  a  special-purpose  drive:  firmware  will  be  loaded into the board by copying the compiled binary into the board's drive. Don't write any other files to this drive.
- 3) Open your board's USB device folder and double click on its MBED.HTML file. On the board page, click Add to your Mbed Compiler. This adds your Mbed board to the Online Compiler as a compilation target. See https://os.mbed.com/docs/mbed-os/v5.13/quickstart/index.html for  more  detailed  instructions  on using the online compiler.
- 4) In a web browser, navigate to https:// os.mbed.com/teams/MaximIntegrated/code/ MAX5715BOB\_12bit\_4ch\_SPI\_DAC/ and click Import into  Compiler. The mbed online IDE window opens, and prompts to import program. Click Import button to complete the import.
- 5) Compile  the  program.  When  complete,  the  online mbed IDE downloads the firmware file to your local downloads folder.
- 6) Locate the newly built firmware file MAX5715BOB\_12bit\_4ch\_SPI\_DAC.MAX32625MBED.bin  and  copy  the  file  to  the  board's MBED  drive.  (The  names  might  not  match  exactly if  using  a  platform  other  than  MAX32625MBED,  or if  there is already a file with that name.) If a warning dialog  appears  asking  to  move  this  file  without  its properties, answer yes. After file copying is complete, press and release the board's RESET button to start the firmware. Use a DVM to measure the voltages on the MAX5715BOB: REF = 2.5V, OUTA = 2.0V, OUTB = 1.25V, OUTC = 1.0V, OUTD = 2.5V.
- 7) The program behavior can be changed by modifying the Hello\_MAX5715.cpp source code and repeating the compile-build-upload cycle from step 4.
- 8) You can discard your local changes and reset to the latest published firmware version as follows: Bring up the project **Revision** tab and right-click on the line that says 'default' 'tip'. In the popup context menu, select  **Switch  working  copy  to  this  revision…**.

There will be a warning that there are uncommitted local changes in the working tree. Click **Discard**, and all of the local files will be reset to the published version.

## Procedure for mbed: Serial Tester

The  'Serial  Tester'  program  is  an  interactive,  menudriven  test  program  which  is  controlled  through  a  serial communications port, using a terminal emulator, supporting quick  discovery  and  evaluation  of  device  features  for testing functionality.

The Breakout Board is fully assembled and tested.

The  first  time  the  board  is  used,  the  MAX5715BOB firmware  must  be  loaded  into  the  MAX32625MBED,  or equivalent platform board. This firmware is stored on the MAX32625MBED board and remains after the board is powered off.

The serial tester firmware uses a USB serial port to communicate.

When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers.

Follow the steps below to verify board operation:

- 1) Connect the MAX5715BOB to the MAX32625MBED or equivalent mbed platform board using the standard pinout.
- 2) Connect a USB cable from computer to MAX32625MBED board 'HDK' USB port. (Windows may  require  some  time  to  install  its  device  driver.) Expect the system to automatically mount the board as  a  new  USB  drive  named  MBED or DAPLINK or something  similar.  This  is  a  special-purpose  drive: firmware will be loaded into the board by copying the compiled binary into the board's drive. Don't write any other files to this drive.
- 3) Open your board's USB device folder and double click on its MBED.HTML file. On the board page, click Add to your Mbed Compiler. This adds your Mbed board to the Online Compiler as a compilation target. See https://os.mbed.com/docs/mbed-os/v5.13/quickstart/index.html for  more  detailed  instructions  on using the online compiler.
- 4) In a web browser, navigate to https://os.mbed.com/ teams/MaximIntegrated/code/MAX5715BOB\_Se-rial\_Tester/ and click Import into Compiler. The mbed online  IDE  window  opens,  and  prompts  to  import program. Click Import button to complete the import.
- 5) Compile  the  program.  When  complete,  the  online mbed IDE downloads the firmware file to your local downloads folder.
- 6) Locate the newly built firmware file MAX5715BOB\_Se -rial\_T ester.MAX32625MBED.bin  and  copy  the  file  to

the board's MBED drive. (The names might not match exactly if using a platform other than MAX32625MBED, or if there is already a file with that name.) If a warning dialog appears asking to move this file without its properties, answer yes.

- 7) Connect another, or the existing USB cable from computer to MAX32625MBED board 'DEV' USB port.
- 8) Expect the LEDs in the lower right corner should flash briefly and then remain lit.
- 9) Locate  the  newly  arrived  USB  Serial  Device  COM port,  and  use  a  serial  terminal  emulator  (such  as teraterm, realterm, picocom, minicom, or equivalent). Baud rate is 9600.

## Procedure for Arduino: Simplified Hello World

The  'Simplified  Hello  World'  program  is  a  small  example program  which  can  be  changed  by  modifying  the Hello\_MAX5715.cpp  source  code  and  repeating  the compile-build-upload cycle, providing straightforward code for easy adoption.

The Breakout Board is fully assembled and tested.

The first time the board is used, the MAX5715BOB firmware must  be  loaded  into  the  Arduino  board.  This  firmware  is stored on the Arduino board and remains after the board is powered off.

The firmware uses a USB serial port to communicate. When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers. Follow the steps below to verify board operation:

- 1) Connect the MAX5715BOB to the Arduino board using the standard pinout.
- 2) Connect a USB cable from computer to Arduino board USB port. (Windows may require some time to install its device driver.)
- 3) [In a web browser, navigate to https://create.arduino.cc/editor/whismanoid/5faff349-b8ce-4ca79dce-9d8e8677761f/preview to view the MAX5715BOB example code sketch files.](https://create.arduino.cc/editor/whismanoid/5faff349-b8ce-4ca7-9dce-9d8e8677761f/preview)
- 4) Click the Open in Web Editor button to import the example sketch into the online Arduino Create IDE, or click the download button to download the files as a zip archive.
- 5) Compile the program by clicking the Upload and Save button. When complete, the firmware file will be loaded into the attached Arduino board.
- 6) Open the Monitor tab and configure the baud rate to 115200 baud. Or, alternatively, locate the newly arrived USB Serial Device COM port, and use a serial terminal emulator (such as teraterm, realterm, picocom, minicom, or equivalent). Baud rate is 115200.

## Procedure for Arduino: Serial Tester

The 'Serial Tester' program is an interactive, menu-driven test program which is controlled through a serial communications port, using a terminal emulator, supporting quick discovery  and  evaluation  of  device  features  for  testing functionality.

The Breakout Board is fully assembled and tested.

The first time the board is used, the MAX5715BOB firmware must be loaded into the Arduino board. This firmware is stored on the Arduino board and remains after the board is powered off.

The firmware uses a USB serial port to communicate.

When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers.

Follow the steps below to verify board operation:

- 1) Connect the MAX5715BOB to the Arduino board using the standard pinout.
- 2) Connect a USB cable from computer to Arduino board USB port. (Windows may require some time to install its device driver.)
- 3) [In a web browser, navigate to https://create. arduino.cc/editor/whismanoid/5143b342-d0e24758-a41d-0a18f03aeb5a/preview and click 'Add to my Sketchbook'.](https://create.arduino.cc/editor/whismanoid/5143b342-d0e2-4758-a41d-0a18f03aeb5a/preview)
- 4) Connect USB cable to Arduino hardware. If this is your first time using Arduino Create online, you may be prompted to install Arduino Create Agent to connect with the hardware.
- 5) Compile the program with the 'Upload and Save' button.
- 6) Locate the newly arrived USB Serial Device COM port, and use a serial terminal emulator (such as teraterm, realterm, picocom, minicom, or equivalent). Baud rate is 9600.

## Sending Commands with a Serial Console

A  serial  terminal  emulator  software  (such  as  teraterm, realterm,  putty,  picocom,  minicom,  or  equivalent)  must be installed to communicate with the example firmware. Various terminal programs connect in various ways and have different user interfaces, but they all share a common set of basic features:

- Connecting to a specific serial port device by name, such as COM4 or /dev/ttyACM0
- Settings  such  as  baud  rate  9600,  8  bits/No  parity/1 Stop bit, no flow control
- Typing  at  the  keyboard  transmits  to  the  firmware through the serial port

## MAX5715 Breakout Board (BOB)

- Messages received from the firmware are displayed on the screen
- A special keyboard command or menu item exits the terminal program

[See https://os.mbed.com/handbook/Terminals for more details.](https://os.mbed.com/handbook/Terminals)

More resources:

https://learn.sparkfun.com/tutorials/terminal-basics/tera-term-windows https://learn.sparkfun.com/tutorials/terminal-basics/real-term-windows https://learn.sparkfun.com/tutorials/terminal-basics/yat---yet-another-terminal-windows https://learn.sparkfun.com/tutorials/terminal-basics/coolterm-windows-mac-linux

[https://learn.adafruit.com/windows-tools-for-the-electrical-engineer/serial-terminal](https://learn.adafruit.com/windows-tools-for-the-electrical-engineer/serial-terminal)

## [https://www.putty.org/](https://www.putty.org/)

In Windows™, install a terminal emulator such as teraterm, realterm, or putty. Find the serial port name and COM port number in Control Panel 'View devices and printers'. The Mbed board will appear as 'USB Serial Device' or 'mbed Serial  Port'.  See https://os.mbed.com/handbook/Windows-serial-configuration  and  https://os.mbed.com/docs/ mbed-os/v5.11/tutorials/windows-serial-driver.html for troubleshooting. Start the terminal emulator and use the menu to connect to the serial port that belongs to the board. Pressing ENTER displays the firmware's banner message (see example session).

In linux, install a terminal emulator such as minicom or picocom. For example, under Debian or Ubuntu linux, use

```
sudo apt-get install picocom
```

In linux (Debian), find the serial port name as follows:

```
# with the board not connected, get list of tty device names ls -1 /dev/tty* >dev_tty_baseline # now connect the device to USB and find the new tty device name (such as /dev/ ttyACM0) ls -1 /dev/tty* | diff dev_tty_baseline -
```

The picocom terminal emulator runs from the tty console. The tty device name must be given on the command line when starting picocom. See man picocom for more details.

```
picocom /dev/ttyACM0 --baud 9600
```

Pressing ENTER displays the firmware's banner message (see example session). Pressing CTRL+A, and then CTRL+X, exits picocom.

## Example Serial Console Session

The firmware uses a USB serial port to communicate. Typing '?' prints a menu of supported device commands.

```
# Example for MAX5715BOB Breakout Board Main menu MAX5715 12-bit 4-ch SPI VOUT DAC MAX32625 [microUSB] ? -- help MAX5715 > ? Main menu MAX5715 12-bit 4-ch SPI VOUT DAC MAX32625 [microUSB] ? -- help # -- lines beginning with # are comments . -- SelfTest %Hn {pin: 0 1 2 3 4 5 6 7 8 9 14 15 16 17} -- High Output
```

│

```
%Ln {pin: 0 1 2 3 4 5 6 7 8 9 14 15 16 17} -- Low Output %?n {pin: 0 1 2 3 4 5 6 7 8 9 14 15 16 17} -- Input %A -- analogRead %SC SCLK=12000000=12.000MHz CPOL=1 CPHA=0 -- SPI config %SW mosi,mosi,...mosi -- SPI write hex bytes 0 ch=? code=? -- CODEn 1 ch=? -- LOADn 2 ch=? code=? -- CODEnLOADall 3 ch=? code=? -- CODEnLOADn 40 ch=? -- POWERn_Normal 41 ch=? -- POWERn_PD1k 42 ch=? -- POWERn_PD100k 43 ch=? -- POWERn_PDHiZ 50 -- SW_CLEAR 51 -- SW_RESET 60 ch=? -- CONFIGn_LATCHED 61 ch=? -- CONFIGn_TRANSPARENT 68 -- CONFIGall_LATCHED 69 -- CONFIGall_TRANSPARENT 70 -- REF_EXT 71 -- REF_2V500 72 -- REF_2V048 73 -- REF_4V096 74 -- REF_AlwaysOn_EXT 75 -- REF_AlwaysOn_2V500 76 -- REF_AlwaysOn_2V048 77 -- REF_AlwaysOn_4V096 80 code=? -- CODEall 81 -- LOADall 82 code=? -- CODEallLOADall @ -- print MAX5715 configuration L -- LDAC# pulse LH high LL low C -- CLR# pulse CH high CL low MAX5715 > # send 76 REF_AlwaysOn_2V048 to change internal reference voltage Main menu MAX5715 12-bit 4-ch SPI VOUT DAC MAX32625 [microUSB] ? -- help
```

│

## MAX5715 Breakout Board (BOB)

```
MAX5715 > 76 MAX5715_REF(REF_AlwaysOn_2V048) SPI MOSI-> 0x76 0x00 0x00  MISO<- 0xFF 0xFF 0xFF MAX5715 > # send 75 REF_AlwaysOn_2V500 to change internal reference voltage Main menu MAX5715 12-bit 4-ch SPI VOUT DAC MAX32625 [microUSB] ? -- help MAX5715 > 75 MAX5715_REF(REF_AlwaysOn_2V500) SPI MOSI-> 0x75 0x00 0x00  MISO<- 0xFF 0xFF 0xFF MAX5715 > # send 82 CODEallLOADall to write and update all channels same value Main menu MAX5715 12-bit 4-ch SPI VOUT DAC MAX32625 [microUSB] ? -- help MAX5715 > 82 code=0x555 CODEallLOADall code=1365 SPI MOSI-> 0x82 0x55 0x50  MISO<- 0xFF 0xFF 0xFF MAX5715 > # diagnostic %a measures MAX32625MBED AIN0,1 (5Vmax) and AIN2,3 (0.6Vmax) Main menu MAX5715 12-bit 4-ch SPI VOUT DAC MAX32625 [microUSB] ? -- help MAX5715 > %a AIN0 = 100.000% = 0.600V AIN4 = 14.174% = 0.850V AIN1 = 100.000% = 0.600V AIN5 = 14.174% = 0.850V AIN2 = 100.000% = 0.600V AIN3 = 100.000% = 0.600V MAX5715 > # send 3 CODEnLOADn to write and update individual channels Main menu MAX5715 12-bit 4-ch SPI VOUT DAC MAX32625 [microUSB] ? -- help MAX5715 > 3 ch=0 code=0xccc CODEnLOADn ch=0 code=3276 SPI MOSI-> 0x30 0xCC 0xC0  MISO<- 0xFF 0xFF 0xFF MAX5715 > %a AIN0 = 100.000% = 0.600V AIN4 = 33.724% = 2.023V AIN1 = 100.000% = 0.600V AIN5 = 14.174% = 0.850V AIN2 = 100.000% = 0.600V AIN3 = 100.000% = 0.600V MAX5715 > 3 ch=1 code=0x666 CODEnLOADn ch=1 code=1638 SPI MOSI-> 0x31 0x66 0x60  MISO<- 0xFF 0xFF 0xFF MAX5715 > %a
```

│

## MAX5715 Breakout Board (BOB)

```
AIN0 = 100.000% = 0.600V AIN4 = 33.724% = 2.023V AIN1 = 100.000% = 0.600V AIN5 = 16.911% = 1.015V AIN2 = 100.000% = 0.600V AIN3 = 100.000% = 0.600V MAX5715 > 3 ch=2 code=0x100 CODEnLOADn ch=2 code=256 SPI MOSI-> 0x32 0x10 0x00  MISO<- 0xFF 0xFF 0xFF MAX5715 > %a AIN0 = 100.000% = 0.600V AIN4 = 33.724% = 2.023V AIN1 = 100.000% = 0.600V AIN5 = 16.911% = 1.015V AIN2 =  26.295% = 0.158V AIN3 = 100.000% = 0.600V MAX5715 > # send 76 REF_AlwaysOn_2V048 to change internal reference voltage Main menu MAX5715 12-bit 4-ch SPI VOUT DAC MAX32625 [microUSB] ? -- help MAX5715 > 76 MAX5715_REF(REF_AlwaysOn_2V048) SPI MOSI-> 0x76 0x00 0x00  MISO<- 0xFF 0xFF 0xFF MAX5715 > %a AIN0 = 100.000% = 0.600V AIN4 = 27.664% = 1.660V AIN1 = 100.000% = 0.600V AIN5 = 13.881% = 0.833V AIN2 =  21.603% = 0.130V AIN3 = 100.000% = 0.600V MAX5715 > # send 43 POWERn_PDHiZ power off one channel high impedance Main menu MAX5715 12-bit 4-ch SPI VOUT DAC MAX32625 [microUSB] ? -- help MAX5715 > 43 ch=2 channel_dcba=4, POWERn_PDHiZ) SPI MOSI-> 0x43 0x04 0x00  MISO<- 0xFF 0xFF 0xFF MAX5715 > %a AIN0 = 100.000% = 0.600V AIN4 = 27.664% = 1.660V AIN1 = 100.000% = 0.600V  AIN5 =  13.881% =  0.833V AIN2 =  97.458% = 0.585V AIN3 = 100.000% = 0.600V MAX5715 > Main menu MAX5715 12-bit 4-ch SPI VOUT DAC MAX32625 [microUSB] ? -- help MAX5715 > # end of test file
```

│

## Detailed Description of Hardware

The MAX5715 is a 12-bit, 4-channel, voltage-output DAC with SPI Interface. Analog outputs are driven on the OUTA -  OUTD  header  pins.  (The  analog  outputs  are  also  connected  to  the  standard Arduino  analog  pins  on  the  external connector.)  For more information on the MAX5715, visit www.maximintegrated.com/max5715

## Table 1. Jumper Function

| JUMPER   | STATE   | FUNCTION                                        |
|----------|---------|-------------------------------------------------|
| J2       | 1-2*    | Analog reference REF connects to Arduino pin A4 |
| J6       | 1-2*    | Analog output OUTAconnects to Arduino pin A0    |
| J7       | 1-2*    | Analog output OUTB connects to Arduino pin A1   |
| J8       | 1-2*    | Analog output OUTC connects to Arduino pin A2   |
| J13      | 1-2*    | Analog output OUTD connects to Arduino pin A3   |
| J5       | 1-2*    | V DD supply is driven by Arduino IOREF supply   |
| J4       | 1-2*    | V DDIO supply is driven by Arduino IOREF supply |

* Default position

## Ordering Information

| PART        | TYPE           |
|-------------|----------------|
| MAX5715BOB# | Breakout Board |

# Denotes RoHS compliant

│

## MAX5715 Breakout Board Bill of Materials

| ITEM   | REF_DES   | DNI/DNP   |   QTY | MFG PART #                                                                             | MANUFACTURER                            | VALUE             | DESCRIPTION                                                                                                              |
|--------|-----------|-----------|-------|----------------------------------------------------------------------------------------|-----------------------------------------|-------------------|--------------------------------------------------------------------------------------------------------------------------|
| 1      | C2, C10   | -         |     2 | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01; HMK107B7104KA; 06031C104KAT2A | YAGEO; MURATA; MURATA; TAIYO YUDEN; AVX | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                              |
| 2      | GND       | -         |     1 | 5001                                                                                   | KEYSTONE                                | N/A               | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN; BOARD HOLE = 0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
| 3      | H1, H2    | -         |     2 | PEC07SAAN                                                                              | SULLINS ELECTRONICS CORP.               | PEC07SAAN         | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 7PINS; -65°C TO +125°C                                               |
| 4      | J9        | -         |     1 | SSQ-106-03-G-S                                                                         | SAMTEC                                  | SSQ-106-03-G-S    | CONNECTOR; MALE; THROUGH HOLE; THROUGH-HOLE .025 SQ POST SOCKET ; STRAIGHT; 6PINS                                        |
| 5      | J10, J12  | -         |     2 | SSQ-108-03-G-S                                                                         | SAMTEC                                  | SSQ-108-03-G-S    | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS                                                  |
| 6      | J11       | -         |     1 | SSQ-110-03-G-S                                                                         | SAMTEC                                  | SSQ-110-03-G-S    | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS                                                 |
| 7      | J21       | -         |     1 | TSW-106-08-S-D-RA                                                                      | SAMTEC                                  | TSW-106-08-S-D-RA | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS                                                                 |
| 8      | R1, R2    | -         |     2 | CRCW06033K00FK                                                                         | VISHAY DALE                             | 3K                | RESISTOR; 0603; 3K Ω ; 1%; 100PPM; 0.10W; THICK FILM                                                                     |
| 9      | U1        | -         |     1 | MAX5715AAUD+                                                                           | MAXIM                                   | MAX5715AAUD+      | IC; DAC; ULTRA-SMALL; QUAD-CHANNEL; 12-BIT BUFFERED OUTPUT DACS WITH INTERNAL REFERENCE AND SPI INTERFACE; TSSOP14       |
| 10     | PCB       | -         |     1 | 5715_ARDUINO_DEMO_B                                                                    | MAXIM                                   | PCB               | PCB:5715_ARDUINO_DEMO_B                                                                                                  |
| 11     | C1        | DNP       |     0 | CC0603KRX7R0BB104; GRM188R72A104KA35; GCJ188R72A104KA01; HMK107B7104KA; 06031C104KAT2A | YAGEO;MURATA; MURATA;TAIYO YUDEN; AVX   | 0.1UF             | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL=10%; TG = -55°C TO +125°C; TC = X7R                                |
| TOTAL  |           |           |    14 |                                                                                        |                                         |                   |                                                                                                                          |

## MAX5715 Breakout Board Schematic

<!-- image -->

## MAX5715 Breakout Board (BOB)

## MAX5715 Breakout Board PCB Layout Diagrams

MAX5715 Breakout Board PCB Layout-Top Silkscreen

<!-- image -->

MAX5715 Breakout Board PCB Layout-Top Layer

<!-- image -->

│

## MAX5715 Breakout Board PCB Layout Diagrams (continued)

MAX5715 Breakout Board PCB Layout-Internal 2

<!-- image -->

MAX5715 Breakout Board PCB Layout-Internal 3

<!-- image -->

│

## MAX5715 Breakout Board (BOB)

## MAX5715 Breakout Board PCB Layout Diagrams (continued)

MAX5715 Breakout Board PCB Layout-Bottom View

<!-- image -->

MAX5715 Breakout Board PCB Layout-Bottom Silkscreen

<!-- image -->

│

## MAX5715 Breakout Board (BOB)

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│