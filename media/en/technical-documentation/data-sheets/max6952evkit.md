<!-- lastmod 2022-08-05 -->
## General Description

The MAX6952 evaluation kit (EV kit) is an assembled and tested printed circuit board (PCB) that demonstrates the MAX6952 SPI™-interfaced four-digit 5 x 7 matrix LED display driver. Two cascaded MAX6952s are used to drive eight 5 x 7 monocolor matrix displays. The EV kit is powered by a user-supplied 2.7VDC to 5.5VDC power supply. The SPI-compatible serial interface is connected to an IBM- compatible PC parallel port for easy evaluation. The EV kit can be reconfigured for interfacing to a user's microcontroller for standalone operation.

Windows® 95/98/2000-compatible software provides a user-friendly interface to demonstrate the features of the MAX6952 IC. The program is menu driven and offers a graphic interface with control buttons.

| DESIGNATION    |   QTY | DESCRIPTION                                                               |
|----------------|-------|---------------------------------------------------------------------------|
| C1, C7, C9     |     3 | 47µF, 10V low-ESR POSCAPs (C) Sanyo 10TPB47MC                             |
| C2             |     1 | 1µF ± 20%, 10V X7R ceramic capacitor (0805) Taiyo Yuden LMK212BJ105MG     |
| C3-C6, C8, C10 |     6 | 0.1µF ± 10%, 16V X7R ceramic capacitors (0603) Murata GRM39X7R104K016AD   |
| D1-D8          |     8 | Red 0.7in 5 x 7 LED dot-matrix, cathode-row displays                      |
| D9, D10        |     2 | 200mA, 25V Schottky diodes (SOT23) Diodes Inc. BAT54C-7-F or Zetex BAT54C |
| D11            |     1 | 200mA, 75V ultra-fast diode (SOD-123) Fairchild MMSD4148                  |
| J1             |     1 | DB-25 male right-angle connector                                          |
| J2             |     1 | 6-pin header                                                              |

Windows is a registered trademark of Microsoft Corp. SPI is a trademark of Motorola, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Features

- ♦ 8-Character Red 5 x 7 Matrix Cathode-Row Display
- ♦ SPI-Compatible Serial Interface
- ♦ Operates from a 2.7V to 5.5V Supply Range
- ♦ Reconfigurable for Standalone Operation with an External Microcontroller
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Windows 95/98/2000-Compatible Software
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE   | IC PACKAGE   |
|---------------|--------------|--------------|
| MAX6952EVKIT+ | 0°C to +70°C | 36 SSOP      |

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                   |
|----------------|-------|---------------------------------------------------------------|
| JU9            |     1 | 3-pin header                                                  |
| R1-R4, R9, R10 |     6 | 10k Ω ± 5% resistors (0805)                                   |
| R5, R6         |     2 | 61.9k Ω ± 1% resistors (0805)                                 |
| R7             |     1 | 1M Ω ± 5% resistor (0805)                                     |
| R8             |     1 | 680 Ω ± 5% resistor (0805)                                    |
| EXT_CLK        |     1 | BNC connector                                                 |
| U1, U2         |     2 | MAX6952EAX+ (36-pin SSOPs)                                    |
| U3             |     1 | MAX1841EUB+ (10-pin µMAX)                                     |
| U4, U6         |     2 | MAX3370EXK+ (5-pin SC70s)                                     |
| U5             |     1 | Unbuffered hex inverter (14-pin SO) TI SN74HCU04D E4          |
| Y1             |     1 | 4MHz ceramic resonator with capacitors Murata CSTCR4M00G53-R0 |
| -              |     1 | Shunt (JU9)                                                   |
| -              |     1 | PCB: MAX6952 evaluation kit+                                  |

1

## MAX6952 Evaluation Kit

## Component Suppliers

