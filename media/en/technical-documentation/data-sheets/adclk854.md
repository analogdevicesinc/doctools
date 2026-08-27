<!-- lastmod 2020-12-09 -->
<!-- image -->

## FEATURES

2 selectable differential inputs Selectable LVDS/CMOS outputs Up to 12 LVDS (1.2 GHz) or 24 CMOS (250 MHz) outputs &lt;12 mW per channel (100 MHz operation) 54 fs rms integrated jitter (12 kHz to 20 MHz) 100 fs rms additive broadband jitter 2.0 ns propagation delay (LVDS) 135 ps output rise/fall (LVDS) 70 ps output-to-output skew (LVDS) Sleep mode Pin programmable control 1.8 V power supply

## APPLICATIONS

Low jitter clock distribution Clock and data signal restoration Level translation Wireless communications Wired communications Medical and industrial imaging

ATE and high performance instrumentation

## GENERAL DESCRIPTION

The ADCLK854 is a 1.2 GHz/250 MHz LVDS/CMOS fanout buffer optimized for low jitter and low power operation. Possible configurations range from 12 LVDS to 24 CMOS outputs, including combinations of LVDS and CMOS outputs. Three control lines are used to determine whether fixed blocks of outputs (three banks of four) are LVDS or CMOS outputs.

The ADCLK854 offers two selectable inputs and a sleep mode feature. The IN\_SEL pin state determines which input is fanned out to all the outputs. The SLEEP pin enables a sleep mode to power down the device.

The inputs accept various types of single-ended and differential logic levels including LVPECL, LVDS, HSTL, CML, and CMOS. Table 8 provides interface options for each type of connection.

This device is available in a 48-pin LFCSP package. It is specified for operation over the standard industrial temperature range of -40°C to +85°C.

## 1.8 V, 12-LVDS/24-CMOS Output, Low Power Clock Fanout Buffer

## ADCLK854

## FUNCTIONAL BLOCK DIAGRAM

<!-- image -->

## ADCLK854

## TABLE OF CONTENTS

| Features.............................................................................................. 1                                                                                          |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Applications ...................................................................................... 1                                                                                             |
| General Description......................................................................... 1                                                                                                    |
| Functional Block Diagram.............................................................. 1                                                                                                          |
| Revision History ............................................................................... 2                                                                                                |
| Specifications .................................................................................... 3                                                                                             |
| Electrical Characteristics............................................................. 3                                                                                                         |
| Timing Characteristics ................................................................ 4                                                                                                         |
| Clock Characteristics ................................................................... 5                                                                                                       |
| Logic and Power Characteristics................................................ 5                                                                                                                 |
| Absolute Maximum Ratings ........................................................... 6                                                                                                            |
| Determining Junction Temperature.......................................... 6                                                                                                                      |
| ESD Caution.................................................................................. 6                                                                                                   |
| Thermal Performance.................................................................. 6                                                                                                           |
| Pin Configuration and Function Descriptions ............................ 7                                                                                                                        |
| REVISION HISTORY                                                                                                                                                                                  |
| 11/2020-Rev. 0 to Rev.A Changed CP-48-6 to CP-48-21....................................Throughout Changes to Figure 2.......................................................................... 7 |
| Updated Outline Dimensions....................................................... 16 Changes to Ordering Guide.......................................................... 16                       |

4/2009-Revision 0: Initial Version

| Typical Performance Characteristics .............................................9                                                                           |    |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| Functional Description..................................................................                                                                     | 12 |
| Clock Inputs................................................................................                                                                 | 12 |
| AC-Coupled Input Applications .............................................                                                                                  | 12 |
| Clock Outputs.............................................................................                                                                   | 12 |
| Control and Function Pins .......................................................                                                                            | 13 |
| Power Supply..............................................................................                                                                   | 13 |
| Applications Information .............................................................                                                                       | 14 |
| Using the ADCLK854 Outputs for ADCClock Applications ....................................................................................................... | 14 |
| LVDS Clock Distribution..........................................................                                                                            | 14 |
| CMOSClock Distribution........................................................                                                                               | 14 |
| Input Termination Options......................................................                                                                              | 15 |
| Outline Dimensions.......................................................................                                                                    | 16 |
| Ordering Guide ..........................................................................                                                                    | 16 |

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS

Typical (Typ) values are given for VS = 1.8 V and TA = 25°C, unless otherwise noted. Minimum (Min) and maximum (Max) values are given over the full VS = 1.8 V ± 5% and TA = -40°C to +85°C variation, unless otherwise noted. Input slew rate &gt; 1 V/ns, unless otherwise noted.

## Table 1. Clock Inputs and Outputs

