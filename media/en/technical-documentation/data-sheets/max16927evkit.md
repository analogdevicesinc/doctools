<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX16927 Evaluation Kit

## General Description

## Features

The MAX16927 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that provides the voltages and features required for display systems in automotive applications. The EV kit contains a buck converter, boost converter, Cuk converter, positive gate-voltage linear regulator,  negative  gate-voltage  linear-regulator  controller,  DAC-adjustable  positive  VCOM  buffer,  and  DACadjustable negative VCOM buffer.

The EV kit operates from +6V to +16V or +3V to +5.5V DC supply voltage ranges. The EV kit's default input range is configured  to  +6V  to  +16V.  The  buck  converter  (VCC3) is  configured  for  a  +3.3V  output  providing  at  least  2A. The boost converter (VSH) is configured for a +7V output providing  at  least  200mA.  The  Cuk  converter  (VSL)  is configured for a -7V output providing at least 100mA. The positive gate-voltage linear regulator (VGH) is configured for  a  +12V output providing at least 20mA. The negative gate-voltage linear-regulator controller (VGL) is configured for  a  -12V  output  providing  at  least  20mA.  The  negative VCOM  buffer  (VCOML)  is  DAC  adjustable  between  -1V and +1V and can source or sink 10mA. The positive VCOM buffer  (VCOMH)  is  DAC  adjustable  between  +2.5V  and +4.5V and can source or sink 100mA.

The  EV  kit  provides  an  on-board  USB  interface  circuit to  communicate  with  the  SPI K interface  circuits  in  the MAX16927 IC.

The EV kit also includes Windows M 2000-, Windows XP M -, and  Windows  Vista M -compatible  software  that  provides the user interface for exercising the features of the IC. The program is menu driven and offers a graphical user interface (GUI).

SPI is a trademark of Motorola, Inc.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- S +6V to +16V Single-Supply Operation
- S +3V to +5.5V Single-Supply Operation
- S Output Voltages
- +3.3V Output at 2A (VCC3 Buck Converter)
- +7V Output at 200mA (VSH Boost Converter)
- -7V Output at 100mA (VSL Cuk Converter)
- +12V Output at 20mA (VGH Positive Gate-Voltage Linear Regulator)
- -12V Output at 20mA (VGL Negative Gate-Voltage Linear-Regulator Controller)
- S DAC-Controlled VCOM Buffers
- -1V to +1V DAC-Adjustable VCOML (±10mA), or +2.5V to +4.5V DAC-Adjustable VCOMH (±100mA)
- S 2.1MHz PWM Switching Frequency (Buck Converter)
- S 1.2MHz PWM Switching Frequency (Boost and Cuk Converters)
- S All Output Voltages are Resistor Adjustable (Except for the Buck Converter)
- S On-Board USB Interface Circuit Generates SPI-Compatible Signals
- S USB-PC Connection and Power (Cable Included)
- S PCB Header for User-Supplied SPI-Compatible Signals
- S Evaluates the MAX16927GTM/V+ in a 48-Pin TQFN (7mm x 7mm x 0.8mm) Package with an Exposed Pad
- S Windows 2000-, Windows XP-, and Windows Vista (32-Bit)-Compatible Software
- S Fully Assembled and Tested

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX16927EVKIT+ | EV Kit |

1

## MAX16927 Evaluation Kit

## Component List

| DESIGNATION                 |   QTY | DESCRIPTION                                                                    |
|-----------------------------|-------|--------------------------------------------------------------------------------|
| C1, C4, C5, C22, C24        |     5 | 10 F F Q 20%, 25V X7R ceramic capacitors (1210) Murata GRM32DR71E106M          |
| C2, C3, C14, C17, C25, C27  |     6 | 0.1 F F Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H104K         |
| C6, C12, C13, C16, C21, C29 |     6 | 1 F F Q 10%, 25V X7R ceramic capacitors (0805) Murata GRM21BR71E105K           |
| C7                          |     1 | 4.7 F F Q 20%, 50V X7R ceramic capacitor (1210) Murata GRM32ER71H475M          |
| C8, C11                     |     2 | 220pF Q 10%, 50V X7R ceramic capacitors (0603) Murata GRM188R71H221K           |
| C9, C10                     |     2 | 22pF Q 5%, 50V C0G ceramic capacitors (0805) Murata GRM2165C1H220J             |
| C15                         |     1 | 47 F F Q 20%, 25V aluminum electrolytic capacitor (6.3mm x 6mm) SANYO 25CE47AX |
| C18, C19                    |     2 | 22 F F Q 20%, 25V X7R ceramic capacitors (1210) Murata GRM32ER71E226M          |
| C20, C32                    |     2 | 1 F F Q 10%, 10V X7R ceramic capacitors (0603) Murata GRM188R71A105K           |
| C23, C34                    |     0 | Not installed, ceramic capacitors (1210)                                       |
| C26                         |     1 | 4.7 F F Q 20%, 25V X5R ceramic capacitor (1206) Murata GRM31CR71E475M          |
| C30, C31, C33, C35, C36     |     0 | Not installed, ceramic capacitors (0805)                                       |
| C37, C38                    |     0 | Not installed, ceramic capacitors (1206)                                       |
| C101, C103-C110, C117, C121 |    11 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K         |

