<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX54X Evaluation Kit

## Evaluates: MAX541/MAX542

## General Description

The  MAX54X  evaluation  kit  (EV  kit)  provides  a  proven design to evaluate the MAX541/MAX542 serial-input, voltage-output,  16-bit  digital-to-analog  convertors  (DACs). The EV kit also includes Windows XP M -, Windows Vista M -, and  Windows M 7-compatible  software  that  provides  a simple  graphical  user  interface  (GUI)  for  exercising  the features of these devices.

The DACs are controlled by an on-board MAXQ M microcontroller,  which  provides  two  separate  SPI   control interfaces.

The  EV  kit  provides  an  on-board  +2.5V  high-precision voltage  reference  (MAX6126).  The  EV  kit  also  provides precision  bipolar  and  ultra-precision  unipolar  op  amps, the MAX9632 (single) and MAX44251 (dual), respectively.

The  EV  kit  comes  with  the  MAX541AESA+  and  a MAX542AESD+ installed; however, it  can  also  be  used to  evaluate  other  parts  in  the  same  family.  Contact  the factory  for  free  samples  of  the  pin-compatible  devices shown in Table 1.

## Features

- S Provides Both Bipolar and Unipolar Outputs
- S On-Board +2.5V High-Precision Voltage Reference
- S On-Board Bipolar and Unipolar High-Precision Op Amps
- S Proven High-Performance 16-Bit DAC PCB Layout
- S High-Speed USB 2.0 USB-PC Connection (Cable Included)
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- S RoHS Compliant
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## System Diagram

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

| DESIGNATION                                                                            |   QTY | DESCRIPTION                                                          |
|----------------------------------------------------------------------------------------|-------|----------------------------------------------------------------------|
| AGND (x5), DGND (x2)                                                                   |     7 | Black test points                                                    |
| BUF_OUT1, BUF_OUT2, CS0, CS1, DIN0, DIN1, INV, LDAC, OUT1, OUT2, SCLK0, SCLK1, U3_OUTB |    13 | White test points                                                    |
| C1, C5, C9, C10, C14, C18, C19-C22, C38                                                |    11 | 0.1µF Q 10%, 16V X7R ceramic capacitors (0603) Murata RM188R71C104K  |
| C2, C6, C11, C15                                                                       |     4 | 0.01µF Q 10%, 50V X7R ceramic capacitors (0603) Murata RM188R71H103K |
| C3, C7, C12, C16                                                                       |     4 | 1000pF Q 10%, 50V X7R ceramic capacitors (0603) Murata RM188R71H102K |
| C4, C8, C13, C17                                                                       |     4 | 180pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H181J  |
| C23-C33, C36, C37, C40, C41, C42                                                       |    16 | 1µF Q 10%, 16V X5R ceramic capacitors (0603) Murata RM188R61C105K    |
| C34, C35                                                                               |     2 | 18pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H180J   |
| C39                                                                                    |     0 | Not installed, ceramic capacitor (0603)                              |
| J1                                                                                     |     1 | USB type-B, right-angle PC-mount receptacle                          |
| J2                                                                                     |     1 | 10-pin (2 x 5) dual-row header                                       |
| J3                                                                                     |     0 | Not installed, 4-pin header                                          |
| JU1-JU13                                                                               |    13 | 3-pin headers                                                        |
| JU14, JU15, JU16, JU_ID0-JU_ID3                                                        |     7 | 2-pin headers                                                        |

## MAX54X Evaluation Kit

## Evaluates: MAX541/MAX542

## Component List

