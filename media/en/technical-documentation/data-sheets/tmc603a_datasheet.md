<!-- lastmod 2023-08-03 -->
<!-- image -->

## TMC603A - DATASHEET

Three phase motor driver with current sensing

TRINAMIC ® Motion Control GmbH &amp; Co. KG Waterloohain 5 D - 22769 Hamburg GERMANY www.trinamic.com

## 1 Features

The TMC603 is a three phase motor driver for highly compact and energy efficient drive solutions. It contains  all  power  and  analog  circuitry  required  for  a  high  performance  BLDC  motor  system.  The TMC603 is designed to provide the frontend for a microcontroller doing motor commutation and control algorithms. It directly drives 6 external N-channel MOSFETs for motor currents up to 30A and up to 50V and integrates shunt less current measurement, by using the MOSFETs channel resistance for sensing. Protection and diagnostic features as well as a step down switching regulator further reduce system cost and increase reliability.

## Highlights

-  Up to 30A motor current, up to 50V operating voltage
-  3.3V or 5V interface
-  8mm x 8mm QFN package
-  Integrated dual range high precision current measurement amplifiers
-  Supports shunt less current measurement using power MOS transistor RDSon
-  Integrated break-before-make logic: No special microcontroller PWM hardware required
-  EMV optimized current controlled gate drivers - up to 150mA possible
-  Overcurrent / short to GND and undervoltage protection and diagnostics integrated
-  Internal QGD protection: Supports latest generation of power MOSFETs
-  Integrated supply concept: Step down switching regulator up to 500mA / 300kHz
-  Common rail charge pump allows for 100% PWM duty cycle

## Applications

-  Motor driver for industrial applications
-  Integrated miniaturized drives
-  Robotics
-  High-reliability drives (dual position sensor possible)
-  Pump and blower applications

## Motor type

-  3 phase BLDC, stepper, DC motor
-  Sine or block commutation
-  Rotor position feedback: encoder or hall sensor

*) note:

The term TMC603 in this datasheet refers to the TMC603A and TMC603

The feature hallFX and related pins have been removed from this documentation

<!-- image -->

## Life support policy

TRINAMIC  Motion  Control  GmbH  &amp;  Co.  KG  does not authorize or warrant any of its products for use in life  support  systems,  without  the  specific  written consent of TRINAMIC Motion Control GmbH &amp; Co. KG.

Life  support  systems  are  equipment  intended  to support or sustain life, and whose failure to perform, when properly used in accordance with instructions provided,  can  be  reasonably  expected  to  result  in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co. KG 2009

Information given in this data sheet is believed to be accurate  and  reliable.  However  no  responsibility  is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications subject to change without notice

| 2 Table of contents                                                                                                                                                                                                                                                                                                                            | 2 Table of contents                                                                                                                                                                                                                                                                                                                            | 2 Table of contents                                                                                                                                                                                                                                                               |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 FEATURES .......................................................................................................................................... 1                                                                                                                                                                                        | 1 FEATURES .......................................................................................................................................... 1                                                                                                                                                                                        | 1 FEATURES .......................................................................................................................................... 1                                                                                                                           |
| 2 TABLE OF CONTENTS ........................................................................................................................ 3                                                                                                                                                                                                 | 2 TABLE OF CONTENTS ........................................................................................................................ 3                                                                                                                                                                                                 | 2 TABLE OF CONTENTS ........................................................................................................................ 3                                                                                                                                    |
| SYSTEM ARCHITECTURE USING THE TMC603 ................................................................................... 4 PINOUT ............................................................................................................................................. 5                                                              | SYSTEM ARCHITECTURE USING THE TMC603 ................................................................................... 4 PINOUT ............................................................................................................................................. 5                                                              | SYSTEM ARCHITECTURE USING THE TMC603 ................................................................................... 4 PINOUT ............................................................................................................................................. 5 |
| 4.1 PACKAGE CODES ............................................................................................................................. 5                                                                                                                                                                                              | 4.1 PACKAGE CODES ............................................................................................................................. 5                                                                                                                                                                                              | 4.1 PACKAGE CODES ............................................................................................................................. 5                                                                                                                                 |
| 5 TMC603 FUNCTIONAL BLOCKS .......................................................................................................... 7 ................................................................................................                                                                                                       | 5 TMC603 FUNCTIONAL BLOCKS .......................................................................................................... 7 ................................................................................................                                                                                                       | 5 TMC603 FUNCTIONAL BLOCKS .......................................................................................................... 7 ................................................................................................                                          |
| 5.1 BLOCK DIAGRAM AND PIN DESCRIPTION                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                | 7                                                                                                                                                                                                                                                                                 |
| 5.2 MOSFET DRIVER STAGE .................................................................................................................. 9                                                                                                                                                                                                   | 5.2 MOSFET DRIVER STAGE .................................................................................................................. 9                                                                                                                                                                                                   | 5.2 MOSFET DRIVER STAGE .................................................................................................................. 9                                                                                                                                      |
|                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                | 9                                                                                                                                                                                                                                                                                 |
| 5.2.1 Principle of operation ......................................................................................................... 5.2.2 Break-before-make logic ...................................................................................................                                                                       | 5.2.1 Principle of operation ......................................................................................................... 5.2.2 Break-before-make logic ...................................................................................................                                                                       | 10                                                                                                                                                                                                                                                                                |
| 5.2.3 PWM control via microcontroller ......................................................................................                                                                                                                                                                                                                   | 5.2.3 PWM control via microcontroller ......................................................................................                                                                                                                                                                                                                   | 11                                                                                                                                                                                                                                                                                |
| 5.2.4 Slope control ....................................................................................................................                                                                                                                                                                                                       | 5.2.4 Slope control ....................................................................................................................                                                                                                                                                                                                       | 12                                                                                                                                                                                                                                                                                |
| 5.2.5 Reverse capacity (QGD) protection ....................................................................................                                                                                                                                                                                                                   | 5.2.5 Reverse capacity (QGD) protection ....................................................................................                                                                                                                                                                                                                   | 13                                                                                                                                                                                                                                                                                |
| 5.2.6 Considerations for QGD protection ...................................................................................                                                                                                                                                                                                                    | 5.2.6 Considerations for QGD protection ...................................................................................                                                                                                                                                                                                                    | 14                                                                                                                                                                                                                                                                                |
| 5.2.7 Effects of the MOSFET bulk diode .....................................................................................                                                                                                                                                                                                                   | 5.2.7 Effects of the MOSFET bulk diode .....................................................................................                                                                                                                                                                                                                   | 15                                                                                                                                                                                                                                                                                |
| 5.2.8 Adding Schottky diodes across the MOSFET bulk diodes .................................................                                                                                                                                                                                                                                   | 5.2.8 Adding Schottky diodes across the MOSFET bulk diodes .................................................                                                                                                                                                                                                                                   | 15                                                                                                                                                                                                                                                                                |
| 5.2.9 Short to GND detection                                                                                                                                                                                                                                                                                                                   | 5.2.9 Short to GND detection                                                                                                                                                                                                                                                                                                                   | .................................................................................................... 16                                                                                                                                                                           |
| 5.2.11 Paralleling gate drivers for higher gate current                                                                                                                                                                                                                                                                                        | 5.2.11 Paralleling gate drivers for higher gate current                                                                                                                                                                                                                                                                                        | 16 17                                                                                                                                                                                                                                                                             |
| 5.2.10 Error logic ......................................................................................................................... ............................................................... CURRENT MEASUREMENT AMPLIFIERS .................................................................................................. | 5.2.10 Error logic ......................................................................................................................... ............................................................... CURRENT MEASUREMENT AMPLIFIERS .................................................................................................. |                                                                                                                                                                                                                                                                                   |
| 5.3                                                                                                                                                                                                                                                                                                                                            | 5.3                                                                                                                                                                                                                                                                                                                                            | 18                                                                                                                                                                                                                                                                                |
| 5.3.1 Current measurement timing ............................................................................................ 5.3.2 Auto zero cycle .................................................................................................................                                                                          | 5.3.1 Current measurement timing ............................................................................................ 5.3.2 Auto zero cycle .................................................................................................................                                                                          | 19                                                                                                                                                                                                                                                                                |
| 5.3.3 Measurement depending on chopper cycle ......................................................................                                                                                                                                                                                                                            | 5.3.3 Measurement depending on chopper cycle ......................................................................                                                                                                                                                                                                                            | 20                                                                                                                                                                                                                                                                                |
| 5.3.4 Compensating for offset voltages ....................................................................................                                                                                                                                                                                                                    | 5.3.4 Compensating for offset voltages ....................................................................................                                                                                                                                                                                                                    | 20                                                                                                                                                                                                                                                                                |
| 5.3.5 Getting a precise current value using MOSFET on-resistance                                                                                                                                                                                                                                                                               | 5.3.5 Getting a precise current value using MOSFET on-resistance                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                   |
| ...........................................                                                                                                                                                                                                                                                                                                    | ...........................................                                                                                                                                                                                                                                                                                                    | 20                                                                                                                                                                                                                                                                                |
| 5.4 POWER SUPPLY ............................................................................................................................. 5.4.1 Switching regulator ..........................................................................................................                                                            | 5.4 POWER SUPPLY ............................................................................................................................. 5.4.1 Switching regulator ..........................................................................................................                                                            | 21                                                                                                                                                                                                                                                                                |
| 5.4.2 Charge pump ....................................................................................................................                                                                                                                                                                                                         | 5.4.2 Charge pump ....................................................................................................................                                                                                                                                                                                                         | 23                                                                                                                                                                                                                                                                                |
| 5.4.3 Filter capacitors for switching regulator and charge pump .............................................                                                                                                                                                                                                                                  | 5.4.3 Filter capacitors for switching regulator and charge pump .............................................                                                                                                                                                                                                                                  | 23                                                                                                                                                                                                                                                                                |
| 5.4.4 Supply voltage filtering and layout considerations .........................................................                                                                                                                                                                                                                             | 5.4.4 Supply voltage filtering and layout considerations .........................................................                                                                                                                                                                                                                             | 23                                                                                                                                                                                                                                                                                |
| ...............................................................................................                                                                                                                                                                                                                                                | ...............................................................................................                                                                                                                                                                                                                                                | 24                                                                                                                                                                                                                                                                                |
| 5.4.5 Reverse polarity protection 5.4.6 Standby with zero power consumption ........................................................................... 5.4.7 Low voltage operation down to 9V                                                                                                                                                 | 5.4.5 Reverse polarity protection 5.4.6 Standby with zero power consumption ........................................................................... 5.4.7 Low voltage operation down to 9V                                                                                                                                                 | 24                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                | 24                                                                                                                                                                                                                                                                                |
| ................................................................................. 5.5 TEST OUTPUT ................................................................................................................................                                                                                                             | ................................................................................. 5.5 TEST OUTPUT ................................................................................................................................                                                                                                             | 25                                                                                                                                                                                                                                                                                |
| ABSOLUTE MAXIMUM RATINGS                                                                                                                                                                                                                                                                                                                       | ABSOLUTE MAXIMUM RATINGS                                                                                                                                                                                                                                                                                                                       | 26                                                                                                                                                                                                                                                                                |
| 6 .....................................................................................................                                                                                                                                                                                                                                        | 6 .....................................................................................................                                                                                                                                                                                                                                        | 6 .....................................................................................................                                                                                                                                                                           |
| 7 ELECTRICAL CHARACTERISTICS                                                                                                                                                                                                                                                                                                                   | OPERATIONAL RANGE .....................................................................................................................                                                                                                                                                                                                        | ...................................................................................................... 26 26                                                                                                                                                                      |
| 7.1 7.2 DC CHARACTERISTICS AND TIMING CHARACTERISTICS ...........................................................................                                                                                                                                                                                                              | 7.1 7.2 DC CHARACTERISTICS AND TIMING CHARACTERISTICS ...........................................................................                                                                                                                                                                                                              | 27                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                |                                                                                                                                                                                                                                                                                                                                                | 33                                                                                                                                                                                                                                                                                |
| 8 DESIGNING THE APPLICATION ......................................................................................................                                                                                                                                                                                                             | 8 DESIGNING THE APPLICATION ......................................................................................................                                                                                                                                                                                                             | 33                                                                                                                                                                                                                                                                                |
| 8.1                                                                                                                                                                                                                                                                                                                                            | CHOOSING THE BEST FITTING POWER MOSFET .................................................................................... 8.1.1 Calculating the MOSFET power dissipation ......................................................................                                                                                              | 34                                                                                                                                                                                                                                                                                |
| 8.2                                                                                                                                                                                                                                                                                                                                            | MOSFET EXAMPLES .......................................................................................................................                                                                                                                                                                                                        | 35                                                                                                                                                                                                                                                                                |
| 8.3 DRIVING A DC MOTOR WITH THE TMC603 REVISION HISTORY ........................................................................................................................                                                                                                                                                               | 8.3 DRIVING A DC MOTOR WITH THE TMC603 REVISION HISTORY ........................................................................................................................                                                                                                                                                               | 37                                                                                                                                                                                                                                                                                |
|                                                                                                                                                                                                                                                                                                                                                | .........................................................................................                                                                                                                                                                                                                                                      | 36                                                                                                                                                                                                                                                                                |
| 9 9.1 DOCUMENTATION REVISION .............................................................................................................                                                                                                                                                                                                     | 9 9.1 DOCUMENTATION REVISION .............................................................................................................                                                                                                                                                                                                     | 37                                                                                                                                                                                                                                                                                |

