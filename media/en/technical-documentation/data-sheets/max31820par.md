<!-- lastmod 2022-08-03 -->
## MAX31820PAR

## General Description

The  MAX31820PAR  ambient  temperature  sensor  provides 9-bit  to  12-bit  Celsius  temperature  measurements with ±0.5°C accuracy over a +10°C to +45°C temperature range. Over its entire -55°C to +125°C operating range, the device has ±2.0°C accuracy.

The  device  communicates  over  a  1-Wire ®   bus  that,  by definition,  requires  only  one  data  line  (and  ground)  for communication  with  a  central  microprocessor.  In  addition, the device derives power directly from the data line ('parasite  power'),  eliminating  the  need  for  an  external power supply. Requiring so few pins enables the device to be placed in a 3-pin TO-92 package. The form factor of  this  package  allows  the  device  to  be  placed  above the board and thus measure the ambient temperature of a  system,  as  opposed  to  the  board  temperature  that  a surface-mount package would measure.

Each MAX31820PAR has a unique 64-bit serial code, which allows  multiple  MAX31820PAR  devices  to  function  on  the same 1-Wire bus. Therefore, it is simple to use one microprocessor to control many devices distributed over a large area.

## Applications

- HVAC	Environmental	Controls
- Temperature	Monitoring	Systems	Inside	Buildings, Equipment, or Machinery
- Process	Monitoring	and	Control	Systems
- Thermostatic	Controls
- Industrial	Systems
- Consumer	Products
- Thermometers
- Any	Thermally	Sensitive	System

## Block Diagram

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

## Benefits and Features

- Unique	1-Wire	Interface	Requires	Only	One	Port	Pin for Communication
- Derives	Power	from	Data	Line	(Parasite	Power);	No Local	Power	Supply	Needed
- Multidrop	Capability	Simplifies	Distributed Temperature-Sensing	Applications
- Requires	No	External	Components
- Measures	Temperatures	from	-55°C	to	+125°C	(-67°F to	+257°F)
- ±0.5°C	Accuracy	from	+10°C	to	+45°C
- Thermometer	Resolution	is	User-Selectable	from 9	Bits	to	12	Bits
- Converts	Temperature	to	12-Bit	Digital	Word	in 750ms	(Max)
- User-Definable	Nonvolatile	(NV)	Alarm	Settings
- Alarm	Search	Command	Identifies	and	Addresses Devices	Whose	Temperature	is	Outside	Programmed Limits	(Temperature	Alarm	Condition)
- Available	in	3-Pin	TO-92	Package
- Software	Compatible	with	the	DS1822-PAR	and DS18B20-PAR

Ordering Information appears at end of data sheet.

For related parts and recommended products to use with this part, refer to www.maximintegrated.com/MAX31820PAR.related .

<!-- image -->

1-Wire is a registered trademark of Maxim Integrated Products, Inc.

<!-- image -->

## MAX31820PAR

## Absolute Maximum Ratings

Voltage	Range	on	Any	Pin	Relative	to	Ground .... -0.5V	to	+6.0V

Operating Temperature Range  ......................... -55°C to +100°C

Storage	Temperature	Range

............................ -55°C to +125°C

Soldering	Temperature	(reflow)

....................................... +260°C

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## DC Electrical Characteristics

(V PU 	=	3.0V	to	3.7V,	T A =	-55°C	to	+100°C,	unless	otherwise	noted.)	(Note	1)

| PARAMETER             | SYMBOL   | CONDITIONS            |   MIN | TYP   | MAX   | UNITS   |
|-----------------------|----------|-----------------------|-------|-------|-------|---------|
| Pullup Supply Voltage | V PU     | (Notes 2, 3)          |   3.0 |       | 3.7   | V       |
| Thermometer Error     | T ERR    | +10°C to +45°C        |       |       | ± 0.5 | °C      |
| Thermometer Error     | T ERR    | -55°C to +100°C       |       |       | ± 2   | °C      |
| Input Logic-Low       | V IL     | (Notes 2, 4, 5)       |  -0.3 |       | +0.8  | V       |
| Input Logic-High      | V IH     | (Notes 2, 6)          |   3.0 |       | 3.7   | V       |
| Sink Current          | I L      | V I/O = 0.4V (Note 2) |   4.0 |       |       | mA      |
| Active Current        | I DQA    | (Note 7)              |       | 1     | 1.5   | mA      |
| DQ Input Current      | I DQ     | (Note 8)              |       | 5     |       | µA      |
| Drift                 |          | (Note 9)              |       | ± 0.2 |       | °C      |

│

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

## MAX31820PAR

## AC Electrical Characteristics

(V PU 	=	3.0V	to	3.7V,	T A =	-55°C	to	+100°C,	unless	otherwise	noted.)	(Note	1)

