<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

The MAX8904 evaluation kit (EV kit) is a fully assembled and  tested  PCB  that  evaluates  the  MAX8904  powermanagement IC. The MAX8904 EV kit operates from an input supply range of 3.4V to 13.2V and is controlled by an I 2 C interface. The MAX8904 includes five step-down converters  (1V2,  1V8,  3V3,  5V0,  and  ADJ),  a  WLED step-up converter (BST), a current-limited switch (CLS), a  current-sense  amplifier  (CSA)  with  differential  inputs, an  active-low  open-drain  comparator  (CMP),  and  an 8-bit GPIO port. The MAX8904 also controls an external n-MOSFET for input overvoltage protection (13.5V, typ) and an external  p-MOSFET for reverse-polarity  protection  (up  to  -28V)  of  downstream circuits. The I 2 C interface  supports  output-voltage  setting  of  the  ADJ  power rail  and  BST  regulator  (voltage-source  mode),  WLED current setting for the BST regulator (WLED current regulator  mode),  GPIO  control,  and  enable/disable  of  ADJ, 5V0, BST, CSA, CMP, and CLS blocks.

The  MAX8904  EV  kit  also  includes  Windows M 2000-, Windows  XP M -,  and  Windows  Vista M -compatible  software  that  provides  a  simple  graphical  user  interface (GUI)  for  exercising  the  features  of  the  MAX8904.  To evaluate the MAX8904, order the MINIQUSB+ command module along with the MAX8904 EV kit.

Windows, Windows XP, and Windows Vista are registered trademarks of Microsoft Corp.

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

Features

- S Input-Voltage Range of 3.4V to 13.2V
- S 1MHz, Up to 90% Efficient, Synchronous DC-DC Step-Down Converters
- S Power Converters 1V2, 1V8, and ADJ Operated Out-of-Phase with Respect to 3V3 and 5V0
- S 667kHz Step-Up Converter Provides Up to 32V Output for Driving Up to Eight WLEDs
- S Internal Compensation on All Power Converters
- S Fast Line- and Load-Transient Responses
- S Internal Soft-Start and Short-Circuit Protection on All Power Converter Outputs
- S Input Overvoltage and Reverse-Polarity Protection
- S 250ms Fault Timer-Based Protection for Overload and Short Circuit
- S I 2 C Serial Interface for On/Off Control, Output Voltage, WLED Current, GPIO Setting, and Fault Monitoring
- S &lt; 10µA Standby Current
- S Compact, 56-Pin 7mm x 7mm TQFN Package
- S Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8904EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                |
|---------------|-------|----------------------------------------------------------------------------|
| C1            |     1 | 0.22 F F Q 10%, 16V X7R ceramic capacitor (0603) Murata GRM188R71C224KA01D |
| C2, C10       |     2 | 1 F F Q 10%, 6.3V X5R ceramic capacitors (0603) Murata GRM188R60J105KA01D  |
| C3            |     1 | 1 F F Q 10%, 6.3V X5R ceramic capacitor (0402) Murata GRM155R60J105K       |
| C4            |     1 | 1 F F Q 10%, 16V X7R ceramic capacitor (0805) Taiyo Yuden EMK212BJ105KG    |

| DESIGNATION            |   QTY | DESCRIPTION                                                                |
|------------------------|-------|----------------------------------------------------------------------------|
| C5                     |     1 | 2.2 F F Q 10%, 16V X7R ceramic capacitor (0805) Taiyo Yuden EMK212BJ225KG  |
| C6                     |     1 | 1 F F Q 10%, 50V X7R ceramic capacitor (1206) Taiyo Yuden UMK316B7105KL    |
| C7, C15, C18, C21, C24 |     5 | 4.7 F F Q 10%, 25V X7R ceramic capacitors (0805) Taiyo Yuden TMK212BJ475KG |
| C8_1, C8_2             |     2 | 22 F F Q 20%, 4V X5R ceramic capacitors (0603) Taiyo Yuden AMK107BJ226MA   |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maximintegrated.com.

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

