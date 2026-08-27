<!-- lastmod 2022-08-05 -->
## MAX8971 Evaluation Kit

## General Description

The  MAX8971  evaluation  kit  (EV  kit)  demonstrates  the MAX8971  IC,  a  1.55A  capable,  1-cell  lithium-ion  (Li+) DC-DC  battery  charger  with  I 2 C  capability.  The  EV  kit charges  a  single-cell  Li+  battery  from  a  DC  input  (AC adapter) or a USB 100mA/500mA source and  provides system power from the DC input, USB input, or  battery. Battery-charge current and input-current limits  are  independently  set.  Charge  current  and  input-current  limit can  be  set  up  to  1500mA.  USB  suspend  mode  is  also supported.

The  EV  kit  comes  standard  with  the  MAX8971EWP+ installed.  The  included  MINIQUSB  interface  board  can be used to enable PC communication through the USB interface board. Windows ® 2000-, Windows  XP ® -, Windows  Vista ® -,  and  Windows  7-compatible  software along with an extender board allows an IBM-compatible PC with an available USB port to emulate an I 2 C 2-wire interface.  This  program  is  menu-driven  and  offers  a graphical user interface (GUI) with control buttons.

Ordering Information appears at end of data sheet.

Windows, Windows XP, and Windows Vista are registered trademarks and registered service marks of Microsoft Corporation.

## Features

- DC-DC Converter Input-Current Limit
-  100mA to 1500mA Adjustment Range (EV Kit Standard Configuration: 500mA)
- 250mA to 1550mA Battery-Charge Current-Limit Adjustment Range (EV Kit Standard Configuration: 500mA)
- 50mA to 200mA Done Threshold-Adjustment Range
- Battery-Regulation Voltage-Adjustment Range: 4.1V, 4.15V, 4.2V, 4.35V
- Fast-Charge and Top-Off Timer-Adjustment Range
- Efficient 4MHz Switching Li+ Battery Charger
- I 2 C Serial Interface with IRQB Indicator
- Selectable Charge Sources Connector · 2.1mm Barrel or Micro-USB
- Proven PCB Layout
- Fully Assembled and Tested

<!-- image -->

Evaluates: MAX8971

## MAX8971 Evaluation Kit

## Quick Start

## Required Equipment

- MAX8971 EV kit
- MINIQUSB command module (USB cable included)
- Adjustable DC power supply capable of at least 2.3A at 14V
- A 3.3V DC power supply (optional)
- Battery or simulated battery (Figure 4)
- 1-cell Li+
- Simulated battery, preloaded power supply
- Digital multimeter (DMM)
- Two 3A multimeters

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  Kit  software.  Text  in bold  and  underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation.  Use  twisted  wires  of appropriate gauge (20AWG) that are as short as possible to connect the battery and power sources.

- 1) Ensure that the EV kit has the correct jumper settings, as shown in Table 1.
- 2) Connect the MINIQUSB interface board J3 and J4 to the EV kit corresponding connectors.
- 3) Preset the DC power supply to 5V. Turn off the pow -er  supply.  Do  not  turn  on  the  power  supply  until  all connections are completed.
- 4) Connect  the  EV  kit  to  the  power  supply,  battery  or preloaded power supply, and meters. Adjust the ammeters to their largest current range to minimize their series impedance. Do not allow the ammeters to operate in their autorange mode. If current readings are not desired, short across the ammeters.
- 5) If jumper JU2 is not populated with a shunt, connect a second power supply to the I2CIN jumper.
- 6) Turn on the power supply.
- 7) Visit www.maximintegrated.com/products/MAX8971 under  the Design  Resources tab  to  download  the latest version of the EV kit software. Save the EV kit software to a temporary folder and unpack the ZIP file.
- 8) Install the EV kit software on your computer by running the MAX8971GUISetupx.x.xx.exe program inside the  temporary  folder. The  program  files  are  copied, and icons are created in the Windows Start menu. The  software  requires  the  .NET  Framework  4.5  or later.  If  you  are  connected to the Internet, Windows automatically  updates  .NET  framework  as  needed. The EV kit software can be uninstalled from the Add/ Remove Programs tool in the Control Panel.
- 9) The  EV  kit  software  launches  automatically  after install,  or  alternatively,  it  can  be  launched  by  clicking on its icon in the Windows Start menu. A splash screen containing information about the evaluation kit appears as the program is being loaded (Figure 1).

