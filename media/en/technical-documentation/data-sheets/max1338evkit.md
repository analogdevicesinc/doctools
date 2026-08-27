<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX1338 Evaluation Kit/Evaluation System

## General Description

The MAX1338 evaluation system (EV system) is a complete 4-channel, 14-bit data-acquisition system. The MAX1338 EV system (MAX1338EVB16) consists of a MAX1338  evaluation  kit  (EV  kit)  and  the  Maxim 68HC16MOD-16WIDE microcontroller (µC) module. Order the EV kit (MAX1338EVKIT) separately if the user has a parallel bus controller, or if the 68HC16MOD-16WIDE µC module has already been purchased.

The MAX1338EVKIT can be used to evaluate the MAX1338 with an external system clock. In this mode, the 68HC16MOD-16WIDE board cannot be used and the user must supply a parallel interface.

## MAX1338EVB16 Component List

| PART             |   QTY | DESCRIPTION      |
|------------------|-------|------------------|
| MAX1338EVKIT     |     1 | MAX1338 EV kit   |
| 68HC16MOD-16WIDE |     1 | 68HC16 µC module |

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1-C4, C38    |     5 | 2.2µF ±10%, 25V X7R ceramic capacitors (1206) TDK C3216X7R1E225K    |
| C5-C25        |    21 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K    |
| C26           |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K |
| C27, C28      |     2 | 1.0µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A105K    |
| C29           |     1 | 4.7µF ±10%, 16V X7R ceramic capacitor (1206) TDK C3216X7R1C475K     |
| C30-C37       |     8 | 470pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H471K |
| ECLK, CONVST  |     2 | SMA connectors                                                      |
| FB1           |     1 | Ferrite bead TDK MMZ1608B601C (0603)                                |
| J1            |     1 | 2 x 9-pin header                                                    |
| J2            |     1 | 2 x 14-pin header                                                   |

- ♦ Proven PC Board Layout
- ♦ Windows ® 98-/2000-/XP-Compatible Evaluation Software
- ♦ Unpopulated PC Board Landing Pads for Buffers on All Input Channels
- ♦ Headers to Connect EV Kit to Logic Analyzer
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | INTERFACE TYPE                        |
|--------------|---------------------------------------|
| MAX1338EVKIT | User-Supplied Parallel-Bus Controller |
| MAX1338EVB16 | Windows Software                      |

Note: The MAX1338 software is included with the MAX1338 EV kit  but  is  designed for use with the complete EV system. The EV system includes both the Maxim µC module and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim µC module.

Windows is a registered trademark of Microsoft Corp.

## MAX1338EVKIT Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                     |
|------------------|-------|-----------------------------------------------------------------|
| J3, J4           |     2 | 2 x 20, 0.1in, right-angle receptacles                          |
| JU1, JU2, JU3    |     3 | 2-pin headers                                                   |
| JU4-JU11         |     0 | Not installed (2-pin headers)                                   |
| JU12, JU13, JU14 |     3 | 3-pin headers                                                   |
| R1-R8            |     8 | 100k Ω ±5% resistors (0603)                                     |
| R9-R16           |     8 | 10 Ω ±5% resistors (0603)                                       |
| R17-R24          |     0 | Not installed (0603)                                            |
| R25-R32          |     0 | Not installed (0603)                                            |
| U1               |     1 | 4-channel/14-bit ADC MAX1338ETN (56 TQFN-EP 8mm x 8mm)          |
| U2-U5            |     0 | Not installed (8-pin SO buffers)                                |
| U6               |     1 | Ultra-high-precision voltage regulator MAX6126AASA25 (8-pin SO) |
| None             |     1 | MAX1338 EV kit PC board                                         |
| None             |     6 | Shunts                                                          |
| None             |     1 | MAX1338 EV kit software, CD-ROM                                 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

## Features

## MAX1338 Evaluation Kit/Evaluation System

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| Murata     | 770-436-1300 | www.murata.com        |
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the MAX1338 when contacting these component suppliers.

## MAX1338EV Kit Files

