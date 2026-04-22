<!-- lastmod 2023-08-03 -->
## TMC6100 DATASHEET

Universal  high  voltage  BLDC/PMSM/Servo  MOSFET  3-halfbridge  gate-driver  with  up  to  1.5A  drive current. Tiny QFN package with high creeping distance. External MOSFETs for up to 100A current.

<!-- image -->

<!-- image -->

## FEATURES AND BENEFITS

3-phase motors up to 100A coil current (external MOSFETs) Voltage Range 8 … 60V DC

Gate Drive Programmable 0.5A / 1A / 1.5A

Full Protection and Diagnostics via SPI interface

Gate Off Drive with 1Ω (LS) / 1.3Ω (HS) safe hold off resistance

SPI &amp; Stand-Alone operation

Charge Pump for 100% Duty Cycle operation

Optional BBM break-before-make logic for single line control

Programmable Short and Overload current threshold and retry

Programmable Control Interface with 3-line or 6-line drive

Full Protection &amp; Diagnostics

Compact Size 7x7mm 2  QFN package

Double Pin Distance for safe operation at high voltage

## BLOCK DIAGRAM

<!-- image -->

<!-- image -->

## APPLICATIONS

PMSM FOC drives and BLDC motors

Industrial Drives

Factory Automation

Lab Automation

Robotics

CNC machines

Textile Machines

Pumps

Surveillance Cameras

Home Automation

Printers

## DESCRIPTION

The TMC6100 is a high-power gate-driver for  PMSM  servo  or  BLDC  motors.  Using six  external  MOSFETs  it  controls  motors from Watt to Kilowatt. Software controlled drive strength allows insystem  EME  optimization.  Programmable safety  features  like  short  detection  and overtemperature thresholds together with an  SPI interface for diagnostics allow  robust  and  reliable  designs.  With the  TMC6100,  a  minimum  number  of external components is required to build a  rugged  drive  with  full  protection  and diagnostics.

<!-- image -->

## APPLICATION EXAMPLES: PMSM AND BLDC MOTORS

The TMC6100 is a compact driver IC for PMSM drivers. Its special package has sufficient creeping distance, even for voltages of 48V. On the control side, it mates with sophisticated FOC TMC467x and TMC867x family controller  chips,  or  with  any  microcontroller.  Its  versatile  interface  matches  simple  BLDC  drives  with minimum requirements on the µC PWM, as well  as advanced PMSM control algorithms.  The small form factor of the TMC6100 keeps costs down and allows for miniaturized layouts. Extensive support at the chip, board, and software levels enables rapid design cycles and fast time-to-market with competitive products. High integration and reliability deliver cost savings in related systems such as power supplies and cooling.

## MINIATURIZED CPU BASED DESIGN FOR BLDC OR PMSM

<!-- image -->

HIGH PERFORMANCE FOC SERVO DESIGN FOR PMSM

<!-- image -->

<!-- image -->

## ORDER CODES

| Order code           | Description                                                                       | Size [mm 2 ]   |
|----------------------|-----------------------------------------------------------------------------------|----------------|
| TMC6100-TA           | Gate Driver IC, optimized for BLDC, SPI, 8-60V, 0.5A/1A/1.5A, QFN-37, Tray        | 7 x 7          |
| TMC6100-TA-T         | Gate Driver IC, optimized for BLDC, SPI, 8-60V, 0.5A/1A/1.5A, QFN-37, Tape & Reel | 7 x 7          |
| TMC6100-EVAL-KIT     | Full Evaluation Kit for TMC6100 incl. TMC4671                                     | 197 x 85       |
| TMC6100-EVAL         | Evaluation Board for TMC6100 (excl. Landungsbrücke and Eselsbrücke)               | 85 x 55        |
| TMC4671+TMC6100- BOB | Breakout Board with TMC4671 and TMC6100                                           | 50 x 38        |

A CPU with internal BLDC or sine wave PWM unit  drives  the  gate  control  lines  based  on encoder  or  hall  sensor  feedback.  External current sensing is required, either using simple  Op  AMPs  for  foot  point  sensing,  or series  shunt  amplifiers.  Use  of  SPI  is  not required unless more sophisticated diagnostics is desired.

When  using  one  of  the  TRINAMIC  FOC controllers, the CPU is completely offloaded from  time-intensive  regulation  loop  tasks, and software design shrinks to initialization and target parameter setting. The TMC6100 optimally  complements  a  TMC467x  family controller.

The TMC6100-EVAL is part of TRINAMICs universal evaluation board system which provides  a  convenient  handling  of  the hardware as well as a user-friendly software tool for evaluation. The TMC6100 evaluation board system consists of three parts: LANDUNGSBRÜCKE (base board), ESELSBRÜCKE (connector board including several  test  points),  and  TMC6100-EVAL, plus a TMC4671-EVAL FOC controller.

## Table of Contents

| 1                                                                  | PRINCIPLES OF OPERATION .........................4                 | PRINCIPLES OF OPERATION .........................4          |
|--------------------------------------------------------------------|--------------------------------------------------------------------|-------------------------------------------------------------|
| 1.1                                                                | CONTROL I NTERFACES .....................................6         |                                                             |
| 2 PIN ASSIGNMENTS                                                  | 2 PIN ASSIGNMENTS                                                  | ...........................................7                |
| 2.1                                                                | PACKAGE OUTLINE                                                    | ..........................................7                 |
| 2.2                                                                | SIGNAL DESCRIPTIONS                                                | ...................................7                        |
| SAMPLE CIRCUITS ..........................................10       | SAMPLE CIRCUITS ..........................................10       |                                                             |
| 3.1                                                                | STANDARD APPLICATION CIRCUIT                                       | ................10                                          |
| 3.2                                                                | EXTERNAL GATE VOLTAGE REGULATOR                                    | ..........11                                                |
| 3.3                                                                | Z ERO STANDBY CURRENT                                              | ..............................12                            |
| 3.4                                                                | MOSFETS AND SLOPE CONTROL                                          | ..................13                                        |
| 3.5                                                                | TUNING THE MOSFET BRIDGE                                           | .....................15                                     |
| 4 SPI INTERFACE ................................................18 | 4 SPI INTERFACE ................................................18 |                                                             |
| 4.1                                                                | SPI DATAGRAM STRUCTURE                                             | .........................18                                 |
| 4.2                                                                | SPI SIGNALS                                                        | ................................................19          |
| 4.3                                                                | TIMING                                                             | .........................................................20 |
| 5 REGISTER MAPPING                                                 | 5 REGISTER MAPPING                                                 | .......................................21                   |
| 5.1                                                                | GENERAL CONFIGURATION REGISTERS ..........22                       |                                                             |
| 6 DIAGNOSTICS AND PROTECTION                                       | 6 DIAGNOSTICS AND PROTECTION                                       | .............27                                             |
| 6.1                                                                | TEMPERATURE SENSORS                                                | ................................27                          |
| 6.2                                                                | SHORT PROTECTION                                                   | ......................................27                    |
| 7 POWER-UP RESET ............................................29    | 7 POWER-UP RESET ............................................29    |                                                             |
| 8 CLOCK OSCILLATOR AND INPUT                                       | 8 CLOCK OSCILLATOR AND INPUT                                       | ...............29                                           |

|   8.1 | USING THE I NTERNAL CLOCK ........................29           |                                                                |
|-------|----------------------------------------------------------------|----------------------------------------------------------------|
|   8.2 | USING AN EXTERNAL CLOCK                                        | .........................29                                    |
|   9   | ABSOLUTE MAXIMUM RATINGS .................30                   | ABSOLUTE MAXIMUM RATINGS .................30                   |
|  10   | ELECTRICAL CHARACTERISTICS ............30                      | ELECTRICAL CHARACTERISTICS ............30                      |
|  10.1 | OPERATIONAL RANGE                                              | ...................................30                          |
|  10.2 | DC AND TIMING CHARACTERISTICS                                  | ..............31                                               |
|  10.3 | THERMAL CHARACTERISTICS                                        | ..........................34                                   |
|  11   | LAYOUT CONSIDERATIONS .....................35                  | LAYOUT CONSIDERATIONS .....................35                  |
|  11.1 | EXPOSED DIE PAD ........................................35     |                                                                |
|  11.2 | WIRING GND ..............................................35    |                                                                |
|  11.3 | WIRING BRIDGE SUPPLY                                           | ..............................35                               |
|  11.4 | SUPPLY FILTERING                                               | ........................................35                     |
|  11.5 | LAYOUT EXAMPLE                                                 | .........................................36                    |
|  12   | PACKAGE MECHANICAL DATA ................38                     | PACKAGE MECHANICAL DATA ................38                     |
|  12.1 | DIMENSIONAL DRAWINGS QFN7X7-EP .......38                       | DIMENSIONAL DRAWINGS QFN7X7-EP .......38                       |
|  12.2 | PACKAGE CODES ...........................................39    |                                                                |
|  13   | DISCLAIMER .................................................40 | DISCLAIMER .................................................40 |
|  14   | ESD SENSITIVE DEVICE ............................40            | ESD SENSITIVE DEVICE ............................40            |
|  15   | DESIGNED FOR SUSTAINABILITY .........40                        | DESIGNED FOR SUSTAINABILITY .........40                        |
|  16   | TABLE OF FIGURES ....................................41        | TABLE OF FIGURES ....................................41        |
|  17   | REVISION HISTORY ...................................41         | REVISION HISTORY ...................................41         |

## 1 Principles of Operation

The  TMC6100  is  a  MOSFET  gate  driver  for  three  phase  PMSM  and  BLDC  motors.  Ideally  suited  for applications  in  the  range  of  12V  to  48V,  it  supports  motor  power  ratings  from  1  Watt  to  1kW.  It complements  with  TRINAMICs  TMC467x  &amp;  TMC867x  families  of  three  phase  motor  controller  ICs. Internal  break-before-make  timing  is  provided  for  the  ease-of-use  in  combination  with  simple microcontrollers for PWM generation. A complete set of protection and diagnostic functions makes the power stage more rugged than a discrete setup.

## THE TMC6100 OFFERS TWO BASIC MODES OF OPERATION:

## MODE 1: Stand-alone driver with pin configuration

Enable this mode by tying low pin SPE. The interface pins allow  several different settings for BBM generation.

## MODE 2: SPI controlled

This mode allows detailed control over the protection, diagnostic and control features, e.g., for tuning overcurrent detection. Enable this mode by tying high pin SPE.

Figure 1.1 Standalone application

<!-- image -->

<!-- image -->

Enable

Figure 1.2 Standalone application using single shunt current sensing

<!-- image -->

Figure 1.3 SPI mode configuration

## 1.1 Control Interfaces

The TMC6100 supports six control lines for the MOSFET drivers. High-side and low-side outputs can be individually controlled, or by an individual enable pin plus polarity pin, using internal BBM circuitry. An SPI interface or standalone configuration is supported.