## Component List (continued)

* EP = Exposed pad.

| DESIGNATION                          |   QTY | DESCRIPTION                                                                 |
|--------------------------------------|-------|-----------------------------------------------------------------------------|
| C9, C12, C13, C16, C19, C22          |     6 | 0.1 F F Q 10%, 16V X7R ceramic capacitors (0402) Taiyo Yuden EMK105BJ104KV  |
| C11                                  |     1 | 680 F F Q 20%, 16V aluminum electrolytic capacitor SANYO 16CE680AX          |
| C14_1, C14_2, C17, C20_1, C20_2, C23 |     6 | 22 F F Q 10%, 6.3V X5R ceramic capacitors (1206) Taiyo Yuden JMK316BJ226ML  |
| C25                                  |     0 | Not installed, ceramic capacitor (0603)                                     |
| C26                                  |     1 | 0.022 F F Q 10%, 25V X7R ceramic capacitor (0402) Taiyo Yuden TMK105BJ223KV |
| C27                                  |     1 | 0.01 F F Q 10%, 16V X7R ceramic capacitor (0402) Murata GRM155R71C104K      |
| C28                                  |     1 | 220pF Q 10%, 50V X5R ceramic capacitor (0402) Taiyo Yuden UMK105BJ221KV     |
| D1, D2                               |     2 | 40V, 0.5A Schottky diodes (SOD123) ON Semi MBR0540T1G                       |
| D3-D10, D11                          |     9 | Surface-mount LEDs, blue (0603) Kingbright APT1608PBCA                      |
| D12                                  |     1 | Surface-mount LED, green (0603) Kingbright APT1608CGCK                      |
| D13                                  |     1 | Surface-mount LED, yellow (0603) Kingbright APT1608SYCK                     |
| D14                                  |     1 | Surface-mount LED, red (0603) Kingbright APT1608SRCP                        |
| J1                                   |     1 | 2 x 8 vertical male header                                                  |
| J2                                   |     1 | 1 x 8 single-row female receptacle Samtec SSW-108-01-T-S                    |
| JU1, JU2.0- JU2.7, JU3               |    10 | 2-pin headers, 0.1in Sullins PEC36SAAN or equivalent                        |

| DESIGNATION          |   QTY | DESCRIPTION                                                        |
|----------------------|-------|--------------------------------------------------------------------|
| L1                   |     1 | 10 F H, 1.2A, 145m I DCR inductor TOKO DE3518 Series 1127AS-100M   |
| L2, L4               |     2 | 4.7 F H, 1.75A, 60m I DCR inductors TOKO DE3518 Series 1127AS-4R7M |
| L3, L5               |     2 | 4.3 F H, 2.65A, 70m I DCR inductors TOKO DE4518 Series 1124BS-4R3M |
| L6                   |     1 | 10 F H, 1.75A, 120m I DCR inductor TOKO DE4518 Series 1124BS-100M  |
| Q1                   |     1 | 30V dual n-/p-MOSFET (8 SO) Fairchild FDS8958B                     |
| R1, R3               |     2 | 10 I , 1/16W Q 1% resistors (0402)                                 |
| R2                   |     1 | 0.015 I , 1/4W Q 1% resistor (1206) Vishay WSL1206R0150FEA         |
| R4                   |     1 | 0 I Q 1% resistor (0805)                                           |
| R5, R6, R29, R30-R33 |     7 | 0 I Q 1% resistors (0402)                                          |
| R7, R25, R26, R27    |     0 | Not installed, resistors (0402)                                    |
| R8-R11               |     4 | 100 I Q 1% resistors (0402)                                        |
| R12-R19              |     8 | 100k I Q 1% resistors (0402)                                       |
| R20-R24              |     5 | 10k I Q 1% resistors (0402)                                        |
| R28                  |     1 | 24.9k I Q 1% resistor (0402)                                       |
| U1                   |     1 | Power-management IC (56 TQFN-EP*) Maxim MAX8904ETN+                |
| -                    |     9 | Shunts, 2 positions Sullins STC02SYAN or equivalent                |
| -                    |     1 | PCB: MAX8904 EVALUATION KIT+                                       |

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Fairchild Semiconductor                | 888-522-5372 | www.fairchildsemi.com       |
| Kingbright Corporation                 | 909-468-0500 | www.kingbrightusa.com       |
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| Samtec, Inc.                           | 800-726-8329 | www.samtec.com              |
| SANYO Electric Co., Ltd.               | 619-661-6835 | www.sanyodevice.com         |
| Sullins Electronics Corp.              | 760-744-0125 | www.sullinselecstronics.com |
| Taiyo Yuden                            | 847-925-0888 | www.yuden.co.jp             |
| TOKO                                   | 847-297-0070 | www.toko.com                |
| ON Semiconductor                       | 888-743-7826 | www.onsemi.com              |
| Vishay                                 | 402-563-6866 | www.vishay.com              |

