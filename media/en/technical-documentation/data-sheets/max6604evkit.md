<!-- lastmod 2022-08-02 -->
## MAX6604 Evaluation Kit

## General Description

The MAX6604 evaluation kit (EV kit) provides a proven design  to  evaluate  the  MAX6604  precision  temperature monitor  for  DDR  memory  modules.  The  EV  kit  also includes  Windows ®   2000/XP-  and  Windows  Vista ® compatible  software  that  provides  a  simple  graphical user  interface  (GUI)  for  exercising  the  features  of  the MAX6604.

The MAX6604 EV kit PCB comes with a MAX6604ATA+ installed.

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX6604EVKIT# | EV Kit |

# Denotes RoHS compliant.

## Component List

| DESIGNATION              |   QTY | DESCRIPTION                                                                    |
|--------------------------|-------|--------------------------------------------------------------------------------|
| C1, C5-C9, C17, C18, C37 |     9 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K               |
| C4                       |     1 | 0.033µF ±10%, 16V (min) X5R ceramic capacitor (0603) Taiyo Yuden EMK107BJ333KA |
| C10, C39                 |     2 | 1µF ±10%, 16V X5R ceramic capacitors (0603) TDK C1608X5R1C105K                 |
| C11, C38, C40            |     3 | 10µF ±20%, 16V X5R ceramic capacitors (1206) Murata GRM31CR61C106M             |
| C15, C16                 |     2 | 10pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H100J              |
| C30, C31                 |     2 | 22pF ±5%, 50V C0G ceramic capacitors (0603) Murata GRM1885C1H220J              |
| H1                       |     1 | 5-pin header                                                                   |
| J1                       |     1 | USB type-B right-angle female receptacle                                       |
| J3                       |     0 | Not installed                                                                  |
| JU1, JU2, JU3            |     3 | 3-pin headers                                                                  |
| JU4                      |     1 | 2-pin header                                                                   |

Windows and Windows Vista are registered trademarks of Microsoft Corp.

SMBus is a trademark of Intel Corp.

## Features

- Windows 2000/XP- and Windows Vista (32-Bit)-Compatible Software
- USB-PC Connection (Cable Included)
- USB Powered
- Lead(Pb)-Free and RoHS Compliant
- 5-Pin Signal Header
- SMBus™/I 2 C Interface Terminals
- Proven PCB Layout
- Fully Assembled and Tested

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| JU5-JU9       |     0 | Not installed, 2-pin headers-shorted (PCB trace)             |
| LED1          |     1 | Red LED (0805)                                               |
| L1            |     1 | Ferrite bead TDK MMZ1608R301A (0603)                         |
| R1, R2        |     2 | 27 Ω ±5% resistors (0603)                                    |
| R3            |     1 | 1.5kΩ ±5% resistor (0603)                                    |
| R4            |     1 | 470Ω ±5% resistor (0603)                                     |
| R5            |     1 | 2.2kΩ ±5% resistor (0603)                                    |
| R6            |     1 | 10kΩ ±5% resistor (0603)                                     |
| R7, R8, R9    |     3 | 4.7kΩ ±5% resistors (0603)                                   |
| R10           |     1 | 330Ω ±5% resistor (0603)                                     |
| R19-R23       |     0 | Not installed, resistors-short (PC trace) (0402)             |
| U1            |     1 | Precision temperature monitor (8 TDFN-EP*) Maxim MAX6604ATA+ |
| U2            |     1 | 2.5V regulator (5 SC70) Maxim MAX8511EXK25+T (Top Mark: ADV) |
| U3            |     1 | 3.3V regulator (5 SC70) Maxim MAX8511EXK33+T (Top Mark: AEI) |

* EP = Exposed pad.

Evaluates: MAX6604

<!-- image -->