## 3 System architecture using the TMC603

figure 1: application block diagram

<!-- image -->

The TMC603 is a BLDC driver IC using external power MOS transistors. Its unique feature set allows equipping  inexpensive  and  small  drive  systems  with  a  maximum  of  intelligence,  protection  and diagnostic features. Control algorithms previously only found in much more complex servo drives can now  be  realized  with  a  minimum  of  external  components.  Depending  on  the  desired  commutation scheme and the bus interface requirements, the TMC603 forms a complete motor driver system in combination  with  an  external  8  bit  processor  or  with  a  more  powerful  32  bit  processor.  A  simple system can work with three standard PWM outputs even for sine commutation! The complete analog amplification and filtering frontend as well as the power driver controller are realized in the TMC603. Its integrated support for sine commutation saves cost and allows for maximum drive efficiency.

The  external  microcontroller  realizes  commutation  and  control  algorithms.  Based  on  the  position information  from  an  encoder  or  hall  sensors,  the  microcontroller  can do  block  commutation  or  sine commutation  with  or  without  space  vector  modulation  and  realizes  control  algorithms  like  a  PID regulator  for  velocity  or  position  or  field  oriented  control  based  on  the  current  signals  from  the TMC603. A sine commutated start-up minimizes motor vibrations during start up.

The  TMC603  also  supports  control  of  three  phase  stepper  motors  as  well  as  two  phase  stepper motors using two devices.

## 4 Pinout

## HS1 GNDP LS1 BM2 LS2 BM1 VCP HS2 VLS HS3 GNDP BM3 LS3

figure 2: pinning / QFN52 package (top view)

<!-- image -->

## 4.1 Package codes

| Type    | Package      | Temperature range   | Code/marking   |
|---------|--------------|---------------------|----------------|
| TMC603A | QFN52 (ROHS) | -40°C ... +125°C    | TMC603A-LA     |

## 4.2 Package dimensions QFN52

| REF   | MIN   |   NOM | MAX   |
|-------|-------|-------|-------|
| A     | 0.80  | 0.85  | 0.90  |
| A1    | 0.00  | 0.035 | 0.05  |
| A2    | -     | 0.65  | 0.67  |
| A3    |       | 0.203 |       |
| b     | 0.2   | 0.25  | 0.3   |
| D     |       | 8     |       |
| E     |       | 8     |       |
| e     |       | 0.5   |       |
| J     | 6.1   | 6.2   | 6.3   |
| K     | 6.1   | 6.2   | 6.3   |
| L     | 0.35  | 0.4   | 0.45  |

All dimensions are in mm.

Attention: Drawing not to scale.

<!-- image -->

<!-- image -->

<!-- image -->

## 5 TMC603 functional blocks

## 5.1 Block diagram and pin description

figure 3: application diagram

<!-- image -->

The application diagram shows the basic building blocks of the IC and the connections to the power bridge transistors, as well as the power supply. The connection of the digital and analog I/O lines to the microcontroller is highly specific to the microcontroller model used.

| Pin             | Number     | Type        | Function                                                                                                                         |
|-----------------|------------|-------------|----------------------------------------------------------------------------------------------------------------------------------|
| VLS             | 1, 44      |             | Low side driver supply voltage for driving low side gates                                                                        |
| GNDP            | 2, 40, 52  |             | Power GND for MOSFET drivers, connect directly to GND                                                                            |
| VM              | 3          |             | Motor and MOSFET bridge supply voltage                                                                                           |
| GND             | 4, 36      |             | Digital and analog low power GND, connect directly to GND                                                                        |
| RS2G            | 5          | AI 5V       | Short to GND control resistor. Controls delay time for short to GND test                                                         |
| n.c.            | 6, 7, 8    |             | Do not externally connect these pins (unused outputs)                                                                            |
| FILTx_ RSx      | 9, 10, 11  | AI 5V AO 5V | Output of internal switched capacitor filter or input for external sense resistor (select using pin ENRS_TEST)                   |
| COSC            | 12         | A 5V        | Oscillator capacitor for step down regulator                                                                                     |
| TESTCLK         | 13         | DI          | Test mode input, connect to GND                                                                                                  |
| BHx             | 14, 18, 22 | DI 5V       | High side driver control signal: A positive level switches on the high side                                                      |
| BLx             | 15, 19, 23 | DI 5V       | Low side driver control signal: Polarity can be reversed via INV_BL                                                              |
| SAMPLEx         | 16, 20, 24 | DI 5V       | Optional external control for current measurement sample/hold stage. Set to positive level, if unused                            |
| CURx            | 17, 21, 25 | AO 5V       | Output of current measurement amplifier                                                                                          |
| 5VOUT           | 26         |             | Output of internal 5V linear regulator. Provided for VCC supply                                                                  |
| n.c.            | 27         |             | Do not externally connect this pin.                                                                                              |
| VCC             | 28         |             | +5V supply input for digital I/Os and analog circuitry                                                                           |
| SENSE_HI        | 29         | DI 5V       | Switches current amplifiers to high sensitivity                                                                                  |
| BBM_EN          | 30         | DI 5V       | Enables internal break-before-make circuitry                                                                                     |
| INV_BL          | 31         | DI 5V       | Allows inversion of BLx input active level (low: BLx is active high)                                                             |
| ENABLE          | 32         | DI 5V       | Enables the power drivers (low: all MOSFETs become actively switched off)                                                        |
| /ERR_OUT        | 33         | DO 5V       | Error output (open drain). Signals undervoltage or overcurrent. Tie to ENABLE for direct self protection of the driver           |
| CLR_ERR         | 34         | DI 5V       | Reset of error flip-flop (active high). Clears error condition                                                                   |
| RSLP            | 35         | AI 5V       | Slope control resistor. Sets output current for MOSFET drivers                                                                   |
| SWOUT           | 37         | O           | Switch regulator transistor output                                                                                               |
| ENRS_ TEST      | 38         | DI 5V O 12V | Enables sense resistor inputs rather than R DSON measurement. Test multiplexer output                                            |
| VCP             | 39, 48     |             | Charge pump supply voltage. Provides high side driver supply                                                                     |
| LSx             | 41, 45, 49 | O 12V       | Low side MOSFET driver output                                                                                                    |
| BMx             | 42, 46, 50 | I (VM)      | Sensing input for bridge outputs. Used for MOSFET control and current measurement.                                               |
| HSx             | 43, 47, 51 | O (VCP)     | High side MOSFET driver output                                                                                                   |
| Exposed die pad | -          | GND         | Connect the exposed die pad to a GND plane. It is used for cooling of the IC and may either be left open or be connected to GND. |

## 5.2 MOSFET Driver Stage

The TMC603 provides three half bridge drivers, each capable of driving two MOSFET transistors,  one  for  the  high-side  and  one  for the  low-side.  In  order  to  provide  a  low  onresistance,  the  MOSFET  gate  driving  voltage is about 10V to 12V.

The TMC603 bridge drivers provide a number of unique features for simple operation, explained in the following chapters:

-  An integrated automatic break-beforemake logic safely switches off one transistor  before  its  counterpart  can  be switched on.
-  Slope controlled operation allows adaptation  of  the  driver  strength  to  the desired slope and to the chosen transistors.
-  The  drivers protect the bridge actively against cross conduction (QGD protection)
-  The bridge is protected against a short to GND

## 5.2.1 Principle of operation

The low side gate driver voltage is supplied by the VLS pins. The low side driver supplies 0V to the MOSFET gate to close the MOSFET, and VLS to open it.

The TMC603 uses the following driver principle for driving of the high side (pat. fil.):

The high-side MOSFET gate voltage is referenced to its source at the center of the half bridge. Due to this, the TMC603 references the gate drive to the bridge center (BM) and has to be able to drive it to a voltage lying above the positive bridge power supply voltage VM. This is realized by a charge pump voltage  generated  from  the  switching  regulator  via  a  Villard  circuit.  When  closing  the  high-side MOSFET, the high-side driver drives it down to the actual BM potential, since an external induction current from the motor coil could force the output to stay at high potential. This is accomplished by a feedback loop and transistor TG1 (see figure). In order to avoid floating of the output BM, a low current is still fed into the HS output via transistor TG1a. The input BM helps the high side driver to track the bridge voltage. Since input pins of the TMC603 must not go below -0.7V, the input BM needs to be protected by an external resistor. The resistor limits the current into BM to a level, the ESD protection input diodes can accept.

figure 5: principle of high-side driver (pat. fil.)

<!-- image -->

figure 4: three phase BLDC driver

<!-- image -->

A zener diode at the gate (range 12V to 15V) protects the high-side MOSFET in case of a short to GND event: Should the bridge be shorted, the gate driver output is forced to stay at a maximum of the zener voltage above the source of the transistor. Further it prevents the gate voltage from dropping below source level.

