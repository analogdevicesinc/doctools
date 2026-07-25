<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX1320 Evaluation Kit/Evaluation System

## General Description

The MAX1320 evaluation system (EV system) is a complete 8-channel, 14-bit, data-acquisition system (DAS). The MAX1320 EV system (MAX1320EVB16) consists of a MAX1320  evaluation  kit  (EV  kit)  and  the  Maxim 68HC16MOD-16WIDE microcontroller (µC) module. Order the EV kit (MAX1320EVKIT) separately if the user has a parallel bus controller or if the 68HC16MOD-16WIDE µC module has already been purchased.

The MAX1320 EV kit can be used to evaluate the MAX1320 with an external system clock. In this mode, the 68HC16MOD-16WIDE board cannot be used and the user must supply a parallel interface.

The EV kit comes with the MAX1320ECM installed. To evaluate the pin-compatible MAX1316ECMMAX1319ECM and MAX1321ECM-MAX1327ECM, contact the factory for free samples.

## MAX1320EVB16 Component List

| PART             |   QTY | DESCRIPTION      |
|------------------|-------|------------------|
| MAX1320EVKIT     |     1 | MAX1320 EV kit   |
| 68HC16MOD-16WIDE |     1 | 68HC16 µC module |

| DESIGNATION     |   QTY | DESCRIPTION                                                          |
|-----------------|-------|----------------------------------------------------------------------|
| C1-C6, C19      |     7 | 2.2µF ±10%, 25V X7R ceramic capacitors (1206) TDK C3216X7R1E225K     |
| C7-C18, C20-C27 |    20 | 0.1µF ±10%, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K     |
| C28, C29        |     2 | 0.01µF ±10%, 25V X7R ceramic capacitors (0603) Murata GRM188R71E103K |
| C30             |     1 | 4.7µF ±10%, 16V X7R ceramic capacitor (1206) TDK C3216X7R1C475K      |
| C31-C38         |     8 | 1000pF ±10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H102K |
| ECLK, CONVST    |     2 | SMA connectors                                                       |
| FB1             |     1 | Ferrite bead TDK MMZ1608B601C (0603)                                 |
| J1              |     1 | 2 x 9-pin header                                                     |
| J2              |     1 | 2 x 14-pin header                                                    |

Windows is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Features

- ♦ Proven PC-Board Layout
- ♦ Windows ® 98-/2000-/XP-Compatible Evaluation Software
- ♦ Buffers on All Input Channels
- ♦ Headers to Connect EV System to Logic Analyzer
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | INTERFACE TYPE                        |
|--------------|---------------------------------------|
| MAX1320EVKIT | User-supplied parallel-bus controller |
| MAX1320EVB16 | Windows software                      |

Note: The MAX1320 software is included with the MAX1320 EV kit but is designed for use with the complete EV system. The EV system includes both the Maxim µC module and the EV kit. If the Windows software will not be used, the EV kit board can be purchased without the Maxim µC module.

Note: To evaluate the MAX1316ECM-MAX1319ECM or the MAX1321ECM-MAX1327ECM, request a free sample when ordering the MAX1320EVKIT or MAX1320EVB16.

## MAX1320EVKIT Component List

| DESIGNATION      |   QTY | DESCRIPTION                                                     |
|------------------|-------|-----------------------------------------------------------------|
| J3, J4           |     2 | 2 x 20, 0.1in right-angle receptacles                           |
| JU1-JU12         |    12 | 2-pin headers                                                   |
| JU13-JU16        |     4 | 3-pin headers                                                   |
| JU17, JU18, JU19 |     0 | Not installed (2-pin headers)                                   |
| R1-R8            |     8 | 100k Ω ±5% resistors (0603)                                     |
| R9-R16           |     8 | 10 Ω ±5% resistors (0603)                                       |
| R17-R24          |     8 | 8.66k Ω ±1% resistors (0603)                                    |
| R25-R32          |     8 | 24 Ω ±5% resistors (0603)                                       |
| U1               |     1 | 8-channel, 14-bit ADC MAX1320ECM (48-pin TQFP)                  |
| U2-U5            |     4 | Dual-supply op amps MAX4351ESA (8-pin SO)                       |
| U6               |     1 | Ultra-high-precision voltage regulator MAX6126AASA25 (8-pin SO) |
| None             |    16 | Shunts                                                          |
| None             |     1 | MAX1320 EV kit PC board                                         |
| None             |     1 | MAX1320 EV kit software, CD-ROM                                 |

