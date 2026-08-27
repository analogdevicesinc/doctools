<!-- lastmod 2022-08-05 -->
## General Description

The MAX6951 evaluation kit (EV kit) is an assembled and tested printed-circuit board (PCB) that demonstrates the MAX6951 serially interfaced 8-digit LED display driver IC. The EV kit is powered by a user-supplied +4VDC to +6.5VDC power supply. A configurable +3.3V or userconfigurable low-dropout (LDO) linear regulated power supply provides power for the entire EV kit. An SPI™compatible serial interface is connected to an IBM PCcompatible computer's parallel port for easy evaluation. The EV kit can easily be reconfigured for interfacing with a user-supplied microcontroller (stand-alone operation).

Windows ® 95/98-compatible software provides a userfriendly interface to demonstrate the various features of the MAX6951 IC. The program is menu driven and offers a graphic interface with control buttons. Windows NT/2000 support is available; contact the factory for details.

Note: The MAX6951 EV kit software can be downloaded from the Maxim website at www.maxim-ic.com/ evkitsoftware.

SPI is a trademark of Motorola, Inc. Windows is a registered trademark of Microsoft Corp.

| DESIGNATION   |   QTY | DESCRIPTION                                                          |
|---------------|-------|----------------------------------------------------------------------|
| C1            |     1 | 10µF ± 20%, 16V X7R ceramic capacitor (1812) TDK C4532X7R1C106M      |
| C2            |     1 | 10µF ± 10%, 10V tantalum capacitor (A) Kemet T494A106K010AT          |
| C3, C4        |     2 | 0.1µF ± 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K |
| C5            |     1 | 47µF, 6.3V low-ESR POSCAP (C) capacitor Sanyo 6TPA47M                |
| C6            |     1 | 18pF ± 5%, 50V C0G ceramic capacitor (0603) Murata GRM39C0G180J050AD |
| C7            |     1 | 1µF, 16V X7R ceramic capacitor (1206) Murata GRM42-6X7R105K016       |

<!-- image -->

## Features

- ♦ Eight-Digit 7-Segment + dp Common-Cathode Display
- ♦ SPI-Compatible Serial Interface
- ♦ Configurable Built-In LDO Linear Regulated Power Supply Demonstrates +3.3V or Other Voltages
- ♦ Reconfigurable for Stand-Alone Operation (with an External Microcontroller)
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Includes Windows 95/98-Compatible Software
- ♦ Assembled and Tested

## Ordering Information

| PART           | TEMP RANGE    | IC PACKAGE   |
|----------------|---------------|--------------|
| MAX6951EVKIT   | 0°C to +70°C* | 16 QSOP-EP** |
| MAX6951EVKIT + | 0°C to +70°C* | 16 QSOP-EP** |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                       |
|---------------|-------|-----------------------------------------------------------------------------------|
| D1-D4         |     4 | Red, two-digit, 7-segment common-cathode LED displays (0.560in) Fairchild MAN6940 |
| D5, D6        |     2 | 200mA, 25V Schottky diodes (SOT23) Fairchild BAT54C                               |
| J1            |     1 | DB25 male right-angle connector                                                   |
| J2            |     1 | 5-pin header                                                                      |
| R1, R2, R3    |     3 | 10k Ω ± 5% resistors (0805)                                                       |
| R4            |     1 | 93.1k Ω ± 1% resistor (0805)                                                      |
| R5, R6        |     2 | Not installed (0805)                                                              |
| U1            |     1 | MAX6951EEE+ (16-pin QSOP-EP)                                                      |
| U2            |     1 | MAX604ESA+ (8-pin SO)                                                             |
| U3            |     1 | MAX1841EUB+ (10-pin µMAX ® )                                                      |
| -             |     1 | PCB: MAX6951 Evaluation Kit+                                                      |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## MAX6951 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| KEMET Corp.             | 864-963-6300 | www.kemet.com         |
| Murata Mfg. Co., Ltd.   | 770-436-1300 | www.murata.com        |
| SANYO NA Corp.          | 619-661-6835 | www.sanyodevice.com   |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX6951 when contacting these component suppliers.

