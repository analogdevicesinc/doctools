<!-- lastmod 2023-08-03 -->
<!-- image -->

TRINAMIC ®  Motion Control GmbH &amp; Co KG Hamburg, Germany www.trinamic.com

## Features

The  TMC239  /  TMC239A  (1)  is  a  dual  full  bridge  driver  IC  for  bipolar  stepper  motor  control applications. The TMC239 is realized in a HVCMOS technology and directly drives eight external LowRDS-ON  high  efficiency  MOSFETs.  It  supports  more  than  6000mA  coil  current.  The  low  power dissipation makes the TMC239 an optimum choice for drives, where a high reliability is desired. With additional drivers, motor current and voltage can be increased. The driver transistors can be chosen depending on output current or environment temperature. Internal DACs allow microstepping as well as smart current control. The device can be controlled by a serial interface (SPI™ i )  or  by analog / digital input signals. Short circuit, temperature, undervoltage and overvoltage protection are integrated.

- More than 6000mA using 8 external MOS transistors (e.g. 4A RMS)
- Control via SPI with easy-to-use 12 bit protocol or external analog / digital signals
- Short circuit and over temperature protection integrated
- Overvoltage protection integrated (A-type)
- Status flags for overcurrent, open load, over temperature, temperature pre-warning, undervoltage
- Integrated 4 bit DACs allow up to 16 times microstepping via SPI, any resolution via analog control (for up to 64 microsteps via SPI see last manual page)
- Mixed decay feature for smooth motor operation
- Slope control user programmable to reduce electromagnetic emissions
- Chopper frequency programmable via a single capacitor or external clock
- Current control allows cool motor and driver operation
- 7V to 34V motor supply voltage (A-type)
- up to 58V motor supply voltage using a few additional low cost components
- External drivers can be added for higher motor voltages and higher currents (e.g. 50V, 5A)
- Only 4 external PMOS transistors required for unipolar operation
- 3.3V or 5V operation for digital part
- Low power dissipation via low RDS-ON power stage
- Standby and shutdown mode available
- Choice of SO28 or chip size MLF package
- (1)  The term TMC239 in this datasheet always refers to the TMC239A and the TMC239. The major differences in the older TMC239 are explicitly marked with 'non-A-type'. The TMC239A brings a number of enhancements and is fully backward compatible to the TMC239.

## TMC239/A - DATA SHEET

High  current  microstep  stepper  motor  driver with protection, diagnostics and SPI Interface

<!-- image -->

| FEATURES.............................................................................................................................................                                                                                                                                                                                      | 1                                                                                                                                  |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| PINNING..................................................................................................................................................                                                                                                                                                                                  | 5                                                                                                                                  |
| PACKAGE CODES....................................................................................................................................                                                                                                                                                                                          | 5                                                                                                                                  |
| SO28 DIMENSIONS                                                                                                                                                                                                                                                                                                                            | ................................................................................................................................ 6 |
| QFN32 DIMENSIONS                                                                                                                                                                                                                                                                                                                           | .............................................................................................................................. 6   |
| APPLICATION CIRCUIT / BLOCK DIAGRAM ......................................................................................                                                                                                                                                                                                                 | 7                                                                                                                                  |
| PIN FUNCTIONS......................................................................................................................................                                                                                                                                                                                        | 7                                                                                                                                  |
| SELECTING POWER TRANSISTORS ..................................................................................................                                                                                                                                                                                                             | 8                                                                                                                                  |
| LIST OF RECOMMENDED TRANSISTORS ....................................................................................................                                                                                                                                                                                                       | 8                                                                                                                                  |
| LAYOUT CONSIDERATIONS................................................................................................................                                                                                                                                                                                                      | 9                                                                                                                                  |
| USING ADDITIONAL POWER DRIVERS............................................................................................                                                                                                                                                                                                                 | 10                                                                                                                                 |
| CONTROL VIA THE SPI                                                                                                                                                                                                                                                                                                                        | 11                                                                                                                                 |
| INTERFACE................................................................................................. SERIAL DATA WORD TRANSMITTED TO                                                                                                                                                                                                 | TMC239..................................................................................... 11                                     |
| SERIAL DATA WORD TRANSMITTED FROM TMC239 ................................................................................                                                                                                                                                                                                                  | 11                                                                                                                                 |
| TYPICAL MOTOR COIL CURRENT VALUES ................................................................................................                                                                                                                                                                                                         | 12                                                                                                                                 |
| BASE CURRENT CONTROL VIA INA AND INB IN SPI MODE .......................................................................                                                                                                                                                                                                                   | 12                                                                                                                                 |
| CONTROLLING THE POWER DOWN MODE VIA THE SPI INTERFACE                                                                                                                                                                                                                                                                                      | ............................................................ 12                                                                    |
| OPEN LOAD DETECTION ........................................................................................................................                                                                                                                                                                                               | 13                                                                                                                                 |
| STANDBY AND SHUTDOWN MODE........................................................................................................... POWER SAVING ....................................................................................................................................                                                     | 13 13                                                                                                                              |
| PROTECTION FUNCTIONS.................................................................................................................                                                                                                                                                                                                      | 14                                                                                                                                 |
| OVERCURRENT PROTECTION AND DIAGNOSIS.........................................................................................                                                                                                                                                                                                              | 14                                                                                                                                 |
| OVER TEMPERATURE PROTECTION AND DIAGNOSIS ................................................................................ OVERVOLTAGE PROTECTION AND ENN PIN BEHAVIOR ............................................................................                                                                                        | 14                                                                                                                                 |
| CHOPPER PRINCIPLE.........................................................................................................................                                                                                                                                                                                                 | 14                                                                                                                                 |
|                                                                                                                                                                                                                                                                                                                                            | 15                                                                                                                                 |
| CHOPPER CYCLE / USING THE MIXED DECAY FEATURE ............................................................................                                                                                                                                                                                                                 | 15 16                                                                                                                              |
| ADAPTING THE SINE WAVE FOR SMOOTH MOTOR OPERATION .................................................................. .........................................................................................................................................                                                                             | 16                                                                                                                                 |
| BLANK TIME ..........................................................................................................................                                                                                                                                                                                                      |                                                                                                                                    |
| BLANK TIME SETTINGS CLASSICAL NON-SPI CONTROL MODE (STAND ALONE                                                                                                                                                                                                                                                                            | 16 MODE).................................................. 17                                                                      |
| MODE..................................................................................................                                                                                                                                                                                                                                     | 17                                                                                                                                 |
| PIN FUNCTIONS IN STAND ALONE                                                                                                                                                                                                                                                                                                               |                                                                                                                                    |
| UNIPOLAR OPERATION .....................................................................................................................                                                                                                                                                                                                   | 18 18                                                                                                                              |
| DIFFERENCES OF SHORT CIRCUIT BEHAVIOR IN UNIPOLAR OPERATION MODE                                                                                                                                                                                                                                                                           |                                                                                                                                    |
| ........................................... DIFFERENCES IN CHOPPER CYCLE IN UNIPOLAR OPERATION MODE ..........................................................                                                                                                                                                                             | 18                                                                                                                                 |
| CALCULATION OF THE EXTERNAL COMPONENTS.......................................................................                                                                                                                                                                                                                              | 19                                                                                                                                 |
| SENSE RESISTOR.................................................................................................................................                                                                                                                                                                                            | 19 19                                                                                                                              |
| EXAMPLES FOR SENSE RESISTOR                                                                                                                                                                                                                                                                                                                |                                                                                                                                    |
| SETTINGS........................................................................................... HIGH SIDE OVERCURRENT DETECTION RESISTOR                                                                                                                                                                                               | 19                                                                                                                                 |
| R SH ............................................................................. MAKING THE CIRCUIT SHORT CIRCUIT PROOF ......................................................................................... ...................................................................................................................... | 20                                                                                                                                 |
| OSCILLATOR CAPACITOR                                                                                                                                                                                                                                                                                                                       | 21                                                                                                                                 |
| TABLE OF OSCILLATOR FREQUENCIES ....................................................................................................                                                                                                                                                                                                       | 21                                                                                                                                 |
| PULL-UP RESISTORS ON UNUSED INPUTS ...............................................................................................                                                                                                                                                                                                         | 21                                                                                                                                 |
| POWER SUPPLY SEQUENCING CONSIDERATIONS .................................................................................... .................................................................................................................                                                                                              | 21                                                                                                                                 |
| SLOPE CONTROL RESISTOR                                                                                                                                                                                                                                                                                                                     | 22                                                                                                                                 |
| ABSOLUTE MAXIMUM RATINGS.......................................................................................................                                                                                                                                                                                                            | 23 23                                                                                                                              |
| ELECTRICAL CHARACTERISTICS....................................................................................................                                                                                                                                                                                                             |                                                                                                                                    |

