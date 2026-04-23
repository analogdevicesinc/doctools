<!-- lastmod 2023-08-03 -->
## TMC6300 Datasheet

Highly Efficient Low Voltage, Zero Standby Current Driver for 3-Phase BLDC/PMSM Motors up to 2A peak, Triple Half-Bridge with separate HS and LS control signals.

<!-- image -->

## FEATURES AND BENEFITS

Voltage Range 2V (1.8V) … 11V DC:

Battery Operation 1-2 Li-Ion cells, or min. 2 AA / NiMh cells

3-Phase motors up to 2A (peak)

Direct Bridge control for BLDC or PMSM sine-commutation

Standby &lt;50nA typ. current draw

Low RDSon LS 170mΩ &amp; HS 170mΩ (typ.)

Full Protection &amp; Diagnostics output

Tiny of QFN 3*3 with 20 pins

<!-- image -->

## APPLICATIONS

IOT &amp; Handheld devices Battery operated motors Printers, POS Toys Office and home automation CCTV, Security HVAC Mobile medical devices

## DESCRIPTION

Working from a single Li-Ion cell or dual AA batteries the TMC6300 is optimally suited for battery operated equipment. Operate a BLDC motor with block or sine-commutation using 6-line control from a CPU. Integrated powerMOSFETs  handle  motor  current  up  to  2A. Protection  and  diagnostic  features  support robust and reliable operation. Its integrated charge-pump  for  best-in-class  RDSon  and ultra-low standby current ensure best efficiency  even  at  low  supply  voltage  and longest battery life.

<!-- image -->

<!-- image -->

## APPLICATION EXAMPLES: SIMPLE SOLUTIONS -HIGHLY EFFECTIVE

The TMC6300 scores with power density, integrated power MOSFETs stage with 3x-charge pump for best efficiency at low voltages and high efficiency. It covers a wide spectrum of applications from battery systems to embedded applications with up to 2A motor current per coil. Extensive support enables rapid design cycles and fast time-to-market with competitive products.

<!-- image -->

<!-- image -->

## ORDER CODES

| Order code       | Description                                                                  | Size [mm 2 ]   |
|------------------|------------------------------------------------------------------------------|----------------|
| TMC6300-LA       | Low Voltage BLDC Motor/PMSM Driver IC, 2-11V, 1.2A, QFN20, Tray              | 3 x 3          |
| TMC6300-LA-T     | Low Voltage BLDC Motor/PMSM Motor Driver IC, 2-11V, 1.2A, QFN20, Tape & Reel | 3 x 3          |
| TMC6300-EVAL-KIT | Full Evaluation Kit for TMC6300                                              | 126 x 85       |
| TMC6300-EVAL     | Evaluation Board for TMC6300 (excl. Landungsbrücke and Eselsbrücke)          | 85 x 55        |
| TMC6300-BOB      | Breakout Board with TMC6300                                                  | 25 x 20        |

A CPU operates the driver via individual high-side and low-side control signals. Current feedback is possible via a single foot-point shunt.

The TMC6300-EVAL is part of TRINAMICs universal evaluation board system, which provides a convenient handling of  the  hardware  as  well  as  a  userfriendly  software  tool  for  evaluation. The TMC6300 evaluation board kit consists of three parts: Landungsbrücke (base board), Eselsbrücke (connector board with test points), and TMC6300EVAL.

## Table of Contents

| 1       | PRINCIPLES OF OPERATION .........................4                                                             |
|---------|----------------------------------------------------------------------------------------------------------------|
| 2       | PIN ASSIGNMENT .............................................5                                                  |
| 2.1     | PACKAGE OUTLINE ..........................................5                                                    |
| 2.2     | SIGNAL DESCRIPTIONS ...................................5                                                       |
| 3       | SAMPLE CIRCUITS ............................................6                                                  |
| 3.1     | STANDARD APPLICATION CIRCUIT ..................6                                                               |
| 3.2 3.3 | HIGHLY EFFICIENT DRIVER ..............................7 LOW POWER STANDBY ...................................8 |
| 3.4     | VERY LOW I/O VOLTAGE OPERATION ..............8                                                                 |
| 5       | PROTECTION AND DIAGNOSTICS .............10                                                                     |
| 5.1     | OVERTEMPERATURE PROTECTION ...................10                                                               |
| 5.2     | SHORT PROTECTION ......................................10                                                      |
| 5.3     | DIAGNOSTIC OUTPUT ....................................11                                                       |
| 6       | ABSOLUTE MAXIMUM RATINGS .................12                                                                   |
| 7       | ELECTRICAL CHARACTERISTICS .................12                                                                 |

