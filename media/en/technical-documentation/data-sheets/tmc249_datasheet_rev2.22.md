<!-- lastmod 2023-09-12 -->
## TMC249A DATASHEET

SPI or Classic Analog Interface Stepper Driver for Two-Phase Bipolar Motors with StallGuard ™ . External MOSFETs fit different motor sizes. Full set of protection &amp; diagnostics.

<!-- image -->

## stallGuard TM

## FEATURES AND BENEFITS

High Current up to 7A RMS using 4 Dual-MOS transistors.

Voltage Range 7 V… 36 V DC

3.3 V or 5 V DC for digital part

## SPI &amp; External Analogue / Digital Signals

Microstep Resolution up to 64 microsteps per full step

Low Power Dissipation via low RDS-ON power stage

Protection : overvoltage, overtemperature &amp; short circuit

Diagnostics : overcurrent, open load, 2 level overtemperature

StallGuard ™ sensorless stall detection and load measurement

Mixed Decay for smooth motor operation

Slope Control for reduced electromagnetic emissions

Current Control for cool motor and driver

Standby and Shutdown Mode

Choice of Package 7x7mm QFN32 package or SO28

## BLOCK DIAGRAM

<!-- image -->

## APPLICATIONS

Textile, Sewing Machines Office Automation Printer and Scanner Heliostat Controller ATM, Cash recycler POS CCTV, Security Antenna Positioning Pumps and Valves Lab Automation Liquid Handling Medical

## DESCRIPTION

The  TMC249  driver  for  two-phase  stepper motors  offers  a  competitive  feature  set, including 64x micro-stepping, sensorless mechanical  load  measurement  with  stall detection, and smart current control. Standard SPI™  and communication via external analog / digital signals are available. The TMC249 drives eight external Low-RDS-ON  high  efficiency  MOSFETs  for motor  currents  up  to  7A  and  up  to  36V. Integrated protection and diagnostic features support robust and reliable operation. High integration and small form factor enable  miniaturized  designs  with low  external  component  count  for  costeffective and highly competitive solutions .

<!-- image -->

<!-- image -->

## APPLICATION EXAMPLES:  HIGH POWER -SMALL SIZE

The  TMC249  scores  with  its  high  power  density  and  a  versatility  that  covers  a  wide  spectrum  of applications and motor sizes, all while keeping costs down.

## APPLICATION EXAMPLES

## COMPACT DESIGN FOR UP TO 3 MOTORS USING SPI INTERFACE

OFFLOAD THE MOTION CONTROL FUNCTION TO TRINAMICS TMC429. GET A COMPETITIVE DESIGN FOR MULTIPLE MOTORS! By offloading the motion-control function to the TMC429, up to three motors can be operated reliably with very little demand for service from the microcontroller.

<!-- image -->

## MINIATURIZED DESIGN WITH SIMPLE DIGITAL DRIVER CONTROL

BENEFIT FROM A LARGE CURRENT CONTROL RANGE VIA ANALOG INPUTS!

The TMC249 is controlled via SPI bus. The microcontroller initializes the chip and writes control parameters, mode bits, and values for coil currents in the driver chip. Analog A/B inputs allow for a large current control range.

<!-- image -->

## MINIATURIZED DESIGN FOR STANDALONE MODE

## REPLACE BIPOLAR DRIVER BY A MODERN CMOS DRIVER. USE NEW HARDWARE AND KEEP YOUR SOFTWARE INVEST!

The TMC249 is controlled by analog current control signals and digital phase signals. Especially for lower speeds inimitable smoothness will be achieved with TRINAMICs low noise chopper.

<!-- image -->

<!-- image -->

## ORDER CODES

| Order code   | Description                                    | Size         |
|--------------|------------------------------------------------|--------------|
| TMC249A-LA   | 7 A stepper driver for external MOSFETs, QFN32 | 7 x 7 mm 2   |
| TMC249A-SA   | 7 A stepper driver for external MOSFETs, SO28  | 10 x 18 mm 2 |

## TMC429+24X-EVAL

## EVALUATION &amp; DEVELOPMENT PLATFORM

This evaluation board is a development platform for applications based on the TMC249. The board features USB interface  for  communication  with  control  software  running on a PC. External power MOSFETs support drive currents up to  3.5A  at  24  V.  The  control  software  provides  a  userfriendly  GUI  for  setting  control  parameters  and  visualizing the dynamic response of the motor.

## TABLE OF CONTENTS

| 1       | KEY CONCEPTS                                                 | 4     | 10        | MOVING THE MOTOR                                                        | 27    |
|---------|--------------------------------------------------------------|-------|-----------|-------------------------------------------------------------------------|-------|
| 1.1     | ADVANCED FEATURES                                            | 5     | 11        | MOSFET EXAMPLES                                                         | 28    |
| 1.2     | CONTROL I NTERFACES                                          | 5     |           | POWER                                                                   |       |
| 2       | PIN ASSIGNMENTS                                              | 6     | 12        | USING ADDITIONAL DRIVERS                                                | 29    |
| 2.1     | PACKAGE OUTLINE                                              | 6     | 13        | LAYOUT CONSIDERATIONS                                                   | 30    |
| 2.2     | SIGNAL DESCRIPTIONS                                          | 6     | 13.1      | GROUNDING                                                               | 30    |
| 3       | STALLGUARD - STALL DETECTION AND HOMING                      | 7     | 13.2 13.3 | SELECTION OF ADDITIONAL COMPONENTS PULL -UP RESISTORS ON UNUSED I NPUTS | 30 32 |
| 3.1     | STALLGUARD MEASUREMENT                                       | 7     | 13.4      | POWER SUPPLY SEQUENCING                                                 |       |
| 3.2     | USING SENSORLESS STALL DETECTION                             | 9     |           | CONSIDERATIONS                                                          | 32    |
| 4       | SPI INTERFACE                                                | 10    | 13.5      | SCHEMATIC AND LAYOUT EXAMPLES                                           | 33    |
| 4.1     | BUS SIGNALS                                                  | 10    | 14        | APPLICATION NOTES                                                       | 35    |
| 4.2     | MOTOR COIL CURRENT SETTING VIA SPI                           | 11    | 14.1      | EXTENDING THE MICROSTEP RESOLUTION                                      | 35    |
| 4.3     | BASE CURRENT CONTROL MODE VIA INA / INB IN SPI MODE          | 11    | 14.2      | SYNCHRONIZING THE CHOPPER CLOCK                                         | 36    |
| 4.4     | CONTROLLING POWER DOWN VIA THE SPI I NTERFACE                |       | 15        | ABSOLUTE MAXIMUM RATINGS                                                | 37    |
| 4.5     | OPEN LOAD DETECTION                                          | 13    | 16 16.1   | ELECTRICAL CHARACTERISTICS                                              | 38    |
| 4.6     | STANDBY AND SHUTDOWN MODE                                    | 13    |           | OPERATIONAL RANGE                                                       | 38    |
|         |                                                              | 13    | 16.2      | DC SPECIFICATIONS                                                       | 38    |
| 4.7     | POWER SAVING                                                 | 13    | 16.3      | AC SPECIFICATIONS                                                       | 40    |
| 4.8     | BUS TIMING USING THE SPI I NTERFACE WITH ONE OR              | 14    | 16.4      | THERMAL PROTECTION                                                      | 40    |
| 4.9     | MULTIPLE DEVICES SPI FILTER                                  | 14    | 17 17.1   | PACKAGE MECHANICAL DATA SO28 DIMENSIONS                                 | 41 41 |
| 4.10    | CLASSICAL NON-SPI CONTROL (STANDALONE MODE)                  | 14    | 17.2      | QFN32 DIMENSIONS                                                        | 41    |
| 5       | MODE                                                         | 15    | 17.3 17.4 | 41 PACKAGE CODE                                                         | 41    |
| 5.1     | PIN FUNCTIONS IN STANDALONE MODE INPUT SIGNALS FOR MICROSTEP | 15    |           | DISCLAIMER                                                              |       |
| 5.2     | CONTROL                                                      | IN    | 18        |                                                                         | 42    |
|         | STANDALONE MODE                                              | 15    | 19        | ESD SENSITIVE DEVICE                                                    | 42    |
| 6       | CURRENT SETTING SENSE RESISTOR FOR CURRENT                   | 16 16 | 20        | DESIGNED FOR SUSTAINABILITY                                             | 42    |
| 6.1 6.2 | SETTING RESISTOR R SH FOR HIGH SIDE OVERCURRENT              |       | 21        | TABLE OF FIGURES                                                        | 43    |
| 7       | DETECTION                                                    | 16    | 22        | REVISION HISTORY                                                        | 44    |
|         | CHOPPER OPERATION                                            | 18    | 23        | REFERENCES                                                              | 44    |
| 7.1     | MIXED DECAY MODE                                             | 18    |           |                                                                         |       |
| 7.2     | CHOPPER FREQUENCY                                            | 19    |           |                                                                         |       |
| 7.3     | CPU CONTROLLED LOW NOISE VOLTAGE MODE PWM                    | 20    |           |                                                                         |       |
| 7.4     | ADAPTING THE SINE WAVE FOR SMOOTH MOTOR OPERATION            | 22    |           |                                                                         |       |
| 7.5     | BLANK TIME                                                   | 23    |           |                                                                         |       |
| 8       | SLOPE CONTROL                                                | 24    |           |                                                                         |       |
| 9       | PROTECTION FUNCTIONS                                         | 25    |           |                                                                         |       |
| 9.1     | OVERCURRENT PROTECTION AND DIAGNOSTIC                        |       |           |                                                                         |       |
| 9.2     | OVER TEMPERATURE PROTECTION AND DIAGNOSTIC                   | 25 25 |           |                                                                         |       |
| 9.3     | OVERVOLTAGE PROTECTION AND ENN PIN BEHAVIOR                  | 26    |           |                                                                         |       |

## 1 Key Concepts

Figure 1.1 TMC249 block diagram

<!-- image -->

The TMC249 is a dual full bridge driver IC for bipolar stepper motor control applications. The chip is realized  in  a  HVCMOS  technology  and  directly  drives  eight  external  Low-RDS-ON  high  efficiency MOSFETs. A 4A driver can be realized in the size of a stamp.

The  TMC249  motor  driver  implements  advanced  features  which  are  characteristic  to  TRINAMIC products. These features contribute toward precision, energy efficiency, reliability, smooth motion, and cooler operation in stepper motor applications.

In  addition  to  these  performance  enhancements,  TRINAMIC  motor  drivers  also  offer  safeguards  to detect and protect against short circuit, overtemperature, overvoltage, and undervoltage conditions for enhancing safety and recovery from equipment malfunctions.

## 1.1 Advanced Features