The maximum permissible MOSFET driver current depends on the motor supply voltage:

| Parameter                                   | Symbol        | Max                 | Unit   |
|---------------------------------------------|---------------|---------------------|--------|
| MOSFET driver current with V VM < 30V       | I HSX , I LSX | 150                 | mA     |
| MOSFET driver current with 30V < V VM < 50V |               | 150-2.5*(V VM -30V) | mA     |
| MOSFET driver current with V VM = 50V       | I HSX , I LSX | 100                 | mA     |

| Pin    | Comments                                                                                                                                                                                                                                                                                                                                                                            |
|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LSx    | Low side MOSFET driver output. The driver current is set by resistor R SLP . A Schottky protection diode to GND may be required for MOSFETs, where Q GD is larger than Q GS . Check that LSx voltage does not drop below GND by more than 0.5V.                                                                                                                                     |
| HSx    | High side MOSFET driver output. The driver current is set by resistor R SLP                                                                                                                                                                                                                                                                                                         |
| BMx    | Bridge center used for current sensing and for control of the high side driver. For unused bridges, connect BMx pin to GND and leave the driver outputs unconnected. Place the external protection resistor near the IC pin.                                                                                                                                                        |
| RSLP   | The resistor connected to this pin controls the MOSFET gate driver current. A 40µA current out of this pin (resistor value of 100k  to GND) results in the nominal maximum current at full supply range. Keep interconnection between IC and resistor short, to avoid stray capacitance to adjacent signal traces of modulating the set current. Resistor range: 60 k  to 500 k  |
| VLS    | Low side driver supply voltage for driving low side gates                                                                                                                                                                                                                                                                                                                           |
| VCP    | Charge pump supply voltage. Provides high side driver supply                                                                                                                                                                                                                                                                                                                        |
| GNDP   | Power GND for MOSFET drivers, connect directly to GND                                                                                                                                                                                                                                                                                                                               |
| BHx    | High side driver control signal: A positive level switches on the high side. For unused bridges, tie to GND.                                                                                                                                                                                                                                                                        |
| BLx    | Low side driver control signal: Polarity can be reversed via INV_BL                                                                                                                                                                                                                                                                                                                 |
| INV_BL | Allows inversion of BLx input active level (low: BLx is active high). When high, each BLx and BHx can be connected in parallel in order to use only 3 PWM outputs for bridge control. Be sure to switch on internal break-before-make logic (BBM_EN = Vcc) to avoid bridge short circuits in this case.                                                                             |

## 5.2.2 Break-before-make logic

Each  half-bridge  has  to  be  protected  against  cross  conduction  during  switching  events.  When switching  off  the  low-side  MOSFET,  its  gate  first  needs  to  be  discharged,  before  the  high  side MOSFET is allowed to be switched on. The same goes when switching off the high-side MOSFET and switching  on  the  low-side  MOSFET.  The  time  for  charging  and  discharging  of  the  MOSFET  gates depends on the  MOSFET gate charge and the driver  current  set  by  RSLP.  When  the  BBM  logic  is enabled,  the  TMC603  measures  the  gate  voltage  and  automatically  delays  switching  on  of  the opposite bridge transistor, until its counterpart is discharged. The  BBM  logic  also prevents unintentional bridge short circuits, in case both, LSx and HSx, become switched on. The first active signal has priority.

Alternatively,  the  required  time  can  be  calculated  and  pre-compensated  in  the  PWM  block  of  the microcontroller driving the TMC603 (external BBM control).

<!-- image -->

figure 6: bridge driver timing

| Pin    | Comments                                                     |
|--------|--------------------------------------------------------------|
| BBM_EN | Enables internal break-before-make circuitry (high = enable) |

## 5.2.3 PWM control via microcontroller

There are a number of different microcontrollers available, which provide specific BLDC commutation units.  However,  the  TMC603  is  designed  in  a  way  in  order  to  allow  BLDC  control  via  standard microcontrollers, which have only a limited number of (free) PWM units. The following figure shows several possibilities to control the BLDC motor with different types of microcontrollers, and shall help to optimally adapt the TMC603 control interface to the features of your microcontroller. The hall signals and further signals, like CURx interconnection to an ADC input, are not shown.

figure 7: examples for microcontroller PWM control

<!-- image -->

## 5.2.4 Slope control

The TMC603 driver stage provides a constant current output stage slope control. This allows to adapt driver  strength  to  the  drive  requirements  of  the  power  MOSFET  and  to  adjust  the  output  slope  by providing  for  a  controlled  gate  charge  and  discharge.  A  slower  slope  causes  less  electromagnetic emission, but at the same time power dissipation of the power transistors rises.  The duration of the complete switching event depends on the total gate charge. The voltage transition of the output takes place during the so called miller plateau (see figure 6). The miller plateau results from the gate to drain capacity  of  the  MOSFET  charging  /  discharging  during  the  switching.  From  the  datasheet  of  the transistor (see example in figure 8) it can be seen, that the miller plateau typically covers only a part (e.g.  one  quarter)  of  the  complete  charging  event.  The  gate  voltage  level,  where  the  miller  plateau starts, depends on the gate threshold voltage of the transistor and on the actual load current.

figure 8: MOSFET gate charge as available in device data sheet vs. switching event

<!-- image -->

The slope time tSLOPE can be calculated as follows:

<!-- formula-not-decoded -->

Whereas QMILLER is the charge the power transistor  needs  for  the  switching  event,  and  IGATE  is  the driver current setting of the TMC603.

Taking into account, that a slow switching event means high power dissipation during switching, and, on the other side a fast switching event can cause EMV problems, the desired slope will be in some ratio  to  the  switching  (chopper)  frequency of the system. The chopper frequency is typically slightly outside the audible range, i.e. 18 kHz to 40 kHz. The lower limit for the slope is dictated by the reverse recovery time of the MOSFET internal diodes, unless additional Schottky diodes are used in parallel to the MOSFETs source-drain diode. Thus, for most applications a switching time between 100ns and 750ns is chosen.

The required slope control resistor RSLP can be calculated as follows:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Example:

A circuit  using  the  transistor  from  the  diagram  above  shall  be  designed  for  a  slope  time  of 200ns. The miller charge of the transistor is about 6nC.

<!-- formula-not-decoded -->

The nearest available resistor value is 330 k  . It sets the gate driver current to roughly 30mA. This is well within the minimum and maximum RSLP resistor limits.

## 5.2.5 Reverse capacity (QGD) protection

The principle of slope control often is realized by gate series resistors with competitor's products, but, as latest MOSFET generations have a fairly high gate-drain charge (QGD), this approach is critical for safe bridge operation. If the gate is not held in the off state with a low resistance, a sudden raise of the voltage at the drain (e.g. when switching on the complementary transistor) could cause the gate to be pulled high via the MOSFETs gate drain capacitance. This would switch on the transistor and lead to a bridge short circuit.

The TMC603 provides for safe and reliable slope controlled operation by switching on a low resistance gate protection transistor (see figure).

figure 9: QGD protected driver stage

<!-- image -->

## 5.2.6 Considerations for QGD protection

This  chapter  gives  the  background  understanding  to  ensure  a  safe  operation  for  MOSFETs  with  a gate-drain (Miller) charge QGD substantially larger than the gate-source charge QGS.

In order to guarantee a safe operation of the QGD protection, it is important to spend a few thoughts on the slope control setting. Please check your transistors' data sheet for the gate-source charge QGS and the  gate-drain  charge  QGD  (Miller  charge).  In  order  to  turn  on  the  MOSFET,  first  the  gate-source charge needs to be charged to the transistor's gate. Now, the transistor conducts and switching starts. During the switching event, the additional QGD needs to be charged to the gate in order to complete the  switching  event.  Wherever  QGD  is  larger  than  QGS,  a  switching  event  of  the  complementary MOSFET may force  the  gate  of  the  switched  off  MOSFET  to  a  voltage  above  the  gate  threshold voltage. For these MOSFETs the QGD protection ensures a reliable operation, as long as the slopes are not set too fast.

Calculating the maximum slope setting for high QGD MOSFETs:

Taking into account effects of the MOSFET bulk diode (compare chapter 5.2.7), the maximum slope of a MOSFET bridge will be around the double slope as calculated from the Miller charge and the gate current. Based on this, we can estimate the current required to hold the MOSFET safely switched off:

During the bridge switching period, the driver must be able to discharge the difference of QGD and QGS while maintaining a gate voltage below the threshold voltage.

Therefore

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

Thus the minimum value required for IOFFQGD can be calculated:

<!-- formula-not-decoded -->

Where ION is the gate current set via RSLP, and IOFFQGD is the QGD protection gate current.

The low side driver has a lower QGD protection current capability than the high side driver, thus we need to check the low side. With its RLSOFFQGD of roughly 15 Ohm, the TMC603 can keep the gate voltage to a level of:

<!-- formula-not-decoded -->

Now we just need to check UGOFF against the MOSFETs output characteristics, to make sure, that no significant amount of drain current can flow.

Example:

A MOSFET, where QGD is 3 times larger than QGS is driven with 100mA gate current.

<!-- formula-not-decoded -->

The TMC603 thus can keep the gate voltage level to a maximum voltage of UGOFF = 133mA * 15Ω = 2V

This is sufficient to keep the MOSFET safely off.

## Note:

Do not add gate series resistors to your MOSFETs! This would eliminate the effect of the QGD protection.  Gate  series  resistors  of  a  few  Ohms  only  may  make  sense,  when  paralleling multiple MOSFETs in order to avoid parasitic oscillations due to interconnection inductivities.

## 5.2.7 Effects of the MOSFET bulk diode

Whenever inductive loads are driven, the inductivity will try to sustain current when current becomes switched off. During bridge switching events, it is important to ensure break-before-make operation, e.g. one MOSFET becomes switches off, before the opposite MOSFET is switched on. Depending on the actual direction of the current, this results in a short moment of a few 100 nanoseconds, where the current flowing through the inductive load forces the bridge output below the lower supply rail or above the  upper  supply  rail.  The  respective  MOSFET  bulk  diode  in  this  case  takes  over  the  current.  The diode saturates at about -1.2V. But the bulk diode is not an optimum device. It typically has reverse recovery  time  of  a  few  ten  to  several  100ns  and  a  reverse  recovery  charge  in  the  range  of  some 100nC or more. Assuming, that the bulk diode of the switching off MOSFET takes over the current, the complementary MOSFET sees the sum of the coil current and the instantaneous current needed to recover the bulk diode when trying to switch  on. The reverse recovery current may even be higher than  the  coil  current  itself!  As  a  result,  a  number  of  very  quick  oscillations  on  the  output  appear, whenever  the  bulk  diode  leaves  the  reverse  recovery  area,  because  up  to  the  half  load  current becomes switched  off  in  a  short  moment.  The  effect  becomes  visible  as  an  oscillation  due  to  the parasitic inductivities of the PCB traces and interconnections. While this is normal, it adds high current spikes, some amount of dynamic power dissipation and high frequency electromagnetic emission. Due to its high frequency, the ringing of this current can also be seen on the gate drives and thus can be easily  mistaken  as  a  gate  driving  problem.  In  order  to  reduce  overshoot  and  ringing,  a  snubber element can be used, e.g. a capacitor  with some nano Farad in series with a resistor in the range some 100mΩ on each motor output.

