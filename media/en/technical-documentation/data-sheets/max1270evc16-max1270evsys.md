<!-- lastmod 2022-08-05 -->
<!-- image -->

## General Description

The MAX1270 evaluation system (EV system) is a complete, 8-channel data-acquisition system, consisting of a MAX1270  evaluation  kit  (EV  kit)  and  a  Maxim 68HC16MODULE-DIP microcontroller (µC) module. It is designed to evaluate the MAX1270/MAX1271, a multirange, 8-channel, 12-bit data-acquisition system. Windows 3.1™/Windows 95™ software provides a handy user-interface to exercise the MAX1270's features.

Order the complete EV system (MAX1270EVC16) for comprehensive evaluation of the MAX1270 or MAX1271, using  a  personal  computer.  Order  the  EV  kit (MAX1270EVKIT) if you have already purchased the µC module (68HC16MODULE-DIP) with another Maxim EV system or for custom use in other µC-based systems.

The MAX1270 EV kit can also be used to evaluate the MAX127 and MAX128.

## MAX1270EVKIT Component List

| DESIGNATION       |   QTY | DESCRIPTION                               |
|-------------------|-------|-------------------------------------------|
| C1, C12, C13, C14 |     4 | 0.1µF ceramic capacitors                  |
| C2-C9             |     8 | 0.01µF ceramic capacitors                 |
| C10               |     1 | 0.01µF ceramic capacitor                  |
| C11, C15          |     2 | 4.7µF, 10V tantalum capacitors            |
| C16               |     1 | 22µF, 50V aluminum electrolytic capacitor |
| D1                |     1 | Dual common-cathode Schottky diode        |
| JU1               |     1 | 3-pin header                              |
| JU2, JU3          |     2 | 2-pin headers                             |
| R1                |     1 | 10 Ω ±5% resistor                         |
| R2-R5             |     0 | Open                                      |
| R6-R13            |     8 | 300 Ω ±5% resistors                       |
| R14               |     1 | 1M Ω ±5% resistor                         |
| TP1               |     1 | 8-pin header                              |
| U1                |     1 | 28-pin socket, 0.300in. width             |
| U1                |     1 | MAX1270ACNG                               |

Windows 3.1 and Windows 95 are trademarks of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

- ♦ Proven PC Board Layout
- ♦ Complete Evaluation System Samples to 12ksps
- ♦ Convenient Test Points Provided On-Board
- ♦ Data-Logging Software with FFT Capability
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | INTERFACE TYPE   |
|--------------|---------------|------------------|
| MAX1270EVKIT | 0°C to +70°C  | User-Supplied    |
| MAX1270EVC16 | 0°C to +70°C  | Windows Software |

Note: The MAX1270 software can be used only with the complete evaluation system (MAX1270ECV16), which includes the 68HC16MODULE-DIP module with the MAX1270EVKIT.

## Component Lists

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| U2, U3        |     2 | 14-pin sockets                                                |
| U2, U3        |     2 | 14-pin headers with four jumper wires (2-3, 5-6, 9-10, 12-13) |
| U4            |     1 | 4.096V voltage reference MAX6141BCSA                          |
| U5            |     1 | 5V at 30mA linear regulator MAX1615EUK                        |
| None          |     1 | PC board                                                      |
| None          |     1 | Software disk, 'MAX1270 Evaluation Kit'                       |

## MAX1270EVC16 Component List

| PART             |   QTY | DESCRIPTION                                     |
|------------------|-------|-------------------------------------------------|
| MAX1270EVKIT     |     1 | MAX1270 evaluation kit                          |
| 68HC16MODULE-DIP |     1 | 68HC16 µC module with 16-bit parallel interface |

1

## MAX1270 EV Kit/EV System

## MAX1270 EV KIT Software

## Windows Application Program Files

| MAXADC.EXE   | Application program that runs under Window 3.1 or Windows 95   |
|--------------|----------------------------------------------------------------|
| MAX1270.HLP  | Help file                                                      |
| MAX1270.DLL  | MAXADC personality module for MAX1270                          |
| MAXADC.INI   | Program settings file                                          |
| MAX1270.C16  | Software loaded into 68HC16 microcontroller                    |

## Install/Uninstall Program Files

| INSTALL.EXE   | Installs the EV kit files on your computer     |
|---------------|------------------------------------------------|
| INSTALL16.EXE | Installs the EV kit files on your computer     |
| UNINST.EXE    | Removes the EV kit files from your computer    |
| UNINST32.EXE  | Removes the EV kit files from your computer    |
| UNINST.INI    | Database for uninstall program                 |
| UN-MAXIM.PIF  | Windows program information file for uninstall |

## MAX1270 Evaluation System