## 1.1.1 Standalone Configuration

Standalone configuration covers the most important settings like driver current and current amplifier amplification factor and the selection of internal or external BBM operation using four pins. Additional settings like BBM time and sensitivity of short detection can be modified using pre-programming via OTP memory, e.g., via an initial programming during product testing. This way, the driver can be fully operated, and all protection mechanisms are in place. The fault output signals any critical driver error. It becomes cleared by disabling / re-enabling the driver.

However, no advanced debugging is possible, like individual testing of failure mechanisms or setting a more sensitive temperature threshold.

## Hint

Standalone configuration  is  recommended  for  low-cost  applications  with  small  motors  (e.g.,  motor current  up  to  10A  RMS),  where  advanced  debugging  is  not  required  or  not  possible.  In  case  a sensitive overtemperature threshold must be set, the SPI interface should be used.

## 1.1.2 SPI Interface

The SPI interface is a bit-serial interface synchronous to a bus clock. For every bit sent from the bus master  to  the  bus  slave  another  bit  is  sent  simultaneously  from  the  slave  to  the  master. Communication between an SPI master and the TMC6100 slave always consists of sending one 40-bit command word and receiving one 40-bit status word.

The SPI command rate typically is a few commands for initialization or for diagnostic feedback.

## Attention

When operating in SPI mode, set drive mode (single line or individual control signals) first. For safety reasons, the driver starts up in single line mode. Note, that this setting will prevent operation if a controller operates the IC using individual control signals. Therefore, initialize the control mode first.

## 2 Pin Assignments

## 2.1 Package Outline

Figure 2.1 TMC6100-LA pinning QFN 37 special (7x7mm²)

<!-- image -->

## 2.2 Signal Descriptions

| Pin   |   QFN | Type   | Function                                                                                                     |
|-------|-------|--------|--------------------------------------------------------------------------------------------------------------|
| CU    |     1 |        | Bootstrap capacitor positive connection. Tie to U terminal using 470nF to 1µF, 16V or 25V ceramic capacitor. |
| -     |     2 | N.C.   | Unused pin (may be tied to GND)                                                                              |
| LSW   |     3 |        | Low side gate driver output.                                                                                 |
| LSV   |     4 |        | Low side gate driver output.                                                                                 |
| LSU   |     5 |        | Low side gate driver output.                                                                                 |

| Pin        |   QFN | Type    | Function                                                                                                                                                                                                                                                                                                                                             |
|------------|-------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 12VOUT     |     6 |         | Output of internal 11.5V gate voltage regulator and supply pin of low side gate drivers. Attach 2.2µF to 22µF ceramic capacitor to GND plane near to pin for best performance. Use at least 5-10 times more capacity than for bootstrap capacitors. In case an external gate voltage supply is available, tie VSA and 12VOUT to the external supply. |
| 5VOUT      |     7 |         | Output of internal 5V regulator. Attach 2.2µF to 10µF ceramic capacitor to GNDA near to pin for best performance.                                                                                                                                                                                                                                    |
| GNDA       |     8 |         | Analog GND. Connect to GND plane near pin.                                                                                                                                                                                                                                                                                                           |
| TEST       |     9 | AI      | leave open                                                                                                                                                                                                                                                                                                                                           |
| CSN_IDRV0  |    10 | DI      | SPI chip select input (negative active) (SPE=1) or Configuration input for gate driver current LSB (SPE=0)                                                                                                                                                                                                                                           |
| SCK_IDRV1  |    11 | DI      | SPI serial clock input (SPE=1) or Configuration input for gate driver current MSB (SPE=0)                                                                                                                                                                                                                                                            |
| SDI        |    12 | DI      | SPI data input                                                                                                                                                                                                                                                                                                                                       |
| SDO_SINGLE |    13 | DIO     | SPI data output (tristate) (SPE=1) or Configuration input for internal bridge control mode (0: dual line, 1: xH=phase polarity, xL=phase enable) (SPE=0)                                                                                                                                                                                             |
| UH         |    14 | DI (pd) | High side control input (or bridge polarity in single mode)                                                                                                                                                                                                                                                                                          |
| UL         |    15 | DI (pd) | Low side control input (or bridge enable in single mode)                                                                                                                                                                                                                                                                                             |
| VCC_IO     |    16 |         | 3.3V to 5V IO supply voltage for all digital pins.                                                                                                                                                                                                                                                                                                   |
| VH         |    17 | DI (pd) | High side control input (or bridge polarity in single mode)                                                                                                                                                                                                                                                                                          |
| VL         |    18 | DI (pd) | Low side control input (or bridge enable in single mode)                                                                                                                                                                                                                                                                                             |
| WH         |    19 | DI (pd) | High side control input (or bridge polarity in single mode)                                                                                                                                                                                                                                                                                          |
| WL         |    20 | DI (pd) | Low side control input (or bridge enable in single mode)                                                                                                                                                                                                                                                                                             |
| CLK        |    21 | DI      | CLK input. Tie to GND using short wire for internal clock or supply external clock. Internal clock-fail over circuit protects against loss of external clock signal.                                                                                                                                                                                 |
| SPE        |    22 | DI (pd) | Mode selection input. When tied low, the chip is in standalone mode and SPI pins have their configuration pin functions. When tied high, the SPI interface is enabled. Integrated pull down resistor.                                                                                                                                                |
| FAULT      |    23 | DO      | Diagnostics output. High upon driver error condition. Clear by cycling EN.                                                                                                                                                                                                                                                                           |
| DRV_EN     |    24 | DI      | Positive active enable input. The power stage becomes switched off (all motor outputs floating) when this pin becomes driven to a low level. Cycle low to clear FAULT.                                                                                                                                                                               |
| VSA        |    25 |         | Analog supply voltage for 11.5V and 5V regulator. Normally tied to VS. Provide a 100nF filtering capacitor to GND.                                                                                                                                                                                                                                   |
| CPO        |    26 |         | Charge pump capacitor output.                                                                                                                                                                                                                                                                                                                        |
| CPI        |    27 |         | Charge pump capacitor input. Tie to CPO using 22nF 100V capacitor. In case ringing of the power supply leads to considerable supply ripple, add a 10-22Ohm series resistor.                                                                                                                                                                          |
| VS         |    28 |         | Motor supply voltage. Provide filtering capacity near pin with short loop to GND plane. Must be tied to the positive bridge supply voltage. Severe ringing must be avoided.                                                                                                                                                                          |
| VCP        |    29 |         | Charge pump voltage. Tie to VS using 100nF capacitor.                                                                                                                                                                                                                                                                                                |

| Pin             | QFN   | Type   | Function                                                                                                                                                                                                                       |
|-----------------|-------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CW              | 30    |        | Bootstrap capacitor positive connection. Tie to W terminal using 470nF to 1µF, 16V or 25V ceramic capacitor.                                                                                                                   |
| HSW             | 31    |        | High side gate driver output.                                                                                                                                                                                                  |
| W               | 32    |        | Bridge center and bootstrap capacitor negative connection. Connect to source pin of HS-MOSFET.                                                                                                                                 |
| V               | 33    |        | Bridge center and bootstrap capacitor negative connection. Connect to source pin of HS-MOSFET.                                                                                                                                 |
| HSV             | 34    |        | High side gate driver output.                                                                                                                                                                                                  |
| CV              | 35    |        | Bootstrap capacitor positive connection. Tie to V terminal using 470nF to 1µF, 16V or 25V ceramic capacitor.                                                                                                                   |
| U               | 36    |        | Bridge center and bootstrap capacitor negative connection. Connect to source pin of HS-MOSFET.                                                                                                                                 |
| HSU             | 37    |        | High side gate driver output.                                                                                                                                                                                                  |
| Exposed die pad | -     |        | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane. Serves as GND pin for the low side gate drivers and for digital logic. Ensure low loop inductivity to bridge GND. |

## 3 Sample Circuits

The  following  sample  circuits  show  the  required  external  components  in  different  operation  and supply  modes.  The  connection  of  the  external  current  amplifier,  bus  interface  and  further  digital signals are left out for clarity.

## 3.1 Standard Application Circuit

<!-- image -->

(positive active)

Figure 3.1 Standard application circuit

The  standard  application  circuit  uses  six  MOSFETs  selected  for  the  desired  current,  voltage  and package type. Two or three sense resistors are matched to the maximum motor coil current, and to the desired external current amplifier output swing and amplification setting. Use low ESR capacitors for filtering the power supply. A minimum capacity of 100µF per ampere of coil current near to the power bridge is recommended for keeping power supply ripple low. The capacitors need to cope with the current ripple caused by chopper operation. Current ripple in the supply capacitors also depends on the power supply internal resistance and cable length.  Supply  VCC\_IO  from  5VOUT,  or  from  an external source, e.g., a 3.3V regulator. To minimize linear voltage regulator power dissipation of the internal 5V and 11.5V voltage regulators in applications where VM is high, a different (lower) supply voltage should be used for VSA, when available (see chapter 3.2).

## Important layout hints

Place all filter capacitors as close as possible to the power MOSFETs. Place the TMC6100 near to the MOSFETs  and  use  short  interconnection  lines  to  minimize  parasitic  trace  inductance.  Use  a  solid common GND for all GND and GNDA connections. Connect 5VOUT filtering capacitor directly to 5VOUT and GNDA pin. See layout hints for more details. Low ESR electrolytic capacitors are recommended for VS filtering.

## Hint

In safety critical applications, VS and the bridge may be supplied by a separate, switched supply to realize safe torque off. Make sure that the slope at VS slope does not exceed 1V/µs.

+VM

## Attention

Make sure, that VCC\_IO does not drop out during operation of the motor. Disable the drive when a falling supply voltage is detected. It is safest to use the same source for VCC\_IO as for the controller driving the motor.

## Attention

In addition to filtering capacity near to the power bridges, provide sufficient capacity on VS located close  to  the  VS  pin  and  the  connection  of  the  VCP  capacitor,  to  ensure  that  high-frequency  ripple, caused by the switching edges of the power bridge transistors are kept well below 0.5V. Keep power slopes below 1V/µs. Failure to do so could result in destructive currents via the charge pump circuit. Provide overvoltage protection in case the motor could be manually turned at a high velocity, or in case the driver could become cut off from the main supply capacitors. Significant energy can be fed back from motor coils to the power supply in the event of quick deceleration, or when the driver becomes disabled.

## 3.2 External Gate Voltage Regulator

At  high  supply  voltages  like  48V,  the  internal  gate  voltage  regulator  and  the  internal  5V  regulator have  considerable  power  dissipation,  especially  with  high  MOSFET  gate  charges  or  high  chopper frequency.  A  good  thermal  coupling  of  the  heat  slug  to  the  system  PCB  GND  plane  is  required  to dissipate  heat.  Still,  the  thermal  thresholds  will  be  lowered  significantly  by  self-heating.  To  reduce power  dissipation,  supply  an  external  gate  driver  voltage  to  the  TMC6100.  Figure  3.2  shows  the required connection. The internal gate voltage regulator becomes disabled in this constellation. 12V +/-1V is recommended for best results.

