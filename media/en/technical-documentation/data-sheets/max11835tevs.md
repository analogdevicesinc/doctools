<!-- lastmod 2022-08-02 -->
<!-- image -->

## MAX11835 Evaluation System

## General Description

## Features

The MAX11835 evaluation system (EV system) demonstrates  a  complete  solution  to  drive  single  and multilayer  piezo  actuators  to  create  haptic  feedback for  products featuring touch interfaces. The MAX11835 efficiently  generates  any  type  of  user-programmable waveforms  including  sine,  trapezoidal,  square,  and pulse to drive the piezo loads to create custom haptic sensation.  The  low-power  device  directly  interfaces with an application processor/host controller through an I 2 C  interface  and  integrates  various  blocks  including  a boost regulator, pattern storage memory, and waveform generator  in  one  package,  thus  providing  a  complete haptic feedback controller solution.

The  EV  system  is  a  multiboard  system  that  includes  a MAXQ2000  USB  touch  interface  board  (UTIB)  and  a MAX11835 daughter board.

Note: The  CD-ROM  included  with  the  EV  kit  contains a  User's  Guide  that  provides  information  about  the graphical user interface (GUI).

Note: The  MAX11835  is  not  a  touch-screen  controller  and  the  touch  panel  is  only  provided  for  haptic feedback  purposes,  with  the  4-wire  flex  connector  left unconnected.

- S Convenient USB Interface
- S Touch Panel with Piezo Actuator Mounted for Haptic Feedback
- S Analog Tracking-Mode Capability
- S Easy-to-Use Windows M Graphical User Interface (GUI) Allows Register Programming for Various Haptic Waveforms
- S All Components Mounted on a Plexiglass Base for Ease of Handling
- S Single-Supply Operation through the USB
- S Option for External Power Supply for the Boost Regulator
- S Separate User's Guide Available for the Graphical User Interface

## Ordering Information

| PART          | TYPE      | PC INTERFACE   | INTERFACE TYPE   |
|---------------|-----------|----------------|------------------|
| MAX11835TEVS+ | EV System | USB            | Windows          |

## EV System Contents List

|   QTY | DESCRIPTION                                                                                                                  |
|-------|------------------------------------------------------------------------------------------------------------------------------|
|     1 | CD-ROM containing a USB driver, quick guide, GUI software for Windows XP M , and PCB schematic and layout files              |
|     1 | USB touch interface board (MAXQ2000 UTIB board)                                                                              |
|     1 | Haptic actuator controller daughter board (MAX11835) with a connector to plug in to the UTIB board                           |
|     1 | Piezo driver MAX11835 daughter board with a connector to plug in to the UTIB2 board (included with the haptic versions only) |
|     1 | Fujitsu 3.5in touch panel (Fujitsu 817-T010-1401-T670) with piezos mounted under them for haptic feedback purpose only       |
|     2 | CUI piezos (Cui Inc. CFT-44TW100-0.6A1-70C) for haptic feedback                                                              |
|     1 | Mini USB cable                                                                                                               |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

1

Windows and Windows XP are registered trademarks of Microsoft Corp.

## MAX11835 Evaluation System

Figure 1. MAX11835 EV System

<!-- image -->

## Component Lists

## MAXQ2000 UTIB Board

| DESIGNATION                           |   QTY | DESCRIPTION                                                            |
|---------------------------------------|-------|------------------------------------------------------------------------|
| C28                                   |     1 | 10 F F Q 20%, 10V ceramic capac- itor (0805) Murata GRM219R61A106KE44D |
| EN1B, EN2B, U2-PIN1, U2-PIN20         |     4 | 2-pin headers, 100 mil                                                 |
| FB1, FB2                              |     2 | 100 F H Q 10% ferrite beads (1206) TDK FL3215T-101K                    |
| J1, J2, J3, J5, J6, J7, J15, J16, J17 |     9 | 2-pin headers, 100 mil Sullins PBC02SABN                               |
| J4, J8, J9, J18, J19                  |     5 | 3-pin headers, 100 mil Sullins PBC03SABN                               |
| J10                                   |     1 | 21-pin female connector Hirose DF9-21S-1V(32)                          |
| J20                                   |     1 | 5-position USB-mini connector Hirose UX60-MB-5ST                       |
| J21                                   |     1 | 10-pin JTAG header, 100 mil Sullins PBC05DAAN                          |
| LED2, LED3, LED4                      |     3 | RGB SMD LEDs (0805) Lite-On LTST-C171KYKT                              |
| R1-R4                                 |     4 | 4.7k I Q 5% resistors (0805) Vishay CRCW08054K70JNEA                   |

