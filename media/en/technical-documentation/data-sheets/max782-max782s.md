<!-- lastmod 2022-08-05 -->
<!-- image -->

<!-- image -->

## Triple-Output Power-Supply Controller for Notebook Computers

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_General Description

The MAX782 is a system-engineered power-supply controller for notebook computers or similar battery-powered equipment.  It provides two high-performance step-down (buck) pulse-width modulators (PWMs) for +3.3V and +5V, and dual PCMCIA VPP outputs powered by an integral flyback winding controller.  Other functions include dual, lowdropout, micropower linear regulators for CMOS/RTC backup, and three precision low-battery-detection comparators.

High efficiency (95% at 2A; greater than 80% at loads from 5mA to 3A) is achieved through synchronous rectification  and  PWM operation at heavy loads, and IdleMode TM operation at light loads.  It uses physically small components, thanks to high operating frequencies (300kHz/200kHz) and a new current-mode PWM architecture that allows for output filter capacitors as small as 30µF per ampere of load.  Line- and load-transient response are terrific, with a high 60kHz unity-gain crossover frequency allowing output transients to be corrected within four or five clock cycles.  Low system cost is achieved through a high level of integration and the use of low-cost, external N-channel MOSFETs.  The integral flyback winding controller provides a low-cost, +15V high-side output that regulates even in the absence of a load on the main output.

Other features include low-noise, fixed-frequency PWM operation at moderate to heavy loads and a synchronizable oscillator for noise-sensitive applications such as electromagnetic pen-based systems and communicating computers.  The MAX782 is a monolithic BiCMOS IC available in fine-pitch, SSOP surface-mount packages.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Notebook Computers Portable Data Terminals Communicating Computers Pen-Entry Systems

## \_\_\_\_\_\_Typical Application Diagram

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ' Dual PWM Buck Controllers (+3.3V and +5V)
- ' Dual PCMCIA VPP Outputs (0V/5V/12V)
- ' Three Precision Comparators or Level Translators
- ' 95% Efficiency
- ' 420µA Quiescent Current; 70µA in Standby (linear regulators alive)
- ' 5.5V to 30V Input Range
- ' Small SSOP Package
- ' Fixed Output Voltages Available:

3.3   (standard)

3.45 (High-Speed Pentium™)

3.6   (PowerPC™)

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_Ordering Information

Ordering Information continued on last page.

| PART       | TEMP. RANGE   | PIN-PACKAGE   | V OUT   |
|------------|---------------|---------------|---------|
| MAX782CBX  | 0°C to +70°C  | 36 SSOP       | 3.3V    |
| MAX782RCBX | 0°C to +70°C  | 36 SSOP       | 3.45V   |
| MAX782SCBX | 0°C to +70°C  | 36 SSOP       | 3.6V    |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Configuration

<!-- image -->

™Idle-Mode is a trademark of Maxim Integrated Products. Pentium is a trademark of Intel.  PowerPC is a trademark of IBM.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

Call toll free 1-800-998-8800 for free samples or literature.

## Triple-Output Power-Supply Controller for Notebook Computers

## ABSOLUTE MAXIMUM RATINGS

| V+ to GND.................................................................-0.3V, +36V   |
|-----------------------------------------------------------------------------------------|
| PGND to GND........................................................................±2V  |
| VL to GND...................................................................-0.3V, +7V  |
| BST3, BST5 to GND..................................................-0.3V, +36V          |
| LX3 to BST3.................................................................-7V, +0.3V  |
| LX5 to BST5.................................................................-7V, +0.3V  |
| Inputs/Outputs to GND (D1-D3, ON5, REF, SYNC, DA1, DA0, DB1, DB0, ON5,                  |
| SS5, CS5, FB5, CS3, FB3, SS3, ON3)..........-0.3V, (VL + 0.3V)                          |
| VDD to GND.................................................................-0.3V, 20V   |
| VPPA, VPPB to GND.....................................-0.3V, (VDD + 0.3V)               |
| VH to GND...................................................................-0.3V, 20V  |
| Q1-Q3 to GND.................................................-0.3V, (VH + 0.3V)         |
| DL3, DL5 to PGND...........................................-0.3V, (VL + 0.3V)           |

| DH3 to                                                                                    | LX3..................................................-0.3V, (BST3 + 0.3V)   |
|-------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| DH5 to                                                                                    | LX5..................................................-0.3V, (BST5 + 0.3V)   |
| REF, VL, VPP Short to                                                                     | GND........................................Momentary                        |
| REF Current.........................................................................20mA  |                                                                             |
| VL Current...........................................................................50mA |                                                                             |
| VPPA, VPPB Current                                                                        | .........................................................100mA              |
| Continuous Power Dissipation (T A = +70°C) SSOP (derate 11.76mW/°C above +70°C)           | ...................941mW                                                    |
| Operating Temperature Ranges: MAX782CBX/MAX782__CBX...............................0°C     | to +70°C                                                                    |
| MAX782EBX/MAX782__EBX                                                                     | ............................-40°C to +85°C                                  |
| Storage Temperature Range.............................-65°C                               | to +160°C                                                                   |
| Lead Temperature (soldering, 10sec)                                                       | .............................+300°C                                         |

Stresses beyond those listed under 'Absolute Maximum Ratings'' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(V+ = 15V, GND = PGND = 0V, IVL = IREF = 0mA, ON3 = ON5 = 5V, other digital input levels are 0V or +5V, T A  = T MIN to T MAX , unless otherwise noted.)

| PARAMETER                          | CONDITIONS                                                                |                                                                           | MIN                                | TYP                                | MAX                                | UNITS                              |
|------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------|------------------------------------|------------------------------------|------------------------------------|------------------------------------|
| +3.3V AND 5V STEP-DOWN CONTROLLERS | +3.3V AND 5V STEP-DOWN CONTROLLERS                                        | +3.3V AND 5V STEP-DOWN CONTROLLERS                                        | +3.3V AND 5V STEP-DOWN CONTROLLERS | +3.3V AND 5V STEP-DOWN CONTROLLERS | +3.3V AND 5V STEP-DOWN CONTROLLERS | +3.3V AND 5V STEP-DOWN CONTROLLERS |
| Input Supply Range                 |                                                                           |                                                                           | 5.5                                |                                    | 30                                 | V                                  |
| FB5 Output Voltage                 | 0mV < (CS5-FB5) < 70mV, 6V < V+ < 30V (includes load and line regulation) | 0mV < (CS5-FB5) < 70mV, 6V < V+ < 30V (includes load and line regulation) | 4.80                               | 5.08                               | 5.20                               | V                                  |
| FB3 Output Voltage                 | < (CS3-FB3) < 70mV, 6V < V+ < 30V (includes load and line regulation)     | MAX782                                                                    | 3.17                               | 3.35                               | 3.46                               | V                                  |
| FB3 Output Voltage                 | < (CS3-FB3) < 70mV, 6V < V+ < 30V (includes load and line regulation)     | MAX782R                                                                   | 3.32                               | 3.50                               | 3.60                               | V                                  |
| FB3 Output Voltage                 | < (CS3-FB3) < 70mV, 6V < V+ < 30V (includes load and line regulation)     | MAX782S                                                                   | 3.46                               | 3.65                               | 3.75                               | V                                  |
| Load Regulation                    | Either controller (CS_ - FB_ = 0mV to 70mV)                               | Either controller (CS_ - FB_ = 0mV to 70mV)                               |                                    | 2                                  |                                    | %                                  |
| Line Regulation                    | Either controller (V+ = 6V to 30V)                                        | Either controller (V+ = 6V to 30V)                                        |                                    | 0.03                               |                                    | %/V                                |
| Current-Limit Voltage              | CS3-FB3 or CS5-FB5                                                        | CS3-FB3 or CS5-FB5                                                        | 80                                 | 100                                | 120                                | mV                                 |
| Current-Limit Voltage              | CS5-FB5 (VDD < 13V, flyback mode)                                         | CS5-FB5 (VDD < 13V, flyback mode)                                         | -50                                | -100                               | -160                               | mV                                 |
| SS3/SS5 Source Current             |                                                                           |                                                                           | 2.5                                | 4.0                                | 6.5                                | µA                                 |
| SS3/SS5 Fault Sink Current         |                                                                           |                                                                           | 2                                  |                                    |                                    | mA                                 |
| 15V FLYBACK CONTROLLER             | 15V FLYBACK CONTROLLER                                                    | 15V FLYBACK CONTROLLER                                                    | 15V FLYBACK CONTROLLER             | 15V FLYBACK CONTROLLER             | 15V FLYBACK CONTROLLER             | 15V FLYBACK CONTROLLER             |
| VDD Regulation Setpoint            | Falling edge, hysteresis = 1%                                             | Falling edge, hysteresis = 1%                                             | 13                                 |                                    | 14                                 | V                                  |
| VDD Shunt Setpoint                 | Rising edge, hysteresis = 1%                                              | Rising edge, hysteresis = 1%                                              | 18                                 |                                    | 20                                 | V                                  |
| VDD Shunt Current                  | VDD = 20V                                                                 | VDD = 20V                                                                 | 2                                  | 3                                  |                                    | mA                                 |
| Quiescent VDD Current              | VDD = 18V, ON3 = ON5 = 5V, VPPA/B programmed to 12V with no external load | VDD = 18V, ON3 = ON5 = 5V, VPPA/B programmed to 12V with no external load |                                    | 140                                | 300                                | µA                                 |
| VDD Off Current                    | VDD = 18V, ON3 = ON5 = 5V, VPPA/B programmed to Hi-Z or 0V                | VDD = 18V, ON3 = ON5 = 5V, VPPA/B programmed to Hi-Z or 0V                |                                    | 15                                 | 30                                 | µA                                 |
| PCMCIA REGULATORS (Note 1)         | PCMCIA REGULATORS (Note 1)                                                | PCMCIA REGULATORS (Note 1)                                                | PCMCIA REGULATORS (Note 1)         | PCMCIA REGULATORS (Note 1)         | PCMCIA REGULATORS (Note 1)         | PCMCIA REGULATORS (Note 1)         |
| VPPA/VPPB Output Voltage           | Program to 12V, 13V < VDD < 19V, 0mA < I L < 60mA                         | Program to 12V, 13V < VDD < 19V, 0mA < I L < 60mA                         | 11.6                               | 12.1                               | 12.5                               | V                                  |
| VPPA/VPPB Output Voltage           | Program to 5V, 13V < VDD < 19V, 0mA < I L < 60mA                          | Program to 5V, 13V < VDD < 19V, 0mA < I L < 60mA                          | 4.85                               | 5.05                               | 5.20                               | V                                  |
| VPPA/VPPB Output Voltage           | Program to 0V, 13V < VDD < 19V, -0.3mA < I L < 0.3mA                      | Program to 0V, 13V < VDD < 19V, -0.3mA < I L < 0.3mA                      | -0.3                               |                                    | 0.3                                | V                                  |
| VPPA/VPPB Off Input Current        | Program to Hi-Z, VDD = 19V, 0V < VPP < 12V                                | Program to Hi-Z, VDD = 19V, 0V < VPP < 12V                                |                                    |                                    | 35                                 | µA                                 |