## Quick Start

## Required Equipment

Before beginning, the following equipment is needed:

- IBM PC-compatible computer running Windows 95/98
- Computer monitor with 800 x 600 minimum screen resolution
- Parallel  printer  port  (25-pin  female  socket  on  the back of the computer)
- Standard 25-pin, straight-through, male-to-female cable (printer extension cable) to connect the computer's parallel port to the MAX6951 EV kit
- DC power supply capable of supplying between +4V to +6.5V and at least 500mA current

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows 95/98 operating system.

## Procedure

The MAX6951 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Connect a cable from the computer's parallel port to the MAX6951 EV kit. Use a straight-through, 25-pin, female-to-male cable. The EV kit software uses a loopback connection to confirm that the correct port has been selected.
- 2) Visit  the  Maxim website (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software, 6951Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 3) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.  The program files are copied and icons are created in the Windows Start | Programs menu. An uninstall program is included with the software. Select the UNINSTALL icon to remove the EV kit software from the hard drive.
- 4) Connect the power-supply positive terminal to the VIN pad and negative terminal to the GND pad.
- 5) Turn on the power supply and set it to +4V.
- 6) Start the MAX6951 program by opening its icon in the Windows Start menu.
- 7) Observe as the program automatically detects the parallel port address of the MAX6951 EV kit and starts the main program.
- 8) Header J2 is provided to monitor the parallel port pins supplying the CLK\_P, CS\_P ,  DIN\_P (+5V signals), and loopback signals. The CLK, CS ,  and DIN pads on the EV kit's left side are +3.3V level-shifted signals from the MAX1841 level translator. Both signal locations can be used for monitoring.

## Detailed Description of Software

## User Interface

The user interface is easy to operate. A mouse or the Tab key can be used to navigate among various items of the main display panel. Upon starting the program, the MAX6951 EV kit display is programmed to initialize in Normal mode ,  display 8-digits in No-decode mode , blinking at a Slow Rate with an 8/16 (50% duty cycle) display intensity, and display the contents of the initialized MAX6951 SRAM Plane P0 and P1 contents. The MAX6951 EV kit 8-digit LED display should alternate between HELLO--¯-- and --¯--6951. Figure 1 is the main panel for the MAX6951 EV kit.

## Main Panel Display Controls

The Display mode group of radio buttons determines the mode of operation of the MAX6951 EV kit. Clicking on the Shutdown radio button puts the MAX6951 EV kit in shutdown mode. The display is blank and the EV kit draws the least amount of current in this mode. Selecting the Normal radio button places the MAX6951 EV kit in the normal mode of operation. Clicking on the Test radio button puts the MAX6951 EV kit in test mode. All eight digits and all segment LEDs on the MAX6951 EV kit are illuminated with a 50% duty cycle (8/16). To change the blink rate, click on one of the Blink Rate radio buttons. Once selected, the Blink Rate can be adjusted by using the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6951 Evaluation Kit

Figure 1. Main Panel for MAX6951 EV Kit

<!-- image -->

Up-Down Arrows on the keyboard. The seven-segment digits on the computer monitor do not blink. Intensity of the MAX6951 EV kit LEDs can be adjusted by using the mouse to move the Intensity Control track bar. Once selected, the Intensity Control can be adjusted with the left-right  arrows  on  the  keyboard.  The  number of digits  displayed  is  adjusted  with  the Digit  Scan Limit button or list box. To set the scan limit to eight digits, click  on  the Eight Digits button or use the mouse to scroll the list box to the desired number of digits. Once the Digit Scan Limit list  box  is  selected,  the  number keys can be used to change values. If one digit is desired, click on the One Digit button.

