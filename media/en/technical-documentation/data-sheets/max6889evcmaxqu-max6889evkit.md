<!-- lastmod 2022-08-04 -->
## MAX6889 Evaluation Kit/ Evaluation System

## General Description

The  MAX6889  evaluation  system  (EV  system)  consists of  a  MAX6889  evaluation  kit  (EV  kit)  and  a  Maxim CMAXQUSB command module. The MAX6889/MAX6892 EEPROM-configurable, multivoltage power-supply sequencers/supervisors monitor several voltage-detector inputs,  two  auxiliary  inputs,  and  four  general-purpose logic inputs and feature programmable outputs for highly configurable power-supply sequencing applications. The evaluation  software  runs  under  Windows ®   98/2000/XP, providing a handy user interface to exercise the features of the MAX6889.

Order the complete EV system (MAX6889EVCMAXQU) for  comprehensive  evaluation  of  the  MAX6889  using  a personal computer. Order the EV kit (MAX6889EVKIT) if the command module has already been purchased with a previous Maxim EV system or for custom use in other microcontroller (μC)-based systems.

This  system  can  also  evaluate  the  MAX6892.  Contact factory for a free sample of MAX6892ETJ.

## MAX6889 Stand-Alone EV Kit

The MAX6889 EV kit provides a proven PC board layout to facilitate evaluation of the MAX6889. It must be interfaced to appropriate timing signals for proper operation. Connect 3.3V power, ground-return, and SCL/SDA interface signals to the breakout header pins (see Figure 9). The LEDs are optional circuits,  which  may  be  powered separately or disabled altogether. Refer to the MAX6889 data sheet for timing requirements.

## MAX6889 EV System

The MAX6889 EV system obtains power from the computer's  USB  port.  The  evaluation  software  runs  under Windows 98/2000/XP on an IBM PC, interfacing to the EV system board through the computer's USB port. See the Quick Start section for setup and operating instructions.

Windows is a registered trademark and registered service mark of Microsoft Corporation.

Evaluate: MAX6889/MAX6892

## Features

- Proven PC Board Layout
- Complete Evaluation System
- Convenient On-Board Test Points
- Fully Assembled and Tested

## Ordering Information

| PART             | TEMP RANGE   | INTERFACE TYPE        |
|------------------|--------------|-----------------------|
| MAX6889EVKIT     | 0°C to +70°C | User-supplied         |
| MAX6889EVCMAXQU# | 0°C to +70°C | Windows software, USB |

#Denotes ROHS compliant with exemption.

Note: The MAX6889 evaluation software is designed for use with the complete evaluation system MAX6889EVCMAXQU (includes CMAXQUSB module together with MAX6889EVKIT). If the MAX6889 evaluation software will not be used, the MAX6889EVKIT board can be purchased by itself, without the CMAXQUSB module.

## Component List

## MAX6889EVCMAXQU System

| PART         |   QTY | DESCRIPTION            |
|--------------|-------|------------------------|
| MAX6889EVKIT |     1 | MAX6889 evaluation kit |
| CMAXQUSB     |     1 | Command module         |

## MAX6889EVKIT

| DESIGNATION    |   QTY | DESCRIPTION                                                 |
|----------------|-------|-------------------------------------------------------------|
| C1, C2         |     2 | 1μF, 6.3V X7R ceramic capacitors (0603) TDK C1608X7R0J105K  |
| C3-C10         |     8 | 0.1μF, 25V X7R ceramic capacitors (0603) TDK C1608X7R1E104K |
| C11, C12       |     0 | Not installed, capacitors (0603)                            |
| H1-H4          |     4 | 8-pin headers                                               |
| JU1, JU12-JU21 |    11 | 2-pin headers                                               |
| JU2-JU11       |    10 | 3-pin headers                                               |
| LED1-LED10     |    10 | LEDs, red (T1-3/4)                                          |
| P1             |     1 | 2 x 10 right-angle receptacle                               |
| R1-R10         |    10 | 470Ω ±5% resistors (0805)                                   |
| U1             |     1 | MAX6889ETJ (32-pin thin QFN)                                |
| None           |    17 | Shunts                                                      |
| None           |     1 | MAX6889 EV kit PC board                                     |