## 2 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

## ELECTRICAL CHARACTERISTICS (continued)

(V+ = 15V, GND = PGND = 0V, IVL = IREF = 0mA, ON3 = ON5 = 5V, other digital input levels are 0V or +5V, T A  = T MIN to T MAX , unless otherwise noted.)

| PARAMETER                                             | CONDITIONS                                                                     | MIN                              | TYP                              | MAX                              | UNITS                            |
|-------------------------------------------------------|--------------------------------------------------------------------------------|----------------------------------|----------------------------------|----------------------------------|----------------------------------|
| INTERNAL REGULATOR AND REFERENCE                      | INTERNAL REGULATOR AND REFERENCE                                               | INTERNAL REGULATOR AND REFERENCE | INTERNAL REGULATOR AND REFERENCE | INTERNAL REGULATOR AND REFERENCE | INTERNAL REGULATOR AND REFERENCE |
| VL Output Voltage                                     | ON5 = ON3 = 0V, 5.5V < V+ < 30V, 0mA < I L < 25mA                              | 4.5                              |                                  | 5.5                              | V                                |
| VL Fault Lockout Voltage                              | Falling edge, hysteresis = 1%                                                  | 3.6                              |                                  | 4.2                              | V                                |
| VL/FB5 Switchover Voltage                             | Rising edge of FB5, hysteresis = 1%                                            | 4.2                              |                                  | 4.7                              | V                                |
| REF Output Voltage                                    | No external load (Note 2)                                                      | 3.24                             |                                  | 3.36                             | V                                |
| REF Fault Lockout Voltage                             | Falling edge                                                                   | 2.4                              |                                  | 3.2                              | V                                |
| REF Load Regulation                                   | 0mA < I L < 5mA                                                                |                                  | 30                               | 75                               | mV                               |
| V+ Standby Current                                    | D1 = D2 = D3 = ON3 = ON5 = DA0 = DA1 = DB0 = DB1 = 0V, V+ = 30V                |                                  | 70                               | 110                              | µA                               |
| Quiescent Power Consumption (both PWM controllers on) | D1 = D2 = D3 = DA0 = DA1 = DB0 = DB1 = 0V, FB5 = CS5 = 5.25V, FB3 = CS3 = 3.5V |                                  | 6.0                              | 8.6                              | mW                               |
| V+ Off Current                                        | FB5 = CS5 = 5.25V, VL switched over to FB5                                     |                                  | 30                               | 60                               | µA                               |
| COMPARATORS                                           | COMPARATORS                                                                    | COMPARATORS                      | COMPARATORS                      | COMPARATORS                      | COMPARATORS                      |
| D1-D3 Trip Voltage                                    | Falling edge, hysteresis = 1%                                                  | 1.61                             |                                  | 1.69                             | V                                |
| D1-D3 Input Current                                   | D1 = D2 = D3 = 0V to 5V                                                        |                                  |                                  | ±100                             | nA                               |
| Q1-Q3 Source Current                                  | VH = 15V, Q1-Q3 forced to 2.5V                                                 | 12                               | 20                               | 30                               | µA                               |
| Q1-Q3 Sink Current                                    | VH = 15V, Q1-Q3 forced to 2.5V                                                 | 200                              | 500                              | 1000                             | µA                               |
| Q1-Q3 Output High Voltage                             | I SOURCE = 5µA, VH = 3V                                                        | VH-0.5                           |                                  |                                  | V                                |
| Q1-Q3 Output Low Voltage                              | I SINK = 20µA, VH = 3V                                                         |                                  |                                  | 0.4                              | V                                |
| Quiescent VH Current                                  | VH = 18V, D1 = D2 = D3 = 5V, no external load                                  |                                  | 6                                | 10                               | µA                               |
| OSCILLATOR AND INPUTS/OUTPUTS                         | OSCILLATOR AND INPUTS/OUTPUTS                                                  | OSCILLATOR AND INPUTS/OUTPUTS    | OSCILLATOR AND INPUTS/OUTPUTS    | OSCILLATOR AND INPUTS/OUTPUTS    | OSCILLATOR AND INPUTS/OUTPUTS    |
| Oscillator Frequency                                  | SYNC = 3.3V                                                                    | 270                              | 300                              | 330                              |                                  |
|                                                       | SYNC = 0V or 5V                                                                | 170                              | 200                              | 230                              | kHz                              |
| SYNC High Pulse Width                                 |                                                                                | 200                              |                                  |                                  | ns                               |
| SYNC Low Pulse Width                                  |                                                                                | 200                              |                                  |                                  | ns                               |
| SYNC Rise/Fall Time                                   | Not tested                                                                     |                                  |                                  | 200                              | ns                               |
| Oscillator SYNC Range                                 |                                                                                | 240                              |                                  | 350                              | kHz                              |
|                                                       | SYNC = 3.3V                                                                    | 89                               | 92                               |                                  |                                  |
| Maximum Duty Cycle                                    | SYNC = 0V or 5V                                                                | 92                               | 95                               |                                  | %                                |
| Input Low Voltage                                     | ON3, ON5, DA0, DA1, DB0, DB1, SYNC                                             |                                  |                                  | 0.8                              | V                                |
| Input High Voltage                                    | ON3, ON5, DA0, DA1, DB0, DB1                                                   | 2.4                              |                                  |                                  | V                                |
| Input High Voltage                                    | SYNC                                                                           | VL-0.5                           |                                  |                                  | V                                |
| Input Current                                         | ON3, ON5, DA0, DA1, DB0, DB1, V IN = 0V or 5V                                  |                                  |                                  | ±1                               | µA                               |
| DL3/DL5 Sink/Source Current                           | DL3, DL5 forced to 2V                                                          |                                  | 1                                |                                  | A                                |
| DH3/DH5 Sink/Source Current                           | BST3-LX3 = BST5-LX5 = 4.5V, DH3, DH5 forced to 2V                              |                                  | 1                                |                                  | A                                |
| DL3/DL5 On Resistance                                 | High or low                                                                    |                                  |                                  | 7                                | Ω                                |
| DH3/DH5 On Resistance                                 | High or low, BST3-LX3 = BST5-LX5 = 4.5V                                        |                                  |                                  | 7                                | Ω                                |

Note 1: Output current is further limited by maximum allowable package power dissipation.

Note 2: Since the reference uses VL as its supply, V+ line regulation error is insignificant.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

3

MAX782

## Triple-Output Power-Supply Controller for Notebook Computers

<!-- image -->

## Triple-Output Power-Supply Controller for Notebook Computers

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 1, Transpower transformer type TTI5870, TA = +25°C, unless otherwise noted.)

<!-- image -->

HORIZONTAL = 500ns/div

+5V OUTPUT CURRENT = 1A

INPUT VOLTAGE = 16V

## +5V LOAD-TRANSIENT RESPONSE

<!-- image -->

HORIZONTAL = 200 m s/div

VIN  = 15V

<!-- image -->

HORIZONTAL = 5

m s/div

+5V OUTPUT CURRENT = 42mA

INPUT VOLTAGE = 16V

## +3.3V LOAD-TRANSIENT RESPONSE

<!-- image -->

HORIZONTAL = 200 m s/div

VIN  = 15V

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

5

## MAX782

## Triple-Output Power-Supply Controller for Notebook Computers

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics (continued)

(Circuit of Figure 1, Transpower transformer type TTI5870, VDD ‡ 13V, TA = +25°C, unless otherwise noted.)

<!-- image -->

HORIZONTAL = 20

m

s/div

I LOAD = 2A

## +3.3V LINE-TRANSIENT RESPONSE, RISING

<!-- image -->

HORIZONTAL = 20

m

s/div

I LOAD = 2A

<!-- image -->

HORIZONTAL = 20

m

I LOAD = 2A

s/div

<!-- image -->

HORIZONTAL = 20

m

s/div

I LOAD = 2A

