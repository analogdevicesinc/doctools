<!-- lastmod 2022-08-03 -->
## MAX5394M Evaluation Kit

## General Description

The  MAX5394M  evaluation  kit  (EV  kit)  demonstrates the  MAX5394M  single,  256-tap  volatile,  low-voltage  linear digital  potentiometer. The device comes in an 8-pin TDFN-EP package. The EV kit provides controls to adjust the wiper and shutdown modes.

The  digital  potentiometer  is  controlled  by  an  on-board MAXQ® microcontroller  that  provides  an  SPI  interface. The  EV  kit  features  Windows  XP ® -,  Windows  Vista ® -, and  Windows ®   7-compatible  software  that  provides  a simple  graphical-user  interface  (GUI)  for  exercising  the device features.

The  EV  kit  comes  with  the  MAX5394MATA+  (50kΩ end-to-end  resistance)  installed.  Contact  the  factory  for samples  of  the  pin-compatible  MAX5394LATA+  (10kΩ end-to-end  resistance)  and  MAX5394NATA+  (100kΩ end-to-end resistance).

## Component List

| DESIGNATION                                                                                             |   QTY | DESCRIPTION                                                       |
|---------------------------------------------------------------------------------------------------------|-------|-------------------------------------------------------------------|
| BYP, CS &#124;ADDR0&#124;CS/L, DIN&#124;SDA&#124;UD, H, L, QPEDB&#124;ADDR1, SCLK&#124;SCL&#124;INC/L,W |     8 | White test points                                                 |
| B_INC/L                                                                                                 |     1 | Pushbutton switch                                                 |
| C1, C3, C23                                                                                             |     3 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K  |
| C2                                                                                                      |     1 | 100pF ±5%, 50V C0G ceramic capacitor (0603) Murata GQM1885C1H101J |
| C5-C18, C24                                                                                             |    15 | 1µF ±10%, 16V X5R ceramic capacitors (0603) Murata GRM188R61C105K |
| C19, C20                                                                                                |     2 | 18pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H180J |

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluates: MAX5394L-MAX5394N

## Features

- 1.7V to 5.5V Wide Input Supply Range
- Supports All SPI Family of Devices: 10kΩ, 50kΩ, and 100kΩ End-to-End Resistance
- On-Board Microcontroller to Generate SPI Commands
- Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- USB-Powered (Cable Included)
- Fully Assembled and Tested with Proven PCB Layout

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C21           |     1 | 1000pF ±10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H102K |
| C25           |     0 | Not installed, ceramic capacitor (0603)                             |
| GND           |     1 | Black test point                                                    |
| J1            |     1 | USB type-B right-angle PC-mount receptacle                          |
| J2            |     0 | Not installed, 10-pin (2 x 5) header                                |
| J3            |     1 | 4-pin header                                                        |
| JU1           |     1 | 3-pin header                                                        |
| JU2           |     1 | 5-pin header                                                        |
| JU3, JU4      |     2 | 10-pin (2 x 5) headers                                              |
| JU5           |     1 | 4-pin header                                                        |
| JU6, JU7      |     2 | 2-pin headers                                                       |
| JU_ID0-JU_ID3 |     0 | Not installed. 2-pin headers                                        |
| L1            |     1 | Ferrite bead (0603) TDK MMZ1608R301A                                |
| R1-R3, R5-R9  |     8 | 4.7kΩ ±5% resistors (0603)                                          |

<!-- image -->

## MAX5394M Evaluation Kit

## Component List (continued)

| DESIGNATION         |   QTY | DESCRIPTION                                                    |
|---------------------|-------|----------------------------------------------------------------|
| R12                 |     1 | 100Ω ±5% resistor (0603)                                       |
| R13                 |     1 | 10kΩ ±5% resistor (0603)                                       |
| SW_A0, SW_A1, SW_UD |     3 | DIP switches                                                   |
| TP1-TP3             |     0 | Not installed, test points                                     |
| U1                  |     1 | 50kΩ SPI digital potentiometer (8 TDFN-EP*) Maxim MAX5394MATA+ |
| U2                  |     0 | Not installed, digital potentiometer (10 µMAX ® )              |
| U3-U5               |     3 | Level translators (10 µMAX) Maxim MAX1840EUB+                  |
| U7                  |     1 | Microcontroller (64 LQFP) Maxim MAXQ622G-0000+                 |

