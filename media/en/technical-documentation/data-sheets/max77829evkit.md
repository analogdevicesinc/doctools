<!-- lastmod 2022-08-03 -->
## MAX7829 Evaluation Kit

## General Description

The MAX77829 is a high-performance companion PMIC for the latest 3G/4G smartphones and tablets. The PMIC includes a single input 2.0A switched-mode charger with reverse boost capability and adapter input protection up to 22V (DC) for one-cell lithium ion (Li+) battery, a safeout LDO, and WLED backlight driver supporting up to 25mA/ string, 35V output voltage. It also features a dual-channel 1.5A (combined, 750mA/ch) flash LED driver (with torch mode included).

The MAX77829 evaluation kit (EV kit) is a fully assembled and  tested  printed  circuit  board  that  demonstrates  the functionality  and  performance  of  MAX77829.  The  EV kit  allows  for  easy  evaluation  of  each  block  and  feature. In the package, one set of MINIQUSB from Maxim (serves as an I 2 C to USB interface) is provided with the MAX77829 EV kit for easy testing.

Windows®-based software provides a user-friendly interface to exercise the features of the MAX77829. This software offers a graphical user interface (GUI) as well as a register-based interface.

## Benefits and Features

- EV Kit Includes All the Necessary Components for Device Operation in Addition to Many Components for Added Flexibility and Ease of Use
- Easy-to-Use Pushbutton Interface for On/Off Control
- Assembled and Tested
- Test Points Allowing Convenient Access to Nodes of Interest
- Lead-Free and RoHS Compliant
- Jumper Headers Acting as Both Test Points and Shunts

Ordering Information appears at end of data sheet.

Windows is a registered trademark and service mark of Microsoft Corporation.

## Quick Start

## Hardware and Jumper Configuration

Following the jumper configuration as listed in Table 1 and Figure 1:

## Table 1. MAX77829 Evaluation Kit Jumper Configuration

| JUMPER     | TYPE   | FUNCTION                                                               | DEFAULT CONDITION   |
|------------|--------|------------------------------------------------------------------------|---------------------|
| JU1        | 2-pin  | Connecting WLED1, LED String 1                                         | Install             |
| JU2        | 2-pin  | Connecting WLED2, LED String 2                                         | Install             |
| JU3        | 2-pin  | Connecting THM potentiometer                                           | Install             |
| JU4, JU13  | 3-pin  | Short 1 or 2 LEDs in LED String 1 and 2, respectively                  | Open                |
| JU12, JU14 | 2-pin  | Connecting THM Potentiometer                                           | Open                |
| JU5, JU15  | 2-pin  | Connecting IN_FLED1 and IN_FLED2 pins and the flash LEDs, respectively | Install             |
| JU6        | 2-pin  | Connecting THM Potentiometer                                           | Install             |
| JU7- JU11  | 2-pin  | Connecting THM Potentiometer                                           | Open                |
| JU16       | 2-pin  | Connecting THM Potentiometer                                           | Install             |
| JU17       | 2-pin  | Connecting THM Potentiometer                                           | Install             |
| JU18       | 2-pin  | Connecting THM Potentiometer                                           | Open                |

<!-- image -->

Evaluates: MAX7829

Figure 1. MAX77829 Evaluation Kit Jumper Header Configuration

<!-- image -->

## MAX77829 Evaluation Kit

## GUI Software Installation Procedure

Use the following procedure to connect to the EV kit with the GUI:

- 1) Ensure the USB-I2C interface module (MINIQUSB) firmware has been correctly installed on your computer. For more information with regarding to MINIQUSB, visit: http://www.maximintegrated. com/datasheet/index.mvp/id/5311
- 2) Unzip it and run the provided MAX77829 EV kit GUI execution file. Follow the prompts on screen.
- 3) For the connection among PC, MINIQUSB, and the MAX77829 EV kit, see Figure 2. MINIQUSB is connected to the MAX77829 EV Kit through the 20-pin connector.
- 4) Connect a suitable DC power supply between DCIN and ground on the EV kit, or plug in the J7 MicroUSB port with a connected USB cable.
- 5) Launch the MAX77829 GUI. The GUI automatically detects the MINIQUSB interface and the MAX77829.
- 6) If connection is successful, the full set of registers in the MAX77829 can now be accessed through the GUI.

Evaluates: MAX77829

Figure 2. MAX77829 Evaluation Kit and MINIQUSB Connection

<!-- image -->

│

## MAX77829 Evaluation Kit

## Start Guide

