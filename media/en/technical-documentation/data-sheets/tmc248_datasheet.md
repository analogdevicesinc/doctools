<!-- lastmod 2023-08-03 -->
## TMC248 DATASHEET

Low-cost stepper driver for two-phase bipolar motors with low noise PWM chopper and stallGuard™. External MOSFETs fit different motor sizes. With SPI, classic analog interface, protection &amp; diagnostics.

<!-- image -->

## stallGuard TM

## FEATURES AND BENEFITS

High Current up to 7 A motor current using 4 external dualMOS transistors.

Voltage Range 7 V… 36 V DC

3.3 V or 5 V DC for digital part

SPI &amp; External Analogue / Digital Signals

Microstep Resolution up to 64 microsteps per full step

Low Power Dissipation via low RDS-ON power stage

Protection : overvoltage, overtemperature &amp; short circuit

Diagnostics : overcurrent, open load, overtemperature, temperature prewarning, and undervoltage

stallGuard™ sensorless stall detection and load measurement

Mixed Decay for smooth motor operation

Slope Control for reduced electromagnetic emissions

Current Control for cool motor and driver

Standby and Shutdown Mode

Smallest Size 5x5mm QFN28 package

## BLOCK DIAGRAM

<!-- image -->

## APPLICATIONS

Textile, Sewing Machines Office Automation Printer and Scanner Heliostat Controller ATM, Cash recycler POS CCTV, Security Antenna Positioning Pumps and Valves Lab Automation Liquid Handling Medical

## DESCRIPTION

The  TMC248  driver  for  two-phase  stepper motors  offers  a  competitive  feature  set, including 64x micro-stepping, sensorless mechanical  load  measurement  with  stall detection, and smart current control. Standard SPI™  and communication via external analog / digital signals are available. The TMC248 drives eight external Low-RDS-ON  high  efficiency  MOSFETs  for motor  currents  up  to  7A  and  up  to  36V. Integrated protection and diagnostic features support robust and reliable operation. High integration and small form factor  enable  miniaturized  designs  with low  external  component  count  for  costeffective and highly competitive solutions .

<!-- image -->

## APPLICATION EXAMPLES:  HIGH POWER - SMALL SIZE

The  TMC248  scores  with  its  high  power  density  and  a  versatility  that  covers  a  wide  spectrum  of applications and motor sizes, all while keeping costs down.

## APPLICATION EXAMPLES

## COMPACT DESIGN FOR UP TO 3 MOTORS USING SPI INTERFACE

OFFLOAD THE MOTION CONTROL FUNCTION TO TRINAMICS TMC429. GET A COMPETITIVE DESIGN FOR MULTIPLE MOTORS! By offloading the motion-control function to the TMC429, up to three motors can be operated reliably with very little demand for service from the microcontroller.

<!-- image -->

## MINIATURIZED DESIGN WITH SIMPLE DIGITAL DRIVER CONTROL

## BENEFIT FROM A LARGE CURRENT CONTROL RANGE VIA ANALOG INPUTS!

The TMC248 is controlled via SPI bus. The microcontroller initializes the chip and writes control parameters, mode bits, and values for coil currents in the driver chip. Analog A/B inputs allow for a large current control range.

<!-- image -->

## MINIATURIZED DESIGN FOR STANDALONE MODE

## REPLACE BIPOLAR DRIVER BY A MODERN CMOS DRIVER. USE NEW HARDWARE AND KEEP YOUR SOFTWARE INVEST!

The TMC248 is controlled by analog current control signals and digital phase signals. Especially for lower speeds inimitable smoothness will be achieved with TRINAMICs low noise chopper.

<!-- image -->

<!-- image -->

## ORDER CODES

| Order code           | Description                                                  | Size         |
|----------------------|--------------------------------------------------------------|--------------|
| TMC248-LA            | 7 A stepper driver for external MOSFETs, QFN28               | 5 x 5 mm 2   |
| TMC429+24x-EVAL V2.0 | Chipset evaluation board for TMC429, TMC246, TMC248, TMC249. | 10 x 16 cm 2 |

## TMC429+24X-EVAL

## EVALUATION &amp; DEVELOPMENT PLATFORM

This evaluation board is a development platform for applications based on the TMC248. The board features USB interface  for  communication  with  control  software  running on a PC. External power MOSFETs support drive currents up to  3.5A  at  24  V.  The  control  software  provides  a  userfriendly  GUI  for  setting  control  parameters  and  visualizing the dynamic response of the motor.

## TABLE OF CONTENTS

| 1         | KEY CONCEPTS                                                                                        | 4        | 9.3            | OVERVOLTAGE PROTECTION AND ENN PIN                                    |             |
|-----------|-----------------------------------------------------------------------------------------------------|----------|----------------|-----------------------------------------------------------------------|-------------|
| 1.1       | ADVANCED FEATURES                                                                                   | 5        |                | BEHAVIOR                                                              | 26          |
| 1.2       | CONTROL I NTERFACES                                                                                 | 5        | 10             | MICROSTEP RESOLUTION                                                  | 27          |
| 2         | PIN ASSIGNMENTS                                                                                     | 6        | 11             | MOSFET EXAMPLES                                                       | 28          |
| 2.1       | PACKAGE OUTLINE                                                                                     | 6        | 12             | LAYOUT CONSIDERATIONS                                                 | 30          |
| 2.2       | SIGNAL DESCRIPTIONS                                                                                 | 6        | 12.1           | GROUNDING                                                             | 30          |
| 3         | STALLGUARD - STALL DETECTION AND REFERENCE SEARCH                                                   | 7        | 12.2 12.3      | FILTERING CAPACITORS PULL -UP RESISTORS ON UNUSED I NPUTS             | 30 31       |
| 3.1       | STALLGUARD MEASUREMENT                                                                              | 7        | 12.4           | POWER SUPPLY SEQUENCING CONSIDERATIONS                                |             |
| 3.2       | I MPLEMENTING SENSORLESS STALL DETECTION                                                            |          | 12.5           | LAYOUT EXAMPLE                                                        | 31 32       |
| 4 4.1 4.2 | 9 SPI INTERFACE BUS SIGNALS MOTOR COIL CURRENT SETTING VIA SPI                                      | 10 10 11 | 13 14 14.1     | ABSOLUTE MAXIMUM RATINGS ELECTRICAL CHARACTERISTICS OPERATIONAL RANGE | 33 34 34 34 |
| 4.3 4.4   | BASE CURRENT CONTROL MODE VIA INA CONTROLLING POWER DOWN VIA THE SPI I NTERFACE OPEN LOAD DETECTION | / 11 13  | 14.2 14.3 15   | DC SPECIFICATIONS AC SPECIFICATIONS                                   | 36 37       |
| 4.5 4.6   | STANDBY AND SHUTDOWN MODE POWER SAVING                                                              | 13 13    | 14.4 15.1 15.2 | THERMAL PROTECTION PACKAGE MECHANICAL DATA DIMENSIONAL DRAWINGS       | 36          |
|           | INB IN SPI MODE                                                                                     |          |                |                                                                       |             |
| 4.7       | BUS TIMING USING THE SPI I NTERFACE WITH ONE OR MULTIPLE DEVICES                                    | 13 14    | 16 17          | PACKAGE CODE DISCLAIMER ESD SENSITIVE DEVICE                          | 37 37 38    |
| 4.8 4.9   | SPI FILTER                                                                                          | 14       | 18             | TABLE OF FIGURES                                                      | 38          |
|           |                                                                                                     | 14       | 19             |                                                                       | 39          |
|           | CLASSICAL NON-SPI CONTROL                                                                           | MODE     |                |                                                                       |             |
| 4.10      |                                                                                                     |          |                |                                                                       |             |
| 5         |                                                                                                     |          |                | REVISION HISTORY                                                      | 40          |
|           |                                                                                                     | 15       |                |                                                                       |             |
|           | (STANDALONE MODE)                                                                                   |          |                |                                                                       |             |
|           | PIN FUNCTIONS IN STANDALONE MODE                                                                    | 15 IN    | 20             | REFERENCES                                                            |             |
| 5.1 5.2   | INPUT SIGNALS FOR MICROSTEP CONTROL                                                                 |          |                |                                                                       | 40          |
| 6 6.1 6.2 | STANDALONE MODE CURRENT SETTING SENSE RESISTOR FOR CURRENT SETTING                                  | 15 16    |                |                                                                       |             |
|           |                                                                                                     | 16       |                |                                                                       |             |
|           | RESISTOR R SH FOR HIGH SIDE OVERCURRENT DETECTION                                                   | 16       |                |                                                                       |             |
| 7         | CHOPPER OPERATION                                                                                   | 18       |                |                                                                       |             |
| 7.1 7.2   | MIXED DECAY MODE CHOPPER FREQUENCY                                                                  | 18 19    |                |                                                                       |             |
| 7.3       | VOLTAGE PWM MODE FOR LOW NOISE CHOPPER ADAPTING THE SINE WAVE FOR SMOOTH                            | 20       |                |                                                                       |             |
| 7.4       | MOTOR OPERATION                                                                                     | 22 23    |                |                                                                       |             |
| 7.5       | BLANK TIME                                                                                          |          |                |                                                                       |             |
| 8         | SLOPE CONTROL                                                                                       | 24       |                |                                                                       |             |
| 9         |                                                                                                     |          |                |                                                                       |             |
|           | PROTECTION FUNCTIONS OVERCURRENT PROTECTION                                                         | 25       |                |                                                                       |             |
| 9.1       | 25 OVER TEMPERATURE PROTECTION AND                                                                  |          |                |                                                                       |             |
| 9.2       | AND DIAGNOSTIC DIAGNOSTIC                                                                           | 25       |                |                                                                       |             |

