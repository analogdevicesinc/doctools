<!-- lastmod 2022-08-03 -->
## MAX5171 Breakout Board

## General Description

Digital-to-analog  converters  (DACs)  provide  accurate output  voltages  for  actuation  and  control  in  many  electronic applications such as industrial, medical and RF systems. The MAX5171 is a highly accurate, 14-bit voltage output DAC. Development with DACs involves expertise in analog systems, power supplies, digital interfaces, and firmware. Now, accelerate the development process using the MAX5171 breakout board.

This  breakout  board  provides  rapid  prototyping  and development with the MAX5171 (a 14-bit, voltage-output DAC). It interfaces to any Arduino™-compatible or Mbedcompatible platform system with expansion ports configu -rable  for  SPI  communication. Additionally,  the  MAX5171 breakout board works with systems that have a Pmod™ connection, a 2x6 right-angle header at board edge (compatible with Digilentinc.com Pmod interface spec) interface type  2A  (expanded  SPI)  on  2x6  header  at  board  edge. The breakout board also comes with schematics, design files, and firmware for immediate use and forking to future projects.

## MAX5171 Breakout Board Photo

<!-- image -->

Pmod is a trademark of Digilent, Inc. Arduino is a trademark of Arduino AG.

Arm is a registered trademark and Mbed is a trademark of Arm Limited (or its subsidiaries) in the US and/or elsewhere.

<!-- image -->

## 14-Bit Force/Sense DAC

The board directly interfaces to SPI with logic levels in the range 2.7V to 5.5V. ( Note: The MAX5171 is specified for 4.5V to 5.5V operation, and the pin-compatible MAX5173 is specified for 2.7V to 3.6V operation.)

The board comes installed with MAX5171AEEE+ installed. Example firmware is provided for Arduino and Mbed system boards.

## Tested with:

- [MAX32625MBED# https://os.mbed.com/platforms/MAX32625MBED/](https://os.mbed.com/platforms/MAX32625MBED/)
- [MAX32600MBED# https://os.mbed.com/platforms/MAX32600MBED/](https://os.mbed.com/platforms/MAX32600MBED/)
- [STM32F446 Nucleo-64 https://os.mbed.com/platforms/ST-Nucleo-F446RE/](https://os.mbed.com/platforms/ST-Nucleo-F446RE/)
- [Arduino UNO (rev 3) https://store.arduino.cc/usa/arduino-uno-rev3/](https://store.arduino.cc/usa/arduino-uno-rev3/)
- Adafruit Metro 328 Arduino compatible (USB micro B) https://www.adafruit.com/product/50
- [Arduino Pro Mini 3.3V/8MHz https://store.arduino.cc/usa/arduino-pro-mini/](https://store.arduino.cc/usa/arduino-pro-mini/)

Ordering Information appears at end of data sheet.

## MAX5171 Breakout Board Pinout

<!-- image -->

│

## MAX5171 Breakout Board

## Quick Start

## Required Equipment

- MAX5171BOB# breakout board
- Appropriate Mbed or Arduino board
- The following procedures describe the Quick Start process with the MAX32625MBED# and the Arduino UNO
- Computer with USB and web access
- A serial terminal emulator software such as teraterm, realterm, picocom, minicom, or equivalent

The  following  procedures  describe  the  Quick  Start process with the MAX32625MBED# and the Arduino. The MAX5171 breakout board has been tested on the platform boards listed above.

There are two example programs for each platform:

- The Simplified Hello World program is a small example  program  that  can  be  changed  by  modifying  the Hello\_MAX5171.cpp  source  code  and  repeating  the compile-build-upload  cycle,  providing  straightforward code for easy adoption.
- The  Serial  Tester  program  is  an  interactive,  menudriven test program that is controlled through a serial communications port, using a terminal emulator, supporting quick discovery and evaluation of device features for testing functionality.

## Procedure for Mbed: Simplified Hello World

The  Simplified  Hello  World  program  is  a  small  example  program  that  can  be  changed  by  modifying  the Hello\_MAX5171.cpp  source  code  and  repeating  the compile-build-upload cycle, providing straightforward code for easy adoption.

The MAX5171 breakout board is fully assembled and tested.

The first time the board is used, the MAX5171 breakout board firmware must be loaded into the MAX32625MBED, or equivalent platform board. This firmware is stored on the MAX32625MBED board and remains after the board is powered off.

When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers.

Follow the steps below to verify board operation:

- 1) Connect the MAX5171 breakout board to the MAX32625MBED or equivalent Mbed platform board using the standard pinout.

## 14-Bit Force/Sense DAC

- 2) Connect a USB cable from the computer to the MAX32625MBED board HDK USB port. (Windows® may require some time to install its device driver.) Expect the system to automatically mount the board as a new USB drive named MBED, DAPLINK, or something similar. This is a special-purpose drive: firmware is loaded into the board by copying the compiled binary into the board's drive. Do not write any other files to this drive.
- 3) Open the board's USB device folder and double click on its MBED.HTML file. On the board page, click Add to the Mbed compiler. This adds the Mbed board to the online compiler as a compilation target. See https://os.mbed.com/docs/mbed-os/v5.13/ quick-start/index.html for more detailed instructions on using the online compiler.
- 4) In a web browser, navigate to https:// os.mbed.com/teams/MaximIntegrated/code/ MAX5171BOB\_14bit\_Remote\_Sense\_SPI\_DAC/ and click Import into Compiler . The Mbed online IDE window opens and prompts to Import the program. Click the Import button to complete the import.
- 5) Compile the program. When complete, the online Mbed IDE downloads the firmware file to your local Downloads folder.
- 6) Locate the newly built firmware file MAX5171BOB\_14bit\_Remote\_Sense\_SPI\_DAC. MAX32625MBED.bin and copy the file to the board's Mbed drive. (The names might not match exactly if using a platform other than the MAX32625MBED, or if there is already a file with that name.) If a warning dialog appears asking to move this file without its properties, click Yes . After file copying is complete, press and release the board's Reset button to start the firmware. Use a DVM to measure the voltages on the MAX5171 breakout board.
- 7) Change the program behavior by modifying the Hello\_MAX5171.cpp source code and repeating the compile-build-upload cycle from step 4.

