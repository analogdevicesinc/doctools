<!-- lastmod 2023-05-22 -->
<!-- image -->

## FEATURES

- n Low Operating I Q : 28μA (One Channel On)
- n Dual Buck Plus Single Boost Synchronous Controllers
- n Outputs Remain in Regulation Through Cold Crank Down to 2.5V
- n Wide Bias Input Voltage Range: 4.5V to 38V
- n Buck Output Voltage Range: 0.8V ≤ V OUT  ≤ 24V
- n Boost Output Voltage Up to 60V
- n RSENSE  or DCR Current Sensing
- n 100% Duty Cycle for Boost Synchronous MOSFET Even in Burst Mode ® Operation
- n Phase-Lockable Frequency (75kHz to 850kHz)
- n Programmable Fixed Frequency (50kHz to 900kHz)
- n Selectable Continuous, Pulse-Skipping or Low Ripple Burst Mode Operation at Light Loads
- n Very Low Buck Dropout Operation: 99% Duty Cycle
- n Adjustable Output Voltage Soft-Start or T racking
- n Low Shutdown I Q : 10μA
- n Small 38-Lead 5mm × 7mm QFN and TSSOP Packages
- n AEC-Q100 Qualified for Automotive Applications

## APPLICATIONS

- n Automotive Always-On and Start-Stop Systems
- n Battery Operated Digital Devices
- n Distributed DC Power Systems
- n Multioutput Buck-Boost Applications

## TYPICAL APPLICATION

<!-- image -->

## Triple Output, Buck/Buck/Boost Synchronous Controller with 28µA Burst Mode IQ

## DESCRIPTION

The LTC ® 3859AL is  a  high  performance  triple  output  (buck/ buck/boost)  synchronous  DC/DC  switching  regulator controller that  drives  all  N-channel  power  MOSFET  stages. Constant  frequency  current  mode  architecture  allows a phase-lockable switching frequency of up to 850kHz. The LTC3859AL operates from a wide 4.5V to 38V input supply range. When biased from the output of the boost converter or another auxiliary supply, the LTC3859AL can operate from an input supply as low as 2.5V after start-up.

The 28μA no-load quiescent current extends operating runtime in battery powered systems. OPTI-LOOP compensation allows the transient response to be optimized over a wide range of output capacitance and ESR values. The LTC3859AL features a precision 0.8V reference for the bucks, 1.2V reference for the boost and a power good output  indicator.  The  PLLIN/MODE  pin  selects  among Burst Mode operation, pulse-skipping mode, or continuous inductor current mode at light loads.

Compared  to  the  LTC3859  and  the  LTC3859A,  the LTC3859AL is fully pin-compatible, but with lower Burst Mode operation I Q  (28µA with one channel on).

All registered trademarks and trademarks are the property of their respective owners. Protected by U.S. Patents including 5481178, 5705919, 5929620, 6144194, 6177787, 6580258.

## Efficiency and Power Loss vs Output Current

<!-- image -->

3859al TA01b

## ABSOLUTE MAXIMUM RATINGS (Note 1)

| Bias Input Supply Voltage (V BIAS )..............                                                    | -0.3V to 40V                                     |
|------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| Buck Top Side Driver Voltages (BOOST1, BOOST2) .............................                         | -0.3V to 46V                                     |
| Boost Top Side Driver Voltages (BOOST3) ............................................                 | -0.3V to 76V                                     |
| Buck Switch Voltage (SW1, SW2)                                                                       | ................-5V to 40V                       |
| Boost Switch Voltage (SW3)                                                                           | ........................-5V to 70V               |
| INTV CC , (BOOST1-SW1), (BOOST2-SW2), (BOOST3-SW3)...........                                        | -0.3V to 6V                                      |
| RUN1, RUN2, RUN3                                                                                     | .................................... -0.3V to 8V |
| Maximum Current Sourced Into Pin from Source >8V ..............................................100µA |                                                  |

## PIN CONFIGURATION

<!-- image -->

| SENSE1 + , SENSE2 + , SENSE1 - SENSE2 -                                                                                      |
|------------------------------------------------------------------------------------------------------------------------------|
| Voltages ..................................... -0.3V to 28V                                                                  |
| SENSE3 + , SENSE3 - Voltages..................... -0.3V to 40V                                                               |
| FREQ Voltages ......................................-0.3V to INTV CC                                                         |
| EXTV CC ...................................................... -0.3V to 14V                                                  |
| I TH1 , I TH2 , I TH3 , V FB1 , V FB2 , V FB3 Voltages.... -0.3V to 6V PLLIN/MODE, PGOOD1, OV3 Voltages ........ -0.3V to 6V |
| TRACK/SS2, SS3 Voltages ..... -0.3V to                                                                                       |
| TRACK/SS1, 6V                                                                                                                |
| Operating Junction Temperature Range (Notes 2, 3) LTC3859ALE, LTC3859ALI ................-40°C to 125°C                      |
| LTC3859ALH .....................................-40°C to 150°C                                                               |
| LTC3859ALMP................................... -55°C to 150°C                                                                |
| Storage Temperature Range ..............-65°C to 150°C                                                                       |

<!-- image -->

## ORDER INFORMATION

| LEAD FREE FINISH      | TAPE AND REEL         | PART MARKING*         | PACKAGE DESCRIPTION             | TEMPERATURE RANGE     |
|-----------------------|-----------------------|-----------------------|---------------------------------|-----------------------|
| LTC3859ALEFE#PBF      | LTC3859ALEFE#TRPBF    | LTC3859ALFE           | 38-Lead Plastic TSSOP           | -40°C to 125°C        |
| LTC3859ALIFE#PBF      | LTC3859ALIFE#TRPBF    | LTC3859ALFE           | 38-Lead Plastic TSSOP           | -40°C to 125°C        |
| LTC3859ALHFE#PBF      | LTC3859ALHFE#TRPBF    | LTC3859ALFE           | 38-Lead Plastic TSSOP           | -40°C to 150°C        |
| LTC3859ALMPFE#PBF     | LTC3859ALMPFE#TRPBF   | LTC3859ALFE           | 38-Lead Plastic TSSOP           | -55°C to 150°C        |
| LTC3859ALEUHF#PBF     | LTC3859ALEUHF#TRPBF   | 3859AL                | 38-Lead (5mm × 7mm) Plastic QFN | -40°C to 125°C        |
| LTC3859ALIUHF#PBF     | LTC3859ALIUHF#TRPBF   | 3859AL                | 38-Lead (5mm × 7mm) Plastic QFN | -40°C to 125°C        |
| LTC3859ALHUHF#PBF     | LTC3859ALHUHF#TRPBF   | 3859AL                | 38-Lead (5mm × 7mm) Plastic QFN | -40°C to 150°C        |
| LTC3859ALMPUHF#PBF    | LTC3859ALMPUHF#TRPBF  | 3859AL                | 38-Lead (5mm × 7mm) Plastic QFN | -55°C to 150°C        |
| AUTOMOTIVE PRODUCTS** | AUTOMOTIVE PRODUCTS** | AUTOMOTIVE PRODUCTS** | AUTOMOTIVE PRODUCTS**           | AUTOMOTIVE PRODUCTS** |
| LTC3859ALIUHF#WPBF    | LTC3859ALIUHF#WTRPBF  | 3859AL                | 38-Lead (5mm × 7mm) Plastic QFN | -40°C to 125°C        |
| LTC3859ALHUHF#WPBF    | LTC3859ALHUHF#WTRPBF  | 3859AL                | 38-Lead (5mm × 7mm) Plastic QFN | -40°C to 150°C        |

Contact the factory for parts specified with wider operating temperature ranges. *The temperature grade is identified by a label on the shipping container.

Tape and reel specifications. Some packages are available in 500 unit reels through designated sales channels with #TRMPBF suffix

**Versions of this part are available with controlled manufacturing to support the quality and reliability requirements of automotive applications. These models are designated with a #W suffix. Only the automotive grade products shown are available for use in automotive applications. Contact your local Analog Devices account representative for specific product ordering information and to obtain the specific Automotive Reliability reports for these models.

ELECTRICAL CHARACTERISTICS denotes the specifications which apply over the specified operating

The l junction temperature range, otherwise specifications are at T A  = 25°C. V BIAS  = 12V, V RUN1,2,3  = 5V, EXTV CC  = 0V unless otherwise noted. (Note 2)

<!-- image -->

<!-- image -->

| SYMBOL     | PARAMETER                                 | CONDITIONS                                                                                              |     | MIN               | TYP               | MAX               | UNITS   |
|------------|-------------------------------------------|---------------------------------------------------------------------------------------------------------|-----|-------------------|-------------------|-------------------|---------|
| V BIAS     | Bias Input Supply Operating Voltage Range |                                                                                                         |     | 4.5               |                   | 38                | V       |
| V FB1,2    | Buck Regulated Feedback Voltage           | (Note 4); I TH1,2 Voltage = 1.2V 0°C to 85°C, All Grades LTC3859ALE, LTC3859ALI LTC3859ALH, LTC3859ALMP | l l | 0.792 0.788 0.786 | 0.800 0.800 0.800 | 0.808 0.812 0.812 | V V V   |
| V FB3      | Boost Regulated Feedback Voltage          | (Note 4); I TH3 Voltage = 1.2V 0°C to 85°C, All Grades LTC3859ALE, LTC3859ALI LTC3859ALH, LTC3859ALMP   | l l | 1.183 1.181 1.176 | 1.200 1.200 1.200 | 1.214 1.218 1.218 | V V V   |
| I FB1,2,3  | Feedback Current                          | (Note 4)                                                                                                |     |                   | -2                | ±50               | nA      |
| V REFLNREG | Reference Voltage Line Regulation         | (Note 4); V BIAS = 4.5V to 38V                                                                          |     |                   | 0.002             | 0.02              | %/V     |
| V LOADREG  | Output Voltage Load Regulation            | (Note 4)                                                                                                |     |                   |                   |                   |         |
| V LOADREG  |                                           | Measured in Servo Loop; D I TH Voltage = 1.2V to 0.7V                                                   | l   |                   | 0.01              | 0.1               | %       |
| V LOADREG  |                                           | Measured in Servo Loop; D I TH Voltage = 1.2V to 2V                                                     | l   |                   | -0.01             | -0.1              | %       |
| g m1,2,3   | Transconductance Amplifier g m            | (Note 4); I TH1,2,3 = 1.2V; Sink/Source 5µA                                                             |     |                   | 2                 |                   | mmho    |

<!-- image -->

## ELECTRICAL CHARACTERISTICS

The l denotes the specifications which apply over the specified operating junction temperature range, otherwise specifications are at T A  = 25°C. V BIAS  = 12V, V RUN1,2,3  = 5V, EXTV CC  = 0V unless otherwise noted. (Note 2)