Note:

Indicate that you are using the MAX8904 when contacting these component suppliers

## MAX8904 EV Kit Files

| FILES                   | DESCRIPTION                                |
|-------------------------|--------------------------------------------|
| INSTALL.EXE             | Installs the EV kit files on your computer |
| MAX8904.EXE             | Application program                        |
| UNINST.INI              | Uninstalls the EV kit software             |
| TROUBLESHOOTING_USB.PDF | USB driver installation help file          |

## Quick Start

## Recommended Equipment

- Variable	14V	power	supply	capable	of	supplying	5A of output current
- Voltmeter
- User-supplied	 Windows	 2000,	 Windows	 XP,	 or Windows Vista PC with a spare USB port

Note: In  the  following  sections,  software-related  items are  identified  by  bolding.  Text  in bold refers  to  items directly from the EV kit software. Text in bold and underlined refers to items from the Windows operating system.

## Procedure

The  MAX8904  EV  kit  is  a  fully  assembled  and  tested surface-mount  board.  Follow  the  steps  below  to  verify board operation. Caution:  Do  not  turn  on  the  power supply until all connections are completed.

- 1) Visit www.maximintegrated.com/evkitsoftware to download the latest version of the EV kit software, 8904Rxx.ZIP. Save the EV kit software to a temporary folder and uncompress the ZIP file.
- 2) Install the EV kit software on your computer by running  the  INSTALL.EXE  program  inside  the  tempo-

rary folder. The program files are copied and icons are created in the Windows Start | Programs menu.

- 3) Carefully connect the MINIQUSB+ command module  with  the  MAX8904  EV  kit  by  aligning  the 16-pin connector J1 and 8-pin receptacle J2 of the MAX8904 EV kit with the 16-pin receptacle J3 and 8-pin header J4 of the MINIQUSB+ interface board, respectively.
- 4) Connect  the  USB  cable  from  the PC  to the MINIQUSB+ command module. A Building Driver Database window  pops  up  in  addition  to  a New Hardware Found message if this is the first time the EV kit board is connected to the PC. If a window is not seen that is similar to the one described above after 30s, remove the USB cable from the board and reconnect  it.  Administrator  privileges  are  required to install the USB device driver on Windows. Refer to  the  TROUBLESHOOTING\_USB.PDF  document included with the software if you have any problems during this step.
- 5) Follow  the  directions  of  the Add  New  Hardware Wizard to install the USB device driver. Choose the Search for the best driver for your device option. Specify  the  location  of  the  device  driver  to  be

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

C:\Program  Files\MAX8904 (default installation directory) using the Browse button.