| SUPPLIER                  | PHONE        | WEBSITE               |
|---------------------------|--------------|-----------------------|
| Diodes Inc.               | 805-446-4800 | www.diodes.com        |
| Fairchild Semiconductor   | 888-522-5372 | www.fairchildsemi.com |
| Murata Mfg. Co., Ltd.     | 770-436-1300 | www.murata.com        |
| SANYO North America Corp. | 619-661-6835 | www.sanyovideo.com    |
| Taiyo Yuden               | 800-348-2496 | www.t-yuden.com       |
| TDK Corp.                 | 847-803-6100 | www.component.tdk.com |
| Zetex USA                 | 631-543-7100 | www.zetex.com         |

Note: Indicate that you are using the MAX6952 when contacting these component suppliers.

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- Compatible PC running Windows 95/98/2000
- Parallel  printer  port  LPT1,  LPT2,  or  LPT3  (25-pin  female socket)
- Standard 25-pin, straight-through, male-to-female cable (6ft maximum printer extension cable) to connect the computer's parallel port to the MAX6952 EV kit
- DC power supply capable of supplying between 2.7V and 5.5V and at least 500mA of current

## Procedure

The MAX6952 EV kit is fully assembled and tested. Caution: Do not turn on the power until all connections are made.

- 1) Connect the computer's parallel port to the MAX6952 EV kit. Use a straight-through 25-pin female-to-male cable. The EV kit software uses a loopback connection to confirm that the correct port has been selected.
- 2) Use the INSTALL.EXE program to install the files and create icons for them in the Windows 95/98/2000 Start menu. For Windows 2000, check to confirm that you have the required administrator privilege.
- 3) Turn on the power supply and set it to 5V and turn it off.
- 4) Connect the power-supply positive terminal to the VCC pad and negative terminal to the GND pad. Turn on the power supply.
- 5) Start  the  MAX6952 program by opening its icon in the Start menu.
- 6) Observe as the program automatically detects the parallel port address of the MAX6952 EV kit and starts the main program.
- 7)  Header J2 is provided to monitor the parallel port pins supplying the CLK\_P, CS\_P ,  DIN\_P,  DOUT\_P

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

(5V signals), and loopback signals. The CS ,  DIN, CLK, DOUT, and BLINK pads on the EV kit's left side are VCC level-shifted signals from the MAX1841 and MAX3370 level translators, respectively. Both signal locations can be used for monitoring.

Note: An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.

## Detailed Description of Software

Note: Words in boldface are user-selectable features in the software.

## Software Startup

A mouse or the Tab key is used to navigate between items on the Main display window. Upon starting the program, the MAX6952 EV kit display is programmed to initialize in Normal mode ,  display eight digits, blink at the Slow Rate with  an 8/16 (50% duty cycle) display intensity,  and display the contents of the initialized MAX6952 SRAM Plane P0 and P1 contents. The User RAM characters are blank. The MAX6952 EV kit eightdigit 5 x 7 matrix LED display should alternate between MAX6952 and -&gt;EV KIT .  The  number of digits displayed is fixed at eight digits, four digits per MAX6952.

## Main Window Display Controls

The Display Mode radio buttons determine the mode of operation of the MAX6952 EV kit. Clicking on the Shutdown radio button puts the MAX6952 drivers into shutdown mode. The display is blank and the EV kit draws the least amount of current in this mode. Selecting the Normal radio button places the MAX6952 EV kit in the normal mode of operation. The Test radio button puts the MAX6952 EV kit in test mode. All eight digits of the 5 x 7 LED matrix display on the MAX6952 EV kit are illuminated with a 50% duty cycle (8/16).

<!-- image -->

## MAX6952 Evaluation Kit

Figure 1. MAX6952 Evaluation Software's Main Window Controls the Display, Intensity, Blink Rate, and Character Code of Each 5 x 7 LED Matrix Digit

<!-- image -->

Figure 2. MAX6952 Evaluation Software User RAM Window Determines the Shape of the 24 User-Definable Characters

<!-- image -->

