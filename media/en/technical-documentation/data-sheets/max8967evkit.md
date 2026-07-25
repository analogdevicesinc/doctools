<!-- lastmod 2022-08-04 -->
## MAX8967 Evaluation Kit

## General Description

The MAX8967 evaluation kit (EV kit) is a fully assembled and tested PCB for evaluating the MAX8967, which is a µPMIC with two step-down switching converters and six LDOs. The step-down converters deliver up to 2A of output current independently. Two of the LDOs deliver a load current up to 300mA, while four of the LDOs deliver up to 150mA. Both step-down converters have remote sense, allowing  accurate  load  regulation.  The  device  operates over a 2.6V to 5.5V input supply range.

The IC supports dynamic adjustment of the output voltage through its I 2 C interface. Each step-down converter has two register settings for output voltage and a setting for ramp  rate.  Each  step-down  converter  has  a  dedicated enable pin and a dedicated VID\_ pin to toggle between the  two  programmed  output  voltages.  Additionally,  an interrupt output is provided, allowing the device to signal its master.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                        |
|---------------|-------|--------------------------------------------------------------------------------------------------------------------|
| C1            |     1 | 1µF ±10%, 6.3V X5R ceramic capacitor (0402) TDK C1005X5R0J105K Murata GRM155R61A105K                               |
| C2            |     1 | 0.1µF ±10%, 10V X5R ceramic capacitor (0402) TDK C1005X5R1A104K Taiyo Yuden LMK105BJ104KV Murata GRM155R61A104K    |
| C3, C4        |     2 | 2.2µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A225K Taiyo Yuden LMK107BJ225KA-T Murata GRM188R61A225K |
| C5, C6        |     2 | 10µF ±10%, 10V X5R ceramic capacitors (0603) TDK C1608X5R1A106KT Taiyo Yuden LMK107BBJ106MALT                      |

## Features

- Two	2A	Step-Down	Converters	(OUT1,	OUT2)
- Programmable Output Voltage (0.6V to 3.3875V in 50mV	Steps)	Through	I 2 C Bus
- Programmable	Output-Voltage	Slew	Rate (12.5mV/µs to 50mV/µs)
- Dynamic	Switching	Between	Two	Output	Voltages Through VID\_ Pins
- 4.4MHz	Step-Down	Switching	Allows	for	1µH Inductors
- Two	300mA	LDOs,	Four	150mA	LDOs
- COUT	=	1µF	for	All	LDOs
- RoHS	Compliant

Ordering Information appears at end of data sheet.

| DESIGNATION   |   QTY | DESCRIPTION                                                                                                         |
|---------------|-------|---------------------------------------------------------------------------------------------------------------------|
| C7, C8        |     2 | 22µF ±20%, 6.3V X5R ceramic capacitors (0805) TDK C2012X5R0J226K Murata GRM21BR60J226M Taiyo Yuden JMK212ABJ226MG-T |
| C9-C16        |     8 | 1µF ±10%, 10V X7R ceramic capacitors (0603) TDK C1608X7R1A105K Murata GRM188R71A105K                                |
| J1            |     1 | 20-pin (2 x 10) right-angle receptacle Samtec INC SSW-110-02-S-D-RA                                                 |
| JU1           |     1 | 3-pin header Digi-Key S1012E-36-ND                                                                                  |
| JU2-JU9       |     8 | 2-pin headers Digi-Key S1012E-36-ND                                                                                 |
| L1, L2        |     2 | 1µH, 2.8A inductors (2.5mm x 2.0mm x 1.0mm) TOKO DFE252010R-H-1R0N                                                  |

<!-- image -->

Evaluates: MAX8967

## MAX8967 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                                     |
|---------------|-------|-----------------------------------------------------------------|
| R1, R2        |     2 | 2.2kΩ ±5% resistors (0402)                                      |
| R3            |     1 | 100kΩ ±5% resistor (0402)                                       |
| R5-R9         |     5 | 0Ω ±5% resistors (0402)                                         |
| U1            |     1 | Dual step-down converter, 6 LDO PMIC (30 WLP) Maxim MAX8967EWV+ |

## Component Suppliers