## 6 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN   | NAME               | FUNCTION                                                                                                                                                                                                                                               |
|-------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1     | ON3                | Logic input to turn on +3.3V. Logic high turns on the regulator. Connect to VL for automatic start-up.                                                                                                                                                 |
| 2     | D1                 | #1 level-translator/comparator noninverting input. Inverting comparator input is internally connected to 1.650V. Controls Q1. Connect to GND if unused.                                                                                                |
| 3     | D2                 | #2 level-translator/comparator noninverting input. Inverting comparator input is internally connected to 1.650V. Controls Q2. Connect to GND if unused.                                                                                                |
| 4     | D3                 | #3 level-translator/comparator noninverting input. Inverting comparator input is internally connected to 1.650V. Controls Q3. Connect to GND if unused.                                                                                                |
| 5     | VH                 | External supply input for level-translator/comparator. For N-channel FET drive, connect to VDD or external +13V to +18V supply. For low-battery comparators, connect to +3.3V or +5V (or to VL/REF).                                                   |
| 6     | Q3                 | #3 level-translator/comparator output. Sources 20µA from VH when D3 is high. Sinks 500µA to GND when D3 is low, even with VH = 0V.                                                                                                                     |
| 7     | Q2                 | #2 level-translator/comparator output. Sources 20µA from VH when D2 is high. Sinks 500µA to GND when D2 is low, even with VH = 0V.                                                                                                                     |
| 8     | Q1                 | #1 level-translator/comparator output. Sources 20µA from VH when D1 is high. Sinks 500µA to GND when D1 is low, even with VH = 0V.                                                                                                                     |
| 9     | VPPA               | 0V, 5V, 12V, Hi-Z PCMCIA VPP output. Sources up to 60mA. Controlled by DA0 and DA1.                                                                                                                                                                    |
| 10    | VDD                | 15V flyback input (feedback). A weak shunt regulator conducts 3mA to GND when VDD exceeds 19V. Also the supply input to the VPP regulators.                                                                                                            |
| 11    | VPPB               | 0V, 5V, 12V, Hi-Z PCMCIA VPP output. Sources up to 60mA. Controlled by DB0 and DB1.                                                                                                                                                                    |
| 12    | GND                | Low-current analog ground                                                                                                                                                                                                                              |
| 13    | REF                | 3.3V reference output. Sources up to 5mA for external loads. Bypass to GND with 1µF/mA load or 0.22µF minimum.                                                                                                                                         |
| 14    | SYNC               | Oscillator frequency control and synchronization input: Connect to VL or to GND for f = 200kHz; connect to REF for f = 300kHz. For external synchronization in the 240kHz to 350kHz range, a high-to-low transi- tion causes the start of a new cycle. |
| 15-18 | DA1, DA0, DB1, DB0 | Intel 82365 compatible PCMCIA VPP control inputs (see Table 1)                                                                                                                                                                                         |
| 19    | ON5                | Logic input to turn on +5V. Logic high turns on the regulator. Connect to VL for automatic startup.                                                                                                                                                    |
| 20    | SS5                | +5V-supply soft-start control input. Ramp time to full current limit is 1ms/nF of capacitance to GND.                                                                                                                                                  |
| 21    | CS5                | +5V-supply current-sense input. +100mV = current limit in buck mode, -100mV = current limit in flyback mode (where the ±100mV are referenced to FB5).                                                                                                  |
| 22    | DH5                | +5V-supply external MOSFET high-side switch-drive output                                                                                                                                                                                               |
| 23    | LX5                | +5V-supply inductor connection                                                                                                                                                                                                                         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

7

## Triple-Output Power-Supply Controller for Notebook Computers

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description (continued)

|   PIN | NAME   | FUNCTION                                                                                                                                                                                               |
|-------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    24 | BST5   | +5V-supply boost capacitor connection (0.1µF to LX5)                                                                                                                                                   |
|    25 | DL5    | +5V-supply external MOSFET synchronous-rectifier drive output                                                                                                                                          |
|    26 | PGND   | Power ground                                                                                                                                                                                           |
|    27 | FB5    | +5V-supply feedback input and low-side current-sense terminal                                                                                                                                          |
|    28 | VL     | Internal 5V-supply output. Bypass with 4.7µF. This pin is linearly regulated from V+ or switched to the +5V output to improve efficiency. VL is always on and can source up to 5mA for external loads. |
|    29 | V+     | Main (battery) input: 5.5V to 30V                                                                                                                                                                      |
|    30 | DL3    | +3.3V-supply external MOSFET synchronous-rectifier drive output                                                                                                                                        |
|    31 | BST3   | +3.3V-supply boost capacitor connection (0.1µF to LX3)                                                                                                                                                 |
|    32 | LX3    | +3.3V-supply inductor connection                                                                                                                                                                       |
|    33 | DH3    | +3.3V-supply external MOSFET high-side switch-drive output                                                                                                                                             |
|    34 | FB3    | +3.3V-supply feedback and low-side current-sense terminal                                                                                                                                              |
|    35 | CS3    | +3.3V-supply current-sense input. Maximum is +100mV referenced to FB3.                                                                                                                                 |
|    36 | SS3    | +3.3V-supply soft-start control input. Ramp time to full current limit is 1ms/nF of capacitance to GND.                                                                                                |

## Table 1.  Truth Table for VPP Control Pins

| D_0     | D_1     | VPP_           |
|---------|---------|----------------|
| 0 0 1 1 | 0 1 0 1 | 0V 5V 12V Hi-Z |

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX782 converts a 5.5V to 30V input to five outputs (Figure 1).  It produces two high-power, switch-mode, pulse-width modulated (PWM) supplies, one at +5V and the other at +3.3V.  These two supplies operate at either 200kHz or 300kHz, allowing extremely small external components to be used.  Output current capability depends on external components, and can exceed 5A

8

on each supply.  A 15V high-side (VDD) supply is also provided, delivering an output current that can exceed 300mA, depending on the external components chosen. Two linear regulators supplied by the 15V VDD line create programmable VPP supplies for PCMCIA slots. These supplies (VPPA, VPPB) can be programmed to be grounded or high impedance, or to deliver 5V or 12V at up to 60mA.

An internal 5V, 25mA supply (VL) and a 3.3V, 5mA reference voltage (REF) are also generated, as shown in Figure 2.  Fault-protection circuitry shuts off the PWM and high-side supply when the internal supplies lose regulation.

Three precision comparators are included.  Their output stages permit them to be used as level translators for  driving  high-side  external  power MOSFETs: For example, to facilitate switching VCC lines to PCMCIA slots.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

Figure 1.  MAX782 Application Circuit

<!-- image -->

+3.3V Supply

The +3.3V supply is produced by a current-mode PWM step-down regulator using two small N-channel MOSFETs, a catch diode, an inductor, and a filter capacitor.

Efficiency is greatly enhanced by the use of the second MOSFET (connected from LX3 to PGND), which acts as a synchronous rectifier.  A 100nF capacitor connected to  BST3 provides the drive voltage for the high-side (upper) N-channel MOSFET.

A current limit set by an external sense resistor prevents excessive inductor current during start-up or under short-circuit conditions.  A soft-start capacitor can be chosen to tailor the rate at which the output ramps up. This supply can be turned on by connecting ON3 to logic high, or can be turned off by connecting ON3 to GND.  All logic levels are TTL and CMOS compatible.

+5V Supply

The +5V output is produced by a current-mode PWM step-down regulator similar to the +3.3V supply.  This supply uses a transformer primary as its inductor, the secondary of which is used for the high-side (VDD) supply.  It also has current limiting and soft-start.  It can be turned off by connecting ON5 to GND, or turned on by connecting ON5 to logic high.

The +5V supply's dropout voltage, as configured in Figure 1, is typically 400mV at 2A.  As VIN approaches 5V, the +5V output gracefully falls with VIN until the VL regulator output hits its undervoltage lockout threshold. At this point, the +5V supply turns off.

The default frequency for both PWM controllers is 300kHz (with SYNC connected to REF), but 200kHz may be used by connecting SYNC to GND or VL.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

<!-- image -->

Figure 2.  MAX782 Block Diagram

## 10 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

<!-- image -->

Figure 3.  PWM Controller Block Diagram

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ 11

MAX782

## Triple-Output Power-Supply Controller for Notebook Computers

## +3.3V and +5V PWM Buck Controllers

The two current-mode PWM controllers are identical except for different preset output voltages and the addition of a flyback winding control loop to the +5V side (see Figure 3, +3.3V/+5V PWM Controller Block Diagram). Each PWM is independent except for being synchronized to a master oscillator and sharing a common reference (REF) and logic supply (VL). Each PWM can be turned on and off separately via ON3 and ON5. The PWMs are a direct-summing type, lacking a traditional integrator-type error amplifier and the phase shift associated with it. They therefore do not require any external feedback compensation components if the filter  capacitor ESR guidelines given in the Design Procedure are followed.

The main gain block is an open-loop comparator that sums four input signals:  an output voltage error signal, current-sense signal, slope-compensation ramp, and precision voltage reference. This direct-summing method approaches the ideal of cycle-by-cycle control of the output voltage. Under heavy loads, the controller operates in full PWM mode. Every pulse from the oscillator  sets  the  output  latch  and  turns  on  the  high-side switch for a period determined by the duty cycle (approximately V OUT /V IN ). As the high-side switch turns off, the synchronous rectifier latch is set and, 60ns later, the low-side switch turns on (and stays on until the beginning of the next clock cycle, in continuous mode, or  until  the  inductor  current  crosses  through  zero,  in discontinuous mode). Under fault conditions where the inductor current exceeds the 100mV current-limit threshold, the high-side latch is reset and the high-side switch is turned off.

At  light  loads,  the  inductor  current  fails  to  exceed  the 25mV threshold set by the minimum current comparator.  When this  occurs,  the  PWM goes into idle-mode, skipping most of the oscillator pulses in order to reduce the switching frequency and cut back switching losses. The oscillator is effectively gated off at light loads because the minimum current comparator immediately resets the high-side latch at the beginning of each cycle, unless the FB\_ signal falls below the reference voltage level.

