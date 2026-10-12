<!-- lastmod 2022-08-04 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX781 evaluation kit (EV kit) demonstrates the various outputs of the battery-powered MAX781 computer controller. The evaluation board provides a 3.3V output, two programmable PCMCIA outputs, five gate drivers, and a digitally adjustable battery charger.

The board connects to the parallel port of an IBM-compatible computer and is controlled by software included in the EV kit.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION     |   QTY | DESCRIPTION                                                                                 |
|-----------------|-------|---------------------------------------------------------------------------------------------|
| C1, C7, C13     |     3 | 0.1µF capacitors                                                                            |
| C2              |     1 | 0.33µF, 16V capacitor Murata-Erie GRM42-6X7R334K016, or AVX 1206YC334MAT2A                  |
| C3, C8, C9, C12 |     4 | 1µF, 25V capacitors Sprague 595D155X0025A2T                                                 |
| C4              |     0 | Open                                                                                        |
| C5              |     1 | 0.01µF capacitor                                                                            |
| C6              |     1 | 100µF, 10V, low-ESR tantalum capacitor Sprague 593D107X0010D10D2W, or AVX TPS D107K010R0100 |
| C10, C14, C15   |     3 | 22µF, 25V low-ESR capacitors Sprague 593D226X0025D2W, or AVX TPS D226K025R0200              |
| C11             |     1 | 3.3µF, 25V capacitor Sprague 595D335X0025B2T                                                |
| D1, D7          |     2 | 50V, 250mA switching diodes Central Semiconductor CMPD4150                                  |
| D2, D3, D5      |     3 | 30V, 1A Schottky diodes Motorola MBRS130T3, or Nihon EC10QS03                               |
| D4              |     1 | Red LED diode                                                                               |
| D6              |     1 | 100V, 1A fast-recovery diode Motorola MBRS1100T3, or Nihon EC11FS2                          |
| L1              |     1 | 33µH, 2A inductor Coilcraft D03316-33, or Sumida CDR125-330                                 |
| J1, J3          |     2 | 2-pin power connectors                                                                      |
| J2              |     1 | 25-pin DB connector (male right-angle)                                                      |
| JU1, JU2        |     2 | 3-pin headers                                                                               |

Component List continued on next page.

## MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

WIXVW

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ 3.3V, 1A Step-Down Controller
- ♦ Dual PCMCIA-Compatible VPP Outputs (0V/3.3V/5V/12V)
- ♦ Digitally Adjustable Switching-Current Source for Battery Charging
- ♦ 5 Gate-Driver Outputs for High-Side Switching
- ♦ EV Board Controlled through the Parallel Port of a Personal Computer
- ♦ Software Provided on a 5 1/4" Floppy Disk
- ♦ Surface-Mount Construction

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART           | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX781EVKIT-SO | 0°C to +70°C  | Surface Mount |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_EV Kit

<!-- image -->

1

## MAX781 Evaluation Kit

## \_\_\_\_\_\_\_Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                      |
|---------------|-------|------------------------------------------------------------------|
| Q1            |     1 | SMT 2N3904 NPN transistor Central Semiconductor CMPT3904         |
| R1, R2        |     2 | 100k Ω , 5% resistors                                            |
| R3            |     1 | 10k Ω , 5% resistor                                              |
| R4            |     1 | 0.2 Ω , 10% resistor IRC LC 2010-R200K, or Dale WSL 2010-R200K   |
| R5            |     1 | 300 Ω , 5% resistor                                              |
| R6            |     1 | 6-pin, 100k Ω SIP resistor                                       |
| R7            |     1 | 0.082 Ω , 1% resistor IRC LC 2010-R082F, or Dale WSL 2010-R082F  |
| T1            |     1 | Flyback transformer Dale LPE-6562-A070, or LPE-5047-A154         |
| U1            |     1 | Maxim MAX781CBX                                                  |
| U2            |     1 | Dual 50V, 3A, N-channel MOSFET Motorola MMDF1N05E, or IR IRF7102 |
| U3            |     1 | Dual 20V, 2A, P-channel MOSFET Motorola MMDF2P02E, or IR IRF7104 |
| None          |     1 | 5 1/4" floppy disk                                               |
| None          |     1 | 3.50" x 4.00" printed circuit board                              |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Quick Start

