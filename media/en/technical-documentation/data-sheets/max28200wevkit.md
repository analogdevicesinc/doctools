<!-- lastmod 2023-04-07 -->
## MAX28200 Evaluation Kit

## General Description

The  MAX28200  evaluation  kit  (EV  kit)  is  a  development  platform  that  enables  access  to  all  the  features  of the  MAX28200  in  a  tiny,  easy-to-use  board.  The  ROMbased  bootloader  is  accessed  through  JTAG  or  an  I 2 C interface. Connectors are provided for a host bus adapter, the  DS9481P  programming  tool,  and  for  JTAG.  Board power can be supplied by USB, host bus adapter, JTAG, or the DS9481P programming tool. This board provides a powerful processing subsystem in a very small space that can be easily integrated into a variety of applications.

## EV Kit Contents

- MAX28200 EV kit board with a sample device preprogrammed with demo
- DS9481P-300# programming tool
- USB Type-A to Micro-B cable

## MAX28200 EV Kit Board

<!-- image -->

Evaluates: MAX28200

## Features

- MAX28200 Microcontroller
-  MAXQ20 16-Bit Core
-  16KB Flash Memory
-  2KB SRAM
-  PWM/Timer
- 2-Channel, 10-Bit ADC
- I 2 C
-  Hardware SHA-3 Engine
-  Comparator
- Integrated Peripherals
- Status LEDs
- Temperature Sensor
- Potentiometer

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX28200 Evaluation Kit

## Software Requirements

- NET Framework 4.0-Setup automatically downloads and installs, if needed.
- USB drivers (DS9481P-300.inf and DS9481P-300.cat files)
- MAX28200 EV Kit Software

## Hardware Requirements

- DS9481P-300 USB to 1-Wire ® /I 2 C adapter
- MAX28200 EV Kit board
- Mini USB cable

## Driver Installation

Follow these steps prior to plugging in the DS9481P-300 into a USB port:

- 1) Download  and  fully  extract  the  MAX28200  EV  kit software from https://www.maximintegrated. com/en/design/software-description.html/ swpart=SFW0008060B .
- 2) Click on the I  accept the agreement radio  button  in the Software License Agreement pop-up window and press OK .
- 3) Sign into your MyMaxim account to download the ZIP file.
- 4) Right click on the DS9481P-300.inf and select Install from the pop-up menu.
- 5) Once the operation completes successfully, plug in the device into a USB port. Then plug the device into the

Evaluates: MAX28200

EV kit board with the silkscreen signal names facing up, as shown in the MAX28200 EV Kit Board photo.

- 6) Confirm the device appears as shown in Figure 2.
- 7) Proceed to the Software Installation section.

## Software Installation

This section describes how to install the MAX28200 EV kit software.

- 1) Start the installation process by double-clicking on the setup.exe file.
- 2) A pop-up window appears. Confirm the publisher is Maxim Integrated prior to clicking the Install button.

<!-- image -->

Figure 1. Contents of MAX28200 EV Kit Folder

Figure 2. Device Manager Confirming Device Is Recognized

<!-- image -->

Figure 3. Installation Dialog Box

<!-- image -->

│

## MAX28200 Evaluation Kit

- 3) Click on the I accept the agreement radio button in the Software  License  Agreement pop-up  window and click OK .
- 4) The splash screen momentarily displays, followed by the application's main form.
- 5) If  the  device  is  not  detected, go to the Tools menu and click Connect (Figure 4).
- 6) See  the Loading Hex  File  into  the  MAX28200 section for instructions on using the software application.
5. To  restart  the  software,  use  the  shortcut  located  at
- 7) Start Menu | MAX28200 EV Kit .

IMPORTANT: Do not attempt to launch the program using setup.exe or any files in the same directory because this will install multiple instances of the application. Only use the shortcut link after the initial setup is complete.

## Quick Start