| Parameter                                                                                                                                                                                                                 | Symbol       | Min          | Typ    | Max          | Unit   | Conditions                                                                             |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|--------------|--------|--------------|--------|----------------------------------------------------------------------------------------|
| CLOCK INPUTS Input Frequency Input Sensitivity, Differential Input Level Input Common-Mode Input Common-Mode Range Input Voltage Offset Input Sensitivity, Single-Ended Input Resistance (Differential) Input Capacitance |              | 0            |        | 1200         | MHz    | Differential input                                                                     |
|                                                                                                                                                                                                                           |              |              | 150    |              | mVp-p  | Jitter performance improves with higher slew rates (greater voltage swing)             |
|                                                                                                                                                                                                                           |              |              |        | 1.8          | V p-p  | Larger voltage swings can turn on the protection diodes and degrade jitter performance |
| Voltage                                                                                                                                                                                                                   | V CM         | V S /2 - 0.1 |        | V S /2 + 0.5 | V      | Inputs are self-biased; enables ac coupling                                            |
|                                                                                                                                                                                                                           | V CMR        | 0.4          |        | V S - 0.4    | V      | Inputs dc-coupled with 200 mVp-psignalapplied                                          |
|                                                                                                                                                                                                                           |              |              | 30     |              | mV     |                                                                                        |
|                                                                                                                                                                                                                           |              |              | 150    |              | mVp-p  | CLKx ac-coupled; CLKx E ac bypassed to ground                                          |
|                                                                                                                                                                                                                           |              |              | 7      |              | kΩ     |                                                                                        |
|                                                                                                                                                                                                                           | C IN         |              | 2      |              | pF     |                                                                                        |
| Input Bias Current (Each Pin)                                                                                                                                                                                             |              | -350         |        | +350         | µA     | input                                                                                  |
| LVDS CLOCK OUTPUTS                                                                                                                                                                                                        |              |              |        |              |        | Full swing Termination = 100 Ω; differential (OUTx, OUTx E )                           |
| Output Frequency                                                                                                                                                                                                          |              |              |        | 1200         | MHz    | See Figure 9 for swing vs. frequency                                                   |
| Output Voltage Differential                                                                                                                                                                                               | V OD         | 247          | 344    | 454          | mV     |                                                                                        |
| Delta V OD                                                                                                                                                                                                                | ∆V OD        |              |        | 50           | mV     |                                                                                        |
| Offset Voltage                                                                                                                                                                                                            | V OS         | 1.125        | 1.25   | 1.375        | V      |                                                                                        |
| Delta V OS                                                                                                                                                                                                                | ∆V OS        |              |        | 50           | mV     |                                                                                        |
|                                                                                                                                                                                                                           |              |              | 3      |              |        |                                                                                        |
| Short-Circuit                                                                                                                                                                                                             | I S A, I S B |              |        |              | mA     | Each pin (output shorted to                                                            |
| Current                                                                                                                                                                                                                   |              |              |        | 6            |        | GND)                                                                                   |
| Output Frequency                                                                                                                                                                                                          |              |              |        | 250          | MHz    | With 10 pF load per output; see Figure 16 for swing vs. frequency                      |
| Output Voltage High                                                                                                                                                                                                       | V OH         | V S - 0.1    |        |              | V      | @1mAload                                                                               |
| Output Voltage Low                                                                                                                                                                                                        | V OL         |              |        | 0.1          | V      | @1mAload                                                                               |
| Output Voltage High                                                                                                                                                                                                       | V OH         | V S - 0.35   |        |              | V      | @10mAload                                                                              |
| Output Voltage Low                                                                                                                                                                                                        | V OL         |              |        | 0.35         | V      | @10mAload                                                                              |
| Reference Voltage                                                                                                                                                                                                         | V REF        |              |        |              |        |                                                                                        |
| Output Voltage                                                                                                                                                                                                            |              | V S /2 - 0.1 | V S /2 | V S /2 + 0.1 | V      | ±500 µA                                                                                |
| Output Resistance                                                                                                                                                                                                         |              |              | 60     |              | Ω      |                                                                                        |
| Output Current                                                                                                                                                                                                            |              |              |        | 500          | µA     |                                                                                        |

## TIMING CHARACTERISTICS

## Table 2. Timing Characteristics

