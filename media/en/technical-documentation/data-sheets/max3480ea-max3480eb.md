<!-- lastmod 2022-08-04 -->
## Ordering Information

| PART          | TEMP RANGE         | PIN- PACKAGE*   |   DATA RATE (kbps) | PKG CODE   |
|---------------|--------------------|-----------------|--------------------|------------|
| MAX3480EA CPI | 0 ° C to +70 ° C   | 28 PDIP         |               2500 | P28M-1     |
| MAX3480EAEPI  | -40 ° C to +85 ° C | 28 PDIP         |               2500 | P28M-1     |
| MAX3480EB CPI | 0 ° C to +70 ° C   | 28 PDIP         |                250 | P28M-1     |
| MAX3480EBEPI  | -40 ° C to +85 ° C | 28 PDIP         |                250 | P28M-1     |

<!-- image -->

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

## General Description

The MAX3480EA/MAX3480EB are electrically isolated RS-485/RS-422 data-communications interfaces. The RS-485/RS-422 I/O pins are protected against ±15kV electrostatic discharge (ESD) shocks, without latchup. Transceivers, optocouplers, and a transformer are all included in one low-cost, 28-pin PDIP package. A single +3.3V supply on the logic side powers both sides of the interface.

The MAX3480EB features reduced-slew-rate drivers that  minimize EMI and reduce reflections caused by improperly terminated cables, allowing error-free data transmission  at  data  rates  up  to  160kbps.  The MAX3480EA's driver slew rate is not limited, allowing transmission rates up to 2.5Mbps.

Drivers are short-circuit current limited and are protected against excessive power dissipation by thermal shutdown circuitry that places the driver outputs into a high-impedance state. The receiver input has a fail-safe feature that guarantees a logic-high output if the input is open circuit.

The MAX3480EA/MAX3480EB are guaranteed to withstand 1260VRMS (1min) or 1520VRMS (1s). Their isolated inputs and outputs meet RS-485/RS-422 specifications.

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Applications

Isolated RS-485/RS-422 Data Interface Transceivers for EMI-Sensitive Applications Industrial-Control Local Area Networks Automatic Test Equipment HVAC/Building Control Networks

Telecom

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Features

- ♦ Isolated Data Interface Guaranteed to 1260VRMS (1min)
- ♦ ±15kV ESD Protection for I/O Pins
- ♦ Slew-Rate-Limited Data Transmission (160kbps for MAX3480EB)
- ♦ High-Speed, Isolated, 2.5Mbps RS-485 Interface (MAX3480EA)
- ♦ Single +3.3V Supply
- ♦ Current Limiting and Thermal Shutdown for Driver Overload Protection
- ♦ Standard 28-Pin PDIP Package
- ♦ Allows Up to 128 Transceivers on the Bus

## Pin Configuration

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

## ABSOLUTE MAXIMUM RATINGS

| With Respect to GND                                                          |
|------------------------------------------------------------------------------|
| Supply Voltage (V CC1, V CC2, V CC4, V CC5 ) .......-0.3V to +3.8V           |
| Supply Voltage (V CC3 ) ........................................-0.3V to +7V |
| Control Input Voltage (SD, FS) ............-0.3V to (V CC3 + 0.3V)           |
| Receiver Output Voltage (RO).............-0.3V to (V CC5 + 0.3V)             |
| With Respect to ISO COM                                                      |
| Control Input Voltage (ISO DE _)......-0.3V to (ISO V CC_ + 0.3V)            |
| Driver Input Voltage (ISO DI _) .....-0.3V to (ISO V CC_ + 0.3V)             |
| Receiver Output Voltage (ISO RO_)..-0.3V to (ISO V CC_ + 0.3V)               |
| Driver Output Voltage (A, B)..............................-8V to +12.5V      |
| Receiver Input Voltage (A, B)............................-8V to +12.5V       |

| LED Forward Current (DI, DE, ISO RO LED) ......................50mA                                     |
|---------------------------------------------------------------------------------------------------------|
| Continuous Power Dissipation (T A = +70°C) 28-Pin PDIP (derate 9.09mW/°C above +70°C)............727mW  |
| Operating Temperature Ranges MAX3480E_CPI..................................................0°C to +70°C |
| MAX3480E_EPI...............................................-40°C to +85°C                               |
| Storage Temperature Range.............................-65°C to +150°C                                   |
| Lead Temperature (soldering, 10s) .................................+300°C                               |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## ELECTRICAL CHARACTERISTICS