| PARAMETER                    | SYMBOL             | CONDITIONS                                                | MIN                | TYP                | MAX                | UNITS              |
|------------------------------|--------------------|-----------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|
|                              | t                  | 9-bit resolution                                          |                    |                    | 93.75              | ms                 |
| Temperature Conversion Time  |                    | 10-bit resolution                                         |                    |                    | 187.5              | ms                 |
| Temperature Conversion Time  | CONV               | 11-bit resolution                                         |                    |                    | 375                | ms                 |
| Temperature Conversion Time  |                    | 12-bit resolution                                         |                    |                    | 750                | ms                 |
| Time to Strong Pullup On     | t SPON             | Start Convert T command or Copy Scratchpad command issued |                    |                    | 10                 | µs                 |
| Time Slot                    | t SLOT             | (Note 10)                                                 | 60                 |                    | 120                | µs                 |
| Recovery Time                | t REC              | (Note 10)                                                 | 1                  |                    |                    | µs                 |
| Write-Zero Low Time          | t LOW0             | (Note 10)                                                 | 60                 |                    | 120                | µs                 |
| Write-One Low Time           | t LOW1             | (Note 10)                                                 | 1                  |                    | 15                 | µs                 |
| Read Data Valid              | t RDV              | (Note 10)                                                 |                    |                    | 15                 | µs                 |
| Reset Time High              | t RSTH             | (Note 10)                                                 | 480                |                    |                    | µs                 |
| Reset Time Low               | t RSTL             | (Notes 10, 11)                                            | 480                |                    | 960                | µs                 |
| Presence-Detect High         | t PDHIGH           | (Note 10)                                                 | 15                 |                    | 60                 | µs                 |
| Presence-Detect Low          | t PDLOW            | (Note 10)                                                 | 60                 |                    | 240                | µs                 |
| Capacitance                  | C IN/OUT           |                                                           |                    |                    | 25                 | pF                 |
| NONVOLATILE MEMORY           | NONVOLATILE MEMORY | NONVOLATILE MEMORY                                        | NONVOLATILE MEMORY | NONVOLATILE MEMORY | NONVOLATILE MEMORY | NONVOLATILE MEMORY |
| Nonvolatile Write Cycle Time | t WR               |                                                           |                    | 2                  | 10                 | ms                 |
| EEPROM Writes                | N EEWR             | -55°C to +55°C                                            | 50k                |                    |                    | Writes             |
| EEPROM Data Retention        | t EEDR             | -55°C to +55°C                                            | 10                 |                    |                    | Years              |

Note 1: Limits	are	100%	tested	at	T A  = +25°C and T A =	+85°C.	Limits	over	the	operating	temperature	range	and	relevant	supply voltage are guaranteed by design and characterization.

Note 2: All voltages are referenced to ground.

Note 3: The pullup supply voltage specification assumes that the pullup device (resistor or transistor) is ideal, and therefore the high	level	of	the	pullup	is	equal	to	V PU .	In	order	to	meet	the	device's	V IH spec, the actual supply rail for the strong pullup transistor	must	include	margin	for	the	voltage	drop	across	the	transistor	when	it	is	turned	on;	thus:	V PU\_ACTUAL 	=	V PU\_ .

IDEAL 	+	V TRANSISTOR

Note 4: Logic-low	voltages	are	specified	at	a	sink	current	of	4mA.

Note 5: To	guarantee	a	presence	pulse	under	low-voltage	parasite-power	conditions,	V ILMAX may have to be reduced to as low as 0.5V.

Note 6: Logic-high	voltages	are	specified	at	a	source	current	of	1mA.

Note 7: Active current refers to supply current during active temperature conversions or EEPROM writes.

Note 8: DQ	line	is	high	(high-Z	state).

Note 9: Drift	data	is	based	on	a	1000-hour	stress	test	at	+125°C.

Note 10: See	the 1-Wire Timing Diagrams .

Note 11: If t RSTL &gt; 960µs, a power-on reset may occur.

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

## MAX31820PAR

## 1-Wire Timing Diagrams

<!-- image -->

│

## 1-Wire, Parasite-Power, Ambient T emperature Sensor

## MAX31820PAR

## Pin Configuration

<!-- image -->

## Pin Description

|   PIN | NAME   | FUNCTION                                                                                                                                                 |
|-------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
|     1 | GND    | Ground                                                                                                                                                   |
|     2 | DQ     | Data Input/Output. Open-drain, 1-Wire interface pin that provides power to the device when used in parasite power mode (see the Parasite Power section). |
|     3 | N.C.   | Not Connected. Does not connect to internal circuit.                                                                                                     |

## Detailed Description

The MAX31820PAR ambient temperature sensor provides  9-bit  to  12-bit  Celsius  temperature  measurements with ±0.5°C accuracy over a +10°C to +45°C temperature range. Over its entire -55°C to +125°C operating range, the device has ±2.0°C accuracy. The device communicates over a 1-Wire bus that, by definition, requires only one data line (and ground) for communication with a central microprocessor. In addition, the device derives power  directly  from  the  data  line  ('parasite  power'), eliminating  the  need  for  an  external  power  supply. Requiring  so  few  pins  enables  the  device  to  be  placed in a 3-pin TO-92 package. The form factor of this package allows the device to be placed above the board and thus  measure the ambient temperature of a system, as opposed to the board temperature that a surface-mount package would measure.

Each  device  has  a  unique  64-bit  serial  code,  allowing multiple MAX31820PAR devices to function on the same 1-Wire  bus.  Therefore,  it  is  simple  to  use  one  microprocessor  to  control  many  devices  distributed  over  a large  area.  The  64-bit  ROM  stores  the  device's  unique serial code. The scratchpad memory contains the 2-byte temperature  register  that  stores  the  digital  output  from the temperature sensor. In addition, the scratchpad provides access to the 1-byte upper and lower alarm trigger registers (T H and T L ) and the 1-byte configuration register. The configuration register allows the user to set the resolution  of  the  temperature-to-digital  conversion  to  9, 10, 11, or 12 bits. The T H , T L , and configuration registers are nonvolatile (EEPROM), so they retain data when the device is powered down.

The  device  uses  Maxim  Integrated's  exclusive  1-Wire bus  protocol  that  implements  bus  communication  using one control signal. The control line requires a weak pullup resistor since all devices are linked to the bus through a three-state or open-drain port (i.e., the MAX31820PAR's DQ	 pin).	 In	 this	 bus	 system,	 the	 microprocessor	 (the master device) identifies  and  addresses  devices  on  the bus	 using	 each	 device's	 unique	 64-bit	 code.	 Because each device has a unique code, the number of devices that can be addressed on one bus is virtually unlimited. The 1-Wire bus protocol, including detailed explanations of the commands and time slots, is covered in the 1-Wire Bus System section.

The device can also operate without an external power supply.  Power  is  instead  supplied  through  the  1-Wire pullup	resistor	through	the	DQ	pin	when	the	bus	is	high. The  high  bus  signal  also  charges  an  internal  capacitor (C PP ), which then supplies power to the device when the bus is low. This method of deriving power from the 1-Wire bus is referred to as 'parasite power.'

