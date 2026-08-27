<!-- lastmod 2022-08-03 -->
## General Description

The MAX115 evaluation system (EV system) is a complete, eight channel data-acquisition system consisting of  a  MAX115 evaluation kit (EV kit) and a Maxim 68HC16MOD-16WIDE microcontroller (µC) module. The MAX115 is a high speed, multichannel, 12-bit data acquisition system with simultaneous track/holds. Windows 3.1/Windows 95 software provides a handy user interface to exercise the MAX115's features.

Order the complete EV System (MAX115EVB16) for comprehensive evaluation of the MAX115 using a personal computer. Order the EV kit (MAX115EVKIT) if the 68HC16MOD-16WIDE Module has already been purchased with a previous Maxim EV system or for custom use in other µC-based systems.

## MAX115EVKIT/MAX116EVKIT Parts List

| DESIGNATION                 |   QTY | DESCRIPTION                            |
|-----------------------------|-------|----------------------------------------|
| C1, C2, C4, C5, C6, C9, C10 |     7 | 0.1µF ceramic 1206 chip capacitors     |
| C3, C8                      |     2 | 10µF, 25V tantalum capacitors          |
| C7                          |     1 | 4.7µF, 6.3V tantalum capacitor         |
| C11                         |     1 | 100pF ceramic 1206 chip                |
| P1, P2                      |     2 | 2 x 20 right angle sockets             |
| R1, R6                      |     2 | 100 Ω ±1% 1206 chip resistors          |
| R2, R3, R4, R5              |     4 | 10k Ω ±5% 1206 chip resistors          |
| R7, R8                      |     1 | 10 Ω ±5% 1206 chip resistors           |
| U1                          |     1 | Maxim MAX115CAX or MAX116CAX           |
| U2                          |     1 | 78L05 voltage regulator                |
| U3                          |     1 | 74HCT244                               |
| U4                          |     1 | 79L05 negative voltage regulator       |
| U5                          |     1 | 16MHz clock oscillator module          |
| NONE                        |     1 | PC board                               |
| NONE                        |     1 | Software disk, 'MAX115 Evaluation Kit' |

## MAX115 EV Kit File List

| INSTALL.EXE   | Installs the EV kit files on your computer   |
|---------------|----------------------------------------------|
| MAX115.EXE    | Application program                          |
| MAX115.HLP    | Help file                                    |
| KIT125.B16    | Software loaded into 68HC16                  |
| MAX115.INI    | Program settings                             |
| UNINST.EXE    | Removes the EV kit files from your computer  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Features

- ♦ Proven PC Board Layout
- ♦ Complete Evaluation System Samples to 40ksps
- ♦ Convenient Test Points Provided On-Board
- ♦ Data-Logging Software with FFT Capability
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE      | INTERFACE TYPE   |
|--------------|------------------|------------------|
| MAX115 EVKIT | 0 ° C to +70 ° C | User-Supplied    |
| MAX115EVB16  | 0 ° C to +70 ° C | Windows Software |
| MAX116 EVKIT | 0 ° C to +70 ° C | User-Supplied    |
| MAX116EVB16  | 0 ° C to +70 ° C | Windows Software |

## MAX115EVB16 System Component List

| PART               |   QTY | DESCRIPTION                                     |
|--------------------|-------|-------------------------------------------------|
| MAX115EVKIT        |     1 | MAX115 Evaluation Kit                           |
| 68HC16 MOD- 16WIDE |     1 | 68HC16 µC Module with 16-bit parallel interface |

## MAX116EVB16 System Component List

| PART               |   QTY | DESCRIPTION                                     |
|--------------------|-------|-------------------------------------------------|
| MAX116EVKIT        |     1 | MAX116 Evaluation Kit                           |
| 68HC16 MOD- 16WIDE |     1 | 68HC16 µC Module with 16-bit parallel interface |

Maxim Integrated Products

## MAX115 Evaluation Kit

## MAX115 Stand-Alone EV Kit

The MAX115 EV kit provides a proven PC board layout to facilitate evaluation of the MAX115. It must be interfaced to appropriate timing signals for proper operation.  Dual  power  supplies  (±8VDC min, ±20VDC max) should be applied to P1-5, P1-9, with ground at P1-1. Connect active-low read strobe to P1-38, connect write strobe to P1-37, and connect memory mapped chip selects to P1-35 and P1-36. Refer to Figure 1, MAX115 EV Kit Schematic for  board schematic. Refer to the MAX115 data sheet for timing requirements.

## MAX115 EV System

The MAX115/MAX116 EV systems operate from a usersupplied +13V to +20V DC power supply. Windows 3.1/95 software running on an IBM PC interfaces to the EV system board through the computer's serial communications port. The software can be operated with or without a mouse. Refer to Quick Start section for setup and operating instructions.

