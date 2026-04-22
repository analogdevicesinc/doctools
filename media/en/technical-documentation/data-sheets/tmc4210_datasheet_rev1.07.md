<!-- lastmod 2023-08-03 -->
## TMC4210 DATASHEET

Low cost 1-Axis Stepper Motor Controller for TMC26x and TMC389 Stepper Driver SPI Communication Interface for Microcontroller and Step/Direction interface to Driver

<!-- image -->

## FEATURES AND BENEFITS

1-Axis stepper motor controller

3.3 V or 5 V operation with CMOS / TTL compatible IOs

Serial 4-wire interface for µC with easy-to-use protocol

Step/Direction interface to driver

Clock frequency: up to 32 MHz (can use CPU clock)

Internal position counters 24 bit wide

Microstep frequency up to 1 MHz

Read-out option for all motion parameters

Ramp generator for autonomous positioning / speed control

On-the-fly change of target motion parameters

Low power operation

: 1.25 mA at 4 MHz (typ.)

Compact Size: ultra-small 16 pin SSOP package

Directly controls TMC2208,  TMC2209,  TMC2226,  TMC2590, TMC2660, TMC26x, TMC2100, TMC2300 &amp; more Step/Dir drivers

## BLOCK DIAGRAM

<!-- image -->

<!-- image -->

## APPLICATIONS

CCTV, Security Antenna Positioning Heliostat Controller Battery powered applications Office Automation ATM, Cash recycler, POS Lab Automation Liquid Handling Medical Printer and Scanner Pumps and Valves

## DESCRIPTION

The TMC4210 is a 1-axis miniaturized stepper  motor  controller  with  an  industry leading  feature  set.  It  controls  the  motor via Step/Direction interface. Based on target positions and velocities - which can be altered  on  the  fly - it performs all real time critical tasks autonomously. The TMC4210 offers high level control functions for  robust  and  reliable  operation.  The  4 wire  serial  peripheral  interface  allows  for communication with the microcontroller.

Together with a microcontroller the TMC4210 forms a complete motion control system.  High  integration  and  small  form factor  allow  for  miniaturized  designs  for cost-effective and highly competitive solutions.

<!-- image -->

## APPLICATION EXAMPLE: RELIABLE CONTROL USING STEP/DIR

The TMC4210 scores with its autonomous handling of all real time critical tasks. By offloading the motion control function to the TMC4210, the stepper motor can be operated reliably with very little demand for service from the microcontroller. Software only needs to send target positions, and the TMC4210  generates  precisely  timed  step  pulses  by  hardware.  Parameters  for  the  motor  can  be changed on the fly while software retains full control. This way, high precision and reliable operation is achieved while costs are kept down.

## TMC4210+TMC2660-EVAL EVALUATION BOARD

<!-- image -->

## LOGIC OF THE CONTROLLER/DRIVER CHAIN

<!-- image -->

## SYSTEM WITH TMC4210 AND TMC2660

<!-- image -->

## ORDER CODES

| Order code   | Description                                                 | Size       |
|--------------|-------------------------------------------------------------|------------|
| TMC4210-I    | 1-Axis Motion Controller IC, SPI, Step/Dir,SSOP16,Tube      | 5 x 4 mm 2 |
| TMC4210-I-T  | 1-Axis Motion Controller IC, SPI,Step/Dir,SSOP16,Tape& Reel | 5 x 4 mm 2 |

This evaluation board is  a  development platform for applications based on the TMC4210  and  the  TMC2660  stepper  motor driver  IC.  The  board  features  USB and  CAN interfaces  for  communication  with  control software running on a PC. The  power MOSFETs of the TMC2660  support  drive currents up to 2.8A RMS at 29V.

The control software provides a user-friendly GUI for setting control parameters  and visualizing  the  dynamic  response  of  the motor.

## TABLE OF CONTENTS

| 1 PRINCIPLES OF OPERATION                   | 1 PRINCIPLES OF OPERATION                                          | 4                                                      | 7.3 HOMING P ROCEDURE 37   |
|---------------------------------------------|--------------------------------------------------------------------|--------------------------------------------------------|----------------------------|
| 1.1                                         | K EY C ONCEPTS 4                                                   | 8 STEP/DIR DRIVERS                                     | 38                         |
| 1.2                                         | C ONTROL I NTERFACES 5                                             |                                                        | 38                         |
| 1.3                                         | S OFTWARE V ISIBILITY 5                                            | 8.1 T IMING                                            |                            |
| 1.4                                         | S TEP F REQUENCIES 6                                               | 9 RUNNING A MOTOR                                      | 39                         |
| 1.5                                         | MOVING THE MOTOR 7                                                 | 9.1 GETTING S TARTED                                   | 39                         |
| 2 GENERAL DEFINITIONS, UNITS, AND NOTATIONS | 8                                                                  | 9.2 R UNNING A MOTOR WITH S TART -S TOP -S RAMP _ MODE | PEED IN 39                 |
| 2.1                                         | NOTATIONS 8                                                        | 10 ON-CHIP VOLTAGE REGULATOR                           | 40                         |
| 2.2                                         | S IGNAL P OLARITIES 8                                              |                                                        | 41                         |
| 2.3                                         | UNITS OF MOTION P ARAMETERS 8                                      | 11 POWER-ON RESET                                      |                            |
| 2.4                                         | R EPRESENTATION OF S IGNED V ALUES BY TWO ' S C OMPLEMENT 8        | 12 ABSOLUTE MAXIMUM 13 ELECTRICAL CHARACTERISTICS      | RATINGS 42 42              |
| 3 PACKAGE                                   | 9                                                                  | 13.1 P OWER DISSIPATION                                | 42                         |
| 3.1                                         | P ACKAGE OUTLINE 9                                                 | DC C                                                   |                            |
|                                             |                                                                    | 13.2 HARACTERISTICS                                    | 43                         |
| 3.2                                         | S IGNAL DESCRIPTIONS 9                                             | 13.3 T IMING C HARACTERISTICS                          | 44                         |
| 4 SAMPLE CIRCUIT 5 CONTROL INTERFACE        | 12                                                                 | 15.1 DIMENSIONAL DRAWINGS                              | 45                         |
| 5.1                                         | BUS S IGNALS 12                                                    | 16 MARKING                                             | 46                         |
| 5.2                                         | S ERIAL P ERIPHERAL I NTERFACE FOR µ C 12                          |                                                        |                            |
| 5.3                                         | R EGISTER MAPPING 17                                               | 17 DISCLAIMER                                          | 47                         |
| 6 REGISTER DESCRIPTION                      | 6 REGISTER DESCRIPTION                                             | 18 18 ESD SENSITIVE                                    | DEVICE 47                  |
| 6.1                                         | AXIS P ARAMETER R EGISTERS 18                                      | 19 TABLE OF FIGURES                                    | 48                         |
| 6.2                                         | GLOBAL P ARAMETER R EGISTERS 34                                    | 20 REVISION HISTORY                                    | 48                         |
| 7                                           | REFERENCE SWITCH INPUTS 36                                         | REFERENCES                                             | 48                         |
| 7.1                                         | R S C ,                                                            | 21                                                     |                            |
| 7.2                                         | EFERENCE WITCH ONFIGURATION MOT 1 R T RIPLE S WITCH C ONFIGURATION | 36 36                                                  |                            |

## 1 Principles of Operation

Figure 1.1 TMC4210 functional block diagram

<!-- image -->

The TMC4210 is a 1-axis miniaturized high performance stepper motor controller with an outstanding cost-performance ratio. It is designed for high volume automotive as well as for demanding industrial motion  control  applications.  The  TMC4210  receives  target  values  for  velocity,  acceleration,  and positioning from the microcontroller and calculates autonomously step and direction signals for the stepper motor driver IC. The motion controller is equipped with an SPI host interface with easy-to-use protocol and with a Step/Dir interface for addressing the stepper motor driver chip.

## 1.1 Key Concepts

The TMC4210 realizes real time critical tasks autonomously and guarantees for a robust and reliable drive.  These  following  features  contribute  toward  greater  precision,  greater  efficiency,  higher reliability, and smoother motion in many stepper motor applications.

- Interfacing

The TMC4210 provides an SPI interface for communication with the user CPU and a Step/Dir interface for driver interfacing.

Positioning

The  TMC4210  operates  the  motor  based  on  user  specified  target  positions  and velocities. Modify all motion target parameters on-the-fly during motion.

- Programming

Every parameter can be changed at any time. The uniform access to any TMC4210 register  simplifies  application  programming.  A  read-back  option  for  all  internal registers is available.

Microstepping Based on internal position counters the TMC4210 performs up to ±2 23  (micro)steps completely independent from the microcontroller. Via STEP/DIR signals any microstep resolution can be realized as supported by the driver.

## 1.2 Control Interfaces

## 1.2.1 Serial µC Interface

Using this interface, the TMC4210 receives target positions, target velocities, and target acceleration values for the microcontroller. Further, it is used for configuration.

From  the  software  point  of  view,  the  TMC4210  provides  a  set  of  registers,  accessed  by  the microcontroller via a serial interface in a uniform way. Each datagram contains address bits, a readwrite selection bit, and data bits to access the registers and the on-chip memory.  Each time the microcontroller sends a datagram to the TMC4210 it simultaneously receives a datagram from the TMC4210. This simplifies the communication with the TMC4210 and makes programming easy. Most microcontrollers have an SPI hardware interface, which directly connects to the serial four wire microcontroller interface of the TMC4210. For microcontrollers without SPI   hardware software doing the serial communication is sufficient and can easily be implemented.

## 1.2.2 Step/Dir Driver Interface

The TMC4210-I controls the motor position by sending pulses on the STEP signal while indicating the direction on the DIR signal. A programmable step pulse length and step frequencies up to 1MHz allow operation at high speed and high microstep resolution. The driver chip converts these signals into the coil currents which control the position of the motor. The TMC4210-I perfectly fits to the TMC26x smart power Step/Dir driver family.

Figure 1.2 Application example using Step/Dir driver interface

<!-- image -->

## 1.3 Software Visibility

From the software point of view the TMC4210 provides a set of registers and on-chip RAM (see Figure 1.1), accessed via the serial µC interface in a uniform way. The serial interface uses a simple protocol with fixed datagram length for the read- and write-access. These registers are used for initializing the chip as required by the hardware configuration. Afterwards the motor can be moved by writing target positions or velocity and acceleration values.

## 1.4 Step Frequencies

## INITIALIZE THE STEP/DIR INTERFACE!

The Step/Dir interface has to be initialized by writing 1 to en\_sd . Refer to chapter 6.2.1.

The  desired  motor  velocity  is  an  important  design  parameter  of an application. Therefore, it is important to understand the limiting factors.

## 1.4.1 Step Frequencies using the Step/Dir Driver Interface

The step pulses can directly be fed to a Step/Dir driver. The maximum full step rate (fsf max) depends on the microstep resolution of the external driver chip.

The TMC4210 microstep rate (µsf) is up to 1/32 of the clock frequency:

<!-- formula-not-decoded -->

## EXAMPLE FOR FULL STEP FREQUENCY CALCULATION

f CLK = 16 MHz

µsf max = 500 kHz

µstep resolution of external driver: 16

<!-- formula-not-decoded -->

With a standard motor with 1.8° per full step this results in up to 31.25kHz/200= 156 rotations per second, which is far above realistic motor velocities for this kind of motor and thus imposes no real limit on the application.

A 16 microsteps resolution can be extrapolated to 256 microsteps within the driver when using the TMC26x 2-phase stepper driver family or the TMC389 3-phase stepper motor driver.

## 1.5 Moving the Motor

Moving the motor is simple:

- -To move a motor to a new target position, write the target position into the associated register by sending a datagram to the TMC4210.
- -To move a motor with a new target velocity ,  write the velocity into the register assigned to the stepper motor.

## 1.5.1 Motion Controller Functionality

The ramp generator monitors the motion parameters stored in its registers and calculates velocity profiles. Based on the actual ramp generator velocity, a pulse generator supplies step pulses to the motor driver.

## 1.5.2 Modes of Motion

ramp\_mode

For positioning applications the ramp\_mode is  most suitable. The user sets the position  and  the  TMC4210  calculates  a  trapezoidal  velocity  profile  and  drives autonomously to the target position. During motion, the position may be altered arbitrarily.

velocity\_mode hold\_mode

For constant velocity applications the velocity\_mode is most  suitable. In velocity\_mode ,  a  target  velocity  is set by the user and the TMC4210 takes into account user defined limits of velocity and acceleration.

In hold\_mode ,  the  user  sets  target  velocities,  but the TMC4210 ignores any limits of velocity and acceleration, to realize arbitrary velocity profiles, controlled completely by the user.

soft\_mode

The soft\_mode is  similar to the ramp\_mode , but the decrease of the velocity during deceleration is done with a soft, exponentially shaped velocity profile.

## 1.5.3 Interrupts

The  TMC4210  has  capabilities  to  generate  interrupts.  Interrupts  are  based  on  ramp  generator conditions which can be set using an interrupt mask. The interrupt controller (which continuously monitors reference switches and ramp generator conditions) generates an interrupt if required.