Figure 3.2 External gate voltage supply

<!-- image -->

## Hint

With MOSFETs above 50nC of total gate charge or chopper frequency &gt;40kHz, it is recommended to use a VSA supply not higher than 40V in order to keep reasonable power dissipation.

## Attention

In case VSA is supplied by a different voltage source, make sure that VSA does not drop out during motor operation. The motor driver should be disabled in case VSA becomes switched off before VS. Hard switching edges on VSA might result in bridge cross-conduction otherwise. It is safest to derive VSA voltage from VS supply. VS power slope also should be limited to 0.5V/µs or less.

## 3.3 Zero Standby Current

Battery powered applications often require low current standby, while keeping the supply  switched on. The TMC6100 can support these applications by completely powering down the control side, VSA, and with this also the charge pump and 5V supply. See Figure 3.3 for an example using a P-MOSFET as high-side switch. Gate charge / discharge is limited to avoid too steep slopes and excess current. VCC\_IO  may  remain  active  during  standby  operation.  Make  sure  that  the  motor  becomes  disabled before switching off the power supply!

Figure 3.3 Standby Switch

<!-- image -->

## Hint

Realize zero standby current by switching off VSA in standby mode. VCC\_IO may remain active. Ensure a slope-controlled power-up of 1V/µs or less to avoid excess current into VSA.

## Attention

Test your circuit thoroughly to ensure a safe and clean power-up and standby power-up and powerdown event! When powering down the control side of the MOSFET drivers, MOSFET gate-off is only ensured  by  high-resistive  resistors  within  the  TMC6100.  This  makes  the  circuit  more  susceptible  to injection  of  charge  from  MOSFET  drain  to  gate,  e.g.,  too  high  supply  voltage  slopes.  Any  spurious cross-conduction could lead to destructive currents through the power MOSFETs.

## 3.4 MOSFETs and Slope Control

The selection of power MOSFETs depends on several factors, like package size, on-resistance, voltage rating and supplier. It is not true, that larger, lower RDSon MOSFETs will always be better, as a larger device  also  has  higher  capacitances  and  may  add  more  ringing  in  trace  inductance  and  power dissipation in the gate drive circuitry. Adapt the MOSFETs to the required motor voltage (adding 5-10V of reserve to the peak supply voltage) and to the desired maximum current, in a way that resistive power dissipation still is low for the chosen MOSFET package. The TMC6100 drives the MOSFET gates with roughly 10V, so normal, 10V specified types are sufficient. Logic level FETs (4.5V specified RDSon) will also work but may be more critical with regard to bridge cross-conduction due to lower VGS(th).

The  gate-drive  current  and  MOSFET  gate  resistors  RG  (optional)  should  basically  be  adapted  to  the MOSFET  gate-drain  charge  (Miller  charge)  to  yield  reasonable  slope  times.  Figure  3.4  shows  the influence  of  the  Miller  charge  on  the  switching  event.  Figure  3.5  additionally  shows  the  switching events  in  different  load  situations  (load  pulling  the  output  up  or  down),  and  the  required  bridge brake-before-make time.

The  following  table  shall  serve  as  a  thumb  rule  for  programming  the  MOSFET  driver  current ( DRVSTRENGTH setting) and the selection of gate resistors:

| MOSFET MILLER CHARGE VS. DRVSTRENGTH AND R G   | MOSFET MILLER CHARGE VS. DRVSTRENGTH AND R G   | MOSFET MILLER CHARGE VS. DRVSTRENGTH AND R G   |
|------------------------------------------------|------------------------------------------------|------------------------------------------------|
| Miller Charge [nC] (typ.)                      | DRVSTRENGTH setting                            | Value of R G [Ω]                               |
| <10                                            | 0 or 1                                         | ≤ 10 (recommended)                             |
| 1 0… 20                                        | 0 to 2                                         | ≤ 5 (optional)                                 |
| 2 0… 80                                        | 1 to 3                                         | ≤ 2.5 (optional)                               |
| >80                                            | 3                                              | ≤ 1 (optional)                                 |

The TMC6100 provides increased gate-off drive current to avoid bridge  cross-conduction induced by high dV/dt. This protection will be less efficient with gate resistors exceeding the values given in the table. For larger values of RG, a parallel diode may be required to ensure keeping the MOSFET safely off during switching events of the opposite MOSFET.

## MOSFET gate charge vs. switching event

Figure 3.4 Miller charge determines switching slope

<!-- image -->

## Hints

- -Choose modern MOSFETs with fast and soft recovery bulk diode and low reverse recovery charge.
- -A small, SMD MOSFET package allows compacter routing and reduces parasitic inductance effects.

Figure 3.5 Slopes, Miller plateau and blank time (BMx=U V or W output)

<!-- image -->

The following DRV\_CONF parameters allow adapting the driver to the MOSFET bridge:

| Parameter     | Description                                                                                                                                                                                                                                                                                                                                                                                                                     | Setting   | Comment                                                                                      |
|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|----------------------------------------------------------------------------------------------|
| BBMCLKS       | Break-before-make time setting to ensure non- overlapping switching of high-side and low-side MOSFETs. Digital BBM time in clock cycles (typ. 42ns/CLK). BBMCLKS is used in combination with singleline =1. It is not applicable with individual LS and HS signals. Additionally, a minimum BBM time of 75ns is enforced by analog circuitry even with individual control signals. This prevents short-circuiting of the bridge | 0… 15     | time[ns]  42ns* BBMCLKS Ensure ~30% headroom Reset Default: OTP 1..4 4, when not programmed |
| DRV_ STRENGTH | Selection of gate driver current. Adapts the gate driver current to the gate charge of the external MOSFETs.                                                                                                                                                                                                                                                                                                                    | 0…3       | Reset Default = 2 in SPI mode                                                                |

## DRV\_CONF Parameters

Use the lowest gate driver strength setting DRV\_STRENGTH giving favorable switching slopes, before increasing the value of the gate series resistors. A slope time of nominal 40ns to 80ns is  sufficient and will normally be covered by a Break-Before-Make time setting of 1 to 4 (4 is default).

In case slower slopes have to be used, e.g., with large MOSFETs, ensure that the break-before-make time sufficiently covers the switching event, in order to avoid bridge cross conduction. The shortest break-before-make time, safely covering the switching event, gives best results. Add roughly 30% of reserve, to cover production stray of MOSFETs and driver.

## 3.5 Tuning the MOSFET Bridge

A  clean  switching  event  is  favorable  to  ensure  low  power  dissipation  and  good  EMC  behavior. Unsuitable layout or components endanger stable operation of the circuit. Therefore, it is important to understand the effect of parasitic trace inductivity and MOSFET reverse recovery.

Stray  inductance  in  power  routing  will  cause  ringing  whenever  the  opposite  MOSFET  is  in  diode conduction prior  to  switching  on  a  low-side  or  high-side  MOSFET.  Diode  conduction  occurs  during break-before make time whenever the load current is inverse to the following bridge polarity. The MOSFET bulk diode has a certain, type specific reverse recovery time and charge. This time typically is in the range of a few 10ns. During reverse recovery time, the bulk diode will cause high current flow across the bridge. This current is taken from the power supply filter capacitors (see thick lines Figure 3.6). Once the diode opens, parasitic inductance tries to keep the current flowing. A high, fast slope results and leads to ringing in parasitic inductivities in the current path (see Figure 3.7). This may lead to  bridge  voltage  undershooting  the  GND  level  as  well  as  short  pulses  on  VS  and  all  MOSFET connections. It must be ensured, that the driver IC does not see spikes on its BM pins undershooting GND more than 5V. Severe VS ripple might overload the charge-pump circuitry. Measure the voltage directly at the driver pins to driver GND. The amount of undershooting depends on energy stored in parasitic inductivities from low side MOSFET drain to low side source GND connection.

When using relatively small MOSFETs, a soft slope control requires a high gate series resistance. This endangers safe MOSFET switch off. Add additional diodes to ensure safe MOSFET off conditions with slow switch-on slopes (Figure 3.10).

<!-- image -->

Decide use and value of the additional components based on measurements of the actual circuit using the final layout!

Figure 3.6 Bridge protection options for power routing inductivity

## ENSURE RELIABLE OPERATION

- -Use SMD MOSFETs and short interconnections
- -Provide sufficient power filtering capacity close to the bridge and close to VS pin
- -Tune MOSFET switching slopes (measure switch-on event at MOSFET gate) to be slower than the MOSFET bulk diode reverse recovery time. This will reduce cross conduction.
- -Add optional gate resistors close to MOSFET gate and output capacitors to ensure clean switching and reliable operation by minimizing ringing. Figure 3.6 shows the options plus some variations.
- -Some MOSFETs eliminate reverse recovery charge by integrating a fast diode from source to drain.

<!-- image -->

<!-- image -->

Figure 3.7 Ringing of output (green) and Gate voltages (yellow, blue) with DRVSTRENGTH=0

Figure 3.8 Ringing of output (green) and Gate voltages (yellow, blue) with DRVSTRENGTH=2

<!-- image -->

<!-- image -->

Figure 3.9 Ringing of output (green) and Gate voltages (yellow, blue) with DRVSTRENGTH=3

<!-- image -->

<!-- image -->

## BRIDGE OPTIMIZATION EXAMPLE

A  driver  for  15A,  60V  has  been  designed  using  the  MOSFET  BSC037N08NS (3.7mΩ,  80V, QG=56nC, tRR=41ns) in the standard schematic.

The MOSFETs offer roughly 20ns slope time at the lowest driver strength setting. Switching quality is good  and  signals  are  clean  (Figure  3.7,  ff.).  At  double  drive  strength,  the  slope  time  halves,  and switching  events  still  are  clean.  When  increasing  to  full  gate  drive  strength  faster  slopes  lead  to increased ringing on all signals. Low or medium slope setting is best. Additional gate resistors or 1nF output capacitors do not bring any additional improvement. The layout already proves to be good.

No additional components were required!

Figure 3.10 Diodes for safe off condition with high gate series resistance

<!-- image -->

## BRIDGE LAYOUT CONSIDERATIONS

