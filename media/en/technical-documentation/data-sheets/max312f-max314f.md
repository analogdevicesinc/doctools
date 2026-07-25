<!-- lastmod 2022-08-05 -->
Communications Systems

Signal Routing

Test Equipment

Data Acquisition

Industrial and Process Control Systems

Avionics

Redundant/Backup Systems

ATE

Hot Swap

Rail-to-Rail is a registered trademark of Nippon Motorola, Ltd.

Functional Diagram appears at end of data sheet.

Pin Configurations continued at end of data sheet.

<!-- image -->

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## General Description

The MAX312F/MAX313F/MAX314F are quad, singlepole/single-throw (SPST), fault-protected analog switches. They are pin compatible with the industry-standard nonprotected MAX312/MAX313/MAX314. These switches feature fault-protected inputs and Rail-to-Rail  signalhandling capability. All analog signal terminals are protected from overvoltage faults up to ±36V with power on and up to ±40V with power off. During a fault condition, the COM\_, NO\_, or NC\_ terminal becomes an open circuit and only microamperes of leakage current flow from the source. On-resistance is 10 Ω (max) and is matched between switches to 0.5 Ω (max) at +25°C.

The MAX312F has four normally closed (NC) switches. The MAX313F has four normally open (NO) switches. The MAX314F has two NC and two NO switches. These CMOS switches operate with dual power supplies ranging from ±4.5V to ±20V or a single supply between +9V and +36V. All digital inputs have +0.8V and +2.4V logic thresholds, ensuring both TTL and CMOS logic compatibility when using ±15V or a single +12V supply.

For supply voltages of ±5V, +5V, and +3V, refer to the MAX4711/MAX4712/MAX4713 data sheet.

## Applications

## Features

- ♦ No Power-Supply Sequencing Required
- ♦ Rail-to-Rail Signal Handling
- ♦ All Switches Off with Power Off
- ♦ All Switches Off when V+ is Off and V- is On
- ♦ ±40V Fault Protection with Power Off
- ♦ ±36V Fault Protection with ±15V Supplies
- ♦ Control Line Fault Protection from V- - 0.3V to V- + 40V
- ♦ Pin Compatible with Industry-Standard DG411/DG412/DG413
- ♦ 600ns (typ) Fault Response Time
- ♦ 10 Ω (max) RON with ±15V Supplies
- ♦ ±4.5V to ±20V Dual Supplies
- ♦ +9V to +36V Single Supply
- ♦ TTL- and CMOS-Compatible Logic Inputs with ±15V or Single +9V to +15V Supplies

## Ordering Information

| PART        | TEMP RANGE     | PIN-PACKAGE    |
|-------------|----------------|----------------|
| MAX312F ESE | -40°C to +85°C | 16 SO          |
| MAX312FEPE  | -40°C to +85°C | 16 Plastic DIP |

Ordering Information continued at end of data sheet.

## Pin Configurations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## ABSOLUTE MAXIMUM RATINGS

| (Voltages Referenced to GND.)                                                                |                                                                                           |
|----------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| V+...........................................................................-0.3V           | to +44V                                                                                   |
| V-                                                                                           | ............................................................................-44V to +0.3V |
| V+ to V-...................................................................-0.3V             | to +44V                                                                                   |
| IN_ .........................................................                                | (V- - 0.3V) to (V- + 40V)                                                                 |
| NO_, NC_ to COM_ (Note 1) ..................................                                 | -40V to +40V                                                                              |
| COM_, NO_, NC_ Voltage with Power On (Note 1)..............................................  | -36V to +36V                                                                              |
| COM_, NO_, NC_ Voltage with Power Off (Note 1).............................................. | -40V to +40V                                                                              |
| Peak Current COM_, NO_, NC_ (pulsed at 1ms, 10% duty cycle)                                  | ................................ ± 300mA                                                  |

Continuous Current (any other terminal)..........................

±

30mA

Continuous Current (COM\_, NO\_, NC\_).........................±100mA

Continuous Power Dissipation (TA = +70°C)

16-Pin SO (derate 8.7mW/°C above +70°C)................696mW

16-Pin Plastic DIP (derate 10.53mW/°C

above +70°C)  ........................................................ 842mW

Operating Temperature Range .......................... -40°C to +85°C

Junction Temperature .................................................... +150°C

Storage Temperature Range ........................... -65°C to +160°C