8

9

7.1

7.2

7.3

OPERATIONAL RANGE

...................................  12

DC AND TIMING CHARACTERISTICS

..............  13

THERMAL CHARACTERISTICS

..........................  15

LAYOUT CONSIDERATIONS

8.1

.........................  16

EXPOSED DIE PAD

........................................  16

8.2

8.3

8.4

WIRING GND

..............................................  16

SUPPLY FILTERING

........................................  16

LAYOUT EXAMPLE

.........................................  17

PACKAGE MECHANICAL DATA

9.1

....................  18

DIMENSIONAL DRAWINGS QFN20

9.2

...............  18

PACKAGE CODES

...........................................  19

10

DESIGNED FOR SUSTAINABILITY

11

12

13

.............  20

TABLE OF FIGURES

.........................................  20

REVISION HISTORY

.......................................  21

REFERENCES

......................................................  21

## 1 Principles of Operation

The TMC6300 low voltage motor driver is intended for battery-operated, space- and standby-powercritical driver applications. It is optimized for BLDC motor control, as well as control of other magnetic actuators. Each MOSFET of each half-bridge can be individually switched on and off. Internal breakbefore-make-(BBM)-logic  ensures  that  no  cross-conduction  occurs.  With  sufficient  supply  capacitors, batteries can be drained down to typically 2.0V (voltage must not drop below 1.8V).

Figure 1.1 TMC6300 basic application block diagram for 3-Phase motors

<!-- image -->

## 2 Pin Assignment

The TMC6300 comes in a tiny package in order to fit miniaturized devices.

## 2.1 Package Outline

Figure 2.1 TMC6300 Pinning Top View BLDC Driver -QFN20, 3x3mm², 0.4mm pitch

<!-- image -->

## 2.2 Signal Descriptions

| Pin             | Number   | Type   | Function                                                                                                                                                                                                              |
|-----------------|----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| W               | 1        |        | Bridge W output                                                                                                                                                                                                       |
| VCP             | 2        |        | Charge pump voltage. Optionally tie to VS using 1nF to 100nF capacitor. May be left unconnected.                                                                                                                      |
| UH              | 3        | DI     | Bridge U high-side control (1=high-side on)                                                                                                                                                                           |
| VH              | 4        | DI     | Bridge V high-side control (1=high-side on)                                                                                                                                                                           |
| WH              | 5        | DI     | Bridge W high-side control (1=high-side on)                                                                                                                                                                           |
| UL              | 6        | DI     | Bridge U low-side control (1=low-side on)                                                                                                                                                                             |
| WL              | 7        | DI     | Bridge W low-side control (1=low-side on)                                                                                                                                                                             |
| GND             | 8        | DI     | tie to GND                                                                                                                                                                                                            |
| GND             | 9        | DI     | tie to GND                                                                                                                                                                                                            |
| VL              | 10       | DI     | Bridge V low-side control (1=low-side on)                                                                                                                                                                             |
| VIO/NSTDBY      | 11       |        | 1.8V to 5V IO supply voltage for all digital pins. IC goes to standby mode and resets when this pin is pulled to GND.                                                                                                 |
| DIAG            | 12       | DO     | Diagnostic output. High level upon driver error. Reset by VIO cycle.                                                                                                                                                  |
| 1.8VOUT         | 13       |        | Output of internal 1.8V regulator. Attach 100nF ceramic capacitor to GND near to pin for best performance. Provide the shortest possible loop to the GND pad. The regulator becomes shut down when VIO is pulled low. |
| GND             | 14       |        | GND. Connect to GND plane near pin.                                                                                                                                                                                   |
| U               | 15       |        | Bridge U output                                                                                                                                                                                                       |
| BRUV            | 16       |        | Foot point of bridges U and V. Connect to GND directly, or via a sense resistor.                                                                                                                                      |
| V               | 17       |        | Bridge V output                                                                                                                                                                                                       |
| VS              | 18       |        | Bridge supply voltage. Provide filtering capacity >10µF near pin with shortest possible loop to GND pad.                                                                                                              |
| -               | 19       |        | Leave this pin open                                                                                                                                                                                                   |
| BRW             | 20       |        | Foot point of bridge W. Connect to GND directly, or via a sense resistor.                                                                                                                                             |
| Exposed die pad | -        |        | Connect the exposed die pad to a GND plane. Provide as many as possible vias for heat transfer to GND plane.                                                                                                          |

## 3 Sample Circuits

The sample circuits show the connection of external components in different operation and supply modes. The connection of the microcontroller is left out for clarity.