- -Tune the bridge layout for minimum loop inductivity. A compact layout is best.
- -Keep  MOSFET  gate  connections  short  and  straight  and  avoid  loop  inductivity  between  bridge feedback  (U,V,W)  and  corresponding  HS  driver  pin.  Loop  inductance  is  minimized  with  parallel traces, or adjacent traces on adjacent layers. A wider trace reduces inductivity (don't use minimum trace width).
- -Place the TMC6100 near the low side MOSFETs GND connections, with its GND connections directly connected to the same GND plane.
- -Optimize switching behavior by using lowest acceptable gate current setting.
- -Check influence of optional components shown in Figure 3.6.
- -Measure  the  performance  of  the  bridge  by  probing  BM  pins  directly  at  the  bridge  or  at  the TMC6100 using a short GND tip on the scope probe rather than a GND cable, if available.

## 4 SPI Interface

## 4.1 SPI Datagram Structure

The TMC6100 uses 40-bit SPI™ (Serial Peripheral Interface, SPI is Trademark of Motorola) datagrams for communication with a microcontroller. Microcontrollers which are equipped with hardware SPI are typically able to communicate using integer multiples of 8 bit. The NCS line of  the device must be handled in a way, that it stays active (low) for the complete duration of the datagram transmission.

Each datagram sent to the device is composed of an address byte followed by four data bytes. This allows direct 32-bit data word communication with the register set. Each register is accessed via 32 data bits even if it uses less than 32 data bits.

For simplification, each register is specified by a one-byte address:

- -For a read access the most significant bit of the address byte is 0.
- -For a write access the most significant bit of the address byte is 1.

Read and write functionality of the individual registers may differ.

<!-- image -->

| SPI DATAGRAM STRUCTURE   |
|--------------------------|

## 4.1.1 Selection of Write / Read (WRITE\_notREAD)

The  read  and  write  selection  is  controlled  by  the  MSB  of  the  address  byte  (bit  39  of  the  SPI datagram).  This  bit  is  0  for  read  access  and  1  for  write  access.  So,  the  bit  named  W  is  a WRITE\_notREAD control bit. The active high write bit is the MSB of the address byte. So, 0x80 has to be added to the address for a write access. The SPI interface always delivers data back to the master, independent of the W bit. Read data coming back in a write access should be ignored.

Read data is transferred back to the master directly in the read access. Internal read access occurs during the transmission in the moment when the address bits have been received.

## Example :

For a read access to the register ( GSTAT ) with the address 0x01, the address byte has to be set to 0x01. For a write access to the register ( GCONF ),  the  address byte has to be set to 0x80 + 0x00 = 0x80. For read access, the data bits don't care . So, one can set them to 0.

| action                    | data sent to TMC6100   | data received from TMC6100   |
|---------------------------|------------------------|------------------------------|
| read GSTAT                | → 0x0100000000         |  AA & GSTAT                 |
| write GCONF := 0x00000010 | → 0x8000000010         |  0x01 & unused              |

## 4.1.2 Data Alignment

All data are right aligned. Some registers represent unsigned (positive) values, some represent integer values (signed) as two's complement numbers, single bits or groups of bits are represented as single bits respectively as integer groups.

## 4.2 SPI Signals

The SPI bus on the TMC6100 has four signals:

- -SCK -bus clock input
- -SDI -serial data input
- -SDO -serial data output
- -CSN -chip select input (active low)

The slave  is  enabled  for  an  SPI  transaction  by  a  low  on  the  chip  select  input  CSN.  Bit  transfer  is synchronous to the bus clock SCK, with the slave latching the data from SDI on the rising edge of SCK and driving data to SDO following the falling edge. The most significant bit is sent first. A minimum of 40 SCK clock cycles is required for a bus transaction with the TMC6100.

The TMC6100 does not allow cascading of SPI slaves. Use individual CSN lines for each device.

CSN must be low during the whole bus transaction. When CSN goes high, the contents of the internal shift  register  are  latched  into  the  internal  control  register  and  recognized  as  a  command  from  the master to the slave.

## 4.3 Timing

The SPI interface is synchronized to the internal system clock, which limits the SPI bus clock SCK to 1/4 of the system clock frequency. If the system clock is based on the on-chip oscillator, an additional 10% safety margin must be used to ensure reliable data transmission. All SPI inputs as well as the ENN input are internally filtered to avoid triggering on pulses shorter than 20ns. Figure 4.1 shows the timing parameters of an SPI bus transaction, and the table below specifies their values.

Figure 4.1 SPI timing

<!-- image -->

Hint

Usually, this SPI timing is referred to as SPI MODE 3

| SPI interface timing                             | AC-Characteristics clock period: t CLK   | AC-Characteristics clock period: t CLK                                         | AC-Characteristics clock period: t CLK   | AC-Characteristics clock period: t CLK   | AC-Characteristics clock period: t CLK   | AC-Characteristics clock period: t CLK   |
|--------------------------------------------------|------------------------------------------|--------------------------------------------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|------------------------------------------|
| Parameter                                        | Symbol                                   | Conditions                                                                     | Min                                      | Typ                                      | Max                                      | Unit                                     |
| SCK valid before or after change of CSN          | t CC                                     |                                                                                | 10                                       |                                          |                                          | ns                                       |
| CSN high time                                    | t CSH                                    | *) Min time is for synchronous CLK with SCK high one t CH before CSN high only | t CLK *)                                 | >2t CLK +10                              |                                          | ns                                       |
| SCK low time                                     | t CL                                     | *) Min time is for synchronous CLK only                                        | t CLK *)                                 | >t CLK +10                               |                                          | ns                                       |
| SCK high time                                    | t CH                                     | *) Min time is for synchronous CLK only                                        | t CLK *)                                 | >t CLK +10                               |                                          | ns                                       |
| SCK frequency using internal clock               | f SCK                                    | assumes minimum OSC frequency                                                  |                                          |                                          | 3.5                                      | MHz                                      |
| SCK frequency using external clock               | f SCK                                    | assumes synchronous CLK                                                        |                                          |                                          | f CLK /6                                 | MHz                                      |
| SDI setup time before rising edge of SCK         | t DU                                     |                                                                                | 10                                       |                                          |                                          | ns                                       |
| SDI hold time after rising edge of SCK           | t DH                                     |                                                                                | 10                                       |                                          |                                          | ns                                       |
| Data out valid time after falling SCK clock edge | t DO                                     | no capacitive load on SDO                                                      |                                          |                                          | t CLK +10                                | ns                                       |
| SDI, SCK and CSN filter delay time               | t FILT                                   | rising and falling edge                                                        | 12                                       | 20                                       | 30                                       | ns                                       |

## 5 Register Mapping

This chapter gives an overview of the complete register set. Some of the registers bundling a number of single bits are detailed in extra tables. The functional practical application of the settings is detailed in dedicated chapters.

## Note

- All registers become reset to 0 upon power up, unless otherwise noted.
- Add 0x80 to the address Addr for a write access!

| NOTATION OF HEXADECIMAL AND BINARY NUMBERS   | NOTATION OF HEXADECIMAL AND BINARY NUMBERS    |
|----------------------------------------------|-----------------------------------------------|
| 0x                                           | precedes a hexadecimal number, e.g. 0x04      |
| %                                            | precedes a multi-bit binary number, e.g. %100 |

| NOTATION OF R/W FIELD   |                                |
|-------------------------|--------------------------------|
| R                       | Read only                      |
| W                       | Write only                     |
| R/W                     | Read- and writable register    |
| R+WC                    | Clear upon write back with '1' |

## OVERVIEW REGISTER MAPPING

| REGISTER                        | DESCRIPTION                                                                                                                             |
|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| General Configuration Registers | These registers contain - global configuration - global status flags - interface configuration - driver configuration - OTP programming |