## 1 Key Concepts

Figure 1.1 TMC248 block diagram

<!-- image -->

The TMC248 is a dual full bridge driver IC for bipolar stepper motor control applications. The chip is realized  in  a  HVCMOS  technology  and  directly  drives  eight  external  Low-RDS-ON  high  efficiency MOSFETs. A 4A driver can be realized in the size of a stamp.

The  TMC248  motor  driver  implements  advanced  features  which  are  characteristic  to  TRINAMIC products. These features contribute toward precision, energy efficiency, reliability, smooth motion, and cooler operation in stepper motor applications.

In  addition  to  these  performance  enhancements,  TRINAMIC  motor  drivers  also  offer  safeguards  to detect and protect against short circuit, overtemperature, overvoltage, and undervoltage conditions for enhancing safety and recovery from equipment malfunctions.

## 1.1 Advanced Features

| stallGuard ™                  | The TMC248 offers sensorless load measurement and stall detection. Its ability to predict an overload makes the TMC248 an optimum choice for drives, where a high reliability is desired. Further, the integrated stallGuard™ feature makes the TMC248 a good choice for applications, where a reference point is needed, but where a switch is not desired.                           |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Current Control               | Current control serves a cool driver and motor. Internal DACs allow microstepping as well as smart current control. Its low power dissipation makes the TMC248 an optimum choice for drives, where a high reliability is desired.                                                                                                                                                      |
| Microstepping via SPI         | Easy to use digital control of microstepping. After choosing the desired microstep resolution the microcontroller sends digital values for each microstep current via SPI. DACs and comparators convert these digital values to analog signals for coil currents. This way, every microstep is initialized and controlled by the microcontroller. The TMC248 serves for the execution. |
| Mixed Decay                   | Mixed decay can be used for smoother operation.                                                                                                                                                                                                                                                                                                                                        |
| Low Noise Chopper             | The TMC248 allows implementing a low noise voltage PWM chopper by two microcontroller PWM outputs using its simple standalone mode. This way, a motor can be moved very smoothly at high microstep resolution without any noise.                                                                                                                                                       |
| Slope Control                 | Slope control reduces electromagnetic emissions.                                                                                                                                                                                                                                                                                                                                       |
| Oscillator and Clock Selector | Oscillator and clock selector provide the system clock from the on- chip oscillator or an external source.                                                                                                                                                                                                                                                                             |

## 1.2 Control Interfaces

There  are  two  control  interfaces  from  the  motion  controller  to  the  motor  driver:  the  SPI  serial interface and the classical analog interface.

## 1.2.1 SPI Interface

The SPI interface is used to write control information to the chip and read back status information. This interface must be used to initialize parameters and modes necessary to enable driving the motor. This interface may also be used for directly setting the currents flowing through the motor coils. The motor can be controlled through the SPI interface alone.

The SPI interface is a bit-serial interface synchronous to a bus clock. For every bit sent from the bus master  to  the  bus  slave,  another  bit  is  sent  simultaneously  from  the  slave  to  the  master. Communication between an SPI master and the TMC248 slave always consists of sending one 12-bit command word and receiving one 12-bit status word.

The SPI command rate typically corresponds to the microstep rate at low velocities. At high velocities, the  rate  may  be  limited  by  CPU  bandwidth  to  10,000  to  100,000  commands  per  second,  so  the application may need to change to fullstep resolution.

## 1.2.2 Classical Non-SPI Control Mode (Standalone Mode)

The driver can be controlled by analog current control signals and digital phase signals.

## 2 Pin Assignments

## 2.1 Package Outline

## INB VS GND VCC INA SLP VT

<!-- image -->

Top view

Figure 2.1 TMC248 pin assignments

## 2.2 Signal Descriptions

| Pin   |   Number | Function                                                           |
|-------|----------|--------------------------------------------------------------------|
| AGND  |        1 | Analog ground (reference for SRA, SRB, OSC, SLP, INA, INB, SLP)    |
| INA   |       27 | Analog current control phase A                                     |
| INB   |       26 | Analog current control phase B                                     |
| GND   |       24 | Digital and power GND                                              |
| OSC   |        8 | Oscillator capacitor or external clock input for chopper           |
| HA1   |        3 | Outputs for high side P-channel transistors.                       |
| HA2   |        4 | Outputs for high side P-channel transistors.                       |
| HB1   |       20 | Outputs for high side P-channel transistors.                       |
| HB2   |       19 | Outputs for high side P-channel transistors.                       |
| LA1   |        5 | Outputs for low side N-channel transistors                         |
| LA2   |        6 | Outputs for low side N-channel transistors                         |
| LB1   |       18 | Outputs for low side N-channel transistors                         |
| LB2   |       17 | Outputs for low side N-channel transistors                         |
| SRA   |        7 | Bridge A / B current sense resistor input                          |
| SRB   |       16 | Bridge A / B current sense resistor input                          |
| SDO   |        9 | Data output of SPI interface (tri-state)                           |
| SDI   |       10 | Data input of SPI interface                                        |
| SCK   |       11 | Serial clock input of SPI interface                                |
| CSN   |       12 | Chip select input of SPI interface                                 |
| SPE   |       14 | Enable SPI mode (high active). Tie to GND for non-SPI applications |
| SLP   |       28 | Slope control resistor. Tie to GND for fastest slope               |
| ENN   |       13 | Device enable (low active) and overvoltage shutdown input          |
| ANN   |        2 | Enable analog current control via INA and INB (low active)         |
| BL1   |       15 | Digital blank time select                                          |
| BL2   |       21 | Digital blank time select                                          |
| VS    |       23 | Motor supply voltage                                               |
| VCC   |       25 | 3.0… 5.5V supply voltage for analog and logic circuits             |
| VT    |       22 | Short to GND detection comparator - connect to VS if not used      |

## 3 stallGuard -  Stall Detection and Reference Search

stallGuard provides a sensorless measurement of the load on the motor. The load detection is based on the motors back EMF of the coils. Thus, the stallGuard feature allows  a digital read  out  of  the mechanical load on the motor via the serial interface.

stallGuard is important for:

- -finding a reference point
- -stall detection
- -predicting an overload and assuring high reliability

stallGuard is typically used for the noiseless reference search with a mechanical reference position. The quality of the result depends on three constraints from the stepper motor and its application:

- -efficiency of a stepper motor in terms of mechanical power vs. power dissipation
- -difference in mechanical load between free running and stall on barrier
- -velocity of the stepper motor

## 3.1 stallGuard Measurement

The stallGuard measurement value changes linearly over a wide range of load, velocity, and current settings. At maximum motor load, the value goes to zero or near to zero. This corresponds to a load angle of 90° between the magnetic field of the coils and magnets in the rotor. This also is the most energy-efficient point of operation for the motor.

The load detection level depends on several factors:

Motor velocity

A higher velocity leads to a higher readout value.

Motor resonance

Motor  resonances  cause  a  high  dynamic  load  on  the  motor,  and  thus measurement may give unsatisfactory results.

Motor acceleration

Acceleration phases also produce dynamic load on the motor.

Mixed decay setting

For load measurement mixed decay has to be off for some time before the zero  crossing  of  the  coil  current.  If  mixed  decay  is  used,  and  the  mixed decay period is extended towards the zero crossing, the load indicator value decreases.

## Attention :

- -To get a readout value, drive the motor using sine commutation and mixed decay switched off.
- -The load measurement is available as a three bit load indicator during normal motion of the motor.
- -A higher mechanical load on the motor results in a lower readout value.
- -The value is updated once per fullstep.

## STALLGUARD VALUES

| Bits                         | Description   | Description                                                                                                                                                                                                                                                                                  | Value Range   |
|------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| LD2 LD1 LD0 (unsigned 3 bit) | 0 1, 2 3… 7   | Highest mechanical load on motor, stall may occur. High mechanical load on motor. Less load on motor. A value in this range should be achieved in a suitable velocity range under no-load conditions, in order to get stable stall detection. 7: 100% stallGuard signal - lowest motor load. | 0… 7          |

The stallGuard signal sensitivity curves show the reaction of the TMC248 to the stallGuard signal taken from  measuring  the  motor.  A  certain  stray  occurs  within  the  TMC248,  but  the  resulting  curve  is monotonously. Typically, the curve for a certain device has a certain offset. For high values above 2, the percentage of the stray is relatively low, so that a motor reaching these values allows safe stall detection.

Figure 3.1 stallGuard signal sensitivity curves

<!-- image -->

## 3.2 Implementing Sensorless Stall Detection

The sensorless stall detection typically is used, to detect the reference point without the usage of a switch or photo interrupter. Therefore the actuator is driven to a mechanical stop, e.g. one end point in a spindle type actuator. As soon as the stop is hit, the motor stalls. Without stall detection, this would give an audible humming noise and vibrations, which could damage mechanics.

## TO GET RELIABLE STALL DETECTION, PROCEED AS FOLLOWS:

1. Choose a motor velocity for reference movement. Use a medium velocity which is far enough from mechanical resonance frequencies. In some applications even the start and/or stop frequency may be used. So, the motor can stop within one fullstep if a stall is detected.
2. Use a sine stepping pattern and switch off mixed decay (at least 1… 3 microsteps before zero crossing of the sine wave current in the related coil).
3. Monitor the load indicator during movement. It should show a stable readout value in the range 3… 7 (L MOVE ). If the readout is high (&gt;5), the mixed decay portion may be increased.
4. Choose a threshold value L STALL between 0 and L MOVE - 1. Monitor the load indicator during the reference search movement (homing) as the desired velocity is reached.
5. Readout is required at least once per fullstep. If the readout value at one fullstep is below or equal to L STALL , stop the motor.
6. If the motor stops during normal movement without hitting the mechanical stop, decrease L STALL . If the stall condition is not detected at once, when the motor stalls, increase L STALL .

## Attention :

- -At maximum motor load, the value goes to zero or near to zero.
- -Do not read out the value within one chopper period plus 8 microseconds after toggling one of the phase polarities!

Figure 3.2 Implementing stallGuard

<!-- image -->

## 4 SPI Interface

The TMC248 requires setting current absolute values and polarity for each microstep through the SPI interface to drive the motor in SPI mode. The SPI interface also allows reading back status values and bits.

## 4.1 Bus Signals

The SPI bus on the TMC248 has five signals:

- SCK bus clock input
- SDI serial data input
- SDO serial data output
- CSN chip select input (active low)
- ENN enable input has to be active (low) in order to use SPI

The slave  is  enabled  for  an  SPI  transaction  by  a  low  on  the  chip  select  input  CSN.  Bit  transfer  is synchronous to the bus clock SCK, with the slave latching the data from SDI on the rising edge of SCK and driving data to SDO following the falling edge. The most significant bit is sent first. A minimum of 12 SCK clock cycles is required for a bus transaction with the TMC248.

If more than 12 clocks are driven, the additional bits shifted into SDI are shifted out on SDO after a 12-clock delay through an internal shift register. This can be used for daisy chaining multiple chips.

CSN must be low during the whole bus transaction. When CSN goes high, the contents of the internal shift  register  are  latched  into  the  internal  control  register  and  recognized  as  a  command  from  the master to the slave. If more than 12 bits are sent, only the last 12 bits received before the rising edge of CSN are recognized as the command.

The  SPI  data  word  sets  the  current  and  polarity  for  both  coils.  By  applying  consecutive  values, describing  a  sine  and  a  cosine  wave,  the  motor  can  be  driven  in  microsteps.  Every  microstep  is initiated by its own telegram. Please refer to the description of the analog mode for details on the waveforms required. The SPI interface timing is described in the timing section.

We recommend the TMC429 to automatically generate the microstepping sequence and motor ramps for up to three motors.

## SERIAL DATA WORD TRANSMITTED TO TMC248

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

## SERIAL DATA WORD TRANSMITTED FROM TMC248

MSB TRANSMITTED FIRST

|   Bit | Name   | Function                      | Remark                                             |
|-------|--------|-------------------------------|----------------------------------------------------|
|    11 | LD2    | Load indicator bit 2          | MSB                                                |
|    10 | LD1    | Load indicator bit 1          |                                                    |
|     9 | LD0    | Load indicator bit 0          | LSB                                                |
|     8 | 1      | Always 1                      |                                                    |
|     7 | OT     | Overtemperature               | 1 = Chip off due to overtemperature                |
|     6 | OTPW   | Temperature prewarning        | 1 = Prewarning temperature exceeded                |
|     5 | UV     | Driver undervoltage           | 1 = Undervoltage on VS                             |
|     4 | OCHS   | Overcurrent high side         | 3 PWM cycles with overcurrent within 63 PWM cycles |
|     3 | OLB    | Open load bridge B            | No PWM switch off for 14 oscillator cycles         |
|     2 | OLA    | Open load bridge A            | No PWM switch off for 14 oscillator cycles         |
|     1 | OCB    | Overcurrent bridge B low side | 3 PWM cycles with overcurrent within 63 PWM cycles |
|     0 | OCA    | Overcurrent bridge A low side | 3 PWM cycles with overcurrent within 63 PWM cycles |

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
- -A 2.0 V input voltage V IN gives full scale current of 100%.
- -The range for V IN is 0… 3V. Min. 1 V recommended for best microstepping.
- -The typical trip voltage of the current sense comparator is determined by the input voltage VIN and the DAC current setting (see table above).

Figure 4.1 Relation between V IN and trip voltage of current sense comparator

<!-- image -->

## IN CASE A VARIABLE INPUT VOLTAGE V IN  IS USED THE TYPICAL TRIP VOLTAGE IS CALCULATED:

VTRIP,A = 0.17 V INA  percentage SPI current setting A

VTRIP,B = 0.17 V INB  percentage SPI current setting B

## GENERATING INPUT VOLTAGE V IN

A maximum of 3.0V V IN is possible. Multiply the percentage of base current setting and the DAC table to get the overall coil current. It is advised to operate at a high base current setting, to reduce the effects of noise voltages. This feature allows a high resolution setting of the required motor current using an external DAC or PWM-DAC (see schematic for examples).

Figure 4.2 External DAC and PWM-DAC

<!-- image -->

## 4.4 Controlling Power Down via the SPI Interface

<!-- image -->

Programming current value 0000 for both coils at a time clears the overcurrent flags and switches the TMC248 into a low current standby mode with coils switched off.

## 4.5 Open Load Detection

Open load is signaled if there are more than 14 oscillator cycles without PWM switch off. During overcurrent, undervoltage, or overtemperature conditions, the open load flags become active. Open load detection is not possible while the coil current is set to 0000. In this condition the chopper is off and the open load flag is read as inactive (0).

The open load flags not only signal an open load condition, but also a torque loss of the motor, especially at high motor velocities. To detect only an interruption of the connection to the motor, it is advised to evaluate the flags during stand still or during low velocities only (e.g. for the first or last steps of a movement).

## 4.6 Standby and Shutdown Mode