## 3.1 Standard Application Circuit

The 3-phase driver offers three half-bridges with individual enable signals for low-side and high-side. It allows driving a PMSM- or a BLDC-motors. In case a current measurement is desired, a common foot point shunt resistor can be added. Keep voltage drop in this resistor to maximum 400mV for normal operation.  Take  care to keep power supply ripple due to chopper operation at a few 100mV, max., especially when low voltage operation is desired. Use a ceramic, or low ESR capacitors for filtering the power supply. The capacitors need to cope with the current ripple caused by chopper operation. A minimum capacity of 100µF electrolytic, or 10µF ceramic capacitor near the driver is recommended to keep ripple low. Actual demand will depend on the internal power supply resistance and the desired motor current. VCC\_IO can be supplied from a separate supply, e.g., a 3.3V regulator, or be driven by a microcontroller port pin. If more than two bridges are switched on at the same time (within 1µs), a capacitor on pin VCP is recommended. The diagnostic output signals any overcurrent or overtemperature condition. The motor driver automatically restarts after power-up, or after cycling VIO\_NSTDBY pin.

Figure 3.1 3-Phase Motor Driver

<!-- image -->

## 3.2 Highly Efficient Driver

The TMC6300 integrates a highly efficient power stage, offering low RDSon even at low supply voltages, due  to  its  internal  charge  pump.  This  enables  high  motor  current  drive  capability  and  low  power dissipation for battery powered applications.

Figure 3.2 RDSon Variation over Supply Voltage

<!-- image -->

When operating  at  a  high  motor  current,  the  driver  power  dissipation  due  to  MOSFET  switch  onresistance significantly heats up the driver. This power dissipation will significantly heat up the PCB cooling infrastructure, if operated at an increased duty cycle. This in turn leads to a further increase of driver temperature. An increase of temperature by about 100°C increases MOSFET resistance by roughly 50%.  This  is  a  typical  behavior  of  MOSFET  switches.  Therefore,  under  high  duty  cycle,  high  load conditions,  thermal  characteristics  must  be  carefully  taken  into  account,  especially  when  increased environment temperatures are to be supported. Refer the thermal characteristics and the layout hints for more information. As a thumb rule, thermal properties of the PCB design become critical for the tiny QFN 3mm x 3mm package at or above 1.4A motor current for increased periods of time. For currents above 1.4A, a 4-layer PCB layout with 5 via contact of the die attach pad to the GND plane is required. Keep in mind that resistive power dissipation raises with the square of the motor current. On the other hand, this means that a small reduction of motor current significantly saves heat dissipation and energy.

Pay special attention to good thermal properties of your PCB layout, when going for 1.4A current or more.

## 3.3 Low Power Standby

Battery powered applications, and mains powered applications conforming to energy saving rules, often require a standby operation, where the power-supply remains on, but current draw goes down to a low value. Control TMC6300 standby operation by the VIO\_NSTDBY pin:

Switch off the I/O voltage by pulling this pin to GND. At the same time make sure, that no digital input pin is at a high level. An input level above VIO\_NSTDBY would hinder pulling down VIO\_NSTDBY, due to the ESD protection diodes in each digital I/O pin. These diodes clamp each input to a level between GND and the IO supply voltage VIO\_NSTDBY. Prior to going to standby, stop the motor and go to a low coil current condition, or switch off the motor driver completely.

## 3.4 Very Low I/O Voltage Operation

In cases, where an I/O voltage of 1.8V (+-5%) is to be used, the VIO undervoltage threshold level might be too high, to safely release the TMC6300 from reset state. To solve, use the internal 1.8V regulator to self-supply the TMC6300 VIO pin, because it delivers slightly more than the rising reset voltage threshold, since it follows the same tolerance stray. For power-up, force the voltage on VIO/NSTDBY to min. 1.4V using a port pin. To go back to low power standby, pull it down to less than 0.6V. A PNP transistor gives a low resistive switch to supply VIO during operation.

Optionally, use an additional 2.0V I/O voltage regulator for the TMC6300, or use a higher I/O voltage and apply level shifters (e.g., MAX14595 for I/O, and 74AUP1T00 to drive VIO/NSTDBY).

Figure 3.3 Additional Circuit for I/O voltage &lt;1.80V

<!-- image -->

## 4 Selecting Sense Resistors

A sense resistor allows current measurement of the motor using an external ADC, to control or limit motor torque. Additionally, the sense resistor will help to make low-side switch overcurrent protection in the IC more sensitive, because the overcurrent protection measures the sum of the voltage drop over the sense resistor and the internal MOSFET RDSON.

