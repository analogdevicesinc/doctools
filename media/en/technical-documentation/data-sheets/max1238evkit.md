<!-- lastmod 2022-08-03 -->
## General Description

The MAX1238 evaluation kit (EV kit) is designed to evaluate the MAX1238. The MAX1238 is a 12-bit, 12-channel (six differential-channel) ADC with a 2-wire serial interface. The MAX1238 EV kit board supports three standard 2-wire interface speeds: standard mode (S-Mode), fast mode (F-Mode), and high-speed mode (HS-Mode). The software provided with this EV kit only supports S-Mode.

The provided Windows® 95/98 software uses the parallel (printer) port of an IBM-compatible PC to emulate a processor with a 2-wire interface (S-Mode). The Windows software also provides a friendly graphicaluser interface (GUI) to exercise the features of the MAX1238 with control buttons and menus.

Order the MAX1238 EV kit for comprehensive evaluation of  the  MAX1238 using a personal computer with an available parallel port.

Windows is a registered trademark of Microsoft Corp.

| DESIGNATION    |   QTY | DESCRIPTION                                                            |
|----------------|-------|------------------------------------------------------------------------|
| C1-C4, C10-C17 |    12 | 0.22µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A224KT     |
| C5             |     1 | 100pF ±5%, 50V COG ceramic capacitor (0603) TDK C1608C0G1H101JT        |
| C6, C9         |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104KT      |
| C7, C8         |     2 | 10µF ±20%, 16V X5R ceramic capacitors (1210) TDK C3225X5R1C106M        |
| D1-D4          |     4 | Zener diodes, Vz = 5.1V Diodes Inc. BZX84C5V1 3-pin SOT23 top mark KZ2 |
| FB1            |     1 | Surface-mount ferrite bead (0603) TDK MMZ1608B601C                     |

- ♦ Proven PC Board Layout
- ♦ Windows 95/98 Evaluation Software
- ♦ 2-Wire Serial Interface
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1238EVKIT | 0°C to +70°C | 16 QSOP      |

## MAX1238 EV Kit Files

| INSTALL.EXE   | Installation program   |
|---------------|------------------------|
| MAX1238.EXE   | Application program    |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| Diodes Inc. | 805-446-4800 | www.diodes.com        |
| TDK         | 847-803-6100 | www.component.tdk.com |

Note: Please indicate you are using the MAX1238 when contacting these component suppliers.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                         |
|--------------------|-------|-----------------------------------------------------|
| J1                 |     1 | Male DB-25 right-angle plug Mouser 152-3325         |
| R1-R4, R17-R24     |    12 | 14 Ω ±1% resistors (0603)                           |
| R5, R7             |     2 | Open (1206) (not installed)                         |
| R6, R8, R9, R13    |     4 | 47k Ω ±5% resistors (1206)                          |
| R10, R12, R14, R16 |     4 | 100 Ω ±5% resistors (1206)                          |
| R11, R15           |     2 | 4.7k Ω ±5% resistors (0603)                         |
| U1                 |     1 | MAX1238EEE (16-pin QSOP)                            |
| U2                 |     1 | Open-collector logic inverter (14-pin SO) SN74HC05D |
| None               |     1 | PC board, MAX1238 EV kit                            |
| None               |     1 | 3.5in software disk, MAX1238 EV kit                 |
| None               |     1 | MAX1238 data sheet                                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642,or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

Features

## MAX1238 Evaluation Kit

## Quick Start

## Recommended Equipment

Before you begin, the following equipment is needed:

- A fixed +5VDC power supply
- An IBM-compatible PC with Windows 95/98
- An available parallel port (DB-25 female connector on back of PC)
- A standard 25-pin, straight-through, male-to-female cable to connect the computer's parallel port to the MAX1238 EV kit board

## Procedure

- 1) Connect a cable from the computer's parallel port to the MAX1238 EV kit board. Use a 25-pin straightthrough, female-to-male cable.
- 2) Install the MAX1238 EV kit software on your computer by running the INSTALL.EXE program on the floppy disk. The program files are copied and icons are created in the Programs section within the Start menu.
- 3) Connect a +5VDC power supply between the +5V and the GND pads of the MAX1238 EV kit board.
- 4) Start  the  MAX1238 EV kit program by clicking its icon in the Programs section within the Start menu.
- 5) Apply an analog input voltage (0V to +VREF) between the AIN0 and GND pads of the MAX1238 EV kit board.
- 6) The program automatically detects the MAX1238 EV kit board and displays 2-Wire Hardware Detected in  green.  The AIN0 label automatically displays the voltage applied to the pad labeled AIN0 on the MAX1238 EV kit board.

