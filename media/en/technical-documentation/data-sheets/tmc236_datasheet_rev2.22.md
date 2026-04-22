<!-- lastmod 2023-08-03 -->
## TMC236B DATASHEET

Highly efficient SPI or Classic Analog Interface Stepper Driver for Two-Phase Bipolar Motors with full set of protection &amp; diagnostics.

## APPLICATIONS

Replace Classic Bipolar Driver ICs Office Automation Printer and Scanner ATM, Cash recycler POS CCTV, Security Antenna Positioning Pumps and Valves Lab Automation Liquid Handling Medical

## DESCRIPTION

The  TMC236  driver  for  two-phase  stepper motors  offers  a  competitive  feature  set, including 16x micro-stepping and digital or analog current control. Standard SPI™ and communication via external analog &amp; digital signals are available. The TMC236 is a multichip-package, integrating eight LowRDS-ON high efficiency MOSFETs for motor currents  up  to  1.5A  (1.1A  RMS)  and  up  to 36V.  Integrated  protection  and  diagnostic features support robust and reliable operation. High integration and small form factor enable  miniaturized designs  with low  external  component  count  for  costeffective and highly competitive solutions .

<!-- image -->

<!-- image -->

<!-- image -->

## FEATURES AND BENEFITS

High Current up to 1500mA and 1000mA at 105°C

Voltage Range 7 V… 36 V DC

3.3 V or 5 V for digital part

SPI &amp; External Analogue / Digital Signals

Microstep Resolution 16 microsteps using internal DACs

Low Power Dissipation via low RDS-ON power stage

Protection : overvoltage, overtemperature &amp; short circuit

Diagnostics : overcurrent, open load, 2 level overtemperature

Mixed Decay for smooth motor operation

Slope Control for reduced electromagnetic emissions

Current Control for cool motor and driver

Standby and Shutdown Mode

Optical  Inspectable  Package 10x10mm  Standard  TQFP-44 package

## BLOCK DIAGRAM

<!-- image -->

## APPLICATION EXAMPLES:  HIGH POWER -SMALL SIZE

The  TMC236B  scores  with  its  classic  interface  and  high  efficiency  allowing  a  standard  package operating up to 105°C environment without heat slug, and a versatility that covers a wide spectrum of applications  and  motor  sizes.  The  TMC236B  is  the  latest  variant  of  the  TMC236  family,  offering enhanced MOSFETs with lower RDSon than the preceding  TMC236A  version.  It  is  pin  and  function compatible to the TMC246B, that additionally offers StallGuard for sensorless homing. The TMC239 and TMC249 offer the same functionality for higher motor currents up to 4A RMS (7A max.).

## APPLICATION EXAMPLES

## COMPACT DESIGN FOR UP TO 3 MOTORS USING SPI INTERFACE

OFFLOAD THE MOTION CONTROL FUNCTION TO TRINAMICS TMC429. GET A COMPETITIVE DESIGN FOR MULTIPLE MOTORS!

By offloading the motion-control function to the TMC429, up to three motors can be operated reliably with very little demand for service from the microcontroller.

<!-- image -->

## MINIATURIZED DESIGN WITH SIMPLE DIGITAL DRIVER CONTROL

## BENEFIT FROM A LARGE CURRENT CONTROL RANGE VIA ANALOG INPUTS!

The TMC246/TMC236 is controlled via SPI bus. The microcontroller initializes the chip and writes control parameters, mode bits, and values for coil currents in the driver chip. Analog A/B inputs allow for a large current control range.

<!-- image -->

## MINIATURIZED DESIGN FOR STANDALONE MODE

## REPLACE BIPOLAR DRIVER BY A MODERN CMOS DRIVER. USE NEW HARDWARE AND KEEP YOUR SOFTWARE INVEST!

The TMC246/TMC236 is controlled by analog current control signals and digital phase signals. Especially for lower speeds inimitable smoothness will be achieved with TRINAMICs low noise chopper.

<!-- image -->

## ORDER CODES

| Order code   | Description                           | Size         |
|--------------|---------------------------------------|--------------|
| TMC236B-PA   | 1.5 A stepper driver with SPI, TQFP44 | 10 x 10 mm 2 |

## TABLE OF CONTENTS

| 1       | KEY CONCEPTS                                                               | 4                                      | 10.4   | PULL -UP RESISTORS ON UNUSED I NPUTS POWER SUPPLY SEQUENCING   | 28   |
|---------|----------------------------------------------------------------------------|----------------------------------------|--------|----------------------------------------------------------------|------|
| 1.1     | ADVANCED FEATURES                                                          | 5                                      | 10.5   | CONSIDERATIONS                                                 | 28   |
| 1.2     | CONTROL I NTERFACES                                                        | 5                                      | 10.6   | SCHEMATIC AND LAYOUT EXAMPLES                                  | 29   |
| 2       | PIN ASSIGNMENTS                                                            | 6                                      | 11     | APPLICATION NOTES                                              | 30   |
| 2.1     | PACKAGE OUTLINE                                                            | 6                                      | 11.1   | EXTENDING THE MICROSTEP RESOLUTION                             | 30   |
| 2.2     | SIGNAL DESCRIPTIONS                                                        | 6                                      | 11.2   | SYNCHRONIZING THE CHOPPER CLOCK                                | 31   |
| 3       | SPI INTERFACE                                                              | 8                                      | 11.3   | OPERATING DC MOTORS                                            | 31   |
| 3.1     | BUS SIGNALS                                                                | 8                                      | 12     | ABSOLUTE MAXIMUM RATINGS                                       | 33   |
| 3.2     | MOTOR COIL CURRENT SETTING VIA SPI                                         | 9                                      | 13     | ELECTRICAL CHARACTERISTICS                                     | 34   |
| 3.3     | BASE CURRENT CONTROL MODE VIA INA /                                        | 9                                      | 13.1   | OPERATIONAL RANGE                                              | 34   |
| 3.4     | INB IN SPI MODE CONTROLLING POWER DOWN VIA THE SPI                         |                                        | 13.2   | DC SPECIFICATIONS                                              | 34   |
|         | I NTERFACE                                                                 | 11                                     | 13.3   | AC SPECIFICATIONS                                              | 36   |
| 3.5     | OPEN LOAD DETECTION                                                        | 11                                     | 13.4   | THERMAL PROTECTION                                             | 36   |
| 3.6     | STANDBY AND SHUTDOWN MODE                                                  | 11                                     | 13.5   | THERMAL CHARACTERISTICS                                        | 36   |
| 3.7     | POWER SAVING                                                               | 11                                     | 13.6   | TYPICAL POWER DISSIPATION                                      | 37   |
| 3.8     | BUS TIMING                                                                 | 12                                     | 14     | PACKAGE MECHANICAL DATA                                        | 38   |
| 3.9     | USING THE SPI I NTERFACE WITH ONE OR MULTIPLE DEVICES                      | 12                                     | 14.1   | DIMENSIONAL DRAWINGS                                           | 38   |
| 3.10    | SPI FILTER                                                                 | 12                                     | 14.2   | PACKAGE CODE                                                   | 38   |
| 4       | CLASSICAL NON-SPI CONTROL MODE                                             |                                        | 15     | DISCLAIMER                                                     | 39   |
|         | (STANDALONE MODE)                                                          | 13                                     | 16     | ESD SENSITIVE DEVICE                                           | 39   |
| 4.1     | PIN FUNCTIONS IN STANDALONE MODE                                           | 13                                     | 17     | DESIGNED FOR SUSTAINABILITY                                    | 39   |
| 4.2     | INPUT SIGNALS FOR MICROSTEP CONTROL                                        | 13                                     | 18     | TABLE OF FIGURES                                               | 40   |
| 5       | CURRENT SETTING                                                            | 14                                     | 19     | REVISION HISTORY                                               | 41   |
| 5.1     | SENSE RESISTOR FOR CURRENT SETTING RESISTOR R SH FOR HIGH SIDE OVERCURRENT | 14                                     | 20     | REFERENCES                                                     | 41   |
| 5.2     | DETECTION                                                                  | 14                                     |        |                                                                |      |
| 6       | CHOPPER OPERATION                                                          | 16                                     |        |                                                                |      |
| 6.1     | MIXED DECAY MODE                                                           | 16                                     |        |                                                                |      |
| 6.2 6.3 | CHOPPER FREQUENCY CPU CONTROLLED LOW NOISE VOLTAGE                         | 17                                     |        |                                                                |      |
|         | MODE PWM ADAPTING THE SINE WAVE FOR SMOOTH                                 | 18                                     |        |                                                                |      |
| 6.4     | MOTOR OPERATION                                                            | 20                                     |        |                                                                |      |
| 6.5     | BLANK TIME                                                                 | 21                                     |        |                                                                |      |
| 7       | SLOPE CONTROL                                                              | 22                                     |        |                                                                |      |
| 8       | PROTECTION FUNCTIONS                                                       | 23                                     |        |                                                                |      |
| 8.1     | OVERCURRENT PROTECTION AND DIAGNOSTICS                                     | OVERCURRENT PROTECTION AND DIAGNOSTICS |        |                                                                |      |
| 8.2     | OVERTEMPERATURE PROTECTION AND                                             | 23                                     |        |                                                                |      |
| 8.3     | DIAGNOSTICS OVERVOLTAGE PROTECTION AND ENN PIN                             | 23                                     |        |                                                                |      |
|         |                                                                            | 24                                     |        |                                                                |      |
| 9       | MOVING THE MOTOR                                                           | 25                                     |        |                                                                |      |
| 10      | LAYOUT CONSIDERATIONS                                                      | 26                                     |        |                                                                |      |
| 10.1    | THERMAL PROPERTIES                                                         | 26                                     |        |                                                                |      |
| 10.2    | GROUNDING                                                                  | 26                                     |        |                                                                |      |

