<!-- lastmod 2022-08-05 -->
Test Equipment

Communication Systems

PBX, PABX Systems Audio Signal Routing Avionics Sample-and-Hold Circuits Data-Acquisition Systems xDSL Modems

<!-- image -->

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## General Description

Maxim's MAX312L/MAX313L/MAX314L analog switches feature low on-resistance (10 Ω max) and 1.5 Ω onresistance matching between channels. These switches are +3V logic compatible when powered from ±15V or +12V supplies. The switches conduct equally well in either direction, and offer low leakage over temperature (2.5nA at +85°C).

The MAX312L/MAX313L/MAX314L are quad, singlepole/single-throw (SPST) analog switches. The MAX312L is  normally closed (NC), and the MAX313L is normally open (NO). The MAX314L has two NC switches and two NO switches. All three devices operate from a single +4.5V to +36V supply or from dual ±4.5V to ±20V, and are available in 16-pin TSSOP, SO, and DIP packages.

## Applications

## Features

- ♦ +3V Logic-Compatible Digital Inputs VIH = 2.0V

VIL = 0.8V

- ♦ Pin Compatible with MAX312/MAX313/MAX314 and DG411/DG412/DG413
- ♦ Low On-Resistance (10 Ω max)
- ♦ Guaranteed RON Match Between Channels (1.5 Ω max)
- ♦ Guaranteed RON Flatness over Specified Signal Range (2 Ω max)
- ♦ Crosstalk &gt; 96dB at 20kHz
- ♦ Single-Supply Operation: +4.5V to +36V Dual-Supply Operation: ±4.5V to ±20V
- ♦ Rail-to-Rail Signal Handling

## Ordering Information

*EP = Exposed pad.

| PART        | TEMP RANGE     | PIN-PACKAGE     |
|-------------|----------------|-----------------|
| MAX312L CUE | 0°C to +70°C   | 16 TSSOP        |
| MAX312LCSE  | 0°C to +70°C   | 16 Narrow SO    |
| MAX312LCPE  | 0°C to +70°C   | 16 Plastic DIP  |
| MAX312LEUE  | -40°C to +85°C | 16 TSSOP        |
| MAX312LESE  | -40°C to +85°C | 16 Narrow SO    |
| MAX312LEPE  | -40°C to +85°C | 16 Plastic DIP  |
| MAX312LETP  | -40°C to +85°C | 20 Thin QFN-EP* |

Ordering Information continued at end of data sheet.

## Pin Configurations

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## ABSOLUTE MAXIMUM RATINGS

| (Voltages Referenced to GND)                                                                    |
|-------------------------------------------------------------------------------------------------|
| V+...........................................................................-0.3V to +44V      |
| V- ............................................................................+0.3V to -44V    |
| V+ to V-...................................................................-0.3V to +44V        |
| V IN_ to V- ................................................................-0.3V to +44V       |
| All Other Pins (Note 1)..........................(V- - 0.3V) to (V+ + 0.3V)                     |
| Continuous Current (COM_, NO_, NC_) ........................±100mA                              |
| Peak Current (COM_, NO_, NC_) (pulsed at 1ms, 10% duty cycle max)........................±300mA |

| Continuous Power Dissipation (T A = +70°C)                                                               |
|----------------------------------------------------------------------------------------------------------|
| TSSOP (derate 6.7mW/°C above +70°C) ...................457mW                                             |
| Narrow SO (derate 8.70mW/°C above +70°C) ...........696mW                                                |
| Plastic DIP (derate 10.53mW/°C above +70°C) .........842mW                                               |
| Thin QFN (derate 21.3mW/°C above +70°C).........1702.1mW                                                 |
| Operating Temperature Ranges MAX31_LC_E.....................................................0°C to +70°C |
| MAX31_LE_E ..................................................-40°C to +85°C                              |
| Storage Temperature Range ............................-65°C to +150°C                                    |
| Junction Temperature......................................................+150°C                         |
| Lead Temperature (soldering, 10s) .................................+300°C                                |

Note 1: Signals on COM\_, NO\_, or NC\_ exceeding V+ or V- are clamped by internal diodes. Limit forward-diode current to maximum current rating.

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS-Dual Supplies

(V+ = +15V, V- = -15V, GND = 0, VIH = 2.0V, VIL = 0.8V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.) (Notes 2, 3)

