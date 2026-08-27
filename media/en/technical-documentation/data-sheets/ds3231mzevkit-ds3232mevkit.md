<!-- lastmod 2022-08-05 -->
## DS3231MZ/DS3232M Evaluation Kits

## General Description

The  DS3231MZ/DS3232M (DS323X) evaluation  kit  (EV kit) is a fully assembled and tested circuit board with an accompanying  application  program  that  demonstrates the  operation  of  the  DS3231M  or  DS3232M  temperature-compensated  real-time  clocks.  The  DS3231M  and DS3232M I 2 C real-time clocks contain an internal silicon (MEMS)  resonator  for  its  timekeeping  reference.  Both components  constantly  monitor  the  operating  temperature, periodically adjusting the internal oscillator frequency to maintain highly accurate time information.

The EV kit includes one TCXO component soldered onto the  demonstration  board,  a  USB  I/O  communications module for evaluation kits  (DS3900H2),  and  a  CD  containing the application program and instructions. System requirements  are  a  Windows ® -compatible  PC  running Windows XP ® , Windows Vista ® , or later, and a USB port. The  EV  kit  allows  for  optional  user  configuration  to  a single  power-supply  operation,  and  the  accompanying I 2 C  interface  and  application  program  provides  easy access  to  manipulate  register  settings,  while  observing the various component functions of timekeeping and realtime alarm-initiated interrupts.

The  EV  kit  also  allows  the  user  to  connect  their  I 2 C master to the sample component for operational verification and/or code generation.

## EV Kit Photo

<!-- image -->

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

Evaluate: DS3231M or DS3232M

## Features and Benefits

- Aid to Fast Hardware and Software Debugging
- GUI-Based Application for Ease of Use
- Allows for User-Configurable Single- or Dual-Supply Operation
- Optional Footprint Accepts 8-Pin or 16-Pin SO

## EV Kit Contents

- Assembled Circuit Board Including the TCXO Component
- USB Communications Module for Evaluation Kits (DS3900H2)

## EV Kit Files

| FILE            | DECRIPTION          |
|-----------------|---------------------|
| DS323XEVKit.exe | Application program |

Ordering Information appears at end of data sheet.

<!-- image -->

## DS3231MZ/DS3232M Evaluation Kits

## Quick Start

## Recommended Equipment

- DS3231MZ or DS3232M EV kit
- 5V,  1A  power  supply  (PS1  =  VBOARD  optional  I/O power)
- 5V, 1A power supply (PS2 = VCC device power)
- 5V, 1A power supply (PS3 = VBAT backup power)
- Windows XP/Vista/7 PC with USB capability
- USB-Mini type A to type B cable
- Oscilloscope (optional)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from the EV kit software.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  the  EV  kit  dual-supply  board  operation. Caution:  Do  not  enable  the  power  supplies  until  all connections are completed.

- 1)  Verify that jumpers J6-J8 are installed, where noted. J6  and  J7  connect  the  32kHZ  and INT /SQW output pin  pullup  resistors  (respectively/if  populated)  to  the VBOARD bias. J8 connects the RST (active-low) LED anode to the VCC bias.
- 2)  If  using  a  separate  VBOARD  (I/O)  power  supply, connect the PS1 power supply across the VBOARD (J5)  and GND (J4) connectors. If I/O power is going to be derived from the VCC supply, connect a banana jumper from VBOARD (J5) to VCC (J2).
- 3)  Connect the PS2 power supply across the VCC (J2) and GND (J4) connectors.
- 4)  Connect the PS3 power supply across the VBAT (J3) and GND (J4) connectors.
- 5)  Set PS3 for +3V, 100mA, and enable the PS3 output.
- 6)  Set PS2 for +3.3V, 200mA, and enable the PS2 output. The reset LED (D1) illuminates for ~250mS.

## Evaluate: DS3231M or DS3232M

- 7)  If using separate VBOARD power, set PS1 for +3.3V, 200mA, and enable the PS1 output.
- 8)  Connect the USB cable (not provided) from the PC to the  DS3900H2  mini-B  USB  connector.  The  D2  LED will  illuminate  red/blinking.  Allow  Windows  time  to recognize  the  new  USB  device  and  load  the  device driver before proceeding.

See the Software Procedure section.

## Software Procedure

## DS3900 USB-to-I 2 C Setup