(VCC = VCC1 = VCC2 = VCC4 = VCC5 = +3.0V to +3.6V, FS = 0, TA = TMIN to TMAX, unless otherwise noted. Typical values are at VCC = +3.3V and TA = +25°C.) (Notes 1, 2)

| PARAMETER                                                      | SYMBOL   | CONDITIONS                                      | CONDITIONS                                      | MIN        | TYP        | MAX        | UNITS   |
|----------------------------------------------------------------|----------|-------------------------------------------------|-------------------------------------------------|------------|------------|------------|---------|
| Switch Frequency                                               | f SWL    | FS = 0                                          | FS = 0                                          | 60         | 60         | 60         | kHz     |
|                                                                | f SWH    | FS = V CC or open                               | FS = V CC or open                               | 900        | 900        | 900        | kHz     |
| Operating Supply Current                                       | I CC     | R L = ∞ MAX3480EA,                              | R L = ∞ MAX3480EA,                              |            | 130        | 250        | mA      |
| Operating Supply Current                                       | I CC     | DE´ = V CC or open R L = 54 Ω                   | DE´ = V CC or open R L = 54 Ω                   | 220        | 220        | 220        | mA      |
| Operating Supply Current                                       | I CC     | R L = ∞ MAX3480EB,                              | R L = ∞ MAX3480EB,                              |            | 80         | 200        | mA      |
| Operating Supply Current                                       | I CC     | DE´ = V CC or open R L = 54 Ω                   | DE´ = V CC or open R L = 54 Ω                   | 180        | 180        | 180        | mA      |
| Shutdown Supply Current (Note 3)                               | I SHDN   | SD = V CC3                                      | SD = V CC3                                      | 0.2        | 0.2        | 0.2        | µA      |
| FS Input Threshold                                             | V FSH    | High                                            | High                                            | 2.4        | 2.4        | 2.4        | V       |
| FS Input Threshold                                             | V FSL    | Low                                             | Low                                             | 0.8        | 0.8        | 0.8        | V       |
| FS Input Pullup Current                                        | I FSL    | FS low                                          | FS low                                          | 50         | 50         | 50         | µA      |
| FS Input Leakage Current                                       | I FSM    | FS high                                         | FS high                                         | 10         | 10         | 10         | pA      |
| Input High Voltage                                             | V IH     | DE´, DI´, Figure 1                              | DE´, DI´, Figure 1                              | V CC - 0.4 | V CC - 0.4 | V CC - 0.4 | V       |
| Input Low Voltage                                              | V IL     | DE´, DI´, Figure 1                              | DE´, DI´, Figure 1                              | 0.4        | 0.4        | 0.4        | V       |
| Isolation Voltage                                              | V ISO    | T A = +25°C, 1min (Note 4)                      | T A = +25°C, 1min (Note 4)                      | 1260       | 1260       | 1260       | V RMS   |
| Shutdown Input Threshold                                       | V SDH    | High                                            | High                                            | 2.4 1      | 2.4 1      | 2.4 1      | V       |
|                                                                | V SDL    | Low                                             | Low                                             | 1 0.8      | 1 0.8      | 1 0.8      |         |
| Isolation Resistance                                           | R ISO    | T A = +25°C, V ISO = ±50VDC                     | T A = +25°C, V ISO = ±50VDC                     | 100 10,000 | 100 10,000 | 100 10,000 | M Ω     |
| Isolation Capacitance                                          | CISO     | f = 1MHz                                        | f = 1MHz                                        | 10         | 10         | 10         | pF      |
| ESD Protection                                                 | ESD      | A, B, Y, and Z pins, tested at Human Body Model | A, B, Y, and Z pins, tested at Human Body Model | ±15        | ±15        | ±15        | kV      |
| Differential Driver Output (No Load)                           | V OD1    |                                                 |                                                 | 8          | 8          | 8          | V       |
| Differential Driver Output                                     | V OD2    | R = 50 Ω (RS-422)                               | R = 50 Ω (RS-422)                               | 2 1.5      | 2 1.5      | 2 1.5      | V       |
|                                                                | ∆ V OD   | R = 27 Ω (RS-485), Figure 3                     | R = 27 Ω (RS-485), Figure 3                     | 5.0        | 5.0        | 5.0        |         |
| Change in Magnitude of Driver Output Voltage for Complementary |          | R = 27 Ω or 50 Ω , Figure 3                     | Differential                                    | 0.3        | 0.3        | 0.3        | V       |
| Output States                                                  |          | R = 27 Ω or 50 Ω , Figure 3                     | Common mode                                     | 0.3        | 0.3        | 0.3        | V       |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