| Parameter                                                                 | Symbol    |   Min | Typ              |   Max | Unit                               | Conditions                                                                                                                                                       |
|---------------------------------------------------------------------------|-----------|-------|------------------|-------|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| LVDS OUTPUTS                                                              |           |       |                  |       |                                    | Termination = 100 Ωdifferential; 3.5mA                                                                                                                           |
| Output Rise/Fall Time                                                     | t R , t F |       | 135              |   235 | ps                                 | 20% to 80% measured differentially                                                                                                                               |
| Propagation Delay, Clock-to-LVDS Output Temperature Coefficient           | t PD      |   1.5 | 2.0 2.0          |   2.7 | ns ps/°C                           | V ICM = V REF , V ID = 0.5 V                                                                                                                                     |
| OutputSkew 1                                                              |           |       |                  |       |                                    |                                                                                                                                                                  |
| LVDSOutputsintheSameBank All LVDSOutputs                                  |           |       |                  |    50 | ps                                 |                                                                                                                                                                  |
| OntheSamePart                                                             |           |       |                  |    65 | ps                                 |                                                                                                                                                                  |
| Across Multiple Parts                                                     |           |       |                  |   390 | ps                                 |                                                                                                                                                                  |
| Additive Time Jitter                                                      |           |       |                  |       |                                    |                                                                                                                                                                  |
| Integrated RandomJitter Broadband RandomJitter 2 Crosstalk Induced Jitter |           |       | 54 74 86 150 260 |       | fs rms fs rms fs rms fs rms fs rms | BW=12kHzto20MHz;clock=1000MHz BW=50kHzto80MHz;clock=1000MHz BW=10Hzto100MHz;clock=1000MHz Input slew = 1 V/ns, see Figure 11 Calculated from spur energy with an |
| CMOS OUTPUTS                                                              |           |       |                  |       |                                    |                                                                                                                                                                  |
| Output Rise/Fall Time                                                     | t R, t F  |       | 525              |   950 | ps                                 | 20%to80%;C LOAD =10pF                                                                                                                                            |
| Propagation Delay, Clock-to-CMOS Output Temperature Coefficient           | t PD      |   2.5 | 3.2 2.2          |   4.2 | ns ps/°C                           | 10 pF load                                                                                                                                                       |
| OutputSkew 1                                                              |           |       |                  |       |                                    |                                                                                                                                                                  |
| CMOSOutputsintheSameBank AllCMOSOutputs                                   |           |       |                  |   155 | ps                                 |                                                                                                                                                                  |
| OntheSamePart                                                             |           |       |                  |   175 | ps                                 |                                                                                                                                                                  |
| Across Multiple Parts                                                     |           |       |                  |   640 | ps                                 |                                                                                                                                                                  |
| Additive Time Jitter                                                      |           |       |                  |       |                                    |                                                                                                                                                                  |
| Integrated RandomJitter                                                   |           |       | 56               |       | fs rms                             | BW=12kHzto 20 MHz; clock= 200 MHz                                                                                                                                |
| Broadband RandomJitter 2                                                  |           |       | 100              |       | fs rms                             | Input slew = 2 V/ns, see Figure 11                                                                                                                               |
| Crosstalk Induced Jitter                                                  |           |       | 260              |       | fs rms                             | Calculated from spur energy with an interferer 10 MHz offset from the carrier                                                                                    |
| LVDS-TO-CMOS OUTPUT SKEW 3                                                |           |       |                  |       |                                    |                                                                                                                                                                  |
| LVDSOutput(s) andCMOSOutput(s)onthe SamePart                              |           |   0.8 |                  |   1.6 | ns                                 | CMOSload=10pFandLVDSload=100Ω                                                                                                                                    |

1  This is the difference between any two similar delay paths while operating at the same voltage and temperature.

2  Calculated from the SNR of the ADC method.

3 Measured at the rising edge of the clock signal.

## CLOCK CHARACTERISTICS

## Table 3. Clock Output Phase Noise

| Parameter                                   | Min   |   Typ | Max   | Unit   | Conditions               |
|---------------------------------------------|-------|-------|-------|--------|--------------------------|
| CLOCK-TO-LVDS ABSOLUTE PHASE NOISE 1000 MHz |       |       |       |        | Input slew rate > 1 V/ns |
|                                             |       |   -90 |       | dBc/Hz | @10Hzoffset              |
|                                             |       |  -108 |       | dBc/Hz | @100 Hz offset           |
|                                             |       |  -117 |       | dBc/Hz | @1kHz offset             |
|                                             |       |  -126 |       | dBc/Hz | @10kHz offset            |
|                                             |       |  -135 |       | dBc/Hz | @100 kHz offset          |
|                                             |       |  -141 |       | dBc/Hz | @1MHzoffset              |
|                                             |       |  -146 |       | dBc/Hz | @10MHzoffset             |
| CLOCK-TO-CMOS ABSOLUTE PHASE NOISE          |       |       |       |        | Input slew rate > 1 V/ns |
| 200 MHz                                     |       |  -101 |       | dBc/Hz | @10Hzoffset              |
|                                             |       |  -119 |       | dBc/Hz | @100 Hz offset           |
|                                             |       |  -127 |       | dBc/Hz | @1kHz offset             |
|                                             |       |  -138 |       | dBc/Hz | @10kHz offset            |
|                                             |       |  -147 |       | dBc/Hz | @100 kHz offset          |
|                                             |       |  -153 |       | dBc/Hz | @1MHzoffset              |
|                                             |       |  -156 |       | dBc/Hz | @10MHzoffset             |