A flyback winding controller regulates the +15V VDD supply in the absence of a load on the main +5V output. If VDD falls below the preset +13V VDD regulation threshold, a 1µs one-shot is triggered that extends the on-time of the low-side switch beyond the point where the inductor current crosses zero (in discontinuous mode). This causes inductor (primary) current to reverse, pulling current out of the output filter capacitor and causing the flyback transformer to operate in the forward mode. The low impedance presented by the transformer secondary in forward mode allows the +15V filter capacitor to be quickly charged again, bringing VDD into regulation.

## Soft-Start/SS\_ Inputs

Connecting capacitors to SS3 and SS5 allows gradual build-up of the +3.3V and +5V supplies after ON3 and ON5 are driven high.  When ON3 or ON5 is low, the appropriate SS capacitors are discharged to GND. When ON3 or ON5 is driven high, a 4µA constant current  source charges these capacitors up to 4V.  The resulting ramp voltage on the SS\_ pins linearly increases the current-limit comparator setpoint so as to increase the duty cycle to the external power MOSFETs up to the maximum output.  With no SS capacitors, the circuit will reach maximum current limit within 10µs.

Soft-start  greatly  reduces  initial  in-rush  current  peaks and allows start-up time to be programmed externally.

## Synchronous Rectifiers

Synchronous rectification allows for high efficiency by reducing the losses associated with the Schottky rectifiers.    Also,  the  synchronous  rectifier  MOSFETS are necessary for correct operation of the MAX782's boost gate-drive and VDD supplies.

When the external power MOSFET N1 (or N2) turns off, energy stored in the inductor causes its terminal voltage to reverse instantly.  Current flows in the loop formed by the inductor, Schottky diode, and load, an action that charges up the filter capacitor. The Schottky diode has a forward voltage of about 0.5V which, although small, represents a significant power loss, degrading efficiency.  A synchronous rectifier, N3 (or N4), parallels the diode and is turned on by DL3 (or DL5) shortly after the diode conducts.  Since the on resistance (r DS(ON) ) of the synchronous rectifier is very low, the losses are reduced.

The synchronous rectifier MOSFET is turned off when the inductor current falls to zero.

Cross conduction (or 'shoot-through') is said to occur if the high-side switch turns on at the same time as the synchronous rectifier.  The MAX782's internal breakbefore-make timing ensures that shoot-through does not occur.  The Schottky rectifier conducts during the time that  neither  MOSFET is on, which improves efficiency by preventing the synchronous-rectifier MOSFET's lossy body diode from conducting.

The synchronous rectifier works under all operating conditions, including discontinuous-conduction and idle-mode. The +5V synchronous rectifier also controls the 15V VDD voltage (see the High-Side Supply (VDD) section).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

## Boost Gate-Driver Supply

Gate-drive voltage for the high-side N-channel switch is generated with a flying-capacitor boost circuit as shown in  Figure  4.  The  capacitor  is  alternately  charged from the VL supply via the diode and placed in parallel with the high-side MOSFET's gate-source terminals. On startup, the synchronous rectifier (low-side) MOSFET forces LX\_ to 0V and charges the BST\_ capacitor to 5V. On the second half-cycle, the PWM turns on the high-side MOSFET by connecting the capacitor to the MOSFET gate by closing an internal switch between BST\_ and DH\_. This provides the necessary enhancement voltage to  turn  on  the  high-side switch, an action that 'boosts' the 5V gate-drive signal above the battery voltage.

Ringing seen at the high-side MOSFET gates (DH3 and DH5) in discontinuous-conduction mode (light loads) is a natural operating condition caused by the residual energy in the tank circuit formed by the inductor and stray capacitance at the LX\_ nodes. The gate driver negative rail is referred to LX\_, so any ringing there is directly coupled to the gate-drive supply.

## Modes of Operation PWM Mode

Under heavy loads - over approximately 25% of full load - the +3.3V and +5V supplies operate as continuous-current PWM supplies (see Typical Operating Characteristics).  The duty cycle (%ON) is approximately:

<!-- formula-not-decoded -->

Current flows continuously in the inductor:  First,  it ramps up when the power MOSFET conducts; then, it ramps down during the flyback portion of each cycle as energy is put into the inductor and then discharged into the load.  Note that the current flowing into  the  inductor  when  it  is  being  charged  is  also flowing into  the  load,  so  the  load  is  continuously receiving  current  from  the  inductor.    This  minimizes output  ripple  and  maximizes  inductor  use,  allowing very small physical and electrical sizes.  Output ripple is primarily a function of the filter capacitor (C7 or C6) effective series resistance (ESR) and is typically under 50mV (see the Design Procedure section). Output ripple is worst at light load and maximum input voltage.

## Idle Mode

Under light loads (&lt;25% of full load), efficiency is further enhanced by turning the drive voltage on and off for  only  a  single  clock  period,  skipping  most  of  the clock pulses entirely.  Asynchronous switching, seen as 'ghosting' on an oscilloscope, is thus a normal operating condition whenever the load current is less than approximately 25% of full load.

Figure 4.  Boost Supply for Gate Drivers

<!-- image -->

At certain input voltage and load conditions, a transition region exists where the controller can pass back and forth  from  idle-mode to PWM mode.  In this situation, short bursts of pulses occur that make the current waveform look erratic, but do not materially affect the output ripple.  Efficiency remains high.

## Current Limiting

The voltage between CS3 (CS5) and FB3 (FB5) is continuously monitored.  An external, low-value shunt resistor is connected between these pins, in series with the inductor, allowing the inductor current to be continuously measured throughout the switching cycle.  Whenever this voltage exceeds 100mV, the drive voltage to the external high-side MOSFET is cut off.  This protects the MOSFET, the load, and the battery in case of short circuits or temporary load surges.  The current-limiting resistor R1 (R2) is typically 25m Ω (20m Ω ) for 3A load current.

## Oscillator Frequency; SYNC Input

The SYNC input controls the oscillator frequency. Connecting SYNC to GND or to VL selects 200kHz operation; connecting to REF selects 300kHz operation.  SYNC can also be driven with an external 240kHz to 350kHz CMOS/TTL source to synchronize the internal oscillator.

Normally, 300kHz is used to minimize the inductor and filter capacitor sizes, but 200kHz may be necessary for low input voltages (see Low-Voltage (6-cell) Operation).

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

## High-Side Supply (VDD)

The 15V VDD supply is obtained from the rectified and filtered  secondary of transformer L2.  VDD is enabled whenever the +5V supply is on (ON5 = high).  The primary and secondary of L2 are connected so that, during the flyback portion of each cycle (when MOSFET N2 is off and N4 is on), energy stored in the core is transferred into the +5V load through the primary and into VDD through the secondary, as determined by the turns ratio.  The secondary voltage is added to the +5V to make  VDD.    See  the Typical  Operating Characteristics for the VDD supply's load capability.

Unlike other coupled-inductor flyback converters, the VDD voltage is regulated regardless of the loading on the +5V output.  (Most coupled-inductor converters can only support the auxiliary output when the main output is loaded.)  When the +5V supply is lightly loaded, the circuit  achieves good control of VDD by pulsing the MOSFET normally used as the synchronous rectifier. This draws energy from the +5V supply's output capacitor  and  uses  the  transformer  in  a  forward-converter mode (i.e., the +15V output takes energy out of the secondary when current is flowing in the primary). Note that these forward-converter pulses are interspersed with normal synchronous-rectifier pulses, and they only occur at light loads on the +5V rail.

The transformer secondary's rectified and filtered output is only roughly regulated, and may be between 13V and 19V.  It is brought back into VDD, which is also the feedback input, and used as the source for the PCMCIA VPP regulators (see Generating Additional VPP Outputs Using External Linear Regulators). It can also be used as the VH power supply for the comparators or any external MOSFET drivers.

When the input voltage is above 20V, or when the +5V supply is heavily loaded and VDD is lightly loaded, L2's interwinding capacitance and leakage inductance can produce voltages above that calculated from the turns ratio.  A 3mA shunt regulator limits VDD to 19V.

Clock-frequency noise on the VDD rail of up to 3Vp-p is a facet of normal operation, and can be reduced by adding more output capacitance.

## PCMCIA-Compatible Programmable VPP Supplies

Two independent regulators are provided to furnish PCMCIA VPP supplies.  The VPPA and VPPB outputs can be programmed to deliver 0V, 5V, 12V, or to be high impedance.  The 0V output mode has a 250 Ω pull-down to  discharge external filter capacitors and ensure that flash EPROMs cannot be accidentally programmed. These linear regulators operate from the high-side sup-

## Table 2.  VPP Program Codes

|   DA0 |   DA1 | VPPA   |
|-------|-------|--------|
|     0 |     0 | 0V     |
|     0 |     1 | 5V     |
|     1 |     0 | 12V    |
|     1 |     1 | Hi-Z   |

|   DB0 |   DB1 | VPPB   |
|-------|-------|--------|
|     0 |     0 | 0V     |
|     0 |     1 | 5V     |
|     1 |     0 | 12V    |
|     1 |     1 | Hi-Z   |

ply (VDD), and each can furnish up to 60mA.  Bypass VPPA and VPPB to GND with at least 1µF, with the bypass capacitors less than 20mm from the VPP pins.

The outputs are programmed with DA0, DA1, DB0 and DB1, as shown in Table 2.

These codes are Intel 82365 (PCMCIA digital controller) compatible.  For other interfaces, one of the inputs can be permanently wired high or low and the other toggled to turn the supply on and off.  The truth table shows that either a '0' or '1' can be used to turn each supply on. The high-impedance state is to accomodate external programming voltages.  The two VPP outputs can be safely connected in parallel for increased load capability if  the  control  inputs  are  also  tied  together  (i.e.,  DA0  to DB0, DA1 to DB1). If VPAA and VPPB are connected in parallel,  some devices may exhibit several milliamps of increased quiescent supply current when enabled, due to slightly mismatched output voltage set points.