│

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

## MAX31820PAR

## Operation

## Measuring Ambient Temperature

A  conventional  surface-mount  temperature  sensor  IC has an excellent thermal connection to the circuit board on	 which	 it	 is	 mounted.	 Heat	 travels	 from	 the	 board through the leads to the sensor die. Air temperature can affect  the  die  temperature,  but  the  sensor's  package does not  conduct  heat  as  well  as  the  leads,  so  board temperature has the greatest influence on the measured temperature.

The device's TO-92 package allows the sensor die to be positioned above the board. The leads still conduct some heat from the board, but because there is significant lead area in contact with air, their temperature is also strongly affected	by	air	temperature.	Follow	the	guidelines	below	to get	the	best	results	when	measuring	ambient	temperature:

- If  air  is  moving  (e.g.,  due  to  cooling  fans),  place  the sensor in the path of the air stream. This causes the ambient temperature to influence the sensor temperature more strongly.
- If the board contains components that will heat it, mount the sensor as far as possible from those components. This makes the temperature in the vicinity of the sensor closer to the temperature of the ambient air.
- PCB	 traces	 and	 ground	 planes	 conduct	 heat	 from

## Temperature Register Format

|     | BIT 15   | BIT 14   | BIT 13   | BIT 12   | BIT 11   | BIT 10   | BIT 9   | BIT 8   |
|-----|----------|----------|----------|----------|----------|----------|---------|---------|
| MSB | S        | S        | S        | S        | S        | 2 6      | 2 5     | 2 4     |
|     | BIT 7    | BIT 6    | BIT 5    | BIT 4    | BIT 3    | BIT 2    | BIT 1   | BIT 0   |
| LSB | 2 3      | 2 2      | 2 1      | 2 0      | 2 -1     | 2 -2     | 2 -3    | 2 -4    |

Table 1. Temperature/Data Relationship

| TEMPERATURE (°C)   | DIGITAL OUTPUT (BINARY)   | DIGITAL OUTPUT (HEX)   |
|--------------------|---------------------------|------------------------|
| +85*               | 0000 0101 0101 0000       | 0550h                  |
| +25.0625           | 0000 0001 1001 0001       | 0191h                  |
| +10.125            | 0000 0000 1010 0010       | 00A2h                  |
| +0.5               | 0000 0000 0000 1000       | 0008h                  |
| 0                  | 0000 0000 0000 0000       | 0000h                  |
| -0.5               | 1111 1111 1111 1000       | FFF8h                  |
| -10.125            | 1111 1111 0101 1110       | FF5Eh                  |
| -25.0625           | 1111 1110 0110 1111       | FE6Fh                  |
| -55                | 1111 1100 1001 0000       | FC90h                  |

*The power-on-reset value of the temperature register is +85°C.

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

other components to the sensor. As much as practical, avoid copper in the vicinity of the sensor.

The device's core functionality is its direct-to-digital temperature sensor. The resolution of the temperature sensor is user-configurable to 9, 10, 11, or 12 bits, corresponding to increments of 0.5°C, 0.25°C, 0.125°C, and 0.0625°C, respectively. The default resolution at power-up is 12 bits. The device powers up in a low-power idle state. To initiate a	temperature	measurement	and	A-to-D	conversion,	the master	must	issue	a	Convert	T	[44h]	command.	Following the conversion, the resulting thermal data is stored in the 2-byte  temperature  register  in  the  scratchpad  memory and the device returns to its idle state.

The  output  temperature  data  is  calibrated  in  degrees Celsius;	 for	 Fahrenheit	 applications,	 a	 lookup	 table	 or conversion routine must be used. The temperature data is  stored  as  a  16-bit  sign-extended  two's  complement number in the temperature register (see the Temperature Register Format ).	The	sign	bits	(S)	indicate	if	the	tempera -ture	is	positive	or	negative:	for	positive	numbers	S	=	0	and for	 negative	 numbers	 S	 =	 1.	 If	 the	 device	 is	 configured for  12-bit  resolution,  all  bits  in  the  temperature  register contain	valid	data.	For	11-bit	resolution,	bit	0	is	undefined. For	10-bit	resolution,	bits	1	and	0	are	undefined,	and	for 9-bit  resolution  bits  2,  1,  and  0  are  undefined.  Table  1 gives examples of digital output data and the corresponding temperature reading for 12-bit resolution conversions.

## MAX31820PAR

## Alarm Signaling

After the device performs a temperature conversion, the temperature value is compared to the user-defined two's complement alarm trigger values stored in the 1-byte T H and T L registers  (see T H and  T L Register  Format ).  The sign	bit	(S) indicates	if	the	value	is	positive	or	negative; for	positive	numbers	S	=	0	and	for	negative	numbers	S = 1. The T H and T L registers are nonvolatile (EEPROM) so  they  retain  data  when  the  device  is  powered  down. T H and T L can be accessed through bytes 2 and 3 of the scratchpad, as explained in the Memory section.

Only	bits	11:4	of	the	temperature	register	are	used	in	the T H and T L comparison since T H and T L are 8-bit registers. If the measured temperature is lower than or equal to T L or higher than or equal to T H ,  an  alarm condition exists and  an  alarm  flag  is  set  inside  the  device.  This  flag  is updated	after	every	temperature	measurement;	therefore, if the alarm condition goes away, the flag is turned off after the next temperature conversion.

The master device can check the alarm flag status of all MAX31820PAR devices on the bus by issuing an Alarm Search	[ECh]	command.	Any	devices	with	a	set	alarm	flag respond to the command, so the master can determine exactly which devices have experienced an alarm condition. If an alarm condition exists and the T H or T L settings have changed, another temperature conversion should be done to validate the alarm condition.

## TH and T L Register Format

Figure 1. Supplying the Parasite-Powered MAX31820PAR During Temperature Conversions