## 5.1 General Configuration Registers

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                                                                            |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                                                                                                                                                                                  |
|                                                 |                                                 |                                                 |                                                 | Bit GCONF - Global configuration flags                                                                                                                                                                   |
|                                                 |                                                 |                                                 |                                                 | 1: Disable driver (Resets of short 1 singleline : Interface mode ( reset                                                                                                                                 |
|                                                 |                                                 |                                                 |                                                 | condition) default = 1) 0: Individual signals L+H 1: H-Input is control signal, L-Input is Enable                                                                                                        |
|                                                 |                                                 |                                                 |                                                 | 2 faultdirect 0: Fault output active when at least one bridge                                                                                                                                            |
|                                                 |                                                 |                                                 |                                                 | is shut down continuously due to overcurrent or overtemperature 1: Fault output shows each protective action of the                                                                                      |
| RW                                              |                                                 | 8                                               | GCONF                                           | overcurrent shutdown                                                                                                                                                                                     |
|                                                 | 0x00                                            |                                                 |                                                 | 5:3 unused 6 1: Normal operation - set upon write access for                                                                                                                                             |
|                                                 |                                                 |                                                 |                                                 | 7 test_mode 0: Normal operation 1: Enable analog test output on pin DRV_EN. BBM_CLKS [1..0] selects the function of DRV_EN: 0…2: T120, DAC, VDDH Attention: Not for user, set to 0 for normal operation! |
|                                                 |                                                 |                                                 |                                                 | 31:8 unused Bit GSTAT - Global status flags                                                                                                                                                              |
|                                                 |                                                 |                                                 |                                                 | Attention: Switch off the affected MOSFET by its HS/LS input to clear a pending short condition. Just resetting the flag will not switch it on again. 0 reset 1:                                         |
|                                                 |                                                 |                                                 |                                                 | Indicates that the IC has been reset. All registers have been cleared to reset values. Attention: DRV_EN must be high to allow clearing reset 1 drv_otpw 1: Indicates, that the driver temperature has   |
| R+ WC                                           | 0x01                                            | 15                                              | GSTAT                                           | exceeded overtemperature prewarning-level. No                                                                                                                                                            |
|                                                 |                                                 |                                                 |                                                 | action is taken. This flag is latched. 2 drv_ot 1: Indicates, that the driver has been shut down due to overtemperature. This flag can only be                                                           |
|                                                 |                                                 |                                                 |                                                 | ORed to STATUS output. 3 uv_cp 1: Indicates an undervoltage on the charge pump. The driver is disabled during undervoltage. This flag is latched for information. ORed to STATUS output.                 |
|                                                 |                                                 |                                                 |                                                 | 4 shortdet_u 1: U short counter has triggered at least once.                                                                                                                                             |

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                              |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                                                                                                    |
|                                                 |                                                 |                                                 |                                                 | 5 s2gu 1: Short to GND detected on phase U. The driver becomes disabled until flag becomes cleared.                        |
|                                                 |                                                 |                                                 |                                                 | ORed to STATUS output. 6 s2vsu 1: Short to VS detected on phase U. The driver becomes disabled until flag becomes cleared. |
|                                                 |                                                 |                                                 |                                                 | 7 -                                                                                                                        |
|                                                 |                                                 |                                                 |                                                 | 8 shortdet_v 1: V short counter has triggered at least                                                                     |
|                                                 |                                                 |                                                 |                                                 | once. ORed to STATUS output. 9 s2gv                                                                                        |
|                                                 |                                                 |                                                 |                                                 | 1: Short to GND detected on phase V. The driver becomes disabled until flag becomes cleared. ORed to STATUS output.        |
|                                                 |                                                 |                                                 |                                                 | 1: Short to VS detected on phase V. The driver becomes disabled until flag becomes cleared. ORed to STATUS output.         |
|                                                 |                                                 |                                                 |                                                 | 12                                                                                                                         |
|                                                 |                                                 |                                                 |                                                 | shortdet_w 1: short counter has triggered at least once. ORed                                                              |
|                                                 |                                                 |                                                 |                                                 | to STATUS output. 13 s2gw 1: Short to GND detected on phase W. The driver becomes disabled until flag becomes cleared.     |
|                                                 |                                                 |                                                 |                                                 | 14 s2vsw                                                                                                                   |
|                                                 |                                                 |                                                 |                                                 | Bit INPUT                                                                                                                  |
|                                                 |                                                 |                                                 |                                                 | 0 UL                                                                                                                       |
|                                                 |                                                 |                                                 |                                                 | 1 UH 2 VL                                                                                                                  |
|                                                 |                                                 |                                                 |                                                 | 3 VH                                                                                                                       |
|                                                 |                                                 | +                                               | IOIN                                            | 6 DRV_EN                                                                                                                   |
| R                                               | 0x04                                            |                                                 |                                                 | 4 WL 5 WH                                                                                                                  |
|                                                 |                                                 | 12                                              |                                                 |                                                                                                                            |
|                                                 |                                                 | 8                                               |                                                 | 7 0                                                                                                                        |
|                                                 |                                                 |                                                 |                                                 | 8 OTPW                                                                                                                     |
|                                                 |                                                 |                                                 |                                                 | 9 OT136°C                                                                                                                  |
|                                                 |                                                 |                                                 |                                                 | 10                                                                                                                         |
|                                                 |                                                 |                                                 |                                                 | 11                                                                                                                         |
|                                                 |                                                 |                                                 |                                                 | OT143°C OT150°C                                                                                                            |
|                                                 |                                                 |                                                 |                                                 | 31.. VERSION : 0x10=first version of the IC                                                                                |
| W                                               | 0x06                                            |                                                 | OTP_PROG                                        | Bit OTP_PROGRAM - OTP programming Write access programs OTP memory (one bit at a time),                                    |

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                                                                                                                                                                                 |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                                                                                                                                                                                                                                                                                       |
|                                                 |                                                 |                                                 |                                                 | Read access refreshes read data from OTP after a write 2..0 OTPBIT Selection of OTP bit to be programmed to the selected                                                                                                                                                                                      |
|                                                 |                                                 |                                                 |                                                 | byte location (n=0..7: programs bit n to a logic 1) 5..4 OTPBYTE                                                                                                                                                                                                                                              |
|                                                 |                                                 |                                                 |                                                 | 15..8 OTPMAGIC Set to 0xbd to enable programming. A                                                                                                                                                                                                                                                           |
|                                                 |                                                 |                                                 |                                                 | Set to 00 programming time of minimum 10ms per bit is recommended (check                                                                                                                                                                                                                                      |
| R                                               | 0x07                                            |                                                 | OTP_READ                                        | by reading OTP_READ ). Bit OTP_READ (Access to OTP memory result and update) See table 5.1.1!                                                                                                                                                                                                                 |
|                                                 |                                                 |                                                 |                                                 | 7..0 OTP0 byte 0 read data                                                                                                                                                                                                                                                                                    |
| RW                                              | 0x08                                            | 5                                               | FACTORY_ CONF                                   | 4..0 FCLKTRIM ( Reset default: OTP ) 0…31: Lowest to highest clock frequency. Check at charge pump output. The frequency span is not guaranteed, but it is tested, that tuning to 12MHz internal clock is possible. The devices come preset to 12MHz clock frequency by OTP programming. (Reset Default: OTP) |
|                                                 |                                                 |                                                 |                                                 | Bit SHORT_CONF                                                                                                                                                                                                                                                                                                |
|                                                 |                                                 |                                                 |                                                 | 3..0 S2VS_LEVEL : Short to VS detector level for lowside FETs. Checks for voltage drop in LS MOSFET and bottom shunt resistor. 1 (highest sensitivity) … 15 (lowest sensitivity) (Reset Default: OTP 6 or 12) 11..8 S2G_LEVEL : Short to GND detector level for highside FETs.                                |
|                                                 |                                                 |                                                 |                                                 | Checks for voltage drop on high side MOSFET 2 (highest sensitivity) … 15 (lowest sensitivity) Hint: Use high setting. Tune S2VS level for more sensitive overcurrent detection. (Reset Default: OTP 6 or 12)                                                                                                  |
| RW                                              | 0x09                                            | 31                                              | SHORT_ CONF                                     | 17..16 SHORTFILTER : Spike filtering bandwidth for short detection 0 (lowest, 100ns), 1 (1µs), 2 (2µs) 3 (3µs)                                                                                                                                                                                                |
|                                                 |                                                 |                                                 |                                                 | Hint: Increase value if erroneous short detection occurs. (Reset Default = %01) 20 shortdelay : Short detection delay 0=750ns: normal, 1=1500ns: high The short detection delay shall cover the bridge                                                                                                        |
|                                                 |                                                 |                                                 |                                                 | switching time. 0 will work for most applications. (Reset Default = 0) 25..24 RETRY : Number of retries for short detection 0: Half bridge disabled after first short detection                                                                                                                               |
|                                                 |                                                 |                                                 |                                                 | 1..3: Half bridge re-enabled in next chopper cycles 1 time to 3 times. With retry, the short-counter is decreased once each 256 chopper cycles per coil, unless the upper limit has been reached.                                                                                                             |

| GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)   | GENERAL CONFIGURATION REGISTERS (0X 00…0 X0F)                                                                                                                                                                                                                                      |
|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|-------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| R/W                                             | Addr                                            | n                                               | Register                                        | Description / bit names                                                                                                                                                                                                                                                            |
|                                                 |                                                 |                                                 |                                                 | 28 protect_parallel 0: Only the detected half bridge driver becomes shut down upon final short detection 1: All half bridge drivers become shut down upon                                                                                                                          |
|                                                 |                                                 |                                                 |                                                 | (Reset Default = 1) 29 disable_S2G 0: Short to GND (HS) protection enabled 1: No short to GND protection                                                                                                                                                                           |
|                                                 |                                                 |                                                 |                                                 | (Reset Default = 0) 30 disable_S2VS 0: Short to VS (LS) protection enabled 1: No short to VS protection (Reset Default = 0)                                                                                                                                                        |
|                                                 |                                                 |                                                 |                                                 | Bit                                                                                                                                                                                                                                                                                |
|                                                 |                                                 |                                                 |                                                 | DRV_CONF 4..0 BBMCLKS : 0..15: Digital BBM time in clock cycles (typ. 42ns/CLK). BBMCLKS is used in combination with singleline =1. It is not applicable with individual LS and HS signals. (Reset Default: OTP 1..4)                                                              |
|                                                 |                                                 |                                                 |                                                 | 15:5                                                                                                                                                                                                                                                                               |
|                                                 |                                                 |                                                 |                                                 | unused 17..16 OTSELECT : Selection of over temperature level for bridge disable, switch on after cool down to 120°C / OTPW level. 00: 150°C ( default ) 01: 143°C                                                                                                                  |
| RW                                              | 0x0A                                            | 20                                              | DRV_CONF                                        | 10: 136°C 11: 120°C (not recommended, no hysteresis) Hint: Adapt overtemperature threshold as required to protect the MOSFETs or other components on the PCB. (Reset Default = %00)                                                                                                |
|                                                 |                                                 |                                                 |                                                 | 19..18 DRVSTRENGTH : Selection of gate driver current. Adapts the gate driver current to the gate charge of the external MOSFETs. 00: weak 01: weak+TC (medium above OTPW level) 10: medium 11: strong Hint: Choose the lowest setting giving slopes <100ns. (Reset Default = %10) |
|                                                 |                                                 |                                                 |                                                 | 31:20 unused                                                                                                                                                                                                                                                                       |

## 5.1.1 OTP\_READ -OTP configuration memory

The OTP memory holds power up defaults for certain registers. All OTP memory bits are cleared to 0 by default. Programming only can set bits, clearing bits is not possible. Factory tuning of the clock frequency affects otp0.0 to otp0.4 . The state of these bits therefore may differ between individual ICs.

| 0X05: OTP_READ - OTP MEMORY MAP   | 0X05: OTP_READ - OTP MEMORY MAP   | 0X05: OTP_READ - OTP MEMORY MAP   | 0X05: OTP_READ - OTP MEMORY MAP                                                                                                                                                                                                                              |
|-----------------------------------|-----------------------------------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bit                               | Name                              | Function                          | Comment                                                                                                                                                                                                                                                      |
| 7                                 | otp0.7                            | otp_BBM                           | Reset default for BBM 0: 4 clocks 1: 1 clocks 2: 2 clocks 3: 3 clocks                                                                                                                                                                                        |
| 6                                 | otp0.6                            | otp_BBM                           | Reset default for BBM 0: 4 clocks 1: 1 clocks 2: 2 clocks 3: 3 clocks                                                                                                                                                                                        |
| 5                                 | otp0.5                            | otp_S2_LEVEL                      | Reset default for Short detection Levels : 0: S2G_LEVEL = S2VS_LEVEL = 6 1: S2G_LEVEL = S2VS_LEVEL = 12                                                                                                                                                      |
| 4                                 | otp0.4                            | OTP_FCLKTRIM                      | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 24MHz and differs between individual ICs! It should not be altered. |
| 3                                 | otp0.3                            | OTP_FCLKTRIM                      | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 24MHz and differs between individual ICs! It should not be altered. |
| 2                                 | otp0.2                            | OTP_FCLKTRIM                      | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 24MHz and differs between individual ICs! It should not be altered. |
| 1                                 | otp0.1                            | OTP_FCLKTRIM                      | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 24MHz and differs between individual ICs! It should not be altered. |
| 0                                 | otp0.0                            | OTP_FCLKTRIM                      | Reset default for FCLKTRIM 0: lowest frequency setting 31: highest frequency setting Attention: This value is pre-programmed by factory clock trimming to the default clock frequency of 24MHz and differs between individual ICs! It should not be altered. |

## 6 Diagnostics and Protection

The  TMC6100  supplies  a  complete  set  of  diagnostic  and  protection  capabilities,  like  short  circuit protection and undervoltage detection. See the DRV\_STATUS table for details.

## 6.1 Temperature Sensors

The driver integrates a four-level temperature sensor (120°C pre-warning and selectable 136°C / 143°C / 150°C thermal shutdown) for diagnostics and for protection of the IC and the power MOSFETs and adjacent  components  against  excess  heat.  Choose  the  overtemperature  level  to  safely  cover  error conditions  like  missing  heat  convection.  Heat  is  mainly  generated  by  the  power  MOSFETs,  and,  at increased voltage, by the internal voltage regulators. For many applications, already the overtemperature pre-warning will indicate an abnormal operation situation and can be used to initiate user  warning  or  power  reduction  measures  like  motor  current  reduction.  The  thermal  shutdown  is just  an  emergency measure and temperature rising to the shutdown level should be prevented by design.