| PARAMETER                                           | SYMBOL                 | CONDITIONS                                     | T A            | MIN           | TYP           | MAX           | UNITS         |
|-----------------------------------------------------|------------------------|------------------------------------------------|----------------|---------------|---------------|---------------|---------------|
| ANALOG SWITCH                                       | ANALOG SWITCH          | ANALOG SWITCH                                  | ANALOG SWITCH  | ANALOG SWITCH | ANALOG SWITCH | ANALOG SWITCH | ANALOG SWITCH |
| Analog Signal Range                                 | V COM _, V NO _, V NC_ |                                                |                | V-            |               | V+            | V             |
| On-Resistance                                       | R ON                   | I COM_ = 10mA, V NO_ or V NC_ = ±10V           | +25°C          |               | 6.5           | 10            | Ω             |
| On-Resistance                                       | R ON                   | I COM_ = 10mA, V NO_ or V NC_ = ±10V           | T MIN to T MAX |               |               | 15            | Ω             |
| On-Resistance Match Between Channels (Note 4)       | ∆ R ON                 | I COM_ = 10mA, V NO_ or V NC_ = ±10V           | +25°C          |               | 0.3           | 1.5           | Ω             |
| On-Resistance Match Between Channels (Note 4)       | ∆ R ON                 | I COM_ = 10mA, V NO_ or V NC_ = ±10V           | T MIN to T MAX |               |               | 3             | Ω             |
| On-Resistance Flatness (Note 5)                     | R FLAT(ON)             | I COM_ = 10mA, V NO_ or V NC_ = -5V, 0, 5V     | +25°C          |               | 0.2           | 2             | Ω             |
| On-Resistance Flatness (Note 5)                     | R FLAT(ON)             | I COM_ = 10mA, V NO_ or V NC_ = -5V, 0, 5V     | T MIN to T MAX |               |               | 4             | Ω             |
| Off-Leakage Current (NO_ or NC_) (Note 6)           | I NO I NC              | V COM_ = +10V, V NO_ or V NC_ = ± 10V          | +25°C          | -0.5          | -0.02         | 0.5           | nA            |
| Off-Leakage Current (NO_ or NC_) (Note 6)           | I NO I NC              | V COM_ = +10V, V NO_ or V NC_ = ± 10V          | T MIN to T MAX | -2.5          |               | 2.5           | nA            |
| COM Off-Leakage Current (Note 6)                    | I COM(OFF)             | V COM_ = ±10V, V NO_ or V NC_ = +10V           | +25°C          | -0.5          | -0.02         | 0.5           | nA            |
| COM Off-Leakage Current (Note 6)                    | I COM(OFF)             | V COM_ = ±10V, V NO_ or V NC_ = +10V           | T MIN to T MAX | -2.5          |               | 2.5           | nA            |
| COM On-Leakage Current (Note 6)                     | I COM(ON)              | V NO_ or V NC_ = ±10V, V COM_ = ±10V           | +25°C          | -1            | -0.04         | 1             | nA            |
| COM On-Leakage Current (Note 6)                     | I COM(ON)              | V NO_ or V NC_ = ±10V, V COM_ = ±10V           | T MIN to T MAX | -5            |               | 5             | nA            |
| DYNAMIC                                             | DYNAMIC                | DYNAMIC                                        | DYNAMIC        | DYNAMIC       | DYNAMIC       | DYNAMIC       | DYNAMIC       |
| Turn-On Time                                        | t ON                   | V COM_ = ±10V, R L = 300 Ω CL = 35pF, Figure 1 | +25°C          |               | 115           | 225           | ns            |
| Turn-On Time                                        | t ON                   | V COM_ = ±10V, R L = 300 Ω CL = 35pF, Figure 1 | T MIN to T MAX |               |               | 275           | ns            |
| Turn-Off Time                                       | t OFF                  | V COM_ = ±10V, R L = 300 Ω CL = 35pF, Figure 1 | +25°C          |               | 100           | 185           | ns            |
| Turn-Off Time                                       | t OFF                  | V COM_ = ±10V, R L = 300 Ω CL = 35pF, Figure 1 | T MIN to T MAX |               |               | 235           | ns            |
| Break-Before-Make Time Delay (MAX314L only, Note 7) | t D                    | R L = 300 Ω , CL = 35pF, Figure 2              | +25°C          | 1             | 10            |               | ns            |
| Charge Injection (Note 7)                           | Q                      | V GEN = 0, R GEN = 0, CL = 1.0nF, Figure 3     | +25°C          | -30           | 20            | 30            | pC            |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## ELECTRICAL CHARACTERISTICS-Dual Supplies (continued)