## Component Suppliers

| SUPPLIER        | PHONE        | WEBSITE                |
|-----------------|--------------|------------------------|
| Murata Americas | 800-241*6574 | www.murataamericas.com |
| TDK Corp.       | 847-803-6100 | www.component.tdk.com  |

Note: Indicate that you are using the MAX5394M when contacting these component suppliers.

## MAX5394M EV Kit Files

| FILES               | DESCRIPTION                                |
|---------------------|--------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on your computer |
| MAX539XVxx.EXE      | Application program                        |
| USBConverterDLL.DLL | Application library                        |
| UNINSTALL.EXE       | Uninstalls the EV kit software             |

## Quick Start

## Required Equipment

- MAX5394M EV kit (USB cable included)
- Windows XP, Windows Vista, or Windows 7 PC with a spare USB port
- Digital voltmeter (DVM)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

µMAX is a registered trademark of Maxim Integrated Products, Inc.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that all jumpers are in their default positions, as shown in Table 1.
- 2)  Set  the  DVM  to  measure  resistance.  Connect  the negative terminal of the DVM to the L test point and connect the positive terminal to the W test point.
- 3)  Visit www.maximintegrated.com/evkitsoftware to download  the  latest  version  of  the  EV  kit  software, MAX539XGUISetupVxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 4)  Install  the  EV  kit  software  on  your  computer  by  running the INSTALL.EXE program inside the temporary folder.  The  program  files  are  copied  to  your  PC  and icons  are  created  in  the  Windows Start  |  Programs menu.
- 5)  Connect  the  USB  cable  from  the  PC  to  the  EV  kit board; the USB driver is installed automatically.

│

Evaluates: MAX5394L-MAX5394N

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                            |
|---------------|-------|----------------------------------------|
| U8            |     1 | 3.3V LDO (5 SC70) Maxim MAX8511EXK33+  |
| U9            |     1 | 1.8V LDO (5 SC70) Maxim MAX8511EXK18+  |
| U10           |     0 | Not installed, ESD protector (6 SOT23) |
| VDD           |     1 | Red test point                         |
| Y1            |     1 | 12MHz crystal (HCM49)                  |
| -             |     1 | USB high-speed A-to-B cables, 6ft      |
| -             |     6 | Shunts                                 |
| -             |     1 | PCB: MAX5394M EVKIT                    |

## MAX5394M Evaluation Kit

- 6)  Start  the  EV  kit  software  by  opening  its  icon  in  the Start  |  Programs menu.  The  EV  kit  software  main window appears, as shown in Figure 1.
- 7)  Move the wiper scrollbar up until the edit box shows 255 .

Figure 1. MAX5394M EV Kit Software Main Window

<!-- image -->

## Evaluates: MAX5394L-MAX5394N

- 8)  Press the H = Open, W = Unchanged button in the Standby Commands group box.
- 9)  Verify that the DVM measures 50kΩ.

│

## Detailed Description of Software

The  MAX5394M  EV  kit  software  provides  controls  to adjust the wiper and shutdown modes.

## Wiper

The wiper register stores an 8-bit data that ranges from 0-255. There are two ways of changing the wiper register. First is by using the vertical scrollbar, and the other way is through pressing the up-down arrows to the right of the edit  box.  Numbers in the edit box can be in decimal or hexadecimal format by selecting the corresponding radio buttons in the Number Format group box.

## Standby Commands

The buttons within the Standby Commands group  box allows  the  user  to  change  the  H,  W,  or  L  terminals  to open with the wiper position set to zero code, mid code, full code, or the value contained in the wiper register. The Clear Standby button is used to remove any shutdown conditions  and  return  the  wiper  register  to  its  original stored value. Refer to the MAX5394 IC data sheet for a detailed description of the standby commands.

## Reset

Press the Reset button to return to the POR settings. This resets the wiper register to midscale (0x80), enables the charge pump, and deasserts any shutdown modes.

## Charge Pump

Press  the QP ON button  in  the SPI  Commands group box to enable the internal charge pump that allows lowsupply voltage operation. To disable the internal charge pump, press the QP OFF button. The device's minimum