| BIT 7   | BIT 6   | BIT 5   | BIT 4   | BIT 3   | BIT 2   | BIT 1   | BIT 0   |
|---------|---------|---------|---------|---------|---------|---------|---------|
| S       | 2 6     | 2 5     | 2 4     | 2 3     | 2 2     | 2 1     | 2 0     |

<!-- image -->

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

## Parasite Power

The  device's  parasite-power  circuit  allows  it  to  operate without  a  local  power  supply.  Parasite  power  is  very useful  for  applications  that  require  remote  temperature sensing,  or  those  that  are  very  space  constrained. Figure	 1 shows  the  device's  parasite-power  control circuitry,  which  'steals'  power  from  the  1-Wire  bus through	 the	 DQ	 pin	 when	 the	 bus	 is	 high.	 The	 stolen charge  powers  the  device  while  the  bus  is  high,  and some  of  the  charge  is  stored  on  the  parasite-power capacitor (C PP ) to provide power when the bus is low.

In  parasite-power  mode,  the  1-Wire  bus  and  C PP   can provide  sufficient  current  to  the  device  for  most  operations as long as the specified timing and voltage requirements are met (see the DC Electrical Characteristics and AC Electrical Characteristics tables).	However,	when	the device  is  performing  temperature  conversions  or  copying data from the scratchpad memory to EEPROM, the operating current can be as high as 1.5mA. This current can cause an unacceptable voltage drop across the weak 1-Wire pullup  resistor  and  is  more  current  than  can  be supplied by C PP . To ensure that the device has sufficient supply current, it is necessary to provide a strong pullup on  the  1-Wire  bus  whenever  temperature  conversions are taking place, or data is being copied from the scratchpad to EEPROM. This can be accomplished by using a MOSFET	to	 pull	 the	 bus	 directly	 to	 the	 rail,	 as	 shown

│

## MAX31820PAR

in Figure	 1 .  The  1-Wire  bus  must  be  switched  to  the strong pullup within 10µs (max) after a Convert T [44h] or Copy	Scratchpad	[48h]	command	is	issued,	and	the	bus must be held high by the pullup for the duration of the conversion  (t CONV )  or  data  transfer  (t WR =	 10ms).	 No other activity can take place on the 1-Wire bus while the pullup is enabled.

## 64-Bit Lasered ROM Code

Each  device  contains  a  unique  64-bit  code  stored  in ROM ( Figure	2 ). The least significant 8 bits of the ROM code contain the device's 1-Wire family code, 28h. The next  48  bits  contain  a  unique  serial  number.  The  most significant 8 bits contain a cyclic-redundancy-check (CRC) byte that is calculated from the first 56 bits of the ROM code. A detailed explanation of the CRC bits is provided in the CRC Generation section. The 64-bit ROM code and associated ROM function control logic allow the device to operate as a 1-Wire device using the protocol detailed in the 1-Wire Bus System section.

## Memory

The device's memory is organized as shown in Figure	3.	The	memory	consists	of	an	SRAM	scratchpad	with nonvolatile EEPROM storage for the high and low alarm trigger  registers  (T H and  T L )  and  configuration  register. Note	that	if	the	device	alarm	function	is	not	used,	the	T H and T L registers  can  serve  as  general-purpose  memory. All  memory  commands  are  described  in  detail  in  the MAX31820PAR Function Commands section.

Byte	0	and	byte	1	of	the	scratchpad	contain	the	LSB	and the	 MSB	of	the	temperature	register,	respectively.	These bytes	are	read-only.	Bytes	2	and	3	provide	access	to	T H and T L 	 registers.	Byte	4	contains	the	configuration	regis -ter  data,  which  is  explained  in  detail  in  the Configuration Register section.	Bytes	7:5	are	reserved	for	internal	use	by the	device	and	cannot	be	overwritten.	Byte	8	of	the	scratch -pad	is	read-only	and	contains	the	CRC	code	for	bytes	7:0 of  the  scratchpad. The device generates this CRC using the method described in the CRC Generation section.

Figure 2. 64-Bit Lasered ROM Code

<!-- image -->

Figure 3. Memory Map

<!-- image -->

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

│

## MAX31820PAR

Data	is	written	to	bytes	4:2	of	the	scratchpad	using	the Write	 Scratchpad	 [4Eh]	 command;	 the	 data	 must	 be transmitted to the device starting with the least significant bit of byte 2. To verify data integrity, the scratchpad can be	 read	 (using	 the	 Read	 Scratchpad	 [BEh]	 command) after  the  data  is  written.  When  reading  the  scratchpad, data is transferred over the 1-Wire bus starting with the least significant bit of byte 0. To transfer the T H , T L , and configuration data from the scratchpad to EEPROM, the master	must	issue	the	Copy	Scratchpad	[48h]	command.

Data	 in	 the	 EEPROM	 registers	 is	 retained	 when	 the device	is	powered	down;	at	power-up	the	EEPROM	data is reloaded into the corresponding scratchpad locations. Data	can	also	be	reloaded	from	EEPROM	to	the	scratch -pad at any time using the Recall E 2 [B8h]	command.	The

## Configuration Register Format

|   BIT 7 | BIT 6   | BIT 5   |   BIT 4 |   BIT 3 |   BIT 2 |   BIT 1 |   BIT 0 |
|---------|---------|---------|---------|---------|---------|---------|---------|
|       0 | R1      | R0      |       1 |       1 |       1 |       1 |       1 |

## Table 2. Thermometer Resolution Configuration

|   R1 |   R0 |   RESOLUTION (BITS) | MAX CONVERSION TIME   | MAX CONVERSION TIME   |
|------|------|---------------------|-----------------------|-----------------------|
|    0 |    0 |                   9 | 93.75ms               | (t CONV /8)           |
|    0 |    1 |                  10 | 187.5ms               | (t CONV /4)           |
|    1 |    0 |                  11 | 375ms                 | (t CONV /2)           |
|    1 |    1 |                  12 | 750ms                 | (t CONV )             |