| SYMBOL                | PARAMETER                                                            | CONDITIONS                                                                                                                      |     | MIN       | TYP       | MAX       | UNITS   |
|-----------------------|----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|-----|-----------|-----------|-----------|---------|
| I Q                   | Input DC Supply Current                                              | (Note 5)                                                                                                                        |     |           |           |           |         |
| I Q                   | Pulse-Skipping or Forced Continuous Mode (One Channel On)            | RUN1 = 5V and RUN2,3 = 0V or RUN2 = 5V and RUN1,3 = 0V or RUN3 = 5V and RUN1,2 = 0V V FB1, 2 ON = 0.83V (No Load) V FB3 = 1.25V |     |           | 1.5       |           | mA      |
| I Q                   | Pulse-Skipping or Forced Continuous Mode (All Channels On)           | RUN1,2,3 = 5V, V FB1,2 = 0.83V (No Load) V FB3 = 1.25V                                                                          |     |           | 3         |           | mA      |
| I Q                   | Sleep Mode (One Channel On, Buck)                                    | RUN1 = 5V and RUN2,3 = 0V or RUN2 = 5V and RUN1,3 = 0V V FB,ON = 0.83V (No Load)                                                | l l |           | 28 35     | 48 59     | µA      |
| I Q                   | Sleep Mode (One Channel On, Boost)                                   | RUN3 = 5V and RUN1,2 = 0V V FB3 = 1.25V                                                                                         |     |           | 33        | 53        | µA      |
| I Q                   | Sleep Mode (Buck and Boost Channel On)                               | RUN1 = 5V and RUN2 = 0V or RUN2 = 5V and RUN1 = 0V RUN3 = 5V V FB1,2 = 0.83V (No Load) V FB3 = 1.25V                            |     |           | 33 40     | 46 59     | µA      |
| I Q                   | Sleep Mode (All Three Channels On)                                   | RUN1,2,3 = 5V, V FB1,2 = 0.83V (No Load) V FB3 = 1.25V                                                                          |     |           | 38        | 56        | µA      |
| I Q                   | Shutdown                                                             | RUN1,2,3 = 0V                                                                                                                   |     |           | 10        | 20        | µA      |
| UVLO                  | Undervoltage Lockout                                                 | INTV CC Ramping Up                                                                                                              | l   |           | 4.15      | 4.5       | V       |
| V OVL1,2              | Buck Feedback Overvoltage Protection                                 | Measured at V FB1,2 Relative to Regulated V FB1,2                                                                               |     | 7         | 10        | 13        | %       |
| I SENSE1,2 +          | SENSE + Pin Current                                                  | Bucks (Channels 1 and 2)                                                                                                        |     |           |           | ±1        | µA      |
| I SENSE3 +            | SENSE + Pin Current                                                  | Boost (Channel 3)                                                                                                               |     |           | 170       |           | µA      |
| I SENSE1,2 -          | SENSE - Pin Current                                                  | Bucks (Channels 1 and 2) V OUT1,2 < V INTVCC - 0.5V V OUT1,2 > V INTVCC + 0.5V                                                  |     |           | 700       | ±2        | µA µA   |
| I SENSE3 -            | SENSE - Pin Current                                                  | Boost (Channel 3) V SENSE3 +, V SENSE3 - = 12V                                                                                  |     |           |           | ±1        | µA      |
| DF MAX,TG             | Maximum Duty Factor for TG                                           | Bucks (Channels 1,2) in Dropout, FREQ = 0V Boost (Channel 3) in Overvoltage                                                     |     | 98        | 99 100    |           | % %     |
| DF MAX,BG             | Maximum Duty Factor for BG                                           | Bucks (Channels 1,2) in Overvoltage Boost (Channel 3)                                                                           |     |           | 100 96    |           | % %     |
| I TRACK/SS1,2         | Soft-Start Charge Current                                            | V TRACK/SS1,2 = 0V                                                                                                              |     | 3         | 5         | 8         | µA      |
| I SS3                 | Soft-Start Charge Current                                            | V SS3 = 0V                                                                                                                      |     | 3         | 5         | 8         | µA      |
| V RUN1 ON V RUN2,3 ON | RUN1 Pin Threshold RUN2,3 Pin Threshold                              | V RUN1 Rising V RUN2,3 Rising                                                                                                   | l l | 1.18 1.21 | 1.24 1.27 | 1.32 1.33 | V V     |
| V RUN1,2,3 Hyst       | RUN Pin Hysteresis                                                   |                                                                                                                                 |     |           | 70        |           | mV      |
| V SENSE1,2,3(MAX)     | Maximum Current Sense Threshold                                      | V FB1,2 = 0.7V, V SENSE1,2 - = 3.3V V FB1,2,3 = 1.1V, V SENSE3 + = 12V                                                          | l   | 43        | 50        | 57        | mV      |
| V SENSE3(CM)          | SENSE3 Pins Common Mode Range (BOOST Converter Input Supply Voltage) |                                                                                                                                 |     | 2.5       |           | 38        | V       |

ELECTRICAL CHARACTERISTICS The l denotes the specifications which apply over the specified operating junction temperature range, otherwise specifications are at T A  = 25°C. V BIAS  = 12V, V RUN1,2,3  = 5V, EXTV CC  = 0V unless otherwise noted. (Note 2)

| SYMBOL                  | PARAMETER                                                             | CONDITIONS                                                         |                                         |    | MIN   | TYP     | MAX   | UNITS   |
|-------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------|-----------------------------------------|----|-------|---------|-------|---------|
| Gate Driver             |                                                                       |                                                                    |                                         |    |       |         |       |         |
| TG1,2                   | Pull-Up On-Resistance Pull-Down On-Resistance                         |                                                                    |                                         |    |       | 2.5 1.5 |       | Ω Ω     |
| BG1,2                   | Pull-Up On-Resistance Pull-Down On-Resistance                         |                                                                    |                                         |    |       | 2.4 1.1 |       | Ω Ω     |
| TG3                     | Pull-Up On-Resistance Pull-Down On-Resistance                         |                                                                    |                                         |    |       | 1.2 1.0 |       | Ω Ω     |
| BG3                     | Pull-Up On-Resistance Pull-Down On-Resistance                         |                                                                    |                                         |    |       | 1.2 1.0 |       | Ω Ω     |
| TG1,2,3 t r TG1,2,3 t f | TG Transition Time: Rise Time Fall Time                               | (Note 6) C LOAD = 3300pF C LOAD = 3300pF                           |                                         |    |       | 25 16   |       | ns ns   |
| BG1,2,3 t r BG1,2,3 t f | BG Transition Time: Rise Time Fall Time                               | (Note 6) C LOAD = 3300pF C LOAD = 3300pF                           |                                         |    |       | 28 13   |       | ns ns   |
| TG/BG t 1D              | Top Gate Off to Bottom Gate On Delay Synchronous Switch-On Delay Time | C LOAD = 3300pF Each Driver                                        | Bucks (Channels 1, 2) Boost (Channel 3) |    |       | 30 70   |       | ns ns   |
| BG/TG t 1D              | Bottom Gate Off to Top Gate On Delay Top Switch-On Delay Time         | C LOAD = 3300pF Each Driver                                        | Bucks (Channels 1, 2) Boost (Channel 3) |    |       | 30 70   |       | ns ns   |
| INTV CC Linear          | Regulator                                                             |                                                                    |                                         |    |       |         |       |         |
| V INTVCCVBIAS           | Internal V CC Voltage                                                 | 6V < V BIAS < 38V, V EXTVCC = 0V, I INTVCC =                       | 0mA                                     |    | 5.0   | 5.4     | 5.6   | V       |
| V LDOVBIAS              | INTV CC Load Regulation                                               | I CC = 0mA to 50mA, V EXTVCC                                       | = 0V                                    |    |       | 0.7     | 2     | %       |
| V INTVCCEXT             | Internal V CC Voltage                                                 | 6V < V EXTVCC < 13V, I INTVCC =                                    | 0mA                                     |    | 5.0   | 5.4     | 5.6   | V       |
| V LDOEXT                | INTV CC Load Regulation                                               | I CC = 0mA to 50mA, V EXTVCC =                                     | 8.5V                                    |    |       | 0.7     | 2     | %       |
| V EXTVCC                | EXTV CC Switchover Voltage                                            | EXTV CC Ramping Positive                                           |                                         |    | 4.5   | 4.7     |       | V       |
| V LDOHYS                | EXTV CC Hysteresis                                                    |                                                                    |                                         |    |       | 200     |       | mV      |
| Oscillator and          | Phase-Locked Loop                                                     |                                                                    |                                         |    |       |         |       |         |
| f 25k                   | Programmable Frequency                                                | R FREQ = 25k; PLLIN/MODE = DC Voltage                              |                                         |    |       | 115     |       | kHz     |
| f 65k                   | Programmable Frequency                                                | R FREQ = 65k; PLLIN/MODE = DC                                      | Voltage                                 |    |       | 440     |       | kHz     |
| f 105k                  | Programmable Frequency                                                | R FREQ = 105k; PLLIN/MODE = DC Voltage                             |                                         |    |       | 835     |       | kHz     |
| f LOW                   | Low Fixed Frequency                                                   | V FREQ = 0V PLLIN/MODE = DC                                        | Voltage                                 |    | 320   | 350     | 380   | kHz     |
| f HIGH                  | High Fixed Frequency                                                  | V FREQ = INTV CC ; PLLIN/MODE = DC                                 | Voltage                                 |    | 485   | 535     | 585   | kHz     |
| f SYNC                  | Synchronizable Frequency                                              | PLLIN/MODE = External Clock                                        |                                         | l  | 75    |         | 850   | kHz     |
| PGOOD1 Output           |                                                                       |                                                                    |                                         |    |       |         |       |         |
| V PGL1                  | PGOOD1 Voltage Low                                                    | I PGOOD1 = 2mA                                                     |                                         |    |       | 0.2     | 0.4   | V       |
| I PGOOD1                | PGOOD1 Leakage Current                                                | V PGOOD1 = 5V                                                      |                                         |    |       |         | ±1    | µA      |
| V PG1                   | PGOOD1 Trip Level                                                     | V FB1 with Respect to Set Regulated Voltage V FB1 Ramping Negative |                                         |    | -13   | -10     | -7    | %       |
|                         |                                                                       | Hysteresis                                                         |                                         |    |       | 2.5     |       | %       |
|                         |                                                                       | V FB1 Ramping Positive                                             |                                         |    | 7     | 10      | 13    | %       |
|                         |                                                                       | Hysteresis                                                         |                                         |    |       | 2.5     |       | %       |

Rev. D

## ELECTRICAL CHARACTERISTICS

The l denotes the specifications which apply over the specified operating junction temperature range, otherwise specifications are at T A  = 25°C. V BIAS  = 12V, V RUN1,2,3  = 5V, EXTV CC  = 0V unless otherwise noted. (Note 2)

| SYMBOL                                 | PARAMETER                                   | CONDITIONS                                                   | TYP                                    | MAX                                    | UNITS                                  |                                        |
|----------------------------------------|---------------------------------------------|--------------------------------------------------------------|----------------------------------------|----------------------------------------|----------------------------------------|----------------------------------------|
| T PG1                                  | Delay For Reporting a Fault                 |                                                              | 40                                     |                                        | µs                                     |                                        |
| OV3 Boost Overvoltage Indicator Output | OV3 Boost Overvoltage Indicator Output      | OV3 Boost Overvoltage Indicator Output                       | OV3 Boost Overvoltage Indicator Output | OV3 Boost Overvoltage Indicator Output | OV3 Boost Overvoltage Indicator Output | OV3 Boost Overvoltage Indicator Output |
| V OV3L                                 | OV3 Voltage Low                             | I OV3 = 2mA                                                  | 0.2                                    | 0.4                                    | V                                      |                                        |
| I OV3                                  | OV3 Leakage Current                         | V OV3 = 5V                                                   |                                        | ±1                                     | µA                                     |                                        |
| V OV                                   | OV3 Trip Level                              | V FB3 Ramping Positive with Respect to Set Regulated Voltage | 10                                     | 13                                     | %                                      |                                        |
|                                        |                                             | Hysteresis                                                   | 1.5                                    |                                        | %                                      |                                        |
| BOOST3 Charge Pump                     | BOOST3 Charge Pump                          | BOOST3 Charge Pump                                           | BOOST3 Charge Pump                     | BOOST3 Charge Pump                     | BOOST3 Charge Pump                     | BOOST3 Charge Pump                     |
| I BST3                                 | BOOST3 Charge Pump Available Output Current | V BOOST3 = 16V; V SW3 = 12V; Forced Continuous Mode          | 65                                     |                                        | µA                                     |                                        |

Note 1: Stresses beyond those listed under Absolute Maximum Ratings may cause permanent damage to the device. Exposure to any Absolute Maximum Rating condition for extended periods may affect device reliability and lifetime.

Note 2: The LTC3859AL is tested under pulsed load conditions such that T J  ≈ T A . The LTC3859ALE is guaranteed to meet performance specifications from 0°C to 85°C. Specifications over the -40°C to 125°C operating junction temperature range are assured by design, characterization and correlation with statistical process controls. The LTC3859ALI is guaranteed over the -40°C to 125°C operating junction temperature range, the LTC3859ALH is guaranteed over the -40°C to 150°C operating junction temperature range and the LTC3859ALMP is tested and guaranteed over the -55°C to 150°C operating junction temperature range. High junction temperatures degrade operating lifetimes; operating lifetime is derated for junction temperatures greater than 125°C. Note that the maximum ambient temperature consistent with these specifications is determined by specific operating conditions in conjunction with board layout, the rated package thermal impedance and other environmental factors. T J  is calculated from the ambient temperature T A and power dissipation P D  according to the following formula: T J  = T A  + (P D · q JA ), where q JA  = 34.7°C/W for the QFN package and q JA  = 25°C/W for the TSSOP package.

Note 3: This IC includes overtermperature protection that is intended to protect the device during momentary overload conditions. The maximum rated junction temperature will be exceeded when this protection is active. Continuous operation above the specified absolute maximum operating junction temperature may impair device reliability or permanently damage the device.

Note 4: The LTC3859AL is tested in a feedback loop that servos V ITH1,2,3 to a specified voltage and measures the resultant V FB . The specification at 85°C is not tested in production and is assured by design, characterization and correlation to production testing at other temperatures (125°C for the LTC3859ALE/LTC3859ALI, 150°C for the LTC3859ALH/LTC3859ALMP). For the LTC3859ALI and LTC3859ALH, the specification at 0°C is not tested in production and is assured by design, characterization and correlation to production testing at -40°C. For the LTC3859ALMP, the specification at 0°C is not tested in production and is assured by design, characterization and correlation to production testing at -55°C.

Note 5: Dynamic supply current is higher due to the gate charge being delivered at the switching frequency. See the Applications Information section.

Note 6: Rise and fall times are measured using 10% and 90% levels. Delay times are measured using 50% levels.