OPERATIONAL RANGE .......................................................................................................................... 23

DC CHARACTERISTICS ......................................................................................................................... 24

AC CHARACTERISTICS ......................................................................................................................... 26

THERMAL PROTECTION (1) ................................................................................................................... 26

SPI INTERFACE TIMING  ...................................................................................................................... 27

PROPAGATION TIMES ........................................................................................................................... 27

USING THE SPI INTERFACE ................................................................................................................... 27

SPI FILTER (ONLY A-TYPE) ................................................................................................................... 27

APPLICATION NOTE: EXTENDING THE MICROSTEP RESOLUTION ............................................ 28

DOCUMENTATION REVISION ............................................................................................................ 29

## Life support policy

TRINAMIC Motion Control GmbH &amp; Co KG does not authorize or warrant any of its products for use in life support systems, without the specific written consent of TRINAMIC Motion Control GmbH &amp; Co KG.

Life support systems are equipment intended to support or sustain life, and whose failure to perform, when  properly  used  in  accordance  with  instructions provided,  can  be  reasonably  expected  to  result  in personal injury or death.

## © TRINAMIC Motion Control GmbH &amp; Co KG 2005

Information given in this data sheet is believed to be accurate  and  reliable.  However  no  responsibility  is assumed for the consequences of its use nor for any infringement of patents or other rights of third parties, which may result from its use.

Specifications subject to change without notice.

## Pinning

<!-- image -->

<!-- image -->

Note: Cooling plane on -LA type should be connected to GND or left open.

## Package codes

| Type    | Package      | Temperature range   | Lead free                   | Code/marking         |
|---------|--------------|---------------------|-----------------------------|----------------------|
| TMC239A | SO28         | automotive (1)      | Yes                         | TMC239A-SA           |
| TMC239  | SO28         | automotive (1)      | From date code 05/05 (wwyy) | TMC239-SA            |
| TMC239A | QFN32, 7*7mm | automotive (1)      | Yes                         | TMC239A-LA / 239A-LA |

- (1)  ICs  are  not  yet  tested  according  to  automotive  standards,  but  are  usable  within  the  complete temperature range.

## SO28 Dimensions

<!-- image -->

## QFN32 Dimensions

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

All dimensions are in mm.

Attention: Drawing not to scale.

| REF   |   MIN. |   MAX. |
|-------|--------|--------|
| A     |  10    |  10.65 |
| B     |  17.7  |  18.1  |
| C     |   7.4  |   7.6  |
| D     |   1.4  |   1.4  |
| E     |   2.65 |   2.65 |
| F     |   0.25 |   0.25 |
| G     |   0.1  |   0.3  |
| H     |   0.36 |   0.49 |
| I     |   0.4  |   1.1  |
| K     |   1.27 |   1.27 |

<!-- image -->

## Application Circuit / Block Diagram

<!-- image -->

## Pin Functions

| Pin                | Function                                                   | Pin                | Function                                                           |
|--------------------|------------------------------------------------------------|--------------------|--------------------------------------------------------------------|
| VS                 | Motor supply voltage                                       | VT                 | Short to GND detection comparator - connect to VS if not used      |
| VCC                | 3.0-5.5V supply voltage for analog and logic circuits      | GND                | Digital / Power ground                                             |
| AGND               | Analog ground (Reference for SRA, SRB, OSC, SLP, INA, INB) | OSC                | Oscillator capacitor or external clock input for chopper           |
| INA                | Analog current control phase A                             | INB                | Analog current control input phase B                               |
| SCK                | Clock input of serial interface                            | SDO                | Data output of serial interface (tri-state)                        |
| SDI                | Data input of serial interface                             | CSN                | Chip select input of serial interface                              |
| ENN                | Device enable (low active), and overvoltage shutdown input | SPE                | Enable SPI mode (high active). Tie to GND for non-SPI applications |
| ANN                | Enable analog current control via INA and INB (low active) | SLP                | Slope control resistor. Tie to GND for fastest slope               |
| BL1, BL2           | Digital blank time select                                  | SRA, SRB           | Bridge A/B current sense resistor input                            |
| HA1, HA2, HB1, HB2 | Outputs for high side P-channel transistors                | LA1, LA2, LB1, LB2 | Outputs for low side N-channel transistors                         |

## Selecting Power Transistors

Selection  of  power  transistors  for  the  TMC239  depends  on  required  current,  voltage  and  thermal conditions. Driving large transistors directly with the TMC239 is limited by the gate capacity of these transistors. If the total gate charge is too high, slope time increases and leads to a higher switching power dissipation. A total gate charge of maximum 25nC per transistor pair (N gate charge + P gate charge) is recommended (at 25nC, tie pin SLP to GND to get an acceptable slope). The table below shows a choice of transistors which can be driven directly by the TMC239. The maximum application current mainly is a function of cooling and environment temperature. RDSon and gate charge are read at the nominal drive voltage of 6V and 25°C.