- 6) Preset the power supply to 7.2V. Turn off the power supply.
- 7) Connect the positive lead of the 7.2V power supply to  the  VIN  pad.  Connect  the  negative  lead  of  the 7.2V power supply to the GND pad.
- 8) Turn on the power supply.
- 9) Start the MAX8904 program by opening its icon in the Start  |  Programs menu.  The  EV  kit  software main window appears, as shown in Figure 1.
- 10)  Normal device operation is verified when Command Module  Connected,  Device  Connected is  displayed  at  the  top-left  side  of  the  MAX8904  EV  kit main window (Figure 1).
- 11)  Verify that the voltage is 1.2V at the 1V2 pad.
- 12)  Verify that the voltage is 1.8V at the 1V8 pad.
- 13)  Verify that the voltage is 3.3V at the 3V3 pad.
- 14)  Verify that the voltage is 5V at the 5V0 pad.
- 15)  Choose 4.000 from the VADJSP (V) group box to set  the  ADJ  output  voltage  to  4V  and  check  the VADJEN checkbox and press the Write button  in the ENABLE/SHUTDOWN group box to turn on the ADJ step-down converter.
- 16)  Verify that the voltage is 4V at the ADJ pad.
- 17)  Verify that the jumper JU1 shunt is installed.
- 18)  Choose  10  from  the BSTCSP  (mA) group  box to  set  the  LED  current  to  10mA.  Choose 32 from the BSTVSP  (V)-current  mode group  box  to  set the  overvoltage  threshold  for  BST  current-mode operation to 32V. Check the BSTEN checkbox and press the Write button in the ENABLE/SHUTDOWN group box to turn on the BST step-up converter.
- 19)  Verify that blue LEDs D3-D10 turn on.
- 20)  Switch to the GPIO Configuration tab, as shown in Figure  2.  Choose Open-Drain/HiZ from  the GPIO Config drop-down list for GPIO4-GPIO7.
- 21)  Verify that LEDs D11-D14 turn on.

## Detailed Description of Software

## User-Interface Panel

The  MAX8904  EV  kit  uses  the  MINIQUSB+  command module for an I 2 C interface to control the MAX8904 configurations. The EV kit software displays two tabs to set the MAX8904 configurations, Power Controller, Status and GPIO Configuration .  Changes to the controls followed by a Write/Write All update the appropriate registers of the MAX8904. After any write or read operation, the  related  command  and  data  sent  are  shown  in  the top-middle box.

## Power Controller, Status Tab

The MAX8904 includes five step-down converters (1V2, 1V8,  3V3,  5V0,  and  ADJ),  a  WLED  step-up  converter (BST),  a  current-limited  switch  (CLS),  a  current-sense amplifier  (CSA)  with  differential  inputs,  and  an  activelow  open-drain  comparator  (CMP).  Their  configuration can  be  set  by  using  the  EV  kit  software.  The MODE group box provides control of CSA gain, ADJ, and BST operating  mode,  CSA  overcurrent-fault  detection,  and overvoltage  protection.  The  output  voltage  of  the  ADJ and  BST  regulator  (voltage-source  mode),  and  WLED current  for  the  BST  regulator  (current-regulator  mode), are  set  through  the VADJSP(V) , BSTCSP(mA) ,  and BSTVSP(V) group boxes.

ENABLE(Checked) allows the host processor to enable/disable the individual  block  when  needed. SHUTDOWN(Unchecked) works in conjunction with the MAX8904 SHDN pin to program which function block is turned off in the event of a power failure.

The Fault  Status , Overload  Fault  Status ,  and VOK Fault Register read-only registers monitor the MAX8904 operating state and fault status. They indicate any overload,  short  circuit,  power-ok,  input  overvoltage  fault, input overcurrent fault, or overtemperature. The STATUS indicators require a Read if a fault or event has occurred, in which case the corresponding indicator flag turns red. Press the CLRFLTS button to clear the status bit and pull FLT back to high if the fault or event is no longer present. Press the REARM button to rearm fault detections.

