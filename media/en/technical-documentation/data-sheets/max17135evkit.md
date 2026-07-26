<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAX17135 Evaluation System

## Evaluates: MAX1735

## General Description

The  MAX17135  evaluation  system  (EV  system)  consists  of  the  MAX17135  evaluation  kit  (EV  kit)  and  the Maxim CMAXQUSB+ command module. Windows XP M -, Windows Vista M -, and Windows M 7-compatible software is also available for use with the EV system and can be downloaded from www.maxim-ic.com/evkitsoftware .

The EV kit is a fully assembled and tested surface-mount PCB that provides a complete power-management solution for E-paper displays. The EV kit contains source- and gate-driver power supplies, a high-speed VCOM amplifier, and a temperature sensor.

The EV kit operates from a 2.7V to 5.5V DC supply voltage. The step-up switching regulator (POS) is configured for  a  15V  output  that  provides  200mA.  The  inverting buck-boost converter (NEG) generates a -15V output that provides 200mA. The gate-driver power supplies consist of  regulated  charge  pumps  that  generate  22V  (GVDD) and -20V (GVEE) and can deliver up to 20mA each. The EV kit also features a digitally adjustable VCOM amplifier and the option for internal/external temperature sensing.

The CMAXQUSB+ command module provides the I 2 C/ SMBus  interface  and  is  connected  to  the  computer through  the  universal  serial  bus  (USB)  port.  The  EV kit  also  includes  Windows  XP-,  Windows  Vista-,  and Windows 7-compatible software that provides a simple graphical user interface (GUI) for exercising the features of the IC.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

<!-- image -->

- S 2.7V to 5.5V Input Range
- S 1MHz Boost and Inverted Buck-Boost Switching Frequency
- S Output Voltages
- 15V Output at 200mA (Step-Up Switching
- Regulator)
- -15V Output at 200mA (Inverting Buck-Boost Switching Regulator)

22V Output at 20mA (Positive Charge Pump)

- -20V Output at 20mA (Negative Charge Pump)
- S Measures Remote Diode Temperature
- S Digitally Programmable Op-Amp Output Voltage
- S Windows XP-, Windows Vista-, and Windows 7-Compatible Software
- S Proven PCB Layout
- S Fully Assembled and Tested

Ordering Information appears at end of data sheet.

## Component Lists

## MAX17135 EV System

| PART           |   QTY | DESCRIPTION                          |
|----------------|-------|--------------------------------------|
| MAX17135EVKIT# |     1 | MAX17135 EV kit                      |
| CMAXQUSB+      |     1 | I 2 C/SMBus interface command module |

## MAX17135 EV Kit

| DESIGNATION                   |   QTY | DESCRIPTION                                                                               |
|-------------------------------|-------|-------------------------------------------------------------------------------------------|
| C1, C5                        |     2 | 10 F F Q 10%, 6.3V X7R ceramic capacitors (0805) Murata GRM21BR70J106K TDK C2012X7R0J106K |
| C2, C3, C4, C6, C16, C18, C28 |     7 | 4.7 F F Q 10%, 25V X7R ceramic capacitors (1206) Murata GRM31CR71E475KA88L                |
| C7, C8                        |     2 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Murata GRM155R71C104K TDK C1005X7R1C104K |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Features

## MAX17135 Evaluation System

## Evaluates: MAX17135

## Component Lists (continued)

## MAX17135 EV Kit (continued)