Select the sense resistor to get the best possible measurement range for the desired peak motor current. The following table shows examples for the sense resistor selection based on the desired (peak) motor coil current. The sense resistors are selected in a way, that the voltage drop stays at 200-300mV, which is well below the maximum recommended voltage of 400mV.

| CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   | CHOICE OF R SENSE AND RESULTING MAX. MOTOR CURRENT   |
|------------------------------------------------------|------------------------------------------------------|
| R SENSE [Ω]                                          | maximum motor coil current [A]                       |
| 1.50                                                 | 0.2                                                  |
| 1.00                                                 | 0.3                                                  |
| 0.75                                                 | 0.4                                                  |
| 0.50                                                 | 0.6                                                  |
| 330m                                                 | 0.8                                                  |
| 270m                                                 | 1.0                                                  |
| 220m                                                 | 1.2                                                  |
| 150m                                                 | 1.6                                                  |
| 120m                                                 | 2.0                                                  |
| 100m                                                 | 2.0 (limited by driver max. ratings)                 |

Sense resistors should be carefully selected. The full motor current flows through the sense resistors. Due to chopper operation the sense resistors see pulsed current from the MOSFET bridges. Therefore, a low-inductance type such as film or composition resistors is required to prevent voltage spikes causing ringing on the sense voltage inputs leading to unstable measurement results. Also, a low-inductance, low-resistance  PCB  layout  is  essential.  A  massive  ground  plane  is  best.  Please  also  refer  to  layout considerations in chapter 8.

## Attention

A compact layout with massive ground plane is best to avoid parasitic resistance effects.

## 5 Protection and Diagnostics

The TMC6300 drivers supply a complete set of protection capabilities, like short to GND protection, short to VS protection and undervoltage detection.

## 5.1 Overtemperature Protection

The driver integrates a two-level temperature sensor (pre-warning and thermal shutdown) for protection of  the  IC  against  excess  heat.  Heat  is  mainly  generated  by  the  motor  driver  stages.  Most  critical situations, where the driver MOSFETs could be overheated, are avoided by the short to GND protection. The thermal shutdown is just an emergency measure and temperature rising to the shutdown level should be prevented by design.

| TEMPERATURE THRESHOLDS   | TEMPERATURE THRESHOLDS                                                                                                                                                                                                                           |
|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Temperature Level        | Comment                                                                                                                                                                                                                                          |
| 150°C                    | This value is relatively safe to switch off the driver stage before the IC can be destroyed by overheating. On a large PCB, the power MOSFETs reach roughly 150°C peak temperature when the temperature detector is triggered with this setting. |
| 120°C                    | Temperature level for release of overtemperature shutdown. This avoids high- frequency cycling of the overtemperature shutdown.                                                                                                                  |

## Attention

Overtemperature protection cannot in all cases avoid thermal destruction of the IC. In case the rated motor  current  is  exceed,  excess  heat  generation  can  quickly  heat up  the  driver  before  the overtemperature sensor can react. This is due to a delay in heat conduction over the IC die.

After triggering the overtemperature sensor ( ot flag), the driver remains switched off until the system temperature falls below the pre-warning level ( otpw ) to avoid continuous heating to the shutdown level.

## 5.2 Short Protection

The TMC6300 power stages are protected against a short circuit condition by an additional measurement of the current flowing through each of the power stage MOSFETs. This is important, as most short circuit conditions result from a motor cable insulation defect, e.g., when touching the conducting parts connected to the system ground. The short detection is protected against spurious triggering, e.g., by ESD discharges, by retrying three times before switching off the motor. The sensitivity of the low side short protection can be increased by adding a sense resistor.

Once a short condition is safely detected, all driver bridges become switched off, and the DIAG output becomes set. To restart the motor, disable and re-enable the driver. Note, that short protection cannot protect  the  system  and  the  power  stages  for  all  possible  short  events,  as  a  short  event  is  rather undefined, and a complex network of external components may be involved. Therefore, short circuits should basically be avoided.

## Attention

Short protection is an emergency measure and not designed for regular use, nor can it protect the IC and motor from destruction in all cases. The short current limit typically exceeds the absolute maximum values of the driver MOSFETs and thus is not a repetitive value. As a short circuit is a rather undefined event, which may be coupled to high inductive voltage spikes, protection cannot be guaranteed in all cases.

## 5.3 Diagnostic Output

The diagnostic output DIAG provides important status information. An active DIAG output shows that the driver cannot work normally. Figure 5.1 shows the signals controlling the output.

Figure 5.1 DIAG output