## Detailed Description of Software

The evaluation software's main window (shown in Figure 1) controls the setup byte and configuration byte. It also displays the voltage and output code of the input signal(s),  depending on the configuration of the MAX1238.

Figure 1. MAX1238 Evaluation Software Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Read ADC

The Read ADC button manually reads the MAX1238 while using the current setup and configuration byte settings.  When the AutoRead checkbox is checked, the software automatically reads the MAX1238 approximately every 300ms. AutoRead allows users to modify the setup and configuration bytes on-the-fly without having to manually press the Read ADC button each time.

## Setup Byte

The Setup Byte always begins with a start bit value of one. The SEL2 , SEL1 , and SEL0 bits control the state of  the  reference.  The CLK bit  selects  either  internal clock or external clock mode. The UNI/BIP bit  selects either  unipolar  or  bipolar  mode.  Setting RST to  zero resets the configuration register. The setup register remains unchanged. The X Don't Care bit  can  be ignored. Refer to the MAX1238 data sheet for more information on the SEL2 , SEL1 ,  and SEL0 bits  within the Setup Byte .

## Config Byte

The Config Byte always begins with a start bit value of zero. The SCAN1 and SCAN0 bits select the scanning mode. The CS3, CS2, CS1, and CS0 bits select one of the 12 analog input channels. The SE/DIFF bit selects either  single-ended or differential mode. Refer to the MAX1238 data sheet for more information on the SCAN1 , SCAN0 , CS3 , CS2 , CS1 ,  and CS0 bits within the Config Byte .

## Reference Voltage

The evaluation software assumes a +4.096V reference voltage, unless otherwise specified. To override the internal 4.096V reference value, ensure bit SEL2 equals zero and bit SEL1 equals one within the Setup Byte .  Then,  apply  the  new  reference voltage at the VREF pad on the board, type in the new reference voltage, without the volt unit, and press the Set Vref button. The EV kit software uses the value typed in the Vref field to translate the digital code to a voltage.

## Keyboard Navigation

When you type on the keyboard, the system must know which control should receive the keys. Press the TAB key to move the keyboard's focus from one control to the next. The focused control is indicated by a dotted outline. SHIFT + TAB moves the focus to the previously focused control. Buttons respond to the keyboard's SPACE bar. Some controls respond to the keyboard's UP and DOWN arrow keys. Activate the program's menu bar by pressing the F10 key, and then press the letter of the menu item you want. Most menu items have one letter underlined, indicating their shortcut key.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1238 Evaluation Kit

## Detailed Description of Hardware

The MAX1238 is a 12-channel (six differential-channel) 12-bit ADC with a 2-wire serial interface. The open-collector inverter (U2) interfaces the PC parallel port to the 2-wire serial interface. U2 and the associated circuitry are only required when interfacing to the parallel port. Power the MAX1238 EV kit from a +5VDC power supply. To prevent damage to the MAX1238 EV kit, do not exceed +5.5VDC on the supply.

## User-Supplied 2-Wire Interface

The MAX1238 EV kit provides a proven PC board layout and software to evaluate the features of the MAX1238. The Windows software only supports a 2-wire serial interface in S-Mode. To evaluate the MAX1238 with a user-supplied 2-wire serial interface in F-Mode or HS-Mode, do the following:

- 1) Disconnect the MAX1238 EV kit from the PC parallel port.
- 2) Install  3k Ω resistors  at  locations  R5  and  R7.  (This resistor value may require optimization for each system.)
- 3) Connect the user-supplied 2-wire bus to the SDA, SCL, and GND pads. (Connect to the GND pad nearest the 5V pad on the MAX1238 EV kit board.)
- 4) Refer to the MAX1238 data sheet to ensure all timing specifications are met.

## MAX1238 Evaluation Kit

Figure 2. MAX1238 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1238 Evaluation Kit

<!-- image -->

Figure 2. MAX1238 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1238 Evaluation Kit

Figure 3. MAX1238 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1238 EV Kit PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1238 Evaluation Kit

Figure 5. MAX1238 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

7