The  TMC248  offers  two  possibilities  for  reducing  power  consumption  under  special  conditions:  the standby mode and the shutdown mode.

## STANDBY MODE

- -The circuit can be put into a low power standby mode by the user.
- -The circuit automatically goes to standby on Vcc undervoltage conditions.
- -The standby mode is available via the interface in SPI-mode and via the ENN pin in non-SPI mode.

Before entering standby mode, the TMC248 switches off all power transistors and holds their gates in  a  disable  condition  using  high  ohmic  resistors.  In  standby  mode  the  oscillator  becomes disabled and the oscillator pin is held at a low state.

## SHUTDOWN MODE

- -The shutdown mode is used for a further reduction of the supply current.
- -The shutdown mode can be entered in SPI-mode by pulling the ENN pin high.
- -In shutdown mode additionally all internal reference voltages become switched off and the SPI circuit is held in reset.

## 4.7 Power Saving

The possibility to control the output current can dramatically save energy, reduce heat generation and increase precision by reducing thermal stress on the motor and attached mechanical components. Just reduce motor current during stand still: A slight reduction of the coil currents to 70% of the current of the last step halves power consumption!

In typical applications a 50% current reduction during stand still is reasonable.

## 4.8 Bus Timing

The SPI interface operates completely asynchronous. It is clocked by SCK and CSN, only. Figure 4.3 shows the timing parameters of an SPI bus transaction, and the table below specifies their values.

<!-- image -->

## Figure 4.3 SPI Timing

## PROPAGATION TIMES

(3.0 V  VCC  5.5 V,  -40°C  Tj  150°C;  V IH = 2.8V, VIL = 0.5V; tr, tf  =  10ns;  C L =  50pF, unless otherwise specified)

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

**) Whenever the PHA / PHB polarity is changed, the chopper is restarted for that phase. Tthe chopper does not switch on, when the SRA resp. SRB comparator threshold is exceeded upon the start of a chopper period.

## 4.9 Using the SPI Interface with One or Multiple Devices

The SPI interface allows either cascading of multiple devices, giving a longer shift register, or working with a separate chip select signal for each device, paralleling all other lines. Even when there is only one device attached to a CPU, the CPU can communicate with it using a 16 bit transmission. In this case, the upper 4 bits are dummy bits.

## 4.10 SPI Filter

To prevent spikes from changing the SPI settings, SPI data words are only accepted, if their length is at least 12 bit.

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

## Attention

:

When transferring these waves to SPI operation, note that the mixed decay bits are inverted when compared to standalone mode.

Figure 5.1 Analog control for standalone mode

<!-- image -->

## 6 Current Setting

## 6.1 Sense Resistor for Current Setting

Choose an appropriate sense resistor R S for setting the desired motor current.

## Basic information:

- -The maximum motor current is reached, when the coil current setting is programmed to 1111.
- -This results in a current sense trip voltage of 0.34V if the internal reference or a reference voltage of 2V is used. (Refer to chapter 4.3 for more information about current setting in SPI mode.)
- -The current sense resistor of bridge A, B is calculated as:

RSENSE = V TRIP / I max

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

## POSSIBLE SENSE RESISTOR SETTINGS

| R S    | I max   |
|--------|---------|
| 0.47  | 723mA   |
| 0.33  | 1030mA  |
| 0.22  | 1545mA  |
| 0.15  | 2267mA  |
| 0.10  | 3400mA  |

## 6.2 Resistor R SH for High Side Overcurrent Detection

The TMC248 detects an overcurrent to ground, when the voltage between VS (supply voltage) and VT (threshold voltage) exceeds 150mV. The high side overcurrent detection resistor should be chosen in a way  that  100mV  voltage  drop  are  not  exceeded  between  VS  and  VT,  when  both  coils  draw  the maximum current. In a microstep application, this is the case when sine and cosine wave have their highest sum, i.e. at 45 degrees. This corresponds to 1.41 times the maximum current setting for one coil. In a fullstep application this is adequate to the double coil current.

## IN A MICROSTEP APPLICATION:

RSH = 0.1V / (1.41  I max )

## IN A FULLSTEP APPLICATION:

RSH = 0.1V / (2  I max )

RSH :

High side overcurrent detection resistor

I max :

Maximum coil current

If higher resistance values should be used, a voltage divider in the range of 10  to 100  can be used for  VT.  This  might  also  be  desired  to  limit  the  peak  short  to  GND  current,  as  described  in  the following chapter.

A careful PCB layout is required for the sense resistor traces and for the R SH traces.

## 6.2.1 Making the Circuit Short Circuit Proof

In most applications, a short circuit does not describe only one special condition. It typically involves inductive, resistive and capacitive components. Worst events are unclamped switching events, because huge voltages can build up in inductive components and result in a high energy spark going into the driver, which can destroy the power transistors.

## Note :

Never disconnect the motor during operation as this can destroy the power transistors!

An absolute protection against random short circuit conditions is not given, but pre-cautions can be taken to improve robustness of the circuit:

In a short condition, the current can become very high before it is interrupted by the short detection, due  to  the  blanking  during  switching  and  internal  delays.  The  high-side  transistors  allow  a  high current flowing for the selected blank time. The lower the external inductivity, the faster the current climbs. If inductive components are involved in the short, the same current will shoot through the low-side resistor and cause a high negative voltage spike at the sense resistor. Both, the high current and the voltage spikes are dangerous for the driver.

## PROCEED AS FOLLOWS, IF SHORT CIRCUITS ARE EXPECTED:

1. Protect SRA/SRB inputs using a series resistance.
2. Increase R SH (high side overcurrent detection resistor) to limit the maximum transistor current. Use the same value as for the sense resistors.
3. Set the blank time as short as possible.

The second point effectively limits the short circuit current, because the upper driver transistor with fixed ON gate voltage of 6V forms a constant current source together with its internal resistance and the high side overcurrent detection resistor R SH .

A positive side effect is that only one type of low resistive resistor is required. The drawback is that power dissipation increases.

Figure 6.1 Schematic with R SH =RSA =RSB

<!-- image -->

## Example:

A 0.33 Ohms sense resistor allows for roughly 1 A motor coil current.

A high side short detection resistor of 0.33  Ohms limits  maximum high side transistor current to typically 4A during  a  short  circuit  condition.  The schematic shows the modifications to be done.

The effectiveness of the steps described  above  should  be  tested  in the given application!

## 7 Chopper Operation

The currents through both motor coils are controlled using a chopper. The TMC248 uses a quiet fixed frequency  chopper.  Both  coils  are  chopped  with  a  phase  shift  of  180  degrees.  The  Chopper  cycles through three phases: on, fast decay, and slow decay.

On Phase: current flows in direction of target current

<!-- image -->

Figure 7.1 Chopper phases

Fast decay switches off both upper transistors, while enabling the lower transistor opposite to the selected polarity. Slow decay always enables both lower side transistors.

When the polarity  is  changed  on  one  bridge,  the  PWM  cycle  on  that  bridge  becomes  restarted  at once.

## 7.1 Mixed Decay Mode

The mixed decay option is realized as a self stabilizing system, by shortening the fast decay phase, if the ON phase becomes longer.

It is advised to enable the mixed decay for each phase during the second half of each microstepping half-wave, when the current is meant to decrease. This leads to less motor resonance, especially at medium velocities.

MIXED DECAY IN APPLICATIONS WITH HIGH RESOLUTION OR LOW INDUCTIVITY MOTORS

In applications requiring high resolution, or using low inductivity motors, the mixed decay mode can also be enabled continuously to reduce the minimum motor current which can be achieved.

USING MIXED DECAY CONTINUOUSLY OR WITH HIGH INDUCTIVITY MOTORS AT LOW SUPPLY VOLTAGE

If mixed decay mode is continuously on or high inductivity motors are used at low supply voltage, it is  advised  to  raise  the  chopper  frequency  to  minimum  36 kHz,  because  the  half  chopper  frequency could become audible.

With low velocities or during standstill mixed decay should be switched off.

Fast Decay Phase: current flows in opposite direction of target current

<!-- image -->

Slow Decay Phase: current re-circulation

<!-- image -->

Figure 7.2 Chopper cycle

<!-- image -->

## 7.2 Chopper Frequency