| DESIGNATION                |   QTY | DESCRIPTION                                                        |
|----------------------------|-------|--------------------------------------------------------------------|
| L1                         |     1 | Ferrite bead (0603) TDK MMZ1608R301A                               |
| OP1+, OP2+, OP2-, REF, VDD |     5 | Red test points                                                    |
| R1, R7                     |     2 | 10k I Q 5% resistors (0603)                                        |
| R2                         |     1 | 100 I Q 5% resistor (0603)                                         |
| R3-R6                      |     4 | 2k I Q 5% resistors (0603)                                         |
| U1                         |     1 | +5V, unipolar, voltage-output, 16-bit DAC (8 SO) Maxim MAX541AESA+ |
| U2                         |     1 | +5V, bipolar, voltage-output, 16-bit DAC (14 SO) Maxim MAX542AESD+ |
| U3                         |     1 | Output buffer (8 SOT23) Maxim MAX44251AKA+T                        |
| U4                         |     1 | Output buffer (8 SO) Maxim MAX9632ASA+                             |
| U5                         |     1 | 2.5V voltage reference (8 SO) Maxim MAX6126AASA25+                 |
| U6, U7, U8                 |     3 | Level translators (10 µMAX M ) Maxim MAX1840EUB+                   |
| U11                        |     1 | Microcontroller (64 LQFP) Maxim MAXQ622G-0000+                     |
| U9                         |     1 | 3.3V LDO (5 SC70) Maxim MAX8511EXK33+                              |
| U10                        |     0 | Not installed, ESD protector (6 SOT23)                             |
| Y1                         |     1 | 12MHz crystal (HCM49)                                              |
| -                          |     1 | USB high-speed A-to-B cable, 5ft (1.5m)                            |
| -                          |     1 | MAX54X EV kit CD                                                   |
| -                          |    20 | Shunts                                                             |
| -                          |     1 | PCB: MAX541/2 EVALUATION KIT                                       |

## Component Suppliers

| SUPPLIER                              | PHONE        | WEBSITE                     |
|---------------------------------------|--------------|-----------------------------|
| Murata Electronics North America Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                             | 847-803-6100 | www.component.tdk.com       |

µMAX is a registered trademark of Maxim Integrated Products, Inc. Note: Indicate the specific Maxim part number you are using when contacting these component suppliers.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- MAX54X	EV	kit
- MAX54X	EV	kit	CD
- User-supplied Windows	 XP, Windows	 Vista, or Windows 7 PC with a spare USB port
- Voltmeter

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

Procedure The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  Visit www.maxim-ic.com/evkitsoftware to download the latest version of the EV kit software, 54XRxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2)  Install  the  EV  kit  software  on  your  computer  by  running the INSTALL.EXE program inside the temporary folder.  The program files are copied and icons are created in the Windows Start | Programs menu.
- 3)  Verify that all jumpers are in their default positions, as shown in Table 2.
- 4)  Connect  the  USB  cable  from  the  PC  to  the  EV  kit board; the USB driver is installed automatically.
- 5)  Connect  the  positive  input  of  the  voltmeter  to  the BUF\_OUT1 connector. Connect the negative input of the voltmeter to the AGND connector.
- 6)  Start  the  EV  kit  software  by  opening  its  icon  in  the Start  |  Programs menu.  The  EV  kit  software  main window appears, as shown in Figure 1.
- 7)  The main window should display Hardware Connected in the bottom-left corner.
- 8)  In  the MAX541 group  box,  enter FFFF in  the DIN Register edit box and press the Enter button.
- 9)  The voltmeter should show a voltage value of approximately +2.5V.

<!-- image -->

## MAX54X Evaluation Kit

## Evaluates: MAX541/MAX542

## MAX54X EV Kit Files

- 10) Connect  the  positive  input  of  the  voltmeter  to  the BUF\_OUT2 connector.

| FILE                | DESCRIPTION                                |
|---------------------|--------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on your computer |
| MAX54X.EXE          | Application program                        |
| USBConverterDLL.DLL | Application library                        |
| UNINSTALL.EXE       | Uninstalls the EV kit software             |

## Quick Start

## Required Equipment

- 11) In  the MAX542 group  box,  click  on  the LDAC low radio  button,  enter FFFF in  the DIN  Register edit box, and press the Enter button.
- 12) The voltmeter should show a voltage value of approximately +2.5V.

## Detailed Description of Software

In the main window of the evaluation software (Figure 1), the  user  can  type  in  the  reference  voltage  in  the REF Voltage edit box. The software then calculates the DAC output voltages based on the reference voltage and the DAC input register value.

The MAX541 group  box  controls  the  MAX541  unipolar DAC on the EV kit board. The MAX542 group box controls the MAX542 bipolar DAC on the EV kit board.