## Comparators

Three noninverting comparators can be used as precision voltage comparators or high-side drivers.  The supply for these comparators (VH) is brought out and may be connected to any voltage between +3V and +19V.  The noninverting inputs (D1-D3) are high impedance, and the inverting input is internally connected to a 1.650V reference.  Each output (Q1-Q3) sources 20µA from VH when its input is above 1.650V, and sinks 500µA to GND when its input is below 1.650V. The Q1-Q3 outputs can be fixed together in wired-OR configuration since the pull-up current is only 20µA.

Connecting VH to a logic supply (5V or 3V) allows the comparators to be used as low-battery detectors.  For driving N-channel power MOSFETs to turn external loads on and off, VH should be 6V to 12V higher than the load voltage.  This enables the MOSFETs to be fully turned on and results in low r DS(ON) .  VDD is a convenient source for VH.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

The comparators are always active when V+ is above +4V, even when VH is 0V.  Thus, Q1-Q3 will sink current to  GND even when VH is 0V, but they will only source current from VH when VH is above approximately 1.5V.

If Q1, Q2, or Q3 is externally pulled above VH, an internal diode conducts, pulling VH a diode drop below the output and powering anything connected to VH.  This voltage will also power the other comparator outputs.

## Internal VL and REF Supplies

An internal linear regulator produces the 5V used by the internal control circuits.  This regulator's output is available on pin VL and can source 5mA for external loads. Bypass VL to GND with 4.7µF.  To save power, when the +5V switch-mode supply is above 4.5V, the internal linear regulator is turned off and the high-efficiency +5V switch-mode supply output is connected to VL.

The internal 3.3V bandgap reference (REF) is powered by the internal 5V VL supply, and is always on.  It can furnish  up  to  5mA.    Bypass  REF  to  GND  with  0.22µF, plus 1µF/mA of load current.

Both the VL and REF outputs remain active, even when the switching regulators are turned off, to supply memory keep-alive power.

These linear-regulator ouputs can be directly connected to  the  corresponding step-down regulator outputs (i.e., REF to +3.3V, VL to +5V) to keep the main supplies alive in standby mode.  However, to ensure start-up, standby load currents must not exceed 5mA on each supply.

## Fault Protection

The +3.3V and +5V PWM supplies, the high-side supply,  and  the  comparators are disabled when either of two faults is present: VL &lt; +4.0V or REF &lt; +2.8V (85% of its nominal value).

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Design Procedure

Figure 1's schematic and Table 2's component list show values suitable for a 3A, +5V supply and a 3A, +3.3V supply.  This circuit operates with input voltages from 6.5V to 30V, and maintains high efficiency with output currents between 5mA and 3A  (see the Typical Operating Characteristics).  This circuit's components may be changed if the design guidelines described in this section are used - but before beginning the design, the following information should be firmly established:

VIN(MAX) , the maximum input (battery) voltage. This value should include the worst-case conditions under which the power supply is expected to function, such where:

as no-load (standby) operation when a battery charger is connected but no battery is installed.  V IN(MAX) cannot exceed 30V.

VIN(MIN) , the minimum input (battery) voltage. This value should be taken at the full-load operating current  under  the  lowest  battery  conditions.    If  V IN(MIN) is  below  about  6.5V,  the  power  available  from  the VDD supply will be reduced.  In addition, the filter capacitance required to maintain good AC load regulation  increases,  and  the  current  limit  for  the  +5V supply has to be increased for the same load level.

## +3.3V Inductor (L1)

Three inductor parameters are required:  the inductance value (L), the peak inductor current (I LPEAK ), and the coil resistance (R L ).  The inductance is:

<!-- formula-not-decoded -->

L =  ------------VIN(MAX) x f x I OUT x LIR

VOUT = output voltage, 3.3V;

VIN(MAX) = maximum input voltage (V); f = switching frequency, normally 300kHz; IOUT = maximum +3.3V DC load current (A); LIR = ratio of inductor peak-to-peak AC current to average DC load current, typically 0.3.

A higher value of LIR allows smaller inductance, but results in higher losses and higher ripple.

The highest peak inductor current (I LPEAK ) equals the DC load current (I OUT ) plus half the peak-to-peak AC inductor current (I LPP ).  The peak-to-peak AC inductor current is typically chosen as 30% of the maximum DC load current, so the peak inductor current is 1.15 times I OUT.

The peak inductor current at full load is given by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

The coil resistance should be as low as possible, preferably in the low milliohms.  The coil is effectively in series with the load at all times, so the wire losses alone are approximately:

<!-- formula-not-decoded -->

In general, select a standard inductor that meets the L, I LPEAK, and RL requirements (see Tables 3 and 4).  If a standard inductor is unavailable, choose a core with an LI 2 parameter greater than L x I LPEAK 2 , and use the largest wire that will fit the core.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

## +5V Transformer (T1)

Table 3 lists two commercially available transformers and parts for a custom transformer.  The following instructions show how to determine the transformer parameters required for a custom design:

```
LP, the primary inductance value I LPEAK, the peak primary current LI 2 , the core's energy rating RP and RS, the primary and secondary resistances N, the primary-to-secondary turns ratio.
```

The transformer primary is specified just as the +3.3V inductor, using V OUT = +5.0V; but the secondary output (VDD) power must be added in as if it were part of the primary.  VDD current (I DD ) usually includes the VPPA and VPPB output currents.  The total +5V power, P TOTAL , is the sum of these powers:

```
PTOTAL = P5 + PDD where: P5 = VOUT x I OUT ; PDD = VDD x IDD; and: VOUT = output voltage, 5V; I OUT = maximum +5V load current (A); VDD = VDD output voltage, 15V; IDD = maximum VDD load current (A); so: PTOTAL = (5V x I OUT ) + (15V x I DD ) and the equivalent +5V output current, I TOTAL , is: ITOTAL = PTOTAL / 5V
```

```
= [(5V x I OUT ) + (15V x I DD )] / 5V. The primary inductance, L P , is given by: VOUT x   (V IN(MAX) - V OUT ) LP = ---------------
```

where:

VIN(MAX) x  f x I TOTAL x LIR VOUT = output voltage, 5V; VIN(MAX) = maximum input voltage; f = switching frequency, normally 300kHz; I TOTAL = maximum equivalent load current (A); LIR = ratio of primary peak-to-peak AC current to average DC load current, typically 0.3.

The highest peak primary current (I LPEAK ) equals the total DC load current (I TOTAL ) plus half the peak-to-peak AC primary current (I LPP ).  The peak-to-peak AC primary current is typically chosen as 30% of the maximum DC load current, so the peak primary current is 1.15 times I TOTAL.  A higher value of LIR allows smaller inductance, but results in higher losses and higher ripple.

The peak current in the primary at full load is given by:

<!-- formula-not-decoded -->

ILPEAK = I TOTAL + -------------.

2 x f x LP x V IN(MAX)

Choose a core with an LI 2 parameter greater than L P x I LPEAK 2 .

The winding resistances, R P and RS, should be as low as possible, preferably in the low milliohms.  Use the largest gauge wire that will fit on the core.  The coil is effectively  in  series  with  the  load  at  all  times,  so  the resistive losses in the primary winding alone are approximately (I TOTAL ) 2 x R P .

The minimum turns ratio, N MIN , is 5V:(15V-5V).  Use 1:2.2 to  accommodate the tolerance of the +5V supply.  A greater ratio will reduce efficiency of the VPP regulators.

Minimize the diode capacitance and the interwinding capacitance, since they create losses through the VDD shunt regulator.  These are most significant when the input voltage is high, the +5V load is heavy, and there is no load on VDD.

Ensure the transformer secondary is connected with the right polarity:  A VDD supply will be generated with either polarity, but proper operation is possible only with the correct polarity.  Test for correct connection by measuring the VDD voltage when VDD is unloaded and the input voltage (V IN )  is  varied  over its  full  range.    Correct connection is indicated if VDD is maintained between 13V and 20V.

## Current-Sense Resistors (R1, R2)

The sense resistors must carry the peak current in the inductor,  which  exceeds the full DC load current. The internal  current  limiting  starts  when  the  voltage across the sense resistors exceeds 100mV nominally, 80mV minimum.  Use the minimum value to ensure adequate output current capability:  For the +3.3V supply, R1 = 80mV / (1.15 x I OUT ); for the +5V supply, R2 =  80mV/(1.15 x I TOTAL ), assuming that LIR = 0.3.

Since the sense resistance values (e.g. R1 = 25m Ω for I OUT = 3A) are similar to a few centimeters of narrow traces on a printed circuit board, trace resistance can contribute significant errors.  To prevent this, Kelvin connect the CS\_ and FB\_ pins to the sense resistors; i.e., use separate traces not carrying any of the inductor or load current, as shown in Figure 5.

Run these traces parallel at minimum spacing from one another.  The wiring layout for these traces is critical for stable,  low-ripple  outputs  (see  the Layout  and Grounding section).

## MOSFET Switches (N1-N4)

The four N-channel power MOSFETs are usually identical and must be 'logic-level' FETs; that is, they must be fully  on  (have  low  r DS(ON) )  with  only  4V  gatesource drive voltage.  The MOSFET rDS(ON) should ideally be about twice the value of the sense resistor. MOSFETs with even lower rDS(ON) have higher gate capacitance, which increases switching time and transition losses.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

Figure 5.  Kelvin Connections for the Current-Sense Resistors

<!-- image -->