| DESIGNATION                    |   QTY | DESCRIPTION                                                |
|--------------------------------|-------|------------------------------------------------------------|
| J1                             |     1 | 20-pin (2 x 10) right-angle receptacle                     |
| JU1, JU2                       |     2 | 3-pin headers                                              |
| JU3                            |     0 | Not installed, 3-pin header                                |
| JU4, JU5                       |     0 | Not installed, 2-pin headers                               |
| L1, L2                         |     2 | 4.7 F H, 1.5A, 45m I inductors (D53LC) TOKO A915AY-4R7M    |
| N1                             |     0 | Not installed, n-channel MOSFET (SOT 23)                   |
| P1                             |     0 | Not installed, p-channel MOSFET (SOT 23)                   |
| Q1                             |     1 | 40V npn transistor (TO92) Fairchild 2N3904                 |
| R1                             |     1 | 357k I Q 1% resistor (0603)                                |
| R2                             |     1 | 32.4k I Q 1% resistor (0603)                               |
| R3, R4, R9, R10, R14, R16, R19 |     7 | 0 I resistors (0603)                                       |
| R5, R6                         |     2 | 10k I Q 5% resistors (0603)                                |
| R7                             |     1 | 806k I Q 1% resistor (0603)                                |
| R8                             |     1 | 49.9k I Q 1% resistor (0603)                               |
| R11                            |     1 | 332k I Q 1% resistor (0603)                                |
| R12                            |     1 | 20k I Q 1% resistor (0603)                                 |
| R13                            |     1 | 10 I resistor (0603)                                       |
| R15                            |     1 | 0.5 I Q 1% resistor (0603)                                 |
| R21                            |     1 | 100k I Q 5% resistor (0603)                                |
| R22-R27                        |     0 | Not installed, resistors (0603)                            |
| REF                            |     1 | Test point                                                 |
| U1                             |     1 | DC-DC converter with VCOM (32 TQFN-EP*) Maxim MAX17135ETJ+ |
| -                              |     2 | Shunts                                                     |
| -                              |     1 | PCB: MAX17135 EVALUATION KIT                               |

* EP = Exposed pad.

| DESIGNATION            |   QTY | DESCRIPTION                                                                              |
|------------------------|-------|------------------------------------------------------------------------------------------|
| C9, C12, C17, C24, C25 |     0 | Not installed, ceramic capacitors (0603)                                                 |
| C10, C11, C15          |     3 | 1 F F Q 10%, 25V X7R ceramic capacitors (0603) Murata GRM188R61E105K TDK C1608X5R1E105K  |
| C13                    |     1 | 1 F F Q 10%, 25V X7R ceramic capacitor (0805) Murata GRM21BR71E105K TDK C2012X7R1E105K   |
| C14, C20, C26          |     3 | 0.1 F F Q 10%, 50V X7R ceramic capacitor (0603) Murata GRM188R71H104K TDK C1608X7R1H104K |
| C21                    |     1 | 4.7 F F Q 10%, 25V X7R ceramic capacitor (0805) Murata GRM21BR61E475K TDK C2012X5R1E475K |
| C23                    |     1 | 2200pF Q 10%, 50V X7R ceramic capacitor (0402) Murata GRM155R71H222K TDK C1005X7R1H222K  |
| C27                    |     0 | Not installed, ceramic capacitor (1206)                                                  |
| C29                    |     1 | 4.7 F F Q 10%, 50V X7R ceramic capacitor (1206) Murata GRM31CR71H475K                    |
| D1, D2                 |     2 | 30V, 1A single Schottky diodes (SOD123) ON Semi MBR130T1                                 |
| D3, D5                 |     2 | Dual, small-signal diodes (SOT23) Fairchild MMBD4148SE                                   |
| D4                     |     0 | Not installed, diode (SOT23)                                                             |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |
| TOKO America, Inc.                     | 847-297-0070 | www.tokoam.com              |

Indicate that you are using the MAX17135 when contacting these component suppliers.

Note:

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17135 Evaluation System

## Evaluates: MAX17135

## MAX17135 EV Kit Files

| FILE         | DESCRIPTION                                |
|--------------|--------------------------------------------|
| INSTALL.EXE  | Installs the EV kit files on your computer |
| MAX17135.EXE | Application program                        |
| ATUSBHID.DLL | USB software library                       |
| UNINST.INI   | Uninstalls the EV kit software             |

## Quick Start

## Recommended Equipment