Maxim Integrated Products

## MAX1320 Evaluation Kit/Evaluation System

## MAX1320 EV Kit Files

| FILE         | DESCRIPTION                                |
|--------------|--------------------------------------------|
| INSTALL.EXE  | Installs the EV kit files on your computer |
| MAX1320.EXE  | Application program                        |
| MAX1320.C16  | 68HC16MOD-16WIDE software                  |
| HELPFILE.HTM | MAX1320 EV kit help file                   |
| UNINST.INI   | Uninstalls the EV kit software             |
| MAX1320.ASM  | 68HC16MOD-16WIDE µC source file            |
| EVKIT2.ASM   | 68HC16MOD-16WIDE µC source file            |
| GPT.ASM      | 68HC16MOD-16WIDE µC source file            |
| QSPI.ASM     | 68HC16MOD-16WIDE µC source file            |

## Component Suppliers

| SUPPLIER   | PHONE        | WEBSITE               |
|------------|--------------|-----------------------|
| Murata     | 770-436-1300 | www.murata.com        |
| TDK        | 847-803-6100 | www.component.tdk.com |

Note: Indicate you are using the MAX1320 when contacting these component suppliers.

## Quick Start

## Recommended Equipment

- Maxim MAX1320EVB16 EV system (MAX1320EVKIT and 68HC16MOD-16WIDE µC module)
- 3 power supplies:
- 1) 7V or higher (up to 20V) at 300mA for the 68HC16MOD-16WIDE
- 2) 5V at 250mA for AVDD
- 3) ±5.5V at 250mA for HVAVCC and HVAVEE (or ±10V at 250mA to evaluate the MAX1324ECMMAX1327ECM)
- Waveform generator (optional)
- Digital voltmeter (DVM)
- User-supplied 9-pin serial extension cable
- User-supplied Windows 98/2000/XP PC with an available RS-232 serial port
- Logic analyzer (optional)

## Procedure

## Do not turn on the power until all connections are made.

- 1) Set JU1 to 1-2 (selects midscale reference for bipolar operation).
- 2) Set JU2 to 1-2 (selects on-board external reference).
- 3) Remove shunt from JU3 (disables autoread feature).
- 4) Set JU4 to 1-2 (enables the MAX1320 internal clock).
- 5) Set JU5-JU12 to 1-2 (selects buffered input for channel 0 through channel 7).
- 6) Set JU13 to 2-3 (selects midscale reference for bipolar operation).
- 7) Set JU14 to 1-2 (enables the MAX1320 internal clock).
- 8) Set JU15 to 2-3 (selects VCC from 68HC16MOD16WIDE as DVDD)
- 9) Set JU16 to 2-3 (selects HVAVCC pad as positive supply for input buffers).
- 10) Connect the MAX1320 EV kit's two 40-pin female connectors (J3 and J4) to the 68HC16MOD-16WIDE module's two 40-pin male connectors (P1 and P2).
- 11) Connect the 9-pin serial cable from the computer's serial  port  to  the  68HC16MOD-16WIDE module's DB9 connector (J3). Use a USB-to-serial adapter if your computer does not have a serial port.
- 12) Install the MAX1320 evaluation software on your computer by running the INSTALL.EXE program. The files can be obtained from the Maxim website or the enclosed CD. The program files are copied and icons are created for them in the Windows Start menu.
- 13) Connect the +5V power supply between the MAX1320 EV kit's AVDD and AGND pads.
- 14) Connect the ±5.5V power supply to the MAX1320 EV kit (+5.5V to HVAVCC pad, ground to AGND pad, and -5.5V to HVAVEE pad).
- 15) Connect the 7V (up to 20V supported) power supply to the 68HC16MOD-16WIDE's power connector (J2).
- 16) Turn on all three power supplies.
- 17) Turn on the 68HC16MOD-16WIDE by setting SW1 to the ON position.
- 18) Measure the voltage at REF using the DVM and verify that the voltage is 2.500V ±0.025V.
- 19) Start the MAX1320 EV kit software by double-clicking its icon in the Start menu.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1320 Evaluation Kit/Evaluation System