Note: The DS3900H2 is the small daughter card located on the top-left corner of the EV kit. It converts USB to I 2 C and allows the GUI to communicate to the DS323X. It is important to allow Windows the time necessary to install the device driver, prior to first use.

When initially connecting the USB cable, Windows should automatically recognize this new USB device. Wait until you see the message indicating that the device is ready for use.

The application is a self-contained exe file and can now be executed from the CD or copied to any directory on the PC. No installation script is required, nor included.

## Device Prompt

On program start, select the appropriate device type and click on OK (see Figure 1).

If  I/O  is  operational,  the  D2  LED  turns  green  and  the application  automatically  proceeds  to  the Monitor tab display (see Figure 3).

If  I/O  initialization  fails,  an  error  message  is  displayed (see Figure 2).

To  ignore  the  I/O  error  and  simply  browse  the  GUI  in demo mode (i.e., screen display only), click OK to  view the  tabs.  No  component  or  I/O  operations  are  active  in demo mode.

Otherwise, power off all supplies, recheck the connections, exit, and restart the application.

Figure 1. Device Prompt

<!-- image -->

Figure 2. Error Message

<!-- image -->

## Detailed Description of Software

## Monitor Tab

The Monitor tab graphical user interface (GUI) screen is organized  into  several  basic  sections,  as  highlighted  in Figure 3.

When  entering  the Monitor tab,  an  I/O  read  of  the component registers automatically executes to display the present contents in a human-formatted graphical display.

New register values can be entered into the appropriate registers by field using the Monitor tab,  or  alternatively, by hexadecimal register address using the Memory tab (see Figure 6).

In  each  section  of  the Monitor tab,  the  component settings can be manually written or read using the Read or Write buttons provided in that section. Double-click in the field desired to enter new data. A &lt;Tab&gt; then moves the cursor to the next dialog box.

## Monitor Tab Notes:

- Unused dialog boxes display '-.'
- Day  register  (classic  calendar  arrangement)  defines Sunday = '1,' Monday = '2,' etc.
- Digital clock display: Century bit value 0 displays '20,' and Century bit value 1 displays '21.'

## Device Polling

Clicking on the Start Real Time Monitoring button puts the application into a continuous-read loop, updating the real-time, alarm, status, control, and temperature-sensor register  contents.  Once  started,  this  button  toggles  to Stop  Real  Time  Monitoring ,  and  the  green  LED  (D2) on the DS3900H2 blinks red upon each component read (see Figure 4).

If  looping,  clicking  on  the Stop  Real  Time  Monitoring button halts the read loop and returns I/O control to the application.  Once  stopped,  this  button  toggles  back  to Start Real Time Monitoring .

Access  to  all  other  buttons  is  inhibited  during  real-time monitoring.

Figure 3. Monitor Tab

<!-- image -->

Figure 4. Monitor Loop

<!-- image -->

## DS3231MZ/DS3232M Evaluation Kits

## Power Switching

In dual-voltage configuration, and to facilitate testing the battery-related timekeeping or alarm functions, follow the steps below:

- 1)  With the power supplies enabled and the application running, stop any real-time monitoring.
- 2)  Load and verify time and/or alarm values, as needed. Note: Do not exit the application.
- 3)  Set PS1 (VBOARD) to 0V.
- 4)  Set  PS2  (VCC)  to  0V.  The  Reset  LED  illuminates momentarily  as  the  supply  voltage  falls  below  V PF . Note: The component is now being powered by PS3 (VBAT).

To restore I/O,  restore  PS2  (VCC)  and  PS1  (VBOARD) to  their  valid  conditions  (in  that  order)  and  return  to  the desired application operation.

## Changing Tabs

To go to the desired tab, simply click on a tab located in the upper left-hand corner (see Figure 5). For example, to select the Memory tab, click on Memory ; to select the Monitor tab, click on Monitor.

## Memory Tab

The Memory tab  (see  Figure  6)  includes  a  series  of manual dialog boxes, providing basic I 2 C communication strings to pass to and from the EV kit.

## Evaluate: DS3231M or DS3232M

Figure 5. Changing Tabs

<!-- image -->

Buttons  have  been  provided  to  execute  four  unique single-byte write or read instructions, two dual-byte write or read instructions, a singular bit-wise modification tool, a burst write or read of the component's RTC registers, two multi-byte (8 byte) write or read instructions, and (if DS3232M  is  selected)  a Memory  Fill  Tool for  the  NV SRAM. A session log and application information are also presented.