The MAX115 software is designed for use with the complete  evaluation  system MAX115EVB16 or MAX116EVB16 (includes 68HC16MOD-16WIDE module together with MAX115EVKIT or MAX116EVKIT ).  If the MAX115 evaluation software will not be used, the MAX115EVKIT board can be purchased by itself without the microcontroller.

To evaluate the MAX116, order the complete evaluation system MAX116EVB16 or just the interface board MAX116EVKIT .

## Quick Start

Before you begin, you will need:

- Maxim's MAX115EVB16 (contains MAX115EVKIT board and 68HC16MOD-16WIDE)
- A small DC power supply (+13V to +20V DC at 250mA)
- An IBM PC-compatible computer running Windows 3.1 or Windows 95
- A spare serial communications port (9-pin plug)
- A serial cable to connect the computer's serial port to the Maxim 68HC16MOD-16WIDE module
- 1) Carefully connect the boards by aligning the two 40-pin headers of the MAX115 EV kit with the two 40-pin connectors of the 68HC16MOD-16WIDE module. Gently press them together. The two boards should be flush against one another.
- 2) Connect a +13V to +20V DC power source to the µC module at the terminal block located next to the

2

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- on/off switch along the top edge of the µC module. Observe the polarity marked on the board.
- 3) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter will be required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 4) Install the MAX115 EV kit software on your computer  by  running the INSTALL.EXE program on the floppy disk. The program files are copied and icons are created for them in the Windows 3.1 Program Manager (or the Windows 95 Start Menu).
- 5) Start  the  MAX115 program by opening its icon in the Program Manager (or Start Menu).
- 6) The program will prompt you to connect the µC module and turn its power on. Slide SW1 to the 'ON' position. Select the correct serial port, and click OK. The program will automatically download KIT125.B16 to the module.
- 7) Apply input signals to the inputs labeled CH1ACH4A at the bottom edge of the MAX115 EV kit board. Observe the readout on the screen.

## Detailed Description of Software

The MAX115 digitizes up to four inputs from either the A or B input bank. Conversion time is determined by the number of enabled inputs. The software collects samples at a maximum throughput of 40ksps (one channel) to  26ksps (four channels). The various program functions are grouped into dialog boxes, which are accessible from the Window menu on the main menu bar.

## Keyboard Navigation

If  a  mouse  or  other  pointing  device  is  not  available, operate the program using the following keyboard shortcuts. Press ALT+W to bring up the Window menu and then select a tool window. Press the TAB key to select controls within the selected tool window. Buttons are activated by pressing the space bar. Check boxes, radio buttons, and combo boxes respond to the up/down arrow keys. Refer  to  Table  1, Keyboard Navigation Shortcuts .

<!-- image -->

Table 1. Keyboard Navigation Shortcuts

| KEY                | FUNCTION                                         |
|--------------------|--------------------------------------------------|
| TAB                | Select next control                              |
| ALT+W              | Window menu                                      |
| ALT + space        | System menu of main program window               |
| ALT + minus        | System menu of child window                      |
| Space Bar          | Click on the selected button                     |
| ALT + Print Screen | Copy the image of main window onto the clipboard |

## Low-Speed Data Logging

Readings can be taken automatically from user-selected channels at regular intervals up to ten samples per second by selecting ' Scan Tool ' from the ' Window 'menu. The Channel Selection and Configuration group controls  which channels shall be scanned, and (where applicable) configures each channel for bipolar and/or differential input. The Bipolar and Differential controls are disabled because the MAX115 inputs are always bipolar and never differential. The scan rate combo box controls the rate at which measurements are made. Readings are displayed in the Recent Values text area. Readings may optionally be recorded into a data log file. Click on the ' New Log ' button to begin or end data logging. This brings up the " Log File Format " dialog box. One complete line of data is written after all enabled channels have been sampled. The first line of the log file contains the column headings. Each subsequent line of the log file contains all enabled channels, separated by commas, tabs, or spaces (previously selected in the Log File Format dialog box). Once a log file  has  been  opened, it  can  be  paused or resumed with the corresponding Log menu commands. The program continues to write data to the log file until the Stop Log button is clicked.

## One-Shot Read Tool

The One-Shot Read Tool allows direct control of the A/D configuration. Select the channel and mode of operation to update the Control Byte display, or change the Control Byte bits directly and observe the change in the channel selection control. The Read Now button writes the configuration information to the A/D, and performs one reading.

## Power Cycling Tool

To reduce average supply current demand, the MAX115 can be shut down between conversions. From

<!-- image -->

## MAX115 Evaluation Kit

the ' Window ' menu, select ' Power Cycling Tool '. The amount of power savings depends primarily on how long the part is off between conversions. The accuracy of the conversions depends on the power-up delay, the reference capacitor, and the time in power-down. Adjust the off-time with the delay between samples command. Adjust the on-time with the power-up delay command.

Using an adequate power-up delay will ensure the desired conversion accuracy during power cycling modes. The reference must be allowed enough time to stabilize  before  the  measurement is performed. Start with zero power-up delay and increase the delay time until  no  further  change  in  accuracy  is  observed.  The power-up delay requirement depends on the value of the reference capacitor and the off-time.