| DESIGNATION                                  |   QTY | DESCRIPTION                                                               |
|----------------------------------------------|-------|---------------------------------------------------------------------------|
| C1, C2, C11, C13                             |     4 | 1 F F -20/+80%, 16V ceramic capacitors (0603) Murata GRM188F51C105ZA01D   |
| C3, C6, C12, C14                             |     4 | 10 F F Q 20%, 6.3V ceramic capacitors (0603) Murata GRM188R60J106ME47D    |
| C4, C5, C9, C10, C15-C19, C23, C24, C25, C27 |    13 | 0.1 F F -20/+80%, 16V ceramic capacitors (0603) Murata GRM188F51C104ZA01D |
| C7, C8                                       |     2 | 22pF Q 5%, 50V ceramic capacitors (0603) Murata GRM1885C1H220JA01D        |
| C20, C21                                     |     2 | 10pF Q 5%, 50V ceramic capacitors (0603) Murata GRM1885C1H100JA01D        |
| C22                                          |     1 | 33nF Q 10%, 16V ceramic capac- itor (0603) Murata GRM188R71C333KA01D      |
| C26                                          |     1 | 4.7 F F -20/+80%, 10V ceramic capacitor (0603) Murata GRM188F51A475ZE20D  |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11835 Evaluation System

## Component Lists (continued)

| DESIGNATION           |   QTY | DESCRIPTION                                          |
|-----------------------|-------|------------------------------------------------------|
| R5                    |     1 | 196k I Q 5% resistor (0805) Vishay CRCW0805196KJNEA  |
| R6                    |     1 | 590k I Q 5% resistor (0805) Vishay CRCW0805590KJNEA  |
| R7                    |     1 | 61.9k I Q 1% resistor (0805) Vishay CRCW080561K9FKEA |
| R8, R20, R22, R37-R40 |     7 | 100k I Q 5% resistors (0805) Vishay CRCW0805100KJNEA |
| R9, R16, R17          |     3 | 215 I resistors (0805) Vishay CRCW0805215RJNEA       |
| R10, R19, R32-R36     |     0 | Not installed, resistors                             |
| R11-R14               |     4 | 0 I SMD resistors (0805)                             |
| R15, R18              |     2 | 51k I Q 5% resistors (0805) Vishay CRCW080551KJNEA   |
| R21                   |     1 | 169k I Q 5% resistor (0805) Vishay CRCW0805169KJNEA  |
| R23, R24              |     2 | 27 I Q 5% resistors (0805) Vishay CRCW080527R0JNEA   |
| R25                   |     1 | 1.5k I Q 5% resistor (0805) Vishay CRCW08051K50JNEA  |
| R26                   |     1 | 2.2k I Q 5% resistor (0805) Vishay CRCW08052K20JNEA  |
| R27                   |     1 | 470 I resistor (0805) Vishay CRCW0805470RJNEA        |
| R28                   |     1 | 10k I Q 5% resistor (0805) Vishay CRCW080510K0JNEA   |
| R29, R30, R31         |     3 | 3.3k I Q 5% resistors (0805) Panasonic ERA-S27J332V  |
| R41                   |     1 | 23.7k I Q 1% resistor (0805) Vishay CRCW080523K2FKEA |

