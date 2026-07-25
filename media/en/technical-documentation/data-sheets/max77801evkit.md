<!-- lastmod 2022-08-02 -->
## MAX77801 Evaluation Kit

## General Description

The  MAX77801  evaluation  kit  demonstrates  the  IC  2A, buck-boost with I 2 C capability. The EV kit enables user to evaluate  MAX77801  performances  with  preprogrammed output  voltage  even  without  I 2 C  interface  board  (e.g., MINIQUSB). The two output voltages supported by default are 3.3V and 3.4V and it can be set by pulling DVS high/ low.  With  I 2 C  interface  board  (additional  order  required if  necessary),  user  can  set  output  voltage  from  2.6V  to 4.1875V  with  12.5mV  step.  The  EV  kit  comes  standard with the MAX77801EWP+ installed.

The  MINIQUSB interface  board  can  be  used  to  enable PC  communication  through  the  USB  interface  board. Windows® 2000-, Windows XP®-, Windows Vista®-, and Windows 7-compatible software along with an extender board allows  an  IBM-compatible  PC  to  use  to  the  USB port to emulate an I 2 C 2-wire inter-face. This menu-driven program offers a graphical user interface (GUI) with control buttons.

## Benefits and Features

- Kelvin Sense Pins at the Input and Output of the Regulator Ensure Accurate Efficiency Measurement

Ordering Information appears at end of data sheet.

Windows, Windows XP, and Windows Vista are registered trademarks and service marks of Microsoft Corporation.

Evaluates: MAX77801

## Quick Start

## Required Equipment

- MAX77801 EV kit
- MINIQUSB command module (optional, USB cable included)
- Adjustable DC power supply
- 1.8V DC power supply (optional)
- Digital multimeters

<!-- image -->

Figure 1. MAX77801 Evaluation Board

<!-- image -->

## MAX77801 Evaluation Kit

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation.  Use  twisted  wires  of appropriate gauge (20AWG) that are as short as possible to connect the load and power sources.

- 1) Ensure that the EV kit has the correct jumper settings, as shown in Table 1.
- 2) Connect the MINIQUSB interface board (if I 2 C control is required to test).
- 3) Preset the DC power supply to 3.8V. Turn off the power supply. Do not turn on the power supply until all connections are completed.
- 4) Connect the EV kit to the power supply and meters. Adjust the ammeters to their largest current range to minimize their series impedance. Do not allow the ammeters to operate in their autorange mode. If current readings are not desired, short across the ammeters.
- 5) Turn on the power supply.
- 6) Switch JU2 to VIO (1-2) to enable the MAX77801.
- 7) Apply load for desired test. If reading register (e.g., reading status register) or writing register (e.g., programming specific output voltage) is required, then proceed to step 8.
- 8) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, MAX77801Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 9) Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder. The program files are copied and icons are created in the Windows Start | Programs menu.
- 10)  Connect the USB cable from the PC to the MINIQUSB board.
- 11)  Start the EV kit software by opening its icon in the Start | Programs menu. The EV kit software main window appears, as shown in Figure 2.
- 12)  The EV kit is now ready for testing.

## Evaluates: MAX77801

## Detailed Description of Software

The  GUI  shown  in  Figure  2  is  the  main  window  of  the MAX77801  EV  kit  software  that  provides  a  convenient means to control the MAX77801 IC. Use the mouse or press the Tab key to navigate through the GUI controls.

The EV kit software main window consists of two tabs, CHIPID/STATUS/CONFIG (Figure  2)  and  VOUT\_DVS

Evaluates: MAX77801

(Figure  3).  The CHIPID/STATUS/CONFIG tab  sheet provides  group  boxes,  checkboxes,  and  pushbuttons of  the  CHIP  ID  read,  STATUS of alarm, CONFIG1, and CONFIG2.  VOUT\_DVS  tab  sheet  provides  access  to control  OUTPUT voltage depending on DVS pin status. Refer to register description in the MAX77801 data sheet.

Figure 2. MAX77801 Evaluation Kit Software Window (CHIPID/STATUS/CONFIG Tab)

<!-- image -->

│

Evaluates: MAX77801

Figure 3. MAX77801 Evaluation Kit Software Window (VOUT\_DVS Tab)

<!-- image -->

## MAX77801 Evaluation Kit

## Detailed Description of Hardware

The  MAX77801  EV  kit  demonstrates  the  MAX77801 buck-boost. It regulates output from input voltage ranges from  2.3V  to  5.5V.  Programmable  output  range  is  from 2.6V to 4.1875V with 12.5mV step. The EV kit is suited

Table 1. Jumper Functions