| stallGuard ™                  | The TMC249 offers sensorless load measurement and stall detection. Its ability to predict an overload makes the TMC249 an optimum choice for drives, where a high reliability is desired. Further, the integrated stallGuard™ feature makes the TMC249 a good choice for applications, where a reference point is needed, but where a switch is not desired.                           |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Current Control               | Current control serves a cool driver and motor. Internal DACs allow microstepping as well as smart current control. Its low power dissipation makes the TMC249 an optimum choice for drives, where a high reliability is desired.                                                                                                                                                      |
| Microstepping via SPI         | Easy to use digital control of microstepping. After choosing the desired microstep resolution the microcontroller sends digital values for each microstep current via SPI. DACs and comparators convert these digital values to analog signals for coil currents. This way, every microstep is initialized and controlled by the microcontroller. The TMC249 serves for the execution. |
| Mixed Decay                   | Mixed decay can be used for smoother operation.                                                                                                                                                                                                                                                                                                                                        |
| Low Noise Chopper             | The TMC249 allows implementing a low noise voltage PWM chopper by two microcontroller PWM outputs using its simple standalone mode. This way, a motor can be moved very smoothly at high microstep resolution without any noise.                                                                                                                                                       |
| Slope Control                 | Slope control reduces electromagnetic emissions.                                                                                                                                                                                                                                                                                                                                       |
| Oscillator and Clock Selector | Oscillator and clock selector provide the system clock from the on- chip oscillator or an external source.                                                                                                                                                                                                                                                                             |

## 1.2 Control Interfaces

There  are  two  control  interfaces  from  the  motion  controller  to  the  motor  driver:  the  SPI  serial interface and the classical analog interface.

## 1.2.1 SPI Interface

The SPI interface is used to write control information to the chip and read back status information. This interface must be used to initialize parameters and modes necessary to enable driving the motor. This interface may also be used for directly setting the currents flowing through the motor coils. The motor can be controlled through the SPI interface alone.

The SPI interface is a bit-serial interface synchronous to a bus clock. For every bit sent from the bus master  to  the  bus  slave,  another  bit  is  sent  simultaneously  from  the  slave  to  the  master. Communication between an SPI master and the TMC249 slave always consists of sending one 12-bit command word and receiving one 12-bit status word.

The SPI command rate typically corresponds to the microstep rate at low velocities. At high velocities, the  rate  may  be  limited  by  CPU  bandwidth  to  10,000  to  100,000  commands  per  second,  so  the application may need to change to fullstep resolution.

## 1.2.2 Classical Non-SPI Control Mode (Standalone Mode)

The driver can be controlled by analog current control signals and digital phase signals.

## 2 Pin Assignments

## 2.1 Package Outline

Figure 2.1 TMC249 pin assignments

<!-- image -->

## 2.2 Signal Descriptions

<!-- image -->

## Note

:

The exposed die attach pad should be connected to a GND plane or can be left open.

| Pin   |   Pin SO28 | PIN QFN   | Function                                                           |
|-------|------------|-----------|--------------------------------------------------------------------|
| AGND  |         25 | 1         | Analog ground (reference for SRA, SRB, OSC, SLP, INA, INB, SLP)    |
| INA   |         23 | 30        | Analog current control phase A                                     |
| INB   |         22 | 29        | Analog current control phase B                                     |
| GND   |         20 | 26, 27    | Digital and power GND                                              |
| OSC   |          4 | 9         | Oscillator capacitor or external clock input for chopper           |
| HA1   |         27 | 3         | Outputs for high side P-channel transistors.                       |
| HA2   |         28 | 4         | Outputs for high side P-channel transistors.                       |
| HB1   |         16 | 22        | Outputs for high side P-channel transistors.                       |
| HB2   |         15 | 21        | Outputs for high side P-channel transistors.                       |
| LA1   |          1 | 6         | Outputs for low side N-channel transistors                         |
| LA2   |          2 | 7         | Outputs for low side N-channel transistors                         |
| LB1   |         14 | 19        | Outputs for low side N-channel transistors                         |
| LB2   |         13 | 18        | Outputs for low side N-channel transistors                         |
| SRA   |          3 | 8         | Bridge A / B current sense resistor input                          |
| SRB   |         12 | 17        | Bridge A / B current sense resistor input                          |
| SDO   |          5 | 10        | Data output of SPI interface (tri-state)                           |
| SDI   |          6 | 11        | Data input of SPI interface                                        |
| SCK   |          7 | 12        | Serial clock input of SPI interface                                |
| CSN   |          8 | 13        | Chip select input of SPI interface                                 |
| SPE   |         10 | 15        | Enable SPI mode (high active). Tie to GND for non-SPI applications |
| SLP   |         24 | 32        | Slope control resistor. Tie to GND for fastest slope               |
| ENN   |          9 | 14        | Device enable (low active) and overvoltage shutdown input          |
| ANN   |         26 | 2         | Enable analog current control via INA and INB (low active)         |
| BL1   |         11 | 16        | Digital blank time select                                          |
| BL2   |         17 | 23        | Digital blank time select                                          |
| VS    |         19 | 25        | Motor supply voltage                                               |
| VCC   |         21 | 28        | 3.0 … 5.5V supply voltage for analog and logic circuits            |
| VT    |         18 | 24        | Short to GND detection comparator - connect to VS if not used      |

## 3 StallGuard - Stall Detection and Homing

StallGuard provides a sensorless measurement of the load on the motor. The load detection is based on the motor ' s back EMF of the coils. It allows a digital read out of the mechanical load on the motor via the serial interface.

StallGuard is important for:

- -Sensorless homing (finding a reference point)
- -Stall detection (e.g., due to human interaction or mechanical failure)
- -Predicting an overload and assuring high reliability

StallGuard is typically used for the noiseless reference search with a mechanical reference position. The quality of the result depends on three constraints from the stepper motor and its application:

- -Efficiency of a stepper motor in terms of mechanical power vs. power dissipation
- -Difference in mechanical load between free running and stall on barrier
- -Velocity of the stepper motor adapted for StallGuard

## 3.1 StallGuard Measurement

The StallGuard measurement value changes linearly over a wide range of load, velocity, and current settings. At maximum motor load, the value goes to zero or near to zero. This corresponds to a load angle of 90° between the magnetic field of the coils and magnets in the rotor. This also is the most energy-efficient point of operation for the motor.

The load detection level depends on several factors:

Motor velocity

A higher velocity leads to a higher readout value.

Motor resonance

Motor  resonances  cause  a  high  dynamic  load  on  the  motor,  and  thus measurement may give unsatisfactory results.

Motor acceleration

Acceleration phases also produce dynamic load on the motor.

Mixed decay setting

For  load  measurement  mixed  decay  must  be  off  at  least  for  some  time before the zero crossing of the coil current. If mixed decay is used, and the mixed  decay  period  is  extended  towards  the  zero  crossing,  the  load indicator value decreases.

## Hint :

- -To get a readout value, drive the motor using sine commutation and mixed decay switched off.
- -The load measurement is available as a three-bit load indicator during normal motion of the motor.
- -A higher mechanical load on the motor results in a lower readout value.
- -At maximum motor load, the value goes to zero or near to zero
- -A jumping value results from trying to turn the motor in a stall condition
- -The value is updated once per fullstep.

## STALLGUARD VALUES

| Bits                         | Description   | Description                                                                                                                                                                                                                                                                                  | Value Range   |
|------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| LD2 LD1 LD0 (unsigned 3 bit) | 0 1, 2 3… 7   | Highest mechanical load on motor, stall may occur. High mechanical load on motor. Less load on motor. A value in this range should be achieved in a suitable velocity range under no-load conditions, in order to get stable stall detection. 7: 100% StallGuard signal - lowest motor load. | 0… 7          |

The  StallGuard  signal  sensitivity  curves  show  the  reaction  of  the  TMC249  to  the  StallGuard  signal taken from measuring the motor. A certain stray occurs within the TMC249, but the resulting curve is monotonously. Typically, the curve for a certain device has a certain offset. For high values above 2, the percentage of the stray is relatively low, so that a motor reaching these values allows safe stall detection.

Figure 3.1 StallGuard signal sensitivity curves

<!-- image -->

## 3.2 Using Sensorless Stall Detection

The sensorless stall detection typically is used, to detect the reference point without the usage of a switch or photo interrupter. Therefore, the actuator is driven to a mechanical stop, e.g. one end point in a spindle type actuator. As soon as the stop is hit, the motor stalls. Without stall detection, this would give an audible humming noise and vibrations, which could damage mechanics.

## TO GET RELIABLE STALL DETECTION, PROCEED AS FOLLOWS:

1. Choose a motor velocity for reference movement. Use a medium velocity which is far enough from mechanical resonance frequencies. In some applications even the start and/or stop frequency may be used. So, the motor can stop within one fullstep if a stall is detected.
2. Use a sine stepping pattern and swi tch off mixed decay (at least 1… 3 microsteps before zero crossing of the sine wave current in the related coil).
3. Monitor the load indicator during movement. It should show a stable readout value in the range 3… 7 (LMOVE). If the readout is high (&gt;5), the mixed decay portion may be increased.
4. Choose a threshold value LSTALL between 0 and LMOVE - 1. Monitor the load indicator during the reference search movement (homing) as the desired velocity is reached.
5. Readout is required at least once per fullstep. If the readout value at one fullstep is below or equal to LSTALL, stop the motor.
6. If the motor stops during normal movement without hitting the mechanical stop, decrease LSTALL. If the stall condition is not detected at once, when the motor stalls, increase LSTALL.

## Attention

The StallGuard value might show a wrong result within one chopper period plus 8 microseconds after toggling one of the phase polarity bits, as the value becomes updated during this time! To validate a stall,  read  out  a  second  time,  when  the  first  reading  signals  a  stall.  This  is  the  method  to  use  in combination required when working with multiple drivers in a TMC429 controlled setup. Optionally, ignore the value coming back with the datagram following a phase polarity change.

Figure 3.2 Implementing StallGuard

<!-- image -->

## 4 SPI Interface

To drive a motor in SPI mode, the TMC249 requires setting current absolute values and polarity for each microstep. The resulting curves for both coils shall describe a sine and a cosine wave. Toggling just the polarities gives fullstepping. The SPI interface also allows reading back status values and bits.

## 4.1 Bus Signals

The SPI bus on the TMC249 has five signals:

- SCK bus clock input
- SDI serial data input
- SDO serial data output
- CSN chip select input (active low)
- ENN enable input has to be active (low) in order to use SPI

The slave  is  enabled  for  an  SPI  transaction  by  a  low  on  the  chip  select  input  CSN.  Bit  transfer  is synchronous to the bus clock SCK, with the slave latching the data from SDI on the rising edge of SCK and driving data to SDO following the falling edge. The most significant bit is sent first. A minimum of 12 SCK clock cycles is required for a bus transaction with the TMC249.