nINT\_SDO\_C is a low active interrupt signal while nSCS\_C is high. If the microcontroller disables the interrupt during access to the TMC4210 and enables the interrupt otherwise, the multiplexed interrupt output of the TMC4210 behaves like a dedicated interrupt output. For polling, the TMC4210 sends the status of the interrupt signal to the microcontroller with each datagram.

## 1.5.4 Reference Switch Handling

The TMC4210 has a left (REF\_L) and a right (REF\_R) reference switch input. Further, the TMC4210 is equipped with a general purpose input (GP\_IN).

## INITIALIZE THE RIGHT REFERENCE SWITCH!

The right reference switch REF\_R has to be initialized by writing 1 to mot1r .

## 1.5.5 Access to Status and Error Bits

The microcontroller directly controls and monitors the stepper driver. It also needs to take care for advanced current control, e.g. power down in stand still.

## 2 General Definitions, Units, and Notations

## 2.1 Notations

- -Decimal numbers are used as usual without additional identification.
- -Binary numbers are identified by a prefixed % character.
- -Hexadecimal numbers are identified by a prefixed $ character.

## EXAMPLE

Decimal:

42

Binary:

%101010

Hexadecimal:

$2A

## TMC4210 DATAGRAMS ARE WRITTEN AS 32 BIT NUMBERS, E.G.:

$1234ABCD = %0001 0010 0011 0100 1010 1011 1100 1101

## TWO TO THE POWER OF N

In addition to the basic arithmetic operators (+, -, *, /) the operator two to the power of n is required at different sections of this data sheet. For better readability instead of 2 n the notation 2^n is used.

## 2.2 Signal Polarities

External  and  internal  signals  are  high  active  per  default,  but  the  polarity  of  some  signals  is programmable to be inverted. A pre-fixed lower-case n indicates low active signals (e.g. nSCS\_C, nSCS\_S ).  See  chapter 6.2, too.

## 2.3 Units of Motion Parameters

The motion parameters position , velocity ,  and acceleration are given as integer values within TMC4210 specific units. With a given stepper motor resolution one can calculate physical units for angle, angular velocity, angular acceleration. (See chapter 6.1.12)

## 2.4 Rep resentation of Signed Values by Two's Complement

Motion parameters which have to cover negative and positive motion direction are processed as signed numbers represented by two's complement as usual. Limit motion parameters are represented as unsigned binary numbers.

## SIGNED MOTION PARAMETERS ARE:

X\_TARGET / X\_ACTUAL / V\_TARGET / V\_ACTUAL / A\_ACTUAL / A\_THRESHOLD

## UNSIGNED MOTION PARAMETERS ARE:

V\_MIN / V\_MAX / A\_MAX

## 3 Package

The TMC4210 is qualified for the industrial temperature range. The package is RoHS compilant.

| Order code   | Package   | Characteristics                                              | JEDEC Drawing     |
|--------------|-----------|--------------------------------------------------------------|-------------------|
| TMC4210-I    | SSOP16    | 150 mils, 16 pins, plastic package, industrial (- 40… +85°C) | MO-137 (150 mils) |

## 3.1 Package Outline

Figure 3.1 TMC4210 pin out

<!-- image -->

## 3.2 Signal Descriptions

| Pin        | SSOP16   | In/Out   | Description                                                                                                                                           |
|------------|----------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Reset      | -        | -        | Internal power-on reset. No external reset input pin is available.                                                                                    |
| CLK        | 5        | I        | Clock input                                                                                                                                           |
| nSCS_C     | 6        | I        | Low active SPI chip select input driven from µC                                                                                                       |
| SCK_C      | 7        | I        | Serial data clock input driven from µC                                                                                                                |
| SDI_C      | 8        | I        | Serial data input driven from µC                                                                                                                      |
| nINT_SDO_C | 9        | O        | Serial data output to µC input / Multiplexed nINTERRUPT output if communication with µC is idle (resp. nSCS_C = 1) SDO_C will never be high impedance |
| n.c.       | 12, 16   | -        | Leave open                                                                                                                                            |
| SCK_S      | 11       | O        | DIR output                                                                                                                                            |
| SDO_S      | 10       | O        | STEP output                                                                                                                                           |
| REF_L      | 1        | I        | Left reference/limit switch input. Pull to GND if not used. (no internal pull-up resistor)                                                            |
| GP_IN      | 2        | I        | General purpose input. Pull to GND if not used. (no internal pull-up resistor)                                                                        |
| REF_R      | 3        | I        | Right reference/limit switch input. Pull to GND if not used. (no internal pull-up resistor)                                                           |
| V5         | 13       |          | +5V supply / +3.3V supply                                                                                                                             |
| V33        | 14       |          | 470nF ceramic capacitor pin / +3.3V supply                                                                                                            |
| GND        | 15       |          | Ground                                                                                                                                                |
| TEST       | 4        | I        | Must be connected to GND as close as possible to the chip. No user function.                                                                          |

Please refer to the application note

## PCB\_Guidelines\_TRINAMIC\_packages

for a practical guideline for all available TRINAMIC IC  packages  and  PCB  footprints.  The  application note covers package dimensions, example footprints and general information on PCB footprints  for  these  packages.  It is available on www.trinamic.com.

## Attention

- -Preferably, long wires to the reference switch inputs and the general purpose input should be avoided. For long wires, a low pass filter for spike suppression should be provided (refer the TMC4210 evaluation board schematic as example).
- -All inputs are Schmitt-Trigger. Unused inputs (REF\_L, REF\_R, and GP\_IN) need to be connected to ground. Unused reference switch inputs have to be connected to ground, too.

## 4 Sample Circuit

This application example shows how to connect the TMC4210 motion controller with the processor and one out of TRINAMICs TMC260, TMC261, and TMC2660 stepper motor driver chips. These stepper motor driver chips have integrated MOSFETs. The TMC262 needs external power transistors.

Figure 4.1 TMC4210 application environment with TMC260, TMC261 or TMC2660.

<!-- image -->

## 5 Control Interface

The communication takes place via a four-wire serial interface and 32 bit datagrams of fixed length.

## RESPONSIBILITIES ARE DEFINED AS FOLLOWS:

- -The microcontroller is the master of the TMC4210. It initializes the motion controller and sets target values for velocity, acceleration, and positioning.
- -The TMC4210 is the master of the stepper motor driver. The motion controller calculates, e.g., ramp profiles for positioning. It sends step and direction signals to the stepper motor driver.
- -The microcontroller initializes the stepper motor driver. Further, the microcontroller can read out status and error flags and thus make the diagnostics.

## AUTOMATIC POWER-ON RESET:

- -The TMC4210 cannot be accessed before the power-on reset is completed and the clock is stable.
- -All register bits are initialized with 0 during power-on reset, except the Step/Dir clock pre-devider STPDIV\_4210 that is initialized with 15.

## 5.1 Bus Signals

| Signal Description   | TMC4210 Microcontroller   |
|----------------------|---------------------------|
| Bus clock input      | SCK_C                     |
| Serial data input    | SDI_C                     |
| Serial data output   | SDO_C                     |
| Chip select input    | nSCS_C                    |

## 5.2 Serial Peripheral Interface for µC

The serial microcontroller interface of the TMC4210 acts as a 32-bit shift register.

## COMMUNICATION BETWEEN µC AND THE TMC4210

1. The serial µC interface shifts serial data into SDI\_C with each rising edge of the clock signal SCK\_C.
2. Then, it copies the content of the 32-bit shift register into a buffer register with the rising edge of the selection signal nSCS\_C.
3. The serial interface of the TMC4210 immediately sends back data read from registers or read from internal RAM via the signal SDO\_C.
4. The signal SDO\_C can be sampled with the rising edge of SCK\_C. SDO\_C becomes valid at least four CLK clock cycles after SCK\_C becomes low as outlined in the timing diagram.

## 5.2.1 Timing

A complete serial datagram frame has a fixed length of 32 bit. Because of on-the-fly processing of the input data stream, the serial µC interface of the TMC4210 requires the serial data clock signal SCK\_C to have a minimum low / high time of three clock cycles. The SPI signals from the µC interface may be asynchronous to the clock signal CLK of the TMC4210.

If the microcontroller and the TMC4210 work on different clock domains that run asynchronously by the timing of the SPI interface of the microcontroller should be made conservative in the way that the length of one SPI clock cycle equals 8 or more clock cycles of the TMC4210 clock CLK.

Figure 5.1 Timing diagram of the serial µC interface

<!-- image -->

## EXPLANATORY NOTES

- -While the data transmission from the microcontroller to the TMC4210 is idle, the low active serial chip select input nSCS\_C and also the serial data clock signal SCK\_C are set to high.
- -While the signal nSCS\_C is high, the  TMC4210 assigns the status of the internal low active interrupt signal nINT to the serial data output SDO\_C.
- -The data signal SDI\_C driven by the microcontroller has to be valid at the rising edge of the serial data clock input SCK\_C. The maximum duration of the serial data clock period is unlimited.
- -While the µC interface of the TMC4210 is idle, the SDO\_C signal is the (active low) interrupt status nINT  of  the  integrated  interrupt  controller  of  the  TMC4210.  The  timing  of the multiplexed interrupt status signal nINT is characterized by the parameters t IS and t SI (see chapter 13.3).

The following SPI clock frequencies are recommended in order to avoid possible issues concerning the SPI frequency between microcontroller and TMC4210:

-   For fCLK = 16MHz an upper SPI clock frequency of 1MHz is recommended.
-   For fCLK = 32MHz an upper SPI clock frequency of 2MHz is recommended.

## PROCEDURE OF DATA TRANSMISSION

1. The signal nSCS\_C has to be high for at least three clock cycles before starting a datagram transmission. To initiate a transmission, the signal nSCS\_C has to be set to low.
2. Three clock cycles later the serial data clock may go low.
3. The most significant bit (MSB) of a 32 bit wide datagram comes first and the least significant bit (LSB) is transmitted as the last one.
4. A data transmission is finished by setting nSCS\_C high three or more CLK cycles after the last rising SCK\_C slope.
5. So,  nSCS\_C  and  SCK\_C change in opposite order from low to high at the end of a data transmission as these signals change from high to low at the beginning.

In contrast to most other SPI compatible devices, the serial data output SDO\_C of the TMC4210-I is always  driven.  It  will  never  be high impedance Z. If high impedance is required for the SDO\_C connected to the microcontroller, it can be realized using a single gate 74HCT1G125.

| TIMING CHARACTERISTICS OF THE SERIAL MICROCONTROLLER INTERFACE   | TIMING CHARACTERISTICS OF THE SERIAL MICROCONTROLLER INTERFACE   | TIMING CHARACTERISTICS OF THE SERIAL MICROCONTROLLER INTERFACE   | TIMING CHARACTERISTICS OF THE SERIAL MICROCONTROLLER INTERFACE   | TIMING CHARACTERISTICS OF THE SERIAL MICROCONTROLLER INTERFACE   | TIMING CHARACTERISTICS OF THE SERIAL MICROCONTROLLER INTERFACE   |
|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------------------------------------------------------------|
| Symbol                                                           | Parameter                                                        | Min                                                              | Typ                                                              | Max                                                              | Unit                                                             |
| tSUCSC                                                           | Setup Clocks for nSCS_C                                          | 3                                                                |                                                                  |                                                                 | CLK periods                                                      |
| tHDCSC                                                           | Hold Clocks for nSCS_C                                           | 3                                                                |                                                                  |                                                                 | CLK periods                                                      |
| tSCKCL                                                           | Serial Clock Low                                                 | 3                                                                |                                                                  |                                                                 | CLK periods                                                      |
| tSCKCH                                                           | Serial Clock High                                                | 3                                                                |                                                                  |                                                                 | CLK periods                                                      |
| tSD                                                              | SDO_C valid after SCK_C low                                      | 2.5                                                              |                                                                  | 3.5                                                              | CLK periods                                                      |
| tIS                                                              | nINTERRUPT status valid after nSCS_C low                         | 2.5                                                              |                                                                  |                                                                  | CLK periods                                                      |
| tSI                                                              | SDO_C valid after nSCS_C high                                    |                                                                  |                                                                  | 4.5                                                              | CLK periods                                                      |
| tDAMAGRAMuC                                                      | Datagram Length                                                  | 3+3+32*6= 198                                                    |                                                                  |                                                                 | CLK periods                                                      |
| tDAMAGRAMuC                                                      | Datagram Length                                                  | 12.375                                                           |                                                                  |                                                                 | µs                                                               |
| fCLK                                                             | Clock Frequency                                                  | 0                                                                |                                                                  | 32                                                               | MHz                                                              |
| tCLK                                                             | Clock Period tCLK = 1 / fCLK                                     | 31.25                                                            |                                                                  |                                                                 | ns                                                               |
| tPD                                                              | CLK-rising-edge-to-Output Propagation Delay                      |                                                                  | 5                                                                |                                                                  | ns                                                               |

## 5.2.2 Datagram Structure

The µC communicates with the TMC4210 via the four-wire serial interface. Each datagram sent to the TMC4210 via the pin SDI\_C and each datagram received from the TMC4210 via the pin SDO\_C is 32 bits long.

The first bit sent is the most significant bit (MSB) sdi\_c\_bit#31. The last bit sent is the least significant bit (LSB) sdi\_c\_bit#0 (see Figure 5.1). During the reception of a datagram, the TMC42 10 immediately sends back a datagram of the same length to the microcontroller. This return datagram consists of requested read data in the lower 24 datagram bits and status bits in the higher 8 datagram bits. A read request is distinguished from a write request by the read/not write datagram bit (RW) .