<!-- image -->

## MAX6889 Evaluation Kit/ Evaluation System

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE           |
|------------|--------------|--------------|-------------------|
| TDK        | 847-803-6100 | 847-390-4405 | component.tdk.com |

Note: Indicate you are using the MAX6889 when contacting this component supplier.

## Quick Start

## Required Equipment

Before you begin, the following equipment is needed:

- Maxim MAX6889EVCMAXQU (contains MAX6889 EV kit board and CMAXQUSB module)
- USBA-B cable (included with CMAXQUSB module)
- Windows 98/2000/XP computer with a USB port
- Administrator privileges may be required when first installing the device on Windows 2000/XP

## Procedure

## Do not turn on the power until all connections are made:

- 1) Set the CMAXQUSB's VDD Select jumper to 3.3V .
- 2) Ensure  that  the  MAX6889  EV  kit's  JU1  is  in  1-2 position,  JU2-JU5  are  open,  JU6-JU10  are  in  2-3 position, JU11-JU21 are in 1-2 position, and JU22 is intact. See Jumper Function Tables section.
- 3) Carefully  connect  the  boards  by  aligning  the  20pin  header  of  the  MAX6889  EV  kit  with  the  20-pin connector of the CMAXQUSB module. Gently press them together. The two boards should be flush against one another.
- 4) Install  the  evaluation  software  on  your  computer by  running  the  INSTALL.EXE  program  on  the  disk. The program files are copied and icons are created for them in the Windows Start Menu.
- 5) Connect  the  USB  cable  between  the  CMAXQUSB and the computer. The plug-and-play system automatically launches the New Hardware Wizard to find the device drivers on the installation disk. When prompted for a device driver, navigate to the directory where the software was installed (C:\MAX6889).
- 6) Start the MAX6889 program by opening its icon in the Start Menu.
- 7) If  supplies  exceeding  V CC   are  applied  to  IN1-IN5 while VCC source = 0, the part will be damaged. Click on VCC  source control  at  the  bottom  left  of  block diagram (Figure 1) to toggle VCC source bit.

## Detailed Description of Software

## Main Window

The  evaluation  software's  main  window  shows  a  block diagram of the MAX6889, with many 'clickable' features (Figure 1). Clicking on different parts of the block diagram leads  to  different  feature  tabs.  Clicking Back returns  to the main window's block diagram tab.

Configuration  register  changes  made  with  the  GUI  are written when the Apply button is clicked. Configuration of the device may be re-read by clicking Refresh .

Press function key F1 at any time to return to the block diagram.  Press  function  key  F2  to  pop-up  a  window displaying  registers  pertinent  to  the  selected  feature (Figure 2). The software reads the data registers automatically, unless disabled by unchecking Poll inputs every 2 seconds under the Options menu.

At  startup,  the  evaluation  software  reads  the  device configuration from the device registers.

## Voltage Monitor Tab

The Voltage  Monitor tab  configures  voltage  monitor thresholds (Figure 3).

High-impedance mode requires installing external resistor-dividers. A prototype area is provided on the EV kit for this purpose.

## Digital Inputs Tab

Digital  inputs  GPI1-GPI4  can  be  configured  for  activehigh  or  active-low  logic  (Figure  4).  When  a  GPI\_  pin is  configured  active-high,  a  logic-high  level  asserts  the corresponding GPI\_ input.

## Outputs Tab

The PO\_ signals assert when a selected combination of other  signals  become  asserted  (Figure  5).  The  voltage monitors  and  the  watchdog  timer  are  internal  signals. The GPI\_ pins and MR are external inputs.

│

Evaluate: MAX6889/MAX6892

## MAX6889 Evaluation Kit/ Evaluation System

When  a  PO\_  signal  is  asserted,  several  actions  may occur.  The  corresponding  PO\_  pin  can  be  driven  to  a high or low logic level. The pin driver can be configured as open-drain or as a push-pull output.