Lead Temperature (soldering, 10s)  ............................... +300°C

Note 1: COM\_, NO\_, and NC\_ pins are fault protected. Signals on COM\_, NO\_, and NC\_ exceeding -36V to +36V may damage the device during power-on conditions. When the power is off, the maximum range is -40V to +40V.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS-± 15V Dual Supplies

(V+ = +15V, V- = -15V, VIH = +2.4V, VIL = +0.8V, GND = 0V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25 ° C.) (Notes 2, 3)

| PARAMETER                                     | SYMBOL                  | CONDITIONS                                        | T A   | MIN   |   TYP | MAX   | UNITS   |
|-----------------------------------------------|-------------------------|---------------------------------------------------|-------|-------|-------|-------|---------|
| ANALOG SWITCH                                 |                         |                                                   |       |       |       |       |         |
| Fault-Free Analog Signal Range                | V COM_ , V NO_ , V      | NC_                                               | E     | V-    |       | V+    | V       |
| On-Resistance                                 | R ON                    | I COM_ = 10mA; V NO_ , V NC_ = ± 10V              | +25°C |       |     8 | 10    | Ω       |
|                                               | R ON                    | I COM_ = 10mA; V NO_ , V NC_ = ± 10V              | E     |       |       | 13    | Ω       |
| On-Resistance Match Between Channels (Note 4) | ∆ R ON                  | I COM_ = 10mA; V NO_ , V NC_ = ± 10V              | +25°C |       |  0.05 | 0.5   | Ω       |
| On-Resistance Match Between Channels (Note 4) | ∆ R ON                  | I COM_ = 10mA; V NO_ , V NC_ = ± 10V              | E     |       |       | 0.75  | Ω       |
| On-Resistance Flatness (Note 5)               | R FLAT(ON)              | I COM_ = 10mA; V NO_ , V NC_ = ± 5V, 0V           | +25°C |       |  0.25 | 1     | Ω       |
| On-Resistance Flatness (Note 5)               | R FLAT(ON)              | I COM_ = 10mA; V NO_ , V NC_ = ± 5V, 0V           | E     |       |       | 1.25  | Ω       |
| NO_, NC_ Off-Leakage Current (Note 6)         | I NO_(OFF) , I NC_(OFF) | V COM_ = ± 10V; V NO_ , V NC_ = ± 10V             | +25°C | -1    |       | +1    | nA      |
| NO_, NC_ Off-Leakage Current (Note 6)         | I NO_(OFF) , I NC_(OFF) | V COM_ = ± 10V; V NO_ , V NC_ = ± 10V             | E     | -60   |       | +60   | nA      |
| COM_ Off-Leakage Current (Note 6)             | I COM_(OFF)             | V COM_ = ± 10V; V NO_ , V NC_ = ± 10V             | +25°C | -1    |       | +1    | nA      |
| COM_ Off-Leakage Current (Note 6)             | I COM_(OFF)             | V COM_ = ± 10V; V NO_ , V NC_ = ± 10V             | E     | -60   |       | +60   | nA      |
| COM_ On-Leakage Current (Note 6)              | I COM_(ON)              | V COM_ = ± 10V; V NO_ , V NC_ = ± 10V or floating | +25°C | -2    |       | +2    | nA      |
| COM_ On-Leakage Current (Note 6)              | I COM_(ON)              | V COM_ = ± 10V; V NO_ , V NC_ = ± 10V or floating | E     | -60   |       | +60   | nA      |
| FAULT                                         |                         |                                                   |       |       |       |       |         |
| Fault-Protected Analog Signal Range           | V COM_ , V NO_, V NC_   | V+ = +15V, V- = -15V                              | E     | -36   |       | +36   | V       |
| Fault-Protected Analog Signal Range           | V COM_ , V NO_, V NC_   | V+ = 0V, V- = -15V                                | E     | -36   |       | +36   | V       |
| Fault-Protected Analog Signal Range           | V COM_ , V NO_, V NC_   | V+ = V- = 0V                                      | E     | -40   |       | +40   | V       |
| NO_ or NC_ Off-Leakage Current (Note 6)       | I NO_(OFF) , I NC_(OFF) | V NO_ , V NC_ = ± 36V; V+ = +15V, 0V; V- = -15V   | +25°C | -1    |       | +1    | µA      |
| NO_ or NC_ Off-Leakage Current (Note 6)       | I NO_(OFF) , I NC_(OFF) | V NO_ , V NC_ = ± 36V; V+ = +15V, 0V; V- = -15V   | E     | -10   |       | +10   | µA      |
| COM_ Off-Leakage Current (Note 6)             | I COM_(OFF)             | V COM_ = ± 36V; V+ = +15V, 0V; V- = -15V          | +25°C | -1    |       | +1    | µA      |
| COM_ Off-Leakage Current (Note 6)             | I COM_(OFF)             | V COM_ = ± 36V; V+ = +15V, 0V; V- = -15V          | E     | -10   |       | +10   | µA      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## ELECTRICAL CHARACTERISTICS-± 15V Dual Supplies (continued)