To change the blink rate, click on one of the Blink Rate radio buttons. Once selected, the Blink Rate can be adjusted by using the up-down arrows on the keyboard. The red ON caption on the left side of each plane indicates which plane is currently displayed on the EV kit hardware. Intensity of the MAX6952 EV kit LEDs can be adjusted by using the mouse to move the Intensity Control track bar. Once selected, the Intensity Control can be adjusted with the left-right arrows on the keyboard.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6952 Evaluation Kit

Both SRAM Data Planes P0 and P1 are displayed on the computer monitor eight-digit 5 x 7 LED matrix and are updated when a new hexadecimal digit value is entered above the digit in the edit box. The program keeps track of data written to all registers in the MAX6952 hardware. To clear the MAX6952 P0 and P1 Plane registers , click on the Clear Planes button and both planes are set to the blank ASCII character, hexadecimal value 20. Note that the EV kit is still in Normal display mode although all of the 5 x 7 LED matrix segments are off.

Figure 1 shows the evaluation software's Main window.

## Pulldown Menus and Saving Data

All  available  functions, except for altering a digit's value, can be changed using the Pulldown menus .  A reset function is also provided in the View|Reset menu to reinitialize the program and hardware.*

Pressing the Save Data button saves all the current registers,  P0  and  P1  planes,  and  user-definable  character data to the MAX6952.ini file. The Restore Data button retrieves the saved registers, P0 and P1 planes,

Figure 3. Parallel Port Diagnostic Window's Bit-Banging Serial Interface Tab Provides Direct, Low-Level Access to the MAX6952 Through the SPI Interface

<!-- image -->

* Active and inactive dot colors can be changed using the View|Reset Matrix color menu.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

user-definable characters data, and sends them to the MAX6952 EV kit hardware. The Main window and User RAM window are also restored to the saved condition.

## User RAM Interface

Clicking on the User RAM button brings up the User RAM display window (Figure 2), allowing the user to configure all 24 user-definable characters RAM00RAM23. Clicking on the desired digit's dot illuminates the  segment  and  automatically  updates  both MAX6952's user RAM in the EV kit with the new pattern for  that  particular  character.  Entering  the  hexadecimal value of a user-defined character in the Main window's plane P0 or P1 edit box displays the user-defined character.  For  example, entering 00 displays the character designed at RAM00 in the user RAM window. The EV kit's appropriate digit is also updated with the character.

To clear all 24 user-definable characters RAM00RAM23, use the Clear All User RAM button. User RAM in both MAX6952s on the EV kit is cleared. Clicking the Exit User RAM button closes the User RAM display window.

## General-Purpose SPI Utility

There are two methods for communicating with the MAX6952: through the Main window display or through the general-purpose SPI utility using the View|SPI Utility command. The utility configures the SPI parameters such as clock polarity (CPOL), clock phase (CPHA), and chip select (CS) polarity. The fields where pin numbers are required apply to the pins of the parallel port connector. When using the SPI utility, the Main window display no longer keeps track of changes sent to  hardware. The SPI utility is preconfigured for the proper setting of CPOL, CPHA, and CS. The EV kit and PC program can be reinitialized to the startup screen settings by using the View|Reset EV kit command.

The utility  handles data as 8-bit hexadecimal bytes. Data longer than 1 byte must be handled as multiple bytes. Thus, for the MAX6952 EV kit, 16-bit words are broken into two 8-bit bytes:

- 1) Click on the Bit-Banging Serial Interface tab and set bits per byte to 8 (Figure 3).
- 2) Enter the command byte first and then the data byte.
- 3) To write data to the MAX6952 EV kit hardware, enter the data into the Data bytes to be written field. The data bytes must be hexadecimal and prefixed by 0x.
- 4) Separate each byte with a comma.

<!-- image -->

Figure 4. MAX6952 EV Kit Level-Translation Block Diagram

<!-- image -->

## Table 1. Standalone Mode

