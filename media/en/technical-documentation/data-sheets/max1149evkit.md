<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1149 Evaluation Kit/Evaluation System

## General Description

The MAX1149 evaluation system (EV system) is a complete, 8-channel data-acquisition system consisting of a MAX1149 evaluation kit (EV kit) and a Maxim CMODUSB microcontroller (µC) module. The MAX1149 is a highspeed, multichannel, 14-bit data-acquisition system. Windows ® 98/2000/XP software provides a convenient user interface to exercise the MAX1149's features.

Order the complete EV system (MAX1149EVCMODU) for  comprehensive evaluation of the MAX1149 using a personal computer. Order the EV kit (MAX1149EVKIT) if the CMODUSB module has already been purchased with a previous Maxim EV system, or for custom use in other µC-based systems.

This system can also evaluate the MAX1146/MAX1147/ MAX1148. See the Detailed Description of Hardware section for more details. Contact the factory for free samples of these products.

## MAX1149EVCMODU System Component List

| PART         |   QTY | DESCRIPTION        |
|--------------|-------|--------------------|
| MAX1149EVKIT |     1 | MAX1149 EV kit     |
| CMODUSB      |     1 | USB command module |

## MAX1149EVKIT Parts List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                             |
|---------------|-------|-----------------------------------------------------------------------------------------------------------------------------------------|
| C1-C9, C11    |    10 | 0.01µF, 10V (min) X7R ceramic capacitors (0805) TDK C2012X7R2A103K Kemet C0805C103K5RAC Taiyo Yuden UMK212B103KQ                        |
| C10           |     1 | 2.2µF, 10V (min) X7R ceramic capacitor (1206) TDK C3216X7R1C225M TDK C3216X7R1E225K Taiyo Yuden EMK316BJ225ML Taiyo Yuden LMK316BJ225MD |
| C12           |     1 | 0.1µF, 10V (min) X7R ceramic capacitor (0805) TDK C2012X7R1E104K Murata GRM219R71C104K Taiyo Yuden UMK212BJ104KG                        |

Windows is a registered trademark of Microsoft Corp.

## MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

- ♦ Proven PC Board Layout
- ♦ Convenient Test Points Provided On Board
- ♦ Data-Logging Software
- ♦ Fully Assembled and Tested

## Ordering Information

| PART                      | TEMP RANGE                             | INTERFACE TYPE   |
|---------------------------|----------------------------------------|------------------|
| MAX1149EVKIT 0°C to +70°C | User-supplied                          |                  |
| MAX1149EVCMODU 0°C to     | +70°C Windows 98/2000/XP software; USB |                  |

Note: The MAX1149 software is designed for use with the complete EV system MAX1149EVCMODU (includes the CMODUSB module together with the MAX1149EVKIT). If the MAX1149 evaluation software will not be used, the MAX1149EVKIT board can be purchased without the µC.

## Component Lists

| DESIGNATION   |   QTY | DESCRIPTION                                                                                |
|---------------|-------|--------------------------------------------------------------------------------------------|
| C13           |     1 | 4.7µF, 10V (min) X7R ceramic capacitor (1206) TDK C3216X7R1C475K Taiyo Yuden LMK316BJ475ML |
| H1            |     1 | 8-pin header                                                                               |
| J1            |     1 | 2 x 20 right-angle socket                                                                  |
| JU1, JU3      |     2 | 2-pin headers                                                                              |
| JU2           |     1 | 3-pin header                                                                               |
| R1-R9         |     9 | 47 Ω ±5% resistors (1206)                                                                  |
| R10           |     1 | 10 Ω ±1% resistor (1206)                                                                   |
| TB1           |     1 | 9-circuit, 0.200in (5.08mm) terminal block                                                 |
| U1            |     1 | MAX1149BEUP (20-pin TSSOP)                                                                 |
| None          |     2 | Shunts                                                                                     |
| None          |     1 | MAX1149 EV kit PC board                                                                    |

Maxim Integrated Products

## MAX1149 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          | WEBSITE               |
|-------------|--------------|--------------|-----------------------|
| Kemet       | 864-963-6300 | 864-963-6322 | www.kemet.com         |
| Murata      | 770-436-1300 | 770-436-3030 | www.murata.com        |
| Taiyo Yuden | 800-348-2496 | 847-925-0899 | www.t-yuden.com       |
| TDK         | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Indicate you are using the MAX1149 when contacting these manufacturers.

## MAX1149 Stand-Alone EV Kit

The MAX1149 EV kit provides a proven PC board layout to facilitate  evaluation  of  the  MAX1149. It must be interfaced to appropriate timing signals for proper operation. Connect +3.3V to VDD, and connect ground return to GND. See Figure 2 for the MAX1149 EV kit schematic. Refer to the MAX1146-MAX1149 data sheet for timing requirements.

## MAX1149 EV System

The MAX1149EVCMODU EV system operates from a Windows 98/2000/XP computer interfacing to the EV system board through the computer's USB port. See the Quick Start section for setup and operating instructions.

## Quick Start

## Recommended Equipment

Before you begin, you need the following equipment:

- Maxim MAX1149EVCMODU (contains MAX1149EVKIT board, CMODUSB, and USB type A-B cable)
- An IBM-compatible computer running Windows 98/2000/XP, with a spare USB port
- Administrator privileges may be required when first  connecting the EV kit to a Windows 2000/XP computer

## Procedure

## Do not turn on the power until all connections are made.