User EEPROM writes may optionally be locked out when the PO\_ is asserted.

The MARGIN signal  allows  user  system  testing,  by forcing the PO\_ signal to hold its previously determined state.  It  is  expected  that MARGIN will  be  high  during normal operation.

## Watchdog Timer Tab

The watchdog timer asserts a fault condition after a period of time, unless the timer is periodically reset by an input pin being toggled (Figure 6).

During  normal  operation,  an  enabled  watchdog  timer must  be  serviced  by  toggling  a  GPI  pin  periodically. Typically  an  external  piece  of  firmware  would  service the watchdog timer by toggling a GPI pin inside a loop, and  watchdog  timer  assertion  would  be  configured  to drive a PO\_ output pin. Any software defect that halts the firmware then causes the watchdog timer to assert.

The initial  timeout  period  can  be  set  to  a  longer  value, to allow  time  for software  initialization.  Alternatively, the  watchdog timer can be held in reset by an optional 'clear' input. Refer to the MAX6889 data sheet for more information about watchdog timer operation.

## Registers Tab

The Registers tab displays the volatile working registers of the MAX6889 (Figure 7). Pressing Refresh reads and displays all register values. Individual register bytes can be  modified  by  selecting  the  appropriate  grid  cell  and typing  zero-x  prefix  '0x'  followed  by  two  hexadecimal digits 0-9/A-F. If Options menu item Confirm REG write when editing is checked, a dialog box appears to confirm each byte written in this manner.

At power-up, the MAX6889 automatically loads its registers from the configuration EEPROM. To store the active register  values  into  the  configuration  EEPROM,  press Commit to EEPROM .

Register values can optionally be stored into a text file on disk for later retrieval, using the Load from File and Save to File buttons.

## Evaluate: MAX6889/MAX6892

## EEPROM Tab

The EEPROM tab  displays  the  nonvolatile  EEPROM memory of  the  MAX6889  (Figure  8).  Pressing Refresh reads and displays the selected EEPROM page. Individual memory bytes can be modified by selecting the appropriate  grid  cell  and  typing  zero-x  prefix  '0x'  followed  by two  hexadecimal  digits  0-9/A-F.  If Options menu  item Confirm  EEPROM  write  when  editing is  checked,  a dialog  box  appears  to  confirm  each  byte  written  in  this manner.

EEPROM values can optionally be stored into a text file on disk for later retrieval, using the Load from File and Save to File buttons.

## Detailed Description of Hardware

The MAX6889 (U1) is surrounded by breakout header pins H1-H4. Capacitors C1 and C2 bypass the power supply. The user power-supply inputs IN1-IN8 are bypassed by capacitors C3-C10.

Connector  P1  mates  with  the  CMAXQUSB  module, which  enables  communication  with  software  running on  a  PC  (there  are  SCL/SDA  pullup  resistors  on  the module  board).  As  a  convenience,  the  module  also provides  power  to  U1  through  jumper  JU1.  This  same power  supply  also  powers  most  of  the  EV  kit  LEDs through jumper JU22.

Programmable outputs PO1-PO10 drive optional active-low  LED  indicators.  When  the  LED  is  on,  that indicates that the corresponding PO output is low.

Capacitors  C11  and  C12  are  left  open  when  used  with the  MAX6889.  These  component  sites  are  provided  to support the MAX6892.

## MAX6889 Evaluation Kit/ Evaluation System

## Evaluating the MAX6892

The software and the CMOD board cannot be used with the MAX6892; the board must be operated in stand-alone mode.

- 1) With power off, replace U1 with a MAX6892ETJ.
- 2) Install  user-selected  EIA  size  0603  capacitors  for SWT and SRT at locations C11 and C12. Refer to the Applications Information section in the MAX6892 data sheet.
- 3) Configure  jumpers  JU4-JU11  according  to Table  3, Jumper Function Table in the MAX6892 data sheet.
- 4) Inputs IN2-IN8 require user-selected resistordividers, which may be installed in the prototype area.
- 5) Apply power between V CC  and GND.