The EV kit is fully assembled, tested, and preprogrammed with  demo  firmware,  EvKitTest.hex.  Follow  the  steps below to begin evaluation with this FW:

- 1) Inspect the installed jumpers, which should match the defaults specified in Table 1.
- 2) Set the switch SW2 to GPIO mode (open).
- 3) Power  the  board  by  connecting  the  supplied  USB cable  to  a  PC  or  USB  5V  source,  or  alternately  by connecting the USB cable to the DS9481P that is in turn connected to J3.
- 4) Verify that the demo is running by observing the LEDs blinking in a pattern.
- 5) Evaluate the analog input by turning the potentiometer R12 fully clockwise and then fully counter-clockwise two times and observe the LEDs change.
- 6) Touch the thermistor R13 with your finger. You should observe the LEDs change three times.
- 7) If  desired, press the RESET button to start over. To retest, allow the thermistor to cool for several seconds and then press the reset button before testing again.
- 8) To use the MAX28200 as an I 2 C master when evaluating the MAX28200 as a PMIC companion, make sure to remove the jumpers on Port 0 and Port 1 on JP2.

## Evaluates: MAX28200

## Detailed Description of Hardware (or Software)

The MAX28200 EV kit board is designed to make developing with the MAX28200 quick and easy. In addition to making  all  the  GPIOs  accessible  at  100mil  pitch  headers,  the  EV  kit  also  offers  programming  access  to  flash memory  using  a  ROM-resident  bootloader.  Electrical interface to the bootloader is by JTAG or I 2 C. I 2 C can be accessed through connectors for a host bus adapter or the  included  DS9481P  programming  tool.  Configurable status LEDs and a thermistor plus potentiometer provide a convenient way to monitor port activity and exercise the ADC/comparator block.

Figure 4. Connecting to Device

<!-- image -->

## MAX28200 Evaluation Kit

## Programming the MAX28200

The Loading Hex File into the MAX28200 section presents the most straightforward use case for the MAX28200, in which  the  MAX28200  is  programmed  directly  with  firmware that is already in a hex file format. The Using the Assembler to Create Hex Files and Creating I2C Master Firmware from the CSV File sections show the versatility of the EV kit software and showcase its ability to take an assembly or CSV file, and convert either file format into a hex file that can be used to program the MAX28200.

The Using  the  Assembler  to  Create  Hex  Files section reviews the first case, in which an assembly file is converted into a hex file and then is used to program the MAX28200. Assembly language allows for a wide range of applications and highly efficient device operation.

The Creating  I2C  Master  Firmware  from  the  CSV  File section shows the steps to create and load the firmware necessary  to  implement  an  I 2 C  master  that  programs volatile registers in I 2 C slaves at power-up. One example of an I 2 C slave that can be programmed by the MAX28200 is the MAX77714 PMIC, which has an EV Kit GUI capable of  generating  a  compatible  .csv  file.  For  other  cases where the .csv file is being built manually, make sure to use the following format: Slave, Address, Name, Hex. If the MAX28200 is being used as a PMIC companion, see Step 8 in the Quick Start section.

## Loading Hex File into the MAX28200

- 1) From the Start menu, select MAX28200 EV Kit .
- 2) Select the Boot Loader tab (Figure 6).
- 3) Select the File tab and click Open Intel Hex File and navigate to the desired .hex file ( Figure 7).
- 4) For faster performance, make sure that the bootloader data log is off. Do this by clicking the Options tab at the top, hovering over Bootloader Data Log , and selecting OFF (Figure 8).
- 5) Click  the Program/Verify button  to  program  the device (Figure 9).
- 6) If this operation was successful, you will see '//Programming Successful!' at the bottom of the log (Figure 10).

Evaluates: MAX28200

Figure 5. Windows Start Menu to Start EV Kit Program

<!-- image -->

Figure 6. DS9481 Device Detected. If a Device Is Not Detected, See Step 5 in the Software Installation Section.

<!-- image -->

│