## LOGIC AND POWER CHARACTERISTICS

## Table 4. Control Pin Characteristics

| Parameter                           | Symbol   | Min       |   Typ |   Max | Unit   | Conditions                                                                         |
|-------------------------------------|----------|-----------|-------|-------|--------|------------------------------------------------------------------------------------|
| CONTROLPINS(IN_SEL,CTRL_x, SLEEP) 1 |          |           |       |       |        |                                                                                    |
| Logic 1Voltage                      | V IH     | V S - 0.4 |       |       | V      |                                                                                    |
| Logic 0Voltage                      | V IL     |           |       |   0.4 | V      |                                                                                    |
| Logic 1Current                      | I IH     | 5         |     8 |    20 | μA     |                                                                                    |
| Logic 0Current                      | I IL     | -5        |       |    +5 | μA     |                                                                                    |
| Capacitance                         |          |           |     2 |       | pF     |                                                                                    |
| POWER                               |          |           |       |       |        |                                                                                    |
| Supply Voltage Requirement          | V S      | 1.71      |   1.8 |  1.89 | V      | V S = 1.8V±5%                                                                      |
| LVDS Outputs                        |          |           |       |       |        | Full operation                                                                     |
| LVDS@100MHz                         |          |           |    84 |   100 | mA     | All outputs enabled as LVDS and loaded, R L = 100Ω                                 |
| LVDS@1200MHz                        |          |           |   175 |   215 | mA     | All outputs enabled as LVDS and loaded, R L = 100Ω                                 |
| CMOS Outputs                        |          |           |       |       |        | Full operation                                                                     |
| CMOS@100MHz                         |          |           |   115 |   140 | mA     | All outputs enabled as CMOSand loaded, C L = 10 pF                                 |
| CMOS@250MHz                         |          |           |   265 |   325 | mA     | All outputs enabled as CMOSand loaded, C L = 10 pF                                 |
| SLEEP                               |          |           |       |     3 | mA     | SLEEP pin pulled high; does not include power dissipated in the external resistors |
| Power Supply Rejection 2            |          |           |       |       |        |                                                                                    |
| LVDS                                | PD t PSR |           |   0.9 |       | ps/mV  |                                                                                    |
| CMOS                                | PD t PSR |           |   1.2 |       | ps/mV  |                                                                                    |

1 These pins each have a 200 kΩ internal pull-down resistor.

2  Change in tPD per change in VS.

## ABSOLUTE MAXIMUM RATINGS

Table 5.

| Parameter                          | Rating          |
|------------------------------------|-----------------|
| Supply Voltage                     |                 |
| V S toGND                          | 2 V             |
| Inputs                             |                 |
| CLKx and CLKx E                    | -0.3 V to +2 V  |
| CMOS Inputs                        | -0.3 V to +2 V  |
| Outputs                            |                 |
| Maximum Voltage                    | -0.3 V to +2 V  |
| Voltage Reference Voltage (V REF ) | -0.3 to +2 V    |
| Operating Temperature              |                 |
| Ambient Range                      | -40°C to +85°C  |
| Junction                           | 150°C           |
| Storage Temperature Range          | -65°C to +150°C |

Stresses above those listed under Absolute Maximum Ratings may cause permanent damage to the device. This is a stress rating only; functional operation of the device at these or any other conditions above those indicated in the operational section of this specification is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## THERMAL PERFORMANCE

## Table 6.

| Parameter                                                                      | Symbol   | Description (Using a 2S2P Test Board)   |   Value 1 | Unit   |
|--------------------------------------------------------------------------------|----------|-----------------------------------------|-----------|--------|
| Junction-to-Ambient Thermal Resistance Still Air 0.0 m/sec Air Flow Moving Air |  JA     |                                         |           |        |
|                                                                                |          | Per JEDEC JESD51-2                      |           |        |
|                                                                                |          |                                         |        42 | °C/W   |
|                                                                                |  JMA    | Per JEDEC JESD51-6                      |           |        |
| 1.0 m/sec Air Flow                                                             |          |                                         |        37 | °C/W   |
| 2.5 m/sec Air Flow                                                             |          |                                         |        33 | °C/W   |
| Junction-to-Board Thermal Resistance                                           |  JB     |                                         |           |        |
| Moving Air                                                                     |          | Per JEDEC JESD51-8                      |           |        |
| 1.0 m/sec Air Flow                                                             |          |                                         |        26 | °C/W   |
| Junction-to-Case Thermal Resistance                                            |  JC     |                                         |           |        |
| Moving Air                                                                     |          | Per MIL-STD 883, Method 1012.1          |           |        |
| Die-to-Heat Sink                                                               |          |                                         |         2 | °C/W   |
| Junction-to-Top-of-Package Characterization Parameter                          |  JT     |                                         |           |        |
| Still Air                                                                      |          | Per JEDEC JESD51-2                      |           |        |
| 0 m/sec Air Flow                                                               |          |                                         |       0.5 | °C/W   |