The PWM oscillator frequency can be set by an external capacitor. The internal oscillator uses a 28k  resistor to charge / discharge the external capacitor to a trip voltage of 2/3 Vcc respectively 1/3 Vcc. It can be overdriven using an external CMOS level square wave signal. Do not set the frequency higher than 100 kHz and do not leave the OSC terminal open! The two bridges are chopped with a phase shift of 180 degrees at the positive and at the negative edge of the clock signal.

The PWM oscillator frequency is calculated as:

f

OSC

:

PWM oscillator frequency

COSC

:

Oscillator capacitor in nF

## OSCILLATOR FREQUENCIES

| f OSC typ.   | C OSC   |
|--------------|---------|
| 16.7kHz      | 1.5nF   |
| 20.8kHz      | 1.2nF   |
| 25.0kHz      | 1.0nF   |
| 30.5kHz      | 820pF   |
| 36.8kHz      | 680pF   |
| 44.6kHz      | 560pF   |

An unnecessary high frequency leads to high switching losses in the power transistors and in the motor.

For most applications a chopper frequency slightly above audible range is sufficient. When audible noise  occurs  in  an  application,  especially  with  mixed  decay  continuously  enabled,  the  chopper frequency should be two times the audible range.

## 7.3 Voltage PWM Mode for Low Noise Chopper

The TMC248 uses a cycle-by-cycle based chopper system, because it brings the best performance over a wide range of velocities. It regulates the current by terminating each chopper cycle as soon as the target  current  has  been  reached.  This  direct  current  regulation  provides  good  dampening  of  motor resonance, low motor power loss and automatic adaptation to the specific motor. On the other hand, chopper stability requires good decoupling between both motor coils and it needs a precise layout of the high current paths. Instabilities caused by magnetic coupling in the motor or by coupling of the coil current regulators due to electric coupling can lead to chopper noise and fine vibrations. Under normal conditions, these will not do any harm. In applications, where the motor moves very slowly or where precise standstill with low mass on the motor axis is required, a voltage PWM chopper is a good choice.

The  low  noise  feed  forward  chopper  principle  uses  a  voltage  PWM  controlled  driving  rather  than current controlled driving. This is possible, because the stepper motor has a certain coil resistance. This resistance converts an externally applied voltage to current. As long as the motor velocity is low, back EMF caused by the motor rotation does not need to be taken into account.

At increasing velocities, the motors back EMF has an increasing influence and influences coil current. This can be compensated by increasing the driver voltage with increasing velocity. Effects like motor temperature  dependency  of  the  coil  resistance  should  be  taken  into  account,  in  case  the  motor operates in an increased temperature range. The described compensation principle can be realized in a completely feed-forward way, based on the motor data, or by measuring the effective current and adding a regulation loop.

The chopper principle described generates a certain motor voltage by toggling each motor phase with a certain PWM frequency. Therefore the motor full bridges either switch on the motor current in one direction or in the opposite direction.

This way, the duty cycle of toggling the coil polarity produces a certain effective voltage on the coils:

- -A 50 percent duty cycle gives a mean current of zero.
- -A higher or lower duty cycle gives a positive or negative current.
- -A high PWM resolution will bring a high microstep resolution.

Figure 7.3 Voltage PWM generates motor current

<!-- image -->

## 7.3.1 Calculating the PWM for Low Noise Chopper

A microcontroller or an FPGA can be used for generating the two PWMs required to drive the motor. For a 256 microstep resolution a PWM resolution of 9 to 10 bit is required. Assuming a target chopper

frequency of roughly 20 kHz, a base clock frequency of 20 MHz (=2 10 x 20 kHz) is required to yield a 10 bit PWM. A 16 MHz clock frequency will allow realizing a 9 bit PWM with 31 kHz, or a resolution of 800 PWM steps with 20 kHz. This is a feasible value for most standard 8 bit or better microcontrollers.

Basically, one motor coil is driven with a PWM, which duty cycle is modulated using a sine wave. The other coil  with  a  cosine  modulated  PWM.  Assuming, that the system supply  voltage  would exactly match the motor voltage required for nominal current, the PWM duty cycle will be altered between 100% for maximum positive current and 0% for maximum negative current. As this is not a typical constellation, the PWM modulation required to match the motor needs to be calculated.

The PWM modulation is calculated as:

PWMAmpl   PWM amplitude required to reach the nominal motor current. Half of this amplitude is applied in positive direction (additional to 50% duty cycle), and half of it is applied in

negative direction (subtracted from 50% duty cycle)

I COILpeak

Nominal peak coil current of the motor, i.e. I COILRMS * 1.41

RCOIL

Resistance of the motor coil

VM

Motor driver supply voltage (may be measured in the application)

VBEMF

Velocity dependent back EMF voltage of the motor. It is measured in V/rad/s.

At standstill V BEMF is zero and can be ignored for low RPM.

For higher velocities, multiply it by the angular velocity of the motor.

## EXAMPLE

A 1A RMS motor with 6.5Ohm coil resistance is to be operated from a 12V supply at low velocity.

Therefore, the duty cycle needs to be modulated between 0.5 + 0.76/2 = 88% for the positive sine wave peak and 0.5 -0.76/2 = 12% for the negative sine wave peak.

## 7.3.2 Hardware Setup for Low Noise Chopper

The TMC248 provides a standalone mode, which allows direct control of coil polarity using a digital signal. Further, the coil current can be controlled using an analog voltage in the range 0 V… 3 V. As current control is done by PWM duty cycle, the integrated PWM based analog current control of the

IC is not used. Therefore, in principle it would be possible to work without sense resistors.

We recommend using the analog current limit as a safety feature. Further it can be used for allowing a fallback to classical fullstepping at higher velocity (in order to also allow faster movements):

During voltage PWM mode the analog current control can be used to limit the motor current in case of  an  error.  Therefore,  the  current  limit  must  be  set  at  least  20%  to  30%  higher  than  the  desired maximum motor current for  PWM  operation  (peak  current  value  plus  additional  ripple).  The  mixed decay mode must be switched off (MDAN=MDBN=VCC), because it would interfere with voltage PWM operation. Both motor coil limits can be set to the same analog current limiting value: for a safety limit and for a change to fullstepping.

In fullstepping switching to a lower value may be desired in order to match motor RMS current.

The processor controlled  PWM uses  the  polarity  inputs  (PHA,  PHB)  for  both  coils  to  control  motor PWM.

Figure 7.4 Controlling the driver with two PWMs in standalone mode

<!-- image -->

## 7.4 Adapting the Sine Wave for Smooth Motor Operation

The optimization of the sine wave is possible for the mixed decay mode and for the voltage PWM mode. After reaching the target current in each chopper cycle, both, the slow decay and the fast decay cycle reduce the current by some amount. Especially the fast decay cycle has a larger impact. Thus, the medium coil current always is a bit lower than the target current. This leads to a flat line in the current shape flowing through the motor. It can be corrected, by applying an offset to the sine shape. In mixed decay operation via SPI, an offset of 1 does the job for most motors.

Target current corrected for optimum shape of coil current

<!-- image -->

<!-- image -->

Figure 7.5 Adapting sine wave for smooth motor operation

## 7.5 Blank Time

The TMC248 uses a digital blanking pulse for the current chopper comparators. This prevents current spikes,  which  can  occur  during  switching  action  due  to  capacitive  loading,  from  terminating  the chopper cycle.

The lowest possible blanking time gives the best results for microstepping. A long blank time leads to a long minimum turn-on time, thus giving an increased lower limit for the current.

Please remark, that the blank time should cover both, switch-off time of the lower side transistors and  turn-on  time  of  the  upper  side  transistors  plus  some  time  for  the  current  to  settle.  Thus  the complete  switching  duration  should  never  exceed  1.5µs.  With  slow  external  power  stages  it  will become necessary to add additional RC-filtering for the sense resistor inputs.

The TMC248 allows adapting the blank time to the load conditions and to the selected slope in four steps:

## BLANK TIME SETTINGS

| BL2   | BL1   | Typical blank time   | Remarks                                                                 |
|-------|-------|----------------------|-------------------------------------------------------------------------|
| GND   | GND   | 0.6 µs               | Very short. Will require good filtering on SRA and SRB.                 |
| GND   | VCC   | 0.9 µs               | Works well in good low inductivity layouts.                             |
| VCC   | GND   | 1.2 µs               | Default for most applications.                                          |
| VCC   | VCC   | 1.5 µs               | May be used with slow bridges or high sense resistor trace inductivity. |