The MAX1270 EV system operates from a user-supplied  +8V to +12V DC power supply. Windows 3.1/95 software running on an IBM PC interfaces to the EV system board through the computer's serial-communications port. The software can be operated with or without a mouse. Refer to the Quick Start section for setup and operating instructions.

## MAX1270/MAX1271 Stand-Alone EV Kit

The MAX1270 EV kit provides a proven PC board layout to facilitate evaluation of the MAX1270. Apply your system's ±12V power-supply rails to the OPAMP+ and OPAMP- terminals. Connect GND to your system ground return. The OPAMP+ input powers a MAX1615 linear  regulator  and  a  MAX6141 voltage reference. It must be interfaced to appropriate timing signals for proper operation.

Connect your three-wire interface to SCLK, DIN, DOUT, and GND. Leave R3 and R4 open. If you do not drive CS ,  install  a  100 Ω resistor  at  R5.  If  you  do  not  drive SHDN , install a 100 Ω resistor at R2. Make sure JU1 is in position 2-3 (factory setting). Refer to the MAX1270 data sheet for waveforms and timing requirements.

## Recommended Equipment

You will need the following equipment before you begin:

-  A small DC power supply, +8V to +12V at 200mA

QSPI is a trademark of Motorola Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 68HC16 Source Code Files

| KIT1270.ASM   | Main source code for the KIT1270.C16 program, provided for reference. Compiled with Motorola 68HC Macro Assembler, version 4.1. Maxim holds the copyright but allows customers to adapt the program for their own use without charge.   |
|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| EVKIT.ASM     | Source code defining the program interface with the Maxim 68HC16 module ROM (rev. 1)                                                                                                                                                    |
| UPGRADE1.INC  | Source code adding enhanced services (rev. 2) for the older Maxim 68HC16 module ROM (rev. 1)                                                                                                                                            |
| QSPI.ASM      | Source code defining the program interface with the Motorola QSPI™ (Queued Serial Peripheral Interface)                                                                                                                                 |
| GPT.ASM       | Source code defining the program interface with the Motorola GPT peripheral. Provides general-purpose I/O pins.                                                                                                                         |

## Evaluating the MAX127/MAX128

The MAX1270 EV board may be used to evaluate the MAX127 or MAX128 with a user-supplied, 2-wire controller and software. Replace U1 with the MAX127ACNG or  MAX128ACNG. Cut the default trace on the back of the board under JU1 (marked with an arrow). Short pins 1 and 2 of jumper JU1. Connect your two-wire interface to SCL, SDA, and GND. Install 100 Ω resistors at R2, R3, R4, and R5. With the address select pins pulled down by R3, R4, and R5, the two-wire device address is 01010000 for writing commands to the part and 01010001 for reading data from the part. Refer to the MAX127 data sheet for waveforms and timing requirements.

Note: The MAX1270 EV system software does not support the MAX127 or MAX128.

## Quick Start

<!-- image -->

## MAX1270 EV Kit/EV System

-  An IBM PC-compatible computer running Windows 3.1 or Windows 95
-  A  spare serial communications port, preferably a 9-pin plug
-  A serial cable to connect the computer's serial port to the Maxim 68HC16MODULE-DIP module

## Procedure

- 1) Carefully connect the boards by aligning the 40-pin header of the MAX1270 EV kit with the 40-pin connector of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 2) Connect an +8V to +12V DC-power source to the µC module at terminal block J2, located next to the ON/OFF switch, along the top edge of the µC module. Observe the polarity marked on the board.
- 3) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter is required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 4) Install the software on your computer by running the INSTALL.EXE program on the floppy disk. The program files are copied and icons are created in the Windows 3.1 Program Manager (or the Windows 95 Start Menu). The EV kit software evaluates both the MAX1270 and the MAX1271.
- 5) Start the MAX1270 program by opening its icon in the Program Manager (or Start Menu).
- 6) The program will prompt you to connect the µC module and turn its power on. Slide SW1 to the 'ON' position. Select the correct serial port, and click OK. The program will automatically download KIT1270.C16 to the module.

When the software successfully establishes communication with the EV kit board, you will see a Device Characteristics Tool and some other windows.  The  default  device  setting  is  for  the MAX1270. If you are using the MAX1271, select MAX1271 in the Device Characteristics dialog box, and click the Apply button.

- 7) Apply input signals to the inputs labeled CH0-CH7, at  the  right  edge  of  the  MAX1270 EV kit board. Observe the readout on the screen.

<!-- image -->

## Using Op Amp Buffers

Applications measuring high-impedance sources may require buffers to ensure full measurement accuracy. The MAX1270EVKIT can be used with optional usersupplied quad op amp buffers. Simply unplug the 14pin headers at U2 and U3 and install a suitable unitygain-stable quad op amp.