│

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

master  can  issue  read  time  slots  following  the  Recall E 2   command, and the device indicates the status of the recall by transmitting 0 while the recall is in progress and 1 when the recall is done.

## Configuration Register

Byte	4	of	the	scratchpad	memory	contains	the	configura -tion register, which is organized as shown in Configuration Register Format . The user can set the conversion resolution of the device using the R0 and R1 bits in this register, as shown in Table 2. The power-up default of these bits is R0	=	1	and	R1	=	1	(12-bit	resolution).	Note	that	there	is a direct trade-off between resolution and conversion time. Bit	7	and	bits	4:0	in	the	configuration	register	are	reserved for internal use by the device and cannot be overwritten.

## MAX31820PAR

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

Figure 4. CRC Generator

<!-- image -->

## CRC Generation

CRC  bytes  are  provided  as  part  of  the  device's  64-bit ROM code and in the 9th byte of the scratchpad memory. The ROM code CRC is calculated from the first 56 bits of the ROM code and is contained in the most significant byte of the ROM. The scratchpad CRC is calculated from the data stored in the scratchpad, and therefore changes when  the  data  in  the  scratchpad  changes.  The  CRCs provide the bus master with a method of data validation when data is read from the device. To verify that data has been read correctly, the bus master must recalculate the CRC from the received data and then compare this value to either the ROM code CRC (for ROM reads) or to the scratchpad CRC (for scratchpad reads). If the calculated CRC matches the read CRC, the data has been received error  free.  The  comparison  of  CRC  values  and  the decision  to  continue  with  an  operation  are  determined entirely  by  the  bus  master.  There  is  no  circuitry  inside the device that prevents a command sequence from proceeding if the device CRC (ROM or scratchpad) does not match the value generated by the bus master.

iButton is a registered trademark of Maxim Integrated Products, Inc.

The equivalent polynomial function of the CRC (ROM or scratchpad)	is:

<!-- formula-not-decoded -->

The bus master can recalculate the CRC and compare it  to  the  CRC values from the MAX31820PAR using the polynomial  generator  shown  in Figure	 4 .  This  circuit consists of a shift register and XOR gates, and the shift register	 bits	 are	 initialized	 to	 0.	 Starting	 with	 the	 least significant bit of the ROM code or the least significant bit of byte 0 in the scratchpad, one bit at a time should be shifted into the shift register. After shifting in the 56th bit from	the	ROM	or	the	most	significant	bit	of	byte	7	from the  scratchpad,  the  polynomial  generator  contains  the recalculated	CRC.	Next,	the	8-bit	ROM	code	or	scratch -pad CRC from the device must be shifted into the circuit. At this point, if the recalculated CRC was correct, the shift register contains all 0s. Additional information about the Maxim Integrated 1-Wire CRC is available in Application Note	 27: Understanding  and  Using  Cyclic  Redundancy Checks with Maxim iButton® Products .

│

## MAX31820PAR

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

Figure 5. Hardware Configuration

<!-- image -->

## 1-Wire Bus System

The 1-Wire bus system uses a single bus master to control  one  or  more  slave  devices.  The  MAX31820PAR  is always a slave. When there is only one slave on the bus, the	system	is	referred	to	as	a	single-drop	system;	the	sys -tem is multidrop if there are multiple slaves on the bus. All data and commands are transmitted least significant bit first over the 1-Wire bus.

The  following  discussion  of  the  1-Wire  bus  system  is broken	 down	 into	 three	 topics:	 hardware	 configuration, transaction sequence, and 1-Wire signaling (signal types and timing).

## Hardware Configuration

The 1-Wire bus has, by definition, only a single data line. Each device (master or slave) interfaces to the data line through  an  open-drain  or  three-state  port.  This  allows each device to release the data line when the device is not  transmitting  data  so  the  bus  is  available  for  use  by another  device.  The  1-Wire  port  of  the  MAX31820PAR (the	DQ	pin)	is	open	drain	with	an	internal	circuit	equiva -lent to that shown in Figure	5 .

The  1-Wire  bus  requires an external pullup resistor	 of	 approximately	 5kΩ;	 thus,	 the	 idle	 state	 for	 the 1-Wire bus is high. If for any reason a transaction needs to be suspended, the bus must be left in the idle state if the  transaction  is  to  resume.  Infinite  recovery  time  can occur  between  bits  so  long  as  the  1-Wire  bus  is  in  the inactive (high) state during the recovery period. If the bus is  held low for more than 480µs, all components on the bus will be reset. Additionally, to ensure that the device has sufficient supply current during temperature conversions, it is necessary to provide a strong pullup (such as a	 MOSFET)	 on	 the	 1-Wire	 bus	 whenever	 temperature conversions  or  EEPROM  writes  are  taking  place  (as described in the Parasite Power section.

## Transaction Sequence

The transaction sequence for accessing the device is as follows:

- 1)  Step	1:	Initialization
- 2)  Step	2:	ROM	command	(followed	by	any	required	data exchange)
- 3)  Step	3:	MAX31820PAR	Function	command	(followed by any required data exchange)

It  is  very  important  to  follow  this  sequence  every  time the device is accessed, as the device does not respond if any steps in the sequence are missing or out of order. Exceptions	 to	 this	 rule	 are	 the	 Search	 ROM	 [F0h]	 and Alarm	 Search	 [ECh]	 commands.	 After	 issuing	 either	 of these	ROM	commands,	the	master	must	return	to	Step	1 in the sequence.

## Initialization

All transactions on the 1-Wire bus begin with an initialization  sequence. The initialization  sequence  consists  of  a reset  pulse  transmitted  by  the  bus  master,  followed  by presence pulse(s) transmitted by the slave(s). The presence pulse lets the bus master know that slave devices (such  as  the  MAX31820PAR)  are  on  the  bus  and  are ready  to  operate.  Timing  for  the  reset  and  presence pulses is detailed in the 1-Wire Signaling section.

