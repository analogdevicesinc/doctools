<!-- lastmod 2022-08-05 -->
## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX1611 evaluation kit (EV kit) is an assembled surface-mount demonstration board. The kit embodies the standard cold-cathode fluorescent lamp application circuit  shown in Figure 4 of the MAX1610/MAX1611 data sheet. Additional circuitry allows an IBM-compatible personal computer to use its parallel port to emulate an Intel System Management Bus (SMBus™) interface.

The board comes with a MAX1611 installed, but with minimal modification, the EV kit can also be used to evaluate the MAX1610.

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Complete Surface-Mount Solution for Driving CCFL Backlights
- ' High Efficiency
- ' PC-Compatible Software Emulates Intel SMBus
- ' Fully Assembled and Tested

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

| PART            | TEMP. RANGE   | BOARD TYPE    |
|-----------------|---------------|---------------|
| MAX1611EVKIT-SO | 0°C to +70°C  | Surface Mount |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Component List

| DESIGNATION           |   QTY | DESCRIPTION                                                                |
|-----------------------|-------|----------------------------------------------------------------------------|
| C1                    |     1 | 0.1µF, low-dissipation capacitor WIMA SMD7.3                               |
| C2                    |     1 | 18pF, 3.1kV, ceramic high-voltage capacitor Murata-Erie GHM1038-SL-180J-3K |
| C3, C5                |     2 | 0.027µF ceramic capacitors                                                 |
| C4, C6, C7, C8        |     4 | 0.1µF ceramic capacitors                                                   |
| C9                    |     1 | Low-ESR, 10µF, 35V surface-mount tantalum capacitor AVX TPSD106M035R0300   |
| C20, C21              |     0 | Open                                                                       |
| D1, D3, D20, D21, D22 |     5 | Diodes: Central Semiconductor CMPD4448 (or CMPD2838)                       |
| D2                    |     1 | 1A, 30V Schottky diode Motorola MBRS130LT3                                 |
| D23, D24, D25         |     3 | 6V, axial-leaded, type 1N5232B zener diodes                                |
| J1                    |     1 | Right-angle DB25 male connector                                            |
| JU1-JU4               |     0 | Open                                                                       |
| L1                    |     1 | 100µH, 1.0A inductor Coilcraft DO3316-104                                  |
| Q1, Q2                |     2 | NPN transistors Zetex FMMT619                                              |
| Q20, Q21, Q23         |     3 | NPN transistors Central Semiconductor CMPT3904                             |
| R2                    |     1 | 510 W , 5% resistor                                                        |
| R3                    |     1 | Open                                                                       |

| DESIGNATION                  |   QTY | DESCRIPTION                                       |
|------------------------------|-------|---------------------------------------------------|
| R4                           |     1 | 8.2k W , 5% resistor                              |
| R5                           |     1 | 150k W , 5% resistor                              |
| R6                           |     1 | 51k W , 5% resistor                               |
| R7                           |     1 | 20 W , 5% resistor                                |
| R8, R9, R10, R13, R14        |     0 | Open                                              |
| R11                          |     1 | 1 W , 5% resistor                                 |
| R12                          |     1 | 1.2 W , 5% resistor                               |
| R20, R21, R22                |     3 | 510k W , 10% resistors                            |
| R24, R25, R26, R30, R31, R32 |     6 | 10k W , 10% resistors                             |
| R27, R28, R29                |     3 | 100k W , 10% resistors                            |
| R33, R34, R35                |     3 | 100 W , 10% resistors                             |
| SW1, SW2*                    |     2 | Momentary pushbutton switches (MAX1610)           |
| SW3                          |     1 | Slide switch                                      |
| T1                           |     1 | CCFT transformer Coiltronics CTX110605            |
| U1                           |     1 | MAX1611ESE CCFT controller with SMBus interface   |
| U1*                          |     1 | MAX1610ESE CCFT controller with up/down interface |
| U2                           |     1 | 74HC14 hex Schmitt-trigger inverter               |
| None                         |     1 | 7" x 2.5" MAX1611 printed circuit board           |
| None                         |     1 | Software disk: MAX1611 DEMO DISK                  |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products

1

For free samples &amp; the latest literature: http://www.maxim-ic.com, or phone 1-800-998-8800. For small orders, phone 408-737-7600 ext. 3468.

## MAX1611 Evaluation Kit

## Component Suppliers

| SUPPLIER              | PHONE          | FAX            |
|-----------------------|----------------|----------------|
| AVX                   | (803) 946-0690 | (803) 626-3123 |
| Central Semiconductor | (516) 435-1110 | (516) 435-1824 |
| Coilcraft             | (847) 639-6400 | (847) 639-1469 |
| Coiltronics           | (561) 241-7876 | (561) 241-9339 |
| Motorola              | (602) 303-5454 | (602) 994-6430 |
| WIMA                  | (914) 347-2474 | (914) 347-7230 |
| Zetex USA             | (516) 543-7100 | (516) 864-7630 |

## Evaluating the MAX1611