The EV kit software is provided on a 5 1/4" floppy disk. Copy the disk to another floppy or hard drive and store the master in a safe place.

- 1) Connect a 25-pin straight-through cable between the parallel-port connector of an IBM-compatible personal computer and the MAX781 evaluation board.
- 2) Set the jumpers on JU1 and JU2 across pins 2 &amp; 3 to enable the MAX781 at 200kHz.
- 3) Connect a 5 to 8 cell NiCd or NiMH battery to the battery connector (J3) on the evaluation board. Observe the polarity marked on the board when making these connections.
- 4) [OPTIONAL]:  Connect a 10V to 18V power supply to the DCIN connector (J1) on the evaluation board. The DCIN voltage should be greater than two-times the number of cells in the battery. For example, DCIN should be greater than 12V for a 6-cell battery.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Component Suppliers

| SUPPLIER                 | PHONE                         | FAX                           |
|--------------------------|-------------------------------|-------------------------------|
| AVX                      | (207) 282-5111                | (207) 283-1941                |
| Central Semiconductor    | (516) 435-1110                | (516) 435-1824                |
| CoilCraft                | (708) 639-6400                | (708) 639-1469                |
| Dale (Inductors)         | (605) 668-4131                | (605) 665-1627                |
| Dale (Resistors)         | (402) 564-3131                | (402) 563-1841                |
| International Rectifier  | (310) 322-3331                | (301) 322-3332                |
| IRC                      | (512) 992-7900                | (512) 992-3377                |
| Motorola (Power Devices) | (602) 244-3576                | (602) 244-4015                |
| Murata-Erie              | (814) 237-1431                | (814) 238-0490                |
| Nihon (USA) (Japan)      | (805) 867-2555 81-3-3494-7411 | (805) 867-2556 81-3-3494-7414 |
| Siliconix                | (408) 988-8000                | (408) 970-3950                |
| Sprague                  | (603) 224-1961                | (603) 224-1430                |
| Sumida (USA) (Japan)     | (708) 956-0666 81-3-3607-5111 | (708) 956-0702 81-3-3607-5144 |

This supply is only required for the battery-charging feature.

- 5) Start the EV kit software by setting the current directory  to  match  the  directory  containing  the  MAX781 software, and enter 'MAX781EV' on the computer's keyboard. The program displays the board status in the top section of the screen and allows the user to set the 32-bit data stream written to the MAX781.

NOTE:  Many of the MAX781's functions are disabled until its 5V regulator is enabled and the MAX781 is programmed for operate mode .  The MAX781 is reset to its power-up condition (5V regulator off, low-power mode )  every time the program is restarted.

- 6) To turn on the MAX781's 5V regulator, use the direction  arrows  on  the  computer's  keyboard to position the  cursor  to  Bit  9  (5ON).  Change  Bit  9  to  1  using the '1' or 'Insert' key. The function of the selected bit is indicated on the bottom status line.
- 7) Use the direction arrows on the computer's keyboard to position the cursor to Bit 4 (MODE0). Change Bit 4 to 0 using the '0' or 'Delete' key.
- 8) Press the 'ENTER' key to send the 32-bit data field to the MAX781. The board is now in operate mode and all functions are enabled.

NOTE:  The battery-charging feature requires the user to  monitor the charge cycle and terminate battery charging as soon as full charge is achieved. Only use batteries rated for a 1A or greater charging current.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

## Battery Charging

The MAX781 is designed for battery-operated applications.  The  evaluation  board  should  be  connected to a NiCd or NiMH battery with 5 to 8 cells. The user must monitor the charge cycle and terminate it before overcharging occurs.

An external DC supply (DCIN) is required for charging the battery. Typically, the input voltage needs to provide 2V for each cell in the battery. This allows for the battery's charging voltage, and also allows a small margin for the charging circuit.