| DESIGNATION        |   QTY | DESCRIPTION                                                                                                |
|--------------------|-------|------------------------------------------------------------------------------------------------------------|
| C102, C113, C115   |     3 | 10 F F Q 20%, 6.3V X5R ceramic capacitors (0805) Murata GRM21BR60J106M                                     |
| C111, C112         |     2 | 10pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J                                         |
| C114, C122-C127    |     7 | 1 F F Q 10%, 10V X5R ceramic capacitors (0603) Murata GRM188R61A105K                                       |
| C116               |     1 | 2.2 F F Q 10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J225K                                     |
| C118, C119         |     2 | 22pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J                                         |
| C120               |     1 | 3300pF Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H332K                                       |
| D1, D2, D3         |     3 | 3A, 30V Schottky diodes (M-FLAT) Toshiba CMS02(TE12L,Q) (Top Mark: S2)                                     |
| D4                 |     1 | 2A, 50V fast-recovery diode (SMB) Fairchild ES2A                                                           |
| D5, D6             |     2 | 200mA, 100V dual diodes (SOT23) Fairchild MMBD4148SE (Top Mark: D4) Central Semi CMPD7000+ (Top Mark: C5C) |
| D7                 |     1 | Red SMT LED (0603)                                                                                         |
| D101               |     1 | Green SMT LED (0603)                                                                                       |
| FB101              |     0 | Not installed, ferrite bead-short (PC trace) (0603)                                                        |
| J1                 |     1 | 12-pin header                                                                                              |
| JU1, JU2           |     2 | 2-pin headers                                                                                              |
| JU4-JU8, JU14-JU17 |     9 | 3-pin headers                                                                                              |
| JU9                |     1 | 4-pin, 3-way jumper                                                                                        |
| JU10-JU13          |     4 | 5-pin, 4-way jumpers                                                                                       |
| L1, L2             |     2 | 5.6 F H, 2A inductors Sumida CDRH6D26-5R6NC                                                                |

2      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16927 Evaluation Kit

## Component List (continued)

| DESIGNATION                 |   QTY | DESCRIPTION                                                                     |
|-----------------------------|-------|---------------------------------------------------------------------------------|
| L3                          |     1 | 3 F H, 3A inductor Sumida CDRH6D28-3R0                                          |
| L4                          |     1 | 2.2 F H, 9A inductor Würth 744314330                                            |
| L5                          |     0 | Not installed, inductor-short (PC trace) (CDRH6D28)                             |
| N1                          |     1 | 20V, 0.9A n-channel MOSFET (SOT23) Fairchild FDV305N (Top mark 305)             |
| P1, P101                    |     2 | -20V, -2.4A p-channel MOSFETs (3 SuperSOT) Fairchild FDN304P_NL (Top Mark: 304) |
| Q1                          |     1 | npn bipolar transistor (SOT23) Fairchild MMBT3904_NL (Top Mark: 1A)             |
| R1, R10, R31                |     3 | 100k I Q 5% resistors (0603)                                                    |
| R2                          |     1 | 100k I Q 1% resistor (0603)                                                     |
| R3                          |     1 | 715k I Q 1% resistor (0603)                                                     |
| R4, R5                      |     2 | 47k I Q 5% resistors (0603)                                                     |
| R6                          |     1 | 110k I Q 1% resistor (0603)                                                     |
| R7                          |     1 | 10k I Q 1% resistor (0603)                                                      |
| R8, R9, R16, R18, R19, R103 |     6 | 10k I Q 5% resistors (0603)                                                     |
| R11                         |     1 | 71.5k I Q 1% resistor (0603)                                                    |
| R12                         |     1 | 12.1k I Q 1% resistor (0603)                                                    |
| R13                         |     1 | 6.8k I Q 5% resistor (0603)                                                     |
| R14                         |     1 | 619k I Q 1% resistor (0603)                                                     |
| R15                         |     1 | 51.1k I Q 1% resistor (0603)                                                    |
| R17                         |     1 | 2k I Q 5% resistor (0603)                                                       |
| R21, R34                    |     2 | 0 I Q 5% resistors (0805)                                                       |
| R22, R23, R26-R30, R35, R36 |     0 | Not installed, resistors (0805)                                                 |
| R24                         |     1 | 0 I Q 5% resistor (1206)                                                        |
| R25                         |     0 | Not installed, resistor-short (PC trace) (1206)                                 |
| R32, R33                    |     2 | 499k I Q 1% resistors (0603)                                                    |

µMAX is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    3

| DESIGNATION      |   QTY | DESCRIPTION                                                          |
|------------------|-------|----------------------------------------------------------------------|
| R37, R101        |     2 | 0 I Q 5% resistors (0603)                                            |
| R102             |     1 | 220 I Q 5% resistor (0603)                                           |
| R104             |     1 | 2.2k I Q 5% resistor (0603)                                          |
| R105             |     1 | 1.5k I Q 5% resistor (0603)                                          |
| R106, R107       |     2 | 27 I Q 5% resistors (0603)                                           |
| R108             |     1 | 1k I Q 5% resistor (0603)                                            |
| U1               |     1 | TFT-LCD power supply (48 TQFN-EP*) Maxim MAX16927GTM/V+              |
| U101             |     1 | 32-bit microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+              |
| U102             |     1 | EEPROM, 93C46-type 3-wire (8 SO)                                     |
| U103             |     1 | UART-to-USB converter (32 TQFP)                                      |
| U104             |     1 | 3.3V, 300mA regulator (5 SOT23) Maxim MAX8888EZK33+ (Top Mark: ADQC) |
| U105             |     1 | 2.5V, 120mA regulator (5 SC70) Maxim MAX8511EXK25+ (Top Mark: ADV)   |
| U106, U107, U108 |     3 | Low-voltage level translators (10 F MAX M ) Maxim MAX1840EUB+        |
| USB              |     1 | Type-B right-angle female USB connector                              |
| Y101             |     1 | 16MHz crystal Hong Kong X'tals SSM16000N1HK188F0-0                   |
| Y102             |     1 | 6MHz crystal Hong Kong X'tals SSL60000N1HK188F0-0                    |
| -                |     1 | USB-A male to USB-B male cable, 6ft (beige)                          |
| -                |    16 | Shunts                                                               |
| -                |     1 | PCB: MAX16927 EVALUATION KIT+                                        |

* EP = Exposed pad.

/ V denotes an automotive qualified part.

## MAX16927 Evaluation Kit

## Component Suppliers