Before proceeding to the start guide, it is highly recommended  to  read  the  MAX77829  data  sheet  and  other related document to get familiar with its functions, registers, and settings.

Upon finishing  the  connection  as  mentioned  in  previous section, launch the GUI, and the following screen appears:

Evaluates: MAX77829

The  GUI  groups  the  related  functions  to  several  tabs. For example, charger configuration related functions are grouped in tabs such as CHG\_CNFG(1), CHG\_CNFG(2), and CHG\_CNFG(3), etc. Top-level interrupt related functions are grouped into tab INTSRC &amp; PMIC ID, and INT (TOPSYS/FLASH), etc.

Figure 3. MAX77829 GUI

<!-- image -->

│

## MAX77829 Evaluation Kit

## Charger-Related Registers

Charger-related registers are mainly grouped to the follow tabs:  CHG\_CNFG(1),  CHG\_CNFG(2),  CHG\_CNFG(3), and CHG INT &amp; DETAILS.

Several  critical  charger-related  settings  are  protected in  the  registers,  these  registers  can  be  programmed after being unlocked. It can be done by clicking Unlock CHGPROT or selecting the correct setting of CHGPROT bits, as shown in Figure 4.

To quickly check the charger function, use the following procedure:

- 1) Ensure the EV kit is properly connected and powered. Go to tab CHG\_CNFG(1), as shown in Figure 5, and set up the related the settings for the charger settings. A quick setting guide for related

## Evaluates: MAX77829

registers is provided below; other different settings are available.

CHGCTL1→CHGPROT → by 11 = unlocked

- 2) Go to tab CHG\_CNFG(2).
- 3) Set the registers as follows:
- DCCRNT → DCILMT → No Limit
- CHGCTL2 → Enable DCILIM\_EN
- CHGCTL2 → Enable CEN
- 4) With a battery connected between BATTP and GND, the indicating LED (D102) starts blinking, meaning the charging has started.
- 5) Charging status can be monitored through registers in tab CHG INT AND DETAILS . Clicking Read All , CHG\_DTLS → CHG\_DTLS gives the charging status that the battery is currently involved in, as indicated in Figure 8.

Figure 4. MAX77829 GUI-Unlock CHGPROT

<!-- image -->

│

Figure 5. MAX77829 GUI-Charger Configuration 1

<!-- image -->

Figure 6. MAX77829 GUI-Charger Configuration 2

<!-- image -->

Figure 7. Battery Connection and Charging Indication LED

<!-- image -->

Figure 8. Charger Details

<!-- image -->

## MAX77829 Evaluation Kit

- 6) To verify the reverse boost function of MAX77829's charger, disconnect the power from DCIN, and remove the

battery. Connect power to VSYS, go to tab CHG\_ CNFG(2), and set the registers as follows:

- RBOOST\_CTL1 → Enable RBOOSTEN
- RBOOST\_CTL2 → Set VBYPSET to a voltage level higher than your VSYS input

## Evaluates: MAX77829

Measure the voltage between BYP to GND, the value is set by VBYPSET mentioned in step 6. In addition, for the USB OTG mode, check the OTG\_ EN bit as shown in Figure 10. In such condition, the switch between BYP and DCIN is turned on so that the same voltage level on BYP is now applied on DCIN node.

Figure 9. Reverse Boost Mode

<!-- image -->

Figure 10. Enable OTG Mode

<!-- image -->

## MAX77829 Evaluation Kit

## Flash/Torch-Related Registers

To check the flash/torch function, use the following procedure:

- 1) Go to tab FLASH(1) , and set up the related the settings for the flash or torch settings:
- FLASH\_FLED1\_EN → by FLASHEN
- TORCH\_FLED2\_EN → by FLASHEN
- FLASH\_TMR\_DUR and TORCH\_TMR\_DUR → to preferred time duration
- FLASH\_I and TORCH\_I → to preferred current level
- 2) Go to tab FLASH(2) , for VOUT\_CNTL. In the dropdown menu for BOOST\_FLASH\_MODE , select FLED1 in adaptive .
- 3) Press the Flash EN pushbutton on the board, the flash function is enabled. The torch mode can be set in a similar way.

## Evaluates: MAX77829

## WLED Backlight-Related Registers

For the WLED backlight-related registers, see Figure 11. Set  the  register  WLEDBSTCNTL  control  for  desirable WLED related register settings.

Figure 11. WLED Related Register Setting

<!-- image -->

## Component List, Schematic List, and PCB Layout

See the  folllowing  links  for  component  list,  schematics, and PCB layout:

- MAX77829 EVKIT BOM
- MAX77829 EVKIT schematics
- MAX77829 EVKIT PCB

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX77829EVKIT# | EV kit |

