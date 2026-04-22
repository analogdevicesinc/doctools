<!-- lastmod 2023-09-11 -->
<!-- image -->

## General Description

The MAX1117 evaluation system (EV system) is a complete two-channel data-acquisition system consisting of a MAX1117 evaluation kit (EV kit) and a Maxim 68L11DMODULE microcontroller (µC) module. The MAX1117 is a high-speed, 8-bit data-acquisition system. Windows 95/98 ® software provides a handy user interface to exercise the MAX1117's features.

Order the complete EV System (MAX1117EVL11) for comprehensive evaluation of the MAX1117 using a personal computer. Order the EV kit (MAX1117EVKIT) if the 68L11DMODULE module has already been purchased with a previous Maxim EV system, or for custom use in other µC-based systems.

## Component List

## MAX1117EVL11 System

| PART         |   QTY | DESCRIPTION       |
|--------------|-------|-------------------|
| MAX1117EVKIT |     1 | MAX1117 EV Kit    |
| 68L11DMODULE |     1 | 68HC11 µ C Module |

## MAX1117EVKIT

| REFERENCE   |   QTY | DESCRIPTION                           |
|-------------|-------|---------------------------------------|
| C1          |     1 | 0.1µF ceramic capacitor               |
| C2, C3      |     2 | 100pF ceramic capacitors              |
| C4          |     0 | Open                                  |
| J1          |     1 | 2 ✕ 20 right angle socket             |
| JU1, JU2    |     2 | 2-pin headers                         |
| TP1         |     1 | 5-pin header                          |
| U1          |     1 | Maxim MAX1117EKA                      |
| U2          |     1 | Maxim MAX6025BEUR-T                   |
| None        |     1 | PC Board, MAX1117 EV Kit              |
| None        |     1 | 3 1/2in software disk, MAX1117 EV kit |
| None        |     1 | MAX1117 EV kit data sheet             |
| None        |     1 | MAX1117 data sheet                    |

Windows 95/98 is a registered trademark of Microsoft Corp.

- ♦ Proven PC Board Layout
- ♦ Convenient On-Board Test Points
- ♦ Data-Logging Software
- ♦ Fully Assembled and Tested

## Ordering Information

| PART NUMBER   | TEMP. RANGE   | INTERFACE TYPE   |
|---------------|---------------|------------------|
| MAX1117EVKIT  | 0°C to +70°C  | User-Supplied    |
| MAX1117EVL11  | 0°C to +70°C  | Windows Software |

Note: The MAX1117 software is designed for use with the complete EV system MAX1117EVL11 (includes 68L11DMODULE module together with MAX1117EVKIT). If the MAX1117 evaluation software will not be used, the MAX1117EVKIT board can be purchased separately without the microcontroller.

## Quick Start

Before you begin, you will need the following equipment:

- ♦ Maxim MAX1117EVL11 (contains MAX1117EVKIT board and 68L11DMODULE)
- ♦ A small DC power supply, such as a 12V DC 0.25A plug-in transformer, or a 9V battery
- ♦ An IBM PC-compatible computer running Windows 95/98
- ♦ A spare serial communications port, preferably a 9-pin plug
- ♦ A serial cable to connect the computer's serial port to the 68L11DMODULE
- 1) Carefully connect the boards by aligning the 40-pin header of the MAX1117 EV kit with the 40-pin connector of the 68L11DMODULE module. Gently press them together. The two boards should be flush against one another.
- 2) Ensure that JU1 and JU2 are open and place the µC module's SW1 in the OFF position.
- 3) Connect a +7V to +16V DC power source to the µC module at the terminal block, located next to the on/off switch along the top edge of the µC module. Observe the polarity marked on the board.
- 4) Connect a cable from the computer's serial port to the µC module. If using a 9-pin serial port, use a

Quick Start is continued on page 2.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

Features

1

## MAX1117 Evaluation System

## Quick Start (continued)

straight-through, 9-pin female-to-male cable. If the only available serial port uses a 25-pin connector, a standard 25-pin to 9-pin adapter will be required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.

- 5) Install the MAX1117 EV kit software on your computer by running the INSTALL.EXE program on the floppy disk. The program files are copied and icons are created for them in the Windows Start Menu.
- 6) Start  the  MAX1117 program by opening its icon in the Start Menu.

## MAX1117 EV Kit Files

| INSTALL.EXE   | Installs the EV Kit files on your computer   |
|---------------|----------------------------------------------|
| MAX1117.EXE   | Application program                          |
| KIT1117.L11   | Software loaded into 68HC11 microcontroller  |