## Detailed Description of Software

To start the software, double-click the MAX1320 EV kit icon that is created during installation. The Serial Form, shown in Figure 1, appears and the user must click Ok to  upload the firmware to the 68HC16MOD-16WIDE and begin the program.

When the firmware has been uploaded and the µC on the 68HC16MOD-16WIDE has booted, the MAX1320 evaluation software (shown in Figure 2) appears.

The Part pulldown menu allows the user to select any part in the MAX1316ECM-MAX1327ECM family. By default,  the  MAX1320ECM is selected. The Sampling pulldown menu allows the user to select between three sampling modes: single sample, continuous sample, and block sample. Note that in block-sample mode, the user can select the sampling rate (per channel) and this  rate  changes depending on how many channels are selected.

The check boxes in the Power Saving Modes box allow the user to enable the different power-saving features of the MAX1320. The two check boxes are labeled SHDN pin and ALLON pin and represent the state of the MAX1320's pin with the same designation. Checking and unchecking these boxes sets the corresponding IC pin high and low, respectively.

The Channel Select box contains a check box for each input channel of the IC. Checking the box allows the software to sample the channel.

The Input Values box displays the raw data and corresponding input voltage of all selected channels after sampling.

The References box allows the user to specify the exact references being used. The values for the reference voltage and the midscale voltage should be entered here. These values are used in the transfer function for converting the raw data into a corresponding input voltage.

The Sample Options box is used to control sampling in any of the three sampling modes. In single-sample mode, the Sample button is used to sample all selected channels once. In continuous-sample mode, the Start and Stop buttons are used to sample all selected channels and a sampling interval (between 200ms and 10,000ms) can be entered in the Sampling Interval text field. In block-sample mode, the Sample button is used to bring up the Sampling Tool (see Figure 3) and the Sampling Frequency scrollbar is used to select a sampling frequency per channel. Note that the sampling frequency

will be adjusted as channels are selected/unselected and will  be  accurate typically to within 0.5ms. To determine the exact sampling frequency per channel in block-sample mode, observe consecutive falling edges on the CONVST pin (J1-7) when sampling. To capture data for precision FFTs, use the MAX1320 EV kit with an external clock and a logic analyzer (instead of the 68HC16MOD16WIDE) to read the parallel bus. This improves the accuracy of the ADC clocking system.

<!-- image -->

When using the MAX1320 evaluation software, the Serial  Form and/or Graph Form can be displayed by clicking on the appropriate command in the Options menu. The Serial Form displays all communication between the MAX1320 evaluation software and the 68HC16MOD-16WIDE. The Graph Form (see Figure 4) displays a graph of sampled results when the software is in continuous-sample mode.

Note that when viewing graphical information (using either  the  Graph  Form in continuous-sample mode or done automatically in block-sample mode), the raw codes collected from the MAX1320 are converted from two's complement (or offset binary in unipolar devices) to signed decimal. The raw data can be saved to a text file using the Save… menu item in the graph window.

## Detailed Description of Hardware

## MAX1320EVB16 EV System

The MAX1320EVB16 is a complete 8-channel, 14-bit, DAS consisting of a MAX1320 EV kit and the Maxim 68HC16MOD-16WIDE µC module.

## 68HC16MOD-16WIDE µC Module

The 68HC16MOD-16WIDE provides a 16-bit parallel bus to demonstrate various Maxim devices. Maxim reserves the right to change the implementation of this module at any time with no advance notice.

## MAX1320 EV Kit