(V+ = +15V, V- = -15V, VIH = +2.4V, VIL = +0.8V, GND = 0V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25 ° C.) (Notes 2, 3)

| PARAMETER                                            | SYMBOL        | CONDITIONS                                                | T A   | MIN      |   TYP | MAX      | UNITS   |
|------------------------------------------------------|---------------|-----------------------------------------------------------|-------|----------|-------|----------|---------|
| NO_ or NC_ Leakage Current (Note 6)                  | I NO_ , I NC_ | V NO_ , V NC_ = ± 40V; V+ = V- = 0V                       | +25°C | -1       |       | +1       | µA      |
| NO_ or NC_ Leakage Current (Note 6)                  | I NO_ , I NC_ | V NO_ , V NC_ = ± 40V; V+ = V- = 0V                       | E     | -10      |       | +10      | µA      |
| COM_ Leakage Current                                 | I COM_        | V COM_ = ± 40V; V+ = V- = 0V                              | +25°C | -1       |       | +1       | µA      |
| (Note 6)                                             | I COM_        | V COM_ = ± 40V; V+ = V- = 0V                              | E     | -10      |       | +10      |         |
| Fault-Trip Threshold                                 |               |                                                           | E     | V- - 0.4 |       | V+ + 0.4 | V       |
| ± Fault Response Time                                | t RES         | V NO_ , V NC_ = ± 36V; R L = 300 Ω                        | E     |          |   600 |          | ns      |
| ± Fault Recovery Time                                | t REC         | V NO_ , V NC_ = ± 36V; R L = 300 Ω                        | E     |          |     1 |          | µs      |
| SWITCH DYNAMICS                                      |               |                                                           |       |          |       |          |         |
| Turn-On Time                                         | t ON          | V NO_ or V NC_ = ± 10V, R L = 300 Ω , CL = 35pF, Figure 2 | +25°C |          |   115 | 225      | ns      |
| Turn-On Time                                         | t ON          | V NO_ or V NC_ = ± 10V, R L = 300 Ω , CL = 35pF, Figure 2 | E     |          |       | 275      | ns      |
| Turn-Off Time                                        | t OFF         | V NO_ or V NC_ = ± 10V, R L = 300 Ω , CL = 35pF, Figure 2 | +25°C |          |    70 | 185      | ns      |
| Turn-Off Time                                        | t OFF         | V NO_ or V NC_ = ± 10V, R L = 300 Ω , CL = 35pF, Figure 2 | E     |          |       | 235      | ns      |
| Break-Before-Make Time Delay (MAX314F Only) (Note 7) | t BBM         | V NO_ or V NC_ = ± 10V, R L = 100 Ω , CL = 10pF, Figure 3 | +25°C | 5        |    45 |          | ns      |
| Break-Before-Make Time Delay (MAX314F Only) (Note 7) | t BBM         | V NO_ or V NC_ = ± 10V, R L = 100 Ω , CL = 10pF, Figure 3 | E     | 2        |       |          | ns      |
| Charge Injection                                     | Q             | V GEN = 0V, R GEN = 0 Ω , CL = 1nF, Figure 4              | +25°C |          |    70 |          | pC      |
| NO_ or NC_ Off-Capacitance                           | CN_(OFF)      | f = 1MHz, Figure 5                                        | +25°C |          |    20 |          | pF      |
| COM_ Off-Capacitance                                 | CCOM_(OFF)    | f = 1MHz, Figure 5                                        | +25°C |          |    20 |          | pF      |
| COM_ On-Capacitance                                  | CCOM_(ON)     | f = 1MHz, Figure 5                                        | +25°C |          |    43 |          | pF      |
| Off-Isolation (Note 8)                               | V ISO         | f = 1MHz, R L = 50 Ω , CL = 15pF, P IN = 0dBm, Figure 6   | +25°C |          |   -55 |          | dB      |
| Channel-to-Channel Crosstalk (Note 9)                | V CT          | f = 1MHz, R L = 50 Ω , CL = 15pF, P IN = 0dBm, Figure 6   | +25°C |          |  -104 |          | dB      |
| LOGIC INPUT                                          |               |                                                           |       |          |       |          |         |
| Input Logic High                                     | V IH          |                                                           | E     | 2.4      |       |          | V       |
| Input Logic Low                                      | V IL          |                                                           | E     |          |       | 0.8      | V       |
| Input Leakage Current                                | I IN          | V IN_ = 0V or V+                                          | E     | -1       |       | +1       | µA      |
| POWER SUPPLY                                         |               |                                                           |       |          |       |          |         |
| Power-Supply Range                                   | V+, V-        |                                                           | E     | ± 4.5    |       | ± 20     | V       |
| V+ Supply Current                                    | I+            | All V IN_ = +5V, V COM_ = 0V                              | +25°C | 340      |       | 500      | µA      |
| V+ Supply Current                                    | I+            | All V IN_ = +5V, V COM_ = 0V                              | E     |          |       | 700      | µA      |
| V+ Supply Current                                    | I+            | All V IN_ = 0V or V+, V COM_ = 0V                         | +25°C |          |   140 | 250      | µA      |
| V+ Supply Current                                    | I+            | All V IN_ = 0V or V+, V COM_ = 0V                         | E     |          |       | 350      | µA      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## ELECTRICAL CHARACTERISTICS-± 15V Dual Supplies (continued)