The SRAM Data Planes group of radio buttons select which data plane is displayed on the computer monitor seven-segment digits and is updated when a digit value is changed. Selecting the Plane P0 radio button displays the contents of Plane P0 in the MAX6951. The program keeps track of data written to all registers in the MAX6951 hardware. Clicking on Plane P1 displays the contents of Plane P1 written to hardware. Selecting Plane P0 and P1 displays the contents of Plane P0 by default.  To  clear  the  MAX6951 SRAM Plane registers P0 and P1, click on the Clear Planes button.

<!-- image -->

## Hexadecimal Decode Mode

The Digit Hexadecimal Decode checkboxes and buttons select which digits are represented in hexadecimal decode mode. A ✔ in a Digit checkbox indicates that the digit is in hexadecimal decode mode. A blank Digit checkbox indicates the digit is in No-decode mode . Clicking on the All Digits button places all eight digits in hexadecimal decode mode or clicking on None places all digits in no-decode mode.

When a digit is in Hexadecimal Decode mode , the digit's list  box up-down arrows are used to select a value on the numbered keypad once the digit's list box has been selected. To activate a digit's decimal point , click on the digit's decimal point with the mouse or click again to deactivate the decimal point.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6951 Evaluation Kit

Figure 2. SPI Utility Showing the Settings to Communicate with the MAX6951 EV Kit

<!-- image -->

For digits in no-decode mode , use the mouse to click on the desired segment of the digit's seven-segment display. Note that the digit's list box up-down arrows are disabled. To activate a digit's decimal point ,  click  on  the digit's decimal point with the mouse or click again to deactivate the decimal point. The left-side list box of each digit displays the no-decode hex value written to the MAX6951 hardware.

Digit 0 (left side) through digit 7 (right side) display the contents of the selected MAX6951 SRAM data plane, P0 or P1.

## Pulldown Menus and Saving Data

All  available  functions  except for changing a digit's value can be changed using the pulldown menu .  Hot keys ( Alt + underlined letter ) provide an alternative to using the mouse to configure the MAX6951 EV kit.

Pressing on the Save Data button saves all the current registers and SRAM (P0 and P1) data to the program's directory. Pressing on the Restore Data button retrieves the saved register and SRAM (P0 and P1) data and sends it to the MAX6951 EV kit hardware and updates the main panel. Pressing the Clear Planes button clears SRAM Planes P0 and P1.

## General-Purpose SPI Utility

There are two methods for communicating with the MAX6951 (Figure 2): through the Main Panel display or through the general-purpose SPI utility . The utility configures the SPI parameters such as clock polarity (CPOL), clock phase (CPHA), and chip select (CS) polarity. The fields where pin numbers are required apply to the pins of the parallel port connector. When using the SPI utility, the Main Panel display no longer keeps track of changes sent to hardware. The SPI utility is preconfigured for the proper setting of CPOL, CPHA, and CS.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

The utility  only  handles  the  data  in  byte  (8-bit)  format. Data that is longer than a byte must be handled as multiple bytes. Thus, for the MAX6951 EV kit, 16-bit words must be broken into two 8-bit bytes. Set the bits list box to 16 so the clock sends 16 pulses on the CLK pin. The command byte is entered first and then the data byte. To write data to the MAX6951 EV kit hardware, enter the data into the field: Data bytes to be written. The data bytes must be hexadecimal and prefixed by 0x. Separate each byte with a comma. Press the Send Now button to write the data to the MAX6951 EV kit. For example, to set the MAX6951 EV kit's display intensity to 2/16, enter the command word 0x02 and data word 0x01, as: 0x02,0x01 and click the Send Now button.

## Detailed Description of Hardware

The MAX6951 EV kit demonstrates the MAX6951 eightdigit seven-segment + dp common-cathode LED display driver IC. The EV kit also features a MAX604 +3.3V LDO linear regulator providing up to 500mA for the MAX6951 and LEDs. The user can reconfigure JU6 to provide a voltage from +2.7V up to +5.5V to power the circuit. The EV kit's  input  requires a +4VDC to +6.5VDC power supply capable of supplying at least 500mA for a +3.3V evaluation. The EV kit's LDO linear regulator input voltage must be higher than the circuit voltage. Additionally, an externally regulated +2.7V up to +5.5V power supply can be used to power the EV kit, EXT\_VCC after reconfiguring jumper JU1.