## 8 Slope Control

The output-voltage slope of the full bridge is controlled by a constant current gate charge / discharge of  the  MOSFETs.  The  charge  /  discharge  current  for  the  MOSFETs  can  be  controlled  by  an  external resistor: a reference current is generated by internally pulling the SLP-Pin to 1.25V via an integrated 4.7K  resistor.  This  current  is  used  to  generate  the  current  for  switching  on  and  off  the  power transistors.

The gate-driver output current can be set in a range of 2… 25 mA by an external resistor:

RSLP :

Slope control resistor

I OUT

:

Controlled output current of the low-side MOSFET driver

The  SLP-pin  can  directly  be  connected  to  AGND  for  the  fastest  output-voltage  slope  (respectively maximum output current).

Please  note,  that  there  is  a  tradeoff  between  reduced  electromagnetic  emissions  (slow  slope)  and high efficiency because of low dynamic losses (fast slope). Typical slope times range between 100ns and  500ns.  Slope  times  below  100ns  are  not  recommended,  because  they  superimpose  additional stress on the power transistors while bringing only very slight improvement in power dissipation.

For  applications  where  electromagnetic  emission  is  very  critical,  it  might  be  necessary  to  add additional LC (or capacitor only) filtering on the motor connections. For these applications emission is lower, if only slow decay operation is used.

Figure 8.1 R SLP versus I DH

<!-- image -->

## 9 Protection Functions

## 9.1 Overcurrent Protection and Diagnostic

## 9.1.1 Low Side Overcurrent

The TMC248 uses the current sense resistors on the low side to detect an overcurrent.  If a voltage above 0.61 V is detected, the PWM cycle is terminated at once and all transistors of the bridge are switched off for the rest of the PWM cycle. The error counter is increased by one. If the error counter reaches 3, the bridge remains switched off for 63 PWM cycles and the error flag is read as active .

## CLEARING ERROR FLAG AND COUNTER

The user can clear the error condition in advance by clearing the error flag.

The error counter is cleared, whenever there are more than 63 PWM cycles without overcurrent. There is one error counter for each of the low side bridges, and one for the high side.

## Note :

The overcurrent detection is inactive during the blank pulse time for each bridge, to suppress spikes which can occur during switching.

## 9.1.2 Short to Ground and Overcurrent Detection

The high side comparator detects a short to GND or an overcurrent, whenever the voltage between VS and VT becomes higher than 0.15 V at any time (except for the blank time period which is logically ORed for both bridges). If the voltage between VS and VT becomes higher than 0.15 V all transistors become switched off for the rest of the PWM cycle, because the bridge with the failure is unknown.

In  high  side  overcurrent  conditions  the  user  can  determine  which  bridge  sees  the  overcurrent,  by selectively switching on only one of the bridges with each polarity (therefore the other bridge should remain programmed to 0000).

## CLEARING ERROR FLAGS

The overcurrent flags can be cleared by disabling and re-enabling the chip either via the ENN pin or by sending a telegram with both current control words set to 0000.

## 9.2 Over Temperature Protection and Diagnostic

The circuit switches off all output power transistors during an over temperature condition. The over temperature flag should be monitored to detect this condition.  The circuit  resumes  operation after cool down below the temperature threshold. However, operation near the over temperature threshold should be avoided, if a high lifetime is desired.

## 9.3 Overvoltage Protection and ENN Pin Behavior

Many suitable power MOSFETs are 30 V types. The TMC248 allows protecting the MOSFETs up to 40 V supply  voltage  while  they  are  switched  off.  During  disable  conditions  the  circuit  switches  off  all output  power  transistors  and  goes  into  a  low  current  shutdown  mode.  All  register  contents  are cleared to 0, and all status flags are cleared.

The circuit in this condition can stand a higher voltage. The voltage is not limited by the maximum power MOSFET voltage any more.

The enable pin ENN provides a fixed threshold of ½ V CC to allow a simple overvoltage protection up to 40V using an external voltage divider (see schematic).

Figure 9.1 Overvoltage protection

<!-- image -->

## 10 Microstep Resolution

After  choosing  the  desired  microstep  resolution  the  microcontroller  sends  digital  values  for  each microstep current via SPI. The following example shows how to initialize microsteps via SPI.

## SINE WAVE TABLE

- -The sine wave table below is used for 4-bit microstepping.
- -The absolute values are left-shifted by one bit.
- -Bit 0 is the sign bit (phase direction bit).
- -Bit 5 is the mixed decay bit. It is set when the absolute value is falling.

## FUNCTION

The function in the example below generates the microsteps. The values are read from the sine wave table and output to the TMC248 (via SPI interface.) Call this function with the ccw parameter set to 1 (to step in negative direction) or with ccw set to 0 (to step in positive direction). The function can be called in a timer interrupt, too.

## SENDING VALUES VIA SPI

Set the CS line of the TMC248 low and send out the value of io by SPI (MSB first). Thereafter, set the CS line high again.

## EXAMPLE FOR GENERATING MICROSTEPS USING THE TMC248

```
UCHAR sinus_tab[64]={0x00, 0x02, 0x06, 0x08, 0x0c, 0x0e, 0x10, 0x14, 0x16, 0x18, 0x18, 0x1a, 0x1c, 0x1c, 0x1e, 0x1e, 0x3e, 0x3e, 0x3e, 0x3c, 0x3c, 0x3a, 0x38, 0x38, 0x36, 0x34, 0x30, 0x2e, 0x2c, 0x28, 0x26, 0x22, 0x01, 0x03, 0x07, 0x09, 0x0d, 0x0f, 0x11, 0x15, 0x17, 0x19, 0x19, 0x1b, 0x1d, 0x1d, 0x1f, 0x1f, 0x3f, 0x3f, 0x3f, 0x3d, 0x3d, 0x3b, 0x39, 0x39, 0x37, 0x35, 0x31, 0x2f, 0x2d, 0x29, 0x27, 0x23}; volatile UCHAR PhaseCount=0; void step(char ccw) { UINT MixedDecayXOR=0, io; if(!ccw) { PhaseCount++; } else {     //The "Mixed Decay" bits must be reversed when running in CCW direction PhaseCount--; MixedDecayXOR=0x820; } io=((sinus_tab[PhaseCount & 63]<<6 | sinus_tab[(PhaseCount+16) & 63]) ^ MixedDecayXOR); }
```

## 11 MOSFET Examples

Selection  of  power  transistors  for  the  TMC248  depends  on  required  current,  voltage  and  thermal conditions. Driving large transistors directly with the TMC248 is limited by the gate capacity of these transistors. If the total gate charge is too high, slope time increases and leads to a higher switching power dissipation. A total gate charge of maximum 25nC per transistor pair (N gate charge + P gate charge) is recommended (at 25nC, tie pin SLP to GND to get an acceptable slope). The table below shows a choice of transistors which can be driven directly by the TMC248. The maximum application current mainly is a function of cooling and environment temperature. RDSon is read at the nominal drive voltage of 6V and 25°C, the gate charge is the 4.5V value available in most datasheets.

All  of  these  transistor  types  are  mainly  cooled  via  their  drain  connections.  In  order  to  provide sufficient cooling, the transistors should be directly connected to massive traces on the PCB which are widened near the transistor package, providing a copper area of some square cm. The heat then is dissipated vertically through the PCB to a massive power or ground plane, which shall cover most of the  PCB  area  in  order  to  use  the  whole  PCB  for  cooling.  As  an  example,  the  minimum  PCB  size required to reach the given current for the SI7501, is about 42mm * 42mm, yielding in a heat up of the transistor packages of about 85°C above ambient temperature. With a 100mm * 100mm PCB, this reduced to 70°C above ambient temperature, so that safe operation is possible up to 60°C ambient temperature at maximum current (transistor package at 130°C).