The MAX1320 EV kit board provides a proven layout for evaluating the MAX1320 8-channel, 14-bit ADC and can be obtained separately without the 68HC16MOD-16WIDE µC module. The MAX1320 EV kit includes an on-board 2.5V reference (MAX6126) and buffers (MAX4351) for all eight input channels. The MAX1320ECM (U1) is powered from two sources. The user must supply +5V between AVDD and AGND, and +3V to +5V between DVDD and DGND.  DVDD  can  also  be  supplied  from  the 68HC16MOD-16WIDE using JU15.

The input buffers require a +5.5V positive supply (HVAVCC) and a -5.5V negative supply (HVAVEE). The positive supply for the input buffers must be applied on the  HVAVCC pad or connected to AVDD using JU16.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1320 Evaluation Kit/Evaluation System

Figure 1. MAX1320 EV Kit Serial Form

<!-- image -->

Figure 2. MAX1320 Evaluation Software

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1320 Evaluation Kit/Evaluation System

<!-- image -->

Figure 3. MAX1320 EV Kit Sampling Tool

<!-- image -->

Figure 4. MAX1320 EV Kit Graph Form

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1320 Evaluation Kit/Evaluation System

The negative supply must be applied on the HVAVEE pad. Connect the ground for these supplies to the AGND pad.

If  the  IC  has  less  than  eight  input  channels  (i.e.,  four channels or two channels), the unused input pins can be connected to AGND or left floating. Note that if the inputs are buffered and exceed ±5V (i.e., when using the MAX1324-MAX1327 that support inputs up to ±10V), replace the MAX4351 buffers (U2-U5) with buffers capable of a ±10V voltage range.

Jumpers on the EV kit allow evaluation of all the parts in the MAX1316-MAX1327 family. When changing between parts in the family, JU1 and JU13 must be set according to whether the IC accepts bipolar or unipolar inputs.

The  MAX1320  on  the  EV  kit  uses  the  on-board MAX6126 2.5V reference instead of its internal reference when shipped. To use the MAX1320's internal 2.5V reference, remove the shunt from JU2. The user can also use an external reference by first removing the shunt from JU2 and applying the reference voltage to the REF pad. When using a non-default reference value, the user must update the value in the EV kit software's References box.

A  logic  analyzer  can  be  used  instead  of  the 68HC16MOD-16WIDE to evaluate the MAX1320 EV kit. For this  configuration,  disconnect the EV kit from the 68HC16MOD-16WIDE and connect the logic analyzer to  J1  and J2. These headers allow access to the MAX1320 control (J1) and data (J2) pins.

When shipped, the MAX1320 EV kit is set to use the MAX1320 internal clock, but an external clock can be supported. To use an external clock, connect the clock signal to the ECLK SMA connector, remove the shunt from JU4, and set the shunt on JU14 to the 2-3 position. In this configuration, the 68HC16MOD-16WIDE can no longer be used and the user must supply a parallel interface (i.e., a logic analyzer).

When not using the 68HC16MOD-16WIDE as the parallel  interface,  the  MAX1320 EV kit can be put into autoread mode by placing a jumper on pins 1-2 of JU3. In  this  mode,  the  MAX1320 EOC pin is  connected to the RD strobe and available samples are immediately outputted on the parallel bus. When performing autoread, the CS pin can be connected low by placing a jumper between J1-9 and J1-10.

Note that when the 68HC16MOD-16WIDE is not being used as the parallel interface, JU15 must be set to the 1-2 position and DVDD must be supplied between the DVDD and DGND pads on the EV kit.

## Jumper Selection Tables

The following tables (Tables 1-9) explain the functionality of each jumper on the MAX1320 EV kit.

## Table 1. Midscale Voltage Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU1      | Short*           | Midscale voltage is set for bipolar inputs.  |
| JU1      | Open             | Midscale voltage is set for unipolar inputs. |

## Table 2. Reference Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                      |
|----------|------------------|----------------------------------------------------------------------------------------------------------------------------------|
| JU2      | Short*           | Select on-board 2.5V reference (MAX6126) as voltage reference.                                                                   |
| JU2      | Open             | Select internal 2.5V reference or external REF pad as voltage reference. Note that external reference must be between 2V and 3V. |