To  change  the  DAC  input  register  value,  type  in  the desired  value  in  the DIN Register edit  box  and  press the Enter button. The user can also move the track bar to  change the DAC input register value. The DIN code and  the  target  DAC  output  voltages  are  displayed  for verification.

Selecting  the LDAC High radio  button  in  the MAX542 group box sets the MAX542 /LDAC pin high; selecting the LDAC Low radio button sets the MAX542 LDAC pin low. When the LDAC Low radio button is selected, the output of the DAC updates immediately when the DAC input register is updated. Pressing the LDAC Pulse button generates a low pulse on the MAX542 LDAC pin and updates the output of the DAC.

For the MAX542, the target output voltages are calculated based on the selected mode in the Output Mode radio group box.

Click on the Connect menu item to connect the board to the software if the USB connection is lost.

## Detailed Description of Hardware

The MAX54X EV kit provides a proven design to evaluate the installed MAX541/MAX542 serial-input, voltage-output, 16-bit  DACs.  The  DACs  are  controlled  by  an  on-board MAXQ  microcontroller  that  provides  two  separate  SPI control interfaces.

The EV kit provides on-board +2.5V high-precision voltage references. Use jumper JU2 to select from different reference sources.

The  EV  kit connects  one  precision bipolar buffer (MAX9632) to the MAX542 and one ultra-precision unipolar buffer (MAX44251) to the MAX541.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX54X Evaluation Kit

## Evaluates: MAX541/MAX542

The EV kit comes with the MAX541AESA+  and MAX542AESD+ installed; however, it can also be used to  evaluate  other  parts  in  the  same  family.  Contact  the factory  for  free  samples  of  the  pin-compatible  devices shown Table 1.

Caution: Refer  to  the  MAX44251/MAX44252  and  the MAX9632  IC  data  sheets  for  detailed  specifications. Pay special attention when using the USB power supply to power the devices. When the DAC output is beyond the  op  amp's  guaranteed  input  common-mode  voltage range,  use  external  power  supplies  instead.  For  better performance, use the ±15V power supply to power the MAX9632 op amp.

## Bipolar Output Mode (MAX542 Only)

To allow the MAX542 to operate in bipolar mode, connect a +5V supply to the OP2+ connector, connect a -5V supply to the OP2- connector, install a shunt across pins 1-2 on jumper JU14, and across pins 2-3 on jumpers JU11, JU12, and JU13.

<!-- image -->

Figure 1. MAX54X Evaluation Kit Software (Main Window)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX54X Evaluation Kit

## Evaluates: MAX541/MAX542

## Table 1. Pin-Compatible Devices Selector Guide

| PART         | TEMP RANGE         | PIN-PACKAGE   | INL (LSB)   |
|--------------|--------------------|---------------|-------------|
| MAX541 ACSA+ | 0 N C to +70 N C   | 8 SO          | Q 1         |
| MAX541BCSA+  | 0 N C to +70 N C   | 8 SO          | Q 2         |
| MAX541CCSA+  | 0 N C to +70 N C   | 8 SO          | Q 4         |
| MAX541AESA+  | -40 N C to +85 N C | 8 SO          | Q 1         |
| MAX541BESA+  | -40 N C to +85 N C | 8 SO          | Q 2         |
| MAX541CESA+  | -40 N C to +85 N C | 8 SO          | Q 4         |
| MAX542 ACSD+ | 0 N C to +70 N C   | 14 SO         | Q 1         |
| MAX542BCSD+  | 0 N C to +70 N C   | 14 SO         | Q 2         |
| MAX542CCSD+  | 0 N C to +70 N C   | 14 SO         | Q 4         |
| MAX542AESD+  | -40 N C to +85 N C | 14 SO         | Q 1         |
| MAX542BESD+  | -40 N C to +85 N C | 14 SO         | Q 2         |
| MAX542CESD+  | -40 N C to +85 N C | 14 SO         | Q 4         |

## Table 2. Jumper Settings

