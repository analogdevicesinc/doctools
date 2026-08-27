<!-- lastmod 2022-07-12 -->
<!-- image -->

## [ADA4099-2BCHIPS](http://www.analog.com/ADA4099-2)

## 50 V, 8 MHz, 1.65 mA per Channel, Robust, Over-The-Top, Precision Op Amp

## FEATURES

- Ultrawide common-mode input range: -15.1 V to +55 V
- Wide power supply voltage operating range: 3.15 V to 50 V
- Low supply current: 1.65 mA per channel
- Low input offset voltage: ±12 µV
- Low offset voltage drift: ±0.1 μV/°C
- Low voltage noise
- 1/f noise corner: 6 Hz
- 150 nV p-p at 0.1 Hz to 10 Hz
- 7 nV/√Hz at 100 Hz (e n )
- High speed
- GBP: 8 MHz
- Slew rate: 5.5 V/µs at ΔV OUT = 25 V
- Low power supply shutdown current: 17 µA per channel
- Low input bias current: ±4 nA
- Large signal voltage gain: 154 dB at ΔV OUT = 25 V
- CMRR: 130 dB at V CM  = -14.75 to +13.25 V
- PSRR: 136 dB
- Input overdrive tolerant with no phase reversal

## APPLICATIONS

- Industrial sensor conditioning
- Supply current sensing
- Battery and power supply monitoring
- Front-end amplifiers in abusive environments

## FUNCTIONAL BLOCK DIAGRAM

Figure 1. Functional Block Diagram

<!-- image -->

## GENERAL DESCRIPTION

The ADA4099-2BCHIPS is a robust, precision, rail-to-rail input and output dual-channel operational amplifier with inputs that operate from -V S to +V S and beyond, which is referred to in this data sheet as Over-The-Top ™ . The device features an offset voltage of ±12 µV, an input bias current (I B ) of ±4 nA, and can operate on supplies that range from 3.15 V to 50 V. The ADA4099-2BCHIPS draws 1.65 mA of supply current per channel.

The ADA4099-2BCHIPS Over-The-Top input stage has robust input protection features for abusive environments. The inputs can tolerate up to 80 V of differential voltage without damage or degradation to dc accuracy. The operating input common-mode range extends from rail-to-rail and beyond, up to 70 V &gt; -V S , independent of the +VS  supply.

The ADA4099-2BCHIPS is unity-gain stable and can drive loads requiring up to 20 mA per channel. The device can also drive capacitive loads as large as 100 pF. The amplifier is available with low power shutdown per channel.

The ADA4099-2BCHIPS is specified at +25°C but is functional over the extended industrial temperature range (-40°C to +125°C). Additional application and technical information can be found in the ADA4099-2 data sheet.

## TABLE OF CONTENTS

| Features................................................................   |   1 |
|----------------------------------------------------------------------------|-----|
| Applications...........................................................    |   1 |
| Functional Block Diagram......................................1            |     |
| General Description...............................................1        |     |
| Specifications........................................................     |   3 |
| Electrical Characteristics-±15 V Supply...........3                        |     |
| Absolute Maximum Ratings...................................5               |     |

## REVISION HISTORY

7/2022-Revision 0: Initial Version ESD Caution.......................................................5

Pin Configuration and Function Descriptions........ 6

Outline Dimensions............................................... 7

Die Specifications and Assembly

Recommendations........................................... 7

Ordering Guide...................................................8

## SPECIFICATIONS

## ELECTRICAL CHARACTERISTICS-±15 V SUPPLY

Common-mode voltage (V CM ) = 0 V, SHDNx pins are open, load resistance (R L ) = 499 kΩ to ground, and T A = 25°C, unless otherwise noted.

Table 1.