Unused dialog boxes display '-' until some user-initiated action has occurred in that write or read dialog.

Double-click  in  the Addr box  to  enter  a  hex  register address; tab to the Data box to enter new data. Click on the appropriate Write or Read button to execute the I/O transmission.

Figure 6. Memory Tab

<!-- image -->

## Register Programming

As  previously  noted,  the Monitor tab Read or Write buttons are assigned and function within the predefined section  of  the  targeted  component  under  evaluation. For example, clicking the Read button in the Real Time Clock group  box  executes  a  device  read  of  only  the seven RTC registers (00h-06h) and displays the result in a human-formatted 8-field display.

On the Memory tab, the general-purpose single-byte and dual-byte write and read functions are not predefined for any  specific  register  or  component  function.  The  user must enter a register address, as well as the new data to be written (if applicable), and then manually initiate the I/O transfer by clicking on the Read or Write button.

Whenever a Write button is clicked, the new data is sent to  the  component and a subsequent verification read is automatically executed. The Data field then displays the verified contents of that register.

## Examples

## Read Register 0Eh (Using a One-Byte Read)

Place  the  cursor  on  any  one  of  the  four  optional Addr boxes  in  the One Byte  Reads/Writes group  box.  Leftclick to open the box and enter the hexadecimal address (in this case, 'E' is sufficient and preceding zeros can be omitted).

Click  on  the Read button  to  the  right  of  that Addr box and the Data field displays the content of the register (in hexadecimal). The session log also records a transaction.

## Write 04h to Control Register 0Eh (Using a OneByte Write)

Place  the  cursor  on  any  one  of  the  four  optional Addr boxes  in  the One Byte  Reads/Writes group  box.  Leftclick to open the box and enter the hexadecimal address (in this case, 'E' is sufficient and preceding zeros can be omitted). Tab to the next field (or move the cursor manually), and enter the new data (in this case, '4' is sufficient).

Click  on  the Write button  to  the  right  of  that Addr box and the Data field displays the new verified content of the register (in hexadecimal). The session log also records a transaction.

## Read Registers 0Eh and 0Fh (Using a Two-Byte Read)

Utilizing the internal address autoincrement feature of the component, the user can read two adjacent registers in one I/O transaction.

## Evaluate: DS3231M or DS3232M

Place the cursor on either one of the two optional Addr boxes in the Two Byte Read/Write group box. Left-click to open the box and enter the first register address ('E' is the first and preceding zeros can be omitted).

Click on the Read button to the right of that Addr box and the two Data fields display the contents of the registers (in hexadecimal) in the order of their addressing. The session log also records a transaction.

## Write 01h to Day and 23h to Date Registers |03h-04h (Using a Two-Byte Write)

Utilizing the internal address autoincrement feature of the component, the user can write two adjacent registers in one I/O transaction.

Place the cursor on either one of the two optional Addr boxes in the Two Byte Read/Write group box. Left-click to open the box and enter the first register address ('3' is the first and preceding zeros can be omitted). Tab to the first Data field and enter the data for the first register ('1'). Tab to the second Data field and enter the new data for the second register ('23').

Click  on  the Write button  to  the  right  of  that Addr box and the Data field displays the new verified content of the registers (in hexadecimal). The session log also records a transaction.

## Bit-Wise Operations to Toggle OSF Bit in the Status Register (0Fh)

One  single-byte window  is designated for bit-wise operations.

Place  the  cursor  on  the Addr box  in  the Bitwise Operations group  box.  Left-click  to  open  the  box  and enter  the  hexadecimal  address  (in  this  case,  'F'  is sufficient and preceding zeros can be omitted).

Click on the Read button to the right of that Addr box and the Data box displays the content of the register (in hexadecimal); directly below that box, each bit is represented in its weighted position by a '1' or '0.'

Assuming the register contents were initially found to be 83h (OSF, A2F, and A1F), the display should show Data = 83 (hex) and 10000011 , respectively. If the user wants to clear only bit 7, then pressing the bit7 button should invert the content of only that specific bit.

Click on the Write button and the Data field displays the updated and verified content of the registers (in hexadecimal). The session log also records a transaction.

## DS3231MZ/DS3232M Evaluation Kits

## Mode (Burst Write or Read)

Read or Write buttons  in  the Mode group  box  are provided to load or read all component RTC registers in sequential address order.

## Memory Fill Tool