figure 10: effect of bulk diode recovery

<!-- image -->

A further conclusion from this discussion: Do not set the bridge slope time higher than or near to the reverse recovery time of the MOSFETs, as the parasitic current spikes will multiply the instantaneous current across the bridge. A plausible time is a factor of three or more for the slope time. If this cannot be tolerated please see the discussion on adding Schottky diodes.

## 5.2.8 Adding Schottky diodes across the MOSFET bulk diodes

In order to avoid effects of bulk diode reverse recovery, choose a fast recovery switching MOSFET. The MOSFET transistors can also be bridged by a Schottky diode, which has a substantially faster reverse recovery time. This Schottky diode needs to be chosen in a way that it can take over the full bridge current for a short moment of time only. During this time, the forward voltage needs to be lower than the MOSFETs forward voltage. A small 5A diode like the SK56 can take over a current of 20A at a forward voltage of roughly 0.8V. Even in this constellation, an optional snubber element at the output can reduce overshoot and ringing (see schematic).

figure 11: parallel Schottky diode avoids current spikes due to bulk diode recovery, optional snubber reduces overshoot and ringing

<!-- image -->

## 5.2.9 Short to GND detection

An  overload  condition  of  the  high  side  MOSFET  ('short  to  GND')  is  detected  by  the  TMC603,  by monitoring  the  BM  voltage  during  high  side  on  time.  Under  normal  conditions,  the  high  side  power MOSFET reaches the bridge supply voltage minus a small voltage drop during on time. If the bridge is overloaded, the voltage cannot rise to the detection level within a limited time, defined by an external resistor. Upon detection of an error, the error output is activated. By directly tying it to the enable input, the chip becomes disabled upon detection of a short condition and the error flip flop becomes set.

A  variation  of  the  short  to  GND  detection  delay  allows  adaptation  to  the  slope  control,  as  well  as modification of the sensitivity of the short to GND detection.

<!-- image -->

figure 12: timing of the short to GND detector

| Pin   | Comments                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| RS2G  | The resistor connected to this pin controls the delay between switching on the high side MOSFET and the short to GND check. A 20µA current out of this pin (resistor value of 220 k  to GND) results in a 500ns delay, a lower current gives a longer delay. Disconnecting the pin disables the function. Keep interconnection between IC and resistor short, to avoid stray capacitance to adjacent signal traces of modulating the set current. Resistor range: 47 k  to 1 M  |

## 5.2.10 Error logic

The TMC603 has three different sources for signaling an error:

-  Undervoltage of the low side supply
-  Undervoltage of the charge pump
-  Short to GND detector

Upon any of these events the error output is pulled low. After a short to GND detector event, the error output  remains  active,  until  it  becomes  cleared  by  the  CLR\_ERR.  By  tying  the  error  output  to  the

enable input, the TMC603 automatically switches off the bridges upon an error. The enable input then should be driven via an open collector input plus pull-up resistor, or via a resistor.

<!-- image -->

Feedback connection for automatic self-protection

figure 13: error logic

| Pin      | Comments                                                                                                                                                                                                                                                                              |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /ERR_OUT | Error output (open drain). Signals undervoltage or overcurrent. Tie to ENABLE for direct self-protection of the driver. The internal error condition generator has a higher priority than the CLR_ERR input, i.e. the error condition cannot be cleared, as long as it is persistent. |
| CLR_ERR  | Reset of error flip-flop (active high). Clears error condition. The error condition should at least be cleared once after IC power on.                                                                                                                                                |
| ENABLE   | Enables the power drivers (low: all MOSFETs become actively switched off)                                                                                                                                                                                                             |

## 5.2.11 Paralleling gate drivers for higher gate current

In order to double gate driver current in a BLDC application, two TMC603 can be switched in parallel to have the double gate driver current while taking advantage of all features. Therefore it is important to parallel the gate driver inputs and outputs of the second IC to the first IC, and to also parallel the ERR\_OUT  and  ENABLE  input.  The  driver  strength  of  both  ICs  adds  taking  into  account  their respective slope control resistor. The switching regulator and charge pump of one device can supply both ICs!

## 5.3 Current measurement amplifiers

The  TMC603  amplifies  the  voltage  drop  in  the  three  lower  MOSFET  transistors  in  order  to  allow current measurement without the requirement for current sense (shunt) resistors. This saves cost and board space, as well as the additional power dissipation in the shunt resistors. Optional shunt resistors can be used, e.g. source resistors for each lower MOSFET or a common shunt resistor in the bridge foot  point  if  a  more  precise  measurement  without  the  need  for  calibration  and  temperature compensation is desired. For the TMC603A, the FILTx pins in this mode are switched as inputs for the sensing of the shunt resistors. The internal amplifier conditions the signal for a standard microcontroller.

The  TMC603  CURx  outputs  deliver  a  signal  centered  to  1/3  of  the  5V  VCC  supply.  This  allows measurement of both, negative and positive signals, while staying compatible to a 3.3V microcontroller. The current amplifier is an inverting type.

<!-- image -->

figure 14: schematic of current measurement amplifiers

| Pin       | Comments                                                                                                                                   |
|-----------|--------------------------------------------------------------------------------------------------------------------------------------------|
| CURx      | Output of current measurement amplifier. The output signal is centered to 1/3 VCC.                                                         |
| SENSE_HI  | Switches current amplifiers to high sensitivity (high level). Control by processor to get best sensitivity and resolution for measurement. |
| SAMPLEx   | Optional external control for current measurement sample/hold stage. Set to positive level, if unused                                      |
| FILTx_RSx | Input for optional external sense resistor. To enable, tie pin ENRS_TEST to VCC. This feature has been added in TMC603A.                   |

The voltage drop over the MOSFET (or shunt resistor) is calculated as follows:

<!-- formula-not-decoded -->

whereas x is the ADC output value, x0 is the ADC output value at zero current (e.g. 85 for an 8 bit ADC with 5V reference voltage), ADCMAX is the range of the ADC (e.g. 256 for an 8 bit ADC), VADCREF is the reference voltage of the ADC and ACUR is the currently selected amplification (absolute value) of the TMC603.

With this, the motor current can be calculated using the on resistance RDSON (at 10V) of the MOSFET:

<!-- formula-not-decoded -->

For a shunt resistor based measurement, the same formula is true:

<!-- formula-not-decoded -->

For the shunt resistor measurement, care has to be taken not to exceed the voltage range which can be accepted by the measurement input, i.e. the shunt resistor should be selected in a  way that the voltage  drop  is  at  maximum  0.3V  at  full  motor  current.  This  is  the  maximum  voltage  which  can  be measured.  A  lower  sense  resistor  gives  less  power  dissipation,  but  lower  currents  show  with  less resolution.

## 5.3.1 Current measurement timing

Current measurement is self-timed, in order to only provide valid output voltages. Sampling is active during  the  low  side  ON  time.  The  sampling  is  delayed  by  an  internal  time  delay,  in  order  to  avoid sampling of instable values during settling time of the bridge current and amplifiers. Thus, a minimum ON time  is  required  in  order  to  get  a  current  measurement.  The  output  CURx  reflects  the  current during the measurement. The last value is held in a track and hold circuit as soon as the low side transistor switches off.

figure 15: timing of the current measurement

<!-- image -->

The SAMPLEx pins can be used to refresh the measurement during long on time periods, e.g. when the motor is in standstill, with the low side being continuously on, e.g. in a hall sensor based block commutation scheme with the chopper on the high side. In this application, all SAMPLEx pins can be tied together to one microprocessor output. For advanced applications, where a precise setting of the current sampling point is desired, e.g. centered to the on-time, SAMPLEx pins can be deactivated at the desired point of time, enabling the hold stage.

## 5.3.2 Auto zero cycle

The current measurement amplifiers do an automatic zero cycle during the OFF time of the low side MOSFETs. The zero offset is stored in internal capacitors. This requires switching off the low side at least once, before the first measurement is possible, and on a cyclic basis, to avoid drifting away of the zero reference. This normally is satisfied by the chopper cycle. If commutation becomes stopped, e.g. due to  motor  stand  still,  the  respective  phase  current  measurement  could  drift  away.  After  the  first switching off and on of the low side, the measurement becomes valid again. Therefore, you should integrate a timer in your commutation, which checks for the low side on time exceeding for example 10ms. If the on time of the respective low side reaches this time limit, you can either use the sample input SAMPLEx to refresh the current measurement, by switching it high for at least 1µs, or you switch off the low side for a short time of a few microseconds.

## 5.3.3 Measurement depending on chopper cycle

If the low side on-time on one phase tBLHICURX is too short, a current measurement is not possible. The TMC603 automatically does not sample the current if the minimum low side-on time requirement is not met. This condition can arise in normal operation, e.g. due to the commutation angle defined by a sine commutation chopper scheme. The respective CURx output then does not reflect the phase current. Thus, the CURx output of a phase should be ignored, if the on-time falls below the minimum low side on-time for current measurement (please refer to maximum limit). The correct current value can easily be calculated using the difference of the remaining two current measurements. This results from the fact  that  the  sum  of  all  three  currents  equals  zero  (I U+IV+IW  =  0).  This  way,  all  motor  currents  are always known from the measurement of two phase currents. It is important to know all three phase currents for a sine commutated motor. For block commutation, there is always one low side active and the full current can be seen at this low side.

## 5.3.4 Compensating for offset voltages

In order to measure low current values precisely, the 'zero' value (x0) of 1/3 VCC should be measured via the ADC, rather than being hard coded into the measurement software. This is possible by doing a first  current  measurement  during  motor  stand-still,  with  no  current  flowing  in  the  motor  coils,  e.g. during  a  test  phase  of  the  unit.  The  resulting  value  can  be  stored  and  used  as  zero  reference. However, the influence of offset voltages can be minimized, by using the high sensitivity setting of the amplifiers for low currents, and switching to low sensitivity for higher currents.

## 5.3.5 Getting a precise current value using MOSFET on-resistance

The on-resistance of a MOSFET has a temperature co-efficient, which should not be ignored. Thus, the  temperature  of  the  MOSFETs  must  be  measured,  e.g.  using  an  NTC  resistor,  in  order  to compensate  for  the  variation.  Also,  the  initial  RDSON  depends  upon  fabrication  tolerance  of  the MOSFETs. If exact measurement is desired, an adjustment should be done during initial testing of each product. For applications, where an adjustment is not possible, external sense resistors can be used  instead.  A  single  resistor  in  the  GND  line  often  is  sufficient  for  block  commutation.  For  sine commutation, three sense resistors should be used.

## 5.4 Power supply