│

## MAX31820PAR

## ROM Commands

After  the  bus  master  has  detected  a  presence  pulse,  it can issue a ROM command. These commands operate on  the  unique  64-bit  ROM  codes  of  each  slave  device and  allow  the  master  to  single  out  a  specific  device  if many are present on the 1-Wire bus. These commands also allow the master to determine how many and what types of devices are present on the bus or if any device has experienced an alarm condition. There are five ROM commands, and each command is 8 bits long. The master device must issue an appropriate ROM command before issuing	 a	 MAX31820PAR	 Function	 command.	 Figure	 6 shows a flowchart for operation of the ROM commands.

## Search ROM [F0h]

When a system is initially powered up, the master must identify the ROM codes of all slave devices on the bus, which  allows  the  master  to  determine  the  number  of slaves and their device types. The master learns the ROM codes through a process of elimination that requires the master	to	perform	a	Search	ROM	cycle	(i.e.,	Search	ROM command followed by data exchange) as many times as necessary to identify all the slave devices. If there is only one slave on the bus, the simpler Read ROM command can	be	used	in	place	of	the	Search	ROM	process.	For	a detailed	explanation	of	the	Search	ROM	procedure,	refer to Application	Note	937: Book of iButton Standards . After every	Search	ROM	cycle,	the	bus	master	must	return	to Step	1	(initialization)	in	the	transaction	sequence.

## Read ROM [33h]

This command can only be used when there is one slave on the bus. It allows the bus master to read the slave's 64-bit	ROM	code	without	using	the	Search	ROM	proce -dure. If  this  command is used when there is more than one  slave  present  on  the  bus,  a  data  collision  occurs when all the slaves attempt to respond at the same time.

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

## Match ROM [55h]

The  match  ROM  command,  followed  by  a  64-bit  ROM code  sequence,  allows  the  bus  master  to  address  a specific  slave  device  on  a  multidrop  or  single-drop  bus. Only the slave that exactly matches the 64-bit ROM code sequence responds to the function command issued by the	 master;	 all	 other	 slaves	 on	 the	 bus	 wait	 for	 a	 reset pulse.

## Skip ROM [CCh]

The master can use this command to address all devices on the bus simultaneously, without sending out any ROM code	information.	For	example,	the	master	can	make	all devices  on  the  bus  perform  simultaneous  temperature conversions	by	issuing	a	Skip	ROM	command	followed by a Convert T [44h] command.

Note	 that	 the	 Read	 Scratchpad	 [BEh]	 command	 can follow	 the	 Skip	 ROM	 command	only	if	 there	 is	 a	 single slave  device  on  the  bus.  In  this  case,  time  is  saved  by allowing the master to read from the slave without sending	the	device's	64-bit	ROM	code.	A	Skip	ROM	command followed	by	a	Read	Scratchpad	command	causes	a	data collision on the bus if there is more than one slave since multiple devices attempt to transmit data simultaneously.

## Alarm Search [ECh]

The operation of this command is identical to the operation	of	the	Search	ROM	command	except	that	only	slaves with  a  set  alarm  flag  respond.  This  command  allows the  master  device  to  determine  if  any  MAX31820PARs experienced  an  alarm  condition  during  the  most  recent temperature	conversion.	After	every	Alarm	Search	cycle (i.e.,	Alarm	Search	command	followed	by	data	exchange), the	bus	master	must	return	to	Step	1	(initialization)	in	the transaction	 sequence.	 See	 the Alarm  Signaling section for an explanation of alarm flag operation.

## MAX31820PAR

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

Figure 6. ROM Commands Flowchart

<!-- image -->

## MAX31820PAR

## MAX31820PAR Function Commands

After  the  bus  master  has  used  a  ROM  command  to address  the  device  with  which  it  wishes  to  communicate,  the  master  can  issue  one  of  the  device  function commands. These commands allow the master to write to  and  read  from  the  device's  scratchpad  memory, initiate  temperature  conversions,  and  determine  the power-supply  mode.  Table  3  summarizes  the  device function commands, and Figure	7 illustrates the function commands.

## Convert T [44h]

This command initiates a single temperature conversion. Following	 the	 conversion,	 the	 resulting	 thermal	 data	 is stored in the 2-byte temperature register in the scratchpad memory and the device returns to its low-power idle state. Within 10µs (max) after this command is issued, the master must enable a strong pullup on the 1-Wire bus for the  duration  of  the  conversion  (t CONV ),  as  described  in the Parasite Power section.

## Write Scratchpad [4Eh]

This command allows the master to write 3 bytes of data to the device's scratchpad. The first data byte is written into the T H register (byte 2 of the scratchpad), the second byte is written into the T L register (byte 3), and the third byte	is	written	into	the	configuration	register	(byte	4).	Data must  be  transmitted  least  significant  bit  first.  All  three

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

bytes must be written before the master issues a reset, or the data may be corrupted.

## Read Scratchpad [BEh]

This  command  allows  the  master  to  read  the  contents of the scratchpad. The data transfer starts with the least significant bit of byte 0 and continues through the scratchpad until the 9th byte (byte 8 - CRC) is read. The master can issue a reset to terminate reading at any time if only part of the scratchpad data is needed.

## Copy Scratchpad [48h]

This  command  copies  the  contents  of  the  scratchpad T H ,  T L and  configuration  registers  (bytes  2,  3,  and  4) to  EEPROM.  Within  10µs  (max)  after  this  command  is issued,  the  master  must  enable  a  strong  pullup  on  the 1-Wire bus for at least 10ms as described in the Parasite Power section.

## Recall E 2 [B8h]