## GPIO Configuration Tab

The GPIO Configuration tab sheet allows the MAX8904 to configure the GPIO0-GPIO7 to the following modes:

- Schmitt-trigger	 input	 with	 an	 internal	 1M I pullup resistor to GPIOPWR
- Open-drain	output,	with	an	internal	10k I pullup resistor off-state, capable of sinking up to 20mA current
- Open-drain	output	with	high-impedance	state,	capa -ble of sinking up to 20mA current
- High-impedance	output

The  status  of  eight  GPIO  bits  can  be  read/written  by the GPIO  Data register.  The  GPIOs  can  also  perform LED dimming, which is achieved by setting PWM , PWM Bank , and GPIO PWM Control boxes.

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

Figure 1. MAX8904 EV Kit Software (Power Controller, Status Tab)

<!-- image -->

Maxim Integrated

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

Figure 2. GPIO Configuration Tab

<!-- image -->

## Simple I 2 C/SMBus Commands

There  are  two  methods  for  communicating  with  the MAX8904,  through  the  normal  user-interface  panel (Figure  1),  or  through  the  SMBus  commands  available by choosing the Options | 2-wire Interface menu item from  the  menu  bar.  The  I 2 C/SMBus  commands  allow low-level  I 2 C  commands  to  be  sent  and  are  typically used  for  debugging  purposes.  The Maxim  Command Module  Interface  (CmodGUIForm) window  (Figure  3) pops up and includes a 2-wire interface tab that allows for execution of the simple I 2 C commands.

It is necessary to first properly identify the slave address of the MAX8904. This is done by pressing the Hunt for active listeners button. The PWREN pin must be driven high  prior  to  searching  for  the  active  listeners,  since PWREN  enables  the  3.3V  step-down  converter,  which powers the I 2 C pullup resistors and the internal I 2 C circuitry.

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

The  WriteByte  and  ReadByte  protocols  can  be  used to  send  and  receive  8-bit  commands  directly  to  the MAX8904 registers. Refer to the MAX8904 IC data sheet for  command-byte  format.  For  the  Write  Byte  protocol, the  register  address  is  entered  in  the Command Byte combo box, and the 8-bit data contents are entered in the Data Out combo box. For the Read Byte protocol, the  register  address  is  entered  in  the Command Byte combo box, and the register contents are read back into the Data In edit box. Pressing the Execute button sends the command. The PASS/FAIL indicator flag indicates a successful transaction by turning green.

The SMBus dialog boxes accept numeric data in binary, decimal, or hexadecimal. Hexadecimal numbers should be prefixed by $ or 0x. Binary numbers must be exactly eight digits. See Figure 3 for an illustration of this tool.

Figure 3. Maxim Command Module Interface (CmodGUIForm) Window

<!-- image -->

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

## Detailed Description of Hardware

## Step-Down Converters

The MAX8904 has four fixed-voltage step-down converters (1V2, 1V8, 3V3, and 5V0) and an adjustable voltage step-down converter ADJ. Table 1 lists the output voltages and currents for each converter. The ADJ converter output voltage can be programmed from 3V to 5.067V in 33.3mV increments using the MAX8904 EV kit software. The PWREN logic-high input turns on the 1V2, 1V8, 3V3, and 5V0 power converters. Once the 5V0 converter is in regulation, it can be disabled by the 5V0EN bit in the Enable register. The ADJ converter can be enabled by checking the ADJEN bit in the Enable register.

## BST Step-Up Converters

The MAX8904 EV kit contains a BST step-up converter that can operate in either current mode or voltage mode. When the Current Mode radio button in the BSTIV group box is selected, select the value from 1mA to 63mA from the BSTCSP(mA) group box to set the current flowing through  D3-D10.  Select  a  value  from  the BSTVSP(V)current mode group box to set the overvoltage threshold for WLED protection.