<!-- image -->

## 6 Absolute Maximum Ratings

The maximum ratings may not be exceeded under any circumstances. Operating the circuit at or near more than one maximum rating at a time for extended periods shall be avoided by application design.

| Parameter                                                                                               | Symbol   | Min   | Max        | Unit   |
|---------------------------------------------------------------------------------------------------------|----------|-------|------------|--------|
| Supply voltage operating with inductive load *)                                                         | V VS     | -0.5  | 11.2       | V      |
| Supply and bridge voltage max. *)                                                                       | V VMAX   |       | 13.2       | V      |
| I/O supply voltage                                                                                      | V VIO    | -0.5  | 5.5        | V      |
| digital supply voltage                                                                                  | V 1V8OUT | -0.5  | 1.95       | V      |
| Logic input voltage                                                                                     | V I      | -0.5  | V VIO +0.5 | V      |
| MODE input voltage (Do not exceed both, VCC_IO and 5VOUT by more than 10%, as this enables a test mode) | V VREF   | -0.5  | 6          | V      |
| Maximum current to / from digital pins and analog low voltage I/Os                                      | I IO     |       | +/-10      | mA     |
| 1.8V regulator output current (internal plus external load)                                             | I 5VOUT  |       | 20         | mA     |
| Maximum mean or DC current per bridge MOS at T J <110°C                                                 | I OxDC   |       | 1.0        | A      |
| Power bridge repetitive output current                                                                  | I Ox     |       | 2.0        | A      |
| Maximum VS current                                                                                      | I VS     |       | 2.8        | A      |
| Maximum BRx current                                                                                     | I Ox     |       | 2.0        | A      |
| Junction temperature                                                                                    | T J      | -50   | 150        | °C     |
| Storage temperature                                                                                     | T STG    | -55   | 150        | °C     |
| ESD-Protection for handling (Human body model, HBM)                                                     | V ESD    |       | 2          | kV     |

## 7 Electrical Characteristics

## 7.1 Operational Range

| Parameter                                                                    | Conditions             | Symbol   | Min   | Max   | Unit   |
|------------------------------------------------------------------------------|------------------------|----------|-------|-------|--------|
| Junction temperature                                                         |                        | T J      | -40   | 125   | °C     |
| Supply voltage                                                               |                        | V VS     | 2     | 11    | V      |
| Supply & IO voltage battery empty limit                                      |                        | V VS     | 1.8   |       | V      |
| I/O supply voltage                                                           |                        | V VIO    | 2     | 5.25  | V      |
| RMS current per output for continuous operation (value for design guideline) | V VS <2.1V             | I RMS    | 0.1   | 0.8   | A      |
| RMS current per output for continuous operation (value for design guideline) | V VS ≥2.1V             |          |       | 1.0   |        |
| RMS current per output for continuous operation (value for design guideline) | V VS ≥2.2V             |          |       | 1.2   |        |
| RMS motor coil current (chopper operation)                                   | V VS ≥2.5V T J < 110°C | I RMS    |       | 1.4   | A      |
| Max. output current duty cycle limited                                       | T J < 100°C            | I Ox     |       | 2.0   | A      |
| Sum of output current (VS supply pin current)                                |                        | I VS     |       | 2.4   | A      |

## 7.2 DC and Timing Characteristics

DC characteristics contain the spread of values guaranteed within the specified supply voltage range unless otherwise specified. Typical values represent the average value of all parts measured at +25°C. Temperature variation also causes stray to some values. A device with typical values will not leave Min/Max range within the full temperature range.

| Power supply current                          | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Parameter                                     | Symbol                                        | Conditions                                    | Min                                           | Typ                                           | Max                                           | Unit                                          |
| Total supply current, operating, I VS         | I VS                                          | 35kHz chopper, no load                        |                                               | 7                                             | 12                                            | mA                                            |
| IO supply current operating                   | I VIO                                         | no load on outputs, inputs at V IO or GND     |                                               | 60                                            | 200                                           | µA                                            |
| Total supply current, low-power standby, I VS | I VS                                          | V VCC_IO < 0.2V                               |                                               | 0.03                                          | 1                                             | µA                                            |