(V+ = +15V, V- = -15V, GND = 0, VIH = 2.0V, VIL = 0.8V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.) (Notes 2, 3)

| PARAMETER                           | SYMBOL      | CONDITIONS                                | T A            | MIN   |   TYP | MAX   | UNITS   |
|-------------------------------------|-------------|-------------------------------------------|----------------|-------|-------|-------|---------|
| Off-Isolation (Note 8)              | V ISO       | f = 1MHz, R L = 50 Ω , CL = 5pF, Figure 4 | +25°C          |       |   -75 |       | dB      |
| Crosstalk (Note 9)                  | V CT        | f = 1MHz, R L = 50 Ω , CL = 5pF, Figure 5 | +25°C          |       |   -85 |       | dB      |
| NC_ or NO_ Off-Capacitance          | COFF        | f = 1MHz, Figure 6                        | +25°C          |       |    15 |       | pF      |
| COM_ Off-Capacitance                | CCOM_ (OFF) | f = 1MHz, Figure 6                        | +25°C          |       |    15 |       | pF      |
| On-Capacitance                      | CON         | f = 1MHz, Figure 6                        | +25°C          |       |    47 |       | pF      |
| LOGIC INPUT                         |             |                                           |                |       |       |       |         |
| Input Logic High                    | V IH        |                                           |                | 2.0   |       |       | V       |
| Input Logic Low                     | V IL        |                                           |                |       |       | 0.8   | V       |
| Input Current with Input Logic High | I INH       | IN_ = 2.0V                                |                | -0.5  | 0.005 | 0.5   | µA      |
| Input Current with Input Logic Low  | I INL       | IN_ = 0.8V                                |                | -0.5  | 0.005 | 0.5   | µA      |
| POWER SUPPLY                        |             |                                           |                |       |       |       |         |
| Power-Supply Range                  | V+, V-      |                                           |                | ±4.5  |       | ±20.0 | V       |
| Positive Supply Current             | I+          | V+ = +16.5V, V- = -16.5V,                 | +25°C          |       |  0.01 | 1     | µA      |
| Positive Supply Current             |             | V IN = 0 or V+                            | T MIN to T MAX |       |       | 5     |         |
| Positive Supply Current             |             | V+ = +16.5V, V- = -16.5V,                 | +25°C          |       |   130 | 200   |         |
| Positive Supply Current             |             | V IN = 5V                                 | T MIN to T MAX |       |       | 300   |         |
| Negative Supply Current             | I-          | V+ = +16.5V, V- = -16.5V,                 | +25°C          |       |       | 1     | µA      |
| Negative Supply Current             |             | V IN = 0 or 5V                            | T MIN to T MAX |       |       | 5     |         |
| Ground Current                      |             | V+ = +16.5V, V- = -16.5V,                 | +25°C          |       |  0.01 | 1     | µA      |
| Ground Current                      |             | V IN = 0 or V+                            | T MIN to T MAX |       |       | 5     |         |
| Ground Current                      | I GND       | V+ = +16.5V, V- = -16.5V,                 | +25°C          |       |   130 | 200   |         |
| Ground Current                      |             | V IN = 5V                                 | T MIN to T MAX |       |       | 300   |         |

## ELECTRICAL CHARACTERISTICS-Single Supply

(V+ = +12V, V- = 0, GND = 0, VIH = 2.0V, VIL = 0.8V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.) (Notes 2, 3)

| PARAMETER           | SYMBOL                 | CONDITIONS                           | T A            | MIN           | TYP           | MAX           | UNITS         |
|---------------------|------------------------|--------------------------------------|----------------|---------------|---------------|---------------|---------------|
| ANALOG SWITCH       | ANALOG SWITCH          | ANALOG SWITCH                        | ANALOG SWITCH  | ANALOG SWITCH | ANALOG SWITCH | ANALOG SWITCH | ANALOG SWITCH |
| Analog Signal Range | V COM _, V NO _, V NC_ |                                      |                | 0             |               | V+            | V             |
| On-Resistance       | R ON                   | I COM_ = 10mA, V NC_ or V NO_ = +10V | +25°C          | 12.5          |               | 25            | Ω             |
| On-Resistance       | R ON                   | I COM_ = 10mA, V NC_ or V NO_ = +10V | T MIN to T MAX |               |               | 35            | Ω             |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## ELECTRICAL CHARACTERISTICS-Single Supply (continued)