| DESIGNATION                                    |   QTY | DESCRIPTION                                                   |
|------------------------------------------------|-------|---------------------------------------------------------------|
| ADD0, ADD1, DIS, IRQB, RESETB, SCL, SDA, TRIGB |     0 | Not installed, test points                                    |
| CF1                                            |     1 | 10 F F X54 ceramic capacitor (0805) Murata GRM21BF50J106ZE01L |

<!-- image -->

## MAX11835 Daughter Board

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| CF2           |     1 | 47nF, 200V ceramic capacitor (0805) KEMET C0805C473K2RACTU     |
| CF3, CF4      |     2 | 1 F F, 10V X5R ceramic capacitors (0402) KEMET C0402C475MPACTU |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| U1, U7        |     2 | Adjustable LDO linear regulators (5 SC70) Maxim MAX8512EXK-T  |
| U2            |     1 | Octal-level translator (20 TSSOP) Maxim MAX3001EEUP           |
| U3            |     1 | Fixed 2.5V LDO linear regulator (5 SC70) Maxim MAX8511EXK25-T |
| U4            |     1 | UART, 7mm x 7mm (32 TQFP) FTDI FT232BL                        |
| U5            |     1 | 2kB EEPROM (8 SO) Atmel AT93C46A                              |
| U6            |     1 | 16-bit microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX        |
| U8            |     1 | Quad-level translators (12 TQFN-EP*) Maxim MAX3395EETC+       |
| U9            |     1 | Li+ linear battery charger (14 TDFN) Maxim MAX8856ETD+        |
| Y1            |     1 | 16MHz crystal (HCM49) ECS ECS-160-20-5PDN-TR                  |
| Y2            |     1 | 6MHz crystal (HCM49) ECS ECS-60-20-5G3XDS-TR                  |
| Y3            |     0 | Not installed, crystal                                        |
| -             |     1 | PCB: USB Touch Interface Board                                |

## MAX11835 Evaluation System

## Component Lists (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                                                     |
|---------------|-------|-------------------------------------------------------------------------------------------------|
| CL            |     0 | Not installed, SMD ceramic capacitor (0805)                                                     |
| C1            |     0 | Not installed, capacitor                                                                        |
| D1            |     1 | 200V diode                                                                                      |
| J1            |     1 | 2-pin headers, 0.1in pitch                                                                      |
| J2            |     1 | 21-position male connector Hirose DF9-21P-1V(32)                                                |
| J3, J5, J7    |     3 | 3-pin headers, 100 mil Sullins PBC03SABN                                                        |
| J4            |     0 | Not installed, 20-position connector                                                            |
| J6            |     1 | 4-pin header, 0.1in pitch                                                                       |
| LED1          |     1 | Red SMD LED (1.6mm x 0.8mm)                                                                     |
| Q1            |     1 | n-channel MOSFET (hex DIP) PD = 1W, ID = 0.6A, VDSS = 200V, VGS = Q20V, VSD = 2V, RDS(ON) = 1 I |
| R1            |     1 | 2M I Q 1%, 250V resistor (0805)                                                                 |
| R2            |     1 | 27k I SMD resistor (0402)                                                                       |

## Table 1. UTIB Ports

| PORT   | DESCRIPTION                                                                                            |
|--------|--------------------------------------------------------------------------------------------------------|
| J10    | Daughter card connector for I 2 C-controlled devices (includes 1.8V/3.3V/3.6V supplies and reset line) |
| J20    | USB port provides power to the EV system and communication to a PC                                     |
| J21    | JTAG port for programming the MAXQ2000                                                                 |

## Table 2. UTIB Default Jumper Settings