Evaluate: MAX6889/MAX6892

The functions of the following pins change as follows:

|   PIN | MAX6889ETJ   | MAX6892ETJ   | CONTROLLED BY   |
|-------|--------------|--------------|-----------------|
|     1 | PO2          | PG2          | -               |
|     2 | PO3          | PG3          | -               |
|     3 | PO4          | PG4          | -               |
|     5 | PO5          | PG5          | -               |
|     6 | PO6          | PG6          | -               |
|     7 | PO7          | PG7          | -               |
|     8 | PO8          | PG8          | -               |
|     9 | PO9          | RESET        | -               |
|    10 | PO10         | WDO          | -               |
|    11 | MARGIN       | MARGIN       | JU2             |
|    12 | MR           | MR           | JU3             |
|    13 | SDA          | TH0          | JU4             |
|    14 | SCL          | TH1          | JU5             |
|    15 | A0           | TH2          | JU6             |
|    16 | A1           | TH3          | JU7             |
|    17 | GPI4         | TH4          | JU8             |
|    18 | GPI3         | SWT          | JU9, C12        |
|    19 | GPI2         | SRT          | JU10, C11       |
|    20 | GPI1         | ENABLE       | JU11            |
|    23 | IN8          | IN8          | -               |
|    24 | IN7          | IN7          | -               |
|    25 | IN6          | IN6          | -               |
|    26 | IN5          | IN5          | -               |
|    31 | N.C.         | WDI          | -               |
|    32 | PO1          | PG1          | -               |

## Diagnostics Window

The  diagnostics  window  is  used  for  factory  testing prior  to  shipping  the  evaluation  kit.  It  is  not  meant  for customer use.

│

## MAX6889 Evaluation Kit/ Evaluation System

Table 1. Jumper Function Table for MAX6889

| JUMPER    | PIN      | POSITION                 | FUNCTION                                                                                                                                         |
|-----------|----------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
|           |          | Open                     | U1 must be powered by a user-supplied external supply connected to IN1-IN5.                                                                      |
| JU1       | V CC     | Closed*                  | U1 input V CC is powered from connector P1 power supply (the CMAXQUSB module). Ensure that CMAXQUSB's VDD select jumper is in the 3.3V position. |
|           |          | 1-2                      | MARGIN connected to DPB.                                                                                                                         |
| JU2       | MARGIN   | Open*                    | Normal operation.                                                                                                                                |
|           |          | 2-3                      | User test mode. PO outputs are held in their previously configured states.                                                                       |
| JU3       |          | 1-2                      | MR connected to DPB.                                                                                                                             |
| JU3       | MR       | Open*                    | Normal operation.                                                                                                                                |
| JU3       |          | 2-3                      | Manual reset.                                                                                                                                    |
| JU4       |          | 1-2                      | Do not use.                                                                                                                                      |
| JU4       | SDA      | Open*                    | Normal operation.                                                                                                                                |
| JU4       |          | 2-3                      | Do not use.                                                                                                                                      |
|           |          | 1-2                      | Do not use.                                                                                                                                      |
| JU5       | SCL      | Open*                    | Normal operation.                                                                                                                                |
|           |          | 2-3                      | Do not use.                                                                                                                                      |
| JU6       | A0       | Open                     | Do not use.                                                                                                                                      |
|           |          | 2-3*                     | A0 = 0.                                                                                                                                          |
|           |          | 1-2                      | A1 = 1.                                                                                                                                          |
| JU7       | A1       | Open                     | Do not use.                                                                                                                                      |
|           |          | 2-3*                     | A1 = 0.                                                                                                                                          |
| JU8       |          | 1-2                      | Input GPI4 is driven high.                                                                                                                       |
| JU8       | GPI4     | Open                     | Input GPI4 can be driven by external user circuitry.                                                                                             |
| JU8       |          | 2-3*                     | Input GPI4 is driven low.                                                                                                                        |
| JU9       |          | 1-2                      | Input GPI3 is driven high.                                                                                                                       |
| JU9       | GPI3     | Open                     | Input GPI3 can be driven by external user circuitry.                                                                                             |
| JU9       |          | 2-3*                     | Input GPI3 is driven low.                                                                                                                        |
| JU10      |          | 1-2                      | Input GPI2 is driven high.                                                                                                                       |
| JU10      | GPI2     | Open                     | Input GPI2 can be driven by external user circuitry.                                                                                             |
| JU10      |          | 2-3*                     | Input GPI2 is driven low.                                                                                                                        |
| JU11      |          | 1-2*                     | Input GPI1 is driven high.                                                                                                                       |
| JU11      | GPI1     | Open                     | Input GPI1 can be driven by external user circuitry.                                                                                             |
| JU11      |          | 2-3                      | Input GPI1 is driven low.                                                                                                                        |
| JU12-JU21 | PO1-PO10 | Closed*                  | Outputs PO1-PO10 drive corresponding active-low LED indicators LED1-LED10.                                                                       |
| JU12-JU21 | PO1-PO10 | Open                     | Corresponding PO1-PO10 output available to drive user circuitry.                                                                                 |
| JU22      | -        | Closed* (PC board trace) | LED1-LED16 are powered from connector P1 power supply (the CMAXQUSB module).                                                                     |
| JU22      | -        | Open                     | LED1-LED16 are unused, or can be externally powered.                                                                                             |