| Motor driver section                         | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   | DC- and Timing-Characteristics V VS = 8.0V, V VIO =3.3V   |
|----------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|-----------------------------------------------------------|
| Parameter                                    | Symbol                                                    | Conditions                                                | Min                                                       | Typ                                                       | Max                                                       | Unit                                                      |
| RDS ON lowside MOSFET                        | R ONL                                                     | measure at 100mA, 25°C, V VS ≥ 3.2V *)                    |                                                           | 0.17                                                      | 0.25                                                      | Ω                                                         |
| RDS ON highside MOSFET                       | R ONH                                                     | measure at 100mA, 25°C, V VS ≥ 3.2V *)                    |                                                           | 0.17                                                      | 0.25                                                      | Ω                                                         |
| slope, rising                                | t SLPRISE                                                 | value for reference                                       |                                                           | 20                                                        |                                                           | ns                                                        |
| slope, falling                               | t SLPFALL                                                 | value for reference                                       |                                                           | 7                                                         |                                                           | ns                                                        |
| Current sourcing, driver off                 | I OIDLE                                                   | O XX pulled to GND                                        | 6                                                         | 13                                                        | 30                                                        | µA                                                        |
| Recommended / max. VS power- up slope to >5V | VS RAMP                                                   | Hint: Normally satisfied due to ext. capacitor on VS.     |                                                           | <0.33 rcd.                                                | 1                                                         | V/µS                                                      |

| Charge pump                       | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   | DC-Characteristics   |
|-----------------------------------|----------------------|----------------------|----------------------|----------------------|----------------------|----------------------|
| Parameter                         | Symbol               | Conditions           | Min                  | Typ                  | Max                  | Unit                 |
| Charge pump output voltage (mean) | V VCP -V VS          | V VS ≥ 3.5V          | 4.2                  | 5.1                  | 5.7                  | V                    |

| Linear regulator   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   |
|--------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Parameter          | Symbol                                        | Conditions                                    | Min                                           | Typ                                           | Max                                           | Unit                                          |
| Output voltage     | V 5VOUT                                       | I 1V8OUT = 0mA; T J =25°C                     | 1.65                                          | 1.8                                           | 1.95                                          | V                                             |

| Switching Delay                             | Timing-Characteristics   | Timing-Characteristics           | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   | Timing-Characteristics   |
|---------------------------------------------|--------------------------|----------------------------------|--------------------------|--------------------------|--------------------------|--------------------------|
| Parameter                                   | Symbol                   | Conditions                       | Min                      | Typ                      | Max                      | Unit                     |
| Change on digital input to output switching | t DLY                    | The inputs are sampled with an   |                          | 250                      | 500                      | ns                       |
| Matching of delay time between two signals  | t DLYMATCH               | internal 12MHz (9- 15MHz) clock. |                          | 80                       |                          | ns                       |

| Detector levels                                                         | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   | DC-Characteristics V VS = 8.0V, V VIO =3.3V   |
|-------------------------------------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|
| Parameter                                                               | Symbol                                        | Conditions                                    | Min                                           | Typ                                           | Max                                           | Unit                                          |
| V VS undervoltage threshold for                                         | V UV_VS                                       | V VS rising                                   |                                               | 1.8                                           | 2                                             | V                                             |
| RESET                                                                   | V UV_VS                                       | V VS falling                                  | 1.8                                           | 1.6                                           |                                               | V                                             |
| V VIO undervoltage threshold for RESET                                  | V UV_VIO                                      | V VIO rising                                  |                                               |                                               | 1.8                                           | V                                             |
|                                                                         | V UV_VIO                                      | V VIO falling                                 | 1.7                                           |                                               |                                               |                                               |
| V VIO low power standby input voltage                                   | V UV_VIOHYST                                  |                                               |                                               |                                               | 0.4                                           | V                                             |
| V VIO threshold for enable of 1.8V regulator                            | V VIO                                         | V VIO rising                                  | 0.6                                           | 1                                             | 1.4                                           | V                                             |
| Worst case power-up delay time                                          |                                               | V VS = 2.0V, V VIO =1.8V                      |                                               |                                               | 500                                           | µs                                            |
| Short to GND detector threshold (V VS - V Ox )                          | V OS2G                                        | V VS ≥ 3.5V required for operation            | 0.5                                           | 0.8                                           |                                               | V                                             |
| Short to VS detector threshold (V Ox )                                  | V OS2G                                        |                                               | 1.0                                           | 1.2                                           | 1.6                                           | V                                             |
| Short detector delay (high side / low side switch on to short detected) | t S2G                                         |                                               |                                               | 1                                             |                                               | µs                                            |
| Overtemperature prewarning 120°C                                        | t OTPW                                        | Temperature rising                            | 100                                           | 120                                           | 140                                           | °C                                            |
| Overtemperature shutdown 150°C                                          | t OT150                                       | Temperature rising                            | 135                                           | 150                                           | 170                                           | °C                                            |