(V+ = +15V, V- = -15V, VIH = +2.4V, VIL = +0.8V, GND = 0V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25 ° C.) (Notes 2, 3)

| PARAMETER          | SYMBOL   | CONDITIONS                        | T A   |   TYP |   MAX | UNITS   |
|--------------------|----------|-----------------------------------|-------|-------|-------|---------|
| V- Supply Current  | I-       | All V IN_ = +5V, V COM_ = 0V      | +25°C |   140 |   200 | µA      |
| V- Supply Current  | I-       | All V IN_ = +5V, V COM_ = 0V      | E     |       |   300 | µA      |
| V- Supply Current  | I-       | All V IN_ = 0V or V+, V COM_ = 0V | +25°C |   140 |   250 | µA      |
| V- Supply Current  | I-       | All V IN_ = 0V or V+, V COM_ = 0V | E     |       |   350 | µA      |
| GND Supply Current | I GND    | All V IN_ = +5V, V COM_ = 0V      | +25°C |   200 |   300 | µA      |
| GND Supply Current | I GND    | All V IN_ = +5V, V COM_ = 0V      | E     |       |   400 | µA      |
| GND Supply Current | I GND    | All V IN_ = 0V or V+, V COM_ = 0V | +25°C |     0 |     1 | µA      |
| GND Supply Current | I GND    | All V IN_ = 0V or V+, V COM_ = 0V | E     |       |    10 | µA      |

## ELECTRICAL CHARACTERISTICS-Single +12V Supply

(V+ = +12V, V- = 0V, VIH = +2.4V, VIL = +0.8V, GND = 0V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25 ° C.) (Notes 2, 3)

