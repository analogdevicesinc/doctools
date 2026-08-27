<!-- lastmod 2022-08-05 -->
<!-- image -->

## MAX1739 Evaluation System/ Evaluation Kit

## General Description

The MAX1739 evaluation system (EV system) consists of a MAX1739 evaluation kit (EV kit) and a companion Maxim SMBus™ interface board.

The MAX1739 EV kit is an assembled and tested PC board that demonstrates the MAX1739 wide brightness range cold-cathode fluorescent lamp (CCFL) backlight controller.  The  EV  kit  can  control  the  brightness  of  a user-supplied lamp through either the SMBus interface or  by  an  on-board potentiometer. Figure 1 shows the MAX1739 EV kit main display.

The Maxim SMBus interface board (MAXSMBUS) allows an IBM-compatible PC to use its parallel port to emulate an Intel system management bus (SMBus) 2-wire interface. Windows 95/98 ® -compatible software provides a user-friendly interface to exercise the features of the MAX1739. The program is menu driven and offers a graphic interface with control buttons and status display.

Order the MAX1739EVSYS for a complete PC-based evaluation of the MAX1739. Order the MAX1739EVKIT if you already have an SMBus interface.

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          |
|-----------------------|--------------|--------------|
| Fairchild             | 408-822-2000 | 408-822-2102 |
| General Semiconductor | 631-847-3000 | 631-847-3236 |
| Motorola              | 303-675-2140 | 303-675-2150 |
| Murata                | 814-237-1431 | 814-238-0490 |
| Nihon                 | 805-867-2555 | 805-867-2698 |
| Panasonic             | 201-392-7522 | 201-392-4441 |
| Sumida                | 847-956-0666 | 847-956-0702 |
| Taiyo Yuden           | 408-573-4150 | 408-573-4159 |
| Toshiba               | 949-455-2000 | 949-859-3963 |
| Diodes Inc.           | 805-446-4800 | 805-446-4850 |
| WIMA                  | 914-347-2474 | 914-347-7230 |

Note: Please indicate you are using the MAX1739 when contacting these component suppliers.

## Features

- ♦ Wide Brightness Adjustment Range
- ♦ Open Lamp Protection with 2s Timeout
- ♦ 'Buck' Switch and Other Single-Point Fault Protection
- ♦ Brightness Adjustable Through SMBus Interface or On-Board Potentiometer
- ♦ No Flicker at Low Brightness
- ♦ High Power to Light Efficiency
- ♦ I 2 C™/SMBus Compatible
- ♦ Easy-to-Use Menu-Driven Software
- ♦ Assembled and Tested
- ♦ Includes: Windows 95/98-Compatible Software (3.5in Floppy Disk)

Demo PC Board

## Ordering Information

| PART         | SMBUS INTERFACE TYPE   | IC PACKAGE   |
|--------------|------------------------|--------------|
| MAX1739EVKIT | 20 QSOP                | Not included |
| MAXSMBus     | 20 QSOP                | MAX1739EVSYS |

Note: The MAX1739 EV kit software is provided with the MAX1739EVKIT. However, to use the software, the MAXSMBUS board is required to interface the EV kit to the computer.

## MAX1739EVSYSComponent List

| PART         |   QTY | DESCRIPTION           |
|--------------|-------|-----------------------|
| MAX1739EVKIT |     1 | MAX1739 EV kit        |
| MAXSMBUS     |     1 | SMBus interface board |

SMBus is a trademark of Intel Corp. Windows is a registered trademark of Microsoft Corp. I 2 C is a trademark of Philips Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1739 Evaluation System/ Evaluation Kit

## MAX1739EVKIT Component List

Figure 1. Main Display for the MAX1739 EV Kit

