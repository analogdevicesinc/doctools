<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1162 Evaluation System/Evaluation Kit

## General Description

The MAX1162 evaluation system (EV system) is a complete 16-bit data-acquisition system consisting of a MAX1162 evaluation kit (EV kit), Maxim 68HC16MODULE-DIP microcontroller (µC) module, and USBTO232.

Order the complete EV system (MAX1162EVC16) for comprehensive evaluation of the MAX1162, using a personal computer (PC). Order the EV kit (MAX1162EVKIT) separately if the 68HC16MODULE-DIP module has already been purchased with a previous Maxim EV system or for custom use in other µC-based systems.

This EV kit can also be used to evaluate the MAX1062 14-bit ADC.

To evaluate the MAX1062, request a MAX1062AEUB free sample when ordering this EV kit.

## MAX1162 EV Kit Files

| PROGRAM     | FUNCTIONS                                   |
|-------------|---------------------------------------------|
| INSTALL.EXE | Installs the EV kit files on your computer  |
| MAX1162.EXE | Application program                         |
| KIT1162.C16 | Software loaded into 68HC16 microcontroller |

| DESIGNATION        |   QTY | DESCRIPTION                                                       |
|--------------------|-------|-------------------------------------------------------------------|
| C1, C4             |     2 | 10µF ±20%, 16V X5R ceramic capacitors (1210) TDK C3225X5R1C106M   |
| C2, C3, C5, C7, C8 |     5 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104KT |
| C6                 |     1 | 4.7µF ±20%, 16V X5R ceramic capacitor (1206) TDK C3216X5R1C475M   |
| C9                 |     1 | 4700pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1603X7R1H472KT |
| FB1, FB2           |     2 | Surface-mount ferrite beads (0603) TDK MMZ1608B601C               |
| J1                 |     1 | 2 x 20 right-angle female connector                               |
| R1                 |     1 | 200 Ω ±1% resistor (0603)                                         |

- ♦ Proven PCB Layout
- ♦ Convenient On-Board Test Points
- ♦ Fully Assembled and Tested
- ♦ EV Kit Software Supports Windows ® 98/2000/XP with RS-232/COM Ports
- ♦ EV Kit Software Supports Windows 2000/XP with USB Ports

## Ordering Information

| PART         | TEMP RANGE   | INTERFACE        |
|--------------|--------------|------------------|
| MAX1162EVKIT | 0°C to +70°C | User supplied    |
| MAX1162EVC16 | 0°C to +70°C | Windows software |

Note: The MAX1162 software is designed for use with the complete EV system. It includes both a µC module and the EV kit. If the Windows software will not be used, the EV kit board can be purchased by itself, without the µC module.

## MAX1162EVC16 System

| PART             |   QTY | DESCRIPTION                   |
|------------------|-------|-------------------------------|
| MAX1162EVKIT     |     1 | MAX1162 EV kit                |
| 68HC16MODULE-DIP |     1 | 68HC16 µC module              |
| USBTO232+        |     1 | USB-to-COM port adapter board |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| TB0           |     1 | 2-circuit terminal block                                     |
| TP1           |     1 | 5-pin header                                                 |
| U1            |     1 | 16-bit ADC (10-pin µMAX) MAX1162BCUB                         |
| U2            |     1 | Logic buffer (5-pin SOT23) Fairchild Semiconductor NC7SZ125  |
| U3            |     1 | Op amp (5-pin SOT23) MAX4430EUK                              |
| -             |     1 | MAX1162 EV kit data sheet (includes 68HC16MODULE-DIP manual) |
| -             |     1 | PCB: MAX1162EVKIT                                            |
| -             |     1 | 3.5in software disk, MAX1162 evaluation kit                  |
| -             |     1 | MAX1162 data sheet                                           |

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Features

## MAX1162 Evaluation System/Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com |

Note: Indicate that you are using the MAX1162 when contacting these component suppliers.

## Quick Start

## Recommended Equipment-USB Port PC Connection Option

Before you begin, the following equipment is needed:

- MAX1162EVC16 (MAX1162EVKIT board, 68HC16MODULE-DIP, and USBTO232)
- Three DC power supplies: 8V to 20V, 5V, and -5V
- External reference: +4.096V
- Analog signal source: 0 to +4.096V
- A PC running Windows 2000/XP with an available standard USB port to connect to the USBTO232
- USB cable included with the USBTO232

## Procedure

## Caution: Do not turn on the power until all the connections are completed.