- 1) A cold-cathode fluorescent lamp (CCFL) has two terminals. Usually the CCFL is built into an LCD panel, and a plastic female connector extends from the panel. The holes in the female connector are just big enough to allow insertion of the leads from a 1/8W through-hole resistor. Cut off the resistor's two leads and use them as pieces of stiff wire. Solder the wire into the two holes on the far-right side of the EV kit. Bend the wire to form a suitable male connector for attaching the plastic female connector from the LCD panel. Push the female connector onto the male connector (Figure 1).
- 2) Make sure the slide switch in the upper-left corner of the MAX1611 EV kit (SW3) is pushed toward the 28-pin connector (down). Also make sure that jumper JU1 is not installed.
- 3) Connect a +12V supply to the pad marked VIN on the MAX1611 EV kit. Be careful not to accidentally connect the +12V supply to the pads marked SDA, SCL, or SMBSUS, or to the holes labeled JU3. Before connecting the ground lead, double check that the +12V connection is in the right place.
- 4) Connect the ground lead of your supply to the pad marked GND. The CCFL should light up. Be careful  not  to  touch  either  the  transformer on the MAX1611 EV kit or the stiff wire, as high voltages are present.
- 5) Use a 28-pin, male/female parallel-port cable to connect LPT1 on your IBM PC-compatible computer to the MAX1611 EV kit.
- 6) Boot your IBM PC-compatible computer and exit Windows to the MS-DOS prompt. Insert the disk provided with the MAX1611 EV kit in drive A: and type the following at the MS-DOS prompt:

<!-- formula-not-decoded -->

Make sure you see the prompt 'A: \&gt;', then type :

maxsmb device max1611 &lt;ENTER &gt;

Your screen will look like this:

<!-- image -->

Figure 1.  MAX1611 EV Kit Overview

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Use the left and right arrows on your keyboard to move the selected bit marker, '/-\'. Press the '0' key or the '1' key to clear or set the selected bit. Pressing 'w' on your keyboard writes the bit pattern to the MAX1611. Pressing 'r' on your keyboard reads the status of the MAX1611.

- 7) Press 'r' on your keyboard. You should see the question marks on the screen replaced with ones and zeros, and the words 'TUBE OK' should appear. This indicates that the MAX1611's status was successfully read, and that it reported that the CCFL is operating normally.
- 8) To set the CCFL brightness to full scale, set bits D41, D31, D21, D11, and D10 to '1', then press the 'w' key on your keyboard. The lamp will brighten and the screen will look as follows:
- 9) The SMBSUS line can be toggled via the keyboard. The MAX1611 has two fully configurable modes. SMBSUS selects the active mode. SMBSUS = 1 activates the REGSEL = 1 mode, and SMBSUS = 0 activates the REGSEL = 0 mode. Pressing the 's' key toggles CCFL on and off. As you press the 's' key, notice that the number to the right  of  'S)  SMBSUS:' toggles between zero and one, indicating the current state of SMBSUS.
- 10) The MAX1611's CCFL current-chopping mode can be evaluated easily by installing jumper JU1. With JU1 installed, the MAX1611's MINDAC pin is shorted to the VL pin. To increase the VIN supply voltage beyond +12V, follow the component modification  instructions  in  the Current-Chopping Mode section of the MAX1610/MAX1611 data sheet

<!-- image -->

<!-- image -->

## MAX1611 Evaluation Kit

## Evaluating the MAX1610

Be sure to make all board modifications with power disconnected.

- 1) Remove the MAX1611 from the EV board. Carefully cut each of the MAX1611's leads, then desolder each lead individually so as not to damage the pads on the board. Install the MAX1610 on the board in the position previously occupied by the MAX1611.
- 2) Cut traces. On the back side of the MAX1611 EV kit, near the 28-pin connector, are two small arrows that point to two traces. Cut the two traces at the positions the arrows point to.
- 3) Install momentary switches SW1 and SW2.
- 4) A cold-cathode fluorescent lamp (CCFL) has two terminals. Usually the CCFL is built into an LCD panel, and a plastic female connector extends from the panel. The holes in the female connector are just big enough to allow insertion of the leads from a throughhole resistor with a value of 1/8W. Cut off the resistor's two leads and use them as pieces of stiff wire. Solder the wire into the two holes on the far right side of  the  EV  kit.  Bend  the  stiff  wire  to  form  a  suitable male connector for attaching the plastic female connector from the LCD panel. Push the female connector onto the male connector (Figure 1).
- 5) Make sure the slide switch in the upper-left corner of the MAX1611 EV kit (SW3) is pushed toward the 28pin connector (down). Also make sure that  jumper JU1 is not installed.
- 6) Connect a +12V supply to the pad marked VIN on the MAX1611 EV kit. Be careful not to accidentally connect the +12V supply to the pads marked SDA, SCL, or SMBSUS, or to the holes labeled JU3. Before connecting the ground lead, double check that the +12V connection is in the right place.
- 7) Connect the supply's ground lead to the pad marked GND. As soon as you do so, the CCFL will light up. Be careful not to touch either the transformer on the MAX1611 EV kit or the stiff wire, as high voltages are present.
- 8) Since the MAX1610 does not have an SMBus interface, do not connect the 28-pin male/female parallel port cable. The CCFL intensity can be increased by pressing then releasing switch SW2, or decreased by pressing then releasing switch SW1. To place the MAX1610 into shutdown mode, slide switch SW3 away from the 28-pin connector.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 2.  MAX1611 EV Kit Main Circuit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 3.  MAX1611 EV Kit Interface Logic Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1611 Evaluation Kit

<!-- image -->

Figure 4.  MAX1611 EV Kit Component Placement Guide-Top Silkscreen

Figure 5.  MAX1611 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 6.  MAX1611 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

- 6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600
- © 1997 Maxim Integrated Products Printed USA is a registered trademark of Maxim Integrated Products.