| Digital pins                     | DC-Characteristics V VIO =3.3V   | DC-Characteristics V VIO =3.3V   | DC-Characteristics V VIO =3.3V   | DC-Characteristics V VIO =3.3V   | DC-Characteristics V VIO =3.3V   | DC-Characteristics V VIO =3.3V   |
|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| Parameter                        | Symbol                           | Conditions                       | Min                              | Typ                              | Max                              | Unit                             |
| Input voltage low level          | V INLO                           |                                  | -0.3                             |                                  | 0.3 V VIO                        | V                                |
| Input voltage high level         | V INHI                           |                                  | 0.7 V VIO                        |                                  | V VIO +0.3                       | V                                |
| Input Schmitt trigger hysteresis | V INHYST                         |                                  |                                  | 0.12 V VIO                       |                                  | V                                |
| Output voltage low level         | V OUTLO                          | I OUTLO = 2mA                    |                                  |                                  | 0.2                              | V                                |
| Output voltage high level        | V OUTHI                          | I OUTHI = -2mA                   | V VIO -0.2                       |                                  |                                  | V                                |
| Input leakage current            | I ILEAK                          |                                  | -1                               |                                  | 1                                | µA                               |
| Digital pin capacitance          | C                                | *)                               |                                  | 3.5                              |                                  | pF                               |

## 7.3 Thermal Characteristics

The following table shall give an idea on the thermal resistance of the package. The thermal resistance for a four-layer board will provide a good idea on a typical application. Actual thermal characteristics will depend on the PCB layout, PCB type and PCB size. The thermal resistance will benefit from thicker CU (inner) layers for spreading heat horizontally within the PCB. Also, air flow will reduce thermal resistance.

A thermal resistance of 40K/W for a typical board means, that the package is capable of continuously dissipating 1W at an ambient temperature of 85°C with the die temperature staying below/at 125°C. Note, that a thermally optimized layout is required.

Table 7.1 Thermal characteristics

| Parameter                                                    | Symbol   | Conditions                                                                                                                                |   Typ | Unit   |
|--------------------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------|-------|--------|
| Typical power dissipation                                    | P D      | 2A current from one half-bridge output to a second output, 35kHz chopper, 11V, 60°C peak surface of package                               |   1   | W      |
| Typical power dissipation                                    | P D      | 0.7A current in block commutation, 35kHz chopper, 11V, 45°C peak surface of package                                                       |   0.5 | W      |
| Thermal resistance junction to ambient on a multilayer board | R TMJA   | Dual signal and two internal power plane board (2s2p) as defined in JEDEC EIA JESD51-5 and JESD51-7 (FR4, 35µm CU, 70mm x 133mm, d=1.5mm) |  40   | K/W    |
| Thermal resistance junction to case                          | R TJC    | Junction to heat slug of package                                                                                                          |   7   | K/W    |

## 8 Layout Considerations

## 8.1 Exposed Die Pad

The TMC6300 uses its die attach pad to dissipate heat from the drivers and the linear regulator to the board.  For  best  electrical  and  thermal  performance,  use  a  reasonable  amount  of  solid,  thermally conducting vias between the die attach pad and the ground plane. The printed circuit board should have a solid ground plane spreading heat into the board and providing for a stable GND reference.

## 8.2 Wiring GND

All signals of the TMC6300 are referenced to their respective GND. Directly connect all GND pins under the device to a common ground area (GND and die attach pad). The GND plane right below the die attach pad should be treated as a virtual star point. For thermal reasons, the PCB top layer shall be connected to a large PCB GND plane spreading heat within the PCB.

## Attention

Especially the sense resistors are susceptible to GND differences and GND ripple voltage. Optimally place the resistor close to the IC, with one or more vias to the GND plane.

## 8.3 Supply Filtering

The 1.8VOUT output voltage ceramic filtering capacitor (100 n F recommended) should be placed as close as possible to the 1.8VOUT pin, with its GND return going directly to the die pad or the nearest GND pin. This ground connection shall not be shared with other loads or additional vias to the GND plane. Use as short and as thick connections as possible.

The motor supply pins VS should be decoupled with a ceramic, or a ceramic plus an electrolytic capacitor (47 μF or larger is recommended , depending on the motor coil current). Place the capacitors close to the device.

Take into account that the switching motor coil outputs have a high dV/dt. Thus, capacitive stray into high resistive signals can occur if the motor traces are near other traces over longer distances.

## 8.4 Layout Example

## Schematic

<!-- image -->

## Placement (Excerpt)

<!-- image -->

GND

Top Layout (Excerpt, showing die pad vias)

<!-- image -->