## ELECTRICAL CHARACTERISTICS (continued)

(VCC = VCC1 = VCC2 = VCC4 = VCC5 = +3.0V to +3.6V, FS = 0, TA = TMIN to TMAX, unless otherwise noted. Typical values are at VCC = +3.3V and TA = +25°C.) (Notes 1, 2)

| PARAMETER                       | SYMBOL    | CONDITIONS                  | CONDITIONS                  | CONDITIONS                  |   MIN |   TYP |   MAX | UNITS   |
|---------------------------------|-----------|-----------------------------|-----------------------------|-----------------------------|-------|-------|-------|---------|
| Driver Common-Mode Output       | V OC      | R = 27 Ω or 50 Ω , Figure 4 | R = 27 Ω or 50 Ω , Figure 4 | R = 27 Ω or 50 Ω , Figure 4 |       |       |     4 | V       |
| Input Current (A, B)            | ISO I IN  | DE´ = 0, V CC = 0 or +3.6V  | MAX3480EA                   | V IN = +12V                 |       |       |  0.25 | mA      |
| Input Current (A, B)            | ISO I IN  | DE´ = 0, V CC = 0 or +3.6V  | MAX3480EA                   | V IN = -7V                  |       |       |  -0.2 | mA      |
| Input Current (A, B)            | ISO I IN  | DE´ = 0, V CC = 0 or +3.6V  | MAX3480EB                   | V IN = +12V                 |       |       |  0.25 | mA      |
| Input Current (A, B)            | ISO I IN  | DE´ = 0, V CC = 0 or +3.6V  | MAX3480EB                   | V IN = -7V                  |       |       |  -0.2 | mA      |
| Receiver Input Resistance       | R IN      | -7V ≤ V CM ≤ 12V            | -7V ≤ V CM ≤ 12V            | -7V ≤ V CM ≤ 12V            |    48 |       |       | k Ω     |
| Receiver Differential Threshold | V TH      | -7V ≤ V CM ≤ 12V            | -7V ≤ V CM ≤ 12V            | -7V ≤ V CM ≤ 12V            |  -0.2 |       |  +0.2 | V       |
| Receiver Input Hysteresis       | ∆ V TH    | V CM = 0                    | V CM = 0                    | V CM = 0                    |    70 |    70 |       | mV      |
| Receiver Output Low Voltage     | V OL      | DI´ = V CC                  | DI´ = V CC                  | DI´ = V CC                  |       |       |   0.4 | V       |
| Receiver Output High Current    | I OH      | V OUT = +3.6V, DI´ = 0      | V OUT = +3.6V, DI´ = 0      | V OUT = +3.6V, DI´ = 0      |       |       |   250 | µA      |
| Driver Short-Circuit Current    | ISO I OSD | -7V ≤ V O ≤ 12V (Note 5)    | -7V ≤ V O ≤ 12V (Note 5)    | -7V ≤ V O ≤ 12V (Note 5)    |   100 |   100 |       | mA      |

## SWITCHING CHARACTERISTICS-MAX3480EA

(VCC = VCC1 = VCC2 = VCC4 = VCC5 = +3.0V to +3.6V, FS = 0, TA = TMIN to TMAX, unless otherwise noted. Typical values are at VCC = +3.3V and TA = +25°C.)

