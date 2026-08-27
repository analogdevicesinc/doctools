<!-- lastmod 2019-05-28 -->
<!-- image -->

## Enhanced Product

## FEATURES

## High speed

80 MHz typical -3 dB bandwidth (G = +1)

1000 V/µs typical slew rate

Ideal for video applications

30 MHz typical 0.1 dB bandwidth (G = +2, VS = ±15 V)

0.02% typical differential gain (VS = ±15 V)

0.04° typical differential phase (VS = ±15 V)

## Low noise

2.9 nV/√Hz typical input voltage noise 13 pA/√Hz typical inverting input current noise

## Low power

8.0 mA maximum supply current (quiescent)

2.1 mA typical supply current (power-down mode)

High performance disable function

Turn off time: 100 ns typical

Break before make guaranteed

Input to output isolation of 64 dB (off state)

Specified for ±5 V and ±15 V operation

## ENHANCED PRODUCT FEATURES

Supports defense and aerospace applications (AQEC standard)

Military temperature range (-55°C to +125°C) Controlled manufacturing baseline 1 assembly/test site 1 fabrication site Product change notification Qualification data available on request

## APPLICATIONS

Multimedia systems ADC or DAC buffers Avionics

Missiles and munitions

## GENERAL DESCRIPTION

The AD810-EP is a composite and HDTV-compatible, current feedback, video operational amplifier, ideal for use in systems such as multimedia, digital tape recorders, and video cameras. The 0.1 dB flatness specification at a bandwidth of 30 MHz (G = +2) and the differential gain and phase of 0.02% and 0.04° (NTSC) make the AD810-EP ideal for any broadcast quality video system. All these specifications are under load conditions of 150 Ω (one 75 Ω back terminated cable).

The AD810-EP is ideal for power sensitive applications such as video cameras, offering a low power supply current of 8.0 mA maximum. The disable feature reduces the power supply current