| INSTALL.EXE   | Installs the EV kit files on your computer   |
|---------------|----------------------------------------------|
| MAX1338.EXE   | Application program                          |
| MAX1338.C16   | 68HC16MOD-16WIDE firmware                    |
| HELPFILE.HTM  | MAX1338 EV kit help file                     |
| UNINST.INI    | Uninstalls the EV kit software               |
| MAX1338.ASM   | 68HC16MOD-16WIDE firmware source file        |
| EVKIT2.ASM    | 68HC16MOD-16WIDE firmware source file        |
| GPT.ASM       | 68HC16MOD-16WIDE firmware source file        |
| QSPI.ASM      | 68HC16MOD-16WIDE firmware source file        |

## Quick Start

## Recommended Equipment

- MAX1338EVKIT
- 68HC16MOD-16WIDE µC module
- Two power supplies:
- 1) 8V  or  higher  (up  to  20V)  at  300mA  for  the 68HC16MOD-16WIDE
- 2) 5V ±5% at 250mA for AVDD
- DVM (digital voltmeter)
- User-supplied 9-pin I/O extension cable
- User-supplied Windows 98/2000/XP PC
- RS-232 serial port on the PC
- Waveform generator (optional)
- Logic analyzer (optional)

## Procedure

Do not turn on the power supplies until all connections are made:

- 1) Set JU1 to 1-2 (selects on-board external reference).
- 2) Set JU2 to 1-2 (enables the MAX1338's internal clock).
- 3) Remove shunt from JU3 (disables autoread feature).
- 4) Set JU12 to 1-2 (selects the MAX1338's internal clock).
- 5) Set JU13  to 2-3 (selects  VCC  from  the 68HC16MOD-16WIDE as DVDD).
- 6) Set JU14  to 2-3 (selects  VCC  from  the 68HC16MOD-16WIDE as DRVDD).
- 7) Connect the MAX1338 EV kit's two 40-pin female connectors (J3 and J4) to the 68HC16MOD-16WIDE module's two 40-pin male connectors (P1 and P2).
- 8) Connect the 9-pin serial cable from the computer's serial  port  to  the  68HC16MOD-16WIDE module's DB9 connector (J3).
- 9) Install  the  MAX1338 evaluation software on your computer by running the INSTALL.EXE program. The files can be obtained from the Maxim website or the included CD. The program files are copied and icons are created for them in the Windows start menu.
- 10) Connect the 8V (up to 20V supported) power supply to the 68HC16MOD-16WIDE's power connector (J2).
- 11) Connect  the  5V  power  supply  between  the MAX1338 EV kit's AVDD and AGND pads.
- 12) Turn on the 8V power supply.
- 13) Turn on the 5V power supply.
- 14) Turn on the 68HC16MOD-16WIDE by setting SW1 to the ON position.
- 15) Measure  the  voltage  at  the  REF  pad  on  the MAX1338 EV kit using the DVM, and verify that the voltage is 2.500V ±0.025V.
- 16) Start the MAX1338 EV kit software by double-clicking its icon in the start menu.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1338 Evaluation Kit/Evaluation System

## Detailed Description of Software

To start the software, double-click the MAX1338 EV kit icon that is created during installation. The serial form, shown in Figure 1, appears and the user must click OK to upload the firmware to the 68HC16MOD-16WIDE.

When the firmware has been uploaded and the µC on the 68HC16MOD-16WIDE has booted, the MAX1338 evaluation software shown in Figure 2 appears.

The Input Values box displays the raw data and corresponding input voltage of all four channels after sampling (except in block-sample mode).

The Select Input Range box contains a pulldown menu for  each input channel of the IC. These pulldown menus allow the user to select the input range (±10V, ±5V, ±2.5V, or ±1.25V) for each channel.

The checkboxes in the Power-Saving Modes box allow the user to enable the different power-saving features of the MAX1338. The two checkboxes are labeled SHDN and STANDBY ,  and  represent  the  state  of  the MAX1338's pin with the same designation. Checking and unchecking these boxes sets the corresponding IC pin high and low, respectively.

<!-- image -->

Figure 1. Serial Form

<!-- image -->

The Reference Voltage box allows the user to specify the exact reference voltage being used. This voltage value is used in the transfer function for converting the raw data into a corresponding sampled input voltage.

The Sample Options box is used to control sampling of the MAX1338. The Sampling Mode pulldown menu allows the user to choose between single-sample mode, continuous-sample mode, and block-sample mode.

