<!-- lastmod 2022-08-03 -->
## General Description

The MAX1660 evaluation kit (EV kit) is an assembled surface-mount demonstration board. The EV kit embodies  the  typical  application  circuit  shown  in  Figure  8  of the MAX1660 data sheet. Additional circuitry allows an IBM-compatible personal computer to use its parallel port to emulate an Intel System Management Bus (SMBus™) interface.

| DESIGNATION       |   QTY | DESCRIPTION                                                                       |
|-------------------|-------|-----------------------------------------------------------------------------------|
| C1                |     1 | 0.33µF, 6V ceramic capacitor                                                      |
| C2                |     1 | 10nF, 6V ceramic capacitor                                                        |
| C3                |     1 | 0.1µF, 6V ceramic capacitor                                                       |
| C4                |     1 | 4.7nF, 6V ceramic capacitor                                                       |
| C5                |     1 | 10nF, 6V ceramic capacitor                                                        |
| C6*               |     0 | 0.33µF ceramic capacitor (option)                                                 |
| D1, D20, D21, D22 |     4 | 1N4148-type SOT23 signal diodes                                                   |
| D23-D26           |     4 | 1N5233B-type, 6V, 500mW, axial- leaded zener diodes                               |
| J1                |     1 | DB25 male right-angle connector                                                   |
| J2                |     1 | Smart battery connector AMP 787259-1 (10.8V key on left)                          |
| J3, J4            |     2 | Uninsulated, nickel-plated standard banana jacks E. F. Johnson 108-0740           |
| JU1               |     1 | Unstuffed                                                                         |
| LED1              |     1 | Red light-emitting diode                                                          |
| M1, M2            |     2 | Logic-level, P-channel, SO-8, single power MOSFET International Rectifier IRF7205 |

SMBus is a trademark of Intel Corp.

<!-- image -->

Features

- ' Measures 4A Currents to 1% Accuracy
- ' 4A Max Current, 1% Accuracy
- ' Proven PC Board Layout
- ' Convenient Test Points Provided On-Board
- ' Data-Logging Software
- ' Fully Assembled and Tested

## Ordering Information

| PART         | TEMP. RANGE   | IC PACKAGE   |
|--------------|---------------|--------------|
| MAX1660EVKIT | 0°C to +70°C  | 16 QSOP      |

## Component List

| DESIGNATION                      |   QTY | DESCRIPTION                                                                   |
|----------------------------------|-------|-------------------------------------------------------------------------------|
| Q20, Q21, Q22                    |     3 | 2N3904 NPN equivalent, SOT23                                                  |
| R1                               |     1 | 0.030 Ω , 1%, 1W sense resistor IRC LR2512-01-R030-F or Dale WSL-2512 0.030 Ω |
| R2, R30-R33                      |     5 | 100 Ω , 5%, 1/16W resistors                                                   |
| R3, R5                           |     2 | 910k Ω , 1%, 1/16W resistors                                                  |
| R4, R6                           |     2 | 75k Ω , 1%, 1/16W resistors                                                   |
| R7, R8                           |     2 | 470k Ω , 5%, 1/16W resistors                                                  |
| R9, R10, R20, R21, R24, R25, R26 |     7 | 10k Ω , 5%, 1/16W resistors                                                   |
| R11                              |     1 | 1M Ω , 5%, 1/16W resistor                                                     |
| R12*                             |     0 | 51 Ω , 5%, 1/16W resistor (option)                                            |
| R22, R23, R27, R28, R29, R35     |     6 | 100k Ω , 5%, 1/16W resistors                                                  |
| R34                              |     1 | 680 Ω , 5%, 1/16W resistor                                                    |
| SW1                              |     1 | Slide switch                                                                  |
| U1                               |     1 | Maxim MAX1660EEE                                                              |
| U2                               |     1 | 74HC14 hex Schmitt trigger, SO-14                                             |

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 1-800-835-8769.

## MAX1660 Evaluation Kit

## Component Suppliers

| SUPPLIER                | PHONE          | FAX            |
|-------------------------|----------------|----------------|
| Dale Sense Resistors    | (402) 564-3131 | (402) 563-6418 |
| International Rectifier | (310) 322-3331 | (310) 322-3332 |
| IRC                     | (512) 992-7900 | (512) 992-3377 |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

## Equipment Required

Before you begin, you will need the following equipment:

- A battery pack
- An appropriate charger
- An appropriate load
- An IBM PC-compatible computer running Windows 3.1™ or Windows 95™
- A spare parallel printer port (this is a 25-pin socket on the back of the computer)
- A standard 25-pin, straight-through, male-to-female cable to connect the computer's parallel port to the Maxim EV kit (optional). Or, the EV kit can be plugged directly into the parallel printer port.

## Procedure

- 1) Connect the battery pack to the board at connector J2. Total battery-pack voltage should be within the 4V to 28V range accepted by the MAX1660. The battery cells may be of any rechargeable chemistry, such as NiCd, NiMH, or Li-Ion. The battery pack will later be charged and discharged through the PACK+ and PACK- terminals; however, leave PACK+ unconnected until the software is started.

Powering the EV kit with a power supply that is not isolated from the computer creates a ground loop, degrading measurement accuracy by 50% or more.

- 2) Connect the board to the computer's parallel printer port.  The  parallel  port  is  typically  labeled  LPT  or PRINTER. To avoid damaging the EV kit or your computer, make sure you are using the parallel printer port and not a 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.

Windows 3.1 and Windows 95 are trademarks of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 3) The MAX1660.EXE software program can be run from the floppy or from a hard drive. Simply use the Windows program manager to run the program. If desired, you may use the INSTALL.EXE program to copy the files and create icons for them in the Windows 3.1 Program Manager (or the Windows 95 Start Menu).
- 4) Start  the  MAX1660 program by opening its icon in the Program Manager (or Start Menu).
- 5) The program prompts you to select the correct parallel port. An auto-detect routine attempts to identify the correct port and highlights it as the default choice.
- 6) Apply the load or charger and observe the charge or discharge current readings on the main window display.

## Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_of Software

The battery pack can be charged and discharged through the PACK+ and PACK- terminals. When a load is connected across the PACK+ and PACK- terminals, the discharge current is measured and displayed. If the load current exceeds the overcurrent trip threshold, MOSFET M1 turns off, disconnecting the load.

## Main Display

The charge and discharge counters are automatically displayed in either decimal or hexadecimal, along with the corresponding charge count and the calculated current values. The Clear Counters button commands the MAX1660 to clear its charge and discharge counters, and it also restarts the integration timer.

The display is automatically updated at the rate selected by the Integration Time control. This automatic update  can  be  turned  off  by  unchecking  the Automatically Update Displays check-box.

The INT signal is  checked several times per second, and the Interrupt box indicates if it is low. To clear the interrupt, click on the Clear Interrupt button.

When the Fuel Gauge Off control is activated, the software automatically activates Disconnect Battery and Disconnect Load to  protect  the  battery.  Unchecking either Disconnect Battery or Disconnect Load automatically unchecks Fuel Gauge Off.

The Calibrate check-box controls the OFFSETMEAS bit in  the  configuration  word.  When active, the Coulomb counter is disconnected from the sense resistor, revealing the offset voltage (which appears as an offset current in this display.)

<!-- image -->

## Register Display

The MAX1660 register values can be displayed in 32-bit  binary  format  by  selecting Registers from the MAX1660 menu. This command opens a window that updates five times per second, independent of the main display's integration time control. The Compare Register group in the main window selects the charge or discharge register.

## Sense-Resistor Value

The effect of different current-sense resistors can be shown by selecting the Sense Resistor command from the MAX1660 menu. This command opens a window that displays the assumed sense resistor value, as well as the conversion gain calculations resulting from that value. For correct current display, the sense-resistor value should match the actual value of RCS (which is R1 on the EV kit board).

## SMBus Menu

The SMBus menu allows individual SMBus operations to be performed. The main window continues independently performing its own SMBus transactions unless the Automatic Update Displays box is unchecked.

The SMBus dialog boxes accept numeric data in binary,  decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly 8 or 16 digits.

Accuracy Limitations under Windows Charge or discharge current can be measured by sampling the counter value at intervals and calculating:

Current = (increase in counter value) / (time interval in seconds x conversion gain)

When calculating charge or discharge current, there is an inherent measurement error of one count or less in each integration period, due to fractional counts during the integration period. There is also a processordependent measurement uncertainty in the integration time.  A  crystal-controlled  microcontroller  with  no  other tasks can easily have less than 1µs of uncertainty, whereas the EV kit software under Windows has an uncertainty of 10,000µs. Longer integration time reduces this measurement error. The current measurement error due to timing jitter is displayed in the main window under the heading 'uncertainty'.

To accurately measure load current, the program must accurately measure the time interval between counter reads. The counter value is latched on the falling edge of  the  ACK clock pulse during the SMBusReadWord (address 0x83, command 0x82). Refer to the MAX1660 data sheet.