1 Results are from simulations. The PCB is a JEDEC multilayer type. Thermal performance for actual applications requires careful inspection of the conditions in the application to determine if they are similar to those assumed in these calculations.

## DETERMINING JUNCTION TEMPERATURE

To determine the junction temperature on the application printed circuit board (PCB), use the following equation:

<!-- formula-not-decoded -->

## where:

TJ is the junction temperature (°C).

TCASE is the case temperature (°C) measured by the user at the top center of the package.

 JT is from Table 6.

PD is the power dissipation.

Values of  JA are provided for package comparison and PCB design considerations.  JA can be used for a first-order approximation of TJ by the equation

<!-- formula-not-decoded -->

where TA is the ambient temperature (°C).

Values of  JB are provided in Table 6 for package comparison and PCB design considerations.

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

<!-- image -->

NOTES:

2. EXPOSED PADDLE MUST BE CONNECTED TO GND.

1. NC = NO CONNECT.

Figure 2. Pin Configuration

Table 7. Pin Function Descriptions

| Pin No.               | Mnemonic         | Description                                                                                             |
|-----------------------|------------------|---------------------------------------------------------------------------------------------------------|
| 1                     | V REF            | Reference Voltage.                                                                                      |
| 2                     | CLK0 E           | Input (Negative) 0.                                                                                     |
| 3                     | CLK0             | Input (Positive) 0.                                                                                     |
| 7, 18, 24, 30, 37, 43 | V S              | Supply Voltage.                                                                                         |
| 5                     | CLK1 E           | Input (Negative) 1.                                                                                     |
| 6                     | CLK1             | Input (Positive) 1.                                                                                     |
| 8                     | OUT11 E (OUT11B) | Complementary Side of Differential LVDS Output 11, or CMOS Output 11 on Channel B.                      |
| 9                     | OUT11 (OUT11A)   | True Side of Differential LVDS Output 11, or CMOS Output 11 on Channel A.                               |
| 10                    | IN_SEL           | Input Select. (0 = CLK0, CLK0 E ; 1 = CLK1, CLK1 E ). CMOS logic input with 200 kΩ pull-down resistor.  |
| 11                    | CTRL_A           | Control for Output 3 to Output 0 (0 = LVDS, 1 = CMOS). CMOS logic input with 200 kΩ pull-down resistor. |
| 12                    | CTRL_B           | Control for Output 7 to Output 4 (0 = LVDS, 1 = CMOS). CMOS logic input with 200 kΩ pull-down resistor. |
| 13                    | CTRL_C           | Control for Output 11 to Output 8(0 =LVDS,1=CMOS).CMOSlogicinputwith200kΩpull-downresistor.             |
| 14                    | SLEEP            | Sleep Mode Control (0 = normal operation, 1 = sleep). CMOS logic input with 200 kΩ pull down resistor.  |
| 15                    | OUT10 E (OUT10B) | Complementary Side of Differential LVDS Output 10, or CMOS Output 10 on Channel B.                      |
| 16                    | OUT10 (OUT10A)   | True Side of Differential LVDS Output 10, or CMOS Output 10 on Channel A.                               |
| 4, 17, 23, 29, 38, 44 | GND              | Ground Pin.                                                                                             |
| 19                    | OUT9 E (OUT9B)   | Complementary Side of Differential LVDS Output 9, or CMOS Output 9 on Channel B.                        |
| 20                    | OUT9 (OUT9A)     | True Side of Differential LVDS Output 9, or CMOS Output 9 on Channel A.                                 |
| 21                    | OUT8 E (OUT8B)   | Complementary Side of Differential LVDS Output 8, or CMOS Output 8 on Channel B.                        |
| 22                    | OUT8 (OUT8A)     | True Side of Differential LVDS Output 8, or CMOS Output 8 on Channel A.                                 |
| 25                    | OUT7 E (OUT7B)   | Complementary Side of Differential LVDS Output 7, or CMOS Output 7 on Channel B.                        |

07218-002

## ADCLK854