In  single-sample mode, the Sample button is used to sample the four input channels once. In continuoussample mode, the Start and Stop buttons are used to begin and end the continuous sampling of all four channels. The sampling interval (between 200ms and 10,000ms) can be entered in the sampling interval text field. In block-sample mode, the Sample button is used to bring up the sampling tool (see Figure 3), and the FS (sampling frequency) scroll bar is used to select a sampling  frequency (per channel). Note that the sampling frequency is typically accurate to within 0.5ms. To

Figure 2. MAX1338 Evaluation Software

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1338 Evaluation Kit/Evaluation System

Figure 3. Sampling Tool

<!-- image -->

determine the exact sampling frequency per channel in block-sample mode, observe consecutive falling edges on the CONVST pin (J1-7) when sampling. To capture data for precision FFTs, use the MAX1338 EV kit with an external clock and a logic analyzer (instead of the 68HC16MOD-16WIDE) to read the parallel bus. This improves the accuracy of the ADC clocking system.

When using the MAX1338 evaluation software, it can be useful to display the serial form (see Figure 1) and/or the graph form (see Figure 4). To display these forms, click on the appropriate command in the Options menu. The serial form displays all communication between the MAX1338 evaluation software and the 68HC16MOD16WIDE. The graph form displays a graph of sampled results when the software is in continuous-sample mode.

Note that when viewing graphical information (using either  the  graph  form  in  continuous-sample mode or done automatically in block-sample mode), the raw codes collected from the MAX1338 are converted from two's complement to signed decimal. The raw data can be saved to a text file using the Save... menu item in the graph window.

## Detailed Description of Hardware MAX1338EVB16 EV System

The MAX1338 EV system (MAX1338EVB16) is a complete, 4-channel, 14-bit, data-acquisition system consisting of a MAX1338 EV kit and the Maxim 68HC16MOD-16WIDE µC module.

Figure 4. Graph Form

<!-- image -->

## 68HC16MOD-16WIDE µC Module

The 68HC16MOD-16WIDE provides a 16-bit parallel bus to demonstrate various Maxim devices. Maxim reserves the right to change the implementation of this module at any time with no advance notice.

## MAX1338 EV Kit

The MAX1338 EV kit board provides a proven layout for evaluating the MAX1338 4-channel, 14-bit ADC and can be obtained separately without the 68HC16MOD-16WIDE µC module. The MAX1338 EV kit includes an on-board 2.5V reference (MAX6126) and unpopulated PC board landing pads for buffers on all four input channels. The MAX1338ETN (U1) is powered from three sources. The user must supply +5V between AVDD and AGND, +5V between DVDD and DGND, and +3V to +5V between DRVDD and DRGND. DVDD and DRVDD can also be supplied from the 68HC16MOD-16WIDE's 5V regulator using JU13 and JU14, respectively.

The MAX1338 on the EV kit uses the on-board MAX6126 2.5V reference instead of its internal reference when shipped. To use the MAX1338's internal 2.5V reference, remove the shunt from JU1. To use a user-supplied external reference, first remove the shunt from JU1, and then apply the external reference to the REF pad. When using a nondefault reference value, update the value in the EV kit software's Reference Voltage box.

A  logic  analyzer  can  be  used  instead  of  the 68HC16MOD-16WIDE to evaluate the MAX1338 EV kit. To use a logic analyzer, disconnect the EV kit from the

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1338 Evaluation Kit/Evaluation System

68HC16MOD-16WIDE and connect the logic analyzer to  J1  and J2. These headers allow access to the MAX1338's control pins (J1) and data pins (J2). See the schematic in Figure 6 for pin designations.

When shipped, the MAX1338 EV kit is configured to use the MAX1338's internal clock. To use an external clock, connect the clock signal to the ECLK SMA connector, remove the shunt from JU2, and set the shunt on JU12 to the 2-3 position. In this configuration, the 68HC16MOD-16WIDE can no longer be used, and the user must supply a parallel interface (i.e., logic analyzer).

Note that when the 68HC16MOD-16WIDE is not being used as the parallel interface, JU13 and JU14 must be set to the 1-2 position. The +5V digital supply voltage must then be applied between the DVDD and DGND pads, and the +3V to +5V digital I/O supply voltage must be applied between the DRVDD and DRGND pads.

Also, when the 68HC16MOD-16WIDE is not being used as the parallel interface, the MAX1338 EV kit can be configured in autoread mode by placing a jumper on pins 1-2 of JU3. In this mode, the MAX1338's EOC pin is  connected to the RD strobe, and the output data is available immediately on the parallel bus at the falling edge of EOC .  When performing autoread, connect the CS pin low by placing a shunt across J1-9 and J1-10.