<!-- image -->

## MAX1660 Evaluation Kit

## Accuracy Limitations under DOS

To allow evaluation of the MAX1660 without the currentmeasurement errors caused by Windows, use the DOS1660 program. This menu-driven program provides rudimentary access to the MAX1660, with stable timing. An oscilloscope can be used to observe a read diagnostic strobe that appears on pins 5 and 13 of the parallel  port.  To  start  the  DOS1660  program,  click  on the DOS1660 menu item, or exit Windows and run DOS1660.EXE.

## Detailed Description \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_of Hardware

U1, the MAX1660, is a digitally controlled fuel-gauge interface that accurately monitors charge and discharge currents. C6 and C1 bypass the power supply. R1 is the noninductive current-sense resistor. It is Kelvin connected to reduce error at high currents. R3-R6 set the overcurrent trip thresholds. MOSFETs M1 and M2 are used by the overcurrent protection circuitry  to  interrupt  the  discharge  and  charge paths, respectively. D1 and R11 would typically be used by a microcontroller to implement a hard-shutdown mode. Refer to the MAX1660 data sheet for more discussion of the standard application circuit.

The SMBus interface circuitry consists of J1, D20-D26, LED1, Q20, Q21, Q22, R20-R35, and U2. This part of the circuit provides the 2-wire clock and data interface, as well as a GPIO output (used for shutdown control) and an interrupt input. When the board is not plugged into  an  IBM  PC  parallel  port,  the  clock  and  data  lines can be driven externally, and the GPIO output is controlled by switch SW1. The LED lights up whenever the interrupt signal is at a logic-low level.

If desired, the EV kit can be driven with a user-supplied SMBus 2-wire interface. Connect it to the DGND, SCL, and SDA pads on the board.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Interface Details

A complete smart-battery solution is far beyond the scope of this manual; however, there are a few details that  the  software  designer must know in order to successfully use this device.

## Reading 32-Bit Counters

To accurately measure supply current, the program must accurately measure the time interval between counter reads. During the read-word protocol, begin the integration time at the falling edge of the ninth clock pulse of the command byte. Not counting the start condition,  this  is  the  18th  falling  edge  of  the  clock  during SMBusReadWord (address 0x8e, command 0x82).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1660 Evaluation Kit

When reading the 32-bit charge or discharge counter value, read the low word first (command 0x82) followed by the high word (command 0x83). This sequence latches the counter value and prevents the data from being corrupted if there is a 16-bit carry during the read operation. See Listing 1.

## Soft Shutdown

When turning the fuel gauge off (SOFTSHDN = 1), disconnect the battery (OCHI = 1, ODLO = 0) and the load (ODHI = 1, ODLO = 0). When the fuel gauge is inactive, the overcurrent protection is disabled. Leaving the battery or the load connected with the fuel gauge off can destroy the FETs if a short-circuit condition occurs. See Listing 2.

## Optional Offset Calibration

The MAX1660's input offset is quite low; however, it can be measured by setting OFFSETMEAS = 1. When offset-measurement mode is active, the charge and discharge currents cannot be monitored, so disconnect the battery (OCHI = 1, OCLO = 0) and the load (ODHI = 1, ODLO = 0). See Listing 3.

```
Read Charge or Discharge Counter IF charge_counter requested THEN configuration= configuration OR(0000 0000 0100 0000) ENDIF IF discharge_counter requested THEN configuration=configuration AND (1ll1 11l1 10ll 1111) ENDIF SMBusWriteWord（0x8E,0x04,configuration) counter_low=SMBusReadWord(0x8E,0x82) counter high=SMBusReadWord (0x8E,0x83)
```

Listing 1.  Reading 32-Bit Counters

```
ShutDown configuration=configuration OR(0000 0010 0000 1010) set bits SMBusWriteWord(0x8E,0x04,configuration) WakeUp configuration = configuration AND (1111 1101 1111 0000) ;clear bits SMBusWriteWord(0x8E,0x04,configuration)
```

Listing 2.  Soft Shutdown

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1660 Evaluation Kit

Listing 3.  Measuring Offset

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX1660 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 1.  MAX1660 EV Kit Schematic (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1660 Evaluation Kit

Figure 2.  MAX1660 EV Kit Component Placement Guide

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1660 Evaluation Kit

<!-- image -->

Figure 3.  MAX1660 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1660 Evaluation Kit

Figure 4.  MAX1660 EV Kit PC Board Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1660 Evaluation Kit

## NOTES

11

## MAX1660 Evaluation Kit

NOTES

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

12

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600