If more than 12 clocks are driven, the additional bits shifted into SDI are shifted out on SDO after a 12-clock delay through an internal shift register. This can be used for daisy chaining multiple chips.

CSN must be low during the whole bus transaction. When CSN goes high, the contents of the internal shift  register  are  latched  into  the  internal  control  register  and  recognized  as  a  command  from  the master to the slave. If more than 12 bits are sent, only the last 12 bits received before the rising edge of CSN are recognized as the command.

The  SPI  data  word  sets  the  current  and  polarity  for  both  coils.  By  applying  consecutive  values, describing  a  sine  and  a  cosine  wave,  the  motor  can  be  driven  in  microsteps.  Every  microstep  is initiated by its own telegram. Please refer to the description of the analog mode for details on the waveforms required. The SPI interface timing is described in the timing section.

We recommend the TMC429 or TMC4361A to automatically generate the microstepping sequence and motor ramps for up to three motors.

## SERIAL DATA WORD TRANSMITTED TO TMC249

MSB TRANSMITTED FIRST

|   Bit | Name   | Function                   | Remark                           |
|-------|--------|----------------------------|----------------------------------|
|    11 | MDA    | Mixed decay enable phase A | 1 = mixed decay                  |
|    10 | CA3    | Current bridge A.3         | MSB                              |
|     9 | CA2    | Current bridge A.2         |                                  |
|     8 | CA1    | Current bridge A.1         |                                  |
|     7 | CA0    | Current bridge A.0         | LSB                              |
|     6 | PHA    | Polarity bridge A          | 0 = current flow from OA1 to OA2 |
|     5 | MDB    | Mixed decay enable phase B | 1 = mixed decay                  |
|     4 | CB3    | Current bridge B.3         | MSB                              |
|     3 | CB2    | Current bridge B.2         |                                  |
|     2 | CB1    | Current bridge B.1         |                                  |
|     1 | CB0    | Current bridge B.0         | LSB                              |
|     0 | PHB    | Polarity bridge B          | 0 = current flow from OB1 to OB2 |

## SERIAL DATA WORD TRANSMITTED FROM TMC249

MSB TRANSMITTED FIRST

|   Bit | Name   | Function                      | Remark                                                 |
|-------|--------|-------------------------------|--------------------------------------------------------|
|    11 | LD2    | Load indicator bit 2          | MSB                                                    |
|    10 | LD1    | Load indicator bit 1          |                                                        |
|     9 | LD0    | Load indicator bit 0          | LSB                                                    |
|     8 | 1      | Always 1                      |                                                        |
|     7 | OT     | Overtemperature               | 1 = Chip off due to overtemperature                    |
|     6 | OTPW   | Temperature prewarning        | 1 = Prewarning temperature exceeded                    |
|     5 | UV     | Driver undervoltage           | 1 = Undervoltage on VS                                 |
|     4 | OCHS   | Overcurrent high side         | 3 PWM cycles with overcurrent within 63 PWM cycles     |
|     3 | OLB    | Open load bridge B            | Target current not reached within 14 oscillator cycles |
|     2 | OLA    | Open load bridge A            | Target current not reached within 14 oscillator cycles |
|     1 | OCB    | Overcurrent bridge B low side | 3 PWM cycles with overcurrent within 63 PWM cycles     |
|     0 | OCA    | Overcurrent bridge A low side | 3 PWM cycles with overcurrent within 63 PWM cycles     |

## Note :

- -The current values correspond to a standard 4 Bit DAC, where 100% = 15/16.
- -The content of all registers is cleared to 0 on power-on reset or disable via the ENN pin, bringing the IC to a low power standby mode.
- -All SPI inputs have Schmitt-Trigger function.

## 4.2 Motor Coil Current Setting via SPI

| Current Setting CA3..0 / CB3..0   | Percentage of Current   | TYPICAL TRIP VOLTAGE OF THE CURRENT SENSE COMPARATOR - INTERNAL REFERENCE OR ANALOG INPUT VOLTAGE OF 2V IS USED -   |
|-----------------------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------|
| 0000                              | 0%                      | 0 V (bridge continuously in slow decay condition)                                                                   |
| 0001                              | 6.7%                    | 23 mV                                                                                                               |
| 0010                              | 13.3%                   | 45 mV                                                                                                               |
| ...                               | ...                     |                                                                                                                     |
| 1110                              | 93.3%                   | 317 mV                                                                                                              |
| 1111                              | 100%                    | 340 mV                                                                                                              |

## 4.3 Base Current Control Mode via INA / INB in SPI Mode

In SPI mode the IC can use an external reference voltage for each DAC. This allows the adaptation to different motors.

## Note

:

- -This Base Current Control Mode is enabled by tying pin ANN to GND.
- -A 2.0 V input voltage VIN gives full scale current of 100%, corresponding to the internal reference voltage.
- -The range for VIN is 0…3V. Min. 1 V recommended for best microstepping.
- -The trip voltage of the current sense comparator is determined by the input voltage VIN and the DAC current setting (see table above).

Figure 4.1 Relation between VIN and trip voltage of current sense comparator

<!-- image -->

## IN CASE A VARIABLE INPUT VOLTAGE V IN IS USED THE TYPICAL TRIP VOLTAGE IS CALCULATED:

VTRIP,A = 0.17 VINA  percentage SPI current setting A

VTRIP,B = 0.17 VINB  percentage SPI current setting B

## GENERATING INPUT VOLTAGE V IN

A maximum of 3.0V VIN is possible. Multiply the percentage of base current setting and the DAC table to get the overall coil current. It is advised to operate at a high base current setting, to reduce the effects of noise voltages. This feature allows a high-resolution setting of the required motor current using  an  external  DAC  or  PWM-DAC  (see  schematic  for  examples).  Consider  INA  and  INB  input resistance of typically 264kΩ.

<!-- image -->

## 4.4 Controlling Power Down via the SPI Interface

<!-- image -->

Programming current value 0000 for both coils at a time clears the overcurrent flags and switches the TMC249 into a low current standby mode with coils switched off.

## 4.5 Open Load Detection

Open load is signaled when the IC is not able to reach the target current (trip point of comparator) within more  than  14 oscillator cycles. During overcurrent, undervoltage, or overtemperature conditions, the open load flags also become active. The flag has a purely informative character.

## Attention

Open load detection is disabled for each coil, while the coil current is set to 0000. In this condition the chopper is off, and the open load flag is read as inactive (0).

To detect an interruption of the connection to the motor, evaluate the open load flags during stand still at a position where both motor coils have a minimum current, or during low velocities only (e.g., for the first or last steps of a movement). The open load flags might also come active due to a torque loss of the motor, especially at high motor velocities, or when working with fullstepping or coarse microstep resolution.

## 4.6 Standby and Shutdown Mode

The  TMC249 offers  two  possibilities  for  reducing  power  consumption  under  special  conditions:  the standby mode and the shutdown mode.

## STANDBY MODE

- -The circuit automatically goes to standby on Vcc undervoltage conditions.
- -Activate standby mode via the interface in SPI-mode and via the ENN pin in non-SPI mode.

Before entering standby mode, the TMC249 switches off all power transistors and holds their gates in  a  disable  condition  using  high  ohmic  resistors.  In  standby  mode  the  oscillator  becomes disabled and the oscillator pin is held at a low state.

## SHUTDOWN MODE

- -The shutdown mode is used for a further reduction of the supply current.
- -The shutdown mode can be entered in SPI-mode by pulling the ENN pin high.
- -In shutdown mode additionally all internal reference voltages become switched off and the SPI circuit is held in reset.

## 4.7 Power Saving

The possibility to control the output current can dramatically save energy, reduce heat generation and increase precision by reducing thermal stress on the motor and attached mechanical components. Just reduce motor current during stand still: A slight reduction of the coil currents to 70% of the current of the last step halves power consumption!

In typical applications a 50% current reduction during stand still is reasonable.

## 4.8 Bus Timing

The SPI interface operates completely asynchronous. It is clocked by SCK and CSN, only.  Figure 4.3 shows the timing parameters of an SPI bus transaction, and the table below specifies their values.

<!-- image -->

## Figure 4.3 SPI Timing

## PROPAGATION TIMES

(3.0 V  VCC  5.5 V,  -40°C  Tj  150°C;  VIH  =  2.8V,  VIL = 0.5V; tr,  tf  =  10ns;  CL  =  50pF, unless otherwise specified)

| SPI Interface Timing                                                | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   |
|---------------------------------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| Parameter                                                           | Symbol                                     | Conditions                                 | Min                                        | Typ                                        | Max                                        | Unit                                       |
| SCK frequency                                                       | f SCK                                      | ENN = 0                                    | DC                                         |                                            | 8                                          | MHz                                        |
| SCK stable before and after CSN change                              | t 1                                        |                                            | 50                                         |                                            |                                            | ns                                         |
| Width of SCK high pulse                                             | t CH                                       |                                            | 100                                        |                                            |                                            | ns                                         |
| Width of SCK low pulse                                              | t CL                                       |                                            | 100                                        |                                            |                                            | ns                                         |
| SDI setup time                                                      | t DU                                       |                                            | 40                                         |                                            |                                            | ns                                         |
| SDI hold time                                                       | t DH                                       |                                            | 50                                         |                                            |                                            | ns                                         |
| SDO delay time                                                      | t D                                        | C L = 50pF                                 |                                            | 40                                         | 100                                        | ns                                         |
| CSN high to SDO high impedance                                      | t ZC                                       | *)                                         | 50                                         |                                            |                                            | ns                                         |
| ENN to SCK setup time                                               | t ES                                       |                                            | 30                                         |                                            |                                            | µs                                         |
| CSN high to LA / HA / LB / HB output polarity change delay          | t PD                                       | **)                                        |                                            | 3                                          | t OSC + 4                                  | µs                                         |
| Load indicator valid after LA / HA / LB / HB output polarity change | t LD                                       |                                            |                                            | 5                                          | 7                                          | µs                                         |

- *) SDO is tri-stated whenever ENN is inactive (high) or CSN is inactive (high).

**) Whenever the PHA / PHB polarity is changed, the chopper is restarted for that phase. The chopper does not switch on, when the SRA resp. SRB comparator threshold is exceeded upon the start of a chopper period.

## 4.9 Using the SPI Interface with One or Multiple Devices

The SPI interface allows either cascading of multiple devices, giving a longer shift register, or working with a separate chip select signal for each device, paralleling all other lines. Even when there is only one device attached to a CPU, the CPU can communicate with it using a 16 bit transmission. In this case, the upper 4 bits are dummy bits. With two devices in a chain, a 24-bit transmission controls both.

## 4.10 SPI Filter

To prevent spikes from changing the SPI settings, SPI data words are only accepted, if their length is at least 12 bit. Shorter datagrams are ignored and will not modify register content.

## 5 Classical Non-SPI Control Mode (Standalone Mode)

