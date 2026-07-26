<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1284 Evaluation Kit/Evaluation System

## General Description

The MAX1284 evaluation system (EV system) is a complete data-acquisition system consisting of a MAX1284 evaluation kit (EV kit), Maxim 68HC16MODULE-DIP microcontroller (µC) module, and USBT0232. The MAX1284 is a high-speed, 12-bit data acquisition system. Windows ® 98/2000/XP-compatible software provides a handy user interface to exercise the MAX1284's features.

Order the complete EV system (MAX1284EVC16) for comprehensive evaluation of the MAX1284 using a PC. You can order the EV kit (MAX1284EVKIT) if the 68HC16MODULE-DIP module has already been purchased with a previous Maxim EV system, or for custom use in other µC-based systems.

Windows is a registered trademark of Microsoft Corp.

## MAX1284 EV System Component Lists

| PART             |   QTY | DESCRIPTION                   |
|------------------|-------|-------------------------------|
| MAX1284EVKIT     |     1 | MAX1284 EV kit                |
| 68HC16MODULE-DIP |     1 | 68HC16 µ C module             |
| USBT0232+        |     1 | USB-to-COM port adapter board |

## MAX1284 EV Kit

| DESIGNATION   |   QTY | DESCRIPTION                    |
|---------------|-------|--------------------------------|
| C1            |     1 | 0.01 µ F ceramic capacitor     |
| C2, C3        |     2 | 0.1 µ F ceramic capacitors     |
| C4            |     1 | 4.7 µ F tantalum capacitor     |
| C5            |     1 | 10 µ F, 10V tantalum capacitor |
| J1            |     1 | 2x20 right-angle socket        |
| JU1           |     1 | 2-pin header                   |
| JU2           |     1 | 3-pin header                   |
| R1            |     1 | 1k Ω ± 5% resistor             |
| TP1           |     1 | 6-pin header                   |
| U1            |     1 | MAX1284BCSA (8-pin SO)         |
| -             |     1 | PCB: MAX1284 Evaluation Kit    |

## MAX1284 EV Kit Files

| FILE        | DESCRIPTION                                |
|-------------|--------------------------------------------|
| INSTALL.EXE | Installs the EV kit files on your computer |
| MAX1284.EXE | Application program                        |
| KIT1284.C16 | Software loaded into 68HC16 µ C            |

- ♦ Proven PCB Layout
- ♦ Convenient On-Board Test Points
- ♦ Data-Logging Software
- ♦ Fully Assembled and Tested
- ♦ EV Kit Software Supports Windows 98/2000/XP with RS-232/COM Port
- ♦ EV Kit Software Supports Windows 2000/XP with USB Port

## Ordering Information

| PART         | TEMP. RANGE   | INTERFACE TYPE   |
|--------------|---------------|------------------|
| MAX1284EVKIT | 0°C to +70°C  | User supplied    |
| MAX1284EVC16 | 0°C to +70°C  | Windows software |

Note: The MAX1284 software is designed for use with the complete MAX1284EVC16 EV system (includes 68HC16MODULE-DIP module, USBT0232, together with MAX1284EVKIT). If the MAX1284  evaluation  software  will  not  be  used,  the MAX1284EVKIT board can be purchased by itself, without the µC.

## Quick Start

## Recommended Equipment (USB Port/PC Connection Option)

Before beginning, the following equipment is needed:

- MAX1284 EV system: MAX1284 EV kit 68HC16MODULE-DIP USBTO232 (USB cable included)
- A small DC power supply, such as a 12VDC, 0.25A plug-in transformer or a 9V battery
- A user-supplied Windows 2000/XP computer with an available USB port to connect to the USBTO232 board

Note: In  the  following  sections,  software-related  items are identified by bolding. Text in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers  to  items  from  the  Windows  2000/XP operating system.

## Connections and Setup

The MAX1284 EV kit is fully assembled and tested. Follow the steps below to verify board operation.

Caution: Do not turn on the power until all connections are completed.

- 1) Visit  the  Maxim website (www.maxim-ic.com) to download the latest version of the USBTO232 User Guide. Follow the steps in the USBTO232 User Guide Quick Start section and return to step 2 of this Quick Start section when finished.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For free samples and the latest literature, visit www.maxim-ic.com or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

Features

## MAX1284 Evaluation Kit/Evaluation System

- 2) Carefully connect the boards by aligning the 40-pin header of the MAX1284 EV kit with the 40-pin connector of the 68HC16MODULE-DIP module, both boards component side up. Gently press them together. The two boards should be flush against one another.
- 3) Ensure that jumper JU1 is open and jumper JU2 is in the 1-2 position.
- 4) Connect a +7VDC to +20VDC power source to the µC module at the terminal block located next to the on/off switch, along the top-edge of the µC module. Observe the polarity marked on the board.
- 5) Connect the USBTO232 board to the 68HC16MODULE-DIP module if you have not done so already.
- 6) The MAX1284 EV kit software should have already been downloaded and installed in the USBTO232 Quick Start.
- 7) Start the MAX1284 program by opening its icon in the Start | Programs menu.
- 8) Turn on the power supply and slide SW1 to the ON position on the 68HC16MODULE-DIP module. Press the OK button to automatically connect and download the file KIT1284.C16 to the module.
- 9) Apply an input signal between AIN and GND. Observe the readout on the screen.

## Recommended Equipment (RS-232-to-COM Port/PC Connection Option)

Before beginning, the following equipment is needed:

- MAX1284 EV system: MAX1284 EV kit 68HC16MODULE-DIP
- A small DC power supply, such as a 12VDC, 0.25A plug-in transformer or a 9V battery
- A user-supplied Windows 98/2000/XP computer with an available serial communications port, preferably a 9-pin plug
- A serial cable to connect the computer's serial port to the 68HC16MODULE-DIP

