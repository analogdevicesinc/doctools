<!-- lastmod 2022-08-04 -->
<!-- image -->

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## General Description

The  MAX202E-MAX213E, MAX232E, and MAX241E are a family of RS-232 and V.28 transceivers with high ±15kV ESD HBM protection and integrated charge pump circuitry for single +5V supply operation. The various combinations of features are outlined in the Selector Guide . The drivers and  receivers  for  all  ten  devices  meet  all  EIA/TIA-232E and CCITT V.28 specifications at data rates up to 120kbps when loaded.

The MAX211E/MAX213E/MAX241E are available in 28-pin SO and SSOP packages. The MAX202E/MAX232E come in 16-pin TSSOP, narrow SO, wide SO, and DIP packages. The  MAX203E comes in a 20-pin  DIP/SO  package,  and needs no external charge-pump capacitors. The MAX205E comes in a 24-pin wide DIP package, and also eliminates external charge-pump capacitors.

## Applications

- Battery-Powered Equipment
- Hand-Held Equipment
- Portable Diagnostics Equipment

## Selector Guide

|   PART |   NO. OF RS-232 DRIVERS |   NO. OF RS-232 RECEIVERS | RECEIVERS ACTIVE IN SHUTDOWN   | NO. OF EXTERNAL CAPACITORS (μF)   | LOW-POWER SHUTDOWN   | TTL TRI- STATE   |
|--------|-------------------------|---------------------------|--------------------------------|-----------------------------------|----------------------|------------------|
|      2 |                       2 |                         0 | 4 (0.1)                        | No                                | No                   | MAX202E          |
|      2 |                       2 |                         0 | None                           | No                                | No                   | MAX203E          |
|      5 |                       5 |                         0 | None                           | Yes                               | Yes                  | MAX205E          |
|      4 |                       3 |                         0 | 4 (0.1)                        | Yes                               | Yes                  | MAX206E          |
|      5 |                       3 |                         0 | 4 (0.1)                        | No                                | No                   | MAX207E          |
|      4 |                       4 |                         0 | 4 (0.1)                        | No                                | No                   | MAX208E          |
|      4 |                       5 |                         0 | 4 (0.1)                        | Yes                               | Yes                  | MAX211E          |
|      4 |                       5 |                         2 | 4 (0.1)                        | Yes                               | Yes                  | MAX213E          |
|      2 |                       2 |                         0 | 4 (1)                          | No                                | No                   | MAX232E          |
|      4 |                       5 |                         0 | 4 (1)                          | Yes                               | Yes                  | MAX241E          |

19-0175; Rev 8; 1/21

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Click here to ask an associate for production status of specific part numbers.

## MAX202E-MAX213E, MAX232E/MAX241E

## Benefits and Features

- Saves Board Space
- Integrated High ±15kV HBM ESD Protection
- Integrated Charge Pump Circuitry
-  Eliminates the Need for a Bipolar ±12V Supply
- -Enables Single Supply Operation From +5V Supply
- Integrated 0.1μF Capacitors (MAX203E, MAX205E)
- 24 pin SSOP Package Saves up to 40% Versus SO Package
- Saves Power for Reduced Power Requirements
- 1μA Shutdown Mode
- 15μA Shutdown Mode for MAX213E

## Ordering Information

| PART        | TEMP RANGE   | PIN-PACKAGE    |
|-------------|--------------|----------------|
| MAX202E CPE | 0°C to +70°C | 16 Plastic DIP |
| MAX202ECSE  | 0°C to +70°C | 16 Narrow SO   |

Ordering Information continued at end of data sheet.

Pin Configurations and Typical Operating Circuits appear at end of data sheet.

AutoShutdown and UCSP are trademarks of Maxim Integrated Products, Inc.

## MAX202E-MAX213E, MAX232E/MAX241E

## Absolute Maximum Ratings

| V CC ..........................................................................-0.3V to +6V   |
|-----------------------------------------------------------------------------------------------|
| V+.............................................................. (V CC - 0.3V) to +14V        |
| V- ..........................................................................-14V to +0.3V    |
| Input Voltages                                                                                |
| T_IN......................................................... -0.3V to (V+ + 0.3V)            |
| R_IN.................................................................................±30V     |
| Output Voltages                                                                               |
| T_OUT............................................. (V- - 0.3V) to (V+ + 0.3V)                 |
| R_OUT.................................................. -0.3V to (V CC + 0.3V)                |
| Short-Circuit Duration, T_OUT..................................Continuous                     |
| Continuous Power Dissipation (T A = +70°C)                                                    |
| 16-Pin Plastic DIP (derate 10.53mW/°C above +70°C) ... 842mW                                  |
| 16-Pin Narrow SO (derate 8.70mW/°C above +70°C) ..... 696mW                                   |
| 16-Pin Wide SO (derate 9.52mW/°C above +70°C) ... 762mW                                       |
| 16-Pin TSSOP (derate 9.4mW/°C above +70°C) ........ 755mW                                     |

## ±15kV ESD-Protected, 5V RS-232 Transceivers

| 20-Pin Plastic DIP (derate 11.11mW/°C above +70°C) ..... 889mW 20-Pin SO (derate 10.00mW/°C above +70°C) ........... 800mW   |
|------------------------------------------------------------------------------------------------------------------------------|
| 24-Pin Narrow Plastic DIP                                                                                                    |
| (derate 13.33mW/°C above +70°C) .............................. 1.07W                                                         |
| 24-Pin Wide Plastic DIP                                                                                                      |
| (derate 14.29mW/°C above +70°C) .............................. 1.14W                                                         |
| 24-Pin SO (derate 11.76mW/°C above +70°C) ........... 941mW                                                                  |
| 24-Pin SSOP (derate 8.00mW/°C above +70°C) ........ 640mW                                                                    |
| 28-Pin SO (derate 12.50mW/°C above +70°C) .................. 1W                                                              |
| 28-Pin SSOP (derate 9.52mW/°C above +70°C) ........ 762mW                                                                    |
| Operating Temperature Ranges MAX2_ _EC_ _...................................................0°C to +70°C                     |
| MAX2_ _EE_ _............................................... -40°C to +85°C                                                   |
| Storage Temperature Range..............................65°C to +165°C                                                        |
| Lead Temperature (soldering, 10s) .................................+300°C                                                    |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## Electrical Characteristics