The driver can be controlled by analog current control signals and digital phase signals.

## Proceed as follows:

- -Tie pin SPE to GND for enabling non-SPI mode. In non-SPI mode the SPI interface is disabled and the SPI input pins have alternate functions.
- -The internal DACs are forced to 1111.

## 5.1 Pin Functions in Standalone Mode

| Pin      | Standalone mode name   | Function in standalone mode                                                                                                                                          |
|----------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SPE      | (GND)                  | Tie to GND to enable standalone mode                                                                                                                                 |
| ANN      | MDAN                   | Enable mixed decay for bridge A (low = enable)                                                                                                                       |
| SCK      | MDBN                   | Enable mixed decay for bridge B (low = enable)                                                                                                                       |
| SDI      | PHA                    | Polarity bridge A (low = current flow from output OA1 to OA2)                                                                                                        |
| CSN      | PHB                    | Polarity bridge B (low = current flow from output OB1 to OB2)                                                                                                        |
| SDO      | ERR                    | Error output (high = overcurrent on any bridge, or over temperature). In this mode, the pin is never tri-stated.                                                     |
| ENN      | ENN                    | Standby mode (high active), high causes a low power mode of the device. Setting this pin high also resets all error conditions.                                      |
| INA, INB | INA, INB               | Current control for bridge A, resp. bridge B. Refer to AGND. The sense resistor trip voltage is 0.34V when the input voltage is 2.0V. Maximum input voltage is 3.0V. |

## 5.2 Input Signals for Microstep Control in Standalone Mode

Hint

When transferring these waves to SPI operation, note that the mixed decay bits are inverted when compared to standalone mode.

Figure 5.1 Analog control for standalone mode

<!-- image -->

## 6 Current Setting

## 6.1 Sense Resistor for Current Setting

Choose an appropriate sense resistor RS for setting the desired motor current.

## Basic information:

- -The maximum motor current is reached when the coil current setting is programmed to 1111.
- -This results in a current sense trip voltage of 0.34V if the internal reference or a reference voltage of 2V is used. (Refer to chapter 4.3 for more information about current setting in SPI mode.)
- -The current sense resistor of bridge A, B is calculated as:

RSENSE = VTRIP / I max

RSENSE

Current sense resistor of bridge A, B

VTRIP

Programmed trip voltage of the current sense comparators

I max

Desired maximum coil current

| Mode of operation           | Maximum motor current                                                        |
|-----------------------------|------------------------------------------------------------------------------|
| Operation in fullstep mode  | The maximum motor current is specified by the manufacturer.                  |
| Operation in microstep mode | Multiply the value for fullstep mode by 1.41 for the maximum current I max . |

## EXAMPLE FOR TYPICAL APPLICATION

RSENSE = 0.34V / I max

SENSE RESISTOR EXAMPLES AND RESULTING IMAX AT 100% CURRENT SCALING (INA/INB=2V, OR INTERNAL REFERENCE)

| R S    | I max   |
|--------|---------|
| 0.47  | 723mA   |
| 0.33  | 1030mA  |
| 0.22  | 1545mA  |
| 0.15  | 2267mA  |
| 0.10  | 3400mA  |

## 6.2 Resistor RSH for High Side Overcurrent Detection

The TMC249 detects an overcurrent to ground, when the voltage between VS (supply voltage) and VT (threshold voltage) exceeds 150mV. The high side overcurrent detection resistor should be chosen in a way  that  100mV  voltage  drop  are  not  exceeded  between  VS  and  VT,  when  both  coils  draw  the maximum current. In a microstep application, this is the case when sine and cosine wave have their highest sum, i.e. at 45 degrees. This corresponds to 1.41 times the maximum current setting for one coil. In a fullstep application this is adequate to the double coil current.

## IN A MICROSTEP APPLICATION:

RSH = 0.1V / (1.41  I max )

## IN A FULLSTEP APPLICATION:

RSH = 0.1V / (2  I max )

RSH:

High side overcurrent detection resistor

I max

:

Maximum coil current

If higher resistance values should be used, a voltage divider in the range of 10  to 100  can be used for  VT.  This  might  also  be  desired  to  limit  the  peak  short  to  GND  current,  as  described  in  the following chapter.

A careful PCB layout is required for the sense resistor traces and for the RSH traces.

## 6.2.1 Making the Circuit Short Circuit Proof

In most applications, a short circuit does not describe only one special condition. It typically involves inductive, resistive and capacitive components. Worst events are unclamped switching events, because huge voltages can build up in inductive components and result in a high energy spark going into the driver, which can destroy the power transistors.

## Attention

Never disconnect the motor during operation as this can destroy the power transistors!

An absolute protection against random short circuit conditions is not given, but pre-cautions can be taken to improve robustness of the circuit:

In a short condition, the current can become very high before it is interrupted by the short detection, due  to  the  blanking  during  switching  and  internal  delays.  The  high-side  transistors  allow  a  high current flowing for the selected blank time. The lower the (remaining) external inductivity, the faster the current climbs. If inductive components are involved in the short, the same current will shoot through the low-side resistor and cause a high negative voltage spike at the sense resistor. Both, the high current and the voltage spikes are dangerous for the driver.

## PROCEED AS FOLLOWS, IF SHORT CIRCUITS ARE EXPECTED:

1. Protect SRA/SRB inputs using a series resistance.
2. Increase RSH (high side overcurrent detection resistor) to reduce the maximum high-side transistor current. Use the same value as for the sense resistors.
3. Set the blank time as short as possible.

The second point effectively limits the short circuit current, because the upper driver transistor with fixed ON gate voltage of 6V forms a constant current source together with its internal resistance and the high side overcurrent detection resistor RSH.

A positive side effect is that only one type of low resistive resistor is required. The drawback is that power dissipation increases.

Figure 6.1 Schematic with RSH=RSA=RSB

<!-- image -->

## Example:

A 0.33 Ohms sense resistor allows for roughly 1 A motor coil current.

A high side short detection resistor of 0.33  Ohms limits maximum high side transistor current to typically 4A during  a  short  circuit  condition.  The schematic shows the modifications to be done.

The effectiveness of the steps described  above  should  be  tested  in the given application!

## 7 Chopper Operation

The currents through both motor coils are controlled using a chopper. The TMC249 uses a quiet fixed frequency  chopper.  Both  coils  are  chopped  with  a  phase  shift  of  180  degrees.  The  Chopper  cycles through three phases: on, fast decay, and slow decay.

On Phase: current flows in direction of target current

<!-- image -->

Figure 7.1 Chopper phases

Fast decay switches off both upper transistors and uses the body diodes to re-circulate current back to the supply, while enabling the lower transistor opposite to the selected polarity. Slow decay always enables both lower side transistors.

When the polarity  is  changed  on  one  bridge,  the  PWM  cycle  on  that  bridge  becomes  restarted  at once.

## 7.1 Mixed Decay Mode

The mixed decay option is realized as a self-stabilizing system, by shortening the fast decay phase, if the ON phase becomes longer. Mixed decay can be used continuously on, continuously off, or in a mixed fashion during periods of falling absolute current, only.

To reduce motor resonance, enable mixed decay for each coil individually during the second half of each microstepping half-wave, when the current is meant to decrease.

MIXED DECAY IN APPLICATIONS WITH HIGH RESOLUTION OR LOW INDUCTIVITY MOTORS

In  applications  requiring  high  resolution,  or  using  low  inductivity  motors,  the  mixed  decay  mode should be enabled continuously to reduce the minimum motor current which can be achieved. This gives the smoothest current wave.

USING MIXED DECAY CONTINUOUSLY OR WITH HIGH INDUCTIVITY MOTORS AT LOW SUPPLY VOLTAGE

If mixed decay mode is continuously on or high inductivity motors are used at low supply voltage, it is  advised  to  raise  the  chopper  frequency  to  minimum  36 kHz,  because  the  half  chopper  frequency could become audible.

With low velocities or during standstill, mixed decay should be switched off.

Fast Decay Phase: current flows in opposite direction of target current

<!-- image -->

Slow Decay Phase: current re-circulation

<!-- image -->

Figure 7.2 Chopper cycle showing use of mixed decay with falling current

<!-- image -->

## 7.2 Chopper Frequency

The PWM oscillator frequency can be set by an external capacitor. The internal oscillator uses a 28k  resistor to charge / discharge the external capacitor to a trip voltage of 2/3 VCC respectively 1/3 VCC. It can be overdriven using an external CMOS level square wave signal. Do not set the frequency higher than 100 kHz and do not leave the OSC terminal open! The two bridges are chopped with a phase shift of 180 degrees at the positive and at the negative edge of the clock signal.

The PWM oscillator frequency is calculated as:

f OSC :

PWM oscillator frequency

COSC :

Oscillator capacitor in nF

## OSCILLATOR FREQUENCIES

| f OSC typ.   | C OSC   | Recommendation                                                                                         |
|--------------|---------|--------------------------------------------------------------------------------------------------------|
| 16.7kHz      | 1.5nF   | -                                                                                                      |
| 20.8kHz      | 1.2nF   | Low dynamic loss for slow decay operation                                                              |
| 25.0kHz      | 1.0nF   | Good choice for slow decay                                                                             |
| 30.5kHz      | 820pF   | -                                                                                                      |
| 36.8kHz      | 680pF   | Most universal balanced choice with slow and mixed decay regarding chopper noise and power dissipation |
| 44.6kHz      | 560pF   | Most silent choice for mixed decay, half frequency components far outside audible range                |

An unnecessary high frequency leads to high switching losses in the power transistors.

For many applications a chopper frequency slightly above audible range is sufficient. When audible noise  occurs  in  an  application,  especially  with  mixed  decay  continuously  enabled,  the  chopper frequency should be two times the audible range, i.e., min. 36kHz, because the mixed decay operation often generates current jitter components with half chopper frequency.

𝑓 𝑂𝑆𝐶 =

1

40μs × C OSC  [nF]

## 7.3 CPU controlled Low Noise Voltage Mode PWM

This chapter describes an optional chopper method requiring two CPU PWM outputs.

The TMC249 uses a cycle-by-cycle based chopper system, because it brings the best performance over a wide range of velocities. It regulates the current by terminating each chopper cycle as soon as the target  current  has  been  reached.  This  direct  current  regulation  provides  good  dampening  of  motor resonance, low motor power loss and automatic adaptation to the specific motor. On the other hand, chopper stability requires good decoupling between both motor coils and it needs a precise layout of the high current paths. Instabilities caused by magnetic coupling in the motor or by coupling of the coil current regulators due to electric coupling can lead to chopper noise and fine vibrations. Under normal conditions, these will not do any harm. In applications, where the motor moves very slowly or where precise standstill with low mass on the motor axis is required, a voltage PWM chopper is a good choice.