| PARAMETER                                     | SYMBOL                  | CONDITIONS                                                 | T A           | MIN           | TYP           | MAX           | UNITS         |
|-----------------------------------------------|-------------------------|------------------------------------------------------------|---------------|---------------|---------------|---------------|---------------|
| ANALOG SWITCH                                 | ANALOG SWITCH           | ANALOG SWITCH                                              | ANALOG SWITCH | ANALOG SWITCH | ANALOG SWITCH | ANALOG SWITCH | ANALOG SWITCH |
| Fault-Free Analog Signal Range                | V COM_ , V NO_ , V NC_  |                                                            | E             | 0             |               | V+            | V             |
| On-Resistance                                 | R ON                    | I COM_ = 10mA; V NO_ , V NC_ = +10V                        | +25 ° C       |               | 16            | 25            | Ω             |
| On-Resistance                                 | R ON                    | I COM_ = 10mA; V NO_ , V NC_ = +10V                        | E             |               |               | 30            | Ω             |
| On-Resistance Match Between Channels (Note 4) | ∆ R ON                  | I COM_ = 10mA; V NO_ , V NC_ = +10V                        | +25 ° C       |               | 0.4           | 1.5           | Ω             |
| On-Resistance Match Between Channels (Note 4) | ∆ R ON                  | I COM_ = 10mA; V NO_ , V NC_ = +10V                        | E             |               |               | 2             | Ω             |
| On-Resistance Flatness                        | R FLAT(ON)              | I COM_ = 10mA; V NO_ , V NC_ = +2V, +6V, +10V              | +25 ° C       |               | 3             | 6             | Ω             |
| On-Resistance Flatness                        | R FLAT(ON)              | I COM_ = 10mA; V NO_ , V NC_ = +2V, +6V, +10V              | E             |               |               | 7             | Ω             |
| NO_, NC_ Off-Leakage Current (Note 6)         | I NO_(OFF) , I NC_(OFF) | V COM_ = +1V, +10V; V NO_ , V NC_ = +10V, +1V              | +25 ° C       | -1            |               | +1            | nA            |
| NO_, NC_ Off-Leakage Current (Note 6)         | I NO_(OFF) , I NC_(OFF) | V COM_ = +1V, +10V; V NO_ , V NC_ = +10V, +1V              | E             | -60           |               | +60           | nA            |
| COM_ Off-Leakage Current (Note 6)             | I COM_(OFF)             | V COM_ = +1V, +10V; V NO_ , V NC_ = +10V, +1V              | +25 ° C       | -1            |               | +1            | nA            |
| COM_ Off-Leakage Current (Note 6)             | I COM_(OFF)             | V COM_ = +1V, +10V; V NO_ , V NC_ = +10V, +1V              | E             | -60           |               | +60           | nA            |
| COM_ On-Leakage Current (Note 6)              | I COM_(ON)              | V COM_ = +1V, +10V; V NO_ , V NC_ = +1V, +10V, or floating | +25 ° C       | -2            |               | +2            | nA            |
| COM_ On-Leakage Current (Note 6)              | I COM_(ON)              | V COM_ = +1V, +10V; V NO_ , V NC_ = +1V, +10V, or floating | E             | -60           |               | +60           | nA            |
| FAULT                                         | FAULT                   | FAULT                                                      | FAULT         | FAULT         | FAULT         | FAULT         | FAULT         |
| Fault-Protected Analog Signal Range           | V COM_ , V NO_ , V NC_  | V+ = +12V, V- = 0V                                         | E             | -36           |               | +36           | V             |
| Fault-Protected Analog Signal Range           | V COM_ , V NO_ , V NC_  | V+ = V- = 0V                                               | E             | -40           |               | +40           | V             |
| NO_ or NC_ Off-Leakage Current (Note 6)       | I NO_(OFF) , I NC_(OFF) | V NO_ , V NC_ = ± 36V; V+ = +12V; V- = 0V                  | +25 ° C       | -1            |               | +1            | µA            |
| NO_ or NC_ Off-Leakage Current (Note 6)       | I NO_(OFF) , I NC_(OFF) | V NO_ , V NC_ = ± 36V; V+ = +12V; V- = 0V                  | E             | -10           |               | +10           | µA            |
| COM_ Off-Leakage Current (Note 6)             | I COM_(OFF)             | V NO_ , V NC_ = ± 36V; V+ = +12V; V- = 0V                  | +25 ° C       | -1            |               | +1            | µA            |
| COM_ Off-Leakage Current (Note 6)             | I COM_(OFF)             | V NO_ , V NC_ = ± 36V; V+ = +12V; V- = 0V                  | E             | -10           |               | +10           | µA            |
| NO_ or NC_ Leakage Current (Note 6)           | I NO_ , I NC_           | V+ = V- = 0V; V NO_ , V NC_ = ± 40V                        | +25 ° C       | -1            |               | +1            | µA            |
| NO_ or NC_ Leakage Current (Note 6)           | I NO_ , I NC_           | V+ = V- = 0V; V NO_ , V NC_ = ± 40V                        | E             | -10           |               | +10           | µA            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## ELECTRICAL CHARACTERISTICS-Single +12V Supply (continued)

(V+ = +12V, V- = 0V, VIH = +2.4V, VIL = +0.8V, GND = 0V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25 ° C.) (Notes 2, 3)