| JUMPER   | NODE OR FUNCTION      | SHUNT POSITION   | FUNCTION                                                            |
|----------|-----------------------|------------------|---------------------------------------------------------------------|
| JU1      | VIO                   | 1-2*             | VIO is supplied from an onboard 1.8V LDO(U1)                        |
| JU1      | VIO                   | 2-3              | VIO is supplied from MINIQUSB board                                 |
| JU2      | EN                    | 1-2              | Connecting EN to VIO (MAX77801 is enabled)                          |
| JU2      | EN                    | 2-3*             | Connecting EN to GND (MAX77801 is disabled)                         |
| JU3      | DVS                   | 1-2              | Connecting DVS to VIO, output voltage is set by VOUT_DVS_H register |
| JU3      | DVS                   | 2-3*             | Connecting DVS to GND, output voltage is set by VOUT_DVS_L register |
| JU4      | Input for onboard LDO | OPEN             | Disconnect onboard LDO input                                        |
| JU4      | Input for onboard LDO | 1-2*             | Inboard LDO is supplied from VIN                                    |
| JU5      | SDApullup             | OPEN*            | No pullup for SDA                                                   |
| JU5      | SDApullup             | 1-2              | SDApin is pulled up to VIO through 2.2kΩ                            |
| JU6      | SCL pullup            | OPEN*            | No pullup for SCL                                                   |
| JU6      | SCL pullup            | 1-2              | SCL pin is pulled up to VIO through 2.2kΩ                           |

Evaluates: MAX77801

with  a  general  DC  input.  By  connecting  an  external MINIQUSB, and launching the EV kit software, the user can adjust output voltage can be reported the status of buck-boost on the EV kit GUI. Table 1 lists jumpers and associated functions that are available on the EV kit.

│

## MAX77801 Evaluation Kit

## Component List

| PART        |   QTY | DESCRIPTION                                                              |
|-------------|-------|--------------------------------------------------------------------------|
| C1          |     1 | 10μF ±5%, 6.3V X5R ceramic capacitor (0603) TDK CGB3C1X5R0J106M065AC     |
| C2, C8, C9  |     3 | 1μF ±10%, 6.3V X5R ceramic capacitors (0402) Murata GRM155R60J105KE19    |
| C3          |     1 | 0.1μF ±10%, 10V X5R ceramic capacitor (0402) Taiyo-Yuden LMK105BJ104KV-F |
| C4          |     1 | 47μF ±20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J476M125AC     |
| C5, C7, C10 |     0 | Capacitors, not installed                                                |
| C6          |     0 | 100µF capacitor, not installed                                           |
| J1          |     1 | 20-pin, right-angle connector Sullins PPTC102LJBN-RC                     |

## Component Suppliers

| SUPPLIER    | PHONE        | WEBSITE                     |
|-------------|--------------|-----------------------------|
| TDK         | 847-803-6100 | www.comopnent.tdk.com       |
| Murata      | 770-436-1300 | www.murata-northamerica.com |
| Taiyo-Yuden | 603-669-7587 | www.t-yuden.com             |
| Sullins     | 760-774-0125 | www.sullinselectronics.com  |
| Samtec      | 800-726-8329 | www.samtec.com              |
| Coilcraft   | 847-639-6400 | www.coilcraft.com           |

Note: Indicate that you are using the MAX77801 when contacting these component suppliers.

Evaluates: MAX77801

| PART          |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| JU1, JU2, JU3 |     3 | 3-pin straight connectors Samtec TSW-103-07-L-S                        |
| JU4, JU5, JU6 |     3 | 2-pin straight connectors Samtec TSW-102-07-T-S                        |
| L1            |     1 | 1µH ±20% inductor, I SAT = 8.7A, DCR = 13.25mΩ Coilcraft XAL4020-102ME |
| R1            |     1 | 100kΩ ±1% resistor (0402)                                              |
| R2, R3        |     2 | 2.2kΩ ±1% resistors (0402)                                             |
| R4            |     1 | 0Ω resistor (0402)                                                     |
| U1            |     1 | Buck-boost (20 WLP) Maxim MAX77801EWP+                                 |
| U2            |     1 | Voltage regulator (5 SC70) Maxim MAX8511EXK18+                         |
| -             |     1 | PCB: MAX77801EVKIT                                                     |

│

Evaluates: MAX77801

Figure 4. MAX77801 EV Kit Schematic

<!-- image -->

Figure 5. MAX77801 EV Kit Component Placement Guide-Top Side

<!-- image -->

## Evaluates: MAX77801

Figure 6. MAX8971 EV Kit PCB Layout-Top Side

<!-- image -->

Figure 7. MAX8971 EV Kit PCB Layout-Bottom Side

<!-- image -->

## Ordering Information

| PART           | TYPE           |
|----------------|----------------|
| MAX77801EVKIT# | EV kit         |
| MINIQUSB+      | Command module |

# Denotes RoHS compliant.

+Denotes a lead(Pb)-free/RoHS-compliant package.

Evaluates: MAX77801

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 2/15            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77801