- MAX17135 EV kit
- 2.7V to 5.5V DC power supply
- User-supplied Windows  XP, Windows  Vista, or Windows 7 PC with a spare USB port
- Voltmeter

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1)  On the CMAXQUSB+ command module, ensure that the shunt on jumper JU1 is in the 5V (default) position.
- 2)  Carefully  connect  the  boards  by  aligning  the  20-pin connector (J1) on the EV kit with the 20-pin header on the CMAXQUSB+ interface board. Gently press them together.
- 3)  Connect  the  USB  cable  from  the  computer's  typeA  USB  port  to  the  CMAXQUSB+  board's  type-B USB port.
- 4)  Verify  that  shunts  are  installed  across  pins  1-2  of jumpers JU1 and JU2.
- 5)  Connect the positive terminal of the power supply to the IN PCB pad. Connect the negative terminal of the power supply to the PGND PCB pad closest to IN.
- 6)  Turn on the power supply.
- 7)  Verify  that  the  step-up  switching  regulator  output (POS) is 15V.
- 8)  Verify  that  the  step-up  switching  regulator  output (NEG) is -15V.
- 9)  Verify that the positive charge-pump supply (GVDD) is approximately 22V.
- 10)  Verify that the negative charge-pump supply (GVEE) is approximately -20V.
- 11)  Visit www.maxim-ic.com/evkitsoftware to download  the  latest  version  of the EV  kit  software, MAX17135Rxx.ZIP.  Save  the  EV  kit  software  to  a temporary folder and uncompress the ZIP file.
- 12)  Install the EV kit software on your computer by running the INSTALL.EXE program inside the temporary folder.  The program files are copied and icons are created in the Windows Start | Programs menu.
- 13)  Start  the  EV  kit  software  by  opening  its  icon  in  the Start | Programs menu.
- 14)  Normal device operation is verified when MAX17135 device  connected  is  displayed  in  the  bottom-left status bar on the EV kit main window (Figure 1).

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17135 Evaluation System

## Evaluates: MAX17135