(V CC  = +5V ±10% for MAX202E/206E/208E/211E/213E/232E/241E; V CC = +5V ±5% for MAX203E/205E/207E; C1-C4 = 0.1μF for MAX202E/206E/207E/208E/211E/213E; C1-C4 = 1μF for MAX232E/241E; T A  = T MIN  to T MAX ; unless otherwise noted. Typical values are at T A = +25°C.)

| PARAMETER               | SYMBOL             |                                                                                         | CONDITIONS                                                                              | MIN                | TYP                | MAX                | UNITS              |
|-------------------------|--------------------|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|--------------------|--------------------|--------------------|--------------------|
| DC CHARACTERISTICS      | DC CHARACTERISTICS | DC CHARACTERISTICS                                                                      | DC CHARACTERISTICS                                                                      | DC CHARACTERISTICS | DC CHARACTERISTICS | DC CHARACTERISTICS | DC CHARACTERISTICS |
| V CC Supply Current     | I CC               |                                                                                         | MAX202E/203E                                                                            |                    | 8                  | 15                 | mA                 |
| V CC Supply Current     |                    |                                                                                         | MAX205E-208E                                                                            |                    | 11                 | 20                 | mA                 |
| V CC Supply Current     |                    |                                                                                         | MAX211E/213E                                                                            |                    | 14                 | 20                 | mA                 |
| V CC Supply Current     |                    |                                                                                         | MAX232E                                                                                 |                    | 5                  | 10                 | mA                 |
| V CC Supply Current     |                    |                                                                                         | MAX241E                                                                                 |                    | 7                  | 15                 | mA                 |
| Shutdown Supply Current |                    |                                                                                         | MAX205E/206E                                                                            |                    | 1                  | 10                 | μA                 |
| Shutdown Supply Current |                    |                                                                                         | MAX211E/241E                                                                            |                    | 1                  | 10                 | μA                 |
| Shutdown Supply Current |                    |                                                                                         | MAX213E                                                                                 |                    | 15                 | 50                 | μA                 |
| LOGIC                   | LOGIC              | LOGIC                                                                                   | LOGIC                                                                                   | LOGIC              | LOGIC              | LOGIC              | LOGIC              |
| Input Pullup Current    |                    | T_IN = 0V (MAX205E-208E/211E/213E/241E)                                                 | T_IN = 0V (MAX205E-208E/211E/213E/241E)                                                 |                    | 15                 | 200                | μA                 |
| Input Leakage Current   |                    | T_IN = 0V to V CC (MAX202E/203E/232E)                                                   | T_IN = 0V to V CC (MAX202E/203E/232E)                                                   |                    |                    | ±10                | μA                 |
| Input Threshold Low     | V IL               | T_IN; EN, SHDN (MAX213E) or EN , SHDN (MAX205E-208E/211E/241E)                          | T_IN; EN, SHDN (MAX213E) or EN , SHDN (MAX205E-208E/211E/241E)                          |                    |                    | 0.8                | V                  |
| Input Threshold High    | V                  | T_IN                                                                                    | T_IN                                                                                    | 2.0                |                    |                    | V                  |
| Input Threshold High    | IH                 | EN, SHDN (MAX213E) or EN , SHDN (MAX205E-208E/211E/241E)                                | EN, SHDN (MAX213E) or EN , SHDN (MAX205E-208E/211E/241E)                                | 2.4                |                    |                    | V                  |
| Output-Voltage Low      | V OL               | R_OUT; I OUT = 3.2mA (MAX202E/203E/232E) or I OUT = 1.6mA (MAX205E/208E/211E/213E/241E) | R_OUT; I OUT = 3.2mA (MAX202E/203E/232E) or I OUT = 1.6mA (MAX205E/208E/211E/213E/241E) |                    |                    | 0.4                | V                  |
| Output-Voltage High     | V OH               | R_OUT; I OUT = -1.0mA                                                                   | R_OUT; I OUT = -1.0mA                                                                   | 3.5                | V CC - 0.4         |                    | V                  |
| Output Leakage Current  |                    | EN = V CC , EN = 0V, 0V ≤ R OUT ≤ V CC , MAX205E-208E/211E/213E/241E outputs disabled   | EN = V CC , EN = 0V, 0V ≤ R OUT ≤ V CC , MAX205E-208E/211E/213E/241E outputs disabled   |                    | ±0.05              | ±10                | μA                 |

## MAX202E-MAX213E, MAX232E/MAX241E

## Electrical Characteristics (continued)

(V CC  = +5V ±10% for MAX202E/206E/208E/211E/213E/232E/241E; V CC = +5V ±5% for MAX203E/205E/207E; C1-C4 = 0.1μF for MAX202E/206E/207E/208E/211E/213E; C1-C4 = 1μF for MAX232E/241E; T A  = T MIN  to T MAX ; unless otherwise noted. Typical values are at T A = +25°C.)