Evaluates: MAX28200

<!-- image -->

Figure 7. Select .hex File to Load into the Device

Figure 8. Turning Off the Bootloader Data Log for Faster Performance

<!-- image -->

Figure 9. Programming Device

<!-- image -->

Evaluates: MAX28200

Figure 10. Device Successfully Programmed

<!-- image -->

## Using the Assembler to Create Hex Files

- 1) From the Windows Start menu, select MAX28200 EV Kit (Figure 11).

Figure 11. Windows Start Menu to Start EV Kit Program

<!-- image -->

Evaluates: MAX28200

- 2) On the Build tab, click the ... button to the right of the Source File text box to select an .asm file ( Figure 12).

Figure 12. Select an .asm File from the Directory to Convert into .hex File

<!-- image -->

Evaluates: MAX28200

- 3) Once the file is selected, click the Build button to build the assembly file ( Figure 13).

Figure 13. Build the hex file from the original assembly file.

<!-- image -->

## MAX28200 Evaluation Kit

Evaluates: MAX28200

- 4) This action produces a successful completion message (Figure 14 ) and a hex file of the same name (shown in the Output File text box) appears in the directory with the .hex file extension.

Figure 14. Assembly File Successfully Converted into .hex File

<!-- image -->

Evaluates: MAX28200

- 5) Go to the Boot Loader tab,  and  under the File menu, select Open Intel Hex File .  Choose the .hex file that was created from the original assembly file ( Figure 15).
- 6) The data pattern appears (Figure 16). Click the Program/Verify button to program the MAX28200.

Figure 15. Programming Device with Selected Script

<!-- image -->

Figure 16. Program the Device with the Data Pattern

<!-- image -->

## MAX28200 Evaluation Kit

Evaluates: MAX28200

- 7) If this operation is successful, Programming Successful! appears at the bottom of the log.

Figure 17. Device successfully programmed.

<!-- image -->

## MAX28200 Evaluation Kit

## Creating I 2 C Master Firmware from the CSV File

- 1) From  the Windows Start menu,  select MAX28200 EV Kit .
- 2) On the Build tab  (Figure  19),  click ... button  to  the right of the Source File field to select a .csv file.
- 3) When  the  file  viewer  window  appears,  be  sure  to change from the default Assembly files to CSV files in the bottom right corner drop-down menu to display the CSV files within the directory ( Figure 20).
- 4) Once  the  file  is  selected,  click  the Build button  to build the CSV file ( Figure 21).
- 5) This  action  produces  a  successful  completion  message (Figure 22 ).  A .hex file of the same name (shown in the Output File text box) appears in the directory with the .hex file extension.

Evaluates: MAX28200

Figure 18. Windows Start Menu to Start EV Kit Program

<!-- image -->

Figure 19. Selecting a .csv File from the Directory to Convert into .hex File

<!-- image -->

│

Evaluates: MAX28200

<!-- image -->

Figure 20. Select the 'CSV files' option in the bottom right hand corner of the file viewer window to display the csv files.

Figure 21. Building the .hex File from the Original .csv File

<!-- image -->

Figure 22. Successful Conversion of a .csv File into .hex File

<!-- image -->

Evaluates: MAX28200

- 6) Go to the Boot Loader tab, and under the File menu, select Open Intel Hex File . Choose the .hex file that was cre -ated from the original .csv file.
- 7) The data pattern appears (Figure 24). Click the Program/Verify button to program the MAX28200.

Figure 23. Programming the Device with the Selected Script

<!-- image -->

Figure 24. Programming the Device with the Data Pattern

<!-- image -->

Evaluates: MAX28200

- 8) If this operation is successful, Programming Successful! appears at the bottom of the log (Figure 25).

Figure 25. Device Successfully Programmed

<!-- image -->

## Table 1. Default Jumper Settings

