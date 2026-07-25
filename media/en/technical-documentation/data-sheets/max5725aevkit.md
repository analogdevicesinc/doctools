<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

## General Description

The  MAX5725A  evaluation  kit  (EV  kit)  demonstrates the  MAX5725A  12-bit,  8-channel,  low-power  DAC  with selectable internal references and buffered voltage output.  The  IC  is  in  a  20-pin  TSSOP  package.  The  EV  kit provides  control  to  change  the  DAC's  outputs,  power operations, references, and watchdog time setting.

The IC features a watchdog function that can be enabled to monitor the I/O interface for activity and integrity.

The  EV  kit  includes  a  USB-to-SPI  interface  circuit.  The EV  kit  features  Windows  XP M -,  Windows  Vista M -,  and Windows M 7-compatible software that provides a simple graphical  user  interface  (GUI)  for  exercising  the  IC's features.

The  EV  kit  comes  with  the  MAX5725AAUP+  installed, which  is  the  12-bit  SPI  version.  Contact  the  factory  for samples  of  the  pin-compatible  MAX5723AUP+  (8-bit), MAX5724AUP+  (10-bit),  and  MAX5725BAUP+  (12-bit) versions.

Ordering Information appears at end of data sheet.

## Features

- S Wide Input Supply Range: 2.7V to 5.5V
- S Independent Voltage for Digital I/O: 1.8V to 5.5V
- S Demonstrates 4.4µs (typ) Settling Time of Buffered Output
- S Precision Selectable Internal References Supporting 2.048V, 2.500V, and 4.096V
- S Demonstrates User-Supplied External Reference
- S Three Selectable Output Impedance (Termination) in Power-Down Mode  1k I , 100k I , or High Impedance
- S Power-Up Reset to Midscale or Zero
- S Supports Entire Family of Octal SPI/I 2 C DACs
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- S USB-Powered (Cable Included)
- S Demonstrates Configurable Interface Watchdog Timer
- S Fully Assembled and Tested with Proven PCB Layout

Figure 1. MAX5725A EV Kit

<!-- image -->

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4 or visit Maxim's website at www.maxim-ic.com.

| DESIGNATION                                       |   QTY | DESCRIPTION                                                             |
|---------------------------------------------------|-------|-------------------------------------------------------------------------|
| C1, C13, C15                                      |     3 | 10 F F Q 10%, 10V X7R ceramic capacitors (0805) Murata GRM21BR71A106K   |
| C2, C3, C5, C10, C17, C19, C20, C24, C26-C29, C36 |    13 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C104K  |
| C4                                                |     1 | 100pF Q 5%, 50V C0G ceramic capacitor (0603) Murata GRM1885C1H101J      |
| C6-C9, C25, C37-C40                               |     0 | Not installed, ceramic capacitors (0603)                                |
| C11, C12                                          |     2 | 10pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J      |
| C14, C16, C30-C35                                 |     8 | 1 F F Q 10%, 16V X7R ceramic capacitors (0603) Murata GRM188R71C105K    |
| C18                                               |     1 | 4.7 F F Q 10%, 10V X5R ceramic capacitor (0805) Murata GRM219R61A475K   |
| C21                                               |     1 | 0.033 F F Q 10%, 25V X7R ceramic capacitor (0603) Murata GRM188R71E333K |
| C22, C23                                          |     2 | 22pF Q 5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J      |
| D1                                                |     1 | Green LED (0603)                                                        |
| DAC0-DAC7, IRQ , REF, +5V                         |    11 | Red multipurpose test points                                            |
| GND                                               |     1 | Black multipurpose test point                                           |
| H1                                                |     0 | Not installed, 10-pin (2 x 5) header                                    |
| H2                                                |     1 | 18-pin (2 x 9) header                                                   |
| JU1, JU2, JU9, JU10, JU11, JU13                   |     6 | 3-pin headers                                                           |
| JU3, JU4, JU5                                     |     3 | 4-pin headers                                                           |
| JU6, JU7, JU8, JU12, JU14                         |     5 | 2-pin headers                                                           |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