- 1) Select 3.3V logic by moving CMODUSB jumper JU1 to the 3.3V position.
- 2) Ensure that JU1 is closed (COM = AGND), JU2 is in 1-2 position ( SHDN = VDD), and JU3 is open (internal reference).
- 3) Carefully connect the boards by aligning the 40-pin header of the MAX1149 EV kit with the 40-pin connector of the CMODUSB module. Gently press them together. The two boards should be flush against one another.
- 4) Install  the  MAX1149 EV kit software on your computer by running the INSTALL.EXE program on the disk.  The  program files are copied and icons are created for them in the Windows Start menu.
- 5) Connect the USB cable between the CMODUSB and the computer. The plug-and-play system automatically launches the New Hardware Wizard to find the device drivers on the installation disk. On some systems, plug-and-play may require up to 30s to respond once the USB cable is plugged in.
- 6) Start the MAX1149 program by opening its icon in the Start menu.
- 7) For minimum gain error, measure the reference voltage between REF and AGND, and enter the value in the software, next to Set Vref .
- 8) Apply input signal between analog common COM and input channel CH0. Observe the readout on the screen.
- 9) Remember to exit the EV kit software before unplugging the CMODUSB board.

## Detailed Description of Software

The evaluation software's main window (Figure 1) controls  the  active  control  word  bits,  serial  clock  speed, and sample rate, and displays the voltage and output code for each active channel. A separate graph window shows the data changing in real time, and provides some statistical functions and file load/save capability. The update rate is limited due to communications bandwidth limitations.

## Controls

The control word is divided into several fields. To change the active control word, drop down the appropriate field's combo box and select the desired option.

## Saving Graphs to Disk

Data in the real-time graph can be saved to a file. Only the raw output codes are saved, but voltages may be inferred based on the reference voltage and the maximum code value.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1149 Evaluation Kit/Evaluation System

## Reference Voltage

The evaluation software assumes a 2.500V reference voltage, unless otherwise specified. Refer to the MAX1149 data sheet for more information. To override this value, type the new reference voltage into the Vref edit-box and click the Set Vref button. For minimum gain error, measure the reference voltage between REF and AGND, and enter the value in the software, next to Set Vref .

## Detailed Description of Hardware

U1, the MAX1149, is a high-speed, multichannel, 14-bit data-acquisition system. Resistors R1-R9 and capacitors  C1-C9 form single-pole, lowpass anti-aliasing filters with a 0.5µs nominal time constant and an approximate 320kHz corner frequency. Jumper JU1 connects the analog common COM to analog ground AGND. C11 bypasses the bandgap reference, and C10 bypasses the ADC's voltage reference (internal or external).  When operated by the evaluation software, +5V is supplied from the CMODUSB. See Figure 2, and refer to the MAX1149 data sheet.

## Evaluating the MAX1146

To evaluate the 4-channel MAX1146, request a free sample  of  the  MAX1146BEUP  to  replace  the MAX1149EVKIT's U1. Follow the Quick Start instructions,  except in step 1, move the CMODUSB JU1 to select 5.0V. After step 8, pull down the software's Device menu and select MAX1146 .

## Evaluating the MAX1147

To evaluate the 3V, 4-channel MAX1147, request a free sample  of  the  MAX1147BEUP  to  replace  the MAX1149EVKIT's U1. Follow the Quick Start instructions except after step 8, pull down the software's

Device menu and select MAX1147 .

## Evaluating the MAX1148

To evaluate the MAX1148, request a free sample of the MAX1148BEUP to replace the MAX1149EVKIT's U1. Follow the Quick Start instructions,  except in step 1, move the CMODUSB JU1 to select 5.0V. After step 8, pull  down the software's Device menu and select MAX1148 .

<!-- image -->

## Troubleshooting

## Problem: No output measurement. System seems to report zero voltage, or fails to make a measurement.

Check the VDD supply voltage. Check the reference voltage using a digital voltmeter. Use an oscilloscope to verify  that  the  conversion-start  signal  is  being  strobed. Verify that SHDN is being driven high (JU2 = 1-2).

## Problem: Measurements are erratic, unstable; poor accuracy.

Check the reference voltage using a digital voltmeter. Use an oscilloscope to check for noise. When probing for noise, keep the oscilloscope ground return lead as short as possible, preferably less than 0.5in (10mm).

To improve DC accuracy, DC meters should be applied as close as possible to the pins of the part.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Measuring Supply Current

Power-supply current can be monitored by measuring the voltage across resistor R10. This resistor is 10 Ω ±1%, so every 0.001V across R10 represents 100µA of supply current.

## Table 1. Jumper Functions

| JUMPER   | POSITION   | FUNCTION                                                                                                                     |
|----------|------------|------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Closed*    | Analog common (COM) is connected to analog ground (AGND).                                                                    |
| JU1      | Open       | COM is disconnected from AGND. All analog inputs, including COM, must still be within the MAX1149's common-mode input range. |
| JU2      | 1-2*       | Operate                                                                                                                      |
| JU2      | 2-3        | Shutdown                                                                                                                     |
| JU3      | Closed     | External reference                                                                                                           |
| JU3      | Open*      | Internal reference                                                                                                           |

## MAX1149 Evaluation Kit/Evaluation System

Figure 1. MAX1149 EV Kit Main Window

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1149 Evaluation Kit/Evaluation System

<!-- image -->

Figure 2. MAX1149 EV Kit Schematic

<!-- image -->

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1149 Evaluation Kit/Evaluation System

Figure 3. MAX1149 EV Kit Component Placement Guide-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1149 Evaluation Kit/Evaluation System

<!-- image -->

Figure 4. MAX1149 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1149 Evaluation Kit/Evaluation System

Figure 5. MAX1149 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600