| Pin No.   | Mnemonic       | Description                                                                      |
|-----------|----------------|----------------------------------------------------------------------------------|
| 26        | OUT7 (OUT7A)   | True Side of Differential LVDS Output 7, or CMOS Output 7 on Channel A.          |
| 27        | OUT6 E (OUT6B) | Complementary Side of Differential LVDS Output 6, or CMOS Output 6 on Channel B. |
| 28        | OUT6 (OUT6A)   | True Side of Differential LVDS Output 6, or CMOS Output 6 on Channel A.          |
| 31        | OUT5 E (OUT5B) | Complementary Side of Differential LVDS Output 5, or CMOS Output 5 on Channel B. |
| 32        | OUT5 (OUT5A)   | True Side of Differential LVDS Output 5, or CMOS Output 5 on Channel A.          |
| 33        | OUT4 E (OUT4B) | Complementary Side of Differential LVDS Output 4, or CMOS Output 4 on Channel B. |
| 34        | OUT4 (OUT4A)   | True Side of Differential LVDS Output 4, or CMOS Output 4 on Channel A.          |
| 35        | NC             | No Connect.                                                                      |
| 36        | NC             | No Connect.                                                                      |
| 39        | OUT3 E (OUT3B) | Complementary Side of Differential LVDS Output 3, or CMOS Output 3 on Channel B. |
| 40        | OUT3 (OUT3A)   | True Side of Differential LVDS Output 3, or CMOS Output 3 on Channel A.          |
| 41        | OUT2 E (OUT2B) | Complementary Side of Differential LVDS Output 2, or CMOS Output 2 on Channel B. |
| 42        | OUT2 (OUT2A)   | True Side of Differential LVDS Output 2, or CMOS Output 2 on Channel A.          |
| 45        | OUT1 E (OUT1B) | Complementary Side of Differential LVDS Output 1, or CMOS Output 1 on Channel B. |
| 46        | OUT1 (OUT1A)   | True Side of Differential LVDS Output 1, or CMOS Output 1 on Channel A.          |
| 47        | OUT0 E (OUT0B) | Complementary Side of Differential LVDS Output 0, or CMOS Output 0 on Channel B. |
| 48        | OUT0 (OUT0A)   | True Side of Differential LVDS Output 0, or CMOS Output 0 on Channel A.          |
| (49)      | EPAD           | Exposed Paddle. The exposed paddle must be connected to GND.                     |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 5. LVDS Output Duty Cycle vs. Frequency

<!-- image -->

07218-007

Figure 7. LVDS Propagation Delay vs. VICM

<!-- image -->

Figure 8. LVDS Differential Output Swing vs. Power Supply Voltage

<!-- image -->

## ADCLK854

<!-- image -->

Figure 9. LVDS Differential Output Swing vs. Input Frequency

<!-- image -->

Figure 10. LVDS Current vs. Frequency; All Banks Set to LVDS

<!-- image -->

Figure 11. Additive Broadband Jitter vs. Input Slew Rate

<!-- image -->

Figure 12. Absolute Phase Noise LVDS @ 1000 MHz

Figure 13. LVDS/CMOS Current vs. Frequency with Various Logic Combinations

<!-- image -->

Figure 14. CMOS Output Duty Cycle vs. Frequency (10 pF Load)

<!-- image -->

Figure 16. CMOS Output Swing vs. Frequency by Temperature (10 pF Load)

<!-- image -->

Figure 17. CMOS Output Swing vs. Frequency by Capacitive Load

<!-- image -->

## ADCLK854

Figure 19. CMOS Output Swing vs. Frequency by Resistive Load

<!-- image -->

## FUNCTIONAL DESCRIPTION

The ADCLK854 accepts a clock input from one of two inputs and distributes the selected clock to all output channels. The outputs are grouped into three banks of four and can be set to either LVDS or CMOS levels. This allows the selection of multiple logic configurations ranging from 12 LVDS to 24 CMOS outputs, along with other combinations using both types of logic.

## CLOCK INPUTS

The ADCLK854 differential inputs are internally self-biased. The clock inputs have a resistor divider that sets the commonmode level for the inputs. The complementary inputs are biased about 30 mV lower than the true input to avoid oscillations if the input signal stops. See Figure 20 for the equivalent input circuit.

The inputs can be ac-coupled or dc-coupled. Table 8 displays a guide for input logic compatibility. A single-ended input can be accommodated by ac or dc coupling to one side of the differential input; bypass the other input to ground with a capacitor.

Note that jitter performance degrades with low input slew rate, as shown in Figure 11. See Figure 27 through Figure 32 for different termination schemes.

<!-- image -->

## AC-COUPLED INPUT APPLICATIONS

The ADCLK854 offers two options for ac coupling. The first option requires no external components (excluding the dc blocking capacitor), it allows the user to simply couple the reference signal onto the clock input pins. For more information, see Figure 29.

Table 8. Input Logic Compatibility