#Denotes RoHS compliant.

│

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1 2 /15         | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX77829

| MAX77829 Item   | BILL OF Qty   | MATERIALS (BOM), Reference Designator                                  | Rev 0; 11/15 Description                                                                                                                                                      | Part Name                             | Assembly   |
|-----------------|---------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------|------------|
| 1               | 1             | C4                                                                     | 0.1 µ F ±10%, 16V X7R ceramic capacitor 0402                                                                                                                                  | Murata, GRM155R71C104K                |            |
| 2               | 1             | C3                                                                     | 0.47µF ±10%, 6.3V X7R ceramic capacitor 0603                                                                                                                                  | Taiyo Yuden, JMK107BJ474KA-T          |            |
| 3               | 6             | C5 C8-9 C77-79                                                         | 10µF, 6.3V, X5R, ±10% Ceramic Capacitor 0603                                                                                                                                  | Taiyo Yuden, JMK107ABJ106MA-L         |            |
| 4               | 3             | C11, C13-14                                                            | 1µF, 10V, X5R, ±20%, Ceramic Capacitor, 0402                                                                                                                                  | Taiyo-Yuden, LMK105BJ105MA            |            |
| 5               | 1             | C62                                                                    | 1.0µF, 50V, X5R, ±10% Ceramic Capacitor 0603                                                                                                                                  | Murata, GRM188R61H105MAALD            |            |
| 6               | 2             | C1 C6                                                                  | 2.2µF 25V X5R Ceramic Capacitor, 0603                                                                                                                                         | TDK, C1608X5R1E225M                   |            |
| 7               | 1             | C7                                                                     | 2.2µF 6.3V X5R Ceramic Capacitor 0603                                                                                                                                         | Murata, GRM188R60J225ME19D            |            |
| 8               | 1             | C10                                                                    | 2.2µF 6.3V X5R Ceramic Capacitor 0402                                                                                                                                         | Murata, GRM155R60J225ME19D            |            |
| 9               | 1             | C12                                                                    | 4.7µF 6.3V X5R Ceramic Capacitor 0603                                                                                                                                         | Taiyo Yuden, JMK107BJ475KA-T          |            |
| 10              | 4             | C2 C80-82                                                              | Open Ceramic Capacitor, 0603                                                                                                                                                  |                                       | NP         |
| 11              | 1             | C15                                                                    | Open Ceramic Capacitor 0402                                                                                                                                                   |                                       | NP         |
| 12              | 1             | C84                                                                    | 100µF, 6.3V, Tantalum Capacitor, 1210                                                                                                                                         | AVX, TCJB107M006R0070                 |            |
| 13              | 1             | U1                                                                     | PMIC, 0.4MM PITCH, 7X8 WLP                                                                                                                                                    | Maxim, MAX77821                       | NP         |
| 14              | 1             | J1                                                                     | CONNECTOR, THROUGH HOLE, .100" x .100" LATCH/EJECTOR HEADER, MALE, STRAIGHT ANGLE, 4 WALL, 40 PIN, FOR .094" TO .125" [2.39mm TO 3.18mm] THICK BOARD, Ic=1A, 55°C TO +105 ° C | - 3M, 3432-6303                       | NP         |
| 15              | 1             | CON1 D102                                                              | 2X10 right angle female LED, Green 0603                                                                                                                                       |                                       |            |
| 16              | 1             |                                                                        | receptacle SMBUS                                                                                                                                                              | LITE-ON LTST-C190GKT                  |            |
| 17              | 1             | Q1                                                                     | Single P-Ch Power Trench MOSFET, uFET 2X2                                                                                                                                     | Fairchild, FDMA905P                   |            |
| 18 19           | 2 1           | JU4 JU13 L1                                                            | 3 Pin Header, 0.1" 1µH, +/-30%, 46mohm typ,                                                                                                                                   | Cut to size Cyntec, PIME031B-1R0MS    |            |
| 20              | 1             | L2                                                                     | 4.7µH, 216 mohm typ, 1.6A, 2520                                                                                                                                               | Toko, 1239AS-H 4R7N                   |            |
| 21              | 16            | JU1-3 JU5-12 JU14-18                                                   | 2 Pin Header, 0.1"                                                                                                                                                            | Cut to size                           |            |
| 22              | 20            | D2-17 D19-22                                                           | WHITE LIGHT EMITTING                                                                                                                                                          | OSRAM, LW-Y1SG                        |            |
|                 | 2             |                                                                        | DIODE                                                                                                                                                                         |                                       |            |
| 23 24           | 7             | D18 D23 BATTP GND1-3 GND5 PGCHG                                        | Flash LED White                                                                                                                                                               | OSRAM, LED_LW_F65G or OSRAM, LUW FQ6N |            |
| 25 26           | 4 1           | VSYS M1-4                                                              | Maxim Loop Mounting Hole                                                                                                                                                      | Do not mount                          | NP         |
| 27              | 4             | R2 R6 R20 R32-33                                                       | 0 SMT Resistor, 0603 0 SMT Resistor, 0402                                                                                                                                     |                                       |            |
| 28 29           | 1 1           | R3 R4                                                                  | 1M SMT Resistor, 0603 47m SMT Resistor, 0603                                                                                                                                  |                                       | NP         |
| 30              | 1             | R1                                                                     | Open SMT Resistor, 0603                                                                                                                                                       |                                       |            |
| 32              | 2             | R7 R9                                                                  |                                                                                                                                                                               |                                       |            |
| 31              | 3             | R21-23                                                                 |                                                                                                                                                                               |                                       |            |
| 33              | 1             | R29                                                                    |                                                                                                                                                                               |                                       |            |
| 34 35           | 2 1           | R24-25                                                                 | 470 SMT Resistor, 0402                                                                                                                                                        |                                       |            |
| 36              | 1             | R26 R5                                                                 |                                                                                                                                                                               |                                       |            |
| 37 38           | 6 2           | R10-14 R28                                                             | Open SMT Resistor, 0402                                                                                                                                                       |                                       | NP         |
| 39              | 1             | R8 R30 D1                                                              | 40V, 1A Schottky diode,                                                                                                                                                       | Bourns, 3214W-1-105E                  |            |
|                 |               |                                                                        | SOD323                                                                                                                                                                        | Central Semi, CMDSH05-4               |            |
| 40              | 3             | SW1-TORCHEN SW4-FLASHEN SW4-MRSTB                                      | Momentary switch                                                                                                                                                              | Pansonic, EVQ-PHV03T                  |            |
| 41              | 11            | AVL CHGIND FETDRV FLASHEN INOKB MBATDETB PVL THM TORCHEN VICHG WLEDPWM | Test Point small, Red                                                                                                                                                         | Keystone, 5000                        |            |
| 42              | 5             | MRSTB RESETB SCL SDA INTB                                              | Test Point small, White                                                                                                                                                       | Keystone, 5002                        |            |
| 43              | 7             | SAFEOUT INFLED VBYP WLEDOUT GND BATTN DCIN                             | Test Point Big, Red                                                                                                                                                           | Keystone, 5010                        |            |
| 45              | 2             | DMDP                                                                   | Test Point                                                                                                                                                                    | PCB Test Point                        |            |
| 46              | 1             | J7                                                                     | Micro AB receptacle SMD type, Bottom Mount                                                                                                                                    | Hirose, ZX62-AB-5PA                   |            |