| JUMPER   | FUNCTION      | SETTINGS   | DESCRIPTION                                                                      |
|----------|---------------|------------|----------------------------------------------------------------------------------|
| JP1      | RSTN SEL      | 1-2        | Allows host bus adapter to assert a reset.                                       |
| JP1      | RSTN SEL      | 2-3*       | Allows DS9481P to assert a reset.                                                |
| JP2      | LED EN        | 1-2        | PORT 0 LED enabled active low.                                                   |
| JP2      | LED EN        | 3-4        | PORT 1 LED enabled active low.                                                   |
| JP2      | LED EN        | 5-6        | PORT 2 LED enabled active low.                                                   |
| JP2      | LED EN        | 7-8        | PORT 3 LED enabled active low.                                                   |
| JP3      | VDD EN        | 1-2*       | Connects 3V3 power to DUT.                                                       |
| JP3      | VDD EN        | 2-3        | Open to provide DUT current monitoring.                                          |
| JP4      | TEMP SENSE EN | 1-2        | Connects thermistor voltage-divider network to AIN1.                             |
| JP4      | TEMP SENSE EN | Open*      | Open to apply external signals through J5 SMA.                                   |
| JP5      | POT EN        | 1-2        | Connects POT voltage-divider network to AIN0.                                    |
| JP5      | POT EN        | Open*      | Open to apply external signals through J4 SMA.                                   |
| JP6      | CMP_P         | 1-2*       | Normal JTAG and GPIO functions available.                                        |
| JP6      | CMP_P         | Open       | Pin 1 of header provides direct path to comparator P for high-impedance sources. |
| JP7      | CMP_N         | 1-2*       | Normal JTAG and GPIO functions available.                                        |
| JP7      | CMP_N         | Open       | Pin 1 of header provides direct path to comparator N for high-impedance sources. |

│

## MAX28200 Evaluation Kit

## Power Supply

System  power  can  be  supplied  by  USB,  the  host  bus adapter,  or  the  DS9481P  programming  tool.  Automatic source  switching  and  voltage  regulation  is  provided  for the MAX28200.

## Programming

A  ROM-resident  bootloader  provides  access  to  flash memory by way of JTAG or I 2 C.  I 2 C  communication  is handled through connectors for a host bus adapter, the DS9481P programming tool, or direct header connection.

## JTAG/GPIO Mux

The  four  GPIOs  provided  on  the  MAX28200  double  as JTAG  connections.  Switch  SW2  controls  routing  of  the GPIOs. Closing SW2 enables JTAG mode, and opening SW2 enables GPIO mode.

## Status LEDs

User-configurable  status  LEDs  are  provided  for  each GPIO.  Jumpers  provide  an  easy  and  positive  way  to deactivate LEDs when not needed.

## Comparator and ADC

The  comparator  and  10-bit, dual-channel  ADC  are accessed through SMA connectors J4 and J5. An on-board NTC thermistor and potentiometer can also be connected to  these  analog  inputs.  Jumpers  JP6  and  JP7  provide an alternate path to the comparators for high-impedance signals. Install shunts for normal GPIO operation.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX28200WEVKIT# | EV Kit |

#Denotes RoHS compliance.

Evaluates: MAX28200

│

## MAX28200 EV Kit Bill of Materials