| SUPPLIER                              | PHONE        | WEB                         |
|---------------------------------------|--------------|-----------------------------|
| Digi-Key Corp.                        | 800-344-4539 | www.digikey.com             |
| Murata Electronics North America, In. | 770-436-1300 | www.murata-northamerica.com |
| Samtec, Inc.                          | 800-726-8329 | www.samtec.com              |
| Taiyo Yuden                           | 800-348-2496 | www.t-yuden.com             |
| TDK Corp.                             | 847-803-6100 | www.component.tdk.com       |
| TOKOAmerica, Inc.                     | 847-297-0070 | www.tokoam.com              |

Note: Indicate that you are using the MAX8967 when contacting these component suppliers.

## MAX8967 EV Kit Files

| FILE                | DESCRIPTION                                |
|---------------------|--------------------------------------------|
| INSTALL.EXE         | Installs the EV kit files on your computer |
| MAX8967.EXE         | Application program                        |
| UNINSTALL.EXE       | Uninstalls the EV kit software             |
| USB_Driver_Help.PDF | USB driver installation help file          |

## Quick Start

## Recommended Equipment

- MAX8967	EV	kit	test	fixture
- I 2 C	 command	 module,	 CMAXQUSB	 or	 MINIQUSB (USB	cable	included)
- Power	supply	(PS1)	capable	of	sourcing	5A
- Digital	multimeter	with	current-measurement	capability (DMM1)
- Electronic	load	(EL1)

Note: In the following sections, software-related items are identified by bolding. Text in bold refers to items directly from  the  EV  kit  software.  Text  in bold  and  underlined refers	to	items	from	the	Windows	operating	system.

## Procedure

The EV kit is a fully assembled and tested surface-mount board.	Follow	the	steps	below	and	Figure	1	to	set	up	and verify the device and board operation:

- 1) Verify that the EV kit jumpers are configured in their default positions, as shown in Table 1.
- 2) Visit www.maximintegrated.com/tools/evkit to download  the  latest  version  of  the  EV  kit  software, 8967Rxx.ZIP.	Save	the	EV	kit	software	to	a	temporary folder	and	uncompress	the	ZIP	file.	The	CMAXQUSB or	 MINIQUSB	 firmware	 can	 also	 be	 found	 at	 the same  link.  (The  EV  kit  is  compatible  with  both  the CMAXQUSB	and	MINIQUSB	interface	boards.)
- 3) Install	the	EV	kit	software	and	USB	interface	firmware on	your	computer	by	running	the	INSTALL.EXE	pro -gram inside the temporary folder. The EV kit program files	are	copied	and	icons	are	created	in	the	Windows Start | Programs menu.
- 4) Connect the USB	 cable from the PC	 to the CMAXQUSB/MINIQUSB	interface	board.	A Building Driver  Database window  pops  up  in  addition  to  a New Hardware Found message when installing the USB	driver	for	the	first	time.	If	you	do	not	see	a	win -dow that is similar to the one described above after

│

Evaluates: MAX8967

| DESIGNATION   |   QTY | DESCRIPTION                            |
|---------------|-------|----------------------------------------|
| U2            |     1 | 150mALDO (5 SC70) Maxim MAX8891EXK18+T |
| -             |     1 | PCB: MAX8967EVKIT+                     |

30s,	remove	the	USB	cable	from	the	board	and	recon -nect it. Administrator privileges are required to install the	USB	device	driver	on	Windows.