| DESIGNATION     |   QTY | DESCRIPTION                                                            |
|-----------------|-------|------------------------------------------------------------------------|
| N1              |     1 | N-channel MOSFET (30V, 0.10) Fairchild FDN361AN                        |
| N2              |     1 | Dual N-channel MOSFET (30V, 0.095) Fairchild FDC6561AN Toshiba TPC6201 |
| R1, R2          |     2 | 49.9k Ω ± 1% resistors                                                 |
| R3, R7, R9, R10 |     4 | 10k Ω ± 5% resistors                                                   |
| R4              |     1 | 150k Ω ± 1% resistor                                                   |
| R5              |     1 | 12.1k Ω ± 1% resistor                                                  |
| R6              |     0 | Not installed                                                          |
| R8              |     1 | 10k Ω multiturn potentiometer                                          |
| R11             |     1 | 2k Ω ± 5% resistor                                                     |
| R13             |     1 | 85 Ω ± 1% resistor                                                     |
| T1              |     1 | 8.7µH, transformer (180:1) Sumida 5371-T001 (CIUH8D42 Style)           |
| U1              |     1 | MAX1739EUP                                                             |
| None            |     1 | MAX1739 data sheet                                                     |
| None            |     1 | MAX1739 EV kit data sheet                                              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                                                        |
|---------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| C1, C2, C5    |     3 | 0.1µF, 16V X7R ceramic capacitors Taiyo Yuden EMK107BJ104KA Murata GRM39X7R104K016                                                                 |
| C3            |     1 | 3300pF, 50V X7R ceramic capacitor                                                                                                                  |
| C4            |     1 | 0.47µF, 16V X7R ceramic capacitor Taiyo Yuden EMK212BJ474KG Murata GRM40X7R474K016                                                                 |
| C6            |     1 | 22pF, 3.1kV ceramic high-voltage capacitor Murata GHM1038-SL-220J-3K                                                                               |
| C7            |     1 | 0.1µF, 50V, low-dissipation cap Panasonic ECHU1H104JC9 Panasonic ECHU1H104JB9 Cornell Dubilier FCP1913H104J-E2 Panasonic ECWU1H104JC9 WIMA SMD1812 |
| C8            |     1 | 100pF ceramic capacitor                                                                                                                            |
| C9            |     1 | 4.7µF, 25V X5R ceramic capacitor Taiyo Yuden TMK325BJ475MN                                                                                         |
| D1            |     1 | 30V, 1A Schottky diode Toshiba CRS02 Nihon EP10QY03                                                                                                |
| D2            |     1 | 100mA Schottky diode Fairchild BAT54 General Semiconductor BAT54 Diodes Inc. BAT54                                                                 |
| D5            |     1 | 100mA dual-series diode Fairchild Semiconductor MMBD4148SE General Semiconductor MMBD7000 Diodes Inc. MMBD7000                                     |
| JU1, JU3      |     2 | 4-pin headers                                                                                                                                      |
| JU2, JU4, JU6 |     3 | 3-pin headers                                                                                                                                      |
| JU5           |     1 | 2-pin header                                                                                                                                       |
| L1            |     1 | 47µH, 1.1A inductor Sumida CD104-470                                                                                                               |
| J1            |     1 | 2 ✕ 10 right angle female receptacle                                                                                                               |

## MAX1739 Evaluation System/ Evaluation Kit

<!-- image -->

Figure 2. MAX1739 EV Kit Schematic Diagram

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

## MAX1739 Evaluation System/ Evaluation Kit

## Quick Start

## Required Equipment

Before you begin, you will need the following equipment:

- An IBM PC-compatible computer running Windows 95/98
- A parallel printer port (25-pin socket on the back of the computer)
- A standard 25-pin, straight-through, male-to-female cable to connect the computer's parallel port to the Maxim SMBus interface board
- A DC power supply capable of supplying any voltage between +7V to +20V at 100mA to power the SMBus board
- A DC power supply capable of supplying +12V at 500mA to power the MAX1739 board
- A CCFL with the following specifications:

Strike Voltage ≤ 1.6kV Lamp Current ≤ 6mA Input Power ≤ 4W

## Procedure

## WARNING! High Voltages are present on this evaluation kit. Use caution when making connections and applying power.

- 1)   Carefully connect the boards by aligning the 20-pin connector of the MAX1739 EV kit with the 20-pin header of the MAXSMBUS interface board. Gently press them together. The two boards should be flush against each other.

## Do not turn on the power until all connections are completed.

- 2) Connect the lamp to the high-voltage pads.
- 3) Set the jumpers to the following positions:
3. JU1 1-4
4. JU2 2-3
5. JU3 1-3
6. JU4 1-2
7. JU5 Open
8. JU6 2-3
- 4) Connect a cable from the computer's parallel port to  the  SMBus interface board. Use a straightthrough, 25-pin, female-to-male cable. To avoid damaging the EV kit or your computer, do not use a 25-pin SCSI port or any other connector that is physically similar to the 25-pin parallel printer port.
- 5) The MAX1739.EXE software program can be run from the floppy or hard drive. Use the Windows program manager to run the program. If desired, you may use the INSTALL.EXE program to copy the files and create icons for them in the Windows 95/98 Start  menu. An uninstall program is included with the software. Click on the UNINSTALL icon to remove the EV kit software from the hard drive.
- 6) Connect the +7VDC to +20VDC power supply to the pads labeled POS9 and GND1 of the SMBus interface board.
- 7) Connect the +12V supply to the pads labeled VIN and GND.
- 8) Turn on both power supplies.
- 9) Start the MAX1739 program by opening its icon in the Start menu.
- 10) Observe as the program automatically detects the address of the MAX1739 and starts the main program.