| PARAMETER                                    | SYMBOL    | CONDITIONS                                               |   MIN |   TYP |   MAX | UNITS   |
|----------------------------------------------|-----------|----------------------------------------------------------|-------|-------|-------|---------|
| Driver Input to Output Propagation Delay     | t PLH     | Figures 4, 6; R DIFF = 54 Ω , CL1 = CL2 = 100pF          |       |   100 |   275 | ns      |
| Driver Input to Output Propagation Delay     | t PHL     | Figures 4, 6; R DIFF = 54 Ω , CL1 = CL2 = 100pF          |       |   100 |   275 | ns      |
| Driver Output Skew                           | t SKEW    | Figures 4, 6; R DIFF = 54 Ω , CL1 = CL2 = 100pF (Note 5) |       |    25 |   100 | ns      |
| Driver Rise or Fall Time                     | t R , t F | Figures 4, 6; R DIFF = 54 Ω , CL1 = CL2 = 100pF          |       |    15 |    50 | ns      |
| Driver Enable to Output High                 | t ZH      | Figures 5, 7; CL = 100pF, S2 closed                      |       |   0.5 |   1.8 | µs      |
| Driver Enable to Output Low                  | t ZL      | Figures 5, 7; CL = 100pF, S1 closed                      |       |   0.5 |   1.8 | µs      |
| Driver Disable Time from High                | t HZ      | Figures 5, 7; CL = 15pF, S2 closed                       |       |   0.6 |   1.8 | µs      |
| Driver Disable Time from Low                 | t LZ      | Figures 5, 7; CL = 15pF, S1 closed                       |       |   0.6 |   1.8 | µs      |
| Receiver Input to Output Propagation Delay   | t PLH     | Figures 4, 8; R DIFF = 54 Ω , CL1 = CL2 = 100pF          |       |   100 |   225 | ns      |
| Receiver Input to Output Propagation Delay   | t PHL     | Figures 4, 8; R DIFF = 54 Ω , CL1 = CL2 = 100pF          |       |   120 |   225 | ns      |
|  t PLH - t PHL  Differential Receiver Skew | t SKD     | Figures 4, 8; R DIFF = 54 Ω , CL1 = CL2 = 100pF          |       |    20 |   100 | ns      |
| Maximum Data Rate                            | f MAX     | t SKEW, t SKD ≤ 25% of data period                       |   2.5 |       |       | Mbps    |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

## SWITCHING CHARACTERISTICS-MAX3480EB

(VCC = VCC1 = VCC2 = VCC4 = VCC5 = +3.0V to +3.6V, FS = 0, TA = TMIN to TMAX, unless otherwise noted. Typical values are at VCC = +3.3V and TA = +25°C.)

| PARAMETER                                    | SYMBOL    | CONDITIONS                                      |   MIN |   TYP |   MAX | UNITS   |
|----------------------------------------------|-----------|-------------------------------------------------|-------|-------|-------|---------|
| Driver Input to Output Propagation Delay     | t PLH     | Figures 4, 6; R DIFF = 54 Ω , CL1 = CL2 = 100pF |       |   1.5 |   3.0 | µs      |
| Driver Input to Output Propagation Delay     | t PHL     | Figures 4, 6; R DIFF = 54 Ω , CL1 = CL2 = 100pF |       |   1.2 |   3.0 | µs      |
| Driver Output Skew                           | t SKEW    | Figures 4, 6; R DIFF = 54 Ω , CL1 = CL2 = 100pF |       |   300 |  1200 | ns      |
| Driver Rise or Fall Time                     | t R , t F | Figures 4, 6; R DIFF = 54 Ω , CL1 = CL2 = 100pF |       |   1.0 |   2.0 | µs      |
| Driver Enable to Output High                 | t ZH      | Figures 5, 7; CL = 100pF, S2 closed             |       |   1.2 |   4.5 | µs      |
| Driver Enable to Output Low                  | t ZL      | Figures 5, 7; CL = 100pF, S1 closed             |       |   1.0 |   4.5 | µs      |
| Driver Disable Time from Low                 | t LZ      | Figures 5, 7; CL = 15pF, S1 closed              |       |   1.5 |   4.5 | µs      |
| Driver Disable Time from High                | t HZ      | Figures 5, 7; CL = 15pF, S2 closed              |       |   2.0 |   4.5 | µs      |
| Receiver Input to Output Propagation Delay   | t PLH     | Figures 4, 8; R DIFF = 54 Ω , CL1 = CL2 = 100pF |       |   0.6 |   3.0 | µs      |
| Receiver Input to Output Propagation Delay   | t PHL     | Figures 4, 8; R DIFF = 54 Ω , CL1 = CL2 = 100pF |       |   1.4 |   3.0 | µs      |
|  t PLH - t PHL  Differential Receiver Skew | t SKD     | Figures 4, 8; R DIFF = 54 Ω , CL1 = CL2 = 100pF |       |   750 |  1500 | ns      |
| Maximum Data Rate                            | f MAX     | t SKEW , t SKD ≤ 25% of data period             |   160 |       |       | kbps    |

