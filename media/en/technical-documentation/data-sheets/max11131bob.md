<!-- lastmod 2022-08-03 -->
## MAX11131 Breakout Board

## General Description

Analog-to-digital  converters  (ADCs)  provide  accurate measurement and conversion of signals to digital format for  sensing  in  many  electronic  applications  such  as industrial, medical and sensor systems.  The MAX11131 is  a  high-speed,  16  channel,  12-bit ADC  with  a  unique feature, SampleSet. SampleSet allows users to tailor individual sample rates for each input channel. Development with ADCs involves expertise in analog systems, power supplies, digital interfaces and firmware. Now, enter the MAX11131BOB to accelerate the development process.

The  MAX11131BOB  Breakout  Board  provides  for  rapid prototyping  and  development  with  the  MAX11131  (a 12-bit,  3Msps,  16-channel,  ADC  with  SampleSet).  The MAX11131BOB interfaces to any Arduino™-compatible or mbed.org™ compatible platform  system  with  expansion ports  configurable  for  SPI  communication.  Additionally, the  MAX11131BOB  works  with  systems  that  have  a Pmod™ connection,  a  2x6  right-angle  header  at  board edge (compatible with Digilentinc.com Pmod™ interface spec)  Interface  type  2A  (expanded  SPI)  on  2x6  header at  board edge. MAX11131 also comes with schematics, design files, and firmware for immediate use and forking to future projects.

## Board Photo

<!-- image -->

PMOD is a trademark of Digilent Inc Arduino is a trademark of Arduino AG Arm and Mbed are trademarks of Arm Limited (or its subsidiaries) Windows is a trademark of Microsoft

<!-- image -->

## 12-bit 3MSps 16-ch ADC

The board interfaces to SPI with logic levels in the range 3.0V to 5.5V.

The board comes installed with MAX11131ATI+ installed. Example firmware  is  provided  for Arduino™  and  mbed. org™ system boards.

Tested with:

- MAX32625MBED# https://os.mbed.com/platforms/ MAX32625MBED/
- MAX32600MBED# https://os.mbed.com/platforms/ MAX32600MBED/
- [STM32F446 Nucleo-64 https://os.mbed.com/platforms/ST-Nucleo-F446RE/](https://os.mbed.com/platforms/ST-Nucleo-F446RE/)
- Arduino UNO https://store.arduino.cc/usa/arduinouno-rev3/
- Arduino Pro Mini 3.3V/8MHz https://store.arduino. cc/usa/arduino-pro-mini/

Ordering Information appears at end of data sheet.

## MAX11131 Breakout Board

## Board Pinout

<!-- image -->

## Quick Start

## Required Equipment

- MAX11131BOB# Breakout Board
- Appropriate mbed.org or Arduino board
- Computer with USB and web access
- A serial terminal emulator software such as teraterm, realterm, picocom, minicom, or equivalent

The  procedures  below  describe  the  Quick  Start  process  with  the  MAX32625MBED#  and  the  Arduino. MAX11131BOB has been tested on the platform boards listed above.

There are two example programs for each platform:

- The 'Simplified Hello World' program is a small example program which can be changed by modifying the Hello\_MAX11131.cpp source code and repeating the compile-build-upload cycle, providing straightforward code for easy adoption.
- The 'Serial Tester' program is an interactive, menudriven test program which is controlled through a serial communications port, using a terminal emulator, supporting quick discovery and evaluation of device features for testing functionality.

│

## 12-bit 3MSps 16-ch ADC

## MAX11131 Breakout Board

## Procedure for Mbed: Simplified Hello World

The 'Simplified Hello World' program is a small example program which can be changed by modifying the Hello\_ MAX11131.cpp source code and repeating the compilebuild-upload  cycle,  providing  straightforward  code  for easy adoption.

The Breakout Board is fully assembled and tested.

The  first  time  the  board  is  used,  the  MAX11131BOB firmware  must  be  loaded  into  the  MAX32625MBED,  or equivalent platform board. This firmware is stored on the MAX32625MBED board and remains after the board is powered off.

When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers.

Follow the steps below to verify board operation:

- 1) Connect the MAX11131BOB to the MAX32625MBED or equivalent mbed platform board using the standard pinout.
- 2) Connect a USB cable from computer to MAX32625MBED board 'HDK' USB port. (Windows may require some time to install its device driver.) Expect the system to automatically mount the board as a new USB drive named MBED or DAPLINK or something similar. This is a special-purpose drive: firmware will be loaded into the board by copying the compiled binary into the board's drive. Don't write any other files to this drive.
- 3) Open your board's USB device folder and double click on its MBED.HTML file. On the board page, click Add to your Mbed Compiler. This adds your Mbed board to the Online Compiler as a compilation target. See https://os.mbed.com/docs/mbed-os/ v5.13/quick-start/index.html for more detailed instructions on using the online compiler.
- 4) In a web browser, navigate to https://os.mbed.com/teams/MaximIntegrated/ code/MAX11131BOB\_12bit\_16ch\_SampleSet\_ SPI\_ADC/ and click Import into Compiler. The mbed online IDE window opens, and prompts to import program. Click Import button to complete the import.
- 5) Compile the program. When complete, the online mbed IDE downloads the firmware file to your local downloads folder.