The  low  noise  feed  forward  chopper  principle  uses  a  voltage  PWM  controlled  driving  rather  than current  controlled  driving.  This  is  possible  because  the  stepper  motor  has  a  certain  coil  resistance. This resistance converts an externally applied voltage to current. As long as the motor velocity is low, back  EMF  caused  by  the  motor  rotation  does  not  need  to  be  taken  into  account.  At  increasing velocities, the motors back EMF has an increasing influence and influences coil current. This can be compensated by increasing the driver voltage with increasing velocity. Effects like motor temperature dependency of the coil resistance should be considered, in case the motor operates in an increased temperature range. The described compensation principle can be realized in a completely feed-forward way, based on the motor data, or by measuring the effective current and adding a regulation loop.

The chopper principle described generates a certain motor voltage by toggling each motor phase with a certain PWM frequency. Therefore the motor full bridges either switch on the motor current in one direction or in the opposite direction.

This way, the duty cycle of toggling the coil polarity produces a certain effective voltage on the coils:

- -A 50 percent duty cycle gives a mean current of zero.
- -A higher or lower duty cycle gives a positive or negative current.
- -A high PWM resolution will bring a high microstep resolution.

Figure 7.3 Voltage PWM generates motor current

<!-- image -->

## 7.3.1 Calculating the PWM for Low Noise Chopper

A microcontroller with PWM outputs can be used for generating the two PWMs required to drive the motor. For a 256 microstep resolution a PWM resolution of 9 to 10 bit is required. Assuming a target

chopper frequency of roughly 20 kHz, a base clock frequency of 20 MHz (=2 10  x 20 kHz) is required to yield  a  10  bit  PWM.  A  16 MHz  clock  frequency  will  allow  realizing  a  9  bit  PWM  with  31 kHz,  or  a resolution of 800 PWM steps with 20 kHz. This is a feasible value for most standard 8 bit or better microcontrollers.

Basically, one motor coil is driven with a PWM, which duty cycle is modulated using a sine wave. The other coil  with  a  cosine  modulated  PWM.  Assuming, that the system supply  voltage  would exactly match the motor voltage required for nominal current, the PWM duty cycle will be altered between 100% for maximum positive current and 0% for maximum negative current. As this is not a typical constellation, the PWM modulation required to match the motor needs to be calculated.

The PWM modulation is calculated as:

$$𝑃𝑊𝑀𝐴𝑚𝑝𝑙 = 𝐼𝐶𝑂𝐼𝐿𝑝𝑒𝑎𝑘 𝑅𝐶𝑂𝐼𝐿 (𝑉 𝑀 -𝑉𝐵𝐸𝑀𝐹)$$

PWMAmpl   PWM amplitude required to reach the nominal motor current. Half of this amplitude is

applied in positive direction (additional to 50% duty cycle), and half of it is applied in negative direction (subtracted from 50% duty cycle)

I COILpeak

Nominal peak coil current of the motor, i.e. ICOILRMS * 1.41

RCOIL

Resistance of the motor coil

VM

Motor driver supply voltage (may be measured in the application)

VBEMF

Velocity dependent back EMF voltage of the motor. It is measured in V/rad/s.

At standstill VBEMF is zero and can be ignored for low RPM.

For higher velocities, multiply it by the angular velocity of the motor.

## EXAMPLE

A 1A RMS motor with 6.5Ohm coil resistance is to be operated from a 12V supply at low velocity.

<!-- formula-not-decoded -->

Therefore, the duty cycle needs to be modulated between 0.5 + 0.76/2 = 88% for the positive sine wave peak and 0.5 -0.76/2 = 12% for the negative sine wave peak.

## 7.3.2 Hardware Setup for Low Noise Chopper

The TMC249 provides a standalone mode, which allows direct control of coil polarity using a digital signal. Further, the coil current can be controlled using an analog voltage in the range 0 V… 3 V. As current control is done by PWM duty cycle, the integrated PWM based analog current control of the

IC is not used. Therefore, in principle it would be possible to work without sense resistors.

We recommend using the analog current limit as a safety feature. Further it can be used for allowing a fallback to classical fullstepping at higher velocity (in order to also allow faster movements):

During voltage PWM mode the analog current control can be used to limit the motor current in case of  an  error.  Therefore,  the  current  limit  must  be  set  at  least  20%  to  30%  higher  than  the  desired maximum motor current for  PWM  operation  (peak  current  value  plus  additional  ripple).  The  mixed decay mode must be switched off (MDAN=MDBN=VCC), because it would interfere with voltage PWM operation. Both motor coil limits can be set to the same analog current limiting value: for a safety limit and for a change to fullstepping.

In fullstepping switching to a lower value may be desired in order to match motor RMS current.

The processor controlled  PWM uses  the  polarity  inputs  (PHA,  PHB)  for  both  coils  to  control  motor PWM.

Figure 7.4 Controlling the driver with two PWMs in standalone mode

<!-- image -->

## 7.4 Adapting the Sine Wave for Smooth Motor Operation

An optimization of the sine wave improves microstepping and vibration for both, mixed decay mode and voltage PWM mode. Despite reaching the target current in each chopper cycle, both, the slow decay and the fast decay cycle reduce the current by some amount. Especially the fast decay cycle has a larger impact. Thus, the medium coil current always is a bit lower than the target current. This leads to a flat line in the current shape flowing through the motor. It can be corrected, by applying an offset  to  the  sine  shape.  In  mixed  decay  operation  via  SPI,  an  offset  of  1  does  the  job  for  most motors.

<!-- image -->

Coil current does not have optimum shape

<!-- image -->

Target current corrected for optimum shape of coil current

Figure 7.5 Adapting sine wave for smooth motor operation

Try out the best wave offset for the target motor to yield equidistant microstepping and vibration-free motion.

## 7.5 Blank Time

The  TMC249  uses  a  digital  blanking  pulse  for  the  current  chopper  comparators.  This  prevents  the driver to react to current spikes, which can occur during switching action due to capacitive loading, by terminating the chopper cycle.

The lowest possible blanking time covering all spikes gives the best results for microstepping. A long blank time leads to a long minimum turn-on time, thus giving an increased minimum PWM duty cycle and  with  this  an  increased  lower  limit  for  the  coil  current.  This  negatively  impacts  microstep precision.

## Hint

The blank time should cover both, switch time of driver MOSFETs and inductive ringing in the sense resistors and layout and any current ringing in the coils resulting from capacitive loads, e.g., in motor coil capacity or cable capacity. Choose blank time as low as possible to yield this.

The TMC249 allows adapting the blank time to the load conditions and to the selected slope in four steps:

## BLANK TIME SETTINGS

| BL2   | BL1   | Typical blank time   | Remarks                                                                 |
|-------|-------|----------------------|-------------------------------------------------------------------------|
| GND   | GND   | 0.6 µs               | Very short. May require additional filtering on SRA and SRB.            |
| GND   | VCC   | 0.9 µs               | Works well in good low inductivity layouts.                             |
| VCC   | GND   | 1.2 µs               | Default for most applications.                                          |
| VCC   | VCC   | 1.5 µs               | May be used with slow bridges or high sense resistor trace inductivity. |

## 8 Slope Control

The output-voltage slope of the full bridge is controlled by a constant current gate charge / discharge of  the  MOSFETs.  The  charge  /  discharge  current  for  the  MOSFETs  can  be  controlled  by  an  external resistor: a reference current is generated by internally pulling the SLP-Pin to 1.25V via an integrated 4.7K  series resistor. This current is used to generate the current for switching on and off the power transistors.

The gatedriver output current can be set in a range of 2… 25 mA by an external resistor:

<!-- formula-not-decoded -->

RSLP :

Slope control resistor

I OUT :

Controlled output current of the low-side MOSFET driver

The  SLP-pin  can  directly  be  connected  to  AGND  for  the  fastest  output-voltage  slope  (respectively maximum output current).

## Note

There is  a  tradeoff  between  reduced  electromagnetic  emissions  (slow  slope)  and  efficiency,  due  to dynamic  losses  occurring  within  each  switching  event.  With  slow  slopes,  an  increased  chopper frequency  drastically  increases  power  dissipation,  while  the  effect  is  low  with  fast  slopes  (&lt;100ns). Typical emission optimized slope times range between 50ns and 200ns. For lowest power dissipation, slopes can be reduced to roughly 25ns.

For  applications  where  electromagnetic  emission  is  extremely  critical,  add  LC  (or  capacitor  only) filtering on the motor connections. This dampens the effect of MOSFET body diode reverse recovery ringing,  occurring  within  each  power  MOSFET  stage  following  a  diode  conduction.  For  these applications emission is even lower, if only slow decay operation is used.

Figure 8.1 RSLP versus IDH

<!-- image -->

## 9 Protection Functions

## 9.1 Overcurrent Protection and Diagnostic

## 9.1.1 Low Side Overcurrent

The TMC249 uses the current sense resistors on the low side to detect an overcurrent.  If a voltage above 0.61 V is detected after expiration of the blanking time, the PWM cycle is terminated at once and all transistors of the bridge are switched off for the rest of the PWM cycle. The error counter is increased by one. If the error counter reaches 3, the bridge remains switched off for 63 PWM cycles and the error flag is read as active .

## CLEARING ERROR FLAG AND COUNTER

The user can clear the error condition in advance by clearing the error flag.

The error counter is cleared, whenever there are more than 63 PWM cycles without overcurrent. There is one error counter for each of the low side bridges, and one for the high side.

## Note

To suppress spikes occurring during switching, the overcurrent detection is inactive during the blank pulse time for each bridge.

## 9.1.2 Short to Ground and Overcurrent Detection

The high side comparator detects a short to GND or an overcurrent, whenever the voltage between VS and VT becomes higher than 0.15 V at any time (except for the blank time period which is logically ORed for both bridges). If the voltage between VS and VT becomes higher than 0.15 V all transistors become switched off for the rest of the PWM cycle, because the bridge with the failure is unknown.

Determine which bridge causes the high-side overcurrent, by selectively switching on only one of the bridges with each polarity (therefore the other bridge should remain programmed to 0000).

## CLEARING ERROR FLAGS

The overcurrent flags can be cleared by disabling and re-enabling the chip either via the ENN pin or by sending a telegram with both current control words set to 0000.

## 9.2 Over Temperature Protection and Diagnostic

The circuit switches off all output power transistors during an over temperature condition. The over temperature flag should be monitored to detect this condition.  The circuit  resumes  operation after cool down below the temperature threshold. However, operation near the over temperature threshold should be avoided, if a high lifetime is desired.

## Attention

The overtemperature protection cannot fully protect the circuit in case of thermally insufficient design or  a  defect  of  a  motor  coil.  It  mainly  is  intended  to  detect  and  protect  against  heat  accumulation occurring  due to high environment temperature. A more sensitive protection can be realized when checking the pre-warning flag and reacting to it by reducing motor current.