Evaluates: MAX8971

Figure 1. MAX8971 GUI Splash Screen

<!-- image -->

│

## MAX8971 Evaluation Kit

## Detailed Description of Software

## Communication

The software automatically finds the EV Kit board through USB  identification.  If  the  connection  cannot  be  found, then a Not Connected message is displayed. Once the micro-USB cable is attached, click on the main window option, Device &gt; Connect , and a synchronization window appears. This window shows the IC sub-blocks and their corresponding slave addresses. Choose Read and Close and the status bar displays Connected to  signify  active communication. An example of a successful connection is shown in Figure 2.

## Main Display

Status  bits  and  programmable  functions  of Interrupt/ Status and Charger Control can  be  accessed  through

Evaluates: MAX8971

their respective interface tabs from the left column of the window (Figure 3).

## Interrupt/Status Indicators

The Interrupts group  box  consists  of  slider  switches to  mask  or  unmask  the  interrupt  output  during  a  fault condition  and  status  indicators  obtained  from  the  IC registers. When unmasked, the interrupt status indicator lights up when there is a fault condition. When the slider is  in  the  masked  position,  the  respective  interrupt  status  indicator  remains  unaffected  in  the  event  of  a  fault. A Refresh button  performs  a  read  command  of  the  IC Charger  Interrupt  Mask  (CHGINT\_MSK,  address  0x01) and Charger Interrupt Request (CHGINT, address 0x0F) registers. The CHGINT register is cleared when its value is  read.  If  an  alert  is  set  on  the  MAX8971,  reading  the CHGINT  register  displays  the  status  on  the  GUI  while

Figure 2. MAX8971 Communication Window

<!-- image -->

│

Figure 3. MAX8971 GUI Interrupt/Status Display

<!-- image -->

simultaneously clearing the alert on the IC. When a second read command is performed, the indicator on the GUI goes DARK if the Charger Interrupt Request status bit has not  been  set  again,  or  GREEN  if  the  Charger  Interrupt Request status bit has been set again since the last read of the register.

The Charger  Status and Details group  boxes  consist of  indicators  used  to  obtain  event/status  information from the IC Charger Status (CHG\_STAT, address 0x02), DETAILS1 (address 0x03) and DETAILS2(address 0x04) registers  using  the  respective Refresh buttons.  The Charger Status group box indicators display VALID when the charger is operating within its specified settings and displays INVALID when the charger is operat-ing outside its  settings.  The Details group  box  displays  the  status conditions of the battery connected at the battery, charger, and thermistor.

The Read button updates all the status indicators listed in the Interrupt/Status group box. The Start Auto-Read button repeatedly polls the device at the selected interval and updates all status indicators.

│

## MAX8971 Evaluation Kit

## Charger Control

The Charger  Control group  box  consists  of  several group  box  slider  buttons  and  pull-down  selection  fields that configure the IC registers. Each group box provides configuration settings for one IC register. Changes to the controls are made using the respective Write button for each register and the register values can be read using the respective Read button.

Charge Control 1 (CHGCNTL1, address 0x05) provides controls  for  USB  Suspend  mode  and  DC  Monitoring. Charge  Control  2 group  box  (FCHGCRNT,  address

Evaluates: MAX8971

0x06)  consists  of  the  Fast-Charge  Current  and  Timer control  register. Charge  Control  3 (DCCRNT,  address 0x07)  provides  the  Input  Current  Limit  and  Charger Restart Threshold control. Charge Control 4 (TOPOFF, address 0x08) provides selection for Charge Termination Voltage,  Top-off  current  threshold,  Top-off  Timer  and enable/disable  the  2.8A  Fast-Charge  Current. Charger Control 5 (TEMPREG, address 0x09) is the Temperature Regulation  and  JEITA  Safety  Region  selection  register. Charger Control 6 (PROTCMD, address 0x0A) configures the Charger-Setting Protection settings.

Figure 4. MAX8971 GUI Charger Control Display

<!-- image -->

│

## Register Explorer

