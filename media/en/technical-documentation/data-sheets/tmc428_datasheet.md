<!-- lastmod 2023-09-13 -->
## TMC428 - DATA SHEET

Intelligent Triple Stepper Motor Controller with Serial Peripheral Interfaces

<!-- image -->

## 1 Features

The TMC428 is a miniaturized high performance stepper motor controller. It controls up to three 2phase stepper motors. All motors can operate independently. The TMC428 allows up to 6 bit micro step resolution - corresponding to 64 micro steps per full step - individually selectable for each motor. Once  initialized,  it  performs  all  real  time  critical  tasks  autonomously  based  on  target  positions  and velocities,  which  can  be  altered  on-the-fly.  So,  an  inexpensive  microcontroller  together  with  the TMC428 forms a complete motion control system. The microcontroller is free to do application specific interfacing and high level control functions. Both, the communication with the microcontroller and with one to three daisy chained stepper motor drivers take place via two separate 4 wire serial peripheral interfaces. The TMC428 directly connects to SPI TM* smart power stepper motor drivers.

- Controls up to three 2-phase stepper motors
- Serial 4-wire interface for µC with easy-to-use protocol
- Configurable interface for SPI TM motor drivers
- Different types of SPI TM stepper motor driver chips may be mixed within a single daisy chain
- Communication on demand minimizes traffic to the SPI TM stepper motor driver chain
- Programmable SPI TM data rates up to 1 Mbit/s
- Wide range for clock frequency - can use CPU clock up to 16 MHz
- Internal 24 bit wide position counters
- Full step frequencies up to 20 kHz
- Read-out facility for actual motion parameters (position, velocity, acceleration) and driver status
- Individual micro step resolution of {64, 32, 16, 8, 4, 2, 1} micro steps via built-in sequencer
- Programmable 6 bit micro step table with up to 64 entries for a quarter sine-wave period
- Built-in ramp generators for autonomous positioning and speed control
- On-the-fly change of target motion parameters (like position, velocity, acceleration)
- Automatic acceleration dependent current control (power boost)
- Low power operation: Only 1.25 mA @ 4 MHz (typ.)
- Power down mode with transparent wake-up for normal operation
- 3.3V or 5V operation with CMOS / TTL compatible IOs (all inputs Schmitt-Trigger)
- Available in ultra small 16 pin SSOP package and small 24 pin SOP package

Table of contents, table of figures, table of tables are located at the end of this datasheet.

* SPI is Trademark of Motorola, Inc.

<!-- image -->

TRINAMIC ® Motion Control GmbH &amp; Co. KG Sternstraße 67 D - 20357 Hamburg GERMANY

www.trinamic.com

## Life support policy

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support  systems,  without  the  specific  written  consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems are equipment intended to support  or  sustain  life,  and  whose  failure  to  perform, when  properly  used  in  accordance  with  instructions provided,  can  be  reasonably  expected  to  result  in personal injury or death.

## © 2004-2010, TRINAMIC Motion Control GmbH &amp; Co. KG

Information  given  in  this  data  sheet  is  believed  to  be accurate and reliable. However no responsibility is assumed  for  the  consequences  of  its  use  nor  for  any infringement  of  patents  or  other  rights  of  third  parties which may result from its use.

Specifications subject to change without notice.

## 2 General Description

The  TMC428  is  a  miniaturized  high  performance  stepper  motor  controller  with  a  unique  price  / performance  ratio  for  both,  high  volume  automotive  and  for  demanding  industrial  motion  control applications. Once initialized, the TMC428 controls up to three 2-phase stepper motors. Its low price makes it attractive also for applications, where only one or two stepper motors have to be controlled simultaneously.

The  TMC428  performs  all  real  time  critical  tasks  autonomously.  Thus  a  low  cost  microcontroller  is sufficient  to  perform  the  tasks  of  initialization,  application  specific  interfacing,  and  to  specify  target positions  and  velocities.  The  TMC428 allows  on-the-fly  change  of  all  motion  target  parameters  also during motion. Any other parameter may be changed at any time- also during motion -which does not make  sense  in  any  case,  but  this  uniform  access  to  any  TMC428  register  simplifies  application programming.  Read-back  option  for  all  internal  registers  simplifies  programming.  With  its  internal position counters, the TMC428 can perform up to 2 23 steps respectively micro steps fully independent from  the  microcontroller.  The  step  resolution-  individually  programmable  for  each  stepper  motor  ranges from full step (1 ''micro step'' is one full step), half step (2 ''micro steps'' per full step), up to 6 bit  micro  stepping (64 micro steps per full step) for precise positioning and noiseless stepper motor rotation (Table 8-8, page 26). Optionally, the micro step table- common for all motors -can be adapted to motor characteristics to further reduce torque ripple.

The TMC428 has got serial interfaces for communication with the microcontroller and for the stepper motor drivers. The serial interface for the microcontroller uses a fixed length of 32 bits with a simple protocol,  directly  connecting  to  SPI TM interfaces.  The  serial  interface  to  the  stepper  motor  drivers  is flexibly configurable for different types- even from different vendors -with up to 64 bit length for the SPI  daisy  chain.  TRINAMIC  smart  power  stepper  motor  drivers  TMC236,  TMC239  and  TMC246, TMC249 perfectly fit to the TMC428. Without additional hardware, drivers with same serial interface polarities of chip select and clock signals may be mixed in a single chain. To mix drivers with different serial  interface  polarities,  additional  inverters  (e.g.  74HC04,  74HC14)  are  required.  For  those  driver chips without serial data output, two additional variants of the TMC428 with two additional chip select outputs are available. The TMC428 sends data to the driver chain on demand only, which minimizes the interface traffic and reduces the power consumption.

Hint: Unused  reference  switch  inputs  should  be  pulled  to  ground  (Figure  2-1).  With  this  one  can connect  reference  switches  that  connect  to  +5V  resp.  +3.3V  when  pushed.  Concerning  different reference switch configurations please refer to Figure 9-3, Figure 9-4, Figure 9-5.

Figure 2-1: TMC428 application environment with TMC428 in SSOP16 package

<!-- image -->

Figure 2-2: Usage of drivers without serial data output (SDO) with TMC428 in larger packages (* the DI20 package variant is not recommended for new designs )

<!-- image -->

## 2.1 Step Frequencies

The maximum SPI TM data  rate  is  the  clock  frequency  divided  by  16.  The  maximum  step  frequency depends on the total length of the datagrams sent to the SPI TM stepper motor driver chain. At a clock frequency of 16 MHz, with a daisy chain of three SPI TM stepper motor drivers of 16 bit datagram length each, the maximum full step frequency is 16 MHz / 16 / ( 3 * 16 ). This is approximately 20 kHz and that is much higher than needed for typical stepper motors. But, the micro step rate may be higher, even if the stepper motor driver does not see all micro steps due to SPI TM data rate limit, as long as the number of skipped micro steps is less than a full step. In this respect, one should remember, that at high  step  rates-  respectively  pulse  rates  -the  differences  between  micro  stepping  and  full  step excitation vanishes.

## 2.2 Modes of Motion

The TMC428 has four different modes of motion, programmable individually for each stepper motor, named RAMP\_MODE,  SOFT\_MODE,  VELOCITY\_MODE,  and  HOLD\_MODE.  For  positioning applications  the  RAMP\_MODE  is  most  suitable,  whereas  for  constant  velocity  applications  the VELOCITY\_MODE is. In RAMP\_MODE, the user just sets the position and the TMC428 calculates a trapezoidal velocity profile and drives autonomously to the target position. During motion, the position may be altered arbitrarily. The SOFT\_MODE is similar to the RAMP\_MODE, but the decrease of the velocity during deceleration is done with a soft, exponentially shaped velocity profile. In VELOCITY\_MODE,  a  target  velocity  is  set  by  the  user  and  the  TMC428  takes  into  account  user defined  limits  of  velocity  and  acceleration.  In  HOLD\_MODE,  the  user  sets  target  velocities,  but  the TMC428 ignores any limits of velocity and acceleration, to realize arbitrary velocity profiles, controlled completely  by  the  user.  The  TMC428  has  capabilities  to  generate  interrupts  depending  on  different stepper motor conditions chosen by an interrupt mask. However, status bits sent back automatically to the microcontroller each time it sends data to the TMC428 are sufficient for polling techniques.

The TMC428 provides different modes for reference switch handling. In the default reference switch mode,  the  three  reference  switch  inputs  ( REF1 , REF2 , REF3 )  are  defined  as  left  side  reference switches, one for each stepper motor. In another mode, the 1 st reference input ( REF1 ) is defined as left reference switch input of motor number one, the 2 nd reference input ( REF2 ) is defined as left reference switch  input  of  motor  number  two,  and  the  3 rd reference  input  ( REF3 )  is  defined  as  right  reference switch  of  stepper  motor  number  one.  In  that  mode,  there  is  no  reference  switch  input  available  for stepper motor three. With an external multiplexer 74HC157 any stepper motor may have a left and a right reference switch.

Many serial stepper motor drivers provide different status bits (driver active, inactive, ...) and error bits (short to ground, wire open, ...). To have access to those error bits, datagrams with a total length up to 48 bits sent back from the stepper motor driver chain to the TMC428 are buffered within two 24 bit wide  registers.  The  microcontroller  has  direct  access  to  these  registers.  Although,  the  TMC428 provides datagrams with up to 64 bits, only the last 48 bits sent back from the driver chain are buffered for read out by the microcontroller. This is because buffering of 3 times 16 bits is sufficient for a chain of three stepper motor drivers (see Figure 2-1, page 3) and most other drivers sending back up to 16 bits. For a chain of three TMC236 / TMC239 / TMC246 / TMC249 all status bits are accessible. From

the software point of view, the TMC428 provides a set of registers, accessed by a microcontroller (µC) via a serial interface in an uniform way. Each datagram contains address bits, a read-write selection bit,  and  data  bits,  to  access  the  registers  and  the  on-chip  memory.    Each  time,  the  µC  sends  a datagram to the TMC428, it simultaneously receives a datagram from the TMC428. This simplifies the communication with the TMC428 and makes the programming easy. Most microcontrollers have an SPI TM hardware interface, which directly connects to the serial four wire microcontroller interface of the TMC428. For microcontrollers without SPI TM hardware, a software doing the serial communication is completely sufficient and can easily be implemented.

## 2.3 Notation of Number Systems &amp; Notation of Two to the Power of n

Decimal numbers are used as usual without additional identification. Binary numbers are identified by a prefixed % character. Hexadecimal numbers are identified by a prefixed $ character. So, for example the decimal number 42 in the decimal system is written as %101010 in the binary number system, and it is written as $2A in the hexadecimal number system. With this, TMC428 datagrams are written as 32 bit  numbers  (e.g.  $1234ABCD  =  %00010010001101001010101111001101). In addition to the basic arithmetic operators (+, -, *, /) the operator two to the power of n is required at different sections of this data sheet. For better readability instead of 2 n the notation 2^n is used.

## 2.4 Signal Polarities

Per  default,  signals-  external  and  internal  -are  high  active,  but  the  polarity  of  some  signals  is programmable to be inverted. A pre-fixed lower case 'n' indicates low active signals (e.g. nSCS\_C, nSCS\_S). For example the polarity of nSCS\_S can be inverted by programming, but also the polarity of datagram bits can be inverted by programming (see section 9, page 27).

## 2.5 Units of Motion Parameters

Motion  parameters  position,  velocity,  and  acceleration  are  given  as  integer  values  within  TMC428 specific  units.  Section  8.14  page  26  explains  how  to  calculate  steps,  steps  per  second,  steps  per second  square  from  given  TMC428  integer  values.  With  a  given  stepper  motor  resolution  one  can calculate physical units for angle, angular velocity, angular acceleration.

## 2.6 Representation of Signed Values by Two's Complement

Those  motion  parameters  that  have  to  cover  negative  and  positive  motion  direction  as  well  are processed as signed numbers represented by two's complement as usual. Signed motion parameters are x\_target, x\_actual, v\_target, v\_actual, a\_actual, a\_threshold (pls. refer section 8.9, page 18). Limit motion parameters as v\_min, v\_max, a\_max, are represented as unsigned binary numbers.

## 2.7 Tables of Contents

A table of contents, a table of figures, and a table of tables are located at the end of the data sheet.

## 3 Package Variants

The TMC428 is available in three different package variants, qualified for the industrial temperature range. An additional variant is available for the automotive temperature range. The package outlines and dimensions are included within this data sheet (page 45-47.)

Table 3-1: TMC428 package variants

| part number   | Package                                                                                                                              | JEDEC Drawing     |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------|
| TMC428-I      | SSOP16 - 150 mils, 16 pins, plastic package, industrial (-40°C ... +85°C) RoHS compliant since date code 0424 (YYWW =WW 24 / 2004)   | MO-137 (150 mils) |
| TMC428-PI24   | SOP24 - 300 mils, 24 pins, plastic package, industrial (-40°C ... +85°C) RoHS compliant since date code 0518 (YYWW =WW 18 / 2005)    | MS-013 (300 mils) |
| TMC428-A      | SSOP16 - 150 mils, 16 pins, plastic package, automotive (-40°C ... +125°C)                                                           | MO-137 (150 mils) |
| TMC428-DI20   | DIL20 - 300 mils, 20 pins, plastic package, industrial (-40°C ... +85°C) [ This package variant is not recommended for new designs ] | MS-001 (300 mils) |

## 4 Pinning

There are three package variants of the TMC428 available. The smaller SSOP16 package is sufficient for TRINAMIC stepper motor drivers (TMC236 / TMC239 / TMC246 / TMC249) with up to three drivers in a chain and for most SPI TM stepper motor drivers from other vendors. Some SPI TM stepper motor drivers from other vendors have no serial data output and cannot simply be arranged in a daisy chain to drive more than one motor. The two package variants SOP24 and DIL20 have two additional driver selection outputs ( nSCS2 , nSCS3 ) for those stepper motor drivers without serial data output. All inputs are  Schmitt-Trigger.  Possibly  unused  inputs  ( REF1 , REF2 , REF3 , SDI\_S )  need  to  be  connected  to ground.

Hint: Preferably,  long  wires  to  the  reference  switch inputs (REF1, REF2, REF3) should be avoided. For  long  wires,  a  low  pass  filter  for  spike  suppression  should  be  provided  (pls.  refer  the  TMC428 evaluation board schematic as an example).

Figure 4-1: TMC428 pin out (* the DIL20 package variant is not recommended for new designs )

<!-- image -->

Table 4-1: TMC428 pin out (* the DIL20 package variant is not recommended for new designs )

| Pin          | SSOP16   | SOP24         | DIL20*   | In/Out   | Description                                                                                                                                                                                                                                                    |
|--------------|----------|---------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Reset        | -        | -             | -        | -        | internal power-on reset                                                                                                                                                                                                                                        |
| CLK          | 5        | 7             | 11       | I        | clock input                                                                                                                                                                                                                                                    |
| nSCS_C       | 6        | 9             | 13       | I        | low active SPI chip select input driven from µC                                                                                                                                                                                                                |
| SCK_C        | 7        | 10            | 14       | I        | serial data clock input driven from µC                                                                                                                                                                                                                         |
| SDI_C        | 8        | 11            | 15       | I        | serial data input driven from µC                                                                                                                                                                                                                               |
| SDO_C / nINT | 9        | 14            | 16       | O        | serial data output to µC input / multiplexed nINTERRUPT output if communication with µC is idle (resp. nSCS_C = 1) Important Note: SDO_C will never be high impedance, but this function can added with a single gate 74HCT1G125 (pls. refer Figure 4, page 9) |
| nSCS_S       | 12       | 17            | 19       | O        | SPI chip select signal to stepper motor driving chain                                                                                                                                                                                                          |
| nSCS2        | -        | 18            | 20       | O        | SPI chip select signal (SOP24 & DIL20 package only)                                                                                                                                                                                                            |
| nSCS3        | -        | 19            | 1        | O        | SPI chip select signal (SOP24 & DIL20 package only)                                                                                                                                                                                                            |
| SCK_S        | 11       | 16            | 18       | O        | serial data clock output to SPI stepper motor driver chain                                                                                                                                                                                                     |
| SDO_S        | 10       | 15            | 17       | O        | serial data output to SPI stepper motor driver chain                                                                                                                                                                                                           |
| SDI_S        | 16       | 23            | 5        | I        | serial data input from SPI stepper motor driver chain Note: pull-up/-down resistor at SDI_S avoids high impedance                                                                                                                                              |
| REF1         | 1        | 2             | 6        | I        | reference switch input 1                                                                                                                                                                                                                                       |
| REF2         | 2        | 3             | 7        | I        | reference switch input 2                                                                                                                                                                                                                                       |
| REF3         | 3        | 4             | 8        | I        | reference switch input 3                                                                                                                                                                                                                                       |
| V5           | 13       | 5, 20         | 2, 9     |          | +5V supply / +3.3V supply                                                                                                                                                                                                                                      |
| V33          | 14       | 21            | 3        |          | 470 nF ceramic capacitor pin / +3.3V supply                                                                                                                                                                                                                    |
| GND          | 15       | 8, 22         | 4, 12    |          | ground                                                                                                                                                                                                                                                         |
| TEST         | 4        | 6             | 10       | I        | must be connected to GND as close as possible to the chip                                                                                                                                                                                                      |
| n.c.         | -        | 1, 12, 13, 24 | -        | -        | not connected                                                                                                                                                                                                                                                  |

## 5 Functional Description and Block Diagram

From the software point of view, the TMC428 provides a set of registers of different units and on-chip RAM (see Figure 5-1), accessed via the serial µC interface in an uniform way. The serial interface uses just a simple protocol with fixed length datagrams for read and write access. The serial interface to the stepper  motor  driver  chain  has  to  be  configured  by  an  initialization  sequence  which  writes  the configuration into the on-chip RAM. Once configured the serial driver interface works autonomously. The internal multiple port RAM controller of the TMC428 takes care of access scheduling. So, the user may read and write registers  and  on-chip  RAM  at  any  time.  The  registers  hold  global  configuration parameters and the motion parameters. The on-chip RAM stores the configuration of the serial driver interface and the micro step table.

The  ramp  generator  monitors  the  motion  parameters  stored  in  its  registers  and  calculates  velocity profiles  controlling  the  pulse  generator.  The  pulse  generator  then  generates  step  pulses  taking  into account  user  defined  motion  parameter  limits.  The  serial  driver  interface  sends  datagrams  to  the stepper motor driver chain whenever a step pulse comes. The micro step unit (including sequencer) processes step pulses from the pulse generator- representing micro steps, half steps, or full steps depending  on  the  selected  step  resolution  -and  makes  the  results  available  to  the  serial  driver interface. The ramp generator also interfaces the reference switch inputs. Unused reference switches have to be connected to ground. A pull-down resistor is necessary at the SDI\_S input of the TMC428 for  those  serial  peripheral  interface  stepper  motor  drivers  that  set  their  serial  data  output  to  high impedance 'Z' while inactive.

The interrupt controller continuously watches reference switches and ramp generator conditions and generates an interrupt if required. To save pins, the interrupt signal is multiplexed to the SDO\_C signal. This output becomes the low active interrupt signal called nINT while nSCS\_C is high (see Figure 6-1, page 8). So, if the microcontroller disables the interrupt during access to the TMC428 and enables the interrupt otherwise, the multiplexed interrupt output of the TMC428 behaves like a dedicated interrupt output. For polling, the TMC428 sends the status of the interrupt signal to the microcontroller with each datagram.

To drive  a  stepper  motor  to  a  new  target  position,  one  just  has  to  write  the  target  position  into  the associated  register  by  sending  a  datagram  to  the  TMC428.  To  run  a  stepper  motor  with  a  target velocity, one just has to write the velocity into the register assigned to the stepper motor.

Figure 5-1: TMC428 functional block diagram

<!-- image -->

## 6 Serial Peripheral Interfaces

The four pins named SCS\_C, SCK\_C, SDI\_C, SDO\_C form the serial microcontroller interface of the TMC428.  The  communication  between  the  microcontroller  and  the  TMC428  takes  place  via  32  bit datagrams of fixed length. Concerning communication, the µC is the master and the TMC428 is the slave, with the TMC428 in turn being the master for the stepper motor driver daisy chain. Similar to the microcontroller  interface,  the  TMC428  uses  a  four  wire  serial  interface  for  communication  with  the stepper motor driver daisy chain. The four pins named SCS\_S, SCK\_S, SDO\_S, SDI\_S form the serial stepper motor driver interface. Stepper motor drivers with parallel inputs can be used in connection with the TMC428 with some additional glue logic.

## 6.1 Automatic Power-On Reset

The TMC428 performs an automatic power-on reset. For details see section Power-On-Reset, page 50. The TMC428 cannot be accessed before the power-on-reset is completed and the clock is stable. All register bits are initialized with '0' during power on reset, except the SPI clock pre-divider clk2\_div (see section 9.7, page 29) that is initialized with 15.

## 6.2 Serial Peripheral Interface for µC

The serial microcontroller interface of the TMC428 behaves as a simple 32 bit shift register. It shifts serial data SDI\_C in with the rising edge of the clock signal SCK\_C and copies the content of the 32 bit shift  register  with  the  rising  edge  of  the  selection  signal  nSCS\_C  into  a  buffer  register.  The  serial interface of the TMC428 immediately sends back data read from registers or read from internal RAM via the signal SDO\_C. The signal SDO\_C can be sampled with the rising edge of SCK\_C, but SDO\_C becomes  valid  at  least  four  CLK  clock  cycles  after  SCK\_C  becomes  low  as  outlined  in  the  timing diagram Figure 6-1. For detailed timing parameters see Table 6-1, page 10. The SPI signals from the µC interface may be asynchronous to the clock signal CLK of the TMC428.

Because of on-the-fly processing of the input data stream, the serial microcontroller interface of the TMC428 requires the serial data clock signal SCK\_C to have a minimum low / high time of three clock cycles. The data signal SDI\_C driven by the microcontroller has to be valid at the rising edge of the serial  data  clock  input  SCK\_C.  The  maximum  duration  of  the  serial  data  clock  period  is  unlimited. While the µC interface of the TMC428 is idle, the SDO\_C signal is the (active low) interrupt status nINT of  the  integrated  interrupt  controller  of  the  TMC428.  The  timing  of  the  multiplexed  interrupt  status signal nINT is characterized by the parameters tIS an tSI (see Table 6-1, page 10).

