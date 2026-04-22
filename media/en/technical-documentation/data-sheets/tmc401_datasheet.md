<!-- lastmod 2023-08-03 -->
## TMC-401 Datasheet

<!-- image -->

Version: 1.01

Date: 24 September 2007

<!-- image -->

Trinamic Motion Control GmbH &amp; Co KG Sternstraße 67 D - 20 357 Hamburg, Germany http://www.trinamic.com

## Contents

| 1 Features........................................................................................................................................................................... 3                                                                                                                                                                          | 1 Features........................................................................................................................................................................... 3                                                                                                                                                                          | 1 Features........................................................................................................................................................................... 3                                                                                                                                                                          |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 2 Life support policy....................................................................................................................................................... 4 3 Technical Data............................................................................................................................................................... 5 | 2 Life support policy....................................................................................................................................................... 4 3 Technical Data............................................................................................................................................................... 5 | 2 Life support policy....................................................................................................................................................... 4 3 Technical Data............................................................................................................................................................... 5 |
|                                                                                                                                                                                                                                                                                                                                                                  | Clock........................................................................................................................................................................ 5                                                                                                                                                                                  | Clock........................................................................................................................................................................ 5                                                                                                                                                                                  |
| 3.2                                                                                                                                                                                                                                                                                                                                                              | Power supply ....................................................................................................................................................... 5                                                                                                                                                                                           | Power supply ....................................................................................................................................................... 5                                                                                                                                                                                           |
|                                                                                                                                                                                                                                                                                                                                                                  | 3.3 Pin assignments.................................................................................................................................................. 5                                                                                                                                                                                          | 3.3 Pin assignments.................................................................................................................................................. 5                                                                                                                                                                                          |
| 4                                                                                                                                                                                                                                                                                                                                                                | Operational Ratings..................................................................................................................................................... 6                                                                                                                                                                                       | Operational Ratings..................................................................................................................................................... 6                                                                                                                                                                                       |
| 5                                                                                                                                                                                                                                                                                                                                                                | Functional Description................................................................................................................................................ 7                                                                                                                                                                                         | Functional Description................................................................................................................................................ 7                                                                                                                                                                                         |
| 5.1                                                                                                                                                                                                                                                                                                                                                              | Overview of In- and Outputs .......................................................................................................................... 7                                                                                                                                                                                                         | Overview of In- and Outputs .......................................................................................................................... 7                                                                                                                                                                                                         |
| 5.2                                                                                                                                                                                                                                                                                                                                                              | Application with a TMC239 or TMC249 driver with SPI........................................................................... 8                                                                                                                                                                                                                                 | Application with a TMC239 or TMC249 driver with SPI........................................................................... 8                                                                                                                                                                                                                                 |
| 5.3                                                                                                                                                                                                                                                                                                                                                              | Inputs..................................................................................................................................................................... 8                                                                                                                                                                                    | Inputs..................................................................................................................................................................... 8                                                                                                                                                                                    |
| 5.3.1 Step-                                                                                                                                                                                                                                                                                                                                                      | 5.3.1 Step-                                                                                                                                                                                                                                                                                                                                                      | signal........................................................................................................................... 8                                                                                                                                                                                                                              |
| / Direction 5.3.2 Setting                                                                                                                                                                                                                                                                                                                                        | / Direction 5.3.2 Setting                                                                                                                                                                                                                                                                                                                                        | of microstep resolution........................................................................................................... 9                                                                                                                                                                                                                             |
| 5.3.3 Automatic                                                                                                                                                                                                                                                                                                                                                  | 5.3.3 Automatic                                                                                                                                                                                                                                                                                                                                                  | Power down ......................................................................................................................... 9                                                                                                                                                                                                                           |
| 5.3.4 Mixed                                                                                                                                                                                                                                                                                                                                                      | 5.3.4 Mixed                                                                                                                                                                                                                                                                                                                                                      | Decay ............................................................................................................................................... 9                                                                                                                                                                                                          |
| 5.3.5                                                                                                                                                                                                                                                                                                                                                            | 5.3.5                                                                                                                                                                                                                                                                                                                                                            | Disable.......................................................................................................................................................10                                                                                                                                                                                                 |
| 5.3.6                                                                                                                                                                                                                                                                                                                                                            | 5.3.6                                                                                                                                                                                                                                                                                                                                                            | Reset...........................................................................................................................................................10                                                                                                                                                                                               |
| 5.4 Outputs ................................................................................................................................................................10                                                                                                                                                                                   | 5.4 Outputs ................................................................................................................................................................10                                                                                                                                                                                   | 5.4 Outputs ................................................................................................................................................................10                                                                                                                                                                                   |
| 5.4.1                                                                                                                                                                                                                                                                                                                                                            | 5.4.1                                                                                                                                                                                                                                                                                                                                                            | Overtemperature pre-warning ............................................................................................................10                                                                                                                                                                                                                       |
| 5.4.2 StallGuard                                                                                                                                                                                                                                                                                                                                                 | 5.4.2 StallGuard                                                                                                                                                                                                                                                                                                                                                 | .................................................................................................................................................10                                                                                                                                                                                                              |
| 6                                                                                                                                                                                                                                                                                                                                                                | Package information .................................................................................................................................................11                                                                                                                                                                                          | Package information .................................................................................................................................................11                                                                                                                                                                                          |
| 7                                                                                                                                                                                                                                                                                                                                                                | Documentation Revision..........................................................................................................................................12                                                                                                                                                                                               | Documentation Revision..........................................................................................................................................12                                                                                                                                                                                               |
| 8                                                                                                                                                                                                                                                                                                                                                                | References ....................................................................................................................................................................12                                                                                                                                                                                | References ....................................................................................................................................................................12                                                                                                                                                                                |
| List of Figures                                                                                                                                                                                                                                                                                                                                                  | List of Figures                                                                                                                                                                                                                                                                                                                                                  | List of Figures                                                                                                                                                                                                                                                                                                                                                  |
| Figure 5.1: Main parts of the TMC401 ............................................................................................................................. 7                                                                                                                                                                                             | Figure 5.1: Main parts of the TMC401 ............................................................................................................................. 7                                                                                                                                                                                             | Figure 5.1: Main parts of the TMC401 ............................................................................................................................. 7                                                                                                                                                                                             |