## 12-bit 3MSps 16-ch ADC

- 6) Locate the newly built firmware file MAX11131BOB\_12bit\_16ch\_SampleSet\_SPI\_ADC. MAX32625MBED.bin and copy the file to the board's MBED drive. (The names might not match exactly if using a platform other than MAX32625MBED, or if there is already a file with that name.) If a warning dialog appears asking to move this file without its properties, answer yes. After file copying is com -plete, press and release the board's RESET button to start the firmware. Connect input voltages to AIN inputs. Note: if nothing is connected to the analog inputs, the value may 'float' to an unspecified, arbi -trary value.
- 7) The program behavior can be changed by modifying the Hello\_MAX11131.cpp source code and repeating the compile-build-upload cycle from step 4.
- 8) You can discard your local changes and reset to the latest published firmware version as follows: Bring up the project **Revision** tab and right-click on the line that says 'default' 'tip'. In the popup context menu, select **Switch working copy to this revision…**. There will be a warning that there are uncommitted local changes in the working tree. Click **Discard**, and all of the local files will be reset to the published version.

## Procedure for Mbed: Serial Tester

The 'Serial Tester' program is an interactive, menu-driven test program which is controlled through a serial communications port, using a terminal emulator, supporting quick discovery  and  evaluation  of  device  features  for  testing functionality.

The Breakout Board is fully assembled and tested.

The  first  time  the  board  is  used,  the  MAX11131BOB firmware  must  be  loaded  into  the  MAX32625MBED,  or equivalent platform board. This firmware is stored on the MAX32625MBED board and remains after the board is powered off.

The serial tester firmware uses a USB serial port to communicate.

When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers.

## MAX11131 Breakout Board

Follow the steps below to verify board operation:

- 1) Connect the MAX11131BOB to the MAX32625MBED or equivalent mbed platform board using the standard pinout.
- 2) Connect a USB cable from computer to MAX32625MBED board 'HDK' USB port. (Windows may require some time to install its device driver.) Expect the system to automatically mount the board as a new USB drive named MBED or DAPLINK or something similar. This is a special-purpose drive: firmware will be loaded into the board by copying the compiled binary into the board's drive. Don't write any other files to this drive.
- 3) Open your board's USB device folder and double click on its MBED.HTML file. On the board page, click Add to your Mbed Compiler. This adds your Mbed board to the Online Compiler as a compilation target. See https://os.mbed.com/docs/mbed-os/ v5.13/quick-start/index.html for more detailed instructions on using the online compiler.
- 4) In a web browser, navigate to https://os.mbed.com/ teams/MaximIntegrated/code/MAX11131BOB\_Se-rial\_Tester/ and click Import into Compiler. The mbed online IDE window opens, and prompts to import program. Click Import button to complete the import.
- 5) Compile the program. When complete, the online mbed IDE downloads the firmware file to your local downloads folder.
- 6) Locate the newly built firmware file MAX11131BOB\_ Serial\_Tester.MAX32625MBED.bin and copy the file to the board's MBED drive. (The names might not match exactly if using a platform other than MAX32625MBED, or if there is already a file with that name.) If a warning dialog appears asking to move this file without its properties, answer yes.
- 7) Connect another, or the existing USB cable from computer to MAX32625MBED board 'DEV' USB port.
- 8) Unplug the USB HDK and plug USB into the DEV connector. Expect the LEDs in the lower right corner should flash briefly and then remain lit.