| Transistor Type     | Manu- facturer   | Voltage V DS   | Max. RMS Current (*)   | Package          | R DSon N (5V)   | R DSon P (6V)   | Q G N (note)   | Q G P (note)   |
|---------------------|------------------|----------------|------------------------|------------------|-----------------|-----------------|----------------|----------------|
| Unit                |                  | V              | A                      |                  | mΩ              | mΩ              | nC             | nC             |
| AOD4186 AOD4185     | A&O              | 40             | 7                      | DPAK..           | 15              | 15              | 9              | 19 (1)         |
| FDD8647L FDD4243    | Fairchild        | 40             | 6                      | DPAK             | 13              | 45              | 12             | 18             |
| QM4302D             | UBIQ             | 40             | 5                      | TO252-4L         | 15              | 35              | 11             | 12             |
| QM4803D             | UBIQ             | 40             | 4                      | TO252-4L         | 28              | 45              | 6              | 9              |
| FDD8424H            | Fairchild        | 40             | 4                      | DPAK-4L          | 25              | 45              | 9              | 14             |
| AOD609              | A&O              | 40             | 4                      | TO252-4L         | 31              | 45              | 5              | 9 (1)          |
| AP4543GEH           | APEC             | 40             | 4                      | TO252-4L         | 32              | 50              | 8              | 13 (1)         |
| AP4543GMT           | APEC             | 40             | 3.5                    | PMPAK5x6         | 32              | 50              | 8              | 13 (1)         |
| AO4618              | A&O              | 40             | 2.8                    | SO8              | 21              | 22              | 3              | 8 (1)          |
| SI4599DY            | Vishay           | 40             | 2.5                    | SO8              | 36              | 45              | 5              | 12 (1)         |
| AP4543GEM           | APEC             | 40             | 2.5                    | SO8              | 38              | 55              | 8              | 12 (1)         |
| FDS8960C            | Fairchild        | 35             | 3                      | SO8              | 25              | 60              | 6              | 6              |
| AP9934AGM           | APEC             | 35             | 2                      | SO8 (Fullbridge) | 70              | 75              | 6              | 6 (1)          |
| BSZ050N03 BSZ180P03 | Infineon         | 30             | 6                      | S3O8             | 6               | 18              | 13             | 15             |
| AP4509AGH           | APEC             | 30             | 7                      | TO252-4L         | 16              | 32              | 15 (2)         | 17 (1)         |
| AO4616              | A&O              | 30             | 2.8                    | SO8              | 24              | 25              | 9              | 16             |
| FDS8958B            | Fairchild        | 30             | 2.8                    | SO8              | 29              | 50              | 4              | 7 (1)          |
| SI7501              | Vishay           | 30             | 3                      | PPAK1212         | 35              | 50              | 5              | 11 (1)         |
| AON7611             | A&O              | 30             | 2.8                    | DFN3x3           | 53              | 40              | 2              | 5 (1)          |
| AP4503BGM           | APEC             | 30             | 2.5                    | SO8              | 35              | 40              | 6              | 12 (1)         |
| SI4532ADY           | Vishay           | 30             | 2.3                    | SO8              | 50              | 80              | 5              | 7              |
| AP2852GO            | APEC             | 30             | 2.2                    | TSSOP-8          | 48              | 65              | 8              | 9 (1)          |
| AP9930AGM           | APEC             | 30             | 2                      | SO8 (Fullbridge) | 60              | 80              | 6 (2)          | 6              |
| CTLDM303N CTLDM304P | Central          | 30             | 2 (3)                  | M832DS           | 33              | 64              | 5              | 6              |
| AP2530AGY           | APEC             | 30             | 1 (1.5)                | SOT26            | 135             | 200             | 2.5            | 2.8            |

* The maximum motor current applicable in a given design depends upon PCB size and layout, because  all  of  these  transistors  are  mainly  cooled  through  the  PCB.  The  data  given  implies adequate cooling measures in the design, especially for higher current designs. The maximum RMS  current  rating  takes  into  account  package  power  dissipation,  on  resistances,  and  gate charges.  For  duty  cycle  limited  operation,  1.5  times  or  more  current  is  possible  (value  in brackets).

## Notes:

- (1) These P-channel transistors have  a  high  drain to  gate  charge,  which  may  introduce  destructive current impulses into the HA/HB outputs by forcing them above the power supply level, especially when the miller capacitance (Q GD )  of  the  low  side  MOSFET  is  lower  and  thus  it  switches  more quickly. As a thumb rule, the criteria is Q GDHS / Q GSHS * Q GDHS / Q GDLS &gt; 2 (assuming slopes &gt;100ns). To ensure reliability, connect a 500mA or 1A Schottky diode to both HA and HB outputs against VS to protect them. Types like MSS1P3, ZHCS1000, SS14 or BAR43 can be used.
- (2) These N-channel transistors have a  high drain to gate charge, which  may introduce destructive current impulses into the LA/LB outputs by forcing them below the ground level, especially when the miller capacitance (Q GD ) of the high side MOSFET is lower and thus it switches more quickly. As a thumb rule, the criteria is Q GDLS / Q GSLS * Q GDLS / Q GDHS &gt; 2 (assuming slopes &gt;100ns).

To ensure reliability, connect a 500mA or 1A Schottky diode to both LA and LB outputs against GND to protect them against negative spikes. Types like MSS1P3, ZHCS1000, SS14 or BAR43 can be used.

## 12 Layout Considerations

For optimal operation of the circuit a careful board layout is important, because of the combination of high current chopper operation coupled with high accuracy threshold comparators.

## 12.1 Grounding

Please pay special attention to massive grounding. Depending on the required motor current, a single massive ground plane provides the best solution. The schematic highlights the high current paths which shall be routed separately, in case a GND plane cannot be realized, so that the chopper current does not flow through the system's GND interconnections. Tie the pins AGND and GND and the die attach pad to the GND plane.

## 12.2 Filtering Capacitors

Use  enough  filtering  capacitors  located  near  to  the  boards  power  supply  input  and  small  ceramic capacitors near to the power supply connections of the TMC248. Use low inductance sense resistors, or add a ceramic capacitor in parallel to each resistor to avoid high voltage spikes.

In many applications it is beneficial to introduce additional RC-filtering into the SRA / SRB line (see Figure 12.1) to prevent spikes from triggering the short circuit protection or the chopper comparator. Alternatively, a 470nF ceramic capacitor can be placed across the sense resistors.

If  you  want  to  take  advantage  of  the  thermal  protection  and  diagnostics,  ensure,  that  the  power transistors  are  very  close  to  the  package  and  that  there  is  a  good  thermal  contact  between  the TMC248 and the external transistors.

## Note :

Long or thin traces to the sense resistors may add substantial resistance and thus reduce the output current. Further, resulting inductivity will lead to poor chopper behavior.

This  is  valid  for  the  high  side  shunt  resistor,  too.  Place  the  optional  shunt  resistor  voltage  divider near the TMC248. This avoids voltage drop in the VCC plane and adds up to the measured voltage.

Figure 12.1 Grounding TMC248

<!-- image -->

## 12.3 Pull-up Resistors on Unused Inputs

The digital inputs all have integrated pull-up resistors, except for the ENN input, which is in fact an analog input. Thus, there are no external pull-up resistors required for unused digital inputs which are meant to be positive.

## 12.4 Power Supply Sequencing Considerations

Upon power up, the driver initializes and switches off the bridge power transistors. The Vcc supply voltage  has  to  be  at  least  1.0 V  and  the  Vs  supply  voltage  has  to  be  at  least  5.0 V. This  is  a  precondition for the internal startup logic to work properly.

When Vs goes up with Vcc at 0 V, a medium current temporary cross conduction of the power stage can  result  at  supply  voltages  between  2.4 V  and  4.8 V.  In  this  voltage  range,  the  upper  transistors conduct, while the gates of the lower transistors are floating. While this typically does no harm to the driver,  it  may  hinder  the  power  supply  from  coming  up  properly,  depending  on  the  power  supply start up behavior.

## THERE ARE TWO POSSIBILITIES TO PREVENT THIS:

- -Add resistors from the LA and LB outputs to GND in the range of 1M  keeping the low side N-channel MOSFETs gates at GND.
- -Alternatively, either use a dual voltage power supply, or use a local regulator, generating the 5 V or 3.3 V Vcc voltages.

## Attention

Some  switching  regulators  do  not  start  before  the  input  voltage  has  reached  5V.  Therefore  it  is recommended to use a standard linear regulator like 7805 or LM317 series or a low drop regulator or a switching regulator like the LM2595, starting at relatively low input voltages.