MOSFETs with low gate-threshold voltage specifications  (i.e.,  maximum  V GS(TH) = 2V rather than 3V) are preferred, especially for high-current (5A) applications.

Output Filter Capacitors (C6, C7, C14) The output filter capacitors determine the loop stability and output ripple voltage.  To ensure stability, the minimum capacitance and maximum ESR values are:

<!-- formula-not-decoded -->

and,

where:

<!-- formula-not-decoded -->

CF = output filter capacitance, C6 or C7 (F);

VREF = reference voltage, 3.3V;

VOUT = output voltage, 3.3V or 5V;

RCS = sense resistor ( Ω );

GBWP = gain-bandwidth product, 60kHz;

ESRCF = output filter capacitor ESR ( Ω ).

Be sure to select output capacitors that satisfy both the minimum capacitance and maximum ESR requirements.  To achieve the low ESR required, it may be appropriate to use a capacitance value 2 or 3 times larger than the calculated minimum.

The output ripple in continuous-current mode is:

VOUT(RPL) = I LPP(MAX) x (ESRCF+1/(2 x π x f x C F )). In  idle-mode, the ripple has a capacitive and resistive component:

<!-- formula-not-decoded -->

The total ripple, V OUT(RPL) , can be approximated as follows:

<!-- formula-not-decoded -->

## Diode D2

The voltage rating of D2 should be at least 2 x V IN + 5V plus a safety margin.  A rating of at least 75V is necessary for the maximum 30V supply.  A Schottky diode is preferable for lower input voltages, and is required for input voltages under 7V. Use a highspeed silicon diode (with a higher breakdown voltage and lower capacitance) for high input voltages.  D2's current rating should exceed twice the maximum current load on VDD.

## Diodes D3 and D4

Use 1N5819s or similar Schottky diodes.  D3 and D4 conduct only about 3% of the time, so the 1N5819's 1A current rating is conservative.  The voltage rating of D3 and D4 must exceed the maximum input supply voltage from the battery.  These diodes must be Schottky diodes to prevent the lossy MOSFET body diodes from turning on, and they must be placed physically close to their associated synchronous rectifier MOSFETs.

## Soft-Start Capacitors (C8, C9)

A capacitor connected from GND to either SS pin causes that supply to ramp up slowly.  The ramp time to full current limit,  t SS ,  is  approximately  1ms  for  every  nF  of capacitance on SS\_, with a minimum value of 10µs. Typical capacitor values are in the 10nF to 100nF range; a 5V rating is sufficient.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

Because this ramp is applied to the current-limit circuit, the actual time for the output voltage to ramp up depends on the load current and output capacitor value.  Using Figure 1's circuit with a 2A load and no SS capacitor, full output voltage is reached about 600µs after ON\_ is driven high.

## Boost Capacitors (C4, C5)

Capacitors C4 and C5 store the boost voltage and provide the supply for the DH3 and DH5 drivers.  Use 0.1µF and place each within 10mm of the BST\_ and LX\_ pins.

## Boost Diodes (D1A, D1B)

Use high-speed signal diodes; e.g., 1N4148 or equivalent.

## Table 3.  Surface-Mount Components

(See Figure 1 for schematic diagram and Table 4 for phone numbers.)

| COMPONENT   | SPECIFICATION                                               | MANUFACTURER                        | PART NO.                                                                                |
|-------------|-------------------------------------------------------------|-------------------------------------|-----------------------------------------------------------------------------------------|
| C1, C13     | 33µF, 35V tantalum capacitors                               | Sprague                             | 595D336X0035R2B                                                                         |
| C2          | 4.7µF, 16V tantalum capacitor                               | Sprague                             | 595D475X0016A2B                                                                         |
| C3          | 1µF, 20V tantalum capacitor                                 | Sprague                             | 595D475X0016A2B                                                                         |
| C4, C5      | 0.1µF, 16V ceramic capacitors                               | Murata-Erie                         | GRM42-6X7R104K50V                                                                       |
| C6          | 330µF, 10V tantalum capacitor                               | Sprague                             | 595D337X0010R2B                                                                         |
| C7, C14     | 150µF, 10V tantalum capacitors                              | Sprague                             | 595D157X0010D2B                                                                         |
| C8, C9      | 0.01µF, 16V ceramic capacitors                              | Murata-Erie                         | GRM42-6X7R103K50V                                                                       |
| C10, C11    | 1µF, 35V tantalum capacitors                                | Sprague                             | 595DD105X0035A2B                                                                        |
| C12         | 2.2µF, 25V tantalum capacitor                               | Sprague                             | 595DD225X0025B2B                                                                        |
| D1A, D1B    | 1N4148SMTN diodes (fast recovery)                           | Philips                             | BAW56                                                                                   |
| D2          | Fast-recovery high voltage diode                            | Nihon                               | EC11FS1                                                                                 |
| D3, D4      | 1N5819 SMT diodes                                           | Nihon                               | EC10QS04                                                                                |
| L1          | 10µH, 2.65A inductor                                        | Sumida                              | CDR125-100                                                                              |
| N1-N4       | N-channel MOSFETs (SO-8)                                    | Siliconix                           | Si9410DY                                                                                |
| R1          | 0.025 Ω , 1% (SMT) resistor                                 | IRC                                 | LR2010-01-R025-F                                                                        |
| R2          | 0.020 Ω , 1% (SMT) resistor                                 | IRC                                 | LR2010-01-R020-F                                                                        |
| L2          | Transformer (these two have different sizes and pinouts)    | Coiltronics Transpower Technologies | CTX03-12067-1 TTI5870                                                                   |
| L2          | Transformer (for 5.5V, 200kHz operation)                    | Coiltronics                         | CTX03-12062-1                                                                           |
| L2          | Custom Transformer: Core Set Bobbin Clamp Primary Secondary | TDK TDK TDK                         | PC40EEM12.7/13.7-A160 BEM12.7/13.7-118G FEM12.7/13.7-A 8 turns #24 AWG 18 turns #26 AWG |

18

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Bypass Capacitors

## Input Filter Capacitors (C1, C13)

Use at least 3µF/W of output power for the input filter capacitors, C1 and C13.  They should have less than 150m Ω ESR, and should be located no further than 10mm from N1 and N2 to prevent ringing.  Connect the negative terminals directly to PGND.  Do not exceed the surge current ratings of input bypass capacitors.

## VPP and VDD Bypass Capacitors (C10, C11, C12)

Use 2.2µF for VDD, and 1µF for VPPA and VPPB.

## Triple-Output Power-Supply Controller for Notebook Computers

Table 4.  Surface-Mount Components

| Company                                                                                      | Factory FAX [country code]                                                                                                                                                                 | USA Phone                                                                                                                                             |
|----------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| Central Semi Coiltronics IRC Murata-Erie Nihon Siliconix Sprague Sumida TDK Transpower Tech. | [ 1] (516) 435-1824 [ 1] (407) 241-9339 [ 1] (213) 772-9028 [ 1] 404 736-3030 [81] 3-3494-7414 [ 1] (408) 727-5414 [ 1] (603) 224-1430 [81] 3-3607-5144 [81] 3-3278-5358 [ 1] 702 831-3521 | (516) 435-1110 (407) 241-7876 (512) 992-7900 (404) 736-1300 (805) 867-2555 (408) 988-8000 (603) 224-1961 (708) 956-0666 (708) 803-6100 (702) 831-0140 |

## \_\_\_\_\_\_\_\_\_\_Applications Information

## Efficiency Considerations

Achieving outstanding efficiency over a wide range of loads is a result of balanced design rather than bruteforce overkill,  particularly  with  regard  to  selecting  the power MOSFETs.  Generally, the best approach is to design for two loading conditions, light load and heavy load (corresponding to suspend and run modes in the host computer), at some nominal battery voltage (such as 1.2V/cell for NiCd or NiMH).  Efficiency improves as the input voltage is reduced, as long as the high-side switch saturation voltage is low relative to the input voltage.  If there is a choice, use the lowest-voltage battery pack possible, but with at least six cells.

## Heavy-Load Efficiency

Losses due to parasitic resistances in the switches, coil,  and  sense  resistor  dominate  at  high  load-current levels.  Under heavy loads, the MAX782 operates in the continuous-conduction mode, where there is a large DC offset to the inductor current plus a small sawtooth AC component (see the +3.3V Inductor section).  This DC current is exactly equal to the load current - a fact that makes it easy to estimate resistive losses through the assumption that total inductor current is equal to this DC offset current.

The major loss mechanisms under heavy loads are, in usual order of importance:

- l I 2 R losses
- l gate-charge losses
- l diode-conduction losses
- l transition losses
- l capacitor-ESR losses
- l losses due to the operating supply current of the IC.

Inductor core losses are fairly low at heavy loads because the inductor current's AC component is small. Therefore, they are not accounted for in this analysis.

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

where RCOIL is the DC resistance of the coil, r DS(ON) is the  drain-source  on  resistance  of  the  MOSFET,  and RCS is the current-sense resistor value.  Note that the r DS(ON) term assumes that identical MOSFETs are employed for both the synchronous rectifier and highside switch, because they time-share the inductor current.  If the MOSFETs are not identical, losses can be estimated by averaging the two individual rDS(ON) terms according to duty factor.

<!-- formula-not-decoded -->

where VL is the MAX782's logic supply voltage (nominally  5V)  and  q G is  sum  of  the  gate  charge  for  lowside and high-side switches.  Note that gate charge losses are dissipated in the IC, not the MOSFETs, and therefore contribute to package temperature rise. For  matched MOSFETs, qG is  simply  twice  the  gate charge of a single MOSFET (a data sheet specification).  If the +5V buck SMPS is turned off, replace VL in this equation with V IN .