| SUPPLIER                                    | PHONE        | WEBSITE                     |
|---------------------------------------------|--------------|-----------------------------|
| Central Semiconductor Corp.                 | 631-435-1110 | www.centralsemi.com         |
| Fairchild Semiconductor                     | 888-522-5372 | www.fairchildsemi.com       |
| Hong Kong X'tals Ltd                        | 852-35112388 | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc.      | 770-436-1300 | www.murata-northamerica.com |
| SANYO Electric Co., Ltd.                    | 619-661-6835 | www.sanyo.com               |
| Sumida Corp.                                | 847-545-6700 | www.sumida.com              |
| Toshiba America Electronic Components, Inc. | 949-623-2900 | www.toshiba.com/taec        |
| Würth Electronik GmbH & Co. KG              | 201-785-8800 | www.we-online.com           |

Note: Indicate that you are using the MAX16927 when contacting these component suppliers.

## MAX16927 EV Kit Files

| FILE                | DESCRIPTION                               |
|---------------------|-------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on the computer |
| MAX16927.EXE        | Application program                       |
| FTD2XX.INF          | USB driver file                           |
| UNINST.INI          | Uninstalls the EV kit software            |
| USB_Driver_Help.PDF | USB driver installation help file         |

## Quick Start

## Required Equipment

- MAX16927	EV	kit	(USB	cable	included)
- User-supplied Windows	 2000, Windows	 XP, or Windows Vista PC with a spare USB port
- +6V	to	+16V,	1A	DC	power	supply
- Voltmeter

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system. The  test  procedure  assumes  that  Windows  XP  SP2  is being used. Similar steps are required for the other supported operating systems.

## Procedure

The  EV  kit  is  fully  assembled  and  tested.  Follow  the steps below to verify board operation. Caution: Do not turn  on  the  power  supply  until  all  connections  are completed.

- 1) Visit www.maxim-ic.com/evkitsoftware to  download  the  latest  version  of  the  EV  kit  software, 16927Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP files.
- 2) Install  the  EV  kit  software  on  the  computer  by  running the INSTALL.EXE program inside the temporary folder.  The  program  files  are  copied  and  icons  are created in the Windows Start | Programs menu.
- 3) Verify  that  shunts  are  installed  in  their  default  positions, as shown in Table 1.
- 4) Turn on the power supply and set it to +6V; disable the power supply.
- 5) Connect  the  positive  terminal  of  the  power  supply to  the  IN3  pad on the EV kit. Connect the negative terminal of the power supply to the PGND3 pad.
- 6) Connect  the  USB  cable  from  the  PC  to  the  EV  kit board.  A New  Hardware  Found window  pops  up when installing the USB driver for the first time. If a window is not seen that is similar to the one described above  after  30s,  remove  the  USB  cable  from  the board and reconnect it. Administrator privileges are required to install the USB device driver on Windows.
- 7) Follow  the  directions  of  the Found New Hardware window  to  install  the  USB  device  driver.  Manually specify  the  location  of  the  device  driver  to  be C:\Program  Files\MAX16927 (default installation directory)  using  the Browse button.  During  device driver  installation,  Windows  may  show  a  warning

4      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16927 Evaluation Kit

message  indicating  that  the  device  driver  Maxim uses does not contain a digital signature. This is not an error condition and it is safe to proceed with installation. Refer to the USB\_Driver\_Help.PDF document included with the software for additional information.

- 8) Enable the power supply.
- 9) Start  the  EV  kit  software  by  opening  its  icon  in  the Start | Programs menu.
- 10) Observe  as  the  program  automatically  detects  the connection  of  the  device  and  starts  the  main  program. After successful connection, the EV kit software main window appears in the upper-left corner of the window, as shown in Figure 1.
- 11) Select Enabled in the +3.3V (EN3) radio group box. This enables the buck (+6V to +16V to +3.3V) DCDC.
- 12) Verify that the VCC3 buck-converter output (VCC3) is +3.3V.
- 13) Select Enabled in the Input Pwr (ENP) radio group box.
- 14) Select Seq 0: SPI determines which regulator is on in  the Power Sequencing (EN2, EN1) radio  group box.

## Table 1. Default Shunt Positions

| JUMPER   | SHUNT POSITION   | PIN CONNECTION               | EV KIT FUNCTION                                                        |
|----------|------------------|------------------------------|------------------------------------------------------------------------|
| JU1      | Not installed    | PGOOD not con- nected to ENP | ENP controlled by JU10                                                 |
| JU2      | Installed        | FLT to LLT_ FLT              | J1-6 and the on-board SPI interface circuit (LED indication is active) |
| JU4      | 1-2              | LXN to R21                   | Charge pumps powered by LXN                                            |
| JU5      | 1-2              | VSL to D6, pin 2             | Negative charge pump refers to VSL                                     |
| JU6      | 2-3              | FBN to R2/R3 divider         | FBN receives feedback from VSL through R2/R3 divider                   |
| JU7      | 1-2              | VCOMN to VSL                 | VCOMN is powered by VSL                                                |
| JU8      | 1-2              | SYNC to AVL                  | DCDC3 skip mode enabled under light load                               |
| JU9      | 1-2              | SSEN to INA                  | Spread spectrum enabled                                                |
| JU10     | 1-2              | ENP to LLT_ENP               | On-board SPI interface controls ENP                                    |
| JU11     | 1-2              | EN1 to LLT_EN1               | On-board SPI interface controls EN1                                    |
| JU12     | 1-2              | EN2 to LLT_EN2               | On-board SPI interface controls EN2                                    |
| JU13     | 1-2              | EN3 to LLT_EN3               | On-board SPI interface controls EN3                                    |
| JU14     | 2-3              | CS to LLT_ CS                | On-board SPI interface controls CS                                     |
| JU15     | 2-3              | CLK to LLT_CLK               | On-board SPI interface controls CLK                                    |
| JU16     | 2-3              | DIN to MAXQ_DOUT             | On-board SPI interface controls DIN                                    |
| JU17     | 2-3              | DOUT to LLT_DIN              | On-board SPI interface controls DOUT                                   |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    5