## Detailed Description

## of Software

The various program functions are grouped into dialog boxes that are accessible from the Window menu on the main menu bar.

## Keyboard Navigation

If  a  mouse  or  other  pointing  device  is  not  available, operate the program using the following keyboard shortcuts.

-  Press ALT+W to bring up the Window menu and then select a tool window.
-  Press the TAB key to select controls within the selected tool window.
-  Activate buttons by pressing the space bar.
-  Use the up/down arrow keys for check boxes, radio buttons, and combo boxes.

## Scan Tool

You can take readings automatically from selected channels at regular intervals up to 10 samples per second by selecting Scan Tool from the Window menu. The Channel Selection and Configuration group controls which channels will be scanned.

The Scan-Rate combo box controls the rate at which measurements are made. Readings are displayed in the Recent Values text area.

## Table 1. Keyboard Navigation Shortcuts

| KEY                | FUNCTION                                         |
|--------------------|--------------------------------------------------|
| TAB                | Select next control                              |
| ALT+W              | Window menu                                      |
| ALT + space        | System menu of main program window               |
| ALT + minus        | System menu of child window                      |
| Space Bar          | Click on the selected button                     |
| ALT + Print Screen | Copy the image of main window onto the clipboard |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1270 EV Kit/EV System

## Low-Speed Data Logging

You may optionally record readings into a data log file. Click on the New Log button to begin or end data logging. The Log File Format dialog box is displayed. One complete line of data is written after all enabled channels have been sampled. The first line of the log file contains the column headings. Each subsequent line contains all enabled channels, separated by commas, tabs, or spaces (previously selected in the Log File Format dialog box). Once a log file has been opened, it can be paused or resumed with the Pause button. The program continues to write data to the log file until the Stop Log button is clicked.

## One-Shot Read Tool

The One-Shot Read Tool allows direct control of the A/D configuration. Select the channel and mode of operation to update the Control Byte display, or change individual bits within the Control Byte directly, and observe the change in the channel selection control. The Read Now button writes the configuration information to the A/D and performs one reading.

## Power-Cycling Tool

When using its internal reference, the MAX1270 can be shut down between measurements to reduce average supply-current demand. From the Window menu, select Power-Cycling Tool. The amount of power savings depends primarily on how long the part is off between conversions. The accuracy of the conversions depends on the power-up delay, the reference capacitor, and the time in power-down. Adjust the off-time with the Delay-Between-Samples command. Adjust the on-time with the Power-Up Delay command.

Using an adequate power-up delay will ensure the desired conversion accuracy during power-cycling modes. The reference must be allowed enough time to stabilize  before  the  measurement is performed. Start with zero Power-Up Delay and increase the delay time until  no  further  change  in  accuracy  is  observed.  The power-up delay requirement depends on the value of the reference capacitor and the off-time (delay between samples).

The MAX1270 EV kit software performs power-up by writing  a  configuration  selecting  standby mode. After powering-up, the power-up delay is executed to allow time for the reference voltage to stabilize for an accurate measurement.

## Internal-Clock Mode

To operate in internal-clock mode (13 clocks per conversion),  select  Internal  Clock  from  the  list  of  choices under Power-Up Mode.

## External-Clock Mode

To operate in external-clock mode (18 clocks per conversion),  select  External  Clock  from  the  list  of  choices under Power-Up Mode.

## Sampling Tool

To sample data at rates up to 12ksps (samples per second), select Sampling Tool from the Window menu, make your selections, and click on the Start button. Adjust the timing delays as appropriate to control the sample rate. Estimate the effective sample rate by taking the reciprocal of the sum of the delay between samples, the power-up delay, and the conversion time. Sample size is restricted to a power of two, so that the Fast Fourier Transform Tool (FFT) can process the data. Sample Size controls the number of samples collected on each selected channel. After the samples have been collected, the data automatically uploads to the host and is graphed. Once displayed, the data can be saved to a file.

## FFT Tool

The MAX1270 evaluation software includes an FFT Tool that can display the spectral content of data collected with the Sampling Tool.

To view the spectral content of a waveform, first select a data sample that was previously collected with the Sampling Tool, then select FFT Tool from the Window menu. Check the output plots desired, and click on the Start button.

A data-windowing function preprocesses the data sample before performing an FFT. When the input signal is not synchronized to the sampling clock, spectral energy appears to leak into nearby frequency bins. A suitable data window tapers the raw data to zero amplitude at the beginning and end, reducing the spectral energy l eak.  For  more  information  on  the  Fast  Fourier Transform and data-windowing functions, refer to W. H. Press, et al.,  Numerical Recipes in Pascal: The Art of Scientific Computing, Cambridge University Press, 1989, ISBN 0-521-37516-9.