[Document Feedback](https://form.analog.com/Form_Pages/feedback/documentfeedback.aspx?doc=AD810-EP.pdf&product=AD810-EP&rev=0)

Information  furnished  by  Analog  Devices  is  believed  to  be  accurate  and  reliable.  However ,  no responsibility is assumed by Analog Devices for its use, nor for any infringements of patents or other rights of third parties that may result from its use. Specifications subject to change without notice. No license is granted by implication or otherwise under any patent or patent rights of Analog Devices. Trademarks and registered trademarks are the property of their respective owners.

## Low Power Video Op Amp with Disable

[AD810-EP](https://www.analog.com/ad810?doc=ad810-ep.pdf)

## CONNECTION DIAGRAM

<!-- image -->

to only 2.1 mA, while the amplifier is not in use, to conserve power. Furthermore, the AD810-EP is specified over a power supply range of ±5 V to ±15 V .

The AD810-EP works well as an ADC or DAC buffer in video systems due to its unity gain (G = +1) -3 dB bandwidth of 80 MHz. Because the AD810-EP is a transimpedance amplifier, this bandwidth can be maintained over a wide range of gains while featuring a low noise of 2.9 nV/√Hz for wide dynamic range applications.

Additional application and technical information can be found in the AD810 data sheet.

## [AD810-EP](https://www.analog.com/ad810?doc=ad810-ep.pdf)

## TABLE OF CONTENTS

| Features .............................................................................................. 1   |
|-------------------------------------------------------------------------------------------------------------|
| Enhanced Product Features ............................................................ 1                    |
| Applications....................................................................................... 1       |
| Connection Diagram ....................................................................... 1                |
| General Description......................................................................... 1              |
| Revision History ............................................................................... 2          |
| Specifications..................................................................................... 3       |
| Absolute Maximum Ratings............................................................ 5                      |

## REVISION HISTORY

5/2019-Revision 0: Initial Version

## Enhanced Product

| Thermal Resistance.......................................................................5      |
|-------------------------------------------------------------------------------------------------|
| Maximum Power Dissipation......................................................5                |
| ESD Caution...................................................................................5 |
| Pin Configuration and Function Descriptions..............................6                      |
| Typical Performance Characteristics ..............................................7             |
| Outline Dimensions..........................................................................8   |
| Ordering Guide .............................................................................8   |

## SPECIFICATIONS

TA = 25°C, supply voltage (VS) = ±15 V dc, load resistance (RL) = 150 Ω, unless otherwise noted.

Table 1.

| Parameter                 | Test Conditions/Comments                                                                                           | Min     | Typ     |   Max | Unit          |
|---------------------------|--------------------------------------------------------------------------------------------------------------------|---------|---------|-------|---------------|
| DYNAMIC PERFORMANCE       |                                                                                                                    |         |         |       |               |
| -3 dB Bandwidth           | G = +2, feedback resistor (R F ) = 715 Ω,V S = ±5V                                                                 | 40      | 50      |       | MHz           |
|                           | G = +2, R F = 715 Ω,V S = ±15V                                                                                     | 55      | 75      |       | MHz           |
|                           | G = +1, R F = 1000 Ω,V S = ±15V                                                                                    | 40      | 80      |       | MHz           |
|                           | G = +10, R F = 270 Ω,V S = ±15V                                                                                    | 50      | 65      |       | MHz           |
| 0.1 dB Bandwidth          | G = +2, R F = 715 Ω,V S = ±5V                                                                                      | 13      | 22      |       | MHz           |
|                           | G = +2, R F = 715 Ω,V S = ±15V                                                                                     | 15      | 30      |       | MHz           |
| Full Power Bandwidth      | Output voltage (V OUT ) = 20V p-p R L = 400Ω                                                                       | 8       | 16      |       | MHz           |
| Slew Rate 1               | R L = 150 Ω,V S = ±5V                                                                                              | 175     | 350     |       | V/µs          |
|                           | R L = 400 Ω,V S = ±15V                                                                                             | 500     | 1000    |       | V/µs          |
| Settling Time to 0.1%     | 10V step,G = -1                                                                                                    |         | 50      |       | ns            |
| 0.01%                     |                                                                                                                    |         | 125     |       | ns            |
| Settling Time to          | 10V step,G = -1 f = 3.58 MHz,V S = ±15V                                                                            |         | 0.02    |  0.05 | %             |
| Differential Gain         | f = 3.58 MHz,V S = ±5V                                                                                             |         | 0.04    |  0.07 | %             |
| Differential Phase        | f = 3.58 MHz,V S = ±15V                                                                                            |         | 0.04    |  0.07 | Degrees       |
|                           | f = 3.58 MHz,V S = ±5V                                                                                             |         | 0.045   |  0.08 | Degrees       |
| Total Harmonic Distortion | f = 10 MHz,V OUT = 2V p-p R L = 400 Ω,G = +2                                                                       |         | -61     |       | dBc           |
| INPUT OFFSETVOLTAGE       | V S = ±5V and ±15V                                                                                                 |         | 1.5     |     6 | mV            |
| Offset Voltage Drift      | T MIN to T MAX ,V S = ±5V and ±15V                                                                                 |         | 4 15    |    15 | mV µV/°C      |
| INPUT BIAS CURRENT        |                                                                                                                    |         |         |       |               |
| Negative Input            | T MIN to T MAX ,V S = ±5V and ±15V                                                                                 |         | 0.8     |     5 | µA            |
| Positive Input            | T MIN to T MAX ,V S = ±5V and ±15V                                                                                 |         | 2       |    10 | µA            |
| OPEN-LOOPTRANSRESISTANCE  | T MIN to T MAX V OUT = ±10V, R L = 400 Ω,V S = ±15V V OUT = ±2.5 V, R L = 100 Ω,V S = ±5V                          | 1.0 0.2 | 3.5 1.0 |       | MΩ MΩ         |
| OPEN-LOOP DCVOLTAGE GAIN  | T MIN to T MAX V OUT = ±10V, R L = 400 Ω,V S = ±15V                                                                | 80      | 100     |       | dB            |
|                           | V OUT = ±2.5 V, R L = 100 Ω,V S = ±5V T MIN to T MAX                                                               | 72      | 88      |       | dB            |
| COMMON-MODEREJECTION      |                                                                                                                    |         |         |       |               |
| Offset Voltage (V OS )    | Common-modevoltage(V CM )=±12V,V S = ±15V                                                                          | 56      | 64      |       | dB            |
|                           | V CM = ±2.5 V,V S = ±5V                                                                                            | 50      | 60      |       | dB            |
| Input Bias Current        | T MIN to T MAX ,V S = ±5V and ±15V                                                                                 | -0.4    | 0.1     |  +0.4 | µA/V          |
| POWER SUPPLY REJECTION    |                                                                                                                    |         |         |       |               |
| V OS                      | T MIN to T MAX ,V S = ±4.5V to ±18V                                                                                | 60      | 72      |       | dB            |
| Input Bias Current        | T MIN to T MAX                                                                                                     | -0.3    | 0.05    |  +0.3 | µA/V          |
| INPUTVOLTAGE NOISE        | f = 1 kHz,V S = ±5V and ±15V                                                                                       |         | 2.9     |       | nV/√Hz        |
| INPUT CURRENT NOISE       | Negative input current (-I IN ), f = 1 kHz,V S = ±5V and ±15V Positive input current (+I IN ),f=1kHz,V S = ±5V and |         | 13 1.5  |       | pA/√Hz pA/√Hz |
| INPUT COMMON-MODEVOLTAGE  |                                                                                                                    | ±2.5    | ±3.0    |       | V             |
| RANGE                     | V S = ±5V V S = ±15V                                                                                               | ±12     | ±13     |       | V             |

## [AD810-EP](https://www.analog.com/ad810?doc=ad810-ep.pdf)

## Enhanced Product

| Parameter                              | Test Conditions/Comments                | Min   | Typ                           | Max   | Unit   |
|----------------------------------------|-----------------------------------------|-------|-------------------------------|-------|--------|
| OUTPUT CHARACTERISTICS                 |                                         |       |                               |       |        |
| Output Voltage Swing 2                 | R L = 150 Ω, T MIN to T MAX ,V S = ±5V  | ±2.5  | ±2.9                          |       | V      |
|                                        | R L = 400 Ω,V S = ±15V                  | ±12.5 | ±12.9                         |       | V      |
|                                        | R L = 400 Ω, T MIN to T MAX ,V S = ±15V | ±12   |                               |       | V      |
| Short-Circuit Current                  |                                         |       | 150                           |       | mA     |
| Output Current                         | T MIN to T MAX ,V S = ±5V and ±15V      | 30    | 60                            |       | mA     |
| OUTPUT RESISTANCE                      | Open loop (5 MHz)                       |       | 15                            |       | Ω      |
| INPUT CHARACTERISTICS                  |                                         |       |                               |       |        |
| Input Resistance                       | Positive input                          | 2.5   | 10                            |       | MΩ     |
|                                        | Negative input                          |       | 40                            |       | Ω      |
| Input Capacitance                      | Positive input                          |       | 2                             |       | pF     |
| DISABLE CHARACTERISTICS 3              |                                         |       |                               |       |        |
| Off Isolation                          | f = 5 MHz                               |       | 64                            |       | dB     |
| Off Output Resistance                  | R G is gain resistor                    |       | (R F + R G )&#124;&#124;13 pF |       | Ω      |
| Turn OnTime 4                          | Output impedance (Z OUT ) = low         |       | 170                           |       | ns     |
| Turn Off Time                          | Z OUT = high                            |       | 100                           |       | ns     |
| DISABLE Pin Current                    | DISABLE pin = 0 V,V S = ±5V             |       | 50                            | 75    | µA     |
|                                        | DISABLE pin = 0 V,V S = ±15V            |       | 290                           | 400   | µA     |
| Minimum DISABLE Pin Current to Disable | T MIN to T MAX ,V S = ±5V and ±15V      | 10    | 30                            | 40    | µA     |
| POWER SUPPLY                           |                                         |       |                               |       |        |
| Operating Range                        | 25°C to T MAX                           | ±2.5  |                               | ±18   | V      |
|                                        | T MIN                                   | ±3.5  |                               | ±18   | V      |
| Quiescent Current                      | V S = ±5V                               |       | 6.7                           | 7.5   | mA     |
|                                        | V S = ±15V                              |       | 6.8                           | 8.0   | mA     |
|                                        | T MIN to T MAX ,V S = ±5V and ±15V      |       | 9                             | 11.0  | mA     |
| Power-Down Current                     | V S = ±5V                               |       | 1.8                           | 2.3   | mA     |
|                                        | V S = ±15V                              |       | 2.1                           | 2.8   | mA     |
| TEMPERATURE                            |                                         |       |                               |       |        |
| Operating Range (T MIN to T MAX )      |                                         | -55   |                               | +125  | °C     |

## ABSOLUTE MAXIMUM RATINGS

| Table 2.                                  |                 |
|-------------------------------------------|-----------------|
| Parameter                                 | Rating          |
| Supply Voltage                            | ±18V            |
| Internal Power Dissipation                | See Figure 2    |
| Output Short-Circuit Duration 1           | See Figure 2    |
| Common-Mode Input Voltage                 | ±V S            |
| Differential Input Voltage                | ±6V             |
| Storage Temperature Range                 | -65°C to +150°C |
| Operating Temperature Range               | -55°C to +125°C |
| Junction Temperature                      | 145°C           |
| Lead Temperature Range (Soldering 60 sec) | 300°C           |

1 Internal short-circuit protection may not be sufficient to guarantee that the maximum junction temperature is not exceeded under all conditions.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the product. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## THERMAL RESISTANCE

Thermal performance is directly linked to printed circuit board (PCB) design and operating environment. Careful attention to PCB thermal design is required.

θJA is the natural convection junction to ambient thermal resistance measured in a one-cubic foot sealed enclosure.

Table 3. Thermal Resistance

| PackageType   |   θ JA | Unit   |
|---------------|--------|--------|
| R-8           |    150 | °C/W   |

## MAXIMUM POWER DISSIPATION

The maximum power that can be safely dissipated by the AD810 is limited by the associated rise in junction temperature. To ensure proper operation, it is important to observe the derating curves in Figure 2.

Figure 2. Total Power Dissipation vs. Ambient Temperature

<!-- image -->

## ESD CAUTION

<!-- image -->

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 3. Pin Configuration

<!-- image -->

Table 4. Pin Function Descriptions

| Pin No.   | Mnemonic    | Description                             |
|-----------|-------------|-----------------------------------------|
| 1, 5      | OFFSET NULL | Inverting Input Offset Null Connection. |
| 2         | -IN         | Inverting Input.                        |
| 3         | +IN         | Noninverting Input.                     |
| 4         | -V S        | Negative Supply Voltage.                |
| 6         | OUTPUT      | Output.                                 |
| 7         | +V S        | Positive Supply Voltage.                |
| 8         | DISABLE     | Disable (Active Low).                   |

## TYPICAL PERFORMANCE CHARACTERISTICS

<!-- image -->

Figure 4. Input Bias Current vs. Junction Temperature

<!-- image -->

Figure 5. Supply Current vs. Junction Temperature

<!-- image -->

Figure 6. Input Offset Voltage vs. Junction Temperature

Figure 7. Short-Circuit Current vs. Junction Temperature

<!-- image -->

Figure 8. Output Current vs. Junction Temperature

<!-- image -->

## OUTLINE DIMENSIONS

<!-- image -->

COMPLIANT TO JEDEC STANDARDS MS-012-AA

CONTROLLING DIMENSIONS ARE IN MILLIMETERS; INCH DIMENSIONS (IN PARENTHESES) ARE ROUNDED-OFF MILLIMETER EQUIVALENTS FOR REFERENCE ONLY AND ARE NOT APPROPRIATE FOR USE IN DESIGN.

Figure 9. 8-Lead Standard Small Outline Package [SOIC\_N] Narrow Body (R-8)

Dimensions shown in millimeters and (inches)

| Model 1        | Temperature Range   | Package Description                            | Package Option   |
|----------------|---------------------|------------------------------------------------|------------------|
| AD810TRZ-EP    | -55°C to +125°C     | 8-Lead Standard Small Outline Package [SOIC_N] | R-8              |
| AD810TRZ-EP-RL | -55°C to +125°C     | 8-Lead Standard Small Outline Package [SOIC_N] | R-8              |

## ORDERING GUIDE

1  Z = RoHS Compliant Part.

<!-- image -->

012407-A