## 1 Features

The TMC401 converts step/direction signals into SPI datagrams that can be used to drive a TMC236, TMC239, TMC246 or TMC249 stepper motor driver chip directly. It provides five different microstep resolutions (from 1/32 to 1/2) as well as two full step resolution modes. The StallGuard™ bits of a TMC246 or TMC249 motor driver  are  output  on  three  pins,  in  order  to  allow  an  easy  usage  of  the  StallGuard  feature.  Also  the overtemperature pre-warning bit is output on one extra pin (and can be used to shut off the driver when there is an overtemperature pre-warning condition).

The TMC401 also provides a feature that reduces the motor current to 25% when there have not been any step  pulses  for  at  least  one  second.  This  features  can  be  enabled  or  disabled.  Mixed  Decay  can  also  be enabled or disabled using a dedicated pin.

## Applications

-  Step-/ Direction signal to SPI datagram converter
-  Perfect for use with TMC236, TMC239, TMC46 or TMC249 stepper motor driver chip
-  Interprets driver feedback via SPI like StallGuard values and overtemperature pre-warning

## Electrical data

-  +5V power supply
-  TTL levels on all in- and outputs

## Features

-  Up to 32 times microstepping
-  Two different full step resolution modes
-  Output of StallGuard™ values for sensorless motor stall detection
-  Overtemperature pre-warning
-  Mixed Decay can be enabled or disabled for best motor performance
-  Optional intelligent current management at step pulse pauses

## Other

-  RoHS compliant
-  32 pin TQFP package

Table 1.1: Order codes

| Order code   | Description                                                                                                                      |
|--------------|----------------------------------------------------------------------------------------------------------------------------------|
| TMC401-PI    | Step- /Direction to SPI converter for use with TMC236, TMC239, TMC246 or TMC249 stepper motor driver chips in 32pin TQFP package |

## 2 Life support policy