## MAX6604 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                |
|---------------|-------|------------------------------------------------------------|
| U4            |     1 | Low-power microcontroller (68 QFN-EP*) Maxim MAXQ2000-RAX+ |
| U5            |     1 | UART-to-USB converter (32 TQFP)                            |
| U6            |     1 | 93C46 type 3-wire EEPROM 16-bit architecture (8 SO)        |
| Y2            |     1 | 16MHz crystal (HCM49) Hong Kong X'tals SSM1600000E18FAF    |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Hong Kong X'tals Ltd.                  | 852-35112388 | www.hongkongcrystal.com     |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Taiyo Yuden                            | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX6604 when contacting these component suppliers.

## MAX6604 EV Kit Files

| FILE                | DESCRIPTION                       |
|---------------------|-----------------------------------|
| MAX6604EVKIT.exe    | Application program               |
| FTD2XX.INF          | USB device driver file            |
| UNINST.INI          | Uninstalls the EV kit software    |
| USB_Driver_Help.PDF | USB driver installation help file |

## Quick Start

## Required Equipment

- MAX6604 EV kit (USB cable included)
- A user-supplied Windows 2000/XP- or Windows Vista-compatible PC with a spare USB port

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly  from  the  EV  kit  software.  Text  in bold  and underlined refers  to  items  from  the  Windows  operating system.

## Procedure

The  MAX6604  EV  kit  is  fully  assembled  and  tested. Follow the steps below to verify board operation:

- 1) Visit www.maximintegrated.com/evkit-software to download  the  latest  version  of  the  EV  kit  software, 6604Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running the 6604Rxx.msi program inside the temporary folder.  The  program  files  are  copied  and  icons  are created in the Windows Start | Programs menu.
- 3) Verify that all jumpers (JU1-JU9) are in their default positions, as shown in Table 1.

│

Evaluates: MAX6604

* EP = Exposed pad.

| DESIGNATION   |   QTY | DESCRIPTION                                            |
|---------------|-------|--------------------------------------------------------|
| Y3            |     0 | Not installed                                          |
| Y4            |     1 | 6MHz crystal (HCM49) Hong Kong X'tals SSL6000000E18FAF |
| -             |     4 | Shunts                                                 |
| -             |     1 | USB high-speed A-to-B cables, 6ft                      |
| -             |     1 | PCB: MAX6604 Evaluation Kit+                           |

## MAX6604 Evaluation Kit

Table 1. MAX6604 EV Kit Jumper Descriptions (JU1-JU9)

| JUMPER   | SIGNAL   | SHUNT POSITION     | DESCRIPTION                                               |
|----------|----------|--------------------|-----------------------------------------------------------|
| JU1      | A0       | 1-2                | A0 = VDDIO; determines I 2 C device address (see Table 2) |
| JU1      | A0       | 2-3*               | A0 = GND; determines I 2 C device address (see Table 2)   |
| JU2      | A1       | 1-2                | A1 = VDDIO; determines I 2 C device address (see Table 2) |
| JU2      | A1       | 2-3*               | A1 = GND; determines I 2 C device address (see Table 2)   |
| JU3      | A2       | 1-2                | A2 = VDDIO; determines I 2 C device address (see Table 2) |
| JU3      | A2       | 2-3*               | A2 = GND; determines I 2 C device address (see Table 2)   |
| JU4      | EVENT    | 1-2*               | EVENT is pulled up to VDDIO by R9                         |
| JU4      | EVENT    | Open               | EVENT is not pulled up                                    |
| JU5      | SDA      | Not installed*     | SDA connected to on-board I 2 C bus                       |
| JU5      | SDA      | PCB trace cut open | SDA must be connected to an external I 2 C bus            |
| JU6      | SCL      | Not installed*     | SCL connected to on-board I 2 C bus                       |
| JU6      | SCL      | PCB trace cut open | SCL must be connected to an external I 2 C bus            |
| JU7      | SDA      | Not installed*     | SDA connected to on-board pullup resistor                 |
| JU7      | SDA      | PCB trace cut open | SDA pullup resistor must be provided externally           |
| JU8      | SCL      | Not installed*     | SCL connected to on-board pullup resistor                 |
| JU8      | SCL      | PCB trace cut open | SCL pullup resistor must be provided externally           |
| JU9      | EVENT    | Not installed*     | EVENT connected to MINIQUSB GPIO K1                       |
| JU9      | EVENT    | PCB trace cut open | EVENT not connected to MINIQUSB                           |