|   Supply(V) | Logic   |   CommonMode(V) |   OutputSwing(V) | AC-Coupled   | DC-Coupled   |
|-------------|---------|-----------------|------------------|--------------|--------------|
|         3.3 | CML     |             2.9 |              0.8 | Yes          | Not allowed  |
|         2.5 | CML     |             2.1 |              0.8 | Yes          | Not allowed  |
|         1.8 | CML     |             1.4 |              0.8 | Yes          | Yes          |
|         3.3 | CMOS    |            1.65 |              3.3 | Not allowed  | Not allowed  |
|         2.5 | CMOS    |            1.25 |              2.5 | Not allowed  | Not allowed  |
|         1.8 | CMOS    |             0.9 |              1.8 | Yes          | Yes          |
|         1.5 | HSTL    |            0.75 |             0.75 | Yes          | Yes          |
|             | LVDS    |            1.25 |              0.4 | Yes          | Yes          |
|         3.3 | LVPECL  |             2.0 |              0.8 | Yes          | Not allowed  |
|         2.5 | LVPECL  |             1.2 |              0.8 | Yes          | Yes          |
|         1.8 | LVPECL  |             0.5 |              0.8 | Yes          | Yes          |

The second option allows the use of the VREF pin to set the dc bias level for the ADCLK854. The VREF pin can be connected to CLKx and CLKx E through resistors. This method allows lower impedance termination of signals at the ADCLK854 (for more information, see Figure 32). The internal bias resistors remain in parallel with the external biasing. However, the relatively high impedance of the internal resistors allows the external termination to VREF to dominate. This method is also useful when offsetting the inputs; using only the internal biasing, as previously mentioned, is not desirable.

## CLOCK OUTPUTS

Each driver consists of a differential LVDS output or two single-ended CMOS outputs (always in phase). When the LVDS driver is enabled, the corresponding CMOS driver is in tristate; when the CMOS driver is enabled, the corresponding LVDS driver is powered down and tristated. Figure 21 and Figure 22 display the equivalent output stage.

Figure 22. CMOS Output Equivalent Circuit

<!-- image -->

## CONTROL AND FUNCTION PINS

## CTRL\_A-Logic Select

This pin selects either CMOS (high) or LVDS (low) logic for Output 3, Output 2, Output 1, and Output 0. This pin has an internal 200 kΩ pull-down resistor.

## CTRL\_B-Logic Select

This pin selects either CMOS (high) or LVDS (low) logic for Output 7, Output 6, Output 5, and Output 4. This pin has an internal 200 kΩ pull-down resistor.

## CTRL\_C-Logic Select

This pin selects either CMOS (high) or LVDS (low) logic for Output 11, Output 10, Output 9, and Output 8. This pin has an internal 200 kΩ pull-down resistor.

## IN\_SEL-Clock Input Select

A logic low selects CLK0 and CLK0 E whereas a logic high selects CLK1 and CLK1 E . This pin has an internal 200 kΩ pull-down resistor.

## Sleep Mode

Sleep mode powers down the chip except for the internal band gap. The input is active high, which puts the outputs into a high-Z state. This pin has a 200 kΩ pull-down resistor.

## POWER SUPPLY

The ADCLK854 requires a 1.8 V ± 5% power supply for VS. Best practice recommends bypassing the power supply on the PCB with adequate capacitance (&gt;10 µF), and bypassing all power pins with adequate capacitance (0.1 µF) as close to the part as possible. The layout of the ADCLK854 evaluation board (ADCLK854/PCBZ) provides a good layout example.

## Exposed Metal Paddle

The exposed metal paddle on the ADCLK854 package is an electrical connection as well as a thermal enhancement. For the device to function properly, the paddle must be properly attached to ground (GND). The ADCLK854 dissipates heat through its exposed paddle. The PCB acts as a heat sink for the ADCLK854. The PCB attachment must provide a good thermal path to a larger heat dissipation area, such as the ground plane on the PCB. This requires a grid of vias from the top layer down to the ground plane. See Figure 23 for an example.

Figure 23. PCB Land for Attaching Exposed Paddle

<!-- image -->

## APPLICATIONS INFORMATION

## USING THE ADCLK854 OUTPUTS FOR ADC CLOCK APPLICATIONS

Any high speed, analog-to-digital converter (ADC) is extremely sensitive to the quality of the sampling clock provided by the user. An ADC can be thought of as a sampling mixer, and any noise, distortion, or timing jitter on the clock is combined with the desired signal at the analog-to-digital output. Clock integrity requirements scale with the analog input frequency and resolution, with higher analog input frequency applications at ≥14-bit resolution being the most stringent. The theoretical SNR of an ADC is limited by the ADC resolution and the jitter on the sampling clock. Considering an ideal ADC of infinite resolution where the step size and quantization error can be ignored, the available SNR can be expressed approximately by

<!-- image -->

where fA is the highest analog frequency being digitized and TJ is the rms jitter on the sampling clock.

Figure 24 shows the required sampling clock jitter as a function of the analog frequency and effective number of bits (ENOB). For more information, see Application Note AN-756 and Application Note AN-501 at www.analog.com.

Figure 24. SNR and ENOB vs. Analog Input Frequency

