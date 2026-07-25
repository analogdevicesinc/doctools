<!-- lastmod 2022-08-03 -->
## General Description

The MAX1038 evaluation kit (EV kit) is designed to evaluate the MAX1038. The MAX1038 is an 8-bit, 12-channel  (six-differential-channel)  ADC with a 2-wire serial interface. The MAX1038 EV kit board supports three standard 2-wire serial interface speeds: standard mode (S-Mode), fast mode (F-Mode), and high-speed mode (HS-Mode); however, the software provided with this EV kit only supports standard mode.

The provided Windows 95/98 ® software uses the parallel (printer) port of an IBM-compatible PC to emulate a processor with a 2-wire serial interface (S-Mode). The Windows software also provides a friendly graphical user interface (GUI) to exercise the features of the MAX1038 with control buttons and pulldown menus.

Order the MAX1038EVKIT for comprehensive evaluation  of  the  MAX1038,  using  a  personal  computer with an available parallel port.

## MAX1038 EV Kit Files

| PROGRAM     | FUNCTION                                   |
|-------------|--------------------------------------------|
| INSTALL.EXE | Installs the EV kit files on your computer |
| MAX1038.EXE | Application program                        |

| DESIGNATION    |   QTY | DESCRIPTION                                                                  |
|----------------|-------|------------------------------------------------------------------------------|
| C1-C12         |    12 | 0.22µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C224KT           |
| C13            |     1 | 100pF ±5%, 50V COG ceramic capacitor (0603) TDK C1608C0G1H101JT              |
| C14, C15       |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104KT            |
| D1, D2, D3, D4 |     4 | Zener diodes, Vz = 5.1V (3-pin SOT23) Diodes Inc. BZX84C5V1 Top mark: KZ2/Z2 |
| J1             |     1 | Male DB25 right-angle plug                                                   |

Windows 95/98 is a registered trademark of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Features

- ♦ Proven PC Board Layout
- ♦ Windows 95/98 Evaluation Software
- ♦ 2-Wire Serial Interface
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1038EVKIT | 0°C to +70°C | 16 QSOP      |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE               |
|-------------|--------------|-----------------------|
| Diodes Inc. | 805-446-4800 | www.diodes.com        |
| TDK         | 847-803-6100 | www.component.tdk.com |

Note: Please indicate that you are using the MAX1038 when contacting these component suppliers.

## Component List

| DESIGNATION        |   QTY | DESCRIPTION                                   |
|--------------------|-------|-----------------------------------------------|
| R1-R12             |    12 | 14 Ω ±1% resistors (0603)                     |
| R13, R17, R19, R23 |     4 | 100 Ω ±5% resistors (1206)                    |
| R14, R15, R20, R21 |     4 | 47k Ω ±5% resistors (1206)                    |
| R16, R22           |     2 | Open (1206) (not installed)                   |
| R18, R24           |     2 | 4.7k Ω ±5% resistors (0603)                   |
| U1                 |     1 | MAX1038AEEE (16-pin QSOP)                     |
| U2                 |     1 | Logic inverter (14-pin SO), open drain 74HC05 |
| None               |     1 | PC board, MAX1038 EV kit                      |
| None               |     1 | 3.5in software disk, MAX1038 EV kit           |
| None               |     1 | MAX1038 data sheet                            |

Maxim Integrated Products

## MAX1038 Evaluation Kit

## Quick Start

## Recommended Equipment

Before you begin, you will need the following equipment:

- MAX1038EVKIT
- A 5V DC power supply
- An IBM-compatible PC with Windows 95/98
- An available parallel port (DB25 female connector on back of PC)
- A standard 25-pin, straight-through, male-to-female cable to connect the computer's parallel port to the MAX1038 EV kit board.

## Procedure

- 1) Connect a cable from the computer's parallel port to the MAX1038 EV kit board. Use a 25-pin straightthrough, female-to-male cable.
- 2) Install the MAX1038 EV kit software on your computer by running the INSTALL.EXE program on the floppy disk. The program files are copied and icons are created in the Programs section within the Start menu.
- 3) Connect a 5V DC power supply between the pads labeled +5 and GND on the MAX1038 EV kit board.
- 4) Apply an analog input voltage (0 to VREF) to the pad labeled AIN0 (with respect to the pad labeled GND) of the MAX1038 EV kit board.
- 5) Start the MAX1038 EV kit program by double clicking its icon located in the Programs section within the Start menu.
- 6) The program automatically detects the MAX1038 EV kit  board  and  displays 2-wire Hardware Detected in a green font. The AIN0 label (main window) should automatically display the voltage applied to the pad labeled AIN0 on the MAX1038 EV kit board.