## Table 3. Autoread Mode

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                  |
|----------|------------------|----------------------------------------------|
| JU3      | Short            | Connects RD and EOC lines for autoread mode. |
| JU3      | Open*            | Disables autoread mode.                      |

## Table 4. ADC Clock-Source Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                   |
|----------|------------------|-----------------------------------------------|
| JU4      | Short*           | Select internal clock as ADC system clock.    |
| JU4      | Open             | Select external ECLK SMA as ADC system clock. |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1320 Evaluation Kit/Evaluation System

Table 5. Buffered Input Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                         |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| JU5-JU12 | Short*           | Channel X (where X is determined by the jumper number minus 5) input must appear on CHX-BUF pads and is buffered using the MAX4351. |
| JU5-JU12 | Open             | Channel X (where X is determined by the jumper number minus 5) input must appear on CHX pads and is not buffered.                   |

Table 6. Midscale Reference Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                    |
|----------|------------------|------------------------------------------------|
| JU13     | 1-2              | Midscale reference is set for unipolar inputs. |
| JU13     | 2-3*             | Midscale reference is set for bipolar inputs.  |

## General Troubleshooting

Problem 1: 68HC16MOD-16WIDE not found (see Figure 5).

- Is LED1 on the 68HC16MOD-16WIDE lit?
- Is the power supply connected?
- Is SW1 turned to ON position?
- Is the DB9 serial-communications cable connected?
- Could another application be using the COM port (i.e., PDA software)?

Problem 2: Cannot read data from MAX1320 EV kit.

- Are JU5-JU12 set for buffered or unbuffered inputs?
- Are the buffer power supplies (HVAVCC and HVAVEE) connected?
- Are the MAX1320 EV kit power supplies (AVDD and DVDD) connected?
- Are JU4 and JU14 set for internal or external clock?
- Is the part in shutdown mode?

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 7. ADC System Clock Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                   |
|----------|------------------|-----------------------------------------------|
| JU14     | 1-2*             | Select internal clock as ADC system clock.    |
| JU14     | 2-3              | Select external ECLK SMA as ADC system clock. |

## Table 8. DVDD Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                         |
|----------|------------------|-----------------------------------------------------|
| JU15     | 1-2              | DVDD supplied from DVDD pad.                        |
| JU15     | 2-3*             | DVDD connected to VCC supply from 68HC16MOD-16WIDE. |

## Table 9. Positive Supply for Input Buffers (HVAVCC) Select

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                               |
|----------|------------------|-----------------------------------------------------------|
| JU16     | 1-2              | Positive supply to input buffers connected to AVDD.       |
| JU16     | 2-3*             | Positive supply to input buffers connected to HVAVCC pad. |
| JU16     | Open             | No positive supply to input buffers.                      |

Problem 3: Data being read from the MAX1320 seems incorrect.

- Are JU1 and JU13 set for bipolar or unipolar inputs?
- Is  the  reference voltage entered correctly in the MAX1320 evaluation software?
- Is  the  midscale voltage entered correctly in the MAX1320 evaluation software?
- Is the correct part selected in the MAX1320 evaluation software?
- Is the source impedance less than 100 Ω ?

## MAX1320 Evaluation Kit/Evaluation System

Figure 5. 68HC16MOD-16WIDE Not-Found Error Message

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1320 Evaluation Kit/Evaluation System

<!-- image -->

Figure 6. MAX1320 EV Kit Schematic (Sheet 1 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1320 Evaluation Kit/Evaluation System

Figure 6. MAX1320 EV Kit Schematic (Sheet 2 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1320 Evaluation Kit/Evaluation System

<!-- image -->

Figure 6. MAX1320 EV Kit Schematic (Sheet 3 of 3)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1320 Evaluation Kit/Evaluation System

Figure 7. MAX1320 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1320 Evaluation Kit/Evaluation System

<!-- image -->

Figure 8. MAX1320 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1320 Evaluation Kit/Evaluation System

Figure 9. MAX1320 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600