| JUMPER   | JUMPER, PCB TRACE   | JUMPER FUNCTION                                       | EV KIT MODE                                             |
|----------|---------------------|-------------------------------------------------------|---------------------------------------------------------|
| JU1      | Cut open            | U6 level-translator BLINK signal isolated from EV kit | Standalone , external controller connected to BLINK pad |
| JU2      | Cut open            | U3 level-translator CLK signal isolated from EV kit   | Standalone , external controller connected to CLK pad   |
| JU3      | Cut open            | U3 level-translator CS signal isolated from EV kit    | Standalone , external controller connected to CS pad    |
| JU4      | Cut open            | U3 level-translator DIN signal isolated from EV kit   | Standalone , external controller connected to DIN pad   |
| JU5      | Cut open            | U3 level-translator VCCpin isolated                   | U3 power disconnected                                   |
| JU6      | Cut open            | U4 level-translator DOUT signal isolated from EV kit  | Standalone , external controller connected to DOUT pad  |
| JU7      | Cut open            | U4 level-translator VCC pin isolated                  | U4 power disconnected                                   |
| JU8      | Cut open            | U6 level-translator VCC pin isolated                  | U6 power disconnected                                   |

## Table 2. PC/Software Control Mode

| JUMPER   | JUMPER, PCB TRACE   | JUMPER FUNCTION                           | EV KIT MODE                               |
|----------|---------------------|-------------------------------------------|-------------------------------------------|
| JU1      | Shorted             | U6 level translator provides BLINK signal | PC/software control through parallel port |
| JU2      | Shorted             | U3 level translator provides CLK signal   | PC/software control through parallel port |
| JU3      | Shorted             | U3 level translator provides CS signal    | PC/software control through parallel port |
| JU4      | Shorted             | U3 level translator provides DIN signal   | PC/software control through parallel port |
| JU5      | Shorted             | U3 level translator powered from VCC rail | U3 power connected                        |
| JU6      | Shorted             | U4 level translator provides DOUT signal  | PC/software control through parallel port |
| JU7      | Shorted             | U4 level translator powered from VCC rail | U4 power connected                        |
| JU8      | Shorted             | U6 level translator powered from VCC rail | U6 power connected                        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6952 Evaluation Kit

- 5) Press the Send Now button to write the data to the MAX6952 EV kit. For example, to set the MAX6952 EV kit's display intensity to 2/16 for digits 1, 2, 5, and 6,  enter  the  command word 0x01 and data word 0x11 as: 0x01,0x11, 0x01,0x11 and click the Send Now button. Multiple commands and data sets must be sent to the EV kit since two MAX6952 ICs are serially cascaded. Setting the repeat to 2 automatically  accomplishes  this. Data received from the MAX6952 ICs is displayed under the Data Bytes received .

## Detailed Description of Hardware

The MAX6952 EV kit demonstrates two MAX6952 fourdigit 5 x 7 LED matrix display drivers cascaded together driving eight red LED 5 x 7 matrix displays. The red

## MAX6952 Evaluation Kit

5 x 7 LED matrix displays are cathode-row type. The user must provide the EV kit with a DC power supply capable of supplying between 2.7V and 5.5V and capable of providing at least 500mA.

The EV kit connects to a compatible PC parallel port to control the EV kit. The EV kit's SPI-compatible serial interface is connected to a MAX1841 (U3) and two MAX3370 (U4, U6) level translators. The translators level shift the computer's parallel port logic 5V signals to  the  EV  kit's  logic  VCC  voltage  level  chosen  by  the user. The translators can function with voltages down to 2.7V. The level translators' parallel port side is powered by the parallel port's D5-D7 data pins, diodes D9/D10, and capacitor C2, which provides approximately 5V to the translators' power input. The power supply connected to VCC provides power to the translators' outputs. A 6-pin header (J2) is provided for monitoring the 5V CLK\_P, CS\_P ,  DIN\_P, DOUT\_P non-level-translated and loopback signals coming from the parallel port cable.