- 5) Follow	 the	 directions	 of	 the Add  New  Hardware Wizard to	 install	 the	 USB	device	driver.	Choose	the Search for the best driver for your device option. Specify	 the	 location	 of	 the	 device	 driver	 to	 be C:\ Program  Files\MAX8967 (default  installation  directory)  using  the Browse button.  During  device driver installation,	Windows	may	show	a	warning	message indicating that the device driver that Maxim uses does not  contain  a  digital  signature.  This  is  not  an  error condition  and  it  is  safe  to  proceed  with  installation. Refer	to	the	USB\_Driver\_Help.PDF	file	for	additional information.
- 6) If	 using	 the	 CMAXQUSB	command	module,	ensure that	 the	 shunt	 on	 jumper	 JU1	 is	 the	 same	 voltage as	VIO.	If	 VIO	 is	 1.8V,	 leave	 jumper	 JU1	 open	 and disconnect	 pullups	 in	 the	 CMAXQUSB	 and	 use	 the pullup resistors in the EV kit.
- 7) Carefully  connect  the  boards  by  aligning  the  20-pin connector  of  the  EV  kit  with  the  20-pin  header  of the	 CMAXQUSB/MINIQUSB	interface	board.	Gently press them together.
- 8) Preset	PS1	to	4.2V	and	turn	off.	Once	the	power	sup -ply	is	turned	off	connect	PS1	to	IN1/IN2	and	to	GND.
- 9) Preset EL1 to 2A and turn off. Once the load is turned off	connect	EL1	to	OUT1	and	to	GND.
- 10) Connect	DMM1	across	buck	output	OUT1.
- 11) Turn	on	PS1.
- 12) Start	the	EV	kit	software	by	opening	its	icon	at Start │Programs │MAX8967 EVALUATION KIT
- 13) Normal	 device	 operation	 is	 verified	 when EVKIT CONNECTED is  displayed. Note: All  default  EV  kit software  settings  are  used  for  the  remainder  of  the test procedure.)
- 14) Verify the voltage read by the DMM1 is approximately the default voltage.
- 15) Turn on electronic load EL1 and verify that the voltage read by DMM1 is approximately the default voltage.
- 16) Use	 the	 EV	 kit	 GUI	 to	 change	 the	 output	 voltage. Verify that the output voltage is on target while maintaining a 2A load current.

## Table 1. Default Jumper Settings (JU1-JU9)

| JUMPER   | SHUNT POSITION   | FUNCTION                                  |
|----------|------------------|-------------------------------------------|
| JU1      | 1-2              | Enables 1.8V LDO output for circuit logic |
| JU2      | Installed        | Connects INA to IN1/IN2                   |
| JU3      | Installed        | Connects INB to IN1/IN2                   |
| JU4      | Installed        | Connects EN1 to 1.8V                      |
| JU5      | Installed        | Connects EN2 to 1.8V                      |
| JU6      | Not installed    | Connects VID1 to 1.8V                     |
| JU7      | Not installed    | Connects VID2 to 1.8V                     |
| JU8      | Installed        | Connects SCL to 1.8V                      |
| JU9      | Installed        | Connects SDAto 1.8V                       |

- 17) Turn off EL1.
- 18) Disconnect	EL1	and	DMM1	and	install	on	OUT2.
- 19) Repeat	steps	14-17	for	the	second	step-down	converter.
- 20) Disconnect all test leads from the EV kit.

## Detailed Description of Hardware

The MAX8967's two ultra-low I Q  step-down converters are ideal for powering modems, applications processor cores, memory,  system  I/O,  and  other  supplies  in  handheld devices. In normal operation, these step-down converters consume only 16 F A (typ)  of  quiescent  current.  In  green mode, the quiescent current is reduced to 5 F A (typ) per converter, with reduced load capability. Each step-down converter can be independently put into green mode by writing a bit in its control register.

## Step-Down Converters

Each  step-down  converter  provides  internal  feed  back, minimizing  external  component  count.  Both  step-down converter  output  voltages  are  programmed  through  the IC's serial interface. A 4.4MHz switching frequency minimizes external component size. Dynamic voltage scaling is available to reduce power consumption in sleep mode. Both  step-down  converters  feature  automatic  transition from	 skip	 mode	 (PFM)	 to	 forced-PWM	 (FPWM)	 opera -tion.	FPWM	operation	can	be	enabled	by	writing	a	bit	in a control register.

│

## Voltage Control Using VID\_

Both step-down converters feature VID\_ control to reduce power  consumption  in  the  loads  such  as  modem  and applications	processor	cores.	Each	VID\_	control	(JU6	and JU7	in	Figure	1)	allows	the	converter	to	transition	between two states set up in advance using I 2 C. Essentially, two voltage  states  are  accessible  without  the  overhead associated  I 2 C  control.  VID\_  control  allows  the  core voltages  to  be  reduced  when  the  processor  clock  is throttled	 back.	 When	 exiting	 sleep	 mode	 (by	 changing the state of VID\_), the normal core voltages are restored, providing the optimal operating condition for best system performance.