## Connections and Setup

The MAX1284 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power until all connections are completed.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the file (if it is a .zip file).
- 2) Install  the  MAX1284 EV kit software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created for them in the Windows Start | Programs menu.
- 3) Carefully connect the boards by aligning the 40-pin header of the MAX1284 EV kit with the 40-pin connector of the 68HC16MODULE-DIP module, both boards component side up. Gently press them together. The two boards should be flush against one another.
- 4) Ensure that jumper JU1 is open and jumper JU2 is in the 1-2 position.
- 5) Connect a +7VDC to +20VDC power source to the µC module at the terminal block located next to the on/off switch, along the top-edge of the µC module. Observe the polarity marked on the board.
- 6) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a straight-through, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin-to-9-pin adapter will be required. The EV kit software checks the modem status lines (CTS, DSR, and DCD) to confirm that the correct port has been selected.
- 7) Start the MAX1284 program by opening its icon in the Start | Programs menu.
- 8) Turn on the power supply and slide SW1 to the ON position. Select the correct serial port and press OK .  The  program will automatically download KIT1284.C16 to the module.
- 9) Apply an input signal between AIN and GND. Observe the readout on the screen.

## Table 1. Jumper JU1 Functions

| JUMPER   | POSITION   | FUNCTION                            |
|----------|------------|-------------------------------------|
| JU1      | Closed     | SHDN driven by µC; JU2 must be open |
|          | Open*      | SHDN set by JU2                     |
| JU2      | 1-2*       | Operate                             |
| JU2      | 2-3        | Shutdown                            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1284 Evaluation Kit/Evaluation System

Figure 1. MAX1284 EV Kit Schematic Diagram

<!-- image -->

## Detailed Description

## MAX1284 Stand-Alone EV Kit

The MAX1284 EV kit provides a proven PCB layout to evaluate the MAX1284. It must be interfaced to appropriate timing signals for proper operation. Connect +5V to VDD, and connect the ground return to GND (Figure 1). Refer to the MAX1284 data sheet for timing requirements.

## MAX1284 EV System

The MAX1284 EV system operates from a user-supplied +7VDC to +20VDC power supply. Windows 98/2000/XP-compatible software running on a PC interfaces to the EV system board through the computer's serial communications port. See the Quick Start section for setup and operating instructions.

<!-- image -->

## Description of Software

The evaluation software's main window controls the serial-clock speed and sample rate. It displays the voltage and output code as well as some statistics of the input signal. A separate graph window shows the data changing in real time. The update rate is limited to about 10 samples per second, due to COM port bandwidth limitations.

## Statistics

The Minimum and Maximum fields show the highest and lowest readings acquired. The Average field shows a running mean based on the equation ai = (k)(xi) + (1 - k)(ai - 1).  The Clear button resets the statistics. To remove offset errors, first apply 0V to the active input channel, clear statistics, acquire some samples, and then check Tare . This average offset voltage will now be subtracted from all subsequent measurements.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1284 Evaluation Kit/Evaluation System

## Sampling

Choose the desired sampling rate (QSPI™ Clock), sampling size ( Sample! menu item), and press Begin Sampling! (in Sample! pop-up window). Sample size is restricted to a power of 2 to permit FFT processing once the data is saved to a file. After the samples have been collected, the data is automatically uploaded to the host and graphed. Once displayed, the data can be saved optionally to a file.

## Saving Graphs to Disk

Data in the real-time graph and in sampled data graphs may be saved to a file. Only the raw output codes are saved, but voltages may be inferred, based on the reference voltage and the maximum code value.

## Evaluating Shutdown

The evaluation software configures the 68HC16's QSPI submodule  to  continuously  read  data  from  the MAX1284 into the 68HC16. The sample rate is controlled  by  the  QSPI  clock.  To  evaluate  power-saving modes, these automatic updates must be stopped. First, set the QSPI clock control to STOP . This reconfigures the 68HC16's QSPI submodule to stop driving the serial clock. Second, in the evaluation software's main window, uncheck the Read Every...msec checkbox. If evaluating the hardware shutdown, move jumper JU2 to the 2-3 position.

## Reference Voltage

The evaluation software assumes a 2.5V reference voltage, unless otherwise specified. Refer to the MAX1284 data sheet for more information. To override this value, type the new reference voltage into the Vref edit  box and press the Set Vref button.

## Detailed Hardware Description

The MAX1284 (U1) is a high-speed, 12-bit dataacquisition system. Resistor R1 (1k Ω ) and capacitor C1 (0.01µF) form a single-pole, low-pass anti-aliasing filter with a nominal 10µs time constant and a corner frequency of approximately 16kHz. C3 and C4 bypass the analog-to-digital converter's (ADC's) voltage reference. When plugged into the 68HC16MODULE, the VDD circuit is powered by +5V (Figure 1; refer to the MAX1284 IC data sheet).

## Troubleshooting

Problem: No output measurement. System seems to report zero voltage or fails to make a measurement.

- 1) Check the VDD supply voltage.
- 2) Check the reference voltage using a DVM.
- 3) Use an oscilloscope to verify that the conversionstart  signal is being strobed. Verify that SHDN is being driven high.

## Problem: Measurements are erratic, unstable; poor accuracy.

- 1) Check the reference voltage using a DVM.
- 2) Use an oscilloscope to check for noise.
- 3) When probing for noise, keep the oscilloscope ground return lead as short as possible, preferably less than 1/2in (10mm).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1284 Evaluation Kit/Evaluation System

Figure 2. MAX1284 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 3. MAX1284 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1284 Evaluation Kit/Evaluation System

Figure 4. MAX1284 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: Title change-all pages, 1-6

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6