The  TMC603  integrates  a  +12V  switching  regulator  for  the  gate  driver  supply  and  a  +5V  linear regulator for supply of the low voltage circuitry. The switching regulator is designed in a way, that  it provides  the  charge  pump  voltage  by  using  a  Villard  voltage  doubler  circuit.  It  is  able  to  provide enough current to supply a number of digital circuits by adding an additional 3.3V or 5V low voltage linear  or  switching  regulator.  If  a  +5V  microcontroller  with  low  current  requirement  is  used, the +5V regulator is sufficient, to also supply the microcontroller.

<!-- image -->

figure 16: power supply block with example values

| Pin   | Comments                                                                                                                                                         |
|-------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| COSC  | Oscillator capacitor for step down regulator. A 470pF capacity gives 100kHz operation. Do not leave this pin unconnected. Tie to GND, if oscillator is not used. |
| SWOUT | Switch regulator transistor output. The output allows driving of a small signal P- channel MOSFETs as well as PNP small signal transistors                       |
| 5VOUT | Output of internal 5V linear regulator. Provided for VCC supply                                                                                                  |

## 5.4.1 Switching regulator

The switching regulator has been designed for high stability. It provides an upper duty cycle limit, in order to ensure switching operation even at low supply voltage. This allows the combination with a Villard voltage doubler. The application schematic shows a number of standard values, however, the coil and oscillator frequency can be altered:

The choice of the external switching regulator transistor depends on the desired load current and the supply voltage. Especially for high switching frequencies, a low gate charge MOSFET is required. The following table shows an overview of available transistors and indicative operation limits. For a higher output current, two transistors can be used in parallel. In this case the switching frequency should be halved, because of the higher gate charge leading to slower switching slopes.

| transistor type   | manufacturer   | gate charge (typ.)   | max. frequency   | max. voltage   | max. load current   |
|-------------------|----------------|----------------------|------------------|----------------|---------------------|
| BC857             | div.           | - (bipolar)          | 100 kHz          | 40V            | 80 mA               |
| BSS84             | Fairchild, NXP | 0.9 nC               | 300 kHz          | 50V            | 120 mA              |
| TP0610K           | Vishay         | 1.3 nC               | 230 kHz          | 60V            | 150 mA              |
| NDS0605           | Fairchild      | 1.8 nC               | 175 kHz          | 60V            | 150 mA              |
| TP0202K           | Vishay         | 1 nC                 | 300 kHz          | 30V            | 350 mA              |

For the catching diode, use a Schottky type with sufficient voltage and current rating.

The choice of a high switching frequency allows the use of a smaller and less expensive inductor as well  as  a  lower  capacitance  for  the  Villard  circuit  and  the  switching  regulator  output  capacitor. However, the combination of inductor, transistor and switching frequency should be carefully selected and should be adapted to the load current, especially if a high load current is desired.

Choice of capacitor for the switching frequency (examples):

| C OSC   | frequency f OSC   | inductivity example   | Remark                         |
|---------|-------------------|-----------------------|--------------------------------|
| 470 pF  | 100 kHz           | 220 µH                |                                |
| 220 pF  | 175 kHz           | 150 µH                |                                |
| 100 pF  | 300 kHz           | 100 µH                | Not recommended for V VM < 14V |

The switcher inductivity shall be chosen in a way, that it can sustain part of the load current between each  two  switching  events.  If  the  inductivity  is  too  low,  the  current  will  drop  to  zero  and  higher frequency  oscillations  for  the  last  part  of  each  cycle  will  result  (discontinuous  mode).  The  required transistor peak current will rise and thus efficiency falls.

For a low load current, operation in discontinuous mode is possible. If a high output current is required, a good design value for continuous mode is to target a current ripple in the coil of +/-40%.

To give a coarse hint on the required inductor you can use the following formula for calculating the minimum inductivity required for continuous operation, based on a ripple current which is 100% of the load current:

<!-- formula-not-decoded -->

VVM is the supply voltage. For low voltage operation (15V or less), the output voltage sinks from 12V to 0.85*VVM. The formula can be adapted accordingly.

IOUT is the current draw at 12V.

For 40% current ripple, you can use roughly the double inductivity.

If ripple is not critical, you can use a much smaller inductivity, e.g. only 5% to 50% of the calculated value. But at the same time switching losses will rise and efficiency and current capability sink due to higher losses in the switching transistor. If the TMC603 does not supply additional external circuitry, current draw is very low, about 20mA in normal operation. This would lead to large inductivity values. In this case we recommend going for the values given in the table above in order to optimize coil cost.

Example:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

For continuous operation, a 330µH or 470µH coil would be required. The minimum inductivity would be around 100µH.

Note:

Use an inductor, which has a sufficient nominal current rating. Keep switching regulator wiring away from sensitive signals. When using an open core inductor, please pay special care to not disturbing sensitive signals.

## 5.4.2 Charge pump

The Villard voltage doubler circuit relies on the switching regulator generating a square wave at the switching transistor output with a height corresponding to the supply voltage. In order to work properly the  load  drawn  at  +12V  needs  to  be  higher  than  the  load  drawn  at  the  charge  pump  voltage.  This normally is satisfied when the IC is supplied by the step down regulator. For low voltage operation, the charge pump voltage needs to be as high as possible to guarantee a high gate drive voltage, thus, a dual Schottky diode should be used for the charge pump in low voltage applications.

## 5.4.3 Filter capacitors for switching regulator and charge pump

The filter capacitors in the switching regulator and the charge pump are required to provide current for the high current spikes which are caused by switching up to three MOSFETs at the same time. The required amount of charge can be estimated when looking at the MOSFETs gate charge.  The gate voltage should not drop significantly due to the switching event, e.g. only 100mV. Additionally, the 12V filter  capacitor  provides  charge  for  load  spikes  on  the  12V  net  and  filter  switching  ripple.  In applications, where board space is critical, lower capacitance values can be used.

Choice of filter capacitors in the switching regulator for different current requirements (example):

| 12V load current   | power MOSFET gate charge   | 12V filter capacitor (electrolytic/ceramic)   | charge pump filter capacitor (tantalum / ceramic)   |
|--------------------|----------------------------|-----------------------------------------------|-----------------------------------------------------|
| <20mA              | <20nC                      | 22µF (or 4.7µF ceramic)                       | 1µF (e.g. ceramic)                                  |
| <20mA              | <50nC                      | 22µF (or 10µF ceramic)                        | 2.2µF (e.g. ceramic)                                |
| <50mA              | >50nC                      | 47µF (or 10µF ceramic)                        | 4.7µF                                               |
| 100mA              | >50nC                      | 100µF (or 10µF ceramic)                       | 4.7µF                                               |

## 5.4.4 Supply voltage filtering and layout considerations

As  with  most  integrated  circuits,  ripple  on  the  supply  voltage  should  be  minimized  in  order  to guarantee a stable operation and to avoid feedback oscillations via the supply  voltages. Therefore, use a ceramic capacitor of 100nF per supply voltage pin (VM to GND, VLS to GND and VCC to GND and VCP to VM). Please pay attention to also keep voltage ripple on VCC pin low, especially when the 5V output is  used  to  supply  additional  external  circuitry.  It  also  is  important  to  make  sure,  that  the resistance of the power supply is low when compared to the load circuit. Especially high frequency voltage ripple &gt;1MHz should be suppressed using filter capacitors near the power bridge or near the board  power  supply.  The  VM  terminal  is  used,  to  detect  short  to  GND  situations,  thus,  it  has  to correspond to the bridge power supply.  In high noise applications, it may make sense to filter VCP supply  separately  against  ripple  to  GND.  A  large  low  ESR  electrolytic  capacitor  across  the  bridge supply (VM to GND) should also be used, because it effectively suppresses high frequency ripple. This cannot be accomplished with ceramic capacitors. GND and GNDP pins should be tied to a common, massive GND plane. Pay attention to power routing: Use short and wide, straight traces. The PCB power  supply  should  be  placed  near  the  driver  bridge,  where  most  current  is  consumed,  to  avoid current  drop  in  the  plane  between  critical  components  like  TMC603  and  microcontroller.  This  is especially is important to get a precise current measurement.

## 5.4.5 Reverse polarity protection

Some applications need to be protected against a reversed biased power supply, i.e. for automotive applications. A highly efficient reverse polarity protection based on an N channel MOSFET can simply be  added  due  to  the  availability  of  a  charge  pump  voltage.  This  type  of  reverse  polarity  protection allows feeding back energy into the supply,  and thus is preferable to a pure diode reverse polarity protection.

figure 17: adding a reverse polarity protection

<!-- image -->

## 5.4.6 Standby with zero power consumption

In battery powered applications, a standby function often is desired. It allows switching the unit on or off without the need for a mechanical high power switch. In principle, the bridge driver MOSFETs can switch off the motor completely, but the TMC603 and its switching regulator still need to be switched off  in  order  to  reduce  current  consumption  to  zero.  Only  a  low  energy  standby  power  supply  will remain on, in order to wake up the system controller. This standby power supply can be generated by a low current zener diode plus a resistor to the battery voltage, buffered by a capacitor. The example in the schematic uses a P channel MOSFET to switch off power for the TMC603 and any additional ICs  which  are  directly  supplied  by  the  battery.  Before  entering  standby  mode,  the  motor  shall  be stopped and the TMC603 should be disabled.

figure 18: low power standby

<!-- image -->

## 5.4.7 Low voltage operation down to 9V

In  low  voltage  operation,  it  is  important  to  keep  the  gate  driving  voltages  as  high  as  possible.  The switching regulator for VLS thus is not needed and can be left out. Tie the pin COSC to GND. VLS becomes directly tied to +VM, which is possible as long as the supply voltage does not exceed 14V (16V peak). However, now a source for the Villard voltage doubler is missing. A simple solution is to use a CMOS 555 timer circuit (e.g. TLC555) oscillating at 250 kHz (square wave) to drive the voltage doubler.

figure 19: low voltage operation

<!-- image -->

## 5.5 Test output

The test output is reserved for manufacturing test. It is used as an input for a normal application. Tie to GND or VCC in application.

| Pin       | Comments                                                                                                                                                                                                                                                                                                               |
|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ENRS_TEST | Enable sense resistor input and output for test voltages. Output resistance 25kOhm +-30%. Reset: ENABLE(=low); Clock: SCCLK (rising edge). Test voltage sequence: 0: 0V 1..3 / 4..6 / 7..9: Gate_HS_Off, Gate_LS_On, Gate_LS_Off (driver 1/2/3) 10..14: currently unused 15: 0V (no further counts: Reset for restart) |

## 5.6 ESD sensitive device

The TMC603 is an ESD sensitive CMOS device and also MOSFET transistors used in the application schematic are very sensitive to electrostatic discharge. Take special care to use adequate grounding of  personnel  and  machines  in  manual  handling.  After  soldering  the  devices  to  the  board,  ESD requirements are more relaxed. Failure to do so can result in defect or decreased reliability.

<!-- image -->

## 6 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more than one maximum rating at a time for extended periods shall be avoided by application design.