Hint: If the microcontroller and the TMC428 work on different clock domains that run asynchronous to each other, the timing of the SPI interface of the microcontroller should be made conservative in the way that the length of one SPI clock cycle equals 8 or more clock cycles of the TMC428 clock CLK. This make the system robust concerning frequency drift, jitter, etc.

Figure 6-1: Timing diagram of the serial µC interface

<!-- image -->

A complete serial datagram frame has a fixed length of 32 bit. While the data transmission from the microcontroller to the TMC428 is idle, the low active serial chip select input nSCS\_C and also the serial data clock signal SCK\_C are set to high. While the signal nSCS\_C is high, the TMC428 assigns the status  of  the  internal  low  active  interrupt  signal  named  nINT  to  the  serial  data  output  SDO\_C  (see Figure 6-1). The serial data input SDI\_C of the TMC428 has to be driven by the microcontroller.

Important Hint: In contrast to most other SPI TM compatible devices, the SDO\_C signal of the TMC428 is always driven. So, it will never be high impedance 'Z'. If high impedance is required for the SDO\_C connected to the microcontroller, it can simply be realized using a single gate 74HCT1G125.

Figure 4 : Making the TMC428 SDO\_C output high impedance with single gate 74HCT1G125

<!-- image -->

The  signal  nSCS\_C  has  to  be  high  for  at  least  three  clock  cycles  before  starting  a  datagram transmission. To initiate a transmission, the signal nSCS\_C has to be set to low. Three clock cycles later the serial data clock may go low. The most significant bit (MSB) of a 32 bit wide datagram comes first and the least significant bit (LSB) is transmitted as the last one. A data transmission is finished by setting nSCS\_C high three or more CLK cycles after the last rising SCK\_C slope. So, nSCS\_C and SCK\_C change in opposite order from low to high at the end of a data transmission as these signals change from high to low at the beginning. The timing of the serial microcontroller interface is outlined in Figure 6-1.

## 6.3 Serial Peripheral Interface to Stepper Motor Driver Chain

The  timing  of  the  serial  stepper  motor  interface  is  similar  to  that  of  the  microcontroller  interface.  It directly  connects  to  SPI TM smart  power  stepper  motor  drivers.  The  SPI TM datagram  is  configurable individually for each stepper motor driver chip of the daisy chain. It is simply configurable by sending a fixed sequence of datagrams to the TMC428 to initialize it after power-up. Once initialized, the TMC428 autonomously generates the datagrams for the stepper motor driver daisy chain without any additional interventions of the microcontroller.

The  SPI TM datagram  for  each  stepper  motor  driver  is  composed  of  so  called primary  signal  bits provided by the micro step unit of the TMC428 individually for each stepper motor. Each primary signal bit is represented by a five bit code word called primary signal code . The order of primary signal bits forming the SPI TM datagrams for the stepper motor driver daisy chain is defined by the order of primary signal code words in the configuration RAM area.

Figure 6-3: Timing diagram of the serial stepper motor driver interface

<!-- image -->

To switch to the next motor, an additional bit called next motor bit (NxM-Bit) is prefixed to the five bit wide  primary  signal  code  words.  So,  the  total  data  word  width  is  six  bit.  Each  NxM-Bit  effects  an increment of an internal stepper motor address until the processing for all stepper motors within the daisy  chain  is  completed.  A  parameter  called LSMD (last  stepper  motor  driver)  defines  the  total number  of  stepper  motors  within  the  daisy  chain.  So,  the  codes  written  into  the  serial  interface configuration RAM area represent the mapping of control signals provided by the micro step units to control bits of the drivers. It might be noted here, that configuring the serial driver interface is much easier as it might seem here. It is explained in detail, illustrated by examples below (see section 11 Stepper Motor Driver Datagram Configuration, page 36).

Table 6-1: Timing characteristics of the serial microcontroller interface

| Symbol      | Parameter                                   | Min              | Typ   | Max   | Unit        |
|-------------|---------------------------------------------|------------------|-------|-------|-------------|
| tSUCSC      | Setup Clocks for nSCS_C                     | 3                |       |       | CLK periods |
| tHDCSC      | Hold Clocks for nSCS_C                      | 3                |       |       | CLK periods |
| tSCKCL      | Serial Clock Low                            | 3                |       |       | CLK periods |
| tSCKCH      | Serial Clock High                           | 3                |       |       | CLK periods |
| tSD         | SDO_C valid after SCK_C low                 | 2.5              |       | 3.5   | CLK periods |
| tIS         | nINTERRUPT status valid after nSCS_C low    | 2.5              |       |       | CLK periods |
| tSI         | SDO_C valid after nSCS_C high               |                  |       | 4.5   | CLK periods |
| tDAMAGRAMuC | Datagram Length                             | 3+3 + 32*6 = 198 |       |       | CLK periods |
| tDAMAGRAMuC | Datagram Length                             | 12.375           |       |       | µs          |
| fCLK        | Clock Frequency                             | 0                |       | 16    | MHz         |
| tCLK        | Clock Period tCLK = 1 / fCLK                | 62.5             |       |       | ns          |
| tPD         | CLK-rising-edge-to-Output Propagation Delay |                  | 5     |       | ns          |

Table 6-2: Timing characteristics of the serial stepper motor driver interface

| Symbol       | Parameter                        | Min             | Typ   | Max                   | Unit        |
|--------------|----------------------------------|-----------------|-------|-----------------------|-------------|
| tSUSCSdrv    |                                  | 8               | 16    | 256                   | CLK periods |
| tHDSCSdrv    |                                  | 8               | 16    | 256                   | CLK periods |
| tCKSL        |                                  | 8               | 16    | 256                   | CLK periods |
| tCKSH        |                                  | 8               | 16    | 256                   | CLK periods |
| tDAMAGRAMdrv | Datagram Length                  | 8+8+1*16+8+8=48 |       | 512+64*512+512= 33792 | CLK periods |
| tDAMAGRAMdrv | Datagram Length @ fCLK = 16 MHz  | 3               |       | 2112                  | µs          |
| tPD          | CLK-rising-edge to Outputs Delay |                 | 5     |                       | ns          |

The timing of the serial driver interface is programmable in a wide range. The clock divider provides 16 up to 512 clock cycles (tCLK) for a serial driver interface data clock period. The default duration of a clock period (tSCKCL+tSCKCH) of the signal nSCS\_S is 16+16=32 clock periods of the clock signal CLK. The minimal duration of a serial interface clock period (tSCKCL+tSCKCH) is 8+8=16 clock cycles of  signal  CLK  as  outlined  in  Figure  6-3.  Also,  the  polarities  of  the  signals  nSCS\_S  and  SCK\_S  are programmable to use driver chips from other vendors with inverted polarities without additional glue logic.  The input SDI\_S of the serial driver interface must always be driven to a defined level. So, to avoid  high  impedance  ('Z')  at  that  input  pin  while  the  stepper  motor  driver  chain  is  idle,  a  pull-up resistor or a pull-down resistor of 10 K is required at that input.

## 6.4 Datagram Structure