- 7) The program will prompt you to connect the µC module and turn its power on. Slide SW1 to the ON position. Select the correct serial port, and click OK. The program will automatically download KIT1117.L11 to the module.
- 8) Apply an input signal between CH0 and GND. Observe the readout on the screen.

## Detailed Description

## MAX1117 Stand-Alone EV Kit

The MAX1117 EV kit provides a proven PC board layout to evaluate the MAX1117. It must be interfaced to appropriate timing signals for proper operation. Connect +3.3V to  VDD, and connect ground return to GND. Refer to Figure 1, MAX1117 EV Kit Schematic. Refer to the MAX1117 data sheet for timing requirements.

## MAX1117 EV System

The MAX1117EVL11 EV system operates from a usersupplied +7V to +16V DC power supply. Windows 95/98 software running on an IBM PC interfaces to the EV system board through the computer's serial communications port. Refer to the Quick Start section for setup and operating instructions.

## Description of Software

The evaluation software's main window (Figure 2) controls the serial clock speed and sample rate. It displays the voltage and output code, as well as some statistics of the input signal. A separate graph window shows the data changing in real time. The display update rate is limited  to  about  10  samples  per  second,  due  to  COM port bandwidth limitations.

## Statistics

The Minimum and Maximum fields show the highest and lowest readings acquired. The Average field shows

Figure 1. MAX1117 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1117 Evaluation System

Figure 2. MAX1117 Evaluation Software's Main Window

<!-- image -->

a running mean. The Clear button resets the statistics. To remove offset errors, first apply zero volts to the active input channel, clear statistics, acquire some samples, and then check Tare .  This  average offset voltage will now be subtracted from all subsequent measurements.

## Sampling

Choose the desired sampling size (Sample! menu item), click Begin Sampling! (in Sample! pop-up window). Sample size is restricted to a power of two to permit FFT processing once the data is saved to a file. After the samples have been collected, the data is automatically uploaded to the host and is graphed. Once displayed, the data can optionally be saved to a file.

## Scanning Both Channels

To scan through both channels, select SCAN from the INPUT menu.

## Reference Voltage

The evaluation software assumes a 2.048V reference voltage, unless otherwise specified. (See the MAX1117 data sheet for more information). To override this value, type the new reference voltage into the VREF edit box and click the 'Set VREF' button.

<!-- image -->

## Detailed Description of Hardware

The MAX1117, is a high-speed, multichannel, 8-bit dataacquisition system. C2 and C3 are optional noise-filtering capacitors. When plugged into the 68HC11MODULE, the VDD circuit is powered by +3V. Refer to Figure 1, MAX1117 EV Kit Schematic and the MAX1117 data sheet.

The MAX6025 voltage reference is provided to support the MAX1118, and is not required for the MAX1115/ MAX1116/MAX1117 and MAX1119.

## Evaluating Other MAX1115 family devices

All of the devices in the MAX1115-MAX1119 family are software-compatible. The MAX1115 requires an external  reference.  Close  either  jumper  JU1  or  JU2  to  provide an external reference. The MAX1115/MAX1116 have an internal connection on CH1 to monitor supply voltage. The MAX1116/MAX1119 are specified for +4.5V to +5.5V operation. You will need to type the number '4.096' into the VREF edit box, and click the 'Set VREF' button. Adjust the 68L11DMODULE's VDD trimpot until VDD is at its maximum. The 68L11DMODULE's VDD must not exceed 5.0V.

## Table 1. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                             |
|----------|------------|--------------------------------------|
| JU1      | * open     | Use internal reference               |
| JU1      | closed     | Connect REF to VDD                   |
| JU2      | * open     | Use internal reference               |
| JU2      | closed     | Connect REF to external reference U2 |

## Troubleshooting

Problem: No output measurement. System reports zero voltage or fails to make a measurement.

Check VDD supply voltage. Check the reference voltage using a digital voltmeter. Use an oscilloscope to verify that the conversion start signal is being strobed.

## Problem: Measurements are erratic, unstable; poor accuracy.

Check the reference voltage using a digital voltmeter. Use an oscilloscope to check for noise. When probing for noise, keep the oscilloscope ground return lead as short as possible, preferably less than 1/2 inch (10mm).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1117 Evaluation System

<!-- image -->

Figure 3. MAX1117 EV Kit Component Placement GuideComponent Side

Figure 4. MAX1117 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1117 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4