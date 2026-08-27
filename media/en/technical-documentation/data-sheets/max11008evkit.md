<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX11008 Evaluation Kit/ Evaluation System

## General Description

The MAX11008 evaluation kit (EV kit) is an assembled and tested circuit board that demonstrates the MAX11008 dual RF LDMOS CODEC smart regulator for LDMOS FET bias control. Windows ® 98/2000/XP software provides a handy user interface to exercise the features of the MAX11008.

Windows is a registered trademark of Microsoft Corp.

## Component List

## MAX11008EVC16 System Component List

| PART             |   QTY | DESCRIPTION                       |
|------------------|-------|-----------------------------------|
| MAX11008EVKIT+   |     1 | MAX11008 EV kit                   |
| HSI2CMOD         |     1 | High-speed I 2 C interface module |
| 68HC16MODULE-DIP |     1 | 68HC16 µC module                  |

| DESIGNATION                                    |   QTY | DESCRIPTION                                                      |
|------------------------------------------------|-------|------------------------------------------------------------------|
| C4, C8, C10, C12, C16, C18, C26, C27           |     8 | 1µF ±20%, 25V X5R ceramic capacitors (0603) TDK C1608X5R1E105M   |
| C5, C9, C11, C13, C14, C15, C24, C25, C28, C29 |    10 | 0.1µF ±20%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104M |
| C6, C7                                         |     0 | Not installed, ceramic capacitors (0603)                         |
| C17                                            |     1 | 10µF ±20%, 25V X7R ceramic capacitor (1210) TDK C3225X7R1E106M   |
| C19                                            |     1 | 4.7µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J475M |
| C20-C23                                        |     4 | 100pF ±10%, 50V C0G ceramic capacitors (0603) TDK C1608C0G1H101K |

- ♦ Proven PCB Layout
- ♦ Complete Evaluation System
- ♦ Convenient On-Board Test Points
- ♦ Data-Logging Software
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART            | TYPE   | INTERFACE REQUIREMENTS             |
|-----------------|--------|------------------------------------|
| MAX11008EVKIT + | EV Kit | User-provided I 2 C interface      |
| MAX11008EVC16   | EV Sys | Windows PC with RS-232 serial port |

## Component List (continued)

## MAX11008EVKIT Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| D1, D2        |     2 | npn transistors (3 SOT23) Fairchild MMBT3904 Top mark: 1A                                                                                       |
| FB1           |     1 | 70 Ω , 4A ferrite bead (0603) Murata BLM1856700N1                                                                                               |
| J1            |     1 | 20-pin, 2 x 10 right-angle female receptacle                                                                                                    |
| JU0-JU4       |     5 | 3-pin jumpers                                                                                                                                   |
| JU5-JU20      |    16 | 2-pin jumpers                                                                                                                                   |
| M1, M2        |     2 | FETs, n-channel (TO-220AB) V DS = 55V (High V DS --> Low gm) R DSON = 0.024 Ω at V DS = 10V I D = 29A at +100°C International Rectifier IRFZ44N |
| R1, R2        |     2 | 1.00k Ω ±1% resistors (1206)                                                                                                                    |
| R3, R9        |     2 | 4.99k Ω ±1% resistors (1206)                                                                                                                    |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

## Features

## MAX11008 Evaluation Kit/ Evaluation System

## Component List (continued)

## MAX11008EVKIT Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| U2            |     1 | 2.5V voltage reference (8 SO) Maxim MAX6126AASA25+                       |
| U3            |     1 | 28V input linear regulator (5 SOT23) Maxim MAX1615EUK+T (Top Mark: ABZD) |
| -             |    21 | Shunts                                                                   |
| -             |     1 | PCB: MAX11008 Evaluation Kit+                                            |

*EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| R4            |     1 | 0 Ω resistor (0603)                                              |
| R5, R6        |     2 | 100 Ω ±5% resistors (1206)                                       |
| R7, R8        |     2 | 1.00 Ω ±1% sense resistors (2010) Vishay (Dale) CRCW20101R00FNEF |
| R10, R11      |     2 | 0 Ω resistors (1206)                                             |
| R12, R13      |     2 | 10k Ω ±5% resistors (1206)                                       |
| R14, R15      |     2 | 47 Ω ±5% resistors (1206)                                        |
| U1            |     1 | Dual RF LDMOS CODEC (48 TQFN-EP*) Maxim 11008BETM+               |

## Component Suppliers

| SUPPLIER                | PHONE        | WEBSITE               |
|-------------------------|--------------|-----------------------|
| Fairchild Semiconductor | 888-522-5372 | www.fairchildsemi.com |
| International Rectifier | 310-322-3331 | www.irf.com           |
| TDK Corp.               | 847-803-6100 | www.component.tdk.com |
| Vishay                  | 402-563-6866 | www.vishay.com        |