TRINAMIC Motion Control GmbH  &amp;  Co. KG does not authorize  or  warrant  any  of  its  products  for  use  in  life support  systems,  without  the  specific  written  consent  of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life support systems are equipment intended to support or sustain  life,  and  whose  failure  to  perform,  when  properly used  in accordance  with  instructions provided,  can  be reasonably expected to result in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2007

Information  given  in  this  data  sheet  is  believed  to  be accurate and reliable. However no responsibility is assumed for the consequences of its use nor for any infringement of patents  or  other  rights  of  third  parties,  which  may  result form its use.

Specifications subject to change without notice.

## 3 Technical Data

## 3.1 Clock

The device runs  on an internal  8MHz  RCoscillator. So an external clock is not needed.

## 3.2 Power supply

The  power  supply  should  be  in  the  range  of +5V ±5%. Use all +5V and GND pins in parallel to lower the contact resistance.

## 3.3 Pin assignments

<!-- image -->

Table 3.1: Pin assignments

| Pin Number   | Name           | Dir   | Explanation                                                                                                                                          |
|--------------|----------------|-------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1            | Step           | In    | Step pulse input; a low-to-high transition triggers one microstep                                                                                    |
| 2            | SGValid        | Out   | Output, low pulse (4µS) when SG0..SG2 outputs are valid                                                                                              |
| 3            | GND            | In    | Ground                                                                                                                                               |
| 4            | +5V            | In    | +5V power supply                                                                                                                                     |
| 5            | GND            | In    | Ground                                                                                                                                               |
| 6            | +5V            | In    | +5V power supply                                                                                                                                     |
| 7 - 9        | Do not connect |       |                                                                                                                                                      |
| 10           | Direction      | In    | Direction signal input. Sampled with every step pulse.                                                                                               |
| 11           | Disable        | In    | GND: SPI pins tristated, +5V and open: SPI communication enabled                                                                                     |
| 12           | OTPW           | Out   | Overtemperature Pre-Warning output: High when OTPW bit set                                                                                           |
| 13           | Do not connect |       |                                                                                                                                                      |
| 14           | CS             | Out   | SPI Chip select output (connect to CSN of the TMC23x/24x)                                                                                            |
| 15           | MOSI           | Out   | SPI Data Output (connect to SDI of the TMC23x/24x)                                                                                                   |
| 16           | MISO           | In    | SPI Data Input (connect to SDO of the TMC23x/24x)                                                                                                    |
| 17           | SCK            | Out   | SPI Clock Output (connect to SCK of the TMC23x/24x)                                                                                                  |
| 18           | +5V            | In    | +5V power supply                                                                                                                                     |
| 19           | Do not connect |       |                                                                                                                                                      |
| 20           | +5V            | In    | +5V power supply                                                                                                                                     |
| 21           | GND            | In    | Ground                                                                                                                                               |
| 22           | Do not connect |       |                                                                                                                                                      |
| 23           | RES0           | In    | Microstep resolution selection                                                                                                                       |
| 24           | RES1           | In    | Microstep resolution selection                                                                                                                       |
| 25           | RES2           | In    | Microstep resolution selection                                                                                                                       |
| 26           | SG0            | Out   | StallGuard output (load detection bit 0)                                                                                                             |
| 27           | SG1            | Out   | StallGuard output (load detection bit 1)                                                                                                             |
| 28           | SG2            | Out   | StallGuard output (load detection bit 2)                                                                                                             |
| 29           | Reset          | In    | Reset input, can be pulled low to reset the device; normally leave open or connect to +5V via pull-up resistor (device has automatic power-on reset) |
| 30           | Do not connect |       |                                                                                                                                                      |
| 31           | PD             | In    | Automatic power down active when low                                                                                                                 |
| 32           | MD             | In    | Mixed decay active when low                                                                                                                          |

## 4 Operational Ratings

The operational ratings show the intended / the characteristic range for the values and should be used as design values. In no case shall the maximum values be exceeded.

Table 4.1: Operational Ratings