## 9.3 Overvoltage Protection and ENN Pin Behavior

Many suitable power MOSFETs are 30 V types. The TMC249 allows protecting the MOSFETs up to 40 V supply  voltage  while  they  are  switched  off.  During  disable  conditions  the  circuit  switches  off  all output  power  transistors  and  goes  into  a  low  current  shutdown  mode.  All  register  contents  are cleared to 0, and all status flags are cleared.

The circuit in this condition can stand a higher voltage. The voltage is not limited by the maximum power MOSFET voltage anymore.

The enable pin ENN provides a fixed threshold of ½ VCC to allow a simple overvoltage protection up to 40V using an external voltage divider (see schematic).

Figure 9.1 Overvoltage protection

<!-- image -->

## 10 Moving the Motor

To move the motor, send a sequence of current patterns to the driver via its SPI interface (graphical example: see 5.2). Each pattern moves the motor by one microstep. The following example shows a simple  software  example.  An  option  is  to  use  an  integrated  motion  controller  like  the  TMC429  or TMC4361A to automatically generate the microstep patterns and the motion ramps.

## SINE WAVE TABLE

- -The sine wave table below implements 4-bit microstepping.
- -The absolute values are left-shifted by one bit.
- -Bit 0 is the sign bit (phase direction bit).
- -Bit 5 is the mixed decay bit. It is set when the absolute value is falling.
- -Optionally set mixed decay constant off (0), or constant on (1) using an AND or OR instruction

## FUNCTION

The function in the example below generates the microsteps. The values are read from the sine wave table and output to the TMC249 (via SPI interface). Call this function with the ccw parameter set to 1 (to step in negative direction) or with ccw set to 0 (to step in positive direction). The function can be called in a timer interrupt, to generate equidistant time intervals.

## SENDING VALUES VIA SPI

Set the CS line low and send out the value of io by SPI (MSB first). Thereafter, set the CS line high again. Send out each microstep unless the interface is still busy. In case the interface is still busy, the transmission  can  be  skipped.  This  way,  the  update  rate  adapts  to  the  available  SPI  bandwidth  at higher velocity. It does not significantly affect the motor performance with &gt;1Mbit bandwidth.

## EXAMPLE FOR GENERATING MICROSTEPS

```
unsigned char sinus_tab [ 64 ]= { 0x00 , 0x02 , 0x06 , 0x08 , 0x0c , 0x0e , 0x10 , 0x14 , 0x16 , 0x18 , 0x18 , 0x1a , 0x1c , 0x1c , 0x1e , 0x1e , 0x3e , 0x3e , 0x3e , 0x3c , 0x3c , 0x3a , 0x38 , 0x38 , 0x36 , 0x34 , 0x30 , 0x2e , 0x2c , 0x28 , 0x26 , 0x22 , 0x01 , 0x03 , 0x07 , 0x09 , 0x0d , 0x0f , 0x11 , 0x15 , 0x17 , 0x19 , 0x19 , 0x1b , 0x1d , 0x1d , 0x1f , 0x1f , 0x3f , 0x3f , 0x3f , 0x3d , 0x3d , 0x3b , 0x39 , 0x39 , 0x37 , 0x35 , 0x31 , 0x2f , 0x2d , 0x29 , 0x27 , 0x23 }; volatile unsgined char PhaseCount = 0 ; // Call this procedure for each step and send out the resulting IO word to // the TMC24x/TMC23x SPI interface void step ( char ccw ) { unsigned integer MixedDecayXOR = 0 , io ; if(! ccw ) { PhaseCount ++; } else { //Reverse the "Mixed Decay" bits when running in CCW direction PhaseCount --; MixedDecayXOR = 0x820 ; } io = (( sinus_tab [ PhaseCount & 63 ]<< 6 | sinus_tab [( PhaseCount + 16 ) & 63 ]) ^ MixedDecayXOR ); }
```

## 11 MOSFET Examples

Selection  of  power  transistors  for  the  TMC249  depends  on  required  current,  voltage  and  thermal conditions. Driving large transistors directly with the TMC249 is limited by the gate capacity of these transistors. If the total gate charge is too high, slope time increases and leads to a higher switching power dissipation. A total gate charge of maximum 25nC per transistor pair (N gate charge + P gate charge) is recommended (at 25nC, tie pin SLP to GND to get an acceptable slope). The table below shows a choice of transistors which can be driven directly by the TMC249. The maximum application current mainly is a function of cooling and environment temperature. RDSon is read at the nominal drive voltage of 6V and 25°C, the gate charge is the 4.5V value available in most datasheets.

All these transistor types are mainly cooled via their drain connections. To provide sufficient cooling, the transistors should be directly connected to massive traces on the PCB which are widened near the transistor package, providing a copper area of some square cm. The heat then is dissipated vertically through the PCB to a massive power or ground plane, which shall cover most of the PCB area to use the whole PCB for cooling. As an example, the minimum PCB size required to reach the given current for the AON7611, is about 42mm * 42mm, yielding in a heat up of the transistor packages of about 85°C above ambient temperature. With a 100mm * 100mm PCB, this reduced to 70°C above ambient temperature, so that safe operation is possible up to 60°C ambient temperature at maximum current (transistor package at 130°C).

| Transistor Type     | Manu- facturer   | Voltage V DS   | Max. RMS Current (*)   | Package   | R DSon N (5V)   | R DSon P (6V)   | Q G N (note)   | Q G P (note)   |
|---------------------|------------------|----------------|------------------------|-----------|-----------------|-----------------|----------------|----------------|
| Unit                |                  | V              | A                      |           | mΩ              | mΩ              | nC             | nC             |
| AOD4186 AOD4185     | A&O              | 40             | 7                      | DPAK      | 15              | 15              | 9              | 19 (1)         |
| FDD8647L FDD4243    | Fairchild        | 40             | 6                      | DPAK      | 13              | 45              | 12             | 18             |
| FDD8424H            | Fairchild        | 40             | 4                      | DPAK-4L   | 25              | 45              | 9              | 14             |
| AOD609              | A&O              | 40             | 4                      | TO252-4L  | 31              | 45              | 5              | 9 (1)          |
| SI4599DY            | Vishay           | 40             | 2.5                    | SO8       | 36              | 45              | 5              | 12 (1)         |
| BSZ050N03 BSZ180P03 | Infineon         | 30             | 6                      | S3O8      | 6               | 18              | 13             | 15             |
| AP4509AGH           | APEC             | 30             | 7                      | TO252-4L  | 16              | 32              | 15 (2)         | 17 (1)         |
| AO4616              | A&O              | 30             | 2.8                    | SO8       | 24              | 25              | 9              | 16             |
| AONR26309A          | A&O              | 30             | 3.5                    | DFN3x3    | 26              | 35              | 6 (2)          | 11 (1)         |
| FDS8958B            | Fairchild        | 30             | 2.8                    | SO8       | 29              | 50              | 4              | 7 (1)          |
| AON7611             | A&O              | 30             | 2.8                    | DFN3x3    | 53              | 40              | 2              | 5 (1)          |
| SI4532CDY           | Vishay           | 30             | 2.3                    | SO8       | 50              | 80              | 3              | 4 (1)          |
| AP2530AGY           | APEC             | 30             | 1 (1.5)                | SOT26     | 135             | 200             | 2.5            | 2.8            |

*  The  maximum  motor  current  applicable  in  a  design  depends  upon  PCB  size  and  layout, because  all  of  these  transistors  are  mainly  cooled  through  the  PCB.  The  data  given  implies adequate cooling measures in the design, especially for higher current designs. The maximum RMS  current  rating  takes  into  account  package  power  dissipation,  on  resistances,  and  gate charges.  For  duty  cycle  limited  operation,  1.5  times  or  more  current  is  possible  (value  in brackets).

## Notes:

- (1) These P-channel transistors have  a high  drain to  gate  charge, which  may introduce destructive current impulses into the HA/HB outputs by forcing them above the power supply level, especially when the miller capacitance (QGD)  of  the low side  MOSFET  is lower and thus it switches more quickly. As a thumb rule, the criteria is QGDHS / QGSHS * QGDHS / QGDLS &gt; 2 (assuming slopes &gt;100ns). To ensure reliability, connect a 500mA or 1A Schottky diode to both HA and HB outputs against VS to protect them. Types like MSS1P3, ZHCS1000, SS14 or BAR43 can be used.
- (2) These N-channel transistors have a high drain to gate charge, which may introduce destructive current impulses into the LA/LB outputs by forcing them below the ground level, especially when the miller capacitance (QGD) of the high side MOSFET is lower and thus it switches more quickly. As a thumb rule, the criteria is QGDLS / QGSLS * QGDLS / QGDHS &gt; 2 (assuming slopes &gt;100ns).

To ensure reliability, connect a 500mA or 1A Schottky diode to both LA and LB outputs against GND to protect them against negative spikes. Types like MSS1P3, ZHCS1000, SS14 or BAR43 can be used.

## 12 Using Additional Power Drivers

For higher voltage and higher output current it is possible to add external MOSFET gate drivers. Both, dedicated transistor drivers are suitable, as well as a circuit based on standard HCMOS drivers. It is important  to  understand the function of dedicated  gate drivers for N-channel transistors:  Since the chopping also can be stopped in open load conditions, the gate drive circuit for the upper transistors should allow for continuous ON conditions. In the schematic below this is satisfied by attaching a weak additional charge pump oscillator and pumping the VS up to the high voltage supply. Do not enable the TMC249, before the gate driver capacitors are charged to an appropriate voltage. A current sensing comparator in the VM line pulling down the VT pin by some 100mV on overcurrent can be added, if required. Since the TMC249 in this application cannot sense switch-off of the transistor gates to  ensure  break-before-make  operation,  the  break  before-make-delays  have  to  be  set  by  capacitive loading of its transistor drive outputs. The capacitors CdHS and CdLS are charged / discharged with the nominal gate current.  The opposite output  is not enabled, before the switching-off output has been discharged to 0.5V. To calculate the timing, refer to the required logic levels of the attached power  driver.  For  CdHS  and  CdLS  470pF  give  about  100ns.  The  circuit  does  not  show  decoupling capacitors and further details.

<!-- image -->

## 13 Layout Considerations

For optimal operation of the circuit a careful board layout is important, because of the combination of high current chopper operation coupled with high accuracy threshold comparators.

## 13.1 Grounding

Please pay special attention to massive grounding. A single massive ground plane provides the best solution. The schematic highlights the high current paths which shall be routed separately, in case a GND plane cannot be realiz ed, so that the chopper current does not flow through the system's GND interconnections.  Tie  the  pins  AGND  and  GND  to  the  GND  plane,  and  directly  connect  both  sense resistors'  GND  side  to  GND  plane .  The  schematic  highlights  the  high  current  path  and  shows  the required symmetry. Optional short protection / motor cable break protection elements are shown.