| JUMPER   | SHUNT POSITION   | STATUS            | DESCRIPTION                                              |
|----------|------------------|-------------------|----------------------------------------------------------|
| J5       | 1-2              | Short             | If J5 and J6 are open, 3.6V supply to the daughter board |
| J6       | 1-2              | Closed            | 3V supply to the daughter board                          |
| J7       | 1-2              | User's preference | If closed,1.8V supply to the daughter board              |
| J8       | 2-3              | Closed            | I 2 C communication                                      |
| J9       | 2-3              | Closed            | I 2 C communication                                      |
| J18      | -                | Open              | -                                                        |
| J19      | 1-2              | Closed            | USB power                                                |

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION          |   QTY | DESCRIPTION                                                        |
|----------------------|-------|--------------------------------------------------------------------|
| R3, R8, R9, R11, R20 |     5 | 0 I SMD resistors (0805)                                           |
| R4, R6               |     2 | 4.7k I SMD resistors (0402)                                        |
| R5                   |     1 | 20 I SMD resistor (0603)                                           |
| R7                   |     1 | 220 I SMD resistor (0402)                                          |
| R10                  |     1 | 1 I SMD resistor (0805)                                            |
| R12                  |     0 | Not installed, SMD resistor (0402)                                 |
| R13                  |     1 | 0 I SMD resistor (0402)                                            |
| R14                  |     1 | 4.99k I resistor (0603)                                            |
| R17, R18             |     2 | 49.9 I SMD resistors (0402)                                        |
| R19                  |     0 | Not installed, resistor                                            |
| T1                   |     1 | Boost transformer                                                  |
| T4, TT1, TT5, VOUT   |     0 | Not installed, test points                                         |
| U1                   |     0 | Not installed, haptic piezo controller (25 WLP) Maxim MAX11835EWA+ |
| X1-X4                |     4 | Empty holes                                                        |
| -                    |     1 | PCB: MAX11835                                                      |

## MAX11835 Evaluation System

Table 3. Jumper Settings for the MAX11835 Daughter Board

| JUMPER   | SHUNT POSITION   | STATUS   | DESCRIPTION                                                                                                                             |
|----------|------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------|
| J1       | -                | Open     | Pin 2: AIN to MAX11835                                                                                                                  |
| J3       | 2-3              | Closed   | Pins 2-3: Default to playback from the device memory Pins 1-2: Analog tracking mode                                                     |
| J5       | 2-3              | Closed   | ADD0 slave address pin (pin 1, DVDD; pin 3, GND)                                                                                        |
| J7       | 2-3              | Closed   | ADD1 slave address pin (pin 1, DVDD; pin 3, GND)                                                                                        |
| J6       | BVDD-VDD         | Closed   | Power supply to BVDD and AVDD; if needed to provide power from external voltage source, leave the jumper open and apply voltage to BVDD |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

## MAX11835 Evaluation System

Figure 2a. UTIB Schematic-Main (Sheet 1 of 2)

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11835 Evaluation System

<!-- image -->

Figure 2b. UTIB Schematic-Mini USB (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX11835 Evaluation System

Figure 3. MAX11835 Daughter Board Schematic

<!-- image -->

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11835 Evaluation System

Figure 4. UTIB PCB Layout-Silkscreen

<!-- image -->

Figure 5. UTIB PCB Layout-Top Assembly

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX11835 Evaluation System

Figure 6. UTIB PCB Layout-Top Layer

<!-- image -->

Figure 7. UTIB PCB Layout-Layer 2

<!-- image -->

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11835 Evaluation System

<!-- image -->

Figure 8. UTIB PCB Layout-Layer 3

<!-- image -->

Figure 9. UTIB PCB Layout-Bottom Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX11835 Evaluation System

Figure 10. UTIB PCB Layout-Bottom Assembly

<!-- image -->

Figure 11. MAX11835 PCB Layout-Silkscreen

<!-- image -->

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11835 Evaluation System

<!-- image -->

Figure 12. MAX11835 PCB Layout-Top Assembly

<!-- image -->

Figure 13. MAX11835 PCB Layout-Top Layer

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## MAX11835 Evaluation System

Figure 14. MAX11835 PCB Layout-Layer 2

<!-- image -->

Figure 15. MAX11835 PCB Layout-Layer 3

<!-- image -->

14      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX11835 Evaluation System

<!-- image -->

Figure 16. MAX11835 PCB Layout-Bottom Layer

<!-- image -->

Figure 17. MAX11851 PCB Layout-Bottom Assembly

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    15

## MAX11835 Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 9/10            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

16