## Using Input Buffers

The unpopulated buffer landing pads (U2-U5) and corresponding discrete components can be populated to buffer the input signals. When using input buffers, the positive supply must be applied on the HVAVCC pad, and the negative supply must be applied on the HVAVEE pad. Connect the ground for these supplies to the AGND pad. Note that if the input buffers are unable to drive the capacitive load of the anti-aliasing filters on the MAX1338 inputs (R9-R16 and C30-C37), the filter may need to be adjusted or removed. To remove the filter,  replace  R9-R16 with a wire or 0 Ω resistor,  and remove C30-C37.

<!-- image -->

## Jumper Selection Tables

The following tables (Tables 1-7) explain the functionality of each jumper on the MAX1338 EV kit.

## Table 1. Reference Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                                               |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | Short*           | Select on-board 2.5V reference (MAX6126) as voltage reference.                                                                                                            |
| JU1      | Open             | Select internal 2.5V reference or user-supplied external voltage on REF pad as voltage reference. Note that the user-supplied external voltage must be between 2V and 3V. |

## Table 2. ADC Clock Source Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                   |
|----------|------------------|-----------------------------------------------|
| JU2      | Short*           | Select internal clock as ADC system clock.    |
| JU2      | Open             | Select external ECLK SMA as ADC system clock. |

* Default configuration

Table 3. Autoread Mode

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU3      | Short            | Connects RD and EOC lines for autoread mode. |
| JU3      | Open*            | Disables autoread mode.                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1338 Evaluation Kit/Evaluation System

## Table 4. Buffered Input Select (Not Installed)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                 |
|----------|------------------|---------------------------------------------|
| JU4-JU11 | Short            | Select buffered input for AIN_+ or AIN_-.   |
| JU4-JU11 | Open*            | Select unbuffered input for AIN_+ or AIN_-. |

## Table 5. ADC System Clock Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                   |
|----------|------------------|-----------------------------------------------|
| JU12     | 1-2*             | Select internal clock as ADC system clock.    |
| JU12     | 2-3              | Select external ECLK SMA as ADC system clock. |

## Table 6. DVDD Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                         |
|----------|------------------|-----------------------------------------------------|
| JU13     | 1-2              | DVDD supplied from DVDD pad.                        |
| JU13     | 2-3*             | DVDD connected to VCC supply from 68HC16MOD-16WIDE. |

## Table 7. DRVDD Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                          |
|----------|------------------|------------------------------------------------------|
| JU14     | 1-2              | DRVDD supplied from DRVDD pad.                       |
| JU14     | 2-3*             | DRVDD connected to VCC supply from 68HC16MOD-16WIDE. |

## General Troubleshooting

Problem 1: 68HC16MOD-16WIDE not found (see Figure 5).

- Is LED1 on the 68HC16MOD-16WIDE lit?
- Is the power supply connected?
- Is SW1 turned to ON position?

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- Is the DB9 serial-communications cable connected?
- Could another application be using the COM port (i.e., PDA software)?

Problem 2: Cannot read data from MAX1338 EV kit.

- Are the MAX1338 EV kit power supplies (AVDD, DVDD, and DRVDD) connected?
- Are JU2 and JU12 set for internal or external clock?
- Are JU4-JU11 set for buffered or unbuffered inputs?
- Are the buffer power supplies (HVAVCC and HVACEE) connected?
- Is the part in shutdown mode or standby mode?

Problem 3: Data being read from the MAX1338 seems incorrect.

- Is  the  reference voltage entered correctly in the MAX1338 evaluation software?
- Is the source impedance less than 100 Ω ?

<!-- image -->

Figure 5. 68HC16MOD-16WIDE Not-Found Error Message

<!-- image -->

## MAX1338 Evaluation Kit/Evaluation System

<!-- image -->

Figure 6. MAX1338 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1338 Evaluation Kit/Evaluation System

Figure 6. MAX1338 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1338 Evaluation Kit/Evaluation System

<!-- image -->

Figure 6. MAX1338 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1338 Evaluation Kit/Evaluation System

Figure 7. MAX1338 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1338 Evaluation Kit/Evaluation System

<!-- image -->

Figure 8. MAX1338 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1338 Evaluation Kit/Evaluation System

Figure 9. MAX1338 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600