After triggering the overtemperature sensor ( ot flag), the driver remains switched off until the system temperature falls below the pre-warning level ( otpw ) to avoid continuous heating to the shutdown level.

## 6.2 Short Protection

The  TMC6100  protects  the  MOSFET  power  stages  against  a  short  circuit  or  overload  condition  by monitoring the voltage drop in the high-side MOSFETs, as well as the voltage drop in the low-side MOSFETs (Figure 6.1). A programmable short detection delay ( shortdelay ) allows adjusting the detector to work with very slow switching slopes. Additionally, the short detector allows filtering of the signal. This  helps  to  prevent  spurious  triggering  caused  by  effects  of  PCB  layout,  or  long,  adjacent  motor cables  ( SHORTFILTER ).  All  control  bits  are  available  via  register SHORT\_CONF .  Additionally,  the  short detection is protected against single events, e.g., caused by ESD discharges, by retrying up to three times before switching off the motor continuously (program in SHORT\_CONF.RETRY ).

| Parameter       | Description                                                                                                                                                                      | Setting   | Comment                                                                       |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------|
| S2VS_LEVEL      | Short or overcurrent detector level for lowside FETs. Checks for voltage drop in LS MOSFET and optional bottom shunt sense resistor. Hint: May be tuned for sensitive detection. | 4…15      | 1 (highest sensitivity) … 15 (lowest sensitivity) (Reset Default: OTP 6 / 12) |
| S2G_LEVEL       | Short to GND detector level for highside FETs. Checks for voltage drop on high side MOSFET. Hint: Use high setting to avoid false detection.                                     | 2…15      | 2 (highest sensitivity) … 15 (lowest sensitivity) (Reset Default: OTP 6 / 12) |
| SHORT_ FILTER   | Spike filtering bandwidth for short detection Hint: Increase value if erroneous short detection occurs.                                                                          | 0 …3      | 0 (lowest, 100ns), 1 (1µs) ( Reset Default ), 2 (2µs), 3 (3µs)                |
| RETRY           | Number of retries after short detection until permanent brigde shutdown                                                                                                          | 0…3       | (Reset Default = 3)                                                           |
| shortdelay      | shortdelay : Short detection delay The delay shall cover the bridge switching time.                                                                                              | 0/1       | 0=750ns: normal, 1=1500ns: high                                               |
| disable_S2VS    | 1: Disable short to VS protection.                                                                                                                                               | 0/1       | Leave detection enabled for normal use (0).                                   |
| disable_S2G     | 1: Disable short to GND protection.                                                                                                                                              | 0/1       | Leave detection enabled for normal use (0).                                   |
| protectparallel | 0: Individual half bridge protection 1: Disable all bridges upon single half bridge short condition                                                                              | 0/1       | (Reset Default = 1)                                                           |

Figure 6.1 Short detection (U, V or W output)

<!-- image -->

In  case  a  bottom  shunt  sense  resistor  is  used,  low-side  short  detection  can  be  set  to  a  high sensitivity  and  provides  good  precision  of  current  detection.  This  way,  it  will  safely  cover  most overcurrent conditions, i.e., when commutation errors occur.

Once  a  short  condition  is  safely  detected,  the  corresponding  driver  bridge  (U,  V  or  W)  becomes switched  off,  and  the  corresponding s2gu,  s2gv or s2gw flag,  respectively s2vsu,  s2vsv or s2vsw becomes set. Optionally, the complete bridge becomes switched off (set protect\_parallel ).

To restart the motor, disable and re-enable the driver.

## Attention:

Short protection cannot protect the system and the power stages for all possible short events, as a short  event  is  rather  undefined,  and  a  complex  network  of  external  components  may  be  involved. Therefore, short circuits should basically be avoided.

## Hint

Fine  tune  low-side  short  detection  threshold,  to  provide  a  sensitive  overcurrent  protection,  e.g.,  to protect  motor  and  power  stage.  The  reproducibility  mainly  depends  on  production  stray  of  the MOSFETs and is typically  within +-30%. To see  any  overcurrent pulse at the  FAULT output, set  flag short\_direct .

Set  a  high  value  for  high-side  short  protection  because  detection  is  more  subject  to  stray  and inductive voltage drop on interconnections.

## 7 Power-Up Reset

The chip is loaded with default values during power-up via its internal power-on reset. It will also reset to  power-up defaults in case any of the supply voltages monitored by internal reset circuitry (VSA, +5VOUT or VCC\_IO) falls below the undervoltage threshold. In case of a microcontroller software re-boot,  disable  the  driver  and  re-initialize  all  registers  used  by  the  software.  A  hardware  reset requires cycling VCC\_IO while keeping all digital inputs at a low level at the same time. Actively drive VCC\_IO to a low level to ensure that it falls below the lower reset threshold. Current consumed from VCC\_IO is low and therefore it has simple driving requirements. Due to the input protection diodes not allowing the digital inputs to rise above VCC\_IO level, any active high input would hinder VCC\_IO from going down.

## 8 Clock Oscillator and Input

The clock is the timing reference for the internal BBM time generator and is used to operate the SPI interface. The factory-trimmed on-chip clock oscillator provides timing which is sufficient for most use cases.

## 8.1 Using the Internal Clock

Directly  tie  the  CLK  input  to  GND  near  to  the  IC  if  the  internal  clock  oscillator  is  to  be  used.  It provides a precision of roughly +-4%, which is precise enough for BBM operation.

## 8.2 Using an External Clock

When an external clock is available, a frequency of 4 MHz to 13.4 MHz is possible (max. 16MHz with 50% dutycycle). Especially with low clock frequency, make sure, that the SPI timing is kept in order to ensure proper SPI operation. Make sure, that the clock source supplies clean CMOS output logic levels and steep slopes  when using a high clock frequency. The external clock input  is enabled  with the second positive polarity seen on the CLK input.

## Attention

Switching off the external clock frequency prevents the driver from operating normally. Therefore, an internal watchdog switches back to internal clock in case the external signal is missing for more than roughly 32 internal clock cycles.

## 8.2.1 Considerations on the Frequency

A higher frequency allows more precise BBM timing and faster SPI operation. A lower frequency will reduce power consumption of the IC, which especially at high VSA supply voltages reduces overall power  consumption  by  a  few  100mW.  However,  the  internal  timing  should  be  sufficient  for  most applications. Take into account, that the input signals are synchronized to the clock, in case internal BBM generation becomes used.

## 9 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more  than  one  maximum  rating  at  a  time  for  extended  periods  shall  be  avoided  by  application design.

| Parameter                                                                                               | Symbol       | Min   | Max        | Unit   |
|---------------------------------------------------------------------------------------------------------|--------------|-------|------------|--------|
| Supply voltage operating with inductive load                                                            | V VS , V VSA | -0.5  | 65         | V      |
| Supply and bridge voltage short time peak (limited by peak voltage on charge pump output and Cxx pins*) | V VSMAX      |       | 70         | V      |
| VSA supply voltage                                                                                      | V VSAMAX     | -0.5  | 65         | V      |
| Peak voltages on Cxx bootstrap pins and VCP                                                             | V CxCP       |       | 85         | V      |
| Supply voltage V12                                                                                      | V 12VOUT     | -0.5  | 15         | V      |
| Peak voltages on U/V/W pins (due to stray inductivity)                                                  | V X          | -6    | V VS +6    | V      |
| Peak voltages on Cxx bootstrap pins relative to BM                                                      | V Cxx        | -0.5  | 16         | V      |
| I/O supply voltage                                                                                      | V VIO        | -0.5  | 5.5        | V      |
| Supply voltage (5VOUT)                                                                                  | V 5VOUT      | -0.5  | 5.5        | V      |
| Logic input voltage                                                                                     | V I          | -0.5  | V VIO +0.5 | V      |
| Maximum current to / from digital pins and low voltage I/Os (short time peak current)                   | I IO         |       | +/-500     | mA     |
| 5V regulator output current (internal plus external load)                                               | I 5VOUT      |       | 30         | mA     |
| 5V regulator continuous power dissipation (V VSA -5V) * I 5VOUT                                         | P 5VOUT      |       | 1          | W      |
| 12V regulator output current (internal plus external load)                                              | I 12VOUT     |       | 20         | mA     |
| 12V regulator continuous power dissipation (V VM -5V) * I 5VOUT                                         | P 12VOUT     |       | 0.5        | W      |
| Junction temperature                                                                                    | T J          | -50   | 150        | °C     |
| Storage temperature                                                                                     | T STG        | -55   | 150        | °C     |
| ESD-Protection for interface pins (Human body model, HBM)                                               | V ESDAP      |       | 4          | kV     |
| ESD-Protection for handling (Human body model, HBM)                                                     | V ESD        |       | 1          | kV     |

## 10 Electrical Characteristics

## 10.1 Operational Range

| Parameter                                                                                                                                             | Symbol           |   Min | Max   | Unit   |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------------|-------|-------|--------|
| Junction temperature                                                                                                                                  | T J              |   -40 | 125   | °C     |
| Supply voltage for motor and bridge                                                                                                                   | V VS             |    10 | 60    | V      |
| Supply voltage VSA                                                                                                                                    | V VSA            |    10 | 60    | V      |
| Supply voltage for VSA and 12OUT (internal gate voltage regulator bridged)                                                                            | V 12VOUT , V VSA |    10 | 13    | V      |
| Lower Supply voltage (reduced spec, short to GND protection not functional), lower limit depending on MOSFETs gate threshold voltage and load current | V VS             |     8 |       | V      |
| I/O supply voltage                                                                                                                                    | V VIO            |     3 | 5.25  | V      |

## 10.2 DC and Timing Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless otherwise specified. Typical values represent the average value of all parts measured at +25°C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

| Power Supply Current                                   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V                                         | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   |
|--------------------------------------------------------|-------------------------------------------|---------------------------------------------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Parameter                                              | Symbol                                    | Conditions                                                                      | Min                                       | Typ                                       | Max                                       | Unit                                      |
| Total supply current, driver disabled I VS + I VSA     | I S                                       | internal clock                                                                  |                                           | 10                                        | 15                                        | mA                                        |
| VSA supply current (VS and VSA separated)              | I VSA                                     | f CLK =24MHz / internal clock, driver disabled GCONF.6='1'                      |                                           | 7                                         |                                           | mA                                        |
| Internal current consumption from 5V supply on VCC pin | I VCC                                     | f CLK =24MHz / internal clock, driver disabled GCONF.6='1'                      |                                           | 5                                         |                                           | mA                                        |
| IO supply current (typ. at 5V)                         | I VIO                                     | no load on outputs, inputs at V IO or GND Excludes pullup / pull-down resistors |                                           | 15                                        | 30                                        | µA                                        |