- 15) Select Enabled in the VSH radio group box.
- 16) Verify  that  the  VSH  boost-converter  output  (VSH)  is +7V.
- 17) Select Enabled in the VSL radio group box.
- 18) Verify that the VSL Cuk converter output (VSL) is -7V.
- 19) Select Enabled in the VSLS radio group box.
- 20) Verify that the VSLS sequenced Cuk converter output (VSLS) is -7V.
- 21) Select Enabled in the VGH radio group box.
- 22) Verify that the VGH positive gate-voltage linear-regulator output (VGH) is +12V.
- 23) Select Enabled in the VGL radio group box.
- 24) Verify  that  the  VGL  negative  gate-voltage  linearregulator controller output (VGL) is -12V.
- 25) Select Positive in  the DAC  Direction radio  group box.
- 26) Enter 7F into the DAC Value edit box.
- 27) Verify that the VCOML buffer output (VCOML) is +1V.
- 28) The EV kit is now ready for additional testing.

## MAX16927 Evaluation Kit

Figure 1. MAX16927 EV Kit Software Main Window

<!-- image -->

6      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16927 Evaluation Kit

## Detailed Description of Software

Note :  Text in bold indicates user-selectable features in the MAX16927 EV kit software.

## Graphic User Interface (GUI) Panel

Condition display Off .  The  bottom-left  status  bar  indicates Hardware:  Connected ,  and  the  bottom-right status bar indicates EV Kit Operational . If the USB connection is not detected, the software prompts the user to retry, exit the program, or enter the demo mode.

The GUI shown in Figure 1 displays the EV kit software main window. This window provides a convenient means to  control  the  device.  Use  the  mouse  or  press  the  Tab key  to  navigate  through  the  GUI  controls.  The  correct SPI  write  operation  is  generated  to  update  the  device's internal memory registers when any of these controls are executed.

The  EV  kit  software  main  window  (Figure  1)  divides the  EV  kit  software  functions  into  logical  sections:  The +3.3V  (EN3) and Input  Pwr  (ENP) sections,  the Power Sequencing (EN2, EN1) section,  the VSH , VSL , VSLS , VGL ,  and VGH sections,  the VCOMH and VCOML sections, and the Over Temperature and Fault Condition displays. +3.3V (EN3) enables or disables the +3.3V buck converter. Input  Pwr  (ENP) enables  or  disables  all  the outputs on the EV kit, except for the buck-converter output. Power Sequencing (EN2, EN1) selects the power-on sequence. VSH , VSL , VSLS , VGL ,  and VGH control the VSH,  VSL,  VSLS,  VGL,  and  VGH,  respectively. VCOMH and VCOML control  the  VCOMH  or  VCOML  directions and outputs.

The bottom-left status bar on the main window provides the USB interface circuit connectivity status. The bottomright status bar indicates the EV kit operational status.

## Software Startup

Upon  startup  of  the  program,  the  EV  kit  software  automatically  searches  for  the  USB  interface  circuit  connection.  The  EV  kit  enters  the  normal  operating  mode when the  USB  connection  is  detected.  The +3.3V  (EN3) is Enabled and the Input Pwr (ENP) and VSH , VSL , VSLS , VGL ,  and VGH are Disabled .  The Power  Sequencing (EN2,  EN1) is  set  to Seq  0:  SPI  determines  which regulator  is  on .  The VCOMH and VCOML are Off . The DAC Direction is  set  to Positive .  The DAC Value is set to 00 .  Both the Over Temperature and the Fault

## Demo Mode

The EV kit software can enter the demo mode when the USB connection is not detected, by selecting Cancel on the  EV  kit Software  Interface  Circuit pop-up  window (Figure 2). The software can also enter the demo mode at  any  time  by  selecting  the Options  |  Demo  Mode menu item in the main window. When in demo mode, all software communication to the EV kit circuit is disabled; however, most of the software GUI is functional. Demo mode allows  the  user  to  evaluate  the  software  without hardware  connectivity.  To  exit  demo  mode,  select  the Options | Demo Mode menu item.

## +3.3V (EN3)

The +3.3V (EN3) radio  group  box  enables  or  disables the  buck  converter.  When +3.3V  (EN3) is Enabled , VCC3 is On and  all  32  bits  in  the  register  are  set  low. When +3.3V (EN3) is Disabled , VCC3 is Off and all 32 bits in the register are set high.

## Input Pwr (ENP)

The Input  Pwr  (ENP) radio  group  box  enables  or  disables  the  device  except  for  the  buck  converter.  When +3.3V (EN3) and Input  Pwr  (ENP) are Enabled ,  VSH, VSL,  VSLS,  VGL,  and  VGH  are  controlled  by  their respective Enabled/Disabled commands.  When Input Pwr (ENP) is Disabled , VSH, VSL, VSLS, VGL, and VGH are Off, regardless of their respective Enabled/Disabled commands.

## Power Sequencing (EN2, EN1)

The Power  Sequencing  (EN2,  EN1) radio  group  box selects the EV kit power sequence. When the Seq 0: SPI determines which regulator is on is selected, the SPI interface determines which regulator is on or off. When Seq 1: (1) VSH, (2) VSL, (3) VGH, (4) VGL is selected, VSH, VSL, VGH, and VGL are powered in the sequence

## MAX16927EYKitInterfaceCircuit

X

Interface Circuit not found, Select YES to keep trying to connect, NO to exit program or CANCEL to enter DEMO Mode

Yes

No

Cancel

<!-- image -->

Figure 2. MAX16927 EV Kit Software Interface Circuit Pop-Up Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    7

## MAX16927 Evaluation Kit

stated by the number inside their respective preceding parentheses, and likewise for Seq 2 and Seq 3 .