The microcontroller (µC) communicates with the TMC428 via the four wire (nSCS\_C, SCK\_C, SDI\_C, SDO\_C) serial interface. Each datagram sent to the TMC428 via the pin SDI\_C and each datagram received  from  the  TMC428  via  the  pin  SDO\_C  is  32  bits  long.  The  first  bit  sent  is  the  MSB  (most significant  bit  named  sdi\_c\_bit#31  at  Figure  6-1).  The  last  bit  sent  is  the  LSB  (least  significant  bit named sdi\_c\_bit#0 in  Figure  6-1).  During  reception  of  a  datagram,  the  TMC428 immediately sends back a datagram of the same length to the microcontroller. This datagram is the result of the request from the microcontroller.

With each 32 bit wide datagram the microcontroller sends to the TMC428, it simultaneously receives a 32 bit wide datagram. A read request is distinguished from a write request by one datagram bit named RW . The TMC428 immediately sends back requested read data in the lower 24 datagram bits. Status bits  are  sent  back  in  the  higher  8  datagram  bits.  Datagrams  sent  from  the  microcontroller  to  the TMC428 have the form:

Table 6-3 : 32 bit DATAGRAM structure sent from µC (MSB sent first)

<!-- image -->

The 32 bit wide datagrams sent to the TMC428 are assorted in four groups of bits: RRS (register RAM select)  selecting  either  registers  or  on-chip  RAM; ADDRESS bits  addressing  memory  within  the register  set  or  within  the  RAM  area; RW (read  /  not  write  ( RW = 1 : read / RW = 0 : write ))  bit distinguishing  between read access and write access; DATA bits  for  write  access-  for  read  access these  bits  are don't  care and  should  be  set  to  '0'.  Different  internal  registers  of  the  TMC428  have different lengths. So, for some registers only a subset of these 24 data bits is used. Unused data bits should be set to '0' for clearness. Some addresses select more than a single register mapped together into the 24 data bit space.

The 32 bit wide datagrams received by the µC from the TMC428 contain two groups of bits: STATUS BITS and DATA  BITS .  The  status  bits,  sent  back  with  each  datagram,  carry  the  most  important information  about  internal  states  of  the  TMC428  and  the  settings  of  the  reference  switches.  These datagrams have the form:

Table 6-4: 32 bit DATAGRAM structure received by µC (MSB received first)

<!-- image -->

The  status  bit INT is  the  internal  high  active  interrupt  controller  status  output  signal.  Handling  of interrupt conditions without using interrupt techniques is possible by polling this status bit. The interrupt signal is also directly available at the SDO\_C pin of the TMC428 if nSCS\_C is high. The pin SDO\_C may directly be connected to an interrupt input of the microcontroller. Since the SDO\_C / nINT output is  multiplexed,  the  microcontroller  has  to  disable  its  interrupt  input  while  it  sends  a  datagram  to  the TMC428,  because  the SDO\_C  signaldriven by the TMC428  -alternates during datagram transmission.  For  initialization  purposes,  the  TMC428  enables  direct  communication  between  the microcontroller  and  the  stepper  motor  driver  chain  by  sending  a  so  called cover  datagram (see sections 9.2 and 9.3). The position cover\_position and actual length cover\_len of a cover datagram is specified by writing them into a common register. Writing an up to 24 bit wide cover datagram to the register cover\_datagram will fade in that cover datagram into the next datagram sent to the stepper motor driver chain. As a default setting, the TMC428 only sends datagrams on demand. Optionally, continuous update- periodic sending of datagrams to the stepper motor driver chain -is also possible. So, the status bit named CDGW (cover datagram waiting) is a handshake signal for the microcontroller in  regard  to  the  datagram  covering  mechanism.  This  feature  is  necessary  to  enable  direct  data transmission from a microcontroller to the stepper motor driver chips for initialization purposes. The CDGW status bit also gives the status of the datagram\_high\_word and datagram\_low\_word (see section 9.1).

The status bits RS3, RS2, RS1 represent the settings of the reference switches. But, the reference switch inputs REF3, REF2, REF1 are not mapped directly to these status bits. Rather, the reference switch inputs may have different functions, depending on programming (see pages 22 - 24). The three status bits xEQt3, xEQt2, xEQt1 indicate individually for each stepper motor, if it has reached its target position.  The  status  bits RS3, RS2, RS1 and  bits xEQt3, xEQt2, xEQt1 can trigger  an  interrupt  or enable simple polling techniques.

## 6.5 Simple Datagram Examples

The % prefix- normally indicating binary representation in this data sheet -is omitted for the following datagram examples. Assuming, one would like to write (RW= 0 ) to a register (RRS=0) at the address %001101 the following data word %0000 0000 0000 0001 0010 0011, one would have to send the following 32 bit datagram

0001101 0 000000000000000100100011

to the TMC428. With inactive interrupt ( INT =0), no cover datagram waiting ( CDGW =0), all reference switches  inactive  (RS3=0,  RS2=0,  RS1=0),  and  all  stepper  motors  at  target  position  (xEQt3=1, xEQt2=1,  xEQt1=1)  the  status  bits  would  be  %10010101  the  TMC428  would  send  back  the  32  bit datagram:

10010101000000000000000000000000

To read (RW= 1 ) back the register written before, one would have to send the 32 bit datagram

0001101 1 000000000000000000000000

to the TMC428 and would get back from it the datagram

10010101000000000000000100100011.

Write  (RW= 0 )  access  to  on-chip  RAM  (RRS=1)  to  an  address  %111111  occurs  similar  to  register access, but with RRS=1. To write two 6 bit data words %100001 and %100011 to successive pair-wise RAM  addresses  %1111110  and  %1111111  (%100001  to  %1111110  and  %100011  to  %1111111) which are commonly addressed by one datagram (see pages 14 and 35),  one would have to send the datagram

1111111 0 000000000010001100100001.

To read (rw= 1 ) from that on-chip memory address, one would have to send the datagram 1111111 1 000000000000000000000000.

## 7 Address Space Partitions

The address space is partitioned in different ranges. Each of the up to three stepper motors has a set of registers individually assigned to it, arranged within a contiguous address space. An additional set of registers within the address space holds some global parameters common for all stepper motors. One dedicated  global  parameter  register  is  essential  for  the  configuration  of  the  serial  four  wire  stepper motor driver interface. One half of the on-chip RAM address space holds the configuration parameters for  the  stepper  motor driver  chain. The other half of the on-chip RAM address space is provided to store a micro step table if required. The first seven datagram bits ( sdi\_c\_bit#31 and sdi\_c\_bit#30 ... sdi\_c\_bit#25 , respectively RRS and ADDRESS ) address the whole address space of the TMC428.

Table 7-1: TMC428 address space partitions

| address ranges (incl. RRS)   | address ranges (incl. RRS)   | address ranges (incl. RRS)   | assignment                                             | assignment                   |
|------------------------------|------------------------------|------------------------------|--------------------------------------------------------|------------------------------|
| %000 0000                    | . . .                        | %000 1111                    | 16 registers for stepper motor #1                      | registers with up to 24 bits |
| %001 0000                    | . . .                        | %001 1111                    | 16 registers for stepper motor #2                      | registers with up to 24 bits |
| %010 0000                    | . . .                        | %010 1111                    | 16 registers for stepper motor #3                      | registers with up to 24 bits |
| %011 0000                    | . . .                        | %011 1110                    | 15 common registers                                    | registers with up to 24 bits |
|                              |                              | %011 1111                    | 1 global parameter register                            | registers with up to 24 bits |
| %100 0000                    | . . .                        | %101 1111                    | 32 addresses of 2x6 bit for driver chain configuration | RAM 128x6 bit                |
| %110 0000                    | . . .                        | %111 1111                    | 32 addresses of 2x6 bit for icrostep table             | RAM 128x6 bit                |

The stepper motors are controlled directly by writing motion parameters into associated registers. Only one register write access is necessary to change a target motion parameter. E.g. to change the target position  of  one  stepper  motor,  the  microcontroller  has  to  send  only  one  32  bit  datagram  to  the TMC428. The same is true for changing a target velocity. Some parameters are packed together in a single  data  word  at  a  single  address.  Those  parameters-  initialized  once  and  unchanged  during operation -have to be changed commonly. Access to on-chip RAM addresses concern two successive RAM addresses. So, always two data words are modified with each write access to the on-chip RAM. Once initialized after power-up, the content of the RAM is usually left unchanged.

## 7.1 Read and Write

Read and write access is selected by the RW bit (sdi\_c\_bit#24) of the datagram sent from the µC to the  TMC428. The on-chip configuration  RAM and the registers are writeable with read-back option. Some addresses are read-only. Write access ( RW =0)  to  some  of  those  read-only  registers  triggers additional functions, explained in detail later.

## 7.2 Register Set

The register address mapping is given in Table 7-2 on page 15. These registers are initialized internally during power-up. During power-up initialization, the TMC428 sends no datagrams to the stepper motor driver chain.

Note: The RAM has to be initialized before writing target parameters to the register set.

## 7.3 RAM Area

The  RAM  address  mapping  is  given  in  Table  10-1  page  35.  The  on-chip  RAM  is NOT initialized internally during power-up. This has to be done by the microcontroller before operation.

Note: There  are  unused  addresses  within  the  address  space  of  the  TMC428.  Access  to  these addresses has no effect. How ever, access should be avoided, because this address space may be used for future devices.

Important Hint: All register bits are initialized with '0' during power on reset, except the SPI clock predivider clk2\_div (see section 9.7, page 29) that is initialized with 15.

Table 7-2: TMC428 register address mapping

<!-- image -->

## 8 Register Description

The registers hold binary coded numbers. Some are unsigned (positive) numbers, some are signed numbers in two's complement, and some are control bits or single flags. The functionality of different registers depends on the ramp mode (s. page 22).

## 8.1 x\_target (IDX=%0000)

This register holds the current target position in units of full steps, respectively micro steps. The unit of the target position depends on the setting of the associated micro step resolution register usrs . If the difference x\_target - x\_actual is unequal zero, the TMC428 moves the stepper motor in that direction of x\_target so that the difference becomes zero. The condition | x\_target - x\_actual | &lt; 2 23 must be satisfied  for  motion  into  the  correct  direction.  Both,  target  position x\_target and  current  position x\_actual may be altered on the fly. Usually x\_target is modified to start a positioning. To move from one  position  to  another,  the  ramp  generator  of  TMC428  automatically  generates  ramp  profiles  in consideration of the velocity limits v\_min and v\_max and acceleration limit a\_max .

Note: The  registers x\_target,  x\_actual,  v\_min,  v\_max,  and  a\_max are  initialized  with  zero  after power up. Thus, no step pulses are generated because motion is prohibited.

## 8.2 x\_actual (IDX=%0001)

The current position of each stepper motor is available by read out of the registers called x\_actual . The  actual  position  can  be  overwritten  by  the  microcontroller.  This  feature  is  for  reference  switch position calibration under control of the microcontroller.

## 8.3 v\_min (IDX=%0010)

This  register  holds  the  absolute  value  of  the  velocity  at  or  below  which  the  stepper  motor  can  be stopped  abruptly.  The  parameter v\_min is  relevant  only  for  deceleration  while  reaching  a  target position. It should be set greater than zero. This control value allows to reach the target position faster because  the  stepper  motor  is  not  slowed  down  below v\_min before  the  target  is  reached.  Also consider, that due to the finite numerical representation of integral relations, the target position can not be reached exactly, if the calculated velocity is less than one, before the target is reached. So, setting v\_min to at least one assures reaching each target position exactly. The unit of velocity parameters ( v\_max , v\_target ,  and v\_actual )  is  steps  per  time  unit.  The  scale  of  velocity  parameters  ( v\_min , v\_max , v\_target , v\_actual )  is  defined  by  the  parameter pulse\_div (see  page  26  for  details)  and depends on the clock frequency of the TMC428.

Figure 8-1: Velocity ramp parameters and velocity profiles

<!-- image -->

## 8.4 v\_max (IDX=%0011)

This parameter sets the maximum motor velocity. The absolute value of the velocity will not exceed this limit, except if the limit v\_max is changed during motion to a value below the current velocity.

Note : To set target position x\_target and current position x\_actual to an equivalent value (e.g. to set both  to  zero  at  a  reference  point),  the  assigned  stepper  motor  should  be  stopped  first,  and  the parameter v\_max should be set to zero to hold the assigned stepper motor at rest before writing into the register x\_target and x\_actual .

## 8.5 v\_target (IDX=%0100)

In  modes  RAMP\_MODE and SOFT\_MODE this register holds the current target velocity calculated internally by the ramp generator. In mode VELOCITY\_MODE a target velocity can be written into this register. Then  the associated stepper motor accelerates until it reaches the target velocity specified. In VELOCITY\_MODE the  velocity  is  changed  according  to  the  motion  parameter  limits  if  the  register v\_target is changed. In HOLD\_MODE the register v\_target is ignored.

## 8.6 v\_actual (IDX=%0101)

This read-only register holds the current velocity of the associated stepper motor. Internally, the ramp generator of the TMC428 processes with 20 bits while only 12 bits can be read out as v\_actual . So, an actual velocity of zero read out by the microcontroller means that the current velocity is in an interval between zero and one. Because of this, the actual velocity should not be used to detect a stop of a stepper motor. For stop detection there is a dedicated bit within the interrupt register, which can simply be read out by the micro processor or generate an interrupt. Writing zero to register v\_actual , which is possible in HOLD\_MODE only, immediately stops the associated stepper motor, because hidden bits are set to zero with each write access to the register v\_actual . In HOLD\_MODE only, this register is a read-write register. In HOLD\_MODE, motion parameters are ignored and the microcontroller has the full  control  to  generate  a  ramp.  In  that  mode,  the  TMC428  only  handles  the  microstepping  and datagram generation for the associated stepper motor of the daisy chain.

## 8.7 a\_max (IDX=%0110)

The absolute value of the maximum acceleration is defined by this register. It ranges from 0 to 2047. The unit of the acceleration is change of step frequency per time unit divided by 256. The scale of acceleration parameters ( a\_max , a\_actual , a\_threshold ) is defined by the parameter ramp\_div (see section 8.14, page 26 for details) and depends on the clock frequency of the TMC428. Setting a\_max to zero during motion of the stepper motor results in the inability of the stepper motor to stop, because it cannot change its velocity.

## 8.7.1 a\_max\_lower\_limit &amp; a\_max\_upper\_limit for ramp\_div pulse\_div

Under special conditions, the parameter a\_max might have a lower limit (&gt;1) and might an upper limit (&lt;2047)  concerning deceleration in RAMP\_MODE and SOFT\_MODE if  the  difference  between ramp\_div and pulse\_div is more than one. This is because the deceleration ramp is internally limited to  2^19  steps  respectively  micro  steps,  which  is  sufficient  for  most  applications.  The  lower  limit concerning the deceleration is given by

```
a_max_lower_limit = 2^( ramp_div -pulse_div -1 )
```

With v\_max set  to  2048  / 2  ( 1448)  or  lower,  the a\_max\_lower\_limit is  half  of  this  value.  If ramp\_div -pulse\_div - 1 0 the limit a\_max\_lower\_limit is 1 and the parameter a\_max may be set to down to 1 and of course to 0. On the other side, the upper limit of a\_max is given by

```
a_max_upper_limit = 2^( ramp_div -pulse_div + 12 ) - 1
```

So, if ramp\_div -pulse\_div + 1 0  the a\_max\_upper\_limit is  &gt;  2048  and  the  parameter a\_max might be set to any value up to 2047.

Important  Note: So, a\_max can  be  set  without  restrictions  within  its  range  of  0  to  2047  for  those combinations of ramp\_div and pulse\_div with | ramp\_div -pulse\_div | 1 .

The  parameter a\_max must  not  be  set  below a\_max\_lower\_limit except a\_max is  set  to  0. The condition a\_max a\_max\_lower\_limit as well as a\_max a\_max\_upper\_limit must be satisfied to reach  any  target  position  without  oscillations.  If  that  condition  is  not  satisfied,  oscillations  around  a target position may occur. For description of the parameters ramp\_div and pulse\_div see page 26.

So, a\_max\_lower\_limit and a\_max\_upper\_limit restrict  the  allowed range of a\_max only for those cases  where ramp\_div is  non-equal  to pulse\_div and  differ  more  than  one.  These  both  limits  of a\_max concern  the  deceleration  phase  for RAMP\_MODE and SOFT\_MODE only.  As  long  as ramp\_div pulse\_div - 1 is valid, any value of a\_max within its range (0,1, ..., 2047) is allowed and there  exists  a  valid  pair { pmul,  pdiv }  for  each a\_max .  Qualitative  verbalized,  this  is  because  the acceleration scaling determined by ramp\_div is  compatible with the step velocity scaling determined by pulse\_div .  In  other  words,  large ramp\_div stands  for  low  acceleration  where  large pulse\_div stands for low velocity and low acceleration is compatible with low speed and high speed as well, but high acceleration is more compatible with high speed.

Important  Note: Changing  at  least  one  parameter  out  of  the  triple  { a\_max , ramp\_div , pulse\_div } requires  re-calculation  of  the  parameter  pair  { pmul,  pdiv }  to  update  the  associated  register.  For description of the parameters pmul and pdiv see section 8.10, page 19.

## 8.8 a\_actual (IDX=%0111)

The actual acceleration, which the TMC428 actually applies to a stepper motor, can be read out by the microcontroller from this read-only register for monitoring purposes. The actual acceleration is used to select scale factors for the coil currents. Internally, it is updated with each clock. The returned value a\_actual is    smoothed  to  avoid  oscillations  of  the  readout  value.  Thus,  returned a\_actual values should not be used directly for precise calculations.

## 8.9 is\_agtat &amp; is\_aleat &amp; is\_v0 &amp; a\_threshold (IDX=%1000)

These parameters represent current scaling values  Is  and are applied to the motor depending on the ramp phase: The parameter is\_agtat is applied if the acceleration (a) is greater than (gt) a threshold acceleration  (at ).  This  is  to  increase  current  during  acceleration  phases.  The  parameter is\_aleat is applied if the acceleration is lower than or equal to (le) the threshold acceleration. This is the nominal motor current. The third parameter is\_v0 is applied if the stepper motor is at rest, to save power, to keep it cool, and to avoid noise probably caused by chopper drivers. The parameter a\_threshold is the threshold used to compare with the current acceleration to select the current scale factor. The three parameters is\_agtat, is\_aleat ,  and is\_v0 are bit vectors of three bit width. One of these is selected conditionally and assigned to an interim bit vector i\_scale .  The current scaling factor Is is defined in Table 8-1.

Table 8-1: Coil current scale factors

|   i_scale |   i_scale |   i_scale | I s   | I s    | I s   |
|-----------|-----------|-----------|-------|--------|-------|
|         0 |         0 |         0 | 1     | = 100  | %     |
|         0 |         0 |         1 | 1 / 8 | = 12.5 | %     |
|         0 |         1 |         0 | 2 / 8 | = 25   | %     |
|         0 |         1 |         1 | 3 / 8 | = 37.5 | %     |
|         1 |         0 |         0 | 4 / 8 | = 50   | %     |
|         1 |         0 |         1 | 5 / 8 | = 62.5 | %     |
|         1 |         1 |         0 | 6 / 8 | = 75   | %     |
|         1 |         1 |         1 | 7 / 8 | = 87.5 | %     |

Important Notes: The maximum current scaling factor 1 is selected by i\_scale = %000. This is the power-on default. The minimum current scaling factor 1/8 = 0.125 is selected by i\_scale = %001. The current scaling factor Is proportionally  reduces the effective number of micro steps per full step. For example,  with i\_scale =  %100  (=  4/8  =  50%)  the  number  of  effective  micro  steps  per  full  step  is halved.

One of the three scale factors is\_agtat, is\_aleat , and is\_v0 is selected according to Table 8-2. If the velocity is zero, the parameter is\_v0 is  used for scaling. If the velocity is not zero, either is\_aleat or is\_agtat is used for scaling, depending on the absolute value of the acceleration and the acceleration threshold a\_threshold .

Table 8-2: Current scale selection scheme

<!-- image -->

| v = 0   |                               | I s := is_v0    |
|---------|-------------------------------|-----------------|
| v ≠ 0   | a threshold > 1023            | I s := is_aleat |
| v ≠ 0   | &#124; a &#124; ≤ a threshold | I s := is_aleat |
| v ≠ 0   | &#124; a &#124; > a threshold | I s := is_agtat |

The automatic motion dependent current scale feature of the TMC428 is provided primarily for micro step operation. It may also be applied for full step or half step drivers, if those provide current control bits. For those drivers, one could initialize the micro step table with a constant function, square function or sine wave using the two most significant DAC bits.

The  configuration  bit continuous\_update of  the stepper motor global parameter register (Table 9-1, page 30) must be set to '1' to make sure that the coil current is scaled for v=0 if all motors are at rest.

The current is scaled for v=0 takes place delayed to avoid mechanical step lost due to oscillations of the motor after it has been stopped. The delay time is

```
t_isv0_delay[s] = 255 * ( 32 * 2^ramp_div ) / fCLK[Hz].
```

Important Hints: Due to signed compare of a\_threshold with a\_max , a setting of a\_threshold with a value  greater  than  1023  results  in  using is\_aleat for  current  scaling  if a\_max is  greater  than  1023 during acceleration instead of using is\_agtat for current scaling. For most applications, setting is\_aleat and is\_agtat to the same value and using a lower value for is\_v0 is the best choice.

## 8.10  pmul &amp; pdiv (IDX=%1001)

The stepper motors are driven with a trapezoidal velocity profile, which may become triangular if the maximum velocity is not reached (see Figure 8-1, page 16). Depending on the difference between the target position x\_target and the actual position x\_actual , the ramp generator continuously calculates target velocities v\_target for the pulse generator (see Figure 8-2, page 20). The pulse generator then generates  (micro)  step  pulses  taking  into  account  the  motion  parameter  limits  ( v\_min , v\_max , a\_max ).  With  a  target  velocity  proportional  to  the  difference  of  target  position x\_target and  current position x\_actual ,  the  stepper  motor  approaches  the  target  position.  This  also  works,  if  the  target position is changed during motion. The stepper motor moves to a target position until the difference between the target position x\_target and the current position x\_actual vanishes.

With the right proportionality  factor p ,  target  positions  are  quickly  reached and without overshooting them. The proportionality factor primarily depends on the acceleration limit a\_max and on the two clock divider parameters pulse\_div and ramp\_div . These two separate clock divider parameters- set to the same value for most applications -give an extremely wide dynamic range for acceleration and velocity. These two separate parameters allow reaching very high velocities with very low acceleration.

If the proportionality factor p is set too small, this results in a slow approach to the target position. If set too large, it causes overshooting and even oscillations around the target position. The calculation of the proportionality factor is simple:

The representation of the proportionality factor p by the two parameters p\_mul and p\_div is some kind of a fixed point representation. It is

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Instead  of  direct  storage  of  the  parameters p\_mul and p\_div ,  the  TMC428  stores  two  parameters called pmul and pdiv , with

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

with and

where

<!-- formula-not-decoded -->

The reason why p\_mul ranges from 128 to 255 is, that p is divided by p\_div which is a power of two ranging from 8 to 65536. So, values of p less than 128 can be achieved by increasing p\_div .

Note: The parameters pmul and pdiv share a single address (IDX=%1001, see Table 7-2, page 15). The MSB of p\_mul is fixed set to '1'. So, sending pmul internally sets p\_mul = 128 + pmul . In other words, %10000000 = 128 is ORed as bit vector with the content of the register pmul .

Figure 8-2: Ramp generator and pulse generator

<!-- image -->

The  parameter p has  to  be  calculated  for  a  given  acceleration.  This  calculation  is  not  done  by  the TMC428  itself,  because  this  task  has  to  be  done  only  once  for  a  given  acceleration  limit.  The acceleration  limit  is  a  stepper  motor  parameter,  which  is  usually  fixed  in  most  applications.  If  the acceleration limit  has  to  be  changed  nevertheless,  the  microcontroller  could  calculate  on  demand a pair of p\_mul and p\_div for each acceleration limit a\_max and given ramp\_div and pulse\_div . Also, pre-calculated pairs of p\_mul and p\_div read from a table maybe sufficient.

## 8.11  Calculation of p\_mul and p\_div

The proportionality factor p = p\_mul / p\_div depends on the acceleration limit a\_max and frequency pre-divider  parameters ramp\_div and pulse\_div .  So,  a  pair  of p\_mul / p\_div has  to  be  calculated once for each provided acceleration limit a\_max . There may exist more than one valid pair of p\_mul and p\_div for a given a\_max . To accelerate, the ramp generator accumulates the acceleration value to the actual velocity with each time step. Internally, the absolute value of the velocity is represented by 11+8 = 19 bits, while only the most significant 11 bits and the sign are used as input for the step pulse generator. So, there are 2 11 = 2048 values possible to specify a velocity, ranging from 0 to 2047. The ramp  generator  accumulates a\_max divided  by  2 8 =  256  at  each  time  step  to  the  velocity  during acceleration phases. So, the acceleration from velocity = 0 to maximum velocity = 2047 spans over 2048* 256 / a\_max pulse generator clock pulses. Within that acceleration phase, the pulse generator generates S = ½ * 2048* 256 / a\_max * T steps for the (micro) step unit. The parameter T is the clock divider ratio T = 2 ramp\_div / 2 pulse\_div = 2 ramp\_div - pulse\_div = 2^(ramp\_div-pulse\_div). During acceleration, the velocity  has  to  be  increased  until  the  velocity  limit v\_max is  reached  or  deceleration  is  required  to reach the target position exactly (see Figure 8-1). The TMC428 automatically decelerates, if required using the difference between current position and target position and the proportionality parameter p , which  has  to  be p =  2048  /  S.  With  this,  one  gets  p  =  2048  /    (  (  ½  *  2048*  256  / a\_max )  * 2^(ramp\_div-pulse\_div) ). This expression can be simplified to

<!-- formula-not-decoded -->

To  avoid  overshooting,  the  parameter p\_mul should  be  made  approximately  5%  smaller  than calculated.  Alternatively,  one  can  arrange p reduced  by  an  amount  of  5%.  If  the  proportionality parameter p is too small, the target position will be reached slower, because the slow down ramp starts earlier.  The  target  position  is  approached  with  minimal  velocity v\_min ,  whenever  the  internally calculated  target  velocity  becomes  less  than v\_min .  With  a  good  parameter p the  minimal  velocity v\_min is reached a couple of steps before the target position. With parameter p set a little bit to large and small v\_min overshooting of one step respectively one micro step may occur. Decrementation of the parameter pmul avoids such one-step overshooting.

Note: Changing at least one parameter out of the triple { a\_max , ramp\_div , pulse\_div }  requires recalculation of the parameter pair { pmul, pdiv } to update the associated register if necessary.

Figure 8-3: Proportionality parameter p and outline of velocity profile(s)

<!-- image -->

On first  approach,  to  represent  the  parameter p  =  p\_mul  /  p\_div  =  (128+pmul)  /  2^(3+pdiv)  one chooses a pair of pmul and pdiv that approximates p , with pmul in range 0 ... 127 representing p\_mul in range 128 ... 255 and pdiv one out of {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13} representing p\_div one out of {8, 16 , 32 ,64, 128 , 256, 512, 1024, 2048, 4096, 8192, 16384, 32786, 65536} . There are only 128 * 14 = 1792 pairs of (pmul, pdiv) . So, one can simply try all possible pairs (pmul, pdiv) with a program and choose a matching pair. To find a pair, one calculates p = a\_max / ( 128 * 2^( ramp\_div-pulse\_div ) )

and

<!-- formula-not-decoded -->

and

<!-- formula-not-decoded -->

for each pair (pmul , pdiv) and select one of the pairs satisfying the condition 0.95 &lt; q &lt; 1.0 . So, the value q interpreted  as  a  function q(a\_max,  ramp\_div,  pulse\_div,  pmul,  pdiv) gives  the  quality criterion required. Although q = 1.0 indicates that (pmul , pdiv) perfectly represents the desired p for a given a\_max ,    this  could  cause  overshooting  because  of  finite  numerical  precision.  In  case  of  high resolution microstepping, overshooting of one micro step is negligible in most applications. To avoid overshooting, use pmul-1 instead of the selected pmul or select a pair (pmul, pdiv) with q = 0.95 . The first given source code example 'pmulpdiv.c' showing programming in C language based on this brute force approach. Some conversions of the base present equations help to reduce the calculation effort drastically.

## 8.11.1 Optimized Calculation of p\_mul and p\_div

With the equations above, one can simplify the calculation of the parameters pmul and pdiv using the expression

<!-- formula-not-decoded -->

with

<!-- formula-not-decoded -->

To avoid overshooting, use

<!-- formula-not-decoded -->

with p\_reduction approximately 5% instead of unreduced p . With this, one gets

<!-- formula-not-decoded -->

With this, pmul becomes a function of the parameter pdiv . To find a valid pair { pmul , pdiv } one just has to choose that pair { pmul , pdiv } out of 14 pairs for pdiv = {0, 1, 2, 3, ..., 13}  with pmul within the valid  range  0 pmul 127.  An  example  'pmulpdiv.c'  showing  programming in C language can be found on page 53. This source code can directly be copied from the PDF datasheet file.

## 8.12  lp &amp; ref\_conf &amp; ramp\_mode (rm) (IDX=%1010)

The  bit  called lp (latched  position)  is  a  read  only  status  bit.  The  configuration  words ref\_conf and ramp\_mode are accessed via a common address, because these parameters normally are initialized only once. The configuration bits ref\_conf select the behavior of the reference switches, while the two bits ramp\_mode (rm) select one of the four possible stepping modes.

Table 8-3 - Outline of TMC428 motion modes

| ramp_mode   | mode          | function                                                                           |
|-------------|---------------|------------------------------------------------------------------------------------|
| %00         | RAMP_MODE     | default mode for positioning applications with trapezoidal ramp                    |
| %01         | SOFT_MODE     | similar to RAMP_MODE, but with soft target position approaching                    |
| %10         | VELOCITY_MODE | mode for velocity control applications, change of velocities with linear ramps     |
| %11         | HOLD_MODE     | velocity is controlled by the microcontroller, motion parameter limits are ignored |

The  mode  called RAMP\_MODE is  provided  as  the  default  mode  for  positioning  tasks,  while  the VELOCITY\_MODE is for applications, where stepper motors have to be driven precisely with constant velocity. The SOFT\_MODE is similar to the standard RAMP\_MODE except that the target position is approached exponentially reduced velocity. This feature can be useful for applications where vibrations at  the  target  position  have  to  be  minimized.  The HOLD\_MODE is  provided  for  motion  control applications, where the ramp generation is completely controlled by the microcontroller.

The  TMC428  has  three  reference  switch  inputs  REF1,  REF2,  REF3.  Without  additional  hardware, three reference switches are available. These switches can be used as reference switches and can be used  as  automatic  stop  switches  as  well.  Per  default,  one  reference  switch  input  is  assigned individually to each stepper motor as a left reference switch (see Figure 9-3, page 32). The reference switch input REF3 can alternatively be assigned as the right reference switch of stepper motor number one (see Figure 9-4, page 32). In that configuration a left and a right reference switch is assigned to stepper motor one, a left reference switch is assigned to stepper motor two, and no reference switch is assigned to stepper motor three. The bit named mot1r in the stepper motor global parameter register (rrs=1 &amp; address=%111111) selects one of these configurations. With additional hardware, up to six reference  switches-  a  left  and  a  right  one  assigned  to  each  stepper  motor  -are  supported.  The additional hardware is just a 74HC157, where three of four 2-to-1-multiplexers are used (see Figure 9-5, page 32). The feature of multiplexing is controlled by the bit named refmux in the stepper motor global parameter register (rrs=1 &amp; address=111111).

A  reference  switch  can  be  used  as  an  automatic  stop  switch.  The  reference  switch  indicates  the reference position within a given tolerance. The automatic stop function of the switches can be enabled or  disabled.  Also  a  reference  tolerance  range  (see  register dx\_ref\_tolerance ,  page  27)  can  be programmed, to allow motion within the reference switch active range during reference point search. When  a  reference  switch  is  triggered,  the  actual  position  can  be  stored  automatically.  This  allows precise  determination  of  the  reference  point.  This  is  initiated  by  writing  a  dummy  value  to  register x\_latched (see page 27). The read-only status bit lp (latch position waiting) then indicates that the next change  of  the  selected  reference  switch  will  trigger  latching  the  position x\_actual .  The lp bit  is automatically reset after position latching.

Figure 8-4: Left switch and right switch for reference search and automatic stop function

<!-- image -->

Table 8-4: Reference switch configuration bits (ref\_conf)

| ref_conf mnemonic   | function   | function                                                                                                                                                  |
|---------------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| DISABLE_STOP_L      | 0 :        | Stops a motor if velocity is negative ( v_actual < 0) and the left reference switch becomes active.                                                       |
|                     | 1 :        | Left reference switch is disabled as a an automatic stop switch.                                                                                          |
| DISABLE_STOP_R      | 0 :        | Stops a motor if velocity is positive ( v_actual > 0) and the right reference switch becomes active.                                                      |
|                     | 1 :        | Right reference switch is disabled as an automatic stop switch.                                                                                           |
| SOFT_STOP           | 0 :        | Stopping takes place immediately, motion parameter limits are ignored.                                                                                    |
|                     | 1 :        | Stopping takes place in consideration of motion parameter limits, stops with linear ramp.                                                                 |
| REF_RnL             | 0 :        | The left reference switch controls reference switch functions.                                                                                            |
|                     | 1 :        | The right (not left) reference switch controls reference switch functions.                                                                                |
| lp                  | 0 :        | This is the power-on default of the lp (latched position waiting) bit.                                                                                    |
|                     | 1 :        | x_latched has been initialized by a write access to latch the position on a change of the reference switch. It is set to '0' after a position is latched. |

Note: Definition of the reference switch by the configuration bit REF\_RnL has no effect on the stop function of the reference switches if DISABLE\_STOP\_L='0' respectively DISABLE\_STOP\_R='0' . The bit REF\_RnL (reference switch Right not Left) defines which switch is the reference switch: If set to '1', the right, else (set to '0') the left one is the reference switch.

The  bits  contained  in ref\_conf control  the  semantic  and  the  actions  of  the  reference/stop  switch modes for interrupt generation as explained later. The stepper motor stops if the reference/stop switch, which  corresponds  to  the  actual  driving  direction,  becomes  active.  The  configuration  bits  named DISABLE\_STOP\_L respectively DISABLE\_STOP\_R disable these automatic stop functions. If the bit SOFT\_STOP is  set,  motor  stop  forced by a reference switch is done within motion parameter limits while otherwise stopping is abruptly.

Hint: There  is  a  functional  difference  between  reference  switches  and  stop  switches.  Reference switches are used to determine a reference position for a stepper motor. Stop switches are used for automatic stopping a motor when reaching a limit. The signals of switches are processed via the inputs named REF1 , REF2 , REF3 might be used as automatic stop switches, reference switches, or both.

Table 8-5: lp &amp; ref\_conf &amp; ramp\_mode (rm) data bit positions

<!-- image -->

## 8.13  interrupt\_mask &amp; interrupt\_flags (IDX=%1011)

The TMC428 provides one interrupt register of eight flags for each stepper motor. Interrupt bits are named INT\_&lt;mnemonic&gt; . An interrupt bit can set back to '0' by writing '1' to it. Each interrupt bit can either  be  enabled  ('1')  or  disabled  ('0')  individually  by  an  associated  interrupt  mask  bit  named MASK\_&lt;mnemonic&gt; .  The  interrupt  flags  are  forced  to  '0'  if  the  corresponding  mask  bit  is  disabled ('0'). The bit mapping of the interrupt mask bits and interrupt bits itself is diagrammed in Table 8-7 on page 25. The interrupt out SDO\_C / nINT is set active low - where the interrupt status bit INT is set active high - when at least one interrupt flag of one motor becomes set. The interrupt mask enables or disables each interrupt mask individually. So, if the interrupt status is inactive, nINT is  high ('1') and

INT is low ('0'). The interrupt status is mapped to the most significant bit (31) of each datagram sent back  to  the  µC  (see  Table  6-4,  page  12)  and  it  is  only  available  at  the SDO\_C / nINT pin  of  the TMC428 if the pin nSCS\_C is high.

Demultiplexing of the multiplexed interrupt status signal at the pin SDO\_C / nINT can be done using additional hardware. It is not necessary if the microcontroller always disables its interrupt while it sends a datagram to the TMC428.

Table 8-6: interrupt bit mnemonics

| interrupt bit mnemonic   | function                                                                                             |
|--------------------------|------------------------------------------------------------------------------------------------------|
| INT_POS_END              | stepper motor reached target position                                                                |
| INT_REF_WRONG            | reference switch signal was active outside the reference switch tolerance range ( dx_ref_tolerance ) |
| INT_REF_MISS             | reference switch signal missing at null position                                                     |
| INT_STOP                 | stop forced by reference switch during motion                                                        |
| INT_STOP_LEFT_LOW        | high to low transition of left reference switch                                                      |
| INT_STOP_RIGHT_LOW       | high to low transition of right reference switch                                                     |
| INT_STOP_LEFT_HIGH       | low to high transition of left reference switch                                                      |
| INT_STOP_RIGHT_HIGH      | low to high transition of right reference switch                                                     |

Table 8-7: interrupt register &amp; interrupt mask

<!-- image -->

An interrupt flag is set to '1' if its assigned interrupt condition occurs and the corresponding interrupt mask is set ('1').  Interrupt  flags  are  reset  to  '0'  by  a  write  access  (RW='0')  to  the  interrupt  register address  (IDX=%1011)  with  a  '1'  at  the  position  of  the  bit  to  be  cleared.  Writing  a  '0'  to  the corresponding position  leaves the interrupt flag untouched.

If  an  end  position  is  reached  while  the  interrupt  mask MASK\_POS\_END is  '1',  the  bit  named INT\_POS\_END is set to one. The switches processed via the inputs REF1, REF2, REF3 can be used as stop switches for automatic motion limiting, as reference switches and for both. If a reference switch becomes active out of the reference switch tolerance range- defined by the dx\_ref\_tolerance register -the interrupt flag INT\_REF\_WRONG is set if its interrupt mask bit MASK\_REF\_WRONG is set. The interrupt flag INT\_REF\_MISS is set if the reference switch is inactive at the 0 position and the mask MASK\_REF\_MISS is enabled. The INT\_STOP flag is set, if the reference switch has forced a stop and if  the  interrupt  mask MASK\_STOP is  set.  The INT\_STOP\_LEFT\_LOW flag  is  set  if  the  reference

switch changes from high to low and if the interrupt mask bit MASK\_STOP\_LEFT\_LOW is set. The interrupt flag INT\_STOP\_RIGHT\_LOW is similar to INT\_STOP\_LEFT\_LOW but for the right reference switch. The INT\_STOP\_LEFT\_HIGH indicates that the left reference switch input changes from low to high if the mask MASK\_STOP\_LEFT\_HIGH is set. The INT\_STOP\_RIGHT\_HIGH indicates it for the right reference switch if the mask MASK\_STOP\_LEFT\_HIGH is set.

## 8.14  pulse\_div &amp; ramp\_div &amp; usrs (IDX=%1100)

The frequency of the external clock signal (see  Figure 4-1, page 6, pin CLK )  is  divided  by  32  (see Figure 8-2, page 20, block clk\_div32 ). This clock drives two programmable clock dividers for the ramp generator and for the pulse generator. The pulse generator clock- defining the maximum step pulse rate -is determined by the parameter pulse\_div . The pulse rate R is given by

<!-- formula-not-decoded -->

where f\_clk[Hz] is the frequency of the external clock signal. The parameter velocity is in range 0 to 2047 and represents parameters v\_min , v\_max and absolute values of v\_target and v\_actual .  So, the pulse generator of the TMC428 would generate one step pulse with each pulse generator clock pulse  if  the  velocity  could  be  set  to  2048.  The  full  step  frequency RFS[Hz]  =  R[Hz]  /  2^usrs .  The change R in the pulse rate per time unit (pulse frequency change per second - the acceleration) is given by

R[Hz/s] = f\_clk[Hz] * f\_clk[Hz]  * a\_max / ( 2^(pulse\_div+ramp\_div+29) ).

The constant 29 within the exponent is because 2^29 = 2^5 * 2^5 * 2^8 * 2^11 = 32*32*256*2048, where 32 comes from fixed clock pre-dividers, 256 comes from velocity accumulation clock pre-divider, and  2048  comes  from  velocity  accumulation  clock  divider  programmed  by a\_max .  The  parameter a\_max is in range 0 to 2047. So, the parameter ramp\_div scales the acceleration parameter a\_max , where the parameter pulse\_div scales the velocity parameters. RFS[Hz] = R[Hz] / 2^usrs .

Table 8-8: micro step resolution selection (usrs) parameter

|   usrs |   usrs |   usrs |   [microsteps / full step] | significant DAC bits (controlling current amplitude)   | comment                                |
|--------|--------|--------|----------------------------|--------------------------------------------------------|----------------------------------------|
|      0 |      0 |      0 |                          1 | -                                                      | full step (constant current amplitude) |
|      0 |      0 |      1 |                          2 | 5 (MSB)                                                | half step                              |
|      0 |      1 |      0 |                          4 | 5 (MSB), 4                                             | microstepping                          |
|      0 |      1 |      1 |                          8 | 5 (MSB), 4, 3                                          | microstepping                          |
|      1 |      0 |      0 |                         16 | 5 (MSB), 4, 3, 2                                       | microstepping                          |
|      1 |      0 |      1 |                         32 | 5 (MSB), 4, 3, 2, 1                                    | microstepping                          |
|      1 |      1 |      0 |                         64 | 5 (MSB), 4, 3, 2, 1, 0 (LSB)                           | microstepping                          |
|      1 |      1 |      1 |                         64 | 5 (MSB), 4, 3, 2, 1, 0 (LSB)                           | microstepping                          |

The angular velocity of a stepper motor can be calculated based on the full step frequency Rfs[Hz] for a given number of full steps per rotation. Similar, the angular acceleration of a stepper motor can be calculated  based  on  the  change  of  full  step  frequency  per  second RFS[Hz]. The  three  bit  wide parameter usrs (micro ( µ ) s tep r esolution s election, where u represents µ ) determines the micro step resolution for its associated stepper motor according to Table 8-8. There is an individual set of 6 DAC bits provided for each of the two phases (coils) for current control to provide up to 64 micro steps per full  step.  Depending  on  the  micro  step  resolution,  a  subset  of  6  DAC  bits  is  significant.  Using  full stepping, the current amplitude is constant for both phases (coils) of a stepper motor and the polarity of one phase (coil) changes with each full step. The micro step counters are initialized to 0 during poweron  reset.  With  each  micro  step  an  associated  counter  accumulates  the  programmed  micro  step resolution value usrs .

Generally, the number of steps S during linear acceleration a to a velocity v is given by S = ½ * v^2 / a . With v = R[Hz] and a = R[Hz/s] one gets S = ½ * velocity^2 / a\_max * 2^ramp\_div / 2^pulse\_div / 2^3. The number of full steps SFS is SFS = S / 2^usrs.

Important Hint: Changing pulse\_div in VELOCITY\_MODE or in HOLD\_MODE might force an internal micro step (with micro step resolution defined by usrs )  depending on the actual micro step position. This  behavior  can  be  observed  especially  when  the  motor  is  at  rest  in  VELOCITY\_MODE  or  in HOLD\_MODE.  In  RAMP\_MODE  this  does  not  occur.  So, pulse\_div should  only  be  changed  in RAMP\_MODE.

## 8.15  dx\_ref\_tolerance (IDX=%1101)

The switches processed via the inputs REF1, REF2, REF3 can be used as stop switches for automatic motion limiting and as reference switches defining a reference position for the stepper motor. To allow the motor to drive near the reference point, it is possible to exclude a motion range of steps from the stop switch function. The parameter dx\_ref\_tolerance disables automatic stopping by a switch around the  origin  (see  Figure  8-4,  page  23).  To  use  the dx\_ref\_tolerance fare  from  the  origin,  the  actual position  has  to  be  suitable  adapted,  e.g.  to  use  it  for  a  left  side  reference  switch.  Additionally,  the parameter dx\_ref\_tolerance affects interrupt conditions as described before (section 8.13, page 24).

## 8.16  x\_latched (IDX=%1110)

This read-only register stores the actual position read from the register x\_actual if the reference switch state changes. The reference switch is defined by the bit REF\_RnL of the configuration register lp &amp; ref\_conf &amp; ramp\_mode .  Writing a dummy value to the (read-only) register x\_latched initializes  the position storage mechanism. Then the actual position is saved with the next rising edge or falling edge signal  of  the  reference  switch  depending  on  the  actual  motion  direction  of  the  stepper  motor.  The actual position is latched when the switch defined as the reference switch by the REF\_RnL bit changes (see Table 8-4: Reference switch configuration bits (ref\_conf), page 23). The status bit lp signals, if latching  of  a  position  is  pending.  An  event  at  the  reference  switch  associated  to  the  actual  motion direction takes effect only during motion (when v\_actual 0).

## 8.17  Unused Address (IDX=%1111)

This register address (idx=%1111) within each stepper motor register block {smda=%00, %01, %10} is unused.  Writing  to  this  register  has  no  effect.  However,  access  should  be  avoided,  because  this address space may be used for future devices. Reading this register gives back the actual status bits and 24 data bits set to '0'.

## 9 Global Parameter Registers

The registers addressed by RRS=0 with SMDA=%11 are  global  parameter registers. To emphasize this difference, the JDX is used as index name instead of IDX .

## 9.1 datagram\_low\_word (JDX=%0000) &amp; datagram\_high\_word (JDX=%0001)

The TMC428 stores datagrams sent back from the stepper motor driver chain with a total length of up to 48 bits. The register datagram\_low\_word holds the lower 24 bits of this 48 bits and the register datagram\_high\_word holds the higher 24 bits of the 48 bits. These registers together form a 48 bit shift register, where the data from pin SDI\_S are shifted left into it with each datagram bit sent to the stepper motor driver chain via the signal SDO\_S . A write to one of these read-only registers initializes them, to update their contents with the next datagram received from the drivers chain.

Figure 9-1: Example of status bit mapping for a chain of three TMC246 or TMC249

<!-- image -->

The CDGW (= C over D ata G ram W aiting,  see  section  9.3  on  page  28)  status  bit  is  set  to  1  until  a datagram is received from the stepper motor driver chain. For read out of datagram\_low\_word and datagram\_high\_word the CDGW status bit is important to be able to detect when a datagram transfer has been completed after an initial write to one of the two registers. The fact that the CDGW is formed by  logical  OR  between  the  cover  datagram  status  and  the  status  of  the datagram\_low\_word and datagram\_high\_word causes  no  restriction  concerning  its  usage.  This  is  because  a  write  to  the cover\_datagram register forces sending a datagram which results in an update of the datagram\_low\_word and datagram\_high\_word registers. One the other side, if the cover\_datagram mechanism is not used, the CDGW status bit is exclusively available as the status signal of datagram\_low\_word and datagram\_high\_word .

## 9.2 cover\_pos &amp; cover\_len (JDX=%0010)

The  TMC428  provides  direct  sending  of  datagrams  from  the  microcontroller  to  the  stepper  motor drivers. This may be necessary for initialization of different driver chips and useful for reconfiguration purposes. A datagram with up to 24 bits can be transferred to the stepper motor driver by covering one datagram sent to the driver chain. The parameter cover\_pos defines the position of the first datagram bit  to  be  covered  by  the cover\_datagram (JDX=%0011) of  length cover\_len .  In  contrast  to  the datagram  numbering  order  of  bits,  the  position  count  for  the  cover  datagram  starts  with  0.  The cover\_datagram bits indexed from cover\_len-1 to 0 cover the datagram sent to the drivers chain.

Important Note: A  step  bit  used  to  control  stepper  motor  drivers  must  not  be covered while a motor is running.

This is because the coverage of a step bit would cause losing that associated step if the step bit is active. The TMC428 stores cover\_pos+1 instead of cover\_pos due to internal requirements. So, one writes cover\_pos but reads back cover\_pos+1 . The cw (= cover waiting) bit available by read out of this  register.  The CDGW status  bit  (see  section  9.3)  is  the  result of logical OR between cw and an internal signal that indicates the status of the stepper motor serial driver chain send register.

## 9.3 cover\_datagram (JDX=%0011)

This register holds up to 24 bit of a cover datagram. A cover datagram covers the next datagram sent to the stepper motor driver chain. If no datagrams are sent to the drivers chain, the cover datagram is sent immediately if a cover datagram is written into this register. The status of the cover datagram is mapped to the status bits sent back with each datagram  (see Table 6-4, page 12, CDGW status bit). This status bit is also available for readout of cover\_pos &amp; cover\_len (JDX=%0010), where CDGW is the most significant data bit (23).

Figure 9-2: Cover datagram example

<!-- image -->

The CDGW (=  Cover  DataGram  Waiting)  status  bit  has  to  be  checked  before  writing  a  new  cover datagram into this register, to be sure that no cover datagram is waiting to be processed. The CDGW bit is set to 1 until the cover\_datagram is sent. The CDGW status bit is also be used as a status bit for the datagram\_low\_word and datagram\_high\_word (see  section  9.1  on  page  27).  An example for the cover datagram is given in Figure 9-2 on page 28. In that example 7 bits cover 7 bits of a 48 bit datagram from bit number 39 to bit number 46. A cover datagram with length=0 forces sending an unchanged datagram to the driver chain.

## 9.4 Unused Addresses (JDX={%0011, ..., %0111, %1001, ..., %1101})

There are unused addresses within the address range of the global parameter registers. Access to these addresses has no effect. How ever, access should be avoided, because this address space may be used for future devices.

## 9.5 power\_down (JDX=%1000)

A write to the register address named power\_down sets the TMC428 into the power down mode until it  detects a falling edge at the pin nSCS\_C .    During power down, all internal clocks are stopped, all outputs remain stable, and all register contents are preserved.

## 9.6 Reference Switches l3 &amp; r3 &amp; l2 &amp; r2 &amp; l2 &amp; r1 (JDX=%1110)

The current state of all  reference switches- demultiplexed internally by the TMC428 if left and right reference switches are used -can be read from this read-only register. The bit named continuous\_update of the Stepper Motor Global Parameter Register (JDX=%1111) is  important for reading out of reference switches as explained below.

## 9.7 Stepper Motor Global Parameter Register (JDX=%1111)

This register holds different configuration bits for the stepper motor driver chain. The absolute address (RRS &amp; ADDRESS) of the stepper motor global parameter register is %01111110 = $7E (see Table 7-2, page 15, and Table 9-1, page 30). For the datagram configuration the number of stepper motor drivers  is  important.  It  is  represented  by  the  parameter LSMD ( L ast S tepper M otor D river).  The parameter LSMD has  to  be  set  to  %00  for  one  stepper  motor  driver,  %01  for  two  stepper  motor drivers, and %10 for three stepper motor drivers (see Table 9-2).

Table 9-1: Stepper motor global parameter register

<!-- image -->

Table 9-2: Global parameter LSMD (last stepper motor driver)

<!-- image -->

| LSMD     | number of stepper motor drivers   |
|----------|-----------------------------------|
| %00 (=0) | 1                                 |
| %01 (=1) | 2                                 |
| %10 (=2) | 3                                 |
| %11 (=3) | NOT ALLOWED                       |

Five  bits  are  used  to  control  signal  polarities.  The  polarity  of  the  selection  signal nSCS\_S for  the stepper motor driver chain is controlled by the polarity bit polarity\_nscs\_s. The nSCS\_S signal is low active if this bit is set to '0' and it is high active, if this bit is set to '1'.

The polarity of the stepper motor driver chain clock signal SCK\_S is defined by the bit polarity\_sck\_s . If  this  bit  is  '0',  the  clock  polarity  is  according  to  Figure  6-3  on  page  10.  The  clock signal SCK\_S is inverted if it is set to '1'. The bit polarity\_PH\_AB defines the polarity of the phase bits for the stepper motor.  Inverting  this  bit  changes  the  rotation  direction  of  the  associated  stepper  motor.  The  bit polarity\_FD defines the polarity of the fast decay controlling bit. If it is '0' fast decay is high active and if it is '1' fast decay is low active.  The bit named polarity\_DAC\_AB defines the polarity of the DAC bit vectors. If it is '0' the DAC bits are high active and if it is '1' the DAC bits are inverted - low active.

The bit named csCommonIndividual defines either if a single chip select signal nSCS\_S is used in common for all stepper motor driver chips ( TMC236, TMC239, TMC246, TMC249 ) or three chip select signals nSCS\_S , nSCS2 , nSCS3 are used to select the stepper motor driver chips individually. This feature is useful only for the TMC428 within the larger packages, where the two additional chip select signals nSCS2 , nSCS3 are available (see Figure 2-2). The one common chip select signal nSCS\_S is used if the bit named csCommonIndividual='0' . The polarity control bit for the nSCS\_S signal must be set to polarity\_nscs\_s='0' if csCommonIndividual='1' . The chip select polarity is always negative for three individual chips select signals.

The eight bits named clk2\_div determine the clock frequency of the stepper motor driver chain clock signal SCK\_S .  The  frequency f\_sck\_s[Hz] of  the  stepper  motor driver chain clock signal SCK\_S is f\_sck\_s[Hz]  = f\_clk[Hz] / ( 2 * (clk2\_div+1) ) . A value of 255 (%11111111, $FF) is the upper limit for the parameter clk2\_div .  With clk2\_div = 255 the  clock frequency of SCK\_S is  at  minimum. Due to internal processing, a value of 7 (%00000111, $07) is  the  lower limit for the clock divider parameter

clk2\_div . With clk2\_div = 7 the clock frequency of SCK\_S is at maximum. A value of clk2\_div = 7 is sufficient for the drivers TMC236 / TMC239 / TMC246 / TMC249.

Note: For most applications, a setting of clk2\_div = 7 is recommended.

For  smooth  motion  even  at  high  step  frequencies  the  frequency f\_sck\_s[Hz] of  the  clock  signal SCK\_S should  be  as  high  as  possible  that  is  compatible  with  the  used  drivers.  The  frequency f\_sck\_s[Hz] of SCK\_S does  not  become  higher  for clk2\_div  &lt;  7 ,  but  the  signal SCK\_S becomes asymmetric with respect to its duty cycle. An asymmetric duty cycle may cause malfunction of stepper motor  drivers,  where  stepper  motor  driver  chips  may  work  correctly  in  particular  at  low  clock frequencies of CLK . So, the range of clk2\_div is {7, 8, 9, . . ., 253, 254, 255} .

The default value after power-on reset is clk2\_div = 15 . The clock frequency f\_sck\_s[Hz] of SCK\_S should be set as high as possible by choosing the parameter clk2\_div in  consideration of the data clock  frequency  limit  defined  by  the  slowest  stepper  motor  driver  chip  of  the  daisy  chain.  If  step frequencies reach the order of magnitude of the maximum datagram frequency- determined by the clock frequency of SCK\_S and by the datagram length -the step frequencies may jitter, which is an inherent  property  of  that  serial  communication.  Up  to  which  level  variations  of  step  frequencies  are acceptable depends on the application. Using microstepping driver chips- as provided by TMC236 / TMC239 / TMC246 / TMC249 driver chips -avoids this problem.

The datagram frequency is f\_datagram[Hz] = f\_sck\_s[Hz] / ( 1 + datagram\_length[bit] + 1). This formula is an approximation for the upper limit. For clk2\_div = 7 the processing of the NxM bit requires 1 SPI clock cycle, where the processing of the NxM bit requires 1.5 SPI clock cycles for clk2\_div &gt; 7. So,  for  a  chain  of  three  drivers  with  12  bit  datagram  length  each,  the  upper  limit  of  the  datagram frequency is f\_datagram[Hz] = f\_sck\_s[Hz] / ( 1 + 3*(12+1) + 1)  = f\_sck\_s[Hz] / 41 .

The TMC428 sends datagrams to the stepper motor driver chain on demand only. No datagrams are send  if continuous\_update is  '0'  during  rest  periods.  This  reduces  the  communication  traffic.  The multiplexed  reference  switch  inputs  are  processed  while  datagrams  are  sent  to  the  stepper  motor driver chain only. If reference switches are configured to stop associated stepper motors automatically, the configuration bit continuous\_update must be set to '1' to force periodic sending of datagrams to the stepper motor driver chain and to sample the reference switches periodically, if all stepper motors are  at  rest.  With  this,  a  stepper  motor  restarts  if  its  associated  reference  switch  becomes  inactive. Without continuous update, a stepper motor stopped by a reference switch would stay at rest until a datagram is sent to the stepper motor driver chain, if its reference switch is inactive. Then, the relevant stepper motor can be moved into  the direction opposite to the reference switch or it can be moved in both directions by disabling the automatic stop function. The continuous update datagram frequency is f\_cupd\_s[Hz] = f\_clk[Hz] * ( 1 / 2^ramp\_div\_0 + 1 / 2^ramp\_div\_1 + 1 / 2^ramp\_div\_2 ) / 32768 where ramp\_div\_0, ramp\_div\_1, ramp\_div\_2 are the ramp\_div settings of the three stepper motors.

The bit continuous\_update is also important for the automatic coil current scaling (see page 18). This bit must be set to '1' to be sure that the coil current is also scaled if all motors are at rest.

<!-- image -->

Figure 9-3: Reference switch configuration 'left-side-only' for mot1r=0 (and refmux=0)

Figure 9-4: Reference switch configuration 'two-one-null' for mot1r=1 (and refmux=0)

<!-- image -->

Figure 9-5: Reference switch multiplexing with 74HC157 (refmux=1)

<!-- image -->

Table 9-3: Association of reference inputs depending on configuration bits refmux &amp; mot1r

| refmux   | mot1r   | motor 1     | motor 1      | motor 2     | motor 2      | motor 3     | motor 3      |
|----------|---------|-------------|--------------|-------------|--------------|-------------|--------------|
| refmux   | mot1r   | left switch | right switch | left switch | right switch | left switch | right switch |
| 0        | 0       | REF1        | %            | REF2        | %            | REF3        | %            |
| 0        | 1       | REF1        | REF3         | REF2        | %            | %           | %            |
| 1        | 0       | REF1_LEFT   | REF1_RIGHT   | REF2_LEFT   | REF2_RIGHT   | REF3_LEFT   | REF3_RIGHT   |
| 1        | 1       | REF1_LEFT   | REF1_RIGHT   | REF2_LEFT   | REF2_RIGHT   | REF3_LEFT   | REF3_RIGHT   |

If continuous\_update is '1', internal reference switch bits are updated periodically, even if all stepper motors are at rest. Additionally, the chip select signal nSCS\_S for  the  stepper motor driver chain is also the control signal for a multiplexer in case of using the reference switch multiplexing option (see Figure 9-5). So, the continuous\_update must be set to '1' if automatic stop by reference switches is enabled, if six multiplexed reference switches are used, and to get the states of reference switches while all stepper motors are at rest.

The bit named refmux must be set to '1' to enable reference switch multiplexing (see Figure 9-5). For the  two  variants  TMC428-PI24  and  TMC428-DI20,  the  reference  switch  multiplexing  also  works  for csCommonIndividual ='1' using three separate driver selection signals (nSCS\_S, nSCS2, nSCS3) if the signal nSCS\_S is connected to the multiplexer 74HC157 according to Figure 9-8.

If reference switch multiplexing is enabled, mot1r is ignored. With refmux set to '0', the association of the reference switch inputs REF1 , REF2 , REF3 depends on the setting of the configuration bit mot1r . The  power-on  default  value  of mot1r is  '0'.  With  that  default  value, REF1 is  associated  to  the  left reference switch of stepper motor #1, REF2 is associated to the left reference switch of stepper motor #2, and REF3 is associated to the left reference switch of stepper motor #3.

If mot1r is set to '1' the input REF1 is also associated with the left reference switch of stepper motor #1. REF2 is  also associated to the left reference switch of stepper motor #2. But, the input REF3 is associated  to  the right  reference  switch of  stepper motor  #1 and  no  reference  switch  input  is associated to stepper motor number#3 (see Figure 9-4). After power-on-reset, per default refmux=0 and mot1r=0 selects  the  single  reference  switch  configuration  outlined  in  Figure  9-3,  where  each reference switch input ( REF1 , REF2 , REF3 ) is assigned individually to one each stepper motor as the left reference switch.

## 9.8 Triple Switch Configuration

The programmable tolerance range around the reference switch position is useful for a triple switch configuration, as outlined in Figure 9-6. In that configuration two switches are used as automatic stop switches, and one additional switch is used as the reference switch between the left stop switch and the  right  stop  switch.  The  left  stop  switch  and  the  reference  switch  are  wired  or.  After  successful reference search, programming a tolerance range into the register dx\_ref\_tolerance allows to disable automatic stop within the range of the reference switch only.

Figure 9-6: Triple switch configuration 'left stop switch - reference switch - right stop switch'

<!-- image -->

Figure 9-7: Reference search

<!-- image -->

## 9.9 Reference Search

The goal of the reference search is to determine the position xref of  a  reference  switch  (see  Figure 9-7). Due to mechanical inaccuracy of switches, the reference switch is active within a range x1 &lt; xref &lt; x2 ,  where x 1 and x 2 may vary. If  the  traveler  is  within  the  range x1 &lt; xtraveler &lt; x2 before  reference search, it is necessary to go outside this range, because the associated reference switch is active. A dummy write access to x\_latched initializes the position latch register. Then, with the traveler within the  range x2 &lt; xtraveler &lt; xmax and  the  initialized  register x\_latched ,  the  position x2 can  simply  be determined by motion with a target position x\_target set to -xmax . When reaching the position x2 , this position is latched automatically. With stop switch enabled, the stepper motor automatically stops if the position x2 is  reached.  Then,  the dx\_ref\_tolerance has  to  be  set,  so  that  motion  within  the  active reference switch range x1 &lt; xref &lt; x2 is  allowed and to move the traveler to a position xtraveler &lt; x1 if desired. Then the register x\_latched has to be initialized again to latch the position x1 by a motion to a target position xtraveler &lt; x1 . When the positions x1 and x2 are determined the reference position xref = ( x1 + x2 ) / 2 can be set. Finally, one should move to the target position x\_target = xref and set x\_target := 0 and x\_actual := 0 when reached.

## 9.10  Simultanous Start of up to Three Stepper Motors

Starting stepper motors simultaneously can be acheved by sending successive datagrams starting the stepper motors. If the delay between those datagrams is of the magnitude of some microseconds, the stepper  motors  can  be  considered  as  started  simultaneously.  Feeding  the  reference  switch  signals through or gates (see Figure 9-8) allows exact simultaneous start of the stepper motors under software control.

Figure 9-8: Reference switch gateing for exact simultanous stepper motor start

<!-- image -->

## 10 RAM Address Partitioning and Data Organization

The on-chip RAM capacity is 128 x 6 bit. These 128 on-chip RAM cells of 6 bit width are addressed via 64 addresses of 2 x 6 bit (see Table 10-1). So, from the point of view of addressing the on-chip RAM via datagrams, the address space enfolds 64 addresses of 24 bit wide data, where only 2 x 6 = 12 bits are  relevant.  These  64  addresses  are  partitioned-  selected  by  the RRS (Register  RAM  Select, datagram  bit  31)-  into  two  address  ranges  of  32  addresses.  The  registers  of  the  TMC428  are addressed  with  RRS='0'.  The  on-chip  RAM  is  addressed  with  RRS='1'.  The  64  on-chip  RAM addresses are partitioned into two separate ranges by the most significant address bit of the datagram (bit 30).

The first 32 addresses are provided for the configuration of the serial stepper motor driver chain. Each of these 32 addresses stores two configuration words, composed of the so called NxM ( N e x t M otor) bit together with the 5 bit wide primary signal code. While sending a datagram, the primary signal code words are read internally beginning with the first address of the driver chain datagram configuration memory range. Each primary signal code word selects a signal provided by the micro step unit. If the NxM bit is '1' an internal stepper motor addressing counter is incremented. If this internal counter is equivalent to the LSMD (last  stepper motor driver) parameter, the datagram transmission is finished and the counter is preset to %00 for the next datagram transmission to the stepper motor driver chain.

The second 32 addresses are provided to store the micro step table, which usually is a quarter sine wave  period  as  a  basic  approach  or  the  quarter  period  of  a  periodic  function  optimized  for microstepping of a given stepper motor type. Different stepper motors may step with different micro step resolutions, but the micro step look up table (LUT) is the same for all stepper motors controlled by one TMC428. Any quarter wave period stored in the micro step table is expanded automatically to a full period wave together with its 90° phase shifted wave.

Table 10-1: Partitioning of the on-chip RAM address space

<!-- image -->

## 11 Stepper Motor Driver Datagram Configuration

A number of control signals is required to drive 2-phase stepper motors. The serial driver interface forms  the  link  between  the  TMC428  an  the  stepper  motor  driver  chain.  The  stepper  motor  driver datagram configuration simply defines the order of the control signals serially sent from TMC428 to the stepper motor driver chain. To define the serial order of the control signals, so called primary signal codes  have  to  be  written  into  the  stepper  motor  driver  datagram  configuration  area  of  the  on-chip configuration RAM of the TMC428.

Which control signals are required in a given application, depends on the choice of stepping mode- full step,  half  step,  micro  step  -and  on  additional  options  depending  on  the  stepper  motor  driver  chips used. So, the TMC428 primarily provides a full set of control signals individually for each of the up to three  stepper  2-phase  stepper  motors  respectively  stepper  motor  driver  chips  of  the  daisy  chain. Mnemonics for primary signal codes are given in Table 11-1. Names of these signals may differ to the signal  names  of  the  used  stepper  motor  drivers.  Figure  11-1  on  page  36  outlines  the  principle  of connecting the control signals- internally provided by the TMC428 as parallel signals -with the signals used to control the digital part of a stepper motor driver.

<!-- image -->

Figure 11-1: Serially transmitted control and status signals between TMC428 and driver chain

| MNEMONIC   | PRIMARY SIGNAL CODE   | PRIMARY SIGNAL CODE   |                      |      |
|------------|-----------------------|-----------------------|----------------------|------|
| MNEMONIC   | hex                   | bin                   | FUNCTION             |      |
| DAC_A_0    | $00                   | %00000                | DAC A, bit 0 (LSB)   | COIL |
| DAC_A_1    | $01                   | %00001                | DAC A, bit 1         | COIL |
| DAC_A_2    | $02                   | %00010                | DAC A, bit 2         | COIL |
| DAC_A_3    | $03                   | %00011                | DAC A, bit 3         | COIL |
| DAC_A_4    | $04                   | %00100                | DAC A, bit 4         | COIL |
| DAC_A_5    | $05                   | %00101                | DAC A, bit 5 (MSB)   | COIL |
| PH_A       | $06                   | %00110                | phase polarity bit A | COIL |
| FD_A       | $07                   | %00111                | fast decay bit A     | COIL |
| DAC_B_0    | $08                   | %01000                | DAC B, bit 0 (LSB)   | COIL |
| DAC_B_1    | $09                   | %01001                | DAC B, bit 1         | COIL |
| DAC_B_2    | $0A                   | %01010                | DAC B, bit 2         | COIL |
| DAC_B_3    | $0B                   | %01011                | DAC B, bit 3         | COIL |
| DAC_B_4    | $0C                   | %01100                | DAC B, bit 4         | COIL |
| DAC_B_5    | $0D                   | %01101                | DAC B, bit 5 (MSB)   | COIL |
| PH_B       | $0E                   | %01110                | phase polarity bit B | COIL |
| FD_B       | $0F                   | %01111                | fast decay bit B     | COIL |
| Zero       | $10                   | %10000                | constant '0'         | COIL |

Table 11-1: Primary signal codes

| One                                                   | $11   | %10001   | constant '1'                                          |
|-------------------------------------------------------|-------|----------|-------------------------------------------------------|
| Direction                                             | $12   | %10010   | 0 : up / 1 : down resp. counter clockwise / clockwise |
| Step                                                  | $13   | %10011   | step bit for step/direction control of drivers        |
| UNUSED (these codes might be used for future devices) | $14   | %10100   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $15   | %10101   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $16   | %10110   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $17   | %10111   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $18   | %11000   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $19   | %11001   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $1°   | %11010   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $1B   | %11011   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $1C   | %11100   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $1D   | %11101   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $1E   | %11110   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |
| UNUSED (these codes might be used for future devices) | $1F   | %11111   | '1' for TMC428-I, TMC428-A, TMC428-PI24, TMC428-DI20  |

The  control  signals  for  each  of  the  two  coils  of  a  2-phase  stepper  motor  are  6  bits  for  the  DAC controlling the current of a coil, a phase polarity bit, and a fast decay bit for those stepper motor driver chips with a fast decay feature for the coil current. These signals are available individually for each coil (COIL A and COIL B).  Constant configuration bits named Zero and One are provided. Additionally, step  and  direction  bits  are  available.  One  unique  5  bit  code  word-  named  primary  signal  code  -is assigned to each primary control signal (see Table 11-1).

The micro step unit (including sequencer) provides the full set of control signals for three stepper motor driver  chips.  A  subset  of  these  control  signals  is  selected  by  the  stepper  motor  driver  datagram configuration, which is stored within the first 32 addresses representing 64 values of the on-chip RAM (see  Table  10-1,  page  35).  The  stepper  motor  drivers  are  organized  in  a  daisy  chain.  So  the addressing of the stepper motor driver chips within the daisy chain is by its position.

As mentioned before, the TMC428 sends datagrams to the stepper motor driver chain on demand. To guarantee  the  integrity  of  each  datagram  sent  to  the  stepper  motor  driver  chain,  the  status  of  all primary control signals is buffered internally before sending. Afterwards, the transmission starts with selection  of  the  buffered  primary  control  signals  of  the  first  motor  ( smda =%00) by reading the first primary  signal  code  word  (even  data  word  at  on-chip  RAM  address  %00000)  from  on-chip configuration  RAM  area.  The  primary  signal  codes  select  the  primary  signals  provided  for  the  first stepper motor. The first stepper motor is addressed until the NxM (next motor) bit is read from on-chip configuration RAM. The stepper motor driver address is incremented with each NxM='1' as long as the current  stepper  motor  driver  address  is  below  the  value  set  by  the  parameter LSMD (last  stepper motor driver).  If  the  stepper  motor  driver  address  is  equivalent  to  the LSMD parameter, a NxM='1' indicates the completion of the transmission. With that, the stepper motor driver address counter of the serial interface is reinitialized to %00 and the unit waits for the next transmission request.

So, the order of primary signal codes in the on-chip RAM configuration area determines the order of datagram bits for the stepper motor driver chain, whereas the prefixed NxM bit determines the stepper motor driver positions. If no NxM bit with a value of '1' is stored within the on-chip RAM, the TMC428 will send endlessly. So, the on-chip RAM has to be configured first. After power-on reset, the registers of the TMC428 are initialized in a way, that no transmission of datagrams to the motor driver chain is required.  Access  to  on-chip  RAM  is  always  possible,  also  during  transmission  of  datagrams  to  the driver chain.

## 11.1  Initialization of on-chip-RAM by µC after power-on

All  registers  are  initialized  by  the  automatic  power-on  reset.  The  registers  are  initialized,  and  the stepper  motors  are  at  rest.  The  on-chip  RAM  is  not  initialized  by  the  power-on  reset.  Writing  to registers may involve action of the stepper motor units initiated by the TMC428 resulting in sending datagrams to the stepper motor driver chain. Those datagrams have a random power-on configuration of the on-chip-RAM.  So, before trying to move a motor, the on-chip RAM must be initialized first.

## 11.2  An Example of a Stepper Motor Driver Datagram Configuration

The following example demonstrates, how to configure the datagram and shows what has to be stored within the on-chip RAM to represent the desired configuration. That example refers to a driver chain of three  TRINAMIC  stepper  motor  drivers  of  type  TMC236,  TMC239,  TMC246,  TMC249.  From  the TMC428 datagram configuration point of view, there is no difference between these drivers. All these drivers have a serial interface of 12 bits length. The configuration is as follows. For the first and the second stepper motor driver of the chain the fast decay control bit (FD\_A, FD\_B) is fixed to '0'. For the third driver the fast decay control bit are used.  The corresponding content of the configuration on-chip RAM  is  outlined  in  Table  11-2.  The  sequence  to  be  sent  to  the  TMC428  for  this  configuration  is outlined in Table 11-3.

Hint: The stepper motor driver datagram configuration can be accessed at any time without conflict, e.g. to changed between a configuration using fast decay versus a configuration where fast decay is disabled.

Table 11-2: Datagram example and RAM contents for three stepper motor driver chain

|   position within datagram | driver              |   NxM bit | TMC428 signal code   | RAM address   | RAM data   | TMC428 mnemonic of primary signal   | TMC23x / TMC24x Bit Name   |
|----------------------------|---------------------|-----------|----------------------|---------------|------------|-------------------------------------|----------------------------|
|                          0 | driver#1 (SMDA=%00) |         0 | $10                  | $00           | $10        | Zero                                | MDA                        |
|                          1 | driver#1 (SMDA=%00) |         0 | $05                  | $01           | $05        | DAC_A_5                             | CA3                        |
|                          2 | driver#1 (SMDA=%00) |         0 | $04                  | $02           | $04        | DAC_A_4                             | CA2                        |
|                          3 | driver#1 (SMDA=%00) |         0 | $03                  | $03           | $03        | DAC_A_3                             | CA1                        |
|                          4 | driver#1 (SMDA=%00) |         0 | $02                  | $04           | $02        | DAC_A_2                             | CA0                        |
|                          5 | driver#1 (SMDA=%00) |         0 | $06                  | $05           | $06        | PH_A                                | PHA                        |
|                          6 | driver#1 (SMDA=%00) |         0 | $10                  | $06           | $10        | Zero                                | MDB                        |
|                          7 | driver#1 (SMDA=%00) |         0 | $0D                  | $07           | $0D        | DAC_B_5                             | CB3                        |
|                          8 | driver#1 (SMDA=%00) |         0 | $0C                  | $08           | $0C        | DAC_B_4                             | CB2                        |
|                          9 | driver#1 (SMDA=%00) |         0 | $0B                  | $09           | $0B        | DAC_B_3                             | CB1                        |
|                         10 | driver#1 (SMDA=%00) |         0 | $0A                  | $0A           | $0A        | DAC_B_2                             | CB0                        |
|                         11 | driver#1 (SMDA=%00) |         1 | $0E                  | $0B           | $2E        | PH_B                                | PHB                        |
|                         12 |                     |         0 | $10                  | $0C           | $10        | Zero                                | MDA                        |
|                         13 | driver#2 (SMDA=%01) |         0 | $05                  | $0D           | $05        | DAC_A_5                             | CA3                        |
|                         14 | driver#2 (SMDA=%01) |         0 | $04                  | $0E           | $04        | DAC_A_4                             | CA2                        |
|                         15 | driver#2 (SMDA=%01) |         0 | $03                  | $0F           | $03        | DAC_A_3                             | CA1                        |
|                         16 | driver#2 (SMDA=%01) |         0 | $02                  | $10           | $02        | DAC_A_2                             | CA0                        |
|                         17 | driver#2 (SMDA=%01) |         0 | $06                  | $11           | $06        | PH_A                                | PHA                        |
|                         18 | driver#2 (SMDA=%01) |         0 | $10                  | $12           | $10        | Zero                                | MDB                        |
|                         19 | driver#2 (SMDA=%01) |         0 | $0D                  | $13           | $0D        | DAC_B_5                             | CB3                        |
|                         20 | driver#2 (SMDA=%01) |         0 | $0C                  | $14           | $0C        | DAC_B_4                             | CB2                        |
|                         21 | driver#2 (SMDA=%01) |         0 | $0B                  | $15           | $0B        | DAC_B_3                             | CB1                        |
|                         22 | driver#2 (SMDA=%01) |         0 | $0A                  | $16           | $0A        | DAC_B_2                             | CB0                        |
|                         23 |                     |         1 | $0E                  | $17           | $2E        | PH_B                                | PHB                        |
|                         24 | driver#3 (SMDA=%10) |         0 | $07                  | $18           | $07        | FD_A                                | MDA                        |
|                         25 |                     |         0 | $05                  | $19           | $05        | DAC_A_5                             | CA3                        |
|                         26 |                     |         0 | $04                  | $1°           | $04        | DAC_A_4                             | CA2                        |
|                         27 |                     |         0 | $03                  | $1B           | $03        | DAC_A_3                             | CA1                        |
|                         28 |                     |         0 | $02                  | $1C           | $02        | DAC_A_2                             | CA0                        |
|                         29 |                     |         0 | $06                  | $1D           | $06        | PH_A                                | PHA                        |
|                         30 |                     |         0 | $0F                  | $1E           | $0F        | FD_B                                | MDB                        |
|                         31 |                     |         0 | $0D                  | $1F           | $0D        | DAC_B_5                             | CB3                        |
|                         32 |                     |         0 | $0C                  | $20           | $0C        | DAC_B_4                             | CB2                        |
|                         33 |                     |         0 | $0B                  | $21           | $0B        | DAC_B_3                             | CB1                        |
|                         34 |                     |         0 | $0A                  | $22           | $0A        | DAC_B_2                             | CB0                        |
|                         35 |                     |         1 | $0E                  | $23           | $2E        | PH_B                                | PHB                        |

Table 11-3: Configuration datagram sequence for the example (with '-' (don't cares))

<!-- image -->

## 12 Initialization of the Micro Step Look-Up-Table

The TMC428 provides a look-up-table (LUT) of 64 values of 6 bit for micro stepping. The micro step LUT can be adapted by storing an arbitrary quarter period of a periodic function to match individual stepper  motor  characteristics.  It  is  common  to  use  one  period  of  a  sine  wave  function  for  micro stepping. With that function, the current of one phase is driven with the sine function whereas the other phase is driven with the cosine function.

To initialize  the  LUT  for  micro  stepping  one  simply  has  to  load  a  quarter  sine  wave  period  into  the micro step LUT. Two successive values of the sine wave function are included in one datagram similar to  the  primary  signal  code  words  for  the  stepper  motor  driver  chain  configuration.  The  TMC428 automatically expands the quarter sine wave period to a full sine and cosine function. The necessary data values y(i) to represent a ¼ sine wave period for the micro step LUT are defined by

```
y(i) = int[ ½ + 64 * sin(¼ * 2 * * I / 64) ]    with I = { 0, 1, 2, 3, ..., 60, 61, 62, 63 },
```

where the conditional replacement  y(i) := 63 for y(i) &gt; 63 has to be done. The last five values (which are calculated to be 64) have to be replaced by 63 . With this replacement one finally gets y(i) = { 0, 2, 3, 5, 6, 8, 9, 11, 12, 14, 16, 17, 19, 20, 22, 23, 24, 26, 27, 29, 30, 32, 33, 34, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 56, 57, 58, 59, 59, 60, 60, 61, 61, 62, 62, 62, 63, 63, 63, 63 , 63 , 63 , 63 , 63 }.

<!-- image -->

| 32 bit DATAGRAM sent from a µC to the TMC428 via pin SDI_C   |
|--------------------------------------------------------------|

Table 12-1: Scheme of ¼ sine wave period with 6 bit resolution and 64 ( 32 x 2 ) values

<!-- image -->

| 0   | 0   | 0   | 1   | 1   | 11   | 0   | 0   |    | 1   | 0   | 1   | 1   | 9   | 0   | 0   | 1 0   | 0   | 1   |
|-----|-----|-----|-----|-----|------|-----|-----|----|-----|-----|-----|-----|-----|-----|-----|-------|-----|-----|
| 0   | 0   | 1   | 0   | 0   | 14   |     | 0   | 0  | 1   | 1 1 | 0   |     | 12  | 0   | 0 1 | 1     | 0   | 0   |
| …   | …   | …   | …   | …   |      |     | …   | …  | …   | …   | …   | …   |     | … … | …   | …     | …   | …   |
| 1   | 1   | 0   | 1   | 1   | 62   |     | 1   | 1  | 1   | 1 1 | 0   | 62  | 1   | 1   | 1 1 |       | 1   | 0   |
| 1   | 1   | 1   | 0   | 0   | 63   |     | 1   | 1  | 1   | 1 1 | 1   | 63  |     | 1 1 | 1 1 |       | 1   | 1   |
| 1   | 1   | 1   | 0   | 1   | 63   |     | 1   | 1  | 1   | 1 1 | 1   | 63  |     | 1 1 | 1 1 |       | 1   | 1   |
| 1   | 1   | 1   | 1   | 0   | 63   |     | 1   | 1  | 1   | 1 1 |     | 1   | 63  | 1 1 | 1 1 |       | 1   | 1   |
| 1   | 1   | 1   | 1   | 1   | 63   |     | 1   | 1  | 1   | 1   | 1   | 1   | 63  | 1 1 | 1   | 1     | 1   | 1   |

These  64  values  represent  a  quarter  sine  period  in  the  interval  [0  ... /4[  which  is  expanded automatically by the TMC428 to a full sine cosine period (see section 12.1, page 41). The table is sent to the on-chip RAM of the TMC428 by 32 datagrams:

Table 12-2 - Datagrams for initialization of a quarter sine wave period microstep look-up-table

<!-- image -->

These 32 datagrams (Table 12-2) are sufficient for all programmable micro step resolutions. If micro stepping  is  used  for  at  least  one  stepper  motor,  these  32  datagrams  have  to  be  sent  once  to  the TMC428 for initialization of the micro step table after power-on reset. The initialization of the micro step look-up-table is not necessary, if full stepping is used for all stepper motors. The on-chip RAM is not initialized  during  power-on  reset.  So,  the  full  initialization  of  the  whole  micro  step  look-up-table  is recommended to avoid trouble caused by missing look-up table entries. Additionally, a fully initialized micro step look-up-table allows the selection of individual micro step resolutions for different steppes.

Hint: The previous section describes how to calculate values for the TMC428 sine wave look-up table, and  how  to  write  those  values  into  the  look-up  table  RAM  of  the  TMC428  via  SPI  datagramms. Nevertheless,  other  formulas  might  generate  sine  wave  look-up  tables  that  better  fit  with  respect  to equidistance of micro steps or concerning torque ripple. Alternatively, a sine wave look-up table based on

<!-- formula-not-decoded -->

can be used. Even, adding some offset o within theoretical range from 0 to 63

<!-- formula-not-decoded -->

might enhance the micro step behavior together with mixed decay. Finally, a sine wave look-up table has to be tested within the application and might need some fine adjustments for optimization.

## 12.1  Stepping through the Wave Look-Up-Table

The 64 values of the wave look-up table (LUT) hold a quarter period of a sine wave, indexed from 0 to 63. This quarter sine wave is expanded to full sine wave and full cosine wave by indexing the 64 values of the LUT. The LUT index is mapped from a wave index of a full period from 0 to 255. The stepping through  the  LUT  is  done  with  fixed  increment  width.  The  increment  width  is  a  power  of  two  and  it depends on the micro step resolution selection usrs . The Table 12-4 gives the indices for the LUT for the different micro step resolutions. For motion in positive direction, the full period index is incremented from micro step to micro step. For motion into negative direction, the full period index is decremented from micro step to micro step.

The sine is associated to phase A (PH\_A) and the cosine is associated to phase B (PH\_B). The phase bits represent the sign of the sine resp. cosine function. The polarity of the phase bit (PH\_A, PH\_B) and the polarity of the fast decay control bits (FD\_A, FD\_B) can be changed by the polarity bits within the global stepper motor parameter register (see section 9.7, page 29).

Table 12-3: Phase Bits and Fast Decay Control Bits

| MSBs of full wave index (range)   | MSBs of full wave index (range)   | Quadrant   |   PH_A (sin) |   PH_B (cos) |   FD_A (sin) |   FD_B (cos) |
|-----------------------------------|-----------------------------------|------------|--------------|--------------|--------------|--------------|
| %00                               | (0...63)                          | 1 st       |            1 |            1 |            0 |            1 |
| %01                               | (64...127)                        | 2 nd       |            1 |            0 |            1 |            0 |
| %10                               | (128...191)                       | 3 rd       |            0 |            0 |            0 |            1 |
| %11                               | (192...255)                       | 4 th       |            0 |            1 |            1 |            0 |

Hints: One should always initialize the whole LUT to be sure to read valid wave values, even if one changes the micro step resolution after some micro steps have been done on higher resolution. Even if one  uses  e.g.  16  times  microstepping,  one  gets  a  smoother  move  for  the  stepper  motor  if  one initializes the full sine wave LUT according to Table 12-2 - Datagrams for initialization of a quarter sine wave period microstep look-up-table on page 40 and using the MSB DAC bits (DAC\_A\_5, DAC\_A\_4, DAC\_A\_3,  DAC\_A\_2  and  DAC\_B\_5,  DAC\_B\_4,  DAC\_B\_3,  DAC\_B\_2).  So,  one  should  always completely  initialize  the  quarter  sine  wave  LUT,  no  matter  what  micro  step  resolution  is  used.  The addressing starts at 0 after power-on reset only. Changing the micro step resolution after some micro steps  have  been  made  causes  an  offset  for  the  addressing  that  has  to  be  taken  into  account  for positioning a stepper motor.

Table 12-4: Wave look-up table (LUT) indices for different microstep resolutions

<!-- image -->

| usrs      |   increment width |     | 1 st quadrant            | 2 nd quadrant             | 3 rd quadrant            | 4 th quadrant           |
|-----------|-------------------|-----|--------------------------|---------------------------|--------------------------|-------------------------|
| %110      |                 1 | sin | 0,1,2, 3, …, 61, 62,63,  | 63, 63, 62, 61,…, 3, 2,1, | 0,1,2, 3, …, 61, 62,63,  | 63, 63,62,61,…, 3, 2,1  |
| %110      |                 1 | cos | 63, 63, 62, 61,…,2,1,    | 0,1,2, 3, …, 61, 62,63,   | 63, 63,62,61,…,3, 2,1,   | 0,1,2, 3, …, 61, 62,63  |
| %101      |                 2 | sin | 0,2, 4, 6, …, 58, 60,62, | 63, 60, 58, 56,…, 4, 2,   | 0,2, 4, 6, …, 58, 60,62, | 63, 60, 58, 56,…, 4, 2  |
| %101      |                 2 | cos | 63, 60, 58, 56,…, 4, 2,  | 0,2, 4, 6, …, 58, 60,62,  | 63, 60, 58, 56,…, 4, 2,  | 0,2, 4, 6, …, 58, 60,62 |
| %100      |                 4 | sin | 0, 4, 8, 12, …, 56, 60,  | 63, 60, 56, …, 12, 8, 4,  | 0, 4, 8, 12, …, 56, 60,  | 63, 60, 56, …, 12, 8, 4 |
| %100      |                 4 | cos | 63, 60, 56, …, 12, 8, 4, | 0, 4, 8, 12, …, 56, 60,   | 63, 60, 56, …, 12, 8, 4, | 0, 4, 8, 12, …, 56, 60  |
| %011      |                 8 | sin | 0, 8, 16, 24, …, 48, 56  | 63, 56, 48, 40,…,16, 8,   | 0, 8, 16, 24, …, 48, 56  | 63, 56, 48, 40,…,16, 8  |
| %011      |                 8 | cos | 63, 56, 48, 40,…,16, 8,  | 0, 8, 16, 24, …, 48, 56   | 63, 56, 48, 40,…,16, 8,  | 0, 8, 16, 24, …, 48, 56 |
| %010      |                16 | sin | 0, 16, 32, 48,           | 63, 48, 32, 16,           | 0, 16, 32, 48,           | 63, 48, 32, 16          |
| %010      |                16 | cos | 63, 48, 32, 16,          | 0, 16, 32, 48,            | 63, 48, 32, 16,          | 0, 16, 32, 48           |
| %001 (HS) |                32 | sin | 0, 32,                   | 63, 32,                   | 0, 32,                   | 63, 32                  |
| %001 (HS) |                32 | cos | 63, 32,                  | 0, 32,                    | 63, 32                   | 0, 32                   |
| %000 (FS) |                64 | sin | 0,                       | 63,                       | 0,                       | 63                      |
| %000 (FS) |                64 | cos | 63,                      | 0,                        | 63                       | 0                       |

## 12.2  Partial look-up table initialization option

A partially initialized micro step table may be sufficient, if all stepper motors- except those driven in full step mode -are programmed to use the same micro step resolution constantly before a single micro step is processed. But with a partial initialized micro step look-up table, the micro step resolution must not  be  changed after  any  step  is  made  after  power-on  reset.  So,  a  partially  initialized  look-up  table should  be  taken  into  account  only,  if  it  is  a  must  because  of  too  small  memory  of  the  host microcontroller. Instead of partial initialization of the look-up table of the TMC428, initialization with a triangular function f rhomb ( ) would be a better choice.

## 12.3  Micro Step Enhancement

Even for stepper motors optimized for sine-cosine control, it is possible to improve micro step behavior by  adapting  the  micro  step  look-up  table  (LUT).  For  different  types  of  stepper  motors,  a  periodic trapezoidal  or  triangular  function  similar  to  a  sine  function  or  a  superposition  of  these  function  as  a replacement of the pure sine wave function (Figure 12-1) might be a better choice. Taking the physics of stepper motors into account, the choice of the function for microstepping can be determined by a single  shape  parameter σ as  explained  below.  The  programmability  of  the  micro  step  look-up  table provides a simple and effective facility to enhance microstepping for a given type of two-phase stepper motor. Enhanced microstepping requires accurate current control. So, stepper motor driver chips with enabled and well tuned fast decay (resp. mixed decay) operational mode are need to be used, e.g. TRINAMICs smart power TMC236 / TMC239 / TMC246 / TMC249 drivers.

Non-linearity  resulting  from  magnetic  field  configuration  determined  by  shapes  of  pole  shoes, ferromagnetic characteristics, and other stepper motor characteristics effect non-linearity in micro step behavior  of  real  stepper  motors.  The  non-linearity  of  microstepping  causes  micro  step  positioning displacements, vibrations and noise, which can be reduced dramatically with an adapted micro step table. The best fitting micro step table can be determined by measuring the micro step motor behavior, e.g. using a laser pointer based on the sine-cosine microstepping table.

Nevertheless sine-cosine microstepping is a good first order approach for microstepping. The micro step enhancement possible with the TMC428 is based on replacement of the look-up table initialization function sin( ) used for sine-cosine microstepping by a function with the shape parameter σ . A quarter sine wave period is the basic approach for initialization of the micro step look-up-table . A quarter of a trapezoidal function or a quarter of a triangular function is chosen depending on the shape parameter σ for a given stepper motor type.

<!-- formula-not-decoded -->

The look-up table ( f ( ) ) of the TMC428 enfolds a quarter period (0 ≤ &lt; /2) only. This quarter period is expanded to a full period (0 ≤ &lt; 2 ) and the phase shifted companion function value ( f ( -/2 )) is added  automatically  by  the  TMC428  during  operation.  So,  to  reach  function  value  ( f ( )),  one automatically  gets  a  pair  of  function  values  { f ( ); f ( -/2 )}  respectively  {sin( );  cos( )}.  This automatic expansion of the TMC428- primary provided for sine cosine microstepping ( f ( ) = sin( )) -also works fine with other micro step wave forms f σ .

Figure 12-1: Microstep enhancemant by introduction of a shape function f σ ( )

<!-- image -->

The  shape  parameter σ selects  one  of  three  functions  fbox( φ ), f circle ( φ ), f rhomb ( φ ),  respectively  a superposition of two of them. The shape parameter σ = 0 selects the function fcircle ( φ ) which is the sine function  sin( )  as  used  for  sine  cosine  microstepping.  With this, one gets the unit circle ( r =1.0) by transformation to Cartesian coordinates { y = sin( ); x = cos( )} as outlined in Figure 12-1, a shape parameter σ = +1.0 results in a box, and a shape parameter σ = -1.0 results in a rhomb. Other values except  those,  result  in  something  between  box  and  circle  respectively  something  between  circle  an rhomb.

The data values y(i) of the look-up table range from 0 to 63 and the argument I ranges also from 0 to 63. In the following, natural angles (radians) ranging from (0 ≤ &lt; 2 ) are used for the description. The three functions for superposition controlled by the shape parameter σ are

<!-- formula-not-decoded -->

All together, these three functions are combined to form the function

<!-- formula-not-decoded -->

So,  the  shape  parameter σ selects  the  type  of  function  and  it  also  provides  a  continuous  transition between circle and box respectively circle and rhomb. To estimate, what function would be best for a given  type  of  stepper  motor,  one  can  try  microstepping  based  on  different  shape  parameters σ by downloading different micro step tables on-the-fly into the TMC428 during motion of a stepper motor. For  calculation  of  data  for  the  micro  step  look-up  table  of  the  TMC428,  one  has  to  replace I ranging from 0 to /2 for the quarter period by

<!-- formula-not-decoded -->

The amplitude of the shape function f σ ( φi ) has to be limited to the range of 0.0 to 1.0 respectively to the range of 0 to 63 for the on-chip RAM as described in the beginning of the microstepping section.

## 13 How to get Started in Running a Motor

First  of  all,  the  Stepper  Motor  Driver  Datagram  Configuration  has  to  be  written  into  its  RAM  area. Additionally,  the  Microstep  Look-Up-Table  has  to  be  initialized  when  using  microstepping.  The parameter LSMD ,  that  is  part  of  the  global  parameter  register,  has  to  be  initialized.  After  that,  the parameters v\_min , v\_max ,  and the clock pre-dividers pulse\_div and ramp\_div and the micro step resolution usrs has to be set. Then, a\_max together with  a valid pair of pmul and pdiv has to be set. The switch configuration ref\_conf together with the ramp mode rm has to be chosen. The reference switch inputs REF1 , REF2 , REF3 should be pulled down to ground or disabled by setting ref\_conf . With those settings, the TMC428 runs a motor if one writes either x\_target or v\_target , depending on the choice of the ramp mode rm .  An application note named 'TMC428 - Getting Started' together with C source code examples are available on www.trinamic.com

## 14 Package Outlines and Dimensions

## 14.1  Shrink Small Outline Package with 16 Pins (SSOP16, 150 MIL) of TMC428-I and TMC428-A

Figure 14-1: Package Outline Drawing SSOP16, 150 MILS

<!-- image -->

Table 14-1: Dimensions of Package SSOP16, 150 MILS (Note: BSC Best Case)

| Symbol   | Dimensions in MILLIMETERS   | Dimensions in MILLIMETERS   | Dimensions in MILLIMETERS   | Dimensions in INCHES   | Dimensions in INCHES   | Dimensions in INCHES   |
|----------|-----------------------------|-----------------------------|-----------------------------|------------------------|------------------------|------------------------|
| Symbol   | Min                         | Typ                         | Max                         | Min                    | Typ                    | Max                    |
| A        | 1.55                        | 1.63                        | 1.73                        | 0.061                  | 0.064                  | 0.068                  |
| A1       | 0.10                        | 0.15                        | 0.25                        | 0.004                  | 0.006                  | 0.0098                 |
| A2       | 1.40                        | 1.47                        | 1.55                        | 0.055                  | 0.058                  | 0.061                  |
| b        | 0.20                        |                             | 0.30                        | 0.008                  |                        | 0.012                  |
| b        | 0.20                        | 0.25                        | 0.28                        | 0.008                  | 0.010                  | 0.011                  |
| c        | 0.18                        |                             | 0.25                        | 0.007                  |                        | 0.010                  |
| c        | 0.18                        | 0.20                        | 0.23                        | 0.007                  | 0.008                  | 0.009                  |
| B        | 0.20                        | 0.25                        | 0.31                        | 0.008                  | 0.010                  | 0.012                  |
| C        | 0.19                        | 0.20                        | 0.25                        | 0.0075                 | 0.008                  | 0.0098                 |
| D        | 4.80                        | 4.93                        | 4.98                        | 0.189                  | 0.194                  | 0.196                  |
| E        | 3.91 BSC                    | 3.91 BSC                    | 3.91 BSC                    | 0.154 BSC              | 0.154 BSC              | 0.154 BSC              |
| e        | 0.635 BSC                   | 0.635 BSC                   | 0.635 BSC                   | 0.025 BSC              | 0.025 BSC              | 0.025 BSC              |
| H        | 6.02 BSC                    | 6.02 BSC                    | 6.02 BSC                    | 0.237 BSC              | 0.237 BSC              | 0.237 BSC              |
| h        | 0.25                        | 0.33                        | 0.41                        | 0.010                  | 0.013                  | 0.016                  |
| L        | 0.41                        | 0.635                       | 0.89                        | 0.016                  | 0.025                  | 0.035                  |
| N        | 16                          | 16                          | 16                          | 16                     | 16                     | 16                     |
| S        | 0.051                       | 0.114                       | 0.178                       | 0.0020                 | 0.0045                 | 0.0070                 |
|          | 0                           | 5                           | 8                           | 0                      | 5                      | 8                      |

## 14.2  Small Outline Package with 24 Pins (SOP24) of TMC428-PI24

Figure 14-2: Package Outline Drawing SOP24, 300 MILS

<!-- image -->

Table 14-2: Dimensions of Package SOP24, 300 MILS (Note: BSC Best Case)

| Symbo   | Dimensions in MILLIMETERS   | Dimensions in MILLIMETERS   | Dimensions in MILLIMETERS   | Dimensions in INCHES   | Dimensions in INCHES   | Dimensions in INCHES   |
|---------|-----------------------------|-----------------------------|-----------------------------|------------------------|------------------------|------------------------|
| l       | Min                         | Typ                         | Max                         | Min                    | Typ                    | Max                    |
| A       | 2.35                        |                             | 2.65                        | 0.0926                 |                        | 0.1043                 |
| A1      | 0.1                         |                             | 0.3                         | 0.004                  |                        | 0.0118                 |
| A2      |                             |                             |                             |                        |                        |                        |
| B       | 0.33                        |                             | 0.51                        | 0.013                  |                        | 0.02                   |
| C       | 0.23                        |                             | 0.32                        | 0.0091                 |                        | 0.0125                 |
| D       | 15.2                        |                             | 15.6                        | 0.5985                 |                        | 0.6141                 |
| E       | 7.4                         |                             | 7.6                         | 0.2914                 |                        | 0.2992                 |
| e       | 1.27 BSC                    | 1.27 BSC                    | 1.27 BSC                    | 0.05 BSC               | 0.05 BSC               | 0.05 BSC               |
| H       | 10                          |                             | 10.65                       | 0.394                  |                        | 0.419                  |
| h       | 0.25                        |                             | 0.75                        | 0.01                   |                        | 0.029                  |
| L       | 0.4                         |                             | 1.27                        | 0.016                  |                        | 0.05                   |
| N       | 24                          | 24                          | 24                          | 24                     | 24                     | 24                     |
|         | 0                           |                             | 8                           | 0                      |                        | 8                      |

## 14.3  Dual-In-Line Package with 20 Pins (DIL20) of TMC428-DI20

Figure 14-3: Package Outline Drawing DIL20, 300 MILS (not recommended for new designs)

<!-- image -->

Table 14-3: Dimensions of Package DIL20, 300 MILS (Note: BSC Best Case)

| Symbo   | Dimensions in MILLIMETERS   | Dimensions in MILLIMETERS   | Dimensions in MILLIMETERS   | Dimensions in INCHES   | Dimensions in INCHES   | Dimensions in INCHES   |
|---------|-----------------------------|-----------------------------|-----------------------------|------------------------|------------------------|------------------------|
| l       | Min                         | Typ                         | Max                         | Min                    | Typ                    | Max                    |
| A       |                             |                             | 4.57                        |                        |                        | 0.180                  |
| A1      | 0.38                        |                             |                             | 0.015                  |                        |                        |
| A2      | 3.05                        | 3.43                        | 3.81                        | 0.120                  | 0.135                  | 0.150                  |
| B       | 0.36                        | 0.46                        | 0.56                        | 0.014                  | 0.018                  | 0.022                  |
| B1      | 1.14                        | 1.27                        | 1.52                        | 0.045                  | 0.050                  | 0.060                  |
| C       | 0.20                        | 0.25                        | 0.38                        | 0.008                  | 0.010                  | 0.015                  |
| D       | 24.0                        | 24.51                       | 25.02                       | 0.945                  | 0.965                  | 0.985                  |
| D1      | 22.86 BSC                   | 22.86 BSC                   | 22.86 BSC                   | 0.900 BCS              | 0.900 BCS              | 0.900 BCS              |
| E       | 7.62                        | 7.87                        | 8.26                        | 0.300                  | 0.310                  | 0.325                  |
| E1      | 6.99                        | 7.24                        | 7.49                        | 0.275                  | 0.285                  | 0.295                  |
| e       | 2.54 BSC                    | 2.54 BSC                    | 2.54 BSC                    | 0.100 BSC              | 0.100 BSC              | 0.100 BSC              |
| eA      | 7.62 BSC                    | 7.62 BSC                    | 7.62 BSC                    | 0.300 BSC              | 0.300 BSC              | 0.300 BSC              |
| eB      |                             |                             | 10.92                       |                        |                        | 0.430                  |
| L       | 2.79                        | 3.30                        | 3.81                        | 0.110                  | 0.130                  | 0.150                  |
| S       | 0.13                        |                             |                             | 0.005                  |                        |                        |
| N       | 20                          | 20                          | 20                          | 20                     | 20                     | 20                     |

## 15 Marking

Product Name

TMC428-I

Product ID at top

56563A

Package

SSOP16  - 150 MILS

Date Code (at bottom only)

YYWW (year YY and week WW)

Lot Number (at bottom only)

XXXXXXXXX

Logo

No

Real Size (see note below)

TMC428-I Trinamic 56563A

Zoomed Size

TMC428-I Trinamic 56563A

Product Name

TMC428-A

Product ID at top

56563A

Package

SSOP16  - 150 MILS

Date Code (at bottom only)

YYWW (year YY and week WW)

Lot Number (at bottom only)

XXXXXXXXX

Logo

No

Real Size (see note below)

TMC428-A Trinamic 56563A

Zoomed Size

TMC428-A Trinamic 56563A

<!-- image -->

Product Name

TMC424-PI24

Product ID

56563A

Package

SOP24  - 300 MILS

Date Code

YYWW (year YY and week WW)

Lot Number

XXXXXXXXX

Logo

Yes

Real Size (see note below)

Zoomed Size

TMC 428-PI24 Trinamic 56563A YYWW XXXXXXXXX

TMC 428-PI24 Trinamic 56563A YYWW XXXXXXXXX

Note: Provided to be of ''Real Size'' if printed with scale of 100% on paper of DIN-A4 format - but the printed size may differ depending on the printer.

## 16 On-Chip Voltage Regulator

The on-chip voltage regulator delivers a 3.3V supply for the chip core. An external 470 nF ceramic capacitor  has  to  be  connected  between  the  V33  pin  (see  Figure  16-1,  page  49)  and  ground,  with connections as short as possible. Additionally, an external 100 nF ceramic capacitor (CBLOCK) has to be connected between pin V5 and ground- with connections as short as possible -in 5V operational mode. In 3.3V operational mode an external 100 nF ceramic capacitor (see Figure 16-1, page 49) is necessary only between pin V33 and ground, with connections as short as possible.

Table 16-1: Characteristics of the on-chip voltage regulator

| Symbol    | Parameter                     | Conditions                                                                                                                                                                                                                    | Min   | Typ   | Max   | Unit     |
|-----------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|-------|-------|----------|
| TRANGEREG | Temperature range             | Industrial                                                                                                                                                                                                                    | -40   |       | 85    | °C       |
| VDD5REG   | Supply voltage vdd5           | 5 V Operational Mode                                                                                                                                                                                                          | 4.5   | 5     | 5.5   | V        |
| CBLOCK    | Block capacitor               | 5 V Operational Mode, x7r ceramic capacitor                                                                                                                                                                                   |       | 100   |       | nF       |
| VDD3REG   | Supply voltage vdd3           | 3.3 V Operational Mode                                                                                                                                                                                                        | 2.9   | 3.3   | 3.6   | V        |
| ICCNLREG  | Current consumption           | no load                                                                                                                                                                                                                       |       | 50    | 100   | µA       |
| tSREG     | Startup time                  | no external capacitor connected                                                                                                                                                                                               |       |       | 20    | µs       |
| tSREGC    | Startup time                  | C_load = 470 nF                                                                                                                                                                                                               |       |       | 150   | µs       |
| TDRFT     | Temperature drift             |                                                                                                                                                                                                                               |       |       | 300   | ppm / °C |
| VRIPPLE   | Ripple on vdd3                | With ripple over 50 mV the input thresholds may differ from that specified in the data sheet                                                                                                                                  |       |       | 100   | mV       |
| CREG      | External capacitor            | On V33 pin, x7r ceramic, necessary capacity depending on ripple requirements. Using external capacitor with capacity other than typical, the ripple should be measured on pin v33 to be sure that requirements are satisfied. | 33    | 470   |       | nF       |
| COPT      | Optional capacitor            | Optional parallel capacitor for additional reduction of high frequency ripple, c0g ceramic, unnecessary in most cases                                                                                                         |       | 470   |       | pF       |
| PSRRDC    | power supply ripple rejection | DC                                                                                                                                                                                                                            |       | 50    |       | dB       |

## 3.3V Operation (CMOS)

## 5V Operation (TTL)

Figure 16-1: 3.3V operation (CMOS) vs. 5V operation (TTL)

<!-- image -->

## 17 Power-On-Reset

The TMC428 is equipped with a static and dynamic reset with internal hysteresis (see Figure 17-1). So, it performs an automatic reset during power-on. If the power supply voltage goes below a threshold, an automatic power on reset is performed also.  The power on reset time tRESPOR also depends on the power up time of the on-chip voltage regulator (see Table 16-1 ).

Table 17-1: Characteristics of the on-chip power-on-reset

| Symbol   | Parameter                            | Conditions   | Min   | Typ   |    Max | Unit   |
|----------|--------------------------------------|--------------|-------|-------|--------|--------|
| VDD      | Power supply range                   |              | 3.0   | 3.3   |   3.6  | V      |
| Temp     | Temperature                          |              | -55   | 25    | 125    | °C     |
| Vop      | Reset on/off                         |              |       |       |   0.8  | V      |
| Voff     | Reset off                            |              | 1.58  | 2.13  |   2.85 | V      |
| Von      | Reset on                             |              | 1.49  | 1.98  |   2.7  | V      |
| tRESPOR  | Reset time of on-chip power-on-reset |              | 2.14  | 3.31  |   5.52 | µs     |

Figure 17-1: Operating principle of the power-on-reset

<!-- image -->

## 18 Characteristics

| Symbol   | Parameter                     | Conditions                                                                                                                                                                                | Min   | Max                 | Unit   |
|----------|-------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|---------------------|--------|
| VDD3     | DC Supply Voltage             | Voltage at Pin V33 in 3.3V mode                                                                                                                                                           | -0.3  | 3.6                 | V      |
| VI3      | DC Input Voltage, 3.3 V I/Os  |                                                                                                                                                                                           | -0.3  | VDD3 + 0.3          | V      |
| VO3      | DC Output Voltage, 3.3 V I/Os |                                                                                                                                                                                           | -0.3  | VDD3 + 0.3          | V      |
| VDD5     | DC Supply Voltage             | Voltage at Pin V5                                                                                                                                                                         | -0.3  | 5.5                 | V      |
| VI5      | DC Input Voltage, 5V I/Os     | Continuous DC Voltage                                                                                                                                                                     | -0.3  | VDD5 + 0.3, 5.5 max | V      |
| VO5      | DC Output Voltage, 5V I/Os    | Continuous DC Voltage                                                                                                                                                                     | -0.3  | VDD5 + 0.3, 5.5 max | V      |
| VESD     | ESD Voltage                   | PAD cells are designed to resist ESD voltages according to Human Body Model according to MIL-STD-883, with R C = 1 - 10 M , R D = 1.5 K , and C S = 100 pF, but it can not be guaranteed. |       | 2000                | V      |
| TEMP_D2  | Ambient Air Temperature Range | Industrial / Consumer type                                                                                                                                                                | -40   | +85                 | °C     |
| TEMP_D3  | Ambient Air Temperature Range | Automotive type                                                                                                                                                                           | -55   | +125                | °C     |
| TEMP_D4  | Ambient Air Temperature Range | Industrial type                                                                                                                                                                           | -40   | +105                | °C     |
| TSG      | Storage Temperature           |                                                                                                                                                                                           | -60   | +150                | °C     |

Table 18-1 : Absolute maximum ratings

Table 18-2: DC characteristics

| Symbol   | Parameter             | Conditions   | Min   | Typ   | Max   | Unit   |
|----------|-----------------------|--------------|-------|-------|-------|--------|
| ILC      | Input Leakage Current |              |       |       | 1     | µA     |
| CIN      | Input Capacitance     |              |       | 7     |       | pF     |

Table 18-3: DC characteristics - 3.3V supply mode

| Symbol                                   | Parameter                                | Conditions    | Min        | Typ   | Max        | Unit   |
|------------------------------------------|------------------------------------------|---------------|------------|-------|------------|--------|
| VDD3                                     | DC Supply Voltage                        |               | 3.0        | 3.3   | 3.6        | V      |
| VI3                                      | DC Input Voltage                         |               | 0          |       | VDD3       | V      |
| VIL3                                     | Low Level Input Voltage                  | Pin TEST only | 0          |       | 0.3 x VDD3 | V      |
| VIH3                                     | High Level Input Voltage                 | Pin TEST only | 0.7 x VDD3 |       | VDD3 + 0.3 | V      |
| VLTH3 Low                                | Level Input Voltage Threshold All Inputs | except TEST   | 0.9        |       | 1.2        | V      |
| VHTH3 High Level Input Voltage Threshold | All Inputs except TEST                   | 1.5           |            |       | 1.9        | V      |
| VHYS3                                    | Schmitt-Trigger Hysteresis               |               | 0.4        | 0.7   |            | V      |
| VOL3 Low Level Output                    | Voltage IOL = 0.3                        | mA            |            | 0.1   |            | V      |
| VOH3 High Level Output                   | Voltage IOH = 0.3 mA                     | VDD3 - 0.1    |            |       |            | V      |
| VOL3 Low Level Output                    | Voltage IOL = 2                          | mA            |            |       | 0.4        |        |
| VOH3 High Level Output                   | Voltage IOH = 2 mA                       | VDD3 -        | 0.4        |       |            | V      |

Note: Ripple  on  VDD3  has  to  be  taken  into  account  concerning  measurement  of  thresholds  and hysteresis.

Table 18-4: DC characteristics - 5V supply mode

| Symbol   | Parameter                          | Conditions                      | Min        | Typ   | Max        | Unit   |
|----------|------------------------------------|---------------------------------|------------|-------|------------|--------|
| VDD5     | DC Supply Voltage                  |                                 | 4.5        | 5     | 5.5        | V      |
| VI5      | DC Input Voltage                   |                                 | 0          |       | VDD5       | V      |
| VIL5     | Low Level Input Voltage            | Pin TEST only                   | 0          |       | 0.3 x VDD5 | V      |
| VIH5     | High Level Input Voltage           | Pin TEST only                   | 0.7 x VDD5 |       | VDD5 + 0.3 | V      |
| VLTH5    | Low Level Input Voltage Threshold  | All Inputs except TEST, VDD5=5V | 0.9        |       | 1.2        | V      |
| VHTH5    | High Level Input Voltage Threshold | All Inputs except TEST, VDD5=5V | 1.5        |       | 1.9        | V      |
| VHYS5    | Schmitt-Trigger Hysteresis         |                                 | 0.4        |       | 0.7        | V      |
| VOL5     | Low Level Output Voltage           | IOL = 0.3 mA                    |            |       | 0.1        | V      |
| VOH5     | High Level Output Voltage          | IOH = 0.3 mA                    | VDD5 - 0.1 |       |            | V      |
| VOL5     | Low Level Output Voltage           | IOL = 4 mA                      |            |       | 0.4        |        |
| VOH5     | High Level Output Voltage          | IOH = 4 mA                      | VDD5 - 0.4 |       |            | V      |

| Symbol                     | Parameter                             | Conditions   |   Min |   Typ | Max   | Unit     |
|----------------------------|---------------------------------------|--------------|-------|-------|-------|----------|
| Supply Current             | f = 16 MHz at Tc=25°C                 |              |  5    |  10   | mA    | ISC16MHZ |
| Supply Current             | f = 4 MHz at Tc=25°C                  |              |  1.25 |   2.5 | mA    | ISC4MHZ  |
| IPDN25C Power Down Current | Power Down Mode at Tc=25°C, 5V Supply |              | 70    | 150   | µA    |          |

Table 18-5: Power dissipation

Table 18-6: General timing parameters

| Symbol   | Parameter               | Conditions                                                   | Min   | Typ   | Max   | Unit   |
|----------|-------------------------|--------------------------------------------------------------|-------|-------|-------|--------|
| fCLK     | Operation Frequency     | fCLK = 1 / tCLK                                              | 0     | 4     | 16    | MHz    |
| tCLK     | Clock Period            | Raising Edge to Raising Edge of CLK                          | 62.5  |       |       | ns     |
| tCLK_L   | Clock Time Low          |                                                              | 25    |       |       | ns     |
| tCLK_H   | Clock Time High         |                                                              | 25    |       |       | ns     |
| tRISE_I  | Input Signal Rise Time  | 10% to 90% except TEST pin                                   | 0.5   |       |       | ns     |
| tFALL_I  | Input Signal Fall Time  | 90% to 10% except TEST pin                                   | 0.5   |       |       | ns     |
| tRISE_O  | Output Signal Rise Time | 10% to 90%                                                   |       | 3     |       | ns     |
| tFALL_O  | Output Signal Fall Time | 90% to 10%                                                   |       | 3     |       | ns     |
| tSU      | Setup Time              | relative to falling clock edge at CLK                        | 1     |       |       | ns     |
| tHD      | Hold Time               | relative to falling clock edge at CLK                        | 1     |       |       | ns     |
| tPD      | Propagation Delay Time  | 50% of rising edge of the clock CLK to the 50% of the output | 1     | 5     |       | ns     |

Figure 18-1: General timing parameters

<!-- image -->

## 19 Example for Calculation of p\_mul  and p\_div for the TMC428

```
/* PROGRAM EXAMPLE 'pmulpdiv.c' : How to Calculate p_mul & p_div for the TMC428 */ #include <math.h> #include <stdio.h> #include <stdlib.h> #include <string.h> void CalcPMulPDiv(int a_max, int ramp_div, int pulse_div, float p_reduction, int *p_mul, int *p_div, double *PIdeal, double *PBest, double *PRedu ) { int    pdiv, pmul, pm, pd ; double p_ideal, p_best, p, p_reduced; pm=-1; pd=-1; // -1 indicates : no valid pair found p_ideal   = a_max /  (pow(2, ramp_div-pulse_div)*128.0); p         = a_max / ( 128.0 * pow(2, ramp_div-pulse_div) ); p_reduced = p * ( 1.0 - p_reduction ); for (pdiv=0; pdiv<=13; pdiv++) { pmul = (int)(p_reduced * 8.0 * pow(2, pdiv)) - 128; if ( (0 <= pmul) && (pmul <= 127) ) { pm = pmul + 128; pd = pdiv; } } *p_mul = pm; *p_div = pd; p_best = ((double)(pm)) / ((double)pow(2,pd+3)); *PIdeal = p_ideal; *PBest  = p_best; *PRedu  = p_reduced; } int main(int argc, char **argv) { int  a_max=0, ramp_div=0, pulse_div=0, p_mul, p_div, a_max_lower_limit=0, a_max_upper_limit=0; double pideal, pbest, predu; float  p_reduction=0.0; char **argp; if (argc>1) { while (argv++, argc--) { argp = argv + 1;   if (*argp==NULL) break; if (      (!strcmp(*argv,'-a')) ) sscanf(*argp,'%d',&a_max); else if ( (!strcmp(*argv,'-r')) ) sscanf(*argp,'%d',&ramp_div); else if ( (!strcmp(*argv,'-p')) ) sscanf(*argp,'%d',&pulse_div); else if ( (!strcmp(*argv,'-pr'))) sscanf(*argp,'%f',&p_reduction); } } else { fprintf(stderr,'\n  USAGE : pmulpdiv -a <a_max> -r <ramp_div> -p <pulse_div> -pr <0.00 .. 0.10>\n' '  EXAMPLE : pmulpdiv -a 10 -r 3 -p 3 -pr 0.05\n'); return 1; } printf('\n\n  a_max=%d\tramp_div=%d\tpulse_div=%d\tp_reduction=%f\n\n', a_max, ramp_div, pulse_div, p_reduction); CalcPMulPDiv(a_max, ramp_div, pulse_div, p_reduction, &p_mul, &p_div, &pideal, &pbest, &predu ); printf('  p_mul = %3.3d\n  p_div = %3d\n\n p_ideal = %f\n  p_best = %f\n  p_redu = %f\n\n', p_mul, p_div, pideal, pbest, predu); a_max_lower_limit = (int)pow(2,(ramp_div-pulse_div-1)); printf('\n a_max_lower_limit = %d',a_max_lower_limit); if (a_max < a_max_lower_limit) printf('   [WARNING: a_max < a_max_lower_limit]'); a_max_upper_limit = ((int)pow(2,(12+(ramp_div-pulse_div)))) -1; printf('\n a_max_upper_limit = %d',a_max_upper_limit); if (a_max > a_max_upper_limit) printf('   [WARNING: a_max > a_max_upper_limit]'); printf('\n\n'); return 0; } /* -------------------------------------------------------------------------- */
```

## 20 Revision History

<!-- image -->

|   Version | Date (Author)            | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-----------|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1    | February 23, 2001 (LL)   | First complete version published in printed form                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|      1.01 | March 27, 2001 (LL)      | Version updated based on customer feed back                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|      1.02 | November 21, 2001 (LL)   | Version published on www.trinamic.com and TECHlibCD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|      2    | October 2, 2003 (LL)     | Changed to font Arial, numbering added to headings, revision history added                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|      2    | November 12, 2003 (LL)   | additional hints concerning motion parameters units and signed representation and concerning signal polarities (see section 2.5, page 5), hint added concerning SPI timing of µC interface section 6.2on page 8, hint concerning power-on reset initialization values added near Table 7-2 on page 15, LP bit position corrected @Table 7-2 on page 15 and Table 8-5 on page 24, limit parameter a_max_upper_limit similar to a_max_lower_limit added as new sub-section (see page 17), interrupt register index (hint within text, section 8.13, page 24) corrected to IDX=%1011, additional statements concerning the functional difference of stop switch and reference switch in context of parameter dx_ref_tolerance section 8.15 on page 27, hints concerning MSB order concerning sending and receiving via the µC SPI interface, hints concerning the functional difference between stop switch and reference switch, description concerning latching the position (under control of REF_RnL bit) corrected is section 8.16 on page 27, function of the CDGW status bit explained in more detail concerning datagram_high_word and datagram_low_word (section 9.1 on page 27) and cover_datagram (section 9.3 on page 28), correction of maximum value of clk2_div and formula to calculate the datagram frequency f_datagram[Hz] added to section 9.7 on page 29, numbering within table of table concerning Table 9-2: Global parameter LSMD (last stepper motor driver) on page 30 corrected, Figure 11-1 on page 36 added to outline the driver chain configuration principle, imaginary example for Stepper Motor Driver Datagram Configuration (see page 38) changed to real example for the TMC236 / TMC239 / TMC246 / TMC249 family, section 12.1 (page 41) concerning indexing the wave LUT added, optional capacitor Copt added to drawing Figure 16-1on page 49, calculation of the number of steps during acceleration added to section 8.14, Table 18-1 on page 51 temperature ranges completed, example on page 53 for calculation of p_mul & p_div replaced |
|      2    | October 1 st , 2004 (LL) | Changes concerning new company TRINAMIC Motion Control GmbH & Co. KG                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|      2.01 | October 7 th , 2004 (LL) | One of twice repeated phrase 'A write to one of these …' removed within section 9.1 on page 27, equation '&#124; ramp_div and pulse_div &#124; <= 1' corrected ( and replaced by -) section 8.7.1 on page 17, formula q = p/p' corrected to q = p'/p within section 8.11.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|      2.02 | April 21 th , 2006 (LL)  | Hints added (section 3, page 5, Table 3-1; section 4, page 6, Figure 4-1, page 6, Table 4-1, page 6; section 14.3, page 47, Figure 14-3) not to use the package DIL20 variant for new designs - pls. contact our sales via info@trinamic.com for details concerning last order etc. ; specification of industrial temperature range added to section 3, page 5, Table 3-1; hexadecimal representation in Table 12-2 on page 40 %11 01111 0 00000000 00 101100 00 101011 : 44 & 43 : $DE001C1B corrected to %11 01111 0 00000000 00 101100 00 101011 : 44 & 43 : $DE002C2B; mnemonic for RAM data of code $04 changed from DAC_A_3 to correct DAC_A_4 (Table 11-2, page 38); formula for continuos update frequency (f_cupd_s[Hz]) corrected (end of section 9.7); high active interrupt status bit (former named nINT) renamed to INT to avoid confusing caused by the low active interrupt status output signal (still named SDO_C / nINT), section 6.4, page 11, Table 6-4, page 12, section 6.5, page 13, section 8.13, page 24; hint to an application note 'TMC428 - Getting Started' available on www.trinamic.com                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|      2.02 | April 26 th , 2006 (LL)  | added section 13, page 44. section 1, page 1 DIL20 package option removed from feature list; hint added not to use the DIL20 package (TMC428-DI20) for new designs (Figure 2-2, page 4); hint added how to make the SDO_C high impedance (Figure 4, page 9); this version of the data sheet is published on www.trinamic.com and TECHlibCD                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

|   2.03 | December 18 th , 2008 (LL)   | end of section 8.12 lp & ref_conf & ramp_mode (rm) (IDX=%1010) and table 8.4 v_max (IDX=%0011) corrected concerning x_latched that processes on each signal edge and not only on rising signal edges; section 8.16 x_latched (IDX=%1110) on page 27 corrected concerning x_latched that processes on each signal edge and not only on rising signal edges; hint concerning RoHS compliance for the available variants TMC428-I and TMC428-PI24 added in section 3 Package Variants on page 5; section 6.5; section 6.5 Simple Datagram Examples corrected, page 13; RE1_LEFT corrected in REF1_LEFT in Table 9-3: Association of reference inputs depending on configuration bits refmux & mot1r, page 33; section 20 Revision History (page 54) added to the Table of Contents (TOC), author's initials added to date column of the revision history for internal documentation purposes; section 2.6 Representation of Signed Values by Two's Complement, page 5 correction of a_threshold; section 8.9 is_agtat & is_aleat & is_v0 & a_threshold (IDX=%1000), page 18 update, correction, and hints concerning setting of a_threshold > 1023; table Table 8-2: Current scale selection scheme updated concerning a_threshold > 1023 and hint added. A hint concerning inputs REF1, REF2, REF3 added in section 4, page 6.   |
|--------|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|   2.04 | May 25, 2009 (LL)            | section 8.16 page 27 (if when corrected to when);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|   2.05 | May 28, 2010 (LL)            | Hint added concerning changing of pluse_div while VELOCITY_MODE or HOLD_MODE that might force am internal step pulse depending on the current position (section 8.14 pulse_div & ramp_div & usrs (IDX=%1100) page 26);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

## 21 Table of Figures

| Figure 2-1: TMC428 application environment with TMC428 in SSOP16 package.................................. Figure 2-2: Usage of drivers without serial data output (SDO) with TMC428 in larger packages (* the   | 3                                                                                                                     |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| DI20 package variant is not recommended for new designs ) ..........................................................                                                                                             | 4                                                                                                                     |
| Figure 4-1: TMC428 pin out (* the DIL20 package variant is not recommended for new designs )                                                                                                                     | .......... 6                                                                                                          |
| Figure 5-1: TMC428 functional block diagram.........................................................................................                                                                             | 7                                                                                                                     |
| Figure 6-1: Timing diagram of the serial µC interface                                                                                                                                                            | ............................................................................. 8                                       |
| Figure 4 : Making the TMC428 SDO_C output high impedance with single gate 74HCT1G125............                                                                                                                 | 9                                                                                                                     |
| Figure 6-3: Timing diagram of the serial stepper motor driver interface................................................                                                                                          | 10                                                                                                                    |
| Figure 8-1: Velocity ramp parameters and velocity                                                                                                                                                                | profiles................................................................... 16                                        |
| Figure 8-2: Ramp generator and pulse generator .................................................................................                                                                                 | 20                                                                                                                    |
| Figure 8-3: Proportionality parameter p and outline of velocity profile(s) ..............................................                                                                                        | 21                                                                                                                    |
| Figure 8-4: Left switch and right switch for reference search and automatic stop function...................                                                                                                     | 23                                                                                                                    |
| Figure 9-1: Example of status bit mapping for a chain of three TMC246 or TMC249...........................                                                                                                       | 27                                                                                                                    |
| Figure 9-2: Cover datagram example....................................................................................................                                                                           | 28                                                                                                                    |
| Figure 9-3: Reference switch configuration 'left-side-only' for mot1r=0 (and refmux=0).......................                                                                                                    | 32                                                                                                                    |
| Figure 9-4: Reference switch configuration 'two-one-null' for mot1r=1 (and                                                                                                                                       | refmux=0)........................ 32                                                                                  |
| Figure 9-5: Reference switch multiplexing with 74HC157 (refmux=1)                                                                                                                                                | .................................................. 32                                                                 |
| Figure 9-6: Triple switch configuration 'left stop switch - reference switch - right stop switch'                                                                                                                | ............ 33                                                                                                       |
| Figure 9-7: Reference search................................................................................................................                                                                     | 34                                                                                                                    |
| Figure 9-8: Reference switch gateing for exact simultanous stepper motor start .................................                                                                                                 | 34                                                                                                                    |
| Figure 11-1: Serially transmitted control and status signals between TMC428 and driver chain                                                                                                                     | .......... 36                                                                                                         |
| Figure 12-1: Microstep enhancemant by introduction of a shape function f σ ( ) ...................................                                                                                               | 43                                                                                                                    |
| Figure 14-1: Package Outline Drawing SSOP16, 150 MILS                                                                                                                                                            | ................................................................. 45                                                  |
| Figure 14-2: Package Outline Drawing SOP24, 300 MILS....................................................................                                                                                         | 46                                                                                                                    |
| Figure 14-3: Package Outline Drawing DIL20, 300 MILS (not recommended for new designs)...........                                                                                                                | 47                                                                                                                    |
| Figure 16-1: 3.3V operation (CMOS) vs. 5V operation (TTL)................................................................                                                                                        | 49                                                                                                                    |
| Figure 17-1: Operating principle of the power-on-reset.........................................................................                                                                                  | 50                                                                                                                    |
| Figure 18-1: General timing parameters................................................................................................                                                                           | 52                                                                                                                    |
| 22 Table of Tables                                                                                                                                                                                               |                                                                                                                       |
| Table 3-1: TMC428 package variants Table 4-1: TMC428 pin out (* the DIL20 package variant is not recommended for new designs )                                                                                   | ..................................................................................................... 5 ........... 6 |
| Table 6-1: Timing characteristics of the serial microcontroller interface ...............................................                                                                                        | 10                                                                                                                    |
| Table 6-2: Timing characteristics of the serial stepper motor driver interface.......................................                                                                                            | 10                                                                                                                    |
| Table 6-3 : 32 bit DATAGRAM structure sent from µC (MSB sent first) ...............................................                                                                                              | 11                                                                                                                    |
| Table 6-4: 32 bit DATAGRAM structure received by µC (MSB received first).......................................                                                                                                  | 12                                                                                                                    |
| Table 7-1: TMC428 address space partitions........................................................................................                                                                               | 14                                                                                                                    |
| Table 7-2: TMC428 register address mapping......................................................................................                                                                                 | 15                                                                                                                    |
| Table 8-1: Coil current scale factors......................................................................................................                                                                      | 18                                                                                                                    |
| Table 8-2: Current scale selection scheme...........................................................................................                                                                             | 19                                                                                                                    |
| Table 8-3 - Outline of TMC428 motion modes .....................................................................................                                                                                 | 22                                                                                                                    |
| Table 8-4: Reference switch configuration bits (ref_conf) .....................................................................                                                                                  | 23                                                                                                                    |
| Table 8-5: lp & ref_conf & ramp_mode (rm) data bit positions..............................................................                                                                                       | 24                                                                                                                    |
| Table 8-6: interrupt bit mnemonics........................................................................................................                                                                       | 25                                                                                                                    |
| Table 8-7: interrupt register & interrupt mask........................................................................................                                                                           | 25                                                                                                                    |
| Table 8-8: micro step resolution selection (usrs) parameter                                                                                                                                                      | ................................................................. 26                                                  |
| Table 9-1: Stepper motor global parameter register..............................................................................                                                                                 | 30                                                                                                                    |
| Table 9-2: Global parameter LSMD (last stepper motor driver)                                                                                                                                                     | ............................................................ 30                                                       |
| Table 9-3: Association of reference inputs depending on configuration bits refmux & mot1r                                                                                                                        | ............... 33                                                                                                    |
| Table 10-1: Partitioning of the on-chip RAM address space                                                                                                                                                        | 35                                                                                                                    |
| ................................................................. Table 11-1: Primary signal codes ..........................................................................................................    | 37                                                                                                                    |
| Table 11-2: Datagram example and RAM contents for three stepper motor driver chain.....................                                                                                                          | 38 39                                                                                                                 |
| Table 11-3: Configuration datagram sequence for the example (with '-' (don't cares)).........................                                                                                                    |                                                                                                                       |

| Table 12-1: Scheme of ¼sine wave period with 6 bit resolution and 64 ( 32 x 2 ) values....................                                                                                                                                                                 | Table 12-1: Scheme of ¼sine wave period with 6 bit resolution and 64 ( 32 x 2 ) values....................                                                                                                                                                                 | Table 12-1: Scheme of ¼sine wave period with 6 bit resolution and 64 ( 32 x 2 ) values....................                                                                                                                                                                 | 40                                                                                                                                                                                                                                                                         |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Table 12-2 - Datagrams for initialization of a quarter sine wave period microstep look-up-table .........                                                                                                                                                                  | Table 12-2 - Datagrams for initialization of a quarter sine wave period microstep look-up-table .........                                                                                                                                                                  | Table 12-2 - Datagrams for initialization of a quarter sine wave period microstep look-up-table .........                                                                                                                                                                  | 40                                                                                                                                                                                                                                                                         |
| Table 12-3: Phase Bits and Fast Decay Control Bits.............................................................................                                                                                                                                            | Table 12-3: Phase Bits and Fast Decay Control Bits.............................................................................                                                                                                                                            | Table 12-3: Phase Bits and Fast Decay Control Bits.............................................................................                                                                                                                                            | 41                                                                                                                                                                                                                                                                         |
| Table 12-4: Wave look-up table (LUT) indices for different microstep resolutions ...............................                                                                                                                                                           | Table 12-4: Wave look-up table (LUT) indices for different microstep resolutions ...............................                                                                                                                                                           | Table 12-4: Wave look-up table (LUT) indices for different microstep resolutions ...............................                                                                                                                                                           | 42                                                                                                                                                                                                                                                                         |
| Table 14-1: Dimensions of Package SSOP16, 150 MILS (Note: BSC Best Case)............................                                                                                                                                                                       | Table 14-1: Dimensions of Package SSOP16, 150 MILS (Note: BSC Best Case)............................                                                                                                                                                                       | Table 14-1: Dimensions of Package SSOP16, 150 MILS (Note: BSC Best Case)............................                                                                                                                                                                       | 45                                                                                                                                                                                                                                                                         |
| Table 14-2: Dimensions of Package SOP24, 300 MILS (Note: BSC Best Case) ..............................                                                                                                                                                                     | Table 14-2: Dimensions of Package SOP24, 300 MILS (Note: BSC Best Case) ..............................                                                                                                                                                                     | Table 14-2: Dimensions of Package SOP24, 300 MILS (Note: BSC Best Case) ..............................                                                                                                                                                                     | 46                                                                                                                                                                                                                                                                         |
| Table 14-3: Dimensions of Package DIL20, 300 MILS (Note: BSC Best Case) ................................                                                                                                                                                                   | Table 14-3: Dimensions of Package DIL20, 300 MILS (Note: BSC Best Case) ................................                                                                                                                                                                   | Table 14-3: Dimensions of Package DIL20, 300 MILS (Note: BSC Best Case) ................................                                                                                                                                                                   | 47                                                                                                                                                                                                                                                                         |
| Table 16-1: Characteristics of the on-chip voltage regulator.................................................................                                                                                                                                              | Table 16-1: Characteristics of the on-chip voltage regulator.................................................................                                                                                                                                              | Table 16-1: Characteristics of the on-chip voltage regulator.................................................................                                                                                                                                              | 49                                                                                                                                                                                                                                                                         |
| Table 17-1: Characteristics of the on-chip power-on-reset....................................................................                                                                                                                                              | Table 17-1: Characteristics of the on-chip power-on-reset....................................................................                                                                                                                                              | Table 17-1: Characteristics of the on-chip power-on-reset....................................................................                                                                                                                                              | 50                                                                                                                                                                                                                                                                         |
| Table 18-1 : Absolute maximum ratings................................................................................................                                                                                                                                      | Table 18-1 : Absolute maximum ratings................................................................................................                                                                                                                                      | Table 18-1 : Absolute maximum ratings................................................................................................                                                                                                                                      | 51                                                                                                                                                                                                                                                                         |
| Table 18-2: DC characteristics ..............................................................................................................                                                                                                                              | Table 18-2: DC characteristics ..............................................................................................................                                                                                                                              | Table 18-2: DC characteristics ..............................................................................................................                                                                                                                              | 51                                                                                                                                                                                                                                                                         |
| Table 18-3: DC characteristics - 3.3V supply mode .............................................................................                                                                                                                                            | Table 18-3: DC characteristics - 3.3V supply mode .............................................................................                                                                                                                                            | Table 18-3: DC characteristics - 3.3V supply mode .............................................................................                                                                                                                                            | 51                                                                                                                                                                                                                                                                         |
| Table 18-4: DC characteristics - 5V supply mode ................................................................................                                                                                                                                           | Table 18-4: DC characteristics - 5V supply mode ................................................................................                                                                                                                                           | Table 18-4: DC characteristics - 5V supply mode ................................................................................                                                                                                                                           | 51                                                                                                                                                                                                                                                                         |
| Table 18-5: Power dissipation ...............................................................................................................                                                                                                                              | Table 18-5: Power dissipation ...............................................................................................................                                                                                                                              | Table 18-5: Power dissipation ...............................................................................................................                                                                                                                              | 52                                                                                                                                                                                                                                                                         |
| Table 18-6: General timing parameters.................................................................................................                                                                                                                                     | Table 18-6: General timing parameters.................................................................................................                                                                                                                                     | Table 18-6: General timing parameters.................................................................................................                                                                                                                                     | 52                                                                                                                                                                                                                                                                         |
| 23 Table of Contents                                                                                                                                                                                                                                                       | 23 Table of Contents                                                                                                                                                                                                                                                       | 23 Table of Contents                                                                                                                                                                                                                                                       | 23 Table of Contents                                                                                                                                                                                                                                                       |
| 1                                                                                                                                                                                                                                                                          | Features........................................................................................................................................... 1                                                                                                                      | Features........................................................................................................................................... 1                                                                                                                      | Features........................................................................................................................................... 1                                                                                                                      |
| 2 General Description ....................................................................................................................... 3                                                                                                                            | 2 General Description ....................................................................................................................... 3                                                                                                                            | 2 General Description ....................................................................................................................... 3                                                                                                                            | 2 General Description ....................................................................................................................... 3                                                                                                                            |
| 2.1                                                                                                                                                                                                                                                                        | 2.1                                                                                                                                                                                                                                                                        | Step Frequencies                                                                                                                                                                                                                                                           | ...................................................................................................................... 4                                                                                                                                                   |
| 2.2                                                                                                                                                                                                                                                                        | 2.2                                                                                                                                                                                                                                                                        | Modes of Motion........................................................................................................................                                                                                                                                    | 4                                                                                                                                                                                                                                                                          |
| 2.3                                                                                                                                                                                                                                                                        | 2.3                                                                                                                                                                                                                                                                        | Notation of Number Systems & Notation of Two to the Power of n ..........................................                                                                                                                                                                  | 5                                                                                                                                                                                                                                                                          |
| 2.4                                                                                                                                                                                                                                                                        | 2.4                                                                                                                                                                                                                                                                        | Signal Polarities.........................................................................................................................                                                                                                                                 | 5                                                                                                                                                                                                                                                                          |
| 2.5                                                                                                                                                                                                                                                                        | 2.5                                                                                                                                                                                                                                                                        | Units of Motion Parameters.......................................................................................................                                                                                                                                          | 5                                                                                                                                                                                                                                                                          |
| 2.6                                                                                                                                                                                                                                                                        | 2.6                                                                                                                                                                                                                                                                        | Representation of Signed Values by Two's Complement.........................................................                                                                                                                                                               | 5                                                                                                                                                                                                                                                                          |
| 2.7                                                                                                                                                                                                                                                                        | 2.7                                                                                                                                                                                                                                                                        | Tables of Contents....................................................................................................................                                                                                                                                     | 5                                                                                                                                                                                                                                                                          |
| 3 Package Variants............................................................................................................................ 5                                                                                                                           | 3 Package Variants............................................................................................................................ 5                                                                                                                           | 3 Package Variants............................................................................................................................ 5                                                                                                                           | 3 Package Variants............................................................................................................................ 5                                                                                                                           |
| 4                                                                                                                                                                                                                                                                          | Pinning ............................................................................................................................................ 6                                                                                                                     | Pinning ............................................................................................................................................ 6                                                                                                                     | Pinning ............................................................................................................................................ 6                                                                                                                     |
| 5 Functional Description and Block Diagram................................................................................. 7 6 Serial Peripheral Interfaces ........................................................................................................... 8 | 5 Functional Description and Block Diagram................................................................................. 7 6 Serial Peripheral Interfaces ........................................................................................................... 8 | 5 Functional Description and Block Diagram................................................................................. 7 6 Serial Peripheral Interfaces ........................................................................................................... 8 | 5 Functional Description and Block Diagram................................................................................. 7 6 Serial Peripheral Interfaces ........................................................................................................... 8 |
| 6.1                                                                                                                                                                                                                                                                        | 6.1                                                                                                                                                                                                                                                                        | Automatic Power-On Reset.......................................................................................................                                                                                                                                            | 8                                                                                                                                                                                                                                                                          |
| 6.2                                                                                                                                                                                                                                                                        | 6.2                                                                                                                                                                                                                                                                        | Serial Peripheral Interface for                                                                                                                                                                                                                                            | 8                                                                                                                                                                                                                                                                          |
| 6.3                                                                                                                                                                                                                                                                        | 6.3                                                                                                                                                                                                                                                                        | µC.............................................................................................. Serial Peripheral Interface to Stepper Motor Driver Chain........................................................                                                         | 9                                                                                                                                                                                                                                                                          |
| 6.4                                                                                                                                                                                                                                                                        | 6.4                                                                                                                                                                                                                                                                        | Datagram Structure.................................................................................................................                                                                                                                                        | 11                                                                                                                                                                                                                                                                         |
| 6.5                                                                                                                                                                                                                                                                        | 6.5                                                                                                                                                                                                                                                                        | Simple Datagram Examples ...................................................................................................                                                                                                                                               | 13                                                                                                                                                                                                                                                                         |
| 7 Address Space Partitions............................................................................................................ 14                                                                                                                                  | 7 Address Space Partitions............................................................................................................ 14                                                                                                                                  | 7 Address Space Partitions............................................................................................................ 14                                                                                                                                  | 7 Address Space Partitions............................................................................................................ 14                                                                                                                                  |
| 7.1                                                                                                                                                                                                                                                                        | 7.1                                                                                                                                                                                                                                                                        | Read and Write .......................................................................................................................                                                                                                                                     | 14                                                                                                                                                                                                                                                                         |
| 7.2                                                                                                                                                                                                                                                                        | 7.2                                                                                                                                                                                                                                                                        | Register Set.............................................................................................................................                                                                                                                                  | 14                                                                                                                                                                                                                                                                         |
| 7.3                                                                                                                                                                                                                                                                        | 7.3                                                                                                                                                                                                                                                                        | RAM Area................................................................................................................................                                                                                                                                   | 14                                                                                                                                                                                                                                                                         |
| 8 Register Description .................................................................................................................... 16                                                                                                                             | 8 Register Description .................................................................................................................... 16                                                                                                                             | 8 Register Description .................................................................................................................... 16                                                                                                                             | 8 Register Description .................................................................................................................... 16                                                                                                                             |
| 8.1                                                                                                                                                                                                                                                                        | 8.1                                                                                                                                                                                                                                                                        | x_target (IDX=%0000).............................................................................................................                                                                                                                                          | 16                                                                                                                                                                                                                                                                         |
| 8.2                                                                                                                                                                                                                                                                        | 8.2                                                                                                                                                                                                                                                                        | x_actual (IDX=%0001)............................................................................................................                                                                                                                                           | 16                                                                                                                                                                                                                                                                         |
| 8.3                                                                                                                                                                                                                                                                        | 8.3                                                                                                                                                                                                                                                                        | v_min (IDX=%0010)................................................................................................................                                                                                                                                          | 16                                                                                                                                                                                                                                                                         |
| 8.4                                                                                                                                                                                                                                                                        | 8.4                                                                                                                                                                                                                                                                        | v_max (IDX=%0011)...............................................................................................................                                                                                                                                           | 17                                                                                                                                                                                                                                                                         |
| 8.5                                                                                                                                                                                                                                                                        | 8.5                                                                                                                                                                                                                                                                        | v_target (IDX=%0100).............................................................................................................                                                                                                                                          | 17                                                                                                                                                                                                                                                                         |
| 8.6                                                                                                                                                                                                                                                                        | 8.6                                                                                                                                                                                                                                                                        | v_actual (IDX=%0101) ............................................................................................................                                                                                                                                          | 17                                                                                                                                                                                                                                                                         |
| 8.7                                                                                                                                                                                                                                                                        | 8.7                                                                                                                                                                                                                                                                        | a_max (IDX=%0110)...............................................................................................................                                                                                                                                           | 17                                                                                                                                                                                                                                                                         |
| 8.7.1 8.8                                                                                                                                                                                                                                                                  | 8.7.1 8.8                                                                                                                                                                                                                                                                  | a_max_lower_limit & a_max_upper_limit for ramp_div pulse_div ................................ a_actual (IDX=%0111)............................................................................................................                                             | 17 18                                                                                                                                                                                                                                                                      |

| 8.9                                                                                                                                   | is_agtat & is_aleat & is_v0 & a_threshold (IDX=%1000) ........................................................                                                                                                         | 18                                                                                                                                               |
|---------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| 8.10                                                                                                                                  | pmul & pdiv (IDX=%1001)................................................................................................... ........................................................................................... | 19                                                                                                                                               |
| 8.11                                                                                                                                  | Calculation of p_mul and p_div                                                                                                                                                                                         | 21                                                                                                                                               |
| 8.11.1                                                                                                                                | Optimized Calculation of p_mul and p_div.......................................................................                                                                                                        | 22                                                                                                                                               |
| 8.12                                                                                                                                  | lp & ref_conf & ramp_mode (rm) (IDX=%1010)                                                                                                                                                                             | .................................................................. 22                                                                            |
| 8.13                                                                                                                                  | interrupt_mask & interrupt_flags (IDX=%1011)...................................................................                                                                                                        | 24                                                                                                                                               |
| 8.14                                                                                                                                  | pulse_div & ramp_div & usrs (IDX=%1100) ........................................................................                                                                                                       | 26                                                                                                                                               |
| 8.15                                                                                                                                  | dx_ref_tolerance (IDX=%1101)...........................................................................................                                                                                                | 27                                                                                                                                               |
| 8.16                                                                                                                                  | x_latched (IDX=%1110) ......................................................................................................                                                                                           | 27                                                                                                                                               |
| 8.17                                                                                                                                  | Unused Address (IDX=%1111) ...........................................................................................                                                                                                 | 27                                                                                                                                               |
| 9 Global Parameter Registers ........................................................................................................ | 9 Global Parameter Registers ........................................................................................................                                                                                  | 27                                                                                                                                               |
| 9.1                                                                                                                                   | datagram_low_word (JDX=%0000) & datagram_high_word (JDX=%0001) ..........................                                                                                                                              | 27                                                                                                                                               |
| 9.2                                                                                                                                   | cover_pos & cover_len (JDX=%0010)....................................................................................                                                                                                  | 28                                                                                                                                               |
| 9.3                                                                                                                                   | cover_datagram (JDX=%0011)...............................................................................................                                                                                              | 28                                                                                                                                               |
| 9.4                                                                                                                                   | Unused Addresses (JDX={%0011, ..., %0111, %1001, ..., %1101}) ......................................                                                                                                                   | 29                                                                                                                                               |
| 9.5                                                                                                                                   | power_down (JDX=%1000) ....................................................................................................                                                                                            | 29                                                                                                                                               |
| 9.6                                                                                                                                   | Reference Switches l3 & r3 & l2 & r2 & l2 & r1 (JDX=%1110)................................................                                                                                                             | 29                                                                                                                                               |
| 9.7                                                                                                                                   | Stepper Motor Global Parameter Register (JDX=%1111)                                                                                                                                                                    | ...................................................... 29                                                                                        |
| 9.8                                                                                                                                   | Triple Switch Configuration                                                                                                                                                                                            | ..................................................................................................... 33                                         |
| 9.9                                                                                                                                   | Reference Search                                                                                                                                                                                                       | ................................................................................................................... 34                           |
| 9.10                                                                                                                                  | Simultanous Start of up to Three Stepper Motors...............................................................                                                                                                         | 34                                                                                                                                               |
| 10                                                                                                                                    | RAM Address Partitioning and Data Organization................................................................ 35                                                                                                      | RAM Address Partitioning and Data Organization................................................................ 35                                |
| 11 Stepper Motor Driver Datagram Configuration...................................................................... 36               | 11 Stepper Motor Driver Datagram Configuration...................................................................... 36                                                                                                | 11 Stepper Motor Driver Datagram Configuration...................................................................... 36                          |
| 11.1                                                                                                                                  | Initialization of on-chip-RAM by µC after power-on .............................................................                                                                                                       | 37                                                                                                                                               |
| 11.2                                                                                                                                  | An Example of a Stepper Motor Driver Datagram Configuration ........................................                                                                                                                   | 38                                                                                                                                               |
| 12                                                                                                                                    | Initialization of the Micro Step Look-Up-Table ......................................................................                                                                                                  | 39                                                                                                                                               |
| 12.1                                                                                                                                  | Stepping through the Wave Look-Up-Table........................................................................                                                                                                        | 41                                                                                                                                               |
| 12.2                                                                                                                                  | Partial look-up table initialization option...............................................................................                                                                                             | 42                                                                                                                                               |
| 12.3                                                                                                                                  | Micro Step Enhancement ....................................................................................................                                                                                            | 43                                                                                                                                               |
| 13                                                                                                                                    | How to get Started in Running a Motor..................................................................................                                                                                                | 44                                                                                                                                               |
| 14                                                                                                                                    | Package Outlines and Dimensions......................................................................................... 45                                                                                            | Package Outlines and Dimensions......................................................................................... 45                      |
| 14.1                                                                                                                                  | Shrink Small Outline Package with 16 Pins (SSOP16, 150 MIL) of TMC428-I and TMC428- 45                                                                                                                                 |                                                                                                                                                  |
| A 14.2                                                                                                                                | Small Outline Package with 24 Pins (SOP24) of TMC428-PI24 .........................................                                                                                                                    | 46                                                                                                                                               |
| 14.3                                                                                                                                  | Dual-In-Line Package with 20 Pins (DIL20) of TMC428-DI20.............................................                                                                                                                  | 47                                                                                                                                               |
| 15                                                                                                                                    | Marking...................................................................................................................................... 48                                                                       | Marking...................................................................................................................................... 48 |
|                                                                                                                                       | Power-On-Reset........................................................................................................................                                                                                 | 50                                                                                                                                               |
| 17                                                                                                                                    |                                                                                                                                                                                                                        |                                                                                                                                                  |
| 18                                                                                                                                    | Characteristics..........................................................................................................................                                                                              | 51                                                                                                                                               |
| 20                                                                                                                                    | Revision History .......................................................................................................................                                                                               | 54                                                                                                                                               |
| 21                                                                                                                                    | Table of Figures........................................................................................................................                                                                               | 56                                                                                                                                               |
| 23                                                                                                                                    | Table of Contents .....................................................................................................................                                                                                | 57                                                                                                                                               |

Please  refer  to  www.trinamic.com  for  updated  data  sheets  and  application  notes  on  this product and on other products.

The TMCtechLIB CD-ROM - including data sheets, application notes, schematics of evaluation boards, software of evaluation boards, source code examples, parameter calculation spreadsheets, tools, and more - is available from TRINAMIC Motion Control GmbH &amp; Co. KG by request.