All of these transistor types are mainly cooled via their drain connections. In order to provide sufficient cooling, the transistors should be directly connected to massive traces on the PCB which are widened near the transistor package, providing a copper area of some square cm. The heat then is dissipated vertically through the PCB to a massive power or ground plane, which shall cover most of the PCB area in order to use the whole PCB for cooling. As an example, the minimum PCB size required to reach the given current for the SI7501, is about 42mm * 42mm, yielding in a heat up of the transistor packages of about 85°C above ambient temperature. With a 100mm * 100mm PCB, this reduced to 70°C above ambient temperature, so that safe operation is possible up to 60°C ambient temperature at maximum current (transistor package at 130°C).

## List of recommended transistors

| Manufacturer and type     | Package (#Trans)   | max. appli- cation voltage   | RDS ON [Ohm]   | Total gate charge [nC]   | Typical maximum application current   | Remark           |
|---------------------------|--------------------|------------------------------|----------------|--------------------------|---------------------------------------|------------------|
| Fairchild Semi FDD 8424 H | TO252-4 (1N,1P)    | 34V                          | 0.023 0.045    | 10 10                    | 6000mA                                | (1) (2)          |
| Siliconix SI 7501 DN      | PPack (1N,1P)      | 28.5V                        | 0.035 0.055    | 5.5 8.0                  | 4200mA                                | (1)              |
| TRINAMIC TMC34NP          | PPack (1N,1P)      | 28.5V                        | 0.035 0.055    | 5.5 8.0                  | 4200mA                                | (1)              |
| Fairchild Semi FDS 8960   | SO8 (1N,1P)        | 34V                          | 0.023 0.050    | 7.0 7.0                  | 4000mA                                | (1) (2)          |
| Fairchild Semi FDS 8958 A | SO8 (1N,1P)        | 28.5V                        | 0.023 0.050    | 7.0 7.0                  | 4000mA                                | (2)              |
| Siliconix SI 4599 DY      | SO8 (1N,1P)        | 34V                          | 0.035 0.050    | 6.0 15.5                 | 4000mA                                | (1)              |
| Siliconix SI 4532 ADY     | SO8 (1N,1P)        | 28.5V                        | 0.055 0.080    | 4.5 6.5                  | 3000mA 5000mA (2 parallel)            | (3)              |
| Fairchild Semi FDS 8333C  | SO8 (1N,1P)        | 28.5V                        | 0.075 0.130    | 2.9 3.0                  | 2800mA 5000mA (2 parallel)            | (3)              |
| IRF 9952 (/ IRF 7509)     | SO8 (1N,1P)        | 28.5V                        | 0.075 0.280    | 4.5 4.0                  | 2500mA                                |                  |
| TRINAMIC TMC32NP-MLP      | MLP (1N,1P)        | 28.5V                        | 0.120 0.250    | 2.8 2.5                  | 2300mA 4400mA (2 parallel)            | very small! (3)  |
| Siliconix SI 5504         | 1206-8 (1N,1P)     | 28.5V                        | 0.090 0.170    | 3.0 3.2                  | 2000mA                                | very small!      |
| TRINAMIC TMC32NP2-SM8     | SM8 (2N,2P)        | 28.5V                        | 0.120 0.250    | 2.8 2.5                  | 2000mA                                | only 2 packages! |
| Siliconix SI 4559 EY      | SO8 (1N,1P)        | 34V or 58V (see A/N)         | 0.045 0.120    | 11 10                    | 3000mA 2500mA (at 48V)                | (4)              |

- (1)  These  P-channel  transistors  have  a  very  high  drain  to  gate  capacity,  which  may  introduce destructive current impulses into the HA/HB outputs by forcing them above the power supply level, depending on the low-side slope. To ensure reliability, connect one MSS1P3 or ZHCS1000 or an SS14 1A schottky diode or similar to both HA and HB outputs against VS to protect them.
- (2)  Compare (1), but for N-channel transistor. Protect LA/LB outputs with one schottky diode to GND.
- (3)  Higher current with two devices in parallel, i.e. using 8 double transistors instead of four.
- (4)  See application note document for simple extension to operate at up to 58V.

## Layout Considerations

For optimal operation of the circuit a careful board layout is important, because of the combination of high current chopper operation coupled with high accuracy threshold comparators. Please pay special attention  to  massive  grounding.  Depending  on  the  required  motor  current,  either  a  single  massive ground plane or a ground plane plus star connection of the power traces may be used. The schematic shows how the high current paths can be routed separately, so that the chopper current does not flow through the system's GND-plane. Tie the TMC239's AGND and GND to the GND plane. Additionally, use  enough  filtering  capacitors  located  near  to  the  board's  power  supply  input  and  small  ceramic capacitors near to the power supply connections of the TMC239. Use low inductance sense resistors, or  add  a  ceramic  capacitor  in  parallel  to  each  resistor  to  avoid  high  voltage  spikes.  In  some applications it may become necessary to introduce additional RC-filtering into the SRA / SRB line, as shown in the schematic, to prevent spikes from triggering the  short  circuit  protection  or  the chopper comparator. Alternatively, a  470nF ceramic  capacitor  can  be  placed  across  the sense resistors. If you want to take advantage of the thermal protection and diagnosis, ensure, that the power transistors are very close to the package,  and  that  there  is  a  good  thermal contact between the TMC239 and the external transistors.  Please  be  aware,  that  long  or  thin traces to the sense resistors may add substantial  resistance  and  thus  reduce  output current.  The  same  is  valid  for  the  high  side

<!-- image -->

shunt resistor. Place the optional shunt resistor voltage divider near the TMC239, in order to avoid voltage drop in the VCC plane to add up to the measured voltage.

## Using additional Power Drivers

For higher voltage and higher output current it is possible to add external MOSFET gate drivers. Both, dedicated transistor drivers are suitable, as well as a circuit based on standard HCMOS drivers. It is important  to  understand  the  function  of  dedicated  gate  drivers  for  N-channel  transistors:  Since  the chopping also can be stopped in open load conditions, the gate drive circuit for the upper transistors should allow for continuous ON conditions. In the schematic below this is satisfied by attaching a weak additional charge pump oscillator and pumping the VS up to the high voltage supply. Do not enable the  TMC239,  before  the  gate  driver  capacitors  are  charged  to  an  appropriate  voltage.  A  current sensing comparator in the VM line pulling down the VT pin by some 100mV on overcurrent can be added,  if  required.  Since  the  TMC239  in  this  application  can  not  sense  switch-off  of  the  transistor gates  to  ensure  break-before-make  operation,  the  break  before-make-delays  have  to  be  set  by capacitive  loading  of  its  transistor  drive  outputs.  The  capacitors  CdHS  and  CdLS  are  charged  / discharged with the nominal gate current. The opposite output is not enabled, before the switching-off output has been discharged to 0.5V. To calculate the timing, refer to the required logic levels of the attached power driver, resp. the attached PMOS. For CdHS and CdLS 470pF give about 100ns. Both circuits do not show decoupling capacitors and further details.

<!-- image -->

<!-- image -->

## Control via the SPI Interface

The  SPI  data  word  sets  the  current  and  polarity  for  both  coils.  By  applying  consecutive  values, describing  a  sine  and  a  cosine  wave,  the  motor  can  be  driven  in  microsteps.  Every  microstep  is initiated  by  its  own  telegram.  Please  refer  to  the  description  of  the  analog  mode  for  details  on  the waveforms required. The SPI interface timing is described in the timing section.

## Serial data word transmitted to TMC239

(MSB transmitted first)

|   Bit | Name   | Function                   | Remark                             |
|-------|--------|----------------------------|------------------------------------|
|    11 | MDA    | mixed decay enable phase A | '1' = mixed decay                  |
|    10 | CA3    | current bridge A.3         | MSB                                |
|     9 | CA2    | current bridge A.2         |                                    |
|     8 | CA1    | current bridge A.1         |                                    |
|     7 | CA0    | current bridge A.0         | LSB                                |
|     6 | PHA    | polarity bridge A          | '0' = current flow from OA1 to OA2 |
|     5 | MDB    | mixed decay enable phase B | '1' = mixed decay                  |
|     4 | CB3    | current bridge B.3         | MSB                                |
|     3 | CB2    | current bridge B.2         |                                    |
|     2 | CB1    | current bridge B.1         |                                    |
|     1 | CB0    | current bridge B.0         | LSB                                |
|     0 | PHB    | polarity bridge B          | '0' = current flow from OB1 to OB2 |

## Serial data word transmitted from TMC239

(MSB transmitted first)

|   Bit | Name   | Function                      | Remark                                             |
|-------|--------|-------------------------------|----------------------------------------------------|
|    11 | 0      | always '0'                    |                                                    |
|    10 | 0      | always '0'                    |                                                    |
|     9 | 0      | always '0'                    |                                                    |
|     8 | 1      | always '1'                    |                                                    |
|     7 | OT     | overtemperature               | '1' = chip off due to overtemperature              |
|     6 | OTPW   | temperature prewarning        | '1' = prewarning temperature exceeded              |
|     5 | UV     | driver undervoltage           | '1' = undervoltage on VS                           |
|     4 | OCHS   | overcurrent high side         | 3 PWM cycles with overcurrent within 63 PWM cycles |
|     3 | OLB    | open load bridge B            | no PWM switch off for 14 oscillator cycles         |
|     2 | OLA    | open load bridge A            | no PWM switch off for 14 oscillator cycles         |
|     1 | OCB    | overcurrent bridge B low side | 3 PWM cycles with overcurrent within 63 PWM cycles |
|     0 | OCA    | overcurrent bridge A low side | 3 PWM cycles with overcurrent within 63 PWM cycles |

## Typical motor coil current values

| Current setting CA3..0 / CB3..0   | Percentage of current   | Typical trip voltage of the current sense comparator (internal reference or analog input voltage of 2V is used)   |
|-----------------------------------|-------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0000                              | 0%                      | 0 V (bridge continuously in slow decay condition)                                                                 |
| 0001                              | 6.7%                    | 23 mV                                                                                                             |
| 0010                              | 13.3%                   | 45 mV                                                                                                             |
| ...                               | ...                     |                                                                                                                   |
| 1110                              | 93.3%                   | 317 mV                                                                                                            |
| 1111                              | 100%                    | 340 mV                                                                                                            |

The  current  values  correspond  to  a  standard  4  Bit  DAC,  where  100%=15/16.  The  contents  of  all registers is cleared to '0' on power-on reset or disable via the ENN pin, bringing the IC to a low power standby mode. All SPI inputs have Schmitt-Trigger function.

## Base current control via INA and INB in SPI mode

In SPI mode, the IC can use an external reference voltage for each DAC. This allows the adaptation to different motors. This mode is enabled by tying pin ANN to GND. A 2.0V input voltage gives full scale current of 100%. In this case, the typical trip voltage of the current sense comparator is determined by the input voltage and the DAC current setting (see table above) as follows:

VTRIP,A = 0.17 VINA  'percentage SPI current setting A'

VTRIP,B = 0.17 VINB  'percentage SPI current setting B'

A maximum of 3.0V VIN is possible. Multiply the percentage of base current setting and the DAC table to  get  the  overall  coil  current.  It  is  advised  to  operate  at  a  high  base  current  setting,  to  reduce  the effects of noise voltages. This feature allows a high resolution setting of the required motor current using an external DAC or PWM-DAC (see schematic for examples).

<!-- image -->

## Controlling the power down mode via the SPI interface

<!-- image -->

Programming current value '0000' for both coils at a time clears the overcurrent flags and switches the TMC239 into a low current standby mode with coils switched off.

## Open load detection

Open load is signaled, whenever there are more than 14 oscillator cycles without PWM switch off. Note that open load detection is not possible while coil current is set to '0000', because the chopper is off in this condition. The open load flag will then always be read as inactive ('0'). During overcurrent and undervoltage or overtemperature conditions, the open load flags also become active!

Due to their principle, the open load flags not only signal an open load condition, but also a torque loss of the motor, especially at high motor velocities. To detect only an interruption of the connection to the motor, it is advised to evaluate the flags during stand still or during low velocities only (e.g. for the first or last steps of a movement).

## Standby and shutdown mode

The circuit can be put into a low power standby mode by the user, or, automatically goes to standby on Vcc undervoltage conditions. Before entering standby mode, the TMC239 switches off all power transistors, and holds their gates in a disable condition using high ohmic resistors. In standby mode the  oscillator  becomes  disabled  and  the  oscillator  pin  is  held  at  a  low  state.  The  standby  mode  is available via the interface in SPI-mode and via the ENN pin in non-SPI mode.

The  shutdown  mode  even  reduces  supply  current  further.  It  can  only  be  entered  in  SPI-mode  by pulling the ENN pin high. In shutdown additionally all internal reference voltages become switched off and the SPI circuit is held in reset.

## Power saving

The possibility to control the output current can dramatically save energy, reduce heat generation and increase  precision  by  reducing  thermal  stress  on  the  motor  and  attached  mechanical  components. Just reduce motor current during stand still: Even a slight reduction of the coil currents to 70% of the current  of  the  last  step  of  the  movement,  halves  power  consumption!  In  typical  applications  a  50% current reduction or even less during stand still is reasonable, bringing power consumption down to one quarter or even less.

## Protection Functions

## Overcurrent protection and diagnosis

The TMC239 uses the current sense resistors on the low side to detect an overcurrent: Whenever a voltage above 0.61V is detected, the PWM cycle is terminated at once and all transistors of the bridge are  switched  off  for  the  rest  of  the  PWM  cycle.  The  error  counter  is  increased  by  one.  If  the  error counter reaches 3, the bridge remains switched off for 63 PWM cycles and the error flag is read as 'active'. The user can clear the error condition in advance by clearing the error flag. The error counter is  cleared,  whenever  there  are  more  than  63  PWM  cycles  without  overcurrent.  There  is  one  error counter  for  each  of  the  low  side  bridges,  and  one  for  the  high  side.  The  overcurrent  detection  is inactive during the blank pulse time for each bridge (resp. the corresponding bridge in non-A-type), to suppress spikes which can occur during switching.

The high side comparator detects a short to GND or an overcurrent, whenever the voltage between VS and VT becomes higher than 0.15 V at any time, except for the blank time period which is logically ORed  for  both  bridges.  Here  all  transistors  become  switched  off  for  the  rest  of  the  PWM  cycle, because the bridge with the failure is unknown.

The overcurrent flags can be cleared by disabling and re-enabling the chip either via the ENN pin or by  sending  a  telegram  with  both  current  control  words  set  to  '0000'.  In  high  side  overcurrent conditions the user can determine which bridge sees the overcurrent, by selectively switching on only one of the bridges with each polarity (therefore the other bridge should remain programmed to '0000').

## Over temperature protection and diagnosis

The circuit switches off all output power transistors during an over temperature condition. The over temperature flag should be monitored to detect this condition. The circuit resumes operation after cool down  below  the  temperature  threshold.  However,  operation  near  the  over  temperature  threshold should be avoided, if a high lifetime is desired.

## Overvoltage protection and ENN pin behavior

During  disable  conditions  the  circuit  switches  off  all  output  power  transistors  and  goes  into  a  low current shutdown mode. All register contents is cleared to '0', and all status flags are cleared. The circuit in this condition can also stand a higher voltage, because the voltage then is not limited by the maximum power MOSFET voltage. The enable pin ENN provides a fixed threshold of ½ VCC (TTL level in  non-A-type) to allow a simple overvoltage protection up to 40V using an external voltage divider (see schematic for A-type).

<!-- image -->

## Chopper Principle

## Chopper cycle / Using the mixed decay feature

The TMC239 uses a quiet fixed frequency chopper. Both coils are chopped with a phase shift of 180 degrees. The mixed decay option is realized as a self stabilizing system (pat. fi.), by shortening the fast decay phase, if the ON phase becomes longer. It is advised to enable the mixed decay for each phase during the second half of each microstepping half-wave, when the current is meant to decrease. This  leads  to  less  motor  resonance,  especially  at  medium  velocities.  With  low  velocities  or  during standstill mixed decay should be switched off. In applications requiring high resolution, or using low inductivity motors, the mixed decay mode can also be enabled continuously, to reduce the minimum motor current which can be achieved. When mixed decay mode is continuously on or when using high inductivity  motors  at  low  supply  voltage,  it  is  advised  to  raise  the  chopper  frequency  to  minimum 36kHz, because the half chopper frequency could become audible under these conditions.

<!-- image -->

On phase: Current flows in target direction

<!-- image -->

Fast decay phase: Current flows back into power supply

<!-- image -->

Slow decay phase: Current re-circulation

<!-- image -->

When polarity is changed on one bridge, the PWM cycle on that bridge becomes restarted at once.

Fast  decay  switches  off  both  upper  transistors,  while  enabling  the  lower  transistor  opposite  to  the selected polarity. Slow decay always enables both lower side transistors.

## Adapting the sine wave for smooth motor operation

After reaching the target current in each chopper cycle, both, the slow decay and the fast decay cycle reduce the current by some amount. Especially the fast decay cycle has a larger impact. Thus, the medium coil current always is a bit lower than the target current. This leads to a flat line in the current shape flowing through the motor. It can be corrected, by applying an offset to the sine shape. In mixed decay operation via SPI, an offset of 1 does the job for most motors.

Coil current does not have optimum shape

<!-- image -->

## Blank Time

The TMC239 uses a digital blanking pulse for the current chopper comparators. This prevents current spikes,  which  can  occur  during  switching  action  due  to  capacitive  loading,  from  terminating  the chopper  cycle.  The  lowest  possible  blanking  time  gives  the  best  results  for  microstepping:  A  long blank time leads to a long minimum turn-on time, thus giving an increased lower limit for the current. Please remark, that the blank time should cover both, switch-off time of the lower side transistors and turn-on time of the upper side transistors plus some time for the current to settle. Thus the complete switching  duration  should  never  exceed  1.5µs.  With  slow  external  power  stages  it  will  become necessary to add additional RC-filtering for the sense resistor inputs.

The TMC239 allows adapting the blank time to the load conditions and to the selected slope in four steps (the effective resulting blank times are about 200ns shorter in the non-A-type):

## Blank time settings

| BL2   | BL1   | Typical blank time   |
|-------|-------|----------------------|
| GND   | GND   | 0.6 µs               |
| GND   | VCC   | 0.9 µs               |
| VCC   | GND   | 1.2 µs               |
| VCC   | VCC   | 1.5 µs               |

Target current corrected for optimum shape of coil current

<!-- image -->

## Classical non-SPI control mode (stand alone mode)

The driver can be controlled by analog current control signals and digital phase signals. To enable this mode, tie pin SPE to GND. In this mode, the SPI interface is disabled and the SPI input pins have alternate functions. The internal DACs are forced to '1111'.

## Pin functions in stand alone mode

| Pin      | Stand alone mode name   | Function in stand alone mode                                                                                                                                         |
|----------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SPE      | (GND)                   | Tie to GND to enable stand alone mode                                                                                                                                |
| ANN      | MDAN                    | Enable mixed decay for bridge A (low = enable)                                                                                                                       |
| SCK      | MDBN                    | Enable mixed decay for bridge B (low = enable)                                                                                                                       |
| SDI      | PHA                     | Polarity bridge A (low = current flow from output OA1 to OA2)                                                                                                        |
| CSN      | PHB                     | Polarity bridge B (low = current flow from output OB1 to OB2)                                                                                                        |
| SDO      | ERR                     | Error output (high = overcurrent on any bridge, or over temperature). In this mode, the pin is never tri-stated.                                                     |
| ENN      | ENN                     | Standby mode (high active), high causes a low power mode of the device. Setting this pin high also resets all error conditions.                                      |
| INA, INB | INA, INB                | Current control for bridge A, resp. bridge B. Refer to AGND. The sense resistor trip voltage is 0.34V when the input voltage is 2.0V. Maximum input voltage is 3.0V. |

## Input signals for microstep control in stand alone mode

Attention : When transferring these waves to SPI operation, please remark, that the mixed decay bits are inverted when compared to stand alone mode.

<!-- image -->

## Unipolar Operation

The  TMC239  can  also  be  used  in  a  unipolar  motor  application  with  microstepping.  In  this configuration, only the four upper power transistors are required.

## Differences of short circuit behavior in unipolar operation mode

Since there is no possibility to disable a short to VS condition, the circuit is not completely short circuit proof. In a low cost application a motor short would be covered, just using the bottom sense resistors (see schematic).

## Differences in chopper cycle in unipolar operation mode

In unipolar mode, one of the upper side transistors is chopped, depending on the phase polarity. Slow decay mode always means, that both transistors are disabled. There is no difference between slow and fast decay mode, and the mixed decay control bits are 'don't care'. The transistors have to stand an off voltage, which is slightly higher than the double of the supply voltage. Voltage decay in the coil can be adapted to the application by adding additional diodes and a zener diode to feed back coil current in flyback conditions to the supply.

<!-- image -->

## Calculation of the external components

## Sense Resistor

Choose  an  appropriate  sense  resistor  (RS)  to  set  the  desired  motor  current.  The  maximum  motor current is reached, when the coil current setting is programmed to '1111'.  This results in a current sense trip voltage of 0.34V when the internal reference or a reference voltage of 2V is used.

When  operating  your  motor  in  fullstep  mode,  the  maximum  motor  current  is  as  specified  by  the manufacturer. When operating in sinestep mode, multiply this value by 1.41 for the maximum current (Imax).

<!-- formula-not-decoded -->

In a typical application:

<!-- formula-not-decoded -->

RS:

Current sense resistor of bridge A, B

VTRIP:

Programmed trip voltage of the current sense comparators

Imax:

Desired maximum coil current

## Examples for sense resistor settings

| R S    | I max   |
|--------|---------|
| 0.47  | 723mA   |
| 0.33  | 1030mA  |
| 0.22  | 1545mA  |
| 0.15  | 2267mA  |
| 0.10  | 3400mA  |

## High side overcurrent detection resistor RSH

The  TMC239  detects  an  overcurrent  to  ground,  when  the  voltage  between  VS  and  VT  exceeds 150mV. The high side overcurrent detection resistor should be chosen in a way that 100mV voltage drop are not exceeded between VS and VT, when both coils draw the maximum current. In a sinestep application,  this  is  when  sine  and  cosine  wave  have  their  highest  sum,  i.e.  at  45  degrees, corresponding to 1.41 times the maximum current setting for one coil. In a fullstep application this is the double coil current.

In a microstep application:

<!-- formula-not-decoded -->

In a fullstep application:

$$RSH = 0.1V / (2  Imax)$$

RSH:

High side overcurrent detection resistor

Imax:

Maximum coil current

However, if the user desires to use higher resistance values, a voltage divider in the range of 10  to 100  can  be  used  for  VT.  This  might  also  be  desired  to  limit  the  peak  short  to  GND  current,  as described in the following chapter.

Attention : A careful PCB layout is required for the sense resistor traces and for the RSH traces.

## Making the circuit short circuit proof

In practical applications, a short circuit does not describe a static condition, but can be of very different nature.  It  typically  involves  inductive,  resistive  and  capacitive  components.  Worst  events  are unclamped switching events, because huge voltages can build up in inductive components and result in a high energy spark going into the driver, which can destroy the power transistors. The same is true when disconnecting a motor during operation: Never disconnect the motor during operation!

There is no absolute protection against random short circuit conditions, but pre-cautions can be taken to improve robustness of the circuit:

In a short condition, the current can become very high before it is interrupted by the short detection, due to the blanking during switching and internal delays. The high-side transistors allow a high current flowing for the selected blank time. The lower the external inductivity, the faster the current climbs. If inductive  components  are  involved  in  the  short,  the  same  current  will  shoot  through  the  low-side resistor and cause a high negative voltage spike at the sense resistor. Both, the high current and the voltage spikes are a danger for the driver.

Thus there are a three things to be done, if short circuits are expected:

1. Protect SRA/SRB inputs using a series resistance
2. Increase RSH to limit maximum transistor current: Use same value as for sense resistors
3. Use as short as possible blank time

The second measure effectively limits short circuit current, because the upper driver transistor with its fixed ON gate voltage of 6V forms a constant current source together with its internal resistance and RSH. A positive side effect is, that only one type of low ohmic resistor is required. The drawback is, that power dissipation increases. A high side short detection resistor of 0.33 Ohms limits maximum high side transistor current to typically 4A. The schematic shows the modifications to be done.

However, the effectiveness of these measures should be tested in the given application.

<!-- image -->

## Oscillator Capacitor

The PWM oscillator frequency can be set by an external capacitor. The internal oscillator uses a 28k  resistor to charge / discharge the external capacitor to a trip voltage of 2/3 Vcc respectively 1/3 Vcc. It can be overdriven using an external CMOS level square wave signal. Do not set the frequency higher than 100kHz and do not leave the OSC terminal open! The two bridges are chopped with a phase shift of 180 degrees at the positive and at the negative edge of the clock signal.

<!-- formula-not-decoded -->

fOSC:

PWM oscillator frequency

COSC:

Oscillator capacitor in nF

## Table of oscillator frequencies

| f OSC typ.   | C OSC   |
|--------------|---------|
| 16.7kHz      | 1.5nF   |
| 20.8kHz      | 1.2nF   |
| 25.0kHz      | 1.0nF   |
| 30.5kHz      | 820pF   |
| 36.8kHz      | 680pF   |
| 44.6kHz      | 560pF   |

Please  remark  that  an  unnecessary  high  frequency  leads  to  high  switching  losses  in  the  power transistors and in the motor. For most applications a chopper frequency slightly above audible range is sufficient.  When  audible  noise  occurs  in  an  application,  especially  with  mixed  decay  continuously enabled, the chopper frequency should be two times the audible range.

## Pull-up resistors on unused inputs

The digital inputs all have integrated pull-up resistors, except for the ENN input, which is in fact an analog input. Thus, there are no external pull-up resistors required for unused digital inputs which are meant to be positive.

## Power supply sequencing considerations

Upon power up, the driver initializes and switches off the bridge power transistors. However, in order for  the  internal  startup  logic  to  work  properly,  the  Vcc  supply  voltage  has  to  be  at  least  1.0V, respectively,  the  Vs  supply  voltage  has  to  be  at  least  5.0V.  When  Vs  goes  up  with  Vcc  at  0V,  a medium current temporary cross conduction of the power stage can result at supply voltages between 2.4V  and  4.8V.  In  this  voltage  range,  the  upper  transistors  conduct,  while  the  gates  of  the  lower transistors are floating. While this typically does no harm to the driver, it may hinder the power supply from coming up properly, depending on the power supply start up behavior.

There are two possibilities to prevent this from occurring:

- Add resistors from the LA and LB outputs to GND in the range of 1M  keeping the low side Nchannel MOSFETs gates at GND.
- Alternatively, either use a dual voltage power supply, or use a local regulator, generating the 5V or 3.3V Vcc voltage.

Please pay attention to the local regulator start up voltage: Some newer switching regulators do not start, before the input voltage has reached 5V. Therefore it is recommended to use a standard linear regulator like 7805 or LM317 series or a low drop regulator or a switching regulator like the LM2595, starting at relatively low input voltages.

## Slope Control Resistor

The output-voltage slope of the full bridge is controlled by a constant current gate charge / discharge of the MOSFETs. The charge / discharge current for the MOSFETs can be controlled by an external resistor: A reference current is generated by internally pulling the SLP-Pin to 1.25V via an integrated 4.7K  resistor.  This  current  is  used  to  generate  the  current  for  switching  ON  and  OFF  the  power transistors. (In non-A-type the low side slopes are fixed to typ. +/-15mA corresponding to a 5K  to 10K  slope control resistor!)

The gate-driver output current can be set in range of 2mA to 25mA by an external resistor:

<!-- formula-not-decoded -->

RSLP:

Slope control resistor

IOUT:

Controlled output current of the low-side MOSFET driver

The  SLP-pin  can  directly  be  connected  to  AGND  for  the  fastest  output-voltage  slope  (respectively maximum output current).

Please remark, that there is a trade off between reduced electromagnetic emissions (slow slope) and high efficiency because of low dynamic losses (fast slope). Typical slope times range between 100ns and 500ns. Slope times below 100ns are not recommended, because they superimpose additional stress on the power transistors while bringing only very slight improvement in power dissipation.

For  applications  where  electromagnetic  emission  is  very  critical,  it  might  be  necessary  to  add additional LC (or capacitor only) filtering on the motor connections.

For these applications emission is lower, if only slow decay operation is used.

<!-- image -->

## Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances.

| Symbol   | Parameter                                                | Min     | Max        | Unit   |
|----------|----------------------------------------------------------|---------|------------|--------|
| V S      | Supply voltage                                           | -0.5    | 36         | V      |
| V SM     | Supply and bridge voltage max. 20000s                    |         | 40         | V      |
| V CC     | Logic supply voltage                                     | -0.5    | 6.0        | V      |
| I OP     | Gate driver peak current (1)                             |         | 50         | mA     |
| I OC     | Gate driver continuous current                           |         | 5          | mA     |
| V I      | Logic input voltage                                      | -0.3    | V CC +0.3V | V      |
| V IA     | Analog input voltage                                     | -0.3    | V CC +0.3V | V      |
| I IO     | Maximum current to / from digital pins and analog inputs |         | +/-10      | mA     |
| V VT     | Short-to-ground detector input voltage                   | V S -1V | V S +0.3V  | V      |
| T J      | Junction temperature                                     | -40     | 150 (1)    | °C     |
| T STG    | Storage temperature                                      | -55     | 150        | °C     |

## Electrical Characteristics

## Operational Range

| Symbol   | Parameter                          | Min   |   Max | Unit   |
|----------|------------------------------------|-------|-------|--------|
| T AI     | Ambient temperature industrial (1) | -25   | 125   | °C     |
| T AA     | Ambient temperature automotive     | -40   | 125   | °C     |
| T J      | Junction temperature               | -40   | 140   | °C     |
| V S      | Bridge supply voltage (A-type)     | 7     |  34   | V      |
| V S      | Bridge supply voltage (non-A-type) | 7     |  30   | V      |
| V CC     | Logic supply voltage               | 3.0   |   5.5 | V      |
| f CLK    | Chopper clock frequency            |       | 100   | kHz    |
| R SLP    | Slope control resistor             | 0     | 470   | K     |

- (1)  The circuit can be operated up to 140°C, but output power derates.

## DC Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage and temperature range unless otherwise specified. Typical characteristics represent the average value of all parts.

Logic supply voltage:

VCC = 3.0 V ... 5.5 V,

Junction temperature:   TJ = -40°C … 140°C,

Bridge supply voltage :  VS = 7 V…34 V

(unless otherwise specified)

| Symbol   | Parameter                                                           | Conditions                                         | Min   |   Typ | Max   | Unit   |
|----------|---------------------------------------------------------------------|----------------------------------------------------|-------|-------|-------|--------|
| I LDON   | Gate drive current low side switch ON (non-A-type)                  | V LD < 4V                                          | 10    |  15   | 25    | mA     |
| I LDOFF5 | Gate drive current low side switch OFF (non-A- type)                | V LD > 3V V CC = 5V                                | -15   | -25   | -35   | mA     |
| I LDOFF3 | Gate drive current low side switch OFF (non-A- type)                | V LD > 3V VCC = 3.3V                               | -10   | -15   | -20   | mA     |
| I LDON   | Gate drive current low side switch ON (A-type)                      | V S > 8V, R SLP = 0K V LD < 4V                     | 15    |  25   | 40    | mA     |
| I LDOFF  | Gate drive current low side switch OFF (A-type)                     | V S > 8V, R SLP = 0K V LD > 4V                     | -15   | -25   | -40   | mA     |
| I HDON   | Gate drive current high side switch ON                              | V S > 8V, R SLP = 0K V S - V HD < 4V               | -15   | -25   | -40   | mA     |
| I HDOFF  | Gate drive current high side switch OFF                             | V S > 8V, R SLP = 0K V S - V HD > 4V               | 15    |  30   | 40    | mA     |
|  I SET  | Deviation of Current Setting with Respect to Characterization Curve | Deviation from standard value, 10k  <R SLP <75k  | 70    | 100   | 130   | %      |
| V GH1    | Gate drive voltage high side ON                                     | V S > 8V relative to V S                           | -5.1  |  -6   | -8.0  | V      |
| V GL1    | Gate drive voltage low side ON                                      | V S > 8V                                           | 5.1   |   6   | 8.0   | V      |
| V GH0    | Gate drive voltage high side OFF                                    | relative to V S                                    |       |   0   | -0.5  | V      |
| V GL0    | Gate drive voltage low side OFF                                     |                                                    |       |   0   | 0.5   | V      |
| V GCL    | Gate driver clamping voltage                                        | -I H / I L = 20mA                                  | 12    |  16   | 20    | V      |
| V GCLI   | Gate driver inverse clamping voltage                                | -I H / I L = -20mA                                 |       |  -0.8 |       | V      |

| Symbol    | Parameter                                                     | Conditions                       | Min       | Typ        | Max         | Unit     |
|-----------|---------------------------------------------------------------|----------------------------------|-----------|------------|-------------|----------|
| V CCUV    | VCC undervoltage                                              |                                  | 2.5       | 2.7        | 2.9         | V        |
| V CCOK    | VCC voltage o.k.                                              |                                  | 2.7       | 2.9        | 3.0         | V        |
| I CC      | VCC supply current                                            | f osc = 25 kHz                   |           | 0.85       | 1.35        | mA       |
| I CCSTB   | VCC supply current standby                                    |                                  |           | 0.45       | 0.75        | mA       |
| I CCSD    | VCC supply current shutdown                                   | ENN = 1                          |           | 37         | 70          | µA       |
| V SUV     | VS undervoltage                                               |                                  | 5.5       | 5.9        | 6.2         | V        |
| V CCOK    | VS voltage o.k.                                               |                                  | 6.1       | 6.4        | 6.7         | V        |
| I SSM     | VS supply current with maximum current setting (static state) | V S = 14V, R SLP = 0K            |           | 6          |             | mA       |
| I SSD     | VS supply current shutdown or standby                         | V S = 14V                        |           | 28         | 50          | µA       |
| V IH      | High input voltage (SDI, SCK, CSN, BL1, BL2, SPE, ANN)        |                                  | 2.2       |            | VCC + 0.3 V | V        |
| V IL      | Low input voltage (SDI, SCK, CSN, BL1, BL2, SPE, ANN)         |                                  | -0.3      |            | 0.7         | V        |
| V IHYS    | Input voltage hysteresis (SDI, SCK, CSN, BL1, BL2, SPE, ANN)  |                                  | 100       | 300        | 500         | mV       |
| V OH      | High output voltage (output SDO)                              | -I OH = 1mA                      | VCC - 0.6 | VCC - 0.2  | VCC         | V        |
| V OL      | Low output voltage (output SDO)                               | I OL = 1mA                       | 0         | 0.1        | 0.4         | V        |
| -I ISL    | Low input current (SDI, SCK, CSN, BL1, BL2, SPE, ANN)         | V I = 0 V CC = 3.3V V CC = 5.0V  | 2         | 10 25      | 70          | µA µA µA |
| V ENNH    | High input voltage threshold (input ENN)                      |                                  |           | 1/2 VCC    |             |          |
| V EHYS    | Input voltage hysteresis (input ENN)                          |                                  |           | 0.1 V ENNH |             |          |
| V OSCH    | High input voltage threshold (input OSC)                      |                                  | tbd       | 2/3 VCC    | tbd         | V        |
| V OSCL    | Low input voltage threshold (input OSC)                       |                                  | tbd       | 1/3 VCC    | tbd         | V        |
| V VTD     | VT threshold voltage (referenced to VS)                       |                                  | -130      | -155       | -180        | mV       |
| V TRIP    | SRA / SRB voltage at DAC='1111'                               | internal ref. or 2V at INA / INB | 315       | 350        | 385         | mV       |
| V SRS     | SRA / SRB overcurrent detection threshold                     |                                  | 570       | 615        | 660         | mV       |
| V SROFFS1 | SRA / SRB comparator offset voltage (Standard device)         |                                  | -10       | 0          | 10          | mV       |
| V SROFFS2 | SRA / SRB comparator offset voltage (Selected device)         |                                  | -6        | 0          | 6           | mV       |
| R INAB    | INA / INB input resistance                                    | Vin  3 V                        | 175       | 264        | 360         | k       |

## AC Characteristics

AC characteristics contain the spread of values guaranteed within the specified supply voltage and temperature range unless otherwise specified. Typical characteristics represent the average value of all parts.

Logic supply voltage:

VCC = 3.3V,

Bridge supply voltage:

VS = 14.0V,

Ambient temperature:

TA = 27°C,

External MOSFET gate charge = 3.2nC

| Symbol   | Parameter                                      | Conditions       | Min   |   Typ | Max   | Unit   |
|----------|------------------------------------------------|------------------|-------|-------|-------|--------|
| f OSC    | Oscillator frequency using internal oscillator | C OSC = 1nF  1% | 20    |  25   | 31    | kHz    |
| T BL     | Effective Blank time                           | BL1, BL2 = V CC  | 1.35  |   1.5 | 1.65  | µs     |
| T ONMIN  | Minimum PWM on-time                            | BL1, BL2 = GND   |       |   0.7 |       | µs     |

## Thermal Protection (1)

| Symbol   | Parameter              | Conditions   | Min   |   Typ | Max   | Unit   |
|----------|------------------------|--------------|-------|-------|-------|--------|
| T JOT    | Thermal shutdown       |              | 145   |   155 | 165   | °C     |
| T JOTHYS | T JOT hysteresis       |              |       |    15 |       | °C     |
| T JWT    | Prewarning temperature |              | 135   |   145 | 155   | °C     |
| T JWTHYS | T JWT hysteresis       |              |       |    15 |       | °C     |

## SPI Interface Timing

<!-- image -->

## Propagation Times

(3.0 V  VCC  5.5 V, -40°C  Tj  150°C; VIH = 2.8V, VIL = 0.5V; tr, tf = 10ns; CL = 50pF, unless otherwise specified)

| Symbol   | Parameter                                                  | Conditions   | Min   | Typ   | Max       | Unit   |
|----------|------------------------------------------------------------|--------------|-------|-------|-----------|--------|
| f SCK    | SCK frequency                                              | ENN = 0      | DC    |       | 4         | MHz    |
| t 1      | SCK stable before and after CSN change                     |              | 50    |       |           | ns     |
| t CH     | Width of SCK high pulse                                    |              | 100   |       |           | ns     |
| t CL     | Width of SCK low pulse                                     |              | 100   |       |           | ns     |
| t DSU    | SDI setup time                                             |              | 40    |       |           | ns     |
| t DH     | SDI hold time                                              |              | 50    |       |           | ns     |
| t D      | SDO delay time                                             | C L = 50pF   |       | 40    | 100       | ns     |
| t ZC     | CSN high to SDO high impedance                             | *)           | 50    |       |           | ns     |
| t ES     | ENN to SCK setup time                                      |              | 30    |       |           | µs     |
| t PD     | CSN high to LA / HA / LB / HB output polarity change delay | **)          |       | 3     | t OSC + 4 | µs     |