The EV kit can be reconfigured for standalone operation  and  connected to an external microcontroller for evaluation. Pullup resistors R1-R4 and R10 are provided on the EV kit for the MAX6952's CLK, CS ,  DIN, DOUT, and BLINK pins. PCB pads are provided for interfacing or monitoring the CLK, CS , DIN, DOUT, and BLINK level-translated pins of the MAX6952 ICs.

The MAX6952 ICs are configured for an external 4MHz oscillator  provided by IC U5, ceramic resonator (Y1), and resistors R8 and R7. Resistor R7 provides positive feedback to the inverter's input (U5-A) and damping resistor  R8  provides  attenuated coupling between the feedback circuit and inverter. Inverters U5-B and U5-C provide buffering and sharpen the clock signal. The EV kit can be reconfigured for evaluating other frequencies by applying an external TTL/CMOS-compatible clock to BNC connector EXT\_CLK and reconfiguring jumper JU9. The external clock's frequency range should be within 1MHz to 8MHz.

Both MAX6952's (U1, U2) blink signals can be monitored with an oscilloscope at test points TP1 and TP2, respectively. Each MAX6952's peak segment current is set  to  30mA by resistors R5 and R6 for U1 and U2, respectively.

The parallel port signals are level translated and buffered from the EV kit by the level translators. However, the two sides are not galvanically isolated. Figure 4 shows the parallel port and level-translation interface for the MAX6952 EV kit.

## Jumper Selection

## Standalone Configuration

The MAX6952 EV kit features several jumpers (JU1JU8) to reconfigure the EV kit for standalone operation mode or PC/software control mode. Tables 1 and 2 list the jumpers to cut open or short for the desired evaluation  mode. Note: All  jumpers must be configured for only one mode at a time. A suitable voltage must be selected for standalone mode. Configure all jumpers for either standalone or PC/software control mode.

## Evaluating Other Oscillator Frequencies

The MAX6952 EV kit features a jumper to select the multiplex clock source. The MAX6952 EV kit is configured to be driven at 4MHz by an external oscillator formed by ceramic resonator Y1, resistors R7/R8, and inverter U5. The user can connect an external TTL/CMOS clock oscillator to the EXT\_CLK pad to evaluate other frequencies (1MHz (min) to 8MHz (max)). The 3-pin jumper JU9 selects the source for the MAX6952 multiplex clock. Table 3 lists the various jumper options.

## Troubleshooting

## Problem: Cannot find MAX6952 EV kit parallel port connection .

Ensure that the I/O extension cable is connected to a parallel port, and not a SCSI or other type of port. Verify that the supplied LPTCON.VXD is in the same directory as MAX6952.EXE. If a local printer driver is installed, temporarily disable it. The software does not work if the program icon is dragged onto the windows desktop; instead, install the software using the install program.

Table 3. Jumper JU9 Functions

| SHUNT LOCATION   | OSCILLATOR SOURCE                                   | OSCILLATOR FREQUENCY                                                     |
|------------------|-----------------------------------------------------|--------------------------------------------------------------------------|
| 1 and 2          | Inverter U5-C                                       | 4MHz, set by EV kit oscillator                                           |
| 2 and 3          | EXT_CLK pad, D11, and U5-F provide V CC level clock | External TTL/CMOS clock range (1MHz to 8MHz) for the external oscillator |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6952 Evaluation Kit

<!-- image -->

Figure 5a. MAX6952 EV Kit Schematic (Sheet 1 of 4)

<!-- image -->

Figure 5b. MAX6952 EV Kit Schematic (Sheet 2 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6952 Evaluation Kit

Figure 5c. MAX6952 EV Kit Schematic (Sheet 3 of 4)

<!-- image -->

Figure 5d. MAX6952 EV Kit Schematic (Sheet 4 of 4)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6952 Evaluation Kit

<!-- image -->

Figure 6. MAX6952 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 7. MAX6952 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6952 Evaluation Kit

Figure 8. MAX6952 EV Kit PCB Layout-Solder Side

<!-- image -->

Revision History

Pages changed at Rev 3: 1, 2, 5-10

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.