| Parameter                                                          | Symbol   | Min     | Max       | Unit   |
|--------------------------------------------------------------------|----------|---------|-----------|--------|
| Supply voltage                                                     | V VM     | -0.5    | 50        | V      |
| Supply and bridge voltage max. 20000s                              | V VM     |         | 55        | V      |
| Low side driver supply voltage                                     | V VLS    | -0.5    | 14        | V      |
| Low side driver supply voltage max. 20000s                         | V VLS    | -0.5    | 16        | V      |
| Charge pump voltage (related to GND)                               | V VCP    | -0.5    | 60        | V      |
| Charge pump voltage max. 20000s                                    | V VCP    |         | 65        | V      |
| Charge pump voltage during power up / down                         | V VCP    | V M -10 | V M +16   | V      |
| Logic supply voltage                                               | V VCC    | -0.5    | 6.0       | V      |
| Logic input voltage                                                | V I      | -0.5    | V CC +0.5 | V      |
| Analog input voltage                                               | V IA     | -0.5    | V CC +0.5 | V      |
| Voltages on driver pins (HSx, LSx, BMx)                            | V DRVIO  | -0.7    | 0.7       | V      |
| Relative high side driver voltage (V HSX - V BMX )                 | V HSBM   | -20     | 20        | V      |
| Maximum current to / from digital pins and analog low voltage I/Os | I IO     |         | +/-10     | mA     |
| 5V regulator continuous output current                             | I 5VOUT  |         | 40        | mA     |
| 5V regulator short time output current                             | I 5VOUT  |         | 150       | mA     |
| Junction temperature                                               | T J      | -50     | 150       | °C     |
| Storage temperature                                                | T STG    | -55     | 150       | °C     |
| ESD-Protection (Human body model, HBM), in application             | V ESDAP  |         | 1         | kV     |
| ESD-Protection (Human body model, HBM), device handling            | V ESDDH  |         | 100       | V      |

## 7 Electrical Characteristics

## 7.1 Operational Range

| Parameter                                                     | Symbol   |    Min |     Max | Unit   |
|---------------------------------------------------------------|----------|--------|---------|--------|
| Ambient temperature                                           | T A      | -40    |  125    | °C     |
| Junction temperature                                          | T J      | -40    |  140    | °C     |
| Supply voltage (standard circuit)                             | V VM     |  10    |   50    | V      |
| Supply voltage (low voltage application: V VLS =V VM )        | V VM     |   9    |   14    | V      |
| Low side driver supply voltage                                | V VLS    |   9    |   13    | V      |
| Differential charge pump voltage measured to VM (V VCP - V VM | V CPD    |   8    |   12    | V      |
| Logic supply voltage                                          | V VCC    |   4.75 |    5.25 | V      |
| Slope control resistor with V VM <30V                         | R SLP    |  60    |  500    | k     |
| Slope control resistor with V VM >30V                         | R SLP    | 100    |  500    | k     |
| Short to GND control resistor                                 | R S2G    |  47    | 1000    | k     |
| Output slope                                                  | t SLP    | 100    | 1000    | ns     |

## 7.2 DC Characteristics and Timing Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless  otherwise  specified.  Typical  values  represent  the  average  value  of  all  parts  measured  at +25°C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

| NMOS low side driver note 1)                           | DC-Characteristics V VCC = 5.0 V, V VLS = 12V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V   |
|--------------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|
| Parameter                                              | Symbol                                          | Conditions                                      | Min                                             | Typ                                             | Max                                             | Unit                                            |
| Gate drive current LSx low side switch ON              | I LSON                                          | V LSX = 5V R SLP = 68k                          |                                                 | 150                                             |                                                 | mA                                              |
| Gate drive current LSx low side switch OFF             | I LSOFF                                         | V LSX = 5V R SLP = 68k                          |                                                 | -150                                            |                                                 | mA                                              |
| Gate drive current LSx low side switch ON              | I LSON                                          | V LSX = 5V R SLP = 100k                         | 75                                              | 100                                             | 125                                             | mA                                              |
| Gate drive current LSx low side switch OFF             | I LSOFF                                         | V LSX = 5V R SLP = 100k                         | -75                                             | -100                                            | -125                                            | mA                                              |
| Gate drive current LSx low side switch ON              | I LSON                                          | V LSX = 5V R SLP = 220k                         |                                                 | 50                                              |                                                 | mA                                              |
| Gate drive current LSx low side switch OFF             | I LSOFF                                         | V LSX = 5V R SLP = 220k                         |                                                 | -50                                             |                                                 | mA                                              |
| Gate Off detector threshold                            | V GOD                                           | V LSX falling                                   |                                                 | 1                                               |                                                 | V                                               |
| Q GD protection resistance after detection of gate off | R LSOFFQGD                                      | V LSX = 2V                                      |                                                 | 15                                              |                                                 |                                               |
| Delay LS driver switch on BLx to LSx at 50%            | t LSON                                          | R SLP = 100k C LSX = 100pF                      | 35                                              | 70                                              | 140                                             | ns                                              |
| Delay LS driver switch off BLx to LSx at 50%           | t LSOFF                                         | R SLP = 100k C LSX = 100pF                      | 80                                              | 160                                             | 320                                             | ns                                              |

| NMOS high side driver note 1)                                      | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V   |
|--------------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------|
| Parameter                                                          | Symbol                                                         | Conditions                                                     | Min                                                            | Typ                                                            | Max                                                            | Unit                                                           |
| Gate drive current HSx high side switch ON                         | I HSON                                                         | V HSX = 5V R SLP = 68k                                         |                                                                | 150                                                            |                                                                | mA                                                             |
| Gate drive current HSx high side switch OFF                        | I HSOFF                                                        | V HSX = V M +5V R SLP = 68k                                    |                                                                | -150                                                           |                                                                | mA                                                             |
| Gate drive current HSx high side switch ON                         | I HSON                                                         | V HSX = 5V R SLP = 100k                                        | 75                                                             | 100                                                            | 150                                                            | mA                                                             |
| Gate drive current HSx high side switch OFF                        | I HSOFF                                                        | V HSX = V M +5V R SLP = 100k                                   | -75                                                            | -100                                                           | -125                                                           | mA                                                             |
| Gate drive current HSx high side switch ON                         | I HSON                                                         | V HSX = 5V R SLP = 220k                                        |                                                                | 50                                                             |                                                                | mA                                                             |
| Gate drive current HSx high side switch OFF                        | I HSOFF                                                        | V HSX = V M +5V R SLP = 220k                                   |                                                                | -50                                                            |                                                                | mA                                                             |
| Gate Off detector threshold high side V HSX -V BMX , BM level high | V GOD                                                          | V HSX falling V BMX > V GOBM                                   |                                                                | 0                                                              |                                                                | V                                                              |
| Gate Off detector threshold high side V BMX , BM level low         | V GOBM                                                         | V BMX falling                                                  |                                                                | 3.5                                                            |                                                                | V                                                              |
| Q GD protection current after detection of gate off                | I HSOFFQGD                                                     | V BMX = 24V V HSX = V BMX +2V                                  |                                                                | 300                                                            |                                                                | mA                                                             |
| Delay HS driver switch on BHx to HSx at 50%                        | t HSON                                                         | R SLP = 100k V M = 24V C HSX = 100pF                           | 75                                                             | 150                                                            | 300                                                            | ns                                                             |
| Delay HS driver switch off BHx to HSx at 50%                       | t HSOFF                                                        | R SLP = 100k V M = 24V C HSX = 100pF                           | 60                                                             | 120                                                            | 240                                                            | ns                                                             |

| Break-before-make block note 1)           | Timing-Characteristics V VM = 48 V, R SLP = 100K   | Timing-Characteristics V VM = 48 V, R SLP = 100K   | Timing-Characteristics V VM = 48 V, R SLP = 100K   | Timing-Characteristics V VM = 48 V, R SLP = 100K   | Timing-Characteristics V VM = 48 V, R SLP = 100K   | Timing-Characteristics V VM = 48 V, R SLP = 100K   |
|-------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|
| Parameter                                 | Symbol                                             | Conditions                                         | Min                                                | Typ                                                | Max                                                | Unit                                               |
| Break-before-make delay LSx off to HSx on | t BBMLH                                            | Measured at 1V gate-source voltage                 |                                                    | 160                                                |                                                    | ns                                                 |
| Break-before-make delay HSx off to LSx on | t BBMHL                                            | Measured at 1V gate-source voltage                 |                                                    | 290                                                |                                                    | ns                                                 |

| RSLP input and RS2G input                                                  | DC-Characteristics V VCC = 5.0 V   | DC-Characteristics V VCC = 5.0 V   | DC-Characteristics V VCC = 5.0 V   | DC-Characteristics V VCC = 5.0 V   | DC-Characteristics V VCC = 5.0 V   | DC-Characteristics V VCC = 5.0 V   |
|----------------------------------------------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| Parameter                                                                  | Symbol                             | Conditions                         | Min                                | Typ                                | Max                                | Unit                               |
| Typical voltage at RSLP and RS2G input, depending on the external resistor | V RSLP V RS2G                      | R SLP = 100 k  R S2G = 100 k    |                                    | 3.8                                |                                    | V                                  |
| Typical voltage at RSLP and RS2G input, depending on the external resistor |                                    | R SLP = 470 k  R S2G = 470 k    |                                    | 4.0                                |                                    |                                    |

| Short to GND detector                                | DC-Characteristics, Timing-Characteristics V VM = 24 V   | DC-Characteristics, Timing-Characteristics V VM = 24 V   | DC-Characteristics, Timing-Characteristics V VM = 24 V   | DC-Characteristics, Timing-Characteristics V VM = 24 V   | DC-Characteristics, Timing-Characteristics V VM = 24 V   | DC-Characteristics, Timing-Characteristics V VM = 24 V   |
|------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|----------------------------------------------------------|
| Parameter                                            | Symbol                                                   | Conditions                                               | Min                                                      | Typ                                                      | Max                                                      | Unit                                                     |
| Short to GND detection level (V VM - V BM )          | V BMS2G                                                  |                                                          | 1                                                        | 1.5                                                      | 2.3                                                      | V                                                        |
| Short to GND detector delay                          | t S2G                                                    | R S2G = 68k                                              | 200                                                      | 320                                                      | 450                                                      | ns                                                       |
| (HSx going active to short detector active / ERR_OUT | t S2G                                                    | R S2G = 150k                                             | 500                                                      | 750                                                      | 1000                                                     | ns                                                       |
| falling)                                             | t S2G                                                    | R S2G = 220k                                             | 700                                                      | 1000                                                     | 1300                                                     | ns                                                       |
| falling)                                             | t S2G                                                    | R S2G = 470k                                             | 1400                                                     | 2000                                                     | 2600                                                     | ns                                                       |