Discard local changes and reset to the latest published firmware version as follows: Bring up the project Revision tab  and  right-click  on  the  line  that  says  default  tip.  In the  popup  context  menu,  select Switch  working  copy to  this  revision… .  A  warning  indicating  that  there  are uncommitted local changes in the working tree appears. Click Discard ,  and  all  of  the  local  files  are  reset  to  the published version.

Windows is the registered trademarks and registered service mark of Microsoft Corporation.

## MAX5171 Breakout Board

## Procedure for Mbed: Serial Tester

The Serial Tester program is an interactive, menu-driven test program that is controlled through a serial communications port, using a terminal emulator, supporting quick discovery,  and  evaluation  of  device  features  for  testing functionality.

The MAX5171 breakout board is fully assembled and tested.

The first time the board is used, the MAX5171 breakout board firmware must be loaded into the MAX32625MBED, or equivalent platform board. This firmware is stored on the MAX32625MBED board and remains after the board is powered off.

The  serial  tester  firmware  uses  a  USB  serial  port  to communicate.

When the board is plugged into the USB port for the first time, the computer may need about a minute to install its device drivers.

Follow the steps below to verify board operation:

- 1) Connect the MAX5171 breakout board to the MAX32625MBED or equivalent Mbed platform board using the standard pinout.
- 2) Connect a USB cable from computer to MAX32625MBED board HDK USB port. (Windows may require some time to install its device driver.) Expect the system to automatically mount the board as a new USB drive named MBED, DAPLINK, or something similar. This is a special-purpose drive: firmware is loaded into the board by copying the compiled binary into the board's drive. Do not write any other files to this drive.
- 3) Open the board's USB device folder and double click on its MBED.HTML file. On the board page, click Add to the Mbed compiler. This adds the Mbed board to the online compiler as a compilation target. See https://os.mbed.com/docs/mbed-os/v5.13/ quick-start/index.html for more detailed instructions on using the online compiler.
- 4) In a web browser, navigate to https://os.mbed.com/ teams/MaximIntegrated/code/MAX5171BOB\_ Serial\_Tester/ and click Import into Compiler . The Mbed online IDE window opens and prompts to import program. Click the Import button to complete the import.
- 5) Compile the program. When complete, the online Mbed IDE downloads the firmware file to your local Downloads folder.
- 6) Locate the newly built firmware file MAX5171BOB\_ Serial\_Tester.MAX32625MBED.bin and copy the file to the board's Mbed drive. (The names might not match exactly if using a platform other than MAX32625MBED, or if there is already a file with that name.) If a warning dialog appears asking to move this file without its properties, click Yes .
- 7) Connect another, or the existing USB cable from computer to the MAX32625MBED board DEV USB port. Expect the LEDs in the lower-right corner to flash briefly and then remain illuminated.
- 8) Locate the newly installed USB serial device COM port. Use a serial terminal emulator (such as teraterm, realterm, picocom, minicom, or equivalent). Baud rate is 9600.

## Procedure for Arduino: Simplified Hello World

The Simplified Hello World program is a small example program  that  can  be  changed  by  modifying  the  Hello\_ MAX5171.cpp  source  code  and  repeating  the  compilebuild-upload  cycle,  providing  straightforward  code  for easy adoption.

The MAX5171 breakout board is fully assembled and tested.