| PARAMETER                                            | SYMBOL          | CONDITIONS                                               | T A             | MIN             | TYP             | MAX             | UNITS           |
|------------------------------------------------------|-----------------|----------------------------------------------------------|-----------------|-----------------|-----------------|-----------------|-----------------|
| COM_ Leakage Current (Note 6)                        | I COM_          | V+ = V- = 0V; V NO_ , V NC_ = ± 40V                      | +25 ° C         | -1              |                 | +1              | µA              |
| COM_ Leakage Current (Note 6)                        | I COM_          | V+ = V- = 0V; V NO_ , V NC_ = ± 40V                      | E               | -10             |                 | +10             | µA              |
| Fault Response Time                                  | t RES           | V NO_ , V NC_ = +36V; R L = 300 Ω                        | E               |                 | 200             |                 | ns              |
| Fault Recovery Time                                  | t REC           | V NO_ , V NC_ = +36V; R L = 300 Ω                        | E               |                 | 1               |                 | µs              |
| SWITCH DYNAMICS                                      | SWITCH DYNAMICS | SWITCH DYNAMICS                                          | SWITCH DYNAMICS | SWITCH DYNAMICS | SWITCH DYNAMICS | SWITCH DYNAMICS | SWITCH DYNAMICS |
| Turn-On Time                                         | t ON            | V NO_ or V NC_ = +10V, R L = 300 Ω , CL = 35pF, Figure 2 | +25 ° C         |                 | 140             | 325             | ns              |
| Turn-On Time                                         | t ON            | V NO_ or V NC_ = +10V, R L = 300 Ω , CL = 35pF, Figure 2 | E               |                 |                 | 425             | ns              |
| Turn-Off Time                                        | t OFF           | V NO_ or V NC_ = +10V, R L = 300 Ω , CL = 35pF, Figure 2 | +25 ° C         |                 | 75              | 175             | ns              |
| Turn-Off Time                                        | t OFF           | V NO_ or V NC_ = +10V, R L = 300 Ω , CL = 35pF, Figure 2 | E               |                 |                 | 225             | ns              |
| Break-Before-Make Time Delay (MAX314F Only) (Note 6) | t BBM           | V NO_ or V NC_ = +10V, R L = 100 Ω , CL = 10pF, Figure 3 | +25 ° C         | 10              | 65              |                 | ns              |
| Break-Before-Make Time Delay (MAX314F Only) (Note 6) | t BBM           | V NO_ or V NC_ = +10V, R L = 100 Ω , CL = 10pF, Figure 3 | E               | 5               |                 |                 | ns              |
| Charge Injection                                     | Q               | V GEN = 0V, R GEN = 0 Ω , CL = 1nF, Figure 4             | +25 ° C         |                 | -10             |                 | pC              |
| LOGIC INPUT                                          | LOGIC INPUT     | LOGIC INPUT                                              | LOGIC INPUT     | LOGIC INPUT     | LOGIC INPUT     | LOGIC INPUT     | LOGIC INPUT     |
| Input Logic High                                     | V IH            |                                                          | E               | 2.4             |                 |                 | V               |
| Input Logic Low                                      | V IL            |                                                          | E               |                 |                 | 0.8             | V               |
| Input Leakage Current (Note 6)                       | I IN            | V IN_ = 0V or V+                                         | E               | -1              |                 | +1              | µA              |
| POWER SUPPLY                                         | POWER SUPPLY    | POWER SUPPLY                                             | POWER SUPPLY    | POWER SUPPLY    | POWER SUPPLY    | POWER SUPPLY    | POWER SUPPLY    |
| Power-Supply Range                                   | V+              |                                                          | E               | +9              |                 | +36             | V               |
| V+ Supply Current                                    | I+              | All V IN_ = +5V, V COM_ = +6V                            | +25 ° C         |                 | 160             | 300             | µA              |
| V+ Supply Current                                    | I+              | All V IN_ = +5V, V COM_ = +6V                            | E               |                 |                 | 400             | µA              |
| V+ Supply Current                                    | I+              | All V IN_ = 0V or V+, V COM_ = +6V                       | +25 ° C         |                 | 70              | 150             | µA              |
| V+ Supply Current                                    | I+              | All V IN_ = 0V or V+, V COM_ = +6V                       | E               |                 |                 | 250             | µA              |

Note 3: Electrical specifications at -40 ° C are guaranteed by design and not production tested.

Note 4: ∆ RON = RON(MAX) - RON(MIN).