(V+ = +12V, V- = 0, GND = 0, VIH = 2.0V, VIL = 0.8V, TA = TMIN to TMAX, unless otherwise noted. Typical values are at TA = +25°C.) (Notes 2, 3)

| PARAMETER                                           | SYMBOL       | CONDITIONS                                     | T A            | MIN          | TYP          | MAX          | UNITS        |
|-----------------------------------------------------|--------------|------------------------------------------------|----------------|--------------|--------------|--------------|--------------|
| On-Resistance Match Between Channels (Note 4)       | ∆ R ON       | I COM_ = 10mA, V NO_ or V NC_ = +10V           | +25°C          |              | 0.3          | 2            | Ω            |
| On-Resistance Match Between Channels (Note 4)       | ∆ R ON       | I COM_ = 10mA, V NO_ or V NC_ = +10V           | T MIN to T MAX |              |              | 2.5          | Ω            |
| On-Resistance Flatness (Note 5)                     | R FLAT(ON)   | I COM_ = 10mA, V NO_ or V NC_ = +2V, +6V, +10V | +25°C          |              | 1.7          | 3.5          | Ω            |
| On-Resistance Flatness (Note 5)                     | R FLAT(ON)   | I COM_ = 10mA, V NO_ or V NC_ = +2V, +6V, +10V | T MIN to T MAX |              |              | 4.5          | Ω            |
| DYNAMIC                                             | DYNAMIC      | DYNAMIC                                        | DYNAMIC        | DYNAMIC      | DYNAMIC      | DYNAMIC      | DYNAMIC      |
| Turn-On Time                                        | t ON         | V COM_ = 8V, R L = 300 Ω , CL = 35pF, Figure 1 | +25°C          |              | 165          | 325          | ns           |
| Turn-On Time                                        | t ON         | V COM_ = 8V, R L = 300 Ω , CL = 35pF, Figure 1 | T MIN to T MAX |              |              | 425          | ns           |
| Turn-Off Time                                       | t OFF        | V COM_ = 8V, R L = 300 Ω , CL = 35pF, Figure 1 | +25°C          |              | 117          | 175          | ns           |
| Turn-Off Time                                       | t OFF        | V COM_ = 8V, R L = 300 Ω , CL = 35pF, Figure 1 | T MIN to T MAX |              |              | 225          | ns           |
| Break-Before-Make Time Delay (MAX314L only, Note 7) | t D          | R L = 300 Ω , CL = 35pF, Figure 2              | +25°C          | 1            | 5            |              | ns           |
| Charge Injection                                    | Q            | Figure 3, CL = 1.0nF, V GEN = 0, R GEN = 0     | +25°C          |              | -10          |              | pC           |
| LOGIC INPUT                                         | LOGIC INPUT  | LOGIC INPUT                                    | LOGIC INPUT    | LOGIC INPUT  | LOGIC INPUT  | LOGIC INPUT  | LOGIC INPUT  |
| Input Logic High                                    | V IH         |                                                |                | 2.0          |              |              | V            |
| Input Logic Low                                     | V IL         |                                                |                |              |              | 0.8          | V            |
| Input Current with Input Logic High                 | I INH        | IN_ = 2.0V                                     |                | -0.5         | 0.005        | 0.5          | µA           |
| Input Current with Input Logic Low                  | I INL        | IN_ = 0.8V                                     |                | -0.5         | 0.005        | 0.5          | µA           |
| POWER SUPPLY                                        | POWER SUPPLY | POWER SUPPLY                                   | POWER SUPPLY   | POWER SUPPLY | POWER SUPPLY | POWER SUPPLY | POWER SUPPLY |
| Power-Supply Range                                  | V+           |                                                |                | +4.5         |              | +36          | V            |
| Positive Supply Current                             | I+           | V+ = +13.2V, V IN = 0 or V+                    | +25°C          |              | 0.01         | 1            | µA           |
| Positive Supply Current                             | I+           | V+ = +13.2V, V IN = 0 or V+                    | T MIN to T MAX |              |              | 5            | µA           |
| Positive Supply Current                             | I+           | V+ = +13.2V, V IN = 5V                         | +25°C          |              | 25           | 125          | µA           |
| Positive Supply Current                             | I+           | V+ = +13.2V, V IN = 5V                         | T MIN to T MAX |              |              | 175          | µA           |