| Supply current     | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V, R SLP = 100k, V VM = 48V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V, R SLP = 100k, V VM = 48V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V, R SLP = 100k, V VM = 48V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V, R SLP = 100k, V VM = 48V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V, R SLP = 100k, V VM = 48V   | DC-Characteristics V VCC = 5.0 V, V VLS = 12V, V CPD = 10.5V, R SLP = 100k, V VM = 48V   |
|--------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Parameter          | Symbol                                                                                   | Conditions                                                                               | Min                                                                                      | Typ                                                                                      | Max                                                                                      | Unit                                                                                     |
| VM supply current  | I VM                                                                                     |                                                                                          |                                                                                          | 0.45                                                                                     | 0.68                                                                                     | mA                                                                                       |
| VLS supply current | I VLS                                                                                    | not including I 5VOUT                                                                    |                                                                                          | 4.6                                                                                      | 6.9                                                                                      | mA                                                                                       |
| VCP supply current | I VCP                                                                                    |                                                                                          |                                                                                          | 1.6                                                                                      | 2.4                                                                                      | mA                                                                                       |
| VCC supply current | I VCC                                                                                    |                                                                                          |                                                                                          | 2.9                                                                                      | 4.4                                                                                      | mA                                                                                       |

| Undervoltage detectors                | DC-Characteristics V VCC = 5.0 V   | DC-Characteristics V VCC = 5.0 V   | DC-Characteristics V VCC = 5.0 V   | DC-Characteristics V VCC = 5.0 V   | DC-Characteristics V VCC = 5.0 V   | DC-Characteristics V VCC = 5.0 V   |
|---------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| Parameter                             | Symbol                             | Conditions                         | Min                                | Typ                                | Max                                | Unit                               |
| VLS undervoltage level                | V VLSUV                            |                                    | 7                                  | 7.85                               | 8.5                                | V                                  |
| VCP undervoltage level (V VCP - V M ) | V CPDUV                            | V VCP falling                      | 5.8                                | 6.6                                |                                    | V                                  |
| VCP voltage OK level (V VCP -V M )    |                                    | V VCP rising                       |                                    | 7.1                                | 7.8                                | V                                  |
| VCP undervoltage detector Hysteresis  |                                    |                                    |                                    | 0.5                                |                                    | V                                  |

| Switching regulator / Charge pump                         | DC-Characteristics V VCC = V 5VOUT   | DC-Characteristics V VCC = V 5VOUT   | DC-Characteristics V VCC = V 5VOUT   | DC-Characteristics V VCC = V 5VOUT   | DC-Characteristics V VCC = V 5VOUT   | DC-Characteristics V VCC = V 5VOUT   |
|-----------------------------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|--------------------------------------|
| Parameter                                                 | Symbol                               | Conditions                           | Min                                  | Typ                                  | Max                                  | Unit                                 |
| Switch output drive current (on)                          | I SWOUT                              | V SWOUT = V VM                       | -1.5                                 | -2.2                                 | -3.0                                 | mA                                   |
| Switch output drive current (off)                         | I SWOUT                              | V SWOUT = V VM - 5V                  |                                      | 10                                   |                                      | mA                                   |
| Switch start-up drive current during VCC undervoltage     | I SWOUT                              | V SWOUT = V VM V VM = 24V V VLS < 2V | -0.4                                 | -0.8                                 |                                      | mA                                   |
| Switch output drive voltage (on) V VM - V SWOUT           | V SWOUT                              | I SWOUT = 0                          | 8                                    | 12                                   | 15                                   | V                                    |
| Switch regulator output voltage                           | V 12VOUT                             | V VM > 16V                           | 11                                   | 12                                   | 13.1                                 | V                                    |
| Switch regulator output voltage                           |                                      | V VLSUV < V VM < 16V                 |                                      | 0.85 V VM                            |                                      | V                                    |
| Oscillator output resistance                              | R COSC                               | T J = 25°C                           |                                      | 14.1                                 |                                      | k                                   |
| Lower oscillator threshold voltage                        | V COSC                               |                                      |                                      | 1/3 V VCC                            |                                      | V                                    |
| Upper oscillator threshold voltage                        | V COSC                               |                                      |                                      | 2/3 V VCC                            |                                      | V                                    |
| Oscillator threshold voltage for maximum duty cycle limit | V COSC                               |                                      |                                      | 6/15 V VCC                           |                                      | V                                    |
| Maximum duty cycle switch regulator                       | DC SWOUT                             | V VLS = 10V f CHOP = 100kHz          | 63                                   | 70                                   | 77                                   | %                                    |
| Switch frequency nominal                                  | f SW                                 | C OSC = 470pF                        | 70                                   | 100                                  | 130                                  | kHz                                  |
| Switch frequency range (design reference value only)      | f SW                                 |                                      | 0 (off)                              |                                      | 300                                  | kHz                                  |
| Charge pump voltage (design reference value only)         | V CPD                                | V VLS = 12V I VCP = 1.6mA            |                                      | 10.6                                 |                                      | V                                    |

| Linear regulator                                            | DC-Characteristics   | DC-Characteristics              | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|-------------------------------------------------------------|----------------------|---------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                   | Symbol               | Conditions                      | Min                  | Typ                  | Max                  | Unit                 |
| Output voltage                                              | V 5VOUT              | I 5VOUT = 10mA T J = 25°C       | 4.75                 | 5.0                  | 5.25                 | V                    |
| Output resistance                                           | R 5VOUT              | Static load                     |                      | 2                    |                      |                     |
| Deviation of output voltage over the full temperature range | V 5VOUT(DEV)         | I 5VOUT = 10mA T J = full range |                      | 30                   | 60                   | mV                   |
| Output current capability                                   | I 5VOUT              | V VLS = 12V                     | 100                  |                      |                      | mA                   |
| Output current capability                                   | I 5VOUT              | V VLS = 8V                      | 60                   |                      |                      | mA                   |
| Output current capability                                   | I 5VOUT              | V VLS = 6.5V                    | 20                   |                      |                      | mA                   |

| Digital logic level          | DC-Characteristics V VCC = 5.0 V +/-10%   | DC-Characteristics V VCC = 5.0 V +/-10%   | DC-Characteristics V VCC = 5.0 V +/-10%   | DC-Characteristics V VCC = 5.0 V +/-10%   | DC-Characteristics V VCC = 5.0 V +/-10%   | DC-Characteristics V VCC = 5.0 V +/-10%   |
|------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Parameter                    | Symbol                                    | Conditions                                | Min                                       | Typ                                       | Max                                       | Unit                                      |
| Input voltage low level      | V INLO                                    |                                           | -0.3                                      |                                           | 0.8                                       | V                                         |
| Input voltage high level     | V INHI                                    |                                           | 2.0                                       |                                           | V VCC +0.3                                | V                                         |
| Output voltage low (ERR_OUT) | V OUTLO                                   | I OUTLO = 1mA                             |                                           |                                           | 0.4                                       | V                                         |

| Current measurement block                                                                                        | DC-Characteristics, Timing-Characteristics V VM = 24 V, V VCC = 5.0 V   | DC-Characteristics, Timing-Characteristics V VM = 24 V, V VCC = 5.0 V   | DC-Characteristics, Timing-Characteristics V VM = 24 V, V VCC = 5.0 V   | DC-Characteristics, Timing-Characteristics V VM = 24 V, V VCC = 5.0 V   | DC-Characteristics, Timing-Characteristics V VM = 24 V, V VCC = 5.0 V   | DC-Characteristics, Timing-Characteristics V VM = 24 V, V VCC = 5.0 V   |
|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------|
| Parameter                                                                                                        | Symbol                                                                  | Conditions                                                              | Min                                                                     | Typ                                                                     | Max                                                                     | Unit                                                                    |
| Amplification of voltage                                                                                         | A CURLO+                                                                | SENSE_HI = GND                                                          | -4.72                                                                   | -4.82                                                                   | -4.92                                                                   | V/V                                                                     |
| V FILTXRSX (or V BMX ) to V CURX                                                                                 | A CURHI+                                                                | SENSE_HI = VCC                                                          | -20.4                                                                   | -20.8                                                                   | -21.2                                                                   | V/V                                                                     |
| Zero current level at CURX                                                                                       | V 0CURX                                                                 |                                                                         | V VCC /3 -50mV                                                          | V VCC /3 -11mV                                                          | V VCC /3 +30mV                                                          | V                                                                       |
| Measurement voltage range at V BMX                                                                               | V BMX                                                                   | SENSE_HI = GND                                                          | -300                                                                    |                                                                         | 300                                                                     | mV                                                                      |
|                                                                                                                  |                                                                         | SENSE_HI = VCC                                                          | -70                                                                     |                                                                         | 70                                                                      | mV                                                                      |
| V CURX output voltage swing low                                                                                  | V CURX                                                                  |                                                                         |                                                                         | 0.02                                                                    | 0.1                                                                     | V                                                                       |
| V CURX output voltage swing high                                                                                 | V CURX                                                                  |                                                                         | V VCC -1.2                                                              | V VCC -0.6                                                              |                                                                         | V                                                                       |
| Ripple voltage / hold step noise at output note 2)                                                               | V CURX                                                                  | V BMX = 0V SENSE_HI = GND                                               |                                                                         | 17                                                                      | 26                                                                      | mV                                                                      |
|                                                                                                                  |                                                                         | V BMX = 0V SENSE_HI = VCC                                               |                                                                         | 50                                                                      | 75                                                                      | mV                                                                      |
| Minimum low side on time for current measurement (Delay from BLx going active to CURx tracking amplified signal) | t BLHICURX                                                              | SAMPLEx = VCC                                                           | 3.5                                                                     | 5.3                                                                     | 7.2                                                                     | µs                                                                      |
| Delay from SAMPLEx going active to CURx tracking amplified signal                                                | t SMPHICURX                                                             | SAMPLEx = VCC                                                           |                                                                         | t BLHICURX / 2                                                          |                                                                         | µs                                                                      |
| Delay from BLx or SAMPLEx going inactive to CURx hold                                                            | t BLXLO                                                                 |                                                                         |                                                                         | 0                                                                       |                                                                         | µs                                                                      |
| Sample and hold drop during hold period                                                                          | dV CURX                                                                 |                                                                         |                                                                         | 0.001                                                                   | 1.6                                                                     | V/s                                                                     |
| Auto zero drop of current amplifier during sampling period (low side on)                                         | dV CURX                                                                 |                                                                         |                                                                         | 0.003                                                                   | 3                                                                       | V/s                                                                     |
| Minimum initial auto zero period (low side off or SAMPLEx low) after power on                                    | t BLXLO0 t SMPXLO0                                                      |                                                                         | 5                                                                       |                                                                         |                                                                         | µs                                                                      |
| Minimum refreshing time for auto zero during continuous measurement, e.g. each 10ms                              | t SMPXLO                                                                |                                                                         | 1                                                                       |                                                                         |                                                                         | µs                                                                      |
| Minimum sample period after t BLHICURX for a 100% current step                                                   | t BLXHIADD                                                              |                                                                         | 1                                                                       |                                                                         |                                                                         | µs                                                                      |
| Output current limit at CURx                                                                                     | I CURX                                                                  | Current sourcing                                                        | 0.45                                                                    |                                                                         |                                                                         | mA                                                                      |

2) Note on first ICs TMC603 rather than TMC603A:

CURx outputs are sensible to ripple voltage on VCC pin and frequency below 5MHz. Ripple voltage is amplified by 1/3 * Set amplification, i.e. factor 1.5 with SENSE\_HI low and factor 6 with SENSE\_HI high. Thus, it is suggested to use 5VOUT only for VCC supply, if possible, if exact measurements are required. This is corrected for TMC603A, ripple does not become amplified.