Note 7: The minimum on-time condition is specified for an inductor peak-to-peak ripple current ≥ 40% of I MAX  (See the Minimum On-Time Considerations in the Applications Information section).

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Inductor Current at Light Load (Buck)

<!-- image -->

<!-- image -->

Buck Regulated Feedback Voltage vs Temperature

<!-- image -->

3859al G09

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Rev. D

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

SENSE Pins Total Input Current vs V SENSE  Voltage

<!-- image -->

Maximum Current Sense Threshold vs Duty Cycle

<!-- image -->

3859al G25

<!-- image -->

3859al G20

Buck SENSE -  Pin Input Bias Current vs Temperature

<!-- image -->

3859al G23

Maximum Current Sense Threshold vs I TH  Voltage

<!-- image -->

3859al G26

EXTVCC  Switchover and INTV CC Voltages vs Temperature

<!-- image -->

3859al G21

Boost SENSE Pin Total Input Current vs Temperature

<!-- image -->

TRACK/SS Pull-Up Current vs Temperature

<!-- image -->

3859al G27

Rev. D

<!-- image -->

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Buck Foldback Current Limit

<!-- image -->

Shutdown (RUN) Threshold vs Temperature

<!-- image -->

<!-- image -->

3859al G34

<!-- image -->

Oscillator Frequency vs Temperature

<!-- image -->

3859al G32

Charge Pump Charging Current vs Operating Frequency

<!-- image -->

3859al G35

<!-- image -->

3859al G30

Undervoltage Lockout Threshold vs Temperature

<!-- image -->

3859al G33

Charge Pump Charging Current vs Switch Voltage

<!-- image -->

3859al G36

Rev. D

## PIN FUNCTIONS (QFN/TSSOP)

FREQ (Pin 1/Pin 5): The Frequency Control Pin for the Internal VCO. Connecting the pin to GND forces the VCO to a fixed low frequency of 350kHz. Connecting the pin to  INTV CC   forces  the  VCO to a fixed high frequency of 535kHz. Other frequencies between 50kHz and 900kHz can be programmed using a resistor between FREQ and GND. The resistor and an internal 20µA source current create a voltage used by the internal oscillator to set the frequency.

PLLIN/MODE  (Pin  2/Pin  6): External  Synchronization Input  to  Phase  Detector  and  Forced  Continuous  Mode Input. When an external clock is applied to this pin, the phase-locked loop will force the rising TG1 signal to be synchronized with the rising edge of the external clock, and the regulators operate in forced continuous mode. When not synchronizing to an external clock, this input, which acts on all three controllers, determines how the LTC3859AL operates at light  loads.  Pulling  this  pin  to ground selects Burst Mode operation. An internal 100k resistor  to  ground  also  invokes  Burst  Mode  operation when the pin is floated. Tying this pin to INTV CC  forces continuous inductor current operation. Tying this pin to a voltage greater than 1.2V and less than INTV CC  - 1.3V selects  pulse-skipping  operation.  This  can  be  done  by connecting a 100k resistor from this pin to INTV CC .

SGND (Pin 8/Pin 12): Small Signal Ground common to all three controllers, must be routed separately from high current grounds to the common (-) terminals of the C IN capacitors.

RUN1, RUN2, RUN3 (Pins 9, 10, 11/Pins 13, 14, 15): Digital  Run Control Inputs for Each Controller. Forcing RUN1 below 1.17V and RUN2/RUN3 below 1.20V shuts down that controller. Forcing all of these pins below 0.7V shuts down the entire LTC3859AL, reducing quiescent current to approximately 10µA.

OV3  (Pin  17/Pin  21): Overvoltage  Open-Drain  Logic Output for the Boost Regulator. OV3 is pulled to ground when the voltage on the V FB3  pin is under 110% of its set point, and becomes high impedance when V FB3  goes over 110% of its set point.

INTV CC   (Pin  22/Pin  26): Output  of  the  Internal  Linear Low Dropout Regulator. The driver and control circuits are powered from this voltage source. Must be decoupled to PGND with a minimum of 4.7µF ceramic or tantalum capacitor.

EXTVCC  (Pin 23/Pin 27): External Power Input to an Internal LDO Connected to INTV CC . This LDO supplies INTV CC power, bypassing the internal LDO powered from V BIAS whenever EXTV CC  is higher than 4.7V. See EXTV CC  Connection in the Applications Information section. Do not float or exceed 14V on this pin.

VBIAS   (Pin  24/Pin  28): Main  Bias  Input  Supply  Pin.  A bypass capacitor should be tied between this pin and the SGND pin.

BG1, BG2, BG3 (Pins 29, 21, 25/Pins 33, 25, 29): High Current Gate Drives for Bottom (Synchronous) N-Channel MOSFETs. Voltage swing at these pins is from ground to INTV CC .

BOOST1, BOOST2, BOOST3 (Pins 30, 20, 26/Pins 34, 24, 30): Bootstrapped Supplies to the Top Side Floating Drivers.  Capacitors  are  connected  between  the  BOOST  and SW pins and Schottky diodes are tied between the BOOST and INTV CC  pins. Voltage swing at the BOOST pins is from INTV CC  to (V IN + INTV CC ).

SW1, SW2, SW3 (Pins 31, 19, 28/Pins  35,  23,  32): Switch Node Connections to Inductors.

TG1, TG2, TG3 (Pins 32, 18, 27/Pins 36, 22, 31): High Current  Gate  Drives  for  Top  N-Channel  MOSFETs.  These  are the outputs of floating drivers with a voltage swing equal to INTV CC  superimposed on the switch node voltage SW.

PGOOD1  (Pin  33/Pin  37): Open-Drain  Logic  Output. PGOOD1 is pulled to ground when the voltage on the V FB1 pin is not within ±10% of its set point.

## PIN FUNCTIONS (QFN/TSSOP)

TRACK/SS1, TRACK/SS2, SS3 (Pins 34, 16, 3/Pins 38, 20, 7): External  T racking  and  Soft-Start  Input.  For  the  buck channels, the LTC3859AL regulates the V FB1,2  voltage to the smaller of 0.8V, or the voltage on the TRACK/SS1,2 pin. For the boost channel, the LTC3859AL regulates the VFB3  voltage to the smaller of 1.2V, or the voltage on the SS3 pin. An internal 5µA pull-up current source is connected to this pin. A capacitor to ground at this pin sets the ramp time to final regulated output voltage. Alternatively, a resistor  divider  on  another  voltage  supply  connected  to  the TRACK/SS pins of the buck channels allow the LTC3859AL buck outputs to track the other supply during start-up.

I TH1 ,  I TH2 ,  I TH3   (Pins  35,  15,  7/Pins 1, 19, 11): Error Amplifier Outputs and Switching Regulator Compensation Points. Each associated channel's current comparator trip point increases with this control voltage.

VFB1 , V FB2 ,  V FB3   (Pins  36,  14,  6/Pins  2,  18,  10): Receives the remotely sensed feedback voltage for each controller from an external resistive divider across the output.

SENSE1 + ,  SENSE2 + ,  SENSE3 + (Pins  37,  13,  4/Pins  3,  17,  8): The  (+)  Input  to  the  Differential  Current  Comparators. The I TH   pin  voltage  and controlled offsets between the SENSE -   and  SENSE + pins  in  conjunction  with  R SENSE set the current trip threshold.  For the boost channel, the SENSE3 +  pin supplies current to the current comparator.

SENSE1 - , SENSE2 - , SENSE3 (Pins 38, 12, 5/Pins 4, 16, 9): The (-) Input to the Differential Current Comparators. When SENSE1,2 -  for the buck channels is greater than INTV CC , then SENSE1,2 -pin supplies current to the current comparator.

PGND (Exposed Pad Pin 39): Driver Power Ground. Connects  to  the  sources  of  bottom  N-channel  MOSFETs  and  the (-) terminal(s) of C IN . The exposed pad must be soldered to the PCB for rated electrical and thermal performance.

## FUNCTIONAL DIAGRAM

<!-- image -->

Rev. D

## FUNCTIONAL DIAGRAM

<!-- image -->

## OPERATION (Refer to Functional Diagram)

## Main Control Loop

The LTC3859AL uses a constant frequency, current mode step-down architecture. The two buck controllers, channels 1 and 2, operate 180 degrees out of phase with each other. The boost controller, channel 3, operates in phase with  channel  1.  During  normal  operation,  the  external top MOSFET for the buck channels (the external bottom MOSFET for the boost channel) is turned on when the clock for that channel sets the RS latch, and is turned off when the main current comparator, ICMP, resets the RS latch. The peak inductor current at which ICMP trips and resets the latch is controlled by the voltage on the I TH  pin, which is the output of the error amplifier EA. The error amplifier compares the output voltage feedback signal at the V FB  pin, (which is generated with an external resistor divider  connected  across  the  output  voltage,  V OUT ,  to ground) to the internal 0.800V reference voltage for the bucks (1.2V reference voltage for the boost). When the load current increases, it causes a slight decrease in V FB relative to the reference, which causes the EA to increase the I TH  voltage until the average inductor current matches the new load current.

After the top MOSFET for the bucks (the bottom MOSFET for the boost) is turned off each cycle, the bottom MOSFET is turned on (the top MOSFET for the boost) until either the inductor current starts to reverse, as indicated by the current comparator IR, or the beginning of the next clock cycle.

## INTV CC /EXTV CC  Power

Power for the top and bottom MOSFET drivers and most other internal circuitry is derived from the INTV CC  pin. When the EXTV CC  pin is left open or tied to a voltage less than 4.7V, the V BIAS  LDO (low dropout linear regulator) supplies 5.4V from V BIAS  to INTV CC . If EXTV CC  is taken above 4.7V, the V BIAS  LDO is turned off and an EXTV CC LDO is turned on. Once enabled, the EXTV CC  LDO supplies 5.4V from EXTV CC  to INTV CC . Using the EXTV CC  pin allows the INTV CC  power to be derived from a high efficiency external source such as one of the LTC3859AL switching regulator outputs.

Each top MOSFET driver is biased from the floating bootstrap capacitor C B , which normally recharges during each cycle through an external diode when the switch voltage goes low.

For buck channels 1 and 2, if the buck's input voltage decreases to a voltage close to its output, the loop may enter dropout and attempt to turn on the top MOSFET continuously. The dropout detector detects this and forces the top MOSFET off for about one twelfth of the clock period every tenth cycle to allow C B  to recharge.

## Shutdown and Start-Up (RUN1, RUN2, RUN3 and TRACK/SS1, TRACK/SS2, SS3 Pins)

The three  channels  of  the  LTC3859AL  can  be  independently shut down using the RUN1, RUN2 and RUN3 pins. Pulling RUN1 below 1.17V and RUN2/RUN3 below 1.20V shuts down the main control loop for that channel. Pulling all three pins below 0.7V disables all controllers and most internal circuits, including the INTV CC  LDOs. In this state, the LTC3859AL draws only 10µA of quiescent current.

Releasing a RUN pin allows a small internal current to pull up the pin to enable that controller. The RUN1 pin has a 7µA pull-up current while the RUN2 and RUN3 pins have a smaller 160nA. The 7µA current on RUN1 is designed to be large enough so that the RUN1 pin can be safely floated (to always enable the controller) without worry of condensation or other small board leakage pulling the pin down. This is ideal for always-on applications where one  or  more  controllers  are  enabled  continuously  and never shut down.

Each RUN pin may also be externally pulled up or driven directly  by  logic.  When  driving  a  RUN  pin  with  a  low  impedance source, do not exceed the absolute maximum rating of 8V. Each RUN pin has an internal 11V voltage clamp that allows the RUN pin to be connected through a resistor to a higher voltage (for example, V BIAS ), so long as the maximum current in the RUN pin does not exceed 100µA.

The start-up of each channel's output voltage V OUT  is controlled  by  the  voltage  on  the  TRACK/SS  pin  (TRACK/SS1  for channel 1, TRACK/SS2 for channel 2, SS3 for channel 3). When the voltage on the TRACK/SS pin is less than the

## OPERATION

0.8V internal reference for the bucks and the 1.2V internal reference for the boost, the LTC3859AL regulates the V FB voltage to the TRACK/SS pin voltage instead of the corresponding reference voltage. This allows the TRACK/SS pin to be used to program a soft-start by connecting an external capacitor from the TRACK/SS pin to SGND. An internal  5µA  pull-up  current  charges  this  capacitor  creating a voltage ramp on the TRACK/SS pin. As the TRACK/SS voltage rises linearly from 0V to 0.8V/1.2V (and beyond up to INTV CC ), the output voltage V OUT  rises smoothly from zero to its final value.

Alternatively the TRACK/SS pins for buck channels 1 and 2 can be used to cause the start-up of V OUT  to track that of another supply. Typically, this requires connecting to the TRACK/SS pin an external resistor divider from the other supply  to  ground  (see  the  Applications  Information  section).