Note 5: Flatness is defined as the difference between the maximum and minimum value of on-resistance over the specified analog signal range.

Note 6: Single-supply leakage parameters are guaranteed by testing with dual supplies at the maximum rated temperature.

Note 7: Guaranteed by design.

Note 8: Off-isolation = 20 log10 [VCOM/(VNC or VNO)], VNC or VNO = output, VCOM = input to off switch.

Note 9: Between any two switches.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

MAX312F/MAX313F/MAX314F

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## Typical Operating Characteristics

<!-- image -->

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## Typical Operating Characteristics (continued)

(TA = +25°C, unless otherwise noted.)

<!-- image -->

## MAX312F/MAX313F/MAX314F

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

Typical Operating Characteristics (continued)

(TA = +25°C, unless otherwise noted.)

<!-- image -->

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## Pin Description

| PIN          | PIN          | PIN          | NAME                   | FUNCTION                                                                                                          |
|--------------|--------------|--------------|------------------------|-------------------------------------------------------------------------------------------------------------------|
| MAX312F      | MAX313F      | MAX314F      | NAME                   | FUNCTION                                                                                                          |
| 1, 16, 9, 8  | 1, 16, 9, 8  | 1, 16, 9, 8  | IN1, IN2, IN3, IN4     | Logic-Control Digital Inputs                                                                                      |
| 2, 15, 10, 7 | 2, 15, 10, 7 | 2, 15, 10, 7 | COM1, COM2, COM3, COM4 | Analog Switch Common Terminals                                                                                    |
| 3, 14, 11, 6 | -            | -            | NC1, NC2, NC3, NC4     | Analog Switch Normally Closed Terminals                                                                           |
| -            | 3, 14, 11, 6 | -            | NO1, NO2, NO3, NO4     | Analog Switch Normally Open Terminals                                                                             |
| -            | -            | 3, 6         | NO1, NO4               | Analog Switch Normally Open Terminals                                                                             |
| -            | -            | 14, 11       | NC2, NC3               | Analog Switch Normally Closed Terminals                                                                           |
| 4            | 4            | 4            | V-                     | Negative-Supply Voltage Input. Connect to GND for single- supply operation. Bypass with a 0.1µF capacitor to GND. |
| 5            | 5            | 5            | GND                    | Ground. Connect to digital ground.                                                                                |
| 12           | 12           | 12           | N.C.                   | No Connection. Not internally connected.                                                                          |
| 13           | 13           | 13           | V+                     | Positive-Supply Voltage Input. Bypass with a 0.1µF capacitor to GND.                                              |

## Detailed Description

The MAX312F/MAX313F/MAX314F are fault-protected CMOS analog switches with unique operation and construction. These switches differ considerably from traditional fault-protection switches, with several advantages. First, they are constructed with two parallel FETs, allowing very low on-resistance when the switch is  on.  Second,  they  allow  signals  on  the  NO\_  or  NC\_ pins that are within, or slightly beyond, the supply rails to be passed through the switch to the COM\_ terminal (or vice versa), allowing true rail-to-rail signal operation. Third, the MAX312F/MAX313F/MAX314F have the same fault-protection  performance on any of the NO\_, NC\_, or  COM\_ switch inputs. Operation is identical for both fault  polarities.  The  fault  protection  extends  to ±36V from GND with ± 15V supplies.

During a fault condition, the particular overvoltage input (COM\_, NO\_, NC\_) pin becomes high impedance regardless of the switch state or load resistance. When power is removed, the fault protection is still in effect. In this case, the COM\_, NO\_, or NC\_ terminals are a virtual open circuit. The fault can be up to ±40V with power off.  The  switches turn off when V+ is not powered, regardless of V-.

## Pin Compatibility

These switches have identical pinouts to common nonfault-protected CMOS switches. They allow for carefree direct replacement in existing printed circuit boards since the NO\_, NC\_, and COM\_ pins of each switch are fault protected.

<!-- image -->

## Internal Construction

Internal construction is shown in Figure 1, with the analog signal paths shown in bold. A single NO switch is shown. The NC configuration is identical except the logic-level  translator  becomes an inverter. The analog switch is formed by the parallel combination of N-channel FET (N1) and P-channel FET (P1), which are driven on and off simultaneously according to the input fault condition and the logic-level state.

## Normal Operation