Note 1: All currents into device pins are positive; all currents out of device pins are negative. All voltages are referenced to logic-side ground (GND1, GND2), unless otherwise specified.

Note 2: For DE ´ and DI ´ pin descriptions, see the Block Diagram and the Typical Application Circuit (Figure 1 for MAX3480EA/MAX3480EB).

Note 3: Shutdown supply current is the current at VCC1 when shutdown is enabled.

Note 4: Limit guaranteed by applying 1520VRMS for 1s. Test voltage is applied between all pins on one side of the package to all pins on the other side of the package. For example, between pins 1 and 14, and 15 and 28.

Note 5: Applies to peak current. See the Typical Operating Characteristics and the Applications Information section.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Typical Operating Characteristics

(VCC\_ = +3.3V, TA = +25°C, Figure 1, unless otherwise noted.)

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

## Typical Operating Characteristics (continued)

(VCC\_ = +3.3V, TA = +25°C, Figure 1, unless otherwise noted.)

<!-- image -->

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description

| PIN                          | NAME                         | FUNCTION                                                                                                                                                                                                                                                                                                                                                     |
|------------------------------|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PINS ON THE NONISOLATED SIDE | PINS ON THE NONISOLATED SIDE | PINS ON THE NONISOLATED SIDE                                                                                                                                                                                                                                                                                                                                 |
| 1                            | V CC1                        | Logic-Side (Nonisolated Side) +3.3V Supply Voltage Input. Connect to pins 2, 10, and 14.                                                                                                                                                                                                                                                                     |
| 2                            | V CC2                        | Logic-Side (Nonisolated Side) +3.3V Supply Voltage Input. Connect to pins 1, 10, and 14.                                                                                                                                                                                                                                                                     |
| 3, 4                         | D1, D2                       | Boost-Voltage Generator Outputs. See Figures 1 and 2.                                                                                                                                                                                                                                                                                                        |
| 5, 12                        | GND1, GND2                   | Logic-Side Ground Inputs. Must be connected; not internally connected.                                                                                                                                                                                                                                                                                       |
| 6                            | FS                           | Frequency Switch Input. If V FS = V CC , switch frequency is high; if FS = 0, switch frequency is low (normal connection).                                                                                                                                                                                                                                   |
| 7                            | SD                           | Power-Supply Shutdown Input. Must be connected to logic ground.                                                                                                                                                                                                                                                                                              |
| 8                            | V CC3                        | Boosted V+ Voltage Input. Must be connected as shown in Figures 1 and 2.                                                                                                                                                                                                                                                                                     |
| 9                            | DI                           | Driver Input. With DE´ high, a low on DI´ forces output A low and output B high. Similarly, a high on DI´ forces output A high and output B low. Drives internal LED cathode through R1 (Table 1).                                                                                                                                                           |
| 10                           | V CC4                        | Logic-Side (Nonisolated Side) +3.3V Supply Voltage Input. Connect to pins 1, 2, and 14.                                                                                                                                                                                                                                                                      |
| 11                           | DE                           | Driver-Enable Input. The driver outputs, A and B, are enabled by bringing DE´ high. The driver outputs are high impedance when DE´ is low. If the driver outputs are enabled, the device functions as a line driver. While the driver outputs are high impedance, the device functions as a line receiver. Drives internal LED cathode through R2 (Table 1). |
| 13                           | RO                           | Receiver Output. If A > B by 200mV, RO is low; if A < B by 200mV, RO is high. Open collector; must have pullup (R3) to V CC (Table 1).                                                                                                                                                                                                                       |
| 14                           | V CC5                        | Logic-Side (Nonisolated Side) +3.3V Supply Voltage Input. Connect to pins 1, 2, and 10.                                                                                                                                                                                                                                                                      |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Pin Description (continued)