- *) SDO is tristated whenever ENN is inactive (high) or CSN is inactive (high).
- **) Whenever the PHA / PHB polarity is changed, the chopper is restarted for that phase. However, the chopper does not switch on, when the SRA resp. SRB comparator threshold is exceeded upon the start of a chopper period.

## Using the SPI interface

The SPI interface allows either cascading of multiple devices, giving a longer shift register, or working with a separate chip select signal for each device, paralleling all other lines. Even when there is only one device attached to a CPU, the CPU can communicate with it using a 16 bit transmission. In this case, the upper 4 bits are dummy bits.

## SPI Filter (only A-type)

To prevent spikes from changing the SPI settings, SPI data words are only accepted, if their length is at least 12 bit.

## Application Note: Extending the Microstep Resolution

For some applications it might be desired to have a higher microstep resolution, while keeping the advantages of control via the serial interface. The following schematic shows a solution, which adds two LSBs by selectively pulling up the SRA / SRB pin by a small voltage difference. Please remark, that  the  lower  two  bits  are  inverted  in  the  depicted  circuit.  A  full  scale  sense  voltage  of  340mV  is assumed. The circuit still takes advantage of completely switching off of the coils when the internal DAC bits are set to '0000'. This results in the following comparator trip voltages:

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

Please see the FAQ document for more application information.

## Documentation Revision

| Version   | Author BD= Bernhard Dwersteg   | Description                                              |
|-----------|--------------------------------|----------------------------------------------------------|
| V2.08     | BD                             | Added power supply sequencing considerations             |
| V2.09     | BD                             | updated logo, minor additions                            |
| V2.11     | BD                             | Adapted style, added info on chopper cycle               |
| V2.12     | BD                             | Corrected ENN timing in SPI section, updated MOSFET list |