This command recalls the alarm trigger values (T H and T L ) and configuration data from EEPROM and places the data in bytes 2, 3, and 4, respectively, in the scratchpad memory. The master device can issue read time slots following the Recall E 2  command and the device indicates the status of the recall by transmitting 0 while the recall is  in  progress and 1 when the recall is done. The recall operation  happens  automatically  at  power-up,  so  valid data is available in the scratchpad as soon as power is applied to the device.

## Table 3. MAX31820PAR Function Command Set

| COMMAND                   | DESCRIPTION                                                                        | PROTOCOL   | 1-Wire BUS ACTIVITY AFTER COMMAND IS ISSUED        |
|---------------------------|------------------------------------------------------------------------------------|------------|----------------------------------------------------|
| Convert T (Note 1)        | Initiates temperature conversion.                                                  | 44h        | None.                                              |
| Read Scratchpad (Note 2)  | Reads the entire scratchpad including the CRC byte.                                | BEh        | The device transmits up to 9 data bytes to master. |
| Write Scratchpad (Note 3) | Writes to scratchpad bytes 2, 3, and 4 (T H , T L , and configuration registers).  | 4Eh        | The master transmits 3 data bytes to the device.   |
| Copy Scratchpad (Note 1)  | Copies T H , T L , and configuration register data from the scratchpad to EEPROM.  | 48h        | None.                                              |
| Recall E 2                | Recalls T H , T L , and configuration register data from EEPROM to the scratchpad. | B8h        | The device transmits recall status to the master.  |

Note 1: The master must enable a strong pullup on the 1-Wire bus during temperature conversions and copies from the scratchpad to	EEPROM.	No	other	bus	activity	can	take	place	during	this	time.

Note 2: The master can interrupt the transmission of data at any time by issuing a reset.

Note 3: All 3 bytes must be written before a reset is issued.

│

## MAX31820PAR

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

Figure 7. MAX31820PAR Function Commands Flowchart

<!-- image -->

## MAX31820PAR

## 1-Wire Signaling

The MAX31820PAR uses a strict 1-Wire communication protocol	to	ensure	data	integrity.	Several	signal	types	are defined	by	this	protocol:	reset	pulse,	presence	pulse,	write 0, write 1, read 0, and read 1. The bus master initiates all these signals, with the exception of the presence pulse.

## Initialization Procedure: Reset and Presence Pulses

All communication with the device begins with an initialization sequence that consists of a reset pulse from the master  followed  by  a  presence  pulse  from  the  device,

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

as  illustrated  in Figure	 8 .  When  the  device  sends  the presence pulse in response to the reset, it is indicating to the master that it is on the bus and ready to operate.

During the initialization sequence,	 the bus master transmits (T X ) the reset pulse by pulling the 1-Wire bus low for a minimum of 480µs. The bus master then releases the bus and goes into receive mode (R X ). When the bus	is	released,	the	5kΩ	pullup	resistor	pulls	the	1-Wire bus  high.  When  the  device  detects  this  rising  edge,  it waits 15µs to 60µs and then transmits a presence pulse by pulling the 1-Wire bus low for 60µs to 240µs.

Figure 8. Initialization Timing

<!-- image -->

│

## MAX31820PAR

## Read/Write Time Slots

The bus master writes data to the device during write time slots  and  reads  data  from  the  device  during  read  time slots. One bit of data is transmitted over the 1-Wire bus per time slot.

## Write Time Slots

There	 are	 two	 types	 of	 write	 time	 slots:	 write-one	 time slots  and  write-zero  time  slots.  The  bus  master  uses  a write-one time slot to write a logic 1 to the device and a write-zero time slot to write a logic 0 to the device. All write time slots must be a minimum of 60µs in duration with a minimum of a 1µs recovery time between individual write

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

slots.	 Both	 types	 of	 write	 time	 slots	 are	 initiated	 by	 the master pulling the 1-Wire bus low ( Figure	9 ).

To generate a write-one time slot, after pulling the 1-Wire bus  low,  the  bus  master  must  release  the  1-Wire  bus within	 15µs.	 When	 the	 bus	 is	 released,	 the	 5kΩ	 pullup resistor pulls the bus high. To generate a write-zero time slot, after pulling the 1-Wire bus low, the bus master must continue to hold the bus low for the duration of the time slot (at least 60µs).

The device samples the 1-Wire bus during a window that lasts from 15µs to 60µs after the master initiates the write time slot. If the bus is high during the sampling window, a 1 is written to the device. If the line is low, a 0 is written to the device.

Figure 9. Read/Write Time Slot Timing Diagram

<!-- image -->

│

## MAX31820PAR

## Read Time Slots

The  device  can  only  transmit  data  to  the  master  when the master issues read time slots. Therefore, the master must  generate  read  time  slots  immediately  after  issuing a	 Read	 Scratchpad	 [BEh]	 command,	 so	 that	 the	 device can  provide  the  requested  data.  In  addition,  the  master can  generate  read  time  slots  after  issuing  a  Recall  E 2 [B8h]	command	to	find	out	the	status	of	the	operation,	as explained in the Parasite Power section.

All read time slots must be a minimum of 60µs in duration with a minimum of a 1µs recovery time between slots. A read time slot is initiated by the master device pulling the 1-Wire bus low for a minimum of 1µs and then releasing the bus ( Figure	9 ). After the master initiates the read time slot, the device begins transmitting a 1 or 0 on the bus.

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

The  device  transmits  a  1  by  leaving  the  bus  high  and transmits a 0 by pulling the bus low. When transmitting a 0, the device releases the bus by the end of the time slot,  and  the  bus  is  pulled  back  to  its  high  idle  state  by the  pullup  resister.  Output  data  from  the  device  is  valid for 15µs after the falling edge that initiated the read time slot. Therefore, the master must release the bus and then sample the bus state within 15µs from the start of the slot.

Figure	 10 illustrates  that  the  sum  of  t INIT ,  t RC,  and t SAMPLE must  be  less  than  15µs  for  a  read  time  slot. Figure	11 shows that system timing margin is maximized by  keeping  t INIT and  t RC   as  short  as  possible  and  by locating  the  master  sample  time  during  read  time  slots towards the end of the 15µs period.