| Parameter                                      | Test Conditions/Comments                                                                 | Min        | Typ    | Max        | Unit   |
|------------------------------------------------|------------------------------------------------------------------------------------------|------------|--------|------------|--------|
| DC PERFORMANCE                                 |                                                                                          |            |        |            |        |
| Input Offset Voltage (V OS ) 1                 |                                                                                          |            | ±12    |            | µV     |
|                                                | Power supply voltage (V SY ) = ±25 V                                                     |            | ±15    |            | µV     |
| Input Voltage Offset Drift 2                   | T MIN < T A < T MAX                                                                      |            | ±0.1   |            | µV/°C  |
| Input Bias Current (I B )                      |                                                                                          |            | ±4     |            | nA     |
|                                                | V SY = ±25 V                                                                             |            | ±4     |            | nA     |
| Input Offset Current (I OS )                   |                                                                                          |            | ±2     |            | nA     |
|                                                | V SY = ±25 V                                                                             |            | ±4     |            | nA     |
| Common-Mode Rejection Ratio (CMRR)             | V CM = -14.75 V to +13.25 V                                                              |            | 130    |            | dB     |
|                                                | V CM = -15.1 V to +13.25 V                                                               |            | 126    |            | dB     |
|                                                | V CM = -15.1 V to +55 V                                                                  |            | 126    |            | dB     |
| Common-Mode Input Range                        | Guaranteed by CMRR tests                                                                 | -15.1      |        | +55        | V      |
| Large Signal Voltage Gain (A OL )              | Delta output voltage (ΔV OUT ) = 25 V                                                    |            | 154    |            | dB     |
|                                                | ΔV OUT = 25 V, R L =10 kΩ                                                                |            | 134    |            | dB     |
| NOISE PERFORMANCE                              |                                                                                          |            |        |            |        |
| Input Voltage Noise                            | Frequency = 0.1 Hz to 10 Hz                                                              |            | 150    |            | nV p-p |
|                                                | 1/f noise corner                                                                         |            | 6      |            | Hz     |
|                                                | Frequency = 100 Hz                                                                       |            | 7      |            | nV/√Hz |
| Over-The-Top                                   | Frequency = 100 Hz, V CM > positive supply voltage (+V S )                               |            | 8      |            | nV/√Hz |
| Input Current Noise                            | Frequency =100 Hz                                                                        |            | 0.5    |            | pA/√Hz |
| Over-The-Top                                   | Frequency = 100 Hz, V CM > +V S                                                          |            | 5      |            | pA/√Hz |
| DYNAMIC PERFORMANCE                            |                                                                                          |            |        |            |        |
| Slew Rate                                      | ΔV OUT = 25 V                                                                            |            | 5.5    |            | V/μs   |
| Gain Bandwidth Product (GBP)                   | Test frequency (f TEST ) = 25 kHz                                                        |            | 8      |            | MHz    |
| Phase Margin                                   |                                                                                          |            | 57     |            | deg    |
| 1% Settling Time                               | ΔV OUT = ±2 V                                                                            |            | 1.15   |            | μs     |
| 0.1% Settling Time                             | ΔV OUT = ±2 V                                                                            |            | 1.5    |            | μs     |
| Total Harmonic Distortion plus Noise (THD + N) | Frequency = 10 kHz, output voltage (V OUT ) = 5.6 V p-p, R L = 10 kΩ, bandwidth = 80 kHz |            | 0.001  |            | %      |
| INPUT CHARACTERISTICS                          |                                                                                          |            |        |            |        |
| Input Resistance                               | Differential mode                                                                        |            | 100    |            | kΩ     |
|                                                | Common mode                                                                              |            | >1     |            | GΩ     |
| Input Capacitance                              | Differential mode                                                                        |            | 9      |            | pF     |
|                                                | Common mode                                                                              |            | 3      |            | pF     |
| SHDN1 AND SHDN2 PINS                           |                                                                                          |            |        |            |        |
| Input Logic Low                                | Amplifier active, SHDNx voltage (V SHDN ) < negative supply voltage (-V ) + 0.5 V        |            |        | -V S + 0.5 | V      |
| Input Logic High                               | Amplifier shutdown, V SHDN > -V S + 1.5 V                                                | -V S + 1.5 |        |            | V      |
| Response Time                                  | Amplifier active to shutdown Amplifier shutdown to active                                |            | 2.5 10 |            | μs μs  |
| Pull-Down Current                              |                                                                                          |            |        |            |        |
|                                                | V SHDN = -V S + 0.5 V                                                                    |            | -0.6   |            | µA     |
| OUTPUT CHARACTERISTICS                         | V SHDN = -V S + 1.5 V                                                                    |            | 0.3    |            | µA     |
| Output Voltage Swing Low                       | V OD 3 = 30 mV, no load V OD 3 = 30 mV, sink current (I SINK ) = 10 mA                   |            | 45 260 |            | mV mV  |

## SPECIFICATIONS

Table 1.

| Parameter                                  | Test Conditions/Comments                                           |   Min | Typ       |   Max | Unit     |
|--------------------------------------------|--------------------------------------------------------------------|-------|-----------|-------|----------|
| Output Voltage Swing High                  | V OD 3 = 30 mV, no load                                            |       | 45        |       | mV       |
| Short-Circuit Current                      | V OD 3 = 30 mV, source current (I SOURCE ) = 10 mA I SOURCE I SINK |       | 900 34 50 |       | mV mA mA |
| POWER SUPPLY Maximum Operating Voltage 4   |                                                                    |       |           |    50 | V        |
| Operating Range Supply Current per Channel | Guaranteed by power supply rejection ratio (PSRR)                  |  3.15 |           |    50 | V        |
|                                            | Amplifier active                                                   |       | 1.65      |       | mA       |
|                                            | V SY = ±25 V Amplifier shutdown, V SHDN = -V S + 1.5 V             |       | 1.75 17   |       | mA µA    |
| PSRR                                       |                                                                    |       |           |       |          |
| THERMAL SHUTDOWN 5                         | V SY = 3.15 V to 50 V                                              |       | 136       |       | dB       |
| Hysteresis                                 |                                                                    |       | 20        |       |          |
|                                            |                                                                    |       |           |       | °C       |
| Functional Temperature                     | T A                                                                |   -40 |           |  +125 | °C       |

## ABSOLUTE MAXIMUM RATINGS