## 12-bit 3MSps 16-ch ADC

- 9) Locate the newly arrived USB Serial Device COM port, and use a serial terminal emulator (such as teraterm, realterm, picocom, minicom, or equivalent). Baud rate is 9600.

## Procedure for Arduino: Simplified Hello World

The 'Simplified Hello World' program is a small example program which can be changed by modifying the Hello\_ MAX11131.cpp source code and repeating the compilebuild-upload  cycle,  providing  straightforward  code  for easy adoption.

The Breakout Board is fully assembled and tested.

The  first  time  the  board  is  used,  the  MAX11131BOB firmware  must  be  loaded  into  the  Arduino  board.  This firmware is stored on the Arduino board and remains after the board is powered off.

The firmware uses a USB serial port to communicate.

When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers.

Follow the steps below to verify board operation:

- 1) Connect the MAX11131BOB to the Arduino board using the standard pinout.
- 2) Connect a USB cable from computer to Arduino board USB port. (Windows may require some time to install its device driver.)
- 3) [In a web browser, navigate to https://create. arduino.cc/editor/whismanoid/306bb65b-0c0640d3-9a3f-e2891102affc/preview and click 'Add to my Sketchbook'.](https://create.arduino.cc/editor/whismanoid/306bb65b-0c06-40d3-9a3f-e2891102affc/preview)
- 4) Connect USB cable to Arduino hardware. If this is your first time using Arduino Create online, you may be prompted to install Arduino Create Agent to connect with the hardware.
- 5) Compile the program with the 'Upload and Save' button.
- 6) Connect input voltages to AIN inputs. Note: if nothing is connected to the analog inputs, the value may 'float' to an unspecified, arbitrary value.
- 7) The program behavior can be changed by modifying the Hello\_MAX5715.cpp source code and repeating the compile-build-upload cycle.

## MAX11131 Breakout Board

## Procedure for Arduino: Serial Tester

The 'Serial Tester' program is an interactive, menu-driven test program which is controlled through a serial communications port, using a terminal emulator, supporting quick discovery  and  evaluation  of  device  features  for  testing functionality.

The Breakout Board is fully assembled and tested.

The  first  time  the  board  is  used,  the  MAX11131BOB firmware  must  be  loaded  into  the  Arduino  board.  This firmware is stored on the Arduino board and remains after the board is powered off.

The firmware uses a USB serial port to communicate.

When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers.

Follow the steps below to verify board operation:

- 1) Connect the MAX11131BOB to the Arduino board using the standard pinout.
- 2) Connect a USB cable from computer to Arduino board USB port. (Windows may require some time to install its device driver.)
- 3) [In a web browser, navigate to https://create.arduino.cc/ editor/whismanoid/08fe72c1-7e06-4264-ab3a-873aa466812f/ preview and click 'Add to my Sketchbook'.](https://create.arduino.cc/editor/whismanoid/08fe72c1-7e06-4264-ab3a-873aa466812f/preview)
- 4) Connect USB cable to Arduino hardware. If this is your first time using Arduino Create online, you may be prompted to install Arduino Create Agent to connect with the hardware.
- 5) Compile the program with the 'Upload and Save' button.
- 6) Locate the newly arrived USB Serial Device COM port, and use a serial terminal emulator (such as teraterm, realterm, picocom, minicom, or equivalent). Baud rate is 9600.

## Sending Commands with a Serial Console

A  serial  terminal  emulator  software  (such  as  teraterm, realterm,  putty,  picocom,  minicom,  or  equivalent)  must be installed to communicate with the example firmware. Various terminal programs connect in various ways and

## 12-bit 3MSps 16-ch ADC

have different user interfaces, but they all share a common set of basic features:

- Connecting to a specific serial port device by name, such as COM4 or /dev/ttyACM0
- Settings such as baud rate 9600, 8 bits / No parity / 1 Stop bit, no flow control
- Typing at the keyboard transmits to the firmware through the serial port
- Messages received from the firmware are displayed on the screen
- A special keyboard command or menu item exits the terminal program