## Component List

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                                              |
|---------------|-------|--------------------------------------------------------------------------|
| R1, R2, R28   |     3 | 4.7k I Q 5% resistors (0603)                                             |
| R3            |     1 | 1M I Q 5% resistor (0603)                                                |
| R5, R18-R26   |    10 | 1.5k I Q 5% resistors (0603)                                             |
| R6, R7        |     2 | 27 I Q 5% resistors (0603)                                               |
| R8            |     1 | 220 I Q 5% resistor (0603)                                               |
| R9-R13, R16   |     0 | Not installed, resistors (0402) R9-R13 are short (PC trace); R16 is open |
| R14, R15      |     0 | Not installed, resistors (0603)                                          |
| R29           |     1 | 100k I Q 5% resistor (0603)                                              |
| U1            |     1 | 12-bit, 8-channel DAC (20 TSSOP) Maxim MAX5725AAUP+                      |
| U2            |     1 | Microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+                         |
| U3            |     0 | EEPROM (8 SO)                                                            |
| U4            |     1 | UART-to-USB converter (32 LQFP)                                          |
| U5            |     1 | 3.3V LDO regulator (5 SC70) Maxim MAX8511EXK33+                          |
| U6            |     1 | 2.5V LDO regulator (5 SC70) Maxim MAX8511EXK25+                          |
| U7            |     1 | 2.5V voltage reference (8 SO) Maxim MAX6173AASA+                         |
| U8, U9, U10   |     3 | Level translators (10 F MAX M ) Maxim MAX1840EUB+                        |
| USB1          |     1 | USB type-B, right-angle PC- mount receptacle                             |
| Y1            |     1 | 16MHz crystal (HCM49) Hong Kong X'tals SSM16000N1HK188F0-0               |
| Y2            |     1 | 6MHz crystal (HCM49) Hong Kong X'tals SSL60000N1HK188F0-0                |
| -             |     1 | USB high-speed A-to-B cable (6 ft)                                       |
| -             |    14 | Shunts                                                                   |
| -             |     1 | PCB: MAX5725A EVALUATION KIT                                             |

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Hong Kong X'tals Ltd.                  | 852-35112388 | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |

Note: Indicate that you are using the MAX5725A when contacting these component suppliers.

## MAX5725A EV Kit Files

| FILES                   | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX5725A.EXE            | Application program                        |
| CDM20600.EXE            | Installs the USB device driver             |
| UNINSTALL.EXE           | Uninstalls the EV kit software             |
| USB_Driver_Help_200.PDF | USB driver installation help file          |

## Quick Start

## Required Equipment

- MAX5725A	EV	kit	(USB	cable	included)
- Windows	XP,	Windows	Vista,	or	Windows	7	PC	with	a spare USB port
- Digital	voltmeter	(DVM)

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation:

- 1)  Verify that jumpers JU1-JU14 are in their default positions, as shown in Table 1.
- 2)  Visit www.maxim-ic.com/evkitsoftware to download the  latest  version  of  the  EV  kit  software,  5725ARxx. ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

- 3)  Install  the  EV  kit  software  on  your  computer  by  running the INSTALL.EXE program inside the temporary folder. The program files are copied to your PC and icons are created in the Windows Start | Programs menu. During software installation, some versions of Windows  may  show  a  warning  message  indicating that this software is from an unknown publisher. This is not an error condition and it is safe to proceed with installation.  Administrator  privileges  are  required  to install the USB device driver on Windows.
- 4)  Connect  the  USB  cable  from  the  PC  to  the  EV  kit board. A Windows message appears when connecting the EV kit board to the PC for the first time. Each version of Windows has a slightly different message. If you see a Windows message stating ready to use , then  proceed  to  the  next  step.  Otherwise,  open  the USB\_Driver\_Help\_200.PDF document in the Windows Start | Programs menu to verify that the USB driver was installed successfully.
- 5)  Start  the  EV  kit  software  by  opening  its  icon  in  the Start  |  Programs menu.  The  EV  kit  software  main window appears, as shown in Figure 2.
- 6)  Within the DACs tab sheet, press the EXECUTE button with the Quick DAC Output Voltage group box.
- 7)  Use  the  GNDS  pad  for  the  negative  terminal  of  the DVM  and  use  the  positive  terminal  to  measure  the voltage at  the  DAC\_  test  points.  Verify  that  the  voltages measured are 1.25V.

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

<!-- image -->