## Light Load Current Operation (Burst Mode Operation, Pulse-Skipping, or Continuous Conduction) (PLLIN/MODE Pin)

The LTC3859AL can be enabled to enter high efficiency Burst Mode operation, constant frequency pulse-skipping mode or forced continuous conduction mode at low load currents. To select Burst Mode operation, tie the PLLIN/ MODE pin to ground. To select forced continuous operation, tie the PLLIN/MODE pin to INTV CC . To select pulseskipping mode, tie the PLLIN/MODE pin to a DC voltage greater than 1.2V and less than INTV CC  - 1.3V.

When a controller is enabled for Burst Mode operation, the minimum peak current in the inductor is set to approximately 25% of the maximum sense voltage (30% for the boost) even though the voltage on the I TH  pin indicates a lower value. If the average inductor current is higher than the load current, the error amplifier EA will decrease the voltage on the I TH  pin. When the I TH  voltage drops below 0.425V, the internal sleep signal goes high (enabling sleep mode) and both external MOSFETs are turned off. The I TH pin is then disconnected from the output of the EA and parked at 0.450V.

In sleep mode, much of the internal circuitry is turned off, reducing the quiescent current that the LTC3859AL draws. If channel 1 is in sleep mode and the other two are shut down, the LTC3859AL draws only 28µA of quiescent cur- rent. If channels 1 and 3 are in sleep mode and channel 2 is shut down, it draws only 33µA of quiescent current. If all three  controllers  are  enabled  in  sleep  mode,  the  LTC3859AL draws only 38µA of quiescent. In sleep mode, the load current is supplied by the output capacitor. As the output voltage decreases, the EA's output begins to rise. When the output voltage drops enough, the I TH  pin is reconnected to the output of the EA, the sleep signal goes low, and the controller resumes normal operation by turning on the top external MOSFET on the next cycle of the internal oscillator.

When a controller is enabled for Burst Mode operation, the inductor current is not allowed to reverse. The reverse current  comparator  (IR)  turns  off  the  bottom  external MOSFET (the top external MOSFET for the boost) just before the inductor current reaches zero, preventing it from reversing and going negative. Thus, the controller operates in discontinuous operation.

In forced continuous operation or clocked by an external clock source to use the phase-locked loop (see the Frequency Selection and Phase-Locked Loop section), the inductor current is allowed to reverse at light loads or under large transient conditions. The peak inductor current is determined by the voltage on the I TH  pin, just as in normal operation. In this mode, the efficiency at light loads is lower than in Burst Mode operation. However, continuous operation has the advantage of lower output voltage ripple and less interference to audio circuitry. In forced continuous mode, the output ripple is independent of load current.

When the PLLIN/MODE pin is connected for pulse-skipping mode, the LTC3859AL operates in PWM pulse-skipping mode at light  loads.  In  this  mode,  constant  frequency operation  is  maintained  down  to  approximately  1%  of designed maximum output current. At very light loads, the current comparator ICMP may remain tripped for several cycles and force the external top MOSFET to stay off for the same number of cycles (i.e., skipping pulses). The inductor current is not allowed to reverse (discontinuous operation). This mode, like forced continuous operation, exhibits low output ripple as well as low audio noise and reduced  RF  interference  as  compared  to  Burst  Mode operation. It provides higher low current efficiency than forced continuous mode, but not nearly as high as Burst Mode operation.

## OPERATION

## Frequency Selection and Phase-Locked Loop (FREQ and PLLIN/MODE Pins)

The selection of switching frequency is a tradeoff between efficiency  and  component  size.  Low  frequency  operation increases efficiency by reducing MOSFET switching losses, but requires larger inductance and/or capacitance to maintain low output ripple voltage.

The switching frequency of the LTC3859AL's controllers can be selected using the FREQ pin.

If the PLLIN/MODE pin is not being driven by an external clock source, the FREQ pin can be tied to SGND, tied to INTV CC ,  or  programmed  through  an  external  resistor. Tying FREQ to SGND selects 350kHz while tying FREQ to INTV CC  selects 535kHz. Placing a resistor between FREQ and SGND allows the  frequency  to  be  programmed  between 50kHz and 900kHz.

A phase-locked loop (PLL) is available on the LTC3859AL to synchronize the internal oscillator to an external clock source  that  is  connected  to  the  PLLIN/MODE  pin.  The LTC3859AL's phase detector adjusts the voltage (through an internal lowpass filter) of the VCO input to align the turn-on of controller 1's external top MOSFET to the rising edge of the synchronizing signal. Thus, the turn-on of controller 2's external top MOSFET is 180 degrees out of phase to the rising edge of the external clock source.

The  VCO  input  voltage  is  pre-biased  to  the  operating frequency set by the FREQ pin before the external clock is applied. If prebiased near the external clock frequency, the PLL loop only needs to make slight changes to the VCO input in order to synchronize the rising edge of the external clock's to the rising edge of TG1. The ability to pre-bias the loop filter allows the PLL to lock in rapidly without deviating far from the desired frequency.

The  typical  capture  range  of  the  LTC3859AL's  phaselocked loop is from approximately 55kHz to 1MHz, with a guarantee over all manufacturing variations to be between 75kHz and 850kHz. In other words, the LTC3859AL's PLL is guaranteed to lock to an external clock source whose frequency is between 75kHz and 850kHz.

The typical input clock thresholds on the PLLIN/MODE pin are 1.6V (rising) and 1.2V (falling).

## Boost Controller Operation When V IN  &gt; V OUT

When the input voltage to the boost channel rises above its regulated V OUT  voltage, the controller can behave differently  depending  on  the  mode,  inductor  current  and VIN  voltage. In forced continuous mode, the loop works to keep the top MOSFET on continuously once V IN  rises above V OUT . An internal charge pump delivers current to the boost capacitor from the BOOST3 pin to maintain a sufficiently high TG voltage. (The amount of current the charge pump can deliver is characterized by two curves in the Typical Performance Characteristics section.)

In  pulse-skipping  mode,  if  V IN   is  between  100%  and 110% of the regulated V OUT  voltage, TG3 turns on if the inductor  current  rises  above  approximately  3%  of  the programmed I LIM  current. If the part is programmed in Burst Mode operation under this same V IN  window, then TG3 turns on at the same threshold current as long as the chip is awake (one of the buck channels is awake and switching). If both buck channels are asleep or shut down in this V IN  window, then TG3 will remain off regardless of the inductor current.

If V IN  rises above 110% of the regulated V OUT  voltage in any mode, the controller turns on TG3 regardless of the inductor current. In Burst Mode operation, however, the internal charge pump turns off if the entire chip is asleep (the two buck channels are asleep or shut down). With the charge pump off, there would be nothing to prevent the  boost  capacitor  from  discharging,  resulting  in  an insufficient TG voltage needed to keep the top MOSFET completely on. The charge pump turns back on when the chip wakes up, and it remains on as long as one of the buck channels is actively switching.

## Boost Controller at Low SENSE Pin Common Voltage

The current comparator of the boost controller is powered directly from the SENSE3 + pin  and can operate to voltages as low as 2.5V. Since this is lower than the V BIAS  UVLO of the chip, V BIAS  can be connected to the output of the boost controller, as illustrated in the typical application circuit in Figure 12. This allows the boost controller to handle input voltage transients down to 2.5V while maintaining output  voltage  regulation.  If  the  SENSE3 + rises  back above 2.5V, the SS3 pin will be released initiating a new soft-start sequence.

## OPERATION

## Buck Controller Output Overvoltage Protection

The two buck channels have an overvoltage comparator that guards against transient overshoots as well as other more serious  conditions  that  may  overvoltage  their  outputs. When the V FB1,2  pin rises by more than 10% above its regulation point of 0.800V, the top MOSFET is turned off and the bottom MOSFET is turned on until the overvoltage condition is cleared.

## Channel 1 Power Good (PGOOD1)

Channel 1 has a PGOOD1 pin that is connected to an open drain  of  an  internal  N-channel  MOSFET.  The  MOSFET turns on and pulls the PGOOD1 pin low when the V FB1  pin voltage is not within ±10% of the 0.8V reference voltage for the buck channel. The PGOOD1 pin is also pulled low when the RUN1 pin is low (shut down). When the V FB1 pin voltage is within the ±10% requirement, the MOSFET is turned off and the pin is allowed to be pulled up by an external resistor to a source no greater than 6V.

## Boost Overvoltage Indicator (OV3)

The OV3 pin  is  an  overvoltage  indicator  that  signals  whether the output voltage of the channel 3 boost controller goes over its programmed regulated voltage. The pin is connected to an open drain of an internal N-channel MOSFET. The MOSFET turns on and pulls the OV3 pin low when the VFB3  pin voltage is less than 110% of the 1.2V reference voltage for the boost channel. The OV3 pin is also pulled low when the RUN3 pin is low (shut down). When the V FB3 pin voltage goes higher than 110% of the 1.2V reference, the MOSFET is turned off and the pin is allowed to be pulled up by an external resistor to a source no greater than 6V.

## Buck Foldback Current

When the buck output voltage falls to less than 70% of its  nominal level, foldback current limiting is activated, progressively lowering the peak current limit in proportion to  the  severity  of  the  overcurrent  or  short-circuit  condition. Foldback current limiting is disabled during the soft-start interval (as long as the V FB  voltage is keeping up with the TRACK/SS1,2 voltage). There is no foldback current limiting for the boost channel.

## THEORY AND BENEFITS OF 2-PHASE OPERATION

Why the need for 2-phase operation? Up until the 2-phase family,  constant-frequency  dual  switching  regulators operated  both  channels  in  phase  (i.e.,  single-phase operation). This means that both switches turned on at the same time, causing current pulses of up to twice the amplitude of those for one regulator to be drawn from the input capacitor and battery. These large amplitude current pulses increased the total RMS current flowing from the input capacitor, requiring the use of more expensive input capacitors and increasing both EMI and losses in the input capacitor and battery.

With 2-phase operation, the two buck controllers of the LTC3859AL are operated 180 degrees out of phase. This effectively  interleaves  the  current  pulses  drawn  by  the switches, greatly  reducing  the  overlap  time  where  they  add together. The result is a significant reduction in total RMS input current, which in turn allows less expensive input capacitors to be used, reduces shielding requirements for EMI and improves real world operating efficiency.

## OPERATION

Figure 1. Input Waveforms Comparing Single-Phase (a) and 2-Phase (b) Operation for Dual Switching Regulators Converting 12V to 5V and 3.3V at 3A Each. The Reduced Input Ripple with the 2-Phase Regulator Allows Less Expensive Input Capacitors, Reduces Shielding Requirements for EMI and Improves Efficiency

<!-- image -->

Figure  1  compares  the  input  waveforms  for  a  representative single-phase dual switching regulator to the 2-phase dual buck controllers of the LTC3859AL. An actual measurement of the RMS input current under these conditions shows that 2-phase operation dropped the input current from 2.53A RMS  to 1.55A RMS . While this is an impressive reduction in itself, remember that the power losses are proportional  to  I RMS2 ,  meaning  that  the  actual  power  wasted is reduced by a factor of 2.66. The reduced input ripple voltage also means less power is lost in the input power path, which could include batteries, switches, trace/connector resistances  and  protection  circuitry.  Improvements in both conducted and radiated EMI also directly accrue as a result of the reduced RMS input current and voltage.

Of course, the improvement afforded by 2-phase operation is a function of the dual switching regulator's relative duty cycles which, in turn, are dependent upon the input voltage V IN (Duty Cycle = V OUT /V IN ). Figure 2 shows how the RMS input current varies for single-phase and 2-phase operation for 3.3V and 5V regulators over a wide input voltage range.

It can readily be seen that the advantages of 2-phase operation are not just limited to a narrow operating range, for most applications is that 2-phase operation will reduce the input capacitor requirement to that for just one channel operating at maximum current and 50% duty cycle.

The schematic on the first page is a basic LTC3859AL application circuit. External component selection is driven by the load requirement, and begins with the selection of RSENSE  and the inductor value. Next, the power MOSFETs are selected. Finally, C IN and C OUT  are selected.

Figure 2. RMS Input Current Comparison

<!-- image -->

## APPLICATIONS INFORMATION

The  Typical  Application  on  the  first  page  is  a  basic LTC3859AL application circuit. LTC3859AL can be configured to  use  either  DCR  (inductor  resistance)  sensing  or  low value resistor  sensing.  The  choice  between  the  two  current sensing schemes is largely a design trade-off between cost,  power  consumption,  and  accuracy.  DCR  sensing is becoming popular because it saves expensive current sensing resistors and is more power efficient, especially in  high  current  applications.  However,  current  sensing resistors provide the most accurate current limits for the controller. Other external component selection is driven by the load requirement, and begins with the selection of RSENSE  (if R SENSE  is used) and inductor value. Next, the power MOSFETs and Schottky diodes are selected. Finally, input and output capacitors are selected.