## Detailed Description of Software

The evaluation software's main window (Figure 1) controls  the setup byte and config byte. It  also  displays the voltage and output code of the input signal(s), depending on the configuration of the MAX1038.

Figure 1. MAX1038 Evaluation Software's Main Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Read ADC

The Read ADC button manually reads the MAX1038 while using the current setup and configuration byte settings.  When the AutoRead checkbox is checked, the software automatically reads the MAX1038 approximately every 300ms. AutoRead allows users to modify the setup and configuration bytes on-the-fly without having to manually press the Read ADC button each time.

## Setup Byte

The Setup Byte always begins with a start bit value of 1. The SEL2 , SEL1 , and SEL0 bits control the state of the reference. The CLK bit  selects  either  internal  clock  or external clock mode. The UNI/BIP bit  selects either unipolar or bipolar mode. Setting RST to zero resets the configuration register. The setup register remains unchanged. The X Don't Care bit can be ignored. Refer to the MAX1038 data sheet for more information on the SEL2 , SEL1 , and SEL0 bits within the Setup Byte .

## Configuration Byte

The Config Byte always begins with a start bit value of zero. The SCAN1 and SCAN0 bits select the scanning mode. The CS3, CS2, CS1 , and CS0 bits select one of the twelve analog input channels. The SE/DIFF bit selects either single-ended or differential mode. Refer to the MAX1038 data sheet for more information on the SCAN1 , SCAN0 , CS3 , CS2 , CS1 ,  and CS0 bits within the Config Byte .

## Reference Voltage

The evaluation software assumes a 4.096V reference voltage, unless otherwise specified. To override the internal 4.096V reference value, ensure bit SEL2 equals zero and bit SEL1 equals 1 within the Setup Byte . Then, apply the new reference voltage at the VREF pad on the board, type in the new reference voltage, without the volt unit, and press the Set Vref button. The EV kit software uses the value typed in the Vref field to translate the digital code to a voltage.

<!-- image -->

## MAX1038 Evaluation Kit

## Keyboard Navigation

When you type on the keyboard, the system must know which control should receive the keystrokes. Press the TAB key to move the keyboard's focus from one control to the next. The focused control is indicated by a dotted outline. SHIFT + TAB moves the focus to the previously focused control. Buttons respond to the keyboard's SPACE bar. Some controls respond to the keyboard's UP and DOWN arrow keys. Activate the program's menu bar by pressing the F10 key, then press the letter of the menu item you want. Most menu items have one letter underlined, indicating their shortcut key.

## Detailed Description of Hardware

The MAX1038 is a twelve channel (six-differential-channel) 8-bit ADC with a 2-wire serial interface. The opencollector inverter (U2) interfaces the PC parallel port to the 2-wire serial interface. U2 and the associated circuitry are only required when interfacing to the parallel port.  Power the MAX1038 EV kit from a 5V DC power supply.

## User-Supplied 2-Wire Interface

The MAX1038 EV kit provides a proven PC board layout and software to evaluate the features of the MAX1038. The Windows software only supports a 2-wire serial interface in  S-Mode. To evaluate the MAX1038 with a user-supplied 2-wire serial interface in F-Mode or HSMode, do the following:

- 1) Disconnect the MAX1038 EV kit from the PC parallel port.
- 2) Install  3k Ω resistors at locations R16 and R22. (This resistor value may require optimization for each system.)
- 3) Connect the 2-wire bus to the SDA, SCL, and GND pads.
- 4) Refer to the MAX1038 data sheet to ensure all timing specifications are met.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1038 Evaluation Kit

Figure 2. MAX1038 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1038 Evaluation Kit

Figure 2. MAX1038 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1038 Evaluation Kit

<!-- image -->

Figure 3. MAX1038 EV Kit Component Placement GuideComponent Side

Figure 4. MAX1038 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1038 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600