Figure 2. MAX5725A EV Kit Software Main Window (DACs Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

<!-- image -->

Figure 3. MAX5725A EV Kit Software Main Window (Scripts Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

<!-- image -->

Figure 4. MAX5725A EV Kit Software Main Window (Configuration Status Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

## Detailed Description of Software

The  MAX5725A  EV  kit  software  can  evaluate  the  SPI interface  MAX5725A  family  of  12-/10-/8-bit  DACs.  The main  software  window  has  three  tabs: DACs , Scripts , and Configuration Status .  Within  the DACs tab  sheet (Figure  2),  the  user  can  set  the  reference  and  DAC outputs.  The Scripts tab  sheet  (Figure  3)  allows  the user  to  send  a  sequence  of  write  commands  to  the eight DACs, and load and save the write sequence. The Configuration Status tab sheet (Figure 4) displays the configuration settings for each DAC. In addition, the software allows the user to adjust the configuration, power, reset, and default settings.

## Demo Mode

The EV kit software enters the demo mode when the USB connection  is  not  detected.  When  in  demo  mode,  all communication to the EV kit is disabled; however, most of the software is functional. Demo mode allows the user to evaluate the software without hardware connectivity.

## Part Selection

The  user  must  select  the  appropriate  radio  button  in the Part  Selection group  box  that  corresponds  to  the installed Maxim IC DAC bits.

## SPI Interface

When the  software  first  starts  up,  the SPI radio  button is  selected  automatically.  If  the  user  selects  the I2C radio button, then the software searches for a valid I 2 C address that is on the bus. If no address is found, the software returns to the SPI radio button selection.

The EV kit is capable of evaluating I 2 C parts by replacing  U1.  Once  the  I 2 C  part  is  installed,  refer  to  the I 2 C Address section in the MAX5825A EV kit data sheet.

## Reference

The reference default configuration is set to 2.5V using the external voltage reference IC (U7). The external 2.5V reference can be connected between the EXT\_REF pin and its corresponding ground. Select the External Ref radio  button  and  type  the  reference  voltage  into  the edit box. Removing the shunt from jumper JU11 allows internal reference options that include 2.048V, 2.5V, and 4.096V selection using the corresponding radio buttons. Make sure the VDD supply is greater or equal to the voltage reference selected for proper operation. When the EV kit uses the on-board 3.3V supply to power the IC, the 4.096V radio button selection will not provide the 4.096V.

## DAC Commands

Within the DACs tab  sheet (Figure 2), the user can set the output of the DACs with two options. The first option is the Quick DAC Output Voltage group box that allows the user to write and load the CODE to all the DACs. Set the desired output for each DAC using the corresponding slider and press the EXECUTE button. The second option is to write the return CODE, write the CODE, load the  CODE,  or  write  and  load  the  CODE  to  the  desired DAC using the drop-down lists and edit box within the Command group box. Press the EXECUTE button once all the settings are appropriately configured.

<!-- image -->

## DAC Commands (Script)

Within the Scripts tab sheet (Figure 3), enter the desired Data on the left and choose the appropriate Command from the drop-down list. Pressing the EXECUTE button writes to the CODE and/or DAC registers and the Script Status changes  from Incomplete to Complete .  Refer to  the  MAX5725A  IC  data  sheet  for  a  list  of  possible commands.  If  a  sequence  of  commands  needs  to  be performed,  adjust  all Data edit  boxes  and Command drop-down  lists  accordingly,  and  press  the EXECUTE ALL button.  To  reset  the Script Status to Incomplete , press the RESET SCRIPT button.

## Data Logging

Using the SAVE button, the sequence of commands can be saved into a text file format. To recall the sequence, press the LOAD button and select the appropriate text file.

## Configuration Status

The Configuration Status tab sheet (Figure 4) displays the current status of the configuration, power, and default settings for each DAC.

## Read Back

The  EV  kit  reads  back  the  return,  CODE,  DAC,  and watchdog values. Check the INC checkbox to increment the  address  pointer  and  select  the  appropriate  radio button  to  set  the DOUT PHASE equal  to  0  or  1  when reading back. Select the appropriate Read radio button and press the EXECUTE button in the Read Back group box.

## Asynchronous CLR

A checked CLR Asserted checkbox drives the CLR pin of the IC low, which clears the content of both CODE and DAC registers. Unchecking the CLR Asserted checkbox drives the CLR pin  high  and  writing  new  commands is allowed again.

## Asynchronous LDAC

A checked LDAC Asserted checkbox drives the LDAC pin  of  the  IC  low,  which  allows  writing  to  the  CODE register  and  then  automatically  transfers  to  the  DAC register  to  change  the  DAC's  output.  Unchecking  the LDAC Asserted checkbox  drives  the LDAC pin  high. To change the DAC outputs, the user must write to the CODE registers, and then write to the DAC registers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

## Interface Watch Dog

Use the Mask checkbox, Timeout edit box, and Safety Level radio  buttons  to  set  the  watchdog.  The  timeout time range that can be entered into the edit box is 1 ms to 4095 ms. The user must allow enough timeout time to send data to the DAC(s). It is recommended that the user set  the  timeout  time  to  the  maximum  time  of  4095ms, because  the  time  Windows  takes  to  communicate  with the part may vary. In addition, configure the DAC output settings before pressing the EXECUTE button. The IRQ circle  changes  from  white  to  red  when  the IRQ signal goes low. Refer to MAX5725A IC data sheet for detailed description.

## Configuration

The  configuration  command  includes  the Watch  Dog radio  buttons  and  the GATE\_ENB , LDAC\_ENB ,  and CLEAR\_ENB checkboxes for selected DAC(s). See the Configuration Status tab  sheet to monitor the settings on  each  DAC.  Refer  to  MAX5725A  IC  data  sheet  for detailed description.

## Power

The power command is selectable for individual DACs. When  a  DAC  is  selected,  the  channel  is  active.  Other options  include  powering  down  with  1k I termination to  GND,  100k I termination  to  GND,  and  high  impedance. Once the appropriate selection is made, press the EXECUTE button.

## Reset

The reset command allows the user to set or clear the gate, refresh or reset the watchdog timer, or issue a software reset or clear. Refer to MAX5725A IC data sheet for detailed description.

## Default

The default command allows the user to set the default settings for individual DACs. Refer to MAX5725A IC data sheet for detailed description.

## Advanced User Interface

There are two methods for communicating with the IC. The first  is  through  the  window  shown  in  Figure  2.  The second  is  through  the Advanced  User  Interface window shown in Figure 4. The Advanced User Interface window  becomes  available  by  selecting  the Options |  Interface  (Advanced  User) menu  item  and  allows execution of serial commands manually.

This interface is not recommended unless the user has to change individual bits in the interface.

<!-- image -->

Figure 5. Advanced User Interface Window (3-Wire Interface Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

## Detailed Description of Hardware

The MAX5725A EV kit provides a proven layout for the MAX5725A  IC.  An  on-board  external  2.5V  reference (MAX6173),  USB  interface  circuitry,  and  jumpers  to disconnect the on-board microcontroller are included on the EV kit.

## User-Supplied Power Supply

The EV kit is powered completely from the USB port by default. To power the IC with a user-supplied power supply, move the shunt on jumper JU10 to the 2-3 position and apply a 2.7V to 5.5V power supply at the VDD\_EXT and the nearest GND PCB pads on the EV kit.

The  on-board  external  2.5V  voltage  reference  (U7)  is powered from the USB interface circuit when a shunt is installed in the 1-2 position on jumper JU13. To use the same external supply applied at the VDD\_EXT PCB pad, move the shunt to the 2-3 position on JU13.

## User-Supplied Reference

The on-board voltage reference (U7) generates a voltage reference of 2.5V. The user can apply an external voltage reference by moving the shunt on jumper JU11 to the 2-3 position  and  applying  2V  to  VDD  at  the  REF\_EXT  PCB pad on the EV kit. If the internal reference is selected, the REF pin becomes an output. In this case, JU11 should be removed.

## User-Supplied SPI

To  evaluate  the  EV  kit  with  a  user-supplied  SPI  bus, remove shunts from jumpers JU1-JU4. Apply the usersupplied CS ,  SCLK,  DIN,  and  DOUT  signal  to  header pins H1-1, H1-3, H1-5, and H1-7, respectively. Connect the user-supplied SPI ground to header pins H1-2, H1-4, H1-6, and H1-8.

## User-Supplied IRQ , CLR , and LDAC

Remove the shunts  from  jumpers  JU5  and  JU6.  Apply the  user-supplied IRQ , CLR ,  and LDAC to  header  pins H1-11,  H1-15,  and  H1-17,  respectively.  Connect  the user-supplied  signal  ground  to  header  pins  H1-12, H1-16, H1-18.

<!-- image -->

Figure 6. Jumper Callouts

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

Table 1. Jumper Settings (JU1-JU14)

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                        |
|----------|------------------|----------------------------------------------------------------------------------------------------|
| JU1      | 1-2*             | Connects the CS signal of the on-board microcontroller to the CS pin of IC U1.                     |
| JU1      | 2-3              | Do not install.                                                                                    |
| JU1      | Not installed    | User-supplied CS . Apply an appropriate signal at header pin H1-1.                                 |
| JU2      | 1-2*             | Connects the SCLK signal of the on-board microcontroller to the CS pin of IC U1.                   |
| JU2      | 2-3              | Do not install.                                                                                    |
| JU2      | Not installed    | User-supplied SCLK. Apply an appropriate signal at header pin H1-3.                                |
| JU3      | 1-2              | Do not install.                                                                                    |
| JU3      | 1-3*             | Connects the DIN signal of the on-board microcontroller to the DIN pin of IC U1.                   |
| JU3      | 1-4              | Do not install.                                                                                    |
| JU4      | 1-2              | Do not install.                                                                                    |
| JU4      | 1-3*             | Connects the DOUT signal of the on-board microcontroller to the DOUT pin of IC U1.                 |
| JU4      | 1-4              | Do not install.                                                                                    |
| JU5      | 1-2              | Connects the LDAC pin of IC U1 to VDDIO.                                                           |
| JU5      | 1-3*             | Connects the LDAC signal of the on-board microcontroller to the LDAC pin of IC U1.                 |
| JU5      | 1-4              | Connects the LDAC pin of IC U1 to GND.                                                             |
| JU6      | Installed*       | Connects the CLR signal of the on-board microcontroller to the CLR pin of IC U1.                   |
| JU6      | Not installed    | User-supplied CLR . Apply an appropriate signal at header pin H1-15.                               |
| JU7      | Installed        | Do not install.                                                                                    |
| JU7      | Not installed*   | Disconnects pullup resistor R1 from the CS pin of IC U1.                                           |
| JU8      | Installed        | Do not install.                                                                                    |
| JU8      | Not installed*   | Disconnects pullup resistor R2 from the SCLK pin of IC U1.                                         |
| JU9      | 1-2*             | Connects the VDDIO pin of IC U1 to the on-board 3.3V supply.                                       |
| JU9      | 2-3              | Connects the VDDIO pin of IC U1 to a user-supplied power supply between 1.7V and 5.5V (VDDIO_EXT). |
| JU10     | 1-2*             | Connects the VDD pin of IC U1 to the on-board +3.3V supply.                                        |
| JU10     | 2-3              | Connects the VDD pin of IC U1 to a user-supplied power supply between 2.7V and 5.5V (VDD_EXT).     |
| JU11     | 1-2              | User-supplied REF. The user must apply a voltage reference at the REF_EXT PCB pad.                 |
| JU11     | 2-3*             | Connects the on-board voltage reference IC (U7) to the REF pin of IC U1.                           |
| JU12     | Installed*       | Connects the M/ Z pin of IC U1 to VDD.                                                             |
| JU12     | Not installed    | Connects the M/ Z pin of IC U1 to 100k I pulldown resistor.                                        |
| JU13     | 1-2*             | Powers IC U7 using the USB supply.                                                                 |
| JU13     | 2-3              | Powers IC U7 using the user-supplied power supply.                                                 |
| JU14     | Installed*       | Connects additional bypass capacitor C36 on the REF pin of IC                                      |
| JU14     | Not installed    | U1. Disconnect additional bypass capacitor C36 on the REF pin of IC U1.                            |

* Default position.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evalution Kit

## Evalutes: MAX5723/MAX5724/ MAX5725A/MAX5725B

<!-- image -->

Figure 7a. MAX5725A EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evalution Kit

## Evalutes:  MAX5723/MAX5724 / MAX5725A/MAX5725B

<!-- image -->

Figure 7b. MAX5725A EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

<!-- image -->

Figure 8. MAX5725A EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

<!-- image -->

Figure 9. MAX5725A EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

<!-- image -->

Figure 10. MAX5725A EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX5725AEVKIT# | EV Kit |

# Denotes RoHS compliant.

<!-- image -->

## MAX5725A Evaluation Kit

## Evaluates: MAX5723/MAX5724/ MAX5725A/MAX5725B

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 5/12            | Initial release | -               |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.