| PARAMETER                                             | SYMBOL                                                |                                                                                                                  | CONDITIONS                                                                                                       | MIN                                                   | TYP                                                   | MAX                                                   | UNITS                                                 |
|-------------------------------------------------------|-------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|-------------------------------------------------------|
| EIA/TIA-232E RECEIVER INPUTS                          | EIA/TIA-232E RECEIVER INPUTS                          | EIA/TIA-232E RECEIVER INPUTS                                                                                     | EIA/TIA-232E RECEIVER INPUTS                                                                                     | EIA/TIA-232E RECEIVER INPUTS                          | EIA/TIA-232E RECEIVER INPUTS                          | EIA/TIA-232E RECEIVER INPUTS                          | EIA/TIA-232E RECEIVER INPUTS                          |
| Input Voltage                                         |                                                       | Range                                                                                                            | Range                                                                                                            | -30                                                   |                                                       | 30                                                    | V                                                     |
| Input Threshold Low                                   |                                                       | T A = +25°C, V CC = 5V                                                                                           | All parts, normal operation                                                                                      | 0.8                                                   | 1.2                                                   |                                                       | V                                                     |
|                                                       |                                                       | T A = +25°C, V CC = 5V                                                                                           | MAX213E, SHDN = 0V, EN = V CC                                                                                    | 0.6                                                   | 1.5                                                   |                                                       | V                                                     |
| High                                                  |                                                       | T A = +25°C, V CC = 5V                                                                                           | All parts, normal operation                                                                                      |                                                       | 1.7                                                   | 2.4                                                   | V                                                     |
| Input Threshold                                       |                                                       | T A = +25°C, V CC = 5V                                                                                           | MAX213E (R4, R5), SHDN = 0V, EN = V CC                                                                           |                                                       | 1.5                                                   | 2.4                                                   | V                                                     |
| Input Hysteresis                                      |                                                       | V CC = 5V, no hysteresis in shutdown                                                                             | V CC = 5V, no hysteresis in shutdown                                                                             | 0.2                                                   | 0.5                                                   | 1.0                                                   | V                                                     |
| Input Resistance                                      |                                                       | T A = +25°C, V CC = 5V                                                                                           | T A = +25°C, V CC = 5V                                                                                           | 3                                                     | 5                                                     | 7                                                     | kΩ                                                    |
| EIA/TIA-232E TRANSMITTER OUTPUTS                      | EIA/TIA-232E TRANSMITTER OUTPUTS                      | EIA/TIA-232E TRANSMITTER OUTPUTS                                                                                 | EIA/TIA-232E TRANSMITTER OUTPUTS                                                                                 | EIA/TIA-232E TRANSMITTER OUTPUTS                      | EIA/TIA-232E TRANSMITTER OUTPUTS                      | EIA/TIA-232E TRANSMITTER OUTPUTS                      | EIA/TIA-232E TRANSMITTER OUTPUTS                      |
| Output Voltage Swing                                  |                                                       | All drivers loaded with 3kΩ to ground (Note 1)                                                                   | All drivers loaded with 3kΩ to ground (Note 1)                                                                   | ±5                                                    | ±9                                                    |                                                       | V                                                     |
| Output Resistance                                     |                                                       | V CC = V+ = V- = 0V, V OUT = ±2V                                                                                 | V CC = V+ = V- = 0V, V OUT = ±2V                                                                                 | 300                                                   |                                                       |                                                       | Ω                                                     |
| Output Short-Circuit Current                          |                                                       |                                                                                                                  |                                                                                                                  |                                                       | ±10                                                   | ±60                                                   | mA                                                    |
| TIMING CHARACTERISTICS                                | TIMING CHARACTERISTICS                                | TIMING CHARACTERISTICS                                                                                           | TIMING CHARACTERISTICS                                                                                           | TIMING CHARACTERISTICS                                | TIMING CHARACTERISTICS                                | TIMING CHARACTERISTICS                                | TIMING CHARACTERISTICS                                |
| Maximum Data Rate                                     |                                                       | R L = 3kΩ to 7kΩ, C L = 50pF to 1000pF, one transmitter switching                                                | R L = 3kΩ to 7kΩ, C L = 50pF to 1000pF, one transmitter switching                                                | 120                                                   |                                                       |                                                       | kbps                                                  |
| Receiver Propagation Delay                            | t PLHR t PHLR                                         |                                                                                                                  | All parts, normal operation                                                                                      |                                                       | 0.5                                                   | 10                                                    | µs                                                    |
| Receiver Output Enable Time                           | ,                                                     |                                                                                                                  | MAX213E (R4, R5), SHDN = 0V, EN = V CC                                                                           |                                                       | 4 600                                                 | 40                                                    | ns                                                    |
| Receiver Output Disable Time                          |                                                       | MAX205E/206E/211E/213E/241E normal operation, Figure 2                                                           | MAX205E/206E/211E/213E/241E normal operation, Figure 2                                                           |                                                       | 200                                                   |                                                       | ns                                                    |
| Transmitter Propagation Delay                         |                                                       | MAX205E/206E/211E/213E/241E normal operation, Figure 2                                                           | MAX205E/206E/211E/213E/241E normal operation, Figure 2                                                           |                                                       | 2                                                     |                                                       |                                                       |
|                                                       | t PLHT , t PHLT                                       | R L = 3kΩ, C L = 2500pF, all transmitters loaded                                                                 | R L = 3kΩ, C L = 2500pF, all transmitters loaded                                                                 |                                                       |                                                       |                                                       | µs                                                    |
| Transition-Region Slew Rate                           |                                                       | T A = +25°C, V CC = 5V, R L = 3kΩ to 7kΩ, C L = 50pF to 1000pF, measured from -3V to +3V or +3V to -3V, Figure 3 | T A = +25°C, V CC = 5V, R L = 3kΩ to 7kΩ, C L = 50pF to 1000pF, measured from -3V to +3V or +3V to -3V, Figure 3 | 3                                                     | 6                                                     | 30                                                    | V/μs                                                  |
| ESD PERFORMANCE: TRANSMITTER OUTPUTS, RECEIVER INPUTS | ESD PERFORMANCE: TRANSMITTER OUTPUTS, RECEIVER INPUTS | ESD PERFORMANCE: TRANSMITTER OUTPUTS, RECEIVER INPUTS                                                            | ESD PERFORMANCE: TRANSMITTER OUTPUTS, RECEIVER INPUTS                                                            | ESD PERFORMANCE: TRANSMITTER OUTPUTS, RECEIVER INPUTS | ESD PERFORMANCE: TRANSMITTER OUTPUTS, RECEIVER INPUTS | ESD PERFORMANCE: TRANSMITTER OUTPUTS, RECEIVER INPUTS | ESD PERFORMANCE: TRANSMITTER OUTPUTS, RECEIVER INPUTS |
| ESD-Protection Voltage                                |                                                       | Human Body Model                                                                                                 | Human Body Model                                                                                                 |                                                       | ±15                                                   |                                                       | kV                                                    |
|                                                       |                                                       | IEC1000-4-2, Contact Discharge                                                                                   | IEC1000-4-2, Contact Discharge                                                                                   |                                                       | ±8                                                    |                                                       | kV                                                    |
|                                                       |                                                       | IEC1000-4-2, Air-Gap Discharge                                                                                   | IEC1000-4-2, Air-Gap Discharge                                                                                   |                                                       | ±15                                                   |                                                       | kV                                                    |

Note 1: MAX211EE\_ \_ tested with V CC  = +5V ±5%.

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## MAX202E-MAX213E, MAX232E/MAX241E

## Typical Operating Characteristics

<!-- image -->

<!-- image -->

<!-- image -->

