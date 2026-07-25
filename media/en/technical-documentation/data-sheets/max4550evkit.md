<!-- lastmod 2022-08-03 -->
## General Description

The MAX4550 evaluation kit (EV kit) simplifies evaluation of the MAX4550 dual 4x2 crosspoint analog switch with 2-wire serial user interface. The EV kit includes Windows 95 ® software, which provides a handy user interface for exercising the features of the MAX4550.

This kit  can  also  be  used  to  evaluate  the  MAX4570. Simply order a free sample of the MAX4570CWI along with the MAX4550 EV kit.

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX4550EVKIT | 0°C to +70°C  | 28 SO        |

| DESIGNATION                                          |   QTY | DESCRIPTION                                             |
|------------------------------------------------------|-------|---------------------------------------------------------|
| C1-C4                                                |     4 | 2.2µF, 16V ceramic capacitors Taiyo Yuden EMK316BJ225ML |
| C5-C8, C11, C12, C14, C15                            |     8 | 0.1µF ceramic capacitors                                |
| C9, C10, C13                                         |     3 | 4.7µF, 10V tantalum capacitors                          |
| R1, R3, R5, R7, R9, R11, R12, R13, R21-R26, R30, R31 |    16 | 10k Ω , 5% resistors                                    |
| R2, R4, R6, R8, R10, R14, R15, R16                   |     8 | 75 Ω , 5% resistors                                     |
| R17-R20                                              |     4 | 1k Ω , 5% resistors                                     |
| R27, R28, R29                                        |     3 | 47k Ω , 5% resistors                                    |
| R32-R35                                              |     4 | 220 Ω , 1% resistors                                    |
| Q0-Q3                                                |     4 | Red LEDs                                                |

## Component Suppliers

| SUPPLIER    | PHONE        | FAX          |
|-------------|--------------|--------------|
| Taiyo Yuden | 408-573-4150 | 408-573-4159 |

Note: Please indicate that you are using the MAX4550 when contacting the above component supplier.

Windows 95 is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

- ' Proven PC Board Layout
- ' Audio Mode
- -95dB Typical Crosstalk at 20kHz
- -110dB Typical Off-Isolation at 20kHz (10k Ω load)
- ' Video Mode
- -54dB Typical Crosstalk at 4.0MHz
- -78dB Typical Off-Isolation at 4.0MHz (1k Ω load)
- ' Total Harmonic Distortion (THD+N): 0.014%
- ' Easy-to-Use Software Included
- ' Fully Assembled and Tested Surface-Mount Board

## Component List

| DESIGNATION                                              |   QTY | DESCRIPTION                             |
|----------------------------------------------------------|-------|-----------------------------------------|
| NO1A-NO4A, NO1B-NO4B, SA, SB, COM1A, COM2A, COM1B, COM2B |    14 | RCA jacks                               |
| JU9, JU14, JU16, JU17                                    |     4 | 3-pin headers                           |
| JU15, JU18, JU19                                         |     3 | 2-pin headers                           |
| None                                                     |     6 | Shunts (JU9, JU14, JU16-JU19)           |
| JP1                                                      |     1 | DB25 right-angle male connector         |
| U1                                                       |     1 | MAX4550CWI                              |
| U2                                                       |     1 | 74HCT05                                 |
| None                                                     |     1 | MAX4550 PC board                        |
| None                                                     |     1 | Software disk, 'MAX4550 EVALUATION KIT' |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The MAX4550 EV kit is fully assembled and tested. Follow these steps to verify board operation.

- 1) Install the MAX4550 EV kit software on your computer by running INSTALL.EXE on the floppy disk. This copies the MAX4550 files and creates an icon for the program.
- 2) Check the jumper settings of the EV board. Refer to Table 1.

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

<!-- image -->

Features

## MAX4550 Evaluation Kit

- 3) Connect a +4.75V to +5.25V DC supply voltage between the +5V pad and the DGND pad. For dualsupply operation, make sure that JU15 is open; connect dual-supply voltages in the range ±2.7V to ±5.25V to the V+ and V- pads, and connect their ground to the GND pad. For single-supply operation, refer to the Single-Supply Operation section.
- 4) Connect a 25-pin male-to-female I/O extension cable from the computer's parallel port to the DB25 connector on the EV kit.
- 5) Start  the  MAX4550 program by opening its icon in the Windows 95 Start Menu. The EV kit software selects the correct port by testing for the pin 5 to pin 13 loopback.

## Table 1.  Jumper Functions