## Noise-Analysis Tool

The evaluation software includes a Noise-Analysis Tool that calculates some statistics of data collected with the Sampling Tool.

To view a statistical analysis, first select a data sample previously collected with the Sampling Tool, then select Noise-Analysis Tool from the Window menu.

Minimum and maximum values are the smallest and largest values that occur in the data record. Peak-topeak voltage is calculated as the difference between minimum and maximum values.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1270 EV Kit/EV System

Average value is the arithmetic mean; i.e., the sum of all values divided by the number of samples. Standard deviation is used as an approximation to RMS voltage.

## Table 2. Jumper Functions

## Device Characteristics

The Device Characteristics dialog box is used to select between the MAX1270 and MAX1271.

## Evaluating the MAX1271

The MAX1270 software can evaluate the MAX1271 directly.  From  the  Window  menu,  pick Device Characteristics .  Next,  change the device type from MAX1270 to MAX1271 and click the Apply button. This tells  the  program that the input voltage span is ±VREF instead of ±10V.

## Changing the Reference Voltage

The MAX1270 EV kit software assumes a 4.096V reference voltage, unless otherwise specified by the user. To use the on-board MAX6141 reference (VREF = 4.096V) close JU2 and JU3. For an external, user-supplied reference, close JU2, open JU3, and apply the reference to the VREF pad. To use the internal reference, open JU2 and JU3. See the MAX1270 data sheet for more information.  From  the  Window  menu,  select  Device Characteristics, then type the new reference voltage into the Reference Voltage edit box.

## Detailed Description of Hardware

U1 is a MAX1270/MAX1271/MAX127/MAX128 analogto-digital  converter.  C10  bypasses  the  internal bandgap reference, and C11 bypasses the 4.096 volt reference output. Sockets U2 and U3 accommodate optional unity-gain-stable quad op amp buffers. C2-C9 and R6-R13 form anti-aliasing input filters for the eight input channels. U4 is an optional MAX6141 external reference. U5 is a linear regulator that provides +5V to U1 when used in stand-alone mode.

## Measuring Supply Current

Supply current can be monitored by measuring the voltage across resistor R1. This resistor is 10 Ω ±5%, so every 1mV across R1 represents 100µA of supply current.

<!-- image -->

| JUMPER   | STATE   | FUNCTION                                                                                                                                                      |
|----------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2     | U1 = MAX127 or MAX128. Use 2-wire interface signals on TP1 test points.                                                                                       |
| JU1      | 2-3*    | U1 = MAX1270 or MAX1271. Use 3-wire interface signals on TP1 test points, or use 68HC16 module and supplied software.                                         |
| JU2      | Open    | Enable U1's internal reference. JU3 must be open.                                                                                                             |
| JU2      | Closed* | Disable U1's internal reference. Refer to Table 3, Voltage Reference Truth Table.                                                                             |
| JU3      | Open    | If JU2 is open, selects internal reference. If JU2 is closed, user must provide reference at VREF input pad. Refer to Table 3, Voltage Reference Truth Table. |
| JU3      | Closed* | Use voltage reference U4. Jumper JU2 must be closed.                                                                                                          |

## Table 3. Voltage Reference Truth Table

| JU2    | JU3    | FUNCTION                             |
|--------|--------|--------------------------------------|
| Open   | Open   | Enable U1's internal reference       |
| Open   | Closed | Invalid operating configuration      |
| Closed | Open   | User must provide a reference at the |
| Closed | Closed | Use voltage reference U4             |

## Troubleshooting

## Problem: No output measurement. System seems to report zero voltage or fails to make a measurement.

- Check the +5V supply voltage. Check the buffer opamp supply voltages if applicable.
- Check the VREF and REFADJ reference voltages using a digital voltmeter.
- Use an oscilloscope to verify that pin 5 (SCLK/SCL) is receiving clock strobe pulses.
- Verify that SHDN is not being pulled low.

## Problem: Erratic, unstable measurement. Use an oscilloscope to measure:

- VREF-increase reference capacitor if necessary.
- SHDN -ensure that shutdown mode is not activated.
- Analog input (while triggering on DIN)-large voltage disturbances can be cured by using an op amp buffer (see Op Amp Buffers section ).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1270 EV Kit/EV System

Figure 1.  MAX1270 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1270 EV Kit/EV System

<!-- image -->

Figure 2.  MAX1270 EV Kit Component Placement GuideComponent Side

Figure 3.  MAX1270 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4.  MAX1270 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7

## Evaluates:  MAX1270/MAX1271/MAX127/MAX128