## ±15kV ESD-Protected, 5V RS-232 Transceivers

MAX211E/MAX213E/MAX241E TRANSMITTER SLEW RATE vs. LOAD CAPACITANCE

<!-- image -->

│

<!-- image -->

## MAX202E-MAX213E, MAX232E/MAX241E

## Typical Operating Characteristics (continued)

<!-- image -->

<!-- image -->

OUTPUT VOLTAGE (V)

MAX205E-MAX208E SUPPLY CURRENT vs. LOAD CAPACITANCE

<!-- image -->

## ±15kV ESD-Protected, 5V RS-232 Transceivers

<!-- image -->

MAX205E-MAX208E TRANSMITTER SLEW RATE vs. LOAD CAPACITANCE

<!-- image -->

│

## Pin Descriptions

## MAX202E/MAX232E

| PIN          | PIN          | NAME     | FUNCTION                                     |
|--------------|--------------|----------|----------------------------------------------|
| DIP/SO/TSSOP | LCC          | NAME     | FUNCTION                                     |
| 1, 3         | 2, 4         | C1+, C1- | Terminals for Positive Charge-Pump Capacitor |
| 2            | 3            | V+       | +2V CC Voltage Generated by the Charge Pump  |
| 4, 5         | 5, 7         | C2+, C2- | Terminals for Negative Charge-Pump Capacitor |
| 6            | 8            | V        | -2V CC Voltage Generated by the Charge Pump  |
| 7, 14        | 9, 18        | T_OUT    | RS-232 Driver Outputs                        |
| 8, 13        | 10, 17       | R_IN     | RS-232 Receiver Inputs                       |
| 9, 12        | 12, 15       | R_OUT    | RS-232 Receiver Outputs                      |
| 10, 11       | 13, 14       | T_IN     | RS-232 Driver Inputs                         |
| 15           | 19           | GND      | Ground                                       |
| 16           | 20           | V CC     | +4.5V to +5.5V Supply-Voltage Input          |
| -            | 1, 6, 11, 16 | N.C.     | No Connection-Not Internally Connected       |

## MAX203E

| PIN    | PIN    | NAME   |                                                                     |
|--------|--------|--------|---------------------------------------------------------------------|
| DIP    | SO     | NAME   | FUNCTION                                                            |
| 1, 2   | 1, 2   | T_IN   | RS-232 Driver Inputs                                                |
| 3, 20  | 3, 20  | R_OUT  | RS-232 Receiver Outputs                                             |
| 4,19   | 4, 19  | R_IN   | RS-232 Receiver Inputs                                              |
| 5,18   | 5, 18  | T_OUT  | RS-232 Transmitter Outputs                                          |
| 6, 9   | 6, 9   | GND    | Ground                                                              |
| 7      | 7      | V CC   | +4.5V to +5.5V Supply-Voltage Input                                 |
| 8      | 13     | C1+    | Make no connection to this pin.                                     |
| 10, 16 | 11, 16 | C2-    | Connect pins together.                                              |
| 12, 17 | 10, 17 | V-     | -2V CC Voltage Generated by the Charge Pump. Connect pins together. |
| 13     | 14     | C1-    | Make no connection to this pin.                                     |
| 14     | 8      | V+     | +2V CC Voltage Generated by the Charge Pump                         |
| 11, 15 | 12, 15 | C2+    | Connect pins together.                                              |

## MAX205E

| PIN               | NAME   | FUNCTION                                                           |
|-------------------|--------|--------------------------------------------------------------------|
| 1-4, 19           | T_OUT  | RS-232 Driver Outputs                                              |
| 5, 10, 13, 18, 24 | R_IN   | RS-232 Receiver Inputs                                             |
| 6, 9, 14, 17, 23  | R_OUT  | TTL/CMOS Receiver Outputs. All receivers are inactive in shutdown. |
| 7, 8, 15, 16, 22  | T_IN   | TTL/CMOS Driver Inputs. Internal pullups to V CC .                 |
| 11                | GND    | Ground                                                             |
| 12                | V CC   | +4.75V to +5.25V Supply Voltage                                    |
| 20                | EN     | Receiver Enable-Active Low                                         |
| 21                | SHDN   | Shutdown Control-Active High                                       |

## MAX202E-MAX213E, MAX232E/MAX241E

## Pin Descriptions (continued)

## MAX206E

| PIN          | NAME     | FUNCTION                                                           |
|--------------|----------|--------------------------------------------------------------------|
| 1, 2, 3, 24  | T_OUT    | RS-232 Driver Outputs                                              |
| 4, 16, 23    | R_IN     | RS-232 Receiver Inputs                                             |
| 5, 17, 22    | R_OUT    | TTL/CMOS Receiver Outputs. All receivers are inactive in shutdown. |
| 6, 7, 18, 19 | T_IN     | TTL/CMOS Driver Inputs. Internal pullups to V CC .                 |
| 8            | GND      | Ground                                                             |
| 9            | V CC     | +4.5V to +5.5V Supply Voltage                                      |
| 10, 12       | C1+, C1- | Terminals for Positive Charge-Pump Capacitor                       |
| 11           | V+       | +2V CC Generated by the Charge Pump                                |
| 13, 14       | C2+, C2- | Terminals for Negative Charge-Pump Capacitor                       |
| 15           | V-       | -2V CC Generated by the Charge Pump                                |
| 20           | EN       | Receiver Enable-Active Low                                         |
| 21           | SHDN     | Shutdown Control-Active High                                       |

## MAX207E

| PIN              | NAME     | FUNCTION                                                           |
|------------------|----------|--------------------------------------------------------------------|
| 1, 2, 3, 20, 24  | T_OUT    | RS-232 Driver Outputs                                              |
| 4, 16, 23        | R_IN     | RS-232 Receiver Inputs                                             |
| 5, 17, 22        | R_OUT    | TTL/CMOS Receiver Outputs. All receivers are inactive in shutdown. |
| 6, 7, 18, 19, 21 | T_IN     | TTL/CMOS Driver Inputs. Internal pullups to V CC .                 |
| 8                | GND      | Ground                                                             |
| 9                | V CC     | +4.75V to +5.25V Supply Voltage                                    |
| 10, 12           | C1+, C1- | Terminals for Positive Charge-Pump Capacitor                       |
| 11               | V+       | +2V CC Generated by the Charge Pump                                |
| 13, 14           | C2+, C2- | Terminals for Negative Charge-Pump Capacitor                       |
| 15               | V-       | -2V CC Generated by the Charge Pump                                |