## 1 Key Concepts

Figure 1.1 TMC236 block diagram

<!-- image -->

The TMC236 is a dual full bridge driver IC for bipolar stepper motor control applications. The chip is realized  in  a  HVCMOS  technology  and  integrates  eight  separate  low-RDSon  high  efficiency  trench MOSFETs in a multichip-package. A 1.1A RMS driver can be realized in the size of a stamp.

The TMC236 motor driver implements advanced features which are characteristic to Trinamic products. These features contribute toward precision, energy efficiency,  reliability, smooth motion, and cooler operation in stepper motor applications.

In  addition  to  these  performance  enhancements,  Trinamic  motor  drivers  also  offer  safeguards  to detect and protect against short circuit, overtemperature, overvoltage, and undervoltage conditions for enhancing safety and recovery from equipment malfunctions.

## 1.1 Advanced Features

| Current Control               | Current control serves a cool driver and motor. Internal DACs allow microstepping as well as smart current control. Its low power dissipation makes the TMC236 an optimum choice for drives, where a high reliability is desired.                                                                                                                                                      |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Microstepping via SPI         | Easy to use digital control of microstepping. After choosing the desired microstep resolution the microcontroller sends digital values for each microstep current via SPI. DACs and comparators convert these digital values to analog signals for coil currents. This way, every microstep is initialized and controlled by the microcontroller. The TMC236 serves for the execution. |
| Mixed Decay                   | Mixed decay can be used for smoother operation.                                                                                                                                                                                                                                                                                                                                        |
| Low Noise Chopper             | The TMC236 allows implementing a low noise voltage PWM chopper by two microcontroller PWM outputs using its simple standalone mode. This way, a motor can be moved very smoothly at high microstep resolution without any noise.                                                                                                                                                       |
| Slope Control                 | Programmable slope control reduces electromagnetic emissions.                                                                                                                                                                                                                                                                                                                          |
| Oscillator and Clock Selector | Oscillator and clock selector provide the system clock from the on- chip oscillator or an external source.                                                                                                                                                                                                                                                                             |

## 1.2 Control Interfaces

There  are  two  control  interfaces  from  the  motion  controller  to  the  motor  driver:  the  SPI  serial interface and the classical analog interface.

## 1.2.1 SPI Interface

The SPI interface is used to write control information to the chip and read back status information. This interface must be used to initialize parameters and modes necessary to enable driving the motor. This interface may also be used for directly setting the currents flowing through the motor coils. The motor can be controlled through the SPI interface alone.

The SPI interface is a bit-serial interface synchronous to a bus clock. For every bit sent from the bus master  to  the  bus  slave,  another  bit  is  sent  simultaneously  from  the  slave  to  the  master. Communication between an SPI master and the TMC236 slave always consists of sending one 12-bit command word and receiving one 12-bit status word.

The SPI command rate typically corresponds to the microstep rate at low velocities. At high velocities, the  rate  may  be  limited  by  CPU  bandwidth  to  10,000  to  100,000  commands  per  second,  so  the application may need to change to fullstep resolution.

## 1.2.2 Classical Non-SPI Control Mode (Standalone Mode)

The driver can be controlled by analog current control signals and digital phase signals.

## 2 Pin Assignments

## 2.1 Package Outline

Figure 2.1 TMC236 pin assignments

<!-- image -->

## 2.2 Signal Descriptions

| Pin   | Pin    | Function                                                                                                                                                  |
|-------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| AGND  | 44     | Analog ground (reference for SRA, SRB, OSC, SLP, INA, INB, SLP)                                                                                           |
| INA   | 42     | Analog current control phase A                                                                                                                            |
| INB   | 41     | Analog current control phase B                                                                                                                            |
| GND   | 17, 39 | Digital and power GND                                                                                                                                     |
| OSC   | 13     | Oscillator capacitor or external clock input for chopper                                                                                                  |
| OA1   | 2, 3   | Output and heat slug of high side P-channel transistors Tie to same net of N-channel output. Provide identical size heat slug on each of the pins with as |
| OA2   | 5, 6   |                                                                                                                                                           |
| OB1   | 31, 32 | much                                                                                                                                                      |
| OB2   | 28, 29 | area as possible.                                                                                                                                         |
| OA1   | 7, 8   | Output and heat slug of low side N-channel transistors Tie to same net of P-channel output. Provide identical size heat slug on each of the pins with as  |
| OA2   | 10, 11 |                                                                                                                                                           |
| OB1   | 26, 27 | much                                                                                                                                                      |
| OB2   | 23, 24 | area as possible.                                                                                                                                         |
| BRA   | 9      | Bridge A / B foot point. Tie to sense resistor using wide and straight                                                                                    |
| BRB   | 25     | trace.                                                                                                                                                    |
| SRA   | 12     | Bridge A / B current sense resistor input                                                                                                                 |

| Pin   |   Pin | Function                                                           |
|-------|-------|--------------------------------------------------------------------|
| SRB   |    22 | Tie to positive side of sense resistor.                            |
| SDO   |    14 | Data output of SPI interface (tri-state)                           |
| SDI   |    15 | Data input of SPI interface                                        |
| SCK   |    16 | Serial clock input of SPI interface                                |
| CSN   |    18 | Chip select input of SPI interface                                 |
| SPE   |    20 | Enable SPI mode (high active). Tie to GND for non-SPI applications |
| SLP   |    43 | Slope control resistor. Tie to GND for fastest slope               |
| ENN   |    19 | Device enable (low active) and overvoltage shutdown input          |
| ANN   |     1 | Enable analog current control via INA and INB (low active)         |
| BL1   |    21 | Digital blank time select                                          |
| BL2   |    33 | Digital blank time select                                          |
| VS    |     1 | Motor supply voltage                                               |
| VSA   |     4 | Supply voltage for bridge A/B.                                     |
| VSB   |    30 | Tie to VS voltage. Use wide trace for connection.                  |
| VCC   |    40 | 3.0 … 5.5V supply voltage for analog and logic circuits            |
| VT    |    35 | Short to GND detection comparator - connect to VS if not used      |

## 3 SPI Interface

To drive a motor in SPI mode, the TMC236 requires setting current absolute values and polarity for each microstep. The resulting curves for both coils shall describe a sine and a cosine wave. Toggling just the polarities gives fullstepping. The SPI interface also allows reading back status values and bits.

## 3.1 Bus Signals

The SPI bus on the TMC236 has five signals:

- SCK bus clock input
- SDI serial data input
- SDO serial data output
- CSN chip select input (active low)
- ENN enable input has to be active (low) in order to use SPI

The slave  is  enabled  for  an  SPI  transaction  by  a  low  on  the  chip  select  input  CSN.  Bit  transfer  is synchronous to the bus clock SCK, with the slave latching the data from SDI on the rising edge of SCK and driving data to SDO following the falling edge. The most significant bit is sent first. A minimum of 12 SCK clock cycles is required for a bus transaction with the TMC236.

If more than 12 clocks are driven, the additional bits shifted into SDI are shifted out on SDO after a 12-clock delay through an internal shift register. This can be used for daisy chaining multiple chips.

CSN must be low during the whole bus transaction. When CSN goes high, the contents of the internal shift  register  are  latched  into  the  internal  control  register  and  recognized  as  a  command  from  the master to the slave. If more than 12 bits are sent, only the last 12 bits received before the rising edge of CSN are recognized as the command.

The  SPI  data  word  sets  the  current  and  polarity  for  both  coils.  By  applying  consecutive  values, describing  a  sine  and  a  cosine  wave,  the  motor  can  be  driven  in  microsteps.  Every  microstep  is initiated by its own telegram. Please refer to the description of the analog mode for details on the waveforms required. The SPI interface timing is described in the timing section.

We recommend the TMC429 or TMC4361A to automatically generate the microstepping sequence and motor ramps for up to three motors.

## SERIAL DATA WORD TRANSMITTED TO TMC236

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

## SERIAL DATA WORD TRANSMITTED FROM TMC236

MSB TRANSMITTED FIRST

|   Bit | Name   | Function                      | Remark                                                 |
|-------|--------|-------------------------------|--------------------------------------------------------|
|    11 | -      | Always 0 for TMC236           | Not used for TMC236                                    |
|    10 | -      | Always 0 for TMC236           | Not used for TMC236                                    |
|     9 | -      | Always 0 for TMC236           | Not used for TMC236                                    |
|     8 | 1      | Always 1                      | Not used for TMC236                                    |
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

## 3.2 Motor Coil Current Setting via SPI