Note: Indicate you are using the MAX11008 when contacting these component suppliers.

## Quick Start

## Required Equipment

- Maxim MAX11008EVC16 (contains MAX11008EVKIT+ board, HSI2CMOD, and 68HC16MODULE-DIP)
- DC power supply, 8V at 500mA
- DC power supply, 10V at 1000mA
- Windows 98/2000/XP computer with a spare serial (COM) port
- 9-pin I/O extension cable

Note: In  the  following  sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The MAX11008 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power until all connections are completed.

- 1) Ensure that the MAX11008EVKIT jumpers are set in accordance with Table 1.
- 2) Carefully connect the boards by aligning the 40-pin header of the HSI2CMOD with the 40-pin connector of the 68HC16MODULE-DIP module. Gently press them together. The two boards should be flush against one another. Next, connect the MAX11008 EVKIT 20-pin connector to the HSI2CMOD board.
- 3) Connect  the  8V  DC  power  source  to  the 68HC16MODULE at the terminal block located next to the on/off switch, along the top edge of the module. Observe the polarity marked on the board.
- 4) Connect a cable from the computer's serial port to the 68HC16MODULE. If using a 9-pin serial port, use a straight-through, 9-pin female-to-male cable. If  the  only  available  serial  port  uses  a  25-pin  connector, a standard 25-pin to 9-pin adapter is required. The EV kit software checks the modem status lines (CTS, DSR, DCD) to confirm that the correct port has been selected.
- 5) Install the evaluation software on your computer by launching MAX11008.msi. (The latest software can be found at www.maxim-ic.com/evkitsoftware .) The program files are copied and icons are created for them in the Windows Start menu.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11008 Evaluation Kit/ Evaluation System

- 6) Turn on the 8V DC power supply.
- 7) Start  the  MAX11008EVKIT program by opening its icon in the Start menu.
- 8) Click the Connect button to establish communications with the 68HC16MODULE and HSI2CMOD boards. The program prompts you to connect the µC module and turn its power on. Slide SW1 to the ON position. Select the correct serial port, and click OK. The program automatically downloads its software to the module. (During connection, you will be asked to move the HSI2CMOD rev A board's jumper JU5 shunt.)

A board's jumper JU5 shunt. After successful connection,  you  will  be  prompted  to  read  the  EEPROM and perform a full reset. Answering NO to this prompt allows complete control of all read and write operations.  Answering YES to the prompt initializes the GUI by bringing up the EEPROM tab, clicking Refresh , then bringing up the ADC / Control tab and clicking Full  Reset ,  and  finally  in Working Registers clicking Refresh .

- 9) After  successful connection, you will be prompted to  read the EEPROM and perform a full reset. Answer YES to ensure that the software graphical user interface (GUI) and the working registers match the initial values stored in the MAX11008's nonvolatile EEPROM.
- 10) Bring up the ADC / Control tab.
- 11) Connect  the  10V  DC  power  supply  to  the MAX11008EVKIT's DRAIN1 (+) and SOURCE1 (-), leaving DRAIN2 and SOURCE2 unconnected. Note: The power-supply grounds are connected through resistor R10.
- 12) Turn on the 10V DC power supply. FET M1 may begin drawing current. Adjust the channel 1 VGS OFFSET control until the drain current is 125mA. Keep a note of this board calibration value in case factory defaults must be restored.
- 13) Check Force GATE1 off , and FET M1 stops drawing current.
- 14) Connect the 10V DC power supply to DRAIN2 (+) and SOURCE2 (-). FET M2 may begin drawing current. Adjust the channel 2 VGS OFFSET control until the drain current is 125mA. Keep a note of this board calibration value in case factory defaults must be restored.
- 15) Uncheck Force GATE1 off .  Both M1 and M2 should draw 125mA each, compensating for temperature rise.

## Detailed Description of Software

The MAX11008 EV kit software GUI is organized into several tabs.

Hardware Connection Tab (Figure 1) Individual working registers may be read or written from this  tab.  When the software first starts, click the Connect button to establish communications with the 68HC16MODULE and HSI2CMOD boards. During connection, you will be asked to move the HSI2CMOD rev Warning: Writing the UMSG or STRM registers while the ADC is continuously converting overwrites the contents  of  the  EEPROM with ADC conversion data. The GUI hides these detailed operations. Refer to source code files drv11008.cpp and kit11008.asm for implementation details.

<!-- image -->

## EEPROM Tab (Figure 2)

Clicking the Refresh button reads the entire MAX11008 nonvolatile memory into the GUI.

To write a new value to an EEPROM cell, edit its hexadecimal value in the grid, either by clicking with the mouse or by using the arrow keys and function key F2. A prompt dialog box confirms writing the value and the register.

