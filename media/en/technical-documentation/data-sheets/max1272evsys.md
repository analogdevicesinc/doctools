<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX1272 Evaluation Kit/Evaluation System

## General Description

The MAX1272 evaluation system (EV system) is a complete,  12-bit,  multirange,  single-channel,  data-acquisition system consisting of a MAX1272 evaluation kit (EV kit),  Maxim  68HC16MODULE-DIP microcontroller (µC) module, and USBTO232.

Order the complete EV system (MAX1272EVC16) for a comprehensive evaluation of the MAX1272 using a personal computer (PC). Order the EV kit (MAX1272EVKIT) separately if the 68HC16MODULE-DIP module has already been purchased with a previous Maxim EV system or for custom use in other µC-based systems.

The MAX1272 EV kit can also be used to evaluate the MAX1273CPA (8-pin DIP).

## MAX1272EVKIT Software

| PROGRAM     | FUNCTION                                    |
|-------------|---------------------------------------------|
| INSTALL.EXE | Installs the EV kit files on your computer. |
| KIT1272.C16 | Software loaded into 68HC16 µC module.      |
| MAX1272.EXE | Application program.                        |

## MAX1272EVKIT Component List

| DESIGNATION   |   QTY | DESCRIPTION                                      |
|---------------|-------|--------------------------------------------------|
| C1, C3        |     2 | 1µF ceramic capacitors (0805) TDK C2012X5R1C105M |
| C2            |     1 | 0.1µF ceramic capacitor (0603)                   |
| J1            |     1 | 2 x 20 right-angle female connector              |
| TB0           |     1 | Two-circuit terminal block                       |
| TP1           |     1 | 6-pin header                                     |
| U1            |     1 | MAX1272CPA (8-pin DIP)                           |
| -             |     1 | MAX1272 EV kit PCB                               |
| -             |     1 | MAX1272 EV kit software, CD-ROM                  |

## MAX1272EVC16 System

| PART             |   QTY | DESCRIPTION                   |
|------------------|-------|-------------------------------|
| MAX1272EVKIT     |     1 | MAX1272 EV kit                |
| 68HC16MODULE-DIP |     1 | 68HC16 µC module              |
| USBTO232+        |     1 | USB-to-RS-232 converter board |

Windows is a registered trademark of Microsoft Corp.

- ♦ Proven PC Board Layout
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested
- ♦ EV Kit Software Supports Windows ® 98/2000/XP with RS-232/COM Ports
- ♦ EV Kit Software Supports Windows 2000/XP with USB Ports

## Ordering Information

| PART         | TEMP RANGE   | INTERFACE TYPE   |
|--------------|--------------|------------------|
| MAX1272EVKIT | 0°C to +70°C | User supplied    |
| MAX1272EVC16 | 0°C to +70°C | Windows software |

Note: The MAX1272 EV kit software is designed for use with the complete EV system. It includes the µC module, USBTO232, and the EV kit. If the Windows software is not used, the EV kit board can be purchased by itself, without the µC module.

Note: To evaluate the MAX1273, request a free sample of the MAX1273CPA when ordering the MAX1272 EV kit.

## Quick Start

## USB Port PC Connection Option

Note: In  the  following  section(s),  software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows 98SE/2000/XP operating system.

- MAX1272EVC16 (MAX1272EVKIT board, USBTO232, and 68HC16MODULE-DIP)
- A DC power supply (+8V to +20V)
- A PC running Windows 2000/XP with an available standard USB port to connect to the USBTO232
- USB cable included with the USBTO232
- 1) Visit  the  Maxim  website (www.maxim-ic.com) to download the latest version of the USBTO232 user guide. Follow the steps in the USBTO232 user guide quick start section and return to step 2 of this Quick Start section when finished.
- 2) Carefully connect the boards by aligning the 40-pin connector of the MAX1272EVKIT with the 40-pin header of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## Features

## MAX1272 Evaluation Kit/Evaluation System

- 3) Ensure that the 68HC16MODULE-DIP module's SW1 switch is in the OFF position.
- 4) Connect the +8V to +20V power supply to the 68HC16MODULE-DIP module's terminal block (J2) located next to SW1. Observe the polarity marked on the board.
- 5) Connect the USBTO232 board to the 68HC16MODULE-DIP module if you have not done so already.
- 6) The MAX1272 EV kit software should have already been downloaded and installed in the USBTO232 user guide quick start.
- 7) Start  the  MAX1272 program by opening its icon in the Start | Programs menu.
- 8) Slide SW1 to the ON position. Click OK, the Windows  program  automatically  downloads KIT1272.C16 to the module.
- 9) Apply an input signal (0 to 10V) between AIN and GND. Observe the readout on the running Windows program.

## RS-232/COM Port PC Connection Option

- MAX1272EVC16  (MAX1272EVKIT  board  and 68HC16MODULE-DIP)
- A DC power supply (+8V to +20V)
- A PC running Windows 98/2000/XP with an available standard serial port, preferably with a 9-pin plug
- A standard serial cable to connect the PC's standard serial port to the 68HC16MODULE-DIP module
- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the file (if it is a .zip file).
- 2) Install  the  MAX1272 EV kit software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created for them in the Windows Start | Programs menu.
- 3) Carefully connect the boards by aligning the 40-pin connector of the MAX1272EVKIT with the 40-pin header of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 4) Ensure that the 68HC16MODULE-DIP module's SW1 switch is in the OFF position.
- 5) Connect the +8V to +20V power supply to the 68HC16MODULE-DIP module's terminal block (J2) located next to SW1. Observe the polarity marked on the board.
- 6) Connect a standard serial cable from the computer's serial port to the 68HC16MODULE-DIP module. If the PC's standard serial port has a 9-pin connector,  use  a  straight-through,  9-pin  female-to-male cable. If the PC's only available standard serial port has a 25-pin connector, a standard 25-pin to 9-pin adapter is required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 7) Start  the  MAX1272 program by opening its icon in the Start | Programs menu.
- 8) Turn on the power supply and slide SW1 to the ON position on the 68HC16MODULE-DIP module. Click the OK button to automatically connect and download the file KIT1272.C16 to the module.
- 9) Apply an input signal (0 to 10V) between AIN and GND. Observe the readout on the running Windows program.