## Remote Output-Voltage Sensing

Each  step-down  converter's  output  features  remote output-voltage sensing for improved output-voltage accuracy	when	the	output	load	is	far	from	the	IC.	The	SNSP\_ and	 SNSN\_	 inputs	 connect	 across	 the	 load,	 with	 the SNSN\_	connected	to	ground,	and	SNSP\_	connected	to the	output	at	the	edge	of	the	EV	kit.	OUT1	uses	R5	and R6	(Figure	1)	and	OUT2	uses	R7	and	R8	for	the	remote sense.	All	remote-sense	resistors	are	0Ω	by	default.

The remote-sense feature requires a 1V or greater difference	between	AV	and	OUT\_	for	best	performance.	The remote-sense feature can be disabled through registers to reduce quiescent current consumption. In addition, this feature is disabled during green mode operation.

## Output-Voltage Slew Rate

Both  step-down  converters  feature  an  adjustable  slew rate  when increasing or decreasing output voltage. The nominal  slew  rate  is  12.5mV/µs.  Two  additional  slew rates are provided (25mV/µs and 50mV/µs), so that faster and  slower  slew  rates  can  be  programmed.  An  option for  fastest  possible  ramp  rate  is  also  provided  to  allow the  converter  to  operate  at  current  limit  for  the  fastest pos  sible slew rate.

## Green Mode Operation

In green mode, the quiescent current of each of the stepdown converters is reduced from 16µA (typ) to 5µA (typ). If  the  output  voltages  are  adjusted  during  green  mode, slew  rate  is  very  slow. Also,  output  current  is  limited  to 5mA.	Green	mode	is	enabled	by	the	EV	kit	GUI	in	the appropriate  converter's  control  register.  Each  converter can be individually selected to enter green mode.

## LDO Regulators

The  IC  provides  six  LDOs  with  adjustable  outputs  with independent  enable  and  disable  control.  In  addition, each  LDO  has  a  special  green  mode  that  reduces  the quiescent  current  to  1.5µA  (typ).  In  green  mode,  each regulator  supports  a  load  of  up  to  10mA.  The  loadregulation performance degrades proportionally with the reduced load current.

## Soft-Start and Dynamic Voltage Change

The LDO regulators have a programmable soft-start rate. When	an	LDO	is	enabled,	the	output	voltage	ramps	to	its final voltage at a slew rate of either 5mV/µs or 100mV/µs, depending	on	the	state	of	the	LDO\_SS	bit.

The 5mV/µs ramp rate limits the input inrush current to approximately	 5mA	 on	 a	 300mA	 regulator	 with	 a	 1µF output capacitor and no load. The 100mV/µs ramp rate results	 in	 a	 100mA	 inrush	 current	 with	 a	 1µF	 output capacitor  and  no  load,  but  achieves  regulation  within 50µs. The soft-start ramp rate is also the rate of change at  the  output  when  switching  dynamically  between  two output voltages without disabling.

## Overvoltage Clamp

Each  LDO  has  an  overvoltage  clamp  that  allows  it  to sink current when the output voltage is above its target voltage.  This  overvoltage  clamp  is  default  enabled,  but can	 be	 disabled	 through	 the	 EV	 kit	 GUI.	 Refer	 to	 the MAX8967 IC data sheet for scenarios that pertain to the overvoltage clamp safety feature.

Figure 1. MAX8967 EV Kit Schematic

<!-- image -->

Figure 2. MAX8967 EV Kit Component Placement Guide-Component Side

<!-- image -->

Figure 3. MAX8967 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX8967 EV Kit PCB Layout-Inner Layer 2

<!-- image -->

Figure 5. MAX8967 EV Kit PCB Layout-Inner Layer 3

<!-- image -->

Evaluates: MAX8967

Figure 6. MAX8967 EV Kit PCB Layout-Solder Side

<!-- image -->

Figure 7. MAX8967 EV Kit Component Placement Guide-Solder Side

<!-- image -->

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX8967EVKIT# | EV Kit |

# Denotes RoHS compliant.

## MAX8967 Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/12           | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.

│

Evaluates: MAX8967