To view the ICs register map, select the Tools &gt; Register Explorer menu from the main window. The value of all control  registers  is  displayed  and  updated  automatically when changes are made using the GUI. Double-click on

Evaluates: MAX8971

register names or bit names to open the selection to manually  program  the  ICs  registers.  Writeable  registers  are indicated with a teal colored background in the Meaning column. Changes to the registers are indicated by a gold colored background in the Register Value column.

Figure 5. MAX8971 Register Explorer

<!-- image -->

## MAX8971 Evaluation Kit

## Register Dashboard

A Register Dashboard is  also  provided  under Tools &gt; Register  Dashboard .  In  this  interface,  clicking  on  the empty slots allows the user to display specific registers of interest and their values in a compact window as shown in Figure 6.

## Detailed Description of Hardware

The MAX8971 EV kit demonstrates the MAX8971 switchmode charger to charge a one-cell Li+ battery. It delivers up to 1.55A of current to the battery from inputs up to 7.5V and withstands transient inputs up to 22V. The EV kit is powered with a general DC input or USB. By connecting an external MINIQUSB and launching the EV kit software, the  user  can  adjust  the  capability  of  the  charger.  The status  of  charge  is  also  reported  on  the  EV  kit  GUI. Table  1  lists  jumpers  and  associated  functions  that  are available on the EV kit.

Figure 6. MAX8971 Register Dashboard

<!-- image -->

│

## Table 1. Jumper Functions

| JUMPER   | NODE OR FUNCTION      | SHUNT POSITION   | FUNCTION                                            |
|----------|-----------------------|------------------|-----------------------------------------------------|
| JU1      | I2CIN input selector  | Open             | Requires an external source to I2CIN.               |
| JU1      | I2CIN input selector  | 1-2*             | I2CIN is powered from the MINIQUSB.                 |
| JU2      | THM                   | Installed        | Shunt to disable the thermistor temperature sensor. |
| JU2      | THM                   | Open             | Open for normal thermistor function.                |
| JU3      | I2CIN                 | 1-2*             | R6/R7 (SCL/SDA) resistors pull up to I2CIN.         |
| JU3      | I2CIN                 | 2-3              | R6/R7 (SCL/SDA) resistors pull up to BATT.          |
| JU4      | DC_INPUT selector     | 1-2              | Powers DC_INPUT from USB1 (Micro-USB).              |
| JU4      | DC_INPUT selector     | 2-3              | Powers DC_INPUT from J4 (DC adapter).               |
| JU4      | DC_INPUT selector     | Open*            | Powers DC_INPUT from power supply.                  |
| JU5      | Thermistor adjustment | 1-2*             | THRM1 (10kΩ) is connected to THM.                   |
| JU5      | Thermistor adjustment | 3-4              | R3 (10kΩ) is connected to THM.                      |
| JU5      | Thermistor adjustment | 5-6              | R4 (20kΩ potentiometer) is connected to THM.        |

*Default position.

Figure 7. Battery Options for Evaluating the MAX8971 EV Kit

<!-- image -->

## Component  Suppliers

| SUPPLIER                               | PHONE          | WEBSITE                     |
|----------------------------------------|----------------|-----------------------------|
| Bourns, Inc.                           | 408-496-0706   | www.bourns.com              |
| CUI Inc.                               | 503-612-2300   | www.cui.com                 |
| Digi-Key Corp.                         | 800-344-4539   | www.digikey.com             |
| Hirose Electric Co., Ltd.              | 81-3-3491-9741 | www.hirose.com              |
| Murata Electronics North America, Inc. | 770-436-1300   | www.murata-northamerica.com |
| Panasonic Corp.                        | 800-344-2112   | www.panasonic.com           |
| Sullins Electronics Corp.              | 760-744-0125   | www.sullinselectronics.com  |
| Taiyo Yuden                            | 800-348-2496   | www.t-yuden.com             |
| TDK Corp                               | 847-803-6100   | www.component.tdk.com       |
| TOKOAmerica, Inc.                      | 847-297-0070   | www.tokoam.com              |
| Vishay                                 | 402-563-6866   | www.vishay.com              |

Note: Indicate that you are using the MAX8971 when contacting these component suppliers.

Evaluates: MAX8971