## MAX208E

| PIN           | NAME     | FUNCTION                                                           |
|---------------|----------|--------------------------------------------------------------------|
| 1, 2, 20, 24  | T_OUT    | RS-232 Driver Outputs                                              |
| 3, 7, 16, 23  | R_IN     | RS-232 Receiver Inputs                                             |
| 4, 6, 17, 22  | R_OUT    | TTL/CMOS Receiver Outputs. All receivers are inactive in shutdown. |
| 5, 18, 19, 21 | T_IN     | TTL/CMOS Driver Inputs. Internal pullups to V CC .                 |
| 8             | GND      | Ground                                                             |
| 9             | V CC     | +4.5V to +5.5V Supply Voltage                                      |
| 10, 12        | C1+, C1- | Terminals for Positive Charge-Pump Capacitor                       |
| 11            | V+       | +2V CC Generated by the Charge Pump                                |
| 13, 14        | C2+, C2- | Terminals for Negative Charge-Pump Capacitor                       |
| 15            | V-       | -2V CC Generated by the Charge Pump                                |

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## MAX202E-MAX213E, MAX232E/MAX241E

## Pin Descriptions (continued)

## MAX211E/MAX213E/MAX241E

Figure 1. Shutdown-Current Test Circuit (MAX206E, MAX211E/MAX213E/MAX241E)

| PIN              | NAME     | FUNCTION                                                                                                                                                                      |
|------------------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1, 2, 3, 28      | VT_OUT   | RS-232 Driver Outputs                                                                                                                                                         |
| 4, 9, 18, 23, 27 | R_IN     | RS-232 Receiver Inputs                                                                                                                                                        |
| 5, 8, 19, 22, 26 | R_OUT    | TTL/CMOS Receiver Outputs. For the MAX213E, receivers R4 and R5 are active in shutdown mode when EN = 1. For the MAX211E and MAX241E, all receivers are inactive in shutdown. |
| 6, 7, 20, 21     | T_IN     | TTL/CMOS Driver Inputs. Only the MAX211E, MAX213E, and MAX241E have internal pullups to V CC                                                                                  |
| 10               | GND      | Ground                                                                                                                                                                        |
| 11               | V CC     | +4.5V to +5.5V Supply Voltage                                                                                                                                                 |
| 12, 14           | C1+, C1- | Terminals for Positive Charge-Pump Capacitor                                                                                                                                  |
| 13               | V+       | +2V CC Voltage Generated by the Charge Pump                                                                                                                                   |
| 15, 16           | C2+, C2- | Terminals for Negative Charge-Pump Capacitor                                                                                                                                  |
| 17               | V-       | -2V CC Voltage Generated by the Charge Pump                                                                                                                                   |
| 24               | EN       | Receiver Enable-Active Low (MAX211E, MAX241E)                                                                                                                                 |
| 24               | EN       | Receiver Enable-Active High (MAX213E)                                                                                                                                         |
| 25               | SHDN     | Shutdown Control-Active High (MAX211E, MAX241E)                                                                                                                               |
| 25               | SHDN     | Shutdown Control-Active Low (MAX213E)                                                                                                                                         |

<!-- image -->

Figure 2. Receiver Output Enable and Disable Timing (MAX205E/MAX206E/MAX211E/MAX213E/MAX241E)

<!-- image -->

│

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## MAX202E-MAX213E, MAX232E/MAX241E

## ±15kV ESD-Protected, 5V RS-232 Transceivers

Figure 3. Transition Slew-Rate Circuit

<!-- image -->

## Detailed Description

The  MAX202E-MAX213E,  MAX232E/MAX241E  consist of three sections: charge-pump voltage converters, drivers (transmitters),  and  receivers. These E versions pro -vide  extra  protection  against  ESD.  They  survive  ±15kV discharges  to  the  RS-232  inputs  and  outputs,  tested using  the  Human  Body  Model.  When  tested  according to  IEC1000-4-2,  they  survive  ±8kV  contact-discharges and  ±15kV  air-gap  discharges.  The  rugged  E  versions are  intended  for  use  in  harsh  environments  or  applications where the RS-232 connection is frequently changed (such  as  notebook  computers).  The  standard  (non'E')  MAX202,  MAX203,  MAX205-MAX208,  MAX211, MAX213, MAX232, and MAX241 are recommended for applications where cost is critical.

## +5V to ±10V Dual Charge-Pump Voltage Converter

The +5V to ±10V conversion is performed by dual chargepump  voltage  converters  (Figure  4).  The  first  chargepump converter uses capacitor C1 to double the +5V into +10V, storing the +10V on the output filter capacitor, C3.

The second uses C2 to invert the +10V into -10V, storing the -10V on the V- output filter capacitor, C4.

In shutdown mode, V+ is internally connected to V CC  by a 1kΩ pull-down resistor, and V- is internally connected to ground by a 1kΩ pull up resistor.

## RS-232 Drivers

With V CC  = 5V, the typical driver output voltage swing is ±8V when loaded with a nominal 5kΩ RS-232 receiver. The  output  swing  is  guaranteed  to  meet  EIA/TIA-232E and V.28 specifications that call for ±5V minimum output levels under worst-case conditions. These include a 3kΩ load,  minimum  V CC ,  and  maximum  operating  temperature.  The  open-circuit  output  voltage  swings  from  (V+  0.6V) to V-.

Input thresholds are CMOS/TTL compatible. The unused drivers'  inputs  on  the  MAX205E-MAX208E,  MAX211E, MAX213E,  and  MAX241E  can  be  left  unconnected because 400kΩ pull up resistors to V CC are included onchip. Since all drivers invert, the pull up resistors force the unused drivers'  outputs  low.  The  MAX202E,  MAX203E, and  MAX232E  do  not  have  pull  up  resistors  on  the transmitter inputs.

│

## MAX202E-MAX213E, MAX232E/MAX241E

## ±15kV ESD-Protected, 5V RS-232 Transceivers

Figure 4. Charge-Pump Diagram

<!-- image -->