VCOMH, VCOML, DAC Direction, DAC Value The  EV  kit  software  features  a  panel  that  contains the VCOMH and VCOML status  displays,  the DAC Direction radio  group  box,  and  the DAC  Value edit box. The VCOMH and VCOML status boxes display the VCOMH and VCOML ON / Off states. The DAC Direction radio group box selects the DAC's Positive or Negative direction.  The DAC  Value edit  box  accepts  a  hex number  between 00 and 7F to  scale  the  VCOMH  or VCOML  values.  The  VCOML  values  are  scaled  to between 0 and +1V when the DAC Direction is Positive , or  between  0  and  -1V  when  the DAC  Direction is Negative .

## Over Temperature

The  EV  kit  software  features  a  panel  that  displays the device's overtemperature condition.  The Over Temperature panel  displays On when  the  device's internal die temperature exceeds +165 N C (typ).

## Fault Condition

The  EV  kit  software  features  a  panel  that  displays  the device's fault condition. The Fault Condition panel displays On when one or more of the device's output voltages (except for the buck-converter output) is less than 85% of their regulated values.

## Reset

The Reset button  resets  the  EV  kit  to  the  following condition: +3.3V  (EN3) = Disabled , Input  Pwr  (ENP) = Disabled , Power  Sequence  (EN2,  EN1) = Seq  0: SPI determines which regulator is on , DAC Direction = Positive , DAC  Value = 00 , VSH = Disabled , VSH Current Limit = 100% , VSH Soft Start = checked, VSL = Disabled , VSL Current Limit = 100% , VSL Soft Start = checked, VSLS = Disabled , VGH = Disabled , VGH Soft Start Time = 6.784 mSec , VGL = Disabled ,  and VGL Soft Start Time = 6.784 mSec .

## VSH Enabled/Disabled, Current Limit,

## VSH Soft-Start, and VSH Status

The  EV  kit  software  features  a  panel  that  includes  the VSH Enabled/Disabled radio buttons, the Current Limit drop-down list,  the VSH Soft Start checkbox, and the VSH Status display. The VSH Enabled / Disabled radio buttons  enable  or  disable  the  VSH  regulator.  Enable the +3.3V (EN3) and Input Pwr (ENP) before enabling VSH . The Current Limit drop-down list selects the VSH current limit. The VSH Soft Start checkbox enables or disables the VSH soft-start feature. VSH Status displays the VSH On / Off status.

## VSL Enabled/Disabled, Current Limit, VSL Soft-Start, and VSL Status

The  EV  kit  software  features  a  panel  that  includes  the VSL Enabled / Disabled radio buttons, the Current Limit drop-down list,  the VSL Soft Start checkbox, and the VSL Status display.  The VSL Enabled / Disabled radio buttons enable or disable the VSL regulator. Enable the +3.3V (EN3) and Input Pwr (ENP) before enabling VSL . The Current Limit drop-down list selects the VSL current limit. The VSL Soft Start check box enables or disables the VSL soft-start feature. VSL Status displays the VSL On / Off status.

VSLS Enabled/Disabled and VSLS Status The  EV  kit  software  features  a  panel  that  includes the VSLS Enabled / Disabled radio  buttons  and  the VSLS Status display. The VSLS Enabled / Disable radio buttons enable or disable the VSLS switch. Enable the +3.3V (EN3) , Input Pwr (ENP) , and VSL before enabling VSLS . VSLS Status displays the VSLS On / Off status.

## VGH Enabled/Disabled, Soft-Start Time, and VGH Status

The  EV  kit  software  features  a  panel  that  includes  the VGH  Enabled / Disabled radio  buttons,  the Soft  Start Time drop-down list, and the VGH Status display. The VGH Enabled / Disabled radio buttons enable or disable the VGH regulator. Enable the +3.3V (EN3) , Input Pwr (ENP) , VSH ,  and VSL before  enabling VGH .  The Soft Start  Time drop-down  list  selects  the  VGH  soft-start time. VGH Status displays the VGH On / Off status.

## VGL Enabled/Disabled, Soft-Start Time, and VGL Status

The  EV  kit  software  features  a  panel  that  includes  the VGL Enabled / Disabled radio  buttons,  the Soft  Start Time drop-down list, and the VGL Status display. The VGL Enabled / Disabled radio buttons enable or disable the VGL regulator. Enable the +3.3V (EN3) , Input Pwr (ENP) , VSH ,  and VSL before  enabling VGL .  The Soft Start Time drop-down list selects the VGL soft-start time. VGL Status displays the VGL On / Off status.

## Keyboard Navigation

Press the Tab key to select each GUI control. Most of the selected control is indicated by a dotted outline. Using Shift + Tab moves the selection to the previously selected control. Buttons respond to the keyboard's space bar. Some controls respond to the keyboard's up-and-down arrow keys. Activate the program's menu bar by press-

8      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX16927 Evaluation Kit

ing the F10 key, then press the letter of the desired menu item.  When  the  Alt  key  is  pressed  and  released,  most menu items show one letter underlined, indicating their shortcut key.

## General Troubleshooting

The EV kit provides a PGOOD PCB pad that indicates the buck-converter output status. PGOOD is an activehigh output that pulls low when the buck output voltage is  below 90% of its nominal value and pulls high when the output voltage is above 92% of its nominal value.

## Problem: software reports it cannot find the interface circuit.

- Is the interface circuit power LED lit?
- Is the USB cable connected?
- Has  Windows  plug-and-play  detected  the  board? Bring up  Control Panel → System → Device Manager,  and  look  at  what  device  nodes  are indicated for USB. If there is an 'unknown device' node attached to the USB, delete it; this forces plugand-play to try again.
- Are jumpers JU10-JU17 properly configured?

## Detailed Description of Hardware

The  MAX16927  EV  kit  contains  a  buck  converter  for the  VCC3 supply, boost converter for  the  VSH  supply, Cuk  converter  for  the  VSL  supply,  single-stage  positive  charge-pump  for  the  positive  gate-voltage  linearregulator  supply  (VGH),  single-stage  negative  charge pump  for  the  negative  gate-voltage  linear-regulator controller supply (VGL), DAC-adjustable positive VCOM buffer  (VCOMH),  and  DAC-adjustable  negative  VCOM buffer (VCOML).