| JUMPER        | SHUNT POSITION   | DESCRIPTION                                                                        |
|---------------|------------------|------------------------------------------------------------------------------------|
| JU1           | 1-2*             | MAX541/MAX542 VDD connected to the USB power supply.                               |
| JU1           | 2-3              | MAX541/MAX542 VDD connected to the external power supply on the EXT_VDD connector. |
| JU2           | 1-2*             | REF input connected to the on-board +2.5V voltage reference.                       |
| JU2           | 2-3              | REF input connected to the external reference on the REF connector.                |
| JU3           | 1-2*             | MAX541 SCLK pin connected to the MAXQ622.                                          |
| JU3           | 2-3              | MAX541 SCLK pin connected to the SCLK0 connector.                                  |
| JU4           | 1-2*             | MAX541 DIN pin connected to the MAXQ622.                                           |
| JU4           | 2-3              | MAX541 DIN pin connected to the DIN0 connector.                                    |
| JU5           | 1-2*             | MAX541 CS pin connected to the MAXQ622.                                            |
| JU5           | 2-3              | MAX541 CS pin connected to the CS0 connector.                                      |
|               | 1-2*             | MAX44251 VDD connected to the USB power supply.                                    |
| JU6           | 2-3              | MAX44251 VDD connected to the external power supply on the OP1+ connector.         |
| JU7           | 1-2*             | MAX542 SCLK pin connected to the MAXQ622.                                          |
| JU7           | 2-3              | MAX542 SCLK pin connected to the SCLK1 connector.                                  |
| JU8           | 1-2*             | MAX542 DIN pin connected to the MAXQ622.                                           |
| JU8           | 2-3              | MAX542 DIN pin connected to the DIN1 connector.                                    |
| JU9           | 1-2*             | MAX542 CS pin connected to the MAXQ622.                                            |
| JU9           | 2-3              | MAX542 CS pin connected to the CS1 connector.                                      |
| JU10          | 1-2*             | MAX542 LDAC pin connected to the MAXQ622.                                          |
| JU10          | 2-3              | MAX542 LDAC pin connected to the LDAC connector.                                   |
| JU11          | 1-2*             | MAX9632 VEE connected to the analog ground.                                        |
| JU11          | 2-3              | MAX9632 VEE connected to the external power supply on the OP2- connector.          |
| JU12          | 1-2*             | MAX9632 IN- input connected to the OUT output of the MAX9632.                      |
| JU12          | 2-3              | MAX9632 IN- input connected to the INV signal of the MAX542.                       |
| JU13          | 1-2*             | MAX9632 VCC connected to the USB power supply.                                     |
| JU13          | 2-3              | MAX9632 VCC connected to the external power supply on the OP2+ connector.          |
| JU14          | 1-2              | MAX542 RFB input connected to the MAX9632 OUT output.                              |
| JU14          | Pin 1*           | MAX542 RFB input disconnected from the MAX9632 OUT output.                         |
| JU15          | 1-2*             | MAX44251 INB- input connected to the analog ground through a 2k I resistor.        |
| JU15          | Pin 1            | MAX44251 INB- input disconnected from the analog ground.                           |
| JU16          |                  |                                                                                    |
| JU16          | 1-2*             | MAX44251 INB+ input connected to the analog ground through a 2k I resistor.        |
| JU_ID0-JU_ID3 | 1-2*             | Factory test jumpers.                                                              |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX54X Evaluation Kit

## Evaluates: MAX541/MAX542

<!-- image -->

Figure 2a. MAX54X EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX54X Evaluation Kit

## Evaluates: MAX541/MAX542

<!-- image -->

Figure 2b. MAX54X EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evalutes: MAX541/ MAX542

<!-- image -->

Figure 3. MAX54X EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 4. MAX54X EV Kit PCB Layout-Component Side Figure 4. MAX54X EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX54 Evalution Kit

## Evalutes: MAX541/ MAX542

<!-- image -->

Figure 5. MAX54X EV Kit PCB Layout-Ground Layer 2

<!-- image -->

Figure 6. MAX54X EV Kit PCB Layout-Power Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX54 Evalution Kit

## Evalutes: MAX541/ MAX542

<!-- image -->

Figure 7. MAX54X EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX54 Evalution Kit

## Ordering Information

| PART         | TYPE   |
|--------------|--------|
| MAX54XEVKIT# | EV Kit |

# Denotes RoHS-compliant.

11

## MAX54X Evaluation Kit

## Evaluates: MAX541/MAX542

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.