| Motor Driver                                                                        | DC- and Timing-Characteristics V VS = 24.0V; Tj=50°C   | DC- and Timing-Characteristics V VS = 24.0V; Tj=50°C   | DC- and Timing-Characteristics V VS = 24.0V; Tj=50°C   | DC- and Timing-Characteristics V VS = 24.0V; Tj=50°C   | DC- and Timing-Characteristics V VS = 24.0V; Tj=50°C   | DC- and Timing-Characteristics V VS = 24.0V; Tj=50°C   |
|-------------------------------------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|--------------------------------------------------------|
| Parameter                                                                           | Symbol                                                 | Conditions                                             | Min                                                    | Typ                                                    | Max                                                    | Unit                                                   |
| RDS ON low-side off driver                                                          | R ONL                                                  | Gate off                                               |                                                        | 1.0                                                    | 1.6                                                    | Ω                                                      |
| RDS ON high-side off driver                                                         | R ONH                                                  | Gate off                                               |                                                        | 1.3                                                    | 2.0                                                    | Ω                                                      |
| Gate drive current low side MOSFET turning on at 2V V GS                            | I SLPON0                                               | DRIVESTRENGTH =0                                       |                                                        | 400                                                    |                                                        | mA                                                     |
| Gate drive current low side MOSFET turning on at 2V V GS                            | I SLPON2                                               | DRIVESTRENGTH =2                                       |                                                        | 800                                                    |                                                        | mA                                                     |
| Gate drive current low side MOSFET turning on at 2V V GS                            | I SLPON3                                               | DRIVESTRENGTH =3                                       |                                                        | 1200                                                   |                                                        | mA                                                     |
| Gate drive current high side MOSFET turning on at 2V V GS                           | I SLPON0                                               | DRIVESTRENGTH =0                                       |                                                        | 400                                                    |                                                        | mA                                                     |
| Gate drive current high side MOSFET turning on at 2V V GS                           | I SLPON2                                               | DRIVESTRENGTH =2                                       |                                                        | 800                                                    |                                                        | mA                                                     |
| Gate drive current high side MOSFET turning on at 2V V GS                           | I SLPON3                                               | DRIVESTRENGTH =3                                       |                                                        | 1200                                                   |                                                        | mA                                                     |
| Gate drive current low side MOSFET turning off at 4V V GS                           | I SLPOFF0                                              | DRIVESTRENGTH =0                                       |                                                        | 600                                                    |                                                        | mA                                                     |
| Gate drive current low side MOSFET turning off at 4V V GS                           | I SLPOFF2                                              | DRIVESTRENGTH =2                                       |                                                        | 1200                                                   |                                                        | mA                                                     |
| Gate drive current low side MOSFET turning off at 4V V GS                           | I SLPOFF3                                              | DRIVESTRENGTH =3                                       |                                                        | 1800                                                   |                                                        | mA                                                     |
| Gate drive current high side MOSFET turning on at 4V V GS                           | I SLPOFF0                                              | DRIVESTRENGTH =0                                       |                                                        | 600                                                    |                                                        | mA                                                     |
| Gate drive current high side MOSFET turning on at 4V V GS                           | I SLPOFF2                                              | DRIVESTRENGTH =2                                       |                                                        | 1200                                                   |                                                        | mA                                                     |
| Gate drive current high side MOSFET turning on at 4V V GS                           | I SLPOFFN3                                             | DRIVESTRENGTH =3                                       |                                                        | 1800                                                   |                                                        | mA                                                     |
| Minimum effective BBM time enforced in individual or single line mode               | t BBM0                                                 | Individual LS and HS signals ( singleline =0)          | 30                                                     | 50                                                     | 70                                                     | ns                                                     |
| Reaction delay time LS/HS input signal change to start of gate driver output change | t DLY                                                  | Individual LS and HS signals ( singleline =0)          | 65                                                     | 85                                                     | 110                                                    | ns                                                     |
| Matching difference of gate driver reaction delay times                             | t DLYMATCH                                             | Individual LS and HS signals ( singleline =0)          |                                                        |                                                        | 10                                                     | ns                                                     |

| Charge Pump                                              | DC-Characteristics   | DC-Characteristics                          | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|----------------------------------------------------------|----------------------|---------------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                | Symbol               | Conditions                                  | Min                  | Typ                  | Max                  | Unit                 |
| Charge pump output voltage                               | V VCP -V VS          | operating                                   | V 12VOUT - 2         | V 12VOUT - 1         |                      | V                    |
| Charge pump voltage threshold for undervoltage detection | V VCP -V VS          | rising, using internal 5V regulator voltage | 4.5                  | 5.5                  | 6.5                  | V                    |
| Charge pump frequency                                    | f CP                 |                                             |                      | 1/32 f CLKOSC        |                      |                      |

| Linear Regulator                                            | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V                        | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   | DC-Characteristics V VS = V VSA = 24.0V   |
|-------------------------------------------------------------|-------------------------------------------|----------------------------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|-------------------------------------------|
| Parameter                                                   | Symbol                                    | Conditions                                                     | Min                                       | Typ                                       | Max                                       | Unit                                      |
| Output voltage                                              | V 5VOUT                                   | T J = 25°C                                                     | 4.80                                      | 5.0                                       | 5.20                                      | V                                         |
| Deviation of output voltage over the full temperature range | V 5VOUT(DEV)                              | drivers disabled T J = full range                              |                                           | +/-5                                      | +/-50                                     | mV                                        |
| Deviation of output voltage over the supply voltage         | V 5VOUT(DEV)                              | drivers disabled, internal clock T A = 25°C V VSA = 10V to 30V |                                           |                                           | +/-20                                     | mV / 10V                                  |
| Output voltage                                              | V 12VOUT                                  | operating, internal clock T J = 25°C                           | 10.8                                      | 11.5                                      | 12.2                                      | V                                         |

| Clock Oscillator and Input                                      | Timing-Characteristics   | Timing-Characteristics                   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   |
|-----------------------------------------------------------------|--------------------------|------------------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Parameter                                                       | Symbol                   | Conditions                               | Min                      | Typ                      | Max                      | Unit                     |
| Clock oscillator frequency                                      | f CLKOSC                 | t J =-50°C                               |                          | 23.4                     |                          | MHz                      |
| (factory calibrated)                                            | f CLKOSC                 | t J =50°C                                | 23                       | 24.0                     | 25                       | MHz                      |
| (factory calibrated)                                            | f CLKOSC                 | t J =150°C                               |                          | 24.2                     |                          | MHz                      |
| External clock frequency (operating)                            | f CLK                    | 40%..60% dutycycle for typ. 50% for max. | 4                        | 10-13.4                  | 16                       | MHz                      |
| External clock high / low level time                            | t CLKH / t CLKL          | CLK driven to 0.1 V VIO / 0.9 V VIO      | 10                       |                          |                          | ns                       |
| External clock timeout detection in cycles of internal f CLKOSC | t CLKH1                  | CLK driven high                          | 32                       |                          | 48                       | cycles f CLKOSC          |

| Short Detection                                                                                                      | DC-Characteristics   | DC-Characteristics                         | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|----------------------------------------------------------------------------------------------------------------------|----------------------|--------------------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                                                                                            | Symbol               | Conditions                                 | Min                  | Typ                  | Max                  | Unit                 |
| Short to GND / Short to VS detector delay (Start of gate switch on to short detected) Including 100ns filtering time | t SD0                | FILT_ISENSE =0 S2xx_LEVEL =6 shortdelay =0 | 0.5                  | 0.85                 | 1.1                  | µs                   |
|                                                                                                                      | t SD1                | shortdelay =1                              | 1.1                  | 1.6                  | 2.2                  | µ s                  |
| Short detector level S2VS (measurement includes drop                                                                 | V BM                 | S2VS_LEVEL =15                             | 1.4                  | 1.56                 | 1.72                 | V                    |
| in opt. bottom shunt resistor)                                                                                       |                      | S2VS_LEVEL =6                              | 0.55                 | 0.625                | 0.70                 | V                    |
| Short detector level S2G                                                                                             | V S - V BM           | S2G_LEVEL =15 VS<52V                       | 1.3                  | 1.56                 | 1.85                 | V                    |
|                                                                                                                      |                      | S2G_LEVEL =15 VS<60V                       | 1.0                  |                      |                      | V                    |
|                                                                                                                      |                      | S2G_LEVEL =6 VS<52V                        | 0.46                 | 0.625                | 0.85                 | V                    |
|                                                                                                                      |                      | S2G_LEVEL =6 VS<60V                        | 0.20                 |                      |                      | V                    |

| Detector Levels                           | DC-Characteristics   | DC-Characteristics                | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|-------------------------------------------|----------------------|-----------------------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                                 | Symbol               | Conditions                        | Min                  | Typ                  | Max                  | Unit                 |
| V VSA undervoltage threshold for RESET    | V UV_VSA             | V VSA rising                      | 3.8                  | 4.2                  | 4.6                  | V                    |
| V 5VOUT undervoltage threshold for RESET  | V UV_5VOUT           | V 5VOUT rising                    |                      | 3.5                  |                      | V                    |
| V VCC_IO undervoltage threshold for RESET | V UV_VIO             | V VCC_IO rising (delay typ. 10µs) | 2.0                  | 2.2                  | 3.0                  | V                    |
| V VCC_IO undervoltage detector hysteresis | V UV_VIOHYST         |                                   |                      | 0.3                  |                      | V                    |
| Overtemperature prewarning 120°C          | T OTPW               | Temperature rising                | 100                  | 120                  | 140                  | °C                   |
| Overtemperature shutdown 136 °C           | T OT136              | Temperature rising                |                      | 136                  |                      | °C                   |
| Overtemperature shutdown 143 °C           | T OT143              | Temperature rising                |                      | 143                  |                      | °C                   |
| Overtemperature shutdown 150 °C           | T OT150              | Temperature rising                | 135                  | 150                  | 170                  | °C                   |

| Digital pins                     | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|----------------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                        | Symbol               | Conditions           | Min                  | Typ                  | Max                  | Unit                 |
| Input voltage low level          | V INLO               |                      | -0.3                 |                      | 0.3 V VIO            | V                    |
| Input voltage high level         | V INHI               |                      | 0.7 V VIO            |                      | V VIO +0.3           | V                    |
| Input Schmitt trigger hysteresis | V INHYST             |                      |                      | 0.12 V VIO           |                      | V                    |
| Output voltage low level         | V OUTLO              | I OUTLO = 2mA        |                      |                      | 0.2                  | V                    |
| Output voltage high level        | V OUTHI              | I OUTHI = -2mA       | V VIO -0.2           |                      |                      | V                    |
| Input leakage current            | I ILEAK              |                      | -10                  |                      | 10                   | µA                   |
| Pullup / pull-down resistors     | R PU /R PD           |                      | 132                  | 166                  | 200                  | kΩ                   |
| Digital pin capacitance          | C                    |                      |                      | 3.5                  |                      | pF                   |