## Input Power Supply

The EV kit operates from +6V to +16V or +3V to +5.5V DC supply  voltage  ranges.  When  operating  the  EV  kit from a +6V to +16V power supply, connect the power supply between the IN3 and PGND3 PCB pads. When operating  the  EV  kit  from  a  +3V  to  +5.5V  power  supply,  connect the power supply between the VCC3 and PGND3  PCB  pads.  Refer  to  the Detailed  Description section  in  the  MAX16927  IC  data  sheet  for  additional information. The EV kit's default input range is configured to +6V to +16V.

## VCC3, PGOOD, and AVL (Buck Converter)

The  VCC3  buck  converter  is  configured  for  a  +3.3V output providing at least 2A. The VCC3 buck converter switches at 2.1MHz in a default spread-spectrum mode. The  VCC3  buck-converter  output  is  available  between the VCC3 and AGND3 PCB pads.

<!-- image -->

The EV kit provides an AVL PCB pad to verify the buck converter's 5V bias voltage.

## VSH (Boost Converter)

The VSH boost converter is configured for a +7V output providing  at  least  200mA.  The  VSH  boost-converter output  voltage  can  be  adjusted  from  INA  to  +18V  by replacing feedback resistors R11 and R12 (refer to the Boost Converter section in the MAX16927 IC data sheet). Operation  at  significantly  higher  output  voltages  can reduce the available output current and require changes in component values or component voltage rating.

## VSL (Cuk Converter)

The VSL inverted switching regulator is configured for a -7V output providing at least 100mA. The VSL inverted switching-regulator output voltage can be adjusted from -4V to -7V by replacing feedback resistors R2 and R3. If the Cuk converter output is set more negative than -7V, VSL must be disconnected from the VCOMN (refer to the Cuk Converter section in the MAX16927 IC data sheet). Operation at higher negative output voltages can reduce the available output current.

## VSLS (Sequenced VSL Output)

The VSLS output is a sequenced VSL. The VSLS output is controlled by an external n-channel MOSFET (switch). This  switch  is  controlled  by  the  SPI  command  available  at  the  device's  VSLS  pin.  When  the  VSLS  switch is on, the VSLS PCB pad is connected to the VSL PCB pad through the n-channel MOSFET, allowing VSLS to share  the  voltage  and  current  with  the  VSL  output  for sequencing.

## VGH, VCP (Positive Gate-Voltage Linear Regulator/Charge Pump)

The  VGH  positive  gate-voltage  regulator  is  configured for  a  +12V  output  providing  at  least  20mA.  The  VGH positive gate-voltage regulator receives power from the VCP. VCP is a single-stage, positive charge pump. The VGH positive gate-voltage regulator's output voltage can be adjusted from +4.5V to +16V by replacing feedback resistors  R6  and  R7  (refer  to  the Positive  Gate-Voltage Linear Regulator (VGH) section in the MAX16927 IC data sheet).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    9

## MAX16927 Evaluation Kit

## VGL, VCN (Negative Gate-Voltage Linear-Regulator Controller/Charge Pump)

The VGL negative gate-voltage regulator  is  configured for  a  -12V  output  providing  at  least  20mA.  The  VGL negative gate-voltage regulator receives power from the VCN. VCN is a single-stage, negative charge pump. The VGL  negative  gate-voltage  regulator's  output  voltage can be adjusted from -4.5V to -16V by replacing feedback resistors R14 and R15 (refer to the Negative GateVoltage Linear-Regulator Controller (VGL) section in the MAX16927 IC  data  sheet).  Note  that  a  short  circuit  at VGL can destroy the external npn transistor on the EV kit.

## VCOMN, VCINL, VCOML (Negative VCOM Buffer)

The  EV  kit  provides  the  VCOMN,  VCINL,  and  VCOML PCB  pads  to  access  the  negative  VCOM  buffer.  The VCOMN PCB pad accepts the power supply to the negative VCOM buffer. The VCINL PCB pad accepts an offset voltage to the negative VCOM DAC output. The VCOML is the negative VCOM buffer output. The negative VCOM buffer output (VCOML) is DAC adjustable between -1V and +1V and can source or sink 10mA.

The EV kit can only activate VCOML or VCOMH, but not both. The EV kit is configured with the VCOML active and VCOMH inactive by default. To activate VCOMH on the EV kit,  see  the VCOMP, VCINH, and VCOMH (Positive VCOM Buffer) section.

## VCOMP, VCINH, VCOMH (Positive VCOM Buffer)

The EV kit provides the VCOMP, VCINH, and VCOMH PCB pads  to  access  the  positive  VCOM  buffer.  The  VCOMP PCB pad accepts the power supply to the positive VCOM buffer.  The  VCINH  PCB  pad  accepts  an  offset  voltage to  the  positive  VCOM  DAC  output.  The  VCOMH  is  the positive  VCOM  buffer  output.  The  positive  VCOM  buffer output  (VCOMH) is DAC adjustable between +2.5V and +4.5V and can source or sink 100mA.

VCINH  features  an  internal  voltage-divider  that  sets VCOMH to VCOMP/2 voltage. This voltage is DAC adjustable  by Q 1V  (VSH/2 Q 1V).  Also,  the  basic  voltage VCOMP/2 can be overwritten by driving VCINH (this range is +2V to (VCOMP - 2V).

The EV kit can only activate VCOML or VCOMH, but not both. The EV kit is configured with the VCOML active and VCOMH inactive by default. To activate VCOMH on the EV kit, follow the steps below:

- 1)  Install  a  shunt  on  pins  2-3  of  jumper  JU4  (charge pump's source from LXP).
- 2)  Install  a  shunt  on  pins  2-3  of  jumper  JU5  (VCN discharge to GNDCP).
- 3)  Install a shunt on pins 1-2 of jumper JU6 (VCOMH on, VCOML off).
- 4)  Replace  resistor  R14  with  a  lower  value  (R14  value is  application  dependent; refer to the Negative GateVoltage Linear-Regulator Controller (VGL) section in the MAX16927 IC data sheet for additional information).