The MAX115 EV kit software performs power-up by writing a configuration word with the shutdown bit set. After  powering up, the power-up delay is executed to allow time for the reference voltage to stabilize so that an accurate measurement may be performed.

## Sampling Tool

To sample data at rates up to 40ksps (samples per second), select ' Sampling Tool '  from  the  ' Window ' menu, make your selections, and click on the Start button. The timing delays may be adjusted as appropriate to  control  the  sample  rate.  The  effective  sample  rate can be estimated by taking the reciprocal of the sum of the delay between samples, the power-up delay and the conversion time. Sample size is restricted to a power of two, so that the data can be processed by the FFT tool. The sample size control controls the number of  samples collected on each selected channel. After the samples have been collected, the data is automatically  uploaded to the host and is graphed. Once displayed, the data can optionally be saved to a file.

## FFT Tool

The MAX115 evaluation software includes an FFT (Fast Fourier Transform) tool that can display the spectral content of data collected with the high-speed sampling tool.  To  view  the  spectral  content  of  a  waveform,  first select a data sample that was previously collected with the high-speed sampling tool. Then, select ' FFT Tool ' from the ' Window '  menu. Check the output plots desired, and click on the Start button. A data windowing function preprocesses a data sample before performing the FFT. When the input signal is not synchronized to the sampling clock, spectral energy appears to leak into nearby frequency buckets. A suitable data

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX115 Evaluation Kit

window tapers the raw data to zero amplitude at the beginning and end, reducing this spectral leakage.  For more information on the fast fourier transform and data windowing  functions,  refer  to  W.H.Press  et  al, Numerical Recipes in Pascal: the Art of Scientific Computing , Cambridge University Press, 1989, ISBN 0521-37516-9.

## Device Characteristics

The device characteristics dialog box contains parameters that are not expected to change often. The device selection is used to evaluate devices similar to the main device type.

## Evaluating the MAX116

The MAX115 software can evaluate the MAX116 directly. From the ' Window ' menu, pick ' Device Characteristics '. Next, change the device type from MAX115 to MAX116. This tells the program that the input voltage span is ±VREF instead of ±2VREF.

## Changing the Reference Voltage

The MAX115 EV kit software assumes a +2.5V reference voltage, unless otherwise specified. Apply an external +2.5V reference to the REFIN pad to overdrive the internal reference. See the MAX115 data sheet for more information. From the ' Window '  menu, select ' Device Characteristics '. Type the new reference voltage into the reference voltage edit box.

## Detailed Description of Hardware

The MAX115 (U1) is a high-speed, multichannel, 12-bit data-acquisition system with simultaneous track/holds. Linear regulators (U2 and U4) make clean analog ±5V power supplies for the MAX115. R8 and C1 filter digital noise out of the analog power supply. U3 isolates the CS ,  RD, WR, and CONVST signals from the main system bus to further prevent digital noise from entering the  MAX115. Refer to Figure 1, MAX115 EV Kit Schematic and the MAX115 data sheet.

CS7 is the chip-select output for the 7E000 memorymapped I/O area, which the EV system uses to write the configuration byte to, and read data from the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MAX115. CS8 is the chip-select output for the 7E800 memory-mapped I/O area, which the EV system uses to generate the conversion start strobe that signals the MAX115 to sample its inputs.

## Measuring Supply Current

EV kit supply current can be monitored by measuring the voltage across resistor R1 (for the +5V supply) or R6 (for the -5V supply). These resistors are 100 Ω ±1%, thus 0.001V across R1 represents 10µA of supply current.

## Troubleshooting

## Problem: No output measurement. System seems to report zero voltage, or fails to make a measurement.

Check +5V and -5V supply voltages. Check the 2.5V REFOUT reference voltage using a digital voltmeter. Use an oscilloscope to verify that the 16MHz clock is running and that the conversion-start signal is being strobed.

## Problem: Measurements are erratic, unstable; poor accuracy.

Check the reference voltage using a digital voltmeter. Use an oscilloscope to check for noise. When probing for noise, keep the oscilloscope ground return lead as short as possible, preferably less than 1/2 in (10mm).

## Problem: Inputs appear on wrong channels.

Check the MAX115 clock pin with an oscilloscope. A crystal oscillator module with fast rise/fall times can overshoot or undershoot the power supply rails, violating  device operation limits. Use a lowpass filter (such as R7 and C11 on the MAX115 EV kit) to eliminate clock overshoot.

<!-- image -->

## MAX115 Evaluation Kit

Figure 1. MAX115/MAX116 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX115 Evaluation Kit

Figure 2. MAX115/MAX116 EV Kit Component Placement Guide

<!-- image -->

Figure 3. MAX115/MAX116 EV Kit  PC Board Layout Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX115 Evaluation Kit

Figure 4. MAX115/MAX116 EV Kit PC Board Layout - Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.