| Current Setting CA3..0 / CB3..0   | Percentage of Current   | TYPICAL TRIP VOLTAGE OF THE CURRENT SENSE COMPARATOR - INTERNAL REFERENCE OR ANALOG INPUT VOLTAGE OF 2V IS USED -   |
|-----------------------------------|-------------------------|---------------------------------------------------------------------------------------------------------------------|
| 0000                              | 0%                      | 0 V (bridge continuously in slow decay condition)                                                                   |
| 0001                              | 6.7%                    | 23 mV                                                                                                               |
| 0010                              | 13.3%                   | 45 mV                                                                                                               |
| ...                               | ...                     |                                                                                                                     |
| 1110                              | 93.3%                   | 317 mV                                                                                                              |
| 1111                              | 100%                    | 340 mV                                                                                                              |

## 3.3 Base Current Control Mode via INA / INB in SPI Mode

In SPI mode the IC can use an external reference voltage for each DAC. This allows the adaptation to different motors.

## Note

:

- -This Base Current Control Mode is enabled by tying pin ANN to GND.
- -A 2.0 V input voltage VIN gives full scale current of 100%, corresponding to the internal reference voltage.
- -The range for VIN is 0…3V. Min. 1 V recommended for best microstepping.
- -The trip voltage of the current sense comparator is determined by the input voltage VIN and the DAC current setting (see table above).

Figure 3.1 Relation between VIN and trip voltage of current sense comparator

<!-- image -->

## IN CASE A VARIABLE INPUT VOLTAGE V IN IS USED THE TYPICAL TRIP VOLTAGE IS CALCULATED:

VTRIP,A = 0.17 VINA  percentage SPI current setting A

VTRIP,B = 0.17 VINB  percentage SPI current setting B

## GENERATING INPUT VOLTAGE V IN

A maximum of 3.0V VIN is possible. Multiply the percentage of base current setting and the DAC table to get the overall coil current. It is advised to operate at a high base current setting, to reduce the effects of noise voltages. This feature allows a high-resolution setting of the required motor current using  an  external  DAC  or  PWM-DAC  (see  schematic  for  examples).  Consider  INA  and  INB  input resistance of typically 264kΩ.

Figure 3.2 External DAC and PWM-DAC

<!-- image -->

## 3.4 Controlling Power Down via the SPI Interface

<!-- image -->

Programming current value 0000 for both coils at a time clears the overcurrent flags and switches the TMC236 into a low current standby mode with coils switched off.

## 3.5 Open Load Detection

Open load is signaled when the IC is not able to reach the target current (trip point of comparator) within more  than  14 oscillator cycles. During overcurrent, undervoltage, or overtemperature conditions, the open load flags also become active. The flag has a purely informative character.

## Attention

Open load detection is disabled for each coil, while the coil current is set to 0000. In this condition the chopper is off, and the open load flag is read as inactive (0).

To detect an interruption of the connection to the motor, evaluate the open load flags during stand still at a position where both motor coils have a minimum current, or during low velocities only (e.g., for the first or last steps of a movement). The open load flags might also come active due to a torque loss of the motor, especially at high motor velocities, or when working with fullstepping or coarse microstep resolution.

## 3.6 Standby and Shutdown Mode

The  TMC236 offers  two  possibilities  for  reducing  power  consumption  under  special  conditions:  the standby mode and the shutdown mode.

## STANDBY MODE

- -The circuit automatically goes to standby on VCC undervoltage conditions.
- -Activate standby mode via the interface in SPI-mode and via the ENN pin in non-SPI mode.

Before  entering  standby  mode,  the  TMC236  switches  off  the  power  stage  and  the  outputs  go floating. In standby mode the oscillator becomes disabled, and the oscillator pin is held at a low state.

## SHUTDOWN MODE

- -The shutdown mode is used for a further reduction of the supply current.
- -The shutdown mode can be entered in SPI-mode by pulling the ENN pin high.
- -In shutdown mode additionally all internal reference voltages become switched off and the SPI circuit is held in reset.

## 3.7 Power Saving

The possibility to control the output current can dramatically save energy, reduce heat generation, and increase precision by reducing thermal stress on the motor and attached mechanical components. Just reduce motor current during stand still: A slight reduction of the coil currents to 70% of the current of the last step halves power consumption!

In typical applications a 50% current reduction during stand still is reasonable.

## 3.8 Bus Timing

The SPI interface operates completely asynchronous. It is clocked by SCK and CSN, only.  Figure 3.3 shows the timing parameters of an SPI bus transaction, and the table below specifies their values.

Figure 3.3 SPI Timing

<!-- image -->

## PROPAGATION TIMES

(3.0 V  VCC  5.5 V,  -40°C  Tj  150°C;  VIH  =  2.8V,  VIL = 0.5V; tr,  tf  =  10ns;  CL  =  50pF, unless otherwise specified)

| SPI Interface Timing                           | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   | AC-Characteristics clock period is t CLK   |
|------------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|--------------------------------------------|
| Parameter                                      | Symbol                                     | Conditions                                 | Min                                        | Typ                                        | Max                                        | Unit                                       |
| SCK frequency                                  | f SCK                                      | ENN = 0                                    | DC                                         | 1…5                                        | 8                                          | MHz                                        |
| SCK stable before and after CSN change         | t 1                                        |                                            | 50                                         |                                            |                                            | ns                                         |
| Width of SCK high pulse                        | t CH                                       |                                            | 100                                        |                                            |                                            | ns                                         |
| Width of SCK low pulse                         | t CL                                       |                                            | 100                                        |                                            |                                            | ns                                         |
| SDI setup time                                 | t DU                                       |                                            | 40                                         |                                            |                                            | ns                                         |
| SDI hold time                                  | t DH                                       |                                            | 50                                         |                                            |                                            | ns                                         |
| SDO delay time                                 | t D                                        | C L = 50pF                                 |                                            | 40                                         | 100                                        | ns                                         |
| CSN high to SDO high impedance                 | t ZC                                       | *)                                         | 50                                         |                                            |                                            | ns                                         |
| ENN to SCK setup time                          | t ES                                       |                                            | 30                                         |                                            |                                            | µs                                         |
| CSN high to OA/OB output polarity change delay | t PD                                       | **)                                        |                                            | 3                                          | t OSC + 4                                  | µs                                         |

- *) SDO is tri-stated whenever ENN is inactive (high) or CSN is inactive (high).

**) Whenever the PHA / PHB polarity is changed, the chopper is restarted for that phase. The chopper does not switch on, when the SRA resp. SRB comparator threshold is exceeded upon the start of a chopper period.

## 3.9 Using the SPI Interface with One or Multiple Devices

The SPI interface allows either cascading of multiple devices, giving a longer shift register, or working with a separate chip select signal for each device, paralleling all other lines. Even when there is only one device attached to a CPU, the CPU can communicate with it using a 16-bit transmission. In this case, the upper 4 bits are dummy bits. With two devices in a chain, a 24-bit transmission controls both.

## 3.10 SPI Filter

To prevent spikes from changing the SPI settings, SPI data words are only accepted, if their length is at least 12 bit. Shorter datagrams are ignored and will not modify register content.

## 4 Classical Non-SPI Control Mode (Standalone Mode)

The driver can be controlled by analog current control signals and digital phase signals.

## Proceed as follows:

- -Tie pin SPE to GND for enabling non-SPI mode. In non-SPI mode the SPI interface is disabled, and the SPI input pins have alternate functions.
- -The internal DACs are forced to 1111.

## 4.1 Pin Functions in Standalone Mode

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

## 4.2 Input Signals for Microstep Control

## Hint

When transferring these waves to SPI operation, note that the mixed decay bits are inverted when compared to standalone mode.

Figure 4.1 Analog control for standalone mode

<!-- image -->

## 5 Current Setting

## 5.1 Sense Resistor for Current Setting

Choose an appropriate sense resistor RS for setting the desired motor current.

## Basic information:

- -The maximum motor current is reached when the coil current setting is programmed to 1111.
- -This results in a current sense trip voltage of 0.34V if the internal reference or a reference voltage of 2V is used (up to 3V possible). (Refer to chapter 3.3 for more information about current setting in SPI mode.)
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
| 0.43  | 790mA   |
| 0.39  | 870mA   |
| 0.33  | 1030mA  |
| 0.27  | 1259mA  |
| 0.22  | 1545mA  |

## 5.2 Resistor RSH for High Side Overcurrent Detection

The TMC236 detects an overcurrent to ground, when the voltage between VS (supply voltage) and VT (threshold voltage) exceeds 150mV. The high side overcurrent detection resistor should be chosen in a way  that  100mV  voltage  drop  are  not  exceeded  between  VS  and  VT,  when  both  coils  draw  the maximum current. In a microstep application, this is the case when sine and cosine wave have their highest sum, i.e., at 45 degrees electrical angle. This corresponds to 1.41 times the maximum current setting for one coil. In a fullstep application it equals the double coil current.

## IN A MICROSTEP APPLICATION:

RSH = 0.1V / (1.41  I max )

## IN A FULLSTEP APPLICATION:

RSH = 0.1V / (2  I max )

RSH:

High side overcurrent detection resistor

I max :

Maximum coil current

If higher resistance values are desired, a voltage divider in the range of 10  to 100  can be used for VT. This might also be desired to limit the peak short to GND current, as described in the following chapter.

A careful PCB layout is required for the sense resistor traces and for the RSH traces.

## 5.2.1 Making the Circuit Short Circuit Proof