|   QUANTITY | PART REFERENCE                            | VALUE              | BOM_DESCRIPTION                          | MANUFACTURER_PN    | MANUFACTURER                     |
|------------|-------------------------------------------|--------------------|------------------------------------------|--------------------|----------------------------------|
|         11 | C1,C2,C3,C9, C10,C14,C15,C16, C17,C18,C19 | 1µF                | CAP CER 1µF 6.3V X5R 0402                | GRM155R60J105KE19D | Murata                           |
|          1 | C4                                        | 100nF              | CAP CER 0.1µF 16V 10% X7R 0402           | GRM155R71C104KA88D | Murata Electronics               |
|          2 | C5,C6                                     | 1nF                | CAP CER 1nF 50V 5% NP0 0603              | GRM1885C1H102JA01D | Murata                           |
|          2 | C7,C8                                     | 470nF              | CAP CER 0.47µF 10V 10% X5R 0402          | GRM155R61A474KE15J | Murata Electronics North America |
|          2 | C11,C12                                   | 4.7µF              | CAP CER 4.7µF 10V 10% X5R 0603           | C0603C475K8PACTU   | Kemet                            |
|          1 | C13                                       | 10nF               | CAP CER 10000PF 16V 10% X7R 0402         | GRM155R71C103KA01D | Murata Electronics North America |
|          1 | C20                                       | 10nF               | CAP CER 10nF 25V 10% X7R 0603            | GRM188R71E103KA01D | Murata                           |
|          3 | D1,D2,D3                                  | DFLS240-7          | DIODE SCHOTTKY 40V 2A POWERDI12          | DFLS240-7          | Diodes Inc                       |
|          2 | D4,D6                                     | RED                | LED SMARTLED RED 633NM 0603              | LS L296-P2Q2-1-Z   | OSRAM Opto Semiconductors Inc    |
|          2 | D5,D7                                     | GRN                | LED SMARTLED GREEN 570NM 0603            | LG L29K-G2J1-24-Z  | OSRAM Opto Semiconductors Inc    |
|          1 | D8                                        | SML-LX0404SIUPGUSB | LED RGB CLEAR 0404 SMD                   | SML-LX0404SIUPGUSB | Lumex Opto/Components Inc.       |
|          4 | H1,H2,H3,H4                               | DNI                | DNI MTG 125DRL 300PAD                    |                    |                                  |
|          1 | J1                                        | MICRO USB B R/A    | CONN RCPT 5POS MICRO USB B R/A           | 47346-0001         | Molex                            |
|          1 | J2                                        | HOST I2C SPI       | HOST I2C SPI 10P HEADER                  | 5104338-1          | TE Connectivity                  |
|          1 | J3                                        | 6P 1x6 RA          | CONN HEADER .100" SNGL R/A 6POS          | PRPC006SBCN-M71RC  | Sullins                          |
|          2 | J4,J5                                     | SMA                | CONN SMA JACK STR 50 OHM PCB             | 5-1814832-1        | TE Connectivity                  |
|          1 | J6                                        | MAXDAP             | MAXDAP_POGO_PIN CBL PLUG-OF-NAILS 10-PIN | TC2050-IDC-NL      | Tag-Connect LLC                  |
|          1 | JH1                                       | JTAG MAXQ          | CONN HEADER LOPRO STR 10POS GOLD         | 5104338-1          | TE Connectivity                  |
|          1 | JH2                                       | 12P 2x6            | CONN HEADER .100 DUAL STR 12POS          | PEC06DAAN          | Sullins                          |
|          1 | JP1                                       | 3P JUMPER          | CONN HEADER .100 SINGL STR 3POS          | PEC03SAAN          | Sullins                          |
|          1 | JP2                                       | 8P 2x4             | CONN HEADER .100 DUAL STR 8POS           | PEC04DAAN          | Sullins                          |
|          5 | JP3,JP4,JP5, JP6,JP7                      | JUMPER             | CONN HEADER .100 SINGL STR 2POS (2x1)    | PEC02SAAN          | Sullins                          |
|          1 | L1                                        | BLM41PG102SN1L     | FERRITE CHIP 1K Ω 1500MA 1806            | BLM41PG102SN1L     | Murata Electronics               |
|          1 | PCB1                                      | PCB                |                                          |                    |                                  |
|          7 | R1,R2,R3,R4, R11,R14,R15                  | 10K                | RES SMD 10KΩ 1% 1/16W 0402               | RC0402FR-0710KL    | Yageo                            |
|          4 | R5,R6,R9,R10                              | 330                | RES SMD 330Ω 1% 1/10W 0603               | ERJ-3EKF3300V      | Panasonic                        |
|          2 | R7,R8                                     | 1K                 | RES 1KΩ 1/10W 1% 0603 SMD                | ERJ-3EKF1001V      | Panasonic                        |
|          1 | R12                                       | 10K                | TRIMMER 10KΩ 0.5W PC PIN                 | 3386P-1-103LF      | Bourns Inc.                      |
|          1 | R13                                       | 10K                | NTC THERMISTOR 10KΩ 1% 0402              | NCP15XH103F03RC    | Murata Electronics North America |
|          1 | R16                                       | 2.7K               | RES SMD 2.7KΩ 1% 1/10W 0402              | ERJ-2RKF2701X      | Panasonic                        |
|          1 | R17                                       | 1.4K               | RES SMD 1.4KΩ 1% 1/10W 0402              | ERJ-2RKF1401X      | Panasonic Electronic Components  |
|          1 | R18                                       | 1K                 | RES 1K OHM 1/10W 1% 0402 SMD             | ERJ-2RKF1001X      | Panasonic                        |
|          1 | SW1                                       | B3S-1002 BY OMZ    | SWITCH TACTILE SPST-NO 0.05A 24V         | B3S-1002 BY OMZ    | Omron Electronics                |
|          1 | SW2                                       | DIP SW 1POS        | SWITCH AUTODIP 1POS TOP ACT 24V          | A6T-1104           | Omron Electronics                |
|          1 | SW3                                       | B3U-1000P          | SWITCH TACTILE SPST-NO 0.05A 12V         | B3U-1000P          | Omron Electronics                |
|          1 | TP1                                       | WHT                | TEST POINT PC MULTI PURPOSE WHT          | 5012               | Keystone Electronics             |
|          1 | TP2                                       | BLK                | TEST POINT PC MULTI PURPOSE BLK          | 5011               | Keystone Electronics             |
|          1 | U1                                        | MAX28200EWC+T      | MAX28200EWC+T 12P_WLP                    | MAX28200EWC+T      | Maxim Integrated                 |
|          1 | U2                                        | MAX13202EALT+T     | ESD PROTECT 2CH 6-UDFN                   | MAX13202EALT+      | Maxim Integrated                 |
|          1 | U3                                        | MAX4674EUE+T       | IC MULTIPLEXER QUAD 2X1 16TSSOP          | MAX4674EUE+T       | Maxim Integrated                 |
|          1 | U4                                        | MAX8841ELT18+T     | IC REG LINEAR 1.8V 150MA 6UDFN           | MAX8841ELT18+T     | Maxim Integrated                 |
|          1 | U5                                        | MAX32625ITK+       | MAX32625ITK+ 68P TQFN                    | MAX32625ITK+       | Maxim Integrated                 |
|          1 | U6                                        | MAX38902AATA+      | IC REG LDO LINEAR ADJ .5A 8TDFN          | MAX38902AATA+      | Maxim Integrated                 |
|          1 | U7                                        | MAX8841ELT33+T     | IC REG LINEAR 3.3V 150MA 6UDFN           | MAX8841ELT33+T     | Maxim Integrated ECS Inc.        |
|          1 | Y1                                        | 32.768KHz          | CRYSTAL 32.7680KHZ 6PF SMD               | ECS-.327-6-12-TR   |                                  |

Evaluates: MAX28200

## MAX28200EWC+T EV Kit-Block Diagram

<!-- image -->

│

Evaluates: MAX28200

Evaluates: MAX28200

## MAX28200EWC+T EV KIT-DUT, PWR, JTAG, Host Bus and IO

<!-- image -->

│

## MAX28200EWC+T EV Kit-Block Diagram

<!-- image -->

Evaluates: MAX28200

## MAX28200 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                      | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------|-----------------|
|                 0 | 1/19            | Initial release                  | -               |
|                 1 | 5/19            | Revised entire EV kit data sheet | 1-21            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX28200