Evaluate: MAX6889/MAX6892

## MAX6889 Evaluation Kit/ Evaluation System

Evaluate: MAX6889/MAX6892

## Table 2. Jumper JU6, JU7 (MAX6889 Only: Device Address Selection)

| JU6 SHUNT POSITION   | JU7 SHUNT POSITION   |   A0 |   A1 | DEVICE ADDRESS   |
|----------------------|----------------------|------|------|------------------|
| 2-3*                 | 2-3*                 |    0 |    0 | 1010 00x r/w     |
| 1-2                  | 2-3                  |    1 |    0 | 1010 01x r/w     |
| 2-3                  | 1-2                  |    0 |    1 | 1010 10x r/w     |
| 1-2                  | 1-2                  |    1 |    1 | 1010 11x r/w     |

## Table 3. Jumper Function Table for MAX6892

| JUMPER   | PIN    | POSITION   | FUNCTION                                                                    |
|----------|--------|------------|-----------------------------------------------------------------------------|
| JU1      | V CC   | Open       | U1 must be powered by a user-supplied external supply connected to IN1-IN5. |
| JU1      | V CC   | Closed*    | U1 input V CC is powered from connector P1 power supply.                    |
| JU2      | MARGIN | 1-2        | MARGIN connected to DPB.                                                    |
| JU2      | MARGIN | Open*      | Normal operation.                                                           |
| JU2      | MARGIN | 2-3        | User test mode. PG outputs are held in their previously configured states.  |
| JU3      | MR     | 1-2        | MR connected to DPB.                                                        |
| JU3      | MR     | Open*      | Normal operation.                                                           |
| JU3      | MR     | 2-3        | Manual reset.                                                               |
| JU4      | TH0    | 1-2        | TH0 = 1.                                                                    |
| JU4      | TH0    | Open*      | Do not use.                                                                 |
| JU4      | TH0    | 2-3        | TH0 = 0.                                                                    |
| JU5      | TH1    | 1-2        | TH1 = 1.                                                                    |
| JU5      | TH1    | Open*      | Do not use.                                                                 |
| JU5      | TH1    | 2-3        | TH1 = 0.                                                                    |
| JU6      | TH2    | 1-2        | TH2 = 1.                                                                    |
| JU6      | TH2    | Open       | Do not use.                                                                 |
| JU6      | TH2    | 2-3*       | TH2 = 0.                                                                    |
| JU7      | TH3    | 1-2        | TH3 = 1.                                                                    |
| JU7      | TH3    | Open       | Do not use.                                                                 |
| JU7      | TH3    | 2-3*       | TH3 = 0.                                                                    |
| JU8      | TH4    | 1-2        | TH4 = 1.                                                                    |
| JU8      | TH4    | Open       | Do not use.                                                                 |
| JU8      | TH4    | 2-3*       | TH4 = 0.                                                                    |
| JU9      | SWT    | 1-2        | SWT = 1 (default watchdog timeout period).                                  |
| JU9      | SWT    | Open       | User-installed C11 determines SWT time value.                               |
| JU9      | SWT    | 2-3*       | SWT = 0 (watchdog disabled).                                                |