The EV kit connects to an IBM-compatible PC computer parallel port, which permits easy evaluation of the EV kit. The EV kit's SPI-compatible serial interface is connected to  a  MAX1841 (U3) level translator. The translator levelshifts the computer's parallel port logic +5V signals to the EV kit's logic +3.3V or circuit voltage level chosen by the user. By reconfiguring the appropriate jumper (JU1), the translator can function with voltages down to +2.7V. The level translator's parallel port side is powered by parallel ports D5 to D7 data pins, diodes D5/D6, and capacitor C7, which provide approximately +5V to the translator

<!-- image -->

## MAX6951 Evaluation Kit

DVCC input. The LDO linear regulator supplies power to the translator's output side. A 5-pin header (J2) is provided for monitoring the +5V CLK\_P, CS\_P ,  DIN\_P nonlevel-translated,  and  LOOPBACK signals coming from the parallel port cable.

The EV kit can be easily reconfigured for stand-alone operation and can be connected to an external microcontroller for evaluation. Pullup resistors R1, R2, and R3 are provided on the EV kit for the MAX6951's CLK, CS , and DIN pins. PCB pads are provided for interfacing or monitoring the CLK, CS , and DIN +3.3V or circuit voltage level chosen by the user, level-translated pins of the MAX6951 IC.

The MAX6951 IC is configured to oscillate nominally at 4MHz by external capacitor C6 and resistor R4. The EV kit can be reconfigured for evaluating other frequencies by applying an external TTL/CMOS-compatible clock to the EXT\_OSC pad and reconfiguring jumper JU7. The MAX6951's peak segment current is set to 20mA by resistor R4.

The parallel port signals are level translated and buffered from the EV kit by the MAX1841 level translator.  However, the two sides are not galvanically isolated. Figure 3 shows the parallel port and level-translation interface for the MAX6951 EV kit.

Figure 3. MAX6951 EV Kit Level-Translation Functional Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6951 Evaluation Kit

## Jumper Selection

## MAX6951 EV Kit's Power Source

The MAX6951 EV kit can be easily powered by a separate externally regulated power supply. The 2-pin jumper JU1 selects the power source for the EV kit circuit. The external power source must be in the +2.7V to +5.5V range and must be capable of supplying at least 500mA current. The output of the EV kit's built-in LDO power regulator must be isolated from the external power supply. Table 1 lists the jumper options.

## Stand-Alone Configuration

The MAX6951 EV kit features several jumpers to reconfigure  the  EV  kit  for  stand-alone  operation  or  PC/soft-

Table 1. JU1 Functions

| JUMPER   | JUMPER, PCB TRACE   | JUMPER FUNCTION                                                 | EV KIT MODE                                             |
|----------|---------------------|-----------------------------------------------------------------|---------------------------------------------------------|
| JU1      | Shorted             | LDO linear regulator U2 supplies power                          | LDO supplies +3.3V or user-selectable voltage*          |
| JU1      | Cut open            | LDO linear regulator U2 output isolated from EV kit's V CC pins | EXT_VCC pad supplies EV kit power, range +2.7V to +5.5V |

Table 2. JU2 to JU5 Functions