In most applications, a short circuit does not describe only one special condition. It typically involves inductive,  resistive,  and  capacitive  components.  Worst  events  are  unclamped  switching  events, because huge voltages can build up in inductive components and result in a high energy spark going into the driver, which can destroy the power transistors.

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

Figure 5.1 Schematic with RSH=RSA=RSB

<!-- image -->

## Example:

A 0.33 Ohms sense resistor allows for roughly 1 A motor coil current.

A high side short detection resistor of 0.33  Ohms limits maximum high side transistor current to typically 4A during  a  short  circuit  condition.  The schematic shows the modifications to be done.

The effectiveness of the steps described  above  should  be  tested  in the given application!

## 6 Chopper Operation

The currents through both motor coils are controlled using a chopper. The TMC236 uses a quiet fixed frequency  chopper.  Both  coils  are  chopped  with  a  phase  shift  of  180  degrees.  The  chopper  cycles through three phases: on, fast decay, and slow decay.

On phase: Current flows in target direction

<!-- image -->

## Figure 6.1 Chopper phases

Fast decay switches off both upper transistors and uses the body diodes to re-circulate current back to the supply, while enabling the lower transistor opposite to the selected polarity. Slow decay always enables both lower side transistors.

When the polarity  is  changed  on  one  bridge,  the  PWM  cycle  on  that  bridge  becomes  restarted  at once.

## 6.1 Mixed Decay Mode

The mixed decay option is realized as a self-stabilizing system, by shortening the fast decay phase, if the ON phase becomes longer. Mixed decay can be used continuously on, continuously off, or in a mixed fashion during periods of falling absolute current, only.

To reduce motor resonance, enable mixed decay for each coil individually during the second half of each microstepping half-wave, when the current is meant to decrease.

MIXED DECAY IN APPLICATIONS WITH HIGH RESOLUTION OR LOW INDUCTIVITY MOTORS

In  applications  requiring  high  resolution,  or  using  low  inductivity  motors,  the  mixed  decay  mode should be enabled continuously to reduce the minimum motor current which can be achieved. This gives the smoothest current wave.

USING MIXED DECAY CONTINUOUSLY OR WITH HIGH INDUCTIVITY MOTORS AT LOW SUPPLY VOLTAGE

If mixed decay mode is continuously on or high inductivity motors are used at low supply voltage, it is  advised  to  raise  the  chopper  frequency  to  minimum  36 kHz,  because  the  half  chopper  frequency could become audible.

With low velocities or during standstill, mixed decay should be switched off.

Fast decay phase: Current flows back into power supply

<!-- image -->

Slow decay phase: Current re-circulation

<!-- image -->

Figure 6.2 Chopper cycle showing use of mixed decay with falling current

<!-- image -->

## 6.2 Chopper Frequency

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

## 6.3 CPU controlled Low Noise Voltage Mode PWM

This chapter describes an optional chopper method requiring two CPU PWM outputs.

The TMC236 uses a cycle-by-cycle based chopper system, because it brings the best performance over a wide range of velocities. It regulates the current by terminating each chopper cycle as soon as the target  current  has  been  reached.  This  direct  current  regulation  provides  good  dampening  of  motor resonance, low motor power loss and automatic adaptation to the specific motor. On the other hand, chopper stability requires good decoupling between both motor coils, and it needs a precise layout of the high current paths. Instabilities caused by magnetic coupling in the motor or by coupling of the coil current regulators due to electric coupling can lead to chopper noise and fine vibrations. Under normal conditions, these will not do any harm. In applications, where the motor moves very slowly or where precise standstill with low mass on the motor axis is required, a voltage PWM chopper is a good choice.

The  low  noise  feed  forward  chopper  principle  uses  a  voltage  PWM  controlled  driving  rather  than current  controlled  driving.  This  is  possible  because  the  stepper  motor  has  a  certain  coil  resistance. This resistance converts an externally applied voltage to current. As long as the motor velocity is low, back  EMF  caused  by  the  motor  rotation  does  not  need  to  be  taken  into  account.  At  increasing velocities, the motors back EMF has an increasing influence and influences coil current. This can be compensated by increasing the driver voltage with increasing velocity. Effects like motor temperature dependency of the coil resistance should be considered, in case the motor operates in an increased temperature range. The described compensation principle can be realized in a completely feed-forward way, based on the motor data, or by measuring the effective current and adding a regulation loop.

The chopper principle described generates a certain motor voltage by toggling each motor phase with a certain PWM frequency. Therefore, the motor full bridges either switch on the motor current in one direction or in the opposite direction.

This way, the duty cycle of toggling the coil polarity produces a certain effective voltage on the coils:

- -A 50 percent duty cycle gives a mean current of zero.
- -A higher or lower duty cycle gives a positive or negative current.
- -A high PWM resolution will bring a high microstep resolution.

Figure 6.3 Voltage PWM generates motor current

<!-- image -->

## 6.3.1 Calculating the PWM for Low Noise Chopper

A microcontroller with PWM outputs can be used for generating the two PWMs required to drive the motor. For a 256 microstep resolution a PWM resolution of 9 to 10 bit is required. Assuming a target

chopper frequency of roughly 20 kHz, a base clock frequency of 20 MHz (=2 10  x 20 kHz) is required to yield  a  10-bit  PWM.  A  16 MHz  clock  frequency  will  allow  realizing  a  9-bit  PWM  with  31 kHz,  or  a resolution of 800 PWM steps with 20 kHz. This is a feasible value for most standard 8 bit or better microcontrollers.

Basically, one motor coil is driven with a PWM, which duty cycle is modulated using a sine wave. The second coil with a cosine modulated PWM. Assuming, that the system supply voltage would exactly match the motor voltage required for nominal current, the PWM duty cycle will be altered between 100% for maximum positive current and 0% for maximum negative current. As this is not a typical constellation, the PWM modulation required to match the motor needs to be calculated.

The PWM modulation is calculated as:

$$𝑃𝑊𝑀𝐴𝑚𝑝𝑙 = 𝐼𝐶𝑂𝐼𝐿𝑝𝑒𝑎𝑘 𝑅𝐶𝑂𝐼𝐿 (𝑉 𝑀 -𝑉𝐵𝐸𝑀𝐹)$$

PWMAmpl   PWM amplitude required to reach the nominal motor current. Half of this amplitude is applied in positive direction (additional to 50% duty cycle), and half of it is applied in negative direction (subtracted from 50% duty cycle)

I COILpeak

Nominal peak coil current of the motor, i.e., ICOILRMS * 1.41

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

## 6.3.2 Hardware Setup for Low Noise Chopper

The TMC236 provides a standalone mode, which allows direct control of coil polarity using a digital signal. Further, the coil current can be controlled using an analog voltage in the range 0 V… 3 V. As current control is done by PWM duty cycle, the integrated PWM based analog current control of the

IC is not used. Therefore, in principle it would be possible to work without sense resistors.

We recommend using the analog current limit as a safety feature. Further it can be used for allowing a fallback to classical fullstepping at higher velocity (to also allow faster movements):

During voltage PWM mode the analog current control can be used to limit the motor current in case of  an  error.  Therefore,  the  current  limit  must  be  set  at  least  20%  to  30%  higher  than  the  desired maximum motor current for  PWM  operation  (peak  current  value  plus  additional  ripple).  The  mixed decay mode must be switched off (MDAN=MDBN=VCC) because it would interfere with voltage PWM operation. Both motor coil limits can be set to the same analog current limiting value: for a safety limit and for a change to fullstepping.

In fullstepping switching to a lower value may be desired in order to match motor RMS current.

The processor controlled  PWM uses  the  polarity  inputs  (PHA,  PHB)  for  both  coils  to  control  motor PWM.

Figure 6.4 Controlling the driver with two PWMs in standalone mode

<!-- image -->

## 6.4 Adapting the Sine Wave for Smooth Motor Operation

An optimization of the sine wave improves microstepping and vibration for both, mixed decay mode and voltage PWM mode. Despite reaching the target current in each chopper cycle, both, the slow decay and the fast decay cycle reduce the current by some amount. Especially the fast decay cycle has a larger impact. Thus, the medium coil current always is a bit lower than the target current. This leads to a flat line in the current shape flowing through the motor. It can be corrected, by applying an offset  to  the  sine  shape.  In  mixed  decay  operation  via  SPI,  an  offset  of  1  does  the  job  for  most motors.

<!-- image -->

Coil current does not have optimum shape

Target current corrected for optimum shape of coil current

<!-- image -->

Figure 6.5 Adapting sine wave for smooth motor operation

Try out the best wave offset for the target motor to yield equidistant microstepping and vibration-free motion.

## 6.5 Blank Time

The  TMC236  uses  a  digital  blanking  pulse  for  the  current  chopper  comparators.  This  prevents  the driver to react to current spikes, which can occur during switching action due to capacitive loading, by terminating the chopper cycle.

The lowest possible blanking time covering all spikes gives the best results for microstepping. A long blank time leads to a long minimum turn-on time, thus giving an increased minimum PWM duty cycle and  with  this  an  increased  lower  limit  for  the  coil  current.  This  negatively  impacts  microstep precision.

## Hint

The blank time should cover both, switch time of driver MOSFETs and inductive ringing in the sense resistors and layout and any current ringing in the coils resulting from capacitive loads, e.g., in motor coil capacity or cable capacity. Choose blank time as low as possible to yield this.