PDIODE = diode conduction losses = I LOAD x V D x t D x f where tD is  the  diode's  conduction time (typically 110ns), V D is the forward voltage of the Schottky diode, and f is the switching frequency.

<!-- formula-not-decoded -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

where CRSS is the reverse transfer capacitance of the high-side MOSFET (a data sheet parameter), f is the switching frequency, and IDRIVE is  the  peak  current available from the MAX782's large high-side gate driver  outputs  (DH5  or  DH3,  approximately  1A). Additional  switching  losses  are  introduced  by  other sources of stray  capacitance  at  the  switching  node, including the catch diode capacitance, coil interwinding  capacitance,  and  low-side  switch-drain  capacitance.  They are given as PDSW = VIN 2 x CSTRAY x f, but  are  usually  negligible  compared  to  C RSS losses. The low-side switch introduces only tiny switching losses,  since  its  drain-source  voltage  is  already  low when it turns on.

<!-- formula-not-decoded -->

and,

<!-- formula-not-decoded -->

where ESR is the equivalent series resistance of the input bypass capacitor.  Note that losses in the output filter  capacitors  are  small  when  the  circuit  is  heavily loaded, because the current into the capacitor is not chopped.  The output capacitor sees only the small AC sawtooth ripple current.  Ensure that the input bypass capacitor has a ripple current rating that exceeds the value of I RMS .

PDIC is the IC's quiescent power dissipation and is a data sheet parameter (6mW typically for the entire IC at V IN = 15V).  This power dissipation is almost completely independent of supply voltage whenever the +5V step-down switch-mode power supply is on, since power to the chip is  bootstrapped from the +5V output.  When calculating the efficiency of each individual buck controller, use 3mW for  PD IC ,  since  each  controller  consumes approximately half of the total quiescent supply current.

Example:  +5V buck SMPS at 300kHz, VIN = 15V, ILOAD = 2A, RCS = RCOIL = ESR = 25m Ω , both transistors are Si9410DY with r DS(ON) = 0.05 Ω , C RSS = 160pF, and qG = 30nC.

<!-- formula-not-decoded -->

Efficiency = 10W/(10W + 573mW) x 100% = 94.6% (actual measured value = 94%).

## Light-Load Efficiency

Under light loads, the PWMs operate in the discontinuous-conduction mode, where the inductor current discharges to zero at some point during each switching cycle.  New loss mechanisms, insignificant at heavy loads, start to become important.  The basic difference is  that,  in  discontinuous  mode,  the  inductor  current's AC component is large compared to the load current. This increases core losses and losses in the output filter  capacitors.    Ferrite  cores  are  recommended over powdered toroid types for best light-load efficiency.

At  light  loads,  the  inductor  delivers  triangular  current pulses rather than the nearly constant current found in continuous mode.  These pulses ramp up to a point set by the idle-mode current comparator, which is internally fixed at approximately 25% of the full-scale current-limit level.    This  25%  threshold  provides  an  optimum balance between low-current efficiency and output voltage noise (the efficiency curve would actually look better if this  threshold  were  set  at  about  45%,  but  the  output noise would then be too high).

Reducing I 2 R losses though the brute-force method of specifying huge, low-rDS(ON) MOSFETs can result in atrocious efficiency, especially at mid-range and lightload conditions.  Even at heavy loads, the gate charge losses introduced by huge 50A MOSFETs usually more than offset any gain obtained through lower r DS(ON) .

## Layout and Grounding

Good layout is necessary to achieve the designed output power, high efficiency, and low noise.  Good layout includes use of a ground plane, appropriate component placement, and correct routing of traces using appropriate trace widths.  The following points are in order of importance:

1. A ground plane is essential for optimum performance. In most applications, the power supply is located on a multilayer motherboard, and full use of the four or more copper layers is recommended.  Use the top and bottom layers for interconnections, and the inner layers for an uninterrupted ground plane.
2. Keep the Kelvin-connected current-sense traces short, close together, and away from switching nodes.  See Figure 5.
3. Place the LX node components N1, N3, D3, and L1 as close together as possible. This reduces resistive and switching losses and keeps noise due to ground inductance confined. Do the same with the other LX node components N2, N4, D4, and L2.
4. The input filter capacitor C1 should be less than 10mm away from N1's drain.  The connecting copper trace carries large currents and must be at least 2mm wide, preferably 5mm.

Similarly,  place  C13  close  to  N2's  drain,  and  connect them with a wide trace.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Triple-Output Power-Supply Controller for Notebook Computers

5. Keep the gate connections to the MOSFETs short for low inductance (less than 20mm long and more than 0.5mm wide) to ensure clean switching.
6. To achieve good shielding, it is best to keep all high-voltage switching signals (MOSFET gate drives DH3 and DH5, BST3 and BST5, and the two LX nodes) on one side of the board and all sensitive nodes (CS3, CS5, FB3, FB5 and REF) on the other side.
7. Connect the GND and PGND pins directly to the ground plane, which should ideally be an inner layer of a multilayer board.
8. Connect the bypass capacitor C2 very close (less than 10mm) to the VL pin.
9. Minimize the capacitance at the transformer secondary.  Place D5 and C12 very close to each other and to the secondary, then route the output to the IC's VDD pin with a short trace.  Bypass with 0.1µF close to the VDD pin if this trace is longer than 50mm.

The layout for the evaluation board is shown in the Evaluation Kit section.  It  provides an effective, lownoise, high-efficiency example.

Power-Ready and Power Sequencing A 'power-ready' signal can be generated from one of the comparator outputs by connecting one of the supplies  (e.g.,  the  +5V  output  -  see  Figure  6)  through  a high-resistance voltage divider to the comparator input. The threshold for the +5V-output comparator is set by R1 and R2 according to the formula:  V TH = 1.65V x (R1 + R2) / R2.  For example, choosing R1 = 1M Ω and R2 = 604k Ω sets the nominal threshold to 4.38V.

If  the  power-ready  signal  is  required  to  indicate  when both the +3.3V and the +5V supplies have come up, use the MAX707 supervisory circuit shown in Figure 7. The threshold for the +3.3V-line comparator is set by R1 and R2 according to the formula:  V TH = 1.25V x (R1 + R2) / R2.  For example, choosing R1 = 1.2M Ω and R2 = 1M Ω sets the nominal threshold to 2.75V.  The threshold for  the  +5V  supply is  preset  inside  the  MAX707, and is typically 4.65V.  The reset outputs remain asserted while either supply line is below its threshold, and for at least 140ms after both lines are fully up.

If sequencing of the +3.3V and +5V supplies is critical, several approaches are possible.  For example, the SS3 and SS5 capacitors can be sized to ensure that the two supplies come up in the desired order.  This technique requires that the SS capacitors be selected specifically  for  each  individual  situation,  because  the loading on each supply affects its power-up speed.

<!-- image -->

Figure 6.  Power-Ready Signal for the +5V Supply

<!-- image -->

Figure 7.  Power-Ready Signal Covers Both +3.3V and +5V Supplies with External Voltage Monitor IC (MAX707)

<!-- image -->

Another approach uses the 'power-ready' comparator output signal (see Figure 6) from one supply as a control input to the ON\_ pin of the other supply.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

Figure 8.  Power-Up Sequencing for the Intel 486SL

<!-- image -->

Figure 8 shows a more complex example of power sequencing. On power-up, the Intel 486SL computer requires the +5V supply to come up before the +3.3V supply.  A power-ready signal is required ‡ 50ms later. This circuit's  ON3 output connects to the MAX782's ON3 pin, and can be wire-OR connected with an opendrain output to enable another circuit to turn the +3.3V supply off.

PCMCIA Slot +3.3V/+5V VCC Switching The MAX782 contains level shifters that simplify driving external power MOSFETs to switch PCMCIA card VCC to 3.3V and 5V.  While a PCMCIA card is being inserted into the socket, the VCC pins on the card edge should be powered down to 0V so 'hot insertion' does not damage the PCMCIA card.  The simplest way to do this is to use a mechanical switch that has to be physically opened before the PCMCIA card can be inserted.  The switch, which disconnects VCC, can be closed only when the card has been fitted snugly into its socket. Figure 9's circuit illustrates this approach and correctly shows the connections to both MOSFETs:  N2 appears to  be  inserted  with  drain  and  source  the  wrong  way around, but this is necessary to prevent its body diode from pulling the +3.3V supply up to 5V when VCC is connected to the +5V supply.

Figure 9.  Simple Switching for PCMCIA Slot VCC

<!-- image -->

Figure 10. Using the Level Shifters to Switch PCMCIA Slot VCC

<!-- image -->

Figure 10's circuit provides an alternative method of connecting the VCC supply to the PCMCIA slot.  While it avoids using a mechanical switch, it does not provide the security of a physical interlock.  Placing the two MOSFETs N1 and N2 with their body diodes facing in opposite directions allows VCC to be shut down to 0V without using a mechanical switch, and allows VCC to be driven to 5V without the +3.3V supply being pulled up to 5V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

## Table 5.  Components for Low-Voltage Operation

(Circuit of Figure 1, f = 200kHz, V IN Range = 5.5V to 12V)

| Transformer L2:       | Coiltronics CTX03-12062 (low-leakage inductance, 10µH primary)   |
|-----------------------|------------------------------------------------------------------|
| Filter Capacitor C6:  | 660µF                                                            |
| Sense Resistor:       | 25m Ω                                                            |
| Flyback Rectifier D2: | 1N5819 or equivalent Schottky diode                              |

The MAX782 has three comparators/level-shifters that can be used for this purpose, and two that are needed for each PCMCIA port.  Two transistors can be used as shown in Figure 11 to provide two additional TTL-input MOSFET gate drivers for a second PCMCIA slot.  The component values have been carefully chosen to provide smooth switching from 5V to 3.3V without make-beforebreak glitches, and without a break in the VCC supply.