| Table 2.                     |                 |
|------------------------------|-----------------|
| Parameter                    | Rating          |
| Supply Voltage 1             |                 |
| Transient                    | 60 V            |
| Continuous                   | 50 V            |
| Differential Input Voltage   | ±80 V           |
| ±INx Pin Voltage             |                 |
| Continuous                   | -5 V to +80 V   |
| Survival                     | -10 V to +80 V  |
| ±INx Pin Current             | 20 mA           |
| SHDNx Pin Voltage            | -0.3 V to +60 V |
| Storage Temperature Range    | -65°C to +150°C |
| Functional Temperature Range | -55°C to +150°C |
| Junction Temperature (T J )  | 175°C           |

1 Maximum supply voltage is limited by the TDDB of on-chip capacitor oxides. The amplifier tolerates temporary transient overshoot up to the specified transient maximum rating. The continuous operating supply voltage must be limited to no more than 50 V.

Stresses at or above those listed under Absolute Maximum Ratings may cause permanent damage to the device. This is a stress rating only; functional operation of the product at these or any other conditions above those indicated in the operational section of this specification is not implied. Operation beyond the maximum operating conditions for extended periods may affect product reliability.

## ESD CAUTION

<!-- image -->

ESD (electrostatic discharge) sensitive device . Charged devices and circuit boards can discharge without detection. Although this product features patented or proprietary protection circuitry, damage may occur on devices subjected to high energy ESD. Therefore, proper ESD precautions should be taken to avoid performance degradation or loss of functionality.

## PIN CONFIGURATION AND FUNCTION DESCRIPTIONS

Figure 2. Pad Configuration

<!-- image -->

Table 3. Pad Function Descriptions 1

| Pad Number   | Mnemonic   |   X Coordinate |   Y Coordinate | Description                                      |
|--------------|------------|----------------|----------------|--------------------------------------------------|
| 1            | V OUT1     |           -386 |           -643 | Output, Channel 1                                |
| 2            | -IN1       |           -001 |           -643 | Inverting Input, Channel 1                       |
| 3            | +IN1       |           -122 |           -643 | Noninverting Input, Channel 1                    |
| 4a           | -V S       |           +837 |           +059 | Negative Supply Voltage (Both Must Be Connected) |
| 4b           | -V S       |           +735 |           -059 | Negative Supply Voltage (Both Must Be Connected) |
| 5            | SHDN1      |          +1022 |           -373 | Shutdown Channel 1                               |
| 6            | SHDN2      |          +1022 |           +373 | Shutdown Channel 2                               |
| 7            | +IN2       |           -001 |           +643 | Noninverting Input, Channel 2                    |
| 8            | -IN2       |           +122 |           +643 | Inverting Input, Channel 2                       |
| 9            | V OUT2     |           -386 |           +643 | Output, Channel 2                                |
| 10a          | +V S       |           -056 |           +070 | Positive Supply Voltage (Both Must Be Connected) |
| 10b          | +V S       |           -056 |           -070 | Positive Supply Voltage (Both Must Be Connected) |

1 All dimensions are referenced from the center of the die to the center of each bond pad.

## OUTLINE DIMENSIONS

Figure 3. 12-Pad Bare Die [CHIP]

<!-- image -->

(C-12-5) Dimensions shown in millimeters

## DIE SPECIFICATIONS AND ASSEMBLY RECOMMENDATIONS

## Die Specifications

## Table 4. Die Specifications

| Parameter            | Value                                          | Unit   |
|----------------------|------------------------------------------------|--------|
| Chip Size            | 1424 × 2186                                    | µm     |
| Scribe Line Width    | 100 × 100                                      | µm     |
| Die Size Maximum     | 1524 × 2286                                    | µm     |
| Thickness            | 304                                            | µm     |
| Backside             | V-                                             | V      |
| Passivation          | 1.1 (doped silicon and polymer)                | µm     |
| Top Coat Thickness   | 32                                             | µm     |
| Bond Pads (Minimum)  | 80 × 80                                        | µm     |
| Bond Pad Composition | 1.0% aluminum silicon (AlSi), 0.5% copper (Cu) | %      |

## Assembly Recommendations

Table 5. Assembly Recommendations

| Assembly Component   | Recommendation   |
|----------------------|------------------|
| Die Attach           | ABLESTIK 8200T   |
| Bonding Method       | 1 mil gold       |
| Bonding Sequence     | Unspecified      |

## OUTLINE DIMENSIONS

## ORDERING GUIDE

| Model 1            | Temperature Range               | Package Description                                        | Package Quantity    | Package Option   |
|--------------------|---------------------------------|------------------------------------------------------------|---------------------|------------------|
| ADA4099-2BCHIPS-WP | -40°C to +125°C -40°C to +125°C | 12-Pad Bare Die [CHIP], Waffle Pack 12-Pad Bare Die [CHIP] |                     | C-12-5           |
| ADA4099-2BCHIPS-PT |                                 |                                                            | Tape and Reel, 3000 | C-12-5           |

<!-- image -->