To  facilitate  loading  of  the  DS3232M  NV  SRAM  data space  (14h-FFh),  a  user-definable Memory  Fill  Tool group box is provided to sequentially load memory space bounded by the START and STOP addresses.

Example: To fill the entire NV SRAM area with AAh, enter a Start Address of  '14'  (hex),  a Stop Address of  'FF' (hex),  a Data of  'AA'  (hex),  and  click  on  the Fill  Now button.

Verification  (reads)  can  be  accomplished  using  either  a single, dual, or multiple (8) byte read function.

## Find I 2 C Slave Addresses

To  validate  I 2 C  communications,  the Find button  in  the Find  I2C  Slave  Addresses group  box  queries  for  all slave addresses presently connected to the SDA bus.

Figure 7. USB Version

<!-- image -->

## Evaluate: DS3231M or DS3232M

## Pushbutton Reset Detection

The  EV  kit  provides  an  external,  manual  pushbutton switch that is connected to the RST output pin. When VCC power is present, the RST pin  is  continuously monitored for a low-going edge on that signal. If an edge is detected, the DS323X component debounces the switch by pulling the RST line  low  (illuminating  D1).  After  a  timeout  has expired, the DS323X releases RST to restart the CPU.

Whenever VCC is valid, depressing switch S1 pulls the reset  line  to  ground  and  illuminates  D1  (red  LED)  for ~250ms from the release of the pushbutton.

The RST output  function  and  D1  LED are not available when component power is provided from VBAT.

## Applications Information

On the Monitor or Memory tabs, in the lower right-hand corner, the application displays:

- The Device Type selected when the program was started
- The software revision identity (see Figure 7)

In the lower left-hand corner of the Monitor tab, the USB identity and firmware version is displayed (see Figure 8).

Figure 8. Apps Information

<!-- image -->

## DS3231MZ/DS3232M Evaluation Kits

## Single-Supply Operation

The DS323X can operate using three unique power-supply configurations:

- 1)  Dual supply (VCC for operation, VBAT for backup)
- 2)  Single supply (VCC only)
- 3)  Single supply (VBAT only)

The EV kit is assembled for use in dual-supply mode. See the Quick Start section.

## Single-Supply Operation Using VCC Only

To utilize the EV kit in VCC-only mode, connect a banana cable  from  VBAT  (J3)  to  GND  (J4);  do  not  use  PS3. Perform the following:

- 1)  Verify that jumpers J6-J8 are installed (where noted). J6 and J7 connect the 32kHZ and INT /SQW output pin pullup resistors (respectively) to the VBOARD bias. J8 connects the RST (active-low) LED anode to the VCC bias.
- 2)  If  using  a  separate  VBOARD  (I/O)  power  supply, connect the PS1 power supply across the VBOARD (J5)  and GND (J4) connectors. If I/O power is going to be derived from the VCC supply, connect a banana jumper from VBOARD (J5) to VCC (J2).
- 3)  Connect the PS2 power supply across the VCC (J2) and GND (J4) connectors.
- 4)  Verify  that  a  USB  cable  (not  provided)  is  properly connected  from  the  PC  to  the  DS3900H2  Mini-USB connector.
- 5)  Set PS2 for +3.3V, 200mA, and enable the PS2 output. The reset LED illuminates for ~250mS.
- 6)  If using separate VBOARD power, set PS1 for +3.3V, 200mA and enable the PS1 output.

See the Software Procedure section.

## Single-Supply Operation Using VBAT Only

To utilize the EV kit in VBAT-only mode, connect a banana cable  from  VCC  (J2)  to  GND  (J4);  do  not  use  PS2. Perform the following:

- 1)  Verify that component C3 (0.1µF 0805 SMT capacitor) is placed (from VBAT to GND) on the pads labeled C3 (bottom side of the EV kit board).

## Evaluate: DS3231M or DS3232M

- 2)  Verify that jumpers J6 and J7 are installed (where  noted).  J6  and  J7  connect  the  32kHZ  and INT /SQW output pin pullup resistors (respectively) to the VBOARD bias. J8 is not used; the RST output is not operational in the VBAT-only power configuration.
- 3)  If  using  a  separate  VBOARD  (I/O)  power  supply, connect the PS1 power supply across the VBOARD (J5) and GND (J4) connectors. If I/O power is going to be derived from the VBAT supply, connect a banana jumper from VBOARD (J5) to VBAT (J3).
- 4)  Connect the PS3 power supply across the VBAT (J3) and GND (J4) connectors.
- 5)  Verify  that  a  USB  cable  (not  provided)  is  connected from the PC to the DS3900H2 Mini-USB connector.
- 6)  Set PS3 for +3V, 100mA, and enable the PS3 output.
- 7)  If using separate VBOARD power, set PS1 for +3.3V, 200mA, and enable the PS1 output.