## Low-Voltage (6-Cell) Operation

Low input voltages, such as the 6V end-of-life voltage of a 6-cell NiCd battery, place extra demands on the +5V buck regulator because of the very low input-output differential  voltage.  The standard application circuit works well with supply voltages down to 6.5V; at input voltages less than 6.5V, some component changes are needed (see Table 5), and the operating frequency must be set to 200kHz. The two main issues are load-transient response and load capability of the +15V VDD supply.

The +5V supply's load-transient response is impaired due to reduced inductor-current slew rate, which is in turn caused by reduced voltage applied across the buck inductor during the high-side switch-on time. So, the +5V output sags when hit with an abrupt load current change, unless the +5V filter capacitor value is increased. Note that only the capacitance is affected and ESR requirements don't change. Therefore, the added capacitance can be supplied by an additional low-cost bulk capacitor in parallel with the normal low-ESR switching-regulator capacitor. The equation for voltage sag under a step-load change follows:

<!-- formula-not-decoded -->

where DMAX is the maximum duty cycle. Higher duty cycles are possible when the oscillator frequency is reduced to 200kHz, due to fixed propagation delays through the PWM comparator becoming a lesser part of the whole period. The tested worst-case limit for DMAX is 92% at 200kHz. Lower inductance values can reduce the filter  capacitance requirement, but only at the expense of increased noise at high input voltages (due to higher peak currents).

Figure 11.  Using Discrete Circuitry to Switch PCMCIA 2.0 Slot VCC

<!-- image -->

The components shown in Table 5 allow the main +5V supply to deliver 2A from V IN = 5.5V, or alternatively allow the +15V supply to deliver 70mA while simultaneously providing +5V at 2A from VIN = 5.7V. Note: Components for +3.3V don't need to be changed.

The +15V supply's load capability is also affected by low input voltages, especially under heavy loads. When the +5V supply is heavily loaded, there simply isn't enough extra duty cycle left for the flyback winding controller to deliver energy to the secondary. VDD loadcurrent limitations are thus determined by the worstcase duty-cycle limits, and also by any parasitic resistance or inductance on the transformer secondary. These parasitics, most notably the transformer leakage inductance and the forward impedance of the +15V rectifier diode, limit the rate-of-rise of current in the secondary during the brief interval when primary current reverses and the transformer conducts in the forward mode. See the Typical Operating Characteristics. For low-voltage applications that require heavy +15V load currents (for  example, 6-cell circuits where +12V VPP must deliver 120mA or more), see the MAX783 data sheet. This device is similar to the MAX782 except the +15V flyback winding controller has been shifted from the +5V side to the +3.3V side.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

## Total Shutdown Circuits

When the +5V and +3.3V supplies are off, the complete MAX782 circuit consumes only about 70µA, plus any leakage through the off MOSFETs.  Some NiCd batteries  can  be  damaged if they are fully discharged and then left  for  long  periods  (months)  under  load.    Even 100µA can do damage if left long enough.

The complete power-supply system can be shut down by taking ON5 low, cutting the supply to the MAX782's V+ pin, while the bootstrapped +5V supply is turned off.    This  removes  the  supply  from  the  controller,  and turns off all the supplies.  In this condition, the current consumption drops to the level of the leakage currents in  the  off  transistors.    Switching  the  V+  supply  off  is easy because the V+ line draws very little power; switching the entire power input from the battery would be more difficult.

Figure 12 shows a logic interface for a momentary switch that toggles the whole system on and off.  The logic circuit runs from the battery supply, so the input voltage from the battery is limited to the normal operating range for the flip-flop gates, which is usually 18V for 4000-series CMOS circuits.  The active-high OFF input permits the supplies to be turned off under logic control as well as when the switch is pushed.  If this logic input is not required, omit R1 and Q1.  The supplies can only be turned on using the hardware switch.  For automatic turn-off,  connect the OFF input to a battery-voltage sensing comparator or to a timer powered from VL. Ensure that any signal connected to OFF does not glitch high at power-up.

## Generating Additional VPP Outputs Using External Linear Regulators

Figure 13 shows a low-dropout linear regulator designed to provide an additional VPP output from the VDD line.  It can be turned off with a logic-level signal; its  output  can  be  switched  to  5V  or  12V;  and  it  provides excellent rejection  of  the  high-frequency  noise on VDD.  If a monolithic linear regulator is used, choose one having good PSRR performance at 300kHz.

Figure 12.  Hardware/Software Total Shutdown Circuit

<!-- image -->

Figure 13.  External Regulator For Additional VPP Outputs

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Triple-Output Power-Supply Controller for Notebook Computers

## \_\_\_\_\_\_\_\_Evaluation Kit Information

The MAX782 evaluation kit (EV kit) is an assembled, surface-mount demonstration board.  The kit embodies the standard application circuit and uses dip switches to  control  the  3V,  5V,  and  VPP  outputs.    The  board accepts battery input voltages between 6.5V and 30V, and provides up to 30W of output power.  All functions are controlled by standard CMOS/TTL logic levels.

## \_\_\_\_\_\_\_\_\_\_\_Ev Kit Quick Reference

To set up the EV kit, use the following procedure:

1. Connect a power supply to the BATT IN terminals. The supply voltage should be between 6.5V and 30V. Input current may be several amps, depending on the input voltage and the output power demanded.
2. Turn on the +5V output by setting the ON5 dip switch to ON.   The 5V OUT edge pad now supplies +5V at up to 3A, and +15V is now available at the +15V OUT edge pad.
3. Turn on the +3.3V output by setting the ON3 dip switch to ON.   The 3.3V OUT edge pad now supplies +3.3V at up to 3A.  The two regulators may be operated independently.
4. To use the VPPA/VPPB programmable voltage outputs, ON5 must be enabled.  Set the four-circuit dip switch to the desired code and measure the output at the VPPA and VPPB edge pads.  DA0 and DA1 control VPPA's state; DB0 and DB1 control VPPB's state.

## \_\_\_\_\_\_\_Ev Kit Detailed Description

Battery Input When active, outputs Q1-Q3 pull up to VH.  Resistor R16, located on the back of the board, pulls the highside driver voltage VH up to +15V.  By removing R16 and installing a resistor at the empty R15 site, VH may be tied to the +3.3V output.  Alternately, both R15 and R16 may be omitted and the user may supply an arbitrary voltage between 3V and 20V at the VH edge pad. Note that Q1-Q3 are not meant to drive high-current loads directly.

The D1-D3 comparators can be used as precision voltage detectors by installing resistor dividers at each input (R11/R12, R10/R13, R9/R14).

## Power-Supply Controls

ON3 - Enable 3.3V power supply

ON5 - Enable 5.0V power supply

SYNC - Switch-mode power-supply frequency input (optional)

## VPP Voltage Outputs

The PCMCIA-compatible programmable voltage outputs are controlled by the DA0, DA1, DB0, and DB1 logic-level inputs.   The MAX782 provides industrystandard Intel 82365-comptaible VPPA/VPPB PCMCIA controls (see Pin Description). The four-circuit dip switch connects the same way as the edge pads. From left to right, switch 1 controls DA1, switch 2 controls DA0, switch 3 controls DB1, and switch 4 controls DB0.  VPPA and VPPB are capable of supplying 60mA each.

BATT IN - Battery input, 6.5V to 30V

GND - Ground

The battery input voltage should be between 6.5V and 30V.  The input voltage upper limit is set by the voltage rating of the input bypass capacitors, C1 and C13, and may not exceed the MAX782's 30V maximum rating. Higher input voltages generally require physically larger input capacitors.

Low-Battery Detection Comparators To demonstrate the level shifters / high-side drivers, ON5 must be enabled so the +15V (VDD) is available to  pull  up  the  Q1-Q3  outputs.    Measure  the  high-side driver  supply at the VH edge pad.  Logic-level edge pads D1-D3 control the outputs Q1-Q3.  Q1-Q3 pull up to VH whenever the corresponding input D1-D3 is at a logic-high level.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Triple-Output Power-Supply Controller for Notebook Computers

<!-- image -->

26

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

Figure 15.  MAX782 EV Kit Top Component Layout and Silk Screen, Top View

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

<!-- image -->

Figure 16.  MAX782 EV Kit Ground Plane (Layers 2 and 3), Top View

## 28 \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

Figure 17.  MAX782 EV Kit Top Layer (Layer 1), Top View

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

.

<!-- image -->

Figure 18.  MAX782 EV Kit, Bottom Component Layout and Silk Screen, Bottom View

30

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Triple-Output Power-Supply Controller for Notebook Computers

Figure 19.  MAX782 EV Kit Bottom Layer (Layer 4), Top View

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX782

## Triple-Output Power-Supply Controller for Notebook Computers

<!-- image -->

TRANSISTOR COUNT:  1569 SUBSTRATE CONNECTED TO GND

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Package Information

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

32

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 (408) 737-7600

\_Ordering Information (continued)

| PART       | TEMP. RANGE    | PIN-PACKAGE   | V OUT   |
|------------|----------------|---------------|---------|
| MAX782C/D  | 0°C to +70°C   | Dice*         | -       |
| MAX782EBX  | -40°C to +85°C | 36 SSOP       | 3.3V    |
| MAX782REBX | -40°C to +85°C | 36 SSOP       | 3.45V   |
| MAX782SEBX | -40°C to +85°C | 36 SSOP       | 3.6V    |

| EV KIT         | TEMP. RANGE   | BOARD TYPE    |
|----------------|---------------|---------------|
| MAX782EVKIT-SO | 0°C to +70°C  | Surface Mount |