The EV kit software uses BUSY hardware handshaking when performing UMSG (EEPROM block read). The EV kit does not perform any handshaking when performing STRM (EEPROM block write), since the communications data link to the PC is too slow to overflow the MAX11008's FIFO.

## Restoring Factory Configuration

The MAX11008 EV kit can be restored to its factorydefault EEPROM image by clicking Load from File and choosing file MAX11008EVKIT-EEPROM.txt.

## Working Registers Tab (Figure 3)

The GUI remembers the working register values read from or written to the hardware. Some of the working registers are write-only, so the GUI cannot always determine the value.

Clicking the Refresh button reads all readable MAX11008 working registers into the GUI.

To write a new value to a register, edit either its hexadecimal value or the individual bits, either by clicking with the mouse or by using the arrow keys and function key F2. A prompt dialog box confirms writing the value and the register.

Working register values are read from the EEPROM at device power-up, and after performing a full reset. The Full Reset button is located on the ADC / Control tab.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11008 Evaluation Kit/ Evaluation System

## Tables Tab (Figure 4)

There are four look-up tables (LUTs) that can be loaded: TLUT1 and TLUT2 for temperature compensation, and ALUT1 and ALUT2 for optional additional compensation. The EV kit software includes an MS-Excel spreadsheet file  MAX11008\_LUT\_Example.xls, which models how physical temperature and voltage parameters can be mapped into the MAX11008's EEPROM memory. Refer to the Temperature/APC Configuration Registers section in the MAX11008 IC data sheet for detailed operation of the look-up tables.

A set of radio buttons selects one of the four LUT configuration registers. After clicking the appropriate radio button for TLUT1, ALUT1, TLUT2, or ALUT2, the software displays configuration values (pointer offset, linear interpolation, pointer size, table size, and start of table). After modifying any of these configuration values, click the Apply Changes button to write the new configuration value for the selected table.