| PIN                                     | NAME                                    | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-----------------------------------------|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| PINS ON THE ISOLATED RS-485/RS-422 SIDE | PINS ON THE ISOLATED RS-485/RS-422 SIDE | PINS ON THE ISOLATED RS-485/RS-422 SIDE                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 15                                      | ISO RO LED                              | Isolated Receiver-Output LED Anode (Input). If A > B by 200mV, ISO RO LED is high; if A < B by 200mV, ISO RO LED is low.                                                                                                                                                                                                                                                                                                                                    |
| 16                                      | ISO COM2                                | Isolated-Supply Common Input. Connect to ISO COM1.                                                                                                                                                                                                                                                                                                                                                                                                          |
| 17                                      | ISO DE DRV                              | Isolated Driver-Enable Drive Input. The driver outputs, A and B, are enabled by bringing DE´ high. The driver outputs are high impedance when DE´ is low. If the driver outputs are enabled, the device functions as a line driver. While the driver outputs are high impedance, the device functions as a line receiver. Open collector output; must have pullup (R4 in Figure 1) to ISO VCC and be connected to ISO DE IN for normal operation (Table 1). |
| 18                                      | ISO V CC2                               | Isolated-Supply Positive Input Voltage. Connect to ISO V CC1 .                                                                                                                                                                                                                                                                                                                                                                                              |
| 19                                      | ISO DI DRV                              | Isolated Driver-Input Drive. With DE´ high, a low on DI´ forces output A low and output B high. Similarly, a high on DI´ forces output A high and output B low. Open-collector output; must have pullup (R5 in Figure 1) to ISO VCC and be connected to ISO DI IN for normal operation (Table 1).                                                                                                                                                           |
| 20                                      | ISO COM1                                | Isolated-Supply Common Output. Connect to ISO COM2. If RS-485 wires have a shield, connect ISO COM1 to shield through 100 Ω resistor.                                                                                                                                                                                                                                                                                                                       |
| 21                                      | ISO DE IN                               | Isolated Driver-Enable Input. Connect to ISO DE DRV for normal operation.                                                                                                                                                                                                                                                                                                                                                                                   |
| 22                                      | ISO DI IN                               | Isolated Driver Input. Connect to ISO DI DRV for normal operation.                                                                                                                                                                                                                                                                                                                                                                                          |
| 23                                      | A                                       | Noninverting Driver Output and Noninverting Receiver Input                                                                                                                                                                                                                                                                                                                                                                                                  |
| 24                                      | ISO RO DRV                              | Isolated Receiver-Output Drive. Connect to ISO RO LED through R6 (Table 1 and Figure 1).                                                                                                                                                                                                                                                                                                                                                                    |
| 25                                      | B                                       | Inverting Driver Output and Inverting Receiver Input                                                                                                                                                                                                                                                                                                                                                                                                        |
| 26                                      | ISO V CC1                               | Isolated Supply Positive Output Voltage. Connect to ISO V CC2 .                                                                                                                                                                                                                                                                                                                                                                                             |
| 27, 28                                  | AC2, AC1                                | Internal Connections. Leave these pins unconnected.                                                                                                                                                                                                                                                                                                                                                                                                         |

Note: For DE ´ and DI ´ pin descriptions, see Detailed Block Diagram .

8

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Detailed Description

The MAX3480EA/MAX3480EB are electrically isolated, RS-485/RS-422 data-communications interface solutions. Transceivers, optocouplers, a power driver, and a transformer are in one standard 28-pin PDIP package. Signals and power are internally transported across the isolation barrier (Figure 1). Power is transferred from the logic side (nonisolated side) to the isolated side of the barrier  through a center-tapped transformer. Signals cross the barrier through high-speed optocouplers. A single +3.3V supply on the logic side powers both sides of the interface.

Figure 1. Block Diagram

<!-- image -->

## Table 1. Pullup and LED Drive Resistors

| PART      |   R1 ( Ω ) |   R2 ( Ω ) |   R3 ( Ω ) |   R4 ( Ω ) |   R5 ( Ω ) |   R6 ( Ω ) | R7 ( Ω )   |
|-----------|------------|------------|------------|------------|------------|------------|------------|
| MAX3480EA |        100 |        100 |        680 |       3600 |       1000 |        200 | Open       |
| MAX3480EB |        100 |        100 |       2000 |       3600 |       3600 |        200 | 430        |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

The MAX3480EB features reduced-slew-rate drivers that  minimize EMI and reduce reflections caused by improperly terminated cables, allowing error-free transmission at data rates up to 160kbps. The MAX3480EA's driver slew rates are not limited, allowing transmission rates up to 2.5Mbps.