| Symbol   | Parameter                             | Min      | Typ   | Max        | Unit   |
|----------|---------------------------------------|----------|-------|------------|--------|
| V CC     | Power supply voltage for operation    | 4.8      | 5     | 5.2        | V      |
| I CC     | Power supply current                  |          |       | 15         | mA     |
| f CLOCK  | Internal 8MHz RC-oscillator           |          | 8     |            | MHz    |
| V IL     | Input low voltage                     | -0.5     |       | 0.2 V CC   | V      |
| V IH     | Input high voltage                    | 0.6 V CC |       | V CC + 0.5 | V      |
| V ILR    | Input low voltage on reset pin        | -0.5     |       | 0.2 V CC   | V      |
| V IHR    | Input high voltage on reset pin       | 0.9 V CC |       | V CC + 0.5 | V      |
| V OL     | Output low voltage (at I OL =20mA)    |          |       | 0.7        | V      |
| V OH     | Output high voltage (at I OL =20mA)   | 4.2      |       |            | V      |
| I IL     | Input leakage (current I/O, pin low)  |          |       | 1          | µA     |
| I IH     | Input leakage (current I/O, pin high) |          |       | 1          | µA     |
| R RST    | Reset pin pull-up resistor            | 30       |       | 80         | k     |
| R PU     | I/O pin pull-up resistor              | 20       |       | 50         | k     |
| f STEP   | Step frequency                        |          |       | 245        | kHz    |
| t SPulse | Step pulse length                     | 0.125    |       |            | µs     |
| t S2D    | Direction hold time                   | 2.0      |       |            | µs     |
| T D2S    | Direction to step delay               | 0        |       |            | µs     |
| T MAX    | Absolute maximum Temperature          | -55      |       | +125       | °C     |
| T OP     | Operating Temperature                 | -40      |       | +85        | °C     |

## 5 Functional Description

The main parts of the TMC401 communication interface chip are shown in Figure 5.1 The chip converts a Step-  /Direction  signal  into  a  SPI  datagram  with  full  support  of  the  additional  functions  provided  by Trinamics driver family. A power down feature at inactivity, mixed decay and microstep resolution can be controlled and the drivers feedback StallGuard and temperature pre warning are supported.

Figure 5.1: Main parts of the TMC401

<!-- image -->

## 5.1 Overview of In- and Outputs

Figure 5.2: Overview of In- and Outputs

<!-- image -->

## 5.2 Application with a TMC239 or TMC249 driver with SPI

Since the SPI datagram is completely calculated internally the only effort to be taken is to connect the SPI pins of the TMC401 to the TMC23x or TMC24x SPI interface pins.

Figure 5.3: Application with a TMC239 or TMC249 driver with SPI

<!-- image -->

## 5.3 Inputs

The inputs are mainly for the control of the additional features of the TMC23x and TMC24x driver family and of course for the step- /direction signal.

## 5.3.1 Step- / Direction signal

Step-Direction signal timing:

Figure 5.4: Step / Direction signal timing

<!-- image -->

|        | Min           |
|--------|---------------|
| T S2D  | 2 µs          |
| T D2S  | 0 µs          |
| th     | 0.125 µs      |
| f STEP | 245 kHz (max) |

<!-- image -->

## 5.3.2 Setting of microstep resolution

For the resolution of a motors rotation the microstep resolution has to be set. Thus each sent step impulse is interpreted accordingly.

Table 5.1: Mircostep resolution setting

|   RES2 |   RES1 |   RES0 | Microstep resolution           |
|--------|--------|--------|--------------------------------|
|      0 |      0 |      0 | 1/32                           |
|      0 |      0 |      1 | 1/16                           |
|      0 |      1 |      0 | 1/8                            |
|      0 |      1 |      1 | 1/4                            |
|      1 |      0 |      0 | 1/2                            |
|      1 |      0 |      1 | 1/1                            |
|      1 |      1 |      0 | Full step with matched current |
|      1 |      1 |      1 | Full step with full current    |

The resolution selection inputs have internal pull-up resistors.

## 5.3.3 Automatic Power down

The PD pin controls the automatic power down feature. If this pin is low the motor current will be lowered to approx. 25% of the actual current after there has been no step pulse for at least one second. The current will be raised to 100% again as soon as the next step pulse occurs.

When the PD pin is high (or open, as the PD pin has an internal pull-up resistor) the current will always stay at 100%.

Figure 5.5: Power down feature

<!-- image -->

## 5.3.4 Mixed Decay