## Evaluates: MAX5394L-MAX5394N

supply  voltage  with  charge  pump  disabled  is  limited  to 2.6V  and  the  terminal  voltage  cannot  exceed  -0.3V  to (V DD  + 0.3V).

## Detailed Description of Hardware

The MAX5394M EV kit provides a proven layout for the MAX5394M. An on-board MAXQ622 microcontroller and jumpers  to  disconnect  the  on-board  microcontroller  are included on the EV kit.

## User-Supplied Power Supply

The EV kit is powered completely from the USB port by default. To power the device with a user-supplied power supply, move the shunt on jumper JU1 to the 2-3 position and apply a 1.7V to 5.5V power supply at the VDD test point and the GND test point on the EV kit.

## User-Supplied SPI

To evaluate the EV kit with a user-supplied SPI bus, move the shunt on jumper JU2 to the 1-4 position, jumper JU3 to the 7-8 position, and jumper JU4 to the 7-8 position. Apply the  user-supplied CS to  the CS |ADDR0|CS/L test  point, the user-supplied DIN to the DIN|SDA|UD test point, and the user-supplied SCLK to the SCLK|SCL|INC/L test point.

## User-Supplied H and L

Remove the shunts from jumpers JU6 and JU7 and apply a  user-supplied  voltage  at  the  H  and  L  test  points. The voltage range for H and L is 0 to 5.25V and is independent of the V DD  operating voltage.

## Table 1. EV Kit Jumper Settings

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                                                                 |
|----------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects the V DD pin of the U1 device to the on-board 1.8V supply.                                                                         |
| JU1      | 1-3              | Connects the V DD pin of the U1 device to a user-supplied power supply between 1.7V to 5.5V.                                                |
| JU2      | 1-2*             | Connects the CS pin of the U1 device to the CS signal of the on-board microcontroller.                                                      |
| JU2      | 1-3              | Do not install.                                                                                                                             |
| JU2      | 1-4              | Connects the CS pin of the U1 device to a user-supplied CS signal. Apply appropriate signal to the CS &#124;ADDR0&#124;CS/L test point.     |
| JU2      | 1-5              | Do not install.                                                                                                                             |
| JU3      | 1-2*             | Connects the DIN pin of the U1 device to the DIN signal of the on-board microcontroller.                                                    |
| JU3      | 3-4              | Do not install.                                                                                                                             |
| JU3      | 5-6              | Do not install.                                                                                                                             |
| JU3      | 7-8              | Connects the DIN pin of the U1 device to a user-supplied DIN signal. Apply appropriate signal to the DIN&#124;SDA&#124;UD test point.       |
| JU3      | 9-10             | Do not install.                                                                                                                             |
| JU4      | 1-2*             | Connects SCLK pin of the U1 device to the SCLK signal of the on-board microcontroller.                                                      |
| JU4      | 3-4              | Do not install.                                                                                                                             |
| JU4      | 5-6              | Do not install.                                                                                                                             |
| JU4      | 7-8              | Connects the SCLK pin of the U1 device to a user-supplied SCLK signal. Apply appropriate signal to the SCLK&#124;SCL&#124;INC/L test point. |
| JU4      | 9-10             | Do not install.                                                                                                                             |
| JU6      | Installed*       | Connects the H pin to the V DD pin of the U1 device.                                                                                        |
| JU6      | Not installed    | User-supplied H. The user must apply a voltage at the H test point. The voltage range for the H pin is 0 to 5.25V.                          |
| JU7      | Installed*       | Connects the L pin of the U1 device to ground.                                                                                              |
| JU7      | Not installed    | User-supplied L. The user must apply a voltage at the L test point. The voltage range for the L pin is 0 to 5.25V.                          |

Evaluates: MAX5394L-MAX5394N

│

Figure 2a. MAX5394M EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

Figure 2b. MAX5394M EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

## MAX5394M Evaluation Kit Evaluates: MAX5394L-MAX5394N

Figure 3. MAX5394M EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX5394M EV Kit PCB Layout-Component Side

<!-- image -->

│

Figure 5. MAX5394M EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 6. MAX5394M EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Figure 7. MAX5394M EV Kit PCB Layout-Solder Side

<!-- image -->

│

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5394MEVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX5394M Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX5394L-MAX5394N