Click on the Voltage Mode radio button to operate the BST converter in voltage mode. The BST output voltage can be programmed by the BSTVSP(V) from  12.5V  to 18.7V with 100mV increments. In voltage mode, the BST converter can provide up to 63mA output current. Ensure that the jumper JU1 shunt is not installed and the jumper JU3 shunt  is  installed  to  short  PCS  to  GND  in  voltage mode.

## Current-Limit Switch

The  current-limited  switch  (CLS)  allows  the  MAX8904 to control the amount of current that an external device draws  from  the  input-voltage  source.  The  CLS  is  connected between the input-voltage source and the target peripheral device. It provides at least 450mA current and is protected under short-circuit conditions. A short-circuit condition that lasts greater than 250ms latches the CLS

## Table 1. Step-Down Converter Output Voltage and Output Current

| OUTPUT   | VOLTAGE (V)   |   CURRENT (mA) |
|----------|---------------|----------------|
| 1V2      | 1.2           |            600 |
| 1V8      | 1.8           |            975 |
| 3V3      | 3.3           |           1250 |
| 5V0      | 5             |            800 |
| ADJ      | 3 to 5.067    |           1500 |

off.  The  CLS  can  be  enabled/disabled  by  checking/ unchecking the CLSEN bit in the Enable register.

## Current-Sense Amplifier

The current-sense amplifier (CSA) measures the MAX8904 input current and provides an analog voltage output.  The  CSOUT  voltage  is  given  by  the  following equation:

<!-- formula-not-decoded -->

where AV = 20V/V or 40V/V (programmed by the CSAG bit in the Mode register), R2 = 0.015 I ,  and IIN = input current.  The  CSA  allows  full-scale  (1.2V)  output  for  4A (20V/V) and 2A (40V/V) currents.

The CSFLGEN bit  is  used  to  enable/disable  the  CSA input  overcurrent-fault-detection  feature.  If CSFLGEN is set to Enable , the MAX8904 sets the OCIN bit in the Fault Status register and pulls FLT to low when an input overcurrent is sensed at CSOUT. The input overcurrentfault detection is disabled if CSFLGEN is set to Disable .

The  CSA  can  be  enabled  or  disabled  by  checking/ unchecking the CSAEN bit in the Enable register.

## Open-Drain Comparator

The  open-drain  comparator  (CMP)  is  an  uncommitted, 14V,  open-drain  output  comparator  with  20mA  of  sinking  capability.  The  CMP  can  be  enabled  or  disabled by checking/unchecking the CMPEN bit  in  the Enable register.

## Overvoltage and Reverse-Polarity Protection

The  MAX8904  supports  input  overvoltage  protection (OVP) at 13.5V (typ) by controlling an external n-MOSFET and reverse-polarity protection (down to -28V) of downstream circuits by controlling an external p-MOSFET.

As  the  VIN  voltage  rises  above  4V,  the  overvoltage charge-pump  gate  drive  is  powered  up  and  OVGATE turns  on  the  Q1  n-MOSFET.  Once  VIN  approaches 13.5V, OVGATE is discharged, turning off the Q1 n-MOSFET and disconnecting the downstream circuit from the high  input.  When  the  input  voltage  goes  negative,  the MAX8904 pulls RPGATE to OVPWR voltage to turn off the external p-MOSFET. When the input voltage rises in the positive  direction  to  a  maximum  of  30V,  RPGATE pulls low and turns on the Q1 p-MOSFET.

## GPIO Port

The MAX8904 EV kit features an 8-bit GPIO port controller with PWM capability. The GPIO0-GPIO7 can be configured by using the MAX8904 EV kit software as:

- Schmitt-trigger	 input	 with	 an	 internal	 1M I pullup resistor to GPIOPWR
- Open-drain	output,	with	an	internal	10k I pullup resistor off-state, capable of sinking up to 20mA current
- Open-drain	output	with	high-impedance	state,	capa -ble of sinking up to 20mA current
- High-impedance	output