When  in  low-power  shutdown  mode,  the  MAX205E/ MAX206E/MAX211E/MAX213E/MAX241E driver outputs are  turned  off  and  draw  only  leakage  currents-even  if they are back-driven with voltages between 0V and12V. Below -0.5V in shutdown, the transmitter output is diodeclamped to ground with a 1kΩ series impedance.

## RS-232 Receivers

The receivers convert the RS-232 signals to CMOS-logic output  levels.  The  guaranteed  0.8V  and  2.4V  receiver input  thresholds  are  significantly  tighter  than  the  ±3V thresholds  required  by  the  EIA/TIA-232E  specification. This allows the receiver inputs to respond to TTL/CMOSlogic levels, as well as RS-232 levels.

The  guaranteed  0.8V  input  low  threshold  ensures  that receivers  shorted  to  ground  have  a  logic  1  output.  The 5kΩ input  resistance  to  ground  ensures  that  a  receiver with its input left open will also have a logic 1 output.

Receiver inputs have approximately 0.5V hysteresis. This provides clean output transitions, even with slow rise/falltime signals with moderate amounts of noise and ringing. In shutdown, the MAX213E's R4 and R5 receivers have no hysteresis.

## Shutdown and Enable Control (MAX205E/MAX206E/MAX211E/ MAX213E/MAX241E)

In shutdown mode, the charge pumps are turned off, V+ is  pulled  down  to  V CC ,  V-  is  pulled  to  ground,  and  the transmitter  outputs  are  disabled.  This  reduces  supply current  typically  to  1μA  (15μA  for  the  MAX213E).  The time required to exit shutdown is under 1ms, as shown in Figure 5.

## Receivers

All MAX213E receivers, except R4 and R5, are put into a high-impedance state in shutdown mode (see Tables 1a and 1b). The MAX213E's R4 and R5 receivers still func -tion  in  shutdown  mode.  These  two  awake-in-shutdown receivers can monitor external activity while maintaining minimal power consumption.

The  enable  control  is  used  to  put  the  receiver  outputs into a high-impedance state, to allow wire-OR connection of two EIA/TIA-232E ports (or ports of different types) at the UART. It has no effect on the RS-232 drivers or the charge pumps.

Note: The  enable  control  pin  is  active  low  for  the MAX211E/MAX241E  (EN),  but  is  active  high  for  the MAX213E  (EN).  The  shutdown  control  pin  is  active

│

## MAX202E-MAX213E, MAX232E/MAX241E

high  for  the  MAX205E/MAX206E/MAX211E/MAX241E (SHDN), but is active low for the MAX213E ( SHDN ).

The  MAX213E's  receiver  propagation  delay  is  typically 0.5μs in normal operation. In shutdown mode, propaga -tion  delay  increases  to  4μs  for  both  rising  and  falling transitions. The MAX213E's receiver inputs have approximately 0.5V hysteresis, except in shutdown, when receivers R4 and R5 have no hysteresis.

When entering shutdown with receivers active, R4 and R5 are not valid until 80μs after SHDN is  driven low. When coming out of shutdown, all receiver outputs are invalid until the charge pumps reach nominal voltage levels (less than 2ms when using 0.1μF capacitors).

## ±15kV ESD Protection

As with all Maxim devices, ESD-protection structures are incorporated  on  all  pins  to  protect  against  electro-static discharges  encountered  during  handling  and  assembly.  The  driver  outputs  and  receiver  inputs  have  extra protection  against  static  electricity.  Maxim's  engineers developed  state-of-the-art  structures  to  protect  these pins  against  ESD  of  ±15kV  without  damage.  The  ESD structures  withstand  high  ESD  in  all  states:  normal operation,  shutdown,  and  powered  down. After  an  ESD event, Maxim's E versions keep working without latchup, whereas competing RS-232 products can latch and must be powered down to remove latchup.

ESD protection can be tested in various ways; the transmitter  outputs  and  receiver  inputs  of  this  product  family are characterized for protection to the following limits:

- 1) ±15kV using the Human Body Model
- 2) ±8kV using the contact-discharge method specified in IEC1000-4-2
- 3) ±15kV using IEC1000-4-2's air-gap method.

## ESD Test Conditions

ESD  performance  depends  on  a  variety  of  conditions. Contact Maxim for a reliability report that documents test set-up, test methodology, and test results.

## Human Body Model

Figure  6a  shows  the  Human  Body  Model,  and  Figure 6b  shows  the  current  waveform  it  generates  when  discharged into a low impedance. This model consists of a 100pF capacitor charged to the ESD voltage of interest, which is  then  discharged  into  the  test  device  through  a 1.5kΩ resistor.

## ±15kV ESD-Protected, 5V RS-232 Transceivers

Figure 5. MAX211E V+ and V- when Exiting Shutdown (0.1μF capacitors)

<!-- image -->

## Table 1a. MAX205E/MAX206E/MAX211E/ MAX241E Control Pin Configurations

X = Don't care.

|   SHDN | EN   | OPERATION STATUS   | T x        | R x        |
|--------|------|--------------------|------------|------------|
|      0 | 0    | Normal Operation   | All Active | All Active |
|      0 | 1    | Normal Operation   | All Active | All High-Z |
|      1 | X    | Shutdown           | All High-Z | All High-Z |

## Table 1b. MAX213E Control Pin Configurations

*Active = active with reduced performance

| SHDN   | EN   | OPERATION STATUS   | T x 1-4    | R x    | R x     |
|--------|------|--------------------|------------|--------|---------|
| SHDN   | EN   | OPERATION STATUS   | T x 1-4    | 1-3    | 4, 5    |
| 0      | 0    | Shutdown           | All High-Z | High-Z | High-Z  |
| 0      | 1    | Shutdown           | All High-Z | High-Z | Active* |
| 1      | 0    | Normal Operation   | All Active | High-Z | High-Z  |
| 1      | 1    | Normal Operation   | All Active | Active | Active  |

│

## MAX202E-MAX213E, MAX232E/MAX241E

Figure 6a. Human Body ESD Test Model

<!-- image -->

Figure 7a. IEC1000-4-2 ESD Test Model

<!-- image -->

## IEC1000-4-2

The IEC1000-4-2 standard covers ESD testing and performance  of  finished  equipment;  it  does  not  specifically refer  to  integrated  circuits.  The  MAX202E/MAX203EMAX213E, MAX232E/MAX241E help you design equipment that meets level 4 (the highest level) of IEC10004-2,  without  the  need  for  additional  ESD-protection components.