The frequency-select FS is connected to GND\_ in normal operation, which selects a switching frequency of approximately 600kHz. Connect to high for a higher 900kHz switching frequency.

Drivers are short-circuit current limited and are protected against excessive power dissipation by thermal shutdown circuitry that puts the driver outputs into a high-impedance state. The receiver input has a fail-safe feature that guarantees a logic-high output if the input is open circuit.

The driver outputs are enabled by bringing DE ´ high. Driver-enable  times  are  typically  500ns  for  the MAX3480EA and 1µs for the MAX3480EB. Allow time for  the  devices  to  be  enabled before sending data. When enabled, driver outputs function as line drivers. Driver outputs are high impedance when DE ´ is  low. While outputs are high impedance, they function as line receivers.

Figure 2. Typical Application Circuit

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Test Circuits

<!-- image -->

Figure 3. Driver DC Test Load

Figure 4. Driver/Receiver Timing Test Circuit

<!-- image -->

Figure 5. Driver Timing Test Load

<!-- image -->

## \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Switching Waveforms

Figure 6. Driver Propagation Delays and Transition Times

<!-- image -->

<!-- image -->

Figure 7. Driver Enable and Disable Times

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

## \_\_Switching Waveforms (continued)

Figure 8. Receiver Propagation Delays

<!-- image -->

## Function Tables

The MAX3480EA/MAX3480EB withstand 1260VRMS (1 min) or 1560VRMS (1s). The isolated outputs of these devices meet all RS-485/RS-422 specifications.

## Boost Voltage

The MAX3480EA/MAX3480EB require external diodes on the primary of the transformer to develop the boost voltage for the power oscillator. In normal operation, whenever one of the oscillator outputs (D1 and D2) goes low, the other goes to approximately double the supply voltage. Since the circuit is symmetrical, the two outputs can be combined with diodes, filtered, and used to power the oscillator itself.

The diodes on the primary side may be any fast-switching,  small-signal  diodes, such as the 1N914, 1N4148, or  CMPD2838. The nominal value of the primary filter capacitor C3 is 0.01µF.

## Driver Output Protection

There are two mechanisms to prevent excessive output current and power dissipation caused by faults or by bus contention. A foldback current limit on the output stage provides immediate protection against short circuits over the whole common-mode voltage range (see the Typical Operating Characteristics ).  In  addition,  a thermal shutdown circuit forces the driver outputs into a high-impedance state if the die temperature rises excessively.

Resistor R8 (Figures 1 and 2) provides additional protection by current limiting between the shield and the two signal wires. In the event that shielded cable is used and an external voltage or transient is inadvertently applied between the shield and the signal wires, the MAX3480EA/MAX3480EB can be damaged. Although unlikely, this condition can occur during installation.

The MAX3480EA/MAX3480EB provide electrical isolation between logic ground and signal paths; they do not provide isolation from external shields and the signal paths. When in doubt, do not connect the shield. The MAX3480EA/MAX3480EB can be damaged if resistor R8 is shorted out.

## Applications Information

The MAX3480EA/MAX3480EB provide extra protection against ESD. The MAX3480EA/MAX3480EB are intended for harsh environments where high-speed communication is important. These devices eliminate the need for transient suppressor diodes or the use of discrete protection components. The standard (non-E) MAX3480A/MAX3480B are recommended for applications where cost is critical.

## Table 2. Transmitting

X = Don't care.

| INPUTS   | INPUTS   | OUTPUTS        | OUTPUTS        |
|----------|----------|----------------|----------------|
| DE ´     | DI ´     | B              | A              |
| 1        | 1        | 0              | 1              |
| 1        | 0        | 1              | 0              |
| 0        | X        | High Impedance | High Impedance |

## Table 3. Receiving

| INPUTS   | INPUTS      | OUTPUT    |
|----------|-------------|-----------|
| DE ´     | A-B         | - R - O - |
| 0        | ≥ +0.2V     | 0         |
| 0        | ≤ -0.2V     | 1         |
| 0        | Inputs open | 0         |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

Figure 9. Human Body ESD Test Model

<!-- image -->

## ±15kV ESD Protection