## MAX8971 Evaluation Kit

## Ordering Information

| PART           | TYPE   |
|----------------|--------|
| MAX8971EVKIT # | EV Kit |

# Denotes RoHS compliant.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                              |
|---------------|-------|----------------------------------------------------------------------------------------------------------|
| C1, C3        |     2 | 4.7µF ±20%, 6.3V X5R ceramic capacitors (0402) Taiyo Yuden JMK105BBJ475MV-F or Murata GRM155R60J475ME87D |
| C2            |     1 | 1µF ±20%, 6.3V X5R ceramic capacitor (0402) Taiyo Yuden JMK105BJ105KV-M or equivalent                    |
| C4, C5, C8    |     3 | 1µF, 25V X5R ceramic capacitors (0603) Vishay VJ0603Y105KXXAC                                            |
| C6            |     1 | 2.2µF ±20%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J225M or equivalent                           |
| C7, C12       |     2 | 0.1µF, 10V X5R ceramic capacitors (0402)                                                                 |
| C9            |     1 | 47µF ±20%, 6.3V X5R ceramic capacitor (0805) Taiyo Yuden JMK212BJ476MG-T                                 |
| C10, C11      |     0 | Not installed, ceramic capacitors                                                                        |
| D1            |     0 | Not installed, diode                                                                                     |
| J1            |     1 | 2 x 10 right-angle female receptacle                                                                     |
| J2            |     0 | Not installed, 1.25mm (0.049in) lead-free, surface-mount, right-angle-pitch header (10 circuits)         |
| J3            |     0 | Not installed, Micro-USB Hirose Electric ZX62-AB-5PA                                                     |

Evaluates: MAX8971

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| J4            |     0 | Not installed, 2.1mm male power connector CUI Inc. PJ-002A-SMT             |
| JU1, JU2      |     2 | 2-pin headers Sullins PEC36SAAN Digi-Key S1012E-36-ND                      |
| JU3, JU4      |     2 | 3-pin headers Sullins PEC36SAAN Digi-Key S1012E-36-ND                      |
| JU5           |     1 | 6-pin (2 x 3) header Sullins PEC36SAAN                                     |
| L1            |     1 | 1µH, 0.050Ω, 2.7A inductor TOKO DFE25202C-1R0N                             |
| R1            |     1 | 0.047Ω ±1%, 0.125W resistor (0402) Panasonic ERJ2BWGR047                   |
| R2, R3, R5-R7 |     5 | 10kΩ ±1% resistors (0402)                                                  |
| R4            |     1 | 200kΩ, 25-turn potentiometer Bourns 3296Y-1-204LF                          |
| THRM          |     0 | Not installed, 20kΩ NTC thermistor (0402) Murata NCP15XH103F03 (β = 3380K) |
| U1            |     1 | 1-cell Li+ DC-DC charger (20 WLP) Maxim MAX8971EWP+                        |
| U2            |     1 | Not installed                                                              |
| -             |     2 | Shunts (see Table 1) Digi-Key S9000-ND or equivalent                       |
| -             |     1 | PCB: MAX8971 EVALUATION KIT                                                |

│

## MAX8971 EV kit Schematic

<!-- image -->

│

Evaluates: MAX8971

## MAX8971 EV Kit PCB Layout Diagrams

MAX8971 EV Kit Component Placement Guide-Component Side

<!-- image -->

Evaluates: MAX8971

MAX8971 EV Kit PCB Layout-Component Side

<!-- image -->

MAX8971 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

│

## MAX8971 EV Kit PCB Layout Diagrams (continued)

MAX8971 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

MAX8971 EV Kit PCB Layout-Solder Side

<!-- image -->

│

## MAX8971 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                              | PAGES CHANGED   |
|-------------------|-----------------|------------------------------------------------------------------------------------------|-----------------|
|                 0 | 5/12            | Initial release                                                                          | -               |
|                 1 | 9/12            | Added R6 and R7 to Component List and Figure 5                                           | 2, 8            |
|                 2 | 5/19            | Updated General Description and Quick Start sections, updated Ordering Information table | 1-13            |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html .

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserYes the right to change the circuitry and specifications without notice at any time.

│

Evaluates: MAX8971