Note 6: Leakage parameters are 100% tested at maximum-rated hot temperature and guaranteed by correlation at +25°C.

Note 7: Guaranteed by design.

Note 8: Off-isolation = 20log10 [VCOM/(VNC or VNO)], VCOM = output, VNC or VNO = input to off switch.

Note 9: Between any two switches.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

<!-- image -->

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## Typical Operating Characteristics (continued)

(TA = +25°C, unless otherwise noted.)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## Pin Descriptions

| PIN (TSSOP, SO, DIP)   | PIN (TSSOP, SO, DIP)   | PIN (TSSOP, SO, DIP)   | NAME                   | FUNCTION                                                                      |
|------------------------|------------------------|------------------------|------------------------|-------------------------------------------------------------------------------|
| MAX312L                | MAX313L                | MAX314L                | NAME                   | FUNCTION                                                                      |
| 1, 8, 9, 16            | 1, 8, 9, 16            | 1, 8, 9, 16            | IN1, IN4, IN3, IN2     | Logic Inputs                                                                  |
| 2, 7, 10, 15           | 2, 7, 10, 15           | 2, 7, 10, 15           | COM1, COM4, COM3, COM2 | Analog Signal Common Terminals                                                |
| 3, 6, 11, 14           | -                      | -                      | NC1, NC4, NC3, NC2     | Analog Signal Normally Closed Terminals                                       |
| -                      | 3, 6, 11, 14           | -                      | NO1, NO4, NO3, NO2     | Analog Signal Normally Open Terminals                                         |
| -                      | -                      | 3, 6                   | NO1, NO4               | Analog Signal Normally Open Terminals                                         |
| -                      | -                      | 11, 14                 | NC3, NC2               | Analog Signal Normally Closed Terminals                                       |
| 4                      | 4                      | 4                      | V-                     | Negative Analog Supply Input (connect V- to GND for single- supply operation) |
| 5                      | 5                      | 5                      | GND                    | Ground                                                                        |
| 12                     | 12                     | 12                     | N.C.                   | No Connection. Not internally connected.                                      |
| 13                     | 13                     | 13                     | V+                     | Positive Analog Supply Input                                                  |

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## Pin Descriptions (continued)

| PIN (TQFN)       | PIN (TQFN)       | PIN (TQFN)       | NAME                   | FUNCTION                                                                  |
|------------------|------------------|------------------|------------------------|---------------------------------------------------------------------------|
| MAX312L          | MAX313L          | MAX314L          | NAME                   | FUNCTION                                                                  |
| 7, 9, 17, 19     | 7, 9, 17, 19     | 7, 9, 17, 19     | IN4, IN3, IN2, IN1     | Logic Inputs                                                              |
| 6, 10, 16, 20    | 6, 10, 16, 20    | 6, 10, 16, 20    | COM4, COM3, COM2, COM1 | Analog Signal Common Terminals                                            |
| 1, 5, 11, 15     | -                | -                | NC1, NC4, NC3, NC2     | Analog Signal Normally Closed Terminals                                   |
| -                | 1, 5, 11, 15     | -                | NO1, NO4, NO3, NO2     | Analog Signal Normally Open Terminals                                     |
| -                | -                | 1, 5             | NO1, NO4               | Analog Signal Normally Open Terminals                                     |
| -                | -                | 11, 15           | NC3, NC2               | Analog Signal Normally Closed Terminals                                   |
| 2                | 2                | 2                | V-                     | Negative Analog Supply Input (connect to GND for single-supply operation) |
| 4                | 4                | 4                | GND                    | Ground                                                                    |
| 3, 8, 12, 13, 18 | 3, 8, 12, 13, 18 | 3, 8, 12, 13, 18 | N.C.                   | No Connection. Not internally connected.                                  |
| 14               | 14               | 14               | V+                     | Positive Analog Supply Input                                              |
| -                | -                | -                | EP                     | Exposed Pad. Connect EP to V+.                                            |

## Applications Information

## Low-Distortion Audio