The TMC236 allows adapting the blank time to the load conditions and to the selected slope in four steps:

## BLANK TIME SETTINGS

| BL2   | BL1   | Typical blank time   | Remarks                                                                 |
|-------|-------|----------------------|-------------------------------------------------------------------------|
| GND   | GND   | 0.6 µs               | Very short. May require additional filtering on SRA and SRB.            |
| GND   | VCC   | 0.9 µs               | Works well in low inductivity layouts.                                  |
| VCC   | GND   | 1.2 µs               | Default for most applications.                                          |
| VCC   | VCC   | 1.5 µs               | May be used with slow bridges or high sense resistor trace inductivity. |

## 7 Slope Control

The driver  offers  a  motor  output  slope  control  to  yield  low  electromagnetic  emission.  The  outputvoltage slopes of the full bridges are controlled by a constant current gate charge / discharge of the internal  driver  MOSFETs.  The  slope  is  set  by  a  single  resistor:  a  reference  current  is  generated  by internally pulling the SLP-Pin to 1.25V via an integrated 4.7K  series resistor. The resulting current is used to generate the current for switching on and off the power transistors and with this results in a certain switching slope. The SLP-pin can directly be connected to AGND for the fastest output-voltage slope (respectively maximum output current). The following table and graph depict typical behavior measured from 15% of output voltage to 85% of output voltage. However, the actual values measured in an application depend on multiple parameters and may stray in a user application.

| t SLP typ.   | R SLP   | Recommendation                                                                                      |
|--------------|---------|-----------------------------------------------------------------------------------------------------|
| 25ns         | 0       | Lowest power dissipation for high chopper frequency                                                 |
| 30ns         | 2.2K   |                                                                                                     |
| 60ns         | 10K    | Choice of low power dissipation for high motor current and reduced slopes for lower emission        |
| 110ns        | 22K    | Low emission                                                                                        |
| 245ns        | 51K    | Further reduced emission slope with additional 1nF … 2.2nF capacitor filtering at the motor outputs |
| 460ns        | 100K   | Lowest emission, higher power dissipation. <800mA motor current recmd.                              |

## Note

There is  a  tradeoff  between  reduced  electromagnetic  emissions  (slow  slope)  and  efficiency,  due  to dynamic  losses  occurring  within  each  switching  event.  With  slow  slopes,  an  increased  chopper frequency  drastically  increases  power  dissipation,  while  the  effect  is  low  with  fast  slopes  (&lt;100ns). Typical emission optimized slope times range between 50ns and 200ns. For lowest power dissipation, slopes can be reduced to roughly 25ns.

For  applications  where  electromagnetic  emission  is  extremely  critical,  add  LC  (or  capacitor  only) filtering on the motor connections. This dampens the effect of MOSFET body diode reverse recovery ringing,  occurring  within  each  power  MOSFET  stage  following  a  diode  conduction.  For  these applications emission is even lower, if only slow decay operation is used.

Figure 7.1 External RSLP controls switching slopes

<!-- image -->

## 8 Protection Functions

## 8.1 Overcurrent Protection and Diagnostics

## 8.1.1 Low Side Overcurrent

The TMC236 uses the current sense resistors on the low side to detect an overcurrent.  If a voltage above 0.61 V is detected after expiration of the blanking time, the PWM cycle is terminated at once and all transistors of the bridge are switched off for the rest of the PWM cycle. The error counter is increased by one. If the error counter reaches 3, the bridge remains switched off for 63 PWM cycles and the error flag is read as active .

## CLEARING ERROR FLAG AND COUNTER

Clear the error condition in advance by clearing the error flag.

The  error  counter  also  becomes  cleared,  whenever  there  are  more  than  63  PWM  cycles  without overcurrent. There is one error counter for each of the low side bridges, and one for the high side.

## Note

To suppress spikes occurring during switching, the overcurrent detection is inactive during the blank pulse time for each bridge.

## 8.1.2 Short to Ground and Overcurrent Detection

The high side comparator detects a short to GND or an overcurrent, whenever the voltage between VS and VT becomes higher than 0.15 V at any time (except for the blank time period which is logically ORed for both bridges). If a voltage higher than 0.15 V is detected between VS and VT, all transistors become switched off for the rest of the PWM cycle, because the bridge with the failure is unknown.

Determine which bridge causes the high-side overcurrent, by selectively switching on only one of the bridges with each polarity (therefore the other bridge should remain programmed to 0000).

## CLEARING ERROR FLAGS

The overcurrent flags can be cleared by disabling and re-enabling the chip either via the ENN pin or by sending a telegram with both current control words set to 0000.

## 8.2 Overtemperature Protection and Diagnostics

The circuit switches off all output power transistors during an over temperature condition. The over temperature flag should be monitored to detect this condition.  The circuit  resumes  operation after cool-down below the temperature threshold. However, operation near the over temperature threshold should be avoided if a high lifetime is desired.

## Attention

The overtemperature protection cannot fully protect the circuit in case of thermally insufficient design or  a  defect  of  a  motor  coil.  It  mainly  is  intended  to  detect  and  protect  against  heat  accumulation occurring  due to high environment temperature. A more sensitive protection can be realized when checking the pre-warning flag and reacting to it by reducing motor current.

## 8.3 Overvoltage Protection and ENN Pin

Quick motor deceleration from high velocity can result in high energy being fed back from the motor and mechanics to the power supply. This might endanger the TMC236 or other circuitry on the PCB which is more sensitive to higher voltage. The TMC236 allows disabling the driver stage in case of excessive voltage to reduce the danger of voltage fed back:

The enable pin ENN provides a fixed threshold of ½ VCC to allow a simple overvoltage protection up to 40V using an external voltage divider (see schematic).

Figure 8.1 Overvoltage protection example for limiting to 30V

<!-- image -->

However,  this  scheme  does  not  prevent  the  supply  voltage  being  pumped  up,  when  the  motor becomes rotated at a very high velocity where its back EMF exceeds the supply voltage rating, as the MOSFETs conduct its back-EMF to the supply rails.

## 9 Moving the Motor

To move the motor, send a sequence of current patterns to the driver via its SPI interface (graphical example: see 4.2). Each pattern moves the motor by one microstep. The following example shows a simple microcontroller code. An option is to use an integrated motion controller like the TMC429 or TMC4361A to automatically generate microstep patterns and motion ramps.

## SINE WAVE TABLE

- -The sine wave table below implements 4-bit microstepping.
- -The absolute values are left-shifted by one bit.
- -Bit 0 is the sign bit (phase direction bit).
- -Bit 5 is the mixed decay bit. It is set when the absolute value is falling.
- -Optionally set mixed decay constant off (0), or constant on (1) using an AND or OR instruction

## FUNCTION

The function  in  the  example  below  generates  the  microsteps.  Values  are  read  from  the  sine  wave table and output to the TMC236 (via SPI interface). Call this function with the ccw parameter set to 1 (to step in negative direction) or with ccw set to 0 (to step in positive direction). The function can be called in a timer interrupt, to generate equidistant time intervals.

## SENDING VALUES VIA SPI

Set the CS line low and send out the value of io by SPI (MSB first). Thereafter, set the CS line high again. Send out each microstep unless the interface is still busy. In case the interface is still busy, the transmission  can  be  skipped.  This  way,  the  update  rate  adapts  to  the  available  SPI  bandwidth  at higher velocity. It does not significantly affect the motor performance with &gt;1Mbit bandwidth.

## EXAMPLE FOR GENERATING MICROSTEPS

```
unsigned char sinus_tab [ 64 ]= { 0x00 , 0x02 , 0x06 , 0x08 , 0x0c , 0x0e , 0x10 , 0x14 , 0x16 , 0x18 , 0x18 , 0x1a , 0x1c , 0x1c , 0x1e , 0x1e , 0x3e , 0x3e , 0x3e , 0x3c , 0x3c , 0x3a , 0x38 , 0x38 , 0x36 , 0x34 , 0x30 , 0x2e , 0x2c , 0x28 , 0x26 , 0x22 , 0x01 , 0x03 , 0x07 , 0x09 , 0x0d , 0x0f , 0x11 , 0x15 , 0x17 , 0x19 , 0x19 , 0x1b , 0x1d , 0x1d , 0x1f , 0x1f , 0x3f , 0x3f , 0x3f , 0x3d , 0x3d , 0x3b , 0x39 , 0x39 , 0x37 , 0x35 , 0x31 , 0x2f , 0x2d , 0x29 , 0x27 , 0x23 }; volatile unsgined char PhaseCount = 0 ; // Call this procedure for each step and send out the resulting IO word to // the TMC24x/TMC23x SPI interface void step ( char ccw ) { unsigned integer MixedDecayXOR = 0 , io ; if(! ccw ) { PhaseCount ++; } else { //Reverse the "Mixed Decay" bits when running in CCW direction PhaseCount --; MixedDecayXOR = 0x820 ; } io = (( sinus_tab [ PhaseCount & 63 ]<< 6 | sinus_tab [( PhaseCount + 16 ) & 63 ]) ^ MixedDecayXOR ); }
```

## 10 Layout Considerations

For optimal operation of the circuit a careful board layout is important, because of the combination of high current chopper operation coupled with high accuracy threshold comparators. Power dissipation of the IC to the PCB also has to be considered.