As with all Maxim devices, ESD-protection structures are incorporated on all pins to protect against electrostatic  discharges encountered during handling and assembly. The driver outputs and receiver inputs have extra protection against static electricity. Maxim's engineers developed state-of-the-art structures to protect these pins against ESD of ±15kV without damage. The ESD structures withstand high ESD in all states: normal operation, shutdown, and power-down. After an ESD event, Maxim's MAX3480EA/MAX3480EB keep working without latchup. An isolation capacitor of 270pF 4kV should be placed between ISO COM and logic ground for  optimal  performance against an ESD pulse with respect to logic ground.

ESD protection can be tested in various ways; the transmitter  outputs  and  receiver  inputs  of  this  product family are characterized for protection to ±15kV using the Human Body Model.

## ESD Test Conditions

The +15kV ESD test specifications apply only to the A, B, Y, and Z I/O pins. The test surge may be referenced to either the ISO COM or to the nonisolated GND (this presupposes that a bypass capacitor is installed between VCC2 and the nonisolated GND).

## Human Body Model

Figure 9 shows the Human Body Model, and Figure 10 shows the current waveform it generates when discharged into a low impedance. This model consists of a

<!-- image -->

Figure 10. Human Body Model Current Waveform

<!-- image -->

100pF capacitor charged to the ESD voltage of interest, which is then discharged into the test device through a 1.5k Ω resistor.

## Machine Model

The Machine Model for ESD tests all pins using a 200pF storage capacitor and zero discharge resistance. Its objective is to simulate the stress caused by contact that occurs with handling and assembly during manufacturing. Of course, all pins require this protection during manufacturing-not just inputs and outputs. Therefore, after PC board assembly, the Machine Model is less relevant to l/O ports.

The MAX3480EA/MAX3480EB are designed for bidirectional  data  communications on multipoint bus-transmission lines. Figure 11 shows a typical network application circuit. To minimize reflections, terminate the line at both ends with its characteristic impedance, and keep stub lengths off the main line as short as possible. The slewrate-limited MAX3480EB is more tolerant of imperfect termination and stubs off the main line.

The MAX3480EA/MAX3480EB are specified and characterized using the resistor values shown in Table 1. Altering the recommended values can degrade performance.

The DI and DE inputs are the cathodes of LEDs whose anodes are connected to VCC. These points are best driven by a +3.3V CMOS-logic gate with a series resistor to limit the current. The resistor values shown in Table 1 are recommended when the 74HC240 gate or equivalent is used. DI and DE are intended to be

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

driven through a series current-limiting resistor. Directly grounding these pins destroys the device.

## Reliability

These products contain transformers, optocouplers, and capacitors, in addition to several monolithic ICs and diodes. As such, the reliability expectations more closely represent those of discrete optocouplers, rather than the more robust characteristics of monolithic silicon ICs. The reliability testing programs for these multicomponent devices may be viewed on the Maxim website (www.maxim-ic.com) under Technical Support, Technical Reference, Multichip Products.

Table 4. Maxim's ±15kV ESD-Protected Isolated RS-485 Product Family

| PART      | NO. OF Tx/Rx   |   GUARANTEED DATA RATE (Mbps) | FULL/HALF DUPLEX   | SLEW-RATE LIMITED   |   NO. OF Tx/Rx ONBUS |   SUPPLY VOLTAGE (V) |
|-----------|----------------|-------------------------------|--------------------|---------------------|----------------------|----------------------|
| MAX1480EA | 1/1            |                          2.50 | Half               | No                  |                  128 |                  5.0 |
| MAX1480EC | 1/1            |                          0.25 | Half               | Yes                 |                  128 |                  5.0 |
| MAX1490EA | 1/1            |                          2.50 | Full               | No                  |                   32 |                  5.0 |
| MAX1490EB | 1/1            |                          0.25 | Full               | Yes                 |                   32 |                  5.0 |
| MAX3480EA | 1/1            |                          2.50 | Half               | No                  |                  128 |                  3.3 |
| MAX3480EB | 1/1            |                          0.25 | Half               | Yes                 |                  128 |                  3.3 |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

<!-- image -->

Figure 11. Typical RS-485/RS-422 Network

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## ±15kV ESD-Protected, Isolated, 3.3V RS-485/RS-422 Data Interfaces

## Package Information

(The package drawing(s) in this data sheet may not reflect the most current specifications. For the latest package outline information, go to www.maxim-ic.com/packages .)

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

<!-- image -->