The MAX312L/MAX313L/MAX314L, having very low RON and very low RON variation with signal amplitude, are well suited for low-distortion audio applications. The Typical Operating Characteristics show Total Harmonic Distortion (THD) vs. Frequency graphs for several signal amplitudes and impedances. Higher source and load impedances improve THD, but reduce off-isolation.

## Off-Isolation at High Frequencies

In  50 Ω systems, the high-frequency on-response of these parts extends from DC to above 100MHz with a typical loss of -2dB. When the switch is turned off, however, it  behaves like a capacitor, and off-isolation decreases with increasing frequency. (Above 300MHz, the switch actually passes more signal turned off than turned on.) This effect is more pronounced with higher source-and-load impedances.

Above 5MHz, circuit board layout becomes critical, and it  becomes difficult to characterize the response of the switch independent of the circuit. The graphs shown in the Typical Operating Characteristics were taken using a 50 Ω source and load connected with BNC connectors.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Power-Supply Sequencing-Free Operation

Most CMOS switches require specific power-supply sequencing in order to prevent the devices from latching up. The older MAX312/MAX313/MAX314 devices require a proper power-supply sequence of V+, VL, V-, and so forth.  Otherwise, it becomes necessary to add signal diodes to the circuit in order to protect it from potential latchups. The new MAX312L/MAX313L/MAX314L devices eliminate the need for a VL pin and permit the user to utilize any power-up sequence that is required. It is, however, important not to exceed the absolute maximum ratings because stresses beyond the listed ratings may cause permanent damage to the devices.

## Chip Information

<!-- image -->

TRANSISTOR COUNT: 92 PROCESS: CMOS

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## Test Circuits/Timing Diagrams

<!-- image -->

Figure 1. Switching-Time Test Circuit

<!-- image -->

Figure 2. Break-Before-Make Test Circuit (MAX314L Only)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## Test Circuits/Timing Diagrams (continued)

<!-- image -->

Figure 3. Charge Injection Test Circuit

Figure 4. Off-Isolation Test Circuit

<!-- image -->

Figure 5. Crosstalk Test Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## Test Circuits/Timing Diagrams (continued)

Figure 6. Channel Off-Capacitance Test Circuit

<!-- image -->

<!-- image -->

## Ordering Information (continued)

| PART        | TEMP RANGE     | PIN-PACKAGE     |
|-------------|----------------|-----------------|
| MAX313L CUE | 0°C to +70°C   | 16 TSSOP        |
| MAX313LCSE  | 0°C to +70°C   | 16 Narrow SO    |
| MAX313LCPE  | 0°C to +70°C   | 16 Plastic DIP  |
| MAX313LEUE  | -40°C to +85°C | 16 TSSOP        |
| MAX313LESE  | -40°C to +85°C | 16 Narrow SO    |
| MAX313LEPE  | -40°C to +85°C | 16 Plastic DIP  |
| MAX313LETP  | -40°C to +85°C | 20 Thin QFN-EP* |
| MAX314L CUE | 0°C to +70°C   | 16 TSSOP        |
| MAX314LCSE  | 0°C to +70°C   | 16 Narrow SO    |
| MAX314LCPE  | 0°C to +70°C   | 16 Plastic DIP  |
| MAX314LEUE  | -40°C to +85°C | 16 TSSOP        |
| MAX314LESE  | -40°C to +85°C | 16 Narrow SO    |
| MAX314LEPE  | -40°C to +85°C | 16 Plastic DIP  |
| MAX314LETP  | -40°C to +85°C | 20 Thin QFN-EP* |

*EP = Exposed pad.

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Figure 7. Channel On-Capacitance Test Circuit

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## Pin Configurations (continued)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## Package Information

For the latest package outline information and land patterns, go to www.maxim-ic.com/packages .

| PACKAGE TYPE   | PACKAGE CODE   | DOCUMENT NO.   |
|----------------|----------------|----------------|
| 16 TSSOP       | U16-1          | 21-0066        |
| 16 Narrow SO   | S16-8          | 21-0041        |
| 16 Plastic DIP | P16-2          | 21-0043        |
| 20 TQFN        | T2055-5        | 21-0140        |

13

## 10 Ω , Quad, SPST, +3V Logic-Compatible Analog Switches

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION             | PAGES CHANGED       |
|-------------------|-----------------|-------------------------|---------------------|
|                 0 | 10/01           | Initial release.        | -                   |
|                 1 | 9/08            | Added the TQFN package. | 1, 2, 8, 11, 12, 13 |

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

14

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600