## 10.1 Thermal properties

Connect all pins of the PQFP package for each of the double/quad output pins externally. Each two of these output pins should be treated as if they were fused to a single wide pin. Each two pins are used  as  cooling  fin  for  one  of  the  eight  integrated  output  power  transistors.  Use  massive  motor current traces on all these pins and multiple vias, if the output trace is changed to a different layer near the package.

## Attention

Ensure  a  symmetrical  connection  of  all  motor  outputs  with  large  and  identical  size  copper  areas located  directly  at  the  pads  for  cooling  of  the  power  MOSFETs.  Otherwise,  proper  function  of  the thermal protection cannot be guaranteed!

A multi-layer PCB shows superior thermal performance, because it allows usage of a massive GND plane, which will act as a heat spreader. The heat will be coupled vertically from the output traces to the  GND  plane  since  vertical  heat  distribution  in  PCBs  is  quite  effective.  Heat  dissipation  can  be improved by attaching a heat sink to the package directly.

## 10.2 Grounding

Please pay special attention to massive grounding. A single massive ground plane provides the best solution. The schematic highlights the high current paths which shall be routed separately, in case a GND plane cannot be realiz ed, so that the chopper current does not flow through the system's GND interconnections.  Tie  the  pins  AGND  and  GND  to  the  GND  plane,  and  directly  connect  both  sense resistors'  GND  side  to  GND  plane .  The  schematic  highlights  the  high  current  path  and  shows  the required symmetry. Optional short protection / motor cable break protection elements are shown.

Figure 10.1 Sense resistor grounding and protection components

<!-- image -->

## 10.3 Selection of Additional Components

Add  supply  filtering  capacitors  located  near  to  the  boards  power  supply  input  and  small  ceramic capacitors  near  to  the  power  supply  connections  of  the  TMC236.  Electrolytic  capacitors  on  the  VS

supply should be low-ESR types. Use low inductance sense  resistors or add a ceramic capacitor in parallel to each resistor to avoid high voltage spikes.

In case of long motor cables, it may be beneficial to introduce additional RC-filtering into the SRA / SRB line (see Figure 10.2) to prevent spikes from triggering the short circuit protection or the chopper comparator.

## Attention

Long or thin traces to the sense resistors may add substantial resistance and thus reduce the output current. Further, resulting inductivity will lead to poor chopper behavior.

This is valid  for the high  side shunt resistor, too.  Place the  optional shunt resistor  voltage divider near the TMC236. This avoids voltage drop in the VS trace adding up to the measured voltage.

Figure 10.2 Grounding and power routing

<!-- image -->

## 10.4 Pull-up Resistors on Unused Inputs

The digital inputs all have integrated pull-up resistors, except for the ENN input, which is in fact an analog  input.  Thus,  no  external  pull-up  resistors  are  required  for  unused  digital  inputs  which  are meant to be positive.

## 10.5 Power Supply Sequencing Considerations

Upon power up, the driver initializes and switches off all bridge power transistors. The minimum VCC supply voltage for this is 1.0 V and the VS supply voltage has to be at least 5.0 V. When VS goes up with  VCC  at  0  V,  a  medium  current  temporary  cross  conduction  of  the  power  stage  can  result  at supply  voltages  between  2.4V  and  4.8V.  In  this  voltage  range,  the  upper  power  MOSFETs  conduct, while  the  gates  of  the  lower  power  MOSFETs  are  still  floating.  Due  to  the  MOSFET  gate  to  drain capacity,  the  lower  MOSFETs  partially  can  start  conducting,  which  in  turn  leads  to  a  bridge  crossconduction with its peak at VS=4.8V. Due to the low gate voltages, current is limited as determined by the MOSFETs properties and sense resistor values.

## Attention

Powering up VS with VCC near 0V leads to a high temporary current flow in the VS supply range of 2.4V to 5V due to parasitic cross conduction of the power stage.

While this parasitic conduction of the power stage  does no harm to the driver, it may hinder the power supply from coming up properly, depending on the power supply start up behavior.

## PREVENT CROSS CONDUCTION UPON POWER-UP

Figure 10.3 Optimum / Latest VCC power up avoiding significant power draw

<!-- image -->

Use a VCC supply, that comes up in parallel to VS. A local voltage regulator with low start-up voltage will satisfy this, generating the 5 V or 3.3 V VCC voltage from VS. Ramping up VCC before VS also is fine.

## Attention

Some switching  regulators  do  not  start  before  the  input  voltage  has  reached  5V.  Use  a  low-drop regulator  starting  up  Therefore,  it  is  recommended  to  use  a  standard  linear  regulator  like  7805  or LM317 series or a low drop regulator or a switching regulator like the LM2595, starting at relatively low input voltages.

## 10.6 Schematic and Layout Examples

Schematic

<!-- image -->

## 1- Components

<!-- image -->

## 3- Inner Layer (GND)

Figure 10.4 Layout example

<!-- image -->

## 2- Top Layer

<!-- image -->

4- Inner Layer (VS, VCC)

<!-- image -->

The layout example is shown to demonstrate  the  principle  of  a compact  layout  with  large  heat spreading  areas  for  all  motor outputs. The short to GND detection uses a voltage divider to  allow  simple  adaptation  of the triggering current. RC filtering is included for SRA and SRB for best performance.

## Bottom Layer

<!-- image -->

## 11 Application Notes

## 11.1 Extending the Microstep Resolution

For some applications it might be desired to have a higher microstep resolution, while keeping the advantages of control via the serial interface. The following schematic shows a solution, which adds two LSBs by selectively pulling up the SRA / SRB pin by a small voltage difference. Please remark, that the lower two bits are inverted when using the depicted circuit. A full-scale sense voltage of 340mV is assumed. The circuit still takes advantage of completely switching off of the coils when the internal DAC bits are set to '0000'. This results in the following comparator trip voltages:

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

## 11.2 Synchronizing the Chopper Clock

Figure 11.1 Synchronizing the chopper clock

<!-- image -->

This circuit shows an additional shift-register that synchronizes the chopper clock of the TMC236 to the  toggling  of  a  phase  polarity  bit  (bit  6)  to  allow  highest  RPM  by  avoiding  a  beat  between  the chopper clock and the step sequence. Use this circuit in single motor drives, where no datagrams are skipped to increase the possible motor velocity. It is beneficial for velocities above a few RPM.

## 11.3 Operating DC motors

The TMC236 and TMC246 can operate 2 DC motors with their two coil outputs. However, the current controlled driving mode is not optimum for motor speed control. A current controlled driver will lead to  a  motor  torque  control,  rather  than  speed  control.  To  allow  speed  control,  a  different  kind  of feedback is required.

The following schematic illustrates control of a DC motor with one of the driver channels:

Figure 11.2 Driving a DC motor

<!-- image -->

The TMC236 / TMC246 use a constant frequency PWM. At the beginning of each PWM cycle, one of the coil outputs (OA1 resp. OB1, or OA2 resp. OB2, depending on the polarity bits PHA resp. PHB) becomes turned on. It will turn off once the trip point level on SRA resp. SRB is reached. The trip point level can be varied by CA / CB settings or by INA / INB level in a nominal range of 0 to 0.5V.

A combination of a resistor R, a Schottky diode (small signal Schottky diode with 200mA to 400mA current rating like BAT54 or BAT46) and a capacitor C is used to convert the duty cycle at the active motor output to a saw tooth wave, with up to 3.5V amplitude. 1/10 of this level is fed to the sense

resistor input (SRA resp. SRB) to switch off the PWM upon reaching the programmed trip point level, and with this a certain duty cycle.

Use slow decay mode, only (MDA=MDB=0).

Dimensioning:

Choose R in a range of 10k to 33k.

Choose the oscillator frequency fOSC, e.g., 25kHz with COSC=1nF.

Calculate C, to yield a programmed duty cycle fitting to the motor voltage rating VMOT relative to the supply level VM:

<!-- formula-not-decoded -->

This simplified formula works well, if VM is significantly higher than 3.5V, i.e., at 12V supply or more.

## Example:

Operation of a 12V motor from 24V supply:

Choose R=22k, fOSC=25kHz

<!-- formula-not-decoded -->

- ➔ Choose C=5.6nF to cover the nominal motor voltage.

As the relation of R, C and fOSC determine the peak motor voltage, use low tolerance components to give a better tolerance of the maximum effective motor voltage. However, the biggest stray will come from the stray of the oscillator frequency, in case the internal oscillator is used.

Hint

The circuit will work best up to a certain upper duty cycle. Above roughly 90%, the capacitor will not fully discharge, and the duty cycle control will not be linear. This does not impose a limit as longs as the desired motor voltage is significantly lower than VM.

## 12 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design. Parameters are given for TMC236B (limits identical to TMC236A), and partially for the obsolete TMC236.