Figure 1. MAX17135 EV Kit Software (Main Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17135 Evaluation System

## Evaluates: MAX17135

## Detailed Description of Hardware

The  MAX17135  EV  system  (MAX17135EVCMAXQU#) consists of the MAX17135 EV kit (MAX17135EVKIT#) and the Maxim CMAXQUSB+ command module. The EV kit evaluates  the  MAX17135  power-management  solution for E-paper displays and the CMAXQUSB+ provides the I 2 C/SMBus-compatible  interface  for  software  control  of the IC's programmable features.

The EV kit operates from a 2.7V to 5.5V DC supply voltage. The step-up switching regulator (POS) is configured for  a  15V  output  that  provides  200mA.  The  inverting buck-boost converter (NEG) generates a -15V output that provides 200mA. The gate-driver power supplies consist of  regulated  charge  pumps  that  generate  22V  (GVDD) and -20V (GVEE) and can deliver up to 20mA each. The EV kit also features a digitally adjustable VCOM amplifier and the option for external temperature sensing.

The  CMAXQUSB+  command  module  provides  the I 2 C/SMBus interface and is connected to the computer through the USB port. The EV kit also includes Windows XP-, Windows Vista-, and Windows 7-compatible software  that  provide  a  simple  GUI  for  exercising  the features of the IC.

## Enable Input (EN)

The  IC's  source-driver  and  gate-driver  outputs  (POS, NEG,  GVDD,  and  GVEE)  are  controlled  by  driving  the EN pin. When EN is connected to VDD, the outputs are enabled. When EN is connected to GND, the outputs are disabled. See Table 1 for jumper JU1 configuration.

## VCOM Amplifier Output Enable Input (CEN)

The  IC's  VCOM  amplifier  output  can  be  controlled  by driving  the  CEN  pin.  When  CEN  is  connected  to VDD,  VCOM  is  enabled.  When  CEN  is  connected  to GND,  VCOM  is  disabled.  See  Table  2  for  jumper  JU2 configuration.

<!-- image -->

## Source-Driver Output-Voltage Selection

The EV kit's step-up switching-regulator output (POS) is set to 15V by feedback resistors R1 and R2. To generate output voltages other than 15V (17V max), select different  external  voltage-divider  resistors,  R1  and  R2.  The negative source-driver supply voltage (NEG) is automatically tightly regulated to -POS within Q 50mV. NEG cannot be adjusted independently of POS. Refer to the SourceDriver Power Supplies section in the MAX17135 IC data sheet for more information.

## Gate-Driver Output-Voltage Selection

The  EV  kit's  positive  gate-driver  power  supply  (GVDD) is  set  to  22V  by  feedback  resistors  R11  and  R12.  To generate output voltages other than 22V, select different external voltage-divider resistors, R11 and R12. The  negative  gate-driver  power  supply  (GVEE)  is  set to  -20V  by  feedback  resistors  R7  and  R8.  To  generate output  voltages  other  than  -20V,  select  different  external  voltage-divider  resistors,  R7  and  R8.  Refer  to  the Gate-Driver Power Supplies section in the MAX17135 IC data sheet for more information.

## Table 1. Jumper Functions (JU1)

| SHUNT POSITION   | EN PIN           | SOURCE- AND GATE- DRIVER OUTPUTS   |
|------------------|------------------|------------------------------------|
| 1-2*             | Connected to VDD | Enabled                            |
| 2-3              | Connected to GND | Disabled                           |

## Table 2. Jumper Functions (JU2)

| SHUNT POSITION   | CEN PIN          | VCOM OUTPUT   |
|------------------|------------------|---------------|
| 1-2*             | Connected to VDD | Enabled       |
| 2-3              | Connected to GND | Disabled      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17135 Evaluation System

## Evaluates: MAX17135

## Detailed Description of Software

The  MAX17135  EV  kit  software  consists  of  two  tabs: Main and Timing . The Main tab sheet (Figure 1) features controls  for  reading  temperature,  VCOM  adjustment, enables, HVINP control, temperature sensor status, POK, and monitoring faults. The Timing tab  sheet  (Figure  2) features  controls  for  power-up/power-down  sequence and  timing  between  the  GVEE,  NEG,  POS,  and  GVDD power  rails.  Refer  to  the  MAX17135  IC  data  sheet  for further details.

## MAX17135 EV Kit Software (Main Tab)

## Temperature

The  EV  kit  software  can  read  external  temperature  at a  remote  diode;  this  value  is  displayed  on  the  main software interface in degrees Celsius. If the Auto-Read checkbox in the Temperature group box is checked, the external temperature register is continuously read. If this checkbox  is  not  checked,  the  user  needs  to  manually press  the Read button  to  monitor  the  temperature.  To place the temperature sensor in shutdown mode, check the Temp. Sensor Shutdown checkbox.

<!-- image -->

Figure 2. MAX17135 EV Kit Software (Timing Tab)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17135 Evaluation System

## Evaluates: MAX17135

## Temperature-Sensor Status

The temperature-sensor Status register indicates whether the ADC is in the process of performing a temperature conversion. The conversion rate can be set by selecting the  desired  value  from  the Conv.  Rate drop-down  list in  the Temp. Sensor Status group box. DXP/DXN OC monitors open-circuit connections from DXN and DXP to the  remote  temperature-sensing  diode  on  board. DXP/ DXN SC indicates when there is a short-circuit condition between DXP and DXN.

## VCOM

The DAC setting corresponds to the specific VCOM voltage. With the EV kit software, the IC's 8-bit internal DAC is  configured  by  entering  an  appropriate  DAC  setting into  the Load  DAC edit  box  in  the VCOM group  box. The DAC setting can be set from 0x00 (VCOMMAX) to 0xFF (VCOMMIN). The DAC setting is written to the IC by pressing the Load DAC button (Figure 1).

The IC's 8-bit DAC is read by either pressing the Read DAC button or by checking the DAC polling checkbox. When  checked,  the  software  continuously  reads  and displays the DAC's current setting.

The  current  DAC  setting  can  be  programmed  into the  IC's  internal  nonvolatile  memory  by  pressing  the Program MTP button. Each time the IC is powered on, the DAC is loaded with the setting stored in the IC's nonvolatile memory. The nonvolatile memory containing the power-up DVR setting can be changed up to 30 times. The I 2 C bus returns NACK, if the DVR nonvolatile memory is attempted to be programmed more than 30 times.

## Enables

The  output  enable  functions  performed  by  the  EN  and CEN pins can also be performed through I 2 C commands by setting the function's corresponding enable bit in the Enable  register.  By  checking  the EN , CEN ,  or CEN2 checkbox in the Enables group box, the corresponding outputs are enabled. Each function's enable bit is ORed with the status of its corresponding enable pin. Refer to the MAX17135 IC data sheet for further details.

## HVINP

The POS regulation voltage is determined by the boost converter's  output  regulation  voltage  (VHVINP).  The HVINP  regulation  voltage  is  set  by  using  a  resistordivider  network,  or  by  programming  the  corresponding value  of  the  desired  HVINP  regulation  voltage  into  the HVINP  register  through  I 2 C.  To  set  the  HVINP  regulation  voltage  through  I 2 C,  first  connect  the  FBP  pin  to GND. With FBP connected to GND, the HVINP register is automatically loaded with 0Ah to set to the HVINP regulation  voltage  to  15V  after  IN  and  VDD  have  exceeded their  undervoltage-lockout  thresholds.  If  another  HVINP regulation voltage other than 15V is needed, select the desired value from the drop-down list in the HVINP group box.

<!-- image -->

## POK and Faults

The EV kit software monitors POK status and various fault conditions. POK is a status indicator that is asserted after FBNG, NEG, POS, and FBPG have all exceeded 80% of their  regulation  voltages  and  all  soft-start  periods  have completed.

When  a  fault  condition  is  detected,  the  corresponding bit's green fault indicator turns red. After the fault condition  is  removed,  the  fault  register  is  cleared  by  pulling the  EN  pin  low  then  high  again,  by  setting  the  EN  bit high, or by powering off then powering on VIN. Refer to the Fault Register (0Ah) R/W section in the MAX17135 IC data sheet for more detailed information regarding fault conditions.

## MAX17135 EV Kit Software (Timing Tab)

In the Timing tab sheet (Figure 2), the power-up/powerdown  sequence  and  timing  between  the  GVEE,  NEG, POS, and GVDD power rails can be set by programming the  t1-t8  Timing  registers  with  corresponding  values. During  power-up  of  the  IC,  once  IN  and  VDD  exceed their  undervoltage-lockout  thresholds,  the  t1-t8  Timing registers are loaded with values stored in the nonvolatile memory  to  preset  the  t1-t8  timing.  The  factory-default timing settings in the nonvolatile memory are:

- t1 = t5 = 30ms
- t2 = t6 = 60ms
- t3 = t7 = 90ms
- t4 = t8 = 120ms

To change the preset t1-t8 timing, set all desired values and press the Program All to MTP button.

## Simple SMBus Commands

There are two methods for communicating with the IC: through the EV kit software main windows (Figures 1 and 2),  or  through  the Advanced Users Interface window, which is available by selecting the Options | Interface (Advanced Users) menu  item  from  the  menu  bar.  The Maxim  command  module  interface  window  (Figure  3) includes a 2-wire interface tab that allows for execution of  the SMBusSendByte() , SMBusReceiveByte() ,  and SMBusQuick() commands.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluates: MAX17135

Figure 3. Command Module Interface Window

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX17135 Evaluation System

## Evaluates: MAX17135

<!-- image -->

Figure 4. MAX17135 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX17135 Evaluation System

## Evaluates: MAX17135

<!-- image -->

Figure 5. MAX17135 EV Kit Component Placement GuideComponent Side

Figure 6. MAX17135 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 7. MAX17135 EV Kit PCB Layout-Solder Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Ordering Information

| PART               | TYPE      |
|--------------------|-----------|
| MAX17135EVKIT #    | EV Kit    |
| MAX17135EVCMAXQU # | EV System |

# Denotes RoHS compliant. Note: The CMAXQUSB+ command module is required when

using the EV kit software.

11

## MAX17135 Evaluation System

## Evaluates: MAX17135

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                | PAGES CHANGED   |
|-------------------|-----------------|--------------------------------------------|-----------------|
|                 0 | 6/11            | Initial release                            | -               |
|                 1 | 1/12            | Updated Component List , replaced Figure 4 | 2, 9            |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.