The  major  difference  between  tests  done  using  the Human Body Model and IEC1000-4-2 is higher peak current in IEC1000-4-2, because series resistance is lower in  the  IEC1000-4-2  model.  Hence,  the  ESD  withstand voltage measured to IEC1000-4-2 is generally lower than that measured using the Human Body Model. Figure 7b shows  the  current  waveform  for  the  8kV  IEC1000-4-2 level-four ESD contact-discharge test.

## ±15kV ESD-Protected, 5V RS-232 Transceivers

Figure 6b. Human Body Model Current Waveform

<!-- image -->

Figure 7b. IEC1000-4-2 ESD Generator Current Waveform

<!-- image -->

The air-gap test involves approaching the device with a charged probe. The contact-discharge method connects the probe to the device before the probe is energized.

## Machine Model

The Machine Model for ESD tests all pins using a 200pF storage  capacitor  and  zero  discharge  resistance.  Its objective is to emulate the stress caused by contact that occurs with handling and assembly during manufacturing. Of  course,  all  pins  require  this  protection  during  manufacturing, not just RS-232 inputs and outputs. Therefore, after PC board assembly, the Machine Model is less relevant to I/O ports.

│

## MAX202E-MAX213E, MAX232E/MAX241E

## Applications Information

## Capacitor Selection

The  capacitor  type  used  for  C1-C4  is  not  critical  for proper  operation.  The  MAX202E,  MAX206-MAX208E, MAX211E, and MAX213E require 0.1μF capacitors, and the  MAX232E  and  MAX241E  require  1μF  capacitors, although in all cases capacitors up to 10μF can be used without harm. Ceramic, aluminum-electrolytic, or tantalum capacitors  are  suggested  for  the  1μF  capacitors,  and ceramic dielectrics  are  suggested  for  the  0.1μF  capaci -tors.  When  using  the  minimum  recommended  capaci -tor  values,  make  sure  the  capacitance  value  does  not degrade excessively as the operating temperature varies. If in doubt, use capacitors with a larger (e.g., 2x) nominal value. The capacitors' effective series resistance (ESR), which  usually  rises  at  low  temperatures,  influences  the amount of ripple on V+ and V-.

Use  larger  capacitors  (up  to  10μF)  to  reduce  the  out -put  impedance  at  V+  and  V-.  This  can  be  useful  when 'stealing' power from V+ or from V-. The MAX203E and MAX205E have internal charge-pump capacitors.

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## V+ and V- as Power Supplies

A small amount of power can be drawn from V+ and V-, although  this  will  reduce  both  driver  output  swing  and noise margins. Increasing the value of the charge-pump capacitors (up to 10μF) helps maintain performance when power is drawn from V+ or V-.

## Driving Multiple Receivers

Each  transmitter  is  designed  to  drive  a  single  receiver. Transmitters can be paralleled to drive multiple receivers.

## Driver Outputs when Exiting Shutdown

The  driver  outputs  display  no  ringing  or  undesirable transients as they come out of shutdown.

## High Data Rates

These transceivers maintain the RS-232 ±5.0V minimum driver output voltages at data rates of over 120kbps. For data rates above 120kbps, refer to the Transmitter Output Voltage  vs.  Load  Capacitance  graphs  in  the Typical Operating Characteristics .  Communication at these high rates is easier if the capacitive loads on the transmitters are small; i.e., short cables are best.

Bypass V CC to ground with at least 0.1μF. In applications sensitive to power-supply noise generated by the charge pumps,  decouple  V CC   to  ground  with  a  capacitor  the same size as (or larger than) the charge-pump capacitors (C1-C4).

Table 2. Summary of EIA/TIA-232E, V.28 Specifications

| PARAMETER                        | 0 Level                          | CONDITIONS EIA/TIA-232E, V.28 SPECIFICATIONS   | Driver Output Voltage                          |
|----------------------------------|----------------------------------|------------------------------------------------|------------------------------------------------|
| 3kΩ to 7kΩ load                  | +5V to +15V                      | 1 Level                                        | 3kΩ to 7kΩ load                                |
| 3kΩ to 7kΩ load                  | -5V to -15V No                   | Driver Output Level, Max                       | load ±25V                                      |
| Data Rate                        | 3kΩ 0 Level                      | ≤ 7kΩ, C L ≤ 2500pF Up to 20kbps               | ≤ R L Receiver Input Voltage                   |
|                                  |                                  | +3V to +15V                                    | 1 Level                                        |
|                                  | -3V to -15V                      | ±25V                                           |                                                |
|                                  | Instantaneous Slew Rate, Max 3kΩ | ≤ 7kΩ, C L ≤ 2500pF 30V/μs                     | ≤ R L Driver Output Short-Circuit Current, Max |
| 100mA                            | V.28                             |                                                | 1ms or 3% of the period                        |
| Transition Rate on Driver Output | Transition Rate on Driver Output | EIA/TIA-232E                                   | 4% of the period                               |
| -2V < V OUT < +2V                | -2V < V OUT < +2V                | 300Ω                                           |                                                |

│

## MAX202E-MAX213E, MAX232E/MAX241E

Table 3. DB9 Cable Connections Commonly Used for EIA/TIA-232E and V.24 Asynchronous Interfaces

|   PIN | EIA/TIA-232E, V.28 SPECIFICATIONS                                    | EIA/TIA-232E, V.28 SPECIFICATIONS   |
|-------|----------------------------------------------------------------------|-------------------------------------|
|     1 | Received Line Signal Detector (sometimes called Carrier Detect, DCD) | Handshake from DCE                  |
|     2 | Receive Data (RD)                                                    | Data from DCE                       |
|     3 | Transmit Data (TD)                                                   | Data from DTE                       |
|     4 | Data Terminal Ready                                                  | Handshake from DTE                  |
|     5 | Signal Ground                                                        | Reference point for Signals         |
|     6 | Data Set Ready (DSR)                                                 | Handshake from DCE                  |
|     7 | Request to Send (RTS)                                                | Handshake from DTE                  |
|     8 | Clear to Send (CTS)                                                  | Handshake from DCE                  |
|     9 | Ring Indicator                                                       | Handshake from DCE                  |

