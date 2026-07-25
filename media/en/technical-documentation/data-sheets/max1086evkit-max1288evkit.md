<!-- lastmod 2022-08-05 -->
## General Description

The MAX1286 evaluation system (EV system) is a complete 12-bit, 2-channel data-acquisition system, consisting of a MAX1286 evaluation kit (EV kit) and a Maxim 68HC16MODULE-DIP microcontroller (µC) module. Order the complete EV system (MAX1286EVC16) for a comprehensive evaluation of the MAX1286 using a personal computer (PC). Order the EV kit (MAX1286EVKIT) separately if the 68HC16MODULE-DIP module has already been purchased with a previous Maxim EV system or for custom use in other µC-based systems. The MAX1286 EV kit can also be used to evaluate the MAX1288, MAX1086, and MAX1088.

## MAX1286EVC16 System

| PART             |   QTY | DESCRIPTION      |
|------------------|-------|------------------|
| MAX1286EVKIT     |     1 | MAX1286 EV kit   |
| 68HC16MODULE-DIP |     1 | 68HC16 µC module |

## MAX1286EVKIT

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| C1, C4        |     2 | 0.1µF ceramic capacitors (0603)                              |
| C2, C3        |     2 | 100pF ceramic capacitors (0603)                              |
| C5            |     0 | Open (0603)                                                  |
| J1            |     1 | 2 ✕ 20 right-angle female connector Samtec SSW-120-02-S-D-RA |
| TP1           |     1 | 5-pin header                                                 |
| U1            |     1 | MAX1286EKA-T (SOT23-8)                                       |

Windows 95/98 is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1286 Evaluation Kit and Evaluation System

Features

- ♦ Proven PC Board Layout
- ♦ Windows 95/98 ® Evaluation Software
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE       | INTERFACE     |
|--------------|------------------|---------------|
| MAX1286EVKIT | 0 ° C to +70 ° C | User Supplied |
| MAX1286EVC16 | 0 ° C to +70 ° C | Windows       |

Note: The MAX1286 software is designed for use with the complete EV system. It includes both a µC module and the EV kit. If the Windows software will not be used, the EV kit board can be purchased by itself, without the µC module.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| U2            |     1 | MAX6064AEUR-T (SOT23-3)                                      |
| None          |     1 | PC board, 'MAX1286 Evaluation Kit'                           |
| None          |     1 | 3.5in software disk, 'MAX1286 Evaluation Kit'                |
| None          |     1 | MAX1286 EV kit data sheet (includes 68HC16MODULE-DIP manual) |
| None          |     1 | MAX1286 data sheet                                           |

Maxim Integrated Products

1

## MAX1286 Evaluation Kit and Evaluation System

## Quick Start

## Recommended Equipment

Before you begin, you will need the following equipment:

- Maxim MAX1286EVC16 (MAX1286EVKIT board and 68HC16MODULE-DIP)
- A DC power supply (8V - 20V)
- An IBM-compatible PC with Windows 95/98
- A free standard serial port, preferably a 9-pin plug
- A standard serial cable to connect the PCs standard serial port to the 68HC16MODULE-DIP module
- 1) Carefully connect the boards by aligning the 40-pin connector of the MAX1286 EV kit with the 40-pin header of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 2) Ensure that the µC module SW1 switch is in the OFF position.
- 3) Connect the 8V to 20V power supply to the µC module terminal block located next to SW1. Observe the polarity marked on the board.
- 4) Connect a standard serial cable from the computer's serial port to the µC module. If the PCs standard serial  port  has  a  9-pin  connector, use a straightthrough, 9-pin female-to-male cable. If the PCs only available standard serial port has a 25-pin connector,  a  standard 25-pin to 9-pin adapter will be required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 5) Install the MAX1286 EV kit software on your computer by running the INSTALL.EXE program on the floppy disk. The program files are copied and icons are created for them in the Windows Start Menu.
- 6) Start  the  MAX1286 program by opening its icon in the Start Menu.
- 7) The Windows program will prompt you to connect the µC module and turn its power on. Slide SW1 to the  ON position. When you click OK, the Windows program will automatically download KIT1286.C16 to the module.
- 8) Apply an input signal (0V to VREF) between AIN1 and GND. Observe the readout on the running Windows program.

## Detailed Description

## MAX1286 Standalone EV Kit