## Detailed Description of Software

## User-Interface Panel

The user interface is easy to operate. Use the mouse or press the Tab key to navigate with the arrow keys. Each of the buttons corresponds to bits in the command and configuration bytes. Clicking on them generates the correct SMBus write operation to update the internal registers.

The brightness of the lamp can be adjusted by either moving the trackbar or by entering a value between 0 and 31 into the edit field located below the trackbar. After typing in the new value to update the internal register, press Enter.

The SHMD register configures the operation of the device as described in Table 1.

When the Automatic Read feature is enabled, the program polls the MAX1739 two times per second. The brightness, mode, and status are read and the appropriate fields are updated on the main display. Disable this feature by unchecking the checkbox and click the appropriate button to update each field individually.

The Brightness Cycle feature cycles the brightness through its entire range.

The Status register indicates whether the lamp circuit has opened (Status1 low) or an overcurrent condition has occurred (Status0 low).

The Reset button sets the MAX1739 and software to the POR state. If in doubt, click the Reset button.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1739 Evaluation System/ Evaluation Kit

## Table 1. SH/ SUS and SHMD Register Truth Table

| SH /SUS   |   SHMD2 | SHMD1   | SHMD0   | OPERATING MODE       |
|-----------|---------|---------|---------|----------------------|
| 0         |       0 | X       | 0       | Operate              |
| 0         |       0 | X       | 1       | Shutdown Status1 set |
| 1         |       0 | 0       | X       | Operate              |
| 1         |       0 | 1       | X       | Shutdown Status1 set |
| X         |       1 | X       | X       | Shutdown Status1 set |

## Simple SMBus Commands

There are two methods for communicating with the MAX1739: through the normal user-interface panel or through the SMBus commands available from pressing the MAXSMBUS button. A display pops up that allows the SMBus protocols, such as Read Byte and Write Byte, to be executed. To stop normal user-interface execution so that it does not override the manually set values, turn off the timer by unchecking the Automatic Read checkbox.

The SMBus dialog boxes accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits.

## Detailed Description of Hardware

## Jumper JU1

Jumper JU1 sets the MAX1739 to either ADC mode or SMBus mode. There are two possible settings in ADC mode: negative scale and positive scale. In negative scale ADC mode, JU1 = 1-2, the brightness of the lamp decreases as the voltage on the CTL/SCL pin increases. In positive scale ADC mode, JU1 = 1-3, the brightness of the lamp increases as the voltage on the CTL/SCL pin increases. In SMBus mode, JU1 = 1-4, the SMBus interface  is  enabled  on  the  MAX1739.  Refer  to  the MAX1739/MAX1839 IC data sheet for more information.

## Jumper JU2

Jumper JU2 connects the CRF/SDA pin to VL either directly (position 1-2) or through a 10k Ω resistor  (position 2-3). This is a pullup resistor for the SMBus data signal.

In ADC mode, the CRF/SDA pin sets the reference input voltage for the analog-to-digital converter (ADC). Connecting this pin directly to VL sets the reference input voltage to 5.3V. To use a voltage other than 5.3V, leave JU2 open and apply an external voltage to the CRF/SDA pad.

<!-- image -->

## Jumper JU3

Jumper JU3 sets the voltage on the MINDAC pin. This voltage sets the digital-to-analog converter's (DAC's) minimum scale output voltage.

In the 1-2 position, MINDAC is connected to VL. In this position, the lamp is completely off at the minimum scale. Additionally, the DPWM chopping function is disabled (refer to the MAX1739 IC data sheet).

In  the  1-3  position,  MINDAC is connected to REF through a voltage-divider formed by R1 and R2. The voltage on MINDAC is approximately 1V.

In  the  1-4  position,  MINDAC is connected directly to REF. The voltage on MINDAC is 2V.

## Jumper JU4

Jumper JU4, in the 1-2 position, enables the MAX1739 unless the SMBus suspend line ( SH /SUS) pulls low.

In  the  2-3  position,  the  MAX1739  is  placed  into  shutdown mode.

## Jumper JU5

The jumper JU5 must be left open for SMBus operation to prevent loading to the SMBus data signal.