The  complete  schematics  and  layout  data  for  all  evaluation  boards  are  available  on  the  TRINAMIC website.

## 9 Package Mechanical Data

## 9.1 Dimensional Drawings QFN20

Attention: Drawings not to scale.

<!-- image -->

Figure 9.1 Dimensional drawings QFN20

<!-- image -->

| Parameter              | [mm] Ref   | Min   | Nom   | Max   |
|------------------------|------------|-------|-------|-------|
| total thickness        | A          | 0.8   | 0.85  | 0.9   |
| stand off              | A1         | 0     | 0.035 | 0.05  |
| mold thickness         | A2         |       | 0.65  | 0.67  |
| lead frame thickness   | A3         |       | 0.203 |       |
| Lead width             | b          | 0.15  | 0.2   | 0.25  |
| body size X            | D          |       | 3.0   |       |
| body size Y            | E          |       | 3.0   |       |
| lead pitch             | e          |       | 0.4   |       |
| exposed die pad size X | J          | 1.6   | 1.7   | 1.8   |
| exposed die pad size Y | K          | 1.6   | 1.7   | 1.8   |
| lead length            | L          | 0.35  | 0.4   | 0.45  |
| package edge tolerance | aaa        |       |       | 0.1   |
| mold flatness          | bbb        |       |       | 0.1   |
| coplanarity            | ccc        |       |       | 0.08  |
| lead offset            | ddd        |       |       | 0.1   |
| exposed pad offset     | eee        |       |       | 0.1   |

## 9.2 Package Codes

| Type       | Package      | Temperature range   | Code & marking   |
|------------|--------------|---------------------|------------------|
| TMC6300-LA | QFN20 (RoHS) | -40°C ... +125°C    | (TMC logo) 6300  |

## 10 Designed for Sustainability

Sustainable growth is one of the most important and urgent challenges today. We at Trinamic try to contribute  by  designing  highly  efficient  IC  products,  to  minimize  energy  consumption,  ensure  best customer experience and long-term satisfaction by smooth and silent run, while minimizing the demand for external resources, e.g., for power supply, cooling infrastructure, reduced motor size and magnet material by intelligent control interfaces and advanced algorithms.

Please help and design efficient and durable products made for a sustainable world.

## 11 Table of Figures

| FIGURE 1.1 TMC6300 BASIC APPLICATION BLOCK DIAGRAM FOR 3-P HASE MOTORS ..................................................................4                                        |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FIGURE 2.1 TMC6300 PINNING TOP VIEW BLDC DRIVER - QFN20, 3X3MM², 0.4MM PITCH .................................................5                                                   |
| FIGURE 3.1 3-P HASE MOTOR DRIVER .........................................................................................................................................6       |
| FIGURE 3.2 RDSON VARIATION OVER SUPPLY VOLTAGE .............................................................................................................7                     |
| FIGURE 3.3 ADDITIONAL CIRCUIT FOR I/O VOLTAGE <1.80V .....................................................................................................8                       |
| FIGURE 5.1 DIAG OUTPUT ........................................................................................................................................................11 |
| FIGURE 9.1 DIMENSIONAL DRAWINGS QFN20 .........................................................................................................................18                 |

## 12 Revision History

Table 12.1 Document Revisions

| Version   | Date        | Author BD= Bernhard Dwersteg   | Description                                                                                                                                          |
|-----------|-------------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| V1.00     | 2019-Aug-02 | BD                             | Minor changes                                                                                                                                        |
| V1.01     | 2019-Nov-06 | BD                             | Minor wording, added chapter on sustainability, added chapter on low I/O voltage operation                                                           |
| V1.02     | 2020-Apr-02 | BD                             | Added new TMC6300-EVAL                                                                                                                               |
| V1.03     | 2020-May-19 | BD                             | Updated Logo                                                                                                                                         |
| V1.04     | 2020-Jun-02 | BD                             | Complemented operational range, added information on limitations of short protection                                                                 |
| V1.05     | 2021-Apr-20 | BD                             | Minor wording                                                                                                                                        |
| V1.06     | 2021-Dec-21 | BD                             | New Company Logo                                                                                                                                     |
| V1.07     | 2022-Jan-12 | BD                             | Adapted order codes, minor wording                                                                                                                   |
| V1.08     | 2022-Apr-14 | BD                             | Improved chapter on operation at 1.8V I/O voltage; Increased ESD rating. ESD has now been tested for 2kV; Added VVIO power up threshold; Minor fixes |

## 13 References

[TMC6300-EVAL] TMC6300 Evaluation board: Manuals, software and PCB data available on www.trinamic.com