Note  if  used  with  classic  Arduino  UNO,  which  has  fullsized USB type B connector, ensure that the shield of the USB connector does not come into contact with the underside of the breakout board/Arduino shield.

The first time the board is used, the MAX5171 breakout board firmware must be loaded into the  Arduino board. This firmware is stored on the Arduino board and remains after the board is powered off.

The firmware uses a USB serial port to communicate.

When the board is plugged into the USB port for the first time, the computer may need about a minute to install its device drivers.

Follow these steps to verify board operation:

- 1) Connect the MAX5171 breakout board to the Arduino board using the standard pinout.
- 2) Connect a USB cable from the computer to the Arduino board USB port. (Windows may require some time to install its device driver.)
- 3) [In a web browser, navigate to https://create.arduino.cc/editor/whismanoid/10d1ee33-1599-4c0aaeec-6d4be4091929/preview and click Add to my Sketchbook .](https://create.arduino.cc/editor/whismanoid/10d1ee33-1599-4c0a-aeec-6d4be4091929/preview)

Windows is the registered trademarks and registered service mark of Microsoft Corporation.

## MAX5171 Breakout Board

- 4) Connect the USB cable to the Arduino hardware. If this is the first time using Arduino Create online, a prompted to install Arduino Create Agent to connect with the hardware.
- 5) Compile the program using the Upload and Save button.
- 6) Change the program behavior by modifying the Hello\_MAX5171.cpp source code and repeating the compile-build-upload cycle.

## Procedure for Arduino: Serial Tester

The Serial Tester program is an interactive, menu-driven test program that is controlled through a serial communications port, using a terminal emulator, supporting quick discovery  and  evaluation  of  device  features  for  testing functionality.

The MAX5171 breakout board is fully assembled and tested.

Note  if  used  with  classic  Arduino  UNO,  which  has  fullsized USB type B connector, ensure that the shield of the USB connector does not come into contact with the underside of the breakout board/Arduino shield.

The first time the board is used, the MAX5171 breakout board  firmware  must  be  loaded  into  the Arduino  board. This firmware is stored on the Arduino board and remains after the board is powered off.

The firmware uses a USB serial port to communicate.

When the board is plugged into USB the first time, the computer may need about a minute to install its device drivers.

Follow these steps to verify board operation:

- 1) Connect the MAX5171 breakout board to the Arduino board using the standard pinout.
- 2) Connect a USB cable from computer to Arduino board USB port. (Windows may require some time to install its device driver.)
- 3) [In a web browser, navigate to https://create. arduino.cc/editor/whismanoid/8ed60c93-04d24b08-b2ab-7289dade5f8c/preview and click Add to my Sketchbook .](https://create.arduino.cc/editor/whismanoid/8ed60c93-04d2-4b08-b2ab-7289dade5f8c/preview)
- 4) Connect the USB cable to the Arduino hardware. If this is the first time using Arduino Create online, you may be prompted to install Arduino Create Agent to connect with the hardware.
- 5) Compile the program with the Upload and Save button.
- 6) Locate the newly installed USB serial device COM port, and use a serial terminal emulator (such as teraterm, realterm, picocom, minicom, or equivalent). Baud rate is 9600.

## Sending Commands with a Serial Console

A  serial  terminal  emulator  software  (such  as  teraterm, realterm, putty, picocom, minicom, or equivalent) must be installed to communicate with the example firmware. Various terminal programs connect in various ways and have different user interfaces, but they all share a common set of basic features:

- Connecting to a specific serial port device by name, such as COM4 or /dev/ttyACM0
- Settings  such  as  baud  rate  9600,  8  bits/no  parity/1 stop bit, no flow control
- Typing  with  the  keyboard  transmits  to  the  firmware through the serial port
- Messages received from the firmware  are  displayed on the screen
- A special keyboard command or menu item exits the terminal program

See https://os.mbed.com/handbook/Terminals for more details.

More resources:

- [https://learn.sparkfun.com/tutorials/terminalbasics/tera-term-windows](https://learn.sparkfun.com/tutorials/terminal-basics/tera-term-windows)
- [https://learn.sparkfun.com/tutorials/terminalbasics/real-term-windows](https://learn.sparkfun.com/tutorials/terminal-basics/real-term-windows)
- [https://learn.sparkfun.com/tutorials/terminalbasics/yat---yet-another-terminal-windows](https://learn.sparkfun.com/tutorials/terminal-basics/yat---yet-another-terminal-windows)
- [https://learn.sparkfun.com/tutorials/terminalbasics/coolterm-windows-mac-linux](https://learn.sparkfun.com/tutorials/terminal-basics/coolterm-windows-mac-linux)
- [https://learn.adafruit.com/windows-tools-for-theelectrical-engineer/serial-terminal](https://learn.adafruit.com/windows-tools-for-the-electrical-engineer/serial-terminal)
- [https://www.putty.org/](https://www.putty.org/)

In Windows, install a terminal emulator such as teraterm, realterm, or putty. Find the serial port name and COM port number in Control Panel | View devices and printers . The Mbed board appears as a USB Serial Device or mbed Serial  Port .  Refer  to https://os.mbed.com/handbook/ Windows-serial-configuration and https://os.mbed. com/docs/mbed-os/v5.11/tutorials/windows-serialdriver.html for troubleshooting. Start the terminal emulator and use its menu to connect to the serial port that belongs to the board. Pressing Enter displays the firmware's banner message. See the Example Serial Console Session section.

In  linux,  install  a  terminal  emulator  such  as  minicom  or picocom. For example, under Debian or Ubuntu linux, use

sudo apt-get install picocom In linux (Debian), find the serial port name as follows:

```
# with the board not connected, get list of tty device names ls -1 /dev/tty* >dev_tty_baseline # now connect the device to USB and find the new tty device name (such as /dev/ttyACM0) ls -1 /dev/tty* | diff dev_tty_baseline -
```

The picocom terminal emulator runs from the tty console. The tty device name must be given on the command line when starting picocom. See man picocom for more details.

```
picocom /dev/ttyACM0 --baud 9600
```

Pressing Enter displays the firmware's banner message (see example session). Pressing Ctrl+A and then Ctrl+X exits picocom.

## Example Serial Console Session

The firmware uses a USB serial port to communicate. Typing ? prints a menu of supported device commands.

```
<PRE> Main menu MAX5171 14-bit Force/Sense DAC [serial] ? -- help MAX5171 > # Example for MAX5171 Breakout Board Main menu MAX5171 14-bit Force/Sense DAC [serial] ? -- help MAX5171 > ? Main menu MAX5171 14-bit Force/Sense DAC [serial] ? -- help # -- lines beginning with # are comments . -- SelfTest %Hn {pin: 0 1 2 3 4 5 6 7 8 9 14 15 16 17} -- High Output %Ln {pin: 0 1 2 3 4 5 6 7 8 9 14 15 16 17} -- Low Output %?n {pin: 0 1 2 3 4 5 6 7 8 9 14 15 16 17} -- Input %A -- analogRead %SC SCLK=24000000=24.000MHz CPOL=0 CPHA=0 -- SPI config %SD -- SPI diagnostic messages hide %SW mosi,mosi,...mosi -- SPI write hex bytes A-Z,a-z,0-9 -- reserved for application use ! -- Init 0 code=? -- CODE 4 code=? -- CODE_LOAD 8 -- LOAD c -- NOP d -- SHUTDOWN e0 -- UPO_LOW e8 -- UPO_HIGH f0 -- MODE1_DOUT_SCLK_RISING_EDGE f8 -- MODE0_DOUT_SCLK_FALLING_EDGE @ -- print MAX5171 configuration MAX5171 > # send 4 CODE_LOAD code=0x3fff expect AIN0(AIN4)=full scale 2.5V Main menu MAX5171 14-bit Force/Sense DAC [serial] ? -- help
```

│

## MAX5171 Breakout Board

```
MAX5171 > 4 code=0x3fff CODE_LOAD dacCodeLsbs=16383 SPI MOSI-> 0x7F 0xFF MISO<- 0x00 0x00  =1 MAX5171 > # send 4 CODE_LOAD code=0x0000 expect AIN0(AIN4)=zero scale 0V Main menu MAX5171 14-bit Force/Sense DAC [serial] ? -- help MAX5171 > 4 code=0x0000 CODE_LOAD dacCodeLsbs=0 SPI MOSI-> 0x40 0x00 MISO<- 0x7F 0xFF  =1 MAX5171 > # send 4 CODE_LOAD code=0x1fff expect AIN0(AIN4)=mid scale 1.25V Main menu MAX5171 14-bit Force/Sense DAC [serial] ? -- help MAX5171 > 4 code=0x1fff CODE_LOAD dacCodeLsbs=8191 SPI MOSI-> 0x5F 0xFF MISO<- 0x40 0x00  =1 MAX5171 > # send e8 UPO_HIGH expect input D2=1 Main menu MAX5171 14-bit Force/Sense DAC [serial] ? -- help MAX5171 > e8 UPO_HIGH SPI MOSI-> 0xE8 0x00 MISO<- 0x5F 0xFF  =1 MAX5171 > # send e0 UPO_LOW expect input D2=0 Main menu MAX5171 14-bit Force/Sense DAC [serial] ? -- help MAX5171 > e0 UPO_LOW SPI MOSI-> 0xE0 0x00 MISO<- 0xE8 0x00  =1 MAX5171 > . SelfTest() VRef = 2.500  MAX5171 14-bit LSB = 0.00015V +PASS MAX5171.DACCodeOfVoltage(2.4998V) expect 16383 +PASS MAX5171.DACCodeOfVoltage(2.4997V) expect 16382 +PASS MAX5171.DACCodeOfVoltage(2.4995V) expect 16381 +PASS MAX5171.DACCodeOfVoltage(2.4994V) expect 16380 +PASS MAX5171.DACCodeOfVoltage(1.2502V) expect 8193 +PASS MAX5171.DACCodeOfVoltage(1.2500V) expect 8192 +PASS MAX5171.DACCodeOfVoltage(1.2498V) expect 8191 +PASS MAX5171.DACCodeOfVoltage(1.2497V) expect 8190 +PASS MAX5171.DACCodeOfVoltage(0.0005V) expect 3 +PASS MAX5171.DACCodeOfVoltage(0.0003V) expect 2 +PASS MAX5171.DACCodeOfVoltage(0.0002V) expect 1 +PASS MAX5171.DACCodeOfVoltage(0.0000V) expect 0 VRef = 2.500  MAX5171 14-bit LSB = 0.00015V +PASS MAX5171.VoltageOfCode(0x3fff) expect 2.499847 +PASS MAX5171.VoltageOfCode(0x3ffe) expect 2.499695
```

│

## MAX5171 Breakout Board

| +PASS                                                                                                                                                                                                                                                    | MAX5171.VoltageOfCode(0x3ffd) expect 2.499542                                                                                                                                                                                                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| +PASS                                                                                                                                                                                                                                                    | MAX5171.VoltageOfCode(0x3ffc) expect 2.499390                                                                                                                                                                                                            |
| +PASS                                                                                                                                                                                                                                                    | MAX5171.VoltageOfCode(0x2001) expect 1.250153                                                                                                                                                                                                            |
| +PASS                                                                                                                                                                                                                                                    | MAX5171.VoltageOfCode(0x2000) expect 1.250000                                                                                                                                                                                                            |
| +PASS                                                                                                                                                                                                                                                    | MAX5171.VoltageOfCode(0x1fff) expect 1.249847                                                                                                                                                                                                            |
| +PASS                                                                                                                                                                                                                                                    | MAX5171.VoltageOfCode(0x1ffe) expect 1.249695                                                                                                                                                                                                            |
| +PASS                                                                                                                                                                                                                                                    | MAX5171.VoltageOfCode(0x3) expect 0.000458                                                                                                                                                                                                               |
| +PASS                                                                                                                                                                                                                                                    | MAX5171.VoltageOfCode(0x2) expect 0.000305                                                                                                                                                                                                               |
| +PASS                                                                                                                                                                                                                                                    | MAX5171.VoltageOfCode(0x1) expect 0.000153                                                                                                                                                                                                               |
| +PASS                                                                                                                                                                                                                                                    | MAX5171.VoltageOfCode(0x0) expect 0.000000                                                                                                                                                                                                               |
| +PASS                                                                                                                                                                                                                                                    | MAX5171.VRef expect 2.500000 100.0% of full scale REF(2.50V) = 2.50V Jumper FB=1-2 SPI MOSI-> 0x7F 0xFF MISO<- 0xE0 0x00                                                                                                                                 |
| +PASS                                                                                                                                                                                                                                                    | AIN0 = 41.740% = 2.504V expect 2.500000 +/- 0.050000 0.0% of full scale REF(2.50V) = 0.000V SPI MOSI-> 0x40 0x00 MISO<- 0x7F 0xFF                                                                                                                        |
| +PASS                                                                                                                                                                                                                                                    | AIN0 = 0.391% = 0.023V expect 0.000000 +/- 0.050000 50.0% of full scale REF(2.50V) = 1.25V SPI MOSI-> 0x5F 0xFF MISO<- 0x40 0x00                                                                                                                         |
| +PASS AIN0 = 21.017% = 1.261V expect 1.250000 +/- 0.050000 SPI MOSI-> 0xE8 0x00 MISO<- 0x5F 0xFF +PASS UPO signal=1 UPO_pin is high after MAX5171 UPO_HIGH command SPI MOSI-> 0xE0 0x00 MISO<- 0xE8 0x00                                                 | +PASS AIN0 = 21.017% = 1.261V expect 1.250000 +/- 0.050000 SPI MOSI-> 0xE8 0x00 MISO<- 0x5F 0xFF +PASS UPO signal=1 UPO_pin is high after MAX5171 UPO_HIGH command SPI MOSI-> 0xE0 0x00 MISO<- 0xE8 0x00                                                 |
| !WARN expected UPO signal=0 UPO_pin is low after MAX5171 UPO_LOW command, but got actual UPO=1, missing UPO connections? SPI MOSI-> 0xE8 0x00 MISO<- 0xE0 0x00 +PASS UPO signal=1 UPO_pin is high after MAX5171 UPO_HIGH command Summary: 30 PASS 0 FAIL | !WARN expected UPO signal=0 UPO_pin is low after MAX5171 UPO_LOW command, but got actual UPO=1, missing UPO connections? SPI MOSI-> 0xE8 0x00 MISO<- 0xE0 0x00 +PASS UPO signal=1 UPO_pin is high after MAX5171 UPO_HIGH command Summary: 30 PASS 0 FAIL |
| MAX5171 >                                                                                                                                                                                                                                                | MAX5171 >                                                                                                                                                                                                                                                |

## Detailed Description of Hardware

The MAX5171 is a 14-bit, voltage-output DAC with SPI Interface. The MAX6126 provides a 2.5V reference voltage.  For  bipolar  operation,  the  MAX889  charge  pump generates a -5V power supply rail to drive the MAX44260 operational  amplifier.  Jumper  FB  selects  unipolar  or  bipolar output configuration. When configured for unipolar output,  analog  output  is  driven  from  the  FORCE\_UNI test point and sensed by the SENSE\_UNI test point, with closed-loop  feedback  through  resistor  network  R1-R2. When configured for bipolar output, the analog output is driven from the FORCE\_BIP test point and sensed by the SENSE\_BIP test point, with closed-loop feedback through resistor  network  R3-R4.  (The  analog  output  pin  OUT  is also connected to the standard Arduino A0 analog pin on the  external  connector.)  For  more  information  on  these products, please visit:

- [www.maximintegrated.com/max5171](https://www.maximintegrated.com/en/products/analog/data-converters/digital-to-analog-converters/MAX5171.html)
- [www.maximintegrated.com/max5173](http://www.maximintegrated.com/max5173)
- [www.maximintegrated.com/max889](http://www.maximintegrated.com/max889)
- [www.maximintegrated.com/max44260](http://www.maximintegrated.com/max44260)
- [www.maximintegrated.com/max6126](http://www.maximintegrated.com/max6126)

## Bipolar (-5V to 5V) Force/Sense Wiring Connection

To  drive  an  output  in  the  range  -5V  to  5V,  put  the  FB shunt on pins 1-2, and connect both the FORCE\_BIP and SENSE\_BIP test points to the positive side of the load. Connect the ground return side of the load to the GND test point. Leave the FORCE\_UNI and SENSE\_UNI test points unconnected. For best accuracy, avoid the resistive (I x R) voltage drop losses in the supply wire by using two separate wires for FORCE and SENSE.

│

## MAX5171 Breakout Board

## Unipolar (0 to 5V) Force/Sense Wiring Connection

To drive an output in the range 0 to 5V, put the FB shunt on pins 2-3 (the MAX889 charge pump and MAX44260 op amp and resistors R3-R4 will not be used). Connect both the FORCE\_UNI and SENSE\_UNI test points to the posi -tive side of the load. Connect the ground return side of the load to the GND test point. Leave the FORCE\_BIP and SENSE\_BIP test points unconnected. For best accuracy, avoid the resistive (I x R) voltage drop losses in the supply wire by using two separate wires for FORCE and SENSE.

## Minimal Component Count (0 to 2.5V) Force/ Sense Wiring Connection

To  drive  an  output  in  the  range  0  to  2.5V  with  minimal component  count,  remove  the  FB  shunt  (the  MAX889 charge  pump  and  MAX44260  op  amp  and  resistors

## Table 1. Jumper Functions

| JUMPER   | STATE      | FUNCTION                                                                                                          |
|----------|------------|-------------------------------------------------------------------------------------------------------------------|
| PDL      | 1-2*       | PDL = logic-high: shutdown function is allowed.                                                                   |
| PDL      | 2-3        | PDL = logic-low: shutdown function is disabled.                                                                   |
| RS       | 1-2        | RS = logic-high: output will be midscale at reset.                                                                |
| RS       | 2-3*       | RS = logic-low: output will be zero at reset.                                                                     |
| SHDN     | 1-2        | SHDN = logic-high: MAX5171 is shut down.                                                                          |
| SHDN     | 2-3*       | SHDN = logic-low: normal operation.                                                                               |
| FB       | 1-2* (BIP) | Bipolar output configuration (+5V/-5V): connect positive terminal of load to FORCE_BIP and SENSE_BIP test points. |
| FB       | 2-3 (UNI)  | Unipolar output configuration (+5V): connect positive terminal of load to FORCE_UNI and SENSE_UNI test points.    |
| J7       | 1-2*       | Analog reference REF connects to Arduino pin A1                                                                   |
| J6       | 1-2*       | Analog output OUT connects to Arduino pin A0                                                                      |
| J4       | 1-2*       | VDD supply is driven by Arduino IOREF supply                                                                      |
| J8       | 1-2*       | User-programmable output UPO connects to Arduino pin D2                                                           |
| J1       | 1-2*       | 2.5V reference force/sense connection point                                                                       |
| J5       | 1-2*       | 2.5V reference drives MAX5171 REF input                                                                           |

## 14-Bit Force/Sense DAC

R1-R4 will not be used). Connect both the OUT and FB pins of the MAX5171 to the positive side of the load. Connect the ground return side of the load to the GND test point.  Leave all other test points unconnected. For best accuracy, avoid the resistive (I x R) voltage drop losses in  the  supply wire by using two separate wires for OUT and FB.

## Evaluating the 2.7V to 3.6V MAX5173

The  MAX5173  is  the  pin-compatible  low-voltage  version  of  MAX5171,  specified  for  2.7V  to  3.6V  operation. All  on-board  support  circuitry  (MAX889  charge  pump, MAX44260 operational amplifier,  and  MAX6126  voltage reference) are specified to operate over the full 2.7V to 5.5V range. For specified operation of MAX5173, replace U3  with  a  1.25V  reference  such  as  the  pin-compatible MAX6190AESA+.

## Ordering Information

| PART        | TYPE           |
|-------------|----------------|
| MAX5171BOB# | Breakout Board |

#Denotes RoHS compliance.

│

## MAX5171 Breakout Board Bill of Materials

|   ITEM | REF_DES              | DNI/DNP   |   QTY | MFGPART #                                                                           | MANUFACTURER                                    | VALUE             | DESCRIPTION                                                                                                             |
|--------|----------------------|-----------|-------|-------------------------------------------------------------------------------------|-------------------------------------------------|-------------------|-------------------------------------------------------------------------------------------------------------------------|
|      1 | -5V                  | -         |     1 | 5119                                                                                | KEYSTONE                                        | N/A               | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN;BOARD HOLE = 0.04IN; PURPLE;PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      2 | 5V0                  | -         |     1 | 5000                                                                                | KEYSTONE                                        | N/A               | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN;BOARD HOLE = 0.04IN; RED;PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;    |
|      3 | C1-C3, C5, C6, C10   | -         |     6 | CC0603KRX7R0BB104; GRM188R72A104KA35; HMK107B7104KA; 06031C104KAT2A; GRM188R72A104K | YAGEO;MURATA; TAIYO YUDEN; AVX;MURATA           | 0.1µF             | CAPACITOR;SMT (0603); CERAMIC CHIP; 0.1µF; 100V; TOL = 10%; TG = -55°C TO +125°C; TC = X7R                              |
|      4 | C4, C8               | -         |     2 | C1608X5R1A106K080AC                                                                 | TDK                                             | 10µF              | CAPACITOR;SMT (0603); CERAMIC CHIP; 10µF; 10V; TOL = 10%; MODEL = ; TG = -55° C TO +85° C; TC = X5R                     |
|      5 | C7                   | -         |     1 | C1608X5R1E225K; TMK107ABJ225KA; TMK107BJ225KA; GRM188R61E225KA12                    | TDK; TAIYO YUDEN; TAIYO YUDEN; MURATA           | 2.2µF             | CAPACITOR;SMT (0603); CERAMIC CHIP; 2.2µF; 25V; TOL = 10%;MODEL = ; TG = -55° C TO +85° C; TC = X5R                     |
|      6 | C11                  | -         |     1 | C0603C475K8PAC; LMK107BJ475KA; CGB3B1X5R1A475K; C1608X5R1A475K080AC; CL10A475KP8NNN | KEMET; TAIYO YUDEN; TDK;TDK; SAMSUNGELECTRONICS | 4.7µF             | CAPACITOR;SMT (0603); CERAMIC CHIP; 4.7µF; 10V; TOL = 10%; TG = -55° C TO +85° C; TC = X5R                              |
|      7 | FB, PDL, RS,SHDN     | -         |     4 | PEC03SAAN                                                                           | SULLINS                                         | PEC03SAAN         | CONNECTOR; MALE;THROUGH HOLE; BREAKAWAY; STRAIGHT; 3PINS                                                                |
|      8 | FORCE_BIP, FORCE_UNI | -         |     2 | 5003                                                                                | KEYSTONE                                        | N/A               | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN;BOARD HOLE = 0.04IN; ORANGE;PHOSPHOR BRONZE WIRE SILVER PLATE FINISH; |
|      9 | GND                  | -         |     1 | 5001                                                                                | KEYSTONE                                        | N/A               | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN;BOARD HOLE = 0.04IN; BLACK;PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;  |
|     10 | J2, J3               | -         |     2 | PEC08SAAN                                                                           | SULLINS ELECTRONICS CORP.                       | PEC08SAAN         | CONNECTOR; MALE;THROUGH HOLE; .100IN CONTACT CENTER; MALE BREAKAWAY HEADER ; STRAIGHT; 8PINS                            |
|     11 | J9                   | -         |     1 | SSQ-106-03-G-S                                                                      | SAMTEC                                          | SSQ-106-03-G-S    | CONNECTOR; MALE;THROUGH HOLE; THROUGH-HOLE .025 SQ POST SOCKET ; STRAIGHT; 6PINS                                        |
|     12 | J10, J12             | -         |     2 | SSQ-108-03-G-S                                                                      | SAMTEC                                          | SSQ-108-03-G-S    | CONNECTOR; FEMALE;THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 8PINS                                                  |
|     13 | J11                  | -         |     1 | SSQ-110-03-G-S                                                                      | SAMTEC                                          | SSQ-110-03-G-S    | CONNECTOR; FEMALE;THROUGH HOLE; .025IN SQ POST SOCKET; STRAIGHT; 10PINS                                                 |
|     14 | J21                  | -         |     1 | TSW-106-08-S-D-RA                                                                   | SAMTEC                                          | TSW-106-08-S-D-RA | CONNECTOR;THROUGH HOLE; DOUBLE ROW; RIGHT ANGLE; 12PINS                                                                 |
|     15 | R1-R4                | -         |     4 | CRCW060310K0FK; ERJ-3EKF1002                                                        | VISHAY DALE; PANASONIC                          | 10K               | RESISTOR; 0603; 10K; 1%; 100PPM; 0.10W; THICK FILM                                                                      |
|     16 | SENSE_BIP, SENSE_UNI | -         |     2 | 5002                                                                                | KEYSTONE                                        | N/A               | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN;BOARD HOLE = 0.04IN; WHITE;PHOSPHOR BRONZE WIRE SILVER;               |
|     17 | SU1-SU4              | -         |     4 | S1100-B;SX1100-B; STC02SYAN                                                         | KYCON;KYCON; SULLINS ELECTRONICS CORP.          | SX1100-B          | TEST POINT; JUMPER; STR; TOTAL LENGTH = 0.24IN; BLACK; INSULATION = PBT;PHOSPHOR BRONZE CONTACT = GOLD PLATED           |
|     18 | U1                   | -         |     1 | MAX44260AXT+                                                                        | MAXIM                                           | MAX44260AXT+      | IC; OPAMP; 1.8V 15MHZ LOW-OFFSET, LOW-POWER, RAIL-TO-RAIL I/O OP AMP; SC70-6                                            |
|     19 | U2                   | -         |     1 | MAX889SESA+                                                                         | MAXIM                                           | MAX889SESA+       | IC; VREG; 1MHZ SWITCHING FREQUENCY; HIGH-FREQUENCY; REGULATED; 0.2A; INVERTING CHARGE PUMP; NSOIC8 150MIL               |
|     20 | U3                   | -         |     1 | MAX6126A25+                                                                         | MAXIM                                           | MAX6126A25+       | IC; VREF; ULTRA-HIGH PRECISION; ULTRA-LOW NOISE; SERIES VOLTAGE REFERENCE; UMAX8                                        |
|     21 | U4                   | -         |     1 | MAX5171AEEE+                                                                        | MAXIM                                           | MAX5171AEEE+      | IC; DAC; LOW-POWER; SERIAL; 14-BIT DACS WITH FORCE/SENSE VOLTAGE OUTPUT; QSOP16 ;                                       |
|     22 | UPO                  | -         |     1 | 5117                                                                                | KEYSTONE                                        | N/A               | TEST POINT; PIN DIA = 0.1IN; TOTAL LENGTH = 0.3IN;BOARD HOLE = 0.04IN; BLUE;PHOSPHOR BRONZE WIRE SILVER PLATE FINISH;   |
|     23 | PCB                  | -         |     1 | 5171_ARDUINO_DEMO_A                                                                 | MAXIM                                           | PCB               | PCB:5171_ARDUINO_DEMO_A                                                                                                 |

## MAX5171 Breakout Board Schematic Diagram

<!-- image -->

## MAX5171 Breakout Board PCB Layout Diagrams

MAX5171 Breakout Board PCB Layout-Top Silkscreen

<!-- image -->

MAX5171 Breakout Board PCB Layout-Top View

<!-- image -->

│

## MAX5171 Breakout Board PCB Layout Diagrams (continued)

MAX5171 Breakout Board PCB Layout-Internal 2

<!-- image -->

MAX5171 Breakout Board PCB Layout-Internal 3

<!-- image -->

│

## MAX5171 Breakout Board PCB Layout Diagrams (continued)

MAX5171 Breakout Board PCB Layout-Bottom View

<!-- image -->

MAX5171 Breakout Board PCB Layout-Bottom Silkscreen

<!-- image -->

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION              | PAGES CHANGED   |
|-------------------|-----------------|--------------------------|-----------------|
|                 0 | 11/20           | Release for market intro | -               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│