## Pin Configurations and Typical Operating Circuits (continued)

<!-- image -->

│

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## MAX202E-MAX213E, MAX232E/MAX241E

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## Pin Configurations and Typical Operating Circuits (continued)

<!-- image -->

│

## Pin Configurations and Typical Operating Circuits (continued)

<!-- image -->

│

## Pin Configurations and Typical Operating Circuits (continued)

<!-- image -->

│

## Pin Configurations and Typical Operating Circuits (continued)

<!-- image -->

│

## Pin Configurations and Typical Operating Circuits (continued)

<!-- image -->

│

## MAX202E-MAX213E, MAX232E/MAX241E

## Pin Configurations and Typical Operating Circuits (continued)

<!-- image -->

│

## MAX202E-MAX213E, MAX232E/MAX241E

## Ordering Information (continued)

| PART        | TEMP RANGE     | PIN-PACKAGE           |
|-------------|----------------|-----------------------|
| MAX202ECUE  | 0°C to +70°C   | 16 TSSOP              |
| MAX202ECWE  | 0°C to +70°C   | 16 Wide SO            |
| MAX202EC/D  | 0°C to +70°C   | Dice*                 |
| MAX202EEPE  | -40°C to +85°C | 16 Plastic DIP        |
| MAX202EESE  | -40°C to +85°C | 16 Narrow SO          |
| MAX202EEUE  | -40°C to +85°C | 16 TSSOP              |
| MAX202EEWE  | -40°C to +85°C | 16 Wide SO            |
| MAX203E CPP | 0°C to +70°C   | 20 Plastic DIP        |
| MAX203ECWP  | 0°C to +70°C   | 20 SO                 |
| MAX203EEPP  | -40°C to +85°C | 20 Plastic DIP        |
| MAX203EEWP  | -40°C to +85°C | 20 SO                 |
| MAX205E CPG | 0°C to +70°C   | 24 Wide Plastic DIP   |
| MAX205EEPG  | -40°C to +85°C | 24 Wide Plastic DIP   |
| MAX206E CNG | 0°C to +70°C   | 24 Narrow Plastic DIP |
| MAX206ECWG  | 0°C to +70°C   | 24 SO                 |
| MAX206ECAG  | 0°C to +70°C   | 24 SSOP               |
| MAX206EENG  | -40°C to +85°C | 24 Narrow Plastic DIP |
| MAX206EEWG  | -40°C to +85°C | 24 SO                 |
| MAX206EEAG  | -40°C to +85°C | 24 SSOP               |
| MAX207E CNG | 0°C to +70°C   | 24 Narrow Plastic DIP |
| MAX207ECWG  | 0°C to +70°C   | 24 SO                 |
| MAX207ECAG  | 0°C to +70°C   | 24 SSOP               |
| MAX207EENG  | -40°C to +85°C | 24 Narrow Plastic DIP |
| MAX207EEWG  | -40°C to +85°C | 24 SO                 |
| MAX207EEAG  | -40°C to +85°C | 24 SSOP               |

## ±15kV ESD-Protected, 5V RS-232 Transceivers

| PART        | TEMP RANGE     | PIN-PACKAGE           |
|-------------|----------------|-----------------------|
| MAX208E CNG | 0°C to +70°C   | 24 Narrow Plastic DIP |
| MAX208ECWG  | 0°C to +70°C   | 24 SO                 |
| MAX208ECAG  | 0°C to +70°C   | 24 SSOP               |
| MAX208EENG  | -40°C to +85°C | 24 Narrow Plastic DIP |
| MAX208EEWG  | -40°C to +85°C | 24 SO                 |
| MAX208EEAG  | -40°C to +85°C | 24 SSOP               |
| MAX211E CWI | 0°C to +70°C   | 28 SO                 |
| MAX211ECAI  | 0°C to +70°C   | 28 SSOP               |
| MAX211EEWI  | -40°C to +85°C | 28 SO                 |
| MAX211EEAI  | -40°C to +85°C | 28 SSOP               |
| MAX213E CWI | 0°C to +70°C   | 28 SO                 |
| MAX213ECAI  | 0°C to +70°C   | 28 SSOP               |
| MAX213EEWI  | -40°C to +85°C | 28 SO                 |
| MAX213EEAI  | -40°C to +85°C | 28 SSOP               |
| MAX232E CPE | 0°C to +70°C   | 16 Plastic DIP        |
| MAX232ECSE  | 0°C to +70°C   | 16 Narrow SO          |
| MAX232ECWE  | 0°C to +70°C   | 16 Wide SO            |
| MAX232EC/D  | 0°C to +70°C   | Dice*                 |
| MAX232EEPE  | -40°C to +85°C | 16 Plastic DIP        |
| MAX232EESE  | -40°C to +85°C | 16 Narrow SO          |
| MAX232EEWE  | -40°C to +85°C | 16 Wide SO            |
| MAX241E CWI | 0°C to +70°C   | 28 SO                 |
| MAX241ECAI  | 0°C to +70°C   | 28 SSOP               |
| MAX241EEWI  | -40°C to +85°C | 28 SO                 |
| MAX241EEAI  | -40°C to +85°C | 28 SSOP               |

*Dice are specified at T A  = +25°C.

│

## MAX202E-MAX213E, MAX232E/MAX241E

## Package Information

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

<!-- image -->

│

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## MAX202E-MAX213E, MAX232E/MAX241E

## Package Information (continued)

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

<!-- image -->

│

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## MAX202E-MAX213E, MAX232E/MAX241E

## Package Information (continued)

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

<!-- image -->

│

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## MAX202E-MAX213E, MAX232E/MAX241E

## Package Information (continued)

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

<!-- image -->

│

## ±15kV ESD-Protected, 5V RS-232 Transceivers

## MAX202E-MAX213E, MAX232E/MAX241E

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                 |   PAGES CHANGED |
|-------------------|-----------------|-----------------------------|-----------------|
|                 8 | 1/21            | Updated Package information |              25 |

<!-- image -->

Information furnished by Analog Devices is believed to be accurate and reliable. However, no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use.Specifications subMect to change without notice. No license is granted by implicationor otherwise under any patent or patent rights of Analog Devices. Trademarks andregistered trademarks are the property of their respective owners.

│

## ±15kV ESD-Protected, 5V RS-232 Transceivers