10      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16927 Evaluation Kit

## Jumper Selection

## Charge-Pump Input Source (LXN, LXP) and VCN Discharging Level (VSL, GNDCP)

## Primary Enable (ENP)

Jumpers  JU1  and  JU10  enable  or  disable  the  device, except  for  the  buck  converter.  See  Table  2  for  shunt positions.

## Fault Output ( FLT )

Jumper JU2 selects the destination for the fault output signal from the FLT pin. See Table 3 for shunt positions.

Table 2. JU1, JU10 Jumper Selection (ENP)

| SHUNT POSITION   | SHUNT POSITION   | ENP PIN CONNECTED TO       | EV KIT OUTPUTS (NOT INCLUDING THE BUCK CONVERTER)                                               |
|------------------|------------------|----------------------------|-------------------------------------------------------------------------------------------------|
| JU1              | JU10             | ENP PIN CONNECTED TO       | EV KIT OUTPUTS (NOT INCLUDING THE BUCK CONVERTER)                                               |
| Installed        | Not installed    | PGOOD (U1, pin 14)         | ENP follows status of buck PGOOD (i.e., if buck is running, it activates the ENP automatically) |
| Not installed*   | 1-2*             | U107, pin 8                | On-board SPI controlled                                                                         |
| Not installed    | 1-3              | INA (through resistor R16) | Enabled                                                                                         |
| Not installed    | 1-4              | J1-8                       | External logic controlled                                                                       |
| Not installed    | 1-5              | AGND                       | Disabled                                                                                        |
| Not installed    | Not installed    | Pulldown                   | Disabled                                                                                        |

## Table 3. JU2 Jumper Selection ( FLT )

| SHUNT POSITION   | FLT PIN CONNECTED TO   | FLT PIN OUTPUTS SIGNALS TO                                          |
|------------------|------------------------|---------------------------------------------------------------------|
| Installed*       | J1-6 and U108, pin 10  | J1-6 and the on-board SPI interface circuit (LED indication active) |
| Not installed    | J1-6                   | J1-6                                                                |

* Default position.

Table 4. JU4 and JU5 Jumper Selection (VCP, VCN)

| SHUNT POSITION                    | SHUNT POSITION   | VCN DISCHARGES TO   | CHARGE-PUMP OUTPUT        |
|-----------------------------------|------------------|---------------------|---------------------------|
| JU4                               | JU5              |                     | VOLTAGES                  |
| 1-2* (C2 and C3 connected to LXN) | 1-2*             | VSL                 | VCP = +16.6V VCN = -16.6V |
| 1-2* (C2 and C3 connected to LXN) | 2-3              | GNDCP               | VCP = +16.6V VCN = -9.8V  |
| 2-3 (C2 and C3 connected to LXP)  | 1-2              | VSL                 | VCP = +13.3V VCN = -13.3V |
| 2-3 (C2 and C3 connected to LXP)  | 2-3              | GNDCP               | VCP = +13.3V VCN = -6.5V  |

<!-- image -->

Jumper JU4 selects the charge-pump input source. This input  source  determines  the  charge-pump  output  voltages  (VCP,  VCN).  In  addition,  jumper  JU5  selects  the negative charge-pump VCN discharging level. This discharging level further controls the VCN magnitude. See Table 4 for shunt positions.

Note: If the CUK converter is not operated, JU4 must be set to the 2-3 position; JU5 is not used.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    11

## MAX16927 Evaluation Kit

## Cuk Converter Feedback (FBN)

The Cuk converter feedback FBN pin has two functions. The FBN can be used to regulate the Cuk converter output. It can be used to configure the boost convert for a higher power output, and to select whether VCOMH or VCOML is enabled. Refer to the MAX16927 IC data sheet for more advanced features and operations. Jumper JU6 selects the device's Cuk converter's feedback input. See Table 5 for shunt positions.

Table 5. JU6 Jumper Selection (FBN)

| SHUNT POSITION   | FBN PIN CONNECTED TO                               | CUK CONVERTER OUTPUT (VSL) REGULATED TO                                                                                                            |
|------------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| 1-2              | INA                                                | • Not regulated (Cuk converter off) • Install a 0 I resistor to R35 to configure the VSH output to +18V at 200mA • VCOMH active and VCOML inactive |
| 2-3*             | VSL (through voltage dividing-resistors R2 and R3) | • -7V (if the Cuk converter is set more negative than -7V, VSL must be disconnected from the VCOMN) • VCOML active and VCOMH inactive              |
| Not installed    | Not connected                                      | Not regulated                                                                                                                                      |

## Table 6. JU7 Jumper Selection (VCOMN)

| SHUNT POSITION   | VCOMN PIN CONNECTED TO   | NEGATIVE VCOM BUFFER SUPPLIED BY   |
|------------------|--------------------------|------------------------------------|
| 1-2*             | VSL                      | VSL                                |
| 2-3              | VCGND                    | Not powered                        |
| Not installed    | Not connected            | Not powered                        |

Table 7. JU8 Jumper Selection (SYNC)

| SHUNT POSITION   | SYNC PIN CONNECTED TO   | BUCK-CONVERTER OPERATING MODE OR SYNCHRONIZATION       |
|------------------|-------------------------|--------------------------------------------------------|
| 1-2*             | AVL                     | DCDC3 skip mode enabled under light load               |
| 2-3              | J1-12                   | DCDC3 synchronized to externally provided clock signal |

12      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Negative VCOM Buffer Supply (VCOMN)

Jumper JU7 selects the device's negative VCOM Buffer supply. See Table 6 for shunt positions.

## Buck-Converter Sync Input (SYNC)

Jumper  JU8  selects  the  device's  buck-converter  sync input. See Table 7 for shunt positions.

## Spread-Spectrum Enable (SSEN)