- 1) Visit  the  Maxim website (www.maxim-ic.com) to download the latest version of the USBTO232 User Guide. Follow the steps in the USBTO232 User Guide Quick Start section and return to step 2 of this Quick Start section when finished.
- 2) Carefully connect the boards by aligning the 40-pin connector of the MAX1162 EV kit with the 40-pin header of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 3) Ensure that the 68HC16MODULE-DIP module's SW1 switch is in the OFF position.
- 4) Connect the  8V  to  20V  power  supply  to  the 68HC16MODULE-DIP module's terminal block (J2) located next to SW1. Observe the polarity marked on the board.
- 5) Connect the 5V power supply to the VDD pad (with respect to the GND pad) on the MAX1162 EV kit board.
- 6) Connect the -5V power supply to the VEE pad (with respect to the GND pad) on the MAX1162 EV kit board.
- 7) Apply a 4.096V reference voltage to the MAX1162 EV kit's  terminal  block  (TB0)  located  in  the  upperleft  corner  of  the  MAX1162  EV  kit  board.  Observe the polarity marked on the board.
- 8) Connect the USBTO232 board to the 68HC16MODULE-DIP module if you have not done so already.
- 9) The MAX1162 EV kit software should have already been downloaded and installed in the USBTO232 Quick Start .
- 10) Start the MAX1162 program by opening its icon in the Start | Programs menu.
- 11) Turn on all power supplies and enable the reference voltage. Slide SW1 to the ON position on the 68HC16MODULE-DIP module. Press the OK button to  automatically  connect  and  download  the KIT1162.C16 file to the module.
- 12) Apply an input signal (0V to VREF) between AIN and GND. Observe the readout on the running Windows program.

## Recommended Equipment-RS-232/COM Port PC Connection Option

Before you begin, the following equipment is needed:

- MAX1162EVC16 (MAX1162EVKIT board and 68HC16MODULE-DIP)
- Three DC power supplies: 8V to 20V, 5V, and -5V
- External reference: +4.096V
- Analog signal source: 0 to +4.096V
- A PC running Windows 98/2000/XP with an available standard serial port, preferably a 9-pin plug
- A standard serial cable to connect the PC's standard serial port to the 68HC16MODULE-DIP module

## Procedure

## Caution: Do not turn on the power until all the connections are completed.

- 1) Visit  the  Maxim  website  (www.maxim-ic.com/evkitsoftware) to download the latest version of the EV kit software. Save the EV kit software to a temporary folder and uncompress the file (if it is a .zip file).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1162 Evaluation System/Evaluation Kit

- 2) Install  the  MAX1162 EV kit software on your computer by running the INSTALL.EXE program. The program files are copied and icons are created for them in the Windows Start | Programs menu.
- 3) Carefully connect the boards by aligning the 40-pin connector of the MAX1162 EV kit with the 40-pin header of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another.
- 4) Ensure that the 68HC16MODULE-DIP module's SW1 switch is in the OFF position.
- 5) Connect the 8V to  20V  power  supply  to  the 68HC16MODULE-DIP module's terminal block (J2) located next to SW1. Observe the polarity marked on the board.
- 6) Connect the 5V power supply to the VDD pad (with respect to the GND pad) on the MAX1162 EV kit board.
- 7) Connect the -5V power supply to the VEE pad (with respect to the GND pad) on the MAX1162 EV kit board.
- 8) Apply a 4.096V reference voltage to the MAX1162 EV kit's  terminal  block  (TB0)  located  in  the  upperleft  corner  of  the  MAX1162  EV  kit  board.  Observe the polarity marked on the board.
- 9) Connect a standard serial cable from the computer's serial port to the 68HC16MODULE-DIP module. If the PC's standard serial port has a 9-pin connector,  use  a  straight-through,  9-pin  female-to-male cable. If the PC's only available standard serial port has a 25-pin connector, a standard 25-pin to 9-pin adapter is required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 10) Start the MAX1162 program by opening its icon in the Start | Programs menu.
- 11) Turn on all power supplies and enable the reference voltage. Slide SW1 to the ON position on the 68HC16MODULE-DIP module. Press the OK button to  automatically  connect  and  download  the KIT1162.C16 file to the module.
- 12) Apply an input signal (0V to VREF) between AIN and GND. Observe the readout on the running Windows program.

<!-- image -->

## Detailed Description

## MAX1162 Stand-Alone EV Kit

The MAX1162 EV kit provides a proven PCB layout to evaluate the MAX1162. It must be interfaced to appropriate  timing  signals  for  proper  operation.  Connect 5V to  VDD and -5V to VEE with respect to GND. Apply a 4.096V reference voltage to the MAX1162 EV kit's terminal block (TB0) located in the upper-left corner of the MAX1162 EV kit board. See the MAX1162 EV Kit Schematic (Figure 2) and refer to the MAX1162 data sheet for timing requirements.

## MAX1162 EV System