See https://os.mbed.com/handbook/Terminals for more details.

More resources:

- [https://learn.sparkfun.com/tutorials/terminalbasics/tera-term-windows](https://learn.sparkfun.com/tutorials/terminal-basics/tera-term-windows)
- [https://learn.sparkfun.com/tutorials/terminalbasics/real-term-windows](https://learn.sparkfun.com/tutorials/terminal-basics/real-term-windows)
- [https://learn.sparkfun.com/tutorials/terminalbasics/yat---yet-another-terminal-windows](https://learn.sparkfun.com/tutorials/terminal-basics/yat---yet-another-terminal-windows)
- [https://learn.sparkfun.com/tutorials/terminalbasics/coolterm-windows-mac-linux](https://learn.sparkfun.com/tutorials/terminal-basics/coolterm-windows-mac-linux)
- [https://learn.adafruit.com/windows-tools-for-theelectrical-engineer/serial-terminal](https://learn.adafruit.com/windows-tools-for-the-electrical-engineer/serial-terminal)
- [https://www.putty.org/](https://www.putty.org/)

In  Windows™, install  a  terminal  emulator  such  as  teraterm,  realterm,  or  putty.  Find  the  serial  port  name  and COM port  number  in  Control  Panel  'View  devices  and printers'.  The  Mbed  board  will  appear  as  'USB  Serial Device' or 'mbed Serial Port'. See https://os.mbed.com/ handbook/Windows-serial-configuration  and  https:// os.mbed.com/docs/mbed-os/v5.11/tutorials/windowsserial-driver.html for  troubleshooting. Start the terminal emulator and use its menu to connect to the serial port that belongs to the board. Pressing ENTER displays the firmware's banner message (see example session).

In linux, install a terminal emulator such as minicom or picocom. For example, under Debian or Ubuntu linux, use sudo apt-get install picocom

```
In linux (Debian), find the serial port name as follows: # with the board not connected, get list of tty device names ls -1 /dev/tty* >dev_tty_baseline # now connect the device to USB and find the new tty device name (such as /dev/ttyACM0) ls -1 /dev/tty* | diff dev_tty_baseline -
```

The picocom terminal emulator runs from the tty console. The tty device name must be given on the command line when starting picocom. See man picocom for more details.

```
picocom /dev/ttyACM0 --baud 9600
```

Pressing ENTER displays the firmware's banner message (see example session). Pressing CTRL+A and then CTRL+X exits picocom.

## Example Serial Console Session

The firmware uses a USB serial port to communicate. Typing '?' prints a menu of supported device commands.

```
# Brief Example for MAX11131BOB Breakout Board Main menu MAX11131 12-bit 3MSps 16-ch ADC MAX32625 [microUSB] ? -- help MAX11131 > ? Main menu MAX11131 12-bit 3MSps 16-ch ADC MAX32625 [microUSB] ? -- help # -- lines beginning with # are comments . -- SelfTest %Hn {pin: 0 1 3 4 5 6 7 8 14 15 16 17} -- High Output %Ln {pin: 0 1 3 4 5 6 7 8 14 15 16 17} -- Low Output %?n {pin: 0 1 3 4 5 6 7 8 14 15 16 17} -- Input %A -- analogRead %D -- DAC output MAX541 (SPI2) %SC SCLK=12000000=12.000MHz CPOL=1 CPHA=1 -- SPI config %SW mosi,mosi,...mosi -- SPI write hex bytes 0 n=? -- MAX11131_ScanRead 1 ch=? pm=? id=? -- MAX11131_ScanManual 2 ch=? av=? n=? pm=? swcnv=? -- MAX11131_ScanRepeat 3 ch=? av=? pm=? swcnv=? -- MAX11131_ScanStandardIntClock 4 ch=? pm=? id=? -- MAX11131_ScanStandardExtClock 5 ch=? av=? pm=? swcnv=? -- MAX11131_ScanUpperIntClock 6 ch=? pm=? id=? -- MAX11131_ScanUpperExtClock 7 enableMask=0xffff av=? pm=? swcnv=? -- MAX11131_ScanCustomIntClock 8 enableMask=0xffff pm=0 id=1 -- MAX11131_ScanCustomExtClock 9 channelsPattern... pm=? id=? | len=? -- MAX11131_ScanSampleSetExtClock @ -- print MAX11131 configuration
```

│

```
ISc) IUc) IBc) IRc) reconfigure channel single-ended/unipolar/bipolar/range MAX11131 > # Main menu MAX11131 12-bit 3MSps 16-ch ADC MAX32625 [microUSB] ? -- help MAX11131 > # 1: ScanManual on channel 3 with channel id tag Main menu MAX11131 12-bit 3MSps 16-ch ADC MAX32625 [microUSB] ? -- help MAX11131 > 1 ch=3 pm=0 id=1 ScanManual ch=3 pm=0 id=1 ScanRead_nWords_chanID nWords=1 MAX11131.MISO[0]=0x3f38: ch=3 xu=3896 = 0x0f38 = 2.3779V MAX11131 > # 0: read more Main menu MAX11131 12-bit 3MSps 16-ch ADC MAX32625 [microUSB] ? -- help MAX11131 > 0 n=5 ScanRead NumWords=5 External ClockScanRead_nWords_chanID nWords=5 MAX11131.MISO[0]=0x3e6c: ch=3 xu=3692 = 0x0e6c = 2.2534V MAX11131.MISO[1]=0x3e4c: ch=3 xu=3660 = 0x0e4c = 2.2339V MAX11131.MISO[2]=0x3e2c: ch=3 xu=3628 = 0x0e2c = 2.2144V MAX11131.MISO[3]=0x3e0c: ch=3 xu=3596 = 0x0e0c = 2.1948V MAX11131.MISO[4]=0x3dec: ch=3 xu=3564 = 0x0dec = 2.1753V MAX11131 > # Main menu MAX11131 12-bit 3MSps 16-ch ADC MAX32625 [microUSB] ? -- help MAX11131 > # 9: ScanSampleSetExternalClock expect ch=2,3,5,7,9,11,7,2,5 Main menu MAX11131 12-bit 3MSps 16-ch ADC MAX32625 [microUSB] ? -- help MAX11131 > 9 2 3 5 7 9 11 7 2 5 pm=0 id=1 ScanSampleSetExternalClock enabledChannelsPattern:{ AIN2 AIN3 AIN5 AIN7 AIN9 AIN11 AIN7 AIN2 AIN5 AIN0 AIN1 } pm=0 id=1 ScanRead_nWords_chanID nWords=11 MAX11131.MISO[0]=0x28f9: ch=2 xu=2297 = 0x08f9 = 1.4020V MAX11131.MISO[1]=0x3df9: ch=3 xu=3577 = 0x0df9 = 2.1832V MAX11131.MISO[2]=0x5fff: ch=5 xu=4095 = 0x0fff = 2.4994V MAX11131.MISO[3]=0x7d50: ch=7 xu=3408 = 0x0d50 = 2.0801V MAX11131.MISO[4]=0x9b2a: ch=9 xu=2858 = 0x0b2a = 1.7444V MAX11131.MISO[5]=0xbfff: ch=11 xu=4095 = 0x0fff = 2.4994V MAX11131.MISO[6]=0x7d3e: ch=7 xu=3390 = 0x0d3e = 2.0691V MAX11131.MISO[7]=0x28ef: ch=2 xu=2287 = 0x08ef = 1.3959V
```

│

```
MAX11131.MISO[8]=0x5fff: ch=5 xu=4095 = 0x0fff = 2.4994V MAX11131.MISO[9]=0x0660: ch=0 xu=1632 = 0x0660 = 0.9961V MAX11131.MISO[10]=0x1734: ch=1 xu=1844 = 0x0734 = 1.1255V MAX11131 > # @: print MAX11311 configuration Main menu MAX11131 12-bit 3MSps 16-ch ADC MAX32625 [microUSB] ? -- help MAX11131 > @ 0x4824 ADC_MODE_CONTROL SCAN_1001_SampleSetExt RESET=1 CHANID=1 0x8000 ADC_CONFIGURATION 0x8800 UNIPOLAR 0x0000 0x9000 BIPOLAR  0x0000 0x9800 RANGE    0x0000 0xa650 CSCAN0 0x00ca 0xaff0 CSCAN1 0x00fe 0xb050 SAMPLESET SEQ_LENGTH[7:0]=0x000a so length=11 channels 0x2357 SampleSet Entry: AIN2 AIN3 AIN5 AIN7 0x9b72 SampleSet Entry: AIN9 AIN11 AIN7 AIN2 0x5010 SampleSet Entry: AIN5 AIN0 AIN1 AIN0 SPI_MOSI_Semantic=0 NumWords=11 isExternalClock=1 ScanMode=9 channelNumber_0_15=3 PowerManagement_0_2=0 chan_id_0_1=1 average_0_4_8_16_32=0 nscan_4_8_12_16=0 swcnv_0_1=0 enabledChannelsMask=0xcafe VRef=2.500V MAX11131 > # 0: read more Main menu MAX11131 12-bit 3MSps 16-ch ADC MAX32625 [microUSB] ? -- help MAX11131 > 0 n=10
```

│

```
ScanRead NumWords=16 External ClockScanRead_nWords_chanID nWords=16 MAX11131.MISO[0]=0x2901: ch=2 xu=2305 = 0x0901 = 1.4069V MAX11131.MISO[1]=0x3e48: ch=3 xu=3656 = 0x0e48 = 2.2314V MAX11131.MISO[2]=0x5fff: ch=5 xu=4095 = 0x0fff = 2.4994V MAX11131.MISO[3]=0x7d4a: ch=7 xu=3402 = 0x0d4a = 2.0764V MAX11131.MISO[4]=0x9aa4: ch=9 xu=2724 = 0x0aa4 = 1.6626V MAX11131.MISO[5]=0xbfff: ch=11 xu=4095 = 0x0fff = 2.4994V MAX11131.MISO[6]=0x7d33: ch=7 xu=3379 = 0x0d33 = 2.0624V MAX11131.MISO[7]=0x28f7: ch=2 xu=2295 = 0x08f7 = 1.4008V MAX11131.MISO[8]=0x5fff: ch=5 xu=4095 = 0x0fff = 2.4994V MAX11131.MISO[9]=0x065f: ch=0 xu=1631 = 0x065f = 0.9955V MAX11131.MISO[10]=0x1736: ch=1 xu=1846 = 0x0736 = 1.1267V MAX11131.MISO[11]=0x28dd: ch=2 xu=2269 = 0x08dd = 1.3849V MAX11131.MISO[12]=0x3e1b: ch=3 xu=3611 = 0x0e1b = 2.2040V MAX11131.MISO[13]=0x5fff: ch=5 xu=4095 = 0x0fff = 2.4994V MAX11131.MISO[14]=0x7d2f: ch=7 xu=3375 = 0x0d2f = 2.0599V MAX11131.MISO[15]=0x9a92: ch=9 xu=2706 = 0x0a92 = 1.6516V MAX11131 >
```

│

## MAX11131 Breakout Board

## Detailed Description of Hardware

The MAX11131 is a 12-bit, 3Msps, 16-channel, ADC with SampleSet.  Connect  analog  inputs  to  the  AIN0..AIN15 header pins. (The first 6 analog inputs are also connected to the standard Arduino analog pins on the external connector.)  The  MAX6126  provides  the  2.5V  analog  reference voltage. The MAX8511 provides a low-dropout 3.3V supply.  The  MAX14850  digital  isolator  translates  the external logic signals in the range of 3.0V to 5.5V for use with  the  MAX11131's 3.3V supply. For more information on these products, please visit:

- [https://www.maximintegrated.com/max11131](https://www.maximintegrated.com/max11131)
- [https://www.maximintegrated.com/max6126](https://www.maximintegrated.com/max6126)
- [https://www.maximintegrated.com/max8511](https://www.maximintegrated.com/max8511)
- [https://www.maximintegrated.com/max14850](https://www.maximintegrated.com/max14850)

## Table 1. Jumper Functions

| JUMPER   | STATE   | FUNCTION                                                                      |
|----------|---------|-------------------------------------------------------------------------------|
| J2       | 1-2*    | Analog input AIN0 connects to Arduino pin A0                                  |
| J3       | 1-2*    | Analog input AIN1 connects to Arduino pin A1                                  |
| J4       | 1-2*    | Analog input AIN2 connects to Arduino pin A2                                  |
| J5       | 1-2*    | Analog input AIN3 connects to Arduino pin A3                                  |
| J6       | 1-2*    | Analog input AIN4 connects to Arduino pin A4                                  |
| J7       | 1-2*    | Analog input AIN5 connects to Arduino pin A5                                  |
| J16      | 1-2*    | Analog input pin AIN14 is used for CNVST conversion start command             |
| J15      | 1-2*    | Analog input pin AIN15 is used for REF(-) reference negative input            |
| J8       | 1-2*    | Analog reference input REF(+) is driven by on-board +2.5V reference (MAX6126) |
| J13      | 1-2*    | VDD supply is provided by on-board +3.3V regulator (MAX8511)                  |
| J1       | 1-2*    | OVDD supply is provided by on-board +3.3V regulator (MAX8511)                 |
| J14      | 1-2*    | 2.5V reference force/sense connection point                                   |
| J17      | 1-2*    | MAX14850 GNDA-GNDB connection point                                           |

*Default

## Ordering Information

| PART         | TYPE           |
|--------------|----------------|
| MAX11131BOB# | Breakout Board |

#Denotes RoHS compliant.

## Using AIN14

Analog  input  pin  CNVST/AIN14  is  initially  configured  to support conversion-start command CNVST. To configure the  board  to  use  CNVST/AIN14  for  analog  input,  cut jumper J16 and apply analog input at header H2.

## Using AIN15

Analog input pin REF-/AIN15 is initially configured to support REF-. To configure the board to use REF-/AIN15 for analog input,  cut  jumper  J15  and  apply  analog  input  at header H2.

## 12-bit 3MSps 16-ch ADC

│

## MAX11131 Breakout Board Bill of Materials

| ITEM   | REF_DES                  | DNI/DNP   |   QTY | MFG PART #                                                                                                  | MANUFACTURER                             | VALUE                                                    | DESCRIPTION                                                                                                                          | COMMENTS   |
|--------|--------------------------|-----------|-------|-------------------------------------------------------------------------------------------------------------|------------------------------------------|----------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|------------|
| 1      | C1, C5                   | -         |     2 | C0603C105K4RAC;GRM188R71C105KA12; C1608X7R1C105K080AC;EMK107B7105KA; GCM188R71C105KA64;CGA3E1X7R1C105K080AC | KEMET;MURATA;TDK; TAIYO YUDEN;MURATA;TDK | 1UF                                                      | CAPACITOR; SMT (0603); CERAMIC CHIP;1UF; 16V; TOL=10%; MODEL=; TG=-55 DEGC TO +125 DEGC; TC=X7R                                      |            |
| 2      | C2-C4, C6, C7, C10, C19  | -         |     7 | CC0603KRX7R0BB104;GRM188R72A104KA35; GCJ188R72A104KA01;HMK107B7104KA; 06031C104KAT2A                        | YAGEO;MURATA;MURATA; TAIYO YUDEN;AVX     | 0.1UF                                                    | CAPACITOR; SMT (0603); CERAMIC CHIP; 0.1UF; 100V; TOL=10%; TG=-55 DEGC TO +125 DEGC; TC=X7R                                          |            |
| 3      | C8, C9, C11-C18, C20-C25 | -         |    16 | C0603C102K1GAC                                                                                              | KEMET                                    | 1000PF                                                   | CAPACITOR; SMT (0603); CERAMIC CHIP; 1000PF; 100V; TOL=10%; MODEL=C0G; TG=-55 DEGC TO +125 DEGC; TC=                                 |            |
| 4      | GND                      | -         |     1 | 5001                                                                                                        | KEYSTONE                                 | N/A                                                      | TEST POINT; PIN DIA=0.1IN; TOTAL LENGTH=0.3IN; BOARD HOLE=0.04IN; BLACK; PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;                   |            |
| 5      | H1-H4                    | -         |     4 | PEC07SAAN                                                                                                   | SULLINS ELECTRONICS CORP.                | PEC07SAAN                                                | CONNECTOR; MALE; THROUGH HOLE; BREAKAWAY; STRAIGHT; 7PINS; -65 DEGC TO +125 DEGC                                                     |            |
| 6      | J9                       | -         |     1 | SSQ-106-03-G-S                                                                                              | SAMTEC                                   | SSQ-106-03-G-S                                           | CONNECTOR; MALE; THROUGH HOLE; THROUGH-HOLE .025 SQ POST SOCKET; STRAIGHT; 6PINS                                                     |            |
| 7      | J10, J12                 | -         |     2 | SSQ-108-03-G-S                                                                                              | SAMTEC                                   | SSQ-108-03-G-S                                           | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS                                                              |            |
| 8      | J11                      | -         |     1 | SSQ-110-03-G-S                                                                                              | SAMTEC                                   | SSQ-110-03-G-S                                           | CONNECTOR; FEMALE; THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS                                                             |            |
| 9      | J21                      | -         |     1 | TSW-106-08-S-D-RA                                                                                           | SAMTEC                                   | TSW-106-08-S-D-RA                                        | CONNECTOR; THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS                                                                             |            |
| 10     | R1-R16                   | -         |    16 | CRCW060310R0FK; MCR03EZPFX10R0; ERJ-3EKF10R0                                                                | VISHAY DALE;ROHM                         | 10 RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM | 10 RESISTOR; 0603; 10 OHM; 1%; 100PPM; 0.10W; THICK FILM                                                                             |            |
| 11     | R17, R18                 | -         |     2 | CRCW06031K00FK;ERJ-3EKF1001                                                                                 | VISHAY DALE;PANASONIC                    | 1K                                                       | RESISTOR; 0603; 1K; 1%; 100PPM; 0.10W; THICK FILM                                                                                    |            |
| 12     | U1                       | -         |     1 | MAX11131ATI+                                                                                                | MAXIM                                    | MAX11131ATI+                                             | IC; ADC; 3MSPS; LOW-POWER; SERIAL 12-BIT; 16-CHANNEL ADCS; TQFN28-EP                                                                 |            |
| 13     | U2                       | -         |     1 | MAX8511EXK33+                                                                                               | MAXIM                                    | MAX8511EXK33                                             | IC; VREG; ULTRA-LOW-NOISE, HIGH PSRR, LOW-DROPOUT, LINEAR REGULATOR; SC70-5 ; -40 DEGC TO +85 DEGC                                   |            |
| 14     | U3                       | -         |     1 | MAX14850ASE+                                                                                                | MAXIM                                    | MAX14850ASE+                                             | IC; DISO; SIX CHANNEL DIGITAL ISOLATOR; NSOIC16 150MIL; -40 DEGC TO +125 DEGC                                                        |            |
| 15     | U4                       | -         |     1 | MAX6126AASA25+                                                                                              | MAXIM                                    | MAX6126AASA25                                            | IC; SERIES VOLTAGE REFERENCE; ULTRA HIGH PRECISION; ULTRA LOW NOISE VOLTAGE REFERENCE; SOIC8 150MIL; Vout=2.5V, 3ppm/degC max TEMPCO |            |
| 16     | PCB                      | -         |     1 | 11131_BREAKOUT_DEMO_A                                                                                       | MAXIM                                    | PCB                                                      | PCB:11131_BREAKOUT_DEMO_A                                                                                                            | -          |
| TOTAL  |                          |           |    58 |                                                                                                             |                                          |                                                          |                                                                                                                                      |            |

## MAX11131 Breakout Board Schematics

<!-- image -->

## MAX11131 Breakout Board

## MAX11131 PCB Layout Diagrams

MAX11131 EV Kit Component Placement Guide-Silk\_Top

<!-- image -->

MAX11131 EV Kit PCB Layout-Top

<!-- image -->

## 12-bit 3MSps 16-ch ADC

MAX11131 EV Kit PCB Layout-Internal2

<!-- image -->

MAX11131 EV Kit PCB Layout-Internal3

<!-- image -->

│

## MAX11131 PCB Layout Diagrams (continued)

MAX11131 EV Kit PCB Layout-Bottom

<!-- image -->

MAX11131 EV Kit Component Placement Guide-Silk\_Bot

<!-- image -->

│

## MAX11131 Breakout Board

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 12/19           | Initial release | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│