## 10.3 Thermal Characteristics

The  following  table  shall  give  an  idea  on  the  thermal  resistance  of  the  package.  The  thermal resistance  for  a  four-layer  board  will  provide  a  good  idea  on  a  typical  application.  Actual  thermal characteristics  will  depend  on  the  PCB  layout,  PCB  type  and  PCB  size.  The  thermal  resistance  will benefit from thicker CU (inner) layers for spreading heat horizontally within the PCB. Also, air flow will reduce thermal resistance.

Table 10.1 Thermal characteristics QFN7x7-EP

| Parameter                                                    | Symbol   | Conditions                                                                                                                                | Typ   | Unit   |
|--------------------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|
| Typical power dissipation                                    | P D      | 20kHz chopper, 24V supply, internal supply regulators                                                                                     | <0.5  | W      |
| Thermal resistance junction to ambient on a multilayer board | R TMJA   | Dual signal and two internal power plane board (2s2p) as defined in JEDEC EIA JESD51-5 and JESD51-7 (FR4, 35µm CU, 70mm x 133mm, d=1.5mm) | 21    | K/W    |
| Thermal resistance junction to board                         | R TJB    | PCB temperature measured within 1mm distance to the package leads                                                                         | 8     | K/W    |
| Thermal resistance junction to case                          | R TJC    | Junction temperature to heat slug of package                                                                                              | 3     | K/W    |

The thermal resistance in an actual layout can be tested by checking for the heat up caused by the standby power consumption of the chip. When no motor is attached, all power seen on the power supply is dissipated within the chip.

## 11 Layout Considerations

## 11.1 Exposed Die Pad

The TMC6100 uses its die attach pad to dissipate heat from the gate drivers and the linear regulator to the board. For best electrical and thermal performance, use a reasonable amount of solid, thermally conducting vias between the die attach pad and the ground plane. The printed circuit board should have a solid ground plane spreading heat into the board and providing for a stable GND reference.

## 11.2 Wiring GND

All signals of the TMC6100 are referenced to their respective GND. Directly connect all GND pins under the device to a common ground area (GND, GNDP, GNDA and die attach pad). The GND plane right below the die attach pad should be treated as a virtual star point. For thermal reasons, the PCB top layer shall be connected to a large PCB GND plane spreading heat within the PCB.

## Attention

Place the TMC6100 near to the MOSFET bridge in order to avoid ringing leading to GND differences.

## 11.3 Wiring Bridge Supply

The  power  bridge  will  draw  the  full  coil  current  in  pulses  with  extremely  high  dI/dt.  Thus,  any inductivity between VS supply filtering and the MOSFETs can lead to severe voltage spikes. This has to be avoided. Avoid any bend in the supply traces between filtering capacitors and MOSFET  switches and keep distance as small as possible. Especially for high current, use a separate plane for the supply voltage, and a sufficient number and capacity for supply filtering. Use an additional capacitor for the IC  VS  pin,  as  additional  ripple  voltage  would  cause  severe  current  spikes  on  the  charge  pump capacitor. A tiny series resistor can be added to avoid this.

## Attention

Keep supply voltage ripple low, by using sufficient filtering capacity close to the MOSFET bridge.

## 11.4 Supply Filtering

The 5VOUT output voltage ceramic filtering capacitor (2.2 to 4.7 µF recommended) should be placed as close as possible to the 5VOUT pin, with its GND return going directly to the GNDA pin. This ground connection shall not be shared with other loads or additional vias to the GND plane. Use as short and as thick connections as possible. A 100 nF or larger filtering capacitor should be placed as closely as possible to the VSA pin to ground plane. Provide sufficient filtering capacity near the power bridge MOSFETs, to avoid ringing following each switching event. Make sure, that VS does not see excessive voltage spikes caused by bridge operation and place a 100 nF or larger filter capacitor to GND close to the VS pin.

Please  carefully  read  chapters  3.4  and  3.5  to  understand  the  special  considerations  with  regard  to layout and component selection for the external MOSFET power bridges.

## 11.5 Layout Example

## Schematic extract of TMC6100-EVAL (TMC6100+MOSFETs+Current Sense amplifiers shown)

<!-- image -->

## 1- Top Layer (assembly side)

<!-- image -->

2- Inner Layer (GND)

<!-- image -->

## 3- Inner Layer (supply VS)

<!-- image -->

## Components

Figure 11.1 Layout example

<!-- image -->

Please refer www.trinamic.com for complete schematic and layout data of the evaluation board.

## 4- Bottom Layer

<!-- image -->

## 12 Package Mechanical Data

## 12.1 Dimensional Drawings QFN7x7-EP

Attention: Drawings not to scale.

Figure 12.1 Dimensional drawings QFN7x7

<!-- image -->

| Parameter              | Ref   | Min       | Nom       | Max       |
|------------------------|-------|-----------|-----------|-----------|
| total thickness        | A     | 0.8       | 0.85      | 0.9       |
| stand off              | A1    | 0         | 0.035     | 0.05      |
| mold thickness         | A2    | -         | 0.65      | -         |
| L/F thickness          | A3    | 0.203 REF | 0.203 REF | 0.203 REF |
| lead width             | b     | 0.2       | 0.25      | 0.3       |
| body size X            | D     |           | 7.0 BSC   |           |
| body size Y            | E     |           | 7.0 BSC   |           |
| lead pitch             | e     |           | 0.5 BSC   |           |
| lead pitch (wide)      | e1    |           | 1.0 BSC   |           |
| exposed die pad size X | J     | 3.9       | 4         | 4.1       |
| exposed die pad size Y | K     | 3.9       | 4         | 4.1       |
| lead length            | L     | 0.35      | 0.4       | 0.45      |
| package edge tolerance | aaa   |           |           | 0.1       |
| mold flatness          | bbb   |           |           | 0.1       |
| coplanarity            | ccc   |           |           | 0.08      |
| lead offset            | ddd   |           |           | 0.1       |
| exposed pad offset     | eee   |           |           | 0.1       |

## 12.2 Package Codes

| Type         | Package                      | Temperature range            | Code & marking               | MSL level                    |
|--------------|------------------------------|------------------------------|------------------------------|------------------------------|
| TMC6100-LA   | QFN7x7-EP (RoHS)             | -40°C ... +125°C             | TMC6100LA                    | MSL 3 / 160h                 |
| TMC6100-LA-T | Tape on reel packed products | Tape on reel packed products | Tape on reel packed products | Tape on reel packed products |

## 13 Disclaimer

TRINAMIC Motion Control GmbH &amp; Co. KG does not authorize or warrant any of its products for use in life  support systems, without the specific written consent of  TRINAMIC Motion Control GmbH &amp; Co. KG.  Life  support  systems  are  equipment  intended  to  support  or  sustain  life,  and  whose  failure  to perform, when properly used in accordance with instructions provided, can be reasonably expected to result in personal injury or death.

Information  given  in  this data  sheet  is  believed  to  be  accurate  and  reliable.  However,  no responsibility is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties which may result from its use.

Specifications are subject to change without notice.

All trademarks used are property of their respective owners.

## 14 ESD Sensitive Device

The TMC6100 is an ESD sensitive CMOS device sensitive to electrostatic discharge. Take special care to use adequate grounding of personnel and machines in manual handling. After soldering the devices to the board, ESD requirements are more relaxed. Failure to do so can result in defect or decreased reliability.

<!-- image -->

## 15 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer  experience  and  long-term  satisfaction  by  smooth  and  silent  run,  while  minimizing  the demand  for  external  resources  like  power  supply,  cooling  infrastructure,  reduced  motor  size  and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 16 Table of Figures

| FIGURE 1.1 STANDALONE APPLICATION ......................................................................................................................................4            |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FIGURE 1.2 STANDALONE APPLICATION USING SINGLE SHUNT CURRENT SENSING .......................................................................5                                        |
| FIGURE 1.3 SPI MODE CONFIGURATION ......................................................................................................................................5            |
| FIGURE 2.1 TMC6100-LA PINNING QFN 37 SPECIAL (7X7MM²) ...............................................................................................7                               |
| FIGURE 3.1 STANDARD APPLICATION CIRCUIT ...........................................................................................................................10                |
| FIGURE 3.2 EXTERNAL GATE VOLTAGE SUPPLY ...........................................................................................................................11                |
| FIGURE 3.3 STANDBY SWITCH ..................................................................................................................................................12       |
| FIGURE 3.4 MILLER CHARGE DETERMINES SWITCHING SLOPE ....................................................................................................13                           |
| FIGURE 3.5 SLOPES , MILLER PLATEAU AND BLANK TIME (BMX=U V OR W OUTPUT ) ................................................................14                                          |
| FIGURE 3.6 BRIDGE PROTECTION OPTIONS FOR POWER ROUTING INDUCTIVITY .........................................................................15                                       |
| FIGURE 3.7 RINGING OF OUTPUT ( GREEN ) AND GATE VOLTAGES ( YELLOW, BLUE ) WITH DRVSTRENGTH=0 ............................16                                                          |
| FIGURE 3.8 RINGING OF OUTPUT ( GREEN ) AND GATE VOLTAGES ( YELLOW, BLUE ) WITH DRVSTRENGTH=2 ............................16                                                          |
| FIGURE 3.9 RINGING OF OUTPUT ( GREEN ) AND GATE VOLTAGES ( YELLOW, BLUE ) WITH DRVSTRENGTH=3 ............................16                                                          |
| FIGURE 3.10 DIODES FOR SAFE OFF CONDITION WITH HIGH GATE SERIES RESISTANCE ............................................................17                                            |
| FIGURE 4.1 SPI TIMING ............................................................................................................................................................20 |
| FIGURE 6.1 SHORT DETECTION (U, V OR W OUTPUT ) ...............................................................................................................28                     |
| FIGURE 11.1 LAYOUT EXAMPLE .................................................................................................................................................37       |
| FIGURE 12.1 DIMENSIONAL DRAWINGS QFN7X7 .....................................................................................................................38                      |

## 17 Revision History

Table 17.1 Document Revisions

| Version   | Date        | Author BD= Bernhard Dwersteg   | Description                                                                                   |
|-----------|-------------|--------------------------------|-----------------------------------------------------------------------------------------------|
| V1.00     | 2019-NOV-14 | BD                             | First version of Datasheet                                                                    |
| V1.01     | 2020-JUN-10 | BD                             | Updated logo                                                                                  |
| V1.02     | 2022-FEB-02 | BD                             | Updated logo and order codes; minor wording; P15: added position of VCP capacitor for clarity |
| V1.03     | 2022-JUN-01 | BD                             | P18: Corrected description in access example                                                  |