## Detailed Description

## MAX1272 Stand-Alone EV Kit

The MAX1272EVKIT provides a proven PCB layout to evaluate the MAX1272. It must be interfaced to appropriate timing signals for proper operation. Connect +5V to VDD and connect ground return to GND. See Figure 2 (MAX1272 EV Kit Schematic) and refer to the MAX1272 data sheet for timing requirements.

## MAX1272 EV System

The MAX1272EVC16 operates from a user-supplied +8V to +20V DC power supply. Windows 98-/2000-/XP-compatible software interfaces to the EV system board through the PC's standard serial port (virtual COM port). See the Quick Start section for setup and operating instructions.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1272 Evaluation Kit/Evaluation System

Figure 1. MAX1272 Evaluation Software Main Window

<!-- image -->

## Detailed Description of Software

The evaluation software's main window is shown in Figure 1. It controls the serial clock speed and sample rate.  It  also  displays  the  voltage  and  output  code  as well  as  some statistics relating to the input signal. A separate graph shows the data changing in real time. The update rate is limited to about 10 samples per second, due to COM port (virtual COM port) bandwidth limitations.

## Part Selection

The Choose Part pulldown menu allows the user to evaluate the MAX1272CPA or the MAX1273CPA. The default part is the MAX1272CPA.

## Control Byte Pulldown Menus

The pulldown menus at the top of the main program window allow the user to select the control byte. The first field represents the start bit and is always one. The second field controls the input range and polarity. The third field sets the power-down mode. The fourth field sets the external clock. The last field selects either the internal or an external reference.

## Sample Rate

The SPI™ SCLK frequency area allows the user to vary the analog-to-digital converter (ADC)-to-µC sample rate.  The  PC is not capable of retrieving the data that

SPI is a trademark of Motorola, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

was stored in the memory of the µC as fast as the µC can obtain the data from the ADC, because the µC's SPI interface is much faster than the PC's standard serial port. Hence, the ADC-to-µC sample rate refers to the sample rate at which data is being sampled by the ADC and stored in the µC's memory. Use the pulldown menu to select the desired SCLK frequency. The first two digits are the divisors for the µC's internal clock. The next floating point number is the corresponding SCLK frequency. The ADC-to-µC sample rate is displayed in the ADC-to-µC sample rate field located on the right side of the main window.

The other sample rate of interest is the rate at which data is being sampled from the µC's memory to the PC. This µC-to-PC sample rate is controlled using the field in the lower right hand corner of the main window and can be controlled in two different ways. Pressing the Read button allows the user to manually obtain a sample from the µC's memory. Checking the Read Every checkbox allows the user to automatically read samples from the µC's memory at a rate selectable in milliseconds.

To retrieve a block of consecutively sampled data to the  PC,  click  on  the Sample menu located at the top left-hand corner of the main window. The data block length is selectable and the data can be saved to a file.

## MAX1272 Evaluation Kit/Evaluation System

Figure 2. MAX1272 EV Kit Schematic

<!-- image -->

## Statistics

The Minimum and Maximum fields in the statistics area show the highest and lowest readings acquired. The Average field shows a running mean. When reading data manually by pressing the Read button, the Average and RMS fields require approximately five samples until they are accurately represented. The Clear Statistics button resets the statistics. To remove offset errors, first apply 0V to the active input channel, press the Clear Statistics button, acquire some samples, and then check the Null Offset checkbox. Once checked, the label next to the Null Offset checkbox shows the sampled offset error. This value is subtracted from all subsequent measurements until the checkbox is unchecked.

## Reference Voltage

The evaluation software assumes a +4.096V reference voltage, unless otherwise specified. To override the +4.096V reference value, apply the new reference voltage at the terminal block (TB0) on the board, type in the new reference voltage (without the volt unit), and press the Set Vref button.

## Detailed Description of Hardware

The MAX1272 is a 12-bit, multirange, serial ADC. When the  MAX1272EVKIT  board  is  connected  to  the 68HC16MODULE-DIP module, power is provided by the module. See Figure 2 (MAX1272 EV Kit Schematic).

The MAX1272 has a software-selectable internal +4.096V reference. The terminal block (TB0) on the MAX1272EVKIT board is for applications requiring an external reference.

## Evaluating the MAX1273

The MAX1272EVKIT board can also be used to evaluate the MAX1273. The MAX1272 and the MAX1273 differ  only  in  analog  input  voltage  range.  The  MAX1272 has a software-selectable input voltage range of 0 to +5V, 0 to +10V, ±5V and ±10V. The MAX1273 has a software-selectable input voltage range of 0 to VREF / 2, 0 to VREF, ±VREF / 2, and ±VREF. Simply replace the MAX1272CPA with the MAX1273CPA.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1272 Evaluation Kit/Evaluation System

<!-- image -->

Figure 3. MAX1272 EV Kit Component Placement GuideComponent Side

Figure 4. MAX1272 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 5. MAX1272 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5