To use the battery charger, connect the DCIN input to J1 and set the desired charging current using bits 10-16 (CHG0-CHG6). The charger DAC level and resulting output current are displayed on the right-hand edge of the screen. After the level has been set, set bit 7 (CHARGE) to  enable the charger. To verify the actual  battery current, measure the voltage across the 0.2 Ω resistor R4.

## Jumper Selection

The SYNC and SHDN pins are controlled by positioning shunts on jumpers JU1 and JU2 respectively. Placing a shunt across pins 1 &amp; 2 of JU1 connects the SYNC pin to VREF and sets 300kHz operation. Placing the shunt across pins 2 &amp; 3 grounds the SYNC pin and sets 200kHz operation. Remove the shunt if an external source is connected to the SYNC pad.

The shutdown (SHDN) pin is controlled by JU2. Placing a shunt across pins 1 &amp; 2 connects SHDN to the bat-

## MAX781 Evaluation Kit

Table 1.  25-Pin Connector Pinout

|   CABLE PIN | MAX781 FUNCTION     | PARALLEL PORT FUNCTION   |
|-------------|---------------------|--------------------------|
|           2 | Chip Enable (CE)    | Output Bit 0             |
|           3 | Serial Clock (SCLK) | Output Bit 1             |
|           4 | Data Input (DIN)    | Output Bit 2             |
|          13 | Data Output (DOUT)  | Input (SEL)              |

tery  (+)  and  forces  the  MAX781  into  shutdown mode. Moving the shunt to pins 2 &amp; 3 grounds the SHDN pin and enables the MAX781. Remove the shunt if an external source is connected to the SHDN pad.

## Digital Interface

The MAX781 EV kit connects to the parallel port of an IBM-compatible computer. Table 1 gives the connector pinout, and Figure 1 is the timing diagram for the serial interface.  The  signals  are  generated by manipulating the individual bits of the computer's parallel port. This is an economical but somewhat slow method of communicating with the evaluation board.

A 25-pin straight-through cable (user provided) connects between the parallel-port connector on the back of  an  IBM-compatible computer and the board. No other device should be connected to the port when the MAX781EV program is running.

<!-- image -->

Figure 1.  MAX781 EV Kit Timing Diagram

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX781 Evaluation Kit

## MAX781 EV Kit Software

Two programs are supplied on the 5 1/4" floppy disk included with the MAX781 EV kit. The MAX781EV.EXE program has the most features and displays. Most users will use this program to evaluate the MAX781. The second program, MAX781.BAS, is a core program for those users who wish to write their own program in QBASIC.

The MAX781EV program allows the user to control the various MAX781 functions and displays the programmed configuration. A 32-bit binary string is displayed in the bottom section of the screen. This is the 32-bit data stream that is sent to the MAX781 whenever the 'Enter' key is pressed. The line just above the output stream displays the previous 32-bit data stream sent to the MAX781 and the 8 bits read from the MAX781 during that sequence.

The user positions the cursor to the desired bit using the directional arrows on the computer's keyboard. The selected bit number and bit function are indicated on the bottom display line. Bits are modified using the keys listed in Table 2. The table is displayed by the program whenever a question mark (?) is entered.

The top portion of the display indicates the programmed configuration of the MAX781. The display is updated every time the 'Enter' key is pressed to send a new command.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Table 2.  Keyboard Commands

| KEY       | FUNCTION                                                                             |
|-----------|--------------------------------------------------------------------------------------|
| <-, ->    | The directional arrows move the cursor to select the bits of the 32-bit data stream. |
| Home      | Moves the cursor to Bit 0.                                                           |
| End       | Moves the cursor to Bit 31.                                                          |
| Enter     | Sends the new 32-bit stream to the MAX781.                                           |
| 0, Delete | Clears the selected bit.                                                             |
| 1, Insert | Sets the selected bit.                                                               |
| Esc       | Exits the program.                                                                   |

## MAX781 Evaluation Kit

Figure 2.  MAX781 EV Kit Schematic Diagram

<!-- image -->

MAXIM

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX781 Evaluation Kit

Figure 3.  MAX781 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4.  MAX781 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX781 Evaluation Kit

Figure 5.  MAX781 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6.  MAX781 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7