## 8 Designing the application

## 8.1 Choosing the best fitting power MOSFET

There  is  a  huge  choice  of  power  MOSFETs  available.  MOSFET  technology  has  been  improved dramatically  in  the  last  20  years,  and  gate  drive  requirements  have  shifted  from  generation  to generation. The first generations of MOSFETs have a comparatively high gate capacity at a moderate RDSON.  Their  gate-source  capacity  is  two  to  five  times  as  high  as  the  capacity  of  the  gate-drain junction. These MOSFETs have a high gate charge and thus require high current gate drive, but they are easy to use, because internal feedback is low. In the early 2000s new MOSFETs have emerged, where  RDSON  is  much  lower,  and  gate-source  capacity  has  been  improved  by  minimizing  structural overlap.  Thus,  the  capacitance  ratio  has  shifted,  and  feedback  has  become  quite  high.  These MOSFETs thus are much more critical, and power drives have to actively force the gate off to prevent the  bridges  from  cross-conduction  due  to  feedback  from  the  drain  to  gate.  Latest  generation MOSFETs,  like  the  Vishay  W-Fet  technology,  further  reduce  RDSON,  while  reducing  the  capacity between the channel and the drain. Thus, these MOSFETs have lowest gate charge, and again, are easier to control than the previous generation of MOSFETs. Further enhancements of MOSFETs have been done, to reduce the reverse recovery charge of the bulk diode. The bulk diode reverse recovery charge otherwise is a source for high current spikes an oscillations in push-pull output stages driving inductive loads like motor coils.

When choosing the MOSFET, the following points shall be considered:

- 
- 
- Maximum voltage VDSS:

Choose  at  least  a  few  volts  above  your  maximum  supply  voltage,  taking  into  account  that  the motor can feed back energy when slowing down, and thus the supply voltage can rise. On the other hand, a transistor rated for a higher voltage is more expensive and has a higher gate charge (see next chapter).

- On-resistance RDSON:

A low RDSON gives low static dissipation, but gate charge and cost increases. Take into  account that  a  good  part  of  the  power  dissipation  results  from  the  switching  events  in  a  chopped  drive system. Further, to allow a current measurement, the RDSON should be in a range, that the voltage drop can be used for measurement. A voltage drop of 50mV or higher at nominal motor current is a good target.

-  Gate charge QG and switching speed:

The switching speed of the TMC603 application depends on the gate charge and the gate drive current  setting.  The  switching  speed  should  be  compared  to  the  required  chopper  frequency. Choose  the  chopper  frequency  low  to  reduce  dynamic  losses.  When  the  application  does  not require  slow,  EMV  optimized  switching  slopes,  choose  a  low  gate  charge  transistor  to  reduce dynamic losses.

-  Gate threshold voltage VGS(TH):

Most MOSFETs have a specified on-resistance at a gate drive voltage of 10V. Some MOSFETs are  optimized  for  direct  control  from  logic  ICs  with  5  or  even  3.3V.  They  provide  a  low  gate threshold voltage of 1V to 2V. MOSFETs with higher gate threshold voltage should be preferred, because they are less sensible to effects of the drain gate capacity and cross conduction.

- 
- Reverse recovery charge QRR of bulk diode:

A lower reverse recovery charge QRR and lower reverse recovery time tRR reduce peak currents in the  bridge  and  allow  for  faster  switching.  Snubber  elements  at  the  output  are  required  for  high reverse recovery charge transistors. Otherwise, Schottky diodes should be used to bridge the bulk diode.

-  Package, size and cooling requirements
-  Cost and availability

## 8.1.1 Calculating the MOSFET power dissipation

The  power  dissipation  in  the  MOSFETs  has  three  major  components:  Static  losses  (PSTAT)  due  to voltage drop, switching losses (PDYN) due to signal rise and fall times, losses due to diode conduction (PDIODE).  The diode power dissipation depends on many factors (back EMF of the motor, inductivity and motor velocity), and thus is hard to calculate from motor data. Normally, it contributes for  a few percent to some ten percent of overall power dissipation. Other sources for power dissipation are the reverse  recovery  time  of  the  transistors  and  the  gate  drive  energy.  Reverse  recovery  also  causes current spikes on the bridges. If desired, you can add Schottky diodes over the (chopper) transistors to reduce the diode losses and to eliminate current spikes caused by reverse recovery.

The following sample calculation assumes a three phase BLDC motor operated in block commutation mode with dual sided chopper. At each time, two coils conduct the full motor current (chopped).

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where

IMOTOR is the motor current, e.g. 10A

RDSON is the on-resistance of the MOSFETs at a gate voltage of about 10V, e.g. 20mΩ

tDUTY is the actual duty cycle of the chopper, e.g. 80% = 0.8

VVM is the motor supply voltage, e.g. 24V or 48V

fCHOP is the chopper frequency, e.g. 20kHz tSLOPE is the slope (transition) time, e.g. 300ns

## Example:

With the example data for a 10A motor at 24V, we get the following power dissipation:

PSTAT = 3.2W

PDYN24 = 2.88W

For comparison: The motor output power is 10A*24V*0.8=192W The  dynamic  and  static  dissipation  here  are  in  a  good  ratio,  thus  the  choice  of  a  20mΩ MOSFET is good.

At 48V, the dynamic power dissipation doubles:

<!-- formula-not-decoded -->

Here, the dynamic losses are higher than the static losses. Thus, we should reduce the slope time. Given that the gate capacity would not allow for faster slopes than 300ns, we could go for a 30mΩ MOSFET,  which  has  a  lower  gate  charge  and  thus  allows  faster  slopes,  e.g.  200ns.  With  these modifications we get a static loss of 4.8W and a dynamic loss of 3.84W. This in sum is 8.64W, which is slightly less than the 8.96W before. At the same time, system cost has decreased due to lower cost MOSFETs. The loss is still low when compared to a motor power of 384W.

## 8.2 MOSFET examples

There  is  a  huge  number  of  MOSFETs  on  the  market,  which  can  be  used  in  combination  with  the TMC603. The user choice will  depend  on  the  electrical  data  (voltage,  current,  RDSon)  and  on  the package and configuration (single / dual). The following table gives a few examples of SMD MOSFETs for different motor currents. The MOSFETs explicitly are modern types with a low total gate charge. With dual configurations, only three MOSFET packages are required to control a BLDC motor, but the current which can be reached is significantly lower due to thermal restrictions of the packages.

For the actual application, we suggest to calculate static and dynamic power dissipation for a given MOSFET,  as  described  in  the  previous  chapter.  Especially  for  sine  commutation  and  chopper frequencies above 20kHz, transistors with a gate charge below 100nC should be preferred.

| Transistor type   | manufacturer            | RDSon   | voltage   | package & configuration   | max. motor current (*)   | total gate charge @10V   |
|-------------------|-------------------------|---------|-----------|---------------------------|--------------------------|--------------------------|
| unit              |                         | mΩ      | V         |                           | A                        | nC                       |
| IBP019N06L3       | Infineon                | 1.9     | 60        | D2PACK                    | 30                       | 124                      |
| IPP032N06N3       | Infineon                | 2.9     | 60        | TO220                     | 30                       | 125                      |
| IRFB3306          | International Rectifier | 4.2     | 60        | TO220 / D2PACK            | 30                       | 85                       |
| SiE876DF          | Vishay                  | 6.1     | 60        | PolarPAK                  | 20                       | 51                       |
| SI7164DP          | Vishay                  | 6.25    | 60        | PowerPAK SO-8             | 15                       | 50                       |
| SUM75N06- 09L     | Vishay                  | 9.3     | 60        | D2PAK (TO263)             | 25                       | 47                       |
| FDD10AN06A0       | Fairchild               | 10.5    | 60        | DPAK (TO252A)             | 20                       | 28                       |
| FDD5353           | Fairchild               | 12.3    | 60        | DPAK                      | 15                       | 46                       |
| SI7964DP          | Vishay                  | 23      | 60        | PowerPAK SO-8 (dual)      | 9.6                      | 43                       |
| SI4946            | Vishay                  | 55      | 60        | SO-8 (dual)               | 4.5                      | 19                       |
| SiE868DF          | Vishay                  | 2.3     | 40        | PolarPAK                  | 30                       | 95                       |
| SI7994DP          | Vishay                  | 5.6     | 30        | PowerPAK SO-8 (dual)      | 10                       | 52                       |

(*)  Remark: The maximum motor current applicable in a given design depends upon PCB size and layout, since all of these transistors are mainly cooled via the PCB. The data given implies adequate cooling measures taken by the user, especially for higher current designs.

## 8.3 Driving a DC motor with the TMC603

The TMC603 can also be used for DC motor applications, using a full bridge or a half bridge for motor PWM operation  with  or  without  reverse  direction  operation.  For  single  half  bridge  applications,  all TMC603 gate drivers  can  be  paralleled,  taking  advantage  of  the  three  time  increase  in  gate  drive capability up to 450mA. This way a motor current of up to 100A can be driven. The drive system can use  the  shunt  less  current  sensing  capability  for  best  efficiency.  A  Schottky  diode  across  the  nonchopped transistor optimizes slopes and electromagnetic emission characteristics (see chapter 5.2.8).

## 9 Revision History

## 9.1 Documentation Revision

Table 1: Documentation Revisions

| Version   | Author (BD=Bernhard Dwersteg)   | Description                                                                                                                    |
|-----------|---------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| 0.94      | BD                              | TMC603 initial release with preliminary electrical data                                                                        |
| 0.96      | BD                              | Added package dimensions                                                                                                       |
| 0.98      | BD                              | Added microcontroller PWM control examples                                                                                     |
| 0.99      | BD                              | Added reverse polarity protection and MOSFET examples                                                                          |
| 1.00      | BD                              | Added low power standby and low voltage operation                                                                              |
| 1.01      | BD                              | Removed 'preliminary' indication, modifications in electrical characteristic tables                                            |
| 1.02      | BD                              | Slightly corrected a few values                                                                                                |
| 1.03      | BD                              | Added transistor examples and temperature information to tables                                                                |
| 1.04      | BD                              | Slight beautifications / rewording                                                                                             |
| 1.05      | BD                              | Added mathematical background for QGD protection, discussion on MOSFET bulk diode and DC motor application                     |
| 1.06      | BD                              | Added minimum output voltage swing of current amplifiers                                                                       |
| 1.10      | BD                              | TMC603A preliminary specs, changed date format YYYY-MON-DD                                                                     |
| 1.11      | BD                              | Added 5Vout temperature deviation and detailed current measurement refreshing using sample input                               |
| 1.12      | BD                              | Added block commutation example and notes on capacitor selection, ESD                                                          |
| 1.14      | BD                              | TMC603A electrical data update                                                                                                 |
| 1.16      | BD                              | Last datasheet version integrating hall FX dated 2010-May-14                                                                   |
| 1.16n     | BD                              | Removed HallFX Block and Switched Capacitor Filter for clarity of basic device function. Identical to V1.16 in other respects. |