| Symbol   | Parameter                                                                                   |                                                                                             | Min Max     | Unit     |
|----------|---------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|-------------|----------|
| V S      | Supply voltage (A-type/B-type) -0.3                                                         | Supply voltage (A-type/B-type) -0.3                                                         | 36          | V        |
| V S      | Supply voltage (non-A/B-type)                                                               | Supply voltage (non-A/B-type)                                                               | -0.3 30     | V        |
| V MD     | Supply and bridge voltage max. 20000s (non-A/B-type: device disabled)                       | Supply and bridge voltage max. 20000s (non-A/B-type: device disabled)                       |             | 40 V     |
| V TR     | Power transistor voltage V OA -V BRA , V OB - V BRB, V SA -V OA , V SB -V OB (A/B-type)     | Power transistor voltage V OA -V BRA , V OB - V BRB, V SA -V OA , V SB -V OB (A/B-type)     |             | 40 V     |
| V TR     | Power transistor voltage V OA -V BRA , V OB - V BRB, V SA -V OA , V SB -V OB (non-A/B-type) | Power transistor voltage V OA -V BRA , V OB - V BRB, V SA -V OA , V SB -V OB (non-A/B-type) |             | 30 V     |
| V CC     | Logic supply voltage                                                                        | Logic supply voltage                                                                        | -0.5        | 6.0 V    |
| I OP     | Output peak current (10µs pulse)                                                            | Output peak current (10µs pulse)                                                            |             | +/-7 A   |
| I OC     | Output current (continuous, per bridge)                                                     | T A  85°C                                                                                  |             | 1500 mA  |
| I OC     | Output current (continuous, per bridge)                                                     | T A  105°C                                                                                 |             | 1000     |
| I OC     | Output current (continuous, per bridge)                                                     | T A  125°C                                                                                 |             | 800      |
| V I      | Logic input voltage                                                                         | Logic input voltage                                                                         | -0.3 V CC   | +0.3V V  |
| V IA     | Analog input voltage                                                                        | Analog input voltage                                                                        | -0.3 V CC   | +0.3V V  |
| I IO     | Maximum current to / from digital pins and analog inputs                                    | Maximum current to / from digital pins and analog inputs                                    |             | +/-10 mA |
| V VT     | Short-to-ground detector input voltage                                                      | Short-to-ground detector input voltage                                                      | V S -1V V S | +0.3V V  |
| T J      | Junction temperature                                                                        | Junction temperature                                                                        | -40         | 150 °C   |
| T STG    | Storage temperature                                                                         | Storage temperature                                                                         | -55         | 150 °C   |

## 13 Electrical Characteristics

Parameters are given for TMC236B, and for reference for its predecessor TMC236A, and partially for the obsolete TMC236.

## 13.1 Operational Range

| Symbol   | Parameter                             | Min   |   Max | Unit   |
|----------|---------------------------------------|-------|-------|--------|
| T AI     | Ambient temperature industrial * 1    | -25   | 125   | °C     |
| T AA     | Ambient temperature automotive        | -40   | 125   | °C     |
| T J      | Junction temperature                  | -40   | 140   | °C     |
| V S      | Bridge supply voltage (A-type/B-type) | 7     |  34   | V      |
| V S      | Bridge supply voltage (non-A/B-type)  | 7     |  28.5 | V      |
| V CC     | Logic supply voltage                  | 3.0   |   5.5 | V      |
| f CLK    | Chopper clock frequency               |       |  50   | kHz    |
| R SLP    | Slope control resistor                | 0     | 110   | K     |

## 13.2 DC Specifications

DC characteristics  contain  the  spread  of  values  guaranteed  within  the  specified  supply  voltage  and temperature range unless otherwise specified. Typical values represent the average value of all parts.

Logic supply voltage:

VCC = 3.0 V… 5.5 V,

Bridge supply voltage:  VS = 7

V… 34 V

Junction temperature: TJ = -40 °C … 140 °C, (unless otherwise specified)

| Symbol       | Parameter                                             | Conditions               | Min   |   Typ |   Max | Unit   |
|--------------|-------------------------------------------------------|--------------------------|-------|-------|-------|--------|
| R OUT,Sink   | R DSON of sink-FET (A-type)                           | T J = 25°C V S  8V      |       |  0.12 |  0.19 |       |
| R OUT,Source | R DSON of source-FET (A-type)                         | T J = 25°C V S  8V      |       |  0.22 |  0.36 |       |
| R OUT,Sink   | R DSON of sink-FET max. (A-type)                      | T J =150°C V S  8V      |       |  0.2  |  0.26 |       |
| R OUT,Source | R DSON of source-FET max. (A-Type)                    | T J =150°C V S  8V      |       |  0.37 |  0.47 |       |
| R OUT,Sink   | R DSON of sink-FET (B-type)                           | T J = 25°C V S  8V      |       |  0.1  |  0.14 |       |
| R OUT,Source | R DSON of source-FET (B-type)                         | T J = 25°C V S  8V      |       |  0.17 |  0.23 |       |
| R OUT,Sink   | R DSON of sink-FET max. (B-type)                      | T J =150°C V S  8V      |       |  0.16 |  0.23 |       |
| R OUT,Source | R DSON of source-FET max. (B-Type)                    | T J =150°C V S  8V      |       |  0.28 |  0.38 |       |
| V DIO        | Diode forward voltages of O xx MOSFET diodes (A-type) | T J = 25°C I OXX = 1.05A |       |  0.84 |  1.21 | V      |
| V DIO        | Diode forward voltages of O xx MOSFET diodes (B-type) | T J = 25°C I OXX = 1.05A |       |  0.77 |  1.2  | V      |
| V CCUV       | VCC undervoltage                                      |                          | 2.5   |  2.7  |  2.9  | V      |
| V CCOK       | VCC voltage o.k.                                      |                          | 2.7   |  2.9  |  3    | V      |
| I CC         | VCC supply current                                    | f osc = 25 kHz           |       |  0.85 |  1.35 | mA     |
| I CCSTB      | VCC supply current standby                            |                          |       |  0.45 |  0.75 | mA     |

| I CCSD   | VCC supply current shutdown                                  | ENN = 1                          |           | 37         | 70          | µA       |
|----------|--------------------------------------------------------------|----------------------------------|-----------|------------|-------------|----------|
| V SUV    | VS undervoltage                                              |                                  | 5.5       | 5.9        | 6.2         | V        |
| V CCOK   | VS voltage o.k.                                              |                                  | 6.1       | 6.4        | 6.7         | V        |
| I SSM    | VS supply current with fastest slope setting (static state)  | V S = 14V, R SLP = 0K            |           | 6          |             | mA       |
| I SSD    | VS supply current shutdown or standby                        | V S = 14V                        |           | 28         | 50          | µA       |
| V IH     | High input voltage (SDI, SCK, CSN, BL1, BL2, SPE, ANN)       |                                  | 2.2       |            | VCC + 0.3 V | V        |
| V IL     | Low input voltage (SDI, SCK, CSN, BL1, BL2, SPE, ANN)        |                                  | -0.3      |            | 0.7         | V        |
| V IHYS   | Input voltage hysteresis (SDI, SCK, CSN, BL1, BL2, SPE, ANN) |                                  | 100       | 300        | 500         | mV       |
| V OH     | High output voltage (output SDO)                             | -I OH = 1mA                      | VCC - 0.6 | VCC - 0.2  | VCC         | V        |
| V OL     | Low output voltage (output SDO)                              | I OL = 1mA                       | 0         | 0.1        | 0.4         | V        |
| -I ISL   | Low input current (SDI, SCK, CSN, BL1, BL2, SPE, ANN)        | V I = 0 V CC = 3.3V V CC = 5.0V  | 2         | 10 25      | 70          | µA µA µA |
| V ENNH   | High input voltage threshold (input ENN)                     |                                  |           | 1/2 VCC    |             |          |
| V EHYS   | Input voltage hysteresis (input ENN)                         |                                  |           | 0.1 V ENNH |             |          |
| V OSCH   | High input voltage threshold (input OSC)                     |                                  |           | 2/3 VCC    |             | V        |
| V OSCL   | Low input voltage threshold (input OSC)                      |                                  |           | 1/3 VCC    |             | V        |
| V VTD    | VT threshold voltage (referenced to VS)                      |                                  | -130      | -155       | -180        | mV       |
| V TRIP   | SRA / SRB voltage at DAC='1111'                              | internal ref. or 2V at INA / INB | 315       | 350        | 385         | mV       |
| V SRS    | SRA / SRB overcurrent detection threshold                    |                                  | 570       | 615        | 660         | mV       |
| V SROFFS | SRA / SRB comparator offset voltage                          |                                  | -10       | 0          | 10          | mV       |
| R INAB   | INA / INB input resistance                                   | Vin  3 V                        | 175       | 264        | 300         | k       |

## 13.3 AC Specifications

AC characteristics  contain  the  spread  of  values  guaranteed  within  the  specified  supply  voltage  and temperature range unless otherwise specified. Typical characteristics represent the average value of all parts.

Logic supply voltage:

VCC = 3.3 V,

Bridge supply voltage: VS = 14.0

V, nC

Ambient temperature:

TA = 27 °C,

External MOSFET gate charge = 3.2