| JUMPER             | STATE                   | FUNCTION                                                                              |
|--------------------|-------------------------|---------------------------------------------------------------------------------------|
| JU1, JU20          | 1-2                     | 10k Ω termination of NO1A, NO2A referenced to midsupply (for single-supply operation) |
| JU1, JU20          | 2-3* (default trace)    | 10k Ω termination of NO1A, NO2A referenced to GND                                     |
| JU1, JU20          | Open                    | Do not leave open                                                                     |
| JU2, JU4, JU6, JU8 | Closed* (default trace) | NO1A, NO2A, NO3A, NO4A DC-coupled to MAX4550 inputs                                   |
| JU2, JU4, JU6, JU8 | Open                    | NO1A, NO2A, NO3A, NO4A AC-coupled to MAX4550 inputs with 2.2µF ceramic capacitor      |
| JU3, JU21          | 1-2                     | 75 Ω termination of NO1A, NO2A referenced to midsupply (for single-supply operation)  |
| JU3, JU21          | 2-3* (default trace)    | 75 Ω termination of NO1A, NO2A referenced to GND                                      |
| JU3, JU21          | Open                    | Do not leave open                                                                     |
| JU5, JU7           | Closed* (default trace) | NO3A, NO4A terminated with 75 Ω load                                                  |
| JU5, JU7           | Open                    | NO3A, NO4A terminated with 10k Ω load                                                 |
| JU10-JU13          | Closed* (default trace) | NO1B, NO2B, NO3B, NO4B terminated with 75 Ω load                                      |
| JU10-JU13          | Open                    | NO1B, NO2B, NO3B, NO4B terminated with 10k Ω load                                     |
| JU9, JU14          | 1-2                     | SA, SB connected to GND through 0.1µF capacitor                                       |
| JU9, JU14          | 2-3*                    | SA, SB connected directly to GND                                                      |
| JU9, JU14          | Open                    | SA, SB floating (can be used as ninth and tenth inputs)                               |
| JU15               | Closed                  | V- tied to GND, for single-supply operation                                           |
| JU15               | Open*                   | V- negative supply must be provided by user                                           |
| JU16               | 1-2                     | A0 = 1; for use with MAX4550                                                          |
| JU16               | 2-3*                    | A0 = 0; for use with MAX4550                                                          |
| JU16               | Open                    | Pin 13 functions as CS ; for use with MAX4570                                         |
| JU17               | 1-2                     | A1 = 1; for use with MAX4550                                                          |
| JU17               | 2-3*                    | A1 = 0; for use with MAX4550                                                          |
| JU17               | Open                    | Pin 16 functions as DOUT; for use with MAX4570                                        |
| JU18               | Closed*                 | BIASL tied to GND                                                                     |
| JU18               | Open                    | BIASL floating                                                                        |
| JU19               | Closed*                 | BIASH tied to V+                                                                      |
| JU19               | Open                    | BIASH floating                                                                        |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 6) Apply an input signal to NO1A and connect an oscilloscope or network analyzer to COM1A. Verify the switch operation by opening and closing the NO1A-to-COM1A switch via the software user interface. Checkboxes control the status (open or closed) of each switch.

## Evaluating the MAX4570

To evaluate the MAX4570, turn off the power to the EV kit,  open JU16 and JU17, and replace U1 with a MAX4570CWI. No other hardware changes are necessary.

<!-- image -->

## Detailed Description of Software

Upon execution of the MAX4550 program, the software determines whether the MAX4550 or MAX4570 is installed. If the MAX4550 is installed, the software automatically resolves its address (if the MAX4570 is installed, this step will not be performed). The software enables the command panel, after which the user may perform any of the operations described below.

## Command Panel

Each of the four inputs to switch matrix A, plus the SA input,  can  be  connected to either COM1A or COM2A (or  both).  For  example,  to  connect  NO1A to COM1A, check the COM1A box next to NO1A in the 'Switch Matrix A' panel. The same procedure applies to the switches in switch matrix B.

For midsupply biasing of any of the outputs, check the box next to the output in the 'Output Biasing' panel. Make sure JU18 and JU19 are shunted, connecting BIASH to V+ and BIASL to GND. For more details regarding output biasing, refer to the Output Biasing section or to the MAX4550/MAX4570 data sheet.

For clickless operation of any of the outputs, check the box next to the output in the 'Clickless Mode' panel. For more details regarding clickless operation, refer to the MAX4550/MAX4570 data sheet.

To drive any of the four auxiliary outputs high, check the box next to the output in the 'Auxiliary Outputs' panel. Note that the LEDs are connected to V+, so driving an auxiliary output high will turn off its LED. For more details regarding the auxiliary outputs, refer to the MAX4550/MAX4570 data sheet.

Selecting the 'Reset' button restores the MAX4550 to its  power-up state. At power-up the COM outputs are connected to shunt inputs (SA and SB) with the clickless  mode enabled. All auxiliary outputs are low and output biasing is disabled.

## Serial Communications Interface

When the user checks a checkbox, the MAX4550 software determines the command and data code bytes corresponding to the selected function. If the MAX4550 is  installed,  the  software  issues  a  start  condition  and the  address byte, after which the MAX4550 issues an acknowledge pulse. The software then sends the command and data bytes, each followed by an acknowledge pulse from the MAX4550. The software completes the transfer by issuing a stop condition. The command and data bytes generated will be displayed on the