<!-- image -->

<!-- image -->

O

1

Br

F

0O

ooo

QO

000

O

YD

O

L

ITFL

O

0口

8

O

O

0O

O

O

00

O

口

C

口○

88888

888888

O

000000

8

O

O

8

88

8888

O

0OOOOO

O

O

00

口

C

00

O

O

O

00

00

00

O

0

88

8

O

0O00000000000O

OOOOOOOOOOOOOOO

O

O

O

O

O

8

O

O

0000

0000

○

8888

O

O

O

0

O

O

GND2

DM

P

TORCHEN

SW1-TORCHEN

DCIN

R23

INTB

D102

SAFEO D18

SW4-MRSTB

SW4-FLASHEN

JU1

FLASHEN

INFLED

R26CHGIND

JU5

2

JU15

MRSTB

2

R

JU2

SAFEOUT

JU13

JU4

2

2

33

D2

2

GND5

JU12

2

INOKB

R9

AVL

98

UU

C15

MBATDETB

R33

R29

R32 RESETBVICHG

WLEDPWM

R22

JU7

JU9

R28

JU10

C12

JU6

VIO

VSYS

JU14

JU8

2

VBYP

PVL

154V

R20

ND

2

THM

R

JU162

maxim

integratedm

MAX77829EVBOARD

WWW.MAXIMINTEGRATED.COM

1-408-601-1000

FETDRV

JU3

THM

SYS\_A

VSYS

WLEDOUT

R14

R13

R1

R1

SDA

ND

84

GND

BATTN

BATTP

GND1

MAX SMBUS

PCB EDGE

CON1

LB 10 2015

REVA