## SENSE +  and SENSE -  Pins

The SENSE +  and SENSE -  pins are the inputs to the current comparators.

Buck Controllers (SENSE1 + /SENSE1 - ,SENSE2 + /SENSE2 - ): The common mode voltage range on these pins is 0V to 28V  (absolute  maximum),  enabling  the  LTC3859AL  to regulate buck output voltages up to a nominal 24V (allowing margin for tolerances and transients). The SENSE + pin is high impedance over the full common mode range, drawing at most ±1µA. This high impedance allows the current comparators to be used in inductor DCR sensing. The impedance of the SENSE -  pin changes depending on the common mode voltage. When SENSE -  is less than INTV CC -0.5V, a small current of less than 1µA flows out of the pin. When SENSE is above INTV CC +0.5V, a higher current  (≈700µA)  flows  into  the  pin.  Between  INTV CC -0.5V and INTV CC +0.5V,   the  current  transitions  from  the  smaller current to the higher current.

Boost Controller (SENSE3 + /SENSE3 - ): The common mode input range for these pins is 2.5V to 38V, allowing the boost converter to operate from inputs over this full range. The SENSE3 +  pin also provides power to the current comparator and draws about 170µA during normal operation (when not shut down or asleep in Burst Mode operation). There is a small bias current of less than 1µA that flows out of the SENSE3 -   pin.  This  high  impedance  on  the  SENSE3 -pin  allows the current comparator to be used in inductor DCR sensing.

<!-- image -->

Filter  components mutual to the sense lines should be placed close to the LTC3859AL, and the sense lines should run close together to a Kelvin connection underneath the current sense element (shown in Figure 3). Sensing current  elsewhere can effectively add parasitic inductance and capacitance to the current sense element, degrading the information at the sense terminals and making the programmed current limit unpredictable. If DCR sensing is used (Figure 4b), sense resistor R1 should be placed close  to  the  switching  node,  to  prevent  noise  from  coupling into sensitive small-signal nodes.

Figure 3. Sense Lines Placement with Inductor or Sense Resistor

<!-- image -->

## Low Value Resistor Current Sensing

A typical sensing circuit using a discrete resistor is shown in  Figure  4a.  R SENSE   is  chosen  based  on  the  required output current.

The  current  comparators  have  a  maximum  threshold VSENSE(MAX)  of 50mV. The current comparator threshold sets the peak of the inductor current, yielding a maximum average output current, I MAX , equal to the peak value less half the peak-to-peak ripple current, D I L . To calculate the sense resistor value, use the equation:

<!-- formula-not-decoded -->

When  using  the  buck  controllers  in  very  low  dropout conditions,  the  maximum  output  current  level  will  be reduced  due  to  the  internal  compensation  required  to meet stability criterion for buck regulators operating at greater than 50% duty factor. A curve is provided in the Typical Performance Characteristics section to estimate this reduction in peak output current level depending upon the operating duty factor.

## APPLICATIONS INFORMATION

4a. Using a Resistor to Sense Current

<!-- image -->

4b. Using the Inductor DCR to Sense Current

<!-- image -->

Figure 4. Current Sensing Methods

## Inductor DCR Sensing

For  applications  requiring  the  highest  possible  efficiency  at high  load  currents,  the  LTC3859AL  is  capable  of  sensing  the voltage  drop  across  the  inductor  DCR,  as  shown  in  Figure  4b. The DCR of the inductor represents the small amount of DC winding resistance of the copper, which can be less than 1mΩ for today's low value, high current inductors. In a high current application requiring such an inductor, conduction loss  through  a  sense  resistor  would  cost  several points of efficiency compared to DCR sensing.

If the external R1||R2 · C1 time constant is chosen to be exactly equal to the L/DCR time constant, the voltage drop across the external capacitor is equal to the drop across the  inductor  DCR  multiplied  by  R2/(R1  +  R2).  R2  scales  the voltage across the sense terminals for applications where the DCR is greater than the target sense resistor value. To properly dimension the external filter components, the DCR of the inductor must be known. It can be measured using a good RLC meter, but the DCR tolerance is not always  the  same  and  varies  with  temperature;  consult the manufacturers' data sheets for detailed information.

Using the inductor ripple current value from the Inductor Value Calculation  section,  the  target  sense  resistor  value  is:

<!-- formula-not-decoded -->

To ensure that the application will deliver full load current over the full operating temperature range, determine RSENSE(EQUIV) , keeping in mind that the maximum current sense threshold (V SENSE(MAX) ) for the LTC3859AL is fixed at 50mV.

Next, determine the DCR of the inductor. Where provided, use the manufacturer's maximum value, usually given at 20°C. Increase this value to account for the temperature coefficient of resistance, which is approximately 0.4%/°C. A conservative value for T L(MAX)  is 100°C.

To scale the maximum inductor DCR to the desired sense resistor value, use the divider ratio:

<!-- formula-not-decoded -->

C1 is usually selected to be in the range of 0.1µF to 0.47µF. This forces R1||R2 to around 2k, reducing error that might have been caused by the SENSE +  pin's ±1µA current.

The equivalent resistance R1||R2 is scaled to the room temperature inductance and maximum DCR:

<!-- formula-not-decoded -->

The sense resistor values are:

<!-- formula-not-decoded -->

## APPLICATIONS INFORMATION

The maximum power loss in R1 is related to duty cycle. For the buck controllers, the maximum power loss will occur in continuous mode at the maximum input voltage:

<!-- formula-not-decoded -->

For the boost controller, the maximum power loss in R1 will occur in continuous mode at V IN  = 1/2·V OUT :

<!-- formula-not-decoded -->

Ensure that R1 has a power rating higher than this value. If high efficiency is necessary at light loads, consider this power loss when deciding whether to use DCR sensing or sense resistors. Light load power loss can be modestly higher with a DCR network than with a sense resistor, due to the extra switching losses incurred through R1. However, DCR sensing eliminates a  sense  resistor,  reduces conduction losses and provides higher efficiency at heavy loads.  Peak  efficiency  is  about  the  same  with  either  method.

## Inductor Value Calculation

The operating frequency and inductor selection are interrelated in that higher operating frequencies allow the use of smaller inductor and capacitor values. So why would anyone ever choose to operate at lower frequencies with larger components? The answer is efficiency. A higher frequency generally results in lower efficiency because of MOSFET gate charge losses. In addition to this basic trade-off, the effect of inductor value on ripple current and low current operation must also be considered.

The inductor value has a direct effect on ripple current. The  inductor  ripple  current D I L   decreases  with  higher inductance  or  frequency.  For  the  buck  controllers, D I L increases with higher V IN :

<!-- formula-not-decoded -->

For the boost controller, the inductor ripple current D I L increases with higher V OUT :

<!-- formula-not-decoded -->

Accepting  larger  values  of D I L   allows  the  use  of  low inductances, but results in higher output voltage ripple and greater core losses. A reasonable starting point for setting ripple current is D I L  = 0.3(I MAX ). The maximum D I L  occurs at the maximum input voltage for the bucks and V IN  =  1/2·V OUT  for the boost.

The inductor value also has secondary effects. The transition to Burst Mode operation begins when the average inductor current required results in a peak current below 25% of the current limit (30% for the boost) determined by R SENSE . Lower inductor values (higher D I L ) will cause this to occur at lower load currents, which can cause a dip in efficiency in the upper range of low current operation. In Burst Mode operation, lower inductance values will cause the burst frequency to decrease.

## Inductor Core Selection

Once the value for L is known, the type of inductor must be selected. High efficiency converters generally cannot afford the  core  loss  found  in  low  cost  powdered  iron  cores, forcing the  use  of  more  expensive  ferrite  or  molypermalloy cores. Actual core loss is independent of core size for a fixed  inductor  value,  but  it  is  very  dependent  on  inductance selected. As inductance increases, core losses go down. Unfortunately, increased inductance requires more turns of wire and therefore copper losses will increase.

Ferrite designs have very low core loss and are preferred at high switching frequencies, so design goals can concentrate on copper loss and preventing saturation. Ferrite core material saturates 'hard,' which means that inductance collapses abruptly when the peak design current is exceeded. This results in an abrupt increase in inductor ripple current and consequent output voltage ripple. Do not allow the core to saturate!

## APPLICATIONS INFORMATION

## Power MOSFET and Schottky Diode (Optional) Selection

Two external power MOSFETs must be selected for each controller in the LTC3859AL: one N-channel MOSFET for the top switch (main switch for the buck, synchronous for the boost), and one N-channel MOSFET for the bottom switch (main switch for the boost, synchronous for the buck).

The peak-to-peak drive levels  are  set  by  the  INTV CC   voltage. This voltage is typically 5.4V during start-up (see EXTV CC Pin  Connection).  Consequently,  logic-level  threshold MOSFETs must be used in most applications. Pay close attention to the BV DSS  specification for the MOSFETs as well; many of the logic level MOSFETs are limited to 30V or less.

Selection  criteria  for  the  power  MOSFETs  include  the on-resistance R DS(ON) , Miller capacitance C MILLER , input voltage and maximum output current. Miller capacitance, CMILLER , can be approximated from the gate charge curve usually  provided  on  the  MOSFET  manufacturers'  data sheet.  C MILLER   is  equal  to  the  increase  in  gate  charge along the horizontal axis while the curve is approximately flat divided by the specified change in V DS . This result is then multiplied by the ratio of the application applied V DS to the gate charge curve specified V DS . When the IC is operating in continuous mode the duty cycles for the top and bottom MOSFETs are given by:

<!-- formula-not-decoded -->

The  MOSFET  power  dissipations  at  maximum  output current are given by:

<!-- formula-not-decoded -->

where z is the temperature dependency of R DS(ON)  and RDR (approximately 2Ω) is the effective driver resistance at the MOSFET's Miller threshold voltage. V THMIN  is the typical MOSFET minimum threshold voltage.

Both MOSFETs have I 2 R losses while the main N-channel equations for the buck and boost controllers include an additional term for transition losses, which are highest at high input  voltages  for  the  bucks  and  low  input  voltages  for the boost. For V IN &lt; 20V (high V IN for the boost) the high current  efficiency  generally  improves  with  larger  MOSFETs, while for V IN &gt; 20V (low V IN  for the boost) the transition losses rapidly increase to the point that the use of a higher RDS(ON)   device  with  lower  C MILLER   actually  provides  higher

## APPLICATIONS INFORMATION

efficiency. The synchronous MOSFET losses for the buck controllers are greatest at high input voltage when the top switch duty factor is low or during a short-circuit when the synchronous switch is on close to 100% of the period. The synchronous MOSFET losses for the boost controller are greatest when the input voltage approaches the output voltage or during an overvoltage event when the synchronous switch is on 100% of the period.

The term (1+ z ) is generally given for a MOSFET in the form of a normalized R DS(ON)  vs Temperature curve, but z =  0.005/°C can be used as an approximation for low voltage MOSFETs.

An optional Schottky diode placed across the synchronous MOSFET conducts during the dead-time between the conduction of the two power MOSFETs. This prevents the body diode of the synchronous MOSFET from turning on, storing charge during the dead-time and requiring a reverse recovery period that could cost as much as 3% in efficiency at high V IN . A 1A to 3A Schottky is generally a good compromise for both regions of operation due to the relatively small average current. Larger diodes result in additional transition losses due to their larger junction capacitance.

## Boost C IN , C OUT  Selection

The input ripple current in a boost converter is relatively low (compared with the output ripple current), because this current is continuous. The boost input capacitor C IN voltage rating should comfortably exceed the maximum input  voltage.  Although  ceramic  capacitors  can  be  relatively tolerant of overvoltage conditions, aluminum electrolytic capacitors are  not.  Be  sure  to  characterize  the  input  voltage for any possible overvoltage transients that could apply excess stress to the input capacitors.

The value of C IN is  a  function  of  the  source  impedance, and in  general,  the  higher  the  source  impedance,  the  higher  the required input capacitance. The required amount of input capacitance is also greatly affected by the duty cycle. High output current applications that also experience high duty cycles can place great demands on the input supply, both in terms of DC current and ripple current.

In  a  boost  converter,  the  output  has  a  discontinuous  current, so C OUT  must be capable of reducing the output voltage ripple.  The  effects  of  ESR  (equivalent  series  resistance)  and the bulk capacitance must be considered when choosing the right capacitor for a given output ripple voltage. The steady ripple due to charging and discharging the bulk capacitance is given by:

<!-- formula-not-decoded -->

where C OUT  is the output filter capacitor.

The steady ripple due to the voltage drop across the ESR is given by:

<!-- formula-not-decoded -->

Multiple capacitors placed in parallel may be needed to meet the ESR and RMS current handling requirements. Dry  tantalum,  special  polymer,  aluminum  electrolytic and ceramic capacitors are all available in surface mount packages.  Ceramic  capacitors  have  excellent  low  ESR characteristics but can have a high voltage coefficient. Capacitors are now available with low ESR and high ripple current ratings such as OS-CON and POSCAP.