Two comparators continuously compare the voltage on the COM\_, NO\_, and NC\_ pins with V+ and V-. When the signal on COM\_, NO\_, or NC\_ is between V+ and V-, the switch acts normally, with FETs N1 and P1 turning on and off in response to IN\_ signals. The parallel combination of N1 and P1 forms a low-value resistor between NO\_ (or NC\_) and COM\_ so that signals pass equally well in either direction.

## Positive Fault Condition

When the signal on NO\_ (or NC\_) and COM\_ exceeds V+, the high-fault comparator output is high, turning off FETs N1 and P1. This makes the NO\_ (or NC\_) and COM\_ pins high impedance regardless of the switch

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

state. If the switch state is off, all FETs are turned off and both NO\_ (or NC\_) and COM\_ are high impedance.

## Negative Fault Condition

When the signal on NO\_ (or NC\_) and COM\_ exceeds V-, the low-fault comparator output is high, turning off FETs N1 and P1. This makes the NO\_ (or NC\_) and COM\_ pins high impedance regardless of the switch state. If the switch state is off, all FETs are turned off and both NO\_ (or NC\_) and COM\_ are high impedance.

## Transient Fault Response and Recovery

When a fast rise-time and fall-time transient on NO\_, NC\_, or COM\_ exceeds V+ or V-, the output follows the input to the supply rail with only a few nanoseconds delay. This delay is due to the switch on-resistance and circuit capacitance to ground. When the input transient returns to within the supply rails, however, there is a longer output recovery time delay. For positive faults, the recovery time is typically  1µs. For negative faults, the recovery time is typically 0.6µs. These values depend on the output resistance and capacitance, and are not production tested or guaranteed. The delays are not dependent on the fault amplitude. Higher load resistance and capacitance increase recovery times.

## Fault-Protection Voltage and Power Off

The maximum fault voltage on the NO\_ (or NC\_) and COM\_ pins is ±36V with power applied and ±40V with power off.

## Failure Modes

Exceeding the fault-protection voltage limits on NO\_, NC\_, or COM\_, even for very short periods, can cause the device to fail (see the Absolute Maximum Ratings ) . The failure modes may not be obvious, and failure in one switch may or may not affect other switches in the same package.

## Ground

There is no galvanic connection between the analog signal paths and GND. The analog signal paths consist of  an  N-channel and P-channel MOSFET with their sources and drains paralleled and their gates driven out of phase to V+ and V- by the logic-level translators. However, the potential of the analog signals must be defined or at least limited with respect to GND.

V+ and GND power the internal logic and logic-level translators and set the input logic thresholds. The logiclevel translators convert the logic levels to switched V+ and V- signals to drive the gates of the analog switches. This drive signal is the only connection between the power supplies and the analog signals.

## Bipolar Supplies

The MAX312F/MAX313F/MAX314F operate with bipolar supplies between ±4.5V and ±20V. The V+ and V- supplies need not be symmetrical, but their difference cannot exceed the absolute maximum rating of 44V.

## Single Supply

The MAX312F/MAX313F/MAX314F operate from a single supply between +9V and +36V when V- is connected to GND.

## Ordering Information (continued)

| PART        | TEMP RANGE     | PIN-PACKAGE    |
|-------------|----------------|----------------|
| MAX313F ESE | -40°C to +85°C | 16 SO          |
| MAX313FEPE  | -40°C to +85°C | 16 Plastic DIP |
| MAX314F ESE | -40°C to +85°C | 16 SO          |
| MAX314FEPE  | -40°C to +85°C | 16 Plastic DIP |

## Chip Information

TRANSISTOR COUNT: 251 PROCESS: CMOS SUBSTRATE CONNECTED TO: V+

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## Test Circuits/Timing Diagrams

<!-- image -->

Figure 1. Functional Diagram

<!-- image -->

Figure 2. Switch Turn-On/Turn-Off Times

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## Test Circuits/Timing Diagrams (continued)

<!-- image -->

Figure 3. MAX314F Break-Before-Make Interval

Figure 4. Charge Injection

<!-- image -->

Figure 5. COM\_, NO\_, NC\_ Capacitance

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## Test Circuits/Timing Diagrams (continued)

Figure 6. Frequency Response, Off-Isolation, and Crosstalk

<!-- image -->

## Pin Configurations (continued)

<!-- image -->

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

<!-- image -->

## Quad, Rail-to-Rail, Fault-Protected, SPST Analog Switches

## Package Information (continued)

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

16L SOIC.EPS

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.