Figure 13.1 Sense resistor grounding and protection components

<!-- image -->

## 13.2 Selection of Additional Components

Add  supply  filtering  capacitors  located  near  to  the  boards  power  supply  input  and  small  ceramic capacitors near to the power supply connections of the TMC249. Use low inductance sense resistors or add a ceramic capacitor in parallel to each resistor to avoid high voltage spikes.

In case of long motor cables, it may be beneficial to introduce additional RC-filtering into the SRA / SRB line (see Figure 13.2) to prevent spikes from triggering the short circuit protection or the chopper comparator. Alternatively, a 470nF ceramic capacitor can be placed across the sense resistors.

If  you  want  to  take  advantage  of  the  thermal  protection  and  diagnostics,  ensure,  that  the  power transistors  are  very  close  to  the  package  and  that  there  is  a  good  thermal  contact  between  the TMC249 and the external transistors.

## Attention

Long or thin traces to the sense resistors may add substantial resistance and thus reduce the output current. Further, resulting inductivity will lead to poor chopper behavior.

This is valid  for the high  side shunt resistor, too.  Place the  optional shunt resistor  voltage divider near the TMC249. This avoids voltage drop in the VCC plane and adds up to the measured voltage.

Figure 13.2 Grounding TMC249

<!-- image -->

## 13.3 Pull-up Resistors on Unused Inputs

The digital inputs all have integrated pull-up resistors, except for the ENN input, which is in fact an analog input. Thus, there are no external pull-up resistors required for unused digital inputs which are meant to be positive.

## 13.4 Power Supply Sequencing Considerations

Upon power up, the driver initializes and switches off all bridge power transistors. The minimum Vcc supply voltage for this is 1.0 V and the Vs supply voltage has to be at least 5.0 V.

## Attention

When Vs goes up with Vcc at 0 V, a medium current temporary cross conduction of the power stage can  result  at  supply  voltages  between  2.4 V  and  4.8 V.  In  this  voltage  range,  the  upper  transistors conduct, while the gates of the lower transistors are still floating. Depending on the MOSFET gate to drain  capacity,  the  lower  MOSFETs  might  start  conducting,  which  in  turn  leads  to  a  bridge  crossconduction with its peak at Vs=4.8V. Due to the low gate voltages, current is limited as determined by the MOSFETs properties.

While  this  typically  does  no  harm  to  the  driver,  it  may  hinder  the  power  supply  from  coming  up properly, depending on the power supply start up behavior.

## THERE ARE TWO POSSIBILITIES TO PREVENT CROSS CONDUCTION UPON POWER-UP

- -Add resistors from the LA and LB outputs to GND in the range of 1M  keeping the low side N-channel MOSFETs gates at GND during power-up.
- -Use a Vcc supply, that comes up in parallel to Vs. A local voltage regulator with low start-up voltage will satisfy this, generating the 5 V or 3.3 V Vcc voltage from Vs.

## Attention

Some switching  regulators  do  not  start  before  the  input  voltage  has  reached  5V.  Use  a  low-drop regulator  starting  up  Therefore,  it  is  recommended  to  use  a  standard  linear  regulator  like  7805  or LM317 series or a low drop regulator or a switching regulator like the LM2595, starting at relatively low input voltages.

## 13.5 Schematic and Layout Examples

## Schematic

<!-- image -->

## 1- Top Layer (assembly side)

<!-- image -->

## 3- Inner Layer (supply VS)

Figure 13.3 Layout example

<!-- image -->

## 2- Inner Layer (GND)

<!-- image -->

## 4- Bottom Layer

<!-- image -->

The layout example is shown to demonstrate  the  principle  of  a compact  layout.  The  schematic uses a MOSFET similar AON7611 and  an  earlier  QFN  version  of the  TMC249.  The  short  to  GND detection uses a voltage divider to  allow  simple  adaptation  of the triggering current. RC filtering is included for SRA and SRB for best performance.

## Assembly

<!-- image -->

Figure 13.4: Schematic example with FDD8424H MOSFET and TMC429 plus chopper synchronization

<!-- image -->

This more elaborate circuit shows integration together with a TMC429 or TMC4210 motion controller (TMC428-I is a previous version of the TMC429). Optional scaling of the motor current is provided via an RC-Filter and enabled by pin ANN. The additional shift-register synchronizes the chopper clock of the TMC239 or TMC249 to the toggling of a phase polarity bit to allow highest RPM by avoiding a beat between the chopper clock and the step sequence.

## 14 Application Notes

## 14.1 Extending the Microstep Resolution

For some applications it might be desired to have a higher microstep resolution, while keeping the advantages of control via the serial interface. The following schematic shows a solution, which adds two LSBs by selectively pulling up the SRA / SRB pin by a small voltage difference. Please remark, that the  lower  two  bits  are  inverted  in  the  depicted  circuit.  A  full-scale  sense  voltage  of  340mV  is assumed. The circuit still takes advantage of completely switching off of the coils when the internal DAC bits are s et to '0000'. This results in the following comparator trip voltages:

| Current setting (MSB first)   | Trip voltage   |
|-------------------------------|----------------|
| 0000xx                        | 0 V            |
| 000111                        | 5.8 mV         |
| 000110                        | 11.5 mV        |
| 000101                        | 17.3 mV        |
| 000100                        | 23 mV          |
| ...                           |                |
| 111101                        | 334.2 mV       |
| 111100                        | 340 mV         |

| SPI bit   | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   |
|-----------|------|------|------|------|------|------|-----|-----|
| DAC bit   | /B1  | /B0  | /A1  | /A0  | MDA  | A5   | A4  | A3  |
| SPI bit   | 7    | 6    | 5    | 4    | 3    | 2    | 1   | 0   |
| DAC bit   | A2   | PHA  | MDB  | B5   | B4   | B3   | B2  | PHB |

<!-- image -->

## 14.2 Synchronizing the Chopper Clock

Figure 14.1 Synchronizing the chopper clock

<!-- image -->

This circuit shows an additional shift-register that synchronizes the chopper clock of the TMC249 to the  toggling  of  a  phase  polarity  bit  (bit  6)  to  allow  highest  RPM  by  avoiding  a  beat  between  the chopper clock and the step sequence. Use this circuit in single motor drives, where no datagrams are skipped to increase the possible motor velocity. It is beneficial for velocities above a few RPM.

## 15 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                                                | Symbol   | Min     | Max        | Unit   |
|----------------------------------------------------------|----------|---------|------------|--------|
| Supply voltage                                           | V S      | -0.5    | 36         | V      |
| Supply max. 20000s                                       | V SM     |         | 40         | V      |
| Logic supply voltage                                     | V CC     | -0.5    | 6.0        | V      |
| Gate driver peak current (1)                             | I OP     |         | 50         | mA     |
| Gate driver continuous current                           | I OC     |         | 5          | mA     |
| Logic input voltage                                      | V I      | -0.3    | V CC +0.3V | V      |
| Analog input voltage                                     | V IA     | -0.3    | V CC +0.3V | V      |
| Maximum current to / from digital pins and analog inputs | I IO     |         | +/-10      | mA     |
| Short-to-ground detector input voltage                   | V VT     | V S -1V | V S +0.3V  | V      |
| Junction temperature                                     | T J      | -40     | 150* 1     | °C     |
| Storage temperature                                      | T STG    | -55     | 150        | °C     |

## 16 Electrical Characteristics

## 16.1 Operational Range

| Parameter                                                                                             | Symbol   | Min   |   Max | Unit   |
|-------------------------------------------------------------------------------------------------------|----------|-------|-------|--------|
| Ambient temperature industrial* 1                                                                     | T AI     | -25   | 125   | °C     |
| Ambient temperature automotive                                                                        | T AA     | -40   | 125   | °C     |
| Junction temperature                                                                                  | T J      | -40   | 140   | °C     |
| Bridge supply voltage (taking into account an increase of up to 2V due to energy fed back from motor) | V S      | 7     |  34   | V      |
| Logic supply voltage                                                                                  | V CC     | 3.0   |   5.5 | V      |
| Chopper clock frequency                                                                               | f CLK    |       | 100   | kHz    |
| Slope control resistor                                                                                | R SLP    | 0     | 470   | K     |

## 16.2 DC Specifications

DC characteristics  contain  the  spread  of  values  guaranteed  within  the  specified  supply  voltage  and temperature range unless otherwise specified. Typical values represent the average value of all parts.

Logic supply voltage:

VCC = 3.0 V… 5.5 V,

Bridge supply voltage:  VS = 7

V… 34 V

Junction temperature:

TJ = -40 °C … 140 °C,

(unless otherwise specified)

| Parameter                                                           | Symbol   | Conditions                                         | Min   |   Typ | Max   | Unit   |
|---------------------------------------------------------------------|----------|----------------------------------------------------|-------|-------|-------|--------|
| Gate drive current low side switch ON                               | I LDON   | V LD < 4V                                          | 10    |  15   | 25    | mA     |
| Gate drive current low side switch OFF                              | I LDOFF5 | V LD > 3V V CC = 5V                                | -15   | -25   | -35   | mA     |
| Gate drive current low side switch OFF                              | I LDOFF3 | V LD > 3V VCC = 3.3V                               | -10   | -15   | -20   | mA     |
| Gate drive current low side switch ON                               | I LDON   | V S > 8V, R SLP = 0K V LD < 4V                     | 15    |  25   | 40    | mA     |
| Gate drive current low side switch OFF                              | I LDOFF  | V S > 8V, R SLP = 0K V LD > 4V                     | -15   | -25   | -40   | mA     |
| Gate drive current high side switch ON                              | I HDON   | V S > 8V, R SLP = 0K V S - V HD < 4V               | -15   | -25   | -40   | mA     |
| Gate drive current high side switch OFF                             | I HDOFF  | V S > 8V, R SLP = 0K V S - V HD > 4V               | 15    |  30   | 40    | mA     |
| Deviation of Current Setting with Respect to Characterization Curve |  I SET  | Deviation from standard value, 10k  <R SLP <75k  | 70    | 100   | 130   | %      |
| Gate drive voltage high side ON                                     | V GH1    | V S > 8V relative to V S                           | -5.1  |  -6   | -8.0  | V      |
| Gate drive voltage low side ON                                      | V GL1    | V S > 8V                                           | 5.1   |   6   | 8.0   | V      |
| Gate drive voltage high side OFF                                    | V GH0    | relative to V S                                    |       |   0   | -0.5  | V      |
| Gate drive voltage low side OFF                                     | V GL0    |                                                    |       |   0   | 0.5   | V      |
| Gate driver clamping voltage                                        | V GCL    | -I H / I L = 20mA                                  | 12    |  16   | 20    | V      |
| Gate driver inverse clamping voltage                                | V GCLI   | -I H / I L = -20mA                                 |       |  -0.8 |       | V      |