The MAX1286EVKIT provides a proven PC board layout to  evaluate the MAX1286. It must be interfaced to appropriate timing signals for proper operation. Connect 5V to VDD and connect ground return to GND. Refer to Figure 2, MAX1286 EV Kit Schematic, and the MAX1286 data sheet for timing requirements.

## MAX1286 EV System

The MAX1286EVC16 EV system operates from a usersupplied 8V to 20V DC power supply. Windows 95/98 software interfaces to the EV system board through the PC's standard serial port. See the Quick Start section for setup and operating instructions.

## Detailed Description of Software

The evaluation software's main window is shown in Figure 1. It controls the serial clock speed and sample rate.  It  also  displays  the  voltage  and  output  code  as well  as  some statistics  of  the  input  signal.  A  separate graph shows the data changing in real time. The update rate is limited to about 10 samples per second, due to COM port bandwidth limitations.

## Part Selection

The part selection area allows the user to evaluate other parts in the MAX1286 family. Use the pulldown menu to select the MAX1286, MAX1288, MAX1086 or MAX1088. The default part is the MAX1286.

## Channel Selection

The channel selection area allows the user to select AIN1 only, AIN2 only, or AIN1 and AIN2 by simply checking the corresponding channel checkbox. The current voltage and code is also displayed for each active channel.

## ADC to µC Sample Rate

The SPI™ SCLK frequency area allows the user to modify the ADC to µC sample rate. Use the pulldown menu to select the desired SCLK frequency. The first two digits  are  the  divisor  for  the  µCs  internal  clock.  The  next floating  point  number is the corresponding SCLK frequency. The voltage at the ADCs active channels is digitized  and  stored  in  the  µCs  memory.  The  approximate ADC to µC sample rate is displayed on the right side of the main window.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1286 Evaluation Kit and Evaluation System

Figure 1. MAX1286 Evaluation Software Main Window

<!-- image -->

## µC to PC Data Rate

The µC to PC data rate area allows the user to manually or  automatically read the digitized data stored in the µC. To manually read the digitized data, press the 'Read' button. To configure the software to automatically read, check the Read Every checkbox. The automatic read rate can be changed by selecting the desired amount of milliseconds in the pulldown menu. The program waits the selected amount of milliseconds before reading again. The approximate µC to PC data rate is displayed on the right side of the main window.

## Statistics

The Minimum and Maximum fields in the statistics area show the highest and lowest readings acquired. The Average field shows a running mean. When reading data manually by pressing the Read button, the Average and RMS fields require approximately five samples until they are accurately represented. The Clear Statistics button resets the statistics.

<!-- image -->

## Reference Voltage

The evaluation software assumes a 4.096V reference voltage, unless otherwise specified. To override the 4.096V reference value, cut JU1 and apply the new reference voltage to the lower connection of JU1. Then type in the new reference voltage, without the volt unit, and press the 'Set VREF' button. The EV kit software uses the value typed in the VREF  field to translate the digital code to a voltage.

## Detailed Description of Hardware

The MAX1286 is a 2-channel, 12-bit serial ADC. When the  MAX1286EVKIT  board  is  connected  to  the 68HC16MODULE-DIP module, power is provided by the module. See Figure 2, MAX1286 EV Kit Schematic. The MAX6064A voltage reference is included on the MAX1286EVKIT board. It is a 4.096V voltage reference with  a  temperature coefficient of 20ppm/°C. If another voltage reference is desired, cut the JU1 trace to disconnect the MAX6064A from the MAX1286.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1286 Evaluation Kit and Evaluation System

Figure 2. MAX1286 EV Kit Schematic

<!-- image -->

## Evaluating Other MAX1286 Family Devices

The MAX1286EVKIT board can also be used to evaluate other parts in the MAX1286 family. The parts that can be evaluated using the MAX1286EVKIT board are: the  MAX1286, MAX1288, MAX1086, or MAX1088. The first two digits in the part number represent the resolution of the ADC. For example, the MAX1286 is a 12-bit ADC and the MAX1086 is a 10-bit ADC. The MAX1286 and MAX1086 are two-channel parts, while the MAX1288 and MAX1088 have one differential input.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 3. MAX1286 EV Kit Component Placement GuideComponent Side

<!-- image -->

## MAX1286 Evaluation Kit and Evaluation System

Figure 4. MAX1286 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1286 Evaluation Kit and Evaluation System

Figure 5. MAX1286 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600