Figure 10. Detailed Master Read-One Timing

<!-- image -->

Figure 11. Recommended Master Read-One Timing

<!-- image -->

│

## MAX31820PAR

## Operation Examples

## Example 1

In Table 4 there are multiple devices on the bus. The bus master  initiates  a  temperature  conversion  in  a  specific MAX31820PAR and then reads its scratchpad and recalculates the CRC to verify the data.

## Table 4. Operation Example 1

| MASTER MODE   | DATA (LSB FIRST)                   | COMMENTS                                                                                                                                                                                                                                                                  |
|---------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tx            | Reset                              | Master issues reset pulse.                                                                                                                                                                                                                                                |
| Rx            | Presence                           | Devices respond with presence pulse.                                                                                                                                                                                                                                      |
| Tx            | 55h                                | Master issues Match ROM command.                                                                                                                                                                                                                                          |
| Tx            | 64-bit ROM code                    | Master sends device ROM code.                                                                                                                                                                                                                                             |
| Tx            | 44h                                | Master issues Convert T command.                                                                                                                                                                                                                                          |
| Tx            | DQ line held high by strong pullup | Master applies strong pullup to DQ for the duration of the conversion (t CONV ).                                                                                                                                                                                          |
| Tx            | Reset                              | Master issues reset pulse.                                                                                                                                                                                                                                                |
| Rx            | Presence                           | Devices respond with presence pulse.                                                                                                                                                                                                                                      |
| Tx            | 55h                                | Master issues Match ROM command.                                                                                                                                                                                                                                          |
| Tx            | 64-bit ROM code                    | Master sends device ROM code.                                                                                                                                                                                                                                             |
| Tx            | BEh                                | Master issues Read Scratchpad command.                                                                                                                                                                                                                                    |
| Rx            | 9 data bytes                       | Master reads entire scratchpad including CRC. The master then recalculates the CRC of the first 8 data bytes from the scratchpad and compares the calculated CRC with the read CRC (byte 9). If they match, the master continues; if not, the read operation is repeated. |

## Table 5. Operation Example 2

| MASTER MODE   | DATA (LSB FIRST)                   | COMMENTS                                                                                                                                                                                                                                                                  |
|---------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Tx            | Reset                              | Master issues reset pulse.                                                                                                                                                                                                                                                |
| Rx            | Presence                           | Device responds with presence pulse.                                                                                                                                                                                                                                      |
| Tx            | CCh                                | Master issues Skip ROM command.                                                                                                                                                                                                                                           |
| Tx            | 4Eh                                | Master issues Write Scratchpad command.                                                                                                                                                                                                                                   |
| Tx            | 3 data bytes                       | Master sends 3 data bytes to the scratchpad (T H , T L , and configuration registers).                                                                                                                                                                                    |
| Tx            | Reset                              | Master issues reset pulse.                                                                                                                                                                                                                                                |
| Rx            | Presence                           | Device responds with presence pulse.                                                                                                                                                                                                                                      |
| Tx            | CCh                                | Master issues Skip ROM command.                                                                                                                                                                                                                                           |
| Tx            | BEh                                | Master issues Read Scratchpad command.                                                                                                                                                                                                                                    |
| Rx            | 9 data bytes                       | Master reads entire scratchpad including CRC. The master then recalculates the CRC of the first 8 data bytes from the scratchpad and compares the calculated CRC with the read CRC (byte 9). If they match, the master continues; if not, the read operation is repeated. |
| Tx            | Reset                              | Master issues reset pulse.                                                                                                                                                                                                                                                |
| Rx            | Presence                           | Device responds with presence pulse.                                                                                                                                                                                                                                      |
| Tx            | CCh                                | Master issues Skip ROM command.                                                                                                                                                                                                                                           |
| Tx            | 48h                                | Master issues Copy Scratchpad command.                                                                                                                                                                                                                                    |
| Tx            | DQ line held high by strong pullup | Master applies strong pullup to DQ for at least 10ms while copy operation is in progress.                                                                                                                                                                                 |

│

## Example 2

In  Table  5  there  is  only  one  device  on  the  bus.  The master writes to the T H ,  T L ,  and  configuration  registers in the device's scratchpad and then reads the scratchpad and recalculates the CRC to verify the data. The master then copies the scratchpad contents to EEPROM.

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

## MAX31820PAR

## Ordering Information

| PART             | TEMP RANGE      | PIN-PACKAGE              |
|------------------|-----------------|--------------------------|
| MAX31820PARMCR+  | -55°C to +125°C | 3 TO-92 (straight leads) |
| MAX31820PARMCR+T | -55°C to +125°C | 3 TO-92 (formed leads)   |

+Denotes a lead(Pb)-free/RoHS-compliant package.

T = Tape and reel.

## Package Information

For	the	latest	package	outline	information	and	land	patterns	(footprints),	go	to www.maximintegrated.com/packages .	Note	that	a	'+', '#',	or	'-'	in	the	package	code	indicates	RoHS	status	only.	Package	drawings	may	show	a	different	suffix	character,	but	the	drawing pertains	to	the	package	regardless	of	RoHS	status.

| PACKAGE TYPE             | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|--------------------------|----------------|---------------|--------------------|
| 3 TO-92 (straight leads) | Q3+1           | 21-0248       | -                  |
| 3 TO-92 (formed leads)   | Q3+4           | 21-0250       | -                  |

## 1-Wire, Parasite-Power, Ambient Temperature Sensor

## MAX31820PAR

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 6/13            | Initial release | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are	implied.	Maxim	Integrated	reserves	the	right	to	change	the	circuitry	and	specifications	without	notice	at	any	time.	The	parametric	values	(min	and	max	limits) shown	in	the	Electrical	Characteristics	table	are	guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

│

## 1-Wire, Parasite-Power, Ambient Temperature Sensor