## Buck C IN , C OUT  Selection

The selection  of  C IN for  the  two  buck  controllers  is  simplified by the 2-phase architecture and its impact on the worstcase RMS current drawn through the input network (battery/fuse/capacitor). It can be shown that the worst-case capacitor RMS current occurs when only one controller is operating. The controller with the highest (V OUT )(I OUT ) product needs to be used in the formula shown in Equation (1) to determine the maximum RMS capacitor current requirement. Increasing the output current drawn from the other controller will actually decrease the input RMS ripple current from its maximum value. The out-of-phase technique  typically  reduces  the  input  capacitor's  RMS ripple current by a factor of 30% to 70% when compared to a single phase power supply solution.

## APPLICATIONS INFORMATION

In  continuous  mode,  the  source  current  of  the  top  MOSFET is a square wave of duty cycle (V OUT )/(V IN ). To prevent large voltage transients, a low ESR capacitor sized for the maximum RMS current of one channel must be used. The maximum RMS capacitor current is given by:

<!-- formula-not-decoded -->

This formula has a maximum at V IN  = 2V OUT , where I RMS = I OUT /2. This simple worst-case condition is commonly used for design because even significant deviations do not offer  much  relief.  Note  that  capacitor  manufacturers'  ripple current ratings are often based on only 2000 hours of life. This makes it advisable to further derate the capacitor, or to choose a capacitor rated at a higher temperature than required. Several capacitors may be paralleled to meet size or height requirements in the design. Due to the high operating  frequency  of  the  LTC3859AL,  ceramic  capacitors can also be used for C IN .  Always consult the manufacturer if there is any question.

The benefit of the LTC3859AL 2-phase operation can be calculated by using Equation (1) for the higher power controller  and  then  calculating  the  loss  that  would  have  resulted if both controller channels switched on at the same time. The total RMS power lost is lower when both controllers are operating due to the reduced overlap of current pulses required through the input capacitor's ESR. This is why the input capacitor's requirement calculated above for the worst-case controller is adequate for the dual controller design. Also, the input protection fuse resistance, battery resistance, and PC board trace resistance losses are also reduced due to the reduced peak currents in a 2-phase system. The overall benefit of a multiphase design will only be fully realized when the source impedance of the power supply/battery is included in the efficiency testing. The drains of the top MOSFETs should be placed within 1cm of each other and share a common C IN  (s). Separating the drains and C IN  may produce undesirable voltage and current resonances at V IN .

A small (0.1µF to 1µF) bypass capacitor between the chip VIN   pin  and  ground,  placed  close  to  the  LTC3859AL,  is  also suggested. A small (1Ω to 10Ω) resistor placed between CIN   (C1)  and  the  V IN pin  provides further isolation between the two channels.

The  selection  of  C OUT   is  driven  by  the  effective  series resistance  (ESR).  Typically,  once  the  ESR  requirement is satisfied, the capacitance is adequate for filtering. The output ripple ( D VOUT ) is approximated by:

<!-- formula-not-decoded -->

where f is the operating frequency, C OUT  is the output capacitance and D I L  is the ripple current in the inductor. The output ripple is highest at maximum input voltage since D I L  increases with input voltage.

## Setting Output Voltage

The LTC3859AL output voltages are each set by an external feedback resistor  divider  carefully  placed  across  the  output, as shown in Figure 5. The regulated output voltages are determined by:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

To improve the frequency response, a feedforward capacitor, C FF , may be used. Great care should be taken to route the V FB  line away from noise sources, such as the inductor or the SW line.

Figure 5. Setting Output Voltage

<!-- image -->

## APPLICATIONS INFORMATION

Tracking and Soft-Start

(TRACK/SS1, TRACK/SS2, SS3 Pins)

The start-up of each V OUT  is controlled by the voltage on the respective TRACK/SS pin (TRACK/SS1 for channel 1, TRACK/SS2 for channel 2, SS3 for channel 3). When the voltage  on  the  TRACK/SS  pin  is  less  than  the  internal 0.8V reference (1.2V reference for the boost channel), the LTC3859AL regulates the V FB  pin voltage to the voltage on the TRACK/SS pin instead of the internal reference. Likewise, the TRACK/SS pin for the buck channels can be used to program an external soft-start function or to allow VOUT  to track another supply during start-up.

Soft-start  is  enabled  by  simply  connecting  a  capacitor from the TRACK/SS pin to ground, as shown in Figure 6. An  internal  5µA  current  source  charges  the  capacitor, providing a linear ramping voltage at the TRACK/SS pin. The LTC3859AL will regulate the V FB  pin (and hence V OUT ) according to the voltage on the TRACK/SS pin, allowing VOUT  to rise smoothly from 0V to its final regulated value. The total soft-start time will be approximately:

<!-- formula-not-decoded -->

Alternatively, the TRACK/SS1 and TRACK/SS2 pins for the two buck  controllers  can  be  used  to  track  two  (or  more)  supplies during start-up, as shown qualitatively in Figures 7a and 7b. To do this, a resistor divider should be connected from the master supply (V X ) to the TRACK/SS pin of the slave supply (V OUT ), as shown in Figure 8. During start-up VOUT  will track V X  according to the ratio set by the resistor divider:

<!-- formula-not-decoded -->

For coincident tracking (V OUT  = V X  during start-up),

RA = R TRACKA

RB = R TRACKB

<!-- image -->

Figure 6. Using the TRACK/SS Pin to Program Soft-Start

<!-- image -->

7a. Coincident T racking

<!-- image -->

7b. Ratiometric T racking

Figure 7. T wo Different Modes of Output Voltage T racking

Figure 8. Using the TRACK/SS Pin for T racking

<!-- image -->

## APPLICATIONS INFORMATION

## INTV CC  Regulators

The LTC3859AL features two separate internal P-channel low dropout linear regulators (LDO) that supply power at the INTV CC  pin from either the V BIAS  supply pin or the EXTVCC  pin depending on the connection of the EXTV CC pin.  INTV CC powers  the  gate  drivers  and  much  of  the LTC3859AL's internal circuitry. The V BIAS  LDO and the EXTVCC  LDO regulate INTV CC  to 5.4V. Each of these must be bypassed to ground with a minimum of 4.7µF ceramic capacitor.  No  matter  what  type  of  bulk  capacitor  is  used,  an additional 1µF ceramic capacitor placed directly adjacent to the INTV CC  and PGND IC pins is highly recommended. Good bypassing is needed to supply the high transient currents  required  by  the  MOSFET  gate  drivers  and  to prevent interaction between the channels.

High input voltage applications in which large MOSFETs are being driven at high frequencies may cause the maximum junction temperature rating for the LTC3859AL to be exceeded. The INTV CC  current, which is dominated by the gate charge current, may be supplied by either the V BIAS LDO or the EXTV CC  LDO. When the voltage on the EXTV CC pin is less than 4.7V, the V BIAS  LDO is enabled. Power dissipation for the IC in this case is highest and is equal to VBIAS   ·  I INTVCC .  The  gate  charge  current  is  dependent on  operating  frequency  as  discussed  in  the  Efficiency Considerations section. The junction temperature can be estimated by using the equations given in Note 2 of the Electrical  Characteristics.  For  example, the LTC3859AL INTV CC  current is limited to less than 40mA from a 40V supply when not using the EXTV CC  supply at a 70°C ambient temperature in the QFN package:

T J  = 70°C + (40mA)(40V)(34°C/W) = 125°C

To prevent the maximum junction temperature from being exceeded, the input supply current must be checked while operating in continuous conduction mode (PLLIN/MODE = INTV CC ) at maximum V IN .

When the voltage applied to EXTV CC  rises above 4.7V, the VBIAS  LDO is turned off and the EXTV CC  LDO is enabled. The EXTV CC  LDO remains on as long as the voltage applied to EXTV CC  remains above 4.5V. The EXTV CC  LDO attempts to regulate the INTV CC  voltage to 5.4V, so while EXTV CC is less than 5.4V, the LDO is in dropout and the INTV CC voltage is approximately equal to EXTV CC . When EXTV CC is greater than 5.4V, up to an absolute maximum of 14V, INTV CC  is regulated to 5.4V.

Using the EXTV CC   LDO  allows  the  MOSFET  driver  and control power to be derived from one of the LTC3859AL's switching  regulator  outputs  (4.7V  ≤  V OUT ≤  14V)  during normal operation and from the V BIAS  LDO when the output is out of regulation (e.g., startup, short-circuit). If more current is required through the EXTV CC  LDO than is  specified,  an  external  Schottky  diode  can  be  added between the EXTV CC  and INTV CC  pins. In this case, do not apply more than 6V to the EXTV CC  pin and make sure that EXTV CC  ≤ V BIAS .

Significant efficiency and thermal gains can be realized by powering INTV CC  from the buck output, since the V IN current resulting from the driver and control currents will be scaled by a factor of (Duty Cycle)/(Switcher Efficiency). For 5V to 14V regulator outputs, this means connecting the EXTV CC  pin directly to V OUT . Tying the EXTV CC  pin to a  8.5V  supply  reduces  the  junction  temperature  in  the previous example from 125°C to:

<!-- formula-not-decoded -->

However, for  3.3V  and  other  low  voltage  outputs,  additional circuitry  is  required  to  derive  INTV CC   power  from  the  output.

## APPLICATIONS INFORMATION

The following list summarizes the four possible connections for EXTV CC :

1. EXTV CC   grounded.  This  will  cause  INTV CC   to  be  powered from the  internal  5.4V  regulator  resulting  in  an  efficiency penalty of up to 10% at high input voltages.
2. EXTV CC  connected directly to the output voltage of one of the buck regulators. This is the normal connection for a 5V to 14V regulator and provides the highest efficiency.
3. EXTV CC  connected to an external supply. If an external supply is available in the 5V to 14V range, it may be used to power EXTV CC  providing it is compatible with the  MOSFET  gate  drive  requirements.  Ensure  that EXTVCC  ≤ V BIAS .
4. EXTV CC  connected to an output-derived boost network off one of the buck regulators. For 3.3V and other low voltage buck regulators, efficiency gains can still be realized  by  connecting  EXTV CC   to  an  output-derived voltage that has been boosted to greater than 4.7V. This can be done with the capacitive charge pump shown in Figure 9. Ensure that EXTV CC  ≤ V BIAS .

Figure 9. Capacitive Charge Pump for EXTV CC

<!-- image -->

## APPLICATIONS INFORMATION

## Topside MOSFET Driver Supply (C B , D B )

External bootstrap capacitors C B  connected to the BOOST pins supply the gate drive voltages for the topside MOSFETs. Capacitor C B  in the Functional Diagram is charged though external diode D B  from INTV CC  when the SW pin is low. When one of the topside MOSFETs is to be turned on, the driver places the C B   voltage  across the gate-source of the desired MOSFET. This enhances the MOSFET and turns  on  the  topside  switch.  The  switch  node  voltage, SW, rises to V IN for the buck channels (V OUT  for the boost channel) and the BOOST pin follows. With the topside MOSFET on, the boost voltage is above the input supply: VBOOST  = V IN + V INTVCC (V BOOST  = V OUT  + V INTVCC  for the boost  controller).  The  value  of  the  boost  capacitor  C B needs to be 100 times that of the total input capacitance of the topside MOSFET(s). The reverse breakdown of the external Schottky diode must be greater than V IN(MAX)  for the buck channels and V OUT(MAX)  for the boost channel.

The external diode D B  can be a Schottky diode or silicon diode, but in either  case  it  should  have  low  leakage  and  fast recovery. Pay close attention to the reverse leakage at high temperatures where it generally increases substantially.

The topside MOSFET driver for the boost channel includes an  internal  charge  pump  that  delivers  current  to  the bootstrap capacitor from the BOOST3 pin. This charge current maintains the bias voltage required to keep the top  MOSFET on continuously during dropout/overvoltage conditions. The Schottky/silicon diode selected for the boost topside driver should have a reverse leakage less than the available output current the charge pump can supply. Curves displaying the available charge pump current under different operating conditions can be found in the Typical Performance Characteristics section.

A  leaky  diode  D B   in  the  boost  converter  can  not  only prevent the top MOSFET from fully turning on but it can also completely discharge the bootstrap capacitor C B  and create a current path from the input voltage to the BOOST3 pin to INTV CC . This can cause INTV CC   to rise if the diode leakage exceeds the current consumption on INTV CC . This is particularly a concern in Burst Mode operation where the load on INTV CC   can be very small. There is an internal voltage clamp on INTV CC   that prevents the INTV CC voltage from running away, but this clamp should be regarded as a failsafe only. The external Schottky or silicon diode should be carefully chosen such that INTV CC   never gets charged up much higher than its  normal  regulation  voltage.