See the Software Procedure section.

## User-Provided I 2 C Bus Master

If  desired, the user can configure the EV kits to operate from an existing I 2 C bus master, providing external pullup resistors  already  existing  on  that  communications  bus. Perform the following:

- 1)  Power off all the supplies.
- 2)  Disconnect the USB cable and remove the DS3900H2 subassembly  from  the  EV  kit  by  lifting  the  module vertically from its headers.
- 3)  Connect VBOARD to the desired I/O power reference (from the customer's board).
- 4)  Connect  GND  to  the  ground  reference  from  the customer's board.
- 5)  Jumper the SDA signal from the SDA test point to SDA on the customer's board.
- 6)  Jumper the SCL signal from the SCL test point to SCL on the customer's board.
- 7)  If using dual-supply mode, power on the VBAT supply.
- 8)  Power on the VCC supply.
- 9)  Power on the customer's board.

See the Software Procedure section.

## DS3231MZ/DS3232M Evaluation Kits

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                    |
|---------------|-------|----------------------------------------------------------------|
| C1, C6        |     2 | 0.1µF X7R ceramic capacitors (0805) TDK CGA4J2X7R2A104K        |
| C2            |     1 | 0.01µF X7R ceramic capacitor (0805) TDK C2012X7R2A103KT        |
| C3            |     1 | 0.1µF X7R ceramic capacitor (0805)                             |
| C4            |     1 | 47µF 16V 20% tantalum capacitor Vishay/Sprague 595D476X0016C2T |
| C5            |     1 | 1µF X7R ceramic capacitor (0805) TDK CGJ4J2X7R1C105K           |
| D1            |     1 | LED                                                            |
| J1            |     1 | Right-angle BNC AMP 5227161-1                                  |
| J2            |     1 | Red banana jack Deltron 571-0500                               |
| J3            |     1 | Yellow banana jack Deltron 571-0700                            |
| J4            |     1 | Black banana jack Deltron 571-0100                             |

## Evaluate: DS3231M or DS3232M

| DESIGNATION   |   QTY | DESCRIPTION                                                            |
|---------------|-------|------------------------------------------------------------------------|
| J5            |     1 | Blue banana jack Deltron 571-0200                                      |
| J6-J8         |     3 | 2-pin headers 3M 961102-6404-AR or Sullins SPC02SYAN                   |
| R1, R2        |     2 | 10kΩ ±1% resistors (0805)                                              |
| R3            |     1 | 499Ω ±1% resistor (0805)                                               |
| S1            |     1 | Pushbutton switch C&K KSR231GLFS                                       |
| U1            |     1 | ±5ppm, I 2 C real-time clock (8 SO) Maxim DS3231MZ+                    |
| U1            |     1 | ±5ppm, I 2 C real-time clock with SRAM (8 SO) Maxim DS3232MZ+          |
| U2            |     1 | USB HID communications module for evaluation kits Maxim DS3900H2EVKIT# |
| U3            |     2 | Header, 8 x 2 FCI 67997-116HLF                                         |
| -             |     1 | PCB: DS323X EV KIT                                                     |

# Denotes an RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

+Denotes a lead(Pb)-free/RoHS-compliant package.

Figure 9. DS323X EV Kit Schematic

<!-- image -->

## Evaluate: DS3231M or DS3232M

Figure 10. DS323X EV Kit PCB Layout-Top

<!-- image -->

Figure 11. DS323X EV Kit PCB Layout-Bottom

<!-- image -->

## DS3231MZ/DS3232M Evaluation Kits

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| DS3231MZ EVKIT# | EV Kit |
| DS3232M EVKIT#  | EV Kit |

#Denotes an RoHS-compliant device that may include lead(Pb) that is exempt under the RoHS requirements.

Evaluate: DS3231M or DS3232M

## DS3231MZ/DS3232M Evaluation Kits

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 1/14            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses Dre impOieG  0D[im IQteJrDteG reserYes tKe riJKt to FKDQJe tKe FirFXitr\ DQG speFi¿FDtioQs ZitKoXt QotiFe Dt DQ\ time

Evaluate: DS3231M or DS3232M