| Symbol      | Parameter                                            | Conditions                   | Min   |   Typ | Max   | Unit   |
|-------------|------------------------------------------------------|------------------------------|-------|-------|-------|--------|
| f OSC       | Oscillator frequency using internal oscillator       | C OSC = 1nF  1%             | 20    |  25   | 31    | kHz    |
| t RS , t FS | Rise and fall time of outputs Oxx with R SLP =0      | V o 15% to 85% I OXX = 800mA |       |  25   |       | ns     |
| t RS , t FS | Rise and fall time of outputs Oxx with R SLP = 25K  | V o 15% to 85% I OXX = 800mA |       | 125   |       | ns     |
| t RS , t FS | Rise and fall time of outputs Oxx with R SLP = 50K  | V o 15% to 85% I OXX = 800mA |       | 250   |       | ns     |
| T BL        | Effective Blank time                                 | BL1, BL2 = V CC              | 1.35  |   1.5 | 1.65  | µs     |
| T ONMIN     | Minimum PWM on-time                                  | BL1, BL2 = GND               |       |   0.7 |       | µs     |

## 13.4 Thermal Protection

| Symbol   | Parameter              | Conditions   | Min   |   Typ | Max   | Unit   |
|----------|------------------------|--------------|-------|-------|-------|--------|
| T JOT    | Thermal shutdown       |              | 145   |   155 | 165   | °C     |
| T JOTHYS | T JOT hysteresis       |              |       |    15 |       | °C     |
| T JWT    | Prewarning temperature |              | 135   |   145 | 155   | °C     |
| T JWTHYS | T JWT hysteresis       |              |       |    15 |       | °C     |

## 13.5 Thermal Characteristics

| Symbol   | Parameter                                                                                      | Conditions                            |   Typ | Unit   |
|----------|------------------------------------------------------------------------------------------------|---------------------------------------|-------|--------|
| R THA12  | Thermal resistance bridge transistor junction to ambient, one bridge chopping, fixed polarity  | soldered to 2-layer PCB               |    88 | °K/W   |
| R THA22  | Thermal resistance bridge transistor junction to ambient, two bridges chopping, fixed polarity | soldered to 2-layer PCB               |    68 | °K/W   |
| R THA14  | Thermal resistance bridge transistor junction to ambient, one bridge chopping, fixed polarity  | soldered to 4-layer PCB (pessimistic) |    84 | °K/W   |
| R THA24  | Thermal resistance bridge transistor junction to ambient, two bridges chopping, fixed polarity | soldered to 4-layer PCB (pessimistic) |    51 | °K/W   |

## 13.6 Typical Power Dissipation

The table shows characteristic values measured with a Nema42 1A motor. The new B-type provides a roughly 20% lower power dissipation thanks to improved MOSFETs.

Motor coil parameters:  LW = 10mH, RW = 5.0

Ω

Chopping with:

tDUTY = 33% ON, only slow decay operation

| Coil Current (Both bridges on)   | Coil Current (Single bridge, sine peak)   | Ambient temperature T A   | Supply voltage V M   | Slope t SLP   | Chopper frequency f CHOP   | TMC236B power dissipation P D   |
|----------------------------------|-------------------------------------------|---------------------------|----------------------|---------------|----------------------------|---------------------------------|
| 560 mA                           | -                                         | 105 °C                    | 16 V                 | 400 ns        | 25 KHz                     | 390 mW                          |
| -                                | 800 mA                                    | 105 °C                    | 16 V                 | 400 ns        | 25 KHz                     | 360 mW                          |
| 560 mA                           |                                           | 125 °C                    | 14 V                 | 60ns          | 20 KHz                     | 280 mW                          |
|                                  | 800 mA                                    | 125 °C                    | 14 V                 | 60ns          | 20 KHz                     | 270 mW                          |
| 1000 mA                          | -                                         | 70 °C                     | 28 V                 | 60ns          | 25 KHz                     | 800 mW                          |
| -                                | 1500 mA                                   | 70 °C                     | 28 V                 | 60ns          | 25 KHz                     | 880 mW                          |

## 14 Package Mechanical Data

## 14.1 Dimensional Drawings

Attention: Drawings not to scale.

<!-- image -->

Figure 14.1 Dimensional drawings (PQFP44)

| Parameter                | Ref   | Min   | Nom   | Max   |
|--------------------------|-------|-------|-------|-------|
| Size over pins (X and Y) | A     |       | 12    |       |
| Body size (X and Y)      | C     |       | 10    |       |
| Pin length               | D     |       | 1     |       |
| Total thickness          | E     |       |       | 1.6   |
| Lead frame thickness     | F     | 0.09  |       | 0.2   |
| Stand off                | G     | 0.05  | 0.10  | 0.15  |
| Pin width                | H     | 0.30  |       | 0.45  |
| Flat lead length         | I     | 0.45  |       | 0.75  |
| Pitch                    | K     |       | 0.8   |       |
| Coplanarity              | ccc   |       |       | 0.08  |

## 14.2 Package Code

| Device     | Package        | Temperature range   | Code/ Marking   |
|------------|----------------|---------------------|-----------------|
| TMC236B-PA | TQFP-44 (RoHS) | - 50… +125 °C       | TMC236B-PA YYWW |

## 15 Disclaimer

Trinamic does not authorize or warrant any of its products for use in life support systems, without the  specific  written  consent  of  Trinamic  Motion  Control  GmbH  &amp;  Co.  KG.  Life  support  systems  are equipment intended to support or sustain life, and whose failure to perform, when properly used in accordance  with  instructions  provided,  can  be  reasonably  expected  to  result  in  personal  injury  or death.

Information  given  in  this  data  sheet  is  believed  to  be  accurate  and  reliable.  However,  no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 16 ESD Sensitive Device

Please be aware, that the TMC236 is an ESD sensitive device due to integrated high performance MOS transistors.

If  the  ICs  are  manually  handled before / during soldering, special precautions  have to be taken to avoid ESD voltages above 100V HBM (Human body model). For automated SMD equipment the internal device protection is specified with 1000V CDM (charged device model).

When soldered to the application board, all inputs and outputs withstand at least 1000V HBM.

<!-- image -->

Note: In a modern SMD manufacturing process, ESD voltages well below 100V are standard. A major source  for  ESD  is  hot-plugging  the  motor  during  operation.  As  the  power  MOSFETs  are  discrete devices, the device in fact is very rugged concerning any ESD event on the motor outputs. All other connections are typically protected due to external circuitry on the PCB.

## 17 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer  experience  and  long-term  satisfaction  by  smooth  and  silent  run,  while  minimizing  the demand for external resources, e.g., for power supply, cooling infrastructure, reduced motor size and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 18 Table of Figures

| Figure 1.1 TMC236 block diagram ....................................................................................................................................4            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Figure 2.1 TMC236 pin assignments................................................................................................................................6               |
| Figure 4.1 Relation between V IN and trip voltage of current sense comparator.............................................10                                                     |
| Figure 4.2 External DAC and PWM-DAC........................................................................................................................10                    |
| Figure 4.3 SPI Timing ........................................................................................................................................................12 |
| Figure 5.1 Analog control for standalone mode.......................................................................................................13                           |
| Figure 6.1 Schematic with R SH =R SA =R SB ...........................................................................................................................15         |
| Figure 7.1 Chopper phases ..............................................................................................................................................16       |
| Figure 7.2 Chopper cycle showing use of mixed decay with falling current ...................................................17                                                   |
| Figure 7.3 Voltage PWM generates motor current ...................................................................................................18                             |
| Figure 7.4 Controlling the driver with two PWMs in standalone mode............................................................20                                                 |
| Figure 7.5 Adapting sine wave for smooth motor operation...............................................................................20                                        |
| Figure 8.1 External R SLP controls switching slopes....................................................................................................22                        |
| Figure 9.1 Overvoltage protection example for limiting to 30V...........................................................................24                                       |
| Figure 11.1 Sense resistor grounding and protection components....................................................................26                                             |
| Figure 11.2 Grounding and power routing.................................................................................................................27                       |
| Figure 11.3 Optimum / Latest VCC power up avoiding significant power draw.............................................28                                                         |
| Figure 11.4 Layout example.............................................................................................................................................29        |
| Figure 12.1 Synchronizing the chopper clock.............................................................................................................31                       |
| Figure 12.2 Driving a DC motor......................................................................................................................................31           |
| Figure 15.1 Dimensional drawings (PQFP44)..............................................................................................................38                        |

## 19 Revision History

|   Version | Date        | Author BD = Bernhard Dwersteg SD - Sonja Dwersteg   | Description                                                                                                                                |
|-----------|-------------|-----------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
|      0.9  |             | BD                                                  | Datasheet based on TMC239 datasheet V2.1, removed higher voltage and 64 microstep application notes, increased SPI frequency limit to 8MHz |
|      1    | 2012-JUN-22 | SD                                                  | - New design. - Further information about low noise chopper. - Layout example added.                                                       |
|      1.01 | 2013-MAR-26 | BD                                                  | MOSFET list updated, updated criteria for necessity of gate driver output protection diodes                                                |
|      2.1  | 2016-JUN-06 | BD                                                  | Added IC revision TMC236B with improved MOSFETs                                                                                            |
|      2.11 | 2018-MAR-01 | BD                                                  | Added TMC236B to package code list                                                                                                         |
|      2.12 | 2020-JUN-08 | BD                                                  | Updated logo                                                                                                                               |
|      2.22 | 2022-JUN-09 | BD                                                  | Re-Targeted TMC239 V2.22 Datasheet to TMC236. Updated descriptions, wording, and logo and added examples.                                  |

## 20 References

Please refer to our web page http://www.trinamic.com. For trouble shooting please see Application Note 042 - FAQs TMC236, TMC246, TMC239, TMC249