Jumper  JU9  enables  or  disables  the  device's  spreadspectrum mode for the boost and Cuk converters. See Table 8 for shunt positions.

## Table 8. JU9 Jumper Selection (SSEN)

| SHUNT POSITION   | SSEN PIN CONNECTED TO   | BOOST AND CUK CONVERTERS SPREAD- SPECTRUM MODE   |
|------------------|-------------------------|--------------------------------------------------|
| 1-2*             | INA                     | Enabled                                          |
| 1-3              | J1-7                    | External logic controlled                        |
| 1-4              | AGND                    | Fixed 1.2MHz switching frequency                 |
| Not installed    | Internal pulldown       | Fixed 1.2MHz switching frequency                 |

<!-- image -->

## MAX16927 Evaluation Kit

## Output Sequencing (EN1, EN2)

Jumpers  JU11  and  JU12  select  the  device's  output sequencing for the VSH, VSL, VSLS, VGH, and VGL. See Table 9 for shunt positions.

## Buck-Converter Enable (EN3)

Jumper JU13 enables or disables the device's buck converter. See Table 10 for shunt positions.

## SPI Chip Select ( CS )

Jumper JU14 selects the device's SPI chip-select controlling source. See Table 11 for shunt positions.

## SPI Clock (CLK)

Jumper JU15 selects the device's SPI clock source. See Table 12 for shunt positions.

## Table 9. JU11, JU12 Jumper Selection (EN1, EN2)

| SHUNT POSITION   | SHUNT POSITION   | VSH, VSL, VSLS, VGH, AND VGL OUTPUT SEQUENCING                       |
|------------------|------------------|----------------------------------------------------------------------|
| JU11 (EN1)       | JU12 (EN2)       | VSH, VSL, VSLS, VGH, AND VGL OUTPUT SEQUENCING                       |
| 1-2*             | 1-2*             | On-board SPI controlled                                              |
| 1-4              | 1-4              | External logic controlled; Connect EN1 to J1-9; Connect EN2 to J1-10 |
| 1-5              | 1-5              | Seq 0: SPI determines which regulator is on                          |
| 1-5              | 1-3              | Seq 1: (1) VSH, (2) VSL, (3) VGH, (4) VGL                            |
| 1-3              | 1-5              | Seq 2: (1) VSL, (2) VSH, (3) VGL, (4) VGH                            |
| 1-3              | 1-3              | Seq 3: (1) VSL, (2) VSH, (3) VGH, (4) VGL, (5) VSLS                  |

* Default position.

## Table 10. JU13 Jumper Selection (EN3)

| SHUNT POSITION   | EN3 PIN CONNECTED TO      | BUCK-CONVERTER OUTPUT     |
|------------------|---------------------------|---------------------------|
| 1-2*             | U101, pin 63              | On-board SPI controlled   |
| 1-3              | IN3 (through resistor R8) | Enabled                   |
| 1-4              | J1-11                     | External logic controlled |
| 1-5              | AGND3                     | Disabled                  |
| Not installed    | Not allowed               | Not allowed               |

<!-- image -->

## SPI Data Input (DIN)

Jumper JU16 selects the device's SPI data-input source. See Table 13 for shunt positions.

## SPI Data Output (DOUT)

Jumper JU17 selects the device's SPI data-out destination. See Table 14 for shunt positions.

## Table 11. JU14 Jumper Selection ( CS )

| SHUNT POSITION   | CS PIN CONNECTED TO   | SPI CHIP SELECT CONTROLLED BY   |
|------------------|-----------------------|---------------------------------|
| 1-2              | J1-1                  | External SPI controller         |
| 2-3*             | U106, pin 8           | On-board SPI controller         |
| Not installed    | Internal pullup       | No controlling source           |

* Default position.

## Table 12. JU15 Jumper Selection (CLK)

| SHUNT POSITION   | CLK PIN CONNECTED TO   | SPI CLOCK SUPPLIED BY   |
|------------------|------------------------|-------------------------|
| 1-2              | J1-2                   | External SPI controller |
| 2-3*             | U107, pin 7            | On-board SPI controller |
| Not installed    | Not connected          | No clock source         |

## Table 13. JU16 Jumper Selection (DIN)

| SHUNT POSITION   | DIN PIN CONNECTED TO   | SPI DATA INPUT SUPPLIED BY   |
|------------------|------------------------|------------------------------|
| 1-2              | J1-3                   | External SPI controller      |
| 2-3*             | U101, pin 39           | On-board SPI controller      |
| Not installed    | Not connected          | No data-input source         |

* Default position.

## Table 14. JU17 Jumper Selection (DOUT)

| SHUNT POSITION   | DOUT PIN CONNECTED TO   | SPI DATA OUTPUT SENT TO    |
|------------------|-------------------------|----------------------------|
| 1-2              | J1-4                    | External SPI controller    |
| 2-3*             | U106, pin 10            | On-board SPI controller    |
| Not installed    | Not connected           | No data-output destination |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    13

## MAX16927 Evaluation Kit

Figure 3a. MAX16927 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

14      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16927 Evaluation Kit

<!-- image -->

Figure 3b. MAX16927 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    15

## MAX16927 Evaluation Kit

Figure 4. MAX16927 EV Kit Component Placement Guide-Component Side

<!-- image -->

16      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16927 Evaluation Kit

<!-- image -->

Figure 5. MAX16927 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    17

## MAX16927 Evaluation Kit

Figure 6. MAX16927 EV Kit PCB Layout-GND Layer 2

<!-- image -->

18      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16927 Evaluation Kit

<!-- image -->

Figure 7. MAX16927 EV Kit PCB Layout-PWR Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    19

## MAX16927 Evaluation Kit

Figure 8. MAX16927 EV Kit PCB Layout-Solder Side

<!-- image -->

20      \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX16927 Evaluation Kit

<!-- image -->

Figure 9. MAX16927 EV Kit Component Placement Guide-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_    21

## MAX16927 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/10           | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

22

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600