│

Evaluate: MAX6889/MAX6892

## Table 3. Jumper Function Table for MAX6892 (continued)

| JUMPER    | PIN      | POSITION                 | FUNCTION                                                                     |
|-----------|----------|--------------------------|------------------------------------------------------------------------------|
| JU10      | SRT      | 1-2                      | SRT = 1 (default reset timeout period).                                      |
| JU10      | SRT      | Open                     | User-installed C12 determines SRT time value.                                |
| JU10      | SRT      | 2-3*                     | SRT = 0 (reset asserted).                                                    |
| JU11      | ENABLE   | 1-2*                     | ENABLE = 1 (force all PG outputs low).                                       |
| JU11      | ENABLE   | Open                     | User-supplied signal overrides internal pulldown.                            |
| JU11      | ENABLE   | 2-3                      | ENABLE = 0 (PG determined by input conditions).                              |
| JU12-JU21 | PG1-PG10 | Closed*                  | Outputs PG1-PG10 drive corresponding active-low LED indicators LED1-LED10.   |
| JU12-JU21 | PG1-PG10 | Open                     | Corresponding PG1-PG10 output available to drive user circuitry.             |
| JU22      | -        | Closed* (PC board trace) | LED1-LED16 are powered from connector P1 power supply (the CMAXQUSB module). |
| JU22      | -        | Open                     | LED1-LED16 are unused, or can be externally powered.                         |

* Default configuration.

Figure 1. Block Diagram (Bring Up Anytime by Pressing Function Key F1)

<!-- image -->

│

## MAX6889 Evaluation Kit/ Evaluation System

Evaluate: MAX6889/MAX6892

Figure 2. Related Registers Adjunct Window (Shown by Pressing Function Key F2)

<!-- image -->

Figure 3. Voltage Monitor Tab

<!-- image -->

## MAX6889 Evaluation Kit/ Evaluation System

Evaluate: MAX6889/MAX6892

Figure 4. Digital Inputs Tab

<!-- image -->

Figure 5. Programmable Outputs Tab

<!-- image -->

## MAX6889 Evaluation Kit/ Evaluation System

Evaluate: MAX6889/MAX6892

Figure 6. Watchdog Timers Tab

<!-- image -->

Figure 7. Registers Tab

<!-- image -->

## MAX6889 Evaluation Kit/ Evaluation System

Evaluate: MAX6889/MAX6892

Figure 8. EEPROM Memory Tab

<!-- image -->

## MAX6889 Evaluation Kit/ Evaluation System

Evaluate: MAX6889/MAX6892

Figure 9. MAX6889 EV Kit Schematic

<!-- image -->

│

## MAX6889 Evaluation Kit/ Evaluation System

Figure 10. MAX6889 EV Kit Component Placement GuideComponent Side

<!-- image -->

## Evaluate: MAX6889/MAX6892

Figure 11. MAX6889 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 12. MAX6889 EV Kit PC Board Layout-Solder Side

<!-- image -->

│

## MAX6889 Evaluation Kit/ Evaluation System

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                   | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------|-----------------|
|                 0 | 5/05            | Initial Release               | -               |
|                 1 | 8/05            | Replace CMOD232 with CMAXQUSB | 1,2             |
|                 2 | 1/21            | Updated Ordering Information  | 1               |
|                 3 | 3/21            | Updated Ordering Information  | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitry and specifications without notice at any time.

│

Evaluate: MAX6889/MAX6892