## 5.2.2.1 Datagrams Sent to the TMC4210

The datagrams sent to the TMC4210 are assorted in four groups of bits:

RRS

The register RAM select (RRS) bit

selects either registers or the on-chip RAM.

ADDRESS

Address bits address memory within the register set or within the RAM area.

RW

The read / not write (RW) bit distinguishes between read access and write access: read: RW = 1 / write RW = 0.

DATA

Data bits are only for write access. For read access these bits are not used ( don't care ) and should be set to 0.

<!-- image -->

| MSB   | 32 BIT DATAGRAM SENT FROM µ C TO THE TMC4210 VIA PIN SDI_C   |
|-------|--------------------------------------------------------------|

## NOTE

- -Different internal registers of the TMC4210 have different lengths. For some registers only a subset of 24 data bits is used.
- -Unused data bits should be set to 0.
- -Some addresses select a couple of registers mapped together into the 24 data bit space.

## 5.2.2.2 Datagrams Received by µC from the TMC4210

The datagrams received by the µC from the TMC4210 contain two groups of bits:

STATUS BITS

## DATA BITS

The  status  bits,  sent  back  with  each  datagram,  comprehend  the  most important internal status bits of the TMC4210 and the settings of the reference switches Data bits are only for write access.

The most significant bit MSB is received first; the least significant bit LSB is received last. The TMC4210 only sends datagrams on demand.

<!-- image -->

| MSB   | 32 BIT DATAGRAM SENT BACK FROM THE TMC4210 TO µ C VIA PIN SDO_C   |
|-------|-------------------------------------------------------------------|

## STATUS INFORMATION BITS

| INT   | The status bit INT is the internal high active interrupt controller status output signal . Handling of interrupt conditions without using interrupt techniques is possible by polling this status bit. The interrupt signal is available multiplexed with the SPI read back data at the nINT_SDO_C pin of the TMC4210. The pin nINT_SDO_C may additionally be connected to an interrupt input of the microcontroller. Do not set SDO_INT=1 because this setting disables the SPI output. Since the SDO_C / nINT output on TMC4210-I is multiplexed, the microcontroller has to disable its interrupt input while it sends a datagram to the TMC4210. The SDO_C signal driven by the TMC4210 alternates during datagram transmission.   |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R_L   | The status bit R_L represents the state of the left reference switch input ( r_l ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| R_R   | r_r is visible here only, while mot1R has not yet been set.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| GP_IN | The GP_IN status bit represents the setting of the general purpose input. Refer to chapter 6.1.10.2, too.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| xEQt1 | The status bit xEQt1 indicates for the stepper motor, if it has reached its target position.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

The status bits r\_r , r\_l ,  and gp\_in and the bit xEQt1 can trigger an interrupt or enable simple polling techniques. See chapter 5.3, register 01 1110 for accessing the input bits.

## 5.2.3 Simple Datagram Examples

The % prefix -normally indicating binary representation in this data sheet -is  omitted for the following datagram examples. Assuming, one would like to write (RW=0) to a register (RRS= 0) at the address %001101 the following data word %0000 0000 0000 0001 0010 0011, one would have to send the following 32 bit datagram

## 0001101 0 000000000000000100100011

to the TMC4210. With inactive interrupt ( INT =0), no cover datagram waiting ( CDGW =0), all reference switches inactive (RS3=0, RS2=0, RS1=0), and all stepper motors at target positi on (xEQt3=1, xEQt2=1, xEQt1=1) the status bits would be %10010101 the TMC4210 would send back the 32 bit datagram: 10010101000000000000000000000000

To read (RW= 1 ) back the register written before, one would have to send the 32 bit datagram

0001101 1 000000000000000000000000

to the TMC4210 and the TMC4210 would reply with the datagram

10010101000000000000000100100011.

Write (RW=0) access to on-chip RAM (RRS=1) to an address %111111 occurs similar to register access, but with RRS=1. To write two 6 bit data words %100001 and %100011 to successive pair-wise RAM addresses %1111110 and %1111111 (%100001 to %1111110 and %100011 to %1111111) which are commonly addressed by one datagram,  one would have to send the datagram

1111111 0 000000000010001100100001.

To read (rw= 1 )  from that on-chip memory address, one would have to send the datagram 1111111 1 000000000000000000000000.

## 5.3 Register Mapping

All register bits are initialized with 0 during power on reset, except the step pulse length setting that is initialized with 15. During power-up, the on-chip RAM of the TMC4210 is initialized internally and the chip does not send any datagrams to the stepper motor driver.

## CHANGING TARGET POSITION OR TARGET VELOCITY

The stepper motor is controlled directly by writing motion parameters into associated registers. Only one  register  write  access  is  necessary  for  changing  a  target  motion  parameter.  Thus  the microcontroller has to send one 32 bit datagram to the TMC4210 for altering the target position or the target velocity of the stepper motor.

## READ AND WRITE

Read and write access is selected by the RW bit (sdi\_c\_bit#24) of the datagram sent from the µC to the TMC4210. The on-chip configuration RAM and the registers are writeable with read-back option. Some addresses are read-only. Write access (RW=0) to some of those read-only registers triggers additional functions, explained in detail later.

## TMC4210 REGISTER MAPPING

32 BIT DATAGRAM SENT FROM µC TO THE TMC4210 VIA PIN SDI\_C

3

1

3

0

2

9

2

8

2

7

2

6

2

5

2

4

2

3

2

2

2

1

2

0

1

9

1

8

1

7

1

6

1

5

1

4

1

3

1

2

1

1

1

0

| ADDRESS RW   | ADDRESS RW   | ADDRESS RW   | ADDRESS RW   | ADDRESS RW   | ADDRESS RW   |
|--------------|--------------|--------------|--------------|--------------|--------------|

| SMDA   | Stepper motor driver address   | r_l, r_r, gp_in   | Left switch / right switch / general purpose input (read out)   |
|--------|--------------------------------|-------------------|-----------------------------------------------------------------|
| R_ M   | RAMP_MODE mask                 | I                 | Interrupt                                                       |
|        | Unused bits                    |                   |                                                                 |

9

8

7

6

5

4

3

2

1

0

## 6 Register Description

The TMC4210 provides axis parameter registers and global parameter registers.

## 6.1 Axis Parameter Registers

The registers hold binary coded numbers. Some are unsigned (positive) numbers, some are signed numbers in two's complement, and some are control bits or single fla gs. The functionality of different registers depends on the RAMP\_MODE (refer to chapter 6.1.10).

## OVERVIEW AXIS PARAMETER REGISTER MAPPING

| REGISTER                       | R/W         | T YPE                  | DESCRIPTION                                                                                                                                                                                                                           |
|--------------------------------|-------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| X_TARGET                       | R/W         | 24 bit unsigned        | This register holds the current target position in units of microsteps.                                                                                                                                                               |
| X_ACTUAL                       | R/W* 2      | 24 bit unsigned        | The current position of each stepper motor is available by read out of this register.                                                                                                                                                 |
| V_MIN                          | R/W         | 11 bit unsigned        | This register holds the absolute velocity value at or below which the stepper motor can be stopped abruptly.                                                                                                                          |
| V_MAX                          | R/W         | 11 bit unsigned        | This parameter sets the maximum motor velocity.                                                                                                                                                                                       |
| V_TARGET                       | R/W         | 12 bit signed          | The V_TARGET register holds the current target velocity. The use of V_TARGET depends on the chosen mode of operation.                                                                                                                 |
| V_ACTUAL                       | R* 1        | 12 bit signed          | This read-only register holds the current velocity of the stepper motor.                                                                                                                                                              |
| A_MAX                          | R/W         | 11 bit unsigned        | This register defines the absolute value of the desired acceleration for velocity_mode and ramp_mode (resp. soft_mode ) with a value range from 0 to 2047.                                                                            |
| A_ACTUAL                       | R           | 11 bit unsigned        | The actual acceleration can be read out by the microcontroller from the A_ACTUAL read-only register.                                                                                                                                  |
| PMUL PDIV                      | R/W R/W     | 1+7 bit 4 bit unsigned | These values form a floating point number with PMUL as mantissa and PDIV as exponent. PMUL and PDIV are used for calculating the deceleration ramp.                                                                                   |
| RAMP_MODE REF_CONF lp          | R/W R/W R   | 2 bit 4 bit 1 bit      | The two bits RAMP_MODE ( R_M ) select one of the four possible modes of operation. The configuration bits REF_CONF select the behavior of the reference switches. The bit called lp (latched position) is a read only status bit.     |
| INTERRUPT_MASK INTERRUPT_FLAGS | R/W R/W     | 8 bit 8 bit            | The TMC4210 provides one interrupt register of eight flags for the stepper motor.                                                                                                                                                     |
| RAMP_DIV PULSE_DIV             | R/W R/W R/W | 4 bit 4 bit 2 bit      | The parameter RAMP_DIV scales the acceleration parameter A_MAX. The pulse generator clock - defining the maximum step pulse rate - is determined by the parameter PULSE_DIV . The parameter PULSE_DIV scales the velocity parameters. |
| DX_REF_TOLERANCE               | R/W         | 12 bit                 | DX_REF_TOLERANCE excludes a motion range to allow motion near the reference position.                                                                                                                                                 |
| X_LATCHED                      | R           | 24 bit unsigned        | This read-only register stores the actual position X_ACTUAL upon a change of the reference switch state.                                                                                                                              |
| USTEP_COUNT_4210               | R/W         | 8 bit                  | The read-write register USTEP_COUNT_4210 holds the actual microstep pointer of the internal sequencer.                                                                                                                                |

## 6.1.1 X\_TARGET (IDX=%0000)

This register holds the current target position in units of microsteps.

## UNIT OF TARGET POSITION

The unit of the target position depends on the setting of the associated stepper driver microstep resolution usrs .

## POSITIONING

- -If  the difference X\_TARGET to X\_ACTUAL is not zero and R\_M = ramp\_mode or soft\_mode , the TMC4210 moves the stepper motor in the direction of X\_TARGET in order to position X\_ACTUAL to X\_TARGET . Usually X\_TARGET is modified to start a positioning.
- -The condition | X\_TARGET -X\_ACTUAL | &lt; 2 23 must be satisfied for motion into correct direction.
- -Target position X\_TARGET and current position X\_ACTUAL may be altered on the fly.
- -To  move  from  one  position  to  another,  the  ramp  generator  of  the TMC4210 automatically generates ramp profiles in consideration of the velocity limits V\_MIN and V\_MAX and acceleration limit A\_MAX .

The registers X\_TARGET , X\_ACTUAL , V\_MIN , V\_MAX ,  and A\_MAX are initialized with zero after power up.

## 6.1.2 X\_ACTUAL (IDX=%0001)

The current position of the stepper motor is available by read out of the registers called X\_ACTUAL . The  actual position can be overwritten by the microcontroller. This feature is important for the reference switch position calibration controlled by the microcontroller.

## UNIT OF CURRENT POSITION

The unit of the target position depends on the setting of the associated stepper driver microstep resolution usrs .

## Attention

Before overwriting X\_ACTUAL choose velocity\_mode or hold\_mode .

If X\_ACTUAL is overwritten in ramp\_mode or soft\_mode the motor directly drives to X\_TARGET .

## 6.1.3 V\_MIN (IDX=%0010)

This register holds the absolute velocity value at or below which the stepper motor can be stopped abruptly.

## UNIT OF VELOCITY

The unit of velocity parameters is steps per time unit .  The scale of velocity parameters ( V\_MIN , V\_MAX , V\_TARGET , V\_ACTUAL )  is  defined by the parameter PULSE\_DIV (see page 6.1.12 for details) and depends on the clock frequency of the TMC4210.

## DECELERATION

- -The parameter V\_MIN is  relevant for deceleration while reaching a target position. V\_MIN should be set greater than zero.
- -This control value allows reaching the target position faster because the stepper motor is not slowed down below V\_MIN before the target is reached.
- -Due to the finite numerical representation of integral relations the target position cannot be reached exactly, if the calculated velocity is less than one, before the target is reached. Setting V\_MIN to at least one assures reaching each target position exactly.

Figure 6.1 Velocity ramp parameters and velocity profiles

<!-- image -->

## 6.1.4 V\_MAX (IDX=%0011)

This parameter sets the maximum motor velocity. The absolute value of the velocity will not exceed this limit, except if the limit V\_MAX is  changed during motion to a value below the current velocity.

## UNIT OF VELOCITY

The unit of velocity parameters is steps per time unit .  The scale of velocity parameters ( V\_MIN , V\_MAX , V\_TARGET , V\_ACTUAL )  is  defined by the parameter PULSE\_DIV (see page 6.1.12 for details) and depends on the clock frequency of the TMC4210.

## HOMING PROCEDURE

To set target position X\_TARGET and current position X\_ACTUAL to an equivalent value (e.g. to set both to zero at a reference point) the stepper motor should be stopped first and the parameter V\_MAX should be set to zero to hold the stepper motor at rest before writing into the register X\_TARGET and X\_ACTUAL .

## Attention

Before overwriting X\_ACTUAL choose velocity\_mode or hold\_mode .

If X\_ACTUAL is overwritten in ramp\_mode or soft\_mode the motor directly drives to X\_TARGET .

## 6.1.5 V\_TARGET (IDX=%0100)

The use of V\_TARGET depends on the chosen mode of operation:

| Mode of operation   | Functionality of V_TARGET                                                                                                                                                                                                                        |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ramp_mode           | The V_TARGET register holds the current target velocity calculated internally by the ramp generator.                                                                                                                                             |
| velocity_mode       | A target velocity can be written into the V_TARGET register. The stepper motor accelerates until it reaches the specified target velocity. The velocity is changed according to the motion parameter limits if the register V_TARGET is changed. |
| hold_mode           | The register V_TARGET is ignored.                                                                                                                                                                                                                |
| soft_mode           | The V_TARGET register holds the current target velocity calculated internally by the ramp generator.                                                                                                                                             |

## UNIT OF VELOCITY

The unit of velocity parameters is steps per time unit .  The scale of velocity parameters ( V\_MIN , V\_MAX , V\_TARGET , V\_ACTUAL )  is  defined by the parameter PULSE\_DIV (see  chapter 6.1.12 for details) and depends on the clock frequency of the TMC4210.

## 6.1.6 V\_ACTUAL (IDX=%0101)

This read-only register holds the current velocity of the associated stepper motor. Internally, the ramp generator of the TMC4210 processes with 20 bits while only 12 bits (the most significant bits) can be read out as V\_ACTUAL .

In hold\_mode only, this register is a read-write register. Writing zero to the register V\_ACTUAL immediately stops the associated stepper motor, because hidden bits are set to zero with each write access to the register V\_ACTUAL . In hold\_mode motion  parameters  are  ignored  and  the microcontroller has the full control to generate a ramp. The TMC4210 only handles the microstepping and datagram generation for the associated stepper motor.

## UNIT

The unit of velocity parameters is steps per time unit .  The scale of velocity parameters ( V\_MIN , V\_MAX , V\_TARGET , and V\_ACTUAL )  is  defined  by the parameter PULSE\_DIV (see chapter 6.1.12 for details) and depends on the clock frequency of the TMC4210.

An actual velocity of zero read out by the microcontroller means that the current velocity is in an interval between zero and one .  Therefore the actual velocity should not be used to detect a stop of the stepper motor. It is advised to detect the target\_reached flag instead.

## 6.1.7 A\_MAX (IDX=%0110)

This register defines the absolute value of the desired acceleration for velocity\_mode and ramp\_mode (resp. soft\_mode )  with a value range from 0 to 2047.

## Note

The motion controller cannot stop the stepper motor if A\_MAX is set to zero on the fly because afterwards the velocity cannot be changed automatically any more.

## UNIT

The unit of the acceleration is change of step frequency per time unit divided by 256 . The scale of acceleration parameters ( A\_MAX , A\_ACTUAL ,  and A\_THRESHOLD )  is defined by the parameter RAMP\_DIV (see section 6.1.12) and depends on the clock frequency of the TMC4210.

## 6.1.7.1 A\_MAX in ramp\_mode

As long as RAMP\_DIV  PULSE\_DIV -1 is valid, any value of A\_MAX within its range (0… 2047) is allowed and there exists a valid pair { PMUL , PDIV } for each A\_MAX .  The  reason is that the acceleration scaling  determined  by RAMP\_DIV is  compatible  with  the  step  velocity  scaling  determined  by PULSE\_DIV .  A  large RAMP\_DIV stands for low acceleration and a large PULSE\_DIV stands for low velocity. Low acceleration is compatible with low speed and high speed as well, but high acceleration is more compatible with high speed.

Changing one parameter out of the triple { A\_MAX , RAMP\_DIV , PULSE\_DIV }  requires re-calculation of the parameter pair { PMUL , PDIV } to update the associated register. For description of the parameters PMUL and PDIV see section 6.1.9.

## 6.1.7.1.1 Deceleration in ramp\_mode and soft\_mode

If RAMP\_DIV and PULSE\_DIV differ more than one while deceleration in ramp\_mode or soft\_mode the parameter A\_MAX needs to have a lower limit (&gt;1) and an upper limit (&lt;2047). The reason is that the deceleration ramp is internally limited to 2 19 steps (respectively microsteps).

## THE LOWER LIMIT OF A\_MAX IS GIVEN BY

```
𝐴_𝑀𝐴𝑋𝐿𝑂𝑊𝐸𝑅_𝐿𝐼𝑀𝐼𝑇 =   2 (𝑅𝐴𝑀𝑃_𝐷𝐼𝑉-𝑃𝑈𝐿𝑆𝐸_𝐷𝐼𝑉-1)
```

- -With V\_MAX set to 2048  2 (  1448) or lower the A\_MAXLOWER\_LIMIT is half of this value.
- -If RAMP\_DIV -PULSE\_DIV -1  0 the limit A\_MAXLOWER\_LIMIT is 1 and the parameter A\_MAX may be set to 1.

## THE UPPER LIMIT OF A\_MAX IS GIVEN BY

```
𝐴_𝑀𝐴𝑋𝑈𝑃𝑃𝐸𝑅_𝐿𝐼𝑀𝐼𝑇 =   2 (𝑅𝐴𝑀𝑃_𝐷𝐼𝑉-𝑃𝑈𝐿𝑆𝐸_𝐷𝐼𝑉+12) - 1
```

- -If RAMP\_DIV -PULSE\_DIV + 1  0 the A\_MAX\_UPPER\_LIMIT is &gt; 2048 and the parameter A\_MAX might be set to any value up to 2047.

## CONDITIONS

The parameter A\_MAX must not be set below A\_MAXLOWER\_LIMIT except A\_MAX is  set  to 0. The condition A\_MAX  A\_MAXLOWER\_LIMIT as well as A\_MAX  A\_MAXUPPER\_LIMIT must be satisfied to reach any target position without oscillations. If that condition is not satisfied, oscillations around a target position may occur.

## 6.1.8 A\_ACTUAL (IDX=%0111)

The actual acceleration can be read out by the microcontroller from the A\_ACTUAL read-only register. The actual acceleration is used to select scale factors for the coil currents. It is updated with each clock. The returned value A\_ACTUAL is smoothed to avoid oscillations of the readout value. Thus, returned A\_ACTUAL values should not be used directly for precise calculations.

## UNIT

The unit of the acceleration is change of step frequency per time unit divided by 256 . The scale of acceleration parameters ( A\_MAX , A\_ACTUAL ,  and A\_THRESHOLD )  is defined by the parameter RAMP\_DIV (see section 6.1.12) and depends on the clock frequency of the TMC4210.

## 6.1.9 PMUL &amp; PDIV (IDX=%1001)

In ramp mode, the TMC4210 uses an internal algorithm to calculate the deceleration ramp on the fly. This algorithm requires an additional proportionality factor P which allows the TMC4210 to calculate the velocity required for stopping in time to exactly reach the target position without overshooting. This calculation is done for each ramp step. The result of this calculation can be read in the register V\_TARGET . Whenever V\_TARGET falls  below the actual velocity, the TMC4210 decelerates. As there is a large range of acceleration and velocity values, p is stored in a floating-point representation, using the registers PMUL (mantissa) and PDIV (exponent).

Using the proportionality factor P target positions are quickly reached without overshooting. The proportionality factor primarily depends on the acceleration limit A\_MAX and on the two clock divider parameters PULSE\_DIV and RAMP\_DIV .  These two separate clock divider parameters (set to the same value for most applications) provide an extremely wide dynamic range for acceleration and ve locity. PULSE\_DIV and RAMP\_DIV allow reaching very high velocities with very low acceleration.

Changing one parameter out of the triple { A\_MAX , RAMP\_DIV , PULSE\_DIV }  requires re-calculation of the parameter pair { PMUL , PDIV } to update the associated register.

## 6.1.9.1 Calculation of the Proportionality Factor p

The representation of the proportionality factor p by the two parameters PMUL and PDIV is a floating point representation.

## NOTATIONS

Registers are PMUL and PDIV .

.

Operating values are PMUL and PDIV

## CALCULATE P AS FOLLOWS:

<!-- formula-not-decoded -->

with

## NOTE

- -Setting the factor p too small will result in a slow approach to the target position.
- -Setting the factor p too large will cause overshooting and even oscillations around the target position.
- -The parameters PMUL and PDIV share the address IDX=%1001. The MSB of PMUL is fixed set to 1 and cannot be changed. This way, PMUL represents a mantissa in the range 1.000 (%1000 0000) to 1.992 (%1111 1111).

Figure 6.2 Target position calculation, ramp generator, and pulse generator

<!-- image -->

## 6.1.9.1.1 Calculation of p for a Given Acceleration

p and the fitting PMUL and PDIV values can be calculated by the microcontroller. Optionally a pair of matching  values of A\_MAX , PMUL and PDIV can be stored into the microcontroller memory.  The acceleration limit is a stepper motor parameter which is fixed in most applications. If the acceleration limit has to be changed nevertheless, the microcontroller can calculate a pair of PMUL and PDIV on demand for each new acceleration limit A\_MAX with RAMP\_DIV and PULSE\_DIV . Also, pre-calculated pairs of PMUL and PDIV read from a table can be sufficient.

## 6.1.9.2 Calculation of PMUL and PDIV

A pair of PMUL and PDIV has to be calculated for each provided acceleration limit A\_MAX . Note, that there may be more than one valid pair of PMUL and PDIV for a given A\_MAX acceleration limit.

128… 255 representing a factor of 1.000 to 1.992 (=1+127/128)

<!-- formula-not-decoded -->

PMUL ranges from 128 to 255 . PDIV is a power of two with a range from 8 to 65536. Values of p less than 128 can be achieved by increasing PDIV .

The TMC4210 does not directly store the PDIV parameter. The motion controller stores PDIV with

<!-- formula-not-decoded -->

## CONSIDERATIONS FOR THE CALCULATION OF PMUL AND PDIV

- -To accelerate, the ramp generator accumulates the acceleration value to the actual velocity with each time step.
- -The absolute value V\_MAX of the velocity internally is represented by 11+8=19 bits, while only the most significant 11 bits and the sign are used as input for the step pulse generator. So, there are 2 11 =2048 values possible for specifying a velocity within a range of 0 to 2047.
- -The ramp generator accumulates 1/256* A\_MAX with each time step to the actual velocity value V\_ACTUAL during  acceleration  phases.  This  accumulation  uses  8  bits  for  decimals.  So,  the acceleration from a velocity V\_ACTUAL =0 to the maximum possible velocity V\_MAX =2047 spans over 2048*256 / A\_MAX pulse generator clock pulses.
- -Within the acceleration phase the pulse generator generates S = ½ * 2048* 256 / A\_MAX * T steps for the (micro) step unit.
- -The parameter T is the clock divider ratio: T = 2 RAMP\_DIV / 2 PULSE\_DIV = 2 RAMP\_DIV -PULSE\_DIV

During the acceleration, the velocity has to be increased until the velocity limit V\_MAX is reached or deceleration is required in order to exactly reach the target position. The TMC4210 automatically determines  the  deceleration  position  in ramp\_mode and  decelerates.  This  calculation  uses  the difference between current position and target position and the proportionality parameter p , which has to be p = 2048 / S.

The following formula results:

<!-- formula-not-decoded -->

This can be simplified to

<!-- formula-not-decoded -->

## HINTS

- -To avoid overshooting, the parameter PMUL should be made approximately 1% smaller than calculated. Alternatively set p reduced by an amount of 1%.
- -If  the proportionality parameter p is  too  small, the target position will be reached slower, because the slow down ramp starts earlier. The target position is approached with minimal velocity V\_MIN ,  whenever the internally calculated target velocity becomes less than V\_MIN .
- -With a good parameter p the minimal velocity V\_MIN is reached a couple of steps before the target position.
- -With  parameter p set  a  little  bit  too  large  and  a  small V\_MIN overshooting  of one  step (respectively one microstep) may occur. A decrement of the parameter PMUL avoids this one-step overshooting.

Figure 6.3 Proportionality parameter p and outline of velocity profile(s)

<!-- image -->

## 6.1.9.2.1 Choosing a Pair of PMUL and PDIV

The calculation is based on the formula

<!-- formula-not-decoded -->

## CALCULATIONS

1. To represent the parameter p choose a pair of PMUL and PDIV which approximates p .
2. Value range for PMUL : 128… 255
3. Value range for PDIV : one out of {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13} (representing PDIV one out of {8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32786, 65536})
4. Try all 128 * 14 = 1792 possible pairs of PMUL and PDIV with a program and choose a matching pair.
5. To find a pair, calculate for each pair of PMUL and PDIV

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

6. Select one of the pairs satisfying the condition 0.95 &lt; q &lt; 1.0. The value q interpreted as a function q (a\_max, ramp\_div, pulse\_div, pmul, pdiv) gives the quality criterion required.

Although q = 1.0 indicates that the chosen P\_MUL and P\_DIV perfectly represent the desired p factor for a given A\_MAX , overshooting could result because of finite numerical precision. On the other hand, in case of high resolution microstepping, overshooting of one microstep is negligible in most applications.

To avoid overshooting, use P\_MUL-1 instead of the selected P\_MUL or select a pair ( P\_MUL , P\_DIV ) with q = 0.99.

## 6.1.9.2.2 Optimized Calculation of PMUL and PDIV

The calculation of the parameters PMUL and PDIV can be simplified using the expression

<!-- formula-not-decoded -->

To avoid overshooting, use

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

This results in:

<!-- formula-not-decoded -->

PMUL becomes a function of the parameter PDIV .  To find a valid pair { PMUL , PDIV } choose one out of 14 pairs for PDIV = {0, 1, 2, 3, ..., 13}  with PMUL within the valid range 128  PMUL  255.

The C language example pmulpdiv.c can be found on www.trinamic.com. The source code can directly be copied from the PDF datasheet file.

<!-- formula-not-decoded -->

## 6.1.9.2.3 Calculation Example: PMUL and PDIV

```
/* PROGRAM EXAMPLE 'pmulpdiv.c' : How to Calculate p_mul & p_div for the TMC42 10 */ #include <math.h> #include <stdio.h> #include <stdlib.h> #include <string.h> void CalcPMulPDiv(int a_max, int ramp_div, int pulse_div, float p_reduction, int *p_mul, int *p_div, double *PIdeal, double *PBest, double *PRedu ) { int    pdiv, pmul, pm, pd ; double p_ideal, p_best, p, p_reduced; pm=-1; pd=-1; // -1 indicates : no valid pair found p_ideal   = a_max /  (pow(2, ramp_div-pulse_div)*128.0); p         = a_max / ( 128.0 * pow(2, ramp_div-pulse_div) ); p_reduced = p * ( 1.0 -p_reduction ); for (pdiv=0; pdiv<=13; pdiv++) { pmul = (int)(p_reduced * 8.0 * pow(2, pdiv)) -128; if ( (0 <= pmul) && (pmul <= 127) ) { pm = pmul + 128; pd = pdiv; } } *p_mul = pm; *p_div = pd; p_best = ((double)(pm)) / ((double)pow(2,pd+3)); *PIdeal = p_ideal; *PBest  = p_best; *PRedu  = p_reduced; } int main(int argc, char **argv) { int  a_max=0, ramp_div=0, pulse_div=0, p_mul, p_div, a_max_lower_limit=0, a_max_upper_limit=0; double pideal, pbest, predu; float  p_reduction=0.0; char **argp; if (argc>1) { while (argv++, argc--) { argp = argv + 1;   if (*argp==NULL) break; if (      (!strcmp(*argv,' -a')) ) sscanf(*argp,'%d',&a_max); else if ( (!strcmp(*argv,' -r')) ) sscanf(*argp,'%d',&ramp_div); else if ( (!strcmp(*argv,' -p')) ) sscanf(*argp,'%d',&pu lse_div); else if ( (!strcmp(*argv,' -pr'))) sscanf(*argp,'%f',&p_reduction); } } else { fprintf(stderr,' \n  USAGE : pmulpdiv -a <a_max> -r <ramp_div> -p <pulse_div> -pr <0.00 .. 0.10>\ n' '  EXAMPLE : pmulpdiv -a 10 -r 3 -p 3 -pr 0.05\ n'); return 1; } printf(' \n\n  a_max=%d\tramp_div=%d\tpulse_div=%d\tp_reduction=%f\n\ n', a_max, ramp_div, pulse_div, p_reduction); CalcPMulPDiv(a_max, ramp_div, pulse_div, p_reduction, &p_mul, &p_div, &pideal, &pbest, &predu ); printf('  p_mul = %3.3d \n  p_div = %3d\n\n p_ideal = %f\n  p_best = %f\n  p_redu = %f\n\ n', p_mul, p_div, pideal, pbest, predu); a_max_lower_limit = (int)pow(2,(ramp_div-pulse_div-1)); p rintf(' \ n a_max_lower_limit = %d',a_max_lower_limit); if (a_max < a_max_lower_limit) printf('   [WARNING: a_max < a_max_lower_limit]'); a_max_upper_limit = ((int)pow(2,(12+(ramp_div-pulse_div)))) -1; printf( ' \ n a_max_upper_limit = %d',a_max_upper_limit); if (a_max > a_max_upper_limit) printf('   [WARNING: a_max > a_max_upper_limit]'); printf(' \n\ n'); return 0; } /* -------------------------------------------------------------------------- */
```

## 6.1.10 lp , RAMP\_MODE ,  and REF\_CONF (IDX=%1010)

The configuration words REF\_CONF and RAMP\_MODE are accessed via a common address.

| LP , RAMP_MODE , AND REF_CONF   | LP , RAMP_MODE , AND REF_CONF                                                  |
|---------------------------------|--------------------------------------------------------------------------------|
| Bit or Register                 | Function                                                                       |
| RAMP_MODE                       | The two bits RAMP_MODE ( R_M ) select one of the four possible stepping modes. |
| lp                              | The bit called lp (latched position) is a read only status bit.                |
| REF_CONF                        | The configuration bits REF_CONF select the behavior of the reference switches. |

## 6.1.10.1 RAMP\_MODE Register

| TMC4210 MOTION MODES   | TMC4210 MOTION MODES   | TMC4210 MOTION MODES                                                                                                                                                                                                                               |
|------------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RAMP_MODE bits         | Mode                   | Function                                                                                                                                                                                                                                           |
| %00                    | ramp_mode              | Default mode for positioning applications with trapezoidal ramp. This mode is provided as default mode for positioning tasks.                                                                                                                      |
| %01                    | soft_mode              | Similar to ramp_mode , but with soft target position approaching. The target position is approached with exponentially reduced velocity. This feature can be useful for applications where vibrations at the target position have to be minimized. |
| %10                    | velocity_mode          | Mode for velocity control applications, change of velocities with linear ramps. This mode is for applications, where stepper motors have to be driven precisely with constant velocity.                                                            |
| %11                    | hold_mode              | The velocity is controlled by the microcontroller, motion parameter limits are ignored. This mode is provided for motion control applications, where the ramp generation is completely controlled by the microcontroller.                          |

## 6.1.10.2 The REF\_CONF Register and the lp Read-Only Status Bit

A reference switch can be used as an automatic stop switch. The reference switch indicates the reference position within a given tolerance. The automatic stop function of the switches can be enabled or disabled. Also, a reference tolerance range (see register DX\_REF\_TOLERANCE, chapter 0) can be programmed to allow motion within the reference switch active range during homing.

When a reference switch is triggered, the actual position can be stored automatically. This allows a precise determination of the reference point. It is initiated by writing a dummy value to the register X\_LATCHED (see chapter 6.1.14). The read-only status bit lp (latch position waiting) indicates that the next change of the selected reference switch will trigger latching the position X\_ACTUAL .  The l p bit is automatically reset after position latching.

Figure 6.4 Left switch and right switch for reference search and automatic stop function

<!-- image -->

The bits contained in the REF\_CONF register control the semantic and the actions of the reference/stop switch  modes  for  interrupt  generation  as  explained  later.  The  stepper  motor  stops  if  the reference/stop switch becomes active. This mechanism reacts only to the switch which corresponds to the actual motion direction, e.g. the right switch when moving to a more positive position. The configuration  bits named disable\_stop\_l respectively disable\_stop\_r disable these automatic stop functions. If the bit soft\_stop is  set,  the  motor stops with linear ramp as determined by A\_MAX .

| REFERENCE SWITCH CONFIGURATION BITS REF_CONF AND LP STATUS BIT   | REFERENCE SWITCH CONFIGURATION BITS REF_CONF AND LP STATUS BIT   | REFERENCE SWITCH CONFIGURATION BITS REF_CONF AND LP STATUS BIT                                                                                                                                                                                                                                                                                                                                                                            |
|------------------------------------------------------------------|------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| REF_CONF mnemonic                                                |                                                                  | Function                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| disable_stop_l                                                   | 0 :                                                              | The motor will be stopped when the velocity is negative ( V_ACTUAL < 0) and the left reference switch becomes active.                                                                                                                                                                                                                                                                                                                     |
| disable_stop_l                                                   | 1 :                                                              | Left reference switch is disabled as an automatic stop switch.                                                                                                                                                                                                                                                                                                                                                                            |
| disable_stop_r                                                   | 0 :                                                              | Stops the motor if the velocity is positive ( V_ACTUAL > 0) and the right reference switch becomes active.                                                                                                                                                                                                                                                                                                                                |
| disable_stop_r                                                   | 1 :                                                              | Right reference switch is disabled as an automatic stop switch.                                                                                                                                                                                                                                                                                                                                                                           |
| soft_stop                                                        | 0 :                                                              | Stopping takes place immediately; motion parameter limits are ignored.                                                                                                                                                                                                                                                                                                                                                                    |
| soft_stop                                                        | 1 :                                                              | Stopping takes place in consideration of motion parameter limits; stops with linear ramp.                                                                                                                                                                                                                                                                                                                                                 |
| ref_RnL                                                          |                                                                  | The bit ref_RnL ( reference switch Right not Left ) defines which switch will be used as the reference switch. The definition of the reference switch by the configuration bit ref_RnL has no effect on the stop function of the reference switches if disable_stop_l = 0 respectively disable_stop_r = 0. The left reference switch controls reference switch functions. The right (not left) reference switch controls reference switch |
| ref_RnL                                                          | 0 :                                                              |                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ref_RnL                                                          | 1 :                                                              | functions.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| lp                                                               | 0 :                                                              | This is the power-on default of the lp (latched position waiting) bit.                                                                                                                                                                                                                                                                                                                                                                    |
| lp                                                               | 1 :                                                              | X_LATCHED has been initialized by a write access to latch the position on a change of the reference switch. It is set to 0 after a position has been latched.                                                                                                                                                                                                                                                                             |

## ATTENTION

Per  default  there  is  only  one switch available: REF\_L is configured as left reference switch. For configuring REF\_R as right switch, it is necessary to set the mot1r bit in the STEPPER MOTOR GLOBAL PARAMETER REGISTER to 1. Please refer to chapter 6.2.1.5 for further information.

There is a functional difference between reference switches and stop switches. Reference switches are used to determine a reference position for the stepper motor. Stop switches are used for automatic stopping the motor when reaching a limit. The signals of switches are processed via the inputs REF\_L and REF\_R. They might be used as automatic stop switches, reference switches, or both.

<!-- image -->

## 6.1.11 INTERRUPT\_MASK &amp; INTERRUPT\_FLAGS (IDX=%1011)

The TMC4210 provides one interrupt register of eight flags for the stepper motor.

Interrupt bits are named int\_&lt;mnemonic&gt; . The interrupt out nINT\_SDO\_C is set active low and the interrupt status bit int is  set  active high  if at least  one interrupt flag of the motor becomes set. If the interrupt status is inactive, nINT is high (1) and int is low (0).

## SETTING MASKS AND FLAGS

- -An interrupt flag is set to 1 if its assigned interrupt condition occurs.
- -Each interrupt bit can either be enabled or disabled (1/0) individually by an associated interrupt mask bit named mask\_&lt;mnemonic&gt; .
- -Interrupt  flags  are  reset  to  0  by  a  write  access  (RW=0)  to  their  interrupt  register  address (IDX=%1011).  Write 1 at the position of the bit to clear the flag. Writing a 0 to the corresponding position leaves the interrupt flag untouched.
- -Interrupt flags are forced to 0 if the corresponding mask bit is disabled (0).

| INTERRUPT FLAGS     | INTERRUPT FLAGS                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| int_<mnemonic>      | Function                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| int_pos_end         | If a target position is reached while the interrupt mask mask_pos_end is 1, the bit is set to 1.                                                                                                                                                                                                                                                                                                                                                             |
| int_ref_wrong       | Reference switch signal was active outside the reference switch tolerance range (defined by the DX_REF_TOLERANCE register). The switches processed via the inputs REF_L and REF_R can be used as stop switches for automatic motion limiting, as reference switches, and for both. If a reference switch becomes active out of the reference switch tolerance range the interrupt flag int_ref_wrong is set if the interrupt mask bit mask_ref_wrong is set. |
| int_ref_miss        | The interrupt flag int_ref_miss is set if the reference switch is inactive at the 0 position and the mask mask_ref_miss is enabled.                                                                                                                                                                                                                                                                                                                          |
| int_stop            | The int_stop flag is set, if the reference switch has forced a stop during motion and if the interrupt mask mask_stop is set.                                                                                                                                                                                                                                                                                                                                |
| int_stop_left_low   | High to low transition of left reference switch. The int_stop_left_low flag is set if the reference switch changes from high to low and if the interrupt mask bit mask_stop_left_low is set.                                                                                                                                                                                                                                                                 |
| int_stop_right_low  | High to low transition of right reference switch. The int_stop_right_low flag is set if the reference switch changes from high to low and if the interrupt mask bit mask_stop_right_low is set.                                                                                                                                                                                                                                                              |
| int_stop_left_high  | Low to high transition of left reference switch. The int_stop_left_high flag indicates that the left reference switch input changes from low to high if the mask bit mask_stop_left_high is set.                                                                                                                                                                                                                                                             |
| int_stop_right_high | Low to high transition of right reference switch. The int_stop_right_high flag indicates that the right reference switch input changes from low to high if the mask bit mask_stop_right_high is set.                                                                                                                                                                                                                                                         |

| INTERRUPT MASK BIT   | INTERRUPT MASK BIT                 |
|----------------------|------------------------------------|
| mask_<mnemonic>      | Function                           |
| mask_pos_end         | 1: mask enabled; 0: mask disabled. |
| mask_ref_wrong       | 1: mask enabled; 0: mask disabled. |
| mask_ref_miss        | 1: mask enabled; 0: mask disabled. |
| mask_stop            | 1: mask enabled; 0: mask disabled. |
| mask_stop_left_low   | 1: mask enabled; 0: mask disabled. |
| mask_stop_right_low  | 1: mask enabled; 0: mask disabled. |
| mask_stop_left_high  | 1: mask enabled; 0: mask disabled. |
| mask_stop_right_high | 1: mask enabled; 0: mask disabled. |

<!-- image -->

The interrupt status is mapped to the most significant bit (31) of each datagram sent back to the µC and it is only available at the nINT\_SDO\_C pin of the TMC4210 if the pin nSCS\_C is high.

De-multiplexing of the multiplexed interrupt status signal at the pin nINT\_SDO\_C can be done using additional hardware. It is not necessary if the microcontroller always disables its interrupt while it sends a datagram to the TMC4210.

## 6.1.12 PULSE\_DIV &amp; RAMP\_DIV (IDX=%1100)

The frequency of the external clock signal (pin CLK) is divided by 32 (see Figure 6.2). This clock drives two programmable clock dividers: RAMP\_DIV for the ramp generator and PULSE\_DIV for the pulse generator.

RAMP\_DIV and PULSE\_DIV allow a division of 1/32 f CLK by the following value settings:

| value       |   0 |   1 |   2 |   3 |   4 |   5 |   6 |   7 |   8 |   9 |   10 |   11 |   12 |   13 |
|-------------|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|------|------|------|
| division by |   1 |   2 |   4 |   8 |  16 |  32 |  64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 |

PULSE\_DIV The pulse generator clock -defining the maximum step pulse rate -is determined by the parameter PULSE\_DIV .  The parameter PULSE\_DIV scales the velocity parameters. RAMP\_DIV The parameter RAMP\_DIV scales the acceleration parameter A\_MAX.

## 6.1.12.1 Calculating the Step Pulse Rate R

<!-- formula-not-decoded -->

where f CLK [Hz] is the frequency of the external clock signal.

velocity is in range 0 to 2047 and represents parameters V\_MIN , V\_MAX ,  and absolute values of V\_TARGET and V\_ACTUAL .

The pulse generator of the TMC4210 generates one step pulse with each 1/(32*2^ PULSE\_DIV ) clock pulse with a given theoretical velocity setting of 2048. [Attention: Range ±2047]

The full step frequency RFS is given by

<!-- formula-not-decoded -->

The change  R in the pulse rate per time unit is given by

<!-- formula-not-decoded -->

where

 R:

pulse frequency change per second (acceleration)

29 :

the constant is derived form 2 29 = 2 5 * 2 5 * 2 8 * 2 11 = 32*32*256*2048.

32

comes from fixed clock pre-dividers,

256

comes from the velocity accumulation clock pre-divider, and

2048 comes from the velocity accumulation clock divider programmed by A\_MAX . The parameter A\_MAX is in range 0 to 2047.

The change of fullstep frequency  RFS in the pulse rate per time unit is given by

<!-- formula-not-decoded -->

The angular velocity of a stepper motor can be calculated based on the full step frequency RFS [Hz] for a given number of full steps per rotation. Similarly, the angular acceleration of a stepper motor can be calculated based on the change of the full step frequency per second  RFS [Hz].

## 6.1.12.2 Calculating the Number of Steps During Linear Acceleration

<!-- formula-not-decoded -->

where

S = number of steps a = linear acceleration

v = velocity

With v = R [Hz] and a =  R [Hz/s] one gets:

<!-- formula-not-decoded -->

The number of full steps SFS during linear acceleration is given by

<!-- formula-not-decoded -->

Changing PULSE\_DIV in velocity\_mode or in hold\_mode might force an internal microstep (with microstep resolution defined by usrs ) depending on the actual microstep position. This behavior can be observed especially when the motor is at rest. In ramp\_mode this does not occur. PULSE\_DIV should only be changed in ramp\_mode !

## 6.1.13 DX\_REF\_TOLERANCE (IDX=%1101)

Generally, the switch inputs REF\_L and REF\_R can be used as stop switches for automatic motion limiting and as reference switches defining a reference position for the stepper motor. To allow the motor to drive near the reference point, it is possible to exclude a motion range of steps from the stop switch function.

The parameter DX\_REF\_TOLERANCE disables automatic stopping by a switch around the origin (see Figure 6.4). To use the DX\_REF\_TOLERANCE far from the origin, the actual position has to be adapted, e.g.  by  setting  it  to  zero  in  the  center  of  the  tolerance  range.  Additionally,  the  parameter DX\_REF\_TOLERANCE affects interrupt conditions as described before (section 6.1.11).

## 6.1.14 X\_LATCHED (IDX=%1110)

This read-only register stores the actual position X\_ACTUAL upon a change of the reference switch state. The reference switch is defined by the bit ref\_RnL of the configuration register 6.2.1.5. Writing a dummy value to the (read-only) register X\_LATCHED initializes the position storage mechanism. The actual position is saved with the next rising edge or falling edge signal of the reference switch depending on the actual motion direction of the stepper motor. The actual position is latched when the switch defined as the reference switch by the ref\_RnL bit changes (see chapter 1.5.4). The status bit lp signals, if latching of a position is pending. This way, a precise reference is available for homing.

An event at the reference switch associated to the actual motion direction takes effect only during motion (when V\_ACTUAL  0).

## 6.2 Global Parameter Registers

The  registers  addressed  by  RRS=0  with  SMDA=%11  are  global  common  parameter  registers.  To emphasize this difference, the address label JDX is used as index name instead of IDX (see overview in chapter 5.3).

## OVERVIEW GLOBAL PARAMETER REGISTER MAPPING

| REGISTER                                | DESCRIPTION                                                                                                                                                                    |
|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IF_CONFIGURATION_4210                   | This register is used for configuration of - the reference switch inputs - the Step/Dir interface - the association of the position compare output signal to one stepper motor |
| STEPPER MOTOR GLOBAL PARAMETER REGISTER | This register holds configuration bits for the stepper motor driver chain and defines - timing - reference switch adjustments                                                  |

## 6.2.1 IF\_CONFIGURATION\_4210 (JDX=%0100)

The register IF\_CONFIGURATION\_4210 is  the  interface configuration register for the TMC4210. It is used for configuration of

- -the reference inputs
- -the interrupt output
- -the Step/Dir interface

| INTERFACE CONFIGURATION   | REGISTER CONTROL BITS                                                                                                                                                                                                                                                                                   |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IF_CONFIGURATION_4210     | Function                                                                                                                                                                                                                                                                                                |
| inv_ref                   | Invert common polarity for all reference switches. If this bit is set, a low level on the input signals an active reference switch.                                                                                                                                                                     |
| step_half                 | Toggle on each step pulse (this halfs the step frequency, both pulse edges represent steps). step_half reduces the required step pulse bandwidth and is useful if for low-bandwidth optocouplers. This function can be used for the TMC262 stepper driver.                                              |
| inv_stp                   | Invert step pulse polarity. This configuration can be used for adaption of the step polarity to external driver stage.                                                                                                                                                                                  |
| inv_dir                   | Invert step pulse polarity. This is for adaption to external driver stages. Alternatively, this can be used as a shaft bit to adjust the direction of motion for the motor, but do not use this as a direction bit because it has no effect on the internal handling of signs ( X_ACTUAL, V_ACTUAL … ). |
| en_sd                     | Enable the Step/Dir interface by setting this bit to 1 ( EN_SD=1 ). Note: The step pulse timing (length) must be compatible with both, the desired step frequency and the external drivers' requirements. The step pulse timing is determined by the 4 LSBs of STPDIV_4210.                             |

<!-- image -->

## INITIALIZE THE STEP/DIR INTERFACE!

Enable the Step/Dir interface by setting en\_sd=1!

After power-on, the output signals are logic high until they become configured for step/direction.

## 6.2.1.1 POS\_COMP\_4210 (JDX=%0101)

POS\_COMP\_4210 defines  a position, which becomes compared to the motor position.

## 6.2.1.2 POS\_COMP\_INT\_4210 (JDX=%0110)

The position compare interrupt mask ( M ) and interrupt flag ( I ) register hold the mask and interrupt concerning the position compare function of the TMC4210.

## 6.2.1.3 POWER\_DOWN (JDX=%1000)

A write to the register address POWER\_DOWN sets the TMC4210 into the power down mode until it detects a falling edge at the pin nSCS\_C.  During power down, all internal clocks are stopped. All outputs remain stable, and all register contents are preserved.

## 6.2.1.4 TYPE\_AND\_VERSION\_4210 (JDX=%1001)

Read only register that gives type und version of the design.

## 6.2.1.5 REFERENCE\_SWITCHES (JDX=%1110)

The  current  state  of  the  reference  switches  can  be  read  out  with  this  register.  Per  default configuration, only the left reference switch is active ( mot1r =0).

## INITIALIZE THE RIGHT REFERENCE SWITCH!

For using both reference switches, write 1 to mot1r.

If  it  is  desired  to  invert  the  polarity  of  the  reference  switches,  the  bit inv\_ref of  the IF\_CONFIGURATION\_4210 register  can  be  set.  This  allows  matching  normally  open  contacts  or normally closed contacts.

## 6.2.2 STEPPER MOTOR GLOBAL PARAMETER REGISTER (JDX=%1111)

This  register  holds  different configuration bits for the stepper motor driver chain. The absolute address (RRS &amp; ADDRESS) of the stepper motor global parameter register is %01111110 = $7E.

| STEPPER MOTOR GLOBAL PARAMETER CONTROL   | STEPPER MOTOR GLOBAL PARAMETER CONTROL                                                                                                 |
|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|
| Register                                 | Function                                                                                                                               |
| STPDIV_4210                              | The timing of the Step/Dir interface is controlled by four LSBs. Please refer to chapter 8.1 for the calculation of Step/Dir timing.   |
| mot1r                                    | Set mot1r to 1 for a left and a right swicht. In case switches are not to be used, pull the related pins to GND. Refer to chapter 7.1. |

<!-- image -->

| 32 BIT DATAGRAM SENT FROM A µC TO THE TMC4210   |
|-------------------------------------------------|

## 7 Reference Switch Inputs

## 7.1 Reference Switch Configuration, mot1r

mot1r is  for configuring the reference switches of the TMC4210. Per default, mot1r =0.

| REFERENCE INPUTS DEPENDING ON CONFIGURATION BITS   | REFERENCE INPUTS DEPENDING ON CONFIGURATION BITS   | REFERENCE INPUTS DEPENDING ON CONFIGURATION BITS   |
|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|
| mot1r                                              | left switch                                        | right switch                                       |
| 0                                                  | REF_L                                              | -                                                  |
| 1                                                  | REF_L                                              | REF_R                                              |

## 7.2 Triple Switch Configuration

The programmable tolerance range around the reference switch position is useful for a triple switch configuration, as outlined in Figure 7.1. In this configuration two switches are used as automatic stop switches and one additional switch is used as the reference switch between the left stop switch and the right stop switch. The left stop switch and the reference switch are connected in series. In order to use the reference switch, program a tolerance range into the register DX\_REF\_TOLERANCE. This disables the automatic stop within the tolerance range of the reference switch. The homing procedure can use the right switch to make sure, that the reference switch is found properly. The TMC42 10 can automatically check the correct position of the driver whenever the reference switch is passed.

Figure 7.1 Triple switch configuration left stop switch -reference switch -right stop switch

<!-- image -->

## 7.3 Homing Procedure

In order to home the drive, the reference switch position xref must be determined after each power on (see Figure 7.2).

## PROCEED AS FOLLOWS:

1. Due to mechanical inaccuracy of switches, the reference switch is active within the following range: x 1 &lt; x ref &lt; x 2 , where x1 and x2 may vary. If the traveler is within the range x1 &lt; xtraveler &lt; x2 at the start of the homing procedure, it is necessary to leave this range, because the associated reference switch is active. A dummy write access to X\_LATCHED initializes the position latch register.
2. With the traveler within the range x 2 &lt; x traveler &lt; x max and the register X\_LATCHED initialized, the position x2 can simply be determined by motion with a target position X\_TARGET set to -x max .
3. When reaching position x2 the position is latched automatically.
4. With stop switch enabled, the stepper motor automatically stops if the position x 2 is reached.
5. Now, set the DX\_REF\_TOLERANCE in order to allow motion within the active reference switch range x1 &lt; x ref &lt; x 2 and to move the traveler to a position x traveler &lt; x 1 if desired.
6. Afterwards initialize the register X\_LATCHED again to latch the position x1 by a motion to a target position x traveler &lt; x 1 .
7. When the positions x1 and x2 are determined the reference position x ref = (x 1 + x 2 ) / 2 can be set. Finally, one should move to the target position X\_TARGET =  x ref and set X\_TARGET := 0 and X\_ACTUAL := 0 when reached.

Figure 7.2 Reference search

<!-- image -->

## 8 Step/Dir Drivers

Step/Dir  drivers  contain  an  internal  sequencer.  The  Step/Dir  interface  is  a simple and universal interface for real time motion control. All additional control functions like current control have to be provided by the microcontroller directly communicating to the driver.

The Step/Dir mode is enabled if the control bit en\_sd (enable Step/Dir) of the IF\_CONFIGURATION\_4210 register is set to 1.

## 8.1 Timing

The timing of the Step/Dir interface should be adapted to the requirements of the driver and the transmission line. The minimum pulse width may be limited.

The timing of the Step/Dir interface is controlled by four LSBs named STPDIV\_4210

.

For a given clock frequency f CLK [MHz] of the TMC4210, the length t STEP [µs] of a step pulse is

<!-- formula-not-decoded -->

- -For a clock frequency fCLK[MHz] of 16MHz the step pulse length can be programmed in integer multiple of 1µs by STPDIV\_4210 .
- -The STPDIV\_4210 has to be set compatible to the upper step frequency fSTEP = 1/tSTEP which is used.
- -The first step pulse after a change of direction is delayed by t DIR2STP which is equal to tSTEP to avoid setup time violations of the Step/Dir power stage.

## MAXIMUM STEP FREQUENCIES

Generally, the maximum step pulse frequency is fSTEP\_MAX [MHz] = f CLK [MHz] / 32. For a clock frequency f CLK [MHz] = 16 MHz the maximum step pulse frequency fSTEP\_MAX is 500kHz. For a clock frequency f CLK [MHz] = 32 MHz the maximum step pulse frequency fSTEP\_MAX is 1MHz.

Figure 8.1 Step/Dir timing ( en\_sd = 1; step\_half = 0)

<!-- image -->

## 9 Running a Motor

## 9.1 Getting Started

For starting a motor proceed as follows:

1. Set en\_sd to 1 to enable the Step/Dir interface to the driver IC.
2. Set the velocity parameters V\_MIN and V\_MAX .
3. Set the clock pre-dividers PULSE\_DIV and RAMP\_DIV.
4. Set A\_MAX with a valid pair of PMUL and PDIV .
5. Choose the ramp mode with RAMP\_MODE register.
6. Choose the reference switch configuration.  Set mot1r to  1  for  a left and a right reference switch. If this bit is not set and the right switch is not to be used, pull REF\_R to GND.
7. Now, the TMC4210 runs a motor if you write either X\_TARGET or V\_TARGET , depending on the choice of the ramp mode.

## 9.2 Running a Motor with Start-Stop-Speed in ramp\_mode

The TMC4210 has an integrated automatic start-stop-speed mechanism. This can easily be realized by a simple command sequence. To start and stop with a speed V\_START\_STOP different from zero, one has to proceed as follows:

1. Set V\_MIN := V\_START\_STOP.
2. Set hold\_mode.
3. Set X\_TARGET to desired target position.
4. Set V\_ACTUAL with  correct  sign  for V\_ACTUAL to +V\_MIN resp. -V\_MIN ,  depending on the direction of positioning.
5. Set ramp\_mode immediately after writing V\_ACTUAL.

## 10 On-Chip Voltage Regulator

The on-chip voltage regulator delivers a 3.3 V supply for the chip core. The TMC4210 provides two operational modes to operate in 5 V or in 3.3 V environments. For both operational modes one resp. two external capacitors are required. Please keep all connections as short as possible!

| OPERATIONAL MODE   | OPERATIONAL MODE                                                                                                                                                                        |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Operational mode   | Necessary additional hardware                                                                                                                                                           |
| 5 V                | - An external 100nF ceramic capacitor (CBLOCK) has to be connected between pin V5 and ground. - An external 470nF ceramic capacitor has to be connected between the V33 pin and ground. |
| 3.3 V              | An external 100nF ceramic capacitor is necessary only between pin V33 and ground.                                                                                                       |

| CHARACTERISTICS OF THE ON-CHIP VOLTAGE REGULATOR   | CHARACTERISTICS OF THE ON-CHIP VOLTAGE REGULATOR   | CHARACTERISTICS OF THE ON-CHIP VOLTAGE REGULATOR                                                                                                                                         | CHARACTERISTICS OF THE ON-CHIP VOLTAGE REGULATOR   | CHARACTERISTICS OF THE ON-CHIP VOLTAGE REGULATOR   | CHARACTERISTICS OF THE ON-CHIP VOLTAGE REGULATOR   | CHARACTERISTICS OF THE ON-CHIP VOLTAGE REGULATOR   |
|----------------------------------------------------|----------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|
| Symbol                                             | Parameter                                          | Conditions                                                                                                                                                                               | Min                                                | Typ                                                | Max                                                | Unit                                               |
| VDD5REG                                            | Supply voltage vdd5                                | 5 V Operational Mode                                                                                                                                                                     | 4.5                                                | 5                                                  | 5.5                                                | V                                                  |
| CBLOCK                                             | Block capacitor                                    | 5 V Operational Mode, x7r ceramic capacitor                                                                                                                                              |                                                    | 100                                                |                                                    | nF                                                 |
| VDD3REG                                            | Supply voltage vdd3                                | 3.3 V Operational Mode                                                                                                                                                                   | 2.9                                                | 3.3                                                | 3.6                                                | V                                                  |
| ICCNLREG                                           | Current consumption                                | No load                                                                                                                                                                                  |                                                    | 50                                                 | 100                                                | µA                                                 |
| tSREG                                              | Startup time                                       | No external capacitor connected                                                                                                                                                          |                                                    |                                                    | 20                                                 | µs                                                 |
| tSREGC                                             | Startup time                                       | C_load = 470 nF                                                                                                                                                                          |                                                    |                                                    | 150                                                | µs                                                 |
| TDRFT                                              | Temperature drift                                  |                                                                                                                                                                                          |                                                    |                                                    | 300                                                | ppm / °C                                           |
| VRIPPLE                                            | Ripple on vdd3                                     | With ripple over 50 mV the input thresholds may differ from that specified in the data sheet                                                                                             |                                                    |                                                    | 100                                                | mV                                                 |
| CREG                                               | External capacitor                                 | Use x7r ceramic capacitors on pin 33. Using an external capacitor with capacity other than typical, the ripple should be measured on pin v33 to be sure that requirements are satisfied. | 33                                                 | 470                                                |                                                    | nF                                                 |
| COPT                                               | Optional capacitor                                 | Optional parallel capacitor for additional reduction of high frequency ripple, c0g ceramic, unnecessary in most cases                                                                    |                                                    | 470                                                |                                                    | pF                                                 |

## 3.3V Operation (CMOS)

<!-- image -->

## 5V Operation (TTL)

Figure 10.1 3 V operation (CMOS) vs. 5 V operation (TTL)

<!-- image -->

## 11 Power-On Reset

The  TMC4210  is equipped with a static and dynamic reset with an internal hysteresis. The chip performs an automatic reset during power-on. If the power supply voltage falls below the threshold VON, an automatic power-on reset is performed.  The power-on reset time tRESPOR depends on the power-up time of the on-chip voltage regulator.

Figure 11.1 Operating principle of the power-on-reset

| CHARACTERISTICS OF THE ON-CHIP POWER-ON-RESET   | CHARACTERISTICS OF THE ON-CHIP POWER-ON-RESET   | CHARACTERISTICS OF THE ON-CHIP POWER-ON-RESET   | CHARACTERISTICS OF THE ON-CHIP POWER-ON-RESET   | CHARACTERISTICS OF THE ON-CHIP POWER-ON-RESET   | CHARACTERISTICS OF THE ON-CHIP POWER-ON-RESET   |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| Symbol                                          | Parameter                                       | Min                                             | Typ                                             | Max                                             | Unit                                            |
| VDD                                             | Power supply range                              | 3.0                                             | 3.3                                             | 3.6                                             | V                                               |
| Temp                                            | Temperature                                     | -55                                             | 25                                              | 125                                             | °C                                              |
| V OP                                            | Reset ON/OFF hysteresis                         |                                                 |                                                 | 0.80                                            | V                                               |
| V OFF                                           | Reset OFF                                       | 1.58                                            | 2.13                                            | 2.85                                            | V                                               |
| V ON                                            | Reset ON                                        | 1.49                                            | 1.98                                            | 2.70                                            | V                                               |
| t RESPOR                                        | Reset time of on-chip power-on-reset            | 2.14                                            | 3.31                                            | 5.52                                            | µs                                              |

<!-- image -->

## 12 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time for extended periods shall be avoided by application design.

| Symbol   | Parameter                     | Conditions                                                                                                                                                                                    | Min   | Max                  | Unit   |
|----------|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|----------------------|--------|
| V DD3    | DC supply voltage             | Voltage at Pin V33 in 3.3V mode                                                                                                                                                               | -0.3  | 3.6                  | V      |
| V I3     | DC input voltage, 3.3 V I/Os  |                                                                                                                                                                                               | -0.3  | V DD3 + 0.3          | V      |
| V O3     | DC output voltage, 3.3 V I/Os |                                                                                                                                                                                               | -0.3  | V DD3 + 0.3          | V      |
| V DD5    | DC supply voltage             | Voltage at Pin V5                                                                                                                                                                             | -0.3  | 5.5                  | V      |
| V I5     | DC input voltage, 5V I/Os     | Continuous DC Voltage                                                                                                                                                                         | -0.3  | V DD5 + 0.3, 5.5 max | V      |
| V O5     | DC output voltage, 5V I/Os    | Continuous DC Voltage                                                                                                                                                                         | -0.3  | V DD5 + 0.3, 5.5 max | V      |
| V ESD    | ESD voltage                   | PAD cells are designed to resist ESD voltages according to Human Body Model according to MIL- STD-883, with R C = 1 - 10 M  , R D = 1.5 K  , and C S = 100 pF, but it cannot be guaranteed. |       |  2000               | V      |
| TEMP D2  | Ambient air temperature range | Industrial / consumer type                                                                                                                                                                    | -40   | +85                  | °C     |
| TEMP D3  | Ambient air temperature range | Automotive type                                                                                                                                                                               | -55   | +125                 | °C     |
| TEMP D4  | Ambient air temperature range | Industrial type                                                                                                                                                                               | -40   | +105                 | °C     |
| TSG      | Storage temperature           |                                                                                                                                                                                               | -60   | +150                 | °C     |

## 13 Electrical Characteristics

## 13.1 Power Dissipation

| General DC characteristics   | General DC characteristics   | General DC characteristics              | General DC characteristics   | General DC characteristics   | General DC characteristics   | General DC characteristics   |
|------------------------------|------------------------------|-----------------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| Symbol                       | Parameter                    | Conditions                              | Min                          | Typ                          | Max                          | Unit                         |
| I SC32MHZ                    | Supply current               | f = 32 MHz at Tc = 25°C                 |                              | 15                           |                              | mA                           |
| I SC16MHZ                    | Supply current               | f = 16 MHz at Tc = 25°C                 |                              | 5                            | 10                           | mA                           |
| I SC8MHZ4210                 | Supply current               | f = 8 MHz at Tc = 25°C (IOs driven)     |                              | 5                            |                              | mA                           |
| I SC4MHZ                     | Supply current               | f = 4 MHz at Tc = 25°C                  |                              | 1.25                         | 2.5                          | mA                           |
| I PDN25C                     | Power down current           | Power down mode at Tc = 25°C, 5V supply |                              | 70                           | 150                          | µA                           |

## 13.2 DC Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless otherwise specified. A device with typical values will not leave Min/Max range within the full temperature range.

| General DC characteristics   | General DC characteristics   | General DC characteristics   | General DC characteristics   | General DC characteristics   | General DC characteristics   | General DC characteristics   |
|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|------------------------------|
| Symbol                       | Parameter                    | Conditions                   | Min                          | Typ                          | Max                          | Unit                         |
| ILC                          | Input leakage current        |                              | -10                          |                              | 10                           | µA                           |
| CIN                          | Input capacitance            |                              |                              | 7                            |                              | pF                           |
| LIL                          | Input with pull up           | V IN = 0V                    | -110                         | -30                          | -5                           | µA                           |

| DC characteristics for 3.3V supply mode   | DC characteristics for 3.3V supply mode   | DC characteristics for 3.3V supply mode   | DC characteristics for 3.3V supply mode   | DC characteristics for 3.3V supply mode   | DC characteristics for 3.3V supply mode   | DC characteristics for 3.3V supply mode   |
|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Symbol                                    | Parameter                                 | Conditions                                | Min                                       | Typ                                       | Max                                       | Unit                                      |
| V DD3                                     | DC supply voltage                         |                                           | 3.0                                       | 3.3                                       | 3.6                                       | V                                         |
| V I3                                      | DC input voltage                          |                                           | 0                                         |                                           | V DD3                                     | V                                         |
| V IL3                                     | Low level input voltage                   | Pin TEST only                             | 0                                         |                                           | 0.3 x V DD3                               | V                                         |
| V IH3                                     | High level input voltage                  | Pin TEST only                             | 0.7 x V DD3                               |                                           | V DD3 + 0.3                               | V                                         |
| V LTH3                                    | Low level input voltage threshold         | All inputs except TEST                    | 0.9                                       |                                           | 1.2                                       | V                                         |
| V HTH3                                    | High level input voltage threshold        | All inputs except TEST                    | 1.5                                       |                                           | 1.9                                       | V                                         |
| V HYS3                                    | Schmitt-Trigger hysteresis                |                                           | 0.4                                       |                                           | 0.7                                       | V                                         |
| V OL3                                     | Low level output voltage                  | I OL = 0.3mA                              |                                           |                                           | 0.1                                       | V                                         |
| V OH3                                     | High level output voltage                 | I OH = 0.3mA                              | V DD3 - 0.1                               |                                           |                                           | V                                         |
| V OL3                                     | Low level output voltage                  | I OL = 2mA                                |                                           |                                           | 0.4                                       |                                           |
| V OH3                                     | High level output voltage                 | I OH = 2 mA                               | V DD3 - 0.4                               |                                           |                                           | V                                         |

Ripple on VDD3 has to be taken into account when measuring thresholds and hysteresis.

| DC characteristics for 5V supply mode   | DC characteristics for 5V supply mode   | DC characteristics for 5V supply mode   | DC characteristics for 5V supply mode   | DC characteristics for 5V supply mode   | DC characteristics for 5V supply mode   | DC characteristics for 5V supply mode   |
|-----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|
| Symbol                                  | Parameter                               | Conditions                              | Min                                     | Typ                                     | Max                                     | Unit                                    |
| V DD5                                   | DC supply voltage                       |                                         | 4.5                                     | 5                                       | 5.5                                     | V                                       |
| V I5                                    | DC input voltage                        |                                         | 0                                       |                                         | V DD5                                   | V                                       |
| V IL5                                   | Low level input voltage                 | Pin TEST only                           | 0                                       |                                         | 0.3 x V DD5                             | V                                       |
| V IH5                                   | High level input voltage                | Pin TEST only                           | 0.7 x VDD 5                             |                                         | V DD5 + 0.3                             | V                                       |
| V LTH5                                  | Low level input voltage threshold       | All inputs except TEST, V DD5 =5V       | 0.9                                     |                                         | 1.2                                     | V                                       |
| V HTH5                                  | High level input voltage threshold      | All inputs except TEST, V DD5 =5V       | 1.5                                     |                                         | 1.9                                     | V                                       |
| V HYS5                                  | Schmitt-Trigger hysteresis              |                                         | 0.4                                     |                                         | 0.7                                     | V                                       |
| V OL5                                   | Low level output voltage                | I OL = 0.3mA                            |                                         |                                         | 0.1                                     | V                                       |
| V OH5                                   | High level output voltage               | I OH = 0.3mA                            | V DD5 - 0.1                             |                                         |                                         | V                                       |
| V OL5                                   | Low level output voltage                | I OL = 4mA                              |                                         |                                         | 0.4                                     |                                         |
| V OH5                                   | High level output voltage               | I OH = 4 mA                             | V DD5 - 0.4                             |                                         |                                         | V                                       |

## 13.3 Timing Characteristics

Figure 13.1 General timing parameters

| General timing parameters (TMC4210 with EMI optimized output drivers)   | General timing parameters (TMC4210 with EMI optimized output drivers)   | General timing parameters (TMC4210 with EMI optimized output drivers)   | General timing parameters (TMC4210 with EMI optimized output drivers)   | General timing parameters (TMC4210 with EMI optimized output drivers)   | General timing parameters (TMC4210 with EMI optimized output drivers)   | General timing parameters (TMC4210 with EMI optimized output drivers)   |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Symbol                                                                  | Parameter                                                               | Conditions                                                              | Min                                                                     | Typ                                                                     | Max                                                                     | Unit                                                                    |
| f CLK                                                                   | Operation frequency                                                     | f CLK = 1 / t CLK                                                       | 0                                                                       | 16                                                                      | 32                                                                      | MHz                                                                     |
| t CLK                                                                   | Clock period                                                            | Rising edge to rising edge of CLK                                       | 31.25                                                                   |                                                                         |                                                                        | ns                                                                      |
| t CLK_L                                                                 | Clock time low                                                          |                                                                         | 12.5                                                                    |                                                                         |                                                                        | ns                                                                      |
| t CLK_H                                                                 | Clock time high                                                         |                                                                         | 12.5                                                                    |                                                                         |                                                                        | ns                                                                      |
| t RISE_I                                                                | Input signal rise time                                                  | 10% to 90% except TEST pin                                              | 0.5                                                                     |                                                                         |                                                                        | ns                                                                      |
| t FALL_I                                                                | Input signal fall time                                                  | 90% to 10% except TEST pin                                              | 0.5                                                                     |                                                                         |                                                                        | ns                                                                      |
| t RISE_O_4210                                                           | Output signal rise time                                                 | 10% to 90%                                                              |                                                                         | 7                                                                       |                                                                         | ns                                                                      |
| t FALL_O_4210                                                           | Output signal fall time                                                 | 90% to 10%                                                              |                                                                         | 7                                                                       |                                                                         | ns                                                                      |
| t SU                                                                    | Setup time                                                              | Relative to falling clock edge at CLK                                   | 1                                                                       |                                                                         |                                                                         | ns                                                                      |
| t HD                                                                    | Hold time                                                               | Relative to falling clock edge at CLK                                   | 1                                                                       |                                                                         |                                                                         | ns                                                                      |
| t PD_4210                                                               | Propagation delay time                                                  | 50% of rising edge of the clock CLK to the 50% of the output            | 1                                                                       | 10                                                                      |                                                                         | ns                                                                      |

<!-- image -->

## 15 Package Machanical Data

## 15.1 Dimensional Drawings

Attention: Drawings not to scale.

<!-- image -->

Figure 15.1 Dimensional drawings SSOP16, 150 MILS, 0.635mm (0.025 inch) pitch

| DIMENSIONS OF PACKAGE SSOP16, 150 MILS   | DIMENSIONS OF PACKAGE SSOP16, 150 MILS   | DIMENSIONS OF PACKAGE SSOP16, 150 MILS   | DIMENSIONS OF PACKAGE SSOP16, 150 MILS   | DIMENSIONS OF PACKAGE SSOP16, 150 MILS   | DIMENSIONS OF PACKAGE SSOP16, 150 MILS   | DIMENSIONS OF PACKAGE SSOP16, 150 MILS   |
|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|
| Symbol                                   | Dimensions in MILLIMETERS                | Dimensions in MILLIMETERS                | Dimensions in MILLIMETERS                | Dimensions in INCHES                     | Dimensions in INCHES                     | Dimensions in INCHES                     |
| Symbol                                   | Min                                      | Typ                                      | Max                                      | Min                                      | Typ                                      | Max                                      |
| A                                        | 1.55                                     | 1.63                                     | 1.73                                     | 0.061                                    | 0.064                                    | 0.068                                    |
| A1                                       | 0.10                                     | 0.15                                     | 0.25                                     | 0.004                                    | 0.006                                    | 0.0098                                   |
| A2                                       | 1.40                                     | 1.47                                     | 1.55                                     | 0.055                                    | 0.058                                    | 0.061                                    |
| b                                        | 0.20                                     |                                          | 0.30                                     | 0.008                                    |                                          | 0.012                                    |
| b                                       | 0.20                                     | 0.25                                     | 0.28                                     | 0.008                                    | 0.010                                    | 0.011                                    |
| c                                        | 0.18                                     |                                          | 0.25                                     | 0.007                                    |                                          | 0.010                                    |
| c                                       | 0.18                                     | 0.20                                     | 0.23                                     | 0.007                                    | 0.008                                    | 0.009                                    |
| B                                        | 0.20                                     | 0.25                                     | 0.31                                     | 0.008                                    | 0.010                                    | 0.012                                    |
| C                                        | 0.19                                     | 0.20                                     | 0.25                                     | 0.0075                                   | 0.008                                    | 0.0098                                   |
| D                                        | 4.80                                     | 4.93                                     | 4.98                                     | 0.189                                    | 0.194                                    | 0.196                                    |
| E                                        | 3.91 best case                           | 3.91 best case                           | 3.91 best case                           | 0.154 best case                          | 0.154 best case                          | 0.154 best case                          |
| e                                        | 0.635 best case                          | 0.635 best case                          | 0.635 best case                          | 0.025 best case                          | 0.025 best case                          | 0.025 best case                          |
| H                                        | 6.02 best case                           | 6.02 best case                           | 6.02 best case                           | 0.237 best case                          | 0.237 best case                          | 0.237 best case                          |
| h                                        | 0.25                                     | 0.33                                     | 0.41                                     | 0.010                                    | 0.013                                    | 0.016                                    |
| L                                        | 0.41                                     | 0.635                                    | 0.89                                     | 0.016                                    | 0.025                                    | 0.035                                    |
| N                                        | 16                                       | 16                                       | 16                                       | 16                                       | 16                                       | 16                                       |
| S                                        | 0.051                                    | 0.114                                    | 0.178                                    | 0.0020                                   | 0.0045                                   | 0.0070                                   |
|                                         | 0                                       | 5                                       | 8                                       | 0                                       | 5                                       | 8                                       |

## 15.1.1 Package Code

| Device   | Package       | Temperature range   | Code/ Marking   |
|----------|---------------|---------------------|-----------------|
| TMC4210  | SSOP16 (RoHS) | -40° to +105°C      | TMC4210-I       |

## 16 Marking

| PRODUCT NAME          | TMC4210-I                 |
|-----------------------|---------------------------|
| Package               | SSOP16 - 150 MILS         |
| Date code             | WWYY (weekWW and year YY) |
| Lot number identifier | LLLL                      |
| Logo                  | No                        |

## 17 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG. Life support systems are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this data sheet is believed to be accurate and reliable. However no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 18 ESD Sensitive Device

The TMC4210 is an ESD-sensitive CMOS device and sensitive to electrostatic discharge. Take special care to use adequate grounding of personnel and machines in manual handling. After soldering the devices to the board, ESD requirements are more relaxed. Failure to do so can result in defects or decreased reliability.

PAD cells are designed to resist ESD voltages corresponding to Human Body Model (MIL-STD-883, with RC = 1 -10 M  ,  R D = 1.5 K  , and C S = 100 pF).

<!-- image -->

Note: In a modern SMD manufacturing process, ESD voltages well below 100V are standard. A major source for ESD is hot-plugging the motor during operation.

## 19 Table of Figures

| Figure 1.1 TMC4210 functional block diagram.........................................................................................................4                |    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| Figure 1.2 Application example using Step/Dir driver interface..........................................................................5                            |    |
| Figure 3.1 TMC4210 pin out ........................................................................................................................................9 |    |
| Figure 4.1 TMC4210 application environment with TMC260, TMC261 or TMC2660. ......................................                                                    | 11 |
| Figure 5.1 Timing diagram of the serial µC interface.........................................................................................                        | 13 |
| Figure 6.1 Velocity ramp parameters and velocity profiles...............................................................................                             | 20 |
| Figure 6.2 Target position calculation, ramp generator, and pulse generator..............................................                                            | 23 |
| Figure 6.3 Proportionality parameter p and outline of velocity profile(s).....................................................                                       | 24 |
| Figure 6.4 Left switch and right switch for reference search and automatic stop function......................                                                       | 28 |
| Figure 7.1 Triple switch configuration left stop switch - reference switch - right stop switch ...............                                                       | 36 |
| Figure 7.2 Reference search .....................................................................................................................................    | 37 |
| Figure 8.1 Step/Dir timing ( en_sd = 1; step_half = 0)..........................................................................................                     | 38 |
| Figure 10.1 3 V operation (CMOS) vs. 5 V operation (TTL).................................................................................                            | 40 |
| Figure 11.1 Operating principle of the power-on-reset......................................................................................                          | 41 |
| Figure 13.1 General timing parameters.................................................................................................................               | 44 |
| Figure 15.1 Dimensional drawings SSOP16, 150 MILS, 0.635mm (0.025 inch) pitch ....................................                                                   | 45 |

## 20 Revision History

|   Version | Date        | Author SD - Sonja Dwersteg BD - Bernhard Dwersteg   | Description   | Description                                                                                                                                                      |
|-----------|-------------|-----------------------------------------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|      1    | 2013-SEP-09 | SD                                                  | -             | TMC4210 Datasheet Rev. 1.00 based on TMC429 Datasheet                                                                                                            |
|      1.01 | 2014-OCT-10 | SD                                                  | - -           | Chapter 6.2 and 6.2.1 corrected. Description of status information bits in chapter 5.2.2.2 corrected. Do not set SDO_INT=1 because this disables the SPI output. |
|      1.03 | 2015-JUN-03 | BD                                                  | -             | Update SPI status                                                                                                                                                |
|      1.04 | 2017-AUG-30 | BD                                                  | -             | Update start/stop speed algorithm, removed reference to USRS register, as this is defined by the driver IC only.                                                 |
|      1.05 | 2017-NOV-16 | BD                                                  | -             | Corrected position of STPDIV register on page 35                                                                                                                 |
|      1.06 | 2020-JUN-10 | BD                                                  | -             | Updated front page                                                                                                                                               |
|      1.07 | 2022-FEB-24 | BD                                                  | -             | Updated logo                                                                                                                                                     |

## 21 References

Please also refer to the application notes, which are identically valid for TMC4210

Application Note 012 - TMC429 Extend Position

Application Note 013 - Motion Control Profile Parameterization

Application Note 016 - TMC429 TMC26x Getting Started

Application Note 018 - TMC42x Getting Started

Application Note 029 - Ramp Parameter Setup for TMC429