The D11-D14 LEDs are controlled by GPIO4-GPIO7 on the MAX8904 EV kit. Their brightness can be controlled by  selecting PWM Enable and  setting  the  PWM  duty cycle through PWM Bank Control .  Each LED can also be switched between two intensities by toggling its PWM Bank assignment between Bank 0 and Bank 1 .

## Power Enable Input (PWREN)

Driving PWREN logic input high turns on 1V2, 1V8, 3V3, and 5V0 default power rails. The 5V0 converter can also be turned on/off through the Enable register  once  it  is in 5V regulation. The 1V2, 1V8, and 3V3 power rails can only be turned off by driving PWREN logic input low.

## Shutdown Input ( SHDN )

The  MAX8904  features  an  emergency  shutdown  input ( SHDN )  to  turn  off  the  function  blocks  preselected  by the Shutdown register  under  power-fail  conditions. When  an  active-low SHDN is  asserted,  the  function blocks  whose  corresponding  bits  are  programmed  to 0 in the Shutdown register are immediately turned off, and the blocks whose bits in the Shutdown register are programmed to 1 remain enabled. The function blocks include CSA, CMP, BST, ADJ, 5V0, and CLS.

## Fault Handling

The MAX8904 EV kit software provides all the fault information in the STATUS group box. The three read-only

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

registers, Fault  Status , Overload  Fault  Status ,  and VOK  Fault  Register monitor  the  MAX8904  fault  status.  They  indicate  any  VOK,  overload,  or  system  fault. The STATUS indicators  require  a Read if  a  fault  has occurred, in which case the corresponding indicator flag turns red. A second Read clears the status bit if the fault is no longer present.

A VOK fault occurs either when an output voltage fails to  soft-start  or  due  to  overload/short-circuit  conditions under normal operation, causing the output voltage to fall below its VOK threshold. When a VOK fault occurs on a particular converter or CLS, press the Read button in the VOK Fault Register box to see the corresponding \_OK indicator flag turns red.

The Overload register indicates if any overload occurs on  the  power  converters  or  CLS.  The  corresponding \_OL indicator flag turns red after pressing Read in  the Overload Fault Status group box.

The Fault  Status register  reports  all  the  system  faults (fault  on  BST,  VOK,  overload,  overtemperature,  input overcurrent, or input overvoltage). Refer to the MAX8904 IC data sheet for more information. The FLT output goes low immediately after any fault detection.

Press the Read All button to update all the fault information in the Status registers.

## User-Supplied I 2 C Interface

To  use  the  MAX8904  EV  kit  with  a  user-supplied  I 2 C interface,  connect  the  SDA,  SCL,  and  GND  lines  from the  user-supplied  I 2 C  interface  to  the  SDA,  SCL,  and GND pads on the EV kit. Remove pullup resistors R21 and R22 and install resistors R26 and R27 for the usersupplied I 2 C interface. For resistors R26 and R27, 2.2k I is recommended.

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

Figure 4. MAX8904 EV Kit Schematic

<!-- image -->

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

Figure 5. MAX8904 EV Kit Component Placement

<!-- image -->

Figure 6. MAX8904 EV Kit PCB Layout-Top Layer 1

<!-- image -->

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

Figure 7. MAX8904 EV Kit PCB Layout-PGND Layer 2

<!-- image -->

Figure 8. MAX8904 EV Kit PCB Layout-Power Layer 3

<!-- image -->

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

Figure 9. MAX8904 EV Kit PCB Layout-Routing Layer 4

<!-- image -->

Figure 10. MAX8904 EV Kit PCB Layout-GND Layer 5

<!-- image -->

## Evaluates:  MAX8904 MAX8904 Evaluation Kit

<!-- image -->

Figure 11. MAX8904 EV Kit PCB Layout-Bottom Layer 6

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.