<!-- image -->

## MAX4550 Evaluation Kit

upper-right corner of the user interface, along with the address of the MAX4550.

If the MAX4570 is installed, the software drives the CS pin low, sends the command and data bytes, and drives the CS pin high. Note that an inverted version of DOUT serves as an input to the PC. This connection allows the software to verify that the MAX4570 is present before issuing a command.

## Direct Command Entry

The user may enter the command and data bytes directly  by  selecting  the  'Cmd Entry' button. A new window appears containing two edit fields corresponding to the command and data bytes. To execute a set of command and data bytes, enter each byte (in binary notation) into the edit fields and select 'Execute.' When finished, the main MAX4550 user-interface window resumes control.

## Detailed Description of Hardware

## Components

The MAX4550 is a dual 4x2 crosspoint switch array with 2-wire serial interface. R1-R16 are the termination resistors for the eight inputs. C1-C4 are for ACcoupling the inputs to the MAX4550. R32-R35 allow midsupply biasing of NO1A and NO2A. LEDs (Q0-Q3) are connected through V+ to the four auxiliary outputs of  the  MAX4550 through 1k Ω resistors.  The  74HCT05 (U2), an open-drain inverter, implements the 2-wire serial  interface.  The  HCT logic family ensures that the MAX4550 can output a logic high even when operating at  V+  =  2.7V.  RCA-type jacks facilitate audio/video evaluation of the MAX4550.

## 10k Ω Input Termination

Any of the eight MAX4550 inputs can be configured for 10k Ω termination. To terminate an input in 10k Ω , cut the jumper connecting its 75 Ω termination to GND. Refer to Table 1 and the EV kit schematic to identify the correct jumpers.

## AC-Coupled Inputs

Any of the four switch matrix A inputs can be configured for AC-coupling of input signals. To AC-couple an input, cut the jumper shunting its 2.2µF input capacitor. Refer to Table 1 and the EV kit schematic to identify the correct jumpers. If 10k Ω termination is also selected for an AC-coupled input, the 2.2µF capacitor and 10k Ω resistor  will  form  a  highpass  RC  network  with  a  cutoff frequency of 7Hz, low enough to pass frequencies in the audio band.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4550 Evaluation Kit

## Improving Off-Isolation

The SA and SB inputs can be used to improve off-isolation.  Suppose COM1A must remain off while the other outputs are being driven. To improve off-isolation of COM1A, connect SA to GND with JU9 and select the checkbox to close the switch between SA and COM1A. Note that if  COM1A has output biasing enabled, JU9 must be positioned to connect SA to its 0.1µF capacitor. Refer to Table 1 to identify the correct jumper positions.  For  more  information  regarding output biasing, refer  to  the Output  Biasing section or the MAX4550 data sheet.

## Single-Supply Operation

For single-supply operation, shunt JU15; this will short V-  to  GND.  Connect a power-supply voltage between +2.7V and +5.25V to the V+ and GND pads.

## Address Selection (MAX4550only)

To specify the two selectable bits of the address byte, place jumpers JU16 and JU17 in the positions corresponding to the desired address. Refer to Table 1 for more information regarding the configuration of JU16 and JU17.

## Output Biasing

The MAX4550 has an internal bias network to which any of the four outputs may be connected. To ensure that  an  output  connected to the bias network will be biased midway between V+ and GND, shunt JU18 and JU19. For alternate bias voltages, remove JU18 and JU19 and apply new bias voltages to the BIASH and BIASL pads.

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Input Biasing

Note that the MAX4550 does not include an internal midsupply biasing option for the inputs. The MAX4550 EV kit includes optional midsupply biasing for the NO1A and NO2A inputs. To bias NO1A at midsupply, first cut the traces connecting pins 2 and 3 of jumpers JU1 and JU3. For a 10k Ω termination to midsupply, connect pins 1 and 2 of jumper JU1; for a 75 Ω termination to midsupply, connect pins 1 and 2 of jumper JU3. Midsupply biasing of NO2A is controlled with jumpers JU20 and JU21 in a similar manner.

## Measuring Supply Current

If measuring the quiescent current of the MAX4550, be sure to account for the two resistor voltage dividers formed by R32-R35. Collectively, these resistors amount to a 220 Ω path from V+ to GND. In addition, note that each LED draws about 5mA in the on state.

## Layout Considerations

The MAX4550 EV kit layout is optimized for high-speed signals and low crosstalk, with careful attention given to signal-path layout. Capacitance between input traces has been minimized by routing these traces as far apart from each other as possible.

Figure 1.  MAX4550 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4550 Evaluation Kit

Figure 2.  MAX4550 EV Kit Component Placement Guide-Component Side

<!-- image -->

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4550 Evaluation Kit

Figure 3.  MAX4550 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4550 Evaluation Kit

Figure 4.  MAX4550 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600