* Default position.

- 4) Connect  the  USB  cable  from  the  PC  to  the  EV  kit board.  A New  Hardware  Found window  pops  up when  installing  the  USB  driver  for  the  first  time.  If you do not see a window that is similar to the one described  above  after  30s,  remove  the  USB  cable from the board and reconnect it. Administrator privileges  are  required  to  install  the  USB  device  driver on Windows.
- 5) Follow  the  directions  of  the Add  New  Hardware Wizard to  install  the  USB  device  driver.  Choose the Search  for  the  best  driver  for  your  device option.  Specify  the  location  of  the  device  driver  to be C:\Program  Files\MAX6604 (default  installation directory)  using  the Browse button.  During  device driver  installation,  Windows  may  show  a  warning message indicating that the device driver Maxim uses does  not  contain  a  digital  signature.  This  is  not  an error  condition  and  it  is  safe  to  proceed  with  installation. Refer to the USB\_Driver\_Help.PDF document included with the software for additional information.
- 6) Start the MAX6604 EV kit software by opening its icon in the Start | Programs menu. The EV kit software main window appears, as shown in Figure 1.
- 7) The  temperature  alarms  are  active  because  the threshold  temperatures  have  not  been  set. The  following examples assume room temperature is between  +24°C  and  +25°C.  The  actual  room  temperature is displayed in the 0x05  Temperature Register group box.
- 8) In the 0x04  Critical-Temperature  Trip  Register group  box,  enter  the  value 27.000 (a  value  above room  temperature)  and  press  the Write button. The  temperature  register  should  indicate Critical Temperature OK .
- 9) In  the 0x02  Alarm-Temperature  Upper-Boundary Trip  Register group  box,  enter  the  value 26.000 (a  value  above  room  temperature)  and  press  the Write button. The 0x05 Temperature Register group box should indicate Alarm Temperature Upper Boundary OK .
- 10)  In  the 0x03  Alarm-Temperature  Lower-Boundary Trip  Register group  box,  enter  the  value 24.000 (a  value  below  room  temperature)  and  press  the Write button. The 0x05 Temperature Register group box should indicate Alarm Temperature Lower Boundary OK .

│

Evaluates: MAX6604

Figure 1. MAX6604 EV Kit Software Main Window (Temperature Sensor Tab)

<!-- image -->

- 11)  In the 0x01 Configuration Register group box, check the EVENT output enabled checkbox and press the Write button.
- 12)  Apply  an  external  heat  source  to  the  MAX6604, sufficient to cross the  programmed  temperature

thresholds.  The  alarm  is  indicated  by  the  INT  pin being  asserted  and  by  the  status  indicators  in  the 0x05  Temperature  Register group  box  (alarm  can also be tested by setting the threshold value below the measured temperature, as shown in Figure 1).

│

## MAX6604 Evaluation Kit

- 13)  Return  the  MAX6604  to  room  temperature  and  the alarm condition automatically clears.
- 14) Chill the MAX6604 sufficient to cross the programmed alarm  temperature  lower-boundary  trip  threshold. The alarm is indicated by the INT pin being asserted and by the status indicators in the 0x05 Temperature Register group box.
- 15)  Return  the  MAX6604  to  room  temperature  and  the alarm condition automatically clears.

## Detailed Description of Software

The main window of the  evaluation  software  (Figure  1) displays the registers of the MAX6604 temperature sensor.  Each  register  has  a Read button,  and  each  writeable  register  has  a Write button.  The  status  of  the EVENT  output pin is displayed inside the 0x01 Configuration Register group  box,  next  to  the EVENT output enabled checkbox.

Evaluates: MAX6604

## Temperature Sensor Tab

The Temperature  Sensor tab  sheet  displays  the  temperature  sensor  registers  of  the  MAX6604  (Figure  1). Each register has its own Read button, and each writeable  register  has  a Write button.  The Auto  Read  1-7 checkbox  enables  periodic  polling  of  all  register  values.  The  software  determines  the Device  Address when  first  starting  up,  by  searching  all  eight  possible I 2 C  device  addresses.  This  value  must  be  manually changed if the JU1, JU2, and JU3 address-select jumpers are changed while the program is running.