## 12.5 Layout Example

## Schematic

<!-- image -->

## 1- Top Layer (assembly side)

<!-- image -->

## 3- Inner Layer (supply VS)

Figure 12.2 Layout example

<!-- image -->

## 2- Inner Layer (GND)

<!-- image -->

## 4- Bottom Layer

<!-- image -->

The layout example is based on a schematic using the TMC34NP or SI7501 MOSFETs. The short to GND  detection  uses  a  voltage divider to allow simple adaptation of the triggering current.  RC  filtering  is  included for SRA and SRB for best performance.

## Assembly

<!-- image -->

## 13 Absolute Maximum Ratings

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

## 14 Electrical Characteristics

## 14.1 Operational Range

| Parameter                                                                                             | Symbol   | Min   |   Max | Unit   |
|-------------------------------------------------------------------------------------------------------|----------|-------|-------|--------|
| Ambient temperature industrial* 1                                                                     | T AI     | -25   | 125   | °C     |
| Ambient temperature automotive                                                                        | T AA     | -40   | 125   | °C     |
| Junction temperature                                                                                  | T J      | -40   | 140   | °C     |
| Bridge supply voltage (taking into account an increase of up to 2V due to energy fed back from motor) | V S      | 7     |  34   | V      |
| Logic supply voltage                                                                                  | V CC     | 3.0   |   5.5 | V      |
| Chopper clock frequency                                                                               | f CLK    |       | 100   | kHz    |
| Slope control resistor                                                                                | R SLP    | 0     | 470   | K     |

## 14.2 DC Specifications

DC characteristics  contain  the  spread  of  values  guaranteed  within  the  specified  supply  voltage  and temperature range unless otherwise specified. Typical values represent the average value of all parts.

Logic supply voltage:

VCC = 3.0 V… 5.5 V,

Bridge supply voltage:  V

S = 7 V… 34 V

Junction temperature:   T

J = -40 °C … 140 °C,

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
| Deviation of Current Setting with Respect to Characterization Curve |  I SET | Deviation from standard value, 10k  <R SLP <75k  | 70    | 100   | 130   | %      |
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

## 14.3 AC Specifications

AC characteristics  contain  the  spread  of  values  guaranteed  within  the  specified  supply  voltage  and temperature range unless otherwise specified. Typical characteristics represent the average value of all parts.

Logic supply voltage:

VCC = 3.3 V,

Ambient temperature:

T A = 27 °C,

Bridge supply voltage: VS = 14.0 V, External MOSFET gate charge = 3.2 nC

| Parameter                                      | Symbol   | Conditions       | Min   |   Typ | Max   | Unit   |
|------------------------------------------------|----------|------------------|-------|-------|-------|--------|
| Oscillator frequency using internal oscillator | f OSC    | C OSC = 1nF  1% | 20    |  25   | 31    | kHz    |
| Effective Blank time                           | T BL     | BL1, BL2 = V CC  | 1.35  |   1.5 | 1.65  | µs     |
| Minimum PWM on-time                            | T ONMIN  | BL1, BL2 = GND   |       |   0.7 |       | µs     |

## 14.4 Thermal Protection

| Parameter              | Symbol   | Conditions   | Min   |   Typ | Max   | Unit   |
|------------------------|----------|--------------|-------|-------|-------|--------|
| Thermal shutdown       | T JOT    |              | 145   |   155 | 165   | °C     |
| T JOT hysteresis       | T JOTHYS |              |       |    15 |       | °C     |
| Prewarning temperature | T JWT    |              | 135   |   145 | 155   | °C     |
| T JWT hysteresis       | T JWTHYS |              |       |    15 |       | °C     |

## 15 Package Mechanical Data

## 15.1 Dimensional Drawings

Attention: Drawings not to scale. All dimensions are in mm.

<!-- image -->

Figure 15.1 Dimensional drawing

| Parameter              | Ref   | Min   |   Nom | Max   |
|------------------------|-------|-------|-------|-------|
| Total thickness        | A     | 0.80  | 0.85  | 0.90  |
| Stand off              | A1    | 0.00  | 0.035 | 0.05  |
| L/F thickness          | A3    |       | 0.203 |       |
| Lead width             | b     | 0.2   | 0.25  | 0.3   |
| Body size X, Y         | D, E  |       | 5     |       |
| Lead pitch             | e     |       | 0.5   |       |
| EP size X, Y           | J, K  | 3.6   | 3.7   | 3.8   |
| Lead length            | L     | 0.35  | 0.4   | 0.45  |
| Package edge tolerance | aaa   |       | 0.1   |       |
| Mold flatness          | bbb   |       | 0.1   |       |
| Coplanarity            | ccc   |       | 0.08  |       |
| Lead offset            | ddd   |       | 0.1   |       |
| Exposed pad offset     | eee   |       | 0.1   |       |

## 15.2 Package Code

| Device   | Package      | Temperature range   | Code/ Marking   |
|----------|--------------|---------------------|-----------------|
| TMC248   | QFN28 (RoHS) | -50… +125°C         | TMC248-LA       |

## 16 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life  support systems, without the specific written consent of  TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information given in this data sheet is believed to be accurate and reliable. However no responsibility is  assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 17 ESD Sensitive Device

The TMC248 is an ESD-sensitive CMOS device and sensitive to electrostatic discharge. Take special care to  use  adequate  grounding  of  personnel  and  machines  in  manual  handling.  After  soldering  the devices to the board, ESD requirements are more relaxed. Failure to do so can result in defects or decreased reliability.

<!-- image -->

Note: In a modern SMD manufacturing process, ESD voltages well below 100V are standard. A major source  for  ESD  is  hot-plugging  the  motor  during  operation.  As  the  power  MOSFETs  are  discrete devices, the device in fact is very rugged concerning any ESD event on the motor outputs. All other connections are typically protected due to external circuitry on the PCB.

## 18 Table of Figures

| Figure 1.1 TMC248 block diagram ....................................................................................................................................4              |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 2.1 TMC248 pin assignments................................................................................................................................6                 |
| Figure 3.1 stallGuard signal sensitivity curves.............................................................................................................8                      |
| Figure 3.2 Implementing stallGuard ...............................................................................................................................9                |
| Figure 4.1 Relation between V IN and trip voltage of current sense comparator.............................................12                                                       |
| Figure 4.2 External DAC and PWM-DAC........................................................................................................................12                      |
| Figure 4.3 SPI Timing ........................................................................................................................................................14   |
| Figure 5.1 Analog control for standalone mode.......................................................................................................15                             |
| Figure 6.1 Schematic with R SH =R SA =R SB ...........................................................................................................................17           |
| Figure 7.1 Chopper phases ..............................................................................................................................................18         |
| Figure 7.2 Chopper cycle ..................................................................................................................................................19      |
| Figure 7.3 Voltage PWM generates motor current ...................................................................................................20                               |
| Figure 7.4 Controlling the driver with two PWMs in standalone mode............................................................22                                                   |
| Figure 7.5 Adapting sine wave for smooth motor operation...............................................................................22                                          |
| Figure 8.1 R SLP versus I DH ...................................................................................................................................................24 |
| Figure 9.1 Overvoltage protection .................................................................................................................................26              |
| Figure 11.1 Grounding TMC248.......................................................................................................................................30              |
| Figure 14.1 Dimensional drawing..................................................................................................................................37                |

## 19 Revision History

|   Version | Date        | Author BD = Bernhard Dwersteg SD - Sonja Dwersteg   | Description                                                                                                                           |
|-----------|-------------|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
|      0.9  |             | BD                                                  | Datasheet based on TMC249 datasheet, removed higher voltage and 64 microstep application notes, increased SPI frequency limit to 8MHz |
|      1    | 2012-JUN-22 | SD                                                  | - New design. - Further information about stallGuard and low noise chopper. - Layout example added.                                   |
|      1.01 | 2013-MAR-26 | BD                                                  | MOSFET list updated, updated criteria for necessity of gate driver output protection diodes                                           |

## 20 References

[TMC32NP-PSO] TMC32NP-PSO MOSFET Datasheet

[TMC34NP-PSO] TMC34NP-PSO MOSFET Datasheet

Please refer to our web page http://www.trinamic.com.