For ADC mode, the shunt must be installed. This connects the potentiometer R8 to the reference input voltage for the ADC (CRF/SDA).

## Jumper JU6

When using this mode, jumper JU6 must be installed in the 1-2 position. This connects the R8 wiper to the CTL/SCL pin. Adjusting R8 changes the voltage on this pin, which changes the brightness of the lamp.

Jumper JU6, in the 2-3 position, connects CTL/SCL to VL through a 10k Ω resistor. This position is for SMBus operation. The resistor is a pullup resistor for the SMBus clock signal.

Table 2 lists the jumper settings.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1739 Evaluation System/ Evaluation Kit

## Table 2. Jumper Settings Description

| JUMPER   | SHUNT LOCATION   | FUNCTION                                                                                                                                                                            |
|----------|------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2              | MODE = REF (negative-scale ADC mode), CTL/SCL = 0 results in maximum brightness.                                                                                                    |
| JU1      | 1-3              | MODE = GND (positive-scale ADC mode), CTL/SCL = 0 results in minimum brightness.                                                                                                    |
| JU1      | 1-4              | MODE = V L . Enable SMBus interface.                                                                                                                                                |
| JU2      | Open             | Used for ADC mode. Drive CRF/SDA with an external voltage. The external voltage is the reference input voltage for the ADC. (JU1 must be in the 1-2 or 1-3 position. JU5 = closed.) |
| JU2      | 1-2              | Used for ADC mode. CRF/SDA = VL. VL is the reference input voltage for the ADC. (JU1 must be in the 1-2 or 1-3 position. JU5 = closed.)                                             |
| JU2      | 2-3              | Used for SMBus mode: CRF/SDA connected to VL through a 10k Ω pullup resistor.                                                                                                       |
| JU3      | 1-2              | MINDAC = VL. Disables the DPWM chopping function.                                                                                                                                   |
| JU3      | 1-3              | MINDAC ≅ 1V. MINDAC is connected to REF through a voltage-divider formed by R1 and R2. This voltage sets the DAC's minimum scale output voltage.                                    |
| JU3      | 1-4              | MINDAC = 2V. MINDAC is connected to REF. This voltage sets the DAC's minimum scale output voltage.                                                                                  |
| JU4      | 1-2              | Used for SMBus mode. SH /SUS is connected to VL through a 10k Ω pullup resistor.                                                                                                    |
| JU4      | 2-3              | Places the MAX1739 into shutdown.                                                                                                                                                   |
| JU5      | Open             | Used for SMBus mode. Drive CRF/SDA with SMBus data.                                                                                                                                 |
| JU5      | Closed           | Used for ADC mode. Drive CRF/SDA with analog voltage. (Connect JU2 to the 1-2 position to use VL as the analog voltage.)                                                            |
| JU6      | 1-2              | Used for ADC mode. CTL/SCL connected to the ADC reference input voltage (CRF/SDA) through potentiometer R8. Adjusting R8 changes the brightness.                                    |
| JU6      | 2-3              | Used for SMBus mode. CTL/SCL connected to VL through a 10k Ω pullup resistor.                                                                                                       |

## Transformer Suppliers Other Transformer Supplies

| Coiltronics   | 561-241-7876   | 561-241-9339   |
|---------------|----------------|----------------|
| TDK           | 847-803-6100   | 847-803-6296   |
| Toko          | 847-297-0070   | 847-699-7864   |

## Lamp Current

R13 is an 85 Ω resistor  and sets the lamp current to approximately 6mARMS (entering the lamp). However, the lamp current is dependent on the lamp characteristics. Adjust R13 as needed to achieve the desired lamp current for the CCFL of interest. Refer to the Sense Resistors section of the MAX1739 data sheet for determining the values.

## Inductor Tradeoffs

In order to achieve the narrow form factor required by many of today's notebook CCFL solutions, the EV kit

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 3. Jumper Settings Quick Reference

| JUMPER   | SMBUS MODE   | ADC MODE   |
|----------|--------------|------------|
| JU1      | 1-4          | 1-2 or 1-3 |
| JU2      | 2-3          | 1-2        |
| JU3      | X            | X          |
| JU4      | 1-2          | 1-2        |
| JU5      | Open         | Closed     |
| JU6      | 2-3          | 1-2        |

uses a small inductor. However, a 200µH inductor with the same saturation current rating improves the input transient response of the circuit.

<!-- image -->

## MAX1739 Evaluation System/ Evaluation Kit

<!-- image -->

Figure 3. MAX1739 EV Kit Component Placement Guide-Component Side

Figure 4. MAX1739 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1739 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7