<!-- image -->

Many high performance ADCs feature differential clock inputs to simplify the task of providing the required low jitter clock on a noisy PCB. Distributing a single-ended clock on a noisy PCB can result in coupled noise on the sample clock. Differential distribution has inherent common-mode rejection that can provide superior clock performance in a noisy environment. Consider the input requirements of the ADC (differential or single-ended, logic level, and termination) when selecting the best clocking/converter solution.

## LVDS CLOCK DISTRIBUTION

The ADCLK854 provides clock outputs that are selectable as either CMOS or LVDS level outputs. LVDS is a differential output option that uses a current-mode output stage. The nominal current is 3.5 mA, which yields 350 mV output swing across a 100 Ω resistor. The LVDS output meets or exceeds all ANSI/TIA/EIA-644 specifications. A recommended termination circuit for the LVDS outputs is shown in Figure 25.

If ac coupling is necessary, place decoupling capacitors either before or after the 100 Ω termination resistor. See Application Note AN-586 at www.analog.com for more information on LVDS.

Figure 25. LVDS Output Termination

<!-- image -->

## CMOS CLOCK DISTRIBUTION

The output drivers of the ADCLK854 can be configured as CMOS drivers. When selected as a CMOS driver, each output becomes a pair of CMOS outputs. These outputs are 1.8 V CMOS compatible.

When single-ended CMOS clocking is used, some of the following guidelines apply.

Design point-to-point connections such that each driver has only one receiver, if possible. Connecting outputs in this manner allows for simple termination schemes and minimizes ringing due to possible mismatched impedances on the output trace. Series termination at the source is generally required to provide transmission line matching and/or to reduce current transients at the driver.

The value of the resistor (typically 10 Ω to 100 Ω) is dependent on the board design and timing requirements. CMOS outputs are also limited in terms of the capacitive load or trace length that they can drive. Typically, trace lengths less than 3 inches are recommended to preserve signal rise/fall times and signal integrity.

Figure 26. Series Termination of CMOS Output

<!-- image -->

Termination at the far end of the PCB trace is a second option. The CMOS outputs of the ADCLK854 do not supply enough current to provide a full voltage swing with a low impedance resistive, far end termination, as shown in Figure 27. The far end termination network should match the PCB trace impedance and provide the desired switching point. The reduced signal swing may still meet receiver input requirements in some applications. This can be useful when driving long trace lengths on less critical networks.

Figure 27. CMOS Output with Far End Termination

<!-- image -->

Because of the limitations of single-ended CMOS clocking, consider using differential outputs when driving high speed signals over long traces. The ADCLK854 offers LVDS outputs that are better suited for driving long traces wherein the inherent noise immunity of differential signaling provides superior performance for clocking converters.

## INPUT TERMINATION OPTIONS

For single-ended operation always bypass unused input to GND, as shown in Figure 31.

Figure 32 illustrates the use of VREF to provide low impedance termination into VS/2. In addition, a way to negate the 30 mV input offset is with external resistor values; for example, using a 1.8 V CMOS with long traces to provide far end termination.

<!-- image -->

Figure 28. Typical AC-Coupled or DC-Coupled LVDS or HSTL Configuration (See Table 8 for More Information)

<!-- image -->

Figure 29. Typical AC-Coupled or DC-Coupled CML Configuration (See Table 8 for CML Coupling Limitations)

<!-- image -->

<!-- image -->

Figure 30. Typical AC-Coupled or DC-Coupled PECL Configuration (See Table 8 for LVPECL DC-Coupling Limitations)

<!-- image -->

<!-- image -->

<!-- image -->

07218-031

Figure 31. Typical 1.8 V CMOS Configurations for Short Trace Lengths (See Table 8 for CMOS Compatibility)

<!-- image -->

Figure 32. Use of VREF to Provide Low Impedance Termination into VS/2

## ADCLK854

## ADCLK854

## OUTLINE DIMENSIONS

PKG-000000

<!-- image -->

## COMPLIANT TO JEDEC STANDARDS MO-220-WKKD-2

Figure 33. 48-Lead Lead Frame Chip Scale Package [LFCSP] 7 mm × 7 mm Body and 0.75 mm Package Height

CP-48-21

Dimensions shown in millimeters

| Model                                             | Temperature Range   | Package Description   | Package Option   |
|---------------------------------------------------|---------------------|-----------------------|------------------|
| ADCLK854BCPZ 1 ADCLK854BCPZ-REEL7 ADCLK854/PCBZ 1 | -40°C to +85°C      | 48-Lead LFCSP         | CP-48-21         |
| 1                                                 | -40°C to +85°C      | 48-Lead LFCSP         | CP-48-21         |
|                                                   |                     | Evaluation Board      |                  |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

<!-- image -->

10-10-2018-A