To initialize a table, click the radio button selecting the desired table. Enter the value 0 into the edit field next to the Fill with constant button, then click to fill the table with  zeros.  Enter  the  known  correction  values  into  the table from the EEPROM tab, or click Load from file to load the table points from a text file. Finally, click Interpolate entries that contain zero to perform linear interpolation on all zero value table entries. (This operation is not the same as the MAX11008's linear interpolation between table entries. The GUI software interpolation fills in missing table entries.)

The memory map display shows which address range is assigned to each enabled look-up table. Two or more look-up tables may be assigned to the same address range; however, they will contain identical data. Overlapping table ranges are not recommended.

## Alarms Tab (Figure 5)

The Alarms tab configures the ALARM output pin, temperature and current alarm limits, hysteresis, and alarm behavior.

## ADC / Control Tab (Figure 6)

The ADC / Control tab configures the system parameters, reads ADC data, and controls the gate-driver outputs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Keyboard Navigation

When you type on the keyboard, the system must know which control should receive the keys. Press the Tab key to move the keyboard's focus from one control to the next. The focused control is indicated by a dotted outline.  Shift+Tab moves the focus to the previously focused control. Buttons respond to the keyboard's SPACE bar. Some controls respond to the keyboard's UP and DOWN arrow keys. Activate the program's menu bar by pressing the F10 key, then press the letter of the menu item you want. Most menu items have one letter underlined, indicating their shortcut key.

## Detailed Description of Hardware

For the purpose of 'table-top' demonstration, two MOSFETS (M1 and M2) are provided on-board, taking the place of the LDMOS FETs that would be used in a real application. Diode-connected BJT transistors D1 and D2 sense the temperature of each FET while remaining electrically isolated by different PCB copper layers. Capacitors C20 and C21 filter the external temperature measurements. Gate drive is lowpass filtered by R14/C28 and R15/C29. Drain current is measured by Kelvin-connected precision resistors R7 and R8, filtered by R5/C22 and R6/C23. Drain voltage is sensed by 6:1 resistor-dividers R9/R1 and R3/R3.

Power is provided from the HSI2CMOD board connected to J1. The digital supply connects directly to 5V through jumper JU8. On-board MAX1615 regulator U3 provides the 5V analog supply through jumper JU12. On-board MAX6126 voltage reference U2 drives both REFADC and REFDAC through jumpers JU5 and JU6. The MAX11008 power is bypassed by C4, C5, and C24-C27.

The complete evaluation system is a three-board set, with the 68HC16 microcontroller driving the HSI2CMOD board's high-speed I 2 C interface core. Refer to the HSI2CMOD online documentation for details.

## Table 1. Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                         |
|----------|------------------|-----------------------------------------------------|
| JU8      | Closed*          | DVDD is powered from connector J1                   |
| JU8      | Open             | DVDD must be provided by user                       |
| JU12     | Closed*          | AVDD is powered by on-board regulator U3            |
| JU12     | Open             | AVDD must be provided by user                       |
| JU5      | Closed*          | REFDAC = 2.500V from U2                             |
| JU5      | Open             | REFDAC = internal 2.5V from U1                      |
| JU6      | Closed*          | REFADC = 2.500V from U2                             |
| JU6      | Open             | REFADC = internal 2.5V from U1                      |
| JU7      | Closed*          | Demo circuit RCS1+ connection                       |
| JU7      | Open             | Use external user-provided current-sense connection |
| JU9      | Closed*          | Demo circuit RCS1- connection                       |
| JU9      | Open             | Use external user-provided current-sense connection |
| JU10     | Closed*          | Demo circuit ADCIN1 sense M1 V DRAIN /4             |
| JU10     | Open             | Use external user-provided ADCIN1 connection        |
| JU11     | Closed*          | Demo circuit M1 gate connection                     |
| JU11     | Open             | Connect to external user-provided FET gate          |
| JU13     | Closed*          | Demo circuit D1 temperature sensor connection       |
| JU13     | Open             | Connect external user current-sense diode           |
| JU15     | Closed*          | Demo circuit RCS2+ connection                       |
| JU15     | Open             | Use external user-provided current-sense connection |
| JU14     | Closed*          | Demo circuit RCS2- connection                       |
|          | Open             | Use external user-provided current-sense connection |
| JU16     | Closed*          | Demo circuit ADCIN2 sense M2 V DRAIN /4             |
| JU16     | Open             | Use external user-provided ADCIN2 connection        |
| JU17     | Closed*          | Demo circuit M2 gate connection                     |
|          | Open             | Connect to external user-provided FET gate          |
| JU18     | Closed*          | Demo circuit D2 temperature sensor connection       |
|          | Open             | Connect external user current-sense diode           |
| JU19     | Closed*          | Force OPSAFE1 pin to DGND, normal operation         |
|          | Open             | OPSAFE1 must be driven by a user-provided source    |
| JU20     | Closed*          | Force OPSAFE2 pin to DGND, normal operation         |
| JU20     | Open             | OPSAFE2 must be driven by a user-provided source    |

<!-- image -->

## MAX11008 Evaluation Kit/ Evaluation System

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11008 Evaluation Kit/ Evaluation System

## Table 1. Jumper Settings (continued)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                               |
|----------|------------------|-------------------------------------------|
| JU0      | 1-2*             | A0 = DVDD (I 2 C address selection)       |
| JU0      | 2-3              | A0 = DGND (I 2 C address selection)       |
| JU0      | Open             | A0 must be driven by user                 |
| JU1      | 1-2*             | A1 = DVDD (I 2 C address selection)       |
| JU1      | 2-3              | A1 = DGND (I 2 C address selection)       |
| JU1      | Open             | A1 must be driven by user                 |
| JU2      | 1-2*             | A2 = DVDD (I 2 C address selection)       |
| JU2      | 2-3              | A2 = DGND (I 2 C address selection)       |
| JU2      | Open             | A2 must be driven by user                 |
| JU3      | 1-2*             | CNVST = DVDD (inactive)                   |
| JU3      | 2-3              | CNVST = DGND (active)                     |
| JU3      | Open             | CNVST can be driven by user               |
| JU4      | 1-2              | DGND3 = DVDD (selecting SPI™ interface)   |
| JU4      | 2-3*             | DGND3 = DGND (selecting (I 2 C interface) |

*Default position. SPI is a trademark of Motorola, Inc.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11008 Evaluation Kit/ Evaluation System

<!-- image -->

Figure 1. Hardware Connection Tab After Successful Connection

<!-- image -->

Figure 2. EEPROM Tab Showing a Typical Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11008 Evaluation Kit/ Evaluation System

Figure 3. Working Registers Tab Showing a Bit Field Search

<!-- image -->

Figure 4. Tables Tab Showing a Typical Configuration

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11008 Evaluation Kit/ Evaluation System

Figure 5. Alarms Tab Showing a Typical Configuration

<!-- image -->

Figure 6. ADC / Control Tab Showing a Typical Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11008 Evaluation Kit/ Evaluation System

Figure 7. MAX11008 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11008 Evaluation Kit/ Evaluation System

<!-- image -->

Figure 8. MAX11008 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11008 Evaluation Kit/ Evaluation System

Figure 9. MAX11008 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11008 Evaluation Kit/ Evaluation System

<!-- image -->

Figure 10. MAX11008 EV Kit PCB Layout-Ground Layer 2

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX11008 Evaluation Kit/

## Evaluation System

Figure 11. MAX11008 EV Kit PCB Layout-Power Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11008 Evaluation Kit/ Evaluation System

Figure 12. MAX11008 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

15