The MD pin controls the use of the Mixed Decay feature of the TMC249/TMC249. Mixed decay will be enabled when the MD pin is pulled low. It will be disabled when the MD pin is high or open (the MD pin has an internal pull-up resistor).

The mixed decay setting especially at slow and medium rotation velocities in the range of a few 10 steps per seconds to several 100 steps per second improves motor behavior (less resonance). For high velocities fullstep  is  recommended.  However,  the  actual  performance  depends  on  the  motor  and  mechanics.  For supply voltages above 24V and for low inductivity motors, best microstep behavior is reached when mixed decay setting is continuously on.

Figure 5.6: Different Chopper Cycles with Fast and Slow Decay

<!-- image -->

Figure 5.6 shows differences in chopper cycles with Fast and Slow Decay. Fast decay is used to adjust to a new given current value while slow decay mainly keeps the actual current. With the mixed decay feature activated the modes will be switched automatically for best motor performances. Mixed decay feature should be switched off in standstill to avoid possible chirping noise, when StallGuard operational in order to get usable results and at high velocities.

## 5.3.5 Disable

The disable pin (pin 11) can normally be left open or connected to +5V via a pull-up resistor. Pulling this pin low disables the SPI communication by tristating all 4 SPI pins.

## 5.3.6 Reset

The reset pin can normally be left open or connected to +5V via a pull-up resistor. Pulling this pin low resets the device, but this is normally not needed as the device is equipped with automatic power-on reset and brown-out protection.

## 5.4 Outputs

## 5.4.1 Overtemperature pre-warning

The OTPW pin is an output pin that shows the state of the OTPW bit of the TMC236/239/246/249. It is high when the OTPW bit is set (that means, there is an overtemperature pre-warning) or low when the OTPW bit is not set. The OTPW pin can be directly connected to the enable input of the TMC236/239/246/249 when the motor shall be switched of automatically if there is an overtemperature pre-warning.

The pre-warning temperature is min.: 135, typical: 145 and max.: 155 °C

## 5.4.2 StallGuard

The load detection bits LD2..LD0 of the TMC246/TMC249 are output to the StallGuard output pins SG2..SG0. Every time the StallGuard bits become valid a low pulse of approx. 4µs is generated on the SGValid output. At this times the StallGuard value can be read out. Please see [TMC246], [TMC249] for further information.

## 6 Package information

32 lead Thin Profile Plastic Quad Flat Package (TQFP) with 7 x 7 mm body size, 1.0mm body thickness and 0.8mm lead pitch.

Figure 6.1: Package Outline

<!-- image -->

Table 6.1: Package Dimensions

| SYMBOL   | MIN      | NOM      | MAX      | UNIT   |
|----------|----------|----------|----------|--------|
| A        | -        | -        | 1.20     | mm     |
| A1       | 0.05     | -        | 0.15     | mm     |
| A2       | 0.95     | 1.00     | 1.05     | mm     |
| D        | 8.75     | 9.00     | 9.25     | mm     |
| D1       | 6.90     | 7.00     | 7.10     | mm     |
| E        | 8.75     | 9.00     | 9.25     | mm     |
| E1       | 6.90     | 7.00     | 7.10     | mm     |
| B        | 0.30     | -        | 0-45     | mm     |
| C        | 0.09     | -        | 0.20     | mm     |
| L        | 0.45     | -        | 0.75     | mm     |
| e        | 0.80 TYP | 0.80 TYP | 0.80 TYP | mm     |

## 7 Documentation Revision

|   Version | Comment     | Author   | Description                           |
|-----------|-------------|----------|---------------------------------------|
|      1    | 16-Mar-2007 | HC       | Initial Version                       |
|      1.01 | 24-Sep-2007 | HC       | Correction in mixed decay explanation |

## 8 References

[TMC236]

Microstep driver manual, 1.5A phase current (see http://www.trinamic.com)

[TMC246]

Microstep driver manual, 1.5A with StallGuard (see http://www.trinamic.com)

[TMC239]

Microstep driver manual, up to 4A phase current (see http://www.trinamic.com)

[TMC249]

Microstep driver manual, up to 4A with StallGuard (see http://www.trinamic.com)