The MAX1162EVC16 EV system operates from three user-supplied power supplies: 8V to 20V, 5V, and -5V. Connect the 8V to 20V power supply to the µC module's terminal block (J2) located next to SW1. Observe the polarity marked on the board. Connect 5V to VDD and -5V to VEE with respect to GND on the MAX1162 EV kit board. Apply a 4.096V reference voltage to the MAX1162 EV kit's terminal block (TB0) located in the upper left corner of the MAX1162 EV kit board. See the MAX1162 EV Kit Schematic (Figure 2) .

Windows 98/2000/XP-compatible software interfaces to the EV system board through the PC's standard serial port (virtual COM port). See the Quick Start section for complete setup and operating instructions.

## Detailed Description of Software

The EV software's main window is shown in Figure 1. It controls the serial clock speed and sample rate. It also displays the voltage and output code as well as some statistics  of  the  input  signal.  A  separate  graph  shows the data changing in real time. The update rate is limited to about 10 samples per second, due to COM port bandwidth limitations.

## Sample Rate

The SPI SCLK Frequency area allows the user to vary the ADC to µC sample rate. The PC is not capable of retrieving the data that was stored in the memory of the µC as fast as the µC can obtain the data from the ADC. This is  because the µC's SPI interface is much faster than the PC's standard serial port (virtual COM port). Hence, the ADC to µC sample rate refers to the sample

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1162 Evaluation System/Evaluation Kit

rate  at  which  data  is  being  sampled  by  the  ADC  and stored in the µC's memory. Use the pulldown menu to select the desired SCLK frequency. The first two digits are the divisor for the µC's internal clock. The next floating point number is the corresponding SCLK frequency. The ADC to µC sample rate is displayed in the ADC to µC sample rate field located on the right side of the main window.

The µC to PC transfer rate is controlled using the field at the bottom of the main window and can be controlled in two different ways. Pressing the Read button allows the user to manually grab a sample from the µC's memory. Clicking the Read Every checkbox allows the user to automatically read samples from the µC's memory at a rate selectable in milliseconds.

To retrieve a block of consecutively sampled data to the PC, click on the Sample menu located at the top left-hand corner of the main window. The data-block length is selectable and the data can be saved to a file.

## Statistics

The Minimum and Maximum fields in the statistics area show the highest and lowest readings acquired. The Average field  displays a running mean. When reading data manually by pressing the Read button, the Average and RMS fields require approximately five samples until they are accurately represented. The Clear Statistics button resets the statistics. To remove offset errors, first apply zero volts to the active input channel, press the Clear Statistics button, acquire some samples, and then check the Null Offset checkbox. Once checked, the label next to the Null Offset checkbox shows the sampled offset error. This value is subtracted from all subsequent measurements until the checkbox is unchecked.

## Reference Voltage

The EV software assumes a 4.096V reference voltage, unless otherwise specified. To override the 4.096V reference value, apply the new reference voltage at the terminal block (TB0) on the MAX1162 EV kit board, type in the new reference voltage, without the volt unit, and press the Set Vref button. The EV kit software uses the value typed in the VREF field to translate the digital code to a voltage.

## Detailed Description of Hardware

The MAX1162 is a 16-bit serial ADC. When the MAX1162  EV  kit  board  is  connected  to  the 68HC16MODULE-DIP module, power is provided to U2 by the module. The user must also provide 5V to VDD and -5V to VEE (with respect to the GND pads) on the MAX1162 EV kit board. The MAX1162 EV kit contains two different types of buffers. U2 is a logic buffer to limit the load capacitance that is seen by the DOUT line of the MAX1162. U1 is powered from VDD. U3 is powered from VDD and VEE. A terminal block (TB0) has also been provided on the MAX1162 EV kit board for the external reference. See the Reference Voltage section and the MAX1162 EV Kit Schematic (Figure 2).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1162 Evaluation System/Evaluation Kit

<!-- image -->

Figure 1. MAX1162 EV Software's Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX1162 Evaluation System/Evaluation Kit

Figure 2. MAX1162 EV Kit Schematic

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1162 Evaluation System/Evaluation Kit

<!-- image -->

Figure 3. MAX1162 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX1162 EV Kit PCB Layout-Inner Layer 2 (GND)

<!-- image -->

Figure 4. MAX1162 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 6. MAX1162 EV Kit PCB Layout-Inner Layer 3 (VDD)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1162 Evaluation System/Evaluation Kit

Figure 7. MAX1162 EV Kit PCB Layout-Solder Side

<!-- image -->

## Revision History

Pages changed at Rev 1: 1-8

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

Figure 8. MAX1162 EV Kit Component Placement GuideSolder Side

<!-- image -->