| Parameter                                                     | Symbol    | Conditions                       | Min       | Typ        | Max         | Unit     |
|---------------------------------------------------------------|-----------|----------------------------------|-----------|------------|-------------|----------|
| VCC undervoltage                                              | V CCUV    |                                  | 2.5       | 2.7        | 2.9         | V        |
| VCC voltage o.k.                                              | V CCOK    |                                  | 2.7       | 2.9        | 3.0         | V        |
| VCC supply current                                            | I CC      | f osc = 25 kHz                   |           | 0.85       | 1.35        | mA       |
| VCC supply current standby                                    | I CCSTB   |                                  |           | 0.45       | 0.75        | mA       |
| VCC supply current shutdown                                   | I CCSD    | ENN = 1                          |           | 37         | 70          | µA       |
| VS undervoltage                                               | V SUV     |                                  | 5.5       | 5.9        | 6.2         | V        |
| VS voltage o.k.                                               | V CCOK    |                                  | 6.1       | 6.4        | 6.7         | V        |
| VS supply current with maximum current setting (static state) | I SSM     | V S = 14V, R SLP = 0K            |           | 6          |             | mA       |
| VS supply current shutdown or standby                         | I SSD     | V S = 14V                        |           | 28         | 50          | µA       |
| High input voltage (SDI, SCK, CSN, BL1, BL2, SPE, ANN)        | V IH      |                                  | 2.2       |            | VCC + 0.3 V | V        |
| Low input voltage (SDI, SCK, CSN, BL1, BL2, SPE, ANN)         | V IL      |                                  | -0.3      |            | 0.7         | V        |
| Input voltage hysteresis (SDI, SCK, CSN, BL1, BL2, SPE, ANN)  | V IHYS    |                                  | 100       | 300        | 500         | mV       |
| High output voltage (output SDO)                              | V OH      | -I OH = 1mA                      | VCC - 0.6 | VCC - 0.2  | VCC         | V        |
| Low output voltage (output SDO)                               | V OL      | I OL = 1mA                       | 0         | 0.1        | 0.4         | V        |
| Low input current (SDI, SCK, CSN, BL1, BL2, SPE, ANN)         | -I ISL    | V I = 0 V CC = 3.3V V CC = 5.0V  | 2         | 10 25      | 70          | µA µA µA |
| High input voltage threshold (input ENN)                      | V ENNH    |                                  |           | 1/2 VCC    |             |          |
| Input voltage hysteresis (input ENN)                          | V EHYS    |                                  |           | 0.1 V ENNH |             |          |
| High input voltage threshold (input OSC)                      | V OSCH    |                                  | tbd       | 2/3 VCC    | tbd         | V        |
| Low input voltage threshold (input OSC)                       | V OSCL    |                                  | tbd       | 1/3 VCC    | tbd         | V        |
| VT threshold voltage (referenced to VS)                       | V VTD     |                                  | -130      | -155       | -180        | mV       |
| SRA / SRB voltage at DAC = 1111                               | V TRIP    | internal ref. or 2V at INA / INB | 315       | 350        | 385         | mV       |
| SRA / SRB overcurrent detection threshold                     | V SRS     |                                  | 570       | 615        | 660         | mV       |
| SRA / SRB comparator offset voltage (Standard device)         | V SROFFS1 |                                  | -10       | 0          | 10          | mV       |
| SRA / SRB comparator offset voltage (Selected device)         | V SROFFS2 |                                  | -6        | 0          | 6           | mV       |
| INA / INB input resistance                                    | R INAB    | Vin  3 V                        | 175       | 264        | 360         | k       |

## 16.3 AC Specifications

AC characteristics  contain  the  spread  of  values  guaranteed  within  the  specified  supply  voltage  and temperature range unless otherwise specified. Typical characteristics represent the average value of all parts.

Logic supply voltage:

VCC = 3.3 V,

Ambient temperature:

TA = 27 °C,

Bridge supply voltage: VS = 14.0 V, External MOSFET gate charge = 3.2 nC

| Parameter                                      | Symbol   | Conditions       | Min   |   Typ | Max   | Unit   |
|------------------------------------------------|----------|------------------|-------|-------|-------|--------|
| Oscillator frequency using internal oscillator | f OSC    | C OSC = 1nF  1% | 20    |  25   | 31    | kHz    |
| Effective Blank time                           | T BL     | BL1, BL2 = V CC  | 1.35  |   1.5 | 1.65  | µs     |
| Minimum PWM on-time                            | T ONMIN  | BL1, BL2 = GND   |       |   0.7 |       | µs     |

## 16.4 Thermal Protection

| Parameter              | Symbol   | Conditions   | Min   |   Typ | Max   | Unit   |
|------------------------|----------|--------------|-------|-------|-------|--------|
| Thermal shutdown       | T JOT    |              | 145   |   155 | 165   | °C     |
| T JOT hysteresis       | T JOTHYS |              |       |    15 |       | °C     |
| Prewarning temperature | T JWT    |              | 135   |   145 | 155   | °C     |
| T JWT hysteresis       | T JWTHYS |              |       |    15 |       | °C     |

## 17 Package Mechanical Data

## 17.1 SO28 Dimensions

| REF   |   MIN |   MAX |
|-------|-------|-------|
| A     | 10    | 10.65 |
| B     | 17.7  | 18.1  |
| C     |  7.4  |  7.6  |
| D     |  1.4  |  1.4  |
| E     |  2.65 |  2.65 |
| F     |  0.25 |  0.25 |
| G     |  0.1  |  0.3  |
| H     |  0.36 |  0.49 |
| I     |  0.4  |  1.1  |
| K     |  1.27 |  1.27 |

All dimensions are in mm.

## 17.2 QFN32 Dimensions

| REF   | MIN   | NOM   | MAX   |
|-------|-------|-------|-------|
| A     | 0.80  | 0.90  | 1.00  |
| A1    | 0.00  | 0.02  | 0.05  |
| A3    |       | 0.20  |       |
| L1    | 0.03  |       | 0.15  |
| D     |       | 7.0   |       |
| E     |       | 7.0   |       |
| D2    | 5.00  | 5.15  | 5.25  |
| E2    | 5.00  | 5.15  | 5.25  |
| L     | 0.45  | 0.55  | 0.65  |
| b     | 0.25  | 0.30  | 0.35  |
| e     |       | 0.65  |       |

17.3

Attention: Drawings not to scale. All dimensions are in mm.

Figure 17.1 Dimensional drawing

## 17.4 Package Code

| Device     | Package      | Temperature range   | Code/ Marking   |
|------------|--------------|---------------------|-----------------|
| TMC249A-LA | QFN32 (RoHS) | - 50… +125 °C       | TMC249A-LA      |
| TMC249A-SA | SO28 (RoHS)  | - 50… +125°C        | TMC249A-SA      |

<!-- image -->

<!-- image -->

## 18 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this data sheet is believed to be accurate and reliable. However no responsibility is  assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 19 ESD Sensitive Device

The TMC249 is an ESD-sensitive CMOS device and sensitive to electrostatic discharge. Take special care to  use  adequate  grounding  of  personnel  and  machines  in  manual  handling.  After  soldering  the devices to the board, ESD requirements are more relaxed. Failure to do so can result in defects or decreased reliability.

<!-- image -->

Note: In a modern SMD manufacturing process, ESD voltages well below 100V are standard. A major source  for  ESD  is  hot-plugging  the  motor  during  operation.  As  the  power  MOSFETs  are  discrete devices, the device in fact is very rugged concerning any ESD event on the motor outputs. All other connections are typically protected due to external circuitry on the PCB.

## 20 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer  experience  and  long-term  satisfaction  by  smooth  and  silent  run,  while  minimizing  the demand for external resources, e.g., for power supply, cooling infrastructure, reduced motor size and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 21 Table of Figures

| Figure 1.1 TMC249 block diagram ....................................................................................................................................4              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 2.1 TMC249 pin assignments................................................................................................................................6                 |
| Figure 3.1 StallGuard signal sensitivity curves.............................................................................................................8                      |
| Figure 3.2 Implementing StallGuard ...............................................................................................................................9                |
| Figure 4.1 Relation between V IN and trip voltage of current sense comparator.............................................12                                                       |
| Figure 4.2 External DAC and PWM-DAC........................................................................................................................12                      |
| Figure 4.3 SPI Timing ........................................................................................................................................................14   |
| Figure 5.1 Analog control for standalone mode.......................................................................................................15                             |
| Figure 6.1 Schematic with R SH =R SA =R SB ...........................................................................................................................17           |
| Figure 7.1 Chopper phases ..............................................................................................................................................18         |
| Figure 7.2 Chopper cycle showing use of mixed decay with falling current ...................................................19                                                     |
| Figure 7.3 Voltage PWM generates motor current ...................................................................................................20                               |
| Figure 7.4 Controlling the driver with two PWMs in standalone mode............................................................22                                                   |
| Figure 7.5 Adapting sine wave for smooth motor operation...............................................................................22                                          |
| Figure 8.1 R SLP versus I DH ...................................................................................................................................................24 |
| Figure 9.1 Overvoltage protection .................................................................................................................................26              |
| Figure 13.1 Sense resistor grounding and protection components....................................................................30                                               |
| Figure 13.2 Grounding TMC249.......................................................................................................................................31              |
| Figure 13.3 Layout example.............................................................................................................................................33          |
| Figure 13.4: Schematic example with FDD8424H MOSFET and TMC429 plus chopper synchronization....34                                                                                  |
| Figure 14.1 Synchronizing the chopper clock.............................................................................................................36                         |
| Figure 17.1 Dimensional drawing..................................................................................................................................41                |

## 22 Revision History

|   Version | Date        | Author BD = Bernhard Dwersteg SD - Sonja Dwersteg   | Description                                                                                                                                |
|-----------|-------------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
|      0.9  |             | BD                                                  | Datasheet based on TMC249 datasheet V2.1, removed higher voltage and 64 microstep application notes, increased SPI frequency limit to 8MHz |
|      1    | 2012-JUN-22 | SD                                                  | - New design. - Further information about stallGuard and low noise chopper. - Layout example added.                                        |
|      1.01 | 2013-MAR-26 | BD                                                  | MOSFET list updated, updated criteria for necessity of gate driver output protection diodes                                                |
|      2.2  | 2019-AUG-21 | BD                                                  | Re-Targeted Datasheet to TMC249                                                                                                            |
|      2.21 | 2020-JUN-03 | BD                                                  | Updated Logo                                                                                                                               |
|      2.22 | 2022-JUN-09 | BD                                                  | Updated Logo Updated MOSFET list New schematic example                                                                                     |

## 23 References

Please refer to our web page http://www.trinamic.com. For trouble shooting please see Application Note 042 - FAQs TMC236, TMC246, TMC239, TMC249