Care should also be taken when choosing the external diode D B  for the buck converters. A leaky diode not only increases the quiescent current of the buck converter, but it can also cause a similar leakage path to INTV CC   from VOUT  for applications with output voltages greater than the INTV CC  voltage (~5.4V).

<!-- image -->

Figure 10. Relationship Between Oscillator Frequency and Resistor Value at the FREQ Pin

<!-- image -->

## APPLICATIONS INFORMATION

## Fault Conditions: Buck Current Limit and Current Foldback

The LTC3859AL includes current foldback for the buck channels to help limit load current when the output is shorted to ground. If the buck output falls below 70% of its nominal output level, then the maximum sense voltage is progressively lowered from 100% to 40% of its maximum selected value. Under short-circuit conditions with very low duty cycles, the buck channel will begin cycle skipping in order to limit the short-circuit current. In this situation the bottom MOSFET will be dissipating most of the power but less than in normal operation. The short-circuit ripple current is determined by the minimum on-time  t ON(MIN) of  the  LTC3859AL  (≈95ns),  the  input voltage and inductor value:

<!-- formula-not-decoded -->

The resulting average short-circuit current is:

<!-- formula-not-decoded -->

## Fault Conditions: Buck Overvoltage Protection (Crowbar)

The overvoltage crowbar is designed to blow a system input fuse when the output voltage of the one of the buck regulators  rises  much  higher  than  nominal  levels.  The crowbar causes huge currents to flow, that blow the fuse to protect against a shorted top MOSFET if the short occurs while the controller is operating.

A comparator monitors the buck output for overvoltage conditions. The comparator detects faults greater than 10% above the nominal output voltage. When this condition is sensed, the top MOSFET of the buck controller is turned off and the bottom MOSFET is turned on until the overvoltage  condition  is  cleared.  The  bottom  MOSFET remains on continuously for as long as the overvoltage condition persists; if V OUT  returns to a safe level, normal operation automatically resumes.

<!-- image -->

A shorted top MOSFET for the buck channel will result in a high current condition which will open the system fuse. The switching regulator will regulate properly with a leaky top MOSFET by altering the duty cycle to accommodate the leakage.

## Fault Conditions: Over Temperature Protection

At  higher  temperatures, or in cases where the internal power dissipation causes excessive self heating on chip (such as INTV CC  short to ground), the over temperature shutdown circuitry will shut down the LTC3859AL. When the  junction  temperature  exceeds  approximately  170°C,  the over temperature circuitry disables the INTV CC  LDO, causing the INTV CC  supply to collapse and effectively shutting down the entire LTC3859AL chip. Once the junction temperature drops back to approximately 155°C, the INTV CC LDO turns back on. Long term overstress (T J  &gt; 125°C) should be avoided as it can degrade the performance or shorten the life of the part.

## Phase-Locked Loop and Frequency Synchronization

The LTC3859AL has an internal phase-locked loop (PLL) comprised of a phase frequency detector, a lowpass filter, and a voltage-controlled oscillator (VCO). This allows the turn-on of the top MOSFET of controller 1 to be locked to the rising edge of an external clock signal applied to the PLLIN/MODE pin. The turn-on of controller  2's  top  MOSFET is thus 180 degrees out of phase with the external clock. The phase detector is an edge sensitive digital type that provides zero degrees phase shift between the external and internal oscillators. This type of phase detector does not exhibit false lock to harmonics of the external clock.

If the external clock frequency is greater than the internal oscillator's frequency, f OSC , then current is sourced continuously from the phase detector output, pulling up the VCO input. When the external clock frequency is less than f OSC , current is sunk continuously, pulling down the

## APPLICATIONS INFORMATION

VCO input. If the external and internal frequencies are the same but exhibit a phase difference, the current sources turn on for an amount of time corresponding to the phase difference. The voltage at the VCO input is adjusted until the phase and frequency of the internal and external oscillators are identical. At the stable operating point, the phase detector output is high impedance and the internal filter capacitor, CLP, holds the voltage at the VCO input.

Note that the LTC3859AL can only be synchronized to an external clock whose frequency is within range of the LTC3859AL's internal VCO, which is nominally 55kHz to 1MHz. This is  guaranteed  to  be  between  75kHz  and  850kHz.

Typically, the external clock (on PLLIN/MODE pin) input high  threshold  is  1.6V,  while  the  input  low  threshold  is  1.2V.

Rapid phase-locking can be achieved by using the FREQ pin  to  set  a  free-running  frequency  near  the  desired synchronization  frequency.  The  VCO's  input  voltage  is prebiased  at  a  frequency  correspond  to  the  frequency set by the FREQ pin. Once prebiased, the PLL only needs to  adjust  the  frequency  slightly  to  achieve  phase-lock and synchronization. Although it is not required that the free-running frequency be near external clock frequency, doing so will prevent the operating frequency from passing through a large range of frequencies as the PLL locks.

Table 1 summarizes the different states in which the FREQ pin can be used.

Table 1.

| FREQ PIN         | PLLIN/MODE PIN   | FREQUENCY                      |
|------------------|------------------|--------------------------------|
| 0V               | DC Voltage       | 350kHz                         |
| INTV CC          | DC Voltage       | 535kHz                         |
| Resistor to SGND | DC Voltage       | 50kHz to 900kHz                |
| Any of the Above | External Clock   | Phase-Locked to External Clock |

## Minimum On-Time Considerations

Minimum on-time t ON(MIN)   is  the  smallest  time  duration  that the LTC3859AL is capable of turning on the top MOSFET (bottom MOSFET for the boost controller). It  is  determined by internal timing delays and the gate charge required to turn on the top MOSFET. Low duty cycle applications may approach this minimum on-time limit and care should be taken to ensure that

<!-- formula-not-decoded -->

If the duty cycle falls below what can be accommodated by the minimum on-time, the controller will begin to skip cycles. The output voltage will continue to be regulated, but the ripple voltage and current will increase.

The minimum on-time for the LTC3859AL is approximately 95ns for the bucks and 120ns for the boost. However, as the peak sense voltage decreases the minimum on-time gradually increases up to about 130ns. This is of particular  concern in forced continuous applications with low ripple current at light loads. If the duty cycle drops below the minimum on-time limit in this situation, a significant amount of cycle skipping can occur with correspondingly larger current and voltage ripple.

## APPLICATIONS INFORMATION

## Efficiency Considerations

The percent efficiency of a switching regulator is equal to the output power divided by the input power times 100%. It is often useful to analyze individual losses to determine what is limiting the efficiency and which change would produce the most improvement. Percent efficiency can be expressed as:

<!-- formula-not-decoded -->

where L1, L2, etc. are the individual losses as a percentage of input power.

Although all dissipative elements in the circuit produce losses, four main sources usually account for most of the  losses  in  LTC3859AL  circuits:  1)  IC  V BIAS   current, 2)  INTV CC regulator  current,  3)  I 2 R losses,  4)  Topside MOSFET transition losses.

1. The V BIAS  current is the DC supply current given in the Electrical Characteristics table, which excludes MOSFET driver and control currents. V BIAS  current typically results in a small (&lt;0.1%) loss.
2. INTV CC  current is the sum of the MOSFET driver and control currents. The MOSFET driver current results from  switching  the  gate  capacitance  of  the  power MOSFETs. Each time a MOSFET gate is switched from low to high to low again, a packet of charge, dQ, moves from INTV CC  to ground. The resulting dQ/dt is a current out of INTV CC   that  is  typically  much  larger  than  the control circuit current. In continuous mode, I GATECHG = f(Q T + Q B ), where Q T  and Q B  are the gate charges of the topside and bottom side MOSFETs.

Supplying INTV CC   from  an  output-derived  source  power through EXTV CC  will scale the V IN  current required for the  driver  and  control  circuits  by  a  factor  of  (Duty  Cycle)/ (Efficiency). For example, in a 20V to 5V application, 10mA of INTV CC   current  results  in  approximately  2.5mA of V IN  current. This reduces the mid-current loss from 10% or more (if the driver was powered directly from VIN ) to only a few percent.

3. I 2 R losses are predicted from the DC resistances of the fuse (if used), MOSFET, inductor, current sense resistor, and input and output capacitor ESR. In continuous mode the average output current flows through L and RSENSE , but is 'chopped' between the topside MOSFET and the  synchronous MOSFET. If the  two  MOSFETs  have approximately the same R DS(ON) , then the resistance of one MOSFET can simply be summed with the resistances of L, R SENSE  and ESR to obtain I 2 R losses. For example, if each R DS(ON)  = 30mΩ, R L  = 50mΩ, R SENSE = 10mΩ and R ESR  = 40mΩ (sum of both input and output capacitance losses), then the total resistance is 130mΩ. This results in losses ranging from 3% to 13% as the output current increases from 1A to 5A for a 5V output, or a 4% to 20% loss for a 3.3V output. Efficiency varies as the inverse square of V OUT  for the same external components and output power level. The combined effects of increasingly lower output voltages and higher  currents  required  by  high  performance  digital systems is not  doubling  but  quadrupling  the  importance of loss terms in the switching regulator system!
4. T ransition losses apply only to the top MOSFET(s) (bottom MOSFET for the boost), and  become  significant  only when operating at high input voltages (typically 15V or greater). T ransition losses can be estimated from:

<!-- formula-not-decoded -->

Other hidden losses such as copper trace and internal battery resistances can account for an additional 5% to 10% efficiency degradation in portable systems. It is very important to include these 'system' level losses during the design phase. The internal battery and fuse resistance losses can be minimized by making sure that CIN  has adequate charge storage and very low ESR at the switching frequency. A 25W supply will typically require  a  minimum  of  20µF  to  40µF  of  capacitance having a maximum of 20mΩ to 50mΩ of ESR. The LTC3859AL 2-phase architecture typically halves this input capacitance requirement over competing solutions.  Other  losses  including  Schottky  conduction  losses during dead-time and inductor core losses generally account for less than 2% total additional loss.

## APPLICATIONS INFORMATION

## Checking T ransient Response

The regulator loop response can be checked by looking at the load current transient response. Switching regulators take several cycles to respond to a step in DC (resistive) load current. When a load step occurs, V OUT  shifts by an amount equal to D I LOAD(ESR) , where ESR is the effective series resistance of C OUT . D I LOAD  also begins to charge or discharge C OUT  generating the feedback error signal that forces the regulator to adapt to the current change and return V OUT  to its steady-state value. During this recovery time V OUT  can be monitored for excessive overshoot or ringing, which would indicate a stability problem. OPTILOOP compensation allows the transient response to be optimized over a wide range of output capacitance and ESR values. The availability of the I TH  pin not only allows optimization of control loop behavior, but it also provides a DC coupled and AC filtered closed loop response test point.  The  DC  step,  rise  time  and  settling  at  this  test point truly reflects the closed loop response. Assuming a predominantly second order system, phase margin and/ or damping factor can be estimated using the percentage of overshoot seen at this pin. The bandwidth can also be estimated by examining the rise time at the pin. The I TH external components shown in Figure 15 will provide an adequate starting point for most applications.

The I TH  series RC-CC filter sets the dominant pole-zero loop compensation. The values can be modified slightly (from 0.5 to 2 times their suggested values) to optimize transient response once the final PC layout is done and the particular output capacitor type and value have been determined. The output capacitors need to be selected because the various types and values determine the loop gain and phase. An output current pulse of 20% to 80% of full-load current having a rise time of 1µs to 10µs will produce output voltage and I TH  pin waveforms that will give a sense of the overall loop stability without breaking the feedback loop.

Placing a power MOSFET directly across the output capacitor and driving the gate with an appropriate signal generator is a practical way to produce a realistic load step condition. The initial output voltage step resulting from the step change in output current may not be within the bandwidth of the feedback loop, so this signal cannot be used to determine phase margin. This is why it is better to look at the I TH  pin signal which is in the feedback loop and is  the  filtered  and  compensated  control  loop  response.

The gain of the loop will be increased by increasing RC and the bandwidth of the loop will be increased by decreasing CC. If RC is increased by the same factor that CC is decreased, the zero frequency will be kept the same, thereby  keeping  the  phase  shift  the  same  in  the  most critical frequency range of the feedback loop. The output voltage settling behavior is related to the stability of the closed-loop system and will demonstrate the actual overall supply performance.

A second, more severe transient is caused by switching in loads with large (&gt;1µF) supply bypass capacitors. The discharged bypass capacitors are effectively put in parallel with C OUT , causing a rapid drop in V OUT . No regulator can alter its delivery of current quickly enough to prevent this sudden step change in output voltage if the load switch resistance is low and it is driven quickly. If the ratio of CLOAD  to C OUT  is greater than 1:50, the switch rise time should be controlled so that the load rise time is limited to approximately 25 · C LOAD . Thus a 10µF capacitor would require a 250µs rise time, limiting the charging current to about 200mA.