## Advanced User Interface

A  serial  interface  can  be  used  by  advanced  users  by selecting Options | Interface (Advanced Users) from the menu bar. Note: The MAX6604 JEDEC read-word and write-word byte order differs from the SMBusReadWord and SMBusWriteWord protocols.

For  reading  I 2 C  registers,  click  on  the 2-wire  interface tab shown in Figure 2. Press the Hunt for active listen-

Figure 2. Advanced User Interface Window (2-Wire Interface Tab)

<!-- image -->

│

## Table 2. I 2 C Device Address Selection

| SHUNT POSITION (JU3)   | A2 PIN   | SHUNT POSITION (JU2)   | A1 PIN   | SHUNT POSITION (JU1)   | A0 PIN   | DEVICE ADDRESS   |
|------------------------|----------|------------------------|----------|------------------------|----------|------------------|
| 2-3*                   | GND      | 2-3*                   | GND      | 2-3*                   | GND      | 0011 000 R/W     |
| 2-3                    | GND      | 2-3                    | GND      | 1-2                    | VDDIO    | 0011 001 R/W     |
| 2-3                    | GND      | 1-2                    | VDDIO    | 2-3                    | GND      | 0011 010 R/W     |
| 2-3                    | GND      | 1-2                    | VDDIO    | 1-2                    | VDDIO    | 0011 011 R/W     |
| 1-2                    | VDDIO    | 2-3                    | GND      | 2-3                    | GND      | 0011 100 R/W     |
| 1-2                    | VDDIO    | 2-3                    | GND      | 1-2                    | VDDIO    | 0011 101 R/W     |
| 1-2                    | VDDIO    | 1-2                    | VDDIO    | 2-3                    | GND      | 0011 110 R/W     |
| 1-2                    | VDDIO    | 1-2                    | VDDIO    | 1-2                    | VDDIO    | 0011 111 R/W     |

* Default position

ers button to obtain the current MAX6604 slave address in  the Target  Device  Address: combo  box.  In  the General  commands tab, select 9  -  I2CWriteAnd ReadBytes(addr) -&gt; data… in  the Command (SMBus Protocols, Raw Block Read/Write, EEPROM Read/Write) drop-down list.  Set  the Read Count: to 2 , enter the desired register into the Data Out: combo box, and then press the Execute button.

For  writing  I 2 C  registers,  click  on  the 2-wire  interface tab  shown  in  Figure  2.  Press  the Hunt  for  active  listeners button  to  obtain  the  current  MAX6604  slave address  in  the Target  Device Address :  combo  box.  In

the General commands tab, select 7 - RawWriteBlock (addr,count,data...) in the Command (SMBus Protocols,  Raw  Block  Read/Write,  EEPROM  Read/ Write) drop-down list. In the Data Out: combo box, fill in the register address, the high byte, and the low byte of data; and then press the Execute button.

## Detailed Description of Hardware

The  MAX6604  EV  kit  provides  a  proven  layout  for  the MAX6604.  Easy-to-use  USB-PC  connection  is  included on the EV kit.

│

## Evaluates: MAX6604

Figure 3a. MAX6604 EV Kit Schematic (Sheet 1 of 2)

<!-- image -->

Figure 3b. MAX6604 EV Kit Schematic (Sheet 2 of 2)

<!-- image -->

Figure 4. MAX6604 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX6604 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 6. MAX6604 EV Kit PCB Layout-Solder Side

<!-- image -->

## MAX6604 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                               | PAGES CHANGED   |
|-------------------|-----------------|-------------------------------------------|-----------------|
|                 0 | 5/09            | Initial release                           | -               |
|                 1 | 10/20           | Replaced + with # in Ordering Information | 1               |

For pricing, delivery, and ordering information, please visit Maxim Integrated's online storefront at https://www.maximintegrated.com/en/storefront/storefront.html.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Ma[im Integrated reserves the right to change the circuitr\ and specifications without notice at an\ time.

│

Evaluates: MAX6604