| JUMPER   | JUMPER, PCB TRACE   | JUMPER FUNCTION                                     | EV KIT MODE                                             |
|----------|---------------------|-----------------------------------------------------|---------------------------------------------------------|
| JU2      | Cut open            | U3 level translator CLK signal isolated from EV kit | Stand-alone , external controller connected to CLK pad* |
| JU3      | Cut open            | U3 level translator CS signal isolated from EV kit  | Stand-alone , external controller connected to CS pad*  |
| JU4      | Cut open            | U3 level translator DIN signal isolated from EV kit | Stand-alone , external controller connected to DIN pad* |
| JU5      | Cut open            | U3 level translator V CC pin isolated               | U3 power disconnected, translator not required          |
| JU2      | Shorted             | U3 level translator provides CLK signal             | PC/software control through parallel port               |
| JU3      | Shorted             | U3 level translator provides CS signal              | PC/software control through parallel port               |
| JU4      | Shorted             | U3 level translator provides DIN signal             | PC/software control through parallel port               |
| JU5      | Shorted             | U3 level translator powered from V CC rail          | U3 power connected, translator required                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

ware control. The 2-pin jumpers, JU2 to JU5, select the evaluation mode for the EV kit. Table 2 lists the jumpers to  cut  open  or  short  for  the  desired  evaluation  mode. Note :  All  jumpers  must be configured for only one mode at a time and the proper voltage selected for stand-alone mode.To select other output voltages (+2.7V to +5.5V), the PCB trace shorting pins 2 and 3 of jumper JU6 must be cut open. Voltage-divider resistors R5, R6, and a wire shorting pins 1 and 2 of jumper JU6 must be installed. Use the following equation to determine the value for resistor R5. R6 can range up to 1.5M Ω, and 249k Ω is a good starting point:

<!-- formula-not-decoded -->

<!-- image -->

## Evaluating Other Oscillator Frequencies

The MAX6951 EV kit features a jumper to select the oscillation  frequency source. The MAX6951 is configured to oscillate nominally at 4MHz by external components capacitor C6 and resistor R4. The user can connect an external TTL/CMOS clock oscillator to the EXT\_OSC pad to evaluate other frequencies (1MHz min to 8MHz max). The 3-pin jumper JU7 selects the source for the MAX6951 oscillator frequency. Table 4 lists the various jumper options.

## Troubleshooting

## Problem: Cannot find the MAX6951 EV kit's parallel port connection.

Ensure that the I/O extension cable is connected to a parallel port, and not a SCSI or other type of port. Verify that the supplied LPTCON.VXD is in the same directory as MAX6951.EXE. If a local printer driver is installed, temporarily disable it. The software does not work if the program icon is dragged onto the windows desktop; instead, install the software into a subdirectory, such as C:\MAX6951. The software can also be run directly on its floppy disk, as long as both MAX6951.EXE and LPTCON.VXD are in the same directory.

<!-- image -->

## MAX6951 Evaluation Kit

## Table 3. JU6 Functions

| SHORT LOCATION    | MAX604 SET PIN                   | EV KIT MODE                                                                    |
|-------------------|----------------------------------|--------------------------------------------------------------------------------|
| 1 and 2           | Connected to resistors R5 and R6 | User-selected voltage, +2.7V to +5.5V range, VIN range +5.5V to +6.5V at 500mA |
| 2 and 3 (default) | Connected to GND                 | +3.3V mode, VIN range +4.0V to +6.5V at 500mA                                  |

## Table 4. JU7 Functions

| JUMPER/SHORT LOCATION                                               | MAX6951 OSC PIN                             | OSCILLATOR FREQUENCY                                                     |
|---------------------------------------------------------------------|---------------------------------------------|--------------------------------------------------------------------------|
| 1 and 2 (PC trace shorts pins 1 and 2)                              | Connected to capacitor C6                   | 4MHz, set by capacitor C6 and resistor R4                                |
| 2 and 3 (PC shorting trace cut open, wire soldered to pins 2 and 3) | Connected to EXT_OSC pad and TTL/CMOS clock | External TTL/CMOS clock range (1MHz to 8MHz) for the external oscillator |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6951 Evaluation Kit

Figure 4. MAX6951 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6951 Evaluation Kit

Figure 5. MAX6951 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX6951 Evaluation Kit

Figure 6. MAX6951 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 7. MAX6951 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX6951 Evaluation Kit

Figure 8. MAX6951 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1, 2, 5, 6, 8

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

11