## Buck Design Example

As a design example for one of the buck channels channel, assume V IN  = 12V (NOMINAL) , V IN = 22V (MAX) , V OUT  = 3.3V, I MAX  = 6A, V SENSE(MAX)  = 50mV, and f = 350kHz.

The inductance value is chosen first based on a 30% ripple current assumption. The highest value of ripple current occurs at the maximum input voltage. Tie the FREQ pin to  GND,  generating  350kHz  operation.  The  minimum inductance for 30% ripple current is:

<!-- formula-not-decoded -->

A 3.9µH inductor will produce 29% ripple current. The peak inductor current will be the maximum DC value plus one half the ripple current, or 6.88A. Increasing the ripple current will also help ensure that the minimum on-time

## APPLICATIONS INFORMATION

of 95ns is not violated. The minimum on-time occurs at maximum VIN :

<!-- formula-not-decoded -->

The R SENSE  resistor value can be calculated by using the minimum value for the maximum current sense threshold (43mV):

<!-- formula-not-decoded -->

Choosing 1% resistors: R A  = 25k and R B  = 80.6k yields an output voltage of 3.33V.

The power dissipation  on  the  top  side  MOSFET  can  be  easily estimated. Choosing a Fairchild FDS6982S dual MOSFET results in: R DS(ON)  = 0.035Ω/0.022Ω, C MILLER  = 215pF. At maximum input voltage with T(estimated) = 50°C:

<!-- formula-not-decoded -->

<!-- formula-not-decoded -->

A short-circuit to ground will result in a folded back current of:

<!-- formula-not-decoded -->

with a typical value of R DS(ON)  and z = (0.005/°C)(25°C) =  0.125.  The  resulting  power  dissipated  in  the  bottom MOSFET is:

<!-- formula-not-decoded -->

which is less than under full-load conditions.

The input capacitor to the buck regulator C IN  is chosen for an RMS current rating of at least 3A at temperature assuming only this channel is on. C OUT  is chosen with an

ESR of 0.02Ω for low output ripple. The output ripple in continuous mode will  be  highest  at  the  maximum  input  voltage.  The  output  voltage  ripple  due  to  ESR  is  approximately:

<!-- formula-not-decoded -->

## PC Board Layout Checklist

When laying out the printed circuit board, the following checklist should be used to ensure proper operation of the IC. These items are also illustrated graphically in the layout  diagram  of  Figure  11.  Figure  12  illustrates  the  current waveforms present in the various branches of the 2-phase synchronous buck regulators operating in the continuous mode. Check the following in your layout:

1. Are the top N-channel MOSFETs MTOP1 and MTOP2 located within 1cm of each other with a common drain connection at C IN ? Do not attempt to split the input decoupling for the two channels as it can cause a large resonant loop.
2. Are the signal and power grounds kept separate? The combined IC signal ground pin and the ground return of C INTVCC  must return to the combined C OUT  (-) terminals. The path formed by the top N-channel MOSFET, Schottky diode and the C IN  capacitor should have short leads and PC trace lengths. The output capacitor (-) terminals should be connected as close as possible to the (-) terminals of the input capacitor by placing the capacitors next to each other and away from the Schottky loop described above.
3. Do  the  LTC3859AL  V FB   pins'  resistive  dividers  connect to the (+) terminals of C OUT ? The resistive divider must be connected between the (+) terminal of C OUT and signal ground. The feedback resistor connections should not be along the high current input feeds from the input capacitor(s).
4.  Are the SENSE -and SENSE + leads routed together with minimum PC trace spacing? The filter  capacitor  between SENSE +  and SENSE -  should be as close as possible to the IC. Ensure accurate current sensing with Kelvin connections at the sense resistor.

## APPLICATIONS INFORMATION

5. Is  the  INTV CC   decoupling  capacitor  connected  close to the IC, between the INTV CC  and the power ground pins? This capacitor carries the MOSFET drivers' current peaks. An additional 1µF ceramic capacitor placed immediately next to the INTV CC  and PGND pins can help improve noise performance substantially.
6. Keep the switching nodes (SW1, SW2, SW3), top gate nodes (TG1, TG2, TG3), and boost nodes (BOOST1, BOOST2, BOOST3) away from sensitive small-signal nodes, especially from the opposites channel's voltage and current sensing feedback pins. All of these nodes have very large and fast moving signals and therefore should be kept on the output side of the LTC3859AL and occupy minimum PC trace area.
7. Use a  modified  star  ground  technique:  a  low  impedance, large copper area central grounding point on the same side of the PC board as the input and output capacitors with tie-ins for the bottom of the INTV CC  decoupling capacitor, the bottom of the voltage feedback resistive divider and the SGND pin of the IC.

## PC Board Layout Debugging

Start with one controller on at a time. It is helpful to use a DC-50MHz current probe to monitor the current in the inductor  while  testing  the  circuit.  Monitor  the  output  switching node (SW pin) to synchronize the oscilloscope to the internal oscillator and probe the actual output voltage as well. Check for proper performance over the operating voltage  and  current  range  expected  in  the  application. The frequency of operation should be maintained over the input voltage range down to dropout and until the output load drops below the low current operation thresholdtypically 25% of the maximum designed current level in Burst Mode operation.

The duty cycle  percentage  should  be  maintained  from  cycle to  cycle  in  a  well-designed,  low  noise  PCB  implementation. Variation in the duty cycle at a subharmonic rate can suggest noise pickup at the current or voltage sensing inputs or inadequate loop compensation. Overcompensation of the loop can be used to tame a poor PC layout if regulator bandwidth optimization is not required. Only after each controller is  checked  for  its  individual  performance  should both  controllers  be  turned  on  at  the  same  time.  A  particularly difficult  region  of  operation  is  when  one  controller  channel is nearing its current comparator trip point when the other channel is turning on its top MOSFET. This occurs around 50% duty cycle on either channel due to the phasing of the internal clocks and may cause minor duty cycle jitter.

Reduce V IN  from its nominal level to verify operation of the regulator in dropout. Check the operation of the undervoltage lockout circuit by further lowering V IN  while monitoring the outputs to verify operation.

Investigate whether any problems exist only at higher output currents or only at higher input voltages. If problems coincide with high input voltages and low output currents, look for capacitive coupling between the BOOST, SW, TG, and possibly BG connections and the sensitive voltage and current pins. The capacitor placed across the current sensing pins needs to be placed immediately adjacent to the pins of the IC. This capacitor helps to minimize the effects of differential noise injection due to high frequency capacitive  coupling.  If  problems  are  encountered  with high current output loading at lower input voltages, look for inductive coupling between C IN , Schottky and the top MOSFET components to the sensitive current and voltage sensing traces. In addition, investigate common ground path voltage pickup between these components and the SGND pin of the IC.

An embarrassing problem, which can be missed in an otherwise properly working switching regulator, results when the current sensing leads are hooked up backwards. The output voltage under this improper hookup will still be maintained but the advantages of current mode control will not be realized. Compensation of the voltage loop will be  much  more  sensitive  to  component  selection.  This behavior can be investigated by temporarily shorting out the current sensing resistor-don't worry, the regulator will still maintain control of the output voltage.

## APPLICATIONS INFORMATION

<!-- image -->

Figure 11. Branch Current Waveforms for Bucks

<!-- image -->

## TYPICAL APPLICATIONS

Figure 12. High Efficiency Wide Input Range Dual 5V/8.5V Converter

<!-- image -->

## TYPICAL APPLICATIONS

Figure 13. High Efficiency Wide Input Range Dual 12V/3.3V Converter

<!-- image -->

D3: BAS140W

## TYPICAL APPLICATIONS

<!-- image -->

3859al F14

Figure 14. High Efficiency T riple 24V/1V/1.2V Converter from 12V V IN

<!-- image -->

## TYPICAL APPLICATIONS

<!-- image -->

Figure 15. High Efficiency 1.2V/3.3V Step-Down Converter with 10.5V SEPIC Converter

<!-- image -->

## PACKAGE DESCRIPTION

## NOTE:

FE Package 38-Lead Plastic TSSOP (4.4mm) (Reference LTC DWG # 05-08-1772 Rev C) Exposed Pad Variation AA

<!-- image -->

RECOMMENDED SOLDER PAD LAYOUT

<!-- image -->

<!-- image -->

1. CONTROLLING DIMENSION: MILLIMETERS
2. MILLIMETERS (INCHES) 2. DIMENSIONS ARE IN
3. DRAWING NOT TO SCALE
4. RECOMMENDED MINIMUM PCB METAL SIZE FOR EXPOSED PAD ATTACHMENT
5. *DIMENSIONS DO NOT INCLUDE MOLD FLASH. MOLD FLASH SHALL NOT EXCEED 0.150mm (.006") PER SIDE

## PACKAGE DESCRIPTION

UHF Package 38-Lead Plastic QFN (5mm × 7mm)

(Reference LTC DWG # 05-08-1701 Rev C)

<!-- image -->

RECOMMENDED SOLDER PAD LAYOUT

APPLY SOLDER MASK TO AREAS THAT ARE NOT SOLDERED

<!-- image -->

## NOTE:

1. DRAWING CONFORMS TO JEDEC PACKAGE OUTLINE M0-220 VARIATION WHKD
2. DRAWING NOT TO SCALE
3. ALL DIMENSIONS ARE IN MILLIMETERS
4. DIMENSIONS OF EXPOSED PAD ON BOTTOM OF PACKAGE DO NOT INCLUDE MOLD FLASH. MOLD FLASH, IF PRESENT, SHALL NOT EXCEED 0.20mm ON ANY SIDE
5. EXPOSED PAD SHALL BE SOLDER PLATED
6. SHADED AREA IS ONLY A REFERENCE FOR PIN 1 LOCATION ON THE TOP AND BOTTOM OF PACKAGE

## REVISION HISTORY

| REV   | DATE   | DESCRIPTION                                                                           | PAGE NUMBER   |
|-------|--------|---------------------------------------------------------------------------------------|---------------|
| A     | 06/16  | Modified Buck Block Diagram Corrected P MAIN_BOOST equation Modified points #3 and #4 | 13 23 28      |
| B     | 01/20  | Changed Line Regulation Conditions Minor Block Diagram Changes                        | 3 13, 14      |
| C     | 11/22  | Updated Order Information                                                             | 3             |

## TYPICAL APPLICATION

High Efficiency Wide Input Range Dual 3.3V/8.5V Converter

<!-- image -->

## RELATED PARTS

| PART NUMBER                   | DESCRIPTION                                                                               | COMMENTS                                                                                                                                     |
|-------------------------------|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| LTC3786                       | Low I Q Synchronous Step-Up DC/DC Controller                                              | 4.5V (Down to 2.5V after Start-Up) ≤ V IN ≤ 38V, V OUT Up to 60V, I Q = 55µA PLL Fixed Frequency 50kHz to 900kHz, 3mm × 3mm QFN-16, MSOP-16E |
| LTC3787                       | Low I Q , Multiphase, Dual Channel Single Output Synchronous Step-Up DC/DC Controller     | 4.5V (Down to 2.5V after Start-Up) ≤ V IN ≤ 38V, V OUT up to 60V, PLL Fixed Frequency 50kHz to 900kHz, I Q = 135µA                           |
| LTC3826/ LTC3826-1            | Low I Q , Dual Output 2-Phase Synchronous Step-Down DC/DC Controllers with 99% Duty Cycle | PLL Fixed Frequency 50kHz to 900kHz, 4V≤ V IN ≤ 36V, 0.8V ≤ V OUT ≤ 10V, I Q = 30µA                                                          |
| LTC3890/ LTC3890-1/ LTC3890-2 | 60V, Low I Q , Dual 2-Phase Synchronous Step-Down DC/DC Controller with 99% Duty Cycle    | PLL Fixed Frequency 50kHz to 900kHz, 4V ≤ V IN ≤ 60V, 0.8V ≤ V OUT ≤ 24V, I Q = 50µA                                                         |
| LTC3891                       | 60V, Low I Q , Synchronous Step-Down DC/DC Controller with 99% Duty Cycle                 | PLL Fixed Frequency 50kHz to 900kHz, 4V ≤ V IN ≤ 60V, 0.8V ≤ V OUT ≤ 24V, I Q = 50µA                                                         |
| LTC3864                       | 60V, Low I Q , High Voltage DC/DC Controller with 100% Duty Cycle                         | Fixed Frequency 50kHz to 850kHz, 3.5V≤ V IN ≤ 60V, 0.8V ≤ V OUT ≤ V IN , I Q = 40µA, MSOP-12E, 3mm × 4mm DFN-12                              |
| LTC3789                       | 4-Switch High Efficiency Buck-Boost DC/DC Controller                                      | 4V≤ V IN ≤ 38V, 0.8V ≤ V OUT ≤ 38V                                                                                                           |

<!-- image -->

<!-- image -->

For more information www.analog.com